import{i as e}from"./rolldown-runtime-Dd_uD5pT.js";import{t}from"./jsx-runtime-DREnUpxT.js";import{T as n}from"./index-CdRG7ZE_.js";var r=e(t());function i(e){let t={code:`code`,em:`em`,li:`li`,ol:`ol`,p:`p`,strong:`strong`,ul:`ul`,...n(),...e.components},{Anatomy:i,BestPractices:a,Canvas:s,DocLink:c,ExternalLink:l,Heading:u,Icon:d,IdentityCard:f,Kbd:p}=t;return i||o(`Anatomy`,!0),a||o(`BestPractices`,!0),s||o(`Canvas`,!0),c||o(`DocLink`,!0),l||o(`ExternalLink`,!0),u||o(`Heading`,!0),d||o(`Icon`,!0),f||o(`IdentityCard`,!0),p||o(`Kbd`,!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.p,{children:(0,r.jsxs)(t.em,{children:[(0,r.jsx)(t.strong,{children:`Select`}),` component is used to select one or more items from a list of values`]})}),`
`,(0,r.jsx)(s,{story:`Overview`,source:`none`}),`
`,(0,r.jsx)(u,{label:`Overview`,level:2}),`
`,(0,r.jsx)(f,{aliases:[`Dropdown`],extraLinks:[(0,r.jsx)(c,{to:`/guides/forms`,children:`Form Guidelines`})],figmaLink:`https://www.figma.com/design/9jDDTcR4a9jPRFcdjawAlf/ODS---UI-Kit?node-id=49-24314`,githubUrl:`https://github.com/ovh/design-system/tree/master/packages/ods-react/src/components/select`,name:`Select`,children:(0,r.jsxs)(t.p,{children:[`A `,(0,r.jsx)(t.strong,{children:`Select`}),` is used to allow users to select one or more items from a list that is displayed after clicking on it.`]})}),`
`,(0,r.jsx)(u,{label:`Usage`,level:2}),`
`,(0,r.jsxs)(t.p,{children:[`A `,(0,r.jsx)(t.strong,{children:`Select`}),` is used to display to the user a list of items or options to choose from.`]}),`
`,(0,r.jsx)(t.p,{children:`The order of items or options in the list should be sorted as following, depending on the usage:`}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:`Frequency`}),` of use: recommended item will be listed first`]}),`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:`Alpha`}),`: it can be used for countries or city locations for example`]}),`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:`Numeric`}),`: it can be used for sizes for example`]}),`
`]}),`
`,(0,r.jsx)(u,{label:`Dos & Don'ts`,level:3}),`
`,(0,r.jsx)(a,{donts:[`- Don't use a Select for binary choices like "Yes" or "No". Use Radio buttons instead for faster interaction`,`- Don't use Select when users need to compare all available options. Use Radio buttons for better visibility`,`- Don't include very long option labels that wrap multiple lines since it makes scanning and selection harder`,`- Don't rely only on placeholder text to communicate intent. Always pair Select with a label`,`- Don't overload Select with too many items (e.g., hundreds). Consider Combobox or a searchable alternative`],dos:[`- Use a Select when users need to choose one option from a list of three or more items`,`- Order the options logically (e.g., by frequency of use, alphabetical order, or numeric sequence)`,`- Keep option labels short and scannable, ideally one word or a short phrase that fits on a single line`,`- Use placeholder text to prompt users when no option is selected`,`- Consider adding grouping if you have many related options and want to improve clarity`]}),`
`,(0,r.jsx)(u,{label:`Best Practices in Context`,level:3}),`
`,(0,r.jsx)(i,{src:`components/select/anatomy.png`}),`
`,(0,r.jsxs)(t.ol,{children:[`
`,(0,r.jsx)(t.li,{children:(0,r.jsx)(t.strong,{children:`Select`})}),`
`,(0,r.jsx)(t.li,{children:(0,r.jsx)(t.strong,{children:`Field containing placeholder or selection`})}),`
`,(0,r.jsx)(t.li,{children:(0,r.jsx)(t.strong,{children:`Dropdown`})}),`
`,(0,r.jsx)(t.li,{children:(0,r.jsx)(t.strong,{children:`List`})}),`
`,(0,r.jsx)(t.li,{children:(0,r.jsx)(t.strong,{children:`Option`})}),`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:`Group`}),` - optional`]}),`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:`Multi-selection`}),` - optional (display a checkbox)`]}),`
`]}),`
`,(0,r.jsx)(u,{label:`Placement`,level:2}),`
`,(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:`Select`}),` should be vertically aligned with other form components on a same page.`]}),`
`,(0,r.jsxs)(t.p,{children:[`It shares the default width of every form field (280px, capped to its container). To widen it, set `,(0,r.jsx)(t.code,{children:`width: 100%`}),` on the `,(0,r.jsx)(t.strong,{children:`Select`}),` root, not on the `,(0,r.jsx)(t.strong,{children:`SelectControl`}),`.`]}),`
`,(0,r.jsx)(u,{label:`Behavior`,level:2}),`
`,(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:`Select`}),` can be focused and hovered. It also can be disabled. A single option and a group of options can be disabled to be more precise in inner `,(0,r.jsx)(t.strong,{children:`Select`}),` items.`]}),`
`,(0,r.jsx)(u,{label:`Variation`,level:2}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:`Single selection`}),`: Allows the user to select a single item from a dropdown list of options.`]}),`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:`Multiple selection`}),`: Allows the user to select multiple items from a dropdown list of options. The whole line is clickable.`]}),`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:`Grouped options`}),`: Related options can be grouped together in both a single and multi `,(0,r.jsx)(t.strong,{children:`Select`}),`.`]}),`
`]}),`
`,(0,r.jsx)(u,{label:`Navigation`,level:2}),`
`,(0,r.jsx)(u,{label:`Focus Management`,level:3}),`
`,(0,r.jsxs)(t.p,{children:[`When the `,(0,r.jsx)(t.strong,{children:`Select`}),` is enabled, it can receive focus via keyboard interaction.`]}),`
`,(0,r.jsxs)(t.p,{children:[`When the `,(0,r.jsx)(t.strong,{children:`Select`}),` is opened, focus moves into the dropdown content and highlights the selected option (if any), or the first available option.`]}),`
`,(0,r.jsxs)(t.p,{children:[`When closed, focus returns to the `,(0,r.jsx)(t.strong,{children:`Select`}),` trigger.`]}),`
`,(0,r.jsxs)(t.p,{children:[`A read-only `,(0,r.jsx)(t.strong,{children:`Select`}),` can receive focus, but the dropdown cannot be opened or interacted with.`]}),`
`,(0,r.jsxs)(t.p,{children:[`Disabled `,(0,r.jsx)(t.strong,{children:`Select`}),` or disabled options cannot receive focus or be interacted with.`]}),`
`,(0,r.jsx)(u,{label:`General Keyboard Shortcuts`,level:3}),`
`,(0,r.jsxs)(t.p,{children:[`Pressing `,(0,r.jsx)(p,{children:`Space`}),`, `,(0,r.jsx)(p,{children:`Enter`}),`, `,(0,r.jsx)(p,{children:`Arrow Down`}),` or `,(0,r.jsx)(p,{children:`Arrow Up`}),` when the `,(0,r.jsx)(t.strong,{children:`Select`}),` is focused opens the dropdown and highlights the selected or first option.`]}),`
`,(0,r.jsx)(t.p,{children:`While the dropdown is open:`}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(p,{children:`Arrow Down`}),` moves the highlight to the next option`]}),`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(p,{children:`Arrow Up`}),` moves the highlight to the previous option`]}),`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(p,{children:`Enter`}),` or `,(0,r.jsx)(p,{children:`Tab`}),` selects the currently highlighted option and closes the dropdown`]}),`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(p,{children:`Escape`}),` closes the dropdown without making a new selection`]}),`
`]}),`
`,(0,r.jsx)(t.p,{children:`Typing an alphanumeric character (A–Z, a–z) changes focus to the next option starting with that character.`}),`
`,(0,r.jsx)(u,{label:`Accessibility`,level:2}),`
`,(0,r.jsxs)(t.p,{children:[`This component complies with the `,(0,r.jsx)(l,{href:`https://www.w3.org/WAI/ARIA/apg/patterns/listbox/`,children:`Listbox WAI-ARIA design pattern`}),`.`]}),`
`,(0,r.jsx)(u,{label:`Always provide an explicit label`,level:3}),`
`,(0,r.jsxs)(t.p,{children:[`Every `,(0,r.jsx)(t.strong,{children:`Select`}),` must have a clear and explicit label to ensure that users (especially screen reader users) understand its purpose,
using either `,(0,r.jsx)(t.strong,{children:`FormField`}),` or a native label tag.`]}),`
`,(0,r.jsx)(s,{story:`AccessibilityFormField`}),`
`,(0,r.jsxs)(t.p,{children:[(0,r.jsx)(d,{name:`circle-check`,style:{color:`var(--ods-semantic-color-content-success)`}}),` Screen readers will announce the label as well as the select.`]})]})}function a(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(i,{...e})}):i(e)}function o(e,t){throw Error(`Expected `+(t?`component`:`object`)+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}export{a as default};