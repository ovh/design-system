import{i as e}from"./rolldown-runtime-Dd_uD5pT.js";import{t}from"./jsx-runtime-DREnUpxT.js";import{T as n}from"./index-CzEwg6AJ.js";var r=e(t());function i(e){let t={code:`code`,em:`em`,li:`li`,ol:`ol`,p:`p`,strong:`strong`,ul:`ul`,...n(),...e.components},{Anatomy:i,BestPractices:a,Canvas:s,Heading:c,IdentityCard:l,Kbd:u}=t;return i||o(`Anatomy`,!0),a||o(`BestPractices`,!0),s||o(`Canvas`,!0),c||o(`Heading`,!0),l||o(`IdentityCard`,!0),u||o(`Kbd`,!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.p,{children:(0,r.jsxs)(t.em,{children:[`The `,(0,r.jsx)(t.strong,{children:`Prompt Input`}),` component is a composable text input with a submit button, designed for conversational and AI-driven interfaces.`]})}),`
`,(0,r.jsx)(s,{story:`Overview`,source:`none`}),`
`,(0,r.jsx)(c,{label:`Overview`,level:2}),`
`,(0,r.jsx)(l,{aliases:[`Prompt textarea`,`Chat input`,`Submissible text`],figmaLink:`https://www.figma.com/design/9jDDTcR4a9jPRFcdjawAlf/branch/mwZtfuQ9nzv6fY0dfez4NZ/ODS---UI-Kit?node-id=18830-7160&p=f&t=321I8hUuyf5gg2uQ-0 `,githubUrl:`https://github.com/ovh/design-system/tree/master/packages/ods-react/src/components/prompt-input`,name:`Prompt Input`,startingVersion:19,children:(0,r.jsxs)(t.p,{children:[`The `,(0,r.jsx)(t.strong,{children:`Prompt Input`}),` component is a multi-line textarea with an integrated submit button, designed to handle user input and submission.`]})}),`
`,(0,r.jsx)(c,{label:`Usage`,level:2}),`
`,(0,r.jsxs)(t.p,{children:[`The `,(0,r.jsx)(t.strong,{children:`Prompt Input`}),` component is commonly used for user input and submission in chat interfaces, messaging applications, and other interactive systems.`]}),`
`,(0,r.jsx)(t.p,{children:`It is commonly used for:`}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsx)(t.li,{children:`Chat interfaces to allow users to send messages to each other`}),`
`,(0,r.jsx)(t.li,{children:`Virtual assistants to allow users to input queries or commands`}),`
`,(0,r.jsx)(t.li,{children:`Content creation tools to allow users to input text or upload files for content creation`}),`
`,(0,r.jsx)(t.li,{children:`AI-powered writing tools to allow users to input prompts and receive generated text`}),`
`,(0,r.jsx)(t.li,{children:`Customer support platforms to allow users to input questions or issues and receive support`}),`
`]}),`
`,(0,r.jsx)(c,{label:`Dos & Don'ts`,level:3}),`
`,(0,r.jsx)(a,{donts:[`- Disable the submit button without a clear reason (e.g., empty input, max length exceeded)`,`- Allow submission while a file is still uploading`,`- Use the component as a replacement for a standard textarea without considering the implications of the integrated submit button`,`- Forget to handle errors and exceptions properly, such as when a user attempts to upload a file that exceeds the maximum allowed size`],dos:[`- Provide a placeholder text to guide users on what to input`,`- Use the attachment upload feature to allow users to add files to their messages`]}),`
`,(0,r.jsx)(c,{label:`Best Practices in Context`,level:3}),`
`,(0,r.jsx)(i,{src:`components/prompt-input/anatomy.png`}),`
`,(0,r.jsxs)(t.ol,{children:[`
`,(0,r.jsx)(t.li,{children:(0,r.jsx)(t.strong,{children:`Prompt Input`})}),`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:`File attachments (if attached)`}),` - optional`]}),`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:`File upload button`}),` - optional`]}),`
`,(0,r.jsx)(t.li,{children:(0,r.jsx)(t.strong,{children:`Input text area`})}),`
`,(0,r.jsx)(t.li,{children:(0,r.jsx)(t.strong,{children:`Send button`})}),`
`]}),`
`,(0,r.jsx)(c,{label:`Placement`,level:2}),`
`,(0,r.jsxs)(t.p,{children:[`The `,(0,r.jsx)(t.strong,{children:`Prompt Input`}),` is typically anchored at the bottom of a conversational view, spanning the full width of the content area.`]}),`
`,(0,r.jsx)(t.p,{children:`It should remain visible and accessible at all times during an active conversation, without being obscured by the message list above it.`}),`
`,(0,r.jsx)(c,{label:`Behavior`,level:2}),`
`,(0,r.jsx)(c,{label:`Submission`,level:3}),`
`,(0,r.jsx)(t.p,{children:`The submit button is enabled when the input is not empty and file stack is empty and the max length has not been exceeded. When the submit button is clicked, the component submits the user's input.`}),`
`,(0,r.jsx)(t.p,{children:`After submission, input is being cleared.`}),`
`,(0,r.jsx)(c,{label:`Processing State`,level:3}),`
`,(0,r.jsx)(t.p,{children:`When the component is in a processing or generating state, the input can be locked (configurable), and the submit button is replaced with a "stop" button.`}),`
`,(0,r.jsx)(c,{label:`Attachments`,level:3}),`
`,(0,r.jsx)(t.p,{children:`The component allows users to upload attachments, which are displayed in a preview area with a clear/remove button. The attachment upload feature can be triggered by a file upload trigger.`}),`
`,(0,r.jsx)(c,{label:`Navigation`,level:2}),`
`,(0,r.jsx)(c,{label:`Focus Management`,level:3}),`
`,(0,r.jsx)(t.p,{children:`When the component receives focus, it should focus on the textarea. When the user interacts with the attachment upload feature, focus should be moved to the file upload trigger.`}),`
`,(0,r.jsx)(c,{label:`General Keyboard Shortcuts`,level:3}),`
`,(0,r.jsxs)(t.p,{children:[`Pressing `,(0,r.jsx)(u,{children:`Tab`}),`moves focus forward to the next interactive element.`]}),`
`,(0,r.jsxs)(t.p,{children:[`Pressing `,(0,r.jsx)(u,{children:`Shift`}),` + `,(0,r.jsx)(u,{children:`Tab`}),` moves focus backward to the previous interactive element.`]}),`
`,(0,r.jsxs)(t.p,{children:[`Pressing `,(0,r.jsx)(u,{children:`Enter`}),` submits the user's input when the submit button or the textarea is focused.`]}),`
`,(0,r.jsxs)(t.p,{children:[`Pressing `,(0,r.jsx)(u,{children:`Shift`}),` + `,(0,r.jsx)(u,{children:`Enter`}),` creates a new line in the user's input.`]}),`
`,(0,r.jsxs)(t.p,{children:[`Pressing `,(0,r.jsx)(u,{children:`Escape`}),` cancels the submission and closes any open attachment upload triggers.`]}),`
`,(0,r.jsx)(c,{label:`Accessibility`,level:2}),`
`,(0,r.jsx)(c,{label:`Textarea labelling`,level:3}),`
`,(0,r.jsxs)(t.p,{children:[`Because the `,(0,r.jsx)(t.strong,{children:`Prompt Input`}),` does not render a visible label by default, you must supply an accessible name for the textarea.`]}),`
`,(0,r.jsxs)(t.p,{children:[`Use the `,(0,r.jsx)(t.code,{children:`aria-label`}),` prop on `,(0,r.jsx)(t.code,{children:`PromptInputTextControl`}),` to give screen readers a meaningful description of the field.`]}),`
`,(0,r.jsx)(s,{story:`AccessibilityAriaLabel`}),`
`,(0,r.jsx)(c,{label:`Button labelling`,level:3}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsxs)(t.li,{children:[`
`,(0,r.jsxs)(t.p,{children:[`The file upload button and the send button only display an icon. They are announced as "Attach a file" and "Send" by default, translated with the `,(0,r.jsx)(t.code,{children:`locale`}),` prop (or the browser language).`]}),`
`]}),`
`,(0,r.jsxs)(t.li,{children:[`
`,(0,r.jsxs)(t.p,{children:[`To adapt these names to your context, override them for the whole component with the `,(0,r.jsx)(t.code,{children:`i18n`}),` prop of `,(0,r.jsx)(t.strong,{children:`PromptInput`}),`:`]}),`
`]}),`
`]}),`
`,(0,r.jsx)(s,{story:`AccessibilityI18n`}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsxs)(t.li,{children:[`Or set an `,(0,r.jsx)(t.code,{children:`aria-label`}),` on a given button, which takes precedence over the translations:`]}),`
`]}),`
`,(0,r.jsx)(s,{story:`AccessibilityButtonsLabels`}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsxs)(t.li,{children:[`As the send button displays a loading spinner when the component is in the `,(0,r.jsx)(t.code,{children:`loading`}),` state, ensure the button's `,(0,r.jsx)(t.code,{children:`aria-label`}),` is updated to convey the loading state to users who can't rely on visual cues.`]}),`
`]}),`
`,(0,r.jsx)(s,{story:`AccessibilityLoadingState`})]})}function a(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(i,{...e})}):i(e)}function o(e,t){throw Error(`Expected `+(t?`component`:`object`)+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}export{a as default};