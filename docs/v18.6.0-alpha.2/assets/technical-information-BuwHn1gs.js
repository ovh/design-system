import{j as e,M as s,C as a}from"./index-Cg27MLKJ.js";import{u as o}from"./index-CRYdQg8Y.js";import{B as m}from"./Banner-B8px5-Yg.js";import{H as t}from"./Heading-J7HCFxl6.js";import{T as d}from"./TechnicalSpecification-CWEOid_d.js";import{h as p}from"./validityState-BuENXwQ9.js";import{T as r,O as c,C as u,D as x,a as v,b as y,E as f,M as b,P as h,R as k,c as j,d as g,S as E,V as S}from"./textarea.stories-CkSfSK8Q.js";import{j as T}from"./form-field.stories-Br9du8pS.js";import"./iframe-J0ZUQmQ0.js";import"../sb-preview/runtime.js";import"./index-8AfNH5n5.js";import"./index-D-8MO0q_.js";import"./index-DrFu-skq.js";import"./index-CGJBSJl7.js";import"./index-DpXZhc7f.js";import"./ods-accordion2-C_uqOg6Y.js";import"./index-DAZhnxgO.js";import"./icon-name-C6aMXAXT.js";import"./ods-icon2-DRPHarK1.js";import"./ods-badge-CjbpLGl8.js";import"./ods-breadcrumb-item2-C_Ah5FZN.js";import"./ods-link2-CtVFUlMR.js";import"./ods-button2-dPaqs0uX.js";import"./ods-spinner2-CPyWCS2f.js";import"./ods-card-CsxtEQHf.js";import"./ods-checkbox2-CJl-a8ad.js";import"./dom-8hoR-urs.js";import"./ods-clipboard2-CewZJu-c.js";import"./ods-input2-C6KOqFAM.js";import"./type-B5zI8QxY.js";import"./ods-tooltip2-CW12aP9b.js";import"./overlay-KZpfSxWH.js";import"./ods-code2-BL2TW0HP.js";import"./ods-combobox2-CyL0bVv9.js";import"./_commonjsHelpers-CLD5em3H.js";import"./debounce-DRefBDpX.js";import"./ods-tag2-Bb2BMy9d.js";import"./ods-datepicker2-CijAhCPy.js";import"./locale-NOa-Gxlr.js";import"./ods-divider-Dtiri0aY.js";import"./ods-divider2-yzIshch6.js";import"./ods-drawer2-DKhK7oOX.js";import"./ods-file-upload2-Ca3mZ5BD.js";import"./ods-progress-bar2-Dg_V5kiw.js";import"./ods-form-field2-BDYkM6lU.js";import"./ods-icon-DTp5PnPI.js";import"./ods-input-CCQ46ZEm.js";import"./ods-link-BCeMi6SV.js";import"./ods-medium2-BnayTic8.js";import"./ods-message-DuyDaLcv.js";import"./ods-modal2-DCK89o-L.js";import"./ods-pagination2-shUGU0gB.js";import"./ods-select2-CEKvSxa4.js";import"./ods-password2-D64-z8ym.js";import"./ods-phone-number2-BL58mHzY.js";import"./ods-popover2-mGbx5HiL.js";import"./ods-quantity2-7U22nj6z.js";import"./ods-radio2-DDJaSdNS.js";import"./ods-range2-wBjnlon-.js";import"./ods-skeleton2-B7sDasgF.js";import"./ods-switch-item2-D-SJNcDd.js";import"./ods-tabs2-ChMEr-fQ.js";import"./ods-table2-oe37kiP3.js";import"./ods-text-BO_pN8NQ.js";import"./ods-textarea2-BDOVTqwb.js";import"./ods-timepicker2-DVnCnUkw.js";import"./ods-toggle2-Bg02aln1.js";import"./StorybookLink-anNL9IKG.js";import"./controls-DX883vx3.js";import"./unsafe-html-VJzuFJfF.js";const V="1.0.0",C="",L=[{kind:"javascript-module",path:"src/globals.ts",declarations:[],exports:[]},{kind:"javascript-module",path:"src/index.ts",declarations:[],exports:[{kind:"js",name:"OdsTextarea",declaration:{name:"OdsTextarea",module:"./components/ods-textarea/ods-textarea"}},{kind:"js",name:"OdsTextareaChangeEvent",declaration:{name:"OdsTextareaChangeEvent",module:"./interfaces/events"}},{kind:"js",name:"OdsTextareaChangeEventDetail",declaration:{name:"OdsTextareaChangeEventDetail",module:"./interfaces/events"}}]},{kind:"javascript-module",path:"src/controller/ods-textarea.ts",declarations:[{kind:"variable",name:"VALUE_DEFAULT_VALUE",type:{text:"null"},default:"null"},{kind:"function",name:"getInitialValue",return:{type:{text:"string | null"}},parameters:[{name:"value",type:{text:"string | null"}},{name:"defaultValue",optional:!0,type:{text:"string"}}]},{kind:"function",name:"updateInternals",return:{type:{text:"void"}},parameters:[{name:"internals",type:{text:"ElementInternals"}},{name:"value",type:{text:"string | null"}},{name:"textareaElement",optional:!0,type:{text:"HTMLTextAreaElement"}}]}],exports:[{kind:"js",name:"getInitialValue",declaration:{name:"getInitialValue",module:"src/controller/ods-textarea.ts"}},{kind:"js",name:"updateInternals",declaration:{name:"updateInternals",module:"src/controller/ods-textarea.ts"}},{kind:"js",name:"VALUE_DEFAULT_VALUE",declaration:{name:"VALUE_DEFAULT_VALUE",module:"src/controller/ods-textarea.ts"}}]},{kind:"javascript-module",path:"src/interfaces/events.ts",declarations:[],exports:[{kind:"js",name:"OdsTextareaChangeEvent",declaration:{name:"OdsTextareaChangeEvent",module:"src/interfaces/events.ts"}},{kind:"js",name:"OdsTextareaChangeEventDetail",declaration:{name:"OdsTextareaChangeEventDetail",module:"src/interfaces/events.ts"}}]},{kind:"javascript-module",path:"src/components/ods-textarea/ods-textarea.tsx",declarations:[{kind:"class",description:"",name:"OdsTextarea",members:[{kind:"field",name:"observer",type:{text:"MutationObserver | undefined"},privacy:"private"},{kind:"field",name:"shouldUpdateIsInvalidState",type:{text:"boolean"},privacy:"private",default:"false"},{kind:"field",name:"textareaElement",type:{text:"HTMLTextAreaElement | undefined"},privacy:"private"},{kind:"field",name:"el",type:{text:"HTMLElement"}},{kind:"field",name:"internals",type:{text:"ElementInternals"},privacy:"private"},{kind:"field",name:"isInvalid",type:{text:"boolean | undefined"}},{kind:"field",name:"ariaLabel",type:{text:"HTMLElement['ariaLabel']"},privacy:"public",default:"null"},{kind:"field",name:"ariaLabelledby",type:{text:"string | undefined"},privacy:"public"},{kind:"field",name:"cols",type:{text:"number | undefined"},privacy:"public"},{kind:"field",name:"defaultValue",type:{text:"string | undefined"},privacy:"public"},{kind:"field",name:"hasError",type:{text:"boolean"},privacy:"public",default:"false"},{kind:"field",name:"hasSpellcheck",type:{text:"boolean"},privacy:"public",default:"false"},{kind:"field",name:"isDisabled",type:{text:"boolean"},privacy:"public",default:"false"},{kind:"field",name:"isReadonly",type:{text:"boolean"},privacy:"public",default:"false"},{kind:"field",name:"isRequired",type:{text:"boolean"},privacy:"public",default:"false"},{kind:"field",name:"isResizable",type:{text:"boolean"},privacy:"public",default:"false"},{kind:"field",name:"maxlength",type:{text:"number | undefined"},privacy:"public"},{kind:"field",name:"minlength",type:{text:"number | undefined"},privacy:"public"},{kind:"field",name:"name",type:{text:"string"},privacy:"public"},{kind:"field",name:"placeholder",type:{text:"string | undefined"},privacy:"public"},{kind:"field",name:"rows",type:{text:"number | undefined"},privacy:"public"},{kind:"field",name:"value",type:{text:"string | null"},privacy:"public",default:"VALUE_DEFAULT_VALUE"},{kind:"method",name:"onInvalidEvent",return:{type:{text:"void"}},parameters:[{name:"event",type:{text:"Event"}}]},{kind:"method",name:"checkValidity",privacy:"public",return:{type:{text:"Promise<boolean>"}}},{kind:"method",name:"clear",privacy:"public",return:{type:{text:"Promise<void>"}}},{kind:"method",name:"getValidationMessage",privacy:"public",return:{type:{text:"Promise<string>"}}},{kind:"method",name:"getValidity",privacy:"public",return:{type:{text:"Promise<ValidityState>"}}},{kind:"method",name:"reportValidity",privacy:"public",return:{type:{text:"Promise<boolean>"}}},{kind:"method",name:"reset",privacy:"public",return:{type:{text:"Promise<void>"}}},{kind:"method",name:"willValidate",privacy:"public",return:{type:{text:"Promise<boolean>"}}},{kind:"method",name:"onIsInvalidChange",return:{type:{text:"void"}}},{kind:"method",name:"formResetCallback",return:{type:{text:"Promise<void>"}}},{kind:"method",name:"onBlur",privacy:"private",return:{type:{text:"void"}}},{kind:"method",name:"onFocus",privacy:"private",return:{type:{text:"void"}}},{kind:"method",name:"onInput",privacy:"private",return:{type:{text:"void"}}},{kind:"method",name:"onValueChange",privacy:"private",return:{type:{text:"void"}},parameters:[{name:"previousValue",optional:!0,type:{text:"string | null"}}]},{kind:"method",name:"render",return:{type:{text:"FunctionalComponent"}}}],attributes:[{name:"aria-label",fieldName:"ariaLabel",type:{text:"HTMLElement['ariaLabel']"}},{name:"aria-labelledby",fieldName:"ariaLabelledby",type:{text:"string"}},{name:"cols",fieldName:"cols",type:{text:"number"}},{name:"default-value",fieldName:"defaultValue",type:{text:"string"}},{name:"has-error",fieldName:"hasError",type:{text:"boolean"}},{name:"has-spellcheck",fieldName:"hasSpellcheck",type:{text:"boolean"}},{name:"is-disabled",fieldName:"isDisabled",type:{text:"boolean"}},{name:"is-readonly",fieldName:"isReadonly",type:{text:"boolean"}},{name:"is-required",fieldName:"isRequired",type:{text:"boolean"}},{name:"is-resizable",fieldName:"isResizable",type:{text:"boolean"}},{name:"maxlength",fieldName:"maxlength",type:{text:"number"}},{name:"minlength",fieldName:"minlength",type:{text:"number"}},{name:"name",fieldName:"name",type:{text:"string"}},{name:"placeholder",fieldName:"placeholder",type:{text:"string"}},{name:"rows",fieldName:"rows",type:{text:"number"}},{name:"value",fieldName:"value",type:{text:"string | null"}}],tagName:"ods-textarea",events:[{name:"odsBlur",type:{text:"EventEmitter<void>"}},{name:"odsChange",type:{text:"EventEmitter<OdsTextareaChangeEventDetail>"}},{name:"odsClear",type:{text:"EventEmitter<void>"}},{name:"odsFocus",type:{text:"EventEmitter<void>"}},{name:"odsInvalid",type:{text:"EventEmitter<{ isInvalid: boolean }>"}},{name:"odsReset",type:{text:"EventEmitter<void>"}}],customElement:!0}],exports:[{kind:"js",name:"OdsTextarea",declaration:{name:"OdsTextarea",module:"src/components/ods-textarea/ods-textarea.tsx"}},{kind:"custom-element-definition",name:"ods-textarea",declaration:{name:"OdsTextarea",module:"src/components/ods-textarea/ods-textarea.tsx"}}]}],w={},D={schemaVersion:V,readme:C,modules:L,enumPlugin:w};function l(i){const n={code:"code",p:"p",...o(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{of:r,name:"Technical information"}),`
`,e.jsx(m,{of:r}),`
`,e.jsx(t,{label:"Overview",level:2}),`
`,e.jsx(a,{of:c,sourceState:"none"}),`
`,e.jsx(d,{data:D}),`
`,e.jsx(t,{label:"Style customization",level:2}),`
`,e.jsxs(n.p,{children:["You can update the component style using a class on the web-component directly or access the internal input using the part ",e.jsx(n.code,{children:"textarea"}),"."]}),`
`,e.jsx(n.p,{children:"Custom CSS:"}),`
`,e.jsx(a,{of:u,sourceState:"shown"}),`
`,e.jsx(t,{label:"Examples",level:2}),`
`,e.jsx(t,{label:"Default",level:3}),`
`,e.jsx(a,{of:x,sourceState:"shown"}),`
`,e.jsx(t,{label:"Cols",level:3}),`
`,e.jsx(a,{of:v,sourceState:"shown"}),`
`,e.jsx(t,{label:"Disabled",level:3}),`
`,e.jsx(a,{of:y,sourceState:"shown"}),`
`,e.jsx(t,{label:"Error",level:3}),`
`,e.jsx(a,{of:f,sourceState:"shown"}),`
`,e.jsx(t,{label:"Max/Min length",level:3}),`
`,e.jsx(n.p,{children:`When setting length boundaries on a textarea element, it is advised to add an informative counter at the bottom
of the component displaying the current length and thus the remaining available characters (see Form Field example beneath).`}),`
`,e.jsx(a,{of:b,sourceState:"shown"}),`
`,e.jsx(t,{label:"Placeholder",level:3}),`
`,e.jsx(a,{of:h,sourceState:"shown"}),`
`,e.jsx(t,{label:"Readonly",level:3}),`
`,e.jsx(a,{of:k,sourceState:"shown"}),`
`,e.jsx(t,{label:"Resizable",level:3}),`
`,e.jsx(a,{of:j,sourceState:"shown"}),`
`,e.jsx(t,{label:"Rows",level:3}),`
`,e.jsx(a,{of:g,sourceState:"shown"}),`
`,e.jsx(t,{label:"Spellcheck",level:3}),`
`,e.jsx(a,{of:E,sourceState:"shown"}),`
`,e.jsx(t,{label:"Validity State",level:3}),`
`,e.jsx(a,{of:S,source:{transform:p},sourceState:"shown"}),`
`,e.jsx(t,{label:"Included in a Form Field",level:3}),`
`,e.jsx(a,{of:T,sourceState:"shown"})]})}function Ye(i={}){const{wrapper:n}={...o(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(l,{...i})}):l(i)}export{Ye as default};
