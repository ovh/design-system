import{j as e}from"./jsx-runtime-3v6rTKkY.js";import{u as t}from"./index-B5y3xRNA.js";import{M as r}from"./index-sugWq352.js";import"./iframe-D98u-D7f.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-B_J8iUie.js";import"./index-DX_4BEHg.js";import"./index-DrFu-skq.js";function s(o){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...t(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{title:"OVHcloud Design System/What's new?/Migration guide/15.x to 16.x"}),`
`,e.jsxs(n.h1,{id:"1501-to-1600-compare",children:[e.jsx(n.a,{href:"https://ovh.github.io/design-system/v15.0.1/?path=/story/ovhcloud-design-system-what-s-new-changelog--page",rel:"nofollow",children:"15.0.1"})," to ",e.jsx(n.a,{href:"https://ovh.github.io/design-system/v16.0.0/?path=/story/ovhcloud-design-system-what-s-new-changelog--page",rel:"nofollow",children:"16.0.0"})," (",e.jsx(n.a,{href:"https://github.com/ovh/design-system/compare/release/15.0...release/16.0",rel:"nofollow",children:"compare"}),")"]}),`
`,e.jsx(n.p,{children:"Presenting all changes, components per components will cause a very long and hard to use changelog."}),`
`,e.jsx(n.p,{children:"Instead we'll present you the fundamental changes that have been applied for all of the existing components."}),`
`,e.jsx(n.p,{children:"The same logics has been applied to each components."}),`
`,e.jsx(n.p,{children:"If you have any issue finding a specific change, feel free to contact us directly and we'll help you migrate."}),`
`,e.jsx(n.h2,{id:"all-components",children:"All Components"}),`
`,e.jsx(n.h3,{id:"dependency",children:"Dependency"}),`
`,e.jsx(n.p,{children:"To use the component add a dependency to either:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"@ovhcloud/ods-component-<component>"})," to import only the specific component."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"@ovhcloud/ods-components"})," to import all components."]}),`
`]}),`
`,e.jsx(n.h3,{id:"import",children:"Import"}),`
`,e.jsx(n.p,{children:"Replace any imports like the followings:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-js",children:`// Previously component were imported using one of:
import { OsdsSpinner } from '@ovhcloud/ods-stencil/components/spinner'
import { OsdsSpinner } from '@ovhcloud/ods-stencil/components/spinner/react'
import { OsdsSpinner } from '@ovhcloud/ods-stencil/components/spinner/vue'

// Enums were imported from the ods-core library
import { OdsSpinnerSize, OdsSpinnerSizeList } from '@ovhcloud/ods-core'

// Interfaces were imported from the ods-core library
import { OdsSpinnerAttributes } from '@ovhcloud/ods-core'
`})}),`
`,e.jsx(n.p,{children:"to:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-js",children:`// Component are now imported using one of:
import { OsdsSpinner } from '@ovhcloud/ods-component-spinner'
import { OsdsSpinner } from '@ovhcloud/ods-component-spinner/react'
import { OsdsSpinner } from '@ovhcloud/ods-component-spinner/vue'

// Enums are now imported directly from the component
import { ODS_SPINNER_SIZE, ODS_SPINNER_SIZES } from '@ovhcloud/ods-component-spinner'

// Interfaces are now imported directly from the component
import type { OdsSpinnerAttribute } from '@ovhcloud/ods-component-spinner'
`})}),`
`,e.jsx(n.p,{children:`Some types have been removed from ODS, as they were empty or not used, if you can't find a type you were using,
please contact us to see where it has been moved or how to replace it.`})]})}function f(o={}){const{wrapper:n}={...t(),...o.components};return n?e.jsx(n,{...o,children:e.jsx(s,{...o})}):s(o)}export{f as default};
