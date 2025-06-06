import{j as e}from"./jsx-runtime-VM66peLj.js";import{useMDXComponents as c}from"./index-DQB45XCM.js";import{M as a,C as p}from"./index-BlaLg9GY.js";import{C as l,O as h}from"./clipboard.stories-BI159b97.js";import{B as m}from"./Banner-CANn_RZm.js";import{I as x,A as j,B as u}from"./IdentityCard-DkdK44g3.js";import{H as s}from"./Heading-6Mfikk-c.js";import{S as o,a as t,O as i}from"./StorybookLink-Dek5KO7Z.js";import"./index-D_CmzhJ4.js";import"./iframe-CGgj-FAD.js";import"./index-ChzAxGiP.js";import"./index-CucsY3YN.js";import"./index-CXQShRbs.js";import"./index-DrFu-skq.js";import"./index-CkQHsVsO.js";import"./index-BCxMAfLs.js";import"./use-locale-context-Z4fgdY29.js";import"./Input-BHPevcdA.js";import"./Button-BRERPjFq.js";import"./Spinner-CcwadLZv.js";import"./icon-name-jL3axqAU.js";import"./use-field-context-BA6pMY5L.js";import"./TooltipTrigger-CUqGeRIQ.js";import"./overlay-CZHjGBMC.js";import"./portal-BQw3bnzL.js";import"./use-presence-BmJ92aQP.js";import"./use-event-OCVb0O1l.js";import"./index-DTqyXX3-.js";import"./controls-BtiQQn1l.js";import"./ExternalLink-lH7YZu4p.js";import"./ods-react49-9IXPzWp7.js";import"./index-2w0W-O47-BJ19ihbZ.js";import"./Link-Ck4D7Gly-DoENOEBg.js";function d(r){const n={code:"code",em:"em",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",...c(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{of:l,name:"Documentation"}),`
`,e.jsx(m,{of:l}),`
`,e.jsx(n.p,{children:e.jsxs(n.em,{children:[e.jsx(n.strong,{children:"Clipboard"})," component allows user to view and copy information to its ",e.jsx(n.strong,{children:"Clipboard"}),"."]})}),`
`,e.jsx(p,{of:h,sourceState:"none"}),`
`,e.jsx(s,{label:"Overview",level:2}),`
`,e.jsx(x,{aliases:["Copy Component","Copy to Clipboard"],atomicType:j.atom,figmaLink:"https://www.figma.com/design/9jDDTcR4a9jPRFcdjawAlf/ODS---UI-Kit?node-id=26-7351",githubUrl:"https://github.com/ovh/design-system/tree/master/packages/ods/src/components/clipboard",name:"Clipboard",relatedComponents:[{name:"Button"},{name:"Input",subtitle:"Form elements"},{name:"Tooltip"}],children:e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Clipboard"})," component is used to copy quickly and easily a text, a link and more to the ",e.jsx(n.strong,{children:"Clipboard"}),"."]})}),`
`,e.jsx(s,{label:"Anatomy",level:2}),`
`,e.jsx(n.p,{children:e.jsx(n.img,{src:"components/clipboard/anatomy.png",alt:"Component anatomy",title:"Component anatomy"})}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:["An ",e.jsx(o,{kind:i.input,story:t.documentation,children:"Input"})," containing the whole content that will be copied to the ",e.jsx(n.strong,{children:"Clipboard"})]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Value"})," to copy"]}),`
`,e.jsxs(n.li,{children:["A 'copy' icon ",e.jsx(o,{kind:i.button,story:t.documentation,children:"Button"})," to complete the copy action when clicked"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Show/hide action"}),": an ",e.jsx(n.code,{children:"eye"})," icon ",e.jsx(o,{kind:i.button,story:t.documentation,children:"Button"})," to toggle between masked or visible ",e.jsx(o,{kind:i.input,story:t.documentation,children:"Input"})," content"]}),`
`,e.jsxs(n.li,{children:["A Tooltip displayed when user hovers or focuses the component, and briefly after a successful copy action to the user's ",e.jsx(n.strong,{children:"Clipboard"})]}),`
`]}),`
`,e.jsx(s,{label:"Usage",level:2}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Clipboard"})," is used to quickly and easily copy an amount of text to the user's ",e.jsx(n.strong,{children:"Clipboard"}),"."]}),`
`,e.jsxs(n.p,{children:["It can be used when it is considered that it will take the hassle out of selecting and copying an amount of ",e.jsx(o,{kind:i.text,story:t.documentation,children:"Text"})," for the user."]}),`
`,e.jsx(s,{label:"Dos & Don'ts",level:3}),`
`,e.jsx(u,{donts:["- Use Clipboard just to display some simple text for decorative purpose"],dos:["- Use Clipboard sparingly to reduce user effort"]}),`
`,e.jsx(s,{label:"Placement",level:2}),`
`,e.jsxs(n.p,{children:["By default, the ",e.jsx(n.strong,{children:"Clipboard"})," content is left-aligned in its container."]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Clipboard"}),"'s ",e.jsx(o,{kind:i.tooltip,story:t.documentation,children:"Tooltip"})," are right-aligned after the component by default, and vertically centered."]}),`
`,e.jsx(s,{label:"Behavior",level:2}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Clipboard"}),` can be focused and hovered. They can be disabled.
When disabled, the component can't be hovered, focused nor clicked.`]}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.strong,{children:"Clipboard"})," component is ",e.jsx(n.strong,{children:"used as read-only"}),", to allow users to copy a predefined ",e.jsx(o,{kind:i.text,story:t.documentation,children:"Text"})," that cannot be edited directly."]}),`
`,e.jsxs(n.p,{children:["Even if no visual indicator prompts the user to do so, ",e.jsx(n.strong,{children:"the user can select the Text directly in the Input"}),"."]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"The trigger for copying"})," the ",e.jsx(o,{kind:i.input,story:t.documentation,children:"Input"})," content to the ",e.jsx(n.strong,{children:"Clipboard"})," ",e.jsx(n.strong,{children:'is the "copy" Button'}),`.
When hovering or focusing, `,e.jsx(n.strong,{children:"a Tooltip is displayed as a helper"}),"."]}),`
`,e.jsxs(n.p,{children:["The clipboard masking toggled using show/hide action is permanent. Users have to click again to show/hide the ",e.jsx(o,{kind:i.input,story:t.documentation,children:"Input"})," content."]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"An event is triggered when a Clipboard's content is copied."}),`
A confirmation `,e.jsx(o,{kind:i.tooltip,story:t.documentation,children:"Tooltip"}),' is displayed (if user is still hovering the "copy" ',e.jsx(o,{kind:i.button,story:t.documentation,children:"Button"}),") when ",e.jsx(n.strong,{children:"Clipboard"})," content has been successfully copied."]}),`
`,e.jsx(s,{label:"Variation",level:2}),`
`,e.jsx(n.p,{children:"N/A"}),`
`,e.jsx(s,{label:"Accessibility",level:2}),`
`,e.jsxs(n.p,{children:["When focused, the ",e.jsx(n.strong,{children:"Clipboard"}),' "copy" ',e.jsx(o,{kind:i.button,story:t.documentation,children:"Button"})," can be triggered using ",e.jsx(n.code,{children:"Space"})," or ",e.jsx(n.code,{children:"Enter"})," keys."]})]})}function J(r={}){const{wrapper:n}={...c(),...r.components};return n?e.jsx(n,{...r,children:e.jsx(d,{...r})}):d(r)}export{J as default};
