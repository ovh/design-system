import{j as e,M as o}from"./index-Rx6QkXSv.js";import{u as l}from"./index-DPrOAYpY.js";import{O as a}from"./index-BJiUJsri.js";import{H as t}from"./Heading-2XnXa8MH.js";import"./iframe-HwRW2g_s.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-D-8MO0q_.js";import"./index-DX_4BEHg.js";import"./index-DrFu-skq.js";import"./index-Dqa08QUn.js";function i(n){const s={blockquote:"blockquote",code:"code",li:"li",p:"p",ul:"ul",...l(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{title:"ODS Components/Flag"}),`
`,e.jsx(t,{label:"Flag - migrate from v17 to v18",level:1}),`
`,e.jsxs(s.p,{children:["Flag has been removed from ODS components. ",e.jsx(a,{color:"critical",label:"Removed",size:"sm"})]}),`
`,e.jsx(s.p,{children:"Using ODS Flag, pre V18, does require every project to setup a specific build configuration to be able to fetch the assets."}),`
`,e.jsx(s.p,{children:"This whole config should not be enforced by ODS and should be managed by each the way they prefer."}),`
`,e.jsx(t,{label:"The assets issue",level:2}),`
`,e.jsx(s.p,{children:"Due to how Stencil works, there is no way to lazy load specific assets on demand."}),`
`,e.jsx(s.p,{children:"Possible solutions are:"}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsx(s.li,{children:"inlining the assets in the final bundle"}),`
`,e.jsx(s.li,{children:"externalize the assets to a remote source"}),`
`,e.jsx(s.li,{children:"setup the assets path on each project using the web-component"}),`
`]}),`
`,e.jsx(t,{label:"Inlining assets",level:3}),`
`,e.jsx(s.p,{children:"This solution will transform the assets into base64 strings and embed them in the final web-component bundle."}),`
`,e.jsx(s.p,{children:"It is fine when dealing with small assets (like the spinner svg)."}),`
`,e.jsx(s.p,{children:"However, flags are usually high-quality svg files that will add weight to the bundle, thus it is not a viable solution."}),`
`,e.jsx(t,{label:"Externalize the assets",level:3}),`
`,e.jsx(s.p,{children:`Putting all the flags svg to a remote dedicated server/cdn and embed only the url would be, by far, the most
performant solution.`}),`
`,e.jsx(s.p,{children:"Regrettably, this is not possible yet due to internal security rules."}),`
`,e.jsx(s.p,{children:"We do hope a solution will be found at some point, that will allow us to put back this component."}),`
`,e.jsx(t,{label:"Setup the assets path manually",level:3}),`
`,e.jsx(s.p,{children:"This is the current solution that projects using ODS pre-v18 need to setup."}),`
`,e.jsx(s.p,{children:"How it works:"}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:["ODS brings a dependency to a flag library (",e.jsx(s.code,{children:"flag-icons"}),") that ends up in the app ",e.jsx(s.code,{children:"node_modules"})]}),`
`,e.jsxs(s.li,{children:[`The project that wants to use flag, updates its dev server and bundler config to copy the flags from the
`,e.jsx(s.code,{children:"node_modules"})," to its own assets directory on build"]}),`
`,e.jsxs(s.li,{children:["The Flag component can now be used with the ",e.jsx(s.code,{children:"asset-path"})," prop set to the previously setup assets path"]}),`
`]}),`
`,e.jsxs(s.blockquote,{children:[`
`,e.jsx(s.p,{children:"Using ODS Flag enforces the use of a specific flag lib on a given version"}),`
`]}),`
`,e.jsxs(s.p,{children:[`Which is not specially a good things, project can decide to use wherever flag lib they prefer, though we may recommend
`,e.jsx(s.code,{children:"flag-icons"}),"."]}),`
`,e.jsxs(s.blockquote,{children:[`
`,e.jsx(s.p,{children:"Using ODS Flag provides the basic style of a flag item"}),`
`]}),`
`,e.jsxs(s.p,{children:["This same style can be applied on your own flag element using the ",e.jsx(s.code,{children:"ods-flag"})," mixin available in v18 (see using ODS mixins)."]}),`
`,e.jsx(t,{label:"How to use Flag in v18",level:2}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:["add the flag assets you want to use on your project (either using a dependency to a lib like ",e.jsx(s.code,{children:"flag-icon"}),", or adding custom assets directly)."]}),`
`,e.jsx(s.li,{children:"keep your previous setup untouched."}),`
`,e.jsxs(s.li,{children:["replace the ",e.jsx(s.code,{children:"osds-flag"})," with an ",e.jsx(s.code,{children:"img"})," element with your asset path and apply the ",e.jsx(s.code,{children:"ods-flag"})," mixin to it."]}),`
`]})]})}function b(n={}){const{wrapper:s}={...l(),...n.components};return s?e.jsx(s,{...n,children:e.jsx(i,{...n})}):i(n)}export{b as default};
