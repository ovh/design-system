import{i as e}from"./rolldown-runtime-Dd_uD5pT.js";import{t}from"./jsx-runtime-DREnUpxT.js";import{T as n}from"./index-CzEwg6AJ.js";var r=e(t());function i(e){let t={code:`code`,em:`em`,li:`li`,ol:`ol`,p:`p`,strong:`strong`,ul:`ul`,...n(),...e.components},{Anatomy:i,BestPractices:a,Canvas:s,DocLink:c,ExternalLink:l,Heading:u,IdentityCard:d,Kbd:f}=t;return i||o(`Anatomy`,!0),a||o(`BestPractices`,!0),s||o(`Canvas`,!0),c||o(`DocLink`,!0),l||o(`ExternalLink`,!0),u||o(`Heading`,!0),d||o(`IdentityCard`,!0),f||o(`Kbd`,!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.p,{children:(0,r.jsxs)(t.em,{children:[`A `,(0,r.jsx)(t.strong,{children:`Radio`}),` button allows users to select only one option from a number of choices.`]})}),`
`,(0,r.jsx)(s,{story:`Overview`,source:`none`}),`
`,(0,r.jsx)(u,{label:`Overview`,level:2}),`
`,(0,r.jsx)(d,{aliases:[`Radio button (previous name)`],extraLinks:[(0,r.jsx)(c,{to:`/guides/forms`,children:`Form Guidelines`})],figmaLink:`https://www.figma.com/design/9jDDTcR4a9jPRFcdjawAlf/ODS---UI-Kit?node-id=49-14625`,githubUrl:`https://github.com/ovh/design-system/tree/master/packages/ods-react/src/components/radio-group`,name:`Radio`,children:(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:`Radio Group`}),` is a group of Radios to select a single state from multiples options.`]})}),`
`,(0,r.jsx)(u,{label:`Usage`,level:2}),`
`,(0,r.jsx)(t.p,{children:`In most situations where you want to present a list of mutually exclusive options.`}),`
`,(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:`Radio groups`}),` can be used within a form.`]}),`
`,(0,r.jsx)(t.p,{children:`Also, it can serve as :`}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsx)(t.li,{children:`Selecting choice`}),`
`,(0,r.jsx)(t.li,{children:`Lists/sub-lists`}),`
`,(0,r.jsx)(t.li,{children:`Filters`}),`
`]}),`
`,(0,r.jsx)(u,{label:`Dos & Don'ts`,level:3}),`
`,(0,r.jsx)(a,{donts:[`- Don't use Radio Group when multiple selections are allowed. Use Checkbox instead`,`- Don't use a Radio Group with more than 5 options. Switch to a Select component for better usability`,`- Avoid situations where all options in a set should be deselected`,`- Don't truncate long labels, allow wrapping to maintain readability`],dos:[`- Use Radio Group when users must choose only one option from a set of two or more`,`- Ensure each radio has a clear and concise label, wrapped text is preferable to truncated labels`,`- Keep the number of radios concise (ideally 2 to 5) to avoid overwhelming the user`,`- Consider using a Toggle instead of a two-option Radio Group when the options are affirmative/negative (e.g., "Enable notifications" yes/no)`,`- Group related radios together with a visible label or legend to provide context`]}),`
`,(0,r.jsx)(u,{label:`Best Practices in Context`,level:3}),`
`,(0,r.jsx)(i,{src:`components/radio-group/anatomy.png`}),`
`,(0,r.jsxs)(t.ol,{children:[`
`,(0,r.jsx)(t.li,{children:(0,r.jsx)(t.strong,{children:`Radio Group`})}),`
`,(0,r.jsx)(t.li,{children:(0,r.jsx)(t.strong,{children:`Radio button`})}),`
`,(0,r.jsx)(t.li,{children:(0,r.jsx)(t.strong,{children:`Label`})}),`
`]}),`
`,(0,r.jsx)(u,{label:`Placement`,level:2}),`
`,(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:`Radio Groups`}),` should be vertical, meaning one radio button under another.`]}),`
`,(0,r.jsxs)(t.p,{children:[`Usage of horizontal `,(0,r.jsx)(t.strong,{children:`Radio Groups`}),` should only occur if vertical space is limited.`]}),`
`,(0,r.jsx)(u,{label:`Behavior`,level:2}),`
`,(0,r.jsx)(t.p,{children:`Radio button can be hovered, focused, clicked or disabled. When disabled, radio button cannot be focused nor clicked.`}),`
`,(0,r.jsx)(t.p,{children:`When clicking on one of the radio button or its linked label, the radio button is selected or deselected depending on the previous state.`}),`
`,(0,r.jsxs)(t.p,{children:[`Radio button behavior does work only when used in a situation of a `,(0,r.jsx)(t.strong,{children:`Radio group`}),`.
The `,(0,r.jsx)(t.strong,{children:`Radio group`}),` can be in an error state, but also in a disabled state. It also can be focused and hovered.`]}),`
`,(0,r.jsx)(u,{label:`Variation`,level:2}),`
`,(0,r.jsx)(t.p,{children:`Radio buttons follow the native behavior of the browser used, so the appearance of radio buttons may vary depending on the browser.`}),`
`,(0,r.jsx)(u,{label:`Navigation`,level:2}),`
`,(0,r.jsx)(u,{label:`Focus Management`,level:3}),`
`,(0,r.jsxs)(t.p,{children:[`When the `,(0,r.jsx)(t.strong,{children:`Radio Group`}),` component is focused, focus is automatically set to the first focusable and not disabled radio in the group.`]}),`
`,(0,r.jsx)(t.p,{children:`If a radio button is checked, focus moves to that checked item when the component is focused.`}),`
`,(0,r.jsx)(t.p,{children:`A read-only radio button can receive focus but cannot be selected or modified.`}),`
`,(0,r.jsx)(t.p,{children:`If a radio button is disabled, it cannot receive focus and cannot be selected.`}),`
`,(0,r.jsx)(t.p,{children:`Focus moves through the radio buttons sequentially.`}),`
`,(0,r.jsx)(u,{label:`General Keyboard Shortcuts`,level:3}),`
`,(0,r.jsxs)(t.p,{children:[`Pressing `,(0,r.jsx)(f,{children:`Tab`}),` moves focus to the next focusable and enabled radio button in the group.`]}),`
`,(0,r.jsxs)(t.p,{children:[`Pressing `,(0,r.jsx)(f,{children:`Shift`}),` + `,(0,r.jsx)(f,{children:`Tab`}),` moves focus backward through the radio buttons.`]}),`
`,(0,r.jsxs)(t.p,{children:[`Pressing `,(0,r.jsx)(f,{children:`Arrow Down`}),` or `,(0,r.jsx)(f,{children:`Arrow Right`}),` moves focus and selects the next radio button in the group.`]}),`
`,(0,r.jsxs)(t.p,{children:[`Pressing `,(0,r.jsx)(f,{children:`Arrow Up`}),` or `,(0,r.jsx)(f,{children:`Arrow Left`}),` moves focus and selects the previous radio button in the group.`]}),`
`,(0,r.jsxs)(t.p,{children:[`Pressing `,(0,r.jsx)(f,{children:`Space`}),` when focused on an unchecked radio button selects it.`]}),`
`,(0,r.jsx)(u,{label:`Accessibility`,level:2}),`
`,(0,r.jsxs)(t.p,{children:[`This component complies with the `,(0,r.jsx)(l,{href:`https://www.w3.org/WAI/ARIA/apg/patterns/radio/`,children:`Radio Group WAI-ARIA design pattern`})]}),`
`,(0,r.jsxs)(t.p,{children:[`Try to keep a vertical spacing of at least `,(0,r.jsx)(t.code,{children:`8px`}),` between each radio buttons, to provide sufficient tactile and visual separation.`]})]})}function a(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(i,{...e})}):i(e)}function o(e,t){throw Error(`Expected `+(t?`component`:`object`)+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}export{a as default};