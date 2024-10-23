import{j as e}from"./jsx-runtime-CtvdRJNw.js";import{u as l}from"./index-BB9dT2Es.js";import{M as m,C as n}from"./index-B52cN8Ji.js";import{B as s}from"./Banner-C-cuOusb.js";import{H as t}from"./Heading-DkXmkwCf.js";import{T as d}from"./TechnicalSpecification-DhpxKXj3.js";import{R as i,O as u,C as p,D as c,a as x,b as v,c as f,E as y,d as b,M as g,e as h,S as k,f as j}from"./range.stories-C3dzjn56.js";import{f as D}from"./form-field.stories-DH_iNp9Q.js";import"./iframe-DOFBAWyz.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-B_J8iUie.js";import"./index-DX_4BEHg.js";import"./index-DrFu-skq.js";import"./index-CnlqR0TT.js";import"./index-96Y3MfGk.js";import"./lit-html-D-ZEPr28.js";import"./controls-DpsgTNdU.js";import"./unsafe-html-HR6uCwaW.js";const E="1.0.0",R="",S=[{kind:"javascript-module",path:"src/globals.ts",declarations:[],exports:[]},{kind:"javascript-module",path:"src/index.ts",declarations:[],exports:[{kind:"js",name:"OdsRange",declaration:{name:"OdsRange",module:"./components/ods-range/ods-range"}},{kind:"js",name:"OdsRangeChangeEventDetail",declaration:{name:"OdsRangeChangeEventDetail",module:"./interfaces/event"}},{kind:"js",name:"OdsRangeChangeEvent",declaration:{name:"OdsRangeChangeEvent",module:"./interfaces/event"}}]},{kind:"javascript-module",path:"src/controller/ods-range.ts",declarations:[{kind:"function",name:"getDefaultValue",return:{type:{text:"number | [number, number]"}},parameters:[{name:"min",type:{text:"number"}},{name:"max",type:{text:"number"}},{name:"defaultValue",optional:!0,type:{text:"number | [number, number]"}}]},{kind:"function",name:"isDualRange",return:{type:{text:"value is [number, number]"}},parameters:[{name:"value",type:{text:"number | [number, number] | null"}}]},{kind:"function",name:"setFormValue",return:{type:{text:"void"}},parameters:[{name:"internals",type:{text:"ElementInternals"}},{name:"value",type:{text:"number | [number, number] | null"}}]},{kind:"function",name:"toPercentage",return:{type:{text:"number"}},parameters:[{name:"max",type:{text:"number"}},{name:"min",type:{text:"number"}},{name:"value",optional:!0,type:{text:"number"}}]}],exports:[{kind:"js",name:"getDefaultValue",declaration:{name:"getDefaultValue",module:"src/controller/ods-range.ts"}},{kind:"js",name:"isDualRange",declaration:{name:"isDualRange",module:"src/controller/ods-range.ts"}},{kind:"js",name:"toPercentage",declaration:{name:"toPercentage",module:"src/controller/ods-range.ts"}},{kind:"js",name:"setFormValue",declaration:{name:"setFormValue",module:"src/controller/ods-range.ts"}}]},{kind:"javascript-module",path:"src/interfaces/event.ts",declarations:[],exports:[{kind:"js",name:"OdsRangeChangeEvent",declaration:{name:"OdsRangeChangeEvent",module:"src/interfaces/event.ts"}},{kind:"js",name:"OdsRangeChangeEventDetail",declaration:{name:"OdsRangeChangeEventDetail",module:"src/interfaces/event.ts"}}]},{kind:"javascript-module",path:"src/components/ods-range/ods-range.tsx",declarations:[{kind:"class",description:"",name:"OdsRange",members:[{kind:"field",name:"hostId",type:{text:"string"},privacy:"private",default:"''"},{kind:"field",name:"inputEl",type:{text:"HTMLInputElement | undefined"},privacy:"private"},{kind:"field",name:"inputElDual",type:{text:"HTMLInputElement | undefined"},privacy:"private"},{kind:"field",name:"inputObservable",type:{text:"MutationObserver | undefined"},privacy:"private"},{kind:"field",name:"inputRangeId",type:{text:"string"},privacy:"private",default:"'input-range'"},{kind:"field",name:"inputRangeDualId",type:{text:"string"},privacy:"private",default:"'input-range-dual'"},{kind:"field",name:"tooltip",type:{text:"OdsTooltip | undefined"},privacy:"private"},{kind:"field",name:"tooltipDual",type:{text:"OdsTooltip | undefined"},privacy:"private"},{kind:"field",name:"dualValue",type:{text:"number | undefined"}},{kind:"field",name:"currentValue",type:{text:"number | undefined"}},{kind:"field",name:"isDualRange",type:{text:"boolean"},default:"false"},{kind:"field",name:"el",type:{text:"HTMLElement"}},{kind:"field",name:"internals",type:{text:"ElementInternals"},privacy:"private"},{kind:"field",name:"defaultValue",type:{text:"number | [number, number] | undefined"},privacy:"public"},{kind:"field",name:"hasError",type:{text:"boolean"},privacy:"public",default:"false"},{kind:"field",name:"isDisabled",type:{text:"boolean"},privacy:"public",default:"false"},{kind:"field",name:"isRequired",type:{text:"boolean"},privacy:"public",default:"false"},{kind:"field",name:"max",type:{text:"number"},privacy:"public",default:"100"},{kind:"field",name:"min",type:{text:"number"},privacy:"public",default:"0"},{kind:"field",name:"name",type:{text:"string"},privacy:"public"},{kind:"field",name:"step",type:{text:"number | undefined"},privacy:"public"},{kind:"field",name:"value",type:{text:"number | [number, number] | null"},privacy:"public",default:"0"},{kind:"method",name:"clear",privacy:"public",return:{type:{text:"Promise<void>"}}},{kind:"method",name:"getValidity",privacy:"public",return:{type:{text:"Promise<ValidityState | undefined>"}}},{kind:"method",name:"reset",privacy:"public",return:{type:{text:"Promise<void>"}}},{kind:"method",name:"onMinOrMaxChange",return:{type:{text:"void"}}},{kind:"method",name:"onValueChange",privacy:"private",return:{type:{text:"void"}}},{kind:"method",name:"formResetCallback",return:{type:{text:"Promise<void>"}}},{kind:"method",name:"changeValues",privacy:"private",return:{type:{text:"number | [number, number] | undefined"}},parameters:[{name:"currentValue",optional:!0,type:{text:"number"}},{name:"dualValue",optional:!0,type:{text:"number"}}]},{kind:"method",name:"onInput",privacy:"private",return:{type:{text:"void"}},parameters:[{name:"isDualInput",type:{text:"boolean"}}]},{kind:"method",name:"onInputEl",privacy:"private",return:{type:{text:"void"}},parameters:[{name:"step",type:{text:"number"}}]},{kind:"method",name:"onInputElChange",privacy:"private",return:{type:{text:"void"}},parameters:[{name:"mutationList",type:{text:"MutationRecord[]"}}]},{kind:"method",name:"onInputElDual",privacy:"private",return:{type:{text:"void"}},parameters:[{name:"step",type:{text:"number"}}]},{kind:"method",name:"hideTooltip",privacy:"private",return:{type:{text:"void"}}},{kind:"method",name:"hideTooltipDual",privacy:"private",return:{type:{text:"void"}}},{kind:"method",name:"showTooltip",privacy:"private",return:{type:{text:"void"}}},{kind:"method",name:"showTooltipDual",privacy:"private",return:{type:{text:"void"}}},{kind:"method",name:"render",return:{type:{text:"FunctionalComponent"}}}],attributes:[{name:"default-value",fieldName:"defaultValue",type:{text:"number | [number, number]"}},{name:"has-error",fieldName:"hasError",type:{text:"boolean"}},{name:"is-disabled",fieldName:"isDisabled",type:{text:"boolean"}},{name:"is-required",fieldName:"isRequired",type:{text:"boolean"}},{name:"max",fieldName:"max",type:{text:"number"}},{name:"min",fieldName:"min",type:{text:"number"}},{name:"name",fieldName:"name",type:{text:"string"}},{name:"step",fieldName:"step",type:{text:"number"}},{name:"value",fieldName:"value",type:{text:"number | [number, number] | null"}}],tagName:"ods-range",events:[{name:"odsBlur",type:{text:"EventEmitter<void>"}},{name:"odsChange",type:{text:"EventEmitter<OdsRangeChangeEventDetail>"}},{name:"odsClear",type:{text:"EventEmitter<void>"}},{name:"odsFocus",type:{text:"EventEmitter<void>"}},{name:"odsReset",type:{text:"EventEmitter<void>"}}],customElement:!0}],exports:[{kind:"js",name:"OdsRange",declaration:{name:"OdsRange",module:"src/components/ods-range/ods-range.tsx"}},{kind:"custom-element-definition",name:"ods-range",declaration:{name:"OdsRange",module:"src/components/ods-range/ods-range.tsx"}}]}],C={},O={schemaVersion:E,readme:R,modules:S,enumPlugin:C};function o(a){const r={code:"code",p:"p",...l(),...a.components};return e.jsxs(e.Fragment,{children:[e.jsx(m,{of:i,name:"Technical information"}),`
`,e.jsx(s,{of:i}),`
`,e.jsx(t,{label:"Overview",level:2}),`
`,e.jsx(n,{of:u,sourceState:"none"}),`
`,e.jsx(d,{data:O}),`
`,e.jsx(t,{label:"Style customization",level:2}),`
`,e.jsxs(r.p,{children:["You can add your own style on the range element using the part ",e.jsx(r.code,{children:"range"}),"."]}),`
`,e.jsx(r.p,{children:"Custom range CSS:"}),`
`,e.jsx(n,{of:p,sourceState:"shown"}),`
`,e.jsx(t,{label:"Examples",level:2}),`
`,e.jsx(t,{label:"Default",level:3}),`
`,e.jsx(n,{of:c,sourceState:"shown"}),`
`,e.jsx(t,{label:"Default Dual",level:3}),`
`,e.jsx(n,{of:x,sourceState:"shown"}),`
`,e.jsx(t,{label:"Disabled",level:3}),`
`,e.jsx(n,{of:v,sourceState:"shown"}),`
`,e.jsx(t,{label:"Disabled Dual",level:3}),`
`,e.jsx(n,{of:f,sourceState:"shown"}),`
`,e.jsx(t,{label:"Error",level:3}),`
`,e.jsx(n,{of:y,sourceState:"shown"}),`
`,e.jsx(t,{label:"Error Dual",level:3}),`
`,e.jsx(n,{of:b,sourceState:"shown"}),`
`,e.jsx(t,{label:"Max",level:3}),`
`,e.jsx(n,{of:g,sourceState:"shown"}),`
`,e.jsx(t,{label:"Min",level:3}),`
`,e.jsx(n,{of:h,sourceState:"shown"}),`
`,e.jsx(t,{label:"Step",level:3}),`
`,e.jsx(n,{of:k,sourceState:"shown"}),`
`,e.jsx(t,{label:"Step Dual",level:3}),`
`,e.jsx(n,{of:j,sourceState:"shown"}),`
`,e.jsx(t,{label:"Included in a Form Field",level:3}),`
`,e.jsx(n,{of:D,sourceState:"shown"})]})}function K(a={}){const{wrapper:r}={...l(),...a.components};return r?e.jsx(r,{...a,children:e.jsx(o,{...a})}):o(a)}export{K as default};
