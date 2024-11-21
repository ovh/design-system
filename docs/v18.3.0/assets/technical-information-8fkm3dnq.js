import{j as e}from"./jsx-runtime-Dpy41095.js";import{u as s}from"./index-aTvbjZDn.js";import{M as r,C as a}from"./index-KEvLdXFh.js";import{B as d}from"./Banner-Cnm_TD2k.js";import{H as n}from"./Heading-Ct5NuNs_.js";import{T as m}from"./TechnicalSpecification-B7Byym3Q.js";import{S as i,O as c,C as p,D as u,a as x,M as f,b as y,c as v,d as h,R as b,e as S,f as g}from"./select.stories-p7m6E2pz.js";import{S as j}from"./form-field.stories-DH_iNp9Q.js";import"./iframe-Br9eoVXS.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-B_J8iUie.js";import"./index-DX_4BEHg.js";import"./index-DrFu-skq.js";import"./index-LQAjXuKp.js";import"./index-CitIr79c.js";import"./lit-html-D-ZEPr28.js";import"./controls-DpsgTNdU.js";import"./unsafe-html-HR6uCwaW.js";const k="1.0.0",C="",E=[{kind:"javascript-module",path:"src/globals.ts",declarations:[],exports:[]},{kind:"javascript-module",path:"src/index.ts",declarations:[],exports:[{kind:"js",name:"OdsSelect",declaration:{name:"OdsSelect",module:"./components/ods-select/ods-select"}},{kind:"js",name:"OdsSelectChangeEvent",declaration:{name:"OdsSelectChangeEvent",module:"./interfaces/events"}},{kind:"js",name:"OdsSelectChangeEventDetail",declaration:{name:"OdsSelectChangeEventDetail",module:"./interfaces/events"}},{kind:"js",name:"OdsSelectCustomRenderer",declaration:{name:"OdsSelectCustomRenderer",module:"./interfaces/options"}},{kind:"js",name:"OdsSelectCustomRendererData",declaration:{name:"OdsSelectCustomRendererData",module:"./interfaces/options"}}]},{kind:"javascript-module",path:"src/controller/ods-select.ts",declarations:[{kind:"function",name:"getSelectConfig",return:{type:{text:"SelectConfig"}},parameters:[{name:"allowMultiple",type:{text:"boolean"}},{name:"multipleSelectionLabel",type:{text:"string"}},{name:"renderer",optional:!0,type:{text:"OdsSelectCustomRenderer"}}]},{kind:"function",name:"inlineValue",return:{type:{text:"string"}},parameters:[{name:"value",type:{text:"string | string[] | null | undefined"}}]},{kind:"function",name:"moveSlottedElements",return:{type:{text:"void"}},parameters:[{name:"targetElement",type:{text:"Element"}},{name:"slottedElements",type:{text:"Element[]"}}]},{kind:"function",name:"setFormValue",return:{type:{text:"void"}},parameters:[{name:"internals",type:{text:"ElementInternals"}},{name:"value",type:{text:"string | string [] | null | undefined"}}]},{kind:"function",name:"setSelectValue",return:{type:{text:"void"}},parameters:[{name:"select",optional:!0,type:{text:"TomSelect"}},{name:"value",optional:!0,type:{text:"string | string[] | null"}},{name:"defaultValue",optional:!0,type:{text:"string | string []"}},{name:"isSilent",default:"false",type:{text:"boolean"}}]}],exports:[{kind:"js",name:"SelectConfig",declaration:{name:"SelectConfig",module:"src/controller/ods-select.ts"}},{kind:"js",name:"getSelectConfig",declaration:{name:"getSelectConfig",module:"src/controller/ods-select.ts"}},{kind:"js",name:"inlineValue",declaration:{name:"inlineValue",module:"src/controller/ods-select.ts"}},{kind:"js",name:"moveSlottedElements",declaration:{name:"moveSlottedElements",module:"src/controller/ods-select.ts"}},{kind:"js",name:"setFormValue",declaration:{name:"setFormValue",module:"src/controller/ods-select.ts"}},{kind:"js",name:"setSelectValue",declaration:{name:"setSelectValue",module:"src/controller/ods-select.ts"}}]},{kind:"javascript-module",path:"src/interfaces/events.ts",declarations:[],exports:[{kind:"js",name:"OdsSelectChangeEvent",declaration:{name:"OdsSelectChangeEvent",module:"src/interfaces/events.ts"}},{kind:"js",name:"OdsSelectChangeEventDetail",declaration:{name:"OdsSelectChangeEventDetail",module:"src/interfaces/events.ts"}}]},{kind:"javascript-module",path:"src/interfaces/options.ts",declarations:[],exports:[{kind:"js",name:"OdsSelectCustomRenderer",declaration:{name:"OdsSelectCustomRenderer",module:"src/interfaces/options.ts"}},{kind:"js",name:"OdsSelectCustomRendererData",declaration:{name:"OdsSelectCustomRendererData",module:"src/interfaces/options.ts"}}]},{kind:"javascript-module",path:"src/components/ods-select/ods-select.tsx",declarations:[{kind:"class",description:"",name:"OdsSelect",members:[{kind:"field",name:"hasMovedNodes",type:{text:"boolean"},privacy:"private",default:"false"},{kind:"field",name:"isSelectSync",type:{text:"boolean"},privacy:"private",default:"false"},{kind:"field",name:"isValueSync",type:{text:"boolean"},privacy:"private",default:"false"},{kind:"field",name:"observer",type:{text:"MutationObserver"},privacy:"private"},{kind:"field",name:"select",type:{text:"TomSelect | undefined"},privacy:"private"},{kind:"field",name:"selectElement",type:{text:"HTMLSelectElement | undefined"},privacy:"private"},{kind:"field",name:"el",type:{text:"HTMLElement"}},{kind:"field",name:"internals",type:{text:"ElementInternals"},privacy:"private"},{kind:"field",name:"allowMultiple",type:{text:"boolean"},privacy:"public",default:"false"},{kind:"field",name:"ariaLabel",type:{text:"HTMLElement['ariaLabel']"},privacy:"public",default:"null"},{kind:"field",name:"ariaLabelledby",type:{text:"string | undefined"},privacy:"public"},{kind:"field",name:"customRenderer",type:{text:"OdsSelectCustomRenderer | undefined"},privacy:"public"},{kind:"field",name:"defaultValue",type:{text:"string | string [] | undefined"},privacy:"public"},{kind:"field",name:"hasError",type:{text:"boolean"},privacy:"public",default:"false"},{kind:"field",name:"isDisabled",type:{text:"boolean"},privacy:"public",default:"false"},{kind:"field",name:"isReadonly",type:{text:"boolean"},privacy:"public",default:"false"},{kind:"field",name:"isRequired",type:{text:"boolean"},privacy:"public",default:"false"},{kind:"field",name:"multipleSelectionLabel",type:{text:"string"},privacy:"public",default:"'Selected item'"},{kind:"field",name:"name",type:{text:"string"},privacy:"public"},{kind:"field",name:"placeholder",type:{text:"string | undefined"},privacy:"public"},{kind:"field",name:"value",type:{text:"string | string [] | null"},privacy:"public",default:"null"},{kind:"method",name:"clear",privacy:"public",return:{type:{text:"Promise<void>"}}},{kind:"method",name:"close",privacy:"public",return:{type:{text:"Promise<void>"}}},{kind:"method",name:"getValidity",privacy:"public",return:{type:{text:"Promise<ValidityState | undefined>"}}},{kind:"method",name:"open",privacy:"public",return:{type:{text:"Promise<void>"}}},{kind:"method",name:"reset",privacy:"public",return:{type:{text:"Promise<void>"}}},{kind:"method",name:"onIsDisabledChange",return:{type:{text:"void"}},parameters:[{name:"newValue",type:{text:"boolean"}}]},{kind:"method",name:"onIsReadonlyChange",return:{type:{text:"void"}},parameters:[{name:"newValue",type:{text:"boolean"}}]},{kind:"method",name:"onMultipleSelectionLabelChange",return:{type:{text:"void"}},parameters:[{name:"newValue",type:{text:"string"}}]},{kind:"method",name:"onPlaceholderChange",return:{type:{text:"void"}},parameters:[{name:"newValue",type:{text:"string"}}]},{kind:"method",name:"onCustomRendererChange",return:{type:{text:"void"}}},{kind:"method",name:"onValueChange",return:{type:{text:"void"}},parameters:[{name:"value",type:{text:"string | string[] | null"}},{name:"previousValue",optional:!0,type:{text:"string | string[] | null"}}]},{kind:"method",name:"formResetCallback",return:{type:{text:"Promise<void>"}}},{kind:"method",name:"bindSelectControl",privacy:"private",return:{type:{text:"void"}}},{kind:"method",name:"createTomSelect",privacy:"private",return:{type:{text:"void"}},parameters:[{name:"selectElement",type:{text:"HTMLSelectElement"}}]},{kind:"method",name:"onSlotChange",privacy:"private",return:{type:{text:"Promise<void>"}},parameters:[{name:"event",type:{text:"Event"}}]},{kind:"method",name:"updateValue",privacy:"private",return:{type:{text:"void"}},parameters:[{name:"newValue",type:{text:"string | string[] | null"}}]},{kind:"method",name:"render",return:{type:{text:"FunctionalComponent"}}}],attributes:[{name:"allow-multiple",fieldName:"allowMultiple",type:{text:"boolean"}},{name:"aria-label",fieldName:"ariaLabel",type:{text:"HTMLElement['ariaLabel']"}},{name:"aria-labelledby",fieldName:"ariaLabelledby",type:{text:"string"}},{name:"border-rounded",fieldName:"borderRounded",type:{text:"'all' | 'bottom' | 'bottom-left' | 'bottom-right' | 'left' | 'right' | 'top' | 'top-left' | 'top-right'"}},{name:"custom-renderer",fieldName:"customRenderer",type:{text:"OdsSelectCustomRenderer"}},{name:"default-value",fieldName:"defaultValue",type:{text:"string | string []"}},{name:"dropdown-width",fieldName:"dropdownWidth",type:{text:"'auto' | 'input-based'"}},{name:"has-error",fieldName:"hasError",type:{text:"boolean"}},{name:"is-disabled",fieldName:"isDisabled",type:{text:"boolean"}},{name:"is-readonly",fieldName:"isReadonly",type:{text:"boolean"}},{name:"is-required",fieldName:"isRequired",type:{text:"boolean"}},{name:"multiple-selection-label",fieldName:"multipleSelectionLabel",type:{text:"string"}},{name:"name",fieldName:"name",type:{text:"string"}},{name:"placeholder",fieldName:"placeholder",type:{text:"string"}},{name:"value",fieldName:"value",type:{text:"string | string [] | null"}}],tagName:"ods-select",events:[{name:"odsBlur",type:{text:"EventEmitter<void>"}},{name:"odsChange",type:{text:"EventEmitter<OdsSelectChangeEventDetail>"}},{name:"odsClear",type:{text:"EventEmitter<void>"}},{name:"odsFocus",type:{text:"EventEmitter<void>"}},{name:"odsReset",type:{text:"EventEmitter<void>"}}],customElement:!0}],exports:[{kind:"js",name:"OdsSelect",declaration:{name:"OdsSelect",module:"src/components/ods-select/ods-select.tsx"}},{kind:"custom-element-definition",name:"ods-select",declaration:{name:"OdsSelect",module:"src/components/ods-select/ods-select.tsx"}}]}],w={},O={schemaVersion:k,readme:C,modules:E,enumPlugin:w};function o(l){const t={code:"code",li:"li",p:"p",ul:"ul",...s(),...l.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{of:i,name:"Technical information"}),`
`,e.jsx(d,{of:i}),`
`,e.jsx(n,{label:"Overview",level:2}),`
`,e.jsx(a,{of:c,sourceState:"none"}),`
`,e.jsx(m,{data:O}),`
`,e.jsx(n,{label:"Style customization",level:2}),`
`,e.jsx(t.p,{children:"You can add your own style on the select element by adding class on the webcomponent directly."}),`
`,e.jsx(t.p,{children:"Custom CSS:"}),`
`,e.jsx(a,{of:p,sourceState:"shown"}),`
`,e.jsx(n,{label:"Examples",level:2}),`
`,e.jsx(n,{label:"Default",level:3}),`
`,e.jsx(a,{of:u,sourceState:"shown"}),`
`,e.jsx(n,{label:"Group",level:3}),`
`,e.jsx(a,{of:x,sourceState:"shown"}),`
`,e.jsx(n,{label:"Multiple Selection",level:3}),`
`,e.jsx(a,{of:f,sourceState:"shown"}),`
`,e.jsx(n,{label:"Disabled",level:3}),`
`,e.jsx(a,{of:y,sourceState:"shown"}),`
`,e.jsx(n,{label:"Disabled option",level:3}),`
`,e.jsx(a,{of:v,sourceState:"shown"}),`
`,e.jsx(n,{label:"Disabled group of options",level:3}),`
`,e.jsx(a,{of:h,sourceState:"shown"}),`
`,e.jsx(n,{label:"Readonly",level:3}),`
`,e.jsx(a,{of:b,sourceState:"shown"}),`
`,e.jsx(n,{label:"Custom Renderer",level:3}),`
`,e.jsx(t.p,{children:"If you want to display something more complex that just a string, you can use your own render functions instead of native elements."}),`
`,e.jsx(t.p,{children:"You can customize either:"}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsxs(t.li,{children:[e.jsx(t.code,{children:"item"}),": the currently selected element"]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.code,{children:"option"}),": an option on the select option list"]}),`
`]}),`
`,e.jsx(t.p,{children:"By default, each render function will receive as argument an object containing the following properties:"}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsxs(t.li,{children:[e.jsx(t.code,{children:"text"}),": the label of the option"]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.code,{children:"value"}),": the value of the option"]}),`
`]}),`
`,e.jsxs(t.p,{children:["If you need more data per option, you can attach a ",e.jsx(t.code,{children:"data-attribute"}),` to each option, the value will be available
on the render function as well.`]}),`
`,e.jsx(t.p,{children:"Here is an example of the customization of each elements using specific data:"}),`
`,e.jsx(a,{of:S,sourceState:"shown"}),`
`,e.jsx(n,{label:"Custom Renderer For Multiple Selection",level:3}),`
`,e.jsxs(t.p,{children:["If you set the property ",e.jsx(t.code,{children:"allow-multiple"}),`, custom option rendering is quite the same as, except that you'll
have to take into account the selection checkbox that will be injected in the DOM.`]}),`
`,e.jsx(t.p,{children:"As for now, item template is not customizable and will always render as the count of selected items."}),`
`,e.jsx(t.p,{children:"Here is the same example as previously updated for multiple selection:"}),`
`,e.jsx(a,{of:g,sourceState:"shown"}),`
`,e.jsx(n,{label:"Included in a Form Field",level:3}),`
`,e.jsx(a,{of:j,sourceState:"shown"})]})}function W(l={}){const{wrapper:t}={...s(),...l.components};return t?e.jsx(t,{...l,children:e.jsx(o,{...l})}):o(l)}export{W as default};