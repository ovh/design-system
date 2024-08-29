import{j as e}from"./jsx-runtime-Dn0LW--f.js";import{u as r}from"./index-DeyDdHvX.js";import{M as a,C as m,d as o}from"./index-BM3JsZOq.js";import{B as l}from"./banner-DPlTyHjv.js";import{F as s,O as d}from"./form-field.stories-BcV_EKSO.js";import{I as c,A as h}from"./identity-card-CwN41yUF.js";import"./iframe-6_jBXMSq.js";import"../sb-preview/runtime.js";import"./commonjsHelpers-Cpj98o6Y.js";import"./index-B_J8iUie.js";import"./index-DX_4BEHg.js";import"./index-DrFu-skq.js";import"./lit-html-D-ZEPr28.js";import"./unsafe-html-HR6uCwaW.js";import"./control-C1r2wu67.js";import"./index-DryTTbHl.js";import"./ods-toggle2-LnXcgd5r.js";import"./chunk-FAE4I7JY-v0Th3BC0.js";function i(t){const n={a:"a",em:"em",h2:"h2",h3:"h3",img:"img",p:"p",strong:"strong",...r(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{of:s,name:"Documentation"}),`
`,e.jsx(l,{of:s}),`
`,e.jsx(n.p,{children:e.jsxs(n.em,{children:["A ",e.jsx(n.strong,{children:"Form Field"})," component is used to wrap several form components with logic, visual hints and additional styling"]})}),`
`,e.jsx(m,{of:d,sourceState:"none"}),`
`,e.jsx(n.h2,{id:"overview",children:"Overview"}),`
`,e.jsxs("div",{className:"documentation-overview",children:[e.jsx("div",{children:e.jsxs(n.p,{children:["A ",e.jsx(n.strong,{children:"Form Field"}),` is based on a single form element or group components as a whole that are decorated with additional
`,e.jsx(n.a,{href:"?path=/docs/ods-components-text--documentation",children:e.jsx(n.strong,{children:"Text"})}),` to handle specific types of information, like a
`,e.jsx(n.a,{href:"?path=/docs/ods-components-form-elements-password--documentation",children:e.jsx(n.strong,{children:"Password"})})," field for example."]})}),e.jsx(c,{aliases:["Form Control"],atomicType:h.molecule,className:"documentation-overview__table",figmaLink:"https://www.figma.com/design/9jDDTcR4a9jPRFcdjawAlf/ODS---UI-Kit?node-id=172-11996",githubUrl:"https://github.com/ovh/design-system/tree/master/packages/ods/src/components/form-field",name:"Form Field",relatedComponents:[{name:"Checkbox",subtitle:"Form elements"},{name:"File Upload",subtitle:"Form elements"},{name:"Input",subtitle:"Form elements"},{name:"Password",subtitle:"Form elements"},{name:"Phone Number",subtitle:"Form elements"},{name:"Quantity",subtitle:"Form elements"},{name:"Radio",subtitle:"Form elements"},{name:"Range",subtitle:"Form elements"},{name:"Select",subtitle:"Form elements"},{name:"Switch",subtitle:"Form elements"},{name:"Textarea",subtitle:"Form elements"},{name:"Timepicker",subtitle:"Form elements"},{name:"Toggle",subtitle:"Form elements"}]})]}),`
`,e.jsx(n.h2,{id:"anatomy",children:"Anatomy"}),`
`,e.jsx(n.p,{children:e.jsx(n.img,{src:"components/form-field/anatomy.png",alt:"Component anatomy",title:"Component anatomy"})}),`
`,e.jsx(n.h2,{id:"usage",children:"Usage"}),`
`,e.jsxs(n.p,{children:["A ",e.jsx(n.strong,{children:"Form Field"})," is used to wrap a field that can be customized with some additional information about this field."]}),`
`,e.jsx(n.p,{children:"Additional information (label, placeholder, helper message) provides hint and help to users, so that they can easily understand what is required from them in a form."}),`
`,e.jsx(n.p,{children:"Users will also type or enter information in the expected format and avoid mistakes."}),`
`,e.jsx(n.h3,{id:"dos--donts",children:"Dos & Don'ts"}),`
`,e.jsx(o,{className:"documentation-do-table",children:`
| ✅ Do                                                                                                                                                                           |
|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| - Use several **Form Fields** for strongly related content and/or fields.                                                                                                      |
| - Use a **Form Fields** to help users to fill in a form.                                                                                                                       |
| - Remember to use a field with a length proportional to the expected user [**Input**](?path=/docs/ods-components-form-elements-input--documentation).                                   |
| - Group when you need to combine related components into a whole new one.                                                                                                      |
`}),`
`,e.jsx(o,{className:"documentation-dont-table",children:`
| ❌ Don't                                                                                                                                                                                                                    |
|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------                                           |
| - Use a **Form Field** for content longer than a single line: Use a [**Textarea**](?path=/docs/ods-components-form-elements-textarea--documentation) instead.                                                                       |
| - Use an Input when you have a predefined list of answers: use a [**Select**](?path=/docs/ods-components-form-elements-select--documentation) or [**Radio**](?path=/docs/ods-components-form-elements-radio--documentation) Buttons instead. |
| - Use * to mark the mandatory fields.                                                                                                                                                                                      |
| - Overuse content related **Form Fields** with top aligned label in one group since it requires quite vertical space: split into smaller groups.                                                                           |
| - Use interactive content such as a [**Link**](?path=/docs/ods-components-link--documentation) or a [**Button**](?path=/docs/ods-components-button--documentation) inside the **Form Field** label.        |
`}),`
`,e.jsx(n.h2,{id:"placement",children:"Placement"}),`
`,e.jsxs(n.p,{children:["A ",e.jsx(n.strong,{children:"Form Field"})," can be used everywhere in a page where there is a form and users may need help to fill in this form."]}),`
`,e.jsx(n.h2,{id:"behavior",children:"Behavior"}),`
`,e.jsxs(n.p,{children:["A ",e.jsx(n.strong,{children:"Form Field"})," can react to a field validation, especially on its border and in addition to a helper (if necessary)."]}),`
`,e.jsxs(n.p,{children:["If the field is in error state, an error message is displayed below the helper ",e.jsx(n.a,{href:"?path=/docs/ods-components-text--documentation",children:e.jsx(n.strong,{children:"Text"})})," when it exists. When no helper ",e.jsx(n.a,{href:"?path=/docs/ods-components-text--documentation",children:e.jsx(n.strong,{children:"Text"})})," exists, the error message is displayed below the form component."]}),`
`,e.jsx(n.h2,{id:"variation",children:"Variation"}),`
`,e.jsx(n.p,{children:"N/A"}),`
`,e.jsx(n.h2,{id:"accessibility",children:"Accessibility"}),`
`,e.jsxs(n.p,{children:["Label, helpers and extra field information have to be readable to the user when navigating in on a ",e.jsx(n.strong,{children:"Form Field"}),"."]}),`
`,e.jsx(n.p,{children:"For the center part, the reading order for screen readers is components from left to right."})]})}function M(t={}){const{wrapper:n}={...r(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(i,{...t})}):i(t)}export{M as default};
