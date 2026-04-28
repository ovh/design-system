import{j as e}from"./jsx-runtime-Cfl8ynUo.js";import{useMDXComponents as r}from"./index-ZwkxtaJJ.js";import{M as l}from"./index-CorwBrna.js";import{M as i,O as a}from"./menu.stories-BP9fibDP.js";import{A as c}from"./Anatomy-DkXJCwiR.js";import{B as p}from"./Banner-BzsM7Ov4.js";import{B as d}from"./BestPractices-DmW3jiI3.js";import{C as m}from"./Canvas-DmU-XW-X.js";import{E as h}from"./ExternalLink-B7meJZZV.js";import{H as t}from"./Heading-CqLsFmC8.js";import{I as u}from"./IdentityCard-Dz2mtlUf.js";import"./index-jIWwRBLr.js";import"./iframe-CTupHpWb.js";import"./index-DWDEzXrj.js";import"./index-N93khynk.js";import"./index-CXQShRbs.js";import"./index-DrFu-skq.js";import"./Button-B-GJ-1TA.js";import"./index-CqY9YpN0.js";import"./Spinner-DJB5ZadI.js";import"./colors-DSObuHxd.js";import"./icon-name-RfJfucZu.js";import"./context-C_-r2uoG.js";import"./use-locale-context-CCZDATm7.js";import"./portal-DlVZGAaE.js";import"./use-presence-BEoh9Cc1.js";import"./use-event-c9j7vq_1.js";import"./index-Ceu3MGV2.js";import"./overlay-CZHjGBMC.js";import"./controls-BtiQQn1l.js";import"./source-CPEZJ6oD.js";import"./icon-name-BOjNLCTH-CoYid0iC.js";import"./index-CWkFp9WS-BSIT86NH.js";import"./index-CvuQtheM.js";import"./context-Z_Xa7sWf-5kwUyuQy.js";import"./index-D-PjbIVM.js";import"./lz-string-U2heoObX.js";import"./meta-vhIdvDvL.js";import"./ResetTheme-DQ5v3p_P.js";import"./tokens-BrWUS-3i.js";import"./Link-JvSirtKN-DiqnrgRb.js";import"./divider-color-DMMH0ySn-B7JauIP0.js";import"./colors-C1Wmnk_L-aAAP9SXj.js";import"./Table-Bof_Nsov-CS9ZUwCH.js";import"./Table-BXVk_N0H.js";function o(s){const n={code:"code",em:"em",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...r(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{of:i,name:"Documentation",tags:["new"]}),`
`,e.jsx(p,{of:i}),`
`,e.jsx(n.p,{children:e.jsx(n.em,{children:"A Menu component provides a list of options or actions that appear when a user interacts with its trigger element."})}),`
`,e.jsx(m,{of:a,sourceState:"none"}),`
`,e.jsx(t,{label:"Overview",level:2}),`
`,e.jsx(u,{aliases:["Dropdown Menu","Context Menu","Options/Actions Menu"],figmaLink:"https://www.figma.com/design/9jDDTcR4a9jPRFcdjawAlf/branch/ViIEmUvAGU3kR346yKSDXv/ODS---UI-Kit?m=auto&node-id=14267-46263&t=9NEhUC6EmfGbc7Fc-1",githubUrl:"https://github.com/ovh/design-system/tree/master/packages/ods-react/src/components/menu",name:"Menu",startingVersion:19,children:e.jsx(n.p,{children:"The Menu component allows users to access related actions through a compact, organized list. It may inclue simple or grouped actions."})}),`
`,e.jsx(t,{label:"Usage",level:2}),`
`,e.jsx(n.p,{children:"The Menu component is commonly used for:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"User account options (profile, settings, logout)"}),`
`,e.jsx(n.li,{children:"Contextual actions in tables or list (edit, duplicate, delete)"}),`
`,e.jsx(n.li,{children:'Organizing multiple secondary actions under one trigger (e.g., "More options")'}),`
`]}),`
`,e.jsx(t,{label:"Dos & Don'ts",level:3}),`
`,e.jsx(d,{donts:["- Don’t use a Menu as primary navigation structure","- Don't overload a Menu with too many unrelated actions",`- Don't place destructive actions (e.g., "Delete") without clear distinction or confirmation`],dos:["- Group related actions under headings when the list is long","- Use separators when needed to clarify structure between distinct actions","- Ensure the most frequently used actions are near the top"]}),`
`,e.jsx(t,{label:"Best Practices in Context",level:3}),`
`,e.jsx(c,{src:"components/menu/anatomy.png"}),`
`,e.jsx(n.p,{children:`Menu
Trigger
Menu content
Group - optional
Group title - optional
Item`}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.strong,{children:"Menu"})}),`
`,e.jsx(n.li,{children:e.jsx(n.strong,{children:"Trigger"})}),`
`,e.jsx(n.li,{children:e.jsx(n.strong,{children:"Menu content"})}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Group"})," - optional"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Group title"})," - optional"]}),`
`,e.jsx(n.li,{children:e.jsx(n.strong,{children:"Item"})}),`
`]}),`
`,e.jsx(t,{label:"Behavior",level:2}),`
`,e.jsx(n.p,{children:"The Menu opens when the trigger element is clicked. The list of items will be displayed."}),`
`,e.jsx(n.p,{children:"Selecting an item triggers its associated action and closes the Menu."}),`
`,e.jsx(n.p,{children:"Clicking outside closes the Menu."}),`
`,e.jsx(t,{label:"Disabling",level:3}),`
`,e.jsx(n.p,{children:"Disabled items cannot be selected, or interact with."}),`
`,e.jsx(t,{label:"Grouping",level:3}),`
`,e.jsx(n.p,{children:"Heading"}),`
`,e.jsx(n.p,{children:"An optional label above a group of related items is displayed."}),`
`,e.jsx(n.p,{children:"Separator / Divider"}),`
`,e.jsx(n.p,{children:"A separator is displayed between the groups or between items."}),`
`,e.jsx(t,{label:"Nested Menus",level:3}),`
`,e.jsx(n.p,{children:`The Menu supports nested sub-menus with a maximum depth of one level.
A menu item may expose a sub-menu, indicated visually with a right-facing arrow.
Sub-menu opens when the user hovers over the parent menu item.
Closing the Menu also closes any open sub-menu.`}),`
`,e.jsx(t,{label:"Navigation",level:2}),`
`,e.jsx(t,{label:"Focus Management",level:3}),`
`,e.jsx(n.p,{children:"The Menu trigger can receive keyboard focus and is part of the standard tab order."}),`
`,e.jsx(n.p,{children:"When the Menu opens, the first enabled item is focused."}),`
`,e.jsx(n.p,{children:"Focus is trapped within the Menu until it is closed."}),`
`,e.jsx(n.p,{children:"If the Menu closes, focus returns to the trigger element."}),`
`,e.jsx(t,{label:"General Keyboard Shortcuts",level:3}),`
`,e.jsxs(n.p,{children:["Pressing ",e.jsx(n.code,{children:"Arrow Up / Down"})," navigates through items."]}),`
`,e.jsxs(n.p,{children:["Pressing ",e.jsx(n.code,{children:"Enter"})," or ",e.jsx(n.code,{children:"Space"})," activates the focused item."]}),`
`,e.jsxs(n.p,{children:["Pressing ",e.jsx(n.code,{children:"Arrow Left"})," or ",e.jsx(n.code,{children:"Escape"})," closes a sub-menu or the Menu."]}),`
`,e.jsxs(n.p,{children:["Pressing ",e.jsx(n.code,{children:"Arrow Right"})," opens a sub-menu (when relevant)"]}),`
`,e.jsxs(n.p,{children:["Pressing ",e.jsx(n.code,{children:"Tab"}),", or ",e.jsx(n.code,{children:"Shift"})," + ",e.jsx(n.code,{children:"Tab"}),", exits the Menu and moves to the next/previous focusable element"]}),`
`,e.jsx(t,{label:"Accessibility",level:2}),`
`,e.jsxs(n.p,{children:["This component complies with the ",e.jsx(h,{href:"https://www.w3.org/WAI/ARIA/apg/patterns/menubar/",children:"Menu WAI-ARIA design pattern"}),"."]})]})}function re(s={}){const{wrapper:n}={...r(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(o,{...s})}):o(s)}export{re as default};
