import{j as e,M as c,d as t}from"./index-DQsySnuC.js";import{u as r}from"./index-Xj8pMhSr.js";import{O as s}from"./index-CihiY_f6.js";import{S as d}from"./select.stories-BI9_c5ee.js";import{H as l}from"./Heading-DDc_MF2r.js";import"./iframe-DRtgxPEL.js";import"../sb-preview/runtime.js";import"./index-8AfNH5n5.js";import"./index-D-8MO0q_.js";import"./index-DrFu-skq.js";import"./ods-accordion2-Bgg69lRV.js";import"./index-DAZhnxgO.js";import"./icon-name-C6aMXAXT.js";import"./ods-icon2-Bl6f3POv.js";import"./ods-badge-tHc24Eg4.js";import"./ods-breadcrumb-item2-CoLTn2CF.js";import"./ods-link2-DDMr4sUm.js";import"./ods-button2-Bhm26DQr.js";import"./ods-spinner2-DCN2yKlT.js";import"./ods-card-B_VebKXk.js";import"./ods-checkbox2-BOuFx8yF.js";import"./dom-CO1DdTQY.js";import"./ods-clipboard2-NuJn2ry3.js";import"./ods-input2-B9cw61K_.js";import"./type-B5zI8QxY.js";import"./ods-tooltip2-BwzEvmuE.js";import"./overlay-KZpfSxWH.js";import"./ods-code2-bZeM2NI-.js";import"./ods-datepicker2-DwwUrg1C.js";import"./locale-NOa-Gxlr.js";import"./ods-divider-3cgmT4wP.js";import"./ods-divider2-Dc25YIYb.js";import"./ods-drawer2-DsENZFv4.js";import"./ods-file-upload2-CPd6D9Z5.js";import"./ods-progress-bar2-BuFm8qT0.js";import"./ods-form-field2-Tc9B1-rj.js";import"./ods-icon-NURRZ9Mf.js";import"./ods-link-BE9dMQzg.js";import"./ods-medium2-BB_NU63C.js";import"./ods-message-B9bD81Bu.js";import"./ods-modal2-CP36WQeg.js";import"./ods-pagination2-CotgNPzL.js";import"./ods-select2-B4wr0dem.js";import"./ods-password2-BQKXsiEd.js";import"./ods-phone-number2-D1K1HcDS.js";import"./ods-popover2-hre_XUC2.js";import"./ods-quantity2-DOjRn13r.js";import"./ods-radio2-BtBodUES.js";import"./ods-range2-BhwU834C.js";import"./ods-skeleton2-dZcgHYAN.js";import"./ods-switch-item2-m1p75_3x.js";import"./ods-tabs2-wJlXfoZt.js";import"./ods-table2-vWlGUOoj.js";import"./ods-tag2-Dj0-zHXw.js";import"./ods-text-CTeC-41B.js";import"./ods-textarea2-BHQdu6bK.js";import"./ods-timepicker2-2oCWgeQp.js";import"./ods-toggle2-DbSuYqWU.js";import"./controls-DX883vx3.js";import"./validityState-BuENXwQ9.js";import"./index-DCBH0_Tl.js";function i(n){const o={code:"code",p:"p",...r(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(c,{of:d,name:"Migration From 17.x"}),`
`,e.jsx(l,{label:"Select - migrate from v17 to v18",level:1}),`
`,e.jsx(l,{label:"Usage changes",level:2}),`
`,e.jsxs(o.p,{children:["Select component has been entirely reworked, there is now only one component ",e.jsx(o.code,{children:"ods-select"}),`
(no more `,e.jsx(o.code,{children:"osds-select-option"})," and ",e.jsx(o.code,{children:"osds-select-group"}),")."]}),`
`,e.jsxs(o.p,{children:["This component expects the same native children as a classic ",e.jsx(o.code,{children:"select"})," element (option, optgroup)."]}),`
`,e.jsx(o.p,{children:"Here is an example of the previous declaration:"}),`
`,e.jsx(t,{code:`
<osds-select>
  <span slot="placeholder">Select a country</span>
  <osds-select-group>Europe</osds-select-group>
  <osds-select-option value="fr">France</osds-select-option>
  <osds-select-option value="it">Italy</osds-select-option>
  <osds-select-option value="de">Germany</osds-select-option>
</osds-select>
`,dark:"true",language:"html"}),`
`,e.jsx(o.p,{children:"The same result would now be achieved using:"}),`
`,e.jsx(t,{code:`
<ods-select placeholder="Select a country">
  <optgroup label="Europe">
    <option value="fr">France</option>
    <option value="it">Italy</option>
    <option value="de">Germany</option>
  </optgroup>
</ods-select>
`,dark:"true",language:"html"}),`
`,e.jsx(l,{label:"Attributes changes",level:2}),`
`,e.jsxs(o.p,{children:[e.jsx(o.code,{children:"allowMultiple"})," ",e.jsx(s,{color:"success",label:"New",size:"sm"})]}),`
`,e.jsx(o.p,{children:"New attribute (optional)."}),`
`,e.jsx(o.p,{children:"Set this to true to allow multiple selection in the select."}),`
`,e.jsxs(o.p,{children:[e.jsx(o.code,{children:"customRenderer"})," ",e.jsx(s,{color:"success",label:"New",size:"sm"})]}),`
`,e.jsx(o.p,{children:"New attribute (optional)."}),`
`,e.jsx(o.p,{children:"You can use this to customize the rendering of some of the select elements."}),`
`,e.jsxs(o.p,{children:[e.jsx(o.code,{children:"color "})," ",e.jsx(s,{color:"critical",label:"Removed",size:"sm"})]}),`
`,e.jsx(o.p,{children:"Has been removed."}),`
`,e.jsx(o.p,{children:"Form components does not provide color variant anymore."}),`
`,e.jsxs(o.p,{children:[e.jsx(o.code,{children:"disabled"})," ",e.jsx(s,{color:"information",label:"Updated",size:"sm"})]}),`
`,e.jsx(o.p,{children:"Has been updated."}),`
`,e.jsxs(o.p,{children:["You can use the new ",e.jsx(o.code,{children:"isDisabled"})," attribute to obtain the same behavior."]}),`
`,e.jsxs(o.p,{children:[e.jsx(o.code,{children:"error"})," ",e.jsx(s,{color:"information",label:"Updated",size:"sm"})]}),`
`,e.jsx(o.p,{children:"Has been updated."}),`
`,e.jsxs(o.p,{children:["You can use the new ",e.jsx(o.code,{children:"hasError"})," attribute to obtain the same behavior."]}),`
`,e.jsxs(o.p,{children:[e.jsx(o.code,{children:"inline"})," ",e.jsx(s,{color:"critical",label:"Removed",size:"sm"})]}),`
`,e.jsx(o.p,{children:"Has been removed."}),`
`,e.jsx(o.p,{children:"Select now always take the size of its container, this ensure consistency between the select control and the option list."}),`
`,e.jsx(o.p,{children:"If you need to set a specific width, you can do by adding a CSS class on the webcomponent directly."}),`
`,e.jsxs(o.p,{children:[e.jsx(o.code,{children:"multipleSelectionLabel"})," ",e.jsx(s,{color:"success",label:"New",size:"sm"})]}),`
`,e.jsx(o.p,{children:"New attribute (optional)."}),`
`,e.jsxs(o.p,{children:[`Define the label displayed before the selection count in the select.
Only relevant if `,e.jsx(o.code,{children:"allowMultiple"})," is set to true."]}),`
`,e.jsxs(o.p,{children:[e.jsx(o.code,{children:"opened "})," ",e.jsx(s,{color:"critical",label:"Removed",size:"sm"})]}),`
`,e.jsx(o.p,{children:"Has been removed."}),`
`,e.jsxs(o.p,{children:["You can use the webcomponent ",e.jsx(o.code,{children:"open"})," / ",e.jsx(o.code,{children:"close"})," method if you need to update the select state programmatically."]}),`
`,e.jsxs(o.p,{children:[e.jsx(o.code,{children:"placeholder"})," ",e.jsx(s,{color:"success",label:"New",size:"sm"})]}),`
`,e.jsx(o.p,{children:"New attribute (optional)."}),`
`,e.jsx(o.p,{children:"Use this if you want to display a placeholder text when no value is yet selected."}),`
`,e.jsxs(o.p,{children:[e.jsx(o.code,{children:"required"})," ",e.jsx(s,{color:"information",label:"Updated",size:"sm"})]}),`
`,e.jsx(o.p,{children:"Has been updated."}),`
`,e.jsxs(o.p,{children:["You can use the new ",e.jsx(o.code,{children:"isRequired"})," attribute to obtain the same behavior."]}),`
`,e.jsxs(o.p,{children:[e.jsx(o.code,{children:"size"})," ",e.jsx(s,{color:"critical",label:"Removed",size:"sm"})]}),`
`,e.jsx(o.p,{children:"Has been removed."}),`
`,e.jsx(o.p,{children:"This attribute was not used, as there was only one single possible value."}),`
`,e.jsx(l,{label:"Migration examples",level:2}),`
`,e.jsx(o.p,{children:"Default select:"}),`
`,e.jsx(t,{code:`
<osds-select>
  <osds-select-option value="fr">France</osds-select-option>
  <osds-select-option value="it">Italy</osds-select-option>
  <osds-select-option value="de">Germany</osds-select-option>
</osds-select>

<!-- is now -->

<ods-select>
  <option value="fr">France</option>
  <option value="it">Italy</option>
  <option value="de">Germany</option>
</ods-select>
`,dark:"true",language:"html"}),`
`,e.jsx(o.p,{children:"Disabled select:"}),`
`,e.jsx(t,{code:`
<osds-select disabled>
  <osds-select-option value="fr">France</osds-select-option>
  <osds-select-option value="it">Italy</osds-select-option>
  <osds-select-option value="de">Germany</osds-select-option>
</osds-select>

<!-- is now -->

<ods-select is-disabled>
  <option value="fr">France</option>
  <option value="it">Italy</option>
  <option value="de">Germany</option>
</ods-select>
`,dark:"true",language:"html"}),`
`,e.jsx(o.p,{children:"Error select:"}),`
`,e.jsx(t,{code:`
<osds-select error>
  <osds-select-option value="fr">France</osds-select-option>
  <osds-select-option value="it">Italy</osds-select-option>
  <osds-select-option value="de">Germany</osds-select-option>
</osds-select>

<!-- is now -->

<ods-select has-error>
  <option value="fr">France</option>
  <option value="it">Italy</option>
  <option value="de">Germany</option>
</ods-select>
`,dark:"true",language:"html"}),`
`,e.jsx(o.p,{children:"Placeholder:"}),`
`,e.jsx(t,{code:`
<osds-select>
  <span slot="placeholder">Select a country</span>
  <osds-select-option value="fr">France</osds-select-option>
  <osds-select-option value="it">Italy</osds-select-option>
  <osds-select-option value="de">Germany</osds-select-option>
</osds-select>

<!-- is now -->

<ods-select placeholder="Select a country">
  <option value="fr">France</option>
  <option value="it">Italy</option>
  <option value="de">Germany</option>
</ods-select>
`,dark:"true",language:"html"}),`
`,e.jsx(o.p,{children:"Optgroup:"}),`
`,e.jsx(t,{code:`
<osds-select>
  <osds-select-group>Europe</osds-select-group>
  <osds-select-option value="fr">France</osds-select-option>
  <osds-select-option value="it">Italy</osds-select-option>
  <osds-select-option value="de">Germany</osds-select-option>
</osds-select>

<!-- is now -->

<ods-select>
  <optgroup label="Europe">
    <option value="fr">France</option>
    <option value="it">Italy</option>
    <option value="de">Germany</option>
  </optgroup>
</ods-select>
`,dark:"true",language:"html"}),`
`,e.jsx(o.p,{children:"Required select:"}),`
`,e.jsx(t,{code:`
<osds-select required>
  <osds-select-option value="fr">France</osds-select-option>
  <osds-select-option value="it">Italy</osds-select-option>
  <osds-select-option value="de">Germany</osds-select-option>
</osds-select>

<!-- is now -->

<ods-select is-required>
  <option value="fr">France</option>
  <option value="it">Italy</option>
  <option value="de">Germany</option>
</ods-select>
`,dark:"true",language:"html"})]})}function ve(n={}){const{wrapper:o}={...r(),...n.components};return o?e.jsx(o,{...n,children:e.jsx(i,{...n})}):i(n)}export{ve as default};
