import{j as n}from"./jsx-runtime-C_5uCoOk.js";import{u as a}from"./index-BNSrq6w-.js";import{M as d,C as h,d as r}from"./index-DnV51lgW.js";import{B as l}from"./banner-CAPzkNgn.js";import{S as o,O as p}from"./spinner.stories-Cewr8G4u.js";import{O as s}from"./index-BUOQImqF.js";import{O as t}from"./index-CEZbmgmh.js";import"./iframe-Cm7AUSBL.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-B_J8iUie.js";import"./index-DX_4BEHg.js";import"./index-DrFu-skq.js";import"./control-C1r2wu67.js";import"./lit-html-D-ZEPr28.js";import"./ods-toggle2-CgWFvVwm.js";function c(i){const e={code:"code",em:"em",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",...a(),...i.components};return n.jsxs(n.Fragment,{children:[n.jsx(d,{of:o,name:"Documentation"}),`
`,n.jsx(l,{of:o}),`
`,n.jsx(e.p,{children:n.jsx(e.em,{children:"A visual indicator that a process is happening in the background but the interface is not yet ready for interaction."})}),`
`,n.jsx(h,{of:p,sourceState:"none"}),`
`,n.jsx(e.h2,{id:"overview",children:"Overview"}),`
`,n.jsxs("div",{children:[n.jsx("div",{id:"description",children:n.jsxs(e.p,{children:["A visual indicator that ",n.jsx(e.strong,{children:"a process is happening in the background"}),` but the interface is not yet ready for
interaction.`]})}),n.jsx("table",{children:n.jsxs("tbody",{children:[n.jsxs("tr",{children:[n.jsx("th",{scope:"row",children:"Name"}),n.jsx("td",{children:n.jsx("strong",{children:"Spinner"})})]}),n.jsxs("tr",{children:[n.jsx("th",{scope:"row",children:"Also known as"}),n.jsx("td",{children:n.jsx("em",{children:"Loading, Spin, Circular Progress"})})]}),n.jsxs("tr",{children:[n.jsx("th",{scope:"row",children:"Atomic type"}),n.jsx("td",{children:n.jsxs("a",{href:"https://bradfrost.com/blog/post/extending-atomic-design/",children:["Quark",n.jsx(s,{name:t.externalLink,style:{fontSize:".7rem",paddingLeft:".3rem",paddingRight:".2rem"}})]})})]}),n.jsxs("tr",{children:[n.jsx("th",{scope:"row",children:"Related component(s)"}),n.jsx("td",{children:"-"})]}),n.jsxs("tr",{children:[n.jsx("th",{scope:"row",children:"Links"}),n.jsxs("td",{children:[n.jsxs("a",{href:"https://www.figma.com/proto/tIKzHa5KvHHyosgIgyBswB/Design-Tokens",children:["Design",n.jsx(s,{name:t.externalLink,style:{fontSize:".7rem",paddingLeft:".3rem",paddingRight:".2rem"}})]}),n.jsx("br",{}),n.jsxs("a",{href:"https://github.com/ovh/design-system/tree/master/packages/components/src/spinner",children:["Github",n.jsx(s,{name:t.externalLink,style:{fontSize:".7rem",paddingLeft:".3rem",paddingRight:".2rem"}})]})]})]})]})})]}),`
`,n.jsx(e.h2,{id:"anatomy",children:"Anatomy"}),`
`,n.jsx(e.p,{children:n.jsx(e.img,{src:"components/spinner/anatomy.png",alt:"Component anatomy",title:"Component anatomy"})}),`
`,n.jsxs(e.ol,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Main content"}),": the ",n.jsx(e.strong,{children:"Spinner"})," itself."]}),`
`]}),`
`,n.jsx(e.h2,{id:"usage",children:"Usage"}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Spinner"})," component is used as a fallback when complex content is loading in the background."]}),`
`,n.jsxs(e.p,{children:["When using a ",n.jsx(e.strong,{children:"Spinner"})," directly over content, we recommend applying an opacity to the content container to de-emphasize the content and increase the visibility of the ",n.jsx(e.strong,{children:"Spinner"}),"."]}),`
`,n.jsx(e.h3,{id:"dos--donts",children:"Dos & Don'ts"}),`
`,n.jsx(r,{children:`
| ✅ Do                                                                                                                                                                           |
|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| - Use **Spinner** when the loading wait time is expected to be longer than three seconds.                                                                                      |
`}),`
`,n.jsx(r,{children:`
| ❌ Don't                                                                                                                                                                          |
|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| - Use multiple **Spinners** on the same page, prefer using a single **Spinner** on an overlay.                                                                                   |
| - Use **Spinner** for text-only loading. Use [**Skeleton**](?path=/docs/ods-components-skeleton--documentation) component instead.                                       |
`}),`
`,n.jsx(e.h2,{id:"placement",children:"Placement"}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Spinner can be placed where needed"}),", whether it's centered on an overlay or specific container/content in the page."]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Spinner"})," can widen to match its container."]}),`
`,n.jsx(e.h2,{id:"behavior",children:"Behavior"}),`
`,n.jsxs(e.p,{children:["The ",n.jsx(e.strong,{children:"Spinner"})," component has a spinning animation to show to the user that the background process is moving on."]}),`
`,n.jsx(e.h2,{id:"variation",children:"Variation"}),`
`,n.jsx(e.p,{children:"N/A"}),`
`,n.jsx(e.h2,{id:"accessibility",children:"Accessibility"}),`
`,n.jsxs(e.p,{children:["User is being notified of its loading based on the ARIA ",n.jsx(e.code,{children:"live"})," property."]})]})}function M(i={}){const{wrapper:e}={...a(),...i.components};return e?n.jsx(e,{...i,children:n.jsx(c,{...i})}):c(i)}export{M as default};
