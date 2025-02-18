import{j as o,M as c,d as i}from"./index-s2XCIBmK.js";import{u as m}from"./index-BzRxuu7r.js";import{O as r}from"./index-OMpnLKmJ.js";import{C as p}from"./code.stories-DnKU98CB.js";import{H as s}from"./Heading-DPkeex3C.js";import"./iframe-b7U1zSTi.js";import"../sb-preview/runtime.js";import"./index-8AfNH5n5.js";import"./index-D-8MO0q_.js";import"./index-DrFu-skq.js";import"./ods-accordion2-C2zw5EtX.js";import"./index-DAZhnxgO.js";import"./icon-name-C6aMXAXT.js";import"./ods-icon2-C2sSMg6h.js";import"./ods-badge-CMZ1G1-q.js";import"./ods-breadcrumb-item2-Chi8uW7w.js";import"./ods-link2-DhrEm8Nk.js";import"./ods-button2-DJxJiLcj.js";import"./ods-spinner2-CPyWCS2f.js";import"./ods-card-CsxtEQHf.js";import"./ods-checkbox2-D1rfq4Wo.js";import"./dom-CO1DdTQY.js";import"./ods-clipboard2-CWpjSCiO.js";import"./ods-input2-NhqVSkkH.js";import"./type-B5zI8QxY.js";import"./ods-tooltip2-CW12aP9b.js";import"./overlay-KZpfSxWH.js";import"./ods-code2-3QPYbtLQ.js";import"./ods-datepicker2-BYQpPxj0.js";import"./locale-NOa-Gxlr.js";import"./ods-divider-Dtiri0aY.js";import"./ods-divider2-yzIshch6.js";import"./ods-drawer2-DKhK7oOX.js";import"./ods-file-upload2-WcWZbv1U.js";import"./ods-progress-bar2-Dg_V5kiw.js";import"./ods-form-field2-BDYkM6lU.js";import"./ods-icon-DOZBIEJb.js";import"./ods-link-C3iAbK8i.js";import"./ods-medium2-BnayTic8.js";import"./ods-message-DErUZ_Xg.js";import"./ods-modal2-CLthqs1m.js";import"./ods-pagination2-Do5FFUNV.js";import"./ods-select2-uYxcgqp_.js";import"./ods-password2-YsAErLiV.js";import"./ods-phone-number2-Dku_7tcX.js";import"./ods-popover2-D0fTxPry.js";import"./ods-quantity2-Dc2INetT.js";import"./ods-radio2-NdDFmobW.js";import"./ods-range2-DVd4LCay.js";import"./ods-skeleton2-B7sDasgF.js";import"./ods-switch-item2-D-SJNcDd.js";import"./ods-tabs2-ChMEr-fQ.js";import"./ods-table2-oe37kiP3.js";import"./ods-tag2-CInySbKk.js";import"./ods-text-BO_pN8NQ.js";import"./ods-textarea2-BqL_D5sd.js";import"./ods-timepicker2-C6TMFSLy.js";import"./ods-toggle2-BgUL7nI_.js";import"./controls-DX883vx3.js";import"./index-DCBH0_Tl.js";function n(t){const e={code:"code",p:"p",...m(),...t.components};return o.jsxs(o.Fragment,{children:[o.jsx(c,{of:p,name:"Migration From 17.x"}),`
`,o.jsx(s,{label:"Code - migrate from v17 to v18",level:1}),`
`,o.jsx(s,{label:"Usage changes",level:2}),`
`,o.jsxs(e.p,{children:["To add a copy button on the previous component, you had to add your own button in the ",o.jsx(e.code,{children:"copy"})," slot."]}),`
`,o.jsxs(e.p,{children:["This slot as been removed, you can now toggle the copy button using the new ",o.jsx(e.code,{children:"can-copy"})," attribute."]}),`
`,o.jsx(s,{label:"Attributes changes",level:2}),`
`,o.jsxs(e.p,{children:[o.jsx(e.code,{children:"canCopy"})," ",o.jsx(r,{color:"success",label:"New",size:"sm"})]}),`
`,o.jsx(e.p,{children:"New attribute (optional)."}),`
`,o.jsx(e.p,{children:"Set this to add a copy button on the right side of the code container."}),`
`,o.jsxs(e.p,{children:[o.jsx(e.code,{children:"color "})," ",o.jsx(r,{color:"critical",label:"Removed",size:"sm"})]}),`
`,o.jsx(e.p,{children:"Has been removed."}),`
`,o.jsx(e.p,{children:"You can use the style customization to achieve the same result."}),`
`,o.jsxs(e.p,{children:[o.jsx(e.code,{children:"contrasted"})," ",o.jsx(r,{color:"critical",label:"Removed",size:"sm"})]}),`
`,o.jsx(e.p,{children:"Has been removed."}),`
`,o.jsx(e.p,{children:"You can use the style customization to achieve the same result, until a new color get validated by the design team."}),`
`,o.jsxs(e.p,{children:[o.jsx(e.code,{children:"size "})," ",o.jsx(r,{color:"critical",label:"Removed",size:"sm"})]}),`
`,o.jsx(e.p,{children:"Has been removed."}),`
`,o.jsx(e.p,{children:"You can use the style customization to achieve the same result."}),`
`,o.jsx(s,{label:"Migration examples",level:2}),`
`,o.jsx(e.p,{children:"Default usage:"}),`
`,o.jsx(i,{code:`
<osds-code>
  import { OsdsText } from '@ovhcloud/ods-components/react';
</osds-code>

<!-- is now -->

<ods-code>
  import { OdsText } from '@ovhcloud/ods-components/react';
</ods-code>
`,dark:"true",language:"html"}),`
`,o.jsx(e.p,{children:"With a copy button:"}),`
`,o.jsx(i,{code:`
<osds-code>
  <osds-button slot="copy" variant="stroked">Copy</osds-button>
  import { OsdsText } from '@ovhcloud/ods-components/react';
</osds-code>

<!-- is now -->

<ods-code can-copy>
  import { OdsText } from '@ovhcloud/ods-components/react';
</ods-code>
`,dark:"true",language:"html"})]})}function bo(t={}){const{wrapper:e}={...m(),...t.components};return e?o.jsx(e,{...t,children:o.jsx(n,{...t})}):n(t)}export{bo as default};
