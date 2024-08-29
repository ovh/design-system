import{j as n}from"./jsx-runtime-Dn0LW--f.js";import{u as o}from"./index-DeyDdHvX.js";import{M as a,C as d,d as i}from"./index-BM3JsZOq.js";import{B as c}from"./banner-DPlTyHjv.js";import{B as t,O as l}from"./badge.stories-BSEtCEC6.js";import{I as h,A as m}from"./identity-card-CwN41yUF.js";import"./iframe-6_jBXMSq.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-B_J8iUie.js";import"./index-DX_4BEHg.js";import"./index-DrFu-skq.js";import"./index-DryTTbHl.js";import"./lit-html-D-ZEPr28.js";import"./control-C1r2wu67.js";import"./ods-toggle2-LnXcgd5r.js";import"./chunk-FAE4I7JY-v0Th3BC0.js";function r(s){const e={a:"a",em:"em",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...o(),...s.components};return n.jsxs(n.Fragment,{children:[n.jsx(a,{of:t,name:"Documentation"}),`
`,n.jsx(c,{of:t}),`
`,n.jsx(e.p,{children:n.jsxs(e.em,{children:[n.jsx(e.strong,{children:"Badge"})," show concise metadata or the current status for an item, in a compact format."]})}),`
`,n.jsx(d,{of:l,sourceState:"none"}),`
`,n.jsx(e.h2,{id:"overview",children:"Overview"}),`
`,n.jsxs("div",{className:"documentation-overview",children:[n.jsx("div",{children:n.jsxs(e.p,{children:["A ",n.jsx(e.strong,{children:"Badge"}),` component labels an item, a keyword or a status. They are non-interactive and used inline, next to the
title or `,n.jsx(e.a,{href:"?path=/docs/ods-components-text--documentation",children:n.jsx(e.strong,{children:"Text"})})," they complete."]})}),n.jsx(h,{aliases:["Chip (previous name)","Label"],atomicType:m.atom,className:"documentation-overview__table",figmaLink:"https://www.figma.com/design/9jDDTcR4a9jPRFcdjawAlf/ODS---UI-Kit?node-id=3-22285",githubUrl:"https://github.com/ovh/design-system/tree/master/packages/ods/src/components/badge",name:"Badge",relatedComponents:[{name:"Tag"}]})]}),`
`,n.jsx(e.h2,{id:"anatomy",children:"Anatomy"}),`
`,n.jsx(e.p,{children:n.jsx(e.img,{src:"components/badge/anatomy.png",alt:"Component anatomy",title:"Component anatomy"})}),`
`,n.jsxs(e.ol,{children:[`
`,n.jsx(e.li,{children:n.jsx(e.strong,{children:"Container"})}),`
`,n.jsxs(e.li,{children:[n.jsx(e.a,{href:"?path=/docs/ods-components-icon--documentation",children:n.jsx(e.strong,{children:"Icon"})})," - (optional)"]}),`
`,n.jsx(e.li,{children:n.jsx(e.strong,{children:"Label"})}),`
`]}),`
`,n.jsx(e.h2,{id:"usage",children:"Usage"}),`
`,n.jsx(e.p,{children:"Chips are used for items that need to be labelled or categorized."}),`
`,n.jsx(e.p,{children:"It can refer to these examples of enhanced data :"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"A notification status"}),`
`,n.jsx(e.li,{children:"A marketing category"}),`
`,n.jsx(e.li,{children:"Additional product information"}),`
`]}),`
`,n.jsx(e.h4,{id:"notification-status",children:"Notification Status"}),`
`,n.jsxs(e.p,{children:["The notification status can be used next to a menu entry, a label or an option ; in dashboards, ",n.jsx(e.a,{href:"?path=/docs/ods-components-table--documentation",children:n.jsx(e.strong,{children:"Table"})})," or summary panels."]}),`
`,n.jsx(e.p,{children:"There are four different sub-types of status, in order of severity:"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Error"})," : Reserved for errors, malfunctions, as well as critical issues. System is unusable, or an action must be taken immediately."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Warning"})," : Reserved for critical messages that need the user attention and acknowledgment, but might not cause errors."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Information"})," : Provides information to users in context. Shouldn’t replace regular content."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Success"})," : Reserved to provide to a static persistent success message."]}),`
`]}),`
`,n.jsx(e.h4,{id:"marketing-category",children:"Marketing category"}),`
`,n.jsx(e.p,{children:"The marketing category is used in product Tiles or product descriptions; used as - temporary or permanent - marketing highlight."}),`
`,n.jsxs(e.p,{children:["It can contain categories like ",n.jsx(e.em,{children:'"Promotion", "Summer Deals", "Black Friday", "Limited Edition", "Flash Sales"'}),", ..."]}),`
`,n.jsx(e.h4,{id:"additional-product-information",children:"Additional product information"}),`
`,n.jsx(e.p,{children:"The product status is used in product Tiles or product descriptions, it is bound inside the product structure to add tags and information."}),`
`,n.jsx(e.p,{children:'All product statuses are of type "New", "Limited edition", "Sold out"'}),`
`,n.jsx(e.h3,{id:"dos--donts",children:"Dos & Don'ts"}),`
`,n.jsx(i,{className:"documentation-do-table",children:`
| ✅ Do                                                                                                                                                                           |
|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| - The label must be short and clear.                                                                                                                                           |
`}),`
`,n.jsx(i,{className:"documentation-dont-table",children:`
| ❌ Don't                                                                                                                                                                          |
|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| - Avoid using icon-only **Badges**.                                                                                                                                              |
`}),`
`,n.jsx(e.h2,{id:"placement",children:"Placement"}),`
`,n.jsx(e.p,{children:"Since it provides extra information to a sibling element, in can be used inside components in various places, referring to the nature of its environment."}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Badges"})," have an automatic width, but they can widen to match the container."]}),`
`,n.jsxs(e.p,{children:["Multiple ",n.jsx(e.strong,{children:"Badges"})," can be displayed:"]}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"on a single line"}),`
`,n.jsx(e.li,{children:"stacked vertically"}),`
`]}),`
`,n.jsx(e.h2,{id:"behavior",children:"Behavior"}),`
`,n.jsxs(e.p,{children:["As the ",n.jsx(e.strong,{children:"Badge"})," is an informational component, its default behavior is being read-only."]}),`
`,n.jsx(e.h2,{id:"variation",children:"Variation"}),`
`,n.jsx(e.h3,{id:"variant",children:"Variant"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Information"})," ",n.jsx(e.em,{children:"(default)"}),": display neutral or informational messages, such as updates, notifications, or general status."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Success"}),": indicate positive outcomes or successful actions, such as completed tasks or achievements."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Warning"}),": alert users to potential issues or cautionary information, signaling that attention is needed."]}),`
`]}),`
`,n.jsx(e.h3,{id:"size",children:"Size"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Small"}),": compact and unobtrusive counts or statuses, suitable for tight spaces and minimalistic designs."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Medium"})," ",n.jsx(e.em,{children:"(default)"}),": main size for displaying ",n.jsx(e.strong,{children:"Badges"}),"."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Large"}),": prominent and easily noticeable counts or statuses, suitable for emphasizing important information."]}),`
`]}),`
`,n.jsx(e.h2,{id:"accessibility",children:"Accessibility"}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Badges"})," are read by screen readers as regular ",n.jsx(e.a,{href:"?path=/docs/ods-components-text--documentation",children:n.jsx(e.strong,{children:"Text"})}),"."]})]})}function M(s={}){const{wrapper:e}={...o(),...s.components};return e?n.jsx(e,{...s,children:n.jsx(r,{...s})}):r(s)}export{M as default};
