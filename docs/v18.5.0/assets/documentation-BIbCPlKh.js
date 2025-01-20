import{j as e,M as c,C as m}from"./index-aSJOi-xY.js";import{u as d}from"./index-D_oymSD0.js";import{T as l,O as h}from"./table.stories-DfhPajh6.js";import{B as p}from"./Banner-DfBQCKAd.js";import{I as x,A as u,B as j}from"./IdentityCard-bFWvbFx8.js";import{H as a}from"./Heading-fUBW5LMg.js";import{S as t,O as o,a as s}from"./StorybookLink-CdkDDCl2.js";import"./iframe-Cjn0x15a.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-D-8MO0q_.js";import"./index-DX_4BEHg.js";import"./index-DrFu-skq.js";import"./index-B1WyGMUD.js";import"./controls-DX883vx3.js";import"./unsafe-html-VJzuFJfF.js";import"./index-DduIf26o.js";function r(i){const n={code:"code",em:"em",img:"img",li:"li",ol:"ol",p:"p",span:"span",strong:"strong",ul:"ul",...d(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(c,{of:l,name:"Documentation"}),`
`,e.jsx(p,{of:l}),`
`,e.jsx(n.p,{children:e.jsx(n.em,{children:"A component to display data in a tabular format."})}),`
`,e.jsx(m,{of:h,sourceState:"none"}),`
`,e.jsx(a,{label:"Overview",level:2}),`
`,e.jsx(x,{aliases:[],atomicType:u.organism,figmaLink:"https://www.figma.com/design/9jDDTcR4a9jPRFcdjawAlf/ODS---UI-Kit?node-id=93-12118",githubUrl:"https://github.com/ovh/design-system/tree/master/packages/ods/src/components/table",name:"Table",relatedComponents:[{name:"Badge"},{name:"Button"},{name:"Icon"},{name:"Link"},{name:"Medium"},{name:"Text"},{name:"Tooltip"}]}),`
`,e.jsx(a,{label:"Anatomy",level:2}),`
`,e.jsx(n.p,{children:e.jsx(n.img,{src:"components/table/anatomy.png",alt:"Component anatomy",title:"Component anatomy"})}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Header"})," : Header cells of each column. Each header cell contains a ",e.jsx(t,{kind:o.text,label:"Text",story:s.documentation}),", and can contain an additional icon ",e.jsx(t,{kind:o.button,label:"Button",story:s.documentation})," helper with ",e.jsx(t,{kind:o.tooltip,label:"Tooltip",story:s.documentation}),"."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Body"})," : Main content for data visualization. Each cell can contain diverse components, such as ",e.jsx(t,{kind:o.text,label:"Text",story:s.documentation}),", and other elements such as ",e.jsx(t,{kind:o.badge,label:"Badge",story:s.documentation}),", ",e.jsx(t,{kind:o.icon,label:"Icon",story:s.documentation}),", ",e.jsx(t,{kind:o.link,label:"Link",story:s.documentation}),", ",e.jsx(t,{kind:o.tooltip,label:"Tooltip",story:s.documentation}),", ",e.jsx(n.strong,{children:"Flag"}),", ",e.jsx(t,{kind:o.medium,label:"Medium",story:s.documentation}),"."]}),`
`]}),`
`,e.jsx(a,{label:"Usage",level:2}),`
`,e.jsx(a,{label:"Dos & Don'ts",level:3}),`
`,e.jsx(j,{donts:["- Use Table component for layout purposes","- Use Table when there is a need to display large sets of data (more than 30 rows)"],dos:["- Use a Table to make content easier to read","- Use Table component for small amounts of data that can be displayed in a simple format","- Structure the data with useful columns (we recommend up to 9 columns)",e.jsxs(n.span,{children:["- Use clear and concise headers. If a header is too complex, use a description (via a ",e.jsx(t,{kind:o.tooltip,label:"Tooltip",story:s.documentation}),")"]}),e.jsxs(n.span,{children:["- When data or content is loading in a cell, replace its content with a ",e.jsx(t,{kind:o.skeleton,label:"Skeleton",story:s.documentation})]})]}),`
`,e.jsx(a,{label:"Placement",level:2}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Table"})," component should always fit in its container."]}),`
`,e.jsxs(n.p,{children:["On the contrary, if ",e.jsx(n.strong,{children:"Table"})," is wider than the container (especially in mobile devices), users should be able to scroll horizontally in this container."]}),`
`,e.jsx(n.p,{children:"Header height is minimum 48px by default."}),`
`,e.jsx(n.p,{children:"Body cells height is set to minimum 48px by default but, it can adjust its size, height and width, based on its content."}),`
`,e.jsx(a,{label:"Behavior",level:2}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Table"})," component acts like native HTML table. It dynamically sizes column widths and row heights based on content and available space."]}),`
`,e.jsxs(n.p,{children:["By default, ",e.jsx(n.strong,{children:"Table"})," rows height is minimum 48px. When an element is too large in a cell, the row height will adjust based on this element. It is possible to add a new line in a cell."]}),`
`,e.jsx(a,{label:"Variation",level:2}),`
`,e.jsx(a,{label:"Size",level:3}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Small"}),": displaying compact data sets in limited spaces, making efficient use of the available area without overwhelming the user."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Medium"})," ",e.jsx(n.em,{children:"(default)"}),": default size of presenting data in a ",e.jsx(n.strong,{children:"Table"}),"."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Large"}),": presenting extensive data sets with more detailed information, often featuring more columns and rows to provide comprehensive visibility of the data."]}),`
`]}),`
`,e.jsx(a,{label:"Variant",level:3}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Default"}),": provides default UI for the component, without distinctive background colors on rows/colors."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Striped"}),": improving readability by using alternating row colors to distinguish between consecutive rows of data, making it easier for users to follow and interpret the information. We recommend to use this variant when there are more than 10 rows in the ",e.jsx(n.strong,{children:"Table"}),"."]}),`
`]}),`
`,e.jsx(a,{label:"Accessibility",level:2}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Table"})," component acts the same way as the native ",e.jsx(n.code,{children:"<table>"})," component."]})]})}function z(i={}){const{wrapper:n}={...d(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(r,{...i})}):r(i)}export{z as default};
