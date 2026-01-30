import{j as e}from"./jsx-runtime-Cfl8ynUo.js";import{useMDXComponents as a}from"./index-ZwkxtaJJ.js";import{a as c,l as d}from"./ods-react67-C395g5lW.js";import{k as s}from"./Kbd-BhRHY5DX-DYqBejDt.js";import{M as p}from"./index-Cw5r0Kn8.js";import{C as i,O as h,A as m}from"./clipboard.stories-BHZ1JXFN.js";import{A as x}from"./Anatomy-DkXJCwiR.js";import{B as j}from"./Banner-X7WOeBPc.js";import{I as u,B as b}from"./IdentityCard-D9LjZbLA.js";import{C as r}from"./Canvas-i2Tfjesg.js";import{H as o}from"./Heading-Dep_rTif.js";import"./index-jIWwRBLr.js";import"./index-CWkFp9WS-BSIT86NH.js";import"./iframe-DCzti3mm.js";import"./index-DWDEzXrj.js";import"./index-N93khynk.js";import"./index-CXQShRbs.js";import"./index-DrFu-skq.js";import"./ClipboardTrigger-Dv2wHfAu.js";import"./index-CqY9YpN0.js";import"./use-locale-context-kHyebpMI.js";import"./Input-BllcUVFN.js";import"./FormFieldLabelSubLabel-DCAb65DU.js";import"./Text-CW33_IfE.js";import"./context-C_-r2uoG.js";import"./useI18n-C0NLVYPv.js";import"./Button-B-GJ-1TA.js";import"./Spinner-DJB5ZadI.js";import"./colors-DSObuHxd.js";import"./icon-name-BpdEc4-2.js";import"./TooltipTrigger-CRWH95NO.js";import"./overlay-CZHjGBMC.js";import"./portal-CJHwXgLI.js";import"./use-presence-C53EI5fL.js";import"./use-event-c9j7vq_1.js";import"./index-BlUhyWms.js";import"./controls-BtiQQn1l.js";import"./Table-D8Me597i-NC3k9YIT.js";import"./ExternalLink-C5hGBmwh.js";import"./Link-TMoA1i18-BDwROQOD.js";import"./Table-5ah53JFf.js";import"./TooltipTrigger-C3aN0eJB-DwV7p8FS.js";import"./ods-react121-5kwUyuQy.js";import"./index-CSeLFT3z.js";import"./lz-string-U2heoObX.js";import"./meta-DcQbZjt_.js";import"./source-CPEZJ6oD.js";import"./ResetTheme-xqxcB8cs.js";import"./tokens-BtVMeYnn.js";import"./Divider-wQyo85oE-CpSK6tnQ.js";function l(n){const t={em:"em",li:"li",ol:"ol",p:"p",strong:"strong",...a(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(p,{of:i,name:"Documentation"}),`
`,e.jsx(j,{of:i}),`
`,e.jsx(t.p,{children:e.jsxs(t.em,{children:[e.jsx(t.strong,{children:"Clipboard"})," component allows user to view and copy information to its ",e.jsx(t.strong,{children:"Clipboard"}),"."]})}),`
`,e.jsx(r,{of:h,sourceState:"none"}),`
`,e.jsx(o,{label:"Overview",level:2}),`
`,e.jsx(u,{aliases:["Copy Component","Copy to Clipboard"],figmaLink:"https://www.figma.com/design/9jDDTcR4a9jPRFcdjawAlf/ODS---UI-Kit?node-id=26-7351",githubUrl:"https://github.com/ovh/design-system/tree/master/packages/ods-react/src/components/clipboard",name:"Clipboard",children:e.jsxs(t.p,{children:[e.jsx(t.strong,{children:"Clipboard"})," component is used to copy quickly and easily a text, a link and more to the ",e.jsx(t.strong,{children:"Clipboard"}),"."]})}),`
`,e.jsx(o,{label:"Usage",level:2}),`
`,e.jsxs(t.p,{children:[e.jsx(t.strong,{children:"Clipboard"})," is used to quickly and easily copy an amount of text to the user's ",e.jsx(t.strong,{children:"Clipboard"}),"."]}),`
`,e.jsx(t.p,{children:"It can be used when it is considered that it will cause trouble for the user to select and copy a text."}),`
`,e.jsx(o,{label:"Dos & Don'ts",level:3}),`
`,e.jsx(b,{donts:["- Don't use the Clipboard just to display static text, use a read-only Input or Text component instead","- Don't display text that should be editable in a Clipboard, this component is read-only by nature","- Don't place the Clipboard in contexts where copying is unnecessary or irrelevant"],dos:["- Use the Clipboard component to allow users to easily copy non-editable text, such as tokens, or IDs","- Use Clipboard when copying text manually would be error-prone or tedious","- Use the mask/unmask toggle appropriately for sensitive content, like passwords or tokens"]}),`
`,e.jsx(o,{label:"Best Practices in Context",level:3}),`
`,e.jsx(x,{src:"components/clipboard/anatomy.png"}),`
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
`,e.jsxs(t.p,{children:["Pressing ",e.jsx(s,{children:"Ctrl"})," + ",e.jsx(s,{children:"C"})," (or ",e.jsx(s,{children:"Cmd"})," + ",e.jsx(s,{children:"C"})," on macOS) while the input field is focused copies the selected text."]}),`
`,e.jsxs(t.p,{children:["Pressing ",e.jsx(s,{children:"Enter"})," or ",e.jsx(s,{children:"Space"})," when the copy button is focused triggers the copy action (button component behavior)."]}),`
`,e.jsx(o,{label:"Accessibility",level:2}),`
`,e.jsxs(t.p,{children:["To ensure proper accessibility, the ",e.jsx(t.strong,{children:"Clipboard"})," component must be correctly labeled."]}),`
`,e.jsx(o,{label:"Always provide an explicit label",level:3}),`
`,e.jsxs(t.p,{children:["Every ",e.jsx(t.strong,{children:"Clipboard"})," must have a clear and explicit label to ensure that users (especially screen reader users) understand its purpose, using either ",e.jsx(t.strong,{children:"FormField"})," or a native label tag."]}),`
`,e.jsx(r,{of:m,sourceState:"shown"}),`
`,e.jsxs(t.p,{children:[e.jsx(c,{name:d.circleCheck,style:{color:"var(--ods-color-success-500)"}})," Screen readers will announce the label, the field and its content."]})]})}function xe(n={}){const{wrapper:t}={...a(),...n.components};return t?e.jsx(t,{...n,children:e.jsx(l,{...n})}):l(n)}export{xe as default};
