import{j as e}from"./jsx-runtime-Dn0LW--f.js";import{u as a}from"./index-DeyDdHvX.js";import{M as n,d as i}from"./index-BM3JsZOq.js";import{I as l}from"./icon.stories-k-iVWmBU.js";import"./iframe-6_jBXMSq.js";import"../sb-preview/runtime.js";import"./commonjsHelpers-Cpj98o6Y.js";import"./index-B_J8iUie.js";import"./index-DX_4BEHg.js";import"./index-DrFu-skq.js";import"./index-DryTTbHl.js";import"./control-C1r2wu67.js";import"./lit-html-D-ZEPr28.js";function o(d){const s={blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",hr:"hr",p:"p",pre:"pre",strong:"strong",...a(),...d.components};return e.jsxs(e.Fragment,{children:[e.jsx(n,{of:l,name:"Migration From 17.x"}),`
`,e.jsx(s.h1,{id:"icon---migrate-from-v17-to-v18",children:"Icon - migrate from v17 to v18"}),`
`,e.jsx(s.hr,{}),`
`,e.jsx(s.h2,{id:"attributes-changes",children:"Attributes changes"}),`
`,e.jsxs(s.p,{children:[e.jsx(s.code,{children:"ariaName"})," ",e.jsx("ods-badge",{size:"sm",label:"Updated"})]}),`
`,e.jsx(s.p,{children:"Has been updated."}),`
`,e.jsxs(s.p,{children:["You can use the new ",e.jsx(s.code,{children:"alt"})," attribute to obtain the same behavior."]}),`
`,e.jsxs(s.p,{children:[e.jsx(s.code,{children:"color"})," ",e.jsx("ods-badge",{size:"sm",color:"critical",label:"Removed"})]}),`
`,e.jsx(s.p,{children:"Has been removed."}),`
`,e.jsx(s.p,{children:"Icons are now font, they will by default have the same color as the current text."}),`
`,e.jsx(s.p,{children:"You can override this using a CSS class on the component directly."}),`
`,e.jsxs(s.p,{children:[e.jsx(s.code,{children:"contrasted"})," ",e.jsx("ods-badge",{size:"sm",color:"critical",label:"Removed"})]}),`
`,e.jsx(s.p,{children:"Has been removed."}),`
`,e.jsx(s.p,{children:"Icons are now font, they will by default have the same color as the current text."}),`
`,e.jsxs(s.p,{children:[e.jsx(s.code,{children:"hoverable"})," ",e.jsx("ods-badge",{size:"sm",color:"critical",label:"Removed"})]}),`
`,e.jsx(s.p,{children:"Has been removed."}),`
`,e.jsx(s.p,{children:"Interactive icon will be handled specifically by components that implements those interactions."}),`
`,e.jsxs(s.p,{children:[e.jsx(s.code,{children:"size"})," ",e.jsx("ods-badge",{size:"sm",color:"critical",label:"Removed"})]}),`
`,e.jsx(s.p,{children:"Has been removed."}),`
`,e.jsx(s.p,{children:"Icons are now font, they will by default have the same size as the current text."}),`
`,e.jsx(s.p,{children:"You can override this using a CSS class on the component directly."}),`
`,e.jsxs(s.blockquote,{children:[`
`,e.jsxs(s.p,{children:[e.jsx(s.strong,{children:"Warning:"}),`
Icons have been resized to fit entirely their bounding box.
Check your current icons and update their size accordingly.`]}),`
`]}),`
`,e.jsx(s.h2,{id:"migration-examples",children:"Migration examples"}),`
`,e.jsx(s.p,{children:"Contrasted icon:"}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-html",children:`<osds-icon contrasted
          name="warning">
</osds-icon>

<!-- is now -->

<ods-icon class="custom"
          name="warning-triangle">
</ods-icon>

<style>
  .custom {
    color: #fff;
  }
</style>
`})}),`
`,e.jsx(s.p,{children:"Icon size:"}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-html",children:`<osds-icon name="warning"
          size="xl">
</osds-icon>

<!-- is now -->

<ods-icon class="custom"
          name="warning-triangle">
</ods-icon>

<style>
  .custom {
    font-size: 48px;
  }
</style>
`})}),`
`,e.jsx(s.h3,{id:"icons-changes",children:"Icons changes"}),`
`,e.jsx(i,{children:`
| Former icon names | Status                                                         | New                                                                   |
|-------------------|----------------------------------------------------------------|-----------------------------------------------------------------------|
| add               | <ods-badge size="sm" label="Updated"></ods-badge>      | Use **plus**                                                          |
| arrow-transfer    | <ods-badge size="sm" label="Updated"></ods-badge>      | Use **arrow-left-right**                                              |
| bin               | <ods-badge size="sm" label="Updated"></ods-badge>      | Use **trash**                                                         |
| cart              | <ods-badge size="sm" label="Updated"></ods-badge>      | Use **shopping-cart**                                                 |
| chevron-up-down   | <ods-badge size="sm" color="critical" label="Removed"></ods-badge>      | Use an empty space as default                                         |
| clock-wait        | <ods-badge size="sm" label="Updated"></ods-badge>      | Use **clock-time-four**                                               |
| close             | <ods-badge size="sm" label="Updated"></ods-badge>      | Use **xmark**                                                         |
| copy              | <ods-badge size="sm" label="Updated"></ods-badge>      | Use **file-copy**                                                     |
| ellipsis          | <ods-badge size="sm" label="Updated"></ods-badge>      | Use **ellipsis-horizontal**                                           |
| error             | <ods-badge size="sm" label="Updated"></ods-badge>      | Use **triangle-exclamation**                                              |
| eye-closed        | <ods-badge size="sm" label="Updated"></ods-badge>      | Use **eye-off**                                                       |
| eye-open          | <ods-badge size="sm" label="Updated"></ods-badge>      | Use **eye**                                                           |
| gear              | <ods-badge size="sm" label="Updated"></ods-badge>      | Use **cog**                                                           |
| guides            | <ods-badge size="sm" label="Updated"></ods-badge>      | Use **book**                                                          |
| hamburger         | <ods-badge size="sm" label="Updated"></ods-badge>      | Use **hamburger-menu**                                                |
| help              | <ods-badge size="sm" label="Updated"></ods-badge>      | Use **question**                                                      |
| help-circle       | <ods-badge size="sm" label="Updated"></ods-badge>      | Use **circle-question**                                               |
| indeterminate     | <ods-badge size="sm" label="Updated"></ods-badge>      | Use **minus**                                                         |
| info              | <ods-badge size="sm" label="Updated"></ods-badge>      | Use **circle-info**                                                   |
| ok                | <ods-badge size="sm" label="Updated"></ods-badge>      | Use **check**                                                         |
| ovh               | <ods-badge size="sm" color="critical" label="Removed"></ods-badge>      | See [Logo](https://zeroheight.com/6fc8a63f7)                          |
| remove            | <ods-badge size="sm" label="Updated"></ods-badge>      | Use **minus**                                                         |
| settings          | <ods-badge size="sm" label="Updated"></ods-badge>      | Use **cog**                                                           |
| shape-circle      | <ods-badge size="sm" label="Updated"></ods-badge>      | Use **star**                                            |
| shape-dot         | <ods-badge size="sm" color="critical" label="Removed"></ods-badge>      | Use **star-full**                                       |
| sort              | <ods-badge size="sm" color="critical" label="Removed"></ods-badge>      | Use an empty space as default                                         |
| sort-down         | <ods-badge size="sm" color="critical" label="Removed"></ods-badge>      | Use **sort-alpha-down**, **sort-numeric-down** or **chevron-down**    |
| sort-up           | <ods-badge size="sm" color="critical" label="Removed"></ods-badge>      | Use **sort-alpha-down**, **sort-numeric-down** or **chevron-down**    |
| success           | <ods-badge size="sm" label="Updated"></ods-badge>      | Use **check**                                                         |
| success-circle    | <ods-badge size="sm" label="Updated"></ods-badge>      | Use **circle-check**                                                  |
| time              | <ods-badge size="sm" label="Updated"></ods-badge>      | Use **clock-time-four**                                               |
| transfer          | <ods-badge size="sm" label="Updated"></ods-badge>      | Use **arrow-left-right**                                              |
| triangle-down     | <ods-badge size="sm" color="critical" label="Removed"></ods-badge>      | Use **sort-alpha-down**, **sort-numeric-down** or **chevron-down**    |
| triangle-left     | <ods-badge size="sm" color="critical" label="Removed"></ods-badge>      | Use **chevron-left**                                                  |
| triangle-right    | <ods-badge size="sm" color="critical" label="Removed"></ods-badge>      | Use **chevron-right**                                                 |
| triangle-up       | <ods-badge size="sm" color="critical" label="Removed"></ods-badge>      | Use **sort-alpha-up**, **sort-numeric-up** or **chevron-up**          |
| user              | <ods-badge size="sm" label="Updated"></ods-badge>      | Use **circle-user**                                                   |
| warning           | <ods-badge size="sm" label="Updated"></ods-badge>      | Use **triangle-exclamation**                                              |
| warning-circle    | <ods-badge size="sm" label="Updated"></ods-badge>      | Use **triangle-exclamation**                                              |
`})]})}function f(d={}){const{wrapper:s}={...a(),...d.components};return s?e.jsx(s,{...d,children:e.jsx(o,{...d})}):o(d)}export{f as default};
