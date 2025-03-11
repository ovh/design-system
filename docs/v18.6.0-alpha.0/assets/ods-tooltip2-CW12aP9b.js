import{p as n,H as h,c as r,h as s,a as l}from"./index-DAZhnxgO.js";import{a,O as u,h as p,s as v,f as g}from"./overlay-KZpfSxWH.js";const m=":host(.ods-tooltip){transform:translateZ(0);z-index:99;border-radius:4px;filter:drop-shadow(0 2px 8px rgba(0, 14, 156, 0.2));background:var(--ods-color-primary-000);padding:8px;color:var(--ods-color-text);display:none;top:0;left:0}:host(.ods-tooltip--absolute){position:absolute}:host(.ods-tooltip--fixed){position:fixed}.ods-tooltip__arrow{position:absolute;transform:rotate(45deg);z-index:99;background:inherit;width:8px;height:8px}.ods-tooltip__arrow--hidden{display:none}",E=m,c=50,b=n(class extends h{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.odsHide=r(this,"odsHide",7),this.odsShow=r(this,"odsShow",7),this.cleanUpCallback=()=>{},this.isTooltipHover=!1,this.boundHide=this.hide.bind(this),this.boundHideOnElLeave=this.hideOnElLeave.bind(this),this.boundHideByTooltipHover=this.hideByTooltipHover.bind(this),this.boundShow=this.show.bind(this),this.boundShowOnElEnter=this.showOnElEnter.bind(this),this.position=a.top,this.shadowDomTriggerId=void 0,this.strategy=u.absolute,this.triggerId=void 0,this.withArrow=!1}async hide(){p(this.el,this.cleanUpCallback),this.odsHide.emit()}async show(){clearTimeout(this.timer),this.cleanUpCallback=v(this.position,{arrow:this.arrowElement,popper:this.el,trigger:this.triggerElement},{offset:8,shift:{padding:5},strategy:this.strategy}),this.odsShow.emit()}connectedCallback(){var t,e,o,i;this.triggerElement=g(this.triggerId,this.shadowDomTriggerId),(t=this.triggerElement)===null||t===void 0||t.addEventListener("blur",this.boundHide),(e=this.triggerElement)===null||e===void 0||e.addEventListener("focus",this.boundShow),(o=this.triggerElement)===null||o===void 0||o.addEventListener("mouseenter",this.boundShow),(i=this.triggerElement)===null||i===void 0||i.addEventListener("mouseleave",this.boundHideByTooltipHover),this.el.addEventListener("mouseenter",this.boundShowOnElEnter),this.el.addEventListener("mouseleave",this.boundHideOnElLeave)}disconnectedCallback(){var t,e,o,i;(t=this.triggerElement)===null||t===void 0||t.removeEventListener("blur",this.boundHide),(e=this.triggerElement)===null||e===void 0||e.removeEventListener("focus",this.boundShow),(o=this.triggerElement)===null||o===void 0||o.removeEventListener("mouseenter",this.boundShow),(i=this.triggerElement)===null||i===void 0||i.removeEventListener("mouseleave",this.boundHideByTooltipHover),this.el.removeEventListener("mouseenter",this.boundShowOnElEnter),this.el.removeEventListener("mouseleave",this.boundHideOnElLeave)}hideByTooltipHover(){return setTimeout(()=>{if(!this.isTooltipHover)return this.hide()},c)}hideOnElLeave(){this.isTooltipHover=!1,this.timer=this.hideByTooltipHover()}showOnElEnter(){return this.isTooltipHover=!0,this.boundShow()}render(){return s(l,{key:"9cdfa62387305a1f7eb604bea778b1fc607db261",class:`ods-tooltip ods-tooltip--${this.strategy}`,role:"tooltip"},s("slot",{key:"08151f057748a5d9311fa00f8619e1376810deed"}),s("div",{key:"3c154c15d4802453eeb2ff2581538f1371180f52",class:{"ods-tooltip__arrow":!0,"ods-tooltip__arrow--hidden":!this.withArrow},ref:t=>t&&(this.arrowElement=t)}))}get el(){return this}static get style(){return E}},[1,"ods-tooltip",{position:[513],shadowDomTriggerId:[513,"shadow-dom-trigger-id"],strategy:[513],triggerId:[513,"trigger-id"],withArrow:[516,"with-arrow"],hide:[64],show:[64]}]);function w(){if(typeof customElements>"u")return;["ods-tooltip"].forEach(t=>{switch(t){case"ods-tooltip":customElements.get(t)||customElements.define(t,b);break}})}w();export{w as d};
