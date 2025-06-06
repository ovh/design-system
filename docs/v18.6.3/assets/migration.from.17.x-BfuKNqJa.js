import{j as r,M as m,d as s}from"./index-CxvU8mbA.js";import{u as n}from"./index-BDGy2HR4.js";import{O as i}from"./index-jsVj7r9R.js";import{D as p}from"./divider.stories-GsGd0Xq8.js";import{H as t}from"./Heading-D-wMvR3C.js";import"./iframe-QvnFyZ-4.js";import"../sb-preview/runtime.js";import"./index-8AfNH5n5.js";import"./index-D-8MO0q_.js";import"./index-DrFu-skq.js";import"./ods-accordion2-vvZNAi9U.js";import"./index-DAZhnxgO.js";import"./icon-name-C6aMXAXT.js";import"./ods-icon2-DRPHarK1.js";import"./ods-badge-CjbpLGl8.js";import"./ods-breadcrumb-item2-C_Ah5FZN.js";import"./ods-link2-CtVFUlMR.js";import"./ods-button2-dPaqs0uX.js";import"./ods-spinner2-CPyWCS2f.js";import"./ods-card-DRGl4_I-.js";import"./ods-checkbox2-B2XbvOPY.js";import"./dom-8hoR-urs.js";import"./ods-clipboard2-Baifk8Bb.js";import"./ods-input2-CtkWk4I-.js";import"./type-B5zI8QxY.js";import"./ods-tooltip2-CW12aP9b.js";import"./overlay-KZpfSxWH.js";import"./ods-code2-D4zmvcg_.js";import"./ods-combobox2-CcOfmmHm.js";import"./_commonjsHelpers-CLD5em3H.js";import"./debounce-DRefBDpX.js";import"./ods-tag2-Bb2BMy9d.js";import"./ods-datepicker2-FisogS88.js";import"./locale-NOa-Gxlr.js";import"./ods-divider-CjaMxjcH.js";import"./ods-divider2-R3gNNk4H.js";import"./ods-drawer2-BQqpNIWL.js";import"./ods-file-upload2-teF1qz6H.js";import"./ods-progress-bar2-zR9YGHZb.js";import"./ods-form-field2-BSNGPVxz.js";import"./ods-icon-DTp5PnPI.js";import"./ods-input-COMKDAZi.js";import"./ods-link-BCeMi6SV.js";import"./ods-medium2-BnayTic8.js";import"./ods-message-BxLNJd0H.js";import"./ods-modal2-BQO4yvXA.js";import"./ods-pagination2--R9v9RO1.js";import"./ods-select2-C8koqTnw.js";import"./ods-password2-aWfdhtsQ.js";import"./ods-phone-number2-Cl3w5q8v.js";import"./ods-popover2-D09FwiGN.js";import"./ods-quantity2-BgFzW1u9.js";import"./ods-radio2-C2vNRNiP.js";import"./ods-range2-l-uevN51.js";import"./ods-skeleton2-B7sDasgF.js";import"./ods-switch-item2-ebcV2EUF.js";import"./ods-tabs2-BNbhFfmR.js";import"./ods-table2-oe37kiP3.js";import"./ods-text-BO_pN8NQ.js";import"./ods-textarea2-BDOVTqwb.js";import"./ods-timepicker2-DSjpZYdI.js";import"./ods-toggle2-Bg02aln1.js";import"./index-DZK8KyWG.js";import"./controls-DX883vx3.js";function d(e){const o={code:"code",p:"p",...n(),...e.components};return r.jsxs(r.Fragment,{children:[r.jsx(m,{of:p,name:"Migration From 17.x"}),`
`,r.jsx(t,{label:"Divider - migrate from v17 to v18",level:1}),`
`,r.jsx(t,{label:"Usage changes",level:2}),`
`,r.jsx(o.p,{children:"The divider is a visual separator and shouldn't be used as a vertical separating measure."}),`
`,r.jsx(t,{label:"Attributes changes",level:2}),`
`,r.jsxs(o.p,{children:[r.jsx(o.code,{children:"color"}),"  ",r.jsx(i,{color:"information",label:"Updated",size:"sm"})]}),`
`,r.jsx(o.p,{children:"Has been updated."}),`
`,r.jsxs(o.p,{children:["The 2 possible values are now ",r.jsx(o.code,{children:"light"})," and ",r.jsx(o.code,{children:"dark"}),"."]}),`
`,r.jsxs(o.p,{children:[r.jsx(o.code,{children:"contrasted"})," ",r.jsx(i,{color:"critical",label:"Removed",size:"sm"})]}),`
`,r.jsx(o.p,{children:"Has been removed."}),`
`,r.jsxs(o.p,{children:["Color attribute can be use with ",r.jsx(o.code,{children:"dark"})," for contrasted content."]}),`
`,r.jsxs(o.p,{children:[r.jsx(o.code,{children:"separator "})," ",r.jsx(i,{color:"critical",label:"Removed",size:"sm"})]}),`
`,r.jsx(o.p,{children:"Has been removed."}),`
`,r.jsx(o.p,{children:"Divider is always shown by default."}),`
`,r.jsxs(o.p,{children:[r.jsx(o.code,{children:"size "})," ",r.jsx(i,{color:"critical",label:"Removed",size:"sm"})]}),`
`,r.jsx(o.p,{children:"Has been removed."}),`
`,r.jsxs(o.p,{children:[r.jsx(o.code,{children:"spacing "})," ",r.jsx(i,{color:"success",label:"New",size:"sm"})]}),`
`,r.jsx(o.p,{children:"It allows to control the height in pixel of the divider."}),`
`,r.jsx(t,{label:"Migration examples",level:2}),`
`,r.jsx(o.p,{children:"Color:"}),`
`,r.jsx(s,{code:`
<osds-divider color="primary"></osds-divider>

<!-- is now -->

<ods-divider class="custom"></ods-divider>

<style>
  .custom {
    background-color: var(--ods-color-primary-100);
  }
</style>
`,dark:"true",language:"html"}),`
`,r.jsx(o.p,{children:"Contrasted:"}),`
`,r.jsx(s,{code:`
<osds-divider contrasted></osds-divider>

<!-- is now -->

<ods-divider color="dark"></ods-divider>
`,dark:"true",language:"html"}),`
`,r.jsx(o.p,{children:"Separator:"}),`
`,r.jsx(s,{code:`
<osds-divider separator="false"></osds-divider>

<!-- is now -->

<ods-divider class="custom"></ods-divider>

<style>
  .custom {
    background-color: transparent;
  }
</style>
`,dark:"true",language:"html"}),`
`,r.jsx(o.p,{children:"Size:"}),`
`,r.jsx(s,{code:`
<osds-divider size="1"></osds-divider>

<!-- is now -->

<ods-divider spacing="2"></ods-divider>
`,dark:"true",language:"html"})]})}function fr(e={}){const{wrapper:o}={...n(),...e.components};return o?r.jsx(o,{...e,children:r.jsx(d,{...e})}):d(e)}export{fr as default};
