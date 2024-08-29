import{j as n}from"./jsx-runtime-Dn0LW--f.js";import{u as r}from"./index-DeyDdHvX.js";import{M as a,C as s,d as c}from"./index-BM3JsZOq.js";import{B as l}from"./banner-DPlTyHjv.js";import{M as t,O as d,C as m,D as u,N as h,a as p,A as x}from"./modal.stories-CGKBLn25.js";import"./iframe-6_jBXMSq.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-B_J8iUie.js";import"./index-DX_4BEHg.js";import"./index-DrFu-skq.js";import"./index-DryTTbHl.js";import"./lit-html-D-ZEPr28.js";import"./unsafe-html-HR6uCwaW.js";import"./control-C1r2wu67.js";const f='## OdsModal\n### Properties\n| Property | Type | Required | Default value |\n| --- | --- | --- | --- |\n| color | `OdsModalColor` | `true` | `ODS_MODAL_COLOR.information` |\n| isDismissible | `boolean` | `true` | `true` |\n| isOpen | `boolean` | `true` | `false` |\n### Methods\n• **close**(): `Promise<void>`\n\n• **open**(): `Promise<void>`\n### Events\n• **odsClose**(): `EventEmitter<void>`\n\n• **odsOpen**(): `EventEmitter<void>`\n### Enums\n#### ODS_MODAL_COLOR\n\n• **critical** = `"critical"`\n\n• **information** = `"information"`\n\n• **neutral** = `"neutral"`\n\n• **success** = `"success"`\n\n• **warning** = `"warning"`\n\n';function i(e){const o={code:"code",h2:"h2",h3:"h3",p:"p",...r(),...e.components};return n.jsxs(n.Fragment,{children:[n.jsx(a,{of:t,name:"Technical information"}),`
`,n.jsx(l,{of:t}),`
`,n.jsx(o.h2,{id:"overview",children:"Overview"}),`
`,n.jsx(s,{of:d,sourceState:"none"}),`
`,n.jsx(c,{children:f}),`
`,n.jsx(o.h2,{id:"style-customization",children:"Style customization"}),`
`,n.jsxs(o.p,{children:["You can update the modal's content by directly updating the slot elements. You can also update it using the ",n.jsx(o.code,{children:"::part(dialog)"}),"."]}),`
`,n.jsx(o.p,{children:"Custom CSS:"}),`
`,n.jsx(s,{of:m,sourceState:"shown"}),`
`,n.jsx(o.h2,{id:"examples",children:"Examples"}),`
`,n.jsx(o.h3,{id:"default",children:"Default"}),`
`,n.jsx(s,{of:u,sourceState:"shown"}),`
`,n.jsx(o.h3,{id:"not-dismissible",children:"Not Dismissible"}),`
`,n.jsx(s,{of:h,sourceState:"shown"}),`
`,n.jsx(o.h3,{id:"color",children:"Color"}),`
`,n.jsx(s,{of:p,sourceState:"shown"}),`
`,n.jsx(o.h3,{id:"actions-slot",children:"Actions slot"}),`
`,n.jsx(s,{of:x,sourceState:"shown"})]})}function P(e={}){const{wrapper:o}={...r(),...e.components};return o?n.jsx(o,{...e,children:n.jsx(i,{...e})}):i(e)}export{P as default};
