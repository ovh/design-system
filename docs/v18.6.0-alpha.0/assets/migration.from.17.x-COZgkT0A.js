import{j as e,M as p,d as n}from"./index-CMHv63WF.js";import{u as d}from"./index-CavMhwFB.js";import{O as t}from"./index-BDosBUxz.js";import{Q as m}from"./quantity.stories-BXar70Kc.js";import{H as o}from"./Heading-Drr0F75o.js";import{S as r,O as a,a as l}from"./StorybookLink-DyXIZpxe.js";import"./iframe-CW-8tKo2.js";import"../sb-preview/runtime.js";import"./index-8AfNH5n5.js";import"./index-D-8MO0q_.js";import"./index-DrFu-skq.js";import"./ods-accordion2-C_uqOg6Y.js";import"./index-DAZhnxgO.js";import"./icon-name-C6aMXAXT.js";import"./ods-icon2-DRPHarK1.js";import"./ods-badge-DLluvt0I.js";import"./ods-breadcrumb-item2-C_Ah5FZN.js";import"./ods-link2-CtVFUlMR.js";import"./ods-button2-dPaqs0uX.js";import"./ods-spinner2-CPyWCS2f.js";import"./ods-card-CsxtEQHf.js";import"./ods-checkbox2-CJl-a8ad.js";import"./dom-8hoR-urs.js";import"./ods-clipboard2-CewZJu-c.js";import"./ods-input2-C6KOqFAM.js";import"./type-B5zI8QxY.js";import"./ods-tooltip2-CW12aP9b.js";import"./overlay-KZpfSxWH.js";import"./ods-code2-BL2TW0HP.js";import"./ods-combobox2-BAtyPzTJ.js";import"./_commonjsHelpers-CLD5em3H.js";import"./debounce-DRefBDpX.js";import"./ods-tag2-Bb2BMy9d.js";import"./ods-datepicker2-CijAhCPy.js";import"./locale-NOa-Gxlr.js";import"./ods-divider-Dtiri0aY.js";import"./ods-divider2-yzIshch6.js";import"./ods-drawer2-DKhK7oOX.js";import"./ods-file-upload2-Ca3mZ5BD.js";import"./ods-progress-bar2-Dg_V5kiw.js";import"./ods-form-field2-BDYkM6lU.js";import"./ods-icon-DTp5PnPI.js";import"./ods-input-CCQ46ZEm.js";import"./ods-link-BCeMi6SV.js";import"./ods-medium2-BnayTic8.js";import"./ods-message-DuyDaLcv.js";import"./ods-modal2-DCK89o-L.js";import"./ods-pagination2-shUGU0gB.js";import"./ods-select2-CEKvSxa4.js";import"./ods-password2-D64-z8ym.js";import"./ods-phone-number2-BL58mHzY.js";import"./ods-popover2-mGbx5HiL.js";import"./ods-quantity2-7U22nj6z.js";import"./ods-radio2-DDJaSdNS.js";import"./ods-range2-wBjnlon-.js";import"./ods-skeleton2-B7sDasgF.js";import"./ods-switch-item2-D-SJNcDd.js";import"./ods-tabs2-ChMEr-fQ.js";import"./ods-table2-oe37kiP3.js";import"./ods-text-BO_pN8NQ.js";import"./ods-textarea2-BDOVTqwb.js";import"./ods-timepicker2-DVnCnUkw.js";import"./ods-toggle2-Bg02aln1.js";import"./controls-DX883vx3.js";import"./validityState-BuENXwQ9.js";import"./index-BLVG44ao.js";function c(i){const s={code:"code",p:"p",...d(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(p,{of:m,name:"Migration From 17.x"}),`
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
