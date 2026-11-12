import{i as e}from"./rolldown-runtime-Dd_uD5pT.js";import{t}from"./jsx-runtime-DREnUpxT.js";import{T as n}from"./index-CzEwg6AJ.js";var r=e(t());function i(e){let t={code:`code`,em:`em`,li:`li`,ol:`ol`,p:`p`,strong:`strong`,ul:`ul`,...n(),...e.components},{Anatomy:i,BestPractices:a,Canvas:s,DocLink:c,ExternalLink:l,Heading:u,IdentityCard:d,Kbd:f}=t;return i||o(`Anatomy`,!0),a||o(`BestPractices`,!0),s||o(`Canvas`,!0),c||o(`DocLink`,!0),l||o(`ExternalLink`,!0),u||o(`Heading`,!0),d||o(`IdentityCard`,!0),f||o(`Kbd`,!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.p,{children:(0,r.jsxs)(t.em,{children:[(0,r.jsx)(t.strong,{children:`Checkbox`}),` are used for a list of options where the user may make a choice by selecting multiple options, including all or none.`]})}),`
`,(0,r.jsx)(s,{story:`Overview`,source:`none`}),`
`,(0,r.jsx)(u,{label:`Overview`,level:2}),`
`,(0,r.jsx)(d,{aliases:[`Checkbox Button (previous name)`,`Check Box`,`Tick Box`],extraLinks:[(0,r.jsx)(c,{to:`/guides/forms`,children:`Form Guidelines`})],figmaLink:`https://www.figma.com/design/9jDDTcR4a9jPRFcdjawAlf/ODS---UI-Kit?node-id=3-28514`,githubUrl:`https://github.com/ovh/design-system/tree/master/packages/ods-react/src/components/checkbox`,name:`Checkbox`,children:(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:`Checkbox`}),` are used to make a choice that must be confirmed by submitting a form. For an instantaneous choice
(without submit), the use of a toggle is preferred (see Toggle).`]})}),`
`,(0,r.jsx)(u,{label:`Usage`,level:2}),`
`,(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:`Checkbox`}),` can be used in forms and containers.`]}),`
`,(0,r.jsx)(t.p,{children:`Also, it can serve as :`}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsx)(t.li,{children:`Selecting/deselecting item(s)`}),`
`,(0,r.jsx)(t.li,{children:`Lists/sub-lists`}),`
`,(0,r.jsx)(t.li,{children:`Filters`}),`
`,(0,r.jsx)(t.li,{children:`Agreement to terms and conditions`}),`
`]}),`
`,(0,r.jsxs)(t.p,{children:[`A `,(0,r.jsx)(t.strong,{children:`Checkbox`}),` group is used for a list of options where the user may make a choice by selecting multiple options, including all or none.`]}),`
`,(0,r.jsx)(u,{label:`Dos & Don'ts`,level:3}),`
`,(0,r.jsx)(a,{donts:[`- Don't use a Checkbox if the user can only select one option, use a Radio Group instead`,`- Don't truncate labels with ellipsis`,`- Don't place Checkboxes too close together, maintain sufficient spacing to prevent selection errors`,`- Don't use Checkboxes for binary actions like "save" or "submit", use a Button instead`],dos:[`- Use clear, concise, and descriptive labels to explain what the Checkbox controls`,`- Allow labels to wrap to multiple lines when necessary, readability is more important than keeping to one line here`,`- Group related Checkboxes using a fieldset with a legend to provide context when applicable`,`- Use Checkboxes when multiple selections are allowed within a group of options`]}),`
`,(0,r.jsx)(u,{label:`Best Practices in Context`,level:3}),`
`,(0,r.jsx)(i,{src:`components/checkbox/anatomy.png`}),`
`,(0,r.jsxs)(t.ol,{children:[`
`,(0,r.jsx)(t.li,{children:(0,r.jsx)(t.strong,{children:`Checkbox`})}),`
`,(0,r.jsx)(t.li,{children:(0,r.jsx)(t.strong,{children:`Label`})}),`
`]}),`
`,(0,r.jsx)(u,{label:`Placement`,level:2}),`
`,(0,r.jsxs)(t.p,{children:[`The `,(0,r.jsx)(t.strong,{children:`Checkbox`}),` can be autonomous, as it can be labelled in a starting/ending text.`]}),`
`,(0,r.jsx)(t.p,{children:`It can be inserted in containers or next to an external item.`}),`
`,(0,r.jsx)(u,{label:`Behavior`,level:2}),`
`,(0,r.jsxs)(t.p,{children:[`The default behavior is that when clicking on the `,(0,r.jsx)(t.strong,{children:`Checkbox`}),` or its linked label, the `,(0,r.jsx)(t.strong,{children:`Checkbox`}),` is alternatively selected or deselected depending on the previous state.`]}),`
`,(0,r.jsxs)(t.p,{children:[`The indeterminate state is used only when the `,(0,r.jsx)(t.strong,{children:`Checkbox`}),` contains a sub-list of selections that are partially selected.`]}),`
`,(0,r.jsxs)(t.p,{children:[`The `,(0,r.jsx)(t.strong,{children:`Checkbox`}),` can be in an error state, but also in a disabled state.`]}),`
`,(0,r.jsx)(u,{label:`Navigation`,level:2}),`
`,(0,r.jsx)(u,{label:`Focus Management`,level:3}),`
`,(0,r.jsxs)(t.p,{children:[`The `,(0,r.jsx)(t.strong,{children:`Checkbox`}),` component can receive keyboard focus and is part of the standard tab order.`]}),`
`,(0,r.jsxs)(t.p,{children:[`If the `,(0,r.jsx)(t.strong,{children:`Checkbox`}),` is disabled, it does not receive focus and cannot be activated via keyboard.`]}),`
`,(0,r.jsx)(u,{label:`General Keyboard Shortcuts`,level:3}),`
`,(0,r.jsxs)(t.p,{children:[`Pressing `,(0,r.jsx)(f,{children:`Space`}),` toggles the `,(0,r.jsx)(t.strong,{children:`Checkbox`}),` state (checked/unchecked).`]}),`
`,(0,r.jsx)(u,{label:`Accessibility`,level:2}),`
`,(0,r.jsxs)(t.p,{children:[`This component complies with the `,(0,r.jsx)(l,{href:`https://www.w3.org/WAI/ARIA/apg/patterns/checkbox`,children:`Checkbox WAI-ARIA design pattern`}),`.`]}),`
`,(0,r.jsxs)(t.p,{children:[`Vertical spacing of at least `,(0,r.jsx)(t.code,{children:`8px`}),` between each checkbox is advised to provide sufficient tactile and visual separation.`]})]})}function a(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(i,{...e})}):i(e)}function o(e,t){throw Error(`Expected `+(t?`component`:`object`)+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}export{a as default};