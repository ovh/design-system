import{j as e}from"./jsx-runtime-CtvdRJNw.js";import{u as t}from"./index-BB9dT2Es.js";import{O as r}from"./index-96Y3MfGk.js";import{M as d,d as l}from"./index-B52cN8Ji.js";import{S as c}from"./spinner.stories-CpOoB92V.js";import{H as o}from"./Heading-DkXmkwCf.js";import"./iframe-DOFBAWyz.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-B_J8iUie.js";import"./index-DX_4BEHg.js";import"./index-DrFu-skq.js";import"./index-CnlqR0TT.js";import"./lit-html-D-ZEPr28.js";import"./controls-DpsgTNdU.js";function i(s){const n={code:"code",p:"p",strong:"strong",...t(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(d,{of:c,name:"Migration From 17.x"}),`
`,e.jsx(o,{label:"Spinner - migrate from v17 to v18",level:1}),`
`,e.jsx(o,{label:"Attributes changes",level:2}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"color"})," ",e.jsx(r,{color:"success",label:"New",size:"sm"})]}),`
`,e.jsx(n.p,{children:"New attribute."}),`
`,e.jsx(n.p,{children:"Provides a list of colors using the currently applied theme."}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"contrasted"})," ",e.jsx(r,{color:"critical",label:"Removed",size:"sm"})]}),`
`,e.jsx(n.p,{children:"Has been removed."}),`
`,e.jsxs(n.p,{children:["You can use the new ",e.jsx(n.code,{children:"white"})," color to obtain the same rendering."]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"inline"})," ",e.jsx(r,{color:"critical",label:"Removed",size:"sm"})]}),`
`,e.jsx(n.p,{children:"Has been removed."}),`
`,e.jsxs(n.p,{children:["Spinner is now ",e.jsx(n.code,{children:"inline-block"}),` by default.
You can add some style directly on the component if you want to override that.`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"mode"})," ",e.jsx(r,{color:"critical",label:"Removed",size:"sm"})]}),`
`,e.jsx(n.p,{children:"Has been removed."}),`
`,e.jsx(n.p,{children:"There was only was mode value, it is now the default rendering."}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"size"})," ",e.jsx(r,{color:"information",label:"Updated",size:"sm"})]}),`
`,e.jsx(n.p,{children:"Has been updated."}),`
`,e.jsx(n.p,{children:"Provides a list of pre-made spinner sizer, here is the comparison of previous size and new ones:"}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"sm"})}),`
`,e.jsx(n.p,{children:"Changed from 20px to 24px."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"md"})}),`
`,e.jsx(n.p,{children:"Changed from 40px to 48px."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"lg"})}),`
`,e.jsx(n.p,{children:"Changed from 140px to 80px."}),`
`,e.jsx(o,{label:"Migration examples",level:2}),`
`,e.jsx(n.p,{children:"Contrasted spinner:"}),`
`,e.jsx(l,{code:`
<osds-spinner inline contrasted></osds-spinner>

<!-- is now -->

<ods-spinner color="white"></ods-spinner>
`,dark:"true",language:"html"})]})}function C(s={}){const{wrapper:n}={...t(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(i,{...s})}):i(s)}export{C as default};
