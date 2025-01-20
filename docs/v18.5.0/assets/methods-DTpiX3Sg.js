import{j as e,M as i,d as o}from"./index-aSJOi-xY.js";import{u as a}from"./index-D_oymSD0.js";import{a as c}from"./index-DduIf26o.js";import{H as s}from"./Heading-fUBW5LMg.js";import"./iframe-Cjn0x15a.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-D-8MO0q_.js";import"./index-DX_4BEHg.js";import"./index-DrFu-skq.js";import"./index-B1WyGMUD.js";function r(n){const t={code:"code",p:"p",...a(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{title:"OVHcloud Design System/Guides/Using Methods"}),`
`,e.jsx(s,{label:"Using Methods",level:1}),`
`,e.jsx(t.p,{children:"Some ODS components are exposing methods."}),`
`,e.jsxs(t.p,{children:["Those methods behave the same as native Javascript methods (like for example, the ",e.jsx(t.code,{children:"focus()"})," method), thus they can be used the same way."]}),`
`,e.jsxs(t.p,{children:["Example for an ",e.jsx(t.code,{children:"ods-input"}),":"]}),`
`,e.jsx(o,{code:`
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
`,e.jsx(s,{label:"React usage",level:2}),`
`,e.jsxs(t.p,{children:["Like native elements, accessing methods need to set a ref to the DOM element (see ",e.jsx(c,{href:"https://react.dev/learn/manipulating-the-dom-with-refs",label:"React documentation",target:"_blank"}),")."]}),`
`,e.jsxs(t.p,{children:["Example for an ",e.jsx(t.code,{children:"odsInput"}),":"]}),`
`,e.jsx(o,{code:`
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
`,dark:"true",language:"tsx"})]})}function y(n={}){const{wrapper:t}={...a(),...n.components};return t?e.jsx(t,{...n,children:e.jsx(r,{...n})}):r(n)}export{y as default};
