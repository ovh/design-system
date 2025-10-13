import{j as e}from"./jsx-runtime-Cfl8ynUo.js";import{useMDXComponents as l}from"./index-ZwkxtaJJ.js";import{M as a,S as i}from"./index-MSKBj7dO.js";import{E as r}from"./ExternalLink-izdABMGv.js";import{H as t}from"./Heading-Dphh9YsV.js";import{S as d}from"./StorybookLink-YXIxGde1.js";import{H as c}from"./meta-B7heVWH0.js";import"./index-jIWwRBLr.js";import"./iframe-Cbr9ww7Z.js";import"./index-DWDEzXrj.js";import"./index-N93khynk.js";import"./index-CXQShRbs.js";import"./index-DrFu-skq.js";import"./ods-react60-CRx7zEey.js";import"./index-2w0W-O47-BJ19ihbZ.js";import"./Link-BWQEuWpd-DsrdP0qI.js";import"./ods-react235-aAAP9SXj.js";import"./index-_3rfn-bB.js";function s(n){const o={code:"code",em:"em",li:"li",p:"p",strong:"strong",ul:"ul",...l(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{title:"OVHcloud Design System/F.A.Q."}),`
`,e.jsx(t,{label:"Frequently Asked Questions",level:1}),`
`,e.jsx(o.p,{children:e.jsx(o.em,{children:"Welcome to the F.A.Q. section of the OVHcloud Design System (ODS)."})}),`
`,e.jsx(o.p,{children:e.jsx(o.em,{children:"Here, we aim to address common questions and provide helpful guidance for developers."})}),`
`,e.jsx(t,{label:"How can I contribute?",level:2}),`
`,e.jsx(o.p,{children:`OVHcloud Design System is an evolving project, and we welcome contributions from the community.
By keeping our repository open source, we aim to make it easier for anyone to suggest improvements, fix issues, or share ideas.`}),`
`,e.jsx(o.p,{children:`Whether it’s a small fix or a new feature, every contribution helps improve the quality and usability of the system.
We appreciate the time and effort of anyone who chooses to take part.`}),`
`,e.jsx(o.p,{children:`Please note that while we welcome contributions, we encourage you to discuss major changes with our team to ensure alignment with the project's goals and overall quality.
Additionally, if you're interested in proposing a new feature, please reach us out first to avoid duplicating effort, as we may already be working on a similar development.`}),`
`,e.jsxs(o.p,{children:["Refer to our project ",e.jsx(r,{href:"https://github.com/ovh/design-system?tab=contributing-ov-file#contributing-to-ods-project",children:"README"})," to learn more about installation and pre-requisites."]}),`
`,e.jsx(t,{label:"I can't find a component I need",level:2}),`
`,e.jsx(o.p,{children:"ODS provides base components that you can build on top of and implement in various contexts."}),`
`,e.jsx(o.p,{children:"If you need a new component, we recommend working with the design team to request and design the component to ensure it aligns with the ODS guidelines."}),`
`,e.jsx(t,{label:"Is my browser supported?",level:2}),`
`,e.jsx(o.p,{children:"ODS supports the latest 2 versions of the following browsers:"}),`
`,e.jsxs(o.ul,{children:[`
`,e.jsx(o.li,{children:"Google Chrome"}),`
`,e.jsx(o.li,{children:"Microsoft Edge"}),`
`,e.jsx(o.li,{children:"Mozilla Firefox"}),`
`,e.jsx(o.li,{children:"Opera"}),`
`,e.jsx(o.li,{children:"Safari"}),`
`]}),`
`,e.jsx(t,{label:"Can I use another CSS framework on top of ODS?",level:2}),`
`,e.jsx(o.p,{children:"You can use any CSS framework on top of ODS."}),`
`,e.jsx(o.p,{children:"Note that some imperative CSS frameworks like Bootstrap may override ODS styling."}),`
`,e.jsx(o.p,{children:"Ensure compatibility by testing the integration in your project."}),`
`,e.jsx(t,{label:"What about Web Components and Vue?",level:2}),`
`,e.jsx(o.p,{children:`Starting from v19, ODS have moved to fully React-based components.
Web Components and the Vue wrapper are now only available in v18.x, which is now in maintenance mode,
so there won't be any new features for this version.`}),`
`,e.jsx(o.p,{children:"If you still need to access documentation about Web Components or Vue, use the version selector at the top left to switch to the latest 18.x documentation, where you'll find the most up-to-date information."}),`
`,e.jsx(t,{label:"TS2307: Cannot find module '@ovhcloud/ods-react' or its corresponding type declarations.",level:2}),`
`,e.jsxs(o.p,{children:["Check that you're using the ",e.jsx(o.code,{children:"bundler"})," ",e.jsx(r,{href:"https://www.typescriptlang.org/docs/handbook/release-notes/typescript-5-0.html#--moduleresolution-bundler",children:"module resolution"})," in your ",e.jsx(o.code,{children:"tsconfig.json"}),"."]}),`
`,e.jsx(i,{code:'"moduleResolution": "bundler"',dark:"true",language:"typescript"}),`
`,e.jsx(t,{label:"My popover/tooltip is not displayed correctly",level:2}),`
`,e.jsxs(o.p,{children:["Check that you're not using a ",e.jsx(o.code,{children:"Fragment"})," as your trigger."]}),`
`,e.jsxs(o.p,{children:["The following will ",e.jsx(o.strong,{children:"not"})," work properly:"]}),`
`,e.jsx(i,{code:`
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
`,e.jsx(i,{code:`
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
`,e.jsx(t,{label:"Icons are not displayed",level:2}),`
`,e.jsxs(o.p,{children:["Ensure you did import the fonts in your application, check the ",e.jsx(d,{title:c.getStarted,children:"get started"}),`
page to read more about how to achieve this.`]})]})}function O(n={}){const{wrapper:o}={...l(),...n.components};return o?e.jsx(o,{...n,children:e.jsx(s,{...n})}):s(n)}export{O as default};
