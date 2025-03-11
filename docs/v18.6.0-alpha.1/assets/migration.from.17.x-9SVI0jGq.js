import{j as o,M as p,d as s}from"./index-BCVJDEqf.js";import{u as m}from"./index-_YJSRz3a.js";import{O as r}from"./index-CwrMpZKn.js";import{C as c}from"./code.stories-Com3gMrA.js";import{H as i}from"./Heading-DYNNEBec.js";import"./iframe-B5YUgUg3.js";import"../sb-preview/runtime.js";import"./index-8AfNH5n5.js";import"./index-D-8MO0q_.js";import"./index-DrFu-skq.js";import"./ods-accordion2-C_uqOg6Y.js";import"./index-DAZhnxgO.js";import"./icon-name-C6aMXAXT.js";import"./ods-icon2-DRPHarK1.js";import"./ods-badge-DLluvt0I.js";import"./ods-breadcrumb-item2-C_Ah5FZN.js";import"./ods-link2-CtVFUlMR.js";import"./ods-button2-dPaqs0uX.js";import"./ods-spinner2-CPyWCS2f.js";import"./ods-card-CsxtEQHf.js";import"./ods-checkbox2-CJl-a8ad.js";import"./dom-8hoR-urs.js";import"./ods-clipboard2-CewZJu-c.js";import"./ods-input2-C6KOqFAM.js";import"./type-B5zI8QxY.js";import"./ods-tooltip2-CW12aP9b.js";import"./overlay-KZpfSxWH.js";import"./ods-code2-BL2TW0HP.js";import"./ods-combobox2-BXJ8jrhz.js";import"./_commonjsHelpers-CLD5em3H.js";import"./debounce-DRefBDpX.js";import"./ods-tag2-Bb2BMy9d.js";import"./ods-datepicker2-CijAhCPy.js";import"./locale-NOa-Gxlr.js";import"./ods-divider-Dtiri0aY.js";import"./ods-divider2-yzIshch6.js";import"./ods-drawer2-DKhK7oOX.js";import"./ods-file-upload2-Ca3mZ5BD.js";import"./ods-progress-bar2-Dg_V5kiw.js";import"./ods-form-field2-BDYkM6lU.js";import"./ods-icon-DTp5PnPI.js";import"./ods-input-CCQ46ZEm.js";import"./ods-link-BCeMi6SV.js";import"./ods-medium2-BnayTic8.js";import"./ods-message-DuyDaLcv.js";import"./ods-modal2-DCK89o-L.js";import"./ods-pagination2-shUGU0gB.js";import"./ods-select2-CEKvSxa4.js";import"./ods-password2-D64-z8ym.js";import"./ods-phone-number2-BL58mHzY.js";import"./ods-popover2-mGbx5HiL.js";import"./ods-quantity2-7U22nj6z.js";import"./ods-radio2-DDJaSdNS.js";import"./ods-range2-wBjnlon-.js";import"./ods-skeleton2-B7sDasgF.js";import"./ods-switch-item2-D-SJNcDd.js";import"./ods-tabs2-ChMEr-fQ.js";import"./ods-table2-oe37kiP3.js";import"./ods-text-BO_pN8NQ.js";import"./ods-textarea2-BDOVTqwb.js";import"./ods-timepicker2-DVnCnUkw.js";import"./ods-toggle2-Bg02aln1.js";import"./controls-DX883vx3.js";import"./index-BLVG44ao.js";function n(e){const t={code:"code",p:"p",...m(),...e.components};return o.jsxs(o.Fragment,{children:[o.jsx(p,{of:c,name:"Migration From 17.x"}),`
`,o.jsx(i,{label:"Code - migrate from v17 to v18",level:1}),`
`,o.jsx(i,{label:"Usage changes",level:2}),`
`,o.jsxs(t.p,{children:["To add a copy button on the previous component, you had to add your own button in the ",o.jsx(t.code,{children:"copy"})," slot."]}),`
`,o.jsxs(t.p,{children:["This slot as been removed, you can now toggle the copy button using the new ",o.jsx(t.code,{children:"can-copy"})," attribute."]}),`
`,o.jsx(i,{label:"Attributes changes",level:2}),`
`,o.jsxs(t.p,{children:[o.jsx(t.code,{children:"canCopy"})," ",o.jsx(r,{color:"success",label:"New",size:"sm"})]}),`
`,o.jsx(t.p,{children:"New attribute (optional)."}),`
`,o.jsx(t.p,{children:"Set this to add a copy button on the right side of the code container."}),`
`,o.jsxs(t.p,{children:[o.jsx(t.code,{children:"color "})," ",o.jsx(r,{color:"critical",label:"Removed",size:"sm"})]}),`
`,o.jsx(t.p,{children:"Has been removed."}),`
`,o.jsx(t.p,{children:"You can use the style customization to achieve the same result."}),`
`,o.jsxs(t.p,{children:[o.jsx(t.code,{children:"contrasted"})," ",o.jsx(r,{color:"critical",label:"Removed",size:"sm"})]}),`
`,o.jsx(t.p,{children:"Has been removed."}),`
`,o.jsx(t.p,{children:"You can use the style customization to achieve the same result, until a new color get validated by the design team."}),`
`,o.jsxs(t.p,{children:[o.jsx(t.code,{children:"size "})," ",o.jsx(r,{color:"critical",label:"Removed",size:"sm"})]}),`
`,o.jsx(t.p,{children:"Has been removed."}),`
`,o.jsx(t.p,{children:"You can use the style customization to achieve the same result."}),`
`,o.jsx(i,{label:"Migration examples",level:2}),`
`,o.jsx(t.p,{children:"Default usage:"}),`
`,o.jsx(s,{code:`
<osds-code>
  import { OsdsText } from '@ovhcloud/ods-components/react';
</osds-code>

<!-- is now -->

<ods-code>
  import { OdsText } from '@ovhcloud/ods-components/react';
</ods-code>
`,dark:"true",language:"html"}),`
`,o.jsx(t.p,{children:"With a copy button:"}),`
`,o.jsx(s,{code:`
<osds-code>
  <osds-button slot="copy" variant="stroked">Copy</osds-button>
  import { OsdsText } from '@ovhcloud/ods-components/react';
</osds-code>

<!-- is now -->

<ods-code can-copy>
  import { OdsText } from '@ovhcloud/ods-components/react';
</ods-code>
`,dark:"true",language:"html"})]})}function fo(e={}){const{wrapper:t}={...m(),...e.components};return t?o.jsx(t,{...e,children:o.jsx(n,{...e})}):n(e)}export{fo as default};
