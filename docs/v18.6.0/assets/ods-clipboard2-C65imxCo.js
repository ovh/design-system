import{p as d,H as a,c as l,h as e,a as r}from"./index-DAZhnxgO.js";import{c as n,g as c}from"./dom-8hoR-urs.js";import{d as p,O as b,a as u}from"./ods-button2-dPaqs0uX.js";import{O as s}from"./icon-name-C6aMXAXT.js";import{d as h}from"./ods-icon2-DRPHarK1.js";import{d as f}from"./ods-input2-C6KOqFAM.js";import{d as m}from"./ods-spinner2-CPyWCS2f.js";import{d as _}from"./ods-tooltip2-CW12aP9b.js";const y=":host(.ods-clipboard){display:inline-block;position:relative;height:var(--ods-form-element-input-height)}.ods-clipboard__container{border-color:var(--ods-color-border-readonly-default);background-color:var(--ods-color-background-readonly-default);box-sizing:border-box;display:inline-flex;border-width:1px;border-style:solid;border-radius:var(--ods-border-radius-sm);padding-right:4px}.ods-clipboard__container--disabled{border-color:var(--ods-color-border-disabled-default);background-color:var(--ods-color-background-disabled-default);cursor:not-allowed;color:var(--ods-color-text-disabled-default)}.ods-clipboard__container--focused{outline:var(--ods-outline-style-default) var(--ods-outline-width) var(--ods-outline-color-default);outline-offset:var(--ods-outline-offset)}.ods-clipboard__input{width:inherit}.ods-clipboard__input::part(input){border:none;padding-right:28px}.ods-clipboard__input::part(input):focus{outline:0}.ods-clipboard__copy{display:flex;align-items:center;justify-content:center;margin-left:2px;height:auto}.ods-clipboard__tooltip{margin:0;font-size:0.75rem;font-weight:600}.ods-clipboard__tooltip__copied{display:flex;flex-flow:row;-moz-column-gap:4px;column-gap:4px;align-items:center}.ods-clipboard__tooltip__copied__check{font-size:1.125rem}",C=y,i="ods-clipboard__container--focused",g=d(class extends a{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.odsCopy=l(this,"odsCopy",7),this.internals=this.attachInternals(),this.copyButtonId="clipboard-copy",this.hostId="",this.isCopyDone=!1,this.ariaLabel=null,this.ariaLabelledby=void 0,this.isDisabled=!1,this.isMasked=void 0,this.labelCopy="Copy to clipboard",this.labelCopySuccess="Copied!",this.name="",this.value=void 0}async copy(){this.isDisabled||(await n(this.value||""),this.isCopyDone=!0,this.odsCopy.emit(this.value))}componentWillLoad(){this.hostId=this.el.id||c()}onInputBlur(){var o;(o=this.containerElement)===null||o===void 0||o.classList.remove(i)}onInputFocus(){var o;(o=this.containerElement)===null||o===void 0||o.classList.add(i)}onTooltipHide(){this.isCopyDone=!1}render(){return e(r,{key:"4188e3377ecf9d2863bb1f50c23eac9816218fcb",class:"ods-clipboard",id:this.hostId},e("div",{key:"a1151b4e3a78cb6144fbb72da633c1f43932889d",class:{"ods-clipboard__container":!0,"ods-clipboard__container--disabled":this.isDisabled},ref:o=>this.containerElement=o},e("ods-input",{key:"664dc0f08d6b414684f762a0b7835109e6f2a245","aria-label":this.ariaLabel,"aria-labelledby":this.ariaLabelledby,class:"ods-clipboard__input",exportparts:"input",isDisabled:this.isDisabled,isMasked:this.isMasked,isReadonly:!0,name:this.name,onOdsFocus:()=>this.onInputFocus(),onOdsBlur:()=>this.onInputBlur(),value:this.value}),e("ods-button",{key:"ccd6425c6f8bf7d113343ba571f27d6d26a8a698",class:"ods-clipboard__copy",icon:s.fileCopy,id:this.copyButtonId,isDisabled:this.isDisabled,label:"",onClick:()=>this.copy(),size:b.xs,variant:u.ghost})),!this.isDisabled&&e("ods-tooltip",{key:"c62b41fac8844e62e9fec277a73b3a1f7f671026",onOdsHide:()=>this.onTooltipHide(),part:"tooltip",position:"right",shadowDomTriggerId:this.copyButtonId,triggerId:this.hostId},e("p",{key:"01448227e27b89e74e8425501bb86150243a3c06",class:"ods-clipboard__tooltip"},this.isCopyDone?e("span",{class:"ods-clipboard__tooltip__copied"},this.labelCopySuccess,e("ods-icon",{class:"ods-clipboard__tooltip__copied__check",name:s.check})):this.labelCopy)))}static get delegatesFocus(){return!0}static get formAssociated(){return!0}get el(){return this}static get style(){return C}},[81,"ods-clipboard",{ariaLabel:[513,"aria-label"],ariaLabelledby:[513,"aria-labelledby"],isDisabled:[516,"is-disabled"],isMasked:[516,"is-masked"],labelCopy:[513,"label-copy"],labelCopySuccess:[513,"label-copy-success"],name:[513],value:[513],isCopyDone:[32],copy:[64]}]);function v(){if(typeof customElements>"u")return;["ods-clipboard","ods-button","ods-icon","ods-input","ods-spinner","ods-tooltip"].forEach(o=>{switch(o){case"ods-clipboard":customElements.get(o)||customElements.define(o,g);break;case"ods-button":customElements.get(o)||p();break;case"ods-icon":customElements.get(o)||h();break;case"ods-input":customElements.get(o)||f();break;case"ods-spinner":customElements.get(o)||m();break;case"ods-tooltip":customElements.get(o)||_();break}})}v();export{v as d};
