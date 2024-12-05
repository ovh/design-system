import{j as e}from"./jsx-runtime-sbaUvk5M.js";import{u as t}from"./index-CGWm3lku.js";import{O as a}from"./index-D7X5WOeG.js";import{M as i,d as m}from"./index-D-G4MXwZ.js";import{P as l}from"./progress-bar.stories-D0i5NJQh.js";import{H as s}from"./Heading-1Y93vQ6R.js";import"./iframe-BBvDorMF.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-B_J8iUie.js";import"./index-DX_4BEHg.js";import"./index-DrFu-skq.js";import"./lit-html-D-ZEPr28.js";import"./controls-D697y8_r.js";import"./index-CveiHl7W.js";function n(r){const o={code:"code",p:"p",...t(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{of:l,name:"Migration From 17.x"}),`
`,e.jsx(s,{label:"ProgressBar - migrate from v17 to v18",level:1}),`
`,e.jsx(s,{label:"Slot changes",level:2}),`
`,e.jsxs(o.p,{children:[e.jsx(o.code,{children:"end"})," ",e.jsx(a,{color:"critical",label:"Removed",size:"sm"})]}),`
`,e.jsx(o.p,{children:"Has been removed."}),`
`,e.jsx(o.p,{children:"You can now add any text directly after the component instead of using the slot."}),`
`,e.jsx(s,{label:"Migration examples",level:2}),`
`,e.jsx(o.p,{children:"Slot end progress bar:"}),`
`,e.jsx(m,{code:`
<osds-progress-bar value="50">
  <span slot="end">50%</span>
</osds-progress-bar>

<!-- is now -->

<ods-progress-bar value="50"></ods-progress-bar><span>50%</span>
`,dark:"true",language:"html"})]})}function B(r={}){const{wrapper:o}={...t(),...r.components};return o?e.jsx(o,{...r,children:e.jsx(n,{...r})}):n(r)}export{B as default};
