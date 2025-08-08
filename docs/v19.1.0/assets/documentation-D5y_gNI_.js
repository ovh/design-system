import{j as e}from"./jsx-runtime-VM66peLj.js";import{useMDXComponents as l}from"./index-DQB45XCM.js";import{a,o as d}from"./ods-react61-BFiU7C5S.js";import{M as c,C as o}from"./index-DQDMPrC3.js";import{F as r,O as m,A as p}from"./form-field.stories-Df1zWG65.js";import{B as h}from"./Banner-D5YsTkFA.js";import{I as x,B as f}from"./IdentityCard-C39Eam7s.js";import{H as t}from"./Heading-BTR1K1mm.js";import"./index-D_CmzhJ4.js";import"./index-2w0W-O47-BJ19ihbZ.js";import"./iframe-llaHorau.js";import"./index-ChzAxGiP.js";import"./index-CucsY3YN.js";import"./index-CXQShRbs.js";import"./index-DrFu-skq.js";import"./Input-Hv8CEFSW-dIkMq8ux.js";import"./Text-pb66o1F3-WCW2Efyq.js";import"./useI18n-BLNVfTvk-pLVIi2Iu.js";import"./ods-react222-B9lkGKUh.js";import"./ods-react66-BIRpP5yN.js";import"./ods-react91-l5fgq-IX.js";import"./FormFieldLabel-DQkMrZpp.js";import"./index-CkQHsVsO.js";import"./Text-B1XN51Xz.js";import"./Textarea-DJ9iXjLq.js";import"./controls-BtiQQn1l.js";import"./ExternalLink-F7ndcp9T.js";import"./Link-DTswNFmS-CEk9YBDP.js";import"./Divider-DwZugXnI-RR--JbES.js";function s(i){const n={em:"em",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",...l(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(c,{of:r,name:"Documentation"}),`
`,e.jsx(h,{of:r}),`
`,e.jsx(n.p,{children:e.jsxs(n.em,{children:["A ",e.jsx(n.strong,{children:"Form Field"})," component is used to wrap several form components with logic, visual hints and additional styling"]})}),`
`,e.jsx(o,{of:m,sourceState:"none"}),`
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
`,e.jsx(o,{of:p,sourceState:"shown"}),`
`,e.jsxs(n.p,{children:[e.jsx(a,{name:d.circleCheck,style:{color:"var(--ods-color-success-500)"}})," Screen readers will announce the label, the field, its content and the helper text."]})]})}function K(i={}){const{wrapper:n}={...l(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(s,{...i})}):s(i)}export{K as default};
