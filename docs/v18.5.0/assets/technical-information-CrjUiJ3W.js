import{j as e,M as c,C as s,d}from"./index-aSJOi-xY.js";import{u as r}from"./index-D_oymSD0.js";import{C as l}from"./index-B1WyGMUD.js";import{d as m,a as p}from"./index-DduIf26o.js";import{B as u}from"./Banner-DfBQCKAd.js";import{H as t}from"./Heading-fUBW5LMg.js";import{T as v}from"./TechnicalSpecification-DWqg9NQE.js";import{A as i,O as f,C as x,D as g,a as h,b as j}from"./accordion.stories-DK-tdzon.js";import"./iframe-Cjn0x15a.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-D-8MO0q_.js";import"./index-DX_4BEHg.js";import"./index-DrFu-skq.js";import"./StorybookLink-CdkDDCl2.js";import"./controls-DX883vx3.js";import"./unsafe-html-VJzuFJfF.js";const O="1.0.0",b="",y=[{kind:"javascript-module",path:"src/globals.ts",declarations:[],exports:[]},{kind:"javascript-module",path:"src/index.ts",declarations:[],exports:[{kind:"js",name:"OdsAccordion",declaration:{name:"OdsAccordion",module:"./components/ods-accordion/ods-accordion"}},{kind:"js",name:"OdsAccordionToggleEvent",declaration:{name:"OdsAccordionToggleEvent",module:"./interfaces/events"}},{kind:"js",name:"OdsAccordionToggleEventDetail",declaration:{name:"OdsAccordionToggleEventDetail",module:"./interfaces/events"}}]},{kind:"javascript-module",path:"src/interfaces/events.ts",declarations:[],exports:[{kind:"js",name:"OdsAccordionToggleEvent",declaration:{name:"OdsAccordionToggleEvent",module:"src/interfaces/events.ts"}},{kind:"js",name:"OdsAccordionToggleEventDetail",declaration:{name:"OdsAccordionToggleEventDetail",module:"src/interfaces/events.ts"}}]},{kind:"javascript-module",path:"src/components/ods-accordion/ods-accordion.tsx",declarations:[{kind:"class",description:"",name:"OdsAccordion",members:[{kind:"field",name:"detailsElement",type:{text:"HTMLDetailsElement | undefined"},privacy:"private"},{kind:"field",name:"observer",type:{text:"MutationObserver | undefined"},privacy:"private"},{kind:"field",name:"isDisabled",type:{text:"boolean"},privacy:"public",default:"false"},{kind:"field",name:"isOpen",type:{text:"boolean"},privacy:"public",default:"false"},{kind:"method",name:"close",privacy:"public",return:{type:{text:"Promise<void>"}}},{kind:"method",name:"open",privacy:"public",return:{type:{text:"Promise<void>"}}},{kind:"method",name:"toggle",privacy:"public",return:{type:{text:"Promise<void>"}}},{kind:"method",name:"isDetailsOpen",privacy:"private",return:{type:{text:"boolean"}}},{kind:"method",name:"preventToggle",privacy:"private",return:{type:{text:"void"}},parameters:[{name:"event",type:{text:"Event"}}]},{kind:"method",name:"render",return:{type:{text:"FunctionalComponent"}}}],attributes:[{name:"is-disabled",fieldName:"isDisabled",type:{text:"boolean"}},{name:"is-open",fieldName:"isOpen",type:{text:"boolean"}}],tagName:"ods-accordion",events:[{name:"odsToggle",type:{text:"EventEmitter<OdsAccordionToggleEventDetail>"}}],customElement:!0}],exports:[{kind:"js",name:"OdsAccordion",declaration:{name:"OdsAccordion",module:"src/components/ods-accordion/ods-accordion.tsx"}},{kind:"custom-element-definition",name:"ods-accordion",declaration:{name:"OdsAccordion",module:"src/components/ods-accordion/ods-accordion.tsx"}}]}],k={},T={schemaVersion:O,readme:b,modules:y,enumPlugin:k};function a(o){const n={code:"code",p:"p",...r(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(c,{of:i,name:"Technical information"}),`
`,e.jsx(u,{of:i}),`
`,e.jsx(t,{label:"Overview",level:2}),`
`,e.jsx(s,{of:f,sourceState:"none"}),`
`,e.jsx(v,{data:T}),`
`,e.jsx(m,{color:l.information,isDismissible:!1,children:e.jsxs("div",{children:[e.jsxs(n.p,{children:["ODS component is using internally the native ",e.jsx(p,{href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/details",label:"<details>",target:"_blank"})," HTML element."]}),e.jsx(n.p,{children:`This component does handle its open state on its own. It is therefore quite difficult to keep an internal state sync
as it will change on browser side on every user direct interaction (click, ...).`}),e.jsxs(n.p,{children:["That's why the ",e.jsx(n.code,{children:"is-open"})," attribute should be used as an initialization value and not as an active state."]}),e.jsxs(n.p,{children:["If you need to keep track of the component state of other purpose, update it using ",e.jsx(n.code,{children:"odsToggle"})," events."]}),e.jsx(n.p,{children:"Here is an example using React:"}),e.jsx(d,{code:`
import type { OdsAccordionToggleEvent } from '@ovhcloud/ods-components';
import { OdsAccordion, OdsButton } from '@ovhcloud/ods-components/react';
import React, { type ReactElement, useRef, useState } from 'react';

function TestAccordion(): ReactElement {
  const [isOpen, setIsOpen] = useState(false);
  const accordionRef = useRef<HTMLOdsAccordionElement>(null);

  function onToggleClick() {
    accordionRef.current?.toggle();
  }

  return (
    <div>
      <p>
        Accordion isOpen value: { isOpen.toString() }
      </p>

      <OdsAccordion onOdsToggle={ (e: OdsAccordionToggleEvent) => setIsOpen(e.detail.isOpen) }
                    ref={ accordionRef }>
        <span slot="summary">Hello, world!</span>

        <span>
          Lorem ipsum dolor sit amet ...
        </span>
      </OdsAccordion>

      <br /><br />

      <OdsButton onClick={ onToggleClick }
                   label="Toggle accordion" />
      </div>
    );
  }
`,dark:"true",language:"tsx"})]})}),`
`,e.jsx(t,{label:"Style customization",level:2}),`
`,e.jsxs(n.p,{children:["You can add your own style on the accordion element using the parts ",e.jsx(n.code,{children:"accordion"}),", ",e.jsx(n.code,{children:"summary"})," and ",e.jsx(n.code,{children:"content"}),"."]}),`
`,e.jsx(n.p,{children:"Custom CSS:"}),`
`,e.jsx(s,{of:x,sourceState:"shown"}),`
`,e.jsx(t,{label:"Examples",level:2}),`
`,e.jsx(t,{label:"Default",level:3}),`
`,e.jsx(s,{of:g,sourceState:"shown"}),`
`,e.jsx(t,{label:"Open",level:3}),`
`,e.jsx(s,{of:h,sourceState:"shown"}),`
`,e.jsx(t,{label:"Disabled",level:3}),`
`,e.jsx(s,{of:j,sourceState:"shown"})]})}function F(o={}){const{wrapper:n}={...r(),...o.components};return n?e.jsx(n,{...o,children:e.jsx(a,{...o})}):a(o)}export{F as default};
