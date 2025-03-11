import{j as e,M as l,d as r}from"./index-CMHv63WF.js";import{u as d}from"./index-CavMhwFB.js";import{O as n}from"./index-BDosBUxz.js";import{B as a}from"./badge.stories-CBtjTYcn.js";import{H as s}from"./Heading-Drr0F75o.js";import"./iframe-CW-8tKo2.js";import"../sb-preview/runtime.js";import"./index-8AfNH5n5.js";import"./index-D-8MO0q_.js";import"./index-DrFu-skq.js";import"./ods-accordion2-C_uqOg6Y.js";import"./index-DAZhnxgO.js";import"./icon-name-C6aMXAXT.js";import"./ods-icon2-DRPHarK1.js";import"./ods-badge-DLluvt0I.js";import"./ods-breadcrumb-item2-C_Ah5FZN.js";import"./ods-link2-CtVFUlMR.js";import"./ods-button2-dPaqs0uX.js";import"./ods-spinner2-CPyWCS2f.js";import"./ods-card-CsxtEQHf.js";import"./ods-checkbox2-CJl-a8ad.js";import"./dom-8hoR-urs.js";import"./ods-clipboard2-CewZJu-c.js";import"./ods-input2-C6KOqFAM.js";import"./type-B5zI8QxY.js";import"./ods-tooltip2-CW12aP9b.js";import"./overlay-KZpfSxWH.js";import"./ods-code2-BL2TW0HP.js";import"./ods-combobox2-BAtyPzTJ.js";import"./_commonjsHelpers-CLD5em3H.js";import"./debounce-DRefBDpX.js";import"./ods-tag2-Bb2BMy9d.js";import"./ods-datepicker2-CijAhCPy.js";import"./locale-NOa-Gxlr.js";import"./ods-divider-Dtiri0aY.js";import"./ods-divider2-yzIshch6.js";import"./ods-drawer2-DKhK7oOX.js";import"./ods-file-upload2-Ca3mZ5BD.js";import"./ods-progress-bar2-Dg_V5kiw.js";import"./ods-form-field2-BDYkM6lU.js";import"./ods-icon-DTp5PnPI.js";import"./ods-input-CCQ46ZEm.js";import"./ods-link-BCeMi6SV.js";import"./ods-medium2-BnayTic8.js";import"./ods-message-DuyDaLcv.js";import"./ods-modal2-DCK89o-L.js";import"./ods-pagination2-shUGU0gB.js";import"./ods-select2-CEKvSxa4.js";import"./ods-password2-D64-z8ym.js";import"./ods-phone-number2-BL58mHzY.js";import"./ods-popover2-mGbx5HiL.js";import"./ods-quantity2-7U22nj6z.js";import"./ods-radio2-DDJaSdNS.js";import"./ods-range2-wBjnlon-.js";import"./ods-skeleton2-B7sDasgF.js";import"./ods-switch-item2-D-SJNcDd.js";import"./ods-tabs2-ChMEr-fQ.js";import"./ods-table2-oe37kiP3.js";import"./ods-text-BO_pN8NQ.js";import"./ods-textarea2-BDOVTqwb.js";import"./ods-timepicker2-DVnCnUkw.js";import"./ods-toggle2-Bg02aln1.js";import"./index-BLVG44ao.js";import"./controls-DX883vx3.js";function t(i){const o={code:"code",li:"li",p:"p",ul:"ul",...d(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{of:a,name:"Migration From 17.x"}),`
`,e.jsx(s,{label:"Badge - migrate from v17 to v18",level:1}),`
`,e.jsx(s,{label:"Usage changes",level:2}),`
`,e.jsx(o.p,{children:"Previous to v18, Badge component was actually a Chip component with specific properties set."}),`
`,e.jsx(o.p,{children:"Chip has been split into two new components (Tag and Badge):"}),`
`,e.jsxs(o.ul,{children:[`
`,e.jsx(o.li,{children:"use Tag when you need an interactive Chip that can be removed."}),`
`,e.jsx(o.li,{children:"use Badge when you need a presentational Chip."}),`
`]}),`
`,e.jsx(o.p,{children:"On Chip component, slots were used to allow any content to be put inside the chip."}),`
`,e.jsx(o.p,{children:"The new badge design enforces the usage of only text as the main content, with an optional icon on the left side."}),`
`,e.jsxs(o.p,{children:["Therefore, slots have been replaced by two attributes: ",e.jsx(o.code,{children:"label"})," and ",e.jsx(o.code,{children:"icon"}),"."]}),`
`,e.jsx(r,{code:`
<osds-chip>
  <osds-icon name="star"></osds-icon>
  My badge
</osds-chip>
`,dark:"true",language:"html"}),`
`,e.jsx(o.p,{children:"The same result would now be achieved using:"}),`
`,e.jsx(r,{code:`
<ods-badge icon="star"
           label="My badge">
</ods-badge>
`,dark:"true",language:"html"}),`
`,e.jsx(s,{label:"Attributes changes",level:2}),`
`,e.jsxs(o.p,{children:[e.jsx(o.code,{children:"contrasted"})," ",e.jsx(n,{color:"critical",label:"Removed",size:"sm"})]}),`
`,e.jsx(o.p,{children:"Has been removed."}),`
`,e.jsx(o.p,{children:"You can use the style customization to achieve the same result, until a new color get validated by the design team."}),`
`,e.jsxs(o.p,{children:[e.jsx(o.code,{children:"color"})," ",e.jsx(n,{color:"information",label:"Updated",size:"sm"})]}),`
`,e.jsx(o.p,{children:"Has been updated."}),`
`,e.jsxs(o.p,{children:[e.jsx(o.code,{children:"default"})," is now ",e.jsx(o.code,{children:"neutral"}),", ",e.jsx(o.code,{children:"info"})," is now ",e.jsx(o.code,{children:"information"}),", ",e.jsx(o.code,{children:"error"})," is now ",e.jsx(o.code,{children:"critical"}),"."]}),`
`,e.jsxs(o.p,{children:["New variants ",e.jsx(o.code,{children:"alpha"}),", ",e.jsx(o.code,{children:"beta"}),", ",e.jsx(o.code,{children:"new"})," and ",e.jsx(o.code,{children:"promotion"})," were added."]}),`
`,e.jsxs(o.p,{children:[e.jsx(o.code,{children:"disabled"})," ",e.jsx(n,{color:"critical",label:"Removed",size:"sm"})]}),`
`,e.jsx(o.p,{children:"Has been removed."}),`
`,e.jsx(o.p,{children:"Badges are not interactive element anymore."}),`
`,e.jsxs(o.p,{children:[e.jsx(o.code,{children:"icon"})," ",e.jsx(n,{color:"success",label:"New",size:"sm"})]}),`
`,e.jsx(o.p,{children:"New attribute (optional)."}),`
`,e.jsx(o.p,{children:"Allow you to render an icon on the left side of the badge."}),`
`,e.jsxs(o.p,{children:[e.jsx(o.code,{children:"inline"})," ",e.jsx(n,{color:"critical",label:"Removed",size:"sm"})]}),`
`,e.jsx(o.p,{children:"Has been removed."}),`
`,e.jsx(o.p,{children:"Badges are inline by default. If you need to change this, you can use the style customization."}),`
`,e.jsxs(o.p,{children:[e.jsx(o.code,{children:"label"})," ",e.jsx(n,{color:"success",label:"New",size:"sm"})]}),`
`,e.jsx(o.p,{children:"New attribute (required)."}),`
`,e.jsx(o.p,{children:"The label you want to render in the badge."}),`
`,e.jsxs(o.p,{children:[e.jsx(o.code,{children:"removable"})," ",e.jsx(n,{color:"critical",label:"Removed",size:"sm"})]}),`
`,e.jsx(o.p,{children:"Has been removed."}),`
`,e.jsx(o.p,{children:"Badges are not interactive element anymore."}),`
`,e.jsxs(o.p,{children:[e.jsx(o.code,{children:"selectable"})," ",e.jsx(n,{color:"critical",label:"Removed",size:"sm"})]}),`
`,e.jsx(o.p,{children:"Has been removed."}),`
`,e.jsx(o.p,{children:"Badges are not interactive element anymore."}),`
`,e.jsx(s,{label:"Migration examples",level:2}),`
`,e.jsx(o.p,{children:"Basic badge:"}),`
`,e.jsx(r,{code:`
<osds-chip>
  My badge
</osds-chip>

<!-- is now -->

<ods-badge label="My badge">
</ods-badge>
`,dark:"true",language:"html"}),`
`,e.jsx(o.p,{children:"Color badge:"}),`
`,e.jsx(r,{code:`
<osds-chip color="info">
</osds-chip>

<!-- is now -->

<ods-badge color="information">
</ods-badge>
`,dark:"true",language:"html"}),`
`,e.jsx(o.p,{children:"Inline badge:"}),`
`,e.jsx(r,{code:`
<osds-chip inline>
  My badge
</osds-chip>

<!-- is now -->

<ods-badge label="My badge">
</ods-badge>
`,dark:"true",language:"html"})]})}function ve(i={}){const{wrapper:o}={...d(),...i.components};return o?e.jsx(o,{...i,children:e.jsx(t,{...i})}):t(i)}export{ve as default};
