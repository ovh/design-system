import{i as e}from"./rolldown-runtime-Dd_uD5pT.js";import{t}from"./jsx-runtime-DREnUpxT.js";import{T as n}from"./index-CzEwg6AJ.js";var r=e(t());function i(e){let t={li:`li`,ol:`ol`,p:`p`,strong:`strong`,ul:`ul`,...n(),...e.components},{Anatomy:i,BestPractices:a,Canvas:s,DocLink:c,ExternalLink:l,Heading:u,Icon:d,IdentityCard:f,Kbd:p}=t;return i||o(`Anatomy`,!0),a||o(`BestPractices`,!0),s||o(`Canvas`,!0),c||o(`DocLink`,!0),l||o(`ExternalLink`,!0),u||o(`Heading`,!0),d||o(`Icon`,!0),f||o(`IdentityCard`,!0),p||o(`Kbd`,!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s,{story:`Overview`,source:`none`}),`
`,(0,r.jsx)(u,{label:`Overview`,level:2}),`
`,(0,r.jsxs)(f,{aliases:[`Toggle Switch`,`Switch`],extraLinks:[(0,r.jsx)(c,{to:`/guides/forms`,children:`Form Guidelines`})],figmaLink:`https://www.figma.com/design/9jDDTcR4a9jPRFcdjawAlf/ODS---UI-Kit?node-id=53-15319`,githubUrl:`https://github.com/ovh/design-system/tree/master/packages/ods-react/src/components/toggle`,name:`Toggle`,children:[(0,r.jsxs)(t.p,{children:[`The `,(0,r.jsx)(t.strong,{children:`Toggle`}),` component is used to enable or disable a state, setting or feature.`]}),(0,r.jsx)(t.p,{children:`It provides a clear visual indication of the current state and allows users to change states with a single click or
tap.`}),(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:`Toggles`}),` are commonly used in settings, preferences, and forms where a binary choice is required.`]})]}),`
`,(0,r.jsx)(u,{label:`Usage`,level:2}),`
`,(0,r.jsxs)(t.p,{children:[`A `,(0,r.jsx)(t.strong,{children:`Toggle`}),` is commonly used for binary choice.`]}),`
`,(0,r.jsx)(t.p,{children:`The user can decide to switch between two states with an immediate effect visible at a glance.`}),`
`,(0,r.jsx)(t.p,{children:`It can be used in following use cases when you need to allow the user to:`}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsx)(t.li,{children:`turn an option or settings on or off`}),`
`,(0,r.jsx)(t.li,{children:`add or remove an item or an option`}),`
`]}),`
`,(0,r.jsxs)(t.p,{children:[`A `,(0,r.jsx)(t.strong,{children:`Toggle`}),` should never require users to press a button to apply their settings (if a setting requires a button, use a checkbox instead).`]}),`
`,(0,r.jsx)(u,{label:`Dos & Don'ts`,level:3}),`
`,(0,r.jsx)(a,{donts:[`- Don't use a Toggle for changes that only take effect after form submission. Use a Checkbox instead`,`- Don't use ambiguous or overly long labels`,`- Don't use Toggle for multi-state or complex options since it is meant for binary (on/off) interactions only`],dos:[`- Use a Toggle to switch between two states when the change has an immediate effect (e.g., turning a setting on or off)`,`- Ensure the Toggle label clearly describes the "on" state, so users understand what enabling it will do`,`- Place any related elements (e.g., changes triggered by the Toggle) close to the Toggle to reinforce the connection visually`,`- Use Toggle in mobile-friendly settings where quick, touch-based interactions are expected`,`- Use Toggle in forms only when the change takes effect immediately and does not require submission to apply`]}),`
`,(0,r.jsx)(u,{label:`Best Practices in Context`,level:3}),`
`,(0,r.jsx)(i,{src:`components/toggle/anatomy.png`}),`
`,(0,r.jsxs)(t.ol,{children:[`
`,(0,r.jsx)(t.li,{children:(0,r.jsx)(t.strong,{children:`Toggle`})}),`
`,(0,r.jsx)(t.li,{children:(0,r.jsx)(t.strong,{children:`Handle`})}),`
`,(0,r.jsx)(t.li,{children:(0,r.jsx)(t.strong,{children:`Track`})}),`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:`State label`}),` - optional`]}),`
`]}),`
`,(0,r.jsx)(u,{label:`Placement`,level:2}),`
`,(0,r.jsxs)(t.p,{children:[`Place the `,(0,r.jsx)(t.strong,{children:`Toggle`}),` component near the setting or feature it controls.`]}),`
`,(0,r.jsx)(t.p,{children:`It should be positioned within forms, settings panels, or any relevant context where a binary choice is required.`}),`
`,(0,r.jsx)(t.p,{children:`Ensure it is easily accessible and visible.`}),`
`,(0,r.jsx)(u,{label:`Behavior`,level:2}),`
`,(0,r.jsxs)(t.p,{children:[`When the user clicks on a `,(0,r.jsx)(t.strong,{children:`Toggle`}),`, it has an immediate effect:`]}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsx)(t.li,{children:`set to "on" position, the thumb will slide to the right of the track`}),`
`,(0,r.jsx)(t.li,{children:`set to "off" position, the thumb will slide to the left of the track`}),`
`]}),`
`,(0,r.jsx)(u,{label:`Navigation`,level:2}),`
`,(0,r.jsx)(u,{label:`Focus Management`,level:3}),`
`,(0,r.jsxs)(t.p,{children:[`When the `,(0,r.jsx)(t.strong,{children:`Toggle`}),` component is focused, focus is automatically set to the `,(0,r.jsx)(t.strong,{children:`Toggle`}),` itself.`]}),`
`,(0,r.jsxs)(t.p,{children:[`A disabled `,(0,r.jsx)(t.strong,{children:`Toggle`}),` cannot receive focus and cannot be toggled.`]}),`
`,(0,r.jsx)(u,{label:`General Keyboard Shortcuts`,level:3}),`
`,(0,r.jsxs)(t.p,{children:[`Pressing `,(0,r.jsx)(p,{children:`Tab`}),` moves focus to the `,(0,r.jsx)(t.strong,{children:`Toggle`}),` component.`]}),`
`,(0,r.jsxs)(t.p,{children:[`Pressing `,(0,r.jsx)(p,{children:`Shift`}),` + `,(0,r.jsx)(p,{children:`Tab`}),` moves focus backward to the previous focusable element.`]}),`
`,(0,r.jsxs)(t.p,{children:[`When focused, pressing `,(0,r.jsx)(p,{children:`Space`}),` or `,(0,r.jsx)(p,{children:`Enter`}),` immediately changes the `,(0,r.jsx)(t.strong,{children:`Toggle`}),`'s state from on to off or off to on.`]}),`
`,(0,r.jsx)(u,{label:`Accessibility`,level:2}),`
`,(0,r.jsxs)(t.p,{children:[`This component complies with the `,(0,r.jsx)(l,{href:`https://www.w3.org/WAI/ARIA/apg/patterns/checkbox`,children:`Checkbox WAI-ARIA design pattern`}),`.`]}),`
`,(0,r.jsx)(u,{label:`Always provide an explicit label`,level:3}),`
`,(0,r.jsxs)(t.p,{children:[`Every `,(0,r.jsx)(t.strong,{children:`Toggle`}),` must have a clear and explicit label to ensure that users (especially screen reader users) understand its purpose,
using either a `,(0,r.jsx)(t.strong,{children:`ToggleLabel`}),` or an `,(0,r.jsx)(l,{href:`https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label`,children:`aria-label`}),` for context.`]}),`
`,(0,r.jsx)(s,{story:`AccessibilityLabel`}),`
`,(0,r.jsxs)(t.p,{children:[(0,r.jsx)(d,{name:`circle-check`,style:{color:`var(--ods-semantic-color-content-success)`}}),` Screen readers will announce a checkbox, its state and the label.`]}),`
`,(0,r.jsx)(s,{story:`AccessibilityAriaLabel`}),`
`,(0,r.jsxs)(t.p,{children:[(0,r.jsx)(d,{name:`circle-check`,style:{color:`var(--ods-semantic-color-content-success)`}}),` Screen readers will announce a checkbox, its state and the label.`]})]})}function a(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(i,{...e})}):i(e)}function o(e,t){throw Error(`Expected `+(t?`component`:`object`)+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}export{a as default};