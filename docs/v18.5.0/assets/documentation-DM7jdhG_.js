import{j as e,M as c,C as p}from"./index-aSJOi-xY.js";import{u as d}from"./index-D_oymSD0.js";import{C as l,O as h}from"./clipboard.stories-D-bA7Kvl.js";import{B as m}from"./Banner-DfBQCKAd.js";import{I as x,A as j,B as u}from"./IdentityCard-bFWvbFx8.js";import{H as i}from"./Heading-fUBW5LMg.js";import{S as o,O as t,a as s}from"./StorybookLink-CdkDDCl2.js";import"./iframe-Cjn0x15a.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-D-8MO0q_.js";import"./index-DX_4BEHg.js";import"./index-DrFu-skq.js";import"./controls-DX883vx3.js";import"./index-B1WyGMUD.js";import"./index-DduIf26o.js";function a(r){const n={code:"code",em:"em",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",...d(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(c,{of:l,name:"Documentation"}),`
`,e.jsx(m,{of:l}),`
`,e.jsx(n.p,{children:e.jsxs(n.em,{children:[e.jsx(n.strong,{children:"Clipboard"})," component allows user to view and copy information to its ",e.jsx(n.strong,{children:"Clipboard"}),"."]})}),`
`,e.jsx(p,{of:h,sourceState:"none"}),`
`,e.jsx(i,{label:"Overview",level:2}),`
`,e.jsx(x,{aliases:["Copy Component","Copy to Clipboard"],atomicType:j.atom,figmaLink:"https://www.figma.com/design/9jDDTcR4a9jPRFcdjawAlf/ODS---UI-Kit?node-id=26-7351",githubUrl:"https://github.com/ovh/design-system/tree/master/packages/ods/src/components/clipboard",name:"Clipboard",relatedComponents:[{name:"Button"},{name:"Input",subtitle:"Form elements"},{name:"Tooltip"}],children:e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Clipboard"})," component is used to copy quickly and easily a text, a link and more to the ",e.jsx(n.strong,{children:"Clipboard"}),"."]})}),`
`,e.jsx(i,{label:"Anatomy",level:2}),`
`,e.jsx(n.p,{children:e.jsx(n.img,{src:"components/clipboard/anatomy.png",alt:"Component anatomy",title:"Component anatomy"})}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:["An ",e.jsx(o,{kind:t.input,label:"Input",story:s.documentation})," containing the whole content that will be copied to the ",e.jsx(n.strong,{children:"Clipboard"})]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Value"})," to copy"]}),`
`,e.jsxs(n.li,{children:["A 'copy' icon ",e.jsx(o,{kind:t.button,label:"Button",story:s.documentation})," to complete the copy action when clicked"]}),`
`,e.jsxs(n.li,{children:["A Tooltip displayed when user hovers or focuses the component, and briefly after a successful copy action to the user's ",e.jsx(n.strong,{children:"Clipboard"})]}),`
`]}),`
`,e.jsx(i,{label:"Usage",level:2}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Clipboard"})," is used to quickly and easily copy an amount of text to the user's ",e.jsx(n.strong,{children:"Clipboard"}),"."]}),`
`,e.jsxs(n.p,{children:["It can be used when it is considered that it will take the hassle out of selecting and copying an amount of ",e.jsx(o,{kind:t.text,label:"Text",story:s.documentation})," for the user."]}),`
`,e.jsx(i,{label:"Dos & Don'ts",level:3}),`
`,e.jsx(u,{donts:["- Use Clipboard just to display some simple text for decorative purpose"],dos:["- Use Clipboard sparingly to reduce user effort"]}),`
`,e.jsx(i,{label:"Placement",level:2}),`
`,e.jsxs(n.p,{children:["By default, the ",e.jsx(n.strong,{children:"Clipboard"})," content is left-aligned in its container."]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Clipboard"}),"'s ",e.jsx(o,{kind:t.tooltip,label:"Tooltip",story:s.documentation})," are right-aligned after the component by default, and vertically centered."]}),`
`,e.jsx(i,{label:"Behavior",level:2}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Clipboard"}),` can be focused and hovered. They can be disabled.
When disabled, the component can't be hovered, focused nor clicked.`]}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.strong,{children:"Clipboard"})," component is ",e.jsx(n.strong,{children:"used as read-only"}),", to allow users to copy a predefined ",e.jsx(o,{kind:t.text,label:"Text",story:s.documentation})," that cannot be edited directly."]}),`
`,e.jsxs(n.p,{children:["Even if no visual indicator prompts the user to do so, ",e.jsx(n.strong,{children:"the user can select the Text directly in the Input"}),"."]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"The trigger for copying"})," the ",e.jsx(o,{kind:t.input,label:"Input",story:s.documentation})," content to the ",e.jsx(n.strong,{children:"Clipboard"})," ",e.jsx(n.strong,{children:'is the "copy" Button'}),`.
When hovering or focusing, `,e.jsx(n.strong,{children:"a Tooltip is displayed as a helper"}),"."]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"An event is triggered when a Clipboard's content is copied."}),`
A confirmation `,e.jsx(o,{kind:t.tooltip,label:"Tooltip",story:s.documentation}),' is displayed (if user is still hovering the "copy" ',e.jsx(o,{kind:t.button,label:"Button",story:s.documentation}),") when ",e.jsx(n.strong,{children:"Clipboard"})," content has been successfully copied."]}),`
`,e.jsx(i,{label:"Variation",level:2}),`
`,e.jsx(n.p,{children:"N/A"}),`
`,e.jsx(i,{label:"Accessibility",level:2}),`
`,e.jsxs(n.p,{children:["When focused, the ",e.jsx(n.strong,{children:"Clipboard"}),' "copy" ',e.jsx(o,{kind:t.button,label:"Button",story:s.documentation})," can be triggered using ",e.jsx(n.code,{children:"Space"})," or ",e.jsx(n.code,{children:"Enter"})," keys."]})]})}function E(r={}){const{wrapper:n}={...d(),...r.components};return n?e.jsx(n,{...r,children:e.jsx(a,{...r})}):a(r)}export{E as default};
