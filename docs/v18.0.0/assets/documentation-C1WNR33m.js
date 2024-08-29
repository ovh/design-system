import{j as e}from"./jsx-runtime-Dn0LW--f.js";import{u as a}from"./index-DeyDdHvX.js";import{M as r,C as d,d as o}from"./index-BM3JsZOq.js";import{B as c}from"./banner-DPlTyHjv.js";import{T as s,O as l}from"./table.stories-DdIUZa0A.js";import{I as h,A as m}from"./identity-card-CwN41yUF.js";import"./iframe-6_jBXMSq.js";import"../sb-preview/runtime.js";import"./commonjsHelpers-Cpj98o6Y.js";import"./index-B_J8iUie.js";import"./index-DX_4BEHg.js";import"./index-DrFu-skq.js";import"./index-DryTTbHl.js";import"./lit-html-D-ZEPr28.js";import"./unsafe-html-HR6uCwaW.js";import"./control-C1r2wu67.js";import"./ods-toggle2-LnXcgd5r.js";import"./chunk-FAE4I7JY-v0Th3BC0.js";function i(t){const n={a:"a",code:"code",em:"em",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...a(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{of:s,name:"Documentation"}),`
`,e.jsx(c,{of:s}),`
`,e.jsx(n.p,{children:e.jsx(n.em,{children:"A component to display data in a tabular format."})}),`
`,e.jsx(d,{of:l,sourceState:"none"}),`
`,e.jsx(n.h2,{id:"overview",children:"Overview"}),`
`,e.jsxs("div",{className:"documentation-overview",children:[e.jsx("div",{}),e.jsx(h,{aliases:[],atomicType:m.organism,className:"documentation-overview__table",figmaLink:"https://www.figma.com/design/9jDDTcR4a9jPRFcdjawAlf/ODS---UI-Kit?node-id=93-12118",githubUrl:"https://github.com/ovh/design-system/tree/master/packages/ods/src/components/table",name:"Table",relatedComponents:[{name:"Badge"},{name:"Button"},{name:"Icon"},{name:"Link"},{name:"Medium"},{name:"Text"},{name:"Tooltip"}]})]}),`
`,e.jsx(n.h2,{id:"anatomy",children:"Anatomy"}),`
`,e.jsx(n.p,{children:e.jsx(n.img,{src:"components/table/anatomy.png",alt:"Component anatomy",title:"Component anatomy"})}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Header"})," : Header cells of each column. Each header cell contains a ",e.jsx(n.a,{href:"?path=/docs/ods-components-text--documentation",children:e.jsx(n.strong,{children:"Text"})}),", and can contain an additional icon ",e.jsx(n.a,{href:"?path=/docs/ods-components-button--documentation",children:e.jsx(n.strong,{children:"Button"})})," helper with ",e.jsx(n.a,{href:"?path=/docs/ods-components-tooltip--documentation",children:e.jsx(n.strong,{children:"Tooltip"})}),"."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Body"})," : Main content for data visualization. Each cell can contain diverse components, such as ",e.jsx(n.a,{href:"?path=/docs/ods-components-text--documentation",children:e.jsx(n.strong,{children:"Text"})}),", and other elements such as ",e.jsx(n.a,{href:"?path=/docs/ods-components-badge--documentation",children:e.jsx(n.strong,{children:"Badge"})}),", ",e.jsx(n.a,{href:"?path=/docs/ods-components-icon--documentation",children:e.jsx(n.strong,{children:"Icon"})}),", ",e.jsx(n.a,{href:"?path=/docs/ods-components-link--documentation",children:e.jsx(n.strong,{children:"Link"})}),", ",e.jsx(n.a,{href:"?path=/docs/ods-components-tooltip--documentation",children:e.jsx(n.strong,{children:"Tooltip"})}),", ",e.jsx(n.strong,{children:"Flag"}),", ",e.jsx(n.a,{href:"?path=/docs/ods-components-medium--documentation",children:e.jsx(n.strong,{children:"Medium"})}),"."]}),`
`]}),`
`,e.jsx(n.h2,{id:"usage",children:"Usage"}),`
`,e.jsx(n.h3,{id:"dos--donts",children:"Dos & Don'ts"}),`
`,e.jsx(o,{className:"documentation-do-table",children:`
| ✅ Do                                                                                                                                                                           |
|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| - Use a **Table** to make content easier to read.                                                                                                                              |
| - Use **Table** component for small amounts of data that can be displayed in a simple format.                                                                                  |
| - Structure the data with useful columns (we recommend up to 9 columns).                                                                                                       |
| - Use clear and concise headers. If a header is too complex, use a description (via a [**Tooltip**](?path=/docs/ods-components-tooltip--documentation)).         |
| - When data or content is loading in a cell, replace its content with a [**Skeleton**](?path=/docs/ods-components-skeleton--documentation).                            |
`}),`
`,e.jsx(o,{className:"documentation-dont-table",children:`
| ❌ Don't                                                                                                                                                                          |
|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| - Use **Table** component for layout purposes.                                                                                                                                   |
| - Use **Table** when there is a need to display large sets of data (more than 30 rows).                                                                                          |
`}),`
`,e.jsx(n.h2,{id:"placement",children:"Placement"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Table"})," component should always fit in its container."]}),`
`,e.jsxs(n.p,{children:["On the contrary, if ",e.jsx(n.strong,{children:"Table"})," is wider than the container (especially in mobile devices), users should be able to scroll horizontally in this container."]}),`
`,e.jsx(n.p,{children:"Header height is minimum 48px by default."}),`
`,e.jsx(n.p,{children:"Body cells height is set to minimum 48px by default but, it can adjust its size, height and width, based on its content."}),`
`,e.jsx(n.h2,{id:"behavior",children:"Behavior"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Table"})," component acts like native HTML table. It dynamically sizes column widths and row heights based on content and available space."]}),`
`,e.jsxs(n.p,{children:["By default, ",e.jsx(n.strong,{children:"Table"})," rows height is minimum 48px. When an element is too large in a cell, the row height will adjust based on this element. It is possible to add a new line in a cell."]}),`
`,e.jsx(n.h2,{id:"variation",children:"Variation"}),`
`,e.jsx(n.h3,{id:"size",children:"Size"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Small"}),": displaying compact data sets in limited spaces, making efficient use of the available area without overwhelming the user."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Medium"})," ",e.jsx(n.em,{children:"(default)"}),": default size of presenting data in a ",e.jsx(n.strong,{children:"Table"}),"."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Large"}),": presenting extensive data sets with more detailed information, often featuring more columns and rows to provide comprehensive visibility of the data."]}),`
`]}),`
`,e.jsx(n.h3,{id:"variant",children:"Variant"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Default"}),": provides default UI for the component, without distinctive background colors on rows/colors."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Striped"}),": improving readability by using alternating row colors to distinguish between consecutive rows of data, making it easier for users to follow and interpret the information. We recommend to use this variant when there are more than 10 rows in the ",e.jsx(n.strong,{children:"Table"}),"."]}),`
`]}),`
`,e.jsx(n.h2,{id:"accessibility",children:"Accessibility"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Table"})," component acts the same way as the native ",e.jsx(n.code,{children:"<table>"})," component."]})]})}function S(t={}){const{wrapper:n}={...a(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(i,{...t})}):i(t)}export{S as default};
