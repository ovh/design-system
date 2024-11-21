import{j as e}from"./jsx-runtime-BtDUu9js.js";import{u as c}from"./index-DZL6x4lo.js";import{O as s}from"./index-DtXgNHxz.js";import{M as t,d}from"./index-CYldocI7.js";import{A as a}from"./accordion.stories-CO7ppZmv.js";import{H as r}from"./Heading-DwuTnCox.js";import"./iframe-D7GxXTWn.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-B_J8iUie.js";import"./index-DX_4BEHg.js";import"./index-DrFu-skq.js";import"./lit-html-D-ZEPr28.js";import"./unsafe-html-HR6uCwaW.js";import"./controls-DpsgTNdU.js";import"./index-BvAGq-5Z.js";function i(n){const o={code:"code",p:"p",...c(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(t,{of:a,name:"Migration From 17.x"}),`
`,e.jsx(r,{label:"Accordion - migrate from v17 to v18",level:1}),`
`,e.jsx(r,{label:"Attributes changes",level:2}),`
`,e.jsxs(o.p,{children:[e.jsx(o.code,{children:"color"})," ",e.jsx(s,{color:"critical",label:"Removed",size:"sm"})]}),`
`,e.jsx(o.p,{children:"Has been removed."}),`
`,e.jsx(o.p,{children:"This design feature has been removed in order to match the new styling of the component."}),`
`,e.jsxs(o.p,{children:[e.jsx(o.code,{children:"contrasted"})," ",e.jsx(s,{color:"critical",label:"Removed",size:"sm"})]}),`
`,e.jsx(o.p,{children:"Has been removed."}),`
`,e.jsx(o.p,{children:"This design feature has been removed in order to match the new styling of the component."}),`
`,e.jsxs(o.p,{children:[e.jsx(o.code,{children:"disabled "})," ",e.jsx(s,{color:"information",label:"Updated",size:"sm"})]}),`
`,e.jsx(o.p,{children:"Has been updated."}),`
`,e.jsxs(o.p,{children:["You can use the new ",e.jsx(o.code,{children:"isDisabled"})," attribute to obtain the same behavior."]}),`
`,e.jsxs(o.p,{children:[e.jsx(o.code,{children:"opened "})," ",e.jsx(s,{color:"information",label:"Updated",size:"sm"})]}),`
`,e.jsx(o.p,{children:"Has been updated."}),`
`,e.jsxs(o.p,{children:["You can use the new ",e.jsx(o.code,{children:"isOpen"})," attribute to obtain the same behavior."]}),`
`,e.jsxs(o.p,{children:[e.jsx(o.code,{children:"size "})," ",e.jsx(s,{color:"critical",label:"Removed",size:"sm"})]}),`
`,e.jsx(o.p,{children:"Has been removed."}),`
`,e.jsx(o.p,{children:"This design feature has been removed in order to match the new styling of the component."}),`
`,e.jsx(r,{label:"Migration examples",level:2}),`
`,e.jsx(o.p,{children:"Without Color:"}),`
`,e.jsx(d,{code:`
<osds-accordion color='information'></osds-accordion>

<!-- is now -->

<ods-accordion></ods-accordion>
`,dark:"true",language:"html"}),`
`,e.jsx(o.p,{children:"Without Contrasted:"}),`
`,e.jsx(d,{code:`
<osds-accordion contrasted></osds-accordion>

<!-- is now -->

<ods-accordion></ods-accordion>
`,dark:"true",language:"html"}),`
`,e.jsx(o.p,{children:"Disabled:"}),`
`,e.jsx(d,{code:`
<osds-accordion disabled></osds-accordion>

<!-- is now -->

<ods-accordion is-disabled></ods-accordion>
`,dark:"true",language:"html"}),`
`,e.jsx(o.p,{children:"Opened:"}),`
`,e.jsx(d,{code:`
<osds-accordion opened></osds-accordion>

<!-- is now -->

<ods-accordion is-open></ods-accordion>
`,dark:"true",language:"html"}),`
`,e.jsx(o.p,{children:"Without Size:"}),`
`,e.jsx(d,{code:`
<osds-accordion size='md'></osds-accordion>

<!-- is now -->

<ods-accordion></ods-accordion>
`,dark:"true",language:"html"})]})}function C(n={}){const{wrapper:o}={...c(),...n.components};return o?e.jsx(o,{...n,children:e.jsx(i,{...n})}):i(n)}export{C as default};
