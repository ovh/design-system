import{j as e}from"./jsx-runtime-Cfl8ynUo.js";import{useMDXComponents as o}from"./index-ZwkxtaJJ.js";import{k as s}from"./Kbd-CQAfxA-4-mq9ej7QP.js";import{M as c}from"./index-DBhu1Uji.js";import{T as t,O as a}from"./tree-view.stories-ccrVbzXb.js";import{A as d}from"./Anatomy-CqwcYEDe.js";import{B as h}from"./Banner-CTn57inQ.js";import{B as p}from"./BestPractices-DyDReNjg.js";import{C as x}from"./Canvas-8Qs4JaTy.js";import{E as m}from"./ExternalLink-CLruuYCX.js";import{H as i}from"./Heading-BYU90ura.js";import{I as j}from"./IdentityCard-BK7dxrtI.js";import"./StorybookLink-CG3tbsP0.js";import"./index-jIWwRBLr.js";import"./index-B2JRaoNz-yqrnVa7N.js";import"./iframe-B0u0SFI5.js";import"./index-CBDu-Hu-.js";import"./index-BU5bNkZt.js";import"./index-DgH-xKnr.js";import"./index-DrFu-skq.js";import"./Button-FbO6Dzi8.js";import"./index-C322fmIg.js";import"./Spinner-MPv5lneh.js";import"./colors-B-ZpHcIp.js";import"./index-DH_BFchB.js";import"./Text-CzHK83-l.js";import"./icon-name-Dvh-h22i.js";import"./context-C_-r2uoG.js";import"./index-BY80_Tj9.js";import"./index-DsEC0KyJ.js";import"./use-locale-context-DGdTKe6e.js";import"./render-strategy-BOJAJMdw.js";import"./index-D0iMhJdb.js";import"./index-fARmZEET.js";import"./use-field-context-CkVznB2N.js";import"./use-event-c9j7vq_1.js";import"./collapsible-content-Aq87bi-f.js";import"./controls-BtiQQn1l.js";import"./source-CPEZJ6oD.js";import"./icon-name-Dw8X1wVO-CGXOlIt0.js";import"./index-BUs_y8So.js";import"./context-Z_Xa7sWf-5kwUyuQy.js";import"./index-FEhFxDPX.js";import"./lz-string-DchBFh8t.js";import"./meta-twt-Yy4M.js";import"./ResetTheme-CLF5P7Bf.js";import"./tokens-BrWUS-3i.js";import"./Link-nyzSghSi-C9HsY39r.js";import"./divider-color-Db-mIl6C-CkLYwequ.js";import"./colors-C1Wmnk_L-aAAP9SXj.js";import"./Table-CVRGubjq-DRuAT4A2.js";import"./Table-CddzZ923.js";function l(r){const n={code:"code",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...o(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(c,{of:t,name:"Documentation"}),`
`,e.jsx(h,{of:t}),`
`,e.jsx(x,{of:a,sourceState:"none"}),`
`,e.jsx(i,{label:"Overview",level:2}),`
`,e.jsx(j,{aliases:[],figmaLink:"https://www.figma.com/design/9jDDTcR4a9jPRFcdjawAlf/branch/8NZfqeptysMQInF02WaIJR",githubUrl:"https://github.com/ovh/design-system/tree/master/packages/ods-react/src/components/tree-view",name:"Tree View",startingVersion:19,children:e.jsxs(n.p,{children:["The ",e.jsx(n.strong,{children:"Tree View"})," component displays hierarchical data in a parent-child structure. It allows users to expand, collapse, and interact with nested items."]})}),`
`,e.jsx(i,{label:"Usage",level:2}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.strong,{children:"Tree View"}),` component is used to navigate or manage hierarchical datasets,
for representing file systems, nested categories, any structured dataset that benefits from a collapsible interface.`]}),`
`,e.jsx(n.p,{children:"Common use cases include:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Directory structures"}),`
`,e.jsx(n.li,{children:"Nested navigation menus"}),`
`,e.jsx(n.li,{children:"Category selectors"}),`
`,e.jsx(n.li,{children:"Configurations and settings with nested options?"}),`
`]}),`
`,e.jsx(i,{label:"Dos & Don'ts",level:3}),`
`,e.jsx(p,{donts:["- Don’t use a Tree View if there are no nodes or if the content is too minimal to justify a hierarchical structure"],dos:["- Use a Tree View for hierarchical data where relationships between items are important"]}),`
`,e.jsx(i,{label:"Best Practices in Context",level:3}),`
`,e.jsx(d,{src:"components/tree-view/anatomy.png"}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.strong,{children:"Tree View"})}),`
`,e.jsx(n.li,{children:e.jsx(n.strong,{children:"Node/item"})}),`
`,e.jsx(n.li,{children:e.jsx(n.strong,{children:"Checkbox (multi-selection)"})}),`
`,e.jsx(n.li,{children:e.jsx(n.strong,{children:"Node/item name"})}),`
`]}),`
`,e.jsx(i,{label:"Behavior",level:2}),`
`,e.jsx(i,{label:"Expand / Collapse",level:3}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Items/Nodes can be expanded or collapsed to show or hide their children"}),`
`,e.jsx(n.li,{children:"The Tree View can be rendered with all nodes expanded by default"}),`
`,e.jsx(n.li,{children:"Individual nodes can be configured to start in an expanded state when the Tree View is rendered"}),`
`]}),`
`,e.jsx(i,{label:"Selection",level:3}),`
`,e.jsx(i,{label:"Single Selection",level:4}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Clicking a node selects it and deselects any previously selected node"}),`
`]}),`
`,e.jsx(i,{label:"Checkbox tree/multi-selection",level:4}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Each node/item has a checkbox for selection"}),`
`,e.jsxs(n.li,{children:["Parent checkbox can represent:",`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Checked: all children are selected"}),`
`,e.jsx(n.li,{children:"Unchecked: no children are selected"}),`
`,e.jsx(n.li,{children:"Indeterminate: partial selection of children"}),`
`]}),`
`]}),`
`,e.jsx(n.li,{children:"Selecting a parent node/item selects or deselects all children recursively"}),`
`]}),`
`,e.jsx(i,{label:"Disabling",level:3}),`
`,e.jsx(n.p,{children:"Disabled nodes cannot be selected, expanded, collapsed, or interact with. They are still display in the hierarchy for context."}),`
`,e.jsx(i,{label:"Navigation",level:2}),`
`,e.jsx(i,{label:"Focus Management",level:3}),`
`,e.jsx(n.p,{children:"Only one node in the Tree View is focusable at a time."}),`
`,e.jsx(n.p,{children:"Focus remains on a single visible node and moves predictably with keyboard navigation."}),`
`,e.jsx(n.p,{children:"If a node contains interactive elements (e.g., a checkbox or link), those elements can receive focus."}),`
`,e.jsx(i,{label:"General Keyboard Shortcuts",level:3}),`
`,e.jsxs(n.p,{children:["Pressing ",e.jsx(s,{children:"Arrow Up"})," / ",e.jsx(s,{children:"Arrow Down"})," moves focus to the previous or next visible node."]}),`
`,e.jsxs(n.p,{children:["Pressing ",e.jsx(s,{children:"Arrow Right"}),":"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"If the focused node is collapsed, expands it"}),`
`,e.jsx(n.li,{children:"If the focused node is expanded, moves focus to its first child"}),`
`]}),`
`,e.jsxs(n.p,{children:["Pressing ",e.jsx(s,{children:"Arrow Left"}),":"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"If the focused node is expanded, collapses it"}),`
`,e.jsx(n.li,{children:"If the focused node is collapsed, moves focus to its parent"}),`
`]}),`
`,e.jsxs(n.p,{children:["Pressing ",e.jsx(s,{children:"Home"}),", or ",e.jsx(s,{children:"fn"})," + ",e.jsx(s,{children:"Arrow Left"}),", moves focus to the first visible node."]}),`
`,e.jsxs(n.p,{children:["Pressing ",e.jsx(s,{children:"End"}),", or ",e.jsx(s,{children:"fn"})," + ",e.jsx(s,{children:"Arrow Right"})," moves focus to the last visible node."]}),`
`,e.jsxs(n.p,{children:["Pressing ",e.jsx(s,{children:"Enter"})," or ",e.jsx(s,{children:"Space"})," activates, expands, or collapses the focused node. If the node has a checkbox, it toggles its state."]}),`
`,e.jsxs(n.p,{children:["Pressing ",e.jsx(s,{children:"Enter"})," or ",e.jsx(s,{children:"Space"})," + ",e.jsx(s,{children:"Shift"})," + ",e.jsx(s,{children:"Arrow Up"})," / ",e.jsx(s,{children:"Arrow Down"})," selects a continuous range of nodes (multi-selection mode)."]}),`
`,e.jsxs(n.p,{children:["Pressing ",e.jsx(s,{children:"Enter"})," or ",e.jsx(s,{children:"Space"})," + ",e.jsx(s,{children:"Ctrl"})," or ",e.jsx(s,{children:"Cmd"})," toggles selection of individual node."]}),`
`,e.jsxs(n.p,{children:["Pressing ",e.jsx(s,{children:"Ctrl"})," or ",e.jsx(s,{children:"Cmd"})," + ",e.jsx(s,{children:"A"})," selects all nodes in the tree. When all nodes are already selected, it unselects all nodes."]}),`
`,e.jsxs(n.p,{children:["Typing an alphanumeric character (",e.jsx(n.code,{children:"A-Z"}),", ",e.jsx(n.code,{children:"a-z"}),") changes focus to the next node starting with that character."]}),`
`,e.jsx(i,{label:"Accessibility",level:2}),`
`,e.jsxs(n.p,{children:["This component complies with the ",e.jsx(m,{href:"https://www.w3.org/WAI/ARIA/apg/patterns/treeview/",children:"Tree View WAI-ARIA design pattern"})]})]})}function me(r={}){const{wrapper:n}={...o(),...r.components};return n?e.jsx(n,{...r,children:e.jsx(l,{...r})}):l(r)}export{me as default};
