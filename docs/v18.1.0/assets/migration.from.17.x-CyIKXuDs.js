import{j as e}from"./jsx-runtime-vK1CujOl.js";import{u as r}from"./index-CB7mz5IJ.js";import{O as t}from"./index-CONup0N6.js";import{M as a,d as s}from"./index-Bd2Jnm8T.js";import{B as c}from"./button.stories-CDmkwNpC.js";import{H as i}from"./Heading-oJ6nNH90.js";import"./iframe-Lgv0C8F1.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-B_J8iUie.js";import"./index-DX_4BEHg.js";import"./index-DrFu-skq.js";import"./index-BNPjhb5w.js";import"./lit-html-D-ZEPr28.js";import"./controls-DpsgTNdU.js";function l(o){const n={code:"code",li:"li",p:"p",ul:"ul",...r(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{of:c,name:"Migration From 17.x"}),`
`,e.jsx(i,{label:"Button - migrate from v17 to v18",level:1}),`
`,e.jsx(i,{label:"Usage changes",level:2}),`
`,e.jsxs(n.p,{children:["The button can now only render an actual ",e.jsx(n.code,{children:"button"}),", not a link."]}),`
`,e.jsx(n.p,{children:"If you need to redirect on click on a button, you can either:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"handle the redirection on the click handler"}),`
`,e.jsx(n.li,{children:"wrap the button with your custom Link element"}),`
`]}),`
`,e.jsx(n.p,{children:"The button usage has changed a bit regarding content declaration."}),`
`,e.jsx(n.p,{children:"Previously, slots were used to allow any content to be put inside the button."}),`
`,e.jsx(n.p,{children:"The new design enforces the usage of only text as the main content, with an optional icon on the left side."}),`
`,e.jsxs(n.p,{children:["Therefore, slots have been replaced by two attributes: ",e.jsx(n.code,{children:"label"})," and ",e.jsx(n.code,{children:"icon"}),"."]}),`
`,e.jsx(s,{code:`
<osds-button>
  <span slot="start">
    <osds-icon name="close" contrasted></osds-icon>
  </span>
  My button
</osds-button>
`,dark:"true",language:"html"}),`
`,e.jsx(n.p,{children:"The same result would now be achieved using:"}),`
`,e.jsx(s,{code:`
<ods-button icon="xmark"
            label="My button">
</ods-button>
`,dark:"true",language:"html"}),`
`,e.jsx(i,{label:"Attributes changes",level:2}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"circle"})," ",e.jsx(t,{color:"critical",label:"Removed",size:"sm"})]}),`
`,e.jsx(n.p,{children:"Has been removed."}),`
`,e.jsx(n.p,{children:"This design is no longer part of the design system specification."}),`
`,e.jsx(n.p,{children:"If you need to render such button, please contact the design team."}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"contrasted"})," ",e.jsx(t,{color:"critical",label:"Removed",size:"sm"})]}),`
`,e.jsx(n.p,{children:"Has been removed."}),`
`,e.jsx(n.p,{children:"You can use the style customization to achieve the same result, until a new color get validated by the design team."}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"disabled"})," ",e.jsx(t,{color:"information",label:"Updated",size:"sm"})]}),`
`,e.jsx(n.p,{children:"Has been updated."}),`
`,e.jsxs(n.p,{children:["You can use the new ",e.jsx(n.code,{children:"isDisabled"})," attribute to obtain the same behavior."]}),`
`,e.jsxs(n.p,{children:["We did move from the usual ",e.jsx(n.code,{children:"disabled"})," attribute for two reasons:"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"to ensure consistency of boolean attribute naming across all components"}),`
`,e.jsxs(n.li,{children:["to ensure native behavior on disabled button, ",e.jsx(n.code,{children:"disabled"}),` is a native attribute that allows browsers to automatically
prevent some behavior (like click events, focus, ...). As we add custom feature that may enforce disabling the element,
like `,e.jsx(n.code,{children:"isLoading"}),`, we encounter conflicts between the web component attribute and the native one. Enforcing native
behavior is our main priority, so it is safer to separate our own attribute into a different one.`]}),`
`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"download"})," ",e.jsx(t,{color:"critical",label:"Removed",size:"sm"})]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"href"})," ",e.jsx(t,{color:"critical",label:"Removed",size:"sm"})]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"rel"})," ",e.jsx(t,{color:"critical",label:"Removed",size:"sm"})]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"target"})," ",e.jsx(t,{color:"critical",label:"Removed",size:"sm"})]}),`
`,e.jsx(n.p,{children:"Have been removed."}),`
`,e.jsx(n.p,{children:"They're now irrelevant as the button cannot be rendered as a link anymore."}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"icon"})," ",e.jsx(t,{color:"success",label:"New",size:"sm"})]}),`
`,e.jsx(n.p,{children:"New attribute (optional)."}),`
`,e.jsx(n.p,{children:"Allow you to render an icon on the left side of the button."}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"isDisabled"})," ",e.jsx(t,{color:"success",label:"New",size:"sm"})]}),`
`,e.jsx(n.p,{children:"New attribute (optional)."}),`
`,e.jsx(n.p,{children:"Allow to you to make the button disabled."}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"isLoading"})," ",e.jsx(t,{color:"success",label:"New",size:"sm"})]}),`
`,e.jsx(n.p,{children:"New attribute (optional)."}),`
`,e.jsx(n.p,{children:"Allow you to render a spinner and make the button disabled, useful on asynchronous action to prevent multiple clicks."}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"label"})," ",e.jsx(t,{color:"success",label:"New",size:"sm"})]}),`
`,e.jsx(n.p,{children:"New attribute (required)."}),`
`,e.jsx(n.p,{children:"The label you want to render in the button."}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"textAlign"})," ",e.jsx(t,{color:"critical",label:"Removed",size:"sm"})]}),`
`,e.jsx(n.p,{children:"Has been removed."}),`
`,e.jsx(n.p,{children:"You can use the style customization to achieve the same result."}),`
`,e.jsx(i,{label:"Migration examples",level:2}),`
`,e.jsx(n.p,{children:"Basic button:"}),`
`,e.jsx(s,{code:`
<osds-button>
  My button
</osds-button>

<!-- is now -->

<ods-button label="My button">
</ods-button>
`,dark:"true",language:"html"}),`
`,e.jsx(n.p,{children:"Disabled button:"}),`
`,e.jsx(s,{code:`
<osds-button disabled>
  My button
</osds-button>

<!-- is now -->

<ods-button label="My button" is-disabled>
</ods-button>
`,dark:"true",language:"html"}),`
`,e.jsx(n.p,{children:"Icon button:"}),`
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
`,e.jsx(n.p,{children:"Text align:"}),`
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
`,dark:"true",language:"html"})]})}function z(o={}){const{wrapper:n}={...r(),...o.components};return n?e.jsx(n,{...o,children:e.jsx(l,{...o})}):l(o)}export{z as default};
