import{j as e,M as c,C as h}from"./index-aSJOi-xY.js";import{u as d}from"./index-D_oymSD0.js";import{P as l,O as u}from"./pagination.stories-eLDMOIfD.js";import{B as p}from"./Banner-DfBQCKAd.js";import{I as m,A as g,B as x}from"./IdentityCard-bFWvbFx8.js";import{H as o}from"./Heading-fUBW5LMg.js";import{S as t,O as s,a as i}from"./StorybookLink-CdkDDCl2.js";import"./iframe-Cjn0x15a.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-D-8MO0q_.js";import"./index-DX_4BEHg.js";import"./index-DrFu-skq.js";import"./index-B1WyGMUD.js";import"./controls-DX883vx3.js";import"./index-DduIf26o.js";function r(a){const n={em:"em",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...d(),...a.components};return e.jsxs(e.Fragment,{children:[e.jsx(c,{of:l,name:"Documentation"}),`
`,e.jsx(p,{of:l}),`
`,e.jsx(n.p,{children:e.jsxs(n.em,{children:["A ",e.jsx(n.strong,{children:"Pagination"})," component allows users to navigate through large sets of data by dividing the content into multiple pages."]})}),`
`,e.jsx(h,{of:u,sourceState:"none"}),`
`,e.jsx(o,{label:"Overview",level:2}),`
`,e.jsxs(m,{aliases:["Page navigation"],atomicType:g.molecule,figmaLink:"https://www.figma.com/design/9jDDTcR4a9jPRFcdjawAlf/ODS---UI-Kit?node-id=47-7743",githubUrl:"https://github.com/ovh/design-system/tree/master/packages/ods/src/components/pagination",name:"Pagination",relatedComponents:[{name:"Button"},{name:"Select",subtitle:"Form elements"},{name:"Tooltip"}],children:[e.jsxs(n.p,{children:["The ",e.jsx(n.strong,{children:"Pagination"})," component is used to divide content into discrete pages and provide navigation controls to move between them."]}),e.jsx(n.p,{children:"This component enhances usability by allowing users to browse through large sets of data without overwhelming the interface."}),e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Pagination"})," can include various controls like next/previous buttons and page numbers."]})]}),`
`,e.jsx(o,{label:"Anatomy",level:2}),`
`,e.jsx(n.p,{children:e.jsx(n.img,{src:"components/pagination/anatomy.png",alt:"Component anatomy",title:"Component anatomy"})}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Number of items Select"}),": grouping a defined number of items ",e.jsx(n.em,{children:"(optional)"})]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Total of items label"}),": A ",e.jsx(t,{kind:s.text,label:"Text",story:i.documentation}),", counting the total number of items ",e.jsx(n.em,{children:"(optional)"})]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Previous arrow icon Button"}),": let user navigate to the previous page"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Page number Buttons"}),": navigated to specific numbered page"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Current page Button"}),": highlight the current page navigated to"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Ellipsis Button"}),": shows the truncated pagination (in situations)"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Next arrow icon Button"}),": let user navigate to the next page"]}),`
`]}),`
`,e.jsx(o,{label:"Usage",level:2}),`
`,e.jsxs(n.p,{children:["A ",e.jsx(n.strong,{children:"Pagination"})," component is used in two situations :"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["To navigate among a ",e.jsx(t,{kind:s.table,label:"Table",story:i.documentation})," component"]}),`
`,e.jsx(n.li,{children:"To browse in a set of items (products list, ...)"}),`
`]}),`
`,e.jsx(o,{label:"Dos & Don'ts",level:3}),`
`,e.jsx(x,{donts:["- Use Pagination component for less than 2 pages to handle","- For an unpredicted number of pages, prefer the use of infinite scrolling rather than a Pagination"],dos:["- Use when user needs to maintain a sense of position and order inside a set of elements","- When using Pagination, please display preferably ~25 items of the related set on each page"]}),`
`,e.jsx(o,{label:"Placement",level:2}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Pagination"})," is presented to the user near the container it uses for pagination; it can be located just above or below it."]}),`
`,e.jsxs(n.p,{children:["Usually, the ",e.jsx(n.strong,{children:"Pagination"})," is end-aligned horizontally, as its usage is not principal to the container."]}),`
`,e.jsx(o,{label:"Behavior",level:2}),`
`,e.jsx(o,{label:"Amount of items per page",level:3}),`
`,e.jsxs(n.p,{children:["The number of items displayed in ",e.jsx(n.strong,{children:"Pagination"})," is depending on its referential."]}),`
`,e.jsx(n.p,{children:"However, there are few rules to be applied to display it correctly."}),`
`,e.jsx(n.p,{children:"Number of items in the component can be chunked in packs of :"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"10"}),`
`,e.jsx(n.li,{children:"25"}),`
`,e.jsx(n.li,{children:"50"}),`
`,e.jsx(n.li,{children:"100"}),`
`,e.jsx(n.li,{children:"300"}),`
`]}),`
`,e.jsx(n.p,{children:"This value is conditioning the number of items that will be displayed per page."}),`
`,e.jsx(n.p,{children:"By default, 10 items per page are displayed, but it can be set to match your need."}),`
`,e.jsx(o,{label:"Amount of pages",level:3}),`
`,e.jsxs(n.p,{children:["A maximum of 6 numbered page ",e.jsx(t,{kind:s.button,label:"Buttons",story:i.documentation})," can be visible at once, with a minimum of 1."]}),`
`,e.jsx(n.p,{children:"Arrow Buttons are always visible, no matter what the amount of pages."}),`
`,e.jsx(n.p,{children:"Depending on the current page number and the amount of pages, here are the different displays of the whole component:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["If amount of pages is less than 7, all numbered page ",e.jsx(t,{kind:s.button,label:"Buttons",story:i.documentation})," can be visible at once"]}),`
`,e.jsxs(n.li,{children:["If amount of pages is 7 or more :",`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["If current page is the 4th one or less, the first 5 numbered ",e.jsx(t,{kind:s.button,label:"Buttons",story:i.documentation})," are present, then an ellipsis and the last numbered ",e.jsx(t,{kind:s.button,label:"Button",story:i.documentation})," corresponding of the amount of pages"]}),`
`,e.jsxs(n.li,{children:["If current page is the 4th to last or more, the first page ",e.jsx(t,{kind:s.button,label:"Button",story:i.documentation})," is displayed followed by an ellipsis and the last 5 numbered ",e.jsx(t,{kind:s.button,label:"Buttons",story:i.documentation})]}),`
`,e.jsxs(n.li,{children:["If current page is between the previous bounds are displayed, in order :",`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["the first page ",e.jsx(t,{kind:s.button,label:"Button",story:i.documentation}),","]}),`
`,e.jsx(n.li,{children:"an ellipsis,"}),`
`,e.jsxs(n.li,{children:["3 numbered ",e.jsx(t,{kind:s.button,label:"Buttons",story:i.documentation}),", corresponding to : previous-to-current / current / next-to-current page,"]}),`
`,e.jsx(n.li,{children:"an ellipsis,"}),`
`,e.jsxs(n.li,{children:["the last numbered ",e.jsx(t,{kind:s.button,label:"Button",story:i.documentation})]}),`
`]}),`
`]}),`
`]}),`
`]}),`
`]}),`
`,e.jsx(o,{label:"Navigation",level:3}),`
`,e.jsxs(n.p,{children:["Current page ",e.jsx(t,{kind:s.button,label:"Button",story:i.documentation})," has a selected styling, yet it is a not clickable."]}),`
`,e.jsxs(n.p,{children:["If the selected page number is the first page, the previous page arrow ",e.jsx(t,{kind:s.button,label:"Button",story:i.documentation})," is disabled; same thing applies with the last page as selected and the next page arrow ",e.jsx(t,{kind:s.button,label:"Button",story:i.documentation})," disabled."]}),`
`,e.jsx(n.p,{children:"An event is triggered when the current page changes in the Pagination, as well as the items per page changes."}),`
`,e.jsx(o,{label:"Variation",level:2}),`
`,e.jsx(n.p,{children:"N/A"}),`
`,e.jsx(o,{label:"Accessibility",level:2}),`
`,e.jsxs(n.p,{children:["All ",e.jsx(t,{kind:s.button,label:"Buttons",story:i.documentation})," are accessible via tabulation controls."]}),`
`,e.jsxs(n.p,{children:["Previous and next page arrow ",e.jsx(t,{kind:s.button,label:"Buttons",story:i.documentation})," are labelled as their explicit usage."]})]})}function M(a={}){const{wrapper:n}={...d(),...a.components};return n?e.jsx(n,{...a,children:e.jsx(r,{...a})}):r(a)}export{M as default};
