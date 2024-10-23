import{j as e}from"./jsx-runtime-CtvdRJNw.js";import{u as l}from"./index-BB9dT2Es.js";import{M as d,C as a}from"./index-B52cN8Ji.js";import{B as r}from"./Banner-C-cuOusb.js";import{H as t}from"./Heading-DkXmkwCf.js";import{T as c}from"./TechnicalSpecification-DhpxKXj3.js";import{C as o,O as m,a as p,D as x,A as u,b,c as h,d as f,e as v,I as k,f as y}from"./checkbox.stories-D3CQvfwz.js";import{C}from"./form-field.stories-DH_iNp9Q.js";import"./iframe-DOFBAWyz.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-B_J8iUie.js";import"./index-DX_4BEHg.js";import"./index-DrFu-skq.js";import"./index-CnlqR0TT.js";import"./index-96Y3MfGk.js";import"./lit-html-D-ZEPr28.js";import"./controls-DpsgTNdU.js";import"./unsafe-html-HR6uCwaW.js";const j="1.0.0",g="",E=[{kind:"javascript-module",path:"src/globals.ts",declarations:[],exports:[]},{kind:"javascript-module",path:"src/index.ts",declarations:[],exports:[{kind:"js",name:"OdsCheckbox",declaration:{name:"OdsCheckbox",module:"./components/ods-checkbox/ods-checkbox"}},{kind:"js",name:"OdsCheckboxChangeEvent",declaration:{name:"OdsCheckboxChangeEvent",module:"./interfaces/event"}},{kind:"js",name:"OdsCheckboxChangeEventDetail",declaration:{name:"OdsCheckboxChangeEventDetail",module:"./interfaces/event"}}]},{kind:"javascript-module",path:"src/interfaces/event.ts",declarations:[],exports:[{kind:"js",name:"OdsCheckboxChangeEvent",declaration:{name:"OdsCheckboxChangeEvent",module:"src/interfaces/event.ts"}},{kind:"js",name:"OdsCheckboxChangeEventDetail",declaration:{name:"OdsCheckboxChangeEventDetail",module:"src/interfaces/event.ts"}}]},{kind:"javascript-module",path:"src/components/ods-checkbox/ods-checkbox.tsx",declarations:[{kind:"class",description:"",name:"OdsCheckbox",members:[{kind:"field",name:"inputEl",type:{text:"HTMLInputElement | undefined"},privacy:"private"},{kind:"field",name:"internals",type:{text:"ElementInternals"},privacy:"private"},{kind:"field",name:"ariaLabel",type:{text:"HTMLElement['ariaLabel']"},privacy:"public",default:"null"},{kind:"field",name:"ariaLabelledby",type:{text:"string | undefined"},privacy:"public"},{kind:"field",name:"inputId",type:{text:"string | undefined"},privacy:"public"},{kind:"field",name:"isChecked",type:{text:"boolean"},privacy:"public",default:"false"},{kind:"field",name:"isDisabled",type:{text:"boolean"},privacy:"public",default:"false"},{kind:"field",name:"isIndeterminate",type:{text:"boolean"},privacy:"public",default:"false"},{kind:"field",name:"isRequired",type:{text:"boolean"},privacy:"public",default:"false"},{kind:"field",name:"name",type:{text:"string"},privacy:"public"},{kind:"field",name:"value",type:{text:"string | null"},privacy:"public",default:"null"},{kind:"method",name:"clear",privacy:"public",return:{type:{text:"Promise<void>"}}},{kind:"method",name:"getValidity",privacy:"public",return:{type:{text:"Promise<ValidityState | undefined>"}}},{kind:"method",name:"reset",privacy:"public",return:{type:{text:"Promise<void>"}}},{kind:"method",name:"formResetCallback",return:{type:{text:"Promise<void>"}}},{kind:"method",name:"getOdsCheckboxGroupByName",privacy:"private",return:{type:{text:"NodeListOf<Element>"}}},{kind:"method",name:"onInput",privacy:"private",return:{type:{text:"void"}}},{kind:"method",name:"render",return:{type:{text:"FunctionalComponent"}}}],attributes:[{name:"aria-label",fieldName:"ariaLabel",type:{text:"HTMLElement['ariaLabel']"}},{name:"aria-labelledby",fieldName:"ariaLabelledby",type:{text:"string"}},{name:"input-id",fieldName:"inputId",type:{text:"string"}},{name:"is-checked",fieldName:"isChecked",type:{text:"boolean"}},{name:"is-disabled",fieldName:"isDisabled",type:{text:"boolean"}},{name:"is-indeterminate",fieldName:"isIndeterminate",type:{text:"boolean"}},{name:"is-required",fieldName:"isRequired",type:{text:"boolean"}},{name:"name",fieldName:"name",type:{text:"string"}},{name:"value",fieldName:"value",type:{text:"string | null"}}],tagName:"ods-checkbox",events:[{name:"odsBlur",type:{text:"EventEmitter<void>"}},{name:"odsChange",type:{text:"EventEmitter<OdsCheckboxChangeEventDetail>"}},{name:"odsClear",type:{text:"EventEmitter<void>"}},{name:"odsFocus",type:{text:"EventEmitter<void>"}},{name:"odsReset",type:{text:"EventEmitter<void>"}}],customElement:!0}],exports:[{kind:"js",name:"OdsCheckbox",declaration:{name:"OdsCheckbox",module:"src/components/ods-checkbox/ods-checkbox.tsx"}},{kind:"custom-element-definition",name:"ods-checkbox",declaration:{name:"OdsCheckbox",module:"src/components/ods-checkbox/ods-checkbox.tsx"}}]}],S={},O={schemaVersion:j,readme:g,modules:E,enumPlugin:S};function s(i){const n={code:"code",p:"p",...l(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(d,{of:o,name:"Technical information"}),`
`,e.jsx(r,{of:o}),`
`,e.jsx(t,{label:"Overview",level:2}),`
`,e.jsx(a,{of:m,sourceState:"none"}),`
`,e.jsx(c,{data:O}),`
`,e.jsx(t,{label:"Style customization",level:2}),`
`,e.jsxs(n.p,{children:["You can add your own style on the checkbox element using the part ",e.jsx(n.code,{children:"checkbox"}),"."]}),`
`,e.jsx(n.p,{children:"Custom CSS:"}),`
`,e.jsx(a,{of:p,sourceState:"shown"}),`
`,e.jsx(t,{label:"Examples",level:2}),`
`,e.jsx(t,{label:"Default",level:3}),`
`,e.jsx(a,{of:x,sourceState:"shown"}),`
`,e.jsx(t,{label:"Alignment",level:3}),`
`,e.jsx(n.p,{children:`The checkbox component may not be vertically aligned by default, depending on the content following it.
You'll need to manage this with CSS on parent element.`}),`
`,e.jsx(a,{of:u,sourceState:"shown"}),`
`,e.jsx(t,{label:"Checked",level:3}),`
`,e.jsx(a,{of:b,sourceState:"shown"}),`
`,e.jsx(t,{label:"Disabled",level:3}),`
`,e.jsx(a,{of:h,sourceState:"shown"}),`
`,e.jsx(t,{label:"Disabled Checked",level:3}),`
`,e.jsx(a,{of:f,sourceState:"shown"}),`
`,e.jsx(t,{label:"Disabled Indeterminate",level:3}),`
`,e.jsx(a,{of:v,sourceState:"shown"}),`
`,e.jsx(t,{label:"InputId",level:3}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"id"})," is encapsulated by the ",e.jsx(n.code,{children:"input-id"})," attribute. This way you can link a label (attribute ",e.jsx(n.code,{children:"for"}),") to the input."]}),`
`,e.jsx(a,{of:k,sourceState:"shown"}),`
`,e.jsx(t,{label:"Indeterminate",level:3}),`
`,e.jsx(a,{of:y,sourceState:"shown"}),`
`,e.jsx(t,{label:"Included in a Form Field",level:3}),`
`,e.jsx(a,{of:C,sourceState:"shown"})]})}function G(i={}){const{wrapper:n}={...l(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(s,{...i})}):s(i)}export{G as default};
