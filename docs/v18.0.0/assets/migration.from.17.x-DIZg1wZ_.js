import{j as e}from"./jsx-runtime-Dn0LW--f.js";import{u as d}from"./index-DeyDdHvX.js";import{M as i}from"./index-BM3JsZOq.js";import{R as r}from"./radio.stories-XGf9Qwlr.js";import"./iframe-6_jBXMSq.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-B_J8iUie.js";import"./index-DX_4BEHg.js";import"./index-DrFu-skq.js";import"./lit-html-D-ZEPr28.js";import"./control-C1r2wu67.js";function o(n){const s={code:"code",h1:"h1",h2:"h2",hr:"hr",p:"p",pre:"pre",...d(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{of:r,name:"Migration From 17.x"}),`
`,e.jsx(s.h1,{id:"radio---migrate-from-v17-to-v18",children:"Radio - migrate from v17 to v18"}),`
`,e.jsx(s.hr,{}),`
`,e.jsx(s.h2,{id:"attributes-changes-radio",children:"Attributes changes Radio"}),`
`,e.jsxs(s.p,{children:[e.jsx(s.code,{children:"checked"})," ",e.jsx("ods-badge",{size:"sm",label:"Updated"})]}),`
`,e.jsx(s.p,{children:"Has been updated."}),`
`,e.jsxs(s.p,{children:["You can use the new ",e.jsx(s.code,{children:"isChecked"})," attribute to obtain the same behavior."]}),`
`,e.jsxs(s.p,{children:[e.jsx(s.code,{children:"checking"})," ",e.jsx("ods-badge",{size:"sm",color:"critical",label:"Removed"})]}),`
`,e.jsx(s.p,{children:"Has been removed."}),`
`,e.jsx(s.p,{children:"This design feature has been removed in order to match the new styling of the component."}),`
`,e.jsxs(s.p,{children:[e.jsx(s.code,{children:"disabled"})," ",e.jsx("ods-badge",{size:"sm",label:"Updated"})]}),`
`,e.jsx(s.p,{children:"Has been updated."}),`
`,e.jsxs(s.p,{children:["You can use the new ",e.jsx(s.code,{children:"isDisabled"})," attribute to obtain the same behavior."]}),`
`,e.jsxs(s.p,{children:[e.jsx(s.code,{children:"label"})," ",e.jsx("ods-badge",{size:"sm",color:"critical",label:"Removed"})]}),`
`,e.jsx(s.p,{children:"Has been removed."}),`
`,e.jsx(s.p,{children:"Radio can now use HTML Label. Like in the example."}),`
`,e.jsxs(s.p,{children:[e.jsx(s.code,{children:"afterSave"})," ",e.jsx("ods-badge",{size:"sm",color:"critical",label:"Removed"})]}),`
`,e.jsx(s.p,{children:"Has been removed."}),`
`,e.jsx(s.p,{children:"We don't think this kind of callback was necessary anymore."}),`
`,e.jsxs(s.p,{children:[e.jsx(s.code,{children:"beforeSave"})," ",e.jsx("ods-badge",{size:"sm",color:"critical",label:"Removed"})]}),`
`,e.jsx(s.p,{children:"Has been removed."}),`
`,e.jsx(s.p,{children:"We don't think this kind of callback was necessary anymore."}),`
`,e.jsxs(s.p,{children:[e.jsx(s.code,{children:"save"})," ",e.jsx("ods-badge",{size:"sm",color:"critical",label:"Removed"})]}),`
`,e.jsx(s.p,{children:"Has been removed."}),`
`,e.jsx(s.p,{children:"We don't think this kind of callback was necessary anymore."}),`
`,e.jsx(s.h2,{id:"attributes-changes-radio-group",children:"Attributes changes Radio group"}),`
`,e.jsxs(s.p,{children:[e.jsx(s.code,{children:"required"})," ",e.jsx("ods-badge",{size:"sm",label:"Updated"})]}),`
`,e.jsx(s.p,{children:"Has been updated."}),`
`,e.jsxs(s.p,{children:["You can use the new ",e.jsx(s.code,{children:"isRequired"})," attribute to obtain the same behavior."]}),`
`,e.jsx(s.h2,{id:"attributes-changes-radio-button",children:"Attributes changes Radio button"}),`
`,e.jsxs(s.p,{children:[e.jsx(s.code,{children:"color"})," ",e.jsx("ods-badge",{size:"sm",color:"critical",label:"Removed"})]}),`
`,e.jsx(s.p,{children:"Has been removed."}),`
`,e.jsx(s.p,{children:"This design feature has been removed in order to match the new styling of the component."}),`
`,e.jsx(s.p,{children:"You can use the CSS to obtain the same rendering."}),`
`,e.jsxs(s.p,{children:[e.jsx(s.code,{children:"hasFocus"})," ",e.jsx("ods-badge",{size:"sm",color:"critical",label:"Removed"})]}),`
`,e.jsx(s.p,{children:"Has been removed."}),`
`,e.jsx(s.p,{children:"You have now an event to know when the component is focused."}),`
`,e.jsxs(s.p,{children:[e.jsx(s.code,{children:"interactive"})," ",e.jsx("ods-badge",{size:"sm",color:"critical",label:"Removed"})]}),`
`,e.jsx(s.p,{children:"Has been removed."}),`
`,e.jsx(s.p,{children:"This design feature has been removed in order to match the new styling of the component."}),`
`,e.jsxs(s.p,{children:[e.jsx(s.code,{children:"size"})," ",e.jsx("ods-badge",{size:"sm",color:"critical",label:"Removed"})]}),`
`,e.jsx(s.p,{children:"Has been removed."}),`
`,e.jsx(s.p,{children:"You can use the CSS to obtain the same rendering."}),`
`,e.jsx(s.h2,{id:"migration-examples",children:"Migration examples"}),`
`,e.jsx(s.p,{children:"Disabled radio:"}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-html",children:`<osds-radio disabled>
  <osds-radio-button color='primary' size='sm'></osds-radio-button>
</osds-radio>

<!-- is now -->

<ods-radio is-disabled></ods-radio>
`})}),`
`,e.jsx(s.p,{children:"Label radio:"}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-html",children:`<osds-radio-button>
  <span slot='end'>Radio label</span>
</osds-radio-button>

<!-- is now -->

<ods-radio input-id="migration-label" name="name" value="migration"></ods-radio>
<label for="migration-label">Radio label</label>
`})}),`
`,e.jsx(s.p,{children:"Group radio:"}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-html",children:`<osds-radio-group>
    <osds-radio value="A">
        <osds-radio-button color='primary' size='sm'></osds-radio-button>
    </osds-radio>
    <osds-radio value="B">
        <osds-radio-button color='primary' size='sm'></osds-radio-button>
    </osds-radio>
    <osds-radio value="C">
        <osds-radio-button color='primary' size='sm'></osds-radio-button>
    </osds-radio>
</osds-radio-group>

<!-- is now -->

<ods-radio value="A" name="group-radio"></ods-radio>
<ods-radio value="B" name="group-radio"></ods-radio>
<ods-radio value="C" name="group-radio"></ods-radio>

`})})]})}function v(n={}){const{wrapper:s}={...d(),...n.components};return s?e.jsx(s,{...n,children:e.jsx(o,{...n})}):o(n)}export{v as default};
