import{i as e}from"./rolldown-runtime-Dd_uD5pT.js";import{t}from"./jsx-runtime-DREnUpxT.js";import{T as n}from"./index-CzEwg6AJ.js";var r=e(t());function i(e){let t={li:`li`,ol:`ol`,p:`p`,strong:`strong`,ul:`ul`,...n(),...e.components},{Anatomy:i,BestPractices:a,Canvas:s,ExternalLink:c,Heading:l,Icon:u,IdentityCard:d}=t;return i||o(`Anatomy`,!0),a||o(`BestPractices`,!0),s||o(`Canvas`,!0),c||o(`ExternalLink`,!0),l||o(`Heading`,!0),u||o(`Icon`,!0),d||o(`IdentityCard`,!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s,{story:`Overview`,source:`none`}),`
`,(0,r.jsx)(l,{label:`Overview`,level:2}),`
`,(0,r.jsx)(d,{aliases:[],figmaLink:`https://www.figma.com/design/9jDDTcR4a9jPRFcdjawAlf/branch/YdqCQ0e4CtGBm7dLbuLl1h/ODS---UI-Kit?node-id=10494-5637&t=9pIeofapdgMDhhF4-0`,githubUrl:`https://github.com/ovh/design-system/tree/master/packages/ods-react/src/components/meter`,name:`Meter`,startingVersion:19,children:(0,r.jsxs)(t.p,{children:[`The `,(0,r.jsx)(t.strong,{children:`Meter`}),` component visually represents a quantitative value within a defined range.`]})}),`
`,(0,r.jsx)(l,{label:`Usage`,level:2}),`
`,(0,r.jsxs)(t.p,{children:[`The `,(0,r.jsx)(t.strong,{children:`Meter`}),` component represents a quantitative value such as resource usage, storage availability, or other bounded metrics.
It is distinct from a progress bar due to its focus on measurement and thresholds rather than progress toward a goal.`]}),`
`,(0,r.jsxs)(t.p,{children:[`Additionally, the `,(0,r.jsx)(t.strong,{children:`Meter`}),` is primarily static, representing a fixed state or measurement, whereas the progress bar is dynamic, reflecting continuous updates or progress over time.`]}),`
`,(0,r.jsx)(l,{label:`Dos & Don'ts`,level:3}),`
`,(0,r.jsx)(a,{donts:[`Don't use a Meter to represent unbounded progress (use a progress bar instead)`,`Avoid separating the Meter and its associated value across different sections of the UI to prevent confusion`,`Avoid excessive customization that compromises readability or accessibility`],dos:[`- Use the Meter to represent bounded measurements, such as disk usage or CPU load`,`- Customize thresholds and colors to provide meaningful visual cues`,`- Include appropriate labels when context is not immediately clear`]}),`
`,(0,r.jsx)(l,{label:`Best Practices in Context`,level:3}),`
`,(0,r.jsx)(i,{src:`components/meter/anatomy.png`}),`
`,(0,r.jsxs)(t.ol,{children:[`
`,(0,r.jsx)(t.li,{children:(0,r.jsx)(t.strong,{children:`Meter`})}),`
`,(0,r.jsx)(t.li,{children:(0,r.jsx)(t.strong,{children:`Track`})}),`
`,(0,r.jsx)(t.li,{children:(0,r.jsx)(t.strong,{children:`Fill`})}),`
`]}),`
`,(0,r.jsx)(l,{label:`Placement`,level:2}),`
`,(0,r.jsxs)(t.p,{children:[`The placement of the `,(0,r.jsx)(t.strong,{children:`Meter`}),` depends on its use case and the context within the UI.`]}),`
`,(0,r.jsxs)(t.p,{children:[`Place the `,(0,r.jsx)(t.strong,{children:`Meter`}),` close to the element it represents (e.g., near a resource title).`]}),`
`,(0,r.jsxs)(t.p,{children:[`If the `,(0,r.jsx)(t.strong,{children:`Meter`}),` is tied to a specific numeric value (e.g., "75% used"), display the value nearby for clarity, directly adjacent to the component.`]}),`
`,(0,r.jsx)(t.p,{children:`Include appropriate labels when context is not immediately clear:`}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsx)(t.li,{children:`inline: labels can be placed above, below or beside the Meter.`}),`
`,(0,r.jsx)(t.li,{children:`surrounding: labels for minimum and maximum values can be positioned at opposite ends of the track, as needed.`}),`
`,(0,r.jsx)(t.li,{children:`hidden: for visual-only representation.`}),`
`]}),`
`,(0,r.jsx)(l,{label:`Behavior`,level:2}),`
`,(0,r.jsxs)(t.p,{children:[`Value representation supports minimum, maximum, and current value inputs.
The filled portion of the `,(0,r.jsx)(t.strong,{children:`Meter`}),` is dynamically adjusted based on the value.`]}),`
`,(0,r.jsx)(t.p,{children:`Low and high thresholds can be specified to visually indicate important ranges.
Color will change based on those thresholds.`}),`
`,(0,r.jsxs)(t.p,{children:[`The coloring behavior may be updated through the optimum attribute.
See the `,(0,r.jsx)(c,{href:`https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/meter#optimum`,children:`optimum documentation`}),` for more information.`]}),`
`,(0,r.jsx)(l,{label:`Navigation`,level:2}),`
`,(0,r.jsxs)(t.p,{children:[`The `,(0,r.jsx)(t.strong,{children:`Meter`}),` component is non-interactive and does not receive keyboard focus.`]}),`
`,(0,r.jsx)(l,{label:`Accessibility`,level:2}),`
`,(0,r.jsxs)(t.p,{children:[`To ensure proper accessibility, `,(0,r.jsx)(t.strong,{children:`Meter`}),` must be correctly labeled.`]}),`
`,(0,r.jsx)(l,{label:`Always provide an explicit label`,level:3}),`
`,(0,r.jsxs)(t.p,{children:[`Every `,(0,r.jsx)(t.strong,{children:`Meter`}),` must have a clear and explicit label to ensure that users (especially screen reader users) understand its purpose,
using either an `,(0,r.jsx)(c,{href:`https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label`,children:`aria-label`}),`
or an `,(0,r.jsx)(c,{href:`https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby`,children:`aria-labelledby`}),` attribute.`]}),`
`,(0,r.jsx)(s,{story:`AccessibilityAriaLabel`}),`
`,(0,r.jsxs)(t.p,{children:[(0,r.jsx)(u,{name:`circle-check`,style:{color:`var(--ods-semantic-color-content-success)`}}),` Screen readers will announce the label and the meter information.`]}),`
`,(0,r.jsx)(s,{story:`AccessibilityAriaLabelledby`}),`
`,(0,r.jsxs)(t.p,{children:[(0,r.jsx)(u,{name:`circle-check`,style:{color:`var(--ods-semantic-color-content-success)`}}),` Screen readers will announce the label and the meter information.`]}),`
`,(0,r.jsx)(l,{label:`Improve value readability`,level:3}),`
`,(0,r.jsxs)(t.p,{children:[`Numbers aren't always user-friendly.
You can use the `,(0,r.jsx)(c,{href:`https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-valuetext`,children:`aria-valuetext`}),`
attribute to present the current value in a more user-friendly, human-understandable way.`]}),`
`,(0,r.jsx)(s,{story:`AccessibilityAriaValuetext`}),`
`,(0,r.jsxs)(t.p,{children:[(0,r.jsx)(u,{name:`circle-check`,style:{color:`var(--ods-semantic-color-content-success)`}}),` Screen readers will announce the label and the meter information in a more user-friendly, human-understandable way.`]})]})}function a(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(i,{...e})}):i(e)}function o(e,t){throw Error(`Expected `+(t?`component`:`object`)+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}export{a as default};