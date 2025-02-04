import{j as o,M as i,d as s}from"./index-DQsySnuC.js";import{u as d}from"./index-Xj8pMhSr.js";import{H as r}from"./Heading-DDc_MF2r.js";import"./iframe-DRtgxPEL.js";import"../sb-preview/runtime.js";import"./index-8AfNH5n5.js";import"./index-D-8MO0q_.js";import"./index-DrFu-skq.js";import"./index-DCBH0_Tl.js";import"./index-CihiY_f6.js";import"./ods-accordion2-Bgg69lRV.js";import"./index-DAZhnxgO.js";import"./icon-name-C6aMXAXT.js";import"./ods-icon2-Bl6f3POv.js";import"./ods-badge-tHc24Eg4.js";import"./ods-breadcrumb-item2-CoLTn2CF.js";import"./ods-link2-DDMr4sUm.js";import"./ods-button2-Bhm26DQr.js";import"./ods-spinner2-DCN2yKlT.js";import"./ods-card-B_VebKXk.js";import"./ods-checkbox2-BOuFx8yF.js";import"./dom-CO1DdTQY.js";import"./ods-clipboard2-NuJn2ry3.js";import"./ods-input2-B9cw61K_.js";import"./type-B5zI8QxY.js";import"./ods-tooltip2-BwzEvmuE.js";import"./overlay-KZpfSxWH.js";import"./ods-code2-bZeM2NI-.js";import"./ods-datepicker2-DwwUrg1C.js";import"./locale-NOa-Gxlr.js";import"./ods-divider-3cgmT4wP.js";import"./ods-divider2-Dc25YIYb.js";import"./ods-drawer2-DsENZFv4.js";import"./ods-file-upload2-CPd6D9Z5.js";import"./ods-progress-bar2-BuFm8qT0.js";import"./ods-form-field2-Tc9B1-rj.js";import"./ods-icon-NURRZ9Mf.js";import"./ods-link-BE9dMQzg.js";import"./ods-medium2-BB_NU63C.js";import"./ods-message-B9bD81Bu.js";import"./ods-modal2-CP36WQeg.js";import"./ods-pagination2-CotgNPzL.js";import"./ods-select2-B4wr0dem.js";import"./ods-password2-BQKXsiEd.js";import"./ods-phone-number2-D1K1HcDS.js";import"./ods-popover2-hre_XUC2.js";import"./ods-quantity2-DOjRn13r.js";import"./ods-radio2-BtBodUES.js";import"./ods-range2-BhwU834C.js";import"./ods-skeleton2-dZcgHYAN.js";import"./ods-switch-item2-m1p75_3x.js";import"./ods-tabs2-wJlXfoZt.js";import"./ods-table2-vWlGUOoj.js";import"./ods-tag2-Dj0-zHXw.js";import"./ods-text-CTeC-41B.js";import"./ods-textarea2-BHQdu6bK.js";import"./ods-timepicker2-2oCWgeQp.js";import"./ods-toggle2-DbSuYqWU.js";function n(t){const e={a:"a",code:"code",h1:"h1",li:"li",p:"p",ul:"ul",...d(),...t.components};return o.jsxs(o.Fragment,{children:[o.jsx(i,{title:"OVHcloud Design System/What's new?/Migration guide/14.x to 15.x"}),`
`,o.jsxs(e.h1,{id:"1411-to-1500-compare",children:[o.jsx(e.a,{href:"https://ovh.github.io/design-system/v14.1.1/?path=/story/ovhcloud-design-system-what-s-new-changelog--page",rel:"nofollow",children:"14.1.1"})," to ",o.jsx(e.a,{href:"https://ovh.github.io/design-system/v15.0.0/?path=/story/ovhcloud-design-system-what-s-new-changelog--page",rel:"nofollow",children:"15.0.0"})," (",o.jsx(e.a,{href:"https://github.com/ovh/design-system/compare/release/14.0...release/15.0",rel:"nofollow",children:"compare"}),")"]}),`
`,o.jsx(r,{label:"Text",level:2}),`
`,o.jsx(r,{label:"Dependency",level:3}),`
`,o.jsxs(e.p,{children:["Add a dependency to ",o.jsx(e.code,{children:"@ovhcloud/ods-component-text"})," or ",o.jsx(e.code,{children:"@ovhcloud/ods-components"}),"."]}),`
`,o.jsx(r,{label:"Import",level:3}),`
`,o.jsx(e.p,{children:"Replace any imports like the followings:"}),`
`,o.jsx(s,{code:`
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
`,o.jsx(e.p,{children:"to:"}),`
`,o.jsx(s,{code:`
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
`,o.jsx(e.p,{children:"Following interfaces has been removed:"}),`
`,o.jsxs(e.ul,{children:[`
`,o.jsx(e.li,{children:o.jsx(e.code,{children:"OdsText"})}),`
`,o.jsx(e.li,{children:o.jsx(e.code,{children:"OdsTextEvents"})}),`
`,o.jsx(e.li,{children:o.jsx(e.code,{children:"OdsTextMethods"})}),`
`,o.jsx(e.li,{children:o.jsx(e.code,{children:"OdsTextLevelUnion"})}),`
`,o.jsx(e.li,{children:o.jsx(e.code,{children:"OdsTextSizeUnion"})}),`
`]}),`
`,o.jsx(r,{label:"Textarea",level:2}),`
`,o.jsx(r,{label:"Dependency",level:3}),`
`,o.jsxs(e.p,{children:["Add a dependency to ",o.jsx(e.code,{children:"@ovhcloud/ods-component-textarea"})," or ",o.jsx(e.code,{children:"@ovhcloud/ods-components"}),"."]}),`
`,o.jsx(r,{label:"Import",level:3}),`
`,o.jsx(e.p,{children:"Replace any imports like the followings:"}),`
`,o.jsx(s,{code:`
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
`,o.jsx(e.p,{children:"to:"}),`
`,o.jsx(s,{code:`
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
`,o.jsx(e.p,{children:"Following interfaces has been removed:"}),`
`,o.jsxs(e.ul,{children:[`
`,o.jsx(e.li,{children:o.jsx(e.code,{children:"OdsTextArea"})}),`
`,o.jsx(e.li,{children:o.jsx(e.code,{children:"OdsTextAreaBehavior"})}),`
`,o.jsx(e.li,{children:o.jsx(e.code,{children:"OdsTextAreaSizeUnion"})}),`
`]})]})}function xo(t={}){const{wrapper:e}={...d(),...t.components};return e?o.jsx(e,{...t,children:o.jsx(n,{...t})}):n(t)}export{xo as default};
