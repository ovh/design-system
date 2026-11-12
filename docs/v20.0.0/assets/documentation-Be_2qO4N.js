import{i as e}from"./rolldown-runtime-Dd_uD5pT.js";import{t}from"./jsx-runtime-DREnUpxT.js";import{T as n}from"./index-CzEwg6AJ.js";var r=e(t());function i(e){let t={em:`em`,li:`li`,ol:`ol`,p:`p`,strong:`strong`,ul:`ul`,...n(),...e.components},{Anatomy:i,BestPractices:a,Canvas:s,DocLink:c,ExternalLink:l,Heading:u,Icon:d,IdentityCard:f,Kbd:p}=t;return i||o(`Anatomy`,!0),a||o(`BestPractices`,!0),s||o(`Canvas`,!0),c||o(`DocLink`,!0),l||o(`ExternalLink`,!0),u||o(`Heading`,!0),d||o(`Icon`,!0),f||o(`IdentityCard`,!0),p||o(`Kbd`,!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.p,{children:(0,r.jsxs)(t.em,{children:[(0,r.jsx)(t.strong,{children:`Combobox`}),` allows users to search, select, and add items from a dynamic or predefined list.`]})}),`
`,(0,r.jsx)(s,{story:`Overview`,source:`none`}),`
`,(0,r.jsx)(u,{label:`Overview`,level:2}),`
`,(0,r.jsx)(f,{aliases:[`Autocomplete`,`Dropdown Search`,`Autosuggest`,`Filterable Select`],extraLinks:[(0,r.jsx)(c,{to:`/guides/forms`,children:`Form Guidelines`})],figmaLink:`https://www.figma.com/design/9jDDTcR4a9jPRFcdjawAlf/ODS---UI-Kit?node-id=6046-9189`,githubUrl:`https://github.com/ovh/design-system/tree/master/packages/ods-react/src/components/combobox`,name:`Combobox`,children:(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:`Combobox`}),` component allows users to search for and select items from a dynamic list of suggestions or a predefined set of allowed values. It supports both single and multiple selection modes and enables users to create new entries.`]})}),`
`,(0,r.jsx)(u,{label:`Usage`,level:2}),`
`,(0,r.jsxs)(t.p,{children:[`The `,(0,r.jsx)(t.strong,{children:`Combobox`}),` is best suited when users need to:`]}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsx)(t.li,{children:`search within a dataset and dynamically refine results`}),`
`,(0,r.jsx)(t.li,{children:`provide suggestions based on user input (e.g., domain names, tags, predictive search)`}),`
`,(0,r.jsx)(t.li,{children:`allow users to add custom values when applicable (e.g., creating tags)`}),`
`]}),`
`,(0,r.jsx)(u,{label:`Dos & Don'ts`,level:3}),`
`,(0,r.jsx)(a,{donts:[`- Avoid excessive grouping of items, as too many categories can overwhelm users`,`- Avoid using combobox when the number of items is very small (except for if the user needs to be able to add their own entries), you can use Select or Radio`],dos:[`- Use Combobox for datasets where typing helps filter results`,`- Suitable for datasets up to a few hundred entries`,`- Provide meaningful empty states`,`- Allow users to add custom entries when appropriate`]}),`
`,(0,r.jsx)(u,{label:`Best Practices in Context`,level:2}),`
`,(0,r.jsx)(i,{src:`components/combobox/anatomy.png`}),`
`,(0,r.jsxs)(t.ol,{children:[`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(c,{to:`/components/input`,children:`Input`}),` where the user types the search query. It displays the current input value or selected tags (multiple selection mode)`]}),`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:`Dropdown list`}),` displaying a scrollable list of suggested items. Items can be customized using a custom renderer.`]}),`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(c,{to:`/components/tag`,children:`Tag`}),` `,(0,r.jsx)(t.em,{children:`(multiple selection mode)`}),` to display selected items as tags inside the Input field`]}),`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:`Clearable`}),` `,(0,r.jsx)(c,{to:`/components/button`,children:`Button`}),` `,(0,r.jsx)(t.em,{children:`(optional)`}),` to allow users to clear the input content`]}),`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(c,{to:`/components/spinner`,children:`Spinner`}),` `,(0,r.jsx)(t.em,{children:`(optional)`}),` to indicate that data is being fetched`]}),`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:`Add entry option`}),` `,(0,r.jsx)(t.em,{children:`(optional)`}),` allows users to create new entries when no matching result is found. The label is customizable`]}),`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:`Empty state message`}),` is a customizable message displayed when no suggestion match the query`]}),`
`]}),`
`,(0,r.jsx)(u,{label:`Placement`,level:2}),`
`,(0,r.jsx)(t.p,{children:`The dropdown is positioned below the Input field when there is enough space.`}),`
`,(0,r.jsx)(t.p,{children:`The dropdown width should match the Input field width.`}),`
`,(0,r.jsx)(t.p,{children:`In multiple selection mode, the Input field height grows dynamically to accommodate selected tags.`}),`
`,(0,r.jsx)(u,{label:`Behavior`,level:2}),`
`,(0,r.jsx)(u,{label:`Triggering the dropdown`,level:3}),`
`,(0,r.jsx)(t.p,{children:`The dropdown appears when the user clicks on the input field.`}),`
`,(0,r.jsx)(u,{label:`Selecting items`,level:3}),`
`,(0,r.jsx)(t.p,{children:`Selecting an item triggers a custom event, allowing integrators to process the selected value(s).`}),`
`,(0,r.jsx)(u,{label:`Single selection mode`,level:4}),`
`,(0,r.jsx)(t.p,{children:`Clicking on an item selects it, closes the dropdown, and updates the Input field value.`}),`
`,(0,r.jsx)(t.p,{children:`If the user exits the field without selecting an item, the input reverts to the placeholder or the last selected value (if any).`}),`
`,(0,r.jsx)(u,{label:`Creating new entries`,level:3}),`
`,(0,r.jsxs)(t.p,{children:[`User can create new entries when no matching result exists. An `,(0,r.jsx)(t.strong,{children:`"Add entry"`}),` option appears at the top of the dropdown (label is customizable).`]}),`
`,(0,r.jsx)(t.p,{children:`New entries can be added by clicking on the "Add entry" option.`}),`
`,(0,r.jsx)(u,{label:`Case sensitivity rules`,level:4}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsxs)(t.li,{children:[`
`,(0,r.jsx)(t.p,{children:`search input is case-insensitive (e.g., searching for "a" will match "A")`}),`
`]}),`
`,(0,r.jsxs)(t.li,{children:[`
`,(0,r.jsx)(t.p,{children:`newly created entries are not case-sensitive`}),`
`]}),`
`]}),`
`,(0,r.jsx)(t.p,{children:`Users cannot create an entry that is already selected as a tag.`}),`
`,(0,r.jsx)(t.p,{children:`If a custom entry added via "Add Entry" option is removed, it does not reappear in the dropdown, as it was not part of the original list.`}),`
`,(0,r.jsx)(u,{label:`Clearable Button`,level:3}),`
`,(0,r.jsx)(t.p,{children:`If the clearable option is enabled, a dedicated Button appears inside the Input field when it contains text:`}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsx)(t.li,{children:`clicking the clearable Button resets the Input field, removing any entered text or selected value(s)`}),`
`,(0,r.jsx)(t.li,{children:`in multiple selection mode, only the current Input text is cleared; selected tags remain`}),`
`]}),`
`,(0,r.jsx)(u,{label:`Loading state`,level:3}),`
`,(0,r.jsx)(t.p,{children:`A Spinner can be displayed in the Input field when results are being fetched.`}),`
`,(0,r.jsx)(u,{label:`Empty state`,level:3}),`
`,(0,r.jsx)(t.p,{children:`When no matching results are found, a customizable message is displayed in the dropdown.`}),`
`,(0,r.jsx)(t.p,{children:`This state can be combined with the "Add entry" option.`}),`
`,(0,r.jsx)(u,{label:`Grouped items`,level:3}),`
`,(0,r.jsx)(t.p,{children:`Items can be categorized into groups in both single and multiple selection modes.`}),`
`,(0,r.jsx)(t.p,{children:`Group titles cannot be selected, clicked and are excluded from search.`}),`
`,(0,r.jsx)(u,{label:`Navigation`,level:2}),`
`,(0,r.jsx)(u,{label:`Focus management`,level:3}),`
`,(0,r.jsxs)(t.p,{children:[`The Input field can be focused using the `,(0,r.jsx)(p,{children:`Tab`}),` key. Pressing `,(0,r.jsx)(p,{children:`Tab`}),` again moves focus to the next element and closes the dropdown.`]}),`
`,(0,r.jsxs)(t.p,{children:[`If the Input field is clearable, pressing `,(0,r.jsx)(p,{children:`Tab`}),` first moves focus to the clear button, then to the next element.`]}),`
`,(0,r.jsxs)(t.p,{children:[`Pressing `,(0,r.jsx)(p,{children:`Shift`}),` + `,(0,r.jsx)(p,{children:`Tab`}),` moves focus to the previous interactive element without confirming any item.`]}),`
`,(0,r.jsx)(u,{label:`General keyboard shortcuts`,level:3}),`
`,(0,r.jsxs)(t.p,{children:[`Pressing `,(0,r.jsx)(p,{children:`Arrow Up`}),`/`,(0,r.jsx)(p,{children:`Arrow Down`}),` navigates through items in the dropdown.`]}),`
`,(0,r.jsxs)(t.p,{children:[`Pressing `,(0,r.jsx)(p,{children:`Backspace`}),` deletes the last character in the Input field (it does not clear the entire field at once).`]}),`
`,(0,r.jsxs)(t.p,{children:[`Pressing `,(0,r.jsx)(p,{children:`Enter`}),` selects the hovered item and closes the dropdown.`]}),`
`,(0,r.jsxs)(t.p,{children:[`Pressing `,(0,r.jsx)(p,{children:`Escape`}),` closes the dropdown without selection.`]}),`
`,(0,r.jsx)(u,{label:`Multiple selection mode`,level:4}),`
`,(0,r.jsxs)(t.p,{children:[`Pressing `,(0,r.jsx)(p,{children:`Arrow Left`}),`/`,(0,r.jsx)(p,{children:`Arrow Right`}),` navigates between selected tags.`]}),`
`,(0,r.jsxs)(t.p,{children:[`Pressing `,(0,r.jsx)(p,{children:`Backspace`}),` while focusing a tag will remove it.`]}),`
`,(0,r.jsxs)(t.p,{children:[`Pressing `,(0,r.jsx)(p,{children:`Enter`}),` while focusing a tag will remove it.`]}),`
`,(0,r.jsx)(u,{label:`Accessibility`,level:2}),`
`,(0,r.jsxs)(t.p,{children:[`This component complies with the `,(0,r.jsx)(l,{href:`https://www.w3.org/WAI/ARIA/apg/patterns/combobox/`,children:`Combobox WAI-ARIA design pattern`}),`.`]}),`
`,(0,r.jsx)(u,{label:`Always provide an explicit label`,level:3}),`
`,(0,r.jsxs)(t.p,{children:[`Every `,(0,r.jsx)(t.strong,{children:`Combobox`}),` must have a clear and explicit label to ensure that users (especially screen reader users) understand its purpose, using either `,(0,r.jsx)(t.strong,{children:`FormField`}),` or a native label tag.`]}),`
`,(0,r.jsx)(s,{story:`AccessibilityFormField`}),`
`,(0,r.jsxs)(t.p,{children:[(0,r.jsx)(d,{name:`circle-check`,style:{color:`var(--ods-semantic-color-content-success)`}}),` Screen readers will announce the label, the field and its content.`]}),`
`,(0,r.jsx)(u,{label:`Override action context`,level:3}),`
`,(0,r.jsx)(t.p,{children:`To provide more context on the interactive elements, you can provide your own custom translations to the component.`}),`
`,(0,r.jsx)(s,{story:`AccessibilityI18n`}),`
`,(0,r.jsxs)(t.p,{children:[(0,r.jsx)(d,{name:`circle-check`,style:{color:`var(--ods-semantic-color-content-success)`}}),` Screen readers will announce the label, the field, its content and custom label of focused action.`]})]})}function a(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(i,{...e})}):i(e)}function o(e,t){throw Error(`Expected `+(t?`component`:`object`)+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}export{a as default};