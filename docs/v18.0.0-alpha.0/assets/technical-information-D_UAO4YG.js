import{j as e}from"./jsx-runtime-3v6rTKkY.js";import{u as r}from"./index-B5y3xRNA.js";import{M as a,C as o,d as l}from"./index-sugWq352.js";import{B as c}from"./banner-BU_1gqe2.js";import{R as t,C as s,a as h,D as u,A as m,b as p,c as x,G as j,d as f,I as g}from"./radio.stories-XGf9Qwlr.js";import"./iframe-D98u-D7f.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-B_J8iUie.js";import"./index-DX_4BEHg.js";import"./index-DrFu-skq.js";import"./lit-html-D-ZEPr28.js";import"./control-C1r2wu67.js";const v="## OdsRadio\n### Properties\n| Property | Type | Required | Default value |\n| --- | --- | --- | --- |\n| ariaLabel | `null | string` | `true` | `null` |\n| ariaLabelledby | `string` | `false` | `undefined` |\n| inputId | `string` | `false` | `undefined` |\n| isChecked | `boolean` | `true` | `false` |\n| isDisabled | `boolean` | `true` | `false` |\n| isRequired | `boolean` | `true` | `false` |\n| name | `string` | `true` | `undefined` |\n| value | `null | string` | `true` | `null` |\n### Methods\n• **clear**(): `Promise<void>`\n\n• **getValidity**(): `Promise<undefined | ValidityState>`\n\n• **reset**(): `Promise<void>`\n\n• **select**(): `Promise<void>`\n### Events\n• **odsBlur**(): `EventEmitter<void>`\n\n• **odsChange**(): `EventEmitter<OdsRadioChangeEventDetail>`\n\n• **odsClear**(): `EventEmitter<void>`\n\n• **odsFocus**(): `EventEmitter<void>`\n\n• **odsReset**(): `EventEmitter<void>`";function d(i){const n={code:"code",h2:"h2",h3:"h3",p:"p",strong:"strong",...r(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{of:t,name:"Technical information"}),`
`,e.jsx(c,{of:t}),`
`,e.jsx(n.h2,{id:"overview",children:"Overview"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Radio"})," are used when, facing a list of two or more options, the user must select only one."]}),`
`,e.jsxs(n.p,{children:["The previous components ",e.jsx(n.code,{children:"radio"}),", ",e.jsx(n.code,{children:"radio-button"})," and ",e.jsx(n.code,{children:"radio-group"})," have now been included in ",e.jsx(n.code,{children:"radio"})]}),`
`,e.jsxs(n.p,{children:["The behavior of the old ",e.jsx(n.code,{children:"radio-group"})," is now automatic, giving the radio the same name as the native implementation."]}),`
`,e.jsxs(n.p,{children:["There is no longer a ",e.jsx(n.code,{children:"radio"})," component to make clickable Element."]}),`
`,e.jsx(o,{of:s,sourceState:"none"}),`
`,e.jsx(l,{children:v}),`
`,e.jsx(n.h2,{id:"style-customization",children:"Style customization"}),`
`,e.jsxs(n.p,{children:["You can add your own style on the radio element using the part ",e.jsx(n.code,{children:"radio"}),"."]}),`
`,e.jsx(n.p,{children:"Custom CSS:"}),`
`,e.jsx(o,{of:h,sourceState:"shown"}),`
`,e.jsx(n.h2,{id:"examples",children:"Examples"}),`
`,e.jsx(n.h3,{id:"default",children:"Default"}),`
`,e.jsx(o,{of:u,sourceState:"shown"}),`
`,e.jsx(n.h3,{id:"alignment",children:"Alignment"}),`
`,e.jsx(n.p,{children:`The radio component may not be vertically aligned by default, depending on the content following it.
You'll need to manage this with CSS on parent element.`}),`
`,e.jsx(o,{of:m,sourceState:"shown"}),`
`,e.jsx(n.h3,{id:"checked",children:"Checked"}),`
`,e.jsx(o,{of:s,sourceState:"shown"}),`
`,e.jsx(n.h3,{id:"disabled",children:"Disabled"}),`
`,e.jsx(o,{of:p,sourceState:"shown"}),`
`,e.jsx(n.h3,{id:"disabled-checked",children:"Disabled Checked"}),`
`,e.jsx(o,{of:x,sourceState:"shown"}),`
`,e.jsx(n.h3,{id:"group",children:"Group"}),`
`,e.jsx(o,{of:j,sourceState:"shown"}),`
`,e.jsx(n.h3,{id:"group-checked",children:"Group checked"}),`
`,e.jsxs(n.p,{children:["The attribute ",e.jsx(n.code,{children:"is-checked"})," works like the native implementation, defining the default checked radio in a group."]}),`
`,e.jsx(o,{of:f,sourceState:"shown"}),`
`,e.jsx(n.h3,{id:"inputid",children:"InputId"}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"id"})," is encapsulated by the ",e.jsx(n.code,{children:"input-id"})," attribute. This way you can link a label (attribute ",e.jsx(n.code,{children:"for"}),") to the input."]}),`
`,e.jsx(o,{of:g,sourceState:"shown"})]})}function G(i={}){const{wrapper:n}={...r(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(d,{...i})}):d(i)}export{G as default};
