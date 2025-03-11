import{j as r,M as m,d as s}from"./index-CMHv63WF.js";import{u as n}from"./index-CavMhwFB.js";import{O as i}from"./index-BDosBUxz.js";import{D as p}from"./divider.stories-BVu8-ioo.js";import{H as t}from"./Heading-Drr0F75o.js";import"./iframe-CW-8tKo2.js";import"../sb-preview/runtime.js";import"./index-8AfNH5n5.js";import"./index-D-8MO0q_.js";import"./index-DrFu-skq.js";import"./ods-accordion2-C_uqOg6Y.js";import"./index-DAZhnxgO.js";import"./icon-name-C6aMXAXT.js";import"./ods-icon2-DRPHarK1.js";import"./ods-badge-DLluvt0I.js";import"./ods-breadcrumb-item2-C_Ah5FZN.js";import"./ods-link2-CtVFUlMR.js";import"./ods-button2-dPaqs0uX.js";import"./ods-spinner2-CPyWCS2f.js";import"./ods-card-CsxtEQHf.js";import"./ods-checkbox2-CJl-a8ad.js";import"./dom-8hoR-urs.js";import"./ods-clipboard2-CewZJu-c.js";import"./ods-input2-C6KOqFAM.js";import"./type-B5zI8QxY.js";import"./ods-tooltip2-CW12aP9b.js";import"./overlay-KZpfSxWH.js";import"./ods-code2-BL2TW0HP.js";import"./ods-combobox2-BAtyPzTJ.js";import"./_commonjsHelpers-CLD5em3H.js";import"./debounce-DRefBDpX.js";import"./ods-tag2-Bb2BMy9d.js";import"./ods-datepicker2-CijAhCPy.js";import"./locale-NOa-Gxlr.js";import"./ods-divider-Dtiri0aY.js";import"./ods-divider2-yzIshch6.js";import"./ods-drawer2-DKhK7oOX.js";import"./ods-file-upload2-Ca3mZ5BD.js";import"./ods-progress-bar2-Dg_V5kiw.js";import"./ods-form-field2-BDYkM6lU.js";import"./ods-icon-DTp5PnPI.js";import"./ods-input-CCQ46ZEm.js";import"./ods-link-BCeMi6SV.js";import"./ods-medium2-BnayTic8.js";import"./ods-message-DuyDaLcv.js";import"./ods-modal2-DCK89o-L.js";import"./ods-pagination2-shUGU0gB.js";import"./ods-select2-CEKvSxa4.js";import"./ods-password2-D64-z8ym.js";import"./ods-phone-number2-BL58mHzY.js";import"./ods-popover2-mGbx5HiL.js";import"./ods-quantity2-7U22nj6z.js";import"./ods-radio2-DDJaSdNS.js";import"./ods-range2-wBjnlon-.js";import"./ods-skeleton2-B7sDasgF.js";import"./ods-switch-item2-D-SJNcDd.js";import"./ods-tabs2-ChMEr-fQ.js";import"./ods-table2-oe37kiP3.js";import"./ods-text-BO_pN8NQ.js";import"./ods-textarea2-BDOVTqwb.js";import"./ods-timepicker2-DVnCnUkw.js";import"./ods-toggle2-Bg02aln1.js";import"./index-BLVG44ao.js";import"./controls-DX883vx3.js";function d(e){const o={code:"code",p:"p",...n(),...e.components};return r.jsxs(r.Fragment,{children:[r.jsx(m,{of:p,name:"Migration From 17.x"}),`
`,r.jsx(t,{label:"Divider - migrate from v17 to v18",level:1}),`
`,r.jsx(t,{label:"Usage changes",level:2}),`
`,r.jsx(o.p,{children:"The divider is a visual separator and shouldn't be used as a vertical separating measure."}),`
`,r.jsx(t,{label:"Attributes changes",level:2}),`
`,r.jsxs(o.p,{children:[r.jsx(o.code,{children:"color"}),"  ",r.jsx(i,{color:"information",label:"Updated",size:"sm"})]}),`
`,r.jsx(o.p,{children:"Has been updated."}),`
`,r.jsxs(o.p,{children:["The 2 possible values are now ",r.jsx(o.code,{children:"light"})," and ",r.jsx(o.code,{children:"dark"}),"."]}),`
`,r.jsxs(o.p,{children:[r.jsx(o.code,{children:"contrasted"})," ",r.jsx(i,{color:"critical",label:"Removed",size:"sm"})]}),`
`,r.jsx(o.p,{children:"Has been removed."}),`
`,r.jsxs(o.p,{children:["Color attribute can be use with ",r.jsx(o.code,{children:"dark"})," for contrasted content."]}),`
`,r.jsxs(o.p,{children:[r.jsx(o.code,{children:"separator "})," ",r.jsx(i,{color:"critical",label:"Removed",size:"sm"})]}),`
`,r.jsx(o.p,{children:"Has been removed."}),`
`,r.jsx(o.p,{children:"Divider is always shown by default."}),`
`,r.jsxs(o.p,{children:[r.jsx(o.code,{children:"size "})," ",r.jsx(i,{color:"critical",label:"Removed",size:"sm"})]}),`
`,r.jsx(o.p,{children:"Has been removed."}),`
`,r.jsxs(o.p,{children:[r.jsx(o.code,{children:"spacing "})," ",r.jsx(i,{color:"success",label:"New",size:"sm"})]}),`
`,r.jsx(o.p,{children:"It allows to control the height in pixel of the divider."}),`
`,r.jsx(t,{label:"Migration examples",level:2}),`
`,r.jsx(o.p,{children:"Color:"}),`
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
`,r.jsx(o.p,{children:"Contrasted:"}),`
`,r.jsx(s,{code:`
<osds-divider contrasted></osds-divider>

<!-- is now -->

<ods-divider color="dark"></ods-divider>
`,dark:"true",language:"html"}),`
`,r.jsx(o.p,{children:"Separator:"}),`
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
`,r.jsx(o.p,{children:"Size:"}),`
`,r.jsx(s,{code:`
<osds-divider size="1"></osds-divider>

<!-- is now -->

<ods-divider spacing="2"></ods-divider>
`,dark:"true",language:"html"})]})}function fr(e={}){const{wrapper:o}={...n(),...e.components};return o?r.jsx(o,{...e,children:r.jsx(d,{...e})}):d(e)}export{fr as default};
