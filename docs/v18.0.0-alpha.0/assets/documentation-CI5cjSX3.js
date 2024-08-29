import{j as e}from"./jsx-runtime-3v6rTKkY.js";import{u as d}from"./index-B5y3xRNA.js";import{M as c,d as r}from"./index-sugWq352.js";import{B as h}from"./banner-BU_1gqe2.js";import{D as o}from"./divider.stories-DYH20IPp.js";import{O as s}from"./index-BjLrujv2.js";import{O as t}from"./index-DB8q6ij-.js";import"./iframe-D98u-D7f.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-B_J8iUie.js";import"./index-DX_4BEHg.js";import"./index-DrFu-skq.js";import"./control-C1r2wu67.js";import"./lit-html-D-ZEPr28.js";import"./ods-toggle2-Du4-LCNk.js";import"./ods-icon-MrkrUMg1.js";function a(i){const n={code:"code",em:"em",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",...d(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(c,{of:o,name:"Documentation"}),`
`,e.jsx(h,{of:o}),`
`,e.jsx(n.p,{children:e.jsxs(n.em,{children:["A ",e.jsx(n.strong,{children:"Divider"})," component is a spacer used to add white space between two elements on a page."]})}),`
`,e.jsx(n.h2,{id:"overview",children:"Overview"}),`
`,e.jsxs("div",{children:[e.jsx("div",{id:"description",children:e.jsxs(n.p,{children:["A ",e.jsx(n.strong,{children:"Divider"}),` is a UI component used to separate content into clear, distinct sections, providing visual breaks
between different elements or groups of content.`]})}),e.jsx("table",{children:e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("th",{scope:"row",children:"Name"}),e.jsx("td",{children:e.jsx("strong",{children:"Divider"})})]}),e.jsxs("tr",{children:[e.jsx("th",{scope:"row",children:"Also known as"}),e.jsx("td",{children:e.jsx("em",{children:"Separator, Spacer, Horizontal Line"})})]}),e.jsxs("tr",{children:[e.jsx("th",{scope:"row",children:"Atomic type"}),e.jsx("td",{children:e.jsxs("a",{href:"https://bradfrost.com/blog/post/extending-atomic-design/",children:["Quark",e.jsx(s,{name:t.externalLink,style:{fontSize:".7rem",paddingLeft:".3rem",paddingRight:".2rem"}})]})})]}),e.jsxs("tr",{children:[e.jsx("th",{scope:"row",children:"Related component(s)"}),e.jsx("td",{children:"-"})]}),e.jsxs("tr",{children:[e.jsx("th",{scope:"row",children:"Links"}),e.jsxs("td",{children:[e.jsxs("a",{href:"https://www.figma.com/proto/tIKzHa5KvHHyosgIgyBswB/Design-Tokens",children:["Design",e.jsx(s,{name:t.externalLink,style:{fontSize:".7rem",paddingLeft:".3rem",paddingRight:".2rem"}})]}),e.jsx("br",{}),e.jsxs("a",{href:"https://github.com/ovh/design-system/tree/master/packages/components/src/divider",children:["Github",e.jsx(s,{name:t.externalLink,style:{fontSize:".7rem",paddingLeft:".3rem",paddingRight:".2rem"}})]})]})]})]})})]}),`
`,e.jsx(n.h2,{id:"anatomy",children:"Anatomy"}),`
`,e.jsx(n.p,{children:e.jsx(n.img,{src:"components/divider/anatomy.png",alt:"Component anatomy",title:"Component anatomy"})}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsx(n.li,{children:"A white space"}),`
`,e.jsx(n.li,{children:"A styled, horizontal line separator"}),`
`,e.jsx(n.li,{children:"A second white space, with equal size to the first one"}),`
`]}),`
`,e.jsx(n.h2,{id:"usage",children:"Usage"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Divider"})," is used to separate content on a page."]}),`
`,e.jsx(n.p,{children:"It brings clarity to a layout by dividing content in proximity."}),`
`,e.jsx(n.h3,{id:"dos--donts",children:"Dos & Don'ts"}),`
`,e.jsx(r,{children:`
| ✅ Do                                                                                                                                                                           |
|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| - Use **Divider** to separate two elements.                                                                                                                                    |
| - Use a **Divider** as a substitute for styled semantic sectioning HTML (for example borders).                                                                           |
| - A **Divider** with a line separator might be used below a header / a section title.                                                                                          |
`}),`
`,e.jsx(r,{children:`
| ❌ Don't                                                                                                                                                                          |
|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| - Use a **Divider** with a line separator above a header / a section title.                                                                                                |
| - Use **Divider** sparingly on a page.                                                                                                                                           |
| - Overuse **Divider** on a page, so it won't create unnecessary noise.                                                                                                     |
`}),`
`,e.jsx(n.h2,{id:"placement",children:"Placement"}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.strong,{children:"Divider"})," has to be used to create a separation between two elements and to separate the contents of a page."]}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.strong,{children:"Divider"})," can also be used inside components to create separation between a set of sections."]}),`
`,e.jsx(n.h2,{id:"behavior",children:"Behavior"}),`
`,e.jsx(n.p,{children:"N/A"}),`
`,e.jsx(n.h2,{id:"variation",children:"Variation"}),`
`,e.jsxs(n.p,{children:[`The horizontal line separator has a fixed height of 1 pixel.
`,e.jsx(n.code,{children:"Space"})," around ",e.jsx(n.strong,{children:"Divider"}),' can be defined in a referential from "0" to "10", depending on the spacing required between two elements.']}),`
`,e.jsx(n.h2,{id:"accessibility",children:"Accessibility"}),`
`,e.jsx(n.p,{children:"N/A"})]})}function z(i={}){const{wrapper:n}={...d(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(a,{...i})}):a(i)}export{z as default};
