import{j as e,M as l,d as i}from"./index-DQsySnuC.js";import{u as m}from"./index-Xj8pMhSr.js";import{O as n}from"./index-CihiY_f6.js";import{S as p}from"./skeleton.stories-VO-C2YA3.js";import{H as r}from"./Heading-DDc_MF2r.js";import"./iframe-DRtgxPEL.js";import"../sb-preview/runtime.js";import"./index-8AfNH5n5.js";import"./index-D-8MO0q_.js";import"./index-DrFu-skq.js";import"./ods-accordion2-Bgg69lRV.js";import"./index-DAZhnxgO.js";import"./icon-name-C6aMXAXT.js";import"./ods-icon2-Bl6f3POv.js";import"./ods-badge-tHc24Eg4.js";import"./ods-breadcrumb-item2-CoLTn2CF.js";import"./ods-link2-DDMr4sUm.js";import"./ods-button2-Bhm26DQr.js";import"./ods-spinner2-DCN2yKlT.js";import"./ods-card-B_VebKXk.js";import"./ods-checkbox2-BOuFx8yF.js";import"./dom-CO1DdTQY.js";import"./ods-clipboard2-NuJn2ry3.js";import"./ods-input2-B9cw61K_.js";import"./type-B5zI8QxY.js";import"./ods-tooltip2-BwzEvmuE.js";import"./overlay-KZpfSxWH.js";import"./ods-code2-bZeM2NI-.js";import"./ods-datepicker2-DwwUrg1C.js";import"./locale-NOa-Gxlr.js";import"./ods-divider-3cgmT4wP.js";import"./ods-divider2-Dc25YIYb.js";import"./ods-drawer2-DsENZFv4.js";import"./ods-file-upload2-CPd6D9Z5.js";import"./ods-progress-bar2-BuFm8qT0.js";import"./ods-form-field2-Tc9B1-rj.js";import"./ods-icon-NURRZ9Mf.js";import"./ods-link-BE9dMQzg.js";import"./ods-medium2-BB_NU63C.js";import"./ods-message-B9bD81Bu.js";import"./ods-modal2-CP36WQeg.js";import"./ods-pagination2-CotgNPzL.js";import"./ods-select2-B4wr0dem.js";import"./ods-password2-BQKXsiEd.js";import"./ods-phone-number2-D1K1HcDS.js";import"./ods-popover2-hre_XUC2.js";import"./ods-quantity2-DOjRn13r.js";import"./ods-radio2-BtBodUES.js";import"./ods-range2-BhwU834C.js";import"./ods-skeleton2-dZcgHYAN.js";import"./ods-switch-item2-m1p75_3x.js";import"./ods-tabs2-wJlXfoZt.js";import"./ods-table2-vWlGUOoj.js";import"./ods-tag2-Dj0-zHXw.js";import"./ods-text-CTeC-41B.js";import"./ods-textarea2-BHQdu6bK.js";import"./ods-timepicker2-2oCWgeQp.js";import"./ods-toggle2-DbSuYqWU.js";import"./controls-DX883vx3.js";import"./index-DCBH0_Tl.js";function s(t){const o={code:"code",p:"p",...m(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{of:p,name:"Migration From 17.x"}),`
`,e.jsx(r,{label:"Skeleton - migrate from v17 to v18",level:1}),`
`,e.jsx(r,{label:"Attributes changes",level:2}),`
`,e.jsxs(o.p,{children:[e.jsx(o.code,{children:"inline"})," ",e.jsx(n,{color:"critical",label:"Removed",size:"sm"})]}),`
`,e.jsxs(o.p,{children:[e.jsx(o.code,{children:"randomized"})," ",e.jsx(n,{color:"critical",label:"Removed",size:"sm"})]}),`
`,e.jsxs(o.p,{children:[e.jsx(o.code,{children:"size"})," ",e.jsx(n,{color:"critical",label:"Removed",size:"sm"})]}),`
`,e.jsx(o.p,{children:"Have been removed."}),`
`,e.jsx(o.p,{children:"You can use the CSS and JS to obtain the same rendering."}),`
`,e.jsx(r,{label:"Migration examples",level:2}),`
`,e.jsx(o.p,{children:"Size skeleton:"}),`
`,e.jsx(i,{code:`
<osds-skeleton size="md"></osds-skeleton>

<!-- is now -->

<ods-skeleton class="my-skeleton"></ods-skeleton>

<style>
  .my-skeleton::part(skeleton) {
    width: 250px;
  }
</style>
`,dark:"true",language:"html"}),`
`,e.jsx(o.p,{children:"Inline skeleton:"}),`
`,e.jsx(i,{code:`
<osds-skeleton inline></osds-skeleton>

<!-- is now -->

<ods-skeleton class="my-skeleton--inline"></ods-skeleton>

<style>
  .my-skeleton--inline {
    display: inline-block;
    width: 100px;
  }
</style>
`,dark:"true",language:"html"}),`
`,e.jsx(o.p,{children:"Randomized skeleton:"}),`
`,e.jsx(i,{code:`
<osds-skeleton randomized></osds-skeleton>

<!-- is now -->

<ods-skeleton id="mySkeleton"></ods-skeleton>

<script>
  const mySkeleton = document.getElementById('mySkeleton');
  const getRandomValue = () => {
    // between 30 and 100
    return Math.floor(Math.random() * (100 - 30)) + 30;
  }
  mySkeleton.style.width = getRandomValue() + '%';
<\/script>
`,dark:"true",language:"html"})]})}function he(t={}){const{wrapper:o}={...m(),...t.components};return o?e.jsx(o,{...t,children:e.jsx(s,{...t})}):s(t)}export{he as default};
