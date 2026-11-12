import{i as e}from"./rolldown-runtime-Dd_uD5pT.js";import{t}from"./jsx-runtime-DREnUpxT.js";import{T as n}from"./index-CzEwg6AJ.js";var r=e(t());function i(e){let t={code:`code`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components},{Canvas:i,DocLink:a,ExternalLink:s,Heading:c}=t;return i||o(`Canvas`,!0),a||o(`DocLink`,!0),s||o(`ExternalLink`,!0),c||o(`Heading`,!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.p,{children:`These guidelines define how forms should behave and be structured across products using the OVHcloud Design System.`}),`
`,(0,r.jsx)(t.p,{children:`This documentation does not describe a technical implementation, but provides functional and UX rules to follow when designing and developing forms.`}),`
`,(0,r.jsx)(c,{label:`Mandatory and optional fields`,level:2}),`
`,(0,r.jsx)(c,{label:`How to define mandatory fields`,level:3}),`
`,(0,r.jsx)(t.p,{children:`A mandatory field must:`}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsx)(t.li,{children:`Explicitly include the word "Mandatory" in the label.`}),`
`,(0,r.jsx)(t.li,{children:`Never rely on an asterisk alone.`}),`
`,(0,r.jsx)(t.li,{children:`Clearly communicate the expected format in the helper text when relevant.`}),`
`]}),`
`,(0,r.jsx)(c,{label:`Optional fields`,level:3}),`
`,(0,r.jsx)(t.p,{children:`Optional fields do not need to be labeled "Optional" and can remain unmarked if mandatory fields are clearly identified.`}),`
`,(0,r.jsx)(i,{story:`GuideFormMandatory`,from:`form-field`,source:`hidden`}),`
`,(0,r.jsx)(c,{label:`Submit behavior`,level:2}),`
`,(0,r.jsx)(t.p,{children:`In the OVHcloud Design System, the submit should button remain enabled at all times.`}),`
`,(0,r.jsx)(t.p,{children:`Validation is triggered when the user attempts to submit the form.`}),`
`,(0,r.jsx)(t.p,{children:`The form must provide feedback after user action rather than prevent the action.`}),`
`,(0,r.jsx)(c,{label:`Standard submit flow`,level:3}),`
`,(0,r.jsx)(t.p,{children:`Initial state:`}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsx)(t.li,{children:`The submit button is visible and enabled.`}),`
`,(0,r.jsx)(t.li,{children:`Mandatory fields are clearly marked in the label.`}),`
`,(0,r.jsx)(t.li,{children:`Helper text communicates expected formats when relevant.`}),`
`,(0,r.jsx)(t.li,{children:`No error messages are displayed before interaction.`}),`
`]}),`
`,(0,r.jsx)(t.p,{children:`When the user clicks the submit button:`}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsx)(t.li,{children:`All mandatory fields are validated.`}),`
`,(0,r.jsx)(t.li,{children:`All format validations are executed.`}),`
`,(0,r.jsx)(t.li,{children:`Field-level errors are displayed where needed.`}),`
`,(0,r.jsx)(t.li,{children:`A global error may be displayed if applicable.`}),`
`,(0,r.jsx)(t.li,{children:`No field values are cleared.`}),`
`]}),`
`,(0,r.jsx)(t.p,{children:`If errors are found:`}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsx)(t.li,{children:`Each invalid field displays its error message.`}),`
`,(0,r.jsx)(t.li,{children:`Error styling is applied.`}),`
`,(0,r.jsx)(t.li,{children:`Fields remain populated.`}),`
`,(0,r.jsx)(t.li,{children:`The submit button remains enabled.`}),`
`,(0,r.jsx)(t.li,{children:`The user can immediately correct the fields and resubmit.`}),`
`]}),`
`,(0,r.jsxs)(t.p,{children:[`If the form is displayed in a `,(0,r.jsx)(t.strong,{children:`Modal`}),` or `,(0,r.jsx)(t.strong,{children:`Drawer`}),`:`]}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsx)(t.li,{children:`The container remains open.`}),`
`,(0,r.jsx)(t.li,{children:`Errors are displayed within the same context.`}),`
`]}),`
`,(0,r.jsx)(t.p,{children:`If no errors are found:`}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsx)(t.li,{children:`The form proceeds to submission.`}),`
`,(0,r.jsxs)(t.li,{children:[`Success feedback is triggered (`,(0,r.jsx)(t.strong,{children:`Toast`}),` or confirmation page depending on the flow).`]}),`
`]}),`
`,(0,r.jsx)(c,{label:`Relationship with inline validation`,level:3}),`
`,(0,r.jsx)(t.p,{children:`Inline validation (on blur):`}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsx)(t.li,{children:`May display format errors as soon as the user leaves a field.`}),`
`,(0,r.jsx)(t.li,{children:`Improves correction speed.`}),`
`,(0,r.jsx)(t.li,{children:`Does not replace submit validation.`}),`
`]}),`
`,(0,r.jsx)(t.p,{children:`On submit:`}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsx)(t.li,{children:`All validations are executed again to ensure consistency.`}),`
`,(0,r.jsx)(t.li,{children:`Required errors appear even if the field was never focused.`}),`
`]}),`
`,(0,r.jsx)(c,{label:`Loading & action buttons states`,level:3}),`
`,(0,r.jsx)(t.p,{children:`When the user submits a form:`}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsx)(t.li,{children:`The primary action button switches to a loading state.`}),`
`,(0,r.jsx)(t.li,{children:`The secondary action, if any, becomes disabled.`}),`
`]}),`
`,(0,r.jsx)(t.p,{children:`This prevents duplicate submissions and conflicting actions, and clearly communicates that the request is being processed.`}),`
`,(0,r.jsx)(c,{label:`Error handling`,level:2}),`
`,(0,r.jsx)(t.p,{children:`Error handling must clearly communicate what went wrong and how the user can correct it.`}),`
`,(0,r.jsx)(t.p,{children:`Error handling exists at two levels.`}),`
`,(0,r.jsx)(t.p,{children:`Global errors explain why submission failed. Field-level errors explain what needs correction.`}),`
`,(0,r.jsx)(c,{label:`Local errors (field-level)`,level:3}),`
`,(0,r.jsx)(t.p,{children:`Field-level errors are tied to a specific input.`}),`
`,(0,r.jsx)(t.p,{children:`They indicate that the value entered in a particular field is invalid or missing.`}),`
`,(0,r.jsx)(c,{label:`When field-level errors are triggered`,level:4}),`
`,(0,r.jsx)(t.p,{children:`Field-level errors can be triggered:`}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsx)(t.li,{children:`On blur (inline validation).`}),`
`,(0,r.jsx)(t.li,{children:`On submit.`}),`
`,(0,r.jsx)(t.li,{children:`After asynchronous validation (e.g. backend check).`}),`
`]}),`
`,(0,r.jsx)(t.p,{children:`Submit validation must always re-validate all fields, even if inline validation is enabled.`}),`
`,(0,r.jsx)(c,{label:`Examples of field-level errors`,level:4}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsx)(t.li,{children:`Required field left empty.`}),`
`,(0,r.jsx)(t.li,{children:`Invalid email format.`}),`
`,(0,r.jsx)(t.li,{children:`Password does not meet requirements.`}),`
`]}),`
`,(0,r.jsx)(c,{label:`Global errors (form-level)`,level:3}),`
`,(0,r.jsx)(t.p,{children:`Global errors are not tied to a single field.`}),`
`,(0,r.jsx)(t.p,{children:`They occur when:`}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsx)(t.li,{children:`Backend validation fails.`}),`
`,(0,r.jsx)(t.li,{children:`A network error occurs.`}),`
`,(0,r.jsx)(t.li,{children:`A business rule prevents submission.`}),`
`,(0,r.jsx)(t.li,{children:`The action cannot be completed.`}),`
`]}),`
`,(0,r.jsx)(c,{label:`Types of Global Errors`,level:4}),`
`,(0,r.jsx)(c,{label:`Recoverable Failure`,level:5}),`
`,(0,r.jsxs)(t.p,{children:[`Use a `,(0,r.jsx)(t.strong,{children:`Toast`}),` when:`]}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsx)(t.li,{children:`The failure is temporary.`}),`
`,(0,r.jsx)(t.li,{children:`The user can retry immediately.`}),`
`,(0,r.jsx)(t.li,{children:`The error does not block form structure.`}),`
`]}),`
`,(0,r.jsx)(t.p,{children:`Example:`}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsx)(t.li,{children:`Temporary network issue.`}),`
`]}),`
`,(0,r.jsx)(c,{label:`Critical / Blocking Failure`,level:5}),`
`,(0,r.jsx)(t.p,{children:`Use a critical Message component when:`}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsx)(t.li,{children:`The submission fails definitively.`}),`
`,(0,r.jsx)(t.li,{children:`The user must take action.`}),`
`,(0,r.jsx)(t.li,{children:`The error is structural or business-related.`}),`
`,(0,r.jsx)(t.li,{children:`The error message is long or detailed.`}),`
`]}),`
`,(0,r.jsx)(c,{label:`In Modal or Drawer contexts`,level:5}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsxs)(t.li,{children:[`Always use a critical `,(0,r.jsx)(t.strong,{children:`Message`}),`.`]}),`
`,(0,r.jsx)(t.li,{children:`The message is displayed inside it.`}),`
`,(0,r.jsx)(t.li,{children:`The container remains open.`}),`
`]}),`
`,(0,r.jsx)(c,{label:`Placement of global error`,level:4}),`
`,(0,r.jsxs)(t.p,{children:[`When using a critical `,(0,r.jsx)(t.strong,{children:`Message`}),`:`]}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsx)(t.li,{children:`It should be placed above the action buttons.`}),`
`,(0,r.jsx)(t.li,{children:`It must not replace field-level errors.`}),`
`]}),`
`,(0,r.jsx)(c,{label:`Example`,level:3}),`
`,(0,r.jsx)(i,{story:`GuideFormError`,from:`form-field`,source:`hidden`}),`
`,(0,r.jsx)(c,{label:`Success handling`,level:2}),`
`,(0,r.jsx)(c,{label:`Direct feedback`,level:3}),`
`,(0,r.jsxs)(t.p,{children:[`Use a `,(0,r.jsx)(t.strong,{children:`Toast`}),` when:`]}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsx)(t.li,{children:`The action is completed successfully.`}),`
`,(0,r.jsx)(t.li,{children:`The user stays on the same page.`}),`
`,(0,r.jsx)(t.li,{children:`No additional flow is required.`}),`
`]}),`
`,(0,r.jsx)(c,{label:`Confirmation page / modal`,level:3}),`
`,(0,r.jsx)(t.p,{children:`Use when:`}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsx)(t.li,{children:`The flow continues.`}),`
`,(0,r.jsx)(t.li,{children:`The user moves to a next step.`}),`
`,(0,r.jsx)(t.li,{children:`A confirmation summary is required.`}),`
`]}),`
`,(0,r.jsx)(c,{label:`Form structures`,level:2}),`
`,(0,r.jsx)(c,{label:`Simple form with standard action buttons`,level:3}),`
`,(0,r.jsx)(i,{story:`GuideFormSimple`,from:`form-field`,source:`hidden`}),`
`,(0,r.jsx)(c,{label:`Grouped fields form`,level:3}),`
`,(0,r.jsx)(i,{story:`GuideFormGroupedField`,from:`form-field`,source:`hidden`}),`
`,(0,r.jsx)(c,{label:`Critical form`,level:3}),`
`,(0,r.jsx)(i,{story:`GuideFormCritical`,from:`form-field`,source:`hidden`}),`
`,(0,r.jsx)(c,{label:`Accessibility requirements`,level:2}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsx)(t.li,{children:`"Mandatory" must be visible in the label.`}),`
`,(0,r.jsx)(t.li,{children:`Expected input format must be visible in helper text.`}),`
`,(0,r.jsx)(t.li,{children:`Error messages must be programmatically associated with fields.`}),`
`,(0,r.jsx)(t.li,{children:`Fields must remain populated after validation errors.`}),`
`,(0,r.jsx)(t.li,{children:`Inline validation must not trap focus.`}),`
`]}),`
`,(0,r.jsx)(c,{label:`Component selection guidelines`,level:2}),`
`,(0,r.jsx)(t.p,{children:`This non-exhaustive section helps teams choose the right input component depending on intent. It is presented from the user intention perspective.`}),`
`,(0,r.jsx)(t.p,{children:`Choosing a component is not only about the type of data. It is about:`}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsx)(t.li,{children:`How users think about the choice.`}),`
`,(0,r.jsx)(t.li,{children:`Whether comparison is important.`}),`
`,(0,r.jsx)(t.li,{children:`Whether precision is required.`}),`
`,(0,r.jsx)(t.li,{children:`Whether the action is reversible.`}),`
`,(0,r.jsx)(t.li,{children:`The cognitive load of the interface.`}),`
`]}),`
`,(0,r.jsx)(t.p,{children:`The right component reduces friction before validation is even needed.`}),`
`,(0,r.jsx)(c,{label:`When the user needs to provide short, structured information`,level:3}),`
`,(0,r.jsxs)(t.p,{children:[`Use `,(0,r.jsx)(a,{to:`/components/input`,children:`Input`}),` component.`]}),`
`,(0,r.jsx)(t.p,{children:`Use for:`}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsx)(t.li,{children:`Personal information (First name, Last name).`}),`
`,(0,r.jsx)(t.li,{children:`Identifiers (Reference number, Customer ID).`}),`
`,(0,r.jsx)(t.li,{children:`Short labels (Project name, Tag name).`}),`
`]}),`
`,(0,r.jsx)(t.p,{children:`Why?`}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsx)(t.li,{children:`Users expect a single-line input for short, structured answers.`}),`
`,(0,r.jsx)(t.li,{children:`Keeps vertical space minimal.`}),`
`,(0,r.jsx)(t.li,{children:`Encourages concise input.`}),`
`]}),`
`,(0,r.jsx)(t.p,{children:`Do not use when:`}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsx)(t.li,{children:`The user must provide explanation or justification.`}),`
`,(0,r.jsx)(t.li,{children:`The expected answer may exceed one short sentence.`}),`
`]}),`
`,(0,r.jsx)(c,{label:`When the user needs to explain, justify, or describe something`,level:3}),`
`,(0,r.jsxs)(t.p,{children:[`Use `,(0,r.jsx)(a,{to:`/components/textarea`,children:`Textarea`}),` component.`]}),`
`,(0,r.jsx)(t.p,{children:`Use for:`}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsx)(t.li,{children:`Explain why the user is requesting a change.`}),`
`,(0,r.jsx)(t.li,{children:`Describe an issue the user encountered.`}),`
`,(0,r.jsx)(t.li,{children:`Additional comments.`}),`
`]}),`
`,(0,r.jsx)(t.p,{children:`Why?`}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsx)(t.li,{children:`Visually communicates that longer input is expected.`}),`
`,(0,r.jsx)(t.li,{children:`Encourages detailed answers.`}),`
`,(0,r.jsx)(t.li,{children:`Prevents frustration caused by limited visible space.`}),`
`]}),`
`,(0,r.jsx)(c,{label:`When the user must create or confirm secure credentials`,level:3}),`
`,(0,r.jsxs)(t.p,{children:[`Use `,(0,r.jsx)(a,{to:`/components/password`,children:`Password`}),` component.`]}),`
`,(0,r.jsx)(t.p,{children:`Use for:`}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsx)(t.li,{children:`Account creation.`}),`
`,(0,r.jsx)(t.li,{children:`Password reset.`}),`
`,(0,r.jsx)(t.li,{children:`Sensitive authentication fields.`}),`
`]}),`
`,(0,r.jsx)(t.p,{children:`Why?`}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsx)(t.li,{children:`Hides sensitive information.`}),`
`,(0,r.jsx)(t.li,{children:`May include strength indicators.`}),`
`,(0,r.jsx)(t.li,{children:`Can support show/hide functionality.`}),`
`]}),`
`,(0,r.jsx)(c,{label:`When the user must enter an exact numeric value`,level:3}),`
`,(0,r.jsxs)(t.p,{children:[`Use `,(0,r.jsx)(a,{to:`/components/input`,children:`Input`}),` or `,(0,r.jsx)(a,{to:`/components/quantity`,children:`Quantity`}),` component`]}),`
`,(0,r.jsx)(t.p,{children:`Use for:`}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsx)(t.li,{children:`Quantity of items.`}),`
`,(0,r.jsx)(t.li,{children:`Budget amount (precise value).`}),`
`,(0,r.jsx)(t.li,{children:`Number of licenses.`}),`
`,(0,r.jsx)(t.li,{children:`Percentage rate.`}),`
`]}),`
`,(0,r.jsx)(t.p,{children:`Why?`}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsx)(t.li,{children:`Precision matters.`}),`
`,(0,r.jsx)(t.li,{children:`Value must be exact.`}),`
`]}),`
`,(0,r.jsx)(t.p,{children:`Avoid when:`}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsx)(t.li,{children:`The number has formatting rules (phone, IBAN, BIC).`}),`
`,(0,r.jsx)(t.li,{children:`Users are more likely to think in ranges than exact values.`}),`
`]}),`
`,(0,r.jsx)(c,{label:`When the user is selecting an approximate value or a range`,level:3}),`
`,(0,r.jsxs)(t.p,{children:[`Use `,(0,r.jsx)(a,{to:`/components/range`,children:`Range`}),` component.`]}),`
`,(0,r.jsx)(t.p,{children:`Use for:`}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsx)(t.li,{children:`Budget filter.`}),`
`,(0,r.jsx)(t.li,{children:`Price filtering in search results.`}),`
`,(0,r.jsx)(t.li,{children:`Age range selection.`}),`
`,(0,r.jsx)(t.li,{children:`Performance tuning.`}),`
`]}),`
`,(0,r.jsx)(t.p,{children:`Why?`}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsx)(t.li,{children:`Encourages exploration.`}),`
`,(0,r.jsx)(t.li,{children:`Works well for filtering.`}),`
`,(0,r.jsx)(t.li,{children:`Suitable when precision is not critical.`}),`
`]}),`
`,(0,r.jsx)(t.p,{children:`Avoid when:`}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsx)(t.li,{children:`Legal, financial, or contractual precision is required.`}),`
`,(0,r.jsx)(t.li,{children:`The user must enter a specific numeric value.`}),`
`]}),`
`,(0,r.jsx)(c,{label:`When users must choose one option and all options should be visible`,level:3}),`
`,(0,r.jsxs)(t.p,{children:[`Use `,(0,r.jsx)(a,{to:`/components/radio-group`,children:`Radio`}),` buttons.`]}),`
`,(0,r.jsx)(t.p,{children:`Use for:`}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsx)(t.li,{children:`Choosing a subscription plan (e.g., Basic / Pro / Enterprise).`}),`
`,(0,r.jsx)(t.li,{children:`Selecting delivery method.`}),`
`,(0,r.jsx)(t.li,{children:`Choosing payment type.`}),`
`]}),`
`,(0,r.jsx)(t.p,{children:`Why?`}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsx)(t.li,{children:`All options are visible.`}),`
`,(0,r.jsx)(t.li,{children:`Encourages comparison.`}),`
`,(0,r.jsx)(t.li,{children:`Reduces hidden choices.`}),`
`,(0,r.jsx)(t.li,{children:`Recommended when there are between 2 and 5 options.`}),`
`,(0,r.jsx)(t.li,{children:`Each option has important contextual differences.`}),`
`]}),`
`,(0,r.jsx)(c,{label:`When users must choose one option from a list`,level:3}),`
`,(0,r.jsx)(c,{label:`Select vs Combobox`,level:4}),`
`,(0,r.jsxs)(t.p,{children:[`When a user must select a single option from a predefined list, the choice between `,(0,r.jsx)(t.strong,{children:`Select`}),` and `,(0,r.jsx)(t.strong,{children:`Combobox`}),` depends mainly on the size and complexity of the list.`]}),`
`,(0,r.jsx)(c,{label:`Use Select`,level:4}),`
`,(0,r.jsxs)(t.p,{children:[`Use `,(0,r.jsx)(a,{to:`/components/select`,children:`Select`}),` when the list is limited and easy to scan visually.`]}),`
`,(0,r.jsx)(t.p,{children:`Typical situations:`}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsx)(t.li,{children:`Selecting a status (Draft / Pending / Approved).`}),`
`,(0,r.jsx)(t.li,{children:`Choosing a priority level (Low / Medium / High).`}),`
`,(0,r.jsx)(t.li,{children:`Selecting a department in a small organization.`}),`
`]}),`
`,(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:`Select`}),` is appropriate when:`]}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsx)(t.li,{children:`The number of options is moderate.`}),`
`,(0,r.jsx)(t.li,{children:`Users can easily scroll and recognize the right option.`}),`
`,(0,r.jsx)(t.li,{children:`Search is not necessary.`}),`
`]}),`
`,(0,r.jsx)(c,{label:`Use Combobox`,level:4}),`
`,(0,r.jsxs)(t.p,{children:[`Use `,(0,r.jsx)(a,{to:`/components/combobox`,children:`Combobox`}),` when the list is long or when search significantly improves usability.`]}),`
`,(0,r.jsx)(t.p,{children:`Typical situations:`}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsx)(t.li,{children:`Selecting a country from a global list.`}),`
`,(0,r.jsx)(t.li,{children:`Choosing a city.`}),`
`,(0,r.jsx)(t.li,{children:`Assigning a user from a large organization.`}),`
`,(0,r.jsx)(t.li,{children:`Selecting a product from a large catalog.`}),`
`]}),`
`,(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:`Combobox`}),` is appropriate when:`]}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsx)(t.li,{children:`The dataset is large.`}),`
`,(0,r.jsx)(t.li,{children:`Users are likely to know what they are looking for.`}),`
`,(0,r.jsx)(t.li,{children:`Scrolling through the entire list would be inefficient.`}),`
`]}),`
`,(0,r.jsx)(c,{label:`When users can select multiple independent options`,level:3}),`
`,(0,r.jsxs)(t.p,{children:[`Use `,(0,r.jsx)(a,{to:`/components/checkbox`,children:`Checkboxes`}),`.`]}),`
`,(0,r.jsx)(t.p,{children:`Use for:`}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsx)(t.li,{children:`Selecting product features.`}),`
`,(0,r.jsx)(t.li,{children:`Choosing notification preferences.`}),`
`,(0,r.jsx)(t.li,{children:`Accepting multiple agreements.`}),`
`]}),`
`,(0,r.jsx)(t.p,{children:`Why?`}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsx)(t.li,{children:`Clearly communicates independence.`}),`
`,(0,r.jsx)(t.li,{children:`No mutual exclusion implied.`}),`
`,(0,r.jsx)(t.li,{children:`Good for visible, short lists.`}),`
`]}),`
`,(0,r.jsx)(c,{label:`When the user is enabling or disabling a setting`,level:3}),`
`,(0,r.jsxs)(t.p,{children:[`Use `,(0,r.jsx)(a,{to:`/components/toggle`,children:`Toggle`}),` component.`]}),`
`,(0,r.jsx)(t.p,{children:`Use for:`}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsx)(t.li,{children:`Enable dark mode.`}),`
`,(0,r.jsx)(t.li,{children:`Activate notifications.`}),`
`,(0,r.jsx)(t.li,{children:`Turn on auto-renewal.`}),`
`]}),`
`,(0,r.jsx)(t.p,{children:`Why?`}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsx)(t.li,{children:`Communicates immediate on/off state.`}),`
`,(0,r.jsx)(t.li,{children:`Best for persistent settings.`}),`
`]}),`
`,(0,r.jsx)(t.p,{children:`Avoid when:`}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsx)(t.li,{children:`The action is critical or legally binding.`}),`
`,(0,r.jsx)(t.li,{children:`The user must explicitly confirm something important.`}),`
`]}),`
`,(0,r.jsxs)(t.p,{children:[`In those cases, use a `,(0,r.jsx)(a,{to:`/components/checkbox`,children:`Checkbox`}),`.`]}),`
`,(0,r.jsx)(c,{label:`When the user must select a specific date`,level:3}),`
`,(0,r.jsxs)(t.p,{children:[`Use `,(0,r.jsx)(a,{to:`/components/datepicker`,children:`Datepicker`}),` component.`]}),`
`,(0,r.jsx)(t.p,{children:`Use for:`}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsx)(t.li,{children:`Booking a meeting.`}),`
`,(0,r.jsx)(t.li,{children:`Setting a deadline.`}),`
`,(0,r.jsx)(t.li,{children:`Scheduling delivery.`}),`
`]}),`
`,(0,r.jsx)(t.p,{children:`Why?`}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsx)(t.li,{children:`Prevents format errors.`}),`
`,(0,r.jsx)(t.li,{children:`Reduces cognitive load.`}),`
`,(0,r.jsx)(t.li,{children:`Ensures valid date selection.`}),`
`]}),`
`,(0,r.jsx)(t.p,{children:`Consider alternatives when:`}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsx)(t.li,{children:`Only month and year are required.`}),`
`,(0,r.jsx)(t.li,{children:`The user frequently types dates manually (advanced users).`}),`
`]}),`
`,(0,r.jsx)(c,{label:`When the user must provide supporting material`,level:3}),`
`,(0,r.jsxs)(t.p,{children:[`Use `,(0,r.jsx)(a,{to:`/components/file-upload`,children:`File Upload`}),` component.`]}),`
`,(0,r.jsx)(t.p,{children:`Use for:`}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsx)(t.li,{children:`Uploading identity documents.`}),`
`,(0,r.jsx)(t.li,{children:`Adding attachments to a request.`}),`
`,(0,r.jsx)(t.li,{children:`Submitting supporting evidence.`}),`
`,(0,r.jsx)(t.li,{children:`Uploading invoices.`}),`
`]}),`
`,(0,r.jsx)(t.p,{children:`Why?`}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsx)(t.li,{children:`Allows users to provide official or visual proof that cannot be reliably captured in structured fields.`}),`
`,(0,r.jsx)(t.li,{children:`The content may need to be reviewed manually.`}),`
`,(0,r.jsx)(t.li,{children:`Reproducing the information through fields would be incomplete or unreliable.`}),`
`]}),`
`,(0,r.jsx)(t.p,{children:`Avoid when:`}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsx)(t.li,{children:`The information can be captured through structured inputs (text, number, date, select).`}),`
`,(0,r.jsx)(t.li,{children:`The upload is used to compensate for missing inputs.`}),`
`]}),`
`,(0,r.jsxs)(t.p,{children:[`ODS form elements can either be `,(0,r.jsx)(s,{href:`https://react.dev/learn/sharing-state-between-components#controlled-and-uncontrolled-components`,children:`controlled or uncontrolled`}),`.`]}),`
`,(0,r.jsxs)(t.p,{children:[`You can use each form element directly in your own form, or wrap them using the `,(0,r.jsx)(a,{to:`/components/form-field`,children:`Form Field`}),` component.`]}),`
`,(0,r.jsx)(c,{label:`Form Field`,level:2}),`
`,(0,r.jsxs)(t.p,{children:[`Using `,(0,r.jsx)(a,{to:`/components/form-field`,children:`Form Field`}),` component
will enforce layout, design, behavior and accessibility through a few dedicated components:`]}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsx)(t.li,{children:(0,r.jsx)(t.code,{children:`FormFieldLabel`})}),`
`,(0,r.jsx)(t.li,{children:(0,r.jsx)(t.code,{children:`FormFieldHelperText`})}),`
`,(0,r.jsx)(t.li,{children:(0,r.jsx)(t.code,{children:`FormFieldError`})}),`
`]}),`
`,(0,r.jsxs)(t.p,{children:[`You can also deport the `,(0,r.jsx)(t.code,{children:`invalid`}),` prop from the form element to the `,(0,r.jsx)(t.code,{children:`FormField`}),` component which will handle the error display automatically.`]}),`
`,(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:`language-tsx`,children:`<FormField invalid={ someCondition }>
  <FormFieldLabel>
    Input:
  </FormFieldLabel>

  <Input name="input" />

  {/* Displayed only if invalid on FormField is true */}
  <FormFieldError>
    Error message
  </FormFieldError>
</FormField>
`})}),`
`,(0,r.jsx)(c,{label:`Uncontrolled Form`,level:2}),`
`,(0,r.jsxs)(t.p,{children:[`Uncontrolled component will not have the `,(0,r.jsx)(t.code,{children:`value`}),` property set.`]}),`
`,(0,r.jsxs)(t.p,{children:[`You can use the `,(0,r.jsx)(t.code,{children:`defaultValue`}),` property to initialize the component with a value.`]}),`
`,(0,r.jsx)(t.p,{children:`Example of uncontrolled form:`}),`
`,(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:`language-tsx`,children:`import { BUTTON_EMPHASIS, Button, FormField, FormFieldLabel, Input } from '@ovhcloud/ods-react';
import { type FormEvent, useRef } from 'react';

const UncontrolledForm = () => {
  const formRef = useRef<HTMLFormElement>(null);

  function onSubmit(e: FormEvent) {
    e.preventDefault();

    if (formRef.current) {
      const formData = new FormData(formRef.current);
      console.log(formData);
    }
  }

  return (
    <form
      onSubmit={ onSubmit }
      ref={ formRef }>
      <FormField>
        <FormFieldLabel>
          Input:
        </FormFieldLabel>

        <Input
          defaultValue="default"
          name="input" />
      </FormField>

      <Button emphasis={ BUTTON_EMPHASIS.high } type="submit">
        Submit button
      </Button>
    </form>
  );
};
`})}),`
`,(0,r.jsx)(c,{label:`Controlled Form`,level:2}),`
`,(0,r.jsxs)(t.p,{children:[`Controlled components will manage their `,(0,r.jsx)(t.code,{children:`value`}),` prop on their own and react to value change events.`]}),`
`,(0,r.jsx)(t.p,{children:`Example of controlled form:`}),`
`,(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:`language-tsx`,children:`import { BUTTON_EMPHASIS, Button, FormField, FormFieldLabel, Input } from '@ovhcloud/ods-react';
import { type ChangeEvent, useState } from 'react';

const ControlledForm = () => {
  const [inputValue, setInputValue] = useState('default');

  function onInputChange(e: ChangeEvent<HTMLInputElement>) {
    setInputValue(e.target.value);
  }

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    console.log('input: ', inputValue);
  }

  return (
    <form onSubmit={ onSubmit }>
      <FormField>
        <FormFieldLabel>
          Input:
        </FormFieldLabel>

        <Input
          name="input"
          onChange={ onInputChange }
          value={ inputValue } />
      </FormField>

      <Button emphasis={ BUTTON_EMPHASIS.high } type="submit">
        Submit button
      </Button>
    </form>
  );
};
`})}),`
`,(0,r.jsx)(c,{label:`Using form library`,level:2}),`
`,(0,r.jsx)(t.p,{children:`We'll demonstrate here a few form librairy, but you can plug ODS form elements with any library you like.`}),`
`,(0,r.jsxs)(t.p,{children:[`Regardless of the library used, you can also use a schema validator to manage your data (like `,(0,r.jsx)(s,{href:`https://github.com/jquense/yup`,children:`yup`}),` or `,(0,r.jsx)(s,{href:`https://zod.dev/`,children:`zod`}),`).`]}),`
`,(0,r.jsx)(c,{label:`react-hook-form`,level:3}),`
`,(0,r.jsxs)(t.p,{children:[(0,r.jsx)(s,{href:`https://react-hook-form.com`,children:`React Hook Form`}),` is thought around native uncontrolled form elements (using `,(0,r.jsx)(t.code,{children:`register`}),`).`]}),`
`,(0,r.jsxs)(t.p,{children:[`These will mork on most ODS components, but some specific one may still need to rely on the lib `,(0,r.jsx)(t.code,{children:`Controller`}),` component.`]}),`
`,(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:`language-tsx`,children:`import { BUTTON_EMPHASIS, Button, Datepicker, DatepickerContent, DatepickerControl, FormField, FormFieldLabel, Input } from '@ovhcloud/ods-react';
import { Controller, useForm } from 'react-hook-form';

type FormData = {
  datepicker: string,
  input: string,
}

const FormHookForm = () => {
  const {
    control,
    formState: { errors },
    handleSubmit,
    register,
    setValue,
  } = useForm<FormData>({ mode: 'onBlur' });

  function onSubmit(data: FormData): void {
    console.log(data);
  }

  return (
    <form onSubmit={ handleSubmit(onSubmit) }>
      <FormField invalid={ !!errors.input }>
        <FormFieldLabel>
          Input:
        </FormFieldLabel>

        <Input { ...register('input') } />
      </FormField>

      <Controller
        control={ control }
        name="datepicker"
        render={ ({ field} ) => (
          <FormField invalid={ !!errors.datepicker }>
            <FormFieldLabel>
              Datepicker:
            </FormFieldLabel>

            <Datepicker onValueChange={ ({ value }) => setValue(field.name, value) }>
              <DatepickerControl />

              <DatepickerContent />
            </Datepicker>
          </FormField>
        )} />

      <Button emphasis={ BUTTON_EMPHASIS.high } type="submit">
        Submit button
      </Button>
    </form>
  );
}
`})}),`
`,(0,r.jsx)(c,{label:`formik`,level:3}),`
`,(0,r.jsxs)(t.p,{children:[`Here is another example using `,(0,r.jsx)(s,{href:`https://formik.org`,children:`Formik`}),` library.`]}),`
`,(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:`language-tsx`,children:`import { BUTTON_EMPHASIS, Button, Datepicker, DatepickerContent, DatepickerControl, FormField, FormFieldLabel, Input } from '@ovhcloud/ods-react';
import { useFormik } from 'formik';

type FormData = {
  datepicker: string,
  input: string,
}

const FormFormik = () => {
  const formik = useFormik<FormData>({
    onSubmit: (values) => {
      console.log(values);
    },
    validateOnMount: true,
    validationSchema,
  });

  return (
    <form onSubmit={ formik.handleSubmit }>
      <FormField invalid={ formik.touched.input && !!formik.errors.input }>
        <FormFieldLabel>
          Input:
        </FormFieldLabel>

        <Input
          name="input"
          onBlur={ formik.handleBlur }
          onChange={ formik.handleChange } />
      </FormField>

      <FormField invalid={ formik.touched.datepicker && !!formik.errors.datepicker }>
        <FormFieldLabel>
          Datepicker:
        </FormFieldLabel>

        <Datepicker
          name="datepicker"
          onBlur={ formik.handleBlur }
          onValueChange={ ({ value }) => {
            formik.setFieldValue('datepicker', value);
          }}>
          <DatepickerControl />

          <DatepickerContent />
        </Datepicker>
      </FormField>

      <Button emphasis={ BUTTON_EMPHASIS.high } type="submit">
        Submit button
      </Button>
    </form>
  );
}
`})})]})}function a(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(i,{...e})}):i(e)}function o(e,t){throw Error(`Expected `+(t?`component`:`object`)+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}export{a as default};