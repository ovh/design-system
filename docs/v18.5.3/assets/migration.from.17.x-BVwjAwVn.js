import{j as e,M as l,d as i}from"./index-CCbL8veO.js";import{u as m}from"./index-Cq3PbNHF.js";import{O as n}from"./index-uzYzEmTV.js";import{S as p}from"./skeleton.stories-NwmJp5o2.js";import{H as r}from"./Heading-DN6FdGMk.js";import"./iframe-DU4SvIHv.js";import"../sb-preview/runtime.js";import"./index-8AfNH5n5.js";import"./index-D-8MO0q_.js";import"./index-DrFu-skq.js";import"./ods-accordion2-C2zw5EtX.js";import"./index-DAZhnxgO.js";import"./icon-name-C6aMXAXT.js";import"./ods-icon2-C2sSMg6h.js";import"./ods-badge-CMZ1G1-q.js";import"./ods-breadcrumb-item2-Chi8uW7w.js";import"./ods-link2-DhrEm8Nk.js";import"./ods-button2-DJxJiLcj.js";import"./ods-spinner2-CPyWCS2f.js";import"./ods-card-CsxtEQHf.js";import"./ods-checkbox2-D1rfq4Wo.js";import"./dom-CO1DdTQY.js";import"./ods-clipboard2-PjbiunMl.js";import"./ods-input2-BVKbybMU.js";import"./type-B5zI8QxY.js";import"./ods-tooltip2-CW12aP9b.js";import"./overlay-KZpfSxWH.js";import"./ods-code2-CPtqO8K9.js";import"./ods-datepicker2-CHJb_Dii.js";import"./locale-NOa-Gxlr.js";import"./ods-divider-Dtiri0aY.js";import"./ods-divider2-yzIshch6.js";import"./ods-drawer2-DKhK7oOX.js";import"./ods-file-upload2-WcWZbv1U.js";import"./ods-progress-bar2-Dg_V5kiw.js";import"./ods-form-field2-BDYkM6lU.js";import"./ods-icon-DOZBIEJb.js";import"./ods-link-C3iAbK8i.js";import"./ods-medium2-BnayTic8.js";import"./ods-message-DErUZ_Xg.js";import"./ods-modal2-CLthqs1m.js";import"./ods-pagination2-CxhEcubt.js";import"./ods-select2-D2fKxfqw.js";import"./ods-password2-DNFrl9vd.js";import"./ods-phone-number2-qOf9h3xC.js";import"./ods-popover2-D0fTxPry.js";import"./ods-quantity2-DSK2z9QA.js";import"./ods-radio2-NdDFmobW.js";import"./ods-range2-DVd4LCay.js";import"./ods-skeleton2-B7sDasgF.js";import"./ods-switch-item2-D-SJNcDd.js";import"./ods-tabs2-ChMEr-fQ.js";import"./ods-table2-oe37kiP3.js";import"./ods-tag2-CInySbKk.js";import"./ods-text-BO_pN8NQ.js";import"./ods-textarea2-BJL14TBM.js";import"./ods-timepicker2-4lQj55gq.js";import"./ods-toggle2-BgUL7nI_.js";import"./controls-DX883vx3.js";import"./index-DCBH0_Tl.js";function s(t){const o={code:"code",p:"p",...m(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{of:p,name:"Migration From 17.x"}),`
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
