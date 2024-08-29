import{j as e}from"./jsx-runtime-C_5uCoOk.js";import{u as i}from"./index-BNSrq6w-.js";import{M as o}from"./index-DnV51lgW.js";import{S as t}from"./spinner.stories-Cewr8G4u.js";import"./iframe-Cm7AUSBL.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-B_J8iUie.js";import"./index-DX_4BEHg.js";import"./index-DrFu-skq.js";import"./index-CEZbmgmh.js";import"./control-C1r2wu67.js";import"./lit-html-D-ZEPr28.js";function r(s){const n={code:"code",h1:"h1",h2:"h2",hr:"hr",p:"p",pre:"pre",strong:"strong",...i(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:t,name:"Migration From 17.x"}),`
`,e.jsx(n.h1,{id:"spinner---migrate-from-v17-to-v18",children:"Spinner - migrate from v17 to v18"}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"attributes-changes",children:"Attributes changes"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"color"})," ",e.jsx("img",{src:"https://img.shields.io/badge/new-008000"})]}),`
`,e.jsx(n.p,{children:"New attribute."}),`
`,e.jsx(n.p,{children:"Provides a list of colors using the currently applied theme."}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"contrasted"})," ",e.jsx("img",{src:"https://img.shields.io/badge/removed-FF0000"})]}),`
`,e.jsx(n.p,{children:"Has been removed."}),`
`,e.jsxs(n.p,{children:["You can use the new ",e.jsx(n.code,{children:"white"})," color to obtain the same rendering."]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"inline"})," ",e.jsx("img",{src:"https://img.shields.io/badge/removed-FF0000"})]}),`
`,e.jsx(n.p,{children:"Has been removed."}),`
`,e.jsxs(n.p,{children:["Spinner is now ",e.jsx(n.code,{children:"inline-block"}),` by default.
You can add some style directly on the component if you want to override that.`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"mode"})," ",e.jsx("img",{src:"https://img.shields.io/badge/removed-FF0000"})]}),`
`,e.jsx(n.p,{children:"Has been removed."}),`
`,e.jsx(n.p,{children:"There was only was mode value, it is now the default rendering."}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"size"})," ",e.jsx("img",{src:"https://img.shields.io/badge/updated-00FFFF"})]}),`
`,e.jsx(n.p,{children:"Has been updated."}),`
`,e.jsx(n.p,{children:"Provides a list of pre-made spinner sizer, here is the comparison of previous size and new ones:"}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"sm"})}),`
`,e.jsx(n.p,{children:"Changed from 20px to 24px."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"md"})}),`
`,e.jsx(n.p,{children:"Changed from 40px to 48px."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"lg"})}),`
`,e.jsx(n.p,{children:"Changed from 140px to 80px."}),`
`,e.jsx(n.h2,{id:"migration-examples",children:"Migration examples"}),`
`,e.jsx(n.p,{children:"Contrasted spinner:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<osds-spinner inline contrasted></osds-spinner>

<!-- is now -->

<ods-spinner color="white"></ods-spinner>
`})})]})}function v(s={}){const{wrapper:n}={...i(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(r,{...s})}):r(s)}export{v as default};
