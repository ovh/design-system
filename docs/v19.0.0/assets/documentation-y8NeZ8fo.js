import{j as e}from"./jsx-runtime-VM66peLj.js";import{useMDXComponents as r}from"./index-DQB45XCM.js";import{M as a,C as l}from"./index-CTRIvuAa.js";import{M as i,O as c}from"./message.stories-CZwYyY5_.js";import{B as d}from"./Banner-DKEGGZmZ.js";import{I as h,A as g,B as m}from"./IdentityCard-DMALWF_P.js";import{H as s}from"./Heading-BKRI_kjA.js";import"./StorybookLink-DMr2bWgk.js";import"./index-D_CmzhJ4.js";import"./iframe-B1k00A9N.js";import"./index-ChzAxGiP.js";import"./index-CucsY3YN.js";import"./index-CXQShRbs.js";import"./index-DrFu-skq.js";import"./icon-name-BOrBmUKT.js";import"./index-CkQHsVsO.js";import"./Button-CbWLwkmI.js";import"./Spinner-BC3A9yP9.js";import"./colors-DSObuHxd.js";import"./controls-BtiQQn1l.js";import"./ExternalLink-DJ00RbPw.js";import"./ods-react60-Yebt9vXY.js";import"./index-2w0W-O47-BJ19ihbZ.js";import"./Link-D8k51sak-CbRDKo-E.js";import"./ods-react214-B9lkGKUh.js";function o(t){const n={code:"code",em:"em",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...r(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{of:i,name:"Documentation"}),`
`,e.jsx(d,{of:i}),`
`,e.jsx(n.p,{children:e.jsxs(n.em,{children:[e.jsx(n.strong,{children:"Message"})," component helps to communicate with users providing feedback or information."]})}),`
`,e.jsx(l,{of:c,sourceState:"none"}),`
`,e.jsx(s,{label:"Overview",level:2}),`
`,e.jsxs(h,{aliases:["Notifier","Notification","Banner","Alert","Feedback"],atomicType:g.molecule,figmaLink:"https://www.figma.com/design/9jDDTcR4a9jPRFcdjawAlf/ODS---UI-Kit?node-id=44-8300",githubUrl:"https://github.com/ovh/design-system/tree/master/packages/ods/src/components/message",name:"Message",children:[e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Message"})," component communicates information to the user."]}),e.jsx(n.p,{children:"It grabs the user's attention in a prominent way."})]}),`
`,e.jsx(s,{label:"Usage",level:2}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Messages"})," are used as notification status."]}),`
`,e.jsxs(n.p,{children:["There are four different subtypes of standard ",e.jsx(n.strong,{children:"Messages"}),", in order of priority:"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Information"}),": Provides info to users in context. Shouldn't be overused to replace regular content."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Success"}),": Reserved to provide to a success message. They are displayed as a snackbar."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Warning"}),": Reserved for ",e.jsx(n.strong,{children:"Messages"})," that need the user attention and acknowledgment but might not cause errors."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Critical"}),": Reserved for errors, malfunctions, as well as critical issues. Inform the user that a problem requires immediate intervention or correction before the process continues."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Danger"}),": Reserved for alerts to an urgent and potentially hazardous situation that necessitates immediate action to prevent harm or serious consequences."]}),`
`]}),`
`,e.jsx(s,{label:"Dos & Don'ts",level:3}),`
`,e.jsx(m,{donts:["- Don't use Message to highlight static or decorative content, prefer components like Card for that","- Don't write overly long or complex Message that could overwhelm or confuse users","- Don't rely solely on color to convey meaning, always keep the Icon for clarity","- Don't use vague or generic text, always provide helpful context or guidance","- Don't overload the interface with multiple simultaneous Messages unless absolutely necessary"],dos:["- Write Message in a clear, concise, and affirmative tone that aligns with the user's task","- Place Message in a visible and relevant area of the page, ideally close to the triggering element if any or top of the section","- Use the correct variant (e.g., information, success, warning, error) to match the context and urgency","- Use non-dismissible Message for critical warnings or errors that require immediate resolution","- Allow content selection (e.g., to copy error messages)"]}),`
`,e.jsx(s,{label:"Best Practices in Context",level:3}),`
`,e.jsx(n.p,{children:e.jsx(n.img,{src:"components/message/anatomy.png",alt:"Component anatomy",title:"Component anatomy"})}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.strong,{children:"Message"})}),`
`,e.jsx(n.li,{children:e.jsx(n.strong,{children:"Icon"})}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Close button"})," - optional"]}),`
`,e.jsx(n.li,{children:e.jsx(n.strong,{children:"Content"})}),`
`]}),`
`,e.jsx(s,{label:"Placement",level:2}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Messages"})," show up during a task to notify users of the status of an action. In every page, it is possible to display one or more ",e.jsx(n.strong,{children:"Messages"})," to inform the user."]}),`
`,e.jsx(n.p,{children:"They are positioned near their related items or right after the header and before the page title and page content."}),`
`,e.jsx(s,{label:"Behavior",level:2}),`
`,e.jsx(n.p,{children:"Based on its informational manner, the component default behavior is being read-only. You can only select its content if needed."}),`
`,e.jsxs(n.p,{children:["When a ",e.jsx(n.strong,{children:"Message"})," is dismissible, a click on the ",e.jsx(n.code,{children:"xmark"})," icon button will dismiss the ",e.jsx(n.strong,{children:"Message"}),"."]}),`
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
`,e.jsx(s,{label:"Navigation",level:2}),`
`,e.jsx(s,{label:"Focus Management",level:3}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.strong,{children:"Message"})," component itself is non-interactive and does not receive keyboard focus."]}),`
`,e.jsxs(n.p,{children:["If the ",e.jsx(n.strong,{children:"Message"})," is dismissible, the close icon button is focusable."]}),`
`,e.jsx(s,{label:"General Keyboard Shortcuts",level:3}),`
`,e.jsxs(n.p,{children:["Pressing ",e.jsx(n.code,{children:"Tab"})," moves focus to the close icon button (if available)."]}),`
`,e.jsxs(n.p,{children:["Pressing ",e.jsx(n.code,{children:"Enter"}),"or ",e.jsx(n.code,{children:"Space"})," while the close icon button is focused should trigger the action to dismiss the ",e.jsx(n.strong,{children:"Message"}),"."]}),`
`,e.jsxs(n.p,{children:["Pressing ",e.jsx(n.code,{children:"Shift"})," + ",e.jsx(n.code,{children:"Tab"})," moves focus to the previous interactive element."]})]})}function E(t={}){const{wrapper:n}={...r(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(o,{...t})}):o(t)}export{E as default};
