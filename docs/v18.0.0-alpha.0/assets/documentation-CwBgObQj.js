import{j as e}from"./jsx-runtime-3v6rTKkY.js";import{u as c}from"./index-B5y3xRNA.js";import{M as a,C as h,d as r}from"./index-sugWq352.js";import{B as l}from"./banner-BU_1gqe2.js";import{D as o,O as p}from"./datepicker.stories-DFeJ9kat.js";import{O as s}from"./index-BjLrujv2.js";import{O as i}from"./index-DB8q6ij-.js";import"./iframe-D98u-D7f.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-B_J8iUie.js";import"./index-DX_4BEHg.js";import"./index-DrFu-skq.js";import"./lit-html-D-ZEPr28.js";import"./control-C1r2wu67.js";import"./ods-toggle2-Du4-LCNk.js";import"./ods-icon-MrkrUMg1.js";function d(t){const n={a:"a",code:"code",em:"em",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...c(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{of:o,name:"Documentation"}),`
`,e.jsx(l,{of:o}),`
`,e.jsx(n.p,{children:e.jsxs(n.em,{children:["A ",e.jsx(n.strong,{children:"Datepicker"})," component is used to allow users to select a date. They can navigate through days, months and years:"]})}),`
`,e.jsx(h,{of:p,sourceState:"none"}),`
`,e.jsx(n.h2,{id:"overview",children:"Overview"}),`
`,e.jsxs("div",{children:[e.jsx("div",{id:"description",children:e.jsx(n.p,{children:`The Datepicker component is used for selecting dates in forms and applications. It provides a user-friendly
interface for choosing dates, ensuring that the date format is consistent and valid. This component can include
features such as disabled dates and custom formats.`})}),e.jsx("table",{children:e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("th",{scope:"row",children:"Name"}),e.jsx("td",{children:e.jsx("strong",{children:"Datepicker"})})]}),e.jsxs("tr",{children:[e.jsx("th",{scope:"row",children:"Also known as"}),e.jsx("td",{children:e.jsx("em",{children:"Calendar"})})]}),e.jsxs("tr",{children:[e.jsx("th",{scope:"row",children:"Atomic type"}),e.jsx("td",{children:e.jsxs("a",{href:"https://atomicdesign.bradfrost.com/chapter-2/#molecules",children:["Molecule",e.jsx(s,{name:i.externalLink,style:{fontSize:".7rem",paddingLeft:".3rem",paddingRight:".2rem"}})]})})]}),e.jsxs("tr",{children:[e.jsx("th",{scope:"row",children:"Related component(s)"}),e.jsx("td",{children:e.jsxs(n.p,{children:[e.jsx(n.a,{href:"?path=/docs/ods-components-form-elements-input--documentation",children:e.jsx(n.strong,{children:"Input"})}),", ",e.jsx(n.a,{href:"?path=/docs/ods-components-form-elements-form-field--documentation",children:e.jsx(n.strong,{children:`Form
Field`})})]})})]}),e.jsxs("tr",{children:[e.jsx("th",{scope:"row",children:"Links"}),e.jsxs("td",{children:[e.jsxs("a",{href:"https://www.figma.com/proto/tIKzHa5KvHHyosgIgyBswB/Design-Tokens",children:["Design",e.jsx(s,{name:i.externalLink,style:{fontSize:".7rem",paddingLeft:".3rem",paddingRight:".2rem"}})]}),e.jsx("br",{}),e.jsxs("a",{href:"https://github.com/ovh/design-system/tree/master/packages/components/src/datepicker",children:["Github",e.jsx(s,{name:i.externalLink,style:{fontSize:".7rem",paddingLeft:".3rem",paddingRight:".2rem"}})]})]})]})]})})]}),`
`,e.jsx(n.h2,{id:"anatomy",children:"Anatomy"}),`
`,e.jsx(n.p,{children:e.jsx(n.img,{src:"components/datagrid/anatomy.png",alt:"Component anatomy",title:"Component anatomy"})}),`
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
`,e.jsx(r,{children:`
| ✅ Do                                                                                                                                                                           |
|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| - Use a **Datepicker** when users need to select a single date or range of dates.                                                                                                  |
| - Use a **Datepicker** for recent or near future dates.                                                                                                                            |
| - When the user has to pick dates in the distant past or future, do choose a more suitable day as **Datepicker** default date when it will open.                                   |
`}),`
`,e.jsx(r,{children:`
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
`]})]})}function O(t={}){const{wrapper:n}={...c(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(d,{...t})}):d(t)}export{O as default};
