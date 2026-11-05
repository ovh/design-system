import{i as e}from"./rolldown-runtime-Dd_uD5pT.js";import{t}from"./jsx-runtime-DREnUpxT.js";import{T as n}from"./index-CdRG7ZE_.js";var r=e(t());function i(e){let t={code:`code`,li:`li`,ol:`ol`,p:`p`,strong:`strong`,ul:`ul`,...n(),...e.components},{Anatomy:i,BestPractices:a,Canvas:s,ExternalLink:c,Heading:l,IdentityCard:u,Kbd:d}=t;return i||o(`Anatomy`,!0),a||o(`BestPractices`,!0),s||o(`Canvas`,!0),c||o(`ExternalLink`,!0),l||o(`Heading`,!0),u||o(`IdentityCard`,!0),d||o(`Kbd`,!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s,{story:`Overview`,source:`none`}),`
`,(0,r.jsx)(l,{label:`Overview`,level:2}),`
`,(0,r.jsx)(u,{aliases:[],figmaLink:`https://www.figma.com/design/9jDDTcR4a9jPRFcdjawAlf/branch/8NZfqeptysMQInF02WaIJR`,githubUrl:`https://github.com/ovh/design-system/tree/master/packages/ods-react/src/components/tree-view`,name:`Tree View`,startingVersion:19,children:(0,r.jsxs)(t.p,{children:[`The `,(0,r.jsx)(t.strong,{children:`Tree View`}),` component displays hierarchical data in a parent-child structure. It allows users to expand, collapse, and interact with nested items.`]})}),`
`,(0,r.jsx)(l,{label:`Usage`,level:2}),`
`,(0,r.jsxs)(t.p,{children:[`The `,(0,r.jsx)(t.strong,{children:`Tree View`}),` component is used to navigate or manage hierarchical datasets,
for representing file systems, nested categories, any structured dataset that benefits from a collapsible interface.`]}),`
`,(0,r.jsx)(t.p,{children:`Common use cases include:`}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsx)(t.li,{children:`Directory structures`}),`
`,(0,r.jsx)(t.li,{children:`Nested navigation menus`}),`
`,(0,r.jsx)(t.li,{children:`Category selectors`}),`
`,(0,r.jsx)(t.li,{children:`Configurations and settings with nested options?`}),`
`]}),`
`,(0,r.jsx)(l,{label:`Dos & Don'ts`,level:3}),`
`,(0,r.jsx)(a,{donts:[`- Don’t use a Tree View if there are no nodes or if the content is too minimal to justify a hierarchical structure`],dos:[`- Use a Tree View for hierarchical data where relationships between items are important`]}),`
`,(0,r.jsx)(l,{label:`Best Practices in Context`,level:3}),`
`,(0,r.jsx)(i,{src:`components/tree-view/anatomy.png`}),`
`,(0,r.jsxs)(t.ol,{children:[`
`,(0,r.jsx)(t.li,{children:(0,r.jsx)(t.strong,{children:`Tree View`})}),`
`,(0,r.jsx)(t.li,{children:(0,r.jsx)(t.strong,{children:`Node/item`})}),`
`,(0,r.jsx)(t.li,{children:(0,r.jsx)(t.strong,{children:`Checkbox (multi-selection)`})}),`
`,(0,r.jsx)(t.li,{children:(0,r.jsx)(t.strong,{children:`Node/item name`})}),`
`]}),`
`,(0,r.jsx)(l,{label:`Behavior`,level:2}),`
`,(0,r.jsx)(l,{label:`Expand / Collapse`,level:3}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsx)(t.li,{children:`Items/Nodes can be expanded or collapsed to show or hide their children`}),`
`,(0,r.jsx)(t.li,{children:`The Tree View can be rendered with all nodes expanded by default`}),`
`,(0,r.jsx)(t.li,{children:`Individual nodes can be configured to start in an expanded state when the Tree View is rendered`}),`
`]}),`
`,(0,r.jsx)(l,{label:`Selection`,level:3}),`
`,(0,r.jsx)(l,{label:`Single Selection`,level:4}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsx)(t.li,{children:`Clicking a node selects it and deselects any previously selected node`}),`
`]}),`
`,(0,r.jsx)(l,{label:`Checkbox tree/multi-selection`,level:4}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsx)(t.li,{children:`Each node/item has a checkbox for selection`}),`
`,(0,r.jsxs)(t.li,{children:[`Parent checkbox can represent:`,`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsx)(t.li,{children:`Checked: all children are selected`}),`
`,(0,r.jsx)(t.li,{children:`Unchecked: no children are selected`}),`
`,(0,r.jsx)(t.li,{children:`Indeterminate: partial selection of children`}),`
`]}),`
`]}),`
`,(0,r.jsx)(t.li,{children:`Selecting a parent node/item selects or deselects all children recursively`}),`
`]}),`
`,(0,r.jsx)(l,{label:`Disabling`,level:3}),`
`,(0,r.jsx)(t.p,{children:`Disabled nodes cannot be selected, expanded, collapsed, or interact with. They are still display in the hierarchy for context.`}),`
`,(0,r.jsx)(l,{label:`Navigation`,level:2}),`
`,(0,r.jsx)(l,{label:`Focus Management`,level:3}),`
`,(0,r.jsx)(t.p,{children:`Only one node in the Tree View is focusable at a time.`}),`
`,(0,r.jsx)(t.p,{children:`Focus remains on a single visible node and moves predictably with keyboard navigation.`}),`
`,(0,r.jsx)(t.p,{children:`If a node renders interactive content of its own (e.g., a link), that element can receive focus.`}),`
`,(0,r.jsx)(t.p,{children:`In multiple selection mode, the node itself carries the checked state: its checkbox is only a visual cue and never receives focus.`}),`
`,(0,r.jsx)(l,{label:`General Keyboard Shortcuts`,level:3}),`
`,(0,r.jsxs)(t.p,{children:[`Pressing `,(0,r.jsx)(d,{children:`Arrow Up`}),` / `,(0,r.jsx)(d,{children:`Arrow Down`}),` moves focus to the previous or next visible node.`]}),`
`,(0,r.jsxs)(t.p,{children:[`Pressing `,(0,r.jsx)(d,{children:`Arrow Right`}),`:`]}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsx)(t.li,{children:`If the focused node is collapsed, expands it`}),`
`,(0,r.jsx)(t.li,{children:`If the focused node is expanded, moves focus to its first child`}),`
`]}),`
`,(0,r.jsxs)(t.p,{children:[`Pressing `,(0,r.jsx)(d,{children:`Arrow Left`}),`:`]}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsx)(t.li,{children:`If the focused node is expanded, collapses it`}),`
`,(0,r.jsx)(t.li,{children:`If the focused node is collapsed, moves focus to its parent`}),`
`]}),`
`,(0,r.jsxs)(t.p,{children:[`Pressing `,(0,r.jsx)(d,{children:`Home`}),`, or `,(0,r.jsx)(d,{children:`fn`}),` + `,(0,r.jsx)(d,{children:`Arrow Left`}),`, moves focus to the first visible node.`]}),`
`,(0,r.jsxs)(t.p,{children:[`Pressing `,(0,r.jsx)(d,{children:`End`}),`, or `,(0,r.jsx)(d,{children:`fn`}),` + `,(0,r.jsx)(d,{children:`Arrow Right`}),` moves focus to the last visible node.`]}),`
`,(0,r.jsxs)(t.p,{children:[`Pressing `,(0,r.jsx)(d,{children:`Enter`}),` or `,(0,r.jsx)(d,{children:`Space`}),` activates, expands, or collapses the focused node. If the node has a checkbox, it toggles its state.`]}),`
`,(0,r.jsxs)(t.p,{children:[`Pressing `,(0,r.jsx)(d,{children:`Enter`}),` or `,(0,r.jsx)(d,{children:`Space`}),` + `,(0,r.jsx)(d,{children:`Shift`}),` + `,(0,r.jsx)(d,{children:`Arrow Up`}),` / `,(0,r.jsx)(d,{children:`Arrow Down`}),` selects a continuous range of nodes (multi-selection mode).`]}),`
`,(0,r.jsxs)(t.p,{children:[`Pressing `,(0,r.jsx)(d,{children:`Enter`}),` or `,(0,r.jsx)(d,{children:`Space`}),` + `,(0,r.jsx)(d,{children:`Ctrl`}),` or `,(0,r.jsx)(d,{children:`Cmd`}),` toggles selection of individual node.`]}),`
`,(0,r.jsxs)(t.p,{children:[`Pressing `,(0,r.jsx)(d,{children:`Ctrl`}),` or `,(0,r.jsx)(d,{children:`Cmd`}),` + `,(0,r.jsx)(d,{children:`A`}),` selects all nodes in the tree. When all nodes are already selected, it unselects all nodes.`]}),`
`,(0,r.jsxs)(t.p,{children:[`Typing an alphanumeric character (`,(0,r.jsx)(t.code,{children:`A-Z`}),`, `,(0,r.jsx)(t.code,{children:`a-z`}),`) changes focus to the next node starting with that character.`]}),`
`,(0,r.jsx)(l,{label:`Accessibility`,level:2}),`
`,(0,r.jsxs)(t.p,{children:[`This component complies with the `,(0,r.jsx)(c,{href:`https://www.w3.org/WAI/ARIA/apg/patterns/treeview/`,children:`Tree View WAI-ARIA design pattern`})]})]})}function a(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(i,{...e})}):i(e)}function o(e,t){throw Error(`Expected `+(t?`component`:`object`)+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}export{a as default};