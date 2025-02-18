import{R as y,g as R}from"./index-CCbL8veO.js";import"./ods-accordion2-C2zw5EtX.js";import{d as v}from"./ods-badge-CMZ1G1-q.js";import"./ods-breadcrumb-item2-Chi8uW7w.js";import"./ods-button2-DJxJiLcj.js";import{d as w}from"./ods-card-CsxtEQHf.js";import"./ods-checkbox2-D1rfq4Wo.js";import"./ods-clipboard2-PjbiunMl.js";import"./ods-code2-CPtqO8K9.js";import"./ods-datepicker2-CHJb_Dii.js";import{d as N}from"./ods-divider-Dtiri0aY.js";import"./ods-drawer2-DKhK7oOX.js";import"./ods-file-upload2-WcWZbv1U.js";import"./ods-form-field2-BDYkM6lU.js";import{d as j}from"./ods-icon-DOZBIEJb.js";import"./ods-input2-BVKbybMU.js";import{d as x}from"./ods-link-C3iAbK8i.js";import"./ods-medium2-BnayTic8.js";import{d as L}from"./ods-message-DErUZ_Xg.js";import"./ods-modal2-CLthqs1m.js";import"./ods-pagination2-CxhEcubt.js";import"./ods-password2-DNFrl9vd.js";import"./ods-phone-number2-qOf9h3xC.js";import"./ods-popover2-D0fTxPry.js";import"./ods-progress-bar2-Dg_V5kiw.js";import"./ods-quantity2-DSK2z9QA.js";import"./ods-radio2-NdDFmobW.js";import"./ods-range2-DVd4LCay.js";import"./ods-select2-D2fKxfqw.js";import"./ods-skeleton2-B7sDasgF.js";import"./ods-spinner2-CPyWCS2f.js";import"./ods-switch-item2-D-SJNcDd.js";import"./ods-tabs2-ChMEr-fQ.js";import"./ods-table2-oe37kiP3.js";import"./ods-tag2-CInySbKk.js";import{d as T}from"./ods-text-BO_pN8NQ.js";import"./ods-textarea2-BJL14TBM.js";import"./ods-timepicker2-4lQj55gq.js";import"./ods-toggle2-BgUL7nI_.js";import"./ods-tooltip2-CW12aP9b.js";function _(e,t){var r={};for(var s in e)Object.prototype.hasOwnProperty.call(e,s)&&t.indexOf(s)<0&&(r[s]=e[s]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,s=Object.getOwnPropertySymbols(e);o<s.length;o++)t.indexOf(s[o])<0&&Object.prototype.propertyIsEnumerable.call(e,s[o])&&(r[s[o]]=e[s[o]]);return r}const $=e=>e.toLowerCase().split("-").map(t=>t.charAt(0).toUpperCase()+t.slice(1)).join(""),C=e=>e.replace(/([A-Z])/g,t=>`-${t[0].toLowerCase()}`),k=(e,t,r={})=>{if(e instanceof Element){const s=P(e.classList,t,r);s!==""&&(e.className=s),Object.keys(t).forEach(o=>{if(!(o==="children"||o==="style"||o==="ref"||o==="class"||o==="className"||o==="forwardedRef"))if(o.indexOf("on")===0&&o[2]===o[2].toUpperCase()){const c=o.substring(2),n=c[0].toLowerCase()+c.substring(1);O(n)||D(e,n,t[o])}else e[o]=t[o],typeof t[o]==="string"&&e.setAttribute(C(o),t[o])})}},P=(e,t,r)=>{const s=t.className||t.class,o=r.className||r.class,c=h(e),n=h(s?s.split(" "):[]),f=h(o?o.split(" "):[]),a=[];return c.forEach(i=>{n.has(i)?(a.push(i),n.delete(i)):f.has(i)||a.push(i)}),n.forEach(i=>a.push(i)),a.join(" ")},S=e=>{switch(e){case"doubleclick":return"dblclick"}return e};/**
 * Checks if an event is supported in the current execution environment.
 * @license Modernizr 3.0.0pre (Custom Build) | MIT
 */const O=e=>{if(typeof document>"u")return!0;{const t="on"+S(e);let r=t in document;if(!r){const s=document.createElement("div");s.setAttribute(t,"return;"),r=typeof s[t]=="function"}return r}},D=(e,t,r)=>{const s=e.__events||(e.__events={}),o=s[t];o&&e.removeEventListener(t,o),e.addEventListener(t,s[t]=function(n){r&&r.call(this,n)})},h=e=>{const t=new Map;return e.forEach(r=>t.set(r,r)),t},U=(e,t)=>{typeof e=="function"?e(t):e!=null&&(e.current=t)},A=(...e)=>t=>{e.forEach(r=>{U(r,t)})},M=(e,t)=>{const r=(s,o)=>y.createElement(e,Object.assign({},s,{forwardedRef:o}));return r.displayName=t,y.forwardRef(r)},d=(e,t,r,s)=>{s!==void 0&&s();const o=$(e),c=class extends y.Component{constructor(n){super(n),this.setComponentElRef=f=>{this.componentEl=f}}componentDidMount(){this.componentDidUpdate(this.props)}componentDidUpdate(n){k(this.componentEl,this.props,n)}render(){const n=this.props,{children:f,forwardedRef:a,style:i,className:B,ref:F}=n,E=_(n,["children","forwardedRef","style","className","ref"]);let b=Object.keys(E).reduce((l,p)=>{const u=E[p];if(p.indexOf("on")===0&&p[2]===p[2].toUpperCase()){const m=p.substring(2).toLowerCase();typeof document<"u"&&O(m)&&(l[p]=u)}else{const m=typeof u;(m==="string"||m==="boolean"||m==="number")&&(l[C(p)]=u)}return l},{});const g=Object.assign(Object.assign({},b),{ref:A(a,this.setComponentElRef),style:i});return R.createElement(e,g,f)}static get displayName(){return o}};return M(c,o)},xe=d("ods-badge",void 0,void 0,v),Le=d("ods-card",void 0,void 0,w),Te=d("ods-divider",void 0,void 0,N),_e=d("ods-icon",void 0,void 0,j),$e=d("ods-link",void 0,void 0,x),ke=d("ods-message",void 0,void 0,L),Pe=d("ods-text",void 0,void 0,T);export{xe as O,$e as a,Pe as b,_e as c,ke as d,Te as e,Le as f};
