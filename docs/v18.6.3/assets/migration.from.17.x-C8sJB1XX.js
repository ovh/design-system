import{j as t,M as n,d as i}from"./index-CxvU8mbA.js";import{u as p}from"./index-BDGy2HR4.js";import{O as r}from"./index-jsVj7r9R.js";import{T as l}from"./text.stories--ck0A927.js";import{H as s}from"./Heading-D-wMvR3C.js";import"./iframe-QvnFyZ-4.js";import"../sb-preview/runtime.js";import"./index-8AfNH5n5.js";import"./index-D-8MO0q_.js";import"./index-DrFu-skq.js";import"./ods-accordion2-vvZNAi9U.js";import"./index-DAZhnxgO.js";import"./icon-name-C6aMXAXT.js";import"./ods-icon2-DRPHarK1.js";import"./ods-badge-CjbpLGl8.js";import"./ods-breadcrumb-item2-C_Ah5FZN.js";import"./ods-link2-CtVFUlMR.js";import"./ods-button2-dPaqs0uX.js";import"./ods-spinner2-CPyWCS2f.js";import"./ods-card-DRGl4_I-.js";import"./ods-checkbox2-B2XbvOPY.js";import"./dom-8hoR-urs.js";import"./ods-clipboard2-Baifk8Bb.js";import"./ods-input2-CtkWk4I-.js";import"./type-B5zI8QxY.js";import"./ods-tooltip2-CW12aP9b.js";import"./overlay-KZpfSxWH.js";import"./ods-code2-D4zmvcg_.js";import"./ods-combobox2-CcOfmmHm.js";import"./_commonjsHelpers-CLD5em3H.js";import"./debounce-DRefBDpX.js";import"./ods-tag2-Bb2BMy9d.js";import"./ods-datepicker2-FisogS88.js";import"./locale-NOa-Gxlr.js";import"./ods-divider-CjaMxjcH.js";import"./ods-divider2-R3gNNk4H.js";import"./ods-drawer2-BQqpNIWL.js";import"./ods-file-upload2-teF1qz6H.js";import"./ods-progress-bar2-zR9YGHZb.js";import"./ods-form-field2-BSNGPVxz.js";import"./ods-icon-DTp5PnPI.js";import"./ods-input-COMKDAZi.js";import"./ods-link-BCeMi6SV.js";import"./ods-medium2-BnayTic8.js";import"./ods-message-BxLNJd0H.js";import"./ods-modal2-BQO4yvXA.js";import"./ods-pagination2--R9v9RO1.js";import"./ods-select2-C8koqTnw.js";import"./ods-password2-aWfdhtsQ.js";import"./ods-phone-number2-Cl3w5q8v.js";import"./ods-popover2-D09FwiGN.js";import"./ods-quantity2-BgFzW1u9.js";import"./ods-radio2-C2vNRNiP.js";import"./ods-range2-l-uevN51.js";import"./ods-skeleton2-B7sDasgF.js";import"./ods-switch-item2-ebcV2EUF.js";import"./ods-tabs2-BNbhFfmR.js";import"./ods-table2-oe37kiP3.js";import"./ods-text-BO_pN8NQ.js";import"./ods-textarea2-BDOVTqwb.js";import"./ods-timepicker2-DSjpZYdI.js";import"./ods-toggle2-Bg02aln1.js";import"./index-DZK8KyWG.js";import"./controls-DX883vx3.js";import"./unsafe-html-VJzuFJfF.js";function m(o){const e={code:"code",p:"p",...p(),...o.components};return t.jsxs(t.Fragment,{children:[t.jsx(n,{of:l,name:"Migration From 17.x"}),`
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
`,dark:"true",language:"html"})]})}function Mt(o={}){const{wrapper:e}={...p(),...o.components};return e?t.jsx(e,{...o,children:t.jsx(m,{...o})}):m(o)}export{Mt as default};
