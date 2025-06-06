import{j as e}from"./jsx-runtime-VM66peLj.js";import{useMDXComponents as t}from"./index-DQB45XCM.js";import{n as s}from"./ods-react-BwLnGFOk.js";import{M as d,S as c}from"./index-BtXuKPxx.js";import{S as l}from"./spinner.stories-BqgAGHmh.js";import{H as o}from"./Heading-D0aj94cg.js";import"./index-D_CmzhJ4.js";import"./index-ChzAxGiP.js";import"./index-CucsY3YN.js";import"./iframe-VOlI4tKJ.js";import"./index-CXQShRbs.js";import"./index-DrFu-skq.js";import"./OdsSpinner-DCrUZmmt.js";import"./index-CkQHsVsO.js";import"./controls-BtiQQn1l.js";function i(r){const n={code:"code",p:"p",strong:"strong",...t(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(d,{of:l,name:"Migration From 17.x"}),`
`,e.jsx(o,{label:"Spinner - migrate from v17 to v18",level:1}),`
`,e.jsx(o,{label:"Attributes changes",level:2}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"color"})," ",e.jsx(s,{color:"success",size:"sm",children:"New"})]}),`
`,e.jsx(n.p,{children:"New attribute."}),`
`,e.jsx(n.p,{children:"Provides a list of colors using the currently applied theme."}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"contrasted"})," ",e.jsx(s,{color:"critical",size:"sm",children:"Removed"})]}),`
`,e.jsx(n.p,{children:"Has been removed."}),`
`,e.jsxs(n.p,{children:["You can use the new ",e.jsx(n.code,{children:"white"})," color to obtain the same rendering."]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"inline"})," ",e.jsx(s,{color:"critical",size:"sm",children:"Removed"})]}),`
`,e.jsx(n.p,{children:"Has been removed."}),`
`,e.jsxs(n.p,{children:["Spinner is now ",e.jsx(n.code,{children:"inline-block"}),` by default.
You can add some style directly on the component if you want to override that.`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"mode"})," ",e.jsx(s,{color:"critical",size:"sm",children:"Removed"})]}),`
`,e.jsx(n.p,{children:"Has been removed."}),`
`,e.jsx(n.p,{children:"There was only was mode value, it is now the default rendering."}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"size"})," ",e.jsx(s,{color:"information",size:"sm",children:"Updated"})]}),`
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
`,e.jsx(c,{code:`
<osds-spinner inline contrasted></osds-spinner>

<!-- is now -->

<ods-spinner color="white"></ods-spinner>
`,dark:"true",language:"html"})]})}function C(r={}){const{wrapper:n}={...t(),...r.components};return n?e.jsx(n,{...r,children:e.jsx(i,{...r})}):i(r)}export{C as default};
