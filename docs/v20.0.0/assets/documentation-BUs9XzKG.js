import{i as e}from"./rolldown-runtime-Dd_uD5pT.js";import{t}from"./jsx-runtime-DREnUpxT.js";import{T as n}from"./index-CzEwg6AJ.js";var r=e(t());function i(e){let t={em:`em`,li:`li`,ol:`ol`,p:`p`,strong:`strong`,...n(),...e.components},{Anatomy:i,BestPractices:a,Canvas:s,DocLink:c,ExternalLink:l,Heading:u,Icon:d,IdentityCard:f,Kbd:p}=t;return i||o(`Anatomy`,!0),a||o(`BestPractices`,!0),s||o(`Canvas`,!0),c||o(`DocLink`,!0),l||o(`ExternalLink`,!0),u||o(`Heading`,!0),d||o(`Icon`,!0),f||o(`IdentityCard`,!0),p||o(`Kbd`,!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.p,{children:(0,r.jsxs)(t.em,{children:[(0,r.jsx)(t.strong,{children:`Range`}),` component is used to allow users to visually select one or more values from a range of values by moving the handle along a bar`]})}),`
`,(0,r.jsx)(s,{story:`Overview`,source:`none`}),`
`,(0,r.jsx)(u,{label:`Overview`,level:2}),`
`,(0,r.jsxs)(f,{aliases:[`Slider`],extraLinks:[(0,r.jsx)(c,{to:`/guides/forms`,children:`Form Guidelines`})],figmaLink:`https://www.figma.com/design/9jDDTcR4a9jPRFcdjawAlf/ODS---UI-Kit?node-id=49-16052`,githubUrl:`https://github.com/ovh/design-system/tree/master/packages/ods-react/src/components/range`,name:`Range`,children:[(0,r.jsxs)(t.p,{children:[`The `,(0,r.jsx)(t.strong,{children:`Range`}),` component is used for selecting a numerical value or a range of values within a specified range.`]}),(0,r.jsx)(t.p,{children:`It provides a visual and interactive way to adjust values, often used in forms, settings, and data filtering.`}),(0,r.jsx)(t.p,{children:`The component can support single-value sliders or dual-handle sliders for selecting ranges.`})]}),`
`,(0,r.jsx)(u,{label:`Usage`,level:2}),`
`,(0,r.jsxs)(t.p,{children:[`A `,(0,r.jsx)(t.strong,{children:`Range`}),` is used to select a numeric value within a given range with defined minimum and maximum values.`]}),`
`,(0,r.jsx)(t.p,{children:`It is easily adjustable in a visually pleasing interface and, after interacting with it, changes are reflected immediately.`}),`
`,(0,r.jsxs)(t.p,{children:[`A dual `,(0,r.jsx)(t.strong,{children:`Range`}),` allows the user to select a numeric range value that is no less than a given value, and no more than another given value.`]}),`
`,(0,r.jsx)(u,{label:`Dos & Don'ts`,level:3}),`
`,(0,r.jsx)(a,{donts:[`- Don't overload a page with too many Range components`,`- Don't place a Range in tight or constrained spaces where the control becomes hard to use or interpret`,`- Don't use a continuous Range for large intervals where precision is important. Use a discrete step Range or typed input instead`,`- Don't omit labels or helper text`],dos:[`- Use a Range component when users need to select a value (or values) within a defined numeric interval`,`- Label the Range clearly using a Form Field to indicate what the value represents`,`- Provide a default value or starting range to guide users and avoid ambiguity`,`- Use a dual Range when allowing users to set a minimum and maximum value`,`- Make sure the Range has enough horizontal space to be usable and legible`]}),`
`,(0,r.jsx)(u,{label:`Best Practices in Context`,level:3}),`
`,(0,r.jsx)(i,{src:`components/range/anatomy.png`}),`
`,(0,r.jsxs)(t.ol,{children:[`
`,(0,r.jsx)(t.li,{children:(0,r.jsx)(t.strong,{children:`Range`})}),`
`,(0,r.jsx)(t.li,{children:(0,r.jsx)(t.strong,{children:`Track`})}),`
`,(0,r.jsx)(t.li,{children:(0,r.jsx)(t.strong,{children:`Min/Max values`})}),`
`,(0,r.jsx)(t.li,{children:(0,r.jsx)(t.strong,{children:`Handle`})}),`
`,(0,r.jsx)(t.li,{children:(0,r.jsx)(t.strong,{children:`Active fill`})}),`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:`Second handle`}),` - optional (Dual Range)`]}),`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:`Tick marks`}),` - optional`]}),`
`]}),`
`,(0,r.jsx)(u,{label:`Placement`,level:2}),`
`,(0,r.jsxs)(t.p,{children:[`A `,(0,r.jsx)(t.strong,{children:`Range`}),` can be used in a page as long as there is a need to allow users to select a numeric value within a given range, for a quantity or a volume for example.`]}),`
`,(0,r.jsx)(t.p,{children:`It has a width by default, but it can widen to match its container.`}),`
`,(0,r.jsxs)(t.p,{children:[`The `,(0,r.jsx)(t.strong,{children:`Range`}),` can also be used inside components.`]}),`
`,(0,r.jsx)(t.p,{children:`It also can be combined with other elements such as an input for a better control of the value selection.`}),`
`,(0,r.jsx)(u,{label:`Behavior`,level:2}),`
`,(0,r.jsxs)(t.p,{children:[`A `,(0,r.jsx)(t.strong,{children:`Range`}),` can be focused and hovered. It also can be disabled.`]}),`
`,(0,r.jsx)(t.p,{children:`The user can select a numeric value by clicking and dragging the thumb along the track.`}),`
`,(0,r.jsx)(u,{label:`Navigation`,level:2}),`
`,(0,r.jsx)(u,{label:`Focus Management`,level:3}),`
`,(0,r.jsxs)(t.p,{children:[`The `,(0,r.jsx)(t.strong,{children:`Range`}),` component can be focused. Focus will land on the first thumb if multiple are present.`]}),`
`,(0,r.jsx)(t.p,{children:`When multiple thumbs are used, each thumb can receive focus individually.`}),`
`,(0,r.jsxs)(t.p,{children:[`Disabled `,(0,r.jsx)(t.strong,{children:`Range`}),` and disabled thumbs cannot be focused or interacted with.`]}),`
`,(0,r.jsx)(u,{label:`General Keyboard Shortcuts`,level:3}),`
`,(0,r.jsxs)(t.p,{children:[`Pressing `,(0,r.jsx)(p,{children:`Arrow Right`}),` or `,(0,r.jsx)(p,{children:`Arrow Up`}),` increases the value of the focused thumb by one step.`]}),`
`,(0,r.jsxs)(t.p,{children:[`Pressing `,(0,r.jsx)(p,{children:`Arrow Left`}),` or `,(0,r.jsx)(p,{children:`Arrow Down`}),` decreases the value of the focused thumb by one step.`]}),`
`,(0,r.jsxs)(t.p,{children:[`Pressing `,(0,r.jsx)(p,{children:`Page Up`}),` or `,(0,r.jsx)(p,{children:`Shift`}),` + `,(0,r.jsx)(p,{children:`Arrow Right`}),` increases the value by a larger step.`]}),`
`,(0,r.jsxs)(t.p,{children:[`Pressing `,(0,r.jsx)(p,{children:`Page Down`}),` or `,(0,r.jsx)(p,{children:`Shift`}),` + `,(0,r.jsx)(p,{children:`Arrow Down`}),` decreases the value by a larger step.`]}),`
`,(0,r.jsxs)(t.p,{children:[`Pressing `,(0,r.jsx)(p,{children:`Home`}),` or `,(0,r.jsx)(p,{children:`fn`}),` + `,(0,r.jsx)(p,{children:`Arrow Left`}),` sets the value to the minimum.`]}),`
`,(0,r.jsxs)(t.p,{children:[`Pressing `,(0,r.jsx)(p,{children:`End`}),` or `,(0,r.jsx)(p,{children:`fn`}),` + `,(0,r.jsx)(p,{children:`Arrow Right`}),` sets the value to the maximum.`]}),`
`,(0,r.jsxs)(t.p,{children:[`Pressing `,(0,r.jsx)(p,{children:`Tab`}),` and `,(0,r.jsx)(p,{children:`Shift`}),` + `,(0,r.jsx)(p,{children:`Tab`}),` allow navigation between multiple thumbs (if present).`]}),`
`,(0,r.jsx)(u,{label:`Accessibility`,level:2}),`
`,(0,r.jsxs)(t.p,{children:[`This component complies with the `,(0,r.jsx)(l,{href:`https://www.w3.org/WAI/ARIA/apg/patterns/slider/`,children:`Slider`}),` and `,(0,r.jsx)(l,{href:`https://www.w3.org/WAI/ARIA/apg/patterns/slider-multithumb/`,children:`Slider (Multi-Thumb)`}),` WAI-ARIA design patterns.`]}),`
`,(0,r.jsx)(u,{label:`Always provide an explicit label`,level:3}),`
`,(0,r.jsxs)(t.p,{children:[`Every `,(0,r.jsx)(t.strong,{children:`Range`}),` must have a clear and explicit label to ensure that users (especially screen reader users) understand its purpose,
using either `,(0,r.jsx)(t.strong,{children:`FormField`}),` or a native label tag.`]}),`
`,(0,r.jsx)(s,{story:`AccessibilityFormField`}),`
`,(0,r.jsxs)(t.p,{children:[(0,r.jsx)(d,{name:`circle-check`,style:{color:`var(--ods-semantic-color-content-success)`}}),` Screen readers will announce the value, the slider and its label.`]}),`
`,(0,r.jsx)(u,{label:`Always provide a descriptive sub-label in Dual Range`,level:3}),`
`,(0,r.jsxs)(t.p,{children:[`Sub-label provide additional context about the values that are selected or adjusted by the user. This sub-label should be vocalized by screen readers.
Use `,(0,r.jsx)(l,{href:`https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby`,children:`aria-labelledby`}),` to link the sub-label and `,(0,r.jsx)(l,{href:`https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Guides/Live_regions`,children:`aria-live="polite"`}),` to ensure that the content is vocalized by screen readers.`]}),`
`,(0,r.jsx)(s,{story:`AccessibilityDescriptiveSubLabel`}),`
`,(0,r.jsxs)(t.p,{children:[(0,r.jsx)(d,{name:`circle-check`,style:{color:`var(--ods-semantic-color-content-success)`}}),` Screen readers will announce the values, the slider and its label.`]})]})}function a(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(i,{...e})}):i(e)}function o(e,t){throw Error(`Expected `+(t?`component`:`object`)+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}export{a as default};