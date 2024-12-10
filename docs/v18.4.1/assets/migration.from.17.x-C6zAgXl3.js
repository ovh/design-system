import{j as e,M as t,d}from"./index-Rx6QkXSv.js";import{u as l}from"./index-DPrOAYpY.js";import{O as n}from"./index-BJiUJsri.js";import{M as r}from"./modal.stories-CQgJBllZ.js";import{H as i}from"./Heading-2XnXa8MH.js";import"./iframe-HwRW2g_s.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-D-8MO0q_.js";import"./index-DX_4BEHg.js";import"./index-DrFu-skq.js";import"./index-Dqa08QUn.js";import"./controls-DX883vx3.js";import"./unsafe-html-VJzuFJfF.js";function a(s){const o={code:"code",p:"p",...l(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(t,{of:r,name:"Migration From 17.x"}),`
`,e.jsx(i,{label:"Modal - migrate from v17 to v18",level:1}),`
`,e.jsx(i,{label:"Attributes changes",level:2}),`
`,e.jsxs(o.p,{children:[e.jsx(o.code,{children:"color"})," ",e.jsx(n,{color:"information",label:"Updated",size:"sm"})]}),`
`,e.jsx(o.p,{children:"Has been updated."}),`
`,e.jsxs(o.p,{children:["Modal's color options have been restricted to the options in ",e.jsx(o.code,{children:"ODS_MODAL_COLORS"}),"."]}),`
`,e.jsxs(o.p,{children:[e.jsx(o.code,{children:"dismissible"})," ",e.jsx(n,{color:"information",label:"Updated",size:"sm"})]}),`
`,e.jsx(o.p,{children:"Has been updated."}),`
`,e.jsxs(o.p,{children:["You can use the new ",e.jsx(o.code,{children:"isDismissible"})," attribute to obtain the same behavior."]}),`
`,e.jsxs(o.p,{children:[e.jsx(o.code,{children:"headline"})," ",e.jsx(n,{color:"critical",label:"Removed",size:"sm"})]}),`
`,e.jsx(o.p,{children:"Has been removed."}),`
`,e.jsx(o.p,{children:`Modal does not provide a headline attribute anymore.
You can use the content slot to recreate the desired headline.`}),`
`,e.jsxs(o.p,{children:[e.jsx(o.code,{children:"masked"})," ",e.jsx(n,{color:"information",label:"Updated",size:"sm"})]}),`
`,e.jsx(o.p,{children:"Has been updated."}),`
`,e.jsxs(o.p,{children:["You can use the new ",e.jsx(o.code,{children:"isOpen"})," attribute to obtain the same behavior."]}),`
`,e.jsx(i,{label:"Migration examples",level:2}),`
`,e.jsx(o.p,{children:"Color modal:"}),`
`,e.jsx(d,{code:`
<osds-modal color={ODS_THEME_COLOR_INTENT.information}></osds-modal>

<!-- is now -->

<ods-modal color={ODS_MODAL_COLOR.information}></ods-modal>
`,dark:"true",language:"html"}),`
`,e.jsx(o.p,{children:"Dismissible modal:"}),`
`,e.jsx(d,{code:`
<osds-modal dismissible="true"></osds-modal>

<!-- is now -->

<ods-modal is-dismissible="true"></ods-modal>
`,dark:"true",language:"html"}),`
`,e.jsx(o.p,{children:"Headline modal:"}),`
`,e.jsx(d,{code:`
<osds-modal headline="Hello, world!"></osds-modal>

<!-- is now -->

<ods-modal>
  <ods-text preset="heading-3">Hello, world!</ods-text>
</ods-modal>
`,dark:"true",language:"html"}),`
`,e.jsx(o.p,{children:"Masked modal:"}),`
`,e.jsx(d,{code:`
<osds-modal masked="true"></osds-modal>

<!-- is now -->

<ods-modal is-open="false"></ods-modal>
`,dark:"true",language:"html"})]})}function H(s={}){const{wrapper:o}={...l(),...s.components};return o?e.jsx(o,{...s,children:e.jsx(a,{...s})}):a(s)}export{H as default};
