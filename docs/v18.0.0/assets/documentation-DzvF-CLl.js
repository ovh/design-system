import{j as n}from"./jsx-runtime-Dn0LW--f.js";import{u as r}from"./index-DeyDdHvX.js";import{M as a,C as l,d as s}from"./index-BM3JsZOq.js";import{B as d}from"./banner-DPlTyHjv.js";import{P as o,O as c}from"./pagination.stories-DsKH_NQ7.js";import{I as h,A as p}from"./identity-card-CwN41yUF.js";import"./iframe-6_jBXMSq.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-B_J8iUie.js";import"./index-DX_4BEHg.js";import"./index-DrFu-skq.js";import"./lit-html-D-ZEPr28.js";import"./control-C1r2wu67.js";import"./index-DryTTbHl.js";import"./ods-toggle2-LnXcgd5r.js";import"./chunk-FAE4I7JY-v0Th3BC0.js";function i(t){const e={a:"a",em:"em",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...r(),...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(a,{of:o,name:"Documentation"}),`
`,n.jsx(d,{of:o}),`
`,n.jsx(e.p,{children:n.jsxs(e.em,{children:["A ",n.jsx(e.strong,{children:"Pagination"})," component allows users to navigate through large sets of data by dividing the content into multiple pages."]})}),`
`,n.jsx(l,{of:c,sourceState:"none"}),`
`,n.jsx(e.h2,{id:"overview",children:"Overview"}),`
`,n.jsxs("div",{className:"documentation-overview",children:[n.jsxs("div",{children:[n.jsxs(e.p,{children:["The ",n.jsx(e.strong,{children:"Pagination"})," component is used to divide content into discrete pages and provide navigation controls to move between them."]}),n.jsx(e.p,{children:"This component enhances usability by allowing users to browse through large sets of data without overwhelming the interface."}),n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Pagination"})," can include various controls like next/previous buttons and page numbers."]})]}),n.jsx(h,{aliases:["Page navigation"],atomicType:p.molecule,className:"documentation-overview__table",figmaLink:"https://www.figma.com/design/9jDDTcR4a9jPRFcdjawAlf/ODS---UI-Kit?node-id=47-7743",githubUrl:"https://github.com/ovh/design-system/tree/master/packages/ods/src/components/pagination",name:"Pagination",relatedComponents:[{name:"Button"},{name:"Select",subtitle:"Form elements"},{name:"Tooltip"}]})]}),`
`,n.jsx(e.h2,{id:"anatomy",children:"Anatomy"}),`
`,n.jsx(e.p,{children:n.jsx(e.img,{src:"components/pagination/anatomy.png",alt:"Component anatomy",title:"Component anatomy"})}),`
`,n.jsxs(e.ol,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Number of items Select"}),": grouping a defined number of items ",n.jsx(e.em,{children:"(optional)"})]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Total of items label"}),": A ",n.jsx(e.a,{href:"?path=/docs/ods-components-text--documentation",children:n.jsx(e.strong,{children:"Text"})}),", counting the total number of items ",n.jsx(e.em,{children:"(optional)"})]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Previous arrow icon Button"}),": let user navigate to the previous page"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Page number Buttons"}),": navigated to specific numbered page"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Current page Button"}),": highlight the current page navigated to"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Ellipsis Button"}),": shows the truncated pagination (in situations)"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Next arrow icon Button"}),": let user navigate to the next page"]}),`
`]}),`
`,n.jsx(e.h2,{id:"usage",children:"Usage"}),`
`,n.jsxs(e.p,{children:["A ",n.jsx(e.strong,{children:"Pagination"})," component is used in two situations :"]}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:["To navigate among a ",n.jsx(e.a,{href:"?path=/docs/ods-components-table--documentation",children:n.jsx(e.strong,{children:"Table"})})," component"]}),`
`,n.jsx(e.li,{children:"To browse in a set of items (products list, ...)"}),`
`]}),`
`,n.jsx(e.h3,{id:"dos--donts",children:"Dos & Don'ts"}),`
`,n.jsx(s,{className:"documentation-do-table",children:`
| ✅ Do                                                                                                                                                                           |
|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| - Use when user needs to maintain a sense of position and order inside a set of elements                                                                                                         |
| - When using Pagination, please display preferably ~25 items of the related set on each page                                                                                                         |
`}),`
`,n.jsx(s,{className:"documentation-dont-table",children:`
| ❌ Don't                                                                                                                                                                          |
|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| - Use Pagination component for less than 2 pages to handle                                                                                           |
| - For an unpredicted number of pages, prefer the use of infinite scrolling rather than a Pagination                                                                                           |
`}),`
`,n.jsx(e.h2,{id:"placement",children:"Placement"}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Pagination"})," is presented to the user near the container it uses for pagination; it can be located just above or below it."]}),`
`,n.jsxs(e.p,{children:["Usually, the ",n.jsx(e.strong,{children:"Pagination"})," is end-aligned horizontally, as its usage is not principal to the container."]}),`
`,n.jsx(e.h2,{id:"behavior",children:"Behavior"}),`
`,n.jsx(e.h3,{id:"amount-of-items-per-page",children:"Amount of items per page"}),`
`,n.jsxs(e.p,{children:["The number of items displayed in ",n.jsx(e.strong,{children:"Pagination"})," is depending on its referential."]}),`
`,n.jsx(e.p,{children:"However, there are few rules to be applied to display it correctly."}),`
`,n.jsx(e.p,{children:"Number of items in the component can be chunked in packs of :"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"10"}),`
`,n.jsx(e.li,{children:"25"}),`
`,n.jsx(e.li,{children:"50"}),`
`,n.jsx(e.li,{children:"100"}),`
`,n.jsx(e.li,{children:"300"}),`
`]}),`
`,n.jsx(e.p,{children:"This value is conditioning the number of items that will be displayed per page."}),`
`,n.jsx(e.p,{children:"By default, 10 items per page are displayed, but it can be set to match your need."}),`
`,n.jsx(e.h3,{id:"amount-of-pages",children:"Amount of pages"}),`
`,n.jsxs(e.p,{children:["A maximum of 6 numbered page ",n.jsx(e.a,{href:"?path=/docs/ods-components-button--documentation",children:n.jsx(e.strong,{children:"Buttons"})})," can be visible at once, with a minimum of 1."]}),`
`,n.jsx(e.p,{children:"Arrow Buttons are always visible, no matter what the amount of pages."}),`
`,n.jsx(e.p,{children:"Depending on the current page number and the amount of pages, here are the different displays of the whole component:"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:["If amount of pages is less than 7, all numbered page ",n.jsx(e.a,{href:"?path=/docs/ods-components-button--documentation",children:n.jsx(e.strong,{children:"Buttons"})})," can be visible at once"]}),`
`,n.jsxs(e.li,{children:["If amount of pages is 7 or more :",`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:["If current page is the 4th one or less, the first 5 numbered ",n.jsx(e.a,{href:"?path=/docs/ods-components-button--documentation",children:n.jsx(e.strong,{children:"Buttons"})})," are present, then an ellipsis and the last numbered ",n.jsx(e.a,{href:"?path=/docs/ods-components-button--documentation",children:n.jsx(e.strong,{children:"Button"})})," corresponding of the amount of pages"]}),`
`,n.jsxs(e.li,{children:["If current page is the 4th to last or more, the first page ",n.jsx(e.a,{href:"?path=/docs/ods-components-button--documentation",children:n.jsx(e.strong,{children:"Button"})})," is displayed followed by an ellipsis and the last 5 numbered ",n.jsx(e.a,{href:"?path=/docs/ods-components-button--documentation",children:n.jsx(e.strong,{children:"Buttons"})})]}),`
`,n.jsxs(e.li,{children:["If current page is between the previous bounds are displayed, in order :",`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:["the first page ",n.jsx(e.a,{href:"?path=/docs/ods-components-button--documentation",children:n.jsx(e.strong,{children:"Button"})}),","]}),`
`,n.jsx(e.li,{children:"an ellipsis,"}),`
`,n.jsxs(e.li,{children:["3 numbered ",n.jsx(e.a,{href:"?path=/docs/ods-components-button--documentation",children:n.jsx(e.strong,{children:"Buttons"})}),", corresponding to : previous-to-current / current / next-to-current page,"]}),`
`,n.jsx(e.li,{children:"an ellipsis,"}),`
`,n.jsxs(e.li,{children:["the last numbered ",n.jsx(e.a,{href:"?path=/docs/ods-components-button--documentation",children:n.jsx(e.strong,{children:"Button"})})]}),`
`]}),`
`]}),`
`]}),`
`]}),`
`]}),`
`,n.jsx(e.h3,{id:"navigation",children:"Navigation"}),`
`,n.jsxs(e.p,{children:["Current page ",n.jsx(e.a,{href:"?path=/docs/ods-components-button--documentation",children:n.jsx(e.strong,{children:"Button"})})," has a selected styling, yet it is a not clickable."]}),`
`,n.jsxs(e.p,{children:["If the selected page number is the first page, the previous page arrow ",n.jsx(e.a,{href:"?path=/docs/ods-components-button--documentation",children:n.jsx(e.strong,{children:"Button"})})," is disabled; same thing applies with the last page as selected and the next page arrow ",n.jsx(e.a,{href:"?path=/docs/ods-components-button--documentation",children:n.jsx(e.strong,{children:"Button"})})," disabled."]}),`
`,n.jsx(e.p,{children:"An event is triggered when the current page changes in the Pagination, as well as the items per page changes."}),`
`,n.jsx(e.h2,{id:"variation",children:"Variation"}),`
`,n.jsx(e.p,{children:"N/A"}),`
`,n.jsx(e.h2,{id:"accessibility",children:"Accessibility"}),`
`,n.jsxs(e.p,{children:["All ",n.jsx(e.a,{href:"?path=/docs/ods-components-button--documentation",children:n.jsx(e.strong,{children:"Buttons"})})," are accessible via tabulation controls."]}),`
`,n.jsxs(e.p,{children:["Previous and next page arrow ",n.jsx(e.a,{href:"?path=/docs/ods-components-button--documentation",children:n.jsx(e.strong,{children:"Buttons"})})," are labelled as their explicit usage."]})]})}function N(t={}){const{wrapper:e}={...r(),...t.components};return e?n.jsx(e,{...t,children:n.jsx(i,{...t})}):i(t)}export{N as default};
