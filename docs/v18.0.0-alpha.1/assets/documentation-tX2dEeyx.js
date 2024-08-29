import{j as n}from"./jsx-runtime-C_5uCoOk.js";import{u as d}from"./index-BNSrq6w-.js";import{M as l,C as c,d as o}from"./index-DnV51lgW.js";import{B as h}from"./banner-CAPzkNgn.js";import{P as r,O as p}from"./pagination.stories-7qFnYvDa.js";import{O as s}from"./index-BUOQImqF.js";import{O as i}from"./index-CEZbmgmh.js";import"./iframe-Cm7AUSBL.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-B_J8iUie.js";import"./index-DX_4BEHg.js";import"./index-DrFu-skq.js";import"./lit-html-D-ZEPr28.js";import"./control-C1r2wu67.js";import"./ods-toggle2-CgWFvVwm.js";function a(t){const e={a:"a",em:"em",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...d(),...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(l,{of:r,name:"Documentation"}),`
`,n.jsx(h,{of:r}),`
`,n.jsx(e.p,{children:n.jsxs(e.em,{children:["A ",n.jsx(e.strong,{children:"Pagination"})," component allows users to navigate through large sets of data by dividing the content into multiple pages."]})}),`
`,n.jsx(c,{of:p,sourceState:"none"}),`
`,n.jsx(e.h2,{id:"overview",children:"Overview"}),`
`,n.jsxs("div",{children:[n.jsxs("div",{id:"description",children:[n.jsxs(e.p,{children:["The ",n.jsx(e.strong,{children:"Pagination"})," component is used to divide content into discrete pages and provide navigation controls to move between them."]}),n.jsx(e.p,{children:"This component enhances usability by allowing users to browse through large sets of data without overwhelming the interface."}),n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Pagination"})," can include various controls like next/previous buttons and page numbers."]})]}),n.jsx("table",{children:n.jsxs("tbody",{children:[n.jsxs("tr",{children:[n.jsx("th",{scope:"row",children:"Name"}),n.jsx("td",{children:n.jsx("strong",{children:"Pagination"})})]}),n.jsxs("tr",{children:[n.jsx("th",{scope:"row",children:"Also known as"}),n.jsx("td",{children:n.jsx("em",{children:"Page navigation"})})]}),n.jsxs("tr",{children:[n.jsx("th",{scope:"row",children:"Atomic type"}),n.jsx("td",{children:n.jsxs("a",{href:"https://atomicdesign.bradfrost.com/chapter-2/#molecules",children:["Molecule",n.jsx(s,{name:i.externalLink,style:{fontSize:".7rem",paddingLeft:".3rem",paddingRight:".2rem"}})]})})]}),n.jsxs("tr",{children:[n.jsx("th",{scope:"row",children:"Related component(s)"}),n.jsx("td",{children:n.jsxs(e.p,{children:[n.jsx(e.a,{href:"?path=/docs/ods-components-button--documentation",children:n.jsx(e.strong,{children:"Button"})}),`,
`,n.jsx(e.a,{href:"?path=/docs/ods-components-form-elements-select--documentation",children:n.jsx(e.strong,{children:"Select"})}),`,
`,n.jsx(e.a,{href:"?path=/docs/ods-components-tooltip--documentation",children:n.jsx(e.strong,{children:"Tooltip"})})]})})]}),n.jsxs("tr",{children:[n.jsx("th",{scope:"row",children:"Links"}),n.jsxs("td",{children:[n.jsxs("a",{href:"https://www.figma.com/proto/tIKzHa5KvHHyosgIgyBswB/Design-Tokens",children:["Design",n.jsx(s,{name:i.externalLink,style:{fontSize:".7rem",paddingLeft:".3rem",paddingRight:".2rem"}})]}),n.jsx("br",{}),n.jsxs("a",{href:"https://github.com/ovh/design-system/tree/master/packages/components/src/pagination",children:["Github",n.jsx(s,{name:i.externalLink,style:{fontSize:".7rem",paddingLeft:".3rem",paddingRight:".2rem"}})]})]})]})]})})]}),`
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
`,n.jsx(o,{children:`
| ✅ Do                                                                                                                                                                           |
|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| - Use when user needs to maintain a sense of position and order inside a set of elements                                                                                                         |
| - When using Pagination, please display preferably ~25 items of the related set on each page                                                                                                         |
`}),`
`,n.jsx(o,{children:`
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
`,n.jsxs(e.p,{children:["Previous and next page arrow ",n.jsx(e.a,{href:"?path=/docs/ods-components-button--documentation",children:n.jsx(e.strong,{children:"Buttons"})})," are labelled as their explicit usage."]})]})}function C(t={}){const{wrapper:e}={...d(),...t.components};return e?n.jsx(e,{...t,children:n.jsx(a,{...t})}):a(t)}export{C as default};
