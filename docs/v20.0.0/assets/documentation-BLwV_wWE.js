import{i as e}from"./rolldown-runtime-Dd_uD5pT.js";import{t}from"./jsx-runtime-DREnUpxT.js";import{T as n}from"./index-CzEwg6AJ.js";var r=e(t());function i(e){let t={code:`code`,em:`em`,li:`li`,ol:`ol`,p:`p`,pre:`pre`,strong:`strong`,...n(),...e.components},{Anatomy:i,BestPractices:a,Canvas:s,DocLink:c,Heading:l,Icon:u,IdentityCard:d}=t;return i||o(`Anatomy`,!0),a||o(`BestPractices`,!0),s||o(`Canvas`,!0),c||o(`DocLink`,!0),l||o(`Heading`,!0),u||o(`Icon`,!0),d||o(`IdentityCard`,!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.p,{children:(0,r.jsxs)(t.em,{children:[`A `,(0,r.jsx)(t.strong,{children:`Form Field`}),` component is used to wrap several form components with logic, visual hints and additional styling`]})}),`
`,(0,r.jsx)(s,{story:`Overview`,source:`none`}),`
`,(0,r.jsx)(l,{label:`Overview`,level:2}),`
`,(0,r.jsx)(d,{aliases:[`Form Control`],extraLinks:[(0,r.jsx)(c,{to:`/guides/forms`,children:`Form Guidelines`})],figmaLink:`https://www.figma.com/design/9jDDTcR4a9jPRFcdjawAlf/ODS---UI-Kit?node-id=172-11996`,githubUrl:`https://github.com/ovh/design-system/tree/master/packages/ods-react/src/components/form-field`,name:`Form Field`,children:(0,r.jsxs)(t.p,{children:[`A `,(0,r.jsx)(t.strong,{children:`Form Field`}),` is based on a single form element or group components as a whole that are decorated with additional
text to handle specific types of information, like a Password field for example.`]})}),`
`,(0,r.jsx)(l,{label:`Usage`,level:2}),`
`,(0,r.jsxs)(t.p,{children:[`A `,(0,r.jsx)(t.strong,{children:`Form Field`}),` is used to wrap a field that can be customized with some additional information about this field.`]}),`
`,(0,r.jsx)(t.p,{children:`Additional information (label, placeholder, helper message) provides hint and help to users, so that they can easily understand what is required from them in a form.`}),`
`,(0,r.jsx)(t.p,{children:`Users will also type or enter information in the expected format and avoid mistakes.`}),`
`,(0,r.jsx)(l,{label:`Dos & Don'ts`,level:3}),`
`,(0,r.jsx)(a,{donts:[`- Don't place interactive elements like links or buttons inside the label`,`- Don't rely on an asterisk alone to indicate required fields. Prefer explicit helper text or label`,`- Overuse content related Form Fields with top aligned label in one group since it requires quite vertical space: split into smaller groups`,`- Don't use Form Field when there's no input or interaction expected. It is meant for form inputs, not static content`],dos:[`- Use Form Field to wrap form inputs with a clear structure, including a label, optional helper text, or extra information`,`- Group related fields using multiple Form Fields to improve clarity and scannability`,`- Include helper messages to guide users on expected input formats or constraints (e.g., password requirements)`,`- Use error message to provide feedback after user interaction`]}),`
`,(0,r.jsx)(l,{label:`Best Practices in Context`,level:3}),`
`,(0,r.jsx)(i,{src:`components/form-field/anatomy.png`}),`
`,(0,r.jsxs)(t.ol,{children:[`
`,(0,r.jsx)(t.li,{children:(0,r.jsx)(t.strong,{children:`Form Field`})}),`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:`Label`}),` - optional`]}),`
`,(0,r.jsx)(t.li,{children:(0,r.jsx)(t.strong,{children:`Form element`})}),`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:`Helper message`}),` - optional`]}),`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:`Error message`}),` - optional`]}),`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:`Hint text`}),` - optional`]}),`
`]}),`
`,(0,r.jsx)(l,{label:`Placement`,level:2}),`
`,(0,r.jsxs)(t.p,{children:[`A `,(0,r.jsx)(t.strong,{children:`Form Field`}),` can be used everywhere in a page where there is a form and users may need help to fill in this form.`]}),`
`,(0,r.jsx)(l,{label:`Behavior`,level:2}),`
`,(0,r.jsxs)(t.p,{children:[`A `,(0,r.jsx)(t.strong,{children:`Form Field`}),` can react to validation states, such as error, often by visually updating elements like the border or text indicators.`]}),`
`,(0,r.jsx)(t.p,{children:`Helper text and error messages can be displayed freely around the field component, depending on the design or functional needs.`}),`
`,(0,r.jsx)(l,{label:`Navigation`,level:2}),`
`,(0,r.jsxs)(t.p,{children:[`The `,(0,r.jsx)(t.strong,{children:`Form Field`}),` component itself is not focusable and does not receive keyboard focus.`]}),`
`,(0,r.jsxs)(t.p,{children:[`Only the interactive inner component it wraps, such as an Input, Password, Select, or other form element, can receive focus.
Focus behavior and keyboard navigation are determined by the specific form element used within the `,(0,r.jsx)(t.strong,{children:`Form Field`}),`.`]}),`
`,(0,r.jsx)(l,{label:`Accessibility`,level:2}),`
`,(0,r.jsxs)(t.p,{children:[`The `,(0,r.jsx)(t.strong,{children:`Form Field`}),` component handles by itself the accessibility requirements by using its internal components.`]}),`
`,(0,r.jsx)(s,{story:`AccessibilityLabel`}),`
`,(0,r.jsxs)(t.p,{children:[(0,r.jsx)(u,{name:`circle-check`,style:{color:`var(--ods-semantic-color-content-success)`}}),` Screen readers will announce the label, the field, its content and the helper text.`]}),`
`,(0,r.jsx)(l,{label:`Field id`,level:3}),`
`,(0,r.jsxs)(t.p,{children:[`You don't need to set any id: the `,(0,r.jsx)(t.strong,{children:`Form Field`}),` gives one to the field it wraps, then links the label, the helper text
and the error message to it.`]}),`
`,(0,r.jsxs)(t.p,{children:[`When you need a specific id (for an anchor, an end-to-end test or an external reference), set it either on the
`,(0,r.jsx)(t.strong,{children:`Form Field`}),` or directly on the field. An id set on the field takes precedence, and the label follows it:`]}),`
`,(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:`language-tsx`,children:`<FormField>
  <FormFieldLabel>
    Email:
  </FormFieldLabel>

  {/* The label targets "email" */}
  <Input id="email" />
</FormField>
`})}),`
`,(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:`Radio Group`}),` and `,(0,r.jsx)(t.strong,{children:`Range`}),` have no single element for the label to target: the label names the radio group, or each
thumb of the range, instead.`]})]})}function a(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(i,{...e})}):i(e)}function o(e,t){throw Error(`Expected `+(t?`component`:`object`)+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}export{a as default};