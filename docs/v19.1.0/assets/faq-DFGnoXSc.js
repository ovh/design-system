import{j as e}from"./jsx-runtime-VM66peLj.js";import{useMDXComponents as s}from"./index-DQB45XCM.js";import{M as l,S as r}from"./index-DQDMPrC3.js";import{E as a}from"./ExternalLink-F7ndcp9T.js";import{H as n}from"./Heading-BTR1K1mm.js";import"./index-D_CmzhJ4.js";import"./iframe-llaHorau.js";import"./index-ChzAxGiP.js";import"./index-CucsY3YN.js";import"./index-CXQShRbs.js";import"./index-DrFu-skq.js";import"./ods-react61-BFiU7C5S.js";import"./index-2w0W-O47-BJ19ihbZ.js";import"./Link-DTswNFmS-CEk9YBDP.js";import"./Divider-DwZugXnI-RR--JbES.js";import"./ods-react222-B9lkGKUh.js";function i(t){const o={code:"code",em:"em",li:"li",p:"p",strong:"strong",ul:"ul",...s(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"OVHcloud Design System/F.A.Q."}),`
`,e.jsx(n,{label:"Frequently Asked Questions",level:1}),`
`,e.jsx(o.p,{children:e.jsx(o.em,{children:"Welcome to the F.A.Q. section of the OVHcloud Design System (ODS)."})}),`
`,e.jsx(o.p,{children:e.jsx(o.em,{children:"Here, we aim to address common questions and provide helpful guidance for developers."})}),`
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
`,e.jsxs(o.p,{children:["Check that you're using the ",e.jsx(o.code,{children:"bundler"})," ",e.jsx(a,{href:"https://www.typescriptlang.org/docs/handbook/release-notes/typescript-5-0.html#--moduleresolution-bundler",children:"module resolution"})," in your ",e.jsx(o.code,{children:"tsconfig.json"}),"."]}),`
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
`,dark:"true",language:"tsx"})]})}function T(t={}){const{wrapper:o}={...s(),...t.components};return o?e.jsx(o,{...t,children:e.jsx(i,{...t})}):i(t)}export{T as default};
