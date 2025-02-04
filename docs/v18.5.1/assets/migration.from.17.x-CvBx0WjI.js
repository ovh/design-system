import{j as o,M as n,d as t}from"./index-DQsySnuC.js";import{u as m}from"./index-Xj8pMhSr.js";import{O as r}from"./index-CihiY_f6.js";import{M as a}from"./modal.stories-BWnsoD4S.js";import{H as s}from"./Heading-DDc_MF2r.js";import"./iframe-DRtgxPEL.js";import"../sb-preview/runtime.js";import"./index-8AfNH5n5.js";import"./index-D-8MO0q_.js";import"./index-DrFu-skq.js";import"./ods-accordion2-Bgg69lRV.js";import"./index-DAZhnxgO.js";import"./icon-name-C6aMXAXT.js";import"./ods-icon2-Bl6f3POv.js";import"./ods-badge-tHc24Eg4.js";import"./ods-breadcrumb-item2-CoLTn2CF.js";import"./ods-link2-DDMr4sUm.js";import"./ods-button2-Bhm26DQr.js";import"./ods-spinner2-DCN2yKlT.js";import"./ods-card-B_VebKXk.js";import"./ods-checkbox2-BOuFx8yF.js";import"./dom-CO1DdTQY.js";import"./ods-clipboard2-NuJn2ry3.js";import"./ods-input2-B9cw61K_.js";import"./type-B5zI8QxY.js";import"./ods-tooltip2-BwzEvmuE.js";import"./overlay-KZpfSxWH.js";import"./ods-code2-bZeM2NI-.js";import"./ods-datepicker2-DwwUrg1C.js";import"./locale-NOa-Gxlr.js";import"./ods-divider-3cgmT4wP.js";import"./ods-divider2-Dc25YIYb.js";import"./ods-drawer2-DsENZFv4.js";import"./ods-file-upload2-CPd6D9Z5.js";import"./ods-progress-bar2-BuFm8qT0.js";import"./ods-form-field2-Tc9B1-rj.js";import"./ods-icon-NURRZ9Mf.js";import"./ods-link-BE9dMQzg.js";import"./ods-medium2-BB_NU63C.js";import"./ods-message-B9bD81Bu.js";import"./ods-modal2-CP36WQeg.js";import"./ods-pagination2-CotgNPzL.js";import"./ods-select2-B4wr0dem.js";import"./ods-password2-BQKXsiEd.js";import"./ods-phone-number2-D1K1HcDS.js";import"./ods-popover2-hre_XUC2.js";import"./ods-quantity2-DOjRn13r.js";import"./ods-radio2-BtBodUES.js";import"./ods-range2-BhwU834C.js";import"./ods-skeleton2-dZcgHYAN.js";import"./ods-switch-item2-m1p75_3x.js";import"./ods-tabs2-wJlXfoZt.js";import"./ods-table2-vWlGUOoj.js";import"./ods-tag2-Dj0-zHXw.js";import"./ods-text-CTeC-41B.js";import"./ods-textarea2-BHQdu6bK.js";import"./ods-timepicker2-2oCWgeQp.js";import"./ods-toggle2-DbSuYqWU.js";import"./index-DCBH0_Tl.js";import"./controls-DX883vx3.js";import"./unsafe-html-VJzuFJfF.js";function d(i){const e={code:"code",p:"p",...m(),...i.components};return o.jsxs(o.Fragment,{children:[o.jsx(n,{of:a,name:"Migration From 17.x"}),`
`,o.jsx(s,{label:"Modal - migrate from v17 to v18",level:1}),`
`,o.jsx(s,{label:"Attributes changes",level:2}),`
`,o.jsxs(e.p,{children:[o.jsx(e.code,{children:"color"})," ",o.jsx(r,{color:"information",label:"Updated",size:"sm"})]}),`
`,o.jsx(e.p,{children:"Has been updated."}),`
`,o.jsxs(e.p,{children:["Modal's color options have been restricted to the options in ",o.jsx(e.code,{children:"ODS_MODAL_COLORS"}),"."]}),`
`,o.jsxs(e.p,{children:[o.jsx(e.code,{children:"dismissible"})," ",o.jsx(r,{color:"information",label:"Updated",size:"sm"})]}),`
`,o.jsx(e.p,{children:"Has been updated."}),`
`,o.jsxs(e.p,{children:["You can use the new ",o.jsx(e.code,{children:"isDismissible"})," attribute to obtain the same behavior."]}),`
`,o.jsxs(e.p,{children:[o.jsx(e.code,{children:"headline"})," ",o.jsx(r,{color:"critical",label:"Removed",size:"sm"})]}),`
`,o.jsx(e.p,{children:"Has been removed."}),`
`,o.jsx(e.p,{children:`Modal does not provide a headline attribute anymore.
You can use the content slot to recreate the desired headline.`}),`
`,o.jsxs(e.p,{children:[o.jsx(e.code,{children:"masked"})," ",o.jsx(r,{color:"information",label:"Updated",size:"sm"})]}),`
`,o.jsx(e.p,{children:"Has been updated."}),`
`,o.jsxs(e.p,{children:["You can use the new ",o.jsx(e.code,{children:"isOpen"})," attribute to obtain the same behavior."]}),`
`,o.jsx(s,{label:"Migration examples",level:2}),`
`,o.jsx(e.p,{children:"Color modal:"}),`
`,o.jsx(t,{code:`
<osds-modal color={ODS_THEME_COLOR_INTENT.information}></osds-modal>

<!-- is now -->

<ods-modal color={ODS_MODAL_COLOR.information}></ods-modal>
`,dark:"true",language:"html"}),`
`,o.jsx(e.p,{children:"Dismissible modal:"}),`
`,o.jsx(t,{code:`
<osds-modal dismissible="true"></osds-modal>

<!-- is now -->

<ods-modal is-dismissible="true"></ods-modal>
`,dark:"true",language:"html"}),`
`,o.jsx(e.p,{children:"Headline modal:"}),`
`,o.jsx(t,{code:`
<osds-modal headline="Hello, world!"></osds-modal>

<!-- is now -->

<ods-modal>
  <ods-text preset="heading-3">Hello, world!</ods-text>
</ods-modal>
`,dark:"true",language:"html"}),`
`,o.jsx(e.p,{children:"Masked modal:"}),`
`,o.jsx(t,{code:`
<osds-modal masked="true"></osds-modal>

<!-- is now -->

<ods-modal is-open="false"></ods-modal>
`,dark:"true",language:"html"})]})}function Mo(i={}){const{wrapper:e}={...m(),...i.components};return e?o.jsx(e,{...i,children:o.jsx(d,{...i})}):d(i)}export{Mo as default};
