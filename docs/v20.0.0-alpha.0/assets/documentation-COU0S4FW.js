import{i as e}from"./rolldown-runtime-Dd_uD5pT.js";import{t}from"./jsx-runtime-DREnUpxT.js";import{T as n}from"./index-CdRG7ZE_.js";var r=e(t());function i(e){let t={em:`em`,li:`li`,ol:`ol`,p:`p`,strong:`strong`,ul:`ul`,...n(),...e.components},{Anatomy:i,BestPractices:a,Canvas:s,Heading:c,IdentityCard:l}=t;return i||o(`Anatomy`,!0),a||o(`BestPractices`,!0),s||o(`Canvas`,!0),c||o(`Heading`,!0),l||o(`IdentityCard`,!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.p,{children:(0,r.jsxs)(t.em,{children:[(0,r.jsx)(t.strong,{children:`Toaster`}),` component provides a section on the page where you'll be able to display `,(0,r.jsx)(t.strong,{children:`Toast`}),` to notify the user.`]})}),`
`,(0,r.jsx)(s,{story:`Overview`,source:`none`}),`
`,(0,r.jsx)(c,{label:`Overview`,level:2}),`
`,(0,r.jsx)(l,{aliases:[`Notification`,`Toast`],figmaLink:`https://www.figma.com/design/9jDDTcR4a9jPRFcdjawAlf/branch/9bnlxD8FSlsM1AkmxZbNLG/ODS---UI-Kit?node-id=11140-2948&p=f&t=Rrmj84Hj95VYn82V-0`,githubUrl:`https://github.com/ovh/design-system/tree/master/packages/ods-react/src/components/toaster`,name:`Toaster`,startingVersion:19,children:(0,r.jsxs)(t.p,{children:[`A `,(0,r.jsx)(t.strong,{children:`Toast`}),` is a non-blocking notification used to communicate brief messages to the user.`]})}),`
`,(0,r.jsx)(c,{label:`Usage`,level:2}),`
`,(0,r.jsxs)(t.p,{children:[`The `,(0,r.jsx)(t.strong,{children:`Toast`}),` is used for short-lived messages that do not demand immediate user action. They are commonly used for:`]}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsx)(t.li,{children:`confirmations (e.g., "Changes saved").`}),`
`,(0,r.jsx)(t.li,{children:`warnings or errors (e.g., "Connection lost").`}),`
`,(0,r.jsx)(t.li,{children:`informational updates (e.g., "New message received").`}),`
`]}),`
`,(0,r.jsx)(c,{label:`Message vs Toast`,level:3}),`
`,(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:`Message`})}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsx)(t.li,{children:`Persistent or semi-persistent information banner.`}),`
`,(0,r.jsx)(t.li,{children:`Usually appears inline or at the top of a page as part of the content flow.`}),`
`,(0,r.jsx)(t.li,{children:`Designed for status communication (success, warning, critical error, info) that’s tied to a specific screen or context.`}),`
`,(0,r.jsx)(t.li,{children:`Remains visible until dismissed or until the state changes.`}),`
`]}),`
`,(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:`Toast`})}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsx)(t.li,{children:`Ephemeral notification that appears for a short time (usually overlay in a corner of the viewport)`}),`
`,(0,r.jsx)(t.li,{children:`Designed for lightweight, transient feedback ("Action succeeded", "File uploaded"), except for toast with actions.`}),`
`,(0,r.jsx)(t.li,{children:`Auto-dismisses after a few seconds.`}),`
`]}),`
`,(0,r.jsx)(c,{label:`Dos & Don'ts`,level:3}),`
`,(0,r.jsx)(a,{donts:[`- Use Toasts for critical alerts that require immediate user attention. Use Modal instead`,`- Overuse Toasts for every user action`,`- Allow Toasts to hide critical UI elements`,`- Display long content or actions that require extended attention in a Toast`],dos:[`- Use a Toast to inform users of non-critical system events or confirmations`,`- Keep messages short and clear`,`- Queue multiple Toasts when triggered in quick succession`]}),`
`,(0,r.jsx)(c,{label:`Best Practices in Context`,level:3}),`
`,(0,r.jsx)(i,{src:`components/toaster/anatomy.png`}),`
`,(0,r.jsxs)(t.ol,{children:[`
`,(0,r.jsx)(t.li,{children:(0,r.jsx)(t.strong,{children:`Toast`})}),`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:`Icon`}),` - optional`]}),`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:`Close button`}),` - optional`]}),`
`,(0,r.jsx)(t.li,{children:(0,r.jsx)(t.strong,{children:`Content`})}),`
`]}),`
`,(0,r.jsx)(c,{label:`Placement`,level:2}),`
`,(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:`Toasts`}),` are typically positioned at one of the corners of the viewport (default is top-end), but the placement is configurable to match the application's UX needs.`]}),`
`,(0,r.jsx)(c,{label:`Behavior`,level:2}),`
`,(0,r.jsx)(c,{label:`Auto-dismiss`,level:3}),`
`,(0,r.jsxs)(t.p,{children:[`By default, a `,(0,r.jsx)(t.strong,{children:`Toast`}),`* is ephemeral and disappears automatically after a predefined duration (default is 3 seconds).`]}),`
`,(0,r.jsxs)(t.p,{children:[`The auto-dismiss timer is paused when the user hovers over the `,(0,r.jsx)(t.strong,{children:`Toast`}),`, and resumes once the hover ends.`]}),`
`,(0,r.jsxs)(t.p,{children:[`The `,(0,r.jsx)(t.strong,{children:`Toast`}),` may include a close button, allowing the user to dismiss it before the timer expires.`]}),`
`,(0,r.jsx)(c,{label:`Persistent Toast`,level:3}),`
`,(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:`Toasts`}),` can be configured to remain visible until the user dismisses them or completes the associated action.`]}),`
`,(0,r.jsx)(t.p,{children:`In this case, a close button is always required.`}),`
`,(0,r.jsx)(c,{label:`Manual dismiss`,level:3}),`
`,(0,r.jsx)(t.p,{children:`A close button is displayed for manual dismissal.`}),`
`,(0,r.jsxs)(t.p,{children:[`Manual dismiss is compatible with both auto-dismiss and persistent `,(0,r.jsx)(t.strong,{children:`Toasts`}),`.`]}),`
`,(0,r.jsx)(c,{label:`Stacking`,level:3}),`
`,(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:`Toasts`}),` stack within their display area, with a default maximum of 3 visible `,(0,r.jsx)(t.strong,{children:`Toasts`}),`.`]}),`
`,(0,r.jsxs)(t.p,{children:[`The stack follows a FIFO (First In, First Out) order, the most recent `,(0,r.jsx)(t.strong,{children:`Toast`}),` appears first.`]}),`
`,(0,r.jsxs)(t.p,{children:[`When a `,(0,r.jsx)(t.strong,{children:`Toast`}),` is dismissed (automatically or manually), the remaining `,(0,r.jsx)(t.strong,{children:`Toasts`}),` shift to fill the gap, preserving their relative order.`]}),`
`,(0,r.jsx)(t.p,{children:`Stacking direction depends on placement:`}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsxs)(t.li,{children:[`top placements: the newest `,(0,r.jsx)(t.strong,{children:`Toast`}),` appears at the top of the stack, pushing older ones downward.`]}),`
`,(0,r.jsxs)(t.li,{children:[`bottom placements: the newest `,(0,r.jsx)(t.strong,{children:`Toast`}),` appears at the bottom of the stack, pushing older ones upward.`]}),`
`]}),`
`,(0,r.jsx)(c,{label:`Variation`,level:2}),`
`,(0,r.jsx)(c,{label:`Status`,level:3}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:`Accent`}),`: highlighting content tied to the brand, such as a new feature announcement, without conveying any particular status.`]}),`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:`Neutral`}),`: conveying general content without any particular status or urgency.`]}),`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:`Information`}),` `,(0,r.jsx)(t.em,{children:`(default)`}),`: informing users of specific content, providing global feedback to the user.`]}),`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:`Success`}),`: confirming that an action has been completed successfully, providing positive feedback to the user.`]}),`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:`Warning`}),`: alerting users to potential issues or cautionary information, prompting them to take preventive actions.`]}),`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:`Critical`}),`: highlighting severe and potentially catastrophic issues that demand urgent and decisive action to prevent significant negative consequences.`]}),`
`]}),`
`,(0,r.jsx)(c,{label:`Navigation`,level:2}),`
`,(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:`Toasts`}),` interactive elements can receive keyboard focus.`]}),`
`,(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:`Toasts`}),` do not trap focus nor interfere with the active workflow.`]}),`
`,(0,r.jsx)(c,{label:`Accessibility`,level:2}),`
`,(0,r.jsxs)(t.p,{children:[`The `,(0,r.jsx)(t.strong,{children:`Toaster`}),` component handles by itself the accessibility requirements.`]})]})}function a(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(i,{...e})}):i(e)}function o(e,t){throw Error(`Expected `+(t?`component`:`object`)+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}export{a as default};