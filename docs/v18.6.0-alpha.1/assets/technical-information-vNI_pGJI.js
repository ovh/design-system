import{j as e,M as d,C as n}from"./index-BCVJDEqf.js";import{u as s}from"./index-_YJSRz3a.js";import{B as l}from"./Banner-rrMSB4A0.js";import{H as t}from"./Heading-DYNNEBec.js";import{T as m}from"./TechnicalSpecification-bY6h1Yj9.js";import{h as p}from"./validityState-BuENXwQ9.js";import{C as o,O as c,a as u,D as x,A as b,b as h,c as v,d as f,e as y,E as k,I as j,f as C,V as g}from"./checkbox.stories-BTlTHEDK.js";import{C as E}from"./form-field.stories-Br9du8pS.js";import"./iframe-B5YUgUg3.js";import"../sb-preview/runtime.js";import"./index-8AfNH5n5.js";import"./index-D-8MO0q_.js";import"./index-DrFu-skq.js";import"./index-BLVG44ao.js";import"./index-CwrMpZKn.js";import"./ods-accordion2-C_uqOg6Y.js";import"./index-DAZhnxgO.js";import"./icon-name-C6aMXAXT.js";import"./ods-icon2-DRPHarK1.js";import"./ods-badge-DLluvt0I.js";import"./ods-breadcrumb-item2-C_Ah5FZN.js";import"./ods-link2-CtVFUlMR.js";import"./ods-button2-dPaqs0uX.js";import"./ods-spinner2-CPyWCS2f.js";import"./ods-card-CsxtEQHf.js";import"./ods-checkbox2-CJl-a8ad.js";import"./dom-8hoR-urs.js";import"./ods-clipboard2-CewZJu-c.js";import"./ods-input2-C6KOqFAM.js";import"./type-B5zI8QxY.js";import"./ods-tooltip2-CW12aP9b.js";import"./overlay-KZpfSxWH.js";import"./ods-code2-BL2TW0HP.js";import"./ods-combobox2-BXJ8jrhz.js";import"./_commonjsHelpers-CLD5em3H.js";import"./debounce-DRefBDpX.js";import"./ods-tag2-Bb2BMy9d.js";import"./ods-datepicker2-CijAhCPy.js";import"./locale-NOa-Gxlr.js";import"./ods-divider-Dtiri0aY.js";import"./ods-divider2-yzIshch6.js";import"./ods-drawer2-DKhK7oOX.js";import"./ods-file-upload2-Ca3mZ5BD.js";import"./ods-progress-bar2-Dg_V5kiw.js";import"./ods-form-field2-BDYkM6lU.js";import"./ods-icon-DTp5PnPI.js";import"./ods-input-CCQ46ZEm.js";import"./ods-link-BCeMi6SV.js";import"./ods-medium2-BnayTic8.js";import"./ods-message-DuyDaLcv.js";import"./ods-modal2-DCK89o-L.js";import"./ods-pagination2-shUGU0gB.js";import"./ods-select2-CEKvSxa4.js";import"./ods-password2-D64-z8ym.js";import"./ods-phone-number2-BL58mHzY.js";import"./ods-popover2-mGbx5HiL.js";import"./ods-quantity2-7U22nj6z.js";import"./ods-radio2-DDJaSdNS.js";import"./ods-range2-wBjnlon-.js";import"./ods-skeleton2-B7sDasgF.js";import"./ods-switch-item2-D-SJNcDd.js";import"./ods-tabs2-ChMEr-fQ.js";import"./ods-table2-oe37kiP3.js";import"./ods-text-BO_pN8NQ.js";import"./ods-textarea2-BDOVTqwb.js";import"./ods-timepicker2-DVnCnUkw.js";import"./ods-toggle2-Bg02aln1.js";import"./StorybookLink-D-rUt3MS.js";import"./controls-DX883vx3.js";import"./unsafe-html-VJzuFJfF.js";const S="1.0.0",I="",O=[{kind:"javascript-module",path:"src/globals.ts",declarations:[],exports:[]},{kind:"javascript-module",path:"src/index.ts",declarations:[],exports:[{kind:"js",name:"OdsCheckbox",declaration:{name:"OdsCheckbox",module:"./components/ods-checkbox/ods-checkbox"}},{kind:"js",name:"OdsCheckboxChangeEvent",declaration:{name:"OdsCheckboxChangeEvent",module:"./interfaces/event"}},{kind:"js",name:"OdsCheckboxChangeEventDetail",declaration:{name:"OdsCheckboxChangeEventDetail",module:"./interfaces/event"}}]},{kind:"javascript-module",path:"src/interfaces/event.ts",declarations:[],exports:[{kind:"js",name:"OdsCheckboxChangeEvent",declaration:{name:"OdsCheckboxChangeEvent",module:"src/interfaces/event.ts"}},{kind:"js",name:"OdsCheckboxChangeEventDetail",declaration:{name:"OdsCheckboxChangeEventDetail",module:"src/interfaces/event.ts"}}]},{kind:"javascript-module",path:"src/components/ods-checkbox/ods-checkbox.tsx",declarations:[{kind:"class",description:"",name:"OdsCheckbox",members:[{kind:"field",name:"inputEl",type:{text:"HTMLInputElement | undefined"},privacy:"private"},{kind:"field",name:"observer",type:{text:"MutationObserver | undefined"},privacy:"private"},{kind:"field",name:"isInvalid",type:{text:"boolean | undefined"},privacy:"private"},{kind:"field",name:"ariaLabel",type:{text:"HTMLElement['ariaLabel']"},privacy:"public",default:"null"},{kind:"field",name:"ariaLabelledby",type:{text:"string | undefined"},privacy:"public"},{kind:"field",name:"hasError",type:{text:"boolean"},privacy:"public",default:"false"},{kind:"field",name:"inputId",type:{text:"string | undefined"},privacy:"public"},{kind:"field",name:"isChecked",type:{text:"boolean"},privacy:"public",default:"false"},{kind:"field",name:"isDisabled",type:{text:"boolean"},privacy:"public",default:"false"},{kind:"field",name:"isIndeterminate",type:{text:"boolean"},privacy:"public",default:"false"},{kind:"field",name:"isRequired",type:{text:"boolean"},privacy:"public",default:"false"},{kind:"field",name:"name",type:{text:"string"},privacy:"public"},{kind:"field",name:"value",type:{text:"string | null"},privacy:"public",default:"null"},{kind:"method",name:"checkValidity",privacy:"public",return:{type:{text:"Promise<boolean | undefined>"}}},{kind:"method",name:"clear",privacy:"public",return:{type:{text:"Promise<void>"}}},{kind:"method",name:"getValidationMessage",privacy:"public",return:{type:{text:"Promise<string | undefined>"}}},{kind:"method",name:"getValidity",privacy:"public",return:{type:{text:"Promise<ValidityState | undefined>"}}},{kind:"method",name:"reportValidity",privacy:"public",return:{type:{text:"Promise<boolean | undefined>"}}},{kind:"method",name:"reset",privacy:"public",return:{type:{text:"Promise<void>"}}},{kind:"method",name:"willValidate",privacy:"public",return:{type:{text:"Promise<boolean | undefined>"}}},{kind:"method",name:"onIsInvalidChange",return:{type:{text:"void"}}},{kind:"method",name:"formResetCallback",return:{type:{text:"Promise<void>"}}},{kind:"method",name:"getOdsCheckboxGroupByName",privacy:"private",return:{type:{text:"NodeListOf<Element>"}}},{kind:"method",name:"onBlur",privacy:"private",return:{type:{text:"void"}}},{kind:"method",name:"onInput",privacy:"private",return:{type:{text:"void"}}},{kind:"method",name:"onInvalidEvent",privacy:"private",return:{type:{text:"void"}},parameters:[{name:"event",type:{text:"Event"}}]},{kind:"method",name:"render",return:{type:{text:"FunctionalComponent"}}}],attributes:[{name:"aria-label",fieldName:"ariaLabel",type:{text:"HTMLElement['ariaLabel']"}},{name:"aria-labelledby",fieldName:"ariaLabelledby",type:{text:"string"}},{name:"has-error",fieldName:"hasError",type:{text:"boolean"}},{name:"input-id",fieldName:"inputId",type:{text:"string"}},{name:"is-checked",fieldName:"isChecked",type:{text:"boolean"}},{name:"is-disabled",fieldName:"isDisabled",type:{text:"boolean"}},{name:"is-indeterminate",fieldName:"isIndeterminate",type:{text:"boolean"}},{name:"is-required",fieldName:"isRequired",type:{text:"boolean"}},{name:"name",fieldName:"name",type:{text:"string"}},{name:"value",fieldName:"value",type:{text:"string | null"}}],tagName:"ods-checkbox",events:[{name:"odsBlur",type:{text:"EventEmitter<void>"}},{name:"odsChange",type:{text:"EventEmitter<OdsCheckboxChangeEventDetail>"}},{name:"odsClear",type:{text:"EventEmitter<void>"}},{name:"odsFocus",type:{text:"EventEmitter<void>"}},{name:"odsInvalid",type:{text:"EventEmitter<{ isInvalid: boolean }>"}},{name:"odsReset",type:{text:"EventEmitter<void>"}}],customElement:!0}],exports:[{kind:"js",name:"OdsCheckbox",declaration:{name:"OdsCheckbox",module:"src/components/ods-checkbox/ods-checkbox.tsx"}},{kind:"custom-element-definition",name:"ods-checkbox",declaration:{name:"OdsCheckbox",module:"src/components/ods-checkbox/ods-checkbox.tsx"}}]}],w={},D={schemaVersion:S,readme:I,modules:O,enumPlugin:w};function r(a){const i={code:"code",p:"p",...s(),...a.components};return e.jsxs(e.Fragment,{children:[e.jsx(d,{of:o,name:"Technical information"}),`
`,e.jsx(l,{of:o}),`
`,e.jsx(t,{label:"Overview",level:2}),`
`,e.jsx(n,{of:c,sourceState:"none"}),`
`,e.jsx(m,{data:D}),`
`,e.jsx(t,{label:"Style customization",level:2}),`
`,e.jsxs(i.p,{children:["You can add your own style on the checkbox element using the part ",e.jsx(i.code,{children:"checkbox"}),"."]}),`
`,e.jsx(i.p,{children:"Custom CSS:"}),`
`,e.jsx(n,{of:u,sourceState:"shown"}),`
`,e.jsx(t,{label:"Examples",level:2}),`
`,e.jsx(t,{label:"Default",level:3}),`
`,e.jsx(n,{of:x,sourceState:"shown"}),`
`,e.jsx(t,{label:"Alignment",level:3}),`
`,e.jsx(i.p,{children:`The checkbox component may not be vertically aligned by default, depending on the content following it.
You'll need to manage this with CSS on parent element.`}),`
`,e.jsx(n,{of:b,sourceState:"shown"}),`
`,e.jsx(t,{label:"Checked",level:3}),`
`,e.jsx(n,{of:h,sourceState:"shown"}),`
`,e.jsx(t,{label:"Disabled",level:3}),`
`,e.jsx(n,{of:v,sourceState:"shown"}),`
`,e.jsx(t,{label:"Disabled Checked",level:3}),`
`,e.jsx(n,{of:f,sourceState:"shown"}),`
`,e.jsx(t,{label:"Disabled Indeterminate",level:3}),`
`,e.jsx(n,{of:y,sourceState:"shown"}),`
`,e.jsx(t,{label:"Error",level:3}),`
`,e.jsx(n,{of:k,sourceState:"shown"}),`
`,e.jsx(t,{label:"InputId",level:3}),`
`,e.jsxs(i.p,{children:["The ",e.jsx(i.code,{children:"id"})," is encapsulated by the ",e.jsx(i.code,{children:"input-id"})," attribute. This way you can link a label (attribute ",e.jsx(i.code,{children:"for"}),") to the input."]}),`
`,e.jsx(n,{of:j,sourceState:"shown"}),`
`,e.jsx(t,{label:"Indeterminate",level:3}),`
`,e.jsx(n,{of:C,sourceState:"shown"}),`
`,e.jsx(t,{label:"Validity State",level:3}),`
`,e.jsx(n,{of:g,source:{transform:p},sourceState:"shown"}),`
`,e.jsx(t,{label:"Included in a Form Field",level:3}),`
`,e.jsx(n,{of:E,sourceState:"shown"})]})}function Ge(a={}){const{wrapper:i}={...s(),...a.components};return i?e.jsx(i,{...a,children:e.jsx(r,{...a})}):r(a)}export{Ge as default};
