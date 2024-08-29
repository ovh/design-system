import{j as e}from"./jsx-runtime-C_5uCoOk.js";import{u as t}from"./index-BNSrq6w-.js";import{M as o}from"./index-DnV51lgW.js";import{T as d}from"./tabs.stories-COu7hTjL.js";import"./iframe-Cm7AUSBL.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-B_J8iUie.js";import"./index-DX_4BEHg.js";import"./index-DrFu-skq.js";import"./lit-html-D-ZEPr28.js";import"./unsafe-html-HR6uCwaW.js";import"./control-C1r2wu67.js";function a(n){const s={code:"code",h1:"h1",h2:"h2",h3:"h3",hr:"hr",li:"li",p:"p",pre:"pre",ul:"ul",...t(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:d,name:"Migration From 17.x"}),`
`,e.jsx(s.h1,{id:"tabs---migrate-from-v17-to-v18",children:"Tabs - migrate from v17 to v18"}),`
`,e.jsx(s.hr,{}),`
`,e.jsx(s.h2,{id:"usage-changes",children:"Usage changes"}),`
`,e.jsx(s.p,{children:"Previous to v18, the component was managing the tabs and the panel associated to each tab."}),`
`,e.jsx(s.p,{children:"This was causing some issue for some projects, as each may want to act differently on tab selection."}),`
`,e.jsx(s.p,{children:"The component is now only a graphical component displaying tabs, triggering an event on tab selection."}),`
`,e.jsxs(s.p,{children:["The following component has been removed: ",e.jsx("img",{src:"https://img.shields.io/badge/removed-FF0000"})]}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsx(s.li,{children:e.jsx(s.code,{children:"osds-tab-bar"})}),`
`,e.jsx(s.li,{children:e.jsx(s.code,{children:"osds-tab-panel"})}),`
`]}),`
`,e.jsxs(s.p,{children:["The following component has been updated: ",e.jsx("img",{src:"https://img.shields.io/badge/updated-00FFFF"})]}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"osds-tabs"})," is now ",e.jsx(s.code,{children:"ods-tabs"})]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"osds-tab-bar-item"})," is now ",e.jsx(s.code,{children:"ods-tab"})]}),`
`]}),`
`,e.jsx(s.h2,{id:"attributes-changes",children:"Attributes changes"}),`
`,e.jsx(s.h3,{id:"tabs",children:"Tabs"}),`
`,e.jsxs(s.p,{children:[e.jsx(s.code,{children:"contrasted"})," ",e.jsx("img",{src:"https://img.shields.io/badge/removed-FF0000"})]}),`
`,e.jsx(s.p,{children:"Has been removed."}),`
`,e.jsx(s.p,{children:"You can use the style customization to achieve the same result, until a new color get validated by the design team."}),`
`,e.jsxs(s.p,{children:[e.jsx(s.code,{children:"panel"})," ",e.jsx("img",{src:"https://img.shields.io/badge/removed-FF0000"})]}),`
`,e.jsx(s.p,{children:"Has been removed."}),`
`,e.jsx(s.p,{children:"Not relevant anymore as the new component does not handle panels."}),`
`,e.jsxs(s.p,{children:[e.jsx(s.code,{children:"size"})," ",e.jsx("img",{src:"https://img.shields.io/badge/removed-FF0000"})]}),`
`,e.jsx(s.p,{children:"Has been removed."}),`
`,e.jsx(s.p,{children:"You can use the style customization to achieve the same result."}),`
`,e.jsx(s.h3,{id:"tab",children:"Tab"}),`
`,e.jsxs(s.p,{children:[e.jsx(s.code,{children:"active"})," ",e.jsx("img",{src:"https://img.shields.io/badge/updated-00FFFF"})]}),`
`,e.jsx(s.p,{children:"Has been updated."}),`
`,e.jsxs(s.p,{children:["You can use the new ",e.jsx(s.code,{children:"isSelected"})," attribute to obtain the same behavior."]}),`
`,e.jsxs(s.p,{children:[e.jsx(s.code,{children:"contrasted"})," ",e.jsx("img",{src:"https://img.shields.io/badge/removed-FF0000"})]}),`
`,e.jsx(s.p,{children:"Has been removed."}),`
`,e.jsx(s.p,{children:"You can use the style customization to achieve the same result, until a new color get validated by the design team."}),`
`,e.jsxs(s.p,{children:[e.jsx(s.code,{children:"disabled"})," ",e.jsx("img",{src:"https://img.shields.io/badge/updated-00FFFF"})]}),`
`,e.jsx(s.p,{children:"Has been updated."}),`
`,e.jsxs(s.p,{children:["You can use the new ",e.jsx(s.code,{children:"isDisabled"})," attribute to obtain the same behavior."]}),`
`,e.jsxs(s.p,{children:[e.jsx(s.code,{children:"panel"})," ",e.jsx("img",{src:"https://img.shields.io/badge/removed-FF0000"})]}),`
`,e.jsx(s.p,{children:"Has been removed."}),`
`,e.jsx(s.p,{children:"Not relevant anymore as the new component does not handle panels."}),`
`,e.jsx(s.h2,{id:"migration-examples",children:"Migration examples"}),`
`,e.jsx(s.p,{children:"Basic tabs:"}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-html",children:`<osds-tabs>
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
`})}),`
`,e.jsx(s.p,{children:"Disabled tab:"}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-html",children:`<osds-tabs>
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
`})}),`
`,e.jsx(s.p,{children:"Selected tab:"}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-html",children:`<osds-tabs>
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
`})})]})}function f(n={}){const{wrapper:s}={...t(),...n.components};return s?e.jsx(s,{...n,children:e.jsx(a,{...n})}):a(n)}export{f as default};
