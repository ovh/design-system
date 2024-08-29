import{j as e}from"./jsx-runtime-Dn0LW--f.js";import{u as r}from"./index-DeyDdHvX.js";import{M as l,C as c,d as s}from"./index-BM3JsZOq.js";import{B as d}from"./banner-DPlTyHjv.js";import{S as t,O as a}from"./select.stories-BWQe2xM0.js";import{I as h,A as m}from"./identity-card-CwN41yUF.js";import"./iframe-6_jBXMSq.js";import"../sb-preview/runtime.js";import"./commonjsHelpers-Cpj98o6Y.js";import"./index-B_J8iUie.js";import"./index-DX_4BEHg.js";import"./index-DrFu-skq.js";import"./lit-html-D-ZEPr28.js";import"./control-C1r2wu67.js";import"./index-DryTTbHl.js";import"./ods-toggle2-LnXcgd5r.js";import"./chunk-FAE4I7JY-v0Th3BC0.js";function i(o){const n={a:"a",code:"code",em:"em",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...r(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{of:t,name:"Documentation"}),`
`,e.jsx(d,{of:t}),`
`,e.jsx(n.p,{children:e.jsxs(n.em,{children:[e.jsx(n.strong,{children:"Select"})," component is used to select one or more items from a list of values"]})}),`
`,e.jsx(c,{of:a,sourceState:"none"}),`
`,e.jsx(n.h2,{id:"overview",children:"Overview"}),`
`,e.jsxs("div",{className:"documentation-overview",children:[e.jsx("div",{children:e.jsxs(n.p,{children:["A ",e.jsx(n.strong,{children:"Select"})," is used to allow users to select one or more items from a list that is displayed after clicking on it."]})}),e.jsx(h,{aliases:["Dropdown"],atomicType:m.molecule,className:"documentation-overview__table",figmaLink:"https://www.figma.com/design/9jDDTcR4a9jPRFcdjawAlf/ODS---UI-Kit?node-id=49-24314",githubUrl:"https://github.com/ovh/design-system/tree/master/packages/ods/src/components/select",name:"Select",relatedComponents:[{name:"Badge"},{name:"Flag"},{name:"Form Field",subtitle:"Form elements"},{name:"Text"}]})]}),`
`,e.jsx(n.h2,{id:"anatomy",children:"Anatomy"}),`
`,e.jsx(n.p,{children:e.jsx(n.img,{src:"components/select/anatomy.png",alt:"Component anatomy",title:"Component anatomy"})}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.strong,{children:"Placeholder"})}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Field"})," to represent the ",e.jsx(n.strong,{children:"Select"})," itself. It can be opened and closed on click/trigger."]}),`
`,e.jsxs(n.li,{children:['"Chevron" ',e.jsx(n.a,{href:"?path=/docs/ods-components-icon--documentation",children:e.jsx(n.strong,{children:"Icon"})})," to inform that the ",e.jsx(n.strong,{children:"Select"})," can display a list of choices."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Dropdown"})," that displays a list of items or options. It is displayed on click/trigger so users can make their choice."]}),`
`]}),`
`,e.jsx(n.h2,{id:"usage",children:"Usage"}),`
`,e.jsxs(n.p,{children:["A ",e.jsx(n.strong,{children:"Select"})," is used to display to the user a list of items or options to choose from."]}),`
`,e.jsx(n.p,{children:"The order of items or options in the list should be sorted as following, depending on the usage:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Frequency"})," of use: recommended item will be listed first"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Alpha"}),": it can be used for countries or city locations for example"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Numeric"}),": it can be used for sizes for example"]}),`
`]}),`
`,e.jsx(n.h3,{id:"dos--donts",children:"Dos & Don'ts"}),`
`,e.jsx(s,{className:"documentation-do-table",children:`
| ✅ Do                                                                                                                                                                           |
|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| - Use a **Select** when there are 3 or more items to choose from.                                                                                                              |
| - Make the order of the **Select** list based on the frequency of use, alpha or numeric.                                                                                       |
| - Use only one word or a very short [**Text**](?path=/docs/ods-components-text--documentation) for each item of the list: try to keep it to one line.                   |
`}),`
`,e.jsx(s,{className:"documentation-dont-table",children:`
| ❌ Don't                                                                                                                                                                          |
|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| - Use a **Select** to display a "yes" or "no" selection: use [**Radio**](?path=/docs/ods-components-form-elements-radio--documentation) buttons                                           |
| - Use a **Select** when a comparison between all items or options is needed: use [**Radio**](?path=/docs/ods-components-form-elements-radio--documentation) buttons                       |
`}),`
`,e.jsx(n.h2,{id:"placement",children:"Placement"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Select"})," should be vertically aligned with other form components on a same page."]}),`
`,e.jsx(n.p,{children:"It has a width by default, but it can widen to match its container."}),`
`,e.jsx(n.h2,{id:"behavior",children:"Behavior"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Select"})," can be focused and hovered. It also can be disabled. A single option and a group of options can be disabled to be more precise in inner ",e.jsx(n.strong,{children:"Select"})," items."]}),`
`,e.jsxs(n.p,{children:["When an item contains a ",e.jsx(n.a,{href:"?path=/docs/ods-components-text--documentation",children:e.jsx(n.strong,{children:"Text"})})," that cannot fit on a single line, the ",e.jsx(n.a,{href:"?path=/docs/ods-components-text--documentation",children:e.jsx(n.strong,{children:"Text"})})," will be truncated."]}),`
`,e.jsx(n.p,{children:"An event is triggered when the selected option changes."}),`
`,e.jsxs(n.p,{children:["An event is triggered on focusing, and a blur event is triggered when the ",e.jsx(n.strong,{children:"Select"})," loses the focus."]}),`
`,e.jsx(n.h2,{id:"variation",children:"Variation"}),`
`,e.jsx(n.h3,{id:"variant",children:"Variant"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Single selection"}),": Allows the user to select a single item from a dropdown list of options."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Multiple selection"}),": Allows the user to select multiple items from a dropdown list of options. The whole line is clickable."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Grouped options"}),": Related options can be grouped together in both a single and multi ",e.jsx(n.strong,{children:"Select"}),"."]}),`
`]}),`
`,e.jsx(n.h2,{id:"accessibility",children:"Accessibility"}),`
`,e.jsxs(n.p,{children:["Like all form fields, ",e.jsx(n.strong,{children:"Select"})," component is focusable using ",e.jsx(n.code,{children:"Tabulation"})," key."]}),`
`,e.jsxs(n.p,{children:["When focused, using ",e.jsx(n.code,{children:"Space"})," opens the ",e.jsx(n.strong,{children:"Select"}),"'s dropdown; while opened, user can :"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Use ",e.jsx(n.code,{children:"Up"})," or ",e.jsx(n.code,{children:"Down"})," arrows to highlight an option"]}),`
`,e.jsxs(n.li,{children:["Use ",e.jsx(n.code,{children:"Echap"})," key to close the dropdown without selecting anything new"]}),`
`,e.jsxs(n.li,{children:["Use ",e.jsx(n.code,{children:"Enter"})," or ",e.jsx(n.code,{children:"Tab"})," key to select the highlighted option"]}),`
`]})]})}function M(o={}){const{wrapper:n}={...r(),...o.components};return n?e.jsx(n,{...o,children:e.jsx(i,{...o})}):i(o)}export{M as default};
