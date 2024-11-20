import './style.css'
import {format} from 'date-fns'

import { IFilmResult } from './contrscts/IFilm'
import { IPlanetResult } from './contrscts/IPlanet'
import { IPeopleResult } from './contrscts/IPeople'

const BASE_URL = "https://swapi.dev/api/";
const FILMS_URL = `${BASE_URL}/films/`
const PLANETS_URL = `${BASE_URL}/planets/`
const PEOPLE_URL = `${BASE_URL}/people/`

const searchInput = document.getElementById('searchInput') as HTMLInputElement;
const searchBtn = document.getElementById('searchBtn') as HTMLInputElement;

const buttonsDiv = document.getElementById('buttonsDiv') as HTMLDivElement;
const filmsBtn = document.getElementById('filmsBtn') as HTMLButtonElement;
const planetsBtn = document.getElementById('planetsBtn') as HTMLButtonElement;
const peopleBtn = document.getElementById('peopleBtn') as HTMLButtonElement;

const bigButtonsDiv = document.getElementById('bigButtonsDiv') as HTMLDivElement;
const filmsBigBtn = document.getElementById('filmsBigBtn') as HTMLButtonElement;
const planetsBigBtn = document.getElementById('planetsBigBtn') as HTMLButtonElement;
const peopleBigBtn = document.getElementById('peopleBigBtn') as HTMLButtonElement;

const outputDisplay = document.getElementById('outputDisplay') as HTMLDivElement;




//- ------------------ Films ------------------

function displayFilms (film: IFilmResult): string{
  const resultAsString = `
    <h3>${film.title}</h3>
    <p>${film.opening_crawl}</p>
    <p>Director: ${film.director}</p>
    <p>Producer: ${film.producer}</p>
    <p>Created: ${format(film.created, "yyyy-MM-dd")}</p>
  `

  return resultAsString
}

async function fetchAllFilms() {
  try{
    const response: Response = await fetch(FILMS_URL);
    const filmsData = await response.json();

    outputDisplay.innerHTML = "";
    bigButtonsDiv.style.display = "none";
    buttonsDiv.style.display = "block";

    filmsData.results.forEach((filmResult: IFilmResult) => {
      const filmsDiv = document.createElement('div') as HTMLDivElement;
      filmsDiv.classList.add('filmsDiv');
      filmsDiv.innerHTML = displayFilms(filmResult);
      outputDisplay.appendChild(filmsDiv)
    })

  } catch (error){
    console.error(error);
    
  }
}
filmsBtn?.addEventListener('click', fetchAllFilms);
filmsBigBtn?.addEventListener('click', fetchAllFilms);

//- ------------------ Planets ------------------

function displayPlanets(planet: IPlanetResult): string{
  const resultAsString = `
    <h3>${planet.name}</h3>
    <p>Rotation Period: ${planet.rotation_period}</p>
    <p>Orbital Period: ${planet.orbital_period}</p>
    <p>Diameter: ${planet.diameter}</p>
    <p>Climate: ${planet.climate}</p>
    <p>Gravity: ${planet.gravity}</p>
    <p>Created: ${format(planet.created, "yyyy-MM-dd")}</p>
  `

  return resultAsString
}

async function fetchAllPlanets(): Promise<string> {
  const allPlanets: IPlanetResult[] = [];
  let nextUrl: string | null = PLANETS_URL;
  try{
    while(nextUrl){
      const response: Response = await fetch(nextUrl);
      const planetsData = await response.json();

      allPlanets.push(...planetsData.results);
      nextUrl = planetsData.next;
      
      outputDisplay.innerHTML = "";
      bigButtonsDiv.style.display = "none";
      buttonsDiv.style.display = "block";

      allPlanets.forEach(planet => {
        const planetsDiv = document.createElement('div') as HTMLDivElement;
        planetsDiv.classList.add('planetsDiv');
        planetsDiv.innerHTML = displayPlanets(planet);
        outputDisplay.appendChild(planetsDiv)
      })
    }
  } catch (error){
    console.error(error);
    
  }
  return allPlanets.join(", ")
}
planetsBtn?.addEventListener('click', fetchAllPlanets);
planetsBigBtn?.addEventListener('click', fetchAllPlanets);

