import{j as e}from"./jsx-runtime-BtDUu9js.js";import{u as l}from"./index-DZL6x4lo.js";import{M as r,C as c}from"./index-CYldocI7.js";import{T as i,O as m}from"./table.stories-BC4wu3ET.js";import{B as d}from"./Banner-CW_U-IGN.js";import{I as h,A as p,B as x}from"./IdentityCard-BLiY5u4s.js";import{H as o}from"./Heading-DwuTnCox.js";import{S as t}from"./StorybookLink-BiRTKXGy.js";import"./iframe-D7GxXTWn.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-B_J8iUie.js";import"./index-DX_4BEHg.js";import"./index-DrFu-skq.js";import"./index-BvAGq-5Z.js";import"./lit-html-D-ZEPr28.js";import"./unsafe-html-HR6uCwaW.js";import"./controls-DpsgTNdU.js";import"./index-DtXgNHxz.js";function a(s){const n={code:"code",em:"em",img:"img",li:"li",ol:"ol",p:"p",span:"span",strong:"strong",ul:"ul",...l(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{of:i,name:"Documentation"}),`
`,e.jsx(d,{of:i}),`
`,e.jsx(n.p,{children:e.jsx(n.em,{children:"A component to display data in a tabular format."})}),`
`,e.jsx(c,{of:m,sourceState:"none"}),`
`,e.jsx(o,{label:"Overview",level:2}),`
`,e.jsx(h,{aliases:[],atomicType:p.organism,figmaLink:"https://www.figma.com/design/9jDDTcR4a9jPRFcdjawAlf/ODS---UI-Kit?node-id=93-12118",githubUrl:"https://github.com/ovh/design-system/tree/master/packages/ods/src/components/table",name:"Table",relatedComponents:[{name:"Badge"},{name:"Button"},{name:"Icon"},{name:"Link"},{name:"Medium"},{name:"Text"},{name:"Tooltip"}]}),`
`,e.jsx(o,{label:"Anatomy",level:2}),`
`,e.jsx(n.p,{children:e.jsx(n.img,{src:"components/table/anatomy.png",alt:"Component anatomy",title:"Component anatomy"})}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Header"})," : Header cells of each column. Each header cell contains a ",e.jsx(t,{kind:"ODS Components/Text",label:"Text",story:"Documentation"}),", and can contain an additional icon ",e.jsx(t,{kind:"ODS Components/Button",label:"Button",story:"Documentation"})," helper with ",e.jsx(t,{kind:"ODS Components/Tooltip",label:"Tooltip",story:"Documentation"}),"."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Body"})," : Main content for data visualization. Each cell can contain diverse components, such as ",e.jsx(t,{kind:"ODS Components/Text",label:"Text",story:"Documentation"}),", and other elements such as ",e.jsx(t,{kind:"ODS Components/Badge",label:"Badge",story:"Documentation"}),", ",e.jsx(t,{kind:"ODS Components/Icon",label:"Icon",story:"Documentation"}),", ",e.jsx(t,{kind:"ODS Components/Link",label:"Link",story:"Documentation"}),", ",e.jsx(t,{kind:"ODS Components/Tooltip",label:"Tooltip",story:"Documentation"}),", ",e.jsx(n.strong,{children:"Flag"}),", ",e.jsx(t,{kind:"ODS Components/Medium",label:"Medium",story:"Documentation"}),"."]}),`
`]}),`
`,e.jsx(o,{label:"Usage",level:2}),`
`,e.jsx(o,{label:"Dos & Don'ts",level:3}),`
`,e.jsx(x,{donts:["- Use Table component for layout purposes","- Use Table when there is a need to display large sets of data (more than 30 rows)"],dos:["- Use a Table to make content easier to read","- Use Table component for small amounts of data that can be displayed in a simple format","- Structure the data with useful columns (we recommend up to 9 columns)",e.jsxs(n.span,{children:["- Use clear and concise headers. If a header is too complex, use a description (via a ",e.jsx(t,{kind:"ODS Components/Tooltip",label:"Tooltip",story:"Documentation"}),")"]}),e.jsxs(n.span,{children:["- When data or content is loading in a cell, replace its content with a ",e.jsx(t,{kind:"ODS Components/Skeleton",label:"Skeleton",story:"Documentation"})]})]}),`
`,e.jsx(o,{label:"Placement",level:2}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Table"})," component should always fit in its container."]}),`
`,e.jsxs(n.p,{children:["On the contrary, if ",e.jsx(n.strong,{children:"Table"})," is wider than the container (especially in mobile devices), users should be able to scroll horizontally in this container."]}),`
`,e.jsx(n.p,{children:"Header height is minimum 48px by default."}),`
`,e.jsx(n.p,{children:"Body cells height is set to minimum 48px by default but, it can adjust its size, height and width, based on its content."}),`
`,e.jsx(o,{label:"Behavior",level:2}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Table"})," component acts like native HTML table. It dynamically sizes column widths and row heights based on content and available space."]}),`
`,e.jsxs(n.p,{children:["By default, ",e.jsx(n.strong,{children:"Table"})," rows height is minimum 48px. When an element is too large in a cell, the row height will adjust based on this element. It is possible to add a new line in a cell."]}),`
`,e.jsx(o,{label:"Variation",level:2}),`
`,e.jsx(o,{label:"Size",level:3}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Small"}),": displaying compact data sets in limited spaces, making efficient use of the available area without overwhelming the user."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Medium"})," ",e.jsx(n.em,{children:"(default)"}),": default size of presenting data in a ",e.jsx(n.strong,{children:"Table"}),"."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Large"}),": presenting extensive data sets with more detailed information, often featuring more columns and rows to provide comprehensive visibility of the data."]}),`
`]}),`
`,e.jsx(o,{label:"Variant",level:3}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Default"}),": provides default UI for the component, without distinctive background colors on rows/colors."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Striped"}),": improving readability by using alternating row colors to distinguish between consecutive rows of data, making it easier for users to follow and interpret the information. We recommend to use this variant when there are more than 10 rows in the ",e.jsx(n.strong,{children:"Table"}),"."]}),`
`]}),`
`,e.jsx(o,{label:"Accessibility",level:2}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Table"})," component acts the same way as the native ",e.jsx(n.code,{children:"<table>"})," component."]})]})}function z(s={}){const{wrapper:n}={...l(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(a,{...s})}):a(s)}export{z as default};
