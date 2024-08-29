import{j as e}from"./jsx-runtime-C_5uCoOk.js";import{u as c}from"./index-BNSrq6w-.js";import{M as a,C as h,d as r}from"./index-DnV51lgW.js";import{B as l}from"./banner-CAPzkNgn.js";import{P as i,O as m}from"./password.stories-Czk86kkO.js";import{O as t}from"./index-BUOQImqF.js";import{O as o}from"./index-CEZbmgmh.js";import"./iframe-Cm7AUSBL.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-B_J8iUie.js";import"./index-DX_4BEHg.js";import"./index-DrFu-skq.js";import"./lit-html-D-ZEPr28.js";import"./control-C1r2wu67.js";import"./ods-toggle2-CgWFvVwm.js";function d(s){const n={a:"a",code:"code",em:"em",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",...c(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{of:i,name:"Documentation"}),`
`,e.jsx(l,{of:i}),`
`,e.jsx(n.p,{children:e.jsxs(n.em,{children:[e.jsx(n.strong,{children:"Password"})," component is an ",e.jsx(n.a,{href:"?path=/docs/ods-components-form-elements-input--documentation",children:e.jsx(n.strong,{children:"Input"})})," field for entering a password that can be hidden or not."]})}),`
`,e.jsx(h,{of:m,sourceState:"none"}),`
`,e.jsx(n.h2,{id:"overview",children:"Overview"}),`
`,e.jsxs("div",{children:[e.jsx("div",{id:"description",children:e.jsxs(n.p,{children:["The ",e.jsx(n.strong,{children:"Password"})," component is an ",e.jsx(n.strong,{children:"Input"}),` field of which the content is replaced with middle dot symbol symbols "·" by default and
the masking can be toggled using a show/hide action.`]})}),e.jsx("table",{children:e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("th",{scope:"row",children:"Name"}),e.jsx("td",{children:e.jsx("strong",{children:"Password"})})]}),e.jsxs("tr",{children:[e.jsx("th",{scope:"row",children:"Also known as"}),e.jsx("td",{children:e.jsx("em",{children:"Password field, Password input"})})]}),e.jsxs("tr",{children:[e.jsx("th",{scope:"row",children:"Atomic type"}),e.jsx("td",{children:e.jsxs("a",{href:"https://atomicdesign.bradfrost.com/chapter-2/#molecules",children:["Molecule",e.jsx(t,{name:o.externalLink,style:{fontSize:".7rem",paddingLeft:".3rem",paddingRight:".2rem"}})]})})]}),e.jsxs("tr",{children:[e.jsx("th",{scope:"row",children:"Related component(s)"}),e.jsx("td",{children:e.jsxs(n.p,{children:[e.jsx(n.a,{href:"?path=/docs/ods-components-form-elements-input--documentation",children:e.jsx(n.strong,{children:"Input"})}),", ",e.jsx(n.a,{href:"?path=/docs/ods-components-form-elements-form-field--documentation",children:e.jsx(n.strong,{children:`Form
Field`})})]})})]}),e.jsxs("tr",{children:[e.jsx("th",{scope:"row",children:"Links"}),e.jsxs("td",{children:[e.jsxs("a",{href:"https://www.figma.com/proto/tIKzHa5KvHHyosgIgyBswB/Design-Tokens",children:["Design",e.jsx(t,{name:o.externalLink,style:{fontSize:".7rem",paddingLeft:".3rem",paddingRight:".2rem"}})]}),e.jsx("br",{}),e.jsxs("a",{href:"https://github.com/ovh/design-system/tree/master/packages/components/src/password",children:["Github",e.jsx(t,{name:o.externalLink,style:{fontSize:".7rem",paddingLeft:".3rem",paddingRight:".2rem"}})]})]})]})]})})]}),`
`,e.jsx(n.h2,{id:"anatomy",children:"Anatomy"}),`
`,e.jsx(n.p,{children:e.jsx(n.img,{src:"components/password/anatomy.png",alt:"Component anatomy",title:"Component anatomy"})}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Placeholder"}),": it provides hints or example of what user should type"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Container"}),": it is a container where the user can type in"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Clear action"}),": a ",e.jsx(n.code,{children:"close"})," icon ",e.jsx(n.a,{href:"?path=/docs/ods-components-button--documentation",children:e.jsx(n.strong,{children:"Button"})})," so that user can clear the ",e.jsx(n.a,{href:"?path=/docs/ods-components-form-elements-input--documentation",children:e.jsx(n.strong,{children:"Input"})})," content (optional)"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Show/hide action"}),": an ",e.jsx(n.code,{children:"eye"})," icon ",e.jsx(n.a,{href:"?path=/docs/ods-components-button--documentation",children:e.jsx(n.strong,{children:"Button"})})," to toggle between masked or visible ",e.jsx(n.a,{href:"?path=/docs/ods-components-form-elements-input--documentation",children:e.jsx(n.strong,{children:"Input"})})," content"]}),`
`]}),`
`,e.jsx(n.h2,{id:"usage",children:"Usage"}),`
`,e.jsxs(n.p,{children:["A ",e.jsx(n.strong,{children:"Password"})," is mainly used to let users enter a password or secret information."]}),`
`,e.jsx(n.p,{children:"Entered password can be masked or visible as plain text when users need to check what they have entered."}),`
`,e.jsx(n.p,{children:"It can also be used for displaying tokens."}),`
`,e.jsx(n.h3,{id:"dos--donts",children:"Dos & Don'ts"}),`
`,e.jsx(r,{children:`
| ✅ Do                                                                                                                                                                           |
|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| - Use a **Password** when user has to enter sensitive data in the field                                                                                                        |
| - Use read-only **Password** for tokens with copyable action enabled                                                                                                           |
`}),`
`,e.jsx(r,{children:`
| ❌ Don't                                                                                                                                                                          |
|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| - Use a **Password** when you need the text users enter to be only visible. You should use an [**Input**](?path=/docs/ods-components-form-elements-input--documentation) instead          |
`}),`
`,e.jsx(n.h2,{id:"placement",children:"Placement"}),`
`,e.jsxs(n.p,{children:["By default, the ",e.jsx(n.strong,{children:"Password"})," content is left-aligned in its container."]}),`
`,e.jsx(n.h2,{id:"behavior",children:"Behavior"}),`
`,e.jsxs(n.p,{children:["By default, the ",e.jsx(n.strong,{children:"Password"})," content is masked."]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Password"})," can be used as read-only (especially for tokens)."]}),`
`,e.jsxs(n.p,{children:["The password masking toggled using show/hide action is permanent. Users have to click again to show/hide the ",e.jsx(n.a,{href:"?path=/docs/ods-components-form-elements-input--documentation",children:e.jsx(n.strong,{children:"Input"})})," content."]}),`
`,e.jsxs(n.p,{children:["It inherits events from ",e.jsx(n.a,{href:"?path=/docs/ods-components-form-elements-input--documentation",children:e.jsx(n.strong,{children:"Input"})})," component."]}),`
`,e.jsx(n.h2,{id:"variation",children:"Variation"}),`
`,e.jsx(n.p,{children:"N/A"}),`
`,e.jsx(n.h2,{id:"accessibility",children:"Accessibility"}),`
`,e.jsxs(n.p,{children:["Password shares the same keyboard features as ",e.jsx(n.a,{href:"?path=/docs/ods-components-form-elements-input--documentation",children:e.jsx(n.strong,{children:"Input"})})," (focusing + icon ",e.jsx(n.a,{href:"?path=/docs/ods-components-button--documentation",children:e.jsx(n.strong,{children:"Button"})}),")"]})]})}function M(s={}){const{wrapper:n}={...c(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(d,{...s})}):d(s)}export{M as default};
