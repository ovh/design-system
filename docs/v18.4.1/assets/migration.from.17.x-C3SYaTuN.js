import{j as e,M as d,d as o}from"./index-Rx6QkXSv.js";import{u as a}from"./index-DPrOAYpY.js";import{O as r}from"./index-BJiUJsri.js";import{H as i}from"./Heading-2XnXa8MH.js";import"./iframe-HwRW2g_s.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-D-8MO0q_.js";import"./index-DX_4BEHg.js";import"./index-DrFu-skq.js";import"./index-Dqa08QUn.js";function s(t){const n={code:"code",p:"p",...a(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(d,{title:"ODS Components/Content Addon"}),`
`,e.jsx(i,{label:"Content Addon - migrate from v17 to v18",level:1}),`
`,e.jsxs(n.p,{children:["Content Addon has been removed from ODS components. ",e.jsx(r,{color:"critical",label:"Removed",size:"sm"})]}),`
`,e.jsx(n.p,{children:"The same behaviour can be achieved with simple CSS."}),`
`,e.jsx(n.p,{children:"Let's take an example of the content-addon usage:"}),`
`,e.jsx(o,{code:`
<osds-content-addon>
  <span slot="top">top</span>
  <span slot="start">start</span>
  <span slot="main">main</span>
  <span slot="end">end</span>
  <span slot="bottom">bottom</span>
</osds-content-addon>
`,dark:"true",language:"html"}),`
`,e.jsxs(n.p,{children:["If we observe closely, we can see that both ",e.jsx(n.code,{children:"top"})," and ",e.jsx(n.code,{children:"bottom"}),` element doesn't even need any specific style
as they follow the natural rendering workflow (vertical from top to bottom).`]}),`
`,e.jsxs(n.p,{children:["Let's focus then on the middle part, you can for example use ",e.jsx(n.code,{children:"grid"})," to reproduce the same three columns layout:"]}),`
`,e.jsx(o,{code:`
<style>
  .grid {
    display: grid;
    grid-template-columns: auto auto auto;
  }
</style>

<div>top</div>
<div class='grid'>
  <span>start</span>
  <span>main</span>
  <span>end</span>
</div>
<div>bottom</div>
`,dark:"true",language:"html"}),`
`,e.jsxs(n.p,{children:["Or you can also use ",e.jsx(n.code,{children:"flex-flow"})," if you have a dynamic amount of columns:"]}),`
`,e.jsx(o,{code:`
<style>
  .flex {
    display: flex;
    flex-flow: row;
  }
</style>

<div>top</div>
<div class="grid">
  <span>start</span>
  <span>main 1</span>
  <span>main 2</span>
  <span>end</span>
</div>
<div>bottom</div>
`,dark:"true",language:"html"})]})}function y(t={}){const{wrapper:n}={...a(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(s,{...t})}):s(t)}export{y as default};
