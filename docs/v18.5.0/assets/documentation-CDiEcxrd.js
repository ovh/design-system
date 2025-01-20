import{j as e,M as d,C as p}from"./index-aSJOi-xY.js";import{u as c}from"./index-D_oymSD0.js";import{P as l,O as h}from"./popover.stories-CG0sETQ0.js";import{B as m}from"./Banner-DfBQCKAd.js";import{I as x,A as j,B as u}from"./IdentityCard-bFWvbFx8.js";import{H as i}from"./Heading-fUBW5LMg.js";import{S as o,O as t,a as s}from"./StorybookLink-CdkDDCl2.js";import"./iframe-Cjn0x15a.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-D-8MO0q_.js";import"./index-DX_4BEHg.js";import"./index-DrFu-skq.js";import"./index-B1WyGMUD.js";import"./controls-DX883vx3.js";import"./unsafe-html-VJzuFJfF.js";import"./index-DduIf26o.js";function a(r){const n={code:"code",em:"em",img:"img",li:"li",ol:"ol",p:"p",span:"span",strong:"strong",ul:"ul",...c(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(d,{of:l,name:"Documentation"}),`
`,e.jsx(m,{of:l}),`
`,e.jsx(n.p,{children:e.jsxs(n.em,{children:[e.jsx(n.strong,{children:"Popover"})," component is triggered by click and is used to provide additional information to the user in a new temporary surface that overlays the page"]})}),`
`,e.jsx(p,{of:h,sourceState:"none"}),`
`,e.jsx(i,{label:"Overview",level:2}),`
`,e.jsxs(x,{aliases:["Complex Tooltip"],atomicType:j.atom,figmaLink:"https://www.figma.com/design/9jDDTcR4a9jPRFcdjawAlf/ODS---UI-Kit?node-id=49-8447",githubUrl:"https://github.com/ovh/design-system/tree/master/packages/ods/src/components/popover",name:"Popover",relatedComponents:[{name:"Button"},{name:"Text"}],children:[e.jsxs(n.p,{children:["A ",e.jsx(n.strong,{children:"Popover"})," will provide additional information to the user in a clear and concise way."]}),e.jsxs(n.p,{children:["It is commonly used to appear by click, thus crucial information should not be displayed in the ",e.jsx(n.strong,{children:"Popover"}),"."]})]}),`
`,e.jsx(i,{label:"Anatomy",level:2}),`
`,e.jsx(n.p,{children:e.jsx(n.img,{src:"components/popover/anatomy.png",alt:"Component anatomy",title:"Component anatomy"})}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Container"}),": main container that has all content (i.e ",e.jsx(o,{kind:t.text,label:"Text",story:s.documentation}),", ",e.jsx(o,{kind:t.button,label:"Button",story:s.documentation}),", etc.)"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Arrow tip"})," (optional)"]}),`
`]}),`
`,e.jsx(i,{label:"Usage",level:2}),`
`,e.jsxs(n.p,{children:["A ",e.jsx(n.strong,{children:"Popover"})," is used to provide an explanation for a user interface element."]}),`
`,e.jsxs(n.p,{children:["It can include interactive elements such as ",e.jsx(o,{kind:t.button,label:"Button",story:s.documentation})," or ",e.jsx(o,{kind:t.link,label:"Link",story:s.documentation}),"."]}),`
`,e.jsx(i,{label:"Tooltip vs Popover",level:3}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Both components look similar but a ",e.jsx(o,{kind:t.tooltip,label:"Tooltip",story:s.documentation})," is displayed on hover and focus while a ",e.jsx(n.strong,{children:"Popover"})," is triggered by click."]}),`
`,e.jsxs(n.li,{children:[e.jsx(o,{kind:t.tooltip,label:"Tooltip",story:s.documentation})," are commonly used for shorter explanations, while longer ",e.jsx(o,{kind:t.text,label:"Text",story:s.documentation})," / complex UIs would suit ",e.jsx(n.strong,{children:"Popovers"})," better."]}),`
`,e.jsxs(n.li,{children:["Use a ",e.jsx(n.strong,{children:"Popover"})," when you need to insert interactive elements such as ",e.jsx(o,{kind:t.button,label:"Button",story:s.documentation}),"."]}),`
`,e.jsxs(n.li,{children:["A ",e.jsx(n.strong,{children:"Popover"})," can be dismissed if an action ",e.jsx(o,{kind:t.button,label:"Button",story:s.documentation})," allows it."]}),`
`]}),`
`,e.jsx(i,{label:"Dos & Don'ts",level:3}),`
`,e.jsx(u,{donts:["- Write very important information within a Popover since it is only displayed by click so the user might miss its crucial content","- Insert rich information such as image in a Popover","- Overlap the Popover's trigger element with the Popover itself when it has been triggered"],dos:[e.jsxs(n.span,{children:["- Use a Popover instead of a ",e.jsx(o,{kind:t.tooltip,label:"Tooltip",story:s.documentation})," when the ",e.jsx(o,{kind:t.text,label:"Text",story:s.documentation})," is long; but keep it concise"]}),e.jsxs(n.span,{children:["- Write Popover's ",e.jsx(o,{kind:t.text,label:"Text",story:s.documentation})," as full sentences with punctuation"]})]}),`
`,e.jsx(i,{label:"Placement",level:2}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Popover"})," can be set in a certain position by default around its trigger."]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Popover"})," has automatic positioning feature. It can detect the edge of the browser so the container always stays visible on a page."]}),`
`,e.jsx(i,{label:"Behavior",level:2}),`
`,e.jsxs(n.p,{children:["By default, a ",e.jsx(n.strong,{children:"Popover"})," is hidden to the user."]}),`
`,e.jsxs(n.p,{children:["It triggers when the user clicks on the ",e.jsx(n.strong,{children:"Popover"}),"'s trigger element such as a ",e.jsx(o,{kind:t.button,label:"Button",story:s.documentation}),"."]}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.strong,{children:"Popover"})," can be closed or dismissed by clicking anywhere on the page outside the ",e.jsx(n.strong,{children:"Popover"}),"'s container."]}),`
`,e.jsx(i,{label:"Variation",level:2}),`
`,e.jsx(n.p,{children:"N/A"}),`
`,e.jsx(i,{label:"Accessibility",level:2}),`
`,e.jsxs(n.p,{children:["When visible, ",e.jsx(n.strong,{children:"Popover"})," gains the user's focus."]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"Escape"})," closes the currently opened ",e.jsx(n.strong,{children:"Popover"})]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"Tab"})," allows to focus in inner ",e.jsx(n.strong,{children:"Popover"})," content"]}),`
`]})]})}function U(r={}){const{wrapper:n}={...c(),...r.components};return n?e.jsx(n,{...r,children:e.jsx(a,{...r})}):a(r)}export{U as default};
