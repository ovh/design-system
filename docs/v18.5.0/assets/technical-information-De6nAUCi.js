import{j as e,M as l,C as n}from"./index-aSJOi-xY.js";import{u as d}from"./index-D_oymSD0.js";import{B as r}from"./Banner-DfBQCKAd.js";import{H as t}from"./Heading-fUBW5LMg.js";import{T as c}from"./TechnicalSpecification-DWqg9NQE.js";import{h as m}from"./validityState-BuENXwQ9.js";import{C as o,O as p,a as u,D as x,A as b,b as h,c as v,d as f,e as y,E as k,I as j,f as C,V as g}from"./checkbox.stories-BRa4Yq_O.js";import{C as E}from"./form-field.stories-B5aWaPlp.js";import"./iframe-Cjn0x15a.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-D-8MO0q_.js";import"./index-DX_4BEHg.js";import"./index-DrFu-skq.js";import"./index-B1WyGMUD.js";import"./index-DduIf26o.js";import"./StorybookLink-CdkDDCl2.js";import"./controls-DX883vx3.js";import"./unsafe-html-VJzuFJfF.js";const S="1.0.0",I="",O=[{kind:"javascript-module",path:"src/globals.ts",declarations:[],exports:[]},{kind:"javascript-module",path:"src/index.ts",declarations:[],exports:[{kind:"js",name:"OdsCheckbox",declaration:{name:"OdsCheckbox",module:"./components/ods-checkbox/ods-checkbox"}},{kind:"js",name:"OdsCheckboxChangeEvent",declaration:{name:"OdsCheckboxChangeEvent",module:"./interfaces/event"}},{kind:"js",name:"OdsCheckboxChangeEventDetail",declaration:{name:"OdsCheckboxChangeEventDetail",module:"./interfaces/event"}}]},{kind:"javascript-module",path:"src/interfaces/event.ts",declarations:[],exports:[{kind:"js",name:"OdsCheckboxChangeEvent",declaration:{name:"OdsCheckboxChangeEvent",module:"src/interfaces/event.ts"}},{kind:"js",name:"OdsCheckboxChangeEventDetail",declaration:{name:"OdsCheckboxChangeEventDetail",module:"src/interfaces/event.ts"}}]},{kind:"javascript-module",path:"src/components/ods-checkbox/ods-checkbox.tsx",declarations:[{kind:"class",description:"",name:"OdsCheckbox",members:[{kind:"field",name:"inputEl",type:{text:"HTMLInputElement | undefined"},privacy:"private"},{kind:"field",name:"observer",type:{text:"MutationObserver | undefined"},privacy:"private"},{kind:"field",name:"isInvalid",type:{text:"boolean | undefined"},privacy:"private"},{kind:"field",name:"ariaLabel",type:{text:"HTMLElement['ariaLabel']"},privacy:"public",default:"null"},{kind:"field",name:"ariaLabelledby",type:{text:"string | undefined"},privacy:"public"},{kind:"field",name:"hasError",type:{text:"boolean"},privacy:"public",default:"false"},{kind:"field",name:"inputId",type:{text:"string | undefined"},privacy:"public"},{kind:"field",name:"isChecked",type:{text:"boolean"},privacy:"public",default:"false"},{kind:"field",name:"isDisabled",type:{text:"boolean"},privacy:"public",default:"false"},{kind:"field",name:"isIndeterminate",type:{text:"boolean"},privacy:"public",default:"false"},{kind:"field",name:"isRequired",type:{text:"boolean"},privacy:"public",default:"false"},{kind:"field",name:"name",type:{text:"string"},privacy:"public"},{kind:"field",name:"value",type:{text:"string | null"},privacy:"public",default:"null"},{kind:"method",name:"checkValidity",privacy:"public",return:{type:{text:"Promise<boolean | undefined>"}}},{kind:"method",name:"clear",privacy:"public",return:{type:{text:"Promise<void>"}}},{kind:"method",name:"getValidationMessage",privacy:"public",return:{type:{text:"Promise<string | undefined>"}}},{kind:"method",name:"getValidity",privacy:"public",return:{type:{text:"Promise<ValidityState | undefined>"}}},{kind:"method",name:"reportValidity",privacy:"public",return:{type:{text:"Promise<boolean | undefined>"}}},{kind:"method",name:"reset",privacy:"public",return:{type:{text:"Promise<void>"}}},{kind:"method",name:"willValidate",privacy:"public",return:{type:{text:"Promise<boolean | undefined>"}}},{kind:"method",name:"onIsInvalidChange",return:{type:{text:"void"}}},{kind:"method",name:"formResetCallback",return:{type:{text:"Promise<void>"}}},{kind:"method",name:"getOdsCheckboxGroupByName",privacy:"private",return:{type:{text:"NodeListOf<Element>"}}},{kind:"method",name:"onBlur",privacy:"private",return:{type:{text:"void"}}},{kind:"method",name:"onInput",privacy:"private",return:{type:{text:"void"}}},{kind:"method",name:"onInvalidEvent",privacy:"private",return:{type:{text:"void"}},parameters:[{name:"event",type:{text:"Event"}}]},{kind:"method",name:"render",return:{type:{text:"FunctionalComponent"}}}],attributes:[{name:"aria-label",fieldName:"ariaLabel",type:{text:"HTMLElement['ariaLabel']"}},{name:"aria-labelledby",fieldName:"ariaLabelledby",type:{text:"string"}},{name:"has-error",fieldName:"hasError",type:{text:"boolean"}},{name:"input-id",fieldName:"inputId",type:{text:"string"}},{name:"is-checked",fieldName:"isChecked",type:{text:"boolean"}},{name:"is-disabled",fieldName:"isDisabled",type:{text:"boolean"}},{name:"is-indeterminate",fieldName:"isIndeterminate",type:{text:"boolean"}},{name:"is-required",fieldName:"isRequired",type:{text:"boolean"}},{name:"name",fieldName:"name",type:{text:"string"}},{name:"value",fieldName:"value",type:{text:"string | null"}}],tagName:"ods-checkbox",events:[{name:"odsBlur",type:{text:"EventEmitter<void>"}},{name:"odsChange",type:{text:"EventEmitter<OdsCheckboxChangeEventDetail>"}},{name:"odsClear",type:{text:"EventEmitter<void>"}},{name:"odsFocus",type:{text:"EventEmitter<void>"}},{name:"odsInvalid",type:{text:"EventEmitter<{ isInvalid: boolean }>"}},{name:"odsReset",type:{text:"EventEmitter<void>"}}],customElement:!0}],exports:[{kind:"js",name:"OdsCheckbox",declaration:{name:"OdsCheckbox",module:"src/components/ods-checkbox/ods-checkbox.tsx"}},{kind:"custom-element-definition",name:"ods-checkbox",declaration:{name:"OdsCheckbox",module:"src/components/ods-checkbox/ods-checkbox.tsx"}}]}],w={},D={schemaVersion:S,readme:I,modules:O,enumPlugin:w};function s(i){const a={code:"code",p:"p",...d(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{of:o,name:"Technical information"}),`
`,e.jsx(r,{of:o}),`
`,e.jsx(t,{label:"Overview",level:2}),`
`,e.jsx(n,{of:p,sourceState:"none"}),`
`,e.jsx(c,{data:D}),`
`,e.jsx(t,{label:"Style customization",level:2}),`
`,e.jsxs(a.p,{children:["You can add your own style on the checkbox element using the part ",e.jsx(a.code,{children:"checkbox"}),"."]}),`
`,e.jsx(a.p,{children:"Custom CSS:"}),`
`,e.jsx(n,{of:u,sourceState:"shown"}),`
`,e.jsx(t,{label:"Examples",level:2}),`
`,e.jsx(t,{label:"Default",level:3}),`
`,e.jsx(n,{of:x,sourceState:"shown"}),`
`,e.jsx(t,{label:"Alignment",level:3}),`
`,e.jsx(a.p,{children:`The checkbox component may not be vertically aligned by default, depending on the content following it.
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
`,e.jsxs(a.p,{children:["The ",e.jsx(a.code,{children:"id"})," is encapsulated by the ",e.jsx(a.code,{children:"input-id"})," attribute. This way you can link a label (attribute ",e.jsx(a.code,{children:"for"}),") to the input."]}),`
`,e.jsx(n,{of:j,sourceState:"shown"}),`
`,e.jsx(t,{label:"Indeterminate",level:3}),`
`,e.jsx(n,{of:C,sourceState:"shown"}),`
`,e.jsx(t,{label:"Validity State",level:3}),`
`,e.jsx(n,{of:g,source:{transform:m},sourceState:"shown"}),`
`,e.jsx(t,{label:"Included in a Form Field",level:3}),`
`,e.jsx(n,{of:E,sourceState:"shown"})]})}function Q(i={}){const{wrapper:a}={...d(),...i.components};return a?e.jsx(a,{...i,children:e.jsx(s,{...i})}):s(i)}export{Q as default};
