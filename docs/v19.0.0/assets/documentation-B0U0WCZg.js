import{j as e}from"./jsx-runtime-VM66peLj.js";import{useMDXComponents as r}from"./index-DQB45XCM.js";import{M as a,C as l}from"./index-CTRIvuAa.js";import{B as i,O as c}from"./badge.stories-C6T64eP_.js";import{B as d}from"./Banner-DKEGGZmZ.js";import{I as m,A as h,B as u}from"./IdentityCard-DMALWF_P.js";import{H as s}from"./Heading-BKRI_kjA.js";import"./StorybookLink-DMr2bWgk.js";import"./index-D_CmzhJ4.js";import"./iframe-B1k00A9N.js";import"./index-ChzAxGiP.js";import"./index-CucsY3YN.js";import"./index-CXQShRbs.js";import"./index-DrFu-skq.js";import"./index-CkQHsVsO.js";import"./colors-DSObuHxd.js";import"./controls-BtiQQn1l.js";import"./ExternalLink-DJ00RbPw.js";import"./ods-react60-Yebt9vXY.js";import"./index-2w0W-O47-BJ19ihbZ.js";import"./Link-D8k51sak-CbRDKo-E.js";import"./ods-react214-B9lkGKUh.js";function o(t){const n={em:"em",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...r(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{of:i,name:"Documentation"}),`
`,e.jsx(d,{of:i}),`
`,e.jsx(n.p,{children:e.jsxs(n.em,{children:[e.jsx(n.strong,{children:"Badge"})," show concise metadata or the current status for an item, in a compact format."]})}),`
`,e.jsx(l,{of:c,sourceState:"none"}),`
`,e.jsx(s,{label:"Overview",level:2}),`
`,e.jsx(m,{aliases:["Chip (previous name)","Label"],atomicType:h.atom,figmaLink:"https://www.figma.com/design/9jDDTcR4a9jPRFcdjawAlf/ODS---UI-Kit?node-id=3-22285",githubUrl:"https://github.com/ovh/design-system/tree/master/packages/ods/src/components/badge",name:"Badge",children:e.jsxs(n.p,{children:["A ",e.jsx(n.strong,{children:"Badge"}),` component labels an item, a keyword or a status. They are non-interactive and used inline, next to the
title or text they complete.`]})}),`
`,e.jsx(s,{label:"Usage",level:2}),`
`,e.jsx(n.p,{children:"Badges are used for items that need to be labelled or categorized."}),`
`,e.jsx(n.p,{children:"It can refer to these examples of enhanced data :"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"A notification status"}),`
`,e.jsx(n.li,{children:"A marketing category"}),`
`,e.jsx(n.li,{children:"Additional product information"}),`
`]}),`
`,e.jsx(s,{label:"Notification Status",level:3}),`
`,e.jsx(n.p,{children:"The notification status can be used next to a menu entry, a label or an option ; in dashboards, Table or summary panels."}),`
`,e.jsx(n.p,{children:"There are four different sub-types of status, in order of severity:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Error"})," : Reserved for errors, malfunctions, as well as critical issues. System is unusable, or an action must be taken immediately."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Warning"})," : Reserved for critical messages that need the user attention and acknowledgment, but might not cause errors."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Information"})," : Provides information to users in context. Shouldn't replace regular content."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Success"})," : Reserved to provide to a static persistent success message."]}),`
`]}),`
`,e.jsx(s,{label:"Marketing category",level:3}),`
`,e.jsx(n.p,{children:"The marketing category is used in product Tiles or product descriptions; used as - temporary or permanent - marketing highlight."}),`
`,e.jsxs(n.p,{children:["It can contain categories like ",e.jsx(n.em,{children:'"Promotion", "Summer Deals", "Black Friday", "Limited Edition", "Flash Sales"'}),", ..."]}),`
`,e.jsx(s,{label:"Additional product information",level:3}),`
`,e.jsx(n.p,{children:"The product status is used in product Tiles or product descriptions, it is bound inside the product structure to add tags and information."}),`
`,e.jsx(n.p,{children:'All product statuses are of type "New", "Limited edition", "Sold out"'}),`
`,e.jsx(s,{label:"Dos & Don'ts",level:3}),`
`,e.jsx(u,{donts:["- Don't use Badge as interactive element (e.g., buttons or filters)","- Don't write long sentences or complex phrases inside a Badge","- Don't use too many Badges in the same line or component, as this creates visual clutter","- Don't place Badge far from the content they describe, proximity reinforces meaning"],dos:["- Keep the label short, specific, and readable (ideally one or two words)","- Use Badge to indicate status, category, or metadata","- Place Badge inline with related content, such as next to titles or list items","- Use Badge to complement information, not replace it. They should add clarity, not create ambiguity"]}),`
`,e.jsx(s,{label:"Best Practices in Context",level:3}),`
`,e.jsx(n.p,{children:e.jsx(n.img,{src:"components/badge/anatomy.png",alt:"Component anatomy",title:"Component anatomy"})}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.strong,{children:"Badge"})}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Icon"})," - optional (left or right)"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Label"})," - optional (specific use case only)"]}),`
`]}),`
`,e.jsx(s,{label:"Placement",level:2}),`
`,e.jsx(n.p,{children:"Since it provides extra information to a sibling element, in can be used inside components in various places, referring to the nature of its environment."}),`
`,e.jsxs(n.p,{children:["Multiple ",e.jsx(n.strong,{children:"Badges"})," can be displayed:"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"on a single line"}),`
`,e.jsx(n.li,{children:"stacked vertically"}),`
`]}),`
`,e.jsx(s,{label:"Behavior",level:2}),`
`,e.jsxs(n.p,{children:["As the ",e.jsx(n.strong,{children:"Badge"})," is an informational component, its default behavior is being read-only."]}),`
`,e.jsxs(n.p,{children:["An icon can be displayed on the left or right of the ",e.jsx(n.strong,{children:"Badge"})," label content. Icon-only ",e.jsx(n.strong,{children:"Badge"})," also exists, but it must meet accessibility requirements. See Accessibility section below."]}),`
`,e.jsx(s,{label:"Variation",level:2}),`
`,e.jsx(s,{label:"Color",level:3}),`
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
`,e.jsx(s,{label:"Navigation",level:2}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.strong,{children:"Badge"})," component is non-interactive and does not receive keyboard focus. It is purely decorative and used to label an item, keyword, or status."]}),`
`,e.jsx(s,{label:"Accessibility",level:2}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Badges"})," are read by screen readers as regular text."]}),`
`,e.jsxs(n.p,{children:["Icon-only ",e.jsx(n.strong,{children:"Badge"})," is only used in very specific cases. In the case of its use, it should be accompanied by a hoverable/tab-able tooltip to provide further context."]})]})}function U(t={}){const{wrapper:n}={...r(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(o,{...t})}):o(t)}export{U as default};
