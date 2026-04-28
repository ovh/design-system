import{j as e}from"./jsx-runtime-Cfl8ynUo.js";import{useMDXComponents as a}from"./index-ZwkxtaJJ.js";import{M as r}from"./index-BnNeS_H2.js";import{T as i,O as l}from"./table.stories-B1pHnBjo.js";import{A as c}from"./Anatomy-DkXJCwiR.js";import{B as d}from"./Banner-DYvgfZRi.js";import{B as m}from"./BestPractices-j46EvglC.js";import{C as h}from"./Canvas-zVPAbnas.js";import{E as p}from"./ExternalLink-D9Oykgkh.js";import{H as n}from"./Heading-lgNAZPkT.js";import{I as u}from"./IdentityCard-BTJG0hV7.js";import{T as b}from"./TableVsDataTable-Bl3b1paw.js";import"./index-jIWwRBLr.js";import"./iframe-DtAqipxR.js";import"./index-DWDEzXrj.js";import"./index-N93khynk.js";import"./index-CXQShRbs.js";import"./index-DrFu-skq.js";import"./Table-DkuzY8hZ.js";import"./index-CqY9YpN0.js";import"./Text-CAQM6i-X.js";import"./controls-BtiQQn1l.js";import"./icon-name-kFDeGXCQ--4TVzzrX.js";import"./index-CWkFp9WS-BSIT86NH.js";import"./index-DA9hOdui.js";import"./context-Z_Xa7sWf-5kwUyuQy.js";import"./index-D6AFTHzO.js";import"./lz-string-U2heoObX.js";import"./meta-twt-Yy4M.js";import"./source-CPEZJ6oD.js";import"./ResetTheme-CLF5P7Bf.js";import"./tokens-BrWUS-3i.js";import"./Link-fc4PsoC7-BoLkDjrj.js";import"./divider-color-DMMH0ySn-B7JauIP0.js";import"./colors-C1Wmnk_L-aAAP9SXj.js";import"./Table-Bof_Nsov-CS9ZUwCH.js";import"./Table-BXVk_N0H.js";function s(o){const t={code:"code",em:"em",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...a(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{of:i,name:"Documentation"}),`
`,e.jsx(d,{of:i}),`
`,e.jsx(t.p,{children:e.jsx(t.em,{children:"A component to display data in a tabular format."})}),`
`,e.jsx(h,{of:l,sourceState:"none"}),`
`,e.jsx(n,{label:"Overview",level:2}),`
`,e.jsx(u,{aliases:[],figmaLink:"https://www.figma.com/design/9jDDTcR4a9jPRFcdjawAlf/ODS---UI-Kit?node-id=93-12118",githubUrl:"https://github.com/ovh/design-system/tree/master/packages/ods-react/src/components/table",name:"Table"}),`
`,e.jsx(n,{label:"Usage",level:2}),`
`,e.jsx(b,{}),`
`,e.jsx(n,{label:"Dos & Don'ts",level:3}),`
`,e.jsx(m,{donts:["- Don't use the Table for layout or alignment purposes, they are meant for displaying tabular data only","- Don't use the Table component to display large datasets (e.g. 30+ rows) without pagination or a `Load more` button","- Don't overload rows with too much content per cell, keep data atomic and easy to scan","- Don't leave column headers unclear or overly abbreviated","- Don't make the Table scroll in multiple directions unless absolutely necessary, to avoid poor mobile experiences"],dos:["- Use a Table to present structured data in a clear and readable layout","- Limit the number of columns to 9 or fewer to maintain readability and avoid horizontal scrolling","- Use concise, meaningful headers, and add a Tooltip or description if more context is needed","- Display Skeletons in cells when data is loading asynchronously, rather than leaving them blank","- Ensure the Table is responsive by allowing columns to adapt to content and screen size"]}),`
`,e.jsx(n,{label:"Best Practices in Context",level:3}),`
`,e.jsx(c,{src:"components/table/anatomy.png"}),`
`,e.jsxs(t.ol,{children:[`
`,e.jsx(t.li,{children:e.jsx(t.strong,{children:"Table"})}),`
`,e.jsx(t.li,{children:e.jsx(t.strong,{children:"Header cell"})}),`
`,e.jsx(t.li,{children:e.jsx(t.strong,{children:"Body cell"})}),`
`]}),`
`,e.jsx(n,{label:"Behavior",level:2}),`
`,e.jsxs(t.p,{children:[e.jsx(t.strong,{children:"Table"})," component acts like native HTML table. It dynamically sizes column widths and row heights based on content and available space."]}),`
`,e.jsx(t.p,{children:"When an element is too large in a cell, the row height will adjust based on this element. It is possible to add a new line in a cell."}),`
`,e.jsx(n,{label:"Variation",level:2}),`
`,e.jsx(n,{label:"Size",level:3}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsxs(t.li,{children:[e.jsx(t.strong,{children:"Small"}),": displaying compact data sets in limited spaces, making efficient use of the available area without overwhelming the user."]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.strong,{children:"Medium"})," ",e.jsx(t.em,{children:"(default)"}),": default size of presenting data in a ",e.jsx(t.strong,{children:"Table"}),"."]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.strong,{children:"Large"}),": presenting extensive data sets with more detailed information, often featuring more columns and rows to provide comprehensive visibility of the data."]}),`
`]}),`
`,e.jsx(n,{label:"Variant",level:3}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsxs(t.li,{children:[e.jsx(t.strong,{children:"Default"}),": provides default UI for the component, without distinctive background colors on rows/colors."]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.strong,{children:"Striped"}),": improving readability by using alternating row colors to distinguish between consecutive rows of data, making it easier for users to follow and interpret the information. We recommend to use this variant when there are more than 10 rows in the ",e.jsx(t.strong,{children:"Table"}),"."]}),`
`]}),`
`,e.jsx(n,{label:"Navigation",level:2}),`
`,e.jsxs(t.p,{children:["The ",e.jsx(t.strong,{children:"Table"})," component behaves like the native ",e.jsx(t.code,{children:"<table>"})," element. Keyboard navigation depends on the structure and interactive elements within the Table (e.g., links, or buttons). Integrators should ensure proper focus management based on their specific implementation."]}),`
`,e.jsx(n,{label:"Accessibility",level:2}),`
`,e.jsxs(t.p,{children:["To ensure the ",e.jsx(t.strong,{children:"Table"})," component is fully accessible, it is essential to follow best practices for structuring tables with the correct semantic elements (",e.jsx(t.code,{children:"<thead>"}),", ",e.jsx(t.code,{children:"<tbody>"}),", ",e.jsx(t.code,{children:"<th>"}),", ",e.jsx(t.code,{children:"<td>"}),"...)."]}),`
`,e.jsxs(t.p,{children:["Since ",e.jsx(t.strong,{children:"Table"})," implementation is handled by the integrator, we recommend referring to the ",e.jsx(p,{href:"https://www.w3.org/WAI/tutorials/tables",children:"WCAG guidelines"})," for accessible tables."]})]})}function $(o={}){const{wrapper:t}={...a(),...o.components};return t?e.jsx(t,{...o,children:e.jsx(s,{...o})}):s(o)}export{$ as default};
