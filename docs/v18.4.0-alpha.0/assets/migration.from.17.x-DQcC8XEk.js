import{j as e}from"./jsx-runtime-Cz3huCOb.js";import{u as l}from"./index-BRdWgBGF.js";import{O as a}from"./index-BYszAjkJ.js";import{M as i,d as n}from"./index-C7ZQW9Xo.js";import{T as r}from"./tabs.stories-DxOQE9qG.js";import{H as o}from"./Heading-BWgLZzFp.js";import"./iframe-O-MMI8BM.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-B_J8iUie.js";import"./index-DX_4BEHg.js";import"./index-DrFu-skq.js";import"./lit-html-D-ZEPr28.js";import"./unsafe-html-HR6uCwaW.js";import"./controls-D697y8_r.js";import"./index-D19O3a7h.js";function d(t){const s={code:"code",li:"li",p:"p",ul:"ul",...l(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{of:r,name:"Migration From 17.x"}),`
`,e.jsx(o,{label:"Tabs - migrate from v17 to v18",level:1}),`
`,e.jsx(o,{label:"Usage changes",level:2}),`
`,e.jsx(s.p,{children:"Previous to v18, the component was managing the tabs and the panel associated to each tab."}),`
`,e.jsx(s.p,{children:"This was causing some issue for some projects, as each may want to act differently on tab selection."}),`
`,e.jsx(s.p,{children:"The component is now only a graphical component displaying tabs, triggering an event on tab selection."}),`
`,e.jsxs(s.p,{children:["The following component has been removed: ",e.jsx(a,{color:"critical",label:"Removed",size:"sm"})]}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsx(s.li,{children:e.jsx(s.code,{children:"osds-tab-bar"})}),`
`,e.jsx(s.li,{children:e.jsx(s.code,{children:"osds-tab-panel"})}),`
`]}),`
`,e.jsxs(s.p,{children:["The following component has been updated: ",e.jsx(a,{color:"information",label:"Updated",size:"sm"})]}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"osds-tabs"})," is now ",e.jsx(s.code,{children:"ods-tabs"})]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"osds-tab-bar-item"})," is now ",e.jsx(s.code,{children:"ods-tab"})]}),`
`]}),`
`,e.jsx(o,{label:"Attributes changes",level:2}),`
`,e.jsx(o,{label:"Tabs",level:3}),`
`,e.jsxs(s.p,{children:[e.jsx(s.code,{children:"contrasted"})," ",e.jsx(a,{color:"critical",label:"Removed",size:"sm"})]}),`
`,e.jsx(s.p,{children:"Has been removed."}),`
`,e.jsx(s.p,{children:"You can use the style customization to achieve the same result, until a new color get validated by the design team."}),`
`,e.jsxs(s.p,{children:[e.jsx(s.code,{children:"panel"})," ",e.jsx(a,{color:"critical",label:"Removed",size:"sm"})]}),`
`,e.jsx(s.p,{children:"Has been removed."}),`
`,e.jsx(s.p,{children:"Not relevant anymore as the new component does not handle panels."}),`
`,e.jsxs(s.p,{children:[e.jsx(s.code,{children:"size"})," ",e.jsx(a,{color:"critical",label:"Removed",size:"sm"})]}),`
`,e.jsx(s.p,{children:"Has been removed."}),`
`,e.jsx(s.p,{children:"You can use the style customization to achieve the same result."}),`
`,e.jsx(o,{label:"Tab",level:3}),`
`,e.jsxs(s.p,{children:[e.jsx(s.code,{children:"active"})," ",e.jsx(a,{color:"information",label:"Updated",size:"sm"})]}),`
`,e.jsx(s.p,{children:"Has been updated."}),`
`,e.jsxs(s.p,{children:["You can use the new ",e.jsx(s.code,{children:"isSelected"})," attribute to obtain the same behavior."]}),`
`,e.jsxs(s.p,{children:[e.jsx(s.code,{children:"contrasted"})," ",e.jsx(a,{color:"critical",label:"Removed",size:"sm"})]}),`
`,e.jsx(s.p,{children:"Has been removed."}),`
`,e.jsx(s.p,{children:"You can use the style customization to achieve the same result, until a new color get validated by the design team."}),`
`,e.jsxs(s.p,{children:[e.jsx(s.code,{children:"disabled"})," ",e.jsx(a,{color:"information",label:"Updated",size:"sm"})]}),`
`,e.jsx(s.p,{children:"Has been updated."}),`
`,e.jsxs(s.p,{children:["You can use the new ",e.jsx(s.code,{children:"isDisabled"})," attribute to obtain the same behavior."]}),`
`,e.jsxs(s.p,{children:[e.jsx(s.code,{children:"panel"})," ",e.jsx(a,{color:"critical",label:"Removed",size:"sm"})]}),`
`,e.jsx(s.p,{children:"Has been removed."}),`
`,e.jsx(s.p,{children:"Not relevant anymore as the new component does not handle panels."}),`
`,e.jsx(o,{label:"Migration examples",level:2}),`
`,e.jsx(s.p,{children:"Basic tabs:"}),`
`,e.jsx(n,{code:`
<osds-tabs>
  <osds-tab-bar slot="top">
    <osds-tab-bar-item panel="default">Default</osds-tab-bar-item>
    <osds-tab-bar-item panel="hover">Hover</osds-tab-bar-item>
    <osds-tab-bar-item panel="active">Active</osds-tab-bar-item>
  </osds-tab-bar>
  <osds-tab-panel name="default">Default</osds-tab-panel>
  <osds-tab-panel name="hover">Hover</osds-tab-panel>
  <osds-tab-panel name="active">Active</osds-tab-panel>
</osds-tabs>

<!-- is now -->

<ods-tabs>
  <ods-tab>Default</ods-tab>
  <ods-tab>Hover</ods-tab>
  <ods-tab>Active</ods-tab>
</ods-tabs>
<!-- ... your own panel/view/page management ... -->
`,dark:"true",language:"html"}),`
`,e.jsx(s.p,{children:"Disabled tab:"}),`
`,e.jsx(n,{code:`
<osds-tabs>
  <osds-tab-bar slot="top">
    <osds-tab-bar-item disabled panel="default">Default</osds-tab-bar-item>
    <osds-tab-bar-item panel="hover">Hover</osds-tab-bar-item>
    <osds-tab-bar-item panel="active">Active</osds-tab-bar-item>
  </osds-tab-bar>
  <osds-tab-panel name="default">Default</osds-tab-panel>
  <osds-tab-panel name="hover">Hover</osds-tab-panel>
  <osds-tab-panel name="active">Active</osds-tab-panel>
</osds-tabs>

<!-- is now -->

<ods-tabs>
  <ods-tab is-disabled>Default</ods-tab>
  <ods-tab>Hover</ods-tab>
  <ods-tab>Active</ods-tab>
</ods-tabs>
<!-- ... your own panel/view/page management ... -->
`,dark:"true",language:"html"}),`
`,e.jsx(s.p,{children:"Selected tab:"}),`
`,e.jsx(n,{code:`
<osds-tabs>
  <osds-tab-bar slot="top">
    <osds-tab-bar-item active panel="default">Default</osds-tab-bar-item>
    <osds-tab-bar-item panel="hover">Hover</osds-tab-bar-item>
    <osds-tab-bar-item panel="active">Active</osds-tab-bar-item>
  </osds-tab-bar>
  <osds-tab-panel name="default">Default</osds-tab-panel>
  <osds-tab-panel name="hover">Hover</osds-tab-panel>
  <osds-tab-panel name="active">Active</osds-tab-panel>
</osds-tabs>

<!-- is now -->

<ods-tabs>
  <ods-tab is-selected>Default</ods-tab>
  <ods-tab>Hover</ods-tab>
  <ods-tab>Active</ods-tab>
</ods-tabs>
<!-- ... your own panel/view/page management ... -->
`,dark:"true",language:"html"})]})}function A(t={}){const{wrapper:s}={...l(),...t.components};return s?e.jsx(s,{...t,children:e.jsx(d,{...t})}):d(t)}export{A as default};
