import{j as e}from"./jsx-runtime-VM66peLj.js";import{useMDXComponents as c}from"./index-DQB45XCM.js";import{M as d,C as m}from"./index-BlaLg9GY.js";import{B as a,O as h}from"./badge.stories-OsXcQ6aw.js";import{B as x}from"./Banner-CANn_RZm.js";import{I as u,A as p,B as j}from"./IdentityCard-DkdK44g3.js";import{H as s}from"./Heading-6Mfikk-c.js";import{S as i,a as o,O as r}from"./StorybookLink-Dek5KO7Z.js";import"./index-D_CmzhJ4.js";import"./iframe-CGgj-FAD.js";import"./index-ChzAxGiP.js";import"./index-CucsY3YN.js";import"./index-CXQShRbs.js";import"./index-DrFu-skq.js";import"./index-CkQHsVsO.js";import"./controls-BtiQQn1l.js";import"./ExternalLink-lH7YZu4p.js";import"./ods-react49-9IXPzWp7.js";import"./index-2w0W-O47-BJ19ihbZ.js";import"./Link-Ck4D7Gly-DoENOEBg.js";function l(t){const n={em:"em",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...c(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(d,{of:a,name:"Documentation"}),`
`,e.jsx(x,{of:a}),`
`,e.jsx(n.p,{children:e.jsxs(n.em,{children:[e.jsx(n.strong,{children:"Badge"})," show concise metadata or the current status for an item, in a compact format."]})}),`
`,e.jsx(m,{of:h,sourceState:"none"}),`
`,e.jsx(s,{label:"Overview",level:2}),`
`,e.jsx(u,{aliases:["Chip (previous name)","Label"],atomicType:p.atom,figmaLink:"https://www.figma.com/design/9jDDTcR4a9jPRFcdjawAlf/ODS---UI-Kit?node-id=3-22285",githubUrl:"https://github.com/ovh/design-system/tree/master/packages/ods/src/components/badge",name:"Badge",relatedComponents:[{name:"Tag"}],children:e.jsxs(n.p,{children:["A ",e.jsx(n.strong,{children:"Badge"}),` component labels an item, a keyword or a status. They are non-interactive and used inline, next to the
title or `,e.jsx(i,{kind:r.text,story:o.documentation,children:"Text"})," they complete."]})}),`
`,e.jsx(s,{label:"Anatomy",level:2}),`
`,e.jsx(n.p,{children:e.jsx(n.img,{src:"components/badge/anatomy.png",alt:"Component anatomy",title:"Component anatomy"})}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.strong,{children:"Container"})}),`
`,e.jsxs(n.li,{children:[e.jsx(i,{kind:r.icon,story:o.documentation,children:"Icon"})," - (optional)"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Label"})," - (optional)"]}),`
`]}),`
`,e.jsx(s,{label:"Usage",level:2}),`
`,e.jsx(n.p,{children:"Badges are used for items that need to be labelled or categorized."}),`
`,e.jsx(n.p,{children:"It can refer to these examples of enhanced data :"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"A notification status"}),`
`,e.jsx(n.li,{children:"A marketing category"}),`
`,e.jsx(n.li,{children:"Additional product information"}),`
`]}),`
`,e.jsx(s,{label:"Notification Status",level:3}),`
`,e.jsxs(n.p,{children:["The notification status can be used next to a menu entry, a label or an option ; in dashboards, ",e.jsx(i,{kind:r.table,story:o.documentation,children:"Table"})," or summary panels."]}),`
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
`,e.jsx(j,{donts:[],dos:["- The label must be short and clear."]}),`
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
`,e.jsxs(n.p,{children:["An ",e.jsx(n.strong,{children:"Icon"})," can be displayed on the left or right of the ",e.jsx(n.strong,{children:"Badge"})," label content. ",e.jsx(n.strong,{children:"Icon-only Badge"})," also exists but it must meet accessibility requirements. See Accessibility section below."]}),`
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
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Badges"})," are read by screen readers as regular ",e.jsx(i,{kind:r.text,story:o.documentation,children:"Text"}),"."]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Icon-only Badge"})," is only used in very specific cases. In the case of its use, it should be accompanied by a hoverable/tab-able ",e.jsx(i,{kind:r.tooltip,story:o.documentation,children:"Tooltip"})," to provide further context."]})]})}function _(t={}){const{wrapper:n}={...c(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(l,{...t})}):l(t)}export{_ as default};
