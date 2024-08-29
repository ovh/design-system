import{j as e}from"./jsx-runtime-Dn0LW--f.js";import{u as i}from"./index-DeyDdHvX.js";import{M as c,C as a,d as o}from"./index-BM3JsZOq.js";import{B as d}from"./banner-DPlTyHjv.js";import{P as s,O as l}from"./phone-number.stories-Da8xxpnf.js";import{I as h,A as m}from"./identity-card-CwN41yUF.js";import"./iframe-6_jBXMSq.js";import"../sb-preview/runtime.js";import"./commonjsHelpers-Cpj98o6Y.js";import"./index-B_J8iUie.js";import"./index-DX_4BEHg.js";import"./index-DrFu-skq.js";import"./index-DryTTbHl.js";import"./lit-html-D-ZEPr28.js";import"./control-C1r2wu67.js";import"./ods-toggle2-LnXcgd5r.js";import"./chunk-FAE4I7JY-v0Th3BC0.js";function r(t){const n={a:"a",code:"code",em:"em",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...i(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(c,{of:s,name:"Documentation"}),`
`,e.jsx(d,{of:s}),`
`,e.jsx(n.p,{children:e.jsxs(n.em,{children:[e.jsx(n.strong,{children:"Phone Number"})," component is a combo of a selection of country phone indicator and an ",e.jsx(n.a,{href:"?path=/docs/ods-components-form-elements-input--documentation",children:e.jsx(n.strong,{children:"Input"})})," field for entering a phone number"]})}),`
`,e.jsx(a,{of:l,sourceState:"none"}),`
`,e.jsx(n.h2,{id:"overview",children:"Overview"}),`
`,e.jsxs("div",{className:"documentation-overview",children:[e.jsx("div",{children:e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Phone Number"}),` component is used to let users enter their phone number in the correct format for the selected
country.`]})}),e.jsx(h,{aliases:["Phone Number Field"],atomicType:m.molecule,className:"documentation-overview__table",figmaLink:"https://www.figma.com/design/9jDDTcR4a9jPRFcdjawAlf/ODS---UI-Kit?node-id=48-6130",githubUrl:"https://github.com/ovh/design-system/tree/master/packages/ods/src/components/phone-number",name:"Phone Number",relatedComponents:[{name:"Flag"},{name:"Form Field",subtitle:"Form elements"},{name:"Input",subtitle:"Form elements"},{name:"Select",subtitle:"Form elements"}]})]}),`
`,e.jsx(n.h2,{id:"anatomy",children:"Anatomy"}),`
`,e.jsx(n.p,{children:e.jsx(n.img,{src:"components/phone-number/anatomy.png",alt:"Component anatomy",title:"Component anatomy"})}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Country indicator Select"}),": displays the selected country flag and the list of countries by click. List is scroll-able, with 5 items visible at the same time. Each country name is written in users locale, in alphabetical order (for Latin script) ",e.jsx(n.em,{children:"(optional)"})]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Input field"}),": displays the country indicator as prefix when users select a country, and they can enter their phone number in this field (from 7 to 12 characters maximum). The ",e.jsx(n.a,{href:"?path=/docs/ods-components-form-elements-input--documentation",children:e.jsx(n.strong,{children:"Input"})})," field also has a placeholder to provide hints regarding format according to the selected country."]}),`
`]}),`
`,e.jsx(n.h2,{id:"usage",children:"Usage"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Phone Number"})," component should be used when there is a need to collect the user's phone number, in a form for instance:"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["As ",e.jsx(n.a,{href:"?path=/docs/ods-components-form-elements-form-field--documentation",children:e.jsx(n.strong,{children:"Form Field"})})," in an user profile"]}),`
`,e.jsx(n.li,{children:"As in contact/appointment form"}),`
`,e.jsx(n.li,{children:"For telecom configuration"}),`
`]}),`
`,e.jsx(n.h3,{id:"dos--donts",children:"Dos & Don'ts"}),`
`,e.jsx(o,{className:"documentation-do-table",children:`
| ✅ Do                                                                                                                                                                              |
|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------    |
| - Validate **Phone number** format when user leaves the field                                                                                                                     |
| - Use **Phone Number** without the optional country indicator [**Select**](?path=/docs/ods-components-form-elements-select--documentation) when you only accept user's locale as selection |
| - Use a helper when validation is in error state (expected number of characters, expected format...)                                                                              |
`}),`
`,e.jsx(o,{className:"documentation-dont-table",children:`
| ❌ Don't                                                                                                                                                                          |
|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| - Force a strict format to users                                                                                                                                                 |
| - Make a **Phone Number** [**Input**](?path=/docs/ods-components-form-elements-input--documentation) as required without explaining to users why this field is required                   |
| - Assume exclusive use of mobile phone numbers                                                                                                                                   |
`}),`
`,e.jsx(n.h2,{id:"placement",children:"Placement"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Phone Number"})," is a group of ",e.jsx(n.a,{href:"?path=/docs/ods-components-form-elements-select--documentation",children:e.jsx(n.strong,{children:"Select"})})," and ",e.jsx(n.a,{href:"?path=/docs/ods-components-form-elements-input--documentation",children:e.jsx(n.strong,{children:"Input"})}),", and should act as their specific placements."]}),`
`,e.jsx(n.h2,{id:"behavior",children:"Behavior"}),`
`,e.jsx(n.p,{children:"When the user selects a country, it determines the format used to validate their phone number. If selected country has been modified, expected format and placeholder will be updated."}),`
`,e.jsxs(n.p,{children:["If the field content is in error state (i.e. missing or wrong characters), the whole ",e.jsx(n.strong,{children:"Phone Number"})," component becomes in error state."]}),`
`,e.jsxs(n.p,{children:["An event is triggered when the ",e.jsx(n.a,{href:"?path=/docs/ods-components-form-elements-input--documentation",children:e.jsx(n.strong,{children:"Input"})})," value changes."]}),`
`,e.jsx(n.h3,{id:"locale",children:"Locale"}),`
`,e.jsxs(n.p,{children:["The locale (i.e. country list translation in ",e.jsx(n.a,{href:"?path=/docs/ods-components-form-elements-select--documentation",children:e.jsx(n.strong,{children:"Select"})}),") is first set to the value provided as a property."]}),`
`,e.jsx(n.p,{children:"If the given property is not defined or recognized, the component attempts to use the browser's locale settings."}),`
`,e.jsx(n.p,{children:"If the browser's locale is also not recognized, the component defaults to French (FR)."}),`
`,e.jsx(n.h3,{id:"iso-code",children:"ISO code"}),`
`,e.jsx(n.p,{children:"The ISO code is initially set to the value provided as a property."}),`
`,e.jsx(n.p,{children:"If the given property is not defined or recognized, the component attempts to determine the ISO code based on the browser's locale."}),`
`,e.jsx(n.p,{children:"If the browser's locale is not recognized, the component defaults to the first ISO code in the predefined country list."}),`
`,e.jsx(n.h2,{id:"variation",children:"Variation"}),`
`,e.jsx(n.p,{children:"N/A"}),`
`,e.jsx(n.h2,{id:"accessibility",children:"Accessibility"}),`
`,e.jsxs(n.p,{children:["Keyboard navigation is the same as ",e.jsx(n.a,{href:"?path=/docs/ods-components-form-elements-select--documentation",children:e.jsx(n.strong,{children:"Select"})})," and ",e.jsx(n.a,{href:"?path=/docs/ods-components-form-elements-input--documentation",children:e.jsx(n.strong,{children:"Input"})})," does, ",e.jsx(n.code,{children:"Tab"})," key allows to focus to one another."]})]})}function A(t={}){const{wrapper:n}={...i(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(r,{...t})}):r(t)}export{A as default};
