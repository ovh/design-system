import{j as e}from"./jsx-runtime-Cfl8ynUo.js";import{useMDXComponents as i}from"./index-ZwkxtaJJ.js";import{t as a,l}from"./ods-react60-CRx7zEey.js";import{M as c,C as d}from"./index-MSKBj7dO.js";import{P as o,O as p,A as m}from"./progress-bar.stories--5_lK8Gp.js";import{B as g}from"./Banner-BZtChV1g.js";import{I as h,B as u}from"./IdentityCard-BnvyxLnN.js";import{C as x}from"./Canvas-BW6AcvSa.js";import{E as j}from"./ExternalLink-izdABMGv.js";import{H as r}from"./Heading-Dphh9YsV.js";import"./index-jIWwRBLr.js";import"./index-2w0W-O47-BJ19ihbZ.js";import"./iframe-Cbr9ww7Z.js";import"./index-DWDEzXrj.js";import"./index-N93khynk.js";import"./index-CXQShRbs.js";import"./index-DrFu-skq.js";import"./ProgressBar-DSRyE-jh.js";import"./index-CqY9YpN0.js";import"./controls-BtiQQn1l.js";import"./lz-string-D7LvY2XH.js";import"./index-_3rfn-bB.js";import"./meta-B7heVWH0.js";import"./source-CPEZJ6oD.js";import"./Link-BWQEuWpd-DsrdP0qI.js";import"./ods-react235-aAAP9SXj.js";function t(n){const s={em:"em",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",...i(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(c,{of:o,name:"Documentation"}),`
`,e.jsx(g,{of:o}),`
`,e.jsx(s.p,{children:e.jsx(s.em,{children:"A horizontal bar indicating the current completion status of a long-running task, usually updated continuously as the task progresses, instead of in discrete steps."})}),`
`,e.jsx(d,{of:p,sourceState:"none"}),`
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
`,e.jsxs(s.p,{children:["To ensure the ",e.jsx(s.strong,{children:"Progress Bar"})," is correctly recognized, an ",e.jsx(j,{href:"https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label",children:"aria-label"})," should be added to explicitly identify it."]}),`
`,e.jsx(x,{of:m,sourceState:"shown"}),`
`,e.jsxs(s.p,{children:[e.jsx(a,{name:l.circleCheck,style:{color:"var(--ods-color-success-500)"}})," Screen readers will announce the label, the value and the progress bar."]})]})}function K(n={}){const{wrapper:s}={...i(),...n.components};return s?e.jsx(s,{...n,children:e.jsx(t,{...n})}):t(n)}export{K as default};
