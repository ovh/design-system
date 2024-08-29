import{j as e}from"./jsx-runtime-3v6rTKkY.js";import{u as c}from"./index-B5y3xRNA.js";import{M as d,C as h,d as r}from"./index-sugWq352.js";import{B as l}from"./banner-BU_1gqe2.js";import{M as o,O as m}from"./message.stories-C4df2Dsl.js";import{O as i}from"./index-BjLrujv2.js";import{O as t}from"./index-DB8q6ij-.js";import"./iframe-D98u-D7f.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-B_J8iUie.js";import"./index-DX_4BEHg.js";import"./index-DrFu-skq.js";import"./lit-html-D-ZEPr28.js";import"./unsafe-html-HR6uCwaW.js";import"./control-C1r2wu67.js";import"./ods-toggle2-Du4-LCNk.js";import"./ods-icon-MrkrUMg1.js";function a(s){const n={a:"a",code:"code",em:"em",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...c(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(d,{of:o,name:"Documentation"}),`
`,e.jsx(l,{of:o}),`
`,e.jsx(n.p,{children:e.jsxs(n.em,{children:[e.jsx(n.strong,{children:"Message"})," component helps to communicate with users providing feedback or information."]})}),`
`,e.jsx(h,{of:m,sourceState:"none"}),`
`,e.jsx(n.h2,{id:"overview",children:"Overview"}),`
`,e.jsxs("div",{children:[e.jsxs("div",{id:"description",children:[e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Message"})," component communicates information to the user."]}),e.jsx(n.p,{children:"It grabs the user's attention in a prominent way."})]}),e.jsx("table",{children:e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("th",{scope:"row",children:"Name"}),e.jsx("td",{children:e.jsx("strong",{children:"Message"})})]}),e.jsxs("tr",{children:[e.jsx("th",{scope:"row",children:"Also known as"}),e.jsx("td",{children:e.jsx("em",{children:"Notifier, Notification, Banner, Alert, Feedback"})})]}),e.jsxs("tr",{children:[e.jsx("th",{scope:"row",children:"Atomic type"}),e.jsx("td",{children:e.jsxs("a",{href:"https://atomicdesign.bradfrost.com/chapter-2/#molecules",children:["Molecule",e.jsx(i,{name:t.externalLink,style:{fontSize:".7rem",paddingLeft:".3rem",paddingRight:".2rem"}})]})})]}),e.jsxs("tr",{children:[e.jsx("th",{scope:"row",children:"Related component(s)"}),e.jsx("td",{children:e.jsxs(n.p,{children:[e.jsx(n.a,{href:"?path=/docs/ods-components-icon--documentation",children:e.jsx(n.strong,{children:"Icon"})}),`,
`,e.jsx(n.a,{href:"?path=/docs/ods-components-button--documentation",children:e.jsx(n.strong,{children:"Button"})}),`,
`,e.jsx(n.a,{href:"?path=/docs/ods-components-text--documentation",children:e.jsx(n.strong,{children:"Text"})})]})})]}),e.jsxs("tr",{children:[e.jsx("th",{scope:"row",children:"Links"}),e.jsxs("td",{children:[e.jsxs("a",{href:"https://www.figma.com/proto/tIKzHa5KvHHyosgIgyBswB/Design-Tokens",children:["Design",e.jsx(i,{name:t.externalLink,style:{fontSize:".7rem",paddingLeft:".3rem",paddingRight:".2rem"}})]}),e.jsx("br",{}),e.jsxs("a",{href:"https://github.com/ovh/design-system/tree/master/packages/components/src/message",children:["Github",e.jsx(i,{name:t.externalLink,style:{fontSize:".7rem",paddingLeft:".3rem",paddingRight:".2rem"}})]})]})]})]})})]}),`
`,e.jsx(n.h2,{id:"anatomy",children:"Anatomy"}),`
`,e.jsx(n.p,{children:e.jsx(n.img,{src:"components/message/anatomy.png",alt:"Component anatomy",title:"Component anatomy"})}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.a,{href:"?path=/docs/ods-components-icon--documentation",children:e.jsx(n.strong,{children:"Icon"})})," to inform users about what kind of message it is (optional)"]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.a,{href:"?path=/docs/ods-components-text--documentation",children:e.jsx(n.strong,{children:"Text"})}),", which can be a plain text or contain a link"]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:["A ",e.jsx(n.code,{children:"cross"})," icon ",e.jsx(n.a,{href:"?path=/docs/ods-components-button--documentation",children:e.jsx(n.strong,{children:"Button"})}),", which is a close button to dismiss the ",e.jsx(n.strong,{children:"Message"})]}),`
`]}),`
`]}),`
`,e.jsx(n.h2,{id:"usage",children:"Usage"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Messages"})," are used as notification status."]}),`
`,e.jsxs(n.p,{children:["There are four different subtypes of standard ",e.jsx(n.strong,{children:"Messages"}),", in order of priority:"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Information"}),": Provides info to users in context. Shouldn’t be overused to replace regular content."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Success"}),": Reserved to provide to a success message. They are displayed as a snackbar."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Warning"}),": Reserved for ",e.jsx(n.strong,{children:"Messages"})," that need the user attention and acknowledgment but might not cause errors."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Critical"}),": Reserved for errors, malfunctions, as well as critical issues. Inform the user that a problem requires immediate intervention or correction before the process continues."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Danger"}),": Reserved for alerts to an urgent and potentially hazardous situation that necessitates immediate action to prevent harm or serious consequences."]}),`
`]}),`
`,e.jsx(n.h3,{id:"dos--donts",children:"Dos & Don'ts"}),`
`,e.jsx(r,{children:`
| ✅ Do                                                                                                                                                                           |
|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| -  Use the affirmative form                                                                                                                                                    |
| -  Make **Messages** content informative, brief, clear, consistent and non-critical                                                                                            |
| -  **Messages** must be displayed in the user's language                                                                                                                       |
| -  Position a **Message** wherever it is visible for the user                                                                                                                  |
| -  Use a **Message** when an immediate action is required by the user                                                                                                          |
`}),`
`,e.jsx(r,{children:`
| ❌ Don't                                                                                                                                                                          |
|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| -  Use too long **Messages** that may affect its readability                                                                                                                     |
| -  Use a **Message** for highlighting content: use a Tile instead                                                                                                                |
`}),`
`,e.jsx(n.h2,{id:"placement",children:"Placement"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Messages"})," show up during a task to notify users of the status of an action. In every page, it is possible to display one or more ",e.jsx(n.strong,{children:"Messages"})," to inform the user."]}),`
`,e.jsx(n.p,{children:"They are positioned near their related items or right after the header and before the page title and page content."}),`
`,e.jsx(n.h2,{id:"behavior",children:"Behavior"}),`
`,e.jsx(n.p,{children:"Based on its informational manner, the component default behavior is being read-only. You can only select its content if needed."}),`
`,e.jsxs(n.p,{children:["A click on the ",e.jsx(n.code,{children:"close"})," icon ",e.jsx(n.a,{href:"?path=/docs/ods-components-button--documentation",children:e.jsx(n.strong,{children:"Button"})})," will dismiss the ",e.jsx(n.strong,{children:"Message"}),"."]}),`
`,e.jsx(n.h2,{id:"variation",children:"Variation"}),`
`,e.jsx(n.h3,{id:"color",children:"Color"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Information"})," ",e.jsx(n.em,{children:"(default)"}),": informing users of specific content, providing global feedback to the user."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Success"}),": confirming that an action has been completed successfully, providing positive feedback to the user."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Warning"}),": alerting users to potential issues or cautionary information, prompting them to take preventive actions."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Danger"}),": indicating serious issues or errors that require immediate attention, signaling a high level of urgency."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Critical"}),": highlighting severe and potentially catastrophic issues that demand urgent and decisive action to prevent significant negative consequences."]}),`
`]}),`
`,e.jsx(n.h3,{id:"variant",children:"Variant"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Default"}),": conveying mild to important information, ensuring the message is seen by the user."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Light"}),": conveying non-urgent, informational content in a subtle and less prominent manner, ensuring the message is seen without drawing too much attention."]}),`
`]}),`
`,e.jsx(n.h2,{id:"accessibility",children:"Accessibility"}),`
`,e.jsxs(n.p,{children:["When a ",e.jsx(n.strong,{children:"Message"})," appears, user is alerted of its presence, regardless of the user's navigation."]}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"close"})," icon ",e.jsx(n.a,{href:"?path=/docs/ods-components-button--documentation",children:e.jsx(n.strong,{children:"Button"})})," is focusable and can be triggered with the ",e.jsx(n.code,{children:"Enter"}),"/",e.jsx(n.code,{children:"Space"})," key."]})]})}function R(s={}){const{wrapper:n}={...c(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(a,{...s})}):a(s)}export{R as default};
