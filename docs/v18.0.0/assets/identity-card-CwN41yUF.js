import{k as y}from"./index-DryTTbHl.js";import{R as o,r as k}from"./index-BM3JsZOq.js";import{d as R}from"./ods-toggle2-LnXcgd5r.js";import{n as N}from"./chunk-FAE4I7JY-v0Th3BC0.js";function L(e,t){var n={};for(var s in e)Object.prototype.hasOwnProperty.call(e,s)&&t.indexOf(s)<0&&(n[s]=e[s]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,s=Object.getOwnPropertySymbols(e);r<s.length;r++)t.indexOf(s[r])<0&&Object.prototype.propertyIsEnumerable.call(e,s[r])&&(n[s[r]]=e[s[r]]);return n}const j=e=>e.toLowerCase().split("-").map(t=>t.charAt(0).toUpperCase()+t.slice(1)).join(""),w=e=>e.replace(/([A-Z])/g,t=>`-${t[0].toLowerCase()}`),C=(e,t,n={})=>{if(e instanceof Element){const s=x(e.classList,t,n);s!==""&&(e.className=s),Object.keys(t).forEach(r=>{if(!(r==="children"||r==="style"||r==="ref"||r==="class"||r==="className"||r==="forwardedRef"))if(r.indexOf("on")===0&&r[2]===r[2].toUpperCase()){const a=r.substring(2),c=a[0].toLowerCase()+a.substring(1);v(c)||_(e,c,t[r])}else e[r]=t[r],typeof t[r]==="string"&&e.setAttribute(w(r),t[r])})}},x=(e,t,n)=>{const s=t.className||t.class,r=n.className||n.class,a=b(e),c=b(s?s.split(" "):[]),i=b(r?r.split(" "):[]),p=[];return a.forEach(l=>{c.has(l)?(p.push(l),c.delete(l)):i.has(l)||p.push(l)}),c.forEach(l=>p.push(l)),p.join(" ")},D=e=>{switch(e){case"doubleclick":return"dblclick"}return e};/**
 * Checks if an event is supported in the current execution environment.
 * @license Modernizr 3.0.0pre (Custom Build) | MIT
 */const v=e=>{if(typeof document>"u")return!0;{const t="on"+D(e);let n=t in document;if(!n){const s=document.createElement("div");s.setAttribute(t,"return;"),n=typeof s[t]=="function"}return n}},_=(e,t,n)=>{const s=e.__events||(e.__events={}),r=s[t];r&&e.removeEventListener(t,r),e.addEventListener(t,s[t]=function(c){n&&n.call(this,c)})},b=e=>{const t=new Map;return e.forEach(n=>t.set(n,n)),t},S=(e,t)=>{typeof e=="function"?e(t):e!=null&&(e.current=t)},A=(...e)=>t=>{e.forEach(n=>{S(n,t)})},U=(e,t)=>{const n=(s,r)=>o.createElement(e,Object.assign({},s,{forwardedRef:r}));return n.displayName=t,o.forwardRef(n)},$=(e,t,n,s)=>{s!==void 0&&s();const r=j(e),a=class extends o.Component{constructor(c){super(c),this.setComponentElRef=i=>{this.componentEl=i}}componentDidMount(){this.componentDidUpdate(this.props)}componentDidUpdate(c){C(this.componentEl,this.props,c)}render(){const c=this.props,{children:i,forwardedRef:p,style:l,className:q,ref:z}=c,g=L(c,["children","forwardedRef","style","className","ref"]);let d=Object.keys(g).reduce((h,f)=>{const E=g[f];if(f.indexOf("on")===0&&f[2]===f[2].toUpperCase()){const u=f.substring(2).toLowerCase();typeof document<"u"&&v(u)&&(h[f]=E)}else{const u=typeof E;(u==="string"||u==="boolean"||u==="number")&&(h[w(f)]=E)}return h},{});n&&(d=n(this.props,d));const O=Object.assign(Object.assign({},d),{ref:A(p,this.setComponentElRef),style:l});return k.createElement(e,O,i)}static get displayName(){return r}};return t&&(a.contextType=t),U(a,r)},m=$("ods-link",void 0,void 0,R);var Q=(e=>(e.atom="atom",e.molecule="molecule",e.organism="organism",e.quark="Quark",e))(Q||{});function T(e){switch(e){case"atom":return"https://atomicdesign.bradfrost.com/chapter-2/#atoms";case"molecule":return"https://atomicdesign.bradfrost.com/chapter-2/#molecules";case"organism":return"https://atomicdesign.bradfrost.com/chapter-2/#organisms";case"Quark":return"https://bradfrost.com/blog/post/extending-atomic-design";default:return""}}const M=({aliases:e,atomicType:t,className:n,figmaLink:s,githubUrl:r,name:a,relatedComponents:c})=>o.createElement("table",{className:n||""},o.createElement("tbody",null,o.createElement("tr",null,o.createElement("th",{scope:"row"},"Name"),o.createElement("td",null,a)),o.createElement("tr",null,o.createElement("th",{scope:"row"},"Also known as"),o.createElement("td",null,e.length>0?e.join(", "):"-")),o.createElement("tr",null,o.createElement("th",{scope:"row"},"Atomic type"),o.createElement("td",null,o.createElement(m,{style:{textTransform:"capitalize"},href:T(t),icon:y.externalLink,label:t,target:"_blank"}))),o.createElement("tr",null,o.createElement("th",{scope:"row"},"Related component(s)"),o.createElement("td",null,c.length>0?c.map((i,p)=>o.createElement(k.Fragment,{key:p},o.createElement(m,{href:"#",label:i.name,onClick:l=>{l.preventDefault(),N({kind:`ODS Components/${i.subtitle?`${i.subtitle}/`:""}${i.name}`,story:"Documentation"})}}),p<c.length-1&&o.createElement("span",null,", "))):"-")),o.createElement("tr",null,o.createElement("th",{scope:"row"},"Links"),o.createElement("td",null,o.createElement(m,{style:{display:"block"},href:s,icon:y.externalLink,label:"Design",target:"_blank"}),o.createElement(m,{style:{display:"block"},href:r,icon:y.externalLink,label:"Github",target:"_blank"})))));export{Q as A,M as I};
