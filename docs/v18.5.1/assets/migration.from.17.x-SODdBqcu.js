import{j as o,M as p,d as s}from"./index-DQsySnuC.js";import{u as l}from"./index-Xj8pMhSr.js";import{O as t}from"./index-CihiY_f6.js";import{C as a}from"./clipboard.stories-BYr4472Z.js";import{H as r}from"./Heading-DDc_MF2r.js";import"./iframe-DRtgxPEL.js";import"../sb-preview/runtime.js";import"./index-8AfNH5n5.js";import"./index-D-8MO0q_.js";import"./index-DrFu-skq.js";import"./ods-accordion2-Bgg69lRV.js";import"./index-DAZhnxgO.js";import"./icon-name-C6aMXAXT.js";import"./ods-icon2-Bl6f3POv.js";import"./ods-badge-tHc24Eg4.js";import"./ods-breadcrumb-item2-CoLTn2CF.js";import"./ods-link2-DDMr4sUm.js";import"./ods-button2-Bhm26DQr.js";import"./ods-spinner2-DCN2yKlT.js";import"./ods-card-B_VebKXk.js";import"./ods-checkbox2-BOuFx8yF.js";import"./dom-CO1DdTQY.js";import"./ods-clipboard2-NuJn2ry3.js";import"./ods-input2-B9cw61K_.js";import"./type-B5zI8QxY.js";import"./ods-tooltip2-BwzEvmuE.js";import"./overlay-KZpfSxWH.js";import"./ods-code2-bZeM2NI-.js";import"./ods-datepicker2-DwwUrg1C.js";import"./locale-NOa-Gxlr.js";import"./ods-divider-3cgmT4wP.js";import"./ods-divider2-Dc25YIYb.js";import"./ods-drawer2-DsENZFv4.js";import"./ods-file-upload2-CPd6D9Z5.js";import"./ods-progress-bar2-BuFm8qT0.js";import"./ods-form-field2-Tc9B1-rj.js";import"./ods-icon-NURRZ9Mf.js";import"./ods-link-BE9dMQzg.js";import"./ods-medium2-BB_NU63C.js";import"./ods-message-B9bD81Bu.js";import"./ods-modal2-CP36WQeg.js";import"./ods-pagination2-CotgNPzL.js";import"./ods-select2-B4wr0dem.js";import"./ods-password2-BQKXsiEd.js";import"./ods-phone-number2-D1K1HcDS.js";import"./ods-popover2-hre_XUC2.js";import"./ods-quantity2-DOjRn13r.js";import"./ods-radio2-BtBodUES.js";import"./ods-range2-BhwU834C.js";import"./ods-skeleton2-dZcgHYAN.js";import"./ods-switch-item2-m1p75_3x.js";import"./ods-tabs2-wJlXfoZt.js";import"./ods-table2-vWlGUOoj.js";import"./ods-tag2-Dj0-zHXw.js";import"./ods-text-CTeC-41B.js";import"./ods-textarea2-BHQdu6bK.js";import"./ods-timepicker2-2oCWgeQp.js";import"./ods-toggle2-DbSuYqWU.js";import"./controls-DX883vx3.js";import"./index-DCBH0_Tl.js";function n(i){const e={code:"code",p:"p",...l(),...i.components};return o.jsxs(o.Fragment,{children:[o.jsx(p,{of:a,name:"Migration From 17.x"}),`
`,o.jsx(r,{label:"Clipboard - migrate from v17 to v18",level:1}),`
`,o.jsx(r,{label:"Usage changes",level:2}),`
`,o.jsx(e.p,{children:"The clipboard does not use slots anymore, it will provide default labels that you can customize using new attributes."}),`
`,o.jsx(s,{code:`
<osds-clipboard value="Content to copy"
  Copier le contenu
  <span slot='success-message'>Copié !</span>
</osds-clipboard>
`,dark:"true",language:"html"}),`
`,o.jsx(e.p,{children:"The same result would now be achieved using:"}),`
`,o.jsx(s,{code:`
<ods-clipboard label-copy="Copier le contenu"
               label-copy-success="Copié !"
               value="Content to copy">
</ods-clipboard>
`,dark:"true",language:"html"}),`
`,o.jsx(r,{label:"Attributes changes",level:2}),`
`,o.jsxs(e.p,{children:[o.jsx(e.code,{children:"disabled"})," ",o.jsx(t,{color:"information",label:"Updated",size:"sm"})]}),`
`,o.jsx(e.p,{children:"Has been updated."}),`
`,o.jsxs(e.p,{children:["You can use the new ",o.jsx(e.code,{children:"isDisabled"})," attribute to obtain the same behavior."]}),`
`,o.jsxs(e.p,{children:[o.jsx(e.code,{children:"inline "})," ",o.jsx(t,{color:"critical",label:"Removed",size:"sm"})]}),`
`,o.jsx(e.p,{children:"Has been removed."}),`
`,o.jsxs(e.p,{children:["Clipboard is now ",o.jsx(e.code,{children:"inline-block"}),` by default.
You can add some style directly on the component if you want to override that.`]}),`
`,o.jsxs(e.p,{children:[o.jsx(e.code,{children:"labelCopy"})," ",o.jsx(t,{color:"success",label:"New",size:"sm"})]}),`
`,o.jsx(e.p,{children:"New attribute (optional)."}),`
`,o.jsx(e.p,{children:"Use this to customize the label on the tooltip when hovering before any copy action is triggered."}),`
`,o.jsxs(e.p,{children:[o.jsx(e.code,{children:"labelCopySuccess"})," ",o.jsx(t,{color:"success",label:"New",size:"sm"})]}),`
`,o.jsx(e.p,{children:"New attribute (optional)."}),`
`,o.jsx(e.p,{children:"Use this to customize the label on the tooltip when a successful copy did happen."}),`
`,o.jsx(r,{label:"Migration examples",level:2}),`
`,o.jsx(e.p,{children:"Disabled clipboard:"}),`
`,o.jsx(s,{code:`
<osds-clipboard disabled>
</osds-clipboard>

<!-- is now -->

<ods-clipboard is-disabled>
</ods-clipboard>
`,dark:"true",language:"html"}),`
`,o.jsx(e.p,{children:"Inline clipboard:"}),`
`,o.jsx(s,{code:`
<osds-clipboard inline>
</osds-clipboard>

<!-- is now -->

<ods-clipboard>
</ods-clipboard>
`,dark:"true",language:"html"}),`
`,o.jsx(e.p,{children:"Custom labels:"}),`
`,o.jsx(s,{code:`
<osds-clipboard>
  Copier le contenu
  <span slot='success-message'>Copié !</span>
</osds-clipboard>

<!-- is now -->

<ods-clipboard label-copy="Copier le contenu"
               label-copy-success="Copié !">
</ods-clipboard>
`,dark:"true",language:"html"})]})}function jo(i={}){const{wrapper:e}={...l(),...i.components};return e?o.jsx(e,{...i,children:o.jsx(n,{...i})}):n(i)}export{jo as default};
