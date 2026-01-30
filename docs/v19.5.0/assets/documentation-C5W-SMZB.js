import{j as e}from"./jsx-runtime-Cfl8ynUo.js";import{useMDXComponents as o}from"./index-ZwkxtaJJ.js";import{k as s}from"./Kbd-BhRHY5DX-DYqBejDt.js";import{M as c}from"./index-Cw5r0Kn8.js";import{T as t,O as a}from"./tree-view.stories-BKC__JI2.js";import{A as d}from"./Anatomy-DkXJCwiR.js";import{B as h}from"./Banner-X7WOeBPc.js";import{I as x,B as p}from"./IdentityCard-D9LjZbLA.js";import{C as m}from"./Canvas-i2Tfjesg.js";import{E as j}from"./ExternalLink-C5hGBmwh.js";import{H as i}from"./Heading-Dep_rTif.js";import"./StorybookLink-DQwP2BEI.js";import"./index-jIWwRBLr.js";import"./index-CWkFp9WS-BSIT86NH.js";import"./iframe-DCzti3mm.js";import"./index-DWDEzXrj.js";import"./index-N93khynk.js";import"./index-CXQShRbs.js";import"./index-DrFu-skq.js";import"./Button-B-GJ-1TA.js";import"./index-CqY9YpN0.js";import"./Spinner-DJB5ZadI.js";import"./colors-DSObuHxd.js";import"./FormFieldLabelSubLabel-DCAb65DU.js";import"./Text-CW33_IfE.js";import"./icon-name-BpdEc4-2.js";import"./context-C_-r2uoG.js";import"./index-BYzLHZkt.js";import"./use-locale-context-kHyebpMI.js";import"./render-strategy-DRJaCB2u.js";import"./CheckboxLabel-D12B56tG.js";import"./use-field-context-CnH3sryd.js";import"./index-BlUhyWms.js";import"./use-event-c9j7vq_1.js";import"./collapsible-content-fFv9IDDj.js";import"./controls-BtiQQn1l.js";import"./source-CPEZJ6oD.js";import"./Table-D8Me597i-NC3k9YIT.js";import"./Table-5ah53JFf.js";import"./ods-react67-C395g5lW.js";import"./TooltipTrigger-C3aN0eJB-DwV7p8FS.js";import"./ods-react121-5kwUyuQy.js";import"./index-CSeLFT3z.js";import"./lz-string-U2heoObX.js";import"./meta-DcQbZjt_.js";import"./ResetTheme-xqxcB8cs.js";import"./tokens-BtVMeYnn.js";import"./Link-TMoA1i18-BDwROQOD.js";import"./Divider-wQyo85oE-CpSK6tnQ.js";function l(r){const n={code:"code",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...o(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(c,{of:t,name:"Documentation"}),`
`,e.jsx(h,{of:t}),`
`,e.jsx(m,{of:a,sourceState:"none"}),`
`,e.jsx(i,{label:"Overview",level:2}),`
`,e.jsx(x,{aliases:[],figmaLink:"https://www.figma.com/design/9jDDTcR4a9jPRFcdjawAlf/branch/8NZfqeptysMQInF02WaIJR",githubUrl:"https://github.com/ovh/design-system/tree/master/packages/ods-react/src/components/tree-view",name:"Tree View",startingVersion:19,children:e.jsxs(n.p,{children:["The ",e.jsx(n.strong,{children:"Tree View"})," component displays hierarchical data in a parent-child structure. It allows users to expand, collapse, and interact with nested items."]})}),`
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
`,e.jsxs(n.p,{children:["This component complies with the ",e.jsx(j,{href:"https://www.w3.org/WAI/ARIA/apg/patterns/treeview/",children:"Tree View WAI-ARIA design pattern"})]})]})}function he(r={}){const{wrapper:n}={...o(),...r.components};return n?e.jsx(n,{...r,children:e.jsx(l,{...r})}):l(r)}export{he as default};
