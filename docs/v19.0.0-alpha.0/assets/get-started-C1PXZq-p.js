import{j as e}from"./jsx-runtime-BSm7YJ_y.js";import{useMDXComponents as c}from"./index-CUkz9CBV.js";import{r as a}from"./ods-react-CYmC8DRO.js";import{M as l,S as o}from"./index-Ad1vjMe7.js";import{H as s}from"./Heading-RrL0wZ2g.js";import"./index-E9JSHJbc.js";import"./iframe-ZxD9YLZr.js";import"./index-DOJIDNlS.js";import"./index-DZAg5o-f.js";import"./index-CXQShRbs.js";import"./index-DrFu-skq.js";function r(n){const t={code:"code",p:"p",strong:"strong",...c(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"OVHcloud Design System/Get Started"}),`
`,e.jsx(s,{label:"Get Started",level:1}),`
`,e.jsx(t.p,{children:"OVHcloud Design System is a set of reusable React UI components to create a consistent user experience across OVHcloud pages and products, acting as a single source of truth."}),`
`,e.jsxs(t.p,{children:["All OVHcloud Design System packages are available on ",e.jsx(a,{href:"https://www.npmjs.com",target:"_blank",children:"NPM"}),"."]}),`
`,e.jsx(s,{label:"Installation",level:2}),`
`,e.jsxs(t.p,{children:["Include ",e.jsx(t.strong,{children:"ODS"})," in your projects like any other npm/yarn module:"]}),`
`,e.jsx(o,{code:"npm i --save-exact @ovhcloud/ods-react @ovhcloud/ods-themes",dark:"true",language:"bash"}),`
`,e.jsx(t.p,{children:"or"}),`
`,e.jsx(o,{code:"yarn add --exact @ovhcloud/ods-react @ovhcloud/ods-themes",dark:"true",language:"bash"}),`
`,e.jsx(s,{label:"Usage",level:2}),`
`,e.jsx(o,{code:`
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
`,e.jsx(o,{code:"import { ODS_BUTTON_SIZE, type OdsPaginationEvent } from '@ovhcloud/ods-react';",dark:"true",language:"typescript"}),`
`,e.jsx(s,{label:"Import theme",level:2}),`
`,e.jsx(t.p,{children:`You need to import a theme to display all the components correctly.
It defines all the colors, typographies, etc...`}),`
`,e.jsx(t.p,{children:"via ES import:"}),`
`,e.jsx(o,{code:"import '@ovhcloud/ods-themes/default';",dark:"true",language:"typescript"}),`
`,e.jsx(t.p,{children:"via Sass import:"}),`
`,e.jsx(o,{code:"@import '@ovhcloud/ods-themes/default';",dark:"true",language:"css"}),`
`,e.jsx(s,{label:"Use multiple ODS version on the same application",level:2}),`
`,e.jsx(t.p,{children:"While migrating to the React version, you may want to use two versions at the same time (like v18 & v19)."}),`
`,e.jsxs(t.p,{children:["To do that you can use package manager ",e.jsx(a,{href:"https://docs.npmjs.com/cli/v8/using-npm/package-spec#aliases",target:"_blank",children:"aliases"}),"."]}),`
`,e.jsx(o,{code:"npm i --save-exact ods18@npm:@ovhcloud/ods-component@18.6.1",dark:"true",language:"bash"}),`
`,e.jsx(t.p,{children:"or"}),`
`,e.jsx(o,{code:"yarn add --exact ods18@npm:@ovhcloud/ods-component@18.6.1",dark:"true",language:"bash"}),`
`,e.jsx(t.p,{children:"You can then import the components using:"}),`
`,e.jsx(o,{code:`
import { OdsButton } from '@ovhcloud/ods-react';
import { OdsDrawer } from 'ods18';
`,dark:"true",language:"typescript"}),`
`,e.jsxs(t.p,{children:["You don't need to import ",e.jsx(t.code,{children:"@ovhcloud/ods-themes"})," twice."]})]})}function y(n={}){const{wrapper:t}={...c(),...n.components};return t?e.jsx(t,{...n,children:e.jsx(r,{...n})}):r(n)}export{y as default};
