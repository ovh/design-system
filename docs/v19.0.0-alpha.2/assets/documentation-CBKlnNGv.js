import{j as e}from"./jsx-runtime-VM66peLj.js";import{useMDXComponents as l}from"./index-DQB45XCM.js";import{M as c,C as m}from"./index-BlaLg9GY.js";import{P as a,O as h}from"./password.stories--aOMbvlk.js";import{B as p}from"./Banner-CANn_RZm.js";import{I as u,A as x,B as j}from"./IdentityCard-DkdK44g3.js";import{H as i}from"./Heading-6Mfikk-c.js";import{S as s,a as t,O as o}from"./StorybookLink-Dek5KO7Z.js";import"./index-D_CmzhJ4.js";import"./iframe-CGgj-FAD.js";import"./index-ChzAxGiP.js";import"./index-CucsY3YN.js";import"./index-CXQShRbs.js";import"./index-DrFu-skq.js";import"./FormFieldLabel-BxxkSoC9.js";import"./index-CkQHsVsO.js";import"./index-BCxMAfLs.js";import"./use-field-context-BA6pMY5L.js";import"./Input-BHPevcdA.js";import"./Button-BRERPjFq.js";import"./Spinner-CcwadLZv.js";import"./icon-name-jL3axqAU.js";import"./controls-BtiQQn1l.js";import"./ExternalLink-lH7YZu4p.js";import"./ods-react49-9IXPzWp7.js";import"./index-2w0W-O47-BJ19ihbZ.js";import"./Link-Ck4D7Gly-DoENOEBg.js";function d(r){const n={code:"code",em:"em",img:"img",li:"li",ol:"ol",p:"p",span:"span",strong:"strong",...l(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(c,{of:a,name:"Documentation"}),`
`,e.jsx(p,{of:a}),`
`,e.jsx(n.p,{children:e.jsxs(n.em,{children:[e.jsx(n.strong,{children:"Password"})," component is an ",e.jsx(s,{kind:o.input,story:t.documentation,children:"Input"})," field for entering a password that can be hidden or not."]})}),`
`,e.jsx(m,{of:h,sourceState:"none"}),`
`,e.jsx(i,{label:"Overview",level:2}),`
`,e.jsx(u,{aliases:["Password field","Password input"],atomicType:x.molecule,figmaLink:"https://www.figma.com/design/9jDDTcR4a9jPRFcdjawAlf/ODS---UI-Kit?node-id=48-4526",githubUrl:"https://github.com/ovh/design-system/tree/master/packages/ods/src/components/password",name:"Password",relatedComponents:[{name:"Form Field",subtitle:"Form elements"},{name:"Input",subtitle:"Form elements"}],children:e.jsxs(n.p,{children:["The ",e.jsx(n.strong,{children:"Password"})," component is an ",e.jsx(n.strong,{children:"Input"}),` field of which the content is replaced with middle dot symbol symbols "·" by default and
the masking can be toggled using a show/hide action.`]})}),`
`,e.jsx(i,{label:"Anatomy",level:2}),`
`,e.jsx(n.p,{children:e.jsx(n.img,{src:"components/password/anatomy.png",alt:"Component anatomy",title:"Component anatomy"})}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Placeholder"}),": it provides hints or example of what user should type"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Container"}),": it is a container where the user can type in"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Clear action"}),": a ",e.jsx(n.code,{children:"close"})," icon ",e.jsx(s,{kind:o.button,story:t.documentation,children:"Button"})," so that user can clear the ",e.jsx(s,{kind:o.input,story:t.documentation,children:"Input"})," content (optional)"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Show/hide action"}),": an ",e.jsx(n.code,{children:"eye"})," icon ",e.jsx(s,{kind:o.button,story:t.documentation,children:"Button"})," to toggle between masked or visible ",e.jsx(s,{kind:o.input,story:t.documentation,children:"Input"})," content"]}),`
`]}),`
`,e.jsx(i,{label:"Usage",level:2}),`
`,e.jsxs(n.p,{children:["A ",e.jsx(n.strong,{children:"Password"})," is mainly used to let users enter a password or secret information."]}),`
`,e.jsx(n.p,{children:"Entered password can be masked or visible as plain text when users need to check what they have entered."}),`
`,e.jsx(n.p,{children:"It can also be used for displaying tokens."}),`
`,e.jsx(i,{label:"Dos & Don'ts",level:3}),`
`,e.jsx(j,{donts:[e.jsxs(n.span,{children:["- Use a Password when you need the text users enter to be only visible. You should use an ",e.jsx(s,{kind:o.input,story:t.documentation,children:"Input"})," instead"]})],dos:["- Use a Password when user has to enter sensitive data in the field","- Use read-only Password for tokens with copyable action enabled"]}),`
`,e.jsx(i,{label:"Placement",level:2}),`
`,e.jsxs(n.p,{children:["By default, the ",e.jsx(n.strong,{children:"Password"})," content is left-aligned in its container."]}),`
`,e.jsx(i,{label:"Behavior",level:2}),`
`,e.jsxs(n.p,{children:["By default, the ",e.jsx(n.strong,{children:"Password"})," content is masked."]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Password"})," can be used as read-only (especially for tokens)."]}),`
`,e.jsxs(n.p,{children:["The password masking toggled using show/hide action is permanent. Users have to click again to show/hide the ",e.jsx(s,{kind:o.input,story:t.documentation,children:"Input"})," content."]}),`
`,e.jsxs(n.p,{children:["It inherits events from ",e.jsx(s,{kind:o.input,story:t.documentation,children:"Input"})," component."]}),`
`,e.jsx(i,{label:"Variation",level:2}),`
`,e.jsx(n.p,{children:"N/A"}),`
`,e.jsx(i,{label:"Accessibility",level:2}),`
`,e.jsxs(n.p,{children:["Password shares the same keyboard features as ",e.jsx(s,{kind:o.input,story:t.documentation,children:"Input"})," (focusing + icon ",e.jsx(s,{kind:o.button,story:t.documentation,children:"Button"}),")"]})]})}function K(r={}){const{wrapper:n}={...l(),...r.components};return n?e.jsx(n,{...r,children:e.jsx(d,{...r})}):d(r)}export{K as default};
