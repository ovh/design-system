import{j as e,M as d,d as n}from"./index-s2XCIBmK.js";import{u as r}from"./index-BzRxuu7r.js";import{O as t}from"./index-OMpnLKmJ.js";import{T as l}from"./tabs.stories-Du5ZAyol.js";import{H as o}from"./Heading-DPkeex3C.js";import"./iframe-b7U1zSTi.js";import"../sb-preview/runtime.js";import"./index-8AfNH5n5.js";import"./index-D-8MO0q_.js";import"./index-DrFu-skq.js";import"./ods-accordion2-C2zw5EtX.js";import"./index-DAZhnxgO.js";import"./icon-name-C6aMXAXT.js";import"./ods-icon2-C2sSMg6h.js";import"./ods-badge-CMZ1G1-q.js";import"./ods-breadcrumb-item2-Chi8uW7w.js";import"./ods-link2-DhrEm8Nk.js";import"./ods-button2-DJxJiLcj.js";import"./ods-spinner2-CPyWCS2f.js";import"./ods-card-CsxtEQHf.js";import"./ods-checkbox2-D1rfq4Wo.js";import"./dom-CO1DdTQY.js";import"./ods-clipboard2-CWpjSCiO.js";import"./ods-input2-NhqVSkkH.js";import"./type-B5zI8QxY.js";import"./ods-tooltip2-CW12aP9b.js";import"./overlay-KZpfSxWH.js";import"./ods-code2-3QPYbtLQ.js";import"./ods-datepicker2-BYQpPxj0.js";import"./locale-NOa-Gxlr.js";import"./ods-divider-Dtiri0aY.js";import"./ods-divider2-yzIshch6.js";import"./ods-drawer2-DKhK7oOX.js";import"./ods-file-upload2-WcWZbv1U.js";import"./ods-progress-bar2-Dg_V5kiw.js";import"./ods-form-field2-BDYkM6lU.js";import"./ods-icon-DOZBIEJb.js";import"./ods-link-C3iAbK8i.js";import"./ods-medium2-BnayTic8.js";import"./ods-message-DErUZ_Xg.js";import"./ods-modal2-CLthqs1m.js";import"./ods-pagination2-Do5FFUNV.js";import"./ods-select2-uYxcgqp_.js";import"./ods-password2-YsAErLiV.js";import"./ods-phone-number2-Dku_7tcX.js";import"./ods-popover2-D0fTxPry.js";import"./ods-quantity2-Dc2INetT.js";import"./ods-radio2-NdDFmobW.js";import"./ods-range2-DVd4LCay.js";import"./ods-skeleton2-B7sDasgF.js";import"./ods-switch-item2-D-SJNcDd.js";import"./ods-tabs2-ChMEr-fQ.js";import"./ods-table2-oe37kiP3.js";import"./ods-tag2-CInySbKk.js";import"./ods-text-BO_pN8NQ.js";import"./ods-textarea2-BqL_D5sd.js";import"./ods-timepicker2-C6TMFSLy.js";import"./ods-toggle2-BgUL7nI_.js";import"./controls-DX883vx3.js";import"./unsafe-html-VJzuFJfF.js";import"./index-DCBH0_Tl.js";function i(a){const s={code:"code",li:"li",p:"p",ul:"ul",...r(),...a.components};return e.jsxs(e.Fragment,{children:[e.jsx(d,{of:l,name:"Migration From 17.x"}),`
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
