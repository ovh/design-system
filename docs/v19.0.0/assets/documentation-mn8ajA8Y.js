import{j as e}from"./jsx-runtime-VM66peLj.js";import{useMDXComponents as r}from"./index-DQB45XCM.js";import{M as c,C as l}from"./index-CTRIvuAa.js";import{S as o,O as a}from"./switch.stories-BQ2JCJUg.js";import{B as h}from"./Banner-DKEGGZmZ.js";import{I as d,A as m,B as p}from"./IdentityCard-DMALWF_P.js";import{H as s}from"./Heading-BKRI_kjA.js";import"./StorybookLink-DMr2bWgk.js";import"./index-D_CmzhJ4.js";import"./iframe-B1k00A9N.js";import"./index-ChzAxGiP.js";import"./index-CucsY3YN.js";import"./index-CXQShRbs.js";import"./index-DrFu-skq.js";import"./index-CkQHsVsO.js";import"./use-locale-context-BQVaQ0H3.js";import"./controls-BtiQQn1l.js";import"./ExternalLink-DJ00RbPw.js";import"./ods-react60-Yebt9vXY.js";import"./index-2w0W-O47-BJ19ihbZ.js";import"./Link-D8k51sak-CbRDKo-E.js";import"./ods-react214-B9lkGKUh.js";function i(n){const t={code:"code",em:"em",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",...r(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(c,{of:o,name:"Documentation"}),`
`,e.jsx(h,{of:o}),`
`,e.jsx(t.p,{children:e.jsxs(t.em,{children:["A ",e.jsx(t.strong,{children:"Switch"})," allows users to quickly and easily switch between several states, actions or options in a row."]})}),`
`,e.jsx(l,{of:a,sourceState:"none"}),`
`,e.jsx(s,{label:"Overview",level:2}),`
`,e.jsx(d,{aliases:["Button group","Segmented control","Toggle group"],atomicType:m.atom,figmaLink:"https://www.figma.com/design/9jDDTcR4a9jPRFcdjawAlf/ODS---UI-Kit?node-id=52-10578",githubUrl:"https://github.com/ovh/design-system/tree/master/packages/ods/src/components/switch",name:"Switch",children:e.jsxs(t.p,{children:["A ",e.jsx(t.strong,{children:"Switch"})," allows users to quickly and easily switch between several states, actions or options in a row."]})}),`
`,e.jsx(s,{label:"Usage",level:2}),`
`,e.jsxs(t.p,{children:["A ",e.jsx(t.strong,{children:"Switch"})," is used to switch between multiple states, actions or options (up-to 4)."]}),`
`,e.jsx(t.p,{children:"It can be used for many use cases such as selecting a state within a group of states or filtering."}),`
`,e.jsx(s,{label:"Dos & Don'ts",level:3}),`
`,e.jsx(p,{donts:["- Don't use a Switch for more than 4 options. Prefer Radio Group, Checkbox, or Select instead depending on your use case","- Don't use a Switch for unrelated options, they should belong to a common category or context","- Don't use a Switch if selecting an option does not produce an immediate effect. Use a Checkbox or another control instead","- Don't rely solely on icons, add text for clarity"],dos:["- Use a Switch when the user must choose one active option among 2 to 4 closely related states or actions","- Ensure each Switch item has a clear, descriptive label","- Use a Switch when immediate feedback or real-time filtering is expected upon selection"]}),`
`,e.jsx(s,{label:"Best Practices in Context",level:3}),`
`,e.jsx(t.p,{children:e.jsx(t.img,{src:"components/switch/anatomy.png",alt:"Component anatomy",title:"Component anatomy"})}),`
`,e.jsxs(t.ol,{children:[`
`,e.jsx(t.li,{children:e.jsx(t.strong,{children:"Switch"})}),`
`,e.jsx(t.li,{children:e.jsx(t.strong,{children:"Active toggle button"})}),`
`,e.jsx(t.li,{children:e.jsx(t.strong,{children:"Toggle button"})}),`
`,e.jsx(t.li,{children:e.jsx(t.strong,{children:"Label"})}),`
`]}),`
`,e.jsx(s,{label:"Placement",level:2}),`
`,e.jsxs(t.p,{children:["A ",e.jsx(t.strong,{children:"Switch"}),` can be used in a page when the user needs to select a choice from multiple states or items.
It may replace two radio buttons or a single checkbox to allow users to choose between several states.`]}),`
`,e.jsxs(t.p,{children:["By default, the width of a ",e.jsx(t.strong,{children:"Switch"}),` item is defined by the length of content.
A custom width can be set so all items on the track will have the same size regardless of content length.`]}),`
`,e.jsx(s,{label:"Behavior",level:2}),`
`,e.jsxs(t.p,{children:["The user can switch between states by clicking the ",e.jsx(t.strong,{children:"Switch"})," items, and it has an immediate effect."]}),`
`,e.jsx(s,{label:"Navigation",level:2}),`
`,e.jsx(s,{label:"Focus Management",level:3}),`
`,e.jsxs(t.p,{children:["When the ",e.jsx(t.strong,{children:"Switch"})," receives focus, it is set on the currently selected item, or on the first item if none is selected."]}),`
`,e.jsxs(t.p,{children:["Each individual ",e.jsx(t.strong,{children:"Switch"})," item is focusable unless disabled. A disabled item cannot receive focus or be activated."]}),`
`,e.jsx(t.p,{children:"Focus remains within the group when navigating between items using arrow keys."}),`
`,e.jsx(s,{label:"General Keyboard Shortcuts",level:3}),`
`,e.jsxs(t.p,{children:["Pressing ",e.jsx(t.code,{children:"Tab"})," moves focus to the selected item or the first item in the group."]}),`
`,e.jsxs(t.p,{children:["Pressing ",e.jsx(t.code,{children:"Shift"})," + ",e.jsx(t.code,{children:"Tab"})," moves focus to the previous focusable element outside the ",e.jsx(t.strong,{children:"Switch"})," group."]}),`
`,e.jsxs(t.p,{children:["Pressing ",e.jsx(t.code,{children:"Arrow Right"})," or ",e.jsx(t.code,{children:"Arrow Down"})," moves focus to the next item in the group."]}),`
`,e.jsxs(t.p,{children:["Pressing ",e.jsx(t.code,{children:"Arrow Left"})," or ",e.jsx(t.code,{children:"Arrow Up"})," moves focus to the previous item in the group."]}),`
`,e.jsxs(t.p,{children:["Pressing ",e.jsx(t.code,{children:"Home"})," (or ",e.jsx(t.code,{children:"fn"})," + ",e.jsx(t.code,{children:"Arrow Left"}),") moves focus to the first item."]}),`
`,e.jsxs(t.p,{children:["Pressing ",e.jsx(t.code,{children:"End"})," (or ",e.jsx(t.code,{children:"fn"})," + ",e.jsx(t.code,{children:"Arrow Right"}),") moves focus to the last item."]}),`
`,e.jsxs(t.p,{children:["Pressing ",e.jsx(t.code,{children:"Space"})," or ",e.jsx(t.code,{children:"Enter"})," activates or desactivates the focused item, updating the selection immediately."]})]})}function L(n={}){const{wrapper:t}={...r(),...n.components};return t?e.jsx(t,{...n,children:e.jsx(i,{...n})}):i(n)}export{L as default};
