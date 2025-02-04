import{j as o,M as d,d as s}from"./index-DQsySnuC.js";import{u as p}from"./index-Xj8pMhSr.js";import{O as r}from"./index-CihiY_f6.js";import{P as l}from"./popover.stories-3MCRsi8Q.js";import{H as i}from"./Heading-DDc_MF2r.js";import"./iframe-DRtgxPEL.js";import"../sb-preview/runtime.js";import"./index-8AfNH5n5.js";import"./index-D-8MO0q_.js";import"./index-DrFu-skq.js";import"./ods-accordion2-Bgg69lRV.js";import"./index-DAZhnxgO.js";import"./icon-name-C6aMXAXT.js";import"./ods-icon2-Bl6f3POv.js";import"./ods-badge-tHc24Eg4.js";import"./ods-breadcrumb-item2-CoLTn2CF.js";import"./ods-link2-DDMr4sUm.js";import"./ods-button2-Bhm26DQr.js";import"./ods-spinner2-DCN2yKlT.js";import"./ods-card-B_VebKXk.js";import"./ods-checkbox2-BOuFx8yF.js";import"./dom-CO1DdTQY.js";import"./ods-clipboard2-NuJn2ry3.js";import"./ods-input2-B9cw61K_.js";import"./type-B5zI8QxY.js";import"./ods-tooltip2-BwzEvmuE.js";import"./overlay-KZpfSxWH.js";import"./ods-code2-bZeM2NI-.js";import"./ods-datepicker2-DwwUrg1C.js";import"./locale-NOa-Gxlr.js";import"./ods-divider-3cgmT4wP.js";import"./ods-divider2-Dc25YIYb.js";import"./ods-drawer2-DsENZFv4.js";import"./ods-file-upload2-CPd6D9Z5.js";import"./ods-progress-bar2-BuFm8qT0.js";import"./ods-form-field2-Tc9B1-rj.js";import"./ods-icon-NURRZ9Mf.js";import"./ods-link-BE9dMQzg.js";import"./ods-medium2-BB_NU63C.js";import"./ods-message-B9bD81Bu.js";import"./ods-modal2-CP36WQeg.js";import"./ods-pagination2-CotgNPzL.js";import"./ods-select2-B4wr0dem.js";import"./ods-password2-BQKXsiEd.js";import"./ods-phone-number2-D1K1HcDS.js";import"./ods-popover2-hre_XUC2.js";import"./ods-quantity2-DOjRn13r.js";import"./ods-radio2-BtBodUES.js";import"./ods-range2-BhwU834C.js";import"./ods-skeleton2-dZcgHYAN.js";import"./ods-switch-item2-m1p75_3x.js";import"./ods-tabs2-wJlXfoZt.js";import"./ods-table2-vWlGUOoj.js";import"./ods-tag2-Dj0-zHXw.js";import"./ods-text-CTeC-41B.js";import"./ods-textarea2-BHQdu6bK.js";import"./ods-timepicker2-2oCWgeQp.js";import"./ods-toggle2-DbSuYqWU.js";import"./index-DCBH0_Tl.js";import"./controls-DX883vx3.js";import"./unsafe-html-VJzuFJfF.js";function n(t){const e={code:"code",p:"p",...p(),...t.components};return o.jsxs(o.Fragment,{children:[o.jsx(d,{of:l,name:"Migration From 17.x"}),`
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
`,dark:"true",language:"html"})]})}function jo(t={}){const{wrapper:e}={...p(),...t.components};return e?o.jsx(e,{...t,children:o.jsx(n,{...t})}):n(t)}export{jo as default};
