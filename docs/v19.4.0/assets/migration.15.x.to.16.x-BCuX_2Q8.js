import{j as e}from"./jsx-runtime-Cfl8ynUo.js";import{useMDXComponents as i}from"./index-ZwkxtaJJ.js";import{M as p,S as s}from"./index-BsyKfokc.js";import{H as t}from"./Heading-Wb_br1IW.js";import"./index-jIWwRBLr.js";import"./iframe-B_YeBgB7.js";import"./index-DWDEzXrj.js";import"./index-N93khynk.js";import"./index-CXQShRbs.js";import"./index-DrFu-skq.js";import"./Divider-DmVNyNnn-DCNXheUh.js";import"./index-CWkFp9WS-BSIT86NH.js";function r(n){const o={a:"a",code:"code",h1:"h1",li:"li",p:"p",ul:"ul",...i(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(p,{title:"OVHcloud Design System/What's new?/Migration guide/15.x to 16.x"}),`
`,e.jsxs(o.h1,{id:"1501-to-1600-compare",children:[e.jsx(o.a,{href:"https://ovh.github.io/design-system/v15.0.1/?path=/story/ovhcloud-design-system-what-s-new-changelog--page",rel:"nofollow",children:"15.0.1"})," to ",e.jsx(o.a,{href:"https://ovh.github.io/design-system/v16.0.0/?path=/story/ovhcloud-design-system-what-s-new-changelog--page",rel:"nofollow",children:"16.0.0"})," (",e.jsx(o.a,{href:"https://github.com/ovh/design-system/compare/release/15.0...release/16.0",rel:"nofollow",children:"compare"}),")"]}),`
`,e.jsx(o.p,{children:"Presenting all changes, components per components will cause a very long and hard to use changelog."}),`
`,e.jsx(o.p,{children:"Instead we'll present you the fundamental changes that have been applied for all of the existing components."}),`
`,e.jsx(o.p,{children:"The same logics has been applied to each components."}),`
`,e.jsx(o.p,{children:"If you have any issue finding a specific change, feel free to contact us directly and we'll help you migrate."}),`
`,e.jsx(t,{label:"All Components",level:2}),`
`,e.jsx(t,{label:"Dependency",level:3}),`
`,e.jsx(o.p,{children:"To use the component add a dependency to either:"}),`
`,e.jsxs(o.ul,{children:[`
`,e.jsxs(o.li,{children:[e.jsx(o.code,{children:"@ovhcloud/ods-component-<component>"})," to import only the specific component."]}),`
`,e.jsxs(o.li,{children:[e.jsx(o.code,{children:"@ovhcloud/ods-components"})," to import all components."]}),`
`]}),`
`,e.jsx(t,{label:"Import",level:3}),`
`,e.jsx(o.p,{children:"Replace any imports like the followings:"}),`
`,e.jsx(s,{code:`
// Previously component were imported using one of:
import { OsdsSpinner } from '@ovhcloud/ods-stencil/components/spinner'
import { OsdsSpinner } from '@ovhcloud/ods-stencil/components/spinner/react'
import { OsdsSpinner } from '@ovhcloud/ods-stencil/components/spinner/vue'

// Enums were imported from the ods-core library
import { OdsSpinnerSize, OdsSpinnerSizeList } from '@ovhcloud/ods-core'

// Interfaces were imported from the ods-core library
import { OdsSpinnerAttributes } from '@ovhcloud/ods-core'
`,dark:"true",language:"typescript"}),`
`,e.jsx(o.p,{children:"to:"}),`
`,e.jsx(s,{code:`
// Component are now imported using one of:
import { OsdsSpinner } from '@ovhcloud/ods-component-spinner'
import { OsdsSpinner } from '@ovhcloud/ods-component-spinner/react'
import { OsdsSpinner } from '@ovhcloud/ods-component-spinner/vue'

// Enums are now imported directly from the component
import { ODS_SPINNER_SIZE, ODS_SPINNER_SIZES } from '@ovhcloud/ods-component-spinner'

// Interfaces are now imported directly from the component
import type { OdsSpinnerAttribute } from '@ovhcloud/ods-component-spinner'
`,dark:"true",language:"typescript"}),`
`,e.jsx(o.p,{children:`Some types have been removed from ODS, as they were empty or not used, if you can't find a type you were using,
please contact us to see where it has been moved or how to replace it.`})]})}function j(n={}){const{wrapper:o}={...i(),...n.components};return o?e.jsx(o,{...n,children:e.jsx(r,{...n})}):r(n)}export{j as default};
