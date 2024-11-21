import{j as e}from"./jsx-runtime-vK1CujOl.js";import{u as i}from"./index-CB7mz5IJ.js";import{O as o}from"./index-CONup0N6.js";import{M as t,d}from"./index-Bd2Jnm8T.js";import{P as l}from"./password.stories-D9TGoIdw.js";import{H as r}from"./Heading-oJ6nNH90.js";import"./iframe-Lgv0C8F1.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-B_J8iUie.js";import"./index-DX_4BEHg.js";import"./index-DrFu-skq.js";import"./lit-html-D-ZEPr28.js";import"./controls-DpsgTNdU.js";import"./index-BNPjhb5w.js";function a(n){const s={code:"code",p:"p",...i(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(t,{of:l,name:"Migration From 17.x"}),`
`,e.jsx(r,{label:"Password - migrate from v17 to v18",level:1}),`
`,e.jsx(r,{label:"Attributes changes",level:2}),`
`,e.jsxs(s.p,{children:[e.jsx(s.code,{children:"color "})," ",e.jsx(o,{color:"critical",label:"Removed",size:"sm"})]}),`
`,e.jsx(s.p,{children:"Has been removed."}),`
`,e.jsx(s.p,{children:`Form components do not provide color variants anymore.
You can use custom CSS if you need to customize the component.`}),`
`,e.jsxs(s.p,{children:[e.jsx(s.code,{children:"contrasted"})," ",e.jsx(o,{color:"critical",label:"Removed",size:"sm"})]}),`
`,e.jsx(s.p,{children:"Has been removed."}),`
`,e.jsx(s.p,{children:`Form components do not provide contrasted variants anymore.
You can use custom CSS if you need to customize the component.`}),`
`,e.jsxs(s.p,{children:[e.jsx(s.code,{children:"clearable"})," ",e.jsx(o,{color:"information",label:"Updated",size:"sm"})]}),`
`,e.jsx(s.p,{children:"Has been updated."}),`
`,e.jsxs(s.p,{children:["You can use the new ",e.jsx(s.code,{children:"isClearable"})," attribute to obtain the same behavior."]}),`
`,e.jsxs(s.p,{children:[e.jsx(s.code,{children:"disabled"})," ",e.jsx(o,{color:"information",label:"Updated",size:"sm"})]}),`
`,e.jsx(s.p,{children:"Has been updated."}),`
`,e.jsxs(s.p,{children:["You can use the new ",e.jsx(s.code,{children:"isDisabled"})," attribute to obtain the same behavior."]}),`
`,e.jsxs(s.p,{children:[e.jsx(s.code,{children:"forbidden-values"})," ",e.jsx(o,{color:"critical",label:"Removed",size:"sm"})]}),`
`,e.jsx(s.p,{children:"Has been removed."}),`
`,e.jsxs(s.p,{children:["You can replace it with a regex on the ",e.jsx(s.code,{children:"pattern"})," attributes."]}),`
`,e.jsxs(s.p,{children:[e.jsx(s.code,{children:"label"})," ",e.jsx(o,{color:"critical",label:"Removed",size:"sm"})]}),`
`,e.jsx(s.p,{children:"Has been removed."}),`
`,e.jsxs(s.p,{children:["To add a label on a password component, wrap it within ",e.jsx(s.code,{children:"form-field"})," component."]}),`
`,e.jsxs(s.p,{children:[e.jsx(s.code,{children:"loading"})," ",e.jsx(o,{color:"information",label:"Updated",size:"sm"})]}),`
`,e.jsx(s.p,{children:"Has been updated."}),`
`,e.jsxs(s.p,{children:["You can use the new ",e.jsx(s.code,{children:"isLoading"})," attribute to obtain the same behavior."]}),`
`,e.jsxs(s.p,{children:[e.jsx(s.code,{children:"masked"})," ",e.jsx(o,{color:"information",label:"Updated",size:"sm"})]}),`
`,e.jsx(s.p,{children:"Has been updated."}),`
`,e.jsxs(s.p,{children:["You can use the new ",e.jsx(s.code,{children:"isMasked"})," attribute to obtain the same behavior."]}),`
`,e.jsxs(s.p,{children:[e.jsx(s.code,{children:"error"})," ",e.jsx(o,{color:"information",label:"Updated",size:"sm"})]}),`
`,e.jsx(s.p,{children:"Has been updated."}),`
`,e.jsxs(s.p,{children:["You can use the new ",e.jsx(s.code,{children:"hasError"})," attribute to obtain the same behavior."]}),`
`,e.jsxs(s.p,{children:[e.jsx(s.code,{children:"readonly"})," ",e.jsx(o,{color:"information",label:"Updated",size:"sm"})]}),`
`,e.jsx(s.p,{children:"Has been updated."}),`
`,e.jsxs(s.p,{children:["You can use the new ",e.jsx(s.code,{children:"isReadonly"})," attribute to obtain the same behavior."]}),`
`,e.jsxs(s.p,{children:[e.jsx(s.code,{children:"required"})," ",e.jsx(o,{color:"information",label:"Updated",size:"sm"})]}),`
`,e.jsx(s.p,{children:"Has been updated."}),`
`,e.jsxs(s.p,{children:["You can use the new ",e.jsx(s.code,{children:"isRequired"})," attribute to obtain the same behavior."]}),`
`,e.jsxs(s.p,{children:[e.jsx(s.code,{children:"inline"})," ",e.jsx(o,{color:"critical",label:"Removed",size:"sm"})]}),`
`,e.jsx(s.p,{children:"Has been removed."}),`
`,e.jsxs(s.p,{children:["Password is now ",e.jsx(s.code,{children:"inline-block"}),` by default.
You can add some style directly on the component if you want to override that.`]}),`
`,e.jsxs(s.p,{children:[e.jsx(s.code,{children:"size "})," ",e.jsx(o,{color:"critical",label:"Removed",size:"sm"})]}),`
`,e.jsx(s.p,{children:"Has been removed."}),`
`,e.jsx(s.p,{children:`Form components do not provide size variants anymore.
You can use custom CSS if you need to customize the component.`}),`
`,e.jsx(r,{label:"Migration examples",level:2}),`
`,e.jsx(s.p,{children:"Clearable password:"}),`
`,e.jsx(d,{code:`
<osds-password clearable>
</osds-password>

<!-- is now -->

<ods-password is-clearable>
</ods-password>
`,dark:"true",language:"html"}),`
`,e.jsx(s.p,{children:"Disabled password:"}),`
`,e.jsx(d,{code:`
<osds-password disabled>
</osds-password>

<!-- is now -->

<ods-password is-disabled>
</ods-password>
`,dark:"true",language:"html"}),`
`,e.jsx(s.p,{children:"Error password:"}),`
`,e.jsx(d,{code:`
<osds-password error>
</osds-password>

<!-- is now -->

<ods-password has-error>
</ods-password>
`,dark:"true",language:"html"}),`
`,e.jsx(s.p,{children:"Forbidden values password:"}),`
`,e.jsx(d,{code:`
<osds-password forbidden-values="['1', '2']">
</osds-password>

<!-- is now -->

<ods-password pattern="[^12]+">
</ods-password>
`,dark:"true",language:"html"}),`
`,e.jsx(s.p,{children:"Loading password:"}),`
`,e.jsx(d,{code:`
<osds-password loading>
</osds-password>

<!-- is now -->

<ods-password is-loading>
</ods-password>
`,dark:"true",language:"html"}),`
`,e.jsx(s.p,{children:"Masked password:"}),`
`,e.jsx(d,{code:`
<osds-password masked>
</osds-password>

<!-- is now -->

<ods-password is-masked>
</ods-password>
`,dark:"true",language:"html"}),`
`,e.jsx(s.p,{children:"Readonly password:"}),`
`,e.jsx(d,{code:`
<osds-password readonly>
</osds-password>

<!-- is now -->

<ods-password is-readonly>
</ods-password>
`,dark:"true",language:"html"}),`
`,e.jsx(s.p,{children:"Required password:"}),`
`,e.jsx(d,{code:`
<osds-password required>
</osds-password>

<!-- is now -->

<ods-password is-required>
</ods-password>
`,dark:"true",language:"html"})]})}function k(n={}){const{wrapper:s}={...i(),...n.components};return s?e.jsx(s,{...n,children:e.jsx(a,{...n})}):a(n)}export{k as default};