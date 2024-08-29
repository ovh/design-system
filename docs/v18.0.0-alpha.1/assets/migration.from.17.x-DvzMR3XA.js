import{j as e}from"./jsx-runtime-C_5uCoOk.js";import{u as d}from"./index-BNSrq6w-.js";import{M as i}from"./index-DnV51lgW.js";import{M as r}from"./modal.stories-D-PKhlhB.js";import"./iframe-Cm7AUSBL.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-B_J8iUie.js";import"./index-DX_4BEHg.js";import"./index-DrFu-skq.js";import"./index-CEZbmgmh.js";import"./lit-html-D-ZEPr28.js";import"./unsafe-html-HR6uCwaW.js";import"./control-C1r2wu67.js";function o(n){const s={code:"code",h1:"h1",h2:"h2",hr:"hr",p:"p",pre:"pre",...d(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{of:r,name:"Migration From 17.x"}),`
`,e.jsx(s.h1,{id:"modal---migrate-from-v17-to-v18",children:"Modal - migrate from v17 to v18"}),`
`,e.jsx(s.hr,{}),`
`,e.jsx(s.h2,{id:"attributes-changes",children:"Attributes changes"}),`
`,e.jsxs(s.p,{children:[e.jsx(s.code,{children:"color"})," ",e.jsx("img",{src:"https://img.shields.io/badge/updated-00FFFF"})]}),`
`,e.jsx(s.p,{children:"Has been updated."}),`
`,e.jsxs(s.p,{children:["Modal's color options have been restricted to the options in ",e.jsx(s.code,{children:"ODS_MODAL_COLORS"}),"."]}),`
`,e.jsxs(s.p,{children:[e.jsx(s.code,{children:"dismissible"})," ",e.jsx("img",{src:"https://img.shields.io/badge/updated-00FFFF"})]}),`
`,e.jsx(s.p,{children:"Has been updated."}),`
`,e.jsxs(s.p,{children:["You can use the new ",e.jsx(s.code,{children:"isDismissible"})," attribute to obtain the same behavior."]}),`
`,e.jsxs(s.p,{children:[e.jsx(s.code,{children:"headline"})," ",e.jsx("img",{src:"https://img.shields.io/badge/removed-FF0000"})]}),`
`,e.jsx(s.p,{children:"Has been removed."}),`
`,e.jsx(s.p,{children:`Modal does not provide a headline attribute anymore.
You can use the content slot to recreate the desired headline.`}),`
`,e.jsxs(s.p,{children:[e.jsx(s.code,{children:"masked"})," ",e.jsx("img",{src:"https://img.shields.io/badge/updated-00FFFF"})]}),`
`,e.jsx(s.p,{children:"Has been updated."}),`
`,e.jsxs(s.p,{children:["You can use the new ",e.jsx(s.code,{children:"isOpen"})," attribute to obtain the same behavior."]}),`
`,e.jsx(s.h2,{id:"migration-examples",children:"Migration examples"}),`
`,e.jsx(s.p,{children:"Color modal:"}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-html",children:`<osds-modal color={ODS_THEME_COLOR_INTENT.information}></osds-modal>

<!-- is now -->

<ods-modal color={ODS_MODAL_COLOR.information}></ods-modal>
`})}),`
`,e.jsx(s.p,{children:"Dismissible modal:"}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-html",children:`<osds-modal dismissible="true"></osds-modal>

<!-- is now -->

<ods-modal is-dismissible="true"></ods-modal>
`})}),`
`,e.jsx(s.p,{children:"Headline modal:"}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-html",children:`<osds-modal headline="Hello, world!"></osds-modal>

<!-- is now -->

<ods-modal>
    <ods-text preset="heading-3">Hello, world!</ods-text>
</ods-modal>
`})}),`
`,e.jsx(s.p,{children:"Masked modal:"}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-html",children:`<osds-modal masked="true"></osds-modal>

<!-- is now -->

<ods-modal is-open="false"></ods-modal>
`})})]})}function f(n={}){const{wrapper:s}={...d(),...n.components};return s?e.jsx(s,{...n,children:e.jsx(o,{...n})}):o(n)}export{f as default};
