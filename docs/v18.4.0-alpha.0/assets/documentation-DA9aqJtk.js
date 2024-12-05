import{j as e}from"./jsx-runtime-Cz3huCOb.js";import{u as l}from"./index-BRdWgBGF.js";import{M as a,C as c}from"./index-C7ZQW9Xo.js";import{C as i,O as d}from"./clipboard.stories-BWMm9aMF.js";import{B as p}from"./Banner-4suhesey.js";import{I as m,A as h,B as x}from"./IdentityCard-BtdKCWJ5.js";import{H as t}from"./Heading-BWgLZzFp.js";import{S as o}from"./StorybookLink-CbljYtBK.js";import"./iframe-O-MMI8BM.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-B_J8iUie.js";import"./index-DX_4BEHg.js";import"./index-DrFu-skq.js";import"./lit-html-D-ZEPr28.js";import"./controls-D697y8_r.js";import"./index-D19O3a7h.js";import"./index-BYszAjkJ.js";function r(s){const n={code:"code",em:"em",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",...l(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{of:i,name:"Documentation"}),`
`,e.jsx(p,{of:i}),`
`,e.jsx(n.p,{children:e.jsxs(n.em,{children:[e.jsx(n.strong,{children:"Clipboard"})," component allows user to view and copy information to its ",e.jsx(n.strong,{children:"Clipboard"}),"."]})}),`
`,e.jsx(c,{of:d,sourceState:"none"}),`
`,e.jsx(t,{label:"Overview",level:2}),`
`,e.jsx(m,{aliases:["Copy Component","Copy to Clipboard"],atomicType:h.atom,figmaLink:"https://www.figma.com/design/9jDDTcR4a9jPRFcdjawAlf/ODS---UI-Kit?node-id=26-7351",githubUrl:"https://github.com/ovh/design-system/tree/master/packages/ods/src/components/clipboard",name:"Clipboard",relatedComponents:[{name:"Button"},{name:"Input",subtitle:"Form elements"},{name:"Tooltip"}],children:e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Clipboard"})," component is used to copy quickly and easily a text, a link and more to the ",e.jsx(n.strong,{children:"Clipboard"}),"."]})}),`
`,e.jsx(t,{label:"Anatomy",level:2}),`
`,e.jsx(n.p,{children:e.jsx(n.img,{src:"components/clipboard/anatomy.png",alt:"Component anatomy",title:"Component anatomy"})}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:["An ",e.jsx(o,{kind:"ODS Components/Form elements/Input",label:"Input",story:"Documentation"})," containing the whole content that will be copied to the ",e.jsx(n.strong,{children:"Clipboard"})]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Value"})," to copy"]}),`
`,e.jsxs(n.li,{children:["A 'copy' icon ",e.jsx(o,{kind:"ODS Components/Button",label:"Button",story:"Documentation"})," to complete the copy action when clicked"]}),`
`,e.jsxs(n.li,{children:["A Tooltip displayed when user hovers or focuses the component, and briefly after a successful copy action to the user's ",e.jsx(n.strong,{children:"Clipboard"})]}),`
`]}),`
`,e.jsx(t,{label:"Usage",level:2}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Clipboard"})," is used to quickly and easily copy an amount of text to the user's ",e.jsx(n.strong,{children:"Clipboard"}),"."]}),`
`,e.jsxs(n.p,{children:["It can be used when it is considered that it will take the hassle out of selecting and copying an amount of ",e.jsx(o,{kind:"ODS Components/Text",label:"Text",story:"Documentation"})," for the user."]}),`
`,e.jsx(t,{label:"Dos & Don'ts",level:3}),`
`,e.jsx(x,{donts:["- Use Clipboard just to display some simple text for decorative purpose"],dos:["- Use Clipboard sparingly to reduce user effort"]}),`
`,e.jsx(t,{label:"Placement",level:2}),`
`,e.jsxs(n.p,{children:["By default, the ",e.jsx(n.strong,{children:"Clipboard"})," content is left-aligned in its container."]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Clipboard"}),"'s ",e.jsx(o,{kind:"ODS Components/Tooltip",label:"Tooltip",story:"Documentation"})," are right-aligned after the component by default, and vertically centered."]}),`
`,e.jsx(t,{label:"Behavior",level:2}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Clipboard"}),` can be focused and hovered. They can be disabled.
When disabled, the component can't be hovered, focused nor clicked.`]}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.strong,{children:"Clipboard"})," component is ",e.jsx(n.strong,{children:"used as read-only"}),", to allow users to copy a predefined ",e.jsx(o,{kind:"ODS Components/Text",label:"Text",story:"Documentation"})," that cannot be edited directly."]}),`
`,e.jsxs(n.p,{children:["Even if no visual indicator prompts the user to do so, ",e.jsx(n.strong,{children:"the user can select the Text directly in the Input"}),"."]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"The trigger for copying"})," the ",e.jsx(o,{kind:"ODS Components/Form elements/Input",label:"Input",story:"Documentation"})," content to the ",e.jsx(n.strong,{children:"Clipboard"})," ",e.jsx(n.strong,{children:'is the "copy" Button'}),`.
When hovering or focusing, `,e.jsx(n.strong,{children:"a Tooltip is displayed as a helper"}),"."]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"An event is triggered when a Clipboard's content is copied."}),`
A confirmation `,e.jsx(o,{kind:"ODS Components/Tooltip",label:"Tooltip",story:"Documentation"}),' is displayed (if user is still hovering the "copy" ',e.jsx(o,{kind:"ODS Components/Button",label:"Button",story:"Documentation"}),") when ",e.jsx(n.strong,{children:"Clipboard"})," content has been successfully copied."]}),`
`,e.jsx(t,{label:"Variation",level:2}),`
`,e.jsx(n.p,{children:"N/A"}),`
`,e.jsx(t,{label:"Accessibility",level:2}),`
`,e.jsxs(n.p,{children:["When focused, the ",e.jsx(n.strong,{children:"Clipboard"}),' "copy" ',e.jsx(o,{kind:"ODS Components/Button",label:"Button",story:"Documentation"})," can be triggered using ",e.jsx(n.code,{children:"Space"})," or ",e.jsx(n.code,{children:"Enter"})," keys."]})]})}function F(s={}){const{wrapper:n}={...l(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(r,{...s})}):r(s)}export{F as default};
