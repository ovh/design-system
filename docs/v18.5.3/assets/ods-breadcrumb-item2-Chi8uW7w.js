import{p as a,H as d,h as i,a as n,c as o}from"./index-DAZhnxgO.js";import{d as l}from"./ods-icon2-C2sSMg6h.js";import{d as c}from"./ods-link2-DhrEm8Nk.js";const m=4;function b(s){s.filter(e=>e.tagName.toLowerCase()==="ods-breadcrumb-item").forEach(e=>{e.setAttribute("is-collapsed","false"),e.setAttribute("is-expandable","false")})}function u(s){const e=s.filter(t=>t.tagName.toLowerCase()==="ods-breadcrumb-item").map(t=>(t.removeAttribute("is-last"),t));e.length&&e[e.length-1].setAttribute("is-last","true"),e.length>m&&e.forEach((t,r)=>{r>0&&r<e.length-1&&t.setAttribute("is-collapsed","true"),r===1&&t.setAttribute("is-expandable","true")})}const f=':host(.ods-breadcrumb){display:flex;flex-wrap:wrap;-moz-column-gap:8px;column-gap:8px}:host(.ods-breadcrumb) ::slotted(ods-breadcrumb-item:not(:last-child))::after{padding-left:8px;color:var(--ods-color-text);font-size:0.875rem;font-weight:700;content:"|"}',h=f,p=a(class extends d{constructor(){super(),this.__registerHost(),this.__attachShadow()}onOdsExpand(){b(Array.from(this.el.children))}onSlotChange(){u(Array.from(this.el.children))}render(){return i(n,{key:"9646019713c9d3919b54b52be14cdfad84ef1e50",class:"ods-breadcrumb",role:"navigation"},i("slot",{key:"a4e0405de696b5a2236b5cff55fe2b979c172ac4",onSlotchange:()=>this.onSlotChange()}))}get el(){return this}static get style(){return h}},[1,"ods-breadcrumb",void 0,[[0,"odsExpand","onOdsExpand"]]]);function E(){if(typeof customElements>"u")return;["ods-breadcrumb"].forEach(e=>{switch(e){case"ods-breadcrumb":customElements.get(e)||customElements.define(e,p);break}})}E();const x=":host(.ods-breadcrumb-item){display:inline-flex;font-size:0.875rem;font-weight:600}:host(.ods-breadcrumb-item--collapsed){display:none}.ods-breadcrumb-item__last{color:var(--ods-color-text)}",g=x,k=a(class extends d{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.odsClick=o(this,"odsClick",7),this.odsExpand=o(this,"odsExpand",7),this.isCollapsed=!1,this.isExpandable=!1,this.isLast=!1,this.href=void 0,this.icon=void 0,this.isDisabled=!1,this.label=void 0,this.referrerpolicy=void 0,this.rel=void 0,this.target=void 0}onExpandClick(e){e.preventDefault(),e.stopPropagation(),this.odsExpand.emit()}onLinkClick(e){this.isDisabled||this.odsClick.emit(e)}render(){return i(n,{key:"180321cad265d1b55aefe0d2eba05c4427aae323",class:{"ods-breadcrumb-item":!0,"ods-breadcrumb-item--collapsed":this.isCollapsed&&!this.isExpandable}},this.isExpandable&&i("ods-link",{key:"bdc887878038391f402246fd4be987fd593561d6",href:"",label:"…",onClick:e=>this.onExpandClick(e)}),!this.isExpandable&&(this.isLast?i("span",{"aria-current":"page",class:"ods-breadcrumb-item__last",part:"last"},this.label):i("ods-link",{exportparts:"link",href:this.href,icon:this.icon,isDisabled:this.isDisabled,label:this.label,onClick:e=>this.onLinkClick(e),referrerpolicy:this.referrerpolicy,rel:this.rel,target:this.target})))}static get style(){return g}},[1,"ods-breadcrumb-item",{isCollapsed:[4,"is-collapsed"],isExpandable:[4,"is-expandable"],isLast:[4,"is-last"],href:[513],icon:[513],isDisabled:[516,"is-disabled"],label:[513],referrerpolicy:[513],rel:[513],target:[513]}]);function C(){if(typeof customElements>"u")return;["ods-breadcrumb-item","ods-icon","ods-link"].forEach(e=>{switch(e){case"ods-breadcrumb-item":customElements.get(e)||customElements.define(e,k);break;case"ods-icon":customElements.get(e)||l();break;case"ods-link":customElements.get(e)||c();break}})}C();export{C as a,E as d};
