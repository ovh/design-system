import{j as e}from"./jsx-runtime-Cfl8ynUo.js";import{useMDXComponents as m}from"./index-ZwkxtaJJ.js";import{a as c,l as d}from"./ods-react67-C395g5lW.js";import{k as t}from"./Kbd-BhRHY5DX-DYqBejDt.js";import{M as u}from"./index-Cw5r0Kn8.js";import{C as h,O as x,A as j,a as g}from"./combobox.stories-B7n8Ahhm.js";import{A as b}from"./Anatomy-DkXJCwiR.js";import{B as f}from"./Banner-X7WOeBPc.js";import{I as w,B as v}from"./IdentityCard-D9LjZbLA.js";import{C as a}from"./Canvas-i2Tfjesg.js";import{E as y}from"./ExternalLink-C5hGBmwh.js";import{H as s}from"./Heading-Dep_rTif.js";import{S as o}from"./StorybookLink-DQwP2BEI.js";import{S as r,R as l}from"./meta-DcQbZjt_.js";import"./index-jIWwRBLr.js";import"./index-CWkFp9WS-BSIT86NH.js";import"./iframe-DCzti3mm.js";import"./index-DWDEzXrj.js";import"./index-N93khynk.js";import"./index-CXQShRbs.js";import"./index-DrFu-skq.js";import"./FormFieldLabelSubLabel-DCAb65DU.js";import"./index-CqY9YpN0.js";import"./Text-CW33_IfE.js";import"./context-C_-r2uoG.js";import"./index-CPOqegBX.js";import"./use-locale-context-kHyebpMI.js";import"./PopoverTrigger-CBYmsU80.js";import"./overlay-CZHjGBMC.js";import"./portal-CJHwXgLI.js";import"./use-presence-C53EI5fL.js";import"./use-event-c9j7vq_1.js";import"./index-BwUtbHV0.js";import"./index-BFzjWlov.js";import"./icon-name-BpdEc4-2.js";import"./element-3R7vFkDE.js";import"./Input-BllcUVFN.js";import"./useI18n-C0NLVYPv.js";import"./Button-B-GJ-1TA.js";import"./Spinner-DJB5ZadI.js";import"./colors-DSObuHxd.js";import"./Tag-DCFZFbun.js";import"./controls-BtiQQn1l.js";import"./source-CPEZJ6oD.js";import"./Table-D8Me597i-NC3k9YIT.js";import"./Table-5ah53JFf.js";import"./TooltipTrigger-C3aN0eJB-DwV7p8FS.js";import"./ods-react121-5kwUyuQy.js";import"./index-CSeLFT3z.js";import"./lz-string-U2heoObX.js";import"./ResetTheme-xqxcB8cs.js";import"./tokens-BtVMeYnn.js";import"./Link-TMoA1i18-BDwROQOD.js";import"./Divider-wQyo85oE-CpSK6tnQ.js";function p(i){const n={em:"em",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...m(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(u,{of:h,name:"Documentation"}),`
`,e.jsx(f,{of:h}),`
`,e.jsx(n.p,{children:e.jsxs(n.em,{children:[e.jsx(n.strong,{children:"Combobox"})," allows users to search, select, and add items from a dynamic or predefined list."]})}),`
`,e.jsx(a,{of:x,sourceState:"none"}),`
`,e.jsx(s,{label:"Overview",level:2}),`
`,e.jsx(w,{aliases:["Autocomplete","Dropdown Search","Autosuggest","Filterable Select"],figmaLink:"https://www.figma.com/design/9jDDTcR4a9jPRFcdjawAlf/ODS---UI-Kit?node-id=6046-9189",githubUrl:"https://github.com/ovh/design-system/tree/master/packages/ods-react/src/components/combobox",name:"Combobox",children:e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Combobox"})," component allows users to search for and select items from a dynamic list of suggestions or a predefined set of allowed values. It supports both single and multiple selection modes and enables users to create new entries."]})}),`
`,e.jsx(s,{label:"Usage",level:2}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.strong,{children:"Combobox"})," is best suited when users need to:"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"search within a dataset and dynamically refine results"}),`
`,e.jsx(n.li,{children:"provide suggestions based on user input (e.g., domain names, tags, predictive search)"}),`
`,e.jsx(n.li,{children:"allow users to add custom values when applicable (e.g., creating tags)"}),`
`]}),`
`,e.jsx(s,{label:"Dos & Don'ts",level:3}),`
`,e.jsx(v,{donts:["- Avoid excessive grouping of items, as too many categories can overwhelm users","- Avoid using combobox when the number of items is very small (except for if the user needs to be able to add their own entries), you can use Select or Radio"],dos:["- Use Combobox for datasets where typing helps filter results","- Suitable for datasets up to a few hundred entries","- Provide meaningful empty states","- Allow users to add custom entries when appropriate"]}),`
`,e.jsx(s,{label:"Best Practices in Context",level:2}),`
`,e.jsx(b,{src:"components/combobox/anatomy.png"}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(o,{kind:l.input,story:r.documentation,children:"Input"})," where the user types the search query. It displays the current input value or selected tags (multiple selection mode)"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Dropdown list"})," displaying a scrollable list of suggested items. Items can be customized using a custom renderer."]}),`
`,e.jsxs(n.li,{children:[e.jsx(o,{kind:l.tag,story:r.documentation,children:"Tag"})," ",e.jsx(n.em,{children:"(multiple selection mode)"})," to display selected items as tags inside the Input field"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Clearable"})," ",e.jsx(o,{kind:l.button,story:r.documentation,children:"Button"})," ",e.jsx(n.em,{children:"(optional)"})," to allow users to clear the input content"]}),`
`,e.jsxs(n.li,{children:[e.jsx(o,{kind:l.spinner,story:r.documentation,children:"Spinner"})," ",e.jsx(n.em,{children:"(optional)"})," to indicate that data is being fetched"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Add entry option"})," ",e.jsx(n.em,{children:"(optional)"})," allows users to create new entries when no matching result is found. The label is customizable"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Empty state message"})," is a customizable message displayed when no suggestion match the query"]}),`
`]}),`
`,e.jsx(s,{label:"Placement",level:2}),`
`,e.jsx(n.p,{children:"The dropdown is positioned below the Input field when there is enough space."}),`
`,e.jsx(n.p,{children:"The dropdown width should match the Input field width."}),`
`,e.jsx(n.p,{children:"In multiple selection mode, the Input field height grows dynamically to accommodate selected tags."}),`
`,e.jsx(s,{label:"Behavior",level:2}),`
`,e.jsx(s,{label:"Triggering the dropdown",level:3}),`
`,e.jsx(n.p,{children:"The dropdown appears when the user clicks on the input field."}),`
`,e.jsx(s,{label:"Selecting items",level:3}),`
`,e.jsx(n.p,{children:"Selecting an item triggers a custom event, allowing integrators to process the selected value(s)."}),`
`,e.jsx(s,{label:"Single selection mode",level:4}),`
`,e.jsx(n.p,{children:"Clicking on an item selects it, closes the dropdown, and updates the Input field value."}),`
`,e.jsx(n.p,{children:"If the user exits the field without selecting an item, the input reverts to the placeholder or the last selected value (if any)."}),`
`,e.jsx(s,{label:"Creating new entries",level:3}),`
`,e.jsxs(n.p,{children:["User can create new entries when no matching result exists. An ",e.jsx(n.strong,{children:'"Add entry"'})," option appears at the top of the dropdown (label is customizable)."]}),`
`,e.jsx(n.p,{children:'New entries can be added by clicking on the "Add entry" option.'}),`
`,e.jsx(s,{label:"Case sensitivity rules",level:4}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[`
`,e.jsx(n.p,{children:'search input is case-insensitive (e.g., searching for "a" will match "A")'}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(n.p,{children:"newly created entries are not case-sensitive"}),`
`]}),`
`]}),`
`,e.jsx(n.p,{children:"Users cannot create an entry that is already selected as a tag."}),`
`,e.jsx(n.p,{children:'If a custom entry added via "Add Entry" option is removed, it does not reappear in the dropdown, as it was not part of the original list.'}),`
`,e.jsx(s,{label:"Clearable Button",level:3}),`
`,e.jsx(n.p,{children:"If the clearable option is enabled, a dedicated Button appears inside the Input field when it contains text:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"clicking the clearable Button resets the Input field, removing any entered text or selected value(s)"}),`
`,e.jsx(n.li,{children:"in multiple selection mode, only the current Input text is cleared; selected tags remain"}),`
`]}),`
`,e.jsx(s,{label:"Loading state",level:3}),`
`,e.jsx(n.p,{children:"A Spinner can be displayed in the Input field when results are being fetched."}),`
`,e.jsx(s,{label:"Empty state",level:3}),`
`,e.jsx(n.p,{children:"When no matching results are found, a customizable message is displayed in the dropdown."}),`
`,e.jsx(n.p,{children:'This state can be combined with the "Add entry" option.'}),`
`,e.jsx(s,{label:"Grouped items",level:3}),`
`,e.jsx(n.p,{children:"Items can be categorized into groups in both single and multiple selection modes."}),`
`,e.jsx(n.p,{children:"Group titles cannot be selected, clicked and are excluded from search."}),`
`,e.jsx(s,{label:"Navigation",level:2}),`
`,e.jsx(s,{label:"Focus management",level:3}),`
`,e.jsxs(n.p,{children:["The Input field can be focused using the ",e.jsx(t,{children:"Tab"})," key. Pressing ",e.jsx(t,{children:"Tab"})," again moves focus to the next element and closes the dropdown."]}),`
`,e.jsxs(n.p,{children:["If the Input field is clearable, pressing ",e.jsx(t,{children:"Tab"})," first moves focus to the clear button, then to the next element."]}),`
`,e.jsxs(n.p,{children:["Pressing ",e.jsx(t,{children:"Shift"})," + ",e.jsx(t,{children:"Tab"})," moves focus to the previous interactive element without confirming any item."]}),`
`,e.jsx(s,{label:"General keyboard shortcuts",level:3}),`
`,e.jsxs(n.p,{children:["Pressing ",e.jsx(t,{children:"Arrow Up"}),"/",e.jsx(t,{children:"Arrow Down"})," navigates through items in the dropdown."]}),`
`,e.jsxs(n.p,{children:["Pressing ",e.jsx(t,{children:"Backspace"})," deletes the last character in the Input field (it does not clear the entire field at once)."]}),`
`,e.jsxs(n.p,{children:["Pressing ",e.jsx(t,{children:"Enter"})," selects the hovered item and closes the dropdown."]}),`
`,e.jsxs(n.p,{children:["Pressing ",e.jsx(t,{children:"Escape"})," closes the dropdown without selection."]}),`
`,e.jsx(s,{label:"Multiple selection mode",level:4}),`
`,e.jsxs(n.p,{children:["Pressing ",e.jsx(t,{children:"Arrow Left"}),"/",e.jsx(t,{children:"Arrow Right"})," navigates between selected tags."]}),`
`,e.jsxs(n.p,{children:["Pressing ",e.jsx(t,{children:"Backspace"})," while focusing a tag will remove it."]}),`
`,e.jsxs(n.p,{children:["Pressing ",e.jsx(t,{children:"Enter"})," while focusing a tag will remove it."]}),`
`,e.jsx(s,{label:"Accessibility",level:2}),`
`,e.jsxs(n.p,{children:["This component complies with the ",e.jsx(y,{href:"https://www.w3.org/WAI/ARIA/apg/patterns/combobox/",children:"Combobox WAI-ARIA design pattern"}),"."]}),`
`,e.jsx(s,{label:"Always provide an explicit label",level:3}),`
`,e.jsxs(n.p,{children:["Every ",e.jsx(n.strong,{children:"Combobox"})," must have a clear and explicit label to ensure that users (especially screen reader users) understand its purpose, using either ",e.jsx(n.strong,{children:"FormField"})," or a native label tag."]}),`
`,e.jsx(a,{of:j,sourceState:"shown"}),`
`,e.jsxs(n.p,{children:[e.jsx(c,{name:d.circleCheck,style:{color:"var(--ods-color-success-500)"}})," Screen readers will announce the label, the field and its content."]}),`
`,e.jsx(s,{label:"Override action context",level:3}),`
`,e.jsx(n.p,{children:"To provide more context on the interactive elements, you can provide your own custom translations to the component."}),`
`,e.jsx(a,{of:g,sourceState:"shown"}),`
`,e.jsxs(n.p,{children:[e.jsx(c,{name:d.circleCheck,style:{color:"var(--ods-color-success-500)"}})," Screen readers will announce the label, the field, its content and custom label of focused action."]})]})}function Ae(i={}){const{wrapper:n}={...m(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(p,{...i})}):p(i)}export{Ae as default};
