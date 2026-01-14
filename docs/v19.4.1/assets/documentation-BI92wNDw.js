import{j as e}from"./jsx-runtime-Cfl8ynUo.js";import{useMDXComponents as a}from"./index-ZwkxtaJJ.js";import{a as l,l as c}from"./ods-react64-C395g5lW.js";import{M as d}from"./index-C3P7rize.js";import{P as n,O as p,A as m}from"./progress-bar.stories-QCokMNHe.js";import{A as g}from"./Anatomy-DkXJCwiR.js";import{B as h}from"./Banner-pQsjs-k1.js";import{I as u,B as x}from"./IdentityCard-BHvRCB68.js";import{C as t}from"./Canvas-ClwM1ePO.js";import{E as f}from"./ExternalLink-C9tV86xX.js";import{H as r}from"./Heading-DAsItneX.js";import"./index-jIWwRBLr.js";import"./index-CWkFp9WS-BSIT86NH.js";import"./iframe-B-1i39SD.js";import"./index-DWDEzXrj.js";import"./index-N93khynk.js";import"./index-CXQShRbs.js";import"./index-DrFu-skq.js";import"./index-CqY9YpN0.js";import"./controls-BtiQQn1l.js";import"./Table-DVdtSe4m-Co7uf3pc.js";import"./Table-Bq5w2nKq.js";import"./TooltipTrigger-DxEeTVF8-B5Le9OVu.js";import"./ods-react114-5kwUyuQy.js";import"./index-lGh5KcWi.js";import"./lz-string-U2heoObX.js";import"./meta-DxXVpXmq.js";import"./source-CPEZJ6oD.js";import"./ResetTheme-BVzaMHe3.js";import"./tokens-VHDJ0kGa.js";import"./Link-BhqYqKFa-BDwROQOD.js";import"./Divider-DmVNyNnn-DCNXheUh.js";function i(o){const s={em:"em",li:"li",ol:"ol",p:"p",strong:"strong",...a(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(d,{of:n,name:"Documentation"}),`
`,e.jsx(h,{of:n}),`
`,e.jsx(s.p,{children:e.jsx(s.em,{children:"A horizontal bar indicating the current completion status of a long-running task, usually updated continuously as the task progresses, instead of in discrete steps."})}),`
`,e.jsx(t,{of:p,sourceState:"none"}),`
`,e.jsx(r,{label:"Overview",level:2}),`
`,e.jsx(u,{aliases:["Progress","Progress Loader","Preloader","Loading Bar","Progress Indicator"],figmaLink:"https://www.figma.com/design/9jDDTcR4a9jPRFcdjawAlf/ODS---UI-Kit?node-id=49-8976",githubUrl:"https://github.com/ovh/design-system/tree/master/packages/ods-react/src/components/progress-bar",name:"Progress Bar",children:e.jsxs(s.p,{children:["The ",e.jsx(s.strong,{children:"Progress Bar"}),` component is used to indicate the progress of a task or process to users. It visually
represents the completion percentage, providing users with feedback on the status of ongoing operations, such as
file uploads, downloads, or form submissions.`]})}),`
`,e.jsx(r,{label:"Usage",level:2}),`
`,e.jsxs(s.p,{children:[e.jsx(s.strong,{children:"Progress Bar"})," component is only used in process progression, such as submitting, uploading or saving items."]}),`
`,e.jsx(r,{label:"Dos & Don'ts",level:3}),`
`,e.jsx(x,{donts:["- Don't use a Progress Bar to visualize static data or compare values, use a chart or graph instead","- Don't display all three labels (start value, end value, current value) at the same time","- Don't rely solely on color to communicate progress, include text or value where helpful","- Don't use Progress Bar for instantaneous actions where progress feedback is not meaningful, use a spinner instead"],dos:["- Use a Progress Bar to represent linear, quantifiable progression in processes like uploads or submissions","- Prefer Progress Bar when the completion state is measurable (e.g. 0–100%), and users benefit from visual feedback on progress","- Use clear labels or indicators (like percentage or step descriptions) if it adds clarity to the task","- Pair the Progress Bar with contextual messaging to clarify what is being processed and what happens next"]}),`
`,e.jsx(r,{label:"Best Practices in Context",level:3}),`
`,e.jsx(g,{src:"components/progress-bar/anatomy.png"}),`
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
`,e.jsxs(s.p,{children:["To ensure the ",e.jsx(s.strong,{children:"Progress Bar"})," is correctly recognized, an ",e.jsx(f,{href:"https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label",children:"aria-label"})," should be added to explicitly identify it."]}),`
`,e.jsx(t,{of:m,sourceState:"shown"}),`
`,e.jsxs(s.p,{children:[e.jsx(l,{name:c.circleCheck,style:{color:"var(--ods-color-success-500)"}})," Screen readers will announce the label, the value and the progress bar."]})]})}function V(o={}){const{wrapper:s}={...a(),...o.components};return s?e.jsx(s,{...o,children:e.jsx(i,{...o})}):i(o)}export{V as default};
