import{i as e}from"./rolldown-runtime-Dd_uD5pT.js";import{t}from"./jsx-runtime-DREnUpxT.js";import{T as n}from"./index-CdRG7ZE_.js";var r=e(t());function i(e){let t={code:`code`,em:`em`,li:`li`,ol:`ol`,p:`p`,pre:`pre`,strong:`strong`,...n(),...e.components},{Anatomy:i,BestPractices:a,Canvas:s,DocLink:c,Heading:l,Icon:u,IdentityCard:d,Kbd:f}=t;return i||o(`Anatomy`,!0),a||o(`BestPractices`,!0),s||o(`Canvas`,!0),c||o(`DocLink`,!0),l||o(`Heading`,!0),u||o(`Icon`,!0),d||o(`IdentityCard`,!0),f||o(`Kbd`,!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.p,{children:(0,r.jsxs)(t.em,{children:[(0,r.jsx)(t.strong,{children:`Input`}),` component is an `,(0,r.jsx)(t.strong,{children:`Input`}),` field where users can type into`]})}),`
`,(0,r.jsx)(s,{story:`Overview`,source:`none`}),`
`,(0,r.jsx)(l,{label:`Overview`,level:2}),`
`,(0,r.jsx)(d,{aliases:[`Text Input`,`Text Field`],extraLinks:[(0,r.jsx)(c,{to:`/guides/forms`,children:`Form Guidelines`})],figmaLink:`https://www.figma.com/design/9jDDTcR4a9jPRFcdjawAlf/ODS---UI-Kit?node-id=93-22570`,githubUrl:`https://github.com/ovh/design-system/tree/master/packages/ods-react/src/components/input`,name:`Input`,children:(0,r.jsxs)(t.p,{children:[`An `,(0,r.jsx)(t.strong,{children:`Input`}),` is used to allow the user to enter a single line information in a field.`]})}),`
`,(0,r.jsx)(l,{label:`Usage`,level:2}),`
`,(0,r.jsxs)(t.p,{children:[`An `,(0,r.jsx)(t.strong,{children:`Input`}),` is used to type a free-form short text in a field. It is often used within a Form Field component that adds its label.`]}),`
`,(0,r.jsx)(t.p,{children:`It is commonly used in a form, such as asking the user their name or email address, data entered can be text or numbers.`}),`
`,(0,r.jsxs)(t.p,{children:[`The `,(0,r.jsx)(t.strong,{children:`Input`}),` component can be used in addition with an `,(0,r.jsx)(t.strong,{children:`Autocomplete`}),`.`]}),`
`,(0,r.jsx)(l,{label:`Dos & Don'ts`,level:3}),`
`,(0,r.jsx)(a,{donts:[`- Don't use an Input for multi-line content, use a Textarea instead`,`- Don't use an Input when users must choose from a predefined set of answers. Prefer Select, Combobox, or Radio`,`- Don't leave an Input without a label`,`- Don't overload the Input with multiple embedded actions (e.g., clear + search + toggle) since it creates visual clutter`,`- Don't use an Input that is inappropriately sized for its content`,`- Don't rely on start or end content to convey the field's purpose: it complements the label, it does not replace it`,`- Don't give start or end content its own background or border, and don't make it taller than the field`],dos:[`- Always pair the Input with a clear and explicit label, using the Form Field component for example`,`- Provide a helper message or validation feedback below the Input when appropriate (e.g., expected format or error state)`,`- Use the clearable button option when it helps users reset the field quickly and efficiently`,`- Use the toggle mask button for sensitive inputs to let users show or hide the content`,`- Include a search button within the Input if a specific action is expected (e.g., triggering a search)`,`- Choose the appropriate input type (email, password, search, etc.) to support native validation`,`- Use start or end content for a unit, a currency symbol or a fixed part of the value, so the user does not have to type it`]}),`
`,(0,r.jsx)(l,{label:`Best Practices in Context`,level:3}),`
`,(0,r.jsx)(i,{src:`components/input/anatomy.png`}),`
`,(0,r.jsxs)(t.ol,{children:[`
`,(0,r.jsx)(t.li,{children:(0,r.jsx)(t.strong,{children:`Input`})}),`
`,(0,r.jsx)(t.li,{children:(0,r.jsx)(t.strong,{children:`Placeholder or input text`})}),`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:`Clearable button`}),` - optional`]}),`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:`Start content`}),` - optional content before the value`]}),`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:`End content`}),` - optional content after the value`]}),`
`]}),`
`,(0,r.jsx)(l,{label:`Placement`,level:2}),`
`,(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:`Input`}),` should be vertically aligned with other form components on a same page.`]}),`
`,(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:`Inputs`}),` that are strongly related in a form can be grouped. This group can flow horizontally left to right and/or vertically top to bottom.`]}),`
`,(0,r.jsx)(l,{label:`Behavior`,level:2}),`
`,(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:`Inputs`}),` can be hovered, focused and clicked / triggered. They can be disabled or readonly as well.`]}),`
`,(0,r.jsxs)(t.p,{children:[`The user can start typing in the `,(0,r.jsx)(t.strong,{children:`Input`}),` after clicking or focusing on the field container.`]}),`
`,(0,r.jsxs)(t.p,{children:[`A clearable button can be displayed within the `,(0,r.jsx)(t.strong,{children:`Input`}),` to clear its content. This button becomes visible as soon as the user types the first character and removes all content when clicked.`]}),`
`,(0,r.jsxs)(t.p,{children:[`A toggle mask button can be displayed within the `,(0,r.jsx)(t.strong,{children:`Input`}),` to toggle the visibility of its content, such as revealing or hiding a password in a masked input.`]}),`
`,(0,r.jsxs)(t.p,{children:[`A search button can be displayed within the `,(0,r.jsx)(t.strong,{children:`Input`}),` to trigger a specific action, such as performing a search.`]}),`
`,(0,r.jsxs)(t.p,{children:[`Content can be placed inside the field, before the value with `,(0,r.jsx)(t.code,{children:`startContent`}),` and after it with `,(0,r.jsx)(t.code,{children:`endContent`}),`. This content is never part of the value: the user cannot edit it, it does not appear in `,(0,r.jsx)(t.code,{children:`value`}),` or `,(0,r.jsx)(t.code,{children:`onChange`}),`, and it is not submitted with the form.`]}),`
`,(0,r.jsxs)(t.p,{children:[`Any node is accepted, within the constraints described below. Typical cases include a unit such as `,(0,r.jsx)(t.code,{children:`kg`}),` or `,(0,r.jsx)(t.code,{children:`%`}),`, a currency symbol, a fixed part of the value such as a domain extension, an icon, or a small ghost button. When to reach for it is covered in `,(0,r.jsx)(t.strong,{children:`Dos & Don'ts`}),` above.`]}),`
`,(0,r.jsx)(t.p,{children:`Both are placed with logical directions, so they follow the writing direction rather than a fixed side. The built-in action buttons always stay at the far end of the field, after the end content, so they remain at the same distance from the border whether or not decoration is present.`}),`
`,(0,r.jsxs)(t.p,{children:[`The content must fit within the field's content height, so that it never makes the `,(0,r.jsx)(t.strong,{children:`Input`}),` taller, and must not carry a background or a border of its own. Use `,(0,r.jsx)(t.code,{children:`size="xs"`}),` for a `,(0,r.jsx)(t.code,{children:`Button`}),`, the size the built-in actions use. For a control with its own surface adjoined to the field, such as a country selector or a calendar trigger, compose elements around the `,(0,r.jsx)(t.strong,{children:`Input`}),` instead; see `,(0,r.jsx)(t.strong,{children:`Datepicker`}),` and `,(0,r.jsx)(t.strong,{children:`Phone Number`}),`.`]}),`
`,(0,r.jsxs)(t.p,{children:[`The `,(0,r.jsx)(t.strong,{children:`Input`}),` does not disable, hide or otherwise alter the content it is given. When the content holds a control, pass that control its own `,(0,r.jsx)(t.code,{children:`disabled`}),` alongside the field's.`]}),`
`,(0,r.jsx)(l,{label:`Content Adornments`,level:2}),`
`,(0,r.jsx)(s,{story:`ContentAdornments`}),`
`,(0,r.jsx)(l,{label:`Content Adornments with Button`,level:2}),`
`,(0,r.jsx)(s,{story:`ContentAdornmentWithButton`}),`
`,(0,r.jsx)(l,{label:`Navigation`,level:2}),`
`,(0,r.jsx)(l,{label:`Focus Management`,level:3}),`
`,(0,r.jsxs)(t.p,{children:[`The `,(0,r.jsx)(t.strong,{children:`Input`}),` field receives focus as part of the natural tab order.`]}),`
`,(0,r.jsxs)(t.p,{children:[`If a clear button is present, it becomes focusable immediately after the `,(0,r.jsx)(t.strong,{children:`Input`}),` field.`]}),`
`,(0,r.jsx)(t.p,{children:`If a toggle mask button (show/hide password) is present, it becomes focusable after the clear button.`}),`
`,(0,r.jsxs)(t.p,{children:[`If a search button is present, it becomes focusable after the other `,(0,r.jsx)(t.strong,{children:`Input`}),` action buttons.`]}),`
`,(0,r.jsxs)(t.p,{children:[`If `,(0,r.jsx)(t.code,{children:`startContent`}),` or `,(0,r.jsx)(t.code,{children:`endContent`}),` holds a focusable element, it takes its natural place in the tab order: start content before the field, end content after the field and before the action buttons.`]}),`
`,(0,r.jsxs)(t.p,{children:[`If the `,(0,r.jsx)(t.strong,{children:`Input`}),` field is read-only, it can still receive focus but cannot be edited.`]}),`
`,(0,r.jsxs)(t.p,{children:[`If the `,(0,r.jsx)(t.strong,{children:`Input`}),` is disabled, it is  skipped in the tab order and cannot be edited.`]}),`
`,(0,r.jsx)(l,{label:`General Keyboard Shortcuts`,level:3}),`
`,(0,r.jsxs)(t.p,{children:[`Pressing `,(0,r.jsx)(f,{children:`Tab`}),` moves focus forward.`]}),`
`,(0,r.jsxs)(t.p,{children:[`Pressing `,(0,r.jsx)(f,{children:`Shift`}),` + `,(0,r.jsx)(f,{children:`Tab`}),` moves focus backward to the previous interactive element.`]}),`
`,(0,r.jsxs)(t.p,{children:[`Typing any character while the `,(0,r.jsx)(t.strong,{children:`Input`}),` field is focused enters text into the field.`]}),`
`,(0,r.jsxs)(t.p,{children:[`Pressing `,(0,r.jsx)(f,{children:`Backspace`}),` deletes the character preceding the cursor.`]}),`
`,(0,r.jsxs)(t.p,{children:[`Pressing `,(0,r.jsx)(f,{children:`Enter`}),` while a clear, toggle mask, or search button is focused triggers the corresponding action.`]}),`
`,(0,r.jsx)(l,{label:`Accessibility`,level:2}),`
`,(0,r.jsxs)(t.p,{children:[`To ensure proper accessibility, the `,(0,r.jsx)(t.strong,{children:`Input`}),` component must be correctly labeled and provide meaningful context when interactive elements (such as icon buttons) are used.`]}),`
`,(0,r.jsx)(l,{label:`Always provide an explicit label`,level:3}),`
`,(0,r.jsxs)(t.p,{children:[`Every `,(0,r.jsx)(t.strong,{children:`Input`}),` must have a clear and explicit label to ensure that users (especially screen reader users) understand its purpose,
using either `,(0,r.jsx)(t.strong,{children:`FormField`}),` or a native label tag.`]}),`
`,(0,r.jsx)(s,{story:`AccessibilityFormField`}),`
`,(0,r.jsxs)(t.p,{children:[(0,r.jsx)(u,{name:`circle-check`,style:{color:`var(--ods-semantic-color-content-success)`}}),` Screen readers will announce the label, the field and its content.`]}),`
`,(0,r.jsx)(l,{label:`Make start & end content audible`,level:3}),`
`,(0,r.jsxs)(t.p,{children:[`The `,(0,r.jsx)(t.strong,{children:`Input`}),` does not describe `,(0,r.jsx)(t.code,{children:`startContent`}),` or `,(0,r.jsx)(t.code,{children:`endContent`}),` for you: it never alters `,(0,r.jsx)(t.code,{children:`aria-describedby`}),`, so whatever you or the surrounding `,(0,r.jsx)(t.strong,{children:`FormField`}),` put there is what screen readers announce.`]}),`
`,(0,r.jsx)(t.p,{children:`Content that carries meaning, such as a unit, a currency or a fixed part of the value, is therefore silent unless you reference it. Give it an id and point the field at it:`}),`
`,(0,r.jsx)(s,{story:`AccessibilityContent`}),`
`,(0,r.jsxs)(t.p,{children:[(0,r.jsx)(u,{name:`circle-check`,style:{color:`var(--ods-semantic-color-content-success)`}}),` Screen readers will announce the label, the field, its content and the unit.`]}),`
`,(0,r.jsx)(t.p,{children:`Only reference the parts that describe the value. A control inside the decoration announces itself when focus reaches it, and its action label must not become guidance about what to type:`}),`
`,(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:`language-tsx`,children:`<Input aria-describedby="weight-unit"
       endContent={
         <>
           <span id="weight-unit">kg</span>
           <Button aria-label="Copy value" emphasis={ BUTTON_EMPHASIS.low } size={ BUTTON_SIZE.xs }>
             <Icon name={ ICON_NAME.fileCopy } />
           </Button>
         </>
       } />
