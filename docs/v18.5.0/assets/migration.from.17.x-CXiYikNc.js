import{j as e,M as a,d as r}from"./index-aSJOi-xY.js";import{u as i}from"./index-D_oymSD0.js";import{O as o}from"./index-DduIf26o.js";import{T as c}from"./text.stories-B5V4TrFJ.js";import{H as n}from"./Heading-fUBW5LMg.js";import"./iframe-Cjn0x15a.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-D-8MO0q_.js";import"./index-DX_4BEHg.js";import"./index-DrFu-skq.js";import"./index-B1WyGMUD.js";import"./controls-DX883vx3.js";import"./unsafe-html-VJzuFJfF.js";function l(s){const t={code:"code",p:"p",...i(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{of:c,name:"Migration From 17.x"}),`
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
`,dark:"true",language:"html"})]})}function k(s={}){const{wrapper:t}={...i(),...s.components};return t?e.jsx(t,{...s,children:e.jsx(l,{...s})}):l(s)}export{k as default};
