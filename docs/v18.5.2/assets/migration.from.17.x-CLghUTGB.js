import{j as t,M as n,d as i}from"./index-s2XCIBmK.js";import{u as p}from"./index-BzRxuu7r.js";import{O as r}from"./index-OMpnLKmJ.js";import{T as l}from"./text.stories-DyMIgIMQ.js";import{H as s}from"./Heading-DPkeex3C.js";import"./iframe-b7U1zSTi.js";import"../sb-preview/runtime.js";import"./index-8AfNH5n5.js";import"./index-D-8MO0q_.js";import"./index-DrFu-skq.js";import"./ods-accordion2-C2zw5EtX.js";import"./index-DAZhnxgO.js";import"./icon-name-C6aMXAXT.js";import"./ods-icon2-C2sSMg6h.js";import"./ods-badge-CMZ1G1-q.js";import"./ods-breadcrumb-item2-Chi8uW7w.js";import"./ods-link2-DhrEm8Nk.js";import"./ods-button2-DJxJiLcj.js";import"./ods-spinner2-CPyWCS2f.js";import"./ods-card-CsxtEQHf.js";import"./ods-checkbox2-D1rfq4Wo.js";import"./dom-CO1DdTQY.js";import"./ods-clipboard2-CWpjSCiO.js";import"./ods-input2-NhqVSkkH.js";import"./type-B5zI8QxY.js";import"./ods-tooltip2-CW12aP9b.js";import"./overlay-KZpfSxWH.js";import"./ods-code2-3QPYbtLQ.js";import"./ods-datepicker2-BYQpPxj0.js";import"./locale-NOa-Gxlr.js";import"./ods-divider-Dtiri0aY.js";import"./ods-divider2-yzIshch6.js";import"./ods-drawer2-DKhK7oOX.js";import"./ods-file-upload2-WcWZbv1U.js";import"./ods-progress-bar2-Dg_V5kiw.js";import"./ods-form-field2-BDYkM6lU.js";import"./ods-icon-DOZBIEJb.js";import"./ods-link-C3iAbK8i.js";import"./ods-medium2-BnayTic8.js";import"./ods-message-DErUZ_Xg.js";import"./ods-modal2-CLthqs1m.js";import"./ods-pagination2-Do5FFUNV.js";import"./ods-select2-uYxcgqp_.js";import"./ods-password2-YsAErLiV.js";import"./ods-phone-number2-Dku_7tcX.js";import"./ods-popover2-D0fTxPry.js";import"./ods-quantity2-Dc2INetT.js";import"./ods-radio2-NdDFmobW.js";import"./ods-range2-DVd4LCay.js";import"./ods-skeleton2-B7sDasgF.js";import"./ods-switch-item2-D-SJNcDd.js";import"./ods-tabs2-ChMEr-fQ.js";import"./ods-table2-oe37kiP3.js";import"./ods-tag2-CInySbKk.js";import"./ods-text-BO_pN8NQ.js";import"./ods-textarea2-BqL_D5sd.js";import"./ods-timepicker2-C6TMFSLy.js";import"./ods-toggle2-BgUL7nI_.js";import"./index-DCBH0_Tl.js";import"./controls-DX883vx3.js";import"./unsafe-html-VJzuFJfF.js";function m(o){const e={code:"code",p:"p",...p(),...o.components};return t.jsxs(t.Fragment,{children:[t.jsx(n,{of:l,name:"Migration From 17.x"}),`
`,t.jsx(s,{label:"Text - migrate from v17 to v18",level:1}),`
`,t.jsx(s,{label:"Attributes changes",level:2}),`
`,t.jsxs(e.p,{children:[t.jsx(e.code,{children:"breakSpaces"})," ",t.jsx(r,{color:"critical",label:"Removed",size:"sm"})]}),`
`,t.jsxs(e.p,{children:[t.jsx(e.code,{children:"color"})," ",t.jsx(r,{color:"critical",label:"Removed",size:"sm"})]}),`
`,t.jsxs(e.p,{children:[t.jsx(e.code,{children:"contrasted"})," ",t.jsx(r,{color:"critical",label:"Removed",size:"sm"})]}),`
`,t.jsxs(e.p,{children:[t.jsx(e.code,{children:"level"})," ",t.jsx(r,{color:"critical",label:"Removed",size:"sm"})]}),`
`,t.jsxs(e.p,{children:[t.jsx(e.code,{children:"size"})," ",t.jsx(r,{color:"critical",label:"Removed",size:"sm"})]}),`
`,t.jsx(e.p,{children:"Have been removed"}),`
`,t.jsxs(e.p,{children:["You can use the new ",t.jsx(e.code,{children:"preset"})," attribute to obtain the same rendering."]}),`
`,t.jsx(s,{label:"Migration examples",level:2}),`
`,t.jsx(e.p,{children:"Size & Level text:"}),`
`,t.jsx(i,{code:`
<osds-text size="500" level="heading">My text</osds-text>

<!-- is now -->

<ods-text preset="heading-1">My text</ods-text>
`,dark:"true",language:"html"}),`
`,t.jsx(e.p,{children:"Color text:"}),`
`,t.jsx(i,{code:`
<osds-text color="primary">My text</osds-text>

<!-- is now -->

<ods-text class="my-text">My text</ods-text>

<style>
  .my-text::part(text) {
    color: var(--ods-color-primary-500);
  }
</style>
`,dark:"true",language:"html"}),`
`,t.jsx(e.p,{children:"breakSpaces text:"}),`
`,t.jsx(i,{code:`
<osds-text break-spaces>My text</osds-text>

<!-- is now -->

<ods-text class="my-text">My text</ods-text>

<style>
  .my-text::part(text) {
    white-space: break-spaces;
  }
</style>
`,dark:"true",language:"html"})]})}function yt(o={}){const{wrapper:e}={...p(),...o.components};return e?t.jsx(e,{...o,children:t.jsx(m,{...o})}):m(o)}export{yt as default};
