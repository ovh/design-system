import{j as e}from"./jsx-runtime-Cfl8ynUo.js";import{useMDXComponents as d}from"./index-ZwkxtaJJ.js";import{M as c,S as s}from"./index-BsyKfokc.js";import{H as r}from"./Heading-Wb_br1IW.js";import"./index-jIWwRBLr.js";import"./iframe-B_YeBgB7.js";import"./index-DWDEzXrj.js";import"./index-N93khynk.js";import"./index-CXQShRbs.js";import"./index-DrFu-skq.js";import"./Divider-DmVNyNnn-DCNXheUh.js";import"./index-CWkFp9WS-BSIT86NH.js";function n(t){const o={a:"a",code:"code",h1:"h1",li:"li",p:"p",ul:"ul",...d(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(c,{title:"OVHcloud Design System/What's new?/Migration guide/14.x to 15.x"}),`
`,e.jsxs(o.h1,{id:"1411-to-1500-compare",children:[e.jsx(o.a,{href:"https://ovh.github.io/design-system/v14.1.1/?path=/story/ovhcloud-design-system-what-s-new-changelog--page",rel:"nofollow",children:"14.1.1"})," to ",e.jsx(o.a,{href:"https://ovh.github.io/design-system/v15.0.0/?path=/story/ovhcloud-design-system-what-s-new-changelog--page",rel:"nofollow",children:"15.0.0"})," (",e.jsx(o.a,{href:"https://github.com/ovh/design-system/compare/release/14.0...release/15.0",rel:"nofollow",children:"compare"}),")"]}),`
`,e.jsx(r,{label:"Text",level:2}),`
`,e.jsx(r,{label:"Dependency",level:3}),`
`,e.jsxs(o.p,{children:["Add a dependency to ",e.jsx(o.code,{children:"@ovhcloud/ods-component-text"})," or ",e.jsx(o.code,{children:"@ovhcloud/ods-components"}),"."]}),`
`,e.jsx(r,{label:"Import",level:3}),`
`,e.jsx(o.p,{children:"Replace any imports like the followings:"}),`
`,e.jsx(s,{code:`
// Component
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
`,dark:"true",language:"typescript"}),`
`,e.jsx(o.p,{children:"to:"}),`
`,e.jsx(s,{code:`
// Component
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
`,dark:"true",language:"typescript"}),`
`,e.jsx(o.p,{children:"Following interfaces has been removed:"}),`
`,e.jsxs(o.ul,{children:[`
`,e.jsx(o.li,{children:e.jsx(o.code,{children:"OdsText"})}),`
`,e.jsx(o.li,{children:e.jsx(o.code,{children:"OdsTextEvents"})}),`
`,e.jsx(o.li,{children:e.jsx(o.code,{children:"OdsTextMethods"})}),`
`,e.jsx(o.li,{children:e.jsx(o.code,{children:"OdsTextLevelUnion"})}),`
`,e.jsx(o.li,{children:e.jsx(o.code,{children:"OdsTextSizeUnion"})}),`
`]}),`
`,e.jsx(r,{label:"Textarea",level:2}),`
`,e.jsx(r,{label:"Dependency",level:3}),`
`,e.jsxs(o.p,{children:["Add a dependency to ",e.jsx(o.code,{children:"@ovhcloud/ods-component-textarea"})," or ",e.jsx(o.code,{children:"@ovhcloud/ods-components"}),"."]}),`
`,e.jsx(r,{label:"Import",level:3}),`
`,e.jsx(o.p,{children:"Replace any imports like the followings:"}),`
`,e.jsx(s,{code:`
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
`,dark:"true",language:"typescript"}),`
`,e.jsx(o.p,{children:"to:"}),`
`,e.jsx(s,{code:`
// Component
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
`,dark:"true",language:"typescript"}),`
`,e.jsx(o.p,{children:"Following interfaces has been removed:"}),`
`,e.jsxs(o.ul,{children:[`
`,e.jsx(o.li,{children:e.jsx(o.code,{children:"OdsTextArea"})}),`
`,e.jsx(o.li,{children:e.jsx(o.code,{children:"OdsTextAreaBehavior"})}),`
`,e.jsx(o.li,{children:e.jsx(o.code,{children:"OdsTextAreaSizeUnion"})}),`
`]})]})}function O(t={}){const{wrapper:o}={...d(),...t.components};return o?e.jsx(o,{...t,children:e.jsx(n,{...t})}):n(t)}export{O as default};
