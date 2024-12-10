import{j as e,M as r}from"./index-Rx6QkXSv.js";import{u as i}from"./index-DPrOAYpY.js";import{O as a}from"./index-BJiUJsri.js";import{H as t}from"./Heading-2XnXa8MH.js";import"./iframe-HwRW2g_s.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-D-8MO0q_.js";import"./index-DX_4BEHg.js";import"./index-DrFu-skq.js";import"./index-Dqa08QUn.js";function s(n){const o={code:"code",p:"p",...i(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{title:"ODS Components/Cart"}),`
`,e.jsx(t,{label:"Cart - migrate from v17 to v18",level:1}),`
`,e.jsxs(o.p,{children:["Cart has been removed from ODS components. ",e.jsx(a,{color:"critical",label:"Removed",size:"sm"})]}),`
`,e.jsx(o.p,{children:"This component was too specific to a custom need and comes with quite a lot of downsides."}),`
`,e.jsx(t,{label:"Current component issues",level:2}),`
`,e.jsx(t,{label:"Performance & Complexity",level:3}),`
`,e.jsx(o.p,{children:"The whole component was composed of 9 web-components, each with their own rendering lifecycle."}),`
`,e.jsx(o.p,{children:`Each of those were relying on DOM queries to update their states accordingly to their parents/siblings, which
can become quite problematic performance-wise.`}),`
`,e.jsx(o.p,{children:"Also, in order to use this component, the integrators had to learn about the 9 different interfaces and all their possible combinations."}),`
`,e.jsx(t,{label:"Internal logic",level:3}),`
`,e.jsx(o.p,{children:"ODS components tend to be presentational, thus the internal logic should be handled by the integrators."}),`
`,e.jsx(o.p,{children:"The current implementation of Cart was trying to enforce some of the logic (e.g. quantity computation)."}),`
`,e.jsx(t,{label:"How to use Cart in v18",level:2}),`
`,e.jsxs(o.p,{children:["This component is basically a very simple top-to-bottom layout, where each section can be rendered using ",e.jsx(o.code,{children:"ods-text"}),` or even
a simple text element. You can also use `,e.jsx(o.code,{children:"ods-divider"})," to add some separation if needed."]}),`
`,e.jsx(o.p,{children:"All the colors and style properties can be found in the exposed design tokens."})]})}function g(n={}){const{wrapper:o}={...i(),...n.components};return o?e.jsx(o,{...n,children:e.jsx(s,{...n})}):s(n)}export{g as default};
