import{j as n,M as m,d}from"./index-Cg27MLKJ.js";import{u as a}from"./index-CRYdQg8Y.js";import{H as t}from"./Heading-J7HCFxl6.js";import{S as o,O as e,a as r}from"./StorybookLink-anNL9IKG.js";import"./iframe-J0ZUQmQ0.js";import"../sb-preview/runtime.js";import"./index-8AfNH5n5.js";import"./index-D-8MO0q_.js";import"./index-DrFu-skq.js";import"./index-CGJBSJl7.js";import"./index-DpXZhc7f.js";import"./ods-accordion2-C_uqOg6Y.js";import"./index-DAZhnxgO.js";import"./icon-name-C6aMXAXT.js";import"./ods-icon2-DRPHarK1.js";import"./ods-badge-CjbpLGl8.js";import"./ods-breadcrumb-item2-C_Ah5FZN.js";import"./ods-link2-CtVFUlMR.js";import"./ods-button2-dPaqs0uX.js";import"./ods-spinner2-CPyWCS2f.js";import"./ods-card-CsxtEQHf.js";import"./ods-checkbox2-CJl-a8ad.js";import"./dom-8hoR-urs.js";import"./ods-clipboard2-CewZJu-c.js";import"./ods-input2-C6KOqFAM.js";import"./type-B5zI8QxY.js";import"./ods-tooltip2-CW12aP9b.js";import"./overlay-KZpfSxWH.js";import"./ods-code2-BL2TW0HP.js";import"./ods-combobox2-CyL0bVv9.js";import"./_commonjsHelpers-CLD5em3H.js";import"./debounce-DRefBDpX.js";import"./ods-tag2-Bb2BMy9d.js";import"./ods-datepicker2-CijAhCPy.js";import"./locale-NOa-Gxlr.js";import"./ods-divider-Dtiri0aY.js";import"./ods-divider2-yzIshch6.js";import"./ods-drawer2-DKhK7oOX.js";import"./ods-file-upload2-Ca3mZ5BD.js";import"./ods-progress-bar2-Dg_V5kiw.js";import"./ods-form-field2-BDYkM6lU.js";import"./ods-icon-DTp5PnPI.js";import"./ods-input-CCQ46ZEm.js";import"./ods-link-BCeMi6SV.js";import"./ods-medium2-BnayTic8.js";import"./ods-message-DuyDaLcv.js";import"./ods-modal2-DCK89o-L.js";import"./ods-pagination2-shUGU0gB.js";import"./ods-select2-CEKvSxa4.js";import"./ods-password2-D64-z8ym.js";import"./ods-phone-number2-BL58mHzY.js";import"./ods-popover2-mGbx5HiL.js";import"./ods-quantity2-7U22nj6z.js";import"./ods-radio2-DDJaSdNS.js";import"./ods-range2-wBjnlon-.js";import"./ods-skeleton2-B7sDasgF.js";import"./ods-switch-item2-D-SJNcDd.js";import"./ods-tabs2-ChMEr-fQ.js";import"./ods-table2-oe37kiP3.js";import"./ods-text-BO_pN8NQ.js";import"./ods-textarea2-BDOVTqwb.js";import"./ods-timepicker2-DVnCnUkw.js";import"./ods-toggle2-Bg02aln1.js";function l(s){const i={a:"a",code:"code",h1:"h1",li:"li",p:"p",ul:"ul",...a(),...s.components};return n.jsxs(n.Fragment,{children:[n.jsx(m,{title:"OVHcloud Design System/What's new?/Migration guide/17.x to 18.x"}),`
`,n.jsxs(i.h1,{id:"1722-to-1800-compare",children:[n.jsx(i.a,{href:"https://ovh.github.io/design-system/v17.2.2/?path=/story/ovhcloud-design-system-what-s-new-changelog--page",rel:"nofollow",children:"17.2.2"})," to ",n.jsx(i.a,{href:"https://ovh.github.io/design-system/v18.0.0/?path=/story/ovhcloud-design-system-what-s-new-changelog--page",rel:"nofollow",children:"18.0.0"})," (",n.jsx(i.a,{href:"https://github.com/ovh/design-system/compare/release/17.0...release/18.0",rel:"nofollow",children:"compare"}),")"]}),`
`,n.jsx(i.p,{children:"If you have any questions or issues regarding the new version, feel free to reach us directly."}),`
`,n.jsx(t,{label:"Libraries",level:2}),`
`,n.jsx(i.p,{children:"The following libs have been removed:"}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsx(i.li,{children:"@ovhcloud/ods-cdk"}),`
`,n.jsx(i.li,{children:"@ovhcloud/ods-common-core"}),`
`,n.jsx(i.li,{children:"@ovhcloud/ods-common-stencil"}),`
`,n.jsx(i.li,{children:"@ovhcloud/ods-common-testing"}),`
`,n.jsx(i.li,{children:"@ovhcloud/ods-common-theming"}),`
`,n.jsx(i.li,{children:"@ovhcloud/ods-theme-blue-jeans"}),`
`]}),`
`,n.jsx(i.p,{children:"If you were using part of them, please reach out to us so that we can get more information about your usage."}),`
`,n.jsxs(i.p,{children:["To use the new theme, replace ",n.jsx(i.code,{children:"ods-theme-blue-jeans"})," with the following:"]}),`
`,n.jsx(d,{code:"import '@ovhcloud/ods-themes/default';",dark:"true",language:"typescript"}),`
`,n.jsx(t,{label:"Design tokens",level:2}),`
`,n.jsxs(i.p,{children:["Design tokens are now accessible through the ",n.jsx(i.code,{children:"@ovhcloud/ods-themes"})," lib."]}),`
`,n.jsx(i.p,{children:"The list of available tokens has been updated with the latest design changes and match what you may find on the Figma screens."}),`
`,n.jsx(t,{label:"Components",level:2}),`
`,n.jsx(i.p,{children:"As each component was refactored, there are too many changes to list everything here."}),`
`,n.jsxs(i.p,{children:["The main common breaking change is the following: ",n.jsx(i.code,{children:"osds-xxx"})," component is now ",n.jsx(i.code,{children:"ods-xxx"})]}),`
`,n.jsx(i.p,{children:"A complete list of changes and a guide about how to migrate is available per component:"}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsxs(i.li,{children:[`
`,n.jsx(o,{kind:e.accordion,label:"accordion",story:r.migrationFrom17}),`
`]}),`
`,n.jsxs(i.li,{children:[`
`,n.jsx(o,{kind:e.badge,label:"badge",story:r.migrationFrom17}),`
`]}),`
`,n.jsxs(i.li,{children:[`
`,n.jsx(o,{kind:e.breadcrumb,label:"breadcrumb",story:r.migrationFrom17}),`
`]}),`
`,n.jsxs(i.li,{children:[`
`,n.jsx(o,{kind:e.button,label:"button",story:r.migrationFrom17}),`
`]}),`
`,n.jsxs(i.li,{children:[`
`,n.jsx(o,{kind:e.card,label:"card",story:r.migrationFrom17}),`
`]}),`
`,n.jsxs(i.li,{children:[`
`,n.jsx(o,{label:"cart",title:e.cart}),`
`]}),`
`,n.jsxs(i.li,{children:[`
`,n.jsx(o,{kind:e.checkbox,label:"checkbox",story:r.migrationFrom17}),`
`]}),`
`,n.jsxs(i.li,{children:[`
`,n.jsx(o,{kind:e.clipboard,label:"clipboard",story:r.migrationFrom17}),`
`]}),`
`,n.jsxs(i.li,{children:[`
`,n.jsx(o,{kind:e.code,label:"code",story:r.migrationFrom17}),`
`]}),`
`,n.jsxs(i.li,{children:[`
`,n.jsx(o,{label:"content-addon",title:e.contentAddon}),`
`]}),`
`,n.jsxs(i.li,{children:[`
`,n.jsx(o,{kind:e.datepicker,label:"datepicker",story:r.migrationFrom17}),`
`]}),`
`,n.jsxs(i.li,{children:[`
`,n.jsx(o,{kind:e.divider,label:"divider",story:r.migrationFrom17}),`
`]}),`
`,n.jsxs(i.li,{children:[`
`,n.jsx(o,{kind:e.fileUpload,label:"file-upload",story:r.migrationFrom17}),`
`]}),`
`,n.jsxs(i.li,{children:[`
`,n.jsx(o,{label:"flag",title:e.flag}),`
`]}),`
`,n.jsxs(i.li,{children:[`
`,n.jsx(o,{kind:e.formField,label:"form-field",story:r.migrationFrom17}),`
`]}),`
`,n.jsxs(i.li,{children:[`
`,n.jsx(o,{kind:e.icon,label:"icon",story:r.migrationFrom17}),`
`]}),`
`,n.jsxs(i.li,{children:[`
`,n.jsx(o,{kind:e.input,label:"input",story:r.migrationFrom17}),`
`]}),`
`,n.jsxs(i.li,{children:[`
`,n.jsx(o,{kind:e.link,label:"link",story:r.migrationFrom17}),`
`]}),`
`,n.jsxs(i.li,{children:[`
`,n.jsx(o,{kind:e.medium,label:"medium",story:r.migrationFrom17}),`
`]}),`
`,n.jsxs(i.li,{children:[`
`,n.jsx(o,{label:"menu",title:e.menu}),`
`]}),`
`,n.jsxs(i.li,{children:[`
`,n.jsx(o,{kind:e.message,label:"message",story:r.migrationFrom17}),`
`]}),`
`,n.jsxs(i.li,{children:[`
`,n.jsx(o,{kind:e.modal,label:"modal",story:r.migrationFrom17}),`
`]}),`
`,n.jsxs(i.li,{children:[`
`,n.jsx(o,{kind:e.pagination,label:"pagination",story:r.migrationFrom17}),`
`]}),`
`,n.jsxs(i.li,{children:[`
`,n.jsx(o,{kind:e.password,label:"password",story:r.migrationFrom17}),`
`]}),`
`,n.jsxs(i.li,{children:[`
`,n.jsx(o,{kind:e.phoneNumber,label:"phone-number",story:r.migrationFrom17}),`
`]}),`
`,n.jsxs(i.li,{children:[`
`,n.jsx(o,{kind:e.popover,label:"popover",story:r.migrationFrom17}),`
`]}),`
`,n.jsxs(i.li,{children:[`
`,n.jsx(o,{kind:e.progressBar,label:"progress-bar",story:r.migrationFrom17}),`
`]}),`
`,n.jsxs(i.li,{children:[`
`,n.jsx(o,{label:"search-bar",title:e.searchBar}),`
`]}),`
`,n.jsxs(i.li,{children:[`
`,n.jsx(o,{kind:e.quantity,label:"quantity",story:r.migrationFrom17}),`
`]}),`
`,n.jsxs(i.li,{children:[`
`,n.jsx(o,{kind:e.radio,label:"radio",story:r.migrationFrom17}),`
`]}),`
`,n.jsxs(i.li,{children:[`
`,n.jsx(o,{kind:e.range,label:"range",story:r.migrationFrom17}),`
`]}),`
`,n.jsxs(i.li,{children:[`
`,n.jsx(o,{kind:e.select,label:"select",story:r.migrationFrom17}),`
`]}),`
`,n.jsxs(i.li,{children:[`
`,n.jsx(o,{kind:e.skeleton,label:"skeleton",story:r.migrationFrom17}),`
`]}),`
`,n.jsxs(i.li,{children:[`
`,n.jsx(o,{kind:e.spinner,label:"spinner",story:r.migrationFrom17}),`
`]}),`
`,n.jsxs(i.li,{children:[`
`,n.jsx(o,{kind:e.switch,label:"switch",story:r.migrationFrom17}),`
`]}),`
`,n.jsxs(i.li,{children:[`
`,n.jsx(o,{kind:e.table,label:"table",story:r.migrationFrom17}),`
`]}),`
`,n.jsxs(i.li,{children:[`
`,n.jsx(o,{kind:e.tabs,label:"tabs",story:r.migrationFrom17}),`
`]}),`
`,n.jsxs(i.li,{children:[`
`,n.jsx(o,{kind:e.tag,label:"tag",story:r.migrationFrom17}),`
`]}),`
`,n.jsxs(i.li,{children:[`
`,n.jsx(o,{kind:e.text,label:"text",story:r.migrationFrom17}),`
`]}),`
`,n.jsxs(i.li,{children:[`
`,n.jsx(o,{kind:e.textarea,label:"textarea",story:r.migrationFrom17}),`
`]}),`
`,n.jsxs(i.li,{children:[`
`,n.jsx(o,{kind:e.timepicker,label:"timepicker",story:r.migrationFrom17}),`
`]}),`
`,n.jsxs(i.li,{children:[`
`,n.jsx(o,{kind:e.toggle,label:"toggle",story:r.migrationFrom17}),`
`]}),`
`,n.jsxs(i.li,{children:[`
`,n.jsx(o,{kind:e.tooltip,label:"tooltip",story:r.migrationFrom17}),`
`]}),`
`]})]})}function Fn(s={}){const{wrapper:i}={...a(),...s.components};return i?n.jsx(i,{...s,children:n.jsx(l,{...s})}):l(s)}export{Fn as default};
