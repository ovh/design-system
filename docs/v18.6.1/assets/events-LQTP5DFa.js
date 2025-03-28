import{j as t,M as m,d as o}from"./index-DHunZMd9.js";import{u as s}from"./index-DogUcu-a.js";import{a as i}from"./index-CuZhG6y0.js";import{H as r}from"./Heading-BEqqWbQS.js";import"./iframe-CrJ6auLd.js";import"../sb-preview/runtime.js";import"./index-8AfNH5n5.js";import"./index-D-8MO0q_.js";import"./index-DrFu-skq.js";import"./ods-accordion2-vvZNAi9U.js";import"./index-DAZhnxgO.js";import"./icon-name-C6aMXAXT.js";import"./ods-icon2-DRPHarK1.js";import"./ods-badge-CjbpLGl8.js";import"./ods-breadcrumb-item2-C_Ah5FZN.js";import"./ods-link2-CtVFUlMR.js";import"./ods-button2-dPaqs0uX.js";import"./ods-spinner2-CPyWCS2f.js";import"./ods-card-DRGl4_I-.js";import"./ods-checkbox2-B2XbvOPY.js";import"./dom-8hoR-urs.js";import"./ods-clipboard2-Baifk8Bb.js";import"./ods-input2-CtkWk4I-.js";import"./type-B5zI8QxY.js";import"./ods-tooltip2-CW12aP9b.js";import"./overlay-KZpfSxWH.js";import"./ods-code2-D4zmvcg_.js";import"./ods-combobox2-D8tERt2s.js";import"./_commonjsHelpers-CLD5em3H.js";import"./debounce-DRefBDpX.js";import"./ods-tag2-Bb2BMy9d.js";import"./ods-datepicker2-FisogS88.js";import"./locale-NOa-Gxlr.js";import"./ods-divider-CjaMxjcH.js";import"./ods-divider2-R3gNNk4H.js";import"./ods-drawer2-BQqpNIWL.js";import"./ods-file-upload2-teF1qz6H.js";import"./ods-progress-bar2-zR9YGHZb.js";import"./ods-form-field2-BSNGPVxz.js";import"./ods-icon-DTp5PnPI.js";import"./ods-input-COMKDAZi.js";import"./ods-link-BCeMi6SV.js";import"./ods-medium2-BnayTic8.js";import"./ods-message-BxLNJd0H.js";import"./ods-modal2-BQO4yvXA.js";import"./ods-pagination2-BkxTbhCC.js";import"./ods-select2-C8koqTnw.js";import"./ods-password2-aWfdhtsQ.js";import"./ods-phone-number2-Cl3w5q8v.js";import"./ods-popover2-D09FwiGN.js";import"./ods-quantity2-BgFzW1u9.js";import"./ods-radio2-C2vNRNiP.js";import"./ods-range2-l-uevN51.js";import"./ods-skeleton2-B7sDasgF.js";import"./ods-switch-item2-ebcV2EUF.js";import"./ods-tabs2-BNbhFfmR.js";import"./ods-table2-oe37kiP3.js";import"./ods-text-BO_pN8NQ.js";import"./ods-textarea2-BDOVTqwb.js";import"./ods-timepicker2-DSjpZYdI.js";import"./ods-toggle2-Bg02aln1.js";import"./index-DZK8KyWG.js";function p(n){const e={code:"code",p:"p",...s(),...n.components};return t.jsxs(t.Fragment,{children:[t.jsx(m,{title:"OVHcloud Design System/Guides/Using Events"}),`
`,t.jsx(r,{label:"Using Events",level:1}),`
`,t.jsxs(e.p,{children:["Some ODS components are emitting ",t.jsx(i,{href:"https://developer.mozilla.org/en-US/docs/Web/API/CustomEvent",label:"Custom Events",target:"_blank"}),"."]}),`
`,t.jsxs(e.p,{children:[`Those events behave the same as native Javascript events, thus they can be used the same way using
`,t.jsx(i,{href:"https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener",label:"Event Listeners",target:"_blank"}),"."]}),`
`,t.jsxs(e.p,{children:["Example for an ",t.jsx(e.code,{children:"ods-input"}),":"]}),`
`,t.jsx(o,{code:`
<ods-input id="my-input" name="my-input">
</ods-input>

<script>
  const inputElement = document.querySelector('#my-input');

  inputElement.addEventListener('odsChange', (event) => {
    console.log(event.detail);
  });
<\/script>
`,dark:"true",language:"html"}),`
`,t.jsxs(e.p,{children:["Custom event may contains information, depending on the event and the component, those are contained in the ",t.jsx(e.code,{children:"detail"})," property of the event."]}),`
`,t.jsx(e.p,{children:"The corresponding TS type is available with all information regarding the event and its details."}),`
`,t.jsxs(e.p,{children:["Example for an ",t.jsx(e.code,{children:"ods-input"}),":"]}),`
`,t.jsx(o,{code:`
import type {
  OdsInputChangeEvent, // the CustomEvent interface
  OdsInputChangeEventDetail, // the CustomEvent detail interface
} from '@ovhcloud/ods-components';
`,dark:"true",language:"typescript"}),`
`,t.jsx(r,{label:"React handlers",level:2}),`
`,t.jsx(e.p,{children:"Like native events, an handler is available for each ODS React component events."}),`
`,t.jsxs(e.p,{children:["Naming use the same transformation as native events: ",t.jsx(e.code,{children:"on<Event>"}),"."]}),`
`,t.jsxs(e.p,{children:["Example for an ",t.jsx(e.code,{children:"odsInput"}),":"]}),`
`,t.jsx(o,{code:`
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
`,dark:"true",language:"tsx"})]})}function gt(n={}){const{wrapper:e}={...s(),...n.components};return e?t.jsx(e,{...n,children:t.jsx(p,{...n})}):p(n)}export{gt as default};
