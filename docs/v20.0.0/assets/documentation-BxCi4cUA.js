import{i as e}from"./rolldown-runtime-Dd_uD5pT.js";import{t}from"./jsx-runtime-DREnUpxT.js";import{T as n}from"./index-CzEwg6AJ.js";var r=e(t());function i(e){let t={code:`code`,em:`em`,li:`li`,ol:`ol`,p:`p`,strong:`strong`,ul:`ul`,...n(),...e.components},{Anatomy:i,BestPractices:a,Canvas:s,DocLink:c,Heading:l,Icon:u,IdentityCard:d,Kbd:f}=t;return i||o(`Anatomy`,!0),a||o(`BestPractices`,!0),s||o(`Canvas`,!0),c||o(`DocLink`,!0),l||o(`Heading`,!0),u||o(`Icon`,!0),d||o(`IdentityCard`,!0),f||o(`Kbd`,!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.p,{children:(0,r.jsxs)(t.em,{children:[`A `,(0,r.jsx)(t.strong,{children:`Timepicker`}),` is a component that allows users to select a time from a list or set a specific time.`]})}),`
`,(0,r.jsx)(s,{story:`Overview`,source:`none`}),`
`,(0,r.jsx)(l,{label:`Overview`,level:2}),`
`,(0,r.jsx)(d,{aliases:[`Time`],extraLinks:[(0,r.jsx)(c,{to:`/guides/forms`,children:`Form Guidelines`})],figmaLink:`https://www.figma.com/design/9jDDTcR4a9jPRFcdjawAlf/ODS---UI-Kit?node-id=53-11662`,githubUrl:`https://github.com/ovh/design-system/tree/master/packages/ods-react/src/components/timepicker`,name:`Timepicker`,children:(0,r.jsxs)(t.p,{children:[`The `,(0,r.jsx)(t.strong,{children:`Timepicker`}),` component is used for selecting times in forms and applications. It provides an interface for users to choose a time, ensuring the format is consistent and valid. The component can include features like 12-hour or 24-hour formats, increments, and disabled times.`]})}),`
`,(0,r.jsx)(l,{label:`Usage`,level:2}),`
`,(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:`Timepicker`}),` is used to allow a selection of a specific time.`]}),`
`,(0,r.jsx)(t.p,{children:`It is useful for scheduling such as planning a meeting.`}),`
`,(0,r.jsxs)(t.p,{children:[`A `,(0,r.jsx)(t.strong,{children:`Timepicker`}),` field includes the hour, minutes and optionally seconds. It can be followed by an AM/PM indicator.`]}),`
`,(0,r.jsx)(t.p,{children:`For some use case, an optional timezone Select can be added to allow users to select their desired timezone from a list of options.`}),`
`,(0,r.jsx)(l,{label:`Dos & Don'ts`,level:3}),`
`,(0,r.jsx)(a,{donts:[`- Don't use a placeholder as a label since it disappears on input and fails accessibility standards`,`- Don't rely on a placeholder to convey critical information like format or timezone. This should be communicated through helper text or labels`,`- Don't use a Timepicker for ambiguous or unclear time selection use cases. Ensure it is the right fit for your form flow and user intent`,`- Don't expose all global timezones unless necessary`],dos:[`- Use a Timepicker when users need to select a specific time, especially for scheduling or planning scenarios`,`- Always pair the Timepicker with a clear label and/or helper text`,`- Combine the Timepicker with a datepicker when both date and time selection are needed in the same context`,`- When offering timezone selection, provide a restricted and relevant list to avoid overwhelming users. Limit options based on business relevance or geography`]}),`
`,(0,r.jsx)(l,{label:`Best Practices in Context`,level:3}),`
`,(0,r.jsx)(i,{src:`components/timepicker/anatomy.png`}),`
`,(0,r.jsxs)(t.ol,{children:[`
`,(0,r.jsx)(t.li,{children:(0,r.jsx)(t.strong,{children:`Timepicker`})}),`
`,(0,r.jsx)(t.li,{children:(0,r.jsx)(t.strong,{children:`Input field`})}),`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:`Timezones select`}),` - optional`]}),`
`]}),`
`,(0,r.jsx)(l,{label:`Placement`,level:2}),`
`,(0,r.jsxs)(t.p,{children:[`A `,(0,r.jsx)(t.strong,{children:`Timepicker`}),` can be used in a page as long as there is a need to allow users to pick a time.`]}),`
`,(0,r.jsxs)(t.p,{children:[`A `,(0,r.jsx)(t.strong,{children:`Timepicker`}),` shares the default width of every form field (280px, capped to its container), time field and timezone select included, so it lines up with the other inputs of a form.`]}),`
`,(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:`Timepicker`}),` should be vertically aligned with other form components on a same page.`]}),`
`,(0,r.jsx)(l,{label:`Behavior`,level:2}),`
`,(0,r.jsxs)(t.p,{children:[`A `,(0,r.jsx)(t.strong,{children:`Timepicker`}),` can widen to match its container by setting `,(0,r.jsx)(t.code,{children:`width: 100%`}),` on its root: the timezone select keeps its content width and the time field takes the remaining space.`]}),`
`,(0,r.jsxs)(t.p,{children:[`It has the same states and behaviors for each inner component (i.e. `,(0,r.jsx)(c,{to:`/components/input`,children:`Input`}),` and `,(0,r.jsx)(c,{to:`/components/select`,children:`Select`}),`).`]}),`
`,(0,r.jsx)(l,{label:`Navigation`,level:2}),`
`,(0,r.jsx)(l,{label:`Focus Management`,level:3}),`
`,(0,r.jsxs)(t.p,{children:[`When the `,(0,r.jsx)(t.strong,{children:`Timepicker`}),` is focused, the first focusable segment (typically the hour Input) receives focus automatically.`]}),`
`,(0,r.jsx)(t.p,{children:`Focus then moves sequentially through the minute and second inputs (if present), followed by the AM/PM toggle (depending on the browser) and the optional timezone select.`}),`
`,(0,r.jsx)(t.p,{children:`Each individual segment can receive focus and be navigated independently using the keyboard. If a segment (e.g., seconds or timezone) is not visible or disabled, it is skipped in the tab order.`}),`
`,(0,r.jsx)(l,{label:`General Keyboard Shortcuts`,level:3}),`
`,(0,r.jsxs)(t.p,{children:[`Pressing `,(0,r.jsx)(f,{children:`Tab`}),` moves focus forward through all focusable segments of the Timepicker:`]}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsx)(t.li,{children:`Hour field`}),`
`,(0,r.jsx)(t.li,{children:`Minute field`}),`
`,(0,r.jsx)(t.li,{children:`Second field (if enabled)`}),`
`,(0,r.jsx)(t.li,{children:`AM/PM toggle (if 12-hour format)`}),`
`,(0,r.jsx)(t.li,{children:`Time zone Select (if present)`}),`
`]}),`
`,(0,r.jsxs)(t.p,{children:[`Pressing `,(0,r.jsx)(f,{children:`Shift`}),` + `,(0,r.jsx)(f,{children:`Tab`}),` moves focus backward through the segments.`]}),`
`,(0,r.jsx)(t.p,{children:`When focused on an input segment (hour, minute, second):`}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsx)(t.li,{children:`Typing numeric values replaces the current value`}),`
`,(0,r.jsxs)(t.li,{children:[`Pressing `,(0,r.jsx)(f,{children:`Arrow Up`}),` increments the value`]}),`
`,(0,r.jsxs)(t.li,{children:[`Pressing `,(0,r.jsx)(f,{children:`Arrow Down`}),` decrements the value`]}),`
`,(0,r.jsxs)(t.li,{children:[`Pressing `,(0,r.jsx)(f,{children:`Backspace`}),` clears the content`]}),`
`,(0,r.jsxs)(t.li,{children:[`Pressing `,(0,r.jsx)(f,{children:`Home`}),` or `,(0,r.jsx)(f,{children:`fn`}),` + `,(0,r.jsx)(f,{children:`Arrow Up`}),` increases the value by:`,`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsx)(t.li,{children:`3 units for the hour segment`}),`
`,(0,r.jsx)(t.li,{children:`10 units for minutes and seconds`}),`
`]}),`
`]}),`
`,(0,r.jsxs)(t.li,{children:[`Pressing `,(0,r.jsx)(f,{children:`End`}),` or `,(0,r.jsx)(f,{children:`fn`}),` + `,(0,r.jsx)(f,{children:`Arrow Down`}),` decreases the value by:`,`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsx)(t.li,{children:`3 units for the hour segment`}),`
`,(0,r.jsx)(t.li,{children:`10 units for minutes and seconds`}),`
`]}),`
`]}),`
`]}),`
`,(0,r.jsx)(t.p,{children:`When focused on the AM/PM toggle:`}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsxs)(t.li,{children:[`Pressing `,(0,r.jsx)(f,{children:`Arrow Up`}),` or `,(0,r.jsx)(f,{children:`Arrow Down`}),` switches between AM and PM`]}),`
`]}),`
`,(0,r.jsx)(t.p,{children:`When focused on the timezone Select, keyboard shortcuts are similar to the Select component:`}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsxs)(t.li,{children:[`Pressing `,(0,r.jsx)(f,{children:`Space`}),` or `,(0,r.jsx)(f,{children:`Arrow Down`}),` opens the dropdown`]}),`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(f,{children:`Arrow`}),` keys navigate options`]}),`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(f,{children:`Enter`}),` or `,(0,r.jsx)(f,{children:`Tab`}),` selects the option and closes the dropdown`]}),`
`,(0,r.jsxs)(t.li,{children:[`Pressing `,(0,r.jsx)(f,{children:`Escape`}),`closes the dropdown`]}),`
`]}),`
`,(0,r.jsx)(l,{label:`Accessibility`,level:2}),`
`,(0,r.jsxs)(t.p,{children:[`To ensure proper accessibility, the `,(0,r.jsx)(t.strong,{children:`Timepicker`}),` component must be correctly labeled.`]}),`
`,(0,r.jsx)(l,{label:`Always provide an explicit label`,level:3}),`
`,(0,r.jsxs)(t.p,{children:[`Every `,(0,r.jsx)(t.strong,{children:`Timepicker`}),` must have a clear and explicit label to ensure that users (especially screen reader users) understand its purpose,
using either `,(0,r.jsx)(t.strong,{children:`FormField`}),` or a native label tag.`]}),`
`,(0,r.jsx)(s,{story:`AccessibilityLabel`}),`
`,(0,r.jsxs)(t.p,{children:[(0,r.jsx)(u,{name:`circle-check`,style:{color:`var(--ods-semantic-color-content-success)`}}),` Screen readers will announce the label, the input time and the select field.`]})]})}function a(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(i,{...e})}):i(e)}function o(e,t){throw Error(`Expected `+(t?`component`:`object`)+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}export{a as default};