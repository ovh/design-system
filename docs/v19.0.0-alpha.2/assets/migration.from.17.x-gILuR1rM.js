import{j as e}from"./jsx-runtime-VM66peLj.js";import{useMDXComponents as b}from"./index-DQB45XCM.js";import{h as d}from"./Badge-EGenXdCK-DDYseYDy.js";import{M as l,S as o}from"./index-BlaLg9GY.js";import{B as n}from"./breadcrumb.stories-CkW2i2id.js";import{H as t}from"./Heading-6Mfikk-c.js";import{S as a,a as i,O as m}from"./StorybookLink-Dek5KO7Z.js";import"./index-D_CmzhJ4.js";import"./index-2w0W-O47-BJ19ihbZ.js";import"./iframe-CGgj-FAD.js";import"./index-ChzAxGiP.js";import"./index-CucsY3YN.js";import"./index-CXQShRbs.js";import"./index-DrFu-skq.js";import"./index-CkQHsVsO.js";import"./Link-CnzBxqpY.js";import"./icon-name-jL3axqAU.js";import"./controls-BtiQQn1l.js";import"./Link-Ck4D7Gly-DoENOEBg.js";function c(s){const r={code:"code",p:"p",...b(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{of:n,name:"Migration From 17.x"}),`
`,e.jsx(t,{label:"Breadcrumb - migrate from v17 to v18",level:1}),`
`,e.jsx(t,{label:"Usage changes",level:2}),`
`,e.jsx(r.p,{children:"Previous to v18, breadcrumb items were passed as an array attribute, with a strict definition of expected attributes."}),`
`,e.jsx(r.p,{children:"New component now works more like other ods components, child items are now declared as slotted element directly in the DOM."}),`
`,e.jsx(r.p,{children:"This way you can easily manipulate the list item DOM and each item separately."}),`
`,e.jsx(o,{code:`
<osds-breadcrumb id="default-breadcrumb"></osds-breadcrumb>
<script>
document.querySelector('#default-breadcrumb').items = JSON.stringify([
  { href: "#home", label: "Home" },
  { href: "#services", label: "Services" },
  { href: "#products", label: "Products" },
  { href: "#web", label: "Web" },
]);
<\/script>
`,dark:"true",language:"html"}),`
`,e.jsx(r.p,{children:"The same result would now be achieved using:"}),`
`,e.jsx(o,{code:`
<ods-breadcrumb>
  <ods-breadcrumb-item href="#home" label="Home"></ods-breadcrumb-item>
  <ods-breadcrumb-item href="#services" label="Services"></ods-breadcrumb-item>
  <ods-breadcrumb-item href="#products" label="Products"></ods-breadcrumb-item>
  <ods-breadcrumb-item href="#web" label="Web"></ods-breadcrumb-item>
</ods-breadcrumb>
`,dark:"true",language:"html"}),`
`,e.jsx(t,{label:"Design changes",level:2}),`
`,e.jsx(r.p,{children:"The last item of the breadcrumb is now automatically rendered as a text, it is no longer a disabled link."}),`
`,e.jsx(t,{label:"Attributes changes",level:2}),`
`,e.jsxs(r.p,{children:[e.jsx(r.code,{children:"contrasted"})," ",e.jsx(d,{color:"critical",size:"sm",children:"Removed"})]}),`
`,e.jsx(r.p,{children:"Has been removed."}),`
`,e.jsx(r.p,{children:"You can use the style customization to achieve the same result, until a new color get validated by the design team."}),`
`,e.jsxs(r.p,{children:[e.jsx(r.code,{children:"items"})," ",e.jsx(d,{color:"critical",size:"sm",children:"Removed"})]}),`
`,e.jsx(r.p,{children:"Has been removed."}),`
`,e.jsxs(r.p,{children:["You should now use ",e.jsx(r.code,{children:"<ods-breadcrumb-item>"})," directly in the DOM of the ",e.jsx(r.code,{children:"<ods-breadcrumb>"})," component."]}),`
`,e.jsxs(r.p,{children:["The attribute list is the same as the ",e.jsx(a,{kind:m.link,story:i.technicalInformation,children:"ods-link"})," component."]}),`
`,e.jsxs(r.p,{children:["Which means you have the same attributes, following the link ",e.jsx(a,{kind:m.link,story:i.migrationFrom17,children:"migration guide"}),"."]}),`
`,e.jsx(t,{label:"Migration examples",level:2}),`
`,e.jsx(r.p,{children:"Basic breadcrumb:"}),`
`,e.jsx(o,{code:`
<osds-breadcrumb id="default-breadcrumb"></osds-breadcrumb>
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
`,dark:"true",language:"html"}),`
`,e.jsx(r.p,{children:"Custom breadcrumb item:"}),`
`,e.jsx(o,{code:`
<osds-breadcrumb id="default-breadcrumb"></osds-breadcrumb>
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
`,dark:"true",language:"html"})]})}function N(s={}){const{wrapper:r}={...b(),...s.components};return r?e.jsx(r,{...s,children:e.jsx(c,{...s})}):c(s)}export{N as default};
