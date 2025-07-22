import{j as e,M as p,d as m}from"./index-BrmSy-BG.js";import{u as a}from"./index-TCYrSnCw.js";import{a as i}from"./index-BMEfs1PX.js";import{H as t}from"./Heading-h9_R5O_m.js";import{S as r,H as s}from"./StorybookLink-BSLFWvfn.js";import"./iframe-CoTylaVC.js";import"../sb-preview/runtime.js";import"./index-8AfNH5n5.js";import"./index-D-8MO0q_.js";import"./index-DrFu-skq.js";import"./ods-accordion2-vvZNAi9U.js";import"./index-DAZhnxgO.js";import"./icon-name-C6aMXAXT.js";import"./ods-icon2-DRPHarK1.js";import"./ods-badge-CjbpLGl8.js";import"./ods-breadcrumb-item2-C_Ah5FZN.js";import"./ods-link2-CtVFUlMR.js";import"./ods-button2-dPaqs0uX.js";import"./ods-spinner2-CPyWCS2f.js";import"./ods-card-DRGl4_I-.js";import"./ods-checkbox2-B2XbvOPY.js";import"./dom-8hoR-urs.js";import"./ods-clipboard2-DUxkOe0Y.js";import"./ods-input2-CtkWk4I-.js";import"./type-B5zI8QxY.js";import"./ods-tooltip2-CW12aP9b.js";import"./overlay-KZpfSxWH.js";import"./ods-code2-CA-HDrzL.js";import"./ods-combobox2-Cz_u_uR7.js";import"./_commonjsHelpers-CLD5em3H.js";import"./debounce-DRefBDpX.js";import"./ods-tag2-Bb2BMy9d.js";import"./ods-datepicker2-FisogS88.js";import"./locale-NOa-Gxlr.js";import"./ods-divider-CjaMxjcH.js";import"./ods-divider2-R3gNNk4H.js";import"./ods-drawer2-BQqpNIWL.js";import"./ods-file-upload2-h1g6N6Hs.js";import"./ods-progress-bar2-zR9YGHZb.js";import"./ods-form-field2-BSNGPVxz.js";import"./ods-icon-DTp5PnPI.js";import"./ods-input-COMKDAZi.js";import"./ods-link-BCeMi6SV.js";import"./ods-medium2-BnayTic8.js";import"./ods-message-BxLNJd0H.js";import"./ods-modal2-BQO4yvXA.js";import"./ods-pagination2--R9v9RO1.js";import"./ods-select2-C8koqTnw.js";import"./ods-password2-aWfdhtsQ.js";import"./ods-phone-number2-DJcH2Gr8.js";import"./ods-popover2-D09FwiGN.js";import"./ods-quantity2-BgFzW1u9.js";import"./ods-radio2-C2vNRNiP.js";import"./ods-range2-l-uevN51.js";import"./ods-skeleton2-B7sDasgF.js";import"./ods-switch-item2-ebcV2EUF.js";import"./ods-tabs2-BNbhFfmR.js";import"./ods-table2-oe37kiP3.js";import"./ods-text-BO_pN8NQ.js";import"./ods-textarea2-BDOVTqwb.js";import"./ods-timepicker2-DSjpZYdI.js";import"./ods-toggle2-Bg02aln1.js";import"./index-BfWXrq3E.js";function l(n){const o={a:"a",code:"code",em:"em",p:"p",...a(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(p,{title:"OVHcloud Design System/F.A.Q."}),`
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
`,e.jsxs(o.p,{children:[e.jsx(i,{href:"https://github.com/facebook/react/issues/9230?fbclid=IwAR1VhQVMpSy3VkGWCOjpwO60y6PxXJOcwdvE88AX1TjBxDaHfwsfHJYeOJU#issuecomment-1094149596",label:"Issue Source",target:"_blank"}),"."]})]})}function be(n={}){const{wrapper:o}={...a(),...n.components};return o?e.jsx(o,{...n,children:e.jsx(l,{...n})}):l(n)}export{be as default};
