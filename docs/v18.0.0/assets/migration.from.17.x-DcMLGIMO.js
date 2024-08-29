import{j as e}from"./jsx-runtime-Dn0LW--f.js";import{u as n}from"./index-DeyDdHvX.js";import{M as d}from"./index-BM3JsZOq.js";import{S as c}from"./switch.stories-BX1c7gwa.js";import"./iframe-6_jBXMSq.js";import"../sb-preview/runtime.js";import"./commonjsHelpers-Cpj98o6Y.js";import"./index-B_J8iUie.js";import"./index-DX_4BEHg.js";import"./index-DrFu-skq.js";import"./index-DryTTbHl.js";import"./lit-html-D-ZEPr28.js";import"./control-C1r2wu67.js";import"./unsafe-html-HR6uCwaW.js";function t(i){const s={code:"code",h1:"h1",h2:"h2",h3:"h3",hr:"hr",p:"p",pre:"pre",...n(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(d,{of:c,name:"Migration From 17.x"}),`
`,e.jsx(s.h1,{id:"switch---migrate-from-v17-to-v18",children:"Switch - migrate from v17 to v18"}),`
`,e.jsx(s.hr,{}),`
`,e.jsx(s.h2,{id:"attributes-changes",children:"Attributes changes"}),`
`,e.jsx(s.h3,{id:"switch",children:"Switch"}),`
`,e.jsxs(s.p,{children:[e.jsx(s.code,{children:"color"})," ",e.jsx("ods-badge",{size:"sm",color:"critical",label:"Removed"})]}),`
`,e.jsx(s.p,{children:"Has been removed."}),`
`,e.jsx(s.p,{children:"You can use the style customization to achieve the same result."}),`
`,e.jsxs(s.p,{children:[e.jsx(s.code,{children:"contrasted"})," ",e.jsx("ods-badge",{size:"sm",color:"critical",label:"Removed"})]}),`
`,e.jsx(s.p,{children:"Has been removed."}),`
`,e.jsx(s.p,{children:"You can use the style customization to achieve the same result, until a new color get validated by the design team."}),`
`,e.jsxs(s.p,{children:[e.jsx(s.code,{children:"disabled"})," ",e.jsx("ods-badge",{size:"sm",label:"Updated"})]}),`
`,e.jsx(s.p,{children:"Has been updated."}),`
`,e.jsxs(s.p,{children:["You can use the new ",e.jsx(s.code,{children:"isDisabled"})," attribute to obtain the same behavior."]}),`
`,e.jsx(s.h3,{id:"switch-item",children:"Switch Item"}),`
`,e.jsxs(s.p,{children:[e.jsx(s.code,{children:"checked"})," ",e.jsx("ods-badge",{size:"sm",label:"Updated"})]}),`
`,e.jsx(s.p,{children:"Has been updated."}),`
`,e.jsxs(s.p,{children:["You can use the new ",e.jsx(s.code,{children:"isCheched"})," attribute to obtain the same behavior."]}),`
`,e.jsxs(s.p,{children:[e.jsx(s.code,{children:"id"})," ",e.jsx("ods-badge",{size:"sm",label:"Updated"})]}),`
`,e.jsx(s.p,{children:"Has been updated."}),`
`,e.jsxs(s.p,{children:["You can use the new ",e.jsx(s.code,{children:"inputId"})," attribute to obtain the same behavior."]}),`
`,e.jsx(s.h2,{id:"migration-examples",children:"Migration examples"}),`
`,e.jsx(s.p,{children:"Id switch:"}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-html",children:`<osds-switch-item id="id-1" value="1">Value 1</osds-switch-item>

<!-- is now -->

<osds-switch-item input-id="id-1" value="1">Value 1</osds-switch-item>
`})}),`
`,e.jsx(s.p,{children:"Checked switch:"}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-html",children:`<osds-switch>
  <osds-switch-item checked value="1">Value 1</osds-switch-item>
  <osds-switch-item value="2">Value 2</osds-switch-item>
  <osds-switch-item value="3">Value 3</osds-switch-item>
</osds-switch>

<!-- is now -->

<ods-switch name="checked-group">
  <osds-switch-item is-checked value="1">Value 1</osds-switch-item>
  <osds-switch-item value="2">Value 2</osds-switch-item>
  <osds-switch-item value="3">Value 3</osds-switch-item>
</ods-switch>
`})}),`
`,e.jsx(s.p,{children:"Disabled switch:"}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-html",children:`<osds-switch disabled>
  <osds-switch-item value="1">Value 1</osds-switch-item>
  <osds-switch-item value="2">Value 2</osds-switch-item>
  <osds-switch-item value="3">Value 3</osds-switch-item>
</osds-switch>

<!-- is now -->

<ods-switch is-disabled name="disabled-group">
  <osds-switch-item value="1">Value 1</osds-switch-item>
  <osds-switch-item value="2">Value 2</osds-switch-item>
  <osds-switch-item value="3">Value 3</osds-switch-item>
</ods-switch>
`})})]})}function V(i={}){const{wrapper:s}={...n(),...i.components};return s?e.jsx(s,{...i,children:e.jsx(t,{...i})}):t(i)}export{V as default};
