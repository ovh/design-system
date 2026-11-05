import{i as e}from"./rolldown-runtime-Dd_uD5pT.js";import{t}from"./jsx-runtime-DREnUpxT.js";import{T as n}from"./index-CdRG7ZE_.js";var r=e(t());function i(e){let t={a:`a`,code:`code`,h1:`h1`,p:`p`,pre:`pre`,...n(),...e.components},{DocLink:i,Heading:a}=t;return i||o(`DocLink`,!0),a||o(`Heading`,!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(t.h1,{children:[(0,r.jsx)(t.a,{href:`https://ovh.github.io/design-system/v16.6.0/?path=/story/ovhcloud-design-system-what-s-new-changelog--page`,children:`16.6.0`}),` to `,(0,r.jsx)(t.a,{href:`https://ovh.github.io/design-system/v17.0.0/?path=/story/ovhcloud-design-system-what-s-new-changelog--page`,children:`17.0.0`}),` (`,(0,r.jsx)(t.a,{href:`https://github.com/ovh/design-system/compare/release/16.0...release/17.0`,children:`compare`}),`)`]}),`
`,(0,r.jsx)(t.p,{children:`Main focus on this version has been on simplifying ODS integration in existing projects (React, Vue, JS, ...).`}),`
`,(0,r.jsx)(t.p,{children:`If you have any issue finding a specific change, feel free to contact us directly and we'll help you migrate.`}),`
`,(0,r.jsx)(a,{label:`All Components`,level:2}),`
`,(0,r.jsx)(a,{label:`Dependency`,level:3}),`
`,(0,r.jsxs)(t.p,{children:[`We now only publish one `,(0,r.jsx)(t.code,{children:`ods-components`}),` library that embed all the ODS components.`]}),`
`,(0,r.jsx)(t.p,{children:`You need to remove any component specific dependencies, ex:`}),`
`,(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:`language-text`,children:`"ods-component-button": "16.6.0" // should be removed
`})}),`
`,(0,r.jsx)(t.p,{children:`Instead use only one dependency:`}),`
`,(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:`language-text`,children:`"ods-components": "17.0.0"
`})}),`
`,(0,r.jsx)(a,{label:`Import`,level:3}),`
`,(0,r.jsxs)(t.p,{children:[`You can see more details in the updated `,(0,r.jsx)(i,{to:`/guides/get-started`,children:`Get Started documentation`})]}),`
`,(0,r.jsx)(a,{label:`Native webcomponents`,level:4}),`
`,(0,r.jsx)(t.p,{children:`Using lazy-loading:`}),`
`,(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:`language-typescript`,children:`import { defineCustomElements } from '@ovhcloud/ods-components/dist/loader';
defineCustomElements();
`})}),`
`,(0,r.jsx)(t.p,{children:`As module:`}),`
`,(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:`language-typescript`,children:`import { defineCustomElement as defineButton } from '@ovhcloud/ods-components/dist/components/osds-button';
defineButton();
`})}),`
`,(0,r.jsx)(a,{label:`React components`,level:4}),`
`,(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:`language-typescript`,children:`import { OsdsButton, OsdsText } from '@ovhcloud/ods-components/react';
`})}),`
`,(0,r.jsx)(a,{label:`Vue components`,level:4}),`
`,(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:`language-typescript`,children:`import { OsdsButton, OsdsText } from '@ovhcloud/ods-components/vue';
`})}),`
`,(0,r.jsx)(a,{label:`Types and constants`,level:4}),`
`,(0,r.jsxs)(t.p,{children:[`All types and constants are accessible from the `,(0,r.jsx)(t.code,{children:`ods-components`}),` library:`]}),`
`,(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:`language-typescript`,children:`import type { OdsButtonAttribute } from '@ovhcloud/ods-components'
import { ODS_BUTTON_SIZE, ODS_BUTTON_SIZES } from '@ovhcloud/ods-components';
`})}),`
`,(0,r.jsx)(a,{label:"About `ods-common-xxx` libs",level:3}),`
`,(0,r.jsxs)(t.p,{children:[`We're trying to remove the need to add any `,(0,r.jsx)(t.code,{children:`ods-common-xxx`}),` lib to any project using ODS.`]}),`
`,(0,r.jsxs)(t.p,{children:[`For now, you will still need to add `,(0,r.jsx)(t.code,{children:`ods-common-theming`}),` as a dependency to access the `,(0,r.jsx)(t.code,{children:`ODS_THEME_COLOR_INTENT`}),` values.`]}),`
`,(0,r.jsxs)(t.p,{children:[`If you still ended up adding `,(0,r.jsx)(t.code,{children:`ods-common-core`}),` in your project, please give us the feedback so that we work on removing that need.`]})]})}function a(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(i,{...e})}):i(e)}function o(e,t){throw Error(`Expected `+(t?`component`:`object`)+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}export{a as default};