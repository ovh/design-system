import{i as e}from"./rolldown-runtime-Dd_uD5pT.js";import{t}from"./jsx-runtime-DREnUpxT.js";import{T as n}from"./index-CzEwg6AJ.js";var r=e(t());function i(e){let t={em:`em`,li:`li`,ol:`ol`,p:`p`,strong:`strong`,...n(),...e.components},{Anatomy:i,BestPractices:a,Canvas:s,DocLink:c,Heading:l,Icon:u,IdentityCard:d,Kbd:f}=t;return i||o(`Anatomy`,!0),a||o(`BestPractices`,!0),s||o(`Canvas`,!0),c||o(`DocLink`,!0),l||o(`Heading`,!0),u||o(`Icon`,!0),d||o(`IdentityCard`,!0),f||o(`Kbd`,!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.p,{children:(0,r.jsxs)(t.em,{children:[(0,r.jsx)(t.strong,{children:`Password`}),` component is an `,(0,r.jsx)(c,{to:`/components/input`,children:`Input`}),` field for entering a password that can be hidden or not.`]})}),`
`,(0,r.jsx)(s,{story:`Overview`,source:`none`}),`
`,(0,r.jsx)(l,{label:`Overview`,level:2}),`
`,(0,r.jsx)(d,{aliases:[`Password field`,`Password input`],extraLinks:[(0,r.jsx)(c,{to:`/guides/forms`,children:`Form Guidelines`})],figmaLink:`https://www.figma.com/design/9jDDTcR4a9jPRFcdjawAlf/ODS---UI-Kit?node-id=48-4526`,githubUrl:`https://github.com/ovh/design-system/tree/master/packages/ods-react/src/components/password`,name:`Password`,children:(0,r.jsxs)(t.p,{children:[`The `,(0,r.jsx)(t.strong,{children:`Password`}),` component is an Input field of which the content is replaced with middle dot symbol symbols "·" by default and
the masking can be toggled using a show/hide action.`]})}),`
`,(0,r.jsx)(l,{label:`Usage`,level:2}),`
`,(0,r.jsxs)(t.p,{children:[`A `,(0,r.jsx)(t.strong,{children:`Password`}),` is mainly used to let users enter a password or secret information.`]}),`
`,(0,r.jsx)(t.p,{children:`Entered password can be masked or visible as plain text when users need to check what they have entered.`}),`
`,(0,r.jsx)(t.p,{children:`It can also be used for displaying tokens.`}),`
`,(0,r.jsx)(l,{label:`Dos & Don'ts`,level:3}),`
`,(0,r.jsx)(a,{donts:[`- Don't use the Password component when users need to see what they're typing by default, use a standard Input instead`,`- Don't hide the label. Users should always know what the Password field is for`,`- Don't use Passwords for non-sensitive or public information; this could cause unnecessary friction`,`- Don't rely only on placeholders to communicate password requirements`,`- Don't remove the toggle visibility option unless there is a strong security or UX reason to do so`],dos:[`- Use the Password component for sensitive inputs, such as login credentials, tokens, or API keys`,`- Use the read-only mode for displaying generated tokens or credentials that users may need to copy, without editing`,`- Pair Password fields with clear labels and helper texts for expected format or complexity requirements`]}),`
`,(0,r.jsx)(l,{label:`Best Practices in Context`,level:3}),`
`,(0,r.jsx)(i,{src:`components/password/anatomy.png`}),`
`,(0,r.jsxs)(t.ol,{children:[`
`,(0,r.jsx)(t.li,{children:(0,r.jsx)(t.strong,{children:`Password`})}),`
`,(0,r.jsx)(t.li,{children:(0,r.jsx)(t.strong,{children:`Placeholder or input text`})}),`
`,(0,r.jsx)(t.li,{children:(0,r.jsx)(t.strong,{children:`Show/Hide button`})}),`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:`Clearable button`}),` - optional`]}),`
`]}),`
`,(0,r.jsx)(l,{label:`Placement`,level:2}),`
`,(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:`Password`}),` should be vertically aligned with other form components on a same page.`]}),`
`,(0,r.jsx)(l,{label:`Behavior`,level:2}),`
`,(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:`Password`}),` can be used in read-only mode, especially for displaying sensitive tokens.`]}),`
`,(0,r.jsx)(t.p,{children:`Users can toggle the password masking (show/hide) by clicking an action button. The selected visibility state remains until the user clicks again.`}),`
`,(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:`Password`}),` supports a clear action to quickly reset its content.`]}),`
`,(0,r.jsx)(t.p,{children:`A loading state can be displayed inside the field when needed, for example during validation or processing.`}),`
`,(0,r.jsx)(l,{label:`Navigation`,level:2}),`
`,(0,r.jsx)(l,{label:`Focus Management`,level:3}),`
`,(0,r.jsx)(t.p,{children:`When tabbing through the page, the Password field receives focus as part of the natural tab order.`}),`
`,(0,r.jsx)(t.p,{children:`If present, the clear button is focusable immediately after the Password field.`}),`
`,(0,r.jsx)(t.p,{children:`If present, the toggle mask button (show/hide password) is focusable after the clear button.`}),`
`,(0,r.jsx)(t.p,{children:`If the Password field is read-only, it can still receive focus but cannot be edited.`}),`
`,(0,r.jsx)(l,{label:`General Keyboard Shortcuts`,level:3}),`
`,(0,r.jsxs)(t.p,{children:[`Pressing `,(0,r.jsx)(f,{children:`Tab`}),` moves focus forward.`]}),`
`,(0,r.jsxs)(t.p,{children:[`Pressing `,(0,r.jsx)(f,{children:`Shift`}),` + `,(0,r.jsx)(f,{children:`Tab`}),` moves focus backward to the previous interactive element.`]}),`
`,(0,r.jsx)(t.p,{children:`Pressing any character key while the Password field is focused enters text into the field (unless it is read-only).`}),`
`,(0,r.jsxs)(t.p,{children:[`Pressing `,(0,r.jsx)(f,{children:`Backspace`}),` deletes the last character before the cursor position.`]}),`
`,(0,r.jsxs)(t.p,{children:[`Pressing `,(0,r.jsx)(f,{children:`Enter`}),` while the clear button is focused clears the Password content.`]}),`
`,(0,r.jsxs)(t.p,{children:[`Pressing `,(0,r.jsx)(f,{children:`Enter`}),` while the toggle mask button is focused toggles between showing and hiding the field content.`]}),`
`,(0,r.jsx)(l,{label:`Accessibility`,level:2}),`
`,(0,r.jsxs)(t.p,{children:[`To ensure proper accessibility, the `,(0,r.jsx)(t.strong,{children:`Password`}),` component must be correctly labeled and provide meaningful context when interactive elements (such as icon buttons) are used.`]}),`
`,(0,r.jsx)(l,{label:`Always provide an explicit label`,level:3}),`
`,(0,r.jsxs)(t.p,{children:[`Every `,(0,r.jsx)(t.strong,{children:`Password`}),` must have a clear and explicit label to ensure that users (especially screen reader users) understand its purpose, using either `,(0,r.jsx)(t.strong,{children:`FormField`}),` or a native label tag.`]}),`
`,(0,r.jsx)(s,{story:`AccessibilityFormField`}),`
`,(0,r.jsxs)(t.p,{children:[(0,r.jsx)(u,{name:`circle-check`,style:{color:`var(--ods-semantic-color-content-success)`}}),` Screen readers will announce the label, the field and its content.`]}),`
`,(0,r.jsx)(l,{label:`Override action context`,level:3}),`
`,(0,r.jsx)(t.p,{children:`To provide more context on the interactive elements, you can provide your own custom translations to the component.`}),`
`,(0,r.jsx)(s,{story:`AccessibilityI18n`}),`
`,(0,r.jsxs)(t.p,{children:[(0,r.jsx)(u,{name:`circle-check`,style:{color:`var(--ods-semantic-color-content-success)`}}),` Screen readers will announce the label, the field, its content and custom label of focused action.`]})]})}function a(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(i,{...e})}):i(e)}function o(e,t){throw Error(`Expected `+(t?`component`:`object`)+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}export{a as default};