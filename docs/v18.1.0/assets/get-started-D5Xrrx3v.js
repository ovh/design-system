import{j as e}from"./jsx-runtime-vK1CujOl.js";import{u as l}from"./index-CB7mz5IJ.js";import{a}from"./index-CONup0N6.js";import{M as d,d as t}from"./index-Bd2Jnm8T.js";import{H as n}from"./Heading-oJ6nNH90.js";import"./iframe-Lgv0C8F1.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-B_J8iUie.js";import"./index-DX_4BEHg.js";import"./index-DrFu-skq.js";import"./index-BNPjhb5w.js";function r(s){const o={code:"code",p:"p",strong:"strong",...l(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(d,{title:"OVHcloud Design System/Get Started"}),`
`,e.jsx(n,{label:"Get Started",level:1}),`
`,e.jsx(o.p,{children:"OVHcloud Design System is a set of reusable UI components to create a consistent user experience across OVHcloud pages and products, acting as a single source of truth."}),`
`,e.jsx(o.p,{children:"We provide agnostic Web components and their React, Vue wrapped versions."}),`
`,e.jsxs(o.p,{children:["All OVHcloud Design System packages are available on ",e.jsx(a,{href:"https://www.npmjs.com",label:"NPM",target:"_blank"}),"."]}),`
`,e.jsx(n,{label:"Installation",level:2}),`
`,e.jsxs(o.p,{children:["Include ",e.jsx(o.strong,{children:"ODS"})," in your projects like any other npm/yarn module:"]}),`
`,e.jsx(t,{code:"npm install @ovhcloud/ods-components @ovhcloud/ods-themes",dark:"true",language:"bash"}),`
`,e.jsx(o.p,{children:"or"}),`
`,e.jsx(t,{code:"yarn add @ovhcloud/ods-components @ovhcloud/ods-themes",dark:"true",language:"bash"}),`
`,e.jsx(n,{label:"Usage",level:2}),`
`,e.jsx(n,{label:"Web components (JavaScript)",level:3}),`
`,e.jsx(o.p,{children:"There are two different ways of using ODS web component, using lazy-loading or bundle."}),`
`,e.jsx(n,{label:"Lazy-loading",level:4}),`
`,e.jsx(o.p,{children:"To use lazy-loading, just include in your project the loader script, it will take care of loading each component resources on-demand."}),`
`,e.jsx(t,{code:`
import { defineCustomElements } from '@ovhcloud/ods-components/dist/loader';
defineCustomElements();
`,dark:"true",language:"typescript"}),`
`,e.jsx(n,{label:"Bundle",level:4}),`
`,e.jsx(o.p,{children:`If you prefer to use each component directly, you can import them separately.
This is recommended when working on projects bundled (using webpack, rollup, ...) as it is more optimized for tree-shaking.`}),`
`,e.jsx(t,{code:`
import { defineCustomElement as defineButton } from '@ovhcloud/ods-components/dist/components/ods-button';
defineButton();
`,dark:"true",language:"typescript"}),`
`,e.jsx(n,{label:"React components",level:3}),`
`,e.jsxs(o.p,{children:["To use a React version of an ODS component, you need to import it from the ",e.jsx(o.code,{children:"react"})," sub directory."]}),`
`,e.jsx(t,{code:`
import { OdsButton } from '@ovhcloud/ods-components/react';

const App = () => {
  return (
    <OdsButton label="Some button">
    </OdsButton>
  );
};
`,dark:"true",language:"tsx"}),`
`,e.jsx(o.p,{children:"Components are compatible with React v16.8+."}),`
`,e.jsx(n,{label:"Vue components",level:3}),`
`,e.jsxs(o.p,{children:["To use a Vue version of an ODS component, you need to import it from the ",e.jsx(o.code,{children:"vue"})," sub directory."]}),`
`,e.jsx(t,{code:`
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
`,e.jsx(n,{label:"Import components constants",level:2}),`
`,e.jsxs(o.p,{children:["All enums, interfaces, events are available directly from the ",e.jsx(o.code,{children:"ods-components"})," lib"]}),`
`,e.jsx(t,{code:`
import type { OdsPaginationEvent } from '@ovhcloud/ods-components'
import { ODS_BUTTON_SIZE, ODS_BUTTON_SIZES } from '@ovhcloud/ods-components';
`,dark:"true",language:"typescript"}),`
`,e.jsx(n,{label:"Import theme",level:2}),`
`,e.jsx(o.p,{children:`You need to import a theme to display all the components correctly.
It defines all the colors, typographies, etc...`}),`
`,e.jsx(o.p,{children:"via ES import:"}),`
`,e.jsx(t,{code:"import '@ovhcloud/ods-themes/default';",dark:"true",language:"typescript"}),`
`,e.jsx(o.p,{children:"via Sass import:"}),`
`,e.jsx(t,{code:"@import '@ovhcloud/ods-themes/default';",dark:"true",language:"css"})]})}function y(s={}){const{wrapper:o}={...l(),...s.components};return o?e.jsx(o,{...s,children:e.jsx(r,{...s})}):r(s)}export{y as default};
