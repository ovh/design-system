import{j as e}from"./jsx-runtime-BtDUu9js.js";import{u as a}from"./index-DZL6x4lo.js";import{M as l,C as c}from"./index-CYldocI7.js";import{B as o,O as d}from"./badge.stories-BHfLIV7A.js";import{B as m}from"./Banner-CW_U-IGN.js";import{I as h,A as u,B as x}from"./IdentityCard-BLiY5u4s.js";import{H as s}from"./Heading-DwuTnCox.js";import{S as i}from"./StorybookLink-BiRTKXGy.js";import"./iframe-D7GxXTWn.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-B_J8iUie.js";import"./index-DX_4BEHg.js";import"./index-DrFu-skq.js";import"./index-BvAGq-5Z.js";import"./lit-html-D-ZEPr28.js";import"./controls-DpsgTNdU.js";import"./index-DtXgNHxz.js";function r(t){const n={a:"a",em:"em",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...a(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{of:o,name:"Documentation"}),`
`,e.jsx(m,{of:o}),`
`,e.jsx(n.p,{children:e.jsxs(n.em,{children:[e.jsx(n.strong,{children:"Badge"})," show concise metadata or the current status for an item, in a compact format."]})}),`
`,e.jsx(c,{of:d,sourceState:"none"}),`
`,e.jsx(s,{label:"Overview",level:2}),`
`,e.jsx(h,{aliases:["Chip (previous name)","Label"],atomicType:u.atom,figmaLink:"https://www.figma.com/design/9jDDTcR4a9jPRFcdjawAlf/ODS---UI-Kit?node-id=3-22285",githubUrl:"https://github.com/ovh/design-system/tree/master/packages/ods/src/components/badge",name:"Badge",relatedComponents:[{name:"Tag"}],children:e.jsxs(n.p,{children:["A ",e.jsx(n.strong,{children:"Badge"}),` component labels an item, a keyword or a status. They are non-interactive and used inline, next to the
title or `,e.jsx(i,{kind:"ODS Components/Text",label:"Text",story:"Documentation"})," they complete."]})}),`
`,e.jsx(s,{label:"Anatomy",level:2}),`
`,e.jsx(n.p,{children:e.jsx(n.img,{src:"components/badge/anatomy.png",alt:"Component anatomy",title:"Component anatomy"})}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.strong,{children:"Container"})}),`
`,e.jsxs(n.li,{children:[e.jsx(i,{kind:"ODS Components/Icon",label:"Icon",story:"Documentation"})," - (optional)"]}),`
`,e.jsx(n.li,{children:e.jsx(n.strong,{children:"Label"})}),`
`]}),`
`,e.jsx(s,{label:"Usage",level:2}),`
`,e.jsx(n.p,{children:"Chips are used for items that need to be labelled or categorized."}),`
`,e.jsx(n.p,{children:"It can refer to these examples of enhanced data :"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"A notification status"}),`
`,e.jsx(n.li,{children:"A marketing category"}),`
`,e.jsx(n.li,{children:"Additional product information"}),`
`]}),`
`,e.jsx(s,{label:"Notification Status",level:3}),`
`,e.jsxs(n.p,{children:["The notification status can be used next to a menu entry, a label or an option ; in dashboards, ",e.jsx(n.a,{href:"?path=/docs/ods-components-table--documentation",children:e.jsx(n.strong,{children:"Table"})})," or summary panels."]}),`
`,e.jsx(n.p,{children:"There are four different sub-types of status, in order of severity:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Error"})," : Reserved for errors, malfunctions, as well as critical issues. System is unusable, or an action must be taken immediately."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Warning"})," : Reserved for critical messages that need the user attention and acknowledgment, but might not cause errors."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Information"})," : Provides information to users in context. Shouldn’t replace regular content."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Success"})," : Reserved to provide to a static persistent success message."]}),`
`]}),`
`,e.jsx(s,{label:"Marketing category",level:3}),`
`,e.jsx(n.p,{children:"The marketing category is used in product Tiles or product descriptions; used as - temporary or permanent - marketing highlight."}),`
`,e.jsxs(n.p,{children:["It can contain categories like ",e.jsx(n.em,{children:'"Promotion", "Summer Deals", "Black Friday", "Limited Edition", "Flash Sales"'}),", ..."]}),`
`,e.jsx(s,{label:"Additional product information",level:3}),`
`,e.jsx(n.p,{children:"The product status is used in product Tiles or product descriptions, it is bound inside the product structure to add tags and information."}),`
`,e.jsx(n.p,{children:'All product statuses are of type "New", "Limited edition", "Sold out"'}),`
`,e.jsx(s,{label:"Dos & Don'ts",level:3}),`
`,e.jsx(x,{donts:["- Avoid using icon-only Badges."],dos:["- The label must be short and clear."]}),`
`,e.jsx(s,{label:"Placement",level:2}),`
`,e.jsx(n.p,{children:"Since it provides extra information to a sibling element, in can be used inside components in various places, referring to the nature of its environment."}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Badges"})," have an automatic width, but they can widen to match the container."]}),`
`,e.jsxs(n.p,{children:["Multiple ",e.jsx(n.strong,{children:"Badges"})," can be displayed:"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"on a single line"}),`
`,e.jsx(n.li,{children:"stacked vertically"}),`
`]}),`
`,e.jsx(s,{label:"Behavior",level:2}),`
`,e.jsxs(n.p,{children:["As the ",e.jsx(n.strong,{children:"Badge"})," is an informational component, its default behavior is being read-only."]}),`
`,e.jsx(s,{label:"Variation",level:2}),`
`,e.jsx(s,{label:"Variant",level:3}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Information"})," ",e.jsx(n.em,{children:"(default)"}),": display neutral or informational messages, such as updates, notifications, or general status."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Success"}),": indicate positive outcomes or successful actions, such as completed tasks or achievements."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Warning"}),": alert users to potential issues or cautionary information, signaling that attention is needed."]}),`
`]}),`
`,e.jsx(s,{label:"Size",level:3}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Small"}),": compact and unobtrusive counts or statuses, suitable for tight spaces and minimalistic designs."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Medium"})," ",e.jsx(n.em,{children:"(default)"}),": main size for displaying ",e.jsx(n.strong,{children:"Badges"}),"."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Large"}),": prominent and easily noticeable counts or statuses, suitable for emphasizing important information."]}),`
`]}),`
`,e.jsx(s,{label:"Accessibility",level:2}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Badges"})," are read by screen readers as regular ",e.jsx(i,{kind:"ODS Components/Text",label:"Text",story:"Documentation"}),"."]})]})}function O(t={}){const{wrapper:n}={...a(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(r,{...t})}):r(t)}export{O as default};
