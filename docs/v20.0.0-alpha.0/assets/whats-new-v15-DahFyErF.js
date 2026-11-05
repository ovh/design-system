import{i as e}from"./rolldown-runtime-Dd_uD5pT.js";import{t}from"./jsx-runtime-DREnUpxT.js";import{T as n}from"./index-CdRG7ZE_.js";var r=e(t());function i(e){let t={code:`code`,em:`em`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...n(),...e.components},{DocLink:i,Heading:a}=t;return i||o(`DocLink`,!0),a||o(`Heading`,!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.p,{children:(0,r.jsxs)(t.em,{children:[`Release notes of v15. For the current major version, see `,(0,r.jsx)(i,{to:`/guides/whats-new`,children:`What's new`}),`.`]})}),`
`,(0,r.jsx)(a,{label:`v15.0.1`,level:2}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsx)(t.li,{children:`Fix new packages release process.`}),`
`,(0,r.jsx)(t.li,{children:`Update documentation.`}),`
`]}),`
`,(0,r.jsx)(a,{label:`v15.0.0`,level:2}),`
`,(0,r.jsxs)(t.p,{children:[`As it is a major version, you have to do the `,(0,r.jsx)(i,{to:`/guides/migration-14-to-15`,children:`migration guide 14.x to 15.x`})]}),`
`,(0,r.jsx)(a,{label:`Project changes`,level:3}),`
`,(0,r.jsx)(t.p,{children:`This version is the first step towards the new ODS internal architecture.
The goal of this refactoring is to simplify and improve the whole project to:`}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsx)(t.li,{children:`provide a better developer experience and thus reduce development time`}),`
`,(0,r.jsx)(t.li,{children:`normalize all components behavior / design / attributes`}),`
`,(0,r.jsx)(t.li,{children:`have better control on dependencies and lib version upgrade`}),`
`,(0,r.jsx)(t.li,{children:`have better control on what ODS expose (through component or CDK)`}),`
`,(0,r.jsx)(t.li,{children:`...`}),`
`]}),`
`,(0,r.jsxs)(t.p,{children:[`This first step only impact two components `,(0,r.jsx)(t.code,{children:`osds-text`}),` and `,(0,r.jsx)(t.code,{children:`osds-textarea`}),`.`]}),`
`,(0,r.jsx)(t.p,{children:`All other components will follow on next version.`}),`
`,(0,r.jsx)(t.p,{children:`Then common ODS lib and theming will be refactored on next version.`}),`
`,(0,r.jsx)(a,{label:`Features changes`,level:3}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsxs)(t.li,{children:[`
`,(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:`Text`})}),`
`]}),`
`,(0,r.jsxs)(t.li,{children:[`
`,(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:`OsdsText`}),` is no longer part of `,(0,r.jsx)(t.code,{children:`@ovhcloud/ods-stencil`}),` package.`]}),`
`]}),`
`,(0,r.jsxs)(t.li,{children:[`
`,(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:`OsdsText`}),` is now accessible by adding either `,(0,r.jsx)(t.code,{children:`@ovhcloud/ods-component-text`}),` or `,(0,r.jsx)(t.code,{children:`@ovhcloud/ods-components`}),` dependency.`]}),`
`]}),`
`,(0,r.jsxs)(t.li,{children:[`
`,(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:`@ovhcloud/ods-stencil-text`}),` lib has been replaced by `,(0,r.jsx)(t.code,{children:`@ovhcloud/ods-component-text`}),`.`]}),`
`]}),`
`,(0,r.jsxs)(t.li,{children:[`
`,(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:`@ovhcloud/ods-stencil-text-react`}),` lib has been replaced by `,(0,r.jsx)(t.code,{children:`@ovhcloud/ods-component-text-react`}),`.`]}),`
`]}),`
`,(0,r.jsxs)(t.li,{children:[`
`,(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:`@ovhcloud/ods-stencil-text-vue`}),` lib has been replaced by `,(0,r.jsx)(t.code,{children:`@ovhcloud/ods-component-text- vue`}),`.`]}),`
`]}),`
`,(0,r.jsxs)(t.li,{children:[`
`,(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:`OdsTextSize`}),` has been removed from `,(0,r.jsx)(t.code,{children:`@ovhcloud/ods-core`}),` and has been replaced by `,(0,r.jsx)(t.code,{children:`ODS_TEXT_SIZE`}),` from `,(0,r.jsx)(t.code,{children:`@ovhcloud/ods-component-text`}),`.`]}),`
`]}),`
`,(0,r.jsxs)(t.li,{children:[`
`,(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:`OdsTextSizeList`}),` has been removed from `,(0,r.jsx)(t.code,{children:`@ovhcloud/ods-core`}),` and is replaced by `,(0,r.jsx)(t.code,{children:`ODS_TEXT_SIZES`}),` from `,(0,r.jsx)(t.code,{children:`@ovhcloud/ods-component-text`}),`.`]}),`
`]}),`
`,(0,r.jsxs)(t.li,{children:[`
`,(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:`OdsTextSizeUnion`}),` has been removed from `,(0,r.jsx)(t.code,{children:`@ovhcloud/ods-core`}),`.`]}),`
`]}),`
`,(0,r.jsxs)(t.li,{children:[`
`,(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:`OdsTextLevel`}),` has been removed from `,(0,r.jsx)(t.code,{children:`@ovhcloud/ods-core`}),` and has been replaced by `,(0,r.jsx)(t.code,{children:`ODS_TEXT_LEVEL`}),` from `,(0,r.jsx)(t.code,{children:`@ovhcloud/ods-component-text`}),`.`]}),`
`]}),`
`,(0,r.jsxs)(t.li,{children:[`
`,(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:`OdsTextLevelList`}),` has been removed from `,(0,r.jsx)(t.code,{children:`@ovhcloud/ods-core`}),` and is replaced by `,(0,r.jsx)(t.code,{children:`ODS_TEXT_LEVELS`}),` from `,(0,r.jsx)(t.code,{children:`@ovhcloud/ods-component-text`}),`.`]}),`
`]}),`
`,(0,r.jsxs)(t.li,{children:[`
`,(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:`OdsTextLevelUnion`}),` has been removed from `,(0,r.jsx)(t.code,{children:`@ovhcloud/ods-core`}),`.`]}),`
`]}),`
`,(0,r.jsxs)(t.li,{children:[`
`,(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:`@ovhcloud/ods-component-text`}),` exports only `,(0,r.jsx)(t.code,{children:`OdsTextAttribute`}),` as component interface.`]}),`
`]}),`
`,(0,r.jsxs)(t.li,{children:[`
`,(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:`Textarea`})}),`
`]}),`
`,(0,r.jsxs)(t.li,{children:[`
`,(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:`OsdsTextarea`}),` is no longer part of `,(0,r.jsx)(t.code,{children:`@ovhcloud/ods-stencil`}),` package.`]}),`
`]}),`
`,(0,r.jsxs)(t.li,{children:[`
`,(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:`OsdsTextarea`}),` is now accessible by adding either `,(0,r.jsx)(t.code,{children:`@ovhcloud/ods-component-textarea`}),` or `,(0,r.jsx)(t.code,{children:`@ovhcloud/ods-components`}),` dependency.`]}),`
`]}),`
`,(0,r.jsxs)(t.li,{children:[`
`,(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:`@ovhcloud/ods-stencil-textarea`}),` lib has been replaced by `,(0,r.jsx)(t.code,{children:`@ovhcloud/ods-component-textarea`}),`.`]}),`
`]}),`
`,(0,r.jsxs)(t.li,{children:[`
`,(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:`@ovhcloud/ods-stencil-textarea-react`}),` lib has been replaced by `,(0,r.jsx)(t.code,{children:`@ovhcloud/ods-component-textarea-react`}),`.`]}),`
`]}),`
`,(0,r.jsxs)(t.li,{children:[`
`,(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:`@ovhcloud/ods-stencil-textarea-vue`}),` lib has been replaced by `,(0,r.jsx)(t.code,{children:`@ovhcloud/ods-component-textarea- vue`}),`.`]}),`
`]}),`
`,(0,r.jsxs)(t.li,{children:[`
`,(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:`OdsTextAreaSize`}),` has been removed from `,(0,r.jsx)(t.code,{children:`@ovhcloud/ods-core`}),` and is replaced by `,(0,r.jsx)(t.code,{children:`ODS_TEXTAREA_SIZE`}),` from `,(0,r.jsx)(t.code,{children:`@ovhcloud/ods-component-textarea`}),`.`]}),`
`]}),`
`,(0,r.jsxs)(t.li,{children:[`
`,(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:`OdsTextAreaSizeList`}),` has been removed from `,(0,r.jsx)(t.code,{children:`@ovhcloud/ods-core`}),` and is replaced by `,(0,r.jsx)(t.code,{children:`ODS_TEXTAREA_SIZES`}),` from `,(0,r.jsx)(t.code,{children:`@ovhcloud/ods-component-textarea`}),`.`]}),`
`]}),`
`,(0,r.jsxs)(t.li,{children:[`
`,(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:`OdsTextAreaSizeUnion`}),` has been removed from `,(0,r.jsx)(t.code,{children:`@ovhcloud/ods-core`}),`.`]}),`
`]}),`
`,(0,r.jsxs)(t.li,{children:[`
`,(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:`@ovhcloud/ods-component-textarea`}),` exports only `,(0,r.jsx)(t.code,{children:`OdsTextAttribute`}),`, `,(0,r.jsx)(t.code,{children:`OdsTextAreaEvent`}),` and `,(0,r.jsx)(t.code,{children:`OdsTextAreaValueChangeEvent`}),` as component interfaces.`]}),`
`]}),`
`,(0,r.jsxs)(t.li,{children:[`
`,(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:`OsdsTextarea`}),` is now displayed as flex by default.`]}),`
`]}),`
`,(0,r.jsxs)(t.li,{children:[`
`,(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:`OsdsTextarea`}),` `,(0,r.jsx)(t.code,{children:`flex`}),` attribute has been removed.`]}),`
`]}),`
`,(0,r.jsxs)(t.li,{children:[`
`,(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:`OsdsTextarea`}),` `,(0,r.jsx)(t.code,{children:`inline`}),` attribute has been added.`]}),`
`]}),`
`]})]})}function a(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(i,{...e})}):i(e)}function o(e,t){throw Error(`Expected `+(t?`component`:`object`)+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}export{a as default};