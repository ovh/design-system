import{j as e}from"./jsx-runtime-C_5uCoOk.js";import{u as c}from"./index-BNSrq6w-.js";import{M as h,C as l,d as i}from"./index-DnV51lgW.js";import{B as a}from"./banner-CAPzkNgn.js";import{C as r,D as x}from"./code.stories-vi6EQWI5.js";import{O as t}from"./index-BUOQImqF.js";import{O as s}from"./index-CEZbmgmh.js";import"./iframe-Cm7AUSBL.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-B_J8iUie.js";import"./index-DX_4BEHg.js";import"./index-DrFu-skq.js";import"./lit-html-D-ZEPr28.js";import"./control-C1r2wu67.js";import"./ods-toggle2-CgWFvVwm.js";function d(o){const n={a:"a",code:"code",em:"em",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",...c(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(h,{of:r,name:"Documentation"}),`
`,e.jsx(a,{of:r}),`
`,e.jsx(n.p,{children:e.jsxs(n.em,{children:[e.jsx(n.strong,{children:"Code"})," component highlights strings or small blocks of ",e.jsx(n.strong,{children:"Code"})," so it makes them easier to read and understand"]})}),`
`,e.jsx(l,{of:x,sourceState:"none"}),`
`,e.jsx(n.h2,{id:"overview",children:"Overview"}),`
`,e.jsxs("div",{children:[e.jsx("div",{id:"description",children:e.jsxs(n.p,{children:["A ",e.jsx(n.strong,{children:"Code"})," component displays a string of ",e.jsx(n.strong,{children:"Code"})," or a small block of ",e.jsx(n.strong,{children:"Code"})," that can be copied to the clipboard."]})}),e.jsx("table",{children:e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("th",{scope:"row",children:"Name"}),e.jsx("td",{children:e.jsx("strong",{children:"Code"})})]}),e.jsxs("tr",{children:[e.jsx("th",{scope:"row",children:"Also known as"}),e.jsx("td",{children:e.jsx("em",{children:"Code snippet"})})]}),e.jsxs("tr",{children:[e.jsx("th",{scope:"row",children:"Atomic type"}),e.jsx("td",{children:e.jsxs("a",{href:"https://atomicdesign.bradfrost.com/chapter-2/#atoms",children:["Atom",e.jsx(t,{name:s.externalLink,style:{fontSize:".7rem",paddingLeft:".3rem",paddingRight:".2rem"}})]})})]}),e.jsxs("tr",{children:[e.jsx("th",{scope:"row",children:"Related component(s)"}),e.jsx("td",{children:e.jsxs(n.p,{children:[e.jsx(n.a,{href:"?path=/docs/ods-components-text--documentation",children:e.jsx(n.strong,{children:"Text"})}),`,
`,e.jsx(n.a,{href:"?path=/docs/ods-components-button--documentation",children:e.jsx(n.strong,{children:"Button"})})]})})]}),e.jsxs("tr",{children:[e.jsx("th",{scope:"row",children:"Links"}),e.jsxs("td",{children:[e.jsxs("a",{href:"https://www.figma.com/proto/tIKzHa5KvHHyosgIgyBswB/Design-Tokens",children:["Design",e.jsx(t,{name:s.externalLink,style:{fontSize:".7rem",paddingLeft:".3rem",paddingRight:".2rem"}})]}),e.jsx("br",{}),e.jsxs("a",{href:"https://github.com/ovh/design-system/tree/master/packages/components/src/code",children:["Github",e.jsx(t,{name:s.externalLink,style:{fontSize:".7rem",paddingLeft:".3rem",paddingRight:".2rem"}})]})]})]})]})})]}),`
`,e.jsx(n.h2,{id:"anatomy",children:"Anatomy"}),`
`,e.jsx(n.p,{children:e.jsx(n.img,{src:"components/code/anatomy.png",alt:"Component anatomy",title:"Component anatomy"})}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:["A container with the whole ",e.jsx(n.strong,{children:"Code"})," content that will be copied to the clipboard"]}),`
`,e.jsxs(n.li,{children:["A 'copy' icon ",e.jsx(n.strong,{children:"Button"})," to complete the copy action when clicked"]}),`
`]}),`
`,e.jsx(n.h2,{id:"usage",children:"Usage"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Code"})," is mainly used for sharing examples of ",e.jsx(n.strong,{children:"Code"})," that can be a string or a small block of ",e.jsx(n.strong,{children:"Code"}),"."]}),`
`,e.jsxs(n.p,{children:["An optional icon ",e.jsx(n.strong,{children:"Button"})," may be added in order to copy its content."]}),`
`,e.jsx(n.h3,{id:"dos--donts",children:"Dos & Don'ts"}),`
`,e.jsx(i,{children:`
| ✅ Do                                                                                                                                                                           |
|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| - Align **Code** container to the grid                                                                                                                                         |
| - Use **Code** for useful and reusable small portion of code                                                                                                                   |
`}),`
`,e.jsx(i,{children:`
| ❌ Don't                                                                                                                                                                          |
|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| - Align **Code** text to the grid and hang its container                                                                                                                         |
| - Use **Code** just to display some simple [**Text**](?path=/docs/ods-components-text--documentation)                                                                     |
| - Use **Code** with very long portion of code                                                                                                                                    |
`}),`
`,e.jsx(n.h2,{id:"placement",children:"Placement"}),`
`,e.jsxs(n.p,{children:["By default, the ",e.jsx(n.strong,{children:"Code"})," content is left-aligned in its container."]}),`
`,e.jsx(n.p,{children:"It should be vertically aligned with other form components on a same page."}),`
`,e.jsx(n.h2,{id:"behavior",children:"Behavior"}),`
`,e.jsxs(n.p,{children:['The "Copy" icon ',e.jsx(n.strong,{children:"Button"})," can be hovered, focused and clicked."]}),`
`,e.jsxs(n.p,{children:["If the optional icon ",e.jsx(n.strong,{children:"Button"})," exists, when clicking on it, the ",e.jsx(n.strong,{children:"Code"})," content is copied to the user's clipboard."]}),`
`,e.jsxs(n.p,{children:["An event is triggered when ",e.jsx(n.strong,{children:"Code"})," content is copied."]}),`
`,e.jsx(n.h2,{id:"variation",children:"Variation"}),`
`,e.jsx(n.p,{children:"N/A"}),`
`,e.jsx(n.h2,{id:"accessibility",children:"Accessibility"}),`
`,e.jsxs(n.p,{children:['When focusing on the "Copy" icon ',e.jsx(n.a,{href:"?path=/docs/ods-components-button--documentation",children:e.jsx(n.strong,{children:"Button"})}),", the component can be triggered with ",e.jsx(n.code,{children:"Space"})," or ",e.jsx(n.code,{children:"Enter"})," keys."]})]})}function M(o={}){const{wrapper:n}={...c(),...o.components};return n?e.jsx(n,{...o,children:e.jsx(d,{...o})}):d(o)}export{M as default};
