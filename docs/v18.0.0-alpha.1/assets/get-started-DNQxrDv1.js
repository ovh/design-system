import{j as e}from"./jsx-runtime-C_5uCoOk.js";import{u as s}from"./index-BNSrq6w-.js";import{M as r}from"./index-DnV51lgW.js";import"./iframe-Cm7AUSBL.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-B_J8iUie.js";import"./index-DX_4BEHg.js";import"./index-DrFu-skq.js";function t(o){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",p:"p",pre:"pre",strong:"strong",...s(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{title:"OVHcloud Design System/Get Started"}),`
`,e.jsx(n.h1,{id:"get-started",children:"Get Started"}),`
`,e.jsx(n.h2,{id:"overview",children:"Overview"}),`
`,e.jsx(n.p,{children:"OVHcloud Design System is a collection of reusable components to create a consistent user experience across OVHcloud pages and products, acting as a single source of truth."}),`
`,e.jsx(n.p,{children:"We provide agnostic components and their React, Vue wrapped versions."}),`
`,e.jsxs(n.p,{children:["All the OVHcloud Design System packages are available on ",e.jsx(n.a,{href:"https://www.npmjs.com/",rel:"nofollow",children:e.jsx(n.strong,{children:"NPM"})}),"."]}),`
`,e.jsx(n.h2,{id:"how-to-use-ods-components-in-my-project",children:"How to use ODS components in my project"}),`
`,e.jsx(n.h3,{id:"installation",children:"Installation"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-sh",children:`npm install --save @ovhcloud/ods-components @ovhcloud/ods-themes
`})}),`
`,e.jsx(n.p,{children:"or"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-sh",children:`yarn add @ovhcloud/ods-components @ovhcloud/ods-themes
`})}),`
`,e.jsx(n.h3,{id:"import-components",children:"Import components"}),`
`,e.jsx(n.h4,{id:"as-native-webcomponents",children:"As native webcomponents"}),`
`,e.jsx(n.p,{children:"There are two different ways of using ODS webcomponent, using lazy-loading or bundle."}),`
`,e.jsx(n.p,{children:"To use lazy-loading, just include in your project the loader script, it will take care of loading each component resources on-demand."}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`import { defineCustomElements } from '@ovhcloud/ods-components/dist/loader';
defineCustomElements();
`})}),`
`,e.jsx(n.p,{children:`If you prefer to use each components directly, you can import them separately.
This is recommended when working on projects bundled (using webpack, rollup, ...) as it is more optimized for tree-shaking.`}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`import { defineCustomElement as defineButton } from '@ovhcloud/ods-components/dist/components/ods-button';
defineButton();
`})}),`
`,e.jsx(n.h4,{id:"as-react-components",children:"As React components"}),`
`,e.jsxs(n.p,{children:["To use a React version of an ODS component, you need to import it from the ",e.jsx(n.code,{children:"react"})," sub directory."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`import { OdsButton } from '@ovhcloud/ods-components/react';

const App = () => {
  return (
    <OdsButton label="Some button">
    </OdsButton>
  );
};
`})}),`
`,e.jsx(n.p,{children:"Components are compatible with React v16.8+."}),`
`,e.jsx(n.h4,{id:"as-vue-components",children:"As Vue components"}),`
`,e.jsxs(n.p,{children:["To use a Vue version of an ODS component, you need to import it from the ",e.jsx(n.code,{children:"vue"})," sub directory."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`<template>
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
`})}),`
`,e.jsx(n.p,{children:"Components are compatible with Vue 3."}),`
`,e.jsx(n.h3,{id:"import-components-constants",children:"Import components constants"}),`
`,e.jsxs(n.p,{children:["All enums, interfaces, events are available directly from the ",e.jsx(n.code,{children:"ods-components"})," lib"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`import type { OdsPaginationEvent } from '@ovhcloud/ods-components'
import { ODS_BUTTON_SIZE, ODS_BUTTON_SIZES } from '@ovhcloud/ods-components';
`})}),`
`,e.jsx(n.h3,{id:"import-the-theme",children:"Import the theme"}),`
`,e.jsx(n.p,{children:`You need to import a theme to display all the components correctly.
It defines all the colors, typographies, etc...`}),`
`,e.jsx(n.p,{children:"via ES import:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`import '@ovhcloud/ods-themes/default';
`})}),`
`,e.jsx(n.p,{children:"via Sass import:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-scss",children:`@import '@ovhcloud/ods-themes/default';
`})})]})}function j(o={}){const{wrapper:n}={...s(),...o.components};return n?e.jsx(n,{...o,children:e.jsx(t,{...o})}):t(o)}export{j as default};
