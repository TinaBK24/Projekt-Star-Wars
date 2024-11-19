(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const i of a)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(a){const i={};return a.integrity&&(i.integrity=a.integrity),a.referrerPolicy&&(i.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?i.credentials="include":a.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(a){if(a.ep)return;a.ep=!0;const i=n(a);fetch(a.href,i)}})();const J=6048e5,ce=864e5,$=Symbol.for("constructDateFrom");function w(t,e){return typeof t=="function"?t(e):t&&typeof t=="object"&&$ in t?t[$](e):t instanceof Date?new t.constructor(e):new Date(e)}function m(t,e){return w(e||t,t)}let ue={};function S(){return ue}function k(t,e){var c,u,d,f;const n=S(),r=(e==null?void 0:e.weekStartsOn)??((u=(c=e==null?void 0:e.locale)==null?void 0:c.options)==null?void 0:u.weekStartsOn)??n.weekStartsOn??((f=(d=n.locale)==null?void 0:d.options)==null?void 0:f.weekStartsOn)??0,a=m(t,e==null?void 0:e.in),i=a.getDay(),o=(i<r?7:0)+i-r;return a.setDate(a.getDate()-o),a.setHours(0,0,0,0),a}function x(t,e){return k(t,{...e,weekStartsOn:1})}function U(t,e){const n=m(t,e==null?void 0:e.in),r=n.getFullYear(),a=w(n,0);a.setFullYear(r+1,0,4),a.setHours(0,0,0,0);const i=x(a),o=w(n,0);o.setFullYear(r,0,4),o.setHours(0,0,0,0);const c=x(o);return n.getTime()>=i.getTime()?r+1:n.getTime()>=c.getTime()?r:r-1}function A(t){const e=m(t),n=new Date(Date.UTC(e.getFullYear(),e.getMonth(),e.getDate(),e.getHours(),e.getMinutes(),e.getSeconds(),e.getMilliseconds()));return n.setUTCFullYear(e.getFullYear()),+t-+n}function de(t,...e){const n=w.bind(null,e.find(r=>typeof r=="object"));return e.map(n)}function R(t,e){const n=m(t,e==null?void 0:e.in);return n.setHours(0,0,0,0),n}function le(t,e,n){const[r,a]=de(n==null?void 0:n.in,t,e),i=R(r),o=R(a),c=+i-A(i),u=+o-A(o);return Math.round((c-u)/ce)}function fe(t,e){const n=U(t,e),r=w(t,0);return r.setFullYear(n,0,4),r.setHours(0,0,0,0),x(r)}function he(t){return t instanceof Date||typeof t=="object"&&Object.prototype.toString.call(t)==="[object Date]"}function me(t){return!(!he(t)&&typeof t!="number"||isNaN(+m(t)))}function ge(t,e){const n=m(t,e==null?void 0:e.in);return n.setFullYear(n.getFullYear(),0,1),n.setHours(0,0,0,0),n}const ye={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}},we=(t,e,n)=>{let r;const a=ye[t];return typeof a=="string"?r=a:e===1?r=a.one:r=a.other.replace("{{count}}",e.toString()),n!=null&&n.addSuffix?n.comparison&&n.comparison>0?"in "+r:r+" ago":r};function Y(t){return(e={})=>{const n=e.width?String(e.width):t.defaultWidth;return t.formats[n]||t.formats[t.defaultWidth]}}const be={full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},Pe={full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},pe={full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},Me={date:Y({formats:be,defaultWidth:"full"}),time:Y({formats:Pe,defaultWidth:"full"}),dateTime:Y({formats:pe,defaultWidth:"full"})},ve={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"},De=(t,e,n,r)=>ve[t];function D(t){return(e,n)=>{const r=n!=null&&n.context?String(n.context):"standalone";let a;if(r==="formatting"&&t.formattingValues){const o=t.defaultFormattingWidth||t.defaultWidth,c=n!=null&&n.width?String(n.width):o;a=t.formattingValues[c]||t.formattingValues[o]}else{const o=t.defaultWidth,c=n!=null&&n.width?String(n.width):t.defaultWidth;a=t.values[c]||t.values[o]}const i=t.argumentCallback?t.argumentCallback(e):e;return a[i]}}const Oe={narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},ke={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},xe={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},Se={narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},We={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},Ee={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},Te=(t,e)=>{const n=Number(t),r=n%100;if(r>20||r<10)switch(r%10){case 1:return n+"st";case 2:return n+"nd";case 3:return n+"rd"}return n+"th"},Ye={ordinalNumber:Te,era:D({values:Oe,defaultWidth:"wide"}),quarter:D({values:ke,defaultWidth:"wide",argumentCallback:t=>t-1}),month:D({values:xe,defaultWidth:"wide"}),day:D({values:Se,defaultWidth:"wide"}),dayPeriod:D({values:We,defaultWidth:"wide",formattingValues:Ee,defaultFormattingWidth:"wide"})};function O(t){return(e,n={})=>{const r=n.width,a=r&&t.matchPatterns[r]||t.matchPatterns[t.defaultMatchWidth],i=e.match(a);if(!i)return null;const o=i[0],c=r&&t.parsePatterns[r]||t.parsePatterns[t.defaultParseWidth],u=Array.isArray(c)?Ce(c,g=>g.test(o)):Le(c,g=>g.test(o));let d;d=t.valueCallback?t.valueCallback(u):u,d=n.valueCallback?n.valueCallback(d):d;const f=e.slice(o.length);return{value:d,rest:f}}}function Le(t,e){for(const n in t)if(Object.prototype.hasOwnProperty.call(t,n)&&e(t[n]))return n}function Ce(t,e){for(let n=0;n<t.length;n++)if(e(t[n]))return n}function Fe(t){return(e,n={})=>{const r=e.match(t.matchPattern);if(!r)return null;const a=r[0],i=e.match(t.parsePattern);if(!i)return null;let o=t.valueCallback?t.valueCallback(i[0]):i[0];o=n.valueCallback?n.valueCallback(o):o;const c=e.slice(a.length);return{value:o,rest:c}}}const Ne=/^(\d+)(th|st|nd|rd)?/i,qe=/\d+/i,He={narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},Be={any:[/^b/i,/^(a|c)/i]},Ie={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},_e={any:[/1/i,/2/i,/3/i,/4/i]},je={narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},$e={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},Ae={narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},Re={narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},Qe={narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},Xe={any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},Ge={ordinalNumber:Fe({matchPattern:Ne,parsePattern:qe,valueCallback:t=>parseInt(t,10)}),era:O({matchPatterns:He,defaultMatchWidth:"wide",parsePatterns:Be,defaultParseWidth:"any"}),quarter:O({matchPatterns:Ie,defaultMatchWidth:"wide",parsePatterns:_e,defaultParseWidth:"any",valueCallback:t=>t+1}),month:O({matchPatterns:je,defaultMatchWidth:"wide",parsePatterns:$e,defaultParseWidth:"any"}),day:O({matchPatterns:Ae,defaultMatchWidth:"wide",parsePatterns:Re,defaultParseWidth:"any"}),dayPeriod:O({matchPatterns:Qe,defaultMatchWidth:"any",parsePatterns:Xe,defaultParseWidth:"any"})},Ve={code:"en-US",formatDistance:we,formatLong:Me,formatRelative:De,localize:Ye,match:Ge,options:{weekStartsOn:0,firstWeekContainsDate:1}};function Je(t,e){const n=m(t,e==null?void 0:e.in);return le(n,ge(n))+1}function Ue(t,e){const n=m(t,e==null?void 0:e.in),r=+x(n)-+fe(n);return Math.round(r/J)+1}function z(t,e){var f,g,M,v;const n=m(t,e==null?void 0:e.in),r=n.getFullYear(),a=S(),i=(e==null?void 0:e.firstWeekContainsDate)??((g=(f=e==null?void 0:e.locale)==null?void 0:f.options)==null?void 0:g.firstWeekContainsDate)??a.firstWeekContainsDate??((v=(M=a.locale)==null?void 0:M.options)==null?void 0:v.firstWeekContainsDate)??1,o=w((e==null?void 0:e.in)||t,0);o.setFullYear(r+1,0,i),o.setHours(0,0,0,0);const c=k(o,e),u=w((e==null?void 0:e.in)||t,0);u.setFullYear(r,0,i),u.setHours(0,0,0,0);const d=k(u,e);return+n>=+c?r+1:+n>=+d?r:r-1}function ze(t,e){var c,u,d,f;const n=S(),r=(e==null?void 0:e.firstWeekContainsDate)??((u=(c=e==null?void 0:e.locale)==null?void 0:c.options)==null?void 0:u.firstWeekContainsDate)??n.firstWeekContainsDate??((f=(d=n.locale)==null?void 0:d.options)==null?void 0:f.firstWeekContainsDate)??1,a=z(t,e),i=w((e==null?void 0:e.in)||t,0);return i.setFullYear(a,0,r),i.setHours(0,0,0,0),k(i,e)}function Ke(t,e){const n=m(t,e==null?void 0:e.in),r=+k(n,e)-+ze(n,e);return Math.round(r/J)+1}function s(t,e){const n=t<0?"-":"",r=Math.abs(t).toString().padStart(e,"0");return n+r}const y={y(t,e){const n=t.getFullYear(),r=n>0?n:1-n;return s(e==="yy"?r%100:r,e.length)},M(t,e){const n=t.getMonth();return e==="M"?String(n+1):s(n+1,2)},d(t,e){return s(t.getDate(),e.length)},a(t,e){const n=t.getHours()/12>=1?"pm":"am";switch(e){case"a":case"aa":return n.toUpperCase();case"aaa":return n;case"aaaaa":return n[0];case"aaaa":default:return n==="am"?"a.m.":"p.m."}},h(t,e){return s(t.getHours()%12||12,e.length)},H(t,e){return s(t.getHours(),e.length)},m(t,e){return s(t.getMinutes(),e.length)},s(t,e){return s(t.getSeconds(),e.length)},S(t,e){const n=e.length,r=t.getMilliseconds(),a=Math.trunc(r*Math.pow(10,n-3));return s(a,e.length)}},p={am:"am",pm:"pm",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},Q={G:function(t,e,n){const r=t.getFullYear()>0?1:0;switch(e){case"G":case"GG":case"GGG":return n.era(r,{width:"abbreviated"});case"GGGGG":return n.era(r,{width:"narrow"});case"GGGG":default:return n.era(r,{width:"wide"})}},y:function(t,e,n){if(e==="yo"){const r=t.getFullYear(),a=r>0?r:1-r;return n.ordinalNumber(a,{unit:"year"})}return y.y(t,e)},Y:function(t,e,n,r){const a=z(t,r),i=a>0?a:1-a;if(e==="YY"){const o=i%100;return s(o,2)}return e==="Yo"?n.ordinalNumber(i,{unit:"year"}):s(i,e.length)},R:function(t,e){const n=U(t);return s(n,e.length)},u:function(t,e){const n=t.getFullYear();return s(n,e.length)},Q:function(t,e,n){const r=Math.ceil((t.getMonth()+1)/3);switch(e){case"Q":return String(r);case"QQ":return s(r,2);case"Qo":return n.ordinalNumber(r,{unit:"quarter"});case"QQQ":return n.quarter(r,{width:"abbreviated",context:"formatting"});case"QQQQQ":return n.quarter(r,{width:"narrow",context:"formatting"});case"QQQQ":default:return n.quarter(r,{width:"wide",context:"formatting"})}},q:function(t,e,n){const r=Math.ceil((t.getMonth()+1)/3);switch(e){case"q":return String(r);case"qq":return s(r,2);case"qo":return n.ordinalNumber(r,{unit:"quarter"});case"qqq":return n.quarter(r,{width:"abbreviated",context:"standalone"});case"qqqqq":return n.quarter(r,{width:"narrow",context:"standalone"});case"qqqq":default:return n.quarter(r,{width:"wide",context:"standalone"})}},M:function(t,e,n){const r=t.getMonth();switch(e){case"M":case"MM":return y.M(t,e);case"Mo":return n.ordinalNumber(r+1,{unit:"month"});case"MMM":return n.month(r,{width:"abbreviated",context:"formatting"});case"MMMMM":return n.month(r,{width:"narrow",context:"formatting"});case"MMMM":default:return n.month(r,{width:"wide",context:"formatting"})}},L:function(t,e,n){const r=t.getMonth();switch(e){case"L":return String(r+1);case"LL":return s(r+1,2);case"Lo":return n.ordinalNumber(r+1,{unit:"month"});case"LLL":return n.month(r,{width:"abbreviated",context:"standalone"});case"LLLLL":return n.month(r,{width:"narrow",context:"standalone"});case"LLLL":default:return n.month(r,{width:"wide",context:"standalone"})}},w:function(t,e,n,r){const a=Ke(t,r);return e==="wo"?n.ordinalNumber(a,{unit:"week"}):s(a,e.length)},I:function(t,e,n){const r=Ue(t);return e==="Io"?n.ordinalNumber(r,{unit:"week"}):s(r,e.length)},d:function(t,e,n){return e==="do"?n.ordinalNumber(t.getDate(),{unit:"date"}):y.d(t,e)},D:function(t,e,n){const r=Je(t);return e==="Do"?n.ordinalNumber(r,{unit:"dayOfYear"}):s(r,e.length)},E:function(t,e,n){const r=t.getDay();switch(e){case"E":case"EE":case"EEE":return n.day(r,{width:"abbreviated",context:"formatting"});case"EEEEE":return n.day(r,{width:"narrow",context:"formatting"});case"EEEEEE":return n.day(r,{width:"short",context:"formatting"});case"EEEE":default:return n.day(r,{width:"wide",context:"formatting"})}},e:function(t,e,n,r){const a=t.getDay(),i=(a-r.weekStartsOn+8)%7||7;switch(e){case"e":return String(i);case"ee":return s(i,2);case"eo":return n.ordinalNumber(i,{unit:"day"});case"eee":return n.day(a,{width:"abbreviated",context:"formatting"});case"eeeee":return n.day(a,{width:"narrow",context:"formatting"});case"eeeeee":return n.day(a,{width:"short",context:"formatting"});case"eeee":default:return n.day(a,{width:"wide",context:"formatting"})}},c:function(t,e,n,r){const a=t.getDay(),i=(a-r.weekStartsOn+8)%7||7;switch(e){case"c":return String(i);case"cc":return s(i,e.length);case"co":return n.ordinalNumber(i,{unit:"day"});case"ccc":return n.day(a,{width:"abbreviated",context:"standalone"});case"ccccc":return n.day(a,{width:"narrow",context:"standalone"});case"cccccc":return n.day(a,{width:"short",context:"standalone"});case"cccc":default:return n.day(a,{width:"wide",context:"standalone"})}},i:function(t,e,n){const r=t.getDay(),a=r===0?7:r;switch(e){case"i":return String(a);case"ii":return s(a,e.length);case"io":return n.ordinalNumber(a,{unit:"day"});case"iii":return n.day(r,{width:"abbreviated",context:"formatting"});case"iiiii":return n.day(r,{width:"narrow",context:"formatting"});case"iiiiii":return n.day(r,{width:"short",context:"formatting"});case"iiii":default:return n.day(r,{width:"wide",context:"formatting"})}},a:function(t,e,n){const a=t.getHours()/12>=1?"pm":"am";switch(e){case"a":case"aa":return n.dayPeriod(a,{width:"abbreviated",context:"formatting"});case"aaa":return n.dayPeriod(a,{width:"abbreviated",context:"formatting"}).toLowerCase();case"aaaaa":return n.dayPeriod(a,{width:"narrow",context:"formatting"});case"aaaa":default:return n.dayPeriod(a,{width:"wide",context:"formatting"})}},b:function(t,e,n){const r=t.getHours();let a;switch(r===12?a=p.noon:r===0?a=p.midnight:a=r/12>=1?"pm":"am",e){case"b":case"bb":return n.dayPeriod(a,{width:"abbreviated",context:"formatting"});case"bbb":return n.dayPeriod(a,{width:"abbreviated",context:"formatting"}).toLowerCase();case"bbbbb":return n.dayPeriod(a,{width:"narrow",context:"formatting"});case"bbbb":default:return n.dayPeriod(a,{width:"wide",context:"formatting"})}},B:function(t,e,n){const r=t.getHours();let a;switch(r>=17?a=p.evening:r>=12?a=p.afternoon:r>=4?a=p.morning:a=p.night,e){case"B":case"BB":case"BBB":return n.dayPeriod(a,{width:"abbreviated",context:"formatting"});case"BBBBB":return n.dayPeriod(a,{width:"narrow",context:"formatting"});case"BBBB":default:return n.dayPeriod(a,{width:"wide",context:"formatting"})}},h:function(t,e,n){if(e==="ho"){let r=t.getHours()%12;return r===0&&(r=12),n.ordinalNumber(r,{unit:"hour"})}return y.h(t,e)},H:function(t,e,n){return e==="Ho"?n.ordinalNumber(t.getHours(),{unit:"hour"}):y.H(t,e)},K:function(t,e,n){const r=t.getHours()%12;return e==="Ko"?n.ordinalNumber(r,{unit:"hour"}):s(r,e.length)},k:function(t,e,n){let r=t.getHours();return r===0&&(r=24),e==="ko"?n.ordinalNumber(r,{unit:"hour"}):s(r,e.length)},m:function(t,e,n){return e==="mo"?n.ordinalNumber(t.getMinutes(),{unit:"minute"}):y.m(t,e)},s:function(t,e,n){return e==="so"?n.ordinalNumber(t.getSeconds(),{unit:"second"}):y.s(t,e)},S:function(t,e){return y.S(t,e)},X:function(t,e,n){const r=t.getTimezoneOffset();if(r===0)return"Z";switch(e){case"X":return G(r);case"XXXX":case"XX":return P(r);case"XXXXX":case"XXX":default:return P(r,":")}},x:function(t,e,n){const r=t.getTimezoneOffset();switch(e){case"x":return G(r);case"xxxx":case"xx":return P(r);case"xxxxx":case"xxx":default:return P(r,":")}},O:function(t,e,n){const r=t.getTimezoneOffset();switch(e){case"O":case"OO":case"OOO":return"GMT"+X(r,":");case"OOOO":default:return"GMT"+P(r,":")}},z:function(t,e,n){const r=t.getTimezoneOffset();switch(e){case"z":case"zz":case"zzz":return"GMT"+X(r,":");case"zzzz":default:return"GMT"+P(r,":")}},t:function(t,e,n){const r=Math.trunc(+t/1e3);return s(r,e.length)},T:function(t,e,n){return s(+t,e.length)}};function X(t,e=""){const n=t>0?"-":"+",r=Math.abs(t),a=Math.trunc(r/60),i=r%60;return i===0?n+String(a):n+String(a)+e+s(i,2)}function G(t,e){return t%60===0?(t>0?"-":"+")+s(Math.abs(t)/60,2):P(t,e)}function P(t,e=""){const n=t>0?"-":"+",r=Math.abs(t),a=s(Math.trunc(r/60),2),i=s(r%60,2);return n+a+e+i}const V=(t,e)=>{switch(t){case"P":return e.date({width:"short"});case"PP":return e.date({width:"medium"});case"PPP":return e.date({width:"long"});case"PPPP":default:return e.date({width:"full"})}},K=(t,e)=>{switch(t){case"p":return e.time({width:"short"});case"pp":return e.time({width:"medium"});case"ppp":return e.time({width:"long"});case"pppp":default:return e.time({width:"full"})}},Ze=(t,e)=>{const n=t.match(/(P+)(p+)?/)||[],r=n[1],a=n[2];if(!a)return V(t,e);let i;switch(r){case"P":i=e.dateTime({width:"short"});break;case"PP":i=e.dateTime({width:"medium"});break;case"PPP":i=e.dateTime({width:"long"});break;case"PPPP":default:i=e.dateTime({width:"full"});break}return i.replace("{{date}}",V(r,e)).replace("{{time}}",K(a,e))},et={p:K,P:Ze},tt=/^D+$/,nt=/^Y+$/,rt=["D","DD","YY","YYYY"];function at(t){return tt.test(t)}function it(t){return nt.test(t)}function ot(t,e,n){const r=st(t,e,n);if(console.warn(r),rt.includes(t))throw new RangeError(r)}function st(t,e,n){const r=t[0]==="Y"?"years":"days of the month";return`Use \`${t.toLowerCase()}\` instead of \`${t}\` (in \`${e}\`) for formatting ${r} to the input \`${n}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`}const ct=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,ut=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,dt=/^'([^]*?)'?$/,lt=/''/g,ft=/[a-zA-Z]/;function I(t,e,n){var f,g,M,v;const r=S(),a=r.locale??Ve,i=r.firstWeekContainsDate??((g=(f=r.locale)==null?void 0:f.options)==null?void 0:g.firstWeekContainsDate)??1,o=r.weekStartsOn??((v=(M=r.locale)==null?void 0:M.options)==null?void 0:v.weekStartsOn)??0,c=m(t,n==null?void 0:n.in);if(!me(c))throw new RangeError("Invalid time value");let u=e.match(ut).map(h=>{const l=h[0];if(l==="p"||l==="P"){const T=et[l];return T(h,a.formatLong)}return h}).join("").match(ct).map(h=>{if(h==="''")return{isToken:!1,value:"'"};const l=h[0];if(l==="'")return{isToken:!1,value:ht(h)};if(Q[l])return{isToken:!0,value:h};if(l.match(ft))throw new RangeError("Format string contains an unescaped latin alphabet character `"+l+"`");return{isToken:!1,value:h}});a.localize.preprocessor&&(u=a.localize.preprocessor(c,u));const d={firstWeekContainsDate:i,weekStartsOn:o,locale:a};return u.map(h=>{if(!h.isToken)return h.value;const l=h.value;(it(l)||at(l))&&ot(l,e,String(t));const T=Q[l[0]];return T(c,l,a.localize,d)}).join("")}function ht(t){const e=t.match(dt);return e?e[1].replace(lt,"'"):t}const _="https://swapi.dev/api/",Z=`${_}/films/`,ee=`${_}/planets/`,te=`${_}/people/`,mt=document.getElementById("searchInput"),L=document.getElementById("searchBtn"),W=document.getElementById("buttonsDiv"),C=document.getElementById("filmsBtn"),F=document.getElementById("planetsBtn"),N=document.getElementById("peopleBtn"),E=document.getElementById("bigButtonsDiv"),q=document.getElementById("filmsBigBtn"),H=document.getElementById("planetsBigBtn"),B=document.getElementById("peopleBigBtn"),b=document.getElementById("outputDisplay");function ne(t){return`
    <h3>${t.title}</h3>
    <p>${t.opening_crawl}</p>
    <p>Director: ${t.director}</p>
    <p>Producer: ${t.producer}</p>
    <p>Created: ${I(t.created,"yyyy-MM-dd")}</p>
  `}async function re(){try{const e=await(await fetch(Z)).json();b.innerHTML="",E.style.display="none",W.style.display="block",e.results.forEach(n=>{const r=document.createElement("div");r.classList.add("filmsDiv"),r.innerHTML=ne(n),b.appendChild(r)})}catch(t){console.error(t)}}C==null||C.addEventListener("click",re);q==null||q.addEventListener("click",re);function ae(t){return`
    <h3>${t.name}</h3>
    <p>Rotation Period: ${t.rotation_period}</p>
    <p>Orbital Period: ${t.orbital_period}</p>
    <p>Diameter: ${t.diameter}</p>
    <p>Climate: ${t.climate}</p>
    <p>Gravity: ${t.gravity}</p>
    <p>Created: ${I(t.created,"yyyy-MM-dd")}</p>
  `}async function ie(){const t=[];let e=ee;try{for(;e;){const r=await(await fetch(e)).json();t.push(...r.results),e=r.next,b.innerHTML="",E.style.display="none",W.style.display="block",t.forEach(a=>{const i=document.createElement("div");i.classList.add("planetsDiv"),i.innerHTML=ae(a),b.appendChild(i)})}}catch(n){console.error(n)}return t.join(", ")}F==null||F.addEventListener("click",ie);H==null||H.addEventListener("click",ie);async function oe(t){try{const e=await Promise.all(t.films.map(async o=>(await(await fetch(o)).json()).title)),a=(await(await fetch(t.homeworld)).json()).name;return`
    <h3>${t.name}</h3>
    <p>Gender: ${t.gender}</p>
    <p>Homeworld: ${a}</p>
    <p>Films: ${e.join(", ")}</p>
    <p>Created: ${I(t.created,"yyyy-MM-dd")}</p>
    `}catch(e){return console.error(e),"error"}}async function se(){const t=[];let e=te;try{for(;e;){const r=await(await fetch(e)).json();t.push(...r.results),e=r.next}b.innerHTML="",E.style.display="none",W.style.display="block";for(const n of t){const r=document.createElement("div");r.classList.add("peopleDiv"),r.innerHTML=await oe(n),b.appendChild(r)}}catch(n){console.error(n)}return t.join(", ")}N==null||N.addEventListener("click",se);B==null||B.addEventListener("click",se);L==null||L.addEventListener("click",async()=>{const t=mt.value.trim().toLowerCase();t?(b.innerHTML="",E.style.display="none",W.style.display="block",await gt(t),await yt(t),await wt(t)):console.log("No query entered")});async function gt(t){try{console.log("Searching in films...");const r=(await(await fetch(Z)).json()).results.filter(a=>a.title.toLowerCase().includes(t)||a.opening_crawl.toLowerCase().includes(t));j("Films",r,ne)}catch(e){console.error(e)}}async function yt(t){try{const r=(await(await fetch(ee)).json()).results.filter(a=>a.name.toLowerCase().includes(t)||a.climate.toLowerCase().includes(t));j("Planets",r,ae)}catch(e){console.error(e)}}async function wt(t){try{const r=(await(await fetch(te)).json()).results.filter(a=>a.name.toLowerCase().includes(t)||a.gender.toLowerCase().includes(t));j("People",r,oe)}catch(e){console.error(e)}}async function j(t,e,n){if(e.length!==0)for(const r of e){const a=document.createElement("div");a.classList.add(`${t.toLowerCase()}Div`);const i=await n(r);a.innerHTML=i,b.appendChild(a)}}
