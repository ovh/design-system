import{j as o,M as n,d as t}from"./index-F50bSMiK.js";import{u as d}from"./index-Cdh-ijYL.js";import{O as r}from"./index-BWmQNpQ0.js";import{M as a}from"./modal.stories-Cg3ok9rl.js";import{H as s}from"./Heading-Bsa3zsN6.js";import"./iframe-BE5s5kjT.js";import"../sb-preview/runtime.js";import"./index-8AfNH5n5.js";import"./index-D-8MO0q_.js";import"./index-DrFu-skq.js";import"./ods-accordion2-vvZNAi9U.js";import"./index-DAZhnxgO.js";import"./icon-name-C6aMXAXT.js";import"./ods-icon2-DRPHarK1.js";import"./ods-badge-CjbpLGl8.js";import"./ods-breadcrumb-item2-C_Ah5FZN.js";import"./ods-link2-CtVFUlMR.js";import"./ods-button2-dPaqs0uX.js";import"./ods-spinner2-CPyWCS2f.js";import"./ods-card-DRGl4_I-.js";import"./ods-checkbox2-B2XbvOPY.js";import"./dom-8hoR-urs.js";import"./ods-clipboard2-Baifk8Bb.js";import"./ods-input2-CtkWk4I-.js";import"./type-B5zI8QxY.js";import"./ods-tooltip2-CW12aP9b.js";import"./overlay-KZpfSxWH.js";import"./ods-code2-D4zmvcg_.js";import"./ods-combobox2-CcOfmmHm.js";import"./_commonjsHelpers-CLD5em3H.js";import"./debounce-DRefBDpX.js";import"./ods-tag2-Bb2BMy9d.js";import"./ods-datepicker2-FisogS88.js";import"./locale-NOa-Gxlr.js";import"./ods-divider-CjaMxjcH.js";import"./ods-divider2-R3gNNk4H.js";import"./ods-drawer2-BQqpNIWL.js";import"./ods-file-upload2-teF1qz6H.js";import"./ods-progress-bar2-zR9YGHZb.js";import"./ods-form-field2-BSNGPVxz.js";import"./ods-icon-DTp5PnPI.js";import"./ods-input-COMKDAZi.js";import"./ods-link-BCeMi6SV.js";import"./ods-medium2-BnayTic8.js";import"./ods-message-BxLNJd0H.js";import"./ods-modal2-BQO4yvXA.js";import"./ods-pagination2-BkxTbhCC.js";import"./ods-select2-C8koqTnw.js";import"./ods-password2-aWfdhtsQ.js";import"./ods-phone-number2-Cl3w5q8v.js";import"./ods-popover2-D09FwiGN.js";import"./ods-quantity2-BgFzW1u9.js";import"./ods-radio2-C2vNRNiP.js";import"./ods-range2-l-uevN51.js";import"./ods-skeleton2-B7sDasgF.js";import"./ods-switch-item2-ebcV2EUF.js";import"./ods-tabs2-BNbhFfmR.js";import"./ods-table2-oe37kiP3.js";import"./ods-text-BO_pN8NQ.js";import"./ods-textarea2-BDOVTqwb.js";import"./ods-timepicker2-DSjpZYdI.js";import"./ods-toggle2-Bg02aln1.js";import"./index-DZK8KyWG.js";import"./controls-DX883vx3.js";import"./unsafe-html-VJzuFJfF.js";function m(i){const e={code:"code",p:"p",...d(),...i.components};return o.jsxs(o.Fragment,{children:[o.jsx(n,{of:a,name:"Migration From 17.x"}),`
`,o.jsx(s,{label:"Modal - migrate from v17 to v18",level:1}),`
`,o.jsx(s,{label:"Attributes changes",level:2}),`
`,o.jsxs(e.p,{children:[o.jsx(e.code,{children:"color"})," ",o.jsx(r,{color:"information",label:"Updated",size:"sm"})]}),`
`,o.jsx(e.p,{children:"Has been updated."}),`
`,o.jsxs(e.p,{children:["Modal's color options have been restricted to the options in ",o.jsx(e.code,{children:"ODS_MODAL_COLORS"}),"."]}),`
`,o.jsxs(e.p,{children:[o.jsx(e.code,{children:"dismissible"})," ",o.jsx(r,{color:"information",label:"Updated",size:"sm"})]}),`
`,o.jsx(e.p,{children:"Has been updated."}),`
`,o.jsxs(e.p,{children:["You can use the new ",o.jsx(e.code,{children:"isDismissible"})," attribute to obtain the same behavior."]}),`
`,o.jsxs(e.p,{children:[o.jsx(e.code,{children:"headline"})," ",o.jsx(r,{color:"critical",label:"Removed",size:"sm"})]}),`
`,o.jsx(e.p,{children:"Has been removed."}),`
`,o.jsx(e.p,{children:`Modal does not provide a headline attribute anymore.
You can use the content slot to recreate the desired headline.`}),`
`,o.jsxs(e.p,{children:[o.jsx(e.code,{children:"masked"})," ",o.jsx(r,{color:"information",label:"Updated",size:"sm"})]}),`
`,o.jsx(e.p,{children:"Has been updated."}),`
`,o.jsxs(e.p,{children:["You can use the new ",o.jsx(e.code,{children:"isOpen"})," attribute to obtain the same behavior."]}),`
`,o.jsx(s,{label:"Migration examples",level:2}),`
`,o.jsx(e.p,{children:"Color modal:"}),`
`,o.jsx(t,{code:`
<osds-modal color={ODS_THEME_COLOR_INTENT.information}></osds-modal>

<!-- is now -->

<ods-modal color={ODS_MODAL_COLOR.information}></ods-modal>
`,dark:"true",language:"html"}),`
`,o.jsx(e.p,{children:"Dismissible modal:"}),`
`,o.jsx(t,{code:`
<osds-modal dismissible="true"></osds-modal>

<!-- is now -->

<ods-modal is-dismissible="true"></ods-modal>
`,dark:"true",language:"html"}),`
`,o.jsx(e.p,{children:"Headline modal:"}),`
`,o.jsx(t,{code:`
<osds-modal headline="Hello, world!"></osds-modal>

<!-- is now -->

<ods-modal>
  <ods-text preset="heading-3">Hello, world!</ods-text>
</ods-modal>
`,dark:"true",language:"html"}),`
`,o.jsx(e.p,{children:"Masked modal:"}),`
`,o.jsx(t,{code:`
<osds-modal masked="true"></osds-modal>

<!-- is now -->

<ods-modal is-open="false"></ods-modal>
`,dark:"true",language:"html"})]})}function vo(i={}){const{wrapper:e}={...d(),...i.components};return e?o.jsx(e,{...i,children:o.jsx(m,{...i})}):m(i)}export{vo as default};
