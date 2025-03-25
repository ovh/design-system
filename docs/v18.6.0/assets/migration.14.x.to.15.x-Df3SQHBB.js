import{j as o,M as d,d as s}from"./index-BZrH9CGX.js";import{u as i}from"./index-dt1nTXy9.js";import{H as r}from"./Heading-CyUtHF9O.js";import"./iframe-B8AsNC2M.js";import"../sb-preview/runtime.js";import"./index-8AfNH5n5.js";import"./index-D-8MO0q_.js";import"./index-DrFu-skq.js";import"./index-DZK8KyWG.js";import"./index-2LVqMwig.js";import"./ods-accordion2-vvZNAi9U.js";import"./index-DAZhnxgO.js";import"./icon-name-C6aMXAXT.js";import"./ods-icon2-DRPHarK1.js";import"./ods-badge-CjbpLGl8.js";import"./ods-breadcrumb-item2-C_Ah5FZN.js";import"./ods-link2-CtVFUlMR.js";import"./ods-button2-dPaqs0uX.js";import"./ods-spinner2-CPyWCS2f.js";import"./ods-card-DRGl4_I-.js";import"./ods-checkbox2-B2XbvOPY.js";import"./dom-8hoR-urs.js";import"./ods-clipboard2-C65imxCo.js";import"./ods-input2-C6KOqFAM.js";import"./type-B5zI8QxY.js";import"./ods-tooltip2-CW12aP9b.js";import"./overlay-KZpfSxWH.js";import"./ods-code2-D4zmvcg_.js";import"./ods-combobox2-CC5fPZls.js";import"./_commonjsHelpers-CLD5em3H.js";import"./debounce-DRefBDpX.js";import"./ods-tag2-Bb2BMy9d.js";import"./ods-datepicker2-FisogS88.js";import"./locale-NOa-Gxlr.js";import"./ods-divider-CjaMxjcH.js";import"./ods-divider2-R3gNNk4H.js";import"./ods-drawer2-BQqpNIWL.js";import"./ods-file-upload2-teF1qz6H.js";import"./ods-progress-bar2-zR9YGHZb.js";import"./ods-form-field2-BSNGPVxz.js";import"./ods-icon-DTp5PnPI.js";import"./ods-input-CCQ46ZEm.js";import"./ods-link-BCeMi6SV.js";import"./ods-medium2-BnayTic8.js";import"./ods-message-BxLNJd0H.js";import"./ods-modal2-BQO4yvXA.js";import"./ods-pagination2-BkxTbhCC.js";import"./ods-select2-C8koqTnw.js";import"./ods-password2-Cx1VaMfM.js";import"./ods-phone-number2-B3iHB89H.js";import"./ods-popover2-D09FwiGN.js";import"./ods-quantity2-7U22nj6z.js";import"./ods-radio2-C2vNRNiP.js";import"./ods-range2-l-uevN51.js";import"./ods-skeleton2-B7sDasgF.js";import"./ods-switch-item2-ebcV2EUF.js";import"./ods-tabs2-BNbhFfmR.js";import"./ods-table2-oe37kiP3.js";import"./ods-text-BO_pN8NQ.js";import"./ods-textarea2-BDOVTqwb.js";import"./ods-timepicker2-Cq-oMtdT.js";import"./ods-toggle2-Bg02aln1.js";function n(t){const e={a:"a",code:"code",h1:"h1",li:"li",p:"p",ul:"ul",...i(),...t.components};return o.jsxs(o.Fragment,{children:[o.jsx(d,{title:"OVHcloud Design System/What's new?/Migration guide/14.x to 15.x"}),`
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
`]})]})}function fo(t={}){const{wrapper:e}={...i(),...t.components};return e?o.jsx(e,{...t,children:o.jsx(n,{...t})}):n(t)}export{fo as default};
