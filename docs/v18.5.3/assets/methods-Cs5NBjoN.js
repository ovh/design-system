import{j as t,M as p,d as r}from"./index-CCbL8veO.js";import{u as m}from"./index-Cq3PbNHF.js";import{a as s}from"./index-uzYzEmTV.js";import{H as n}from"./Heading-DN6FdGMk.js";import"./iframe-DU4SvIHv.js";import"../sb-preview/runtime.js";import"./index-8AfNH5n5.js";import"./index-D-8MO0q_.js";import"./index-DrFu-skq.js";import"./ods-accordion2-C2zw5EtX.js";import"./index-DAZhnxgO.js";import"./icon-name-C6aMXAXT.js";import"./ods-icon2-C2sSMg6h.js";import"./ods-badge-CMZ1G1-q.js";import"./ods-breadcrumb-item2-Chi8uW7w.js";import"./ods-link2-DhrEm8Nk.js";import"./ods-button2-DJxJiLcj.js";import"./ods-spinner2-CPyWCS2f.js";import"./ods-card-CsxtEQHf.js";import"./ods-checkbox2-D1rfq4Wo.js";import"./dom-CO1DdTQY.js";import"./ods-clipboard2-PjbiunMl.js";import"./ods-input2-BVKbybMU.js";import"./type-B5zI8QxY.js";import"./ods-tooltip2-CW12aP9b.js";import"./overlay-KZpfSxWH.js";import"./ods-code2-CPtqO8K9.js";import"./ods-datepicker2-CHJb_Dii.js";import"./locale-NOa-Gxlr.js";import"./ods-divider-Dtiri0aY.js";import"./ods-divider2-yzIshch6.js";import"./ods-drawer2-DKhK7oOX.js";import"./ods-file-upload2-WcWZbv1U.js";import"./ods-progress-bar2-Dg_V5kiw.js";import"./ods-form-field2-BDYkM6lU.js";import"./ods-icon-DOZBIEJb.js";import"./ods-link-C3iAbK8i.js";import"./ods-medium2-BnayTic8.js";import"./ods-message-DErUZ_Xg.js";import"./ods-modal2-CLthqs1m.js";import"./ods-pagination2-CxhEcubt.js";import"./ods-select2-D2fKxfqw.js";import"./ods-password2-DNFrl9vd.js";import"./ods-phone-number2-qOf9h3xC.js";import"./ods-popover2-D0fTxPry.js";import"./ods-quantity2-DSK2z9QA.js";import"./ods-radio2-NdDFmobW.js";import"./ods-range2-DVd4LCay.js";import"./ods-skeleton2-B7sDasgF.js";import"./ods-switch-item2-D-SJNcDd.js";import"./ods-tabs2-ChMEr-fQ.js";import"./ods-table2-oe37kiP3.js";import"./ods-tag2-CInySbKk.js";import"./ods-text-BO_pN8NQ.js";import"./ods-textarea2-BJL14TBM.js";import"./ods-timepicker2-4lQj55gq.js";import"./ods-toggle2-BgUL7nI_.js";import"./index-DCBH0_Tl.js";function i(o){const e={code:"code",p:"p",...m(),...o.components};return t.jsxs(t.Fragment,{children:[t.jsx(p,{title:"OVHcloud Design System/Guides/Using Methods"}),`
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
