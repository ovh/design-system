import{i as e}from"./rolldown-runtime-Dd_uD5pT.js";import{t}from"./jsx-runtime-DREnUpxT.js";import{T as n}from"./index-CzEwg6AJ.js";var r=e(t());function i(e){let t={code:`code`,p:`p`,pre:`pre`,...n(),...e.components},{DocLink:i,ExternalLink:a,Heading:s}=t;return i||o(`DocLink`,!0),a||o(`ExternalLink`,!0),s||o(`Heading`,!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(t.p,{children:[`After installing ODS (following the `,(0,r.jsx)(i,{to:`/guides/get-started`,children:`Get Started`}),` documentation),
you'll be able to use every component with the correct style.`]}),`
`,(0,r.jsx)(t.p,{children:`For the non-component related style, you need to update your app accordingly.`}),`
`,(0,r.jsx)(s,{label:`Use the ODS font`,level:2}),`
`,(0,r.jsxs)(t.p,{children:[`ODS components do not enforce any font by default (except for a few, like `,(0,r.jsx)(t.code,{children:`Code`}),`).`]}),`
`,(0,r.jsx)(t.p,{children:`To use one of the ODS fonts in your app, add the expected variables to the top of your app:`}),`
`,(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:`language-css`,children:`html {
  font-family: var(--ods-semantic-font-family-body);
}
`})}),`
`,(0,r.jsx)(s,{label:`Use the ODS design tokens`,level:2}),`
`,(0,r.jsxs)(t.p,{children:[`All ODS components are using common design tokens, that are accessible through `,(0,r.jsx)(a,{href:`https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties`,children:`CSS variables`}),`.`]}),`
`,(0,r.jsxs)(t.p,{children:[`If you want to use any of those on your own components, you can refer to the exhaustive list on the `,(0,r.jsx)(i,{to:`/guides/design-tokens`,children:`Design Tokens`}),` page. They follow the theme the page loads, as the ODS components do (see `,(0,r.jsx)(i,{to:`/guides/themes`,children:`Themes`}),`).`]}),`
`,(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:`language-css`,children:`.my-custom-title {
  color: var(--ods-semantic-color-content-text);
  ...
}
`})}),`
`,(0,r.jsx)(s,{label:`Use ODS CSS reset`,level:2}),`
`,(0,r.jsx)(t.p,{children:`We recommend you to import the ODS CSS reset subset of rules to normalize the rendering of some elements, but it's not mandatory.`}),`
`,(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:`language-typescript`,children:`import '@ovhcloud/ods-react/normalize-css';
`})})]})}function a(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(i,{...e})}):i(e)}function o(e,t){throw Error(`Expected `+(t?`component`:`object`)+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}export{a as default};