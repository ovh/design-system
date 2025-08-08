import{j as e}from"./jsx-runtime-VM66peLj.js";import{useMDXComponents as p}from"./index-DQB45XCM.js";import{a as l,o as a}from"./ods-react61-BFiU7C5S.js";import{M as x,C as c}from"./index-DQDMPrC3.js";import{D as d,O as m,A as j,a as u,b as g}from"./datepicker.stories-CabjTFIC.js";import{B as f}from"./Banner-D5YsTkFA.js";import{I as y,B as v}from"./IdentityCard-C39Eam7s.js";import{H as t}from"./Heading-BTR1K1mm.js";import{S as o}from"./StorybookLink-BJoxMnxL.js";import{S as i,R as r}from"./meta-Dkilg8AS.js";import"./index-D_CmzhJ4.js";import"./index-2w0W-O47-BJ19ihbZ.js";import"./iframe-llaHorau.js";import"./index-ChzAxGiP.js";import"./index-CucsY3YN.js";import"./index-CXQShRbs.js";import"./index-DrFu-skq.js";import"./index-CkQHsVsO.js";import"./FormFieldLabel-DQkMrZpp.js";import"./Text-B1XN51Xz.js";import"./use-locale-context-DLC4Hyvy.js";import"./index-inT8qsA6.js";import"./index-EI2n6HsL.js";import"./portal-CjJhVgfZ.js";import"./use-presence-BH5ft0ba.js";import"./use-event-OCVb0O1l.js";import"./Button-Cu9Xbu09.js";import"./Spinner-BdLZU4dE.js";import"./colors-DSObuHxd.js";import"./icon-name-CL_C5kfn.js";import"./Input-DtgH68sh.js";import"./useI18n-CFuCjRRO.js";import"./controls-BtiQQn1l.js";import"./source-d0g_Nd0q.js";import"./ExternalLink-F7ndcp9T.js";import"./Link-DTswNFmS-CEk9YBDP.js";import"./Divider-DwZugXnI-RR--JbES.js";import"./ods-react222-B9lkGKUh.js";function h(s){const n={code:"code",em:"em",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...p(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(x,{of:d,name:"Documentation"}),`
`,e.jsx(f,{of:d}),`
`,e.jsx(n.p,{children:e.jsxs(n.em,{children:["A ",e.jsx(n.strong,{children:"Datepicker"})," component is used to allow users to select a date. They can navigate through days, months and years."]})}),`
`,e.jsx(c,{of:m,sourceState:"none"}),`
`,e.jsx(t,{label:"Overview",level:2}),`
`,e.jsx(y,{aliases:["Calendar"],figmaLink:"https://www.figma.com/design/9jDDTcR4a9jPRFcdjawAlf/ODS---UI-Kit?node-id=26-7958",githubUrl:"https://github.com/ovh/design-system/tree/master/packages/ods-react/src/components/datepicker",name:"Datepicker",children:e.jsx(n.p,{children:`The Datepicker component is used for selecting dates in forms and applications. It provides a user-friendly
interface for choosing dates, ensuring that the date format is consistent and valid. This component can include
features such as disabled dates and custom formats.`})}),`
`,e.jsx(t,{label:"Usage",level:2}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Datepicker"})," is used to ",e.jsx(n.strong,{children:"allow a selection of a specific date"})," in the near future or even past. It is ",e.jsx(n.strong,{children:"useful for scheduling, or defining user dates"}),"."]}),`
`,e.jsx(t,{label:"Dos & Don'ts",level:3}),`
`,e.jsx(v,{donts:["- Don't rely only on placeholders to communicate the date format. Users need persistent guidance (via a label or hint)","- Don't use a Datepicker when the user must select a date very far in the past or future (e.g., birthdate). Use a more accessible method like dropdowns or manual input","- Don't overload the interface with too many calendar options at once","- Don't default the calendar to an irrelevant month/year"],dos:["- Use a Datepicker when users need to select a specific date","- Choose a relevant default date when opening the calendar (e.g., default to the current year/month when not contextually set)","- Add a label alongside the input to clearly indicate the expected format, especially when the placeholder disappears on input","- Use a Datepicker when users need to select a single date or range of dates","- Use a Datepicker for recent or near future dates","- When the user has to pick dates in the distant past or future, do choose a more suitable day as Datepicker default date when it will open"]}),`
`,e.jsx(t,{label:"Best Practices in Context",level:3}),`
`,e.jsx(n.p,{children:e.jsx(n.img,{src:"components/datepicker/anatomy.png",alt:"Component anatomy",title:"Component anatomy"})}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.strong,{children:"Datepicker"})}),`
`,e.jsx(n.li,{children:e.jsx(n.strong,{children:"Date field"})}),`
`,e.jsx(n.li,{children:e.jsx(n.strong,{children:"Icon button"})}),`
`,e.jsx(n.li,{children:e.jsx(n.strong,{children:"Dropdown calendar"})}),`
`,e.jsx(n.li,{children:e.jsx(n.strong,{children:"Month/Year button"})}),`
`,e.jsx(n.li,{children:e.jsx(n.strong,{children:"Previous/Next month buttons"})}),`
`,e.jsx(n.li,{children:e.jsx(n.strong,{children:"Week days"})}),`
`,e.jsx(n.li,{children:e.jsx(n.strong,{children:"Day"})}),`
`,e.jsx(n.li,{children:e.jsx(n.strong,{children:"Selected day"})}),`
`]}),`
`,e.jsx(t,{label:"Placement",level:2}),`
`,e.jsxs(n.p,{children:["A ",e.jsx(n.strong,{children:"Datepicker"})," can be used in a page as long as there is a need to allow users to pick a date."]}),`
`,e.jsx(n.p,{children:"The date field has a fixed width by default but when used in a form its width should match the other inputs."}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.strong,{children:"Datepicker"})," dropdown has a fixed width and is not adjustable."]}),`
`,e.jsx(t,{label:"Behavior",level:2}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Opening the Datepicker"})}),`
`,e.jsxs(n.p,{children:["By clicking on the ",e.jsx(n.strong,{children:"Datepicker"})," icon button."]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Closing the Datepicker"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["By clicking outside the ",e.jsx(n.strong,{children:"Datepicker"})," dropdown"]}),`
`,e.jsx(n.li,{children:"By selecting a date"}),`
`]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Date picking mode"})}),`
`,e.jsxs(n.p,{children:["Navigating to previous/next month : By clicking on arrow icon ",e.jsx(o,{kind:r.button,story:i.documentation,children:"Buttons"})," to navigate through months"]}),`
`,e.jsxs(n.p,{children:["Selecting a month : By clicking on the month selection ",e.jsx(o,{kind:r.button,story:i.documentation,children:"Button"})," to switch to month picking mode"]}),`
`,e.jsx(n.p,{children:"Picking a date : By clicking on a date"}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Month picking mode"})}),`
`,e.jsxs(n.p,{children:["Navigating to previous/next year : By clicking on arrow icon ",e.jsx(o,{kind:r.button,story:i.documentation,children:"Buttons"})," to navigate through years"]}),`
`,e.jsxs(n.p,{children:["Selecting a year : By clicking on the month selection ",e.jsx(o,{kind:r.button,story:i.documentation,children:"Button"})," to switch to year picking mode"]}),`
`,e.jsx(n.p,{children:"Picking a month: By clicking on a month, the dropdown goes back to date picking mode"}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Year picking mode"})}),`
`,e.jsxs(n.p,{children:["Navigating to previous/next range of years : By clicking on arrow icon ",e.jsx(o,{kind:r.button,story:i.documentation,children:"Buttons"})," to navigate through years"]}),`
`,e.jsxs(n.p,{children:["Selecting a decade : By clicking on the month selection ",e.jsx(o,{kind:r.button,story:i.documentation,children:"Button"})," to switch to year picking mode"]}),`
`,e.jsx(n.p,{children:"Picking a month: By clicking on a month, the dropdown goes back to date picking mode"}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Locale"})}),`
`,e.jsxs(n.p,{children:["Locale determines how the week days will be displayed according to the localization. The ",e.jsx(n.strong,{children:"Datepicker"})," supports the following locales: English (default), German, Spanish, French, Italian, Dutch, Polish and Portuguese."]}),`
`,e.jsx(t,{label:"Navigation",level:2}),`
`,e.jsx(t,{label:"Focus Management",level:3}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.strong,{children:"Datepicker"})," icon button can receive the focus."]}),`
`,e.jsx(n.p,{children:"When the dropdown calendar opens, the focus is moved to the currently selected date, or to today's date if none is selected."}),`
`,e.jsx(n.p,{children:"When the dropdown is closed (via Escape or blur), focus returns to the Datepicker trigger (the input field)."}),`
`,e.jsx(t,{label:"General Keyboard Shortcuts",level:3}),`
`,e.jsxs(n.p,{children:["Pressing ",e.jsx(n.code,{children:"Escape"})," closes the Datepicker dropdown without selecting a date."]}),`
`,e.jsxs(n.p,{children:["Pressing ",e.jsx(n.code,{children:"Tab"})," or ",e.jsx(n.code,{children:"Shift"})," + ",e.jsx(n.code,{children:"Tab"})," moves focus through dropdown controls when open."]}),`
`,e.jsx(t,{label:"Navigating days",level:3}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"Arrow Left"}),": Move to the previous day"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"Arrow Right"}),": Move to the next day"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"Arrow Up"}),": Move to the same weekday of the previous week"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"Arrow Down"}),": Move to the same weekday of the next week"]}),`
`]}),`
`,e.jsx(t,{label:"Jumping within the calendar",level:3}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"Home"}),": Move to the first day of the current month"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"End"}),": Move to the last day of the current month"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"Page Up"}),": Move to the same date of the previous month"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"Page Down"}),": Move to the same date of the next month"]}),`
`]}),`
`,e.jsx(t,{label:"Selecting a date or changing view",level:3}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"Enter"}),": Select the currently focused date and close the dropdown"]}),`
`,e.jsx(n.li,{children:"Typing a valid date format (e.g., yyyy-mm-dd) in the input and pressing Enter will also select the date"}),`
`]}),`
`,e.jsx(t,{label:"Navigating to month/year view",level:3}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"Ctrl"})," / ",e.jsx(n.code,{children:"Cmd"})," + ",e.jsx(n.code,{children:"Arrow Up"})," (first press): Switches to month selection view"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"Ctrl"})," / ",e.jsx(n.code,{children:"Cmd"})," + ",e.jsx(n.code,{children:"Arrow U"}),"p (second press): Switches to year selection view"]}),`
`,e.jsxs(n.li,{children:["Use ",e.jsx(n.code,{children:"Arrow"})," keys to move within month/year grids"]}),`
`,e.jsxs(n.li,{children:["Press ",e.jsx(n.code,{children:"Enter"})," to confirm selection and return to the previous view"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"Ctrl"})," / ",e.jsx(n.code,{children:"Cmd"})," + ",e.jsx(n.code,{children:"Arrow Left"})," / ",e.jsx(n.code,{children:"Arrow Right"}),": Quickly navigate to the previous or next month from date view"]}),`
`]}),`
`,e.jsx(t,{label:"Accessibility",level:2}),`
`,e.jsxs(n.p,{children:["To ensure proper accessibility, the ",e.jsx(n.strong,{children:"Datepicker"})," must be correctly labeled, provide clear guidance on date format and meaningful context when a clearable button is used."]}),`
`,e.jsx(t,{label:"Always provide an explicit label",level:3}),`
`,e.jsxs(n.p,{children:["Every ",e.jsx(n.strong,{children:"Datepicker"}),` must have a clear and explicit label to ensure that users (especially screen reader users) understand its purpose
using either `,e.jsx(n.strong,{children:"FormField"})," or a native label tag."]}),`
`,e.jsx(c,{of:j,sourceState:"shown"}),`
`,e.jsxs(n.p,{children:[e.jsx(l,{name:a.circleCheck,style:{color:"var(--ods-color-success-500)"}}),"  Screen readers will announce the label, the field and its content."]}),`
`,e.jsx(t,{label:"Provide guidance on date format",level:3}),`
`,e.jsxs(n.p,{children:["Since screen readers can only interact with the ",e.jsx(n.strong,{children:"Datepicker"})," input field, it’s important to provide guidance on the expected date format to ensure correct input."]}),`
`,e.jsx(c,{of:u,sourceState:"shown"}),`
`,e.jsxs(n.p,{children:[e.jsx(l,{name:a.circleCheck,style:{color:"var(--ods-color-success-500)"}})," Screen readers will announce the label, the field, its content and the helper."]}),`
`,e.jsx(c,{of:g,sourceState:"shown"}),`
`,e.jsxs(n.p,{children:[e.jsx(l,{name:a.circleCheck,style:{color:"var(--ods-color-success-500)"}})," Screen readers will announce the label, the field, its content and custom label of focused action."]})]})}function ie(s={}){const{wrapper:n}={...p(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(h,{...s})}):h(s)}export{ie as default};
