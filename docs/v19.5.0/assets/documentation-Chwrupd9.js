import{j as e}from"./jsx-runtime-Cfl8ynUo.js";import{useMDXComponents as d}from"./index-ZwkxtaJJ.js";import{a as o,l as a}from"./ods-react67-C395g5lW.js";import{M as m}from"./index-Cw5r0Kn8.js";import{M as l,O as h,A as p,a as u,b as x}from"./meter.stories-Bet2sP3n.js";import{A as b}from"./Anatomy-DkXJCwiR.js";import{B as j}from"./Banner-X7WOeBPc.js";import{I as f,B as v}from"./IdentityCard-D9LjZbLA.js";import{C as n}from"./Canvas-i2Tfjesg.js";import{E as i}from"./ExternalLink-C5hGBmwh.js";import{H as t}from"./Heading-Dep_rTif.js";import"./index-jIWwRBLr.js";import"./index-CWkFp9WS-BSIT86NH.js";import"./iframe-DCzti3mm.js";import"./index-DWDEzXrj.js";import"./index-N93khynk.js";import"./index-CXQShRbs.js";import"./index-DrFu-skq.js";import"./index-CqY9YpN0.js";import"./Text-CW33_IfE.js";import"./controls-BtiQQn1l.js";import"./Table-D8Me597i-NC3k9YIT.js";import"./Table-5ah53JFf.js";import"./TooltipTrigger-C3aN0eJB-DwV7p8FS.js";import"./ods-react121-5kwUyuQy.js";import"./index-CSeLFT3z.js";import"./lz-string-U2heoObX.js";import"./meta-DcQbZjt_.js";import"./source-CPEZJ6oD.js";import"./ResetTheme-xqxcB8cs.js";import"./tokens-BtVMeYnn.js";import"./Link-TMoA1i18-BDwROQOD.js";import"./Divider-wQyo85oE-CpSK6tnQ.js";function c(s){const r={li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...d(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(m,{of:l,name:"Documentation"}),`
`,e.jsx(j,{of:l}),`
`,e.jsx(n,{of:h,sourceState:"none"}),`
`,e.jsx(t,{label:"Overview",level:2}),`
`,e.jsx(f,{aliases:[],figmaLink:"https://www.figma.com/design/9jDDTcR4a9jPRFcdjawAlf/branch/YdqCQ0e4CtGBm7dLbuLl1h/ODS---UI-Kit?node-id=10494-5637&t=9pIeofapdgMDhhF4-0",githubUrl:"https://github.com/ovh/design-system/tree/master/packages/ods-react/src/components/meter",name:"Meter",startingVersion:19,children:e.jsxs(r.p,{children:["The ",e.jsx(r.strong,{children:"Meter"})," component visually represents a quantitative value within a defined range."]})}),`
`,e.jsx(t,{label:"Usage",level:2}),`
`,e.jsxs(r.p,{children:["The ",e.jsx(r.strong,{children:"Meter"}),` component represents a quantitative value such as resource usage, storage availability, or other bounded metrics.
It is distinct from a progress bar due to its focus on measurement and thresholds rather than progress toward a goal.`]}),`
`,e.jsxs(r.p,{children:["Additionally, the ",e.jsx(r.strong,{children:"Meter"})," is primarily static, representing a fixed state or measurement, whereas the progress bar is dynamic, reflecting continuous updates or progress over time."]}),`
`,e.jsx(t,{label:"Dos & Don'ts",level:3}),`
`,e.jsx(v,{donts:["Don't use a Meter to represent unbounded progress (use a progress bar instead)","Avoid separating the Meter and its associated value across different sections of the UI to prevent confusion","Avoid excessive customization that compromises readability or accessibility"],dos:["- Use the Meter to represent bounded measurements, such as disk usage or CPU load","- Customize thresholds and colors to provide meaningful visual cues","- Include appropriate labels when context is not immediately clear"]}),`
`,e.jsx(t,{label:"Best Practices in Context",level:3}),`
`,e.jsx(b,{src:"components/meter/anatomy.png"}),`
`,e.jsxs(r.ol,{children:[`
`,e.jsx(r.li,{children:e.jsx(r.strong,{children:"Meter"})}),`
`,e.jsx(r.li,{children:e.jsx(r.strong,{children:"Track"})}),`
`,e.jsx(r.li,{children:e.jsx(r.strong,{children:"Fill"})}),`
`]}),`
`,e.jsx(t,{label:"Placement",level:2}),`
`,e.jsxs(r.p,{children:["The placement of the ",e.jsx(r.strong,{children:"Meter"})," depends on its use case and the context within the UI."]}),`
`,e.jsxs(r.p,{children:["Place the ",e.jsx(r.strong,{children:"Meter"})," close to the element it represents (e.g., near a resource title)."]}),`
`,e.jsxs(r.p,{children:["If the ",e.jsx(r.strong,{children:"Meter"}),' is tied to a specific numeric value (e.g., "75% used"), display the value nearby for clarity, directly adjacent to the component.']}),`
`,e.jsx(r.p,{children:"Include appropriate labels when context is not immediately clear:"}),`
`,e.jsxs(r.ul,{children:[`
`,e.jsx(r.li,{children:"inline: labels can be placed above, below or beside the Meter."}),`
`,e.jsx(r.li,{children:"surrounding: labels for minimum and maximum values can be positioned at opposite ends of the track, as needed."}),`
`,e.jsx(r.li,{children:"hidden: for visual-only representation."}),`
`]}),`
`,e.jsx(t,{label:"Behavior",level:2}),`
`,e.jsxs(r.p,{children:[`Value representation supports minimum, maximum, and current value inputs.
The filled portion of the `,e.jsx(r.strong,{children:"Meter"})," is dynamically adjusted based on the value."]}),`
`,e.jsx(r.p,{children:`Low and high thresholds can be specified to visually indicate important ranges.
Color will change based on those thresholds.`}),`
`,e.jsxs(r.p,{children:[`The coloring behavior may be updated through the optimum attribute.
See the `,e.jsx(i,{href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/meter#optimum",children:"optimum documentation"})," for more information."]}),`
`,e.jsx(t,{label:"Navigation",level:2}),`
`,e.jsxs(r.p,{children:["The ",e.jsx(r.strong,{children:"Meter"})," component is non-interactive and does not receive keyboard focus."]}),`
`,e.jsx(t,{label:"Accessibility",level:2}),`
`,e.jsxs(r.p,{children:["To ensure proper accessibility, ",e.jsx(r.strong,{children:"Meter"})," must be correctly labeled."]}),`
`,e.jsx(t,{label:"Always provide an explicit label",level:3}),`
`,e.jsxs(r.p,{children:["Every ",e.jsx(r.strong,{children:"Meter"}),` must have a clear and explicit label to ensure that users (especially screen reader users) understand its purpose,
using either an `,e.jsx(i,{href:"https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label",children:"aria-label"}),`
or an `,e.jsx(i,{href:"https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby",children:"aria-labelledby"})," attribute."]}),`
`,e.jsx(n,{of:p,sourceState:"shown"}),`
`,e.jsxs(r.p,{children:[e.jsx(o,{name:a.circleCheck,style:{color:"var(--ods-color-success-500)"}})," Screen readers will announce the label and the meter information."]}),`
`,e.jsx(n,{of:u,sourceState:"shown"}),`
`,e.jsxs(r.p,{children:[e.jsx(o,{name:a.circleCheck,style:{color:"var(--ods-color-success-500)"}})," Screen readers will announce the label and the meter information."]}),`
`,e.jsx(t,{label:"Improve value readability",level:3}),`
`,e.jsxs(r.p,{children:[`Numbers aren't always user-friendly.
You can use the `,e.jsx(i,{href:"https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-valuetext",children:"aria-valuetext"}),`
attribute to present the current value in a more user-friendly, human-understandable way.`]}),`
`,e.jsx(n,{of:x,sourceState:"shown"}),`
`,e.jsxs(r.p,{children:[e.jsx(o,{name:a.circleCheck,style:{color:"var(--ods-color-success-500)"}})," Screen readers will announce the label and the meter information in a more user-friendly, human-understandable way."]})]})}function $(s={}){const{wrapper:r}={...d(),...s.components};return r?e.jsx(r,{...s,children:e.jsx(c,{...s})}):c(s)}export{$ as default};
