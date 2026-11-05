import{i as e}from"./rolldown-runtime-Dd_uD5pT.js";import{t}from"./jsx-runtime-DREnUpxT.js";import{T as n}from"./index-CdRG7ZE_.js";var r=e(t());function i(e){let t={code:`code`,em:`em`,li:`li`,ol:`ol`,p:`p`,strong:`strong`,ul:`ul`,...n(),...e.components},{Anatomy:i,BestPractices:a,Canvas:s,ExternalLink:c,Heading:l,IdentityCard:u}=t;return i||o(`Anatomy`,!0),a||o(`BestPractices`,!0),s||o(`Canvas`,!0),c||o(`ExternalLink`,!0),l||o(`Heading`,!0),u||o(`IdentityCard`,!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.p,{children:(0,r.jsx)(t.em,{children:`A Menu component provides a list of options or actions that appear when a user interacts with its trigger element.`})}),`
`,(0,r.jsx)(s,{story:`Overview`,source:`none`}),`
`,(0,r.jsx)(l,{label:`Overview`,level:2}),`
`,(0,r.jsx)(u,{aliases:[`Dropdown Menu`,`Context Menu`,`Options/Actions Menu`],figmaLink:`https://www.figma.com/design/9jDDTcR4a9jPRFcdjawAlf/branch/ViIEmUvAGU3kR346yKSDXv/ODS---UI-Kit?m=auto&node-id=14267-46263&t=9NEhUC6EmfGbc7Fc-1`,githubUrl:`https://github.com/ovh/design-system/tree/master/packages/ods-react/src/components/menu`,name:`Menu`,startingVersion:19,children:(0,r.jsx)(t.p,{children:`The Menu component allows users to access related actions through a compact, organized list. It may inclue simple or grouped actions.`})}),`
`,(0,r.jsx)(l,{label:`Usage`,level:2}),`
`,(0,r.jsx)(t.p,{children:`The Menu component is commonly used for:`}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsx)(t.li,{children:`User account options (profile, settings, logout)`}),`
`,(0,r.jsx)(t.li,{children:`Contextual actions in tables or list (edit, duplicate, delete)`}),`
`,(0,r.jsx)(t.li,{children:`Organizing multiple secondary actions under one trigger (e.g., "More options")`}),`
`]}),`
`,(0,r.jsx)(l,{label:`Dos & Don'ts`,level:3}),`
`,(0,r.jsx)(a,{donts:[`- Don’t use a Menu as primary navigation structure`,`- Don't overload a Menu with too many unrelated actions`,`- Don't place destructive actions (e.g., "Delete") without clear distinction or confirmation`],dos:[`- Group related actions under headings when the list is long`,`- Use separators when needed to clarify structure between distinct actions`,`- Ensure the most frequently used actions are near the top`]}),`
`,(0,r.jsx)(l,{label:`Best Practices in Context`,level:3}),`
`,(0,r.jsx)(i,{src:`components/menu/anatomy.png`}),`
`,(0,r.jsx)(t.p,{children:`Menu
Trigger
Menu content
Group - optional
Group title - optional
Item`}),`
`,(0,r.jsxs)(t.ol,{children:[`
`,(0,r.jsx)(t.li,{children:(0,r.jsx)(t.strong,{children:`Menu`})}),`
`,(0,r.jsx)(t.li,{children:(0,r.jsx)(t.strong,{children:`Trigger`})}),`
`,(0,r.jsx)(t.li,{children:(0,r.jsx)(t.strong,{children:`Menu content`})}),`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:`Group`}),` - optional`]}),`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:`Group title`}),` - optional`]}),`
`,(0,r.jsx)(t.li,{children:(0,r.jsx)(t.strong,{children:`Item`})}),`
`]}),`
`,(0,r.jsx)(l,{label:`Behavior`,level:2}),`
`,(0,r.jsx)(t.p,{children:`The Menu opens when the trigger element is clicked. The list of items will be displayed.`}),`
`,(0,r.jsx)(t.p,{children:`Selecting an item triggers its associated action and closes the Menu.`}),`
`,(0,r.jsx)(t.p,{children:`Clicking outside closes the Menu.`}),`
`,(0,r.jsx)(l,{label:`Disabling`,level:3}),`
`,(0,r.jsx)(t.p,{children:`Disabled items cannot be selected, or interact with.`}),`
`,(0,r.jsx)(l,{label:`Grouping`,level:3}),`
`,(0,r.jsx)(t.p,{children:`Heading`}),`
`,(0,r.jsx)(t.p,{children:`An optional label above a group of related items is displayed.`}),`
`,(0,r.jsx)(t.p,{children:`Separator / Divider`}),`
`,(0,r.jsx)(t.p,{children:`A separator is displayed between the groups or between items.`}),`
`,(0,r.jsx)(l,{label:`Nested Menus`,level:3}),`
`,(0,r.jsx)(t.p,{children:`The Menu supports nested sub-menus with a maximum depth of one level.
A menu item may expose a sub-menu, indicated visually with a right-facing arrow.
Sub-menu opens when the user hovers over the parent menu item.
Closing the Menu also closes any open sub-menu.`}),`
`,(0,r.jsx)(l,{label:`Navigation`,level:2}),`
`,(0,r.jsx)(l,{label:`Focus Management`,level:3}),`
`,(0,r.jsx)(t.p,{children:`The Menu trigger can receive keyboard focus and is part of the standard tab order.`}),`
`,(0,r.jsx)(t.p,{children:`When the Menu opens, the first enabled item is focused.`}),`
`,(0,r.jsx)(t.p,{children:`Focus is trapped within the Menu until it is closed.`}),`
`,(0,r.jsx)(t.p,{children:`If the Menu closes, focus returns to the trigger element.`}),`
`,(0,r.jsx)(l,{label:`General Keyboard Shortcuts`,level:3}),`
`,(0,r.jsxs)(t.p,{children:[`Pressing `,(0,r.jsx)(t.code,{children:`Arrow Up / Down`}),` navigates through items.`]}),`
`,(0,r.jsxs)(t.p,{children:[`Pressing `,(0,r.jsx)(t.code,{children:`Enter`}),` or `,(0,r.jsx)(t.code,{children:`Space`}),` activates the focused item.`]}),`
`,(0,r.jsxs)(t.p,{children:[`Pressing `,(0,r.jsx)(t.code,{children:`Arrow Left`}),` or `,(0,r.jsx)(t.code,{children:`Escape`}),` closes a sub-menu or the Menu.`]}),`
`,(0,r.jsxs)(t.p,{children:[`Pressing `,(0,r.jsx)(t.code,{children:`Arrow Right`}),` opens a sub-menu (when relevant)`]}),`
`,(0,r.jsxs)(t.p,{children:[`Pressing `,(0,r.jsx)(t.code,{children:`Tab`}),`, or `,(0,r.jsx)(t.code,{children:`Shift`}),` + `,(0,r.jsx)(t.code,{children:`Tab`}),`, exits the Menu and moves to the next/previous focusable element`]}),`
`,(0,r.jsx)(l,{label:`Accessibility`,level:2}),`
`,(0,r.jsxs)(t.p,{children:[`This component complies with the `,(0,r.jsx)(c,{href:`https://www.w3.org/WAI/ARIA/apg/patterns/menubar/`,children:`Menu WAI-ARIA design pattern`}),`.`]})]})}function a(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(i,{...e})}):i(e)}function o(e,t){throw Error(`Expected `+(t?`component`:`object`)+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}export{a as default};