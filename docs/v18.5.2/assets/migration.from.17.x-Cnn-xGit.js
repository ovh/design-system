import{j as o,M as d,d as s}from"./index-s2XCIBmK.js";import{u as p}from"./index-BzRxuu7r.js";import{O as r}from"./index-OMpnLKmJ.js";import{P as l}from"./popover.stories-BulplvPz.js";import{H as i}from"./Heading-DPkeex3C.js";import"./iframe-b7U1zSTi.js";import"../sb-preview/runtime.js";import"./index-8AfNH5n5.js";import"./index-D-8MO0q_.js";import"./index-DrFu-skq.js";import"./ods-accordion2-C2zw5EtX.js";import"./index-DAZhnxgO.js";import"./icon-name-C6aMXAXT.js";import"./ods-icon2-C2sSMg6h.js";import"./ods-badge-CMZ1G1-q.js";import"./ods-breadcrumb-item2-Chi8uW7w.js";import"./ods-link2-DhrEm8Nk.js";import"./ods-button2-DJxJiLcj.js";import"./ods-spinner2-CPyWCS2f.js";import"./ods-card-CsxtEQHf.js";import"./ods-checkbox2-D1rfq4Wo.js";import"./dom-CO1DdTQY.js";import"./ods-clipboard2-CWpjSCiO.js";import"./ods-input2-NhqVSkkH.js";import"./type-B5zI8QxY.js";import"./ods-tooltip2-CW12aP9b.js";import"./overlay-KZpfSxWH.js";import"./ods-code2-3QPYbtLQ.js";import"./ods-datepicker2-BYQpPxj0.js";import"./locale-NOa-Gxlr.js";import"./ods-divider-Dtiri0aY.js";import"./ods-divider2-yzIshch6.js";import"./ods-drawer2-DKhK7oOX.js";import"./ods-file-upload2-WcWZbv1U.js";import"./ods-progress-bar2-Dg_V5kiw.js";import"./ods-form-field2-BDYkM6lU.js";import"./ods-icon-DOZBIEJb.js";import"./ods-link-C3iAbK8i.js";import"./ods-medium2-BnayTic8.js";import"./ods-message-DErUZ_Xg.js";import"./ods-modal2-CLthqs1m.js";import"./ods-pagination2-Do5FFUNV.js";import"./ods-select2-uYxcgqp_.js";import"./ods-password2-YsAErLiV.js";import"./ods-phone-number2-Dku_7tcX.js";import"./ods-popover2-D0fTxPry.js";import"./ods-quantity2-Dc2INetT.js";import"./ods-radio2-NdDFmobW.js";import"./ods-range2-DVd4LCay.js";import"./ods-skeleton2-B7sDasgF.js";import"./ods-switch-item2-D-SJNcDd.js";import"./ods-tabs2-ChMEr-fQ.js";import"./ods-table2-oe37kiP3.js";import"./ods-tag2-CInySbKk.js";import"./ods-text-BO_pN8NQ.js";import"./ods-textarea2-BqL_D5sd.js";import"./ods-timepicker2-C6TMFSLy.js";import"./ods-toggle2-BgUL7nI_.js";import"./index-DCBH0_Tl.js";import"./controls-DX883vx3.js";import"./unsafe-html-VJzuFJfF.js";function n(t){const e={code:"code",p:"p",...p(),...t.components};return o.jsxs(o.Fragment,{children:[o.jsx(d,{of:l,name:"Migration From 17.x"}),`
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
