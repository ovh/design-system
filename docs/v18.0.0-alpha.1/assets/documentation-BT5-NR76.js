import{j as e}from"./jsx-runtime-C_5uCoOk.js";import{u as l}from"./index-BNSrq6w-.js";import{M as a,C as c,d as o}from"./index-DnV51lgW.js";import{B as h}from"./banner-CAPzkNgn.js";import{M as r,O as x}from"./modal.stories-D-PKhlhB.js";import{O as i}from"./index-BUOQImqF.js";import{O as t}from"./index-CEZbmgmh.js";import"./iframe-Cm7AUSBL.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-B_J8iUie.js";import"./index-DX_4BEHg.js";import"./index-DrFu-skq.js";import"./lit-html-D-ZEPr28.js";import"./unsafe-html-HR6uCwaW.js";import"./control-C1r2wu67.js";import"./ods-toggle2-CgWFvVwm.js";function d(s){const n={a:"a",code:"code",em:"em",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...l(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{of:r,name:"Documentation"}),`
`,e.jsx(h,{of:r}),`
`,e.jsx(n.p,{children:e.jsxs(n.em,{children:["A ",e.jsx(n.strong,{children:"Modal"})," component is used to overlay with important content the main view of a site and block interactions with it."]})}),`
`,e.jsx(c,{of:x,sourceState:"none"}),`
`,e.jsx(n.h2,{id:"overview",children:"Overview"}),`
`,e.jsxs("div",{children:[e.jsxs("div",{id:"description",children:[e.jsxs(n.p,{children:["A ",e.jsx(n.strong,{children:"Modal"})," is used to provide some information to users that needs a response or immediate attention."]}),e.jsxs(n.p,{children:["While a ",e.jsx(n.strong,{children:"Modal"}),` is triggered, there is no interaction possible on the page that is overlaid so users have to
dismiss or click on an action `,e.jsx(n.a,{href:"?path=/docs/ods-components-button--documentation",children:e.jsx(n.strong,{children:"Button"})}),` to proceed
further.`]})]}),e.jsx("table",{children:e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("th",{scope:"row",children:"Name"}),e.jsx("td",{children:e.jsx("strong",{children:"Modal"})})]}),e.jsxs("tr",{children:[e.jsx("th",{scope:"row",children:"Also known as"}),e.jsx("td",{children:e.jsx("em",{children:"Dialog, Alert Dialog, Confirm Dialog"})})]}),e.jsxs("tr",{children:[e.jsx("th",{scope:"row",children:"Atomic type"}),e.jsx("td",{children:e.jsxs("a",{href:"https://atomicdesign.bradfrost.com/chapter-2/#molecules",children:["Molecule",e.jsx(i,{name:t.externalLink,style:{fontSize:".7rem",paddingLeft:".3rem",paddingRight:".2rem"}})]})})]}),e.jsxs("tr",{children:[e.jsx("th",{scope:"row",children:"Related component(s)"}),e.jsx("td",{children:e.jsxs(n.p,{children:[e.jsx(n.a,{href:"?path=/docs/ods-components-text--documentation",children:e.jsx(n.strong,{children:"Text"})}),`,
`,e.jsx(n.a,{href:"?path=/docs/ods-components-button--documentation",children:e.jsx(n.strong,{children:"Button"})})]})})]}),e.jsxs("tr",{children:[e.jsx("th",{scope:"row",children:"Links"}),e.jsxs("td",{children:[e.jsxs("a",{href:"https://www.figma.com/proto/tIKzHa5KvHHyosgIgyBswB/Design-Tokens",children:["Design",e.jsx(i,{name:t.externalLink,style:{fontSize:".7rem",paddingLeft:".3rem",paddingRight:".2rem"}})]}),e.jsx("br",{}),e.jsxs("a",{href:"https://github.com/ovh/design-system/tree/master/packages/components/src/modal",children:["Github",e.jsx(i,{name:t.externalLink,style:{fontSize:".7rem",paddingLeft:".3rem",paddingRight:".2rem"}})]})]})]})]})})]}),`
`,e.jsx(n.h2,{id:"anatomy",children:"Anatomy"}),`
`,e.jsx(n.p,{children:e.jsx(n.img,{src:"components/modal/anatomy.png",alt:"Component anatomy",title:"Component anatomy"})}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Backdrop overlay"})," to obscure the on-page content"]}),`
`,e.jsx(n.li,{children:e.jsx(n.strong,{children:"Container"})}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Content"})," container, filled with ",e.jsx(n.a,{href:"?path=/docs/ods-components-text--documentation",children:e.jsx(n.strong,{children:"Text"})})," or other read-only content, depending on the usage"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Action Buttons"})," container, to complete or cancel the ",e.jsx(n.strong,{children:"Modal"})," task"]}),`
`,e.jsxs(n.li,{children:[e.jsxs(n.strong,{children:[e.jsx(n.code,{children:"close"})," icon Button"]})," to close the ",e.jsx(n.strong,{children:"Modal"})," without submitting any data"]}),`
`]}),`
`,e.jsx(n.h2,{id:"usage",children:"Usage"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Modals"})," are used in different cases:"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"alerting users about something that requires their agreement"}),`
`,e.jsx(n.li,{children:"confirming a user decision"}),`
`,e.jsx(n.li,{children:"notifying the user of an important information"}),`
`]}),`
`,e.jsxs(n.p,{children:["There are five different subtypes of ",e.jsx(n.strong,{children:"Modals"})," to inform users that a problem requires immediate response from them so the process can continue, depending on the usage:"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Neutral"}),": reserved for standard alerting"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Information"}),": provides information to users in context"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Success"}),": reserved to provide a static persistent success information"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Warning"}),": reserved for ",e.jsx(n.strong,{children:"Modals"})," that need the user attention and acknowledgment but might not cause errors"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Critical"}),": reserved for errors, malfunctions, as well as critical issues"]}),`
`]}),`
`,e.jsx(n.p,{children:"They can be dismissable or not."}),`
`,e.jsx(n.h3,{id:"dos--donts",children:"Dos & Don'ts"}),`
`,e.jsx(o,{children:`
| ✅ Do                                                                                                                                                                           |
|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| - Use a **Modal** to display information the user needs to respond to                                                                                                          |
| - Use a **Modal** to ask a confirmation from the user before proceeding                                                                                                        |
| - Use **Modals** sparingly since they are disruptive and stop users in their current task                                                                                      |
| - Handle closing the **Modal** when the cancel action [**Button**](?path=/docs/ods-components-button--documentation) is clicked                                        |
| - Use scrolling only when it is absolutely needed                                                                                                                              |
`}),`
`,e.jsx(o,{children:`
| ❌ Don't                                                                                                                                                                             |
|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------    |
| - Trigger a **Modal** as a result of a first **Modal** actions                                                                                                                      |
| - Use a **Modal** if the informational content is very long within a **Modal**: consider alternatives if that is your case                                                          |
| - Use a **Modal** only to notify users about a successful completion of their actions: use [**Message**](?path=/docs/ods-components-message--documentation) component |
`}),`
`,e.jsx(n.h2,{id:"placement",children:"Placement"}),`
`,e.jsxs(n.p,{children:["When a ",e.jsx(n.strong,{children:"Modal"})," opening is triggered, it is displayed with a position aligned both horizontally and vertically within the viewport."]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Modal"})," takes up 100% of the viewport width up to a maximum width of 512px."]}),`
`,e.jsx(n.h2,{id:"behavior",children:"Behavior"}),`
`,e.jsx(n.h3,{id:"overlay",children:"Overlay"}),`
`,e.jsxs(n.p,{children:["A background overlay with opacity is displayed on the page to avoid distraction and help users to focus on the ",e.jsx(n.strong,{children:"Modal"})," content."]}),`
`,e.jsxs(n.p,{children:["When the ",e.jsx(n.strong,{children:"Modal"})," opens, an event is triggered."]}),`
`,e.jsx(n.p,{children:"An animation with the ease-in and out effect applies on opening."}),`
`,e.jsx(n.h3,{id:"closing",children:"Closing"}),`
`,e.jsxs(n.p,{children:["A ",e.jsx(n.strong,{children:"Modal"})," is dismissed by clicking on the close icon button."]}),`
`,e.jsxs(n.p,{children:["Dismissing a ",e.jsx(n.strong,{children:"Modal"})," means that it will be closed without submitting any data and the user won't proceed further."]}),`
`,e.jsxs(n.p,{children:["A ",e.jsx(n.strong,{children:"Modal"})," will be successfully closed only once the required action or response has been completed by the user, meaning that the task is completed so the user will proceed further."]}),`
`,e.jsxs(n.p,{children:["Closing the ",e.jsx(n.strong,{children:"Modal"})," triggers an event and an animation."]}),`
`,e.jsxs(n.p,{children:["The hidden overflow behaviour is removed whenever the ",e.jsx(n.strong,{children:"Modal"})," get closed."]}),`
`,e.jsx(n.h3,{id:"scrolling",children:"Scrolling"}),`
`,e.jsxs(n.p,{children:["When necessary, depending on the viewport height and the ",e.jsx(n.strong,{children:"Modal"})," content, the user can scroll vertically with the header and the action ",e.jsx(n.a,{href:"?path=/docs/ods-components-button--documentation",children:e.jsx(n.strong,{children:"Button"})}),") remaining in place."]}),`
`,e.jsx(n.h2,{id:"variation",children:"Variation"}),`
`,e.jsx(n.h3,{id:"color",children:"Color"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Neutral"}),": providing general information or updates without implying any particular urgency or emotion."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Success"}),": indicating that an action has been successfully completed, offering positive reinforcement to the user."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Warning"}),": alerting users to potential issues or risks, encouraging caution and preventive measures."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Critical"}),": highlighting urgent and severe issues that require immediate attention and action to prevent significant negative outcomes."]}),`
`]}),`
`,e.jsx(n.h2,{id:"accessibility",children:"Accessibility"}),`
`,e.jsxs(n.p,{children:["When displayed, the user is directly focused on the ",e.jsx(n.strong,{children:"Modal"})," itself."]}),`
`,e.jsxs(n.p,{children:["When ",e.jsx(n.strong,{children:"Modal"})," is opened :"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"Escape"})," key will dismiss it (if dismissible)"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"Tabulation"})," allows to move forward, first to the closing icon, then through any focusable element in the ",e.jsx(n.strong,{children:"Modal"})," (e.g. action ",e.jsx(n.a,{href:"?path=/docs/ods-components-button--documentation",children:e.jsx(n.strong,{children:"Button"})}),"))"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"Shift + Tab"})," allows the opposite way to move backward in focusing items"]}),`
`]}),`
`,e.jsxs(n.p,{children:["Focus is trapped inside the ",e.jsx(n.strong,{children:"Modal"})," scope and inner elements when active."]})]})}function O(s={}){const{wrapper:n}={...l(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(d,{...s})}):d(s)}export{O as default};
