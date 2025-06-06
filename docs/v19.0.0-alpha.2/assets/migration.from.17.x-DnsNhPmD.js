import{j as e}from"./jsx-runtime-VM66peLj.js";import{useMDXComponents as l}from"./index-DQB45XCM.js";import{h as i}from"./Badge-EGenXdCK-DDYseYDy.js";import{M as a,S as s}from"./index-BlaLg9GY.js";import{L as d}from"./link.stories-DVOuFm1k.js";import{H as t}from"./Heading-6Mfikk-c.js";import"./index-D_CmzhJ4.js";import"./index-2w0W-O47-BJ19ihbZ.js";import"./iframe-CGgj-FAD.js";import"./index-ChzAxGiP.js";import"./index-CucsY3YN.js";import"./index-CXQShRbs.js";import"./index-DrFu-skq.js";import"./icon-name-jL3axqAU.js";import"./index-CkQHsVsO.js";import"./Link-CnzBxqpY.js";import"./controls-BtiQQn1l.js";function r(o){const n={code:"code",p:"p",...l(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{of:d,name:"Migration From 17.x"}),`
`,e.jsx(t,{label:"Link - migrate from v17 to v18",level:1}),`
`,e.jsx(t,{label:"Attributes changes",level:2}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"contrasted"})," ",e.jsx(i,{color:"critical",size:"sm",children:"Removed"})]}),`
`,e.jsx(n.p,{children:"Has been removed."}),`
`,e.jsx(n.p,{children:"You can use the style customization to achieve the same result, until a new color get validated by the design team."}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"disabled"})," ",e.jsx(i,{color:"information",size:"sm",children:"Updated"})]}),`
`,e.jsx(n.p,{children:"Has been updated."}),`
`,e.jsxs(n.p,{children:["You can use the new ",e.jsx(n.code,{children:"isDisabled"})," attribute to obtain the same behavior."]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"slot "})," ",e.jsx(i,{color:"critical",size:"sm",children:"Removed"})]}),`
`,e.jsx(n.p,{children:"Has been removed."}),`
`,e.jsxs(n.p,{children:[`You can no longer put any content inside the component. The ods-link now enforces the rendering of a label, and eventually an icon.
You can use the new attributes `,e.jsx(n.code,{children:"label"})," and ",e.jsx(n.code,{children:"icon"})," to achieve that."]}),`
`,e.jsx(t,{label:"Migration examples",level:2}),`
`,e.jsx(n.p,{children:"Label link:"}),`
`,e.jsx(s,{code:`
<osds-link href="/page">
  My link
</osds-link>

<!-- is now -->

<ods-link href="/page" label="Content"></ods-link>
`,dark:"true",language:"html"}),`
`,e.jsx(n.p,{children:"Disabled link:"}),`
`,e.jsx(s,{code:`
<osds-link href="/page" disabled>
  My link
</osds-link>

<!-- is now -->

<ods-link href="/page" label="My link" is-disabled>
</ods-link>
`,dark:"true",language:"html"}),`
`,e.jsx(n.p,{children:"Icon link:"}),`
`,e.jsx(s,{code:`
<osds-link href="/page">
  <osds-icon name="warning" size="xs"></osds-icon>
</osds-link>

<!-- is now -->

<ods-link href="/page" icon="triangle-exclamation"></ods-link>
`,dark:"true",language:"html"})]})}function H(o={}){const{wrapper:n}={...l(),...o.components};return n?e.jsx(n,{...o,children:e.jsx(r,{...o})}):r(o)}export{H as default};
