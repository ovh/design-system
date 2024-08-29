import{j as e}from"./jsx-runtime-C_5uCoOk.js";import{u as c}from"./index-BNSrq6w-.js";import{M as d,C as l,d as o}from"./index-DnV51lgW.js";import{B as h}from"./banner-CAPzkNgn.js";import{Q as r,O as m}from"./quantity.stories-B36jQ42_.js";import{O as t}from"./index-BUOQImqF.js";import{O as i}from"./index-CEZbmgmh.js";import"./iframe-Cm7AUSBL.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-B_J8iUie.js";import"./index-DX_4BEHg.js";import"./index-DrFu-skq.js";import"./lit-html-D-ZEPr28.js";import"./control-C1r2wu67.js";import"./ods-toggle2-CgWFvVwm.js";function a(s){const n={a:"a",code:"code",em:"em",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",...c(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(d,{of:r,name:"Documentation"}),`
`,e.jsx(h,{of:r}),`
`,e.jsx(n.p,{children:e.jsxs(n.em,{children:[e.jsx(n.strong,{children:"Quantity"})," is a component used to enter and modify a numeric value in a responsive and easy way"]})}),`
`,e.jsx(l,{of:m,sourceState:"none"}),`
`,e.jsx(n.h2,{id:"overview",children:"Overview"}),`
`,e.jsxs("div",{children:[e.jsxs("div",{id:"description",children:[e.jsxs(n.p,{children:["The ",e.jsx(n.strong,{children:"Quantity"})," component provides a user-friendly interface for selecting or entering numerical values."]}),e.jsxs(n.p,{children:["It includes an ",e.jsx(n.a,{href:"?path=/docs/ods-components-form-elements-input--documentation",children:e.jsx(n.strong,{children:"Input"})}),` field combined with increment and
decrement `,e.jsx(n.a,{href:"?path=/docs/ods-components-button--documentation",children:e.jsx(n.strong,{children:"Button"})})," to adjust the value easily."]})]}),e.jsx("table",{children:e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("th",{scope:"row",children:"Name"}),e.jsx("td",{children:e.jsx("strong",{children:"Quantity"})})]}),e.jsxs("tr",{children:[e.jsx("th",{scope:"row",children:"Also known as"}),e.jsx("td",{children:e.jsx("em",{children:"Numeric, Number input, Amount"})})]}),e.jsxs("tr",{children:[e.jsx("th",{scope:"row",children:"Atomic type"}),e.jsx("td",{children:e.jsxs("a",{href:"https://atomicdesign.bradfrost.com/chapter-2/#molecules",children:["Molecule",e.jsx(t,{name:i.externalLink,style:{fontSize:".7rem",paddingLeft:".3rem",paddingRight:".2rem"}})]})})]}),e.jsxs("tr",{children:[e.jsx("th",{scope:"row",children:"Related component(s)"}),e.jsx("td",{children:e.jsxs(n.p,{children:[e.jsx(n.a,{href:"?path=/docs/ods-components-button--documentation",children:e.jsx(n.strong,{children:"Button"})}),`,
`,e.jsx(n.a,{href:"?path=/docs/ods-components-icon--documentation",children:e.jsx(n.strong,{children:"Icon"})}),`,
`,e.jsx(n.a,{href:"?path=/docs/ods-components-form-elements-input--documentation",children:e.jsx(n.strong,{children:"Input"})}),", ",e.jsx(n.a,{href:"?path=/docs/ods-components-form-elements-form-field--documentation",children:e.jsx(n.strong,{children:`Form
Field`})})]})})]}),e.jsxs("tr",{children:[e.jsx("th",{scope:"row",children:"Links"}),e.jsxs("td",{children:[e.jsxs("a",{href:"https://www.figma.com/proto/tIKzHa5KvHHyosgIgyBswB/Design-Tokens",children:["Design",e.jsx(t,{name:i.externalLink,style:{fontSize:".7rem",paddingLeft:".3rem",paddingRight:".2rem"}})]}),e.jsx("br",{}),e.jsxs("a",{href:"https://github.com/ovh/design-system/tree/master/packages/components/src/quantity",children:["Github",e.jsx(t,{name:i.externalLink,style:{fontSize:".7rem",paddingLeft:".3rem",paddingRight:".2rem"}})]})]})]})]})})]}),`
`,e.jsx(n.h2,{id:"anatomy",children:"Anatomy"}),`
`,e.jsx(n.p,{children:e.jsx(n.img,{src:"components/quantity/anatomy.png",alt:"Component anatomy",title:"Component anatomy"})}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:'"Minus" icon Button'}),": allows users to decrease the value displayed in the numeric field"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Numeric Input"}),": displays / allows to type a value (equal to a quantity)"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:'"Plus" icon Button'}),": allows users to increase the value displayed in the numeric field"]}),`
`]}),`
`,e.jsx(n.h2,{id:"usage",children:"Usage"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Quantity"})," is used to quickly adjust with a few clicks a numeric value within defined parameters."]}),`
`,e.jsx(n.p,{children:"Limits can be set as minimum or maximum value. In that case, the numeric value cannot exceed the defined boundaries."}),`
`,e.jsx(n.h3,{id:"dos--donts",children:"Dos & Don'ts"}),`
`,e.jsx(o,{children:`
| ✅ Do                                                                                                                                                                           |
|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| - Use **Quantity** for small value changes that require only a few clicks                                                                                                      |
| - Be sure sure that the user can choose to type directly a number in the field                                                                                                 |
`}),`
`,e.jsx(o,{children:`
| ❌ Don't                                                                                                                                                                          |
|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| - A **Quantity** by itself displays a number: don't use it in any other context than displaying a quantity                                                                       |
| - Use **Quantity** for large value changes                                                                                                                                       |
`}),`
`,e.jsx(n.h2,{id:"placement",children:"Placement"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Quantity"})," can be used to let users easily change an amount of items, for example, or similar situations."]}),`
`,e.jsxs(n.p,{children:["It should be used with numeric ",e.jsx(n.a,{href:"?path=/docs/ods-components-form-elements-input--documentation",children:e.jsx(n.strong,{children:"Input"})})," that are in a fairly narrow range."]}),`
`,e.jsx(n.h2,{id:"behavior",children:"Behavior"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Quantity"})," numeric field can be edited directly by the user."]}),`
`,e.jsxs(n.p,{children:["The user can also decrease or increase the value by clicking on ",e.jsx(n.a,{href:"?path=/docs/ods-components-button--documentation",children:e.jsx(n.strong,{children:"Button"})}),"."]}),`
`,e.jsx(n.p,{children:"In case that limits have been set to minimum and maximum value, corresponding control will be disabled when this value has been reached."}),`
`,e.jsxs(n.p,{children:["Each item of the ",e.jsx(n.strong,{children:"Quantity"})," component can be focused; the whole component can be disabled at once."]}),`
`,e.jsx(n.h2,{id:"variation",children:"Variation"}),`
`,e.jsx(n.p,{children:"N/A"}),`
`,e.jsx(n.h2,{id:"accessibility",children:"Accessibility"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.a,{href:"?path=/docs/ods-components-form-elements-input--documentation",children:e.jsx(n.strong,{children:"Input"})})," and ",e.jsx(n.a,{href:"?path=/docs/ods-components-button--documentation",children:e.jsx(n.strong,{children:"Button"})})," accessibility features avail here, with former tabulation and triggers."]}),`
`,e.jsxs(n.p,{children:["The numeric field value can be increased/decreased using ",e.jsx(n.code,{children:"Up"})," and ",e.jsx(n.code,{children:"Down"})," arrows when focused."]})]})}function L(s={}){const{wrapper:n}={...c(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(a,{...s})}):a(s)}export{L as default};
