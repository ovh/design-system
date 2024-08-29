import{j as n}from"./jsx-runtime-C_5uCoOk.js";import{u as l}from"./index-BNSrq6w-.js";import{M as c,C as d,d as r}from"./index-DnV51lgW.js";import{B as h}from"./banner-CAPzkNgn.js";import{T as o,D as m}from"./tag.stories-BC_OeSrT.js";import{O as i}from"./index-BUOQImqF.js";import{O as t}from"./index-CEZbmgmh.js";import"./iframe-Cm7AUSBL.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-B_J8iUie.js";import"./index-DX_4BEHg.js";import"./index-DrFu-skq.js";import"./lit-html-D-ZEPr28.js";import"./control-C1r2wu67.js";import"./ods-toggle2-CgWFvVwm.js";function a(s){const e={a:"a",em:"em",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...l(),...s.components};return n.jsxs(n.Fragment,{children:[n.jsx(c,{of:o,name:"Documentation"}),`
`,n.jsx(h,{of:o}),`
`,n.jsx(e.p,{children:n.jsxs(e.em,{children:["A ",n.jsx(e.strong,{children:"Tag"})," component is used to display keywords or categories, with a removal feature."]})}),`
`,n.jsx(d,{of:m,sourceState:"none"}),`
`,n.jsx(e.h2,{id:"overview",children:"Overview"}),`
`,n.jsxs("div",{children:[n.jsxs("div",{id:"description",children:[n.jsxs(e.p,{children:["The ",n.jsx(e.strong,{children:"Tag"}),` component is a small UI element used to represent metadata, keywords, categories, or other contextual
information.`]}),n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Tags"})," are removable and can include an ",n.jsx(e.a,{href:"?path=/docs/ods-components-icon--documentation",children:n.jsx(e.strong,{children:"Icon"})}),` as
additional prefix element.`]}),n.jsx(e.p,{children:"They are commonly used in interfaces for categorizing content, filtering, and adding contextual details."})]}),n.jsx("table",{children:n.jsxs("tbody",{children:[n.jsxs("tr",{children:[n.jsx("th",{scope:"row",children:"Name"}),n.jsx("td",{children:n.jsx("strong",{children:"Tag"})})]}),n.jsxs("tr",{children:[n.jsx("th",{scope:"row",children:"Also known as"}),n.jsx("td",{children:n.jsx("em",{children:"Chip (previous name), Label, Pill"})})]}),n.jsxs("tr",{children:[n.jsx("th",{scope:"row",children:"Atomic type"}),n.jsx("td",{children:n.jsxs("a",{href:"https://atomicdesign.bradfrost.com/chapter-2/#atoms",children:["Atom",n.jsx(i,{name:t.externalLink,style:{fontSize:".7rem",paddingLeft:".3rem",paddingRight:".2rem"}})]})})]}),n.jsxs("tr",{children:[n.jsx("th",{scope:"row",children:"Related component(s)"}),n.jsx("td",{children:n.jsxs(e.p,{children:[n.jsx(e.a,{href:"?path=/docs/ods-components-icon--documentation",children:n.jsx(e.strong,{children:"Icon"})}),`,
`,n.jsx(e.a,{href:"?path=/docs/ods-components-badge--documentation",children:n.jsx(e.strong,{children:"Badge"})}),`,
`,n.jsx(e.a,{href:"?path=/docs/ods-components-button--documentation",children:n.jsx(e.strong,{children:"Button"})})]})})]}),n.jsxs("tr",{children:[n.jsx("th",{scope:"row",children:"Links"}),n.jsxs("td",{children:[n.jsxs("a",{href:"https://www.figma.com/proto/tIKzHa5KvHHyosgIgyBswB/Design-Tokens",children:["Design",n.jsx(i,{name:t.externalLink,style:{fontSize:".7rem",paddingLeft:".3rem",paddingRight:".2rem"}})]}),n.jsx("br",{}),n.jsxs("a",{href:"https://github.com/ovh/design-system/tree/master/packages/components/src/tag",children:["Github",n.jsx(i,{name:t.externalLink,style:{fontSize:".7rem",paddingLeft:".3rem",paddingRight:".2rem"}})]})]})]})]})})]}),`
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
`,n.jsx(r,{children:`
| ✅ Do                                                                                                                                                                           |
|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| - The label must be short and clear.                                                                                                                                           |
| - **Tags** should always include a label. These can represent search terms, filters, or keywords.                                                                              |
`}),`
`,n.jsx(r,{children:`
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
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Tags"})," follow the same focusing/keyboard navigation as ",n.jsx(e.a,{href:"?path=/docs/ods-components-button--documentation",children:n.jsx(e.strong,{children:"Button"})})]})]})}function z(s={}){const{wrapper:e}={...l(),...s.components};return e?n.jsx(e,{...s,children:n.jsx(a,{...s})}):a(s)}export{z as default};
