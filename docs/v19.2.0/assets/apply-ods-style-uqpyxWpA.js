import{j as e}from"./jsx-runtime-Cfl8ynUo.js";import{useMDXComponents as l}from"./index-ZwkxtaJJ.js";import{M as a,S as s}from"./index-MSKBj7dO.js";import{E as r}from"./ExternalLink-izdABMGv.js";import{H as n}from"./Heading-Dphh9YsV.js";import{S as c}from"./StorybookLink-YXIxGde1.js";import{H as m}from"./meta-B7heVWH0.js";import"./index-jIWwRBLr.js";import"./iframe-Cbr9ww7Z.js";import"./index-DWDEzXrj.js";import"./index-N93khynk.js";import"./index-CXQShRbs.js";import"./index-DrFu-skq.js";import"./ods-react60-CRx7zEey.js";import"./index-2w0W-O47-BJ19ihbZ.js";import"./Link-BWQEuWpd-DsrdP0qI.js";import"./ods-react235-aAAP9SXj.js";import"./index-_3rfn-bB.js";function i(o){const t={code:"code",p:"p",...l(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{title:"OVHcloud Design System/Design and Style/Apply ODS Style"}),`
`,e.jsx(n,{label:"Apply ODS Style",level:1}),`
`,e.jsxs(t.p,{children:["After installing ODS (following the ",e.jsx(c,{title:m.getStarted,children:"Get Started"}),` documentation),
you'll be able to use every components with the correct style.`]}),`
`,e.jsx(t.p,{children:"For the non-component related style, you need to update your app accordingly."}),`
`,e.jsx(n,{label:"Use the ODS font",level:2}),`
`,e.jsxs(t.p,{children:["ODS components does not enforce any font by default (minus a few exception like ",e.jsx(t.code,{children:"ods-code"}),")."]}),`
`,e.jsx(t.p,{children:"To use one of the ODS fonts in your app, add the expected variables to the top of your app:"}),`
`,e.jsx(s,{code:`
html {
  font-family: var(--ods-font-family-default);
}
`,dark:"true",language:"css"}),`
`,e.jsx(n,{label:"Use the ODS design tokens",level:2}),`
`,e.jsxs(t.p,{children:["All ODS components are using common design tokens, that are accessible through ",e.jsx(r,{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties",children:"CSS variables"}),"."]}),`
`,e.jsxs(t.p,{children:["If you want to use any of those on your own components, you can refer to the exhaustive list on the ",e.jsx(r,{href:"https://www.figma.com/design/tIKzHa5KvHHyosgIgyBswB/Design-Tokens?m=auto&node-id=0-1&t=s57Qt3pa7WuFWKEh-1",children:"Figma dedicated page"}),"."]}),`
`,e.jsx(s,{code:`
.my-custom-title {
  color: var(--ods-color-text);
  ...
}
`,dark:"true",language:"css"}),`
`,e.jsx(n,{label:"Use ODS CSS reset",level:2}),`
`,e.jsx(t.p,{children:"We recommend you to import the ODS CSS reset subset of rules to normalize the rendering of some elements, but it's not mandatory."}),`
`,e.jsx(s,{code:"import '@ovhcloud/ods-react/normalize-css';",dark:"true",language:"typescript"})]})}function M(o={}){const{wrapper:t}={...l(),...o.components};return t?e.jsx(t,{...o,children:e.jsx(i,{...o})}):i(o)}export{M as default};
