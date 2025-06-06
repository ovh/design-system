import{j as t}from"./jsx-runtime-VM66peLj.js";import{useMDXComponents as l}from"./index-DQB45XCM.js";import{h as i}from"./Badge-EGenXdCK-DDYseYDy.js";import{M as d,S as n}from"./index-BlaLg9GY.js";import{T as c}from"./tooltip.stories-CZnJ4KtV.js";import{H as r}from"./Heading-6Mfikk-c.js";import"./index-D_CmzhJ4.js";import"./index-2w0W-O47-BJ19ihbZ.js";import"./iframe-CGgj-FAD.js";import"./index-ChzAxGiP.js";import"./index-CucsY3YN.js";import"./index-CXQShRbs.js";import"./index-DrFu-skq.js";import"./Button-BRERPjFq.js";import"./index-CkQHsVsO.js";import"./Spinner-CcwadLZv.js";import"./icon-name-jL3axqAU.js";import"./TooltipTrigger-CUqGeRIQ.js";import"./overlay-CZHjGBMC.js";import"./portal-BQw3bnzL.js";import"./index-BCxMAfLs.js";import"./use-locale-context-Z4fgdY29.js";import"./use-presence-BmJ92aQP.js";import"./use-event-OCVb0O1l.js";import"./index-DTqyXX3-.js";import"./controls-BtiQQn1l.js";import"./source-d0g_Nd0q.js";function s(o){const e={code:"code",p:"p",...l(),...o.components};return t.jsxs(t.Fragment,{children:[t.jsx(d,{of:c,name:"Migration From 17.x"}),`
`,t.jsx(r,{label:"Tooltip - migrate from v17 to v18",level:1}),`
`,t.jsx(r,{label:"Usage changes",level:2}),`
`,t.jsx(e.p,{children:"The tooltip usage has changed a bit regarding the trigger element declaration."}),`
`,t.jsx(e.p,{children:"Previously, the trigger element was declared inside the web-component as its main slot content."}),`
`,t.jsxs(e.p,{children:["The tooltip content was declared using a ",t.jsx(e.code,{children:"osds-tooltip-content"})," with the slot ",t.jsx(e.code,{children:"tooltip-content"})," parameter."]}),`
`,t.jsx(e.p,{children:"This was causing an issue of double focus when the trigger used was a focusable element."}),`
`,t.jsx(e.p,{children:"To fix that and give a bit more flexibility about how you organize your DOM, the trigger is now declared outside of the web-component."}),`
`,t.jsxs(e.p,{children:["The only requirement is to give this element an ",t.jsx(e.code,{children:"id"})," so that the tooltip can get attached to it using the new attribute ",t.jsx(e.code,{children:"trigger-id"}),"."]}),`
`,t.jsx(e.p,{children:"Here is an example of the previous declaration:"}),`
`,t.jsx(n,{code:`
<osds-tooltip>
  <div>
    Hover me
  </div>

  <osds-tooltip-content slot="tooltip-content">
    Tooltip content
  </osds-tooltip-content>
</osds-tooltip>
`,dark:"true",language:"html"}),`
`,t.jsx(e.p,{children:"The same result would now be achieved using:"}),`
`,t.jsx(n,{code:`
<div id="tooltip-trigger">
  Hover me
</div>

<ods-tooltip trigger-id="tooltip-trigger">
  Tooltip content
</ods-tooltip>
`,dark:"true",language:"html"}),`
`,t.jsx(r,{label:"Attributes changes",level:2}),`
`,t.jsxs(e.p,{children:[t.jsx(e.code,{children:"position"})," ",t.jsx(i,{color:"success",size:"sm",children:"New"})]}),`
`,t.jsx(e.p,{children:"New attribute (optional)."}),`
`,t.jsx(e.p,{children:`You can choose a specific position for the tooltip. In case there is not enough space, it will automatically fallback
to another position where the whole content can be displayed.`}),`
`,t.jsxs(e.p,{children:[t.jsx(e.code,{children:"shadowDomTriggerId"})," ",t.jsx(i,{color:"success",size:"sm",children:"New"})]}),`
`,t.jsx(e.p,{children:"New attribute (optional)."}),`
`,t.jsxs(e.p,{children:["If your trigger element is hidden inside a shadow DOM, you can provide a specific id (in combination with ",t.jsx(e.code,{children:"triggerId"}),`)
to point to the element inside the shadow DOM of the trigger element.`]}),`
`,t.jsx(e.p,{children:"You usually won't have to use this attribute."}),`
`,t.jsx(e.p,{children:"You can find an usage example in the clipboard element implementation."}),`
`,t.jsxs(e.p,{children:[t.jsx(e.code,{children:"triggerId"})," ",t.jsx(i,{color:"success",size:"sm",children:"New"})]}),`
`,t.jsx(e.p,{children:"New attribute (required)."}),`
`,t.jsx(e.p,{children:"Id of the HTML element that serves as the tooltip trigger."}),`
`,t.jsxs(e.p,{children:[t.jsx(e.code,{children:"variant"})," ",t.jsx(i,{color:"critical",size:"sm",children:"Removed"})]}),`
`,t.jsx(e.p,{children:"Has been removed."}),`
`,t.jsxs(e.p,{children:["You can use the new ",t.jsx(e.code,{children:"with-arrow"})," attribute to render either the standard or tip previous variant."]}),`
`,t.jsxs(e.p,{children:[t.jsx(e.code,{children:"with-arrow"})," ",t.jsx(i,{color:"success",size:"sm",children:"New"})]}),`
`,t.jsx(e.p,{children:"New attribute (optional)."}),`
`,t.jsxs(e.p,{children:["Set it to ",t.jsx(e.code,{children:"true"})," if you want to add an arrow to the tooltip."]}),`
`,t.jsx(r,{label:"Migration examples",level:2}),`
`,t.jsx(e.p,{children:"Basic tooltip:"}),`
`,t.jsx(n,{code:`
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
`,t.jsx(e.p,{children:"Arrow tooltip:"}),`
`,t.jsx(n,{code:`
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
`,dark:"true",language:"html"})]})}function A(o={}){const{wrapper:e}={...l(),...o.components};return e?t.jsx(e,{...o,children:t.jsx(s,{...o})}):s(o)}export{A as default};
