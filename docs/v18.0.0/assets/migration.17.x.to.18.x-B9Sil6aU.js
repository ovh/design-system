import{j as e}from"./jsx-runtime-Dn0LW--f.js";import{u as r}from"./index-DeyDdHvX.js";import{M as i}from"./index-BM3JsZOq.js";import"./iframe-6_jBXMSq.js";import"../sb-preview/runtime.js";import"./commonjsHelpers-Cpj98o6Y.js";import"./index-B_J8iUie.js";import"./index-DX_4BEHg.js";import"./index-DrFu-skq.js";function s(n){const o={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...r(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{title:"OVHcloud Design System/What's new?/Migration guide/17.x to 18.x"}),`
`,e.jsxs(o.h1,{id:"1722-to-1800-compare",children:[e.jsx(o.a,{href:"https://ovh.github.io/design-system/v17.6.0/?path=/story/ovhcloud-design-system-what-s-new-changelog--page",rel:"nofollow",children:"17.2.2"})," to ",e.jsx(o.a,{href:"https://ovh.github.io/design-system/v18.0.0/?path=/story/ovhcloud-design-system-what-s-new-changelog--page",rel:"nofollow",children:"18.0.0"})," (",e.jsx(o.a,{href:"https://github.com/ovh/design-system/compare/release/17.0...release/18.0",rel:"nofollow",children:"compare"}),")"]}),`
`,e.jsx(o.p,{children:"If you have any questions or issues regarding the new version, feel free to reach us directly."}),`
`,e.jsx(o.h2,{id:"libraries",children:"Libraries"}),`
`,e.jsx(o.p,{children:"The following libs have been removed:"}),`
`,e.jsxs(o.ul,{children:[`
`,e.jsx(o.li,{children:"@ovhcloud/ods-cdk"}),`
`,e.jsx(o.li,{children:"@ovhcloud/ods-common-core"}),`
`,e.jsx(o.li,{children:"@ovhcloud/ods-common-stencil"}),`
`,e.jsx(o.li,{children:"@ovhcloud/ods-common-testing"}),`
`,e.jsx(o.li,{children:"@ovhcloud/ods-common-theming"}),`
`,e.jsx(o.li,{children:"@ovhcloud/ods-theme-blue-jeans"}),`
`]}),`
`,e.jsx(o.p,{children:"If you were using part of them, please reach out to us so that we can get more information about your usage."}),`
`,e.jsxs(o.p,{children:["To use the new theme, replace ",e.jsx(o.code,{children:"ods-theme-blue-jeans"})," with the following:"]}),`
`,e.jsx(o.pre,{children:e.jsx(o.code,{className:"language-js",children:`import '@ovhcloud/ods-themes/default';
`})}),`
`,e.jsx(o.h2,{id:"design-tokens",children:"Design tokens"}),`
`,e.jsxs(o.p,{children:["Design tokens are now accessible through the ",e.jsx(o.code,{children:"@ovhcloud/ods-themes"})," lib."]}),`
`,e.jsx(o.p,{children:"The list of available tokens has been updated with the latest design changes and match what you may find on the Figma screens."}),`
`,e.jsx(o.h2,{id:"components",children:"Components"}),`
`,e.jsx(o.p,{children:"As each component was refactored, there are too many changes to list everything here."}),`
`,e.jsxs(o.p,{children:["The main common breaking change is the following: ",e.jsx(o.code,{children:"osds-xxx"})," component is now ",e.jsx(o.code,{children:"ods-xxx"})]}),`
`,e.jsx(o.p,{children:"A complete list of changes and a guide about how to migrate is available per component:"}),`
`,e.jsxs(o.ul,{children:[`
`,e.jsx(o.li,{children:e.jsx(o.a,{href:"?path=/docs/ods-components-accordion--migration-from-17-x",children:"accordion"})}),`
`,e.jsx(o.li,{children:e.jsx(o.a,{href:"?path=/docs/ods-components-badge--migration-from-17-x",children:"badge"})}),`
`,e.jsx(o.li,{children:e.jsx(o.a,{href:"?path=/docs/ods-components-breadcrumb--migration-from-17-x",children:"breadcrumb"})}),`
`,e.jsx(o.li,{children:e.jsx(o.a,{href:"?path=/docs/ods-components-button--migration-from-17-x",children:"button"})}),`
`,e.jsx(o.li,{children:e.jsx(o.a,{href:"?path=/docs/ods-components-card--migration-from-17-x",children:"card"})}),`
`,e.jsx(o.li,{children:e.jsx(o.a,{href:"?path=/docs/ods-components-cart--docs",children:"cart"})}),`
`,e.jsx(o.li,{children:e.jsx(o.a,{href:"?path=/docs/ods-components-form-elements-checkbox--migration-from-17-x",children:"checkbox"})}),`
`,e.jsx(o.li,{children:e.jsx(o.a,{href:"?path=/docs/ods-components-clipboard--migration-from-17-x",children:"clipboard"})}),`
`,e.jsx(o.li,{children:e.jsx(o.a,{href:"?path=/docs/ods-components-code--migration-from-17-x",children:"code"})}),`
`,e.jsx(o.li,{children:e.jsx(o.a,{href:"?path=/docs/ods-components-content-addon--docs",children:"content-addon"})}),`
`,e.jsx(o.li,{children:e.jsx(o.a,{href:"?path=/docs/ods-components-form-elements-datepicker--migration-from-17-x",children:"datepicker"})}),`
`,e.jsx(o.li,{children:e.jsx(o.a,{href:"?path=/docs/ods-components-divider--migration-from-17-x",children:"divider"})}),`
`,e.jsx(o.li,{children:e.jsx(o.a,{href:"?path=/docs/ods-components-form-elements-file-upload--migration-from-17-x",children:"file-upload"})}),`
`,e.jsx(o.li,{children:e.jsx(o.a,{href:"?path=/docs/ods-components-flag--docs",children:"flag"})}),`
`,e.jsx(o.li,{children:e.jsx(o.a,{href:"?path=/docs/ods-components-form-elements-form-field--migration-from-17-x",children:"form-field"})}),`
`,e.jsx(o.li,{children:e.jsx(o.a,{href:"?path=/docs/ods-components-icon--migration-from-17-x",children:"icon"})}),`
`,e.jsx(o.li,{children:e.jsx(o.a,{href:"?path=/docs/ods-components-form-elements-input--migration-from-17-x",children:"input"})}),`
`,e.jsx(o.li,{children:e.jsx(o.a,{href:"?path=/docs/ods-components-link--migration-from-17-x",children:"link"})}),`
`,e.jsx(o.li,{children:e.jsx(o.a,{href:"?path=/docs/ods-components-medium--migration-from-17-x",children:"medium"})}),`
`,e.jsx(o.li,{children:e.jsx(o.a,{href:"?path=/docs/ods-components-menu--docs",children:"menu"})}),`
`,e.jsx(o.li,{children:e.jsx(o.a,{href:"?path=/docs/ods-components-message--migration-from-17-x",children:"message"})}),`
`,e.jsx(o.li,{children:e.jsx(o.a,{href:"?path=/docs/ods-components-modal--migration-from-17-x",children:"modal"})}),`
`,e.jsx(o.li,{children:e.jsx(o.a,{href:"?path=/docs/ods-components-pagination--migration-from-17-x",children:"pagination"})}),`
`,e.jsx(o.li,{children:e.jsx(o.a,{href:"?path=/docs/ods-components-form-elements-password--migration-from-17-x",children:"password"})}),`
`,e.jsx(o.li,{children:e.jsx(o.a,{href:"?path=/docs/ods-components-form-elements-phone-number--migration-from-17-x",children:"phone-number"})}),`
`,e.jsx(o.li,{children:e.jsx(o.a,{href:"?path=/docs/ods-components-popover--migration-from-17-x",children:"popover"})}),`
`,e.jsx(o.li,{children:e.jsx(o.a,{href:"?path=/docs/ods-components-progress-bar--migration-from-17-x",children:"progress-bar"})}),`
`,e.jsx(o.li,{children:e.jsx(o.a,{href:"?path=/docs/ods-components-search-bar--docs",children:"search-bar"})}),`
`,e.jsx(o.li,{children:e.jsx(o.a,{href:"?path=/docs/ods-components-form-elements-quantity--migration-from-17-x",children:"quantity"})}),`
`,e.jsx(o.li,{children:e.jsx(o.a,{href:"?path=/docs/ods-components-form-elements-radio--migration-from-17-x",children:"radio"})}),`
`,e.jsx(o.li,{children:e.jsx(o.a,{href:"?path=/docs/ods-components-form-elements-range--migration-from-17-x",children:"range"})}),`
`,e.jsx(o.li,{children:e.jsx(o.a,{href:"?path=/docs/ods-components-form-elements-select--migration-from-17-x",children:"select"})}),`
`,e.jsx(o.li,{children:e.jsx(o.a,{href:"?path=/docs/ods-components-skeleton--migration-from-17-x",children:"skeleton"})}),`
`,e.jsx(o.li,{children:e.jsx(o.a,{href:"?path=/docs/ods-components-spinner--migration-from-17-x",children:"spinner"})}),`
`,e.jsx(o.li,{children:e.jsx(o.a,{href:"?path=/docs/ods-components-form-elements-switch--migration-from-17-x",children:"switch"})}),`
`,e.jsx(o.li,{children:e.jsx(o.a,{href:"?path=/docs/ods-components-table--migration-from-17-x",children:"table"})}),`
`,e.jsx(o.li,{children:e.jsx(o.a,{href:"?path=/docs/ods-components-tabs--migration-from-17-x",children:"tabs"})}),`
`,e.jsx(o.li,{children:e.jsx(o.a,{href:"?path=/docs/ods-components-tag--migration-from-17-x",children:"tag"})}),`
`,e.jsx(o.li,{children:e.jsx(o.a,{href:"?path=/docs/ods-components-text--migration-from-17-x",children:"text"})}),`
`,e.jsx(o.li,{children:e.jsx(o.a,{href:"?path=/docs/ods-components-form-elements-textarea--migration-from-17-x",children:"textarea"})}),`
`,e.jsx(o.li,{children:e.jsx(o.a,{href:"?path=/docs/ods-components-form-elements-timepicker--migration-from-17-x",children:"timepicker"})}),`
`,e.jsx(o.li,{children:e.jsx(o.a,{href:"?path=/docs/ods-components-form-elements-toggle--migration-from-17-x",children:"toggle"})}),`
`,e.jsx(o.li,{children:e.jsx(o.a,{href:"?path=/docs/ods-components-tooltip--migration-from-17-x",children:"tooltip"})}),`
`]})]})}function f(n={}){const{wrapper:o}={...r(),...n.components};return o?e.jsx(o,{...n,children:e.jsx(s,{...n})}):s(n)}export{f as default};
