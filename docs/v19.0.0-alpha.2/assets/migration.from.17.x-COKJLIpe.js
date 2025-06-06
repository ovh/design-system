import{j as e}from"./jsx-runtime-VM66peLj.js";import{useMDXComponents as d}from"./index-DQB45XCM.js";import{h as n}from"./Badge-EGenXdCK-DDYseYDy.js";import{M as h,S as o}from"./index-BlaLg9GY.js";import{Q as u}from"./quantity.stories-DZzZL2eE.js";import{H as t}from"./Heading-6Mfikk-c.js";import{S as r,a as c,O as a}from"./StorybookLink-Dek5KO7Z.js";import"./index-D_CmzhJ4.js";import"./index-2w0W-O47-BJ19ihbZ.js";import"./iframe-CGgj-FAD.js";import"./index-ChzAxGiP.js";import"./index-CucsY3YN.js";import"./index-CXQShRbs.js";import"./index-DrFu-skq.js";import"./FormFieldLabel-BxxkSoC9.js";import"./index-CkQHsVsO.js";import"./index-BCxMAfLs.js";import"./use-field-context-BA6pMY5L.js";import"./use-locale-context-Z4fgdY29.js";import"./Button-BRERPjFq.js";import"./Spinner-CcwadLZv.js";import"./icon-name-jL3axqAU.js";import"./controls-BtiQQn1l.js";import"./Link-Ck4D7Gly-DoENOEBg.js";function l(i){const s={code:"code",p:"p",...d(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(h,{of:u,name:"Migration From 17.x"}),`
`,e.jsx(t,{label:"Quantity - migrate from v17 to v18",level:1}),`
`,e.jsx(t,{label:"Usage changes",level:2}),`
`,e.jsx(s.p,{children:"Quantity component was using slots, expecting specific components in it to work as expected."}),`
`,e.jsx(s.p,{children:"It has been fully reworked to be a all-in-one form element component."}),`
`,e.jsx(s.p,{children:"You can now use it directly as any input element."}),`
`,e.jsx(s.p,{children:"Here is an example of the previous declaration with ODS component:"}),`
`,e.jsx(o,{code:`
<osds-quantity>
  <osds-button slot='minus' color='primary' size='sm'>
    <osds-icon size='sm' contrasted name='minus'></osds-icon>
  </osds-button>
  <osds-input type='number' color='primary'></osds-input>
  <osds-button slot='plus' color='primary' size='sm'>
    <osds-icon size='sm' contrasted name='plus'></osds-icon>
  </osds-button>
</osds-quantity>
`,dark:"true",language:"html"}),`
`,e.jsx(s.p,{children:"The same result would now be achieved using:"}),`
`,e.jsx(o,{code:`
<ods-quantity>
</ods-quantity>
`,dark:"true",language:"html"}),`
`,e.jsx(t,{label:"Attributes changes",level:2}),`
`,e.jsxs(s.p,{children:[e.jsx(s.code,{children:"disabled"})," ",e.jsx(n,{color:"information",size:"sm",children:"Updated"})]}),`
`,e.jsx(s.p,{children:"Has been updated."}),`
`,e.jsxs(s.p,{children:["You can use the new ",e.jsx(s.code,{children:"isDisabled"})," attribute to obtain the same behavior."]}),`
`,e.jsxs(s.p,{children:[e.jsx(s.code,{children:"defaultValue"})," ",e.jsx(n,{color:"success",size:"sm",children:"New"})]}),`
`,e.jsx(s.p,{children:"New attribute (optional)."}),`
`,e.jsxs(s.p,{children:["You can use the new ",e.jsx(s.code,{children:"defaultValue"})," attribute to obtain the same behavior as with input."]}),`
`,e.jsxs(s.p,{children:[e.jsx(s.code,{children:"ariaLabel"})," ",e.jsx(n,{color:"success",size:"sm",children:"New"})]}),`
`,e.jsx(s.p,{children:"New attribute (optional)."}),`
`,e.jsxs(s.p,{children:["You can use the new ",e.jsx(s.code,{children:"ariaLabel"})," attribute to obtain the same behavior as with input."]}),`
`,e.jsxs(s.p,{children:[e.jsx(s.code,{children:"ariaLabelledby"})," ",e.jsx(n,{color:"success",size:"sm",children:"New"})]}),`
`,e.jsx(s.p,{children:"New attribute (optional)."}),`
`,e.jsxs(s.p,{children:["You can use the new ",e.jsx(s.code,{children:"araiLabelledby"})," attribute to obtain the same behavior as with input."]}),`
`,e.jsxs(s.p,{children:[e.jsx(s.code,{children:"hasError"})," ",e.jsx(n,{color:"success",size:"sm",children:"New"})]}),`
`,e.jsx(s.p,{children:"New attribute (optional)."}),`
`,e.jsxs(s.p,{children:["You can use the new ",e.jsx(s.code,{children:"hasError"})," attribute to obtain the same behavior as with input."]}),`
`,e.jsxs(s.p,{children:[e.jsx(s.code,{children:"isReadonly"})," ",e.jsx(n,{color:"success",size:"sm",children:"New"})]}),`
`,e.jsx(s.p,{children:"New attribute (optional)."}),`
`,e.jsxs(s.p,{children:["You can use the new ",e.jsx(s.code,{children:"isReadonly"})," attribute to obtain the same behavior as with input."]}),`
`,e.jsxs(s.p,{children:[e.jsx(s.code,{children:"isRequired"})," ",e.jsx(n,{color:"success",size:"sm",children:"New"})]}),`
`,e.jsx(s.p,{children:"New attribute (optional)."}),`
`,e.jsxs(s.p,{children:["You can use the new ",e.jsx(s.code,{children:"isRequired"})," attribute to obtain the same behavior as with input."]}),`
`,e.jsxs(s.p,{children:[e.jsx(s.code,{children:"max"})," ",e.jsx(n,{color:"success",size:"sm",children:"New"})]}),`
`,e.jsx(s.p,{children:"New attribute (optional)."}),`
`,e.jsxs(s.p,{children:["You can use the new ",e.jsx(s.code,{children:"max"})," attribute to obtain the same behavior as with input."]}),`
`,e.jsxs(s.p,{children:[e.jsx(s.code,{children:"min"})," ",e.jsx(n,{color:"success",size:"sm",children:"New"})]}),`
`,e.jsx(s.p,{children:"New attribute (optional)."}),`
`,e.jsxs(s.p,{children:["You can use the new ",e.jsx(s.code,{children:"min"})," attribute to obtain the same behavior as with input."]}),`
`,e.jsxs(s.p,{children:[e.jsx(s.code,{children:"name"})," ",e.jsx(n,{color:"success",size:"sm",children:"New"})]}),`
`,e.jsx(s.p,{children:"New attribute."}),`
`,e.jsxs(s.p,{children:["You can use the new ",e.jsx(s.code,{children:"name"})," attribute to obtain the same behavior as with input."]}),`
`,e.jsxs(s.p,{children:[e.jsx(s.code,{children:"placeholder"})," ",e.jsx(n,{color:"success",size:"sm",children:"New"})]}),`
`,e.jsx(s.p,{children:"New attribute (optional)."}),`
`,e.jsxs(s.p,{children:["You can use the new ",e.jsx(s.code,{children:"placeholder"})," attribute to obtain the same behavior as with input."]}),`
`,e.jsxs(s.p,{children:[e.jsx(s.code,{children:"step"})," ",e.jsx(n,{color:"success",size:"sm",children:"New"})]}),`
`,e.jsx(s.p,{children:"New attribute (optional)."}),`
`,e.jsxs(s.p,{children:["You can use the new ",e.jsx(s.code,{children:"step"})," attribute to obtain the same behavior as with input."]}),`
`,e.jsxs(s.p,{children:[e.jsx(s.code,{children:"value"})," ",e.jsx(n,{color:"success",size:"sm",children:"New"})]}),`
`,e.jsx(s.p,{children:"New attribute (optional)."}),`
`,e.jsxs(s.p,{children:["You can use the new ",e.jsx(s.code,{children:"value"})," attribute to obtain the same behavior as with input."]}),`
`,e.jsx(t,{label:"Slot changes",level:2}),`
`,e.jsxs(s.p,{children:[e.jsx(s.code,{children:"slot:minus"})," ",e.jsx(n,{color:"critical",size:"sm",children:"Removed"})]}),`
`,e.jsx(s.p,{children:"Has been removed."}),`
`,e.jsx(s.p,{children:"The slot minus is now automatically in the component with an ods-button"}),`
`,e.jsxs(s.p,{children:[e.jsx(s.code,{children:"slot:default"})," ",e.jsx(n,{color:"critical",size:"sm",children:"Removed"})]}),`
`,e.jsx(s.p,{children:"Has been removed."}),`
`,e.jsx(s.p,{children:"The slot is now automatically in the component with an ods-input"}),`
`,e.jsxs(s.p,{children:[e.jsx(s.code,{children:"slot:plus"})," ",e.jsx(n,{color:"critical",size:"sm",children:"Removed"})]}),`
`,e.jsx(s.p,{children:"Has been removed."}),`
`,e.jsx(s.p,{children:"The slot plus is now automatically in the component with an ods-button"}),`
`,e.jsx(t,{label:"Input attributes changes",level:2}),`
`,e.jsx(r,{kind:a.input,story:c.migrationFrom17,children:"Doc input"}),`
`,e.jsx(t,{label:"Button attributes changes",level:2}),`
`,e.jsx(r,{kind:a.button,story:c.migrationFrom17,children:"Doc button"}),`
`,e.jsx(t,{label:"Migration examples",level:2}),`
`,e.jsx(s.p,{children:"Disabled quantity:"}),`
`,e.jsx(o,{code:`
<osds-quantity disabled>
  <osds-button slot='minus' color='primary' size='sm'>
    <osds-icon size='sm' contrasted name='minus'></osds-icon>
  </osds-button>
  <osds-input type='number' color='primary'></osds-input>
  <osds-button slot='plus' color='primary' size='sm'>
    <osds-icon size='sm' contrasted name='plus'></osds-icon>
  </osds-button>
</osds-quantity>

<!-- is now -->

<ods-quantity is-disabled>
</ods-quantity>
`,dark:"true",language:"html"}),`
`,e.jsx(s.p,{children:"Slot quantity:"}),`
`,e.jsx(o,{code:`
<osds-quantity>
  <osds-button slot='minus' color='primary' size='sm'>
    <osds-icon size='sm' contrasted name='minus'></osds-icon>
  </osds-button>
  <osds-input type='number' color='primary'></osds-input>
  <osds-button slot='plus' color='primary' size='sm'>
    <osds-icon size='sm' contrasted name='plus'></osds-icon>
  </osds-button>
</osds-quantity>

<!-- is now -->

<ods-quantity>
</ods-quantity>
`,dark:"true",language:"html"})]})}function C(i={}){const{wrapper:s}={...d(),...i.components};return s?e.jsx(s,{...i,children:e.jsx(l,{...i})}):l(i)}export{C as default};
