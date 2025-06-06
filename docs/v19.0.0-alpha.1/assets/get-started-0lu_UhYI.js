import{j as e}from"./jsx-runtime-VM66peLj.js";import{useMDXComponents as a}from"./index-DQB45XCM.js";import{D as l}from"./ods-react-BwLnGFOk.js";import{M as c,S as n}from"./index-BtXuKPxx.js";import{H as s}from"./Heading-D0aj94cg.js";import"./index-D_CmzhJ4.js";import"./index-ChzAxGiP.js";import"./index-CucsY3YN.js";import"./iframe-VOlI4tKJ.js";import"./index-CXQShRbs.js";import"./index-DrFu-skq.js";function r(o){const t={code:"code",p:"p",strong:"strong",...a(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(c,{title:"OVHcloud Design System/Get Started"}),`
`,e.jsx(s,{label:"Get Started",level:1}),`
`,e.jsx(t.p,{children:"OVHcloud Design System is a set of reusable React UI components to create a consistent user experience across OVHcloud pages and products, acting as a single source of truth."}),`
`,e.jsxs(t.p,{children:["All OVHcloud Design System packages are available on ",e.jsx(l,{href:"https://www.npmjs.com",target:"_blank",children:"NPM"}),"."]}),`
`,e.jsx(s,{label:"Installation",level:2}),`
`,e.jsxs(t.p,{children:["Include ",e.jsx(t.strong,{children:"ODS"})," in your projects like any other npm/yarn module:"]}),`
`,e.jsx(n,{code:"npm i --save-exact @ovhcloud/ods-react @ovhcloud/ods-themes",dark:"true",language:"bash"}),`
`,e.jsx(t.p,{children:"or"}),`
`,e.jsx(n,{code:"yarn add --exact @ovhcloud/ods-react @ovhcloud/ods-themes",dark:"true",language:"bash"}),`
`,e.jsx(s,{label:"Usage",level:2}),`
`,e.jsx(n,{code:`
import { OdsButton } from '@ovhcloud/ods-react';

const App = () => {
  return (
    <OdsButton>
      Some button
    </OdsButton>
  );
};
`,dark:"true",language:"tsx"}),`
`,e.jsx(t.p,{children:"Components are compatible with React v18.2+."}),`
`,e.jsx(s,{label:"Import components constants",level:2}),`
`,e.jsxs(t.p,{children:["All enums, interfaces, events are available directly from the ",e.jsx(t.code,{children:"ods-react"})," lib"]}),`
`,e.jsx(n,{code:"import { ODS_BUTTON_SIZE, type OdsPaginationEvent } from '@ovhcloud/ods-react';",dark:"true",language:"typescript"}),`
`,e.jsx(s,{label:"Import theme",level:2}),`
`,e.jsx(t.p,{children:`You need to import a theme to display all the components correctly.
It defines all the colors, typographies, etc...`}),`
`,e.jsx(t.p,{children:"via ES import:"}),`
`,e.jsx(n,{code:"import '@ovhcloud/ods-themes/default';",dark:"true",language:"typescript"}),`
`,e.jsx(t.p,{children:"via Sass import:"}),`
`,e.jsx(n,{code:"@import '@ovhcloud/ods-themes/default';",dark:"true",language:"css"})]})}function y(o={}){const{wrapper:t}={...a(),...o.components};return t?e.jsx(t,{...o,children:e.jsx(r,{...o})}):r(o)}export{y as default};
