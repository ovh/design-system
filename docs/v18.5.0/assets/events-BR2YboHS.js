import{j as e,M as d,d as o}from"./index-aSJOi-xY.js";import{u as r}from"./index-D_oymSD0.js";import{a as s}from"./index-DduIf26o.js";import{H as a}from"./Heading-fUBW5LMg.js";import"./iframe-Cjn0x15a.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-D-8MO0q_.js";import"./index-DX_4BEHg.js";import"./index-DrFu-skq.js";import"./index-B1WyGMUD.js";function i(t){const n={code:"code",p:"p",...r(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(d,{title:"OVHcloud Design System/Guides/Using Events"}),`
`,e.jsx(a,{label:"Using Events",level:1}),`
`,e.jsxs(n.p,{children:["Some ODS components are emitting ",e.jsx(s,{href:"https://developer.mozilla.org/en-US/docs/Web/API/CustomEvent",label:"Custom Events",target:"_blank"}),"."]}),`
`,e.jsxs(n.p,{children:[`Those events behave the same as native Javascript events, thus they can be used the same way using
`,e.jsx(s,{href:"https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener",label:"Event Listeners",target:"_blank"}),"."]}),`
`,e.jsxs(n.p,{children:["Example for an ",e.jsx(n.code,{children:"ods-input"}),":"]}),`
`,e.jsx(o,{code:`
<ods-input id="my-input" name="my-input">
</ods-input>

<script>
  const inputElement = document.querySelector('#my-input');

  inputElement.addEventListener('odsChange', (event) => {
    console.log(event.detail);
  });
<\/script>
`,dark:"true",language:"html"}),`
`,e.jsxs(n.p,{children:["Custom event may contains information, depending on the event and the component, those are contained in the ",e.jsx(n.code,{children:"detail"})," property of the event."]}),`
`,e.jsx(n.p,{children:"The corresponding TS type is available with all information regarding the event and its details."}),`
`,e.jsxs(n.p,{children:["Example for an ",e.jsx(n.code,{children:"ods-input"}),":"]}),`
`,e.jsx(o,{code:`
import type {
  OdsInputChangeEvent, // the CustomEvent interface
  OdsInputChangeEventDetail, // the CustomEvent detail interface
} from '@ovhcloud/ods-components';
`,dark:"true",language:"typescript"}),`
`,e.jsx(a,{label:"React handlers",level:2}),`
`,e.jsx(n.p,{children:"Like native events, an handler is available for each ODS React component events."}),`
`,e.jsxs(n.p,{children:["Naming use the same transformation as native events: ",e.jsx(n.code,{children:"on<Event>"}),"."]}),`
`,e.jsxs(n.p,{children:["Example for an ",e.jsx(n.code,{children:"odsInput"}),":"]}),`
`,e.jsx(o,{code:`
import type { OdsInputChangeEvent } from '@ovhcloud/ods-components';
import { OdsInput } from '@ovhcloud/ods-components/react';

const MyComponent = () => {
  return (
    <OdsInput name="my-input"
              onOdsChange={ (event: OdsInputChangeEvent) => {
                console.log(event.detail);
              }} />
  );
};
`,dark:"true",language:"tsx"})]})}function E(t={}){const{wrapper:n}={...r(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(i,{...t})}):i(t)}export{E as default};
