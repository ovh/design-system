import{j as e}from"./jsx-runtime-BtDUu9js.js";import{u as r}from"./index-DZL6x4lo.js";import{M as d,C as a}from"./index-CYldocI7.js";import{B as l}from"./Banner-CW_U-IGN.js";import{H as n}from"./Heading-DwuTnCox.js";import{T as c}from"./TechnicalSpecification-D8V9jwZL.js";import{T as o,O as m,C as p,D as x,P as u,a as T,F as h}from"./text.stories-EAsjt8c7.js";import"./iframe-D7GxXTWn.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-B_J8iUie.js";import"./index-DX_4BEHg.js";import"./index-DrFu-skq.js";import"./index-BvAGq-5Z.js";import"./index-DtXgNHxz.js";import"./lit-html-D-ZEPr28.js";import"./unsafe-html-HR6uCwaW.js";import"./controls-DpsgTNdU.js";const g="1.0.0",j="",S=[{kind:"javascript-module",path:"src/globals.ts",declarations:[],exports:[]},{kind:"javascript-module",path:"src/index.ts",declarations:[],exports:[{kind:"js",name:"OdsText",declaration:{name:"OdsText",module:"./components/ods-text/ods-text"}},{kind:"js",name:"OdsTextPreset",declaration:{name:"OdsTextPreset",module:"./constants/text-preset"}},{kind:"js",name:"ODS_TEXT_PRESETS",declaration:{name:"ODS_TEXT_PRESETS",module:"./constants/text-preset"}},{kind:"js",name:"ODS_TEXT_PRESET",declaration:{name:"ODS_TEXT_PRESET",module:"./constants/text-preset"}}]},{kind:"javascript-module",path:"src/constants/text-preset.ts",declarations:[{kind:"variable",name:"ODS_TEXT_PRESETS"}],exports:[{kind:"js",name:"ODS_TEXT_PRESET",declaration:{name:"ODS_TEXT_PRESET",module:"src/constants/text-preset.ts"}},{kind:"js",name:"ODS_TEXT_PRESETS",declaration:{name:"ODS_TEXT_PRESETS",module:"src/constants/text-preset.ts"}},{kind:"js",name:"OdsTextPreset",declaration:{name:"OdsTextPreset",module:"src/constants/text-preset.ts"}}]},{kind:"javascript-module",path:"src/components/ods-text/ods-text.tsx",declarations:[{kind:"class",description:"",name:"OdsText",members:[{kind:"field",name:"preset",type:{text:"OdsTextPreset | undefined"},privacy:"public",default:"paragraph"},{kind:"method",name:"getTag",return:{type:{text:"string"}}},{kind:"method",name:"render",return:{type:{text:"FunctionalComponent"}}}],attributes:[{name:"preset",fieldName:"preset",type:{text:"OdsTextPreset"}}],tagName:"ods-text",events:[],customElement:!0}],exports:[{kind:"js",name:"OdsText",declaration:{name:"OdsText",module:"src/components/ods-text/ods-text.tsx"}},{kind:"custom-element-definition",name:"ods-text",declaration:{name:"OdsText",module:"src/components/ods-text/ods-text.tsx"}}]}],E={ODS_TEXT_PRESET:{caption:{type:"string",value:"caption"},code:{type:"string",value:"code"},heading1:{type:"string",value:"heading-1"},heading2:{type:"string",value:"heading-2"},heading3:{type:"string",value:"heading-3"},heading4:{type:"string",value:"heading-4"},heading5:{type:"string",value:"heading-5"},heading6:{type:"string",value:"heading-6"},paragraph:{type:"string",value:"paragraph"},span:{type:"string",value:"span"}}},f={schemaVersion:g,readme:j,modules:S,enumPlugin:E};function i(s){const t={code:"code",p:"p",strong:"strong",...r(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(d,{of:o,name:"Technical information"}),`
`,e.jsx(l,{of:o}),`
`,e.jsx(n,{label:"Overview",level:2}),`
`,e.jsx(a,{of:m,sourceState:"none"}),`
`,e.jsx(c,{data:f}),`
`,e.jsx(n,{label:"Style customization",level:2}),`
`,e.jsxs(t.p,{children:["You can add your own style on the text element using the part ",e.jsx(t.code,{children:"text"}),"."]}),`
`,e.jsx(t.p,{children:"Custom CSS :"}),`
`,e.jsx(a,{of:p,sourceState:"shown"}),`
`,e.jsx(n,{label:"Examples",level:2}),`
`,e.jsx(n,{label:"Default",level:3}),`
`,e.jsx(a,{of:x,sourceState:"shown"}),`
`,e.jsx(n,{label:"Preset",level:3}),`
`,e.jsxs(t.p,{children:[e.jsx(t.strong,{children:"Caption"})," preset can be used should you need ODS caption custom style."]}),`
`,e.jsxs(t.p,{children:["For actual ",e.jsx(t.code,{children:"<caption>"})," (used in a table) or ",e.jsx(t.code,{children:"<figcaption>"})," (image), use the native tag using either an ods-text inside of it or the Saas mixin."]}),`
`,e.jsx(a,{of:u,sourceState:"shown"}),`
`,e.jsx(n,{label:"Caption preset in <table>",level:3}),`
`,e.jsx(a,{of:T,sourceState:"shown"}),`
`,e.jsx(n,{label:"Caption preset in <figcaption>",level:3}),`
`,e.jsx(a,{of:h,sourceState:"shown"})]})}function z(s={}){const{wrapper:t}={...r(),...s.components};return t?e.jsx(t,{...s,children:e.jsx(i,{...s})}):i(s)}export{z as default};
