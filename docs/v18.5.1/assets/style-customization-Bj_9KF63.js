import{j as e,M as a,d as n}from"./index-DQsySnuC.js";import{u as r}from"./index-Xj8pMhSr.js";import{a as l}from"./index-CihiY_f6.js";import{H as i}from"./Heading-DDc_MF2r.js";import"./iframe-DRtgxPEL.js";import"../sb-preview/runtime.js";import"./index-8AfNH5n5.js";import"./index-D-8MO0q_.js";import"./index-DrFu-skq.js";import"./ods-accordion2-Bgg69lRV.js";import"./index-DAZhnxgO.js";import"./icon-name-C6aMXAXT.js";import"./ods-icon2-Bl6f3POv.js";import"./ods-badge-tHc24Eg4.js";import"./ods-breadcrumb-item2-CoLTn2CF.js";import"./ods-link2-DDMr4sUm.js";import"./ods-button2-Bhm26DQr.js";import"./ods-spinner2-DCN2yKlT.js";import"./ods-card-B_VebKXk.js";import"./ods-checkbox2-BOuFx8yF.js";import"./dom-CO1DdTQY.js";import"./ods-clipboard2-NuJn2ry3.js";import"./ods-input2-B9cw61K_.js";import"./type-B5zI8QxY.js";import"./ods-tooltip2-BwzEvmuE.js";import"./overlay-KZpfSxWH.js";import"./ods-code2-bZeM2NI-.js";import"./ods-datepicker2-DwwUrg1C.js";import"./locale-NOa-Gxlr.js";import"./ods-divider-3cgmT4wP.js";import"./ods-divider2-Dc25YIYb.js";import"./ods-drawer2-DsENZFv4.js";import"./ods-file-upload2-CPd6D9Z5.js";import"./ods-progress-bar2-BuFm8qT0.js";import"./ods-form-field2-Tc9B1-rj.js";import"./ods-icon-NURRZ9Mf.js";import"./ods-link-BE9dMQzg.js";import"./ods-medium2-BB_NU63C.js";import"./ods-message-B9bD81Bu.js";import"./ods-modal2-CP36WQeg.js";import"./ods-pagination2-CotgNPzL.js";import"./ods-select2-B4wr0dem.js";import"./ods-password2-BQKXsiEd.js";import"./ods-phone-number2-D1K1HcDS.js";import"./ods-popover2-hre_XUC2.js";import"./ods-quantity2-DOjRn13r.js";import"./ods-radio2-BtBodUES.js";import"./ods-range2-BhwU834C.js";import"./ods-skeleton2-dZcgHYAN.js";import"./ods-switch-item2-m1p75_3x.js";import"./ods-tabs2-wJlXfoZt.js";import"./ods-table2-vWlGUOoj.js";import"./ods-tag2-Dj0-zHXw.js";import"./ods-text-CTeC-41B.js";import"./ods-textarea2-BHQdu6bK.js";import"./ods-timepicker2-2oCWgeQp.js";import"./ods-toggle2-DbSuYqWU.js";import"./index-DCBH0_Tl.js";function s(t){const o={code:"code",p:"p",...r(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{title:"OVHcloud Design System/Design and Style/Style Customization"}),`
`,e.jsx(i,{label:"Style Customization",level:1}),`
`,e.jsx(o.p,{children:`Although ODS components comes with the expected designs, it is sometime useful to customize the rendering of a component
to fit your context.`}),`
`,e.jsx(o.p,{children:"Here we'll describe different ways to customize an ODS component."}),`
`,e.jsx(i,{label:"Apply style directly on the web-component",level:2}),`
`,e.jsx(o.p,{children:"The web-component host behave like any other element in your DOM, so you can apply a class directly to it."}),`
`,e.jsxs(o.p,{children:["For example, if you want to display a vertical list of ",e.jsx(o.code,{children:"ods-link"}),", you can override the inline default display:"]}),`
`,e.jsx(n,{code:`
<ods-link class="custom-link"
          href="..."
          label="my-link-1" />
<ods-link class="custom-link"
          href="..."
          label="my-link-2" />

<style>
  .custom-link {
    display: block;
  }
</style>
`,dark:"true",language:"html"}),`
`,e.jsx(i,{label:"Apply style to its shadow DOM element",level:2}),`
`,e.jsx(o.p,{children:"If updating the host element is not enough, you may customize directly some specific part of the component internal DOM."}),`
`,e.jsxs(o.p,{children:["If a component exposes some part, you can apply your own style using the ",e.jsx(l,{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/::part",label:"part",target:"_blank"})," selector."]}),`
`,e.jsx(o.p,{children:"For example, if you want to create a badge with a specific color that is not provided:"}),`
`,e.jsx(n,{code:`
<ods-badge class="custom-badge"
           label="My badge"></ods-badge>

<style>
  .custom-badge::part(badge) {
    background-color: #ff00ff;
  }
</style>
`,dark:"true",language:"html"}),`
`,e.jsxs(o.p,{children:["To know precisely which parts are available for a specific component, please refer to its ",e.jsx(o.code,{children:"Technical information"})," page."]}),`
`,e.jsx(i,{label:"Reuse existing ODS style",level:2}),`
`,e.jsx(o.p,{children:`In some case where you cannot use an ODS component, you may want one of your own component to look like an ODS component
(for example, when using an external library that doesn't allow custom templating).`}),`
`,e.jsxs(o.p,{children:["We did expose a bunch of ",e.jsx(l,{href:"https://sass-lang.com",label:"Sass",target:"_blank"})," mixins that allows you to easily apply the ODS style to your own elements."]}),`
`,e.jsxs(o.p,{children:["For example, if you need to make an anchor tag looks like an ",e.jsx(o.code,{children:"ods-link"}),":"]}),`
`,e.jsx(n,{code:`
@import '@ovhcloud/ods-components/style';

.my-link {
  @include ods-link();
  @include ods-link-color('primary');
}
`,dark:"true",language:"css"}),`
`,e.jsx(n,{code:'<a class="my-link" ...>...</a>',dark:"true",language:"html"}),`
`,e.jsx(i,{label:"CSS variables",level:2}),`
`,e.jsxs(o.p,{children:["All ODS components are using common design tokens, that are accessible through ",e.jsx(l,{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties",label:"CSS variables",target:"_blank"}),"."]}),`
`,e.jsx(o.p,{children:`We do advise to reuse those variables on your own style, this way your application will automatically be updated on current
theme changes or when new themes will be released.`}),`
`,e.jsxs(o.p,{children:["You can find the whole list on the ",e.jsx(o.code,{children:":root"})," of your application page."]}),`
`,e.jsx(o.p,{children:"Example of CSS variables:"}),`
`,e.jsx(n,{code:`
<h1 class="my-own-page-title">
  Welcome page
</h1>

<style>
  .my-own-page-title {
    color: var(--ods-color-primary-500);
  }
</style>
`,dark:"true",language:"html"})]})}function he(t={}){const{wrapper:o}={...r(),...t.components};return o?e.jsx(o,{...t,children:e.jsx(s,{...t})}):s(t)}export{he as default};
