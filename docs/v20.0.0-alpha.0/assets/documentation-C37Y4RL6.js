import{i as e}from"./rolldown-runtime-Dd_uD5pT.js";import{t}from"./jsx-runtime-DREnUpxT.js";import{T as n}from"./index-CdRG7ZE_.js";var r=e(t());function i(e){let t={em:`em`,li:`li`,ol:`ol`,p:`p`,strong:`strong`,...n(),...e.components},{Anatomy:i,BestPractices:a,Canvas:s,Heading:c,Icon:l,IdentityCard:u,Kbd:d}=t;return i||o(`Anatomy`,!0),a||o(`BestPractices`,!0),s||o(`Canvas`,!0),c||o(`Heading`,!0),l||o(`Icon`,!0),u||o(`IdentityCard`,!0),d||o(`Kbd`,!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.p,{children:(0,r.jsxs)(t.em,{children:[(0,r.jsx)(t.strong,{children:`Clipboard`}),` component allows user to view and copy information to its `,(0,r.jsx)(t.strong,{children:`Clipboard`}),`.`]})}),`
`,(0,r.jsx)(s,{story:`Overview`,source:`none`}),`
`,(0,r.jsx)(c,{label:`Overview`,level:2}),`
`,(0,r.jsx)(u,{aliases:[`Copy Component`,`Copy to Clipboard`],figmaLink:`https://www.figma.com/design/9jDDTcR4a9jPRFcdjawAlf/ODS---UI-Kit?node-id=26-7351`,githubUrl:`https://github.com/ovh/design-system/tree/master/packages/ods-react/src/components/clipboard`,name:`Clipboard`,children:(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:`Clipboard`}),` component is used to copy quickly and easily a text, a link and more to the `,(0,r.jsx)(t.strong,{children:`Clipboard`}),`.`]})}),`
`,(0,r.jsx)(c,{label:`Usage`,level:2}),`
`,(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:`Clipboard`}),` is used to quickly and easily copy an amount of text to the user's `,(0,r.jsx)(t.strong,{children:`Clipboard`}),`.`]}),`
`,(0,r.jsx)(t.p,{children:`It can be used when it is considered that it will cause trouble for the user to select and copy a text.`}),`
`,(0,r.jsx)(c,{label:`Dos & Don'ts`,level:3}),`
`,(0,r.jsx)(a,{donts:[`- Don't use the Clipboard just to display static text, use a read-only Input or Text component instead`,`- Don't display text that should be editable in a Clipboard, this component is read-only by nature`,`- Don't place the Clipboard in contexts where copying is unnecessary or irrelevant`],dos:[`- Use the Clipboard component to allow users to easily copy non-editable text, such as tokens, or IDs`,`- Use Clipboard when copying text manually would be error-prone or tedious`,`- Use the mask/unmask toggle appropriately for sensitive content, like passwords or tokens`]}),`
`,(0,r.jsx)(c,{label:`Best Practices in Context`,level:3}),`
`,(0,r.jsx)(i,{src:`components/clipboard/anatomy.png`}),`
`,(0,r.jsxs)(t.ol,{children:[`
`,(0,r.jsx)(t.li,{children:(0,r.jsx)(t.strong,{children:`Clipboard`})}),`
`,(0,r.jsx)(t.li,{children:(0,r.jsx)(t.strong,{children:`Input text`})}),`
`,(0,r.jsx)(t.li,{children:(0,r.jsx)(t.strong,{children:`Copy button`})}),`
`,(0,r.jsx)(t.li,{children:(0,r.jsx)(t.strong,{children:`Tooltip`})}),`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:`Show/Hide button`}),` - optional`]}),`
`]}),`
`,(0,r.jsx)(c,{label:`Placement`,level:2}),`
`,(0,r.jsxs)(t.p,{children:[`By default, the `,(0,r.jsx)(t.strong,{children:`Clipboard`}),` content is left-aligned in its container.`]}),`
`,(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:`Clipboard`}),`'s Tooltip is right-aligned after the component by default, and vertically centered.`]}),`
`,(0,r.jsx)(c,{label:`Behavior`,level:2}),`
`,(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:`Clipboard`}),` can be focused and hovered. They can be disabled.
When disabled, the component can't be hovered, focused nor clicked.`]}),`
`,(0,r.jsxs)(t.p,{children:[`The `,(0,r.jsx)(t.strong,{children:`Clipboard`}),` component is used as read-only, to allow users to copy a predefined text that cannot be edited directly.`]}),`
`,(0,r.jsx)(t.p,{children:`Even if no visual indicator prompts the user to do so, the user can select the text directly in the Input.`}),`
`,(0,r.jsxs)(t.p,{children:[`The trigger for copying the Input field content to the `,(0,r.jsx)(t.strong,{children:`Clipboard`}),` is the "copy" button.`]}),`
`,(0,r.jsx)(t.p,{children:`When hovering or focusing, a Tooltip is displayed as a helper.`}),`
`,(0,r.jsx)(t.p,{children:`The clipboard masking toggled using show/hide action is permanent. Users have to click again to show/hide the Input field content.`}),`
`,(0,r.jsxs)(t.p,{children:[`A confirmation Tooltip is displayed (if user is still hovering the "copy" button) when `,(0,r.jsx)(t.strong,{children:`Clipboard`}),` content has been successfully copied.`]}),`
`,(0,r.jsx)(c,{label:`Navigation`,level:2}),`
`,(0,r.jsx)(c,{label:`Focus Management`,level:3}),`
`,(0,r.jsxs)(t.p,{children:[`The `,(0,r.jsx)(t.strong,{children:`Clipboard`}),` receives focus as part of the natural tab order. Copy button becomes focusable immediately after the `,(0,r.jsx)(t.strong,{children:`Clipboard`}),`.`]}),`
`,(0,r.jsxs)(t.p,{children:[`If the `,(0,r.jsx)(t.strong,{children:`Clipboard`}),` is disabled, it is  skipped in the tab order and cannot be focused.`]}),`
`,(0,r.jsx)(c,{label:`General Keyboard Shortcuts`,level:3}),`
`,(0,r.jsxs)(t.p,{children:[`Pressing `,(0,r.jsx)(d,{children:`Ctrl`}),` + `,(0,r.jsx)(d,{children:`C`}),` (or `,(0,r.jsx)(d,{children:`Cmd`}),` + `,(0,r.jsx)(d,{children:`C`}),` on macOS) while the input field is focused copies the selected text.`]}),`
`,(0,r.jsxs)(t.p,{children:[`Pressing `,(0,r.jsx)(d,{children:`Enter`}),` or `,(0,r.jsx)(d,{children:`Space`}),` when the copy button is focused triggers the copy action (button component behavior).`]}),`
`,(0,r.jsx)(c,{label:`Accessibility`,level:2}),`
`,(0,r.jsxs)(t.p,{children:[`To ensure proper accessibility, the `,(0,r.jsx)(t.strong,{children:`Clipboard`}),` component must be correctly labeled.`]}),`
`,(0,r.jsx)(c,{label:`Always provide an explicit label`,level:3}),`
`,(0,r.jsxs)(t.p,{children:[`Every `,(0,r.jsx)(t.strong,{children:`Clipboard`}),` must have a clear and explicit label to ensure that users (especially screen reader users) understand its purpose, using either `,(0,r.jsx)(t.strong,{children:`FormField`}),` or a native label tag.`]}),`
`,(0,r.jsx)(s,{story:`AccessibilityFormField`}),`
`,(0,r.jsxs)(t.p,{children:[(0,r.jsx)(l,{name:`circle-check`,style:{color:`var(--ods-semantic-color-content-success)`}}),` Screen readers will announce the label, the field and its content.`]})]})}function a(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(i,{...e})}):i(e)}function o(e,t){throw Error(`Expected `+(t?`component`:`object`)+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}export{a as default};