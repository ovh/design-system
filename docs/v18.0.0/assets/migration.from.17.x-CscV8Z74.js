import{j as e}from"./jsx-runtime-Dn0LW--f.js";import{u as d}from"./index-DeyDdHvX.js";import{M as i}from"./index-BM3JsZOq.js";import{A as r}from"./accordion.stories-bys56GEa.js";import"./iframe-6_jBXMSq.js";import"../sb-preview/runtime.js";import"./commonjsHelpers-Cpj98o6Y.js";import"./index-B_J8iUie.js";import"./index-DX_4BEHg.js";import"./index-DrFu-skq.js";import"./lit-html-D-ZEPr28.js";import"./unsafe-html-HR6uCwaW.js";import"./control-C1r2wu67.js";function s(o){const n={code:"code",h1:"h1",h2:"h2",hr:"hr",p:"p",pre:"pre",...d(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{of:r,name:"Migration From 17.x"}),`
`,e.jsx(n.h1,{id:"accordion---migrate-from-v17-to-v18",children:"Accordion - migrate from v17 to v18"}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"attributes-changes",children:"Attributes changes"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"color"})," ",e.jsx("ods-badge",{size:"sm",color:"critical",label:"Removed"})]}),`
`,e.jsx(n.p,{children:"Has been removed."}),`
`,e.jsx(n.p,{children:"This design feature has been removed in order to match the new styling of the component."}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"contrasted"})," ",e.jsx("ods-badge",{size:"sm",color:"critical",label:"Removed"})]}),`
`,e.jsx(n.p,{children:"Has been removed."}),`
`,e.jsx(n.p,{children:"This design feature has been removed in order to match the new styling of the component."}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"disabled "})," ",e.jsx("ods-badge",{size:"sm",label:"Updated"})]}),`
`,e.jsx(n.p,{children:"Has been updated."}),`
`,e.jsxs(n.p,{children:["You can use the new ",e.jsx(n.code,{children:"isDisabled"})," attribute to obtain the same behavior."]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"opened "})," ",e.jsx("ods-badge",{size:"sm",label:"Updated"})]}),`
`,e.jsx(n.p,{children:"Has been updated."}),`
`,e.jsxs(n.p,{children:["You can use the new ",e.jsx(n.code,{children:"isOpen"})," attribute to obtain the same behavior."]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"size "})," ",e.jsx("ods-badge",{size:"sm",color:"critical",label:"Removed"})]}),`
`,e.jsx(n.p,{children:"Has been removed."}),`
`,e.jsx(n.p,{children:"This design feature has been removed in order to match the new styling of the component."}),`
`,e.jsx(n.h2,{id:"migration-examples",children:"Migration examples"}),`
`,e.jsx(n.p,{children:"Without Color:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<osds-accordion color='information'></osds-accordion>

<!-- is now -->

<ods-accordion></ods-accordion>
`})}),`
`,e.jsx(n.p,{children:"Without Contrasted:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<osds-accordion contrasted></osds-accordion>

<!-- is now -->

<ods-accordion></ods-accordion>
`})}),`
`,e.jsx(n.p,{children:"Disabled:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<osds-accordion disabled></osds-accordion>

<!-- is now -->

<ods-accordion is-disabled></ods-accordion>
`})}),`
`,e.jsx(n.p,{children:"Opened:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<osds-accordion opened></osds-accordion>

<!-- is now -->

<ods-accordion is-open></ods-accordion>
`})}),`
`,e.jsx(n.p,{children:"Without Size:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<osds-accordion size='md'></osds-accordion>

<!-- is now -->

<ods-accordion></ods-accordion>
`})})]})}function v(o={}){const{wrapper:n}={...d(),...o.components};return n?e.jsx(n,{...o,children:e.jsx(s,{...o})}):s(o)}export{v as default};
