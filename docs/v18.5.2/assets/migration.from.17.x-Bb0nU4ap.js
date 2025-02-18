import{j as o,M as p,d as s}from"./index-s2XCIBmK.js";import{u as l}from"./index-BzRxuu7r.js";import{O as t}from"./index-OMpnLKmJ.js";import{C as a}from"./clipboard.stories-DuptLkvv.js";import{H as r}from"./Heading-DPkeex3C.js";import"./iframe-b7U1zSTi.js";import"../sb-preview/runtime.js";import"./index-8AfNH5n5.js";import"./index-D-8MO0q_.js";import"./index-DrFu-skq.js";import"./ods-accordion2-C2zw5EtX.js";import"./index-DAZhnxgO.js";import"./icon-name-C6aMXAXT.js";import"./ods-icon2-C2sSMg6h.js";import"./ods-badge-CMZ1G1-q.js";import"./ods-breadcrumb-item2-Chi8uW7w.js";import"./ods-link2-DhrEm8Nk.js";import"./ods-button2-DJxJiLcj.js";import"./ods-spinner2-CPyWCS2f.js";import"./ods-card-CsxtEQHf.js";import"./ods-checkbox2-D1rfq4Wo.js";import"./dom-CO1DdTQY.js";import"./ods-clipboard2-CWpjSCiO.js";import"./ods-input2-NhqVSkkH.js";import"./type-B5zI8QxY.js";import"./ods-tooltip2-CW12aP9b.js";import"./overlay-KZpfSxWH.js";import"./ods-code2-3QPYbtLQ.js";import"./ods-datepicker2-BYQpPxj0.js";import"./locale-NOa-Gxlr.js";import"./ods-divider-Dtiri0aY.js";import"./ods-divider2-yzIshch6.js";import"./ods-drawer2-DKhK7oOX.js";import"./ods-file-upload2-WcWZbv1U.js";import"./ods-progress-bar2-Dg_V5kiw.js";import"./ods-form-field2-BDYkM6lU.js";import"./ods-icon-DOZBIEJb.js";import"./ods-link-C3iAbK8i.js";import"./ods-medium2-BnayTic8.js";import"./ods-message-DErUZ_Xg.js";import"./ods-modal2-CLthqs1m.js";import"./ods-pagination2-Do5FFUNV.js";import"./ods-select2-uYxcgqp_.js";import"./ods-password2-YsAErLiV.js";import"./ods-phone-number2-Dku_7tcX.js";import"./ods-popover2-D0fTxPry.js";import"./ods-quantity2-Dc2INetT.js";import"./ods-radio2-NdDFmobW.js";import"./ods-range2-DVd4LCay.js";import"./ods-skeleton2-B7sDasgF.js";import"./ods-switch-item2-D-SJNcDd.js";import"./ods-tabs2-ChMEr-fQ.js";import"./ods-table2-oe37kiP3.js";import"./ods-tag2-CInySbKk.js";import"./ods-text-BO_pN8NQ.js";import"./ods-textarea2-BqL_D5sd.js";import"./ods-timepicker2-C6TMFSLy.js";import"./ods-toggle2-BgUL7nI_.js";import"./controls-DX883vx3.js";import"./index-DCBH0_Tl.js";function n(i){const e={code:"code",p:"p",...l(),...i.components};return o.jsxs(o.Fragment,{children:[o.jsx(p,{of:a,name:"Migration From 17.x"}),`
`,o.jsx(r,{label:"Clipboard - migrate from v17 to v18",level:1}),`
`,o.jsx(r,{label:"Usage changes",level:2}),`
`,o.jsx(e.p,{children:"The clipboard does not use slots anymore, it will provide default labels that you can customize using new attributes."}),`
`,o.jsx(s,{code:`
<osds-clipboard value="Content to copy"
  Copier le contenu
  <span slot='success-message'>Copié !</span>
</osds-clipboard>
`,dark:"true",language:"html"}),`
`,o.jsx(e.p,{children:"The same result would now be achieved using:"}),`
`,o.jsx(s,{code:`
<ods-clipboard label-copy="Copier le contenu"
               label-copy-success="Copié !"
               value="Content to copy">
</ods-clipboard>
`,dark:"true",language:"html"}),`
`,o.jsx(r,{label:"Attributes changes",level:2}),`
`,o.jsxs(e.p,{children:[o.jsx(e.code,{children:"disabled"})," ",o.jsx(t,{color:"information",label:"Updated",size:"sm"})]}),`
`,o.jsx(e.p,{children:"Has been updated."}),`
`,o.jsxs(e.p,{children:["You can use the new ",o.jsx(e.code,{children:"isDisabled"})," attribute to obtain the same behavior."]}),`
`,o.jsxs(e.p,{children:[o.jsx(e.code,{children:"inline "})," ",o.jsx(t,{color:"critical",label:"Removed",size:"sm"})]}),`
`,o.jsx(e.p,{children:"Has been removed."}),`
`,o.jsxs(e.p,{children:["Clipboard is now ",o.jsx(e.code,{children:"inline-block"}),` by default.
You can add some style directly on the component if you want to override that.`]}),`
`,o.jsxs(e.p,{children:[o.jsx(e.code,{children:"labelCopy"})," ",o.jsx(t,{color:"success",label:"New",size:"sm"})]}),`
`,o.jsx(e.p,{children:"New attribute (optional)."}),`
`,o.jsx(e.p,{children:"Use this to customize the label on the tooltip when hovering before any copy action is triggered."}),`
`,o.jsxs(e.p,{children:[o.jsx(e.code,{children:"labelCopySuccess"})," ",o.jsx(t,{color:"success",label:"New",size:"sm"})]}),`
`,o.jsx(e.p,{children:"New attribute (optional)."}),`
`,o.jsx(e.p,{children:"Use this to customize the label on the tooltip when a successful copy did happen."}),`
`,o.jsx(r,{label:"Migration examples",level:2}),`
`,o.jsx(e.p,{children:"Disabled clipboard:"}),`
`,o.jsx(s,{code:`
<osds-clipboard disabled>
</osds-clipboard>

<!-- is now -->

<ods-clipboard is-disabled>
</ods-clipboard>
`,dark:"true",language:"html"}),`
`,o.jsx(e.p,{children:"Inline clipboard:"}),`
`,o.jsx(s,{code:`
<osds-clipboard inline>
</osds-clipboard>

<!-- is now -->

<ods-clipboard>
</ods-clipboard>
`,dark:"true",language:"html"}),`
`,o.jsx(e.p,{children:"Custom labels:"}),`
`,o.jsx(s,{code:`
<osds-clipboard>
  Copier le contenu
  <span slot='success-message'>Copié !</span>
</osds-clipboard>

<!-- is now -->

<ods-clipboard label-copy="Copier le contenu"
               label-copy-success="Copié !">
</ods-clipboard>
`,dark:"true",language:"html"})]})}function jo(i={}){const{wrapper:e}={...l(),...i.components};return e?o.jsx(e,{...i,children:o.jsx(n,{...i})}):n(i)}export{jo as default};
