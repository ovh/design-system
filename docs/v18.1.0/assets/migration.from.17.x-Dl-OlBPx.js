import{j as e}from"./jsx-runtime-vK1CujOl.js";import{u as t}from"./index-CB7mz5IJ.js";import{O as l}from"./index-CONup0N6.js";import{M as r,d as n}from"./index-Bd2Jnm8T.js";import{C as d}from"./clipboard.stories-BYhWrRW3.js";import{H as i}from"./Heading-oJ6nNH90.js";import"./iframe-Lgv0C8F1.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-B_J8iUie.js";import"./index-DX_4BEHg.js";import"./index-DrFu-skq.js";import"./lit-html-D-ZEPr28.js";import"./controls-DpsgTNdU.js";import"./index-BNPjhb5w.js";function a(s){const o={code:"code",p:"p",...t(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{of:d,name:"Migration From 17.x"}),`
`,e.jsx(i,{label:"Clipboard - migrate from v17 to v18",level:1}),`
`,e.jsx(i,{label:"Usage changes",level:2}),`
`,e.jsx(o.p,{children:"The clipboard does not use slots anymore, it will provide default labels that you can customize using new attributes."}),`
`,e.jsx(n,{code:`
<osds-clipboard value="Content to copy"
  Copier le contenu
  <span slot='success-message'>Copié !</span>
</osds-clipboard>
`,dark:"true",language:"html"}),`
`,e.jsx(o.p,{children:"The same result would now be achieved using:"}),`
`,e.jsx(n,{code:`
<ods-clipboard label-copy="Copier le contenu"
               label-copy-success="Copié !"
               value="Content to copy">
</ods-clipboard>
`,dark:"true",language:"html"}),`
`,e.jsx(i,{label:"Attributes changes",level:2}),`
`,e.jsxs(o.p,{children:[e.jsx(o.code,{children:"disabled"})," ",e.jsx(l,{color:"information",label:"Updated",size:"sm"})]}),`
`,e.jsx(o.p,{children:"Has been updated."}),`
`,e.jsxs(o.p,{children:["You can use the new ",e.jsx(o.code,{children:"isDisabled"})," attribute to obtain the same behavior."]}),`
`,e.jsxs(o.p,{children:[e.jsx(o.code,{children:"inline "})," ",e.jsx(l,{color:"critical",label:"Removed",size:"sm"})]}),`
`,e.jsx(o.p,{children:"Has been removed."}),`
`,e.jsxs(o.p,{children:["Clipboard is now ",e.jsx(o.code,{children:"inline-block"}),` by default.
You can add some style directly on the component if you want to override that.`]}),`
`,e.jsxs(o.p,{children:[e.jsx(o.code,{children:"labelCopy"})," ",e.jsx(l,{color:"success",label:"New",size:"sm"})]}),`
`,e.jsx(o.p,{children:"New attribute (optional)."}),`
`,e.jsx(o.p,{children:"Use this to customize the label on the tooltip when hovering before any copy action is triggered."}),`
`,e.jsxs(o.p,{children:[e.jsx(o.code,{children:"labelCopySuccess"})," ",e.jsx(l,{color:"success",label:"New",size:"sm"})]}),`
`,e.jsx(o.p,{children:"New attribute (optional)."}),`
`,e.jsx(o.p,{children:"Use this to customize the label on the tooltip when a successful copy did happen."}),`
`,e.jsx(i,{label:"Migration examples",level:2}),`
`,e.jsx(o.p,{children:"Disabled clipboard:"}),`
`,e.jsx(n,{code:`
<osds-clipboard disabled>
</osds-clipboard>

<!-- is now -->

<ods-clipboard is-disabled>
</ods-clipboard>
`,dark:"true",language:"html"}),`
`,e.jsx(o.p,{children:"Inline clipboard:"}),`
`,e.jsx(n,{code:`
<osds-clipboard inline>
</osds-clipboard>

<!-- is now -->

<ods-clipboard>
</ods-clipboard>
`,dark:"true",language:"html"}),`
`,e.jsx(o.p,{children:"Custom labels:"}),`
`,e.jsx(n,{code:`
<osds-clipboard>
  Copier le contenu
  <span slot='success-message'>Copié !</span>
</osds-clipboard>

<!-- is now -->

<ods-clipboard label-copy="Copier le contenu"
               label-copy-success="Copié !">
</ods-clipboard>
`,dark:"true",language:"html"})]})}function z(s={}){const{wrapper:o}={...t(),...s.components};return o?e.jsx(o,{...s,children:e.jsx(a,{...s})}):a(s)}export{z as default};
