import{j as e}from"./jsx-runtime-Cfl8ynUo.js";import{useMDXComponents as l}from"./index-ZwkxtaJJ.js";import{t as a,l as c}from"./ods-react60-DssFCbzP.js";import{M as d}from"./index-9orhCFJa.js";import{C as s,O as p,A as h}from"./clipboard.stories-GCjxP7YJ.js";import{A as m}from"./Anatomy-DkXJCwiR.js";import{B as x}from"./Banner-DiJ2utjo.js";import{I as j,B as u}from"./IdentityCard-0vzhW5ZM.js";import{C as i}from"./Canvas-CreDMEws.js";import{H as t}from"./Heading-eINcjqM4.js";import"./index-jIWwRBLr.js";import"./index-CWkFp9WS-BSIT86NH.js";import"./iframe-BRevKSH1.js";import"./index-DWDEzXrj.js";import"./index-N93khynk.js";import"./index-CXQShRbs.js";import"./index-DrFu-skq.js";import"./ClipboardTrigger-Dbk-1h1o.js";import"./index-CqY9YpN0.js";import"./use-locale-context-6s5qsrWI.js";import"./Input-DRCIBq_k.js";import"./FormFieldLabel-B8-lDkmb.js";import"./Text-DyiJ5nHV.js";import"./useI18n-C0NLVYPv.js";import"./Button-B-GJ-1TA.js";import"./Spinner-DJB5ZadI.js";import"./colors-DSObuHxd.js";import"./icon-name-C581wThh.js";import"./TooltipTrigger-CtwhYrHp.js";import"./overlay-CZHjGBMC.js";import"./portal--PO1aV1j.js";import"./use-presence-Dwt5F0sJ.js";import"./use-event-c9j7vq_1.js";import"./index-Dp00x3gb.js";import"./index-CgXDLFtf.js";import"./controls-BtiQQn1l.js";import"./Table-BvR76ybm-DzE94PQp.js";import"./ExternalLink-C0Msq_QQ.js";import"./Link-CIjoG_UN-BDwROQOD.js";import"./Table-u83oGl00.js";import"./TooltipTrigger-CizyLvLy-D53hI2Ct.js";import"./index-blQ1D1fB.js";import"./lz-string-U2heoObX.js";import"./meta-t9Q7ez2Q.js";import"./source-CPEZJ6oD.js";import"./ResetTheme-BVzaMHe3.js";import"./tokens-VHDJ0kGa.js";function r(n){const o={code:"code",em:"em",li:"li",ol:"ol",p:"p",strong:"strong",...l(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(d,{of:s,name:"Documentation"}),`
`,e.jsx(x,{of:s}),`
`,e.jsx(o.p,{children:e.jsxs(o.em,{children:[e.jsx(o.strong,{children:"Clipboard"})," component allows user to view and copy information to its ",e.jsx(o.strong,{children:"Clipboard"}),"."]})}),`
`,e.jsx(i,{of:p,sourceState:"none"}),`
`,e.jsx(t,{label:"Overview",level:2}),`
`,e.jsx(j,{aliases:["Copy Component","Copy to Clipboard"],figmaLink:"https://www.figma.com/design/9jDDTcR4a9jPRFcdjawAlf/ODS---UI-Kit?node-id=26-7351",githubUrl:"https://github.com/ovh/design-system/tree/master/packages/ods-react/src/components/clipboard",name:"Clipboard",children:e.jsxs(o.p,{children:[e.jsx(o.strong,{children:"Clipboard"})," component is used to copy quickly and easily a text, a link and more to the ",e.jsx(o.strong,{children:"Clipboard"}),"."]})}),`
`,e.jsx(t,{label:"Usage",level:2}),`
`,e.jsxs(o.p,{children:[e.jsx(o.strong,{children:"Clipboard"})," is used to quickly and easily copy an amount of text to the user's ",e.jsx(o.strong,{children:"Clipboard"}),"."]}),`
`,e.jsx(o.p,{children:"It can be used when it is considered that it will cause trouble for the user to select and copy a text."}),`
`,e.jsx(t,{label:"Dos & Don'ts",level:3}),`
`,e.jsx(u,{donts:["- Don't use the Clipboard just to display static text, use a read-only Input or Text component instead","- Don't display text that should be editable in a Clipboard, this component is read-only by nature","- Don't place the Clipboard in contexts where copying is unnecessary or irrelevant"],dos:["- Use the Clipboard component to allow users to easily copy non-editable text, such as tokens, or IDs","- Use Clipboard when copying text manually would be error-prone or tedious","- Use the mask/unmask toggle appropriately for sensitive content, like passwords or tokens"]}),`
`,e.jsx(t,{label:"Best Practices in Context",level:3}),`
`,e.jsx(m,{src:"components/clipboard/anatomy.png"}),`
`,e.jsxs(o.ol,{children:[`
`,e.jsx(o.li,{children:e.jsx(o.strong,{children:"Clipboard"})}),`
`,e.jsx(o.li,{children:e.jsx(o.strong,{children:"Input text"})}),`
`,e.jsx(o.li,{children:e.jsx(o.strong,{children:"Copy button"})}),`
`,e.jsx(o.li,{children:e.jsx(o.strong,{children:"Tooltip"})}),`
`,e.jsxs(o.li,{children:[e.jsx(o.strong,{children:"Show/Hide button"})," - optional"]}),`
`]}),`
`,e.jsx(t,{label:"Placement",level:2}),`
`,e.jsxs(o.p,{children:["By default, the ",e.jsx(o.strong,{children:"Clipboard"})," content is left-aligned in its container."]}),`
`,e.jsxs(o.p,{children:[e.jsx(o.strong,{children:"Clipboard"}),"'s Tooltip is right-aligned after the component by default, and vertically centered."]}),`
`,e.jsx(t,{label:"Behavior",level:2}),`
`,e.jsxs(o.p,{children:[e.jsx(o.strong,{children:"Clipboard"}),` can be focused and hovered. They can be disabled.
When disabled, the component can't be hovered, focused nor clicked.`]}),`
`,e.jsxs(o.p,{children:["The ",e.jsx(o.strong,{children:"Clipboard"})," component is used as read-only, to allow users to copy a predefined text that cannot be edited directly."]}),`
`,e.jsx(o.p,{children:"Even if no visual indicator prompts the user to do so, the user can select the text directly in the Input."}),`
`,e.jsxs(o.p,{children:["The trigger for copying the Input field content to the ",e.jsx(o.strong,{children:"Clipboard"}),' is the "copy" button.']}),`
`,e.jsx(o.p,{children:"When hovering or focusing, a Tooltip is displayed as a helper."}),`
`,e.jsx(o.p,{children:"The clipboard masking toggled using show/hide action is permanent. Users have to click again to show/hide the Input field content."}),`
`,e.jsxs(o.p,{children:['A confirmation Tooltip is displayed (if user is still hovering the "copy" button) when ',e.jsx(o.strong,{children:"Clipboard"})," content has been successfully copied."]}),`
`,e.jsx(t,{label:"Navigation",level:2}),`
`,e.jsx(t,{label:"Focus Management",level:3}),`
`,e.jsxs(o.p,{children:["The ",e.jsx(o.strong,{children:"Clipboard"})," receives focus as part of the natural tab order. Copy button becomes focusable immediately after the ",e.jsx(o.strong,{children:"Clipboard"}),"."]}),`
`,e.jsxs(o.p,{children:["If the ",e.jsx(o.strong,{children:"Clipboard"})," is disabled, it is  skipped in the tab order and cannot be focused."]}),`
`,e.jsx(t,{label:"General Keyboard Shortcuts",level:3}),`
`,e.jsxs(o.p,{children:["Pressing ",e.jsx(o.code,{children:"Ctrl"})," + ",e.jsx(o.code,{children:"C"})," (or ",e.jsx(o.code,{children:"Cmd"})," + ",e.jsx(o.code,{children:"C"})," on macOS) while the input field is focused copies the selected text."]}),`
`,e.jsxs(o.p,{children:["Pressing ",e.jsx(o.code,{children:"Enter"})," or ",e.jsx(o.code,{children:"Space"})," when the copy button is focused triggers the copy action (button component behavior)."]}),`
`,e.jsx(t,{label:"Accessibility",level:2}),`
`,e.jsxs(o.p,{children:["To ensure proper accessibility, the ",e.jsx(o.strong,{children:"Clipboard"})," component must be correctly labeled."]}),`
`,e.jsx(t,{label:"Always provide an explicit label",level:3}),`
`,e.jsxs(o.p,{children:["Every ",e.jsx(o.strong,{children:"Clipboard"})," must have a clear and explicit label to ensure that users (especially screen reader users) understand its purpose, using either ",e.jsx(o.strong,{children:"FormField"})," or a native label tag."]}),`
`,e.jsx(i,{of:h,sourceState:"shown"}),`
`,e.jsxs(o.p,{children:[e.jsx(a,{name:c.circleCheck,style:{color:"var(--ods-color-success-500)"}})," Screen readers will announce the label, the field and its content."]})]})}function de(n={}){const{wrapper:o}={...l(),...n.components};return o?e.jsx(o,{...n,children:e.jsx(r,{...n})}):r(n)}export{de as default};
