import{j as e}from"./jsx-runtime-VM66peLj.js";import{useMDXComponents as o}from"./index-DQB45XCM.js";import{M as a,C as l}from"./index-CTRIvuAa.js";import{Q as i,O as c}from"./quantity.stories-DmxuCQ9y.js";import{B as d}from"./Banner-DKEGGZmZ.js";import{I as u,A as m,B as h}from"./IdentityCard-DMALWF_P.js";import{H as t}from"./Heading-BKRI_kjA.js";import"./index-D_CmzhJ4.js";import"./iframe-B1k00A9N.js";import"./index-ChzAxGiP.js";import"./index-CucsY3YN.js";import"./index-CXQShRbs.js";import"./index-DrFu-skq.js";import"./FormFieldLabel-DjB85afw.js";import"./index-CkQHsVsO.js";import"./Text-KX3Hvvn9.js";import"./use-locale-context-BQVaQ0H3.js";import"./use-field-context-A_pa20cf.js";import"./Button-CbWLwkmI.js";import"./Spinner-BC3A9yP9.js";import"./colors-DSObuHxd.js";import"./icon-name-BOrBmUKT.js";import"./controls-BtiQQn1l.js";import"./ExternalLink-DJ00RbPw.js";import"./ods-react60-Yebt9vXY.js";import"./index-2w0W-O47-BJ19ihbZ.js";import"./Link-D8k51sak-CbRDKo-E.js";import"./ods-react214-B9lkGKUh.js";function r(s){const n={code:"code",em:"em",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...o(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{of:i,name:"Documentation"}),`
`,e.jsx(d,{of:i}),`
`,e.jsx(n.p,{children:e.jsxs(n.em,{children:[e.jsx(n.strong,{children:"Quantity"})," is a component used to enter and modify a numeric value in a responsive and easy way"]})}),`
`,e.jsx(l,{of:c,sourceState:"none"}),`
`,e.jsx(t,{label:"Overview",level:2}),`
`,e.jsxs(u,{aliases:["Numeric","Number input","Amount"],atomicType:m.molecule,figmaLink:"https://www.figma.com/design/9jDDTcR4a9jPRFcdjawAlf/ODS---UI-Kit?node-id=49-9160",githubUrl:"https://github.com/ovh/design-system/tree/master/packages/ods/src/components/quantity",name:"Quantity",children:[e.jsxs(n.p,{children:["The ",e.jsx(n.strong,{children:"Quantity"})," component provides a user-friendly interface for selecting or entering numerical values."]}),e.jsx(n.p,{children:"It includes an Input field combined with increment and decrement Buttons to adjust the value easily."})]}),`
`,e.jsx(t,{label:"Usage",level:2}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Quantity"})," is used to quickly adjust with a few clicks a numeric value within defined parameters."]}),`
`,e.jsx(n.p,{children:"Limits can be set as minimum or maximum value. In that case, the numeric value cannot exceed the defined boundaries."}),`
`,e.jsx(t,{label:"Dos & Don'ts",level:3}),`
`,e.jsx(h,{donts:["- Don't use the Quantity component for large numeric changes that would require excessive clicking. Prefer a freeform numeric input or slider in those cases","- Don't use the component outside of quantitative contexts: it should only be used to adjust measurable numeric values (e.g., quantity, amount)"],dos:["- Use the Quantity component for small, incremental adjustments where users are likely to increase or decrease values with just a few clicks","- Always allow users to manually input a number directly into the field, not just through the increment/decrement buttons","- Set appropriate min/max limits to prevent invalid or unintended values","- Provide contextual labels or grouping when needed to clarify what the quantity refers to"]}),`
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
`,e.jsx(n.p,{children:"It should be used with numeric Input that are in a fairly narrow range."}),`
`,e.jsx(t,{label:"Behavior",level:2}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Quantity"})," numeric field can be edited directly by the user."]}),`
`,e.jsx(n.p,{children:"The user can also decrease or increase the value by clicking on the Buttons."}),`
`,e.jsx(n.p,{children:"In case that limits have been set to minimum and maximum value, corresponding control will be disabled when this value has been reached."}),`
`,e.jsxs(n.p,{children:["Each item of the ",e.jsx(n.strong,{children:"Quantity"})," component can be focused; the whole component can be disabled at once."]}),`
`,e.jsx(t,{label:"Navigation",level:2}),`
`,e.jsx(t,{label:"Focus Management",level:3}),`
`,e.jsxs(n.p,{children:["When the ",e.jsx(n.strong,{children:"Quantity"})," component is focused, focus is automatically set to the first focusable and not disabled element."]}),`
`,e.jsx(n.p,{children:"If the Input field is read-only, it can still receive focus but cannot be edited."}),`
`,e.jsx(n.p,{children:'If the "Plus" or "Minus" Button is disabled, it cannot be focused.'}),`
`,e.jsx(t,{label:"General Keyboard Shortcuts",level:3}),`
`,e.jsxs(n.p,{children:["Pressing ",e.jsx(n.code,{children:"Tab"})," moves focus forward:"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:'First to the "Minus" button, when not disabled'}),`
`,e.jsx(n.li,{children:"Then to the input field"}),`
`,e.jsx(n.li,{children:'Finally to the "Plus" button, when not disabled'}),`
`]}),`
`,e.jsxs(n.p,{children:["Pressing ",e.jsx(n.code,{children:"Shift"})," + ",e.jsx(n.code,{children:"Tab"})," moves focus backward through the interactive elements."]}),`
`,e.jsxs(n.p,{children:["Pressing ",e.jsx(n.code,{children:"Arrow Up"})," when focused in the Input field increases the value."]}),`
`,e.jsxs(n.p,{children:["Pressing ",e.jsx(n.code,{children:"Arrow Down"})," when focused in the Input field decreases the value."]}),`
`,e.jsxs(n.p,{children:["Pressing ",e.jsx(n.code,{children:"Enter"}),' on the "Minus" Button decreases the value.']}),`
`,e.jsxs(n.p,{children:["Pressing ",e.jsx(n.code,{children:"Enter"}),' on the "Plus" Button increases the value.']})]})}function X(s={}){const{wrapper:n}={...o(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(r,{...s})}):r(s)}export{X as default};
