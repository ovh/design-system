import{i as e}from"./rolldown-runtime-Dd_uD5pT.js";import{t}from"./jsx-runtime-DREnUpxT.js";import{T as n}from"./index-CzEwg6AJ.js";var r=e(t());function i(e){let t={code:`code`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...n(),...e.components},{Canvas:i,ExternalLink:a,Heading:s,Icon:c,Kbd:l,Message:u,MessageBody:d,MessageIcon:f,Table:p}=t;return i||o(`Canvas`,!0),a||o(`ExternalLink`,!0),s||o(`Heading`,!0),c||o(`Icon`,!0),l||o(`Kbd`,!0),u||o(`Message`,!0),d||o(`MessageBody`,!0),f||o(`MessageIcon`,!0),p||o(`Table`,!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s,{label:`Introduction`,level:2}),`
`,(0,r.jsxs)(t.p,{children:[`This guide focuses on accessibility best practices specifically for developers integrating the `,(0,r.jsx)(t.strong,{children:`OVHcloud Design System`}),`.`]}),`
`,(0,r.jsx)(t.p,{children:`While our components are built with accessibility in mind, using semantic HTML elements and including the necessary ARIA attributes by default.
Nevertheless, ensuring full accessibility in your specific use case might require you to implement additional ARIA attributes, roles, and behaviors at the integration level.`}),`
`,(0,r.jsx)(t.p,{children:`However, depending on the context, you might need to enhance a component's accessibility. This guide will help you understand:`}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsx)(t.li,{children:`When and how to use ARIA properly`}),`
`,(0,r.jsx)(t.li,{children:`Common mistakes and best practices`}),`
`,(0,r.jsx)(t.li,{children:`How screen readers interpret different ARIA attributes`}),`
`]}),`
`,(0,r.jsxs)(t.p,{children:[`For broader accessibility information beyond the `,(0,r.jsx)(t.strong,{children:`OVHcloud Design System`}),`, consult our `,(0,r.jsx)(a,{href:`https://www.ovhcloud.com/fr/accessibility/`,children:`Accessibility Statement`}),` available on our official website.`]}),`
`,(0,r.jsx)(s,{label:`Before using ARIA`,level:3}),`
`,(0,r.jsx)(s,{label:`Consult the Accessibility section for each component`,level:4}),`
`,(0,r.jsxs)(t.p,{children:[`Each component in `,(0,r.jsx)(t.strong,{children:`OVHcloud Design System`}),` comes with a dedicated `,(0,r.jsx)(t.strong,{children:`"Accessibility"`}),` section that provides best practices and usage guidance.`]}),`
`,(0,r.jsx)(s,{label:`Be careful when adding extra ARIA attributes as ODS components may already handle it`,level:4}),`
`,(0,r.jsxs)(t.p,{children:[`To be as close as possible to the accessible experiences provided by modern browsers, `,(0,r.jsx)(t.strong,{children:`OVHcloud Design System`}),` aims to rely on semantic and native HTML elements whenever they are inherently well-suited for screen reader experiences.`]}),`
`,(0,r.jsxs)(t.p,{children:[`In addition to the predefined accessibility features of our components, you can find more guidance regarding accessible integration in the `,(0,r.jsx)(t.strong,{children:`"Accessibility"`}),` section.`]}),`
`,(0,r.jsx)(s,{label:`Essential ARIA attributes`,level:2}),`
`,(0,r.jsx)(s,{label:`aria-label: Providing an accessible name`,level:3}),`
`,(0,r.jsxs)(t.p,{children:[`Use `,(0,r.jsx)(a,{href:`https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label`,children:`aria-label`}),` when an element needs a descriptive name but has no visible text.`]}),`
`,(0,r.jsx)(i,{story:`AccessibilityBadPracticeIconOnly`,from:`button`}),`
`,(0,r.jsxs)(t.p,{children:[(0,r.jsx)(c,{name:`circle-xmark`,style:{color:`var(--ods-semantic-color-content-critical)`}}),` Screen readers will announce a button.`]}),`
`,(0,r.jsx)(i,{story:`AccessibilityIconOnly`,from:`button`}),`
`,(0,r.jsxs)(t.p,{children:[(0,r.jsx)(c,{name:`circle-check`,style:{color:`var(--ods-semantic-color-content-success)`}}),` Screen readers will announce a button and the aria-label.`]}),`
`,(0,r.jsx)(s,{label:`Related Sources`,level:4}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsxs)(t.li,{children:[`
`,(0,r.jsx)(a,{href:`https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label`,children:`MDN Documentation - aria-label`}),`
`]}),`
`,(0,r.jsxs)(t.li,{children:[`
`,(0,r.jsx)(a,{href:`https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#6.1`,children:`RGAA - 6.1`}),`
`]}),`
`,(0,r.jsxs)(t.li,{children:[`
`,(0,r.jsx)(a,{href:`https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#7.2`,children:`RGAA - 7.2`}),`
`]}),`
`,(0,r.jsxs)(t.li,{children:[`
`,(0,r.jsx)(a,{href:`https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#11.1`,children:`RGAA - 11.1`}),`
`]}),`
`,(0,r.jsxs)(t.li,{children:[`
`,(0,r.jsx)(a,{href:`https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#11.2`,children:`RGAA - 11.2`}),`
`]}),`
`,(0,r.jsxs)(t.li,{children:[`
`,(0,r.jsx)(a,{href:`https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#11.9`,children:`RGAA - 11.9`}),`
`]}),`
`]}),`
`,(0,r.jsx)(s,{label:`aria-labelledby: Referencing another element as a label`,level:3}),`
`,(0,r.jsxs)(t.p,{children:[`Use `,(0,r.jsx)(a,{href:`https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby`,children:`aria-labelledby`}),` to associate an element with an existing label (instead of duplicating text).`]}),`
`,(0,r.jsx)(i,{story:`AccessibilityBadPracticeLabelledBy`,from:`button`}),`
`,(0,r.jsxs)(t.p,{children:[(0,r.jsx)(c,{name:`circle-xmark`,style:{color:`var(--ods-semantic-color-content-critical)`}}),` Screen readers will announce a button.`]}),`
`,(0,r.jsx)(i,{story:`AccessibilityLabelledBy`,from:`button`}),`
`,(0,r.jsxs)(t.p,{children:[(0,r.jsx)(c,{name:`circle-check`,style:{color:`var(--ods-semantic-color-content-success)`}}),` When the `,(0,r.jsx)(t.strong,{children:`Button`}),` is focused, the screen reader should announce the linked label.`]}),`
`,(0,r.jsxs)(u,{dismissible:!1,style:{width:`100%`},children:[(0,r.jsx)(f,{name:`circle-info`}),(0,r.jsx)(d,{children:(0,r.jsxs)(t.p,{children:[`Use `,(0,r.jsx)(a,{href:`https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label`,children:`aria-label`}),` when there is no visible label, and `,(0,r.jsx)(a,{href:`https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby`,children:`aria-labelledby`}),` when there is one.`]})})]}),`
`,(0,r.jsx)(s,{label:`Related Sources`,level:4}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsxs)(t.li,{children:[`
`,(0,r.jsx)(a,{href:`https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby`,children:`MDN Documentation - aria-labelledby`}),`
`]}),`
`,(0,r.jsxs)(t.li,{children:[`
`,(0,r.jsx)(a,{href:`https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#6.1`,children:`RGAA - 6.1`}),`
`]}),`
`,(0,r.jsxs)(t.li,{children:[`
`,(0,r.jsx)(a,{href:`https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#7.2`,children:`RGAA - 7.2`}),`
`]}),`
`,(0,r.jsxs)(t.li,{children:[`
`,(0,r.jsx)(a,{href:`https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#11.1`,children:`RGAA - 11.1`}),`
`]}),`
`,(0,r.jsxs)(t.li,{children:[`
`,(0,r.jsx)(a,{href:`https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#11.2`,children:`RGAA - 11.2`}),`
`]}),`
`,(0,r.jsxs)(t.li,{children:[`
`,(0,r.jsx)(a,{href:`https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#11.5`,children:`RGAA - 11.5`}),`
`]}),`
`,(0,r.jsxs)(t.li,{children:[`
`,(0,r.jsx)(a,{href:`https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#11.9`,children:`RGAA - 11.9`}),`
`]}),`
`]}),`
`,(0,r.jsx)(s,{label:`aria-describedby: Providing additional context`,level:3}),`
`,(0,r.jsxs)(t.p,{children:[(0,r.jsx)(a,{href:`https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-describedby`,children:`aria-describedby`}),` associates an interactive element with extra information, ensuring screen reader users receive helpful guidance without disrupting the UI.`]}),`
`,(0,r.jsx)(s,{label:`Difference between aria-labelledby and aria-describedby`,level:4}),`
`,(0,r.jsxs)(p,{children:[(0,r.jsx)(`thead`,{children:(0,r.jsxs)(`tr`,{children:[(0,r.jsx)(`th`,{scope:`col`,children:`Attribute`}),(0,r.jsx)(`th`,{scope:`col`,children:`Purpose`}),(0,r.jsx)(`th`,{scope:`col`,children:`When to use it?`}),(0,r.jsx)(`th`,{scope:`col`,children:`Reading order`})]})}),(0,r.jsxs)(`tbody`,{children:[(0,r.jsxs)(`tr`,{children:[(0,r.jsx)(`th`,{scope:`row`,style:{textAlign:`left`},children:`aria-labelledby`}),(0,r.jsx)(`td`,{children:`Defines the main context of the element`}),(0,r.jsx)(`td`,{children:`When an element has no visible text or needs an external label`}),(0,r.jsx)(`td`,{children:`Read first by the screen reader`})]}),(0,r.jsxs)(`tr`,{children:[(0,r.jsx)(`th`,{scope:`row`,style:{textAlign:`left`},children:`aria-describedby`}),(0,r.jsx)(`td`,{children:`Provides additional description`}),(0,r.jsx)(`td`,{children:`When secondary information is needed to clarify context`}),(0,r.jsx)(`td`,{children:`Read after the main label`})]})]})]}),`
`,(0,r.jsx)(s,{label:`When to use aria-labelledby vs aria-describedby?`,level:4}),`
`,(0,r.jsxs)(p,{children:[(0,r.jsx)(`thead`,{children:(0,r.jsxs)(`tr`,{children:[(0,r.jsx)(`th`,{scope:`col`,children:`Use case`}),(0,r.jsx)(`th`,{scope:`col`,children:(0,r.jsx)(`code`,{children:`aria-labelledby`})}),(0,r.jsx)(`th`,{scope:`col`,children:(0,r.jsx)(`code`,{children:`aria-describedby`})})]})}),(0,r.jsxs)(`tbody`,{children:[(0,r.jsxs)(`tr`,{children:[(0,r.jsx)(`th`,{scope:`row`,style:{textAlign:`left`},children:`Use an external / hidden label`}),(0,r.jsx)(`td`,{style:{textAlign:`center`},children:(0,r.jsx)(c,{name:`circle-check`,style:{color:`var(--ods-semantic-color-content-success)`}})}),(0,r.jsx)(`td`,{style:{textAlign:`center`},children:(0,r.jsx)(c,{name:`circle-xmark`,style:{color:`var(--ods-semantic-color-content-critical)`}})})]}),(0,r.jsxs)(`tr`,{children:[(0,r.jsx)(`th`,{scope:`row`,style:{textAlign:`left`},children:`Add complementary information`}),(0,r.jsx)(`td`,{style:{textAlign:`center`},children:(0,r.jsx)(c,{name:`circle-xmark`,style:{color:`var(--ods-semantic-color-content-critical)`}})}),(0,r.jsx)(`td`,{style:{textAlign:`center`},children:(0,r.jsx)(c,{name:`circle-check`,style:{color:`var(--ods-semantic-color-content-success)`}})})]}),(0,r.jsxs)(`tr`,{children:[(0,r.jsx)(`th`,{scope:`row`,style:{textAlign:`left`},children:`Associate multiple elements to form a label (field group)`}),(0,r.jsx)(`td`,{style:{textAlign:`center`},children:(0,r.jsx)(c,{name:`circle-check`,style:{color:`var(--ods-semantic-color-content-success)`}})}),(0,r.jsx)(`td`,{style:{textAlign:`center`},children:(0,r.jsx)(c,{name:`circle-xmark`,style:{color:`var(--ods-semantic-color-content-critical)`}})})]}),(0,r.jsxs)(`tr`,{children:[(0,r.jsx)(`th`,{scope:`row`,style:{textAlign:`left`},children:`Provide contextual help / information (e.g., input rules, field error)`}),(0,r.jsx)(`td`,{style:{textAlign:`center`},children:(0,r.jsx)(c,{name:`circle-xmark`,style:{color:`var(--ods-semantic-color-content-critical)`}})}),(0,r.jsx)(`td`,{style:{textAlign:`center`},children:(0,r.jsx)(c,{name:`circle-check`,style:{color:`var(--ods-semantic-color-content-success)`}})})]})]})]}),`
`,(0,r.jsx)(i,{story:`AccessibilityBadPracticesAria`,from:`modal`}),`
`,(0,r.jsxs)(t.p,{children:[(0,r.jsx)(c,{name:`circle-xmark`,style:{color:`var(--ods-semantic-color-content-critical)`}}),` Screen readers won't announce the `,(0,r.jsx)(t.strong,{children:`Modal`}),` content.`]}),`
`,(0,r.jsx)(i,{story:`AccessibilityAriaLabelledBy`,from:`modal`}),`
`,(0,r.jsxs)(t.p,{children:[(0,r.jsx)(c,{name:`circle-check`,style:{color:`var(--ods-semantic-color-content-success)`}}),` Screen readers will announce the `,(0,r.jsx)(t.strong,{children:`Modal`}),` content.`]}),`
`,(0,r.jsx)(s,{label:`Related Sources`,level:4}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsxs)(t.li,{children:[`
`,(0,r.jsx)(a,{href:`https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-describedby`,children:`MDN Documentation - aria-describedby`}),`
`]}),`
`,(0,r.jsxs)(t.li,{children:[`
`,(0,r.jsx)(a,{href:`https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#11.5`,children:`RGAA - 11.5`}),`
`]}),`
`,(0,r.jsxs)(t.li,{children:[`
`,(0,r.jsx)(a,{href:`https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#11.10`,children:`RGAA - 11.10`}),`
`]}),`
`]}),`
`,(0,r.jsx)(s,{label:`aria-hidden: Hiding elements from screen readers`,level:3}),`
`,(0,r.jsxs)(t.p,{children:[`Use `,(0,r.jsx)(a,{href:`https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-hidden`,children:`aria-hidden`}),` set to `,(0,r.jsx)(t.code,{children:`"true"`}),` on elements that are purely decorative and should not be announced by screen readers.`]}),`
`,(0,r.jsx)(i,{story:`AccessibilityBadPracticeDecorative`,from:`icon`}),`
`,(0,r.jsxs)(t.p,{children:[(0,r.jsx)(c,{name:`circle-xmark`,style:{color:`var(--ods-semantic-color-content-critical)`}}),` Some screen readers will announce the icon and detect the presence of the image.`]}),`
`,(0,r.jsxs)(u,{dismissible:!1,style:{width:`100%`},children:[(0,r.jsx)(f,{name:`circle-info`}),(0,r.jsx)(d,{children:(0,r.jsx)(t.p,{children:`Depending on the screen reader, some additional information might be read aloud, which is confusing and unhelpful.`})})]}),`
`,(0,r.jsx)(i,{story:`Decorative`,from:`icon`}),`
`,(0,r.jsxs)(t.p,{children:[(0,r.jsx)(c,{name:`circle-check`,style:{color:`var(--ods-semantic-color-content-success)`}}),` Screen readers will announce nothing, the icon is ignored.`]}),`
`,(0,r.jsx)(s,{label:`Related Sources`,level:4}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsxs)(t.li,{children:[`
`,(0,r.jsx)(a,{href:`https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-hidden`,children:`MDN Documentation - aria-hidden`}),`
`]}),`
`,(0,r.jsxs)(t.li,{children:[`
`,(0,r.jsx)(a,{href:`https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#11.2`,children:`RGAA - 11.2`}),`
`]}),`
`]}),`
`,(0,r.jsx)(s,{label:`aria-busy: Indicating loading state`,level:3}),`
`,(0,r.jsx)(t.p,{children:`When a section of the UI is loading, users should be informed that the content is not yet ready.`}),`
`,(0,r.jsxs)(t.p,{children:[(0,r.jsx)(a,{href:`https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-busy`,children:`aria-busy`}),` set to `,(0,r.jsx)(t.code,{children:`"true"`}),` signals that an element is currently in a loading state. Once loading is complete, `,(0,r.jsx)(t.code,{children:`aria-busy`}),` should be set to `,(0,r.jsx)(t.code,{children:`"false"`}),`.`]}),`
`,(0,r.jsx)(i,{story:`AccessibilityBadPracticeLoading`,from:`skeleton`}),`
`,(0,r.jsxs)(t.p,{children:[(0,r.jsx)(c,{name:`circle-xmark`,style:{color:`var(--ods-semantic-color-content-critical)`}}),` Screen readers will give no indication that the content is loading. The screen reader may start reading the page without knowing that this section is waiting to be updated.`]}),`
`,(0,r.jsx)(i,{story:`AccessibilityLoading`,from:`skeleton`}),`
`,(0,r.jsxs)(t.p,{children:[(0,r.jsx)(c,{name:`circle-xmark`,style:{color:`var(--ods-semantic-color-content-success)`}}),` Screen readers understand that the content is not yet ready, so they delay announcing or interacting with it.`]}),`
`,(0,r.jsx)(s,{label:`Related Sources`,level:4}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsxs)(t.li,{children:[`
`,(0,r.jsx)(a,{href:`https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-busy`,children:`MDN Documentation - aria-busy`}),`
`]}),`
`,(0,r.jsxs)(t.li,{children:[`
`,(0,r.jsx)(a,{href:`https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#7.4`,children:`RGAA - 7.4`}),`
`]}),`
`]}),`
`,(0,r.jsx)(s,{label:`status role: Announcing dynamic status changes`,level:3}),`
`,(0,r.jsxs)(t.p,{children:[`Use `,(0,r.jsx)(a,{href:`https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Reference/Roles/status_role`,children:`status role`}),` to ensure that important updates are announced by screen readers without disrupting focus.`]}),`
`,(0,r.jsx)(i,{story:`AccessibilityBadPracticesRoleStatus`,from:`button`}),`
`,(0,r.jsxs)(t.p,{children:[(0,r.jsx)(c,{name:`circle-xmark`,style:{color:`var(--ods-semantic-color-content-critical)`}}),` Screen readers will announce the button and its label.`]}),`
`,(0,r.jsx)(i,{story:`AccessibilityRoleStatus`,from:`button`}),`
`,(0,r.jsxs)(t.p,{children:[(0,r.jsx)(c,{name:`circle-check`,style:{color:`var(--ods-semantic-color-content-success)`}}),` Screen readers will announce the button and its label, and the message on click or press.`]}),`
`,(0,r.jsxs)(u,{dismissible:!1,style:{width:`100%`},children:[(0,r.jsx)(f,{name:`circle-info`}),(0,r.jsx)(d,{children:(0,r.jsx)(t.p,{children:`It also matters since it keeps focus on the button, avoiding disruption for keyboard users.`})})]}),`
`,(0,r.jsx)(s,{label:`Related Sources`,level:4}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsxs)(t.li,{children:[`
`,(0,r.jsx)(a,{href:`https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Reference/Roles/status_role`,children:`MDN Documentation - status role`}),`
`]}),`
`,(0,r.jsxs)(t.li,{children:[`
`,(0,r.jsx)(a,{href:`https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#7.4`,children:`RGAA - 7.4`}),`
`]}),`
`]}),`
`,(0,r.jsx)(s,{label:`alert role: Announcing important messages`,level:3}),`
`,(0,r.jsxs)(t.p,{children:[`Use `,(0,r.jsx)(a,{href:`https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Reference/Roles/alert_role`,children:`alert role`}),` for critical, time-sensitive messages that require immediate attention. Unlike `,(0,r.jsx)(t.code,{children:`status role`}),`, `,(0,r.jsx)(t.code,{children:`alert role`}),` is announced by screen readers, even if the user is focused elsewhere.`]}),`
`,(0,r.jsx)(i,{story:`AccessibilityBadPracticesRoleAlert`,from:`button`}),`
`,(0,r.jsxs)(t.p,{children:[(0,r.jsx)(c,{name:`circle-xmark`,style:{color:`var(--ods-semantic-color-content-critical)`}}),` Screen readers won’t immediately announce the error message when it appears, unless the user manually navigates to it.`]}),`
`,(0,r.jsx)(i,{story:`AccessibilityRoleAlert`,from:`button`}),`
`,(0,r.jsxs)(t.p,{children:[(0,r.jsx)(c,{name:`circle-check`,style:{color:`var(--ods-semantic-color-content-success)`}}),` Screen readers will announce the error message, even when the user is focused elsewhere.`]}),`
`,(0,r.jsx)(s,{label:`Related Sources`,level:4}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsxs)(t.li,{children:[`
`,(0,r.jsx)(a,{href:`https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Reference/Roles/alert_role`,children:`MDN Documentation - alert role`}),`
`]}),`
`,(0,r.jsxs)(t.li,{children:[`
`,(0,r.jsx)(a,{href:`https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#7.4`,children:`RGAA - 7.4`}),`
`]}),`
`]}),`
`,(0,r.jsx)(s,{label:`radiogroup and radio roles: Making custom radio controls accessible`,level:3}),`
`,(0,r.jsxs)(t.p,{children:[(0,r.jsx)(a,{href:`https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Reference/Roles/radiogroup_role`,children:`radiogroup`}),` and `,(0,r.jsx)(a,{href:`https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Reference/Roles/radio_role`,children:`radio`}),` roles ensure that screen readers correctly interpret and announce the selection.`]}),`
`,(0,r.jsx)(i,{story:`AccessibilityBadPracticeRating`,from:`icon`}),`
`,(0,r.jsxs)(t.p,{children:[(0,r.jsx)(c,{name:`circle-xmark`,style:{color:`var(--ods-semantic-color-content-critical)`}}),` Screen readers will read each star individually with no context of selection group.`]}),`
`,(0,r.jsx)(i,{story:`AccessibilityRating`,from:`icon`}),`
`,(0,r.jsxs)(t.p,{children:[(0,r.jsx)(c,{name:`circle-check`,style:{color:`var(--ods-semantic-color-content-success)`}}),` Screen readers will announce a radio button, its label and aria-label, which item is focused on out of the total amount of items and that it is a radio group.`]}),`
`,(0,r.jsxs)(u,{dismissible:!1,style:{width:`100%`},children:[(0,r.jsx)(f,{name:`circle-info`}),(0,r.jsx)(d,{children:(0,r.jsxs)(t.p,{children:[`Please note that you should navigate within a radio group using `,(0,r.jsx)(l,{children:`Arrow`}),` keys.`]})})]}),`
`,(0,r.jsxs)(t.p,{children:[`In the example above, `,(0,r.jsx)(t.code,{children:`tabindex="-1"`}),` is applied to all elements except the currently selected one. This is because only one item in a radio group should be focusable at a time.
Users can navigate between options using the `,(0,r.jsx)(l,{children:`Arrow`}),` keys, rather than the `,(0,r.jsx)(l,{children:`Tab`}),` key, which moves focus to the next interactive element outside the group.`]}),`
`,(0,r.jsxs)(t.p,{children:[`For more details, see `,(0,r.jsx)(a,{href:`https://www.w3.org/WAI/ARIA/apg/patterns/radio/examples/radio/`,children:`Managing focus within components using a roving tabindex`})]}),`
`,(0,r.jsx)(s,{label:`Sources`,level:4}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsxs)(t.li,{children:[`
`,(0,r.jsx)(a,{href:`https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/radiogroup_role`,children:`MDN Documentation - radiogroup`}),`
`]}),`
`,(0,r.jsxs)(t.li,{children:[`
`,(0,r.jsx)(a,{href:`https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/radio_role`,children:`MDN Documentation - radio`}),`
`]}),`
`,(0,r.jsxs)(t.li,{children:[`
`,(0,r.jsx)(a,{href:`https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#11.5`,children:`RGAA - 11.5`}),`
`]}),`
`]}),`
`,(0,r.jsx)(s,{label:`Final Accessibility check for ARIA roles`,level:2}),`
`,(0,r.jsx)(s,{label:`Validate the screen reader behavior`,level:3}),`
`,(0,r.jsx)(t.p,{children:`Test with a screen reader to ensure that your changes are communicated correctly.`}),`
`,(0,r.jsx)(t.p,{children:`Ensure that actions such as button clicks, form submissions, and changes in state are clearly communicated to the user.`}),`
`,(0,r.jsx)(s,{label:`Testing Environment`,level:3}),`
`,(0,r.jsxs)(t.p,{children:[`For consistent testing across different platforms and screen readers, here is the testing setup used by `,(0,r.jsx)(t.strong,{children:`OVHcloud Design System`}),`, based on the recommendations from RGAA (France):`]}),`
`,(0,r.jsxs)(p,{children:[(0,r.jsx)(`thead`,{children:(0,r.jsxs)(`tr`,{children:[(0,r.jsx)(`th`,{scope:`col`,children:`Assistive Technology`}),(0,r.jsx)(`th`,{scope:`col`,children:`Browser`})]})}),(0,r.jsxs)(`tbody`,{children:[(0,r.jsxs)(`tr`,{style:{textAlign:`center`},children:[(0,r.jsx)(`td`,{children:`NVDA`}),(0,r.jsx)(`td`,{children:`Firefox`})]}),(0,r.jsxs)(`tr`,{style:{textAlign:`center`},children:[(0,r.jsx)(`td`,{children:`JAWS`}),(0,r.jsx)(`td`,{children:`Firefox or Internet Explorer`})]}),(0,r.jsxs)(`tr`,{style:{textAlign:`center`},children:[(0,r.jsx)(`td`,{children:`Safari`}),(0,r.jsx)(`td`,{children:`VoiceOver`})]})]})]}),`
`,(0,r.jsx)(s,{label:`Resources to help you test accessibility`,level:2}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(a,{href:`https://accessibilite.numerique.gouv.fr`,children:`Accessibility France Guidelines (FR)`}),`: The French government's official accessibility resource for best practices and testing criteria`]}),`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(a,{href:`https://www.w3.org/TR/WCAG21`,children:`Web Content Accessibility Guidelines (WCAG) 2.1`}),`: The internationally recognized standards for web accessibility, providing guidelines for creating more accessible web content`]}),`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(a,{href:`https://webaim.org/intro`,children:`WebAIM: Introduction to Web Accessibility`}),`: A guide to the principles of web accessibility from WebAIM`]}),`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(a,{href:`https://webaim.org/techniques/semanticstructure`,children:`WebAIM: Semantic Structure`}),`: Learn about the importance of semantic HTML and how it impacts accessibility`]}),`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(a,{href:`https://webaim.org/resources/contrastchecker`,children:`WebAIM: Contrast Checker`}),`: Tool to ensure sufficient color contrast between text and background for readability`]}),`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(a,{href:`https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests`,children:`French Accessibility Testing Methodology (FR)`}),`: An in-depth guide to testing web accessibility in France`]}),`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(a,{href:`https://accessibilite.numerique.gouv.fr/methode/environnement-de-test`,children:`French Testing Environment (FR)`}),`: Official guidelines on the tools and technologies to use when testing accessibility on desktop computers`]}),`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(a,{href:`https://www.w3.org/WAI/tutorials/images/decision-tree`,children:`W3C Tutorial on Alternative Text for Images`}),`: A decision tree for writing appropriate alternative text for images`]}),`
`]})]})}function a(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(i,{...e})}):i(e)}function o(e,t){throw Error(`Expected `+(t?`component`:`object`)+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}export{a as default};