import{j as e}from"./jsx-runtime-Cfl8ynUo.js";import{useMDXComponents as d}from"./index-ZwkxtaJJ.js";import{a as r,l as o}from"./ods-react64-C395g5lW.js";import{M as h}from"./index-BsyKfokc.js";import{B as l,O as m,A as p,a as u,b as x,c as g}from"./badge.stories-Cbiw0-cJ.js";import{A as j}from"./Anatomy-DkXJCwiR.js";import{B as b}from"./Banner-Dk3Varrq.js";import{I as f,B as y}from"./IdentityCard-nmm3PcaS.js";import{C as i}from"./Canvas-DRy1Z7es.js";import{E as a}from"./ExternalLink-C9tV86xX.js";import{H as n}from"./Heading-Wb_br1IW.js";import"./index-jIWwRBLr.js";import"./index-CWkFp9WS-BSIT86NH.js";import"./iframe-B_YeBgB7.js";import"./index-DWDEzXrj.js";import"./index-N93khynk.js";import"./index-CXQShRbs.js";import"./index-DrFu-skq.js";import"./index-CqY9YpN0.js";import"./colors-DSObuHxd.js";import"./icon-name-BpdEc4-2.js";import"./TooltipTrigger-Bh-jDz_G.js";import"./overlay-CZHjGBMC.js";import"./portal-Dz6APLpY.js";import"./use-locale-context-Da8UBLVe.js";import"./use-presence-BpdcDhnz.js";import"./use-event-c9j7vq_1.js";import"./index-C73mxVPS.js";import"./index-BY2p2mzr.js";import"./context-C_-r2uoG.js";import"./controls-BtiQQn1l.js";import"./Table-DVdtSe4m-Co7uf3pc.js";import"./Table-Bq5w2nKq.js";import"./TooltipTrigger-_KsR7_3f-BTMkItof.js";import"./ods-react114-5kwUyuQy.js";import"./index-DZ9YAGlW.js";import"./lz-string-U2heoObX.js";import"./meta-DxXVpXmq.js";import"./source-CPEZJ6oD.js";import"./ResetTheme-BVzaMHe3.js";import"./tokens-VHDJ0kGa.js";import"./Link-BhqYqKFa-BDwROQOD.js";import"./Divider-DmVNyNnn-DCNXheUh.js";function c(t){const s={code:"code",em:"em",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...d(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(h,{of:l,name:"Documentation"}),`
`,e.jsx(b,{of:l}),`
`,e.jsx(s.p,{children:e.jsxs(s.em,{children:[e.jsx(s.strong,{children:"Badge"})," show concise metadata or the current status for an item, in a compact format."]})}),`
`,e.jsx(i,{of:m,sourceState:"none"}),`
`,e.jsx(n,{label:"Overview",level:2}),`
`,e.jsx(f,{aliases:["Chip (previous name)","Label"],figmaLink:"https://www.figma.com/design/9jDDTcR4a9jPRFcdjawAlf/ODS---UI-Kit?node-id=3-22285",githubUrl:"https://github.com/ovh/design-system/tree/master/packages/ods-react/src/components/badge",name:"Badge",children:e.jsxs(s.p,{children:["A ",e.jsx(s.strong,{children:"Badge"}),` component labels an item, a keyword or a status. They are non-interactive and used inline, next to the
title or text they complete.`]})}),`
`,e.jsx(n,{label:"Usage",level:2}),`
`,e.jsx(s.p,{children:"Badges are used for items that need to be labelled or categorized."}),`
`,e.jsx(s.p,{children:"It can refer to these examples of enhanced data :"}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsx(s.li,{children:"A notification status"}),`
`,e.jsx(s.li,{children:"A marketing category"}),`
`,e.jsx(s.li,{children:"Additional product information"}),`
`]}),`
`,e.jsx(n,{label:"Notification Status",level:3}),`
`,e.jsx(s.p,{children:"The notification status can be used next to a menu entry, a label or an option ; in dashboards, Table or summary panels."}),`
`,e.jsx(s.p,{children:"There are four different sub-types of status, in order of severity:"}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Error"})," : Reserved for errors, malfunctions, as well as critical issues. System is unusable, or an action must be taken immediately."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Warning"})," : Reserved for critical messages that need the user attention and acknowledgment, but might not cause errors."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Information"})," : Provides information to users in context. Shouldn't replace regular content."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Success"})," : Reserved to provide to a static persistent success message."]}),`
`]}),`
`,e.jsx(n,{label:"Marketing category",level:3}),`
`,e.jsx(s.p,{children:"The marketing category is used in product Tiles or product descriptions; used as - temporary or permanent - marketing highlight."}),`
`,e.jsxs(s.p,{children:["It can contain categories like ",e.jsx(s.em,{children:'"Promotion", "Summer Deals", "Black Friday", "Limited Edition", "Flash Sales"'}),", ..."]}),`
`,e.jsx(n,{label:"Additional product information",level:3}),`
`,e.jsx(s.p,{children:"The product status is used in product Tiles or product descriptions, it is bound inside the product structure to add tags and information."}),`
`,e.jsx(s.p,{children:'All product statuses are of type "New", "Limited edition", "Sold out"'}),`
`,e.jsx(n,{label:"Dos & Don'ts",level:3}),`
`,e.jsx(y,{donts:["- Don't use Badge as interactive element (e.g., buttons or filters)","- Don't write long sentences or complex phrases inside a Badge","- Don't use too many Badges in the same line or component, as this creates visual clutter","- Don't place Badge far from the content they describe, proximity reinforces meaning"],dos:["- Keep the label short, specific, and readable (ideally one or two words)","- Use Badge to indicate status, category, or metadata","- Place Badge inline with related content, such as next to titles or list items","- Use Badge to complement information, not replace it. They should add clarity, not create ambiguity"]}),`
`,e.jsx(n,{label:"Best Practices in Context",level:3}),`
`,e.jsx(j,{src:"components/badge/anatomy.png"}),`
`,e.jsxs(s.ol,{children:[`
`,e.jsx(s.li,{children:e.jsx(s.strong,{children:"Badge"})}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Icon"})," - optional (left or right)"]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Label"})," - optional (specific use case only)"]}),`
`]}),`
`,e.jsx(n,{label:"Placement",level:2}),`
`,e.jsx(s.p,{children:"Since it provides extra information to a sibling element, in can be used inside components in various places, referring to the nature of its environment."}),`
`,e.jsxs(s.p,{children:["Multiple ",e.jsx(s.strong,{children:"Badges"})," can be displayed:"]}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsx(s.li,{children:"on a single line"}),`
`,e.jsx(s.li,{children:"stacked vertically"}),`
`]}),`
`,e.jsx(n,{label:"Behavior",level:2}),`
`,e.jsxs(s.p,{children:["As the ",e.jsx(s.strong,{children:"Badge"})," is an informational component, its default behavior is being read-only."]}),`
`,e.jsxs(s.p,{children:["An icon can be displayed on the left or right of the ",e.jsx(s.strong,{children:"Badge"})," label content. Icon-only ",e.jsx(s.strong,{children:"Badge"})," also exists, but it must meet accessibility requirements. See Accessibility section below."]}),`
`,e.jsx(n,{label:"Variation",level:2}),`
`,e.jsx(n,{label:"Color",level:3}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Information"})," ",e.jsx(s.em,{children:"(default)"}),": display neutral or informational messages, such as updates, notifications, or general status."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Success"}),": indicate positive outcomes or successful actions, such as completed tasks or achievements."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Warning"}),": alert users to potential issues or cautionary information, signaling that attention is needed."]}),`
`]}),`
`,e.jsx(n,{label:"Size",level:3}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Small"}),": compact and unobtrusive counts or statuses, suitable for tight spaces and minimalistic designs."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Medium"})," ",e.jsx(s.em,{children:"(default)"}),": main size for displaying ",e.jsx(s.strong,{children:"Badges"}),"."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Large"}),": prominent and easily noticeable counts or statuses, suitable for emphasizing important information."]}),`
`]}),`
`,e.jsx(n,{label:"Navigation",level:2}),`
`,e.jsxs(s.p,{children:["The ",e.jsx(s.strong,{children:"Badge"})," component is non-interactive and does not receive keyboard focus. It is purely decorative and used to label an item, keyword, or status."]}),`
`,e.jsx(n,{label:"Accessibility",level:2}),`
`,e.jsxs(s.p,{children:[e.jsx(s.strong,{children:"Badges"})," are read by screen readers as regular text."]}),`
`,e.jsxs(s.p,{children:["Icon-only ",e.jsx(s.strong,{children:"Badge"})," is only used in very specific cases. In that case, it should be accompanied by a tooltip to provide further context."]}),`
`,e.jsxs(s.p,{children:["The accessibility of multiple ",e.jsx(s.strong,{children:"Badges"}),` presented as a collection must be considered during its implementation.
Their grouping should be made clear to assistive technologies and proper ARIA attributes must be added to ensure full accessibility.`]}),`
`,e.jsx(n,{label:"Icon-only Badge",level:3}),`
`,e.jsxs(s.p,{children:["If a ",e.jsx(s.strong,{children:"Badge"})," contains only an icon, it must include an ",e.jsx(a,{href:"https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label",children:"aria-label"})," to provide context."]}),`
`,e.jsx(i,{of:p,sourceState:"shown"}),`
`,e.jsxs(s.p,{children:[e.jsx(r,{name:o.circleCheck,style:{color:"var(--ods-color-success-500)"}})," Screen readers will announce the aria-label instead of ignoring the ",e.jsx(s.strong,{children:"Badge"}),"."]}),`
`,e.jsxs(s.p,{children:["Since an icon-only ",e.jsx(s.strong,{children:"Badge"})," may lack detailed information, attach a tooltip and use an ",e.jsx(a,{href:"https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby",children:"aria-labelledby"})," when extra context is needed:"]}),`
`,e.jsx(i,{of:u,sourceState:"shown"}),`
`,e.jsxs(s.p,{children:[e.jsx(r,{name:o.circleCheck,style:{color:"var(--ods-color-success-500)"}})," Screen readers will announce the ",e.jsx(s.strong,{children:"Tooltip"})," content when focusing on the ",e.jsx(s.strong,{children:"Badge"}),"."]}),`
`,e.jsx(n,{label:"Structuring groups of Badges with lists",level:3}),`
`,e.jsxs(s.p,{children:["When displaying multiple ",e.jsx(s.strong,{children:"Badges"})," together, they should be wrapped within an unordered list of items (",e.jsx(s.code,{children:"<ul>"})," and ",e.jsx(s.code,{children:"<li>"}),") to ensure a proper announcement by screen readers."]}),`
`,e.jsx(i,{of:x,sourceState:"shown"}),`
`,e.jsxs(s.p,{children:[e.jsx(r,{name:o.circleCheck,style:{color:"var(--ods-color-success-500)"}})," This structure ensures that assistive technologies announce ",e.jsx(s.strong,{children:"Badges"}),` as a list, rather than reading them as separate, unrelated announcements.
Screen readers will announce the list, the number of items and the `,e.jsx(s.strong,{children:"Badges"})," content."]}),`
`,e.jsx(n,{label:"Alternative approach with ARIA roles",level:3}),`
`,e.jsxs(s.p,{children:["When modifying the HTML structure is not possible, use ",e.jsx(a,{href:"https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Reference/Roles/list_role",children:'role="list"'})," and ",e.jsx(a,{href:"https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Reference/Roles/listitem_role",children:'role="listitem"'})," to mimic list semantics."]}),`
`,e.jsx(i,{of:g,sourceState:"shown"}),`
`,e.jsxs(s.p,{children:[e.jsx(r,{name:o.circleCheck,style:{color:"var(--ods-color-success-500)"}})," This ensures that screen readers recognize the ",e.jsx(s.strong,{children:"Badges"})," as a structured list even without native ",e.jsx(s.code,{children:"<ul>"})," and ",e.jsx(s.code,{children:"<li>"})," elements."]})]})}function de(t={}){const{wrapper:s}={...d(),...t.components};return s?e.jsx(s,{...t,children:e.jsx(c,{...t})}):c(t)}export{de as default};
