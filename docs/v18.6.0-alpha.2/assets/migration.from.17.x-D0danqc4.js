import{j as e,M as c,d as r}from"./index-Cg27MLKJ.js";import{u as d}from"./index-CRYdQg8Y.js";import{O as s}from"./index-DpXZhc7f.js";import{S as a}from"./switch.stories-BRIO_TpP.js";import{H as o}from"./Heading-J7HCFxl6.js";import"./iframe-J0ZUQmQ0.js";import"../sb-preview/runtime.js";import"./index-8AfNH5n5.js";import"./index-D-8MO0q_.js";import"./index-DrFu-skq.js";import"./ods-accordion2-C_uqOg6Y.js";import"./index-DAZhnxgO.js";import"./icon-name-C6aMXAXT.js";import"./ods-icon2-DRPHarK1.js";import"./ods-badge-CjbpLGl8.js";import"./ods-breadcrumb-item2-C_Ah5FZN.js";import"./ods-link2-CtVFUlMR.js";import"./ods-button2-dPaqs0uX.js";import"./ods-spinner2-CPyWCS2f.js";import"./ods-card-CsxtEQHf.js";import"./ods-checkbox2-CJl-a8ad.js";import"./dom-8hoR-urs.js";import"./ods-clipboard2-CewZJu-c.js";import"./ods-input2-C6KOqFAM.js";import"./type-B5zI8QxY.js";import"./ods-tooltip2-CW12aP9b.js";import"./overlay-KZpfSxWH.js";import"./ods-code2-BL2TW0HP.js";import"./ods-combobox2-CyL0bVv9.js";import"./_commonjsHelpers-CLD5em3H.js";import"./debounce-DRefBDpX.js";import"./ods-tag2-Bb2BMy9d.js";import"./ods-datepicker2-CijAhCPy.js";import"./locale-NOa-Gxlr.js";import"./ods-divider-Dtiri0aY.js";import"./ods-divider2-yzIshch6.js";import"./ods-drawer2-DKhK7oOX.js";import"./ods-file-upload2-Ca3mZ5BD.js";import"./ods-progress-bar2-Dg_V5kiw.js";import"./ods-form-field2-BDYkM6lU.js";import"./ods-icon-DTp5PnPI.js";import"./ods-input-CCQ46ZEm.js";import"./ods-link-BCeMi6SV.js";import"./ods-medium2-BnayTic8.js";import"./ods-message-DuyDaLcv.js";import"./ods-modal2-DCK89o-L.js";import"./ods-pagination2-shUGU0gB.js";import"./ods-select2-CEKvSxa4.js";import"./ods-password2-D64-z8ym.js";import"./ods-phone-number2-BL58mHzY.js";import"./ods-popover2-mGbx5HiL.js";import"./ods-quantity2-7U22nj6z.js";import"./ods-radio2-DDJaSdNS.js";import"./ods-range2-wBjnlon-.js";import"./ods-skeleton2-B7sDasgF.js";import"./ods-switch-item2-D-SJNcDd.js";import"./ods-tabs2-ChMEr-fQ.js";import"./ods-table2-oe37kiP3.js";import"./ods-text-BO_pN8NQ.js";import"./ods-textarea2-BDOVTqwb.js";import"./ods-timepicker2-DVnCnUkw.js";import"./ods-toggle2-Bg02aln1.js";import"./index-CGJBSJl7.js";import"./controls-DX883vx3.js";import"./validityState-BuENXwQ9.js";function m(t){const i={code:"code",p:"p",...d(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(c,{of:a,name:"Migration From 17.x"}),`
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
