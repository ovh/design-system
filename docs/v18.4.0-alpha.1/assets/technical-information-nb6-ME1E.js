import{j as e}from"./jsx-runtime-sbaUvk5M.js";import{u as s}from"./index-CGWm3lku.js";import{M as r,C as a}from"./index-D-G4MXwZ.js";import{B as d}from"./Banner-Dm45YJlk.js";import{H as t}from"./Heading-1Y93vQ6R.js";import{T as m}from"./TechnicalSpecification-2xLcoBQJ.js";import{h as p}from"./validityState-ExJ3RVbh.js";import{T as i,O as c,C as u,D as v,a as x,b as g,E as f,V as y,W as h}from"./toggle.stories-BNOXEKML.js";import{j as b}from"./form-field.stories-wTln4IQe.js";import"./iframe-BBvDorMF.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-B_J8iUie.js";import"./index-DX_4BEHg.js";import"./index-DrFu-skq.js";import"./index-CveiHl7W.js";import"./index-D7X5WOeG.js";import"./lit-html-D-ZEPr28.js";import"./controls-D697y8_r.js";import"./unsafe-html-HR6uCwaW.js";const j="1.0.0",k="",E=[{kind:"javascript-module",path:"src/globals.ts",declarations:[],exports:[]},{kind:"javascript-module",path:"src/index.ts",declarations:[],exports:[{kind:"js",name:"OdsToggle",declaration:{name:"OdsToggle",module:"./components/ods-toggle/ods-toggle"}},{kind:"js",name:"OdsToggleChangeEvent",declaration:{name:"OdsToggleChangeEvent",module:"./interfaces/event"}},{kind:"js",name:"OdsToggleChangeEventDetail",declaration:{name:"OdsToggleChangeEventDetail",module:"./interfaces/event"}}]},{kind:"javascript-module",path:"src/controller/ods-toggle.ts",declarations:[{kind:"function",name:"updateInternals",return:{type:{text:"void"}},parameters:[{name:"internals",type:{text:"ElementInternals"}},{name:"value",type:{text:"boolean | null"}},{name:"inputEl",optional:!0,type:{text:"HTMLInputElement"}}]}],exports:[{kind:"js",name:"updateInternals",declaration:{name:"updateInternals",module:"src/controller/ods-toggle.ts"}}]},{kind:"javascript-module",path:"src/interfaces/event.ts",declarations:[],exports:[{kind:"js",name:"OdsToggleChangeEvent",declaration:{name:"OdsToggleChangeEvent",module:"src/interfaces/event.ts"}},{kind:"js",name:"OdsToggleChangeEventDetail",declaration:{name:"OdsToggleChangeEventDetail",module:"src/interfaces/event.ts"}}]},{kind:"javascript-module",path:"src/components/ods-toggle/ods-toggle.tsx",declarations:[{kind:"class",description:"",name:"OdsToggle",members:[{kind:"field",name:"inputEl",type:{text:"HTMLInputElement | undefined"},privacy:"private"},{kind:"field",name:"observer",type:{text:"MutationObserver | undefined"},privacy:"private"},{kind:"field",name:"shouldUpdateIsInvalidState",type:{text:"boolean"},privacy:"private",default:"false"},{kind:"field",name:"el",type:{text:"HTMLElement"}},{kind:"field",name:"internals",type:{text:"ElementInternals"},privacy:"private"},{kind:"field",name:"isInvalid",type:{text:"boolean | undefined"},privacy:"private"},{kind:"field",name:"defaultValue",type:{text:"boolean | undefined"},privacy:"public"},{kind:"field",name:"hasError",type:{text:"boolean"},privacy:"public",default:"false"},{kind:"field",name:"isDisabled",type:{text:"boolean"},privacy:"public",default:"false"},{kind:"field",name:"isRequired",type:{text:"boolean"},privacy:"public",default:"false"},{kind:"field",name:"name",type:{text:"string"},privacy:"public"},{kind:"field",name:"value",type:{text:"boolean | null"},privacy:"public",default:"null"},{kind:"field",name:"withLabel",type:{text:"boolean"},privacy:"public",default:"false"},{kind:"method",name:"onInvalidEvent",return:{type:{text:"void"}},parameters:[{name:"event",type:{text:"Event"}}]},{kind:"method",name:"checkValidity",privacy:"public",return:{type:{text:"Promise<boolean>"}}},{kind:"method",name:"clear",privacy:"public",return:{type:{text:"Promise<void>"}}},{kind:"method",name:"getValidationMessage",privacy:"public",return:{type:{text:"Promise<string>"}}},{kind:"method",name:"getValidity",privacy:"public",return:{type:{text:"Promise<ValidityState>"}}},{kind:"method",name:"reportValidity",privacy:"public",return:{type:{text:"Promise<boolean>"}}},{kind:"method",name:"reset",privacy:"public",return:{type:{text:"Promise<void>"}}},{kind:"method",name:"willValidate",privacy:"public",return:{type:{text:"Promise<boolean>"}}},{kind:"method",name:"onIsInvalidChange",return:{type:{text:"void"}}},{kind:"method",name:"formResetCallback",return:{type:{text:"Promise<void>"}}},{kind:"method",name:"onBlur",privacy:"private",return:{type:{text:"void"}}},{kind:"method",name:"onInput",privacy:"private",return:{type:{text:"void"}}},{kind:"method",name:"onValueChange",privacy:"private",return:{type:{text:"void"}}},{kind:"method",name:"render",return:{type:{text:"FunctionalComponent"}}}],attributes:[{name:"default-value",fieldName:"defaultValue",type:{text:"boolean"}},{name:"has-error",fieldName:"hasError",type:{text:"boolean"}},{name:"is-disabled",fieldName:"isDisabled",type:{text:"boolean"}},{name:"is-required",fieldName:"isRequired",type:{text:"boolean"}},{name:"name",fieldName:"name",type:{text:"string"}},{name:"value",fieldName:"value",type:{text:"boolean | null"}},{name:"with-label",fieldName:"withLabel",type:{text:"boolean"}}],tagName:"ods-toggle",events:[{name:"odsBlur",type:{text:"EventEmitter<void>"}},{name:"odsChange",type:{text:"EventEmitter<OdsToggleChangeEventDetail>"}},{name:"odsClear",type:{text:"EventEmitter<void>"}},{name:"odsFocus",type:{text:"EventEmitter<void>"}},{name:"odsInvalid",type:{text:"EventEmitter<boolean>"}},{name:"odsReset",type:{text:"EventEmitter<void>"}}],customElement:!0}],exports:[{kind:"js",name:"OdsToggle",declaration:{name:"OdsToggle",module:"src/components/ods-toggle/ods-toggle.tsx"}},{kind:"custom-element-definition",name:"ods-toggle",declaration:{name:"OdsToggle",module:"src/components/ods-toggle/ods-toggle.tsx"}}]}],C={},T={schemaVersion:j,readme:k,modules:E,enumPlugin:C};function l(o){const n={code:"code",p:"p",...s(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{of:i,name:"Technical information"}),`
`,e.jsx(d,{of:i}),`
`,e.jsx(t,{label:"Overview",level:2}),`
`,e.jsx(a,{of:c,sourceState:"none"}),`
`,e.jsx(m,{data:T}),`
`,e.jsx(t,{label:"Style customization",level:2}),`
`,e.jsxs(n.p,{children:["You can add your own style on the text element using the part ",e.jsx(n.code,{children:"slider"}),", ",e.jsx(n.code,{children:"label"}),", ",e.jsx(n.code,{children:"slider check"})," or ",e.jsx(n.code,{children:"label check"}),"."]}),`
`,e.jsx(n.p,{children:"Custom CSS :"}),`
`,e.jsx(a,{of:u,sourceState:"shown"}),`
`,e.jsx(t,{label:"Examples",level:2}),`
`,e.jsx(t,{label:"Default",level:3}),`
`,e.jsx(a,{of:v,sourceState:"shown"}),`
`,e.jsx(t,{label:"Disabled On",level:3}),`
`,e.jsx(a,{of:x,sourceState:"shown"}),`
`,e.jsx(t,{label:"Disabled Off",level:3}),`
`,e.jsx(a,{of:g,sourceState:"shown"}),`
`,e.jsx(t,{label:"Error",level:3}),`
`,e.jsx(a,{of:f,sourceState:"shown"}),`
`,e.jsx(t,{label:"Validity State",level:3}),`
`,e.jsx(a,{of:y,source:{transform:p},sourceState:"shown"}),`
`,e.jsx(t,{label:"With Label",level:3}),`
`,e.jsx(a,{of:h,sourceState:"shown"}),`
`,e.jsx(t,{label:"Included in a Form Field",level:3}),`
`,e.jsx(a,{of:b,sourceState:"shown"})]})}function Y(o={}){const{wrapper:n}={...s(),...o.components};return n?e.jsx(n,{...o,children:e.jsx(l,{...o})}):l(o)}export{Y as default};
