import{a0 as rn,E as on}from"./index-D19O3a7h.js";import{x as D,T as ie}from"./lit-html-D-ZEPr28.js";import{V as $t}from"./validityState-ExJ3RVbh.js";import{o as dn,C as v}from"./controls-D697y8_r.js";function Oe(n){return n[n.length-1]}function te(n,...e){return e.forEach(t=>{n.includes(t)||n.push(t)}),n}function Ve(n,e){return n?n.split(e):[]}function xe(n,e,t){const i=e===void 0||n>=e,a=t===void 0||n<=t;return i&&a}function Kt(n,e,t){return n<e?e:n>t?t:n}function A(n,e,t={},i=0,a=""){const s=Object.keys(t).reduce((d,l)=>{let o=t[l];return typeof o=="function"&&(o=o(i)),`${d} ${l}="${o}"`},n);a+=`<${s}></${n}>`;const r=i+1;return r<e?A(n,e,t,r,a):a}function Ce(n){return n.replace(/>\s+/g,">").replace(/\s+</,"<")}function be(n){return new Date(n).setHours(0,0,0,0)}function L(){return new Date().setHours(0,0,0,0)}function R(...n){switch(n.length){case 0:return L();case 1:return be(n[0])}const e=new Date(0);return e.setFullYear(...n),e.setHours(0,0,0,0)}function Q(n,e){const t=new Date(n);return t.setDate(t.getDate()+e)}function ln(n,e){return Q(n,e*7)}function re(n,e){const t=new Date(n),i=t.getMonth()+e;let a=i%12;a<0&&(a+=12);const s=t.setMonth(i);return t.getMonth()!==a?t.setDate(0):s}function ee(n,e){const t=new Date(n),i=t.getMonth(),a=t.setFullYear(t.getFullYear()+e);return i===1&&t.getMonth()===2?t.setDate(0):a}function Ee(n,e){return(n-e+7)%7}function V(n,e,t=0){const i=new Date(n).getDay();return Q(n,Ee(e,t)-Ee(i,t))}function Pt(n,e){return Math.round((n-e)/6048e5)+1}function cn(n){const e=V(n,4,1),t=V(new Date(e).setMonth(0,4),4,1);return Pt(e,t)}function It(n,e){const t=V(new Date(n).setMonth(0,1),e,e),i=V(n,e,e),a=Pt(i,t);if(a<53)return a;const s=V(new Date(n).setDate(32),e,e);return i===s?1:a}function un(n){return It(n,0)}function fn(n){return It(n,6)}function F(n,e){const t=new Date(n).getFullYear();return Math.floor(t/e)*e}function N(n,e,t){if(e!==1&&e!==2)return n;const i=new Date(n);return e===1?t?i.setMonth(i.getMonth()+1,0):i.setDate(1):t?i.setFullYear(i.getFullYear()+1,0,0):i.setMonth(0,1),i.setHours(0,0,0,0)}const ke=/dd?|DD?|mm?|MM?|yy?(?:yy)?/,hn=/[\s!-/:-@[-`{-~年月日]+/;let me={};const Le={y(n,e){return new Date(n).setFullYear(parseInt(e,10))},m(n,e,t){const i=new Date(n);let a=parseInt(e,10)-1;if(isNaN(a)){if(!e)return NaN;const s=e.toLowerCase(),r=d=>d.toLowerCase().startsWith(s);if(a=t.monthsShort.findIndex(r),a<0&&(a=t.months.findIndex(r)),a<0)return NaN}return i.setMonth(a),i.getMonth()!==jt(a)?i.setDate(0):i.getTime()},d(n,e){return new Date(n).setDate(parseInt(e,10))}},mn={d(n){return n.getDate()},dd(n){return ae(n.getDate(),2)},D(n,e){return e.daysShort[n.getDay()]},DD(n,e){return e.days[n.getDay()]},m(n){return n.getMonth()+1},mm(n){return ae(n.getMonth()+1,2)},M(n,e){return e.monthsShort[n.getMonth()]},MM(n,e){return e.months[n.getMonth()]},y(n){return n.getFullYear()},yy(n){return ae(n.getFullYear(),2).slice(-2)},yyyy(n){return ae(n.getFullYear(),4)}};function jt(n){return n>-1?n%12:jt(n+12)}function ae(n,e){return n.toString().padStart(e,"0")}function qt(n){if(typeof n!="string")throw new Error("Invalid date format.");if(n in me)return me[n];const e=n.split(ke),t=n.match(new RegExp(ke,"g"));if(e.length===0||!t)throw new Error("Invalid date format.");const i=t.map(s=>mn[s]),a=Object.keys(Le).reduce((s,r)=>(t.find(l=>l[0]!=="D"&&l[0].toLowerCase()===r)&&s.push(r),s),[]);return me[n]={parser(s,r){const d=s.split(hn).reduce((l,o,u)=>{if(o.length>0&&t[u]){const h=t[u][0];h==="M"?l.m=o:h!=="D"&&(l[h]=o)}return l},{});return a.reduce((l,o)=>{const u=Le[o](l,d[o],r);return isNaN(u)?l:u},L())},formatter(s,r){let d=i.reduce((l,o,u)=>l+=`${e[u]}${o(s,r)}`,"");return d+=Oe(e)}}}function E(n,e,t){if(n instanceof Date||typeof n=="number"){const i=be(n);return isNaN(i)?void 0:i}if(n){if(n==="today")return L();if(e&&e.toValue){const i=e.toValue(n,e,t);return isNaN(i)?void 0:be(i)}return qt(e).parser(n,t)}}function ue(n,e,t){if(isNaN(n)||!n&&n!==0)return"";const i=typeof n=="number"?new Date(n):n;return e.toDisplay?e.toDisplay(i,e,t):qt(e).formatter(i,t)}const pn=document.createRange();function M(n){return pn.createContextualFragment(n)}function Gt(n){return n.parentElement||(n.parentNode instanceof ShadowRoot?n.parentNode.host:void 0)}function fe(n){return n.getRootNode().activeElement===n}function X(n){n.style.display!=="none"&&(n.style.display&&(n.dataset.styleDisplay=n.style.display),n.style.display="none")}function Z(n){n.style.display==="none"&&(n.dataset.styleDisplay?(n.style.display=n.dataset.styleDisplay,delete n.dataset.styleDisplay):n.style.display="")}function oe(n){n.firstChild&&(n.removeChild(n.firstChild),oe(n))}function yn(n,e){oe(n),e instanceof DocumentFragment?n.appendChild(e):typeof e=="string"?n.appendChild(M(e)):typeof e.forEach=="function"&&e.forEach(t=>{n.appendChild(t)})}const de=new WeakMap,{addEventListener:gn,removeEventListener:wn}=EventTarget.prototype;function ve(n,e){let t=de.get(n);t||(t=[],de.set(n,t)),e.forEach(i=>{gn.call(...i),t.push(i)})}function Dn(n){let e=de.get(n);e&&(e.forEach(t=>{wn.call(...t)}),de.delete(n))}if(!Event.prototype.composedPath){const n=(e,t=[])=>{t.push(e);let i;return e.parentNode?i=e.parentNode:e.host?i=e.host:e.defaultView&&(i=e.defaultView),i?n(i,t):t};Event.prototype.composedPath=function(){return n(this.target)}}function zt(n,e,t){const[i,...a]=n;if(e(i))return i;if(!(i===t||i.tagName==="HTML"||a.length===0))return zt(a,e,t)}function Jt(n,e){const t=typeof e=="function"?e:i=>i instanceof Element&&i.matches(e);return zt(n.composedPath(),t,n.currentTarget)}const B={en:{days:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],daysShort:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],daysMin:["Su","Mo","Tu","We","Th","Fr","Sa"],months:["January","February","March","April","May","June","July","August","September","October","November","December"],monthsShort:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],today:"Today",clear:"Clear",titleFormat:"MM y"}},Se={autohide:!1,beforeShowDay:null,beforeShowDecade:null,beforeShowMonth:null,beforeShowYear:null,clearButton:!1,dateDelimiter:",",datesDisabled:[],daysOfWeekDisabled:[],daysOfWeekHighlighted:[],defaultViewDate:void 0,disableTouchKeyboard:!1,enableOnReadonly:!0,format:"mm/dd/yyyy",language:"en",maxDate:null,maxNumberOfDates:1,maxView:3,minDate:null,nextArrow:"»",orientation:"auto",pickLevel:0,prevArrow:"«",showDaysOfWeek:!0,showOnClick:!0,showOnFocus:!0,startView:0,title:"",todayButton:!1,todayButtonMode:0,todayHighlight:!1,updateOnBlur:!0,weekNumbers:0,weekStart:0},{language:pe,format:bn,weekStart:kn}=Se;function Fe(n,e){return n.length<6&&e>=0&&e<7?te(n,e):n}function Ut(n,e){switch(n===4?e===6?3:!e+1:n){case 1:return cn;case 2:return un;case 3:return fn}}function Te(n,e,t){return e.weekStart=n,e.weekEnd=(n+6)%7,t===4&&(e.getWeekNumber=Ut(4,n)),n}function Ae(n,e,t,i){const a=E(n,e,t);return a!==void 0?a:i}function ye(n,e,t=3){const i=parseInt(n,10);return i>=0&&i<=t?i:e}function se(n,e,t,i=void 0){e in n&&(t in n||(n[t]=i?i(n[e]):n[e]),delete n[e])}function ge(n,e){const t=Object.assign({},n),i={},a=e.constructor.locales,s=!!e.rangeSideIndex;let{datesDisabled:r,format:d,language:l,locale:o,maxDate:u,maxView:h,minDate:C,pickLevel:m,startView:g,weekNumbers:f,weekStart:w}=e.config||{};if(se(t,"calendarWeeks","weekNumbers",c=>c?1:0),se(t,"clearBtn","clearButton"),se(t,"todayBtn","todayButton"),se(t,"todayBtnMode","todayButtonMode"),t.language){let c;if(t.language!==l&&(a[t.language]?c=t.language:(c=t.language.split("-")[0],a[c]||(c=!1))),delete t.language,c){l=i.language=c;const p=o||a[pe];o=Object.assign({format:bn,weekStart:kn},a[pe]),l!==pe&&Object.assign(o,a[l]),i.locale=o,d===p.format&&(d=i.format=o.format),w===p.weekStart&&(w=Te(o.weekStart,i,f))}}if(t.format){const c=typeof t.format.toDisplay=="function",p=typeof t.format.toValue=="function",y=ke.test(t.format);(c&&p||y)&&(d=i.format=t.format),delete t.format}let O=m;"pickLevel"in t&&(O=ye(t.pickLevel,m,2),delete t.pickLevel),O!==m&&(O>m&&("minDate"in t||(t.minDate=C),"maxDate"in t||(t.maxDate=u)),r&&!t.datesDisabled&&(t.datesDisabled=[]),m=i.pickLevel=O);let x=C,b=u;if("minDate"in t){const c=R(0,0,1);x=t.minDate===null?c:Ae(t.minDate,d,o,x),x!==c&&(x=N(x,m,!1)),delete t.minDate}if("maxDate"in t&&(b=t.maxDate===null?void 0:Ae(t.maxDate,d,o,b),b!==void 0&&(b=N(b,m,!0)),delete t.maxDate),b<x?(C=i.minDate=b,u=i.maxDate=x):(C!==x&&(C=i.minDate=x),u!==b&&(u=i.maxDate=b)),t.datesDisabled){const c=t.datesDisabled;if(typeof c=="function")i.datesDisabled=null,i.checkDisabled=(p,y)=>c(new Date(p),y,s);else{const p=i.datesDisabled=c.reduce((y,he)=>{const Ne=E(he,d,o);return Ne!==void 0?te(y,N(Ne,m,s)):y},[]);i.checkDisabled=y=>p.includes(y)}delete t.datesDisabled}if("defaultViewDate"in t){const c=E(t.defaultViewDate,d,o);c!==void 0&&(i.defaultViewDate=c),delete t.defaultViewDate}if("weekStart"in t){const c=Number(t.weekStart)%7;isNaN(c)||(w=Te(c,i,f)),delete t.weekStart}if(t.daysOfWeekDisabled&&(i.daysOfWeekDisabled=t.daysOfWeekDisabled.reduce(Fe,[]),delete t.daysOfWeekDisabled),t.daysOfWeekHighlighted&&(i.daysOfWeekHighlighted=t.daysOfWeekHighlighted.reduce(Fe,[]),delete t.daysOfWeekHighlighted),"weekNumbers"in t){let c=t.weekNumbers;if(c){const p=typeof c=="function"?(y,he)=>c(new Date(y),he):Ut(c=parseInt(c,10),w);p&&(f=i.weekNumbers=c,i.getWeekNumber=p)}else f=i.weekNumbers=0,i.getWeekNumber=null;delete t.weekNumbers}if("maxNumberOfDates"in t){const c=parseInt(t.maxNumberOfDates,10);c>=0&&(i.maxNumberOfDates=c,i.multidate=c!==1),delete t.maxNumberOfDates}t.dateDelimiter&&(i.dateDelimiter=String(t.dateDelimiter),delete t.dateDelimiter);let S=h;"maxView"in t&&(S=ye(t.maxView,h),delete t.maxView),S=m>S?m:S,S!==h&&(h=i.maxView=S);let k=g;if("startView"in t&&(k=ye(t.startView,k),delete t.startView),k<m?k=m:k>h&&(k=h),k!==g&&(i.startView=k),t.prevArrow){const c=M(t.prevArrow);c.childNodes.length>0&&(i.prevArrow=c.childNodes),delete t.prevArrow}if(t.nextArrow){const c=M(t.nextArrow);c.childNodes.length>0&&(i.nextArrow=c.childNodes),delete t.nextArrow}if("disableTouchKeyboard"in t&&(i.disableTouchKeyboard="ontouchstart"in document&&!!t.disableTouchKeyboard,delete t.disableTouchKeyboard),t.orientation){const c=t.orientation.toLowerCase().split(/\s+/g);i.orientation={x:c.find(p=>p==="left"||p==="right")||"auto",y:c.find(p=>p==="top"||p==="bottom")||"auto"},delete t.orientation}if("todayButtonMode"in t){switch(t.todayButtonMode){case 0:case 1:i.todayButtonMode=t.todayButtonMode}delete t.todayButtonMode}return Object.entries(t).forEach(([c,p])=>{p!==void 0&&c in Se&&(i[c]=p)}),i}const Re={show:{key:"ArrowDown"},hide:null,toggle:{key:"Escape"},prevButton:{key:"ArrowLeft",ctrlOrMetaKey:!0},nextButton:{key:"ArrowRight",ctrlOrMetaKey:!0},viewSwitch:{key:"ArrowUp",ctrlOrMetaKey:!0},clearButton:{key:"Backspace",ctrlOrMetaKey:!0},todayButton:{key:".",ctrlOrMetaKey:!0},exitEditMode:{key:"ArrowDown",ctrlOrMetaKey:!0}};function vn(n){return Object.keys(Re).reduce((e,t)=>{const i=n[t]===void 0?Re[t]:n[t],a=i&&i.key;if(!a||typeof a!="string")return e;const s={key:a,ctrlOrMetaKey:!!(i.ctrlOrMetaKey||i.ctrlKey||i.metaKey)};return a.length>1&&(s.altKey=!!i.altKey,s.shiftKey=!!i.shiftKey),e[t]=s,e},{})}const Be=n=>n.map(e=>`<button type="button" class="%buttonClass% ${e}" tabindex="-1"></button>`).join(""),On=Ce(`<div class="datepicker">
  <div class="datepicker-picker">
    <div class="datepicker-header">
      <div class="datepicker-title"></div>
      <div class="datepicker-controls">
        ${Be(["prev-button prev-btn","view-switch","next-button next-btn"])}
      </div>
    </div>
    <div class="datepicker-main"></div>
    <div class="datepicker-footer">
      <div class="datepicker-controls">
        ${Be(["today-button today-btn","clear-button clear-btn"])}
      </div>
    </div>
  </div>
</div>`),xn=Ce(`<div class="days">
  <div class="days-of-week">${A("span",7,{class:"dow"})}</div>
  <div class="datepicker-grid">${A("span",42)}</div>
</div>`),Cn=Ce(`<div class="week-numbers calendar-weeks">
  <div class="days-of-week"><span class="dow"></span></div>
  <div class="weeks">${A("span",6,{class:"week"})}</div>
</div>`);class Me{constructor(e,t){Object.assign(this,t,{picker:e,element:M('<div class="datepicker-view"></div>').firstChild,selected:[],isRangeEnd:!!e.datepicker.rangeSideIndex}),this.init(this.picker.datepicker.config)}init(e){"pickLevel"in e&&(this.isMinView=this.id===e.pickLevel),this.setOptions(e),this.updateFocus(),this.updateSelection()}prepareForRender(e,t,i){this.disabled=[];const a=this.picker;a.setViewSwitchLabel(e),a.setPrevButtonDisabled(t),a.setNextButtonDisabled(i)}setDisabled(e,t){t.add("disabled"),te(this.disabled,e)}performBeforeHook(e,t){let i=this.beforeShow(new Date(t));switch(typeof i){case"boolean":i={enabled:i};break;case"string":i={classes:i}}if(i){const a=e.classList;if(i.enabled===!1&&this.setDisabled(t,a),i.classes){const s=i.classes.split(/\s+/);a.add(...s),s.includes("disabled")&&this.setDisabled(t,a)}i.content&&yn(e,i.content)}}renderCell(e,t,i,a,{selected:s,range:r},d,l=[]){e.textContent=t,this.isMinView&&(e.dataset.date=a);const o=e.classList;if(e.className=`datepicker-cell ${this.cellClass}`,i<this.first?o.add("prev"):i>this.last&&o.add("next"),o.add(...l),(d||this.checkDisabled(a,this.id))&&this.setDisabled(a,o),r){const[u,h]=r;i>u&&i<h&&o.add("range"),i===u&&o.add("range-start"),i===h&&o.add("range-end")}s.includes(i)&&o.add("selected"),i===this.focused&&o.add("focused"),this.beforeShow&&this.performBeforeHook(e,a)}refreshCell(e,t,i,[a,s]){const r=e.classList;r.remove("range","range-start","range-end","selected","focused"),t>a&&t<s&&r.add("range"),t===a&&r.add("range-start"),t===s&&r.add("range-end"),i.includes(t)&&r.add("selected"),t===this.focused&&r.add("focused")}changeFocusedCell(e){this.grid.querySelectorAll(".focused").forEach(t=>{t.classList.remove("focused")}),this.grid.children[e].classList.add("focused")}}class Sn extends Me{constructor(e){super(e,{id:0,name:"days",cellClass:"day"})}init(e,t=!0){if(t){const i=M(xn).firstChild;this.dow=i.firstChild,this.grid=i.lastChild,this.element.appendChild(i)}super.init(e)}setOptions(e){let t;if("minDate"in e&&(this.minDate=e.minDate),"maxDate"in e&&(this.maxDate=e.maxDate),e.checkDisabled&&(this.checkDisabled=e.checkDisabled),e.daysOfWeekDisabled&&(this.daysOfWeekDisabled=e.daysOfWeekDisabled,t=!0),e.daysOfWeekHighlighted&&(this.daysOfWeekHighlighted=e.daysOfWeekHighlighted),"todayHighlight"in e&&(this.todayHighlight=e.todayHighlight),"weekStart"in e&&(this.weekStart=e.weekStart,this.weekEnd=e.weekEnd,t=!0),e.locale){const i=this.locale=e.locale;this.dayNames=i.daysMin,this.switchLabelFormat=i.titleFormat,t=!0}if("beforeShowDay"in e&&(this.beforeShow=typeof e.beforeShowDay=="function"?e.beforeShowDay:void 0),"weekNumbers"in e)if(e.weekNumbers&&!this.weekNumbers){const i=M(Cn).firstChild;this.weekNumbers={element:i,dow:i.firstChild,weeks:i.lastChild},this.element.insertBefore(i,this.element.firstChild)}else this.weekNumbers&&!e.weekNumbers&&(this.element.removeChild(this.weekNumbers.element),this.weekNumbers=null);"getWeekNumber"in e&&(this.getWeekNumber=e.getWeekNumber),"showDaysOfWeek"in e&&(e.showDaysOfWeek?(Z(this.dow),this.weekNumbers&&Z(this.weekNumbers.dow)):(X(this.dow),this.weekNumbers&&X(this.weekNumbers.dow))),t&&Array.from(this.dow.children).forEach((i,a)=>{const s=(this.weekStart+a)%7;i.textContent=this.dayNames[s],i.className=this.daysOfWeekDisabled.includes(s)?"dow disabled":"dow"})}updateFocus(){const e=new Date(this.picker.viewDate),t=e.getFullYear(),i=e.getMonth(),a=R(t,i,1),s=V(a,this.weekStart,this.weekStart);this.first=a,this.last=R(t,i+1,0),this.start=s,this.focused=this.picker.viewDate}updateSelection(){const{dates:e,rangepicker:t}=this.picker.datepicker;this.selected=e,t&&(this.range=t.dates)}render(){if(this.today=this.todayHighlight?L():void 0,this.prepareForRender(ue(this.focused,this.switchLabelFormat,this.locale),this.first<=this.minDate,this.last>=this.maxDate),this.weekNumbers){const e=this.weekStart,t=V(this.first,e,e);Array.from(this.weekNumbers.weeks.children).forEach((i,a)=>{const s=ln(t,a);i.textContent=this.getWeekNumber(s,e),a>3&&i.classList[s>this.last?"add":"remove"]("next")})}Array.from(this.grid.children).forEach((e,t)=>{const i=Q(this.start,t),a=new Date(i),s=a.getDay(),r=[];this.today===i&&r.push("today"),this.daysOfWeekHighlighted.includes(s)&&r.push("highlighted"),this.renderCell(e,a.getDate(),i,i,this,i<this.minDate||i>this.maxDate||this.daysOfWeekDisabled.includes(s),r)})}refresh(){const e=this.range||[];Array.from(this.grid.children).forEach(t=>{this.refreshCell(t,Number(t.dataset.date),this.selected,e)})}refreshFocus(){this.changeFocusedCell(Math.round((this.focused-this.start)/864e5))}}function Ye(n,e){if(!n||!n[0]||!n[1])return;const[[t,i],[a,s]]=n;if(!(t>e||a<e))return[t===e?i:-1,a===e?s:12]}class Mn extends Me{constructor(e){super(e,{id:1,name:"months",cellClass:"month"})}init(e,t=!0){t&&(this.grid=this.element,this.element.classList.add("months","datepicker-grid"),this.grid.appendChild(M(A("span",12,{"data-month":i=>i}))),this.first=0,this.last=11),super.init(e)}setOptions(e){if(e.locale&&(this.monthNames=e.locale.monthsShort),"minDate"in e)if(e.minDate===void 0)this.minYear=this.minMonth=this.minDate=void 0;else{const t=new Date(e.minDate);this.minYear=t.getFullYear(),this.minMonth=t.getMonth(),this.minDate=t.setDate(1)}if("maxDate"in e)if(e.maxDate===void 0)this.maxYear=this.maxMonth=this.maxDate=void 0;else{const t=new Date(e.maxDate);this.maxYear=t.getFullYear(),this.maxMonth=t.getMonth(),this.maxDate=R(this.maxYear,this.maxMonth+1,0)}e.checkDisabled&&(this.checkDisabled=this.isMinView||e.datesDisabled===null?e.checkDisabled:()=>!1),"beforeShowMonth"in e&&(this.beforeShow=typeof e.beforeShowMonth=="function"?e.beforeShowMonth:void 0)}updateFocus(){const e=new Date(this.picker.viewDate);this.year=e.getFullYear(),this.focused=e.getMonth()}updateSelection(){const{dates:e,rangepicker:t}=this.picker.datepicker;this.selected=e.reduce((i,a)=>{const s=new Date(a),r=s.getFullYear(),d=s.getMonth();return i[r]===void 0?i[r]=[d]:te(i[r],d),i},{}),t&&t.dates&&(this.range=t.dates.map(i=>{const a=new Date(i);return isNaN(a)?void 0:[a.getFullYear(),a.getMonth()]}))}render(){this.prepareForRender(this.year,this.year<=this.minYear,this.year>=this.maxYear);const e=this.selected[this.year]||[],t=this.year<this.minYear||this.year>this.maxYear,i=this.year===this.minYear,a=this.year===this.maxYear,s=Ye(this.range,this.year);Array.from(this.grid.children).forEach((r,d)=>{const l=N(new Date(this.year,d,1),1,this.isRangeEnd);this.renderCell(r,this.monthNames[d],d,l,{selected:e,range:s},t||i&&d<this.minMonth||a&&d>this.maxMonth)})}refresh(){const e=this.selected[this.year]||[],t=Ye(this.range,this.year)||[];Array.from(this.grid.children).forEach((i,a)=>{this.refreshCell(i,a,e,t)})}refreshFocus(){this.changeFocusedCell(this.focused)}}function Nn(n){return[...n].reduce((e,t,i)=>e+=i?t:t.toUpperCase(),"")}class _e extends Me{constructor(e,t){super(e,t)}init(e,t=!0){t&&(this.navStep=this.step*10,this.beforeShowOption=`beforeShow${Nn(this.cellClass)}`,this.grid=this.element,this.element.classList.add(this.name,"datepicker-grid"),this.grid.appendChild(M(A("span",12)))),super.init(e)}setOptions(e){if("minDate"in e&&(e.minDate===void 0?this.minYear=this.minDate=void 0:(this.minYear=F(e.minDate,this.step),this.minDate=R(this.minYear,0,1))),"maxDate"in e&&(e.maxDate===void 0?this.maxYear=this.maxDate=void 0:(this.maxYear=F(e.maxDate,this.step),this.maxDate=R(this.maxYear,11,31))),e.checkDisabled&&(this.checkDisabled=this.isMinView||e.datesDisabled===null?e.checkDisabled:()=>!1),this.beforeShowOption in e){const t=e[this.beforeShowOption];this.beforeShow=typeof t=="function"?t:void 0}}updateFocus(){const e=new Date(this.picker.viewDate),t=F(e,this.navStep),i=t+9*this.step;this.first=t,this.last=i,this.start=t-this.step,this.focused=F(e,this.step)}updateSelection(){const{dates:e,rangepicker:t}=this.picker.datepicker;this.selected=e.reduce((i,a)=>te(i,F(a,this.step)),[]),t&&t.dates&&(this.range=t.dates.map(i=>{if(i!==void 0)return F(i,this.step)}))}render(){this.prepareForRender(`${this.first}-${this.last}`,this.first<=this.minYear,this.last>=this.maxYear),Array.from(this.grid.children).forEach((e,t)=>{const i=this.start+t*this.step,a=N(new Date(i,0,1),2,this.isRangeEnd);e.dataset.year=i,this.renderCell(e,i,i,a,this,i<this.minYear||i>this.maxYear)})}refresh(){const e=this.range||[];Array.from(this.grid.children).forEach(t=>{this.refreshCell(t,Number(t.textContent),this.selected,e)})}refreshFocus(){this.changeFocusedCell(Math.round((this.focused-this.start)/this.step))}}function T(n,e){const t={bubbles:!0,cancelable:!0,detail:{date:n.getDate(),viewDate:new Date(n.picker.viewDate),viewId:n.picker.currentView.id,datepicker:n}};n.element.dispatchEvent(new CustomEvent(e,t))}function le(n,e){const{config:t,picker:i}=n,{currentView:a,viewDate:s}=i;let r;switch(a.id){case 0:r=re(s,e);break;case 1:r=ee(s,e);break;default:r=ee(s,e*a.navStep)}r=Kt(r,t.minDate,t.maxDate),i.changeFocus(r).render()}function Xt(n){const e=n.picker.currentView.id;e!==n.config.maxView&&n.picker.changeView(e+1).render()}function Zt(n){n.setDate({clear:!0})}function Qt(n){const e=L();n.config.todayButtonMode===1?n.setDate(e,{forceRefresh:!0,viewDate:e}):n.setFocusedDate(e,!0)}function en(n){const e=()=>{n.config.updateOnBlur?n.update({revert:!0}):n.refresh("input"),n.hide()},t=n.element;fe(t)?t.addEventListener("blur",e,{once:!0}):e()}function We(n,e){const t=n.picker,i=new Date(t.viewDate),a=t.currentView.id,s=a===1?re(i,e-i.getMonth()):ee(i,e-i.getFullYear());t.changeFocus(s).changeView(a-1).render()}function Vn(n){Xt(n)}function En(n){le(n,-1)}function Ln(n){le(n,1)}function Fn(n,e){const t=Jt(e,".datepicker-cell");if(!t||t.classList.contains("disabled"))return;const{id:i,isMinView:a}=n.picker.currentView,s=t.dataset;a?n.setDate(Number(s.date)):i===1?We(n,Number(s.month)):We(n,Number(s.year))}function Tn(n){n.preventDefault()}const we=["left","top","right","bottom"].reduce((n,e)=>(n[e]=`datepicker-orient-${e}`,n),{}),He=n=>n&&`${n}px`;function $e(n,e){if("title"in e&&(e.title?(n.controls.title.textContent=e.title,Z(n.controls.title)):(n.controls.title.textContent="",X(n.controls.title))),e.prevArrow){const t=n.controls.prevButton;oe(t),e.prevArrow.forEach(i=>{t.appendChild(i.cloneNode(!0))})}if(e.nextArrow){const t=n.controls.nextButton;oe(t),e.nextArrow.forEach(i=>{t.appendChild(i.cloneNode(!0))})}if(e.locale&&(n.controls.todayButton.textContent=e.locale.today,n.controls.clearButton.textContent=e.locale.clear),"todayButton"in e&&(e.todayButton?Z(n.controls.todayButton):X(n.controls.todayButton)),"minDate"in e||"maxDate"in e){const{minDate:t,maxDate:i}=n.datepicker.config;n.controls.todayButton.disabled=!xe(L(),t,i)}"clearButton"in e&&(e.clearButton?Z(n.controls.clearButton):X(n.controls.clearButton))}function Ke(n){const{dates:e,config:t,rangeSideIndex:i}=n,a=e.length>0?Oe(e):N(t.defaultViewDate,t.pickLevel,i);return Kt(a,t.minDate,t.maxDate)}function Pe(n,e){!("_oldViewDate"in n)&&e!==n.viewDate&&(n._oldViewDate=n.viewDate),n.viewDate=e;const{id:t,year:i,first:a,last:s}=n.currentView,r=new Date(e).getFullYear();switch(t){case 0:return e<a||e>s;case 1:return r!==i;default:return r<a||r>s}}function De(n){return window.getComputedStyle(n).direction}function tn(n){const e=Gt(n);if(!(e===document.body||!e))return window.getComputedStyle(e).overflow!=="visible"?e:tn(e)}class An{constructor(e){const{config:t,inputField:i}=this.datepicker=e,a=On.replace(/%buttonClass%/g,t.buttonClass),s=this.element=M(a).firstChild,[r,d,l]=s.firstChild.children,o=r.firstElementChild,[u,h,C]=r.lastElementChild.children,[m,g]=l.firstChild.children,f={title:o,prevButton:u,viewSwitch:h,nextButton:C,todayButton:m,clearButton:g};this.main=d,this.controls=f;const w=i?"dropdown":"inline";s.classList.add(`datepicker-${w}`),$e(this,t),this.viewDate=Ke(e),ve(e,[[s,"mousedown",Tn],[d,"click",Fn.bind(null,e)],[f.viewSwitch,"click",Vn.bind(null,e)],[f.prevButton,"click",En.bind(null,e)],[f.nextButton,"click",Ln.bind(null,e)],[f.todayButton,"click",Qt.bind(null,e)],[f.clearButton,"click",Zt.bind(null,e)]]),this.views=[new Sn(this),new Mn(this),new _e(this,{id:2,name:"years",cellClass:"year",step:1}),new _e(this,{id:3,name:"decades",cellClass:"decade",step:10})],this.currentView=this.views[t.startView],this.currentView.render(),this.main.appendChild(this.currentView.element),t.container?t.container.appendChild(this.element):i.after(this.element)}setOptions(e){$e(this,e),this.views.forEach(t=>{t.init(e,!1)}),this.currentView.render()}detach(){this.element.remove()}show(){if(this.active)return;const{datepicker:e,element:t}=this,i=e.inputField;if(i){const a=De(i);a!==De(Gt(t))?t.dir=a:t.dir&&t.removeAttribute("dir"),this.place(),t.classList.add("active"),e.config.disableTouchKeyboard&&i.blur()}else t.classList.add("active");this.active=!0,T(e,"show")}hide(){this.active&&(this.datepicker.exitEditMode(),this.element.classList.remove("active"),this.active=!1,T(this.datepicker,"hide"))}place(){const{classList:e,style:t}=this.element;t.display="block";const{width:i,height:a}=this.element.getBoundingClientRect(),s=this.element.offsetParent;t.display="";const{config:r,inputField:d}=this.datepicker,{left:l,top:o,right:u,bottom:h,width:C,height:m}=d.getBoundingClientRect();let{x:g,y:f}=r.orientation,w=l,O=o;if(s===document.body||!s)w+=window.scrollX,O+=window.scrollY;else{const y=s.getBoundingClientRect();w-=y.left-s.scrollLeft,O-=y.top-s.scrollTop}const x=tn(d);let b=0,S=0,{clientWidth:k,clientHeight:c}=document.documentElement;if(x){const y=x.getBoundingClientRect();y.top>0&&(S=y.top),y.left>0&&(b=y.left),y.right<k&&(k=y.right),y.bottom<c&&(c=y.bottom)}let p=0;g==="auto"&&(l<b?(g="left",p=b-l):l+i>k?(g="right",k<u&&(p=k-u)):De(d)==="rtl"?g=u-i<b?"left":"right":g="left"),g==="right"&&(w+=C-i),w+=p,f==="auto"&&(o-a>S?f=h+a>c?"top":"bottom":f="bottom"),f==="top"?O-=a:O+=m,e.remove(...Object.values(we)),e.add(we[g],we[f]),t.left=He(w),t.top=He(O)}setViewSwitchLabel(e){this.controls.viewSwitch.textContent=e}setPrevButtonDisabled(e){this.controls.prevButton.disabled=e}setNextButtonDisabled(e){this.controls.nextButton.disabled=e}changeView(e){const t=this.currentView;return e!==t.id&&(this._oldView||(this._oldView=t),this.currentView=this.views[e],this._renderMethod="render"),this}changeFocus(e){return this._renderMethod=Pe(this,e)?"render":"refreshFocus",this.views.forEach(t=>{t.updateFocus()}),this}update(e=void 0){const t=e===void 0?Ke(this.datepicker):e;return this._renderMethod=Pe(this,t)?"render":"refresh",this.views.forEach(i=>{i.updateFocus(),i.updateSelection()}),this}render(e=!0){const{currentView:t,datepicker:i,_oldView:a}=this,s=new Date(this._oldViewDate),r=e&&this._renderMethod||"render";if(delete this._oldView,delete this._oldViewDate,delete this._renderMethod,t[r](),a&&(this.main.replaceChild(t.element,a.element),T(i,"changeView")),!isNaN(s)){const d=new Date(this.viewDate);d.getFullYear()!==s.getFullYear()&&T(i,"changeYear"),d.getMonth()!==s.getMonth()&&T(i,"changeMonth")}}}function nn(n,e,t,i,a,s){if(xe(n,a,s)){if(i(n)){const r=e(n,t);return nn(r,e,t,i,a,s)}return n}}function Rn(n,e,t){const i=n.picker,a=i.currentView,s=a.step||1;let r=i.viewDate,d;switch(a.id){case 0:r=Q(r,t?e*7:e),d=Q;break;case 1:r=re(r,t?e*4:e),d=re;break;default:r=ee(r,e*(t?4:1)*s),d=ee}r=nn(r,d,e<0?-s:s,l=>a.disabled.includes(l),a.minDate,a.maxDate),r!==void 0&&i.changeFocus(r).render()}function Bn(n,e){const{config:t,picker:i,editMode:a}=n,s=i.active,{key:r,altKey:d,shiftKey:l}=e,o=e.ctrlKey||e.metaKey,u=()=>{e.preventDefault(),e.stopPropagation()};if(r==="Tab"){en(n);return}if(r==="Enter"){if(!s)n.update();else if(a)n.exitEditMode({update:!0,autohide:t.autohide});else{const f=i.currentView;f.isMinView?n.setDate(i.viewDate):(i.changeView(f.id-1).render(),u())}return}const h=t.shortcutKeys,C={key:r,ctrlOrMetaKey:o,altKey:d,shiftKey:l},m=Object.keys(h).find(f=>{const w=h[f];return!Object.keys(w).find(O=>w[O]!==C[O])});if(m){let f;if(m==="toggle"?f=m:a?m==="exitEditMode"&&(f=m):s?m==="hide"?f=m:m==="prevButton"?f=[le,[n,-1]]:m==="nextButton"?f=[le,[n,1]]:m==="viewSwitch"?f=[Xt,[n]]:t.clearButton&&m==="clearButton"?f=[Zt,[n]]:t.todayButton&&m==="todayButton"&&(f=[Qt,[n]]):m==="show"&&(f=m),f){Array.isArray(f)?f[0].apply(null,f[1]):n[f](),u();return}}if(!s||a)return;const g=(f,w)=>{l||o||d?n.enterEditMode():(Rn(n,f,w),e.preventDefault())};r==="ArrowLeft"?g(-1,!1):r==="ArrowRight"?g(1,!1):r==="ArrowUp"?g(-1,!0):r==="ArrowDown"?g(1,!0):(r==="Backspace"||r==="Delete"||r&&r.length===1&&!o)&&n.enterEditMode()}function Yn(n){n.config.showOnFocus&&!n._showing&&n.show()}function _n(n,e){const t=e.target;(n.picker.active||n.config.showOnClick)&&(t._active=fe(t),t._clicking=setTimeout(()=>{delete t._active,delete t._clicking},2e3))}function Wn(n,e){const t=e.target;t._clicking&&(clearTimeout(t._clicking),delete t._clicking,t._active&&n.enterEditMode(),delete t._active,n.config.showOnClick&&n.show())}function Hn(n,e){e.clipboardData.types.includes("text/plain")&&n.enterEditMode()}function $n(n,e){const{element:t,picker:i}=n;if(!i.active&&!fe(t))return;const a=i.element;Jt(e,s=>s===t||s===a)||en(n)}function an(n,e){return n.map(t=>ue(t,e.format,e.locale)).join(e.dateDelimiter)}function sn(n,e,t=!1){if(e.length===0)return t?[]:void 0;const{config:i,dates:a,rangeSideIndex:s}=n,{pickLevel:r,maxNumberOfDates:d}=i;let l=e.reduce((o,u)=>{let h=E(u,i.format,i.locale);return h===void 0||(h=N(h,r,s),xe(h,i.minDate,i.maxDate)&&!o.includes(h)&&!i.checkDisabled(h,r)&&(r>0||!i.daysOfWeekDisabled.includes(new Date(h).getDay()))&&o.push(h)),o},[]);if(l.length!==0)return i.multidate&&!t&&(l=l.reduce((o,u)=>(a.includes(u)||o.push(u),o),a.filter(o=>!l.includes(o)))),d&&l.length>d?l.slice(d*-1):l}function ce(n,e=3,t=!0,i=void 0){const{config:a,picker:s,inputField:r}=n;if(e&2){const d=s.active?a.pickLevel:a.startView;s.update(i).changeView(d).render(t)}e&1&&r&&(r.value=an(n.dates,a))}function Ie(n,e,t){const i=n.config;let{clear:a,render:s,autohide:r,revert:d,forceRefresh:l,viewDate:o}=t;s===void 0&&(s=!0),s?r===void 0&&(r=i.autohide):r=l=!1,o=E(o,i.format,i.locale);const u=sn(n,e,a);!u&&!d||(u&&u.toString()!==n.dates.toString()?(n.dates=u,ce(n,s?3:1,!0,o),T(n,"changeDate")):ce(n,l?3:1,!0,o),r&&n.hide())}function je(n,e){return e?t=>ue(t,e,n.config.locale):t=>new Date(t)}class qe{constructor(e,t={},i=void 0){e.datepicker=this,this.element=e,this.dates=[];const a=this.config=Object.assign({buttonClass:t.buttonClass&&String(t.buttonClass)||"button",container:null,defaultViewDate:L(),maxDate:void 0,minDate:void 0},ge(Se,this));let s;if(e.tagName==="INPUT"?(s=this.inputField=e,s.classList.add("datepicker-input"),t.container&&(a.container=t.container instanceof HTMLElement?t.container:document.querySelector(t.container))):a.container=e,i){const u=i.inputs.indexOf(s),h=i.datepickers;if(u<0||u>1||!Array.isArray(h))throw Error("Invalid rangepicker object.");h[u]=this,this.rangepicker=i,this.rangeSideIndex=u}this._options=t,Object.assign(a,ge(t,this)),a.shortcutKeys=vn(t.shortcutKeys||{});const r=Ve(e.value||e.dataset.date,a.dateDelimiter);delete e.dataset.date;const d=sn(this,r);d&&d.length>0&&(this.dates=d),s&&(s.value=an(this.dates,a));const l=this.picker=new An(this),o=[e,"keydown",Bn.bind(null,this)];s?ve(this,[o,[s,"focus",Yn.bind(null,this)],[s,"mousedown",_n.bind(null,this)],[s,"click",Wn.bind(null,this)],[s,"paste",Hn.bind(null,this)],[document,"mousedown",$n.bind(null,this)],[window,"resize",l.place.bind(l)]]):(ve(this,[o]),this.show())}static formatDate(e,t,i){return ue(e,t,i&&B[i]||B.en)}static parseDate(e,t,i){return E(e,t,i&&B[i]||B.en)}static get locales(){return B}get active(){return!!(this.picker&&this.picker.active)}get pickerElement(){return this.picker?this.picker.element:void 0}setOptions(e){const t=ge(e,this);Object.assign(this._options,e),Object.assign(this.config,t),this.picker.setOptions(t),ce(this,3)}show(){if(this.inputField){const{config:e,inputField:t}=this;if(t.disabled||t.readOnly&&!e.enableOnReadonly)return;!fe(t)&&!e.disableTouchKeyboard&&(this._showing=!0,t.focus(),delete this._showing)}this.picker.show()}hide(){this.inputField&&(this.picker.hide(),this.picker.update().changeView(this.config.startView).render())}toggle(){this.picker.active?this.inputField&&this.picker.hide():this.show()}destroy(){this.hide(),Dn(this),this.picker.detach();const e=this.element;return e.classList.remove("datepicker-input"),delete e.datepicker,this}getDate(e=void 0){const t=je(this,e);if(this.config.multidate)return this.dates.map(t);if(this.dates.length>0)return t(this.dates[0])}setDate(...e){const t=[...e],i={},a=Oe(e);a&&typeof a=="object"&&!Array.isArray(a)&&!(a instanceof Date)&&Object.assign(i,t.pop());const s=Array.isArray(t[0])?t[0]:t;Ie(this,s,i)}update(e=void 0){if(!this.inputField)return;const t=Object.assign(e||{},{clear:!0,render:!0,viewDate:void 0}),i=Ve(this.inputField.value,this.config.dateDelimiter);Ie(this,i,t)}getFocusedDate(e=void 0){return je(this,e)(this.picker.viewDate)}setFocusedDate(e,t=!1){const{config:i,picker:a,active:s,rangeSideIndex:r}=this,d=i.pickLevel,l=E(e,i.format,i.locale);l!==void 0&&(a.changeFocus(N(l,d,r)),s&&t&&a.changeView(d),a.render())}refresh(e=void 0,t=!1){e&&typeof e!="string"&&(t=e,e=void 0);let i;e==="picker"?i=2:e==="input"?i=1:i=3,ce(this,i,!t)}enterEditMode(){const e=this.inputField;!e||e.readOnly||!this.picker.active||this.editMode||(this.editMode=!0,e.classList.add("in-edit"))}exitEditMode(e=void 0){if(!this.inputField||!this.editMode)return;const t=Object.assign({update:!1},e);delete this.editMode,this.inputField.classList.remove("in-edit"),t.update&&this.update(t)}}var Ge=Object.freeze,Kn=Object.defineProperty,ne=(n,e)=>Ge(Kn(n,"raw",{value:Ge(e||n.slice())})),ze,Je,Ue,Xe,Ze;const Pn={title:"ODS Components/Form elements/Datepicker",component:"ods-datepicker",decorators:[n=>D`<div style="height: 320px;">${n()}</div>`]},Y={render:n=>D`
    <ods-datepicker class="my-datepicker"
      aria-label="${n.ariaLabel}"
      aria-labelledby="${n.ariaLabelledby}"
      format="${n.format||ie}"
      has-error="${n.hasError}"
      is-clearable="${n.isClearable}"
      is-disabled="${n.isDisabled}"
      is-loading="${n.isLoading}"
      is-readonly="${n.isReadonly}"
      is-required="${n.isRequired}"
      locale="${n.locale||ie}"
      max="${n.max?qe.formatDate(n.max,n.format||"dd/mm/yyyy"):ie}"
      min="${n.min?qe.formatDate(n.min,n.format||"dd/mm/yyyy"):ie}"
      placeholder="${n.placeholder}">
    </ods-datepicker>
    ${n.validityState?$t("datepicker",".my-datepicker"):""}
    `,argTypes:dn({ariaLabel:{table:{category:v.accessibility,defaultValue:{summary:"ø"},type:{summary:"string"}},control:"text"},ariaLabelledby:{table:{category:v.accessibility,defaultValue:{summary:"ø"},type:{summary:"string"}},control:"text"},format:{table:{category:v.general,defaultValue:{summary:"dd/mm/yyyy"},type:{summary:"string"}},control:"text"},hasError:{table:{category:v.general,defaultValue:{summary:!1},type:{summary:"boolean"}},control:"boolean"},isClearable:{table:{category:v.general,defaultValue:{summary:!1},type:{summary:"boolean"}},control:"boolean"},isDisabled:{table:{category:v.general,defaultValue:{summary:!1},type:{summary:"boolean"}},control:"boolean"},isLoading:{table:{category:v.general,defaultValue:{summary:!1},type:{summary:"boolean"}},control:"boolean"},isReadonly:{table:{category:v.general,defaultValue:{summary:!1},type:{summary:"boolean"}},control:"boolean"},isRequired:{table:{category:v.general,defaultValue:{summary:!1},type:{summary:"boolean"}},control:"boolean"},locale:{table:{category:v.general,defaultValue:{summary:rn.en},type:{summary:"OdsDatepickerLocale"}},control:{type:"select"},options:on},max:{table:{category:v.general,defaultValue:{summary:"ø"},type:{summary:"Date"}},control:"date"},min:{table:{category:v.general,defaultValue:{summary:"ø"},type:{summary:"Date"}},control:"date"},placeholder:{table:{category:v.general,defaultValue:{summary:"ø"},type:{summary:"string"}},control:"text"},validityState:{table:{category:v.validation,defaultValue:{summary:!1},type:{summary:"boolean"}},control:"boolean",description:"Toggle this to see the component validityState"}}),args:{hasError:!1,isClearable:!1,isDisabled:!1,isLoading:!1,isReadonly:!1,isRequired:!1,validityState:!1}},_={tags:["isHidden"],render:()=>D`
<ods-datepicker is-clearable>
</ods-datepicker>
  `},W={tags:["isHidden"],render:()=>D(ze||(ze=ne([`
<ods-datepicker id="datepicker-dates-disabled"></ods-datepicker>
<script>
  (() => {
    const datepicker = document.querySelector('#datepicker-dates-disabled');
    datepicker.datesDisabled = [new Date(Date.now() - 86400000)];
  })();
<\/script>
  `])))},H={tags:["isHidden"],render:()=>D(Je||(Je=ne([`
<ods-datepicker id="datepicker-days-disabled"></ods-datepicker>
<script>
  (() => {
    const datepicker = document.querySelector('#datepicker-days-disabled');
    datepicker.daysOfWeekDisabled = [1, 2];
  })();
<\/script>
  `])))},$={tags:["isHidden"],parameters:{layout:"centered"},render:()=>D(Ue||(Ue=ne([`
<ods-datepicker id="datepicker-overview"></ods-datepicker>
<script>
  (() => {
    const datepicker = document.querySelector('#datepicker-overview');
    datepicker.value = new Date();
  })();
<\/script>
  `])))},K={tags:["isHidden"],render:()=>D`
<ods-datepicker></ods-datepicker>
  `},P={tags:["isHidden"],render:()=>D`
<ods-datepicker is-disabled>
</ods-datepicker>
  `},I={tags:["isHidden"],render:()=>D`
<ods-datepicker has-error>
</ods-datepicker>
  `},j={tags:["isHidden"],render:()=>D(Xe||(Xe=ne([`
<ods-datepicker id="datepicker-format"
                format="yyyy-mm-dd">
</ods-datepicker>
<script>
  (() => {
    const datepicker = document.querySelector('#datepicker-format');
    datepicker.value = new Date();
  })();
<\/script>
  `])))},q={tags:["isHidden"],render:()=>D`
<ods-datepicker is-loading>
</ods-datepicker>
  `},G={tags:["isHidden"],render:()=>D`
<ods-datepicker locale="de">
</ods-datepicker>
  `},z={tags:["isHidden"],render:()=>D`
<ods-datepicker placeholder="Placeholder">
</ods-datepicker>
  `},J={tags:["isHidden"],render:()=>D(Ze||(Ze=ne([`
<ods-datepicker id="datepicker-readonly"
                is-readonly>
</ods-datepicker>
<script>
  (() => {
    const datepicker = document.querySelector('#datepicker-readonly');
    datepicker.value = new Date();
  })();
<\/script>
  `])))},U={tags:["isHidden"],render:()=>D`
<ods-datepicker is-required id="datepicker-validity-state-demo">
</ods-datepicker>
${$t("datepicker","#datepicker-validity-state-demo")}
  `};var Qe,et,tt;Y.parameters={...Y.parameters,docs:{...(Qe=Y.parameters)==null?void 0:Qe.docs,source:{originalSource:`{
  render: arg => {
    return html\`
    <ods-datepicker class="my-datepicker"
      aria-label="\${arg.ariaLabel}"
      aria-labelledby="\${arg.ariaLabelledby}"
      format="\${arg.format || nothing}"
      has-error="\${arg.hasError}"
      is-clearable="\${arg.isClearable}"
      is-disabled="\${arg.isDisabled}"
      is-loading="\${arg.isLoading}"
      is-readonly="\${arg.isReadonly}"
      is-required="\${arg.isRequired}"
      locale="\${arg.locale || nothing}"
      max="\${arg.max ? Datepicker.formatDate(arg.max, arg.format || 'dd/mm/yyyy') : nothing}"
      min="\${arg.min ? Datepicker.formatDate(arg.min, arg.format || 'dd/mm/yyyy') : nothing}"
      placeholder="\${arg.placeholder}">
    </ods-datepicker>
    \${arg.validityState ? ValidityStateTemplate('datepicker', '.my-datepicker') : ''}
    \`;
  },
  argTypes: orderControls({
    ariaLabel: {
      table: {
        category: CONTROL_CATEGORY.accessibility,
        defaultValue: {
          summary: 'ø'
        },
        type: {
          summary: 'string'
        }
      },
      control: 'text'
    },
    ariaLabelledby: {
      table: {
        category: CONTROL_CATEGORY.accessibility,
        defaultValue: {
          summary: 'ø'
        },
        type: {
          summary: 'string'
        }
      },
      control: 'text'
    },
    format: {
      table: {
        category: CONTROL_CATEGORY.general,
        defaultValue: {
          summary: 'dd/mm/yyyy'
        },
        type: {
          summary: 'string'
        }
      },
      control: 'text'
    },
    hasError: {
      table: {
        category: CONTROL_CATEGORY.general,
        defaultValue: {
          summary: false
        },
        type: {
          summary: 'boolean'
        }
      },
      control: 'boolean'
    },
    isClearable: {
      table: {
        category: CONTROL_CATEGORY.general,
        defaultValue: {
          summary: false
        },
        type: {
          summary: 'boolean'
        }
      },
      control: 'boolean'
    },
    isDisabled: {
      table: {
        category: CONTROL_CATEGORY.general,
        defaultValue: {
          summary: false
        },
        type: {
          summary: 'boolean'
        }
      },
      control: 'boolean'
    },
    isLoading: {
      table: {
        category: CONTROL_CATEGORY.general,
        defaultValue: {
          summary: false
        },
        type: {
          summary: 'boolean'
        }
      },
      control: 'boolean'
    },
    isReadonly: {
      table: {
        category: CONTROL_CATEGORY.general,
        defaultValue: {
          summary: false
        },
        type: {
          summary: 'boolean'
        }
      },
      control: 'boolean'
    },
    isRequired: {
      table: {
        category: CONTROL_CATEGORY.general,
        defaultValue: {
          summary: false
        },
        type: {
          summary: 'boolean'
        }
      },
      control: 'boolean'
    },
    locale: {
      table: {
        category: CONTROL_CATEGORY.general,
        defaultValue: {
          summary: ODS_DATEPICKER_LOCALE.en
        },
        type: {
          summary: 'OdsDatepickerLocale'
        }
      },
      control: {
        type: 'select'
      },
      options: ODS_DATEPICKER_LOCALES
    },
    max: {
      table: {
        category: CONTROL_CATEGORY.general,
        defaultValue: {
          summary: 'ø'
        },
        type: {
          summary: 'Date'
        }
      },
      control: 'date'
    },
    min: {
      table: {
        category: CONTROL_CATEGORY.general,
        defaultValue: {
          summary: 'ø'
        },
        type: {
          summary: 'Date'
        }
      },
      control: 'date'
    },
    placeholder: {
      table: {
        category: CONTROL_CATEGORY.general,
        defaultValue: {
          summary: 'ø'
        },
        type: {
          summary: 'string'
        }
      },
      control: 'text'
    },
    validityState: {
      table: {
        category: CONTROL_CATEGORY.validation,
        defaultValue: {
          summary: false
        },
        type: {
          summary: 'boolean'
        }
      },
      control: 'boolean',
      description: 'Toggle this to see the component validityState'
    }
  }),
  args: {
    hasError: false,
    isClearable: false,
    isDisabled: false,
    isLoading: false,
    isReadonly: false,
    isRequired: false,
    validityState: false
  }
}`,...(tt=(et=Y.parameters)==null?void 0:et.docs)==null?void 0:tt.source}}};var nt,it,at;_.parameters={..._.parameters,docs:{...(nt=_.parameters)==null?void 0:nt.docs,source:{originalSource:`{
  tags: ['isHidden'],
  render: () => html\`
<ods-datepicker is-clearable>
</ods-datepicker>
  \`
}`,...(at=(it=_.parameters)==null?void 0:it.docs)==null?void 0:at.source}}};var st,rt,ot;W.parameters={...W.parameters,docs:{...(st=W.parameters)==null?void 0:st.docs,source:{originalSource:`{
  tags: ['isHidden'],
  render: () => html\`
<ods-datepicker id="datepicker-dates-disabled"></ods-datepicker>
<script>
  (() => {
    const datepicker = document.querySelector('#datepicker-dates-disabled');
    datepicker.datesDisabled = [new Date(Date.now() - 86400000)];
  })();
<\/script>
  \`
}`,...(ot=(rt=W.parameters)==null?void 0:rt.docs)==null?void 0:ot.source}}};var dt,lt,ct;H.parameters={...H.parameters,docs:{...(dt=H.parameters)==null?void 0:dt.docs,source:{originalSource:`{
  tags: ['isHidden'],
  render: () => html\`
<ods-datepicker id="datepicker-days-disabled"></ods-datepicker>
<script>
  (() => {
    const datepicker = document.querySelector('#datepicker-days-disabled');
    datepicker.daysOfWeekDisabled = [1, 2];
  })();
<\/script>
  \`
}`,...(ct=(lt=H.parameters)==null?void 0:lt.docs)==null?void 0:ct.source}}};var ut,ft,ht;$.parameters={...$.parameters,docs:{...(ut=$.parameters)==null?void 0:ut.docs,source:{originalSource:`{
  tags: ['isHidden'],
  parameters: {
    layout: 'centered'
  },
  render: () => html\`
<ods-datepicker id="datepicker-overview"></ods-datepicker>
<script>
  (() => {
    const datepicker = document.querySelector('#datepicker-overview');
    datepicker.value = new Date();
  })();
<\/script>
  \`
}`,...(ht=(ft=$.parameters)==null?void 0:ft.docs)==null?void 0:ht.source}}};var mt,pt,yt;K.parameters={...K.parameters,docs:{...(mt=K.parameters)==null?void 0:mt.docs,source:{originalSource:`{
  tags: ['isHidden'],
  render: () => html\`
<ods-datepicker></ods-datepicker>
  \`
}`,...(yt=(pt=K.parameters)==null?void 0:pt.docs)==null?void 0:yt.source}}};var gt,wt,Dt;P.parameters={...P.parameters,docs:{...(gt=P.parameters)==null?void 0:gt.docs,source:{originalSource:`{
  tags: ['isHidden'],
  render: () => html\`
<ods-datepicker is-disabled>
</ods-datepicker>
  \`
}`,...(Dt=(wt=P.parameters)==null?void 0:wt.docs)==null?void 0:Dt.source}}};var bt,kt,vt;I.parameters={...I.parameters,docs:{...(bt=I.parameters)==null?void 0:bt.docs,source:{originalSource:`{
  tags: ['isHidden'],
  render: () => html\`
<ods-datepicker has-error>
</ods-datepicker>
  \`
}`,...(vt=(kt=I.parameters)==null?void 0:kt.docs)==null?void 0:vt.source}}};var Ot,xt,Ct;j.parameters={...j.parameters,docs:{...(Ot=j.parameters)==null?void 0:Ot.docs,source:{originalSource:`{
  tags: ['isHidden'],
  render: () => html\`
<ods-datepicker id="datepicker-format"
                format="yyyy-mm-dd">
</ods-datepicker>
<script>
  (() => {
    const datepicker = document.querySelector('#datepicker-format');
    datepicker.value = new Date();
  })();
<\/script>
  \`
}`,...(Ct=(xt=j.parameters)==null?void 0:xt.docs)==null?void 0:Ct.source}}};var St,Mt,Nt;q.parameters={...q.parameters,docs:{...(St=q.parameters)==null?void 0:St.docs,source:{originalSource:`{
  tags: ['isHidden'],
  render: () => html\`
<ods-datepicker is-loading>
</ods-datepicker>
  \`
}`,...(Nt=(Mt=q.parameters)==null?void 0:Mt.docs)==null?void 0:Nt.source}}};var Vt,Et,Lt;G.parameters={...G.parameters,docs:{...(Vt=G.parameters)==null?void 0:Vt.docs,source:{originalSource:`{
  tags: ['isHidden'],
  render: () => html\`
<ods-datepicker locale="de">
</ods-datepicker>
  \`
}`,...(Lt=(Et=G.parameters)==null?void 0:Et.docs)==null?void 0:Lt.source}}};var Ft,Tt,At;z.parameters={...z.parameters,docs:{...(Ft=z.parameters)==null?void 0:Ft.docs,source:{originalSource:`{
  tags: ['isHidden'],
  render: () => html\`
<ods-datepicker placeholder="Placeholder">
</ods-datepicker>
  \`
}`,...(At=(Tt=z.parameters)==null?void 0:Tt.docs)==null?void 0:At.source}}};var Rt,Bt,Yt;J.parameters={...J.parameters,docs:{...(Rt=J.parameters)==null?void 0:Rt.docs,source:{originalSource:`{
  tags: ['isHidden'],
  render: () => html\`
<ods-datepicker id="datepicker-readonly"
                is-readonly>
</ods-datepicker>
<script>
  (() => {
    const datepicker = document.querySelector('#datepicker-readonly');
    datepicker.value = new Date();
  })();
<\/script>
  \`
}`,...(Yt=(Bt=J.parameters)==null?void 0:Bt.docs)==null?void 0:Yt.source}}};var _t,Wt,Ht;U.parameters={...U.parameters,docs:{...(_t=U.parameters)==null?void 0:_t.docs,source:{originalSource:`{
  tags: ['isHidden'],
  render: () => html\`
<ods-datepicker is-required id="datepicker-validity-state-demo">
</ods-datepicker>
\${ValidityStateTemplate('datepicker', '#datepicker-validity-state-demo')}
  \`
}`,...(Ht=(Wt=U.parameters)==null?void 0:Wt.docs)==null?void 0:Ht.source}}};const In=["Demo","Clearable","DatesDisabled","DaysOfWeekDisabled","Overview","Default","Disabled","Error","Format","Loading","Locale","Placeholder","Readonly","ValidityState"],Jn=Object.freeze(Object.defineProperty({__proto__:null,Clearable:_,DatesDisabled:W,DaysOfWeekDisabled:H,Default:K,Demo:Y,Disabled:P,Error:I,Format:j,Loading:q,Locale:G,Overview:$,Placeholder:z,Readonly:J,ValidityState:U,__namedExportsOrder:In,default:Pn},Symbol.toStringTag,{value:"Module"}));export{_ as C,Jn as D,I as E,j as F,q as L,$ as O,z as P,J as R,U as V,K as a,W as b,H as c,P as d,G as e};
