import{j as e,M as i,d as a}from"./index-CCbL8veO.js";import{u as m}from"./index-Cq3PbNHF.js";import{O as o}from"./index-uzYzEmTV.js";import{I as c}from"./icon.stories-CT1v9X3b.js";import{H as s}from"./Heading-DN6FdGMk.js";import{T as l}from"./TokenMigrationTable-B30DVwPS.js";import"./iframe-DU4SvIHv.js";import"../sb-preview/runtime.js";import"./index-8AfNH5n5.js";import"./index-D-8MO0q_.js";import"./index-DrFu-skq.js";import"./ods-accordion2-C2zw5EtX.js";import"./index-DAZhnxgO.js";import"./icon-name-C6aMXAXT.js";import"./ods-icon2-C2sSMg6h.js";import"./ods-badge-CMZ1G1-q.js";import"./ods-breadcrumb-item2-Chi8uW7w.js";import"./ods-link2-DhrEm8Nk.js";import"./ods-button2-DJxJiLcj.js";import"./ods-spinner2-CPyWCS2f.js";import"./ods-card-CsxtEQHf.js";import"./ods-checkbox2-D1rfq4Wo.js";import"./dom-CO1DdTQY.js";import"./ods-clipboard2-PjbiunMl.js";import"./ods-input2-BVKbybMU.js";import"./type-B5zI8QxY.js";import"./ods-tooltip2-CW12aP9b.js";import"./overlay-KZpfSxWH.js";import"./ods-code2-CPtqO8K9.js";import"./ods-datepicker2-CHJb_Dii.js";import"./locale-NOa-Gxlr.js";import"./ods-divider-Dtiri0aY.js";import"./ods-divider2-yzIshch6.js";import"./ods-drawer2-DKhK7oOX.js";import"./ods-file-upload2-WcWZbv1U.js";import"./ods-progress-bar2-Dg_V5kiw.js";import"./ods-form-field2-BDYkM6lU.js";import"./ods-icon-DOZBIEJb.js";import"./ods-link-C3iAbK8i.js";import"./ods-medium2-BnayTic8.js";import"./ods-message-DErUZ_Xg.js";import"./ods-modal2-CLthqs1m.js";import"./ods-pagination2-CxhEcubt.js";import"./ods-select2-D2fKxfqw.js";import"./ods-password2-DNFrl9vd.js";import"./ods-phone-number2-qOf9h3xC.js";import"./ods-popover2-D0fTxPry.js";import"./ods-quantity2-DSK2z9QA.js";import"./ods-radio2-NdDFmobW.js";import"./ods-range2-DVd4LCay.js";import"./ods-skeleton2-B7sDasgF.js";import"./ods-switch-item2-D-SJNcDd.js";import"./ods-tabs2-ChMEr-fQ.js";import"./ods-table2-oe37kiP3.js";import"./ods-tag2-CInySbKk.js";import"./ods-text-BO_pN8NQ.js";import"./ods-textarea2-BJL14TBM.js";import"./ods-timepicker2-4lQj55gq.js";import"./ods-toggle2-BgUL7nI_.js";import"./index-DCBH0_Tl.js";import"./controls-DX883vx3.js";function n(r){const t={blockquote:"blockquote",code:"code",p:"p",strong:"strong",...m(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{of:c,name:"Migration From 17.x"}),`
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
