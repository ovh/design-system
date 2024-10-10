import{j as e}from"./jsx-runtime-Dn0LW--f.js";import{u as i}from"./index-DeyDdHvX.js";import{M as a,C as d,d as o}from"./index-BM3JsZOq.js";import{B as c}from"./banner-DPlTyHjv.js";import{P as t,O as l}from"./progress-bar.stories-BIEd6NWx.js";import{I as m,A as h}from"./identity-card-CwN41yUF.js";import"./iframe-6_jBXMSq.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-B_J8iUie.js";import"./index-DX_4BEHg.js";import"./index-DrFu-skq.js";import"./lit-html-D-ZEPr28.js";import"./control-C1r2wu67.js";import"./index-DryTTbHl.js";import"./ods-toggle2-LnXcgd5r.js";import"./chunk-FAE4I7JY-v0Th3BC0.js";function r(n){const s={a:"a",code:"code",em:"em",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",...i(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{of:t,name:"Documentation"}),`
`,e.jsx(c,{of:t}),`
`,e.jsx(s.p,{children:e.jsx(s.em,{children:"A horizontal bar indicating the current completion status of a long-running task, usually updated continuously as the task progresses, instead of in discrete steps."})}),`
`,e.jsx(d,{of:l,sourceState:"none"}),`
`,e.jsx(s.h2,{id:"overview",children:"Overview"}),`
`,e.jsxs("div",{className:"documentation-overview",children:[e.jsx("div",{children:e.jsxs(s.p,{children:["The ",e.jsx(s.strong,{children:"Progress Bar"}),` component is used to indicate the progress of a task or process to users. It visually
represents the completion percentage, providing users with feedback on the status of ongoing operations, such as
`,e.jsx(s.a,{href:"?path=/docs/ods-components-form-elements-file-upload--documentation",children:e.jsx(s.strong,{children:"File upload"})}),", downloads, or form submissions."]})}),e.jsx(m,{aliases:["Progress","Progress Loader","Preloader","Loading Bar","Progress Indicator"],atomicType:h.atom,className:"documentation-overview__table",figmaLink:"https://www.figma.com/design/9jDDTcR4a9jPRFcdjawAlf/ODS---UI-Kit?node-id=49-8976",githubUrl:"https://github.com/ovh/design-system/tree/master/packages/ods/src/components/progress-bar",name:"Progress Bar",relatedComponents:[{name:"Text"}]})]}),`
`,e.jsx(s.h2,{id:"anatomy",children:"Anatomy"}),`
`,e.jsx(s.p,{children:e.jsx(s.img,{src:"components/progress-bar/anatomy.png",alt:"Component anatomy",title:"Component anatomy"})}),`
`,e.jsxs(s.ol,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Track"}),": displays the visual range of progression, from a starting to an ending position"]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Filled track"}),": represents the visual progression value within the ",e.jsx(s.strong,{children:"Progress Bar"}),"."]}),`
`]}),`
`,e.jsx(s.h2,{id:"usage",children:"Usage"}),`
`,e.jsxs(s.p,{children:[e.jsx(s.strong,{children:"Progress Bar"})," component is only used in process progression, such as submitting, uploading or saving items."]}),`
`,e.jsx(s.h3,{id:"dos--donts",children:"Dos & Don'ts"}),`
`,e.jsx(o,{className:"documentation-do-table",children:`
| ✅ Do                                                                                                                                                                                                                                                                                                                                    |
|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------                                                                                                                                                          |
| - Use **Progress Bar** for quantifiable loading; if not, please use [**Spinner**](?path=/docs/ods-components-spinner--documentation) for complex content or [**Skeleton**](?path=/docs/ods-components-skeleton--documentation) for [**Text**](?path=/docs/ods-components-text--documentation)-only content |
`}),`
`,e.jsx(o,{className:"documentation-dont-table",children:`
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
`,e.jsxs(s.p,{children:["User is being notified of its loading based on the ARIA ",e.jsx(s.code,{children:"live"})," property."]})]})}function T(n={}){const{wrapper:s}={...i(),...n.components};return s?e.jsx(s,{...n,children:e.jsx(r,{...n})}):r(n)}export{T as default};
