import{j as e}from"./jsx-runtime-Dn0LW--f.js";import{u as t}from"./index-DeyDdHvX.js";import{M as l}from"./index-BM3JsZOq.js";import{S as i}from"./select.stories-BWQe2xM0.js";import"./iframe-6_jBXMSq.js";import"../sb-preview/runtime.js";import"./commonjsHelpers-Cpj98o6Y.js";import"./index-B_J8iUie.js";import"./index-DX_4BEHg.js";import"./index-DrFu-skq.js";import"./lit-html-D-ZEPr28.js";import"./control-C1r2wu67.js";function n(o){const s={a:"a",code:"code",h1:"h1",h2:"h2",hr:"hr",p:"p",pre:"pre",...t(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{of:i,name:"Migration From 17.x"}),`
`,e.jsx(s.h1,{id:"select---migrate-from-v17-to-v18",children:"Select - migrate from v17 to v18"}),`
`,e.jsx(s.hr,{}),`
`,e.jsx(s.h2,{id:"usage-changes",children:"Usage changes"}),`
`,e.jsxs(s.p,{children:["Select component has been entirely reworked, there is now only one component ",e.jsx(s.code,{children:"ods-select"}),`
(no more `,e.jsx(s.code,{children:"osds-select-option"})," and ",e.jsx(s.code,{children:"osds-select-group"}),")."]}),`
`,e.jsxs(s.p,{children:["This component expects the same native children as a classic ",e.jsx(s.code,{children:"select"})," element (option, optgroup)."]}),`
`,e.jsx(s.p,{children:"Here is an example of the previous declaration:"}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-html",children:`<osds-select>
  <span slot="placeholder">Select a country</span>
  <osds-select-group>Europe</osds-select-group>
  <osds-select-option value="fr">France</osds-select-option>
  <osds-select-option value="it">Italy</osds-select-option>
  <osds-select-option value="de">Germany</osds-select-option>
</osds-select>
`})}),`
`,e.jsx(s.p,{children:"The same result would now be achieved using:"}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-html",children:`<ods-select placeholder="Select a country">
  <optgroup label="Europe">
    <option value="fr">France</option>
    <option value="it">Italy</option>
    <option value="de">Germany</option>
  </optgroup>
</ods-select>
`})}),`
`,e.jsx(s.h2,{id:"attributes-changes",children:"Attributes changes"}),`
`,e.jsxs(s.p,{children:[e.jsx(s.code,{children:"allowMultiple"})," ",e.jsx("ods-badge",{size:"sm",color:"success",label:"New"})]}),`
`,e.jsx(s.p,{children:"New attribute (optional)."}),`
`,e.jsx(s.p,{children:"Set this to true to allow multiple selection in the select."}),`
`,e.jsxs(s.p,{children:[e.jsx(s.code,{children:"customRenderer"})," ",e.jsx("ods-badge",{size:"sm",color:"success",label:"New"})]}),`
`,e.jsx(s.p,{children:"New attribute (optional)."}),`
`,e.jsx(s.p,{children:"You can use this to customize the rendering of some of the select elements."}),`
`,e.jsxs(s.p,{children:["See ",e.jsx(s.a,{href:"?path=/docs/ods-components-form-elements-select--documentation#custom-renderer",children:"this example"})," for more details."]}),`
`,e.jsxs(s.p,{children:[e.jsx(s.code,{children:"color "})," ",e.jsx("ods-badge",{size:"sm",color:"critical",label:"Removed"})]}),`
`,e.jsx(s.p,{children:"Has been removed."}),`
`,e.jsx(s.p,{children:"Form components does not provide color variant anymore."}),`
`,e.jsxs(s.p,{children:[e.jsx(s.code,{children:"disabled"})," ",e.jsx("ods-badge",{size:"sm",label:"Updated"})]}),`
`,e.jsx(s.p,{children:"Has been updated."}),`
`,e.jsxs(s.p,{children:["You can use the new ",e.jsx(s.code,{children:"isDisabled"})," attribute to obtain the same behavior."]}),`
`,e.jsxs(s.p,{children:[e.jsx(s.code,{children:"error"})," ",e.jsx("ods-badge",{size:"sm",label:"Updated"})]}),`
`,e.jsx(s.p,{children:"Has been updated."}),`
`,e.jsxs(s.p,{children:["You can use the new ",e.jsx(s.code,{children:"hasError"})," attribute to obtain the same behavior."]}),`
`,e.jsxs(s.p,{children:[e.jsx(s.code,{children:"inline"})," ",e.jsx("ods-badge",{size:"sm",color:"critical",label:"Removed"})]}),`
`,e.jsx(s.p,{children:"Has been removed."}),`
`,e.jsx(s.p,{children:"Select now always take the size of its container, this ensure consistency between the select control and the option list."}),`
`,e.jsxs(s.p,{children:["If you need to set a specific width, you can do by adding a CSS class on the webcomponent directly (see ",e.jsx(s.a,{href:"?path=/docs/ods-components-form-elements-select--documentation#style-customization",children:"this example"}),")"]}),`
`,e.jsxs(s.p,{children:[e.jsx(s.code,{children:"multipleSelectionLabel"})," ",e.jsx("ods-badge",{size:"sm",color:"success",label:"New"})]}),`
`,e.jsx(s.p,{children:"New attribute (optional)."}),`
`,e.jsxs(s.p,{children:[`Define the label displayed before the selection count in the select.
Only relevant if `,e.jsx(s.code,{children:"allowMultiple"})," is set to true."]}),`
`,e.jsxs(s.p,{children:[e.jsx(s.code,{children:"opened "})," ",e.jsx("ods-badge",{size:"sm",color:"critical",label:"Removed"})]}),`
`,e.jsx(s.p,{children:"Has been removed."}),`
`,e.jsxs(s.p,{children:["You can use the webcomponent ",e.jsx(s.code,{children:"open"})," / ",e.jsx(s.code,{children:"close"})," method if you need to update the select state programmatically."]}),`
`,e.jsxs(s.p,{children:[e.jsx(s.code,{children:"placeholder"})," ",e.jsx("ods-badge",{size:"sm",color:"success",label:"New"})]}),`
`,e.jsx(s.p,{children:"New attribute (optional)."}),`
`,e.jsx(s.p,{children:"Use this if you want to display a placeholder text when no value is yet selected."}),`
`,e.jsxs(s.p,{children:[e.jsx(s.code,{children:"required"})," ",e.jsx("ods-badge",{size:"sm",label:"Updated"})]}),`
`,e.jsx(s.p,{children:"Has been updated."}),`
`,e.jsxs(s.p,{children:["You can use the new ",e.jsx(s.code,{children:"isRequired"})," attribute to obtain the same behavior."]}),`
`,e.jsxs(s.p,{children:[e.jsx(s.code,{children:"size"})," ",e.jsx("ods-badge",{size:"sm",color:"critical",label:"Removed"})]}),`
`,e.jsx(s.p,{children:"Has been removed."}),`
`,e.jsx(s.p,{children:"This attribute was not used, as there was only one single possible value."}),`
`,e.jsx(s.h2,{id:"migration-examples",children:"Migration examples"}),`
`,e.jsx(s.p,{children:"Default select:"}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-html",children:`<osds-select>
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
`})}),`
`,e.jsx(s.p,{children:"Disabled select:"}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-html",children:`<osds-select disabled>
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
`})}),`
`,e.jsx(s.p,{children:"Error select:"}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-html",children:`<osds-select error>
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
`})}),`
`,e.jsx(s.p,{children:"Placeholder:"}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-html",children:`<osds-select>
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
`})}),`
`,e.jsx(s.p,{children:"Optgroup:"}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-html",children:`<osds-select>
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
`})}),`
`,e.jsx(s.p,{children:"Required select:"}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-html",children:`<osds-select required>
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
`})})]})}function g(o={}){const{wrapper:s}={...t(),...o.components};return s?e.jsx(s,{...o,children:e.jsx(n,{...o})}):n(o)}export{g as default};
