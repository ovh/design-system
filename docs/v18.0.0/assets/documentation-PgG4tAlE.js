import{j as e}from"./jsx-runtime-Dn0LW--f.js";import{u as r}from"./index-DeyDdHvX.js";import{M as a,C as c,d as i}from"./index-BM3JsZOq.js";import{B as d}from"./banner-DPlTyHjv.js";import{D as s,O as h}from"./datepicker.stories-DtaK0BM2.js";import{I as l,A as p}from"./identity-card-CwN41yUF.js";import"./iframe-6_jBXMSq.js";import"../sb-preview/runtime.js";import"./commonjsHelpers-Cpj98o6Y.js";import"./index-B_J8iUie.js";import"./index-DX_4BEHg.js";import"./index-DrFu-skq.js";import"./index-DryTTbHl.js";import"./lit-html-D-ZEPr28.js";import"./control-C1r2wu67.js";import"./ods-toggle2-LnXcgd5r.js";import"./chunk-FAE4I7JY-v0Th3BC0.js";function o(t){const n={a:"a",code:"code",em:"em",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...r(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{of:s,name:"Documentation"}),`
`,e.jsx(d,{of:s}),`
`,e.jsx(n.p,{children:e.jsxs(n.em,{children:["A ",e.jsx(n.strong,{children:"Datepicker"})," component is used to allow users to select a date. They can navigate through days, months and years:"]})}),`
`,e.jsx(c,{of:h,sourceState:"none"}),`
`,e.jsx(n.h2,{id:"overview",children:"Overview"}),`
`,e.jsxs("div",{className:"documentation-overview",children:[e.jsx("div",{children:e.jsx(n.p,{children:`The Datepicker component is used for selecting dates in forms and applications. It provides a user-friendly
interface for choosing dates, ensuring that the date format is consistent and valid. This component can include
features such as disabled dates and custom formats.`})}),e.jsx(l,{aliases:["Calendar"],atomicType:p.molecule,className:"documentation-overview__table",figmaLink:"https://www.figma.com/design/9jDDTcR4a9jPRFcdjawAlf/ODS---UI-Kit?node-id=26-7958",githubUrl:"https://github.com/ovh/design-system/tree/master/packages/ods/src/components/datepicker",name:"Datepicker",relatedComponents:[{name:"Form Field",subtitle:"Form elements"},{name:"Input",subtitle:"Form elements"}]})]}),`
`,e.jsx(n.h2,{id:"anatomy",children:"Anatomy"}),`
`,e.jsx(n.p,{children:e.jsx(n.img,{src:"components/datepicker/anatomy.png",alt:"Component anatomy",title:"Component anatomy"})}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Date Input"}),": it is a text field where users can type a date in expected format."]}),`
`,e.jsx(n.li,{children:e.jsx(n.strong,{children:"Date"})}),`
`,e.jsx(n.li,{children:e.jsx(n.strong,{children:"Calendar Icon"})}),`
`,e.jsx(n.li,{children:e.jsx(n.strong,{children:"Datepicker dropdown"})}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Arrow icon Buttons"})," as month/year pagination: it let users move forward or backward through months or years"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Year picker dropdown"}),": allows to select a different year"]}),`
`,e.jsx(n.li,{children:e.jsx(n.strong,{children:"Date Button"})}),`
`]}),`
`,e.jsx(n.h2,{id:"usage",children:"Usage"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Datepicker"})," is used to ",e.jsx(n.strong,{children:"allow a selection of a specific date"})," in the near future or even past. It is ",e.jsx(n.strong,{children:"useful for scheduling, or defining user dates"}),"."]}),`
`,e.jsx(n.h3,{id:"dos--donts",children:"Dos & Don'ts"}),`
`,e.jsx(i,{className:"documentation-do-table",children:`
| ✅ Do                                                                                                                                                                           |
|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| - Use a **Datepicker** when users need to select a single date or range of dates.                                                                                                  |
| - Use a **Datepicker** for recent or near future dates.                                                                                                                            |
| - When the user has to pick dates in the distant past or future, do choose a more suitable day as **Datepicker** default date when it will open.                                   |
`}),`
`,e.jsx(i,{className:"documentation-dont-table",children:`
| ❌ Don't                                                                                                                                                                                                     |
|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------                            |
| - Use a **Datepicker** when the user has to pick dates in many years in the past or future, a date of birth for example.                                                                                        |
| - Only use a placeholder to indicate the user about the expected format in the date field since it will disappear after typing. Consider adding a label with a Form Field component to indicate the format. |
`}),`
`,e.jsx(n.h2,{id:"placement",children:"Placement"}),`
`,e.jsxs(n.p,{children:["A ",e.jsx(n.strong,{children:"Datepicker"})," can be used in a page as long as there is a need to allow users to pick a date."]}),`
`,e.jsx(n.p,{children:"The date field has a fixed width by default but when used in a form its width should match the other inputs."}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.strong,{children:"Datepicker"})," dropdown has a fixed width and is not adjustable."]}),`
`,e.jsx(n.h2,{id:"behavior",children:"Behavior"}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Opening the Datepicker"})}),`
`,e.jsxs(n.p,{children:["By clicking on the ",e.jsx(n.strong,{children:"Datepicker"})," date field"]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Closing the Datepicker"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["By clicking outside the ",e.jsx(n.strong,{children:"Datepicker"})," dropdown"]}),`
`,e.jsx(n.li,{children:"By selecting a date"}),`
`]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Date picking mode"})}),`
`,e.jsxs(n.p,{children:["Navigating to previous/next month : By clicking on arrow icon ",e.jsx(n.a,{href:"?path=/docs/ods-components-button--documentation",children:e.jsx(n.strong,{children:"Buttons"})})," to navigate through months"]}),`
`,e.jsxs(n.p,{children:["Selecting a month : By clicking on the month selection ",e.jsx(n.a,{href:"?path=/docs/ods-components-button--documentation",children:e.jsx(n.strong,{children:"Button"})})," to switch to month picking mode"]}),`
`,e.jsx(n.p,{children:"Picking a date : By clicking on a date"}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Month picking mode"})}),`
`,e.jsxs(n.p,{children:["Navigating to previous/next year : By clicking on arrow icon ",e.jsx(n.a,{href:"?path=/docs/ods-components-button--documentation",children:e.jsx(n.strong,{children:"Buttons"})})," to navigate through years"]}),`
`,e.jsxs(n.p,{children:["Selecting a year : By clicking on the month selection ",e.jsx(n.a,{href:"?path=/docs/ods-components-button--documentation",children:e.jsx(n.strong,{children:"Button"})})," to switch to year picking mode"]}),`
`,e.jsx(n.p,{children:"Picking a month: By clicking on a month, the dropdown goes back to date picking mode"}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Year picking mode"})}),`
`,e.jsxs(n.p,{children:["Navigating to previous/next range of years : By clicking on arrow icon ",e.jsx(n.a,{href:"?path=/docs/ods-components-button--documentation",children:e.jsx(n.strong,{children:"Buttons"})})," to navigate through years"]}),`
`,e.jsxs(n.p,{children:["Selecting a decade : By clicking on the month selection ",e.jsx(n.a,{href:"?path=/docs/ods-components-button--documentation",children:e.jsx(n.strong,{children:"Button"})})," to switch to year picking mode"]}),`
`,e.jsx(n.p,{children:"Picking a month: By clicking on a month, the dropdown goes back to date picking mode"}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Locale"})}),`
`,e.jsxs(n.p,{children:["Locale determines how the week days will be displayed according to the localization. The ",e.jsx(n.strong,{children:"Datepicker"})," supports the following locales: English (default), German, Spanish, French, Italian, Dutch, Polish and Portuguese."]}),`
`,e.jsx(n.h2,{id:"variation",children:"Variation"}),`
`,e.jsx(n.p,{children:"N/A"}),`
`,e.jsx(n.h2,{id:"accessibility",children:"Accessibility"}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Opening the Datepicker dropdown"})}),`
`,e.jsxs(n.p,{children:["When focusing the ",e.jsx(n.strong,{children:"Datepicker"})," component, the dropdown opens automatically."]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Closing the Datepicker dropdown"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["By pressing the ",e.jsx(n.code,{children:"Escape"})," key"]}),`
`,e.jsxs(n.li,{children:["By removing focus on the ",e.jsx(n.strong,{children:"Datepicker"})]}),`
`]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Selecting a month in the current year"})}),`
`,e.jsxs(n.p,{children:["By pressing ",e.jsx(n.code,{children:"Ctrl/Cmd"})," and ",e.jsx(n.code,{children:"Up"})," Arrow key, the dropdown content is replaced with months to select; navigating with Arrow keys and selecting a month with ",e.jsx(n.code,{children:"Enter"})," key will change the dropdown content back to the date selection."]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Selecting a year"})}),`
`,e.jsxs(n.p,{children:["When in a month selection (see above), pressing ",e.jsx(n.code,{children:"Ctrl/Cmd"})," and ",e.jsx(n.code,{children:"Up"})," Arrow key again will replace the dropdown content with years to select; navigating with Arrow keys and selecting a year with ",e.jsx(n.code,{children:"Enter"})," key will change the dropdown content back to the month selection (see above)."]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Quick Navigating to next or previous month"})}),`
`,e.jsxs(n.p,{children:["By pressing ",e.jsx(n.code,{children:"Ctrl/Cmd"})," and ",e.jsx(n.code,{children:"Left/Right"})," Arrow keys, the user can move to next or previous month dates directly."]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Selecting a date"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["By manually typing a date in the date field in format 'yyyy-mm-dd', and pressing ",e.jsx(n.code,{children:"Enter"})," key"]}),`
`,e.jsxs(n.li,{children:["By pressing Arrow keys to navigate through the days and pressing ",e.jsx(n.code,{children:"Enter"})," key in the ",e.jsx(n.strong,{children:"Datepicker"})," dropdown"]}),`
`]})]})}function T(t={}){const{wrapper:n}={...r(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(o,{...t})}):o(t)}export{T as default};
