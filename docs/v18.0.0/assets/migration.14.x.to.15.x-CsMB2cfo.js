import{j as e}from"./jsx-runtime-Dn0LW--f.js";import{u as s}from"./index-DeyDdHvX.js";import{M as r}from"./index-BM3JsZOq.js";import"./iframe-6_jBXMSq.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-B_J8iUie.js";import"./index-DX_4BEHg.js";import"./index-DrFu-skq.js";function t(n){const o={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...s(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{title:"OVHcloud Design System/What's new?/Migration guide/14.x to 15.x"}),`
`,e.jsxs(o.h1,{id:"1411-to-1500-compare",children:[e.jsx(o.a,{href:"https://ovh.github.io/design-system/v14.1.1/?path=/story/ovhcloud-design-system-what-s-new-changelog--page",rel:"nofollow",children:"14.1.1"})," to ",e.jsx(o.a,{href:"https://ovh.github.io/design-system/v15.0.0/?path=/story/ovhcloud-design-system-what-s-new-changelog--page",rel:"nofollow",children:"15.0.0"})," (",e.jsx(o.a,{href:"https://github.com/ovh/design-system/compare/release/14.0...release/15.0",rel:"nofollow",children:"compare"}),")"]}),`
`,e.jsx(o.h2,{id:"text",children:"Text"}),`
`,e.jsx(o.h3,{id:"dependency",children:"Dependency"}),`
`,e.jsxs(o.p,{children:["Add a dependency to ",e.jsx(o.code,{children:"@ovhcloud/ods-component-text"})," or ",e.jsx(o.code,{children:"@ovhcloud/ods-components"}),"."]}),`
`,e.jsx(o.h3,{id:"import",children:"Import"}),`
`,e.jsx(o.p,{children:"Replace any imports like the followings:"}),`
`,e.jsx(o.pre,{children:e.jsx(o.code,{className:"language-js",children:`// Component
import { OsdsText } from '@ovhcloud/ods-stencil/components/text'
import { OsdsText } from '@ovhcloud/ods-stencil/components/text/react'
import { OsdsText } from '@ovhcloud/ods-stencil/components/text/vue'

// Enums
import { OdsTextLevel } from '@ovhcloud/ods-core'
import { OdsTextLevelList } from '@ovhcloud/ods-core'
import { OdsTextSize } from '@ovhcloud/ods-core'
import { OdsTextSizeList } from '@ovhcloud/ods-core'

// Interfaces
import { OdsTextAttributes } from '@ovhcloud/ods-core'
`})}),`
`,e.jsx(o.p,{children:"to:"}),`
`,e.jsx(o.pre,{children:e.jsx(o.code,{className:"language-js",children:`// Component
import { OsdsText } from '@ovhcloud/ods-component-text'
import { OsdsText } from '@ovhcloud/ods-component-text/react'
import { OsdsText } from '@ovhcloud/ods-component-text/vue'

// Enums
import { ODS_TEXT_LEVEL } from '@ovhcloud/ods-component-text'
import { ODS_TEXT_LEVELS } from '@ovhcloud/ods-component-text'
import { ODS_TEXT_SIZE } from '@ovhcloud/ods-component-text'
import { ODS_TEXT_SIZES } from '@ovhcloud/ods-component-text'

// Interfaces
import type { OdsTextAttribute } from '@ovhcloud/ods-component-text'
`})}),`
`,e.jsx(o.p,{children:"Following interfaces has been removed:"}),`
`,e.jsxs(o.ul,{children:[`
`,e.jsx(o.li,{children:e.jsx(o.code,{children:"OdsText"})}),`
`,e.jsx(o.li,{children:e.jsx(o.code,{children:"OdsTextEvents"})}),`
`,e.jsx(o.li,{children:e.jsx(o.code,{children:"OdsTextMethods"})}),`
`,e.jsx(o.li,{children:e.jsx(o.code,{children:"OdsTextLevelUnion"})}),`
`,e.jsx(o.li,{children:e.jsx(o.code,{children:"OdsTextSizeUnion"})}),`
`]}),`
`,e.jsx(o.h2,{id:"textarea",children:"Textarea"}),`
`,e.jsx(o.h3,{id:"dependency-1",children:"Dependency"}),`
`,e.jsxs(o.p,{children:["Add a dependency to ",e.jsx(o.code,{children:"@ovhcloud/ods-component-textarea"})," or ",e.jsx(o.code,{children:"@ovhcloud/ods-components"}),"."]}),`
`,e.jsx(o.h3,{id:"import-1",children:"Import"}),`
`,e.jsx(o.p,{children:"Replace any imports like the followings:"}),`
`,e.jsx(o.pre,{children:e.jsx(o.code,{className:"language-js",children:`// Component
import { OsdsTextarea } from '@ovhcloud/ods-stencil/components/textarea'
import { OsdsTextarea } from '@ovhcloud/ods-stencil/components/textarea/react'
import { OsdsTextarea } from '@ovhcloud/ods-stencil/components/textarea/vue'

// Enums
import { OdsTextAreaSize } from '@ovhcloud/ods-core'
import { OdsTextAreaSizeList } from '@ovhcloud/ods-core'

// Interfaces
import { OdsTextAreaAttributes } from '@ovhcloud/ods-core'
import { OdsTextAreaEvents, OdsTextAreaChangeEventDetail } from '@ovhcloud/ods-core'
import { OdsTextAreaMethods } from '@ovhcloud/ods-core'
`})}),`
`,e.jsx(o.p,{children:"to:"}),`
`,e.jsx(o.pre,{children:e.jsx(o.code,{className:"language-js",children:`// Component
import { OsdsTextarea } from '@ovhcloud/ods-component-textarea'
import { OsdsTextarea } from '@ovhcloud/ods-component-textarea/react'
import { OsdsTextarea } from '@ovhcloud/ods-component-textarea/vue'

// Enums
import { ODS_TEXT_LEVEL } from '@ovhcloud/ods-component-textarea'
import { ODS_TEXT_LEVELS } from '@ovhcloud/ods-component-textarea'
import { ODS_TEXT_SIZE } from '@ovhcloud/ods-component-textarea'
import { ODS_TEXT_SIZES } from '@ovhcloud/ods-component-textarea'

// Interfaces
import type { OdsTextAreaAttribute } from '@ovhcloud/ods-component-textarea'
import type { OdsTextAreaEvent, OdsTextAreaChangeEvent } from '@ovhcloud/ods-component-textarea'
import type { OdsTextAreaMethod } from '@ovhcloud/ods-component-textarea'
`})}),`
`,e.jsx(o.p,{children:"Following interfaces has been removed:"}),`
`,e.jsxs(o.ul,{children:[`
`,e.jsx(o.li,{children:e.jsx(o.code,{children:"OdsTextArea"})}),`
`,e.jsx(o.li,{children:e.jsx(o.code,{children:"OdsTextAreaBehavior"})}),`
`,e.jsx(o.li,{children:e.jsx(o.code,{children:"OdsTextAreaSizeUnion"})}),`
`]})]})}function u(n={}){const{wrapper:o}={...s(),...n.components};return o?e.jsx(o,{...n,children:e.jsx(t,{...n})}):t(n)}export{u as default};
