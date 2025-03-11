import{R as g,g as v}from"./index-CMHv63WF.js";import"./ods-accordion2-C_uqOg6Y.js";import{d as R}from"./ods-badge-DLluvt0I.js";import"./ods-breadcrumb-item2-C_Ah5FZN.js";import"./ods-button2-dPaqs0uX.js";import{d as _}from"./ods-card-CsxtEQHf.js";import"./ods-checkbox2-CJl-a8ad.js";import"./ods-clipboard2-CewZJu-c.js";import"./ods-code2-BL2TW0HP.js";import"./ods-combobox2-BAtyPzTJ.js";import{p as w,H as k,h as l,a as j}from"./index-DAZhnxgO.js";import{g as L}from"./dom-8hoR-urs.js";import"./ods-datepicker2-CijAhCPy.js";import{d as N}from"./ods-divider-Dtiri0aY.js";import"./ods-drawer2-DKhK7oOX.js";import"./ods-file-upload2-Ca3mZ5BD.js";import"./ods-form-field2-BDYkM6lU.js";import{d as $}from"./ods-icon-DTp5PnPI.js";import{d as S}from"./ods-input-CCQ46ZEm.js";import{d as T}from"./ods-link-BCeMi6SV.js";import"./ods-medium2-BnayTic8.js";import{d as I}from"./ods-message-DuyDaLcv.js";import"./ods-modal2-DCK89o-L.js";import"./ods-pagination2-shUGU0gB.js";import"./ods-password2-D64-z8ym.js";import"./ods-phone-number2-BL58mHzY.js";import"./ods-popover2-mGbx5HiL.js";import"./ods-progress-bar2-Dg_V5kiw.js";import"./ods-quantity2-7U22nj6z.js";import"./ods-radio2-DDJaSdNS.js";import"./ods-range2-wBjnlon-.js";import"./ods-select2-CEKvSxa4.js";import"./ods-skeleton2-B7sDasgF.js";import"./ods-spinner2-CPyWCS2f.js";import"./ods-switch-item2-D-SJNcDd.js";import"./ods-tabs2-ChMEr-fQ.js";import"./ods-table2-oe37kiP3.js";import"./ods-tag2-Bb2BMy9d.js";import{d as P}from"./ods-text-BO_pN8NQ.js";import"./ods-textarea2-BDOVTqwb.js";import"./ods-timepicker2-DVnCnUkw.js";import"./ods-toggle2-Bg02aln1.js";import"./ods-tooltip2-CW12aP9b.js";function D(o,e){var r={};for(var s in o)Object.prototype.hasOwnProperty.call(o,s)&&e.indexOf(s)<0&&(r[s]=o[s]);if(o!=null&&typeof Object.getOwnPropertySymbols=="function")for(var t=0,s=Object.getOwnPropertySymbols(o);t<s.length;t++)e.indexOf(s[t])<0&&Object.prototype.propertyIsEnumerable.call(o,s[t])&&(r[s[t]]=o[s[t]]);return r}const M=o=>o.toLowerCase().split("-").map(e=>e.charAt(0).toUpperCase()+e.slice(1)).join(""),x=o=>o.replace(/([A-Z])/g,e=>`-${e[0].toLowerCase()}`),U=(o,e,r={})=>{if(o instanceof Element){const s=A(o.classList,e,r);s!==""&&(o.className=s),Object.keys(e).forEach(t=>{if(!(t==="children"||t==="style"||t==="ref"||t==="class"||t==="className"||t==="forwardedRef"))if(t.indexOf("on")===0&&t[2]===t[2].toUpperCase()){const d=t.substring(2),n=d[0].toLowerCase()+d.substring(1);E(n)||H(o,n,e[t])}else o[t]=e[t],typeof e[t]==="string"&&o.setAttribute(x(t),e[t])})}},A=(o,e,r)=>{const s=e.className||e.class,t=r.className||r.class,d=h(o),n=h(s?s.split(" "):[]),m=h(t?t.split(" "):[]),a=[];return d.forEach(i=>{n.has(i)?(a.push(i),n.delete(i)):m.has(i)||a.push(i)}),n.forEach(i=>a.push(i)),a.join(" ")},G=o=>{switch(o){case"doubleclick":return"dblclick"}return o};/**
 * Checks if an event is supported in the current execution environment.
 * @license Modernizr 3.0.0pre (Custom Build) | MIT
 */const E=o=>{if(typeof document>"u")return!0;{const e="on"+G(o);let r=e in document;if(!r){const s=document.createElement("div");s.setAttribute(e,"return;"),r=typeof s[e]=="function"}return r}},H=(o,e,r)=>{const s=o.__events||(o.__events={}),t=s[e];t&&o.removeEventListener(e,t),o.addEventListener(e,s[e]=function(n){r&&r.call(this,n)})},h=o=>{const e=new Map;return o.forEach(r=>e.set(r,r)),e},V=(o,e)=>{typeof o=="function"?o(e):o!=null&&(o.current=e)},B=(...o)=>e=>{o.forEach(r=>{V(r,e)})},F=(o,e)=>{const r=(s,t)=>g.createElement(o,Object.assign({},s,{forwardedRef:t}));return r.displayName=e,g.forwardRef(r)},c=(o,e,r,s)=>{s!==void 0&&s();const t=M(o),d=class extends g.Component{constructor(n){super(n),this.setComponentElRef=m=>{this.componentEl=m}}componentDidMount(){this.componentDidUpdate(this.props)}componentDidUpdate(n){U(this.componentEl,this.props,n)}render(){const n=this.props,{children:m,forwardedRef:a,style:i,className:K,ref:Q}=n,y=D(n,["children","forwardedRef","style","className","ref"]);let C=Object.keys(y).reduce((u,p)=>{const b=y[p];if(p.indexOf("on")===0&&p[2]===p[2].toUpperCase()){const f=p.substring(2).toLowerCase();typeof document<"u"&&E(f)&&(u[p]=b)}else{const f=typeof b;(f==="string"||f==="boolean"||f==="number")&&(u[x(p)]=b)}return u},{});const O=Object.assign(Object.assign({},C),{ref:B(a,this.setComponentElRef),style:i});return v.createElement(o,O,m)}static get displayName(){return t}};return F(d,t)},Z=":host(.ods-combobox-item){display:flex;align-items:center;cursor:pointer;padding:0 8px;min-height:32px;color:var(--ods-color-text)}:host(.ods-combobox-item) ::slotted(.ods-combobox-item--highlighted){font-weight:600}:host(.ods-combobox-item:hover),:host(.ods-combobox-item--focused){background-color:var(--ods-color-primary-100)}:host(.ods-combobox-item--hidden){display:none}:host(.ods-combobox-group){display:block}:host(.ods-combobox-group) ::slotted(ods-combobox-item){padding-left:16px}.ods-combobox-group__title{display:flex;align-items:center;padding:0 8px;min-height:32px;color:var(--ods-color-heading);font-weight:600}.ods-combobox-group__title--hidden{display:none}",q=Z,z=w(class extends k{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.internalId=L(),this.isVisible=!1}render(){return l(j,{key:"2ce076fa69d08dda13d2879fb4c35e49cf8d5e85",class:"ods-combobox-group",id:this.el.id||this.internalId},l("div",{key:"590b2acd30dd3c287231f192c20ff5dee001cde7",class:{"ods-combobox-group__title":!0,"ods-combobox-group__title--hidden":!this.isVisible}},l("slot",{key:"6f9564e7e627899331af71fa751b972451e1bcfd",name:"title"})),l("slot",{key:"2acd117b564607d25b466fd7aa0d173ee3793ad1"}))}get el(){return this}static get style(){return q}},[1,"ods-combobox-group",{isVisible:[4,"is-visible"]}]);function J(){if(typeof customElements>"u")return;["ods-combobox-group"].forEach(e=>{switch(e){case"ods-combobox-group":customElements.get(e)||customElements.define(e,z);break}})}J();const Vo=c("ods-badge",void 0,void 0,R),Bo=c("ods-card",void 0,void 0,_),Fo=c("ods-divider",void 0,void 0,N),Zo=c("ods-icon",void 0,void 0,$),qo=c("ods-input",void 0,void 0,S),zo=c("ods-link",void 0,void 0,T),Jo=c("ods-message",void 0,void 0,I),Ko=c("ods-text",void 0,void 0,P);export{Vo as O,zo as a,Zo as b,Ko as c,Jo as d,Fo as e,Bo as f,qo as g};
