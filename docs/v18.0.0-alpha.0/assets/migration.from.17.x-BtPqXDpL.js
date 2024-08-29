import{j as e}from"./jsx-runtime-3v6rTKkY.js";import{u as t}from"./index-B5y3xRNA.js";import{M as i}from"./index-sugWq352.js";import{S as l}from"./skeleton.stories-BoWzALxb.js";import"./iframe-D98u-D7f.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-B_J8iUie.js";import"./index-DX_4BEHg.js";import"./index-DrFu-skq.js";import"./lit-html-D-ZEPr28.js";import"./control-C1r2wu67.js";function o(s){const n={code:"code",h1:"h1",h2:"h2",hr:"hr",p:"p",pre:"pre",...t(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{of:l,name:"Migration From 17.x"}),`
`,e.jsx(n.h1,{id:"skeleton---migrate-from-v17-to-v18",children:"Skeleton - migrate from v17 to v18"}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"attributes-changes",children:"Attributes changes"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"inline"})," ",e.jsx("img",{src:"https://img.shields.io/badge/removed-FF0000"})]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"randomized"})," ",e.jsx("img",{src:"https://img.shields.io/badge/removed-FF0000"})]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"size"})," ",e.jsx("img",{src:"https://img.shields.io/badge/removed-FF0000"})]}),`
`,e.jsx(n.p,{children:"Have been removed."}),`
`,e.jsx(n.p,{children:"You can use the CSS and JS to obtain the same rendering."}),`
`,e.jsx(n.h2,{id:"migration-examples",children:"Migration examples"}),`
`,e.jsx(n.p,{children:"Size skeleton:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<osds-skeleton size="md"></osds-skeleton>

<!-- is now -->

<ods-skeleton class="my-skeleton"></ods-skeleton>

<style>
  .my-skeleton::part(skeleton) {
    width: 250px;
  }
</style>
`})}),`
`,e.jsx(n.p,{children:"Inline skeleton:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<osds-skeleton inline></osds-skeleton>

<!-- is now -->

<ods-skeleton class="my-skeleton--inline"></ods-skeleton>

<style>
  .my-skeleton--inline {
    display: inline-block;
    width: 100px;
  }
</style>
`})}),`
`,e.jsx(n.p,{children:"Randomized skeleton:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<osds-skeleton randomized></osds-skeleton>

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
`})})]})}function y(s={}){const{wrapper:n}={...t(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(o,{...s})}):o(s)}export{y as default};
