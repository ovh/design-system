import{j as t,M as p,d as r}from"./index-F50bSMiK.js";import{u as m}from"./index-Cdh-ijYL.js";import{a as s}from"./index-BWmQNpQ0.js";import{H as i}from"./Heading-Bsa3zsN6.js";import"./iframe-BE5s5kjT.js";import"../sb-preview/runtime.js";import"./index-8AfNH5n5.js";import"./index-D-8MO0q_.js";import"./index-DrFu-skq.js";import"./ods-accordion2-vvZNAi9U.js";import"./index-DAZhnxgO.js";import"./icon-name-C6aMXAXT.js";import"./ods-icon2-DRPHarK1.js";import"./ods-badge-CjbpLGl8.js";import"./ods-breadcrumb-item2-C_Ah5FZN.js";import"./ods-link2-CtVFUlMR.js";import"./ods-button2-dPaqs0uX.js";import"./ods-spinner2-CPyWCS2f.js";import"./ods-card-DRGl4_I-.js";import"./ods-checkbox2-B2XbvOPY.js";import"./dom-8hoR-urs.js";import"./ods-clipboard2-Baifk8Bb.js";import"./ods-input2-CtkWk4I-.js";import"./type-B5zI8QxY.js";import"./ods-tooltip2-CW12aP9b.js";import"./overlay-KZpfSxWH.js";import"./ods-code2-D4zmvcg_.js";import"./ods-combobox2-CcOfmmHm.js";import"./_commonjsHelpers-CLD5em3H.js";import"./debounce-DRefBDpX.js";import"./ods-tag2-Bb2BMy9d.js";import"./ods-datepicker2-FisogS88.js";import"./locale-NOa-Gxlr.js";import"./ods-divider-CjaMxjcH.js";import"./ods-divider2-R3gNNk4H.js";import"./ods-drawer2-BQqpNIWL.js";import"./ods-file-upload2-teF1qz6H.js";import"./ods-progress-bar2-zR9YGHZb.js";import"./ods-form-field2-BSNGPVxz.js";import"./ods-icon-DTp5PnPI.js";import"./ods-input-COMKDAZi.js";import"./ods-link-BCeMi6SV.js";import"./ods-medium2-BnayTic8.js";import"./ods-message-BxLNJd0H.js";import"./ods-modal2-BQO4yvXA.js";import"./ods-pagination2-BkxTbhCC.js";import"./ods-select2-C8koqTnw.js";import"./ods-password2-aWfdhtsQ.js";import"./ods-phone-number2-Cl3w5q8v.js";import"./ods-popover2-D09FwiGN.js";import"./ods-quantity2-BgFzW1u9.js";import"./ods-radio2-C2vNRNiP.js";import"./ods-range2-l-uevN51.js";import"./ods-skeleton2-B7sDasgF.js";import"./ods-switch-item2-ebcV2EUF.js";import"./ods-tabs2-BNbhFfmR.js";import"./ods-table2-oe37kiP3.js";import"./ods-text-BO_pN8NQ.js";import"./ods-textarea2-BDOVTqwb.js";import"./ods-timepicker2-DSjpZYdI.js";import"./ods-toggle2-Bg02aln1.js";import"./index-DZK8KyWG.js";function n(o){const e={code:"code",p:"p",...m(),...o.components};return t.jsxs(t.Fragment,{children:[t.jsx(p,{title:"OVHcloud Design System/Guides/Using Methods"}),`
`,t.jsx(i,{label:"Using Methods",level:1}),`
`,t.jsx(e.p,{children:"Some ODS components are exposing methods."}),`
`,t.jsxs(e.p,{children:["Those methods behave the same as native Javascript methods (like for example, the ",t.jsx(e.code,{children:"focus()"})," method), thus they can be used the same way."]}),`
`,t.jsxs(e.p,{children:["Example for an ",t.jsx(e.code,{children:"ods-input"}),":"]}),`
`,t.jsx(r,{code:`
<ods-input id="my-input" name="my-input">
</ods-input>

<ods-button id="clear-btn" label="Clear">
</ods-button>

<script>
  const inputElement = document.querySelector('#my-input');
  const clearButton = document.querySelector('#clear-btn');

  clearButton.addEventListener('click', () => {
    inputElement.clear();
  });
<\/script>
`,dark:"true",language:"html"}),`
`,t.jsx(i,{label:"React usage",level:2}),`
`,t.jsxs(e.p,{children:["Like native elements, accessing methods need to set a ref to the DOM element (see ",t.jsx(s,{href:"https://react.dev/learn/manipulating-the-dom-with-refs",label:"React documentation",target:"_blank"}),")."]}),`
`,t.jsxs(e.p,{children:["Example for an ",t.jsx(e.code,{children:"odsInput"}),":"]}),`
`,t.jsx(r,{code:`
import { OdsButton, OdsInput } from '@ovhcloud/ods-components/react';
import { useRef } from 'react';

const MyComponent = () => {
  const inputRef = useRef<HTMLOdsInputElement>(null);

  return (
    <>
      <OdsInput name="my-input"
                ref={ inputRef } />

      <OdsButton label="Clear"
                 onClick={ () => inputRef.current?.clear() } />
    </>
  );
};
`,dark:"true",language:"tsx"})]})}function jt(o={}){const{wrapper:e}={...m(),...o.components};return e?t.jsx(e,{...o,children:t.jsx(n,{...o})}):n(o)}export{jt as default};
