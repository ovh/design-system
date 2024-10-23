import{j as e}from"./jsx-runtime-CtvdRJNw.js";import{u as l}from"./index-BB9dT2Es.js";import{M as a,C as c}from"./index-B52cN8Ji.js";import{P as r,O as m}from"./phone-number.stories-NxhfTXEJ.js";import{B as d}from"./Banner-C-cuOusb.js";import{I as h,A as p,B as u}from"./IdentityCard-C6dtKVMG.js";import{H as o}from"./Heading-DkXmkwCf.js";import{S as t}from"./StorybookLink-vz9hS9Kq.js";import"./iframe-DOFBAWyz.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-B_J8iUie.js";import"./index-DX_4BEHg.js";import"./index-DrFu-skq.js";import"./index-CnlqR0TT.js";import"./lit-html-D-ZEPr28.js";import"./controls-DpsgTNdU.js";import"./index-96Y3MfGk.js";function i(s){const n={code:"code",em:"em",img:"img",li:"li",ol:"ol",p:"p",span:"span",strong:"strong",ul:"ul",...l(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{of:r,name:"Documentation"}),`
`,e.jsx(d,{of:r}),`
`,e.jsx(n.p,{children:e.jsxs(n.em,{children:[e.jsx(n.strong,{children:"Phone Number"})," component is a combo of a selection of country phone indicator and an ",e.jsx(t,{kind:"ODS Components/Form elements/Input",label:"Input",story:"Documentation"})," field for entering a phone number"]})}),`
`,e.jsx(c,{of:m,sourceState:"none"}),`
`,e.jsx(o,{label:"Overview",level:2}),`
`,e.jsx(h,{aliases:["Phone Number Field"],atomicType:p.molecule,figmaLink:"https://www.figma.com/design/9jDDTcR4a9jPRFcdjawAlf/ODS---UI-Kit?node-id=48-6130",githubUrl:"https://github.com/ovh/design-system/tree/master/packages/ods/src/components/phone-number",name:"Phone Number",relatedComponents:[{name:"Flag"},{name:"Form Field",subtitle:"Form elements"},{name:"Input",subtitle:"Form elements"},{name:"Select",subtitle:"Form elements"}],children:e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Phone Number"}),` component is used to let users enter their phone number in the correct format for the selected
country.`]})}),`
`,e.jsx(o,{label:"Anatomy",level:2}),`
`,e.jsx(n.p,{children:e.jsx(n.img,{src:"components/phone-number/anatomy.png",alt:"Component anatomy",title:"Component anatomy"})}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Country indicator Select"}),": displays the selected country flag and the list of countries by click. List is scroll-able, with 5 items visible at the same time. Each country name is written in users locale, in alphabetical order (for Latin script) ",e.jsx(n.em,{children:"(optional)"})]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Input field"}),": displays the country indicator as prefix when users select a country, and they can enter their phone number in this field (from 7 to 12 characters maximum). The ",e.jsx(t,{kind:"ODS Components/Form elements/Input",label:"Input",story:"Documentation"})," field also has a placeholder to provide hints regarding format according to the selected country."]}),`
`]}),`
`,e.jsx(o,{label:"Usage",level:2}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Phone Number"})," component should be used when there is a need to collect the user's phone number, in a form for instance:"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["As ",e.jsx(t,{kind:"ODS Components/Form elements/Form Field",label:"Form Field",story:"Documentation"})," in an user profile"]}),`
`,e.jsx(n.li,{children:"As in contact/appointment form"}),`
`,e.jsx(n.li,{children:"For telecom configuration"}),`
`]}),`
`,e.jsx(o,{label:"Dos & Don'ts",level:3}),`
`,e.jsx(u,{donts:["- Force a strict format to users",e.jsxs(n.span,{children:["- Make a Phone Number ",e.jsx(t,{kind:"ODS Components/Form elements/Input",label:"Input",story:"Documentation"})," as required without explaining to users why this field is required"]}),"- Assume exclusive use of mobile phone numbers"],dos:["- Validate Phone number format when user leaves the field",e.jsxs(n.span,{children:["- Use Phone Number without the optional country indicator ",e.jsx(t,{kind:"ODS Components/Form elements/Select",label:"Select",story:"Documentation"})," when you only accept user's locale as selection"]}),"- Use a helper when validation is in error state (expected number of characters, expected format...)"]}),`
`,e.jsx(o,{label:"Placement",level:2}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Phone Number"})," is a group of ",e.jsx(t,{kind:"ODS Components/Form elements/Select",label:"Select",story:"Documentation"})," and ",e.jsx(t,{kind:"ODS Components/Form elements/Input",label:"Input",story:"Documentation"}),", and should act as their specific placements."]}),`
`,e.jsx(o,{label:"Behavior",level:2}),`
`,e.jsx(n.p,{children:"When the user selects a country, it determines the format used to validate their phone number. If selected country has been modified, expected format and placeholder will be updated."}),`
`,e.jsxs(n.p,{children:["If the field content is in error state (i.e. missing or wrong characters), the whole ",e.jsx(n.strong,{children:"Phone Number"})," component becomes in error state."]}),`
`,e.jsxs(n.p,{children:["An event is triggered when the ",e.jsx(t,{kind:"ODS Components/Form elements/Input",label:"Input",story:"Documentation"})," value changes."]}),`
`,e.jsx(o,{label:"Locale",level:3}),`
`,e.jsxs(n.p,{children:["The locale (i.e. country list translation in ",e.jsx(t,{kind:"ODS Components/Form elements/Select",label:"Select",story:"Documentation"}),") is first set to the value provided as a property."]}),`
`,e.jsx(n.p,{children:"If the given property is not defined or recognized, the component attempts to use the browser's locale settings."}),`
`,e.jsx(n.p,{children:"If the browser's locale is also not recognized, the component defaults to English (EN)."}),`
`,e.jsx(o,{label:"ISO code",level:3}),`
`,e.jsx(n.p,{children:"The ISO code is initially set to the value provided as a property."}),`
`,e.jsx(n.p,{children:"If the given property is not defined or recognized, the component attempts to determine the ISO code based on the browser's locale."}),`
`,e.jsx(n.p,{children:"If the browser's locale is not recognized, the component defaults to the first ISO code in the predefined country list."}),`
`,e.jsx(o,{label:"Variation",level:2}),`
`,e.jsx(n.p,{children:"N/A"}),`
`,e.jsx(o,{label:"Accessibility",level:2}),`
`,e.jsxs(n.p,{children:["Keyboard navigation is the same as ",e.jsx(t,{kind:"ODS Components/Form elements/Select",label:"Select",story:"Documentation"})," and ",e.jsx(t,{kind:"ODS Components/Form elements/Input",label:"Input",story:"Documentation"})," does, ",e.jsx(n.code,{children:"Tab"})," key allows to focus to one another."]})]})}function M(s={}){const{wrapper:n}={...l(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(i,{...s})}):i(s)}export{M as default};
