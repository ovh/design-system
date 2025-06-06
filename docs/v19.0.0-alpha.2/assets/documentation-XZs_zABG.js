import{j as e}from"./jsx-runtime-VM66peLj.js";import{useMDXComponents as c}from"./index-DQB45XCM.js";import{M as d,C as h}from"./index-BlaLg9GY.js";import{C as a,O as m}from"./checkbox.stories-C1nhuuu9.js";import{B as x}from"./Banner-CANn_RZm.js";import{I as p,A as j,B as b}from"./IdentityCard-DkdK44g3.js";import{H as s}from"./Heading-6Mfikk-c.js";import{S as o,a as i,O as r}from"./StorybookLink-Dek5KO7Z.js";import"./index-D_CmzhJ4.js";import"./iframe-CGgj-FAD.js";import"./index-ChzAxGiP.js";import"./index-CucsY3YN.js";import"./index-CXQShRbs.js";import"./index-DrFu-skq.js";import"./index-CkQHsVsO.js";import"./index-BCxMAfLs.js";import"./index-DTqyXX3-.js";import"./use-locale-context-Z4fgdY29.js";import"./use-field-context-BA6pMY5L.js";import"./icon-name-jL3axqAU.js";import"./use-event-OCVb0O1l.js";import"./FormFieldLabel-BxxkSoC9.js";import"./Text-eeWNb4Wa.js";import"./controls-BtiQQn1l.js";import"./ExternalLink-lH7YZu4p.js";import"./ods-react49-9IXPzWp7.js";import"./index-2w0W-O47-BJ19ihbZ.js";import"./Link-Ck4D7Gly-DoENOEBg.js";function l(t){const n={code:"code",em:"em",img:"img",li:"li",ol:"ol",p:"p",span:"span",strong:"strong",ul:"ul",...c(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(d,{of:a,name:"Documentation"}),`
`,e.jsx(x,{of:a}),`
`,e.jsx(n.p,{children:e.jsxs(n.em,{children:[e.jsx(n.strong,{children:"Checkbox"})," are used for a list of options where the user may make a choice by selecting multiple options, including all or none."]})}),`
`,e.jsx(h,{of:m,sourceState:"none"}),`
`,e.jsx(s,{label:"Overview",level:2}),`
`,e.jsx(p,{aliases:["Checkbox Button (previous name)","Check Box","Tick Box"],atomicType:j.atom,figmaLink:"https://www.figma.com/design/9jDDTcR4a9jPRFcdjawAlf/ODS---UI-Kit?node-id=3-28514",githubUrl:"https://github.com/ovh/design-system/tree/master/packages/ods/src/components/checkbox",name:"Checkbox",relatedComponents:[{name:"Text"}],children:e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Checkbox"}),` are used to make a choice that must be confirmed by submitting a form. For an instantaneous choice
(without submit), the use of a switch is preferred (see Switch).`]})}),`
`,e.jsx(s,{label:"Anatomy",level:2}),`
`,e.jsx(n.p,{children:e.jsx(n.img,{src:"components/checkbox/anatomy.png",alt:"Component anatomy",title:"Component anatomy"})}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Checkbox"})," - The selection control."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Text"})," - Use this ",e.jsx(o,{kind:r.text,story:i.documentation,children:"Text"})," label to describe what the ",e.jsx(o,{kind:r.radio,story:i.documentation,children:"Radio"})," is for."]}),`
`]}),`
`,e.jsx(s,{label:"Usage",level:2}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Checkbox"})," can be used in forms and containers."]}),`
`,e.jsx(n.p,{children:"Also, it can serve as :"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Selecting/deselecting item(s)"}),`
`,e.jsx(n.li,{children:"Lists/sub-lists"}),`
`,e.jsx(n.li,{children:"Filters"}),`
`,e.jsx(n.li,{children:"Agreement to terms and conditions"}),`
`]}),`
`,e.jsxs(n.p,{children:["A ",e.jsx(n.strong,{children:"Checkbox"})," group is used for a list of options where the user may make a choice by selecting multiple options, including all or none."]}),`
`,e.jsx(s,{label:"Dos & Don'ts",level:3}),`
`,e.jsx(b,{donts:[e.jsxs(n.span,{children:["- Avoid using Checkbox if only one item in list can be selected, prefer using ",e.jsx(o,{kind:r.radio,story:i.documentation,children:"Radio"})," instead"]}),"- Truncate Checkbox label text with an ellipsis"],dos:["- Always use clear and concise labels for Checkbox","- Long labels may wrap to a second line, and this is preferable to truncation"]}),`
`,e.jsx(s,{label:"Placement",level:2}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.strong,{children:"Checkbox"})," can be autonomous, as it can be labelled in a starting/ending ",e.jsx(o,{kind:r.text,story:i.documentation,children:"Text"}),"."]}),`
`,e.jsx(n.p,{children:"It can be inserted in containers or next to an external item."}),`
`,e.jsx(s,{label:"Behavior",level:2}),`
`,e.jsxs(n.p,{children:["The default behavior is that when clicking on the ",e.jsx(n.strong,{children:"Checkbox"})," or its linked label, the ",e.jsx(n.strong,{children:"Checkbox"})," is alternatively selected or deselected depending on the previous state."]}),`
`,e.jsxs(n.p,{children:["The indeterminate state is used only when the ",e.jsx(n.strong,{children:"Checkbox"})," contains a sub-list of selections that are partially selected."]}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.strong,{children:"Checkbox"})," can be in an error state, but also in a disabled state."]}),`
`,e.jsx(s,{label:"Variation",level:2}),`
`,e.jsx(n.p,{children:"N/A"}),`
`,e.jsx(s,{label:"Accessibility",level:2}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Checkbox"})," can be focus through tabulation, and toggled using ",e.jsx(n.code,{children:"Space"})," and ",e.jsx(n.code,{children:"Enter"})," keys."]})]})}function V(t={}){const{wrapper:n}={...c(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(l,{...t})}):l(t)}export{V as default};
