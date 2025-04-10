import{j as e}from"./jsx-runtime-BSm7YJ_y.js";import{useMDXComponents as r}from"./index-CUkz9CBV.js";import{o as s}from"./ods-react-CYmC8DRO.js";import{M as a,S as i}from"./index-Ad1vjMe7.js";import{L as d}from"./link.stories-BOsgOY4G.js";import{H as t}from"./Heading-RrL0wZ2g.js";import"./index-E9JSHJbc.js";import"./iframe-ZxD9YLZr.js";import"./index-DOJIDNlS.js";import"./index-DZAg5o-f.js";import"./index-CXQShRbs.js";import"./index-DrFu-skq.js";import"./icon-name-BXMPYDqj.js";import"./controls-CQ2mnOwv.js";function l(o){const n={code:"code",p:"p",...r(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{of:d,name:"Migration From 17.x"}),`
`,e.jsx(t,{label:"Link - migrate from v17 to v18",level:1}),`
`,e.jsx(t,{label:"Attributes changes",level:2}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"contrasted"})," ",e.jsx(s,{color:"critical",size:"sm",children:"Removed"})]}),`
`,e.jsx(n.p,{children:"Has been removed."}),`
`,e.jsx(n.p,{children:"You can use the style customization to achieve the same result, until a new color get validated by the design team."}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"disabled"})," ",e.jsx(s,{color:"information",size:"sm",children:"Updated"})]}),`
`,e.jsx(n.p,{children:"Has been updated."}),`
`,e.jsxs(n.p,{children:["You can use the new ",e.jsx(n.code,{children:"isDisabled"})," attribute to obtain the same behavior."]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"slot "})," ",e.jsx(s,{color:"critical",size:"sm",children:"Removed"})]}),`
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
`,dark:"true",language:"html"})]})}function y(o={}){const{wrapper:n}={...r(),...o.components};return n?e.jsx(n,{...o,children:e.jsx(l,{...o})}):l(o)}export{y as default};
