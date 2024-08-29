import{j as e}from"./jsx-runtime-C_5uCoOk.js";import{u as n}from"./index-BNSrq6w-.js";import{M as o,d as r}from"./index-DnV51lgW.js";import{I as d}from"./icon.stories-sUf7nPcy.js";import"./iframe-Cm7AUSBL.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-B_J8iUie.js";import"./index-DX_4BEHg.js";import"./index-DrFu-skq.js";import"./index-CEZbmgmh.js";import"./control-C1r2wu67.js";import"./lit-html-D-ZEPr28.js";function t(i){const s={blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",hr:"hr",p:"p",pre:"pre",strong:"strong",...n(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:d,name:"Migration From 17.x"}),`
`,e.jsx(s.h1,{id:"icon---migrate-from-v17-to-v18",children:"Icon - migrate from v17 to v18"}),`
`,e.jsx(s.hr,{}),`
`,e.jsx(s.h2,{id:"attributes-changes",children:"Attributes changes"}),`
`,e.jsxs(s.p,{children:[e.jsx(s.code,{children:"ariaName"})," ",e.jsx("img",{src:"https://img.shields.io/badge/updated-00FFFF"})]}),`
`,e.jsx(s.p,{children:"Has been updated."}),`
`,e.jsxs(s.p,{children:["You can use the new ",e.jsx(s.code,{children:"alt"})," attribute to obtain the same behavior."]}),`
`,e.jsxs(s.p,{children:[e.jsx(s.code,{children:"color"})," ",e.jsx("img",{src:"https://img.shields.io/badge/removed-FF0000"})]}),`
`,e.jsx(s.p,{children:"Has been removed."}),`
`,e.jsx(s.p,{children:"Icons are now font, they will by default have the same color as the current text."}),`
`,e.jsx(s.p,{children:"You can override this using a CSS class on the component directly."}),`
`,e.jsxs(s.p,{children:[e.jsx(s.code,{children:"contrasted"})," ",e.jsx("img",{src:"https://img.shields.io/badge/removed-FF0000"})]}),`
`,e.jsx(s.p,{children:"Has been removed."}),`
`,e.jsx(s.p,{children:"Icons are now font, they will by default have the same color as the current text."}),`
`,e.jsxs(s.p,{children:[e.jsx(s.code,{children:"hoverable"})," ",e.jsx("img",{src:"https://img.shields.io/badge/removed-FF0000"})]}),`
`,e.jsx(s.p,{children:"Has been removed."}),`
`,e.jsx(s.p,{children:"Interactive icon will be handled specifically by components that implements those interactions."}),`
`,e.jsxs(s.p,{children:[e.jsx(s.code,{children:"size"})," ",e.jsx("img",{src:"https://img.shields.io/badge/removed-FF0000"})]}),`
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
`,e.jsx(r,{children:`
| Former icon names | Status                                                         | New                                                                   |
|-------------------|----------------------------------------------------------------|-----------------------------------------------------------------------|
| add               | <img src="https://img.shields.io/badge/updated-00FFFF" />      | Use **plus**                                                          |
| arrow-transfer    | <img src="https://img.shields.io/badge/updated-00FFFF" />      | Use **arrow-left-right**                                              |
| bin               | <img src="https://img.shields.io/badge/updated-00FFFF" />      | Use **trash**                                                         |
| cart              | <img src="https://img.shields.io/badge/updated-00FFFF" />      | Use **shopping-cart**                                                 |
| chevron-up-down   | <img src="https://img.shields.io/badge/removed-FF0000" />      | Use an empty space as default                                         |
| clock-wait        | <img src="https://img.shields.io/badge/updated-00FFFF" />      | Use **clock-time-four**                                               |
| close             | <img src="https://img.shields.io/badge/updated-00FFFF" />      | Use **xmark**                                                         |
| copy              | <img src="https://img.shields.io/badge/updated-00FFFF" />      | Use **file-copy**                                                     |
| ellipsis          | <img src="https://img.shields.io/badge/updated-00FFFF" />      | Use **ellipsis-horizontal**                                           |
| error             | <img src="https://img.shields.io/badge/updated-00FFFF" />      | Use **triangle-exclamation**                                              |
| eye-closed        | <img src="https://img.shields.io/badge/updated-00FFFF" />      | Use **eye-off**                                                       |
| eye-open          | <img src="https://img.shields.io/badge/updated-00FFFF" />      | Use **eye**                                                           |
| gear              | <img src="https://img.shields.io/badge/updated-00FFFF" />      | Use **cog**                                                           |
| guides            | <img src="https://img.shields.io/badge/updated-00FFFF" />      | Use **book**                                                          |
| hamburger         | <img src="https://img.shields.io/badge/updated-00FFFF" />      | Use **hamburger-menu**                                                |
| help              | <img src="https://img.shields.io/badge/updated-00FFFF" />      | Use **question**                                                      |
| help-circle       | <img src="https://img.shields.io/badge/updated-00FFFF" />      | Use **circle-question**                                               |
| indeterminate     | <img src="https://img.shields.io/badge/updated-00FFFF" />      | Use **minus**                                                         |
| info              | <img src="https://img.shields.io/badge/updated-00FFFF" />      | Use **circle-info**                                                   |
| ok                | <img src="https://img.shields.io/badge/updated-00FFFF" />      | Use **check**                                                         |
| ovh               | <img src="https://img.shields.io/badge/removed-FF0000" />      | See [Logo](https://zeroheight.com/6fc8a63f7)                          |
| remove            | <img src="https://img.shields.io/badge/updated-00FFFF" />      | Use **minus**                                                         |
| settings          | <img src="https://img.shields.io/badge/updated-00FFFF" />      | Use **cog**                                                           |
| shape-circle      | <img src="https://img.shields.io/badge/updated-00FFFF" />      | Use **star**                                            |
| shape-dot         | <img src="https://img.shields.io/badge/removed-FF0000" />      | Use **star-full**                                       |
| sort              | <img src="https://img.shields.io/badge/removed-FF0000" />      | Use an empty space as default                                         |
| sort-down         | <img src="https://img.shields.io/badge/removed-FF0000" />      | Use **sort-alpha-down**, **sort-numeric-down** or **chevron-down**    |
| sort-up           | <img src="https://img.shields.io/badge/removed-FF0000" />      | Use **sort-alpha-down**, **sort-numeric-down** or **chevron-down**    |
| success           | <img src="https://img.shields.io/badge/updated-00FFFF" />      | Use **check**                                                         |
| success-circle    | <img src="https://img.shields.io/badge/updated-00FFFF" />      | Use **circle-check**                                                  |
| time              | <img src="https://img.shields.io/badge/updated-00FFFF" />      | Use **clock-time-four**                                               |
| transfer          | <img src="https://img.shields.io/badge/updated-00FFFF" />      | Use **arrow-left-right**                                              |
| triangle-down     | <img src="https://img.shields.io/badge/removed-FF0000" />      | Use **sort-alpha-down**, **sort-numeric-down** or **chevron-down**    |
| triangle-left     | <img src="https://img.shields.io/badge/removed-FF0000" />      | Use **chevron-left**                                                  |
| triangle-right    | <img src="https://img.shields.io/badge/removed-FF0000" />      | Use **chevron-right**                                                 |
| triangle-up       | <img src="https://img.shields.io/badge/removed-FF0000" />      | Use **sort-alpha-up**, **sort-numeric-up** or **chevron-up**          |
| user              | <img src="https://img.shields.io/badge/updated-00FFFF" />      | Use **circle-user**                                                   |
| warning           | <img src="https://img.shields.io/badge/updated-00FFFF" />      | Use **triangle-exclamation**                                              |
| warning-circle    | <img src="https://img.shields.io/badge/updated-00FFFF" />      | Use **triangle-exclamation**                                              |
`})]})}function v(i={}){const{wrapper:s}={...n(),...i.components};return s?e.jsx(s,{...i,children:e.jsx(t,{...i})}):t(i)}export{v as default};
