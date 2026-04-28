import{j as e}from"./jsx-runtime-Cfl8ynUo.js";import{useMDXComponents as h}from"./index-ZwkxtaJJ.js";import{_ as m,n as p}from"./icon-name-BOjNLCTH-CoYid0iC.js";import{k as s}from"./Kbd-Cnje_EfN-CvQx-mOR.js";import{M as u}from"./index-CorwBrna.js";import{T as o,O as x,A as j}from"./timepicker.stories-OA-NzyvW.js";import{A as f}from"./Anatomy-DkXJCwiR.js";import{B as g}from"./Banner-BzsM7Ov4.js";import{B as b}from"./BestPractices-DmW3jiI3.js";import{C as l}from"./Canvas-DmU-XW-X.js";import{H as i}from"./Heading-CqLsFmC8.js";import{I as v}from"./IdentityCard-Dz2mtlUf.js";import{S as t}from"./StorybookLink-fxXoIeO7.js";import{H as w,S as c,R as a}from"./meta-vhIdvDvL.js";import"./index-jIWwRBLr.js";import"./index-CWkFp9WS-BSIT86NH.js";import"./iframe-CTupHpWb.js";import"./index-DWDEzXrj.js";import"./index-N93khynk.js";import"./index-CXQShRbs.js";import"./index-DrFu-skq.js";import"./index-DHp3jGT7.js";import"./index-CqY9YpN0.js";import"./Text-CRk0VKg4.js";import"./context-C_-r2uoG.js";import"./Input-DK0nnZkU.js";import"./useI18n-C0NLVYPv.js";import"./Button-B-GJ-1TA.js";import"./Spinner-DJB5ZadI.js";import"./colors-DSObuHxd.js";import"./icon-name-RfJfucZu.js";import"./index-BWF8qxTS.js";import"./index-BOoY6EQM.js";import"./use-locale-context-CCZDATm7.js";import"./portal-DlVZGAaE.js";import"./use-presence-BEoh9Cc1.js";import"./use-event-c9j7vq_1.js";import"./index-Ceu3MGV2.js";import"./use-field-context-o69zdhW2.js";import"./controls-BtiQQn1l.js";import"./index-CvuQtheM.js";import"./context-Z_Xa7sWf-5kwUyuQy.js";import"./index-D-PjbIVM.js";import"./lz-string-U2heoObX.js";import"./source-CPEZJ6oD.js";import"./ResetTheme-DQ5v3p_P.js";import"./tokens-BrWUS-3i.js";import"./divider-color-DMMH0ySn-B7JauIP0.js";import"./colors-C1Wmnk_L-aAAP9SXj.js";import"./Table-Bof_Nsov-CS9ZUwCH.js";import"./ExternalLink-B7meJZZV.js";import"./Link-JvSirtKN-DiqnrgRb.js";import"./Table-BXVk_N0H.js";function d(r){const n={em:"em",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...h(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(u,{of:o,name:"Documentation"}),`
`,e.jsx(g,{of:o}),`
`,e.jsx(n.p,{children:e.jsxs(n.em,{children:["A ",e.jsx(n.strong,{children:"Timepicker"})," is a component that allows users to select a time from a list or set a specific time."]})}),`
`,e.jsx(l,{of:x,sourceState:"none"}),`
`,e.jsx(i,{label:"Overview",level:2}),`
`,e.jsx(v,{aliases:["Time"],extraLinks:[e.jsx(t,{title:w.formGuidelines,children:"Form Guidelines"})],figmaLink:"https://www.figma.com/design/9jDDTcR4a9jPRFcdjawAlf/ODS---UI-Kit?node-id=53-11662",githubUrl:"https://github.com/ovh/design-system/tree/master/packages/ods-react/src/components/timepicker",name:"Timepicker",children:e.jsxs(n.p,{children:["The ",e.jsx(n.strong,{children:"Timepicker"})," component is used for selecting times in forms and applications. It provides an interface for users to choose a time, ensuring the format is consistent and valid. The component can include features like 12-hour or 24-hour formats, increments, and disabled times."]})}),`
`,e.jsx(i,{label:"Usage",level:2}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Timepicker"})," is used to allow a selection of a specific time."]}),`
`,e.jsx(n.p,{children:"It is useful for scheduling such as planning a meeting."}),`
`,e.jsxs(n.p,{children:["A ",e.jsx(n.strong,{children:"Timepicker"})," field includes the hour, minutes and optionally seconds. It can be followed by an AM/PM indicator."]}),`
`,e.jsx(n.p,{children:"For some use case, an optional timezone Select can be added to allow users to select their desired timezone from a list of options."}),`
`,e.jsx(i,{label:"Dos & Don'ts",level:3}),`
`,e.jsx(b,{donts:["- Don't use a placeholder as a label since it disappears on input and fails accessibility standards","- Don't rely on a placeholder to convey critical information like format or timezone. This should be communicated through helper text or labels","- Don't use a Timepicker for ambiguous or unclear time selection use cases. Ensure it is the right fit for your form flow and user intent","- Don't expose all global timezones unless necessary"],dos:["- Use a Timepicker when users need to select a specific time, especially for scheduling or planning scenarios","- Always pair the Timepicker with a clear label and/or helper text","- Combine the Timepicker with a datepicker when both date and time selection are needed in the same context","- When offering timezone selection, provide a restricted and relevant list to avoid overwhelming users. Limit options based on business relevance or geography"]}),`
`,e.jsx(i,{label:"Best Practices in Context",level:3}),`
`,e.jsx(f,{src:"components/timepicker/anatomy.png"}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.strong,{children:"Timepicker"})}),`
`,e.jsx(n.li,{children:e.jsx(n.strong,{children:"Input field"})}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Timezones select"})," - optional"]}),`
`]}),`
`,e.jsx(i,{label:"Placement",level:2}),`
`,e.jsxs(n.p,{children:["A ",e.jsx(n.strong,{children:"Timepicker"})," can be used in a page as long as there is a need to allow users to pick a time."]}),`
`,e.jsx(n.p,{children:"The time field has a fixed width by default but, when used in a form, its width should match the other inputs."}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Timepicker"})," should be vertically aligned with other form components on a same page."]}),`
`,e.jsx(i,{label:"Behavior",level:2}),`
`,e.jsxs(n.p,{children:["A ",e.jsx(n.strong,{children:"Timepicker"})," can widen to match its container (width of the elements is 50% each)."]}),`
`,e.jsxs(n.p,{children:["It has the same states and behaviors for each inner component (i.e. ",e.jsx(t,{kind:a.input,story:c.documentation,children:"Input"})," and ",e.jsx(t,{kind:a.select,story:c.documentation,children:"Select"}),")."]}),`
`,e.jsx(i,{label:"Navigation",level:2}),`
`,e.jsx(i,{label:"Focus Management",level:3}),`
`,e.jsxs(n.p,{children:["When the ",e.jsx(n.strong,{children:"Timepicker"})," is focused, the first focusable segment (typically the hour Input) receives focus automatically."]}),`
`,e.jsx(n.p,{children:"Focus then moves sequentially through the minute and second inputs (if present), followed by the AM/PM toggle (depending on the browser) and the optional timezone select."}),`
`,e.jsx(n.p,{children:"Each individual segment can receive focus and be navigated independently using the keyboard. If a segment (e.g., seconds or timezone) is not visible or disabled, it is skipped in the tab order."}),`
`,e.jsx(i,{label:"General Keyboard Shortcuts",level:3}),`
`,e.jsxs(n.p,{children:["Pressing ",e.jsx(s,{children:"Tab"})," moves focus forward through all focusable segments of the Timepicker:"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Hour field"}),`
`,e.jsx(n.li,{children:"Minute field"}),`
`,e.jsx(n.li,{children:"Second field (if enabled)"}),`
`,e.jsx(n.li,{children:"AM/PM toggle (if 12-hour format)"}),`
`,e.jsx(n.li,{children:"Time zone Select (if present)"}),`
`]}),`
`,e.jsxs(n.p,{children:["Pressing ",e.jsx(s,{children:"Shift"})," + ",e.jsx(s,{children:"Tab"})," moves focus backward through the segments."]}),`
`,e.jsx(n.p,{children:"When focused on an input segment (hour, minute, second):"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Typing numeric values replaces the current value"}),`
`,e.jsxs(n.li,{children:["Pressing ",e.jsx(s,{children:"Arrow Up"})," increments the value"]}),`
`,e.jsxs(n.li,{children:["Pressing ",e.jsx(s,{children:"Arrow Down"})," decrements the value"]}),`
`,e.jsxs(n.li,{children:["Pressing ",e.jsx(s,{children:"Backspace"})," clears the content"]}),`
`,e.jsxs(n.li,{children:["Pressing ",e.jsx(s,{children:"Home"})," or ",e.jsx(s,{children:"fn"})," + ",e.jsx(s,{children:"Arrow Up"})," increases the value by:",`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"3 units for the hour segment"}),`
`,e.jsx(n.li,{children:"10 units for minutes and seconds"}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:["Pressing ",e.jsx(s,{children:"End"})," or ",e.jsx(s,{children:"fn"})," + ",e.jsx(s,{children:"Arrow Down"})," decreases the value by:",`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"3 units for the hour segment"}),`
`,e.jsx(n.li,{children:"10 units for minutes and seconds"}),`
`]}),`
`]}),`
`]}),`
`,e.jsx(n.p,{children:"When focused on the AM/PM toggle:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Pressing ",e.jsx(s,{children:"Arrow Up"})," or ",e.jsx(s,{children:"Arrow Down"})," switches between AM and PM"]}),`
`]}),`
`,e.jsx(n.p,{children:"When focused on the timezone Select, keyboard shortcuts are similar to the Select component:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Pressing ",e.jsx(s,{children:"Space"})," or ",e.jsx(s,{children:"Arrow Down"})," opens the dropdown"]}),`
`,e.jsxs(n.li,{children:[e.jsx(s,{children:"Arrow"})," keys navigate options"]}),`
`,e.jsxs(n.li,{children:[e.jsx(s,{children:"Enter"})," or ",e.jsx(s,{children:"Tab"})," selects the option and closes the dropdown"]}),`
`,e.jsxs(n.li,{children:["Pressing ",e.jsx(s,{children:"Escape"}),"closes the dropdown"]}),`
`]}),`
`,e.jsx(i,{label:"Accessibility",level:2}),`
`,e.jsxs(n.p,{children:["To ensure proper accessibility, the ",e.jsx(n.strong,{children:"Timepicker"})," component must be correctly labeled."]}),`
`,e.jsx(i,{label:"Always provide an explicit label",level:3}),`
`,e.jsxs(n.p,{children:["Every ",e.jsx(n.strong,{children:"Timepicker"}),` must have a clear and explicit label to ensure that users (especially screen reader users) understand its purpose,
using either `,e.jsx(n.strong,{children:"FormField"})," or a native label tag."]}),`
`,e.jsx(l,{of:j,sourceState:"shown"}),`
`,e.jsxs(n.p,{children:[e.jsx(m,{name:p.circleCheck,style:{color:"var(--ods-color-success-500)"}})," Screen readers will announce the label, the input time and the select field."]})]})}function we(r={}){const{wrapper:n}={...h(),...r.components};return n?e.jsx(n,{...r,children:e.jsx(d,{...r})}):d(r)}export{we as default};
