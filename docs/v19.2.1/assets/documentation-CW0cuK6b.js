import{j as e}from"./jsx-runtime-Cfl8ynUo.js";import{useMDXComponents as s}from"./index-ZwkxtaJJ.js";import{t as l,l as a}from"./ods-react60-CRx7zEey.js";import{M as d,C as m}from"./index-8pGbFWRq.js";import{F as o,O as c,A as p}from"./form-field.stories-D3dZ0W9j.js";import{B as h}from"./Banner-CNp5SML8.js";import{I as x,B as f}from"./IdentityCard-e2WB6ddF.js";import{C as u}from"./Canvas-Df5XpfVk.js";import{H as t}from"./Heading-hbfjmHNc.js";import"./index-jIWwRBLr.js";import"./index-2w0W-O47-BJ19ihbZ.js";import"./iframe-D7nmkxLr.js";import"./index-DWDEzXrj.js";import"./index-N93khynk.js";import"./index-CXQShRbs.js";import"./index-DrFu-skq.js";import"./Input-DcqcPYne-DsDnfvYN.js";import"./Text-CcNd6qQr-DgkqCZse.js";import"./useI18n-C3-XAdTV-DeysXkv9.js";import"./ods-react236-aAAP9SXj.js";import"./ods-react93-l5fgq-IX.js";import"./FormFieldLabel-DW-nAxje.js";import"./index-CqY9YpN0.js";import"./Text-vMb3-i8V.js";import"./Textarea-BPSPZX_r.js";import"./controls-BtiQQn1l.js";import"./ExternalLink-izdABMGv.js";import"./Link-BWQEuWpd-DsrdP0qI.js";import"./TooltipTrigger-Iu3rt7LP-DQH4Rvrv.js";import"./index-CTDx-6u2.js";import"./lz-string-U2heoObX.js";import"./meta-B7heVWH0.js";import"./source-CPEZJ6oD.js";function r(i){const n={em:"em",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",...s(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(d,{of:o,name:"Documentation"}),`
`,e.jsx(h,{of:o}),`
`,e.jsx(n.p,{children:e.jsxs(n.em,{children:["A ",e.jsx(n.strong,{children:"Form Field"})," component is used to wrap several form components with logic, visual hints and additional styling"]})}),`
`,e.jsx(m,{of:c,sourceState:"none"}),`
`,e.jsx(t,{label:"Overview",level:2}),`
`,e.jsx(x,{aliases:["Form Control"],figmaLink:"https://www.figma.com/design/9jDDTcR4a9jPRFcdjawAlf/ODS---UI-Kit?node-id=172-11996",githubUrl:"https://github.com/ovh/design-system/tree/master/packages/ods-react/src/components/form-field",name:"Form Field",children:e.jsxs(n.p,{children:["A ",e.jsx(n.strong,{children:"Form Field"}),` is based on a single form element or group components as a whole that are decorated with additional
text to handle specific types of information, like a Password field for example.`]})}),`
`,e.jsx(t,{label:"Usage",level:2}),`
`,e.jsxs(n.p,{children:["A ",e.jsx(n.strong,{children:"Form Field"})," is used to wrap a field that can be customized with some additional information about this field."]}),`
`,e.jsx(n.p,{children:"Additional information (label, placeholder, helper message) provides hint and help to users, so that they can easily understand what is required from them in a form."}),`
`,e.jsx(n.p,{children:"Users will also type or enter information in the expected format and avoid mistakes."}),`
`,e.jsx(t,{label:"Dos & Don'ts",level:3}),`
`,e.jsx(f,{donts:["- Don't place interactive elements like links or buttons inside the label","- Don't rely on an asterisk alone to indicate required fields. Prefer explicit helper text or label","- Overuse content related Form Fields with top aligned label in one group since it requires quite vertical space: split into smaller groups","- Don't use Form Field when there's no input or interaction expected. It is meant for form inputs, not static content"],dos:["- Use Form Field to wrap form inputs with a clear structure, including a label, optional helper text, or extra information","- Group related fields using multiple Form Fields to improve clarity and scannability","- Include helper messages to guide users on expected input formats or constraints (e.g., password requirements)","- Use error message to provide feedback after user interaction"]}),`
`,e.jsx(t,{label:"Best Practices in Context",level:3}),`
`,e.jsx(n.p,{children:e.jsx(n.img,{src:"components/form-field/anatomy.png",alt:"Component anatomy",title:"Component anatomy"})}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.strong,{children:"Form Field"})}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Label"})," - optional"]}),`
`,e.jsx(n.li,{children:e.jsx(n.strong,{children:"Form element"})}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Helper message"})," - optional"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Error message"})," - optional"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Hint text"})," - optional"]}),`
`]}),`
`,e.jsx(t,{label:"Placement",level:2}),`
`,e.jsxs(n.p,{children:["A ",e.jsx(n.strong,{children:"Form Field"})," can be used everywhere in a page where there is a form and users may need help to fill in this form."]}),`
`,e.jsx(t,{label:"Behavior",level:2}),`
`,e.jsxs(n.p,{children:["A ",e.jsx(n.strong,{children:"Form Field"})," can react to validation states, such as error, often by visually updating elements like the border or text indicators."]}),`
`,e.jsx(n.p,{children:"Helper text and error messages can be displayed freely around the field component, depending on the design or functional needs."}),`
`,e.jsx(t,{label:"Navigation",level:2}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.strong,{children:"Form Field"})," component itself is not focusable and does not receive keyboard focus."]}),`
`,e.jsxs(n.p,{children:[`Only the interactive inner component it wraps, such as an Input, Password, Select, or other form element, can receive focus.
Focus behavior and keyboard navigation are determined by the specific form element used within the `,e.jsx(n.strong,{children:"Form Field"}),"."]}),`
`,e.jsx(t,{label:"Accessibility",level:2}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.strong,{children:"Form Field"})," component handles by itself the accessibility requirements by using its internal components."]}),`
`,e.jsx(u,{of:p,sourceState:"shown"}),`
`,e.jsxs(n.p,{children:[e.jsx(l,{name:a.circleCheck,style:{color:"var(--ods-color-success-500)"}})," Screen readers will announce the label, the field, its content and the helper text."]})]})}function V(i={}){const{wrapper:n}={...s(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(r,{...i})}):r(i)}export{V as default};
