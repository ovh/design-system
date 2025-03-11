import{j as e,M as c,C as p}from"./index-BCVJDEqf.js";import{u as d}from"./index-_YJSRz3a.js";import{C as r,O as h}from"./combobox.stories-CBDNk3Fr.js";import{B as m}from"./Banner-rrMSB4A0.js";import{I as u,A as x,B as g}from"./IdentityCard-CmaN0nrQ.js";import{H as n}from"./Heading-DYNNEBec.js";import{S as i,O as o,a as l}from"./StorybookLink-D-rUt3MS.js";import"./iframe-B5YUgUg3.js";import"../sb-preview/runtime.js";import"./index-8AfNH5n5.js";import"./index-D-8MO0q_.js";import"./index-DrFu-skq.js";import"./ods-combobox2-BXJ8jrhz.js";import"./index-DAZhnxgO.js";import"./_commonjsHelpers-CLD5em3H.js";import"./debounce-DRefBDpX.js";import"./dom-8hoR-urs.js";import"./overlay-KZpfSxWH.js";import"./ods-button2-dPaqs0uX.js";import"./ods-spinner2-CPyWCS2f.js";import"./ods-icon2-DRPHarK1.js";import"./ods-input2-C6KOqFAM.js";import"./type-B5zI8QxY.js";import"./icon-name-C6aMXAXT.js";import"./ods-tag2-Bb2BMy9d.js";import"./controls-DX883vx3.js";import"./validityState-BuENXwQ9.js";import"./index-BLVG44ao.js";import"./index-CwrMpZKn.js";import"./ods-accordion2-C_uqOg6Y.js";import"./ods-badge-DLluvt0I.js";import"./ods-breadcrumb-item2-C_Ah5FZN.js";import"./ods-link2-CtVFUlMR.js";import"./ods-card-CsxtEQHf.js";import"./ods-checkbox2-CJl-a8ad.js";import"./ods-clipboard2-CewZJu-c.js";import"./ods-tooltip2-CW12aP9b.js";import"./ods-code2-BL2TW0HP.js";import"./ods-datepicker2-CijAhCPy.js";import"./locale-NOa-Gxlr.js";import"./ods-divider-Dtiri0aY.js";import"./ods-divider2-yzIshch6.js";import"./ods-drawer2-DKhK7oOX.js";import"./ods-file-upload2-Ca3mZ5BD.js";import"./ods-progress-bar2-Dg_V5kiw.js";import"./ods-form-field2-BDYkM6lU.js";import"./ods-icon-DTp5PnPI.js";import"./ods-input-CCQ46ZEm.js";import"./ods-link-BCeMi6SV.js";import"./ods-medium2-BnayTic8.js";import"./ods-message-DuyDaLcv.js";import"./ods-modal2-DCK89o-L.js";import"./ods-pagination2-shUGU0gB.js";import"./ods-select2-CEKvSxa4.js";import"./ods-password2-D64-z8ym.js";import"./ods-phone-number2-BL58mHzY.js";import"./ods-popover2-mGbx5HiL.js";import"./ods-quantity2-7U22nj6z.js";import"./ods-radio2-DDJaSdNS.js";import"./ods-range2-wBjnlon-.js";import"./ods-skeleton2-B7sDasgF.js";import"./ods-switch-item2-D-SJNcDd.js";import"./ods-tabs2-ChMEr-fQ.js";import"./ods-table2-oe37kiP3.js";import"./ods-text-BO_pN8NQ.js";import"./ods-textarea2-BDOVTqwb.js";import"./ods-timepicker2-DVnCnUkw.js";import"./ods-toggle2-Bg02aln1.js";function a(s){const t={code:"code",em:"em",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...d(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(c,{of:r,name:"Documentation"}),`
`,e.jsx(m,{of:r}),`
`,e.jsx(t.p,{children:e.jsxs(t.em,{children:[e.jsx(t.strong,{children:"Combobox"})," allows users to search, select, and add items from a dynamic or predefined list."]})}),`
`,e.jsx(p,{of:h,sourceState:"none"}),`
`,e.jsx(n,{label:"Overview",level:2}),`
`,e.jsx(u,{aliases:["Autocomplete","Dropdown Search","Autosuggest","Filterable Select"],atomicType:x.molecule,figmaLink:"https://www.figma.com/design/9jDDTcR4a9jPRFcdjawAlf/ODS---UI-Kit?node-id=6046-9189",githubUrl:"https://github.com/ovh/design-system/tree/master/packages/ods/src/components/combobox",name:"Combobox",relatedComponents:[{name:"Input",subtitle:"Form elements"},{name:"Tag"}],children:e.jsxs(t.p,{children:[e.jsx(t.strong,{children:"Combobox"})," component allows users to search for and select items from a dynamic list of suggestions or a predefined set of allowed values. It supports both single and multiple selection modes and enables users to create new entries."]})}),`
`,e.jsx(n,{label:"Anatomy",level:2}),`
`,e.jsx(t.p,{children:e.jsx(t.img,{src:"components/combobox/anatomy.png",alt:"Component anatomy",title:"Component anatomy"})}),`
`,e.jsxs(t.ol,{children:[`
`,e.jsxs(t.li,{children:[e.jsx(i,{kind:o.input,label:"Input",story:l.documentation})," where the user types the search query. It displays the current input value or selected tags (multiple selection mode)"]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.strong,{children:"Dropdown list"})," displaying a scrollable list of suggested items. Items can be customized using a custom renderer."]}),`
`,e.jsxs(t.li,{children:[e.jsx(i,{kind:o.tag,label:"Tag",story:l.documentation})," ",e.jsx(t.em,{children:"(multiple selection mode)"})," to display selected items as tags inside the Input field"]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.strong,{children:"Clearable"})," ",e.jsx(i,{kind:o.button,label:"Button",story:l.documentation})," ",e.jsx(t.em,{children:"(optional)"})," to allow users to clear the input content"]}),`
`,e.jsxs(t.li,{children:[e.jsx(i,{kind:o.spinner,label:"Spinner",story:l.documentation})," ",e.jsx(t.em,{children:"(optional)"})," to indicate that data is being fetched"]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.strong,{children:"Add entry option"})," ",e.jsx(t.em,{children:"(optional)"})," allows users to create new entries when no matching result is found. The label is customizable"]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.strong,{children:"Empty state message"})," is a customizable message displayed when no suggestion match the query"]}),`
`]}),`
`,e.jsx(n,{label:"Usage",level:2}),`
`,e.jsxs(t.p,{children:["The ",e.jsx(t.strong,{children:"Combobox"})," is best suited when users need to:"]}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsx(t.li,{children:"search within a dataset and dynamically refine results"}),`
`,e.jsx(t.li,{children:"provide suggestions based on user input (e.g., domain names, tags, predictive search)"}),`
`,e.jsx(t.li,{children:"allow users to add custom values when applicable (e.g., creating tags)"}),`
`]}),`
`,e.jsx(n,{label:"Dos & Don'ts",level:3}),`
`,e.jsx(g,{donts:["- Avoid excessive grouping of items, as too many categories can overwhelm users","- Avoid using combobox when the number of items is very small (except for if the user needs to be able to add their own entries), you can use Select or Radio"],dos:["- Use Combobox for datasets where typing helps filter results","- Suitable for datasets up to a few hundred entries","- Provide meaningful empty states","- Allow users to add custom entries when appropriate"]}),`
`,e.jsx(n,{label:"Placement",level:2}),`
`,e.jsx(t.p,{children:"The dropdown is positioned below the Input field when there is enough space."}),`
`,e.jsx(t.p,{children:"The dropdown width should match the Input field width."}),`
`,e.jsx(t.p,{children:"In multiple selection mode, the Input field height grows dynamically to accommodate selected tags."}),`
`,e.jsx(n,{label:"Behavior",level:2}),`
`,e.jsx(n,{label:"Triggering the dropdown",level:3}),`
`,e.jsx(t.p,{children:"The dropdown appears when the user clicks on the input field."}),`
`,e.jsx(n,{label:"Selecting items",level:3}),`
`,e.jsx(t.p,{children:"Selecting an item triggers a custom event, allowing integrators to process the selected value(s)."}),`
`,e.jsx(n,{label:"Single selection mode",level:4}),`
`,e.jsx(t.p,{children:"Clicking on an item selects it, closes the dropdown, and updates the Input field value."}),`
`,e.jsx(t.p,{children:"If the user exits the field without selecting an item, the input reverts to the placeholder or the last selected value (if any)."}),`
`,e.jsx(t.p,{children:"Users cannot select the same item twice; already selected items are removed from the dropdown."}),`
`,e.jsx(n,{label:"Multiple selection mode",level:4}),`
`,e.jsxs(t.p,{children:["Clicking on an item add it as a ",e.jsx(i,{kind:o.tag,label:"Tag",story:l.documentation})," inside the Input field."]}),`
`,e.jsx(t.p,{children:"Selected items do not reappear in the dropdown to avoid duplicates."}),`
`,e.jsx(t.p,{children:"Clicking on a tag removes it."}),`
`,e.jsx(n,{label:"Creating new entries",level:3}),`
`,e.jsxs(t.p,{children:["User can create new entries when no matching result exists. An ",e.jsx(t.strong,{children:'"Add entry"'})," option appears at the top of the dropdown (label is customizable)."]}),`
`,e.jsx(t.p,{children:'New entries can be added by clicking on the "Add entry" option.'}),`
`,e.jsx(n,{label:"Case sensitivity rules",level:4}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsxs(t.li,{children:[`
`,e.jsx(t.p,{children:'search input is case-insensitive (e.g., searching for "a" will match "A")'}),`
`]}),`
`,e.jsxs(t.li,{children:[`
`,e.jsx(t.p,{children:'newly created entries are case-sensitive (e.g., adding "cat" will not conflict with an existing "Cat" item)'}),`
`]}),`
`]}),`
`,e.jsx(t.p,{children:"Users cannot create an entry that is already selected as a tag."}),`
`,e.jsx(t.p,{children:'If a custom entry added via "Add Entry" option is removed, it does not reappear in the dropdown, as it was not part of the original list.'}),`
`,e.jsx(n,{label:"Clearable Button",level:3}),`
`,e.jsx(t.p,{children:"If the clearable option is enabled, a dedicated Button appears inside the Input field when it contains text:"}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsx(t.li,{children:"clicking the clearable Button resets the Input field, removing any entered text or selected value(s)"}),`
`,e.jsx(t.li,{children:"the dropdown opens after clearing the Input field"}),`
`,e.jsx(t.li,{children:"in multiple selection mode, only the current Input text is cleared; selected tags remain"}),`
`]}),`
`,e.jsx(n,{label:"Loading state",level:3}),`
`,e.jsx(t.p,{children:"A Spinner can be displayed in the Input field when results are being fetched."}),`
`,e.jsx(n,{label:"Empty state",level:3}),`
`,e.jsx(t.p,{children:"When no matching results are found, a customizable message is displayed in the dropdown."}),`
`,e.jsx(t.p,{children:'This state can be combined with the "Add entry" option.'}),`
`,e.jsx(n,{label:"Grouped items",level:3}),`
`,e.jsx(t.p,{children:"Items can be categorized into groups in both single and multiple selection modes."}),`
`,e.jsx(t.p,{children:"Group titles cannot be selected, clicked and are excluded from search."}),`
`,e.jsx(n,{label:"Navigation",level:2}),`
`,e.jsx(n,{label:"Focus management",level:3}),`
`,e.jsxs(t.p,{children:["The Input field can be focused using the ",e.jsx(t.code,{children:"Tab"})," key. Pressing ",e.jsx(t.code,{children:"Tab"})," again moves focus to the next element and closes the dropdown."]}),`
`,e.jsxs(t.p,{children:["If the Input field is clearable, pressing ",e.jsx(t.code,{children:"Tab"})," first moves focus to the clear button, then to the next element."]}),`
`,e.jsxs(t.p,{children:["Pressing ",e.jsx(t.code,{children:"Shift"})," + ",e.jsx(t.code,{children:"Tab"})," moves focus to the previous interactive element without confirming any item."]}),`
`,e.jsx(n,{label:"General keyboard shortcuts",level:3}),`
`,e.jsxs(t.p,{children:["Pressing ",e.jsx(t.code,{children:"Escape"})," closes the dropdown without selection."]}),`
`,e.jsxs(t.p,{children:["If the user has typed in the Input field but not made a new selection, pressing ",e.jsx(t.code,{children:"Escape"})," resets the Input to the previously selected value. Any unsaved input is discarded."]}),`
`,e.jsxs(t.p,{children:["No looping with ",e.jsx(t.code,{children:"arrow"})," keys: The navigation stops at the first and last item, it does not loop back."]}),`
`,e.jsx(n,{label:"Single selection mode",level:4}),`
`,e.jsxs(t.p,{children:["Pressing ",e.jsx(t.code,{children:"Arrow Up/Down"})," navigates through items in the dropdown."]}),`
`,e.jsxs(t.p,{children:["Pressing ",e.jsx(t.code,{children:"Enter"})," selects the hovered item and closes the dropdown."]}),`
`,e.jsxs(t.p,{children:["Pressing ",e.jsx(t.code,{children:"Backspace"})," deletes the last character in the Input field (it does not clear the entire field at once)."]}),`
`,e.jsx(n,{label:"Multiple selection mode",level:4}),`
`,e.jsxs(t.p,{children:["Pressing ",e.jsx(t.code,{children:"Arrow Left/Right"})," navigates between selected tags."]}),`
`,e.jsxs(t.p,{children:["Pressing ",e.jsx(t.code,{children:"Backspace"})," has the same behavior as in single selection mode."]}),`
`,e.jsxs(t.p,{children:["Pressing ",e.jsx(t.code,{children:"Enter"}),' removes the currently "focused" tag.']})]})}function Be(s={}){const{wrapper:t}={...d(),...s.components};return t?e.jsx(t,{...s,children:e.jsx(a,{...s})}):a(s)}export{Be as default};
