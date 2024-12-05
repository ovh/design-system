import{j as e}from"./jsx-runtime-sbaUvk5M.js";import{u as a}from"./index-CGWm3lku.js";import{O as s}from"./index-D7X5WOeG.js";import{M as r,d as i}from"./index-D-G4MXwZ.js";import{L as d}from"./link.stories-CnzL-Z7O.js";import{H as t}from"./Heading-1Y93vQ6R.js";import"./iframe-BBvDorMF.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-B_J8iUie.js";import"./index-DX_4BEHg.js";import"./index-DrFu-skq.js";import"./lit-html-D-ZEPr28.js";import"./index-CveiHl7W.js";import"./controls-D697y8_r.js";function l(o){const n={code:"code",p:"p",...a(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{of:d,name:"Migration From 17.x"}),`
`,e.jsx(t,{label:"Link - migrate from v17 to v18",level:1}),`
`,e.jsx(t,{label:"Attributes changes",level:2}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"contrasted"})," ",e.jsx(s,{color:"critical",label:"Removed",size:"sm"})]}),`
`,e.jsx(n.p,{children:"Has been removed."}),`
`,e.jsx(n.p,{children:"You can use the style customization to achieve the same result, until a new color get validated by the design team."}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"disabled"})," ",e.jsx(s,{color:"information",label:"Updated",size:"sm"})]}),`
`,e.jsx(n.p,{children:"Has been updated."}),`
`,e.jsxs(n.p,{children:["You can use the new ",e.jsx(n.code,{children:"isDisabled"})," attribute to obtain the same behavior."]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"slot "})," ",e.jsx(s,{color:"critical",label:"Removed",size:"sm"})]}),`
`,e.jsx(n.p,{children:"Has been removed."}),`
`,e.jsxs(n.p,{children:[`You can no longer put any content inside the component. The ods-link now enforces the rendering of a label, and eventually an icon.
You can use the new attributes `,e.jsx(n.code,{children:"label"})," and ",e.jsx(n.code,{children:"icon"})," to achieve that."]}),`
`,e.jsx(t,{label:"Migration examples",level:2}),`
`,e.jsx(n.p,{children:"Label link:"}),`
`,e.jsx(i,{code:`
<osds-link href="/page">
  My link
</osds-link>

<!-- is now -->

<ods-link href="/page" label="Content"></ods-link>
`,dark:"true",language:"html"}),`
`,e.jsx(n.p,{children:"Disabled link:"}),`
`,e.jsx(i,{code:`
<osds-link href="/page" disabled>
  My link
</osds-link>

<!-- is now -->

<ods-link href="/page" label="My link" is-disabled>
</ods-link>
`,dark:"true",language:"html"}),`
`,e.jsx(n.p,{children:"Icon link:"}),`
`,e.jsx(i,{code:`
<osds-link href="/page">
  <osds-icon name="warning" size="xs"></osds-icon>
</osds-link>

<!-- is now -->

<ods-link href="/page" icon="triangle-exclamation"></ods-link>
`,dark:"true",language:"html"})]})}function z(o={}){const{wrapper:n}={...a(),...o.components};return n?e.jsx(n,{...o,children:e.jsx(l,{...o})}):l(o)}export{z as default};
