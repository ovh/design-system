import{j as e}from"./jsx-runtime-Dn0LW--f.js";import{u as t}from"./index-DeyDdHvX.js";import{M as d}from"./index-BM3JsZOq.js";import"./iframe-6_jBXMSq.js";import"../sb-preview/runtime.js";import"./commonjsHelpers-Cpj98o6Y.js";import"./index-B_J8iUie.js";import"./index-DX_4BEHg.js";import"./index-DrFu-skq.js";function s(o){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",p:"p",pre:"pre",...t(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(d,{title:"OVHcloud Design System/What's new?/Migration guide/16.x to 17.x"}),`
`,e.jsxs(n.h1,{id:"1660-to-1700-compare",children:[e.jsx(n.a,{href:"https://ovh.github.io/design-system/v16.6.0/?path=/story/ovhcloud-design-system-what-s-new-changelog--page",rel:"nofollow",children:"16.6.0"})," to ",e.jsx(n.a,{href:"https://ovh.github.io/design-system/v17.0.0/?path=/story/ovhcloud-design-system-what-s-new-changelog--page",rel:"nofollow",children:"17.0.0"})," (",e.jsx(n.a,{href:"https://github.com/ovh/design-system/compare/release/16.0...release/17.0",rel:"nofollow",children:"compare"}),")"]}),`
`,e.jsx(n.p,{children:"Main focus on this version has been on simplifying ODS integration in existing projects (React, Vue, JS, ...)."}),`
`,e.jsx(n.p,{children:"If you have any issue finding a specific change, feel free to contact us directly and we'll help you migrate."}),`
`,e.jsx(n.h2,{id:"all-components",children:"All Components"}),`
`,e.jsx(n.h3,{id:"dependency",children:"Dependency"}),`
`,e.jsxs(n.p,{children:["We now only publish one ",e.jsx(n.code,{children:"ods-components"})," library that embed all the ODS components."]}),`
`,e.jsx(n.p,{children:"You need to remove any component specific dependencies, ex:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{children:`"ods-component-button": "16.6.0" // should be removed
`})}),`
`,e.jsx(n.p,{children:"Instead use only one dependency:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{children:`"ods-components": "17.0.0"
`})}),`
`,e.jsx(n.h3,{id:"import",children:"Import"}),`
`,e.jsxs(n.p,{children:["You can see more details in the updated ",e.jsx(n.a,{href:"?path=/story/ovhcloud-design-system-get-started--page#how-to-use-ods-components-in-my-project",children:"Get Started documentation"})]}),`
`,e.jsx(n.h4,{id:"native-webcomponents",children:"Native webcomponents"}),`
`,e.jsx(n.p,{children:"Using lazy-loading:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-js",children:`import { defineCustomElements } from '@ovhcloud/ods-components/dist/loader';
defineCustomElements();
`})}),`
`,e.jsx(n.p,{children:"As module:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-js",children:`import { defineCustomElement as defineButton } from '@ovhcloud/ods-components/dist/components/osds-button';
defineButton();
`})}),`
`,e.jsx(n.h4,{id:"react-components",children:"React components"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-js",children:`import { OsdsButton, OsdsText } from '@ovhcloud/ods-components/react';
`})}),`
`,e.jsx(n.h4,{id:"vue-components",children:"Vue components"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-js",children:`import { OsdsButton, OsdsText } from '@ovhcloud/ods-components/vue';
`})}),`
`,e.jsx(n.h4,{id:"types-and-constans",children:"Types and constans"}),`
`,e.jsxs(n.p,{children:["All types and constants are accessible from the ",e.jsx(n.code,{children:"ods-components"})," library:"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-js",children:`import type { OdsButtonAttribute } from '@ovhcloud/ods-components'
import { ODS_BUTTON_SIZE, ODS_BUTTON_SIZES } from '@ovhcloud/ods-components';
`})}),`
`,e.jsxs(n.h3,{id:"about-ods-common-xxx-libs",children:["About ",e.jsx(n.code,{children:"ods-common-xxx"})," libs"]}),`
`,e.jsxs(n.p,{children:["We're trying to remove the need to add any ",e.jsx(n.code,{children:"ods-common-xxx"})," lib to any project using ODS."]}),`
`,e.jsxs(n.p,{children:["For now, you will still need to add ",e.jsx(n.code,{children:"ods-common-theming"})," as a dependency to access the ",e.jsx(n.code,{children:"ODS_THEME_COLOR_INTENT"})," values."]}),`
`,e.jsxs(n.p,{children:["If you still ended up adding ",e.jsx(n.code,{children:"ods-common-core"})," in your project, please give us the feedback so that we work on removing that need."]})]})}function u(o={}){const{wrapper:n}={...t(),...o.components};return n?e.jsx(n,{...o,children:e.jsx(s,{...o})}):s(o)}export{u as default};
