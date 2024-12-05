import{j as e}from"./jsx-runtime-Cz3huCOb.js";import{u as l}from"./index-BRdWgBGF.js";import{M as a,C as c}from"./index-C7ZQW9Xo.js";import{P as i,O as p}from"./popover.stories-BRgSJ8G8.js";import{B as d}from"./Banner-4suhesey.js";import{I as m,A as h,B as x}from"./IdentityCard-BtdKCWJ5.js";import{H as t}from"./Heading-BWgLZzFp.js";import{S as o}from"./StorybookLink-CbljYtBK.js";import"./iframe-O-MMI8BM.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-B_J8iUie.js";import"./index-DX_4BEHg.js";import"./index-DrFu-skq.js";import"./index-D19O3a7h.js";import"./lit-html-D-ZEPr28.js";import"./unsafe-html-HR6uCwaW.js";import"./controls-D697y8_r.js";import"./index-BYszAjkJ.js";function r(s){const n={code:"code",em:"em",img:"img",li:"li",ol:"ol",p:"p",span:"span",strong:"strong",ul:"ul",...l(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{of:i,name:"Documentation"}),`
`,e.jsx(d,{of:i}),`
`,e.jsx(n.p,{children:e.jsxs(n.em,{children:[e.jsx(n.strong,{children:"Popover"})," component is triggered by click and is used to provide additional information to the user in a new temporary surface that overlays the page"]})}),`
`,e.jsx(c,{of:p,sourceState:"none"}),`
`,e.jsx(t,{label:"Overview",level:2}),`
`,e.jsxs(m,{aliases:["Complex Tooltip"],atomicType:h.atom,figmaLink:"https://www.figma.com/design/9jDDTcR4a9jPRFcdjawAlf/ODS---UI-Kit?node-id=49-8447",githubUrl:"https://github.com/ovh/design-system/tree/master/packages/ods/src/components/popover",name:"Popover",relatedComponents:[{name:"Button"},{name:"Text"}],children:[e.jsxs(n.p,{children:["A ",e.jsx(n.strong,{children:"Popover"})," will provide additional information to the user in a clear and concise way."]}),e.jsxs(n.p,{children:["It is commonly used to appear by click, thus crucial information should not be displayed in the ",e.jsx(n.strong,{children:"Popover"}),"."]})]}),`
`,e.jsx(t,{label:"Anatomy",level:2}),`
`,e.jsx(n.p,{children:e.jsx(n.img,{src:"components/popover/anatomy.png",alt:"Component anatomy",title:"Component anatomy"})}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Container"}),": main container that has all content (i.e ",e.jsx(o,{kind:"ODS Components/Text",label:"Text",story:"Documentation"}),", ",e.jsx(o,{kind:"ODS Components/Button",label:"Button",story:"Documentation"}),", etc.)"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Arrow tip"})," (optional)"]}),`
`]}),`
`,e.jsx(t,{label:"Usage",level:2}),`
`,e.jsxs(n.p,{children:["A ",e.jsx(n.strong,{children:"Popover"})," is used to provide an explanation for a user interface element."]}),`
`,e.jsxs(n.p,{children:["It can include interactive elements such as ",e.jsx(o,{kind:"ODS Components/Button",label:"Button",story:"Documentation"})," or ",e.jsx(o,{kind:"ODS Components/Link",label:"Link",story:"Documentation"}),"."]}),`
`,e.jsx(t,{label:"Tooltip vs Popover",level:3}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Both components look similar but a ",e.jsx(o,{kind:"ODS Components/Tooltip",label:"Tooltip",story:"Documentation"})," is displayed on hover and focus while a ",e.jsx(n.strong,{children:"Popover"})," is triggered by click."]}),`
`,e.jsxs(n.li,{children:[e.jsx(o,{kind:"ODS Components/Tooltip",label:"Tooltip",story:"Documentation"})," are commonly used for shorter explanations, while longer ",e.jsx(o,{kind:"ODS Components/Text",label:"Text",story:"Documentation"})," / complex UIs would suit ",e.jsx(n.strong,{children:"Popovers"})," better."]}),`
`,e.jsxs(n.li,{children:["Use a ",e.jsx(n.strong,{children:"Popover"})," when you need to insert interactive elements such as ",e.jsx(o,{kind:"ODS Components/Button",label:"Button",story:"Documentation"}),"."]}),`
`,e.jsxs(n.li,{children:["A ",e.jsx(n.strong,{children:"Popover"})," can be dismissed if an action ",e.jsx(o,{kind:"ODS Components/Button",label:"Button",story:"Documentation"})," allows it."]}),`
`]}),`
`,e.jsx(t,{label:"Dos & Don'ts",level:3}),`
`,e.jsx(x,{donts:["- Write very important information within a Popover since it is only displayed by click so the user might miss its crucial content","- Insert rich information such as image in a Popover","- Overlap the Popover's trigger element with the Popover itself when it has been triggered"],dos:[e.jsxs(n.span,{children:["- Use a Popover instead of a ",e.jsx(o,{kind:"ODS Components/Tooltip",label:"Tooltip",story:"Documentation"})," when the ",e.jsx(o,{kind:"ODS Components/Text",label:"Text",story:"Documentation"})," is long; but keep it concise"]}),e.jsxs(n.span,{children:["- Write Popover's ",e.jsx(o,{kind:"ODS Components/Text",label:"Text",story:"Documentation"})," as full sentences with punctuation"]})]}),`
`,e.jsx(t,{label:"Placement",level:2}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Popover"})," can be set in a certain position by default around its trigger."]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Popover"})," has automatic positioning feature. It can detect the edge of the browser so the container always stays visible on a page."]}),`
`,e.jsx(t,{label:"Behavior",level:2}),`
`,e.jsxs(n.p,{children:["By default, a ",e.jsx(n.strong,{children:"Popover"})," is hidden to the user."]}),`
`,e.jsxs(n.p,{children:["It triggers when the user clicks on the ",e.jsx(n.strong,{children:"Popover"}),"'s trigger element such as a ",e.jsx(o,{kind:"ODS Components/Button",label:"Button",story:"Documentation"}),"."]}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.strong,{children:"Popover"})," can be closed or dismissed by clicking anywhere on the page outside the ",e.jsx(n.strong,{children:"Popover"}),"'s container."]}),`
`,e.jsx(t,{label:"Variation",level:2}),`
`,e.jsx(n.p,{children:"N/A"}),`
`,e.jsx(t,{label:"Accessibility",level:2}),`
`,e.jsxs(n.p,{children:["When visible, ",e.jsx(n.strong,{children:"Popover"})," gains the user's focus."]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"Escape"})," closes the currently opened ",e.jsx(n.strong,{children:"Popover"})]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"Tab"})," allows to focus in inner ",e.jsx(n.strong,{children:"Popover"})," content"]}),`
`]})]})}function U(s={}){const{wrapper:n}={...l(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(r,{...s})}):r(s)}export{U as default};
