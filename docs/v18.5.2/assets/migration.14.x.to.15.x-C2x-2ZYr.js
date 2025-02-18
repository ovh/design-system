import{j as o,M as i,d as s}from"./index-s2XCIBmK.js";import{u as d}from"./index-BzRxuu7r.js";import{H as r}from"./Heading-DPkeex3C.js";import"./iframe-b7U1zSTi.js";import"../sb-preview/runtime.js";import"./index-8AfNH5n5.js";import"./index-D-8MO0q_.js";import"./index-DrFu-skq.js";import"./index-DCBH0_Tl.js";import"./index-OMpnLKmJ.js";import"./ods-accordion2-C2zw5EtX.js";import"./index-DAZhnxgO.js";import"./icon-name-C6aMXAXT.js";import"./ods-icon2-C2sSMg6h.js";import"./ods-badge-CMZ1G1-q.js";import"./ods-breadcrumb-item2-Chi8uW7w.js";import"./ods-link2-DhrEm8Nk.js";import"./ods-button2-DJxJiLcj.js";import"./ods-spinner2-CPyWCS2f.js";import"./ods-card-CsxtEQHf.js";import"./ods-checkbox2-D1rfq4Wo.js";import"./dom-CO1DdTQY.js";import"./ods-clipboard2-CWpjSCiO.js";import"./ods-input2-NhqVSkkH.js";import"./type-B5zI8QxY.js";import"./ods-tooltip2-CW12aP9b.js";import"./overlay-KZpfSxWH.js";import"./ods-code2-3QPYbtLQ.js";import"./ods-datepicker2-BYQpPxj0.js";import"./locale-NOa-Gxlr.js";import"./ods-divider-Dtiri0aY.js";import"./ods-divider2-yzIshch6.js";import"./ods-drawer2-DKhK7oOX.js";import"./ods-file-upload2-WcWZbv1U.js";import"./ods-progress-bar2-Dg_V5kiw.js";import"./ods-form-field2-BDYkM6lU.js";import"./ods-icon-DOZBIEJb.js";import"./ods-link-C3iAbK8i.js";import"./ods-medium2-BnayTic8.js";import"./ods-message-DErUZ_Xg.js";import"./ods-modal2-CLthqs1m.js";import"./ods-pagination2-Do5FFUNV.js";import"./ods-select2-uYxcgqp_.js";import"./ods-password2-YsAErLiV.js";import"./ods-phone-number2-Dku_7tcX.js";import"./ods-popover2-D0fTxPry.js";import"./ods-quantity2-Dc2INetT.js";import"./ods-radio2-NdDFmobW.js";import"./ods-range2-DVd4LCay.js";import"./ods-skeleton2-B7sDasgF.js";import"./ods-switch-item2-D-SJNcDd.js";import"./ods-tabs2-ChMEr-fQ.js";import"./ods-table2-oe37kiP3.js";import"./ods-tag2-CInySbKk.js";import"./ods-text-BO_pN8NQ.js";import"./ods-textarea2-BqL_D5sd.js";import"./ods-timepicker2-C6TMFSLy.js";import"./ods-toggle2-BgUL7nI_.js";function n(t){const e={a:"a",code:"code",h1:"h1",li:"li",p:"p",ul:"ul",...d(),...t.components};return o.jsxs(o.Fragment,{children:[o.jsx(i,{title:"OVHcloud Design System/What's new?/Migration guide/14.x to 15.x"}),`
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
