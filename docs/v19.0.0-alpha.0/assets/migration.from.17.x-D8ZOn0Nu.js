import{j as e}from"./jsx-runtime-BSm7YJ_y.js";import{useMDXComponents as t}from"./index-CUkz9CBV.js";import{o as s}from"./ods-react-CYmC8DRO.js";import{M as m,S as l}from"./index-Ad1vjMe7.js";import{F as d}from"./form-field.stories-DRX-r9sD.js";import{H as n}from"./Heading-RrL0wZ2g.js";import"./index-E9JSHJbc.js";import"./iframe-ZxD9YLZr.js";import"./index-DOJIDNlS.js";import"./index-DZAg5o-f.js";import"./index-CXQShRbs.js";import"./index-DrFu-skq.js";import"./OdsTextarea-0yUmkQgv.js";import"./controls-CQ2mnOwv.js";import"./index-BDDKzIGc.js";import"./OdsText-CkwfP8Kl.js";function i(r){const o={code:"code",p:"p",...t(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(m,{of:d,name:"Migration From 17.x"}),`
`,e.jsx(n,{label:"FormField - migrate from v17 to v18",level:1}),`
`,e.jsx(n,{label:"Attributes changes",level:2}),`
`,e.jsxs(o.p,{children:[e.jsx(o.code,{children:"inline "})," ",e.jsx(s,{color:"critical",size:"sm",children:"Removed"})]}),`
`,e.jsx(o.p,{children:"Has been removed."}),`
`,e.jsxs(o.p,{children:["Form Field is now ",e.jsx(o.code,{children:"inline-flex"})," by default. You can add some style directly on the component if you want to override that."]}),`
`,e.jsx(n,{label:"Migration examples",level:2}),`
`,e.jsx(o.p,{children:"Inline Form Field:"}),`
`,e.jsx(l,{code:`
<osds-form-field inline></osds-form-field>

<!-- is now -->

<ods-form-field></ods-form-field>
`,dark:"true",language:"html"})]})}function D(r={}){const{wrapper:o}={...t(),...r.components};return o?e.jsx(o,{...r,children:e.jsx(i,{...r})}):i(r)}export{D as default};
