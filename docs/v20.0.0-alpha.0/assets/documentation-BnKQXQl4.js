import{i as e}from"./rolldown-runtime-Dd_uD5pT.js";import{t}from"./jsx-runtime-DREnUpxT.js";import{T as n}from"./index-CdRG7ZE_.js";var r=e(t());function i(e){let t={code:`code`,em:`em`,li:`li`,ol:`ol`,p:`p`,strong:`strong`,ul:`ul`,...n(),...e.components},{Anatomy:i,BestPractices:a,Canvas:s,DocLink:c,ExternalLink:l,Heading:u,Icon:d,IdentityCard:f,Kbd:p}=t;return i||o(`Anatomy`,!0),a||o(`BestPractices`,!0),s||o(`Canvas`,!0),c||o(`DocLink`,!0),l||o(`ExternalLink`,!0),u||o(`Heading`,!0),d||o(`Icon`,!0),f||o(`IdentityCard`,!0),p||o(`Kbd`,!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.p,{children:(0,r.jsxs)(t.em,{children:[`A `,(0,r.jsx)(t.strong,{children:`Tag`}),` component is used to display keywords or categories, with a removal feature.`]})}),`
`,(0,r.jsx)(s,{story:`Overview`,source:`none`}),`
`,(0,r.jsx)(u,{label:`Overview`,level:2}),`
`,(0,r.jsxs)(f,{aliases:[`Chip (previous name)`,`Label`,`Pill`],figmaLink:`https://www.figma.com/design/9jDDTcR4a9jPRFcdjawAlf/ODS---UI-Kit?node-id=52-11580`,githubUrl:`https://github.com/ovh/design-system/tree/master/packages/ods-react/src/components/tag`,name:`Tag`,children:[(0,r.jsxs)(t.p,{children:[`The `,(0,r.jsx)(t.strong,{children:`Tag`}),` component is a small UI element used to represent metadata, keywords, categories, or other contextual
information.`]}),(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:`Tags`}),` are removable and can include an icon as additional prefix element.`]}),(0,r.jsx)(t.p,{children:`They are commonly used in interfaces for categorizing content, filtering, and adding contextual details.`})]}),`
`,(0,r.jsx)(u,{label:`Usage`,level:2}),`
`,(0,r.jsxs)(t.p,{children:[`Use the `,(0,r.jsx)(t.strong,{children:`Tag`}),` component to display labels, categories, or metadata that describe or classify content.`]}),`
`,(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:`Tags`}),` often appear in contexts like filters and lists.`]}),`
`,(0,r.jsxs)(t.p,{children:[`Ensure that `,(0,r.jsx)(t.strong,{children:`Tags`}),` are clearly labelled and easily distinguishable from other UI elements.`]}),`
`,(0,r.jsx)(u,{label:`Dos & Don'ts`,level:3}),`
`,(0,r.jsx)(a,{donts:[`- Don't use a Tag if there is no interaction expected, prefer the Badge component instead`,`- Don't use full sentences or long text in a Tag label`,`- Don't mix Tags with different behaviors (e.g., some removable, some static) unless necessary and clearly indicated`,`- Don't use Tags as primary action triggers (e.g., "Submit", "Save"), use Buttons instead`],dos:[`- Use Tags to represent interactive labels such as filters, categories, or user-defined keywords`,`- Ensure the label is short, descriptive, and scannable, aim for 1–2 words`,`- Use Tags in search contexts, facet filtering, or content classification`,`- Allow Tags to be removable or toggleable if the interaction requires it (e.g., deselecting a filter)`,`- Keep visual distinction between Tags (interactive) and Badges (static)`,`- Trigger removal action when the Tag displays a delete icon`]}),`
`,(0,r.jsx)(u,{label:`Best Practices in Context`,level:3}),`
`,(0,r.jsx)(i,{src:`components/tag/anatomy.png`}),`
`,(0,r.jsxs)(t.ol,{children:[`
`,(0,r.jsx)(t.li,{children:(0,r.jsx)(t.strong,{children:`Tag`})}),`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:`Icon`}),` - optional (left or right)`]}),`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:`Delete icon`}),` - optional`]}),`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:`Label`}),` - optional`]}),`
`]}),`
`,(0,r.jsx)(u,{label:`Placement`,level:2}),`
`,(0,r.jsx)(t.p,{children:`Since it provides extra information to a sibling element, in can be used inside components in various places, referring to the nature of its environment.`}),`
`,(0,r.jsxs)(t.p,{children:[`Multiple `,(0,r.jsx)(t.strong,{children:`Tags`}),` can be displayed:`]}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsx)(t.li,{children:`on a single line`}),`
`,(0,r.jsx)(t.li,{children:`stacked vertically`}),`
`]}),`
`,(0,r.jsx)(u,{label:`Behavior`,level:2}),`
`,(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:`Tags`}),` can be hovered, focused and disabled.`]}),`
`,(0,r.jsx)(u,{label:`Variation`,level:2}),`
`,(0,r.jsx)(u,{label:`Status`,level:3}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:`Accent`}),`: highlighting labels tied to the brand, without conveying any particular status.`]}),`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:`Neutral`}),`: displaying general labels or metadata without conveying any particular status or urgency.`]}),`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:`Information`}),` `,(0,r.jsx)(t.em,{children:`(default)`}),`: displaying a general information for the user, without conveying any particular urgency.`]}),`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:`Success`}),`: indicating positive statuses or successful outcomes, providing a visual cue for achievements or completed tasks.`]}),`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:`Warning`}),`: alerting users to potential issues or cautionary information, signaling that attention is needed.`]}),`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:`Critical`}),`: highlighting severe issues or urgent information that requires immediate attention, emphasizing high-priority concerns.`]}),`
`]}),`
`,(0,r.jsx)(u,{label:`Size`,level:3}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:`Medium`}),` `,(0,r.jsx)(t.em,{children:`(default)`}),`: main size for displaying `,(0,r.jsx)(t.strong,{children:`Tags`}),`.`]}),`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:`Large`}),`: highlighting important labels or metadata with greater visibility and emphasis, making them easily noticeable to users.`]}),`
`]}),`
`,(0,r.jsx)(u,{label:`Navigation`,level:2}),`
`,(0,r.jsx)(u,{label:`Focus Management`,level:3}),`
`,(0,r.jsxs)(t.p,{children:[`The `,(0,r.jsx)(t.strong,{children:`Tag`}),` component is focusable and follows the same keyboard interactions as the Button component.`]}),`
`,(0,r.jsx)(u,{label:`General Keyboard Shortcuts`,level:3}),`
`,(0,r.jsxs)(t.p,{children:[`Pressing `,(0,r.jsx)(p,{children:`Tab`}),` moves focus to the `,(0,r.jsx)(t.strong,{children:`Tag`}),`.`]}),`
`,(0,r.jsxs)(t.p,{children:[`Pressing `,(0,r.jsx)(p,{children:`Enter`}),` or `,(0,r.jsx)(p,{children:`Space`}),` triggers the assigned action: removing the `,(0,r.jsx)(t.strong,{children:`Tag`}),`.`]}),`
`,(0,r.jsxs)(t.p,{children:[`Pressing `,(0,r.jsx)(p,{children:`Shift`}),` + `,(0,r.jsx)(p,{children:`Tab`}),` moves focus to the previous interactive element.`]}),`
`,(0,r.jsx)(u,{label:`Accessibility`,level:2}),`
`,(0,r.jsxs)(t.p,{children:[`Unlike `,(0,r.jsx)(c,{to:`/components/badge`,children:`Badge`}),`,
`,(0,r.jsx)(t.strong,{children:`Tags`}),` are interactive and can be removed by the user.
To ensure accessibility, it is important to:`]}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsxs)(t.li,{children:[`Group `,(0,r.jsx)(t.strong,{children:`Tags`}),` properly when they are part of a list.`]}),`
`,(0,r.jsx)(t.li,{children:`Announce the removal action so screen reader users understand the functionality.`}),`
`]}),`
`,(0,r.jsx)(u,{label:`Structuring groups of Tags with lists`,level:3}),`
`,(0,r.jsxs)(t.p,{children:[`When multiple `,(0,r.jsx)(t.strong,{children:`Tags`}),` are displayed together (e.g., a collection of selected filters or labels),
they should be wrapped in an unordered list of items (`,(0,r.jsx)(t.code,{children:`<ul>`}),` and `,(0,r.jsx)(t.code,{children:`<li>`}),`) to ensure proper announcement by screen readers.`]}),`
`,(0,r.jsx)(s,{story:`AccessibilityList`}),`
`,(0,r.jsxs)(t.p,{children:[(0,r.jsx)(d,{name:`circle-check`,style:{color:`var(--ods-semantic-color-content-success)`}}),` This allows screen readers to announce a list with the number of items, making it clear that these `,(0,r.jsx)(t.strong,{children:`Tags`}),` belong to a structured set.`]}),`
`,(0,r.jsx)(u,{label:`Alternative approach`,level:3}),`
`,(0,r.jsxs)(t.p,{children:[`When modifying the HTML structure is not possible,
use `,(0,r.jsx)(l,{href:`https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Reference/Roles/list_role`,children:`role="list"`}),` and `,(0,r.jsx)(l,{href:`https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Reference/Roles/listitem_role`,children:`role="listitem"`}),` to mimic list semantics.`]}),`
`,(0,r.jsx)(s,{story:`AccessibilityAriaRoles`}),`
`,(0,r.jsxs)(t.p,{children:[(0,r.jsx)(d,{name:`circle-check`,style:{color:`var(--ods-semantic-color-content-success)`}}),` This ensures that screen readers still recognize the `,(0,r.jsx)(t.strong,{children:`Tags`}),` as a structured list, even without native `,(0,r.jsx)(t.code,{children:`<ul>`}),` and `,(0,r.jsx)(t.code,{children:`<li>`}),` elements.`]}),`
`,(0,r.jsx)(u,{label:`Announcing the delete action with aria-label`,level:3}),`
`,(0,r.jsxs)(t.p,{children:[`Since the `,(0,r.jsx)(t.strong,{children:`Tag`}),` is removable, it should provide clear feedback to assistive technologies.`]}),`
`,(0,r.jsx)(s,{story:`AccessibilityAriaLabel`}),`
`,(0,r.jsxs)(t.p,{children:[(0,r.jsx)(d,{name:`circle-check`,style:{color:`var(--ods-semantic-color-content-success)`}}),` This ensures that users know the `,(0,r.jsx)(t.strong,{children:`Tag`}),` can be removed. Screen readers will announce the tag aria label and the button type.`]})]})}function a(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(i,{...e})}):i(e)}function o(e,t){throw Error(`Expected `+(t?`component`:`object`)+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}export{a as default};