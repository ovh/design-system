import{j as e,M as m,C as p}from"./index-CCbL8veO.js";import{u as c}from"./index-Cq3PbNHF.js";import{P as l,O as d}from"./phone-number.stories-BliGHcmK.js";import{B as h}from"./Banner-DlMMAjjN.js";import{I as u,A as x,B as j}from"./IdentityCard-Cb4pGKVF.js";import{H as i}from"./Heading-DN6FdGMk.js";import{S as n,O as o,a as r}from"./StorybookLink-Dd4tegpy.js";import"./iframe-DU4SvIHv.js";import"../sb-preview/runtime.js";import"./index-8AfNH5n5.js";import"./index-D-8MO0q_.js";import"./index-DrFu-skq.js";import"./index-DCBH0_Tl.js";import"./ods-phone-number2-qOf9h3xC.js";import"./index-DAZhnxgO.js";import"./ods-select2-D2fKxfqw.js";import"./overlay-KZpfSxWH.js";import"./dom-CO1DdTQY.js";import"./locale-NOa-Gxlr.js";import"./ods-button2-DJxJiLcj.js";import"./ods-spinner2-CPyWCS2f.js";import"./ods-icon2-C2sSMg6h.js";import"./ods-input2-BVKbybMU.js";import"./type-B5zI8QxY.js";import"./icon-name-C6aMXAXT.js";import"./controls-DX883vx3.js";import"./validityState-BuENXwQ9.js";import"./index-uzYzEmTV.js";import"./ods-accordion2-C2zw5EtX.js";import"./ods-badge-CMZ1G1-q.js";import"./ods-breadcrumb-item2-Chi8uW7w.js";import"./ods-link2-DhrEm8Nk.js";import"./ods-card-CsxtEQHf.js";import"./ods-checkbox2-D1rfq4Wo.js";import"./ods-clipboard2-PjbiunMl.js";import"./ods-tooltip2-CW12aP9b.js";import"./ods-code2-CPtqO8K9.js";import"./ods-datepicker2-CHJb_Dii.js";import"./ods-divider-Dtiri0aY.js";import"./ods-divider2-yzIshch6.js";import"./ods-drawer2-DKhK7oOX.js";import"./ods-file-upload2-WcWZbv1U.js";import"./ods-progress-bar2-Dg_V5kiw.js";import"./ods-form-field2-BDYkM6lU.js";import"./ods-icon-DOZBIEJb.js";import"./ods-link-C3iAbK8i.js";import"./ods-medium2-BnayTic8.js";import"./ods-message-DErUZ_Xg.js";import"./ods-modal2-CLthqs1m.js";import"./ods-pagination2-CxhEcubt.js";import"./ods-password2-DNFrl9vd.js";import"./ods-popover2-D0fTxPry.js";import"./ods-quantity2-DSK2z9QA.js";import"./ods-radio2-NdDFmobW.js";import"./ods-range2-DVd4LCay.js";import"./ods-skeleton2-B7sDasgF.js";import"./ods-switch-item2-D-SJNcDd.js";import"./ods-tabs2-ChMEr-fQ.js";import"./ods-table2-oe37kiP3.js";import"./ods-tag2-CInySbKk.js";import"./ods-text-BO_pN8NQ.js";import"./ods-textarea2-BJL14TBM.js";import"./ods-timepicker2-4lQj55gq.js";import"./ods-toggle2-BgUL7nI_.js";function a(s){const t={code:"code",em:"em",img:"img",li:"li",ol:"ol",p:"p",span:"span",strong:"strong",ul:"ul",...c(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(m,{of:l,name:"Documentation"}),`
`,e.jsx(h,{of:l}),`
`,e.jsx(t.p,{children:e.jsxs(t.em,{children:[e.jsx(t.strong,{children:"Phone Number"})," component is a combo of a selection of country phone indicator and an ",e.jsx(n,{kind:o.input,label:"Input",story:r.documentation})," field for entering a phone number"]})}),`
`,e.jsx(p,{of:d,sourceState:"none"}),`
`,e.jsx(i,{label:"Overview",level:2}),`
`,e.jsx(u,{aliases:["Phone Number Field"],atomicType:x.molecule,figmaLink:"https://www.figma.com/design/9jDDTcR4a9jPRFcdjawAlf/ODS---UI-Kit?node-id=48-6130",githubUrl:"https://github.com/ovh/design-system/tree/master/packages/ods/src/components/phone-number",name:"Phone Number",relatedComponents:[{name:"Flag"},{name:"Form Field",subtitle:"Form elements"},{name:"Input",subtitle:"Form elements"},{name:"Select",subtitle:"Form elements"}],children:e.jsxs(t.p,{children:[e.jsx(t.strong,{children:"Phone Number"}),` component is used to let users enter their phone number in the correct format for the selected
country.`]})}),`
`,e.jsx(i,{label:"Anatomy",level:2}),`
`,e.jsx(t.p,{children:e.jsx(t.img,{src:"components/phone-number/anatomy.png",alt:"Component anatomy",title:"Component anatomy"})}),`
`,e.jsxs(t.ol,{children:[`
`,e.jsxs(t.li,{children:[e.jsx(t.strong,{children:"Country indicator Select"}),": displays the selected country flag and the list of countries by click. List is scroll-able, with 5 items visible at the same time. Each country name is written in users locale, in alphabetical order (for Latin script) ",e.jsx(t.em,{children:"(optional)"})]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.strong,{children:"Input field"}),": displays the country indicator as prefix when users select a country, and they can enter their phone number in this field (from 7 to 12 characters maximum). The ",e.jsx(n,{kind:o.input,label:"Input",story:r.documentation})," field also has a placeholder to provide hints regarding format according to the selected country."]}),`
`]}),`
`,e.jsx(i,{label:"Usage",level:2}),`
`,e.jsxs(t.p,{children:[e.jsx(t.strong,{children:"Phone Number"})," component should be used when there is a need to collect the user's phone number, in a form for instance:"]}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsxs(t.li,{children:["As ",e.jsx(n,{kind:o.formField,label:"Form Field",story:r.documentation})," in an user profile"]}),`
`,e.jsx(t.li,{children:"As in contact/appointment form"}),`
`,e.jsx(t.li,{children:"For telecom configuration"}),`
`]}),`
`,e.jsx(i,{label:"Dos & Don'ts",level:3}),`
`,e.jsx(j,{donts:["- Force a strict format to users",e.jsxs(t.span,{children:["- Make a Phone Number ",e.jsx(n,{kind:o.input,label:"Input",story:r.documentation})," as required without explaining to users why this field is required"]}),"- Assume exclusive use of mobile phone numbers"],dos:["- Validate Phone number format when user leaves the field",e.jsxs(t.span,{children:["- Use Phone Number without the optional country indicator ",e.jsx(n,{kind:o.select,label:"Select",story:r.documentation})," when you only accept user's locale as selection"]}),"- Use a helper when validation is in error state (expected number of characters, expected format...)"]}),`
`,e.jsx(i,{label:"Placement",level:2}),`
`,e.jsxs(t.p,{children:[e.jsx(t.strong,{children:"Phone Number"})," is a group of ",e.jsx(n,{kind:o.select,label:"Select",story:r.documentation})," and ",e.jsx(n,{kind:o.input,label:"Input",story:r.documentation}),", and should act as their specific placements."]}),`
`,e.jsx(i,{label:"Behavior",level:2}),`
`,e.jsx(t.p,{children:"When the user selects a country, it determines the format used to validate their phone number. If selected country has been modified, expected format and placeholder will be updated."}),`
`,e.jsxs(t.p,{children:["If the field content is in error state (i.e. missing or wrong characters), the whole ",e.jsx(t.strong,{children:"Phone Number"})," component becomes in error state."]}),`
`,e.jsxs(t.p,{children:["An event is triggered when the ",e.jsx(n,{kind:o.input,label:"Input",story:r.documentation})," value changes."]}),`
`,e.jsx(t.p,{children:"The country selector allows users to navigate to the desired country option by typing letters while focused on the country selector."}),`
`,e.jsx(t.p,{children:"The search is based on the start of the word and functions one letter at a time."}),`
`,e.jsx(t.p,{children:"For example:"}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsx(t.li,{children:'Typing "f" focus the first country that starts with "f".'}),`
`,e.jsx(t.li,{children:'Typing "r" immediately after focus the first country that starts with "r".'}),`
`]}),`
`,e.jsx(i,{label:"Locale",level:3}),`
`,e.jsxs(t.p,{children:["The locale (i.e. country list translation in ",e.jsx(n,{kind:o.select,label:"Select",story:r.documentation}),") is first set to the value provided as a property."]}),`
`,e.jsx(t.p,{children:"If the given property is not defined or recognized, the component attempts to use the browser's locale settings."}),`
`,e.jsx(t.p,{children:"If the browser's locale is also not recognized, the component defaults to English (EN)."}),`
`,e.jsx(i,{label:"ISO code",level:3}),`
`,e.jsx(t.p,{children:"The ISO code is initially set to the value provided as a property."}),`
`,e.jsx(t.p,{children:"If the given property is not defined or recognized, the component attempts to determine the ISO code based on the browser's locale."}),`
`,e.jsx(t.p,{children:"If the browser's locale is not recognized, the component defaults to the first ISO code in the predefined country list."}),`
`,e.jsx(i,{label:"Variation",level:2}),`
`,e.jsx(t.p,{children:"N/A"}),`
`,e.jsx(i,{label:"Accessibility",level:2}),`
`,e.jsxs(t.p,{children:["Keyboard navigation is the same as ",e.jsx(n,{kind:o.select,label:"Select",story:r.documentation})," and ",e.jsx(n,{kind:o.input,label:"Input",story:r.documentation})," does, ",e.jsx(t.code,{children:"Tab"})," key allows to focus to one another."]})]})}function Te(s={}){const{wrapper:t}={...c(),...s.components};return t?e.jsx(t,{...s,children:e.jsx(a,{...s})}):a(s)}export{Te as default};
