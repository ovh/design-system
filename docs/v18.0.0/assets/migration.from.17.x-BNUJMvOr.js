import{j as e}from"./jsx-runtime-Dn0LW--f.js";import{u as i}from"./index-DeyDdHvX.js";import{M as r}from"./index-BM3JsZOq.js";import{M as t}from"./message.stories-Bqi1A61O.js";import"./iframe-6_jBXMSq.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-B_J8iUie.js";import"./index-DX_4BEHg.js";import"./index-DrFu-skq.js";import"./index-DryTTbHl.js";import"./lit-html-D-ZEPr28.js";import"./unsafe-html-HR6uCwaW.js";import"./control-C1r2wu67.js";function o(n){const s={code:"code",h1:"h1",h2:"h2",hr:"hr",p:"p",pre:"pre",...i(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{of:t,name:"Migration From 17.x"}),`
`,e.jsx(s.h1,{id:"message---migrate-from-v17-to-v18",children:"Message - migrate from v17 to v18"}),`
`,e.jsx(s.hr,{}),`
`,e.jsx(s.h2,{id:"attributes-changes",children:"Attributes changes"}),`
`,e.jsxs(s.p,{children:[e.jsx(s.code,{children:"contrasted"})," ",e.jsx("ods-badge",{size:"sm",color:"critical",label:"Removed"})]}),`
`,e.jsx(s.p,{children:"Has been removed."}),`
`,e.jsx(s.p,{children:"You can use the style customization to achieve the same result, until a new color get validated by the design team."}),`
`,e.jsxs(s.p,{children:[e.jsx(s.code,{children:"inline"})," ",e.jsx("ods-badge",{size:"sm",color:"critical",label:"Removed"})]}),`
`,e.jsx(s.p,{children:"Has been removed."}),`
`,e.jsx(s.p,{children:"Message is inline by default. If you need to change this, you can use the style customization."}),`
`,e.jsxs(s.p,{children:[e.jsx(s.code,{children:"removable"})," ",e.jsx("ods-badge",{size:"sm",color:"critical",label:"Removed"})]}),`
`,e.jsx(s.p,{children:"Has been removed."}),`
`,e.jsx(s.p,{children:"Message is always removable."}),`
`,e.jsxs(s.p,{children:[e.jsx(s.code,{children:"type"})," ",e.jsx("ods-badge",{size:"sm",color:"critical",label:"Removed"})]}),`
`,e.jsx(s.p,{children:"Has been removed."}),`
`,e.jsx(s.p,{children:"Color attribute will condition which icon is displayed."}),`
`,e.jsxs(s.p,{children:[e.jsx(s.code,{children:"variant"})," ",e.jsx("ods-badge",{size:"sm",color:"success",label:"New"})]}),`
`,e.jsx(s.p,{children:"New attribute."}),`
`,e.jsx(s.p,{children:"Allow you to choose between default or light variant, a white version for lighter notification but different from contrasted color."}),`
`,e.jsx(s.h2,{id:"migration-examples",children:"Migration examples"}),`
`,e.jsx(s.p,{children:"Basic tag:"}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-html",children:`<osds-message>
  My message
</osds-message>

<!-- is now -->

<ods-message>
  My message
</ods-message>
`})})]})}function M(n={}){const{wrapper:s}={...i(),...n.components};return s?e.jsx(s,{...n,children:e.jsx(o,{...n})}):o(n)}export{M as default};
