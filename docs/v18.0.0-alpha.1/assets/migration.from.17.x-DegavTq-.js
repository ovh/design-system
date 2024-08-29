import{j as e}from"./jsx-runtime-C_5uCoOk.js";import{u as i}from"./index-BNSrq6w-.js";import{M as o}from"./index-DnV51lgW.js";import"./iframe-Cm7AUSBL.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-B_J8iUie.js";import"./index-DX_4BEHg.js";import"./index-DrFu-skq.js";function t(n){const s={blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",hr:"hr",li:"li",p:"p",ul:"ul",...i(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{title:"ODS Components/Flag"}),`
`,e.jsx(s.h1,{id:"flag---migrate-from-v17-to-v18",children:"Flag - migrate from v17 to v18"}),`
`,e.jsx(s.hr,{}),`
`,e.jsxs(s.p,{children:["Flag has been removed from ODS components. ",e.jsx("img",{src:"https://img.shields.io/badge/removed-FF0000"})]}),`
`,e.jsx(s.p,{children:"Using ODS Flag, pre V18, does require every project to setup a specific build configuration to be able to fetch the assets."}),`
`,e.jsx(s.p,{children:"This whole config should not be enforced by ODS and should be managed by each the way they prefer."}),`
`,e.jsx(s.h2,{id:"the-assets-issue",children:"The assets issue"}),`
`,e.jsx(s.p,{children:"Due to how Stencil works, there is no way to lazy load specific assets on demand."}),`
`,e.jsx(s.p,{children:"Possible solutions are:"}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsx(s.li,{children:"inlining the assets in the final bundle"}),`
`,e.jsx(s.li,{children:"externalize the assets to a remote source"}),`
`,e.jsx(s.li,{children:"setup the assets path on each project using the web-component"}),`
`]}),`
`,e.jsx(s.h3,{id:"inlining-assets",children:"Inlining assets"}),`
`,e.jsx(s.p,{children:"This solution will transform the assets into base64 strings and embed them in the final web-component bundle."}),`
`,e.jsx(s.p,{children:"It is fine when dealing with small assets (like the spinner svg)."}),`
`,e.jsx(s.p,{children:"However, flags are usually high-quality svg files that will add weight to the bundle, thus it is not a viable solution."}),`
`,e.jsx(s.h3,{id:"externalize-the-assets",children:"Externalize the assets"}),`
`,e.jsx(s.p,{children:`Putting all the flags svg to a remote dedicated server/cdn and embed only the url would be, by far, the most
performant solution.`}),`
`,e.jsx(s.p,{children:"Regrettably, this is not possible yet due to internal security rules."}),`
`,e.jsx(s.p,{children:"We do hope a solution will be found at some point, that will allow us to put back this component."}),`
`,e.jsx(s.h3,{id:"setup-the-assets-path-manually",children:"Setup the assets path manually"}),`
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
`,e.jsx(s.h2,{id:"how-to-use-flag-in-v18",children:"How to use Flag in v18"}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:["add the flag assets you want to use on your project (either using a dependency to a lib like ",e.jsx(s.code,{children:"flag-icon"}),", or adding custom assets directly)."]}),`
`,e.jsx(s.li,{children:"keep your previous setup untouched."}),`
`,e.jsxs(s.li,{children:["replace the ",e.jsx(s.code,{children:"osds-flag"})," with an ",e.jsx(s.code,{children:"img"})," element with your asset path and apply the ",e.jsx(s.code,{children:"ods-flag"})," mixin to it."]}),`
`]})]})}function x(n={}){const{wrapper:s}={...i(),...n.components};return s?e.jsx(s,{...n,children:e.jsx(t,{...n})}):t(n)}export{x as default};
