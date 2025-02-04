import{j as t,M as p,d as r}from"./index-DQsySnuC.js";import{u as m}from"./index-Xj8pMhSr.js";import{a as s}from"./index-CihiY_f6.js";import{H as n}from"./Heading-DDc_MF2r.js";import"./iframe-DRtgxPEL.js";import"../sb-preview/runtime.js";import"./index-8AfNH5n5.js";import"./index-D-8MO0q_.js";import"./index-DrFu-skq.js";import"./ods-accordion2-Bgg69lRV.js";import"./index-DAZhnxgO.js";import"./icon-name-C6aMXAXT.js";import"./ods-icon2-Bl6f3POv.js";import"./ods-badge-tHc24Eg4.js";import"./ods-breadcrumb-item2-CoLTn2CF.js";import"./ods-link2-DDMr4sUm.js";import"./ods-button2-Bhm26DQr.js";import"./ods-spinner2-DCN2yKlT.js";import"./ods-card-B_VebKXk.js";import"./ods-checkbox2-BOuFx8yF.js";import"./dom-CO1DdTQY.js";import"./ods-clipboard2-NuJn2ry3.js";import"./ods-input2-B9cw61K_.js";import"./type-B5zI8QxY.js";import"./ods-tooltip2-BwzEvmuE.js";import"./overlay-KZpfSxWH.js";import"./ods-code2-bZeM2NI-.js";import"./ods-datepicker2-DwwUrg1C.js";import"./locale-NOa-Gxlr.js";import"./ods-divider-3cgmT4wP.js";import"./ods-divider2-Dc25YIYb.js";import"./ods-drawer2-DsENZFv4.js";import"./ods-file-upload2-CPd6D9Z5.js";import"./ods-progress-bar2-BuFm8qT0.js";import"./ods-form-field2-Tc9B1-rj.js";import"./ods-icon-NURRZ9Mf.js";import"./ods-link-BE9dMQzg.js";import"./ods-medium2-BB_NU63C.js";import"./ods-message-B9bD81Bu.js";import"./ods-modal2-CP36WQeg.js";import"./ods-pagination2-CotgNPzL.js";import"./ods-select2-B4wr0dem.js";import"./ods-password2-BQKXsiEd.js";import"./ods-phone-number2-D1K1HcDS.js";import"./ods-popover2-hre_XUC2.js";import"./ods-quantity2-DOjRn13r.js";import"./ods-radio2-BtBodUES.js";import"./ods-range2-BhwU834C.js";import"./ods-skeleton2-dZcgHYAN.js";import"./ods-switch-item2-m1p75_3x.js";import"./ods-tabs2-wJlXfoZt.js";import"./ods-table2-vWlGUOoj.js";import"./ods-tag2-Dj0-zHXw.js";import"./ods-text-CTeC-41B.js";import"./ods-textarea2-BHQdu6bK.js";import"./ods-timepicker2-2oCWgeQp.js";import"./ods-toggle2-DbSuYqWU.js";import"./index-DCBH0_Tl.js";function i(o){const e={code:"code",p:"p",...m(),...o.components};return t.jsxs(t.Fragment,{children:[t.jsx(p,{title:"OVHcloud Design System/Guides/Using Methods"}),`
`,t.jsx(n,{label:"Using Methods",level:1}),`
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
`,t.jsx(n,{label:"React usage",level:2}),`
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
`,dark:"true",language:"tsx"})]})}function ut(o={}){const{wrapper:e}={...m(),...o.components};return e?t.jsx(e,{...o,children:t.jsx(i,{...o})}):i(o)}export{ut as default};
