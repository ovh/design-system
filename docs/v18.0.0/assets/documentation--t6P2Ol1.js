import{j as e}from"./jsx-runtime-Dn0LW--f.js";import{u as c}from"./index-DeyDdHvX.js";import{M as a,C as r,d as o}from"./index-BM3JsZOq.js";import{B as h}from"./banner-DPlTyHjv.js";import{S as s,O as d}from"./switch.stories-BX1c7gwa.js";import{I as l,A as m}from"./identity-card-CwN41yUF.js";import"./iframe-6_jBXMSq.js";import"../sb-preview/runtime.js";import"./commonjsHelpers-Cpj98o6Y.js";import"./index-B_J8iUie.js";import"./index-DX_4BEHg.js";import"./index-DrFu-skq.js";import"./index-DryTTbHl.js";import"./lit-html-D-ZEPr28.js";import"./control-C1r2wu67.js";import"./unsafe-html-HR6uCwaW.js";import"./ods-toggle2-LnXcgd5r.js";import"./chunk-FAE4I7JY-v0Th3BC0.js";function i(n){const t={a:"a",code:"code",em:"em",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",...c(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{of:s,name:"Documentation"}),`
`,e.jsx(h,{of:s}),`
`,e.jsx(t.p,{children:e.jsxs(t.em,{children:["A ",e.jsx(t.strong,{children:"Switch"})," allows users to quickly and easily switch between several states, actions or options in a row."]})}),`
`,e.jsx(r,{of:d,sourceState:"none"}),`
`,e.jsx(t.h2,{id:"overview",children:"Overview"}),`
`,e.jsxs("div",{className:"documentation-overview",children:[e.jsx("div",{children:e.jsxs(t.p,{children:["A ",e.jsx(t.strong,{children:"Switch"})," allows users to quickly and easily switch between several states, actions or options in a row."]})}),e.jsx(l,{aliases:["Button group","Segmented control","Toggle group"],atomicType:m.atom,className:"documentation-overview__table",figmaLink:"https://www.figma.com/design/9jDDTcR4a9jPRFcdjawAlf/ODS---UI-Kit?node-id=52-10578",githubUrl:"https://github.com/ovh/design-system/tree/master/packages/ods/src/components/switch",name:"Switch",relatedComponents:[{name:"Form Field",subtitle:"Form elements"},{name:"Text"}]})]}),`
`,e.jsx(t.h2,{id:"anatomy",children:"Anatomy"}),`
`,e.jsx(t.p,{children:e.jsx(t.img,{src:"components/switch/anatomy.png",alt:"Component anatomy",title:"Component anatomy"})}),`
`,e.jsxs(t.ol,{children:[`
`,e.jsxs(t.li,{children:[e.jsx(t.strong,{children:"Controls"}),": the user clicks on them to choose a state or an item. Controls' content can be ",e.jsx(t.a,{href:"?path=/docs/ods-components-text--documentation",children:e.jsx(t.strong,{children:"Text"})}),", ",e.jsx(t.a,{href:"?path=/docs/ods-components-icon--documentation",children:e.jsx(t.strong,{children:"Icon"})}),", or both."]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.strong,{children:"Track"}),": it is a trail where the controls are displayed. The user can switch from one state or item to another"]}),`
`]}),`
`,e.jsx(t.h2,{id:"usage",children:"Usage"}),`
`,e.jsxs(t.p,{children:["A ",e.jsx(t.strong,{children:"Switch"})," is used to switch between multiple states, actions or options (up-to 4)."]}),`
`,e.jsx(t.p,{children:"It can be used for many use cases such as selecting a state within a group of states or filtering."}),`
`,e.jsx(t.h3,{id:"dos--donts",children:"Dos & Don'ts"}),`
`,e.jsx(o,{className:"documentation-do-table",children:`
| ✅ Do                                                                                                                                                                                                                            |
|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------                                                  |
| - Use a **Switch** when the user has to select only one state or action active at a time                                                                                                                                     |
| - Make it clear in every **Switch** control content about what the user is selecting: give a strong indication                                                                                                               |
| - Consider whether a [**Text**](?path=/docs/ods-components-text--documentation), an [**Icon**](?path=/docs/ods-components-icon--documentation), or both would suit better to your **Switch** controls content |
`}),`
`,e.jsx(o,{className:"documentation-dont-table",children:`
| ❌ Don't                                                                                                                                                                                                                                                                                                                                             |
|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------                                                                                                                                                                    |
| - Use a **Switch** when there are more than four options to display to the user: use others component such as [**Checkbox**](?path=/docs/ods-components-form-elements-checkbox--documentation) button, [**Radio**](?path=/docs/ods-components-form-elements-radio--documentation) button or [**Select**](?path=/docs/ods-components-form-elements-select--documentation) |
| - Use a **Switch** when you are not expecting an immediate effect by clicking on it: use a [**Checkbox**](?path=/docs/ods-components-form-elements-checkbox--documentation) component instead                                                                                                                                                          |
| - Use a **Switch** with states, actions or options that are not strongly related                                                                                                                                                                                                                                                              |
`}),`
`,e.jsx(t.h2,{id:"placement",children:"Placement"}),`
`,e.jsxs(t.p,{children:["A ",e.jsx(t.strong,{children:"Switch"}),` can be used in a page when the user needs to select a choice from multiple states or items.
It may replace two `,e.jsx(t.a,{href:"?path=/docs/ods-components-form-elements-radio--documentation",children:e.jsx(t.strong,{children:"Radio"})})," buttons or a single ",e.jsx(t.a,{href:"?path=/docs/ods-components-form-elements-checkbox--documentation",children:e.jsx(t.strong,{children:"Checkbox"})})," to allow users to choose between several states."]}),`
`,e.jsxs(t.p,{children:["By default, the width of a ",e.jsx(t.strong,{children:"Switch"}),` control is defined by the length of content.
A custom width can be set so all controls on the track will have the same size regardless of content length.`]}),`
`,e.jsx(t.h2,{id:"behavior",children:"Behavior"}),`
`,e.jsx(t.p,{children:e.jsx(t.strong,{children:"One of the controls is always selected by default."})}),`
`,e.jsxs(t.p,{children:["The user can switch between states by clicking the ",e.jsx(t.strong,{children:"Switch"})," controls, and it has an immediate effect."]}),`
`,e.jsxs(t.p,{children:["An event is triggered when the ",e.jsx(t.strong,{children:"Switch"})," item changes."]}),`
`,e.jsx(t.h2,{id:"variation",children:"Variation"}),`
`,e.jsx(t.p,{children:"N/A"}),`
`,e.jsx(t.h2,{id:"accessibility",children:"Accessibility"}),`
`,e.jsxs(t.p,{children:["All ",e.jsx(t.strong,{children:"Switch"})," items can be focused using ",e.jsx(t.code,{children:"Tabulation"}),", selecting an item can be done using ",e.jsx(t.code,{children:"Space"}),"/",e.jsx(t.code,{children:"Enter"})," keys."]})]})}function U(n={}){const{wrapper:t}={...c(),...n.components};return t?e.jsx(t,{...n,children:e.jsx(i,{...n})}):i(n)}export{U as default};
