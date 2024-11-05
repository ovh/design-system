import{j as e}from"./jsx-runtime-Dpy41095.js";import{u as d}from"./index-aTvbjZDn.js";import{O as n}from"./index-CitIr79c.js";import{M as i,d as o}from"./index-KEvLdXFh.js";import{T as l}from"./textarea.stories-Buw5tE4A.js";import{H as a}from"./Heading-Ct5NuNs_.js";import"./iframe-Br9eoVXS.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-B_J8iUie.js";import"./index-DX_4BEHg.js";import"./index-DrFu-skq.js";import"./lit-html-D-ZEPr28.js";import"./controls-DpsgTNdU.js";import"./index-LQAjXuKp.js";function t(r){const s={code:"code",p:"p",...d(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{of:l,name:"Migration From 17.x"}),`
`,e.jsx(a,{label:"Textarea - migrate from v17 to v18",level:1}),`
`,e.jsx(a,{label:"Attributes changes",level:2}),`
`,e.jsxs(s.p,{children:[e.jsx(s.code,{children:"color "})," ",e.jsx(n,{color:"critical",label:"Removed",size:"sm"})]}),`
`,e.jsx(s.p,{children:"Has been removed."}),`
`,e.jsx(s.p,{children:`Form components does not provide color variant anymore.
You can use custom CSS if you need to customize the component.`}),`
`,e.jsxs(s.p,{children:[e.jsx(s.code,{children:"contrasted"})," ",e.jsx(n,{color:"critical",label:"Removed",size:"sm"})]}),`
`,e.jsx(s.p,{children:"Has been removed."}),`
`,e.jsx(s.p,{children:`Form components does not provide color variant anymore.
You can use custom CSS if you need to customize the component.`}),`
`,e.jsxs(s.p,{children:[e.jsx(s.code,{children:"disabled"})," ",e.jsx(n,{color:"information",label:"Updated",size:"sm"})]}),`
`,e.jsx(s.p,{children:"Has been updated."}),`
`,e.jsxs(s.p,{children:["You can use the new ",e.jsx(s.code,{children:"isDisabled"})," attribute to obtain the same behavior."]}),`
`,e.jsxs(s.p,{children:[e.jsx(s.code,{children:"error"})," ",e.jsx(n,{color:"information",label:"Updated",size:"sm"})]}),`
`,e.jsx(s.p,{children:"Has been updated."}),`
`,e.jsxs(s.p,{children:["You can use the new ",e.jsx(s.code,{children:"hasError"})," attribute to obtain the same behavior."]}),`
`,e.jsxs(s.p,{children:[e.jsx(s.code,{children:"errorStateControl"})," ",e.jsx(n,{color:"critical",label:"Removed",size:"sm"})]}),`
`,e.jsx(s.p,{children:"Has been removed."}),`
`,e.jsx(s.p,{children:"Was not relevant for few versions already."}),`
`,e.jsxs(s.p,{children:[e.jsx(s.code,{children:"formControl"})," ",e.jsx(n,{color:"critical",label:"Removed",size:"sm"})]}),`
`,e.jsx(s.p,{children:"Has been removed."}),`
`,e.jsx(s.p,{children:"Was not relevant for few versions already."}),`
`,e.jsxs(s.p,{children:[e.jsx(s.code,{children:"inline"})," ",e.jsx(n,{color:"critical",label:"Removed",size:"sm"})]}),`
`,e.jsx(s.p,{children:"Has been removed."}),`
`,e.jsxs(s.p,{children:["Textarea is now ",e.jsx(s.code,{children:"inline-block"}),` by default.
You can add some style directly on the component if you want to override that.`]}),`
`,e.jsxs(s.p,{children:[e.jsx(s.code,{children:"readonly"})," ",e.jsx(n,{color:"information",label:"Updated",size:"sm"})]}),`
`,e.jsx(s.p,{children:"Has been updated."}),`
`,e.jsxs(s.p,{children:["You can use the new ",e.jsx(s.code,{children:"isReadonly"})," attribute to obtain the same behavior."]}),`
`,e.jsxs(s.p,{children:[e.jsx(s.code,{children:"required"})," ",e.jsx(n,{color:"information",label:"Updated",size:"sm"})]}),`
`,e.jsx(s.p,{children:"Has been updated."}),`
`,e.jsxs(s.p,{children:["You can use the new ",e.jsx(s.code,{children:"isRequired"})," attribute to obtain the same behavior."]}),`
`,e.jsxs(s.p,{children:[e.jsx(s.code,{children:"resizable"})," ",e.jsx(n,{color:"information",label:"Updated",size:"sm"})]}),`
`,e.jsx(s.p,{children:"Has been updated."}),`
`,e.jsxs(s.p,{children:["You can use the new ",e.jsx(s.code,{children:"isResizable"})," attribute to obtain the same behavior."]}),`
`,e.jsxs(s.p,{children:[e.jsx(s.code,{children:"size "})," ",e.jsx(n,{color:"critical",label:"Removed",size:"sm"})]}),`
`,e.jsx(s.p,{children:"Has been removed."}),`
`,e.jsx(s.p,{children:`Form components does not provide size variant anymore.
You can use custom CSS if you need to customize the component.`}),`
`,e.jsxs(s.p,{children:[e.jsx(s.code,{children:"spellcheck"})," ",e.jsx(n,{color:"information",label:"Updated",size:"sm"})]}),`
`,e.jsx(s.p,{children:"Has been updated."}),`
`,e.jsxs(s.p,{children:["You can use the new ",e.jsx(s.code,{children:"hasSpellcheck"})," attribute to obtain the same behavior."]}),`
`,e.jsxs(s.p,{children:[e.jsx(s.code,{children:"textAreaId "})," ",e.jsx(n,{color:"critical",label:"Removed",size:"sm"})]}),`
`,e.jsx(s.p,{children:"Has been removed."}),`
`,e.jsx(s.p,{children:"This was used to manage a default aria value which is not set by default."}),`
`,e.jsx(a,{label:"Migration examples",level:2}),`
`,e.jsx(s.p,{children:"Disabled textarea:"}),`
`,e.jsx(o,{code:`
<osds-textarea disabled>
</osds-textarea>

<!-- is now -->

<ods-textarea is-disabled>
</ods-textarea>
`,dark:"true",language:"html"}),`
`,e.jsx(s.p,{children:"Error textarea:"}),`
`,e.jsx(o,{code:`
<osds-textarea error>
</osds-textarea>

<!-- is now -->

<ods-textarea has-error>
</ods-textarea>
`,dark:"true",language:"html"}),`
`,e.jsx(s.p,{children:"Inline textarea:"}),`
`,e.jsx(o,{code:`
<osds-textarea inline>
</osds-textarea>

<!-- is now -->

<ods-textarea>
</ods-textarea>
`,dark:"true",language:"html"}),`
`,e.jsx(s.p,{children:"Readonly textarea:"}),`
`,e.jsx(o,{code:`
<osds-textarea readonly>
</osds-textarea>

<!-- is now -->

<ods-textarea is-readonly>
</ods-textarea>
`,dark:"true",language:"html"}),`
`,e.jsx(s.p,{children:"Required textarea:"}),`
`,e.jsx(o,{code:`
<osds-textarea required>
</osds-textarea>

<!-- is now -->

<ods-textarea is-required>
</ods-textarea>
`,dark:"true",language:"html"}),`
`,e.jsx(s.p,{children:"Resizable textarea:"}),`
`,e.jsx(o,{code:`
<osds-textarea resizable>
</osds-textarea>

<!-- is now -->

<ods-textarea is-resizable>
</ods-textarea>
`,dark:"true",language:"html"}),`
`,e.jsx(s.p,{children:"Spellcheck textarea:"}),`
`,e.jsx(o,{code:`
<osds-textarea spellcheck>
</osds-textarea>

<!-- is now -->

<ods-textarea has-spellcheck>
</ods-textarea>
`,dark:"true",language:"html"})]})}function R(r={}){const{wrapper:s}={...d(),...r.components};return s?e.jsx(s,{...r,children:e.jsx(t,{...r})}):t(r)}export{R as default};
