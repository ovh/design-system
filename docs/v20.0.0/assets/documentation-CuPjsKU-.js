import{i as e}from"./rolldown-runtime-Dd_uD5pT.js";import{t}from"./jsx-runtime-DREnUpxT.js";import{T as n}from"./index-CzEwg6AJ.js";var r=e(t());function i(e){let t={em:`em`,li:`li`,ol:`ol`,p:`p`,strong:`strong`,ul:`ul`,...n(),...e.components},{Anatomy:i,BestPractices:a,Canvas:s,DocLink:c,Heading:l,Icon:u,IdentityCard:d,Kbd:f}=t;return i||o(`Anatomy`,!0),a||o(`BestPractices`,!0),s||o(`Canvas`,!0),c||o(`DocLink`,!0),l||o(`Heading`,!0),u||o(`Icon`,!0),d||o(`IdentityCard`,!0),f||o(`Kbd`,!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.p,{children:(0,r.jsxs)(t.em,{children:[(0,r.jsx)(t.strong,{children:`Phone Number`}),` component is a combo of a selection of country phone indicator and an `,(0,r.jsx)(c,{to:`/components/input`,children:`Input`}),` field for entering a phone number`]})}),`
`,(0,r.jsx)(s,{story:`Overview`,source:`none`}),`
`,(0,r.jsx)(l,{label:`Overview`,level:2}),`
`,(0,r.jsx)(d,{aliases:[`Phone Number Field`],extraLinks:[(0,r.jsx)(c,{to:`/guides/forms`,children:`Form Guidelines`})],figmaLink:`https://www.figma.com/design/9jDDTcR4a9jPRFcdjawAlf/ODS---UI-Kit?node-id=48-6130`,githubUrl:`https://github.com/ovh/design-system/tree/master/packages/ods-react/src/components/phone-number`,name:`Phone Number`,children:(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:`Phone Number`}),` component is used to let users enter their phone number in the correct format for the selected
country.`]})}),`
`,(0,r.jsx)(l,{label:`Usage`,level:2}),`
`,(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:`Phone Number`}),` component should be used when there is a need to collect the user's phone number, in a form for instance:`]}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsx)(t.li,{children:`An user profile`}),`
`,(0,r.jsx)(t.li,{children:`A contact/appointment form`}),`
`,(0,r.jsx)(t.li,{children:`For telecom configuration`}),`
`]}),`
`,(0,r.jsx)(l,{label:`Dos & Don'ts`,level:3}),`
`,(0,r.jsx)(a,{donts:[`- Don't enforce a rigid format (e.g., requiring users to enter parentheses or dashes), prioritize forgiving input`,`- Don't make the field required without context. Explain clearly why the phone number is needed (e.g., for account recovery or verification)`,`- Don't assume all users have mobile numbers. Allow landline formats where applicable`,`- Don't display country codes or formats that aren't relevant to your supported markets`],dos:[`- Use the country indicator Select when your application supports international phone numbers`,`- Display helper text or error messaging to guide users if the input format is incorrect (e.g., expected digit count or formatting rules)`,`- If phone numbers are only accepted in the user's locale, use the component without the country code Select`]}),`
`,(0,r.jsx)(l,{label:`Best Practices in Context`,level:3}),`
`,(0,r.jsx)(i,{src:`components/phone-number/anatomy.png`}),`
`,(0,r.jsxs)(t.ol,{children:[`
`,(0,r.jsx)(t.li,{children:(0,r.jsx)(t.strong,{children:`Phone Number`})}),`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:`Country selector`}),` - optional`]}),`
`,(0,r.jsx)(t.li,{children:(0,r.jsx)(t.strong,{children:`Input field`})}),`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:`Clearable button`}),` - optional`]}),`
`]}),`
`,(0,r.jsx)(l,{label:`Placement`,level:2}),`
`,(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:`Phone Number`}),` is a group of `,(0,r.jsx)(c,{to:`/components/select`,children:`Select`}),` and `,(0,r.jsx)(c,{to:`/components/input`,children:`Input`}),`, and should act as their specific placements.`]}),`
`,(0,r.jsx)(l,{label:`Behavior`,level:2}),`
`,(0,r.jsx)(t.p,{children:`When the user selects a country, it determines the format used to validate their phone number. If selected country has been modified, expected format and placeholder will be updated.`}),`
`,(0,r.jsxs)(t.p,{children:[`If the field content is in error state (i.e. missing or wrong characters), the whole `,(0,r.jsx)(t.strong,{children:`Phone Number`}),` component becomes in error state.`]}),`
`,(0,r.jsx)(t.p,{children:`The country selector allows users to navigate to the desired country option by typing letters while focused on the country selector.`}),`
`,(0,r.jsx)(t.p,{children:`The search is based on the start of the word and functions one letter at a time.`}),`
`,(0,r.jsx)(t.p,{children:`For example:`}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsx)(t.li,{children:`Typing "f" focus the first country that starts with "f".`}),`
`,(0,r.jsx)(t.li,{children:`Typing "r" immediately after focus the first country that starts with "r".`}),`
`]}),`
`,(0,r.jsx)(l,{label:`Locale`,level:3}),`
`,(0,r.jsxs)(t.p,{children:[`The locale (i.e. country list translation in `,(0,r.jsx)(c,{to:`/components/select`,children:`Select`}),`) is first set to the value provided as a property.`]}),`
`,(0,r.jsx)(t.p,{children:`If the given property is not defined or recognized, the component attempts to use the browser's locale settings.`}),`
`,(0,r.jsx)(t.p,{children:`If the browser's locale is also not recognized, the component defaults to English (EN).`}),`
`,(0,r.jsx)(l,{label:`ISO code`,level:3}),`
`,(0,r.jsx)(t.p,{children:`The ISO code is initially set to the value provided as a property.`}),`
`,(0,r.jsx)(t.p,{children:`If the given property is not defined or recognized, the component attempts to determine the ISO code based on the browser's locale.`}),`
`,(0,r.jsx)(t.p,{children:`If the browser's locale is not recognized, the component defaults to the first ISO code in the predefined country list.`}),`
`,(0,r.jsx)(l,{label:`Navigation`,level:2}),`
`,(0,r.jsx)(l,{label:`Focus Management`,level:3}),`
`,(0,r.jsxs)(t.p,{children:[`When the `,(0,r.jsx)(t.strong,{children:`Phone Number`}),` component is focused, focus is first set to the country selector dropdown, if present, or directly to the Input field.`]}),`
`,(0,r.jsx)(t.p,{children:`Each subcomponent (Select and Input) can be focused independently using keyboard navigation.`}),`
`,(0,r.jsx)(t.p,{children:`If the country selector is disabled or not rendered, focus starts directly on the Input field.`}),`
`,(0,r.jsx)(l,{label:`General Keyboard Shortcuts`,level:3}),`
`,(0,r.jsxs)(t.p,{children:[`Pressing `,(0,r.jsx)(f,{children:`Tab`}),` moves focus forward:`]}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsx)(t.li,{children:`First to the country selector (if present and enabled)`}),`
`,(0,r.jsx)(t.li,{children:`Then to the Phone Number Input field`}),`
`]}),`
`,(0,r.jsxs)(t.p,{children:[`Pressing `,(0,r.jsx)(f,{children:`Shift`}),` + `,(0,r.jsx)(f,{children:`Tab`}),` moves focus backward through these elements.`]}),`
`,(0,r.jsx)(t.p,{children:`While focused on the country selector, keyboard shortcuts are similar to the Select component:`}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsxs)(t.li,{children:[`Pressing `,(0,r.jsx)(f,{children:`Space`}),` or `,(0,r.jsx)(f,{children:`Arrow Down`}),` opens the dropdown`]}),`
`,(0,r.jsxs)(t.li,{children:[`Pressing `,(0,r.jsx)(f,{children:`Arrow`}),` keys navigates through the list of countries`]}),`
`,(0,r.jsxs)(t.li,{children:[`Pressing `,(0,r.jsx)(f,{children:`Home`}),`/`,(0,r.jsx)(f,{children:`fn`}),`+ `,(0,r.jsx)(f,{children:`Arrow Up`}),` or `,(0,r.jsx)(f,{children:`End`}),`/`,(0,r.jsx)(f,{children:`fn`}),` + `,(0,r.jsx)(f,{children:`Arrow Down`}),` jumps to the first or last option`]}),`
`,(0,r.jsx)(t.li,{children:`Typing letters focuses the first country whose name starts with the typed character`}),`
`,(0,r.jsxs)(t.li,{children:[`Pressing `,(0,r.jsx)(f,{children:`Enter`}),` or `,(0,r.jsx)(f,{children:`Tab`}),` selects the focused country and closes the dropdown`]}),`
`,(0,r.jsxs)(t.li,{children:[`Pressing `,(0,r.jsx)(f,{children:`Escape`}),` closes the dropdown without selection`]}),`
`]}),`
`,(0,r.jsx)(t.p,{children:`While focused on the Input field:`}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsx)(t.li,{children:`Typing numeric characters enters the phone number`}),`
`,(0,r.jsxs)(t.li,{children:[`Pressing `,(0,r.jsx)(f,{children:`Backspace`}),` deletes the last character`]}),`
`,(0,r.jsxs)(t.li,{children:[`Pressing `,(0,r.jsx)(f,{children:`Arrow Left`}),` or `,(0,r.jsx)(f,{children:`Arrow Right`}),` moves the cursor within the input`]}),`
`]}),`
`,(0,r.jsx)(l,{label:`Accessibility`,level:2}),`
`,(0,r.jsxs)(t.p,{children:[`To ensure proper accessibility, the `,(0,r.jsx)(t.strong,{children:`Phone Number`}),` component must be correctly labeled and provide meaningful context when interactive elements (such as icon buttons) are used.`]}),`
`,(0,r.jsx)(l,{label:`Always provide an explicit label`,level:3}),`
`,(0,r.jsxs)(t.p,{children:[`Every `,(0,r.jsx)(t.strong,{children:`Phone Number`}),` must have a clear and explicit label to ensure that users (especially screen reader users) understand its purpose, using either `,(0,r.jsx)(t.strong,{children:`FormField`}),` or a native label tag.`]}),`
`,(0,r.jsx)(s,{story:`AccessibilityFormField`}),`
`,(0,r.jsxs)(t.p,{children:[(0,r.jsx)(u,{name:`circle-check`,style:{color:`var(--ods-semantic-color-content-success)`}}),` Screen readers will announce the label, the field and its content.`]}),`
`,(0,r.jsx)(l,{label:`Override action context`,level:3}),`
`,(0,r.jsx)(t.p,{children:`To provide more context on the interactive elements, you can provide your own custom translations to the component.`}),`
`,(0,r.jsx)(s,{story:`AccessibilityI18n`}),`
`,(0,r.jsxs)(t.p,{children:[(0,r.jsx)(u,{name:`circle-check`,style:{color:`var(--ods-semantic-color-content-success)`}}),` Screen readers will announce the label, the field, its content and custom label of focused action.`]})]})}function a(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(i,{...e})}):i(e)}function o(e,t){throw Error(`Expected `+(t?`component`:`object`)+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}export{a as default};