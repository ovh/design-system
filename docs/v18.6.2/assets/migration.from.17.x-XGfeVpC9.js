import{j as e,M as l,d as n}from"./index-F50bSMiK.js";import{u as a}from"./index-Cdh-ijYL.js";import{O as t}from"./index-BWmQNpQ0.js";import{T as d}from"./tag.stories-D9815OG8.js";import{H as s}from"./Heading-Bsa3zsN6.js";import"./iframe-BE5s5kjT.js";import"../sb-preview/runtime.js";import"./index-8AfNH5n5.js";import"./index-D-8MO0q_.js";import"./index-DrFu-skq.js";import"./ods-accordion2-vvZNAi9U.js";import"./index-DAZhnxgO.js";import"./icon-name-C6aMXAXT.js";import"./ods-icon2-DRPHarK1.js";import"./ods-badge-CjbpLGl8.js";import"./ods-breadcrumb-item2-C_Ah5FZN.js";import"./ods-link2-CtVFUlMR.js";import"./ods-button2-dPaqs0uX.js";import"./ods-spinner2-CPyWCS2f.js";import"./ods-card-DRGl4_I-.js";import"./ods-checkbox2-B2XbvOPY.js";import"./dom-8hoR-urs.js";import"./ods-clipboard2-Baifk8Bb.js";import"./ods-input2-CtkWk4I-.js";import"./type-B5zI8QxY.js";import"./ods-tooltip2-CW12aP9b.js";import"./overlay-KZpfSxWH.js";import"./ods-code2-D4zmvcg_.js";import"./ods-combobox2-CcOfmmHm.js";import"./_commonjsHelpers-CLD5em3H.js";import"./debounce-DRefBDpX.js";import"./ods-tag2-Bb2BMy9d.js";import"./ods-datepicker2-FisogS88.js";import"./locale-NOa-Gxlr.js";import"./ods-divider-CjaMxjcH.js";import"./ods-divider2-R3gNNk4H.js";import"./ods-drawer2-BQqpNIWL.js";import"./ods-file-upload2-teF1qz6H.js";import"./ods-progress-bar2-zR9YGHZb.js";import"./ods-form-field2-BSNGPVxz.js";import"./ods-icon-DTp5PnPI.js";import"./ods-input-COMKDAZi.js";import"./ods-link-BCeMi6SV.js";import"./ods-medium2-BnayTic8.js";import"./ods-message-BxLNJd0H.js";import"./ods-modal2-BQO4yvXA.js";import"./ods-pagination2-BkxTbhCC.js";import"./ods-select2-C8koqTnw.js";import"./ods-password2-aWfdhtsQ.js";import"./ods-phone-number2-Cl3w5q8v.js";import"./ods-popover2-D09FwiGN.js";import"./ods-quantity2-BgFzW1u9.js";import"./ods-radio2-C2vNRNiP.js";import"./ods-range2-l-uevN51.js";import"./ods-skeleton2-B7sDasgF.js";import"./ods-switch-item2-ebcV2EUF.js";import"./ods-tabs2-BNbhFfmR.js";import"./ods-table2-oe37kiP3.js";import"./ods-text-BO_pN8NQ.js";import"./ods-textarea2-BDOVTqwb.js";import"./ods-timepicker2-DSjpZYdI.js";import"./ods-toggle2-Bg02aln1.js";import"./index-DZK8KyWG.js";import"./controls-DX883vx3.js";function r(i){const o={code:"code",li:"li",p:"p",ul:"ul",...a(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{of:d,name:"Migration From 17.x"}),`
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
`,dark:"true",language:"html"})]})}function we(i={}){const{wrapper:o}={...a(),...i.components};return o?e.jsx(o,{...i,children:e.jsx(r,{...i})}):r(i)}export{we as default};
