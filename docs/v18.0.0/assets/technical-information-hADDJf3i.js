import{j as e}from"./jsx-runtime-Dn0LW--f.js";import{u as i}from"./index-DeyDdHvX.js";import{M as a,C as s,d as c}from"./index-BM3JsZOq.js";import{B as d}from"./banner-DPlTyHjv.js";import{B as o,O as m,C as l,D as u,a as h,b as p,c as f}from"./breadcrumb.stories-D_6IrDDU.js";import"./iframe-6_jBXMSq.js";import"../sb-preview/runtime.js";import"./commonjsHelpers-Cpj98o6Y.js";import"./index-B_J8iUie.js";import"./index-DX_4BEHg.js";import"./index-DrFu-skq.js";import"./lit-html-D-ZEPr28.js";import"./unsafe-html-HR6uCwaW.js";import"./control-C1r2wu67.js";const x="## OdsBreadcrumb\nThis component has no properties, events nor methods.\n## OdsBreadcrumbItem\n### Properties\n| Property | Type | Required | Default value |\n| --- | --- | --- | --- |\n| href | `string` | `true` | `undefined` |\n| icon | `OdsIconName` | `false` | `undefined` |\n| isDisabled | `boolean` | `true` | `false` |\n| label | `string` | `false` | `undefined` |\n| referrerpolicy | `ReferrerPolicy` | `false` | `undefined` |\n| rel | `string` | `false` | `undefined` |\n| target | `string` | `false` | `undefined` |\n\n\n### Events\n• **odsClick**(): `EventEmitter<MouseEvent>`\n\n• **odsExpand**(): `EventEmitter<void>`";function r(t){const n={a:"a",code:"code",h2:"h2",h3:"h3",p:"p",...i(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{of:o,name:"Technical information"}),`
`,e.jsx(d,{of:o}),`
`,e.jsx(n.h2,{id:"overview",children:"Overview"}),`
`,e.jsx(s,{of:m,sourceState:"none"}),`
`,e.jsx(c,{children:x}),`
`,e.jsx(n.h2,{id:"style-customization",children:"Style customization"}),`
`,e.jsx(n.p,{children:"The breadcrumb component wraps and applies style on the breadcrumb items contained inside."}),`
`,e.jsx(n.p,{children:"You can directly add CSS classes on each item that you want to customize."}),`
`,e.jsxs(n.p,{children:["If you want to go further and customize the item link directly, you can use the part ",e.jsx(n.code,{children:"link"}),"."]}),`
`,e.jsx(n.p,{children:"Custom CSS :"}),`
`,e.jsx(s,{of:l,sourceState:"shown"}),`
`,e.jsx(n.h2,{id:"examples",children:"Examples"}),`
`,e.jsx(n.h3,{id:"default",children:"Default"}),`
`,e.jsx(s,{of:u,sourceState:"shown"}),`
`,e.jsx(n.h3,{id:"collapsed",children:"Collapsed"}),`
`,e.jsx(s,{of:h,sourceState:"shown"}),`
`,e.jsx(n.h3,{id:"get-the-clicked-item",children:"Get the clicked item"}),`
`,e.jsxs(n.p,{children:[`If you need to perform specific actions when a breadcrumb item is clicked,
you can observe the `,e.jsx(n.code,{children:"odsBreadcrumbItemClick"})," event, that will return the target of the click."]}),`
`,e.jsx(s,{of:p,sourceState:"shown"}),`
`,e.jsx(n.h3,{id:"breadcrumb-item-attributes",children:"Breadcrumb item attributes"}),`
`,e.jsxs(n.p,{children:["Each breadcrumb item supports the same attribute list as the ",e.jsx(n.a,{href:"?path=/docs/ods-components-link--documentation#properties",children:"ods-link"})," component."]}),`
`,e.jsx(s,{of:f,sourceState:"shown"})]})}function O(t={}){const{wrapper:n}={...i(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(r,{...t})}):r(t)}export{O as default};
