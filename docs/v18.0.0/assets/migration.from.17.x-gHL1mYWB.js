import{j as e}from"./jsx-runtime-Dn0LW--f.js";import{u as i}from"./index-DeyDdHvX.js";import{M as o}from"./index-BM3JsZOq.js";import{B as a}from"./badge.stories-BSEtCEC6.js";import"./iframe-6_jBXMSq.js";import"../sb-preview/runtime.js";import"./commonjsHelpers-Cpj98o6Y.js";import"./index-B_J8iUie.js";import"./index-DX_4BEHg.js";import"./index-DrFu-skq.js";import"./index-DryTTbHl.js";import"./lit-html-D-ZEPr28.js";import"./control-C1r2wu67.js";function d(s){const n={code:"code",h1:"h1",h2:"h2",hr:"hr",li:"li",p:"p",pre:"pre",ul:"ul",...i(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:a,name:"Migration From 17.x"}),`
`,e.jsx(n.h1,{id:"badge---migrate-from-v17-to-v18",children:"Badge - migrate from v17 to v18"}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"usage-changes",children:"Usage changes"}),`
`,e.jsx(n.p,{children:"Previous to v18, Badge component was actually a Chip component with specific properties set."}),`
`,e.jsx(n.p,{children:"Chip has been split into two new components (Tag and Badge):"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"use Tag when you need an interactive Chip that can be removed."}),`
`,e.jsx(n.li,{children:"use Badge when you need a presentational Chip."}),`
`]}),`
`,e.jsx(n.p,{children:"On Chip component, slots were used to allow any content to be put inside the chip."}),`
`,e.jsx(n.p,{children:"The new badge design enforces the usage of only text as the main content, with an optional icon on the left side."}),`
`,e.jsxs(n.p,{children:["Therefore, slots have been replaced by two attributes: ",e.jsx(n.code,{children:"label"})," and ",e.jsx(n.code,{children:"icon"}),"."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<osds-chip>
  <osds-icon name="star"></osds-icon>
  My badge
</osds-chip>
`})}),`
`,e.jsx(n.p,{children:"The same result would now be achieved using:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<ods-badge icon="star"
           label="My badge">
</ods-badge>
`})}),`
`,e.jsx(n.h2,{id:"attributes-changes",children:"Attributes changes"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"contrasted"})," ",e.jsx("ods-badge",{size:"sm",color:"critical",label:"Removed"})]}),`
`,e.jsx(n.p,{children:"Has been removed."}),`
`,e.jsx(n.p,{children:"You can use the style customization to achieve the same result, until a new color get validated by the design team."}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"color"})," ",e.jsx("ods-badge",{size:"sm",label:"Updated"})]}),`
`,e.jsx(n.p,{children:"Has been updated."}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"default"})," is now ",e.jsx(n.code,{children:"neutral"}),", ",e.jsx(n.code,{children:"info"})," is now ",e.jsx(n.code,{children:"information"}),", ",e.jsx(n.code,{children:"error"})," is now ",e.jsx(n.code,{children:"critical"}),"."]}),`
`,e.jsxs(n.p,{children:["New variants ",e.jsx(n.code,{children:"alpha"}),", ",e.jsx(n.code,{children:"beta"}),", ",e.jsx(n.code,{children:"new"})," and ",e.jsx(n.code,{children:"promotion"})," were added."]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"disabled"})," ",e.jsx("ods-badge",{size:"sm",color:"critical",label:"Removed"})]}),`
`,e.jsx(n.p,{children:"Has been removed."}),`
`,e.jsx(n.p,{children:"Badges are not interactive element anymore."}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"icon"})," ",e.jsx("ods-badge",{size:"sm",color:"success",label:"New"})]}),`
`,e.jsx(n.p,{children:"New attribute (optional)."}),`
`,e.jsx(n.p,{children:"Allow you to render an icon on the left side of the badge."}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"inline"})," ",e.jsx("ods-badge",{size:"sm",color:"critical",label:"Removed"})]}),`
`,e.jsx(n.p,{children:"Has been removed."}),`
`,e.jsx(n.p,{children:"Badges are inline by default. If you need to change this, you can use the style customization."}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"label"})," ",e.jsx("ods-badge",{size:"sm",color:"success",label:"New"})]}),`
`,e.jsx(n.p,{children:"New attribute (required)."}),`
`,e.jsx(n.p,{children:"The label you want to render in the badge."}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"removable"})," ",e.jsx("ods-badge",{size:"sm",color:"critical",label:"Removed"})]}),`
`,e.jsx(n.p,{children:"Has been removed."}),`
`,e.jsx(n.p,{children:"Badges are not interactive element anymore."}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"selectable"})," ",e.jsx("ods-badge",{size:"sm",color:"critical",label:"Removed"})]}),`
`,e.jsx(n.p,{children:"Has been removed."}),`
`,e.jsx(n.p,{children:"Badges are not interactive element anymore."}),`
`,e.jsx(n.h2,{id:"migration-examples",children:"Migration examples"}),`
`,e.jsx(n.p,{children:"Basic badge:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<osds-chip>
  My badge
</osds-chip>

<!-- is now -->

<ods-badge label="My badge">
</ods-badge>
`})}),`
`,e.jsx(n.p,{children:"Color badge:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<osds-chip color="info">
</osds-chip>

<!-- is now -->

<ods-badge color="information">
</ods-badge>
`})}),`
`,e.jsx(n.p,{children:"Inline badge:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<osds-chip inline>
  My badge
</osds-chip>

<!-- is now -->

<ods-badge label="My badge">
</ods-badge>
`})})]})}function v(s={}){const{wrapper:n}={...i(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(d,{...s})}):d(s)}export{v as default};
