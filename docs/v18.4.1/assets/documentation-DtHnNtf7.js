import{j as e,M as c,C as a}from"./index-Rx6QkXSv.js";import{u as r}from"./index-DPrOAYpY.js";import{S as i,O as d}from"./select.stories-BYCVk8RS.js";import{B as h}from"./Banner-BpmhCXha.js";import{I as m,A as p,B as x}from"./IdentityCard-DzjZaQKX.js";import{H as s}from"./Heading-2XnXa8MH.js";import{S as t}from"./StorybookLink-YE2HEeNv.js";import"./iframe-HwRW2g_s.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-D-8MO0q_.js";import"./index-DX_4BEHg.js";import"./index-DrFu-skq.js";import"./controls-DX883vx3.js";import"./validityState-BuENXwQ9.js";import"./index-Dqa08QUn.js";import"./index-BJiUJsri.js";function l(o){const n={code:"code",em:"em",img:"img",li:"li",ol:"ol",p:"p",span:"span",strong:"strong",ul:"ul",...r(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(c,{of:i,name:"Documentation"}),`
`,e.jsx(h,{of:i}),`
`,e.jsx(n.p,{children:e.jsxs(n.em,{children:[e.jsx(n.strong,{children:"Select"})," component is used to select one or more items from a list of values"]})}),`
`,e.jsx(a,{of:d,sourceState:"none"}),`
`,e.jsx(s,{label:"Overview",level:2}),`
`,e.jsx(m,{aliases:["Dropdown"],atomicType:p.molecule,figmaLink:"https://www.figma.com/design/9jDDTcR4a9jPRFcdjawAlf/ODS---UI-Kit?node-id=49-24314",githubUrl:"https://github.com/ovh/design-system/tree/master/packages/ods/src/components/select",name:"Select",relatedComponents:[{name:"Badge"},{name:"Flag"},{name:"Form Field",subtitle:"Form elements"},{name:"Text"}],children:e.jsxs(n.p,{children:["A ",e.jsx(n.strong,{children:"Select"})," is used to allow users to select one or more items from a list that is displayed after clicking on it."]})}),`
`,e.jsx(s,{label:"Anatomy",level:2}),`
`,e.jsx(n.p,{children:e.jsx(n.img,{src:"components/select/anatomy.png",alt:"Component anatomy",title:"Component anatomy"})}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.strong,{children:"Placeholder"})}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Field"})," to represent the ",e.jsx(n.strong,{children:"Select"})," itself. It can be opened and closed on click/trigger."]}),`
`,e.jsxs(n.li,{children:['"Chevron" ',e.jsx(t,{kind:"ODS Components/Icon",label:"Icon",story:"Documentation"})," to inform that the ",e.jsx(n.strong,{children:"Select"})," can display a list of choices."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Dropdown"})," that displays a list of items or options. It is displayed on click/trigger so users can make their choice."]}),`
`]}),`
`,e.jsx(s,{label:"Usage",level:2}),`
`,e.jsxs(n.p,{children:["A ",e.jsx(n.strong,{children:"Select"})," is used to display to the user a list of items or options to choose from."]}),`
`,e.jsx(n.p,{children:"The order of items or options in the list should be sorted as following, depending on the usage:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Frequency"})," of use: recommended item will be listed first"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Alpha"}),": it can be used for countries or city locations for example"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Numeric"}),": it can be used for sizes for example"]}),`
`]}),`
`,e.jsx(s,{label:"Dos & Don'ts",level:3}),`
`,e.jsx(x,{donts:[e.jsxs(n.span,{children:['- Use a Select to display a "yes" or "no" selection: use ',e.jsx(t,{kind:"ODS Components/Form elements/Radio",label:"Radio",story:"Documentation"})," buttons"]}),e.jsxs(n.span,{children:["- Use a Select when a comparison between all items or options is needed: use ",e.jsx(t,{kind:"ODS Components/Form elements/Radio",label:"Radio",story:"Documentation"})," buttons"]})],dos:["- Use a Select when there are 3 or more items to choose from","- Make the order of the Select list based on the frequency of use, alpha or numeric",e.jsxs(n.span,{children:["- Use only one word or a very short ",e.jsx(t,{kind:"ODS Components/Text",label:"Text",story:"Documentation"})," for each item of the list: try to keep it to one line"]})]}),`
`,e.jsx(s,{label:"Placement",level:2}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Select"})," should be vertically aligned with other form components on a same page."]}),`
`,e.jsx(n.p,{children:"It has a width by default, but it can widen to match its container."}),`
`,e.jsx(s,{label:"Behavior",level:2}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Select"})," can be focused and hovered. It also can be disabled. A single option and a group of options can be disabled to be more precise in inner ",e.jsx(n.strong,{children:"Select"})," items."]}),`
`,e.jsxs(n.p,{children:["When an item contains a ",e.jsx(t,{kind:"ODS Components/Text",label:"Text",story:"Documentation"})," that cannot fit on a single line, the ",e.jsx(t,{kind:"ODS Components/Text",label:"Text",story:"Documentation"})," will be truncated."]}),`
`,e.jsx(n.p,{children:"An event is triggered when the selected option changes."}),`
`,e.jsxs(n.p,{children:["An event is triggered on focusing, and a blur event is triggered when the ",e.jsx(n.strong,{children:"Select"})," loses the focus."]}),`
`,e.jsx(s,{label:"Variation",level:2}),`
`,e.jsx(s,{label:"Variant",level:3}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Single selection"}),": Allows the user to select a single item from a dropdown list of options."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Multiple selection"}),": Allows the user to select multiple items from a dropdown list of options. The whole line is clickable."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Grouped options"}),": Related options can be grouped together in both a single and multi ",e.jsx(n.strong,{children:"Select"}),"."]}),`
`]}),`
`,e.jsx(s,{label:"Accessibility",level:2}),`
`,e.jsxs(n.p,{children:["Like all form fields, ",e.jsx(n.strong,{children:"Select"})," component is focusable using ",e.jsx(n.code,{children:"Tabulation"})," key."]}),`
`,e.jsxs(n.p,{children:["When focused, using ",e.jsx(n.code,{children:"Space"})," opens the ",e.jsx(n.strong,{children:"Select"}),"'s dropdown; while opened, user can :"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Use ",e.jsx(n.code,{children:"Up"})," or ",e.jsx(n.code,{children:"Down"})," arrows to highlight an option"]}),`
`,e.jsxs(n.li,{children:["Use ",e.jsx(n.code,{children:"Echap"})," key to close the dropdown without selecting anything new"]}),`
`,e.jsxs(n.li,{children:["Use ",e.jsx(n.code,{children:"Enter"})," or ",e.jsx(n.code,{children:"Tab"})," key to select the highlighted option"]}),`
`]})]})}function I(o={}){const{wrapper:n}={...r(),...o.components};return n?e.jsx(n,{...o,children:e.jsx(l,{...o})}):l(o)}export{I as default};
