import{j as e,M as c,C as m}from"./index-aSJOi-xY.js";import{u as d}from"./index-D_oymSD0.js";import{P as a,O as p}from"./progress-bar.stories-C1-RaAL_.js";import{B as g}from"./Banner-DfBQCKAd.js";import{I as h,A as u,B as x}from"./IdentityCard-bFWvbFx8.js";import{H as n}from"./Heading-fUBW5LMg.js";import{S as r,O as t,a as i}from"./StorybookLink-CdkDDCl2.js";import"./iframe-Cjn0x15a.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-D-8MO0q_.js";import"./index-DX_4BEHg.js";import"./index-DrFu-skq.js";import"./controls-DX883vx3.js";import"./index-B1WyGMUD.js";import"./index-DduIf26o.js";function l(o){const s={code:"code",em:"em",img:"img",li:"li",ol:"ol",p:"p",span:"span",strong:"strong",...d(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(c,{of:a,name:"Documentation"}),`
`,e.jsx(g,{of:a}),`
`,e.jsx(s.p,{children:e.jsx(s.em,{children:"A horizontal bar indicating the current completion status of a long-running task, usually updated continuously as the task progresses, instead of in discrete steps."})}),`
`,e.jsx(m,{of:p,sourceState:"none"}),`
`,e.jsx(n,{label:"Overview",level:2}),`
`,e.jsx(h,{aliases:["Progress","Progress Loader","Preloader","Loading Bar","Progress Indicator"],atomicType:u.atom,figmaLink:"https://www.figma.com/design/9jDDTcR4a9jPRFcdjawAlf/ODS---UI-Kit?node-id=49-8976",githubUrl:"https://github.com/ovh/design-system/tree/master/packages/ods/src/components/progress-bar",name:"Progress Bar",relatedComponents:[{name:"Text"}],children:e.jsxs(s.p,{children:["The ",e.jsx(s.strong,{children:"Progress Bar"}),` component is used to indicate the progress of a task or process to users. It visually
represents the completion percentage, providing users with feedback on the status of ongoing operations, such as
`,e.jsx(r,{kind:t.fileUpload,label:"File upload",story:i.documentation}),", downloads, or form submissions."]})}),`
`,e.jsx(n,{label:"Anatomy",level:2}),`
`,e.jsx(s.p,{children:e.jsx(s.img,{src:"components/progress-bar/anatomy.png",alt:"Component anatomy",title:"Component anatomy"})}),`
`,e.jsxs(s.ol,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Track"}),": displays the visual range of progression, from a starting to an ending position"]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Filled track"}),": represents the visual progression value within the ",e.jsx(s.strong,{children:"Progress Bar"}),"."]}),`
`]}),`
`,e.jsx(n,{label:"Usage",level:2}),`
`,e.jsxs(s.p,{children:[e.jsx(s.strong,{children:"Progress Bar"})," component is only used in process progression, such as submitting, uploading or saving items."]}),`
`,e.jsx(n,{label:"Dos & Don'ts",level:3}),`
`,e.jsx(x,{donts:["- Use Progress Bar for data visualization","- Use all three starting value, ending value and progress value labels at the same time"],dos:[e.jsxs(s.span,{children:["- Use Progress Bar for quantifiable loading; if not, please use ",e.jsx(r,{kind:t.spinner,label:"Spinner",story:i.documentation})," for complex content or ",e.jsx(r,{kind:t.skeleton,label:"Skeleton",story:i.documentation})," for ",e.jsx(r,{kind:t.text,label:"Text",story:i.documentation}),"-only content"]})]}),`
`,e.jsx(n,{label:"Placement",level:2}),`
`,e.jsxs(s.p,{children:[e.jsx(s.strong,{children:"Progress Bar"})," is usually centered in its container, and can be stretched to match the container width if necessary."]}),`
`,e.jsx(n,{label:"Behavior",level:2}),`
`,e.jsxs(s.p,{children:[e.jsx(s.strong,{children:"Progress Bar"})," is filled from the minimum to the maximum value, depending on the progress described."]}),`
`,e.jsx(n,{label:"Variation",level:2}),`
`,e.jsx(s.p,{children:"N/A"}),`
`,e.jsx(n,{label:"Accessibility",level:2}),`
`,e.jsxs(s.p,{children:["User is being notified of its loading based on the ARIA ",e.jsx(s.code,{children:"live"})," property."]})]})}function M(o={}){const{wrapper:s}={...d(),...o.components};return s?e.jsx(s,{...o,children:e.jsx(l,{...o})}):l(o)}export{M as default};
