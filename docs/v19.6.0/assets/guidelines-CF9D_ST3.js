import{j as e}from"./jsx-runtime-Cfl8ynUo.js";import{useMDXComponents as c}from"./index-ZwkxtaJJ.js";import{M as a}from"./index-CP0dmCql.js";import{G as h,a as x,b as u,c as j,d as p}from"./form-field.stories-Bi1xan4B.js";import{C as o}from"./Canvas-Dr2OMYCx.js";import{H as i}from"./Heading-w1rgbOs9.js";import{S as l}from"./StorybookLink-CaoUFCbV.js";import{S as s,R as r}from"./meta-BVDGtJjn.js";import"./index-jIWwRBLr.js";import"./iframe-DD-xGYJd.js";import"./index-DWDEzXrj.js";import"./index-N93khynk.js";import"./index-CXQShRbs.js";import"./index-DrFu-skq.js";import"./Input-DOUmw7EZ-2zJV36ZU.js";import"./index-CWkFp9WS-BSIT86NH.js";import"./Text-CxRsuLtm-CBjGeyCW.js";import"./ods-react123-5kwUyuQy.js";import"./useI18n-CPx9EMQI-Di77vQVb.js";import"./ods-react281-aAAP9SXj.js";import"./ods-react110-l5fgq-IX.js";import"./ods-react69-Dlwzrp8h.js";import"./Button-B-GJ-1TA.js";import"./index-CqY9YpN0.js";import"./Spinner-DJB5ZadI.js";import"./colors-DSObuHxd.js";import"./FormFieldLabelSubLabel-DCAb65DU.js";import"./Text-CW33_IfE.js";import"./MessageIcon-D6XwSjGm.js";import"./useI18n-C0NLVYPv.js";import"./icon-name-DsSs6qF8.js";import"./PhoneNumberCountryList-BhqzlWdL.js";import"./Input-DA8_WQMf.js";import"./context-C_-r2uoG.js";import"./SelectControl-pvB5wLEQ.js";import"./index-DA5krlyz.js";import"./use-locale-context-zjr1Qdvk.js";import"./portal-CnYxhL2-.js";import"./use-presence-BXVjqAUx.js";import"./use-event-c9j7vq_1.js";import"./index-qJenUdMy.js";import"./use-field-context-B6hT1RuO.js";import"./Textarea-di6qQWES.js";import"./controls-BtiQQn1l.js";import"./TooltipTrigger-DHfLNvMW-UFJEJJFl.js";import"./index-BuvDIi_Z.js";import"./lz-string-U2heoObX.js";import"./source-CPEZJ6oD.js";import"./ResetTheme-DQ5v3p_P.js";import"./tokens-BrWUS-3i.js";import"./Divider-BA_mBCsl-c8UMRNiU.js";import"./Link-BD6LLyZr-BDwROQOD.js";function d(t){const n={li:"li",p:"p",strong:"strong",ul:"ul",...c(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{title:"OVHcloud Design System/Guides/Form/Guidelines"}),`
`,e.jsx(i,{label:"Usage Guidelines",level:1}),`
`,e.jsx(n.p,{children:"These guidelines define how forms should behave and be structured across products using the OVHcloud Design System."}),`
`,e.jsx(n.p,{children:"This documentation does not describe a technical implementation, but provides functional and UX rules to follow when designing and developing forms."}),`
`,e.jsx(i,{label:"Mandatory and optional fields",level:2}),`
`,e.jsx(i,{label:"How to define mandatory fields",level:3}),`
`,e.jsx(n.p,{children:"A mandatory field must:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:'Explicitly include the word "Mandatory" in the label.'}),`
`,e.jsx(n.li,{children:"Never rely on an asterisk alone."}),`
`,e.jsx(n.li,{children:"Clearly communicate the expected format in the helper text when relevant."}),`
`]}),`
`,e.jsx(i,{label:"Optional fields",level:3}),`
`,e.jsx(n.p,{children:'Optional fields do not need to be labeled "Optional" and can remain unmarked if mandatory fields are clearly identified.'}),`
`,e.jsx(o,{of:h,sourceState:"hidden",showSandbox:!0}),`
`,e.jsx(i,{label:"Submit behavior",level:2}),`
`,e.jsx(n.p,{children:"In the OVHcloud Design System, the submit should button remain enabled at all times."}),`
`,e.jsx(n.p,{children:"Validation is triggered when the user attempts to submit the form."}),`
`,e.jsx(n.p,{children:"The form must provide feedback after user action rather than prevent the action."}),`
`,e.jsx(i,{label:"Standard submit flow",level:3}),`
`,e.jsx(n.p,{children:"Initial state:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"The submit button is visible and enabled."}),`
`,e.jsx(n.li,{children:"Mandatory fields are clearly marked in the label."}),`
`,e.jsx(n.li,{children:"Helper text communicates expected formats when relevant."}),`
`,e.jsx(n.li,{children:"No error messages are displayed before interaction."}),`
`]}),`
`,e.jsx(n.p,{children:"When the user clicks the submit button:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"All mandatory fields are validated."}),`
`,e.jsx(n.li,{children:"All format validations are executed."}),`
`,e.jsx(n.li,{children:"Field-level errors are displayed where needed."}),`
`,e.jsx(n.li,{children:"A global error may be displayed if applicable."}),`
`,e.jsx(n.li,{children:"No field values are cleared."}),`
`]}),`
`,e.jsx(n.p,{children:"If errors are found:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Each invalid field displays its error message."}),`
`,e.jsx(n.li,{children:"Error styling is applied."}),`
`,e.jsx(n.li,{children:"Fields remain populated."}),`
`,e.jsx(n.li,{children:"The submit button remains enabled."}),`
`,e.jsx(n.li,{children:"The user can immediately correct the fields and resubmit."}),`
`]}),`
`,e.jsxs(n.p,{children:["If the form is displayed in a ",e.jsx(n.strong,{children:"Modal"})," or ",e.jsx(n.strong,{children:"Drawer"}),":"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"The container remains open."}),`
`,e.jsx(n.li,{children:"Errors are displayed within the same context."}),`
`]}),`
`,e.jsx(n.p,{children:"If no errors are found:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"The form proceeds to submission."}),`
`,e.jsxs(n.li,{children:["Success feedback is triggered (",e.jsx(n.strong,{children:"Toast"})," or confirmation page depending on the flow)."]}),`
`]}),`
`,e.jsx(i,{label:"Relationship with inline validation",level:3}),`
`,e.jsx(n.p,{children:"Inline validation (on blur):"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"May display format errors as soon as the user leaves a field."}),`
`,e.jsx(n.li,{children:"Improves correction speed."}),`
`,e.jsx(n.li,{children:"Does not replace submit validation."}),`
`]}),`
`,e.jsx(n.p,{children:"On submit:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"All validations are executed again to ensure consistency."}),`
`,e.jsx(n.li,{children:"Required errors appear even if the field was never focused."}),`
`]}),`
`,e.jsx(i,{label:"Loading & action buttons states",level:3}),`
`,e.jsx(n.p,{children:"When the user submits a form:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"The primary action button switches to a loading state."}),`
`,e.jsx(n.li,{children:"The secondary action, if any, becomes disabled."}),`
`]}),`
`,e.jsx(n.p,{children:"This prevents duplicate submissions and conflicting actions, and clearly communicates that the request is being processed."}),`
`,e.jsx(i,{label:"Error handling",level:2}),`
`,e.jsx(n.p,{children:"Error handling must clearly communicate what went wrong and how the user can correct it."}),`
`,e.jsx(n.p,{children:"Error handling exists at two levels."}),`
`,e.jsx(n.p,{children:"Global errors explain why submission failed. Field-level errors explain what needs correction."}),`
`,e.jsx(i,{label:"Local errors (field-level)",level:3}),`
`,e.jsx(n.p,{children:"Field-level errors are tied to a specific input."}),`
`,e.jsx(n.p,{children:"They indicate that the value entered in a particular field is invalid or missing."}),`
`,e.jsx(i,{label:"When field-level errors are triggered",level:4}),`
`,e.jsx(n.p,{children:"Field-level errors can be triggered:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"On blur (inline validation)."}),`
`,e.jsx(n.li,{children:"On submit."}),`
`,e.jsx(n.li,{children:"After asynchronous validation (e.g. backend check)."}),`
`]}),`
`,e.jsx(n.p,{children:"Submit validation must always re-validate all fields, even if inline validation is enabled."}),`
`,e.jsx(i,{label:"Examples of field-level errors",level:4}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Required field left empty."}),`
`,e.jsx(n.li,{children:"Invalid email format."}),`
`,e.jsx(n.li,{children:"Password does not meet requirements."}),`
`]}),`
`,e.jsx(i,{label:"Global errors (form-level)",level:3}),`
`,e.jsx(n.p,{children:"Global errors are not tied to a single field."}),`
`,e.jsx(n.p,{children:"They occur when:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Backend validation fails."}),`
`,e.jsx(n.li,{children:"A network error occurs."}),`
`,e.jsx(n.li,{children:"A business rule prevents submission."}),`
`,e.jsx(n.li,{children:"The action cannot be completed."}),`
`]}),`
`,e.jsx(i,{label:"Types of Global Errors",level:4}),`
`,e.jsx(i,{label:"Recoverable Failure",level:5}),`
`,e.jsxs(n.p,{children:["Use a ",e.jsx(n.strong,{children:"Toast"})," when:"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"The failure is temporary."}),`
`,e.jsx(n.li,{children:"The user can retry immediately."}),`
`,e.jsx(n.li,{children:"The error does not block form structure."}),`
`]}),`
`,e.jsx(n.p,{children:"Example:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Temporary network issue."}),`
`]}),`
`,e.jsx(i,{label:"Critical / Blocking Failure",level:5}),`
`,e.jsx(n.p,{children:"Use a critical Message component when:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"The submission fails definitively."}),`
`,e.jsx(n.li,{children:"The user must take action."}),`
`,e.jsx(n.li,{children:"The error is structural or business-related."}),`
`,e.jsx(n.li,{children:"The error message is long or detailed."}),`
`]}),`
`,e.jsx(i,{label:"In Modal or Drawer contexts",level:5}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Always use a critical ",e.jsx(n.strong,{children:"Message"}),"."]}),`
`,e.jsx(n.li,{children:"The message is displayed inside it."}),`
`,e.jsx(n.li,{children:"The container remains open."}),`
`]}),`
`,e.jsx(i,{label:"Placement of global error",level:4}),`
`,e.jsxs(n.p,{children:["When using a critical ",e.jsx(n.strong,{children:"Message"}),":"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"It should be placed above the action buttons."}),`
`,e.jsx(n.li,{children:"It must not replace field-level errors."}),`
`]}),`
`,e.jsx(i,{label:"Example",level:3}),`
`,e.jsx(o,{of:x,sourceState:"hidden",showSandbox:!0}),`
`,e.jsx(i,{label:"Success handling",level:2}),`
`,e.jsx(i,{label:"Direct feedback",level:3}),`
`,e.jsxs(n.p,{children:["Use a ",e.jsx(n.strong,{children:"Toast"})," when:"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"The action is completed successfully."}),`
`,e.jsx(n.li,{children:"The user stays on the same page."}),`
`,e.jsx(n.li,{children:"No additional flow is required."}),`
`]}),`
`,e.jsx(i,{label:"Confirmation page / modal",level:3}),`
`,e.jsx(n.p,{children:"Use when:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"The flow continues."}),`
`,e.jsx(n.li,{children:"The user moves to a next step."}),`
`,e.jsx(n.li,{children:"A confirmation summary is required."}),`
`]}),`
`,e.jsx(i,{label:"Form structures",level:2}),`
`,e.jsx(i,{label:"Simple form with standard action buttons",level:3}),`
`,e.jsx(o,{of:u,sourceState:"hidden",showSandbox:!0}),`
`,e.jsx(i,{label:"Grouped fields form",level:3}),`
`,e.jsx(o,{of:j,sourceState:"hidden",showSandbox:!0}),`
`,e.jsx(i,{label:"Critical form",level:3}),`
`,e.jsx(o,{of:p,sourceState:"hidden",showSandbox:!0}),`
`,e.jsx(i,{label:"Accessibility requirements",level:2}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:'"Mandatory" must be visible in the label.'}),`
`,e.jsx(n.li,{children:"Expected input format must be visible in helper text."}),`
`,e.jsx(n.li,{children:"Error messages must be programmatically associated with fields."}),`
`,e.jsx(n.li,{children:"Fields must remain populated after validation errors."}),`
`,e.jsx(n.li,{children:"Inline validation must not trap focus."}),`
`]}),`
`,e.jsx(i,{label:"Component selection guidelines",level:2}),`
`,e.jsx(n.p,{children:"This non-exhaustive section helps teams choose the right input component depending on intent. It is presented from the user intention perspective."}),`
`,e.jsx(n.p,{children:"Choosing a component is not only about the type of data. It is about:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"How users think about the choice."}),`
`,e.jsx(n.li,{children:"Whether comparison is important."}),`
`,e.jsx(n.li,{children:"Whether precision is required."}),`
`,e.jsx(n.li,{children:"Whether the action is reversible."}),`
`,e.jsx(n.li,{children:"The cognitive load of the interface."}),`
`]}),`
`,e.jsx(n.p,{children:"The right component reduces friction before validation is even needed."}),`
`,e.jsx(i,{label:"When the user needs to provide short, structured information",level:3}),`
`,e.jsxs(n.p,{children:["Use ",e.jsx(l,{kind:r.input,story:s.documentation,children:"Input"})," component."]}),`
`,e.jsx(n.p,{children:"Use for:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Personal information (First name, Last name)."}),`
`,e.jsx(n.li,{children:"Identifiers (Reference number, Customer ID)."}),`
`,e.jsx(n.li,{children:"Short labels (Project name, Tag name)."}),`
`]}),`
`,e.jsx(n.p,{children:"Why?"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Users expect a single-line input for short, structured answers."}),`
`,e.jsx(n.li,{children:"Keeps vertical space minimal."}),`
`,e.jsx(n.li,{children:"Encourages concise input."}),`
`]}),`
`,e.jsx(n.p,{children:"Do not use when:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"The user must provide explanation or justification."}),`
`,e.jsx(n.li,{children:"The expected answer may exceed one short sentence."}),`
`]}),`
`,e.jsx(i,{label:"When the user needs to explain, justify, or describe something",level:3}),`
`,e.jsxs(n.p,{children:["Use ",e.jsx(l,{kind:r.textarea,story:s.documentation,children:"Textarea"})," component."]}),`
`,e.jsx(n.p,{children:"Use for:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Explain why the user is requesting a change."}),`
`,e.jsx(n.li,{children:"Describe an issue the user encountered."}),`
`,e.jsx(n.li,{children:"Additional comments."}),`
`]}),`
`,e.jsx(n.p,{children:"Why?"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Visually communicates that longer input is expected."}),`
`,e.jsx(n.li,{children:"Encourages detailed answers."}),`
`,e.jsx(n.li,{children:"Prevents frustration caused by limited visible space."}),`
`]}),`
`,e.jsx(i,{label:"When the user must create or confirm secure credentials",level:3}),`
`,e.jsxs(n.p,{children:["Use ",e.jsx(l,{kind:r.password,story:s.documentation,children:"Password"})," component."]}),`
`,e.jsx(n.p,{children:"Use for:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Account creation."}),`
`,e.jsx(n.li,{children:"Password reset."}),`
`,e.jsx(n.li,{children:"Sensitive authentication fields."}),`
`]}),`
`,e.jsx(n.p,{children:"Why?"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Hides sensitive information."}),`
`,e.jsx(n.li,{children:"May include strength indicators."}),`
`,e.jsx(n.li,{children:"Can support show/hide functionality."}),`
`]}),`
`,e.jsx(i,{label:"When the user must enter an exact numeric value",level:3}),`
`,e.jsxs(n.p,{children:["Use ",e.jsx(l,{kind:r.input,story:s.documentation,children:"Input"})," or ",e.jsx(l,{kind:r.quantity,story:s.documentation,children:"Quantity"})," component"]}),`
`,e.jsx(n.p,{children:"Use for:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Quantity of items."}),`
`,e.jsx(n.li,{children:"Budget amount (precise value)."}),`
`,e.jsx(n.li,{children:"Number of licenses."}),`
`,e.jsx(n.li,{children:"Percentage rate."}),`
`]}),`
`,e.jsx(n.p,{children:"Why?"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Precision matters."}),`
`,e.jsx(n.li,{children:"Value must be exact."}),`
`]}),`
`,e.jsx(n.p,{children:"Avoid when:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"The number has formatting rules (phone, IBAN, BIC)."}),`
`,e.jsx(n.li,{children:"Users are more likely to think in ranges than exact values."}),`
`]}),`
`,e.jsx(i,{label:"When the user is selecting an approximate value or a range",level:3}),`
`,e.jsxs(n.p,{children:["Use ",e.jsx(l,{kind:r.range,story:s.documentation,children:"Range"})," component."]}),`
`,e.jsx(n.p,{children:"Use for:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Budget filter."}),`
`,e.jsx(n.li,{children:"Price filtering in search results."}),`
`,e.jsx(n.li,{children:"Age range selection."}),`
`,e.jsx(n.li,{children:"Performance tuning."}),`
`]}),`
`,e.jsx(n.p,{children:"Why?"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Encourages exploration."}),`
`,e.jsx(n.li,{children:"Works well for filtering."}),`
`,e.jsx(n.li,{children:"Suitable when precision is not critical."}),`
`]}),`
`,e.jsx(n.p,{children:"Avoid when:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Legal, financial, or contractual precision is required."}),`
`,e.jsx(n.li,{children:"The user must enter a specific numeric value."}),`
`]}),`
`,e.jsx(i,{label:"When users must choose one option and all options should be visible",level:3}),`
`,e.jsxs(n.p,{children:["Use ",e.jsx(l,{kind:r.radioGroup,story:s.documentation,children:"Radio"})," buttons."]}),`
`,e.jsx(n.p,{children:"Use for:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Choosing a subscription plan (e.g., Basic / Pro / Enterprise)."}),`
`,e.jsx(n.li,{children:"Selecting delivery method."}),`
`,e.jsx(n.li,{children:"Choosing payment type."}),`
`]}),`
`,e.jsx(n.p,{children:"Why?"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"All options are visible."}),`
`,e.jsx(n.li,{children:"Encourages comparison."}),`
`,e.jsx(n.li,{children:"Reduces hidden choices."}),`
`,e.jsx(n.li,{children:"Recommended when there are between 2 and 5 options."}),`
`,e.jsx(n.li,{children:"Each option has important contextual differences."}),`
`]}),`
`,e.jsx(i,{label:"When users must choose one option from a list",level:3}),`
`,e.jsx(i,{label:"Select vs Combobox",level:4}),`
`,e.jsxs(n.p,{children:["When a user must select a single option from a predefined list, the choice between ",e.jsx(n.strong,{children:"Select"})," and ",e.jsx(n.strong,{children:"Combobox"})," depends mainly on the size and complexity of the list."]}),`
`,e.jsx(i,{label:"Use Select",level:4}),`
`,e.jsxs(n.p,{children:["Use ",e.jsx(l,{kind:r.select,story:s.documentation,children:"Select"})," when the list is limited and easy to scan visually."]}),`
`,e.jsx(n.p,{children:"Typical situations:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Selecting a status (Draft / Pending / Approved)."}),`
`,e.jsx(n.li,{children:"Choosing a priority level (Low / Medium / High)."}),`
`,e.jsx(n.li,{children:"Selecting a department in a small organization."}),`
`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Select"})," is appropriate when:"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"The number of options is moderate."}),`
`,e.jsx(n.li,{children:"Users can easily scroll and recognize the right option."}),`
`,e.jsx(n.li,{children:"Search is not necessary."}),`
`]}),`
`,e.jsx(i,{label:"Use Combobox",level:4}),`
`,e.jsxs(n.p,{children:["Use ",e.jsx(l,{kind:r.combobox,story:s.documentation,children:"Combobox"})," when the list is long or when search significantly improves usability."]}),`
`,e.jsx(n.p,{children:"Typical situations:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Selecting a country from a global list."}),`
`,e.jsx(n.li,{children:"Choosing a city."}),`
`,e.jsx(n.li,{children:"Assigning a user from a large organization."}),`
`,e.jsx(n.li,{children:"Selecting a product from a large catalog."}),`
`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Combobox"})," is appropriate when:"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"The dataset is large."}),`
`,e.jsx(n.li,{children:"Users are likely to know what they are looking for."}),`
`,e.jsx(n.li,{children:"Scrolling through the entire list would be inefficient."}),`
`]}),`
`,e.jsx(i,{label:"When users can select multiple independent options",level:3}),`
`,e.jsxs(n.p,{children:["Use ",e.jsx(l,{kind:r.checkbox,story:s.documentation,children:"Checkboxes"}),"."]}),`
`,e.jsx(n.p,{children:"Use for:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Selecting product features."}),`
`,e.jsx(n.li,{children:"Choosing notification preferences."}),`
`,e.jsx(n.li,{children:"Accepting multiple agreements."}),`
`]}),`
`,e.jsx(n.p,{children:"Why?"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Clearly communicates independence."}),`
`,e.jsx(n.li,{children:"No mutual exclusion implied."}),`
`,e.jsx(n.li,{children:"Good for visible, short lists."}),`
`]}),`
`,e.jsx(i,{label:"When the user is enabling or disabling a setting",level:3}),`
`,e.jsxs(n.p,{children:["Use ",e.jsx(l,{kind:r.toggle,story:s.documentation,children:"Toggle"})," component."]}),`
`,e.jsx(n.p,{children:"Use for:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Enable dark mode."}),`
`,e.jsx(n.li,{children:"Activate notifications."}),`
`,e.jsx(n.li,{children:"Turn on auto-renewal."}),`
`]}),`
`,e.jsx(n.p,{children:"Why?"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Communicates immediate on/off state."}),`
`,e.jsx(n.li,{children:"Best for persistent settings."}),`
`]}),`
`,e.jsx(n.p,{children:"Avoid when:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"The action is critical or legally binding."}),`
`,e.jsx(n.li,{children:"The user must explicitly confirm something important."}),`
`]}),`
`,e.jsxs(n.p,{children:["In those cases, use a ",e.jsx(l,{kind:r.checkbox,story:s.documentation,children:"Checkbox"}),"."]}),`
`,e.jsx(i,{label:"When the user must select a specific date",level:3}),`
`,e.jsxs(n.p,{children:["Use ",e.jsx(l,{kind:r.datepicker,story:s.documentation,children:"Datepicker"})," component."]}),`
`,e.jsx(n.p,{children:"Use for:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Booking a meeting."}),`
`,e.jsx(n.li,{children:"Setting a deadline."}),`
`,e.jsx(n.li,{children:"Scheduling delivery."}),`
`]}),`
`,e.jsx(n.p,{children:"Why?"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Prevents format errors."}),`
`,e.jsx(n.li,{children:"Reduces cognitive load."}),`
`,e.jsx(n.li,{children:"Ensures valid date selection."}),`
`]}),`
`,e.jsx(n.p,{children:"Consider alternatives when:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Only month and year are required."}),`
`,e.jsx(n.li,{children:"The user frequently types dates manually (advanced users)."}),`
`]}),`
`,e.jsx(i,{label:"When the user must provide supporting material",level:3}),`
`,e.jsxs(n.p,{children:["Use ",e.jsx(l,{kind:r.fileUpload,story:s.documentation,children:"File Upload"})," component."]}),`
`,e.jsx(n.p,{children:"Use for:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Uploading identity documents."}),`
`,e.jsx(n.li,{children:"Adding attachments to a request."}),`
`,e.jsx(n.li,{children:"Submitting supporting evidence."}),`
`,e.jsx(n.li,{children:"Uploading invoices."}),`
`]}),`
`,e.jsx(n.p,{children:"Why?"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Allows users to provide official or visual proof that cannot be reliably captured in structured fields."}),`
`,e.jsx(n.li,{children:"The content may need to be reviewed manually."}),`
`,e.jsx(n.li,{children:"Reproducing the information through fields would be incomplete or unreliable."}),`
`]}),`
`,e.jsx(n.p,{children:"Avoid when:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"The information can be captured through structured inputs (text, number, date, select)."}),`
`,e.jsx(n.li,{children:"The upload is used to compensate for missing inputs."}),`
`]})]})}function je(t={}){const{wrapper:n}={...c(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(d,{...t})}):d(t)}export{je as default};
