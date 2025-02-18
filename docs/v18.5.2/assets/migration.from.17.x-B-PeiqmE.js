import{j as e,M as a,d as s}from"./index-s2XCIBmK.js";import{u as l}from"./index-BzRxuu7r.js";import{O as n}from"./index-OMpnLKmJ.js";import{B as c}from"./button.stories-CrXYRX-0.js";import{H as i}from"./Heading-DPkeex3C.js";import"./iframe-b7U1zSTi.js";import"../sb-preview/runtime.js";import"./index-8AfNH5n5.js";import"./index-D-8MO0q_.js";import"./index-DrFu-skq.js";import"./ods-accordion2-C2zw5EtX.js";import"./index-DAZhnxgO.js";import"./icon-name-C6aMXAXT.js";import"./ods-icon2-C2sSMg6h.js";import"./ods-badge-CMZ1G1-q.js";import"./ods-breadcrumb-item2-Chi8uW7w.js";import"./ods-link2-DhrEm8Nk.js";import"./ods-button2-DJxJiLcj.js";import"./ods-spinner2-CPyWCS2f.js";import"./ods-card-CsxtEQHf.js";import"./ods-checkbox2-D1rfq4Wo.js";import"./dom-CO1DdTQY.js";import"./ods-clipboard2-CWpjSCiO.js";import"./ods-input2-NhqVSkkH.js";import"./type-B5zI8QxY.js";import"./ods-tooltip2-CW12aP9b.js";import"./overlay-KZpfSxWH.js";import"./ods-code2-3QPYbtLQ.js";import"./ods-datepicker2-BYQpPxj0.js";import"./locale-NOa-Gxlr.js";import"./ods-divider-Dtiri0aY.js";import"./ods-divider2-yzIshch6.js";import"./ods-drawer2-DKhK7oOX.js";import"./ods-file-upload2-WcWZbv1U.js";import"./ods-progress-bar2-Dg_V5kiw.js";import"./ods-form-field2-BDYkM6lU.js";import"./ods-icon-DOZBIEJb.js";import"./ods-link-C3iAbK8i.js";import"./ods-medium2-BnayTic8.js";import"./ods-message-DErUZ_Xg.js";import"./ods-modal2-CLthqs1m.js";import"./ods-pagination2-Do5FFUNV.js";import"./ods-select2-uYxcgqp_.js";import"./ods-password2-YsAErLiV.js";import"./ods-phone-number2-Dku_7tcX.js";import"./ods-popover2-D0fTxPry.js";import"./ods-quantity2-Dc2INetT.js";import"./ods-radio2-NdDFmobW.js";import"./ods-range2-DVd4LCay.js";import"./ods-skeleton2-B7sDasgF.js";import"./ods-switch-item2-D-SJNcDd.js";import"./ods-tabs2-ChMEr-fQ.js";import"./ods-table2-oe37kiP3.js";import"./ods-tag2-CInySbKk.js";import"./ods-text-BO_pN8NQ.js";import"./ods-textarea2-BqL_D5sd.js";import"./ods-timepicker2-C6TMFSLy.js";import"./ods-toggle2-BgUL7nI_.js";import"./index-DCBH0_Tl.js";import"./controls-DX883vx3.js";function r(o){const t={code:"code",li:"li",p:"p",ul:"ul",...l(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{of:c,name:"Migration From 17.x"}),`
`,e.jsx(i,{label:"Button - migrate from v17 to v18",level:1}),`
`,e.jsx(i,{label:"Usage changes",level:2}),`
`,e.jsxs(t.p,{children:["The button can now only render an actual ",e.jsx(t.code,{children:"button"}),", not a link."]}),`
`,e.jsx(t.p,{children:"If you need to redirect on click on a button, you can either:"}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsx(t.li,{children:"handle the redirection on the click handler"}),`
`,e.jsx(t.li,{children:"wrap the button with your custom Link element"}),`
`]}),`
`,e.jsx(t.p,{children:"The button usage has changed a bit regarding content declaration."}),`
`,e.jsx(t.p,{children:"Previously, slots were used to allow any content to be put inside the button."}),`
`,e.jsx(t.p,{children:"The new design enforces the usage of only text as the main content, with an optional icon on the left side."}),`
`,e.jsxs(t.p,{children:["Therefore, slots have been replaced by two attributes: ",e.jsx(t.code,{children:"label"})," and ",e.jsx(t.code,{children:"icon"}),"."]}),`
`,e.jsx(s,{code:`
<osds-button>
  <span slot="start">
    <osds-icon name="close" contrasted></osds-icon>
  </span>
  My button
</osds-button>
`,dark:"true",language:"html"}),`
`,e.jsx(t.p,{children:"The same result would now be achieved using:"}),`
`,e.jsx(s,{code:`
<ods-button icon="xmark"
            label="My button">
</ods-button>
`,dark:"true",language:"html"}),`
`,e.jsx(i,{label:"Attributes changes",level:2}),`
`,e.jsxs(t.p,{children:[e.jsx(t.code,{children:"circle"})," ",e.jsx(n,{color:"critical",label:"Removed",size:"sm"})]}),`
`,e.jsx(t.p,{children:"Has been removed."}),`
`,e.jsx(t.p,{children:"This design is no longer part of the design system specification."}),`
`,e.jsx(t.p,{children:"If you need to render such button, please contact the design team."}),`
`,e.jsxs(t.p,{children:[e.jsx(t.code,{children:"contrasted"})," ",e.jsx(n,{color:"critical",label:"Removed",size:"sm"})]}),`
`,e.jsx(t.p,{children:"Has been removed."}),`
`,e.jsx(t.p,{children:"You can use the style customization to achieve the same result, until a new color get validated by the design team."}),`
`,e.jsxs(t.p,{children:[e.jsx(t.code,{children:"disabled"})," ",e.jsx(n,{color:"information",label:"Updated",size:"sm"})]}),`
`,e.jsx(t.p,{children:"Has been updated."}),`
`,e.jsxs(t.p,{children:["You can use the new ",e.jsx(t.code,{children:"isDisabled"})," attribute to obtain the same behavior."]}),`
`,e.jsxs(t.p,{children:["We did move from the usual ",e.jsx(t.code,{children:"disabled"})," attribute for two reasons:"]}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsx(t.li,{children:"to ensure consistency of boolean attribute naming across all components"}),`
`,e.jsxs(t.li,{children:["to ensure native behavior on disabled button, ",e.jsx(t.code,{children:"disabled"}),` is a native attribute that allows browsers to automatically
prevent some behavior (like click events, focus, ...). As we add custom feature that may enforce disabling the element,
like `,e.jsx(t.code,{children:"isLoading"}),`, we encounter conflicts between the web component attribute and the native one. Enforcing native
behavior is our main priority, so it is safer to separate our own attribute into a different one.`]}),`
`]}),`
`,e.jsxs(t.p,{children:[e.jsx(t.code,{children:"download"})," ",e.jsx(n,{color:"critical",label:"Removed",size:"sm"})]}),`
`,e.jsxs(t.p,{children:[e.jsx(t.code,{children:"href"})," ",e.jsx(n,{color:"critical",label:"Removed",size:"sm"})]}),`
`,e.jsxs(t.p,{children:[e.jsx(t.code,{children:"rel"})," ",e.jsx(n,{color:"critical",label:"Removed",size:"sm"})]}),`
`,e.jsxs(t.p,{children:[e.jsx(t.code,{children:"target"})," ",e.jsx(n,{color:"critical",label:"Removed",size:"sm"})]}),`
`,e.jsx(t.p,{children:"Have been removed."}),`
`,e.jsx(t.p,{children:"They're now irrelevant as the button cannot be rendered as a link anymore."}),`
`,e.jsxs(t.p,{children:[e.jsx(t.code,{children:"icon"})," ",e.jsx(n,{color:"success",label:"New",size:"sm"})]}),`
`,e.jsx(t.p,{children:"New attribute (optional)."}),`
`,e.jsx(t.p,{children:"Allow you to render an icon on the left side of the button."}),`
`,e.jsxs(t.p,{children:[e.jsx(t.code,{children:"isDisabled"})," ",e.jsx(n,{color:"success",label:"New",size:"sm"})]}),`
`,e.jsx(t.p,{children:"New attribute (optional)."}),`
`,e.jsx(t.p,{children:"Allow to you to make the button disabled."}),`
`,e.jsxs(t.p,{children:[e.jsx(t.code,{children:"isLoading"})," ",e.jsx(n,{color:"success",label:"New",size:"sm"})]}),`
`,e.jsx(t.p,{children:"New attribute (optional)."}),`
`,e.jsx(t.p,{children:"Allow you to render a spinner and make the button disabled, useful on asynchronous action to prevent multiple clicks."}),`
`,e.jsxs(t.p,{children:[e.jsx(t.code,{children:"label"})," ",e.jsx(n,{color:"success",label:"New",size:"sm"})]}),`
`,e.jsx(t.p,{children:"New attribute (required)."}),`
`,e.jsx(t.p,{children:"The label you want to render in the button."}),`
`,e.jsxs(t.p,{children:[e.jsx(t.code,{children:"textAlign"})," ",e.jsx(n,{color:"critical",label:"Removed",size:"sm"})]}),`
`,e.jsx(t.p,{children:"Has been removed."}),`
`,e.jsx(t.p,{children:"You can use the style customization to achieve the same result."}),`
`,e.jsx(i,{label:"Migration examples",level:2}),`
`,e.jsx(t.p,{children:"Basic button:"}),`
`,e.jsx(s,{code:`
<osds-button>
  My button
</osds-button>

<!-- is now -->

<ods-button label="My button">
</ods-button>
`,dark:"true",language:"html"}),`
`,e.jsx(t.p,{children:"Disabled button:"}),`
`,e.jsx(s,{code:`
<osds-button disabled>
  My button
</osds-button>

<!-- is now -->

<ods-button label="My button" is-disabled>
</ods-button>
`,dark:"true",language:"html"}),`
`,e.jsx(t.p,{children:"Icon button:"}),`
`,e.jsx(s,{code:`
<osds-button>
  <span slot="start">
    <osds-icon name="close" contrasted></osds-icon>
  </span>
  My button
</osds-button>

<!-- is now -->

<ods-button icon="xmark"
            label="My button">
</ods-button>
`,dark:"true",language:"html"}),`
`,e.jsx(t.p,{children:"Text align:"}),`
`,e.jsx(s,{code:`
<osds-button text-align="center">
  My button
</osds-button>

<!-- is now -->

<ods-button label="My button" class="my-button">
</ods-button>

<style>
  .my-button::part(button) {
    display: inline-block;
    text-align: center;
  }
</style>
`,dark:"true",language:"html"})]})}function xe(o={}){const{wrapper:t}={...l(),...o.components};return t?e.jsx(t,{...o,children:e.jsx(r,{...o})}):r(o)}export{xe as default};
