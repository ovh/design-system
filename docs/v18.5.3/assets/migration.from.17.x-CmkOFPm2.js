import{j as r,M as a,d as s}from"./index-CCbL8veO.js";import{u as n}from"./index-Cq3PbNHF.js";import{O as i}from"./index-uzYzEmTV.js";import{D as l}from"./divider.stories-Rw8dTvpO.js";import{H as t}from"./Heading-DN6FdGMk.js";import"./iframe-DU4SvIHv.js";import"../sb-preview/runtime.js";import"./index-8AfNH5n5.js";import"./index-D-8MO0q_.js";import"./index-DrFu-skq.js";import"./ods-accordion2-C2zw5EtX.js";import"./index-DAZhnxgO.js";import"./icon-name-C6aMXAXT.js";import"./ods-icon2-C2sSMg6h.js";import"./ods-badge-CMZ1G1-q.js";import"./ods-breadcrumb-item2-Chi8uW7w.js";import"./ods-link2-DhrEm8Nk.js";import"./ods-button2-DJxJiLcj.js";import"./ods-spinner2-CPyWCS2f.js";import"./ods-card-CsxtEQHf.js";import"./ods-checkbox2-D1rfq4Wo.js";import"./dom-CO1DdTQY.js";import"./ods-clipboard2-PjbiunMl.js";import"./ods-input2-BVKbybMU.js";import"./type-B5zI8QxY.js";import"./ods-tooltip2-CW12aP9b.js";import"./overlay-KZpfSxWH.js";import"./ods-code2-CPtqO8K9.js";import"./ods-datepicker2-CHJb_Dii.js";import"./locale-NOa-Gxlr.js";import"./ods-divider-Dtiri0aY.js";import"./ods-divider2-yzIshch6.js";import"./ods-drawer2-DKhK7oOX.js";import"./ods-file-upload2-WcWZbv1U.js";import"./ods-progress-bar2-Dg_V5kiw.js";import"./ods-form-field2-BDYkM6lU.js";import"./ods-icon-DOZBIEJb.js";import"./ods-link-C3iAbK8i.js";import"./ods-medium2-BnayTic8.js";import"./ods-message-DErUZ_Xg.js";import"./ods-modal2-CLthqs1m.js";import"./ods-pagination2-CxhEcubt.js";import"./ods-select2-D2fKxfqw.js";import"./ods-password2-DNFrl9vd.js";import"./ods-phone-number2-qOf9h3xC.js";import"./ods-popover2-D0fTxPry.js";import"./ods-quantity2-DSK2z9QA.js";import"./ods-radio2-NdDFmobW.js";import"./ods-range2-DVd4LCay.js";import"./ods-skeleton2-B7sDasgF.js";import"./ods-switch-item2-D-SJNcDd.js";import"./ods-tabs2-ChMEr-fQ.js";import"./ods-table2-oe37kiP3.js";import"./ods-tag2-CInySbKk.js";import"./ods-text-BO_pN8NQ.js";import"./ods-textarea2-BJL14TBM.js";import"./ods-timepicker2-4lQj55gq.js";import"./ods-toggle2-BgUL7nI_.js";import"./index-DCBH0_Tl.js";import"./controls-DX883vx3.js";function d(o){const e={code:"code",p:"p",...n(),...o.components};return r.jsxs(r.Fragment,{children:[r.jsx(a,{of:l,name:"Migration From 17.x"}),`
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
