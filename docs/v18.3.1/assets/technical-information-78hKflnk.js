import{j as e}from"./jsx-runtime-BtDUu9js.js";import{u as o}from"./index-DZL6x4lo.js";import{M as r,C as n}from"./index-CYldocI7.js";import{B as d}from"./Banner-CW_U-IGN.js";import{H as t}from"./Heading-DwuTnCox.js";import{T as m}from"./TechnicalSpecification-D8V9jwZL.js";import{Q as s,O as u,C as p,D as c,a as y,E as x,M as b,b as f,R as v,S as h}from"./quantity.stories-DrIzrqx2.js";import{Q as j}from"./form-field.stories-DH_iNp9Q.js";import"./iframe-D7GxXTWn.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-B_J8iUie.js";import"./index-DX_4BEHg.js";import"./index-DrFu-skq.js";import"./index-BvAGq-5Z.js";import"./index-DtXgNHxz.js";import"./lit-html-D-ZEPr28.js";import"./controls-DpsgTNdU.js";import"./unsafe-html-HR6uCwaW.js";const k="1.0.0",E="",g=[{kind:"javascript-module",path:"src/globals.ts",declarations:[],exports:[]},{kind:"javascript-module",path:"src/index.ts",declarations:[],exports:[{kind:"js",name:"OdsQuantity",declaration:{name:"OdsQuantity",module:"./components/ods-quantity/ods-quantity"}},{kind:"js",name:"OdsQuantityChangeEvent",declaration:{name:"OdsQuantityChangeEvent",module:"./interfaces/events"}},{kind:"js",name:"OdsQuantityChangeEventDetail",declaration:{name:"OdsQuantityChangeEventDetail",module:"./interfaces/events"}}]},{kind:"javascript-module",path:"src/controller/ods-quantity.ts",declarations:[{kind:"function",name:"isPlusButtonDisabled",return:{type:{text:"boolean"}},parameters:[{name:"isDisabled",type:{text:"boolean"}},{name:"isReadonly",type:{text:"boolean"}},{name:"value",type:{text:"number | null"}},{name:"max",optional:!0,type:{text:"number"}}]},{kind:"function",name:"isMinusButtonDisabled",return:{type:{text:"boolean"}},parameters:[{name:"isDisabled",type:{text:"boolean"}},{name:"isReadonly",type:{text:"boolean"}},{name:"value",type:{text:"number | null"}},{name:"min",optional:!0,type:{text:"number"}}]},{kind:"function",name:"setFormValue",return:{type:{text:"void"}},parameters:[{name:"internals",type:{text:"ElementInternals"}},{name:"value",type:{text:"number | null"}}]}],exports:[{kind:"js",name:"isPlusButtonDisabled",declaration:{name:"isPlusButtonDisabled",module:"src/controller/ods-quantity.ts"}},{kind:"js",name:"isMinusButtonDisabled",declaration:{name:"isMinusButtonDisabled",module:"src/controller/ods-quantity.ts"}},{kind:"js",name:"setFormValue",declaration:{name:"setFormValue",module:"src/controller/ods-quantity.ts"}}]},{kind:"javascript-module",path:"src/interfaces/events.ts",declarations:[],exports:[{kind:"js",name:"OdsQuantityChangeEvent",declaration:{name:"OdsQuantityChangeEvent",module:"src/interfaces/events.ts"}},{kind:"js",name:"OdsQuantityChangeEventDetail",declaration:{name:"OdsQuantityChangeEventDetail",module:"src/interfaces/events.ts"}}]},{kind:"javascript-module",path:"src/components/ods-quantity/ods-quantity.tsx",declarations:[{kind:"class",description:"",name:"OdsQuantity",members:[{kind:"field",name:"odsInput",type:{text:"OdsInput | undefined"},privacy:"private"},{kind:"field",name:"internals",type:{text:"ElementInternals"}},{kind:"field",name:"ariaLabel",type:{text:"HTMLElement['ariaLabel']"},privacy:"public",default:"null"},{kind:"field",name:"ariaLabelledby",type:{text:"string | undefined"},privacy:"public"},{kind:"field",name:"defaultValue",type:{text:"number | undefined"},privacy:"public"},{kind:"field",name:"hasError",type:{text:"boolean"},privacy:"public",default:"false"},{kind:"field",name:"isDisabled",type:{text:"boolean"},privacy:"public",default:"false"},{kind:"field",name:"isReadonly",type:{text:"boolean"},privacy:"public",default:"false"},{kind:"field",name:"isRequired",type:{text:"boolean"},privacy:"public",default:"false"},{kind:"field",name:"max",type:{text:"number | undefined"},privacy:"public"},{kind:"field",name:"min",type:{text:"number | undefined"},privacy:"public"},{kind:"field",name:"name",type:{text:"string"},privacy:"public"},{kind:"field",name:"placeholder",type:{text:"string | undefined"},privacy:"public"},{kind:"field",name:"step",type:{text:"number | undefined"},privacy:"public"},{kind:"field",name:"value",type:{text:"number | null"},privacy:"public",default:"null"},{kind:"method",name:"clear",privacy:"public",return:{type:{text:"Promise<void>"}}},{kind:"method",name:"getValidity",privacy:"public",return:{type:{text:"Promise<ValidityState | undefined>"}}},{kind:"method",name:"reset",privacy:"public",return:{type:{text:"Promise<void>"}}},{kind:"method",name:"formResetCallback",return:{type:{text:"Promise<void>"}}},{kind:"method",name:"decrement",privacy:"private",return:{type:{text:"void"}}},{kind:"method",name:"increment",privacy:"private",return:{type:{text:"void"}}},{kind:"method",name:"onOdsChange",privacy:"private",return:{type:{text:"void"}},parameters:[{name:"event",type:{text:"OdsInputChangeEvent"}}]},{kind:"method",name:"render",return:{type:{text:"FunctionalComponent"}}}],attributes:[{name:"aria-label",fieldName:"ariaLabel",type:{text:"HTMLElement['ariaLabel']"}},{name:"aria-labelledby",fieldName:"ariaLabelledby",type:{text:"string"}},{name:"default-value",fieldName:"defaultValue",type:{text:"number"}},{name:"has-error",fieldName:"hasError",type:{text:"boolean"}},{name:"is-disabled",fieldName:"isDisabled",type:{text:"boolean"}},{name:"is-readonly",fieldName:"isReadonly",type:{text:"boolean"}},{name:"is-required",fieldName:"isRequired",type:{text:"boolean"}},{name:"max",fieldName:"max",type:{text:"number"}},{name:"min",fieldName:"min",type:{text:"number"}},{name:"name",fieldName:"name",type:{text:"string"}},{name:"placeholder",fieldName:"placeholder",type:{text:"string"}},{name:"step",fieldName:"step",type:{text:"number"}},{name:"value",fieldName:"value",type:{text:"number | null"}}],tagName:"ods-quantity",events:[{name:"odsBlur",type:{text:"EventEmitter<void>"}},{name:"odsChange",type:{text:"EventEmitter<OdsQuantityChangeEventDetail>"}},{name:"odsClear",type:{text:"EventEmitter<void>"}},{name:"odsFocus",type:{text:"EventEmitter<void>"}},{name:"odsReset",type:{text:"EventEmitter<void>"}}],customElement:!0}],exports:[{kind:"js",name:"OdsQuantity",declaration:{name:"OdsQuantity",module:"src/components/ods-quantity/ods-quantity.tsx"}},{kind:"custom-element-definition",name:"ods-quantity",declaration:{name:"OdsQuantity",module:"src/components/ods-quantity/ods-quantity.tsx"}}]}],C={},D={schemaVersion:k,readme:E,modules:g,enumPlugin:C};function l(i){const a={code:"code",p:"p",...o(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{of:s,name:"Technical information"}),`
`,e.jsx(d,{of:s}),`
`,e.jsx(t,{label:"Overview",level:2}),`
`,e.jsx(n,{of:u,sourceState:"none"}),`
`,e.jsx(m,{data:D}),`
`,e.jsx(t,{label:"Style customization",level:2}),`
`,e.jsxs(a.p,{children:[`You can update the component style using a class on the web-component directly or access
the quantity elements using the part `,e.jsx(a.code,{children:"input"}),", ",e.jsx(a.code,{children:"button-minus"})," or ",e.jsx(a.code,{children:"button-plus"}),"."]}),`
`,e.jsx(a.p,{children:"Custom CSS:"}),`
`,e.jsx(n,{of:p,sourceState:"shown"}),`
`,e.jsx(t,{label:"Examples",level:2}),`
`,e.jsx(t,{label:"Default",level:3}),`
`,e.jsx(n,{of:c,sourceState:"shown"}),`
`,e.jsx(t,{label:"Disabled",level:3}),`
`,e.jsx(n,{of:y,sourceState:"shown"}),`
`,e.jsx(t,{label:"Error",level:3}),`
`,e.jsx(n,{of:x,sourceState:"shown"}),`
`,e.jsx(t,{label:"Max",level:3}),`
`,e.jsx(n,{of:b,sourceState:"shown"}),`
`,e.jsx(t,{label:"Min",level:3}),`
`,e.jsx(n,{of:f,sourceState:"shown"}),`
`,e.jsx(t,{label:"Readonly",level:3}),`
`,e.jsx(n,{of:v,sourceState:"shown"}),`
`,e.jsx(t,{label:"Step",level:3}),`
`,e.jsx(n,{of:h,sourceState:"shown"}),`
`,e.jsx(t,{label:"Included in a Form Field",level:3}),`
`,e.jsx(n,{of:j,sourceState:"shown"})]})}function Y(i={}){const{wrapper:a}={...o(),...i.components};return a?e.jsx(a,{...i,children:e.jsx(l,{...i})}):l(i)}export{Y as default};