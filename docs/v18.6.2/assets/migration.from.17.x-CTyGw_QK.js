import{j as o,M as p,d as s}from"./index-F50bSMiK.js";import{u as m}from"./index-Cdh-ijYL.js";import{O as r}from"./index-BWmQNpQ0.js";import{C as c}from"./code.stories-BfkhvlTQ.js";import{H as i}from"./Heading-Bsa3zsN6.js";import"./iframe-BE5s5kjT.js";import"../sb-preview/runtime.js";import"./index-8AfNH5n5.js";import"./index-D-8MO0q_.js";import"./index-DrFu-skq.js";import"./ods-accordion2-vvZNAi9U.js";import"./index-DAZhnxgO.js";import"./icon-name-C6aMXAXT.js";import"./ods-icon2-DRPHarK1.js";import"./ods-badge-CjbpLGl8.js";import"./ods-breadcrumb-item2-C_Ah5FZN.js";import"./ods-link2-CtVFUlMR.js";import"./ods-button2-dPaqs0uX.js";import"./ods-spinner2-CPyWCS2f.js";import"./ods-card-DRGl4_I-.js";import"./ods-checkbox2-B2XbvOPY.js";import"./dom-8hoR-urs.js";import"./ods-clipboard2-Baifk8Bb.js";import"./ods-input2-CtkWk4I-.js";import"./type-B5zI8QxY.js";import"./ods-tooltip2-CW12aP9b.js";import"./overlay-KZpfSxWH.js";import"./ods-code2-D4zmvcg_.js";import"./ods-combobox2-CcOfmmHm.js";import"./_commonjsHelpers-CLD5em3H.js";import"./debounce-DRefBDpX.js";import"./ods-tag2-Bb2BMy9d.js";import"./ods-datepicker2-FisogS88.js";import"./locale-NOa-Gxlr.js";import"./ods-divider-CjaMxjcH.js";import"./ods-divider2-R3gNNk4H.js";import"./ods-drawer2-BQqpNIWL.js";import"./ods-file-upload2-teF1qz6H.js";import"./ods-progress-bar2-zR9YGHZb.js";import"./ods-form-field2-BSNGPVxz.js";import"./ods-icon-DTp5PnPI.js";import"./ods-input-COMKDAZi.js";import"./ods-link-BCeMi6SV.js";import"./ods-medium2-BnayTic8.js";import"./ods-message-BxLNJd0H.js";import"./ods-modal2-BQO4yvXA.js";import"./ods-pagination2-BkxTbhCC.js";import"./ods-select2-C8koqTnw.js";import"./ods-password2-aWfdhtsQ.js";import"./ods-phone-number2-Cl3w5q8v.js";import"./ods-popover2-D09FwiGN.js";import"./ods-quantity2-BgFzW1u9.js";import"./ods-radio2-C2vNRNiP.js";import"./ods-range2-l-uevN51.js";import"./ods-skeleton2-B7sDasgF.js";import"./ods-switch-item2-ebcV2EUF.js";import"./ods-tabs2-BNbhFfmR.js";import"./ods-table2-oe37kiP3.js";import"./ods-text-BO_pN8NQ.js";import"./ods-textarea2-BDOVTqwb.js";import"./ods-timepicker2-DSjpZYdI.js";import"./ods-toggle2-Bg02aln1.js";import"./controls-DX883vx3.js";import"./index-DZK8KyWG.js";function n(e){const t={code:"code",p:"p",...m(),...e.components};return o.jsxs(o.Fragment,{children:[o.jsx(p,{of:c,name:"Migration From 17.x"}),`
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
