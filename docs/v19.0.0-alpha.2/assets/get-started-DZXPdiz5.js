import{j as e}from"./jsx-runtime-VM66peLj.js";import{useMDXComponents as a}from"./index-DQB45XCM.js";import{M as l,S as n}from"./index-BlaLg9GY.js";import{E as c}from"./ExternalLink-lH7YZu4p.js";import{H as s}from"./Heading-6Mfikk-c.js";import"./index-D_CmzhJ4.js";import"./iframe-CGgj-FAD.js";import"./index-ChzAxGiP.js";import"./index-CucsY3YN.js";import"./index-CXQShRbs.js";import"./index-DrFu-skq.js";import"./ods-react49-9IXPzWp7.js";import"./index-2w0W-O47-BJ19ihbZ.js";import"./Link-Ck4D7Gly-DoENOEBg.js";function r(o){const t={code:"code",p:"p",strong:"strong",...a(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"OVHcloud Design System/Get Started"}),`
`,e.jsx(s,{label:"Get Started",level:1}),`
`,e.jsx(t.p,{children:"OVHcloud Design System is a set of reusable React UI components to create a consistent user experience across OVHcloud pages and products, acting as a single source of truth."}),`
`,e.jsxs(t.p,{children:["All OVHcloud Design System packages are available on ",e.jsx(c,{href:"https://www.npmjs.com",children:"NPM"}),"."]}),`
`,e.jsx(s,{label:"Installation",level:2}),`
`,e.jsxs(t.p,{children:["Include ",e.jsx(t.strong,{children:"ODS"})," in your projects like any other npm/yarn module:"]}),`
`,e.jsx(n,{code:"npm i --save-exact @ovhcloud/ods-react @ovhcloud/ods-themes",dark:"true",language:"bash"}),`
`,e.jsx(t.p,{children:"or"}),`
`,e.jsx(n,{code:"yarn add --exact @ovhcloud/ods-react @ovhcloud/ods-themes",dark:"true",language:"bash"}),`
`,e.jsx(s,{label:"Usage",level:2}),`
`,e.jsx(n,{code:`
import { Button } from '@ovhcloud/ods-react';

const App = () => {
  return (
    <Button>
      Some button
    </Button>
  );
};
`,dark:"true",language:"tsx"}),`
`,e.jsx(t.p,{children:"Components are compatible with React v18.2+."}),`
`,e.jsx(s,{label:"Import components constants",level:2}),`
`,e.jsxs(t.p,{children:["All enums, interfaces, events are available directly from the ",e.jsx(t.code,{children:"ods-react"})," lib"]}),`
`,e.jsx(n,{code:"import { BUTTON_SIZE, type CheckboxProp } from '@ovhcloud/ods-react';",dark:"true",language:"typescript"}),`
`,e.jsx(s,{label:"Import theme",level:2}),`
`,e.jsx(t.p,{children:`You need to import a theme to display all the components correctly.
It defines all the colors, typographies, etc...`}),`
`,e.jsx(t.p,{children:"via ES import:"}),`
`,e.jsx(n,{code:"import '@ovhcloud/ods-themes/default';",dark:"true",language:"typescript"}),`
`,e.jsx(t.p,{children:"via Sass import:"}),`
`,e.jsx(n,{code:"@import '@ovhcloud/ods-themes/default';",dark:"true",language:"css"})]})}function k(o={}){const{wrapper:t}={...a(),...o.components};return t?e.jsx(t,{...o,children:e.jsx(r,{...o})}):r(o)}export{k as default};
