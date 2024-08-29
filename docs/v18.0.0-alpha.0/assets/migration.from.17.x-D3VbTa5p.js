import{j as n}from"./jsx-runtime-3v6rTKkY.js";import{u as o}from"./index-B5y3xRNA.js";import{M as t}from"./index-sugWq352.js";import{L as r}from"./link.stories-BEac8wNH.js";import"./iframe-D98u-D7f.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-B_J8iUie.js";import"./index-DX_4BEHg.js";import"./index-DrFu-skq.js";import"./lit-html-D-ZEPr28.js";import"./index-DB8q6ij-.js";import"./control-C1r2wu67.js";function i(s){const e={code:"code",h1:"h1",h2:"h2",hr:"hr",p:"p",pre:"pre",...o(),...s.components};return n.jsxs(n.Fragment,{children:[n.jsx(t,{of:r,name:"Migration From 17.x"}),`
`,n.jsx(e.h1,{id:"link---migrate-from-v17-to-v18",children:"Link - migrate from v17 to v18"}),`
`,n.jsx(e.hr,{}),`
`,n.jsx(e.h2,{id:"attributes-changes",children:"Attributes changes"}),`
`,n.jsxs(e.p,{children:[n.jsx(e.code,{children:"contrasted"})," ",n.jsx("img",{src:"https://img.shields.io/badge/removed-FF0000"})]}),`
`,n.jsx(e.p,{children:"Has been removed."}),`
`,n.jsx(e.p,{children:"You can use the style customization to achieve the same result, until a new color get validated by the design team."}),`
`,n.jsxs(e.p,{children:[n.jsx(e.code,{children:"disabled"})," ",n.jsx("img",{src:"https://img.shields.io/badge/updated-00FFFF"})]}),`
`,n.jsx(e.p,{children:"Has been updated."}),`
`,n.jsxs(e.p,{children:["You can use the new ",n.jsx(e.code,{children:"isDisabled"})," attribute to obtain the same behavior."]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.code,{children:"slot "})," ",n.jsx("img",{src:"https://img.shields.io/badge/removed-FF0000"})]}),`
`,n.jsx(e.p,{children:"Has been removed."}),`
`,n.jsxs(e.p,{children:[`You can no longer put any content inside the component. The ods-link now enforces the rendering of a label, and eventually an icon.
You can use the new attributes `,n.jsx(e.code,{children:"label"})," and ",n.jsx(e.code,{children:"icon"})," to achieve that."]}),`
`,n.jsx(e.h2,{id:"migration-examples",children:"Migration examples"}),`
`,n.jsx(e.p,{children:"Label link:"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-html",children:`<osds-link href="/page">
  My link
</osds-link>

<!-- is now -->

<ods-link href="/page" label="Content"></ods-link>
`})}),`
`,n.jsx(e.p,{children:"Disabled link:"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-html",children:`<osds-link href="/page" disabled>
  My link
</osds-link>

<!-- is now -->

<ods-link href="/page" label="My link" is-disabled>
</ods-link>
`})}),`
`,n.jsx(e.p,{children:"Icon link:"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-html",children:`<osds-link href="/page">
  <osds-icon name="warning" size="xs"></osds-icon>
</osds-link>

<!-- is now -->

<ods-link href="/page" icon="triangle-exclamation"></ods-link>
`})})]})}function f(s={}){const{wrapper:e}={...o(),...s.components};return e?n.jsx(e,{...s,children:n.jsx(i,{...s})}):i(s)}export{f as default};
