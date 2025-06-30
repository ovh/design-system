import{j as e}from"./jsx-runtime-VM66peLj.js";import{useMDXComponents as r}from"./index-DQB45XCM.js";import{M as l,C as a}from"./index-CTRIvuAa.js";import{M as t,O as c}from"./modal.stories-D7hosFqF.js";import{B as d}from"./Banner-DKEGGZmZ.js";import{I as h,A as m,B as p}from"./IdentityCard-DMALWF_P.js";import{H as s}from"./Heading-BKRI_kjA.js";import"./index-D_CmzhJ4.js";import"./iframe-B1k00A9N.js";import"./index-ChzAxGiP.js";import"./index-CucsY3YN.js";import"./index-CXQShRbs.js";import"./index-DrFu-skq.js";import"./Button-CbWLwkmI.js";import"./index-CkQHsVsO.js";import"./Spinner-BC3A9yP9.js";import"./colors-DSObuHxd.js";import"./icon-name-BOrBmUKT.js";import"./dialog-trigger-lgJEWCCF.js";import"./use-locale-context-BQVaQ0H3.js";import"./use-presence-Cqrqn20p.js";import"./use-event-OCVb0O1l.js";import"./render-strategy-D_LTfuI4.js";import"./portal-Bd62KldU.js";import"./index-DninfMAu.js";import"./index-DHCC0GIt.js";import"./index-hWLJHUef.js";import"./SelectControl-D8g7ZA4_.js";import"./FormFieldLabel-DjB85afw.js";import"./Text-KX3Hvvn9.js";import"./collection-DMrs6jU3.js";import"./index-xSrPfE2G.js";import"./use-field-context-A_pa20cf.js";import"./TooltipTrigger-DmpQ7Q38.js";import"./overlay-CZHjGBMC.js";import"./index-DoGvXrgL.js";import"./controls-BtiQQn1l.js";import"./source-d0g_Nd0q.js";import"./ExternalLink-DJ00RbPw.js";import"./ods-react60-Yebt9vXY.js";import"./index-2w0W-O47-BJ19ihbZ.js";import"./Link-D8k51sak-CbRDKo-E.js";import"./ods-react214-B9lkGKUh.js";function o(i){const n={code:"code",em:"em",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...r(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{of:t,name:"Documentation"}),`
`,e.jsx(d,{of:t}),`
`,e.jsx(n.p,{children:e.jsxs(n.em,{children:["A ",e.jsx(n.strong,{children:"Modal"})," component is used to overlay with important content the main view of a site and block interactions with it."]})}),`
`,e.jsx(a,{of:c,sourceState:"none"}),`
`,e.jsx(s,{label:"Overview",level:2}),`
`,e.jsxs(h,{aliases:["Dialog","Alert Dialog","Confirm Dialog"],atomicType:m.molecule,figmaLink:"https://www.figma.com/design/9jDDTcR4a9jPRFcdjawAlf/ODS---UI-Kit?node-id=47-2607",githubUrl:"https://github.com/ovh/design-system/tree/master/packages/ods/src/components/modal",name:"Modal",children:[e.jsxs(n.p,{children:["A ",e.jsx(n.strong,{children:"Modal"})," is used to provide some information to users that needs a response or immediate attention."]}),e.jsxs(n.p,{children:["While a ",e.jsx(n.strong,{children:"Modal"}),` is triggered, there is no interaction possible on the page that is overlaid so users have to
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
`,e.jsx(p,{donts:["- Don't use Modals for non-interruptive information, prefer inline content or a Message component for passive feedback","- Don't trigger a second Modal from within another Modal since this leads to confusion and poor accessibility","- Don't use Modals for long-form content like documentation, complex forms, or multiple paragraphs. Consider a dedicated page or Drawer instead","- Don't make a Modal dismissible if the user must take an action to proceed and ensure the intent is clear","- Don't overload the Modal with multiple CTAs (Call-to-Action) or overly complex UI elements"],dos:["- Use a Modal to capture user attention for critical decisions, confirmations, or required input that blocks the current flow","- Ensure the Modal has a clear and focused purpose, with concise messaging and a single main action","- Use Modal color variants (Neutral, Info, Success, Warning, Critical) to match the intent and severity of the message","- Allow the Modal to be dismissed via a cancel button, close icon, or Escape key, unless a decision is mandatory","- Keep Modal content short and scannable. Support scroll only when necessary"]}),`
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
`,e.jsxs(n.p,{children:["The hidden overflow behaviour is removed whenever the ",e.jsx(n.strong,{children:"Modal"})," get closed."]}),`
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
`,e.jsxs(n.p,{children:["Once the last focusable element is reached, focus loops back to the first focusable element, ensuring it remains within the ",e.jsx(n.strong,{children:"Modal"}),"."]})]})}function ie(i={}){const{wrapper:n}={...r(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(o,{...i})}):o(i)}export{ie as default};
