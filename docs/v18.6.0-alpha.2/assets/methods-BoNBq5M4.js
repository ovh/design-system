import{j as t,M as p,d as r}from"./index-Cg27MLKJ.js";import{u as m}from"./index-CRYdQg8Y.js";import{a as s}from"./index-DpXZhc7f.js";import{H as i}from"./Heading-J7HCFxl6.js";import"./iframe-J0ZUQmQ0.js";import"../sb-preview/runtime.js";import"./index-8AfNH5n5.js";import"./index-D-8MO0q_.js";import"./index-DrFu-skq.js";import"./ods-accordion2-C_uqOg6Y.js";import"./index-DAZhnxgO.js";import"./icon-name-C6aMXAXT.js";import"./ods-icon2-DRPHarK1.js";import"./ods-badge-CjbpLGl8.js";import"./ods-breadcrumb-item2-C_Ah5FZN.js";import"./ods-link2-CtVFUlMR.js";import"./ods-button2-dPaqs0uX.js";import"./ods-spinner2-CPyWCS2f.js";import"./ods-card-CsxtEQHf.js";import"./ods-checkbox2-CJl-a8ad.js";import"./dom-8hoR-urs.js";import"./ods-clipboard2-CewZJu-c.js";import"./ods-input2-C6KOqFAM.js";import"./type-B5zI8QxY.js";import"./ods-tooltip2-CW12aP9b.js";import"./overlay-KZpfSxWH.js";import"./ods-code2-BL2TW0HP.js";import"./ods-combobox2-CyL0bVv9.js";import"./_commonjsHelpers-CLD5em3H.js";import"./debounce-DRefBDpX.js";import"./ods-tag2-Bb2BMy9d.js";import"./ods-datepicker2-CijAhCPy.js";import"./locale-NOa-Gxlr.js";import"./ods-divider-Dtiri0aY.js";import"./ods-divider2-yzIshch6.js";import"./ods-drawer2-DKhK7oOX.js";import"./ods-file-upload2-Ca3mZ5BD.js";import"./ods-progress-bar2-Dg_V5kiw.js";import"./ods-form-field2-BDYkM6lU.js";import"./ods-icon-DTp5PnPI.js";import"./ods-input-CCQ46ZEm.js";import"./ods-link-BCeMi6SV.js";import"./ods-medium2-BnayTic8.js";import"./ods-message-DuyDaLcv.js";import"./ods-modal2-DCK89o-L.js";import"./ods-pagination2-shUGU0gB.js";import"./ods-select2-CEKvSxa4.js";import"./ods-password2-D64-z8ym.js";import"./ods-phone-number2-BL58mHzY.js";import"./ods-popover2-mGbx5HiL.js";import"./ods-quantity2-7U22nj6z.js";import"./ods-radio2-DDJaSdNS.js";import"./ods-range2-wBjnlon-.js";import"./ods-skeleton2-B7sDasgF.js";import"./ods-switch-item2-D-SJNcDd.js";import"./ods-tabs2-ChMEr-fQ.js";import"./ods-table2-oe37kiP3.js";import"./ods-text-BO_pN8NQ.js";import"./ods-textarea2-BDOVTqwb.js";import"./ods-timepicker2-DVnCnUkw.js";import"./ods-toggle2-Bg02aln1.js";import"./index-CGJBSJl7.js";function n(o){const e={code:"code",p:"p",...m(),...o.components};return t.jsxs(t.Fragment,{children:[t.jsx(p,{title:"OVHcloud Design System/Guides/Using Methods"}),`
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
