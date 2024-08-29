import{j as e}from"./jsx-runtime-Dn0LW--f.js";import{u as i}from"./index-DeyDdHvX.js";import{M as d}from"./index-BM3JsZOq.js";import{T as r}from"./toggle.stories-BlYEGn1M.js";import"./iframe-6_jBXMSq.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-B_J8iUie.js";import"./index-DX_4BEHg.js";import"./index-DrFu-skq.js";import"./lit-html-D-ZEPr28.js";import"./control-C1r2wu67.js";function o(n){const s={code:"code",h1:"h1",h2:"h2",hr:"hr",p:"p",pre:"pre",...i(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(d,{of:r,name:"Migration From 17.x"}),`
`,e.jsx(s.h1,{id:"toggle---migrate-from-v17-to-v18",children:"Toggle - migrate from v17 to v18"}),`
`,e.jsx(s.hr,{}),`
`,e.jsx(s.h2,{id:"attributes-changes",children:"Attributes changes"}),`
`,e.jsxs(s.p,{children:[e.jsx(s.code,{children:"checked"})," ",e.jsx("ods-badge",{size:"sm",label:"Updated"})]}),`
`,e.jsx(s.p,{children:"Has been updated."}),`
`,e.jsxs(s.p,{children:["You can use the new ",e.jsx(s.code,{children:"value"})," attribute to obtain the same behavior."]}),`
`,e.jsxs(s.p,{children:[e.jsx(s.code,{children:"checking"})," ",e.jsx("ods-badge",{size:"sm",color:"critical",label:"Removed"})]}),`
`,e.jsx(s.p,{children:"Has been removed."}),`
`,e.jsx(s.p,{children:"This design feature has been removed in order to match the new styling of the component."}),`
`,e.jsxs(s.p,{children:[e.jsx(s.code,{children:"contrasted"})," ",e.jsx("ods-badge",{size:"sm",color:"critical",label:"Removed"})]}),`
`,e.jsx(s.p,{children:"Has been removed."}),`
`,e.jsx(s.p,{children:"This design feature has been removed in order to match the new styling of the component."}),`
`,e.jsxs(s.p,{children:[e.jsx(s.code,{children:"color"})," ",e.jsx("ods-badge",{size:"sm",color:"critical",label:"Removed"})]}),`
`,e.jsx(s.p,{children:"Has been removed."}),`
`,e.jsx(s.p,{children:"This design feature has been removed in order to match the new styling of the component."}),`
`,e.jsxs(s.p,{children:[e.jsx(s.code,{children:"disabled"})," ",e.jsx("ods-badge",{size:"sm",label:"Updated"})]}),`
`,e.jsx(s.p,{children:"Has been updated."}),`
`,e.jsxs(s.p,{children:["You can use the new ",e.jsx(s.code,{children:"isDisabled"})," attribute to obtain the same behavior."]}),`
`,e.jsxs(s.p,{children:[e.jsx(s.code,{children:"interactive"})," ",e.jsx("ods-badge",{size:"sm",color:"critical",label:"Removed"})]}),`
`,e.jsx(s.p,{children:"Has been removed."}),`
`,e.jsx(s.p,{children:"Toggle is now always interactive."}),`
`,e.jsxs(s.p,{children:[e.jsx(s.code,{children:"isRequired"})," ",e.jsx("ods-badge",{size:"sm",color:"success",label:"New"})]}),`
`,e.jsx(s.p,{children:"New attribute (optional)."}),`
`,e.jsx(s.p,{children:"Defines if the toggle is required in a form."}),`
`,e.jsxs(s.p,{children:[e.jsx(s.code,{children:"name"})," ",e.jsx("ods-badge",{size:"sm",color:"success",label:"New"})]}),`
`,e.jsx(s.p,{children:"New attribute."}),`
`,e.jsx(s.p,{children:"You can use the new 'name' attribute to identify your OdsToggle within a form."}),`
`,e.jsxs(s.p,{children:[e.jsx(s.code,{children:"withLabel"})," ",e.jsx("ods-badge",{size:"sm",color:"success",label:"New"})]}),`
`,e.jsx(s.p,{children:"New attribute (optional)."}),`
`,e.jsxs(s.p,{children:["Will add the visual labels ",e.jsx(s.code,{children:"ON/OFF"}),"."]}),`
`,e.jsx(s.h2,{id:"migration-examples",children:"Migration examples"}),`
`,e.jsx(s.p,{children:"Checked toggle:"}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-html",children:`<osds-toggle checked>
</osds-toggle>

<!-- is now -->

<ods-toggle value="true">
</ods-toggle>
`})}),`
`,e.jsx(s.p,{children:"Disabled toggle:"}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-html",children:`<osds-toggle disabled>
</osds-toggle>

<!-- is now -->

<ods-toggle is-disabled>
</ods-toggle>
`})})]})}function v(n={}){const{wrapper:s}={...i(),...n.components};return s?e.jsx(s,{...n,children:e.jsx(o,{...n})}):o(n)}export{v as default};
