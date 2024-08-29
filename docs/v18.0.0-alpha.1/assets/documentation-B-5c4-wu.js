import{j as e}from"./jsx-runtime-C_5uCoOk.js";import{u as d}from"./index-BNSrq6w-.js";import{M as c,C as l,d as t}from"./index-DnV51lgW.js";import{B as h}from"./banner-CAPzkNgn.js";import{P as i,O as m}from"./progress-bar.stories-BIEd6NWx.js";import{O as r}from"./index-BUOQImqF.js";import{O as o}from"./index-CEZbmgmh.js";import"./iframe-Cm7AUSBL.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-B_J8iUie.js";import"./index-DX_4BEHg.js";import"./index-DrFu-skq.js";import"./lit-html-D-ZEPr28.js";import"./control-C1r2wu67.js";import"./ods-toggle2-CgWFvVwm.js";function a(n){const s={a:"a",code:"code",em:"em",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",...d(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(c,{of:i,name:"Documentation"}),`
`,e.jsx(h,{of:i}),`
`,e.jsx(s.p,{children:e.jsx(s.em,{children:"A horizontal bar indicating the current completion status of a long-running task, usually updated continuously as the task progresses, instead of in discrete steps."})}),`
`,e.jsx(l,{of:m,sourceState:"none"}),`
`,e.jsx(s.h2,{id:"overview",children:"Overview"}),`
`,e.jsxs("div",{children:[e.jsx("div",{id:"description",children:e.jsxs(s.p,{children:["The ",e.jsx(s.strong,{children:"Progress Bar"}),` component is used to indicate the progress of a task or process to users. It visually
represents the completion percentage, providing users with feedback on the status of ongoing operations, such as
`,e.jsx(s.a,{href:"?path=/docs/ods-components-form-elements-file-upload--documentation",children:e.jsx(s.strong,{children:"File upload"})}),", downloads, or form submissions."]})}),e.jsx("table",{children:e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("th",{scope:"row",children:"Name"}),e.jsx("td",{children:e.jsx("strong",{children:"Progress Bar"})})]}),e.jsxs("tr",{children:[e.jsx("th",{scope:"row",children:"Also known as"}),e.jsx("td",{children:e.jsx("em",{children:"Progress, Progress Loader, Preloader, Loading Bar, Progress Indicator"})})]}),e.jsxs("tr",{children:[e.jsx("th",{scope:"row",children:"Atomic type"}),e.jsx("td",{children:e.jsxs("a",{href:"https://atomicdesign.bradfrost.com/chapter-2/#atoms",children:["Atom",e.jsx(r,{name:o.externalLink,style:{fontSize:".7rem",paddingLeft:".3rem",paddingRight:".2rem"}})]})})]}),e.jsxs("tr",{children:[e.jsx("th",{scope:"row",children:"Related component(s)"}),e.jsx("td",{children:e.jsx(s.p,{children:e.jsx(s.a,{href:"?path=/docs/ods-components-text--documentation",children:e.jsx(s.strong,{children:"Text"})})})})]}),e.jsxs("tr",{children:[e.jsx("th",{scope:"row",children:"Links"}),e.jsxs("td",{children:[e.jsxs("a",{href:"https://www.figma.com/proto/tIKzHa5KvHHyosgIgyBswB/Design-Tokens",children:["Design",e.jsx(r,{name:o.externalLink,style:{fontSize:".7rem",paddingLeft:".3rem",paddingRight:".2rem"}})]}),e.jsx("br",{}),e.jsxs("a",{href:"https://github.com/ovh/design-system/tree/master/packages/components/src/progress-bar",children:["Github",e.jsx(r,{name:o.externalLink,style:{fontSize:".7rem",paddingLeft:".3rem",paddingRight:".2rem"}})]})]})]})]})})]}),`
`,e.jsx(s.h2,{id:"anatomy",children:"Anatomy"}),`
`,e.jsx(s.p,{children:e.jsx(s.img,{src:"components/progress-bar/anatomy.png",alt:"Component anatomy",title:"Component anatomy"})}),`
`,e.jsxs(s.ol,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Track"}),": displays the visual range of progression, from a starting to an ending position"]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Filled track"}),": represents the visual progression value within the ",e.jsx(s.strong,{children:"Progress Bar"}),"."]}),`
`]}),`
`,e.jsx(s.h2,{id:"usage",children:"Usage"}),`
`,e.jsxs(s.p,{children:[e.jsx(s.strong,{children:"Progress Bar"})," component is only used in process progression, such as submitting, uploading or saving items."]}),`
`,e.jsx(s.h3,{id:"dos--donts",children:"Dos & Don'ts"}),`
`,e.jsx(t,{children:`
| ✅ Do                                                                                                                                                                                                                                                                                                                                    |
|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------                                                                                                                                                          |
| - Use **Progress Bar** for quantifiable loading; if not, please use [**Spinner**](?path=/docs/ods-components-spinner--documentation) for complex content or [**Skeleton**](?path=/docs/ods-components-skeleton--documentation) for [**Text**](?path=/docs/ods-components-text--documentation)-only content |
`}),`
`,e.jsx(t,{children:`
| ❌ Don't                                                                                                                                                                          |
|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| - Use **Progress Bar** for data visualization                                                                                                                                    |
| - Use all three starting value, ending value and progress value labels at the same time                                                                                          |
`}),`
`,e.jsx(s.h2,{id:"placement",children:"Placement"}),`
`,e.jsxs(s.p,{children:[e.jsx(s.strong,{children:"Progress Bar"})," is usually centered in its container, and can be stretched to match the container width if necessary."]}),`
`,e.jsx(s.h2,{id:"behavior",children:"Behavior"}),`
`,e.jsxs(s.p,{children:[e.jsx(s.strong,{children:"Progress Bar"})," is filled from the minimum to the maximum value, depending on the progress described."]}),`
`,e.jsx(s.h2,{id:"variation",children:"Variation"}),`
`,e.jsx(s.p,{children:"N/A"}),`
`,e.jsx(s.h2,{id:"accessibility",children:"Accessibility"}),`
`,e.jsxs(s.p,{children:["User is being notified of its loading based on the ARIA ",e.jsx(s.code,{children:"live"})," property."]})]})}function C(n={}){const{wrapper:s}={...d(),...n.components};return s?e.jsx(s,{...n,children:e.jsx(a,{...n})}):a(n)}export{C as default};
