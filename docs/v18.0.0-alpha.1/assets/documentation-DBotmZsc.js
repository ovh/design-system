import{j as e}from"./jsx-runtime-C_5uCoOk.js";import{u as d}from"./index-BNSrq6w-.js";import{M as c,C as l,d as r}from"./index-DnV51lgW.js";import{B as h}from"./banner-CAPzkNgn.js";import{B as o,O as m}from"./badge.stories-VvuGAIkm.js";import{O as i}from"./index-BUOQImqF.js";import{O as t}from"./index-CEZbmgmh.js";import"./iframe-Cm7AUSBL.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-B_J8iUie.js";import"./index-DX_4BEHg.js";import"./index-DrFu-skq.js";import"./lit-html-D-ZEPr28.js";import"./control-C1r2wu67.js";import"./ods-toggle2-CgWFvVwm.js";function a(s){const n={a:"a",em:"em",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...d(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(c,{of:o,name:"Documentation"}),`
`,e.jsx(h,{of:o}),`
`,e.jsx(n.p,{children:e.jsxs(n.em,{children:[e.jsx(n.strong,{children:"Badge"})," show concise metadata or the current status for an item, in a compact format."]})}),`
`,e.jsx(l,{of:m,sourceState:"none"}),`
`,e.jsx(n.h2,{id:"overview",children:"Overview"}),`
`,e.jsxs("div",{children:[e.jsx("div",{id:"description",children:e.jsxs(n.p,{children:["A ",e.jsx(n.strong,{children:"Badge"}),` component labels an item, a keyword or a status. They are non-interactive and used inline, next to the
title or `,e.jsx(n.a,{href:"?path=/docs/ods-components-text--documentation",children:e.jsx(n.strong,{children:"Text"})})," they complete."]})}),e.jsx("table",{children:e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("th",{scope:"row",children:"Name"}),e.jsx("td",{children:e.jsx("strong",{children:"Badge"})})]}),e.jsxs("tr",{children:[e.jsx("th",{scope:"row",children:"Also known as"}),e.jsx("td",{children:e.jsx("em",{children:"Chip (previous name), Label"})})]}),e.jsxs("tr",{children:[e.jsx("th",{scope:"row",children:"Atomic type"}),e.jsx("td",{children:e.jsxs("a",{href:"https://atomicdesign.bradfrost.com/chapter-2/#atoms",children:["Atom",e.jsx(i,{name:t.externalLink,style:{fontSize:".7rem",paddingLeft:".3rem",paddingRight:".2rem"}})]})})]}),e.jsxs("tr",{children:[e.jsx("th",{scope:"row",children:"Related component(s)"}),e.jsx("td",{children:e.jsx(n.p,{children:e.jsx(n.a,{href:"?path=/docs/ods-components-tag--documentation",children:e.jsx(n.strong,{children:"Tag"})})})})]}),e.jsxs("tr",{children:[e.jsx("th",{scope:"row",children:"Links"}),e.jsxs("td",{children:[e.jsxs("a",{href:"https://www.figma.com/proto/tIKzHa5KvHHyosgIgyBswB/Design-Tokens",children:["Design",e.jsx(i,{name:t.externalLink,style:{fontSize:".7rem",paddingLeft:".3rem",paddingRight:".2rem"}})]}),e.jsx("br",{}),e.jsxs("a",{href:"https://github.com/ovh/design-system/tree/master/packages/components/src/badge",children:["Github",e.jsx(i,{name:t.externalLink,style:{fontSize:".7rem",paddingLeft:".3rem",paddingRight:".2rem"}})]})]})]})]})})]}),`
`,e.jsx(n.h2,{id:"anatomy",children:"Anatomy"}),`
`,e.jsx(n.p,{children:e.jsx(n.img,{src:"components/badge/anatomy.png",alt:"Component anatomy",title:"Component anatomy"})}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.strong,{children:"Container"})}),`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"?path=/docs/ods-components-icon--documentation",children:e.jsx(n.strong,{children:"Icon"})})," - (optional)"]}),`
`,e.jsx(n.li,{children:e.jsx(n.strong,{children:"Label"})}),`
`]}),`
`,e.jsx(n.h2,{id:"usage",children:"Usage"}),`
`,e.jsx(n.p,{children:"Chips are used for items that need to be labelled or categorized."}),`
`,e.jsx(n.p,{children:"It can refer to these examples of enhanced data :"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"A notification status"}),`
`,e.jsx(n.li,{children:"A marketing category"}),`
`,e.jsx(n.li,{children:"Additional product information"}),`
`]}),`
`,e.jsx(n.h4,{id:"notification-status",children:"Notification Status"}),`
`,e.jsxs(n.p,{children:["The notification status can be used next to a menu entry, a label or an option ; in dashboards, ",e.jsx(n.a,{href:"?path=/docs/ods-components-table--documentation",children:e.jsx(n.strong,{children:"Table"})})," or summary panels."]}),`
`,e.jsx(n.p,{children:"There are four different sub-types of status, in order of severity:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Error"})," : Reserved for errors, malfunctions, as well as critical issues. System is unusable, or an action must be taken immediately."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Warning"})," : Reserved for critical messages that need the user attention and acknowledgment, but might not cause errors."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Information"})," : Provides information to users in context. Shouldn’t replace regular content."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Success"})," : Reserved to provide to a static persistent success message."]}),`
`]}),`
`,e.jsx(n.h4,{id:"marketing-category",children:"Marketing category"}),`
`,e.jsx(n.p,{children:"The marketing category is used in product Tiles or product descriptions; used as - temporary or permanent - marketing highlight."}),`
`,e.jsxs(n.p,{children:["It can contain categories like ",e.jsx(n.em,{children:'"Promotion", "Summer Deals", "Black Friday", "Limited Edition", "Flash Sales"'}),", ..."]}),`
`,e.jsx(n.h4,{id:"additional-product-information",children:"Additional product information"}),`
`,e.jsx(n.p,{children:"The product status is used in product Tiles or product descriptions, it is bound inside the product structure to add tags and information."}),`
`,e.jsx(n.p,{children:'All product statuses are of type "New", "Limited edition", "Sold out"'}),`
`,e.jsx(n.h3,{id:"dos--donts",children:"Dos & Don'ts"}),`
`,e.jsx(r,{children:`
| ✅ Do                                                                                                                                                                           |
|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| - The label must be short and clear.                                                                                                                                           |
`}),`
`,e.jsx(r,{children:`
| ❌ Don't                                                                                                                                                                          |
|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| - Avoid using icon-only **Badges**.                                                                                                                                              |
`}),`
`,e.jsx(n.h2,{id:"placement",children:"Placement"}),`
`,e.jsx(n.p,{children:"Since it provides extra information to a sibling element, in can be used inside components in various places, referring to the nature of its environment."}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Badges"})," have an automatic width, but they can widen to match the container."]}),`
`,e.jsxs(n.p,{children:["Multiple ",e.jsx(n.strong,{children:"Badges"})," can be displayed:"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"on a single line"}),`
`,e.jsx(n.li,{children:"stacked vertically"}),`
`]}),`
`,e.jsx(n.h2,{id:"behavior",children:"Behavior"}),`
`,e.jsxs(n.p,{children:["As the ",e.jsx(n.strong,{children:"Badge"})," is an informational component, its default behavior is being read-only."]}),`
`,e.jsx(n.h2,{id:"variation",children:"Variation"}),`
`,e.jsx(n.h3,{id:"variant",children:"Variant"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Information"})," ",e.jsx(n.em,{children:"(default)"}),": display neutral or informational messages, such as updates, notifications, or general status."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Success"}),": indicate positive outcomes or successful actions, such as completed tasks or achievements."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Warning"}),": alert users to potential issues or cautionary information, signaling that attention is needed."]}),`
`]}),`
`,e.jsx(n.h3,{id:"size",children:"Size"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Small"}),": compact and unobtrusive counts or statuses, suitable for tight spaces and minimalistic designs."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Medium"})," ",e.jsx(n.em,{children:"(default)"}),": main size for displaying ",e.jsx(n.strong,{children:"Badges"}),"."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Large"}),": prominent and easily noticeable counts or statuses, suitable for emphasizing important information."]}),`
`]}),`
`,e.jsx(n.h2,{id:"accessibility",children:"Accessibility"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Badges"})," are read by screen readers as regular ",e.jsx(n.a,{href:"?path=/docs/ods-components-text--documentation",children:e.jsx(n.strong,{children:"Text"})}),"."]})]})}function D(s={}){const{wrapper:n}={...d(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(a,{...s})}):a(s)}export{D as default};
