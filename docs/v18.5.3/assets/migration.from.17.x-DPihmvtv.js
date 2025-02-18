import{j as e,M as m,d as t}from"./index-CCbL8veO.js";import{u as l}from"./index-Cq3PbNHF.js";import{O as n}from"./index-uzYzEmTV.js";import{L as a}from"./link.stories-B2AzKbPN.js";import{H as r}from"./Heading-DN6FdGMk.js";import"./iframe-DU4SvIHv.js";import"../sb-preview/runtime.js";import"./index-8AfNH5n5.js";import"./index-D-8MO0q_.js";import"./index-DrFu-skq.js";import"./ods-accordion2-C2zw5EtX.js";import"./index-DAZhnxgO.js";import"./icon-name-C6aMXAXT.js";import"./ods-icon2-C2sSMg6h.js";import"./ods-badge-CMZ1G1-q.js";import"./ods-breadcrumb-item2-Chi8uW7w.js";import"./ods-link2-DhrEm8Nk.js";import"./ods-button2-DJxJiLcj.js";import"./ods-spinner2-CPyWCS2f.js";import"./ods-card-CsxtEQHf.js";import"./ods-checkbox2-D1rfq4Wo.js";import"./dom-CO1DdTQY.js";import"./ods-clipboard2-PjbiunMl.js";import"./ods-input2-BVKbybMU.js";import"./type-B5zI8QxY.js";import"./ods-tooltip2-CW12aP9b.js";import"./overlay-KZpfSxWH.js";import"./ods-code2-CPtqO8K9.js";import"./ods-datepicker2-CHJb_Dii.js";import"./locale-NOa-Gxlr.js";import"./ods-divider-Dtiri0aY.js";import"./ods-divider2-yzIshch6.js";import"./ods-drawer2-DKhK7oOX.js";import"./ods-file-upload2-WcWZbv1U.js";import"./ods-progress-bar2-Dg_V5kiw.js";import"./ods-form-field2-BDYkM6lU.js";import"./ods-icon-DOZBIEJb.js";import"./ods-link-C3iAbK8i.js";import"./ods-medium2-BnayTic8.js";import"./ods-message-DErUZ_Xg.js";import"./ods-modal2-CLthqs1m.js";import"./ods-pagination2-CxhEcubt.js";import"./ods-select2-D2fKxfqw.js";import"./ods-password2-DNFrl9vd.js";import"./ods-phone-number2-qOf9h3xC.js";import"./ods-popover2-D0fTxPry.js";import"./ods-quantity2-DSK2z9QA.js";import"./ods-radio2-NdDFmobW.js";import"./ods-range2-DVd4LCay.js";import"./ods-skeleton2-B7sDasgF.js";import"./ods-switch-item2-D-SJNcDd.js";import"./ods-tabs2-ChMEr-fQ.js";import"./ods-table2-oe37kiP3.js";import"./ods-tag2-CInySbKk.js";import"./ods-text-BO_pN8NQ.js";import"./ods-textarea2-BJL14TBM.js";import"./ods-timepicker2-4lQj55gq.js";import"./ods-toggle2-BgUL7nI_.js";import"./index-DCBH0_Tl.js";import"./controls-DX883vx3.js";function s(i){const o={code:"code",p:"p",...l(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(m,{of:a,name:"Migration From 17.x"}),`
`,e.jsx(r,{label:"Link - migrate from v17 to v18",level:1}),`
`,e.jsx(r,{label:"Attributes changes",level:2}),`
`,e.jsxs(o.p,{children:[e.jsx(o.code,{children:"contrasted"})," ",e.jsx(n,{color:"critical",label:"Removed",size:"sm"})]}),`
`,e.jsx(o.p,{children:"Has been removed."}),`
`,e.jsx(o.p,{children:"You can use the style customization to achieve the same result, until a new color get validated by the design team."}),`
`,e.jsxs(o.p,{children:[e.jsx(o.code,{children:"disabled"})," ",e.jsx(n,{color:"information",label:"Updated",size:"sm"})]}),`
`,e.jsx(o.p,{children:"Has been updated."}),`
`,e.jsxs(o.p,{children:["You can use the new ",e.jsx(o.code,{children:"isDisabled"})," attribute to obtain the same behavior."]}),`
`,e.jsxs(o.p,{children:[e.jsx(o.code,{children:"slot "})," ",e.jsx(n,{color:"critical",label:"Removed",size:"sm"})]}),`
`,e.jsx(o.p,{children:"Has been removed."}),`
`,e.jsxs(o.p,{children:[`You can no longer put any content inside the component. The ods-link now enforces the rendering of a label, and eventually an icon.
You can use the new attributes `,e.jsx(o.code,{children:"label"})," and ",e.jsx(o.code,{children:"icon"})," to achieve that."]}),`
`,e.jsx(r,{label:"Migration examples",level:2}),`
`,e.jsx(o.p,{children:"Label link:"}),`
`,e.jsx(t,{code:`
<osds-link href="/page">
  My link
</osds-link>

<!-- is now -->

<ods-link href="/page" label="Content"></ods-link>
`,dark:"true",language:"html"}),`
`,e.jsx(o.p,{children:"Disabled link:"}),`
`,e.jsx(t,{code:`
<osds-link href="/page" disabled>
  My link
</osds-link>

<!-- is now -->

<ods-link href="/page" label="My link" is-disabled>
</ods-link>
`,dark:"true",language:"html"}),`
`,e.jsx(o.p,{children:"Icon link:"}),`
`,e.jsx(t,{code:`
<osds-link href="/page">
  <osds-icon name="warning" size="xs"></osds-icon>
</osds-link>

<!-- is now -->

<ods-link href="/page" icon="triangle-exclamation"></ods-link>
`,dark:"true",language:"html"})]})}function ue(i={}){const{wrapper:o}={...l(),...i.components};return o?e.jsx(o,{...i,children:e.jsx(s,{...i})}):s(i)}export{ue as default};
