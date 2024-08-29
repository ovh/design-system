import{j as e}from"./jsx-runtime-Dn0LW--f.js";import{u as o}from"./index-DeyDdHvX.js";import{M as i}from"./index-BM3JsZOq.js";import{B as l}from"./button.stories-BY8BOuii.js";import"./iframe-6_jBXMSq.js";import"../sb-preview/runtime.js";import"./commonjsHelpers-Cpj98o6Y.js";import"./index-B_J8iUie.js";import"./index-DX_4BEHg.js";import"./index-DrFu-skq.js";import"./index-DryTTbHl.js";import"./lit-html-D-ZEPr28.js";import"./control-C1r2wu67.js";function t(s){const n={code:"code",h1:"h1",h2:"h2",hr:"hr",li:"li",p:"p",pre:"pre",ul:"ul",...o(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{of:l,name:"Migration From 17.x"}),`
`,e.jsx(n.h1,{id:"button---migrate-from-v17-to-v18",children:"Button - migrate from v17 to v18"}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"usage-changes",children:"Usage changes"}),`
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
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<osds-button>
  <span slot="start">
    <osds-icon name="close" contrasted></osds-icon>
  </span>
  My button
</osds-button>
`})}),`
`,e.jsx(n.p,{children:"The same result would now be achieved using:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<ods-button icon="xmark"
            label="My button">
</ods-button>
`})}),`
`,e.jsx(n.h2,{id:"attributes-changes",children:"Attributes changes"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"circle"})," ",e.jsx("ods-badge",{size:"sm",color:"critical",label:"Removed"})]}),`
`,e.jsx(n.p,{children:"Has been removed."}),`
`,e.jsx(n.p,{children:"This design is no longer part of the design system specification."}),`
`,e.jsx(n.p,{children:"If you need to render such button, please contact the design team."}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"contrasted"})," ",e.jsx("ods-badge",{size:"sm",color:"critical",label:"Removed"})]}),`
`,e.jsx(n.p,{children:"Has been removed."}),`
`,e.jsx(n.p,{children:"You can use the style customization to achieve the same result, until a new color get validated by the design team."}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"disabled"})," ",e.jsx("ods-badge",{size:"sm",label:"Updated"})]}),`
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
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"download"})," ",e.jsx("ods-badge",{size:"sm",color:"critical",label:"Removed"})]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"href"})," ",e.jsx("ods-badge",{size:"sm",color:"critical",label:"Removed"})]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"rel"})," ",e.jsx("ods-badge",{size:"sm",color:"critical",label:"Removed"})]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"target"})," ",e.jsx("ods-badge",{size:"sm",color:"critical",label:"Removed"})]}),`
`,e.jsx(n.p,{children:"Have been removed."}),`
`,e.jsx(n.p,{children:"They're now irrelevant as the button cannot be rendered as a link anymore."}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"icon"})," ",e.jsx("ods-badge",{size:"sm",color:"success",label:"New"})]}),`
`,e.jsx(n.p,{children:"New attribute (optional)."}),`
`,e.jsx(n.p,{children:"Allow you to render an icon on the left side of the button."}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"isDisabled"})," ",e.jsx("ods-badge",{size:"sm",color:"success",label:"New"})]}),`
`,e.jsx(n.p,{children:"New attribute (optional)."}),`
`,e.jsx(n.p,{children:"Allow to you to make the button disabled."}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"isLoading"})," ",e.jsx("ods-badge",{size:"sm",color:"success",label:"New"})]}),`
`,e.jsx(n.p,{children:"New attribute (optional)."}),`
`,e.jsx(n.p,{children:"Allow you to render a spinner and make the button disabled, useful on asynchronous action to prevent multiple clicks."}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"label"})," ",e.jsx("ods-badge",{size:"sm",color:"success",label:"New"})]}),`
`,e.jsx(n.p,{children:"New attribute (required)."}),`
`,e.jsx(n.p,{children:"The label you want to render in the button."}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"textAlign"})," ",e.jsx("ods-badge",{size:"sm",color:"critical",label:"Removed"})]}),`
`,e.jsx(n.p,{children:"Has been removed."}),`
`,e.jsx(n.p,{children:"You can use the style customization to achieve the same result."}),`
`,e.jsx(n.h2,{id:"migration-examples",children:"Migration examples"}),`
`,e.jsx(n.p,{children:"Basic button:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<osds-button>
  My button
</osds-button>

<!-- is now -->

<ods-button label="My button">
</ods-button>
`})}),`
`,e.jsx(n.p,{children:"Disabled button:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<osds-button disabled>
  My button
</osds-button>

<!-- is now -->

<ods-button label="My button" is-disabled>
</ods-button>
`})}),`
`,e.jsx(n.p,{children:"Icon button:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<osds-button>
  <span slot="start">
    <osds-icon name="close" contrasted></osds-icon>
  </span>
  My button
</osds-button>

<!-- is now -->

<ods-button icon="xmark"
            label="My button">
</ods-button>
`})}),`
`,e.jsx(n.p,{children:"Text align:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<osds-button text-align="center">
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
`})})]})}function w(s={}){const{wrapper:n}={...o(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(t,{...s})}):t(s)}export{w as default};
