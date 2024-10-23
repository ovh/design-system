import{j as e}from"./jsx-runtime-CtvdRJNw.js";import{u as l}from"./index-BB9dT2Es.js";import{O as n}from"./index-96Y3MfGk.js";import{M as d,d as r}from"./index-B52cN8Ji.js";import{T as c}from"./toggle.stories-BpWi8YZA.js";import{H as i}from"./Heading-DkXmkwCf.js";import"./iframe-DOFBAWyz.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-B_J8iUie.js";import"./index-DX_4BEHg.js";import"./index-DrFu-skq.js";import"./lit-html-D-ZEPr28.js";import"./controls-DpsgTNdU.js";import"./index-CnlqR0TT.js";function t(o){const s={code:"code",p:"p",...l(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(d,{of:c,name:"Migration From 17.x"}),`
`,e.jsx(i,{label:"Toggle - migrate from v17 to v18",level:1}),`
`,e.jsx(i,{label:"Attributes changes",level:2}),`
`,e.jsxs(s.p,{children:[e.jsx(s.code,{children:"checked"})," ",e.jsx(n,{color:"information",label:"Updated",size:"sm"})]}),`
`,e.jsx(s.p,{children:"Has been updated."}),`
`,e.jsxs(s.p,{children:["You can use the new ",e.jsx(s.code,{children:"value"})," attribute to obtain the same behavior."]}),`
`,e.jsxs(s.p,{children:[e.jsx(s.code,{children:"checking"})," ",e.jsx(n,{color:"critical",label:"Removed",size:"sm"})]}),`
`,e.jsx(s.p,{children:"Has been removed."}),`
`,e.jsx(s.p,{children:"This design feature has been removed in order to match the new styling of the component."}),`
`,e.jsxs(s.p,{children:[e.jsx(s.code,{children:"contrasted"})," ",e.jsx(n,{color:"critical",label:"Removed",size:"sm"})]}),`
`,e.jsx(s.p,{children:"Has been removed."}),`
`,e.jsx(s.p,{children:"This design feature has been removed in order to match the new styling of the component."}),`
`,e.jsxs(s.p,{children:[e.jsx(s.code,{children:"color"})," ",e.jsx(n,{color:"critical",label:"Removed",size:"sm"})]}),`
`,e.jsx(s.p,{children:"Has been removed."}),`
`,e.jsx(s.p,{children:"This design feature has been removed in order to match the new styling of the component."}),`
`,e.jsxs(s.p,{children:[e.jsx(s.code,{children:"disabled"})," ",e.jsx(n,{color:"information",label:"Updated",size:"sm"})]}),`
`,e.jsx(s.p,{children:"Has been updated."}),`
`,e.jsxs(s.p,{children:["You can use the new ",e.jsx(s.code,{children:"isDisabled"})," attribute to obtain the same behavior."]}),`
`,e.jsxs(s.p,{children:[e.jsx(s.code,{children:"interactive"})," ",e.jsx(n,{color:"critical",label:"Removed",size:"sm"})]}),`
`,e.jsx(s.p,{children:"Has been removed."}),`
`,e.jsx(s.p,{children:"Toggle is now always interactive."}),`
`,e.jsxs(s.p,{children:[e.jsx(s.code,{children:"isRequired"})," ",e.jsx(n,{color:"success",label:"New",size:"sm"})]}),`
`,e.jsx(s.p,{children:"New attribute (optional)."}),`
`,e.jsx(s.p,{children:"Defines if the toggle is required in a form."}),`
`,e.jsxs(s.p,{children:[e.jsx(s.code,{children:"name"})," ",e.jsx(n,{color:"success",label:"New",size:"sm"})]}),`
`,e.jsx(s.p,{children:"New attribute."}),`
`,e.jsx(s.p,{children:"You can use the new 'name' attribute to identify your OdsToggle within a form."}),`
`,e.jsxs(s.p,{children:[e.jsx(s.code,{children:"withLabel"})," ",e.jsx(n,{color:"success",label:"New",size:"sm"})]}),`
`,e.jsx(s.p,{children:"New attribute (optional)."}),`
`,e.jsxs(s.p,{children:["Will add the visual labels ",e.jsx(s.code,{children:"ON/OFF"}),"."]}),`
`,e.jsx(i,{label:"Migration examples",level:2}),`
`,e.jsx(s.p,{children:"Checked toggle:"}),`
`,e.jsx(r,{code:`
<osds-toggle checked>
</osds-toggle>

<!-- is now -->

<ods-toggle value="true">
</ods-toggle>
`,dark:"true",language:"html"}),`
`,e.jsx(s.p,{children:"Disabled toggle:"}),`
`,e.jsx(r,{code:`
<osds-toggle disabled>
</osds-toggle>

<!-- is now -->

<ods-toggle is-disabled>
</ods-toggle>
`,dark:"true",language:"html"})]})}function T(o={}){const{wrapper:s}={...l(),...o.components};return s?e.jsx(s,{...o,children:e.jsx(t,{...o})}):t(o)}export{T as default};
