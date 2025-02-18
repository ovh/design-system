import{j as o,M as s,d as r}from"./index-s2XCIBmK.js";import{u as p}from"./index-BzRxuu7r.js";import{H as n}from"./Heading-DPkeex3C.js";import"./iframe-b7U1zSTi.js";import"../sb-preview/runtime.js";import"./index-8AfNH5n5.js";import"./index-D-8MO0q_.js";import"./index-DrFu-skq.js";import"./index-DCBH0_Tl.js";import"./index-OMpnLKmJ.js";import"./ods-accordion2-C2zw5EtX.js";import"./index-DAZhnxgO.js";import"./icon-name-C6aMXAXT.js";import"./ods-icon2-C2sSMg6h.js";import"./ods-badge-CMZ1G1-q.js";import"./ods-breadcrumb-item2-Chi8uW7w.js";import"./ods-link2-DhrEm8Nk.js";import"./ods-button2-DJxJiLcj.js";import"./ods-spinner2-CPyWCS2f.js";import"./ods-card-CsxtEQHf.js";import"./ods-checkbox2-D1rfq4Wo.js";import"./dom-CO1DdTQY.js";import"./ods-clipboard2-CWpjSCiO.js";import"./ods-input2-NhqVSkkH.js";import"./type-B5zI8QxY.js";import"./ods-tooltip2-CW12aP9b.js";import"./overlay-KZpfSxWH.js";import"./ods-code2-3QPYbtLQ.js";import"./ods-datepicker2-BYQpPxj0.js";import"./locale-NOa-Gxlr.js";import"./ods-divider-Dtiri0aY.js";import"./ods-divider2-yzIshch6.js";import"./ods-drawer2-DKhK7oOX.js";import"./ods-file-upload2-WcWZbv1U.js";import"./ods-progress-bar2-Dg_V5kiw.js";import"./ods-form-field2-BDYkM6lU.js";import"./ods-icon-DOZBIEJb.js";import"./ods-link-C3iAbK8i.js";import"./ods-medium2-BnayTic8.js";import"./ods-message-DErUZ_Xg.js";import"./ods-modal2-CLthqs1m.js";import"./ods-pagination2-Do5FFUNV.js";import"./ods-select2-uYxcgqp_.js";import"./ods-password2-YsAErLiV.js";import"./ods-phone-number2-Dku_7tcX.js";import"./ods-popover2-D0fTxPry.js";import"./ods-quantity2-Dc2INetT.js";import"./ods-radio2-NdDFmobW.js";import"./ods-range2-DVd4LCay.js";import"./ods-skeleton2-B7sDasgF.js";import"./ods-switch-item2-D-SJNcDd.js";import"./ods-tabs2-ChMEr-fQ.js";import"./ods-table2-oe37kiP3.js";import"./ods-tag2-CInySbKk.js";import"./ods-text-BO_pN8NQ.js";import"./ods-textarea2-BqL_D5sd.js";import"./ods-timepicker2-C6TMFSLy.js";import"./ods-toggle2-BgUL7nI_.js";function i(t){const e={a:"a",code:"code",h1:"h1",li:"li",p:"p",ul:"ul",...p(),...t.components};return o.jsxs(o.Fragment,{children:[o.jsx(s,{title:"OVHcloud Design System/What's new?/Migration guide/15.x to 16.x"}),`
`,o.jsxs(e.h1,{id:"1501-to-1600-compare",children:[o.jsx(e.a,{href:"https://ovh.github.io/design-system/v15.0.1/?path=/story/ovhcloud-design-system-what-s-new-changelog--page",rel:"nofollow",children:"15.0.1"})," to ",o.jsx(e.a,{href:"https://ovh.github.io/design-system/v16.0.0/?path=/story/ovhcloud-design-system-what-s-new-changelog--page",rel:"nofollow",children:"16.0.0"})," (",o.jsx(e.a,{href:"https://github.com/ovh/design-system/compare/release/15.0...release/16.0",rel:"nofollow",children:"compare"}),")"]}),`
`,o.jsx(e.p,{children:"Presenting all changes, components per components will cause a very long and hard to use changelog."}),`
`,o.jsx(e.p,{children:"Instead we'll present you the fundamental changes that have been applied for all of the existing components."}),`
`,o.jsx(e.p,{children:"The same logics has been applied to each components."}),`
`,o.jsx(e.p,{children:"If you have any issue finding a specific change, feel free to contact us directly and we'll help you migrate."}),`
`,o.jsx(n,{label:"All Components",level:2}),`
`,o.jsx(n,{label:"Dependency",level:3}),`
`,o.jsx(e.p,{children:"To use the component add a dependency to either:"}),`
`,o.jsxs(e.ul,{children:[`
`,o.jsxs(e.li,{children:[o.jsx(e.code,{children:"@ovhcloud/ods-component-<component>"})," to import only the specific component."]}),`
`,o.jsxs(e.li,{children:[o.jsx(e.code,{children:"@ovhcloud/ods-components"})," to import all components."]}),`
`]}),`
`,o.jsx(n,{label:"Import",level:3}),`
`,o.jsx(e.p,{children:"Replace any imports like the followings:"}),`
`,o.jsx(r,{code:`
// Previously component were imported using one of:
import { OsdsSpinner } from '@ovhcloud/ods-stencil/components/spinner'
import { OsdsSpinner } from '@ovhcloud/ods-stencil/components/spinner/react'
import { OsdsSpinner } from '@ovhcloud/ods-stencil/components/spinner/vue'

// Enums were imported from the ods-core library
import { OdsSpinnerSize, OdsSpinnerSizeList } from '@ovhcloud/ods-core'

// Interfaces were imported from the ods-core library
import { OdsSpinnerAttributes } from '@ovhcloud/ods-core'
`,dark:"true",language:"typescript"}),`
`,o.jsx(e.p,{children:"to:"}),`
`,o.jsx(r,{code:`
// Component are now imported using one of:
import { OsdsSpinner } from '@ovhcloud/ods-component-spinner'
import { OsdsSpinner } from '@ovhcloud/ods-component-spinner/react'
import { OsdsSpinner } from '@ovhcloud/ods-component-spinner/vue'

// Enums are now imported directly from the component
import { ODS_SPINNER_SIZE, ODS_SPINNER_SIZES } from '@ovhcloud/ods-component-spinner'

// Interfaces are now imported directly from the component
import type { OdsSpinnerAttribute } from '@ovhcloud/ods-component-spinner'
`,dark:"true",language:"typescript"}),`
`,o.jsx(e.p,{children:`Some types have been removed from ODS, as they were empty or not used, if you can't find a type you were using,
please contact us to see where it has been moved or how to replace it.`})]})}function ho(t={}){const{wrapper:e}={...p(),...t.components};return e?o.jsx(e,{...t,children:o.jsx(i,{...t})}):i(t)}export{ho as default};
