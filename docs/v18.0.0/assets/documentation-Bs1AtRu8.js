import{j as e}from"./jsx-runtime-Dn0LW--f.js";import{u as r}from"./index-DeyDdHvX.js";import{M as a,C as c,d as o}from"./index-BM3JsZOq.js";import{B as l}from"./banner-DPlTyHjv.js";import{T as s,O as d}from"./toggle.stories-BlYEGn1M.js";import{I as h,A as m}from"./identity-card-CwN41yUF.js";import"./iframe-6_jBXMSq.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-B_J8iUie.js";import"./index-DX_4BEHg.js";import"./index-DrFu-skq.js";import"./lit-html-D-ZEPr28.js";import"./control-C1r2wu67.js";import"./index-DryTTbHl.js";import"./ods-toggle2-LnXcgd5r.js";import"./chunk-FAE4I7JY-v0Th3BC0.js";function i(t){const n={a:"a",code:"code",em:"em",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...r(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{of:s,name:"Documentation"}),`
`,e.jsx(l,{of:s}),`
`,e.jsx(n.p,{children:e.jsxs(n.em,{children:["A ",e.jsx(n.strong,{children:"Toggle"})," component is used to allow the user to switch between two states, on and off, in a visual representation."]})}),`
`,e.jsx(c,{of:d,sourceState:"none"}),`
`,e.jsx(n.h2,{id:"overview",children:"Overview"}),`
`,e.jsxs("div",{className:"documentation-overview",children:[e.jsxs("div",{children:[e.jsxs(n.p,{children:["The ",e.jsx(n.strong,{children:"Toggle"})," component is used to enable or disable a state, setting or feature."]}),e.jsx(n.p,{children:`It provides a clear visual indication of the current state and allows users to change states with a single click or
tap.`}),e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Toggles"})," are commonly used in settings, preferences, and forms where a binary choice is required."]})]}),e.jsx(h,{aliases:["Toggle Switch","Switch"],atomicType:m.atom,className:"documentation-overview__table",figmaLink:"https://www.figma.com/design/9jDDTcR4a9jPRFcdjawAlf/ODS---UI-Kit?node-id=53-15319",githubUrl:"https://github.com/ovh/design-system/tree/master/packages/ods/src/components/toggle",name:"Toggle",relatedComponents:[{name:"Checkbox",subtitle:"Form elements"}]})]}),`
`,e.jsx(n.h2,{id:"anatomy",children:"Anatomy"}),`
`,e.jsx(n.p,{children:e.jsx(n.img,{src:"components/toggle/anatomy.png",alt:"Component anatomy",title:"Component anatomy"})}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Thumb"}),": informs the user about the ",e.jsx(n.strong,{children:"Toggle"}),"'s state according to its position"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Track"}),": trail where the thumb can slide from left to right and vice versa"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Textual indication"}),": add extra info about the ",e.jsx(n.strong,{children:"Toggle"}),"'s state ",e.jsx(n.em,{children:"(optional)"})]}),`
`]}),`
`,e.jsx(n.h2,{id:"usage",children:"Usage"}),`
`,e.jsxs(n.p,{children:["A ",e.jsx(n.strong,{children:"Toggle"})," is commonly used for binary choice."]}),`
`,e.jsx(n.p,{children:"The user can decide to switch between two states with an immediate effect visible at a glance."}),`
`,e.jsx(n.p,{children:"It can be used in following use cases when you need to allow the user to:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"turn an option or settings on or off"}),`
`,e.jsx(n.li,{children:"add or remove an item or an option"}),`
`]}),`
`,e.jsxs(n.p,{children:["A ",e.jsx(n.strong,{children:"Toggle"})," should never require users to press a ",e.jsx(n.a,{href:"?path=/docs/ods-components-button--documentation",children:e.jsx(n.strong,{children:"Button"})})," to apply their settings (if a setting requires a ",e.jsx(n.a,{href:"?path=/docs/ods-components-button--documentation",children:e.jsx(n.strong,{children:"Button"})}),", use a ",e.jsx(n.a,{href:"?path=/docs/ods-components-form-elements-checkbox--documentation",children:e.jsx(n.strong,{children:"Checkbox"})})," instead)."]}),`
`,e.jsx(n.h3,{id:"dos--donts",children:"Dos & Don'ts"}),`
`,e.jsx(o,{className:"documentation-do-table",children:`
| ✅ Do                                                                                                                                                                           |
|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| - Use a **Toggle** when you need to allow users to adjust settings on mobile                                                                                                   |
| - A **Toggle** can be used in a form when it has an immediate effect inside the form to avoid a failed selection when submitted                                                |
| - When other elements are displayed by clicking on the **Toggle**, make sure that these elements are located next to the **Toggle** so it is clear to the user.                |
| - Add a label to the **Toggle** that explains what will happen when the user set it to "on" or "off" position: keep it clear and concise.                                      |
`}),`
`,e.jsx(o,{className:"documentation-dont-table",children:`
| ❌ Don't                                                                                                                                                                               |
|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------      |
| - Use a **Toggle** when you are not expecting an immediate effect by clicking on it: use a [**Checkbox**](?path=/docs/ods-components-form-elements-checkbox--documentation) component instead. |
`}),`
`,e.jsx(n.h2,{id:"placement",children:"Placement"}),`
`,e.jsxs(n.p,{children:["Place the ",e.jsx(n.strong,{children:"Toggle"})," component near the setting or feature it controls."]}),`
`,e.jsx(n.p,{children:"It should be positioned within forms, settings panels, or any relevant context where a binary choice is required."}),`
`,e.jsx(n.p,{children:"Ensure it is easily accessible and visible."}),`
`,e.jsx(n.h2,{id:"behavior",children:"Behavior"}),`
`,e.jsxs(n.p,{children:["When the user clicks on a ",e.jsx(n.strong,{children:"Toggle"}),", it has an immediate effect:"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:'set to "on" position, the thumb will slide to the right of the track'}),`
`,e.jsx(n.li,{children:'set to "off" position, the thumb will slide to the left of the track'}),`
`]}),`
`,e.jsx(n.h2,{id:"variation",children:"Variation"}),`
`,e.jsx(n.p,{children:"N/A"}),`
`,e.jsx(n.h2,{id:"accessibility",children:"Accessibility"}),`
`,e.jsxs(n.p,{children:["When focused, ",e.jsx(n.strong,{children:"Toggle"})," can be triggered using ",e.jsx(n.code,{children:"Space"})," or ",e.jsx(n.code,{children:"Enter"})," keys."]})]})}function S(t={}){const{wrapper:n}={...r(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(i,{...t})}):i(t)}export{S as default};
