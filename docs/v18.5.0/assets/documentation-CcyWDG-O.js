import{j as e,M as d,C as h}from"./index-aSJOi-xY.js";import{u as c}from"./index-D_oymSD0.js";import{I as a,O as p}from"./input.stories-iGrl9Ouv.js";import{B as m}from"./Banner-DfBQCKAd.js";import{I as x,A as u,B as j}from"./IdentityCard-bFWvbFx8.js";import{H as t}from"./Heading-fUBW5LMg.js";import{S as s,O as o,a as i}from"./StorybookLink-CdkDDCl2.js";import"./iframe-Cjn0x15a.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-D-8MO0q_.js";import"./index-DX_4BEHg.js";import"./index-DrFu-skq.js";import"./index-B1WyGMUD.js";import"./lit-html-DJdeL0_A.js";import"./controls-DX883vx3.js";import"./validityState-BuENXwQ9.js";import"./index-DduIf26o.js";function l(r){const n={code:"code",em:"em",img:"img",li:"li",ol:"ol",p:"p",span:"span",strong:"strong",...c(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(d,{of:a,name:"Documentation"}),`
`,e.jsx(m,{of:a}),`
`,e.jsx(n.p,{children:e.jsxs(n.em,{children:[e.jsx(n.strong,{children:"Input"})," component is an ",e.jsx(n.strong,{children:"Input"})," field where users can type into"]})}),`
`,e.jsx(h,{of:p,sourceState:"none"}),`
`,e.jsx(t,{label:"Overview",level:2}),`
`,e.jsx(x,{aliases:["Text Input","Text Field"],atomicType:u.atom,figmaLink:"https://www.figma.com/design/9jDDTcR4a9jPRFcdjawAlf/ODS---UI-Kit?node-id=93-22570",githubUrl:"https://github.com/ovh/design-system/tree/master/packages/ods/src/components/input",name:"Input",relatedComponents:[{name:"Button"},{name:"Form Field",subtitle:"Form elements"}],children:e.jsxs(n.p,{children:["An ",e.jsx(n.strong,{children:"Input"})," is used to allow the user to enter a single line information in a field."]})}),`
`,e.jsx(t,{label:"Anatomy",level:2}),`
`,e.jsx(n.p,{children:e.jsx(n.img,{src:"components/input/anatomy.png",alt:"Component anatomy",title:"Component anatomy"})}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:["A ",e.jsx(n.strong,{children:"field"}),": a container where the user can type in"]}),`
`,e.jsxs(n.li,{children:["A ",e.jsx(n.strong,{children:"placeholder"}),": provides hints or example of what to type"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Inner content"}),": displays the content typed by the field type (e.g.: ",e.jsx(n.code,{children:"email"}),", ",e.jsx(n.code,{children:"number"}),", ",e.jsx(n.code,{children:"password"}),", ",e.jsx(n.code,{children:"search"}),", ",e.jsx(n.code,{children:"text"}),", ",e.jsx(n.code,{children:"time"}),", ",e.jsx(n.code,{children:"url"}),")"]}),`
`,e.jsxs(n.li,{children:["Clickable icon ",e.jsx(s,{kind:o.button,label:"Button",story:i.documentation}),", used for secondary extra actions such as clear the field"]}),`
`,e.jsxs(n.li,{children:["Clickable icon ",e.jsx(s,{kind:o.button,label:"Button",story:i.documentation}),", used for extra actions such as toggle the field content visibility or trigger a search"]}),`
`]}),`
`,e.jsx(t,{label:"Usage",level:2}),`
`,e.jsxs(n.p,{children:["An ",e.jsx(n.strong,{children:"Input"})," is used to type a free-form short text in a field. It is often used within a ",e.jsx(s,{kind:o.formField,label:"Form Field",story:i.documentation})," component that adds its label."]}),`
`,e.jsx(n.p,{children:"It is commonly used in a form, such as asking the user their name or email address, data entered can be text or numbers."}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.strong,{children:"Input"})," component can be used in addition with an ",e.jsx(n.strong,{children:"Autocomplete"}),"."]}),`
`,e.jsx(t,{label:"Dos & Don'ts",level:3}),`
`,e.jsx(j,{donts:[e.jsxs(n.span,{children:["- Use an Input for content longer than a single line: Use a ",e.jsx(s,{kind:o.textarea,label:"Textarea",story:i.documentation})," instead"]}),e.jsxs(n.span,{children:["- Use an Input when you have a predefined list of answers: use a ",e.jsx(s,{kind:o.select,label:"Select",story:i.documentation})," or ",e.jsx(s,{kind:o.radio,label:"Radio",story:i.documentation})," instead"]})],dos:[e.jsxs(n.span,{children:["- Add label and helper message to the Input with ",e.jsx(s,{kind:o.formField,label:"Form Field",story:i.documentation})," component"]})]}),`
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
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"Tab"})," allows to focus on ",e.jsx(n.strong,{children:"Input"}),"."]})]})}function P(r={}){const{wrapper:n}={...c(),...r.components};return n?e.jsx(n,{...r,children:e.jsx(l,{...r})}):l(r)}export{P as default};
