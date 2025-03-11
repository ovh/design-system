import{j as t,M as p,d as r}from"./index-BCVJDEqf.js";import{u as l}from"./index-_YJSRz3a.js";import{O as i}from"./index-CwrMpZKn.js";import{T as d}from"./tooltip.stories-CEmaGysh.js";import{H as n}from"./Heading-DYNNEBec.js";import"./iframe-B5YUgUg3.js";import"../sb-preview/runtime.js";import"./index-8AfNH5n5.js";import"./index-D-8MO0q_.js";import"./index-DrFu-skq.js";import"./ods-accordion2-C_uqOg6Y.js";import"./index-DAZhnxgO.js";import"./icon-name-C6aMXAXT.js";import"./ods-icon2-DRPHarK1.js";import"./ods-badge-DLluvt0I.js";import"./ods-breadcrumb-item2-C_Ah5FZN.js";import"./ods-link2-CtVFUlMR.js";import"./ods-button2-dPaqs0uX.js";import"./ods-spinner2-CPyWCS2f.js";import"./ods-card-CsxtEQHf.js";import"./ods-checkbox2-CJl-a8ad.js";import"./dom-8hoR-urs.js";import"./ods-clipboard2-CewZJu-c.js";import"./ods-input2-C6KOqFAM.js";import"./type-B5zI8QxY.js";import"./ods-tooltip2-CW12aP9b.js";import"./overlay-KZpfSxWH.js";import"./ods-code2-BL2TW0HP.js";import"./ods-combobox2-BXJ8jrhz.js";import"./_commonjsHelpers-CLD5em3H.js";import"./debounce-DRefBDpX.js";import"./ods-tag2-Bb2BMy9d.js";import"./ods-datepicker2-CijAhCPy.js";import"./locale-NOa-Gxlr.js";import"./ods-divider-Dtiri0aY.js";import"./ods-divider2-yzIshch6.js";import"./ods-drawer2-DKhK7oOX.js";import"./ods-file-upload2-Ca3mZ5BD.js";import"./ods-progress-bar2-Dg_V5kiw.js";import"./ods-form-field2-BDYkM6lU.js";import"./ods-icon-DTp5PnPI.js";import"./ods-input-CCQ46ZEm.js";import"./ods-link-BCeMi6SV.js";import"./ods-medium2-BnayTic8.js";import"./ods-message-DuyDaLcv.js";import"./ods-modal2-DCK89o-L.js";import"./ods-pagination2-shUGU0gB.js";import"./ods-select2-CEKvSxa4.js";import"./ods-password2-D64-z8ym.js";import"./ods-phone-number2-BL58mHzY.js";import"./ods-popover2-mGbx5HiL.js";import"./ods-quantity2-7U22nj6z.js";import"./ods-radio2-DDJaSdNS.js";import"./ods-range2-wBjnlon-.js";import"./ods-skeleton2-B7sDasgF.js";import"./ods-switch-item2-D-SJNcDd.js";import"./ods-tabs2-ChMEr-fQ.js";import"./ods-table2-oe37kiP3.js";import"./ods-text-BO_pN8NQ.js";import"./ods-textarea2-BDOVTqwb.js";import"./ods-timepicker2-DVnCnUkw.js";import"./ods-toggle2-Bg02aln1.js";import"./index-BLVG44ao.js";import"./controls-DX883vx3.js";import"./unsafe-html-VJzuFJfF.js";function s(e){const o={code:"code",p:"p",...l(),...e.components};return t.jsxs(t.Fragment,{children:[t.jsx(p,{of:d,name:"Migration From 17.x"}),`
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
`,dark:"true",language:"html"})]})}function ft(e={}){const{wrapper:o}={...l(),...e.components};return o?t.jsx(o,{...e,children:t.jsx(s,{...e})}):s(e)}export{ft as default};
