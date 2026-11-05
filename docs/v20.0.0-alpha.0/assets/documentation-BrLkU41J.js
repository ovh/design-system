import{i as e}from"./rolldown-runtime-Dd_uD5pT.js";import{t}from"./jsx-runtime-DREnUpxT.js";import{T as n}from"./index-CdRG7ZE_.js";var r=e(t());function i(e){let t={em:`em`,li:`li`,ol:`ol`,p:`p`,strong:`strong`,...n(),...e.components},{Anatomy:i,BestPractices:a,Canvas:s,DocLink:c,ExternalLink:l,Heading:u,Icon:d,IdentityCard:f,Kbd:p}=t;return i||o(`Anatomy`,!0),a||o(`BestPractices`,!0),s||o(`Canvas`,!0),c||o(`DocLink`,!0),l||o(`ExternalLink`,!0),u||o(`Heading`,!0),d||o(`Icon`,!0),f||o(`IdentityCard`,!0),p||o(`Kbd`,!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.p,{children:(0,r.jsxs)(t.em,{children:[(0,r.jsx)(t.strong,{children:`Quantity`}),` is a component used to enter and modify a numeric value in a responsive and easy way`]})}),`
`,(0,r.jsx)(s,{story:`Overview`,source:`none`}),`
`,(0,r.jsx)(u,{label:`Overview`,level:2}),`
`,(0,r.jsxs)(f,{aliases:[`Numeric`,`Number input`,`Amount`],extraLinks:[(0,r.jsx)(c,{to:`/guides/forms`,children:`Form Guidelines`})],figmaLink:`https://www.figma.com/design/9jDDTcR4a9jPRFcdjawAlf/ODS---UI-Kit?node-id=49-9160`,githubUrl:`https://github.com/ovh/design-system/tree/master/packages/ods-react/src/components/quantity`,name:`Quantity`,children:[(0,r.jsxs)(t.p,{children:[`The `,(0,r.jsx)(t.strong,{children:`Quantity`}),` component provides a user-friendly interface for selecting or entering numerical values.`]}),(0,r.jsxs)(t.p,{children:[`It includes an `,(0,r.jsx)(t.strong,{children:`Input`}),` field combined with increment and decrement `,(0,r.jsx)(t.strong,{children:`Buttons`}),` to adjust the value easily.`]})]}),`
`,(0,r.jsx)(u,{label:`Usage`,level:2}),`
`,(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:`Quantity`}),` is used to quickly adjust with a few clicks a numeric value within defined parameters.`]}),`
`,(0,r.jsx)(t.p,{children:`Limits can be set as minimum or maximum value. In that case, the numeric value cannot exceed the defined boundaries.`}),`
`,(0,r.jsx)(u,{label:`Dos & Don'ts`,level:3}),`
`,(0,r.jsx)(a,{donts:[`- Don't use the Quantity component for large numeric changes that would require excessive clicking. Prefer a freeform numeric input or slider in those cases`,`- Don't use the component outside of quantitative contexts: it should only be used to adjust measurable numeric values (e.g., quantity, amount)`],dos:[`- Use the Quantity component for small, incremental adjustments where users are likely to increase or decrease values with just a few clicks`,`- Always allow users to manually input a number directly into the field, not just through the increment/decrement buttons`,`- Set appropriate min/max limits to prevent invalid or unintended values`,`- Provide contextual labels or grouping when needed to clarify what the quantity refers to`]}),`
`,(0,r.jsx)(u,{label:`Best Practices in Context`,level:3}),`
`,(0,r.jsx)(i,{src:`components/quantity/anatomy.png`}),`
`,(0,r.jsxs)(t.ol,{children:[`
`,(0,r.jsx)(t.li,{children:(0,r.jsx)(t.strong,{children:`Quantity`})}),`
`,(0,r.jsx)(t.li,{children:(0,r.jsx)(t.strong,{children:`Decrement button`})}),`
`,(0,r.jsx)(t.li,{children:(0,r.jsx)(t.strong,{children:`Input field`})}),`
`,(0,r.jsx)(t.li,{children:(0,r.jsx)(t.strong,{children:`Increment button`})}),`
`]}),`
`,(0,r.jsx)(u,{label:`Placement`,level:2}),`
`,(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:`Quantity`}),` can be used to let users easily change an amount of items, for example, or similar situations.`]}),`
`,(0,r.jsxs)(t.p,{children:[`It should be used with numeric `,(0,r.jsx)(t.strong,{children:`Input`}),` that are in a fairly narrow range.`]}),`
`,(0,r.jsx)(u,{label:`Behavior`,level:2}),`
`,(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:`Quantity`}),` numeric field can be edited directly by the user.`]}),`
`,(0,r.jsxs)(t.p,{children:[`The user can also decrease or increase the value by clicking on the `,(0,r.jsx)(t.strong,{children:`Buttons`}),`.`]}),`
`,(0,r.jsx)(t.p,{children:`In case that limits have been set to minimum and maximum value, corresponding control will be disabled when this value has been reached.`}),`
`,(0,r.jsxs)(t.p,{children:[`Each item of the `,(0,r.jsx)(t.strong,{children:`Quantity`}),` component can be focused; the whole component can be disabled at once.`]}),`
`,(0,r.jsx)(u,{label:`Navigation`,level:2}),`
`,(0,r.jsx)(u,{label:`Focus Management`,level:3}),`
`,(0,r.jsxs)(t.p,{children:[`When the `,(0,r.jsx)(t.strong,{children:`Quantity`}),` component is focused, focus is automatically set to the input if not disabled.`]}),`
`,(0,r.jsxs)(t.p,{children:[`If the `,(0,r.jsx)(t.strong,{children:`Input`}),` field is read-only, it can still receive focus but cannot be edited.`]}),`
`,(0,r.jsx)(u,{label:`General Keyboard Shortcuts`,level:3}),`
`,(0,r.jsxs)(t.p,{children:[`Pressing `,(0,r.jsx)(p,{children:`Tab`}),` moves focus forward the input field.`]}),`
`,(0,r.jsxs)(t.p,{children:[`Pressing `,(0,r.jsx)(p,{children:`Shift`}),` + `,(0,r.jsx)(p,{children:`Tab`}),` moves focus backward through the interactive elements.`]}),`
`,(0,r.jsxs)(t.p,{children:[`Pressing `,(0,r.jsx)(p,{children:`Arrow Up`}),` when focused in the Input field increases the value.`]}),`
`,(0,r.jsxs)(t.p,{children:[`Pressing `,(0,r.jsx)(p,{children:`Arrow Down`}),` when focused in the Input field decreases the value.`]}),`
`,(0,r.jsx)(u,{label:`Accessibility`,level:2}),`
`,(0,r.jsxs)(t.p,{children:[`This component complies with the `,(0,r.jsx)(l,{href:`https://www.w3.org/WAI/ARIA/apg/patterns/spinbutton/`,children:`Spinbutton WAI-ARIA design pattern`})]}),`
`,(0,r.jsx)(u,{label:`Always provide an explicit label`,level:3}),`
`,(0,r.jsxs)(t.p,{children:[`Every `,(0,r.jsx)(t.strong,{children:`Quantity`}),` must have a clear and explicit label to ensure that users (especially screen reader users) understand its purpose,
using either `,(0,r.jsx)(t.strong,{children:`FormField`}),` or a native label tag.`]}),`
`,(0,r.jsx)(s,{story:`AccessibilityLabel`}),`
`,(0,r.jsxs)(t.p,{children:[(0,r.jsx)(d,{name:`circle-check`,style:{color:`var(--ods-semantic-color-content-success)`}}),` Screen readers will announce the label and the quantity field.`]})]})}function a(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(i,{...e})}):i(e)}function o(e,t){throw Error(`Expected `+(t?`component`:`object`)+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}export{a as default};