import{j as e,M as l,d as n}from"./index-DQsySnuC.js";import{u as a}from"./index-Xj8pMhSr.js";import{O as t}from"./index-CihiY_f6.js";import{T as d}from"./tag.stories-DDAuxNfu.js";import{H as s}from"./Heading-DDc_MF2r.js";import"./iframe-DRtgxPEL.js";import"../sb-preview/runtime.js";import"./index-8AfNH5n5.js";import"./index-D-8MO0q_.js";import"./index-DrFu-skq.js";import"./ods-accordion2-Bgg69lRV.js";import"./index-DAZhnxgO.js";import"./icon-name-C6aMXAXT.js";import"./ods-icon2-Bl6f3POv.js";import"./ods-badge-tHc24Eg4.js";import"./ods-breadcrumb-item2-CoLTn2CF.js";import"./ods-link2-DDMr4sUm.js";import"./ods-button2-Bhm26DQr.js";import"./ods-spinner2-DCN2yKlT.js";import"./ods-card-B_VebKXk.js";import"./ods-checkbox2-BOuFx8yF.js";import"./dom-CO1DdTQY.js";import"./ods-clipboard2-NuJn2ry3.js";import"./ods-input2-B9cw61K_.js";import"./type-B5zI8QxY.js";import"./ods-tooltip2-BwzEvmuE.js";import"./overlay-KZpfSxWH.js";import"./ods-code2-bZeM2NI-.js";import"./ods-datepicker2-DwwUrg1C.js";import"./locale-NOa-Gxlr.js";import"./ods-divider-3cgmT4wP.js";import"./ods-divider2-Dc25YIYb.js";import"./ods-drawer2-DsENZFv4.js";import"./ods-file-upload2-CPd6D9Z5.js";import"./ods-progress-bar2-BuFm8qT0.js";import"./ods-form-field2-Tc9B1-rj.js";import"./ods-icon-NURRZ9Mf.js";import"./ods-link-BE9dMQzg.js";import"./ods-medium2-BB_NU63C.js";import"./ods-message-B9bD81Bu.js";import"./ods-modal2-CP36WQeg.js";import"./ods-pagination2-CotgNPzL.js";import"./ods-select2-B4wr0dem.js";import"./ods-password2-BQKXsiEd.js";import"./ods-phone-number2-D1K1HcDS.js";import"./ods-popover2-hre_XUC2.js";import"./ods-quantity2-DOjRn13r.js";import"./ods-radio2-BtBodUES.js";import"./ods-range2-BhwU834C.js";import"./ods-skeleton2-dZcgHYAN.js";import"./ods-switch-item2-m1p75_3x.js";import"./ods-tabs2-wJlXfoZt.js";import"./ods-table2-vWlGUOoj.js";import"./ods-tag2-Dj0-zHXw.js";import"./ods-text-CTeC-41B.js";import"./ods-textarea2-BHQdu6bK.js";import"./ods-timepicker2-2oCWgeQp.js";import"./ods-toggle2-DbSuYqWU.js";import"./index-DCBH0_Tl.js";import"./controls-DX883vx3.js";function r(i){const o={code:"code",li:"li",p:"p",ul:"ul",...a(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{of:d,name:"Migration From 17.x"}),`
`,e.jsx(s,{label:"Tag - migrate from v17 to v18",level:1}),`
`,e.jsx(s,{label:"Usage changes",level:2}),`
`,e.jsx(o.p,{children:"Previous to v18, Tag component was actually a Chip component with specific properties set."}),`
`,e.jsx(o.p,{children:"Chip has been split into two new components (Tag and Badge):"}),`
`,e.jsxs(o.ul,{children:[`
`,e.jsx(o.li,{children:"use Tag when you need an interactive Chip that can be removed."}),`
`,e.jsx(o.li,{children:"use Badge when you need a presentational Chip."}),`
`]}),`
`,e.jsx(o.p,{children:"On Chip component, slots were used to allow any content to be put inside the chip."}),`
`,e.jsx(o.p,{children:"The new tag design enforces the usage of only text as the main content, with an optional icon on the left side."}),`
`,e.jsxs(o.p,{children:["Therefore, slots have been replaced by two attributes: ",e.jsx(o.code,{children:"label"})," and ",e.jsx(o.code,{children:"icon"}),"."]}),`
`,e.jsx(n,{code:`
<osds-chip removable>
  <osds-icon name="star"></osds-icon>
  My tag
</osds-chip>
`,dark:"true",language:"html"}),`
`,e.jsx(o.p,{children:"The same result would now be achieved using:"}),`
`,e.jsx(n,{code:`
<ods-tag icon="star"
         label="My tag">
</ods-tag>
`,dark:"true",language:"html"}),`
`,e.jsx(s,{label:"Attributes changes",level:2}),`
`,e.jsxs(o.p,{children:[e.jsx(o.code,{children:"contrasted"})," ",e.jsx(t,{color:"critical",label:"Removed",size:"sm"})]}),`
`,e.jsx(o.p,{children:"Has been removed."}),`
`,e.jsx(o.p,{children:"You can use the style customization to achieve the same result, until a new color get validated by the design team."}),`
`,e.jsxs(o.p,{children:[e.jsx(o.code,{children:"disabled"})," ",e.jsx(t,{color:"information",label:"Updated",size:"sm"})]}),`
`,e.jsx(o.p,{children:"Has been updated."}),`
`,e.jsxs(o.p,{children:["You can use the new ",e.jsx(o.code,{children:"isDisabled"})," attribute to obtain the same behavior."]}),`
`,e.jsxs(o.p,{children:[e.jsx(o.code,{children:"icon"})," ",e.jsx(t,{color:"success",label:"New",size:"sm"})]}),`
`,e.jsx(o.p,{children:"New attribute (optional)."}),`
`,e.jsx(o.p,{children:"Allow you to render an icon on the left side of the tag."}),`
`,e.jsxs(o.p,{children:[e.jsx(o.code,{children:"inline"})," ",e.jsx(t,{color:"critical",label:"Removed",size:"sm"})]}),`
`,e.jsx(o.p,{children:"Has been removed."}),`
`,e.jsx(o.p,{children:"Tags are inline by default. If you need to change this, you can use the style customization."}),`
`,e.jsxs(o.p,{children:[e.jsx(o.code,{children:"label"})," ",e.jsx(t,{color:"success",label:"New",size:"sm"})]}),`
`,e.jsx(o.p,{children:"New attribute (required)."}),`
`,e.jsx(o.p,{children:"The label you want to render in the tag."}),`
`,e.jsxs(o.p,{children:[e.jsx(o.code,{children:"removable"})," ",e.jsx(t,{color:"critical",label:"Removed",size:"sm"})]}),`
`,e.jsx(o.p,{children:"Has been removed."}),`
`,e.jsx(o.p,{children:"Tag are all removable. If you want to display information without the removal, use the Badge component."}),`
`,e.jsxs(o.p,{children:[e.jsx(o.code,{children:"selectable"})," ",e.jsx(t,{color:"critical",label:"Removed",size:"sm"})]}),`
`,e.jsx(o.p,{children:"Has been removed."}),`
`,e.jsx(o.p,{children:`Tag are not meant to be selected.
You may eventually mimic previous behavior using some style customization,
but we'll advise to reach out the design team before doing so.`}),`
`,e.jsx(s,{label:"Migration examples",level:2}),`
`,e.jsx(o.p,{children:"Basic tag:"}),`
`,e.jsx(n,{code:`
<osds-chip>
  My tag
</osds-chip>

<!-- is now -->

<ods-tag label="My tag">
</ods-tag>
`,dark:"true",language:"html"}),`
`,e.jsx(o.p,{children:"Disabled tag:"}),`
`,e.jsx(n,{code:`
<osds-chip disabled>
  My tag
</osds-chip>

<!-- is now -->

<ods-tag label="My tag" is-disabled>
</ods-tag>
`,dark:"true",language:"html"}),`
`,e.jsx(o.p,{children:"Inline tag:"}),`
`,e.jsx(n,{code:`
<osds-chip inline>
  My tag
</osds-chip>

<!-- is now -->

<ods-tag label="My tag">
</ods-tag>
`,dark:"true",language:"html"})]})}function je(i={}){const{wrapper:o}={...a(),...i.components};return o?e.jsx(o,{...i,children:e.jsx(r,{...i})}):r(i)}export{je as default};
