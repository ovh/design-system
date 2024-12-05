import{j as e}from"./jsx-runtime-Cz980c3e.js";import{u as a}from"./index-C2TcKet0.js";import{O as s}from"./index-BvZXb4_Z.js";import{M as r,d as i}from"./index-Nkgk7YEz.js";import{B as c}from"./badge.stories-Ds2D6XFc.js";import{H as d}from"./Heading-DYcKlEuJ.js";import"./iframe-COPR_OVU.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-B_J8iUie.js";import"./index-DX_4BEHg.js";import"./index-DrFu-skq.js";import"./index-CveiHl7W.js";import"./lit-html-D-ZEPr28.js";import"./controls-D697y8_r.js";function l(o){const n={code:"code",li:"li",p:"p",ul:"ul",...a(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{of:c,name:"Migration From 17.x"}),`
`,e.jsx(d,{label:"Badge - migrate from v17 to v18",level:1}),`
`,e.jsx(d,{label:"Usage changes",level:2}),`
`,e.jsx(n.p,{children:"Previous to v18, Badge component was actually a Chip component with specific properties set."}),`
`,e.jsx(n.p,{children:"Chip has been split into two new components (Tag and Badge):"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"use Tag when you need an interactive Chip that can be removed."}),`
`,e.jsx(n.li,{children:"use Badge when you need a presentational Chip."}),`
`]}),`
`,e.jsx(n.p,{children:"On Chip component, slots were used to allow any content to be put inside the chip."}),`
`,e.jsx(n.p,{children:"The new badge design enforces the usage of only text as the main content, with an optional icon on the left side."}),`
`,e.jsxs(n.p,{children:["Therefore, slots have been replaced by two attributes: ",e.jsx(n.code,{children:"label"})," and ",e.jsx(n.code,{children:"icon"}),"."]}),`
`,e.jsx(i,{code:`
<osds-chip>
  <osds-icon name="star"></osds-icon>
  My badge
</osds-chip>
`,dark:"true",language:"html"}),`
`,e.jsx(n.p,{children:"The same result would now be achieved using:"}),`
`,e.jsx(i,{code:`
<ods-badge icon="star"
           label="My badge">
</ods-badge>
`,dark:"true",language:"html"}),`
`,e.jsx(d,{label:"Attributes changes",level:2}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"contrasted"})," ",e.jsx(s,{color:"critical",label:"Removed",size:"sm"})]}),`
`,e.jsx(n.p,{children:"Has been removed."}),`
`,e.jsx(n.p,{children:"You can use the style customization to achieve the same result, until a new color get validated by the design team."}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"color"})," ",e.jsx(s,{color:"information",label:"Updated",size:"sm"})]}),`
`,e.jsx(n.p,{children:"Has been updated."}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"default"})," is now ",e.jsx(n.code,{children:"neutral"}),", ",e.jsx(n.code,{children:"info"})," is now ",e.jsx(n.code,{children:"information"}),", ",e.jsx(n.code,{children:"error"})," is now ",e.jsx(n.code,{children:"critical"}),"."]}),`
`,e.jsxs(n.p,{children:["New variants ",e.jsx(n.code,{children:"alpha"}),", ",e.jsx(n.code,{children:"beta"}),", ",e.jsx(n.code,{children:"new"})," and ",e.jsx(n.code,{children:"promotion"})," were added."]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"disabled"})," ",e.jsx(s,{color:"critical",label:"Removed",size:"sm"})]}),`
`,e.jsx(n.p,{children:"Has been removed."}),`
`,e.jsx(n.p,{children:"Badges are not interactive element anymore."}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"icon"})," ",e.jsx(s,{color:"success",label:"New",size:"sm"})]}),`
`,e.jsx(n.p,{children:"New attribute (optional)."}),`
`,e.jsx(n.p,{children:"Allow you to render an icon on the left side of the badge."}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"inline"})," ",e.jsx(s,{color:"critical",label:"Removed",size:"sm"})]}),`
`,e.jsx(n.p,{children:"Has been removed."}),`
`,e.jsx(n.p,{children:"Badges are inline by default. If you need to change this, you can use the style customization."}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"label"})," ",e.jsx(s,{color:"success",label:"New",size:"sm"})]}),`
`,e.jsx(n.p,{children:"New attribute (required)."}),`
`,e.jsx(n.p,{children:"The label you want to render in the badge."}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"removable"})," ",e.jsx(s,{color:"critical",label:"Removed",size:"sm"})]}),`
`,e.jsx(n.p,{children:"Has been removed."}),`
`,e.jsx(n.p,{children:"Badges are not interactive element anymore."}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"selectable"})," ",e.jsx(s,{color:"critical",label:"Removed",size:"sm"})]}),`
`,e.jsx(n.p,{children:"Has been removed."}),`
`,e.jsx(n.p,{children:"Badges are not interactive element anymore."}),`
`,e.jsx(d,{label:"Migration examples",level:2}),`
`,e.jsx(n.p,{children:"Basic badge:"}),`
`,e.jsx(i,{code:`
<osds-chip>
  My badge
</osds-chip>

<!-- is now -->

<ods-badge label="My badge">
</ods-badge>
`,dark:"true",language:"html"}),`
`,e.jsx(n.p,{children:"Color badge:"}),`
`,e.jsx(i,{code:`
<osds-chip color="info">
</osds-chip>

<!-- is now -->

<ods-badge color="information">
</ods-badge>
`,dark:"true",language:"html"}),`
`,e.jsx(n.p,{children:"Inline badge:"}),`
`,e.jsx(i,{code:`
<osds-chip inline>
  My badge
</osds-chip>

<!-- is now -->

<ods-badge label="My badge">
</ods-badge>
`,dark:"true",language:"html"})]})}function z(o={}){const{wrapper:n}={...a(),...o.components};return n?e.jsx(n,{...o,children:e.jsx(l,{...o})}):l(o)}export{z as default};
