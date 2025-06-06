import{j as e}from"./jsx-runtime-VM66peLj.js";import{useMDXComponents as i}from"./index-DQB45XCM.js";import{h as a}from"./Badge-EGenXdCK-DDYseYDy.js";import{M as l,S as n}from"./index-BlaLg9GY.js";import{T as r}from"./tabs.stories-D3TMAn7r.js";import{H as o}from"./Heading-6Mfikk-c.js";import"./index-D_CmzhJ4.js";import"./index-2w0W-O47-BJ19ihbZ.js";import"./iframe-CGgj-FAD.js";import"./index-ChzAxGiP.js";import"./index-CucsY3YN.js";import"./index-CXQShRbs.js";import"./index-DrFu-skq.js";import"./index-CkQHsVsO.js";import"./index-BCxMAfLs.js";import"./render-strategy-C1g0moKL.js";import"./use-locale-context-Z4fgdY29.js";import"./use-presence-BmJ92aQP.js";import"./use-event-OCVb0O1l.js";import"./controls-BtiQQn1l.js";import"./source-d0g_Nd0q.js";function d(t){const s={code:"code",li:"li",p:"p",ul:"ul",...i(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{of:r,name:"Migration From 17.x"}),`
`,e.jsx(o,{label:"Tabs - migrate from v17 to v18",level:1}),`
`,e.jsx(o,{label:"Usage changes",level:2}),`
`,e.jsx(s.p,{children:"Previous to v18, the component was managing the tabs and the panel associated to each tab."}),`
`,e.jsx(s.p,{children:"This was causing some issue for some projects, as each may want to act differently on tab selection."}),`
`,e.jsx(s.p,{children:"The component is now only a graphical component displaying tabs, triggering an event on tab selection."}),`
`,e.jsxs(s.p,{children:["The following component has been removed: ",e.jsx(a,{color:"critical",size:"sm",children:"Removed"})]}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsx(s.li,{children:e.jsx(s.code,{children:"osds-tab-bar"})}),`
`,e.jsx(s.li,{children:e.jsx(s.code,{children:"osds-tab-panel"})}),`
`]}),`
`,e.jsxs(s.p,{children:["The following component has been updated: ",e.jsx(a,{color:"information",size:"sm",children:"Updated"})]}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"osds-tabs"})," is now ",e.jsx(s.code,{children:"ods-tabs"})]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"osds-tab-bar-item"})," is now ",e.jsx(s.code,{children:"ods-tab"})]}),`
`]}),`
`,e.jsx(o,{label:"Attributes changes",level:2}),`
`,e.jsx(o,{label:"Tabs",level:3}),`
`,e.jsxs(s.p,{children:[e.jsx(s.code,{children:"contrasted"})," ",e.jsx(a,{color:"critical",size:"sm",children:"Removed"})]}),`
`,e.jsx(s.p,{children:"Has been removed."}),`
`,e.jsx(s.p,{children:"You can use the style customization to achieve the same result, until a new color get validated by the design team."}),`
`,e.jsxs(s.p,{children:[e.jsx(s.code,{children:"panel"}),"  ",e.jsx(a,{color:"critical",size:"sm",children:"Removed"}),`
Has been removed.`]}),`
`,e.jsx(s.p,{children:"Not relevant anymore as the new component does not handle panels."}),`
`,e.jsxs(s.p,{children:[e.jsx(s.code,{children:"size"})," ",e.jsx(a,{color:"critical",size:"sm",children:"Removed"})]}),`
`,e.jsx(s.p,{children:"Has been removed."}),`
`,e.jsx(s.p,{children:"You can use the style customization to achieve the same result."}),`
`,e.jsx(o,{label:"Tab",level:3}),`
`,e.jsxs(s.p,{children:[e.jsx(s.code,{children:"active"})," ",e.jsx(a,{color:"information",size:"sm",children:"Updated"})]}),`
`,e.jsx(s.p,{children:"Has been updated."}),`
`,e.jsxs(s.p,{children:["You can use the new ",e.jsx(s.code,{children:"isSelected"})," attribute to obtain the same behavior."]}),`
`,e.jsxs(s.p,{children:[e.jsx(s.code,{children:"contrasted"})," ",e.jsx(a,{color:"critical",size:"sm",children:"Removed"})]}),`
`,e.jsx(s.p,{children:"Has been removed."}),`
`,e.jsx(s.p,{children:"You can use the style customization to achieve the same result, until a new color get validated by the design team."}),`
`,e.jsxs(s.p,{children:[e.jsx(s.code,{children:"disabled"})," ",e.jsx(a,{color:"information",size:"sm",children:"Updated"})]}),`
`,e.jsx(s.p,{children:"Has been updated."}),`
`,e.jsxs(s.p,{children:["You can use the new ",e.jsx(s.code,{children:"isDisabled"})," attribute to obtain the same behavior."]}),`
`,e.jsxs(s.p,{children:[e.jsx(s.code,{children:"panel"})," ",e.jsx(a,{color:"critical",size:"sm",children:"Removed"})]}),`
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
`,dark:"true",language:"html"})]})}function Y(t={}){const{wrapper:s}={...i(),...t.components};return s?e.jsx(s,{...t,children:e.jsx(d,{...t})}):d(t)}export{Y as default};
