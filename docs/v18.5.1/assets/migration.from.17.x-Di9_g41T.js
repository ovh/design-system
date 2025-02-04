import{j as e,M as l}from"./index-DQsySnuC.js";import{u as n}from"./index-Xj8pMhSr.js";import{O as r}from"./index-CihiY_f6.js";import{H as s}from"./Heading-DDc_MF2r.js";import"./iframe-DRtgxPEL.js";import"../sb-preview/runtime.js";import"./index-8AfNH5n5.js";import"./index-D-8MO0q_.js";import"./index-DrFu-skq.js";import"./ods-accordion2-Bgg69lRV.js";import"./index-DAZhnxgO.js";import"./icon-name-C6aMXAXT.js";import"./ods-icon2-Bl6f3POv.js";import"./ods-badge-tHc24Eg4.js";import"./ods-breadcrumb-item2-CoLTn2CF.js";import"./ods-link2-DDMr4sUm.js";import"./ods-button2-Bhm26DQr.js";import"./ods-spinner2-DCN2yKlT.js";import"./ods-card-B_VebKXk.js";import"./ods-checkbox2-BOuFx8yF.js";import"./dom-CO1DdTQY.js";import"./ods-clipboard2-NuJn2ry3.js";import"./ods-input2-B9cw61K_.js";import"./type-B5zI8QxY.js";import"./ods-tooltip2-BwzEvmuE.js";import"./overlay-KZpfSxWH.js";import"./ods-code2-bZeM2NI-.js";import"./ods-datepicker2-DwwUrg1C.js";import"./locale-NOa-Gxlr.js";import"./ods-divider-3cgmT4wP.js";import"./ods-divider2-Dc25YIYb.js";import"./ods-drawer2-DsENZFv4.js";import"./ods-file-upload2-CPd6D9Z5.js";import"./ods-progress-bar2-BuFm8qT0.js";import"./ods-form-field2-Tc9B1-rj.js";import"./ods-icon-NURRZ9Mf.js";import"./ods-link-BE9dMQzg.js";import"./ods-medium2-BB_NU63C.js";import"./ods-message-B9bD81Bu.js";import"./ods-modal2-CP36WQeg.js";import"./ods-pagination2-CotgNPzL.js";import"./ods-select2-B4wr0dem.js";import"./ods-password2-BQKXsiEd.js";import"./ods-phone-number2-D1K1HcDS.js";import"./ods-popover2-hre_XUC2.js";import"./ods-quantity2-DOjRn13r.js";import"./ods-radio2-BtBodUES.js";import"./ods-range2-BhwU834C.js";import"./ods-skeleton2-dZcgHYAN.js";import"./ods-switch-item2-m1p75_3x.js";import"./ods-tabs2-wJlXfoZt.js";import"./ods-table2-vWlGUOoj.js";import"./ods-tag2-Dj0-zHXw.js";import"./ods-text-CTeC-41B.js";import"./ods-textarea2-BHQdu6bK.js";import"./ods-timepicker2-2oCWgeQp.js";import"./ods-toggle2-DbSuYqWU.js";import"./index-DCBH0_Tl.js";function o(i){const t={blockquote:"blockquote",code:"code",li:"li",p:"p",ul:"ul",...n(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"ODS Components/Flag"}),`
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
