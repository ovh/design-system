import{j as o,M as d,d as s}from"./index-DHunZMd9.js";import{u as n}from"./index-DogUcu-a.js";import{O as r}from"./index-CuZhG6y0.js";import{P as l}from"./popover.stories-Dwkd-KEp.js";import{H as i}from"./Heading-BEqqWbQS.js";import"./iframe-CrJ6auLd.js";import"../sb-preview/runtime.js";import"./index-8AfNH5n5.js";import"./index-D-8MO0q_.js";import"./index-DrFu-skq.js";import"./ods-accordion2-vvZNAi9U.js";import"./index-DAZhnxgO.js";import"./icon-name-C6aMXAXT.js";import"./ods-icon2-DRPHarK1.js";import"./ods-badge-CjbpLGl8.js";import"./ods-breadcrumb-item2-C_Ah5FZN.js";import"./ods-link2-CtVFUlMR.js";import"./ods-button2-dPaqs0uX.js";import"./ods-spinner2-CPyWCS2f.js";import"./ods-card-DRGl4_I-.js";import"./ods-checkbox2-B2XbvOPY.js";import"./dom-8hoR-urs.js";import"./ods-clipboard2-Baifk8Bb.js";import"./ods-input2-CtkWk4I-.js";import"./type-B5zI8QxY.js";import"./ods-tooltip2-CW12aP9b.js";import"./overlay-KZpfSxWH.js";import"./ods-code2-D4zmvcg_.js";import"./ods-combobox2-D8tERt2s.js";import"./_commonjsHelpers-CLD5em3H.js";import"./debounce-DRefBDpX.js";import"./ods-tag2-Bb2BMy9d.js";import"./ods-datepicker2-FisogS88.js";import"./locale-NOa-Gxlr.js";import"./ods-divider-CjaMxjcH.js";import"./ods-divider2-R3gNNk4H.js";import"./ods-drawer2-BQqpNIWL.js";import"./ods-file-upload2-teF1qz6H.js";import"./ods-progress-bar2-zR9YGHZb.js";import"./ods-form-field2-BSNGPVxz.js";import"./ods-icon-DTp5PnPI.js";import"./ods-input-COMKDAZi.js";import"./ods-link-BCeMi6SV.js";import"./ods-medium2-BnayTic8.js";import"./ods-message-BxLNJd0H.js";import"./ods-modal2-BQO4yvXA.js";import"./ods-pagination2-BkxTbhCC.js";import"./ods-select2-C8koqTnw.js";import"./ods-password2-aWfdhtsQ.js";import"./ods-phone-number2-Cl3w5q8v.js";import"./ods-popover2-D09FwiGN.js";import"./ods-quantity2-BgFzW1u9.js";import"./ods-radio2-C2vNRNiP.js";import"./ods-range2-l-uevN51.js";import"./ods-skeleton2-B7sDasgF.js";import"./ods-switch-item2-ebcV2EUF.js";import"./ods-tabs2-BNbhFfmR.js";import"./ods-table2-oe37kiP3.js";import"./ods-text-BO_pN8NQ.js";import"./ods-textarea2-BDOVTqwb.js";import"./ods-timepicker2-DSjpZYdI.js";import"./ods-toggle2-Bg02aln1.js";import"./index-DZK8KyWG.js";import"./controls-DX883vx3.js";import"./unsafe-html-VJzuFJfF.js";function p(t){const e={code:"code",p:"p",...n(),...t.components};return o.jsxs(o.Fragment,{children:[o.jsx(d,{of:l,name:"Migration From 17.x"}),`
`,o.jsx(i,{label:"Popover - migrate from v17 to v18",level:1}),`
`,o.jsx(i,{label:"Usage changes",level:2}),`
`,o.jsx(e.p,{children:"The popover usage has changed a bit regarding the trigger element declaration."}),`
`,o.jsx(e.p,{children:"Previously, the trigger element was declared inside the web-component as its main slot content."}),`
`,o.jsxs(e.p,{children:["The popover content was declared using a ",o.jsx(e.code,{children:"osds-popover-content"})," with header, footer and content slots."]}),`
`,o.jsx(e.p,{children:"The trigger is now declared outside of the web-component, so you can set directly the DOM you need inside the popover unique slot."}),`
`,o.jsxs(e.p,{children:["The only requirement is to give the trigger element an ",o.jsx(e.code,{children:"id"})," so that the popover can get attached to it using the new attribute ",o.jsx(e.code,{children:"trigger-id"}),"."]}),`
`,o.jsx(e.p,{children:"Here is an example of the previous declaration:"}),`
`,o.jsx(s,{code:`
<osds-popover>
  <span slot="popover-trigger">
    <osds-button>Trigger</osds-button>
  </span>

  <osds-popover-content>
    <p slot="popover-header">My popover title</p>

    <p>Lorem ipsum dolor sit amet</p>

    <div slot="popover-footer">
      <osds-button>Dismiss</osds-button>
      <osds-button>Action</osds-button>
    </div>
  </osds-popover-content>
</osds-popover>
`,dark:"true",language:"html"}),`
`,o.jsx(e.p,{children:"The same result would now be achieved using:"}),`
`,o.jsx(s,{code:`
<div id="popover-trigger">
  Trigger
</div>

<ods-popover trigger-id="popover-trigger">
  <p>My popover title</p>

  <p>Lorem ipsum dolor sit amet</p>

  <div>
    <ods-button label="Dismiss"></ods-button>
    <ods-button label="Action"></ods-button>
  </div>
</ods-popover>
`,dark:"true",language:"html"}),`
`,o.jsx(i,{label:"Attributes changes",level:2}),`
`,o.jsxs(e.p,{children:[o.jsx(e.code,{children:"position"})," ",o.jsx(r,{color:"success",label:"New",size:"sm"})]}),`
`,o.jsx(e.p,{children:"New attribute (optional)."}),`
`,o.jsx(e.p,{children:`You can choose a specific position for the popover. In case there is not enough space, it will automatically fallback
to another position where the whole content can be displayed.`}),`
`,o.jsxs(e.p,{children:[o.jsx(e.code,{children:"shadowDomTriggerId"})," ",o.jsx(r,{color:"success",label:"New",size:"sm"})]}),`
`,o.jsx(e.p,{children:"New attribute (optional)."}),`
`,o.jsxs(e.p,{children:["If your trigger element is hidden inside a shadow DOM, you can provide a specific id (in combination with ",o.jsx(e.code,{children:"triggerId"}),`)
to point to the element inside the shadow DOM of the trigger element.`]}),`
`,o.jsx(e.p,{children:"You usually won't have to use this attribute."}),`
`,o.jsx(e.p,{children:"You can find an usage example in the clipboard element implementation."}),`
`,o.jsxs(e.p,{children:[o.jsx(e.code,{children:"triggerId"})," ",o.jsx(r,{color:"success",label:"New",size:"sm"})]}),`
`,o.jsx(e.p,{children:"New attribute (required)."}),`
`,o.jsx(e.p,{children:"Id of the HTML element that serves as the popover trigger."}),`
`,o.jsxs(e.p,{children:[o.jsx(e.code,{children:"with-arrow"})," ",o.jsx(r,{color:"success",label:"New",size:"sm"})]}),`
`,o.jsx(e.p,{children:"New attribute (optional)."}),`
`,o.jsxs(e.p,{children:["Set it to ",o.jsx(e.code,{children:"true"})," if you want to add an arrow to the popover."]}),`
`,o.jsx(i,{label:"Migration examples",level:2}),`
`,o.jsx(e.p,{children:"Basic popover:"}),`
`,o.jsx(s,{code:`
<osds-popover>
  <span slot="popover-trigger">
    <osds-button>Trigger</osds-button>
  </span>

  <osds-popover-content>
    <p slot="popover-header">My popover title</p>

    <p>Lorem ipsum dolor sit amet</p>

    <div slot="popover-footer">
      <osds-button>Dismiss</osds-button>
      <osds-button>Action</osds-button>
    </div>
  </osds-popover-content>
</osds-popover>

<!-- is now -->

<div id="popover-trigger">
  Trigger
</div>

<ods-popover trigger-id="popover-trigger">
  <p>My popover title</p>

  <p>Lorem ipsum dolor sit amet</p>

  <div>
    <ods-button label="Dismiss"></ods-button>
    <ods-button label="Action"></ods-button>
  </div>
</ods-popover>
`,dark:"true",language:"html"})]})}function yo(t={}){const{wrapper:e}={...n(),...t.components};return e?o.jsx(e,{...t,children:o.jsx(p,{...t})}):p(t)}export{yo as default};
