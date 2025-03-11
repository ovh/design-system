import{j as o,M as s,d as r}from"./index-BCVJDEqf.js";import{u as p}from"./index-_YJSRz3a.js";import{H as n}from"./Heading-DYNNEBec.js";import"./iframe-B5YUgUg3.js";import"../sb-preview/runtime.js";import"./index-8AfNH5n5.js";import"./index-D-8MO0q_.js";import"./index-DrFu-skq.js";import"./index-BLVG44ao.js";import"./index-CwrMpZKn.js";import"./ods-accordion2-C_uqOg6Y.js";import"./index-DAZhnxgO.js";import"./icon-name-C6aMXAXT.js";import"./ods-icon2-DRPHarK1.js";import"./ods-badge-DLluvt0I.js";import"./ods-breadcrumb-item2-C_Ah5FZN.js";import"./ods-link2-CtVFUlMR.js";import"./ods-button2-dPaqs0uX.js";import"./ods-spinner2-CPyWCS2f.js";import"./ods-card-CsxtEQHf.js";import"./ods-checkbox2-CJl-a8ad.js";import"./dom-8hoR-urs.js";import"./ods-clipboard2-CewZJu-c.js";import"./ods-input2-C6KOqFAM.js";import"./type-B5zI8QxY.js";import"./ods-tooltip2-CW12aP9b.js";import"./overlay-KZpfSxWH.js";import"./ods-code2-BL2TW0HP.js";import"./ods-combobox2-BXJ8jrhz.js";import"./_commonjsHelpers-CLD5em3H.js";import"./debounce-DRefBDpX.js";import"./ods-tag2-Bb2BMy9d.js";import"./ods-datepicker2-CijAhCPy.js";import"./locale-NOa-Gxlr.js";import"./ods-divider-Dtiri0aY.js";import"./ods-divider2-yzIshch6.js";import"./ods-drawer2-DKhK7oOX.js";import"./ods-file-upload2-Ca3mZ5BD.js";import"./ods-progress-bar2-Dg_V5kiw.js";import"./ods-form-field2-BDYkM6lU.js";import"./ods-icon-DTp5PnPI.js";import"./ods-input-CCQ46ZEm.js";import"./ods-link-BCeMi6SV.js";import"./ods-medium2-BnayTic8.js";import"./ods-message-DuyDaLcv.js";import"./ods-modal2-DCK89o-L.js";import"./ods-pagination2-shUGU0gB.js";import"./ods-select2-CEKvSxa4.js";import"./ods-password2-D64-z8ym.js";import"./ods-phone-number2-BL58mHzY.js";import"./ods-popover2-mGbx5HiL.js";import"./ods-quantity2-7U22nj6z.js";import"./ods-radio2-DDJaSdNS.js";import"./ods-range2-wBjnlon-.js";import"./ods-skeleton2-B7sDasgF.js";import"./ods-switch-item2-D-SJNcDd.js";import"./ods-tabs2-ChMEr-fQ.js";import"./ods-table2-oe37kiP3.js";import"./ods-text-BO_pN8NQ.js";import"./ods-textarea2-BDOVTqwb.js";import"./ods-timepicker2-DVnCnUkw.js";import"./ods-toggle2-Bg02aln1.js";function i(t){const e={a:"a",code:"code",h1:"h1",li:"li",p:"p",ul:"ul",...p(),...t.components};return o.jsxs(o.Fragment,{children:[o.jsx(s,{title:"OVHcloud Design System/What's new?/Migration guide/15.x to 16.x"}),`
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
please contact us to see where it has been moved or how to replace it.`})]})}function xo(t={}){const{wrapper:e}={...p(),...t.components};return e?o.jsx(e,{...t,children:o.jsx(i,{...t})}):i(t)}export{xo as default};
