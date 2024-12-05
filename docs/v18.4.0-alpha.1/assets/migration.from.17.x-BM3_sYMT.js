import{j as e}from"./jsx-runtime-sbaUvk5M.js";import{u as c}from"./index-CGWm3lku.js";import{O as s}from"./index-D7X5WOeG.js";import{M as r,d as t}from"./index-D-G4MXwZ.js";import{S as d}from"./select.stories-B_1zo6GS.js";import{H as l}from"./Heading-1Y93vQ6R.js";import"./iframe-BBvDorMF.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-B_J8iUie.js";import"./index-DX_4BEHg.js";import"./index-DrFu-skq.js";import"./lit-html-D-ZEPr28.js";import"./validityState-ExJ3RVbh.js";import"./controls-D697y8_r.js";import"./index-CveiHl7W.js";function i(n){const o={code:"code",p:"p",...c(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{of:d,name:"Migration From 17.x"}),`
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
`,dark:"true",language:"html"})]})}function z(n={}){const{wrapper:o}={...c(),...n.components};return o?e.jsx(o,{...n,children:e.jsx(i,{...n})}):i(n)}export{z as default};
