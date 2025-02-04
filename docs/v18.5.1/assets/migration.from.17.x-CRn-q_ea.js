import{j as e,M as c,d as r}from"./index-DQsySnuC.js";import{u as d}from"./index-Xj8pMhSr.js";import{O as s}from"./index-CihiY_f6.js";import{S as a}from"./switch.stories-CSkrI5KN.js";import{H as o}from"./Heading-DDc_MF2r.js";import"./iframe-DRtgxPEL.js";import"../sb-preview/runtime.js";import"./index-8AfNH5n5.js";import"./index-D-8MO0q_.js";import"./index-DrFu-skq.js";import"./ods-accordion2-Bgg69lRV.js";import"./index-DAZhnxgO.js";import"./icon-name-C6aMXAXT.js";import"./ods-icon2-Bl6f3POv.js";import"./ods-badge-tHc24Eg4.js";import"./ods-breadcrumb-item2-CoLTn2CF.js";import"./ods-link2-DDMr4sUm.js";import"./ods-button2-Bhm26DQr.js";import"./ods-spinner2-DCN2yKlT.js";import"./ods-card-B_VebKXk.js";import"./ods-checkbox2-BOuFx8yF.js";import"./dom-CO1DdTQY.js";import"./ods-clipboard2-NuJn2ry3.js";import"./ods-input2-B9cw61K_.js";import"./type-B5zI8QxY.js";import"./ods-tooltip2-BwzEvmuE.js";import"./overlay-KZpfSxWH.js";import"./ods-code2-bZeM2NI-.js";import"./ods-datepicker2-DwwUrg1C.js";import"./locale-NOa-Gxlr.js";import"./ods-divider-3cgmT4wP.js";import"./ods-divider2-Dc25YIYb.js";import"./ods-drawer2-DsENZFv4.js";import"./ods-file-upload2-CPd6D9Z5.js";import"./ods-progress-bar2-BuFm8qT0.js";import"./ods-form-field2-Tc9B1-rj.js";import"./ods-icon-NURRZ9Mf.js";import"./ods-link-BE9dMQzg.js";import"./ods-medium2-BB_NU63C.js";import"./ods-message-B9bD81Bu.js";import"./ods-modal2-CP36WQeg.js";import"./ods-pagination2-CotgNPzL.js";import"./ods-select2-B4wr0dem.js";import"./ods-password2-BQKXsiEd.js";import"./ods-phone-number2-D1K1HcDS.js";import"./ods-popover2-hre_XUC2.js";import"./ods-quantity2-DOjRn13r.js";import"./ods-radio2-BtBodUES.js";import"./ods-range2-BhwU834C.js";import"./ods-skeleton2-dZcgHYAN.js";import"./ods-switch-item2-m1p75_3x.js";import"./ods-tabs2-wJlXfoZt.js";import"./ods-table2-vWlGUOoj.js";import"./ods-tag2-Dj0-zHXw.js";import"./ods-text-CTeC-41B.js";import"./ods-textarea2-BHQdu6bK.js";import"./ods-timepicker2-2oCWgeQp.js";import"./ods-toggle2-DbSuYqWU.js";import"./index-DCBH0_Tl.js";import"./controls-DX883vx3.js";import"./validityState-BuENXwQ9.js";function m(t){const i={code:"code",p:"p",...d(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(c,{of:a,name:"Migration From 17.x"}),`
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
`,dark:"true",language:"html"})]})}function je(t={}){const{wrapper:i}={...d(),...t.components};return i?e.jsx(i,{...t,children:e.jsx(m,{...t})}):m(t)}export{je as default};
