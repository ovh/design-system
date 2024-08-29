import{j as e}from"./jsx-runtime-Dn0LW--f.js";import{u as s}from"./index-DeyDdHvX.js";import{M as i}from"./index-BM3JsZOq.js";import"./iframe-6_jBXMSq.js";import"../sb-preview/runtime.js";import"./commonjsHelpers-Cpj98o6Y.js";import"./index-B_J8iUie.js";import"./index-DX_4BEHg.js";import"./index-DrFu-skq.js";function t(o){const n={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",p:"p",pre:"pre",...s(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{title:"OVHcloud Design System/F.A.Q."}),`
`,e.jsx(n.h1,{id:"frequently-asked-questions",children:"Frequently Asked Questions"}),`
`,e.jsx(n.p,{children:e.jsx(n.em,{children:"Welcome to the F.A.Q. section of the OVHcloud Design System (ODS)."})}),`
`,e.jsx(n.p,{children:e.jsx(n.em,{children:"Here, we aim to address common questions and provide helpful guidance for developers."})}),`
`,e.jsx(n.h2,{id:"i-cant-find-a-component-i-need",children:"I can't find a component I need"}),`
`,e.jsx(n.p,{children:"ODS provides base components that you can build on top of and implement in various contexts."}),`
`,e.jsx(n.p,{children:"If you need a new component, we recommend working with the design team to request and design the component to ensure it aligns with the ODS guidelines."}),`
`,e.jsx(n.h2,{id:"how-do-i-customize-the-style-of-my-component",children:"How do I customize the style of my component?"}),`
`,e.jsx(n.p,{children:"To customize the style of your component, you can refer individually to the technical information of the component you wish to customize."}),`
`,e.jsx(n.p,{children:e.jsxs(n.em,{children:["Example here with the ",e.jsx(n.a,{href:"?path=/docs/ods-components-accordion--technical-information#style-customization",children:"Accordion component"}),"."]})}),`
`,e.jsx(n.p,{children:"It provides detailed instructions on how to apply custom styles effectively."}),`
`,e.jsxs(n.h2,{id:"react-how-can-i-test-events-with-react-testing-library",children:["[React] How can I test events with ",e.jsx(n.code,{children:"react-testing-library"}),"?"]}),`
`,e.jsxs(n.p,{children:["Custom events such as the ones from ODS can be tested in React with ",e.jsx(n.code,{children:"fireEvent"}),"."]}),`
`,e.jsxs(n.p,{children:["For example, to test the ",e.jsx(n.code,{children:"odsChange"})," event on ",e.jsx(n.code,{children:"ods-input"}),":"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`import { render, fireEvent } from '@testing-library/react';
import { OdsInput } from '@ovhcloud/ods-components/react';

test('should handle odsChange event', () => {
  const handleChange = jest.fn();
  const { getByTestId } = render(<OdsInput onOdsChange={handleChange} data-testid="ods-input" />);

  fireEvent.change(getByTestId('ods-input'), { target: { value: 'new value' } });

  expect(handleChange).toHaveBeenCalled();
});
`})}),`
`,e.jsx(n.h2,{id:"can-i-use-another-css-framework-on-top-of-ods",children:"Can I use another CSS framework on top of ODS?"}),`
`,e.jsx(n.p,{children:"ODS components are primarily native web components, allowing you to apply styling from different CSS frameworks."}),`
`,e.jsx(n.p,{children:"Note that some imperative CSS frameworks like Bootstrap may override ODS styling."}),`
`,e.jsx(n.p,{children:"Ensure compatibility by testing the integration in your project."}),`
`,e.jsx(n.h2,{id:"how-can-i-import-esmodule--commonjs-packages",children:"How can I import ESModule / CommonJS packages?"}),`
`,e.jsxs(n.p,{children:["For detailed instructions on importing ESModule or CommonJS packages, please refer to our ",e.jsx(n.a,{href:"?path=/docs/ovhcloud-design-system-get-started--docs",children:"Get Started"})," documentation."]}),`
`,e.jsx(n.h2,{id:"how-can-i-import-ods-css-only-styling",children:"How can I import ODS CSS-only styling?"}),`
`,e.jsxs(n.p,{children:["To import ODS CSS-only styling, please refer to our ",e.jsx(n.a,{href:"?path=/docs/ovhcloud-design-system-get-started--docs",children:"Get Started"})," documentation."]}),`
`,e.jsx(n.h2,{id:"ods--v1710--safari--v162-my-form-elements-are-not-displayed",children:"[ODS >= v17.1.0 | Safari < v16.2] My form elements are not displayed?"}),`
`,e.jsxs(n.p,{children:["If you are using a form component such as ",e.jsx(n.em,{children:"OdsInput"})," on ODS version ",e.jsx(n.code,{children:">= 17.1.0"}),", you might encounter an issue with your component not being displayed on older versions of Safari (",e.jsx(n.code,{children:"< 16.2"}),")."]}),`
`,e.jsxs(n.p,{children:["This is primarily due to older versions of Safari not supporting ",e.jsx(n.code,{children:"AttachInternals"})," which are essential for our components to connect form elements with forms."]}),`
`,e.jsxs(n.p,{children:["We would therefore recommend using versions of Safari superior to ",e.jsx(n.code,{children:"16.4"}),"."]})]})}function f(o={}){const{wrapper:n}={...s(),...o.components};return n?e.jsx(n,{...o,children:e.jsx(t,{...o})}):t(o)}export{f as default};
