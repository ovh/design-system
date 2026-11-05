import{i as e}from"./rolldown-runtime-Dd_uD5pT.js";import{t}from"./jsx-runtime-DREnUpxT.js";import{T as n}from"./index-CdRG7ZE_.js";var r=e(t());function i(e){let t={code:`code`,li:`li`,p:`p`,ul:`ul`,...n(),...e.components},{DocLink:i,ExternalLink:a}=t;return i||o(`DocLink`,!0),a||o(`ExternalLink`,!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(t.p,{children:[`Version 19 of ODS is not the direct follow-up of previous versions, it is a new library built 100% on top of `,(0,r.jsx)(a,{href:`https://react.dev`,children:`React`}),`.`]}),`
`,(0,r.jsx)(t.p,{children:`Previous versions were providing a React version of each component too, but it was in fact a wrapper around the Web Component.
Thus it was designed with the constraints related to Web Component (no virtual DOM, relying on DOM selector, ...).`}),`
`,(0,r.jsx)(t.p,{children:`With this new version we got rid of those constraints, which gave us some benefits like:`}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsx)(t.li,{children:`component composition.`}),`
`,(0,r.jsx)(t.li,{children:`easier style customization.`}),`
`,(0,r.jsxs)(t.li,{children:[`easier React integration (no more `,(0,r.jsx)(t.code,{children:`ref`}),` needed, nor literal templates).`]}),`
`]}),`
`,(0,r.jsx)(t.p,{children:`We've also alleviated a lot of previous component restrictions, as most of them now accept React nodes instead of fixed property.`}),`
`,(0,r.jsx)(t.p,{children:`For example, Button will now accept any node (text, text + icon, triple icon, ...) and won't force you to set only a label and an optional icon.`}),`
`,(0,r.jsxs)(t.p,{children:[`Moving out of Web Component also means getting rid of the Shadow DOM.
This means you now have direct access to the component DOM and it's easier to add your own style.
Though this also means it is easier to break the component rendering, and some custom selectors may break from version to version
(see `,(0,r.jsx)(i,{to:`/guides/style-customization`,children:`style customization documentation`}),` to know more).`]}),`
`,(0,r.jsx)(t.p,{children:`Regarding components, we tried to stay as close as possible to their previous interface while keeping them easy to integrate.
Though, the way you'll integrate them in your React app should be rethought, to ensure you use them as real React components
and not wrapped Web Components anymore.`}),`
`,(0,r.jsxs)(t.p,{children:[`To check how to start with this new version, please follow the `,(0,r.jsx)(i,{to:`/guides/get-started`,children:`Get Started`}),` documentation.`]})]})}function a(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(i,{...e})}):i(e)}function o(e,t){throw Error(`Expected `+(t?`component`:`object`)+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}export{a as default};