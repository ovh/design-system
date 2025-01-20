import{j as e,M as i,d as s}from"./index-aSJOi-xY.js";import{u as l}from"./index-D_oymSD0.js";import{a}from"./index-DduIf26o.js";import{H as n}from"./Heading-fUBW5LMg.js";import{S as c,H as d}from"./StorybookLink-CdkDDCl2.js";import"./iframe-Cjn0x15a.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-D-8MO0q_.js";import"./index-DX_4BEHg.js";import"./index-DrFu-skq.js";import"./index-B1WyGMUD.js";function r(o){const t={code:"code",p:"p",...l(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{title:"OVHcloud Design System/Design and Style/Apply ODS Style"}),`
`,e.jsx(n,{label:"Apply ODS Style",level:1}),`
`,e.jsxs(t.p,{children:["After installing ODS (following the ",e.jsx(c,{label:"Get Started",title:d.getStarted}),` documentation),
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
`,e.jsxs(t.p,{children:["All ODS components are using common design tokens, that are accessible through ",e.jsx(a,{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties",label:"CSS variables",target:"_blank"}),"."]}),`
`,e.jsxs(t.p,{children:["If you want to use any of those on your own components, you can refer to the exhaustive list on the ",e.jsx(a,{href:"https://www.figma.com/design/tIKzHa5KvHHyosgIgyBswB/Design-Tokens?m=auto&node-id=0-1&t=s57Qt3pa7WuFWKEh-1",label:"Figma dedicated page",target:"_blank"}),"."]}),`
`,e.jsx(s,{code:`
.my-custom-title {
  color: var(--ods-color-text);
  ...
}
`,dark:"true",language:"css"})]})}function k(o={}){const{wrapper:t}={...l(),...o.components};return t?e.jsx(t,{...o,children:e.jsx(r,{...o})}):r(o)}export{k as default};
