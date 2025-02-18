import{j as e,M as l}from"./index-CCbL8veO.js";import{u as n}from"./index-Cq3PbNHF.js";import{O as r}from"./index-uzYzEmTV.js";import{H as s}from"./Heading-DN6FdGMk.js";import"./iframe-DU4SvIHv.js";import"../sb-preview/runtime.js";import"./index-8AfNH5n5.js";import"./index-D-8MO0q_.js";import"./index-DrFu-skq.js";import"./ods-accordion2-C2zw5EtX.js";import"./index-DAZhnxgO.js";import"./icon-name-C6aMXAXT.js";import"./ods-icon2-C2sSMg6h.js";import"./ods-badge-CMZ1G1-q.js";import"./ods-breadcrumb-item2-Chi8uW7w.js";import"./ods-link2-DhrEm8Nk.js";import"./ods-button2-DJxJiLcj.js";import"./ods-spinner2-CPyWCS2f.js";import"./ods-card-CsxtEQHf.js";import"./ods-checkbox2-D1rfq4Wo.js";import"./dom-CO1DdTQY.js";import"./ods-clipboard2-PjbiunMl.js";import"./ods-input2-BVKbybMU.js";import"./type-B5zI8QxY.js";import"./ods-tooltip2-CW12aP9b.js";import"./overlay-KZpfSxWH.js";import"./ods-code2-CPtqO8K9.js";import"./ods-datepicker2-CHJb_Dii.js";import"./locale-NOa-Gxlr.js";import"./ods-divider-Dtiri0aY.js";import"./ods-divider2-yzIshch6.js";import"./ods-drawer2-DKhK7oOX.js";import"./ods-file-upload2-WcWZbv1U.js";import"./ods-progress-bar2-Dg_V5kiw.js";import"./ods-form-field2-BDYkM6lU.js";import"./ods-icon-DOZBIEJb.js";import"./ods-link-C3iAbK8i.js";import"./ods-medium2-BnayTic8.js";import"./ods-message-DErUZ_Xg.js";import"./ods-modal2-CLthqs1m.js";import"./ods-pagination2-CxhEcubt.js";import"./ods-select2-D2fKxfqw.js";import"./ods-password2-DNFrl9vd.js";import"./ods-phone-number2-qOf9h3xC.js";import"./ods-popover2-D0fTxPry.js";import"./ods-quantity2-DSK2z9QA.js";import"./ods-radio2-NdDFmobW.js";import"./ods-range2-DVd4LCay.js";import"./ods-skeleton2-B7sDasgF.js";import"./ods-switch-item2-D-SJNcDd.js";import"./ods-tabs2-ChMEr-fQ.js";import"./ods-table2-oe37kiP3.js";import"./ods-tag2-CInySbKk.js";import"./ods-text-BO_pN8NQ.js";import"./ods-textarea2-BJL14TBM.js";import"./ods-timepicker2-4lQj55gq.js";import"./ods-toggle2-BgUL7nI_.js";import"./index-DCBH0_Tl.js";function o(i){const t={blockquote:"blockquote",code:"code",li:"li",p:"p",ul:"ul",...n(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"ODS Components/Flag"}),`
`,e.jsx(s,{label:"Flag - migrate from v17 to v18",level:1}),`
`,e.jsxs(t.p,{children:["Flag has been removed from ODS components. ",e.jsx(r,{color:"critical",label:"Removed",size:"sm"})]}),`
`,e.jsx(t.p,{children:"Using ODS Flag, pre V18, does require every project to setup a specific build configuration to be able to fetch the assets."}),`
`,e.jsx(t.p,{children:"This whole config should not be enforced by ODS and should be managed by each the way they prefer."}),`
`,e.jsx(s,{label:"The assets issue",level:2}),`
`,e.jsx(t.p,{children:"Due to how Stencil works, there is no way to lazy load specific assets on demand."}),`
`,e.jsx(t.p,{children:"Possible solutions are:"}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsx(t.li,{children:"inlining the assets in the final bundle"}),`
`,e.jsx(t.li,{children:"externalize the assets to a remote source"}),`
`,e.jsx(t.li,{children:"setup the assets path on each project using the web-component"}),`
`]}),`
`,e.jsx(s,{label:"Inlining assets",level:3}),`
`,e.jsx(t.p,{children:"This solution will transform the assets into base64 strings and embed them in the final web-component bundle."}),`
`,e.jsx(t.p,{children:"It is fine when dealing with small assets (like the spinner svg)."}),`
`,e.jsx(t.p,{children:"However, flags are usually high-quality svg files that will add weight to the bundle, thus it is not a viable solution."}),`
`,e.jsx(s,{label:"Externalize the assets",level:3}),`
`,e.jsx(t.p,{children:`Putting all the flags svg to a remote dedicated server/cdn and embed only the url would be, by far, the most
performant solution.`}),`
`,e.jsx(t.p,{children:"Regrettably, this is not possible yet due to internal security rules."}),`
`,e.jsx(t.p,{children:"We do hope a solution will be found at some point, that will allow us to put back this component."}),`
`,e.jsx(s,{label:"Setup the assets path manually",level:3}),`
`,e.jsx(t.p,{children:"This is the current solution that projects using ODS pre-v18 need to setup."}),`
`,e.jsx(t.p,{children:"How it works:"}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsxs(t.li,{children:["ODS brings a dependency to a flag library (",e.jsx(t.code,{children:"flag-icons"}),") that ends up in the app ",e.jsx(t.code,{children:"node_modules"})]}),`
`,e.jsxs(t.li,{children:[`The project that wants to use flag, updates its dev server and bundler config to copy the flags from the
`,e.jsx(t.code,{children:"node_modules"})," to its own assets directory on build"]}),`
`,e.jsxs(t.li,{children:["The Flag component can now be used with the ",e.jsx(t.code,{children:"asset-path"})," prop set to the previously setup assets path"]}),`
`]}),`
`,e.jsxs(t.blockquote,{children:[`
`,e.jsx(t.p,{children:"Using ODS Flag enforces the use of a specific flag lib on a given version"}),`
`]}),`
`,e.jsxs(t.p,{children:[`Which is not specially a good things, project can decide to use wherever flag lib they prefer, though we may recommend
`,e.jsx(t.code,{children:"flag-icons"}),"."]}),`
`,e.jsxs(t.blockquote,{children:[`
`,e.jsx(t.p,{children:"Using ODS Flag provides the basic style of a flag item"}),`
`]}),`
`,e.jsxs(t.p,{children:["This same style can be applied on your own flag element using the ",e.jsx(t.code,{children:"ods-flag"})," mixin available in v18 (see using ODS mixins)."]}),`
`,e.jsx(s,{label:"How to use Flag in v18",level:2}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsxs(t.li,{children:["add the flag assets you want to use on your project (either using a dependency to a lib like ",e.jsx(t.code,{children:"flag-icon"}),", or adding custom assets directly)."]}),`
`,e.jsx(t.li,{children:"keep your previous setup untouched."}),`
`,e.jsxs(t.li,{children:["replace the ",e.jsx(t.code,{children:"osds-flag"})," with an ",e.jsx(t.code,{children:"img"})," element with your asset path and apply the ",e.jsx(t.code,{children:"ods-flag"})," mixin to it."]}),`
`]})]})}function he(i={}){const{wrapper:t}={...n(),...i.components};return t?e.jsx(t,{...i,children:e.jsx(o,{...i})}):o(i)}export{he as default};
