import{j as e}from"./jsx-runtime-sbaUvk5M.js";import{u as l}from"./index-CGWm3lku.js";import{O as o}from"./index-D7X5WOeG.js";import{M as a,d as r}from"./index-D-G4MXwZ.js";import{T as c}from"./text.stories-BJcOXUKw.js";import{H as n}from"./Heading-1Y93vQ6R.js";import"./iframe-BBvDorMF.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-B_J8iUie.js";import"./index-DX_4BEHg.js";import"./index-DrFu-skq.js";import"./index-CveiHl7W.js";import"./lit-html-D-ZEPr28.js";import"./unsafe-html-HR6uCwaW.js";import"./controls-D697y8_r.js";function i(s){const t={code:"code",p:"p",...l(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{of:c,name:"Migration From 17.x"}),`
`,e.jsx(n,{label:"Text - migrate from v17 to v18",level:1}),`
`,e.jsx(n,{label:"Attributes changes",level:2}),`
`,e.jsxs(t.p,{children:[e.jsx(t.code,{children:"breakSpaces"})," ",e.jsx(o,{color:"critical",label:"Removed",size:"sm"})]}),`
`,e.jsxs(t.p,{children:[e.jsx(t.code,{children:"color"})," ",e.jsx(o,{color:"critical",label:"Removed",size:"sm"})]}),`
`,e.jsxs(t.p,{children:[e.jsx(t.code,{children:"contrasted"})," ",e.jsx(o,{color:"critical",label:"Removed",size:"sm"})]}),`
`,e.jsxs(t.p,{children:[e.jsx(t.code,{children:"level"})," ",e.jsx(o,{color:"critical",label:"Removed",size:"sm"})]}),`
`,e.jsxs(t.p,{children:[e.jsx(t.code,{children:"size"})," ",e.jsx(o,{color:"critical",label:"Removed",size:"sm"})]}),`
`,e.jsx(t.p,{children:"Have been removed"}),`
`,e.jsxs(t.p,{children:["You can use the new ",e.jsx(t.code,{children:"preset"})," attribute to obtain the same rendering."]}),`
`,e.jsx(n,{label:"Migration examples",level:2}),`
`,e.jsx(t.p,{children:"Size & Level text:"}),`
`,e.jsx(r,{code:`
<osds-text size="500" level="heading">My text</osds-text>

<!-- is now -->

<ods-text preset="heading-1">My text</ods-text>
`,dark:"true",language:"html"}),`
`,e.jsx(t.p,{children:"Color text:"}),`
`,e.jsx(r,{code:`
<osds-text color="primary">My text</osds-text>

<!-- is now -->

<ods-text class="my-text">My text</ods-text>

<style>
  .my-text::part(text) {
    color: var(--ods-color-primary-500);
  }
</style>
`,dark:"true",language:"html"}),`
`,e.jsx(t.p,{children:"breakSpaces text:"}),`
`,e.jsx(r,{code:`
<osds-text break-spaces>My text</osds-text>

<!-- is now -->

<ods-text class="my-text">My text</ods-text>

<style>
  .my-text::part(text) {
    white-space: break-spaces;
  }
</style>
`,dark:"true",language:"html"})]})}function R(s={}){const{wrapper:t}={...l(),...s.components};return t?e.jsx(t,{...s,children:e.jsx(i,{...s})}):i(s)}export{R as default};
