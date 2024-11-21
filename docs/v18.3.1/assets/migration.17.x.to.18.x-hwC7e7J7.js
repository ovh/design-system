import{j as n}from"./jsx-runtime-BtDUu9js.js";import{u as r}from"./index-DZL6x4lo.js";import{M as t,d as a}from"./index-CYldocI7.js";import{H as i}from"./Heading-DwuTnCox.js";import{S as o}from"./StorybookLink-BiRTKXGy.js";import"./iframe-D7GxXTWn.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-B_J8iUie.js";import"./index-DX_4BEHg.js";import"./index-DrFu-skq.js";import"./index-BvAGq-5Z.js";import"./index-DtXgNHxz.js";function l(s){const e={a:"a",code:"code",h1:"h1",li:"li",p:"p",ul:"ul",...r(),...s.components};return n.jsxs(n.Fragment,{children:[n.jsx(t,{title:"OVHcloud Design System/What's new?/Migration guide/17.x to 18.x"}),`
`,n.jsxs(e.h1,{id:"1722-to-1800-compare",children:[n.jsx(e.a,{href:"https://ovh.github.io/design-system/v17.2.2/?path=/story/ovhcloud-design-system-what-s-new-changelog--page",rel:"nofollow",children:"17.2.2"})," to ",n.jsx(e.a,{href:"https://ovh.github.io/design-system/v18.0.0/?path=/story/ovhcloud-design-system-what-s-new-changelog--page",rel:"nofollow",children:"18.0.0"})," (",n.jsx(e.a,{href:"https://github.com/ovh/design-system/compare/release/17.0...release/18.0",rel:"nofollow",children:"compare"}),")"]}),`
`,n.jsx(e.p,{children:"If you have any questions or issues regarding the new version, feel free to reach us directly."}),`
`,n.jsx(i,{label:"Libraries",level:2}),`
`,n.jsx(e.p,{children:"The following libs have been removed:"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"@ovhcloud/ods-cdk"}),`
`,n.jsx(e.li,{children:"@ovhcloud/ods-common-core"}),`
`,n.jsx(e.li,{children:"@ovhcloud/ods-common-stencil"}),`
`,n.jsx(e.li,{children:"@ovhcloud/ods-common-testing"}),`
`,n.jsx(e.li,{children:"@ovhcloud/ods-common-theming"}),`
`,n.jsx(e.li,{children:"@ovhcloud/ods-theme-blue-jeans"}),`
`]}),`
`,n.jsx(e.p,{children:"If you were using part of them, please reach out to us so that we can get more information about your usage."}),`
`,n.jsxs(e.p,{children:["To use the new theme, replace ",n.jsx(e.code,{children:"ods-theme-blue-jeans"})," with the following:"]}),`
`,n.jsx(a,{code:"import '@ovhcloud/ods-themes/default';",dark:"true",language:"typescript"}),`
`,n.jsx(i,{label:"Design tokens",level:2}),`
`,n.jsxs(e.p,{children:["Design tokens are now accessible through the ",n.jsx(e.code,{children:"@ovhcloud/ods-themes"})," lib."]}),`
`,n.jsx(e.p,{children:"The list of available tokens has been updated with the latest design changes and match what you may find on the Figma screens."}),`
`,n.jsx(i,{label:"Components",level:2}),`
`,n.jsx(e.p,{children:"As each component was refactored, there are too many changes to list everything here."}),`
`,n.jsxs(e.p,{children:["The main common breaking change is the following: ",n.jsx(e.code,{children:"osds-xxx"})," component is now ",n.jsx(e.code,{children:"ods-xxx"})]}),`
`,n.jsx(e.p,{children:"A complete list of changes and a guide about how to migrate is available per component:"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[`
`,n.jsx(o,{kind:"ODS Components/Accordion",label:"accordion",story:"Migration From 17.x"}),`
`]}),`
`,n.jsxs(e.li,{children:[`
`,n.jsx(o,{kind:"ODS Components/Badge",label:"badge",story:"Migration From 17.x"}),`
`]}),`
`,n.jsxs(e.li,{children:[`
`,n.jsx(o,{kind:"ODS Components/Breadcrumb",label:"breadcrumb",story:"Migration From 17.x"}),`
`]}),`
`,n.jsxs(e.li,{children:[`
`,n.jsx(o,{kind:"ODS Components/Button",label:"button",story:"Migration From 17.x"}),`
`]}),`
`,n.jsxs(e.li,{children:[`
`,n.jsx(o,{kind:"ODS Components/Card",label:"card",story:"Migration From 17.x"}),`
`]}),`
`,n.jsxs(e.li,{children:[`
`,n.jsx(o,{label:"cart",title:"ODS Components/Cart"}),`
`]}),`
`,n.jsxs(e.li,{children:[`
`,n.jsx(o,{kind:"ODS Components/Form elements/Checkbox",label:"checkbox",story:"Migration From 17.x"}),`
`]}),`
`,n.jsxs(e.li,{children:[`
`,n.jsx(o,{kind:"ODS Components/Clipboard",label:"clipboard",story:"Migration From 17.x"}),`
`]}),`
`,n.jsxs(e.li,{children:[`
`,n.jsx(o,{kind:"ODS Components/Code",label:"code",story:"Migration From 17.x"}),`
`]}),`
`,n.jsxs(e.li,{children:[`
`,n.jsx(o,{label:"content-addon",title:"ODS Components/Content Addon"}),`
`]}),`
`,n.jsxs(e.li,{children:[`
`,n.jsx(o,{kind:"ODS Components/Form elements/Datepicker",label:"datepicker",story:"Migration From 17.x"}),`
`]}),`
`,n.jsxs(e.li,{children:[`
`,n.jsx(o,{kind:"ODS Components/Divider",label:"divider",story:"Migration From 17.x"}),`
`]}),`
`,n.jsxs(e.li,{children:[`
`,n.jsx(o,{kind:"ODS Components/Form elements/File Upload",label:"file-upload",story:"Migration From 17.x"}),`
`]}),`
`,n.jsxs(e.li,{children:[`
`,n.jsx(o,{label:"flag",title:"ODS Components/Flag"}),`
`]}),`
`,n.jsxs(e.li,{children:[`
`,n.jsx(o,{kind:"ODS Components/Form elements/Form Field",label:"form-field",story:"Migration From 17.x"}),`
`]}),`
`,n.jsxs(e.li,{children:[`
`,n.jsx(o,{kind:"ODS Components/Icon",label:"icon",story:"Migration From 17.x"}),`
`]}),`
`,n.jsxs(e.li,{children:[`
`,n.jsx(o,{kind:"ODS Components/Form elements/Input",label:"input",story:"Migration From 17.x"}),`
`]}),`
`,n.jsxs(e.li,{children:[`
`,n.jsx(o,{kind:"ODS Components/Link",label:"link",story:"Migration From 17.x"}),`
`]}),`
`,n.jsxs(e.li,{children:[`
`,n.jsx(o,{kind:"ODS Components/Medium",label:"medium",story:"Migration From 17.x"}),`
`]}),`
`,n.jsxs(e.li,{children:[`
`,n.jsx(o,{label:"menu",title:"ODS Components/Menu"}),`
`]}),`
`,n.jsxs(e.li,{children:[`
`,n.jsx(o,{kind:"ODS Components/Message",label:"message",story:"Migration From 17.x"}),`
`]}),`
`,n.jsxs(e.li,{children:[`
`,n.jsx(o,{kind:"ODS Components/Modal",label:"modal",story:"Migration From 17.x"}),`
`]}),`
`,n.jsxs(e.li,{children:[`
`,n.jsx(o,{kind:"ODS Components/Pagination",label:"pagination",story:"Migration From 17.x"}),`
`]}),`
`,n.jsxs(e.li,{children:[`
`,n.jsx(o,{kind:"ODS Components/Form elements/Password",label:"password",story:"Migration From 17.x"}),`
`]}),`
`,n.jsxs(e.li,{children:[`
`,n.jsx(o,{kind:"ODS Components/Form elements/Phone Number",label:"phone-number",story:"Migration From 17.x"}),`
`]}),`
`,n.jsxs(e.li,{children:[`
`,n.jsx(o,{kind:"ODS Components/Popover",label:"popover",story:"Migration From 17.x"}),`
`]}),`
`,n.jsxs(e.li,{children:[`
`,n.jsx(o,{kind:"ODS Components/Progress Bar",label:"progress-bar",story:"Migration From 17.x"}),`
`]}),`
`,n.jsxs(e.li,{children:[`
`,n.jsx(o,{label:"search-bar",title:"ODS Components/Search Bar"}),`
`]}),`
`,n.jsxs(e.li,{children:[`
`,n.jsx(o,{kind:"ODS Components/Form elements/Quantity",label:"quantity",story:"Migration From 17.x"}),`
`]}),`
`,n.jsxs(e.li,{children:[`
`,n.jsx(o,{kind:"ODS Components/Form elements/Radio",label:"radio",story:"Migration From 17.x"}),`
`]}),`
`,n.jsxs(e.li,{children:[`
`,n.jsx(o,{kind:"ODS Components/Form elements/Range",label:"range",story:"Migration From 17.x"}),`
`]}),`
`,n.jsxs(e.li,{children:[`
`,n.jsx(o,{kind:"ODS Components/Form elements/Select",label:"select",story:"Migration From 17.x"}),`
`]}),`
`,n.jsxs(e.li,{children:[`
`,n.jsx(o,{kind:"ODS Components/Skeleton",label:"skeleton",story:"Migration From 17.x"}),`
`]}),`
`,n.jsxs(e.li,{children:[`
`,n.jsx(o,{kind:"ODS Components/Spinner",label:"spinner",story:"Migration From 17.x"}),`
`]}),`
`,n.jsxs(e.li,{children:[`
`,n.jsx(o,{kind:"ODS Components/Form elements/Switch",label:"switch",story:"Migration From 17.x"}),`
`]}),`
`,n.jsxs(e.li,{children:[`
`,n.jsx(o,{kind:"ODS Components/Table",label:"table",story:"Migration From 17.x"}),`
`]}),`
`,n.jsxs(e.li,{children:[`
`,n.jsx(o,{kind:"ODS Components/Tabs",label:"tabs",story:"Migration From 17.x"}),`
`]}),`
`,n.jsxs(e.li,{children:[`
`,n.jsx(o,{kind:"ODS Components/Tag",label:"tag",story:"Migration From 17.x"}),`
`]}),`
`,n.jsxs(e.li,{children:[`
`,n.jsx(o,{kind:"ODS Components/Text",label:"text",story:"Migration From 17.x"}),`
`]}),`
`,n.jsxs(e.li,{children:[`
`,n.jsx(o,{kind:"ODS Components/Form elements/Textarea",label:"textarea",story:"Migration From 17.x"}),`
`]}),`
`,n.jsxs(e.li,{children:[`
`,n.jsx(o,{kind:"ODS Components/Form elements/Timepicker",label:"timepicker",story:"Migration From 17.x"}),`
`]}),`
`,n.jsxs(e.li,{children:[`
`,n.jsx(o,{kind:"ODS Components/Form elements/Toggle",label:"toggle",story:"Migration From 17.x"}),`
`]}),`
`,n.jsxs(e.li,{children:[`
`,n.jsx(o,{kind:"ODS Components/Tooltip",label:"tooltip",story:"Migration From 17.x"}),`
`]}),`
`]})]})}function C(s={}){const{wrapper:e}={...r(),...s.components};return e?n.jsx(e,{...s,children:n.jsx(l,{...s})}):l(s)}export{C as default};
