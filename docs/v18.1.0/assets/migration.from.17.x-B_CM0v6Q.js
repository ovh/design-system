import{j as e}from"./jsx-runtime-vK1CujOl.js";import{u as r}from"./index-CB7mz5IJ.js";import{O as n}from"./index-CONup0N6.js";import{M as a,d as l}from"./index-Bd2Jnm8T.js";import{M as c}from"./message.stories--rVtq4it.js";import{H as i}from"./Heading-oJ6nNH90.js";import"./iframe-Lgv0C8F1.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-B_J8iUie.js";import"./index-DX_4BEHg.js";import"./index-DrFu-skq.js";import"./index-BNPjhb5w.js";import"./lit-html-D-ZEPr28.js";import"./unsafe-html-HR6uCwaW.js";import"./controls-DpsgTNdU.js";function t(o){const s={code:"code",p:"p",...r(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{of:c,name:"Migration From 17.x"}),`
`,e.jsx(i,{label:"Message - migrate from v17 to v18",level:1}),`
`,e.jsx(i,{label:"Attributes changes",level:2}),`
`,e.jsxs(s.p,{children:[e.jsx(s.code,{children:"contrasted"})," ",e.jsx(n,{color:"critical",label:"Removed",size:"sm"})]}),`
`,e.jsx(s.p,{children:"Has been removed."}),`
`,e.jsx(s.p,{children:"You can use the style customization to achieve the same result, until a new color get validated by the design team."}),`
`,e.jsxs(s.p,{children:[e.jsx(s.code,{children:"inline"})," ",e.jsx(n,{color:"critical",label:"Removed",size:"sm"})]}),`
`,e.jsx(s.p,{children:"Has been removed."}),`
`,e.jsx(s.p,{children:"Message is inline by default. If you need to change this, you can use the style customization."}),`
`,e.jsxs(s.p,{children:[e.jsx(s.code,{children:"removable"})," ",e.jsx(n,{color:"critical",label:"Removed",size:"sm"})]}),`
`,e.jsx(s.p,{children:"Has been removed."}),`
`,e.jsx(s.p,{children:"Message is always removable."}),`
`,e.jsxs(s.p,{children:[e.jsx(s.code,{children:"type"})," ",e.jsx(n,{color:"critical",label:"Removed",size:"sm"})]}),`
`,e.jsx(s.p,{children:"Has been removed."}),`
`,e.jsx(s.p,{children:"Color attribute will condition which icon is displayed."}),`
`,e.jsxs(s.p,{children:[e.jsx(s.code,{children:"variant"})," ",e.jsx(n,{color:"success",label:"New",size:"sm"})]}),`
`,e.jsx(s.p,{children:"New attribute."}),`
`,e.jsx(s.p,{children:"Allow you to choose between default or light variant, a white version for lighter notification but different from contrasted color."}),`
`,e.jsx(i,{label:"Migration examples",level:2}),`
`,e.jsx(s.p,{children:"Basic tag:"}),`
`,e.jsx(l,{code:`
<osds-message>
  My message
</osds-message>

<!-- is now -->

<ods-message>
  My message
</ods-message>
`,dark:"true",language:"html"})]})}function R(o={}){const{wrapper:s}={...r(),...o.components};return s?e.jsx(s,{...o,children:e.jsx(t,{...o})}):t(o)}export{R as default};