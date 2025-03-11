import{p as c,H as i,c as l,h as s,a as _}from"./index-DAZhnxgO.js";import{O as n}from"./icon-name-C6aMXAXT.js";import{d as b}from"./ods-icon2-DRPHarK1.js";var d;(function(a){a.critical="critical",a.information="information",a.neutral="neutral",a.success="success",a.warning="warning"})(d||(d={}));Object.freeze(Object.values(d));var r;(function(a){a.lg="lg",a.md="md"})(r||(r={}));Object.freeze(Object.values(r));function e(a,o,t){o||t.emit({id:a.id})}function u(a,o,t){e(a,o,t)}function f(a){a.key===" "&&a.preventDefault()}function v(a,o,t,g){switch(a.key){case" ":case"Enter":e(o,t,g);break}}const m=":host(.ods-tag){display:inline-block}.ods-tag__tag{box-sizing:border-box;display:inline-flex;flex-flow:row;grid-gap:0.25rem;align-items:center;border-width:2px;border-style:solid;border-radius:var(--ods-border-radius-lg);cursor:pointer}.ods-tag__tag:focus-visible{outline:var(--ods-outline-style-default) var(--ods-outline-width) var(--ods-outline-color-default);outline-offset:var(--ods-outline-offset)}.ods-tag__tag:not(.ods-tag__tag.ods-tag__tag--disabled).ods-tag__tag--critical{border-color:var(--ods-color-critical-100);background-color:var(--ods-color-critical-000);color:var(--ods-color-critical-900)}.ods-tag__tag:not(.ods-tag__tag.ods-tag__tag--disabled).ods-tag__tag--critical:focus-visible,.ods-tag__tag:not(.ods-tag__tag.ods-tag__tag--disabled).ods-tag__tag--critical:hover{border-color:var(--ods-color-critical-200);background-color:var(--ods-color-critical-050)}.ods-tag__tag:not(.ods-tag__tag.ods-tag__tag--disabled).ods-tag__tag--critical:active{border-color:var(--ods-color-critical-300);background-color:var(--ods-color-critical-100)}.ods-tag__tag:not(.ods-tag__tag.ods-tag__tag--disabled).ods-tag__tag--information{border-color:var(--ods-color-information-100);background-color:var(--ods-color-information-000);color:var(--ods-color-information-900)}.ods-tag__tag:not(.ods-tag__tag.ods-tag__tag--disabled).ods-tag__tag--information:focus-visible,.ods-tag__tag:not(.ods-tag__tag.ods-tag__tag--disabled).ods-tag__tag--information:hover{border-color:var(--ods-color-information-200);background-color:var(--ods-color-information-100)}.ods-tag__tag:not(.ods-tag__tag.ods-tag__tag--disabled).ods-tag__tag--information:active{border-color:var(--ods-color-information-300);background-color:var(--ods-color-information-200)}.ods-tag__tag:not(.ods-tag__tag.ods-tag__tag--disabled).ods-tag__tag--neutral{border-color:var(--ods-color-neutral-100);background-color:var(--ods-color-neutral-000);color:var(--ods-color-neutral-700)}.ods-tag__tag:not(.ods-tag__tag.ods-tag__tag--disabled).ods-tag__tag--neutral:focus-visible,.ods-tag__tag:not(.ods-tag__tag.ods-tag__tag--disabled).ods-tag__tag--neutral:hover{border-color:var(--ods-color-neutral-200);background-color:var(--ods-color-neutral-100)}.ods-tag__tag:not(.ods-tag__tag.ods-tag__tag--disabled).ods-tag__tag--neutral:active{border-color:var(--ods-color-neutral-300);background-color:var(--ods-color-neutral-200)}.ods-tag__tag:not(.ods-tag__tag.ods-tag__tag--disabled).ods-tag__tag--success{border-color:var(--ods-color-success-100);background-color:var(--ods-color-success-000);color:var(--ods-color-success-900)}.ods-tag__tag:not(.ods-tag__tag.ods-tag__tag--disabled).ods-tag__tag--success:focus-visible,.ods-tag__tag:not(.ods-tag__tag.ods-tag__tag--disabled).ods-tag__tag--success:hover{border-color:var(--ods-color-success-200);background-color:var(--ods-color-success-050)}.ods-tag__tag:not(.ods-tag__tag.ods-tag__tag--disabled).ods-tag__tag--success:active{border-color:var(--ods-color-success-300);background-color:var(--ods-color-success-100)}.ods-tag__tag:not(.ods-tag__tag.ods-tag__tag--disabled).ods-tag__tag--warning{border-color:var(--ods-color-warning-100);background-color:var(--ods-color-warning-000);color:var(--ods-color-warning-900)}.ods-tag__tag:not(.ods-tag__tag.ods-tag__tag--disabled).ods-tag__tag--warning:focus-visible,.ods-tag__tag:not(.ods-tag__tag.ods-tag__tag--disabled).ods-tag__tag--warning:hover{border-color:var(--ods-color-warning-200);background-color:var(--ods-color-warning-050)}.ods-tag__tag:not(.ods-tag__tag.ods-tag__tag--disabled).ods-tag__tag--warning:active{border-color:var(--ods-color-warning-300);background-color:var(--ods-color-warning-100)}.ods-tag__tag--disabled{border-color:var(--ods-color-border-disabled-default);background-color:var(--ods-color-background-disabled-default);cursor:not-allowed;color:var(--ods-color-text-disabled-default)}.ods-tag__tag--md{padding:1px 8px;height:20px;font-size:0.875rem}.ods-tag__tag--md .ods-tag__tag__close{font-size:0.75rem}.ods-tag__tag--md .ods-tag__tag__icon{font-size:0.833rem}.ods-tag__tag--lg{padding:2px 10px;height:28px;font-size:1rem}.ods-tag__tag--lg .ods-tag__tag__close{font-size:0.875rem}.ods-tag__tag--lg .ods-tag__tag__icon{font-size:1.05rem}.ods-tag__tag__label{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}",h=m,k=c(class extends i{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.odsRemove=l(this,"odsRemove",7),this.color=d.information,this.icon=void 0,this.isDisabled=!1,this.label=void 0,this.size=r.md}onClick(){u(this.el,this.isDisabled,this.odsRemove)}onKeyDown(o){f(o)}onKeyUp(o){v(o,this.el,this.isDisabled,this.odsRemove)}render(){return s(_,{key:"fb88fd8921a518181d25069362aa785930c78b2e",class:"ods-tag",onFocus:()=>{var o;return(o=this.tagElement)===null||o===void 0?void 0:o.focus()}},s("div",{key:"c402bfafc91041f4326087454452d8ae6b791c2a",class:{"ods-tag__tag":!0,"ods-tag__tag--disabled":this.isDisabled,[`ods-tag__tag--${this.color}`]:!0,[`ods-tag__tag--${this.size}`]:!0},part:"tag",ref:o=>o&&(this.tagElement=o),tabindex:this.isDisabled?-1:0},!!this.icon&&s("ods-icon",{key:"3936fdf9ace7295273741d11318b11919d30fbb8",class:"ods-tag__tag__icon",name:this.icon}),s("span",{key:"7b1473ab72afa869aefcadd966965422c8ee8b78",class:"ods-tag__tag__label"},this.label),s("ods-icon",{key:"96fb1307cd55a8102d54e37700c329862f9ceeba",class:"ods-tag__tag__close",name:n.xmark})))}get el(){return this}static get style(){return h}},[1,"ods-tag",{color:[513],icon:[513],isDisabled:[516,"is-disabled"],label:[513],size:[513]},[[0,"click","onClick"],[0,"keydown","onKeyDown"],[0,"keyup","onKeyUp"]]]);function p(){if(typeof customElements>"u")return;["ods-tag","ods-icon"].forEach(o=>{switch(o){case"ods-tag":customElements.get(o)||customElements.define(o,k);break;case"ods-icon":customElements.get(o)||b();break}})}p();export{p as d};
