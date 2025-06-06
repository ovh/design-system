import{j as e}from"./jsx-runtime-VM66peLj.js";import{useMDXComponents as d}from"./index-DQB45XCM.js";import{M as c,C as m}from"./index-BlaLg9GY.js";import{T as l,O as h}from"./table.stories-Bf0jnLJQ.js";import{B as p}from"./Banner-CANn_RZm.js";import{I as x,A as u,B as j}from"./IdentityCard-DkdK44g3.js";import{H as s}from"./Heading-6Mfikk-c.js";import{S as t,a as i,O as o}from"./StorybookLink-Dek5KO7Z.js";import"./index-D_CmzhJ4.js";import"./iframe-CGgj-FAD.js";import"./index-ChzAxGiP.js";import"./index-CucsY3YN.js";import"./index-CXQShRbs.js";import"./index-DrFu-skq.js";import"./index-CkQHsVsO.js";import"./Text-eeWNb4Wa.js";import"./controls-BtiQQn1l.js";import"./ExternalLink-lH7YZu4p.js";import"./ods-react49-9IXPzWp7.js";import"./index-2w0W-O47-BJ19ihbZ.js";import"./Link-Ck4D7Gly-DoENOEBg.js";function r(a){const n={code:"code",em:"em",img:"img",li:"li",ol:"ol",p:"p",span:"span",strong:"strong",ul:"ul",...d(),...a.components};return e.jsxs(e.Fragment,{children:[e.jsx(c,{of:l,name:"Documentation"}),`
`,e.jsx(p,{of:l}),`
`,e.jsx(n.p,{children:e.jsx(n.em,{children:"A component to display data in a tabular format."})}),`
`,e.jsx(m,{of:h,sourceState:"none"}),`
`,e.jsx(s,{label:"Overview",level:2}),`
`,e.jsx(x,{aliases:[],atomicType:u.organism,figmaLink:"https://www.figma.com/design/9jDDTcR4a9jPRFcdjawAlf/ODS---UI-Kit?node-id=93-12118",githubUrl:"https://github.com/ovh/design-system/tree/master/packages/ods/src/components/table",name:"Table",relatedComponents:[{name:"Badge"},{name:"Button"},{name:"Icon"},{name:"Link"},{name:"Medium"},{name:"Text"},{name:"Tooltip"}]}),`
`,e.jsx(s,{label:"Anatomy",level:2}),`
`,e.jsx(n.p,{children:e.jsx(n.img,{src:"components/table/anatomy.png",alt:"Component anatomy",title:"Component anatomy"})}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Header"})," : Header cells of each column. Each header cell contains a ",e.jsx(t,{kind:o.text,story:i.documentation,children:"Text"}),", and can contain an additional icon ",e.jsx(t,{kind:o.button,story:i.documentation,children:"Button"})," helper with ",e.jsx(t,{kind:o.tooltip,story:i.documentation,children:"Tooltip"}),"."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Body"})," : Main content for data visualization. Each cell can contain diverse components, such as ",e.jsx(t,{kind:o.text,story:i.documentation,children:"Text"}),", and other elements such as ",e.jsx(t,{kind:o.badge,story:i.documentation,children:"Badge"}),", ",e.jsx(t,{kind:o.icon,story:i.documentation,children:"Icon"}),", ",e.jsx(t,{kind:o.link,story:i.documentation,children:"Link"}),", ",e.jsx(t,{kind:o.tooltip,story:i.documentation,children:"Tooltip"}),", ",e.jsx(n.strong,{children:"Flag"}),", ",e.jsx(t,{kind:o.medium,story:i.documentation,children:"Medium"}),"."]}),`
`]}),`
`,e.jsx(s,{label:"Usage",level:2}),`
`,e.jsx(s,{label:"Dos & Don'ts",level:3}),`
`,e.jsx(j,{donts:["- Use Table component for layout purposes","- Use Table when there is a need to display large sets of data (more than 30 rows)"],dos:["- Use a Table to make content easier to read","- Use Table component for small amounts of data that can be displayed in a simple format","- Structure the data with useful columns (we recommend up to 9 columns)",e.jsxs(n.span,{children:["- Use clear and concise headers. If a header is too complex, use a description (via a ",e.jsx(t,{kind:o.tooltip,story:i.documentation,children:"Tooltip"}),")"]}),e.jsxs(n.span,{children:["- When data or content is loading in a cell, replace its content with a ",e.jsx(t,{kind:o.skeleton,story:i.documentation,children:"Skeleton"})]})]}),`
`,e.jsx(s,{label:"Placement",level:2}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Table"})," component should always fit in its container."]}),`
`,e.jsxs(n.p,{children:["On the contrary, if ",e.jsx(n.strong,{children:"Table"})," is wider than the container (especially in mobile devices), users should be able to scroll horizontally in this container."]}),`
`,e.jsx(n.p,{children:"Header height is minimum 48px by default."}),`
`,e.jsx(n.p,{children:"Body cells height is set to minimum 48px by default but, it can adjust its size, height and width, based on its content."}),`
`,e.jsx(s,{label:"Behavior",level:2}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Table"})," component acts like native HTML table. It dynamically sizes column widths and row heights based on content and available space."]}),`
`,e.jsxs(n.p,{children:["By default, ",e.jsx(n.strong,{children:"Table"})," rows height is minimum 48px. When an element is too large in a cell, the row height will adjust based on this element. It is possible to add a new line in a cell."]}),`
`,e.jsx(s,{label:"Variation",level:2}),`
`,e.jsx(s,{label:"Size",level:3}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Small"}),": displaying compact data sets in limited spaces, making efficient use of the available area without overwhelming the user."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Medium"})," ",e.jsx(n.em,{children:"(default)"}),": default size of presenting data in a ",e.jsx(n.strong,{children:"Table"}),"."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Large"}),": presenting extensive data sets with more detailed information, often featuring more columns and rows to provide comprehensive visibility of the data."]}),`
`]}),`
`,e.jsx(s,{label:"Variant",level:3}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Default"}),": provides default UI for the component, without distinctive background colors on rows/colors."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Striped"}),": improving readability by using alternating row colors to distinguish between consecutive rows of data, making it easier for users to follow and interpret the information. We recommend to use this variant when there are more than 10 rows in the ",e.jsx(n.strong,{children:"Table"}),"."]}),`
`]}),`
`,e.jsx(s,{label:"Accessibility",level:2}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Table"})," component acts the same way as the native ",e.jsx(n.code,{children:"<table>"})," component."]})]})}function P(a={}){const{wrapper:n}={...d(),...a.components};return n?e.jsx(n,{...a,children:e.jsx(r,{...a})}):r(a)}export{P as default};
