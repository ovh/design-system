import{j as r}from"./jsx-runtime-3v6rTKkY.js";import{u as o}from"./index-B5y3xRNA.js";import{M as t}from"./index-sugWq352.js";import{P as i}from"./progress-bar.stories-BIEd6NWx.js";import"./iframe-D98u-D7f.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-B_J8iUie.js";import"./index-DX_4BEHg.js";import"./index-DrFu-skq.js";import"./lit-html-D-ZEPr28.js";import"./control-C1r2wu67.js";function s(n){const e={code:"code",h1:"h1",h2:"h2",h3:"h3",hr:"hr",p:"p",pre:"pre",...o(),...n.components};return r.jsxs(r.Fragment,{children:[r.jsx(t,{of:i,name:"Migration From 17.x"}),`
`,r.jsx(e.h1,{id:"progressbar---migrate-from-v17-to-v18",children:"ProgressBar - migrate from v17 to v18"}),`
`,r.jsx(e.hr,{}),`
`,r.jsx(e.h3,{id:"slot-changes",children:"Slot changes"}),`
`,r.jsxs(e.p,{children:[r.jsx(e.code,{children:"end"})," ",r.jsx("img",{src:"https://img.shields.io/badge/remove-FF0000"})]}),`
`,r.jsx(e.p,{children:"Has been removed."}),`
`,r.jsx(e.p,{children:"You can now add any text directly after the component instead of using the slot."}),`
`,r.jsx(e.h2,{id:"migration-examples",children:"Migration examples"}),`
`,r.jsx(e.p,{children:"Slot end progress bar:"}),`
`,r.jsx(e.pre,{children:r.jsx(e.code,{className:"language-html",children:`<osds-progress-bar value="50">
  <span slot="end">50%</span>
</osds-progress-bar>

<!-- is now -->

<ods-progress-bar value="50"></ods-progress-bar><span>50%</span>
`})})]})}function b(n={}){const{wrapper:e}={...o(),...n.components};return e?r.jsx(e,{...n,children:r.jsx(s,{...n})}):s(n)}export{b as default};
