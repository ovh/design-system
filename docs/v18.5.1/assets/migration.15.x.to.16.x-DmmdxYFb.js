import{j as o,M as s,d as r}from"./index-DQsySnuC.js";import{u as p}from"./index-Xj8pMhSr.js";import{H as n}from"./Heading-DDc_MF2r.js";import"./iframe-DRtgxPEL.js";import"../sb-preview/runtime.js";import"./index-8AfNH5n5.js";import"./index-D-8MO0q_.js";import"./index-DrFu-skq.js";import"./index-DCBH0_Tl.js";import"./index-CihiY_f6.js";import"./ods-accordion2-Bgg69lRV.js";import"./index-DAZhnxgO.js";import"./icon-name-C6aMXAXT.js";import"./ods-icon2-Bl6f3POv.js";import"./ods-badge-tHc24Eg4.js";import"./ods-breadcrumb-item2-CoLTn2CF.js";import"./ods-link2-DDMr4sUm.js";import"./ods-button2-Bhm26DQr.js";import"./ods-spinner2-DCN2yKlT.js";import"./ods-card-B_VebKXk.js";import"./ods-checkbox2-BOuFx8yF.js";import"./dom-CO1DdTQY.js";import"./ods-clipboard2-NuJn2ry3.js";import"./ods-input2-B9cw61K_.js";import"./type-B5zI8QxY.js";import"./ods-tooltip2-BwzEvmuE.js";import"./overlay-KZpfSxWH.js";import"./ods-code2-bZeM2NI-.js";import"./ods-datepicker2-DwwUrg1C.js";import"./locale-NOa-Gxlr.js";import"./ods-divider-3cgmT4wP.js";import"./ods-divider2-Dc25YIYb.js";import"./ods-drawer2-DsENZFv4.js";import"./ods-file-upload2-CPd6D9Z5.js";import"./ods-progress-bar2-BuFm8qT0.js";import"./ods-form-field2-Tc9B1-rj.js";import"./ods-icon-NURRZ9Mf.js";import"./ods-link-BE9dMQzg.js";import"./ods-medium2-BB_NU63C.js";import"./ods-message-B9bD81Bu.js";import"./ods-modal2-CP36WQeg.js";import"./ods-pagination2-CotgNPzL.js";import"./ods-select2-B4wr0dem.js";import"./ods-password2-BQKXsiEd.js";import"./ods-phone-number2-D1K1HcDS.js";import"./ods-popover2-hre_XUC2.js";import"./ods-quantity2-DOjRn13r.js";import"./ods-radio2-BtBodUES.js";import"./ods-range2-BhwU834C.js";import"./ods-skeleton2-dZcgHYAN.js";import"./ods-switch-item2-m1p75_3x.js";import"./ods-tabs2-wJlXfoZt.js";import"./ods-table2-vWlGUOoj.js";import"./ods-tag2-Dj0-zHXw.js";import"./ods-text-CTeC-41B.js";import"./ods-textarea2-BHQdu6bK.js";import"./ods-timepicker2-2oCWgeQp.js";import"./ods-toggle2-DbSuYqWU.js";function i(t){const e={a:"a",code:"code",h1:"h1",li:"li",p:"p",ul:"ul",...p(),...t.components};return o.jsxs(o.Fragment,{children:[o.jsx(s,{title:"OVHcloud Design System/What's new?/Migration guide/15.x to 16.x"}),`
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
