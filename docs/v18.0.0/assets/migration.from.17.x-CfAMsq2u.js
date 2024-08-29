import{j as n}from"./jsx-runtime-Dn0LW--f.js";import{u as s}from"./index-DeyDdHvX.js";import{M as a}from"./index-BM3JsZOq.js";import"./iframe-6_jBXMSq.js";import"../sb-preview/runtime.js";import"./commonjsHelpers-Cpj98o6Y.js";import"./index-B_J8iUie.js";import"./index-DX_4BEHg.js";import"./index-DrFu-skq.js";function t(o){const e={code:"code",h1:"h1",hr:"hr",p:"p",pre:"pre",...s(),...o.components};return n.jsxs(n.Fragment,{children:[n.jsx(a,{title:"ODS Components/Content Addon"}),`
`,n.jsx(e.h1,{id:"content-addon---migrate-from-v17-to-v18",children:"Content Addon - migrate from v17 to v18"}),`
`,n.jsx(e.hr,{}),`
`,n.jsxs(e.p,{children:["Content Addon has been removed from ODS components. ",n.jsx("ods-badge",{size:"sm",color:"critical",label:"Removed"})]}),`
`,n.jsx(e.p,{children:"The same behaviour can be achieved with simple CSS."}),`
`,n.jsx(e.p,{children:"Let's take an example of the content-addon usage:"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-html",children:`<osds-content-addon>
  <span slot="top">top</span>
  <span slot="start">start</span>
  <span slot="main">main</span>
  <span slot="end">end</span>
  <span slot="bottom">bottom</span>
</osds-content-addon>
`})}),`
`,n.jsxs(e.p,{children:["If we observe closely, we can see that both ",n.jsx(e.code,{children:"top"})," and ",n.jsx(e.code,{children:"bottom"}),` element doesn't even need any specific style
as they follow the natural rendering workflow (vertical from top to bottom).`]}),`
`,n.jsxs(e.p,{children:["Let's focus then on the middle part, you can for example use ",n.jsx(e.code,{children:"grid"})," to reproduce the same three columns layout:"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-html",children:`<style>
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
`})}),`
`,n.jsxs(e.p,{children:["Or you can also use ",n.jsx(e.code,{children:"flex-flow"})," if you have a dynamic amount of columns:"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-html",children:`<style>
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
`})})]})}function u(o={}){const{wrapper:e}={...s(),...o.components};return e?n.jsx(e,{...o,children:n.jsx(t,{...o})}):t(o)}export{u as default};
