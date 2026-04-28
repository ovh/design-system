import{j as e}from"./jsx-runtime-Cfl8ynUo.js";import{useMDXComponents as l}from"./index-ZwkxtaJJ.js";import{k as s}from"./Kbd-Cnje_EfN-CvQx-mOR.js";import{M as c}from"./index-BnNeS_H2.js";import{P as r,O as p,A as d,a as h,b as m}from"./prompt-input.stories-9VOsIr1H.js";import{A as u}from"./Anatomy-DkXJCwiR.js";import{B as x}from"./Banner-DYvgfZRi.js";import{C as o}from"./Canvas-zVPAbnas.js";import{B as b}from"./BestPractices-j46EvglC.js";import{H as n}from"./Heading-lgNAZPkT.js";import{I as j}from"./IdentityCard-BTJG0hV7.js";import"./StorybookLink-BXJgW-hY.js";import"./index-jIWwRBLr.js";import"./index-CWkFp9WS-BSIT86NH.js";import"./iframe-DtAqipxR.js";import"./index-DWDEzXrj.js";import"./index-N93khynk.js";import"./index-CXQShRbs.js";import"./index-DrFu-skq.js";import"./index-B0M5RXeR.js";import"./index-CqY9YpN0.js";import"./Text-CAQM6i-X.js";import"./FileThumbnail-kmadOnAZ.js";import"./index-BXelFz3z.js";import"./useI18n-C0NLVYPv.js";import"./Button-B-GJ-1TA.js";import"./Spinner-DJB5ZadI.js";import"./colors-DSObuHxd.js";import"./icon-name-D0KNfDOz.js";import"./ProgressBar-DLYyMEWe.js";import"./context-C_-r2uoG.js";import"./Textarea-1HJNDjsP.js";import"./controls-BtiQQn1l.js";import"./source-CPEZJ6oD.js";import"./divider-color-2AUX7hAv.js";import"./icon-name-kFDeGXCQ--4TVzzrX.js";import"./index-DA9hOdui.js";import"./context-Z_Xa7sWf-5kwUyuQy.js";import"./index-D6AFTHzO.js";import"./lz-string-U2heoObX.js";import"./meta-twt-Yy4M.js";import"./ResetTheme-CLF5P7Bf.js";import"./tokens-BrWUS-3i.js";import"./divider-color-DMMH0ySn-B7JauIP0.js";import"./colors-C1Wmnk_L-aAAP9SXj.js";import"./Table-Bof_Nsov-CS9ZUwCH.js";import"./ExternalLink-D9Oykgkh.js";import"./Link-fc4PsoC7-BoLkDjrj.js";import"./Table-BXVk_N0H.js";function a(i){const t={code:"code",em:"em",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...l(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(c,{of:r,name:"Documentation",tags:["new"]}),`
`,e.jsx(x,{of:r}),`
`,e.jsx(t.p,{children:e.jsxs(t.em,{children:["The ",e.jsx(t.strong,{children:"Prompt Input"})," component is a composable text input with a submit button, designed for conversational and AI-driven interfaces."]})}),`
`,e.jsx(o,{of:p,sourceState:"none"}),`
`,e.jsx(n,{label:"Overview",level:2}),`
`,e.jsx(j,{aliases:["Prompt textarea","Chat input","Submissible text"],figmaLink:"https://www.figma.com/design/9jDDTcR4a9jPRFcdjawAlf/branch/mwZtfuQ9nzv6fY0dfez4NZ/ODS---UI-Kit?node-id=18830-7160&p=f&t=321I8hUuyf5gg2uQ-0 ",githubUrl:"https://github.com/ovh/design-system/tree/master/packages/ods-react/src/components/prompt-input",name:"Prompt Input",startingVersion:19,children:e.jsxs(t.p,{children:["The ",e.jsx(t.strong,{children:"Prompt Input"})," component is a multi-line textarea with an integrated submit button, designed to handle user input and submission."]})}),`
`,e.jsx(n,{label:"Usage",level:2}),`
`,e.jsxs(t.p,{children:["The ",e.jsx(t.strong,{children:"Prompt Input"})," component is commonly used for user input and submission in chat interfaces, messaging applications, and other interactive systems."]}),`
`,e.jsx(t.p,{children:"It is commonly used for:"}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsx(t.li,{children:"Chat interfaces to allow users to send messages to each other"}),`
`,e.jsx(t.li,{children:"Virtual assistants to allow users to input queries or commands"}),`
`,e.jsx(t.li,{children:"Content creation tools to allow users to input text or upload files for content creation"}),`
`,e.jsx(t.li,{children:"AI-powered writing tools to allow users to input prompts and receive generated text"}),`
`,e.jsx(t.li,{children:"Customer support platforms to allow users to input questions or issues and receive support"}),`
`]}),`
`,e.jsx(n,{label:"Dos & Don'ts",level:3}),`
`,e.jsx(b,{donts:["- Disable the submit button without a clear reason (e.g., empty input, max length exceeded)","- Allow submission while a file is still uploading","- Use the component as a replacement for a standard textarea without considering the implications of the integrated submit button","- Forget to handle errors and exceptions properly, such as when a user attempts to upload a file that exceeds the maximum allowed size"],dos:["- Provide a placeholder text to guide users on what to input","- Use the attachment upload feature to allow users to add files to their messages"]}),`
`,e.jsx(n,{label:"Best Practices in Context",level:3}),`
`,e.jsx(u,{src:"components/prompt-input/anatomy.png"}),`
`,e.jsxs(t.ol,{children:[`
`,e.jsx(t.li,{children:e.jsx(t.strong,{children:"Prompt Input"})}),`
`,e.jsxs(t.li,{children:[e.jsx(t.strong,{children:"File attachments (if attached)"})," - optional"]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.strong,{children:"File upload button"})," - optional"]}),`
`,e.jsx(t.li,{children:e.jsx(t.strong,{children:"Input text area"})}),`
`,e.jsx(t.li,{children:e.jsx(t.strong,{children:"Send button"})}),`
`]}),`
`,e.jsx(n,{label:"Placement",level:2}),`
`,e.jsxs(t.p,{children:["The ",e.jsx(t.strong,{children:"Prompt Input"})," is typically anchored at the bottom of a conversational view, spanning the full width of the content area."]}),`
`,e.jsx(t.p,{children:"It should remain visible and accessible at all times during an active conversation, without being obscured by the message list above it."}),`
`,e.jsx(n,{label:"Behavior",level:2}),`
`,e.jsx(n,{label:"Submission",level:3}),`
`,e.jsx(t.p,{children:"The submit button is enabled when the input is not empty and file stack is empty and the max length has not been exceeded. When the submit button is clicked, the component submits the user's input."}),`
`,e.jsx(t.p,{children:"After submission, input is being cleared."}),`
`,e.jsx(n,{label:"Processing State",level:3}),`
`,e.jsx(t.p,{children:'When the component is in a processing or generating state, the input can be locked (configurable), and the submit button is replaced with a "stop" button.'}),`
`,e.jsx(n,{label:"Attachments",level:3}),`
`,e.jsx(t.p,{children:"The component allows users to upload attachments, which are displayed in a preview area with a clear/remove button. The attachment upload feature can be triggered by a file upload trigger."}),`
`,e.jsx(n,{label:"Navigation",level:2}),`
`,e.jsx(n,{label:"Focus Management",level:3}),`
`,e.jsx(t.p,{children:"When the component receives focus, it should focus on the textarea. When the user interacts with the attachment upload feature, focus should be moved to the file upload trigger."}),`
`,e.jsx(n,{label:"General Keyboard Shortcuts",level:3}),`
`,e.jsxs(t.p,{children:["Pressing ",e.jsx(s,{children:"Tab"}),"moves focus forward to the next interactive element."]}),`
`,e.jsxs(t.p,{children:["Pressing ",e.jsx(s,{children:"Shift"})," + ",e.jsx(s,{children:"Tab"})," moves focus backward to the previous interactive element."]}),`
`,e.jsxs(t.p,{children:["Pressing ",e.jsx(s,{children:"Enter"})," submits the user's input when the submit button or the textarea is focused."]}),`
`,e.jsxs(t.p,{children:["Pressing ",e.jsx(s,{children:"Shift"})," + ",e.jsx(s,{children:"Enter"})," creates a new line in the user's input."]}),`
`,e.jsxs(t.p,{children:["Pressing ",e.jsx(s,{children:"Escape"})," cancels the submission and closes any open attachment upload triggers."]}),`
`,e.jsx(n,{label:"Accessibility",level:2}),`
`,e.jsx(n,{label:"Textarea labelling",level:3}),`
`,e.jsxs(t.p,{children:["Because the ",e.jsx(t.strong,{children:"Prompt Input"})," does not render a visible label by default, you must supply an accessible name for the textarea."]}),`
`,e.jsxs(t.p,{children:["Use the ",e.jsx(t.code,{children:"aria-label"})," prop on ",e.jsx(t.code,{children:"PromptInputTextControl"})," to give screen readers a meaningful description of the field."]}),`
`,e.jsx(o,{of:d,sourceState:"shown"}),`
`,e.jsx(n,{label:"Button labelling",level:3}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsxs(t.li,{children:["The file upload button and the send button don't hold accessible text by default, therefore they must carry an ",e.jsx(t.code,{children:"aria-label"})," (e.g. ",e.jsx(t.code,{children:'"Attach file"'}),", ",e.jsx(t.code,{children:'"Send request"'}),", …) to be announced correctly by assistive technologies."]}),`
`]}),`
`,e.jsx(o,{of:h,sourceState:"shown"}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsxs(t.li,{children:["As the send button displays a loading spinner when the component is in the ",e.jsx(t.code,{children:"loading"})," state, ensure the button's ",e.jsx(t.code,{children:"aria-label"})," is updated to convey the loading state to users who can't rely on visual cues."]}),`
`]}),`
`,e.jsx(o,{of:m,sourceState:"shown"})]})}function me(i={}){const{wrapper:t}={...l(),...i.components};return t?e.jsx(t,{...i,children:e.jsx(a,{...i})}):a(i)}export{me as default};
