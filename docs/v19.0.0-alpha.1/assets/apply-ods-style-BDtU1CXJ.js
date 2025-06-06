import{j as e}from"./jsx-runtime-VM66peLj.js";import{useMDXComponents as l}from"./index-DQB45XCM.js";import{D as s}from"./ods-react-BwLnGFOk.js";import{M as i,S as r}from"./index-BtXuKPxx.js";import{H as n}from"./Heading-D0aj94cg.js";import{S as c,H as d}from"./StorybookLink-BHoLbhqx.js";import"./index-D_CmzhJ4.js";import"./index-ChzAxGiP.js";import"./index-CucsY3YN.js";import"./iframe-VOlI4tKJ.js";import"./index-CXQShRbs.js";import"./index-DrFu-skq.js";function a(o){const t={code:"code",p:"p",...l(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{title:"OVHcloud Design System/Design and Style/Apply ODS Style"}),`
`,e.jsx(n,{label:"Apply ODS Style",level:1}),`
`,e.jsxs(t.p,{children:["After installing ODS (following the ",e.jsx(c,{title:d.getStarted,children:"Get Started"}),` documentation),
you'll be able to use every components with the correct style.`]}),`
`,e.jsx(t.p,{children:"For the non-component related style, you need to update your app accordingly."}),`
`,e.jsx(n,{label:"Use the ODS font",level:2}),`
`,e.jsxs(t.p,{children:["ODS components does not enforce any font by default (minus a few exception like ",e.jsx(t.code,{children:"ods-code"}),")."]}),`
`,e.jsx(t.p,{children:"To use one of the ODS fonts in your app, add the expected variables to the top of your app:"}),`
`,e.jsx(r,{code:`
html {
  font-family: var(--ods-font-family-default);
}
`,dark:"true",language:"css"}),`
`,e.jsx(n,{label:"Use the ODS design tokens",level:2}),`
`,e.jsxs(t.p,{children:["All ODS components are using common design tokens, that are accessible through ",e.jsx(s,{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties",target:"_blank",children:"CSS variables"}),"."]}),`
`,e.jsxs(t.p,{children:["If you want to use any of those on your own components, you can refer to the exhaustive list on the ",e.jsx(s,{href:"https://www.figma.com/design/tIKzHa5KvHHyosgIgyBswB/Design-Tokens?m=auto&node-id=0-1&t=s57Qt3pa7WuFWKEh-1",target:"_blank",children:"Figma dedicated page"}),"."]}),`
`,e.jsx(r,{code:`
.my-custom-title {
  color: var(--ods-color-text);
  ...
}
`,dark:"true",language:"css"})]})}function v(o={}){const{wrapper:t}={...l(),...o.components};return t?e.jsx(t,{...o,children:e.jsx(a,{...o})}):a(o)}export{v as default};
