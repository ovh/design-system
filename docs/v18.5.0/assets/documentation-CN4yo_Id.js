import{j as e,M as d,C as h}from"./index-aSJOi-xY.js";import{u as c}from"./index-D_oymSD0.js";import{R as t,O as m}from"./range.stories-B2M5K9GJ.js";import{B as u}from"./Banner-DfBQCKAd.js";import{I as g,A as p,B as x}from"./IdentityCard-bFWvbFx8.js";import{H as s}from"./Heading-fUBW5LMg.js";import{S as i,O as o,a as l}from"./StorybookLink-CdkDDCl2.js";import"./iframe-Cjn0x15a.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-D-8MO0q_.js";import"./index-DX_4BEHg.js";import"./index-DrFu-skq.js";import"./controls-DX883vx3.js";import"./validityState-BuENXwQ9.js";import"./index-B1WyGMUD.js";import"./index-DduIf26o.js";function r(a){const n={code:"code",em:"em",img:"img",li:"li",ol:"ol",p:"p",span:"span",strong:"strong",...c(),...a.components};return e.jsxs(e.Fragment,{children:[e.jsx(d,{of:t,name:"Documentation"}),`
`,e.jsx(u,{of:t}),`
`,e.jsx(n.p,{children:e.jsxs(n.em,{children:[e.jsx(n.strong,{children:"Range"})," component is used to allow users to visually select one or more values from a range of values by moving the handle along a bar"]})}),`
`,e.jsx(h,{of:m,sourceState:"none"}),`
`,e.jsx(s,{label:"Overview",level:2}),`
`,e.jsxs(g,{aliases:["Slider"],atomicType:p.atom,figmaLink:"https://www.figma.com/design/9jDDTcR4a9jPRFcdjawAlf/ODS---UI-Kit?node-id=49-16052",githubUrl:"https://github.com/ovh/design-system/tree/master/packages/ods/src/components/range",name:"Range",relatedComponents:[{name:"Form Field",subtitle:"Form elements"},{name:"Input",subtitle:"Form elements"}],children:[e.jsxs(n.p,{children:["The ",e.jsx(n.strong,{children:"Range"})," component is used for selecting a numerical value or a range of values within a specified range."]}),e.jsx(n.p,{children:"It provides a visual and interactive way to adjust values, often used in forms, settings, and data filtering."}),e.jsx(n.p,{children:"The component can support single-value sliders or dual-handle sliders for selecting ranges."})]}),`
`,e.jsx(s,{label:"Anatomy",level:2}),`
`,e.jsx(n.p,{children:e.jsx(n.img,{src:"components/range/anatomy.png",alt:"Component anatomy",title:"Component anatomy"})}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Track"}),": the range of values the user can select and adjust"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Filled track"}),": the user's selected value within the ",e.jsx(n.strong,{children:"Range"}),". It is filled from the minimum value to the selected value"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Thumb"}),": a positional indicator. It can be moved along the track to indicate a position on this track"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Additional thumb"}),": a second positional indicator to get a dual ",e.jsx(n.strong,{children:"Range"}),". It allows users to select a portion within the range ",e.jsx(n.em,{children:"(optional)"})]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Minimum value label"}),": beginning of a ",e.jsx(n.strong,{children:"Range"})," as its minimum value"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Maximum value label"}),": end of a ",e.jsx(n.strong,{children:"Range"})," as its maximum value"]}),`
`]}),`
`,e.jsx(s,{label:"Usage",level:2}),`
`,e.jsxs(n.p,{children:["A ",e.jsx(n.strong,{children:"Range"})," is used to select a numeric value within a given range with defined minimum and maximum values."]}),`
`,e.jsx(n.p,{children:"It is easily adjustable in a visually pleasing interface and, after interacting with it, changes are reflected immediately."}),`
`,e.jsxs(n.p,{children:["A dual ",e.jsx(n.strong,{children:"Range"})," allows the user to select a numeric range value that is no less than a given value, and no more than another given value."]}),`
`,e.jsx(s,{label:"Dos & Don'ts",level:3}),`
`,e.jsx(x,{donts:["- Overuse Ranges on one page","- Use a Range when the numeric value range is infinite","- Use a Range in too small spaces on a page: it is necessary to have enough space in the UI","- Use a continuous Range when the defined range of values is too large: use a discrete Range"],dos:["- Use a Range when the user needs a way to select a value within a range",e.jsxs(n.span,{children:["- Include a label on a Range, such as the one provided by ",e.jsx(i,{kind:o.formField,label:"Form Field",story:l.documentation})," component, to explain the purpose of the Range"]}),"- Add a default numeric value"]}),`
`,e.jsx(s,{label:"Placement",level:2}),`
`,e.jsxs(n.p,{children:["A ",e.jsx(n.strong,{children:"Range"})," can be used in a page as long as there is a need to allow users to select a numeric value within a given range, for a quantity or a volume for example."]}),`
`,e.jsx(n.p,{children:"It has a width by default, but it can widen to match its container."}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.strong,{children:"Range"})," can also be used inside components."]}),`
`,e.jsxs(n.p,{children:["It also can be combined with other elements such as an ",e.jsx(i,{kind:o.input,label:"Input",story:l.documentation})," for a better control of the value selection."]}),`
`,e.jsx(s,{label:"Behavior",level:2}),`
`,e.jsxs(n.p,{children:["A ",e.jsx(n.strong,{children:"Range"})," can be focused and hovered. It also can be disabled."]}),`
`,e.jsx(n.p,{children:"The user can select a numeric value by clicking and dragging the thumb along the track."}),`
`,e.jsxs(n.p,{children:["An event is triggered when the ",e.jsx(n.strong,{children:"Range"})," value(s) changes."]}),`
`,e.jsx(s,{label:"Variation",level:2}),`
`,e.jsx(n.p,{children:"N/A"}),`
`,e.jsx(s,{label:"Accessibility",level:2}),`
`,e.jsxs(n.p,{children:["Each ",e.jsx(n.strong,{children:"Range"})," thumb can be focused using ",e.jsx(n.code,{children:"Tabulation"}),", using ",e.jsx(n.code,{children:"Up"})," and ",e.jsx(n.code,{children:"Right"})," arrows increases its value, ",e.jsx(n.code,{children:"Down"})," and ",e.jsx(n.code,{children:"Left"})," keys decreases it."]})]})}function U(a={}){const{wrapper:n}={...c(),...a.components};return n?e.jsx(n,{...a,children:e.jsx(r,{...a})}):r(a)}export{U as default};
