import{j as e}from"./jsx-runtime-Cfl8ynUo.js";import{useMDXComponents as l}from"./index-ZwkxtaJJ.js";import{b as a,l as m}from"./ods-react69-Dlwzrp8h.js";import{M as d}from"./index-CP0dmCql.js";import{F as r,O as c,A as p}from"./form-field.stories-Bi1xan4B.js";import{A as h}from"./Anatomy-DkXJCwiR.js";import{B as x}from"./Banner-z5gHfud7.js";import{I as f,B as u}from"./IdentityCard-fNWkDtHu.js";import{C as n}from"./Canvas-Dr2OMYCx.js";import{H as i}from"./Heading-w1rgbOs9.js";import{S as j}from"./StorybookLink-CaoUFCbV.js";import{H as g}from"./meta-BVDGtJjn.js";import"./index-jIWwRBLr.js";import"./index-CWkFp9WS-BSIT86NH.js";import"./iframe-DD-xGYJd.js";import"./index-DWDEzXrj.js";import"./index-N93khynk.js";import"./index-CXQShRbs.js";import"./index-DrFu-skq.js";import"./Input-DOUmw7EZ-2zJV36ZU.js";import"./Text-CxRsuLtm-CBjGeyCW.js";import"./ods-react123-5kwUyuQy.js";import"./useI18n-CPx9EMQI-Di77vQVb.js";import"./ods-react281-aAAP9SXj.js";import"./ods-react110-l5fgq-IX.js";import"./Button-B-GJ-1TA.js";import"./index-CqY9YpN0.js";import"./Spinner-DJB5ZadI.js";import"./colors-DSObuHxd.js";import"./FormFieldLabelSubLabel-DCAb65DU.js";import"./Text-CW33_IfE.js";import"./MessageIcon-D6XwSjGm.js";import"./useI18n-C0NLVYPv.js";import"./icon-name-DsSs6qF8.js";import"./PhoneNumberCountryList-BhqzlWdL.js";import"./Input-DA8_WQMf.js";import"./context-C_-r2uoG.js";import"./SelectControl-pvB5wLEQ.js";import"./index-DA5krlyz.js";import"./use-locale-context-zjr1Qdvk.js";import"./portal-CnYxhL2-.js";import"./use-presence-BXVjqAUx.js";import"./use-event-c9j7vq_1.js";import"./index-qJenUdMy.js";import"./use-field-context-B6hT1RuO.js";import"./Textarea-di6qQWES.js";import"./controls-BtiQQn1l.js";import"./Table-DfFDy0oa-pPcXAmDO.js";import"./ExternalLink-3_acHraq.js";import"./Link-BD6LLyZr-BDwROQOD.js";import"./Table-skMWcQVm.js";import"./TooltipTrigger-DHfLNvMW-UFJEJJFl.js";import"./index-BuvDIi_Z.js";import"./lz-string-U2heoObX.js";import"./source-CPEZJ6oD.js";import"./ResetTheme-DQ5v3p_P.js";import"./tokens-BrWUS-3i.js";import"./Divider-BA_mBCsl-c8UMRNiU.js";function s(o){const t={em:"em",li:"li",ol:"ol",p:"p",strong:"strong",...l(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(d,{of:r,name:"Documentation"}),`
`,e.jsx(x,{of:r}),`
`,e.jsx(t.p,{children:e.jsxs(t.em,{children:["A ",e.jsx(t.strong,{children:"Form Field"})," component is used to wrap several form components with logic, visual hints and additional styling"]})}),`
`,e.jsx(n,{of:c,sourceState:"none"}),`
`,e.jsx(i,{label:"Overview",level:2}),`
`,e.jsx(f,{aliases:["Form Control"],extraLinks:[e.jsx(j,{title:g.formGuidelines,children:"Form Guidelines"})],figmaLink:"https://www.figma.com/design/9jDDTcR4a9jPRFcdjawAlf/ODS---UI-Kit?node-id=172-11996",githubUrl:"https://github.com/ovh/design-system/tree/master/packages/ods-react/src/components/form-field",name:"Form Field",children:e.jsxs(t.p,{children:["A ",e.jsx(t.strong,{children:"Form Field"}),` is based on a single form element or group components as a whole that are decorated with additional
text to handle specific types of information, like a Password field for example.`]})}),`
`,e.jsx(i,{label:"Usage",level:2}),`
`,e.jsxs(t.p,{children:["A ",e.jsx(t.strong,{children:"Form Field"})," is used to wrap a field that can be customized with some additional information about this field."]}),`
`,e.jsx(t.p,{children:"Additional information (label, placeholder, helper message) provides hint and help to users, so that they can easily understand what is required from them in a form."}),`
`,e.jsx(t.p,{children:"Users will also type or enter information in the expected format and avoid mistakes."}),`
`,e.jsx(i,{label:"Dos & Don'ts",level:3}),`
`,e.jsx(u,{donts:["- Don't place interactive elements like links or buttons inside the label","- Don't rely on an asterisk alone to indicate required fields. Prefer explicit helper text or label","- Overuse content related Form Fields with top aligned label in one group since it requires quite vertical space: split into smaller groups","- Don't use Form Field when there's no input or interaction expected. It is meant for form inputs, not static content"],dos:["- Use Form Field to wrap form inputs with a clear structure, including a label, optional helper text, or extra information","- Group related fields using multiple Form Fields to improve clarity and scannability","- Include helper messages to guide users on expected input formats or constraints (e.g., password requirements)","- Use error message to provide feedback after user interaction"]}),`
`,e.jsx(i,{label:"Best Practices in Context",level:3}),`
`,e.jsx(h,{src:"components/form-field/anatomy.png"}),`
`,e.jsxs(t.ol,{children:[`
`,e.jsx(t.li,{children:e.jsx(t.strong,{children:"Form Field"})}),`
`,e.jsxs(t.li,{children:[e.jsx(t.strong,{children:"Label"})," - optional"]}),`
`,e.jsx(t.li,{children:e.jsx(t.strong,{children:"Form element"})}),`
`,e.jsxs(t.li,{children:[e.jsx(t.strong,{children:"Helper message"})," - optional"]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.strong,{children:"Error message"})," - optional"]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.strong,{children:"Hint text"})," - optional"]}),`
`]}),`
`,e.jsx(i,{label:"Placement",level:2}),`
`,e.jsxs(t.p,{children:["A ",e.jsx(t.strong,{children:"Form Field"})," can be used everywhere in a page where there is a form and users may need help to fill in this form."]}),`
`,e.jsx(i,{label:"Behavior",level:2}),`
`,e.jsxs(t.p,{children:["A ",e.jsx(t.strong,{children:"Form Field"})," can react to validation states, such as error, often by visually updating elements like the border or text indicators."]}),`
`,e.jsx(t.p,{children:"Helper text and error messages can be displayed freely around the field component, depending on the design or functional needs."}),`
`,e.jsx(i,{label:"Navigation",level:2}),`
`,e.jsxs(t.p,{children:["The ",e.jsx(t.strong,{children:"Form Field"})," component itself is not focusable and does not receive keyboard focus."]}),`
`,e.jsxs(t.p,{children:[`Only the interactive inner component it wraps, such as an Input, Password, Select, or other form element, can receive focus.
Focus behavior and keyboard navigation are determined by the specific form element used within the `,e.jsx(t.strong,{children:"Form Field"}),"."]}),`
`,e.jsx(i,{label:"Accessibility",level:2}),`
`,e.jsxs(t.p,{children:["The ",e.jsx(t.strong,{children:"Form Field"})," component handles by itself the accessibility requirements by using its internal components."]}),`
`,e.jsx(n,{of:p,sourceState:"shown"}),`
`,e.jsxs(t.p,{children:[e.jsx(a,{name:m.circleCheck,style:{color:"var(--ods-color-success-500)"}})," Screen readers will announce the label, the field, its content and the helper text."]})]})}function we(o={}){const{wrapper:t}={...l(),...o.components};return t?e.jsx(t,{...o,children:e.jsx(s,{...o})}):s(o)}export{we as default};
