import{j as e}from"./jsx-runtime-VM66peLj.js";import{useMDXComponents as l}from"./index-DQB45XCM.js";import{a as c,o as a}from"./ods-react61-BFiU7C5S.js";import{M as d,C as t}from"./index-DQDMPrC3.js";import{E as h}from"./ExternalLink-F7ndcp9T.js";import{S as i,O as p,A as m}from"./select.stories-DnCPcgbg.js";import{B as x}from"./Banner-D5YsTkFA.js";import{I as j,B as g}from"./IdentityCard-C39Eam7s.js";import{H as o}from"./Heading-BTR1K1mm.js";import"./index-D_CmzhJ4.js";import"./index-2w0W-O47-BJ19ihbZ.js";import"./iframe-llaHorau.js";import"./index-ChzAxGiP.js";import"./index-CucsY3YN.js";import"./index-CXQShRbs.js";import"./index-DrFu-skq.js";import"./Link-DTswNFmS-CEk9YBDP.js";import"./FormFieldLabel-DQkMrZpp.js";import"./index-CkQHsVsO.js";import"./Text-B1XN51Xz.js";import"./SelectControl-CmmZyh2D.js";import"./collection-D1icvmxM.js";import"./use-locale-context-DLC4Hyvy.js";import"./portal-CjJhVgfZ.js";import"./use-presence-BH5ft0ba.js";import"./use-event-OCVb0O1l.js";import"./index-inT8qsA6.js";import"./index-EI2n6HsL.js";import"./use-field-context--XabuWSL.js";import"./icon-name-CL_C5kfn.js";import"./controls-BtiQQn1l.js";import"./source-d0g_Nd0q.js";import"./Divider-DwZugXnI-RR--JbES.js";import"./ods-react222-B9lkGKUh.js";function r(s){const n={code:"code",em:"em",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...l(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(d,{of:i,name:"Documentation"}),`
`,e.jsx(x,{of:i}),`
`,e.jsx(n.p,{children:e.jsxs(n.em,{children:[e.jsx(n.strong,{children:"Select"})," component is used to select one or more items from a list of values"]})}),`
`,e.jsx(t,{of:p,sourceState:"none"}),`
`,e.jsx(o,{label:"Overview",level:2}),`
`,e.jsx(j,{aliases:["Dropdown"],figmaLink:"https://www.figma.com/design/9jDDTcR4a9jPRFcdjawAlf/ODS---UI-Kit?node-id=49-24314",githubUrl:"https://github.com/ovh/design-system/tree/master/packages/ods-react/src/components/select",name:"Select",children:e.jsxs(n.p,{children:["A ",e.jsx(n.strong,{children:"Select"})," is used to allow users to select one or more items from a list that is displayed after clicking on it."]})}),`
`,e.jsx(o,{label:"Usage",level:2}),`
`,e.jsxs(n.p,{children:["A ",e.jsx(n.strong,{children:"Select"})," is used to display to the user a list of items or options to choose from."]}),`
`,e.jsx(n.p,{children:"The order of items or options in the list should be sorted as following, depending on the usage:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Frequency"})," of use: recommended item will be listed first"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Alpha"}),": it can be used for countries or city locations for example"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Numeric"}),": it can be used for sizes for example"]}),`
`]}),`
`,e.jsx(o,{label:"Dos & Don'ts",level:3}),`
`,e.jsx(g,{donts:[`- Don't use a Select for binary choices like "Yes" or "No". Use Radio buttons instead for faster interaction`,"- Don't use Select when users need to compare all available options. Use Radio buttons for better visibility","- Don't include very long option labels that wrap multiple lines since it makes scanning and selection harder","- Don't rely only on placeholder text to communicate intent. Always pair Select with a label","- Don't overload Select with too many items (e.g., hundreds). Consider Combobox or a searchable alternative"],dos:["- Use a Select when users need to choose one option from a list of three or more items","- Order the options logically (e.g., by frequency of use, alphabetical order, or numeric sequence)","- Keep option labels short and scannable, ideally one word or a short phrase that fits on a single line","- Use placeholder text to prompt users when no option is selected","- Consider adding grouping if you have many related options and want to improve clarity"]}),`
`,e.jsx(o,{label:"Best Practices in Context",level:3}),`
`,e.jsx(n.p,{children:e.jsx(n.img,{src:"components/select/anatomy.png",alt:"Component anatomy",title:"Component anatomy"})}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.strong,{children:"Select"})}),`
`,e.jsx(n.li,{children:e.jsx(n.strong,{children:"Field containing placeholder or selection"})}),`
`,e.jsx(n.li,{children:e.jsx(n.strong,{children:"Dropdown"})}),`
`,e.jsx(n.li,{children:e.jsx(n.strong,{children:"List"})}),`
`,e.jsx(n.li,{children:e.jsx(n.strong,{children:"Option"})}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Group"})," - optional"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Multi-selection"})," - optional (display a checkbox)"]}),`
`]}),`
`,e.jsx(o,{label:"Placement",level:2}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Select"})," should be vertically aligned with other form components on a same page."]}),`
`,e.jsx(n.p,{children:"It has a width by default, but it can widen to match its container."}),`
`,e.jsx(o,{label:"Behavior",level:2}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Select"})," can be focused and hovered. It also can be disabled. A single option and a group of options can be disabled to be more precise in inner ",e.jsx(n.strong,{children:"Select"})," items."]}),`
`,e.jsx(o,{label:"Variation",level:2}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Single selection"}),": Allows the user to select a single item from a dropdown list of options."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Multiple selection"}),": Allows the user to select multiple items from a dropdown list of options. The whole line is clickable."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Grouped options"}),": Related options can be grouped together in both a single and multi ",e.jsx(n.strong,{children:"Select"}),"."]}),`
`]}),`
`,e.jsx(o,{label:"Navigation",level:2}),`
`,e.jsx(o,{label:"Focus Management",level:3}),`
`,e.jsxs(n.p,{children:["When the ",e.jsx(n.strong,{children:"Select"})," is enabled, it can receive focus via keyboard interaction."]}),`
`,e.jsxs(n.p,{children:["When the ",e.jsx(n.strong,{children:"Select"})," is opened, focus moves into the dropdown content and highlights the selected option (if any), or the first available option."]}),`
`,e.jsxs(n.p,{children:["When closed, focus returns to the ",e.jsx(n.strong,{children:"Select"})," trigger."]}),`
`,e.jsxs(n.p,{children:["A read-only ",e.jsx(n.strong,{children:"Select"})," can receive focus, but the dropdown cannot be opened or interacted with."]}),`
`,e.jsxs(n.p,{children:["Disabled ",e.jsx(n.strong,{children:"Select"})," or disabled options cannot receive focus or be interacted with."]}),`
`,e.jsx(o,{label:"General Keyboard Shortcuts",level:3}),`
`,e.jsxs(n.p,{children:["Pressing ",e.jsx(n.code,{children:"Space"}),", ",e.jsx(n.code,{children:"Enter"}),", ",e.jsx(n.code,{children:"Arrow Down"})," or ",e.jsx(n.code,{children:"Arrow Up"})," when the ",e.jsx(n.strong,{children:"Select"})," is focused opens the dropdown and highlights the selected or first option."]}),`
`,e.jsx(n.p,{children:"While the dropdown is open:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"Arrow Down"})," moves the highlight to the next option"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"Arrow Up"})," moves the highlight to the previous option"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"Enter"})," or ",e.jsx(n.code,{children:"Tab"})," selects the currently highlighted option and closes the dropdown"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"Escape"})," closes the dropdown without making a new selection"]}),`
`]}),`
`,e.jsx(n.p,{children:"Typing an alphanumeric character (A–Z, a–z) changes focus to the next option starting with that character."}),`
`,e.jsx(o,{label:"Accessibility",level:2}),`
`,e.jsxs(n.p,{children:["This component complies with the ",e.jsx(h,{href:"https://www.w3.org/WAI/ARIA/apg/patterns/listbox/",children:"Listbox WAI-ARIA design pattern"}),"."]}),`
`,e.jsx(o,{label:"Always provide an explicit label",level:3}),`
`,e.jsxs(n.p,{children:["Every ",e.jsx(n.strong,{children:"Select"}),` must have a clear and explicit label to ensure that users (especially screen reader users) understand its purpose,
using either `,e.jsx(n.strong,{children:"FormField"})," or a native label tag."]}),`
`,e.jsx(t,{of:m,sourceState:"shown"}),`
`,e.jsxs(n.p,{children:[e.jsx(c,{name:a.circleCheck,style:{color:"var(--ods-color-success-500)"}})," Screen readers will announce the label as well as the select."]})]})}function J(s={}){const{wrapper:n}={...l(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(r,{...s})}):r(s)}export{J as default};
