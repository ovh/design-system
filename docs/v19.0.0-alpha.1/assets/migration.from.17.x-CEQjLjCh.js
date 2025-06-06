import{j as e}from"./jsx-runtime-VM66peLj.js";import{useMDXComponents as c}from"./index-DQB45XCM.js";import{n as s}from"./ods-react-BwLnGFOk.js";import{M as l,S as i}from"./index-BtXuKPxx.js";import{B as a}from"./badge.stories-Bq2qIvh2.js";import{H as d}from"./Heading-D0aj94cg.js";import"./index-D_CmzhJ4.js";import"./index-ChzAxGiP.js";import"./index-CucsY3YN.js";import"./iframe-VOlI4tKJ.js";import"./index-CXQShRbs.js";import"./index-DrFu-skq.js";import"./index-CkQHsVsO.js";import"./controls-BtiQQn1l.js";function r(o){const n={code:"code",li:"li",p:"p",ul:"ul",...c(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{of:a,name:"Migration From 17.x"}),`
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
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"contrasted"})," ",e.jsx(s,{color:"critical",size:"sm",children:"Removed"})]}),`
`,e.jsx(n.p,{children:"Has been removed."}),`
`,e.jsx(n.p,{children:"You can use the style customization to achieve the same result, until a new color get validated by the design team."}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"color"})," ",e.jsx(s,{color:"information",size:"sm",children:"Updated"})]}),`
`,e.jsx(n.p,{children:"Has been updated."}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"default"})," is now ",e.jsx(n.code,{children:"neutral"}),", ",e.jsx(n.code,{children:"info"})," is now ",e.jsx(n.code,{children:"information"}),", ",e.jsx(n.code,{children:"error"})," is now ",e.jsx(n.code,{children:"critical"}),"."]}),`
`,e.jsxs(n.p,{children:["New variants ",e.jsx(n.code,{children:"alpha"}),", ",e.jsx(n.code,{children:"beta"}),", ",e.jsx(n.code,{children:"new"})," and ",e.jsx(n.code,{children:"promotion"})," were added."]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"disabled"})," ",e.jsx(s,{color:"critical",size:"sm",children:"Removed"})]}),`
`,e.jsx(n.p,{children:"Has been removed."}),`
`,e.jsx(n.p,{children:"Badges are not interactive element anymore."}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"icon"})," ",e.jsx(s,{color:"success",size:"sm",children:"New"})]}),`
`,e.jsx(n.p,{children:"New attribute (optional)."}),`
`,e.jsx(n.p,{children:"Allow you to render an icon on the left side of the badge."}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"inline"})," ",e.jsx(s,{color:"critical",size:"sm",children:"Removed"})]}),`
`,e.jsx(n.p,{children:"Has been removed."}),`
`,e.jsx(n.p,{children:"Badges are inline by default. If you need to change this, you can use the style customization."}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"label"})," ",e.jsx(s,{color:"success",size:"sm",children:"New"})]}),`
`,e.jsx(n.p,{children:"New attribute (required)."}),`
`,e.jsx(n.p,{children:"The label you want to render in the badge."}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"removable"})," ",e.jsx(s,{color:"critical",size:"sm",children:"Removed"})]}),`
`,e.jsx(n.p,{children:"Has been removed."}),`
`,e.jsx(n.p,{children:"Badges are not interactive element anymore."}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"selectable"})," ",e.jsx(s,{color:"critical",size:"sm",children:"Removed"})]}),`
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
`,dark:"true",language:"html"})]})}function B(o={}){const{wrapper:n}={...c(),...o.components};return n?e.jsx(n,{...o,children:e.jsx(r,{...o})}):r(o)}export{B as default};
