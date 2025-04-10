import{j as e}from"./jsx-runtime-BSm7YJ_y.js";import{useMDXComponents as l}from"./index-CUkz9CBV.js";import{o as i}from"./ods-react-CYmC8DRO.js";import{M as d,S as n}from"./index-Ad1vjMe7.js";import{T as c}from"./tooltip.stories-BcGZZYt6.js";import{H as s}from"./Heading-RrL0wZ2g.js";import"./index-E9JSHJbc.js";import"./iframe-ZxD9YLZr.js";import"./index-DOJIDNlS.js";import"./index-DZAg5o-f.js";import"./index-CXQShRbs.js";import"./index-DrFu-skq.js";import"./OdsButton-Do9GSXD9.js";import"./controls-CQ2mnOwv.js";import"./OdsSpinner-DbFadktS.js";import"./icon-name-BXMPYDqj.js";import"./portal-PiAqHQ5I.js";import"./index-BDDKzIGc.js";function r(o){const t={code:"code",p:"p",...l(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(d,{of:c,name:"Migration From 17.x"}),`
`,e.jsx(s,{label:"Tooltip - migrate from v17 to v18",level:1}),`
`,e.jsx(s,{label:"Usage changes",level:2}),`
`,e.jsx(t.p,{children:"The tooltip usage has changed a bit regarding the trigger element declaration."}),`
`,e.jsx(t.p,{children:"Previously, the trigger element was declared inside the web-component as its main slot content."}),`
`,e.jsxs(t.p,{children:["The tooltip content was declared using a ",e.jsx(t.code,{children:"osds-tooltip-content"})," with the slot ",e.jsx(t.code,{children:"tooltip-content"})," parameter."]}),`
`,e.jsx(t.p,{children:"This was causing an issue of double focus when the trigger used was a focusable element."}),`
`,e.jsx(t.p,{children:"To fix that and give a bit more flexibility about how you organize your DOM, the trigger is now declared outside of the web-component."}),`
`,e.jsxs(t.p,{children:["The only requirement is to give this element an ",e.jsx(t.code,{children:"id"})," so that the tooltip can get attached to it using the new attribute ",e.jsx(t.code,{children:"trigger-id"}),"."]}),`
`,e.jsx(t.p,{children:"Here is an example of the previous declaration:"}),`
`,e.jsx(n,{code:`
<osds-tooltip>
  <div>
    Hover me
  </div>

  <osds-tooltip-content slot="tooltip-content">
    Tooltip content
  </osds-tooltip-content>
</osds-tooltip>
`,dark:"true",language:"html"}),`
`,e.jsx(t.p,{children:"The same result would now be achieved using:"}),`
`,e.jsx(n,{code:`
<div id="tooltip-trigger">
  Hover me
</div>

<ods-tooltip trigger-id="tooltip-trigger">
  Tooltip content
</ods-tooltip>
`,dark:"true",language:"html"}),`
`,e.jsx(s,{label:"Attributes changes",level:2}),`
`,e.jsxs(t.p,{children:[e.jsx(t.code,{children:"position"})," ",e.jsx(i,{color:"success",size:"sm",children:"New"})]}),`
`,e.jsx(t.p,{children:"New attribute (optional)."}),`
`,e.jsx(t.p,{children:`You can choose a specific position for the tooltip. In case there is not enough space, it will automatically fallback
to another position where the whole content can be displayed.`}),`
`,e.jsxs(t.p,{children:[e.jsx(t.code,{children:"shadowDomTriggerId"})," ",e.jsx(i,{color:"success",size:"sm",children:"New"})]}),`
`,e.jsx(t.p,{children:"New attribute (optional)."}),`
`,e.jsxs(t.p,{children:["If your trigger element is hidden inside a shadow DOM, you can provide a specific id (in combination with ",e.jsx(t.code,{children:"triggerId"}),`)
to point to the element inside the shadow DOM of the trigger element.`]}),`
`,e.jsx(t.p,{children:"You usually won't have to use this attribute."}),`
`,e.jsx(t.p,{children:"You can find an usage example in the clipboard element implementation."}),`
`,e.jsxs(t.p,{children:[e.jsx(t.code,{children:"triggerId"})," ",e.jsx(i,{color:"success",size:"sm",children:"New"})]}),`
`,e.jsx(t.p,{children:"New attribute (required)."}),`
`,e.jsx(t.p,{children:"Id of the HTML element that serves as the tooltip trigger."}),`
`,e.jsxs(t.p,{children:[e.jsx(t.code,{children:"variant"})," ",e.jsx(i,{color:"critical",size:"sm",children:"Removed"})]}),`
`,e.jsx(t.p,{children:"Has been removed."}),`
`,e.jsxs(t.p,{children:["You can use the new ",e.jsx(t.code,{children:"with-arrow"})," attribute to render either the standard or tip previous variant."]}),`
`,e.jsxs(t.p,{children:[e.jsx(t.code,{children:"with-arrow"})," ",e.jsx(i,{color:"success",size:"sm",children:"New"})]}),`
`,e.jsx(t.p,{children:"New attribute (optional)."}),`
`,e.jsxs(t.p,{children:["Set it to ",e.jsx(t.code,{children:"true"})," if you want to add an arrow to the tooltip."]}),`
`,e.jsx(s,{label:"Migration examples",level:2}),`
`,e.jsx(t.p,{children:"Basic tooltip:"}),`
`,e.jsx(n,{code:`
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
`,e.jsx(t.p,{children:"Arrow tooltip:"}),`
`,e.jsx(n,{code:`
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
`,dark:"true",language:"html"})]})}function D(o={}){const{wrapper:t}={...l(),...o.components};return t?e.jsx(t,{...o,children:e.jsx(r,{...o})}):r(o)}export{D as default};
