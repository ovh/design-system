import{i as e}from"./rolldown-runtime-Dd_uD5pT.js";import{t}from"./jsx-runtime-DREnUpxT.js";import{T as n}from"./index-CdRG7ZE_.js";var r=e(t());function i(e){let t={code:`code`,li:`li`,ol:`ol`,p:`p`,strong:`strong`,ul:`ul`,...n(),...e.components},{Anatomy:i,BestPractices:a,Canvas:s,Heading:c,Icon:l,IdentityCard:u,Kbd:d}=t;return i||o(`Anatomy`,!0),a||o(`BestPractices`,!0),s||o(`Canvas`,!0),c||o(`Heading`,!0),l||o(`Icon`,!0),u||o(`IdentityCard`,!0),d||o(`Kbd`,!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s,{story:`Overview`,source:`none`}),`
`,(0,r.jsx)(c,{label:`Overview`,level:2}),`
`,(0,r.jsx)(u,{aliases:[],figmaLink:`https://www.figma.com/design/9jDDTcR4a9jPRFcdjawAlf/ODS---UI-Kit?node-id=0-1&p=f&t=kwInPIiCg5eOsgBa-0`,githubUrl:`https://github.com/ovh/design-system/tree/master/packages/ods-react/src/components/query-filter`,name:`QueryFilter`,startingVersion:19,children:(0,r.jsxs)(t.p,{children:[`The `,(0,r.jsx)(t.strong,{children:`Query Filter`}),` component allows users to find specific items within a collection by constructing queries based
on properties and property values. Users can combine structured property conditions with free-text search to create
precise filters without writing raw query syntax.`]})}),`
`,(0,r.jsx)(c,{label:`Usage`,level:2}),`
`,(0,r.jsxs)(t.p,{children:[`The `,(0,r.jsx)(t.strong,{children:`Query Filter`}),` is typically used as a toolbar or input control above data tables or card grids to help users
quickly narrow down large datasets.`]}),`
`,(0,r.jsx)(t.p,{children:`It is commonly used in:`}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsx)(t.li,{children:`Dashboards and admin interfaces.`}),`
`,(0,r.jsx)(t.li,{children:`Productivity tools with lists or tables of items.`}),`
`,(0,r.jsx)(t.li,{children:`Applications where filtering and search are core workflows.`}),`
`]}),`
`,(0,r.jsx)(c,{label:`Dos & Don'ts`,level:3}),`
`,(0,r.jsx)(a,{donts:[`- Don't rely on Query Filter for very small collections where scanning the list is faster`,`- Don't use property tokens for datasets dominated by long free-form text`,`- Don't use operators that don't match the property type (e.g., "between" for single-value properties)`],dos:[`- Use Query Filter to enable multi-property search and filtering`,`- Apply the Query Filter to the full dataset, not just currently visible or loaded items`,`- Keep the query readable by ordering tokens logically and avoiding unnecessary duplication of conditions`]}),`
`,(0,r.jsx)(c,{label:`Best Practices in Context`,level:3}),`
`,(0,r.jsx)(i,{src:`components/query-filter/anatomy.png`}),`
`,(0,r.jsxs)(t.ol,{children:[`
`,(0,r.jsx)(t.li,{children:(0,r.jsx)(t.strong,{children:`QueryFilter`})}),`
`,(0,r.jsx)(t.li,{children:(0,r.jsx)(t.strong,{children:`Filter input`})}),`
`,(0,r.jsx)(t.li,{children:(0,r.jsx)(t.strong,{children:`Suggestions panel`})}),`
`,(0,r.jsx)(t.li,{children:(0,r.jsx)(t.strong,{children:`Token`})}),`
`,(0,r.jsx)(t.li,{children:(0,r.jsx)(t.strong,{children:`Clear all filters button`})}),`
`]}),`
`,(0,r.jsx)(c,{label:`Placement`,level:2}),`
`,(0,r.jsxs)(t.p,{children:[`The `,(0,r.jsx)(t.strong,{children:`Query Filter`}),` component is typically positioned above the target data container.`]}),`
`,(0,r.jsx)(c,{label:`Behavior`,level:2}),`
`,(0,r.jsx)(c,{label:`Opening & Closing`,level:3}),`
`,(0,r.jsx)(t.p,{children:`Clicking the filter input opens the suggestions panel.`}),`
`,(0,r.jsx)(t.p,{children:`The panel closes when:`}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsx)(t.li,{children:`A value is selected.`}),`
`,(0,r.jsx)(t.li,{children:`Clicking outside the component.`}),`
`,(0,r.jsxs)(t.li,{children:[`The `,(0,r.jsx)(d,{children:`Escape`}),` key is pressed.`]}),`
`]}),`
`,(0,r.jsx)(c,{label:`Adding a Filter`,level:3}),`
`,(0,r.jsx)(t.p,{children:`Suggestions guide the user through:`}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsx)(t.li,{children:`Property selection`}),`
`,(0,r.jsx)(t.li,{children:`Operator selection`}),`
`,(0,r.jsx)(t.li,{children:`Value entry`}),`
`]}),`
`,(0,r.jsx)(t.p,{children:`Free-text is allowed and creates a distinct token.`}),`
`,(0,r.jsx)(c,{label:`Removing a token`,level:3}),`
`,(0,r.jsx)(t.p,{children:`Each token can be removed by click.`}),`
`,(0,r.jsx)(t.p,{children:`Backspace behavior does not remove last token unless specifically focused on it.`}),`
`,(0,r.jsx)(t.p,{children:`Optional "Clear all filters" button removes all tokens in one action.`}),`
`,(0,r.jsx)(c,{label:`Navigation`,level:2}),`
`,(0,r.jsx)(c,{label:`Focus Management`,level:3}),`
`,(0,r.jsx)(t.p,{children:`Focus follows a logical order from left to right.`}),`
`,(0,r.jsx)(t.p,{children:`When the suggestions panel is open, focus moves within the panel without leaving the component.`}),`
`,(0,r.jsx)(c,{label:`General Keyboard Shortcuts`,level:3}),`
`,(0,r.jsxs)(t.p,{children:[`Pressing `,(0,r.jsx)(d,{children:`Tab`}),` moves focus between the input field, and other interactive elements.`]}),`
`,(0,r.jsxs)(t.p,{children:[`Pressing `,(0,r.jsx)(d,{children:`Arrow Down`}),` opens the suggestions panel and moves focus to the first suggestion.`]}),`
`,(0,r.jsxs)(t.p,{children:[`Pressing `,(0,r.jsx)(d,{children:`Escape`}),` closes the suggestions panel.`]}),`
`,(0,r.jsxs)(t.p,{children:[`Pressing `,(0,r.jsx)(d,{children:`Backspace`}),` deletes characters in the input field`]}),`
`,(0,r.jsx)(c,{label:`Accessibility`,level:2}),`
`,(0,r.jsx)(c,{label:`Always provide an explicit label`,level:3}),`
`,(0,r.jsxs)(t.p,{children:[`Every `,(0,r.jsx)(t.strong,{children:`Query Filter`}),` must have a clear and explicit label to ensure that users (especially screen reader users) understand its purpose,
using either `,(0,r.jsx)(t.strong,{children:`FormField`}),` or a native label tag.`]}),`
`,(0,r.jsx)(s,{story:`AccessibilityFormField`}),`
`,(0,r.jsxs)(t.p,{children:[(0,r.jsx)(l,{name:`circle-check`,style:{color:`var(--ods-semantic-color-content-success)`}}),` Screen readers will announce the label, the field and its content.`]}),`
`,(0,r.jsxs)(t.p,{children:[`When the design has no visible label, for example in a toolbar above a table, pass an `,(0,r.jsx)(t.code,{children:`aria-label`}),` to the `,(0,r.jsx)(t.strong,{children:`QueryFilterControl`}),`:
it is applied to the field itself.`]}),`
`,(0,r.jsx)(s,{story:`AccessibilityAriaLabel`}),`
`,(0,r.jsxs)(t.p,{children:[(0,r.jsx)(l,{name:`circle-check`,style:{color:`var(--ods-semantic-color-content-success)`}}),` Screen readers will announce the label, the field and its content.`]}),`
`,(0,r.jsx)(c,{label:`Announce filter changes`,level:3}),`
`,(0,r.jsx)(t.p,{children:`Use ARIA (Accessible Rich Internet Applications) live regions to announce filtering changes. For example:`}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsxs)(t.li,{children:[`When a filter is added: `,(0,r.jsx)(t.code,{children:`aria-live`}),` region could say "Filter 'Status: Active' has been applied.".`]}),`
`,(0,r.jsxs)(t.li,{children:[`When a filter is removed: `,(0,r.jsx)(t.code,{children:`aria-live`}),` region could say "Filter 'Status: Active' has been removed.".`]}),`
`]})]})}function a(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(i,{...e})}):i(e)}function o(e,t){throw Error(`Expected `+(t?`component`:`object`)+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}export{a as default};