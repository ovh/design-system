import{p as i,H as a,c as d,h as o,a as l}from"./index-DAZhnxgO.js";import{c as n,g as p}from"./dom-CO1DdTQY.js";import{d as c,O as r,a as b}from"./ods-button2-DJxJiLcj.js";import{O as s}from"./icon-name-C6aMXAXT.js";import{d as h}from"./ods-icon2-C2sSMg6h.js";import{d as u}from"./ods-input2-BVKbybMU.js";import{d as m}from"./ods-spinner2-CPyWCS2f.js";import{d as f}from"./ods-tooltip2-CW12aP9b.js";const y=":host(.ods-clipboard){display:inline-block;position:relative;height:var(--ods-form-element-input-height)}.ods-clipboard__input{width:inherit}.ods-clipboard__input::part(input){padding-right:28px}.ods-clipboard__copy{display:flex;position:absolute;top:4px;right:4px;bottom:4px;align-items:center;justify-content:center;height:auto}.ods-clipboard__tooltip{margin:0;font-size:0.75rem;font-weight:600}.ods-clipboard__tooltip__copied{display:flex;flex-flow:row;-moz-column-gap:4px;column-gap:4px;align-items:center}.ods-clipboard__tooltip__copied__check{font-size:1.125rem}",_=y,C=i(class extends a{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.odsCopy=d(this,"odsCopy",7),this.internals=this.attachInternals(),this.copyButtonId="clipboard-copy",this.hostId="",this.isCopyDone=!1,this.ariaLabel=null,this.ariaLabelledby=void 0,this.isDisabled=!1,this.labelCopy="Copy to clipboard",this.labelCopySuccess="Copied!",this.name="",this.value=void 0}async copy(){this.isDisabled||(await n(this.value||""),this.isCopyDone=!0,this.odsCopy.emit(this.value))}componentWillLoad(){this.hostId=this.el.id||p()}onTooltipHide(){this.isCopyDone=!1}render(){return o(l,{key:"b260a3bc7bd66aecf832d361be8c8ef6761921d9",class:"ods-clipboard",id:this.hostId},o("ods-input",{key:"63d180bd0db65b9d6cbedee18027a50d201c8b89","aria-label":this.ariaLabel,"aria-labelledby":this.ariaLabelledby,class:"ods-clipboard__input",exportparts:"input",isDisabled:this.isDisabled,isReadonly:!0,name:this.name,value:this.value}),o("ods-button",{key:"15c1b6f2f7c7bed1b69589e187549a08acdfe82b",class:"ods-clipboard__copy",icon:s.fileCopy,id:this.copyButtonId,isDisabled:this.isDisabled,label:"",onClick:()=>this.copy(),size:r.xs,variant:b.ghost}),!this.isDisabled&&o("ods-tooltip",{key:"d63a7cb29d07593ab0ae1e84d192055ce536aed7",onOdsHide:()=>this.onTooltipHide(),part:"tooltip",position:"right",shadowDomTriggerId:this.copyButtonId,triggerId:this.hostId},o("p",{key:"b028eb7874674e01da9f89db0fd64c0449915f87",class:"ods-clipboard__tooltip"},this.isCopyDone?o("span",{class:"ods-clipboard__tooltip__copied"},this.labelCopySuccess,o("ods-icon",{class:"ods-clipboard__tooltip__copied__check",name:s.check})):this.labelCopy)))}static get delegatesFocus(){return!0}static get formAssociated(){return!0}get el(){return this}static get style(){return _}},[81,"ods-clipboard",{ariaLabel:[513,"aria-label"],ariaLabelledby:[513,"aria-labelledby"],isDisabled:[516,"is-disabled"],labelCopy:[513,"label-copy"],labelCopySuccess:[513,"label-copy-success"],name:[513],value:[513],isCopyDone:[32],copy:[64]}]);function g(){if(typeof customElements>"u")return;["ods-clipboard","ods-button","ods-icon","ods-input","ods-spinner","ods-tooltip"].forEach(e=>{switch(e){case"ods-clipboard":customElements.get(e)||customElements.define(e,C);break;case"ods-button":customElements.get(e)||c();break;case"ods-icon":customElements.get(e)||h();break;case"ods-input":customElements.get(e)||u();break;case"ods-spinner":customElements.get(e)||m();break;case"ods-tooltip":customElements.get(e)||f();break}})}g();export{g as d};
