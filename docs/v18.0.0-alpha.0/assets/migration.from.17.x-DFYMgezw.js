import{j as e}from"./jsx-runtime-3v6rTKkY.js";import{u as t}from"./index-B5y3xRNA.js";import{M as o}from"./index-sugWq352.js";import{M as r}from"./message.stories-C4df2Dsl.js";import"./iframe-D98u-D7f.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-B_J8iUie.js";import"./index-DX_4BEHg.js";import"./index-DrFu-skq.js";import"./index-DB8q6ij-.js";import"./lit-html-D-ZEPr28.js";import"./unsafe-html-HR6uCwaW.js";import"./control-C1r2wu67.js";function i(n){const s={code:"code",h1:"h1",h2:"h2",hr:"hr",p:"p",pre:"pre",...t(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:r,name:"Migration From 17.x"}),`
`,e.jsx(s.h1,{id:"message---migrate-from-v17-to-v18",children:"Message - migrate from v17 to v18"}),`
`,e.jsx(s.hr,{}),`
`,e.jsx(s.h2,{id:"attributes-changes",children:"Attributes changes"}),`
`,e.jsxs(s.p,{children:[e.jsx(s.code,{children:"contrasted"})," ",e.jsx("img",{src:"https://img.shields.io/badge/removed-FF0000"})]}),`
`,e.jsx(s.p,{children:"Has been removed."}),`
`,e.jsx(s.p,{children:"You can use the style customization to achieve the same result, until a new color get validated by the design team."}),`
`,e.jsxs(s.p,{children:[e.jsx(s.code,{children:"inline"})," ",e.jsx("img",{src:"https://img.shields.io/badge/removed-FF0000"})]}),`
`,e.jsx(s.p,{children:"Has been removed."}),`
`,e.jsx(s.p,{children:"Message is inline by default. If you need to change this, you can use the style customization."}),`
`,e.jsxs(s.p,{children:[e.jsx(s.code,{children:"removable"})," ",e.jsx("img",{src:"https://img.shields.io/badge/removed-FF0000"})]}),`
`,e.jsx(s.p,{children:"Has been removed."}),`
`,e.jsx(s.p,{children:"Message is always removable."}),`
`,e.jsxs(s.p,{children:[e.jsx(s.code,{children:"type"})," ",e.jsx("img",{src:"https://img.shields.io/badge/removed-FF0000"})]}),`
`,e.jsx(s.p,{children:"Has been removed."}),`
`,e.jsx(s.p,{children:"Color attribute will condition which icon is displayed."}),`
`,e.jsxs(s.p,{children:[e.jsx(s.code,{children:"variant"})," ",e.jsx("img",{src:"https://img.shields.io/badge/new-008000"})]}),`
`,e.jsx(s.p,{children:"New attribute."}),`
`,e.jsx(s.p,{children:"Allow you to choose between default or light variant, a white version for lighter notification but different from contrasted color."}),`
`,e.jsx(s.h2,{id:"migration-examples",children:"Migration examples"}),`
`,e.jsx(s.p,{children:"Basic tag:"}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-html",children:`<osds-message>
  My message
</osds-message>

<!-- is now -->

<ods-message>
  My message
</ods-message>
`})})]})}function M(n={}){const{wrapper:s}={...t(),...n.components};return s?e.jsx(s,{...n,children:e.jsx(i,{...n})}):i(n)}export{M as default};
