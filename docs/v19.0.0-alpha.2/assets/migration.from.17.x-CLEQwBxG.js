import{j as e}from"./jsx-runtime-VM66peLj.js";import{useMDXComponents as r}from"./index-DQB45XCM.js";import{h as s}from"./Badge-EGenXdCK-DDYseYDy.js";import{M as d,S as t}from"./index-BlaLg9GY.js";import{S as m}from"./skeleton.stories-BWEk_rdB.js";import{H as l}from"./Heading-6Mfikk-c.js";import"./index-D_CmzhJ4.js";import"./index-2w0W-O47-BJ19ihbZ.js";import"./iframe-CGgj-FAD.js";import"./index-ChzAxGiP.js";import"./index-CucsY3YN.js";import"./index-CXQShRbs.js";import"./index-DrFu-skq.js";import"./index-CkQHsVsO.js";function i(o){const n={code:"code",p:"p",...r(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(d,{of:m,name:"Migration From 17.x"}),`
`,e.jsx(l,{label:"Skeleton - migrate from v17 to v18",level:1}),`
`,e.jsx(l,{label:"Attributes changes",level:2}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"inline"})," ",e.jsx(s,{color:"critical",size:"sm",children:"Removed"})]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"randomized"})," ",e.jsx(s,{color:"critical",size:"sm",children:"Removed"})]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"size"})," ",e.jsx(s,{color:"critical",size:"sm",children:"Removed"})]}),`
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
