import{j as e}from"./jsx-runtime-C_5uCoOk.js";import{u as d}from"./index-BNSrq6w-.js";import{M as a,C as h,d as i}from"./index-DnV51lgW.js";import{B as l}from"./banner-CAPzkNgn.js";import{T as r,O as p}from"./tooltip.stories-ErJnxtVD.js";import{O as t}from"./index-BUOQImqF.js";import{O as s}from"./index-CEZbmgmh.js";import"./iframe-Cm7AUSBL.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-B_J8iUie.js";import"./index-DX_4BEHg.js";import"./index-DrFu-skq.js";import"./lit-html-D-ZEPr28.js";import"./unsafe-html-HR6uCwaW.js";import"./control-C1r2wu67.js";import"./ods-toggle2-CgWFvVwm.js";function c(o){const n={a:"a",em:"em",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...d(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{of:r,name:"Documentation"}),`
`,e.jsx(l,{of:r}),`
`,e.jsx(n.p,{children:e.jsxs(n.em,{children:[e.jsx(n.strong,{children:"Tooltip"})," component is used to display contextual information when the user hovers or focuses a UI element in a page."]})}),`
`,e.jsx(h,{of:p,sourceState:"none"}),`
`,e.jsx(n.h2,{id:"overview",children:"Overview"}),`
`,e.jsxs("div",{children:[e.jsxs("div",{id:"description",children:[e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Tooltip"})," component is used to display contextual information when the user hovers or focuses an element."]}),e.jsx(n.p,{children:"It enhances user experience by providing helpful hints, explanations, or descriptions without cluttering the UI."}),e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Tooltips"})," are commonly used for ",e.jsx(n.a,{href:"?path=/docs/ods-components-button--documentation",children:e.jsx(n.strong,{children:"Button"})}),`,
`,e.jsx(n.a,{href:"?path=/docs/ods-components-icon--documentation",children:e.jsx(n.strong,{children:"Icon"})}),", ",e.jsx(n.a,{href:"?path=/docs/ods-components-form-elements-form-field--documentation",children:e.jsx(n.strong,{children:`Form
Field`})}),", and other interactive elements."]})]}),e.jsx("table",{children:e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("th",{scope:"row",children:"Name"}),e.jsx("td",{children:e.jsx("strong",{children:"Tooltip"})})]}),e.jsxs("tr",{children:[e.jsx("th",{scope:"row",children:"Also known as"}),e.jsx("td",{children:e.jsx("em",{children:"Info Bubble"})})]}),e.jsxs("tr",{children:[e.jsx("th",{scope:"row",children:"Atomic type"}),e.jsx("td",{children:e.jsxs("a",{href:"https://atomicdesign.bradfrost.com/chapter-2/#atoms",children:["Atom",e.jsx(t,{name:s.externalLink,style:{fontSize:".7rem",paddingLeft:".3rem",paddingRight:".2rem"}})]})})]}),e.jsxs("tr",{children:[e.jsx("th",{scope:"row",children:"Related component(s)"}),e.jsx("td",{children:e.jsxs(n.p,{children:[e.jsx(n.a,{href:"?path=/docs/ods-components-text--documentation",children:e.jsx(n.strong,{children:"Text"})}),`,
`,e.jsx(n.a,{href:"?path=/docs/ods-components-icon--documentation",children:e.jsx(n.strong,{children:"Icon"})}),")"]})})]}),e.jsxs("tr",{children:[e.jsx("th",{scope:"row",children:"Links"}),e.jsxs("td",{children:[e.jsxs("a",{href:"https://www.figma.com/proto/tIKzHa5KvHHyosgIgyBswB/Design-Tokens",children:["Design",e.jsx(t,{name:s.externalLink,style:{fontSize:".7rem",paddingLeft:".3rem",paddingRight:".2rem"}})]}),e.jsx("br",{}),e.jsxs("a",{href:"https://github.com/ovh/design-system/tree/master/packages/components/src/tooltip",children:["Github",e.jsx(t,{name:s.externalLink,style:{fontSize:".7rem",paddingLeft:".3rem",paddingRight:".2rem"}})]})]})]})]})})]}),`
`,e.jsx(n.h2,{id:"anatomy",children:"Anatomy"}),`
`,e.jsx(n.p,{children:e.jsx(n.img,{src:"components/tooltip/anatomy.png",alt:"Component anatomy",title:"Component anatomy"})}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.strong,{children:"Container"})}),`
`,e.jsx(n.li,{children:e.jsx(n.strong,{children:"Main content"})}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Arrow"})," ",e.jsx(n.em,{children:"(optional)"})]}),`
`]}),`
`,e.jsx(n.h2,{id:"usage",children:"Usage"}),`
`,e.jsxs(n.p,{children:["Use the ",e.jsx(n.strong,{children:"Tooltip"})," component to provide additional information or context for UI elements."]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Tooltips"})," should be brief and helpful, enhancing user understanding without overwhelming them."]}),`
`,e.jsxs(n.p,{children:["They are suitable for ",e.jsx(n.a,{href:"?path=/docs/ods-components-button--documentation",children:e.jsx(n.strong,{children:"Button"})}),", ",e.jsx(n.a,{href:"?path=/docs/ods-components-icon--documentation",children:e.jsx(n.strong,{children:"Icon"})}),", ",e.jsx(n.a,{href:"?path=/docs/ods-components-form-elements-form-field--documentation",children:e.jsx(n.strong,{children:"Form Field"})}),", ",e.jsx(n.a,{href:"?path=/docs/ods-components-link--documentation",children:e.jsx(n.strong,{children:"Link"})}),", and any other elements where additional context would be beneficial."]}),`
`,e.jsx(n.h3,{id:"dos--donts",children:"Dos & Don'ts"}),`
`,e.jsx(i,{children:`
| ✅ Do                                                                                                                                                                           |
|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| - Use a **Tooltip** to provide useful, brief additional information.                                                                                                           |
| - Use **Tooltips** sparingly without invading the screen.                                                                                                                      |
| - Write **Tooltip**'s [**Text**](?path=/docs/ods-components-text--documentation) as full sentences with punctuation except there is not enough space.                   |
`}),`
`,e.jsx(i,{children:`
| ❌ Don't                                                                                                                                                                                               |
|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------                      |
| - Use a **Tooltip** to communicate error messages.                                                                                                                                                    |
| - Write very important information within a **Tooltip** since it is only displayed on hover and focus so the user might miss its crucial content.                                                     |
| - Insert rich information such as image in a **Tooltip**.                                                                                                                                             |
| - Use interactive elements within a **Tooltip** such as [**Button**](?path=/docs/ods-components-button--documentation) or [**Link**](?path=/docs/ods-components-link--documentation). |
| - Repeat information within a **Tooltip** that is already visible in the UI.                                                                                                                          |
`}),`
`,e.jsx(n.h2,{id:"placement",children:"Placement"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Tooltip"})," has automatic positioning feature. It can detect the edge of the browser so the container always stays visible on a page."]}),`
`,e.jsx(n.h2,{id:"behavior",children:"Behavior"}),`
`,e.jsxs(n.p,{children:["By default, a ",e.jsx(n.strong,{children:"Tooltip"})," is hidden to the user."]}),`
`,e.jsxs(n.p,{children:["It triggers when the user hovers or focuses on the **Tooltip'**s trigger element such as an ",e.jsx(n.a,{href:"?path=/docs/ods-components-icon--documentation",children:e.jsx(n.strong,{children:"Icon"})}),"."]}),`
`,e.jsxs(n.p,{children:["As long as the user's mouse cursor or focus is active, the ",e.jsx(n.strong,{children:"Tooltip"})," will persist."]}),`
`,e.jsx(n.p,{children:"It will hide when the users stop hovering over or focusing on this element."}),`
`,e.jsxs(n.p,{children:["On a mobile device, a ",e.jsx(n.strong,{children:"Tooltip"})," is displayed upon tapping, and it will hide when the user taps an area outside the ",e.jsx(n.strong,{children:"Tooltip"})," container."]}),`
`,e.jsx(n.h2,{id:"variation",children:"Variation"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"With extra arrow"}),": providing a more pronounced visual connection between the tooltip and the element it describes, ensuring users clearly understand which element the tooltip is associated with."]}),`
`]}),`
`,e.jsx(n.h2,{id:"accessibility",children:"Accessibility"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Tooltip"})," component is a visual equivalent of ARIA labels, it will be read the same way by screen readers."]})]})}function U(o={}){const{wrapper:n}={...d(),...o.components};return n?e.jsx(n,{...o,children:e.jsx(c,{...o})}):c(o)}export{U as default};