`})}),`
`,(0,r.jsxs)(t.p,{children:[`Note that a value passed to `,(0,r.jsx)(t.code,{children:`aria-describedby`}),` `,(0,r.jsx)(t.strong,{children:`replaces`}),` the one the `,(0,r.jsx)(t.strong,{children:`FormField`}),` would supply, so include the helper and error ids yourself if you still need them.`]}),`
`,(0,r.jsx)(l,{label:`Override action context`,level:3}),`
`,(0,r.jsx)(t.p,{children:`To provide more context on the interactive elements, you can provide your own custom translations to the component.`}),`
`,(0,r.jsx)(s,{story:`AccessibilityI18n`}),`
`,(0,r.jsxs)(t.p,{children:[(0,r.jsx)(u,{name:`circle-check`,style:{color:`var(--ods-semantic-color-content-success)`}}),` Screen readers will announce the label, the field, its content and custom label of focused action.`]}),`
`,(0,r.jsx)(l,{label:`Login Form`,level:2}),`
`,(0,r.jsx)(s,{story:`LoginForm`}),`
`,(0,r.jsx)(l,{label:`Domain Availability Search`,level:2}),`
`,(0,r.jsx)(s,{story:`DomainAvailabilitySearch`})]})}function a(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(i,{...e})}):i(e)}function o(e,t){throw Error(`Expected `+(t?`component`:`object`)+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}export{a as default};