import{j as e,M as p,d as m}from"./index-CCbL8veO.js";import{u as a}from"./index-Cq3PbNHF.js";import{a as i}from"./index-uzYzEmTV.js";import{H as t}from"./Heading-DN6FdGMk.js";import{S as r,H as s}from"./StorybookLink-Dd4tegpy.js";import"./iframe-DU4SvIHv.js";import"../sb-preview/runtime.js";import"./index-8AfNH5n5.js";import"./index-D-8MO0q_.js";import"./index-DrFu-skq.js";import"./ods-accordion2-C2zw5EtX.js";import"./index-DAZhnxgO.js";import"./icon-name-C6aMXAXT.js";import"./ods-icon2-C2sSMg6h.js";import"./ods-badge-CMZ1G1-q.js";import"./ods-breadcrumb-item2-Chi8uW7w.js";import"./ods-link2-DhrEm8Nk.js";import"./ods-button2-DJxJiLcj.js";import"./ods-spinner2-CPyWCS2f.js";import"./ods-card-CsxtEQHf.js";import"./ods-checkbox2-D1rfq4Wo.js";import"./dom-CO1DdTQY.js";import"./ods-clipboard2-PjbiunMl.js";import"./ods-input2-BVKbybMU.js";import"./type-B5zI8QxY.js";import"./ods-tooltip2-CW12aP9b.js";import"./overlay-KZpfSxWH.js";import"./ods-code2-CPtqO8K9.js";import"./ods-datepicker2-CHJb_Dii.js";import"./locale-NOa-Gxlr.js";import"./ods-divider-Dtiri0aY.js";import"./ods-divider2-yzIshch6.js";import"./ods-drawer2-DKhK7oOX.js";import"./ods-file-upload2-WcWZbv1U.js";import"./ods-progress-bar2-Dg_V5kiw.js";import"./ods-form-field2-BDYkM6lU.js";import"./ods-icon-DOZBIEJb.js";import"./ods-link-C3iAbK8i.js";import"./ods-medium2-BnayTic8.js";import"./ods-message-DErUZ_Xg.js";import"./ods-modal2-CLthqs1m.js";import"./ods-pagination2-CxhEcubt.js";import"./ods-select2-D2fKxfqw.js";import"./ods-password2-DNFrl9vd.js";import"./ods-phone-number2-qOf9h3xC.js";import"./ods-popover2-D0fTxPry.js";import"./ods-quantity2-DSK2z9QA.js";import"./ods-radio2-NdDFmobW.js";import"./ods-range2-DVd4LCay.js";import"./ods-skeleton2-B7sDasgF.js";import"./ods-switch-item2-D-SJNcDd.js";import"./ods-tabs2-ChMEr-fQ.js";import"./ods-table2-oe37kiP3.js";import"./ods-tag2-CInySbKk.js";import"./ods-text-BO_pN8NQ.js";import"./ods-textarea2-BJL14TBM.js";import"./ods-timepicker2-4lQj55gq.js";import"./ods-toggle2-BgUL7nI_.js";import"./index-DCBH0_Tl.js";function l(n){const o={a:"a",code:"code",em:"em",p:"p",...a(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(p,{title:"OVHcloud Design System/F.A.Q."}),`
`,e.jsx(t,{label:"Frequently Asked Questions",level:1}),`
`,e.jsx(o.p,{children:e.jsx(o.em,{children:"Welcome to the F.A.Q. section of the OVHcloud Design System (ODS)."})}),`
`,e.jsx(o.p,{children:e.jsx(o.em,{children:"Here, we aim to address common questions and provide helpful guidance for developers."})}),`
`,e.jsx(t,{label:"I can't find a component I need",level:2}),`
`,e.jsx(o.p,{children:"ODS provides base components that you can build on top of and implement in various contexts."}),`
`,e.jsx(o.p,{children:"If you need a new component, we recommend working with the design team to request and design the component to ensure it aligns with the ODS guidelines."}),`
`,e.jsx(t,{label:"How do I customize the style of my component?",level:2}),`
`,e.jsx(o.p,{children:"To customize the style of your component, you can refer individually to the technical information of the component you wish to customize."}),`
`,e.jsx(o.p,{children:e.jsxs(o.em,{children:["Example here with the ",e.jsx(o.a,{href:"?path=/docs/ods-components-accordion--technical-information#style-customization",children:e.jsx(i,{label:"Accordion component"})}),"."]})}),`
`,e.jsx(o.p,{children:"It provides detailed instructions on how to apply custom styles effectively."}),`
`,e.jsx(t,{label:"[React] How can I test events with `react-testing-library`?",level:2}),`
`,e.jsxs(o.p,{children:["Custom events such as the ones from ODS can be tested in React with ",e.jsx(o.code,{children:"fireEvent"}),"."]}),`
`,e.jsxs(o.p,{children:["For example, to test the ",e.jsx(o.code,{children:"odsChange"})," event on ",e.jsx(o.code,{children:"ods-input"}),":"]}),`
`,e.jsx(m,{code:`
import { render, fireEvent } from '@testing-library/react';
import { OdsInput } from '@ovhcloud/ods-components/react';

test('should handle odsChange event', () => {
  const handleChange = jest.fn();
  const { getByTestId } = render(<OdsInput onOdsChange={ handleChange } data-testid="ods-input" />);

  fireEvent.change(getByTestId('ods-input'), { target: { value: 'new value' } });

  expect(handleChange).toHaveBeenCalled();
});
`,dark:"true",language:"tsx"}),`
`,e.jsx(t,{label:"Can I use another CSS framework on top of ODS?",level:2}),`
`,e.jsx(o.p,{children:"ODS components are primarily native web components, allowing you to apply styling from different CSS frameworks."}),`
`,e.jsx(o.p,{children:"Note that some imperative CSS frameworks like Bootstrap may override ODS styling."}),`
`,e.jsx(o.p,{children:"Ensure compatibility by testing the integration in your project."}),`
`,e.jsx(t,{label:"How can I import ESModule / CommonJS packages?",level:2}),`
`,e.jsxs(o.p,{children:["For detailed instructions on importing ESModule or CommonJS packages, please refer to our ",e.jsx(r,{label:"Get Started",title:s.getStarted})," documentation."]}),`
`,e.jsx(t,{label:"How can I import ODS CSS-only styling?",level:2}),`
`,e.jsxs(o.p,{children:["To import ODS CSS-only styling, please refer to our ",e.jsx(r,{label:"Get Started",title:s.getStarted})," documentation."]}),`
`,e.jsx(t,{label:"[ODS >= v17.1.0 | Safari < v16.2] My form elements are not displayed?",level:2}),`
`,e.jsxs(o.p,{children:["If you are using a form component such as ",e.jsx(o.em,{children:"OdsInput"})," on ODS version ",e.jsx(o.code,{children:">= 17.1.0"}),", you might encounter an issue with your component not being displayed on older versions of Safari (",e.jsx(o.code,{children:"< 16.2"}),")."]}),`
`,e.jsxs(o.p,{children:["This is primarily due to older versions of Safari not supporting ",e.jsx(o.code,{children:"AttachInternals"})," which are essential for our components to connect form elements with forms."]}),`
`,e.jsxs(o.p,{children:["We would therefore recommend using versions of Safari superior to ",e.jsx(o.code,{children:"16.4"}),"."]}),`
`,e.jsx(t,{label:"[React] Boolean Attributes",level:2}),`
`,e.jsxs(o.p,{children:["There is a known bug in the React component and the boolean properties. If you bind the property like this ",e.jsx(o.code,{children:"isDisabled={isDisabled}"})," when the variable ",e.jsx(o.code,{children:"isDisabled"})," was ",e.jsx(o.code,{children:"false"})," the property wiil not be removed."]}),`
`,e.jsxs(o.p,{children:["To solve this problem you can bind the property ",e.jsx(o.code,{children:"isDisabled={ isDisabled ? true : undefined }"}),"."]}),`
`,e.jsxs(o.p,{children:[e.jsx(i,{href:"https://github.com/facebook/react/issues/9230?fbclid=IwAR1VhQVMpSy3VkGWCOjpwO60y6PxXJOcwdvE88AX1TjBxDaHfwsfHJYeOJU#issuecomment-1094149596",label:"Issue Source",target:"_blank"}),"."]})]})}function fe(n={}){const{wrapper:o}={...a(),...n.components};return o?e.jsx(o,{...n,children:e.jsx(l,{...n})}):l(n)}export{fe as default};
