import{j as n}from"./jsx-runtime-Dn0LW--f.js";import{u as r}from"./index-DeyDdHvX.js";import{M as a,C as l,d as s}from"./index-BM3JsZOq.js";import{B as c}from"./banner-DPlTyHjv.js";import{T as t,D as d}from"./tag.stories-WoynzoXv.js";import{I as h,A as m}from"./identity-card-CwN41yUF.js";import"./iframe-6_jBXMSq.js";import"../sb-preview/runtime.js";import"./commonjsHelpers-Cpj98o6Y.js";import"./index-B_J8iUie.js";import"./index-DX_4BEHg.js";import"./index-DrFu-skq.js";import"./index-DryTTbHl.js";import"./lit-html-D-ZEPr28.js";import"./control-C1r2wu67.js";import"./ods-toggle2-LnXcgd5r.js";import"./chunk-FAE4I7JY-v0Th3BC0.js";function o(i){const e={a:"a",em:"em",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...r(),...i.components};return n.jsxs(n.Fragment,{children:[n.jsx(a,{of:t,name:"Documentation"}),`
`,n.jsx(c,{of:t}),`
`,n.jsx(e.p,{children:n.jsxs(e.em,{children:["A ",n.jsx(e.strong,{children:"Tag"})," component is used to display keywords or categories, with a removal feature."]})}),`
`,n.jsx(l,{of:d,sourceState:"none"}),`
`,n.jsx(e.h2,{id:"overview",children:"Overview"}),`
`,n.jsxs("div",{className:"documentation-overview",children:[n.jsxs("div",{children:[n.jsxs(e.p,{children:["The ",n.jsx(e.strong,{children:"Tag"}),` component is a small UI element used to represent metadata, keywords, categories, or other contextual
information.`]}),n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Tags"})," are removable and can include an ",n.jsx(e.a,{href:"?path=/docs/ods-components-icon--documentation",children:n.jsx(e.strong,{children:"Icon"})}),` as
additional prefix element.`]}),n.jsx(e.p,{children:"They are commonly used in interfaces for categorizing content, filtering, and adding contextual details."})]}),n.jsx(h,{aliases:["Chip (previous name)","Label","Pill"],atomicType:m.atom,className:"documentation-overview__table",figmaLink:"https://www.figma.com/design/9jDDTcR4a9jPRFcdjawAlf/ODS---UI-Kit?node-id=52-11580",githubUrl:"https://github.com/ovh/design-system/tree/master/packages/ods/src/components/tag",name:"Tag",relatedComponents:[{name:"Badge"},{name:"Button"},{name:"Icon"}]})]}),`
`,n.jsx(e.h2,{id:"anatomy",children:"Anatomy"}),`
`,n.jsx(e.p,{children:n.jsx(e.img,{src:"components/tag/anatomy.png",alt:"Component anatomy",title:"Component anatomy"})}),`
`,n.jsxs(e.ol,{children:[`
`,n.jsx(e.li,{children:n.jsx(e.strong,{children:"Container"})}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Icon"}),": additional prefix to emphasize content ",n.jsx(e.em,{children:"(optional)"})]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Label"}),": main content"]}),`
`,n.jsx(e.li,{children:n.jsx(e.strong,{children:"Removable icon"})}),`
`]}),`
`,n.jsx(e.h2,{id:"usage",children:"Usage"}),`
`,n.jsxs(e.p,{children:["Use the ",n.jsx(e.strong,{children:"Tag"})," component to display labels, categories, or metadata that describe or classify content."]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Tags"})," often appear in contexts like filters and lists."]}),`
`,n.jsxs(e.p,{children:["Ensure that ",n.jsx(e.strong,{children:"Tags"})," are clearly labelled and easily distinguishable from other UI elements."]}),`
`,n.jsx(e.h3,{id:"dos--donts",children:"Dos & Don'ts"}),`
`,n.jsx(s,{className:"documentation-do-table",children:`
| ✅ Do                                                                                                                                                                           |
|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| - The label must be short and clear.                                                                                                                                           |
| - **Tags** should always include a label. These can represent search terms, filters, or keywords.                                                                              |
`}),`
`,n.jsx(s,{className:"documentation-dont-table",children:`
| ❌ Don't                                                                                                                                                                          |
|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| - Use **Tag** if the user cannot interact with it.                                                                                                                         |
`}),`
`,n.jsx(e.h2,{id:"placement",children:"Placement"}),`
`,n.jsx(e.p,{children:"Since it provides extra information to a sibling element, in can be used inside components in various places, referring to the nature of its environment."}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Tags"})," have an automatic width, but they can widen to match the container."]}),`
`,n.jsxs(e.p,{children:["Multiple ",n.jsx(e.strong,{children:"Tags"})," can be displayed:"]}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"on a single line"}),`
`,n.jsx(e.li,{children:"stacked vertically"}),`
`]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Tags"})," main content is left-aligned, the closing ",n.jsx(e.a,{href:"?path=/docs/ods-components-icon--documentation",children:n.jsx(e.strong,{children:"Icon"})})," is fixed at the right hand of it."]}),`
`,n.jsx(e.h2,{id:"behavior",children:"Behavior"}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Tags"})," can be hovered, focused and disabled."]}),`
`,n.jsx(e.p,{children:"A click/keypress on the whole component should trigger a removal event (if not disabled)."}),`
`,n.jsx(e.h2,{id:"variation",children:"Variation"}),`
`,n.jsx(e.h3,{id:"color",children:"Color"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Neutral"}),": displaying general labels or metadata without conveying any particular status or urgency."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Information"})," ",n.jsx(e.em,{children:"(default)"}),": displaying a general information for the user, without conveying any particular urgency."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Success"}),": indicating positive statuses or successful outcomes, providing a visual cue for achievements or completed tasks."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Warning"}),": alerting users to potential issues or cautionary information, signaling that attention is needed."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Critical"}),": highlighting severe issues or urgent information that requires immediate attention, emphasizing high-priority concerns."]}),`
`]}),`
`,n.jsx(e.h3,{id:"size",children:"Size"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Medium"})," ",n.jsx(e.em,{children:"(default)"}),": main size for displaying ",n.jsx(e.strong,{children:"Tags"}),"."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Large"}),": highlighting important labels or metadata with greater visibility and emphasis, making them easily noticeable to users."]}),`
`]}),`
`,n.jsx(e.h2,{id:"accessibility",children:"Accessibility"}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Tags"})," follow the same focusing/keyboard navigation as ",n.jsx(e.a,{href:"?path=/docs/ods-components-button--documentation",children:n.jsx(e.strong,{children:"Button"})})]})]})}function U(i={}){const{wrapper:e}={...r(),...i.components};return e?n.jsx(e,{...i,children:n.jsx(o,{...i})}):o(i)}export{U as default};
