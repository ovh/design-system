import{j as e}from"./jsx-runtime-3v6rTKkY.js";import{u as d}from"./index-B5y3xRNA.js";import{M as t}from"./index-sugWq352.js";import{B as i}from"./breadcrumb.stories-Bwp1f1F9.js";import"./iframe-D98u-D7f.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-B_J8iUie.js";import"./index-DX_4BEHg.js";import"./index-DrFu-skq.js";import"./lit-html-D-ZEPr28.js";import"./unsafe-html-HR6uCwaW.js";import"./control-C1r2wu67.js";function n(s){const r={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",hr:"hr",p:"p",pre:"pre",...d(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(t,{of:i,name:"Migration From 17.x"}),`
`,e.jsx(r.h1,{id:"breadcrumb---migrate-from-v17-to-v18",children:"Breadcrumb - migrate from v17 to v18"}),`
`,e.jsx(r.hr,{}),`
`,e.jsx(r.h2,{id:"usage-changes",children:"Usage changes"}),`
`,e.jsx(r.p,{children:"Previous to v18, breadcrumb items were passed as an array attribute, with a strict definition of expected attributes."}),`
`,e.jsx(r.p,{children:"New component now works more like other ods components, child items are now declared as slotted element directly in the DOM."}),`
`,e.jsx(r.p,{children:"This way you can easily manipulate the list item DOM and each item separately."}),`
`,e.jsx(r.pre,{children:e.jsx(r.code,{className:"language-html",children:`<osds-breadcrumb id="default-breadcrumb"></osds-breadcrumb>
<script>
document.querySelector('#default-breadcrumb').items = JSON.stringify([
  { href: "#home", label: "Home" },
  { href: "#services", label: "Services" },
  { href: "#products", label: "Products" },
  { href: "#web", label: "Web" },
]);
<\/script>
`})}),`
`,e.jsx(r.p,{children:"The same result would now be achieved using:"}),`
`,e.jsx(r.pre,{children:e.jsx(r.code,{className:"language-html",children:`<ods-breadcrumb>
  <ods-breadcrumb-item href="#home" label="Home"></ods-breadcrumb-item>
  <ods-breadcrumb-item href="#services" label="Services"></ods-breadcrumb-item>
  <ods-breadcrumb-item href="#products" label="Products"></ods-breadcrumb-item>
  <ods-breadcrumb-item href="#web" label="Web"></ods-breadcrumb-item>
</ods-breadcrumb>
`})}),`
`,e.jsx(r.h3,{id:"design-changes",children:"Design changes"}),`
`,e.jsx(r.p,{children:"The last item of the breadcrumb is now automatically rendered as a text, it is no longer a disabled link."}),`
`,e.jsx(r.h2,{id:"attributes-changes",children:"Attributes changes"}),`
`,e.jsxs(r.p,{children:[e.jsx(r.code,{children:"contrasted"})," ",e.jsx("img",{src:"https://img.shields.io/badge/removed-FF0000"})]}),`
`,e.jsx(r.p,{children:"Has been removed."}),`
`,e.jsx(r.p,{children:"You can use the style customization to achieve the same result, until a new color get validated by the design team."}),`
`,e.jsxs(r.p,{children:[e.jsx(r.code,{children:"items"})," ",e.jsx("img",{src:"https://img.shields.io/badge/removed-FF0000"})]}),`
`,e.jsx(r.p,{children:"Has been removed."}),`
`,e.jsxs(r.p,{children:["You should now use ",e.jsx(r.code,{children:"<ods-breadcrumb-item>"})," directly in the DOM of the ",e.jsx(r.code,{children:"<ods-breadcrumb>"})," component."]}),`
`,e.jsxs(r.p,{children:["The attribute list is the same as the ",e.jsx(r.a,{href:"?path=/docs/ods-components-link--documentation#properties",children:"ods-link"})," component."]}),`
`,e.jsxs(r.p,{children:["Which means you have the same attributes, following the link ",e.jsx(r.a,{href:"?path=/docs/ods-components-link--migration-from-17-x",children:"migration guide"}),"."]}),`
`,e.jsx(r.h2,{id:"migration-examples",children:"Migration examples"}),`
`,e.jsx(r.p,{children:"Basic breadcrumb:"}),`
`,e.jsx(r.pre,{children:e.jsx(r.code,{className:"language-html",children:`<osds-breadcrumb id="default-breadcrumb"></osds-breadcrumb>
<script>
document.querySelector('#default-breadcrumb').items = JSON.stringify([
  { href: "#home", label: "Home" },
  { href: "#services", label: "Services" },
  { href: "#products", label: "Products" },
  { href: "#web", label: "Web" },
]);
<\/script>

<!-- is now -->

<ods-breadcrumb>
  <ods-breadcrumb-item href="#home" label="Home"></ods-breadcrumb-item>
  <ods-breadcrumb-item href="#services" label="Services"></ods-breadcrumb-item>
  <ods-breadcrumb-item href="#products" label="Products"></ods-breadcrumb-item>
  <ods-breadcrumb-item href="#web" label="Web"></ods-breadcrumb-item>
</ods-breadcrumb>
`})}),`
`,e.jsx(r.p,{children:"Custom breadcrumb item:"}),`
`,e.jsx(r.pre,{children:e.jsx(r.code,{className:"language-html",children:`<osds-breadcrumb id="default-breadcrumb"></osds-breadcrumb>
<script>
document.querySelector('#default-breadcrumb').items = JSON.stringify([
  { href: "#home", label: "Home" },
  { href: "#services", label: "Services", target: "_blank" },
  { href: "#products", label: "Products", disabled: true },
  { href: "#web", label: "Web" },
]);
<\/script>

<!-- is now -->

<ods-breadcrumb>
  <ods-breadcrumb-item href="#home" label="Home"></ods-breadcrumb-item>
  <ods-breadcrumb-item href="#services" label="Services" target="_blank"></ods-breadcrumb-item>
  <ods-breadcrumb-item href="#products" is-disabled label="Products"></ods-breadcrumb-item>
  <ods-breadcrumb-item href="#web" label="Web"></ods-breadcrumb-item>
</ods-breadcrumb>
`})})]})}function v(s={}){const{wrapper:r}={...d(),...s.components};return r?e.jsx(r,{...s,children:e.jsx(n,{...s})}):n(s)}export{v as default};
