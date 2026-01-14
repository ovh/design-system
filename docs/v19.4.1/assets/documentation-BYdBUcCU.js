import{j as e}from"./jsx-runtime-Cfl8ynUo.js";import{useMDXComponents as c}from"./index-ZwkxtaJJ.js";import{a,l as d}from"./ods-react64-C395g5lW.js";import{k as s}from"./Kbd-BhRHY5DX-DYqBejDt.js";import{M as h}from"./index-C3P7rize.js";import{S as i,O as p,A as m}from"./select.stories-LTefxTA3.js";import{A as x}from"./Anatomy-DkXJCwiR.js";import{B as j}from"./Banner-pQsjs-k1.js";import{I as g,B as u}from"./IdentityCard-BHvRCB68.js";import{C as r}from"./Canvas-ClwM1ePO.js";import{E as f}from"./ExternalLink-C9tV86xX.js";import{H as o}from"./Heading-DAsItneX.js";import"./index-jIWwRBLr.js";import"./index-CWkFp9WS-BSIT86NH.js";import"./iframe-B-1i39SD.js";import"./index-DWDEzXrj.js";import"./index-N93khynk.js";import"./index-CXQShRbs.js";import"./index-DrFu-skq.js";import"./FormFieldLabel-f_nl6yro.js";import"./index-CqY9YpN0.js";import"./Text-CW33_IfE.js";import"./SelectControl-BHkJQAXK.js";import"./index-OHF4-eS1.js";import"./use-locale-context-Da8UBLVe.js";import"./portal-Dz6APLpY.js";import"./use-presence-BpdcDhnz.js";import"./use-event-c9j7vq_1.js";import"./index-BY2p2mzr.js";import"./index-B-pxw7wW.js";import"./use-field-context-6EvXFqGa.js";import"./icon-name-BpdEc4-2.js";import"./context-C_-r2uoG.js";import"./controls-BtiQQn1l.js";import"./source-CPEZJ6oD.js";import"./Table-DVdtSe4m-Co7uf3pc.js";import"./Table-Bq5w2nKq.js";import"./TooltipTrigger-DxEeTVF8-B5Le9OVu.js";import"./ods-react114-5kwUyuQy.js";import"./index-lGh5KcWi.js";import"./lz-string-U2heoObX.js";import"./meta-DxXVpXmq.js";import"./ResetTheme-BVzaMHe3.js";import"./tokens-VHDJ0kGa.js";import"./Link-BhqYqKFa-BDwROQOD.js";import"./Divider-DmVNyNnn-DCNXheUh.js";function l(t){const n={em:"em",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...c(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(h,{of:i,name:"Documentation"}),`
`,e.jsx(j,{of:i}),`
`,e.jsx(n.p,{children:e.jsxs(n.em,{children:[e.jsx(n.strong,{children:"Select"})," component is used to select one or more items from a list of values"]})}),`
`,e.jsx(r,{of:p,sourceState:"none"}),`
`,e.jsx(o,{label:"Overview",level:2}),`
`,e.jsx(g,{aliases:["Dropdown"],figmaLink:"https://www.figma.com/design/9jDDTcR4a9jPRFcdjawAlf/ODS---UI-Kit?node-id=49-24314",githubUrl:"https://github.com/ovh/design-system/tree/master/packages/ods-react/src/components/select",name:"Select",children:e.jsxs(n.p,{children:["A ",e.jsx(n.strong,{children:"Select"})," is used to allow users to select one or more items from a list that is displayed after clicking on it."]})}),`
`,e.jsx(o,{label:"Usage",level:2}),`
`,e.jsxs(n.p,{children:["A ",e.jsx(n.strong,{children:"Select"})," is used to display to the user a list of items or options to choose from."]}),`
`,e.jsx(n.p,{children:"The order of items or options in the list should be sorted as following, depending on the usage:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Frequency"})," of use: recommended item will be listed first"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Alpha"}),": it can be used for countries or city locations for example"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Numeric"}),": it can be used for sizes for example"]}),`
`]}),`
`,e.jsx(o,{label:"Dos & Don'ts",level:3}),`
`,e.jsx(u,{donts:[`- Don't use a Select for binary choices like "Yes" or "No". Use Radio buttons instead for faster interaction`,"- Don't use Select when users need to compare all available options. Use Radio buttons for better visibility","- Don't include very long option labels that wrap multiple lines since it makes scanning and selection harder","- Don't rely only on placeholder text to communicate intent. Always pair Select with a label","- Don't overload Select with too many items (e.g., hundreds). Consider Combobox or a searchable alternative"],dos:["- Use a Select when users need to choose one option from a list of three or more items","- Order the options logically (e.g., by frequency of use, alphabetical order, or numeric sequence)","- Keep option labels short and scannable, ideally one word or a short phrase that fits on a single line","- Use placeholder text to prompt users when no option is selected","- Consider adding grouping if you have many related options and want to improve clarity"]}),`
`,e.jsx(o,{label:"Best Practices in Context",level:3}),`
`,e.jsx(x,{src:"components/select/anatomy.png"}),`
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
`,e.jsxs(n.p,{children:["Pressing ",e.jsx(s,{children:"Space"}),", ",e.jsx(s,{children:"Enter"}),", ",e.jsx(s,{children:"Arrow Down"})," or ",e.jsx(s,{children:"Arrow Up"})," when the ",e.jsx(n.strong,{children:"Select"})," is focused opens the dropdown and highlights the selected or first option."]}),`
`,e.jsx(n.p,{children:"While the dropdown is open:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(s,{children:"Arrow Down"})," moves the highlight to the next option"]}),`
`,e.jsxs(n.li,{children:[e.jsx(s,{children:"Arrow Up"})," moves the highlight to the previous option"]}),`
`,e.jsxs(n.li,{children:[e.jsx(s,{children:"Enter"})," or ",e.jsx(s,{children:"Tab"})," selects the currently highlighted option and closes the dropdown"]}),`
`,e.jsxs(n.li,{children:[e.jsx(s,{children:"Escape"})," closes the dropdown without making a new selection"]}),`
`]}),`
`,e.jsx(n.p,{children:"Typing an alphanumeric character (A–Z, a–z) changes focus to the next option starting with that character."}),`
`,e.jsx(o,{label:"Accessibility",level:2}),`
`,e.jsxs(n.p,{children:["This component complies with the ",e.jsx(f,{href:"https://www.w3.org/WAI/ARIA/apg/patterns/listbox/",children:"Listbox WAI-ARIA design pattern"}),"."]}),`
`,e.jsx(o,{label:"Always provide an explicit label",level:3}),`
`,e.jsxs(n.p,{children:["Every ",e.jsx(n.strong,{children:"Select"}),` must have a clear and explicit label to ensure that users (especially screen reader users) understand its purpose,
using either `,e.jsx(n.strong,{children:"FormField"})," or a native label tag."]}),`
`,e.jsx(r,{of:m,sourceState:"shown"}),`
`,e.jsxs(n.p,{children:[e.jsx(a,{name:d.circleCheck,style:{color:"var(--ods-color-success-500)"}})," Screen readers will announce the label as well as the select."]})]})}function he(t={}){const{wrapper:n}={...c(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(l,{...t})}):l(t)}export{he as default};
