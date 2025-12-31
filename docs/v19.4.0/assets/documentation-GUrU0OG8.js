import{j as e}from"./jsx-runtime-Cfl8ynUo.js";import{useMDXComponents as d}from"./index-ZwkxtaJJ.js";import{a as o,l}from"./ods-react64-C395g5lW.js";import{k as i}from"./Kbd-BhRHY5DX-DYqBejDt.js";import{M as m}from"./index-BsyKfokc.js";import{M as a,O as g,A as p,a as u,b as x}from"./message.stories-CBr3hlVk.js";import{A as j}from"./Anatomy-DkXJCwiR.js";import{B as f}from"./Banner-Dk3Varrq.js";import{I as v,B as b}from"./IdentityCard-nmm3PcaS.js";import{C as r}from"./Canvas-DRy1Z7es.js";import{E as c}from"./ExternalLink-C9tV86xX.js";import{H as n}from"./Heading-Wb_br1IW.js";import"./index-jIWwRBLr.js";import"./index-CWkFp9WS-BSIT86NH.js";import"./iframe-B_YeBgB7.js";import"./index-DWDEzXrj.js";import"./index-N93khynk.js";import"./index-CXQShRbs.js";import"./index-DrFu-skq.js";import"./Button-B-GJ-1TA.js";import"./index-CqY9YpN0.js";import"./Spinner-DJB5ZadI.js";import"./colors-DSObuHxd.js";import"./icon-name-BpdEc4-2.js";import"./MessageIcon-Cv9gt_Zv.js";import"./useI18n-C0NLVYPv.js";import"./controls-BtiQQn1l.js";import"./source-CPEZJ6oD.js";import"./Table-DVdtSe4m-Co7uf3pc.js";import"./Table-Bq5w2nKq.js";import"./TooltipTrigger-_KsR7_3f-BTMkItof.js";import"./ods-react114-5kwUyuQy.js";import"./index-DZ9YAGlW.js";import"./lz-string-U2heoObX.js";import"./meta-DxXVpXmq.js";import"./ResetTheme-BVzaMHe3.js";import"./tokens-VHDJ0kGa.js";import"./Link-BhqYqKFa-BDwROQOD.js";import"./Divider-DmVNyNnn-DCNXheUh.js";function h(t){const s={code:"code",em:"em",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...d(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(m,{of:a,name:"Documentation"}),`
`,e.jsx(f,{of:a}),`
`,e.jsx(s.p,{children:e.jsxs(s.em,{children:[e.jsx(s.strong,{children:"Message"})," component helps to communicate with users providing feedback or information."]})}),`
`,e.jsx(r,{of:g,sourceState:"none"}),`
`,e.jsx(n,{label:"Overview",level:2}),`
`,e.jsxs(v,{aliases:["Notifier","Notification","Banner","Alert","Feedback"],figmaLink:"https://www.figma.com/design/9jDDTcR4a9jPRFcdjawAlf/ODS---UI-Kit?node-id=44-8300",githubUrl:"https://github.com/ovh/design-system/tree/master/packages/ods-react/src/components/message",name:"Message",children:[e.jsxs(s.p,{children:[e.jsx(s.strong,{children:"Message"})," component communicates information to the user."]}),e.jsx(s.p,{children:"It grabs the user's attention in a prominent way."})]}),`
`,e.jsx(n,{label:"Usage",level:2}),`
`,e.jsxs(s.p,{children:[e.jsx(s.strong,{children:"Messages"})," are used as notification status."]}),`
`,e.jsxs(s.p,{children:["There are four different subtypes of standard ",e.jsx(s.strong,{children:"Messages"}),", in order of priority:"]}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Information"}),": Provides info to users in context. Shouldn't be overused to replace regular content."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Success"}),": Reserved to provide to a success message. They are displayed as a snackbar."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Warning"}),": Reserved for ",e.jsx(s.strong,{children:"Messages"})," that need the user attention and acknowledgment but might not cause errors."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Critical"}),": Reserved for errors, malfunctions, as well as critical issues. Inform the user that a problem requires immediate intervention or correction before the process continues."]}),`
`]}),`
`,e.jsx(n,{label:"Message vs Toast",level:3}),`
`,e.jsx(s.p,{children:e.jsx(s.strong,{children:"Message"})}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsx(s.li,{children:"Persistent or semi-persistent information banner."}),`
`,e.jsx(s.li,{children:"Usually appears inline or at the top of a page as part of the content flow."}),`
`,e.jsx(s.li,{children:"Designed for status communication (success, warning, critical error, info) that’s tied to a specific screen or context."}),`
`,e.jsx(s.li,{children:"Remains visible until dismissed or until the state changes."}),`
`]}),`
`,e.jsx(s.p,{children:e.jsx(s.strong,{children:"Toast"})}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsx(s.li,{children:"Ephemeral notification that appears for a short time (usually overlay in a corner of the viewport)"}),`
`,e.jsx(s.li,{children:'Designed for lightweight, transient feedback ("Action succeeded", "File uploaded"), except for toast with actions.'}),`
`,e.jsx(s.li,{children:"Auto-dismisses after a few seconds."}),`
`]}),`
`,e.jsx(n,{label:"Dos & Don'ts",level:3}),`
`,e.jsx(b,{donts:["- Don't use Message to highlight static or decorative content, prefer components like Card for that","- Don't write overly long or complex Message that could overwhelm or confuse users","- Don't rely solely on color to convey meaning, always keep the Icon for clarity","- Don't use vague or generic text, always provide helpful context or guidance","- Don't overload the interface with multiple simultaneous Messages unless absolutely necessary"],dos:["- Write Message in a clear, concise, and affirmative tone that aligns with the user's task","- Place Message in a visible and relevant area of the page, ideally close to the triggering element if any or top of the section","- Use the correct variant (e.g., information, success, warning, error) to match the context and urgency","- Use non-dismissible Message for critical warnings or errors that require immediate resolution","- Allow content selection (e.g., to copy error messages)"]}),`
`,e.jsx(n,{label:"Best Practices in Context",level:3}),`
`,e.jsx(j,{src:"components/message/anatomy.png"}),`
`,e.jsxs(s.ol,{children:[`
`,e.jsx(s.li,{children:e.jsx(s.strong,{children:"Message"})}),`
`,e.jsx(s.li,{children:e.jsx(s.strong,{children:"Icon"})}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Close button"})," - optional"]}),`
`,e.jsx(s.li,{children:e.jsx(s.strong,{children:"Content"})}),`
`]}),`
`,e.jsx(n,{label:"Placement",level:2}),`
`,e.jsxs(s.p,{children:[e.jsx(s.strong,{children:"Messages"})," show up during a task to notify users of the status of an action. In every page, it is possible to display one or more ",e.jsx(s.strong,{children:"Messages"})," to inform the user."]}),`
`,e.jsx(s.p,{children:"They are positioned near their related items or right after the header and before the page title and page content."}),`
`,e.jsx(n,{label:"Behavior",level:2}),`
`,e.jsx(s.p,{children:"Based on its informational manner, the component default behavior is being read-only. You can only select its content if needed."}),`
`,e.jsxs(s.p,{children:["When a ",e.jsx(s.strong,{children:"Message"})," is dismissible, a click on the ",e.jsx(s.code,{children:"xmark"})," icon button will dismiss the ",e.jsx(s.strong,{children:"Message"}),"."]}),`
`,e.jsx(n,{label:"Variation",level:2}),`
`,e.jsx(n,{label:"Color",level:3}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Information"})," ",e.jsx(s.em,{children:"(default)"}),": informing users of specific content, providing global feedback to the user."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Success"}),": confirming that an action has been completed successfully, providing positive feedback to the user."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Warning"}),": alerting users to potential issues or cautionary information, prompting them to take preventive actions."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Critical"}),": highlighting severe and potentially catastrophic issues that demand urgent and decisive action to prevent significant negative consequences."]}),`
`]}),`
`,e.jsx(n,{label:"Variant",level:3}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Default"}),": conveying mild to important information, ensuring the message is seen by the user."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Light"}),": conveying non-urgent, informational content in a subtle and less prominent manner, ensuring the message is seen without drawing too much attention."]}),`
`]}),`
`,e.jsx(n,{label:"Navigation",level:2}),`
`,e.jsx(n,{label:"Focus Management",level:3}),`
`,e.jsxs(s.p,{children:["The ",e.jsx(s.strong,{children:"Message"})," component itself is non-interactive and does not receive keyboard focus."]}),`
`,e.jsxs(s.p,{children:["If the ",e.jsx(s.strong,{children:"Message"})," is dismissible, the close icon button is focusable."]}),`
`,e.jsx(n,{label:"General Keyboard Shortcuts",level:3}),`
`,e.jsxs(s.p,{children:["Pressing ",e.jsx(i,{children:"Tab"})," moves focus to the close icon button (if available)."]}),`
`,e.jsxs(s.p,{children:["Pressing ",e.jsx(i,{children:"Enter"})," or ",e.jsx(i,{children:"Space"})," while the close icon button is focused should trigger the action to dismiss the ",e.jsx(s.strong,{children:"Message"}),"."]}),`
`,e.jsxs(s.p,{children:["Pressing ",e.jsx(i,{children:"Shift"})," + ",e.jsx(i,{children:"Tab"})," moves focus to the previous interactive element."]}),`
`,e.jsx(n,{label:"Accessibility",level:2}),`
`,e.jsx(n,{label:"Structuring multiple Messages",level:3}),`
`,e.jsxs(s.p,{children:["When displaying multiple ",e.jsx(s.strong,{children:"Messages"})," together, they should be wrapped within an unordered list of items (",e.jsx(s.code,{children:"<ul>"})," and ",e.jsx(s.code,{children:"<li>"}),") to ensure a proper announcement by screen readers."]}),`
`,e.jsx(r,{of:p,sourceState:"shown"}),`
`,e.jsxs(s.p,{children:[e.jsx(o,{name:l.circleCheck,style:{color:"var(--ods-color-success-500)"}})," This structure ensures that assistive technologies announce ",e.jsx(s.strong,{children:"Messages"})," as a list, rather than reading them as separate, unrelated announcements."]}),`
`,e.jsxs(s.p,{children:["Screen readers will announce the list, the number of items and the ",e.jsx(s.strong,{children:"Messages"})," content."]}),`
`,e.jsx(n,{label:"Alternative approach with ARIA roles",level:3}),`
`,e.jsxs(s.p,{children:["When modifying the HTML structure is not possible, use ",e.jsx(c,{href:"https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Reference/Roles/list_role",children:'role="list"'})," and ",e.jsx(c,{href:"https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Reference/Roles/listitem_role",children:'role="listitem"'})," to mimic list semantics."]}),`
`,e.jsx(r,{of:u,sourceState:"shown"}),`
`,e.jsx(n,{label:"Setting the container ARIA role",level:3}),`
`,e.jsxs(s.p,{children:["When adding a new ",e.jsx(s.strong,{children:"Message"})," element, its container should have a ",e.jsx(s.code,{children:"role"}),` attribute set, so that assistive
technologies can announce the content correctly.`]}),`
`,e.jsxs(s.p,{children:["If you're adding a critical ",e.jsx(s.strong,{children:"Message"}),", use ",e.jsx(s.code,{children:'role="alert"'}),`.
For non-critical `,e.jsx(s.strong,{children:"Messages"})," (e.g., info, success, warning), use ",e.jsx(s.code,{children:'role="status"'}),"."]}),`
`,e.jsx(r,{of:x,sourceState:"shown"}),`
`,e.jsxs(s.p,{children:[e.jsx(o,{name:l.circleCheck,style:{color:"var(--ods-color-success-500)"}})," This ensures that screen readers announce the ",e.jsx(s.strong,{children:"Message"})," at the appropriate time without interrupting."]})]})}function oe(t={}){const{wrapper:s}={...d(),...t.components};return s?e.jsx(s,{...t,children:e.jsx(h,{...t})}):h(t)}export{oe as default};
