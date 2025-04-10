import{j as t,M as p,d as r}from"./index-F50bSMiK.js";import{u as l}from"./index-Cdh-ijYL.js";import{O as i}from"./index-BWmQNpQ0.js";import{T as d}from"./tooltip.stories-Cer849J-.js";import{H as n}from"./Heading-Bsa3zsN6.js";import"./iframe-BE5s5kjT.js";import"../sb-preview/runtime.js";import"./index-8AfNH5n5.js";import"./index-D-8MO0q_.js";import"./index-DrFu-skq.js";import"./ods-accordion2-vvZNAi9U.js";import"./index-DAZhnxgO.js";import"./icon-name-C6aMXAXT.js";import"./ods-icon2-DRPHarK1.js";import"./ods-badge-CjbpLGl8.js";import"./ods-breadcrumb-item2-C_Ah5FZN.js";import"./ods-link2-CtVFUlMR.js";import"./ods-button2-dPaqs0uX.js";import"./ods-spinner2-CPyWCS2f.js";import"./ods-card-DRGl4_I-.js";import"./ods-checkbox2-B2XbvOPY.js";import"./dom-8hoR-urs.js";import"./ods-clipboard2-Baifk8Bb.js";import"./ods-input2-CtkWk4I-.js";import"./type-B5zI8QxY.js";import"./ods-tooltip2-CW12aP9b.js";import"./overlay-KZpfSxWH.js";import"./ods-code2-D4zmvcg_.js";import"./ods-combobox2-CcOfmmHm.js";import"./_commonjsHelpers-CLD5em3H.js";import"./debounce-DRefBDpX.js";import"./ods-tag2-Bb2BMy9d.js";import"./ods-datepicker2-FisogS88.js";import"./locale-NOa-Gxlr.js";import"./ods-divider-CjaMxjcH.js";import"./ods-divider2-R3gNNk4H.js";import"./ods-drawer2-BQqpNIWL.js";import"./ods-file-upload2-teF1qz6H.js";import"./ods-progress-bar2-zR9YGHZb.js";import"./ods-form-field2-BSNGPVxz.js";import"./ods-icon-DTp5PnPI.js";import"./ods-input-COMKDAZi.js";import"./ods-link-BCeMi6SV.js";import"./ods-medium2-BnayTic8.js";import"./ods-message-BxLNJd0H.js";import"./ods-modal2-BQO4yvXA.js";import"./ods-pagination2-BkxTbhCC.js";import"./ods-select2-C8koqTnw.js";import"./ods-password2-aWfdhtsQ.js";import"./ods-phone-number2-Cl3w5q8v.js";import"./ods-popover2-D09FwiGN.js";import"./ods-quantity2-BgFzW1u9.js";import"./ods-radio2-C2vNRNiP.js";import"./ods-range2-l-uevN51.js";import"./ods-skeleton2-B7sDasgF.js";import"./ods-switch-item2-ebcV2EUF.js";import"./ods-tabs2-BNbhFfmR.js";import"./ods-table2-oe37kiP3.js";import"./ods-text-BO_pN8NQ.js";import"./ods-textarea2-BDOVTqwb.js";import"./ods-timepicker2-DSjpZYdI.js";import"./ods-toggle2-Bg02aln1.js";import"./index-DZK8KyWG.js";import"./controls-DX883vx3.js";import"./unsafe-html-VJzuFJfF.js";function s(e){const o={code:"code",p:"p",...l(),...e.components};return t.jsxs(t.Fragment,{children:[t.jsx(p,{of:d,name:"Migration From 17.x"}),`
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
