import{j as e,M as l}from"./index-BCVJDEqf.js";import{u as n}from"./index-_YJSRz3a.js";import{O as r}from"./index-CwrMpZKn.js";import{H as o}from"./Heading-DYNNEBec.js";import"./iframe-B5YUgUg3.js";import"../sb-preview/runtime.js";import"./index-8AfNH5n5.js";import"./index-D-8MO0q_.js";import"./index-DrFu-skq.js";import"./ods-accordion2-C_uqOg6Y.js";import"./index-DAZhnxgO.js";import"./icon-name-C6aMXAXT.js";import"./ods-icon2-DRPHarK1.js";import"./ods-badge-DLluvt0I.js";import"./ods-breadcrumb-item2-C_Ah5FZN.js";import"./ods-link2-CtVFUlMR.js";import"./ods-button2-dPaqs0uX.js";import"./ods-spinner2-CPyWCS2f.js";import"./ods-card-CsxtEQHf.js";import"./ods-checkbox2-CJl-a8ad.js";import"./dom-8hoR-urs.js";import"./ods-clipboard2-CewZJu-c.js";import"./ods-input2-C6KOqFAM.js";import"./type-B5zI8QxY.js";import"./ods-tooltip2-CW12aP9b.js";import"./overlay-KZpfSxWH.js";import"./ods-code2-BL2TW0HP.js";import"./ods-combobox2-BXJ8jrhz.js";import"./_commonjsHelpers-CLD5em3H.js";import"./debounce-DRefBDpX.js";import"./ods-tag2-Bb2BMy9d.js";import"./ods-datepicker2-CijAhCPy.js";import"./locale-NOa-Gxlr.js";import"./ods-divider-Dtiri0aY.js";import"./ods-divider2-yzIshch6.js";import"./ods-drawer2-DKhK7oOX.js";import"./ods-file-upload2-Ca3mZ5BD.js";import"./ods-progress-bar2-Dg_V5kiw.js";import"./ods-form-field2-BDYkM6lU.js";import"./ods-icon-DTp5PnPI.js";import"./ods-input-CCQ46ZEm.js";import"./ods-link-BCeMi6SV.js";import"./ods-medium2-BnayTic8.js";import"./ods-message-DuyDaLcv.js";import"./ods-modal2-DCK89o-L.js";import"./ods-pagination2-shUGU0gB.js";import"./ods-select2-CEKvSxa4.js";import"./ods-password2-D64-z8ym.js";import"./ods-phone-number2-BL58mHzY.js";import"./ods-popover2-mGbx5HiL.js";import"./ods-quantity2-7U22nj6z.js";import"./ods-radio2-DDJaSdNS.js";import"./ods-range2-wBjnlon-.js";import"./ods-skeleton2-B7sDasgF.js";import"./ods-switch-item2-D-SJNcDd.js";import"./ods-tabs2-ChMEr-fQ.js";import"./ods-table2-oe37kiP3.js";import"./ods-text-BO_pN8NQ.js";import"./ods-textarea2-BDOVTqwb.js";import"./ods-timepicker2-DVnCnUkw.js";import"./ods-toggle2-Bg02aln1.js";import"./index-BLVG44ao.js";function s(i){const t={blockquote:"blockquote",code:"code",li:"li",p:"p",ul:"ul",...n(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"ODS Components/Flag"}),`
`,e.jsx(o,{label:"Flag - migrate from v17 to v18",level:1}),`
`,e.jsxs(t.p,{children:["Flag has been removed from ODS components. ",e.jsx(r,{color:"critical",label:"Removed",size:"sm"})]}),`
`,e.jsx(t.p,{children:"Using ODS Flag, pre V18, does require every project to setup a specific build configuration to be able to fetch the assets."}),`
`,e.jsx(t.p,{children:"This whole config should not be enforced by ODS and should be managed by each the way they prefer."}),`
`,e.jsx(o,{label:"The assets issue",level:2}),`
`,e.jsx(t.p,{children:"Due to how Stencil works, there is no way to lazy load specific assets on demand."}),`
`,e.jsx(t.p,{children:"Possible solutions are:"}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsx(t.li,{children:"inlining the assets in the final bundle"}),`
`,e.jsx(t.li,{children:"externalize the assets to a remote source"}),`
`,e.jsx(t.li,{children:"setup the assets path on each project using the web-component"}),`
`]}),`
`,e.jsx(o,{label:"Inlining assets",level:3}),`
`,e.jsx(t.p,{children:"This solution will transform the assets into base64 strings and embed them in the final web-component bundle."}),`
`,e.jsx(t.p,{children:"It is fine when dealing with small assets (like the spinner svg)."}),`
`,e.jsx(t.p,{children:"However, flags are usually high-quality svg files that will add weight to the bundle, thus it is not a viable solution."}),`
`,e.jsx(o,{label:"Externalize the assets",level:3}),`
`,e.jsx(t.p,{children:`Putting all the flags svg to a remote dedicated server/cdn and embed only the url would be, by far, the most
performant solution.`}),`
`,e.jsx(t.p,{children:"Regrettably, this is not possible yet due to internal security rules."}),`
`,e.jsx(t.p,{children:"We do hope a solution will be found at some point, that will allow us to put back this component."}),`
`,e.jsx(o,{label:"Setup the assets path manually",level:3}),`
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
`,e.jsx(o,{label:"How to use Flag in v18",level:2}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsxs(t.li,{children:["add the flag assets you want to use on your project (either using a dependency to a lib like ",e.jsx(t.code,{children:"flag-icon"}),", or adding custom assets directly)."]}),`
`,e.jsx(t.li,{children:"keep your previous setup untouched."}),`
`,e.jsxs(t.li,{children:["replace the ",e.jsx(t.code,{children:"osds-flag"})," with an ",e.jsx(t.code,{children:"img"})," element with your asset path and apply the ",e.jsx(t.code,{children:"ods-flag"})," mixin to it."]}),`
`]})]})}function je(i={}){const{wrapper:t}={...n(),...i.components};return t?e.jsx(t,{...i,children:e.jsx(s,{...i})}):s(i)}export{je as default};
