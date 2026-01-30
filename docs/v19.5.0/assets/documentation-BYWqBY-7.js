import{j as e}from"./jsx-runtime-Cfl8ynUo.js";import{useMDXComponents as d}from"./index-ZwkxtaJJ.js";import{a as r,l}from"./ods-react67-C395g5lW.js";import{k as s}from"./Kbd-BhRHY5DX-DYqBejDt.js";import{M as m}from"./index-Cw5r0Kn8.js";import{S as c,O as p,A as x,a as u}from"./switch.stories-B_W8MeG-.js";import{A as j}from"./Anatomy-DkXJCwiR.js";import{B as g}from"./Banner-X7WOeBPc.js";import{I as f,B as b}from"./IdentityCard-D9LjZbLA.js";import{C as o}from"./Canvas-i2Tfjesg.js";import{E as a}from"./ExternalLink-C5hGBmwh.js";import{H as i}from"./Heading-Dep_rTif.js";import{D as w}from"./Deprecated-BsrfjpUo.js";import"./index-jIWwRBLr.js";import"./index-CWkFp9WS-BSIT86NH.js";import"./iframe-DCzti3mm.js";import"./index-DWDEzXrj.js";import"./index-N93khynk.js";import"./index-CXQShRbs.js";import"./index-DrFu-skq.js";import"./index-CqY9YpN0.js";import"./toggle-group-root-rlqyi9ju.js";import"./use-locale-context-kHyebpMI.js";import"./Text-CW33_IfE.js";import"./controls-BtiQQn1l.js";import"./Table-D8Me597i-NC3k9YIT.js";import"./Table-5ah53JFf.js";import"./TooltipTrigger-C3aN0eJB-DwV7p8FS.js";import"./ods-react121-5kwUyuQy.js";import"./index-CSeLFT3z.js";import"./lz-string-U2heoObX.js";import"./meta-DcQbZjt_.js";import"./source-CPEZJ6oD.js";import"./ResetTheme-xqxcB8cs.js";import"./tokens-BtVMeYnn.js";import"./Link-TMoA1i18-BDwROQOD.js";import"./Divider-wQyo85oE-CpSK6tnQ.js";import"./ods-react273-aAAP9SXj.js";import"./MessageIcon-lA6WWfUc-CQTnIIok.js";import"./useI18n-DC7LnvI--D3eFcqGA.js";import"./ods-react108-l5fgq-IX.js";import"./StorybookLink-DQwP2BEI.js";function h(n){const t={em:"em",li:"li",ol:"ol",p:"p",strong:"strong",...d(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(m,{of:c,name:"Documentation"}),`
`,e.jsx(g,{of:c}),`
`,e.jsx(t.p,{children:e.jsxs(t.em,{children:["A ",e.jsx(t.strong,{children:"Switch"})," allows users to quickly and easily switch between several states, actions or options in a row."]})}),`
`,e.jsx(o,{of:p,sourceState:"none"}),`
`,e.jsx(w,{}),`
`,e.jsx(i,{label:"Overview",level:2}),`
`,e.jsx(f,{aliases:["Button group","Segmented control","Toggle group"],figmaLink:"https://www.figma.com/design/9jDDTcR4a9jPRFcdjawAlf/ODS---UI-Kit?node-id=52-10578",githubUrl:"https://github.com/ovh/design-system/tree/master/packages/ods-react/src/components/switch",name:"Switch",children:e.jsxs(t.p,{children:["A ",e.jsx(t.strong,{children:"Switch"})," allows users to quickly and easily switch between several states, actions or options in a row."]})}),`
`,e.jsx(i,{label:"Usage",level:2}),`
`,e.jsxs(t.p,{children:["A ",e.jsx(t.strong,{children:"Switch"})," is used to switch between multiple states, actions or options (up-to 4)."]}),`
`,e.jsx(t.p,{children:"It can be used for many use cases such as selecting a state within a group of states or filtering."}),`
`,e.jsx(i,{label:"Dos & Don'ts",level:3}),`
`,e.jsx(b,{donts:["- Don't use a Switch for more than 4 options. Prefer Radio Group, Checkbox, or Select instead depending on your use case","- Don't use a Switch for unrelated options, they should belong to a common category or context","- Don't use a Switch if selecting an option does not produce an immediate effect. Use a Checkbox or another control instead","- Don't rely solely on icons, add text for clarity"],dos:["- Use a Switch when the user must choose one active option among 2 to 4 closely related states or actions","- Ensure each Switch item has a clear, descriptive label","- Use a Switch when immediate feedback or real-time filtering is expected upon selection"]}),`
`,e.jsx(i,{label:"Best Practices in Context",level:3}),`
`,e.jsx(j,{src:"components/switch/anatomy.png"}),`
`,e.jsxs(t.ol,{children:[`
`,e.jsx(t.li,{children:e.jsx(t.strong,{children:"Switch"})}),`
`,e.jsx(t.li,{children:e.jsx(t.strong,{children:"Active toggle button"})}),`
`,e.jsx(t.li,{children:e.jsx(t.strong,{children:"Toggle button"})}),`
`,e.jsx(t.li,{children:e.jsx(t.strong,{children:"Label"})}),`
`]}),`
`,e.jsx(i,{label:"Placement",level:2}),`
`,e.jsxs(t.p,{children:["A ",e.jsx(t.strong,{children:"Switch"}),` can be used in a page when the user needs to select a choice from multiple states or items.
It may replace two radio buttons or a single checkbox to allow users to choose between several states.`]}),`
`,e.jsxs(t.p,{children:["By default, the width of a ",e.jsx(t.strong,{children:"Switch"}),` item is defined by the length of content.
A custom width can be set so all items on the track will have the same size regardless of content length.`]}),`
`,e.jsx(i,{label:"Behavior",level:2}),`
`,e.jsxs(t.p,{children:["The user can switch between states by clicking the ",e.jsx(t.strong,{children:"Switch"})," items, and it has an immediate effect."]}),`
`,e.jsx(i,{label:"Navigation",level:2}),`
`,e.jsx(i,{label:"Focus Management",level:3}),`
`,e.jsxs(t.p,{children:["When the ",e.jsx(t.strong,{children:"Switch"})," receives focus, it is set on the currently selected item, or on the first item if none is selected."]}),`
`,e.jsxs(t.p,{children:["Each individual ",e.jsx(t.strong,{children:"Switch"})," item is focusable unless disabled. A disabled item cannot receive focus or be activated."]}),`
`,e.jsx(t.p,{children:"Focus remains within the group when navigating between items using arrow keys."}),`
`,e.jsx(i,{label:"General Keyboard Shortcuts",level:3}),`
`,e.jsxs(t.p,{children:["Pressing ",e.jsx(s,{children:"Tab"})," moves focus to the selected item or the first item in the group."]}),`
`,e.jsxs(t.p,{children:["Pressing ",e.jsx(s,{children:"Shift"})," + ",e.jsx(s,{children:"Tab"})," moves focus to the previous focusable element outside the ",e.jsx(t.strong,{children:"Switch"})," group."]}),`
`,e.jsxs(t.p,{children:["Pressing ",e.jsx(s,{children:"Arrow Right"})," or ",e.jsx(s,{children:"Arrow Down"})," moves focus to the next item in the group."]}),`
`,e.jsxs(t.p,{children:["Pressing ",e.jsx(s,{children:"Arrow Left"})," or ",e.jsx(s,{children:"Arrow Up"})," moves focus to the previous item in the group."]}),`
`,e.jsxs(t.p,{children:["Pressing ",e.jsx(s,{children:"Home"})," (or ",e.jsx(s,{children:"fn"})," + ",e.jsx(s,{children:"Arrow Left"}),") moves focus to the first item."]}),`
`,e.jsxs(t.p,{children:["Pressing ",e.jsx(s,{children:"End"})," (or ",e.jsx(s,{children:"fn"})," + ",e.jsx(s,{children:"Arrow Right"}),") moves focus to the last item."]}),`
`,e.jsxs(t.p,{children:["Pressing ",e.jsx(s,{children:"Space"})," or ",e.jsx(s,{children:"Enter"})," activates or deactivates the focused item, updating the selection immediately."]}),`
`,e.jsx(i,{label:"Accessibility",level:2}),`
`,e.jsxs(t.p,{children:["To ensure proper accessibility, ",e.jsx(t.strong,{children:"Switch"})," must be correctly labeled."]}),`
`,e.jsx(i,{label:"Always provide an explicit label",level:3}),`
`,e.jsxs(t.p,{children:["Every ",e.jsx(t.strong,{children:"Switch"}),` must have a clear and explicit label to ensure that users (especially screen reader users) understand its purpose,
using either an `,e.jsx(a,{href:"https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label",children:"aria-label"}),`
or an `,e.jsx(a,{href:"https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby",children:"aria-labelledby"})," attribute."]}),`
`,e.jsx(o,{of:x,sourceState:"shown"}),`
`,e.jsxs(t.p,{children:[e.jsx(r,{name:l.circleCheck,style:{color:"var(--ods-color-success-500)"}})," Screen readers will announce the label and the option information (text, position, selection state)."]}),`
`,e.jsx(o,{of:u,sourceState:"shown"}),`
`,e.jsxs(t.p,{children:[e.jsx(r,{name:l.circleCheck,style:{color:"var(--ods-color-success-500)"}})," Screen readers will announce the label and the option information (text, position, selection state)."]})]})}function ae(n={}){const{wrapper:t}={...d(),...n.components};return t?e.jsx(t,{...n,children:e.jsx(h,{...n})}):h(n)}export{ae as default};
