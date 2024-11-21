import{j as e}from"./jsx-runtime-Dpy41095.js";import{u as s}from"./index-aTvbjZDn.js";import{O as a}from"./index-CitIr79c.js";import{M as r,d}from"./index-KEvLdXFh.js";import{P as m}from"./pagination.stories-CJMnxHWy.js";import{H as t}from"./Heading-Ct5NuNs_.js";import"./iframe-Br9eoVXS.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-B_J8iUie.js";import"./index-DX_4BEHg.js";import"./index-DrFu-skq.js";import"./index-LQAjXuKp.js";import"./lit-html-D-ZEPr28.js";import"./controls-DpsgTNdU.js";function i(n){const o={code:"code",p:"p",...s(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{of:m,name:"Migration From 17.x"}),`
`,e.jsx(t,{label:"Pagination - migrate from v17 to v18",level:1}),`
`,e.jsx(t,{label:"Attributes changes",level:2}),`
`,e.jsxs(o.p,{children:[e.jsx(o.code,{children:"disabled"})," ",e.jsx(a,{color:"information",label:"Updated",size:"sm"})]}),`
`,e.jsx(o.p,{children:"Has been updated."}),`
`,e.jsxs(o.p,{children:["You can use the new ",e.jsx(o.code,{children:"isDisabled"})," attribute to obtain the same behavior."]}),`
`,e.jsx(t,{label:"Migration examples",level:2}),`
`,e.jsx(o.p,{children:"Disabled:"}),`
`,e.jsx(d,{code:`
<osds-pagination disabled></osds-pagination>

<!-- is now -->

<ods-pagination is-disabled></ods-pagination>
`,dark:"true",language:"html"})]})}function H(n={}){const{wrapper:o}={...s(),...n.components};return o?e.jsx(o,{...n,children:e.jsx(i,{...n})}):i(n)}export{H as default};