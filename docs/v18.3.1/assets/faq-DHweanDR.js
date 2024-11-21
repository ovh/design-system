import{j as e}from"./jsx-runtime-BtDUu9js.js";import{u as r}from"./index-DZL6x4lo.js";import{a as l}from"./index-DtXgNHxz.js";import{M as a,d}from"./index-CYldocI7.js";import{H as o}from"./Heading-DwuTnCox.js";import{S as s}from"./StorybookLink-BiRTKXGy.js";import"./iframe-D7GxXTWn.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-B_J8iUie.js";import"./index-DX_4BEHg.js";import"./index-DrFu-skq.js";import"./index-BvAGq-5Z.js";function i(t){const n={a:"a",code:"code",em:"em",p:"p",...r(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{title:"OVHcloud Design System/F.A.Q."}),`
`,e.jsx(o,{label:"Frequently Asked Questions",level:1}),`
`,e.jsx(n.p,{children:e.jsx(n.em,{children:"Welcome to the F.A.Q. section of the OVHcloud Design System (ODS)."})}),`
`,e.jsx(n.p,{children:e.jsx(n.em,{children:"Here, we aim to address common questions and provide helpful guidance for developers."})}),`
`,e.jsx(o,{label:"I can't find a component I need",level:2}),`
`,e.jsx(n.p,{children:"ODS provides base components that you can build on top of and implement in various contexts."}),`
`,e.jsx(n.p,{children:"If you need a new component, we recommend working with the design team to request and design the component to ensure it aligns with the ODS guidelines."}),`
`,e.jsx(o,{label:"How do I customize the style of my component?",level:2}),`
`,e.jsx(n.p,{children:"To customize the style of your component, you can refer individually to the technical information of the component you wish to customize."}),`
`,e.jsx(n.p,{children:e.jsxs(n.em,{children:["Example here with the ",e.jsx(n.a,{href:"?path=/docs/ods-components-accordion--technical-information#style-customization",children:e.jsx(l,{label:"Accordion component"})}),"."]})}),`
`,e.jsx(n.p,{children:"It provides detailed instructions on how to apply custom styles effectively."}),`
`,e.jsx(o,{label:"[React] How can I test events with `react-testing-library`?",level:2}),`
`,e.jsxs(n.p,{children:["Custom events such as the ones from ODS can be tested in React with ",e.jsx(n.code,{children:"fireEvent"}),"."]}),`
`,e.jsxs(n.p,{children:["For example, to test the ",e.jsx(n.code,{children:"odsChange"})," event on ",e.jsx(n.code,{children:"ods-input"}),":"]}),`
`,e.jsx(d,{code:`
import { render, fireEvent } from '@testing-library/react';
import { OdsInput } from '@ovhcloud/ods-components/react';

test('should handle odsChange event', () => {
  const handleChange = jest.fn();
  const { getByTestId } = render(<OdsInput onOdsChange={ handleChange } data-testid="ods-input" />);

  fireEvent.change(getByTestId('ods-input'), { target: { value: 'new value' } });

  expect(handleChange).toHaveBeenCalled();
});
`,dark:"true",language:"tsx"}),`
`,e.jsx(o,{label:"Can I use another CSS framework on top of ODS?",level:2}),`
`,e.jsx(n.p,{children:"ODS components are primarily native web components, allowing you to apply styling from different CSS frameworks."}),`
`,e.jsx(n.p,{children:"Note that some imperative CSS frameworks like Bootstrap may override ODS styling."}),`
`,e.jsx(n.p,{children:"Ensure compatibility by testing the integration in your project."}),`
`,e.jsx(o,{label:"How can I import ESModule / CommonJS packages?",level:2}),`
`,e.jsxs(n.p,{children:["For detailed instructions on importing ESModule or CommonJS packages, please refer to our ",e.jsx(s,{label:"Get Started",title:"OVHcloud Design System/Get Started"})," documentation."]}),`
`,e.jsx(o,{label:"How can I import ODS CSS-only styling?",level:2}),`
`,e.jsxs(n.p,{children:["To import ODS CSS-only styling, please refer to our ",e.jsx(s,{label:"Get Started",title:"OVHcloud Design System/Get Started"})," documentation."]}),`
`,e.jsx(o,{label:"[ODS >= v17.1.0 | Safari < v16.2] My form elements are not displayed?",level:2}),`
`,e.jsxs(n.p,{children:["If you are using a form component such as ",e.jsx(n.em,{children:"OdsInput"})," on ODS version ",e.jsx(n.code,{children:">= 17.1.0"}),", you might encounter an issue with your component not being displayed on older versions of Safari (",e.jsx(n.code,{children:"< 16.2"}),")."]}),`
`,e.jsxs(n.p,{children:["This is primarily due to older versions of Safari not supporting ",e.jsx(n.code,{children:"AttachInternals"})," which are essential for our components to connect form elements with forms."]}),`
`,e.jsxs(n.p,{children:["We would therefore recommend using versions of Safari superior to ",e.jsx(n.code,{children:"16.4"}),"."]}),`
`,e.jsx(o,{label:"[React] Boolean Attributes",level:2}),`
`,e.jsxs(n.p,{children:["There is a known bug in the React component and the boolean properties. If you bind the property like this ",e.jsx(n.code,{children:"isDisabled={isDisabled}"})," when the variable ",e.jsx(n.code,{children:"isDisabled"})," was ",e.jsx(n.code,{children:"false"})," the property wiil not be removed."]}),`
`,e.jsxs(n.p,{children:["To solve this problem you can bind the property ",e.jsx(n.code,{children:"isDisabled={ isDisabled ? true : undefined }"}),"."]}),`
`,e.jsx(n.p,{children:"Issue Source: https://github.com/facebook/react/issues/9230?fbclid=IwAR1VhQVMpSy3VkGWCOjpwO60y6PxXJOcwdvE88AX1TjBxDaHfwsfHJYeOJU#issuecomment-1094149596"})]})}function w(t={}){const{wrapper:n}={...r(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(i,{...t})}):i(t)}export{w as default};
