import{j as e,M as p,d as m}from"./index-DQsySnuC.js";import{u as s}from"./index-Xj8pMhSr.js";import{O as i}from"./index-CihiY_f6.js";import{S as d}from"./spinner.stories-BTYUw4CB.js";import{H as n}from"./Heading-DDc_MF2r.js";import"./iframe-DRtgxPEL.js";import"../sb-preview/runtime.js";import"./index-8AfNH5n5.js";import"./index-D-8MO0q_.js";import"./index-DrFu-skq.js";import"./ods-accordion2-Bgg69lRV.js";import"./index-DAZhnxgO.js";import"./icon-name-C6aMXAXT.js";import"./ods-icon2-Bl6f3POv.js";import"./ods-badge-tHc24Eg4.js";import"./ods-breadcrumb-item2-CoLTn2CF.js";import"./ods-link2-DDMr4sUm.js";import"./ods-button2-Bhm26DQr.js";import"./ods-spinner2-DCN2yKlT.js";import"./ods-card-B_VebKXk.js";import"./ods-checkbox2-BOuFx8yF.js";import"./dom-CO1DdTQY.js";import"./ods-clipboard2-NuJn2ry3.js";import"./ods-input2-B9cw61K_.js";import"./type-B5zI8QxY.js";import"./ods-tooltip2-BwzEvmuE.js";import"./overlay-KZpfSxWH.js";import"./ods-code2-bZeM2NI-.js";import"./ods-datepicker2-DwwUrg1C.js";import"./locale-NOa-Gxlr.js";import"./ods-divider-3cgmT4wP.js";import"./ods-divider2-Dc25YIYb.js";import"./ods-drawer2-DsENZFv4.js";import"./ods-file-upload2-CPd6D9Z5.js";import"./ods-progress-bar2-BuFm8qT0.js";import"./ods-form-field2-Tc9B1-rj.js";import"./ods-icon-NURRZ9Mf.js";import"./ods-link-BE9dMQzg.js";import"./ods-medium2-BB_NU63C.js";import"./ods-message-B9bD81Bu.js";import"./ods-modal2-CP36WQeg.js";import"./ods-pagination2-CotgNPzL.js";import"./ods-select2-B4wr0dem.js";import"./ods-password2-BQKXsiEd.js";import"./ods-phone-number2-D1K1HcDS.js";import"./ods-popover2-hre_XUC2.js";import"./ods-quantity2-DOjRn13r.js";import"./ods-radio2-BtBodUES.js";import"./ods-range2-BhwU834C.js";import"./ods-skeleton2-dZcgHYAN.js";import"./ods-switch-item2-m1p75_3x.js";import"./ods-tabs2-wJlXfoZt.js";import"./ods-table2-vWlGUOoj.js";import"./ods-tag2-Dj0-zHXw.js";import"./ods-text-CTeC-41B.js";import"./ods-textarea2-BHQdu6bK.js";import"./ods-timepicker2-2oCWgeQp.js";import"./ods-toggle2-DbSuYqWU.js";import"./index-DCBH0_Tl.js";import"./controls-DX883vx3.js";function t(o){const r={code:"code",p:"p",strong:"strong",...s(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(p,{of:d,name:"Migration From 17.x"}),`
`,e.jsx(n,{label:"Spinner - migrate from v17 to v18",level:1}),`
`,e.jsx(n,{label:"Attributes changes",level:2}),`
`,e.jsxs(r.p,{children:[e.jsx(r.code,{children:"color"})," ",e.jsx(i,{color:"success",label:"New",size:"sm"})]}),`
`,e.jsx(r.p,{children:"New attribute."}),`
`,e.jsx(r.p,{children:"Provides a list of colors using the currently applied theme."}),`
`,e.jsxs(r.p,{children:[e.jsx(r.code,{children:"contrasted"})," ",e.jsx(i,{color:"critical",label:"Removed",size:"sm"})]}),`
`,e.jsx(r.p,{children:"Has been removed."}),`
`,e.jsxs(r.p,{children:["You can use the new ",e.jsx(r.code,{children:"white"})," color to obtain the same rendering."]}),`
`,e.jsxs(r.p,{children:[e.jsx(r.code,{children:"inline"})," ",e.jsx(i,{color:"critical",label:"Removed",size:"sm"})]}),`
`,e.jsx(r.p,{children:"Has been removed."}),`
`,e.jsxs(r.p,{children:["Spinner is now ",e.jsx(r.code,{children:"inline-block"}),` by default.
You can add some style directly on the component if you want to override that.`]}),`
`,e.jsxs(r.p,{children:[e.jsx(r.code,{children:"mode"})," ",e.jsx(i,{color:"critical",label:"Removed",size:"sm"})]}),`
`,e.jsx(r.p,{children:"Has been removed."}),`
`,e.jsx(r.p,{children:"There was only was mode value, it is now the default rendering."}),`
`,e.jsxs(r.p,{children:[e.jsx(r.code,{children:"size"})," ",e.jsx(i,{color:"information",label:"Updated",size:"sm"})]}),`
`,e.jsx(r.p,{children:"Has been updated."}),`
`,e.jsx(r.p,{children:"Provides a list of pre-made spinner sizer, here is the comparison of previous size and new ones:"}),`
`,e.jsx(r.p,{children:e.jsx(r.strong,{children:"sm"})}),`
`,e.jsx(r.p,{children:"Changed from 20px to 24px."}),`
`,e.jsx(r.p,{children:e.jsx(r.strong,{children:"md"})}),`
`,e.jsx(r.p,{children:"Changed from 40px to 48px."}),`
`,e.jsx(r.p,{children:e.jsx(r.strong,{children:"lg"})}),`
`,e.jsx(r.p,{children:"Changed from 140px to 80px."}),`
`,e.jsx(n,{label:"Migration examples",level:2}),`
`,e.jsx(r.p,{children:"Contrasted spinner:"}),`
`,e.jsx(m,{code:`
<osds-spinner inline contrasted></osds-spinner>

<!-- is now -->

<ods-spinner color="white"></ods-spinner>
`,dark:"true",language:"html"})]})}function ue(o={}){const{wrapper:r}={...s(),...o.components};return r?e.jsx(r,{...o,children:e.jsx(t,{...o})}):t(o)}export{ue as default};
