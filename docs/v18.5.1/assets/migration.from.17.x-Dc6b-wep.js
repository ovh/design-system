import{j as t,M as p,d as r}from"./index-DQsySnuC.js";import{u as l}from"./index-Xj8pMhSr.js";import{O as i}from"./index-CihiY_f6.js";import{T as d}from"./tooltip.stories-R0bVlYQ7.js";import{H as n}from"./Heading-DDc_MF2r.js";import"./iframe-DRtgxPEL.js";import"../sb-preview/runtime.js";import"./index-8AfNH5n5.js";import"./index-D-8MO0q_.js";import"./index-DrFu-skq.js";import"./ods-accordion2-Bgg69lRV.js";import"./index-DAZhnxgO.js";import"./icon-name-C6aMXAXT.js";import"./ods-icon2-Bl6f3POv.js";import"./ods-badge-tHc24Eg4.js";import"./ods-breadcrumb-item2-CoLTn2CF.js";import"./ods-link2-DDMr4sUm.js";import"./ods-button2-Bhm26DQr.js";import"./ods-spinner2-DCN2yKlT.js";import"./ods-card-B_VebKXk.js";import"./ods-checkbox2-BOuFx8yF.js";import"./dom-CO1DdTQY.js";import"./ods-clipboard2-NuJn2ry3.js";import"./ods-input2-B9cw61K_.js";import"./type-B5zI8QxY.js";import"./ods-tooltip2-BwzEvmuE.js";import"./overlay-KZpfSxWH.js";import"./ods-code2-bZeM2NI-.js";import"./ods-datepicker2-DwwUrg1C.js";import"./locale-NOa-Gxlr.js";import"./ods-divider-3cgmT4wP.js";import"./ods-divider2-Dc25YIYb.js";import"./ods-drawer2-DsENZFv4.js";import"./ods-file-upload2-CPd6D9Z5.js";import"./ods-progress-bar2-BuFm8qT0.js";import"./ods-form-field2-Tc9B1-rj.js";import"./ods-icon-NURRZ9Mf.js";import"./ods-link-BE9dMQzg.js";import"./ods-medium2-BB_NU63C.js";import"./ods-message-B9bD81Bu.js";import"./ods-modal2-CP36WQeg.js";import"./ods-pagination2-CotgNPzL.js";import"./ods-select2-B4wr0dem.js";import"./ods-password2-BQKXsiEd.js";import"./ods-phone-number2-D1K1HcDS.js";import"./ods-popover2-hre_XUC2.js";import"./ods-quantity2-DOjRn13r.js";import"./ods-radio2-BtBodUES.js";import"./ods-range2-BhwU834C.js";import"./ods-skeleton2-dZcgHYAN.js";import"./ods-switch-item2-m1p75_3x.js";import"./ods-tabs2-wJlXfoZt.js";import"./ods-table2-vWlGUOoj.js";import"./ods-tag2-Dj0-zHXw.js";import"./ods-text-CTeC-41B.js";import"./ods-textarea2-BHQdu6bK.js";import"./ods-timepicker2-2oCWgeQp.js";import"./ods-toggle2-DbSuYqWU.js";import"./index-DCBH0_Tl.js";import"./controls-DX883vx3.js";import"./unsafe-html-VJzuFJfF.js";function s(e){const o={code:"code",p:"p",...l(),...e.components};return t.jsxs(t.Fragment,{children:[t.jsx(p,{of:d,name:"Migration From 17.x"}),`
`,t.jsx(n,{label:"Tooltip - migrate from v17 to v18",level:1}),`
`,t.jsx(n,{label:"Usage changes",level:2}),`
`,t.jsx(o.p,{children:"The tooltip usage has changed a bit regarding the trigger element declaration."}),`
`,t.jsx(o.p,{children:"Previously, the trigger element was declared inside the web-component as its main slot content."}),`
`,t.jsxs(o.p,{children:["The tooltip content was declared using a ",t.jsx(o.code,{children:"osds-tooltip-content"})," with the slot ",t.jsx(o.code,{children:"tooltip-content"})," parameter."]}),`
`,t.jsx(o.p,{children:"This was causing an issue of double focus when the trigger used was a focusable element."}),`
`,t.jsx(o.p,{children:"To fix that and give a bit more flexibility about how you organize your DOM, the trigger is now declared outside of the web-component."}),`
`,t.jsxs(o.p,{children:["The only requirement is to give this element an ",t.jsx(o.code,{children:"id"})," so that the tooltip can get attached to it using the new attribute ",t.jsx(o.code,{children:"trigger-id"}),"."]}),`
`,t.jsx(o.p,{children:"Here is an example of the previous declaration:"}),`
`,t.jsx(r,{code:`
<osds-tooltip>
  <div>
    Hover me
  </div>

  <osds-tooltip-content slot="tooltip-content">
    Tooltip content
  </osds-tooltip-content>
</osds-tooltip>
`,dark:"true",language:"html"}),`
`,t.jsx(o.p,{children:"The same result would now be achieved using:"}),`
`,t.jsx(r,{code:`
<div id="tooltip-trigger">
  Hover me
</div>

<ods-tooltip trigger-id="tooltip-trigger">
  Tooltip content
</ods-tooltip>
`,dark:"true",language:"html"}),`
`,t.jsx(n,{label:"Attributes changes",level:2}),`
`,t.jsxs(o.p,{children:[t.jsx(o.code,{children:"position"})," ",t.jsx(i,{color:"success",label:"New",size:"sm"})]}),`
`,t.jsx(o.p,{children:"New attribute (optional)."}),`
`,t.jsx(o.p,{children:`You can choose a specific position for the tooltip. In case there is not enough space, it will automatically fallback
to another position where the whole content can be displayed.`}),`
`,t.jsxs(o.p,{children:[t.jsx(o.code,{children:"shadowDomTriggerId"})," ",t.jsx(i,{color:"success",label:"New",size:"sm"})]}),`
`,t.jsx(o.p,{children:"New attribute (optional)."}),`
`,t.jsxs(o.p,{children:["If your trigger element is hidden inside a shadow DOM, you can provide a specific id (in combination with ",t.jsx(o.code,{children:"triggerId"}),`)
to point to the element inside the shadow DOM of the trigger element.`]}),`
`,t.jsx(o.p,{children:"You usually won't have to use this attribute."}),`
`,t.jsx(o.p,{children:"You can find an usage example in the clipboard element implementation."}),`
`,t.jsxs(o.p,{children:[t.jsx(o.code,{children:"triggerId"})," ",t.jsx(i,{color:"success",label:"New",size:"sm"})]}),`
`,t.jsx(o.p,{children:"New attribute (required)."}),`
`,t.jsx(o.p,{children:"Id of the HTML element that serves as the tooltip trigger."}),`
`,t.jsxs(o.p,{children:[t.jsx(o.code,{children:"variant"})," ",t.jsx(i,{color:"critical",label:"Removed",size:"sm"})]}),`
`,t.jsx(o.p,{children:"Has been removed."}),`
`,t.jsxs(o.p,{children:["You can use the new ",t.jsx(o.code,{children:"with-arrow"})," attribute to render either the standard or tip previous variant."]}),`
`,t.jsxs(o.p,{children:[t.jsx(o.code,{children:"with-arrow"})," ",t.jsx(i,{color:"success",label:"New",size:"sm"})]}),`
`,t.jsx(o.p,{children:"New attribute (optional)."}),`
`,t.jsxs(o.p,{children:["Set it to ",t.jsx(o.code,{children:"true"})," if you want to add an arrow to the tooltip."]}),`
`,t.jsx(n,{label:"Migration examples",level:2}),`
`,t.jsx(o.p,{children:"Basic tooltip:"}),`
`,t.jsx(r,{code:`
<osds-tooltip>
  <div>
    Hover me
  </div>

  <osds-tooltip-content slot="tooltip-content">
    Tooltip content
  </osds-tooltip-content>
</osds-tooltip>

<!-- is now -->

<div id="tooltip-trigger">
  Hover me
</div>

<ods-tooltip trigger-id="tooltip-trigger">
  Tooltip content
</ods-tooltip>
`,dark:"true",language:"html"}),`
`,t.jsx(o.p,{children:"Arrow tooltip:"}),`
`,t.jsx(r,{code:`
<osds-tooltip variant="tip">
  <div>
    Hover me
  </div>

  <osds-tooltip-content slot="tooltip-content">
    Tooltip content
  </osds-tooltip-content>
</osds-tooltip>

<!-- is now -->

<div id="tooltip-trigger">
  Hover me
</div>

<ods-tooltip trigger-id="tooltip-trigger"
             with-arrow>
  Tooltip content
</ods-tooltip>
`,dark:"true",language:"html"})]})}function jt(e={}){const{wrapper:o}={...l(),...e.components};return o?t.jsx(o,{...e,children:t.jsx(s,{...e})}):s(e)}export{jt as default};
