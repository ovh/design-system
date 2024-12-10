import{j as e,M as i,d as c}from"./index-Rx6QkXSv.js";import{u as d}from"./index-DPrOAYpY.js";import{O as t}from"./index-BJiUJsri.js";import{C as a}from"./code.stories-BO2e1nXs.js";import{H as n}from"./Heading-2XnXa8MH.js";import"./iframe-HwRW2g_s.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-D-8MO0q_.js";import"./index-DX_4BEHg.js";import"./index-DrFu-skq.js";import"./controls-DX883vx3.js";import"./index-Dqa08QUn.js";function r(s){const o={code:"code",p:"p",...d(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{of:a,name:"Migration From 17.x"}),`
`,e.jsx(n,{label:"Code - migrate from v17 to v18",level:1}),`
`,e.jsx(n,{label:"Usage changes",level:2}),`
`,e.jsxs(o.p,{children:["To add a copy button on the previous component, you had to add your own button in the ",e.jsx(o.code,{children:"copy"})," slot."]}),`
`,e.jsxs(o.p,{children:["This slot as been removed, you can now toggle the copy button using the new ",e.jsx(o.code,{children:"can-copy"})," attribute."]}),`
`,e.jsx(n,{label:"Attributes changes",level:2}),`
`,e.jsxs(o.p,{children:[e.jsx(o.code,{children:"canCopy"})," ",e.jsx(t,{color:"success",label:"New",size:"sm"})]}),`
`,e.jsx(o.p,{children:"New attribute (optional)."}),`
`,e.jsx(o.p,{children:"Set this to add a copy button on the right side of the code container."}),`
`,e.jsxs(o.p,{children:[e.jsx(o.code,{children:"color "})," ",e.jsx(t,{color:"critical",label:"Removed",size:"sm"})]}),`
`,e.jsx(o.p,{children:"Has been removed."}),`
`,e.jsx(o.p,{children:"You can use the style customization to achieve the same result."}),`
`,e.jsxs(o.p,{children:[e.jsx(o.code,{children:"contrasted"})," ",e.jsx(t,{color:"critical",label:"Removed",size:"sm"})]}),`
`,e.jsx(o.p,{children:"Has been removed."}),`
`,e.jsx(o.p,{children:"You can use the style customization to achieve the same result, until a new color get validated by the design team."}),`
`,e.jsxs(o.p,{children:[e.jsx(o.code,{children:"size "})," ",e.jsx(t,{color:"critical",label:"Removed",size:"sm"})]}),`
`,e.jsx(o.p,{children:"Has been removed."}),`
`,e.jsx(o.p,{children:"You can use the style customization to achieve the same result."}),`
`,e.jsx(n,{label:"Migration examples",level:2}),`
`,e.jsx(o.p,{children:"Default usage:"}),`
`,e.jsx(c,{code:`
<osds-code>
  import { OsdsText } from '@ovhcloud/ods-components/react';
</osds-code>

<!-- is now -->

<ods-code>
  import { OdsText } from '@ovhcloud/ods-components/react';
</ods-code>
`,dark:"true",language:"html"}),`
`,e.jsx(o.p,{children:"With a copy button:"}),`
`,e.jsx(c,{code:`
<osds-code>
  <osds-button slot="copy" variant="stroked">Copy</osds-button>
  import { OsdsText } from '@ovhcloud/ods-components/react';
</osds-code>

<!-- is now -->

<ods-code can-copy>
  import { OdsText } from '@ovhcloud/ods-components/react';
</ods-code>
`,dark:"true",language:"html"})]})}function z(s={}){const{wrapper:o}={...d(),...s.components};return o?e.jsx(o,{...s,children:e.jsx(r,{...s})}):r(s)}export{z as default};
