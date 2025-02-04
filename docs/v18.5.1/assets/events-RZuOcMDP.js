import{j as t,M as m,d as o}from"./index-DQsySnuC.js";import{u as p}from"./index-Xj8pMhSr.js";import{a as i}from"./index-CihiY_f6.js";import{H as r}from"./Heading-DDc_MF2r.js";import"./iframe-DRtgxPEL.js";import"../sb-preview/runtime.js";import"./index-8AfNH5n5.js";import"./index-D-8MO0q_.js";import"./index-DrFu-skq.js";import"./ods-accordion2-Bgg69lRV.js";import"./index-DAZhnxgO.js";import"./icon-name-C6aMXAXT.js";import"./ods-icon2-Bl6f3POv.js";import"./ods-badge-tHc24Eg4.js";import"./ods-breadcrumb-item2-CoLTn2CF.js";import"./ods-link2-DDMr4sUm.js";import"./ods-button2-Bhm26DQr.js";import"./ods-spinner2-DCN2yKlT.js";import"./ods-card-B_VebKXk.js";import"./ods-checkbox2-BOuFx8yF.js";import"./dom-CO1DdTQY.js";import"./ods-clipboard2-NuJn2ry3.js";import"./ods-input2-B9cw61K_.js";import"./type-B5zI8QxY.js";import"./ods-tooltip2-BwzEvmuE.js";import"./overlay-KZpfSxWH.js";import"./ods-code2-bZeM2NI-.js";import"./ods-datepicker2-DwwUrg1C.js";import"./locale-NOa-Gxlr.js";import"./ods-divider-3cgmT4wP.js";import"./ods-divider2-Dc25YIYb.js";import"./ods-drawer2-DsENZFv4.js";import"./ods-file-upload2-CPd6D9Z5.js";import"./ods-progress-bar2-BuFm8qT0.js";import"./ods-form-field2-Tc9B1-rj.js";import"./ods-icon-NURRZ9Mf.js";import"./ods-link-BE9dMQzg.js";import"./ods-medium2-BB_NU63C.js";import"./ods-message-B9bD81Bu.js";import"./ods-modal2-CP36WQeg.js";import"./ods-pagination2-CotgNPzL.js";import"./ods-select2-B4wr0dem.js";import"./ods-password2-BQKXsiEd.js";import"./ods-phone-number2-D1K1HcDS.js";import"./ods-popover2-hre_XUC2.js";import"./ods-quantity2-DOjRn13r.js";import"./ods-radio2-BtBodUES.js";import"./ods-range2-BhwU834C.js";import"./ods-skeleton2-dZcgHYAN.js";import"./ods-switch-item2-m1p75_3x.js";import"./ods-tabs2-wJlXfoZt.js";import"./ods-table2-vWlGUOoj.js";import"./ods-tag2-Dj0-zHXw.js";import"./ods-text-CTeC-41B.js";import"./ods-textarea2-BHQdu6bK.js";import"./ods-timepicker2-2oCWgeQp.js";import"./ods-toggle2-DbSuYqWU.js";import"./index-DCBH0_Tl.js";function s(n){const e={code:"code",p:"p",...p(),...n.components};return t.jsxs(t.Fragment,{children:[t.jsx(m,{title:"OVHcloud Design System/Guides/Using Events"}),`
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
