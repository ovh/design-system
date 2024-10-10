import{j as n}from"./jsx-runtime-Dn0LW--f.js";import{u as r}from"./index-DeyDdHvX.js";import{M as d,C as c,d as t}from"./index-BM3JsZOq.js";import{B as a}from"./banner-DPlTyHjv.js";import{C as s,O as l}from"./clipboard.stories-C4zTvHGi.js";import{I as h,A as p}from"./identity-card-CwN41yUF.js";import"./iframe-6_jBXMSq.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-B_J8iUie.js";import"./index-DX_4BEHg.js";import"./index-DrFu-skq.js";import"./lit-html-D-ZEPr28.js";import"./control-C1r2wu67.js";import"./index-DryTTbHl.js";import"./ods-toggle2-LnXcgd5r.js";import"./chunk-FAE4I7JY-v0Th3BC0.js";function i(o){const e={a:"a",code:"code",em:"em",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",...r(),...o.components};return n.jsxs(n.Fragment,{children:[n.jsx(d,{of:s,name:"Documentation"}),`
`,n.jsx(a,{of:s}),`
`,n.jsx(e.p,{children:n.jsxs(e.em,{children:[n.jsx(e.strong,{children:"Clipboard"})," component allows user to view and copy information to its ",n.jsx(e.strong,{children:"Clipboard"}),"."]})}),`
`,n.jsx(c,{of:l,sourceState:"none"}),`
`,n.jsx(e.h2,{id:"overview",children:"Overview"}),`
`,n.jsxs("div",{className:"documentation-overview",children:[n.jsx("div",{children:n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Clipboard"})," component is used to copy quickly and easily a text, a link and more to the ",n.jsx(e.strong,{children:"Clipboard"}),"."]})}),n.jsx(h,{aliases:["Copy Component","Copy to Clipboard"],atomicType:p.atom,className:"documentation-overview__table",figmaLink:"https://www.figma.com/design/9jDDTcR4a9jPRFcdjawAlf/ODS---UI-Kit?node-id=26-7351",githubUrl:"https://github.com/ovh/design-system/tree/master/packages/ods/src/components/clipboard",name:"Clipboard",relatedComponents:[{name:"Button"},{name:"Input",subtitle:"Form elements"},{name:"Tooltip"}]})]}),`
`,n.jsx(e.h2,{id:"anatomy",children:"Anatomy"}),`
`,n.jsx(e.p,{children:n.jsx(e.img,{src:"components/clipboard/anatomy.png",alt:"Component anatomy",title:"Component anatomy"})}),`
`,n.jsxs(e.ol,{children:[`
`,n.jsxs(e.li,{children:["An ",n.jsx(e.a,{href:"?path=/docs/ods-components-form-elements-input--documentation",children:n.jsx(e.strong,{children:"Input"})})," containing the whole content that will be copied to the ",n.jsx(e.strong,{children:"Clipboard"})]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Value"})," to copy"]}),`
`,n.jsxs(e.li,{children:["A 'copy' icon ",n.jsx(e.a,{href:"?path=/docs/ods-components-button--documentation",children:n.jsx(e.strong,{children:"Button"})})," to complete the copy action when clicked"]}),`
`,n.jsxs(e.li,{children:["A Tooltip displayed when user hovers or focuses the component, and briefly after a successful copy action to the user's ",n.jsx(e.strong,{children:"Clipboard"})]}),`
`]}),`
`,n.jsx(e.h2,{id:"usage",children:"Usage"}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Clipboard"})," is used to quickly and easily copy an amount of text to the user's ",n.jsx(e.strong,{children:"Clipboard"}),"."]}),`
`,n.jsxs(e.p,{children:["It can be used when it is considered that it will take the hassle out of selecting and copying an amount of ",n.jsx(e.a,{href:"?path=/docs/ods-components-text--documentation",children:n.jsx(e.strong,{children:"Text"})})," for the user."]}),`
`,n.jsx(e.h3,{id:"dos--donts",children:"Dos & Don'ts"}),`
`,n.jsx(t,{className:"documentation-do-table",children:`
| ✅ Do                                                                                                                                                                           |
|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| - Use **Clipboard** sparingly to reduce user effort                                                                                                                            |
`}),`
`,n.jsx(t,{className:"documentation-dont-table",children:`
| ❌ Don't                                                                                                                                                                          |
|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| - Use **Clipboard** just to display some simple text for decorative purpose.                                                                                                     |
`}),`
`,n.jsx(e.h2,{id:"placement",children:"Placement"}),`
`,n.jsxs(e.p,{children:["By default, the ",n.jsx(e.strong,{children:"Clipboard"})," content is left-aligned in its container."]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Clipboard"}),"'s ",n.jsx(e.a,{href:"?path=/docs/ods-components-tooltip--documentation",children:n.jsx(e.strong,{children:"Tooltip"})})," are right-aligned after the component by default, and vertically centered."]}),`
`,n.jsx(e.h2,{id:"behavior",children:"Behavior"}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Clipboard"}),` can be focused and hovered. They can be disabled.
When disabled, the component can't be hovered, focused nor clicked.`]}),`
`,n.jsxs(e.p,{children:["The ",n.jsx(e.strong,{children:"Clipboard"})," component is ",n.jsx(e.strong,{children:"used as read-only"}),", to allow users to copy a predefined ",n.jsx(e.a,{href:"?path=/docs/ods-components-text--documentation",children:n.jsx(e.strong,{children:"Text"})})," that cannot be edited directly."]}),`
`,n.jsxs(e.p,{children:["Even if no visual indicator prompts the user to do so, ",n.jsx(e.strong,{children:"the user can select the Text directly in the Input"}),"."]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"The trigger for copying"})," the ",n.jsx(e.a,{href:"?path=/docs/ods-components-form-elements-input--documentation",children:n.jsx(e.strong,{children:"Input"})})," content to the ",n.jsx(e.a,{href:"?path=/docs/ods-components-clipboard--documentation",children:n.jsx(e.strong,{children:"Clipboard"})})," ",n.jsx(e.strong,{children:'is the "copy" Button'}),`.
When hovering or focusing, `,n.jsx(e.strong,{children:"a Tooltip is displayed as a helper"}),"."]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"An event is triggered when a Clipboard's content is copied."}),`
A confirmation `,n.jsx(e.a,{href:"?path=/docs/ods-components-tooltip--documentation",children:n.jsx(e.strong,{children:"Tooltip"})}),' is displayed (if user is still hovering the "copy" ',n.jsx(e.a,{href:"?path=/docs/ods-components-button--documentation",children:n.jsx(e.strong,{children:"Button"})}),") when ",n.jsx(e.strong,{children:"Clipboard"})," content has been successfully copied."]}),`
`,n.jsx(e.h2,{id:"variation",children:"Variation"}),`
`,n.jsx(e.p,{children:"N/A"}),`
`,n.jsx(e.h2,{id:"accessibility",children:"Accessibility"}),`
`,n.jsxs(e.p,{children:["When focused, the ",n.jsx(e.strong,{children:"Clipboard"}),' "copy" ',n.jsx(e.a,{href:"?path=/docs/ods-components-button--documentation",children:n.jsx(e.strong,{children:"Button"})})," can be triggered using ",n.jsx(e.code,{children:"Space"})," or ",n.jsx(e.code,{children:"Enter"})," keys."]})]})}function M(o={}){const{wrapper:e}={...r(),...o.components};return e?n.jsx(e,{...o,children:n.jsx(i,{...o})}):i(o)}export{M as default};
