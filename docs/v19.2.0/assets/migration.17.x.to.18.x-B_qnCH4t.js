import{j as e}from"./jsx-runtime-Cfl8ynUo.js";import{useMDXComponents as i}from"./index-ZwkxtaJJ.js";import{M as l,S as r}from"./index-MSKBj7dO.js";import{H as t}from"./Heading-Dphh9YsV.js";import"./index-jIWwRBLr.js";import"./iframe-Cbr9ww7Z.js";import"./index-DWDEzXrj.js";import"./index-N93khynk.js";import"./index-CXQShRbs.js";import"./index-DrFu-skq.js";import"./index-2w0W-O47-BJ19ihbZ.js";import"./ods-react235-aAAP9SXj.js";function s(n){const o={a:"a",code:"code",h1:"h1",li:"li",p:"p",ul:"ul",...i(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"OVHcloud Design System/What's new?/Migration guide/17.x to 18.x"}),`
`,e.jsxs(o.h1,{id:"1722-to-1800-compare",children:[e.jsx(o.a,{href:"https://ovh.github.io/design-system/v17.2.2/?path=/story/ovhcloud-design-system-what-s-new-changelog--page",rel:"nofollow",children:"17.2.2"})," to ",e.jsx(o.a,{href:"https://ovh.github.io/design-system/v18.0.0/?path=/story/ovhcloud-design-system-what-s-new-changelog--page",rel:"nofollow",children:"18.0.0"})," (",e.jsx(o.a,{href:"https://github.com/ovh/design-system/compare/release/17.0...release/18.0",rel:"nofollow",children:"compare"}),")"]}),`
`,e.jsx(o.p,{children:"If you have any questions or issues regarding the new version, feel free to reach us directly."}),`
`,e.jsx(t,{label:"Libraries",level:2}),`
`,e.jsx(o.p,{children:"The following libs have been removed:"}),`
`,e.jsxs(o.ul,{children:[`
`,e.jsx(o.li,{children:"@ovhcloud/ods-cdk"}),`
`,e.jsx(o.li,{children:"@ovhcloud/ods-common-core"}),`
`,e.jsx(o.li,{children:"@ovhcloud/ods-common-stencil"}),`
`,e.jsx(o.li,{children:"@ovhcloud/ods-common-testing"}),`
`,e.jsx(o.li,{children:"@ovhcloud/ods-common-theming"}),`
`,e.jsx(o.li,{children:"@ovhcloud/ods-theme-blue-jeans"}),`
`]}),`
`,e.jsx(o.p,{children:"If you were using part of them, please reach out to us so that we can get more information about your usage."}),`
`,e.jsxs(o.p,{children:["To use the new theme, replace ",e.jsx(o.code,{children:"ods-theme-blue-jeans"})," with the following:"]}),`
`,e.jsx(r,{code:"import '@ovhcloud/ods-themes/default';",dark:"true",language:"typescript"}),`
`,e.jsx(t,{label:"Design tokens",level:2}),`
`,e.jsxs(o.p,{children:["Design tokens are now accessible through the ",e.jsx(o.code,{children:"@ovhcloud/ods-themes"})," lib."]}),`
`,e.jsx(o.p,{children:"The list of available tokens has been updated with the latest design changes and match what you may find on the Figma screens."}),`
`,e.jsx(t,{label:"Components",level:2}),`
`,e.jsx(o.p,{children:"As each component was refactored, there are too many changes to list everything here."}),`
`,e.jsxs(o.p,{children:["The main common breaking change is the following: ",e.jsx(o.code,{children:"osds-xxx"})," component is now ",e.jsx(o.code,{children:"ods-xxx"})]}),`
`,e.jsx(o.p,{children:"A complete list of changes and a guide about how to migrate is available per component in the v18 documentation."}),`
`,e.jsx(o.p,{children:"Use the top-left version selector to move to the latest v18.x documentation where you'll find the latest up-to-date information."})]})}function w(n={}){const{wrapper:o}={...i(),...n.components};return o?e.jsx(o,{...n,children:e.jsx(s,{...n})}):s(n)}export{w as default};
