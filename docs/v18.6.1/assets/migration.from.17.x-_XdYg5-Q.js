import{j as e,M as c,d as r}from"./index-DHunZMd9.js";import{u as d}from"./index-DogUcu-a.js";import{O as s}from"./index-CuZhG6y0.js";import{S as a}from"./switch.stories-BthBDOnG.js";import{H as o}from"./Heading-BEqqWbQS.js";import"./iframe-CrJ6auLd.js";import"../sb-preview/runtime.js";import"./index-8AfNH5n5.js";import"./index-D-8MO0q_.js";import"./index-DrFu-skq.js";import"./ods-accordion2-vvZNAi9U.js";import"./index-DAZhnxgO.js";import"./icon-name-C6aMXAXT.js";import"./ods-icon2-DRPHarK1.js";import"./ods-badge-CjbpLGl8.js";import"./ods-breadcrumb-item2-C_Ah5FZN.js";import"./ods-link2-CtVFUlMR.js";import"./ods-button2-dPaqs0uX.js";import"./ods-spinner2-CPyWCS2f.js";import"./ods-card-DRGl4_I-.js";import"./ods-checkbox2-B2XbvOPY.js";import"./dom-8hoR-urs.js";import"./ods-clipboard2-Baifk8Bb.js";import"./ods-input2-CtkWk4I-.js";import"./type-B5zI8QxY.js";import"./ods-tooltip2-CW12aP9b.js";import"./overlay-KZpfSxWH.js";import"./ods-code2-D4zmvcg_.js";import"./ods-combobox2-D8tERt2s.js";import"./_commonjsHelpers-CLD5em3H.js";import"./debounce-DRefBDpX.js";import"./ods-tag2-Bb2BMy9d.js";import"./ods-datepicker2-FisogS88.js";import"./locale-NOa-Gxlr.js";import"./ods-divider-CjaMxjcH.js";import"./ods-divider2-R3gNNk4H.js";import"./ods-drawer2-BQqpNIWL.js";import"./ods-file-upload2-teF1qz6H.js";import"./ods-progress-bar2-zR9YGHZb.js";import"./ods-form-field2-BSNGPVxz.js";import"./ods-icon-DTp5PnPI.js";import"./ods-input-COMKDAZi.js";import"./ods-link-BCeMi6SV.js";import"./ods-medium2-BnayTic8.js";import"./ods-message-BxLNJd0H.js";import"./ods-modal2-BQO4yvXA.js";import"./ods-pagination2-BkxTbhCC.js";import"./ods-select2-C8koqTnw.js";import"./ods-password2-aWfdhtsQ.js";import"./ods-phone-number2-Cl3w5q8v.js";import"./ods-popover2-D09FwiGN.js";import"./ods-quantity2-BgFzW1u9.js";import"./ods-radio2-C2vNRNiP.js";import"./ods-range2-l-uevN51.js";import"./ods-skeleton2-B7sDasgF.js";import"./ods-switch-item2-ebcV2EUF.js";import"./ods-tabs2-BNbhFfmR.js";import"./ods-table2-oe37kiP3.js";import"./ods-text-BO_pN8NQ.js";import"./ods-textarea2-BDOVTqwb.js";import"./ods-timepicker2-DSjpZYdI.js";import"./ods-toggle2-Bg02aln1.js";import"./index-DZK8KyWG.js";import"./controls-DX883vx3.js";import"./validityState-BuENXwQ9.js";function m(t){const i={code:"code",p:"p",...d(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(c,{of:a,name:"Migration From 17.x"}),`
`,e.jsx(o,{label:"Switch - migrate from v17 to v18",level:1}),`
`,e.jsx(o,{label:"Attributes changes",level:2}),`
`,e.jsx(o,{label:"Switch",level:3}),`
`,e.jsxs(i.p,{children:[e.jsx(i.code,{children:"color"})," ",e.jsx(s,{color:"critical",label:"Removed",size:"sm"})]}),`
`,e.jsx(i.p,{children:"Has been removed."}),`
`,e.jsx(i.p,{children:"You can use the style customization to achieve the same result."}),`
`,e.jsxs(i.p,{children:[e.jsx(i.code,{children:"contrasted"})," ",e.jsx(s,{color:"critical",label:"Removed",size:"sm"})]}),`
`,e.jsx(i.p,{children:"Has been removed."}),`
`,e.jsx(i.p,{children:"You can use the style customization to achieve the same result, until a new color get validated by the design team."}),`
`,e.jsxs(i.p,{children:[e.jsx(i.code,{children:"disabled"})," ",e.jsx(s,{color:"information",label:"Updated",size:"sm"})]}),`
`,e.jsx(i.p,{children:"Has been updated."}),`
`,e.jsxs(i.p,{children:["You can use the new ",e.jsx(i.code,{children:"isDisabled"})," attribute to obtain the same behavior."]}),`
`,e.jsx(o,{label:"Switch Item",level:3}),`
`,e.jsxs(i.p,{children:[e.jsx(i.code,{children:"checked"})," ",e.jsx(s,{color:"information",label:"Updated",size:"sm"})]}),`
`,e.jsx(i.p,{children:"Has been updated."}),`
`,e.jsxs(i.p,{children:["You can use the new ",e.jsx(i.code,{children:"isChecked"})," attribute to obtain the same behavior."]}),`
`,e.jsxs(i.p,{children:[e.jsx(i.code,{children:"id"})," ",e.jsx(s,{color:"information",label:"Updated",size:"sm"})]}),`
`,e.jsx(i.p,{children:"Has been updated."}),`
`,e.jsxs(i.p,{children:["You can use the new ",e.jsx(i.code,{children:"inputId"})," attribute to obtain the same behavior."]}),`
`,e.jsx(o,{label:"Migration examples",level:2}),`
`,e.jsx(i.p,{children:"Id switch:"}),`
`,e.jsx(r,{code:`
<osds-switch-item id="id-1" value="1">Value 1</osds-switch-item>

<!-- is now -->

<ods-switch-item input-id="id-1" value="1">Value 1</ods-switch-item>
`,dark:"true",language:"html"}),`
`,e.jsx(i.p,{children:"Checked switch:"}),`
`,e.jsx(r,{code:`
<osds-switch>
  <osds-switch-item checked value="1">Value 1</osds-switch-item>
  <osds-switch-item value="2">Value 2</osds-switch-item>
  <osds-switch-item value="3">Value 3</osds-switch-item>
</osds-switch>

<!-- is now -->

<ods-switch name="checked-group">
  <ods-switch-item is-checked value="1">Value 1</ods-switch-item>
  <ods-switch-item value="2">Value 2</ods-switch-item>
  <ods-switch-item value="3">Value 3</ods-switch-item>
</ods-switch>
`,dark:"true",language:"html"}),`
`,e.jsx(i.p,{children:"Disabled switch:"}),`
`,e.jsx(r,{code:`
<osds-switch disabled>
  <osds-switch-item value="1">Value 1</osds-switch-item>
  <osds-switch-item value="2">Value 2</osds-switch-item>
  <osds-switch-item value="3">Value 3</osds-switch-item>
</osds-switch>

<!-- is now -->

<ods-switch is-disabled name="disabled-group">
  <ods-switch-item value="1">Value 1</ods-switch-item>
  <ods-switch-item value="2">Value 2</ods-switch-item>
  <ods-switch-item value="3">Value 3</ods-switch-item>
</ods-switch>
`,dark:"true",language:"html"})]})}function Ve(t={}){const{wrapper:i}={...d(),...t.components};return i?e.jsx(i,{...t,children:e.jsx(m,{...t})}):m(t)}export{Ve as default};
