import{j as e}from"./jsx-runtime-Cfl8ynUo.js";import{useMDXComponents as l}from"./index-ZwkxtaJJ.js";import{s as a,e as m}from"./icon-name-Dw8X1wVO-CGXOlIt0.js";import{M as d}from"./index-D-djnn7r.js";import{F as r,O as p,A as c}from"./form-field.stories-DhYKpTO9.js";import{A as h}from"./Anatomy-CqwcYEDe.js";import{B as x}from"./Banner-BB6twgK5.js";import{B as f}from"./BestPractices-DB-TO6-n.js";import{C as n}from"./Canvas-C9gcQMrM.js";import{H as i}from"./Heading-C-5iIN8e.js";import{I as u}from"./IdentityCard-DSQgfBPC.js";import{S as j}from"./StorybookLink-Bd57ZVsh.js";import{H as g}from"./meta-twt-Yy4M.js";import"./index-jIWwRBLr.js";import"./index-B2JRaoNz-yqrnVa7N.js";import"./iframe-Bd9G7Yv2.js";import"./index-CBDu-Hu-.js";import"./index-BU5bNkZt.js";import"./index-DgH-xKnr.js";import"./index-DrFu-skq.js";import"./Input-hxRduQ-b-DxEiYqrf.js";import"./Text-SFD-44C2-BB_vM-oC.js";import"./context-Z_Xa7sWf-5kwUyuQy.js";import"./useI18n-ChFNqy_U-DNrrrFET.js";import"./Button-CbyI7jU8-DekYAspE.js";import"./colors-C1Wmnk_L-aAAP9SXj.js";import"./Button-FbO6Dzi8.js";import"./index-C322fmIg.js";import"./Spinner-MPv5lneh.js";import"./colors-B-ZpHcIp.js";import"./index-DH_BFchB.js";import"./Text-CzHK83-l.js";import"./index-Ci3m2rcP.js";import"./useI18n-C0NLVYPv.js";import"./icon-name-Dvh-h22i.js";import"./index-BXfN7qjV.js";import"./context-C_-r2uoG.js";import"./Input-6AH7vp_K.js";import"./index-fFE0p0-6.js";import"./index-BY80_Tj9.js";import"./index-DsEC0KyJ.js";import"./use-locale-context-DGdTKe6e.js";import"./portal-bleW59MO.js";import"./use-presence-BWJBMCCb.js";import"./use-event-c9j7vq_1.js";import"./index-FdZ2e-bZ.js";import"./use-field-context-CkVznB2N.js";import"./Textarea-CsFsC7cj.js";import"./controls-BtiQQn1l.js";import"./index-BUs_y8So.js";import"./index-Dy2uwWxE.js";import"./lz-string-DchBFh8t.js";import"./source-CPEZJ6oD.js";import"./ResetTheme-CLF5P7Bf.js";import"./tokens-BrWUS-3i.js";import"./divider-color-Db-mIl6C-CkLYwequ.js";import"./Table-CVRGubjq-DRuAT4A2.js";import"./ExternalLink-CLruuYCX.js";import"./Link-nyzSghSi-C9HsY39r.js";import"./Table-CddzZ923.js";function s(o){const t={em:"em",li:"li",ol:"ol",p:"p",strong:"strong",...l(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(d,{of:r,name:"Documentation"}),`
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
`,e.jsxs(t.p,{children:[e.jsx(a,{name:m.circleCheck,style:{color:"var(--ods-color-success-500)"}})," Screen readers will announce the label, the field, its content and the helper text."]})]})}function Ae(o={}){const{wrapper:t}={...l(),...o.components};return t?e.jsx(t,{...o,children:e.jsx(s,{...o})}):s(o)}export{Ae as default};
