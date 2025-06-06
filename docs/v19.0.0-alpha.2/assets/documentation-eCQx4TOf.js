import{j as e}from"./jsx-runtime-VM66peLj.js";import{useMDXComponents as d}from"./index-DQB45XCM.js";import{M as c,C as h}from"./index-BlaLg9GY.js";import{M as l,O as m}from"./modal.stories-C9_PdlWJ.js";import{B as p}from"./Banner-CANn_RZm.js";import{I as x,A as g,B as j}from"./IdentityCard-DkdK44g3.js";import{H as s}from"./Heading-6Mfikk-c.js";import{S as t,a as o,O as r}from"./StorybookLink-Dek5KO7Z.js";import"./index-D_CmzhJ4.js";import"./iframe-CGgj-FAD.js";import"./index-ChzAxGiP.js";import"./index-CucsY3YN.js";import"./index-CXQShRbs.js";import"./index-DrFu-skq.js";import"./Button-BRERPjFq.js";import"./index-CkQHsVsO.js";import"./Spinner-CcwadLZv.js";import"./icon-name-jL3axqAU.js";import"./render-strategy-C1g0moKL.js";import"./index-BCxMAfLs.js";import"./portal-BQw3bnzL.js";import"./use-locale-context-Z4fgdY29.js";import"./use-presence-BmJ92aQP.js";import"./use-event-OCVb0O1l.js";import"./index-CW0111bW.js";import"./index-BtJLK9Rv.js";import"./SelectLabel-B4wtfstO.js";import"./use-field-context-BA6pMY5L.js";import"./Text-eeWNb4Wa.js";import"./TooltipTrigger-CUqGeRIQ.js";import"./overlay-CZHjGBMC.js";import"./index-DTqyXX3-.js";import"./controls-BtiQQn1l.js";import"./source-d0g_Nd0q.js";import"./ExternalLink-lH7YZu4p.js";import"./ods-react49-9IXPzWp7.js";import"./index-2w0W-O47-BJ19ihbZ.js";import"./Link-Ck4D7Gly-DoENOEBg.js";function a(i){const n={code:"code",em:"em",img:"img",li:"li",ol:"ol",p:"p",span:"span",strong:"strong",ul:"ul",...d(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(c,{of:l,name:"Documentation"}),`
`,e.jsx(p,{of:l}),`
`,e.jsx(n.p,{children:e.jsxs(n.em,{children:["A ",e.jsx(n.strong,{children:"Modal"})," component is used to overlay with important content the main view of a site and block interactions with it."]})}),`
`,e.jsx(h,{of:m,sourceState:"none"}),`
`,e.jsx(s,{label:"Overview",level:2}),`
`,e.jsxs(x,{aliases:["Dialog","Alert Dialog","Confirm Dialog"],atomicType:g.molecule,figmaLink:"https://www.figma.com/design/9jDDTcR4a9jPRFcdjawAlf/ODS---UI-Kit?node-id=47-2607",githubUrl:"https://github.com/ovh/design-system/tree/master/packages/ods/src/components/modal",name:"Modal",relatedComponents:[{name:"Button"},{name:"Text"}],children:[e.jsxs(n.p,{children:["A ",e.jsx(n.strong,{children:"Modal"})," is used to provide some information to users that needs a response or immediate attention."]}),e.jsxs(n.p,{children:["While a ",e.jsx(n.strong,{children:"Modal"}),` is triggered, there is no interaction possible on the page that is overlaid so users have to
dismiss or click on an action `,e.jsx(t,{kind:r.button,story:o.documentation,children:"Button"}),` to proceed
further.`]})]}),`
`,e.jsx(s,{label:"Anatomy",level:2}),`
`,e.jsx(n.p,{children:e.jsx(n.img,{src:"components/modal/anatomy.png",alt:"Component anatomy",title:"Component anatomy"})}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Backdrop overlay"})," to obscure the on-page content"]}),`
`,e.jsx(n.li,{children:e.jsx(n.strong,{children:"Container"})}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Content"})," container, filled with ",e.jsx(t,{kind:r.text,story:o.documentation,children:"Text"})," or other read-only content, depending on the usage"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Action Buttons"})," container, to complete or cancel the ",e.jsx(n.strong,{children:"Modal"})," task"]}),`
`,e.jsxs(n.li,{children:[e.jsxs(n.strong,{children:[e.jsx(n.code,{children:"close"})," icon Button"]})," to close the ",e.jsx(n.strong,{children:"Modal"})," without submitting any data"]}),`
`]}),`
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
`,e.jsx(j,{donts:["- Trigger a Modal as a result of a first Modal actions","- Use a Modal if the informational content is very long within a Modal: consider alternatives if that is your case",e.jsxs(n.span,{children:["- Use a Modal only to notify users about a successful completion of their actions: use ",e.jsx(t,{kind:r.message,story:o.documentation,children:"Message"})," component"]})],dos:["- Use a Modal to display information the user needs to respond to","- Use a Modal to ask a confirmation from the user before proceeding","- Use Modals sparingly since they are disruptive and stop users in their current task",e.jsxs(n.span,{children:["- Handle closing the Modal when the cancel action ",e.jsx(t,{kind:r.button,story:o.documentation,children:"Button"})," is clicked"]}),"- Use scrolling only when it is absolutely needed"]}),`
`,e.jsx(s,{label:"Placement",level:2}),`
`,e.jsxs(n.p,{children:["When a ",e.jsx(n.strong,{children:"Modal"})," opening is triggered, it is displayed with a position aligned both horizontally and vertically within the viewport."]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Modal"})," takes up 100% of the viewport width up to a maximum width of 512px."]}),`
`,e.jsxs(n.p,{children:["On small screen, the ",e.jsx(n.strong,{children:"Modal"})," takes all the available space with a margin of 16px."]}),`
`,e.jsx(s,{label:"Behavior",level:2}),`
`,e.jsx(s,{label:"Overlay",level:3}),`
`,e.jsxs(n.p,{children:["A background overlay with opacity is displayed on the page to avoid distraction and help users to focus on the ",e.jsx(n.strong,{children:"Modal"})," content."]}),`
`,e.jsxs(n.p,{children:["When the ",e.jsx(n.strong,{children:"Modal"})," opens, an event is triggered."]}),`
`,e.jsx(n.p,{children:"An animation with the ease-in and out effect applies on opening."}),`
`,e.jsx(s,{label:"Closing",level:3}),`
`,e.jsxs(n.p,{children:["A ",e.jsx(n.strong,{children:"Modal"})," is dismissed by clicking on the close icon button."]}),`
`,e.jsxs(n.p,{children:["Dismissing a ",e.jsx(n.strong,{children:"Modal"})," means that it will be closed without submitting any data and the user won't proceed further."]}),`
`,e.jsxs(n.p,{children:["A ",e.jsx(n.strong,{children:"Modal"})," will be successfully closed only once the required action or response has been completed by the user, meaning that the task is completed so the user will proceed further."]}),`
`,e.jsxs(n.p,{children:["Closing the ",e.jsx(n.strong,{children:"Modal"})," triggers an event and an animation."]}),`
`,e.jsxs(n.p,{children:["The hidden overflow behaviour is removed whenever the ",e.jsx(n.strong,{children:"Modal"})," get closed."]}),`
`,e.jsx(s,{label:"Scrolling",level:3}),`
`,e.jsxs(n.p,{children:["When necessary, depending on the viewport height and the ",e.jsx(n.strong,{children:"Modal"})," content, the user can scroll vertically with the header and the action ",e.jsx(t,{kind:r.button,story:o.documentation,children:"Button"})," remaining in place."]}),`
`,e.jsx(s,{label:"Variation",level:2}),`
`,e.jsx(s,{label:"Color",level:3}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Neutral"}),": providing general information or updates without implying any particular urgency or emotion."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Success"}),": indicating that an action has been successfully completed, offering positive reinforcement to the user."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Warning"}),": alerting users to potential issues or risks, encouraging caution and preventive measures."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Critical"}),": highlighting urgent and severe issues that require immediate attention and action to prevent significant negative outcomes."]}),`
`]}),`
`,e.jsx(s,{label:"Accessibility",level:2}),`
`,e.jsxs(n.p,{children:["When displayed, the user is directly focused on the ",e.jsx(n.strong,{children:"Modal"})," itself."]}),`
`,e.jsxs(n.p,{children:["When ",e.jsx(n.strong,{children:"Modal"})," is opened :"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"Escape"})," key will dismiss it (if dismissible)"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"Tabulation"})," allows to move forward, first to the closing icon, then through any focusable element in the ",e.jsx(n.strong,{children:"Modal"})," (e.g. action ",e.jsx(t,{kind:r.button,story:o.documentation,children:"Button"}),")"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"Shift + Tab"})," allows the opposite way to move backward in focusing items"]}),`
`]}),`
`,e.jsxs(n.p,{children:["Focus is trapped inside the ",e.jsx(n.strong,{children:"Modal"})," scope and inner elements when active."]})]})}function ne(i={}){const{wrapper:n}={...d(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(a,{...i})}):a(i)}export{ne as default};
