import{j as e,M as p,d as n}from"./index-CxvU8mbA.js";import{u as d}from"./index-BDGy2HR4.js";import{O as t}from"./index-jsVj7r9R.js";import{Q as m}from"./quantity.stories-CvRhJ0qx.js";import{H as o}from"./Heading-D-wMvR3C.js";import{S as r,O as a,a as l}from"./StorybookLink-CpF08Utd.js";import"./iframe-QvnFyZ-4.js";import"../sb-preview/runtime.js";import"./index-8AfNH5n5.js";import"./index-D-8MO0q_.js";import"./index-DrFu-skq.js";import"./ods-accordion2-vvZNAi9U.js";import"./index-DAZhnxgO.js";import"./icon-name-C6aMXAXT.js";import"./ods-icon2-DRPHarK1.js";import"./ods-badge-CjbpLGl8.js";import"./ods-breadcrumb-item2-C_Ah5FZN.js";import"./ods-link2-CtVFUlMR.js";import"./ods-button2-dPaqs0uX.js";import"./ods-spinner2-CPyWCS2f.js";import"./ods-card-DRGl4_I-.js";import"./ods-checkbox2-B2XbvOPY.js";import"./dom-8hoR-urs.js";import"./ods-clipboard2-Baifk8Bb.js";import"./ods-input2-CtkWk4I-.js";import"./type-B5zI8QxY.js";import"./ods-tooltip2-CW12aP9b.js";import"./overlay-KZpfSxWH.js";import"./ods-code2-D4zmvcg_.js";import"./ods-combobox2-CcOfmmHm.js";import"./_commonjsHelpers-CLD5em3H.js";import"./debounce-DRefBDpX.js";import"./ods-tag2-Bb2BMy9d.js";import"./ods-datepicker2-FisogS88.js";import"./locale-NOa-Gxlr.js";import"./ods-divider-CjaMxjcH.js";import"./ods-divider2-R3gNNk4H.js";import"./ods-drawer2-BQqpNIWL.js";import"./ods-file-upload2-teF1qz6H.js";import"./ods-progress-bar2-zR9YGHZb.js";import"./ods-form-field2-BSNGPVxz.js";import"./ods-icon-DTp5PnPI.js";import"./ods-input-COMKDAZi.js";import"./ods-link-BCeMi6SV.js";import"./ods-medium2-BnayTic8.js";import"./ods-message-BxLNJd0H.js";import"./ods-modal2-BQO4yvXA.js";import"./ods-pagination2--R9v9RO1.js";import"./ods-select2-C8koqTnw.js";import"./ods-password2-aWfdhtsQ.js";import"./ods-phone-number2-Cl3w5q8v.js";import"./ods-popover2-D09FwiGN.js";import"./ods-quantity2-BgFzW1u9.js";import"./ods-radio2-C2vNRNiP.js";import"./ods-range2-l-uevN51.js";import"./ods-skeleton2-B7sDasgF.js";import"./ods-switch-item2-ebcV2EUF.js";import"./ods-tabs2-BNbhFfmR.js";import"./ods-table2-oe37kiP3.js";import"./ods-text-BO_pN8NQ.js";import"./ods-textarea2-BDOVTqwb.js";import"./ods-timepicker2-DSjpZYdI.js";import"./ods-toggle2-Bg02aln1.js";import"./controls-DX883vx3.js";import"./validityState-BuENXwQ9.js";import"./index-DZK8KyWG.js";function c(i){const s={code:"code",p:"p",...d(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(p,{of:m,name:"Migration From 17.x"}),`
`,e.jsx(o,{label:"Quantity - migrate from v17 to v18",level:1}),`
`,e.jsx(o,{label:"Usage changes",level:2}),`
`,e.jsx(s.p,{children:"Quantity component was using slots, expecting specific components in it to work as expected."}),`
`,e.jsx(s.p,{children:"It has been fully reworked to be a all-in-one form element component."}),`
`,e.jsx(s.p,{children:"You can now use it directly as any input element."}),`
`,e.jsx(s.p,{children:"Here is an example of the previous declaration with ODS component:"}),`
`,e.jsx(n,{code:`
<osds-quantity>
  <osds-button slot='minus' color='primary' size='sm'>
    <osds-icon size='sm' contrasted name='minus'></osds-icon>
  </osds-button>
  <osds-input type='number' color='primary'></osds-input>
  <osds-button slot='plus' color='primary' size='sm'>
    <osds-icon size='sm' contrasted name='plus'></osds-icon>
  </osds-button>
</osds-quantity>
`,dark:"true",language:"html"}),`
`,e.jsx(s.p,{children:"The same result would now be achieved using:"}),`
`,e.jsx(n,{code:`
<ods-quantity>
</ods-quantity>
`,dark:"true",language:"html"}),`
`,e.jsx(o,{label:"Attributes changes",level:2}),`
`,e.jsxs(s.p,{children:[e.jsx(s.code,{children:"disabled"})," ",e.jsx(t,{color:"information",label:"Updated",size:"sm"})]}),`
`,e.jsx(s.p,{children:"Has been updated."}),`
`,e.jsxs(s.p,{children:["You can use the new ",e.jsx(s.code,{children:"isDisabled"})," attribute to obtain the same behavior."]}),`
`,e.jsxs(s.p,{children:[e.jsx(s.code,{children:"defaultValue"})," ",e.jsx(t,{color:"success",label:"New",size:"sm"})]}),`
`,e.jsx(s.p,{children:"New attribute (optional)."}),`
`,e.jsxs(s.p,{children:["You can use the new ",e.jsx(s.code,{children:"defaultValue"})," attribute to obtain the same behavior as with input."]}),`
`,e.jsxs(s.p,{children:[e.jsx(s.code,{children:"ariaLabel"})," ",e.jsx(t,{color:"success",label:"New",size:"sm"})]}),`
`,e.jsx(s.p,{children:"New attribute (optional)."}),`
`,e.jsxs(s.p,{children:["You can use the new ",e.jsx(s.code,{children:"ariaLabel"})," attribute to obtain the same behavior as with input."]}),`
`,e.jsxs(s.p,{children:[e.jsx(s.code,{children:"ariaLabelledby"})," ",e.jsx(t,{color:"success",label:"New",size:"sm"})]}),`
`,e.jsx(s.p,{children:"New attribute (optional)."}),`
`,e.jsxs(s.p,{children:["You can use the new ",e.jsx(s.code,{children:"araiLabelledby"})," attribute to obtain the same behavior as with input."]}),`
`,e.jsxs(s.p,{children:[e.jsx(s.code,{children:"hasError"})," ",e.jsx(t,{color:"success",label:"New",size:"sm"})]}),`
`,e.jsx(s.p,{children:"New attribute (optional)."}),`
`,e.jsxs(s.p,{children:["You can use the new ",e.jsx(s.code,{children:"hasError"})," attribute to obtain the same behavior as with input."]}),`
`,e.jsxs(s.p,{children:[e.jsx(s.code,{children:"isReadonly"})," ",e.jsx(t,{color:"success",label:"New",size:"sm"})]}),`
`,e.jsx(s.p,{children:"New attribute (optional)."}),`
`,e.jsxs(s.p,{children:["You can use the new ",e.jsx(s.code,{children:"isReadonly"})," attribute to obtain the same behavior as with input."]}),`
`,e.jsxs(s.p,{children:[e.jsx(s.code,{children:"isRequired"})," ",e.jsx(t,{color:"success",label:"New",size:"sm"})]}),`
`,e.jsx(s.p,{children:"New attribute (optional)."}),`
`,e.jsxs(s.p,{children:["You can use the new ",e.jsx(s.code,{children:"isRequired"})," attribute to obtain the same behavior as with input."]}),`
`,e.jsxs(s.p,{children:[e.jsx(s.code,{children:"max"})," ",e.jsx(t,{color:"success",label:"New",size:"sm"})]}),`
`,e.jsx(s.p,{children:"New attribute (optional)."}),`
`,e.jsxs(s.p,{children:["You can use the new ",e.jsx(s.code,{children:"max"})," attribute to obtain the same behavior as with input."]}),`
`,e.jsxs(s.p,{children:[e.jsx(s.code,{children:"min"})," ",e.jsx(t,{color:"success",label:"New",size:"sm"})]}),`
`,e.jsx(s.p,{children:"New attribute (optional)."}),`
`,e.jsxs(s.p,{children:["You can use the new ",e.jsx(s.code,{children:"min"})," attribute to obtain the same behavior as with input."]}),`
`,e.jsxs(s.p,{children:[e.jsx(s.code,{children:"name"})," ",e.jsx(t,{color:"success",label:"New",size:"sm"})]}),`
`,e.jsx(s.p,{children:"New attribute."}),`
`,e.jsxs(s.p,{children:["You can use the new ",e.jsx(s.code,{children:"name"})," attribute to obtain the same behavior as with input."]}),`
`,e.jsxs(s.p,{children:[e.jsx(s.code,{children:"placeholder"})," ",e.jsx(t,{color:"success",label:"New",size:"sm"})]}),`
`,e.jsx(s.p,{children:"New attribute (optional)."}),`
`,e.jsxs(s.p,{children:["You can use the new ",e.jsx(s.code,{children:"placeholder"})," attribute to obtain the same behavior as with input."]}),`
`,e.jsxs(s.p,{children:[e.jsx(s.code,{children:"step"})," ",e.jsx(t,{color:"success",label:"New",size:"sm"})]}),`
`,e.jsx(s.p,{children:"New attribute (optional)."}),`
`,e.jsxs(s.p,{children:["You can use the new ",e.jsx(s.code,{children:"step"})," attribute to obtain the same behavior as with input."]}),`
`,e.jsxs(s.p,{children:[e.jsx(s.code,{children:"value"})," ",e.jsx(t,{color:"success",label:"New",size:"sm"})]}),`
`,e.jsx(s.p,{children:"New attribute (optional)."}),`
`,e.jsxs(s.p,{children:["You can use the new ",e.jsx(s.code,{children:"value"})," attribute to obtain the same behavior as with input."]}),`
`,e.jsx(o,{label:"Slot changes",level:2}),`
`,e.jsxs(s.p,{children:[e.jsx(s.code,{children:"slot:minus"})," ",e.jsx(t,{color:"critical",label:"Removed",size:"sm"})]}),`
`,e.jsx(s.p,{children:"Has been removed."}),`
`,e.jsx(s.p,{children:"The slot minus is now automatically in the component with an ods-button"}),`
`,e.jsxs(s.p,{children:[e.jsx(s.code,{children:"slot:default"})," ",e.jsx(t,{color:"critical",label:"Removed",size:"sm"})]}),`
`,e.jsx(s.p,{children:"Has been removed."}),`
`,e.jsx(s.p,{children:"The slot is now automatically in the component with an ods-input"}),`
`,e.jsxs(s.p,{children:[e.jsx(s.code,{children:"slot:plus"})," ",e.jsx(t,{color:"critical",label:"Removed",size:"sm"})]}),`
`,e.jsx(s.p,{children:"Has been removed."}),`
`,e.jsx(s.p,{children:"The slot plus is now automatically in the component with an ods-button"}),`
`,e.jsx(o,{label:"Input attributes changes",level:2}),`
`,e.jsx(r,{kind:a.input,label:"Doc input",story:l.migrationFrom17}),`
`,e.jsx(o,{label:"Button attributes changes",level:2}),`
`,e.jsx(r,{kind:a.button,label:"Doc button",story:l.migrationFrom17}),`
`,e.jsx(o,{label:"Migration examples",level:2}),`
`,e.jsx(s.p,{children:"Disabled quantity:"}),`
`,e.jsx(n,{code:`
<osds-quantity disabled>
  <osds-button slot='minus' color='primary' size='sm'>
    <osds-icon size='sm' contrasted name='minus'></osds-icon>
  </osds-button>
  <osds-input type='number' color='primary'></osds-input>
  <osds-button slot='plus' color='primary' size='sm'>
    <osds-icon size='sm' contrasted name='plus'></osds-icon>
  </osds-button>
</osds-quantity>

<!-- is now -->

<ods-quantity is-disabled>
</ods-quantity>
`,dark:"true",language:"html"}),`
`,e.jsx(s.p,{children:"Slot quantity:"}),`
`,e.jsx(n,{code:`
<osds-quantity>
  <osds-button slot='minus' color='primary' size='sm'>
    <osds-icon size='sm' contrasted name='minus'></osds-icon>
  </osds-button>
  <osds-input type='number' color='primary'></osds-input>
  <osds-button slot='plus' color='primary' size='sm'>
    <osds-icon size='sm' contrasted name='plus'></osds-icon>
  </osds-button>
</osds-quantity>

<!-- is now -->

<ods-quantity>
</ods-quantity>
`,dark:"true",language:"html"})]})}function qe(i={}){const{wrapper:s}={...d(),...i.components};return s?e.jsx(s,{...i,children:e.jsx(c,{...i})}):c(i)}export{qe as default};
