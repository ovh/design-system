import{j as e}from"./jsx-runtime-C_5uCoOk.js";import{u as d}from"./index-BNSrq6w-.js";import{M as h,C as a,d as i}from"./index-DnV51lgW.js";import{B as l}from"./banner-CAPzkNgn.js";import{P as r,O as p}from"./popover.stories---wdfTf6.js";import{O as s}from"./index-BUOQImqF.js";import{O as t}from"./index-CEZbmgmh.js";import"./iframe-Cm7AUSBL.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-B_J8iUie.js";import"./index-DX_4BEHg.js";import"./index-DrFu-skq.js";import"./lit-html-D-ZEPr28.js";import"./unsafe-html-HR6uCwaW.js";import"./control-C1r2wu67.js";import"./ods-toggle2-CgWFvVwm.js";function c(o){const n={a:"a",code:"code",em:"em",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...d(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(h,{of:r,name:"Documentation"}),`
`,e.jsx(l,{of:r}),`
`,e.jsx(n.p,{children:e.jsxs(n.em,{children:[e.jsx(n.strong,{children:"Popover"})," component is triggered by click and is used to provide additional information to the user in a new temporary surface that overlays the page"]})}),`
`,e.jsx(a,{of:p,sourceState:"none"}),`
`,e.jsx(n.h2,{id:"overview",children:"Overview"}),`
`,e.jsxs("div",{children:[e.jsxs("div",{id:"description",children:[e.jsxs(n.p,{children:["A ",e.jsx(n.strong,{children:"Popover"})," will provide additional information to the user in a clear and concise way."]}),e.jsxs(n.p,{children:["It is commonly used to appear by click, thus crucial information should not be displayed in the ",e.jsx(n.strong,{children:"Popover"}),"."]})]}),e.jsx("table",{children:e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("th",{scope:"row",children:"Name"}),e.jsx("td",{children:e.jsx("strong",{children:"Popover"})})]}),e.jsxs("tr",{children:[e.jsx("th",{scope:"row",children:"Also known as"}),e.jsx("td",{children:e.jsx("em",{children:"Complex Tooltip"})})]}),e.jsxs("tr",{children:[e.jsx("th",{scope:"row",children:"Atomic type"}),e.jsx("td",{children:e.jsxs("a",{href:"https://atomicdesign.bradfrost.com/chapter-2/#atoms",children:["Atom",e.jsx(s,{name:t.externalLink,style:{fontSize:".7rem",paddingLeft:".3rem",paddingRight:".2rem"}})]})})]}),e.jsxs("tr",{children:[e.jsx("th",{scope:"row",children:"Related component(s)"}),e.jsx("td",{children:e.jsxs(n.p,{children:[e.jsx(n.a,{href:"?path=/docs/ods-components-text--documentation",children:e.jsx(n.strong,{children:"Text"})}),`,
`,e.jsx(n.a,{href:"?path=/docs/ods-components-button--documentation",children:e.jsx(n.strong,{children:"Button"})})]})})]}),e.jsxs("tr",{children:[e.jsx("th",{scope:"row",children:"Links"}),e.jsxs("td",{children:[e.jsxs("a",{href:"https://www.figma.com/proto/tIKzHa5KvHHyosgIgyBswB/Design-Tokens",children:["Design",e.jsx(s,{name:t.externalLink,style:{fontSize:".7rem",paddingLeft:".3rem",paddingRight:".2rem"}})]}),e.jsx("br",{}),e.jsxs("a",{href:"https://github.com/ovh/design-system/tree/master/packages/components/src/popover",children:["Github",e.jsx(s,{name:t.externalLink,style:{fontSize:".7rem",paddingLeft:".3rem",paddingRight:".2rem"}})]})]})]})]})})]}),`
`,e.jsx(n.h2,{id:"anatomy",children:"Anatomy"}),`
`,e.jsx(n.p,{children:e.jsx(n.img,{src:"components/popover/anatomy.png",alt:"Component anatomy",title:"Component anatomy"})}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Container"}),": main container that has all content (i.e ",e.jsx(n.a,{href:"?path=/docs/ods-components-text--documentation",children:e.jsx(n.strong,{children:"Text"})}),", ",e.jsx(n.a,{href:"?path=/docs/ods-components-button--documentation",children:e.jsx(n.strong,{children:"Button"})}),", etc.)"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Arrow tip"})," (optional)"]}),`
`]}),`
`,e.jsx(n.h2,{id:"usage",children:"Usage"}),`
`,e.jsxs(n.p,{children:["A ",e.jsx(n.strong,{children:"Popover"})," is used to provide an explanation for a user interface element."]}),`
`,e.jsxs(n.p,{children:["It can include interactive elements such as ",e.jsx(n.a,{href:"?path=/docs/ods-components-button--documentation",children:e.jsx(n.strong,{children:"Button"})})," or ",e.jsx(n.a,{href:"?path=/docs/ods-components-link--documentation",children:e.jsx(n.strong,{children:"Link"})}),"."]}),`
`,e.jsxs(n.h3,{id:"tooltip-vs-popover",children:[e.jsx(n.a,{href:"?path=/docs/ods-components-tooltip--documentation",children:e.jsx(n.strong,{children:"Tooltip"})})," vs. ",e.jsx(n.strong,{children:"Popover"})]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Both components look similar but a ",e.jsx(n.a,{href:"?path=/docs/ods-components-tooltip--documentation",children:e.jsx(n.strong,{children:"Tooltip"})})," is displayed on hover and focus while a ",e.jsx(n.strong,{children:"Popover"})," is triggered by click."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"?path=/docs/ods-components-tooltip--documentation",children:e.jsx(n.strong,{children:"Tooltip"})})," are commonly used for shorter explanations, while longer ",e.jsx(n.a,{href:"?path=/docs/ods-components-text--documentation",children:e.jsx(n.strong,{children:"Text"})})," / complex UIs would suit ",e.jsx(n.strong,{children:"Popovers"})," better."]}),`
`,e.jsxs(n.li,{children:["Use a ",e.jsx(n.strong,{children:"Popover"})," when you need to insert interactive elements such as ",e.jsx(n.a,{href:"?path=/docs/ods-components-button--documentation",children:e.jsx(n.strong,{children:"Button"})}),"."]}),`
`,e.jsxs(n.li,{children:["A ",e.jsx(n.strong,{children:"Popover"})," can be dismissed if an action ",e.jsx(n.a,{href:"?path=/docs/ods-components-button--documentation",children:e.jsx(n.strong,{children:"Button"})})," allows it."]}),`
`]}),`
`,e.jsx(n.h3,{id:"dos--donts",children:"Dos & Don'ts"}),`
`,e.jsx(i,{children:`
| ✅ Do                                                                                                                                                                                                                    |
|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------                                          |
| - Use a **Popover** instead of a [**Tooltip**](?path=/docs/ods-components-tooltip--documentation) when the [**Text**](?path=/docs/ods-components-text--documentation) is long; but keep it concise |
| - Write **Popover**'s [**Text**](?path=/docs/ods-components-text--documentation) as full sentences with punctuation                                                                                              |
`}),`
`,e.jsx(i,{children:`
| ❌ Don't                                                                                                                                                                          |
|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| - Write very important information within a **Popover** since it is only displayed by click so the user might miss its crucial content                                           |
| - Insert rich information such as image in a **Popover**                                                                                                                         |
| - Overlap the **Popover**'s trigger element with the **Popover** itself when it has been triggered                                                                               |
`}),`
`,e.jsx(n.h2,{id:"placement",children:"Placement"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Popover"})," can be set in a certain position by default around its trigger."]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Popover"})," has automatic positioning feature. It can detect the edge of the browser so the container always stays visible on a page."]}),`
`,e.jsx(n.h2,{id:"behavior",children:"Behavior"}),`
`,e.jsxs(n.p,{children:["By default, a ",e.jsx(n.strong,{children:"Popover"})," is hidden to the user."]}),`
`,e.jsxs(n.p,{children:["It triggers when the user clicks on the ",e.jsx(n.strong,{children:"Popover"}),"'s trigger element such as a ",e.jsx(n.a,{href:"?path=/docs/ods-components-button--documentation",children:e.jsx(n.strong,{children:"Button"})}),"."]}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.strong,{children:"Popover"})," can be closed or dismissed by clicking anywhere on the page outside the ",e.jsx(n.strong,{children:"Popover"}),"'s container."]}),`
`,e.jsx(n.h2,{id:"variation",children:"Variation"}),`
`,e.jsx(n.p,{children:"N/A"}),`
`,e.jsx(n.h2,{id:"accessibility",children:"Accessibility"}),`
`,e.jsxs(n.p,{children:["When visible, ",e.jsx(n.strong,{children:"Popover"})," gains the user's focus."]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"Escape"})," closes the currently opened ",e.jsx(n.strong,{children:"Popover"})]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"Tab"})," allows to focus in inner ",e.jsx(n.strong,{children:"Popover"})," content"]}),`
`]})]})}function I(o={}){const{wrapper:n}={...d(),...o.components};return n?e.jsx(n,{...o,children:e.jsx(c,{...o})}):c(o)}export{I as default};
