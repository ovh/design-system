import{j as e}from"./jsx-runtime-Cz3huCOb.js";import{u as a}from"./index-BRdWgBGF.js";import{M as l,C as m}from"./index-C7ZQW9Xo.js";import{P as t,O as c}from"./progress-bar.stories-D0i5NJQh.js";import{B as d}from"./Banner-4suhesey.js";import{I as p,A as g,B as h}from"./IdentityCard-BtdKCWJ5.js";import{H as n}from"./Heading-BWgLZzFp.js";import{S as r}from"./StorybookLink-CbljYtBK.js";import"./iframe-O-MMI8BM.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-B_J8iUie.js";import"./index-DX_4BEHg.js";import"./index-DrFu-skq.js";import"./lit-html-D-ZEPr28.js";import"./controls-D697y8_r.js";import"./index-D19O3a7h.js";import"./index-BYszAjkJ.js";function i(o){const s={code:"code",em:"em",img:"img",li:"li",ol:"ol",p:"p",span:"span",strong:"strong",...a(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{of:t,name:"Documentation"}),`
`,e.jsx(d,{of:t}),`
`,e.jsx(s.p,{children:e.jsx(s.em,{children:"A horizontal bar indicating the current completion status of a long-running task, usually updated continuously as the task progresses, instead of in discrete steps."})}),`
`,e.jsx(m,{of:c,sourceState:"none"}),`
`,e.jsx(n,{label:"Overview",level:2}),`
`,e.jsx(p,{aliases:["Progress","Progress Loader","Preloader","Loading Bar","Progress Indicator"],atomicType:g.atom,figmaLink:"https://www.figma.com/design/9jDDTcR4a9jPRFcdjawAlf/ODS---UI-Kit?node-id=49-8976",githubUrl:"https://github.com/ovh/design-system/tree/master/packages/ods/src/components/progress-bar",name:"Progress Bar",relatedComponents:[{name:"Text"}],children:e.jsxs(s.p,{children:["The ",e.jsx(s.strong,{children:"Progress Bar"}),` component is used to indicate the progress of a task or process to users. It visually
represents the completion percentage, providing users with feedback on the status of ongoing operations, such as
`,e.jsx(r,{kind:"ODS Components/Form elements/File Upload",label:"File upload",story:"Documentation"}),", downloads, or form submissions."]})}),`
`,e.jsx(n,{label:"Anatomy",level:2}),`
`,e.jsx(s.p,{children:e.jsx(s.img,{src:"components/progress-bar/anatomy.png",alt:"Component anatomy",title:"Component anatomy"})}),`
`,e.jsxs(s.ol,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Track"}),": displays the visual range of progression, from a starting to an ending position"]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Filled track"}),": represents the visual progression value within the ",e.jsx(s.strong,{children:"Progress Bar"}),"."]}),`
`]}),`
`,e.jsx(n,{label:"Usage",level:2}),`
`,e.jsxs(s.p,{children:[e.jsx(s.strong,{children:"Progress Bar"})," component is only used in process progression, such as submitting, uploading or saving items."]}),`
`,e.jsx(n,{label:"Dos & Don'ts",level:3}),`
`,e.jsx(h,{donts:["- Use Progress Bar for data visualization","- Use all three starting value, ending value and progress value labels at the same time"],dos:[e.jsxs(s.span,{children:["- Use Progress Bar for quantifiable loading; if not, please use ",e.jsx(r,{kind:"ODS Components/Spinner",label:"Spinner",story:"Documentation"})," for complex content or ",e.jsx(r,{kind:"ODS Components/Skeleton",label:"Skeleton",story:"Documentation"})," for ",e.jsx(r,{kind:"ODS Components/Text",label:"Text",story:"Documentation"}),"-only content"]})]}),`
`,e.jsx(n,{label:"Placement",level:2}),`
`,e.jsxs(s.p,{children:[e.jsx(s.strong,{children:"Progress Bar"})," is usually centered in its container, and can be stretched to match the container width if necessary."]}),`
`,e.jsx(n,{label:"Behavior",level:2}),`
`,e.jsxs(s.p,{children:[e.jsx(s.strong,{children:"Progress Bar"})," is filled from the minimum to the maximum value, depending on the progress described."]}),`
`,e.jsx(n,{label:"Variation",level:2}),`
`,e.jsx(s.p,{children:"N/A"}),`
`,e.jsx(n,{label:"Accessibility",level:2}),`
`,e.jsxs(s.p,{children:["User is being notified of its loading based on the ARIA ",e.jsx(s.code,{children:"live"})," property."]})]})}function I(o={}){const{wrapper:s}={...a(),...o.components};return s?e.jsx(s,{...o,children:e.jsx(i,{...o})}):i(o)}export{I as default};
