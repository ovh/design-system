import{j as e}from"./jsx-runtime-VM66peLj.js";import{useMDXComponents as d}from"./index-DQB45XCM.js";import{M as c,C as h}from"./index-BlaLg9GY.js";import{R as a,O as m}from"./radio-group.stories-B4o_f8ib.js";import{B as p}from"./Banner-CANn_RZm.js";import{I as u,A as x,B as j}from"./IdentityCard-DkdK44g3.js";import{H as o}from"./Heading-6Mfikk-c.js";import{S as t,a as i,O as r}from"./StorybookLink-Dek5KO7Z.js";import"./index-D_CmzhJ4.js";import"./iframe-CGgj-FAD.js";import"./index-ChzAxGiP.js";import"./index-CucsY3YN.js";import"./index-CXQShRbs.js";import"./index-DrFu-skq.js";import"./FormFieldLabel-BxxkSoC9.js";import"./index-CkQHsVsO.js";import"./index-BCxMAfLs.js";import"./use-field-context-BA6pMY5L.js";import"./index-DTqyXX3-.js";import"./use-locale-context-Z4fgdY29.js";import"./controls-BtiQQn1l.js";import"./ExternalLink-lH7YZu4p.js";import"./ods-react49-9IXPzWp7.js";import"./index-2w0W-O47-BJ19ihbZ.js";import"./Link-Ck4D7Gly-DoENOEBg.js";function l(s){const n={code:"code",em:"em",img:"img",li:"li",ol:"ol",p:"p",span:"span",strong:"strong",ul:"ul",...d(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(c,{of:a,name:"Documentation"}),`
`,e.jsx(p,{of:a}),`
`,e.jsx(n.p,{children:e.jsxs(n.em,{children:["A ",e.jsx(n.strong,{children:"Radio"})," button allows users to select only one option from a number of choices."]})}),`
`,e.jsx(h,{of:m,sourceState:"none"}),`
`,e.jsx(o,{label:"Overview",level:2}),`
`,e.jsxs(u,{aliases:["Radio button (previous name)"],atomicType:x.atom,figmaLink:"https://www.figma.com/design/9jDDTcR4a9jPRFcdjawAlf/ODS---UI-Kit?node-id=49-14625",githubUrl:"https://github.com/ovh/design-system/tree/master/packages/ods/src/components/radio",name:"Radio",relatedComponents:[{name:"Form Field",subtitle:"Form elements"},{name:"Text"}],children:[e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Radio"})," buttons are used to set a true/false option in a set of minimum two options."]}),e.jsxs(n.p,{children:["They are generally displayed in a ",e.jsx(n.strong,{children:"Radio"})," group."]})]}),`
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
`,e.jsx(j,{donts:[e.jsxs(n.span,{children:["- Use Radio buttons when multiple items can be selected, use ",e.jsx(t,{kind:r.checkbox,story:i.documentation,children:"Checkbox"})," buttons instead"]}),e.jsxs(n.span,{children:["- Use more than 5 Radio buttons, instead convert it to a ",e.jsx(t,{kind:r.select,story:i.documentation,children:"Select"})]}),"- Avoid situations where all options in a set should be deselected"],dos:["- Always use clear and concise labels for Radio buttons","- Long labels may wrap to a second line, and this is preferable to truncation",e.jsxs(n.span,{children:["- If using two affirmative/negative-type Radio buttons, you might consider converting it to a sole ",e.jsx(t,{kind:r.checkbox,story:i.documentation,children:"Checkbox"})," button"]})]}),`
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
`,e.jsxs(n.p,{children:["Using ",e.jsx(n.code,{children:"Enter"})," or ",e.jsx(n.code,{children:"Space"})," keys while focusing allows to check the ",e.jsx(n.strong,{children:"Radio"})," button."]})]})}function H(s={}){const{wrapper:n}={...d(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(l,{...s})}):l(s)}export{H as default};