//- ------------------ People ------------------

async function displayPeople(people: IPeopleResult): Promise<string>{
  try{
    const filmArray = await Promise.all(
      people.films.map(async (filmUrl: string) => {
        const response = await fetch(filmUrl);
        const filmData = await response.json();
        return filmData.title;
      })
    );
    
    const homeworldResponse = await fetch(people.homeworld);
    const homeworldData = await homeworldResponse.json();
    const homeworldName = homeworldData.name;
    
    const resultAsString = `
    <h3>${people.name}</h3>
    <p>Gender: ${people.gender}</p>
    <p>Homeworld: ${homeworldName}</p>
    <p>Films: ${filmArray.join(", ")}</p>
    <p>Created: ${format(people.created, "yyyy-MM-dd")}</p>
    `

    return resultAsString

    } catch (error){
      console.error(error);
      return "error"
    }
}

async function fetchAllPeople(): Promise<string> {
  const allPeople: IPeopleResult[] = [];
  let nextUrl: string | null = PEOPLE_URL;
  
  try{
    while(nextUrl){
      const response: Response = await fetch(nextUrl);
      const peopleData = await response.json();
      
      allPeople.push(...peopleData.results);
      nextUrl = peopleData.next;
    }

    outputDisplay.innerHTML = "";
    bigButtonsDiv.style.display = "none";
    buttonsDiv.style.display = "block";

    for (const person of allPeople) {
      const peopleDiv = document.createElement('div') as HTMLDivElement;
      peopleDiv.classList.add('peopleDiv');
      peopleDiv.innerHTML = await displayPeople(person);
      outputDisplay.appendChild(peopleDiv)
    }
  } catch (error){
    console.error(error);
    
  }
  return allPeople.join(", ")
}
peopleBtn?.addEventListener('click', fetchAllPeople);
peopleBigBtn?.addEventListener('click', fetchAllPeople);

//- ------------------ searchBtn ------------------

searchBtn?.addEventListener('click', async () => {
  const query = searchInput.value.trim().toLowerCase();

  if (query) {
    outputDisplay.innerHTML = "";
    bigButtonsDiv.style.display = "none";
    buttonsDiv.style.display = "block";

    await searchInFilms(query);
    await searchInPlanets(query);
    await searchInPeople(query);
    
  } else {
    console.log("No query entered");
  }
});

async function searchInFilms(query: string) {
  try {
    console.log("Searching in films...");
    const response: Response = await fetch(FILMS_URL);
    const filmsData = await response.json();

    const filteredFilms = filmsData.results.filter((film: IFilmResult) =>
      (film.title.toLowerCase().includes(query) || film.opening_crawl.toLowerCase().includes(query))
    );

    displaySearchResults("Films", filteredFilms, displayFilms);
  } catch (error) {
    console.error(error);
  }
}

async function searchInPlanets(query: string) {
  try {
    const response: Response = await fetch(PLANETS_URL);
    const planetsData = await response.json();

    const filteredPlanets = planetsData.results.filter((planet: IPlanetResult) =>
      (planet.name.toLowerCase().includes(query) || planet.climate.toLowerCase().includes(query))
    );

    displaySearchResults("Planets", filteredPlanets, displayPlanets);
  } catch (error) {
    console.error(error);
  }
}

async function searchInPeople(query: string) {
  try {
    const response: Response = await fetch(PEOPLE_URL);
    const peopleData = await response.json();

    const filteredPeople = peopleData.results.filter((person: IPeopleResult) =>
      (person.name.toLowerCase().includes(query) || person.gender.toLowerCase().includes(query))
    );

    displaySearchResults("People", filteredPeople, displayPeople);
  } catch (error) {
    console.error(error);
  }
}

async function displaySearchResults<T>(category: string, results: T[], displayFunc: (result: T) => string | Promise<string>) {

  if (results.length !== 0) {

    for (const result of results) {
      const resultDiv = document.createElement('div') as HTMLDivElement;
      resultDiv.classList.add(`${category.toLowerCase()}Div`);
      const resultHtml = await displayFunc(result);
      resultDiv.innerHTML = resultHtml;
      outputDisplay.appendChild(resultDiv);
    }
  }
}