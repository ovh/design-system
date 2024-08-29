import{j as e}from"./jsx-runtime-Dn0LW--f.js";import{u as i}from"./index-DeyDdHvX.js";import{M as l}from"./index-BM3JsZOq.js";import{C as c}from"./clipboard.stories-C4zTvHGi.js";import"./iframe-6_jBXMSq.js";import"../sb-preview/runtime.js";import"./commonjsHelpers-Cpj98o6Y.js";import"./index-B_J8iUie.js";import"./index-DX_4BEHg.js";import"./index-DrFu-skq.js";import"./lit-html-D-ZEPr28.js";import"./control-C1r2wu67.js";function o(n){const s={code:"code",h1:"h1",h2:"h2",hr:"hr",p:"p",pre:"pre",...i(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{of:c,name:"Migration From 17.x"}),`
`,e.jsx(s.h1,{id:"clipboard---migrate-from-v17-to-v18",children:"Clipboard - migrate from v17 to v18"}),`
`,e.jsx(s.hr,{}),`
`,e.jsx(s.h2,{id:"usage-changes",children:"Usage changes"}),`
`,e.jsx(s.p,{children:"The clipboard does not use slots anymore, it will provide default labels that you can customize using new attributes."}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-html",children:`<osds-clipboard value="Content to copy"
  Copier le contenu
  <span slot='success-message'>Copié !</span>
</osds-clipboard>
`})}),`
`,e.jsx(s.p,{children:"The same result would now be achieved using:"}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-html",children:`<ods-clipboard label-copy="Copier le contenu"
               label-copy-success="Copié !"
               value="Content to copy">
</ods-clipboard>
`})}),`
`,e.jsx(s.h2,{id:"attributes-changes",children:"Attributes changes"}),`
`,e.jsxs(s.p,{children:[e.jsx(s.code,{children:"disabled"})," ",e.jsx("ods-badge",{size:"sm",label:"Updated"})]}),`
`,e.jsx(s.p,{children:"Has been updated."}),`
`,e.jsxs(s.p,{children:["You can use the new ",e.jsx(s.code,{children:"isDisabled"})," attribute to obtain the same behavior."]}),`
`,e.jsxs(s.p,{children:[e.jsx(s.code,{children:"inline "})," ",e.jsx("ods-badge",{size:"sm",color:"critical",label:"Removed"})]}),`
`,e.jsx(s.p,{children:"Has been removed."}),`
`,e.jsxs(s.p,{children:["Clipboard is now ",e.jsx(s.code,{children:"inline-block"}),` by default.
You can add some style directly on the component if you want to override that.`]}),`
`,e.jsxs(s.p,{children:[e.jsx(s.code,{children:"labelCopy"})," ",e.jsx("ods-badge",{size:"sm",color:"success",label:"New"})]}),`
`,e.jsx(s.p,{children:"New attribute (optional)."}),`
`,e.jsx(s.p,{children:"Use this to customize the label on the tooltip when hovering before any copy action is triggered."}),`
`,e.jsxs(s.p,{children:[e.jsx(s.code,{children:"labelCopySuccess"})," ",e.jsx("ods-badge",{size:"sm",color:"success",label:"New"})]}),`
`,e.jsx(s.p,{children:"New attribute (optional)."}),`
`,e.jsx(s.p,{children:"Use this to customize the label on the tooltip when a successful copy did happen."}),`
`,e.jsx(s.h2,{id:"migration-examples",children:"Migration examples"}),`
`,e.jsx(s.p,{children:"Disabled clipboard:"}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-html",children:`<osds-clipboard disabled>
</osds-clipboard>

<!-- is now -->

<ods-clipboard is-disabled>
</ods-clipboard>
`})}),`
`,e.jsx(s.p,{children:"Inline clipboard:"}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-html",children:`<osds-clipboard inline>
</osds-clipboard>

<!-- is now -->

<ods-clipboard>
</ods-clipboard>
`})}),`
`,e.jsx(s.p,{children:"Custom labels:"}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-html",children:`<osds-clipboard>
  Copier le contenu
  <span slot='success-message'>Copié !</span>
</osds-clipboard>

<!-- is now -->

<ods-clipboard label-copy="Copier le contenu"
               label-copy-success="Copié !">
</ods-clipboard>
`})})]})}function C(n={}){const{wrapper:s}={...i(),...n.components};return s?e.jsx(s,{...n,children:e.jsx(o,{...n})}):o(n)}export{C as default};
