import{j as e}from"./jsx-runtime-3v6rTKkY.js";import{u as r}from"./index-B5y3xRNA.js";import{M as o}from"./index-sugWq352.js";import{T as i}from"./text.stories-7fH7iudC.js";import"./iframe-D98u-D7f.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-B_J8iUie.js";import"./index-DX_4BEHg.js";import"./index-DrFu-skq.js";import"./index-DB8q6ij-.js";import"./lit-html-D-ZEPr28.js";import"./unsafe-html-HR6uCwaW.js";import"./control-C1r2wu67.js";function n(s){const t={code:"code",h1:"h1",h2:"h2",hr:"hr",p:"p",pre:"pre",...r(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:i,name:"Migration From 17.x"}),`
`,e.jsx(t.h1,{id:"text---migrate-from-v17-to-v18",children:"Text - migrate from v17 to v18"}),`
`,e.jsx(t.hr,{}),`
`,e.jsx(t.h2,{id:"attributes-changes",children:"Attributes changes"}),`
`,e.jsxs(t.p,{children:[e.jsx(t.code,{children:"size"})," ",e.jsx("img",{src:"https://img.shields.io/badge/removed-FF0000"})]}),`
`,e.jsxs(t.p,{children:[e.jsx(t.code,{children:"color"})," ",e.jsx("img",{src:"https://img.shields.io/badge/removed-FF0000"})]}),`
`,e.jsxs(t.p,{children:[e.jsx(t.code,{children:"level"})," ",e.jsx("img",{src:"https://img.shields.io/badge/removed-FF0000"})]}),`
`,e.jsxs(t.p,{children:[e.jsx(t.code,{children:"contrasted"})," ",e.jsx("img",{src:"https://img.shields.io/badge/removed-FF0000"})]}),`
`,e.jsxs(t.p,{children:[e.jsx(t.code,{children:"breakSpaces"})," ",e.jsx("img",{src:"https://img.shields.io/badge/removed-FF0000"})]}),`
`,e.jsx(t.p,{children:"Have been removed"}),`
`,e.jsxs(t.p,{children:["You can use the new ",e.jsx(t.code,{children:"preset"})," attribute to obtain the same rendering."]}),`
`,e.jsx(t.h2,{id:"migration-examples",children:"Migration examples"}),`
`,e.jsx(t.p,{children:"Size & Level text:"}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-html",children:`<osds-text size="500" level="heading">My text</osds-text>

<!-- is now -->

<ods-text preset="heading-1">My text</ods-text>
`})}),`
`,e.jsx(t.p,{children:"Color text:"}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-html",children:`<osds-text color="primary">My text</osds-text>

<!-- is now -->

<ods-text class="my-text">My text</ods-text>

<style>
  .my-text::part(text) {
    color: var(--ods-color-primary-500);
  }
</style>
`})}),`
`,e.jsx(t.p,{children:"breakSpaces text:"}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-html",children:`<osds-text break-spaces>My text</osds-text>

<!-- is now -->

<ods-text class="my-text">My text</ods-text>

<style>
  .my-text::part(text) {
    white-space: break-spaces;
  }
</style>
`})})]})}function M(s={}){const{wrapper:t}={...r(),...s.components};return t?e.jsx(t,{...s,children:e.jsx(n,{...s})}):n(s)}export{M as default};
