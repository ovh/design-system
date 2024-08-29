import{j as n}from"./jsx-runtime-3v6rTKkY.js";import{u as c}from"./index-B5y3xRNA.js";import{M as l,C as h,d as i}from"./index-sugWq352.js";import{B as a}from"./banner-BU_1gqe2.js";import{C as r,O as p}from"./clipboard.stories-C4zTvHGi.js";import{O as t}from"./index-BjLrujv2.js";import{O as s}from"./index-DB8q6ij-.js";import"./iframe-D98u-D7f.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-B_J8iUie.js";import"./index-DX_4BEHg.js";import"./index-DrFu-skq.js";import"./lit-html-D-ZEPr28.js";import"./control-C1r2wu67.js";import"./ods-toggle2-Du4-LCNk.js";import"./ods-icon-MrkrUMg1.js";function d(o){const e={a:"a",code:"code",em:"em",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",...c(),...o.components};return n.jsxs(n.Fragment,{children:[n.jsx(l,{of:r,name:"Documentation"}),`
`,n.jsx(a,{of:r}),`
`,n.jsx(e.p,{children:n.jsxs(e.em,{children:[n.jsx(e.strong,{children:"Clipboard"})," component allows user to view and copy information to its ",n.jsx(e.strong,{children:"Clipboard"}),"."]})}),`
`,n.jsx(h,{of:p,sourceState:"none"}),`
`,n.jsx(e.h2,{id:"overview",children:"Overview"}),`
`,n.jsxs("div",{children:[n.jsx("div",{id:"description",children:n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Clipboard"})," component is used to copy quickly and easily a text, a link and more to the ",n.jsx(e.strong,{children:"Clipboard"}),"."]})}),n.jsx("table",{children:n.jsxs("tbody",{children:[n.jsxs("tr",{children:[n.jsx("th",{scope:"row",children:"Name"}),n.jsx("td",{children:n.jsx("strong",{children:"Clipboard"})})]}),n.jsxs("tr",{children:[n.jsx("th",{scope:"row",children:"Also known as"}),n.jsx("td",{children:n.jsx("em",{children:"Copy Component, Copy to Clipboard"})})]}),n.jsxs("tr",{children:[n.jsx("th",{scope:"row",children:"Atomic type"}),n.jsx("td",{children:n.jsxs("a",{href:"https://atomicdesign.bradfrost.com/chapter-2/#atoms",children:["Atom",n.jsx(t,{name:s.externalLink,style:{fontSize:".7rem",paddingLeft:".3rem",paddingRight:".2rem"}})]})})]}),n.jsxs("tr",{children:[n.jsx("th",{scope:"row",children:"Related component(s)"}),n.jsx("td",{children:n.jsxs(e.p,{children:[n.jsx(e.a,{href:"?path=/docs/ods-components-form-elements-input--documentation",children:n.jsx(e.strong,{children:"Input"})}),`,
`,n.jsx(e.a,{href:"?path=/docs/ods-components-button--documentation",children:n.jsx(e.strong,{children:"Button"})}),`,
`,n.jsx(e.a,{href:"?path=/docs/ods-components-tooltip--documentation",children:n.jsx(e.strong,{children:"Tooltip"})})]})})]}),n.jsxs("tr",{children:[n.jsx("th",{scope:"row",children:"Links"}),n.jsxs("td",{children:[n.jsxs("a",{href:"https://www.figma.com/proto/tIKzHa5KvHHyosgIgyBswB/Design-Tokens",children:["Design",n.jsx(t,{name:s.externalLink,style:{fontSize:".7rem",paddingLeft:".3rem",paddingRight:".2rem"}})]}),n.jsx("br",{}),n.jsxs("a",{href:"https://github.com/ovh/design-system/tree/master/packages/components/src/clipboard",children:["Github",n.jsx(t,{name:s.externalLink,style:{fontSize:".7rem",paddingLeft:".3rem",paddingRight:".2rem"}})]})]})]})]})})]}),`
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
`,n.jsx(i,{children:`
| ✅ Do                                                                                                                                                                           |
|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| - Use **Clipboard** sparingly to reduce user effort                                                                                                                            |
`}),`
`,n.jsx(i,{children:`
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
`,n.jsxs(e.p,{children:["When focused, the ",n.jsx(e.strong,{children:"Clipboard"}),' "copy" ',n.jsx(e.a,{href:"?path=/docs/ods-components-button--documentation",children:n.jsx(e.strong,{children:"Button"})})," can be triggered using ",n.jsx(e.code,{children:"Space"})," or ",n.jsx(e.code,{children:"Enter"})," keys."]})]})}function L(o={}){const{wrapper:e}={...c(),...o.components};return e?n.jsx(e,{...o,children:n.jsx(d,{...o})}):d(o)}export{L as default};
