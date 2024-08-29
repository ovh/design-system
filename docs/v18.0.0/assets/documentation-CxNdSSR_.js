import{j as e}from"./jsx-runtime-Dn0LW--f.js";import{u as r}from"./index-DeyDdHvX.js";import{M as a,C as d,d as o}from"./index-BM3JsZOq.js";import{B as c}from"./banner-DPlTyHjv.js";import{I as s,O as l}from"./input.stories-CM1T8f8S.js";import{I as h,A as m}from"./identity-card-CwN41yUF.js";import"./iframe-6_jBXMSq.js";import"../sb-preview/runtime.js";import"./commonjsHelpers-Cpj98o6Y.js";import"./index-B_J8iUie.js";import"./index-DX_4BEHg.js";import"./index-DrFu-skq.js";import"./index-DryTTbHl.js";import"./lit-html-D-ZEPr28.js";import"./control-C1r2wu67.js";import"./ods-toggle2-LnXcgd5r.js";import"./chunk-FAE4I7JY-v0Th3BC0.js";function i(t){const n={a:"a",code:"code",em:"em",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",...r(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{of:s,name:"Documentation"}),`
`,e.jsx(c,{of:s}),`
`,e.jsx(n.p,{children:e.jsxs(n.em,{children:[e.jsx(n.strong,{children:"Input"})," component is an ",e.jsx(n.strong,{children:"Input"})," field where users can type into"]})}),`
`,e.jsx(d,{of:l,sourceState:"none"}),`
`,e.jsx(n.h2,{id:"overview",children:"Overview"}),`
`,e.jsxs("div",{className:"documentation-overview",children:[e.jsx("div",{children:e.jsxs(n.p,{children:["An ",e.jsx(n.strong,{children:"Input"})," is used to allow the user to enter a single line information in a field."]})}),e.jsx(h,{aliases:["Text Input","Text Field"],atomicType:m.atom,className:"documentation-overview__table",figmaLink:"https://www.figma.com/design/9jDDTcR4a9jPRFcdjawAlf/ODS---UI-Kit?node-id=93-22570",githubUrl:"https://github.com/ovh/design-system/tree/master/packages/ods/src/components/input",name:"Input",relatedComponents:[{name:"Button"},{name:"Form Field",subtitle:"Form elements"}]})]}),`
`,e.jsx(n.h2,{id:"anatomy",children:"Anatomy"}),`
`,e.jsx(n.p,{children:e.jsx(n.img,{src:"components/input/anatomy.png",alt:"Component anatomy",title:"Component anatomy"})}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:["A ",e.jsx(n.strong,{children:"field"}),": a container where the user can type in"]}),`
`,e.jsxs(n.li,{children:["A ",e.jsx(n.strong,{children:"placeholder"}),": provides hints or example of what to type"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Inner content"}),": displays the content typed by the field type (e.g.: ",e.jsx(n.code,{children:"date"}),", ",e.jsx(n.code,{children:"email"}),", ",e.jsx(n.code,{children:"number"}),", ",e.jsx(n.code,{children:"password"}),", ",e.jsx(n.code,{children:"search"}),", ",e.jsx(n.code,{children:"tel"}),", ",e.jsx(n.code,{children:"text"}),", ",e.jsx(n.code,{children:"time"}),", ",e.jsx(n.code,{children:"url"}),")"]}),`
`,e.jsxs(n.li,{children:["Clickable icon ",e.jsx(n.a,{href:"?path=/docs/ods-components-button--documentation",children:e.jsx(n.strong,{children:"Button"})}),", used for extra actions"]}),`
`,e.jsxs(n.li,{children:["Clickable icon ",e.jsx(n.a,{href:"?path=/docs/ods-components-button--documentation",children:e.jsx(n.strong,{children:"Button"})}),", used for extra actions"]}),`
`]}),`
`,e.jsx(n.h2,{id:"usage",children:"Usage"}),`
`,e.jsxs(n.p,{children:["An ",e.jsx(n.strong,{children:"Input"})," is used to type a free-form short text in a field. It is often used within a ",e.jsx(n.a,{href:"?path=/docs/ods-components-form-elements-form-field--documentation",children:e.jsx(n.strong,{children:"Form Field"})})," component that adds its label."]}),`
`,e.jsx(n.p,{children:"It is commonly used in a form, such as asking the user their name or email address, data entered can be text or numbers."}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.strong,{children:"Input"})," component can be used in addition with the ",e.jsx(n.strong,{children:"Autocomplete"})," component."]}),`
`,e.jsx(n.h3,{id:"dos--donts",children:"Dos & Don'ts"}),`
`,e.jsx(o,{className:"documentation-do-table",children:`
| ✅ Do                                                                                                                                                                           |
|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| - Add label and helper message to the **Input** with [**Form Field**](?path=/docs/ods-components-form-elements-form-field--documentation) component.                                    |
`}),`
`,e.jsx(o,{className:"documentation-dont-table",children:`
| ❌ Don't                                                                                                                                                                                                                      |
|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------                                             |
| - Use an **Input** for content longer than a single line: Use a [**Textarea**](?path=/docs/ods-components-form-elements-textarea--documentation) instead.                                                                       |
| - Use an **Input** when you have a predefined list of answers: use a [**Select**](?path=/docs/ods-components-form-elements-select--documentation) or [**Radio**](?path=/docs/ods-components-form-elements-radio--documentation) instead. |
`}),`
`,e.jsx(n.h2,{id:"placement",children:"Placement"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Input"})," should be vertically aligned with other form components on a same page."]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Inputs"})," that are strongly related in a form can be grouped. This group can flow horizontally left to right and/or vertically top to bottom."]}),`
`,e.jsx(n.h2,{id:"behavior",children:"Behavior"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Inputs"})," can be hovered, focused and clicked/triggered. They can be disabled as well."]}),`
`,e.jsxs(n.p,{children:["The user can start typing in the ",e.jsx(n.strong,{children:"Input"})," after clicking or focusing on the field container."]}),`
`,e.jsxs(n.p,{children:["When the user types longer text than the ",e.jsx(n.strong,{children:"Input"})," width, the cursor will automatically scroll left."]}),`
`,e.jsx(n.h2,{id:"variation",children:"Variation"}),`
`,e.jsx(n.p,{children:"N/A"}),`
`,e.jsx(n.h2,{id:"accessibility",children:"Accessibility"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"Tab"})," allows to focus on ",e.jsx(n.strong,{children:"Input"}),"."]})]})}function M(t={}){const{wrapper:n}={...r(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(i,{...t})}):i(t)}export{M as default};
