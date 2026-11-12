import{i as e}from"./rolldown-runtime-Dd_uD5pT.js";import{t}from"./jsx-runtime-DREnUpxT.js";import{T as n}from"./index-CzEwg6AJ.js";var r=e(t());function i(e){let t={code:`code`,em:`em`,li:`li`,ol:`ol`,p:`p`,strong:`strong`,ul:`ul`,...n(),...e.components},{Anatomy:i,BestPractices:a,Canvas:s,DocLink:c,ExternalLink:l,Heading:u,Icon:d,IdentityCard:f,Kbd:p}=t;return i||o(`Anatomy`,!0),a||o(`BestPractices`,!0),s||o(`Canvas`,!0),c||o(`DocLink`,!0),l||o(`ExternalLink`,!0),u||o(`Heading`,!0),d||o(`Icon`,!0),f||o(`IdentityCard`,!0),p||o(`Kbd`,!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.p,{children:(0,r.jsxs)(t.em,{children:[(0,r.jsx)(t.strong,{children:`Tooltip`}),` component is used to display contextual information when the user hovers or focuses a UI element in a page.`]})}),`
`,(0,r.jsx)(s,{story:`Overview`,source:`none`}),`
`,(0,r.jsx)(u,{label:`Overview`,level:2}),`
`,(0,r.jsxs)(f,{aliases:[`Info Bubble`],figmaLink:`https://www.figma.com/design/9jDDTcR4a9jPRFcdjawAlf/ODS---UI-Kit?node-id=55-23473`,githubUrl:`https://github.com/ovh/design-system/tree/master/packages/ods-react/src/components/tooltip`,name:`Tooltip`,children:[(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:`Tooltip`}),` component is used to display contextual information when the user hovers or focuses an element.`]}),(0,r.jsx)(t.p,{children:`It enhances user experience by providing helpful hints, explanations, or descriptions without cluttering the UI.`}),(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:`Tooltips`}),` are commonly used with a button, an icon, or interactive elements.`]})]}),`
`,(0,r.jsx)(u,{label:`Usage`,level:2}),`
`,(0,r.jsxs)(t.p,{children:[`Use the `,(0,r.jsx)(t.strong,{children:`Tooltip`}),` component to provide additional information or context for UI elements.`]}),`
`,(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:`Tooltips`}),` should be brief and helpful, enhancing user understanding without overwhelming them.`]}),`
`,(0,r.jsx)(t.p,{children:`They are suitable for a button, an icon, a link, and any other elements where additional context would be beneficial.`}),`
`,(0,r.jsx)(u,{label:`Tooltip vs Popover`,level:3}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsxs)(t.li,{children:[`Both components look similar but a `,(0,r.jsx)(t.strong,{children:`Tooltip`}),` is displayed on hover and focus while a `,(0,r.jsx)(c,{to:`/components/popover`,children:`Popover`}),` is triggered by click.`]}),`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:`Tooltips`}),` are commonly used for shorter explanations, while longer text / complex UIs would suit Popovers better.`]}),`
`,(0,r.jsx)(t.li,{children:`Use a Popover when you need to insert interactive elements such as a button.`}),`
`,(0,r.jsx)(t.li,{children:`A Popover can be dismissed if an action button allows it.`}),`
`]}),`
`,(0,r.jsx)(u,{label:`Dos & Don'ts`,level:3}),`
`,(0,r.jsx)(a,{donts:[`- Don't place critical or essential information inside a Tooltip, users may miss it`,`- Don't use Tooltip to show error messages`,`- Don't include interactive elements (e.g., buttons, links) inside a Tooltip`,`- Don't repeat content already visible in the UI. Tooltips should complement, not duplicate`,`- Don't overload Tooltips with rich content (images, media, long paragraphs)`],dos:[`- Use a Tooltip to provide concise, contextual help or clarification`,`- Keep the content brief and easy to read, ideally under two lines`,`- Use complete sentences with punctuation when space allows for improved readability`,`- Use Tooltips only when the user might need additional context, not by default on every element`,`- Position the Tooltip so it does not obstruct important elements`]}),`
`,(0,r.jsx)(u,{label:`Best Practices in Context`,level:3}),`
`,(0,r.jsx)(i,{src:`components/tooltip/anatomy.png`}),`
`,(0,r.jsxs)(t.ol,{children:[`
`,(0,r.jsx)(t.li,{children:(0,r.jsx)(t.strong,{children:`Tooltip`})}),`
`,(0,r.jsx)(t.li,{children:(0,r.jsx)(t.strong,{children:`Content`})}),`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:`Caret tip`}),` - optional`]}),`
`,(0,r.jsx)(t.li,{children:(0,r.jsx)(t.strong,{children:`Trigger`})}),`
`]}),`
`,(0,r.jsx)(u,{label:`Placement`,level:2}),`
`,(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:`Tooltip`}),` has automatic positioning feature. It can detect the edge of the browser so the container always stays visible on a page.`]}),`
`,(0,r.jsx)(u,{label:`Behavior`,level:2}),`
`,(0,r.jsxs)(t.p,{children:[`By default, a `,(0,r.jsx)(t.strong,{children:`Tooltip`}),` is hidden to the user.`]}),`
`,(0,r.jsxs)(t.p,{children:[`It triggers when the user hovers or focuses on the `,(0,r.jsx)(t.strong,{children:`Tooltip`}),`'s trigger element such as an icon.`]}),`
`,(0,r.jsxs)(t.p,{children:[`The `,(0,r.jsx)(t.strong,{children:`Tooltip`}),` remains visible while the user's mouse or focus is active, with customizable open and close delays.`]}),`
`,(0,r.jsx)(t.p,{children:`It will hide when the users stop hovering over or focusing on this element.`}),`
`,(0,r.jsxs)(t.p,{children:[`On a mobile device, a `,(0,r.jsx)(t.strong,{children:`Tooltip`}),` is displayed upon tapping, and it will hide when the user taps an area outside the `,(0,r.jsx)(t.strong,{children:`Tooltip`}),` container.`]}),`
`,(0,r.jsx)(u,{label:`Variation`,level:2}),`
`,(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:`With extra arrow`}),`: providing a more pronounced visual connection between the tooltip and the element it describes, ensuring users clearly understand which element the tooltip is associated with.`]}),`
`,(0,r.jsx)(u,{label:`Navigation`,level:2}),`
`,(0,r.jsx)(u,{label:`Focus Management`,level:3}),`
`,(0,r.jsxs)(t.p,{children:[`The `,(0,r.jsx)(t.strong,{children:`Tooltip`}),` is tied to its trigger element and becomes visible when the trigger receives focus.`]}),`
`,(0,r.jsx)(t.p,{children:`It remains open as long as the trigger element is focused.`}),`
`,(0,r.jsx)(u,{label:`General Keyboard Shortcuts`,level:3}),`
`,(0,r.jsxs)(t.p,{children:[`Pressing `,(0,r.jsx)(p,{children:`Tab`}),` moves focus to the trigger, opening the `,(0,r.jsx)(t.strong,{children:`Tooltip`}),` without delay.`]}),`
`,(0,r.jsxs)(t.p,{children:[`Pressing `,(0,r.jsx)(p,{children:`Tab`}),` again moves focus away, closing the `,(0,r.jsx)(t.strong,{children:`Tooltip`}),`.`]}),`
`,(0,r.jsxs)(t.p,{children:[`Pressing `,(0,r.jsx)(p,{children:`Escape`}),` closes the `,(0,r.jsx)(t.strong,{children:`Tooltip`}),` immediately if it is open.`]}),`
`,(0,r.jsx)(u,{label:`Accessibility`,level:2}),`
`,(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:`Tooltips`}),` are used to provide supplementary information about a UI element.
This component complies with the `,(0,r.jsx)(l,{href:`https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Reference/Roles/tooltip_role`,children:`Tooltip WAI-ARIA design pattern`}),`.`]}),`
`,(0,r.jsxs)(t.p,{children:[`You should set a minimal `,(0,r.jsx)(t.strong,{children:`Tooltip Trigger`}),` height to at least `,(0,r.jsx)(t.code,{children:`24px`}),` to provide sufficient visual clarity.`]}),`
`,(0,r.jsx)(u,{label:`Use tooltips to provide additional context`,level:3}),`
`,(0,r.jsxs)(t.p,{children:[`If your UI includes an unlabeled or ambiguous element, consider attaching a `,(0,r.jsx)(t.strong,{children:`Tooltip`}),` that explains its purpose.`]}),`
`,(0,r.jsx)(s,{story:`AccessibilityTooltip`}),`
`,(0,r.jsxs)(t.p,{children:[(0,r.jsx)(d,{name:`circle-check`,style:{color:`var(--ods-semantic-color-content-success)`}}),` Screens will announce the tooltip information.`]})]})}function a(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(i,{...e})}):i(e)}function o(e,t){throw Error(`Expected `+(t?`component`:`object`)+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}export{a as default};