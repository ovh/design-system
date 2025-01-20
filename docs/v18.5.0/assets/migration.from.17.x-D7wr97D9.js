import{j as e,M as m,d as o}from"./index-aSJOi-xY.js";import{u as c}from"./index-D_oymSD0.js";import{O as s}from"./index-DduIf26o.js";import{I as l}from"./icon.stories-Bu6GME9m.js";import{H as a}from"./Heading-fUBW5LMg.js";import{T as i}from"./TokenMigrationTable-BXCmQSQb.js";import"./iframe-Cjn0x15a.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-D-8MO0q_.js";import"./index-DX_4BEHg.js";import"./index-DrFu-skq.js";import"./index-B1WyGMUD.js";import"./controls-DX883vx3.js";function n(r){const t={blockquote:"blockquote",code:"code",p:"p",strong:"strong",...c(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(m,{of:l,name:"Migration From 17.x"}),`
`,e.jsx(a,{label:"Icon - migrate from v17 to v18",level:1}),`
`,e.jsx(a,{label:"Attributes changes",level:2}),`
`,e.jsxs(t.p,{children:[e.jsx(t.code,{children:"ariaName"})," ",e.jsx(s,{color:"information",label:"Updated",size:"sm"})]}),`
`,e.jsx(t.p,{children:"Has been updated."}),`
`,e.jsxs(t.p,{children:["You can use the new ",e.jsx(t.code,{children:"alt"})," attribute to obtain the same behavior."]}),`
`,e.jsxs(t.p,{children:[e.jsx(t.code,{children:"color"})," ",e.jsx(s,{color:"critical",label:"Removed",size:"sm"})]}),`
`,e.jsx(t.p,{children:"Has been removed."}),`
`,e.jsx(t.p,{children:"Icons are now font, they will by default have the same color as the current text."}),`
`,e.jsx(t.p,{children:"You can override this using a CSS class on the component directly."}),`
`,e.jsxs(t.p,{children:[e.jsx(t.code,{children:"contrasted"})," ",e.jsx(s,{color:"critical",label:"Removed",size:"sm"})]}),`
`,e.jsx(t.p,{children:"Has been removed."}),`
`,e.jsx(t.p,{children:"Icons are now font, they will by default have the same color as the current text."}),`
`,e.jsxs(t.p,{children:[e.jsx(t.code,{children:"hoverable"})," ",e.jsx(s,{color:"critical",label:"Removed",size:"sm"})]}),`
`,e.jsx(t.p,{children:"Has been removed."}),`
`,e.jsx(t.p,{children:"Interactive icon will be handled specifically by components that implements those interactions."}),`
`,e.jsxs(t.p,{children:[e.jsx(t.code,{children:"size"})," ",e.jsx(s,{color:"critical",label:"Removed",size:"sm"})]}),`
`,e.jsx(t.p,{children:"Has been removed."}),`
`,e.jsx(t.p,{children:"Icons are now font, they will by default have the same size as the current text."}),`
`,e.jsx(t.p,{children:"You can override this using a CSS class on the component directly."}),`
`,e.jsxs(t.blockquote,{children:[`
`,e.jsxs(t.p,{children:[e.jsx(t.strong,{children:"Warning:"}),`
Icons have been resized to fit entirely their bounding box.
Check your current icons and update their size accordingly.`]}),`
`]}),`
`,e.jsx(a,{label:"Migration examples",level:2}),`
`,e.jsx(t.p,{children:"Contrasted icon:"}),`
`,e.jsx(o,{code:`
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
`,e.jsx(o,{code:`
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
`,e.jsx(a,{label:"Icons changes",level:2}),`
`,e.jsx(i,{items:[{formerName:"add",replacement:"Use **plus**",status:"updated"},{formerName:"arrow-transfer",replacement:"Use **arrow-left-right**",status:"updated"},{formerName:"bin",replacement:"Use **trash**",status:"updated"},{formerName:"cart",replacement:"Use **shopping-cart**",status:"updated"},{formerName:"chevron-up-down",replacement:"Use an empty space as default",status:"removed"},{formerName:"clock-wait",replacement:"Use **clock-time-four**",status:"updated"},{formerName:"close",replacement:"Use **xmark**",status:"updated"},{formerName:"copy",replacement:"Use **file-copy**",status:"updated"},{formerName:"ellipsis",replacement:"Use **ellipsis-horizontal**",status:"updated"},{formerName:"error",replacement:"Use **triangle-exclamation**",status:"updated"},{formerName:"eye-closed",replacement:"Use **eye-off**",status:"updated"},{formerName:"eye-open",replacement:"Use **eye**",status:"updated"},{formerName:"gear",replacement:"Use **cog**",status:"updated"},{formerName:"guides",replacement:"Use **book**",status:"updated"},{formerName:"hamburger",replacement:"Use **hamburger-menu**",status:"updated"},{formerName:"help",replacement:"Use **question**",status:"updated"},{formerName:"help-circle",replacement:"Use **circle-question**",status:"updated"},{formerName:"indeterminate",replacement:"Use **minus**",status:"updated"},{formerName:"info",replacement:"Use **circle-info**",status:"updated"},{formerName:"ok",replacement:"Use **check**",status:"updated"},{formerName:"ovh",replacement:"See [Logo](https://zeroheight.com/6fc8a63f7)",status:"removed"},{formerName:"remove",replacement:"Use **minus**",status:"updated"},{formerName:"settings",replacement:"Use **cog**",status:"updated"},{formerName:"shape-circle",replacement:"Use **star**",status:"updated"},{formerName:"shape-dot",replacement:"Use **star-full**",status:"removed"},{formerName:"sort",replacement:"Use an empty space as default",status:"removed"},{formerName:"sort-down",replacement:"Use **sort-alpha-down**, **sort-numeric-down** or **chevron-down**",status:"removed"},{formerName:"sort-up",replacement:"Use **sort-alpha-down**, **sort-numeric-down** or **chevron-down**",status:"removed"},{formerName:"success",replacement:"Use **check**",status:"updated"},{formerName:"success-circle",replacement:"Use **circle-check**",status:"updated"},{formerName:"time",replacement:"Use **clock-time-four**",status:"updated"},{formerName:"transfer",replacement:"Use **arrow-left-right**",status:"updated"},{formerName:"triangle-down",replacement:"Use **sort-alpha-down**, **sort-numeric-down** or **chevron-down**",status:"removed"},{formerName:"triangle-left",replacement:"Use **chevron-left**",status:"removed"},{formerName:"triangle-right",replacement:"Use **chevron-right**",status:"removed"},{formerName:"triangle-up",replacement:"Use **sort-alpha-up**, **sort-numeric-up** or **chevron-up**",status:"removed"},{formerName:"user",replacement:"Use **circle-user**",status:"updated"},{formerName:"warning",replacement:"Use **triangle-exclamation**",status:"updated"},{formerName:"warning-circle",replacement:"Use **triangle-exclamation**",status:"updated"}]})]})}function k(r={}){const{wrapper:t}={...c(),...r.components};return t?e.jsx(t,{...r,children:e.jsx(n,{...r})}):n(r)}export{k as default};
