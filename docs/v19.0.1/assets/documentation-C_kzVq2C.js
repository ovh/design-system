import{j as e}from"./jsx-runtime-VM66peLj.js";import{useMDXComponents as s}from"./index-DQB45XCM.js";import{M as l,C as a}from"./index-D1K7mLD0.js";import{F as i,O as d}from"./form-field.stories-BXUIeyIR.js";import{B as m}from"./Banner-B4K6Zb-5.js";import{I as c,A as p,B as h}from"./IdentityCard-Yo1l2iFh.js";import{H as t}from"./Heading-mtuBTkOf.js";import"./index-D_CmzhJ4.js";import"./iframe-DbJ8Lucp.js";import"./index-ChzAxGiP.js";import"./index-CucsY3YN.js";import"./index-CXQShRbs.js";import"./index-DrFu-skq.js";import"./FormFieldLabel-DjB85afw.js";import"./index-CkQHsVsO.js";import"./Text-KX3Hvvn9.js";import"./Textarea-BHPD4BX2.js";import"./controls-BtiQQn1l.js";import"./ExternalLink-DJ00RbPw.js";import"./ods-react60-Yebt9vXY.js";import"./index-2w0W-O47-BJ19ihbZ.js";import"./Link-D8k51sak-CbRDKo-E.js";import"./ods-react214-B9lkGKUh.js";function r(o){const n={em:"em",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",...s(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{of:i,name:"Documentation"}),`
`,e.jsx(m,{of:i}),`
`,e.jsx(n.p,{children:e.jsxs(n.em,{children:["A ",e.jsx(n.strong,{children:"Form Field"})," component is used to wrap several form components with logic, visual hints and additional styling"]})}),`
`,e.jsx(a,{of:d,sourceState:"none"}),`
`,e.jsx(t,{label:"Overview",level:2}),`
`,e.jsx(c,{aliases:["Form Control"],atomicType:p.molecule,figmaLink:"https://www.figma.com/design/9jDDTcR4a9jPRFcdjawAlf/ODS---UI-Kit?node-id=172-11996",githubUrl:"https://github.com/ovh/design-system/tree/master/packages/ods/src/components/form-field",name:"Form Field",children:e.jsxs(n.p,{children:["A ",e.jsx(n.strong,{children:"Form Field"}),` is based on a single form element or group components as a whole that are decorated with additional
text to handle specific types of information, like a Password field for example.`]})}),`
`,e.jsx(t,{label:"Usage",level:2}),`
`,e.jsxs(n.p,{children:["A ",e.jsx(n.strong,{children:"Form Field"})," is used to wrap a field that can be customized with some additional information about this field."]}),`
`,e.jsx(n.p,{children:"Additional information (label, placeholder, helper message) provides hint and help to users, so that they can easily understand what is required from them in a form."}),`
`,e.jsx(n.p,{children:"Users will also type or enter information in the expected format and avoid mistakes."}),`
`,e.jsx(t,{label:"Dos & Don'ts",level:3}),`
`,e.jsx(h,{donts:["- Don't place interactive elements like links or buttons inside the label","- Don't rely on an asterisk alone to indicate required fields. Prefer explicit helper text or label","- Overuse content related Form Fields with top aligned label in one group since it requires quite vertical space: split into smaller groups","- Don't use Form Field when there's no input or interaction expected. It is meant for form inputs, not static content"],dos:["- Use Form Field to wrap form inputs with a clear structure, including a label, optional helper text, or extra information","- Group related fields using multiple Form Fields to improve clarity and scannability","- Include helper messages to guide users on expected input formats or constraints (e.g., password requirements)","- Use error message to provide feedback after user interaction"]}),`
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
Focus behavior and keyboard navigation are determined by the specific form element used within the `,e.jsx(n.strong,{children:"Form Field"}),"."]})]})}function S(o={}){const{wrapper:n}={...s(),...o.components};return n?e.jsx(n,{...o,children:e.jsx(r,{...o})}):r(o)}export{S as default};
