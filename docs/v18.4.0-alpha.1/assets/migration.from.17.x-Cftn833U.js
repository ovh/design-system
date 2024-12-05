import{j as e}from"./jsx-runtime-sbaUvk5M.js";import{u as r}from"./index-CGWm3lku.js";import{O as s}from"./index-D7X5WOeG.js";import{M as l,d as i}from"./index-D-G4MXwZ.js";import{I as a}from"./input.stories-C5CD2-js.js";import{H as o}from"./Heading-1Y93vQ6R.js";import"./iframe-BBvDorMF.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-B_J8iUie.js";import"./index-DX_4BEHg.js";import"./index-DrFu-skq.js";import"./index-CveiHl7W.js";import"./lit-html-D-ZEPr28.js";import"./validityState-ExJ3RVbh.js";import"./controls-D697y8_r.js";function d(t){const n={code:"code",p:"p",...r(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{of:a,name:"Migration From 17.x"}),`
`,e.jsx(o,{label:"Input - migrate from v17 to v18",level:1}),`
`,e.jsx(o,{label:"Attributes changes",level:2}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"clearable"})," ",e.jsx(s,{color:"information",label:"Updated",size:"sm"})]}),`
`,e.jsx(n.p,{children:"Has been updated."}),`
`,e.jsxs(n.p,{children:["You can use the new ",e.jsx(n.code,{children:"isClearable"})," attribute to obtain the same behavior."]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"disabled"})," ",e.jsx(s,{color:"information",label:"Updated",size:"sm"})]}),`
`,e.jsx(n.p,{children:"Has been updated."}),`
`,e.jsxs(n.p,{children:["You can use the new ",e.jsx(n.code,{children:"isDisabled"})," attribute to obtain the same behavior."]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"loading"})," ",e.jsx(s,{color:"information",label:"Updated",size:"sm"})]}),`
`,e.jsx(n.p,{children:"Has been updated."}),`
`,e.jsxs(n.p,{children:["You can use the new ",e.jsx(n.code,{children:"isLoading"})," attribute to obtain the same behavior."]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"masked"})," ",e.jsx(s,{color:"information",label:"Updated",size:"sm"})]}),`
`,e.jsx(n.p,{children:"Has been updated."}),`
`,e.jsxs(n.p,{children:["You can use the new ",e.jsx(n.code,{children:"isMasked"})," attribute to obtain the same behavior."]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"error"})," ",e.jsx(s,{color:"information",label:"Updated",size:"sm"})]}),`
`,e.jsx(n.p,{children:"Has been updated."}),`
`,e.jsxs(n.p,{children:["You can use the new ",e.jsx(n.code,{children:"hasError"})," attribute to obtain the same behavior."]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"readonly"})," ",e.jsx(s,{color:"information",label:"Updated",size:"sm"})]}),`
`,e.jsx(n.p,{children:"Has been updated."}),`
`,e.jsxs(n.p,{children:["You can use the new ",e.jsx(n.code,{children:"isReadonly"})," attribute to obtain the same behavior."]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"required"})," ",e.jsx(s,{color:"information",label:"Updated",size:"sm"})]}),`
`,e.jsx(n.p,{children:"Has been updated."}),`
`,e.jsxs(n.p,{children:["You can use the new ",e.jsx(n.code,{children:"isRequired"})," attribute to obtain the same behavior."]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"forbidden-values"})," ",e.jsx(s,{color:"critical",label:"Removed",size:"sm"})]}),`
`,e.jsx(n.p,{children:"Has been removed."}),`
`,e.jsxs(n.p,{children:["You can replace it with a regex on the ",e.jsx(n.code,{children:"pattern"})," attributes."]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"inline"})," ",e.jsx(s,{color:"critical",label:"Removed",size:"sm"})]}),`
`,e.jsx(n.p,{children:"Has been removed."}),`
`,e.jsxs(n.p,{children:["Input is now ",e.jsx(n.code,{children:"inline-block"}),` by default.
You can add some style directly on the component if you want to override that.`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"label"})," ",e.jsx(s,{color:"critical",label:"Removed",size:"sm"})]}),`
`,e.jsx(n.p,{children:"Has been removed."}),`
`,e.jsxs(n.p,{children:["To add a label on the input wrapped it with the component ",e.jsx(n.code,{children:"form-field"}),"."]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"prefix-value"})," ",e.jsx(s,{color:"critical",label:"Removed",size:"sm"})]}),`
`,e.jsx(n.p,{children:"Have been removed."}),`
`,e.jsx(n.p,{children:"This feature is not supported anymore"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"maxlength"})," ",e.jsx(s,{color:"success",label:"New",size:"sm"})]}),`
`,e.jsx(n.p,{children:"New attribute (optional)."}),`
`,e.jsx(n.p,{children:"Defines the maximum string length that the user can enter into the input."}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"minlength"})," ",e.jsx(s,{color:"success",label:"New",size:"sm"})]}),`
`,e.jsx(n.p,{children:"New attribute (optional)."}),`
`,e.jsx(n.p,{children:"Defines the minimum string length that the user can enter into the input."}),`
`,e.jsx(o,{label:"Migration examples",level:2}),`
`,e.jsx(n.p,{children:"Clearable input:"}),`
`,e.jsx(i,{code:`
<osds-input clearable>
</osds-input>

<!-- is now -->

<ods-input is-clearable>
</ods-input>
`,dark:"true",language:"html"}),`
`,e.jsx(n.p,{children:"Disabled input:"}),`
`,e.jsx(i,{code:`
<osds-input disabled>
</osds-input>

<!-- is now -->

<ods-input is-disabled>
</ods-input>
`,dark:"true",language:"html"}),`
`,e.jsx(n.p,{children:"Error input:"}),`
`,e.jsx(i,{code:`
<osds-input error>
</osds-input>

<!-- is now -->

<ods-input has-error>
</ods-input>
`,dark:"true",language:"html"}),`
`,e.jsx(n.p,{children:"Loading input:"}),`
`,e.jsx(i,{code:`
<osds-input loading>
</osds-input>

<!-- is now -->

<ods-input is-loading>
</ods-input>
`,dark:"true",language:"html"}),`
`,e.jsx(n.p,{children:"Masked input:"}),`
`,e.jsx(i,{code:`
<osds-input masked>
</osds-input>

<!-- is now -->

<ods-input is-masked>
</ods-input>
`,dark:"true",language:"html"}),`
`,e.jsx(n.p,{children:"Readonly input:"}),`
`,e.jsx(i,{code:`
<osds-input readonly>
</osds-input>

<!-- is now -->

<ods-input is-readonly>
</ods-input>
`,dark:"true",language:"html"}),`
`,e.jsx(n.p,{children:"Required input:"}),`
`,e.jsx(i,{code:`
<osds-input required>
</osds-input>

<!-- is now -->

<ods-input is-required>
</ods-input>
`,dark:"true",language:"html"}),`
`,e.jsx(n.p,{children:"Forbidden values input:"}),`
`,e.jsx(i,{code:`
<osds-input forbidden-values="['1', '2']">
</osds-input>

<!-- is now -->

<ods-input pattern="[^12]+">
</ods-input>
`,dark:"true",language:"html"}),`
`,e.jsx(n.p,{children:"Inline input:"}),`
`,e.jsx(i,{code:`
<osds-input inline>
</osds-input>

<!-- is now -->

<ods-input>
</ods-input>
`,dark:"true",language:"html"}),`
`,e.jsx(n.p,{children:"Label input:"}),`
`,e.jsx(i,{code:`
<osds-input label="My label">
</osds-input>

<!-- is now -->
<ods-form-field>
  <label slot='label'>My label</label>
  <ods-input type='text' value='Input'></ods-input>
</ods-form-field>
`,dark:"true",language:"html"})]})}function M(t={}){const{wrapper:n}={...r(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(d,{...t})}):d(t)}export{M as default};
