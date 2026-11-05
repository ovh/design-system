import{i as e}from"./rolldown-runtime-Dd_uD5pT.js";import{t}from"./jsx-runtime-DREnUpxT.js";import{T as n}from"./index-CdRG7ZE_.js";var r=e(t());function i(e){let t={code:`code`,em:`em`,li:`li`,ol:`ol`,p:`p`,strong:`strong`,ul:`ul`,...n(),...e.components},{Anatomy:i,BestPractices:a,Canvas:s,ExternalLink:c,Heading:l,Icon:u,IdentityCard:d,Kbd:f}=t;return i||o(`Anatomy`,!0),a||o(`BestPractices`,!0),s||o(`Canvas`,!0),c||o(`ExternalLink`,!0),l||o(`Heading`,!0),u||o(`Icon`,!0),d||o(`IdentityCard`,!0),f||o(`Kbd`,!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.p,{children:(0,r.jsxs)(t.em,{children:[(0,r.jsx)(t.strong,{children:`Message`}),` component helps to communicate with users providing feedback or information.`]})}),`
`,(0,r.jsx)(s,{story:`Overview`,source:`none`}),`
`,(0,r.jsx)(l,{label:`Overview`,level:2}),`
`,(0,r.jsxs)(d,{aliases:[`Notifier`,`Notification`,`Banner`,`Alert`,`Feedback`],figmaLink:`https://www.figma.com/design/9jDDTcR4a9jPRFcdjawAlf/ODS---UI-Kit?node-id=44-8300`,githubUrl:`https://github.com/ovh/design-system/tree/master/packages/ods-react/src/components/message`,name:`Message`,children:[(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:`Message`}),` component communicates information to the user.`]}),(0,r.jsx)(t.p,{children:`It grabs the user's attention in a prominent way.`})]}),`
`,(0,r.jsx)(l,{label:`Usage`,level:2}),`
`,(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:`Messages`}),` are used as notification status.`]}),`
`,(0,r.jsxs)(t.p,{children:[`There are four different subtypes of standard `,(0,r.jsx)(t.strong,{children:`Messages`}),`, in order of priority:`]}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:`Information`}),`: Provides info to users in context. Shouldn't be overused to replace regular content.`]}),`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:`Success`}),`: Reserved to provide to a success message. They are displayed as a snackbar.`]}),`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:`Warning`}),`: Reserved for `,(0,r.jsx)(t.strong,{children:`Messages`}),` that need the user attention and acknowledgment but might not cause errors.`]}),`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:`Critical`}),`: Reserved for errors, malfunctions, as well as critical issues. Inform the user that a problem requires immediate intervention or correction before the process continues.`]}),`
`]}),`
`,(0,r.jsx)(l,{label:`Message vs Toast`,level:3}),`
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
`,(0,r.jsx)(l,{label:`Dos & Don'ts`,level:3}),`
`,(0,r.jsx)(a,{donts:[`- Don't use Message to highlight static or decorative content, prefer components like Card for that`,`- Don't write overly long or complex Message that could overwhelm or confuse users`,`- Don't rely solely on color to convey meaning, always keep the Icon for clarity`,`- Don't use vague or generic text, always provide helpful context or guidance`,`- Don't overload the interface with multiple simultaneous Messages unless absolutely necessary`],dos:[`- Write Message in a clear, concise, and affirmative tone that aligns with the user's task`,`- Place Message in a visible and relevant area of the page, ideally close to the triggering element if any or top of the section`,`- Use the correct status (e.g., information, success, warning, critical) and emphasis to match the context and urgency`,`- Use non-dismissible Message for critical warnings or errors that require immediate resolution`,`- Allow content selection (e.g., to copy error messages)`]}),`
`,(0,r.jsx)(l,{label:`Best Practices in Context`,level:3}),`
`,(0,r.jsx)(i,{src:`components/message/anatomy.png`}),`
`,(0,r.jsxs)(t.ol,{children:[`
`,(0,r.jsx)(t.li,{children:(0,r.jsx)(t.strong,{children:`Message`})}),`
`,(0,r.jsx)(t.li,{children:(0,r.jsx)(t.strong,{children:`Icon`})}),`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:`Close button`}),` - optional`]}),`
`,(0,r.jsx)(t.li,{children:(0,r.jsx)(t.strong,{children:`Content`})}),`
`]}),`
`,(0,r.jsx)(l,{label:`Placement`,level:2}),`
`,(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:`Messages`}),` show up during a task to notify users of the status of an action. In every page, it is possible to display one or more `,(0,r.jsx)(t.strong,{children:`Messages`}),` to inform the user.`]}),`
`,(0,r.jsx)(t.p,{children:`They are positioned near their related items or right after the header and before the page title and page content.`}),`
`,(0,r.jsx)(l,{label:`Behavior`,level:2}),`
`,(0,r.jsx)(t.p,{children:`Based on its informational manner, the component default behavior is being read-only. You can only select its content if needed.`}),`
`,(0,r.jsxs)(t.p,{children:[`When a `,(0,r.jsx)(t.strong,{children:`Message`}),` is dismissible, a click on the `,(0,r.jsx)(t.code,{children:`xmark`}),` icon button will dismiss the `,(0,r.jsx)(t.strong,{children:`Message`}),`.`]}),`
`,(0,r.jsx)(l,{label:`Variation`,level:2}),`
`,(0,r.jsx)(l,{label:`Status`,level:3}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:`Accent`}),`: highlighting content tied to the brand, such as a new feature announcement, without conveying any particular status.`]}),`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:`Neutral`}),`: conveying general content without any particular status or urgency.`]}),`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:`Information`}),` `,(0,r.jsx)(t.em,{children:`(default)`}),`: informing users of specific content, providing global feedback to the user.`]}),`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:`Success`}),`: confirming that an action has been completed successfully, providing positive feedback to the user.`]}),`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:`Warning`}),`: alerting users to potential issues or cautionary information, prompting them to take preventive actions.`]}),`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:`Critical`}),`: highlighting severe and potentially catastrophic issues that demand urgent and decisive action to prevent significant negative consequences.`]}),`
`]}),`
`,(0,r.jsx)(l,{label:`Emphasis`,level:3}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:`High`}),`: tinted background with a light colored border, for important information that must be seen by the user.`]}),`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:`Medium`}),` `,(0,r.jsx)(t.em,{children:`(default)`}),`: neutral background with a colored border, for information that should be noticed without competing with the content around it.`]}),`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:`Low`}),`: colored text and icon only, without background nor border, for non-urgent information in a subtle and less prominent manner.`]}),`
`]}),`
`,(0,r.jsx)(t.p,{children:`The close button looks the same in every emphasis.`}),`
`,(0,r.jsx)(t.p,{children:`The blue-jeans theme keeps the v19 tinted look in high, without border.`}),`
`,(0,r.jsx)(s,{story:`Emphasis`}),`
`,(0,r.jsx)(l,{label:`Navigation`,level:2}),`
`,(0,r.jsx)(l,{label:`Focus Management`,level:3}),`
`,(0,r.jsxs)(t.p,{children:[`The `,(0,r.jsx)(t.strong,{children:`Message`}),` component itself is non-interactive and does not receive keyboard focus.`]}),`
`,(0,r.jsxs)(t.p,{children:[`If the `,(0,r.jsx)(t.strong,{children:`Message`}),` is dismissible, the close icon button is focusable.`]}),`
`,(0,r.jsx)(l,{label:`General Keyboard Shortcuts`,level:3}),`
`,(0,r.jsxs)(t.p,{children:[`Pressing `,(0,r.jsx)(f,{children:`Tab`}),` moves focus to the close icon button (if available).`]}),`
`,(0,r.jsxs)(t.p,{children:[`Pressing `,(0,r.jsx)(f,{children:`Enter`}),` or `,(0,r.jsx)(f,{children:`Space`}),` while the close icon button is focused should trigger the action to dismiss the `,(0,r.jsx)(t.strong,{children:`Message`}),`.`]}),`
`,(0,r.jsxs)(t.p,{children:[`Pressing `,(0,r.jsx)(f,{children:`Shift`}),` + `,(0,r.jsx)(f,{children:`Tab`}),` moves focus to the previous interactive element.`]}),`
`,(0,r.jsx)(l,{label:`Accessibility`,level:2}),`
`,(0,r.jsx)(l,{label:`Structuring multiple Messages`,level:3}),`
`,(0,r.jsxs)(t.p,{children:[`When displaying multiple `,(0,r.jsx)(t.strong,{children:`Messages`}),` together, they should be wrapped within an unordered list of items (`,(0,r.jsx)(t.code,{children:`<ul>`}),` and `,(0,r.jsx)(t.code,{children:`<li>`}),`) to ensure a proper announcement by screen readers.`]}),`
`,(0,r.jsx)(s,{story:`AccessibilityGrouping`}),`
`,(0,r.jsxs)(t.p,{children:[(0,r.jsx)(u,{name:`circle-check`,style:{color:`var(--ods-semantic-color-content-success)`}}),` This structure ensures that assistive technologies announce `,(0,r.jsx)(t.strong,{children:`Messages`}),` as a list, rather than reading them as separate, unrelated announcements.`]}),`
`,(0,r.jsxs)(t.p,{children:[`Screen readers will announce the list, the number of items and the `,(0,r.jsx)(t.strong,{children:`Messages`}),` content.`]}),`
`,(0,r.jsx)(l,{label:`Alternative approach with ARIA roles`,level:3}),`
`,(0,r.jsxs)(t.p,{children:[`When modifying the HTML structure is not possible, use `,(0,r.jsx)(c,{href:`https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Reference/Roles/list_role`,children:`role="list"`}),` and `,(0,r.jsx)(c,{href:`https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Reference/Roles/listitem_role`,children:`role="listitem"`}),` to mimic list semantics.`]}),`
`,(0,r.jsx)(s,{story:`AccessibilityAlternativeGrouping`}),`
`,(0,r.jsx)(l,{label:`Setting the container ARIA role`,level:3}),`
`,(0,r.jsxs)(t.p,{children:[`When adding a new `,(0,r.jsx)(t.strong,{children:`Message`}),` element, its container should have a `,(0,r.jsx)(t.code,{children:`role`}),` attribute set, so that assistive
technologies can announce the content correctly.`]}),`
`,(0,r.jsxs)(t.p,{children:[`If you're adding a critical `,(0,r.jsx)(t.strong,{children:`Message`}),`, use `,(0,r.jsx)(t.code,{children:`role="alert"`}),`.
For non-critical `,(0,r.jsx)(t.strong,{children:`Messages`}),` (e.g., info, success, warning), use `,(0,r.jsx)(t.code,{children:`role="status"`}),`.`]}),`
`,(0,r.jsx)(s,{story:`AccessibilityRoles`}),`
`,(0,r.jsxs)(t.p,{children:[(0,r.jsx)(u,{name:`circle-check`,style:{color:`var(--ods-semantic-color-content-success)`}}),` This ensures that screen readers announce the `,(0,r.jsx)(t.strong,{children:`Message`}),` at the appropriate time without interrupting.`]})]})}function a(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(i,{...e})}):i(e)}function o(e,t){throw Error(`Expected `+(t?`component`:`object`)+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}export{a as default};