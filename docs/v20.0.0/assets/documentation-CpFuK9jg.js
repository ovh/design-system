import{i as e}from"./rolldown-runtime-Dd_uD5pT.js";import{t}from"./jsx-runtime-DREnUpxT.js";import{T as n}from"./index-CzEwg6AJ.js";var r=e(t());function i(e){let t={li:`li`,ol:`ol`,p:`p`,strong:`strong`,ul:`ul`,...n(),...e.components},{Anatomy:i,BestPractices:a,Canvas:s,ExternalLink:c,Heading:l,IdentityCard:u,Kbd:d}=t;return i||o(`Anatomy`,!0),a||o(`BestPractices`,!0),s||o(`Canvas`,!0),c||o(`ExternalLink`,!0),l||o(`Heading`,!0),u||o(`IdentityCard`,!0),d||o(`Kbd`,!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(t.p,{children:[`The `,(0,r.jsx)(t.strong,{children:`Kbd`}),` component is used to display keyboard keys or key combinations, typically for shortcuts or user instructions. It visually distinguishes key inputs from regular text.`]}),`
`,(0,r.jsx)(s,{story:`Overview`,source:`none`}),`
`,(0,r.jsx)(l,{label:`Overview`,level:2}),`
`,(0,r.jsx)(u,{aliases:[],figmaLink:`https://www.figma.com/design/9jDDTcR4a9jPRFcdjawAlf/ODS---UI-Kit`,githubUrl:`https://github.com/ovh/design-system/tree/master/packages/ods-react/src/components/kbd`,name:`Kbd`,startingVersion:19,children:(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:`Kbd`}),` is a non-interactive component designed to represent keyboard keys or combinations. The purpose of the `,(0,r.jsx)(t.strong,{children:`Kbd`}),` is to provide a standardized way to format and present key inputs.`]})}),`
`,(0,r.jsx)(l,{label:`Usage`,level:2}),`
`,(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:`Kbd`}),` is commonly used to display single keys (e.g., `,(0,r.jsx)(d,{children:`Esc`}),`) and keyboard shortcuts (e.g., `,(0,r.jsx)(d,{children:`⌘`}),` + `,(0,r.jsx)(d,{children:`S`}),`, `,(0,r.jsx)(d,{children:`Ctrl`}),` + `,(0,r.jsx)(d,{children:`Shift`}),` + `,(0,r.jsx)(d,{children:`P`}),`) in:`]}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsx)(t.li,{children:`Documentation`}),`
`,(0,r.jsx)(t.li,{children:`Interactive guides`}),`
`,(0,r.jsx)(t.li,{children:`Accessibility section`}),`
`]}),`
`,(0,r.jsx)(t.p,{children:`This component is not interactive and should not be used to trigger any action.`}),`
`,(0,r.jsx)(l,{label:`Dos & Don'ts`,level:3}),`
`,(0,r.jsx)(a,{donts:[`Use Kbd as a substitute for clickable button. It must not trigger any action`,`Nest Kbd inside other interactive elements`,`Use Kbd for decorative text or to stylize regular words`,`Add multiple keys into one element`,`Display unrealistic or platform-inconsistent combinations`,`Use it for icons or non-keyboard symbols`],dos:[`Keep combinations consistent with platform conventions (e.g., ⌘ for macOS, Ctrl for Windows/Linux)`,"Keep separator usage consistent (using `+`)","Integrate Kbd inline with instructional text (e.g., `Press <kbd>Ctrl</kbd> + <kbd>S</kbd> to save your changes.`"]}),`
`,(0,r.jsx)(l,{label:`Best Practices in Context`,level:3}),`
`,(0,r.jsx)(i,{src:`components/kbd/anatomy.png`}),`
`,(0,r.jsxs)(t.ol,{children:[`
`,(0,r.jsx)(t.li,{children:(0,r.jsx)(t.strong,{children:`Kbd`})}),`
`]}),`
`,(0,r.jsx)(l,{label:`Behavior`,level:2}),`
`,(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:`Kbd`}),` has no interactive behavior. It is a purely visual component.`]}),`
`,(0,r.jsxs)(t.p,{children:[`The `,(0,r.jsx)(t.strong,{children:`Kbd`}),` component adapts to its parent font size.`]}),`
`,(0,r.jsx)(l,{label:`Navigation`,level:2}),`
`,(0,r.jsxs)(t.p,{children:[`The `,(0,r.jsx)(t.strong,{children:`Kbd`}),` component is not focusable by default, as it is non-interactive.`]}),`
`,(0,r.jsx)(l,{label:`Accessibility`,level:2}),`
`,(0,r.jsxs)(t.p,{children:[`This component complies with the `,(0,r.jsx)(c,{href:`https://developer.mozilla.org/fr/docs/Web/HTML/Reference/Elements/kbd`,children:`Kbd HTML element`}),`.`]})]})}function a(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(i,{...e})}):i(e)}function o(e,t){throw Error(`Expected `+(t?`component`:`object`)+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}export{a as default};