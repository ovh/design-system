import{j as e}from"./jsx-runtime-Cz3huCOb.js";import{u as a}from"./index-BRdWgBGF.js";import{O as t}from"./index-BYszAjkJ.js";import{M as n,d}from"./index-C7ZQW9Xo.js";import{S as l}from"./switch.stories-kSssYSW_.js";import{H as o}from"./Heading-BWgLZzFp.js";import"./iframe-O-MMI8BM.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-B_J8iUie.js";import"./index-DX_4BEHg.js";import"./index-DrFu-skq.js";import"./index-D19O3a7h.js";import"./lit-html-D-ZEPr28.js";import"./validityState-ExJ3RVbh.js";import"./controls-D697y8_r.js";function c(i){const s={code:"code",p:"p",...a(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(n,{of:l,name:"Migration From 17.x"}),`
`,e.jsx(o,{label:"Switch - migrate from v17 to v18",level:1}),`
`,e.jsx(o,{label:"Attributes changes",level:2}),`
`,e.jsx(o,{label:"Switch",level:3}),`
`,e.jsxs(s.p,{children:[e.jsx(s.code,{children:"color"})," ",e.jsx(t,{color:"critical",label:"Removed",size:"sm"})]}),`
`,e.jsx(s.p,{children:"Has been removed."}),`
`,e.jsx(s.p,{children:"You can use the style customization to achieve the same result."}),`
`,e.jsxs(s.p,{children:[e.jsx(s.code,{children:"contrasted"})," ",e.jsx(t,{color:"critical",label:"Removed",size:"sm"})]}),`
`,e.jsx(s.p,{children:"Has been removed."}),`
`,e.jsx(s.p,{children:"You can use the style customization to achieve the same result, until a new color get validated by the design team."}),`
`,e.jsxs(s.p,{children:[e.jsx(s.code,{children:"disabled"})," ",e.jsx(t,{color:"information",label:"Updated",size:"sm"})]}),`
`,e.jsx(s.p,{children:"Has been updated."}),`
`,e.jsxs(s.p,{children:["You can use the new ",e.jsx(s.code,{children:"isDisabled"})," attribute to obtain the same behavior."]}),`
`,e.jsx(o,{label:"Switch Item",level:3}),`
`,e.jsxs(s.p,{children:[e.jsx(s.code,{children:"checked"})," ",e.jsx(t,{color:"information",label:"Updated",size:"sm"})]}),`
`,e.jsx(s.p,{children:"Has been updated."}),`
`,e.jsxs(s.p,{children:["You can use the new ",e.jsx(s.code,{children:"isChecked"})," attribute to obtain the same behavior."]}),`
`,e.jsxs(s.p,{children:[e.jsx(s.code,{children:"id"})," ",e.jsx(t,{color:"information",label:"Updated",size:"sm"})]}),`
`,e.jsx(s.p,{children:"Has been updated."}),`
`,e.jsxs(s.p,{children:["You can use the new ",e.jsx(s.code,{children:"inputId"})," attribute to obtain the same behavior."]}),`
`,e.jsx(o,{label:"Migration examples",level:2}),`
`,e.jsx(s.p,{children:"Id switch:"}),`
`,e.jsx(d,{code:`
<osds-switch-item id="id-1" value="1">Value 1</osds-switch-item>

<!-- is now -->

<ods-switch-item input-id="id-1" value="1">Value 1</ods-switch-item>
`,dark:"true",language:"html"}),`
`,e.jsx(s.p,{children:"Checked switch:"}),`
`,e.jsx(d,{code:`
<osds-switch>
  <osds-switch-item checked value="1">Value 1</osds-switch-item>
  <osds-switch-item value="2">Value 2</osds-switch-item>
  <osds-switch-item value="3">Value 3</osds-switch-item>
</osds-switch>

<!-- is now -->

<ods-switch name="checked-group">
  <ods-switch-item is-checked value="1">Value 1</ods-switch-item>
  <ods-switch-item value="2">Value 2</ods-switch-item>
  <ods-switch-item value="3">Value 3</ods-switch-item>
</ods-switch>
`,dark:"true",language:"html"}),`
`,e.jsx(s.p,{children:"Disabled switch:"}),`
`,e.jsx(d,{code:`
<osds-switch disabled>
  <osds-switch-item value="1">Value 1</osds-switch-item>
  <osds-switch-item value="2">Value 2</osds-switch-item>
  <osds-switch-item value="3">Value 3</osds-switch-item>
</osds-switch>

<!-- is now -->

<ods-switch is-disabled name="disabled-group">
  <ods-switch-item value="1">Value 1</ods-switch-item>
  <ods-switch-item value="2">Value 2</ods-switch-item>
  <ods-switch-item value="3">Value 3</ods-switch-item>
</ods-switch>
`,dark:"true",language:"html"})]})}function H(i={}){const{wrapper:s}={...a(),...i.components};return s?e.jsx(s,{...i,children:e.jsx(c,{...i})}):c(i)}export{H as default};
