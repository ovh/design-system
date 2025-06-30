import{j as e}from"./jsx-runtime-VM66peLj.js";import{useMDXComponents as a}from"./index-DQB45XCM.js";import{M as c,S as o}from"./index-CTRIvuAa.js";import{E as n}from"./ExternalLink-DJ00RbPw.js";import{H as r}from"./Heading-BKRI_kjA.js";import"./index-D_CmzhJ4.js";import"./iframe-B1k00A9N.js";import"./index-ChzAxGiP.js";import"./index-CucsY3YN.js";import"./index-CXQShRbs.js";import"./index-DrFu-skq.js";import"./ods-react60-Yebt9vXY.js";import"./index-2w0W-O47-BJ19ihbZ.js";import"./Link-D8k51sak-CbRDKo-E.js";import"./ods-react214-B9lkGKUh.js";function l(s){const t={code:"code",p:"p",strong:"strong",...a(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(c,{title:"OVHcloud Design System/Get Started"}),`
`,e.jsx(r,{label:"Get Started",level:1}),`
`,e.jsx(t.p,{children:"OVHcloud Design System is a set of reusable React UI components to create a consistent user experience across OVHcloud pages and products, acting as a single source of truth."}),`
`,e.jsxs(t.p,{children:["All OVHcloud Design System packages are available on ",e.jsx(n,{href:"https://www.npmjs.com",children:"NPM"}),"."]}),`
`,e.jsx(r,{label:"Installation",level:2}),`
`,e.jsxs(t.p,{children:["Include ",e.jsx(t.strong,{children:"ODS"})," in your projects like any other npm/yarn module:"]}),`
`,e.jsx(o,{code:"npm i --save-exact @ovhcloud/ods-react @ovhcloud/ods-themes",dark:"true",language:"bash"}),`
`,e.jsx(t.p,{children:"or"}),`
`,e.jsx(o,{code:"yarn add --exact @ovhcloud/ods-react @ovhcloud/ods-themes",dark:"true",language:"bash"}),`
`,e.jsx(r,{label:"Usage",level:2}),`
`,e.jsx(o,{code:`
import { Button } from '@ovhcloud/ods-react';

const App = () => {
  return (
    <Button>
      Some button
    </Button>
  );
};
`,dark:"true",language:"tsx"}),`
`,e.jsxs(t.p,{children:["Components are compatible with React ",e.jsx(t.code,{children:"v18.2+"}),", ",e.jsx(t.code,{children:"v19+"}),"."]}),`
`,e.jsx(r,{label:"Import components constants",level:2}),`
`,e.jsxs(t.p,{children:["All enums, interfaces, events are available directly from the ",e.jsx(t.code,{children:"ods-react"})," lib"]}),`
`,e.jsx(o,{code:"import { BUTTON_SIZE, type CheckboxProp } from '@ovhcloud/ods-react';",dark:"true",language:"typescript"}),`
`,e.jsx(r,{label:"Import theme",level:2}),`
`,e.jsx(t.p,{children:`You need to import a theme to display all the components correctly.
It defines all the colors, typographies, etc...`}),`
`,e.jsx(t.p,{children:"via ES import:"}),`
`,e.jsx(o,{code:"import '@ovhcloud/ods-themes/default';",dark:"true",language:"typescript"}),`
`,e.jsx(t.p,{children:"via Sass import:"}),`
`,e.jsx(o,{code:"@import '@ovhcloud/ods-themes/default';",dark:"true",language:"css"}),`
`,e.jsx(r,{label:"Typescript",level:2}),`
`,e.jsxs(t.p,{children:["To ensure the types are correctly resolved, you'll have to use the ",e.jsx(t.code,{children:"bundler"})," module resolution, released with ",e.jsx(n,{href:"https://www.typescriptlang.org/docs/handbook/release-notes/typescript-5-0.html#--moduleresolution-bundler",children:"Typescript 5.0"}),"."]}),`
`,e.jsx(o,{code:'"moduleResolution": "bundler"',dark:"true",language:"typescript"})]})}function w(s={}){const{wrapper:t}={...a(),...s.components};return t?e.jsx(t,{...s,children:e.jsx(l,{...s})}):l(s)}export{w as default};
