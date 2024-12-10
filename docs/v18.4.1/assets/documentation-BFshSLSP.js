import{j as e,M as l,C as c}from"./index-Rx6QkXSv.js";import{u as r}from"./index-DPrOAYpY.js";import{T as a,D as d}from"./tag.stories-4id19X7B.js";import{B as h}from"./Banner-BpmhCXha.js";import{I as m,A as g,B as x}from"./IdentityCard-DzjZaQKX.js";import{H as s}from"./Heading-2XnXa8MH.js";import{S as t}from"./StorybookLink-YE2HEeNv.js";import"./iframe-HwRW2g_s.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-D-8MO0q_.js";import"./index-DX_4BEHg.js";import"./index-DrFu-skq.js";import"./index-Dqa08QUn.js";import"./controls-DX883vx3.js";import"./index-BJiUJsri.js";function o(i){const n={em:"em",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...r(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{of:a,name:"Documentation"}),`
`,e.jsx(h,{of:a}),`
`,e.jsx(n.p,{children:e.jsxs(n.em,{children:["A ",e.jsx(n.strong,{children:"Tag"})," component is used to display keywords or categories, with a removal feature."]})}),`
`,e.jsx(c,{of:d,sourceState:"none"}),`
`,e.jsx(s,{label:"Overview",level:2}),`
`,e.jsxs(m,{aliases:["Chip (previous name)","Label","Pill"],atomicType:g.atom,figmaLink:"https://www.figma.com/design/9jDDTcR4a9jPRFcdjawAlf/ODS---UI-Kit?node-id=52-11580",githubUrl:"https://github.com/ovh/design-system/tree/master/packages/ods/src/components/tag",name:"Tag",relatedComponents:[{name:"Badge"},{name:"Button"},{name:"Icon"}],children:[e.jsxs(n.p,{children:["The ",e.jsx(n.strong,{children:"Tag"}),` component is a small UI element used to represent metadata, keywords, categories, or other contextual
information.`]}),e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Tags"})," are removable and can include an ",e.jsx(t,{kind:"ODS Components/Icon",label:"Icon",story:"Documentation"}),` as
additional prefix element.`]}),e.jsx(n.p,{children:"They are commonly used in interfaces for categorizing content, filtering, and adding contextual details."})]}),`
`,e.jsx(s,{label:"Anatomy",level:2}),`
`,e.jsx(n.p,{children:e.jsx(n.img,{src:"components/tag/anatomy.png",alt:"Component anatomy",title:"Component anatomy"})}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.strong,{children:"Container"})}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Icon"}),": additional prefix to emphasize content ",e.jsx(n.em,{children:"(optional)"})]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Label"}),": main content"]}),`
`,e.jsx(n.li,{children:e.jsx(n.strong,{children:"Removable icon"})}),`
`]}),`
`,e.jsx(s,{label:"Usage",level:2}),`
`,e.jsxs(n.p,{children:["Use the ",e.jsx(n.strong,{children:"Tag"})," component to display labels, categories, or metadata that describe or classify content."]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Tags"})," often appear in contexts like filters and lists."]}),`
`,e.jsxs(n.p,{children:["Ensure that ",e.jsx(n.strong,{children:"Tags"})," are clearly labelled and easily distinguishable from other UI elements."]}),`
`,e.jsx(s,{label:"Dos & Don'ts",level:3}),`
`,e.jsx(x,{donts:["- Use Tag if the user cannot interact with it"],dos:["- The label must be short and clear","- Tags should always include a label. These can represent search terms, filters, or keywords"]}),`
`,e.jsx(s,{label:"Placement",level:2}),`
`,e.jsx(n.p,{children:"Since it provides extra information to a sibling element, in can be used inside components in various places, referring to the nature of its environment."}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Tags"})," have an automatic width, but they can widen to match the container."]}),`
`,e.jsxs(n.p,{children:["Multiple ",e.jsx(n.strong,{children:"Tags"})," can be displayed:"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"on a single line"}),`
`,e.jsx(n.li,{children:"stacked vertically"}),`
`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Tags"})," main content is left-aligned, the closing ",e.jsx(t,{kind:"ODS Components/Icon",label:"Icon",story:"Documentation"})," is fixed at the right hand of it."]}),`
`,e.jsx(s,{label:"Behavior",level:2}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Tags"})," can be hovered, focused and disabled."]}),`
`,e.jsx(n.p,{children:"A click/keypress on the whole component should trigger a removal event (if not disabled)."}),`
`,e.jsx(s,{label:"Variation",level:2}),`
`,e.jsx(s,{label:"Color",level:3}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Neutral"}),": displaying general labels or metadata without conveying any particular status or urgency."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Information"})," ",e.jsx(n.em,{children:"(default)"}),": displaying a general information for the user, without conveying any particular urgency."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Success"}),": indicating positive statuses or successful outcomes, providing a visual cue for achievements or completed tasks."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Warning"}),": alerting users to potential issues or cautionary information, signaling that attention is needed."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Critical"}),": highlighting severe issues or urgent information that requires immediate attention, emphasizing high-priority concerns."]}),`
`]}),`
`,e.jsx(s,{label:"Size",level:3}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Medium"})," ",e.jsx(n.em,{children:"(default)"}),": main size for displaying ",e.jsx(n.strong,{children:"Tags"}),"."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Large"}),": highlighting important labels or metadata with greater visibility and emphasis, making them easily noticeable to users."]}),`
`]}),`
`,e.jsx(s,{label:"Accessibility",level:2}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Tags"})," follow the same focusing/keyboard navigation as ",e.jsx(t,{kind:"ODS Components/Button",label:"Button",story:"Documentation"}),"."]})]})}function A(i={}){const{wrapper:n}={...r(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(o,{...i})}):o(i)}export{A as default};
