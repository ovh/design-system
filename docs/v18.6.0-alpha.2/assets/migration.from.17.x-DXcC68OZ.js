import{j as e,M as l,d as i}from"./index-Cg27MLKJ.js";import{u as c}from"./index-CRYdQg8Y.js";import{O as m}from"./index-DpXZhc7f.js";import{B as n}from"./breadcrumb.stories-BctBo5ix.js";import{H as o}from"./Heading-J7HCFxl6.js";import{S as s,O as a,a as d}from"./StorybookLink-anNL9IKG.js";import"./iframe-J0ZUQmQ0.js";import"../sb-preview/runtime.js";import"./index-8AfNH5n5.js";import"./index-D-8MO0q_.js";import"./index-DrFu-skq.js";import"./ods-accordion2-C_uqOg6Y.js";import"./index-DAZhnxgO.js";import"./icon-name-C6aMXAXT.js";import"./ods-icon2-DRPHarK1.js";import"./ods-badge-CjbpLGl8.js";import"./ods-breadcrumb-item2-C_Ah5FZN.js";import"./ods-link2-CtVFUlMR.js";import"./ods-button2-dPaqs0uX.js";import"./ods-spinner2-CPyWCS2f.js";import"./ods-card-CsxtEQHf.js";import"./ods-checkbox2-CJl-a8ad.js";import"./dom-8hoR-urs.js";import"./ods-clipboard2-CewZJu-c.js";import"./ods-input2-C6KOqFAM.js";import"./type-B5zI8QxY.js";import"./ods-tooltip2-CW12aP9b.js";import"./overlay-KZpfSxWH.js";import"./ods-code2-BL2TW0HP.js";import"./ods-combobox2-CyL0bVv9.js";import"./_commonjsHelpers-CLD5em3H.js";import"./debounce-DRefBDpX.js";import"./ods-tag2-Bb2BMy9d.js";import"./ods-datepicker2-CijAhCPy.js";import"./locale-NOa-Gxlr.js";import"./ods-divider-Dtiri0aY.js";import"./ods-divider2-yzIshch6.js";import"./ods-drawer2-DKhK7oOX.js";import"./ods-file-upload2-Ca3mZ5BD.js";import"./ods-progress-bar2-Dg_V5kiw.js";import"./ods-form-field2-BDYkM6lU.js";import"./ods-icon-DTp5PnPI.js";import"./ods-input-CCQ46ZEm.js";import"./ods-link-BCeMi6SV.js";import"./ods-medium2-BnayTic8.js";import"./ods-message-DuyDaLcv.js";import"./ods-modal2-DCK89o-L.js";import"./ods-pagination2-shUGU0gB.js";import"./ods-select2-CEKvSxa4.js";import"./ods-password2-D64-z8ym.js";import"./ods-phone-number2-BL58mHzY.js";import"./ods-popover2-mGbx5HiL.js";import"./ods-quantity2-7U22nj6z.js";import"./ods-radio2-DDJaSdNS.js";import"./ods-range2-wBjnlon-.js";import"./ods-skeleton2-B7sDasgF.js";import"./ods-switch-item2-D-SJNcDd.js";import"./ods-tabs2-ChMEr-fQ.js";import"./ods-table2-oe37kiP3.js";import"./ods-text-BO_pN8NQ.js";import"./ods-textarea2-BDOVTqwb.js";import"./ods-timepicker2-DVnCnUkw.js";import"./ods-toggle2-Bg02aln1.js";import"./controls-DX883vx3.js";import"./unsafe-html-VJzuFJfF.js";import"./index-CGJBSJl7.js";function b(t){const r={code:"code",p:"p",...c(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{of:n,name:"Migration From 17.x"}),`
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
`,e.jsxs(r.p,{children:[e.jsx(r.code,{children:"contrasted"})," ",e.jsx(m,{color:"critical",label:"Removed",size:"sm"})]}),`
`,e.jsx(r.p,{children:"Has been removed."}),`
`,e.jsx(r.p,{children:"You can use the style customization to achieve the same result, until a new color get validated by the design team."}),`
`,e.jsxs(r.p,{children:[e.jsx(r.code,{children:"items"})," ",e.jsx(m,{color:"critical",label:"Removed",size:"sm"})]}),`
`,e.jsx(r.p,{children:"Has been removed."}),`
`,e.jsxs(r.p,{children:["You should now use ",e.jsx(r.code,{children:"<ods-breadcrumb-item>"})," directly in the DOM of the ",e.jsx(r.code,{children:"<ods-breadcrumb>"})," component."]}),`
`,e.jsxs(r.p,{children:["The attribute list is the same as the ",e.jsx(s,{kind:a.link,label:"ods-link",story:d.technicalInformation})," component."]}),`
`,e.jsxs(r.p,{children:["Which means you have the same attributes, following the link ",e.jsx(s,{kind:a.link,label:"migration guide",story:d.migrationFrom17}),"."]}),`
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
`,dark:"true",language:"html"})]})}function Oe(t={}){const{wrapper:r}={...c(),...t.components};return r?e.jsx(r,{...t,children:e.jsx(b,{...t})}):b(t)}export{Oe as default};
