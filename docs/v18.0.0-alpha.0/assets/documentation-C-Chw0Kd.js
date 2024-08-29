import{j as e}from"./jsx-runtime-3v6rTKkY.js";import{u as d}from"./index-B5y3xRNA.js";import{M as l,C as c,d as o}from"./index-sugWq352.js";import{B as h}from"./banner-BU_1gqe2.js";import{T as i,O as x}from"./textarea.stories-Ckcxrzb7.js";import{O as t}from"./index-BjLrujv2.js";import{O as r}from"./index-DB8q6ij-.js";import"./iframe-D98u-D7f.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-B_J8iUie.js";import"./index-DX_4BEHg.js";import"./index-DrFu-skq.js";import"./lit-html-D-ZEPr28.js";import"./control-C1r2wu67.js";import"./ods-toggle2-Du4-LCNk.js";import"./ods-icon-MrkrUMg1.js";function a(s){const n={a:"a",code:"code",em:"em",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",...d(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{of:i,name:"Documentation"}),`
`,e.jsx(h,{of:i}),`
`,e.jsx(n.p,{children:e.jsxs(n.em,{children:["A ",e.jsx(n.strong,{children:"Textarea"})," component allows users to input and edit multiple lines of text."]})}),`
`,e.jsx(c,{of:x,sourceState:"none"}),`
`,e.jsx(n.h2,{id:"overview",children:"Overview"}),`
`,e.jsxs("div",{children:[e.jsxs("div",{id:"description",children:[e.jsxs(n.p,{children:["The ",e.jsx(n.strong,{children:"Textarea"})," component is used to capture and display multi-line text input from users."]}),e.jsx(n.p,{children:"It is typically used in forms where users need to provide detailed information, comments, or descriptions."})]}),e.jsx("table",{children:e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("th",{scope:"row",children:"Name"}),e.jsx("td",{children:e.jsx("strong",{children:"Textarea"})})]}),e.jsxs("tr",{children:[e.jsx("th",{scope:"row",children:"Also known as"}),e.jsx("td",{children:e.jsx("em",{children:"Text Box"})})]}),e.jsxs("tr",{children:[e.jsx("th",{scope:"row",children:"Atomic type"}),e.jsx("td",{children:e.jsxs("a",{href:"https://atomicdesign.bradfrost.com/chapter-2/#atoms",children:["Atom",e.jsx(t,{name:r.externalLink,style:{fontSize:".7rem",paddingLeft:".3rem",paddingRight:".2rem"}})]})})]}),e.jsxs("tr",{children:[e.jsx("th",{scope:"row",children:"Related component(s)"}),e.jsx("td",{children:e.jsx(n.p,{children:e.jsx(n.a,{href:"?path=/docs/ods-components-tag--documentation",children:e.jsx(n.strong,{children:"Tag"})})})})]}),e.jsxs("tr",{children:[e.jsx("th",{scope:"row",children:"Links"}),e.jsxs("td",{children:[e.jsxs("a",{href:"https://www.figma.com/proto/tIKzHa5KvHHyosgIgyBswB/Design-Tokens",children:["Design",e.jsx(t,{name:r.externalLink,style:{fontSize:".7rem",paddingLeft:".3rem",paddingRight:".2rem"}})]}),e.jsx("br",{}),e.jsxs("a",{href:"https://github.com/ovh/design-system/tree/master/packages/components/src/textarea",children:["Github",e.jsx(t,{name:r.externalLink,style:{fontSize:".7rem",paddingLeft:".3rem",paddingRight:".2rem"}})]})]})]})]})})]}),`
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
`,e.jsx(o,{children:`
| ✅ Do                                                                                                                                                                           |
|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| - Use **Textarea** for a text longer than a single line.                                                                                                                       |
| - Use a [**Form Field**](?path=/docs/ods-components-form-elements-form-field--documentation) label (and/or an helper) to clearly inform what information the user should type.          |
`}),`
`,e.jsx(o,{children:`
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
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"Tab"})," allows to focus on ",e.jsx(n.strong,{children:"Textarea"}),"."]})]})}function O(s={}){const{wrapper:n}={...d(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(a,{...s})}):a(s)}export{O as default};
