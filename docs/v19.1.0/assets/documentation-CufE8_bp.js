import{j as e}from"./jsx-runtime-VM66peLj.js";import{useMDXComponents as a}from"./index-DQB45XCM.js";import{a as l,o as c}from"./ods-react61-BFiU7C5S.js";import{M as d,C as o}from"./index-DQDMPrC3.js";import{P as t,O as p,A as m}from"./progress-bar.stories--pg8b1k5.js";import{B as g}from"./Banner-D5YsTkFA.js";import{I as h,B as u}from"./IdentityCard-C39Eam7s.js";import{E as x}from"./ExternalLink-F7ndcp9T.js";import{H as r}from"./Heading-BTR1K1mm.js";import"./index-D_CmzhJ4.js";import"./index-2w0W-O47-BJ19ihbZ.js";import"./iframe-llaHorau.js";import"./index-ChzAxGiP.js";import"./index-CucsY3YN.js";import"./index-CXQShRbs.js";import"./index-DrFu-skq.js";import"./ProgressBar-D8xx6uVy.js";import"./index-CkQHsVsO.js";import"./controls-BtiQQn1l.js";import"./Link-DTswNFmS-CEk9YBDP.js";import"./Divider-DwZugXnI-RR--JbES.js";import"./ods-react222-B9lkGKUh.js";function i(n){const s={em:"em",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",...a(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(d,{of:t,name:"Documentation"}),`
`,e.jsx(g,{of:t}),`
`,e.jsx(s.p,{children:e.jsx(s.em,{children:"A horizontal bar indicating the current completion status of a long-running task, usually updated continuously as the task progresses, instead of in discrete steps."})}),`
`,e.jsx(o,{of:p,sourceState:"none"}),`
`,e.jsx(r,{label:"Overview",level:2}),`
`,e.jsx(h,{aliases:["Progress","Progress Loader","Preloader","Loading Bar","Progress Indicator"],figmaLink:"https://www.figma.com/design/9jDDTcR4a9jPRFcdjawAlf/ODS---UI-Kit?node-id=49-8976",githubUrl:"https://github.com/ovh/design-system/tree/master/packages/ods-react/src/components/progress-bar",name:"Progress Bar",children:e.jsxs(s.p,{children:["The ",e.jsx(s.strong,{children:"Progress Bar"}),` component is used to indicate the progress of a task or process to users. It visually
represents the completion percentage, providing users with feedback on the status of ongoing operations, such as
file uploads, downloads, or form submissions.`]})}),`
`,e.jsx(r,{label:"Usage",level:2}),`
`,e.jsxs(s.p,{children:[e.jsx(s.strong,{children:"Progress Bar"})," component is only used in process progression, such as submitting, uploading or saving items."]}),`
`,e.jsx(r,{label:"Dos & Don'ts",level:3}),`
`,e.jsx(u,{donts:["- Don't use a Progress Bar to visualize static data or compare values, use a chart or graph instead","- Don't display all three labels (start value, end value, current value) at the same time","- Don't rely solely on color to communicate progress, include text or value where helpful","- Don't use Progress Bar for instantaneous actions where progress feedback is not meaningful, use a spinner instead"],dos:["- Use a Progress Bar to represent linear, quantifiable progression in processes like uploads or submissions","- Prefer Progress Bar when the completion state is measurable (e.g. 0–100%), and users benefit from visual feedback on progress","- Use clear labels or indicators (like percentage or step descriptions) if it adds clarity to the task","- Pair the Progress Bar with contextual messaging to clarify what is being processed and what happens next"]}),`
`,e.jsx(r,{label:"Best Practices in Context",level:3}),`
`,e.jsx(s.p,{children:e.jsx(s.img,{src:"components/progress-bar/anatomy.png",alt:"Component anatomy",title:"Component anatomy"})}),`
`,e.jsxs(s.ol,{children:[`
`,e.jsx(s.li,{children:e.jsx(s.strong,{children:"Progress Bar"})}),`
`,e.jsx(s.li,{children:e.jsx(s.strong,{children:"Track"})}),`
`,e.jsx(s.li,{children:e.jsx(s.strong,{children:"Progress fill"})}),`
`]}),`
`,e.jsx(r,{label:"Placement",level:2}),`
`,e.jsxs(s.p,{children:[e.jsx(s.strong,{children:"Progress Bar"})," is usually centered in its container, and can be stretched to match the container width if necessary."]}),`
`,e.jsx(r,{label:"Behavior",level:2}),`
`,e.jsxs(s.p,{children:[e.jsx(s.strong,{children:"Progress Bar"})," is filled from the minimum to the maximum value, depending on the progress described."]}),`
`,e.jsx(r,{label:"Navigation",level:2}),`
`,e.jsxs(s.p,{children:["The ",e.jsx(s.strong,{children:"Progress Bar"})," component is non-interactive and does not receive keyboard focus. It is purely visual and used to indicate progress status without affecting keyboard navigation."]}),`
`,e.jsx(r,{label:"Accessibility",level:2}),`
`,e.jsxs(s.p,{children:[e.jsx(s.strong,{children:"Progress Bar"})," component should be properly identified and structured to ensure it is accessible to assistive technologies."]}),`
`,e.jsx(r,{label:"Linking the Progress Bar to loading details",level:3}),`
`,e.jsxs(s.p,{children:["To ensure the ",e.jsx(s.strong,{children:"Progress Bar"})," is correctly recognized, an ",e.jsx(x,{href:"https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label",children:"aria-label"})," should be added to explicitly identify it."]}),`
`,e.jsx(o,{of:m,sourceState:"shown"}),`
`,e.jsxs(s.p,{children:[e.jsx(l,{name:c.circleCheck,style:{color:"var(--ods-color-success-500)"}})," Screen readers will announce the label, the value and the progress bar."]})]})}function X(n={}){const{wrapper:s}={...a(),...n.components};return s?e.jsx(s,{...n,children:e.jsx(i,{...n})}):i(n)}export{X as default};
