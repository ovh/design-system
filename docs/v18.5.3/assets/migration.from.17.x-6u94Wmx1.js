import{j as o,M as n,d as t}from"./index-CCbL8veO.js";import{u as m}from"./index-Cq3PbNHF.js";import{O as r}from"./index-uzYzEmTV.js";import{M as a}from"./modal.stories-CugF2XnB.js";import{H as s}from"./Heading-DN6FdGMk.js";import"./iframe-DU4SvIHv.js";import"../sb-preview/runtime.js";import"./index-8AfNH5n5.js";import"./index-D-8MO0q_.js";import"./index-DrFu-skq.js";import"./ods-accordion2-C2zw5EtX.js";import"./index-DAZhnxgO.js";import"./icon-name-C6aMXAXT.js";import"./ods-icon2-C2sSMg6h.js";import"./ods-badge-CMZ1G1-q.js";import"./ods-breadcrumb-item2-Chi8uW7w.js";import"./ods-link2-DhrEm8Nk.js";import"./ods-button2-DJxJiLcj.js";import"./ods-spinner2-CPyWCS2f.js";import"./ods-card-CsxtEQHf.js";import"./ods-checkbox2-D1rfq4Wo.js";import"./dom-CO1DdTQY.js";import"./ods-clipboard2-PjbiunMl.js";import"./ods-input2-BVKbybMU.js";import"./type-B5zI8QxY.js";import"./ods-tooltip2-CW12aP9b.js";import"./overlay-KZpfSxWH.js";import"./ods-code2-CPtqO8K9.js";import"./ods-datepicker2-CHJb_Dii.js";import"./locale-NOa-Gxlr.js";import"./ods-divider-Dtiri0aY.js";import"./ods-divider2-yzIshch6.js";import"./ods-drawer2-DKhK7oOX.js";import"./ods-file-upload2-WcWZbv1U.js";import"./ods-progress-bar2-Dg_V5kiw.js";import"./ods-form-field2-BDYkM6lU.js";import"./ods-icon-DOZBIEJb.js";import"./ods-link-C3iAbK8i.js";import"./ods-medium2-BnayTic8.js";import"./ods-message-DErUZ_Xg.js";import"./ods-modal2-CLthqs1m.js";import"./ods-pagination2-CxhEcubt.js";import"./ods-select2-D2fKxfqw.js";import"./ods-password2-DNFrl9vd.js";import"./ods-phone-number2-qOf9h3xC.js";import"./ods-popover2-D0fTxPry.js";import"./ods-quantity2-DSK2z9QA.js";import"./ods-radio2-NdDFmobW.js";import"./ods-range2-DVd4LCay.js";import"./ods-skeleton2-B7sDasgF.js";import"./ods-switch-item2-D-SJNcDd.js";import"./ods-tabs2-ChMEr-fQ.js";import"./ods-table2-oe37kiP3.js";import"./ods-tag2-CInySbKk.js";import"./ods-text-BO_pN8NQ.js";import"./ods-textarea2-BJL14TBM.js";import"./ods-timepicker2-4lQj55gq.js";import"./ods-toggle2-BgUL7nI_.js";import"./index-DCBH0_Tl.js";import"./controls-DX883vx3.js";import"./unsafe-html-VJzuFJfF.js";function d(i){const e={code:"code",p:"p",...m(),...i.components};return o.jsxs(o.Fragment,{children:[o.jsx(n,{of:a,name:"Migration From 17.x"}),`
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
