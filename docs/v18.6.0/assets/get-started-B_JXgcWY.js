import{j as e,M as p,d as n}from"./index-BZrH9CGX.js";import{u as i}from"./index-dt1nTXy9.js";import{a as m}from"./index-2LVqMwig.js";import{H as t}from"./Heading-CyUtHF9O.js";import"./iframe-B8AsNC2M.js";import"../sb-preview/runtime.js";import"./index-8AfNH5n5.js";import"./index-D-8MO0q_.js";import"./index-DrFu-skq.js";import"./ods-accordion2-vvZNAi9U.js";import"./index-DAZhnxgO.js";import"./icon-name-C6aMXAXT.js";import"./ods-icon2-DRPHarK1.js";import"./ods-badge-CjbpLGl8.js";import"./ods-breadcrumb-item2-C_Ah5FZN.js";import"./ods-link2-CtVFUlMR.js";import"./ods-button2-dPaqs0uX.js";import"./ods-spinner2-CPyWCS2f.js";import"./ods-card-DRGl4_I-.js";import"./ods-checkbox2-B2XbvOPY.js";import"./dom-8hoR-urs.js";import"./ods-clipboard2-C65imxCo.js";import"./ods-input2-C6KOqFAM.js";import"./type-B5zI8QxY.js";import"./ods-tooltip2-CW12aP9b.js";import"./overlay-KZpfSxWH.js";import"./ods-code2-D4zmvcg_.js";import"./ods-combobox2-CC5fPZls.js";import"./_commonjsHelpers-CLD5em3H.js";import"./debounce-DRefBDpX.js";import"./ods-tag2-Bb2BMy9d.js";import"./ods-datepicker2-FisogS88.js";import"./locale-NOa-Gxlr.js";import"./ods-divider-CjaMxjcH.js";import"./ods-divider2-R3gNNk4H.js";import"./ods-drawer2-BQqpNIWL.js";import"./ods-file-upload2-teF1qz6H.js";import"./ods-progress-bar2-zR9YGHZb.js";import"./ods-form-field2-BSNGPVxz.js";import"./ods-icon-DTp5PnPI.js";import"./ods-input-CCQ46ZEm.js";import"./ods-link-BCeMi6SV.js";import"./ods-medium2-BnayTic8.js";import"./ods-message-BxLNJd0H.js";import"./ods-modal2-BQO4yvXA.js";import"./ods-pagination2-BkxTbhCC.js";import"./ods-select2-C8koqTnw.js";import"./ods-password2-Cx1VaMfM.js";import"./ods-phone-number2-B3iHB89H.js";import"./ods-popover2-D09FwiGN.js";import"./ods-quantity2-7U22nj6z.js";import"./ods-radio2-C2vNRNiP.js";import"./ods-range2-l-uevN51.js";import"./ods-skeleton2-B7sDasgF.js";import"./ods-switch-item2-ebcV2EUF.js";import"./ods-tabs2-BNbhFfmR.js";import"./ods-table2-oe37kiP3.js";import"./ods-text-BO_pN8NQ.js";import"./ods-textarea2-BDOVTqwb.js";import"./ods-timepicker2-Cq-oMtdT.js";import"./ods-toggle2-Bg02aln1.js";import"./index-DZK8KyWG.js";function s(r){const o={code:"code",p:"p",strong:"strong",...i(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(p,{title:"OVHcloud Design System/Get Started"}),`
`,e.jsx(t,{label:"Get Started",level:1}),`
`,e.jsx(o.p,{children:"OVHcloud Design System is a set of reusable UI components to create a consistent user experience across OVHcloud pages and products, acting as a single source of truth."}),`
`,e.jsx(o.p,{children:"We provide agnostic Web components and their React, Vue wrapped versions."}),`
`,e.jsxs(o.p,{children:["All OVHcloud Design System packages are available on ",e.jsx(m,{href:"https://www.npmjs.com",label:"NPM",target:"_blank"}),"."]}),`
`,e.jsx(t,{label:"Installation",level:2}),`
`,e.jsxs(o.p,{children:["Include ",e.jsx(o.strong,{children:"ODS"})," in your projects like any other npm/yarn module:"]}),`
`,e.jsx(n,{code:"npm install @ovhcloud/ods-components @ovhcloud/ods-themes",dark:"true",language:"bash"}),`
`,e.jsx(o.p,{children:"or"}),`
`,e.jsx(n,{code:"yarn add @ovhcloud/ods-components @ovhcloud/ods-themes",dark:"true",language:"bash"}),`
`,e.jsx(t,{label:"Usage",level:2}),`
`,e.jsx(t,{label:"Web components (JavaScript)",level:3}),`
`,e.jsx(o.p,{children:"There are two different ways of using ODS web component, using lazy-loading or bundle."}),`
`,e.jsx(t,{label:"Lazy-loading",level:4}),`
`,e.jsx(o.p,{children:"To use lazy-loading, just include in your project the loader script, it will take care of loading each component resources on-demand."}),`
`,e.jsx(n,{code:`
import { defineCustomElements } from '@ovhcloud/ods-components/dist/loader';
defineCustomElements();
`,dark:"true",language:"typescript"}),`
`,e.jsx(t,{label:"Bundle",level:4}),`
`,e.jsx(o.p,{children:`If you prefer to use each component directly, you can import them separately.
This is recommended when working on projects bundled (using webpack, rollup, ...) as it is more optimized for tree-shaking.`}),`
`,e.jsx(n,{code:`
import { defineCustomElement as defineButton } from '@ovhcloud/ods-components/dist/components/ods-button';
defineButton();
`,dark:"true",language:"typescript"}),`
`,e.jsx(t,{label:"React components",level:3}),`
`,e.jsxs(o.p,{children:["To use a React version of an ODS component, you need to import it from the ",e.jsx(o.code,{children:"react"})," sub directory."]}),`
`,e.jsx(n,{code:`
import { OdsButton } from '@ovhcloud/ods-components/react';

const App = () => {
  return (
    <OdsButton label="Some button">
    </OdsButton>
  );
};
`,dark:"true",language:"tsx"}),`
`,e.jsx(o.p,{children:"Components are compatible with React v16.8+."}),`
`,e.jsx(t,{label:"Vue components",level:3}),`
`,e.jsxs(o.p,{children:["To use a Vue version of an ODS component, you need to import it from the ",e.jsx(o.code,{children:"vue"})," sub directory."]}),`
`,e.jsx(n,{code:`
<template>
  <OdsButton label="Some Button">
  </OdsButton>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';
  import { OdsButton } from '@ovhcloud/ods-components/vue';

  export default defineComponent({
    name: 'App',
    components: {
      OdsButton,
    },
  });
<\/script>
`,dark:"true",language:"tsx"}),`
`,e.jsx(o.p,{children:"Components are compatible with Vue 3."}),`
`,e.jsx(t,{label:"Import components constants",level:2}),`
`,e.jsxs(o.p,{children:["All enums, interfaces, events are available directly from the ",e.jsx(o.code,{children:"ods-components"})," lib"]}),`
`,e.jsx(n,{code:`
import type { OdsPaginationEvent } from '@ovhcloud/ods-components'
import { ODS_BUTTON_SIZE, ODS_BUTTON_SIZES } from '@ovhcloud/ods-components';
`,dark:"true",language:"typescript"}),`
`,e.jsx(t,{label:"Import theme",level:2}),`
`,e.jsx(o.p,{children:`You need to import a theme to display all the components correctly.
It defines all the colors, typographies, etc...`}),`
`,e.jsx(o.p,{children:"via ES import:"}),`
`,e.jsx(n,{code:"import '@ovhcloud/ods-themes/default';",dark:"true",language:"typescript"}),`
`,e.jsx(o.p,{children:"via Sass import:"}),`
`,e.jsx(n,{code:"@import '@ovhcloud/ods-themes/default';",dark:"true",language:"css"})]})}function ge(r={}){const{wrapper:o}={...i(),...r.components};return o?e.jsx(o,{...r,children:e.jsx(s,{...r})}):s(r)}export{ge as default};
