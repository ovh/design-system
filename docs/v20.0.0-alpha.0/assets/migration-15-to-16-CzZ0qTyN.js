import{i as e}from"./rolldown-runtime-Dd_uD5pT.js";import{t}from"./jsx-runtime-DREnUpxT.js";import{T as n}from"./index-CdRG7ZE_.js";var r=e(t());function i(e){let t={a:`a`,code:`code`,h1:`h1`,li:`li`,p:`p`,pre:`pre`,ul:`ul`,...n(),...e.components},{Heading:i}=t;return i||o(`Heading`,!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(t.h1,{children:[(0,r.jsx)(t.a,{href:`https://ovh.github.io/design-system/v15.0.1/?path=/story/ovhcloud-design-system-what-s-new-changelog--page`,children:`15.0.1`}),` to `,(0,r.jsx)(t.a,{href:`https://ovh.github.io/design-system/v16.0.0/?path=/story/ovhcloud-design-system-what-s-new-changelog--page`,children:`16.0.0`}),` (`,(0,r.jsx)(t.a,{href:`https://github.com/ovh/design-system/compare/release/15.0...release/16.0`,children:`compare`}),`)`]}),`
`,(0,r.jsx)(t.p,{children:`Presenting all changes, components per components will cause a very long and hard to use changelog.`}),`
`,(0,r.jsx)(t.p,{children:`Instead we'll present you the fundamental changes that have been applied for all of the existing components.`}),`
`,(0,r.jsx)(t.p,{children:`The same logics has been applied to each components.`}),`
`,(0,r.jsx)(t.p,{children:`If you have any issue finding a specific change, feel free to contact us directly and we'll help you migrate.`}),`
`,(0,r.jsx)(i,{label:`All Components`,level:2}),`
`,(0,r.jsx)(i,{label:`Dependency`,level:3}),`
`,(0,r.jsx)(t.p,{children:`To use the component add a dependency to either:`}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:`@ovhcloud/ods-component-<component>`}),` to import only the specific component.`]}),`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:`@ovhcloud/ods-components`}),` to import all components.`]}),`
`]}),`
`,(0,r.jsx)(i,{label:`Import`,level:3}),`
`,(0,r.jsx)(t.p,{children:`Replace any imports like the followings:`}),`
`,(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:`language-typescript`,children:`// Previously component were imported using one of:
import { OsdsSpinner } from '@ovhcloud/ods-stencil/components/spinner'
import { OsdsSpinner } from '@ovhcloud/ods-stencil/components/spinner/react'
import { OsdsSpinner } from '@ovhcloud/ods-stencil/components/spinner/vue'

// Enums were imported from the ods-core library
import { OdsSpinnerSize, OdsSpinnerSizeList } from '@ovhcloud/ods-core'

// Interfaces were imported from the ods-core library
import { OdsSpinnerAttributes } from '@ovhcloud/ods-core'
`})}),`
`,(0,r.jsx)(t.p,{children:`to:`}),`
`,(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:`language-typescript`,children:`// Component are now imported using one of:
import { OsdsSpinner } from '@ovhcloud/ods-component-spinner'
import { OsdsSpinner } from '@ovhcloud/ods-component-spinner/react'
import { OsdsSpinner } from '@ovhcloud/ods-component-spinner/vue'

// Enums are now imported directly from the component
import { ODS_SPINNER_SIZE, ODS_SPINNER_SIZES } from '@ovhcloud/ods-component-spinner'

// Interfaces are now imported directly from the component
import type { OdsSpinnerAttribute } from '@ovhcloud/ods-component-spinner'
`})}),`
`,(0,r.jsx)(t.p,{children:`Some types have been removed from ODS, as they were empty or not used, if you can't find a type you were using,
please contact us to see where it has been moved or how to replace it.`})]})}function a(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(i,{...e})}):i(e)}function o(e,t){throw Error(`Expected `+(t?`component`:`object`)+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}export{a as default};