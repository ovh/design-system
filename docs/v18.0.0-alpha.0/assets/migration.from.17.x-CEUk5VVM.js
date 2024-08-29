import{j as e}from"./jsx-runtime-3v6rTKkY.js";import{u as s}from"./index-B5y3xRNA.js";import{M as i}from"./index-sugWq352.js";import{P as r}from"./popover.stories-CJniEkAz.js";import"./iframe-D98u-D7f.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-B_J8iUie.js";import"./index-DX_4BEHg.js";import"./index-DrFu-skq.js";import"./index-DB8q6ij-.js";import"./lit-html-D-ZEPr28.js";import"./unsafe-html-HR6uCwaW.js";import"./control-C1r2wu67.js";function t(n){const o={code:"code",h1:"h1",h2:"h2",hr:"hr",p:"p",pre:"pre",...s(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{of:r,name:"Migration From 17.x"}),`
`,e.jsx(o.h1,{id:"popover---migrate-from-v17-to-v18",children:"Popover - migrate from v17 to v18"}),`
`,e.jsx(o.hr,{}),`
`,e.jsx(o.h2,{id:"usage-changes",children:"Usage changes"}),`
`,e.jsx(o.p,{children:"The popover usage has changed a bit regarding the trigger element declaration."}),`
`,e.jsx(o.p,{children:"Previously, the trigger element was declared inside the web-component as its main slot content."}),`
`,e.jsxs(o.p,{children:["The popover content was declared using a ",e.jsx(o.code,{children:"osds-popover-content"})," with header, footer and content slots."]}),`
`,e.jsx(o.p,{children:"The trigger is now declared outside of the web-component, so you can set directly the DOM you need inside the popover unique slot."}),`
`,e.jsxs(o.p,{children:["The only requirement is to give the trigger element an ",e.jsx(o.code,{children:"id"})," so that the popover can get attached to it using the new attribute ",e.jsx(o.code,{children:"trigger-id"}),"."]}),`
`,e.jsx(o.p,{children:"Here is an example of the previous declaration:"}),`
`,e.jsx(o.pre,{children:e.jsx(o.code,{className:"language-html",children:`<osds-popover>
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
`})}),`
`,e.jsx(o.p,{children:"The same result would now be achieved using:"}),`
`,e.jsx(o.pre,{children:e.jsx(o.code,{className:"language-html",children:`<div id="popover-trigger">
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
`})}),`
`,e.jsx(o.h2,{id:"attributes-changes",children:"Attributes changes"}),`
`,e.jsxs(o.p,{children:[e.jsx(o.code,{children:"position"})," ",e.jsx("img",{src:"https://img.shields.io/badge/new-008000"})]}),`
`,e.jsx(o.p,{children:"New attribute (optional)."}),`
`,e.jsx(o.p,{children:`You can choose a specific position for the popover. In case there is not enough space, it will automatically fallback
to another position where the whole content can be displayed.`}),`
`,e.jsxs(o.p,{children:[e.jsx(o.code,{children:"shadowDomTriggerId"})," ",e.jsx("img",{src:"https://img.shields.io/badge/new-008000"})]}),`
`,e.jsx(o.p,{children:"New attribute (optional)."}),`
`,e.jsxs(o.p,{children:["If your trigger element is hidden inside a shadow DOM, you can provide a specific id (in combination with ",e.jsx(o.code,{children:"triggerId"}),`)
to point to the element inside the shadow DOM of the trigger element.`]}),`
`,e.jsx(o.p,{children:"You usually won't have to use this attribute."}),`
`,e.jsx(o.p,{children:"You can find an usage example in the clipboard element implementation."}),`
`,e.jsxs(o.p,{children:[e.jsx(o.code,{children:"triggerId"})," ",e.jsx("img",{src:"https://img.shields.io/badge/new-008000"})]}),`
`,e.jsx(o.p,{children:"New attribute (required)."}),`
`,e.jsx(o.p,{children:"Id of the HTML element that serves as the popover trigger."}),`
`,e.jsxs(o.p,{children:[e.jsx(o.code,{children:"with-arrow"})," ",e.jsx("img",{src:"https://img.shields.io/badge/new-008000"})]}),`
`,e.jsx(o.p,{children:"New attribute (optional)."}),`
`,e.jsxs(o.p,{children:["Set it to ",e.jsx(o.code,{children:"true"})," if you want to add an arrow to the popover."]}),`
`,e.jsx(o.h2,{id:"migration-examples",children:"Migration examples"}),`
`,e.jsx(o.p,{children:"Basic popover:"}),`
`,e.jsx(o.pre,{children:e.jsx(o.code,{className:"language-html",children:`<osds-popover>
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
`})})]})}function f(n={}){const{wrapper:o}={...s(),...n.components};return o?e.jsx(o,{...n,children:e.jsx(t,{...n})}):t(n)}export{f as default};
