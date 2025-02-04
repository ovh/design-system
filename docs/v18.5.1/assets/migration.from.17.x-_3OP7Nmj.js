import{j as e,M as a,d as s}from"./index-DQsySnuC.js";import{u as l}from"./index-Xj8pMhSr.js";import{O as n}from"./index-CihiY_f6.js";import{B as c}from"./button.stories-BNXw3-Qr.js";import{H as i}from"./Heading-DDc_MF2r.js";import"./iframe-DRtgxPEL.js";import"../sb-preview/runtime.js";import"./index-8AfNH5n5.js";import"./index-D-8MO0q_.js";import"./index-DrFu-skq.js";import"./ods-accordion2-Bgg69lRV.js";import"./index-DAZhnxgO.js";import"./icon-name-C6aMXAXT.js";import"./ods-icon2-Bl6f3POv.js";import"./ods-badge-tHc24Eg4.js";import"./ods-breadcrumb-item2-CoLTn2CF.js";import"./ods-link2-DDMr4sUm.js";import"./ods-button2-Bhm26DQr.js";import"./ods-spinner2-DCN2yKlT.js";import"./ods-card-B_VebKXk.js";import"./ods-checkbox2-BOuFx8yF.js";import"./dom-CO1DdTQY.js";import"./ods-clipboard2-NuJn2ry3.js";import"./ods-input2-B9cw61K_.js";import"./type-B5zI8QxY.js";import"./ods-tooltip2-BwzEvmuE.js";import"./overlay-KZpfSxWH.js";import"./ods-code2-bZeM2NI-.js";import"./ods-datepicker2-DwwUrg1C.js";import"./locale-NOa-Gxlr.js";import"./ods-divider-3cgmT4wP.js";import"./ods-divider2-Dc25YIYb.js";import"./ods-drawer2-DsENZFv4.js";import"./ods-file-upload2-CPd6D9Z5.js";import"./ods-progress-bar2-BuFm8qT0.js";import"./ods-form-field2-Tc9B1-rj.js";import"./ods-icon-NURRZ9Mf.js";import"./ods-link-BE9dMQzg.js";import"./ods-medium2-BB_NU63C.js";import"./ods-message-B9bD81Bu.js";import"./ods-modal2-CP36WQeg.js";import"./ods-pagination2-CotgNPzL.js";import"./ods-select2-B4wr0dem.js";import"./ods-password2-BQKXsiEd.js";import"./ods-phone-number2-D1K1HcDS.js";import"./ods-popover2-hre_XUC2.js";import"./ods-quantity2-DOjRn13r.js";import"./ods-radio2-BtBodUES.js";import"./ods-range2-BhwU834C.js";import"./ods-skeleton2-dZcgHYAN.js";import"./ods-switch-item2-m1p75_3x.js";import"./ods-tabs2-wJlXfoZt.js";import"./ods-table2-vWlGUOoj.js";import"./ods-tag2-Dj0-zHXw.js";import"./ods-text-CTeC-41B.js";import"./ods-textarea2-BHQdu6bK.js";import"./ods-timepicker2-2oCWgeQp.js";import"./ods-toggle2-DbSuYqWU.js";import"./index-DCBH0_Tl.js";import"./controls-DX883vx3.js";function r(o){const t={code:"code",li:"li",p:"p",ul:"ul",...l(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{of:c,name:"Migration From 17.x"}),`
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
