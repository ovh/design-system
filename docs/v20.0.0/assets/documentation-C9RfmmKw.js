import{i as e}from"./rolldown-runtime-Dd_uD5pT.js";import{t}from"./jsx-runtime-DREnUpxT.js";import{T as n}from"./index-CzEwg6AJ.js";var r=e(t());function i(e){let t={em:`em`,li:`li`,ol:`ol`,p:`p`,strong:`strong`,ul:`ul`,...n(),...e.components},{Anatomy:i,BestPractices:a,Canvas:s,DocLink:c,ExternalLink:l,Heading:u,Icon:d,IdentityCard:f,Kbd:p}=t;return i||o(`Anatomy`,!0),a||o(`BestPractices`,!0),s||o(`Canvas`,!0),c||o(`DocLink`,!0),l||o(`ExternalLink`,!0),u||o(`Heading`,!0),d||o(`Icon`,!0),f||o(`IdentityCard`,!0),p||o(`Kbd`,!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.p,{children:(0,r.jsxs)(t.em,{children:[`A `,(0,r.jsx)(t.strong,{children:`Button`}),` component aims to initiate an action. Its text indicates the related intent, its aspect describes the importance and influence level.`]})}),`
`,(0,r.jsx)(s,{story:`Overview`,source:`none`}),`
`,(0,r.jsx)(u,{label:`Overview`,level:2}),`
`,(0,r.jsxs)(f,{aliases:[`Call To Action`,`CTA`],figmaLink:`https://www.figma.com/design/9jDDTcR4a9jPRFcdjawAlf/ODS---UI-Kit?node-id=3-23353`,githubUrl:`https://github.com/ovh/design-system/tree/master/packages/ods-react/src/components/button`,name:`Button`,children:[(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:`Buttons`}),` are triggerable elements that are used to set actions. They communicate calls to action to the user and
allow them to interact with pages.`]}),(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:`Button`}),` labels express explicitly what action will occur when the user interacts with it. Its aspect describes
the importance and influence level.`]}),(0,r.jsx)(t.p,{children:`This component exists in many ways : emphases, statuses and sizes.`})]}),`
`,(0,r.jsx)(u,{label:`Usage`,level:2}),`
`,(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:`Buttons`}),` are mainly used for actions, like adding, removing, validating, etc.
They are used to allow users to interact with the page or its content.`]}),`
`,(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:`Buttons`}),` work with other elements on a screen to surface the most important actions the user wants to take in that context.
They must respect the proximity law in order to guide the user on the action to be performed and the expected result.
A `,(0,r.jsx)(t.strong,{children:`Button`}),` label indicates what happens when the user taps the `,(0,r.jsx)(t.strong,{children:`Button`}),`, even if it's just to acknowledge something.`]}),`
`,(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:`Buttons`}),` don't usually redirect to an external page. For that, see `,(0,r.jsx)(c,{to:`/components/link`,children:`Link`}),`.`]}),`
`,(0,r.jsx)(u,{label:`When to use a link or a button?`,level:3}),`
`,(0,r.jsx)(t.p,{children:`Links and buttons serve different purposes, and using them correctly improves both accessibility and user experience:`}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsx)(t.li,{children:`Use a link when the action navigates the user to another page or resource, either within your application or to an external site`}),`
`,(0,r.jsx)(t.li,{children:`Use a button when the action performs a function or triggers a behavior on the current page, like submitting a form, opening a modal, or toggling a menu`}),`
`]}),`
`,(0,r.jsx)(t.p,{children:`A button should not mimic a link. It can lead to confusion for users and assistive technologies, as button are not typically expected to handle navigation.`}),`
`,(0,r.jsx)(u,{label:`Dos & Don'ts`,level:3}),`
`,(0,r.jsx)(a,{donts:[`- Don't use a Button as a link, use the Link component instead`,`- Don't show more than one high emphasis Button per view`,`- Don't place two identical Buttons side by side (same label and style)`,`- Don't use standalone decorative icons in Buttons unless the action is universally understood`,`- Don't use a low emphasis Button as the main call to action`,`- Don't overload a Button with too much text or visual clutter`],dos:[`- Use a high emphasis Button to highlight the main action on a page or in a form`,`- Pair a medium emphasis Button for complementary actions (e.g., "Cancel", "Learn more")`,`- Maintain a clear visual hierarchy between Button emphases (high, medium, low)`,`- Use icons when they add clarity to the action (e.g., arrow for "Next", trash for "Delete")`,`- Choose the appropriate size based on context`]}),`
`,(0,r.jsx)(u,{label:`Best Practices in Context`,level:3}),`
`,(0,r.jsx)(i,{src:`components/button/anatomy.png`}),`
`,(0,r.jsxs)(t.ol,{children:[`
`,(0,r.jsx)(t.li,{children:(0,r.jsx)(t.strong,{children:`Button`})}),`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:`Icon`}),` - optional (left or right)`]}),`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:`Label`}),` - optional`]}),`
`]}),`
`,(0,r.jsx)(u,{label:`Behavior`,level:2}),`
`,(0,r.jsxs)(t.p,{children:[`A `,(0,r.jsx)(t.strong,{children:`Button`}),` can be hovered, focused, clicked and disabled.`]}),`
`,(0,r.jsx)(t.p,{children:`When in disabled state, it is impossible to focus or click on it. A "disabled" cursor is shown when hovering the disabled component.`}),`
`,(0,r.jsxs)(t.p,{children:[`The `,(0,r.jsx)(t.strong,{children:`Button`}),` supports a loading state.`]}),`
`,(0,r.jsxs)(t.p,{children:[`An icon can be displayed on the left or right of the `,(0,r.jsx)(t.strong,{children:`Button`}),` label. Icon-only `,(0,r.jsx)(t.strong,{children:`Button`}),` also exists but it must meet accessibility requirements. See Accessibility section below.`]}),`
`,(0,r.jsx)(u,{label:`Variation`,level:2}),`
`,(0,r.jsx)(u,{label:`Status`,level:3}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:`Brand`}),` `,(0,r.jsx)(t.em,{children:`(default)`}),`: used for main usage of `,(0,r.jsx)(t.strong,{children:`Buttons`}),`, and linked to the brand graphical charter.`]}),`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:`Critical`}),`: alerts users to high-priority actions or warnings that require immediate attention.`]}),`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:`Neutral`}),`: secondary actions (such as clearing field or close button).`]}),`
`]}),`
`,(0,r.jsx)(u,{label:`Emphasis`,level:3}),`
`,(0,r.jsxs)(t.p,{children:[`The emphasis sets the visual weight of the `,(0,r.jsx)(t.strong,{children:`Button`}),`, whatever its status.`]}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:`High`}),`: primary actions, featuring a full background with a matching border to signify important emphasis.`]}),`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:`Medium`}),` `,(0,r.jsx)(t.em,{children:`(default)`}),`: secondary actions, featuring a light background with a visible border to signify less emphasis than high `,(0,r.jsx)(t.strong,{children:`Buttons`}),`.`]}),`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:`Low`}),`: tertiary or less prominent actions, blending into the background with minimal styling until hovered or focused to reduce visual dominance.`]}),`
`]}),`
`,(0,r.jsxs)(t.p,{children:[`The action roles combine a status and an emphasis: a primary action is a brand `,(0,r.jsx)(t.strong,{children:`Button`}),` with a high emphasis, a secondary action a medium one and a tertiary action a low one.`]}),`
`,(0,r.jsx)(u,{label:`Size`,level:3}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:`Extra Small`}),`: actions in tiny spaces, such as action button in fields or compact rows in a table.`]}),`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:`Small`}),`: actions in compact spaces or within densely packed interfaces, providing a more subtle and space-efficient option.`]}),`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:`Medium`}),` `,(0,r.jsx)(t.em,{children:`(default)`}),`: main usage of `,(0,r.jsx)(t.strong,{children:`Buttons`}),`, when they can be displayed in an important manner.`]}),`
`]}),`
`,(0,r.jsx)(u,{label:`Navigation`,level:2}),`
`,(0,r.jsx)(u,{label:`Focus Management`,level:3}),`
`,(0,r.jsxs)(t.p,{children:[`The `,(0,r.jsx)(t.strong,{children:`Button`}),` component can receive keyboard focus and is part of the standard tab order.`]}),`
`,(0,r.jsxs)(t.p,{children:[`If the `,(0,r.jsx)(t.strong,{children:`Button`}),` is disabled, it does not receive focus and cannot be activated via keyboard.`]}),`
`,(0,r.jsx)(u,{label:`General Keyboard Shortcuts`,level:3}),`
`,(0,r.jsxs)(t.p,{children:[`Pressing `,(0,r.jsx)(p,{children:`Enter`}),` or `,(0,r.jsx)(p,{children:`Space`}),` while the `,(0,r.jsx)(t.strong,{children:`Button`}),` is focused activates it, triggering its action.`]}),`
`,(0,r.jsxs)(t.p,{children:[`Pressing `,(0,r.jsx)(p,{children:`Shift`}),` + `,(0,r.jsx)(p,{children:`Alt`}),` moves focus to the previous interactive element.`]}),`
`,(0,r.jsx)(u,{label:`Accessibility`,level:2}),`
`,(0,r.jsxs)(t.p,{children:[`This component complies with the `,(0,r.jsx)(l,{href:`https://www.w3.org/WAI/ARIA/apg/patterns/button/`,children:`Button WAI-ARIA design pattern`}),`.`]}),`
`,(0,r.jsx)(u,{label:`Always provide an explicit text content`,level:3}),`
`,(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:`Button`}),` should always have a clear and descriptive text content to indicate their purpose.`]}),`
`,(0,r.jsx)(s,{story:`AccessibilityExplicitTextContent`}),`
`,(0,r.jsxs)(t.p,{children:[(0,r.jsx)(d,{name:`circle-check`,style:{color:`var(--ods-semantic-color-content-success)`}}),` Screen readers will announce the text content.`]}),`
`,(0,r.jsx)(u,{label:`Icon Button`,level:3}),`
`,(0,r.jsxs)(t.p,{children:[`If a `,(0,r.jsx)(t.strong,{children:`Button`}),` contains only an icon, it must include an `,(0,r.jsx)(l,{href:`https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label`,children:`aria-label`}),` to provide context.`]}),`
`,(0,r.jsx)(s,{story:`AccessibilityIconOnly`}),`
`,(0,r.jsxs)(t.p,{children:[(0,r.jsx)(d,{name:`circle-check`,style:{color:`var(--ods-semantic-color-content-success)`}}),` Screen readers will announce the label.`]}),`
`,(0,r.jsx)(u,{label:`Using aria-labelledby for additional context`,level:3}),`
`,(0,r.jsxs)(t.p,{children:[`When a `,(0,r.jsx)(t.strong,{children:`Button`}),` is associated with an existing label, content is read by screen readers when the `,(0,r.jsx)(t.strong,{children:`Button`}),` receives focus.`]}),`
`,(0,r.jsx)(s,{story:`AccessibilityLabelledBy`}),`
`,(0,r.jsxs)(t.p,{children:[(0,r.jsx)(d,{name:`circle-check`,style:{color:`var(--ods-semantic-color-content-success)`}}),` When the `,(0,r.jsx)(t.strong,{children:`Button`}),` is focused, the screen reader will announce the linked label.`]})]})}function a(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(i,{...e})}):i(e)}function o(e,t){throw Error(`Expected `+(t?`component`:`object`)+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}export{a as default};