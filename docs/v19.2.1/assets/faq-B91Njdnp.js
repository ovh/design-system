import{j as e}from"./jsx-runtime-Cfl8ynUo.js";import{useMDXComponents as l}from"./index-ZwkxtaJJ.js";import{v as a}from"./Code-Bo0soTUb-DRpz8fPC.js";import{M as c,S as r}from"./index-8pGbFWRq.js";import{E as i}from"./ExternalLink-izdABMGv.js";import{H as n}from"./Heading-hbfjmHNc.js";import{S as d}from"./StorybookLink-DL_XdQSR.js";import{H as p}from"./meta-B7heVWH0.js";import"./index-jIWwRBLr.js";import"./index-2w0W-O47-BJ19ihbZ.js";import"./useI18n-C3-XAdTV-DeysXkv9.js";import"./ods-react236-aAAP9SXj.js";import"./ods-react93-l5fgq-IX.js";import"./TooltipTrigger-Iu3rt7LP-DQH4Rvrv.js";import"./index-DWDEzXrj.js";import"./index-N93khynk.js";import"./Input-DcqcPYne-DsDnfvYN.js";import"./Text-CcNd6qQr-DgkqCZse.js";import"./ods-react60-CRx7zEey.js";import"./iframe-D7nmkxLr.js";import"./index-CXQShRbs.js";import"./index-DrFu-skq.js";import"./Link-BWQEuWpd-DsrdP0qI.js";import"./index-CTDx-6u2.js";function s(t){const o={code:"code",em:"em",li:"li",p:"p",strong:"strong",ul:"ul",...l(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(c,{title:"OVHcloud Design System/F.A.Q."}),`
`,e.jsx(n,{label:"Frequently Asked Questions",level:1}),`
`,e.jsx(o.p,{children:e.jsx(o.em,{children:"Welcome to the F.A.Q. section of the OVHcloud Design System (ODS)."})}),`
`,e.jsx(o.p,{children:e.jsx(o.em,{children:"Here, we aim to address common questions and provide helpful guidance for developers."})}),`
`,e.jsx(n,{label:"How can I contribute?",level:2}),`
`,e.jsx(o.p,{children:`OVHcloud Design System is an evolving project, and we welcome contributions from the community.
By keeping our repository open source, we aim to make it easier for anyone to suggest improvements, fix issues, or share ideas.`}),`
`,e.jsx(o.p,{children:`Whether it’s a small fix or a new feature, every contribution helps improve the quality and usability of the system.
We appreciate the time and effort of anyone who chooses to take part.`}),`
`,e.jsx(o.p,{children:`Please note that while we welcome contributions, we encourage you to discuss major changes with our team to ensure alignment with the project's goals and overall quality.
Additionally, if you're interested in proposing a new feature, please reach us out first to avoid duplicating effort, as we may already be working on a similar development.`}),`
`,e.jsxs(o.p,{children:["Refer to our project ",e.jsx(i,{href:"https://github.com/ovh/design-system?tab=contributing-ov-file#contributing-to-ods-project",children:"README"})," to learn more about installation and pre-requisites."]}),`
`,e.jsx(n,{label:"I can't find a component I need",level:2}),`
`,e.jsx(o.p,{children:"ODS provides base components that you can build on top of and implement in various contexts."}),`
`,e.jsx(o.p,{children:"If you need a new component, we recommend working with the design team to request and design the component to ensure it aligns with the ODS guidelines."}),`
`,e.jsx(n,{label:"Is my browser supported?",level:2}),`
`,e.jsx(o.p,{children:"ODS supports the latest 2 versions of the following browsers:"}),`
`,e.jsxs(o.ul,{children:[`
`,e.jsx(o.li,{children:"Google Chrome"}),`
`,e.jsx(o.li,{children:"Microsoft Edge"}),`
`,e.jsx(o.li,{children:"Mozilla Firefox"}),`
`,e.jsx(o.li,{children:"Opera"}),`
`,e.jsx(o.li,{children:"Safari"}),`
`]}),`
`,e.jsx(n,{label:"Can I use another CSS framework on top of ODS?",level:2}),`
`,e.jsx(o.p,{children:"You can use any CSS framework on top of ODS."}),`
`,e.jsx(o.p,{children:"Note that some imperative CSS frameworks like Bootstrap may override ODS styling."}),`
`,e.jsx(o.p,{children:"Ensure compatibility by testing the integration in your project."}),`
`,e.jsx(n,{label:"What about Web Components and Vue?",level:2}),`
`,e.jsx(o.p,{children:`Starting from v19, ODS have moved to fully React-based components.
Web Components and the Vue wrapper are now only available in v18.x, which is now in maintenance mode,
so there won't be any new features for this version.`}),`
`,e.jsx(o.p,{children:"If you still need to access documentation about Web Components or Vue, use the version selector at the top left to switch to the latest 18.x documentation, where you'll find the most up-to-date information."}),`
`,e.jsx(n,{label:"TS2307: Cannot find module '@ovhcloud/ods-react' or its corresponding type declarations.",level:2}),`
`,e.jsxs(o.p,{children:["Check that you're using the ",e.jsx(o.code,{children:"bundler"})," ",e.jsx(i,{href:"https://www.typescriptlang.org/docs/handbook/release-notes/typescript-5-0.html#--moduleresolution-bundler",children:"module resolution"})," in your ",e.jsx(o.code,{children:"tsconfig.json"}),"."]}),`
`,e.jsx(r,{code:'"moduleResolution": "bundler"',dark:"true",language:"typescript"}),`
`,e.jsx(n,{label:"My popover/tooltip is not displayed correctly",level:2}),`
`,e.jsxs(o.p,{children:["Check that you're not using a ",e.jsx(o.code,{children:"Fragment"})," as your trigger."]}),`
`,e.jsxs(o.p,{children:["The following will ",e.jsx(o.strong,{children:"not"})," work properly:"]}),`
`,e.jsx(r,{code:`
<Tooltip>
  <TooltipTrigger asChild>
    <>
      <Component1 />
      <Component2 />
    </>
  </TooltipTrigger>
  <TooltipContent>
    ...
  </TooltipContent>
</Tooltip>
`,dark:"true",language:"tsx"}),`
`,e.jsxs(o.p,{children:["Replace the ",e.jsx(o.code,{children:"Fragment"})," with an actual node:"]}),`
`,e.jsx(r,{code:`
<Tooltip>
  <TooltipTrigger asChild>
    <MyTrigger>
      ...
    </MyTrigger>
  </TooltipTrigger>
  <TooltipContent>
    ...
  </TooltipContent>
</Tooltip>
`,dark:"true",language:"tsx"}),`
`,e.jsx(n,{label:"Icons are not displayed",level:2}),`
`,e.jsxs(o.p,{children:["Ensure you did import the fonts in your application, check the ",e.jsx(d,{title:p.getStarted,children:"get started"}),`
page to read more about how to achieve this.`]}),`
`,e.jsx(n,{label:"Warning: Function components cannot be given refs",level:2}),`
`,e.jsxs(o.p,{children:["When using components enabling dynamic component (through the ",e.jsx(o.code,{children:"as"})," attribute), you may encounter the following error message in the console:"]}),`
`,e.jsx(a,{children:e.jsx(o.p,{children:`Warning: Function components cannot be given refs.
Attempts to access this ref will fail. Did you mean to use React.forwardRef()?`})}),`
`,e.jsxs(o.p,{children:["This means you're passing a function component to the ",e.jsx(o.code,{children:"as"})," attribute and it needs to be wrapped by a ",e.jsx(o.code,{children:"forwardRef"})," to be able to manage the ",e.jsx(o.code,{children:"ref"})," correctly."]}),`
`,e.jsx(r,{code:`
import { Link } from '@ovhcloud/ods-react';
import { forwardRef, useRef } from 'react';

const DummyLink = forwardRef(({ children, ...props }, ref) => {
  return (
    <a data-test="dummy" { ...props } ref={ ref }>{ children }</a>
  );
});

const MyApp = () => {
  const linkRef = useRef(null);

  return (
    <div>
      ...
      <Link as={ DummyLink } href="#" ref={ linkRef }>...</Link>
    </div>
  );
};
`,dark:"true",language:"tsx"})]})}function L(t={}){const{wrapper:o}={...l(),...t.components};return o?e.jsx(o,{...t,children:e.jsx(s,{...t})}):s(t)}export{L as default};
