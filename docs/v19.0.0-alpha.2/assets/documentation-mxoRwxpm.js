import{j as e}from"./jsx-runtime-VM66peLj.js";import{useMDXComponents as c}from"./index-DQB45XCM.js";import{M as d,C as m}from"./index-BlaLg9GY.js";import{Q as r,O as u}from"./quantity.stories-DZzZL2eE.js";import{B as h}from"./Banner-CANn_RZm.js";import{I as p,A as x,B as j}from"./IdentityCard-DkdK44g3.js";import{H as t}from"./Heading-6Mfikk-c.js";import{S as s,a,O as o}from"./StorybookLink-Dek5KO7Z.js";import"./index-D_CmzhJ4.js";import"./iframe-CGgj-FAD.js";import"./index-ChzAxGiP.js";import"./index-CucsY3YN.js";import"./index-CXQShRbs.js";import"./index-DrFu-skq.js";import"./FormFieldLabel-BxxkSoC9.js";import"./index-CkQHsVsO.js";import"./index-BCxMAfLs.js";import"./use-field-context-BA6pMY5L.js";import"./use-locale-context-Z4fgdY29.js";import"./Button-BRERPjFq.js";import"./Spinner-CcwadLZv.js";import"./icon-name-jL3axqAU.js";import"./controls-BtiQQn1l.js";import"./ExternalLink-lH7YZu4p.js";import"./ods-react49-9IXPzWp7.js";import"./index-2w0W-O47-BJ19ihbZ.js";import"./Link-Ck4D7Gly-DoENOEBg.js";function l(i){const n={code:"code",em:"em",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",...c(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(d,{of:r,name:"Documentation"}),`
`,e.jsx(h,{of:r}),`
`,e.jsx(n.p,{children:e.jsxs(n.em,{children:[e.jsx(n.strong,{children:"Quantity"})," is a component used to enter and modify a numeric value in a responsive and easy way"]})}),`
`,e.jsx(m,{of:u,sourceState:"none"}),`
`,e.jsx(t,{label:"Overview",level:2}),`
`,e.jsxs(p,{aliases:["Numeric","Number input","Amount"],atomicType:x.molecule,figmaLink:"https://www.figma.com/design/9jDDTcR4a9jPRFcdjawAlf/ODS---UI-Kit?node-id=49-9160",githubUrl:"https://github.com/ovh/design-system/tree/master/packages/ods/src/components/quantity",name:"Quantity",relatedComponents:[{name:"Button"},{name:"Form Field",subtitle:"Form elements"},{name:"Icon"},{name:"Input",subtitle:"Form elements"}],children:[e.jsxs(n.p,{children:["The ",e.jsx(n.strong,{children:"Quantity"})," component provides a user-friendly interface for selecting or entering numerical values."]}),e.jsxs(n.p,{children:["It includes an ",e.jsx(s,{kind:o.input,story:a.documentation,children:"Input"}),` field combined with increment and
decrement `,e.jsx(s,{kind:o.button,story:a.documentation,children:"Button"})," to adjust the value easily."]})]}),`
`,e.jsx(t,{label:"Anatomy",level:2}),`
`,e.jsx(n.p,{children:e.jsx(n.img,{src:"components/quantity/anatomy.png",alt:"Component anatomy",title:"Component anatomy"})}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:'"Minus" icon Button'}),": allows users to decrease the value displayed in the numeric field"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Numeric Input"}),": displays / allows to type a value (equal to a quantity)"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:'"Plus" icon Button'}),": allows users to increase the value displayed in the numeric field"]}),`
`]}),`
`,e.jsx(t,{label:"Usage",level:2}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Quantity"})," is used to quickly adjust with a few clicks a numeric value within defined parameters."]}),`
`,e.jsx(n.p,{children:"Limits can be set as minimum or maximum value. In that case, the numeric value cannot exceed the defined boundaries."}),`
`,e.jsx(t,{label:"Dos & Don'ts",level:3}),`
`,e.jsx(j,{donts:["- A Quantity by itself displays a number: don't use it in any other context than displaying a quantity","- Use Quantity for large value changes"],dos:["- Use Quantity for small value changes that require only a few clicks","- Be sure sure that the user can choose to type directly a number in the field"]}),`
`,e.jsx(t,{label:"Placement",level:2}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Quantity"})," can be used to let users easily change an amount of items, for example, or similar situations."]}),`
`,e.jsxs(n.p,{children:["It should be used with numeric ",e.jsx(s,{kind:o.input,story:a.documentation,children:"Input"})," that are in a fairly narrow range."]}),`
`,e.jsx(t,{label:"Behavior",level:2}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Quantity"})," numeric field can be edited directly by the user."]}),`
`,e.jsxs(n.p,{children:["The user can also decrease or increase the value by clicking on ",e.jsx(s,{kind:o.button,story:a.documentation,children:"Button"}),"."]}),`
`,e.jsx(n.p,{children:"In case that limits have been set to minimum and maximum value, corresponding control will be disabled when this value has been reached."}),`
`,e.jsxs(n.p,{children:["Each item of the ",e.jsx(n.strong,{children:"Quantity"})," component can be focused; the whole component can be disabled at once."]}),`
`,e.jsx(t,{label:"Variation",level:2}),`
`,e.jsx(n.p,{children:"N/A"}),`
`,e.jsx(t,{label:"Accessibility",level:2}),`
`,e.jsxs(n.p,{children:[e.jsx(s,{kind:o.input,story:a.documentation,children:"Input"})," and ",e.jsx(s,{kind:o.button,story:a.documentation,children:"Button"})," accessibility features avail here, with former tabulation and triggers."]}),`
`,e.jsxs(n.p,{children:["The numeric field value can be increased/decreased using ",e.jsx(n.code,{children:"Up"})," and ",e.jsx(n.code,{children:"Down"})," arrows when focused."]})]})}function H(i={}){const{wrapper:n}={...c(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(l,{...i})}):l(i)}export{H as default};
