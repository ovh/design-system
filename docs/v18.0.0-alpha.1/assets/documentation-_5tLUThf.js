import{j as e}from"./jsx-runtime-C_5uCoOk.js";import{u as d}from"./index-BNSrq6w-.js";import{M as a,C as h,d as o}from"./index-DnV51lgW.js";import{B as l}from"./banner-CAPzkNgn.js";import{C as r,O as x}from"./checkbox.stories-JJU8RDmj.js";import{O as t}from"./index-BUOQImqF.js";import{O as i}from"./index-CEZbmgmh.js";import"./iframe-Cm7AUSBL.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-B_J8iUie.js";import"./index-DX_4BEHg.js";import"./index-DrFu-skq.js";import"./lit-html-D-ZEPr28.js";import"./control-C1r2wu67.js";import"./ods-toggle2-CgWFvVwm.js";function c(s){const n={a:"a",code:"code",em:"em",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...d(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{of:r,name:"Documentation"}),`
`,e.jsx(l,{of:r}),`
`,e.jsx(n.p,{children:e.jsxs(n.em,{children:[e.jsx(n.strong,{children:"Checkbox"})," are used for a list of options where the user may make a choice by selecting multiple options, including all or none."]})}),`
`,e.jsx(h,{of:x,sourceState:"none"}),`
`,e.jsx(n.h2,{id:"overview",children:"Overview"}),`
`,e.jsxs("div",{children:[e.jsx("div",{id:"description",children:e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Checkbox"}),` are used to make a choice that must be confirmed by submitting a form. For an instantaneous choice
(without submit), the use of a switch is preferred (see Switch).`]})}),e.jsx("table",{children:e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("th",{scope:"row",children:"Name"}),e.jsx("td",{children:e.jsx("strong",{children:"Checkbox"})})]}),e.jsxs("tr",{children:[e.jsx("th",{scope:"row",children:"Also known as"}),e.jsx("td",{children:e.jsx("em",{children:"Checkbox Button (previous name), Check Box, Tick Box"})})]}),e.jsxs("tr",{children:[e.jsx("th",{scope:"row",children:"Atomic type"}),e.jsx("td",{children:e.jsxs("a",{href:"https://atomicdesign.bradfrost.com/chapter-2/#atoms",children:["Atom",e.jsx(t,{name:i.externalLink,style:{fontSize:".7rem",paddingLeft:".3rem",paddingRight:".2rem"}})]})})]}),e.jsxs("tr",{children:[e.jsx("th",{scope:"row",children:"Related component(s)"}),e.jsx("td",{children:e.jsx(n.p,{children:e.jsx(n.a,{href:"?path=/docs/ods-components-text--documentation",children:e.jsx(n.strong,{children:"Text"})})})})]}),e.jsxs("tr",{children:[e.jsx("th",{scope:"row",children:"Links"}),e.jsxs("td",{children:[e.jsxs("a",{href:"https://www.figma.com/proto/tIKzHa5KvHHyosgIgyBswB/Design-Tokens",children:["Design",e.jsx(t,{name:i.externalLink,style:{fontSize:".7rem",paddingLeft:".3rem",paddingRight:".2rem"}})]}),e.jsx("br",{}),e.jsxs("a",{href:"https://github.com/ovh/design-system/tree/master/packages/components/src/checkbox",children:["Github",e.jsx(t,{name:i.externalLink,style:{fontSize:".7rem",paddingLeft:".3rem",paddingRight:".2rem"}})]})]})]})]})})]}),`
`,e.jsx(n.h2,{id:"anatomy",children:"Anatomy"}),`
`,e.jsx(n.p,{children:e.jsx(n.img,{src:"components/checkbox/anatomy.png",alt:"Component anatomy",title:"Component anatomy"})}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Checkbox"})," - The selection control."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Text"})," - Use this ",e.jsx(n.a,{href:"?path=/docs/ods-components-text--documentation",children:e.jsx(n.strong,{children:"Text"})})," label to describe what the ",e.jsx(n.a,{href:"?path=/docs/ods-components-form-elements-radio--documentation",children:e.jsx(n.strong,{children:"Radio"})})," is for."]}),`
`]}),`
`,e.jsx(n.h2,{id:"usage",children:"Usage"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Checkbox"})," can be used in forms and containers."]}),`
`,e.jsx(n.p,{children:"Also, it can serve as :"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Selecting/deselecting item(s)"}),`
`,e.jsx(n.li,{children:"Lists/sub-lists"}),`
`,e.jsx(n.li,{children:"Filters"}),`
`,e.jsx(n.li,{children:"Agreement to terms and conditions"}),`
`]}),`
`,e.jsxs(n.p,{children:["A ",e.jsx(n.strong,{children:"Checkbox"})," group is used for a list of options where the user may make a choice by selecting multiple options, including all or none."]}),`
`,e.jsx(n.h3,{id:"dos--donts",children:"Dos & Don'ts"}),`
`,e.jsx(o,{children:`
| ✅ Do                                                                                                                                                                           |
|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| - Always use clear and concise labels for **Checkbox**                                                                                                                         |
| - Long labels may wrap to a second line, and this is preferable to truncation.                                                                                                 |
`}),`
`,e.jsx(o,{children:`
| ❌ Don't                                                                                                                                                                          |
|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| - Avoid using **Checkbox** if only one item in list can be selected, prefer using [**Radio**](?path=/docs/ods-components-form-elements-radio--documentation) instead                      |
| - Truncate **Checkbox** label **Text** with an ellipsis.                                                                                                                         |
`}),`
`,e.jsx(n.h2,{id:"placement",children:"Placement"}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.strong,{children:"Checkbox"})," can be autonomous, as it can be labelled in a starting/ending ",e.jsx(n.a,{href:"?path=/docs/ods-components-text--documentation",children:e.jsx(n.strong,{children:"Text"})}),"."]}),`
`,e.jsx(n.p,{children:"It can be inserted in containers or next to an external item."}),`
`,e.jsx(n.h2,{id:"behavior",children:"Behavior"}),`
`,e.jsxs(n.p,{children:["The default behavior is that when clicking on the ",e.jsx(n.strong,{children:"Checkbox"})," or its linked label, the ",e.jsx(n.strong,{children:"Checkbox"})," is alternatively selected or deselected depending on the previous state."]}),`
`,e.jsxs(n.p,{children:["The indeterminate state is used only when the ",e.jsx(n.strong,{children:"Checkbox"})," contains a sub-list of selections that are partially selected."]}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.strong,{children:"Checkbox"})," can be in an error state, but also in a disabled state."]}),`
`,e.jsx(n.h2,{id:"variation",children:"Variation"}),`
`,e.jsx(n.p,{children:"N/A"}),`
`,e.jsx(n.h2,{id:"accessibility",children:"Accessibility"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Checkbox"})," can be focus through tabulation, and toggled using ",e.jsx(n.code,{children:"Space"})," and ",e.jsx(n.code,{children:"Enter"})," keys."]})]})}function S(s={}){const{wrapper:n}={...d(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(c,{...s})}):c(s)}export{S as default};
