import{j as e}from"./jsx-runtime-C_5uCoOk.js";import{u as r}from"./index-BNSrq6w-.js";import{M as d}from"./index-DnV51lgW.js";import{D as o}from"./divider.stories-DPAwKtJ2.js";import"./iframe-Cm7AUSBL.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-B_J8iUie.js";import"./index-DX_4BEHg.js";import"./index-DrFu-skq.js";import"./index-CEZbmgmh.js";import"./control-C1r2wu67.js";import"./lit-html-D-ZEPr28.js";function i(n){const s={code:"code",h1:"h1",h2:"h2",hr:"hr",p:"p",pre:"pre",...r(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(d,{of:o,name:"Migration From 17.x"}),`
`,e.jsx(s.h1,{id:"divider---migrate-from-v17-to-v18",children:"Divider - migrate from v17 to v18"}),`
`,e.jsx(s.hr,{}),`
`,e.jsx(s.h2,{id:"usage-changes",children:"Usage changes"}),`
`,e.jsx(s.p,{children:"The divider is a visual separator and shouldn't be used as a vertical separating measure."}),`
`,e.jsx(s.h2,{id:"attributes-changes",children:"Attributes changes"}),`
`,e.jsxs(s.p,{children:[e.jsx(s.code,{children:"color"}),"  ",e.jsx("img",{src:"https://img.shields.io/badge/updated-00FFFF"})]}),`
`,e.jsx(s.p,{children:"Has been updated."}),`
`,e.jsxs(s.p,{children:["The 2 possible values are now ",e.jsx(s.code,{children:"light"})," and ",e.jsx(s.code,{children:"dark"}),"."]}),`
`,e.jsxs(s.p,{children:[e.jsx(s.code,{children:"contrasted"})," ",e.jsx("img",{src:"https://img.shields.io/badge/removed-FF0000"})]}),`
`,e.jsx(s.p,{children:"Has been removed."}),`
`,e.jsxs(s.p,{children:["Color attribute can be use with ",e.jsx(s.code,{children:"dark"})," for contrasted content."]}),`
`,e.jsxs(s.p,{children:[e.jsx(s.code,{children:"separator "})," ",e.jsx("img",{src:"https://img.shields.io/badge/removed-FF0000"})]}),`
`,e.jsx(s.p,{children:"Has been removed."}),`
`,e.jsx(s.p,{children:"Divider is always shown by default."}),`
`,e.jsxs(s.p,{children:[e.jsx(s.code,{children:"size "})," ",e.jsx("img",{src:"https://img.shields.io/badge/removed-FF0000"})]}),`
`,e.jsx(s.p,{children:"Has been removed."}),`
`,e.jsxs(s.p,{children:[e.jsx(s.code,{children:"spacing "})," ",e.jsx("img",{src:"https://img.shields.io/badge/new-008000"})]}),`
`,e.jsx(s.p,{children:"It allows to control the height in pixel of the divider."}),`
`,e.jsx(s.h2,{id:"migration-examples",children:"Migration examples"}),`
`,e.jsx(s.p,{children:"Color:"}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-html",children:`<osds-divider color="primary"></osds-divider>

<!-- is now -->

<osds-divider class="custom"></osds-divider>

<style>
  .custom {
    background-color: var(--ods-color-primary-100);
  }
</style>
`})}),`
`,e.jsx(s.p,{children:"Contrasted:"}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-html",children:`<osds-divider contrasted></osds-divider>

<!-- is now -->

<osds-divider color="dark"></osds-divider>
`})}),`
`,e.jsx(s.p,{children:"Separator:"}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-html",children:`<osds-divider separator="false"></osds-divider>

<!-- is now -->

<osds-divider class="custom"></osds-divider>

<style>
  .custom {
    background-color: transparent;
  }
</style>
`})}),`
`,e.jsx(s.p,{children:"Size:"}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-html",children:`<osds-divider size="1"></osds-divider>

<!-- is now -->

<osds-divider spacing="2"></osds-divider>
`})})]})}function f(n={}){const{wrapper:s}={...r(),...n.components};return s?e.jsx(s,{...n,children:e.jsx(i,{...n})}):i(n)}export{f as default};
