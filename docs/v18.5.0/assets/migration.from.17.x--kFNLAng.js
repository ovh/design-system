import{j as e,M as r,d as o}from"./index-aSJOi-xY.js";import{u as a}from"./index-D_oymSD0.js";import{O as i}from"./index-DduIf26o.js";import{L as d}from"./link.stories-BuDjLVFt.js";import{H as l}from"./Heading-fUBW5LMg.js";import"./iframe-Cjn0x15a.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-D-8MO0q_.js";import"./index-DX_4BEHg.js";import"./index-DrFu-skq.js";import"./controls-DX883vx3.js";import"./index-B1WyGMUD.js";function t(s){const n={code:"code",p:"p",...a(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{of:d,name:"Migration From 17.x"}),`
`,e.jsx(l,{label:"Link - migrate from v17 to v18",level:1}),`
`,e.jsx(l,{label:"Attributes changes",level:2}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"contrasted"})," ",e.jsx(i,{color:"critical",label:"Removed",size:"sm"})]}),`
`,e.jsx(n.p,{children:"Has been removed."}),`
`,e.jsx(n.p,{children:"You can use the style customization to achieve the same result, until a new color get validated by the design team."}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"disabled"})," ",e.jsx(i,{color:"information",label:"Updated",size:"sm"})]}),`
`,e.jsx(n.p,{children:"Has been updated."}),`
`,e.jsxs(n.p,{children:["You can use the new ",e.jsx(n.code,{children:"isDisabled"})," attribute to obtain the same behavior."]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"slot "})," ",e.jsx(i,{color:"critical",label:"Removed",size:"sm"})]}),`
`,e.jsx(n.p,{children:"Has been removed."}),`
`,e.jsxs(n.p,{children:[`You can no longer put any content inside the component. The ods-link now enforces the rendering of a label, and eventually an icon.
You can use the new attributes `,e.jsx(n.code,{children:"label"})," and ",e.jsx(n.code,{children:"icon"})," to achieve that."]}),`
`,e.jsx(l,{label:"Migration examples",level:2}),`
`,e.jsx(n.p,{children:"Label link:"}),`
`,e.jsx(o,{code:`
<osds-link href="/page">
  My link
</osds-link>

<!-- is now -->

<ods-link href="/page" label="Content"></ods-link>
`,dark:"true",language:"html"}),`
`,e.jsx(n.p,{children:"Disabled link:"}),`
`,e.jsx(o,{code:`
<osds-link href="/page" disabled>
  My link
</osds-link>

<!-- is now -->

<ods-link href="/page" label="My link" is-disabled>
</ods-link>
`,dark:"true",language:"html"}),`
`,e.jsx(n.p,{children:"Icon link:"}),`
`,e.jsx(o,{code:`
<osds-link href="/page">
  <osds-icon name="warning" size="xs"></osds-icon>
</osds-link>

<!-- is now -->

<ods-link href="/page" icon="triangle-exclamation"></ods-link>
`,dark:"true",language:"html"})]})}function w(s={}){const{wrapper:n}={...a(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(t,{...s})}):t(s)}export{w as default};
