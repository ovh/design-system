import{j as e,M as p,d as m}from"./index-s2XCIBmK.js";import{u as s}from"./index-BzRxuu7r.js";import{O as i}from"./index-OMpnLKmJ.js";import{S as d}from"./spinner.stories-Dz5-Nmfc.js";import{H as n}from"./Heading-DPkeex3C.js";import"./iframe-b7U1zSTi.js";import"../sb-preview/runtime.js";import"./index-8AfNH5n5.js";import"./index-D-8MO0q_.js";import"./index-DrFu-skq.js";import"./ods-accordion2-C2zw5EtX.js";import"./index-DAZhnxgO.js";import"./icon-name-C6aMXAXT.js";import"./ods-icon2-C2sSMg6h.js";import"./ods-badge-CMZ1G1-q.js";import"./ods-breadcrumb-item2-Chi8uW7w.js";import"./ods-link2-DhrEm8Nk.js";import"./ods-button2-DJxJiLcj.js";import"./ods-spinner2-CPyWCS2f.js";import"./ods-card-CsxtEQHf.js";import"./ods-checkbox2-D1rfq4Wo.js";import"./dom-CO1DdTQY.js";import"./ods-clipboard2-CWpjSCiO.js";import"./ods-input2-NhqVSkkH.js";import"./type-B5zI8QxY.js";import"./ods-tooltip2-CW12aP9b.js";import"./overlay-KZpfSxWH.js";import"./ods-code2-3QPYbtLQ.js";import"./ods-datepicker2-BYQpPxj0.js";import"./locale-NOa-Gxlr.js";import"./ods-divider-Dtiri0aY.js";import"./ods-divider2-yzIshch6.js";import"./ods-drawer2-DKhK7oOX.js";import"./ods-file-upload2-WcWZbv1U.js";import"./ods-progress-bar2-Dg_V5kiw.js";import"./ods-form-field2-BDYkM6lU.js";import"./ods-icon-DOZBIEJb.js";import"./ods-link-C3iAbK8i.js";import"./ods-medium2-BnayTic8.js";import"./ods-message-DErUZ_Xg.js";import"./ods-modal2-CLthqs1m.js";import"./ods-pagination2-Do5FFUNV.js";import"./ods-select2-uYxcgqp_.js";import"./ods-password2-YsAErLiV.js";import"./ods-phone-number2-Dku_7tcX.js";import"./ods-popover2-D0fTxPry.js";import"./ods-quantity2-Dc2INetT.js";import"./ods-radio2-NdDFmobW.js";import"./ods-range2-DVd4LCay.js";import"./ods-skeleton2-B7sDasgF.js";import"./ods-switch-item2-D-SJNcDd.js";import"./ods-tabs2-ChMEr-fQ.js";import"./ods-table2-oe37kiP3.js";import"./ods-tag2-CInySbKk.js";import"./ods-text-BO_pN8NQ.js";import"./ods-textarea2-BqL_D5sd.js";import"./ods-timepicker2-C6TMFSLy.js";import"./ods-toggle2-BgUL7nI_.js";import"./index-DCBH0_Tl.js";import"./controls-DX883vx3.js";function t(o){const r={code:"code",p:"p",strong:"strong",...s(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(p,{of:d,name:"Migration From 17.x"}),`
`,e.jsx(n,{label:"Spinner - migrate from v17 to v18",level:1}),`
`,e.jsx(n,{label:"Attributes changes",level:2}),`
`,e.jsxs(r.p,{children:[e.jsx(r.code,{children:"color"})," ",e.jsx(i,{color:"success",label:"New",size:"sm"})]}),`
`,e.jsx(r.p,{children:"New attribute."}),`
`,e.jsx(r.p,{children:"Provides a list of colors using the currently applied theme."}),`
`,e.jsxs(r.p,{children:[e.jsx(r.code,{children:"contrasted"})," ",e.jsx(i,{color:"critical",label:"Removed",size:"sm"})]}),`
`,e.jsx(r.p,{children:"Has been removed."}),`
`,e.jsxs(r.p,{children:["You can use the new ",e.jsx(r.code,{children:"white"})," color to obtain the same rendering."]}),`
`,e.jsxs(r.p,{children:[e.jsx(r.code,{children:"inline"})," ",e.jsx(i,{color:"critical",label:"Removed",size:"sm"})]}),`
`,e.jsx(r.p,{children:"Has been removed."}),`
`,e.jsxs(r.p,{children:["Spinner is now ",e.jsx(r.code,{children:"inline-block"}),` by default.
You can add some style directly on the component if you want to override that.`]}),`
`,e.jsxs(r.p,{children:[e.jsx(r.code,{children:"mode"})," ",e.jsx(i,{color:"critical",label:"Removed",size:"sm"})]}),`
`,e.jsx(r.p,{children:"Has been removed."}),`
`,e.jsx(r.p,{children:"There was only was mode value, it is now the default rendering."}),`
`,e.jsxs(r.p,{children:[e.jsx(r.code,{children:"size"})," ",e.jsx(i,{color:"information",label:"Updated",size:"sm"})]}),`
`,e.jsx(r.p,{children:"Has been updated."}),`
`,e.jsx(r.p,{children:"Provides a list of pre-made spinner sizer, here is the comparison of previous size and new ones:"}),`
`,e.jsx(r.p,{children:e.jsx(r.strong,{children:"sm"})}),`
`,e.jsx(r.p,{children:"Changed from 20px to 24px."}),`
`,e.jsx(r.p,{children:e.jsx(r.strong,{children:"md"})}),`
`,e.jsx(r.p,{children:"Changed from 40px to 48px."}),`
`,e.jsx(r.p,{children:e.jsx(r.strong,{children:"lg"})}),`
`,e.jsx(r.p,{children:"Changed from 140px to 80px."}),`
`,e.jsx(n,{label:"Migration examples",level:2}),`
`,e.jsx(r.p,{children:"Contrasted spinner:"}),`
`,e.jsx(m,{code:`
<osds-spinner inline contrasted></osds-spinner>

<!-- is now -->

<ods-spinner color="white"></ods-spinner>
`,dark:"true",language:"html"})]})}function ue(o={}){const{wrapper:r}={...s(),...o.components};return r?e.jsx(r,{...o,children:e.jsx(t,{...o})}):t(o)}export{ue as default};
