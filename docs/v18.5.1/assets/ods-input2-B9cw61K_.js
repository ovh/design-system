import{p as y,H as k,c as d,h as o,a as I}from"./index-DAZhnxgO.js";import{b as C,s as c,a as w}from"./dom-CO1DdTQY.js";import{a as b}from"./type-B5zI8QxY.js";import{d as E,b as x,O as h,a as p}from"./ods-button2-Bhm26DQr.js";import{O as u}from"./icon-name-C6aMXAXT.js";import{d as V}from"./ods-icon2-Bl6f3POv.js";import{d as M,O as v}from"./ods-spinner2-DCN2yKlT.js";var r;(function(s){s.email="email",s.number="number",s.password="password",s.search="search",s.text="text",s.time="time",s.url="url"})(r||(r={}));Object.freeze(Object.values(r));const _=null;function D(s,e){return e!==void 0&&s===_?e:s}async function f(s,e,t){s.preventDefault(),s.stopPropagation(),(s.key===" "||s.key==="Enter")&&!e&&await t()}function O(s){return s!==void 0}function m(s,e,t){var a;s.setFormValue((a=e==null?void 0:e.toString())!==null&&a!==void 0?a:""),t&&w(t,s)}const L=":host(.ods-input){display:inline-block;position:relative}.ods-input__actions{display:inline-flex;position:absolute;top:0;right:0;bottom:0;gap:2px;align-items:center;justify-content:center;padding-right:4px}.ods-input__actions__spinner{padding-right:4px;height:unset}.ods-input__actions__spinner::part(spinner){width:1rem;height:1rem}.ods-input__input{box-sizing:border-box;border:var(--ods-border-width-sm) solid var(--ods-color-form-element-border-default);border-radius:var(--ods-border-radius-sm);padding:4px 8px;width:100%;height:32px;color:var(--ods-color-text);font-family:inherit;font-size:1rem}.ods-input__input::-moz-placeholder{color:var(--ods-color-form-element-text-placeholder-default)}.ods-input__input::placeholder{color:var(--ods-color-form-element-text-placeholder-default)}.ods-input__input:focus{outline:var(--ods-outline-style-default) var(--ods-outline-width) var(--ods-outline-color-default);outline-offset:var(--ods-outline-offset)}.ods-input__input:disabled{border-color:var(--ods-color-border-disabled-default);background-color:var(--ods-color-background-disabled-default);cursor:not-allowed;color:var(--ods-color-text-disabled-default)}.ods-input__input:-moz-read-only{border-color:var(--ods-color-border-readonly-default);background-color:var(--ods-color-background-readonly-default)}.ods-input__input:read-only{border-color:var(--ods-color-border-readonly-default);background-color:var(--ods-color-background-readonly-default)}.ods-input__input::-webkit-outer-spin-button,.ods-input__input::-webkit-inner-spin-button{-webkit-appearance:none;appearance:none;margin:0}.ods-input__input:not(.ods-input__input--error,:disabled,:-moz-read-only):focus{border-color:var(--ods-color-form-element-border-focus-default)}.ods-input__input:not(.ods-input__input--error,:disabled,:read-only):focus{border-color:var(--ods-color-form-element-border-focus-default)}.ods-input__input:not(.ods-input__input--error,:disabled,:-moz-read-only):hover{border-color:var(--ods-color-form-element-border-hover-default)}.ods-input__input:not(.ods-input__input--error,:disabled,:read-only):hover{border-color:var(--ods-color-form-element-border-hover-default)}.ods-input__input:not(:disabled).ods-input__input--error{border-color:var(--ods-color-form-element-border-critical)}.ods-input__input:disabled~.ods-input__actions{cursor:not-allowed}.ods-input__input--clearable,.ods-input__input--loading,.ods-input__input--toggle-mask,.ods-input__input--search{padding-right:28px}.ods-input__input--clearable.ods-input__input--toggle-mask,.ods-input__input--clearable.ods-input__input--search{padding-right:56px}.ods-input__input--clearable.ods-input__input--toggle-mask.ods-input__input--search{padding-right:84px}.ods-input__input[type=number]{-webkit-appearance:textfield;-moz-appearance:textfield;appearance:textfield}.ods-input__input[type=search]::-webkit-search-cancel-button,.ods-input__input[type=search]::-webkit-search-decoration{-webkit-appearance:none;appearance:none}",R=L,S=y(class extends k{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.odsBlur=d(this,"odsBlur",7),this.odsChange=d(this,"odsChange",7),this.odsClear=d(this,"odsClear",7),this.odsFocus=d(this,"odsFocus",7),this.odsInvalid=d(this,"odsInvalid",7),this.odsReset=d(this,"odsReset",7),this.odsToggleMask=d(this,"odsToggleMask",7),this.internals=this.attachInternals(),this.hasMovedNodes=!1,this.shouldUpdateIsInvalidState=!1,this.isInvalid=void 0,this.isPassword=!1,this.showClearable=!1,this.ariaLabel=null,this.ariaLabelledby=void 0,this.defaultValue=void 0,this.hasError=!1,this.isClearable=!1,this.isDisabled=!1,this.isLoading=!1,this.isMasked=void 0,this.isReadonly=!1,this.isRequired=!1,this.list=void 0,this.max=void 0,this.maxlength=void 0,this.min=void 0,this.minlength=void 0,this.name=void 0,this.pattern=void 0,this.placeholder=void 0,this.step=void 0,this.type=r.text,this.value=_}onInvalidEvent(e){e.preventDefault(),this.isInvalid=!0}async checkValidity(){return this.isInvalid=!this.internals.validity.valid,this.internals.checkValidity()}async clear(){var e;this.odsClear.emit(),this.value=null,this.inputEl&&(this.inputEl.value=""),(e=this.inputEl)===null||e===void 0||e.focus(),this.shouldUpdateIsInvalidState=!0}async getValidationMessage(){return this.internals.validationMessage}async getValidity(){return this.internals.validity}async reportValidity(){return this.isInvalid=!this.internals.validity.valid,this.internals.reportValidity()}async reset(){var e;this.odsReset.emit(),this.value=(e=this.defaultValue)!==null&&e!==void 0?e:null,this.shouldUpdateIsInvalidState=!0}async setCustomValidity(e){e?this.internals.setValidity({customError:!0},e):this.internals.validity.valid&&this.internals.setValidity({customError:!1})}async toggleMask(){this.isMasked=!this.isMasked,this.odsToggleMask.emit()}async willValidate(){return this.internals.willValidate}onIsInvalidChange(){this.odsInvalid.emit({isInvalid:!!this.isInvalid})}onIsMaskedChange(){this.isPassword=O(this.isMasked)}onTypeChange(){this.inputEl&&(this.inputEl.value=""),this.onInput()}componentWillLoad(){this.onIsMaskedChange(),this.observer=new MutationObserver(e=>{for(const t of e)t.attributeName==="value"&&this.value!==t.oldValue&&this.onValueChange(t.oldValue),t.attributeName==="required"&&(m(this.internals,this.value,this.inputEl),this.isInvalid=!this.internals.validity.valid)}),this.value=D(this.value,this.defaultValue)}componentDidLoad(){var e,t;this.onValueChange(),(e=this.observer)===null||e===void 0||e.observe(this.el,{attributeFilter:["value"],attributeOldValue:!0}),this.inputEl&&((t=this.observer)===null||t===void 0||t.observe(this.inputEl,{attributeFilter:["required"],attributeOldValue:!1}))}disconnectedCallback(){var e;(e=this.observer)===null||e===void 0||e.disconnect()}async formResetCallback(){await this.reset()}handleKeyDown(e){e.key==="Enter"&&e.preventDefault()}onBlur(){this.isInvalid=!this.internals.validity.valid,this.odsBlur.emit()}onInput(){var e,t,a,n,i,l;this.isDisabled||(this.type===r.number&&b((e=this.inputEl)===null||e===void 0?void 0:e.value)?this.value=Number((t=this.inputEl)===null||t===void 0?void 0:t.value):this.value=(n=(a=this.inputEl)===null||a===void 0?void 0:a.value)!==null&&n!==void 0?n:null,this.showClearable=!(!((i=this.inputEl)===null||i===void 0)&&i.validity.valid)&&!(!((l=this.inputEl)===null||l===void 0)&&l.validity.valueMissing))}onListSlotChange(e){var t,a,n;if(this.hasMovedNodes){this.hasMovedNodes=!1;return}if(this.list){const l=e.currentTarget.assignedElements().find(g=>g.tagName==="DATALIST");l?((a=(t=this.el.shadowRoot)===null||t===void 0?void 0:t.querySelector(`datalist#${this.list}`))===null||a===void 0||a.remove(),l.setAttribute("id",this.list),(n=this.el.shadowRoot)===null||n===void 0||n.appendChild(l)):console.warn('[OdsInput] only datalist tag should be slotted on the "list" slot.')}else console.warn('[OdsInput] datalist detected but no "list" attribute on ods-input, did you forgot to set one?');this.hasMovedNodes=!0}onValueChange(e){m(this.internals,this.value,this.inputEl),this.shouldUpdateIsInvalidState&&(this.isInvalid=!this.internals.validity.valid,this.shouldUpdateIsInvalidState=!1),this.odsChange.emit({name:this.name,previousValue:typeof this.value=="number"&&b(e)?Number(e):e,validity:this.internals.validity,value:this.value})}render(){var e;const t=this.isClearable&&!this.isLoading&&(this.showClearable||this.value!==null&&this.value!==""),a=this.isPassword&&!this.isLoading,n=this.type===r.search&&!this.isLoading;return o(I,{key:"ee2c6b853a3e0e9d5eb7a177c4d6e5cebe0399f9",class:"ods-input",disabled:this.isDisabled,readonly:this.isReadonly},o("input",{key:"312c38c512e67c6bc12f616feeb7d718d3070711","aria-label":this.ariaLabel,"aria-labelledby":this.ariaLabelledby,class:{"ods-input__input":!0,"ods-input__input--clearable":t,"ods-input__input--error":this.hasError||!!this.isInvalid,"ods-input__input--loading":this.isLoading,"ods-input__input--search":n,"ods-input__input--toggle-mask":a},disabled:this.isDisabled,list:this.list,max:this.max,maxlength:this.maxlength,min:this.min,minlength:this.minlength,name:this.name,onBlur:()=>this.onBlur(),onFocus:()=>this.odsFocus.emit(),onInput:()=>this.onInput(),onKeyUp:i=>c(i,this.internals.form),pattern:this.pattern,part:"input",placeholder:this.placeholder,readonly:this.isReadonly,ref:i=>this.inputEl=i,required:this.isRequired,step:this.step,type:this.isPassword&&this.isMasked?r.password:this.type,value:((e=this.value)===null||e===void 0?void 0:e.toString())||""}),o("slot",{key:"a86f3cdbc168ade954a7482cd74b4ae977066d76",name:"list",onSlotchange:i=>this.onListSlotChange(i)}),o("div",{key:"60002958a204c26c39551ae5185912c696254781",class:"ods-input__actions"},this.isLoading&&o("ods-spinner",{key:"47f0799e97a1fb425d2d53085c9d5b5ebf13652b",class:"ods-input__actions__spinner",color:this.isDisabled?v.neutral:v.primary}),t&&o("ods-button",{key:"3d4944d2d52cb7c17e27cca7b22aa0d7db159796",color:x.neutral,icon:u.xmark,isDisabled:this.isDisabled||this.isReadonly,label:"",onClick:()=>this.clear(),onKeyDown:i=>this.handleKeyDown(i),onKeyUp:i=>f(i,this.isDisabled,this.clear.bind(this)),size:h.xs,variant:p.ghost}),a&&o("ods-button",{key:"b4b35020c94131267b7aaabe98f0444a6107c1ef",icon:this.isMasked?u.eyeOff:u.eye,isDisabled:this.isDisabled,label:"",onClick:()=>this.toggleMask(),onKeyDown:i=>this.handleKeyDown(i),onKeyUp:i=>f(i,this.isDisabled,this.toggleMask.bind(this)),size:h.xs,variant:p.ghost}),n&&o("ods-button",{key:"353ad4dfcd418fa5a2173ee42dc9f3f883febe3f",icon:u.magnifyingGlass,isDisabled:this.isDisabled||this.isReadonly,label:"",onClick:i=>C(i,this.internals.form),onKeyDown:i=>this.handleKeyDown(i),onKeyUp:i=>c(i,this.internals.form),size:h.xs,type:"submit",variant:p.ghost})))}static get delegatesFocus(){return!0}static get formAssociated(){return!0}get el(){return this}static get watchers(){return{isInvalid:["onIsInvalidChange"],isMasked:["onIsMaskedChange"],type:["onTypeChange"]}}static get style(){return R}},[81,"ods-input",{ariaLabel:[513,"aria-label"],ariaLabelledby:[513,"aria-labelledby"],defaultValue:[520,"default-value"],hasError:[516,"has-error"],isClearable:[516,"is-clearable"],isDisabled:[516,"is-disabled"],isLoading:[516,"is-loading"],isMasked:[1540,"is-masked"],isReadonly:[516,"is-readonly"],isRequired:[516,"is-required"],list:[513],max:[514],maxlength:[514],min:[514],minlength:[514],name:[513],pattern:[513],placeholder:[513],step:[520],type:[513],value:[1544],isInvalid:[32],isPassword:[32],showClearable:[32],checkValidity:[64],clear:[64],getValidationMessage:[64],getValidity:[64],reportValidity:[64],reset:[64],setCustomValidity:[64],toggleMask:[64],willValidate:[64]},[[0,"invalid","onInvalidEvent"]],{isInvalid:["onIsInvalidChange"],isMasked:["onIsMaskedChange"],type:["onTypeChange"]}]);function F(){if(typeof customElements>"u")return;["ods-input","ods-button","ods-icon","ods-spinner"].forEach(e=>{switch(e){case"ods-input":customElements.get(e)||customElements.define(e,S);break;case"ods-button":customElements.get(e)||E();break;case"ods-icon":customElements.get(e)||V();break;case"ods-spinner":customElements.get(e)||M();break}})}F();export{r as O,F as d};
