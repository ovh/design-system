import{j as o,M as c,d as i}from"./index-DQsySnuC.js";import{u as m}from"./index-Xj8pMhSr.js";import{O as r}from"./index-CihiY_f6.js";import{C as p}from"./code.stories-8wBsyYLZ.js";import{H as s}from"./Heading-DDc_MF2r.js";import"./iframe-DRtgxPEL.js";import"../sb-preview/runtime.js";import"./index-8AfNH5n5.js";import"./index-D-8MO0q_.js";import"./index-DrFu-skq.js";import"./ods-accordion2-Bgg69lRV.js";import"./index-DAZhnxgO.js";import"./icon-name-C6aMXAXT.js";import"./ods-icon2-Bl6f3POv.js";import"./ods-badge-tHc24Eg4.js";import"./ods-breadcrumb-item2-CoLTn2CF.js";import"./ods-link2-DDMr4sUm.js";import"./ods-button2-Bhm26DQr.js";import"./ods-spinner2-DCN2yKlT.js";import"./ods-card-B_VebKXk.js";import"./ods-checkbox2-BOuFx8yF.js";import"./dom-CO1DdTQY.js";import"./ods-clipboard2-NuJn2ry3.js";import"./ods-input2-B9cw61K_.js";import"./type-B5zI8QxY.js";import"./ods-tooltip2-BwzEvmuE.js";import"./overlay-KZpfSxWH.js";import"./ods-code2-bZeM2NI-.js";import"./ods-datepicker2-DwwUrg1C.js";import"./locale-NOa-Gxlr.js";import"./ods-divider-3cgmT4wP.js";import"./ods-divider2-Dc25YIYb.js";import"./ods-drawer2-DsENZFv4.js";import"./ods-file-upload2-CPd6D9Z5.js";import"./ods-progress-bar2-BuFm8qT0.js";import"./ods-form-field2-Tc9B1-rj.js";import"./ods-icon-NURRZ9Mf.js";import"./ods-link-BE9dMQzg.js";import"./ods-medium2-BB_NU63C.js";import"./ods-message-B9bD81Bu.js";import"./ods-modal2-CP36WQeg.js";import"./ods-pagination2-CotgNPzL.js";import"./ods-select2-B4wr0dem.js";import"./ods-password2-BQKXsiEd.js";import"./ods-phone-number2-D1K1HcDS.js";import"./ods-popover2-hre_XUC2.js";import"./ods-quantity2-DOjRn13r.js";import"./ods-radio2-BtBodUES.js";import"./ods-range2-BhwU834C.js";import"./ods-skeleton2-dZcgHYAN.js";import"./ods-switch-item2-m1p75_3x.js";import"./ods-tabs2-wJlXfoZt.js";import"./ods-table2-vWlGUOoj.js";import"./ods-tag2-Dj0-zHXw.js";import"./ods-text-CTeC-41B.js";import"./ods-textarea2-BHQdu6bK.js";import"./ods-timepicker2-2oCWgeQp.js";import"./ods-toggle2-DbSuYqWU.js";import"./controls-DX883vx3.js";import"./index-DCBH0_Tl.js";function n(t){const e={code:"code",p:"p",...m(),...t.components};return o.jsxs(o.Fragment,{children:[o.jsx(c,{of:p,name:"Migration From 17.x"}),`
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
