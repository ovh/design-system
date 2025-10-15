import{j as e}from"./jsx-runtime-Cfl8ynUo.js";import{useMDXComponents as o}from"./index-ZwkxtaJJ.js";import{t as a,l}from"./ods-react60-CRx7zEey.js";import{M as c,C as d}from"./index-8pGbFWRq.js";import{Q as i,O as m,A as u}from"./quantity.stories-ClNmUMAs.js";import{B as h}from"./Banner-CNp5SML8.js";import{I as p,B as x}from"./IdentityCard-e2WB6ddF.js";import{C as j}from"./Canvas-Df5XpfVk.js";import{E as f}from"./ExternalLink-izdABMGv.js";import{H as t}from"./Heading-hbfjmHNc.js";import"./index-jIWwRBLr.js";import"./index-2w0W-O47-BJ19ihbZ.js";import"./iframe-D7nmkxLr.js";import"./index-DWDEzXrj.js";import"./index-N93khynk.js";import"./index-CXQShRbs.js";import"./index-DrFu-skq.js";import"./FormFieldLabel-DW-nAxje.js";import"./index-CqY9YpN0.js";import"./Text-vMb3-i8V.js";import"./use-locale-context-BIV2aQtl.js";import"./use-field-context-xoqKb8Fu.js";import"./Button-Tqe-VRSF.js";import"./Spinner-DNePmVpu.js";import"./colors-DSObuHxd.js";import"./icon-name-C581wThh.js";import"./controls-BtiQQn1l.js";import"./TooltipTrigger-Iu3rt7LP-DQH4Rvrv.js";import"./index-CTDx-6u2.js";import"./lz-string-U2heoObX.js";import"./meta-B7heVWH0.js";import"./source-CPEZJ6oD.js";import"./Link-BWQEuWpd-DsrdP0qI.js";import"./ods-react236-aAAP9SXj.js";function r(s){const n={code:"code",em:"em",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",...o(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(c,{of:i,name:"Documentation"}),`
`,e.jsx(h,{of:i}),`
`,e.jsx(n.p,{children:e.jsxs(n.em,{children:[e.jsx(n.strong,{children:"Quantity"})," is a component used to enter and modify a numeric value in a responsive and easy way"]})}),`
`,e.jsx(d,{of:m,sourceState:"none"}),`
`,e.jsx(t,{label:"Overview",level:2}),`
`,e.jsxs(p,{aliases:["Numeric","Number input","Amount"],figmaLink:"https://www.figma.com/design/9jDDTcR4a9jPRFcdjawAlf/ODS---UI-Kit?node-id=49-9160",githubUrl:"https://github.com/ovh/design-system/tree/master/packages/ods-react/src/components/quantity",name:"Quantity",children:[e.jsxs(n.p,{children:["The ",e.jsx(n.strong,{children:"Quantity"})," component provides a user-friendly interface for selecting or entering numerical values."]}),e.jsxs(n.p,{children:["It includes an ",e.jsx(n.strong,{children:"Input"})," field combined with increment and decrement ",e.jsx(n.strong,{children:"Buttons"})," to adjust the value easily."]})]}),`
`,e.jsx(t,{label:"Usage",level:2}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Quantity"})," is used to quickly adjust with a few clicks a numeric value within defined parameters."]}),`
`,e.jsx(n.p,{children:"Limits can be set as minimum or maximum value. In that case, the numeric value cannot exceed the defined boundaries."}),`
`,e.jsx(t,{label:"Dos & Don'ts",level:3}),`
`,e.jsx(x,{donts:["- Don't use the Quantity component for large numeric changes that would require excessive clicking. Prefer a freeform numeric input or slider in those cases","- Don't use the component outside of quantitative contexts: it should only be used to adjust measurable numeric values (e.g., quantity, amount)"],dos:["- Use the Quantity component for small, incremental adjustments where users are likely to increase or decrease values with just a few clicks","- Always allow users to manually input a number directly into the field, not just through the increment/decrement buttons","- Set appropriate min/max limits to prevent invalid or unintended values","- Provide contextual labels or grouping when needed to clarify what the quantity refers to"]}),`
`,e.jsx(t,{label:"Best Practices in Context",level:3}),`
`,e.jsx(n.p,{children:e.jsx(n.img,{src:"components/quantity/anatomy.png",alt:"Component anatomy",title:"Component anatomy"})}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.strong,{children:"Quantity"})}),`
`,e.jsx(n.li,{children:e.jsx(n.strong,{children:"Decrement button"})}),`
`,e.jsx(n.li,{children:e.jsx(n.strong,{children:"Input field"})}),`
`,e.jsx(n.li,{children:e.jsx(n.strong,{children:"Increment button"})}),`
`]}),`
`,e.jsx(t,{label:"Placement",level:2}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Quantity"})," can be used to let users easily change an amount of items, for example, or similar situations."]}),`
`,e.jsxs(n.p,{children:["It should be used with numeric ",e.jsx(n.strong,{children:"Input"})," that are in a fairly narrow range."]}),`
`,e.jsx(t,{label:"Behavior",level:2}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Quantity"})," numeric field can be edited directly by the user."]}),`
`,e.jsxs(n.p,{children:["The user can also decrease or increase the value by clicking on the ",e.jsx(n.strong,{children:"Buttons"}),"."]}),`
`,e.jsx(n.p,{children:"In case that limits have been set to minimum and maximum value, corresponding control will be disabled when this value has been reached."}),`
`,e.jsxs(n.p,{children:["Each item of the ",e.jsx(n.strong,{children:"Quantity"})," component can be focused; the whole component can be disabled at once."]}),`
`,e.jsx(t,{label:"Navigation",level:2}),`
`,e.jsx(t,{label:"Focus Management",level:3}),`
`,e.jsxs(n.p,{children:["When the ",e.jsx(n.strong,{children:"Quantity"})," component is focused, focus is automatically set to the input if not disabled."]}),`
`,e.jsxs(n.p,{children:["If the ",e.jsx(n.strong,{children:"Input"})," field is read-only, it can still receive focus but cannot be edited."]}),`
`,e.jsx(t,{label:"General Keyboard Shortcuts",level:3}),`
`,e.jsxs(n.p,{children:["Pressing ",e.jsx(n.code,{children:"Tab"})," moves focus forward the input field."]}),`
`,e.jsxs(n.p,{children:["Pressing ",e.jsx(n.code,{children:"Shift"})," + ",e.jsx(n.code,{children:"Tab"})," moves focus backward through the interactive elements."]}),`
`,e.jsxs(n.p,{children:["Pressing ",e.jsx(n.code,{children:"Arrow Up"})," when focused in the Input field increases the value."]}),`
`,e.jsxs(n.p,{children:["Pressing ",e.jsx(n.code,{children:"Arrow Down"})," when focused in the Input field decreases the value."]}),`
`,e.jsx(t,{label:"Accessibility",level:2}),`
`,e.jsxs(n.p,{children:["This component complies with the ",e.jsx(f,{href:"https://www.w3.org/WAI/ARIA/apg/patterns/spinbutton/",children:"Spinbutton WAI-ARIA design pattern"})]}),`
`,e.jsx(t,{label:"Always provide an explicit label",level:3}),`
`,e.jsxs(n.p,{children:["Every ",e.jsx(n.strong,{children:"Quantity"}),` must have a clear and explicit label to ensure that users (especially screen reader users) understand its purpose,
using either `,e.jsx(n.strong,{children:"FormField"})," or a native label tag."]}),`
`,e.jsx(j,{of:u,sourceState:"shown"}),`
`,e.jsxs(n.p,{children:[e.jsx(a,{name:l.circleCheck,style:{color:"var(--ods-color-success-500)"}})," Screen readers will announce the label and the quantity field."]})]})}function Y(s={}){const{wrapper:n}={...o(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(r,{...s})}):r(s)}export{Y as default};
