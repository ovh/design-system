import{j as e}from"./jsx-runtime-Cfl8ynUo.js";import{useMDXComponents as c}from"./index-ZwkxtaJJ.js";import{t as d,l as h}from"./ods-react60-CRx7zEey.js";import{M as p,C as m}from"./index-8pGbFWRq.js";import{P as a,O as u,A as g}from"./pagination.stories-BYSbJ0CI.js";import{B as x}from"./Banner-CNp5SML8.js";import{I as j,B as b}from"./IdentityCard-e2WB6ddF.js";import{C as f}from"./Canvas-Df5XpfVk.js";import{E as v}from"./ExternalLink-izdABMGv.js";import{H as t}from"./Heading-hbfjmHNc.js";import{S as i}from"./StorybookLink-DL_XdQSR.js";import{S as s,R as o}from"./meta-B7heVWH0.js";import"./index-jIWwRBLr.js";import"./index-2w0W-O47-BJ19ihbZ.js";import"./iframe-D7nmkxLr.js";import"./index-DWDEzXrj.js";import"./index-N93khynk.js";import"./index-CXQShRbs.js";import"./index-DrFu-skq.js";import"./index-CqY9YpN0.js";import"./Button-Tqe-VRSF.js";import"./Spinner-DNePmVpu.js";import"./colors-DSObuHxd.js";import"./icon-name-C581wThh.js";import"./TooltipTrigger-CT3e8Irz.js";import"./overlay-CZHjGBMC.js";import"./portal-QnUqvOWs.js";import"./use-locale-context-BIV2aQtl.js";import"./use-presence-BC2E-XtL.js";import"./use-event-c9j7vq_1.js";import"./index-DaqjtwB0.js";import"./index-Bc-ZgdcL.js";import"./SelectControl-TvkHg2JI.js";import"./FormFieldLabel-DW-nAxje.js";import"./Text-vMb3-i8V.js";import"./index-DFyEkYC8.js";import"./index-3nFJ2Pi7.js";import"./use-field-context-xoqKb8Fu.js";import"./controls-BtiQQn1l.js";import"./source-CPEZJ6oD.js";import"./TooltipTrigger-Iu3rt7LP-DQH4Rvrv.js";import"./index-CTDx-6u2.js";import"./lz-string-U2heoObX.js";import"./Link-BWQEuWpd-DsrdP0qI.js";import"./ods-react236-aAAP9SXj.js";function l(r){const n={code:"code",em:"em",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...c(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(p,{of:a,name:"Documentation"}),`
`,e.jsx(x,{of:a}),`
`,e.jsx(n.p,{children:e.jsxs(n.em,{children:["A ",e.jsx(n.strong,{children:"Pagination"})," component allows users to navigate through large sets of data by dividing the content into multiple pages."]})}),`
`,e.jsx(m,{of:u,sourceState:"none"}),`
`,e.jsx(t,{label:"Overview",level:2}),`
`,e.jsxs(j,{aliases:["Page navigation"],figmaLink:"https://www.figma.com/design/9jDDTcR4a9jPRFcdjawAlf/ODS---UI-Kit?node-id=47-7743",githubUrl:"https://github.com/ovh/design-system/tree/master/packages/ods-react/src/components/pagination",name:"Pagination",children:[e.jsxs(n.p,{children:["The ",e.jsx(n.strong,{children:"Pagination"})," component is used to divide content into discrete pages and provide navigation controls to move between them."]}),e.jsx(n.p,{children:"This component enhances usability by allowing users to browse through large sets of data without overwhelming the interface."}),e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Pagination"})," can include various controls like next/previous buttons and page numbers."]})]}),`
`,e.jsx(t,{label:"Usage",level:2}),`
`,e.jsxs(n.p,{children:["A ",e.jsx(n.strong,{children:"Pagination"})," component is used in two situations :"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["To navigate among a ",e.jsx(i,{kind:o.table,story:s.documentation,children:"Table"})," component"]}),`
`,e.jsx(n.li,{children:"To browse in a set of items (products list, ...)"}),`
`]}),`
`,e.jsx(t,{label:"Dos & Don'ts",level:3}),`
`,e.jsx(b,{donts:["- Don't use Pagination when the total content fits into a single page",'- Avoid Pagination if the number of pages is unpredictable or constantly changing. In those cases, consider infinite scrolling or "Load more" patterns instead',"- Don't make Pagination the only method of navigation if users might need to filter or search within the dataset"],dos:["- Use Pagination when users need to navigate through large datasets in a structured and orderly way","- Ensure Pagination is used when the total number of pages is known or predictable","- Display a reasonable number of items per page (typically around 20–30) to balance readability and navigation","- Use Next/Previous buttons and page numbers to help users track their position within the dataset"]}),`
`,e.jsx(t,{label:"Best Practices in Context",level:3}),`
`,e.jsx(n.p,{children:e.jsx(n.img,{src:"components/pagination/anatomy.png",alt:"Component anatomy",title:"Component anatomy"})}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.strong,{children:"Pagination"})}),`
`,e.jsx(n.li,{children:e.jsx(n.strong,{children:"Total items per page select"})}),`
`,e.jsx(n.li,{children:e.jsx(n.strong,{children:"Total amount of items"})}),`
`,e.jsx(n.li,{children:e.jsx(n.strong,{children:"Previous/Next buttons"})}),`
`,e.jsx(n.li,{children:e.jsx(n.strong,{children:"Ellipsis"})}),`
`,e.jsx(n.li,{children:e.jsx(n.strong,{children:"Current page button"})}),`
`,e.jsx(n.li,{children:e.jsx(n.strong,{children:"Unselected page button"})}),`
`]}),`
`,e.jsx(t,{label:"Placement",level:2}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Pagination"})," is presented to the user near the container it uses for pagination; it can be located just above or below it."]}),`
`,e.jsxs(n.p,{children:["Usually, the ",e.jsx(n.strong,{children:"Pagination"})," is end-aligned horizontally, as its usage is not principal to the container."]}),`
`,e.jsx(t,{label:"Behavior",level:2}),`
`,e.jsx(t,{label:"Amount of items per page",level:3}),`
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
`,e.jsx(t,{label:"Amount of pages",level:3}),`
`,e.jsxs(n.p,{children:["A maximum of 6 numbered page ",e.jsx(i,{kind:o.button,story:s.documentation,children:"Buttons"})," can be visible at once, with a minimum of 1."]}),`
`,e.jsx(n.p,{children:"Arrow Buttons are always visible, no matter what the amount of pages."}),`
`,e.jsx(n.p,{children:"Depending on the current page number and the amount of pages, here are the different displays of the whole component:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["If amount of pages is less than 7, all numbered page ",e.jsx(i,{kind:o.button,story:s.documentation,children:"Buttons"})," can be visible at once"]}),`
`,e.jsx(n.li,{children:"If amount of pages is 7 or more :"}),`
`,e.jsxs(n.li,{children:["If current page is the 4th one or less, the first 5 numbered ",e.jsx(i,{kind:o.button,story:s.documentation,children:"Buttons"})," are present, then an ellipsis and the last numbered ",e.jsx(i,{kind:o.button,story:s.documentation,children:"Button"})," corresponding of the amount of pages"]}),`
`,e.jsxs(n.li,{children:["If current page is the 4th to last or more, the first page ",e.jsx(i,{kind:o.button,story:s.documentation,children:"Button"})," is displayed followed by an ellipsis and the last 5 numbered ",e.jsx(i,{kind:o.button,story:s.documentation,children:"Buttons"})]}),`
`,e.jsx(n.li,{children:"If current page is between the previous bounds are displayed, in order :"}),`
`,e.jsxs(n.li,{children:["the first page ",e.jsx(i,{kind:o.button,story:s.documentation,children:"Button"}),","]}),`
`,e.jsx(n.li,{children:"an ellipsis,"}),`
`,e.jsxs(n.li,{children:["3 numbered ",e.jsx(i,{kind:o.button,story:s.documentation,children:"Buttons"}),", corresponding to : previous-to-current / current / next-to-current page,"]}),`
`,e.jsx(n.li,{children:"an ellipsis,"}),`
`,e.jsxs(n.li,{children:["the last numbered ",e.jsx(i,{kind:o.button,story:s.documentation,children:"Button"})]}),`
`]}),`
`,e.jsx(t,{label:"Navigation",level:2}),`
`,e.jsx(t,{label:"Focus Management",level:3}),`
`,e.jsxs(n.p,{children:["When tabbing through the page, focus moves sequentially through all interactive elements in the ",e.jsx(n.strong,{children:"Pagination"})," component."]}),`
`,e.jsx(n.p,{children:"The current page Button is not interactive."}),`
`,e.jsx(n.p,{children:"Disabled navigation Buttons (e.g., “Previous” on the first page) are skipped in the tab order."}),`
`,e.jsx(t,{label:"General Keyboard Shortcuts",level:3}),`
`,e.jsxs(n.p,{children:["Pressing ",e.jsx(n.code,{children:"Tab"})," moves focus forward through all interactive elements in the ",e.jsx(n.strong,{children:"Pagination"})," (Select, Buttons)."]}),`
`,e.jsxs(n.p,{children:["Pressing ",e.jsx(n.code,{children:"Shift"})," + ",e.jsx(n.code,{children:"Tab"})," moves focus backward."]}),`
`,e.jsxs(n.p,{children:["Pressing ",e.jsx(n.code,{children:"Enter"})," or ",e.jsx(n.code,{children:"Space"}),' on a page button, "Previous", or "Next" triggers the corresponding page change.']}),`
`,e.jsx(n.p,{children:'The "items per page" Select uses the same keyboard shortcuts as the standard Select component.'}),`
`,e.jsx(t,{label:"Accessibility",level:2}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Pagination"})," component should be properly identified, and correct labels must be implemented to ensure it is accessible to assistive technologies."]}),`
`,e.jsx(t,{label:"Identifying the Pagination with aria-label",level:3}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Pagination"}),` is a form of navigation, but it serves a specific purpose distinct from primary navigation menus.
To ensure it is correctly recognized, an `,e.jsx(v,{href:"https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label",children:"aria-label"})," should be added to explicitly identify it."]}),`
`,e.jsx(f,{of:g,sourceState:"shown"}),`
`,e.jsxs(n.p,{children:[e.jsx(d,{name:h.circleCheck,style:{color:"var(--ods-color-success-500)"}})," Screen readers will announce the pagination element correctly."]})]})}function pe(r={}){const{wrapper:n}={...c(),...r.components};return n?e.jsx(n,{...r,children:e.jsx(l,{...r})}):l(r)}export{pe as default};
