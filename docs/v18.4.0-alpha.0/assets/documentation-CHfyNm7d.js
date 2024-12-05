import{j as e}from"./jsx-runtime-Cz3huCOb.js";import{u as a}from"./index-BRdWgBGF.js";import{M as l,C as m}from"./index-C7ZQW9Xo.js";import{T as o,O as c}from"./timepicker.stories-H2M74Xdo.js";import{B as d}from"./Banner-4suhesey.js";import{I as p,A as h,B as u}from"./IdentityCard-BtdKCWJ5.js";import{H as t}from"./Heading-BWgLZzFp.js";import{S as i}from"./StorybookLink-CbljYtBK.js";import"./iframe-O-MMI8BM.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-B_J8iUie.js";import"./index-DX_4BEHg.js";import"./index-DrFu-skq.js";import"./lit-html-D-ZEPr28.js";import"./validityState-ExJ3RVbh.js";import"./controls-D697y8_r.js";import"./index-D19O3a7h.js";import"./index-BYszAjkJ.js";function r(s){const n={em:"em",img:"img",li:"li",ol:"ol",p:"p",span:"span",strong:"strong",...a(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{of:o,name:"Documentation"}),`
`,e.jsx(d,{of:o}),`
`,e.jsx(n.p,{children:e.jsxs(n.em,{children:["A ",e.jsx(n.strong,{children:"Timepicker"})," is a component that allows users to select a time from a list or set a specific time."]})}),`
`,e.jsx(m,{of:c,sourceState:"none"}),`
`,e.jsx(t,{label:"Overview",level:2}),`
`,e.jsx(p,{aliases:["Time"],atomicType:h.molecule,figmaLink:"https://www.figma.com/design/9jDDTcR4a9jPRFcdjawAlf/ODS---UI-Kit?node-id=53-11662",githubUrl:"https://github.com/ovh/design-system/tree/master/packages/ods/src/components/timepicker",name:"Timepicker",relatedComponents:[{name:"Form Field",subtitle:"Form elements"},{name:"Input",subtitle:"Form elements"},{name:"Select",subtitle:"Form elements"}],children:e.jsxs(n.p,{children:["The ",e.jsx(n.strong,{children:"Timepicker"})," component is used for selecting times in forms and applications. It provides an interface for users to choose a time, ensuring the format is consistent and valid. The component can include features like 12-hour or 24-hour formats, increments, and disabled times."]})}),`
`,e.jsx(t,{label:"Anatomy",level:2}),`
`,e.jsx(n.p,{children:e.jsx(n.img,{src:"components/timepicker/anatomy.png",alt:"Component anatomy",title:"Component anatomy"})}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Time Input"}),": it is a text field where users can type a time in expected format."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Timezone Select"}),": a list of worldwide timezones available"]}),`
`]}),`
`,e.jsx(t,{label:"Usage",level:2}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Timepicker"})," is used to allow a selection of a specific time."]}),`
`,e.jsx(n.p,{children:"It is useful for scheduling such as planning a meeting."}),`
`,e.jsxs(n.p,{children:["A ",e.jsx(n.strong,{children:"Timepicker"})," field includes the hour, minutes and optionally seconds. It can be followed by an AM/PM indicator."]}),`
`,e.jsxs(n.p,{children:["For some use case, an optional time zone ",e.jsx(i,{kind:"ODS Components/Form elements/Select",label:"Select",story:"Documentation"})," can be added to allow users to select their desired time zone from a list of options."]}),`
`,e.jsx(t,{label:"Dos & Don'ts",level:3}),`
`,e.jsx(u,{donts:['- Use a placeholder in the time field as replacement for a "label"',"- Use a placeholder to provide crucial information since it will disappear after typing into the time field"],dos:["- Use a Timepicker in a form when you need to display scheduling options",e.jsxs(n.span,{children:["- Add label and/or helper to the Timepicker with ",e.jsx(i,{kind:"ODS Components/Form elements/Form Field",label:"Form Field",story:"Documentation"})," component"]}),"- A Timepicker can be combined with a Date picker to allow users to pick both date and time","- Use AM/PM selector when you plan to use 12 hours format","- Display a restricted list of timezones that makes sense, especially when the company or product exists only in few countries. Otherwise it adds to confusion"]}),`
`,e.jsx(t,{label:"Placement",level:2}),`
`,e.jsxs(n.p,{children:["A ",e.jsx(n.strong,{children:"Timepicker"})," can be used in a page as long as there is a need to allow users to pick a time."]}),`
`,e.jsx(n.p,{children:"The time field has a fixed width by default but, when used in a form, its width should match the other inputs."}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Timepicker"})," should be vertically aligned with other form components on a same page."]}),`
`,e.jsx(t,{label:"Behavior",level:2}),`
`,e.jsxs(n.p,{children:["A ",e.jsx(n.strong,{children:"Timepicker"})," can widen to match its container (width of the elements is 50% each)."]}),`
`,e.jsxs(n.p,{children:["It has the same states and behaviors for each inner component (i.e. ",e.jsx(i,{kind:"ODS Components/Form elements/Input",label:"Input",story:"Documentation"})," and ",e.jsx(i,{kind:"ODS Components/Form elements/Select",label:"Select",story:"Documentation"}),")."]}),`
`,e.jsx(t,{label:"Variation",level:2}),`
`,e.jsx(n.p,{children:"N/A"}),`
`,e.jsx(t,{label:"Accessibility",level:2}),`
`,e.jsxs(n.p,{children:["Each ",e.jsx(n.strong,{children:"Timepicker"})," fields can be browsed through tabulations."]})]})}function P(s={}){const{wrapper:n}={...a(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(r,{...s})}):r(s)}export{P as default};
