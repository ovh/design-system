import{j as e}from"./jsx-runtime-VM66peLj.js";import{useMDXComponents as c}from"./index-DQB45XCM.js";import{h as o}from"./Badge-EGenXdCK-DDYseYDy.js";import{M as l,S as r}from"./index-BlaLg9GY.js";import{T as x}from"./text.stories-BeF7bErI.js";import{H as n}from"./Heading-6Mfikk-c.js";import"./index-D_CmzhJ4.js";import"./index-2w0W-O47-BJ19ihbZ.js";import"./iframe-CGgj-FAD.js";import"./index-ChzAxGiP.js";import"./index-CucsY3YN.js";import"./index-CXQShRbs.js";import"./index-DrFu-skq.js";import"./Text-eeWNb4Wa.js";import"./index-CkQHsVsO.js";import"./controls-BtiQQn1l.js";function i(s){const t={code:"code",p:"p",...c(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{of:x,name:"Migration From 17.x"}),`
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
`,dark:"true",language:"html"})]})}function R(s={}){const{wrapper:t}={...c(),...s.components};return t?e.jsx(t,{...s,children:e.jsx(i,{...s})}):i(s)}export{R as default};
