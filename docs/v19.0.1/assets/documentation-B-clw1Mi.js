import{j as e}from"./jsx-runtime-VM66peLj.js";import{useMDXComponents as a}from"./index-DQB45XCM.js";import{M as d,C as h}from"./index-D1K7mLD0.js";import{T as o,O as m}from"./timepicker.stories-FfU1xQmI.js";import{B as p}from"./Banner-B4K6Zb-5.js";import{I as u,A as x,B as j}from"./IdentityCard-Yo1l2iFh.js";import{H as s}from"./Heading-mtuBTkOf.js";import{S as t}from"./StorybookLink-DMr2bWgk.js";import{S as r,R as l}from"./meta-Ci0gAceS.js";import"./index-D_CmzhJ4.js";import"./iframe-DbJ8Lucp.js";import"./index-ChzAxGiP.js";import"./index-CucsY3YN.js";import"./index-CXQShRbs.js";import"./index-DrFu-skq.js";import"./FormFieldLabel-DjB85afw.js";import"./index-CkQHsVsO.js";import"./Text-KX3Hvvn9.js";import"./Input-Pkw6XJuX.js";import"./Button-CbWLwkmI.js";import"./Spinner-BC3A9yP9.js";import"./colors-DSObuHxd.js";import"./icon-name-BOrBmUKT.js";import"./SelectControl-D8g7ZA4_.js";import"./collection-DMrs6jU3.js";import"./use-locale-context-BQVaQ0H3.js";import"./portal-Bd62KldU.js";import"./use-presence-Cqrqn20p.js";import"./use-event-OCVb0O1l.js";import"./index-xSrPfE2G.js";import"./index-DHCC0GIt.js";import"./use-field-context-A_pa20cf.js";import"./controls-BtiQQn1l.js";import"./ExternalLink-DJ00RbPw.js";import"./ods-react60-Yebt9vXY.js";import"./index-2w0W-O47-BJ19ihbZ.js";import"./Link-D8k51sak-CbRDKo-E.js";import"./ods-react214-B9lkGKUh.js";function c(i){const n={code:"code",em:"em",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...a(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(d,{of:o,name:"Documentation"}),`
`,e.jsx(p,{of:o}),`
`,e.jsx(n.p,{children:e.jsxs(n.em,{children:["A ",e.jsx(n.strong,{children:"Timepicker"})," is a component that allows users to select a time from a list or set a specific time."]})}),`
`,e.jsx(h,{of:m,sourceState:"none"}),`
`,e.jsx(s,{label:"Overview",level:2}),`
`,e.jsx(u,{aliases:["Time"],atomicType:x.organism,figmaLink:"https://www.figma.com/design/9jDDTcR4a9jPRFcdjawAlf/ODS---UI-Kit?node-id=53-11662",githubUrl:"https://github.com/ovh/design-system/tree/master/packages/ods/src/components/timepicker",name:"Timepicker",children:e.jsxs(n.p,{children:["The ",e.jsx(n.strong,{children:"Timepicker"})," component is used for selecting times in forms and applications. It provides an interface for users to choose a time, ensuring the format is consistent and valid. The component can include features like 12-hour or 24-hour formats, increments, and disabled times."]})}),`
`,e.jsx(s,{label:"Usage",level:2}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Timepicker"})," is used to allow a selection of a specific time."]}),`
`,e.jsx(n.p,{children:"It is useful for scheduling such as planning a meeting."}),`
`,e.jsxs(n.p,{children:["A ",e.jsx(n.strong,{children:"Timepicker"})," field includes the hour, minutes and optionally seconds. It can be followed by an AM/PM indicator."]}),`
`,e.jsx(n.p,{children:"For some use case, an optional timezone Select can be added to allow users to select their desired timezone from a list of options."}),`
`,e.jsx(s,{label:"Dos & Don'ts",level:3}),`
`,e.jsx(j,{donts:["- Don't use a placeholder as a label since it disappears on input and fails accessibility standards","- Don't rely on a placeholder to convey critical information like format or timezone. This should be communicated through helper text or labels","- Don't use a Timepicker for ambiguous or unclear time selection use cases. Ensure it is the right fit for your form flow and user intent","- Don't expose all global timezones unless necessary"],dos:["- Use a Timepicker when users need to select a specific time, especially for scheduling or planning scenarios","- Always pair the Timepicker with a clear label and/or helper text","- Combine the Timepicker with a datepicker when both date and time selection are needed in the same context","- When offering timezone selection, provide a restricted and relevant list to avoid overwhelming users. Limit options based on business relevance or geography"]}),`
`,e.jsx(s,{label:"Best Practices in Context",level:3}),`
`,e.jsx(n.p,{children:e.jsx(n.img,{src:"components/timepicker/anatomy.png",alt:"Component anatomy",title:"Component anatomy"})}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.strong,{children:"Timepicker"})}),`
`,e.jsx(n.li,{children:e.jsx(n.strong,{children:"Input field"})}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Timezones select"})," - optional"]}),`
`]}),`
`,e.jsx(s,{label:"Placement",level:2}),`
`,e.jsxs(n.p,{children:["A ",e.jsx(n.strong,{children:"Timepicker"})," can be used in a page as long as there is a need to allow users to pick a time."]}),`
`,e.jsx(n.p,{children:"The time field has a fixed width by default but, when used in a form, its width should match the other inputs."}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Timepicker"})," should be vertically aligned with other form components on a same page."]}),`
`,e.jsx(s,{label:"Behavior",level:2}),`
`,e.jsxs(n.p,{children:["A ",e.jsx(n.strong,{children:"Timepicker"})," can widen to match its container (width of the elements is 50% each)."]}),`
`,e.jsxs(n.p,{children:["It has the same states and behaviors for each inner component (i.e. ",e.jsx(t,{kind:l.input,story:r.documentation,children:"Input"})," and ",e.jsx(t,{kind:l.select,story:r.documentation,children:"Select"}),")."]}),`
`,e.jsx(s,{label:"Navigation",level:2}),`
`,e.jsx(s,{label:"Focus Management",level:3}),`
`,e.jsxs(n.p,{children:["When the ",e.jsx(n.strong,{children:"Timepicker"})," is focused, the first focusable segment (typically the hour Input) receives focus automatically."]}),`
`,e.jsx(n.p,{children:"Focus then moves sequentially through the minute and second inputs (if present), followed by the AM/PM toggle (depending on the browser) and the optional timezone select."}),`
`,e.jsx(n.p,{children:"Each individual segment can receive focus and be navigated independently using the keyboard. If a segment (e.g., seconds or timezone) is not visible or disabled, it is skipped in the tab order."}),`
`,e.jsx(s,{label:"General Keyboard Shortcuts",level:3}),`
`,e.jsxs(n.p,{children:["Pressing ",e.jsx(n.code,{children:"Tab"})," moves focus forward through all focusable segments of the Timepicker:"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Hour field"}),`
`,e.jsx(n.li,{children:"Minute field"}),`
`,e.jsx(n.li,{children:"Second field (if enabled)"}),`
`,e.jsx(n.li,{children:"AM/PM toggle (if 12-hour format)"}),`
`,e.jsx(n.li,{children:"Time zone Select (if present)"}),`
`]}),`
`,e.jsxs(n.p,{children:["Pressing ",e.jsx(n.code,{children:"Shift"})," + ",e.jsx(n.code,{children:"Tab"})," moves focus backward through the segments."]}),`
`,e.jsx(n.p,{children:"When focused on an input segment (hour, minute, second):"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Typing numeric values replaces the current value"}),`
`,e.jsxs(n.li,{children:["Pressing ",e.jsx(n.code,{children:"Arrow Up"})," increments the value"]}),`
`,e.jsxs(n.li,{children:["Pressing ",e.jsx(n.code,{children:"Arrow Down"})," decrements the value"]}),`
`,e.jsxs(n.li,{children:["Pressing ",e.jsx(n.code,{children:"Backspace"})," clears the content"]}),`
`,e.jsxs(n.li,{children:["Pressing ",e.jsx(n.code,{children:"Home"})," or ",e.jsx(n.code,{children:"fn"})," + ",e.jsx(n.code,{children:"Arrow Up"})," increases the value by:",`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"3 units for the hour segment"}),`
`,e.jsx(n.li,{children:"10 units for minutes and seconds"}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:["Pressing ",e.jsx(n.code,{children:"End"})," or ",e.jsx(n.code,{children:"fn"})," + ",e.jsx(n.code,{children:"Arrow Down"})," decreases the value by:",`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"3 units for the hour segment"}),`
`,e.jsx(n.li,{children:"10 units for minutes and seconds"}),`
`]}),`
`]}),`
`]}),`
`,e.jsx(n.p,{children:"When focused on the AM/PM toggle:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Pressing ",e.jsx(n.code,{children:"Arrow Up"})," or ",e.jsx(n.code,{children:"Arrow Down"})," switches between AM and PM"]}),`
`]}),`
`,e.jsx(n.p,{children:"When focused on the timezone Select, keyboard shortcuts are similar to the Select component:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Pressing ",e.jsx(n.code,{children:"Space"})," or ",e.jsx(n.code,{children:"Arrow Down"})," opens the dropdown"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"Arrow"})," keys navigate options"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"Enter"})," or ",e.jsx(n.code,{children:"Tab"})," selects the option and closes the dropdown"]}),`
`,e.jsxs(n.li,{children:["Pressing ",e.jsx(n.code,{children:"Escape"}),"closes the dropdown"]}),`
`]})]})}function ne(i={}){const{wrapper:n}={...a(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(c,{...i})}):c(i)}export{ne as default};
