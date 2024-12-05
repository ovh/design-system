import{j as e}from"./jsx-runtime-Cz980c3e.js";import{u as r}from"./index-C2TcKet0.js";import{M as l,C as a}from"./index-Nkgk7YEz.js";import{B as m}from"./Banner-DJBI_cBG.js";import{H as n}from"./Heading-DYcKlEuJ.js";import{T as c}from"./TechnicalSpecification-BIVauIEC.js";import{h as p}from"./validityState-ExJ3RVbh.js";import{R as o,C as d,a as u,D as x,A as h,b as v,c as f,E as y,G as b,d as j,I as k,V as g}from"./radio.stories-DOil95nI.js";import{R as E}from"./form-field.stories-wTln4IQe.js";import"./iframe-COPR_OVU.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-B_J8iUie.js";import"./index-DX_4BEHg.js";import"./index-DrFu-skq.js";import"./index-CveiHl7W.js";import"./index-BvZXb4_Z.js";import"./lit-html-D-ZEPr28.js";import"./controls-D697y8_r.js";import"./unsafe-html-HR6uCwaW.js";const C="1.0.0",R="",S=[{kind:"javascript-module",path:"src/globals.ts",declarations:[],exports:[]},{kind:"javascript-module",path:"src/index.ts",declarations:[],exports:[{kind:"js",name:"OdsRadio",declaration:{name:"OdsRadio",module:"./components/ods-radio/ods-radio"}},{kind:"js",name:"OdsRadioChangeEvent",declaration:{name:"OdsRadioChangeEvent",module:"./interfaces/events"}},{kind:"js",name:"OdsRadioChangeEventDetail",declaration:{name:"OdsRadioChangeEventDetail",module:"./interfaces/events"}}]},{kind:"javascript-module",path:"src/interfaces/events.ts",declarations:[],exports:[{kind:"js",name:"OdsRadioChangeEvent",declaration:{name:"OdsRadioChangeEvent",module:"src/interfaces/events.ts"}},{kind:"js",name:"OdsRadioChangeEventDetail",declaration:{name:"OdsRadioChangeEventDetail",module:"src/interfaces/events.ts"}}]},{kind:"javascript-module",path:"src/components/ods-radio/ods-radio.tsx",declarations:[{kind:"class",description:"",name:"OdsRadio",members:[{kind:"field",name:"inputEl",type:{text:"HTMLInputElement | undefined"},privacy:"private"},{kind:"field",name:"observer",type:{text:"MutationObserver | undefined"},privacy:"private"},{kind:"field",name:"isInvalid",type:{text:"boolean | undefined"},privacy:"private"},{kind:"field",name:"ariaLabel",type:{text:"HTMLElement['ariaLabel']"},privacy:"public",default:"null"},{kind:"field",name:"ariaLabelledby",type:{text:"string | undefined"},privacy:"public"},{kind:"field",name:"hasError",type:{text:"boolean"},privacy:"public",default:"false"},{kind:"field",name:"inputId",type:{text:"string | undefined"},privacy:"public"},{kind:"field",name:"isChecked",type:{text:"boolean"},privacy:"public",default:"false"},{kind:"field",name:"isDisabled",type:{text:"boolean"},privacy:"public",default:"false"},{kind:"field",name:"isRequired",type:{text:"boolean"},privacy:"public",default:"false"},{kind:"field",name:"name",type:{text:"string"},privacy:"public"},{kind:"field",name:"value",type:{text:"string | null"},privacy:"public",default:"null"},{kind:"method",name:"checkValidity",privacy:"public",return:{type:{text:"Promise<boolean | undefined>"}}},{kind:"method",name:"clear",privacy:"public",return:{type:{text:"Promise<void>"}}},{kind:"method",name:"getValidationMessage",privacy:"public",return:{type:{text:"Promise<string | undefined>"}}},{kind:"method",name:"getValidity",privacy:"public",return:{type:{text:"Promise<ValidityState | undefined>"}}},{kind:"method",name:"reportValidity",privacy:"public",return:{type:{text:"Promise<boolean | undefined>"}}},{kind:"method",name:"reset",privacy:"public",return:{type:{text:"Promise<void>"}}},{kind:"method",name:"select",privacy:"public",return:{type:{text:"Promise<void>"}}},{kind:"method",name:"willValidate",privacy:"public",return:{type:{text:"Promise<boolean | undefined>"}}},{kind:"method",name:"onIsInvalidChange",return:{type:{text:"void"}}},{kind:"method",name:"formResetCallback",return:{type:{text:"Promise<void>"}}},{kind:"method",name:"getOdsRadiosGroupByName",privacy:"private",return:{type:{text:"NodeListOf<Element & OdsRadio>"}}},{kind:"method",name:"onBlur",privacy:"private",return:{type:{text:"void"}}},{kind:"method",name:"onInput",privacy:"private",return:{type:{text:"void"}},parameters:[{name:"event",type:{text:"Event"}}]},{kind:"method",name:"onInvalidEvent",privacy:"private",return:{type:{text:"void"}},parameters:[{name:"event",type:{text:"Event"}}]},{kind:"method",name:"render",return:{type:{text:"FunctionalComponent"}}}],attributes:[{name:"aria-label",fieldName:"ariaLabel",type:{text:"HTMLElement['ariaLabel']"}},{name:"aria-labelledby",fieldName:"ariaLabelledby",type:{text:"string"}},{name:"has-error",fieldName:"hasError",type:{text:"boolean"}},{name:"input-id",fieldName:"inputId",type:{text:"string"}},{name:"is-checked",fieldName:"isChecked",type:{text:"boolean"}},{name:"is-disabled",fieldName:"isDisabled",type:{text:"boolean"}},{name:"is-required",fieldName:"isRequired",type:{text:"boolean"}},{name:"name",fieldName:"name",type:{text:"string"}},{name:"value",fieldName:"value",type:{text:"string | null"}}],tagName:"ods-radio",events:[{name:"odsBlur",type:{text:"EventEmitter<void>"}},{name:"odsChange",type:{text:"EventEmitter<OdsRadioChangeEventDetail>"}},{name:"odsClear",type:{text:"EventEmitter<void>"}},{name:"odsFocus",type:{text:"EventEmitter<void>"}},{name:"odsInvalid",type:{text:"EventEmitter<{ isInvalid: boolean }>"}},{name:"odsReset",type:{text:"EventEmitter<void>"}}],customElement:!0}],exports:[{kind:"js",name:"OdsRadio",declaration:{name:"OdsRadio",module:"src/components/ods-radio/ods-radio.tsx"}},{kind:"custom-element-definition",name:"ods-radio",declaration:{name:"OdsRadio",module:"src/components/ods-radio/ods-radio.tsx"}}]}],w={},O={schemaVersion:C,readme:R,modules:S,enumPlugin:w};function s(i){const t={code:"code",p:"p",strong:"strong",...r(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{of:o,name:"Technical information"}),`
`,e.jsx(m,{of:o}),`
`,e.jsx(n,{label:"Overview",level:2}),`
`,e.jsxs(t.p,{children:[e.jsx(t.strong,{children:"Radio"})," are used when, facing a list of two or more options, the user must select only one."]}),`
`,e.jsxs(t.p,{children:["The previous components ",e.jsx(t.code,{children:"radio"}),", ",e.jsx(t.code,{children:"radio-button"})," and ",e.jsx(t.code,{children:"radio-group"})," have now been included in ",e.jsx(t.code,{children:"radio"})]}),`
`,e.jsxs(t.p,{children:["The behavior of the old ",e.jsx(t.code,{children:"radio-group"})," is now automatic, giving the radio the same name as the native implementation."]}),`
`,e.jsxs(t.p,{children:["There is no longer a ",e.jsx(t.code,{children:"radio"})," component to make clickable Element."]}),`
`,e.jsx(a,{of:d,sourceState:"none"}),`
`,e.jsx(c,{data:O}),`
`,e.jsx(n,{label:"Style customization",level:2}),`
`,e.jsxs(t.p,{children:["You can add your own style on the radio element using the part ",e.jsx(t.code,{children:"radio"}),"."]}),`
`,e.jsx(t.p,{children:"Custom CSS:"}),`
`,e.jsx(a,{of:u,sourceState:"shown"}),`
`,e.jsx(n,{label:"Examples",level:2}),`
`,e.jsx(n,{label:"Default",level:3}),`
`,e.jsx(a,{of:x,sourceState:"shown"}),`
`,e.jsx(n,{label:"Alignment",level:3}),`
`,e.jsx(t.p,{children:`The radio component may not be vertically aligned by default, depending on the content following it.
You'll need to manage this with CSS on parent element.`}),`
`,e.jsx(a,{of:h,sourceState:"shown"}),`
`,e.jsx(n,{label:"Checked",level:3}),`
`,e.jsx(a,{of:d,sourceState:"shown"}),`
`,e.jsx(n,{label:"Disabled",level:3}),`
`,e.jsx(a,{of:v,sourceState:"shown"}),`
`,e.jsx(n,{label:"Disabled Checked",level:3}),`
`,e.jsx(a,{of:f,sourceState:"shown"}),`
`,e.jsx(n,{label:"Error",level:3}),`
`,e.jsx(a,{of:y,sourceState:"shown"}),`
`,e.jsx(n,{label:"Group",level:3}),`
`,e.jsx(a,{of:b,sourceState:"shown"}),`
`,e.jsx(n,{label:"Group checked",level:3}),`
`,e.jsxs(t.p,{children:["The attribute ",e.jsx(t.code,{children:"is-checked"})," works like the native implementation, defining the default checked radio in a group."]}),`
`,e.jsx(a,{of:j,sourceState:"shown"}),`
`,e.jsx(n,{label:"InputId",level:3}),`
`,e.jsxs(t.p,{children:["The ",e.jsx(t.code,{children:"id"})," is encapsulated by the ",e.jsx(t.code,{children:"input-id"})," attribute. This way you can link a label (attribute ",e.jsx(t.code,{children:"for"}),") to the input."]}),`
`,e.jsx(a,{of:k,sourceState:"shown"}),`
`,e.jsx(n,{label:"Validity State",level:3}),`
`,e.jsx(a,{of:g,source:{transform:p},sourceState:"shown"}),`
`,e.jsx(n,{label:"Included in a Form Field",level:3}),`
`,e.jsx(a,{of:E,sourceState:"shown"})]})}function Q(i={}){const{wrapper:t}={...r(),...i.components};return t?e.jsx(t,{...i,children:e.jsx(s,{...i})}):s(i)}export{Q as default};
