import{j as e}from"./jsx-runtime-Dn0LW--f.js";import{u as i}from"./index-DeyDdHvX.js";import{M as o}from"./index-BM3JsZOq.js";import{Q as a}from"./quantity.stories-B36jQ42_.js";import"./chunk-FAE4I7JY-v0Th3BC0.js";import"./iframe-6_jBXMSq.js";import"../sb-preview/runtime.js";import"./commonjsHelpers-Cpj98o6Y.js";import"./index-B_J8iUie.js";import"./index-DX_4BEHg.js";import"./index-DrFu-skq.js";import"./lit-html-D-ZEPr28.js";import"./control-C1r2wu67.js";function t(n){const s={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",hr:"hr",p:"p",pre:"pre",...i(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:a,name:"Migration From 17.x"}),`
`,e.jsx(s.h1,{id:"quantity---migrate-from-v17-to-v18",children:"Quantity - migrate from v17 to v18"}),`
`,e.jsx(s.hr,{}),`
`,e.jsx(s.h2,{id:"usage-changes",children:"Usage changes"}),`
`,e.jsx(s.p,{children:"Quantity component was using slots, expecting specific components in it to work as expected."}),`
`,e.jsx(s.p,{children:"It has been fully reworked to be a all-in-one form element component."}),`
`,e.jsx(s.p,{children:"You can now use it directly as any input element."}),`
`,e.jsx(s.p,{children:"Here is an example of the previous declaration with ODS component:"}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-html",children:`<osds-quantity>
  <osds-button slot='minus' color='primary' size='sm'>
    <osds-icon size='sm' contrasted name='minus'></osds-icon>
  </osds-button>
  <osds-input type='number' color='primary'></osds-input>
  <osds-button slot='plus' color='primary' size='sm'>
    <osds-icon size='sm' contrasted name='plus'></osds-icon>
  </osds-button>
</osds-quantity>
`})}),`
`,e.jsx(s.p,{children:"The same result would now be achieved using:"}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-html",children:`<ods-quantity>
</ods-quantity>
`})}),`
`,e.jsx(s.h2,{id:"attributes-changes",children:"Attributes changes"}),`
`,e.jsxs(s.p,{children:[e.jsx(s.code,{children:"disabled"})," ",e.jsx("ods-badge",{size:"sm",label:"Updated"})]}),`
`,e.jsx(s.p,{children:"Has been updated."}),`
`,e.jsxs(s.p,{children:["You can use the new ",e.jsx(s.code,{children:"isDisabled"})," attribute to obtain the same behavior."]}),`
`,e.jsxs(s.p,{children:[e.jsx(s.code,{children:"defaultValue"})," ",e.jsx("ods-badge",{size:"sm",color:"success",label:"New"})]}),`
`,e.jsx(s.p,{children:"New attribute (optional)."}),`
`,e.jsxs(s.p,{children:["You can use the new ",e.jsx(s.code,{children:"defaultValue"})," attribute to obtain the same behavior as with input."]}),`
`,e.jsxs(s.p,{children:[e.jsx(s.code,{children:"ariaLabel"})," ",e.jsx("ods-badge",{size:"sm",color:"success",label:"New"})]}),`
`,e.jsx(s.p,{children:"New attribute (optional)."}),`
`,e.jsxs(s.p,{children:["You can use the new ",e.jsx(s.code,{children:"ariaLabel"})," attribute to obtain the same behavior as with input."]}),`
`,e.jsxs(s.p,{children:[e.jsx(s.code,{children:"ariaLabelledby"})," ",e.jsx("ods-badge",{size:"sm",color:"success",label:"New"})]}),`
`,e.jsx(s.p,{children:"New attribute (optional)."}),`
`,e.jsxs(s.p,{children:["You can use the new ",e.jsx(s.code,{children:"araiLabelledby"})," attribute to obtain the same behavior as with input."]}),`
`,e.jsxs(s.p,{children:[e.jsx(s.code,{children:"hasError"})," ",e.jsx("ods-badge",{size:"sm",color:"success",label:"New"})]}),`
`,e.jsx(s.p,{children:"New attribute (optional)."}),`
`,e.jsxs(s.p,{children:["You can use the new ",e.jsx(s.code,{children:"hasError"})," attribute to obtain the same behavior as with input."]}),`
`,e.jsxs(s.p,{children:[e.jsx(s.code,{children:"isReadonly"})," ",e.jsx("ods-badge",{size:"sm",color:"success",label:"New"})]}),`
`,e.jsx(s.p,{children:"New attribute (optional)."}),`
`,e.jsxs(s.p,{children:["You can use the new ",e.jsx(s.code,{children:"isReadonly"})," attribute to obtain the same behavior as with input."]}),`
`,e.jsxs(s.p,{children:[e.jsx(s.code,{children:"isRequired"})," ",e.jsx("ods-badge",{size:"sm",color:"success",label:"New"})]}),`
`,e.jsx(s.p,{children:"New attribute (optional)."}),`
`,e.jsxs(s.p,{children:["You can use the new ",e.jsx(s.code,{children:"isRequired"})," attribute to obtain the same behavior as with input."]}),`
`,e.jsxs(s.p,{children:[e.jsx(s.code,{children:"max"})," ",e.jsx("ods-badge",{size:"sm",color:"success",label:"New"})]}),`
`,e.jsx(s.p,{children:"New attribute (optional)."}),`
`,e.jsxs(s.p,{children:["You can use the new ",e.jsx(s.code,{children:"max"})," attribute to obtain the same behavior as with input."]}),`
`,e.jsxs(s.p,{children:[e.jsx(s.code,{children:"min"})," ",e.jsx("ods-badge",{size:"sm",color:"success",label:"New"})]}),`
`,e.jsx(s.p,{children:"New attribute (optional)."}),`
`,e.jsxs(s.p,{children:["You can use the new ",e.jsx(s.code,{children:"min"})," attribute to obtain the same behavior as with input."]}),`
`,e.jsxs(s.p,{children:[e.jsx(s.code,{children:"name"})," ",e.jsx("ods-badge",{size:"sm",color:"success",label:"New"})]}),`
`,e.jsx(s.p,{children:"New attribute."}),`
`,e.jsxs(s.p,{children:["You can use the new ",e.jsx(s.code,{children:"name"})," attribute to obtain the same behavior as with input."]}),`
`,e.jsxs(s.p,{children:[e.jsx(s.code,{children:"placeholder"})," ",e.jsx("ods-badge",{size:"sm",color:"success",label:"New"})]}),`
`,e.jsx(s.p,{children:"New attribute (optional)."}),`
`,e.jsxs(s.p,{children:["You can use the new ",e.jsx(s.code,{children:"placeholder"})," attribute to obtain the same behavior as with input."]}),`
`,e.jsxs(s.p,{children:[e.jsx(s.code,{children:"step"})," ",e.jsx("ods-badge",{size:"sm",color:"success",label:"New"})]}),`
`,e.jsx(s.p,{children:"New attribute (optional)."}),`
`,e.jsxs(s.p,{children:["You can use the new ",e.jsx(s.code,{children:"step"})," attribute to obtain the same behavior as with input."]}),`
`,e.jsxs(s.p,{children:[e.jsx(s.code,{children:"value"})," ",e.jsx("ods-badge",{size:"sm",color:"success",label:"New"})]}),`
`,e.jsx(s.p,{children:"New attribute (optional)."}),`
`,e.jsxs(s.p,{children:["You can use the new ",e.jsx(s.code,{children:"value"})," attribute to obtain the same behavior as with input."]}),`
`,e.jsx(s.h3,{id:"slot-changes",children:"Slot changes"}),`
`,e.jsxs(s.p,{children:[e.jsx(s.code,{children:"slot:minus"})," ",e.jsx("ods-badge",{size:"sm",color:"critical",label:"Removed"})]}),`
`,e.jsx(s.p,{children:"Has been removed."}),`
`,e.jsx(s.p,{children:"The slot minus is now automatically in the component with an ods-button"}),`
`,e.jsxs(s.p,{children:[e.jsx(s.code,{children:"slot:default"})," ",e.jsx("ods-badge",{size:"sm",color:"critical",label:"Removed"})]}),`
`,e.jsx(s.p,{children:"Has been removed."}),`
`,e.jsx(s.p,{children:"The slot is now automatically in the component with an ods-input"}),`
`,e.jsxs(s.p,{children:[e.jsx(s.code,{children:"slot:plus"})," ",e.jsx("ods-badge",{size:"sm",color:"critical",label:"Removed"})]}),`
`,e.jsx(s.p,{children:"Has been removed."}),`
`,e.jsx(s.p,{children:"The slot plus is now automatically in the component with an ods-button"}),`
`,e.jsx(s.h3,{id:"input-attributes-changes",children:"Input attributes changes"}),`
`,e.jsx(s.p,{children:e.jsx(s.a,{href:"/docs/ods-components-form-elements-input--migration-from-17-x",children:"Doc input"})}),`
`,e.jsx(s.h3,{id:"button-attributes-changes",children:"Button attributes changes"}),`
`,e.jsx(s.p,{children:e.jsx(s.a,{href:"/docs/ods-components-button--migration-from-17-x",children:"Doc button"})}),`
`,e.jsx(s.h2,{id:"migration-examples",children:"Migration examples"}),`
`,e.jsx(s.p,{children:"Disabled quantity:"}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-html",children:`<osds-quantity disabled>
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
`})}),`
`,e.jsx(s.p,{children:"Slot quantity:"}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-html",children:`<osds-quantity>
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
`})})]})}function y(n={}){const{wrapper:s}={...i(),...n.components};return s?e.jsx(s,{...n,children:e.jsx(t,{...n})}):t(n)}export{y as default};
