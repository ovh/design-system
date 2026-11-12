import{i as e}from"./rolldown-runtime-Dd_uD5pT.js";import{t}from"./jsx-runtime-DREnUpxT.js";import{T as n}from"./index-CzEwg6AJ.js";var r=e(t());function i(e){let t={code:`code`,em:`em`,li:`li`,ol:`ol`,p:`p`,strong:`strong`,ul:`ul`,...n(),...e.components},{Anatomy:i,BestPractices:a,Canvas:s,ExternalLink:c,Heading:l,Icon:u,IdentityCard:d}=t;return i||o(`Anatomy`,!0),a||o(`BestPractices`,!0),s||o(`Canvas`,!0),c||o(`ExternalLink`,!0),l||o(`Heading`,!0),u||o(`Icon`,!0),d||o(`IdentityCard`,!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.p,{children:(0,r.jsxs)(t.em,{children:[(0,r.jsx)(t.strong,{children:`Badge`}),` show concise metadata or the current status for an item, in a compact format.`]})}),`
`,(0,r.jsx)(s,{story:`Overview`,source:`none`}),`
`,(0,r.jsx)(l,{label:`Overview`,level:2}),`
`,(0,r.jsx)(d,{aliases:[`Chip (previous name)`,`Label`],figmaLink:`https://www.figma.com/design/9jDDTcR4a9jPRFcdjawAlf/ODS---UI-Kit?node-id=3-22285`,githubUrl:`https://github.com/ovh/design-system/tree/master/packages/ods-react/src/components/badge`,name:`Badge`,children:(0,r.jsxs)(t.p,{children:[`A `,(0,r.jsx)(t.strong,{children:`Badge`}),` component labels an item, a keyword or a status. They are non-interactive and used inline, next to the
title or text they complete.`]})}),`
`,(0,r.jsx)(l,{label:`Usage`,level:2}),`
`,(0,r.jsx)(t.p,{children:`Badges are used for items that need to be labelled or categorized.`}),`
`,(0,r.jsx)(t.p,{children:`It can refer to these examples of enhanced data :`}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsx)(t.li,{children:`A notification status`}),`
`,(0,r.jsx)(t.li,{children:`A marketing category`}),`
`,(0,r.jsx)(t.li,{children:`Additional product information`}),`
`]}),`
`,(0,r.jsx)(l,{label:`Notification Status`,level:3}),`
`,(0,r.jsx)(t.p,{children:`The notification status can be used next to a menu entry, a label or an option ; in dashboards, Table or summary panels.`}),`
`,(0,r.jsx)(t.p,{children:`There are four different sub-types of status, in order of severity:`}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:`Error`}),` : Reserved for errors, malfunctions, as well as critical issues. System is unusable, or an action must be taken immediately.`]}),`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:`Warning`}),` : Reserved for critical messages that need the user attention and acknowledgment, but might not cause errors.`]}),`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:`Information`}),` : Provides information to users in context. Shouldn't replace regular content.`]}),`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:`Success`}),` : Reserved to provide to a static persistent success message.`]}),`
`]}),`
`,(0,r.jsx)(l,{label:`Marketing category`,level:3}),`
`,(0,r.jsx)(t.p,{children:`The marketing category is used in product Tiles or product descriptions; used as - temporary or permanent - marketing highlight.`}),`
`,(0,r.jsxs)(t.p,{children:[`It can contain categories like `,(0,r.jsx)(t.em,{children:`"Promotion", "Summer Deals", "Black Friday", "Limited Edition", "Flash Sales"`}),`, ...`]}),`
`,(0,r.jsx)(l,{label:`Additional product information`,level:3}),`
`,(0,r.jsx)(t.p,{children:`The product status is used in product Tiles or product descriptions, it is bound inside the product structure to add tags and information.`}),`
`,(0,r.jsx)(t.p,{children:`All product statuses are of type "New", "Limited edition", "Sold out"`}),`
`,(0,r.jsx)(l,{label:`Dos & Don'ts`,level:3}),`
`,(0,r.jsx)(a,{donts:[`- Don't use Badge as interactive element (e.g., buttons or filters)`,`- Don't write long sentences or complex phrases inside a Badge`,`- Don't use too many Badges in the same line or component, as this creates visual clutter`,`- Don't place Badge far from the content they describe, proximity reinforces meaning`],dos:[`- Keep the label short, specific, and readable (ideally one or two words)`,`- Use Badge to indicate status, category, or metadata`,`- Place Badge inline with related content, such as next to titles or list items`,`- Use Badge to complement information, not replace it. They should add clarity, not create ambiguity`]}),`
`,(0,r.jsx)(l,{label:`Best Practices in Context`,level:3}),`
`,(0,r.jsx)(i,{src:`components/badge/anatomy.png`}),`
`,(0,r.jsxs)(t.ol,{children:[`
`,(0,r.jsx)(t.li,{children:(0,r.jsx)(t.strong,{children:`Badge`})}),`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:`Icon`}),` - optional (left or right)`]}),`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:`Label`}),` - optional (specific use case only)`]}),`
`]}),`
`,(0,r.jsx)(l,{label:`Placement`,level:2}),`
`,(0,r.jsx)(t.p,{children:`Since it provides extra information to a sibling element, in can be used inside components in various places, referring to the nature of its environment.`}),`
`,(0,r.jsxs)(t.p,{children:[`Multiple `,(0,r.jsx)(t.strong,{children:`Badges`}),` can be displayed:`]}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsx)(t.li,{children:`on a single line`}),`
`,(0,r.jsx)(t.li,{children:`stacked vertically`}),`
`]}),`
`,(0,r.jsx)(l,{label:`Behavior`,level:2}),`
`,(0,r.jsxs)(t.p,{children:[`As the `,(0,r.jsx)(t.strong,{children:`Badge`}),` is an informational component, its default behavior is being read-only.`]}),`
`,(0,r.jsxs)(t.p,{children:[`An icon can be displayed on the left or right of the `,(0,r.jsx)(t.strong,{children:`Badge`}),` label content. Icon-only `,(0,r.jsx)(t.strong,{children:`Badge`}),` also exists, but it must meet accessibility requirements. See Accessibility section below.`]}),`
`,(0,r.jsx)(l,{label:`Variation`,level:2}),`
`,(0,r.jsx)(l,{label:`Status`,level:3}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:`Accent`}),`: highlight an item tied to the brand, without conveying any particular status.`]}),`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:`Neutral`}),`: label an item without conveying any particular status or urgency.`]}),`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:`Information`}),` `,(0,r.jsx)(t.em,{children:`(default)`}),`: display neutral or informational messages, such as updates, notifications, or general status.`]}),`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:`Success`}),`: indicate positive outcomes or successful actions, such as completed tasks or achievements.`]}),`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:`Warning`}),`: alert users to potential issues or cautionary information, signaling that attention is needed.`]}),`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:`Critical`}),`: highlight severe issues or errors that require immediate attention.`]}),`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:`Alpha`}),` and `,(0,r.jsx)(t.strong,{children:`Beta`}),`: flag a feature or a product in an early, not yet stable, stage.`]}),`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:`New`}),`: flag a recently released feature or product.`]}),`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:`Promotion`}),`: highlight a commercial offer, such as a discount or a limited-time deal.`]}),`
`]}),`
`,(0,r.jsx)(l,{label:`Emphasis`,level:3}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:`High`}),`: tinted background with a light border, for a status that must stand out at a glance.`]}),`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:`Medium`}),` `,(0,r.jsx)(t.em,{children:`(default)`}),`: colored border and text on the raised surface, like the medium `,(0,r.jsx)(t.strong,{children:`Message`}),`, for statuses that inform without competing with the content around them.`]}),`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:`Low`}),`: colored text only, without background, for dense contexts such as tables or lists. The label must carry the meaning on its own, as the color is the only status cue.`]}),`
`]}),`
`,(0,r.jsxs)(t.p,{children:[`The promotional statuses (`,(0,r.jsx)(t.strong,{children:`Alpha`}),`, `,(0,r.jsx)(t.strong,{children:`Beta`}),`, `,(0,r.jsx)(t.strong,{children:`New`}),` and `,(0,r.jsx)(t.strong,{children:`Promotion`}),`) keep their filled look in every emphasis.`]}),`
`,(0,r.jsx)(t.p,{children:`The blue-jeans theme keeps the v19 tinted look in high, without border, and the v19 widths.`}),`
`,(0,r.jsx)(s,{story:`Emphasis`}),`
`,(0,r.jsx)(l,{label:`Size`,level:3}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:`Small`}),`: compact and unobtrusive counts or statuses, suitable for tight spaces and minimalistic designs.`]}),`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:`Medium`}),` `,(0,r.jsx)(t.em,{children:`(default)`}),`: main size for displaying `,(0,r.jsx)(t.strong,{children:`Badges`}),`.`]}),`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:`Large`}),`: prominent and easily noticeable counts or statuses, suitable for emphasizing important information.`]}),`
`]}),`
`,(0,r.jsx)(l,{label:`Navigation`,level:2}),`
`,(0,r.jsxs)(t.p,{children:[`The `,(0,r.jsx)(t.strong,{children:`Badge`}),` component is non-interactive and does not receive keyboard focus. It is purely decorative and used to label an item, keyword, or status.`]}),`
`,(0,r.jsx)(l,{label:`Accessibility`,level:2}),`
`,(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:`Badges`}),` are read by screen readers as regular text.`]}),`
`,(0,r.jsxs)(t.p,{children:[`Icon-only `,(0,r.jsx)(t.strong,{children:`Badge`}),` is only used in very specific cases. In that case, it should be accompanied by a tooltip to provide further context.`]}),`
`,(0,r.jsxs)(t.p,{children:[`The accessibility of multiple `,(0,r.jsx)(t.strong,{children:`Badges`}),` presented as a collection must be considered during its implementation.
Their grouping should be made clear to assistive technologies and proper ARIA attributes must be added to ensure full accessibility.`]}),`
`,(0,r.jsx)(l,{label:`Icon-only Badge`,level:3}),`
`,(0,r.jsxs)(t.p,{children:[`If a `,(0,r.jsx)(t.strong,{children:`Badge`}),` contains only an icon, it must include an `,(0,r.jsx)(c,{href:`https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label`,children:`aria-label`}),` to provide context.`]}),`
`,(0,r.jsx)(s,{story:`AccessibilityAriaLabel`}),`
`,(0,r.jsxs)(t.p,{children:[(0,r.jsx)(u,{name:`circle-check`,style:{color:`var(--ods-semantic-color-content-success)`}}),` Screen readers will announce the aria-label instead of ignoring the `,(0,r.jsx)(t.strong,{children:`Badge`}),`.`]}),`
`,(0,r.jsxs)(t.p,{children:[`Since an icon-only `,(0,r.jsx)(t.strong,{children:`Badge`}),` may lack detailed information, attach a tooltip and use an `,(0,r.jsx)(c,{href:`https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby`,children:`aria-labelledby`}),` when extra context is needed:`]}),`
`,(0,r.jsx)(s,{story:`AccessibilityWithTooltip`}),`
`,(0,r.jsxs)(t.p,{children:[(0,r.jsx)(u,{name:`circle-check`,style:{color:`var(--ods-semantic-color-content-success)`}}),` Screen readers will announce the `,(0,r.jsx)(t.strong,{children:`Tooltip`}),` content when focusing on the `,(0,r.jsx)(t.strong,{children:`Badge`}),`.`]}),`
`,(0,r.jsx)(l,{label:`Structuring groups of Badges with lists`,level:3}),`
`,(0,r.jsxs)(t.p,{children:[`When displaying multiple `,(0,r.jsx)(t.strong,{children:`Badges`}),` together, they should be wrapped within an unordered list of items (`,(0,r.jsx)(t.code,{children:`<ul>`}),` and `,(0,r.jsx)(t.code,{children:`<li>`}),`) to ensure a proper announcement by screen readers.`]}),`
`,(0,r.jsx)(s,{story:`AccessibilityGrouping`}),`
`,(0,r.jsxs)(t.p,{children:[(0,r.jsx)(u,{name:`circle-check`,style:{color:`var(--ods-semantic-color-content-success)`}}),` This structure ensures that assistive technologies announce `,(0,r.jsx)(t.strong,{children:`Badges`}),` as a list, rather than reading them as separate, unrelated announcements.
Screen readers will announce the list, the number of items and the `,(0,r.jsx)(t.strong,{children:`Badges`}),` content.`]}),`
`,(0,r.jsx)(l,{label:`Alternative approach with ARIA roles`,level:3}),`
`,(0,r.jsxs)(t.p,{children:[`When modifying the HTML structure is not possible, use `,(0,r.jsx)(c,{href:`https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Reference/Roles/list_role`,children:`role="list"`}),` and `,(0,r.jsx)(c,{href:`https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Reference/Roles/listitem_role`,children:`role="listitem"`}),` to mimic list semantics.`]}),`
`,(0,r.jsx)(s,{story:`AccessibilityAlternativeGrouping`}),`
`,(0,r.jsxs)(t.p,{children:[(0,r.jsx)(u,{name:`circle-check`,style:{color:`var(--ods-semantic-color-content-success)`}}),` This ensures that screen readers recognize the `,(0,r.jsx)(t.strong,{children:`Badges`}),` as a structured list even without native `,(0,r.jsx)(t.code,{children:`<ul>`}),` and `,(0,r.jsx)(t.code,{children:`<li>`}),` elements.`]})]})}function a(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(i,{...e})}):i(e)}function o(e,t){throw Error(`Expected `+(t?`component`:`object`)+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}export{a as default};