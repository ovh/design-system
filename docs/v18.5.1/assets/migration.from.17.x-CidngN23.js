import{j as e,M as d,d as n}from"./index-DQsySnuC.js";import{u as r}from"./index-Xj8pMhSr.js";import{O as t}from"./index-CihiY_f6.js";import{T as l}from"./tabs.stories--6reZNHu.js";import{H as o}from"./Heading-DDc_MF2r.js";import"./iframe-DRtgxPEL.js";import"../sb-preview/runtime.js";import"./index-8AfNH5n5.js";import"./index-D-8MO0q_.js";import"./index-DrFu-skq.js";import"./ods-accordion2-Bgg69lRV.js";import"./index-DAZhnxgO.js";import"./icon-name-C6aMXAXT.js";import"./ods-icon2-Bl6f3POv.js";import"./ods-badge-tHc24Eg4.js";import"./ods-breadcrumb-item2-CoLTn2CF.js";import"./ods-link2-DDMr4sUm.js";import"./ods-button2-Bhm26DQr.js";import"./ods-spinner2-DCN2yKlT.js";import"./ods-card-B_VebKXk.js";import"./ods-checkbox2-BOuFx8yF.js";import"./dom-CO1DdTQY.js";import"./ods-clipboard2-NuJn2ry3.js";import"./ods-input2-B9cw61K_.js";import"./type-B5zI8QxY.js";import"./ods-tooltip2-BwzEvmuE.js";import"./overlay-KZpfSxWH.js";import"./ods-code2-bZeM2NI-.js";import"./ods-datepicker2-DwwUrg1C.js";import"./locale-NOa-Gxlr.js";import"./ods-divider-3cgmT4wP.js";import"./ods-divider2-Dc25YIYb.js";import"./ods-drawer2-DsENZFv4.js";import"./ods-file-upload2-CPd6D9Z5.js";import"./ods-progress-bar2-BuFm8qT0.js";import"./ods-form-field2-Tc9B1-rj.js";import"./ods-icon-NURRZ9Mf.js";import"./ods-link-BE9dMQzg.js";import"./ods-medium2-BB_NU63C.js";import"./ods-message-B9bD81Bu.js";import"./ods-modal2-CP36WQeg.js";import"./ods-pagination2-CotgNPzL.js";import"./ods-select2-B4wr0dem.js";import"./ods-password2-BQKXsiEd.js";import"./ods-phone-number2-D1K1HcDS.js";import"./ods-popover2-hre_XUC2.js";import"./ods-quantity2-DOjRn13r.js";import"./ods-radio2-BtBodUES.js";import"./ods-range2-BhwU834C.js";import"./ods-skeleton2-dZcgHYAN.js";import"./ods-switch-item2-m1p75_3x.js";import"./ods-tabs2-wJlXfoZt.js";import"./ods-table2-vWlGUOoj.js";import"./ods-tag2-Dj0-zHXw.js";import"./ods-text-CTeC-41B.js";import"./ods-textarea2-BHQdu6bK.js";import"./ods-timepicker2-2oCWgeQp.js";import"./ods-toggle2-DbSuYqWU.js";import"./controls-DX883vx3.js";import"./unsafe-html-VJzuFJfF.js";import"./index-DCBH0_Tl.js";function i(a){const s={code:"code",li:"li",p:"p",ul:"ul",...r(),...a.components};return e.jsxs(e.Fragment,{children:[e.jsx(d,{of:l,name:"Migration From 17.x"}),`
`,e.jsx(o,{label:"Tabs - migrate from v17 to v18",level:1}),`
`,e.jsx(o,{label:"Usage changes",level:2}),`
`,e.jsx(s.p,{children:"Previous to v18, the component was managing the tabs and the panel associated to each tab."}),`
`,e.jsx(s.p,{children:"This was causing some issue for some projects, as each may want to act differently on tab selection."}),`
`,e.jsx(s.p,{children:"The component is now only a graphical component displaying tabs, triggering an event on tab selection."}),`
`,e.jsxs(s.p,{children:["The following component has been removed: ",e.jsx(t,{color:"critical",label:"Removed",size:"sm"})]}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsx(s.li,{children:e.jsx(s.code,{children:"osds-tab-bar"})}),`
`,e.jsx(s.li,{children:e.jsx(s.code,{children:"osds-tab-panel"})}),`
`]}),`
`,e.jsxs(s.p,{children:["The following component has been updated: ",e.jsx(t,{color:"information",label:"Updated",size:"sm"})]}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"osds-tabs"})," is now ",e.jsx(s.code,{children:"ods-tabs"})]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"osds-tab-bar-item"})," is now ",e.jsx(s.code,{children:"ods-tab"})]}),`
`]}),`
`,e.jsx(o,{label:"Attributes changes",level:2}),`
`,e.jsx(o,{label:"Tabs",level:3}),`
`,e.jsxs(s.p,{children:[e.jsx(s.code,{children:"contrasted"})," ",e.jsx(t,{color:"critical",label:"Removed",size:"sm"})]}),`
`,e.jsx(s.p,{children:"Has been removed."}),`
`,e.jsx(s.p,{children:"You can use the style customization to achieve the same result, until a new color get validated by the design team."}),`
`,e.jsxs(s.p,{children:[e.jsx(s.code,{children:"panel"})," ",e.jsx(t,{color:"critical",label:"Removed",size:"sm"})]}),`
`,e.jsx(s.p,{children:"Has been removed."}),`
`,e.jsx(s.p,{children:"Not relevant anymore as the new component does not handle panels."}),`
`,e.jsxs(s.p,{children:[e.jsx(s.code,{children:"size"})," ",e.jsx(t,{color:"critical",label:"Removed",size:"sm"})]}),`
`,e.jsx(s.p,{children:"Has been removed."}),`
`,e.jsx(s.p,{children:"You can use the style customization to achieve the same result."}),`
`,e.jsx(o,{label:"Tab",level:3}),`
`,e.jsxs(s.p,{children:[e.jsx(s.code,{children:"active"})," ",e.jsx(t,{color:"information",label:"Updated",size:"sm"})]}),`
`,e.jsx(s.p,{children:"Has been updated."}),`
`,e.jsxs(s.p,{children:["You can use the new ",e.jsx(s.code,{children:"isSelected"})," attribute to obtain the same behavior."]}),`
`,e.jsxs(s.p,{children:[e.jsx(s.code,{children:"contrasted"})," ",e.jsx(t,{color:"critical",label:"Removed",size:"sm"})]}),`
`,e.jsx(s.p,{children:"Has been removed."}),`
`,e.jsx(s.p,{children:"You can use the style customization to achieve the same result, until a new color get validated by the design team."}),`
`,e.jsxs(s.p,{children:[e.jsx(s.code,{children:"disabled"})," ",e.jsx(t,{color:"information",label:"Updated",size:"sm"})]}),`
`,e.jsx(s.p,{children:"Has been updated."}),`
`,e.jsxs(s.p,{children:["You can use the new ",e.jsx(s.code,{children:"isDisabled"})," attribute to obtain the same behavior."]}),`
`,e.jsxs(s.p,{children:[e.jsx(s.code,{children:"panel"})," ",e.jsx(t,{color:"critical",label:"Removed",size:"sm"})]}),`
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
`,dark:"true",language:"html"})]})}function ve(a={}){const{wrapper:s}={...r(),...a.components};return s?e.jsx(s,{...a,children:e.jsx(i,{...a})}):i(a)}export{ve as default};
