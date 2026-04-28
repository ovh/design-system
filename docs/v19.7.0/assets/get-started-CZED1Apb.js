import{j as e}from"./jsx-runtime-Cfl8ynUo.js";import{useMDXComponents as i}from"./index-ZwkxtaJJ.js";import{Z as l,p as d,f as a}from"./index-BNZ0vrtB.js";import{M as p,S as t}from"./index-BnNeS_H2.js";import{E as s}from"./ExternalLink-D9Oykgkh.js";import{H as n}from"./Heading-lgNAZPkT.js";import"./index-jIWwRBLr.js";import"./index-CWkFp9WS-BSIT86NH.js";import"./useI18n-ChFNqy_U-DNrrrFET.js";import"./Button-Nxi7HNci-BcUZeA5m.js";import"./colors-C1Wmnk_L-aAAP9SXj.js";import"./icon-name-kFDeGXCQ--4TVzzrX.js";import"./iframe-DtAqipxR.js";import"./index-DWDEzXrj.js";import"./index-N93khynk.js";import"./index-CXQShRbs.js";import"./index-DrFu-skq.js";import"./Link-fc4PsoC7-BoLkDjrj.js";import"./divider-color-DMMH0ySn-B7JauIP0.js";function c(r){const o={code:"code",p:"p",strong:"strong",...i(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(p,{title:"OVHcloud Design System/Get Started"}),`
`,e.jsx(n,{label:"Get Started",level:1}),`
`,e.jsx(o.p,{children:"OVHcloud Design System is a set of reusable React UI components to create a consistent user experience across OVHcloud pages and products, acting as a single source of truth."}),`
`,e.jsxs(o.p,{children:["All OVHcloud Design System packages are available on ",e.jsx(s,{href:"https://www.npmjs.com",children:"NPM"}),"."]}),`
`,e.jsx(n,{label:"Installation",level:2}),`
`,e.jsxs(o.p,{children:["Include ",e.jsx(o.strong,{children:"ODS"})," in your projects like any other npm/yarn module:"]}),`
`,e.jsx(t,{code:"npm i --save-exact @ovhcloud/ods-react @ovhcloud/ods-themes",dark:"true",language:"bash"}),`
`,e.jsx(o.p,{children:"or"}),`
`,e.jsx(t,{code:"yarn add --exact @ovhcloud/ods-react @ovhcloud/ods-themes",dark:"true",language:"bash"}),`
`,e.jsx(n,{label:"Usage",level:2}),`
`,e.jsx(o.p,{children:"All components can be imported from the root path:"}),`
`,e.jsx(t,{code:`
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@ovhcloud/ods-react';

const App = () => {
  return (
    <Accordion>
      <AccordionItem value="0">
        <AccordionTrigger>
          Hello World!
        </AccordionTrigger>
        <AccordionContent>
          Lorem ipsum dolor sit amet.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};
`,dark:"true",language:"tsx"}),`
`,e.jsx(o.p,{children:"Each component is also available as compound component from its subpath:"}),`
`,e.jsx(t,{code:`
import { Accordion } from '@ovhcloud/ods-react/accordion';

const App = () => {
  return (
    <Accordion>
      <Accordion.Item value="0">
        <Accordion.Trigger>
          Hello World!
        </Accordion.Trigger>
        <Accordion.Content>
          Lorem ipsum dolor sit amet.
        </Accordion.Content>
      </Accordion.Item>
    </Accordion>
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
`,e.jsxs(l,{dismissible:!1,style:{width:"100%"},children:[e.jsx(d,{name:"circle-info"}),e.jsx(a,{children:e.jsxs(o.p,{children:["In case you encounter some issues while importing the font files, you can fallback to the base64 import using ",e.jsx(o.code,{children:"import '@ovhcloud/ods-themes/default"}),`.
Though this will increase the bundle size and prevent browser resources loading optimization.`]})})]}),`
`,e.jsx(n,{label:"Typescript",level:2}),`
`,e.jsxs(o.p,{children:["To ensure the types are correctly resolved, you'll have to use the ",e.jsx(o.code,{children:"bundler"})," module resolution, released with ",e.jsx(s,{href:"https://www.typescriptlang.org/docs/handbook/release-notes/typescript-5-0.html#--moduleresolution-bundler",children:"Typescript 5.0"}),"."]}),`
`,e.jsx(t,{code:'"moduleResolution": "bundler"',dark:"true",language:"typescript"})]})}function M(r={}){const{wrapper:o}={...i(),...r.components};return o?e.jsx(o,{...r,children:e.jsx(c,{...r})}):c(r)}export{M as default};
