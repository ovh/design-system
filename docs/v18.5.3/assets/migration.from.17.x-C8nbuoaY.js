import{j as o,M as e,d as s}from"./index-CCbL8veO.js";import{u as p}from"./index-Cq3PbNHF.js";import{O as n}from"./index-uzYzEmTV.js";import{P as a}from"./progress-bar.stories-BPXRXFjo.js";import{H as i}from"./Heading-DN6FdGMk.js";import"./iframe-DU4SvIHv.js";import"../sb-preview/runtime.js";import"./index-8AfNH5n5.js";import"./index-D-8MO0q_.js";import"./index-DrFu-skq.js";import"./ods-accordion2-C2zw5EtX.js";import"./index-DAZhnxgO.js";import"./icon-name-C6aMXAXT.js";import"./ods-icon2-C2sSMg6h.js";import"./ods-badge-CMZ1G1-q.js";import"./ods-breadcrumb-item2-Chi8uW7w.js";import"./ods-link2-DhrEm8Nk.js";import"./ods-button2-DJxJiLcj.js";import"./ods-spinner2-CPyWCS2f.js";import"./ods-card-CsxtEQHf.js";import"./ods-checkbox2-D1rfq4Wo.js";import"./dom-CO1DdTQY.js";import"./ods-clipboard2-PjbiunMl.js";import"./ods-input2-BVKbybMU.js";import"./type-B5zI8QxY.js";import"./ods-tooltip2-CW12aP9b.js";import"./overlay-KZpfSxWH.js";import"./ods-code2-CPtqO8K9.js";import"./ods-datepicker2-CHJb_Dii.js";import"./locale-NOa-Gxlr.js";import"./ods-divider-Dtiri0aY.js";import"./ods-divider2-yzIshch6.js";import"./ods-drawer2-DKhK7oOX.js";import"./ods-file-upload2-WcWZbv1U.js";import"./ods-progress-bar2-Dg_V5kiw.js";import"./ods-form-field2-BDYkM6lU.js";import"./ods-icon-DOZBIEJb.js";import"./ods-link-C3iAbK8i.js";import"./ods-medium2-BnayTic8.js";import"./ods-message-DErUZ_Xg.js";import"./ods-modal2-CLthqs1m.js";import"./ods-pagination2-CxhEcubt.js";import"./ods-select2-D2fKxfqw.js";import"./ods-password2-DNFrl9vd.js";import"./ods-phone-number2-qOf9h3xC.js";import"./ods-popover2-D0fTxPry.js";import"./ods-quantity2-DSK2z9QA.js";import"./ods-radio2-NdDFmobW.js";import"./ods-range2-DVd4LCay.js";import"./ods-skeleton2-B7sDasgF.js";import"./ods-switch-item2-D-SJNcDd.js";import"./ods-tabs2-ChMEr-fQ.js";import"./ods-table2-oe37kiP3.js";import"./ods-tag2-CInySbKk.js";import"./ods-text-BO_pN8NQ.js";import"./ods-textarea2-BJL14TBM.js";import"./ods-timepicker2-4lQj55gq.js";import"./ods-toggle2-BgUL7nI_.js";import"./controls-DX883vx3.js";import"./index-DCBH0_Tl.js";function m(t){const r={code:"code",p:"p",...p(),...t.components};return o.jsxs(o.Fragment,{children:[o.jsx(e,{of:a,name:"Migration From 17.x"}),`
`,o.jsx(i,{label:"ProgressBar - migrate from v17 to v18",level:1}),`
`,o.jsx(i,{label:"Slot changes",level:2}),`
`,o.jsxs(r.p,{children:[o.jsx(r.code,{children:"end"})," ",o.jsx(n,{color:"critical",label:"Removed",size:"sm"})]}),`
`,o.jsx(r.p,{children:"Has been removed."}),`
`,o.jsx(r.p,{children:"You can now add any text directly after the component instead of using the slot."}),`
`,o.jsx(i,{label:"Migration examples",level:2}),`
`,o.jsx(r.p,{children:"Slot end progress bar:"}),`
`,o.jsx(s,{code:`
<osds-progress-bar value="50">
  <span slot="end">50%</span>
</osds-progress-bar>

<!-- is now -->

<ods-progress-bar value="50"></ods-progress-bar><span>50%</span>
`,dark:"true",language:"html"})]})}function fo(t={}){const{wrapper:r}={...p(),...t.components};return r?o.jsx(r,{...t,children:o.jsx(m,{...t})}):m(t)}export{fo as default};
