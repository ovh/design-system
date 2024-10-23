import{j as e}from"./jsx-runtime-CtvdRJNw.js";import{u as p}from"./index-BB9dT2Es.js";import{O as s}from"./index-96Y3MfGk.js";import{M as d,d as n}from"./index-B52cN8Ji.js";import{P as l}from"./popover.stories-BCHctBjT.js";import{H as r}from"./Heading-DkXmkwCf.js";import"./iframe-DOFBAWyz.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-B_J8iUie.js";import"./index-DX_4BEHg.js";import"./index-DrFu-skq.js";import"./index-CnlqR0TT.js";import"./lit-html-D-ZEPr28.js";import"./unsafe-html-HR6uCwaW.js";import"./controls-DpsgTNdU.js";function i(t){const o={code:"code",p:"p",...p(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(d,{of:l,name:"Migration From 17.x"}),`
`,e.jsx(r,{label:"Popover - migrate from v17 to v18",level:1}),`
`,e.jsx(r,{label:"Usage changes",level:2}),`
`,e.jsx(o.p,{children:"The popover usage has changed a bit regarding the trigger element declaration."}),`
`,e.jsx(o.p,{children:"Previously, the trigger element was declared inside the web-component as its main slot content."}),`
`,e.jsxs(o.p,{children:["The popover content was declared using a ",e.jsx(o.code,{children:"osds-popover-content"})," with header, footer and content slots."]}),`
`,e.jsx(o.p,{children:"The trigger is now declared outside of the web-component, so you can set directly the DOM you need inside the popover unique slot."}),`
`,e.jsxs(o.p,{children:["The only requirement is to give the trigger element an ",e.jsx(o.code,{children:"id"})," so that the popover can get attached to it using the new attribute ",e.jsx(o.code,{children:"trigger-id"}),"."]}),`
`,e.jsx(o.p,{children:"Here is an example of the previous declaration:"}),`
`,e.jsx(n,{code:`
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
`,e.jsx(o.p,{children:"The same result would now be achieved using:"}),`
`,e.jsx(n,{code:`
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
`,e.jsx(r,{label:"Attributes changes",level:2}),`
`,e.jsxs(o.p,{children:[e.jsx(o.code,{children:"position"})," ",e.jsx(s,{color:"success",label:"New",size:"sm"})]}),`
`,e.jsx(o.p,{children:"New attribute (optional)."}),`
`,e.jsx(o.p,{children:`You can choose a specific position for the popover. In case there is not enough space, it will automatically fallback
to another position where the whole content can be displayed.`}),`
`,e.jsxs(o.p,{children:[e.jsx(o.code,{children:"shadowDomTriggerId"})," ",e.jsx(s,{color:"success",label:"New",size:"sm"})]}),`
`,e.jsx(o.p,{children:"New attribute (optional)."}),`
`,e.jsxs(o.p,{children:["If your trigger element is hidden inside a shadow DOM, you can provide a specific id (in combination with ",e.jsx(o.code,{children:"triggerId"}),`)
to point to the element inside the shadow DOM of the trigger element.`]}),`
`,e.jsx(o.p,{children:"You usually won't have to use this attribute."}),`
`,e.jsx(o.p,{children:"You can find an usage example in the clipboard element implementation."}),`
`,e.jsxs(o.p,{children:[e.jsx(o.code,{children:"triggerId"})," ",e.jsx(s,{color:"success",label:"New",size:"sm"})]}),`
`,e.jsx(o.p,{children:"New attribute (required)."}),`
`,e.jsx(o.p,{children:"Id of the HTML element that serves as the popover trigger."}),`
`,e.jsxs(o.p,{children:[e.jsx(o.code,{children:"with-arrow"})," ",e.jsx(s,{color:"success",label:"New",size:"sm"})]}),`
`,e.jsx(o.p,{children:"New attribute (optional)."}),`
`,e.jsxs(o.p,{children:["Set it to ",e.jsx(o.code,{children:"true"})," if you want to add an arrow to the popover."]}),`
`,e.jsx(r,{label:"Migration examples",level:2}),`
`,e.jsx(o.p,{children:"Basic popover:"}),`
`,e.jsx(n,{code:`
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
`,dark:"true",language:"html"})]})}function N(t={}){const{wrapper:o}={...p(),...t.components};return o?e.jsx(o,{...t,children:e.jsx(i,{...t})}):i(t)}export{N as default};
