import{j as e,M as d,C as m}from"./index-aSJOi-xY.js";import{u as c}from"./index-D_oymSD0.js";import{P as l,O as h}from"./phone-number.stories-CSOR4m_3.js";import{B as p}from"./Banner-DfBQCKAd.js";import{I as u,A as x,B as j}from"./IdentityCard-bFWvbFx8.js";import{H as i}from"./Heading-fUBW5LMg.js";import{S as t,O as o,a as s}from"./StorybookLink-CdkDDCl2.js";import"./iframe-Cjn0x15a.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-D-8MO0q_.js";import"./index-DX_4BEHg.js";import"./index-DrFu-skq.js";import"./index-B1WyGMUD.js";import"./controls-DX883vx3.js";import"./validityState-BuENXwQ9.js";import"./index-DduIf26o.js";function a(r){const n={code:"code",em:"em",img:"img",li:"li",ol:"ol",p:"p",span:"span",strong:"strong",ul:"ul",...c(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(d,{of:l,name:"Documentation"}),`
`,e.jsx(p,{of:l}),`
`,e.jsx(n.p,{children:e.jsxs(n.em,{children:[e.jsx(n.strong,{children:"Phone Number"})," component is a combo of a selection of country phone indicator and an ",e.jsx(t,{kind:o.input,label:"Input",story:s.documentation})," field for entering a phone number"]})}),`
`,e.jsx(m,{of:h,sourceState:"none"}),`
`,e.jsx(i,{label:"Overview",level:2}),`
`,e.jsx(u,{aliases:["Phone Number Field"],atomicType:x.molecule,figmaLink:"https://www.figma.com/design/9jDDTcR4a9jPRFcdjawAlf/ODS---UI-Kit?node-id=48-6130",githubUrl:"https://github.com/ovh/design-system/tree/master/packages/ods/src/components/phone-number",name:"Phone Number",relatedComponents:[{name:"Flag"},{name:"Form Field",subtitle:"Form elements"},{name:"Input",subtitle:"Form elements"},{name:"Select",subtitle:"Form elements"}],children:e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Phone Number"}),` component is used to let users enter their phone number in the correct format for the selected
country.`]})}),`
`,e.jsx(i,{label:"Anatomy",level:2}),`
`,e.jsx(n.p,{children:e.jsx(n.img,{src:"components/phone-number/anatomy.png",alt:"Component anatomy",title:"Component anatomy"})}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Country indicator Select"}),": displays the selected country flag and the list of countries by click. List is scroll-able, with 5 items visible at the same time. Each country name is written in users locale, in alphabetical order (for Latin script) ",e.jsx(n.em,{children:"(optional)"})]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Input field"}),": displays the country indicator as prefix when users select a country, and they can enter their phone number in this field (from 7 to 12 characters maximum). The ",e.jsx(t,{kind:o.input,label:"Input",story:s.documentation})," field also has a placeholder to provide hints regarding format according to the selected country."]}),`
`]}),`
`,e.jsx(i,{label:"Usage",level:2}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Phone Number"})," component should be used when there is a need to collect the user's phone number, in a form for instance:"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["As ",e.jsx(t,{kind:o.formField,label:"Form Field",story:s.documentation})," in an user profile"]}),`
`,e.jsx(n.li,{children:"As in contact/appointment form"}),`
`,e.jsx(n.li,{children:"For telecom configuration"}),`
`]}),`
`,e.jsx(i,{label:"Dos & Don'ts",level:3}),`
`,e.jsx(j,{donts:["- Force a strict format to users",e.jsxs(n.span,{children:["- Make a Phone Number ",e.jsx(t,{kind:o.input,label:"Input",story:s.documentation})," as required without explaining to users why this field is required"]}),"- Assume exclusive use of mobile phone numbers"],dos:["- Validate Phone number format when user leaves the field",e.jsxs(n.span,{children:["- Use Phone Number without the optional country indicator ",e.jsx(t,{kind:o.select,label:"Select",story:s.documentation})," when you only accept user's locale as selection"]}),"- Use a helper when validation is in error state (expected number of characters, expected format...)"]}),`
`,e.jsx(i,{label:"Placement",level:2}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Phone Number"})," is a group of ",e.jsx(t,{kind:o.select,label:"Select",story:s.documentation})," and ",e.jsx(t,{kind:o.input,label:"Input",story:s.documentation}),", and should act as their specific placements."]}),`
`,e.jsx(i,{label:"Behavior",level:2}),`
`,e.jsx(n.p,{children:"When the user selects a country, it determines the format used to validate their phone number. If selected country has been modified, expected format and placeholder will be updated."}),`
`,e.jsxs(n.p,{children:["If the field content is in error state (i.e. missing or wrong characters), the whole ",e.jsx(n.strong,{children:"Phone Number"})," component becomes in error state."]}),`
`,e.jsxs(n.p,{children:["An event is triggered when the ",e.jsx(t,{kind:o.input,label:"Input",story:s.documentation})," value changes."]}),`
`,e.jsx(i,{label:"Locale",level:3}),`
`,e.jsxs(n.p,{children:["The locale (i.e. country list translation in ",e.jsx(t,{kind:o.select,label:"Select",story:s.documentation}),") is first set to the value provided as a property."]}),`
`,e.jsx(n.p,{children:"If the given property is not defined or recognized, the component attempts to use the browser's locale settings."}),`
`,e.jsx(n.p,{children:"If the browser's locale is also not recognized, the component defaults to English (EN)."}),`
`,e.jsx(i,{label:"ISO code",level:3}),`
`,e.jsx(n.p,{children:"The ISO code is initially set to the value provided as a property."}),`
`,e.jsx(n.p,{children:"If the given property is not defined or recognized, the component attempts to determine the ISO code based on the browser's locale."}),`
`,e.jsx(n.p,{children:"If the browser's locale is not recognized, the component defaults to the first ISO code in the predefined country list."}),`
`,e.jsx(i,{label:"Variation",level:2}),`
`,e.jsx(n.p,{children:"N/A"}),`
`,e.jsx(i,{label:"Accessibility",level:2}),`
`,e.jsxs(n.p,{children:["Keyboard navigation is the same as ",e.jsx(t,{kind:o.select,label:"Select",story:s.documentation})," and ",e.jsx(t,{kind:o.input,label:"Input",story:s.documentation})," does, ",e.jsx(n.code,{children:"Tab"})," key allows to focus to one another."]})]})}function M(r={}){const{wrapper:n}={...c(),...r.components};return n?e.jsx(n,{...r,children:e.jsx(a,{...r})}):a(r)}export{M as default};
