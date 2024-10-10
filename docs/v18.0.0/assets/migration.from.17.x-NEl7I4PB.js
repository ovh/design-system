import{j as e}from"./jsx-runtime-Dn0LW--f.js";import{u as i}from"./index-DeyDdHvX.js";import{M as r}from"./index-BM3JsZOq.js";import"./iframe-6_jBXMSq.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-B_J8iUie.js";import"./index-DX_4BEHg.js";import"./index-DrFu-skq.js";function t(o){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",hr:"hr",p:"p",...i(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{title:"ODS Components/Cart"}),`
`,e.jsx(n.h1,{id:"cart---migrate-from-v17-to-v18",children:"Cart - migrate from v17 to v18"}),`
`,e.jsx(n.hr,{}),`
`,e.jsxs(n.p,{children:["Cart has been removed from ODS components. ",e.jsx("ods-badge",{size:"sm",color:"critical",label:"Removed"})]}),`
`,e.jsx(n.p,{children:"This component was too specific to a custom need and comes with quite a lot of downsides."}),`
`,e.jsx(n.h2,{id:"current-component-issues",children:"Current component issues"}),`
`,e.jsx(n.h3,{id:"performance--complexity",children:"Performance & Complexity"}),`
`,e.jsx(n.p,{children:"The whole component was composed of 9 web-components, each with their own rendering lifecycle."}),`
`,e.jsx(n.p,{children:`Each of those were relying on DOM queries to update their states accordingly to their parents/siblings, which
can become quite problematic performance-wise.`}),`
`,e.jsx(n.p,{children:"Also, in order to use this component, the integrators had to learn about the 9 different interfaces and all their possible combinations."}),`
`,e.jsx(n.h3,{id:"internal-logic",children:"Internal logic"}),`
`,e.jsx(n.p,{children:"ODS components tend to be presentational, thus the internal logic should be handled by the integrators."}),`
`,e.jsx(n.p,{children:"The current implementation of Cart was trying to enforce some of the logic (e.g. quantity computation)."}),`
`,e.jsx(n.h2,{id:"how-to-use-cart-in-v18",children:"How to use Cart in v18"}),`
`,e.jsxs(n.p,{children:["This component is basically a very simple top-to-bottom layout, where each section can be rendered using ",e.jsx(n.code,{children:"ods-text"}),` or even
a simple text element. You can also use `,e.jsx(n.code,{children:"ods-divider"})," to add some separation if needed."]}),`
`,e.jsx(n.p,{children:"All the colors and style properties can be found in the exposed design tokens."})]})}function x(o={}){const{wrapper:n}={...i(),...o.components};return n?e.jsx(n,{...o,children:e.jsx(t,{...o})}):t(o)}export{x as default};
