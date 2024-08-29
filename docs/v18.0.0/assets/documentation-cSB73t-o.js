import{j as e}from"./jsx-runtime-Dn0LW--f.js";import{u as i}from"./index-DeyDdHvX.js";import{M as a,C as l,d as o}from"./index-BM3JsZOq.js";import{B as d}from"./banner-DPlTyHjv.js";import{T as s,O as c}from"./textarea.stories-Ckcxrzb7.js";import{I as h,A as m}from"./identity-card-CwN41yUF.js";import"./iframe-6_jBXMSq.js";import"../sb-preview/runtime.js";import"./commonjsHelpers-Cpj98o6Y.js";import"./index-B_J8iUie.js";import"./index-DX_4BEHg.js";import"./index-DrFu-skq.js";import"./lit-html-D-ZEPr28.js";import"./control-C1r2wu67.js";import"./index-DryTTbHl.js";import"./ods-toggle2-LnXcgd5r.js";import"./chunk-FAE4I7JY-v0Th3BC0.js";function r(t){const n={code:"code",em:"em",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",...i(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{of:s,name:"Documentation"}),`
`,e.jsx(d,{of:s}),`
`,e.jsx(n.p,{children:e.jsxs(n.em,{children:["A ",e.jsx(n.strong,{children:"Textarea"})," component allows users to input and edit multiple lines of text."]})}),`
`,e.jsx(l,{of:c,sourceState:"none"}),`
`,e.jsx(n.h2,{id:"overview",children:"Overview"}),`
`,e.jsxs("div",{className:"documentation-overview",children:[e.jsxs("div",{children:[e.jsxs(n.p,{children:["The ",e.jsx(n.strong,{children:"Textarea"})," component is used to capture and display multi-line text input from users."]}),e.jsx(n.p,{children:"It is typically used in forms where users need to provide detailed information, comments, or descriptions."})]}),e.jsx(h,{aliases:["Text Box"],atomicType:m.atom,className:"documentation-overview__table",figmaLink:"https://www.figma.com/design/9jDDTcR4a9jPRFcdjawAlf/ODS---UI-Kit?node-id=53-11147",githubUrl:"https://github.com/ovh/design-system/tree/master/packages/ods/src/components/textarea",name:"Textarea",relatedComponents:[{name:"Tag"}]})]}),`
`,e.jsx(n.h2,{id:"anatomy",children:"Anatomy"}),`
`,e.jsx(n.p,{children:e.jsx(n.img,{src:"components/textarea/anatomy.png",alt:"Component anatomy",title:"Component anatomy"})}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Placeholder"})," : provide hints or example of what to type"]}),`
`,e.jsx(n.li,{children:e.jsx(n.strong,{children:"Main container"})}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Resize native icon"})," (optional)"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Scrollbar"})," : when filled content is longer than its container (optional)"]}),`
`]}),`
`,e.jsx(n.h2,{id:"usage",children:"Usage"}),`
`,e.jsxs(n.p,{children:["Use the ",e.jsx(n.strong,{children:"Textarea"})," component to allow users to enter multi-line text in forms, such as comments, messages, descriptions, or other detailed information."]}),`
`,e.jsxs(n.p,{children:["Ensure that the ",e.jsx(n.strong,{children:"Textarea"})," is appropriately sized for the expected input and provides clear guidance on what information is needed."]}),`
`,e.jsx(n.h3,{id:"dos--donts",children:"Dos & Don'ts"}),`
`,e.jsx(o,{className:"documentation-do-table",children:`
| ✅ Do                                                                                                                                                                           |
|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| - Use **Textarea** for a text longer than a single line.                                                                                                                       |
| - Use a [**Form Field**](?path=/docs/ods-components-form-elements-form-field--documentation) label (and/or an helper) to clearly inform what information the user should type.          |
`}),`
`,e.jsx(o,{className:"documentation-dont-table",children:`
| ❌ Don't                                                                                                                                                                          |
|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| - Use **Textarea** for shorter text.                                                                                                                                             |
| - Use a placeholder as replacement for a [**Form Field**](?path=/docs/ods-components-form-elements-form-field--documentation) label.                                                      |
`}),`
`,e.jsx(n.h2,{id:"placement",children:"Placement"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Textarea"})," is used in forms where the expected user input text would be long."]}),`
`,e.jsx(n.h2,{id:"behavior",children:"Behavior"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Textarea"})," can be hovered, focused, disabled or read only."]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"When disabled"}),", the component cannot be focused nor clicked."]}),`
`,e.jsxs(n.p,{children:["When the user types an amount of ",e.jsx(n.strong,{children:"text longer than Textarea"})," container itself, a scrollbar is displayed."]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Textarea"})," is optionally resizable: user can expand its container."]}),`
`,e.jsxs(n.p,{children:["An event is triggered when the ",e.jsx(n.strong,{children:"Textarea"})," value changes, and on user focusing in and out of the component."]}),`
`,e.jsx(n.h2,{id:"variation",children:"Variation"}),`
`,e.jsx(n.p,{children:"N/A"}),`
`,e.jsx(n.h2,{id:"accessibility",children:"Accessibility"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"Tab"})," allows to focus on ",e.jsx(n.strong,{children:"Textarea"}),"."]})]})}function I(t={}){const{wrapper:n}={...i(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(r,{...t})}):r(t)}export{I as default};
