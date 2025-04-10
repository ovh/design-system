import{j as e}from"./jsx-runtime-BSm7YJ_y.js";import{useMDXComponents as c}from"./index-CUkz9CBV.js";import{M as d,C as h}from"./index-Ad1vjMe7.js";import{T as l,O as m}from"./tooltip.stories-BcGZZYt6.js";import{B as p}from"./Banner-p8uZ_3sx.js";import{I as u,A as x,B as j}from"./IdentityCard-_ftJ8uhy.js";import{H as s}from"./Heading-RrL0wZ2g.js";import{S as t,a as o,O as i}from"./StorybookLink-CSvrJ6Z1.js";import"./index-E9JSHJbc.js";import"./iframe-ZxD9YLZr.js";import"./index-DOJIDNlS.js";import"./index-DZAg5o-f.js";import"./index-CXQShRbs.js";import"./index-DrFu-skq.js";import"./OdsButton-Do9GSXD9.js";import"./controls-CQ2mnOwv.js";import"./OdsSpinner-DbFadktS.js";import"./icon-name-BXMPYDqj.js";import"./portal-PiAqHQ5I.js";import"./index-BDDKzIGc.js";import"./ods-react-CYmC8DRO.js";function a(r){const n={em:"em",img:"img",li:"li",ol:"ol",p:"p",span:"span",strong:"strong",ul:"ul",...c(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(d,{of:l,name:"Documentation"}),`
`,e.jsx(p,{of:l}),`
`,e.jsx(n.p,{children:e.jsxs(n.em,{children:[e.jsx(n.strong,{children:"Tooltip"})," component is used to display contextual information when the user hovers or focuses a UI element in a page."]})}),`
`,e.jsx(h,{of:m,sourceState:"none"}),`
`,e.jsx(s,{label:"Overview",level:2}),`
`,e.jsxs(u,{aliases:["Info Bubble"],atomicType:x.atom,figmaLink:"https://www.figma.com/design/9jDDTcR4a9jPRFcdjawAlf/ODS---UI-Kit?node-id=55-23473",githubUrl:"https://github.com/ovh/design-system/tree/master/packages/ods/src/components/tooltip",name:"Tooltip",relatedComponents:[{name:"Icon"},{name:"Text"}],children:[e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Tooltip"})," component is used to display contextual information when the user hovers or focuses an element."]}),e.jsx(n.p,{children:"It enhances user experience by providing helpful hints, explanations, or descriptions without cluttering the UI."}),e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Tooltips"})," are commonly used for ",e.jsx(t,{kind:i.button,story:o.documentation,children:"Button"}),`,
`,e.jsx(t,{kind:i.icon,story:o.documentation,children:"Icon"}),`,
`,e.jsx(t,{kind:i.formField,story:o.documentation,children:"Form Field"}),", and other interactive elements."]})]}),`
`,e.jsx(s,{label:"Anatomy",level:2}),`
`,e.jsx(n.p,{children:e.jsx(n.img,{src:"components/tooltip/anatomy.png",alt:"Component anatomy",title:"Component anatomy"})}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.strong,{children:"Container"})}),`
`,e.jsx(n.li,{children:e.jsx(n.strong,{children:"Main content"})}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Arrow"})," ",e.jsx(n.em,{children:"(optional)"})]}),`
`]}),`
`,e.jsx(s,{label:"Usage",level:2}),`
`,e.jsxs(n.p,{children:["Use the ",e.jsx(n.strong,{children:"Tooltip"})," component to provide additional information or context for UI elements."]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Tooltips"})," should be brief and helpful, enhancing user understanding without overwhelming them."]}),`
`,e.jsxs(n.p,{children:["They are suitable for ",e.jsx(t,{kind:i.button,story:o.documentation,children:"Button"}),", ",e.jsx(t,{kind:i.icon,story:o.documentation,children:"Icon"}),", ",e.jsx(t,{kind:i.formField,story:o.documentation,children:"Form Field"}),", ",e.jsx(t,{kind:i.link,story:o.documentation,children:"Link"}),", and any other elements where additional context would be beneficial."]}),`
`,e.jsx(s,{label:"Dos & Don'ts",level:3}),`
`,e.jsx(j,{donts:["- Use a Tooltip to communicate error messages","- Write very important information within a Tooltip since it is only displayed on hover and focus so the user might miss its crucial content","- Insert rich information such as image in a Tooltip",e.jsxs(n.span,{children:["- Use interactive elements within a Tooltip such as ",e.jsx(t,{kind:i.button,story:o.documentation,children:"Button"})," or ",e.jsx(t,{kind:i.link,story:o.documentation,children:"Link"})]}),"- Repeat information within a Tooltip that is already visible in the UI"],dos:["- Use a Tooltip to provide useful, brief additional information","- Use Tooltips sparingly without invading the screen",e.jsxs(n.span,{children:["- Write Tooltip's ",e.jsx(t,{kind:i.text,story:o.documentation,children:"Text"})," as full sentences with punctuation except there is not enough space"]})]}),`
`,e.jsx(s,{label:"Placement",level:2}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Tooltip"})," has automatic positioning feature. It can detect the edge of the browser so the container always stays visible on a page."]}),`
`,e.jsx(s,{label:"Behavior",level:2}),`
`,e.jsxs(n.p,{children:["By default, a ",e.jsx(n.strong,{children:"Tooltip"})," is hidden to the user."]}),`
`,e.jsxs(n.p,{children:["It triggers when the user hovers or focuses on the ",e.jsx(n.strong,{children:"Tooltip"}),"'s trigger element such as an ",e.jsx(t,{kind:i.icon,story:o.documentation,children:"Icon"}),"."]}),`
`,e.jsxs(n.p,{children:["As long as the user's mouse cursor or focus is active, the ",e.jsx(n.strong,{children:"Tooltip"})," will persist."]}),`
`,e.jsx(n.p,{children:"It will hide when the users stop hovering over or focusing on this element."}),`
`,e.jsxs(n.p,{children:["On a mobile device, a ",e.jsx(n.strong,{children:"Tooltip"})," is displayed upon tapping, and it will hide when the user taps an area outside the ",e.jsx(n.strong,{children:"Tooltip"})," container."]}),`
`,e.jsx(s,{label:"Variation",level:2}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"With extra arrow"}),": providing a more pronounced visual connection between the tooltip and the element it describes, ensuring users clearly understand which element the tooltip is associated with."]}),`
`]}),`
`,e.jsx(s,{label:"Accessibility",level:2}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Tooltip"})," component is a visual equivalent of ARIA labels, it will be read the same way by screen readers."]})]})}function _(r={}){const{wrapper:n}={...c(),...r.components};return n?e.jsx(n,{...r,children:e.jsx(a,{...r})}):a(r)}export{_ as default};
