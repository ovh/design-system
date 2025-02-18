import{j as t,M as m,d as o}from"./index-CCbL8veO.js";import{u as p}from"./index-Cq3PbNHF.js";import{a as i}from"./index-uzYzEmTV.js";import{H as r}from"./Heading-DN6FdGMk.js";import"./iframe-DU4SvIHv.js";import"../sb-preview/runtime.js";import"./index-8AfNH5n5.js";import"./index-D-8MO0q_.js";import"./index-DrFu-skq.js";import"./ods-accordion2-C2zw5EtX.js";import"./index-DAZhnxgO.js";import"./icon-name-C6aMXAXT.js";import"./ods-icon2-C2sSMg6h.js";import"./ods-badge-CMZ1G1-q.js";import"./ods-breadcrumb-item2-Chi8uW7w.js";import"./ods-link2-DhrEm8Nk.js";import"./ods-button2-DJxJiLcj.js";import"./ods-spinner2-CPyWCS2f.js";import"./ods-card-CsxtEQHf.js";import"./ods-checkbox2-D1rfq4Wo.js";import"./dom-CO1DdTQY.js";import"./ods-clipboard2-PjbiunMl.js";import"./ods-input2-BVKbybMU.js";import"./type-B5zI8QxY.js";import"./ods-tooltip2-CW12aP9b.js";import"./overlay-KZpfSxWH.js";import"./ods-code2-CPtqO8K9.js";import"./ods-datepicker2-CHJb_Dii.js";import"./locale-NOa-Gxlr.js";import"./ods-divider-Dtiri0aY.js";import"./ods-divider2-yzIshch6.js";import"./ods-drawer2-DKhK7oOX.js";import"./ods-file-upload2-WcWZbv1U.js";import"./ods-progress-bar2-Dg_V5kiw.js";import"./ods-form-field2-BDYkM6lU.js";import"./ods-icon-DOZBIEJb.js";import"./ods-link-C3iAbK8i.js";import"./ods-medium2-BnayTic8.js";import"./ods-message-DErUZ_Xg.js";import"./ods-modal2-CLthqs1m.js";import"./ods-pagination2-CxhEcubt.js";import"./ods-select2-D2fKxfqw.js";import"./ods-password2-DNFrl9vd.js";import"./ods-phone-number2-qOf9h3xC.js";import"./ods-popover2-D0fTxPry.js";import"./ods-quantity2-DSK2z9QA.js";import"./ods-radio2-NdDFmobW.js";import"./ods-range2-DVd4LCay.js";import"./ods-skeleton2-B7sDasgF.js";import"./ods-switch-item2-D-SJNcDd.js";import"./ods-tabs2-ChMEr-fQ.js";import"./ods-table2-oe37kiP3.js";import"./ods-tag2-CInySbKk.js";import"./ods-text-BO_pN8NQ.js";import"./ods-textarea2-BJL14TBM.js";import"./ods-timepicker2-4lQj55gq.js";import"./ods-toggle2-BgUL7nI_.js";import"./index-DCBH0_Tl.js";function s(n){const e={code:"code",p:"p",...p(),...n.components};return t.jsxs(t.Fragment,{children:[t.jsx(m,{title:"OVHcloud Design System/Guides/Using Events"}),`
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
`,dark:"true",language:"tsx"})]})}function ht(n={}){const{wrapper:e}={...p(),...n.components};return e?t.jsx(e,{...n,children:t.jsx(s,{...n})}):s(n)}export{ht as default};
