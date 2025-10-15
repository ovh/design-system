import{j as e}from"./jsx-runtime-Cfl8ynUo.js";import{useMDXComponents as a}from"./index-ZwkxtaJJ.js";import{E as c,$ as i,S as d}from"./MessageIcon-yhpEHWAg-CIdmetDm.js";import{M as p,S as t}from"./index-8pGbFWRq.js";import{E as r}from"./ExternalLink-izdABMGv.js";import{H as n}from"./Heading-hbfjmHNc.js";import"./index-jIWwRBLr.js";import"./index-2w0W-O47-BJ19ihbZ.js";import"./useI18n-C3-XAdTV-DeysXkv9.js";import"./ods-react236-aAAP9SXj.js";import"./ods-react93-l5fgq-IX.js";import"./ods-react60-CRx7zEey.js";import"./iframe-D7nmkxLr.js";import"./index-DWDEzXrj.js";import"./index-N93khynk.js";import"./index-CXQShRbs.js";import"./index-DrFu-skq.js";import"./Link-BWQEuWpd-DsrdP0qI.js";function l(s){const o={code:"code",p:"p",strong:"strong",...a(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(p,{title:"OVHcloud Design System/Get Started"}),`
`,e.jsx(n,{label:"Get Started",level:1}),`
`,e.jsx(o.p,{children:"OVHcloud Design System is a set of reusable React UI components to create a consistent user experience across OVHcloud pages and products, acting as a single source of truth."}),`
`,e.jsxs(o.p,{children:["All OVHcloud Design System packages are available on ",e.jsx(r,{href:"https://www.npmjs.com",children:"NPM"}),"."]}),`
`,e.jsx(n,{label:"Installation",level:2}),`
`,e.jsxs(o.p,{children:["Include ",e.jsx(o.strong,{children:"ODS"})," in your projects like any other npm/yarn module:"]}),`
`,e.jsx(t,{code:"npm i --save-exact @ovhcloud/ods-react @ovhcloud/ods-themes",dark:"true",language:"bash"}),`
`,e.jsx(o.p,{children:"or"}),`
`,e.jsx(t,{code:"yarn add --exact @ovhcloud/ods-react @ovhcloud/ods-themes",dark:"true",language:"bash"}),`
`,e.jsx(n,{label:"Usage",level:2}),`
`,e.jsx(t,{code:`
import { Button } from '@ovhcloud/ods-react';

const App = () => {
  return (
    <Button>
      Some button
    </Button>
  );
};
`,dark:"true",language:"tsx"}),`
`,e.jsxs(o.p,{children:["Components are compatible with React ",e.jsx(o.code,{children:"v18.2+"}),", ",e.jsx(o.code,{children:"v19+"}),"."]}),`
`,e.jsx(n,{label:"Import components constants",level:2}),`
`,e.jsxs(o.p,{children:["All enums, interfaces, events are available directly from the ",e.jsx(o.code,{children:"ods-react"})," lib"]}),`
`,e.jsx(t,{code:"import { BUTTON_SIZE, type CheckboxProp } from '@ovhcloud/ods-react';",dark:"true",language:"typescript"}),`
`,e.jsx(n,{label:"Import theme & fonts",level:2}),`
`,e.jsx(o.p,{children:`You need to import a theme to display all the components correctly.
It defines all the colors, typographies, etc...`}),`
`,e.jsx(o.p,{children:"via ES import:"}),`
`,e.jsx(t,{code:`
import '@ovhcloud/ods-themes/default/css';
import '@ovhcloud/ods-themes/default/fonts';
        `,dark:"true",language:"typescript"}),`
`,e.jsx(o.p,{children:"via Sass import:"}),`
`,e.jsx(t,{code:`
@import '@ovhcloud/ods-themes/default/css';
@import '@ovhcloud/ods-themes/default/fonts';
        `,dark:"true",language:"css"}),`
`,e.jsxs(c,{dismissible:!1,style:{width:"100%"},children:[e.jsx(i,{name:"circle-info"}),e.jsx(d,{children:e.jsxs(o.p,{children:["In case you encounter some issues while importing the font files, you can fallback to the base64 import using ",e.jsx(o.code,{children:"import '@ovhcloud/ods-themes/default"}),`.
Though this will increase the bundle size and prevent browser resources loading optimization.`]})})]}),`
`,e.jsx(n,{label:"Typescript",level:2}),`
`,e.jsxs(o.p,{children:["To ensure the types are correctly resolved, you'll have to use the ",e.jsx(o.code,{children:"bundler"})," module resolution, released with ",e.jsx(r,{href:"https://www.typescriptlang.org/docs/handbook/release-notes/typescript-5-0.html#--moduleresolution-bundler",children:"Typescript 5.0"}),"."]}),`
`,e.jsx(t,{code:'"moduleResolution": "bundler"',dark:"true",language:"typescript"})]})}function O(s={}){const{wrapper:o}={...a(),...s.components};return o?e.jsx(o,{...s,children:e.jsx(l,{...s})}):l(s)}export{O as default};
