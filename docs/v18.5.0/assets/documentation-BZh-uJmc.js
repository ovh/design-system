import{j as e,M as d,C as h}from"./index-aSJOi-xY.js";import{u as c}from"./index-D_oymSD0.js";import{T as r,O as m}from"./toggle.stories-5XdMrbt_.js";import{B as g}from"./Banner-DfBQCKAd.js";import{I as x,A as p,B as u}from"./IdentityCard-bFWvbFx8.js";import{H as t}from"./Heading-fUBW5LMg.js";import{S as o,O as i,a as l}from"./StorybookLink-CdkDDCl2.js";import"./iframe-Cjn0x15a.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-D-8MO0q_.js";import"./index-DX_4BEHg.js";import"./index-DrFu-skq.js";import"./controls-DX883vx3.js";import"./validityState-BuENXwQ9.js";import"./index-B1WyGMUD.js";import"./index-DduIf26o.js";function a(s){const n={code:"code",em:"em",img:"img",li:"li",ol:"ol",p:"p",span:"span",strong:"strong",ul:"ul",...c(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(d,{of:r,name:"Documentation"}),`
`,e.jsx(g,{of:r}),`
`,e.jsx(n.p,{children:e.jsxs(n.em,{children:["A ",e.jsx(n.strong,{children:"Toggle"})," component is used to allow the user to switch between two states, on and off, in a visual representation."]})}),`
`,e.jsx(h,{of:m,sourceState:"none"}),`
`,e.jsx(t,{label:"Overview",level:2}),`
`,e.jsxs(x,{aliases:["Toggle Switch","Switch"],atomicType:p.atom,figmaLink:"https://www.figma.com/design/9jDDTcR4a9jPRFcdjawAlf/ODS---UI-Kit?node-id=53-15319",githubUrl:"https://github.com/ovh/design-system/tree/master/packages/ods/src/components/toggle",name:"Toggle",relatedComponents:[{name:"Checkbox",subtitle:"Form elements"}],children:[e.jsxs(n.p,{children:["The ",e.jsx(n.strong,{children:"Toggle"})," component is used to enable or disable a state, setting or feature."]}),e.jsx(n.p,{children:`It provides a clear visual indication of the current state and allows users to change states with a single click or
tap.`}),e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Toggles"})," are commonly used in settings, preferences, and forms where a binary choice is required."]})]}),`
`,e.jsx(t,{label:"Anatomy",level:2}),`
`,e.jsx(n.p,{children:e.jsx(n.img,{src:"components/toggle/anatomy.png",alt:"Component anatomy",title:"Component anatomy"})}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Thumb"}),": informs the user about the ",e.jsx(n.strong,{children:"Toggle"}),"'s state according to its position"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Track"}),": trail where the thumb can slide from left to right and vice versa"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Textual indication"}),": add extra info about the ",e.jsx(n.strong,{children:"Toggle"}),"'s state ",e.jsx(n.em,{children:"(optional)"})]}),`
`]}),`
`,e.jsx(t,{label:"Usage",level:2}),`
`,e.jsxs(n.p,{children:["A ",e.jsx(n.strong,{children:"Toggle"})," is commonly used for binary choice."]}),`
`,e.jsx(n.p,{children:"The user can decide to switch between two states with an immediate effect visible at a glance."}),`
`,e.jsx(n.p,{children:"It can be used in following use cases when you need to allow the user to:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"turn an option or settings on or off"}),`
`,e.jsx(n.li,{children:"add or remove an item or an option"}),`
`]}),`
`,e.jsxs(n.p,{children:["A ",e.jsx(n.strong,{children:"Toggle"})," should never require users to press a ",e.jsx(o,{kind:i.button,label:"Button",story:l.documentation})," to apply their settings (if a setting requires a ",e.jsx(o,{kind:i.button,label:"Button",story:l.documentation}),", use a ",e.jsx(o,{kind:i.checkbox,label:"Checkbox",story:l.documentation})," instead)."]}),`
`,e.jsx(t,{label:"Dos & Don'ts",level:3}),`
`,e.jsx(u,{donts:[e.jsxs(n.span,{children:["- Use a Toggle when you are not expecting an immediate effect by clicking on it: use a ",e.jsx(o,{kind:i.checkbox,label:"Checkbox",story:l.documentation})," component instead"]})],dos:["- Use a Toggle when you need to allow users to adjust settings on mobile","- A Toggle can be used in a form when it has an immediate effect inside the form to avoid a failed selection when submitted","- When other elements are displayed by clicking on the Toggle, make sure that these elements are located next to the Toggle so it is clear to the user",'- Add a label to the Toggle that explains what will happen when the user set it to "on" or "off" position: keep it clear and concise']}),`
`,e.jsx(t,{label:"Placement",level:2}),`
`,e.jsxs(n.p,{children:["Place the ",e.jsx(n.strong,{children:"Toggle"})," component near the setting or feature it controls."]}),`
`,e.jsx(n.p,{children:"It should be positioned within forms, settings panels, or any relevant context where a binary choice is required."}),`
`,e.jsx(n.p,{children:"Ensure it is easily accessible and visible."}),`
`,e.jsx(t,{label:"Behavior",level:2}),`
`,e.jsxs(n.p,{children:["When the user clicks on a ",e.jsx(n.strong,{children:"Toggle"}),", it has an immediate effect:"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:'set to "on" position, the thumb will slide to the right of the track'}),`
`,e.jsx(n.li,{children:'set to "off" position, the thumb will slide to the left of the track'}),`
`]}),`
`,e.jsx(t,{label:"Variation",level:2}),`
`,e.jsx(n.p,{children:"N/A"}),`
`,e.jsx(t,{label:"Accessibility",level:2}),`
`,e.jsxs(n.p,{children:["When focused, ",e.jsx(n.strong,{children:"Toggle"})," can be triggered using ",e.jsx(n.code,{children:"Space"})," or ",e.jsx(n.code,{children:"Enter"})," keys."]})]})}function P(s={}){const{wrapper:n}={...c(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(a,{...s})}):a(s)}export{P as default};
