import{j as t,M as n,d as i}from"./index-DQsySnuC.js";import{u as p}from"./index-Xj8pMhSr.js";import{O as r}from"./index-CihiY_f6.js";import{T as l}from"./text.stories-Cam15nAD.js";import{H as s}from"./Heading-DDc_MF2r.js";import"./iframe-DRtgxPEL.js";import"../sb-preview/runtime.js";import"./index-8AfNH5n5.js";import"./index-D-8MO0q_.js";import"./index-DrFu-skq.js";import"./ods-accordion2-Bgg69lRV.js";import"./index-DAZhnxgO.js";import"./icon-name-C6aMXAXT.js";import"./ods-icon2-Bl6f3POv.js";import"./ods-badge-tHc24Eg4.js";import"./ods-breadcrumb-item2-CoLTn2CF.js";import"./ods-link2-DDMr4sUm.js";import"./ods-button2-Bhm26DQr.js";import"./ods-spinner2-DCN2yKlT.js";import"./ods-card-B_VebKXk.js";import"./ods-checkbox2-BOuFx8yF.js";import"./dom-CO1DdTQY.js";import"./ods-clipboard2-NuJn2ry3.js";import"./ods-input2-B9cw61K_.js";import"./type-B5zI8QxY.js";import"./ods-tooltip2-BwzEvmuE.js";import"./overlay-KZpfSxWH.js";import"./ods-code2-bZeM2NI-.js";import"./ods-datepicker2-DwwUrg1C.js";import"./locale-NOa-Gxlr.js";import"./ods-divider-3cgmT4wP.js";import"./ods-divider2-Dc25YIYb.js";import"./ods-drawer2-DsENZFv4.js";import"./ods-file-upload2-CPd6D9Z5.js";import"./ods-progress-bar2-BuFm8qT0.js";import"./ods-form-field2-Tc9B1-rj.js";import"./ods-icon-NURRZ9Mf.js";import"./ods-link-BE9dMQzg.js";import"./ods-medium2-BB_NU63C.js";import"./ods-message-B9bD81Bu.js";import"./ods-modal2-CP36WQeg.js";import"./ods-pagination2-CotgNPzL.js";import"./ods-select2-B4wr0dem.js";import"./ods-password2-BQKXsiEd.js";import"./ods-phone-number2-D1K1HcDS.js";import"./ods-popover2-hre_XUC2.js";import"./ods-quantity2-DOjRn13r.js";import"./ods-radio2-BtBodUES.js";import"./ods-range2-BhwU834C.js";import"./ods-skeleton2-dZcgHYAN.js";import"./ods-switch-item2-m1p75_3x.js";import"./ods-tabs2-wJlXfoZt.js";import"./ods-table2-vWlGUOoj.js";import"./ods-tag2-Dj0-zHXw.js";import"./ods-text-CTeC-41B.js";import"./ods-textarea2-BHQdu6bK.js";import"./ods-timepicker2-2oCWgeQp.js";import"./ods-toggle2-DbSuYqWU.js";import"./index-DCBH0_Tl.js";import"./controls-DX883vx3.js";import"./unsafe-html-VJzuFJfF.js";function m(o){const e={code:"code",p:"p",...p(),...o.components};return t.jsxs(t.Fragment,{children:[t.jsx(n,{of:l,name:"Migration From 17.x"}),`
`,t.jsx(s,{label:"Text - migrate from v17 to v18",level:1}),`
`,t.jsx(s,{label:"Attributes changes",level:2}),`
`,t.jsxs(e.p,{children:[t.jsx(e.code,{children:"breakSpaces"})," ",t.jsx(r,{color:"critical",label:"Removed",size:"sm"})]}),`
`,t.jsxs(e.p,{children:[t.jsx(e.code,{children:"color"})," ",t.jsx(r,{color:"critical",label:"Removed",size:"sm"})]}),`
`,t.jsxs(e.p,{children:[t.jsx(e.code,{children:"contrasted"})," ",t.jsx(r,{color:"critical",label:"Removed",size:"sm"})]}),`
`,t.jsxs(e.p,{children:[t.jsx(e.code,{children:"level"})," ",t.jsx(r,{color:"critical",label:"Removed",size:"sm"})]}),`
`,t.jsxs(e.p,{children:[t.jsx(e.code,{children:"size"})," ",t.jsx(r,{color:"critical",label:"Removed",size:"sm"})]}),`
`,t.jsx(e.p,{children:"Have been removed"}),`
`,t.jsxs(e.p,{children:["You can use the new ",t.jsx(e.code,{children:"preset"})," attribute to obtain the same rendering."]}),`
`,t.jsx(s,{label:"Migration examples",level:2}),`
`,t.jsx(e.p,{children:"Size & Level text:"}),`
`,t.jsx(i,{code:`
<osds-text size="500" level="heading">My text</osds-text>

<!-- is now -->

<ods-text preset="heading-1">My text</ods-text>
`,dark:"true",language:"html"}),`
`,t.jsx(e.p,{children:"Color text:"}),`
`,t.jsx(i,{code:`
<osds-text color="primary">My text</osds-text>

<!-- is now -->

<ods-text class="my-text">My text</ods-text>

<style>
  .my-text::part(text) {
    color: var(--ods-color-primary-500);
  }
</style>
`,dark:"true",language:"html"}),`
`,t.jsx(e.p,{children:"breakSpaces text:"}),`
`,t.jsx(i,{code:`
<osds-text break-spaces>My text</osds-text>

<!-- is now -->

<ods-text class="my-text">My text</ods-text>

<style>
  .my-text::part(text) {
    white-space: break-spaces;
  }
</style>
`,dark:"true",language:"html"})]})}function yt(o={}){const{wrapper:e}={...p(),...o.components};return e?t.jsx(e,{...o,children:t.jsx(m,{...o})}):m(o)}export{yt as default};
