import{j as t,M as n,d as i}from"./index-Cg27MLKJ.js";import{u as p}from"./index-CRYdQg8Y.js";import{O as r}from"./index-DpXZhc7f.js";import{T as l}from"./text.stories-f2K_zyoS.js";import{H as s}from"./Heading-J7HCFxl6.js";import"./iframe-J0ZUQmQ0.js";import"../sb-preview/runtime.js";import"./index-8AfNH5n5.js";import"./index-D-8MO0q_.js";import"./index-DrFu-skq.js";import"./ods-accordion2-C_uqOg6Y.js";import"./index-DAZhnxgO.js";import"./icon-name-C6aMXAXT.js";import"./ods-icon2-DRPHarK1.js";import"./ods-badge-CjbpLGl8.js";import"./ods-breadcrumb-item2-C_Ah5FZN.js";import"./ods-link2-CtVFUlMR.js";import"./ods-button2-dPaqs0uX.js";import"./ods-spinner2-CPyWCS2f.js";import"./ods-card-CsxtEQHf.js";import"./ods-checkbox2-CJl-a8ad.js";import"./dom-8hoR-urs.js";import"./ods-clipboard2-CewZJu-c.js";import"./ods-input2-C6KOqFAM.js";import"./type-B5zI8QxY.js";import"./ods-tooltip2-CW12aP9b.js";import"./overlay-KZpfSxWH.js";import"./ods-code2-BL2TW0HP.js";import"./ods-combobox2-CyL0bVv9.js";import"./_commonjsHelpers-CLD5em3H.js";import"./debounce-DRefBDpX.js";import"./ods-tag2-Bb2BMy9d.js";import"./ods-datepicker2-CijAhCPy.js";import"./locale-NOa-Gxlr.js";import"./ods-divider-Dtiri0aY.js";import"./ods-divider2-yzIshch6.js";import"./ods-drawer2-DKhK7oOX.js";import"./ods-file-upload2-Ca3mZ5BD.js";import"./ods-progress-bar2-Dg_V5kiw.js";import"./ods-form-field2-BDYkM6lU.js";import"./ods-icon-DTp5PnPI.js";import"./ods-input-CCQ46ZEm.js";import"./ods-link-BCeMi6SV.js";import"./ods-medium2-BnayTic8.js";import"./ods-message-DuyDaLcv.js";import"./ods-modal2-DCK89o-L.js";import"./ods-pagination2-shUGU0gB.js";import"./ods-select2-CEKvSxa4.js";import"./ods-password2-D64-z8ym.js";import"./ods-phone-number2-BL58mHzY.js";import"./ods-popover2-mGbx5HiL.js";import"./ods-quantity2-7U22nj6z.js";import"./ods-radio2-DDJaSdNS.js";import"./ods-range2-wBjnlon-.js";import"./ods-skeleton2-B7sDasgF.js";import"./ods-switch-item2-D-SJNcDd.js";import"./ods-tabs2-ChMEr-fQ.js";import"./ods-table2-oe37kiP3.js";import"./ods-text-BO_pN8NQ.js";import"./ods-textarea2-BDOVTqwb.js";import"./ods-timepicker2-DVnCnUkw.js";import"./ods-toggle2-Bg02aln1.js";import"./index-CGJBSJl7.js";import"./controls-DX883vx3.js";import"./unsafe-html-VJzuFJfF.js";function m(o){const e={code:"code",p:"p",...p(),...o.components};return t.jsxs(t.Fragment,{children:[t.jsx(n,{of:l,name:"Migration From 17.x"}),`
`,t.jsx(s,{label:"Text - migrate from v17 to v18",level:1}),`
`,t.jsx(s,{label:"Attributes changes",level:2}),`
`,t.jsxs(e.p,{children:[t.jsx(e.code,{children:"breakSpaces"})," ",t.jsx(r,{color:"critical",label:"Removed",size:"sm"})]}),`
`,t.jsxs(e.p,{children:[t.jsx(e.code,{children:"color"})," ",t.jsx(r,{color:"critical",label:"Removed",size:"sm"})]}),`
`,t.jsxs(e.p,{children:[t.jsx(e.code,{children:"contrasted"})," ",t.jsx(r,{color:"critical",label:"Removed",size:"sm"})]}),`
`,t.jsxs(e.p,{children:[t.jsx(e.code,{children:"level"})," ",t.jsx(r,{color:"critical",label:"Removed",size:"sm"})]}),`
`,t.jsxs(e.p,{children:[t.jsx(e.code,{children:"size"})," ",t.jsx(r,{color:"critical",label:"Removed",size:"sm"})]}),`
`,t.jsx(e.p,{children:"Have been removed"}),`
`,t.jsxs(e.p,{children:["You can use the new ",t.jsx(e.code,{children:"preset"})," attribute to obtain the same rendering."]}),`
`,t.jsx(s,{label:"Migration examples",level:2}),`
`,t.jsx(e.p,{children:"Size & Level text:"}),`
`,t.jsx(i,{code:`
<osds-text size="500" level="heading">My text</osds-text>

<!-- is now -->

<ods-text preset="heading-1">My text</ods-text>
`,dark:"true",language:"html"}),`
`,t.jsx(e.p,{children:"Color text:"}),`
`,t.jsx(i,{code:`
<osds-text color="primary">My text</osds-text>

<!-- is now -->

<ods-text class="my-text">My text</ods-text>

<style>
  .my-text::part(text) {
    color: var(--ods-color-primary-500);
  }
</style>
`,dark:"true",language:"html"}),`
`,t.jsx(e.p,{children:"breakSpaces text:"}),`
`,t.jsx(i,{code:`
<osds-text break-spaces>My text</osds-text>

<!-- is now -->

<ods-text class="my-text">My text</ods-text>

<style>
  .my-text::part(text) {
    white-space: break-spaces;
  }
</style>
`,dark:"true",language:"html"})]})}function Mt(o={}){const{wrapper:e}={...p(),...o.components};return e?t.jsx(e,{...o,children:t.jsx(m,{...o})}):m(o)}export{Mt as default};
