import{j as e}from"./jsx-runtime-BSm7YJ_y.js";import{useMDXComponents as i}from"./index-CUkz9CBV.js";import{o as n}from"./ods-react-CYmC8DRO.js";import{M as d,S as r}from"./index-Ad1vjMe7.js";import{T as c}from"./textarea.stories-DKsSUncl.js";import{H as t}from"./Heading-RrL0wZ2g.js";import"./index-E9JSHJbc.js";import"./iframe-ZxD9YLZr.js";import"./index-DOJIDNlS.js";import"./index-DZAg5o-f.js";import"./index-CXQShRbs.js";import"./index-DrFu-skq.js";import"./OdsTextarea-0yUmkQgv.js";import"./controls-CQ2mnOwv.js";import"./index-BDDKzIGc.js";import"./OdsText-CkwfP8Kl.js";function a(o){const s={code:"code",p:"p",...i(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(d,{of:c,name:"Migration From 17.x"}),`
`,e.jsx(t,{label:"Textarea - migrate from v17 to v18",level:1}),`
`,e.jsx(t,{label:"Attributes changes",level:2}),`
`,e.jsxs(s.p,{children:[e.jsx(s.code,{children:"color "})," ",e.jsx(n,{color:"critical",size:"sm",children:"Removed"})]}),`
`,e.jsx(s.p,{children:"Has been removed."}),`
`,e.jsx(s.p,{children:`Form components does not provide color variant anymore.
You can use custom CSS if you need to customize the component.`}),`
`,e.jsxs(s.p,{children:[e.jsx(s.code,{children:"contrasted"})," ",e.jsx(n,{color:"critical",size:"sm",children:"Removed"})]}),`
`,e.jsx(s.p,{children:"Has been removed."}),`
`,e.jsx(s.p,{children:`Form components does not provide color variant anymore.
You can use custom CSS if you need to customize the component.`}),`
`,e.jsxs(s.p,{children:[e.jsx(s.code,{children:"disabled"})," ",e.jsx(n,{color:"information",size:"sm",children:"Updated"})]}),`
`,e.jsx(s.p,{children:"Has been updated."}),`
`,e.jsxs(s.p,{children:["You can use the new ",e.jsx(s.code,{children:"isDisabled"})," attribute to obtain the same behavior."]}),`
`,e.jsxs(s.p,{children:[e.jsx(s.code,{children:"error"})," ",e.jsx(n,{color:"information",size:"sm",children:"Updated"})]}),`
`,e.jsx(s.p,{children:"Has been updated."}),`
`,e.jsxs(s.p,{children:["You can use the new ",e.jsx(s.code,{children:"hasError"})," attribute to obtain the same behavior."]}),`
`,e.jsxs(s.p,{children:[e.jsx(s.code,{children:"errorStateControl"})," ",e.jsx(n,{color:"critical",size:"sm",children:"Removed"})]}),`
`,e.jsx(s.p,{children:"Has been removed."}),`
`,e.jsx(s.p,{children:"Was not relevant for few versions already."}),`
`,e.jsxs(s.p,{children:[e.jsx(s.code,{children:"formControl"})," ",e.jsx(n,{color:"critical",size:"sm",children:"Removed"})]}),`
`,e.jsx(s.p,{children:"Has been removed."}),`
`,e.jsx(s.p,{children:"Was not relevant for few versions already."}),`
`,e.jsxs(s.p,{children:[e.jsx(s.code,{children:"inline"})," ",e.jsx(n,{color:"critical",size:"sm",children:"Removed"})]}),`
`,e.jsx(s.p,{children:"Has been removed."}),`
`,e.jsxs(s.p,{children:["Textarea is now ",e.jsx(s.code,{children:"inline-block"}),` by default.
You can add some style directly on the component if you want to override that.`]}),`
`,e.jsxs(s.p,{children:[e.jsx(s.code,{children:"readonly"})," ",e.jsx(n,{color:"information",size:"sm",children:"Updated"})]}),`
`,e.jsx(s.p,{children:"Has been updated."}),`
`,e.jsxs(s.p,{children:["You can use the new ",e.jsx(s.code,{children:"isReadonly"})," attribute to obtain the same behavior."]}),`
`,e.jsxs(s.p,{children:[e.jsx(s.code,{children:"required"})," ",e.jsx(n,{color:"information",size:"sm",children:"Updated"})]}),`
`,e.jsx(s.p,{children:"Has been updated."}),`
`,e.jsxs(s.p,{children:["You can use the new ",e.jsx(s.code,{children:"isRequired"})," attribute to obtain the same behavior."]}),`
`,e.jsxs(s.p,{children:[e.jsx(s.code,{children:"resizable"})," ",e.jsx(n,{color:"information",size:"sm",children:"Updated"})]}),`
`,e.jsx(s.p,{children:"Has been updated."}),`
`,e.jsxs(s.p,{children:["You can use the new ",e.jsx(s.code,{children:"isResizable"})," attribute to obtain the same behavior."]}),`
`,e.jsxs(s.p,{children:[e.jsx(s.code,{children:"size "})," ",e.jsx(n,{color:"critical",size:"sm",children:"Removed"})]}),`
`,e.jsx(s.p,{children:"Has been removed."}),`
`,e.jsx(s.p,{children:`Form components does not provide size variant anymore.
You can use custom CSS if you need to customize the component.`}),`
`,e.jsxs(s.p,{children:[e.jsx(s.code,{children:"spellcheck"})," ",e.jsx(n,{color:"information",size:"sm",children:"Updated"})]}),`
`,e.jsx(s.p,{children:"Has been updated."}),`
`,e.jsxs(s.p,{children:["You can use the new ",e.jsx(s.code,{children:"hasSpellcheck"})," attribute to obtain the same behavior."]}),`
`,e.jsxs(s.p,{children:[e.jsx(s.code,{children:"textAreaId "})," ",e.jsx(n,{color:"critical",size:"sm",children:"Removed"})]}),`
`,e.jsx(s.p,{children:"Has been removed."}),`
`,e.jsx(s.p,{children:"This was used to manage a default aria value which is not set by default."}),`
`,e.jsx(t,{label:"Migration examples",level:2}),`
`,e.jsx(s.p,{children:"Disabled textarea:"}),`
`,e.jsx(r,{code:`
<osds-textarea disabled>
</osds-textarea>

<!-- is now -->

<ods-textarea is-disabled>
</ods-textarea>
`,dark:"true",language:"html"}),`
`,e.jsx(s.p,{children:"Error textarea:"}),`
`,e.jsx(r,{code:`
<osds-textarea error>
</osds-textarea>

<!-- is now -->

<ods-textarea has-error>
</ods-textarea>
`,dark:"true",language:"html"}),`
`,e.jsx(s.p,{children:"Inline textarea:"}),`
`,e.jsx(r,{code:`
<osds-textarea inline>
</osds-textarea>

<!-- is now -->

<ods-textarea>
</ods-textarea>
`,dark:"true",language:"html"}),`
`,e.jsx(s.p,{children:"Readonly textarea:"}),`
`,e.jsx(r,{code:`
<osds-textarea readonly>
</osds-textarea>

<!-- is now -->

<ods-textarea is-readonly>
</ods-textarea>
`,dark:"true",language:"html"}),`
`,e.jsx(s.p,{children:"Required textarea:"}),`
`,e.jsx(r,{code:`
<osds-textarea required>
</osds-textarea>

<!-- is now -->

<ods-textarea is-required>
</ods-textarea>
`,dark:"true",language:"html"}),`
`,e.jsx(s.p,{children:"Resizable textarea:"}),`
`,e.jsx(r,{code:`
<osds-textarea resizable>
</osds-textarea>

<!-- is now -->

<ods-textarea is-resizable>
</ods-textarea>
`,dark:"true",language:"html"}),`
`,e.jsx(s.p,{children:"Spellcheck textarea:"}),`
`,e.jsx(r,{code:`
<osds-textarea spellcheck>
</osds-textarea>

<!-- is now -->

<ods-textarea has-spellcheck>
</ods-textarea>
`,dark:"true",language:"html"})]})}function k(o={}){const{wrapper:s}={...i(),...o.components};return s?e.jsx(s,{...o,children:e.jsx(a,{...o})}):a(o)}export{k as default};
