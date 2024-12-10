import{j as e,M as l,d as r}from"./index-Rx6QkXSv.js";import{u as a}from"./index-DPrOAYpY.js";import{O as s}from"./index-BJiUJsri.js";import{R as t}from"./radio.stories-BvGOUvH4.js";import{H as i}from"./Heading-2XnXa8MH.js";import"./iframe-HwRW2g_s.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-D-8MO0q_.js";import"./index-DX_4BEHg.js";import"./index-DrFu-skq.js";import"./controls-DX883vx3.js";import"./validityState-BuENXwQ9.js";import"./index-Dqa08QUn.js";function d(n){const o={code:"code",p:"p",...a(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{of:t,name:"Migration From 17.x"}),`
`,e.jsx(i,{label:"Radio - migrate from v17 to v18",level:1}),`
`,e.jsx(i,{label:"Attributes changes Radio",level:2}),`
`,e.jsxs(o.p,{children:[e.jsx(o.code,{children:"checked"})," ",e.jsx(s,{color:"information",label:"Updated",size:"sm"})]}),`
`,e.jsx(o.p,{children:"Has been updated."}),`
`,e.jsxs(o.p,{children:["You can use the new ",e.jsx(o.code,{children:"isChecked"})," attribute to obtain the same behavior."]}),`
`,e.jsxs(o.p,{children:[e.jsx(o.code,{children:"checking"})," ",e.jsx(s,{color:"critical",label:"Removed",size:"sm"})]}),`
`,e.jsx(o.p,{children:"Has been removed."}),`
`,e.jsx(o.p,{children:"This design feature has been removed in order to match the new styling of the component."}),`
`,e.jsxs(o.p,{children:[e.jsx(o.code,{children:"disabled"})," ",e.jsx(s,{color:"information",label:"Updated",size:"sm"})]}),`
`,e.jsx(o.p,{children:"Has been updated."}),`
`,e.jsxs(o.p,{children:["You can use the new ",e.jsx(o.code,{children:"isDisabled"})," attribute to obtain the same behavior."]}),`
`,e.jsxs(o.p,{children:[e.jsx(o.code,{children:"label"})," ",e.jsx(s,{color:"critical",label:"Removed",size:"sm"})]}),`
`,e.jsx(o.p,{children:"Has been removed."}),`
`,e.jsx(o.p,{children:"Radio can now use HTML Label. Like in the example."}),`
`,e.jsxs(o.p,{children:[e.jsx(o.code,{children:"afterSave"})," ",e.jsx(s,{color:"critical",label:"Removed",size:"sm"})]}),`
`,e.jsx(o.p,{children:"Has been removed."}),`
`,e.jsx(o.p,{children:"We don't think this kind of callback was necessary anymore."}),`
`,e.jsxs(o.p,{children:[e.jsx(o.code,{children:"beforeSave"})," ",e.jsx(s,{color:"critical",label:"Removed",size:"sm"})]}),`
`,e.jsx(o.p,{children:"Has been removed."}),`
`,e.jsx(o.p,{children:"We don't think this kind of callback was necessary anymore."}),`
`,e.jsxs(o.p,{children:[e.jsx(o.code,{children:"save"})," ",e.jsx(s,{color:"critical",label:"Removed",size:"sm"})]}),`
`,e.jsx(o.p,{children:"Has been removed."}),`
`,e.jsx(o.p,{children:"We don't think this kind of callback was necessary anymore."}),`
`,e.jsx(i,{label:"Attributes changes Radio group",level:2}),`
`,e.jsxs(o.p,{children:[e.jsx(o.code,{children:"required"})," ",e.jsx(s,{color:"information",label:"Updated",size:"sm"})]}),`
`,e.jsx(o.p,{children:"Has been updated."}),`
`,e.jsxs(o.p,{children:["You can use the new ",e.jsx(o.code,{children:"isRequired"})," attribute to obtain the same behavior."]}),`
`,e.jsx(i,{label:"Attributes changes Radio button",level:2}),`
`,e.jsxs(o.p,{children:[e.jsx(o.code,{children:"color"})," ",e.jsx(s,{color:"critical",label:"Removed",size:"sm"})]}),`
`,e.jsx(o.p,{children:"Has been removed."}),`
`,e.jsx(o.p,{children:"This design feature has been removed in order to match the new styling of the component."}),`
`,e.jsx(o.p,{children:"You can use the CSS to obtain the same rendering."}),`
`,e.jsxs(o.p,{children:[e.jsx(o.code,{children:"hasFocus"})," ",e.jsx(s,{color:"critical",label:"Removed",size:"sm"})]}),`
`,e.jsx(o.p,{children:"Has been removed."}),`
`,e.jsx(o.p,{children:"You have now an event to know when the component is focused."}),`
`,e.jsxs(o.p,{children:[e.jsx(o.code,{children:"interactive"})," ",e.jsx(s,{color:"critical",label:"Removed",size:"sm"})]}),`
`,e.jsx(o.p,{children:"Has been removed."}),`
`,e.jsx(o.p,{children:"This design feature has been removed in order to match the new styling of the component."}),`
`,e.jsxs(o.p,{children:[e.jsx(o.code,{children:"size"})," ",e.jsx(s,{color:"critical",label:"Removed",size:"sm"})]}),`
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
`,dark:"true",language:"html"})]})}function z(n={}){const{wrapper:o}={...a(),...n.components};return o?e.jsx(o,{...n,children:e.jsx(d,{...n})}):d(n)}export{z as default};
