import{j as e}from"./jsx-runtime-C_5uCoOk.js";import{u as c}from"./index-BNSrq6w-.js";import{M as l,C as a,d as r}from"./index-DnV51lgW.js";import{B as h}from"./banner-CAPzkNgn.js";import{I as i,O as m}from"./input.stories-EUpPumQQ.js";import{O as s}from"./index-BUOQImqF.js";import{O as o}from"./index-CEZbmgmh.js";import"./iframe-Cm7AUSBL.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-B_J8iUie.js";import"./index-DX_4BEHg.js";import"./index-DrFu-skq.js";import"./lit-html-D-ZEPr28.js";import"./control-C1r2wu67.js";import"./ods-toggle2-CgWFvVwm.js";function d(t){const n={a:"a",code:"code",em:"em",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",...c(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{of:i,name:"Documentation"}),`
`,e.jsx(h,{of:i}),`
`,e.jsx(n.p,{children:e.jsxs(n.em,{children:[e.jsx(n.strong,{children:"Input"})," component is an ",e.jsx(n.strong,{children:"Input"})," field where users can type into"]})}),`
`,e.jsx(a,{of:m,sourceState:"none"}),`
`,e.jsx(n.h2,{id:"overview",children:"Overview"}),`
`,e.jsxs("div",{children:[e.jsx("div",{id:"description",children:e.jsxs(n.p,{children:["An ",e.jsx(n.strong,{children:"Input"})," is used to allow the user to enter a single line information in a field."]})}),e.jsx("table",{children:e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("th",{scope:"row",children:"Name"}),e.jsx("td",{children:e.jsx("strong",{children:"Input"})})]}),e.jsxs("tr",{children:[e.jsx("th",{scope:"row",children:"Also known as"}),e.jsx("td",{children:e.jsx("em",{children:"Text Input, Text Field"})})]}),e.jsxs("tr",{children:[e.jsx("th",{scope:"row",children:"Atomic type"}),e.jsx("td",{children:e.jsxs("a",{href:"https://atomicdesign.bradfrost.com/chapter-2/#atoms",children:["Atom",e.jsx(s,{name:o.externalLink,style:{fontSize:".7rem",paddingLeft:".3rem",paddingRight:".2rem"}})]})})]}),e.jsxs("tr",{children:[e.jsx("th",{scope:"row",children:"Related component(s)"}),e.jsx("td",{children:e.jsxs(n.p,{children:[e.jsx(n.a,{href:"?path=/docs/ods-components-button--documentation",children:e.jsx(n.strong,{children:"Button"})}),", ",e.jsx(n.a,{href:"?path=/docs/ods-components-form-elements-form-field--documentation",children:e.jsx(n.strong,{children:`Form
Field`})}),","]})})]}),e.jsxs("tr",{children:[e.jsx("th",{scope:"row",children:"Links"}),e.jsxs("td",{children:[e.jsxs("a",{href:"https://www.figma.com/proto/tIKzHa5KvHHyosgIgyBswB/Design-Tokens",children:["Design",e.jsx(s,{name:o.externalLink,style:{fontSize:".7rem",paddingLeft:".3rem",paddingRight:".2rem"}})]}),e.jsx("br",{}),e.jsxs("a",{href:"https://github.com/ovh/design-system/tree/master/packages/components/src/input",children:["Github",e.jsx(s,{name:o.externalLink,style:{fontSize:".7rem",paddingLeft:".3rem",paddingRight:".2rem"}})]})]})]})]})})]}),`
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
`,e.jsx(r,{children:`
| ✅ Do                                                                                                                                                                           |
|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| - Add label and helper message to the **Input** with [**Form Field**](?path=/docs/ods-components-form-elements-form-field--documentation) component.                                    |
`}),`
`,e.jsx(r,{children:`
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
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"Tab"})," allows to focus on ",e.jsx(n.strong,{children:"Input"}),"."]})]})}function B(t={}){const{wrapper:n}={...c(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(d,{...t})}):d(t)}export{B as default};
