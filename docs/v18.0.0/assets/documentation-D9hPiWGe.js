import{j as n}from"./jsx-runtime-Dn0LW--f.js";import{u as r}from"./index-DeyDdHvX.js";import{M as a,C as d,d as o}from"./index-BM3JsZOq.js";import{B as c}from"./banner-DPlTyHjv.js";import{P as t,O as h}from"./password.stories-Czk86kkO.js";import{I as l,A as m}from"./identity-card-CwN41yUF.js";import"./iframe-6_jBXMSq.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-B_J8iUie.js";import"./index-DX_4BEHg.js";import"./index-DrFu-skq.js";import"./lit-html-D-ZEPr28.js";import"./control-C1r2wu67.js";import"./index-DryTTbHl.js";import"./ods-toggle2-LnXcgd5r.js";import"./chunk-FAE4I7JY-v0Th3BC0.js";function i(s){const e={a:"a",code:"code",em:"em",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",...r(),...s.components};return n.jsxs(n.Fragment,{children:[n.jsx(a,{of:t,name:"Documentation"}),`
`,n.jsx(c,{of:t}),`
`,n.jsx(e.p,{children:n.jsxs(e.em,{children:[n.jsx(e.strong,{children:"Password"})," component is an ",n.jsx(e.a,{href:"?path=/docs/ods-components-form-elements-input--documentation",children:n.jsx(e.strong,{children:"Input"})})," field for entering a password that can be hidden or not."]})}),`
`,n.jsx(d,{of:h,sourceState:"none"}),`
`,n.jsx(e.h2,{id:"overview",children:"Overview"}),`
`,n.jsxs("div",{className:"documentation-overview",children:[n.jsx("div",{children:n.jsxs(e.p,{children:["The ",n.jsx(e.strong,{children:"Password"})," component is an ",n.jsx(e.strong,{children:"Input"}),` field of which the content is replaced with middle dot symbol symbols "·" by default and
the masking can be toggled using a show/hide action.`]})}),n.jsx(l,{aliases:["Password field","Password input"],atomicType:m.molecule,className:"documentation-overview__table",figmaLink:"https://www.figma.com/design/9jDDTcR4a9jPRFcdjawAlf/ODS---UI-Kit?node-id=48-4526",githubUrl:"https://github.com/ovh/design-system/tree/master/packages/ods/src/components/password",name:"Password",relatedComponents:[{name:"Form Field",subtitle:"Form elements"},{name:"Input",subtitle:"Form elements"}]})]}),`
`,n.jsx(e.h2,{id:"anatomy",children:"Anatomy"}),`
`,n.jsx(e.p,{children:n.jsx(e.img,{src:"components/password/anatomy.png",alt:"Component anatomy",title:"Component anatomy"})}),`
`,n.jsxs(e.ol,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Placeholder"}),": it provides hints or example of what user should type"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Container"}),": it is a container where the user can type in"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Clear action"}),": a ",n.jsx(e.code,{children:"close"})," icon ",n.jsx(e.a,{href:"?path=/docs/ods-components-button--documentation",children:n.jsx(e.strong,{children:"Button"})})," so that user can clear the ",n.jsx(e.a,{href:"?path=/docs/ods-components-form-elements-input--documentation",children:n.jsx(e.strong,{children:"Input"})})," content (optional)"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Show/hide action"}),": an ",n.jsx(e.code,{children:"eye"})," icon ",n.jsx(e.a,{href:"?path=/docs/ods-components-button--documentation",children:n.jsx(e.strong,{children:"Button"})})," to toggle between masked or visible ",n.jsx(e.a,{href:"?path=/docs/ods-components-form-elements-input--documentation",children:n.jsx(e.strong,{children:"Input"})})," content"]}),`
`]}),`
`,n.jsx(e.h2,{id:"usage",children:"Usage"}),`
`,n.jsxs(e.p,{children:["A ",n.jsx(e.strong,{children:"Password"})," is mainly used to let users enter a password or secret information."]}),`
`,n.jsx(e.p,{children:"Entered password can be masked or visible as plain text when users need to check what they have entered."}),`
`,n.jsx(e.p,{children:"It can also be used for displaying tokens."}),`
`,n.jsx(e.h3,{id:"dos--donts",children:"Dos & Don'ts"}),`
`,n.jsx(o,{className:"documentation-do-table",children:`
| ✅ Do                                                                                                                                                                           |
|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| - Use a **Password** when user has to enter sensitive data in the field                                                                                                        |
| - Use read-only **Password** for tokens with copyable action enabled                                                                                                           |
`}),`
`,n.jsx(o,{className:"documentation-dont-table",children:`
| ❌ Don't                                                                                                                                                                          |
|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| - Use a **Password** when you need the text users enter to be only visible. You should use an [**Input**](?path=/docs/ods-components-form-elements-input--documentation) instead          |
`}),`
`,n.jsx(e.h2,{id:"placement",children:"Placement"}),`
`,n.jsxs(e.p,{children:["By default, the ",n.jsx(e.strong,{children:"Password"})," content is left-aligned in its container."]}),`
`,n.jsx(e.h2,{id:"behavior",children:"Behavior"}),`
`,n.jsxs(e.p,{children:["By default, the ",n.jsx(e.strong,{children:"Password"})," content is masked."]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Password"})," can be used as read-only (especially for tokens)."]}),`
`,n.jsxs(e.p,{children:["The password masking toggled using show/hide action is permanent. Users have to click again to show/hide the ",n.jsx(e.a,{href:"?path=/docs/ods-components-form-elements-input--documentation",children:n.jsx(e.strong,{children:"Input"})})," content."]}),`
`,n.jsxs(e.p,{children:["It inherits events from ",n.jsx(e.a,{href:"?path=/docs/ods-components-form-elements-input--documentation",children:n.jsx(e.strong,{children:"Input"})})," component."]}),`
`,n.jsx(e.h2,{id:"variation",children:"Variation"}),`
`,n.jsx(e.p,{children:"N/A"}),`
`,n.jsx(e.h2,{id:"accessibility",children:"Accessibility"}),`
`,n.jsxs(e.p,{children:["Password shares the same keyboard features as ",n.jsx(e.a,{href:"?path=/docs/ods-components-form-elements-input--documentation",children:n.jsx(e.strong,{children:"Input"})})," (focusing + icon ",n.jsx(e.a,{href:"?path=/docs/ods-components-button--documentation",children:n.jsx(e.strong,{children:"Button"})}),")"]})]})}function A(s={}){const{wrapper:e}={...r(),...s.components};return e?n.jsx(e,{...s,children:n.jsx(i,{...s})}):i(s)}export{A as default};
