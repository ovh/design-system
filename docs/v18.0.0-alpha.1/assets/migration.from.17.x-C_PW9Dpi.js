import{j as e}from"./jsx-runtime-C_5uCoOk.js";import{u as i}from"./index-BNSrq6w-.js";import{M as l}from"./index-DnV51lgW.js";import{C as d}from"./clipboard.stories-C4zTvHGi.js";import"./iframe-Cm7AUSBL.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-B_J8iUie.js";import"./index-DX_4BEHg.js";import"./index-DrFu-skq.js";import"./lit-html-D-ZEPr28.js";import"./control-C1r2wu67.js";function o(s){const n={code:"code",h1:"h1",h2:"h2",hr:"hr",p:"p",pre:"pre",...i(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{of:d,name:"Migration From 17.x"}),`
`,e.jsx(n.h1,{id:"clipboard---migrate-from-v17-to-v18",children:"Clipboard - migrate from v17 to v18"}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"usage-changes",children:"Usage changes"}),`
`,e.jsx(n.p,{children:"The clipboard does not use slots anymore, it will provide default labels that you can customize using new attributes."}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<osds-clipboard value="Content to copy"
  Copier le contenu
  <span slot='success-message'>Copié !</span>
</osds-clipboard>
`})}),`
`,e.jsx(n.p,{children:"The same result would now be achieved using:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<ods-clipboard label-copy="Copier le contenu"
               label-copy-success="Copié !"
               value="Content to copy">
</ods-clipboard>
`})}),`
`,e.jsx(n.h2,{id:"attributes-changes",children:"Attributes changes"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"disabled"})," ",e.jsx("img",{src:"https://img.shields.io/badge/updated-00FFFF"})]}),`
`,e.jsx(n.p,{children:"Has been updated."}),`
`,e.jsxs(n.p,{children:["You can use the new ",e.jsx(n.code,{children:"isDisabled"})," attribute to obtain the same behavior."]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"inline "})," ",e.jsx("img",{src:"https://img.shields.io/badge/removed-FF0000"})]}),`
`,e.jsx(n.p,{children:"Has been removed."}),`
`,e.jsxs(n.p,{children:["Clipboard is now ",e.jsx(n.code,{children:"inline-block"}),` by default.
You can add some style directly on the component if you want to override that.`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"labelCopy"})," ",e.jsx("img",{src:"https://img.shields.io/badge/new-008000"})]}),`
`,e.jsx(n.p,{children:"New attribute (optional)."}),`
`,e.jsx(n.p,{children:"Use this to customize the label on the tooltip when hovering before any copy action is triggered."}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"labelCopySuccess"})," ",e.jsx("img",{src:"https://img.shields.io/badge/new-008000"})]}),`
`,e.jsx(n.p,{children:"New attribute (optional)."}),`
`,e.jsx(n.p,{children:"Use this to customize the label on the tooltip when a successful copy did happen."}),`
`,e.jsx(n.h2,{id:"migration-examples",children:"Migration examples"}),`
`,e.jsx(n.p,{children:"Disabled clipboard:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<osds-clipboard disabled>
</osds-clipboard>

<!-- is now -->

<ods-clipboard is-disabled>
</ods-clipboard>
`})}),`
`,e.jsx(n.p,{children:"Inline clipboard:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<osds-clipboard inline>
</osds-clipboard>

<!-- is now -->

<ods-clipboard>
</ods-clipboard>
`})}),`
`,e.jsx(n.p,{children:"Custom labels:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<osds-clipboard>
  Copier le contenu
  <span slot='success-message'>Copié !</span>
</osds-clipboard>

<!-- is now -->

<ods-clipboard label-copy="Copier le contenu"
               label-copy-success="Copié !">
</ods-clipboard>
`})})]})}function C(s={}){const{wrapper:n}={...i(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(o,{...s})}):o(s)}export{C as default};
