import{j as e,M as c,C as p}from"./index-DQsySnuC.js";import{u as m}from"./index-Xj8pMhSr.js";import{P as l,O as d}from"./phone-number.stories-CE_NhgLn.js";import{B as h}from"./Banner-dX9z1ZOn.js";import{I as u,A as x,B as j}from"./IdentityCard-g99iR_Ue.js";import{H as r}from"./Heading-DDc_MF2r.js";import{S as n,O as o,a as i}from"./StorybookLink-CYVmf1as.js";import"./iframe-DRtgxPEL.js";import"../sb-preview/runtime.js";import"./index-8AfNH5n5.js";import"./index-D-8MO0q_.js";import"./index-DrFu-skq.js";import"./index-DCBH0_Tl.js";import"./ods-phone-number2-D1K1HcDS.js";import"./index-DAZhnxgO.js";import"./ods-select2-B4wr0dem.js";import"./overlay-KZpfSxWH.js";import"./dom-CO1DdTQY.js";import"./locale-NOa-Gxlr.js";import"./ods-button2-Bhm26DQr.js";import"./ods-spinner2-DCN2yKlT.js";import"./ods-icon2-Bl6f3POv.js";import"./ods-input2-B9cw61K_.js";import"./type-B5zI8QxY.js";import"./icon-name-C6aMXAXT.js";import"./controls-DX883vx3.js";import"./validityState-BuENXwQ9.js";import"./index-CihiY_f6.js";import"./ods-accordion2-Bgg69lRV.js";import"./ods-badge-tHc24Eg4.js";import"./ods-breadcrumb-item2-CoLTn2CF.js";import"./ods-link2-DDMr4sUm.js";import"./ods-card-B_VebKXk.js";import"./ods-checkbox2-BOuFx8yF.js";import"./ods-clipboard2-NuJn2ry3.js";import"./ods-tooltip2-BwzEvmuE.js";import"./ods-code2-bZeM2NI-.js";import"./ods-datepicker2-DwwUrg1C.js";import"./ods-divider-3cgmT4wP.js";import"./ods-divider2-Dc25YIYb.js";import"./ods-drawer2-DsENZFv4.js";import"./ods-file-upload2-CPd6D9Z5.js";import"./ods-progress-bar2-BuFm8qT0.js";import"./ods-form-field2-Tc9B1-rj.js";import"./ods-icon-NURRZ9Mf.js";import"./ods-link-BE9dMQzg.js";import"./ods-medium2-BB_NU63C.js";import"./ods-message-B9bD81Bu.js";import"./ods-modal2-CP36WQeg.js";import"./ods-pagination2-CotgNPzL.js";import"./ods-password2-BQKXsiEd.js";import"./ods-popover2-hre_XUC2.js";import"./ods-quantity2-DOjRn13r.js";import"./ods-radio2-BtBodUES.js";import"./ods-range2-BhwU834C.js";import"./ods-skeleton2-dZcgHYAN.js";import"./ods-switch-item2-m1p75_3x.js";import"./ods-tabs2-wJlXfoZt.js";import"./ods-table2-vWlGUOoj.js";import"./ods-tag2-Dj0-zHXw.js";import"./ods-text-CTeC-41B.js";import"./ods-textarea2-BHQdu6bK.js";import"./ods-timepicker2-2oCWgeQp.js";import"./ods-toggle2-DbSuYqWU.js";function a(s){const t={code:"code",em:"em",img:"img",li:"li",ol:"ol",p:"p",span:"span",strong:"strong",ul:"ul",...m(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(c,{of:l,name:"Documentation"}),`
`,e.jsx(h,{of:l}),`
`,e.jsx(t.p,{children:e.jsxs(t.em,{children:[e.jsx(t.strong,{children:"Phone Number"})," component is a combo of a selection of country phone indicator and an ",e.jsx(n,{kind:o.input,label:"Input",story:i.documentation})," field for entering a phone number"]})}),`
`,e.jsx(p,{of:d,sourceState:"none"}),`
`,e.jsx(r,{label:"Overview",level:2}),`
`,e.jsx(u,{aliases:["Phone Number Field"],atomicType:x.molecule,figmaLink:"https://www.figma.com/design/9jDDTcR4a9jPRFcdjawAlf/ODS---UI-Kit?node-id=48-6130",githubUrl:"https://github.com/ovh/design-system/tree/master/packages/ods/src/components/phone-number",name:"Phone Number",relatedComponents:[{name:"Flag"},{name:"Form Field",subtitle:"Form elements"},{name:"Input",subtitle:"Form elements"},{name:"Select",subtitle:"Form elements"}],children:e.jsxs(t.p,{children:[e.jsx(t.strong,{children:"Phone Number"}),` component is used to let users enter their phone number in the correct format for the selected
country.`]})}),`
`,e.jsx(r,{label:"Anatomy",level:2}),`
`,e.jsx(t.p,{children:e.jsx(t.img,{src:"components/phone-number/anatomy.png",alt:"Component anatomy",title:"Component anatomy"})}),`
`,e.jsxs(t.ol,{children:[`
`,e.jsxs(t.li,{children:[e.jsx(t.strong,{children:"Country indicator Select"}),": displays the selected country flag and the list of countries by click. List is scroll-able, with 5 items visible at the same time. Each country name is written in users locale, in alphabetical order (for Latin script) ",e.jsx(t.em,{children:"(optional)"})]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.strong,{children:"Input field"}),": displays the country indicator as prefix when users select a country, and they can enter their phone number in this field (from 7 to 12 characters maximum). The ",e.jsx(n,{kind:o.input,label:"Input",story:i.documentation})," field also has a placeholder to provide hints regarding format according to the selected country."]}),`
`]}),`
`,e.jsx(r,{label:"Usage",level:2}),`
`,e.jsxs(t.p,{children:[e.jsx(t.strong,{children:"Phone Number"})," component should be used when there is a need to collect the user's phone number, in a form for instance:"]}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsxs(t.li,{children:["As ",e.jsx(n,{kind:o.formField,label:"Form Field",story:i.documentation})," in an user profile"]}),`
`,e.jsx(t.li,{children:"As in contact/appointment form"}),`
`,e.jsx(t.li,{children:"For telecom configuration"}),`
`]}),`
`,e.jsx(r,{label:"Dos & Don'ts",level:3}),`
`,e.jsx(j,{donts:["- Force a strict format to users",e.jsxs(t.span,{children:["- Make a Phone Number ",e.jsx(n,{kind:o.input,label:"Input",story:i.documentation})," as required without explaining to users why this field is required"]}),"- Assume exclusive use of mobile phone numbers"],dos:["- Validate Phone number format when user leaves the field",e.jsxs(t.span,{children:["- Use Phone Number without the optional country indicator ",e.jsx(n,{kind:o.select,label:"Select",story:i.documentation})," when you only accept user's locale as selection"]}),"- Use a helper when validation is in error state (expected number of characters, expected format...)"]}),`
`,e.jsx(r,{label:"Placement",level:2}),`
`,e.jsxs(t.p,{children:[e.jsx(t.strong,{children:"Phone Number"})," is a group of ",e.jsx(n,{kind:o.select,label:"Select",story:i.documentation})," and ",e.jsx(n,{kind:o.input,label:"Input",story:i.documentation}),", and should act as their specific placements."]}),`
`,e.jsx(r,{label:"Behavior",level:2}),`
`,e.jsx(t.p,{children:"When the user selects a country, it determines the format used to validate their phone number. If selected country has been modified, expected format and placeholder will be updated."}),`
`,e.jsxs(t.p,{children:["If the field content is in error state (i.e. missing or wrong characters), the whole ",e.jsx(t.strong,{children:"Phone Number"})," component becomes in error state."]}),`
`,e.jsxs(t.p,{children:["An event is triggered when the ",e.jsx(n,{kind:o.input,label:"Input",story:i.documentation})," value changes."]}),`
`,e.jsx(r,{label:"Locale",level:3}),`
`,e.jsxs(t.p,{children:["The locale (i.e. country list translation in ",e.jsx(n,{kind:o.select,label:"Select",story:i.documentation}),") is first set to the value provided as a property."]}),`
`,e.jsx(t.p,{children:"If the given property is not defined or recognized, the component attempts to use the browser's locale settings."}),`
`,e.jsx(t.p,{children:"If the browser's locale is also not recognized, the component defaults to English (EN)."}),`
`,e.jsx(r,{label:"ISO code",level:3}),`
`,e.jsx(t.p,{children:"The ISO code is initially set to the value provided as a property."}),`
`,e.jsx(t.p,{children:"If the given property is not defined or recognized, the component attempts to determine the ISO code based on the browser's locale."}),`
`,e.jsx(t.p,{children:"If the browser's locale is not recognized, the component defaults to the first ISO code in the predefined country list."}),`
`,e.jsx(r,{label:"Variation",level:2}),`
`,e.jsx(t.p,{children:"N/A"}),`
`,e.jsx(r,{label:"Accessibility",level:2}),`
`,e.jsxs(t.p,{children:["Keyboard navigation is the same as ",e.jsx(n,{kind:o.select,label:"Select",story:i.documentation})," and ",e.jsx(n,{kind:o.input,label:"Input",story:i.documentation})," does, ",e.jsx(t.code,{children:"Tab"})," key allows to focus to one another."]})]})}function Fe(s={}){const{wrapper:t}={...m(),...s.components};return t?e.jsx(t,{...s,children:e.jsx(a,{...s})}):a(s)}export{Fe as default};
