import{j as e}from"./jsx-runtime-VM66peLj.js";import{useMDXComponents as t}from"./index-DQB45XCM.js";import{h as n}from"./Badge-EGenXdCK-DDYseYDy.js";import{M as c,S as i}from"./index-BlaLg9GY.js";import{C as a}from"./clipboard.stories-BI159b97.js";import{H as l}from"./Heading-6Mfikk-c.js";import"./index-D_CmzhJ4.js";import"./index-2w0W-O47-BJ19ihbZ.js";import"./iframe-CGgj-FAD.js";import"./index-ChzAxGiP.js";import"./index-CucsY3YN.js";import"./index-CXQShRbs.js";import"./index-DrFu-skq.js";import"./index-CkQHsVsO.js";import"./index-BCxMAfLs.js";import"./use-locale-context-Z4fgdY29.js";import"./Input-BHPevcdA.js";import"./Button-BRERPjFq.js";import"./Spinner-CcwadLZv.js";import"./icon-name-jL3axqAU.js";import"./use-field-context-BA6pMY5L.js";import"./TooltipTrigger-CUqGeRIQ.js";import"./overlay-CZHjGBMC.js";import"./portal-BQw3bnzL.js";import"./use-presence-BmJ92aQP.js";import"./use-event-OCVb0O1l.js";import"./index-DTqyXX3-.js";import"./controls-BtiQQn1l.js";function r(s){const o={code:"code",p:"p",...t(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(c,{of:a,name:"Migration From 17.x"}),`
`,e.jsx(l,{label:"Clipboard - migrate from v17 to v18",level:1}),`
`,e.jsx(l,{label:"Usage changes",level:2}),`
`,e.jsx(o.p,{children:"The clipboard does not use slots anymore, it will provide default labels that you can customize using new attributes."}),`
`,e.jsx(i,{code:`
<osds-clipboard value="Content to copy"
  Copier le contenu
  <span slot='success-message'>Copié !</span>
</osds-clipboard>
`,dark:"true",language:"html"}),`
`,e.jsx(o.p,{children:"The same result would now be achieved using:"}),`
`,e.jsx(i,{code:`
<ods-clipboard label-copy="Copier le contenu"
               label-copy-success="Copié !"
               value="Content to copy">
</ods-clipboard>
`,dark:"true",language:"html"}),`
`,e.jsx(l,{label:"Attributes changes",level:2}),`
`,e.jsxs(o.p,{children:[e.jsx(o.code,{children:"disabled"})," ",e.jsx(n,{color:"information",size:"sm",children:"Updated"})]}),`
`,e.jsx(o.p,{children:"Has been updated."}),`
`,e.jsxs(o.p,{children:["You can use the new ",e.jsx(o.code,{children:"isDisabled"})," attribute to obtain the same behavior."]}),`
`,e.jsxs(o.p,{children:[e.jsx(o.code,{children:"inline "})," ",e.jsx(n,{color:"critical",size:"sm",children:"Removed"})]}),`
`,e.jsx(o.p,{children:"Has been removed."}),`
`,e.jsxs(o.p,{children:["Clipboard is now ",e.jsx(o.code,{children:"inline-block"}),` by default.
You can add some style directly on the component if you want to override that.`]}),`
`,e.jsxs(o.p,{children:[e.jsx(o.code,{children:"labelCopy"})," ",e.jsx(n,{color:"success",size:"sm",children:"New"})]}),`
`,e.jsx(o.p,{children:"New attribute (optional)."}),`
`,e.jsx(o.p,{children:"Use this to customize the label on the tooltip when hovering before any copy action is triggered."}),`
`,e.jsxs(o.p,{children:[e.jsx(o.code,{children:"labelCopySuccess"})," ",e.jsx(n,{color:"success",size:"sm",children:"New"})]}),`
`,e.jsx(o.p,{children:"New attribute (optional)."}),`
`,e.jsx(o.p,{children:"Use this to customize the label on the tooltip when a successful copy did happen."}),`
`,e.jsx(l,{label:"Migration examples",level:2}),`
`,e.jsx(o.p,{children:"Disabled clipboard:"}),`
`,e.jsx(i,{code:`
<osds-clipboard disabled>
</osds-clipboard>

<!-- is now -->

<ods-clipboard is-disabled>
</ods-clipboard>
`,dark:"true",language:"html"}),`
`,e.jsx(o.p,{children:"Inline clipboard:"}),`
`,e.jsx(i,{code:`
<osds-clipboard inline>
</osds-clipboard>

<!-- is now -->

<ods-clipboard>
</ods-clipboard>
`,dark:"true",language:"html"}),`
`,e.jsx(o.p,{children:"Custom labels:"}),`
`,e.jsx(i,{code:`
<osds-clipboard>
  Copier le contenu
  <span slot='success-message'>Copié !</span>
</osds-clipboard>

<!-- is now -->

<ods-clipboard label-copy="Copier le contenu"
               label-copy-success="Copié !">
</ods-clipboard>
`,dark:"true",language:"html"})]})}function A(s={}){const{wrapper:o}={...t(),...s.components};return o?e.jsx(o,{...s,children:e.jsx(r,{...s})}):r(s)}export{A as default};
