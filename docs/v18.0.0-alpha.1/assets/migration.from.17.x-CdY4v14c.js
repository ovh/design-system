import{j as e}from"./jsx-runtime-C_5uCoOk.js";import{u as r}from"./index-BNSrq6w-.js";import{M as p}from"./index-DnV51lgW.js";import{Q as u}from"./quantity.stories-B36jQ42_.js";import"./index-B_J8iUie.js";import"./iframe-Cm7AUSBL.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-DX_4BEHg.js";import"./index-DrFu-skq.js";import"./lit-html-D-ZEPr28.js";import"./control-C1r2wu67.js";const{global:m}=__STORYBOOK_MODULE_GLOBAL__,{makeDecorator:x,addons:d}=__STORYBOOK_MODULE_PREVIEW_API__,{STORY_CHANGED:j,SELECT_STORY:b}=__STORYBOOK_MODULE_CORE_EVENTS__;var g="links",{document:c,HTMLElement:w}=m,y=n=>d.getChannel().emit(b,n),h=n=>{let{target:s}=n;if(!(s instanceof w))return;let l=s,{sbKind:i,sbStory:o}=l.dataset;(i||o)&&(n.preventDefault(),y({kind:i,story:o}))},t=!1,v=()=>{t||(t=!0,c.addEventListener("click",h))},f=()=>{t&&(t=!1,c.removeEventListener("click",h))};x({name:"withLinks",parameterName:g,wrapper:(n,s)=>(v(),d.getChannel().once(j,f),n(s))});function a(n){const s={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",hr:"hr",p:"p",pre:"pre",...r(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(p,{of:u,name:"Migration From 17.x"}),`
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
`,e.jsxs(s.p,{children:[e.jsx(s.code,{children:"disabled"})," ",e.jsx("img",{src:"https://img.shields.io/badge/updated-00FFFF"})]}),`
`,e.jsx(s.p,{children:"Has been updated."}),`
`,e.jsxs(s.p,{children:["You can use the new ",e.jsx(s.code,{children:"isDisabled"})," attribute to obtain the same behavior."]}),`
`,e.jsxs(s.p,{children:[e.jsx(s.code,{children:"defaultValue"})," ",e.jsx("img",{src:"https://img.shields.io/badge/new-008000"})]}),`
`,e.jsx(s.p,{children:"New attribute (optional)."}),`
`,e.jsxs(s.p,{children:["You can use the new ",e.jsx(s.code,{children:"defaultValue"})," attribute to obtain the same behavior as with input."]}),`
`,e.jsxs(s.p,{children:[e.jsx(s.code,{children:"ariaLabel"})," ",e.jsx("img",{src:"https://img.shields.io/badge/new-008000"})]}),`
`,e.jsx(s.p,{children:"New attribute (optional)."}),`
`,e.jsxs(s.p,{children:["You can use the new ",e.jsx(s.code,{children:"ariaLabel"})," attribute to obtain the same behavior as with input."]}),`
`,e.jsxs(s.p,{children:[e.jsx(s.code,{children:"ariaLabelledby"})," ",e.jsx("img",{src:"https://img.shields.io/badge/new-008000"})]}),`
`,e.jsx(s.p,{children:"New attribute (optional)."}),`
`,e.jsxs(s.p,{children:["You can use the new ",e.jsx(s.code,{children:"araiLabelledby"})," attribute to obtain the same behavior as with input."]}),`
`,e.jsxs(s.p,{children:[e.jsx(s.code,{children:"hasError"})," ",e.jsx("img",{src:"https://img.shields.io/badge/new-008000"})]}),`
`,e.jsx(s.p,{children:"New attribute (optional)."}),`
`,e.jsxs(s.p,{children:["You can use the new ",e.jsx(s.code,{children:"hasError"})," attribute to obtain the same behavior as with input."]}),`
`,e.jsxs(s.p,{children:[e.jsx(s.code,{children:"isReadonly"})," ",e.jsx("img",{src:"https://img.shields.io/badge/new-008000"})]}),`
`,e.jsx(s.p,{children:"New attribute (optional)."}),`
`,e.jsxs(s.p,{children:["You can use the new ",e.jsx(s.code,{children:"isReadonly"})," attribute to obtain the same behavior as with input."]}),`
`,e.jsxs(s.p,{children:[e.jsx(s.code,{children:"isRequired"})," ",e.jsx("img",{src:"https://img.shields.io/badge/new-008000"})]}),`
`,e.jsx(s.p,{children:"New attribute (optional)."}),`
`,e.jsxs(s.p,{children:["You can use the new ",e.jsx(s.code,{children:"isRequired"})," attribute to obtain the same behavior as with input."]}),`
`,e.jsxs(s.p,{children:[e.jsx(s.code,{children:"max"})," ",e.jsx("img",{src:"https://img.shields.io/badge/new-008000"})]}),`
`,e.jsx(s.p,{children:"New attribute (optional)."}),`
`,e.jsxs(s.p,{children:["You can use the new ",e.jsx(s.code,{children:"max"})," attribute to obtain the same behavior as with input."]}),`
`,e.jsxs(s.p,{children:[e.jsx(s.code,{children:"min"})," ",e.jsx("img",{src:"https://img.shields.io/badge/new-008000"})]}),`
`,e.jsx(s.p,{children:"New attribute (optional)."}),`
`,e.jsxs(s.p,{children:["You can use the new ",e.jsx(s.code,{children:"min"})," attribute to obtain the same behavior as with input."]}),`
`,e.jsxs(s.p,{children:[e.jsx(s.code,{children:"name"})," ",e.jsx("img",{src:"https://img.shields.io/badge/new-008000"})]}),`
`,e.jsx(s.p,{children:"New attribute."}),`
`,e.jsxs(s.p,{children:["You can use the new ",e.jsx(s.code,{children:"name"})," attribute to obtain the same behavior as with input."]}),`
`,e.jsxs(s.p,{children:[e.jsx(s.code,{children:"placeholder"})," ",e.jsx("img",{src:"https://img.shields.io/badge/new-008000"})]}),`
`,e.jsx(s.p,{children:"New attribute (optional)."}),`
`,e.jsxs(s.p,{children:["You can use the new ",e.jsx(s.code,{children:"placeholder"})," attribute to obtain the same behavior as with input."]}),`
`,e.jsxs(s.p,{children:[e.jsx(s.code,{children:"step"})," ",e.jsx("img",{src:"https://img.shields.io/badge/new-008000"})]}),`
`,e.jsx(s.p,{children:"New attribute (optional)."}),`
`,e.jsxs(s.p,{children:["You can use the new ",e.jsx(s.code,{children:"step"})," attribute to obtain the same behavior as with input."]}),`
`,e.jsxs(s.p,{children:[e.jsx(s.code,{children:"value"})," ",e.jsx("img",{src:"https://img.shields.io/badge/new-008000"})]}),`
`,e.jsx(s.p,{children:"New attribute (optional)."}),`
`,e.jsxs(s.p,{children:["You can use the new ",e.jsx(s.code,{children:"value"})," attribute to obtain the same behavior as with input."]}),`
`,e.jsx(s.h3,{id:"slot-changes",children:"Slot changes"}),`
`,e.jsxs(s.p,{children:[e.jsx(s.code,{children:"slot:minus"})," ",e.jsx("img",{src:"https://img.shields.io/badge/removed-FF0000"})]}),`
`,e.jsx(s.p,{children:"Has been removed."}),`
`,e.jsx(s.p,{children:"The slot minus is now automatically in the component with an ods-button"}),`
`,e.jsxs(s.p,{children:[e.jsx(s.code,{children:"slot:default"})," ",e.jsx("img",{src:"https://img.shields.io/badge/removed-FF0000"})]}),`
`,e.jsx(s.p,{children:"Has been removed."}),`
`,e.jsx(s.p,{children:"The slot is now automatically in the component with an ods-input"}),`
`,e.jsxs(s.p,{children:[e.jsx(s.code,{children:"slot:plus"})," ",e.jsx("img",{src:"https://img.shields.io/badge/removed-FF0000"})]}),`
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
`})})]})}function S(n={}){const{wrapper:s}={...r(),...n.components};return s?e.jsx(s,{...n,children:e.jsx(a,{...n})}):a(n)}export{S as default};
