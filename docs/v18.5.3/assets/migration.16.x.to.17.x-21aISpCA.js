import{j as e,M as p,d as n}from"./index-CCbL8veO.js";import{u as i}from"./index-Cq3PbNHF.js";import{H as t}from"./Heading-DN6FdGMk.js";import{S as m,H as d}from"./StorybookLink-Dd4tegpy.js";import"./iframe-DU4SvIHv.js";import"../sb-preview/runtime.js";import"./index-8AfNH5n5.js";import"./index-D-8MO0q_.js";import"./index-DrFu-skq.js";import"./index-DCBH0_Tl.js";import"./index-uzYzEmTV.js";import"./ods-accordion2-C2zw5EtX.js";import"./index-DAZhnxgO.js";import"./icon-name-C6aMXAXT.js";import"./ods-icon2-C2sSMg6h.js";import"./ods-badge-CMZ1G1-q.js";import"./ods-breadcrumb-item2-Chi8uW7w.js";import"./ods-link2-DhrEm8Nk.js";import"./ods-button2-DJxJiLcj.js";import"./ods-spinner2-CPyWCS2f.js";import"./ods-card-CsxtEQHf.js";import"./ods-checkbox2-D1rfq4Wo.js";import"./dom-CO1DdTQY.js";import"./ods-clipboard2-PjbiunMl.js";import"./ods-input2-BVKbybMU.js";import"./type-B5zI8QxY.js";import"./ods-tooltip2-CW12aP9b.js";import"./overlay-KZpfSxWH.js";import"./ods-code2-CPtqO8K9.js";import"./ods-datepicker2-CHJb_Dii.js";import"./locale-NOa-Gxlr.js";import"./ods-divider-Dtiri0aY.js";import"./ods-divider2-yzIshch6.js";import"./ods-drawer2-DKhK7oOX.js";import"./ods-file-upload2-WcWZbv1U.js";import"./ods-progress-bar2-Dg_V5kiw.js";import"./ods-form-field2-BDYkM6lU.js";import"./ods-icon-DOZBIEJb.js";import"./ods-link-C3iAbK8i.js";import"./ods-medium2-BnayTic8.js";import"./ods-message-DErUZ_Xg.js";import"./ods-modal2-CLthqs1m.js";import"./ods-pagination2-CxhEcubt.js";import"./ods-select2-D2fKxfqw.js";import"./ods-password2-DNFrl9vd.js";import"./ods-phone-number2-qOf9h3xC.js";import"./ods-popover2-D0fTxPry.js";import"./ods-quantity2-DSK2z9QA.js";import"./ods-radio2-NdDFmobW.js";import"./ods-range2-DVd4LCay.js";import"./ods-skeleton2-B7sDasgF.js";import"./ods-switch-item2-D-SJNcDd.js";import"./ods-tabs2-ChMEr-fQ.js";import"./ods-table2-oe37kiP3.js";import"./ods-tag2-CInySbKk.js";import"./ods-text-BO_pN8NQ.js";import"./ods-textarea2-BJL14TBM.js";import"./ods-timepicker2-4lQj55gq.js";import"./ods-toggle2-BgUL7nI_.js";function r(s){const o={a:"a",code:"code",h1:"h1",p:"p",...i(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(p,{title:"OVHcloud Design System/What's new?/Migration guide/16.x to 17.x"}),`
`,e.jsxs(o.h1,{id:"1660-to-1700-compare",children:[e.jsx(o.a,{href:"https://ovh.github.io/design-system/v16.6.0/?path=/story/ovhcloud-design-system-what-s-new-changelog--page",rel:"nofollow",children:"16.6.0"})," to ",e.jsx(o.a,{href:"https://ovh.github.io/design-system/v17.0.0/?path=/story/ovhcloud-design-system-what-s-new-changelog--page",rel:"nofollow",children:"17.0.0"})," (",e.jsx(o.a,{href:"https://github.com/ovh/design-system/compare/release/16.0...release/17.0",rel:"nofollow",children:"compare"}),")"]}),`
`,e.jsx(o.p,{children:"Main focus on this version has been on simplifying ODS integration in existing projects (React, Vue, JS, ...)."}),`
`,e.jsx(o.p,{children:"If you have any issue finding a specific change, feel free to contact us directly and we'll help you migrate."}),`
`,e.jsx(t,{label:"All Components",level:2}),`
`,e.jsx(t,{label:"Dependency",level:3}),`
`,e.jsxs(o.p,{children:["We now only publish one ",e.jsx(o.code,{children:"ods-components"})," library that embed all the ODS components."]}),`
`,e.jsx(o.p,{children:"You need to remove any component specific dependencies, ex:"}),`
`,e.jsx(n,{code:'"ods-component-button": "16.6.0" // should be removed',dark:"true",language:"text"}),`
`,e.jsx(o.p,{children:"Instead use only one dependency:"}),`
`,e.jsx(n,{code:'"ods-components": "17.0.0"',dark:"true",language:"text"}),`
`,e.jsx(t,{label:"Import",level:3}),`
`,e.jsxs(o.p,{children:["You can see more details in the updated ",e.jsx(m,{label:"Get Started documentation",title:d.getStarted})]}),`
`,e.jsx(t,{label:"Native webcomponents",level:4}),`
`,e.jsx(o.p,{children:"Using lazy-loading:"}),`
`,e.jsx(n,{code:`
import { defineCustomElements } from '@ovhcloud/ods-components/dist/loader';
defineCustomElements();
`,dark:"true",language:"typescript"}),`
`,e.jsx(o.p,{children:"As module:"}),`
`,e.jsx(n,{code:`
import { defineCustomElement as defineButton } from '@ovhcloud/ods-components/dist/components/osds-button';
defineButton();
`,dark:"true",language:"typescript"}),`
`,e.jsx(t,{label:"React components",level:4}),`
`,e.jsx(n,{code:"import { OsdsButton, OsdsText } from '@ovhcloud/ods-components/react';",dark:"true",language:"typescript"}),`
`,e.jsx(t,{label:"Vue components",level:4}),`
`,e.jsx(n,{code:"import { OsdsButton, OsdsText } from '@ovhcloud/ods-components/vue';",dark:"true",language:"typescript"}),`
`,e.jsx(t,{label:"Types and constants",level:4}),`
`,e.jsxs(o.p,{children:["All types and constants are accessible from the ",e.jsx(o.code,{children:"ods-components"})," library:"]}),`
`,e.jsx(n,{code:`
import type { OdsButtonAttribute } from '@ovhcloud/ods-components'
import { ODS_BUTTON_SIZE, ODS_BUTTON_SIZES } from '@ovhcloud/ods-components';
`,dark:"true",language:"typescript"}),`
`,e.jsx(t,{label:"About `ods-common-xxx` libs",level:3}),`
`,e.jsxs(o.p,{children:["We're trying to remove the need to add any ",e.jsx(o.code,{children:"ods-common-xxx"})," lib to any project using ODS."]}),`
`,e.jsxs(o.p,{children:["For now, you will still need to add ",e.jsx(o.code,{children:"ods-common-theming"})," as a dependency to access the ",e.jsx(o.code,{children:"ODS_THEME_COLOR_INTENT"})," values."]}),`
`,e.jsxs(o.p,{children:["If you still ended up adding ",e.jsx(o.code,{children:"ods-common-core"})," in your project, please give us the feedback so that we work on removing that need."]})]})}function xe(s={}){const{wrapper:o}={...i(),...s.components};return o?e.jsx(o,{...s,children:e.jsx(r,{...s})}):r(s)}export{xe as default};
