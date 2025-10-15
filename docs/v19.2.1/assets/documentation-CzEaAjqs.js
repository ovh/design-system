import{j as e}from"./jsx-runtime-Cfl8ynUo.js";import{useMDXComponents as d}from"./index-ZwkxtaJJ.js";import{t,l as r}from"./ods-react60-CRx7zEey.js";import{M as h,C as g}from"./index-8pGbFWRq.js";import{T as l,O as m,A as x,a as p,b as j}from"./tag.stories-BfKUTatb.js";import{B as u}from"./Banner-CNp5SML8.js";import{I as f,B as b}from"./IdentityCard-e2WB6ddF.js";import{C as o}from"./Canvas-Df5XpfVk.js";import{E as a}from"./ExternalLink-izdABMGv.js";import{H as n}from"./Heading-hbfjmHNc.js";import{S as v}from"./StorybookLink-DL_XdQSR.js";import{S as y,R as T}from"./meta-B7heVWH0.js";import"./index-jIWwRBLr.js";import"./index-2w0W-O47-BJ19ihbZ.js";import"./iframe-D7nmkxLr.js";import"./index-DWDEzXrj.js";import"./index-N93khynk.js";import"./index-CXQShRbs.js";import"./index-DrFu-skq.js";import"./Tag-Bp5l-_LL.js";import"./index-CqY9YpN0.js";import"./icon-name-C581wThh.js";import"./colors-DSObuHxd.js";import"./controls-BtiQQn1l.js";import"./TooltipTrigger-Iu3rt7LP-DQH4Rvrv.js";import"./index-CTDx-6u2.js";import"./lz-string-U2heoObX.js";import"./source-CPEZJ6oD.js";import"./Link-BWQEuWpd-DsrdP0qI.js";import"./ods-react236-aAAP9SXj.js";function c(i){const s={code:"code",em:"em",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...d(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(h,{of:l,name:"Documentation"}),`
`,e.jsx(u,{of:l}),`
`,e.jsx(s.p,{children:e.jsxs(s.em,{children:["A ",e.jsx(s.strong,{children:"Tag"})," component is used to display keywords or categories, with a removal feature."]})}),`
`,e.jsx(g,{of:m,sourceState:"none"}),`
`,e.jsx(n,{label:"Overview",level:2}),`
`,e.jsxs(f,{aliases:["Chip (previous name)","Label","Pill"],figmaLink:"https://www.figma.com/design/9jDDTcR4a9jPRFcdjawAlf/ODS---UI-Kit?node-id=52-11580",githubUrl:"https://github.com/ovh/design-system/tree/master/packages/ods-react/src/components/tag",name:"Tag",children:[e.jsxs(s.p,{children:["The ",e.jsx(s.strong,{children:"Tag"}),` component is a small UI element used to represent metadata, keywords, categories, or other contextual
information.`]}),e.jsxs(s.p,{children:[e.jsx(s.strong,{children:"Tags"})," are removable and can include an icon as additional prefix element."]}),e.jsx(s.p,{children:"They are commonly used in interfaces for categorizing content, filtering, and adding contextual details."})]}),`
`,e.jsx(n,{label:"Usage",level:2}),`
`,e.jsxs(s.p,{children:["Use the ",e.jsx(s.strong,{children:"Tag"})," component to display labels, categories, or metadata that describe or classify content."]}),`
`,e.jsxs(s.p,{children:[e.jsx(s.strong,{children:"Tags"})," often appear in contexts like filters and lists."]}),`
`,e.jsxs(s.p,{children:["Ensure that ",e.jsx(s.strong,{children:"Tags"})," are clearly labelled and easily distinguishable from other UI elements."]}),`
`,e.jsx(n,{label:"Dos & Don'ts",level:3}),`
`,e.jsx(b,{donts:["- Don't use a Tag if there is no interaction expected, prefer the Badge component instead","- Don't use full sentences or long text in a Tag label","- Don't mix Tags with different behaviors (e.g., some removable, some static) unless necessary and clearly indicated",`- Don't use Tags as primary action triggers (e.g., "Submit", "Save"), use Buttons instead`],dos:["- Use Tags to represent interactive labels such as filters, categories, or user-defined keywords","- Ensure the label is short, descriptive, and scannable, aim for 1–2 words","- Use Tags in search contexts, facet filtering, or content classification","- Allow Tags to be removable or toggleable if the interaction requires it (e.g., deselecting a filter)","- Keep visual distinction between Tags (interactive) and Badges (static)"]}),`
`,e.jsx(n,{label:"Best Practices in Context",level:3}),`
`,e.jsx(s.p,{children:e.jsx(s.img,{src:"components/tag/anatomy.png",alt:"Component anatomy",title:"Component anatomy"})}),`
`,e.jsxs(s.ol,{children:[`
`,e.jsx(s.li,{children:e.jsx(s.strong,{children:"Tag"})}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Icon"})," - optional (left or right)"]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Delete icon"})," - optional"]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Label"})," - optional"]}),`
`]}),`
`,e.jsx(n,{label:"Placement",level:2}),`
`,e.jsx(s.p,{children:"Since it provides extra information to a sibling element, in can be used inside components in various places, referring to the nature of its environment."}),`
`,e.jsxs(s.p,{children:["Multiple ",e.jsx(s.strong,{children:"Tags"})," can be displayed:"]}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsx(s.li,{children:"on a single line"}),`
`,e.jsx(s.li,{children:"stacked vertically"}),`
`]}),`
`,e.jsx(n,{label:"Behavior",level:2}),`
`,e.jsxs(s.p,{children:[e.jsx(s.strong,{children:"Tags"})," can be hovered, focused and disabled."]}),`
`,e.jsx(n,{label:"Variation",level:2}),`
`,e.jsx(n,{label:"Color",level:3}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Neutral"}),": displaying general labels or metadata without conveying any particular status or urgency."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Information"})," ",e.jsx(s.em,{children:"(default)"}),": displaying a general information for the user, without conveying any particular urgency."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Success"}),": indicating positive statuses or successful outcomes, providing a visual cue for achievements or completed tasks."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Warning"}),": alerting users to potential issues or cautionary information, signaling that attention is needed."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Critical"}),": highlighting severe issues or urgent information that requires immediate attention, emphasizing high-priority concerns."]}),`
`]}),`
`,e.jsx(n,{label:"Size",level:3}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Medium"})," ",e.jsx(s.em,{children:"(default)"}),": main size for displaying ",e.jsx(s.strong,{children:"Tags"}),"."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Large"}),": highlighting important labels or metadata with greater visibility and emphasis, making them easily noticeable to users."]}),`
`]}),`
`,e.jsx(n,{label:"Navigation",level:2}),`
`,e.jsx(n,{label:"Focus Management",level:3}),`
`,e.jsxs(s.p,{children:["The ",e.jsx(s.strong,{children:"Tag"})," component is focusable and follows the same keyboard interactions as the Button component."]}),`
`,e.jsx(n,{label:"General Keyboard Shortcuts",level:3}),`
`,e.jsxs(s.p,{children:["Pressing ",e.jsx(s.code,{children:"Tab"})," moves focus to the ",e.jsx(s.strong,{children:"Tag"}),"."]}),`
`,e.jsxs(s.p,{children:["Pressing ",e.jsx(s.code,{children:"Enter"})," or ",e.jsx(s.code,{children:"Space"})," triggers the assigned action: removing the ",e.jsx(s.strong,{children:"Tag"}),"."]}),`
`,e.jsxs(s.p,{children:["Pressing ",e.jsx(s.code,{children:"Shift"})," + ",e.jsx(s.code,{children:"Tab"})," moves focus to the previous interactive element."]}),`
`,e.jsx(n,{label:"Accessibility",level:2}),`
`,e.jsxs(s.p,{children:["Unlike ",e.jsx(v,{kind:T.badge,story:y.documentation,children:"Badge"}),`,
`,e.jsx(s.strong,{children:"Tags"}),` are interactive and can be removed by the user.
To ensure accessibility, it is important to:`]}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:["Group ",e.jsx(s.strong,{children:"Tags"})," properly when they are part of a list."]}),`
`,e.jsx(s.li,{children:"Announce the removal action so screen reader users understand the functionality."}),`
`]}),`
`,e.jsx(n,{label:"Structuring groups of Tags with lists",level:3}),`
`,e.jsxs(s.p,{children:["When multiple ",e.jsx(s.strong,{children:"Tags"}),` are displayed together (e.g., a collection of selected filters or labels),
they should be wrapped in an unordered list of items (`,e.jsx(s.code,{children:"<ul>"})," and ",e.jsx(s.code,{children:"<li>"}),") to ensure proper announcement by screen readers."]}),`
`,e.jsx(o,{of:x,sourceState:"shown"}),`
`,e.jsxs(s.p,{children:[e.jsx(t,{name:r.circleCheck,style:{color:"var(--ods-color-success-500)"}})," This allows screen readers to announce a list with the number of items, making it clear that these ",e.jsx(s.strong,{children:"Tags"})," belong to a structured set."]}),`
`,e.jsx(n,{label:"Alternative approach",level:3}),`
`,e.jsxs(s.p,{children:[`When modifying the HTML structure is not possible,
use `,e.jsx(a,{href:"https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Reference/Roles/list_role",children:'role="list"'})," and ",e.jsx(a,{href:"https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Reference/Roles/listitem_role",children:'role="listitem"'})," to mimic list semantics."]}),`
`,e.jsx(o,{of:p,sourceState:"shown"}),`
`,e.jsxs(s.p,{children:[e.jsx(t,{name:r.circleCheck,style:{color:"var(--ods-color-success-500)"}})," This ensures that screen readers still recognize the ",e.jsx(s.strong,{children:"Tags"})," as a structured list, even without native ",e.jsx(s.code,{children:"<ul>"})," and ",e.jsx(s.code,{children:"<li>"})," elements."]}),`
`,e.jsx(n,{label:"Announcing the delete action with aria-label",level:3}),`
`,e.jsxs(s.p,{children:["Since the ",e.jsx(s.strong,{children:"Tag"})," is removable, it should provide clear feedback to assistive technologies."]}),`
`,e.jsx(o,{of:j,sourceState:"shown"}),`
`,e.jsxs(s.p,{children:[e.jsx(t,{name:r.circleCheck,style:{color:"var(--ods-color-success-500)"}})," This ensures that users know the ",e.jsx(s.strong,{children:"Tag"})," can be removed. Screen readers will announce the tag aria label and the button type."]})]})}function Z(i={}){const{wrapper:s}={...d(),...i.components};return s?e.jsx(s,{...i,children:e.jsx(c,{...i})}):c(i)}export{Z as default};
