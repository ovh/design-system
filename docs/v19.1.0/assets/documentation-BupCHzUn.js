import{j as e}from"./jsx-runtime-VM66peLj.js";import{useMDXComponents as l}from"./index-DQB45XCM.js";import{a,o as c}from"./ods-react61-BFiU7C5S.js";import{M as d,C as s}from"./index-DQDMPrC3.js";import{C as i,O as p,A as h}from"./clipboard.stories-DliDw3QR.js";import{B as m}from"./Banner-D5YsTkFA.js";import{I as x,B as j}from"./IdentityCard-C39Eam7s.js";import{H as t}from"./Heading-BTR1K1mm.js";import"./StorybookLink-BJoxMnxL.js";import"./index-D_CmzhJ4.js";import"./index-2w0W-O47-BJ19ihbZ.js";import"./iframe-llaHorau.js";import"./index-ChzAxGiP.js";import"./index-CucsY3YN.js";import"./index-CXQShRbs.js";import"./index-DrFu-skq.js";import"./ClipboardTrigger-C-Q_zTcf.js";import"./index-CkQHsVsO.js";import"./use-locale-context-DLC4Hyvy.js";import"./Input-DtgH68sh.js";import"./FormFieldLabel-DQkMrZpp.js";import"./Text-B1XN51Xz.js";import"./useI18n-CFuCjRRO.js";import"./Button-Cu9Xbu09.js";import"./Spinner-BdLZU4dE.js";import"./colors-DSObuHxd.js";import"./icon-name-CL_C5kfn.js";import"./TooltipTrigger--1kPNsOd.js";import"./overlay-CZHjGBMC.js";import"./portal-CjJhVgfZ.js";import"./use-presence-BH5ft0ba.js";import"./use-event-OCVb0O1l.js";import"./index-Rz4wIOao.js";import"./index-inT8qsA6.js";import"./controls-BtiQQn1l.js";import"./ExternalLink-F7ndcp9T.js";import"./Link-DTswNFmS-CEk9YBDP.js";import"./Divider-DwZugXnI-RR--JbES.js";import"./ods-react222-B9lkGKUh.js";function r(o){const n={code:"code",em:"em",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",...l(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(d,{of:i,name:"Documentation"}),`
`,e.jsx(m,{of:i}),`
`,e.jsx(n.p,{children:e.jsxs(n.em,{children:[e.jsx(n.strong,{children:"Clipboard"})," component allows user to view and copy information to its ",e.jsx(n.strong,{children:"Clipboard"}),"."]})}),`
`,e.jsx(s,{of:p,sourceState:"none"}),`
`,e.jsx(t,{label:"Overview",level:2}),`
`,e.jsx(x,{aliases:["Copy Component","Copy to Clipboard"],figmaLink:"https://www.figma.com/design/9jDDTcR4a9jPRFcdjawAlf/ODS---UI-Kit?node-id=26-7351",githubUrl:"https://github.com/ovh/design-system/tree/master/packages/ods-react/src/components/clipboard",name:"Clipboard",children:e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Clipboard"})," component is used to copy quickly and easily a text, a link and more to the ",e.jsx(n.strong,{children:"Clipboard"}),"."]})}),`
`,e.jsx(t,{label:"Usage",level:2}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Clipboard"})," is used to quickly and easily copy an amount of text to the user's ",e.jsx(n.strong,{children:"Clipboard"}),"."]}),`
`,e.jsx(n.p,{children:"It can be used when it is considered that it will cause trouble for the user to select and copy a text."}),`
`,e.jsx(t,{label:"Dos & Don'ts",level:3}),`
`,e.jsx(j,{donts:["- Don't use the Clipboard just to display static text, use a read-only Input or Text component instead","- Don't display text that should be editable in a Clipboard, this component is read-only by nature","- Don't place the Clipboard in contexts where copying is unnecessary or irrelevant"],dos:["- Use the Clipboard component to allow users to easily copy non-editable text, such as tokens, or IDs","- Use Clipboard when copying text manually would be error-prone or tedious","- Use the mask/unmask toggle appropriately for sensitive content, like passwords or tokens"]}),`
`,e.jsx(t,{label:"Best Practices in Context",level:3}),`
`,e.jsx(n.p,{children:e.jsx(n.img,{src:"components/clipboard/anatomy.png",alt:"Component anatomy",title:"Component anatomy"})}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.strong,{children:"Clipboard"})}),`
`,e.jsx(n.li,{children:e.jsx(n.strong,{children:"Input text"})}),`
`,e.jsx(n.li,{children:e.jsx(n.strong,{children:"Copy button"})}),`
`,e.jsx(n.li,{children:e.jsx(n.strong,{children:"Tooltip"})}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Show/Hide button"})," - optional"]}),`
`]}),`
`,e.jsx(t,{label:"Placement",level:2}),`
`,e.jsxs(n.p,{children:["By default, the ",e.jsx(n.strong,{children:"Clipboard"})," content is left-aligned in its container."]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Clipboard"}),"'s Tooltip is right-aligned after the component by default, and vertically centered."]}),`
`,e.jsx(t,{label:"Behavior",level:2}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Clipboard"}),` can be focused and hovered. They can be disabled.
When disabled, the component can't be hovered, focused nor clicked.`]}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.strong,{children:"Clipboard"})," component is used as read-only, to allow users to copy a predefined text that cannot be edited directly."]}),`
`,e.jsx(n.p,{children:"Even if no visual indicator prompts the user to do so, the user can select the text directly in the Input."}),`
`,e.jsxs(n.p,{children:["The trigger for copying the Input field content to the ",e.jsx(n.strong,{children:"Clipboard"}),' is the "copy" button.']}),`
`,e.jsx(n.p,{children:"When hovering or focusing, a Tooltip is displayed as a helper."}),`
`,e.jsx(n.p,{children:"The clipboard masking toggled using show/hide action is permanent. Users have to click again to show/hide the Input field content."}),`
`,e.jsxs(n.p,{children:['A confirmation Tooltip is displayed (if user is still hovering the "copy" button) when ',e.jsx(n.strong,{children:"Clipboard"})," content has been successfully copied."]}),`
`,e.jsx(t,{label:"Navigation",level:2}),`
`,e.jsx(t,{label:"Focus Management",level:3}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.strong,{children:"Clipboard"})," receives focus as part of the natural tab order. Copy button becomes focusable immediately after the ",e.jsx(n.strong,{children:"Clipboard"}),"."]}),`
`,e.jsxs(n.p,{children:["If the ",e.jsx(n.strong,{children:"Clipboard"})," is disabled, it is  skipped in the tab order and cannot be focused."]}),`
`,e.jsx(t,{label:"General Keyboard Shortcuts",level:3}),`
`,e.jsxs(n.p,{children:["Pressing ",e.jsx(n.code,{children:"Ctrl"})," + ",e.jsx(n.code,{children:"C"})," (or ",e.jsx(n.code,{children:"Cmd"})," + ",e.jsx(n.code,{children:"C"})," on macOS) while the input field is focused copies the selected text."]}),`
`,e.jsxs(n.p,{children:["Pressing ",e.jsx(n.code,{children:"Enter"})," or ",e.jsx(n.code,{children:"Space"})," when the copy button is focused triggers the copy action (button component behavior)."]}),`
`,e.jsx(t,{label:"Accessibility",level:2}),`
`,e.jsxs(n.p,{children:["To ensure proper accessibility, the ",e.jsx(n.strong,{children:"Clipboard"})," component must be correctly labeled."]}),`
`,e.jsx(t,{label:"Always provide an explicit label",level:3}),`
`,e.jsxs(n.p,{children:["Every ",e.jsx(n.strong,{children:"Clipboard"})," must have a clear and explicit label to ensure that users (especially screen reader users) understand its purpose, using either ",e.jsx(n.strong,{children:"FormField"})," or a native label tag."]}),`
`,e.jsx(s,{of:h,sourceState:"shown"}),`
`,e.jsxs(n.p,{children:[e.jsx(a,{name:c.circleCheck,style:{color:"var(--ods-color-success-500)"}})," Screen readers will announce the label, the field and its content."]})]})}function ne(o={}){const{wrapper:n}={...l(),...o.components};return n?e.jsx(n,{...o,children:e.jsx(r,{...o})}):r(o)}export{ne as default};
