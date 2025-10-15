import{j as e}from"./jsx-runtime-Cfl8ynUo.js";import{useMDXComponents as r}from"./index-ZwkxtaJJ.js";import{t as l,l as a}from"./ods-react60-CRx7zEey.js";import{M as c,C as d}from"./index-8pGbFWRq.js";import{C as s,O as p,A as h}from"./clipboard.stories-BLCc72tf.js";import{B as m}from"./Banner-CNp5SML8.js";import{I as x,B as j}from"./IdentityCard-e2WB6ddF.js";import{C as u}from"./Canvas-Df5XpfVk.js";import{H as o}from"./Heading-hbfjmHNc.js";import"./index-jIWwRBLr.js";import"./index-2w0W-O47-BJ19ihbZ.js";import"./iframe-D7nmkxLr.js";import"./index-DWDEzXrj.js";import"./index-N93khynk.js";import"./index-CXQShRbs.js";import"./index-DrFu-skq.js";import"./ClipboardTrigger-0gXmq-bf.js";import"./index-CqY9YpN0.js";import"./use-locale-context-BIV2aQtl.js";import"./Input-DA3rR-6T.js";import"./FormFieldLabel-DW-nAxje.js";import"./Text-vMb3-i8V.js";import"./useI18n-C0NLVYPv.js";import"./Button-Tqe-VRSF.js";import"./Spinner-DNePmVpu.js";import"./colors-DSObuHxd.js";import"./icon-name-C581wThh.js";import"./TooltipTrigger-CT3e8Irz.js";import"./overlay-CZHjGBMC.js";import"./portal-QnUqvOWs.js";import"./use-presence-BC2E-XtL.js";import"./use-event-c9j7vq_1.js";import"./index-DaqjtwB0.js";import"./index-Bc-ZgdcL.js";import"./controls-BtiQQn1l.js";import"./ExternalLink-izdABMGv.js";import"./Link-BWQEuWpd-DsrdP0qI.js";import"./TooltipTrigger-Iu3rt7LP-DQH4Rvrv.js";import"./index-CTDx-6u2.js";import"./lz-string-U2heoObX.js";import"./meta-B7heVWH0.js";import"./source-CPEZJ6oD.js";import"./ods-react236-aAAP9SXj.js";function i(n){const t={code:"code",em:"em",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",...r(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(c,{of:s,name:"Documentation"}),`
`,e.jsx(m,{of:s}),`
`,e.jsx(t.p,{children:e.jsxs(t.em,{children:[e.jsx(t.strong,{children:"Clipboard"})," component allows user to view and copy information to its ",e.jsx(t.strong,{children:"Clipboard"}),"."]})}),`
`,e.jsx(d,{of:p,sourceState:"none"}),`
`,e.jsx(o,{label:"Overview",level:2}),`
`,e.jsx(x,{aliases:["Copy Component","Copy to Clipboard"],figmaLink:"https://www.figma.com/design/9jDDTcR4a9jPRFcdjawAlf/ODS---UI-Kit?node-id=26-7351",githubUrl:"https://github.com/ovh/design-system/tree/master/packages/ods-react/src/components/clipboard",name:"Clipboard",children:e.jsxs(t.p,{children:[e.jsx(t.strong,{children:"Clipboard"})," component is used to copy quickly and easily a text, a link and more to the ",e.jsx(t.strong,{children:"Clipboard"}),"."]})}),`
`,e.jsx(o,{label:"Usage",level:2}),`
`,e.jsxs(t.p,{children:[e.jsx(t.strong,{children:"Clipboard"})," is used to quickly and easily copy an amount of text to the user's ",e.jsx(t.strong,{children:"Clipboard"}),"."]}),`
`,e.jsx(t.p,{children:"It can be used when it is considered that it will cause trouble for the user to select and copy a text."}),`
`,e.jsx(o,{label:"Dos & Don'ts",level:3}),`
`,e.jsx(j,{donts:["- Don't use the Clipboard just to display static text, use a read-only Input or Text component instead","- Don't display text that should be editable in a Clipboard, this component is read-only by nature","- Don't place the Clipboard in contexts where copying is unnecessary or irrelevant"],dos:["- Use the Clipboard component to allow users to easily copy non-editable text, such as tokens, or IDs","- Use Clipboard when copying text manually would be error-prone or tedious","- Use the mask/unmask toggle appropriately for sensitive content, like passwords or tokens"]}),`
`,e.jsx(o,{label:"Best Practices in Context",level:3}),`
`,e.jsx(t.p,{children:e.jsx(t.img,{src:"components/clipboard/anatomy.png",alt:"Component anatomy",title:"Component anatomy"})}),`
`,e.jsxs(t.ol,{children:[`
`,e.jsx(t.li,{children:e.jsx(t.strong,{children:"Clipboard"})}),`
`,e.jsx(t.li,{children:e.jsx(t.strong,{children:"Input text"})}),`
`,e.jsx(t.li,{children:e.jsx(t.strong,{children:"Copy button"})}),`
`,e.jsx(t.li,{children:e.jsx(t.strong,{children:"Tooltip"})}),`
`,e.jsxs(t.li,{children:[e.jsx(t.strong,{children:"Show/Hide button"})," - optional"]}),`
`]}),`
`,e.jsx(o,{label:"Placement",level:2}),`
`,e.jsxs(t.p,{children:["By default, the ",e.jsx(t.strong,{children:"Clipboard"})," content is left-aligned in its container."]}),`
`,e.jsxs(t.p,{children:[e.jsx(t.strong,{children:"Clipboard"}),"'s Tooltip is right-aligned after the component by default, and vertically centered."]}),`
`,e.jsx(o,{label:"Behavior",level:2}),`
`,e.jsxs(t.p,{children:[e.jsx(t.strong,{children:"Clipboard"}),` can be focused and hovered. They can be disabled.
When disabled, the component can't be hovered, focused nor clicked.`]}),`
`,e.jsxs(t.p,{children:["The ",e.jsx(t.strong,{children:"Clipboard"})," component is used as read-only, to allow users to copy a predefined text that cannot be edited directly."]}),`
`,e.jsx(t.p,{children:"Even if no visual indicator prompts the user to do so, the user can select the text directly in the Input."}),`
`,e.jsxs(t.p,{children:["The trigger for copying the Input field content to the ",e.jsx(t.strong,{children:"Clipboard"}),' is the "copy" button.']}),`
`,e.jsx(t.p,{children:"When hovering or focusing, a Tooltip is displayed as a helper."}),`
`,e.jsx(t.p,{children:"The clipboard masking toggled using show/hide action is permanent. Users have to click again to show/hide the Input field content."}),`
`,e.jsxs(t.p,{children:['A confirmation Tooltip is displayed (if user is still hovering the "copy" button) when ',e.jsx(t.strong,{children:"Clipboard"})," content has been successfully copied."]}),`
`,e.jsx(o,{label:"Navigation",level:2}),`
`,e.jsx(o,{label:"Focus Management",level:3}),`
`,e.jsxs(t.p,{children:["The ",e.jsx(t.strong,{children:"Clipboard"})," receives focus as part of the natural tab order. Copy button becomes focusable immediately after the ",e.jsx(t.strong,{children:"Clipboard"}),"."]}),`
`,e.jsxs(t.p,{children:["If the ",e.jsx(t.strong,{children:"Clipboard"})," is disabled, it is  skipped in the tab order and cannot be focused."]}),`
`,e.jsx(o,{label:"General Keyboard Shortcuts",level:3}),`
`,e.jsxs(t.p,{children:["Pressing ",e.jsx(t.code,{children:"Ctrl"})," + ",e.jsx(t.code,{children:"C"})," (or ",e.jsx(t.code,{children:"Cmd"})," + ",e.jsx(t.code,{children:"C"})," on macOS) while the input field is focused copies the selected text."]}),`
`,e.jsxs(t.p,{children:["Pressing ",e.jsx(t.code,{children:"Enter"})," or ",e.jsx(t.code,{children:"Space"})," when the copy button is focused triggers the copy action (button component behavior)."]}),`
`,e.jsx(o,{label:"Accessibility",level:2}),`
`,e.jsxs(t.p,{children:["To ensure proper accessibility, the ",e.jsx(t.strong,{children:"Clipboard"})," component must be correctly labeled."]}),`
`,e.jsx(o,{label:"Always provide an explicit label",level:3}),`
`,e.jsxs(t.p,{children:["Every ",e.jsx(t.strong,{children:"Clipboard"})," must have a clear and explicit label to ensure that users (especially screen reader users) understand its purpose, using either ",e.jsx(t.strong,{children:"FormField"})," or a native label tag."]}),`
`,e.jsx(u,{of:h,sourceState:"shown"}),`
`,e.jsxs(t.p,{children:[e.jsx(l,{name:a.circleCheck,style:{color:"var(--ods-color-success-500)"}})," Screen readers will announce the label, the field and its content."]})]})}function re(n={}){const{wrapper:t}={...r(),...n.components};return t?e.jsx(t,{...n,children:e.jsx(i,{...n})}):i(n)}export{re as default};
