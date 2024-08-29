import{j as e}from"./jsx-runtime-C_5uCoOk.js";import{u as a}from"./index-BNSrq6w-.js";import{M as c,C as l,d as r}from"./index-DnV51lgW.js";import{B as h}from"./banner-CAPzkNgn.js";import{F as i,O as m}from"./form-field.stories-C_sSRaoz.js";import{O as t}from"./index-BUOQImqF.js";import{O as s}from"./index-CEZbmgmh.js";import"./iframe-Cm7AUSBL.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-B_J8iUie.js";import"./index-DX_4BEHg.js";import"./index-DrFu-skq.js";import"./lit-html-D-ZEPr28.js";import"./unsafe-html-HR6uCwaW.js";import"./control-C1r2wu67.js";import"./ods-toggle2-CgWFvVwm.js";function d(o){const n={a:"a",em:"em",h2:"h2",h3:"h3",img:"img",p:"p",strong:"strong",...a(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(c,{of:i,name:"Documentation"}),`
`,e.jsx(h,{of:i}),`
`,e.jsx(n.p,{children:e.jsxs(n.em,{children:["A ",e.jsx(n.strong,{children:"Form Field"})," component is used to wrap several form components with logic, visual hints and additional styling"]})}),`
`,e.jsx(l,{of:m,sourceState:"none"}),`
`,e.jsx(n.h2,{id:"overview",children:"Overview"}),`
`,e.jsxs("div",{children:[e.jsx("div",{id:"description",children:e.jsxs(n.p,{children:["A ",e.jsx(n.strong,{children:"Form Field"}),` is based on a single form element or group components as a whole that are decorated with additional
`,e.jsx(n.a,{href:"?path=/docs/ods-components-text--documentation",children:e.jsx(n.strong,{children:"Text"})}),` to handle specific types of information, like a
`,e.jsx(n.a,{href:"?path=/docs/ods-components-form-elements-password--documentation",children:e.jsx(n.strong,{children:"Password"})})," field for example."]})}),e.jsx("table",{children:e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("th",{scope:"row",children:"Name"}),e.jsx("td",{children:e.jsx("strong",{children:"Form Field"})})]}),e.jsxs("tr",{children:[e.jsx("th",{scope:"row",children:"Also known as"}),e.jsx("td",{children:e.jsx("em",{children:"Form Control"})})]}),e.jsxs("tr",{children:[e.jsx("th",{scope:"row",children:"Atomic type"}),e.jsx("td",{children:e.jsxs("a",{href:"https://atomicdesign.bradfrost.com/chapter-2/#molecules",children:["Molecule",e.jsx(t,{name:s.externalLink,style:{fontSize:".7rem",paddingLeft:".3rem",paddingRight:".2rem"}})]})})]}),e.jsxs("tr",{children:[e.jsx("th",{scope:"row",children:"Related component(s)"}),e.jsx("td",{children:e.jsxs(n.p,{children:[e.jsx(n.a,{href:"?path=/docs/ods-components-form-elements-checkbox--documentation",children:e.jsx(n.strong,{children:"Checkbox"})}),", ",e.jsx(n.a,{href:"?path=/docs/ods-components-form-elements-file-upload--documentation",children:e.jsx(n.strong,{children:`File
Upload`})}),`,
`,e.jsx(n.a,{href:"?path=/docs/ods-components-form-elements-input--documentation",children:e.jsx(n.strong,{children:"Input"})}),`,
`,e.jsx(n.a,{href:"?path=/docs/ods-components-form-elements-password--documentation",children:e.jsx(n.strong,{children:"Password"})}),", ",e.jsx(n.a,{href:"?path=/docs/ods-components-form-elements-phone-number--documentation",children:e.jsx(n.strong,{children:`Phone
Number`})}),`,
`,e.jsx(n.a,{href:"?path=/docs/ods-components-form-elements-quantity--documentation",children:e.jsx(n.strong,{children:"Quantity"})}),`,
`,e.jsx(n.a,{href:"?path=/docs/ods-components-form-elements-radio--documentation",children:e.jsx(n.strong,{children:"Radio"})}),`,
`,e.jsx(n.a,{href:"?path=/docs/ods-components-form-elements-select--documentation",children:e.jsx(n.strong,{children:"Select"})}),`,
`,e.jsx(n.a,{href:"?path=/docs/ods-components-form-elements-switch--documentation",children:e.jsx(n.strong,{children:"Switch"})}),`,
`,e.jsx(n.a,{href:"?path=/docs/ods-components-form-elements-textarea--documentation",children:e.jsx(n.strong,{children:"Textarea"})}),`,
`,e.jsx(n.a,{href:"?path=/docs/ods-components-form-elements-toggle--documentation",children:e.jsx(n.strong,{children:"Toggle"})})]})})]}),e.jsxs("tr",{children:[e.jsx("th",{scope:"row",children:"Links"}),e.jsxs("td",{children:[e.jsxs("a",{href:"https://www.figma.com/proto/tIKzHa5KvHHyosgIgyBswB/Design-Tokens",children:["Design",e.jsx(t,{name:s.externalLink,style:{fontSize:".7rem",paddingLeft:".3rem",paddingRight:".2rem"}})]}),e.jsx("br",{}),e.jsxs("a",{href:"https://github.com/ovh/design-system/tree/master/packages/components/src/form-field",children:["Github",e.jsx(t,{name:s.externalLink,style:{fontSize:".7rem",paddingLeft:".3rem",paddingRight:".2rem"}})]})]})]})]})})]}),`
`,e.jsx(n.h2,{id:"anatomy",children:"Anatomy"}),`
`,e.jsx(n.p,{children:e.jsx(n.img,{src:"components/form-field/anatomy.png",alt:"Component anatomy",title:"Component anatomy"})}),`
`,e.jsx(n.h2,{id:"usage",children:"Usage"}),`
`,e.jsxs(n.p,{children:["A ",e.jsx(n.strong,{children:"Form Field"})," is used to wrap a field that can be customized with some additional information about this field."]}),`
`,e.jsx(n.p,{children:"Additional information (label, placeholder, helper message) provides hint and help to users, so that they can easily understand what is required from them in a form."}),`
`,e.jsx(n.p,{children:"Users will also type or enter information in the expected format and avoid mistakes."}),`
`,e.jsx(n.h3,{id:"dos--donts",children:"Dos & Don'ts"}),`
`,e.jsx(r,{children:`
| ✅ Do                                                                                                                                                                           |
|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| - Use several **Form Fields** for strongly related content and/or fields.                                                                                                      |
| - Use a **Form Fields** to help users to fill in a form.                                                                                                                       |
| - Remember to use a field with a length proportional to the expected user [**Input**](?path=/docs/ods-components-form-elements-input--documentation).                                   |
| - Group when you need to combine related components into a whole new one.                                                                                                      |
`}),`
`,e.jsx(r,{children:`
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
`,e.jsx(n.p,{children:"For the center part, the reading order for screen readers is components from left to right."})]})}function M(o={}){const{wrapper:n}={...a(),...o.components};return n?e.jsx(n,{...o,children:e.jsx(d,{...o})}):d(o)}export{M as default};
