import{j as e}from"./jsx-runtime-Cfl8ynUo.js";import{useMDXComponents as l}from"./index-ZwkxtaJJ.js";import{s as a,e as m}from"./icon-name-kFDeGXCQ--4TVzzrX.js";import{M as d}from"./index-BnNeS_H2.js";import{F as r,O as p,A as c}from"./form-field.stories-NAkdC0wF.js";import{A as h}from"./Anatomy-DkXJCwiR.js";import{B as x}from"./Banner-DYvgfZRi.js";import{B as f}from"./BestPractices-j46EvglC.js";import{C as n}from"./Canvas-zVPAbnas.js";import{H as i}from"./Heading-lgNAZPkT.js";import{I as u}from"./IdentityCard-BTJG0hV7.js";import{S as j}from"./StorybookLink-BXJgW-hY.js";import{H as g}from"./meta-twt-Yy4M.js";import"./index-jIWwRBLr.js";import"./index-CWkFp9WS-BSIT86NH.js";import"./iframe-DtAqipxR.js";import"./index-DWDEzXrj.js";import"./index-N93khynk.js";import"./index-CXQShRbs.js";import"./index-DrFu-skq.js";import"./Input--5Y_YAC9-ENU-JAMy.js";import"./Text-DoVs3R1p-BVem3_uj.js";import"./context-Z_Xa7sWf-5kwUyuQy.js";import"./useI18n-ChFNqy_U-DNrrrFET.js";import"./Button-Nxi7HNci-BcUZeA5m.js";import"./colors-C1Wmnk_L-aAAP9SXj.js";import"./Button-B-GJ-1TA.js";import"./index-CqY9YpN0.js";import"./Spinner-DJB5ZadI.js";import"./colors-DSObuHxd.js";import"./index-B0M5RXeR.js";import"./Text-CAQM6i-X.js";import"./index-CTOO_CWD.js";import"./useI18n-C0NLVYPv.js";import"./icon-name-D0KNfDOz.js";import"./index-BUvxeS15.js";import"./context-C_-r2uoG.js";import"./Input-CsaVjqar.js";import"./index-onrz60cw.js";import"./index-DaWTyRz7.js";import"./use-locale-context-CGqEQCyU.js";import"./portal-DmTPQ5yQ.js";import"./use-presence-D0Br6WHR.js";import"./use-event-c9j7vq_1.js";import"./index-uZK-7FQN.js";import"./use-field-context-Dkm7CMfi.js";import"./Textarea-1HJNDjsP.js";import"./controls-BtiQQn1l.js";import"./index-DA9hOdui.js";import"./index-D6AFTHzO.js";import"./lz-string-U2heoObX.js";import"./source-CPEZJ6oD.js";import"./ResetTheme-CLF5P7Bf.js";import"./tokens-BrWUS-3i.js";import"./divider-color-DMMH0ySn-B7JauIP0.js";import"./Table-Bof_Nsov-CS9ZUwCH.js";import"./ExternalLink-D9Oykgkh.js";import"./Link-fc4PsoC7-BoLkDjrj.js";import"./Table-BXVk_N0H.js";function s(o){const t={em:"em",li:"li",ol:"ol",p:"p",strong:"strong",...l(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(d,{of:r,name:"Documentation"}),`
`,e.jsx(x,{of:r}),`
`,e.jsx(t.p,{children:e.jsxs(t.em,{children:["A ",e.jsx(t.strong,{children:"Form Field"})," component is used to wrap several form components with logic, visual hints and additional styling"]})}),`
`,e.jsx(n,{of:p,sourceState:"none"}),`
`,e.jsx(i,{label:"Overview",level:2}),`
`,e.jsx(u,{aliases:["Form Control"],extraLinks:[e.jsx(j,{title:g.formGuidelines,children:"Form Guidelines"})],figmaLink:"https://www.figma.com/design/9jDDTcR4a9jPRFcdjawAlf/ODS---UI-Kit?node-id=172-11996",githubUrl:"https://github.com/ovh/design-system/tree/master/packages/ods-react/src/components/form-field",name:"Form Field",children:e.jsxs(t.p,{children:["A ",e.jsx(t.strong,{children:"Form Field"}),` is based on a single form element or group components as a whole that are decorated with additional
text to handle specific types of information, like a Password field for example.`]})}),`
`,e.jsx(i,{label:"Usage",level:2}),`
`,e.jsxs(t.p,{children:["A ",e.jsx(t.strong,{children:"Form Field"})," is used to wrap a field that can be customized with some additional information about this field."]}),`
`,e.jsx(t.p,{children:"Additional information (label, placeholder, helper message) provides hint and help to users, so that they can easily understand what is required from them in a form."}),`
`,e.jsx(t.p,{children:"Users will also type or enter information in the expected format and avoid mistakes."}),`
`,e.jsx(i,{label:"Dos & Don'ts",level:3}),`
`,e.jsx(f,{donts:["- Don't place interactive elements like links or buttons inside the label","- Don't rely on an asterisk alone to indicate required fields. Prefer explicit helper text or label","- Overuse content related Form Fields with top aligned label in one group since it requires quite vertical space: split into smaller groups","- Don't use Form Field when there's no input or interaction expected. It is meant for form inputs, not static content"],dos:["- Use Form Field to wrap form inputs with a clear structure, including a label, optional helper text, or extra information","- Group related fields using multiple Form Fields to improve clarity and scannability","- Include helper messages to guide users on expected input formats or constraints (e.g., password requirements)","- Use error message to provide feedback after user interaction"]}),`
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
`,e.jsx(n,{of:c,sourceState:"shown"}),`
`,e.jsxs(t.p,{children:[e.jsx(a,{name:m.circleCheck,style:{color:"var(--ods-color-success-500)"}})," Screen readers will announce the label, the field, its content and the helper text."]})]})}function ke(o={}){const{wrapper:t}={...l(),...o.components};return t?e.jsx(t,{...o,children:e.jsx(s,{...o})}):s(o)}export{ke as default};
