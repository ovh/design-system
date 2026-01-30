import{j as e}from"./jsx-runtime-Cfl8ynUo.js";import{useMDXComponents as h}from"./index-ZwkxtaJJ.js";import{a as l,l as a}from"./ods-react67-C395g5lW.js";import{k as t}from"./Kbd-BhRHY5DX-DYqBejDt.js";import{M as p}from"./index-Cw5r0Kn8.js";import{M as c,O as m,A as x,a as j,b as u}from"./modal.stories-BAgoHICC.js";import{A as g}from"./Anatomy-DkXJCwiR.js";import{B as f}from"./Banner-X7WOeBPc.js";import{I as b,B as v}from"./IdentityCard-D9LjZbLA.js";import{C as o}from"./Canvas-i2Tfjesg.js";import{E as r}from"./ExternalLink-C5hGBmwh.js";import{H as s}from"./Heading-Dep_rTif.js";import"./index-jIWwRBLr.js";import"./index-CWkFp9WS-BSIT86NH.js";import"./iframe-DCzti3mm.js";import"./index-DWDEzXrj.js";import"./index-N93khynk.js";import"./index-CXQShRbs.js";import"./index-DrFu-skq.js";import"./Button-B-GJ-1TA.js";import"./index-CqY9YpN0.js";import"./Spinner-DJB5ZadI.js";import"./colors-DSObuHxd.js";import"./icon-name-BpdEc4-2.js";import"./context-C_-r2uoG.js";import"./dialog-trigger-CPz6GO76.js";import"./use-locale-context-kHyebpMI.js";import"./use-presence-C53EI5fL.js";import"./use-event-c9j7vq_1.js";import"./render-strategy-DRJaCB2u.js";import"./portal-CJHwXgLI.js";import"./index-BwUtbHV0.js";import"./index-BFzjWlov.js";import"./useI18n-C0NLVYPv.js";import"./SelectControl-cFSNnpci.js";import"./FormFieldLabelSubLabel-DCAb65DU.js";import"./Text-CW33_IfE.js";import"./index-BYzLHZkt.js";import"./use-field-context-CnH3sryd.js";import"./TooltipTrigger-CRWH95NO.js";import"./overlay-CZHjGBMC.js";import"./index-BlUhyWms.js";import"./controls-BtiQQn1l.js";import"./source-CPEZJ6oD.js";import"./Table-D8Me597i-NC3k9YIT.js";import"./Table-5ah53JFf.js";import"./TooltipTrigger-C3aN0eJB-DwV7p8FS.js";import"./ods-react121-5kwUyuQy.js";import"./index-CSeLFT3z.js";import"./lz-string-U2heoObX.js";import"./meta-DcQbZjt_.js";import"./ResetTheme-xqxcB8cs.js";import"./tokens-BtVMeYnn.js";import"./Link-TMoA1i18-BDwROQOD.js";import"./Divider-wQyo85oE-CpSK6tnQ.js";function d(i){const n={em:"em",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...h(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(p,{of:c,name:"Documentation"}),`
`,e.jsx(f,{of:c}),`
`,e.jsx(n.p,{children:e.jsxs(n.em,{children:["A ",e.jsx(n.strong,{children:"Modal"})," component is used to overlay with important content the main view of a site and block interactions with it."]})}),`
`,e.jsx(o,{of:m,sourceState:"none"}),`
`,e.jsx(s,{label:"Overview",level:2}),`
`,e.jsxs(b,{aliases:["Dialog","Alert Dialog","Confirm Dialog"],figmaLink:"https://www.figma.com/design/9jDDTcR4a9jPRFcdjawAlf/ODS---UI-Kit?node-id=47-2607",githubUrl:"https://github.com/ovh/design-system/tree/master/packages/ods-react/src/components/modal",name:"Modal",children:[e.jsxs(n.p,{children:["A ",e.jsx(n.strong,{children:"Modal"})," is used to provide some information to users that needs a response or immediate attention."]}),e.jsxs(n.p,{children:["While a ",e.jsx(n.strong,{children:"Modal"}),` is triggered, there is no interaction possible on the page that is overlaid so users have to
dismiss or click on an action Button to proceed further.`]})]}),`
`,e.jsx(s,{label:"Usage",level:2}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Modals"})," are used in different cases:"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"alerting users about something that requires their agreement"}),`
`,e.jsx(n.li,{children:"confirming a user decision"}),`
`,e.jsx(n.li,{children:"notifying the user of important information"}),`
`]}),`
`,e.jsx(n.p,{children:"They can be dismissable or not."}),`
`,e.jsx(s,{label:"Dos & Don'ts",level:3}),`
`,e.jsx(v,{donts:["- Don't use Modals for non-interruptive information, prefer inline content or a Message component for passive feedback","- Don't trigger a second Modal from within another Modal since this leads to confusion and poor accessibility","- Don't use Modals for long-form content like documentation, complex forms, or multiple paragraphs. Consider a dedicated page or Drawer instead","- Don't make a Modal dismissible if the user must take an action to proceed and ensure the intent is clear","- Don't overload the Modal with multiple CTAs (Call-to-Action) or overly complex UI elements"],dos:["- Use a Modal to capture user attention for critical decisions, confirmations, or required input that blocks the current flow","- Ensure the Modal has a clear and focused purpose, with concise messaging and a single main action","- Allow the Modal to be dismissed via a cancel button, close icon, or Escape key, unless a decision is mandatory","- Keep Modal content short and scannable. Support scroll only when necessary"]}),`
`,e.jsx(s,{label:"Best Practices in Context",level:3}),`
`,e.jsx(g,{src:"components/modal/anatomy.png"}),`
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
`,e.jsxs(n.p,{children:["On smaller screens, the ",e.jsx(n.strong,{children:"Modal"})," takes all the available space with a margin of 16px."]}),`
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
`,e.jsx(s,{label:"Navigation",level:2}),`
`,e.jsx(s,{label:"Focus Management",level:3}),`
`,e.jsxs(n.p,{children:["When the ",e.jsx(n.strong,{children:"Modal"})," is opened, focus is automatically set to the ",e.jsx(n.strong,{children:"Modal"})," itself."]}),`
`,e.jsxs(n.p,{children:["Focus is trapped within the ",e.jsx(n.strong,{children:"Modal"})," and its inner elements while it remains open."]}),`
`,e.jsxs(n.p,{children:["When the ",e.jsx(n.strong,{children:"Modal"})," is closed, focus returns to the trigger element unless otherwise specified."]}),`
`,e.jsx(s,{label:"General Keyboard Shortcuts",level:3}),`
`,e.jsxs(n.p,{children:["Pressing ",e.jsx(t,{children:"Escape"})," closes the ",e.jsx(n.strong,{children:"Modal"})," (if dismissible)"]}),`
`,e.jsxs(n.p,{children:["Pressing ",e.jsx(t,{children:"Tab"})," moves focus forward:"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"First to the close icon button (if available)"}),`
`,e.jsxs(n.li,{children:["Then through any other focusable elements inside the ",e.jsx(n.strong,{children:"Modal"})," (e.g., buttons, inputs)"]}),`
`]}),`
`,e.jsxs(n.p,{children:["Pressing ",e.jsx(t,{children:"Shift"})," + ",e.jsx(t,{children:"Tab"})," moves focus backward through the focusable elements."]}),`
`,e.jsxs(n.p,{children:["Once the last focusable element is reached, focus loops back to the first focusable element, ensuring it remains within the ",e.jsx(n.strong,{children:"Modal"}),"."]}),`
`,e.jsx(s,{label:"Accessibility",level:2}),`
`,e.jsxs(n.p,{children:["This component complies with the ",e.jsx(r,{href:"https://www.w3.org/WAI/ARIA/apg/patterns/dialog-modal/",children:"Modal WAI-ARIA design pattern"}),"."]}),`
`,e.jsx(s,{label:"Linking the Modal title and content",level:3}),`
`,e.jsxs(n.p,{children:["Ensure that assistive technologies announce the ",e.jsx(n.strong,{children:"Modal"}),` correctly using
`,e.jsx(r,{href:"https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby",children:"aria-labelledby"})," or ",e.jsx(r,{href:"https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label",children:"aria-label"}),", and ",e.jsx(r,{href:"https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-describedby",children:"aria-describedby"}),"."]}),`
`,e.jsx(o,{of:x,sourceState:"shown"}),`
`,e.jsx(o,{of:j,sourceState:"shown"}),`
`,e.jsxs(n.p,{children:[e.jsx(l,{name:a.circleCheck,style:{color:"var(--ods-color-success-500)"}})," Screen readers will announce the sections referenced by the aria attributes."]}),`
`,e.jsx(s,{label:"Prioritize the least critical action in modal buttons",level:3}),`
`,e.jsxs(n.p,{children:["For ",e.jsx(n.strong,{children:"Modals"})," that require user decisions (e.g., confirmation dialogs), place the least critical ",e.jsx(n.strong,{children:"Button"})," first in the ",e.jsx(n.strong,{children:"Modal"})," actions section."]}),`
`,e.jsx(o,{of:u,sourceState:"shown"}),`
`,e.jsxs(n.p,{children:[e.jsx(l,{name:a.circleCheck,style:{color:"var(--ods-color-success-500)"}}),' Users will first encounter the non-destructive action (e.g., "Cancel"), reducing accidental confirmations.']})]})}function ye(i={}){const{wrapper:n}={...h(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(d,{...i})}):d(i)}export{ye as default};
