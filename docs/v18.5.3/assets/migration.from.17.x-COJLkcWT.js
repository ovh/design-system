import{j as e,M as l,d as i}from"./index-CCbL8veO.js";import{u as c}from"./index-Cq3PbNHF.js";import{O as s}from"./index-uzYzEmTV.js";import{B as n}from"./breadcrumb.stories-CIkH51-x.js";import{H as o}from"./Heading-DN6FdGMk.js";import{S as m,O as a,a as d}from"./StorybookLink-Dd4tegpy.js";import"./iframe-DU4SvIHv.js";import"../sb-preview/runtime.js";import"./index-8AfNH5n5.js";import"./index-D-8MO0q_.js";import"./index-DrFu-skq.js";import"./ods-accordion2-C2zw5EtX.js";import"./index-DAZhnxgO.js";import"./icon-name-C6aMXAXT.js";import"./ods-icon2-C2sSMg6h.js";import"./ods-badge-CMZ1G1-q.js";import"./ods-breadcrumb-item2-Chi8uW7w.js";import"./ods-link2-DhrEm8Nk.js";import"./ods-button2-DJxJiLcj.js";import"./ods-spinner2-CPyWCS2f.js";import"./ods-card-CsxtEQHf.js";import"./ods-checkbox2-D1rfq4Wo.js";import"./dom-CO1DdTQY.js";import"./ods-clipboard2-PjbiunMl.js";import"./ods-input2-BVKbybMU.js";import"./type-B5zI8QxY.js";import"./ods-tooltip2-CW12aP9b.js";import"./overlay-KZpfSxWH.js";import"./ods-code2-CPtqO8K9.js";import"./ods-datepicker2-CHJb_Dii.js";import"./locale-NOa-Gxlr.js";import"./ods-divider-Dtiri0aY.js";import"./ods-divider2-yzIshch6.js";import"./ods-drawer2-DKhK7oOX.js";import"./ods-file-upload2-WcWZbv1U.js";import"./ods-progress-bar2-Dg_V5kiw.js";import"./ods-form-field2-BDYkM6lU.js";import"./ods-icon-DOZBIEJb.js";import"./ods-link-C3iAbK8i.js";import"./ods-medium2-BnayTic8.js";import"./ods-message-DErUZ_Xg.js";import"./ods-modal2-CLthqs1m.js";import"./ods-pagination2-CxhEcubt.js";import"./ods-select2-D2fKxfqw.js";import"./ods-password2-DNFrl9vd.js";import"./ods-phone-number2-qOf9h3xC.js";import"./ods-popover2-D0fTxPry.js";import"./ods-quantity2-DSK2z9QA.js";import"./ods-radio2-NdDFmobW.js";import"./ods-range2-DVd4LCay.js";import"./ods-skeleton2-B7sDasgF.js";import"./ods-switch-item2-D-SJNcDd.js";import"./ods-tabs2-ChMEr-fQ.js";import"./ods-table2-oe37kiP3.js";import"./ods-tag2-CInySbKk.js";import"./ods-text-BO_pN8NQ.js";import"./ods-textarea2-BJL14TBM.js";import"./ods-timepicker2-4lQj55gq.js";import"./ods-toggle2-BgUL7nI_.js";import"./controls-DX883vx3.js";import"./unsafe-html-VJzuFJfF.js";import"./index-DCBH0_Tl.js";function b(t){const r={code:"code",p:"p",...c(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{of:n,name:"Migration From 17.x"}),`
`,e.jsx(o,{label:"Breadcrumb - migrate from v17 to v18",level:1}),`
`,e.jsx(o,{label:"Usage changes",level:2}),`
`,e.jsx(r.p,{children:"Previous to v18, breadcrumb items were passed as an array attribute, with a strict definition of expected attributes."}),`
`,e.jsx(r.p,{children:"New component now works more like other ods components, child items are now declared as slotted element directly in the DOM."}),`
`,e.jsx(r.p,{children:"This way you can easily manipulate the list item DOM and each item separately."}),`
`,e.jsx(i,{code:`
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
`,e.jsx(i,{code:`
<ods-breadcrumb>
  <ods-breadcrumb-item href="#home" label="Home"></ods-breadcrumb-item>
  <ods-breadcrumb-item href="#services" label="Services"></ods-breadcrumb-item>
  <ods-breadcrumb-item href="#products" label="Products"></ods-breadcrumb-item>
  <ods-breadcrumb-item href="#web" label="Web"></ods-breadcrumb-item>
</ods-breadcrumb>
`,dark:"true",language:"html"}),`
`,e.jsx(o,{label:"Design changes",level:2}),`
`,e.jsx(r.p,{children:"The last item of the breadcrumb is now automatically rendered as a text, it is no longer a disabled link."}),`
`,e.jsx(o,{label:"Attributes changes",level:2}),`
`,e.jsxs(r.p,{children:[e.jsx(r.code,{children:"contrasted"})," ",e.jsx(s,{color:"critical",label:"Removed",size:"sm"})]}),`
`,e.jsx(r.p,{children:"Has been removed."}),`
`,e.jsx(r.p,{children:"You can use the style customization to achieve the same result, until a new color get validated by the design team."}),`
`,e.jsxs(r.p,{children:[e.jsx(r.code,{children:"items"})," ",e.jsx(s,{color:"critical",label:"Removed",size:"sm"})]}),`
`,e.jsx(r.p,{children:"Has been removed."}),`
`,e.jsxs(r.p,{children:["You should now use ",e.jsx(r.code,{children:"<ods-breadcrumb-item>"})," directly in the DOM of the ",e.jsx(r.code,{children:"<ods-breadcrumb>"})," component."]}),`
`,e.jsxs(r.p,{children:["The attribute list is the same as the ",e.jsx(m,{kind:a.link,label:"ods-link",story:d.technicalInformation})," component."]}),`
`,e.jsxs(r.p,{children:["Which means you have the same attributes, following the link ",e.jsx(m,{kind:a.link,label:"migration guide",story:d.migrationFrom17}),"."]}),`
`,e.jsx(o,{label:"Migration examples",level:2}),`
`,e.jsx(r.p,{children:"Basic breadcrumb:"}),`
`,e.jsx(i,{code:`
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
`,e.jsx(i,{code:`
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
`,dark:"true",language:"html"})]})}function we(t={}){const{wrapper:r}={...c(),...t.components};return r?e.jsx(r,{...t,children:e.jsx(b,{...t})}):b(t)}export{we as default};
