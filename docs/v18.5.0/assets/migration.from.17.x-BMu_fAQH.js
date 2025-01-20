import{j as e,M as l,d as a}from"./index-aSJOi-xY.js";import{u as c}from"./index-D_oymSD0.js";import{O as d}from"./index-DduIf26o.js";import{B as n}from"./breadcrumb.stories-D7bVJrCc.js";import{H as t}from"./Heading-fUBW5LMg.js";import{S as o,O as i,a as m}from"./StorybookLink-CdkDDCl2.js";import"./iframe-Cjn0x15a.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-D-8MO0q_.js";import"./index-DX_4BEHg.js";import"./index-DrFu-skq.js";import"./controls-DX883vx3.js";import"./unsafe-html-VJzuFJfF.js";import"./index-B1WyGMUD.js";function b(s){const r={code:"code",p:"p",...c(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{of:n,name:"Migration From 17.x"}),`
`,e.jsx(t,{label:"Breadcrumb - migrate from v17 to v18",level:1}),`
`,e.jsx(t,{label:"Usage changes",level:2}),`
`,e.jsx(r.p,{children:"Previous to v18, breadcrumb items were passed as an array attribute, with a strict definition of expected attributes."}),`
`,e.jsx(r.p,{children:"New component now works more like other ods components, child items are now declared as slotted element directly in the DOM."}),`
`,e.jsx(r.p,{children:"This way you can easily manipulate the list item DOM and each item separately."}),`
`,e.jsx(a,{code:`
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
`,e.jsx(a,{code:`
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
`,e.jsxs(r.p,{children:[e.jsx(r.code,{children:"contrasted"})," ",e.jsx(d,{color:"critical",label:"Removed",size:"sm"})]}),`
`,e.jsx(r.p,{children:"Has been removed."}),`
`,e.jsx(r.p,{children:"You can use the style customization to achieve the same result, until a new color get validated by the design team."}),`
`,e.jsxs(r.p,{children:[e.jsx(r.code,{children:"items"})," ",e.jsx(d,{color:"critical",label:"Removed",size:"sm"})]}),`
`,e.jsx(r.p,{children:"Has been removed."}),`
`,e.jsxs(r.p,{children:["You should now use ",e.jsx(r.code,{children:"<ods-breadcrumb-item>"})," directly in the DOM of the ",e.jsx(r.code,{children:"<ods-breadcrumb>"})," component."]}),`
`,e.jsxs(r.p,{children:["The attribute list is the same as the ",e.jsx(o,{kind:i.link,label:"ods-link",story:m.technicalInformation})," component."]}),`
`,e.jsxs(r.p,{children:["Which means you have the same attributes, following the link ",e.jsx(o,{kind:i.link,label:"migration guide",story:m.migrationFrom17}),"."]}),`
`,e.jsx(t,{label:"Migration examples",level:2}),`
`,e.jsx(r.p,{children:"Basic breadcrumb:"}),`
`,e.jsx(a,{code:`
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
`,e.jsx(a,{code:`
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
`,dark:"true",language:"html"})]})}function D(s={}){const{wrapper:r}={...c(),...s.components};return r?e.jsx(r,{...s,children:e.jsx(b,{...s})}):b(s)}export{D as default};
