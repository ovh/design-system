import{p as o,H as d,c as s,h as r,a as n}from"./index-DAZhnxgO.js";import{a as h}from"./dom-CO1DdTQY.js";const l=null;function u(a,e){return e!==void 0&&a===l?e:a}function i(a,e,t){a.setFormValue(e??""),t&&h(t,a)}const c=":host(.ods-textarea){display:inline-block}.ods-textarea__textarea{box-sizing:border-box;border:var(--ods-border-width-sm) solid var(--ods-color-form-element-border-default);border-radius:var(--ods-border-radius-sm);padding:4px 8px;width:100%;height:var(--ods-form-element-input-height);color:var(--ods-color-text);font-family:inherit;font-size:1rem;height:auto;resize:none}.ods-textarea__textarea::-moz-placeholder{color:var(--ods-color-form-element-text-placeholder-default)}.ods-textarea__textarea::placeholder{color:var(--ods-color-form-element-text-placeholder-default)}.ods-textarea__textarea:focus{outline:var(--ods-outline-style-default) var(--ods-outline-width) var(--ods-outline-color-default);outline-offset:var(--ods-outline-offset)}.ods-textarea__textarea:disabled{border-color:var(--ods-color-border-disabled-default);background-color:var(--ods-color-background-disabled-default);cursor:not-allowed;color:var(--ods-color-text-disabled-default)}.ods-textarea__textarea:not(:disabled):-moz-read-only{border-color:var(--ods-color-border-readonly-default);background-color:var(--ods-color-background-readonly-default)}.ods-textarea__textarea:not(:disabled):read-only{border-color:var(--ods-color-border-readonly-default);background-color:var(--ods-color-background-readonly-default)}.ods-textarea__textarea:not(.ods-textarea__textarea--error,:disabled,:-moz-read-only):focus{border-color:var(--ods-color-form-element-border-focus-default)}.ods-textarea__textarea:not(.ods-textarea__textarea--error,:disabled,:read-only):focus{border-color:var(--ods-color-form-element-border-focus-default)}.ods-textarea__textarea:not(.ods-textarea__textarea--error,:disabled,:-moz-read-only):hover{border-color:var(--ods-color-form-element-border-hover-default)}.ods-textarea__textarea:not(.ods-textarea__textarea--error,:disabled,:read-only):hover{border-color:var(--ods-color-form-element-border-hover-default)}.ods-textarea__textarea--error{border-color:var(--ods-color-form-element-border-critical)}.ods-textarea__textarea--resizable{resize:both}",v=c,b=o(class extends d{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.odsBlur=s(this,"odsBlur",7),this.odsChange=s(this,"odsChange",7),this.odsClear=s(this,"odsClear",7),this.odsFocus=s(this,"odsFocus",7),this.odsInvalid=s(this,"odsInvalid",7),this.odsReset=s(this,"odsReset",7),this.internals=this.attachInternals(),this.shouldUpdateIsInvalidState=!1,this.isInvalid=void 0,this.ariaLabel=null,this.ariaLabelledby=void 0,this.cols=void 0,this.defaultValue=void 0,this.hasError=!1,this.hasSpellcheck=!1,this.isDisabled=!1,this.isReadonly=!1,this.isRequired=!1,this.isResizable=!1,this.maxlength=void 0,this.minlength=void 0,this.name=void 0,this.placeholder=void 0,this.rows=void 0,this.value=l}onInvalidEvent(e){e.preventDefault(),this.isInvalid=!0}async checkValidity(){return this.isInvalid=!this.internals.validity.valid,this.internals.checkValidity()}async clear(){var e;this.odsClear.emit(),this.value=null,(e=this.textareaElement)===null||e===void 0||e.focus(),this.shouldUpdateIsInvalidState=!0}async getValidationMessage(){return this.internals.validationMessage}async getValidity(){return this.internals.validity}async reportValidity(){return this.isInvalid=!this.internals.validity.valid,this.internals.reportValidity()}async reset(){var e;this.odsReset.emit(),this.value=(e=this.defaultValue)!==null&&e!==void 0?e:null,this.shouldUpdateIsInvalidState=!0}async willValidate(){return this.internals.willValidate}onIsInvalidChange(){this.odsInvalid.emit({isInvalid:!!this.isInvalid})}componentWillLoad(){this.observer=new MutationObserver(e=>{for(const t of e)t.attributeName==="value"&&this.value!==t.oldValue&&this.onValueChange(t.oldValue),t.attributeName==="required"&&(i(this.internals,this.value,this.textareaElement),this.isInvalid=!this.internals.validity.valid)}),this.value=u(this.value,this.defaultValue)}componentDidLoad(){var e,t;this.onValueChange(),(e=this.observer)===null||e===void 0||e.observe(this.el,{attributeFilter:["value"],attributeOldValue:!0}),this.textareaElement&&((t=this.observer)===null||t===void 0||t.observe(this.textareaElement,{attributeFilter:["required"],attributeOldValue:!1}))}disconnectedCallback(){var e;(e=this.observer)===null||e===void 0||e.disconnect()}async formResetCallback(){await this.reset()}onBlur(){this.isInvalid=!this.internals.validity.valid,this.odsBlur.emit()}onFocus(){this.odsFocus.emit()}onInput(){var e,t;this.isDisabled||(this.value=(t=(e=this.textareaElement)===null||e===void 0?void 0:e.value)!==null&&t!==void 0?t:null)}onValueChange(e){i(this.internals,this.value,this.textareaElement),this.shouldUpdateIsInvalidState&&(this.isInvalid=!this.internals.validity.valid,this.shouldUpdateIsInvalidState=!1),this.odsChange.emit({name:this.name,previousValue:e,validity:this.internals.validity,value:this.value})}render(){return r(n,{key:"a3154df1cc27bc0733fc94c8da3099b1b92acead",class:"ods-textarea",disabled:this.isDisabled,readonly:this.isReadonly},r("textarea",{key:"c97ae5c6c0eac82088d759e4af2b3b70dddd9f28","aria-label":this.ariaLabel,"aria-labelledby":this.ariaLabelledby,"aria-multiline":!0,class:{"ods-textarea__textarea":!0,"ods-textarea__textarea--error":this.hasError||!!this.isInvalid,"ods-textarea__textarea--resizable":this.isResizable},cols:this.cols,disabled:this.isDisabled,maxlength:this.maxlength,minlength:this.minlength,name:this.name,onBlur:()=>this.onBlur(),onFocus:()=>this.onFocus(),onInput:()=>this.onInput(),part:"textarea",placeholder:this.placeholder,readonly:this.isReadonly,ref:e=>this.textareaElement=e,required:this.isRequired,role:"textbox",rows:this.rows,spellcheck:this.hasSpellcheck,value:this.value||""}))}static get delegatesFocus(){return!0}static get formAssociated(){return!0}get el(){return this}static get watchers(){return{isInvalid:["onIsInvalidChange"]}}static get style(){return v}},[81,"ods-textarea",{ariaLabel:[513,"aria-label"],ariaLabelledby:[513,"aria-labelledby"],cols:[514],defaultValue:[513,"default-value"],hasError:[516,"has-error"],hasSpellcheck:[516,"has-spellcheck"],isDisabled:[516,"is-disabled"],isReadonly:[516,"is-readonly"],isRequired:[516,"is-required"],isResizable:[516,"is-resizable"],maxlength:[514],minlength:[514],name:[513],placeholder:[513],rows:[514],value:[1537],isInvalid:[32],checkValidity:[64],clear:[64],getValidationMessage:[64],getValidity:[64],reportValidity:[64],reset:[64],willValidate:[64]},[[0,"invalid","onInvalidEvent"]],{isInvalid:["onIsInvalidChange"]}]);function f(){if(typeof customElements>"u")return;["ods-textarea"].forEach(e=>{switch(e){case"ods-textarea":customElements.get(e)||customElements.define(e,b);break}})}f();export{f as d};
