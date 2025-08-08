import{j as e}from"./jsx-runtime-VM66peLj.js";import{useMDXComponents as a}from"./index-DQB45XCM.js";import{a as l,o as c}from"./ods-react61-BFiU7C5S.js";import{M as d,C as i}from"./index-DQDMPrC3.js";import{Q as r,O as u,A as m}from"./quantity.stories-DRUShiAk.js";import{B as h}from"./Banner-D5YsTkFA.js";import{I as p,B as x}from"./IdentityCard-C39Eam7s.js";import{E as j}from"./ExternalLink-F7ndcp9T.js";import{H as t}from"./Heading-BTR1K1mm.js";import"./index-D_CmzhJ4.js";import"./index-2w0W-O47-BJ19ihbZ.js";import"./iframe-llaHorau.js";import"./index-ChzAxGiP.js";import"./index-CucsY3YN.js";import"./index-CXQShRbs.js";import"./index-DrFu-skq.js";import"./FormFieldLabel-DQkMrZpp.js";import"./index-CkQHsVsO.js";import"./Text-B1XN51Xz.js";import"./use-locale-context-DLC4Hyvy.js";import"./use-field-context--XabuWSL.js";import"./Button-Cu9Xbu09.js";import"./Spinner-BdLZU4dE.js";import"./colors-DSObuHxd.js";import"./icon-name-CL_C5kfn.js";import"./controls-BtiQQn1l.js";import"./Link-DTswNFmS-CEk9YBDP.js";import"./Divider-DwZugXnI-RR--JbES.js";import"./ods-react222-B9lkGKUh.js";function o(s){const n={code:"code",em:"em",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",...a(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(d,{of:r,name:"Documentation"}),`
`,e.jsx(h,{of:r}),`
`,e.jsx(n.p,{children:e.jsxs(n.em,{children:[e.jsx(n.strong,{children:"Quantity"})," is a component used to enter and modify a numeric value in a responsive and easy way"]})}),`
`,e.jsx(i,{of:u,sourceState:"none"}),`
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
`,e.jsxs(n.p,{children:["This component complies with the ",e.jsx(j,{href:"https://www.w3.org/WAI/ARIA/apg/patterns/spinbutton/",children:"Spinbutton WAI-ARIA design pattern"})]}),`
`,e.jsx(t,{label:"Always provide an explicit label",level:3}),`
`,e.jsxs(n.p,{children:["Every ",e.jsx(n.strong,{children:"Quantity"}),` must have a clear and explicit label to ensure that users (especially screen reader users) understand its purpose,
using either `,e.jsx(n.strong,{children:"FormField"})," or a native label tag."]}),`
`,e.jsx(i,{of:m,sourceState:"shown"}),`
`,e.jsxs(n.p,{children:[e.jsx(l,{name:c.circleCheck,style:{color:"var(--ods-color-success-500)"}})," Screen readers will announce the label and the quantity field."]})]})}function _(s={}){const{wrapper:n}={...a(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(o,{...s})}):o(s)}export{_ as default};
