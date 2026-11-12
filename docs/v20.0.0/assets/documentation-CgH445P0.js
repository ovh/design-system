import{i as e}from"./rolldown-runtime-Dd_uD5pT.js";import{t}from"./jsx-runtime-DREnUpxT.js";import{T as n}from"./index-CzEwg6AJ.js";var r=e(t());function i(e){let t={li:`li`,ol:`ol`,p:`p`,strong:`strong`,ul:`ul`,...n(),...e.components},{Anatomy:i,BestPractices:a,Canvas:s,DocLink:c,Heading:l,IdentityCard:u,Kbd:d}=t;return i||o(`Anatomy`,!0),a||o(`BestPractices`,!0),s||o(`Canvas`,!0),c||o(`DocLink`,!0),l||o(`Heading`,!0),u||o(`IdentityCard`,!0),d||o(`Kbd`,!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s,{story:`Overview`,source:`none`}),`
`,(0,r.jsx)(l,{label:`Overview`,level:2}),`
`,(0,r.jsx)(u,{aliases:[],figmaLink:`https://www.figma.com/design/9jDDTcR4a9jPRFcdjawAlf/branch/lllHUGUkhU6rZKAracs1Ig/ODS---UI-Kit`,githubUrl:`https://github.com/ovh/design-system/tree/master/packages/ods-react/src/components/button-group`,name:`ButtonGroup`,startingVersion:19,children:(0,r.jsxs)(t.p,{children:[`The `,(0,r.jsx)(t.strong,{children:`Button Group`}),` component arranges multiple related button elements into a single, cohesive container.
It enables users to make selections from a set of related options, either allowing one or multiple active states depending on configuration.`]})}),`
`,(0,r.jsx)(l,{label:`Usage`,level:2}),`
`,(0,r.jsxs)(t.p,{children:[`Use a `,(0,r.jsx)(t.strong,{children:`Button Group`}),` when multiple buttons represent a set of related options or actions.`]}),`
`,(0,r.jsx)(t.p,{children:`It is commonly used for:`}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsx)(t.li,{children:`Toggle sets for text formatting or styling.`}),`
`,(0,r.jsx)(t.li,{children:`Filtering or grouping options within a toolbar.`}),`
`,(0,r.jsx)(t.li,{children:`Segmented controls in compact layouts.`}),`
`]}),`
`,(0,r.jsx)(l,{label:`Dos & Don'ts`,level:3}),`
`,(0,r.jsx)(a,{donts:[`- Group unrelated actions together`,`- Mix icon-only and text-only buttons inconsistently`,`- Overcrowd toolbars with too many grouped options`],dos:[`- Use Button Group for logically related actions`,`- Keep labels short`,`- Use single selection for mutually exclusive choices`,`- Use multiple selection when combined states are allowed`]}),`
`,(0,r.jsx)(l,{label:`Best Practices in Context`,level:3}),`
`,(0,r.jsx)(i,{src:`components/button-group/anatomy.png`}),`
`,(0,r.jsxs)(t.ol,{children:[`
`,(0,r.jsx)(t.li,{children:(0,r.jsx)(t.strong,{children:`ButtonGroup`})}),`
`,(0,r.jsx)(t.li,{children:(0,r.jsx)(t.strong,{children:`Inactive buttons`})}),`
`,(0,r.jsx)(t.li,{children:(0,r.jsx)(t.strong,{children:`Active buttons`})}),`
`]}),`
`,(0,r.jsx)(l,{label:`Behavior`,level:2}),`
`,(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:`Button Group`}),` buttons can be focused and triggered.
`,(0,r.jsx)(t.strong,{children:`Button Group`}),` or its buttons can be disabled.`]}),`
`,(0,r.jsx)(l,{label:`Single Selection`,level:3}),`
`,(0,r.jsx)(t.p,{children:`Only one button in the group can be selected at a time.`}),`
`,(0,r.jsx)(t.p,{children:`Selecting a new button automatically deselects the previously selected one.`}),`
`,(0,r.jsx)(l,{label:`Multiple Selection`,level:3}),`
`,(0,r.jsx)(t.p,{children:`Several buttons can be selected simultaneously.`}),`
`,(0,r.jsx)(t.p,{children:`Each button toggles independently between selected and unselected states.`}),`
`,(0,r.jsx)(l,{label:`Unselected State`,level:3}),`
`,(0,r.jsx)(t.p,{children:`It may be allowed that no button is selected at all, when the user can clear all selections (e.g., "No filter applied").`}),`
`,(0,r.jsx)(l,{label:`Navigation`,level:2}),`
`,(0,r.jsx)(l,{label:`Focus Management`,level:3}),`
`,(0,r.jsxs)(t.p,{children:[`When the `,(0,r.jsx)(t.strong,{children:`Button Group`}),` receives focus, it is set on the first button.`]}),`
`,(0,r.jsx)(t.p,{children:`Disabled buttons are skipped in the focus order and cannot be activated.`}),`
`,(0,r.jsx)(t.p,{children:`Focus remains within the group when navigating between items using arrow keys.`}),`
`,(0,r.jsx)(l,{label:`General Keyboard Shortcuts`,level:3}),`
`,(0,r.jsxs)(t.p,{children:[`Pressing `,(0,r.jsx)(d,{children:`Tab`}),` moves focus to the first button in the group.`]}),`
`,(0,r.jsxs)(t.p,{children:[`Pressing `,(0,r.jsx)(d,{children:`Shift`}),` + `,(0,r.jsx)(d,{children:`Tab`}),` moves focus to the previous focusable element outside the `,(0,r.jsx)(t.strong,{children:`Button Group`}),`.`]}),`
`,(0,r.jsxs)(t.p,{children:[`Pressing `,(0,r.jsx)(d,{children:`Arrow Right`}),` moves focus to the next button in the group.`]}),`
`,(0,r.jsxs)(t.p,{children:[`Pressing `,(0,r.jsx)(d,{children:`Arrow Left`}),` moves focus to the previous item in the group.`]}),`
`,(0,r.jsxs)(t.p,{children:[`Pressing `,(0,r.jsx)(d,{children:`Home`}),` (or `,(0,r.jsx)(d,{children:`fn`}),` + `,(0,r.jsx)(d,{children:`Arrow Left`}),`) moves focus to the first button.`]}),`
`,(0,r.jsxs)(t.p,{children:[`Pressing `,(0,r.jsx)(d,{children:`End`}),` (or `,(0,r.jsx)(d,{children:`fn`}),` + `,(0,r.jsx)(d,{children:`Arrow Right`}),`) moves focus to the last button.`]}),`
`,(0,r.jsxs)(t.p,{children:[`Pressing `,(0,r.jsx)(d,{children:`Space`}),` or `,(0,r.jsx)(d,{children:`Enter`}),` activates or deactivates the focused button, updating the selection immediately.`]}),`
`,(0,r.jsx)(l,{label:`Accessibility`,level:2}),`
`,(0,r.jsxs)(t.p,{children:[`The `,(0,r.jsx)(t.strong,{children:`Button Group`}),` component handles by itself the accessibility requirements regarding the control grouping.`]}),`
`,(0,r.jsxs)(t.p,{children:[`Though you need to ensure that each of your items follows the
`,(0,r.jsx)(c,{to:`/components/button`,children:`Button Accessibility Best Practices`}),`.`]})]})}function a(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(i,{...e})}):i(e)}function o(e,t){throw Error(`Expected `+(t?`component`:`object`)+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}export{a as default};