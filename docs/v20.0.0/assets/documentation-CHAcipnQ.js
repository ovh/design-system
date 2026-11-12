import{i as e}from"./rolldown-runtime-Dd_uD5pT.js";import{t}from"./jsx-runtime-DREnUpxT.js";import{T as n}from"./index-CzEwg6AJ.js";var r=e(t());function i(e){let t={em:`em`,li:`li`,ol:`ol`,p:`p`,strong:`strong`,ul:`ul`,...n(),...e.components},{Anatomy:i,BestPractices:a,Canvas:s,ExternalLink:c,Heading:l,Icon:u,IdentityCard:d,Kbd:f}=t;return i||o(`Anatomy`,!0),a||o(`BestPractices`,!0),s||o(`Canvas`,!0),c||o(`ExternalLink`,!0),l||o(`Heading`,!0),u||o(`Icon`,!0),d||o(`IdentityCard`,!0),f||o(`Kbd`,!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.p,{children:(0,r.jsxs)(t.em,{children:[`A `,(0,r.jsx)(t.strong,{children:`Modal`}),` component is used to overlay with important content the main view of a site and block interactions with it.`]})}),`
`,(0,r.jsx)(s,{story:`Overview`,source:`none`}),`
`,(0,r.jsx)(l,{label:`Overview`,level:2}),`
`,(0,r.jsxs)(d,{aliases:[`Dialog`,`Alert Dialog`,`Confirm Dialog`],figmaLink:`https://www.figma.com/design/9jDDTcR4a9jPRFcdjawAlf/ODS---UI-Kit?node-id=47-2607`,githubUrl:`https://github.com/ovh/design-system/tree/master/packages/ods-react/src/components/modal`,name:`Modal`,children:[(0,r.jsxs)(t.p,{children:[`A `,(0,r.jsx)(t.strong,{children:`Modal`}),` is used to provide some information to users that needs a response or immediate attention.`]}),(0,r.jsxs)(t.p,{children:[`While a `,(0,r.jsx)(t.strong,{children:`Modal`}),` is triggered, there is no interaction possible on the page that is overlaid so users have to
dismiss or click on an action Button to proceed further.`]})]}),`
`,(0,r.jsx)(l,{label:`Usage`,level:2}),`
`,(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:`Modals`}),` are used in different cases:`]}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsx)(t.li,{children:`alerting users about something that requires their agreement`}),`
`,(0,r.jsx)(t.li,{children:`confirming a user decision`}),`
`,(0,r.jsx)(t.li,{children:`notifying the user of important information`}),`
`]}),`
`,(0,r.jsx)(t.p,{children:`They can be dismissable or not.`}),`
`,(0,r.jsx)(l,{label:`Dos & Don'ts`,level:3}),`
`,(0,r.jsx)(a,{donts:[`- Don't use Modals for non-interruptive information, prefer inline content or a Message component for passive feedback`,`- Don't trigger a second Modal from within another Modal since this leads to confusion and poor accessibility`,`- Don't use Modals for long-form content like documentation, complex forms, or multiple paragraphs. Consider a dedicated page or Drawer instead`,`- Don't make a Modal dismissible if the user must take an action to proceed and ensure the intent is clear`,`- Don't overload the Modal with multiple CTAs (Call-to-Action) or overly complex UI elements`],dos:[`- Use a Modal to capture user attention for critical decisions, confirmations, or required input that blocks the current flow`,`- Ensure the Modal has a clear and focused purpose, with concise messaging and a single main action`,`- Allow the Modal to be dismissed via a cancel button, close icon, or Escape key, unless a decision is mandatory`,`- Keep Modal content short and scannable. Support scroll only when necessary`]}),`
`,(0,r.jsx)(l,{label:`Best Practices in Context`,level:3}),`
`,(0,r.jsx)(i,{src:`components/modal/anatomy.png`}),`
`,(0,r.jsxs)(t.ol,{children:[`
`,(0,r.jsx)(t.li,{children:(0,r.jsx)(t.strong,{children:`Modal`})}),`
`,(0,r.jsx)(t.li,{children:(0,r.jsx)(t.strong,{children:`Header`})}),`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:`Close button`}),` - optional`]}),`
`,(0,r.jsx)(t.li,{children:(0,r.jsx)(t.strong,{children:`Content`})}),`
`,(0,r.jsx)(t.li,{children:(0,r.jsx)(t.strong,{children:`Title & description`})}),`
`,(0,r.jsx)(t.li,{children:(0,r.jsx)(t.strong,{children:`Actions`})}),`
`]}),`
`,(0,r.jsx)(l,{label:`Placement`,level:2}),`
`,(0,r.jsxs)(t.p,{children:[`When a `,(0,r.jsx)(t.strong,{children:`Modal`}),` opening is triggered, it is displayed with a position aligned both horizontally and vertically within the viewport.`]}),`
`,(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:`Modal`}),` takes up 100% of the viewport width up to a maximum width of 512px.`]}),`
`,(0,r.jsxs)(t.p,{children:[`On smaller screens, the `,(0,r.jsx)(t.strong,{children:`Modal`}),` takes all the available space with a margin of 16px.`]}),`
`,(0,r.jsx)(l,{label:`Behavior`,level:2}),`
`,(0,r.jsx)(l,{label:`Overlay`,level:3}),`
`,(0,r.jsxs)(t.p,{children:[`A background overlay with opacity is displayed on the page to avoid distraction and help users to focus on the `,(0,r.jsx)(t.strong,{children:`Modal`}),` content.`]}),`
`,(0,r.jsx)(t.p,{children:`An animation with the ease-in and out effect applies on opening.`}),`
`,(0,r.jsx)(l,{label:`Closing`,level:3}),`
`,(0,r.jsxs)(t.p,{children:[`A `,(0,r.jsx)(t.strong,{children:`Modal`}),` is dismissed by clicking on the close icon button.`]}),`
`,(0,r.jsxs)(t.p,{children:[`Dismissing a `,(0,r.jsx)(t.strong,{children:`Modal`}),` means that it will be closed without submitting any data and the user won't proceed further.`]}),`
`,(0,r.jsxs)(t.p,{children:[`A `,(0,r.jsx)(t.strong,{children:`Modal`}),` will be successfully closed only once the required action or response has been completed by the user, meaning that the task is completed so the user will proceed further.`]}),`
`,(0,r.jsxs)(t.p,{children:[`The hidden overflow behavior is removed whenever the `,(0,r.jsx)(t.strong,{children:`Modal`}),` get closed.`]}),`
`,(0,r.jsx)(l,{label:`Scrolling`,level:3}),`
`,(0,r.jsxs)(t.p,{children:[`When necessary, depending on the viewport height and the `,(0,r.jsx)(t.strong,{children:`Modal`}),` content, the user can scroll vertically with the header and the action button remaining in place.`]}),`
`,(0,r.jsx)(l,{label:`Navigation`,level:2}),`
`,(0,r.jsx)(l,{label:`Focus Management`,level:3}),`
`,(0,r.jsxs)(t.p,{children:[`When the `,(0,r.jsx)(t.strong,{children:`Modal`}),` is opened, focus is automatically set to the `,(0,r.jsx)(t.strong,{children:`Modal`}),` itself.`]}),`
`,(0,r.jsxs)(t.p,{children:[`Focus is trapped within the `,(0,r.jsx)(t.strong,{children:`Modal`}),` and its inner elements while it remains open.`]}),`
`,(0,r.jsxs)(t.p,{children:[`When the `,(0,r.jsx)(t.strong,{children:`Modal`}),` is closed, focus returns to the trigger element unless otherwise specified.`]}),`
`,(0,r.jsx)(l,{label:`General Keyboard Shortcuts`,level:3}),`
`,(0,r.jsxs)(t.p,{children:[`Pressing `,(0,r.jsx)(f,{children:`Escape`}),` closes the `,(0,r.jsx)(t.strong,{children:`Modal`}),` (if dismissible)`]}),`
`,(0,r.jsxs)(t.p,{children:[`Pressing `,(0,r.jsx)(f,{children:`Tab`}),` moves focus forward:`]}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsx)(t.li,{children:`First to the close icon button (if available)`}),`
`,(0,r.jsxs)(t.li,{children:[`Then through any other focusable elements inside the `,(0,r.jsx)(t.strong,{children:`Modal`}),` (e.g., buttons, inputs)`]}),`
`]}),`
`,(0,r.jsxs)(t.p,{children:[`Pressing `,(0,r.jsx)(f,{children:`Shift`}),` + `,(0,r.jsx)(f,{children:`Tab`}),` moves focus backward through the focusable elements.`]}),`
`,(0,r.jsxs)(t.p,{children:[`Once the last focusable element is reached, focus loops back to the first focusable element, ensuring it remains within the `,(0,r.jsx)(t.strong,{children:`Modal`}),`.`]}),`
`,(0,r.jsx)(l,{label:`Accessibility`,level:2}),`
`,(0,r.jsxs)(t.p,{children:[`This component complies with the `,(0,r.jsx)(c,{href:`https://www.w3.org/WAI/ARIA/apg/patterns/dialog-modal/`,children:`Modal WAI-ARIA design pattern`}),`.`]}),`
`,(0,r.jsx)(l,{label:`Linking the Modal title and content`,level:3}),`
`,(0,r.jsxs)(t.p,{children:[`Ensure that assistive technologies announce the `,(0,r.jsx)(t.strong,{children:`Modal`}),` correctly using
`,(0,r.jsx)(c,{href:`https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby`,children:`aria-labelledby`}),` or `,(0,r.jsx)(c,{href:`https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label`,children:`aria-label`}),`, and `,(0,r.jsx)(c,{href:`https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-describedby`,children:`aria-describedby`}),`.`]}),`
`,(0,r.jsx)(s,{story:`AccessibilityAriaLabel`}),`
`,(0,r.jsx)(s,{story:`AccessibilityAriaLabelledBy`}),`
`,(0,r.jsxs)(t.p,{children:[(0,r.jsx)(u,{name:`circle-check`,style:{color:`var(--ods-semantic-color-content-success)`}}),` Screen readers will announce the sections referenced by the aria attributes.`]}),`
`,(0,r.jsx)(l,{label:`Prioritize the least critical action in modal buttons`,level:3}),`
`,(0,r.jsxs)(t.p,{children:[`For `,(0,r.jsx)(t.strong,{children:`Modals`}),` that require user decisions (e.g., confirmation dialogs), place the least critical `,(0,r.jsx)(t.strong,{children:`Button`}),` first in the `,(0,r.jsx)(t.strong,{children:`Modal`}),` actions section.`]}),`
`,(0,r.jsx)(s,{story:`AccessibilityActions`}),`
`,(0,r.jsxs)(t.p,{children:[(0,r.jsx)(u,{name:`circle-check`,style:{color:`var(--ods-semantic-color-content-success)`}}),` Users will first encounter the non-destructive action (e.g., "Cancel"), reducing accidental confirmations.`]})]})}function a(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(i,{...e})}):i(e)}function o(e,t){throw Error(`Expected `+(t?`component`:`object`)+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}export{a as default};