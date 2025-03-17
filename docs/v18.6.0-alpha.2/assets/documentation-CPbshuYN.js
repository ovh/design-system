import{j as e,M as d,C as m}from"./index-Cg27MLKJ.js";import{u as p}from"./index-CRYdQg8Y.js";import{P as a,O as c}from"./pagination.stories-iQt2axFn.js";import{B as h}from"./Banner-B8px5-Yg.js";import{I as u,A as g,B as x}from"./IdentityCard-BoJN4GsQ.js";import{H as s}from"./Heading-J7HCFxl6.js";import{S as t,O as i,a as o}from"./StorybookLink-anNL9IKG.js";import"./iframe-J0ZUQmQ0.js";import"../sb-preview/runtime.js";import"./index-8AfNH5n5.js";import"./index-D-8MO0q_.js";import"./index-DrFu-skq.js";import"./index-CGJBSJl7.js";import"./ods-pagination2-shUGU0gB.js";import"./index-DAZhnxgO.js";import"./dom-8hoR-urs.js";import"./ods-button2-dPaqs0uX.js";import"./ods-spinner2-CPyWCS2f.js";import"./ods-icon2-DRPHarK1.js";import"./icon-name-C6aMXAXT.js";import"./ods-select2-CEKvSxa4.js";import"./_commonjsHelpers-CLD5em3H.js";import"./overlay-KZpfSxWH.js";import"./ods-tooltip2-CW12aP9b.js";import"./controls-DX883vx3.js";import"./index-DpXZhc7f.js";import"./ods-accordion2-C_uqOg6Y.js";import"./ods-badge-CjbpLGl8.js";import"./ods-breadcrumb-item2-C_Ah5FZN.js";import"./ods-link2-CtVFUlMR.js";import"./ods-card-CsxtEQHf.js";import"./ods-checkbox2-CJl-a8ad.js";import"./ods-clipboard2-CewZJu-c.js";import"./ods-input2-C6KOqFAM.js";import"./type-B5zI8QxY.js";import"./ods-code2-BL2TW0HP.js";import"./ods-combobox2-CyL0bVv9.js";import"./debounce-DRefBDpX.js";import"./ods-tag2-Bb2BMy9d.js";import"./ods-datepicker2-CijAhCPy.js";import"./locale-NOa-Gxlr.js";import"./ods-divider-Dtiri0aY.js";import"./ods-divider2-yzIshch6.js";import"./ods-drawer2-DKhK7oOX.js";import"./ods-file-upload2-Ca3mZ5BD.js";import"./ods-progress-bar2-Dg_V5kiw.js";import"./ods-form-field2-BDYkM6lU.js";import"./ods-icon-DTp5PnPI.js";import"./ods-input-CCQ46ZEm.js";import"./ods-link-BCeMi6SV.js";import"./ods-medium2-BnayTic8.js";import"./ods-message-DuyDaLcv.js";import"./ods-modal2-DCK89o-L.js";import"./ods-password2-D64-z8ym.js";import"./ods-phone-number2-BL58mHzY.js";import"./ods-popover2-mGbx5HiL.js";import"./ods-quantity2-7U22nj6z.js";import"./ods-radio2-DDJaSdNS.js";import"./ods-range2-wBjnlon-.js";import"./ods-skeleton2-B7sDasgF.js";import"./ods-switch-item2-D-SJNcDd.js";import"./ods-tabs2-ChMEr-fQ.js";import"./ods-table2-oe37kiP3.js";import"./ods-text-BO_pN8NQ.js";import"./ods-textarea2-BDOVTqwb.js";import"./ods-timepicker2-DVnCnUkw.js";import"./ods-toggle2-Bg02aln1.js";function l(r){const n={em:"em",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...p(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(d,{of:a,name:"Documentation"}),`
`,e.jsx(h,{of:a}),`
`,e.jsx(n.p,{children:e.jsxs(n.em,{children:["A ",e.jsx(n.strong,{children:"Pagination"})," component allows users to navigate through large sets of data by dividing the content into multiple pages."]})}),`
`,e.jsx(m,{of:c,sourceState:"none"}),`
`,e.jsx(s,{label:"Overview",level:2}),`
`,e.jsxs(u,{aliases:["Page navigation"],atomicType:g.molecule,figmaLink:"https://www.figma.com/design/9jDDTcR4a9jPRFcdjawAlf/ODS---UI-Kit?node-id=47-7743",githubUrl:"https://github.com/ovh/design-system/tree/master/packages/ods/src/components/pagination",name:"Pagination",relatedComponents:[{name:"Button"},{name:"Select",subtitle:"Form elements"},{name:"Tooltip"}],children:[e.jsxs(n.p,{children:["The ",e.jsx(n.strong,{children:"Pagination"})," component is used to divide content into discrete pages and provide navigation controls to move between them."]}),e.jsx(n.p,{children:"This component enhances usability by allowing users to browse through large sets of data without overwhelming the interface."}),e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Pagination"})," can include various controls like next/previous buttons and page numbers."]})]}),`
`,e.jsx(s,{label:"Anatomy",level:2}),`
`,e.jsx(n.p,{children:e.jsx(n.img,{src:"components/pagination/anatomy.png",alt:"Component anatomy",title:"Component anatomy"})}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Number of items Select"}),": grouping a defined number of items ",e.jsx(n.em,{children:"(optional)"})]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Total of items label"}),": A ",e.jsx(t,{kind:i.text,label:"Text",story:o.documentation}),", counting the total number of items ",e.jsx(n.em,{children:"(optional)"})]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Previous arrow icon Button"}),": let user navigate to the previous page"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Page number Buttons"}),": navigated to specific numbered page"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Current page Button"}),": highlight the current page navigated to"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Ellipsis Button"}),": shows the truncated pagination (in situations)"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Next arrow icon Button"}),": let user navigate to the next page"]}),`
`]}),`
`,e.jsx(s,{label:"Usage",level:2}),`
`,e.jsxs(n.p,{children:["A ",e.jsx(n.strong,{children:"Pagination"})," component is used in two situations :"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["To navigate among a ",e.jsx(t,{kind:i.table,label:"Table",story:o.documentation})," component"]}),`
`,e.jsx(n.li,{children:"To browse in a set of items (products list, ...)"}),`
`]}),`
`,e.jsx(s,{label:"Dos & Don'ts",level:3}),`
`,e.jsx(x,{donts:["- Use Pagination component for less than 2 pages to handle","- For an unpredicted number of pages, prefer the use of infinite scrolling rather than a Pagination"],dos:["- Use when user needs to maintain a sense of position and order inside a set of elements","- When using Pagination, please display preferably ~25 items of the related set on each page"]}),`
`,e.jsx(s,{label:"Placement",level:2}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Pagination"})," is presented to the user near the container it uses for pagination; it can be located just above or below it."]}),`
`,e.jsxs(n.p,{children:["Usually, the ",e.jsx(n.strong,{children:"Pagination"})," is end-aligned horizontally, as its usage is not principal to the container."]}),`
`,e.jsx(s,{label:"Behavior",level:2}),`
`,e.jsx(s,{label:"Amount of items per page",level:3}),`
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
`,e.jsx(s,{label:"Amount of pages",level:3}),`
`,e.jsxs(n.p,{children:["A maximum of 6 numbered page ",e.jsx(t,{kind:i.button,label:"Buttons",story:o.documentation})," can be visible at once, with a minimum of 1."]}),`
`,e.jsx(n.p,{children:"Arrow Buttons are always visible, no matter what the amount of pages."}),`
`,e.jsx(n.p,{children:"Depending on the current page number and the amount of pages, here are the different displays of the whole component:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["If amount of pages is less than 7, all numbered page ",e.jsx(t,{kind:i.button,label:"Buttons",story:o.documentation})," can be visible at once"]}),`
`,e.jsxs(n.li,{children:["If amount of pages is 7 or more :",`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["If current page is the 4th one or less, the first 5 numbered ",e.jsx(t,{kind:i.button,label:"Buttons",story:o.documentation})," are present, then an ellipsis and the last numbered ",e.jsx(t,{kind:i.button,label:"Button",story:o.documentation})," corresponding of the amount of pages"]}),`
`,e.jsxs(n.li,{children:["If current page is the 4th to last or more, the first page ",e.jsx(t,{kind:i.button,label:"Button",story:o.documentation})," is displayed followed by an ellipsis and the last 5 numbered ",e.jsx(t,{kind:i.button,label:"Buttons",story:o.documentation})]}),`
`,e.jsxs(n.li,{children:["If current page is between the previous bounds are displayed, in order :",`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["the first page ",e.jsx(t,{kind:i.button,label:"Button",story:o.documentation}),","]}),`
`,e.jsx(n.li,{children:"an ellipsis,"}),`
`,e.jsxs(n.li,{children:["3 numbered ",e.jsx(t,{kind:i.button,label:"Buttons",story:o.documentation}),", corresponding to : previous-to-current / current / next-to-current page,"]}),`
`,e.jsx(n.li,{children:"an ellipsis,"}),`
`,e.jsxs(n.li,{children:["the last numbered ",e.jsx(t,{kind:i.button,label:"Button",story:o.documentation})]}),`
`]}),`
`]}),`
`]}),`
`]}),`
`]}),`
`,e.jsx(s,{label:"Navigation",level:3}),`
`,e.jsxs(n.p,{children:["Current page ",e.jsx(t,{kind:i.button,label:"Button",story:o.documentation})," has a selected styling, yet it is a not clickable."]}),`
`,e.jsxs(n.p,{children:["If the selected page number is the first page, the previous page arrow ",e.jsx(t,{kind:i.button,label:"Button",story:o.documentation})," is disabled; same thing applies with the last page as selected and the next page arrow ",e.jsx(t,{kind:i.button,label:"Button",story:o.documentation})," disabled."]}),`
`,e.jsx(n.p,{children:"An event is triggered when the current page changes in the Pagination, as well as the items per page changes."}),`
`,e.jsx(s,{label:"Variation",level:2}),`
`,e.jsx(n.p,{children:"N/A"}),`
`,e.jsx(s,{label:"Accessibility",level:2}),`
`,e.jsxs(n.p,{children:["All ",e.jsx(t,{kind:i.button,label:"Buttons",story:o.documentation})," are accessible via tabulation controls."]}),`
`,e.jsxs(n.p,{children:["Previous and next page arrow ",e.jsx(t,{kind:i.button,label:"Buttons",story:o.documentation})," are labelled as their explicit usage."]})]})}function Ie(r={}){const{wrapper:n}={...p(),...r.components};return n?e.jsx(n,{...r,children:e.jsx(l,{...r})}):l(r)}export{Ie as default};
