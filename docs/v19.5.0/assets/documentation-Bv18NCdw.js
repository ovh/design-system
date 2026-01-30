import{j as e}from"./jsx-runtime-Cfl8ynUo.js";import{useMDXComponents as d}from"./index-ZwkxtaJJ.js";import{a as i,l as a}from"./ods-react67-C395g5lW.js";import{k as o}from"./Kbd-BhRHY5DX-DYqBejDt.js";import{M as h}from"./index-Cw5r0Kn8.js";import{P as l,O as p,A as m,a as u}from"./password.stories-B3rvytFP.js";import{A as x}from"./Anatomy-DkXJCwiR.js";import{B as j}from"./Banner-X7WOeBPc.js";import{I as f,B as g}from"./IdentityCard-D9LjZbLA.js";import{C as r}from"./Canvas-i2Tfjesg.js";import{H as n}from"./Heading-Dep_rTif.js";import{S as w}from"./StorybookLink-DQwP2BEI.js";import{S as b,R as y}from"./meta-DcQbZjt_.js";import"./index-jIWwRBLr.js";import"./index-CWkFp9WS-BSIT86NH.js";import"./iframe-DCzti3mm.js";import"./index-DWDEzXrj.js";import"./index-N93khynk.js";import"./index-CXQShRbs.js";import"./index-DrFu-skq.js";import"./FormFieldLabelSubLabel-DCAb65DU.js";import"./index-CqY9YpN0.js";import"./Text-CW33_IfE.js";import"./Input-BllcUVFN.js";import"./context-C_-r2uoG.js";import"./useI18n-C0NLVYPv.js";import"./Button-B-GJ-1TA.js";import"./Spinner-DJB5ZadI.js";import"./colors-DSObuHxd.js";import"./icon-name-BpdEc4-2.js";import"./controls-BtiQQn1l.js";import"./source-CPEZJ6oD.js";import"./Table-D8Me597i-NC3k9YIT.js";import"./ExternalLink-C5hGBmwh.js";import"./Link-TMoA1i18-BDwROQOD.js";import"./Table-5ah53JFf.js";import"./TooltipTrigger-C3aN0eJB-DwV7p8FS.js";import"./ods-react121-5kwUyuQy.js";import"./index-CSeLFT3z.js";import"./lz-string-U2heoObX.js";import"./ResetTheme-xqxcB8cs.js";import"./tokens-BtVMeYnn.js";import"./Divider-wQyo85oE-CpSK6tnQ.js";function c(t){const s={em:"em",li:"li",ol:"ol",p:"p",strong:"strong",...d(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(h,{of:l,name:"Documentation"}),`
`,e.jsx(j,{of:l}),`
`,e.jsx(s.p,{children:e.jsxs(s.em,{children:[e.jsx(s.strong,{children:"Password"})," component is an ",e.jsx(w,{kind:y.input,story:b.documentation,children:"Input"})," field for entering a password that can be hidden or not."]})}),`
`,e.jsx(r,{of:p,sourceState:"none"}),`
`,e.jsx(n,{label:"Overview",level:2}),`
`,e.jsx(f,{aliases:["Password field","Password input"],figmaLink:"https://www.figma.com/design/9jDDTcR4a9jPRFcdjawAlf/ODS---UI-Kit?node-id=48-4526",githubUrl:"https://github.com/ovh/design-system/tree/master/packages/ods-react/src/components/password",name:"Password",children:e.jsxs(s.p,{children:["The ",e.jsx(s.strong,{children:"Password"}),` component is an Input field of which the content is replaced with middle dot symbol symbols "·" by default and
the masking can be toggled using a show/hide action.`]})}),`
`,e.jsx(n,{label:"Usage",level:2}),`
`,e.jsxs(s.p,{children:["A ",e.jsx(s.strong,{children:"Password"})," is mainly used to let users enter a password or secret information."]}),`
`,e.jsx(s.p,{children:"Entered password can be masked or visible as plain text when users need to check what they have entered."}),`
`,e.jsx(s.p,{children:"It can also be used for displaying tokens."}),`
`,e.jsx(n,{label:"Dos & Don'ts",level:3}),`
`,e.jsx(g,{donts:["- Don't use the Password component when users need to see what they're typing by default, use a standard Input instead","- Don't hide the label. Users should always know what the Password field is for","- Don't use Passwords for non-sensitive or public information; this could cause unnecessary friction","- Don't rely only on placeholders to communicate password requirements","- Don't remove the toggle visibility option unless there is a strong security or UX reason to do so"],dos:["- Use the Password component for sensitive inputs, such as login credentials, tokens, or API keys","- Use the read-only mode for displaying generated tokens or credentials that users may need to copy, without editing","- Pair Password fields with clear labels and helper texts for expected format or complexity requirements"]}),`
`,e.jsx(n,{label:"Best Practices in Context",level:3}),`
`,e.jsx(x,{src:"components/password/anatomy.png"}),`
`,e.jsxs(s.ol,{children:[`
`,e.jsx(s.li,{children:e.jsx(s.strong,{children:"Password"})}),`
`,e.jsx(s.li,{children:e.jsx(s.strong,{children:"Placeholder or input text"})}),`
`,e.jsx(s.li,{children:e.jsx(s.strong,{children:"Show/Hide button"})}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Clearable button"})," - optional"]}),`
`]}),`
`,e.jsx(n,{label:"Placement",level:2}),`
`,e.jsxs(s.p,{children:[e.jsx(s.strong,{children:"Password"})," should be vertically aligned with other form components on a same page."]}),`
`,e.jsx(n,{label:"Behavior",level:2}),`
`,e.jsxs(s.p,{children:[e.jsx(s.strong,{children:"Password"})," can be used in read-only mode, especially for displaying sensitive tokens."]}),`
`,e.jsx(s.p,{children:"Users can toggle the password masking (show/hide) by clicking an action button. The selected visibility state remains until the user clicks again."}),`
`,e.jsxs(s.p,{children:[e.jsx(s.strong,{children:"Password"})," supports a clear action to quickly reset its content."]}),`
`,e.jsx(s.p,{children:"A loading state can be displayed inside the field when needed, for example during validation or processing."}),`
`,e.jsx(n,{label:"Navigation",level:2}),`
`,e.jsx(n,{label:"Focus Management",level:3}),`
`,e.jsx(s.p,{children:"When tabbing through the page, the Password field receives focus as part of the natural tab order."}),`
`,e.jsx(s.p,{children:"If present, the clear button is focusable immediately after the Password field."}),`
`,e.jsx(s.p,{children:"If present, the toggle mask button (show/hide password) is focusable after the clear button."}),`
`,e.jsx(s.p,{children:"If the Password field is read-only, it can still receive focus but cannot be edited."}),`
`,e.jsx(n,{label:"General Keyboard Shortcuts",level:3}),`
`,e.jsxs(s.p,{children:["Pressing ",e.jsx(o,{children:"Tab"})," moves focus forward."]}),`
`,e.jsxs(s.p,{children:["Pressing ",e.jsx(o,{children:"Shift"})," + ",e.jsx(o,{children:"Tab"})," moves focus backward to the previous interactive element."]}),`
`,e.jsx(s.p,{children:"Pressing any character key while the Password field is focused enters text into the field (unless it is read-only)."}),`
`,e.jsxs(s.p,{children:["Pressing ",e.jsx(o,{children:"Backspace"})," deletes the last character before the cursor position."]}),`
`,e.jsxs(s.p,{children:["Pressing ",e.jsx(o,{children:"Enter"})," while the clear button is focused clears the Password content."]}),`
`,e.jsxs(s.p,{children:["Pressing ",e.jsx(o,{children:"Enter"})," while the toggle mask button is focused toggles between showing and hiding the field content."]}),`
`,e.jsx(n,{label:"Accessibility",level:2}),`
`,e.jsxs(s.p,{children:["To ensure proper accessibility, the ",e.jsx(s.strong,{children:"Password"})," component must be correctly labeled and provide meaningful context when interactive elements (such as icon buttons) are used."]}),`
`,e.jsx(n,{label:"Always provide an explicit label",level:3}),`
`,e.jsxs(s.p,{children:["Every ",e.jsx(s.strong,{children:"Password"})," must have a clear and explicit label to ensure that users (especially screen reader users) understand its purpose, using either ",e.jsx(s.strong,{children:"FormField"})," or a native label tag."]}),`
`,e.jsx(r,{of:m,sourceState:"shown"}),`
`,e.jsxs(s.p,{children:[e.jsx(i,{name:a.circleCheck,style:{color:"var(--ods-color-success-500)"}})," Screen readers will announce the label, the field and its content."]}),`
`,e.jsx(n,{label:"Override action context",level:3}),`
`,e.jsx(s.p,{children:"To provide more context on the interactive elements, you can provide your own custom translations to the component."}),`
`,e.jsx(r,{of:u,sourceState:"shown"}),`
`,e.jsxs(s.p,{children:[e.jsx(i,{name:a.circleCheck,style:{color:"var(--ods-color-success-500)"}})," Screen readers will announce the label, the field, its content and custom label of focused action."]})]})}function he(t={}){const{wrapper:s}={...d(),...t.components};return s?e.jsx(s,{...t,children:e.jsx(c,{...t})}):c(t)}export{he as default};
