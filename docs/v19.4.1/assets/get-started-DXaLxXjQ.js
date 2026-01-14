import{j as e}from"./jsx-runtime-Cfl8ynUo.js";import{useMDXComponents as a}from"./index-ZwkxtaJJ.js";import{h as c,R as i,O as d}from"./MessageIcon-B8PtkLmq-D5-c3sRc.js";import{M as p,S as t}from"./index-C3P7rize.js";import{E as n}from"./ExternalLink-C9tV86xX.js";import{H as r}from"./Heading-DAsItneX.js";import"./index-jIWwRBLr.js";import"./index-CWkFp9WS-BSIT86NH.js";import"./useI18n-Dq1Z6_TT-D_3qtvJW.js";import"./ods-react257-aAAP9SXj.js";import"./ods-react101-l5fgq-IX.js";import"./ods-react64-C395g5lW.js";import"./iframe-B-1i39SD.js";import"./index-DWDEzXrj.js";import"./index-N93khynk.js";import"./index-CXQShRbs.js";import"./index-DrFu-skq.js";import"./Link-BhqYqKFa-BDwROQOD.js";import"./Divider-DmVNyNnn-DCNXheUh.js";function l(s){const o={code:"code",p:"p",strong:"strong",...a(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(p,{title:"OVHcloud Design System/Get Started"}),`
`,e.jsx(r,{label:"Get Started",level:1}),`
`,e.jsx(o.p,{children:"OVHcloud Design System is a set of reusable React UI components to create a consistent user experience across OVHcloud pages and products, acting as a single source of truth."}),`
`,e.jsxs(o.p,{children:["All OVHcloud Design System packages are available on ",e.jsx(n,{href:"https://www.npmjs.com",children:"NPM"}),"."]}),`
`,e.jsx(r,{label:"Installation",level:2}),`
`,e.jsxs(o.p,{children:["Include ",e.jsx(o.strong,{children:"ODS"})," in your projects like any other npm/yarn module:"]}),`
`,e.jsx(t,{code:"npm i --save-exact @ovhcloud/ods-react @ovhcloud/ods-themes",dark:"true",language:"bash"}),`
`,e.jsx(o.p,{children:"or"}),`
`,e.jsx(t,{code:"yarn add --exact @ovhcloud/ods-react @ovhcloud/ods-themes",dark:"true",language:"bash"}),`
`,e.jsx(r,{label:"Usage",level:2}),`
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
`,e.jsx(r,{label:"Import components constants",level:2}),`
`,e.jsxs(o.p,{children:["All enums, interfaces, events are available directly from the ",e.jsx(o.code,{children:"ods-react"})," lib"]}),`
`,e.jsx(t,{code:"import { BUTTON_SIZE, type CheckboxProp } from '@ovhcloud/ods-react';",dark:"true",language:"typescript"}),`
`,e.jsx(r,{label:"Import theme & fonts",level:2}),`
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
`,e.jsx(r,{label:"Typescript",level:2}),`
`,e.jsxs(o.p,{children:["To ensure the types are correctly resolved, you'll have to use the ",e.jsx(o.code,{children:"bundler"})," module resolution, released with ",e.jsx(n,{href:"https://www.typescriptlang.org/docs/handbook/release-notes/typescript-5-0.html#--moduleresolution-bundler",children:"Typescript 5.0"}),"."]}),`
`,e.jsx(t,{code:'"moduleResolution": "bundler"',dark:"true",language:"typescript"})]})}function C(s={}){const{wrapper:o}={...a(),...s.components};return o?e.jsx(o,{...s,children:e.jsx(l,{...s})}):l(s)}export{C as default};
