import{p as n,H as d,c as i,h as s,a as h}from"./index-DAZhnxgO.js";import{i as t}from"./dom-8hoR-urs.js";import{a,O as l,h as p,s as g,f as c}from"./overlay-KZpfSxWH.js";const m=":host(.ods-popover){transform:translateZ(0);z-index:99;border-radius:4px;filter:drop-shadow(0 2px 8px rgba(0, 14, 156, 0.2));background:var(--ods-color-primary-000);padding:8px;color:var(--ods-color-text);display:none;top:0;left:0}:host(.ods-popover--absolute){position:absolute}:host(.ods-popover--fixed){position:fixed}.ods-popover__arrow{position:absolute;transform:rotate(45deg);z-index:99;background:inherit;width:8px;height:8px}.ods-popover__arrow--hidden{display:none}",u=m,w=n(class extends d{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.odsHide=i(this,"odsHide",7),this.odsShow=i(this,"odsShow",7),this.isOpen=!1,this.boundOnKeydown=this.onKeydown.bind(this),this.boundToggle=this.toggle.bind(this),this.cleanUpCallback=()=>{},this.position=a.top,this.shadowDomTriggerId=void 0,this.strategy=l.absolute,this.triggerId=void 0,this.withArrow=!1}onDocumentClick(e){this.isOpen&&!t(e,this.el)&&!t(e,this.triggerElement)&&this.hide()}onDocumentFocusin(e){this.isOpen&&!t(e,this.el)&&!t(e,this.triggerElement)&&this.hide()}onDocumentKeydown(e){this.isOpen&&e.key==="Escape"&&this.hide()}async hide(){p(this.el,this.cleanUpCallback),this.isOpen=!1,this.odsHide.emit()}async show(){this.cleanUpCallback=g(this.position,{arrow:this.arrowElement,popper:this.el,trigger:this.triggerElement},{offset:8,shift:{padding:5},strategy:this.strategy}),this.isOpen=!0,this.odsShow.emit()}connectedCallback(){var e,o;this.triggerElement=c(this.triggerId,this.shadowDomTriggerId),(e=this.triggerElement)===null||e===void 0||e.addEventListener("keydown",this.boundOnKeydown),(o=this.triggerElement)===null||o===void 0||o.addEventListener("mousedown",this.boundToggle)}disconnectedCallback(){var e,o;(e=this.triggerElement)===null||e===void 0||e.removeEventListener("keydown",this.boundOnKeydown),(o=this.triggerElement)===null||o===void 0||o.removeEventListener("mousedown",this.boundToggle)}onKeydown(e){(e.key==="Enter"||e.key===" ")&&this.toggle()}toggle(){this.isOpen?this.hide():this.show()}render(){return s(h,{key:"ad050020812cd41fa4647949b6d442dad356a4dc",class:`ods-popover ods-popover--${this.strategy}`},s("slot",{key:"9ca416042ceef104f7b0f5c7274e55b88728839a"}),s("div",{key:"1249ab173a8654b1027a1367a9669f1d6ad37780",class:{"ods-popover__arrow":!0,"ods-popover__arrow--hidden":!this.withArrow},ref:e=>e&&(this.arrowElement=e)}))}get el(){return this}static get style(){return u}},[1,"ods-popover",{position:[513],shadowDomTriggerId:[513,"shadow-dom-trigger-id"],strategy:[513],triggerId:[513,"trigger-id"],withArrow:[516,"with-arrow"],hide:[64],show:[64]},[[4,"click","onDocumentClick"],[4,"focusin","onDocumentFocusin"],[4,"keydown","onDocumentKeydown"]]]);function f(){if(typeof customElements>"u")return;["ods-popover"].forEach(e=>{switch(e){case"ods-popover":customElements.get(e)||customElements.define(e,w);break}})}f();export{f as d};
