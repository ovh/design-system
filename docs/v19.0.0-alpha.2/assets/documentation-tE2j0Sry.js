import{j as e}from"./jsx-runtime-VM66peLj.js";import{useMDXComponents as a}from"./index-DQB45XCM.js";import{M as d,C as h}from"./index-BlaLg9GY.js";import{S as l,O as m}from"./select.stories-CDUcmPli.js";import{B as p}from"./Banner-CANn_RZm.js";import{I as x,A as j,B as g}from"./IdentityCard-DkdK44g3.js";import{H as s}from"./Heading-6Mfikk-c.js";import{S as t,a as i,O as r}from"./StorybookLink-Dek5KO7Z.js";import"./index-D_CmzhJ4.js";import"./iframe-CGgj-FAD.js";import"./index-ChzAxGiP.js";import"./index-CucsY3YN.js";import"./index-CXQShRbs.js";import"./index-DrFu-skq.js";import"./FormFieldLabel-BxxkSoC9.js";import"./index-CkQHsVsO.js";import"./index-BCxMAfLs.js";import"./use-field-context-BA6pMY5L.js";import"./SelectLabel-B4wtfstO.js";import"./portal-BQw3bnzL.js";import"./use-locale-context-Z4fgdY29.js";import"./use-presence-BmJ92aQP.js";import"./use-event-OCVb0O1l.js";import"./index-BtJLK9Rv.js";import"./icon-name-jL3axqAU.js";import"./controls-BtiQQn1l.js";import"./source-d0g_Nd0q.js";import"./ExternalLink-lH7YZu4p.js";import"./ods-react49-9IXPzWp7.js";import"./index-2w0W-O47-BJ19ihbZ.js";import"./Link-Ck4D7Gly-DoENOEBg.js";function c(o){const n={code:"code",em:"em",img:"img",li:"li",ol:"ol",p:"p",span:"span",strong:"strong",ul:"ul",...a(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(d,{of:l,name:"Documentation"}),`
`,e.jsx(p,{of:l}),`
`,e.jsx(n.p,{children:e.jsxs(n.em,{children:[e.jsx(n.strong,{children:"Select"})," component is used to select one or more items from a list of values"]})}),`
`,e.jsx(h,{of:m,sourceState:"none"}),`
`,e.jsx(s,{label:"Overview",level:2}),`
`,e.jsx(x,{aliases:["Dropdown"],atomicType:j.molecule,figmaLink:"https://www.figma.com/design/9jDDTcR4a9jPRFcdjawAlf/ODS---UI-Kit?node-id=49-24314",githubUrl:"https://github.com/ovh/design-system/tree/master/packages/ods/src/components/select",name:"Select",relatedComponents:[{name:"Badge"},{name:"Flag"},{name:"Form Field",subtitle:"Form elements"},{name:"Text"}],children:e.jsxs(n.p,{children:["A ",e.jsx(n.strong,{children:"Select"})," is used to allow users to select one or more items from a list that is displayed after clicking on it."]})}),`
`,e.jsx(s,{label:"Anatomy",level:2}),`
`,e.jsx(n.p,{children:e.jsx(n.img,{src:"components/select/anatomy.png",alt:"Component anatomy",title:"Component anatomy"})}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.strong,{children:"Placeholder"})}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Field"})," to represent the ",e.jsx(n.strong,{children:"Select"})," itself. It can be opened and closed on click/trigger."]}),`
`,e.jsxs(n.li,{children:['"Chevron" ',e.jsx(t,{kind:r.icon,story:i.documentation,children:"Icon"})," to inform that the ",e.jsx(n.strong,{children:"Select"})," can display a list of choices."]}),`
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
`,e.jsx(g,{donts:[e.jsxs(n.span,{children:['- Use a Select to display a "yes" or "no" selection: use ',e.jsx(t,{kind:r.radio,story:i.documentation,children:"Radio"})," buttons"]}),e.jsxs(n.span,{children:["- Use a Select when a comparison between all items or options is needed: use ",e.jsx(t,{kind:r.radio,story:i.documentation,children:"Radio"})," buttons"]})],dos:["- Use a Select when there are 3 or more items to choose from","- Make the order of the Select list based on the frequency of use, alpha or numeric",e.jsxs(n.span,{children:["- Use only one word or a very short ",e.jsx(t,{kind:r.text,story:i.documentation,children:"Text"})," for each item of the list: try to keep it to one line"]})]}),`
`,e.jsx(s,{label:"Placement",level:2}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Select"})," should be vertically aligned with other form components on a same page."]}),`
`,e.jsx(n.p,{children:"It has a width by default, but it can widen to match its container."}),`
`,e.jsx(s,{label:"Behavior",level:2}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Select"})," can be focused and hovered. It also can be disabled. A single option and a group of options can be disabled to be more precise in inner ",e.jsx(n.strong,{children:"Select"})," items."]}),`
`,e.jsxs(n.p,{children:["When an item contains a ",e.jsx(t,{kind:r.text,story:i.documentation,children:"Text"})," that cannot fit on a single line, the ",e.jsx(t,{kind:r.text,story:i.documentation,children:"Text"})," will be truncated."]}),`
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
`]})]})}function G(o={}){const{wrapper:n}={...a(),...o.components};return n?e.jsx(n,{...o,children:e.jsx(c,{...o})}):c(o)}export{G as default};
