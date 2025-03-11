import{j as o,M as e,d as s}from"./index-CMHv63WF.js";import{u as p}from"./index-CavMhwFB.js";import{O as n}from"./index-BDosBUxz.js";import{P as a}from"./progress-bar.stories-BPXRXFjo.js";import{H as i}from"./Heading-Drr0F75o.js";import"./iframe-CW-8tKo2.js";import"../sb-preview/runtime.js";import"./index-8AfNH5n5.js";import"./index-D-8MO0q_.js";import"./index-DrFu-skq.js";import"./ods-accordion2-C_uqOg6Y.js";import"./index-DAZhnxgO.js";import"./icon-name-C6aMXAXT.js";import"./ods-icon2-DRPHarK1.js";import"./ods-badge-DLluvt0I.js";import"./ods-breadcrumb-item2-C_Ah5FZN.js";import"./ods-link2-CtVFUlMR.js";import"./ods-button2-dPaqs0uX.js";import"./ods-spinner2-CPyWCS2f.js";import"./ods-card-CsxtEQHf.js";import"./ods-checkbox2-CJl-a8ad.js";import"./dom-8hoR-urs.js";import"./ods-clipboard2-CewZJu-c.js";import"./ods-input2-C6KOqFAM.js";import"./type-B5zI8QxY.js";import"./ods-tooltip2-CW12aP9b.js";import"./overlay-KZpfSxWH.js";import"./ods-code2-BL2TW0HP.js";import"./ods-combobox2-BAtyPzTJ.js";import"./_commonjsHelpers-CLD5em3H.js";import"./debounce-DRefBDpX.js";import"./ods-tag2-Bb2BMy9d.js";import"./ods-datepicker2-CijAhCPy.js";import"./locale-NOa-Gxlr.js";import"./ods-divider-Dtiri0aY.js";import"./ods-divider2-yzIshch6.js";import"./ods-drawer2-DKhK7oOX.js";import"./ods-file-upload2-Ca3mZ5BD.js";import"./ods-progress-bar2-Dg_V5kiw.js";import"./ods-form-field2-BDYkM6lU.js";import"./ods-icon-DTp5PnPI.js";import"./ods-input-CCQ46ZEm.js";import"./ods-link-BCeMi6SV.js";import"./ods-medium2-BnayTic8.js";import"./ods-message-DuyDaLcv.js";import"./ods-modal2-DCK89o-L.js";import"./ods-pagination2-shUGU0gB.js";import"./ods-select2-CEKvSxa4.js";import"./ods-password2-D64-z8ym.js";import"./ods-phone-number2-BL58mHzY.js";import"./ods-popover2-mGbx5HiL.js";import"./ods-quantity2-7U22nj6z.js";import"./ods-radio2-DDJaSdNS.js";import"./ods-range2-wBjnlon-.js";import"./ods-skeleton2-B7sDasgF.js";import"./ods-switch-item2-D-SJNcDd.js";import"./ods-tabs2-ChMEr-fQ.js";import"./ods-table2-oe37kiP3.js";import"./ods-text-BO_pN8NQ.js";import"./ods-textarea2-BDOVTqwb.js";import"./ods-timepicker2-DVnCnUkw.js";import"./ods-toggle2-Bg02aln1.js";import"./controls-DX883vx3.js";import"./index-BLVG44ao.js";function m(t){const r={code:"code",p:"p",...p(),...t.components};return o.jsxs(o.Fragment,{children:[o.jsx(e,{of:a,name:"Migration From 17.x"}),`
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
`,dark:"true",language:"html"})]})}function Mo(t={}){const{wrapper:r}={...p(),...t.components};return r?o.jsx(r,{...t,children:o.jsx(m,{...t})}):m(t)}export{Mo as default};
