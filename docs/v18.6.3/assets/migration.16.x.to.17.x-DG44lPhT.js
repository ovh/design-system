import{j as e,M as p,d as n}from"./index-CxvU8mbA.js";import{u as i}from"./index-BDGy2HR4.js";import{H as t}from"./Heading-D-wMvR3C.js";import{S as m,H as d}from"./StorybookLink-CpF08Utd.js";import"./iframe-QvnFyZ-4.js";import"../sb-preview/runtime.js";import"./index-8AfNH5n5.js";import"./index-D-8MO0q_.js";import"./index-DrFu-skq.js";import"./index-DZK8KyWG.js";import"./index-jsVj7r9R.js";import"./ods-accordion2-vvZNAi9U.js";import"./index-DAZhnxgO.js";import"./icon-name-C6aMXAXT.js";import"./ods-icon2-DRPHarK1.js";import"./ods-badge-CjbpLGl8.js";import"./ods-breadcrumb-item2-C_Ah5FZN.js";import"./ods-link2-CtVFUlMR.js";import"./ods-button2-dPaqs0uX.js";import"./ods-spinner2-CPyWCS2f.js";import"./ods-card-DRGl4_I-.js";import"./ods-checkbox2-B2XbvOPY.js";import"./dom-8hoR-urs.js";import"./ods-clipboard2-Baifk8Bb.js";import"./ods-input2-CtkWk4I-.js";import"./type-B5zI8QxY.js";import"./ods-tooltip2-CW12aP9b.js";import"./overlay-KZpfSxWH.js";import"./ods-code2-D4zmvcg_.js";import"./ods-combobox2-CcOfmmHm.js";import"./_commonjsHelpers-CLD5em3H.js";import"./debounce-DRefBDpX.js";import"./ods-tag2-Bb2BMy9d.js";import"./ods-datepicker2-FisogS88.js";import"./locale-NOa-Gxlr.js";import"./ods-divider-CjaMxjcH.js";import"./ods-divider2-R3gNNk4H.js";import"./ods-drawer2-BQqpNIWL.js";import"./ods-file-upload2-teF1qz6H.js";import"./ods-progress-bar2-zR9YGHZb.js";import"./ods-form-field2-BSNGPVxz.js";import"./ods-icon-DTp5PnPI.js";import"./ods-input-COMKDAZi.js";import"./ods-link-BCeMi6SV.js";import"./ods-medium2-BnayTic8.js";import"./ods-message-BxLNJd0H.js";import"./ods-modal2-BQO4yvXA.js";import"./ods-pagination2--R9v9RO1.js";import"./ods-select2-C8koqTnw.js";import"./ods-password2-aWfdhtsQ.js";import"./ods-phone-number2-Cl3w5q8v.js";import"./ods-popover2-D09FwiGN.js";import"./ods-quantity2-BgFzW1u9.js";import"./ods-radio2-C2vNRNiP.js";import"./ods-range2-l-uevN51.js";import"./ods-skeleton2-B7sDasgF.js";import"./ods-switch-item2-ebcV2EUF.js";import"./ods-tabs2-BNbhFfmR.js";import"./ods-table2-oe37kiP3.js";import"./ods-text-BO_pN8NQ.js";import"./ods-textarea2-BDOVTqwb.js";import"./ods-timepicker2-DSjpZYdI.js";import"./ods-toggle2-Bg02aln1.js";function r(s){const o={a:"a",code:"code",h1:"h1",p:"p",...i(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(p,{title:"OVHcloud Design System/What's new?/Migration guide/16.x to 17.x"}),`
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
`,e.jsxs(o.p,{children:["If you still ended up adding ",e.jsx(o.code,{children:"ods-common-core"})," in your project, please give us the feedback so that we work on removing that need."]})]})}function fe(s={}){const{wrapper:o}={...i(),...s.components};return o?e.jsx(o,{...s,children:e.jsx(r,{...s})}):r(s)}export{fe as default};
