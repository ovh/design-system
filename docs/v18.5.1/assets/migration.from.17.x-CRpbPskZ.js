import{j as e,M as i,d as a}from"./index-DQsySnuC.js";import{u as m}from"./index-Xj8pMhSr.js";import{O as o}from"./index-CihiY_f6.js";import{I as c}from"./icon.stories-wAYbUYw9.js";import{H as s}from"./Heading-DDc_MF2r.js";import{T as l}from"./TokenMigrationTable-CoYue6bu.js";import"./iframe-DRtgxPEL.js";import"../sb-preview/runtime.js";import"./index-8AfNH5n5.js";import"./index-D-8MO0q_.js";import"./index-DrFu-skq.js";import"./ods-accordion2-Bgg69lRV.js";import"./index-DAZhnxgO.js";import"./icon-name-C6aMXAXT.js";import"./ods-icon2-Bl6f3POv.js";import"./ods-badge-tHc24Eg4.js";import"./ods-breadcrumb-item2-CoLTn2CF.js";import"./ods-link2-DDMr4sUm.js";import"./ods-button2-Bhm26DQr.js";import"./ods-spinner2-DCN2yKlT.js";import"./ods-card-B_VebKXk.js";import"./ods-checkbox2-BOuFx8yF.js";import"./dom-CO1DdTQY.js";import"./ods-clipboard2-NuJn2ry3.js";import"./ods-input2-B9cw61K_.js";import"./type-B5zI8QxY.js";import"./ods-tooltip2-BwzEvmuE.js";import"./overlay-KZpfSxWH.js";import"./ods-code2-bZeM2NI-.js";import"./ods-datepicker2-DwwUrg1C.js";import"./locale-NOa-Gxlr.js";import"./ods-divider-3cgmT4wP.js";import"./ods-divider2-Dc25YIYb.js";import"./ods-drawer2-DsENZFv4.js";import"./ods-file-upload2-CPd6D9Z5.js";import"./ods-progress-bar2-BuFm8qT0.js";import"./ods-form-field2-Tc9B1-rj.js";import"./ods-icon-NURRZ9Mf.js";import"./ods-link-BE9dMQzg.js";import"./ods-medium2-BB_NU63C.js";import"./ods-message-B9bD81Bu.js";import"./ods-modal2-CP36WQeg.js";import"./ods-pagination2-CotgNPzL.js";import"./ods-select2-B4wr0dem.js";import"./ods-password2-BQKXsiEd.js";import"./ods-phone-number2-D1K1HcDS.js";import"./ods-popover2-hre_XUC2.js";import"./ods-quantity2-DOjRn13r.js";import"./ods-radio2-BtBodUES.js";import"./ods-range2-BhwU834C.js";import"./ods-skeleton2-dZcgHYAN.js";import"./ods-switch-item2-m1p75_3x.js";import"./ods-tabs2-wJlXfoZt.js";import"./ods-table2-vWlGUOoj.js";import"./ods-tag2-Dj0-zHXw.js";import"./ods-text-CTeC-41B.js";import"./ods-textarea2-BHQdu6bK.js";import"./ods-timepicker2-2oCWgeQp.js";import"./ods-toggle2-DbSuYqWU.js";import"./index-DCBH0_Tl.js";import"./controls-DX883vx3.js";function n(r){const t={blockquote:"blockquote",code:"code",p:"p",strong:"strong",...m(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{of:c,name:"Migration From 17.x"}),`
`,e.jsx(s,{label:"Icon - migrate from v17 to v18",level:1}),`
`,e.jsx(s,{label:"Attributes changes",level:2}),`
`,e.jsxs(t.p,{children:[e.jsx(t.code,{children:"ariaName"})," ",e.jsx(o,{color:"information",label:"Updated",size:"sm"})]}),`
`,e.jsx(t.p,{children:"Has been updated."}),`
`,e.jsxs(t.p,{children:["You can use the new ",e.jsx(t.code,{children:"alt"})," attribute to obtain the same behavior."]}),`
`,e.jsxs(t.p,{children:[e.jsx(t.code,{children:"color"})," ",e.jsx(o,{color:"critical",label:"Removed",size:"sm"})]}),`
`,e.jsx(t.p,{children:"Has been removed."}),`
`,e.jsx(t.p,{children:"Icons are now font, they will by default have the same color as the current text."}),`
`,e.jsx(t.p,{children:"You can override this using a CSS class on the component directly."}),`
`,e.jsxs(t.p,{children:[e.jsx(t.code,{children:"contrasted"})," ",e.jsx(o,{color:"critical",label:"Removed",size:"sm"})]}),`
`,e.jsx(t.p,{children:"Has been removed."}),`
`,e.jsx(t.p,{children:"Icons are now font, they will by default have the same color as the current text."}),`
`,e.jsxs(t.p,{children:[e.jsx(t.code,{children:"hoverable"})," ",e.jsx(o,{color:"critical",label:"Removed",size:"sm"})]}),`
`,e.jsx(t.p,{children:"Has been removed."}),`
`,e.jsx(t.p,{children:"Interactive icon will be handled specifically by components that implements those interactions."}),`
`,e.jsxs(t.p,{children:[e.jsx(t.code,{children:"size"})," ",e.jsx(o,{color:"critical",label:"Removed",size:"sm"})]}),`
`,e.jsx(t.p,{children:"Has been removed."}),`
`,e.jsx(t.p,{children:"Icons are now font, they will by default have the same size as the current text."}),`
`,e.jsx(t.p,{children:"You can override this using a CSS class on the component directly."}),`
`,e.jsxs(t.blockquote,{children:[`
`,e.jsxs(t.p,{children:[e.jsx(t.strong,{children:"Warning:"}),`
Icons have been resized to fit entirely their bounding box.
Check your current icons and update their size accordingly.`]}),`
`]}),`
`,e.jsx(s,{label:"Migration examples",level:2}),`
`,e.jsx(t.p,{children:"Contrasted icon:"}),`
`,e.jsx(a,{code:`
<osds-icon contrasted
          name="warning">
</osds-icon>

<!-- is now -->

<ods-icon class="custom"
          name="warning-triangle">
</ods-icon>

<style>
  .custom {
    color: #fff;
  }
</style>
`,dark:"true",language:"html"}),`
`,e.jsx(t.p,{children:"Icon size:"}),`
`,e.jsx(a,{code:`
<osds-icon name="warning"
          size="xl">
</osds-icon>

<!-- is now -->

<ods-icon class="custom"
          name="warning-triangle">
</ods-icon>

<style>
  .custom {
    font-size: 48px;
  }
</style>
`,dark:"true",language:"html"}),`
`,e.jsx(s,{label:"Icons changes",level:2}),`
`,e.jsx(l,{items:[{formerName:"add",replacement:"Use **plus**",status:"updated"},{formerName:"arrow-transfer",replacement:"Use **arrow-left-right**",status:"updated"},{formerName:"bin",replacement:"Use **trash**",status:"updated"},{formerName:"cart",replacement:"Use **shopping-cart**",status:"updated"},{formerName:"chevron-up-down",replacement:"Use an empty space as default",status:"removed"},{formerName:"clock-wait",replacement:"Use **clock-time-four**",status:"updated"},{formerName:"close",replacement:"Use **xmark**",status:"updated"},{formerName:"copy",replacement:"Use **file-copy**",status:"updated"},{formerName:"ellipsis",replacement:"Use **ellipsis-horizontal**",status:"updated"},{formerName:"error",replacement:"Use **triangle-exclamation**",status:"updated"},{formerName:"eye-closed",replacement:"Use **eye-off**",status:"updated"},{formerName:"eye-open",replacement:"Use **eye**",status:"updated"},{formerName:"gear",replacement:"Use **cog**",status:"updated"},{formerName:"guides",replacement:"Use **book**",status:"updated"},{formerName:"hamburger",replacement:"Use **hamburger-menu**",status:"updated"},{formerName:"help",replacement:"Use **question**",status:"updated"},{formerName:"help-circle",replacement:"Use **circle-question**",status:"updated"},{formerName:"indeterminate",replacement:"Use **minus**",status:"updated"},{formerName:"info",replacement:"Use **circle-info**",status:"updated"},{formerName:"ok",replacement:"Use **check**",status:"updated"},{formerName:"ovh",replacement:"See [Logo](https://zeroheight.com/6fc8a63f7)",status:"removed"},{formerName:"remove",replacement:"Use **minus**",status:"updated"},{formerName:"settings",replacement:"Use **cog**",status:"updated"},{formerName:"shape-circle",replacement:"Use **star**",status:"updated"},{formerName:"shape-dot",replacement:"Use **star-full**",status:"removed"},{formerName:"sort",replacement:"Use an empty space as default",status:"removed"},{formerName:"sort-down",replacement:"Use **sort-alpha-down**, **sort-numeric-down** or **chevron-down**",status:"removed"},{formerName:"sort-up",replacement:"Use **sort-alpha-down**, **sort-numeric-down** or **chevron-down**",status:"removed"},{formerName:"success",replacement:"Use **check**",status:"updated"},{formerName:"success-circle",replacement:"Use **circle-check**",status:"updated"},{formerName:"time",replacement:"Use **clock-time-four**",status:"updated"},{formerName:"transfer",replacement:"Use **arrow-left-right**",status:"updated"},{formerName:"triangle-down",replacement:"Use **sort-alpha-down**, **sort-numeric-down** or **chevron-down**",status:"removed"},{formerName:"triangle-left",replacement:"Use **chevron-left**",status:"removed"},{formerName:"triangle-right",replacement:"Use **chevron-right**",status:"removed"},{formerName:"triangle-up",replacement:"Use **sort-alpha-up**, **sort-numeric-up** or **chevron-up**",status:"removed"},{formerName:"user",replacement:"Use **circle-user**",status:"updated"},{formerName:"warning",replacement:"Use **triangle-exclamation**",status:"updated"},{formerName:"warning-circle",replacement:"Use **triangle-exclamation**",status:"updated"}]})]})}function je(r={}){const{wrapper:t}={...m(),...r.components};return t?e.jsx(t,{...r,children:e.jsx(n,{...r})}):n(r)}export{je as default};
