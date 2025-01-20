import{j as e,M as c,C as h}from"./index-aSJOi-xY.js";import{u as d}from"./index-D_oymSD0.js";import{R as r,O as m}from"./radio.stories-BvGOUvH4.js";import{B as u}from"./Banner-DfBQCKAd.js";import{I as p,A as x,B as j}from"./IdentityCard-bFWvbFx8.js";import{H as o}from"./Heading-fUBW5LMg.js";import{S as t,O as i,a}from"./StorybookLink-CdkDDCl2.js";import"./iframe-Cjn0x15a.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-D-8MO0q_.js";import"./index-DX_4BEHg.js";import"./index-DrFu-skq.js";import"./controls-DX883vx3.js";import"./validityState-BuENXwQ9.js";import"./index-B1WyGMUD.js";import"./index-DduIf26o.js";function l(s){const n={code:"code",em:"em",img:"img",li:"li",ol:"ol",p:"p",span:"span",strong:"strong",ul:"ul",...d(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(c,{of:r,name:"Documentation"}),`
`,e.jsx(u,{of:r}),`
`,e.jsx(n.p,{children:e.jsxs(n.em,{children:["A ",e.jsx(n.strong,{children:"Radio"})," button allows users to select only one option from a number of choices."]})}),`
`,e.jsx(h,{of:m,sourceState:"none"}),`
`,e.jsx(o,{label:"Overview",level:2}),`
`,e.jsxs(p,{aliases:["Radio button (previous name)"],atomicType:x.atom,figmaLink:"https://www.figma.com/design/9jDDTcR4a9jPRFcdjawAlf/ODS---UI-Kit?node-id=49-14625",githubUrl:"https://github.com/ovh/design-system/tree/master/packages/ods/src/components/radio",name:"Radio",relatedComponents:[{name:"Form Field",subtitle:"Form elements"},{name:"Text"}],children:[e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Radio"})," buttons are used to set a true/false option in a set of minimum two options."]}),e.jsxs(n.p,{children:["They are generally displayed in a ",e.jsx(n.strong,{children:"Radio"})," group."]})]}),`
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
`,e.jsx(j,{donts:[e.jsxs(n.span,{children:["- Use Radio buttons when multiple items can be selected, use ",e.jsx(t,{kind:i.checkbox,label:"Checkbox",story:a.documentation})," buttons instead"]}),e.jsxs(n.span,{children:["- Use more than 5 Radio buttons, instead convert it to a ",e.jsx(t,{kind:i.select,label:"Select",story:a.documentation})]}),"- Avoid situations where all options in a set should be deselected"],dos:["- Always use clear and concise labels for Radio buttons","- Long labels may wrap to a second line, and this is preferable to truncation",e.jsxs(n.span,{children:["- If using two affirmative/negative-type Radio buttons, you might consider converting it to a sole ",e.jsx(t,{kind:i.checkbox,label:"Checkbox",story:a.documentation})," button"]})]}),`
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
`,e.jsxs(n.p,{children:["Using ",e.jsx(n.code,{children:"Enter"})," or ",e.jsx(n.code,{children:"Space"})," keys while focusing allows to check the ",e.jsx(n.strong,{children:"Radio"})," button."]})]})}function B(s={}){const{wrapper:n}={...d(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(l,{...s})}):l(s)}export{B as default};
