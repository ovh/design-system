import{j as e}from"./jsx-runtime-VM66peLj.js";import{useMDXComponents as d}from"./index-DQB45XCM.js";import{M as c,C as h}from"./index-CTRIvuAa.js";import{C as r,O as p}from"./combobox.stories-l-18YaZW.js";import{B as m}from"./Banner-DKEGGZmZ.js";import{I as u,A as x,B as g}from"./IdentityCard-DMALWF_P.js";import{H as t}from"./Heading-BKRI_kjA.js";import{S as i}from"./StorybookLink-DMr2bWgk.js";import{S as o,R as l}from"./meta-Ci0gAceS.js";import"./index-D_CmzhJ4.js";import"./iframe-B1k00A9N.js";import"./index-ChzAxGiP.js";import"./index-CucsY3YN.js";import"./index-CXQShRbs.js";import"./index-DrFu-skq.js";import"./element-BmbJTp3e.js";import"./collection-DMrs6jU3.js";import"./use-locale-context-BQVaQ0H3.js";import"./portal-Bd62KldU.js";import"./use-presence-Cqrqn20p.js";import"./use-event-OCVb0O1l.js";import"./index-xSrPfE2G.js";import"./index-DninfMAu.js";import"./index-DHCC0GIt.js";import"./use-field-context-A_pa20cf.js";import"./index-CkQHsVsO.js";import"./Input-Pkw6XJuX.js";import"./Button-CbWLwkmI.js";import"./Spinner-BC3A9yP9.js";import"./colors-DSObuHxd.js";import"./FormFieldLabel-DjB85afw.js";import"./Text-KX3Hvvn9.js";import"./icon-name-BOrBmUKT.js";import"./Tag-B60iwTLj.js";import"./controls-BtiQQn1l.js";import"./ExternalLink-DJ00RbPw.js";import"./ods-react60-Yebt9vXY.js";import"./index-2w0W-O47-BJ19ihbZ.js";import"./Link-D8k51sak-CbRDKo-E.js";import"./ods-react214-B9lkGKUh.js";function a(s){const n={code:"code",em:"em",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...d(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(c,{of:r,name:"Documentation"}),`
`,e.jsx(m,{of:r}),`
`,e.jsx(n.p,{children:e.jsxs(n.em,{children:[e.jsx(n.strong,{children:"Combobox"})," allows users to search, select, and add items from a dynamic or predefined list."]})}),`
`,e.jsx(h,{of:p,sourceState:"none"}),`
`,e.jsx(t,{label:"Overview",level:2}),`
`,e.jsx(u,{aliases:["Autocomplete","Dropdown Search","Autosuggest","Filterable Select"],atomicType:x.organism,figmaLink:"https://www.figma.com/design/9jDDTcR4a9jPRFcdjawAlf/ODS---UI-Kit?node-id=6046-9189",githubUrl:"https://github.com/ovh/design-system/tree/master/packages/ods/src/components/combobox",name:"Combobox",children:e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Combobox"})," component allows users to search for and select items from a dynamic list of suggestions or a predefined set of allowed values. It supports both single and multiple selection modes and enables users to create new entries."]})}),`
`,e.jsx(t,{label:"Anatomy",level:2}),`
`,e.jsx(n.p,{children:e.jsx(n.img,{src:"components/combobox/anatomy.png",alt:"Component anatomy",title:"Component anatomy"})}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(i,{kind:l.input,story:o.documentation,children:"Input"})," where the user types the search query. It displays the current input value or selected tags (multiple selection mode)"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Dropdown list"})," displaying a scrollable list of suggested items. Items can be customized using a custom renderer."]}),`
`,e.jsxs(n.li,{children:[e.jsx(i,{kind:l.tag,story:o.documentation,children:"Tag"})," ",e.jsx(n.em,{children:"(multiple selection mode)"})," to display selected items as tags inside the Input field"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Clearable"})," ",e.jsx(i,{kind:l.button,story:o.documentation,children:"Button"})," ",e.jsx(n.em,{children:"(optional)"})," to allow users to clear the input content"]}),`
`,e.jsxs(n.li,{children:[e.jsx(i,{kind:l.spinner,story:o.documentation,children:"Spinner"})," ",e.jsx(n.em,{children:"(optional)"})," to indicate that data is being fetched"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Add entry option"})," ",e.jsx(n.em,{children:"(optional)"})," allows users to create new entries when no matching result is found. The label is customizable"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Empty state message"})," is a customizable message displayed when no suggestion match the query"]}),`
`]}),`
`,e.jsx(t,{label:"Usage",level:2}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.strong,{children:"Combobox"})," is best suited when users need to:"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"search within a dataset and dynamically refine results"}),`
`,e.jsx(n.li,{children:"provide suggestions based on user input (e.g., domain names, tags, predictive search)"}),`
`,e.jsx(n.li,{children:"allow users to add custom values when applicable (e.g., creating tags)"}),`
`]}),`
`,e.jsx(t,{label:"Dos & Don'ts",level:3}),`
`,e.jsx(g,{donts:["- Avoid excessive grouping of items, as too many categories can overwhelm users","- Avoid using combobox when the number of items is very small (except for if the user needs to be able to add their own entries), you can use Select or Radio"],dos:["- Use Combobox for datasets where typing helps filter results","- Suitable for datasets up to a few hundred entries","- Provide meaningful empty states","- Allow users to add custom entries when appropriate"]}),`
`,e.jsx(t,{label:"Placement",level:2}),`
`,e.jsx(n.p,{children:"The dropdown is positioned below the Input field when there is enough space."}),`
`,e.jsx(n.p,{children:"The dropdown width should match the Input field width."}),`
`,e.jsx(n.p,{children:"In multiple selection mode, the Input field height grows dynamically to accommodate selected tags."}),`
`,e.jsx(t,{label:"Behavior",level:2}),`
`,e.jsx(t,{label:"Triggering the dropdown",level:3}),`
`,e.jsx(n.p,{children:"The dropdown appears when the user clicks on the input field."}),`
`,e.jsx(t,{label:"Selecting items",level:3}),`
`,e.jsx(n.p,{children:"Selecting an item triggers a custom event, allowing integrators to process the selected value(s)."}),`
`,e.jsx(t,{label:"Single selection mode",level:4}),`
`,e.jsx(n.p,{children:"Clicking on an item selects it, closes the dropdown, and updates the Input field value."}),`
`,e.jsx(n.p,{children:"If the user exits the field without selecting an item, the input reverts to the placeholder or the last selected value (if any)."}),`
`,e.jsx(t,{label:"Creating new entries",level:3}),`
`,e.jsxs(n.p,{children:["User can create new entries when no matching result exists. An ",e.jsx(n.strong,{children:'"Add entry"'})," option appears at the top of the dropdown (label is customizable)."]}),`
`,e.jsx(n.p,{children:'New entries can be added by clicking on the "Add entry" option.'}),`
`,e.jsx(t,{label:"Case sensitivity rules",level:4}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[`
`,e.jsx(n.p,{children:'search input is case-insensitive (e.g., searching for "a" will match "A")'}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(n.p,{children:'newly created entries are case-sensitive (e.g., adding "cat" will not conflict with an existing "Cat" item)'}),`
`]}),`
`]}),`
`,e.jsx(n.p,{children:"Users cannot create an entry that is already selected as a tag."}),`
`,e.jsx(n.p,{children:'If a custom entry added via "Add Entry" option is removed, it does not reappear in the dropdown, as it was not part of the original list.'}),`
`,e.jsx(t,{label:"Clearable Button",level:3}),`
`,e.jsx(n.p,{children:"If the clearable option is enabled, a dedicated Button appears inside the Input field when it contains text:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"clicking the clearable Button resets the Input field, removing any entered text or selected value(s)"}),`
`,e.jsx(n.li,{children:"the dropdown opens after clearing the Input field"}),`
`,e.jsx(n.li,{children:"in multiple selection mode, only the current Input text is cleared; selected tags remain"}),`
`]}),`
`,e.jsx(t,{label:"Loading state",level:3}),`
`,e.jsx(n.p,{children:"A Spinner can be displayed in the Input field when results are being fetched."}),`
`,e.jsx(t,{label:"Empty state",level:3}),`
`,e.jsx(n.p,{children:"When no matching results are found, a customizable message is displayed in the dropdown."}),`
`,e.jsx(n.p,{children:'This state can be combined with the "Add entry" option.'}),`
`,e.jsx(t,{label:"Grouped items",level:3}),`
`,e.jsx(n.p,{children:"Items can be categorized into groups in both single and multiple selection modes."}),`
`,e.jsx(n.p,{children:"Group titles cannot be selected, clicked and are excluded from search."}),`
`,e.jsx(t,{label:"Navigation",level:2}),`
`,e.jsx(t,{label:"Focus management",level:3}),`
`,e.jsxs(n.p,{children:["The Input field can be focused using the ",e.jsx(n.code,{children:"Tab"})," key. Pressing ",e.jsx(n.code,{children:"Tab"})," again moves focus to the next element and closes the dropdown."]}),`
`,e.jsxs(n.p,{children:["If the Input field is clearable, pressing ",e.jsx(n.code,{children:"Tab"})," first moves focus to the clear button, then to the next element."]}),`
`,e.jsxs(n.p,{children:["Pressing ",e.jsx(n.code,{children:"Shift"})," + ",e.jsx(n.code,{children:"Tab"})," moves focus to the previous interactive element without confirming any item."]}),`
`,e.jsx(t,{label:"General keyboard shortcuts",level:3}),`
`,e.jsxs(n.p,{children:["Pressing ",e.jsx(n.code,{children:"Escape"})," closes the dropdown without selection."]}),`
`,e.jsxs(n.p,{children:["If the user has typed in the Input field but not made a new selection, pressing ",e.jsx(n.code,{children:"Escape"})," resets the Input to the previously selected value. Any unsaved input is discarded."]}),`
`,e.jsx(t,{label:"Single selection mode",level:4}),`
`,e.jsxs(n.p,{children:["Pressing ",e.jsx(n.code,{children:"Arrow Up/Down"})," navigates through items in the dropdown."]}),`
`,e.jsxs(n.p,{children:["Pressing ",e.jsx(n.code,{children:"Enter"})," selects the hovered item and closes the dropdown."]}),`
`,e.jsxs(n.p,{children:["Pressing ",e.jsx(n.code,{children:"Backspace"})," deletes the last character in the Input field (it does not clear the entire field at once)."]})]})}function se(s={}){const{wrapper:n}={...d(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(a,{...s})}):a(s)}export{se as default};
