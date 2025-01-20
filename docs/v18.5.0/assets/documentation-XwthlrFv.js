import{j as e,M as m,C as d}from"./index-aSJOi-xY.js";import{u as c}from"./index-D_oymSD0.js";import{T as r,O as p}from"./timepicker.stories-DYU5yGt9.js";import{B as h}from"./Banner-DfBQCKAd.js";import{I as u,A as x,B as f}from"./IdentityCard-bFWvbFx8.js";import{H as t}from"./Heading-fUBW5LMg.js";import{S as s,O as o,a}from"./StorybookLink-CdkDDCl2.js";import"./iframe-Cjn0x15a.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-D-8MO0q_.js";import"./index-DX_4BEHg.js";import"./index-DrFu-skq.js";import"./controls-DX883vx3.js";import"./validityState-BuENXwQ9.js";import"./index-B1WyGMUD.js";import"./index-DduIf26o.js";function l(i){const n={em:"em",img:"img",li:"li",ol:"ol",p:"p",span:"span",strong:"strong",...c(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(m,{of:r,name:"Documentation"}),`
`,e.jsx(h,{of:r}),`
`,e.jsx(n.p,{children:e.jsxs(n.em,{children:["A ",e.jsx(n.strong,{children:"Timepicker"})," is a component that allows users to select a time from a list or set a specific time."]})}),`
`,e.jsx(d,{of:p,sourceState:"none"}),`
`,e.jsx(t,{label:"Overview",level:2}),`
`,e.jsx(u,{aliases:["Time"],atomicType:x.molecule,figmaLink:"https://www.figma.com/design/9jDDTcR4a9jPRFcdjawAlf/ODS---UI-Kit?node-id=53-11662",githubUrl:"https://github.com/ovh/design-system/tree/master/packages/ods/src/components/timepicker",name:"Timepicker",relatedComponents:[{name:"Form Field",subtitle:"Form elements"},{name:"Input",subtitle:"Form elements"},{name:"Select",subtitle:"Form elements"}],children:e.jsxs(n.p,{children:["The ",e.jsx(n.strong,{children:"Timepicker"})," component is used for selecting times in forms and applications. It provides an interface for users to choose a time, ensuring the format is consistent and valid. The component can include features like 12-hour or 24-hour formats, increments, and disabled times."]})}),`
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
`,e.jsxs(n.p,{children:["For some use case, an optional time zone ",e.jsx(s,{kind:o.select,label:"Select",story:a.documentation})," can be added to allow users to select their desired time zone from a list of options."]}),`
`,e.jsx(t,{label:"Dos & Don'ts",level:3}),`
`,e.jsx(f,{donts:['- Use a placeholder in the time field as replacement for a "label"',"- Use a placeholder to provide crucial information since it will disappear after typing into the time field"],dos:["- Use a Timepicker in a form when you need to display scheduling options",e.jsxs(n.span,{children:["- Add label and/or helper to the Timepicker with ",e.jsx(s,{kind:o.formField,label:"Form Field",story:a.documentation})," component"]}),"- A Timepicker can be combined with a Date picker to allow users to pick both date and time","- Use AM/PM selector when you plan to use 12 hours format","- Display a restricted list of timezones that makes sense, especially when the company or product exists only in few countries. Otherwise it adds to confusion"]}),`
`,e.jsx(t,{label:"Placement",level:2}),`
`,e.jsxs(n.p,{children:["A ",e.jsx(n.strong,{children:"Timepicker"})," can be used in a page as long as there is a need to allow users to pick a time."]}),`
`,e.jsx(n.p,{children:"The time field has a fixed width by default but, when used in a form, its width should match the other inputs."}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Timepicker"})," should be vertically aligned with other form components on a same page."]}),`
`,e.jsx(t,{label:"Behavior",level:2}),`
`,e.jsxs(n.p,{children:["A ",e.jsx(n.strong,{children:"Timepicker"})," can widen to match its container (width of the elements is 50% each)."]}),`
`,e.jsxs(n.p,{children:["It has the same states and behaviors for each inner component (i.e. ",e.jsx(s,{kind:o.input,label:"Input",story:a.documentation})," and ",e.jsx(s,{kind:o.select,label:"Select",story:a.documentation}),")."]}),`
`,e.jsx(t,{label:"Variation",level:2}),`
`,e.jsx(n.p,{children:"N/A"}),`
`,e.jsx(t,{label:"Accessibility",level:2}),`
`,e.jsxs(n.p,{children:["Each ",e.jsx(n.strong,{children:"Timepicker"})," fields can be browsed through tabulations."]})]})}function U(i={}){const{wrapper:n}={...c(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(l,{...i})}):l(i)}export{U as default};
