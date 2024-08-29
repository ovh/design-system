import{j as e}from"./jsx-runtime-Dn0LW--f.js";import{u as r}from"./index-DeyDdHvX.js";import{M as l,C as t,d as a}from"./index-BM3JsZOq.js";import{B as d}from"./banner-DPlTyHjv.js";import{S as s,O as c,C as u,D as h,a as m,M as p,b as f,c as x,d as j,R as v,e as S,f as b}from"./select.stories-BWQe2xM0.js";import{S as w}from"./form-field.stories-BcV_EKSO.js";import"./iframe-6_jBXMSq.js";import"../sb-preview/runtime.js";import"./commonjsHelpers-Cpj98o6Y.js";import"./index-B_J8iUie.js";import"./index-DX_4BEHg.js";import"./index-DrFu-skq.js";import"./lit-html-D-ZEPr28.js";import"./control-C1r2wu67.js";import"./unsafe-html-HR6uCwaW.js";const y="## OdsSelect\n### Properties\n| Property | Type | Required | Default value |\n| --- | --- | --- | --- |\n| allowMultiple | `boolean` | `true` | `false` |\n| ariaLabel | `null | string` | `true` | `null` |\n| ariaLabelledby | `string` | `false` | `undefined` |\n| customRenderer | `OdsSelectCustomRenderer` | `false` | `undefined` |\n| defaultValue | `string | string[]` | `false` | `undefined` |\n| hasError | `boolean` | `true` | `false` |\n| isDisabled | `boolean` | `true` | `false` |\n| isReadonly | `boolean` | `true` | `false` |\n| isRequired | `boolean` | `true` | `false` |\n| multipleSelectionLabel | `string` | `true` | `'Selected item'` |\n| name | `string` | `true` | `undefined` |\n| placeholder | `string` | `false` | `undefined` |\n| value | `null | string | string[]` | `true` | `null` |\n### Methods\n• **clear**(): `Promise<void>`\n\n• **close**(): `Promise<void>`\n\n• **getValidity**(): `Promise<undefined | ValidityState>`\n\n• **open**(): `Promise<void>`\n\n• **reset**(): `Promise<void>`\n### Events\n• **odsBlur**(): `EventEmitter<void>`\n\n• **odsChange**(): `EventEmitter<OdsSelectChangeEventDetail>`\n\n• **odsClear**(): `EventEmitter<void>`\n\n• **odsFocus**(): `EventEmitter<void>`\n\n• **odsReset**(): `EventEmitter<void>`";function i(o){const n={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...r(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{of:s,name:"Technical information"}),`
`,e.jsx(d,{of:s}),`
`,e.jsx(n.h2,{id:"overview",children:"Overview"}),`
`,e.jsx(t,{of:c,sourceState:"none"}),`
`,e.jsx(a,{children:y}),`
`,e.jsx(n.h2,{id:"style-customization",children:"Style customization"}),`
`,e.jsx(n.p,{children:"You can add your own style on the select element by adding class on the webcomponent directly."}),`
`,e.jsx(n.p,{children:"Custom CSS:"}),`
`,e.jsx(t,{of:u,sourceState:"shown"}),`
`,e.jsx(n.h2,{id:"examples",children:"Examples"}),`
`,e.jsx(n.h3,{id:"default",children:"Default"}),`
`,e.jsx(t,{of:h,sourceState:"shown"}),`
`,e.jsx(n.h3,{id:"group",children:"Group"}),`
`,e.jsx(t,{of:m,sourceState:"shown"}),`
`,e.jsx(n.h3,{id:"multiple-selection",children:"Multiple Selection"}),`
`,e.jsx(t,{of:p,sourceState:"shown"}),`
`,e.jsx(n.h3,{id:"disabled",children:"Disabled"}),`
`,e.jsx(t,{of:f,sourceState:"shown"}),`
`,e.jsx(n.h3,{id:"disabled-option",children:"Disabled option"}),`
`,e.jsx(t,{of:x,sourceState:"shown"}),`
`,e.jsx(n.h3,{id:"disabled-group-of-options",children:"Disabled group of options"}),`
`,e.jsx(t,{of:j,sourceState:"shown"}),`
`,e.jsx(n.h3,{id:"readonly",children:"Readonly"}),`
`,e.jsx(t,{of:v,sourceState:"shown"}),`
`,e.jsx(n.h3,{id:"custom-renderer",children:"Custom Renderer"}),`
`,e.jsx(n.p,{children:"If you want to display something more complex that just a string, you can use your own render functions instead of native elements."}),`
`,e.jsx(n.p,{children:"You can customize either:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"item"}),": the currently selected element"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"option"}),": an option on the select option list"]}),`
`]}),`
`,e.jsx(n.p,{children:"By default, each render function will receive as argument an object containing the following properties:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"text"}),": the label of the option"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"value"}),": the value of the option"]}),`
`]}),`
`,e.jsxs(n.p,{children:["If you need more data per option, you can attach a ",e.jsx(n.code,{children:"data-attribute"}),` to each option, the value will be available
on the render function as well.`]}),`
`,e.jsx(n.p,{children:"Here is an example of the customization of each elements using specific data:"}),`
`,e.jsx(t,{of:S,sourceState:"shown"}),`
`,e.jsx(n.h3,{id:"custom-renderer-for-multiple-selection",children:"Custom Renderer For Multiple Selection"}),`
`,e.jsxs(n.p,{children:["If you set the property ",e.jsx(n.code,{children:"allow-multiple"}),`, custom option rendering is quite the same as, except that you'll
have to take into account the selection checkbox that will be injected in the DOM.`]}),`
`,e.jsx(n.p,{children:"As for now, item template is not customizable and will always render as the count of selected items."}),`
`,e.jsxs(n.p,{children:["Here is the same example as ",e.jsx(n.a,{href:"?path=/docs/ods-components-form-elements-select--documentation#custom-renderer",children:"previously"})," updated for multiple selection:"]}),`
`,e.jsx(t,{of:b,sourceState:"shown"}),`
`,e.jsxs(n.h3,{id:"included-in-a-form-field",children:["Included in a ",e.jsx(n.a,{href:"?path=/docs/ods-components-form-elements-form-field--technical-information",children:e.jsx(n.strong,{children:"Form Field"})})]}),`
`,e.jsx(t,{of:w,sourceState:"shown"})]})}function V(o={}){const{wrapper:n}={...r(),...o.components};return n?e.jsx(n,{...o,children:e.jsx(i,{...o})}):i(o)}export{V as default};
