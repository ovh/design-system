import{j as e}from"./jsx-runtime-Dn0LW--f.js";import{u as r}from"./index-DeyDdHvX.js";import{M as a,C as c,d as t}from"./index-BM3JsZOq.js";import{B as l}from"./banner-DPlTyHjv.js";import{C as o,O as d}from"./checkbox.stories-JJU8RDmj.js";import{I as h,A as m}from"./identity-card-CwN41yUF.js";import"./iframe-6_jBXMSq.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-B_J8iUie.js";import"./index-DX_4BEHg.js";import"./index-DrFu-skq.js";import"./lit-html-D-ZEPr28.js";import"./control-C1r2wu67.js";import"./index-DryTTbHl.js";import"./ods-toggle2-LnXcgd5r.js";import"./chunk-FAE4I7JY-v0Th3BC0.js";function i(s){const n={a:"a",code:"code",em:"em",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...r(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{of:o,name:"Documentation"}),`
`,e.jsx(l,{of:o}),`
`,e.jsx(n.p,{children:e.jsxs(n.em,{children:[e.jsx(n.strong,{children:"Checkbox"})," are used for a list of options where the user may make a choice by selecting multiple options, including all or none."]})}),`
`,e.jsx(c,{of:d,sourceState:"none"}),`
`,e.jsx(n.h2,{id:"overview",children:"Overview"}),`
`,e.jsxs("div",{className:"documentation-overview",children:[e.jsx("div",{children:e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Checkbox"}),` are used to make a choice that must be confirmed by submitting a form. For an instantaneous choice
(without submit), the use of a switch is preferred (see Switch).`]})}),e.jsx(h,{aliases:["Checkbox Button (previous name)","Check Box","Tick Box"],atomicType:m.atom,className:"documentation-overview__table",figmaLink:"https://www.figma.com/design/9jDDTcR4a9jPRFcdjawAlf/ODS---UI-Kit?node-id=3-28514",githubUrl:"https://github.com/ovh/design-system/tree/master/packages/ods/src/components/checkbox",name:"Checkbox",relatedComponents:[{name:"Text"}]})]}),`
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
`,e.jsx(t,{className:"documentation-do-table",children:`
| ✅ Do                                                                                                                                                                           |
|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| - Always use clear and concise labels for **Checkbox**                                                                                                                         |
| - Long labels may wrap to a second line, and this is preferable to truncation.                                                                                                 |
`}),`
`,e.jsx(t,{className:"documentation-dont-table",children:`
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
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Checkbox"})," can be focus through tabulation, and toggled using ",e.jsx(n.code,{children:"Space"})," and ",e.jsx(n.code,{children:"Enter"})," keys."]})]})}function S(s={}){const{wrapper:n}={...r(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(i,{...s})}):i(s)}export{S as default};
