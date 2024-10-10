import{j as e}from"./jsx-runtime-vK1CujOl.js";import{u as a}from"./index-CB7mz5IJ.js";import{M as l,C as d}from"./index-Bd2Jnm8T.js";import{R as i,O as c}from"./radio.stories-CelMQRWE.js";import{B as h}from"./Banner-D69sr9PT.js";import{I as m,A as p,B as u}from"./IdentityCard-DJgK2WbX.js";import{H as o}from"./Heading-oJ6nNH90.js";import{S as t}from"./StorybookLink-D-3rjE8q.js";import"./iframe-Lgv0C8F1.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-B_J8iUie.js";import"./index-DX_4BEHg.js";import"./index-DrFu-skq.js";import"./lit-html-D-ZEPr28.js";import"./controls-DpsgTNdU.js";import"./index-BNPjhb5w.js";import"./index-CONup0N6.js";function r(s){const n={code:"code",em:"em",img:"img",li:"li",ol:"ol",p:"p",span:"span",strong:"strong",ul:"ul",...a(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{of:i,name:"Documentation"}),`
`,e.jsx(h,{of:i}),`
`,e.jsx(n.p,{children:e.jsxs(n.em,{children:["A ",e.jsx(n.strong,{children:"Radio"})," button allows users to select only one option from a number of choices."]})}),`
`,e.jsx(d,{of:c,sourceState:"none"}),`
`,e.jsx(o,{label:"Overview",level:2}),`
`,e.jsxs(m,{aliases:["Radio button (previous name)"],atomicType:p.atom,figmaLink:"https://www.figma.com/design/9jDDTcR4a9jPRFcdjawAlf/ODS---UI-Kit?node-id=49-14625",githubUrl:"https://github.com/ovh/design-system/tree/master/packages/ods/src/components/radio",name:"Radio",relatedComponents:[{name:"Form Field",subtitle:"Form elements"},{name:"Text"}],children:[e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Radio"})," buttons are used to set a true/false option in a set of minimum two options."]}),e.jsxs(n.p,{children:["They are generally displayed in a ",e.jsx(n.strong,{children:"Radio"})," group."]})]}),`
`,e.jsx(o,{label:"Anatomy",level:2}),`
`,e.jsx(n.p,{children:e.jsx(n.img,{src:"components/radio/anatomy.png",alt:"Component anatomy",title:"Component anatomy"})}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Radio"})," : The selection control"]}),`
`]}),`
`,e.jsx(o,{label:"Usage",level:2}),`
`,e.jsxs(n.p,{children:["In most situations where you want to present a list of mutually exclusive options, ",e.jsx(n.strong,{children:"you will want to group Radio buttons"}),"."]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Radio"})," groups can be used within a form."]}),`
`,e.jsx(n.p,{children:"Also, it can serve as :"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Selecting choice"}),`
`,e.jsx(n.li,{children:"Lists/sub-lists"}),`
`,e.jsx(n.li,{children:"Filters"}),`
`]}),`
`,e.jsx(o,{label:"Dos & Don'ts",level:3}),`
`,e.jsx(u,{donts:[e.jsxs(n.span,{children:["- Use Radio buttons when multiple items can be selected, use ",e.jsx(t,{kind:"ODS Components/Form elements/Checkbox",label:"Checkbox",story:"Documentation"})," buttons instead"]}),e.jsxs(n.span,{children:["- Use more than 5 Radio buttons, instead convert it to a ",e.jsx(t,{kind:"ODS Components/Form elements/Select",label:"Select",story:"Documentation"})]}),"- Avoid situations where all options in a set should be deselected"],dos:["- Always use clear and concise labels for Radio buttons","- Long labels may wrap to a second line, and this is preferable to truncation",e.jsxs(n.span,{children:["- If using two affirmative/negative-type Radio buttons, you might consider converting it to a sole ",e.jsx(t,{kind:"ODS Components/Form elements/Checkbox",label:"Checkbox",story:"Documentation"})," button"]})]}),`
`,e.jsx(o,{label:"Placement",level:2}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Radio"})," groups can be either horizontal or vertical."]}),`
`,e.jsxs(n.p,{children:["By default, ",e.jsx(n.strong,{children:"Radio"})," groups are vertical, meaning one under another."]}),`
`,e.jsxs(n.p,{children:["Usage of horizontal ",e.jsx(n.strong,{children:"Radio"})," groups should only occur if vertical space is limited."]}),`
`,e.jsx(o,{label:"Behavior",level:2}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Radio"})," button can be hovered, focused, clicked or disabled. When disabled, ",e.jsx(n.strong,{children:"Radio"})," button cannot be focused nor clicked."]}),`
`,e.jsxs(n.p,{children:["When clicking on one of the ",e.jsx(n.strong,{children:"Radio"})," button or its linked label, the ",e.jsx(n.strong,{children:"Radio"})," button is selected or deselected depending on the previous state."]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Radio"})," button behavior does work only when used in a situation of a ",e.jsx(n.strong,{children:"Radio"}),` group.
The `,e.jsx(n.strong,{children:"Radio"})," group can be in an error state, but also in a disabled state. It also can be focused and hovered."]}),`
`,e.jsx(o,{label:"Variation",level:2}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Radio"})," buttons follow the native behavior of the browser used, so the appearance of ",e.jsx(n.strong,{children:"Radio"})," buttons may vary depending on the browser."]}),`
`,e.jsx(o,{label:"Accessibility",level:2}),`
`,e.jsxs(n.p,{children:["Using ",e.jsx(n.code,{children:"Enter"})," or ",e.jsx(n.code,{children:"Space"})," keys while focusing allows to check the ",e.jsx(n.strong,{children:"Radio"})," button."]})]})}function M(s={}){const{wrapper:n}={...a(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(r,{...s})}):r(s)}export{M as default};
