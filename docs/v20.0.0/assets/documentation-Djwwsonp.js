import{i as e}from"./rolldown-runtime-Dd_uD5pT.js";import{t}from"./jsx-runtime-DREnUpxT.js";import{T as n}from"./index-CzEwg6AJ.js";var r=e(t());function i(e){let t={li:`li`,ol:`ol`,p:`p`,strong:`strong`,ul:`ul`,...n(),...e.components},{Anatomy:i,BestPractices:a,Canvas:s,Heading:c,IdentityCard:l,Kbd:u}=t;return i||o(`Anatomy`,!0),a||o(`BestPractices`,!0),s||o(`Canvas`,!0),c||o(`Heading`,!0),l||o(`IdentityCard`,!0),u||o(`Kbd`,!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s,{story:`Overview`,source:`none`}),`
`,(0,r.jsx)(c,{label:`Overview`,level:2}),`
`,(0,r.jsx)(l,{aliases:[`Inline Editor`],figmaLink:`https://www.figma.com/design/9jDDTcR4a9jPRFcdjawAlf/branch/nrXo7riue1w773W2h4HGBS/ODS---UI-Kit?m=auto&node-id=14291-46529&t=rsFWlOhZe0TlF6Wd-1`,githubUrl:`https://github.com/ovh/design-system/tree/master/packages/ods-react/src/components/editable`,name:`Editable`,startingVersion:19,children:(0,r.jsxs)(t.p,{children:[`The `,(0,r.jsx)(t.strong,{children:`Editable`}),` component allows users to edit text directly in place. It replaces static text with an editable field,
letting users quickly update content without opening a form or modal.`]})}),`
`,(0,r.jsx)(c,{label:`Usage`,level:2}),`
`,(0,r.jsxs)(t.p,{children:[`The `,(0,r.jsx)(t.strong,{children:`Editable`}),` component is used when users need to modify text directly in the interface, without disrupting their workflow.`]}),`
`,(0,r.jsx)(t.p,{children:`They are commonly used for:`}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsx)(t.li,{children:`Inline editing of cell values in a datagrid or table (e.g., a nickname)`}),`
`,(0,r.jsx)(t.li,{children:`Editable titles or headings (e.g., rename a dashboard)`}),`
`,(0,r.jsx)(t.li,{children:`Settings panels (e.g. configuration values, such as thresholds or labels)`}),`
`,(0,r.jsx)(t.li,{children:`Text snippets (e.g., section titles, captions)`}),`
`,(0,r.jsx)(t.li,{children:`Lists and todo items`}),`
`]}),`
`,(0,r.jsx)(c,{label:`Dos & Don'ts`,level:3}),`
`,(0,r.jsx)(a,{donts:[`- Remove visual cues that indicate editability.`,`- Use Editable for long or complex form content.`,`- Use Editable when changes must be reviewed or explicitly confirmed in a separate step.`],dos:[`- Use Editable when users need to edit values quickly and frequently.`,`- Define a reasonable max length to prevent layout overflow.`,`- Ensure editable content has a meaningful default or empty state.`]}),`
`,(0,r.jsx)(c,{label:`Best Practices in Context`,level:3}),`
`,(0,r.jsx)(i,{src:`components/editable/anatomy.png`}),`
`,(0,r.jsxs)(t.ol,{children:[`
`,(0,r.jsx)(t.li,{children:(0,r.jsx)(t.strong,{children:`Editable`})}),`
`,(0,r.jsx)(t.li,{children:(0,r.jsx)(t.strong,{children:`Preview / Editing field`})}),`
`,(0,r.jsx)(t.li,{children:(0,r.jsx)(t.strong,{children:`Actions`})}),`
`]}),`
`,(0,r.jsx)(t.p,{children:`Preview displays static text when not in edit mode while the field is visible only during edit mode.`}),`
`,(0,r.jsx)(c,{label:`Behavior`,level:2}),`
`,(0,r.jsx)(c,{label:`Edit Activation`,level:3}),`
`,(0,r.jsx)(t.p,{children:`Users can enter edit mode through different triggers:`}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsx)(t.li,{children:`By click on the edit trigger`}),`
`,(0,r.jsx)(t.li,{children:`By double-click on the preview`}),`
`]}),`
`,(0,r.jsx)(c,{label:`Editing`,level:3}),`
`,(0,r.jsx)(t.p,{children:`When entering edit mode, the preview is replaced by a field containing the current value.`}),`
`,(0,r.jsx)(t.p,{children:`Users can type in the field and update the current value.`}),`
`,(0,r.jsx)(c,{label:`Submission`,level:3}),`
`,(0,r.jsx)(t.p,{children:`The editable value should be committed when the user activates the submit trigger.`}),`
`,(0,r.jsx)(c,{label:`Cancellation`,level:3}),`
`,(0,r.jsx)(t.p,{children:`Activating the cancel trigger should discard the current changes and returns the component to its previous value.`}),`
`,(0,r.jsx)(c,{label:`Empty`,level:3}),`
`,(0,r.jsx)(t.p,{children:`If the current value is empty, an empty state should be displayed to indicate that no content has been defined yet.`}),`
`,(0,r.jsx)(c,{label:`Navigation`,level:2}),`
`,(0,r.jsx)(c,{label:`Focus Management`,level:3}),`
`,(0,r.jsx)(t.p,{children:`When edit mode is entered, focus should moves to the expected field.`}),`
`,(0,r.jsx)(t.p,{children:`Exiting edit mode returns focus according to the surrounding context.`}),`
`,(0,r.jsx)(c,{label:`General Keyboard Shortcuts`,level:3}),`
`,(0,r.jsxs)(t.p,{children:[`Pressing `,(0,r.jsx)(u,{children:`Tab`}),` moves focus forward to the next interactive element.`]}),`
`,(0,r.jsxs)(t.p,{children:[`Pressing `,(0,r.jsx)(u,{children:`Shift`}),` + `,(0,r.jsx)(u,{children:`Tab`}),` moves focus backward to the previous interactive element.`]}),`
`,(0,r.jsxs)(t.p,{children:[`Pressing `,(0,r.jsx)(u,{children:`Enter`}),` on the edit trigger activates edit mode.`]}),`
`,(0,r.jsxs)(t.p,{children:[`Pressing `,(0,r.jsx)(u,{children:`Enter`}),` on the submit trigger should commit the current value and exits edit mode.`]}),`
`,(0,r.jsxs)(t.p,{children:[`Pressing `,(0,r.jsx)(u,{children:`Enter`}),` on the cancel trigger should discard the current changes and exits edit mode.`]}),`
`,(0,r.jsx)(c,{label:`Accessibility`,level:2}),`
`,(0,r.jsxs)(t.p,{children:[`Accessibility depends on the form elements used within `,(0,r.jsx)(t.strong,{children:`Editable`}),`.
Make sure inputs, triggers and custom actions follow standard accessibility rules.`]})]})}function a(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(i,{...e})}):i(e)}function o(e,t){throw Error(`Expected `+(t?`component`:`object`)+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}export{a as default};