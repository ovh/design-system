import{j as e}from"./jsx-runtime-3v6rTKkY.js";import{u as i}from"./index-B5y3xRNA.js";import{M as o}from"./index-sugWq352.js";import{R as d}from"./range.stories-CGmWN_qz.js";import"./iframe-D98u-D7f.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-B_J8iUie.js";import"./index-DX_4BEHg.js";import"./index-DrFu-skq.js";import"./lit-html-D-ZEPr28.js";import"./control-C1r2wu67.js";function r(s){const n={code:"code",h1:"h1",h2:"h2",hr:"hr",p:"p",pre:"pre",...i(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:d,name:"Migration From 17.x"}),`
`,e.jsx(n.h1,{id:"range---migrate-from-v17-to-v18",children:"Range - migrate from v17 to v18"}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"attributes-changes",children:"Attributes changes"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"color"})," ",e.jsx("img",{src:"https://img.shields.io/badge/removed-FF0000"})]}),`
`,e.jsx(n.p,{children:"Has been removed."}),`
`,e.jsx(n.p,{children:"This design feature has been removed in order to match the new styling of the component."}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"disabled"})," ",e.jsx("img",{src:"https://img.shields.io/badge/updated-00FFFF"})]}),`
`,e.jsx(n.p,{children:"Has been updated."}),`
`,e.jsxs(n.p,{children:["You can use the new ",e.jsx(n.code,{children:"isDisabled"})," attribute to obtain the same behavior."]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"error"})," ",e.jsx("img",{src:"https://img.shields.io/badge/updated-00FFFF"})]}),`
`,e.jsx(n.p,{children:"Has been updated."}),`
`,e.jsxs(n.p,{children:["You can use the new ",e.jsx(n.code,{children:"hasError"})," attribute to obtain the same behavior."]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"errorStateControl"})," ",e.jsx("img",{src:"https://img.shields.io/badge/removed-FF0000"})]}),`
`,e.jsx(n.p,{children:"Has been removed."}),`
`,e.jsx(n.p,{children:"Was not relevant for few versions already."}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"formControl"})," ",e.jsx("img",{src:"https://img.shields.io/badge/removed-FF0000"})]}),`
`,e.jsx(n.p,{children:"Has been removed."}),`
`,e.jsx(n.p,{children:"Was not relevant for few versions already."}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"forbidden-values"})," ",e.jsx("img",{src:"https://img.shields.io/badge/removed-FF0000"})]}),`
`,e.jsx(n.p,{children:"Has been removed."}),`
`,e.jsxs(n.p,{children:["You can replace it with a regex on the ",e.jsx(n.code,{children:"pattern"})," attributes."]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"inline"})," ",e.jsx("img",{src:"https://img.shields.io/badge/removed-FF0000"})]}),`
`,e.jsx(n.p,{children:"Has been removed."}),`
`,e.jsxs(n.p,{children:["Range is now ",e.jsx(n.code,{children:"inline-block"}),` by default.
You can add some style directly on the component if you want to override that.`]}),`
`,e.jsx(n.h2,{id:"migration-examples",children:"Migration examples"}),`
`,e.jsx(n.p,{children:"Disabled range:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<osds-range disabled>
</osds-range>

<!-- is now -->

<ods-range is-disabled>
</ods-range>
`})}),`
`,e.jsx(n.p,{children:"Error range:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<osds-range error>
</osds-range>

<!-- is now -->

<ods-range has-error>
</ods-range>
`})}),`
`,e.jsx(n.p,{children:"Inline range:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<osds-range inline>
</osds-range>

<!-- is now -->

<ods-range>
</ods-range>
`})})]})}function v(s={}){const{wrapper:n}={...i(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(r,{...s})}):r(s)}export{v as default};
