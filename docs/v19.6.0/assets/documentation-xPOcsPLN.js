import{j as e}from"./jsx-runtime-Cfl8ynUo.js";import{useMDXComponents as h}from"./index-ZwkxtaJJ.js";import{b as i,l as a}from"./ods-react69-Dlwzrp8h.js";import{k as o}from"./Kbd-BhRHY5DX-DYqBejDt.js";import{M as p}from"./index-CP0dmCql.js";import{P as l,O as m,A as u,a as x}from"./password.stories-DVSQX5tJ.js";import{A as j}from"./Anatomy-DkXJCwiR.js";import{B as f}from"./Banner-z5gHfud7.js";import{I as g,B as b}from"./IdentityCard-fNWkDtHu.js";import{C as r}from"./Canvas-Dr2OMYCx.js";import{H as n}from"./Heading-w1rgbOs9.js";import{S as c}from"./StorybookLink-CaoUFCbV.js";import{S as w,R as y,H as v}from"./meta-BVDGtJjn.js";import"./index-jIWwRBLr.js";import"./index-CWkFp9WS-BSIT86NH.js";import"./iframe-DD-xGYJd.js";import"./index-DWDEzXrj.js";import"./index-N93khynk.js";import"./index-CXQShRbs.js";import"./index-DrFu-skq.js";import"./FormFieldLabelSubLabel-DCAb65DU.js";import"./index-CqY9YpN0.js";import"./Text-CW33_IfE.js";import"./Input-DA8_WQMf.js";import"./context-C_-r2uoG.js";import"./useI18n-C0NLVYPv.js";import"./Button-B-GJ-1TA.js";import"./Spinner-DJB5ZadI.js";import"./colors-DSObuHxd.js";import"./icon-name-DsSs6qF8.js";import"./controls-BtiQQn1l.js";import"./source-CPEZJ6oD.js";import"./Table-DfFDy0oa-pPcXAmDO.js";import"./ExternalLink-3_acHraq.js";import"./Link-BD6LLyZr-BDwROQOD.js";import"./Table-skMWcQVm.js";import"./TooltipTrigger-DHfLNvMW-UFJEJJFl.js";import"./ods-react123-5kwUyuQy.js";import"./index-BuvDIi_Z.js";import"./lz-string-U2heoObX.js";import"./ResetTheme-DQ5v3p_P.js";import"./tokens-BrWUS-3i.js";import"./Divider-BA_mBCsl-c8UMRNiU.js";function d(t){const s={em:"em",li:"li",ol:"ol",p:"p",strong:"strong",...h(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(p,{of:l,name:"Documentation"}),`
`,e.jsx(f,{of:l}),`
`,e.jsx(s.p,{children:e.jsxs(s.em,{children:[e.jsx(s.strong,{children:"Password"})," component is an ",e.jsx(c,{kind:y.input,story:w.documentation,children:"Input"})," field for entering a password that can be hidden or not."]})}),`
`,e.jsx(r,{of:m,sourceState:"none"}),`
`,e.jsx(n,{label:"Overview",level:2}),`
`,e.jsx(g,{aliases:["Password field","Password input"],extraLinks:[e.jsx(c,{title:v.formGuidelines,children:"Form Guidelines"})],figmaLink:"https://www.figma.com/design/9jDDTcR4a9jPRFcdjawAlf/ODS---UI-Kit?node-id=48-4526",githubUrl:"https://github.com/ovh/design-system/tree/master/packages/ods-react/src/components/password",name:"Password",children:e.jsxs(s.p,{children:["The ",e.jsx(s.strong,{children:"Password"}),` component is an Input field of which the content is replaced with middle dot symbol symbols "·" by default and
the masking can be toggled using a show/hide action.`]})}),`
`,e.jsx(n,{label:"Usage",level:2}),`
`,e.jsxs(s.p,{children:["A ",e.jsx(s.strong,{children:"Password"})," is mainly used to let users enter a password or secret information."]}),`
`,e.jsx(s.p,{children:"Entered password can be masked or visible as plain text when users need to check what they have entered."}),`
`,e.jsx(s.p,{children:"It can also be used for displaying tokens."}),`
`,e.jsx(n,{label:"Dos & Don'ts",level:3}),`
`,e.jsx(b,{donts:["- Don't use the Password component when users need to see what they're typing by default, use a standard Input instead","- Don't hide the label. Users should always know what the Password field is for","- Don't use Passwords for non-sensitive or public information; this could cause unnecessary friction","- Don't rely only on placeholders to communicate password requirements","- Don't remove the toggle visibility option unless there is a strong security or UX reason to do so"],dos:["- Use the Password component for sensitive inputs, such as login credentials, tokens, or API keys","- Use the read-only mode for displaying generated tokens or credentials that users may need to copy, without editing","- Pair Password fields with clear labels and helper texts for expected format or complexity requirements"]}),`
`,e.jsx(n,{label:"Best Practices in Context",level:3}),`
`,e.jsx(j,{src:"components/password/anatomy.png"}),`
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
`,e.jsx(r,{of:u,sourceState:"shown"}),`
`,e.jsxs(s.p,{children:[e.jsx(i,{name:a.circleCheck,style:{color:"var(--ods-color-success-500)"}})," Screen readers will announce the label, the field and its content."]}),`
`,e.jsx(n,{label:"Override action context",level:3}),`
`,e.jsx(s.p,{children:"To provide more context on the interactive elements, you can provide your own custom translations to the component."}),`
`,e.jsx(r,{of:x,sourceState:"shown"}),`
`,e.jsxs(s.p,{children:[e.jsx(i,{name:a.circleCheck,style:{color:"var(--ods-color-success-500)"}})," Screen readers will announce the label, the field, its content and custom label of focused action."]})]})}function pe(t={}){const{wrapper:s}={...h(),...t.components};return s?e.jsx(s,{...t,children:e.jsx(d,{...t})}):d(t)}export{pe as default};
