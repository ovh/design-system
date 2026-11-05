import{i as e}from"./rolldown-runtime-Dd_uD5pT.js";import{t}from"./jsx-runtime-DREnUpxT.js";import{T as n}from"./index-CdRG7ZE_.js";var r=e(t());function i(e){let t={code:`code`,em:`em`,li:`li`,ol:`ol`,p:`p`,strong:`strong`,ul:`ul`,...n(),...e.components},{Anatomy:i,BestPractices:a,Canvas:s,DocLink:c,Heading:l,Icon:u,IdentityCard:d,Kbd:f}=t;return i||o(`Anatomy`,!0),a||o(`BestPractices`,!0),s||o(`Canvas`,!0),c||o(`DocLink`,!0),l||o(`Heading`,!0),u||o(`Icon`,!0),d||o(`IdentityCard`,!0),f||o(`Kbd`,!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.p,{children:(0,r.jsxs)(t.em,{children:[`A `,(0,r.jsx)(t.strong,{children:`Datepicker`}),` component is used to allow users to select a date. They can navigate through days, months and years.`]})}),`
`,(0,r.jsx)(s,{story:`Overview`,source:`none`}),`
`,(0,r.jsx)(l,{label:`Overview`,level:2}),`
`,(0,r.jsx)(d,{aliases:[`Calendar`],extraLinks:[(0,r.jsx)(c,{to:`/guides/forms`,children:`Form Guidelines`})],figmaLink:`https://www.figma.com/design/9jDDTcR4a9jPRFcdjawAlf/ODS---UI-Kit?node-id=26-7958`,githubUrl:`https://github.com/ovh/design-system/tree/master/packages/ods-react/src/components/datepicker`,name:`Datepicker`,children:(0,r.jsx)(t.p,{children:`The Datepicker component is used for selecting dates in forms and applications. It provides a user-friendly
interface for choosing dates, ensuring that the date format is consistent and valid. This component can include
features such as disabled dates and custom formats.`})}),`
`,(0,r.jsx)(l,{label:`Usage`,level:2}),`
`,(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:`Datepicker`}),` is used to `,(0,r.jsx)(t.strong,{children:`allow a selection of a specific date`}),` in the near future or even past. It is `,(0,r.jsx)(t.strong,{children:`useful for scheduling, or defining user dates`}),`.`]}),`
`,(0,r.jsx)(l,{label:`Dos & Don'ts`,level:3}),`
`,(0,r.jsx)(a,{donts:[`- Don't rely only on placeholders to communicate the date format. Users need persistent guidance (via a label or hint)`,`- Don't use a Datepicker when the user must select a date very far in the past or future (e.g., birthdate). Use a more accessible method like dropdowns or manual input`,`- Don't overload the interface with too many calendar options at once`,`- Don't default the calendar to an irrelevant month/year`],dos:[`- Use a Datepicker when users need to select a specific date`,`- Choose a relevant default date when opening the calendar (e.g., default to the current year/month when not contextually set)`,`- Add a label alongside the input to clearly indicate the expected format, especially when the placeholder disappears on input`,`- Use a Datepicker when users need to select a single date or range of dates`,`- Use a Datepicker for recent or near future dates`,`- When the user has to pick dates in the distant past or future, do choose a more suitable day as Datepicker default date when it will open`]}),`
`,(0,r.jsx)(l,{label:`Best Practices in Context`,level:3}),`
`,(0,r.jsx)(i,{src:`components/datepicker/anatomy.png`}),`
`,(0,r.jsxs)(t.ol,{children:[`
`,(0,r.jsx)(t.li,{children:(0,r.jsx)(t.strong,{children:`Datepicker`})}),`
`,(0,r.jsx)(t.li,{children:(0,r.jsx)(t.strong,{children:`Date field`})}),`
`,(0,r.jsx)(t.li,{children:(0,r.jsx)(t.strong,{children:`Icon button`})}),`
`,(0,r.jsx)(t.li,{children:(0,r.jsx)(t.strong,{children:`Dropdown calendar`})}),`
`,(0,r.jsx)(t.li,{children:(0,r.jsx)(t.strong,{children:`Month/Year button`})}),`
`,(0,r.jsx)(t.li,{children:(0,r.jsx)(t.strong,{children:`Previous/Next month buttons`})}),`
`,(0,r.jsx)(t.li,{children:(0,r.jsx)(t.strong,{children:`Week days`})}),`
`,(0,r.jsx)(t.li,{children:(0,r.jsx)(t.strong,{children:`Day`})}),`
`,(0,r.jsx)(t.li,{children:(0,r.jsx)(t.strong,{children:`Selected day`})}),`
`]}),`
`,(0,r.jsx)(l,{label:`Placement`,level:2}),`
`,(0,r.jsxs)(t.p,{children:[`A `,(0,r.jsx)(t.strong,{children:`Datepicker`}),` can be used in a page as long as there is a need to allow users to pick a date.`]}),`
`,(0,r.jsxs)(t.p,{children:[`The date field shares the default width of every form field (280px, capped to its container), so it lines up with the other inputs of a form. To make it fill its container, give both the `,(0,r.jsx)(t.strong,{children:`Datepicker`}),` and the `,(0,r.jsx)(t.strong,{children:`DatepickerControl`}),` a `,(0,r.jsx)(t.code,{children:`className`}),` that sets `,(0,r.jsx)(t.code,{children:`width: 100%`}),`: the `,(0,r.jsx)(t.strong,{children:`Datepicker`}),` wraps its control in an inline block, which a percentage on the control alone does not widen.`]}),`
`,(0,r.jsxs)(t.p,{children:[`The `,(0,r.jsx)(t.strong,{children:`Datepicker`}),` dropdown has a fixed width and is not adjustable.`]}),`
`,(0,r.jsx)(l,{label:`Behavior`,level:2}),`
`,(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:`Opening the Datepicker`})}),`
`,(0,r.jsxs)(t.p,{children:[`By clicking on the `,(0,r.jsx)(t.strong,{children:`Datepicker`}),` icon button.`]}),`
`,(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:`Closing the Datepicker`})}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsxs)(t.li,{children:[`By clicking outside the `,(0,r.jsx)(t.strong,{children:`Datepicker`}),` dropdown`]}),`
`,(0,r.jsx)(t.li,{children:`By selecting a date`}),`
`]}),`
`,(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:`Date picking mode`})}),`
`,(0,r.jsxs)(t.p,{children:[`Navigating to previous/next month : By clicking on arrow icon `,(0,r.jsx)(c,{to:`/components/button`,children:`Buttons`}),` to navigate through months`]}),`
`,(0,r.jsxs)(t.p,{children:[`Selecting a month : By clicking on the month selection `,(0,r.jsx)(c,{to:`/components/button`,children:`Button`}),` to switch to month picking mode`]}),`
`,(0,r.jsx)(t.p,{children:`Picking a date : By clicking on a date`}),`
`,(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:`Month picking mode`})}),`
`,(0,r.jsxs)(t.p,{children:[`Navigating to previous/next year : By clicking on arrow icon `,(0,r.jsx)(c,{to:`/components/button`,children:`Buttons`}),` to navigate through years`]}),`
`,(0,r.jsxs)(t.p,{children:[`Selecting a year : By clicking on the month selection `,(0,r.jsx)(c,{to:`/components/button`,children:`Button`}),` to switch to year picking mode`]}),`
`,(0,r.jsx)(t.p,{children:`Picking a month: By clicking on a month, the dropdown goes back to date picking mode`}),`
`,(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:`Year picking mode`})}),`
`,(0,r.jsxs)(t.p,{children:[`Navigating to previous/next range of years : By clicking on arrow icon `,(0,r.jsx)(c,{to:`/components/button`,children:`Buttons`}),` to navigate through years`]}),`
`,(0,r.jsxs)(t.p,{children:[`Selecting a decade : By clicking on the month selection `,(0,r.jsx)(c,{to:`/components/button`,children:`Button`}),` to switch to year picking mode`]}),`
`,(0,r.jsx)(t.p,{children:`Picking a month: By clicking on a month, the dropdown goes back to date picking mode`}),`
`,(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:`Locale`})}),`
`,(0,r.jsxs)(t.p,{children:[`Locale determines how the week days will be displayed according to the localization. The `,(0,r.jsx)(t.strong,{children:`Datepicker`}),` supports the following locales: English (default), German, Spanish, French, Italian, Dutch, Polish and Portuguese.`]}),`
`,(0,r.jsx)(l,{label:`Navigation`,level:2}),`
`,(0,r.jsx)(l,{label:`Focus Management`,level:3}),`
`,(0,r.jsxs)(t.p,{children:[`The `,(0,r.jsx)(t.strong,{children:`Datepicker`}),` icon button can receive the focus.`]}),`
`,(0,r.jsx)(t.p,{children:`When the dropdown calendar opens, the focus is moved to the currently selected date, or to today's date if none is selected.`}),`
`,(0,r.jsx)(t.p,{children:`When the dropdown is closed (via Escape or blur), focus returns to the Datepicker trigger (the input field).`}),`
`,(0,r.jsx)(l,{label:`General Keyboard Shortcuts`,level:3}),`
`,(0,r.jsxs)(t.p,{children:[`Pressing `,(0,r.jsx)(f,{children:`Escape`}),` closes the Datepicker dropdown without selecting a date.`]}),`
`,(0,r.jsxs)(t.p,{children:[`Pressing `,(0,r.jsx)(f,{children:`Tab`}),` or `,(0,r.jsx)(f,{children:`Shift`}),` + `,(0,r.jsx)(f,{children:`Tab`}),` moves focus through dropdown controls when open.`]}),`
`,(0,r.jsx)(l,{label:`Navigating days`,level:3}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(f,{children:`Arrow Left`}),`: Move to the previous day`]}),`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(f,{children:`Arrow Right`}),`: Move to the next day`]}),`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(f,{children:`Arrow Up`}),`: Move to the same weekday of the previous week`]}),`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(f,{children:`Arrow Down`}),`: Move to the same weekday of the next week`]}),`
`]}),`
`,(0,r.jsx)(l,{label:`Jumping within the calendar`,level:3}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(f,{children:`Home`}),`: Move to the first day of the current month`]}),`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(f,{children:`End`}),`: Move to the last day of the current month`]}),`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(f,{children:`Page Up`}),`: Move to the same date of the previous month`]}),`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(f,{children:`Page Down`}),`: Move to the same date of the next month`]}),`
`]}),`
`,(0,r.jsx)(l,{label:`Selecting a date or changing view`,level:3}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(f,{children:`Enter`}),`: Select the currently focused date and close the dropdown`]}),`
`,(0,r.jsxs)(t.li,{children:[`Typing a valid date format (e.g., yyyy-mm-dd) in the input and pressing `,(0,r.jsx)(f,{children:`Enter`}),` will also select the date`]}),`
`]}),`
`,(0,r.jsx)(l,{label:`Navigating to month/year view`,level:3}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(f,{children:`Ctrl`}),` / `,(0,r.jsx)(f,{children:`Cmd`}),` + `,(0,r.jsx)(f,{children:`Arrow Up`}),` (first press): Switches to month selection view`]}),`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(f,{children:`Ctrl`}),` / `,(0,r.jsx)(f,{children:`Cmd`}),` + `,(0,r.jsx)(f,{children:`Arrow Up`}),` (second press): Switches to year selection view`]}),`
`,(0,r.jsxs)(t.li,{children:[`Use `,(0,r.jsx)(f,{children:`Arrow`}),` keys to move within month/year grids`]}),`
`,(0,r.jsxs)(t.li,{children:[`Press `,(0,r.jsx)(f,{children:`Enter`}),` to confirm selection and return to the previous view`]}),`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(f,{children:`Ctrl`}),` / `,(0,r.jsx)(f,{children:`Cmd`}),` + `,(0,r.jsx)(f,{children:`Arrow Left`}),` / `,(0,r.jsx)(f,{children:`Arrow Right`}),`: Quickly navigate to the previous or next month from date view`]}),`
`]}),`
`,(0,r.jsx)(l,{label:`Accessibility`,level:2}),`
`,(0,r.jsxs)(t.p,{children:[`To ensure proper accessibility, the `,(0,r.jsx)(t.strong,{children:`Datepicker`}),` must be correctly labeled, provide clear guidance on date format and meaningful context when a clearable button is used.`]}),`
`,(0,r.jsx)(l,{label:`Always provide an explicit label`,level:3}),`
`,(0,r.jsxs)(t.p,{children:[`Every `,(0,r.jsx)(t.strong,{children:`Datepicker`}),` must have a clear and explicit label to ensure that users (especially screen reader users) understand its purpose
using either `,(0,r.jsx)(t.strong,{children:`FormField`}),` or a native label tag.`]}),`
`,(0,r.jsx)(s,{story:`AccessibilityFormField`}),`
`,(0,r.jsxs)(t.p,{children:[(0,r.jsx)(u,{name:`circle-check`,style:{color:`var(--ods-semantic-color-content-success)`}}),`  Screen readers will announce the label, the field and its content.`]}),`
`,(0,r.jsx)(l,{label:`Provide guidance on date format`,level:3}),`
`,(0,r.jsxs)(t.p,{children:[`Since screen readers can only interact with the `,(0,r.jsx)(t.strong,{children:`Datepicker`}),` input field, it’s important to provide guidance on the expected date format to ensure correct input.`]}),`
`,(0,r.jsx)(s,{story:`AccessibilityDateFormat`}),`
`,(0,r.jsxs)(t.p,{children:[(0,r.jsx)(u,{name:`circle-check`,style:{color:`var(--ods-semantic-color-content-success)`}}),` Screen readers will announce the label, the field, its content and the helper.`]}),`
`,(0,r.jsx)(s,{story:`AccessibilityI18n`}),`
`,(0,r.jsxs)(t.p,{children:[(0,r.jsx)(u,{name:`circle-check`,style:{color:`var(--ods-semantic-color-content-success)`}}),` Screen readers will announce the label, the field, its content and custom label of focused action.`]})]})}function a(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(i,{...e})}):i(e)}function o(e,t){throw Error(`Expected `+(t?`component`:`object`)+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}export{a as default};