import{j as e}from"./jsx-runtime-Dpy41095.js";import{u as a}from"./index-aTvbjZDn.js";import{O as o}from"./index-CitIr79c.js";import{M as l,d}from"./index-KEvLdXFh.js";import{D as t}from"./divider.stories-BGHEMIXs.js";import{H as i}from"./Heading-Ct5NuNs_.js";import"./iframe-Br9eoVXS.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-B_J8iUie.js";import"./index-DX_4BEHg.js";import"./index-DrFu-skq.js";import"./index-LQAjXuKp.js";import"./lit-html-D-ZEPr28.js";import"./controls-DpsgTNdU.js";function n(r){const s={code:"code",p:"p",...a(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{of:t,name:"Migration From 17.x"}),`
`,e.jsx(i,{label:"Divider - migrate from v17 to v18",level:1}),`
`,e.jsx(i,{label:"Usage changes",level:2}),`
`,e.jsx(s.p,{children:"The divider is a visual separator and shouldn't be used as a vertical separating measure."}),`
`,e.jsx(i,{label:"Attributes changes",level:2}),`
`,e.jsxs(s.p,{children:[e.jsx(s.code,{children:"color"}),"  ",e.jsx(o,{color:"information",label:"Updated",size:"sm"})]}),`
`,e.jsx(s.p,{children:"Has been updated."}),`
`,e.jsxs(s.p,{children:["The 2 possible values are now ",e.jsx(s.code,{children:"light"})," and ",e.jsx(s.code,{children:"dark"}),"."]}),`
`,e.jsxs(s.p,{children:[e.jsx(s.code,{children:"contrasted"})," ",e.jsx(o,{color:"critical",label:"Removed",size:"sm"})]}),`
`,e.jsx(s.p,{children:"Has been removed."}),`
`,e.jsxs(s.p,{children:["Color attribute can be use with ",e.jsx(s.code,{children:"dark"})," for contrasted content."]}),`
`,e.jsxs(s.p,{children:[e.jsx(s.code,{children:"separator "})," ",e.jsx(o,{color:"critical",label:"Removed",size:"sm"})]}),`
`,e.jsx(s.p,{children:"Has been removed."}),`
`,e.jsx(s.p,{children:"Divider is always shown by default."}),`
`,e.jsxs(s.p,{children:[e.jsx(s.code,{children:"size "})," ",e.jsx(o,{color:"critical",label:"Removed",size:"sm"})]}),`
`,e.jsx(s.p,{children:"Has been removed."}),`
`,e.jsxs(s.p,{children:[e.jsx(s.code,{children:"spacing "})," ",e.jsx(o,{color:"success",label:"New",size:"sm"})]}),`
`,e.jsx(s.p,{children:"It allows to control the height in pixel of the divider."}),`
`,e.jsx(i,{label:"Migration examples",level:2}),`
`,e.jsx(s.p,{children:"Color:"}),`
`,e.jsx(d,{code:`
<osds-divider color="primary"></osds-divider>

<!-- is now -->

<ods-divider class="custom"></ods-divider>

<style>
  .custom {
    background-color: var(--ods-color-primary-100);
  }
</style>
`,dark:"true",language:"html"}),`
`,e.jsx(s.p,{children:"Contrasted:"}),`
`,e.jsx(d,{code:`
<osds-divider contrasted></osds-divider>

<!-- is now -->

<ods-divider color="dark"></ods-divider>
`,dark:"true",language:"html"}),`
`,e.jsx(s.p,{children:"Separator:"}),`
`,e.jsx(d,{code:`
<osds-divider separator="false"></osds-divider>

<!-- is now -->

<ods-divider class="custom"></ods-divider>

<style>
  .custom {
    background-color: transparent;
  }
</style>
`,dark:"true",language:"html"}),`
`,e.jsx(s.p,{children:"Size:"}),`
`,e.jsx(d,{code:`
<osds-divider size="1"></osds-divider>

<!-- is now -->

<ods-divider spacing="2"></ods-divider>
`,dark:"true",language:"html"})]})}function M(r={}){const{wrapper:s}={...a(),...r.components};return s?e.jsx(s,{...r,children:e.jsx(n,{...r})}):n(r)}export{M as default};
