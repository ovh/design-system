import{i as e}from"./rolldown-runtime-Dd_uD5pT.js";import{t}from"./jsx-runtime-DREnUpxT.js";import{T as n}from"./index-CdRG7ZE_.js";var r=e(t());function i(e){let t={em:`em`,li:`li`,ol:`ol`,p:`p`,strong:`strong`,...n(),...e.components},{Anatomy:i,BestPractices:a,Canvas:s,DocLink:c,Heading:l,Icon:u,IdentityCard:d,Kbd:f}=t;return i||o(`Anatomy`,!0),a||o(`BestPractices`,!0),s||o(`Canvas`,!0),c||o(`DocLink`,!0),l||o(`Heading`,!0),u||o(`Icon`,!0),d||o(`IdentityCard`,!0),f||o(`Kbd`,!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.p,{children:(0,r.jsxs)(t.em,{children:[`A `,(0,r.jsx)(t.strong,{children:`Textarea`}),` component allows users to input and edit multiple lines of text.`]})}),`
`,(0,r.jsx)(s,{story:`Overview`,source:`none`}),`
`,(0,r.jsx)(l,{label:`Overview`,level:2}),`
`,(0,r.jsxs)(d,{aliases:[`Text Box`],extraLinks:[(0,r.jsx)(c,{to:`/guides/forms`,children:`Form Guidelines`})],figmaLink:`https://www.figma.com/design/9jDDTcR4a9jPRFcdjawAlf/ODS---UI-Kit?node-id=53-11147`,githubUrl:`https://github.com/ovh/design-system/tree/master/packages/ods-react/src/components/textarea`,name:`Textarea`,children:[(0,r.jsxs)(t.p,{children:[`The `,(0,r.jsx)(t.strong,{children:`Textarea`}),` component is used to capture and display multi-line text input from users.`]}),(0,r.jsx)(t.p,{children:`It is typically used in forms where users need to provide detailed information, comments, or descriptions.`})]}),`
`,(0,r.jsx)(l,{label:`Usage`,level:2}),`
`,(0,r.jsxs)(t.p,{children:[`Use the `,(0,r.jsx)(t.strong,{children:`Textarea`}),` component to allow users to enter multi-line text in forms, such as comments, messages, descriptions, or other detailed information.`]}),`
`,(0,r.jsxs)(t.p,{children:[`Ensure that the `,(0,r.jsx)(t.strong,{children:`Textarea`}),` is appropriately sized for the expected input and provides clear guidance on what information is needed.`]}),`
`,(0,r.jsx)(l,{label:`Dos & Don'ts`,level:3}),`
`,(0,r.jsx)(a,{donts:[`- Don't use a Textarea for short, single-line inputs. Use an Input instead`,`- Don't rely on a placeholder as a substitute for a proper label since it disappears once the user starts typing`,`- Don't disable resizing if users are expected to write long-form content and might need a larger view`],dos:[`- Use a Textarea for inputs that may span multiple lines, such as comments, descriptions, or messages`,`- Always pair the Textarea with a label to clearly explain what is expected`,`- Use helper text to provide guidance or clarify formatting when needed`,`- Allow scrolling or resizing if users are likely to enter long text (based on use case)`,`- Use Textarea for a text longer than a single line`]}),`
`,(0,r.jsx)(l,{label:`Best Practices in Context`,level:3}),`
`,(0,r.jsx)(i,{src:`components/textarea/anatomy.png`}),`
`,(0,r.jsxs)(t.ol,{children:[`
`,(0,r.jsx)(t.li,{children:(0,r.jsx)(t.strong,{children:`Textarea`})}),`
`,(0,r.jsx)(t.li,{children:(0,r.jsx)(t.strong,{children:`Placeholder or textarea text`})}),`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:`Resize handler`}),` - optional`]}),`
`]}),`
`,(0,r.jsx)(l,{label:`Placement`,level:2}),`
`,(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:`Textarea`}),` should be vertically aligned with other form components on a same page.`]}),`
`,(0,r.jsx)(l,{label:`Behavior`,level:2}),`
`,(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:`Textarea`}),` can be hovered, focused, disabled, or set to read-only.`]}),`
`,(0,r.jsx)(t.p,{children:`When disabled, the component cannot be focused or interacted with.`}),`
`,(0,r.jsxs)(t.p,{children:[`If the user types more text than the `,(0,r.jsx)(t.strong,{children:`Textarea`}),` can display, a scrollbar appears to allow scrolling.`]}),`
`,(0,r.jsxs)(t.p,{children:[`The `,(0,r.jsx)(t.strong,{children:`Textarea`}),` supports native browser resizing, but it is not enabled by default.`]}),`
`,(0,r.jsx)(l,{label:`Navigation`,level:2}),`
`,(0,r.jsx)(l,{label:`Focus Management`,level:3}),`
`,(0,r.jsxs)(t.p,{children:[`When the `,(0,r.jsx)(t.strong,{children:`Textarea`}),` is enabled, it can receive focus via keyboard interaction.`]}),`
`,(0,r.jsxs)(t.p,{children:[`A disabled `,(0,r.jsx)(t.strong,{children:`Textarea`}),` cannot receive focus.`]}),`
`,(0,r.jsxs)(t.p,{children:[`A read-only `,(0,r.jsx)(t.strong,{children:`Textarea`}),` can receive focus, allowing users to scroll and select content, but its content cannot be modified.`]}),`
`,(0,r.jsx)(l,{label:`General Keyboard Shortcuts`,level:3}),`
`,(0,r.jsxs)(t.p,{children:[`Pressing `,(0,r.jsx)(f,{children:`Tab`}),` moves focus to the `,(0,r.jsx)(t.strong,{children:`Textarea`}),`.`]}),`
`,(0,r.jsxs)(t.p,{children:[`Pressing `,(0,r.jsx)(f,{children:`Shift`}),` + `,(0,r.jsx)(f,{children:`Tab`}),` moves focus to the previous focusable element.`]}),`
`,(0,r.jsxs)(t.p,{children:[`Pressing `,(0,r.jsx)(f,{children:`Enter`}),` creates a new line within the `,(0,r.jsx)(t.strong,{children:`Textarea`}),`.`]}),`
`,(0,r.jsxs)(t.p,{children:[`Pressing `,(0,r.jsx)(f,{children:`Arrow`}),` keys moves the caret within the text content.`]}),`
`,(0,r.jsxs)(t.p,{children:[`Pressing `,(0,r.jsx)(f,{children:`Ctrl`}),` + `,(0,r.jsx)(f,{children:`Arrow Left`}),` / `,(0,r.jsx)(f,{children:`Arrow Right`}),` (or `,(0,r.jsx)(f,{children:`Option`}),` + `,(0,r.jsx)(f,{children:`Arrow Left`}),` / `,(0,r.jsx)(f,{children:`Arrow Right`}),` on macOS) moves the caret by word.`]}),`
`,(0,r.jsxs)(t.p,{children:[`Pressing `,(0,r.jsx)(f,{children:`Home`}),` / `,(0,r.jsx)(f,{children:`End`}),` (or `,(0,r.jsx)(f,{children:`Cmd`}),`+ `,(0,r.jsx)(f,{children:`Arrow`}),` keys on macOS) moves the caret to the beginning or end of the line.`]}),`
`,(0,r.jsxs)(t.p,{children:[`Pressing `,(0,r.jsx)(f,{children:`Page Up`}),` / `,(0,r.jsx)(f,{children:`Page Down`}),` scrolls through the content if it's longer than the visible area.`]}),`
`,(0,r.jsx)(l,{label:`Accessibility`,level:2}),`
`,(0,r.jsx)(t.p,{children:`To ensure proper accessibility, it must be correctly labeled, and provide live updates if a character limit is set.`}),`
`,(0,r.jsx)(l,{label:`Always provide an explicit label`,level:3}),`
`,(0,r.jsxs)(t.p,{children:[`Every `,(0,r.jsx)(t.strong,{children:`Textarea`}),` must have a clear and explicit label to ensure that users (especially screen reader users) understand its purpose,
using either `,(0,r.jsx)(t.strong,{children:`FormField`}),` or a native label tag.`]}),`
`,(0,r.jsx)(s,{story:`AccessibilityFormField`}),`
`,(0,r.jsxs)(t.p,{children:[(0,r.jsx)(u,{name:`circle-check`,style:{color:`var(--ods-semantic-color-content-success)`}}),` Screen readers will announce the label and the field.`]}),`
`,(0,r.jsx)(l,{label:`Linking helper text`,level:3}),`
`,(0,r.jsx)(s,{story:`AccessibilityDescribedBy`}),`
`,(0,r.jsxs)(t.p,{children:[(0,r.jsx)(u,{name:`circle-check`,style:{color:`var(--ods-semantic-color-content-success)`}}),` Screen readers will announce the label, the field and the helper text.`]})]})}function a(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(i,{...e})}):i(e)}function o(e,t){throw Error(`Expected `+(t?`component`:`object`)+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}export{a as default};