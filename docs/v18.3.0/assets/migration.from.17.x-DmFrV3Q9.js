import{j as e}from"./jsx-runtime-Dpy41095.js";import{u as r}from"./index-aTvbjZDn.js";import{O as s}from"./index-CitIr79c.js";import{M as d,d as t}from"./index-KEvLdXFh.js";import{S as a}from"./skeleton.stories-BTvzjViG.js";import{H as l}from"./Heading-Ct5NuNs_.js";import"./iframe-Br9eoVXS.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-B_J8iUie.js";import"./index-DX_4BEHg.js";import"./index-DrFu-skq.js";import"./lit-html-D-ZEPr28.js";import"./controls-DpsgTNdU.js";import"./index-LQAjXuKp.js";function i(o){const n={code:"code",p:"p",...r(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(d,{of:a,name:"Migration From 17.x"}),`
`,e.jsx(l,{label:"Skeleton - migrate from v17 to v18",level:1}),`
`,e.jsx(l,{label:"Attributes changes",level:2}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"inline"})," ",e.jsx(s,{color:"critical",label:"Removed",size:"sm"})]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"randomized"})," ",e.jsx(s,{color:"critical",label:"Removed",size:"sm"})]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"size"})," ",e.jsx(s,{color:"critical",label:"Removed",size:"sm"})]}),`
`,e.jsx(n.p,{children:"Have been removed."}),`
`,e.jsx(n.p,{children:"You can use the CSS and JS to obtain the same rendering."}),`
`,e.jsx(l,{label:"Migration examples",level:2}),`
`,e.jsx(n.p,{children:"Size skeleton:"}),`
`,e.jsx(t,{code:`
<osds-skeleton size="md"></osds-skeleton>

<!-- is now -->

<ods-skeleton class="my-skeleton"></ods-skeleton>

<style>
  .my-skeleton::part(skeleton) {
    width: 250px;
  }
</style>
`,dark:"true",language:"html"}),`
`,e.jsx(n.p,{children:"Inline skeleton:"}),`
`,e.jsx(t,{code:`
<osds-skeleton inline></osds-skeleton>

<!-- is now -->

<ods-skeleton class="my-skeleton--inline"></ods-skeleton>

<style>
  .my-skeleton--inline {
    display: inline-block;
    width: 100px;
  }
</style>
`,dark:"true",language:"html"}),`
`,e.jsx(n.p,{children:"Randomized skeleton:"}),`
`,e.jsx(t,{code:`
<osds-skeleton randomized></osds-skeleton>

<!-- is now -->

<ods-skeleton id="mySkeleton"></ods-skeleton>

<script>
  const mySkeleton = document.getElementById('mySkeleton');
  const getRandomValue = () => {
    // between 30 and 100
    return Math.floor(Math.random() * (100 - 30)) + 30;
  }
  mySkeleton.style.width = getRandomValue() + '%';
<\/script>
`,dark:"true",language:"html"})]})}function z(o={}){const{wrapper:n}={...r(),...o.components};return n?e.jsx(n,{...o,children:e.jsx(i,{...o})}):i(o)}export{z as default};
