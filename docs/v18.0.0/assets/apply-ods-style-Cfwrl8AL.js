import{j as e}from"./jsx-runtime-Dn0LW--f.js";import{u as s}from"./index-DeyDdHvX.js";import{M as r}from"./index-BM3JsZOq.js";import"./iframe-6_jBXMSq.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-B_J8iUie.js";import"./index-DX_4BEHg.js";import"./index-DrFu-skq.js";function t(n){const o={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...s(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{title:"OVHcloud Design System/Design and Style/Apply ODS Style"}),`
`,e.jsx(o.h1,{id:"apply-ods-style",children:"Apply ODS Style"}),`
`,e.jsxs(o.p,{children:["After installing ODS (following the ",e.jsx(o.a,{href:"?path=/docs/ovhcloud-design-system-get-started--docs",children:"get started"}),` documentation),
you'll be able to use every components with the correct style.`]}),`
`,e.jsx(o.p,{children:"For the non-component related style, you need to update your app accordingly."}),`
`,e.jsx(o.h2,{id:"use-the-ods-font",children:"Use the ODS font"}),`
`,e.jsxs(o.p,{children:["ODS components does not enforce any font by default (minus a few exception like ",e.jsx(o.code,{children:"ods-code"}),")."]}),`
`,e.jsx(o.p,{children:"To use one of the ODS fonts in your app, add the expected variables to the top of your app:"}),`
`,e.jsx(o.pre,{children:e.jsx(o.code,{className:"language-css",children:`html {
  font-family: var(--ods-font-family-default);
}
`})}),`
`,e.jsx(o.h2,{id:"use-the-ods-design-tokens",children:"Use the ODS design tokens"}),`
`,e.jsxs(o.p,{children:["All ODS components are using common design tokens, that are accessible through ",e.jsx(o.a,{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties",rel:"nofollow",children:"CSS variables"}),"."]}),`
`,e.jsxs(o.p,{children:["If you want to use any of those on your own components, you can refer to the exhaustive list on the ",e.jsx(o.a,{href:"https://www.figma.com/design/tIKzHa5KvHHyosgIgyBswB/Design-Tokens?m=auto&node-id=0-1&t=s57Qt3pa7WuFWKEh-1",rel:"nofollow",children:"Figma dedicated page"}),"."]}),`
`,e.jsx(o.pre,{children:e.jsx(o.code,{className:"language-css",children:`.my-custom-title {
  color: var(--ods-color-text);
  ...
}
`})})]})}function f(n={}){const{wrapper:o}={...s(),...n.components};return o?e.jsx(o,{...n,children:e.jsx(t,{...n})}):t(n)}export{f as default};
