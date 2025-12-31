import{j as e}from"./jsx-runtime-Cfl8ynUo.js";import{useMDXComponents as r}from"./index-ZwkxtaJJ.js";import{M as a}from"./index-BsyKfokc.js";import{T as i,O as l}from"./toaster.stories-De7jrnRl.js";import{A as c}from"./Anatomy-DkXJCwiR.js";import{B as d}from"./Banner-Dk3Varrq.js";import{C as h}from"./Canvas-DRy1Z7es.js";import{I as m,B as p}from"./IdentityCard-nmm3PcaS.js";import{H as t}from"./Heading-Wb_br1IW.js";import"./index-jIWwRBLr.js";import"./iframe-B_YeBgB7.js";import"./index-DWDEzXrj.js";import"./index-N93khynk.js";import"./index-CXQShRbs.js";import"./index-DrFu-skq.js";import"./Button-B-GJ-1TA.js";import"./index-CqY9YpN0.js";import"./Spinner-DJB5ZadI.js";import"./colors-DSObuHxd.js";import"./icon-name-BpdEc4-2.js";import"./Link-C-y4OBrb.js";import"./element-3R7vFkDE.js";import"./Text-CW33_IfE.js";import"./overlay-CZHjGBMC.js";import"./context-C_-r2uoG.js";import"./MessageIcon-Cv9gt_Zv.js";import"./useI18n-C0NLVYPv.js";import"./controls-BtiQQn1l.js";import"./source-CPEZJ6oD.js";import"./ods-react64-C395g5lW.js";import"./index-CWkFp9WS-BSIT86NH.js";import"./TooltipTrigger-_KsR7_3f-BTMkItof.js";import"./ods-react114-5kwUyuQy.js";import"./index-DZ9YAGlW.js";import"./lz-string-U2heoObX.js";import"./meta-DxXVpXmq.js";import"./ResetTheme-BVzaMHe3.js";import"./tokens-VHDJ0kGa.js";import"./Table-DVdtSe4m-Co7uf3pc.js";import"./ExternalLink-C9tV86xX.js";import"./Link-BhqYqKFa-BDwROQOD.js";import"./Table-Bq5w2nKq.js";import"./Divider-DmVNyNnn-DCNXheUh.js";function o(n){const s={em:"em",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...r(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{of:i,name:"Documentation"}),`
`,e.jsx(d,{of:i}),`
`,e.jsx(s.p,{children:e.jsxs(s.em,{children:[e.jsx(s.strong,{children:"Toaster"})," component provides a section on the page where you'll be able to display ",e.jsx(s.strong,{children:"Toast"})," to notify the user."]})}),`
`,e.jsx(h,{of:l,sourceState:"none"}),`
`,e.jsx(t,{label:"Overview",level:2}),`
`,e.jsx(m,{aliases:["Notification","Toast"],figmaLink:"https://www.figma.com/design/9jDDTcR4a9jPRFcdjawAlf/branch/9bnlxD8FSlsM1AkmxZbNLG/ODS---UI-Kit?node-id=11140-2948&p=f&t=Rrmj84Hj95VYn82V-0",githubUrl:"https://github.com/ovh/design-system/tree/master/packages/ods-react/src/components/toaster",name:"Toaster",startingVersion:19,children:e.jsxs(s.p,{children:["A ",e.jsx(s.strong,{children:"Toast"})," is a non-blocking notification used to communicate brief messages to the user."]})}),`
`,e.jsx(t,{label:"Usage",level:2}),`
`,e.jsxs(s.p,{children:["The ",e.jsx(s.strong,{children:"Toast"})," is used for short-lived messages that do not demand immediate user action. They are commonly used for:"]}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsx(s.li,{children:'confirmations (e.g., "Changes saved").'}),`
`,e.jsx(s.li,{children:'warnings or errors (e.g., "Connection lost").'}),`
`,e.jsx(s.li,{children:'informational updates (e.g., "New message received").'}),`
`]}),`
`,e.jsx(t,{label:"Message vs Toast",level:3}),`
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
`,e.jsx(t,{label:"Dos & Don'ts",level:3}),`
`,e.jsx(p,{donts:["- Use Toasts for critical alerts that require immediate user attention. Use Modal instead","- Overuse Toasts for every user action","- Allow Toasts to hide critical UI elements","- Display long content or actions that require extended attention in a Toast"],dos:["- Use a Toast to inform users of non-critical system events or confirmations","- Keep messages short and clear","- Queue multiple Toasts when triggered in quick succession"]}),`
`,e.jsx(t,{label:"Best Practices in Context",level:3}),`
`,e.jsx(c,{src:"components/toaster/anatomy.png"}),`
`,e.jsxs(s.ol,{children:[`
`,e.jsx(s.li,{children:e.jsx(s.strong,{children:"Toast"})}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Icon"})," - optional"]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Close button"})," - optional"]}),`
`,e.jsx(s.li,{children:e.jsx(s.strong,{children:"Content"})}),`
`]}),`
`,e.jsx(t,{label:"Placement",level:2}),`
`,e.jsxs(s.p,{children:[e.jsx(s.strong,{children:"Toasts"})," are typically positioned at one of the corners of the viewport (default is top-end), but the placement is configurable to match the application's UX needs."]}),`
`,e.jsx(t,{label:"Behavior",level:2}),`
`,e.jsx(t,{label:"Auto-dismiss",level:3}),`
`,e.jsxs(s.p,{children:["By default, a ",e.jsx(s.strong,{children:"Toast"}),"* is ephemeral and disappears automatically after a predefined duration (default is 3 seconds)."]}),`
`,e.jsxs(s.p,{children:["The auto-dismiss timer is paused when the user hovers over the ",e.jsx(s.strong,{children:"Toast"}),", and resumes once the hover ends."]}),`
`,e.jsxs(s.p,{children:["The ",e.jsx(s.strong,{children:"Toast"})," may include a close button, allowing the user to dismiss it before the timer expires."]}),`
`,e.jsx(t,{label:"Persistent Toast",level:3}),`
`,e.jsxs(s.p,{children:[e.jsx(s.strong,{children:"Toasts"})," can be configured to remain visible until the user dismisses them or completes the associated action."]}),`
`,e.jsx(s.p,{children:"In this case, a close button is always required."}),`
`,e.jsx(t,{label:"Manual dismiss",level:3}),`
`,e.jsx(s.p,{children:"A close button is displayed for manual dismissal."}),`
`,e.jsxs(s.p,{children:["Manual dismiss is compatible with both auto-dismiss and persistent ",e.jsx(s.strong,{children:"Toasts"}),"."]}),`
`,e.jsx(t,{label:"Stacking",level:3}),`
`,e.jsxs(s.p,{children:[e.jsx(s.strong,{children:"Toasts"})," stack within their display area, with a default maximum of 3 visible ",e.jsx(s.strong,{children:"Toasts"}),"."]}),`
`,e.jsxs(s.p,{children:["The stack follows a FIFO (First In, First Out) order, the most recent ",e.jsx(s.strong,{children:"Toast"})," appears first."]}),`
`,e.jsxs(s.p,{children:["When a ",e.jsx(s.strong,{children:"Toast"})," is dismissed (automatically or manually), the remaining ",e.jsx(s.strong,{children:"Toasts"})," shift to fill the gap, preserving their relative order."]}),`
`,e.jsx(s.p,{children:"Stacking direction depends on placement:"}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:["top placements: the newest ",e.jsx(s.strong,{children:"Toast"})," appears at the top of the stack, pushing older ones downward."]}),`
`,e.jsxs(s.li,{children:["bottom placements: the newest ",e.jsx(s.strong,{children:"Toast"})," appears at the bottom of the stack, pushing older ones upward."]}),`
`]}),`
`,e.jsx(t,{label:"Variation",level:2}),`
`,e.jsx(t,{label:"Color",level:3}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Information"})," ",e.jsx(s.em,{children:"(default)"}),": informing users of specific content, providing global feedback to the user."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Success"}),": confirming that an action has been completed successfully, providing positive feedback to the user."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Warning"}),": alerting users to potential issues or cautionary information, prompting them to take preventive actions."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Critical"}),": highlighting severe and potentially catastrophic issues that demand urgent and decisive action to prevent significant negative consequences."]}),`
`]}),`
`,e.jsx(t,{label:"Navigation",level:2}),`
`,e.jsxs(s.p,{children:[e.jsx(s.strong,{children:"Toasts"})," interactive elements can receive keyboard focus."]}),`
`,e.jsxs(s.p,{children:[e.jsx(s.strong,{children:"Toasts"})," do not trap focus nor interfere with the active workflow."]}),`
`,e.jsx(t,{label:"Accessibility",level:2}),`
`,e.jsxs(s.p,{children:["The ",e.jsx(s.strong,{children:"Toaster"})," component handles by itself the accessibility requirements."]})]})}function ne(n={}){const{wrapper:s}={...r(),...n.components};return s?e.jsx(s,{...n,children:e.jsx(o,{...n})}):o(n)}export{ne as default};
