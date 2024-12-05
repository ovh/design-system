import{j as e}from"./jsx-runtime-Cz3huCOb.js";import{u as d}from"./index-BRdWgBGF.js";import{O as r}from"./index-BYszAjkJ.js";import{M as t,d as o}from"./index-C7ZQW9Xo.js";import{R as l}from"./range.stories-BDd4Jksl.js";import{H as i}from"./Heading-BWgLZzFp.js";import"./iframe-O-MMI8BM.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-B_J8iUie.js";import"./index-DX_4BEHg.js";import"./index-DrFu-skq.js";import"./lit-html-D-ZEPr28.js";import"./validityState-ExJ3RVbh.js";import"./controls-D697y8_r.js";import"./index-D19O3a7h.js";function a(s){const n={code:"code",p:"p",...d(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(t,{of:l,name:"Migration From 17.x"}),`
`,e.jsx(i,{label:"Range - migrate from v17 to v18",level:1}),`
`,e.jsx(i,{label:"Attributes changes",level:2}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"color"})," ",e.jsx(r,{color:"critical",label:"Removed",size:"sm"})]}),`
`,e.jsx(n.p,{children:"Has been removed."}),`
`,e.jsx(n.p,{children:"This design feature has been removed in order to match the new styling of the component."}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"disabled"})," ",e.jsx(r,{color:"information",label:"Updated",size:"sm"})]}),`
`,e.jsx(n.p,{children:"Has been updated."}),`
`,e.jsxs(n.p,{children:["You can use the new ",e.jsx(n.code,{children:"isDisabled"})," attribute to obtain the same behavior."]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"error"})," ",e.jsx(r,{color:"information",label:"Updated",size:"sm"})]}),`
`,e.jsx(n.p,{children:"Has been updated."}),`
`,e.jsxs(n.p,{children:["You can use the new ",e.jsx(n.code,{children:"hasError"})," attribute to obtain the same behavior."]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"errorStateControl"})," ",e.jsx(r,{color:"critical",label:"Removed",size:"sm"})]}),`
`,e.jsx(n.p,{children:"Has been removed."}),`
`,e.jsx(n.p,{children:"Was not relevant for few versions already."}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"formControl"})," ",e.jsx(r,{color:"critical",label:"Removed",size:"sm"})]}),`
`,e.jsx(n.p,{children:"Has been removed."}),`
`,e.jsx(n.p,{children:"Was not relevant for few versions already."}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"forbidden-values"})," ",e.jsx(r,{color:"critical",label:"Removed",size:"sm"})]}),`
`,e.jsx(n.p,{children:"Has been removed."}),`
`,e.jsxs(n.p,{children:["You can replace it with a regex on the ",e.jsx(n.code,{children:"pattern"})," attributes."]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"inline"})," ",e.jsx(r,{color:"critical",label:"Removed",size:"sm"})]}),`
`,e.jsx(n.p,{children:"Has been removed."}),`
`,e.jsxs(n.p,{children:["Range is now ",e.jsx(n.code,{children:"inline-block"}),` by default.
You can add some style directly on the component if you want to override that.`]}),`
`,e.jsx(i,{label:"Migration examples",level:2}),`
`,e.jsx(n.p,{children:"Disabled range:"}),`
`,e.jsx(o,{code:`
<osds-range disabled>
</osds-range>

<!-- is now -->

<ods-range is-disabled>
</ods-range>
`,dark:"true",language:"html"}),`
`,e.jsx(n.p,{children:"Error range:"}),`
`,e.jsx(o,{code:`
<osds-range error>
</osds-range>

<!-- is now -->

<ods-range has-error>
</ods-range>
`,dark:"true",language:"html"}),`
`,e.jsx(n.p,{children:"Inline range:"}),`
`,e.jsx(o,{code:`
<osds-range inline>
</osds-range>

<!-- is now -->

<ods-range>
</ods-range>
`,dark:"true",language:"html"})]})}function z(s={}){const{wrapper:n}={...d(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(a,{...s})}):a(s)}export{z as default};
