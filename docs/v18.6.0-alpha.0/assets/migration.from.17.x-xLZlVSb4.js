import{j as o,M as n,d as t}from"./index-CMHv63WF.js";import{u as d}from"./index-CavMhwFB.js";import{O as r}from"./index-BDosBUxz.js";import{M as a}from"./modal.stories-qEWiMbxj.js";import{H as s}from"./Heading-Drr0F75o.js";import"./iframe-CW-8tKo2.js";import"../sb-preview/runtime.js";import"./index-8AfNH5n5.js";import"./index-D-8MO0q_.js";import"./index-DrFu-skq.js";import"./ods-accordion2-C_uqOg6Y.js";import"./index-DAZhnxgO.js";import"./icon-name-C6aMXAXT.js";import"./ods-icon2-DRPHarK1.js";import"./ods-badge-DLluvt0I.js";import"./ods-breadcrumb-item2-C_Ah5FZN.js";import"./ods-link2-CtVFUlMR.js";import"./ods-button2-dPaqs0uX.js";import"./ods-spinner2-CPyWCS2f.js";import"./ods-card-CsxtEQHf.js";import"./ods-checkbox2-CJl-a8ad.js";import"./dom-8hoR-urs.js";import"./ods-clipboard2-CewZJu-c.js";import"./ods-input2-C6KOqFAM.js";import"./type-B5zI8QxY.js";import"./ods-tooltip2-CW12aP9b.js";import"./overlay-KZpfSxWH.js";import"./ods-code2-BL2TW0HP.js";import"./ods-combobox2-BAtyPzTJ.js";import"./_commonjsHelpers-CLD5em3H.js";import"./debounce-DRefBDpX.js";import"./ods-tag2-Bb2BMy9d.js";import"./ods-datepicker2-CijAhCPy.js";import"./locale-NOa-Gxlr.js";import"./ods-divider-Dtiri0aY.js";import"./ods-divider2-yzIshch6.js";import"./ods-drawer2-DKhK7oOX.js";import"./ods-file-upload2-Ca3mZ5BD.js";import"./ods-progress-bar2-Dg_V5kiw.js";import"./ods-form-field2-BDYkM6lU.js";import"./ods-icon-DTp5PnPI.js";import"./ods-input-CCQ46ZEm.js";import"./ods-link-BCeMi6SV.js";import"./ods-medium2-BnayTic8.js";import"./ods-message-DuyDaLcv.js";import"./ods-modal2-DCK89o-L.js";import"./ods-pagination2-shUGU0gB.js";import"./ods-select2-CEKvSxa4.js";import"./ods-password2-D64-z8ym.js";import"./ods-phone-number2-BL58mHzY.js";import"./ods-popover2-mGbx5HiL.js";import"./ods-quantity2-7U22nj6z.js";import"./ods-radio2-DDJaSdNS.js";import"./ods-range2-wBjnlon-.js";import"./ods-skeleton2-B7sDasgF.js";import"./ods-switch-item2-D-SJNcDd.js";import"./ods-tabs2-ChMEr-fQ.js";import"./ods-table2-oe37kiP3.js";import"./ods-text-BO_pN8NQ.js";import"./ods-textarea2-BDOVTqwb.js";import"./ods-timepicker2-DVnCnUkw.js";import"./ods-toggle2-Bg02aln1.js";import"./index-BLVG44ao.js";import"./controls-DX883vx3.js";import"./unsafe-html-VJzuFJfF.js";function m(i){const e={code:"code",p:"p",...d(),...i.components};return o.jsxs(o.Fragment,{children:[o.jsx(n,{of:a,name:"Migration From 17.x"}),`
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
`,dark:"true",language:"html"})]})}function vo(i={}){const{wrapper:e}={...d(),...i.components};return e?o.jsx(e,{...i,children:o.jsx(m,{...i})}):m(i)}export{vo as default};
