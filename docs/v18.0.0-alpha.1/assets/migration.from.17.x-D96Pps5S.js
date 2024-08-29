import{j as e}from"./jsx-runtime-C_5uCoOk.js";import{u as t}from"./index-BNSrq6w-.js";import{M as d}from"./index-DnV51lgW.js";import{C as i}from"./code.stories-vi6EQWI5.js";import"./iframe-Cm7AUSBL.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-B_J8iUie.js";import"./index-DX_4BEHg.js";import"./index-DrFu-skq.js";import"./lit-html-D-ZEPr28.js";import"./control-C1r2wu67.js";function s(n){const o={code:"code",h1:"h1",h2:"h2",hr:"hr",p:"p",pre:"pre",...t(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(d,{of:i,name:"Migration From 17.x"}),`
`,e.jsx(o.h1,{id:"code---migrate-from-v17-to-v18",children:"Code - migrate from v17 to v18"}),`
`,e.jsx(o.hr,{}),`
`,e.jsx(o.h2,{id:"usage-changes",children:"Usage changes"}),`
`,e.jsxs(o.p,{children:["To add a copy button on the previous component, you had to add your own button in the ",e.jsx(o.code,{children:"copy"})," slot."]}),`
`,e.jsxs(o.p,{children:["This slot as been removed, you can now toggle the copy button using the new ",e.jsx(o.code,{children:"can-copy"})," attribute."]}),`
`,e.jsx(o.h2,{id:"attributes-changes",children:"Attributes changes"}),`
`,e.jsxs(o.p,{children:[e.jsx(o.code,{children:"canCopy"})," ",e.jsx("img",{src:"https://img.shields.io/badge/new-008000"})]}),`
`,e.jsx(o.p,{children:"New attribute (optional)."}),`
`,e.jsx(o.p,{children:"Set this to add a copy button on the right side of the code container."}),`
`,e.jsxs(o.p,{children:[e.jsx(o.code,{children:"color "})," ",e.jsx("img",{src:"https://img.shields.io/badge/removed-FF0000"})]}),`
`,e.jsx(o.p,{children:"Has been removed."}),`
`,e.jsx(o.p,{children:"You can use the style customization to achieve the same result."}),`
`,e.jsxs(o.p,{children:[e.jsx(o.code,{children:"contrasted"})," ",e.jsx("img",{src:"https://img.shields.io/badge/removed-FF0000"})]}),`
`,e.jsx(o.p,{children:"Has been removed."}),`
`,e.jsx(o.p,{children:"You can use the style customization to achieve the same result, until a new color get validated by the design team."}),`
`,e.jsxs(o.p,{children:[e.jsx(o.code,{children:"size "})," ",e.jsx("img",{src:"https://img.shields.io/badge/removed-FF0000"})]}),`
`,e.jsx(o.p,{children:"Has been removed."}),`
`,e.jsx(o.p,{children:"You can use the style customization to achieve the same result."}),`
`,e.jsx(o.h2,{id:"migration-examples",children:"Migration examples"}),`
`,e.jsx(o.p,{children:"Default usage:"}),`
`,e.jsx(o.pre,{children:e.jsx(o.code,{className:"language-html",children:`<osds-code>
  import { OsdsText } from '@ovhcloud/ods-components/react';
</osds-code>

<!-- is now -->

<ods-code>
  import { OsdsText } from '@ovhcloud/ods-components/react';
</ods-code>
`})}),`
`,e.jsx(o.p,{children:"With a copy button:"}),`
`,e.jsx(o.pre,{children:e.jsx(o.code,{className:"language-html",children:`<osds-code>
  <osds-button slot="copy" variant="stroked">Copy</osds-button>
  import { OsdsText } from '@ovhcloud/ods-components/react';
</osds-code>

<!-- is now -->

<ods-code can-copy>
  import { OsdsText } from '@ovhcloud/ods-components/react';
</ods-code>
`})})]})}function b(n={}){const{wrapper:o}={...t(),...n.components};return o?e.jsx(o,{...n,children:e.jsx(s,{...n})}):s(n)}export{b as default};
