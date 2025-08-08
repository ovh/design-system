import{j as e}from"./jsx-runtime-VM66peLj.js";import{useMDXComponents as h}from"./index-DQB45XCM.js";import{a as i,o as r}from"./ods-react61-BFiU7C5S.js";import{M as d,C as o}from"./index-DQDMPrC3.js";import{S as c,O as m,A as p,a as x}from"./switch.stories-ClRRNC0o.js";import{B as u}from"./Banner-D5YsTkFA.js";import{I as j,B as g}from"./IdentityCard-C39Eam7s.js";import{E as l}from"./ExternalLink-F7ndcp9T.js";import{H as t}from"./Heading-BTR1K1mm.js";import"./index-D_CmzhJ4.js";import"./index-2w0W-O47-BJ19ihbZ.js";import"./iframe-llaHorau.js";import"./index-ChzAxGiP.js";import"./index-CucsY3YN.js";import"./index-CXQShRbs.js";import"./index-DrFu-skq.js";import"./index-CkQHsVsO.js";import"./use-locale-context-DLC4Hyvy.js";import"./Text-B1XN51Xz.js";import"./controls-BtiQQn1l.js";import"./Link-DTswNFmS-CEk9YBDP.js";import"./Divider-DwZugXnI-RR--JbES.js";import"./ods-react222-B9lkGKUh.js";function a(n){const s={code:"code",em:"em",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",...h(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(d,{of:c,name:"Documentation"}),`
`,e.jsx(u,{of:c}),`
`,e.jsx(s.p,{children:e.jsxs(s.em,{children:["A ",e.jsx(s.strong,{children:"Switch"})," allows users to quickly and easily switch between several states, actions or options in a row."]})}),`
`,e.jsx(o,{of:m,sourceState:"none"}),`
`,e.jsx(t,{label:"Overview",level:2}),`
`,e.jsx(j,{aliases:["Button group","Segmented control","Toggle group"],figmaLink:"https://www.figma.com/design/9jDDTcR4a9jPRFcdjawAlf/ODS---UI-Kit?node-id=52-10578",githubUrl:"https://github.com/ovh/design-system/tree/master/packages/ods-react/src/components/switch",name:"Switch",children:e.jsxs(s.p,{children:["A ",e.jsx(s.strong,{children:"Switch"})," allows users to quickly and easily switch between several states, actions or options in a row."]})}),`
`,e.jsx(t,{label:"Usage",level:2}),`
`,e.jsxs(s.p,{children:["A ",e.jsx(s.strong,{children:"Switch"})," is used to switch between multiple states, actions or options (up-to 4)."]}),`
`,e.jsx(s.p,{children:"It can be used for many use cases such as selecting a state within a group of states or filtering."}),`
`,e.jsx(t,{label:"Dos & Don'ts",level:3}),`
`,e.jsx(g,{donts:["- Don't use a Switch for more than 4 options. Prefer Radio Group, Checkbox, or Select instead depending on your use case","- Don't use a Switch for unrelated options, they should belong to a common category or context","- Don't use a Switch if selecting an option does not produce an immediate effect. Use a Checkbox or another control instead","- Don't rely solely on icons, add text for clarity"],dos:["- Use a Switch when the user must choose one active option among 2 to 4 closely related states or actions","- Ensure each Switch item has a clear, descriptive label","- Use a Switch when immediate feedback or real-time filtering is expected upon selection"]}),`
`,e.jsx(t,{label:"Best Practices in Context",level:3}),`
`,e.jsx(s.p,{children:e.jsx(s.img,{src:"components/switch/anatomy.png",alt:"Component anatomy",title:"Component anatomy"})}),`
`,e.jsxs(s.ol,{children:[`
`,e.jsx(s.li,{children:e.jsx(s.strong,{children:"Switch"})}),`
`,e.jsx(s.li,{children:e.jsx(s.strong,{children:"Active toggle button"})}),`
`,e.jsx(s.li,{children:e.jsx(s.strong,{children:"Toggle button"})}),`
`,e.jsx(s.li,{children:e.jsx(s.strong,{children:"Label"})}),`
`]}),`
`,e.jsx(t,{label:"Placement",level:2}),`
`,e.jsxs(s.p,{children:["A ",e.jsx(s.strong,{children:"Switch"}),` can be used in a page when the user needs to select a choice from multiple states or items.
It may replace two radio buttons or a single checkbox to allow users to choose between several states.`]}),`
`,e.jsxs(s.p,{children:["By default, the width of a ",e.jsx(s.strong,{children:"Switch"}),` item is defined by the length of content.
A custom width can be set so all items on the track will have the same size regardless of content length.`]}),`
`,e.jsx(t,{label:"Behavior",level:2}),`
`,e.jsxs(s.p,{children:["The user can switch between states by clicking the ",e.jsx(s.strong,{children:"Switch"})," items, and it has an immediate effect."]}),`
`,e.jsx(t,{label:"Navigation",level:2}),`
`,e.jsx(t,{label:"Focus Management",level:3}),`
`,e.jsxs(s.p,{children:["When the ",e.jsx(s.strong,{children:"Switch"})," receives focus, it is set on the currently selected item, or on the first item if none is selected."]}),`
`,e.jsxs(s.p,{children:["Each individual ",e.jsx(s.strong,{children:"Switch"})," item is focusable unless disabled. A disabled item cannot receive focus or be activated."]}),`
`,e.jsx(s.p,{children:"Focus remains within the group when navigating between items using arrow keys."}),`
`,e.jsx(t,{label:"General Keyboard Shortcuts",level:3}),`
`,e.jsxs(s.p,{children:["Pressing ",e.jsx(s.code,{children:"Tab"})," moves focus to the selected item or the first item in the group."]}),`
`,e.jsxs(s.p,{children:["Pressing ",e.jsx(s.code,{children:"Shift"})," + ",e.jsx(s.code,{children:"Tab"})," moves focus to the previous focusable element outside the ",e.jsx(s.strong,{children:"Switch"})," group."]}),`
`,e.jsxs(s.p,{children:["Pressing ",e.jsx(s.code,{children:"Arrow Right"})," or ",e.jsx(s.code,{children:"Arrow Down"})," moves focus to the next item in the group."]}),`
`,e.jsxs(s.p,{children:["Pressing ",e.jsx(s.code,{children:"Arrow Left"})," or ",e.jsx(s.code,{children:"Arrow Up"})," moves focus to the previous item in the group."]}),`
`,e.jsxs(s.p,{children:["Pressing ",e.jsx(s.code,{children:"Home"})," (or ",e.jsx(s.code,{children:"fn"})," + ",e.jsx(s.code,{children:"Arrow Left"}),") moves focus to the first item."]}),`
`,e.jsxs(s.p,{children:["Pressing ",e.jsx(s.code,{children:"End"})," (or ",e.jsx(s.code,{children:"fn"})," + ",e.jsx(s.code,{children:"Arrow Right"}),") moves focus to the last item."]}),`
`,e.jsxs(s.p,{children:["Pressing ",e.jsx(s.code,{children:"Space"})," or ",e.jsx(s.code,{children:"Enter"})," activates or deactivates the focused item, updating the selection immediately."]}),`
`,e.jsx(t,{label:"Accessibility",level:2}),`
`,e.jsxs(s.p,{children:["To ensure proper accessibility, ",e.jsx(s.strong,{children:"Switch"})," must be correctly labeled."]}),`
`,e.jsx(t,{label:"Always provide an explicit label",level:2}),`
`,e.jsxs(s.p,{children:["Every ",e.jsx(s.strong,{children:"Switch"}),` must have a clear and explicit label to ensure that users (especially screen reader users) understand its purpose,
using either an `,e.jsx(l,{href:"https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label",children:"aria-label"}),`
or an `,e.jsx(l,{href:"https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby",children:"aria-labelledby"})," attribute."]}),`
`,e.jsx(o,{of:p,sourceState:"shown"}),`
`,e.jsxs(s.p,{children:[e.jsx(i,{name:r.circleCheck,style:{color:"var(--ods-color-success-500)"}})," Screen readers will announce the label and the option information (text, position, selection state)."]}),`
`,e.jsx(o,{of:x,sourceState:"shown"}),`
`,e.jsxs(s.p,{children:[e.jsx(i,{name:r.circleCheck,style:{color:"var(--ods-color-success-500)"}})," Screen readers will announce the label and the option information (text, position, selection state)."]})]})}function W(n={}){const{wrapper:s}={...h(),...n.components};return s?e.jsx(s,{...n,children:e.jsx(a,{...n})}):a(n)}export{W as default};
