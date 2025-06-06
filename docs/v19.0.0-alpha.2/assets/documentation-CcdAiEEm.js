import{j as e}from"./jsx-runtime-VM66peLj.js";import{useMDXComponents as c}from"./index-DQB45XCM.js";import{M as d,C as h}from"./index-BlaLg9GY.js";import{M as a,O as m}from"./message.stories-Bw9IhXoh.js";import{B as g}from"./Banner-CANn_RZm.js";import{I as u,A as x,B as p}from"./IdentityCard-DkdK44g3.js";import{H as s}from"./Heading-6Mfikk-c.js";import{S as i,a as o,O as r}from"./StorybookLink-Dek5KO7Z.js";import"./index-D_CmzhJ4.js";import"./iframe-CGgj-FAD.js";import"./index-ChzAxGiP.js";import"./index-CucsY3YN.js";import"./index-CXQShRbs.js";import"./index-DrFu-skq.js";import"./index-CkQHsVsO.js";import"./Button-BRERPjFq.js";import"./Spinner-CcwadLZv.js";import"./icon-name-jL3axqAU.js";import"./controls-BtiQQn1l.js";import"./ExternalLink-lH7YZu4p.js";import"./ods-react49-9IXPzWp7.js";import"./index-2w0W-O47-BJ19ihbZ.js";import"./Link-Ck4D7Gly-DoENOEBg.js";function l(t){const n={code:"code",em:"em",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...c(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(d,{of:a,name:"Documentation"}),`
`,e.jsx(g,{of:a}),`
`,e.jsx(n.p,{children:e.jsxs(n.em,{children:[e.jsx(n.strong,{children:"Message"})," component helps to communicate with users providing feedback or information."]})}),`
`,e.jsx(h,{of:m,sourceState:"none"}),`
`,e.jsx(s,{label:"Overview",level:2}),`
`,e.jsxs(u,{aliases:["Notifier","Notification","Banner","Alert","Feedback"],atomicType:x.molecule,figmaLink:"https://www.figma.com/design/9jDDTcR4a9jPRFcdjawAlf/ODS---UI-Kit?node-id=44-8300",githubUrl:"https://github.com/ovh/design-system/tree/master/packages/ods/src/components/message",name:"Message",relatedComponents:[{name:"Button"},{name:"Icon"},{name:"Text"}],children:[e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Message"})," component communicates information to the user."]}),e.jsx(n.p,{children:"It grabs the user's attention in a prominent way."})]}),`
`,e.jsx(s,{label:"Anatomy",level:2}),`
`,e.jsx(n.p,{children:e.jsx(n.img,{src:"components/message/anatomy.png",alt:"Component anatomy",title:"Component anatomy"})}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(i,{kind:r.icon,story:o.documentation,children:"Icon"})," to inform users about what kind of message it is (optional)"]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(i,{kind:r.text,story:o.documentation,children:"Text"}),", which can be a plain text or contain a link"]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:["A ",e.jsx(n.code,{children:"cross"})," icon ",e.jsx(i,{kind:r.button,story:o.documentation,children:"Button"}),", which is a close button to dismiss the ",e.jsx(n.strong,{children:"Message"})," (optional)"]}),`
`]}),`
`]}),`
`,e.jsx(s,{label:"Usage",level:2}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Messages"})," are used as notification status."]}),`
`,e.jsxs(n.p,{children:["There are four different subtypes of standard ",e.jsx(n.strong,{children:"Messages"}),", in order of priority:"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Information"}),": Provides info to users in context. Shouldn’t be overused to replace regular content."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Success"}),": Reserved to provide to a success message. They are displayed as a snackbar."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Warning"}),": Reserved for ",e.jsx(n.strong,{children:"Messages"})," that need the user attention and acknowledgment but might not cause errors."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Critical"}),": Reserved for errors, malfunctions, as well as critical issues. Inform the user that a problem requires immediate intervention or correction before the process continues."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Danger"}),": Reserved for alerts to an urgent and potentially hazardous situation that necessitates immediate action to prevent harm or serious consequences."]}),`
`]}),`
`,e.jsx(s,{label:"Dos & Don'ts",level:3}),`
`,e.jsx(p,{donts:["- Use too long Messages that may affect its readability","- Use a Message for highlighting content: use a Tile instead"],dos:["- Use the affirmative form","- Make Messages content informative, brief, clear, consistent and non-critical","- Messages must be displayed in the user language","- Position a Message wherever it is visible for the user","- Use a Message when an immediate action is required by the user","- Use non dismissible Message for mandatory warnings that need to be resolved"]}),`
`,e.jsx(s,{label:"Placement",level:2}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Messages"})," show up during a task to notify users of the status of an action. In every page, it is possible to display one or more ",e.jsx(n.strong,{children:"Messages"})," to inform the user."]}),`
`,e.jsx(n.p,{children:"They are positioned near their related items or right after the header and before the page title and page content."}),`
`,e.jsx(s,{label:"Behavior",level:2}),`
`,e.jsx(n.p,{children:"Based on its informational manner, the component default behavior is being read-only. You can only select its content if needed."}),`
`,e.jsxs(n.p,{children:["When a ",e.jsx(n.strong,{children:"Message"})," is dismissible, a click on the ",e.jsx(n.code,{children:"close"})," icon ",e.jsx(i,{kind:r.button,story:o.documentation,children:"Button"})," will dismiss the ",e.jsx(n.strong,{children:"Message"}),"."]}),`
`,e.jsx(s,{label:"Variation",level:2}),`
`,e.jsx(s,{label:"Color",level:3}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Information"})," ",e.jsx(n.em,{children:"(default)"}),": informing users of specific content, providing global feedback to the user."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Success"}),": confirming that an action has been completed successfully, providing positive feedback to the user."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Warning"}),": alerting users to potential issues or cautionary information, prompting them to take preventive actions."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Danger"}),": indicating serious issues or errors that require immediate attention, signaling a high level of urgency."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Critical"}),": highlighting severe and potentially catastrophic issues that demand urgent and decisive action to prevent significant negative consequences."]}),`
`]}),`
`,e.jsx(s,{label:"Variant",level:3}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Default"}),": conveying mild to important information, ensuring the message is seen by the user."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Light"}),": conveying non-urgent, informational content in a subtle and less prominent manner, ensuring the message is seen without drawing too much attention."]}),`
`]}),`
`,e.jsx(s,{label:"Accessibility",level:2}),`
`,e.jsxs(n.p,{children:["When a ",e.jsx(n.strong,{children:"Message"})," appears, user is alerted of its presence, regardless of the user's navigation."]}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"close"})," icon ",e.jsx(i,{kind:r.button,story:o.documentation,children:"Button"})," is focusable and can be triggered with the ",e.jsx(n.code,{children:"Enter"}),"/",e.jsx(n.code,{children:"Space"})," key."]})]})}function N(t={}){const{wrapper:n}={...c(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(l,{...t})}):l(t)}export{N as default};
