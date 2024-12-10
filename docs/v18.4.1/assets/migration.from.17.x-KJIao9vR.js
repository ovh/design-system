import{j as e,M as a,d as i}from"./index-Rx6QkXSv.js";import{u as t}from"./index-DPrOAYpY.js";import{O as l}from"./index-BJiUJsri.js";import{P as m}from"./progress-bar.stories-C1-RaAL_.js";import{H as s}from"./Heading-2XnXa8MH.js";import"./iframe-HwRW2g_s.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-D-8MO0q_.js";import"./index-DX_4BEHg.js";import"./index-DrFu-skq.js";import"./controls-DX883vx3.js";import"./index-Dqa08QUn.js";function n(r){const o={code:"code",p:"p",...t(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{of:m,name:"Migration From 17.x"}),`
`,e.jsx(s,{label:"ProgressBar - migrate from v17 to v18",level:1}),`
`,e.jsx(s,{label:"Slot changes",level:2}),`
`,e.jsxs(o.p,{children:[e.jsx(o.code,{children:"end"})," ",e.jsx(l,{color:"critical",label:"Removed",size:"sm"})]}),`
`,e.jsx(o.p,{children:"Has been removed."}),`
`,e.jsx(o.p,{children:"You can now add any text directly after the component instead of using the slot."}),`
`,e.jsx(s,{label:"Migration examples",level:2}),`
`,e.jsx(o.p,{children:"Slot end progress bar:"}),`
`,e.jsx(i,{code:`
<osds-progress-bar value="50">
  <span slot="end">50%</span>
</osds-progress-bar>

<!-- is now -->

<ods-progress-bar value="50"></ods-progress-bar><span>50%</span>
`,dark:"true",language:"html"})]})}function w(r={}){const{wrapper:o}={...t(),...r.components};return o?e.jsx(o,{...r,children:e.jsx(n,{...r})}):n(r)}export{w as default};
