import{j as e}from"./jsx-runtime-Cfl8ynUo.js";import{useMDXComponents as a}from"./index-ZwkxtaJJ.js";import{M as l,C as r}from"./index-MSKBj7dO.js";import{T as s,O as c}from"./table.stories-DhTB2a2w.js";import{B as d}from"./Banner-BZtChV1g.js";import{I as m,B as h}from"./IdentityCard-BnvyxLnN.js";import{E as p}from"./ExternalLink-izdABMGv.js";import{H as t}from"./Heading-Dphh9YsV.js";import"./index-jIWwRBLr.js";import"./iframe-Cbr9ww7Z.js";import"./index-DWDEzXrj.js";import"./index-N93khynk.js";import"./index-CXQShRbs.js";import"./index-DrFu-skq.js";import"./index-CqY9YpN0.js";import"./Text-vMb3-i8V.js";import"./controls-BtiQQn1l.js";import"./ods-react60-CRx7zEey.js";import"./index-2w0W-O47-BJ19ihbZ.js";import"./Link-BWQEuWpd-DsrdP0qI.js";import"./ods-react235-aAAP9SXj.js";function i(o){const n={code:"code",em:"em",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...a(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{of:s,name:"Documentation"}),`
`,e.jsx(d,{of:s}),`
`,e.jsx(n.p,{children:e.jsx(n.em,{children:"A component to display data in a tabular format."})}),`
`,e.jsx(r,{of:c,sourceState:"none"}),`
`,e.jsx(t,{label:"Overview",level:2}),`
`,e.jsx(m,{aliases:[],figmaLink:"https://www.figma.com/design/9jDDTcR4a9jPRFcdjawAlf/ODS---UI-Kit?node-id=93-12118",githubUrl:"https://github.com/ovh/design-system/tree/master/packages/ods-react/src/components/table",name:"Table"}),`
`,e.jsx(t,{label:"Usage",level:2}),`
`,e.jsx(t,{label:"Dos & Don'ts",level:3}),`
`,e.jsx(h,{donts:["- Don't use the Table for layout or alignment purposes, they are meant for displaying tabular data only","- Don't use the Table component to display large datasets (e.g. 30+ rows) without pagination or a `Load more` button","- Don't overload rows with too much content per cell, keep data atomic and easy to scan","- Don't leave column headers unclear or overly abbreviated","- Don't make the Table scroll in multiple directions unless absolutely necessary, to avoid poor mobile experiences"],dos:["- Use a Table to present structured data in a clear and readable layout","- Limit the number of columns to 9 or fewer to maintain readability and avoid horizontal scrolling","- Use concise, meaningful headers, and add a Tooltip or description if more context is needed","- Display Skeletons in cells when data is loading asynchronously, rather than leaving them blank","- Ensure the Table is responsive by allowing columns to adapt to content and screen size"]}),`
`,e.jsx(t,{label:"Best Practices in Context",level:3}),`
`,e.jsx(n.p,{children:e.jsx(n.img,{src:"components/table/anatomy.png",alt:"Component anatomy",title:"Component anatomy"})}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.strong,{children:"Table"})}),`
`,e.jsx(n.li,{children:e.jsx(n.strong,{children:"Header cell"})}),`
`,e.jsx(n.li,{children:e.jsx(n.strong,{children:"Body cell"})}),`
`]}),`
`,e.jsx(t,{label:"Behavior",level:2}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Table"})," component acts like native HTML table. It dynamically sizes column widths and row heights based on content and available space."]}),`
`,e.jsx(n.p,{children:"When an element is too large in a cell, the row height will adjust based on this element. It is possible to add a new line in a cell."}),`
`,e.jsx(t,{label:"Variation",level:2}),`
`,e.jsx(t,{label:"Size",level:3}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Small"}),": displaying compact data sets in limited spaces, making efficient use of the available area without overwhelming the user."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Medium"})," ",e.jsx(n.em,{children:"(default)"}),": default size of presenting data in a ",e.jsx(n.strong,{children:"Table"}),"."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Large"}),": presenting extensive data sets with more detailed information, often featuring more columns and rows to provide comprehensive visibility of the data."]}),`
`]}),`
`,e.jsx(t,{label:"Variant",level:3}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Default"}),": provides default UI for the component, without distinctive background colors on rows/colors."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Striped"}),": improving readability by using alternating row colors to distinguish between consecutive rows of data, making it easier for users to follow and interpret the information. We recommend to use this variant when there are more than 10 rows in the ",e.jsx(n.strong,{children:"Table"}),"."]}),`
`]}),`
`,e.jsx(t,{label:"Navigation",level:2}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.strong,{children:"Table"})," component behaves like the native ",e.jsx(n.code,{children:"<table>"})," element. Keyboard navigation depends on the structure and interactive elements within the Table (e.g., links, or buttons). Integrators should ensure proper focus management based on their specific implementation."]}),`
`,e.jsx(t,{label:"Accessibility",level:2}),`
`,e.jsxs(n.p,{children:["To ensure the ",e.jsx(n.strong,{children:"Table"})," component is fully accessible, it is essential to follow best practices for structuring tables with the correct semantic elements (",e.jsx(n.code,{children:"<thead>"}),", ",e.jsx(n.code,{children:"<tbody>"}),", ",e.jsx(n.code,{children:"<th>"}),", ",e.jsx(n.code,{children:"<td>"}),"...)."]}),`
`,e.jsxs(n.p,{children:["Since ",e.jsx(n.strong,{children:"Table"})," implementation is handled by the integrator, we recommend referring to the ",e.jsx(p,{href:"https://www.w3.org/WAI/tutorials/tables",children:"WCAG guidelines"})," for accessible tables."]})]})}function E(o={}){const{wrapper:n}={...a(),...o.components};return n?e.jsx(n,{...o,children:e.jsx(i,{...o})}):i(o)}export{E as default};
