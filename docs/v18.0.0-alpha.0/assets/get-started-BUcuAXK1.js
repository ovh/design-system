import{j as e}from"./jsx-runtime-3v6rTKkY.js";import{u as t}from"./index-B5y3xRNA.js";import{M as r}from"./index-sugWq352.js";import"./iframe-D98u-D7f.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-B_J8iUie.js";import"./index-DX_4BEHg.js";import"./index-DrFu-skq.js";function s(o){const n={a:"a",blockquote:"blockquote",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...t(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{title:"OVHcloud Design System/Get Started"}),`
`,e.jsx(n.h1,{id:"get-started",children:"Get Started"}),`
`,e.jsx(n.p,{children:e.jsx(n.em,{children:"Welcome, developers! We're thrilled to have you here and to assist you in starting to use the OVHcloud Design System (ODS)."})}),`
`,e.jsx(n.p,{children:e.jsx(n.em,{children:"Our Design System development hub is a simple and straightforward way to get started."})}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.strong,{children:e.jsx(n.a,{href:"#overview",children:"Overview"})})}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:e.jsx(n.a,{href:"#how-to-use-ods-components-in-my-project",children:"How to use ODS components in my project"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.strong,{children:e.jsx(n.a,{href:"#installation",children:"Installation"})})}),`
`,e.jsx(n.li,{children:e.jsx(n.strong,{children:e.jsx(n.a,{href:"#import-components",children:"Import components"})})}),`
`,e.jsx(n.li,{children:e.jsx(n.strong,{children:e.jsx(n.a,{href:"#import-components-constants",children:"Import components constants"})})}),`
`,e.jsx(n.li,{children:e.jsx(n.strong,{children:e.jsx(n.a,{href:"#import-the-theme",children:"Import the theme"})})}),`
`,e.jsx(n.li,{children:e.jsx(n.strong,{children:e.jsx(n.a,{href:"#assets",children:"Assets"})})}),`
`]}),`
`]}),`
`,e.jsx(n.li,{children:e.jsx(n.strong,{children:e.jsx(n.a,{href:"#contribute-on-ods",children:"Contribute on ODS"})})}),`
`]}),`
`]}),`
`,e.jsx(n.h2,{id:"overview",children:"Overview"}),`
`,e.jsx(n.p,{children:"OVHcloud Design System is a collection of reusable components to create a consistent user experience across OVHcloud pages and products, acting as a single source of truth."}),`
`,e.jsx(n.p,{children:"We provide agnostic components and their React, Vue wrapped versions."}),`
`,e.jsxs(n.p,{children:["All the OVHcloud Design System packages are available on ",e.jsx(n.a,{href:"https://www.npmjs.com/",rel:"nofollow",children:e.jsx(n.strong,{children:"NPM"})}),"."]}),`
`,e.jsx(n.h2,{id:"how-to-use-ods-components-in-my-project",children:"How to use ODS components in my project"}),`
`,e.jsx(n.h3,{id:"installation",children:"Installation"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-sh",children:`yarn add @ovhcloud/ods-components @ovhcloud/ods-theme-blue-jeans
`})}),`
`,e.jsx(n.p,{children:"or"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-sh",children:`npm install --save @ovhcloud/ods-components @ovhcloud/ods-theme-blue-jeans
`})}),`
`,e.jsxs(n.p,{children:["You should add @ovhcloud/ods-common-core when you need to use Flag component. For more detail, see ",e.jsx(n.a,{href:"#assets",children:"Assets"}),` section.
You should also add @ovhcloud/ods-common-theming when you would like to use a component with an intent.`]}),`
`,e.jsx(n.h3,{id:"import-components",children:"Import components"}),`
`,e.jsx(n.h4,{id:"as-native-webcomponents",children:"As native webcomponents"}),`
`,e.jsx(n.p,{children:"There are two different ways of using ODS webcomponent, using lazy-loading or bundle."}),`
`,e.jsx(n.p,{children:"To use lazy-loading, just include in your project the loader script, it will take care of loading each component resources on-demand."}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`import { defineCustomElements } from '@ovhcloud/ods-components/dist/loader';
defineCustomElements();
`})}),`
`,e.jsx(n.p,{children:`If you prefer to use each components directly, you can import them separately.
This is recommended when working on projects bundled (using webpack, rollup, ...) as it is more optimized for tree-shaking.`}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`import { defineCustomElement as defineButton } from '@ovhcloud/ods-components/dist/components/osds-button';
defineButton();
`})}),`
`,e.jsx(n.h4,{id:"as-react-components",children:"As React components"}),`
`,e.jsxs(n.p,{children:["To use a React version of an ODS component, you need to import it from the ",e.jsx(n.code,{children:"react"})," sub directory."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`import { OsdsButton, OsdsText } from '@ovhcloud/ods-components/react';

const App = () => {
  return (
    <OsdsButton ...>
      <OsdsText>
        Some Button
      </OsdsText>
    </OsdsButton>
  );
};
`})}),`
`,e.jsx(n.p,{children:"Components are compatible with React v16.8+."}),`
`,e.jsx(n.h4,{id:"as-vue-components",children:"As Vue components"}),`
`,e.jsxs(n.p,{children:["To use a Vue version of an ODS component, you need to import it from the ",e.jsx(n.code,{children:"vue"})," sub directory."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`<template>
  <OsdsButton ...>
    <OsdsText>
      Some Button
    </OsdsText>
  </OsdsButton>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { OsdsButton, OsdsText } from '@ovhcloud/ods-components/vue';
import '@ovhcloud/ods-theme-blue-jeans';

export default defineComponent({
  name: 'App',
  components: {
    OsdsButton,
    OsdsText,
  },
});
<\/script>
`})}),`
`,e.jsx(n.p,{children:"Components are compatible with Vue 3."}),`
`,e.jsx(n.h3,{id:"import-components-constants",children:"Import components constants"}),`
`,e.jsxs(n.p,{children:["All enums, interfaces, events are available directly from the ",e.jsx(n.code,{children:"ods-components"})," lib"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`import type { OdsButtonAttribute } from '@ovhcloud/ods-components'
import { ODS_BUTTON_SIZE, ODS_BUTTON_SIZES } from '@ovhcloud/ods-components';
`})}),`
`,e.jsx(n.h3,{id:"import-the-theme",children:"Import the theme"}),`
`,e.jsxs(n.p,{children:[`You need to import a theme to display all the components correctly.
It defines all the colors, typographies, sizes etc.
The default theme is `,e.jsx(n.code,{children:"blue-jeans"})," but you can build yours."]}),`
`,e.jsx(n.p,{children:"via HTML:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<link rel="stylesheet" src="./node_modules/@ovhcloud/ods-theme-blue-jeans" />
`})}),`
`,e.jsx(n.p,{children:"via ES import:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`import '@ovhcloud/ods-theme-blue-jeans';
`})}),`
`,e.jsx(n.p,{children:"via css import:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-css",children:`@import '~@ovhcloud/ods-theme-blue-jeans';
`})}),`
`,e.jsx(n.h3,{id:"assets",children:"Assets"}),`
`,e.jsx(n.h4,{id:"ods-flag",children:"Ods-flag"}),`
`,e.jsx(n.p,{children:"To use the flags in your application, you'll have to copy the flags svg where you need them in your application."}),`
`,e.jsxs(n.p,{children:["First, you have to setup ods by calling ",e.jsx(n.code,{children:"odsSetup"})," in your application:"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`import { odsSetup } from '@ovhcloud/ods-common-core';
odsSetup();
`})}),`
`,e.jsx(n.p,{children:"Then, you have to set the path that point to the directory where the flags are located:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:"Ods.instance().assetPath(`path/`);\n"})}),`
`,e.jsx(n.h2,{id:"contribute-on-ods",children:"Contribute on ODS"}),`
`,e.jsxs(n.p,{children:["All contributions are welcome and very appreciated. Please check our section dedicated to ",e.jsx(n.a,{href:"?path=/story/contributing-get-started--page",children:e.jsx(n.strong,{children:"Contributing"})})," to our Design System."]})]})}function j(o={}){const{wrapper:n}={...t(),...o.components};return n?e.jsx(n,{...o,children:e.jsx(s,{...o})}):s(o)}export{j as default};
