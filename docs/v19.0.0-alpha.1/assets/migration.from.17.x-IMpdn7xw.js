import{j as e}from"./jsx-runtime-VM66peLj.js";import{useMDXComponents as c}from"./index-DQB45XCM.js";import{n as s,D as m}from"./ods-react-BwLnGFOk.js";import{M as l,S as n}from"./index-BtXuKPxx.js";import{I as i}from"./icon.stories-CNd6tBzY.js";import{H as a}from"./Heading-D0aj94cg.js";import{T as d}from"./TokenMigrationTable-CgJH3ZwE.js";import"./index-D_CmzhJ4.js";import"./index-ChzAxGiP.js";import"./index-CucsY3YN.js";import"./iframe-VOlI4tKJ.js";import"./index-CXQShRbs.js";import"./index-DrFu-skq.js";import"./icon-name-CmqPEXVL.js";import"./index-CkQHsVsO.js";import"./controls-BtiQQn1l.js";function o(t){const r={blockquote:"blockquote",code:"code",p:"p",strong:"strong",...c(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{of:i,name:"Migration From 17.x"}),`
`,e.jsx(a,{label:"Icon - migrate from v17 to v18",level:1}),`
`,e.jsx(a,{label:"Attributes changes",level:2}),`
`,e.jsxs(r.p,{children:[e.jsx(r.code,{children:"ariaName"})," ",e.jsx(s,{color:"critical",size:"sm",children:"Removed"})]}),`
`,e.jsx(r.p,{children:"Has been removed."}),`
`,e.jsxs(r.p,{children:["Use native ",e.jsx(m,{href:"https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-label",target:"_blank",children:"aria-label"})," instead."]}),`
`,e.jsxs(r.p,{children:[e.jsx(r.code,{children:"color"})," ",e.jsx(s,{color:"critical",size:"sm",children:"Removed"})]}),`
`,e.jsx(r.p,{children:"Has been removed."}),`
`,e.jsx(r.p,{children:"Icons are now font, they will by default have the same color as the current text."}),`
`,e.jsx(r.p,{children:"You can override this using a CSS class on the component directly."}),`
`,e.jsxs(r.p,{children:[e.jsx(r.code,{children:"contrasted"})," ",e.jsx(s,{color:"critical",size:"sm",children:"Removed"})]}),`
`,e.jsx(r.p,{children:"Has been removed."}),`
`,e.jsx(r.p,{children:"Icons are now font, they will by default have the same color as the current text."}),`
`,e.jsxs(r.p,{children:[e.jsx(r.code,{children:"hoverable"})," ",e.jsx(s,{color:"critical",size:"sm",children:"Removed"})]}),`
`,e.jsx(r.p,{children:"Has been removed."}),`
`,e.jsx(r.p,{children:"Interactive icon will be handled specifically by components that implements those interactions."}),`
`,e.jsxs(r.p,{children:[e.jsx(r.code,{children:"size"})," ",e.jsx(s,{color:"critical",size:"sm",children:"Removed"})]}),`
`,e.jsx(r.p,{children:"Has been removed."}),`
`,e.jsx(r.p,{children:"Icons are now font, they will by default have the same size as the current text."}),`
`,e.jsx(r.p,{children:"You can override this using a CSS class on the component directly."}),`
`,e.jsxs(r.blockquote,{children:[`
`,e.jsxs(r.p,{children:[e.jsx(r.strong,{children:"Warning:"}),`
Icons have been resized to fit entirely their bounding box.
Check your current icons and update their size accordingly.`]}),`
`]}),`
`,e.jsx(a,{label:"Migration examples",level:2}),`
`,e.jsx(r.p,{children:"Contrasted icon:"}),`
`,e.jsx(n,{code:`
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
`,e.jsx(r.p,{children:"Icon size:"}),`
`,e.jsx(n,{code:`
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
`,e.jsx(d,{items:[{formerName:"add",replacement:"Use **plus**",status:"updated"},{formerName:"arrow-transfer",replacement:"Use **arrow-left-right**",status:"updated"},{formerName:"bin",replacement:"Use **trash**",status:"updated"},{formerName:"cart",replacement:"Use **shopping-cart**",status:"updated"},{formerName:"chevron-up-down",replacement:"Use an empty space as default",status:"removed"},{formerName:"clock-wait",replacement:"Use **clock-time-four**",status:"updated"},{formerName:"close",replacement:"Use **xmark**",status:"updated"},{formerName:"copy",replacement:"Use **file-copy**",status:"updated"},{formerName:"ellipsis",replacement:"Use **ellipsis-horizontal**",status:"updated"},{formerName:"error",replacement:"Use **triangle-exclamation**",status:"updated"},{formerName:"eye-closed",replacement:"Use **eye-off**",status:"updated"},{formerName:"eye-open",replacement:"Use **eye**",status:"updated"},{formerName:"gear",replacement:"Use **cog**",status:"updated"},{formerName:"guides",replacement:"Use **book**",status:"updated"},{formerName:"hamburger",replacement:"Use **hamburger-menu**",status:"updated"},{formerName:"help",replacement:"Use **question**",status:"updated"},{formerName:"help-circle",replacement:"Use **circle-question**",status:"updated"},{formerName:"indeterminate",replacement:"Use **minus**",status:"updated"},{formerName:"info",replacement:"Use **circle-info**",status:"updated"},{formerName:"ok",replacement:"Use **check**",status:"updated"},{formerName:"ovh",replacement:"See [Logo](https://zeroheight.com/6fc8a63f7)",status:"removed"},{formerName:"remove",replacement:"Use **minus**",status:"updated"},{formerName:"settings",replacement:"Use **cog**",status:"updated"},{formerName:"shape-circle",replacement:"Use **star**",status:"updated"},{formerName:"shape-dot",replacement:"Use **star-full**",status:"removed"},{formerName:"sort",replacement:"Use an empty space as default",status:"removed"},{formerName:"sort-down",replacement:"Use **sort-alpha-down**, **sort-numeric-down** or **chevron-down**",status:"removed"},{formerName:"sort-up",replacement:"Use **sort-alpha-down**, **sort-numeric-down** or **chevron-down**",status:"removed"},{formerName:"success",replacement:"Use **check**",status:"updated"},{formerName:"success-circle",replacement:"Use **circle-check**",status:"updated"},{formerName:"time",replacement:"Use **clock-time-four**",status:"updated"},{formerName:"transfer",replacement:"Use **arrow-left-right**",status:"updated"},{formerName:"triangle-down",replacement:"Use **sort-alpha-down**, **sort-numeric-down** or **chevron-down**",status:"removed"},{formerName:"triangle-left",replacement:"Use **chevron-left**",status:"removed"},{formerName:"triangle-right",replacement:"Use **chevron-right**",status:"removed"},{formerName:"triangle-up",replacement:"Use **sort-alpha-up**, **sort-numeric-up** or **chevron-up**",status:"removed"},{formerName:"user",replacement:"Use **circle-user**",status:"updated"},{formerName:"warning",replacement:"Use **triangle-exclamation**",status:"updated"},{formerName:"warning-circle",replacement:"Use **triangle-exclamation**",status:"updated"}]})]})}function M(t={}){const{wrapper:r}={...c(),...t.components};return r?e.jsx(r,{...t,children:e.jsx(o,{...t})}):o(t)}export{M as default};
