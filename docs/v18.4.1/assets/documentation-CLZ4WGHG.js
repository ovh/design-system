import{j as e,M as l,C as c}from"./index-Rx6QkXSv.js";import{u as r}from"./index-DPrOAYpY.js";import{S as i,O as h}from"./switch.stories-T5mRTq7h.js";import{B as m}from"./Banner-BpmhCXha.js";import{I as d,A as p,B as x}from"./IdentityCard-DzjZaQKX.js";import{H as o}from"./Heading-2XnXa8MH.js";import{S as n}from"./StorybookLink-YE2HEeNv.js";import"./iframe-HwRW2g_s.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-D-8MO0q_.js";import"./index-DX_4BEHg.js";import"./index-DrFu-skq.js";import"./index-Dqa08QUn.js";import"./controls-DX883vx3.js";import"./validityState-BuENXwQ9.js";import"./index-BJiUJsri.js";function a(s){const t={code:"code",em:"em",img:"img",li:"li",ol:"ol",p:"p",span:"span",strong:"strong",...r(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{of:i,name:"Documentation"}),`
`,e.jsx(m,{of:i}),`
`,e.jsx(t.p,{children:e.jsxs(t.em,{children:["A ",e.jsx(t.strong,{children:"Switch"})," allows users to quickly and easily switch between several states, actions or options in a row."]})}),`
`,e.jsx(c,{of:h,sourceState:"none"}),`
`,e.jsx(o,{label:"Overview",level:2}),`
`,e.jsx(d,{aliases:["Button group","Segmented control","Toggle group"],atomicType:p.atom,figmaLink:"https://www.figma.com/design/9jDDTcR4a9jPRFcdjawAlf/ODS---UI-Kit?node-id=52-10578",githubUrl:"https://github.com/ovh/design-system/tree/master/packages/ods/src/components/switch",name:"Switch",relatedComponents:[{name:"Form Field",subtitle:"Form elements"},{name:"Text"}],children:e.jsxs(t.p,{children:["A ",e.jsx(t.strong,{children:"Switch"})," allows users to quickly and easily switch between several states, actions or options in a row."]})}),`
`,e.jsx(o,{label:"Anatomy",level:2}),`
`,e.jsx(t.p,{children:e.jsx(t.img,{src:"components/switch/anatomy.png",alt:"Component anatomy",title:"Component anatomy"})}),`
`,e.jsxs(t.ol,{children:[`
`,e.jsxs(t.li,{children:[e.jsx(t.strong,{children:"Controls"}),": the user clicks on them to choose a state or an item. Controls' content can be ",e.jsx(n,{kind:"ODS Components/Text",label:"Text",story:"Documentation"}),", ",e.jsx(n,{kind:"ODS Components/Icon",label:"Icon",story:"Documentation"}),", or both."]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.strong,{children:"Track"}),": it is a trail where the controls are displayed. The user can switch from one state or item to another"]}),`
`]}),`
`,e.jsx(o,{label:"Usage",level:2}),`
`,e.jsxs(t.p,{children:["A ",e.jsx(t.strong,{children:"Switch"})," is used to switch between multiple states, actions or options (up-to 4)."]}),`
`,e.jsx(t.p,{children:"It can be used for many use cases such as selecting a state within a group of states or filtering."}),`
`,e.jsx(o,{label:"Dos & Don'ts",level:3}),`
`,e.jsx(x,{donts:[e.jsxs(t.span,{children:["- Use a Switch when there are more than four options to display to the user: use others component such as ",e.jsx(n,{kind:"ODS Components/Form elements/Checkbox",label:"Checkbox",story:"Documentation"})," button, ",e.jsx(n,{kind:"ODS Components/Form elements/Radio",label:"Radio",story:"Documentation"})," button or ",e.jsx(n,{kind:"ODS Components/Form elements/Select",label:"Select",story:"Documentation"})]}),e.jsxs(t.span,{children:["- Use a Switch when you are not expecting an immediate effect by clicking on it: use a ",e.jsx(n,{kind:"ODS Components/Form elements/Checkbox",label:"Checkbox",story:"Documentation"})," component instead"]}),"- Use a Switch with states, actions or options that are not strongly related"],dos:["- Use a Switch when the user has to select only one state or action active at a time","- Make it clear in every Switch control content about what the user is selecting: give a strong indication",e.jsxs(t.span,{children:["- Consider whether a ",e.jsx(n,{kind:"ODS Components/Text",label:"Text",story:"Documentation"}),", an ",e.jsx(n,{kind:"ODS Components/Icon",label:"Icon",story:"Documentation"}),", or both would suit better to your Switch controls content"]})]}),`
`,e.jsx(o,{label:"Placement",level:2}),`
`,e.jsxs(t.p,{children:["A ",e.jsx(t.strong,{children:"Switch"}),` can be used in a page when the user needs to select a choice from multiple states or items.
It may replace two `,e.jsx(n,{kind:"ODS Components/Form elements/Radio",label:"Radio",story:"Documentation"})," buttons or a single ",e.jsx(n,{kind:"ODS Components/Form elements/Checkbox",label:"Checkbox",story:"Documentation"})," to allow users to choose between several states."]}),`
`,e.jsxs(t.p,{children:["By default, the width of a ",e.jsx(t.strong,{children:"Switch"}),` control is defined by the length of content.
A custom width can be set so all controls on the track will have the same size regardless of content length.`]}),`
`,e.jsx(o,{label:"Behavior",level:2}),`
`,e.jsx(t.p,{children:e.jsx(t.strong,{children:"One of the controls is always selected by default."})}),`
`,e.jsxs(t.p,{children:["The user can switch between states by clicking the ",e.jsx(t.strong,{children:"Switch"})," controls, and it has an immediate effect."]}),`
`,e.jsxs(t.p,{children:["An event is triggered when the ",e.jsx(t.strong,{children:"Switch"})," item changes."]}),`
`,e.jsx(o,{label:"Variation",level:2}),`
`,e.jsx(t.p,{children:"N/A"}),`
`,e.jsx(o,{label:"Accessibility",level:2}),`
`,e.jsxs(t.p,{children:["All ",e.jsx(t.strong,{children:"Switch"})," items can be focused using ",e.jsx(t.code,{children:"Tabulation"}),", selecting an item can be done using ",e.jsx(t.code,{children:"Space"}),"/",e.jsx(t.code,{children:"Enter"})," keys."]})]})}function M(s={}){const{wrapper:t}={...r(),...s.components};return t?e.jsx(t,{...s,children:e.jsx(a,{...s})}):a(s)}export{M as default};
