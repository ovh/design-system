import{i as e}from"./rolldown-runtime-Dd_uD5pT.js";import{t}from"./jsx-runtime-DREnUpxT.js";import{T as n}from"./index-CzEwg6AJ.js";var r=e(t());function i(e){let t={em:`em`,li:`li`,ol:`ol`,p:`p`,strong:`strong`,...n(),...e.components},{Anatomy:i,BestPractices:a,Canvas:s,ExternalLink:c,Heading:l,Icon:u,IdentityCard:d}=t;return i||o(`Anatomy`,!0),a||o(`BestPractices`,!0),s||o(`Canvas`,!0),c||o(`ExternalLink`,!0),l||o(`Heading`,!0),u||o(`Icon`,!0),d||o(`IdentityCard`,!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.p,{children:(0,r.jsx)(t.em,{children:`A horizontal bar indicating the current completion status of a long-running task, usually updated continuously as the task progresses, instead of in discrete steps.`})}),`
`,(0,r.jsx)(s,{story:`Overview`,source:`none`}),`
`,(0,r.jsx)(l,{label:`Overview`,level:2}),`
`,(0,r.jsx)(d,{aliases:[`Progress`,`Progress Loader`,`Preloader`,`Loading Bar`,`Progress Indicator`],figmaLink:`https://www.figma.com/design/9jDDTcR4a9jPRFcdjawAlf/ODS---UI-Kit?node-id=49-8976`,githubUrl:`https://github.com/ovh/design-system/tree/master/packages/ods-react/src/components/progress-bar`,name:`Progress Bar`,children:(0,r.jsxs)(t.p,{children:[`The `,(0,r.jsx)(t.strong,{children:`Progress Bar`}),` component is used to indicate the progress of a task or process to users. It visually
represents the completion percentage, providing users with feedback on the status of ongoing operations, such as
file uploads, downloads, or form submissions.`]})}),`
`,(0,r.jsx)(l,{label:`Usage`,level:2}),`
`,(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:`Progress Bar`}),` component is only used in process progression, such as submitting, uploading or saving items.`]}),`
`,(0,r.jsx)(l,{label:`Dos & Don'ts`,level:3}),`
`,(0,r.jsx)(a,{donts:[`- Don't use a Progress Bar to visualize static data or compare values, use a chart or graph instead`,`- Don't display all three labels (start value, end value, current value) at the same time`,`- Don't rely solely on color to communicate progress, include text or value where helpful`,`- Don't use Progress Bar for instantaneous actions where progress feedback is not meaningful, use a spinner instead`],dos:[`- Use a Progress Bar to represent linear, quantifiable progression in processes like uploads or submissions`,`- Prefer Progress Bar when the completion state is measurable (e.g. 0–100%), and users benefit from visual feedback on progress`,`- Use clear labels or indicators (like percentage or step descriptions) if it adds clarity to the task`,`- Pair the Progress Bar with contextual messaging to clarify what is being processed and what happens next`]}),`
`,(0,r.jsx)(l,{label:`Best Practices in Context`,level:3}),`
`,(0,r.jsx)(i,{src:`components/progress-bar/anatomy.png`}),`
`,(0,r.jsxs)(t.ol,{children:[`
`,(0,r.jsx)(t.li,{children:(0,r.jsx)(t.strong,{children:`Progress Bar`})}),`
`,(0,r.jsx)(t.li,{children:(0,r.jsx)(t.strong,{children:`Track`})}),`
`,(0,r.jsx)(t.li,{children:(0,r.jsx)(t.strong,{children:`Progress fill`})}),`
`]}),`
`,(0,r.jsx)(l,{label:`Placement`,level:2}),`
`,(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:`Progress Bar`}),` is usually centered in its container, and can be stretched to match the container width if necessary.`]}),`
`,(0,r.jsx)(l,{label:`Behavior`,level:2}),`
`,(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:`Progress Bar`}),` is filled from the minimum to the maximum value, depending on the progress described.`]}),`
`,(0,r.jsx)(l,{label:`Navigation`,level:2}),`
`,(0,r.jsxs)(t.p,{children:[`The `,(0,r.jsx)(t.strong,{children:`Progress Bar`}),` component is non-interactive and does not receive keyboard focus. It is purely visual and used to indicate progress status without affecting keyboard navigation.`]}),`
`,(0,r.jsx)(l,{label:`Accessibility`,level:2}),`
`,(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:`Progress Bar`}),` component should be properly identified and structured to ensure it is accessible to assistive technologies.`]}),`
`,(0,r.jsx)(l,{label:`Linking the Progress Bar to loading details`,level:3}),`
`,(0,r.jsxs)(t.p,{children:[`To ensure the `,(0,r.jsx)(t.strong,{children:`Progress Bar`}),` is correctly recognized, an `,(0,r.jsx)(c,{href:`https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label`,children:`aria-label`}),` should be added to explicitly identify it.`]}),`
`,(0,r.jsx)(s,{story:`AccessibilityLabel`}),`
`,(0,r.jsxs)(t.p,{children:[(0,r.jsx)(u,{name:`circle-check`,style:{color:`var(--ods-semantic-color-content-success)`}}),` Screen readers will announce the label, the value and the progress bar.`]})]})}function a(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(i,{...e})}):i(e)}function o(e,t){throw Error(`Expected `+(t?`component`:`object`)+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}export{a as default};