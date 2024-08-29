import{j as e}from"./jsx-runtime-3v6rTKkY.js";import{u as a}from"./index-B5y3xRNA.js";import{M as c,C as l,d as i}from"./index-sugWq352.js";import{B as h}from"./banner-BU_1gqe2.js";import{R as r,O as m}from"./radio.stories-XGf9Qwlr.js";import{O as s}from"./index-BjLrujv2.js";import{O as t}from"./index-DB8q6ij-.js";import"./iframe-D98u-D7f.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-B_J8iUie.js";import"./index-DX_4BEHg.js";import"./index-DrFu-skq.js";import"./lit-html-D-ZEPr28.js";import"./control-C1r2wu67.js";import"./ods-toggle2-Du4-LCNk.js";import"./ods-icon-MrkrUMg1.js";function d(o){const n={a:"a",code:"code",em:"em",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...a(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(c,{of:r,name:"Documentation"}),`
`,e.jsx(h,{of:r}),`
`,e.jsx(n.p,{children:e.jsxs(n.em,{children:["A ",e.jsx(n.strong,{children:"Radio"})," button allows users to select only one option from a number of choices."]})}),`
`,e.jsx(l,{of:m,sourceState:"none"}),`
`,e.jsx(n.h2,{id:"overview",children:"Overview"}),`
`,e.jsxs("div",{children:[e.jsxs("div",{id:"description",children:[e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Radio"})," buttons are used to set a true/false option in a set of minimum two options."]}),e.jsxs(n.p,{children:["They are generally displayed in a ",e.jsx(n.strong,{children:"Radio"})," group."]})]}),e.jsx("table",{children:e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("th",{scope:"row",children:"Name"}),e.jsx("td",{children:e.jsx("strong",{children:"Radio"})})]}),e.jsxs("tr",{children:[e.jsx("th",{scope:"row",children:"Also known as"}),e.jsx("td",{children:e.jsx("em",{children:"Radio button (previous name)"})})]}),e.jsxs("tr",{children:[e.jsx("th",{scope:"row",children:"Atomic type"}),e.jsx("td",{children:e.jsxs("a",{href:"https://atomicdesign.bradfrost.com/chapter-2/#atoms",children:["Atom",e.jsx(s,{name:t.externalLink,style:{fontSize:".7rem",paddingLeft:".3rem",paddingRight:".2rem"}})]})})]}),e.jsxs("tr",{children:[e.jsx("th",{scope:"row",children:"Related component(s)"}),e.jsx("td",{children:e.jsxs(n.p,{children:[e.jsx(n.a,{href:"?path=/docs/ods-components-text--documentation",children:e.jsx(n.strong,{children:"Text"})}),", ",e.jsx(n.a,{href:"?path=/docs/ods-components-form-elements-form-field--documentation",children:e.jsx(n.strong,{children:`Form
Field`})})]})})]}),e.jsxs("tr",{children:[e.jsx("th",{scope:"row",children:"Links"}),e.jsxs("td",{children:[e.jsxs("a",{href:"https://www.figma.com/proto/tIKzHa5KvHHyosgIgyBswB/Design-Tokens",children:["Design",e.jsx(s,{name:t.externalLink,style:{fontSize:".7rem",paddingLeft:".3rem",paddingRight:".2rem"}})]}),e.jsx("br",{}),e.jsxs("a",{href:"https://github.com/ovh/design-system/tree/master/packages/components/src/radio",children:["Github",e.jsx(s,{name:t.externalLink,style:{fontSize:".7rem",paddingLeft:".3rem",paddingRight:".2rem"}})]})]})]})]})})]}),`
`,e.jsx(n.h2,{id:"anatomy",children:"Anatomy"}),`
`,e.jsx(n.p,{children:e.jsx(n.img,{src:"components/radio/anatomy.png",alt:"Component anatomy",title:"Component anatomy"})}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Radio"})," : The selection control"]}),`
`]}),`
`,e.jsx(n.h2,{id:"usage",children:"Usage"}),`
`,e.jsxs(n.p,{children:["In most situations where you want to present a list of mutually exclusive options, ",e.jsx(n.strong,{children:"you will want to group Radio buttons"}),"."]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Radio"})," groups can be used within a form."]}),`
`,e.jsx(n.p,{children:"Also, it can serve as :"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Selecting choice"}),`
`,e.jsx(n.li,{children:"Lists/sub-lists"}),`
`,e.jsx(n.li,{children:"Filters"}),`
`]}),`
`,e.jsx(n.h3,{id:"dos--donts",children:"Dos & Don'ts"}),`
`,e.jsx(i,{children:`
| ✅ Do                                                                                                                                                                                   |
|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------         |
| - Always use clear and concise labels for **Radio** buttons.                                                                                                                           |
| - Long labels may wrap to a second line, and this is preferable to truncation.                                                                                                         |
| - If using two affirmative/negative-type **Radio** buttons, you might consider converting it to a sole [**Checkbox**](?path=/docs/ods-components-form-elements-checkbox--documentation) button. |
`}),`
`,e.jsx(i,{children:`
| ❌ Don't                                                                                                                                                                          |
|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| - Use **Radio** buttons when multiple items can be selected, use [**Checkbox**](?path=/docs/ods-components-form-elements-checkbox--documentation) buttons instead.                        |
| - Use more than 5 **Radio** buttons, instead convert it to a [**Select**](?path=/docs/ods-components-form-elements-select--documentation).                                                |
| - Avoid situations where all options in a set should be deselected.                                                                                                              |
`}),`
`,e.jsx(n.h2,{id:"placement",children:"Placement"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Radio"})," groups can be either horizontal or vertical."]}),`
`,e.jsxs(n.p,{children:["By default, ",e.jsx(n.strong,{children:"Radio"})," groups are vertical, meaning one under another."]}),`
`,e.jsxs(n.p,{children:["Usage of horizontal ",e.jsx(n.strong,{children:"Radio"})," groups should only occur if vertical space is limited."]}),`
`,e.jsx(n.h2,{id:"behavior",children:"Behavior"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Radio"})," button can be hovered, focused, clicked or disabled. When disabled, ",e.jsx(n.strong,{children:"Radio"})," button cannot be focused nor clicked."]}),`
`,e.jsxs(n.p,{children:["When clicking on one of the ",e.jsx(n.strong,{children:"Radio"})," button or its linked label, the ",e.jsx(n.strong,{children:"Radio"})," button is selected or deselected depending on the previous state."]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Radio"})," button behavior does work only when used in a situation of a ",e.jsx(n.strong,{children:"Radio"}),` group.
The `,e.jsx(n.strong,{children:"Radio"})," group can be in an error state, but also in a disabled state. It also can be focused and hovered."]}),`
`,e.jsx(n.h2,{id:"variation",children:"Variation"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Radio"})," buttons follow the native behavior of the browser used, so the appearance of ",e.jsx(n.strong,{children:"Radio"})," buttons may vary depending on the browser."]}),`
`,e.jsx(n.h2,{id:"accessibility",children:"Accessibility"}),`
`,e.jsxs(n.p,{children:["Using ",e.jsx(n.code,{children:"Enter"})," or ",e.jsx(n.code,{children:"Space"})," keys while focusing allows to check the ",e.jsx(n.strong,{children:"Radio"})," button."]})]})}function M(o={}){const{wrapper:n}={...a(),...o.components};return n?e.jsx(n,{...o,children:e.jsx(d,{...o})}):d(o)}export{M as default};
