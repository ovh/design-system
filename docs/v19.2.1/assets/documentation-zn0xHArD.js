import{j as e}from"./jsx-runtime-Cfl8ynUo.js";import{useMDXComponents as d}from"./index-ZwkxtaJJ.js";import{t as r,l}from"./ods-react60-CRx7zEey.js";import{M as h,C as m}from"./index-8pGbFWRq.js";import{M as a,O as p,A as u,a as x,b as g}from"./modal.stories-ChSezejW.js";import{B as j}from"./Banner-CNp5SML8.js";import{I as f,B as b}from"./IdentityCard-e2WB6ddF.js";import{C as o}from"./Canvas-Df5XpfVk.js";import{E as t}from"./ExternalLink-izdABMGv.js";import{H as s}from"./Heading-hbfjmHNc.js";import"./index-jIWwRBLr.js";import"./index-2w0W-O47-BJ19ihbZ.js";import"./iframe-D7nmkxLr.js";import"./index-DWDEzXrj.js";import"./index-N93khynk.js";import"./index-CXQShRbs.js";import"./index-DrFu-skq.js";import"./Button-Tqe-VRSF.js";import"./index-CqY9YpN0.js";import"./Spinner-DNePmVpu.js";import"./colors-DSObuHxd.js";import"./icon-name-C581wThh.js";import"./dialog-trigger-Ktc66hDn.js";import"./use-locale-context-BIV2aQtl.js";import"./use-presence-BC2E-XtL.js";import"./use-event-c9j7vq_1.js";import"./render-strategy-CGQK92zh.js";import"./portal-QnUqvOWs.js";import"./index-RANsh8_O.js";import"./index-3nFJ2Pi7.js";import"./useI18n-C0NLVYPv.js";import"./SelectControl-TvkHg2JI.js";import"./FormFieldLabel-DW-nAxje.js";import"./Text-vMb3-i8V.js";import"./index-DFyEkYC8.js";import"./index-Bc-ZgdcL.js";import"./use-field-context-xoqKb8Fu.js";import"./TooltipTrigger-CT3e8Irz.js";import"./overlay-CZHjGBMC.js";import"./index-DaqjtwB0.js";import"./controls-BtiQQn1l.js";import"./source-CPEZJ6oD.js";import"./TooltipTrigger-Iu3rt7LP-DQH4Rvrv.js";import"./index-CTDx-6u2.js";import"./lz-string-U2heoObX.js";import"./meta-B7heVWH0.js";import"./Link-BWQEuWpd-DsrdP0qI.js";import"./ods-react236-aAAP9SXj.js";function c(i){const n={code:"code",em:"em",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...d(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(h,{of:a,name:"Documentation"}),`
`,e.jsx(j,{of:a}),`
`,e.jsx(n.p,{children:e.jsxs(n.em,{children:["A ",e.jsx(n.strong,{children:"Modal"})," component is used to overlay with important content the main view of a site and block interactions with it."]})}),`
`,e.jsx(m,{of:p,sourceState:"none"}),`
`,e.jsx(s,{label:"Overview",level:2}),`
`,e.jsxs(f,{aliases:["Dialog","Alert Dialog","Confirm Dialog"],figmaLink:"https://www.figma.com/design/9jDDTcR4a9jPRFcdjawAlf/ODS---UI-Kit?node-id=47-2607",githubUrl:"https://github.com/ovh/design-system/tree/master/packages/ods-react/src/components/modal",name:"Modal",children:[e.jsxs(n.p,{children:["A ",e.jsx(n.strong,{children:"Modal"})," is used to provide some information to users that needs a response or immediate attention."]}),e.jsxs(n.p,{children:["While a ",e.jsx(n.strong,{children:"Modal"}),` is triggered, there is no interaction possible on the page that is overlaid so users have to
dismiss or click on an action Button to proceed further.`]})]}),`
`,e.jsx(s,{label:"Usage",level:2}),`
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
`,e.jsx(s,{label:"Dos & Don'ts",level:3}),`
`,e.jsx(b,{donts:["- Don't use Modals for non-interruptive information, prefer inline content or a Message component for passive feedback","- Don't trigger a second Modal from within another Modal since this leads to confusion and poor accessibility","- Don't use Modals for long-form content like documentation, complex forms, or multiple paragraphs. Consider a dedicated page or Drawer instead","- Don't make a Modal dismissible if the user must take an action to proceed and ensure the intent is clear","- Don't overload the Modal with multiple CTAs (Call-to-Action) or overly complex UI elements"],dos:["- Use a Modal to capture user attention for critical decisions, confirmations, or required input that blocks the current flow","- Ensure the Modal has a clear and focused purpose, with concise messaging and a single main action","- Use Modal color variants (Neutral, Info, Success, Warning, Critical) to match the intent and severity of the message","- Allow the Modal to be dismissed via a cancel button, close icon, or Escape key, unless a decision is mandatory","- Keep Modal content short and scannable. Support scroll only when necessary"]}),`
`,e.jsx(s,{label:"Best Practices in Context",level:3}),`
`,e.jsx(n.p,{children:e.jsx(n.img,{src:"components/modal/anatomy.png",alt:"Component anatomy",title:"Component anatomy"})}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.strong,{children:"Modal"})}),`
`,e.jsx(n.li,{children:e.jsx(n.strong,{children:"Header"})}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Close button"})," - optional"]}),`
`,e.jsx(n.li,{children:e.jsx(n.strong,{children:"Content"})}),`
`,e.jsx(n.li,{children:e.jsx(n.strong,{children:"Title & description"})}),`
`,e.jsx(n.li,{children:e.jsx(n.strong,{children:"Actions"})}),`
`]}),`
`,e.jsx(s,{label:"Placement",level:2}),`
`,e.jsxs(n.p,{children:["When a ",e.jsx(n.strong,{children:"Modal"})," opening is triggered, it is displayed with a position aligned both horizontally and vertically within the viewport."]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Modal"})," takes up 100% of the viewport width up to a maximum width of 512px."]}),`
`,e.jsxs(n.p,{children:["On small screen, the ",e.jsx(n.strong,{children:"Modal"})," takes all the available space with a margin of 16px."]}),`
`,e.jsx(s,{label:"Behavior",level:2}),`
`,e.jsx(s,{label:"Overlay",level:3}),`
`,e.jsxs(n.p,{children:["A background overlay with opacity is displayed on the page to avoid distraction and help users to focus on the ",e.jsx(n.strong,{children:"Modal"})," content."]}),`
`,e.jsx(n.p,{children:"An animation with the ease-in and out effect applies on opening."}),`
`,e.jsx(s,{label:"Closing",level:3}),`
`,e.jsxs(n.p,{children:["A ",e.jsx(n.strong,{children:"Modal"})," is dismissed by clicking on the close icon button."]}),`
`,e.jsxs(n.p,{children:["Dismissing a ",e.jsx(n.strong,{children:"Modal"})," means that it will be closed without submitting any data and the user won't proceed further."]}),`
`,e.jsxs(n.p,{children:["A ",e.jsx(n.strong,{children:"Modal"})," will be successfully closed only once the required action or response has been completed by the user, meaning that the task is completed so the user will proceed further."]}),`
`,e.jsxs(n.p,{children:["The hidden overflow behavior is removed whenever the ",e.jsx(n.strong,{children:"Modal"})," get closed."]}),`
`,e.jsx(s,{label:"Scrolling",level:3}),`
`,e.jsxs(n.p,{children:["When necessary, depending on the viewport height and the ",e.jsx(n.strong,{children:"Modal"})," content, the user can scroll vertically with the header and the action button remaining in place."]}),`
`,e.jsx(s,{label:"Variation",level:2}),`
`,e.jsx(s,{label:"Color",level:3}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Neutral"}),": providing general information or updates without implying any particular urgency or emotion."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Success"}),": indicating that an action has been successfully completed, offering positive reinforcement to the user."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Warning"}),": alerting users to potential issues or risks, encouraging caution and preventive measures."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Critical"}),": highlighting urgent and severe issues that require immediate attention and action to prevent significant negative outcomes."]}),`
`]}),`
`,e.jsx(s,{label:"Navigation",level:2}),`
`,e.jsx(s,{label:"Focus Management",level:3}),`
`,e.jsxs(n.p,{children:["When the ",e.jsx(n.strong,{children:"Modal"})," is opened, focus is automatically set to the ",e.jsx(n.strong,{children:"Modal"})," itself."]}),`
`,e.jsxs(n.p,{children:["Focus is trapped within the ",e.jsx(n.strong,{children:"Modal"})," and its inner elements while it remains open."]}),`
`,e.jsxs(n.p,{children:["When the ",e.jsx(n.strong,{children:"Modal"})," is closed, focus returns to the trigger element unless otherwise specified."]}),`
`,e.jsx(s,{label:"General Keyboard Shortcuts",level:3}),`
`,e.jsxs(n.p,{children:["Pressing ",e.jsx(n.code,{children:"Escape"})," closes the ",e.jsx(n.strong,{children:"Modal"})," (if dismissible)"]}),`
`,e.jsxs(n.p,{children:["Pressing ",e.jsx(n.code,{children:"Tab"})," moves focus forward:"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"First to the close icon button (if available)"}),`
`,e.jsxs(n.li,{children:["Then through any other focusable elements inside the ",e.jsx(n.strong,{children:"Modal"})," (e.g., buttons, inputs)"]}),`
`]}),`
`,e.jsxs(n.p,{children:["Pressing ",e.jsx(n.code,{children:"Shift"})," + ",e.jsx(n.code,{children:"Tab"})," moves focus backward through the focusable elements."]}),`
`,e.jsxs(n.p,{children:["Once the last focusable element is reached, focus loops back to the first focusable element, ensuring it remains within the ",e.jsx(n.strong,{children:"Modal"}),"."]}),`
`,e.jsx(s,{label:"Accessibility",level:2}),`
`,e.jsxs(n.p,{children:["This component complies with the ",e.jsx(t,{href:"https://www.w3.org/WAI/ARIA/apg/patterns/dialog-modal/",children:"Modal WAI-ARIA design pattern"}),"."]}),`
`,e.jsx(s,{label:"Linking the Modal title and content",level:3}),`
`,e.jsxs(n.p,{children:["Ensure that assistive technologies announce the ",e.jsx(n.strong,{children:"Modal"}),` correctly using
`,e.jsx(t,{href:"https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby",children:"aria-labelledby"})," or ",e.jsx(t,{href:"https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label",children:"aria-label"}),", and ",e.jsx(t,{href:"https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-describedby",children:"aria-describedby"}),"."]}),`
`,e.jsx(o,{of:u,sourceState:"shown"}),`
`,e.jsx(o,{of:x,sourceState:"shown"}),`
`,e.jsxs(n.p,{children:[e.jsx(r,{name:l.circleCheck,style:{color:"var(--ods-color-success-500)"}})," Screen readers will announce the sections referenced by the aria attributes."]}),`
`,e.jsx(s,{label:"Prioritize the least critical action in modal buttons",level:3}),`
`,e.jsxs(n.p,{children:["For ",e.jsx(n.strong,{children:"Modals"})," that require user decisions (e.g., confirmation dialogs), place the least critical ",e.jsx(n.strong,{children:"Button"})," first in the ",e.jsx(n.strong,{children:"Modal"})," actions section."]}),`
`,e.jsx(o,{of:g,sourceState:"shown"}),`
`,e.jsxs(n.p,{children:[e.jsx(r,{name:l.circleCheck,style:{color:"var(--ods-color-success-500)"}}),' Users will first encounter the non-destructive action (e.g., "Cancel"), reducing accidental confirmations.']})]})}function ue(i={}){const{wrapper:n}={...d(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(c,{...i})}):c(i)}export{ue as default};
