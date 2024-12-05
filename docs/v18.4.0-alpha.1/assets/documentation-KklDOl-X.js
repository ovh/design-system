import{j as e}from"./jsx-runtime-sbaUvk5M.js";import{u as l}from"./index-CGWm3lku.js";import{M as a,C as c}from"./index-D-G4MXwZ.js";import{I as i,O as d}from"./input.stories-C5CD2-js.js";import{B as h}from"./Banner-Dm45YJlk.js";import{I as m,A as p,B as x}from"./IdentityCard-DGPeLgPQ.js";import{H as t}from"./Heading-1Y93vQ6R.js";import{S as s}from"./StorybookLink-BMUyLisX.js";import"./iframe-BBvDorMF.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-B_J8iUie.js";import"./index-DX_4BEHg.js";import"./index-DrFu-skq.js";import"./index-CveiHl7W.js";import"./lit-html-D-ZEPr28.js";import"./validityState-ExJ3RVbh.js";import"./controls-D697y8_r.js";import"./index-D7X5WOeG.js";function r(o){const n={code:"code",em:"em",img:"img",li:"li",ol:"ol",p:"p",span:"span",strong:"strong",...l(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{of:i,name:"Documentation"}),`
`,e.jsx(h,{of:i}),`
`,e.jsx(n.p,{children:e.jsxs(n.em,{children:[e.jsx(n.strong,{children:"Input"})," component is an ",e.jsx(n.strong,{children:"Input"})," field where users can type into"]})}),`
`,e.jsx(c,{of:d,sourceState:"none"}),`
`,e.jsx(t,{label:"Overview",level:2}),`
`,e.jsx(m,{aliases:["Text Input","Text Field"],atomicType:p.atom,figmaLink:"https://www.figma.com/design/9jDDTcR4a9jPRFcdjawAlf/ODS---UI-Kit?node-id=93-22570",githubUrl:"https://github.com/ovh/design-system/tree/master/packages/ods/src/components/input",name:"Input",relatedComponents:[{name:"Button"},{name:"Form Field",subtitle:"Form elements"}],children:e.jsxs(n.p,{children:["An ",e.jsx(n.strong,{children:"Input"})," is used to allow the user to enter a single line information in a field."]})}),`
`,e.jsx(t,{label:"Anatomy",level:2}),`
`,e.jsx(n.p,{children:e.jsx(n.img,{src:"components/input/anatomy.png",alt:"Component anatomy",title:"Component anatomy"})}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:["A ",e.jsx(n.strong,{children:"field"}),": a container where the user can type in"]}),`
`,e.jsxs(n.li,{children:["A ",e.jsx(n.strong,{children:"placeholder"}),": provides hints or example of what to type"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Inner content"}),": displays the content typed by the field type (e.g.: ",e.jsx(n.code,{children:"email"}),", ",e.jsx(n.code,{children:"number"}),", ",e.jsx(n.code,{children:"password"}),", ",e.jsx(n.code,{children:"search"}),", ",e.jsx(n.code,{children:"text"}),", ",e.jsx(n.code,{children:"time"}),", ",e.jsx(n.code,{children:"url"}),")"]}),`
`,e.jsxs(n.li,{children:["Clickable icon ",e.jsx(s,{kind:"ODS Components/Button",label:"Button",story:"Documentation"}),", used for secondary extra actions such as clear the field"]}),`
`,e.jsxs(n.li,{children:["Clickable icon ",e.jsx(s,{kind:"ODS Components/Button",label:"Button",story:"Documentation"}),", used for extra actions such as toggle the field content visibility or trigger a search"]}),`
`]}),`
`,e.jsx(t,{label:"Usage",level:2}),`
`,e.jsxs(n.p,{children:["An ",e.jsx(n.strong,{children:"Input"})," is used to type a free-form short text in a field. It is often used within a ",e.jsx(s,{kind:"ODS Components/Form elements/Form Field",label:"Form Field",story:"Documentation"})," component that adds its label."]}),`
`,e.jsx(n.p,{children:"It is commonly used in a form, such as asking the user their name or email address, data entered can be text or numbers."}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.strong,{children:"Input"})," component can be used in addition with an ",e.jsx(n.strong,{children:"Autocomplete"}),"."]}),`
`,e.jsx(t,{label:"Dos & Don'ts",level:3}),`
`,e.jsx(x,{donts:[e.jsxs(n.span,{children:["- Use an Input for content longer than a single line: Use a ",e.jsx(s,{kind:"ODS Components/Form elements/Textarea",label:"Textarea",story:"Documentation"})," instead"]}),e.jsxs(n.span,{children:["- Use an Input when you have a predefined list of answers: use a ",e.jsx(s,{kind:"ODS Components/Form elements/Select",label:"Select",story:"Documentation"})," or ",e.jsx(s,{kind:"ODS Components/Form elements/Radio",label:"Radio",story:"Documentation"})," instead"]})],dos:[e.jsxs(n.span,{children:["- Add label and helper message to the Input with ",e.jsx(s,{kind:"ODS Components/Form elements/Form Field",label:"Form Field",story:"Documentation"})," component"]})]}),`
`,e.jsx(t,{label:"Placement",level:2}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Input"})," should be vertically aligned with other form components on a same page."]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Inputs"})," that are strongly related in a form can be grouped. This group can flow horizontally left to right and/or vertically top to bottom."]}),`
`,e.jsx(t,{label:"Behavior",level:2}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Inputs"})," can be hovered, focused and clicked/triggered. They can be disabled or readonly as well."]}),`
`,e.jsxs(n.p,{children:["The user can start typing in the ",e.jsx(n.strong,{children:"Input"})," after clicking or focusing on the field container."]}),`
`,e.jsxs(n.p,{children:["When the user types text longer than the ",e.jsx(n.strong,{children:"Input"})," width, the cursor will automatically scroll left."]}),`
`,e.jsxs(n.p,{children:["A clearable button can be displayed within the ",e.jsx(n.strong,{children:"Input"})," to clear its content. This button becomes visible as soon as the user types the first character and removes all content when clicked."]}),`
`,e.jsxs(n.p,{children:["A toggle mask button can be displayed within the ",e.jsx(n.strong,{children:"Input"})," to toggle the visibility of its content, such as revealing or hiding a password in a masked input."]}),`
`,e.jsxs(n.p,{children:["A search button can be displayed within the ",e.jsx(n.strong,{children:"Input"})," to trigger a specific action, such as performing a search."]}),`
`,e.jsx(t,{label:"Variation",level:2}),`
`,e.jsx(n.p,{children:"N/A"}),`
`,e.jsx(t,{label:"Accessibility",level:2}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"Tab"})," allows to focus on ",e.jsx(n.strong,{children:"Input"}),"."]})]})}function U(o={}){const{wrapper:n}={...l(),...o.components};return n?e.jsx(n,{...o,children:e.jsx(r,{...o})}):r(o)}export{U as default};
