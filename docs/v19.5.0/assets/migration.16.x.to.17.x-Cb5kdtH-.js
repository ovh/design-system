import{j as e}from"./jsx-runtime-Cfl8ynUo.js";import{useMDXComponents as d}from"./index-ZwkxtaJJ.js";import{M as l,S as t}from"./index-Cw5r0Kn8.js";import{H as n}from"./Heading-Dep_rTif.js";import{S as i}from"./StorybookLink-DQwP2BEI.js";import{H as c}from"./meta-DcQbZjt_.js";import"./index-jIWwRBLr.js";import"./iframe-DCzti3mm.js";import"./index-DWDEzXrj.js";import"./index-N93khynk.js";import"./index-CXQShRbs.js";import"./index-DrFu-skq.js";import"./Divider-wQyo85oE-CpSK6tnQ.js";import"./index-CWkFp9WS-BSIT86NH.js";import"./Link-TMoA1i18-BDwROQOD.js";import"./index-CSeLFT3z.js";function r(s){const o={a:"a",code:"code",h1:"h1",p:"p",...d(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"OVHcloud Design System/What's new?/Migration guide/16.x to 17.x"}),`
`,e.jsxs(o.h1,{id:"1660-to-1700-compare",children:[e.jsx(o.a,{href:"https://ovh.github.io/design-system/v16.6.0/?path=/story/ovhcloud-design-system-what-s-new-changelog--page",rel:"nofollow",children:"16.6.0"})," to ",e.jsx(o.a,{href:"https://ovh.github.io/design-system/v17.0.0/?path=/story/ovhcloud-design-system-what-s-new-changelog--page",rel:"nofollow",children:"17.0.0"})," (",e.jsx(o.a,{href:"https://github.com/ovh/design-system/compare/release/16.0...release/17.0",rel:"nofollow",children:"compare"}),")"]}),`
`,e.jsx(o.p,{children:"Main focus on this version has been on simplifying ODS integration in existing projects (React, Vue, JS, ...)."}),`
`,e.jsx(o.p,{children:"If you have any issue finding a specific change, feel free to contact us directly and we'll help you migrate."}),`
`,e.jsx(n,{label:"All Components",level:2}),`
`,e.jsx(n,{label:"Dependency",level:3}),`
`,e.jsxs(o.p,{children:["We now only publish one ",e.jsx(o.code,{children:"ods-components"})," library that embed all the ODS components."]}),`
`,e.jsx(o.p,{children:"You need to remove any component specific dependencies, ex:"}),`
`,e.jsx(t,{code:'"ods-component-button": "16.6.0" // should be removed',dark:"true",language:"text"}),`
`,e.jsx(o.p,{children:"Instead use only one dependency:"}),`
`,e.jsx(t,{code:'"ods-components": "17.0.0"',dark:"true",language:"text"}),`
`,e.jsx(n,{label:"Import",level:3}),`
`,e.jsxs(o.p,{children:["You can see more details in the updated ",e.jsx(i,{title:c.getStarted,children:"Get Started documentation"})]}),`
`,e.jsx(n,{label:"Native webcomponents",level:4}),`
`,e.jsx(o.p,{children:"Using lazy-loading:"}),`
`,e.jsx(t,{code:`
import { defineCustomElements } from '@ovhcloud/ods-components/dist/loader';
defineCustomElements();
`,dark:"true",language:"typescript"}),`
`,e.jsx(o.p,{children:"As module:"}),`
`,e.jsx(t,{code:`
import { defineCustomElement as defineButton } from '@ovhcloud/ods-components/dist/components/osds-button';
defineButton();
`,dark:"true",language:"typescript"}),`
`,e.jsx(n,{label:"React components",level:4}),`
`,e.jsx(t,{code:"import { OsdsButton, OsdsText } from '@ovhcloud/ods-components/react';",dark:"true",language:"typescript"}),`
`,e.jsx(n,{label:"Vue components",level:4}),`
`,e.jsx(t,{code:"import { OsdsButton, OsdsText } from '@ovhcloud/ods-components/vue';",dark:"true",language:"typescript"}),`
`,e.jsx(n,{label:"Types and constants",level:4}),`
`,e.jsxs(o.p,{children:["All types and constants are accessible from the ",e.jsx(o.code,{children:"ods-components"})," library:"]}),`
`,e.jsx(t,{code:`
import type { OdsButtonAttribute } from '@ovhcloud/ods-components'
import { ODS_BUTTON_SIZE, ODS_BUTTON_SIZES } from '@ovhcloud/ods-components';
`,dark:"true",language:"typescript"}),`
`,e.jsx(n,{label:"About `ods-common-xxx` libs",level:3}),`
`,e.jsxs(o.p,{children:["We're trying to remove the need to add any ",e.jsx(o.code,{children:"ods-common-xxx"})," lib to any project using ODS."]}),`
`,e.jsxs(o.p,{children:["For now, you will still need to add ",e.jsx(o.code,{children:"ods-common-theming"})," as a dependency to access the ",e.jsx(o.code,{children:"ODS_THEME_COLOR_INTENT"})," values."]}),`
`,e.jsxs(o.p,{children:["If you still ended up adding ",e.jsx(o.code,{children:"ods-common-core"})," in your project, please give us the feedback so that we work on removing that need."]})]})}function k(s={}){const{wrapper:o}={...d(),...s.components};return o?e.jsx(o,{...s,children:e.jsx(r,{...s})}):r(s)}export{k as default};
