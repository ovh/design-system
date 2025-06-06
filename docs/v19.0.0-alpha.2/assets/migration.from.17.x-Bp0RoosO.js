import{j as e}from"./jsx-runtime-VM66peLj.js";import{useMDXComponents as a}from"./index-DQB45XCM.js";import{h as s}from"./Badge-EGenXdCK-DDYseYDy.js";import{M as t,S as r}from"./index-BlaLg9GY.js";import{R as c}from"./radio-group.stories-B4o_f8ib.js";import{H as i}from"./Heading-6Mfikk-c.js";import"./index-D_CmzhJ4.js";import"./index-2w0W-O47-BJ19ihbZ.js";import"./iframe-CGgj-FAD.js";import"./index-ChzAxGiP.js";import"./index-CucsY3YN.js";import"./index-CXQShRbs.js";import"./index-DrFu-skq.js";import"./FormFieldLabel-BxxkSoC9.js";import"./index-CkQHsVsO.js";import"./index-BCxMAfLs.js";import"./use-field-context-BA6pMY5L.js";import"./index-DTqyXX3-.js";import"./use-locale-context-Z4fgdY29.js";import"./controls-BtiQQn1l.js";function d(n){const o={code:"code",p:"p",...a(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(t,{of:c,name:"Migration From 17.x"}),`
`,e.jsx(i,{label:"Radio - migrate from v17 to v18",level:1}),`
`,e.jsx(i,{label:"Attributes changes Radio",level:2}),`
`,e.jsxs(o.p,{children:[e.jsx(o.code,{children:"checked"})," ",e.jsx(s,{color:"information",size:"sm",children:"Updated"})]}),`
`,e.jsx(o.p,{children:"Has been updated."}),`
`,e.jsxs(o.p,{children:["You can use the new ",e.jsx(o.code,{children:"isChecked"})," attribute to obtain the same behavior."]}),`
`,e.jsxs(o.p,{children:[e.jsx(o.code,{children:"checking"})," ",e.jsx(s,{color:"critical",size:"sm",children:"Removed"})]}),`
`,e.jsx(o.p,{children:"Has been removed."}),`
`,e.jsx(o.p,{children:"This design feature has been removed in order to match the new styling of the component."}),`
`,e.jsxs(o.p,{children:[e.jsx(o.code,{children:"disabled"})," ",e.jsx(s,{color:"information",size:"sm",children:"Updated"})]}),`
`,e.jsx(o.p,{children:"Has been updated."}),`
`,e.jsxs(o.p,{children:["You can use the new ",e.jsx(o.code,{children:"isDisabled"})," attribute to obtain the same behavior."]}),`
`,e.jsxs(o.p,{children:[e.jsx(o.code,{children:"label"})," ",e.jsx(s,{color:"critical",size:"sm",children:"Removed"})]}),`
`,e.jsx(o.p,{children:"Has been removed."}),`
`,e.jsx(o.p,{children:"Radio can now use HTML Label. Like in the example."}),`
`,e.jsxs(o.p,{children:[e.jsx(o.code,{children:"afterSave"})," ",e.jsx(s,{color:"critical",size:"sm",children:"Removed"})]}),`
`,e.jsx(o.p,{children:"Has been removed."}),`
`,e.jsx(o.p,{children:"We don't think this kind of callback was necessary anymore."}),`
`,e.jsxs(o.p,{children:[e.jsx(o.code,{children:"beforeSave"})," ",e.jsx(s,{color:"critical",size:"sm",children:"Removed"})]}),`
`,e.jsx(o.p,{children:"Has been removed."}),`
`,e.jsx(o.p,{children:"We don't think this kind of callback was necessary anymore."}),`
`,e.jsxs(o.p,{children:[e.jsx(o.code,{children:"save"})," ",e.jsx(s,{color:"critical",size:"sm",children:"Removed"})]}),`
`,e.jsx(o.p,{children:"Has been removed."}),`
`,e.jsx(o.p,{children:"We don't think this kind of callback was necessary anymore."}),`
`,e.jsx(i,{label:"Attributes changes Radio group",level:2}),`
`,e.jsxs(o.p,{children:[e.jsx(o.code,{children:"required"})," ",e.jsx(s,{color:"information",size:"sm",children:"Updated"})]}),`
`,e.jsx(o.p,{children:"Has been updated."}),`
`,e.jsxs(o.p,{children:["You can use the new ",e.jsx(o.code,{children:"isRequired"})," attribute to obtain the same behavior."]}),`
`,e.jsx(i,{label:"Attributes changes Radio button",level:2}),`
`,e.jsxs(o.p,{children:[e.jsx(o.code,{children:"color"})," ",e.jsx(s,{color:"critical",size:"sm",children:"Removed"})]}),`
`,e.jsx(o.p,{children:"Has been removed."}),`
`,e.jsx(o.p,{children:"This design feature has been removed in order to match the new styling of the component."}),`
`,e.jsx(o.p,{children:"You can use the CSS to obtain the same rendering."}),`
`,e.jsxs(o.p,{children:[e.jsx(o.code,{children:"hasFocus"})," ",e.jsx(s,{color:"critical",size:"sm",children:"Removed"})]}),`
`,e.jsx(o.p,{children:"Has been removed."}),`
`,e.jsx(o.p,{children:"You have now an event to know when the component is focused."}),`
`,e.jsxs(o.p,{children:[e.jsx(o.code,{children:"interactive"})," ",e.jsx(s,{color:"critical",size:"sm",children:"Removed"})]}),`
`,e.jsx(o.p,{children:"Has been removed."}),`
`,e.jsx(o.p,{children:"This design feature has been removed in order to match the new styling of the component."}),`
`,e.jsxs(o.p,{children:[e.jsx(o.code,{children:"size"})," ",e.jsx(s,{color:"critical",size:"sm",children:"Removed"})]}),`
`,e.jsx(o.p,{children:"Has been removed."}),`
`,e.jsx(o.p,{children:"You can use the CSS to obtain the same rendering."}),`
`,e.jsx(i,{label:"Migration examples",level:2}),`
`,e.jsx(o.p,{children:"Disabled radio:"}),`
`,e.jsx(r,{code:`
<osds-radio disabled>
  <osds-radio-button color='primary' size='sm'></osds-radio-button>
</osds-radio>

<!-- is now -->

<ods-radio is-disabled></ods-radio>
`,dark:"true",language:"html"}),`
`,e.jsx(o.p,{children:"Label radio:"}),`
`,e.jsx(r,{code:`
<osds-radio-button>
  <span slot='end'>Radio label</span>
</osds-radio-button>

<!-- is now -->

<ods-radio input-id="migration-label" name="name" value="migration"></ods-radio>
<label for="migration-label">Radio label</label>
`,dark:"true",language:"html"}),`
`,e.jsx(o.p,{children:"Group radio:"}),`
`,e.jsx(r,{code:`
<osds-radio-group>
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
`,dark:"true",language:"html"})]})}function Y(n={}){const{wrapper:o}={...a(),...n.components};return o?e.jsx(o,{...n,children:e.jsx(d,{...n})}):d(n)}export{Y as default};
