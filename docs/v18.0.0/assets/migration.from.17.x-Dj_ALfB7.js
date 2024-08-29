import{j as e}from"./jsx-runtime-Dn0LW--f.js";import{u as o}from"./index-DeyDdHvX.js";import{M as r}from"./index-BM3JsZOq.js";import{P as a}from"./password.stories-Czk86kkO.js";import"./iframe-6_jBXMSq.js";import"../sb-preview/runtime.js";import"./commonjsHelpers-Cpj98o6Y.js";import"./index-B_J8iUie.js";import"./index-DX_4BEHg.js";import"./index-DrFu-skq.js";import"./lit-html-D-ZEPr28.js";import"./control-C1r2wu67.js";function d(n){const s={code:"code",h1:"h1",h2:"h2",hr:"hr",p:"p",pre:"pre",...o(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{of:a,name:"Migration From 17.x"}),`
`,e.jsx(s.h1,{id:"password---migrate-from-v17-to-v18",children:"Password - migrate from v17 to v18"}),`
`,e.jsx(s.hr,{}),`
`,e.jsx(s.h2,{id:"attributes-changes",children:"Attributes changes"}),`
`,e.jsxs(s.p,{children:[e.jsx(s.code,{children:"color "})," ",e.jsx("ods-badge",{size:"sm",color:"critical",label:"Removed"})]}),`
`,e.jsx(s.p,{children:"Has been removed."}),`
`,e.jsx(s.p,{children:`Form components do not provide color variants anymore.
You can use custom CSS if you need to customize the component.`}),`
`,e.jsxs(s.p,{children:[e.jsx(s.code,{children:"contrasted"})," ",e.jsx("ods-badge",{size:"sm",color:"critical",label:"Removed"})]}),`
`,e.jsx(s.p,{children:"Has been removed."}),`
`,e.jsx(s.p,{children:`Form components do not provide contrasted variants anymore.
You can use custom CSS if you need to customize the component.`}),`
`,e.jsxs(s.p,{children:[e.jsx(s.code,{children:"clearable"})," ",e.jsx("ods-badge",{size:"sm",label:"Updated"})]}),`
`,e.jsx(s.p,{children:"Has been updated."}),`
`,e.jsxs(s.p,{children:["You can use the new ",e.jsx(s.code,{children:"isClearable"})," attribute to obtain the same behavior."]}),`
`,e.jsxs(s.p,{children:[e.jsx(s.code,{children:"disabled"})," ",e.jsx("ods-badge",{size:"sm",label:"Updated"})]}),`
`,e.jsx(s.p,{children:"Has been updated."}),`
`,e.jsxs(s.p,{children:["You can use the new ",e.jsx(s.code,{children:"isDisabled"})," attribute to obtain the same behavior."]}),`
`,e.jsxs(s.p,{children:[e.jsx(s.code,{children:"forbidden-values"})," ",e.jsx("ods-badge",{size:"sm",color:"critical",label:"Removed"})]}),`
`,e.jsx(s.p,{children:"Has been removed."}),`
`,e.jsxs(s.p,{children:["You can replace it with a regex on the ",e.jsx(s.code,{children:"pattern"})," attributes."]}),`
`,e.jsxs(s.p,{children:[e.jsx(s.code,{children:"label"})," ",e.jsx("ods-badge",{size:"sm",color:"critical",label:"Removed"})]}),`
`,e.jsx(s.p,{children:"Has been removed."}),`
`,e.jsxs(s.p,{children:["To add a label on a password component, wrap it within ",e.jsx(s.code,{children:"form-field"})," component."]}),`
`,e.jsxs(s.p,{children:[e.jsx(s.code,{children:"loading"})," ",e.jsx("ods-badge",{size:"sm",label:"Updated"})]}),`
`,e.jsx(s.p,{children:"Has been updated."}),`
`,e.jsxs(s.p,{children:["You can use the new ",e.jsx(s.code,{children:"isLoading"})," attribute to obtain the same behavior."]}),`
`,e.jsxs(s.p,{children:[e.jsx(s.code,{children:"masked"})," ",e.jsx("ods-badge",{size:"sm",label:"Updated"})]}),`
`,e.jsx(s.p,{children:"Has been updated."}),`
`,e.jsxs(s.p,{children:["You can use the new ",e.jsx(s.code,{children:"isMasked"})," attribute to obtain the same behavior."]}),`
`,e.jsxs(s.p,{children:[e.jsx(s.code,{children:"error"})," ",e.jsx("ods-badge",{size:"sm",label:"Updated"})]}),`
`,e.jsx(s.p,{children:"Has been updated."}),`
`,e.jsxs(s.p,{children:["You can use the new ",e.jsx(s.code,{children:"hasError"})," attribute to obtain the same behavior."]}),`
`,e.jsxs(s.p,{children:[e.jsx(s.code,{children:"readonly"})," ",e.jsx("ods-badge",{size:"sm",label:"Updated"})]}),`
`,e.jsx(s.p,{children:"Has been updated."}),`
`,e.jsxs(s.p,{children:["You can use the new ",e.jsx(s.code,{children:"isReadonly"})," attribute to obtain the same behavior."]}),`
`,e.jsxs(s.p,{children:[e.jsx(s.code,{children:"required"})," ",e.jsx("ods-badge",{size:"sm",label:"Updated"})]}),`
`,e.jsx(s.p,{children:"Has been updated."}),`
`,e.jsxs(s.p,{children:["You can use the new ",e.jsx(s.code,{children:"isRequired"})," attribute to obtain the same behavior."]}),`
`,e.jsxs(s.p,{children:[e.jsx(s.code,{children:"inline"})," ",e.jsx("ods-badge",{size:"sm",color:"critical",label:"Removed"})]}),`
`,e.jsx(s.p,{children:"Has been removed."}),`
`,e.jsxs(s.p,{children:["Password is now ",e.jsx(s.code,{children:"inline-block"}),` by default.
You can add some style directly on the component if you want to override that.`]}),`
`,e.jsxs(s.p,{children:[e.jsx(s.code,{children:"size "})," ",e.jsx("ods-badge",{size:"sm",color:"critical",label:"Removed"})]}),`
`,e.jsx(s.p,{children:"Has been removed."}),`
`,e.jsx(s.p,{children:`Form components do not provide size variants anymore.
You can use custom CSS if you need to customize the component.`}),`
`,e.jsx(s.h2,{id:"migration-examples",children:"Migration examples"}),`
`,e.jsx(s.p,{children:"Clearable password:"}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-html",children:`<osds-password clearable>
</osds-password>

<!-- is now -->

<ods-password is-clearable>
</ods-password>
`})}),`
`,e.jsx(s.p,{children:"Disabled password:"}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-html",children:`<osds-password disabled>
</osds-password>

<!-- is now -->

<ods-password is-disabled>
</ods-password>
`})}),`
`,e.jsx(s.p,{children:"Error password:"}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-html",children:`<osds-password error>
</osds-password>

<!-- is now -->

<ods-password has-error>
</ods-password>
`})}),`
`,e.jsx(s.p,{children:"Forbidden values password:"}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-html",children:`<osds-password forbidden-values="['1', '2']">
</osds-password>

<!-- is now -->

<ods-password pattern="[^12]+">
</ods-password>
`})}),`
`,e.jsx(s.p,{children:"Loading password:"}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-html",children:`<osds-password loading>
</osds-password>

<!-- is now -->

<ods-password is-loading>
</ods-password>
`})}),`
`,e.jsx(s.p,{children:"Masked password:"}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-html",children:`<osds-password masked>
</osds-password>

<!-- is now -->

<ods-password is-masked>
</ods-password>
`})}),`
`,e.jsx(s.p,{children:"Readonly password:"}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-html",children:`<osds-password readonly>
</osds-password>

<!-- is now -->

<ods-password is-readonly>
</ods-password>
`})}),`
`,e.jsx(s.p,{children:"Required password:"}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-html",children:`<osds-password required>
</osds-password>

<!-- is now -->

<ods-password is-required>
</ods-password>
`})})]})}function g(n={}){const{wrapper:s}={...o(),...n.components};return s?e.jsx(s,{...n,children:e.jsx(d,{...n})}):d(n)}export{g as default};
