import{j as e}from"./jsx-runtime-C_5uCoOk.js";import{u as d}from"./index-BNSrq6w-.js";import{M as h,C as l,d as r}from"./index-DnV51lgW.js";import{B as a}from"./banner-CAPzkNgn.js";import{P as i,O as m}from"./phone-number.stories-DoImi7J0.js";import{O as o}from"./index-BUOQImqF.js";import{O as s}from"./index-CEZbmgmh.js";import"./iframe-Cm7AUSBL.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-B_J8iUie.js";import"./index-DX_4BEHg.js";import"./index-DrFu-skq.js";import"./lit-html-D-ZEPr28.js";import"./control-C1r2wu67.js";import"./ods-toggle2-CgWFvVwm.js";function c(t){const n={a:"a",code:"code",em:"em",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...d(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(h,{of:i,name:"Documentation"}),`
`,e.jsx(a,{of:i}),`
`,e.jsx(n.p,{children:e.jsxs(n.em,{children:[e.jsx(n.strong,{children:"Phone Number"})," component is a combo of a selection of country phone indicator and an ",e.jsx(n.a,{href:"?path=/docs/ods-components-form-elements-input--documentation",children:e.jsx(n.strong,{children:"Input"})})," field for entering a phone number"]})}),`
`,e.jsx(l,{of:m,sourceState:"none"}),`
`,e.jsx(n.h2,{id:"overview",children:"Overview"}),`
`,e.jsxs("div",{children:[e.jsx("div",{id:"description",children:e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Phone Number"}),` component is used to let users enter their phone number in the correct format for the selected
country.`]})}),e.jsx("table",{children:e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("th",{scope:"row",children:"Name"}),e.jsx("td",{children:e.jsx("strong",{children:"Phone Number"})})]}),e.jsxs("tr",{children:[e.jsx("th",{scope:"row",children:"Also known as"}),e.jsx("td",{children:e.jsxs("em",{children:[e.jsx(n.strong,{children:"Phone Number"}),", Phone Number Field"]})})]}),e.jsxs("tr",{children:[e.jsx("th",{scope:"row",children:"Atomic type"}),e.jsx("td",{children:e.jsxs("a",{href:"https://atomicdesign.bradfrost.com/chapter-2/#molecules",children:["Molecule",e.jsx(o,{name:s.externalLink,style:{fontSize:".7rem",paddingLeft:".3rem",paddingRight:".2rem"}})]})})]}),e.jsxs("tr",{children:[e.jsx("th",{scope:"row",children:"Related component(s)"}),e.jsx("td",{children:e.jsxs(n.p,{children:[e.jsx(n.a,{href:"?path=/docs/ods-components-form-elements-input--documentation",children:e.jsx(n.strong,{children:"Input"})}),`,
`,e.jsx(n.a,{href:"?path=/docs/ods-components-form-elements-select--documentation",children:e.jsx(n.strong,{children:"Select"})}),`,
`,e.jsx(n.a,{href:"?path=/story/ods-components-flag--demo",children:e.jsx(n.strong,{children:"Flag"})}),", ",e.jsx(n.a,{href:"?path=/docs/ods-components-form-elements-form-field--documentation",children:e.jsx(n.strong,{children:`Form
Field`})})]})})]}),e.jsxs("tr",{children:[e.jsx("th",{scope:"row",children:"Links"}),e.jsxs("td",{children:[e.jsxs("a",{href:"https://www.figma.com/proto/tIKzHa5KvHHyosgIgyBswB/Design-Tokens",children:["Design",e.jsx(o,{name:s.externalLink,style:{fontSize:".7rem",paddingLeft:".3rem",paddingRight:".2rem"}})]}),e.jsx("br",{}),e.jsxs("a",{href:"https://github.com/ovh/design-system/tree/master/packages/components/src/phone-number",children:["Github",e.jsx(o,{name:s.externalLink,style:{fontSize:".7rem",paddingLeft:".3rem",paddingRight:".2rem"}})]})]})]})]})})]}),`
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
`,e.jsx(r,{children:`
| ✅ Do                                                                                                                                                                              |
|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------    |
| - Validate **Phone number** format when user leaves the field                                                                                                                     |
| - Use **Phone Number** without the optional country indicator [**Select**](?path=/docs/ods-components-form-elements-select--documentation) when you only accept user's locale as selection |
| - Use a helper when validation is in error state (expected number of characters, expected format...)                                                                              |
`}),`
`,e.jsx(r,{children:`
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
`,e.jsxs(n.p,{children:["Keyboard navigation is the same as ",e.jsx(n.a,{href:"?path=/docs/ods-components-form-elements-select--documentation",children:e.jsx(n.strong,{children:"Select"})})," and ",e.jsx(n.a,{href:"?path=/docs/ods-components-form-elements-input--documentation",children:e.jsx(n.strong,{children:"Input"})})," does, ",e.jsx(n.code,{children:"Tab"})," key allows to focus to one another."]})]})}function D(t={}){const{wrapper:n}={...d(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(c,{...t})}):c(t)}export{D as default};
