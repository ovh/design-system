import{j as e}from"./jsx-runtime-Cfl8ynUo.js";import{useMDXComponents as p}from"./index-ZwkxtaJJ.js";import{t as r,l as i}from"./ods-react60-CRx7zEey.js";import{M as u,C as x}from"./index-8pGbFWRq.js";import{C as o,O as g,A as j,a as v}from"./card.stories-jH23sm4q.js";import{B as f}from"./Banner-CNp5SML8.js";import{I as y,B as b}from"./IdentityCard-e2WB6ddF.js";import{C as a}from"./Canvas-Df5XpfVk.js";import{E as l}from"./ExternalLink-izdABMGv.js";import{H as t}from"./Heading-hbfjmHNc.js";import{S as c}from"./StorybookLink-DL_XdQSR.js";import{S as d,R as m}from"./meta-B7heVWH0.js";import"./index-jIWwRBLr.js";import"./index-2w0W-O47-BJ19ihbZ.js";import"./iframe-D7nmkxLr.js";import"./index-DWDEzXrj.js";import"./index-N93khynk.js";import"./index-CXQShRbs.js";import"./index-DrFu-skq.js";import"./index-CqY9YpN0.js";import"./colors-DSObuHxd.js";import"./controls-BtiQQn1l.js";import"./TooltipTrigger-Iu3rt7LP-DQH4Rvrv.js";import"./index-CTDx-6u2.js";import"./lz-string-U2heoObX.js";import"./source-CPEZJ6oD.js";import"./Link-BWQEuWpd-DsrdP0qI.js";import"./ods-react236-aAAP9SXj.js";function h(s){const n={code:"code",em:"em",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...p(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(u,{of:o,name:"Documentation"}),`
`,e.jsx(f,{of:o}),`
`,e.jsx(n.p,{children:e.jsxs(n.em,{children:["A ",e.jsx(n.strong,{children:"Card"})," is a versatile component designed to act as a container for various types of content, providing structure and context in a visually distinct box."]})}),`
`,e.jsx(x,{of:g,sourceState:"none"}),`
`,e.jsx(t,{label:"Overview",level:2}),`
`,e.jsxs(y,{aliases:["Tile (previous name)","Content Container","Product Card"],figmaLink:"https://www.figma.com/design/9jDDTcR4a9jPRFcdjawAlf/ODS---UI-Kit?node-id=3-28244",githubUrl:"https://github.com/ovh/design-system/tree/master/packages/ods-react/src/components/card",name:"Card",children:[e.jsxs(n.p,{children:["The ",e.jsx(n.strong,{children:"Card"}),` component will serve as a flexible container that can be used across different parts of an application
to display information in a structured manner.`]}),e.jsx(n.p,{children:`It is designed to be reusable, customizable, and responsive, as it can hold various elements like
text, Medium, and other UI components.`}),e.jsx(n.p,{children:"It also provides a consistent layout and styling for presenting information in a visually appealing way."})]}),`
`,e.jsx(t,{label:"Usage",level:2}),`
`,e.jsxs(n.p,{children:["A ",e.jsx(n.strong,{children:"Card"})," can be used to:"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"display a wide variety of content such as a text, or other elements."}),`
`,e.jsx(n.li,{children:"emphasize important content"}),`
`,e.jsx(n.li,{children:"visually group related content"}),`
`,e.jsx(n.li,{children:"guide the user toward actions"}),`
`,e.jsx(n.li,{children:"provide the option to navigate to more detailed content"}),`
`]}),`
`,e.jsxs(n.p,{children:["Several elements can be used in a ",e.jsx(n.strong,{children:"Card"}),":"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"A title"}),`
`,e.jsx(n.li,{children:"A description"}),`
`,e.jsxs(n.li,{children:["A ",e.jsx(c,{kind:m.button,story:d.documentation,children:"Button"})]}),`
`,e.jsxs(n.li,{children:["A ",e.jsx(c,{kind:m.medium,story:d.documentation,children:"Medium"})]}),`
`,e.jsx(n.li,{children:"Extra information"}),`
`]}),`
`,e.jsxs(n.p,{children:["All these elements are not mandatory in every ",e.jsx(n.strong,{children:"Card"}),"."]}),`
`,e.jsx(t,{label:"Dos & Don'ts",level:3}),`
`,e.jsx(b,{donts:["- Don't overuse Card across the UI. They should enhance clarity, not create visual clutter","- Don't fill Card with unrelated or excessive content that breaks focus or structure","- Don't place too many buttons or CTAs within a single Card. Keep interactions minimal and purposeful","- Don't use Card to group inconsistent or unrelated components (e.g., mixing stats, forms, and media arbitrarily)","- Don't use Card to group inconsistent or unrelated components (e.g., mixing stats, forms, and media arbitrarily)","- Don't make the entire Card clickable unless it's meant to behave as a single interactive unit","- Don't apply inconsistent padding, borders, or elevation. All Cards should follow the same structural rules"],dos:["- Use Card to group related content or actions into a visually distinct, contained block","- Combine contextually related elements inside a Card (e.g., image, title, text, CTA/button)","- Use Card to highlight key content, such as featured items, previews, or summaries","- Keep the Card layout clean and scannable, using consistent spacing and visual hierarchy","- Limit the number of interactive elements (e.g., buttons or links)","- Apply Card when you need to modularize content for dashboards, lists, or repeated patterns"]}),`
`,e.jsx(t,{label:"Best Practices in Context",level:3}),`
`,e.jsx(n.p,{children:e.jsx(n.img,{src:"components/card/anatomy.png",alt:"Component anatomy",title:"Component anatomy"})}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.strong,{children:"Card"})}),`
`,e.jsx(n.li,{children:e.jsx(n.strong,{children:"Content"})}),`
`]}),`
`,e.jsx(t,{label:"Placement",level:2}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Cards"})," that are strongly related can be grouped in a layout group. This group can flow horizontally left to right and/or vertically top to bottom."]}),`
`,e.jsx(t,{label:"Variation",level:2}),`
`,e.jsx(t,{label:"Color",level:3}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Neutral"}),": displaying standard content without conveying any particular status or urgency, maintaining a balanced and non-emphatic appearance."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Primary"}),": displaying highlighted content with particular emphasis."]}),`
`]}),`
`,e.jsx(t,{label:"Navigation",level:2}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.strong,{children:"Card"})," component is non-interactive and does not receive keyboard focus."]}),`
`,e.jsx(t,{label:"Accessibility",level:2}),`
`,e.jsxs(n.p,{children:["When multiple ",e.jsx(n.strong,{children:"Cards"})," are grouped together, it is important to ensure their structure is correctly conveyed to assistive technologies."]}),`
`,e.jsx(t,{label:"Structuring groups of Cards with lists",level:3}),`
`,e.jsxs(n.p,{children:["If multiple ",e.jsx(n.strong,{children:"Cards"})," are displayed together (e.g., a collection of products, articles or dashboards), they should be wrapped in an unordered list of items (",e.jsx(n.code,{children:"<ul>"})," and ",e.jsx(n.code,{children:"<li>"}),") to improve navigation for screen reader users."]}),`
`,e.jsx(a,{of:j,sourceState:"shown"}),`
`,e.jsxs(n.p,{children:[e.jsx(r,{name:i.circleCheck,style:{color:"var(--ods-color-success-500)"}})," This structure ensures that assistive technologies announce ",e.jsx(n.strong,{children:"Cards"}),` as a list, rather than reading them as separate, unrelated announcements.
Screen readers will announce the list and the number of items.`]}),`
`,e.jsx(t,{label:"Alternative approach with ARIA roles",level:3}),`
`,e.jsxs(n.p,{children:["When modifying the HTML structure is not possible, use ",e.jsx(l,{href:"https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Reference/Roles/list_role",children:'role="list"'})," and ",e.jsx(l,{href:"https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Reference/Roles/listitem_role",children:'role="listitem"'})," to mimic list semantics."]}),`
`,e.jsx(a,{of:v,sourceState:"shown"}),`
`,e.jsxs(n.p,{children:[e.jsx(r,{name:i.circleCheck,style:{color:"var(--ods-color-success-500)"}})," This ensures that screen readers still recognize the ",e.jsx(n.strong,{children:"Cards"})," as a structured list even without native ",e.jsx(n.code,{children:"<ul>"})," and ",e.jsx(n.code,{children:"<li>"})," elements."]})]})}function q(s={}){const{wrapper:n}={...p(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(h,{...s})}):h(s)}export{q as default};
