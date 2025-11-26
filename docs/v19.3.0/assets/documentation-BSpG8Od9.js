import{j as e}from"./jsx-runtime-Cfl8ynUo.js";import{useMDXComponents as d}from"./index-ZwkxtaJJ.js";import{t as h,l as m}from"./ods-react60-DssFCbzP.js";import{M as p}from"./index-9orhCFJa.js";import{T as r,O as u,A as x}from"./timepicker.stories-D2vf92ZA.js";import{A as j}from"./Anatomy-DkXJCwiR.js";import{B as f}from"./Banner-DiJ2utjo.js";import{I as g,B as b}from"./IdentityCard-0vzhW5ZM.js";import{C as o}from"./Canvas-CreDMEws.js";import{H as s}from"./Heading-eINcjqM4.js";import{S as t}from"./StorybookLink-CMOdzit3.js";import{S as l,R as c}from"./meta-t9Q7ez2Q.js";import"./index-jIWwRBLr.js";import"./index-CWkFp9WS-BSIT86NH.js";import"./iframe-BRevKSH1.js";import"./index-DWDEzXrj.js";import"./index-N93khynk.js";import"./index-CXQShRbs.js";import"./index-DrFu-skq.js";import"./FormFieldLabel-B8-lDkmb.js";import"./index-CqY9YpN0.js";import"./Text-DyiJ5nHV.js";import"./Input-DRCIBq_k.js";import"./useI18n-C0NLVYPv.js";import"./Button-B-GJ-1TA.js";import"./Spinner-DJB5ZadI.js";import"./colors-DSObuHxd.js";import"./icon-name-C581wThh.js";import"./SelectControl-BYYgJB15.js";import"./index-BOgpNz4u.js";import"./use-locale-context-6s5qsrWI.js";import"./portal--PO1aV1j.js";import"./use-presence-Dwt5F0sJ.js";import"./use-event-c9j7vq_1.js";import"./index-CgXDLFtf.js";import"./index-DEFWe41X.js";import"./use-field-context-BOfmBRZb.js";import"./controls-BtiQQn1l.js";import"./Table-BvR76ybm-DzE94PQp.js";import"./ExternalLink-C0Msq_QQ.js";import"./Link-CIjoG_UN-BDwROQOD.js";import"./Table-u83oGl00.js";import"./TooltipTrigger-CizyLvLy-D53hI2Ct.js";import"./index-blQ1D1fB.js";import"./lz-string-U2heoObX.js";import"./source-CPEZJ6oD.js";import"./ResetTheme-BVzaMHe3.js";import"./tokens-VHDJ0kGa.js";function a(i){const n={code:"code",em:"em",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...d(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(p,{of:r,name:"Documentation"}),`
`,e.jsx(f,{of:r}),`
`,e.jsx(n.p,{children:e.jsxs(n.em,{children:["A ",e.jsx(n.strong,{children:"Timepicker"})," is a component that allows users to select a time from a list or set a specific time."]})}),`
`,e.jsx(o,{of:u,sourceState:"none"}),`
`,e.jsx(s,{label:"Overview",level:2}),`
`,e.jsx(g,{aliases:["Time"],figmaLink:"https://www.figma.com/design/9jDDTcR4a9jPRFcdjawAlf/ODS---UI-Kit?node-id=53-11662",githubUrl:"https://github.com/ovh/design-system/tree/master/packages/ods-react/src/components/timepicker",name:"Timepicker",children:e.jsxs(n.p,{children:["The ",e.jsx(n.strong,{children:"Timepicker"})," component is used for selecting times in forms and applications. It provides an interface for users to choose a time, ensuring the format is consistent and valid. The component can include features like 12-hour or 24-hour formats, increments, and disabled times."]})}),`
`,e.jsx(s,{label:"Usage",level:2}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Timepicker"})," is used to allow a selection of a specific time."]}),`
`,e.jsx(n.p,{children:"It is useful for scheduling such as planning a meeting."}),`
`,e.jsxs(n.p,{children:["A ",e.jsx(n.strong,{children:"Timepicker"})," field includes the hour, minutes and optionally seconds. It can be followed by an AM/PM indicator."]}),`
`,e.jsx(n.p,{children:"For some use case, an optional timezone Select can be added to allow users to select their desired timezone from a list of options."}),`
`,e.jsx(s,{label:"Dos & Don'ts",level:3}),`
`,e.jsx(b,{donts:["- Don't use a placeholder as a label since it disappears on input and fails accessibility standards","- Don't rely on a placeholder to convey critical information like format or timezone. This should be communicated through helper text or labels","- Don't use a Timepicker for ambiguous or unclear time selection use cases. Ensure it is the right fit for your form flow and user intent","- Don't expose all global timezones unless necessary"],dos:["- Use a Timepicker when users need to select a specific time, especially for scheduling or planning scenarios","- Always pair the Timepicker with a clear label and/or helper text","- Combine the Timepicker with a datepicker when both date and time selection are needed in the same context","- When offering timezone selection, provide a restricted and relevant list to avoid overwhelming users. Limit options based on business relevance or geography"]}),`
`,e.jsx(s,{label:"Best Practices in Context",level:3}),`
`,e.jsx(j,{src:"components/timepicker/anatomy.png"}),`
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
`,e.jsxs(n.p,{children:["It has the same states and behaviors for each inner component (i.e. ",e.jsx(t,{kind:c.input,story:l.documentation,children:"Input"})," and ",e.jsx(t,{kind:c.select,story:l.documentation,children:"Select"}),")."]}),`
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
`]}),`
`,e.jsx(s,{label:"Accessibility",level:2}),`
`,e.jsxs(n.p,{children:["To ensure proper accessibility, the ",e.jsx(n.strong,{children:"Timepicker"})," component must be correctly labeled."]}),`
`,e.jsx(s,{label:"Always provide an explicit label",level:3}),`
`,e.jsxs(n.p,{children:["Every ",e.jsx(n.strong,{children:"Timepicker"}),` must have a clear and explicit label to ensure that users (especially screen reader users) understand its purpose,
using either `,e.jsx(n.strong,{children:"FormField"})," or a native label tag."]}),`
`,e.jsx(o,{of:x,sourceState:"shown"}),`
`,e.jsxs(n.p,{children:[e.jsx(h,{name:m.circleCheck,style:{color:"var(--ods-color-success-500)"}})," Screen readers will announce the label, the input time and the select field."]})]})}function ue(i={}){const{wrapper:n}={...d(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(a,{...i})}):a(i)}export{ue as default};
