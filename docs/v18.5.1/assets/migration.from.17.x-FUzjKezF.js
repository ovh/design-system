import{j as r,M as a,d as s}from"./index-DQsySnuC.js";import{u as n}from"./index-Xj8pMhSr.js";import{O as i}from"./index-CihiY_f6.js";import{D as l}from"./divider.stories-APx8OiN8.js";import{H as t}from"./Heading-DDc_MF2r.js";import"./iframe-DRtgxPEL.js";import"../sb-preview/runtime.js";import"./index-8AfNH5n5.js";import"./index-D-8MO0q_.js";import"./index-DrFu-skq.js";import"./ods-accordion2-Bgg69lRV.js";import"./index-DAZhnxgO.js";import"./icon-name-C6aMXAXT.js";import"./ods-icon2-Bl6f3POv.js";import"./ods-badge-tHc24Eg4.js";import"./ods-breadcrumb-item2-CoLTn2CF.js";import"./ods-link2-DDMr4sUm.js";import"./ods-button2-Bhm26DQr.js";import"./ods-spinner2-DCN2yKlT.js";import"./ods-card-B_VebKXk.js";import"./ods-checkbox2-BOuFx8yF.js";import"./dom-CO1DdTQY.js";import"./ods-clipboard2-NuJn2ry3.js";import"./ods-input2-B9cw61K_.js";import"./type-B5zI8QxY.js";import"./ods-tooltip2-BwzEvmuE.js";import"./overlay-KZpfSxWH.js";import"./ods-code2-bZeM2NI-.js";import"./ods-datepicker2-DwwUrg1C.js";import"./locale-NOa-Gxlr.js";import"./ods-divider-3cgmT4wP.js";import"./ods-divider2-Dc25YIYb.js";import"./ods-drawer2-DsENZFv4.js";import"./ods-file-upload2-CPd6D9Z5.js";import"./ods-progress-bar2-BuFm8qT0.js";import"./ods-form-field2-Tc9B1-rj.js";import"./ods-icon-NURRZ9Mf.js";import"./ods-link-BE9dMQzg.js";import"./ods-medium2-BB_NU63C.js";import"./ods-message-B9bD81Bu.js";import"./ods-modal2-CP36WQeg.js";import"./ods-pagination2-CotgNPzL.js";import"./ods-select2-B4wr0dem.js";import"./ods-password2-BQKXsiEd.js";import"./ods-phone-number2-D1K1HcDS.js";import"./ods-popover2-hre_XUC2.js";import"./ods-quantity2-DOjRn13r.js";import"./ods-radio2-BtBodUES.js";import"./ods-range2-BhwU834C.js";import"./ods-skeleton2-dZcgHYAN.js";import"./ods-switch-item2-m1p75_3x.js";import"./ods-tabs2-wJlXfoZt.js";import"./ods-table2-vWlGUOoj.js";import"./ods-tag2-Dj0-zHXw.js";import"./ods-text-CTeC-41B.js";import"./ods-textarea2-BHQdu6bK.js";import"./ods-timepicker2-2oCWgeQp.js";import"./ods-toggle2-DbSuYqWU.js";import"./index-DCBH0_Tl.js";import"./controls-DX883vx3.js";function d(o){const e={code:"code",p:"p",...n(),...o.components};return r.jsxs(r.Fragment,{children:[r.jsx(a,{of:l,name:"Migration From 17.x"}),`
`,r.jsx(t,{label:"Divider - migrate from v17 to v18",level:1}),`
`,r.jsx(t,{label:"Usage changes",level:2}),`
`,r.jsx(e.p,{children:"The divider is a visual separator and shouldn't be used as a vertical separating measure."}),`
`,r.jsx(t,{label:"Attributes changes",level:2}),`
`,r.jsxs(e.p,{children:[r.jsx(e.code,{children:"color"}),"  ",r.jsx(i,{color:"information",label:"Updated",size:"sm"})]}),`
`,r.jsx(e.p,{children:"Has been updated."}),`
`,r.jsxs(e.p,{children:["The 2 possible values are now ",r.jsx(e.code,{children:"light"})," and ",r.jsx(e.code,{children:"dark"}),"."]}),`
`,r.jsxs(e.p,{children:[r.jsx(e.code,{children:"contrasted"})," ",r.jsx(i,{color:"critical",label:"Removed",size:"sm"})]}),`
`,r.jsx(e.p,{children:"Has been removed."}),`
`,r.jsxs(e.p,{children:["Color attribute can be use with ",r.jsx(e.code,{children:"dark"})," for contrasted content."]}),`
`,r.jsxs(e.p,{children:[r.jsx(e.code,{children:"separator "})," ",r.jsx(i,{color:"critical",label:"Removed",size:"sm"})]}),`
`,r.jsx(e.p,{children:"Has been removed."}),`
`,r.jsx(e.p,{children:"Divider is always shown by default."}),`
`,r.jsxs(e.p,{children:[r.jsx(e.code,{children:"size "})," ",r.jsx(i,{color:"critical",label:"Removed",size:"sm"})]}),`
`,r.jsx(e.p,{children:"Has been removed."}),`
`,r.jsxs(e.p,{children:[r.jsx(e.code,{children:"spacing "})," ",r.jsx(i,{color:"success",label:"New",size:"sm"})]}),`
`,r.jsx(e.p,{children:"It allows to control the height in pixel of the divider."}),`
`,r.jsx(t,{label:"Migration examples",level:2}),`
`,r.jsx(e.p,{children:"Color:"}),`
`,r.jsx(s,{code:`
<osds-divider color="primary"></osds-divider>

<!-- is now -->

<ods-divider class="custom"></ods-divider>

<style>
  .custom {
    background-color: var(--ods-color-primary-100);
  }
</style>
`,dark:"true",language:"html"}),`
`,r.jsx(e.p,{children:"Contrasted:"}),`
`,r.jsx(s,{code:`
<osds-divider contrasted></osds-divider>

<!-- is now -->

<ods-divider color="dark"></ods-divider>
`,dark:"true",language:"html"}),`
`,r.jsx(e.p,{children:"Separator:"}),`
`,r.jsx(s,{code:`
<osds-divider separator="false"></osds-divider>

<!-- is now -->

<ods-divider class="custom"></ods-divider>

<style>
  .custom {
    background-color: transparent;
  }
</style>
`,dark:"true",language:"html"}),`
`,r.jsx(e.p,{children:"Size:"}),`
`,r.jsx(s,{code:`
<osds-divider size="1"></osds-divider>

<!-- is now -->

<ods-divider spacing="2"></ods-divider>
`,dark:"true",language:"html"})]})}function vr(o={}){const{wrapper:e}={...n(),...o.components};return e?r.jsx(e,{...o,children:r.jsx(d,{...o})}):d(o)}export{vr as default};
