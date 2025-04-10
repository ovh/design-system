import{j as e}from"./jsx-runtime-BSm7YJ_y.js";import{useMDXComponents as c}from"./index-CUkz9CBV.js";import{o}from"./ods-react-CYmC8DRO.js";import{M as l,S as r}from"./index-Ad1vjMe7.js";import{T as x}from"./text.stories-Doqr8Q_W.js";import{H as n}from"./Heading-RrL0wZ2g.js";import"./index-E9JSHJbc.js";import"./iframe-ZxD9YLZr.js";import"./index-DOJIDNlS.js";import"./index-DZAg5o-f.js";import"./index-CXQShRbs.js";import"./index-DrFu-skq.js";import"./OdsText-CkwfP8Kl.js";import"./controls-CQ2mnOwv.js";function i(s){const t={code:"code",p:"p",...c(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{of:x,name:"Migration From 17.x"}),`
`,e.jsx(n,{label:"Text - migrate from v17 to v18",level:1}),`
`,e.jsx(n,{label:"Attributes changes",level:2}),`
`,e.jsxs(t.p,{children:[e.jsx(t.code,{children:"breakSpaces"})," ",e.jsx(o,{color:"critical",size:"sm",children:"Removed"})]}),`
`,e.jsxs(t.p,{children:[e.jsx(t.code,{children:"color"})," ",e.jsx(o,{color:"critical",size:"sm",children:"Removed"})]}),`
`,e.jsxs(t.p,{children:[e.jsx(t.code,{children:"contrasted"})," ",e.jsx(o,{color:"critical",size:"sm",children:"Removed"})]}),`
`,e.jsxs(t.p,{children:[e.jsx(t.code,{children:"level"})," ",e.jsx(o,{color:"critical",size:"sm",children:"Removed"})]}),`
`,e.jsxs(t.p,{children:[e.jsx(t.code,{children:"size"})," ",e.jsx(o,{color:"critical",size:"sm",children:"Removed"})]}),`
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
`,dark:"true",language:"html"})]})}function k(s={}){const{wrapper:t}={...c(),...s.components};return t?e.jsx(t,{...s,children:e.jsx(i,{...s})}):i(s)}export{k as default};
