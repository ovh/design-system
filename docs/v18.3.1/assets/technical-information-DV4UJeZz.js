import{j as e}from"./jsx-runtime-BtDUu9js.js";import{u as r}from"./index-DZL6x4lo.js";import{M as m,C as a}from"./index-CYldocI7.js";import{B as l}from"./Banner-CW_U-IGN.js";import{H as s}from"./Heading-DwuTnCox.js";import{T as d}from"./TechnicalSpecification-D8V9jwZL.js";import{M as o,O as c,C as p,D as S,a as u,N as g,V as O,b as v}from"./message.stories-DFavC0es.js";import"./iframe-D7GxXTWn.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-B_J8iUie.js";import"./index-DX_4BEHg.js";import"./index-DrFu-skq.js";import"./index-BvAGq-5Z.js";import"./index-DtXgNHxz.js";import"./lit-html-D-ZEPr28.js";import"./unsafe-html-HR6uCwaW.js";import"./controls-DpsgTNdU.js";const x="1.0.0",M="",j=[{kind:"javascript-module",path:"src/globals.ts",declarations:[],exports:[]},{kind:"javascript-module",path:"src/index.ts",declarations:[],exports:[{kind:"js",name:"OdsMessage",declaration:{name:"OdsMessage",module:"./components/ods-message/ods-message"}},{kind:"js",name:"ODS_MESSAGE_COLOR",declaration:{name:"ODS_MESSAGE_COLOR",module:"./constants/message-color"}},{kind:"js",name:"ODS_MESSAGE_COLORS",declaration:{name:"ODS_MESSAGE_COLORS",module:"./constants/message-color"}},{kind:"js",name:"OdsMessageColor",declaration:{name:"OdsMessageColor",module:"./constants/message-color"}},{kind:"js",name:"ODS_MESSAGE_VARIANT",declaration:{name:"ODS_MESSAGE_VARIANT",module:"./constants/message-variant"}},{kind:"js",name:"ODS_MESSAGE_VARIANTS",declaration:{name:"ODS_MESSAGE_VARIANTS",module:"./constants/message-variant"}},{kind:"js",name:"OdsMessageVariant",declaration:{name:"OdsMessageVariant",module:"./constants/message-variant"}}]},{kind:"javascript-module",path:"src/controller/ods-message.ts",declarations:[{kind:"function",name:"getIconName",return:{type:{text:"OdsIconName"}},parameters:[{name:"color",type:{text:"OdsMessageColor"}}]}],exports:[{kind:"js",name:"getIconName",declaration:{name:"getIconName",module:"src/controller/ods-message.ts"}}]},{kind:"javascript-module",path:"src/constants/message-color.ts",declarations:[{kind:"variable",name:"ODS_MESSAGE_COLORS"}],exports:[{kind:"js",name:"ODS_MESSAGE_COLOR",declaration:{name:"ODS_MESSAGE_COLOR",module:"src/constants/message-color.ts"}},{kind:"js",name:"ODS_MESSAGE_COLORS",declaration:{name:"ODS_MESSAGE_COLORS",module:"src/constants/message-color.ts"}},{kind:"js",name:"OdsMessageColor",declaration:{name:"OdsMessageColor",module:"src/constants/message-color.ts"}}]},{kind:"javascript-module",path:"src/constants/message-variant.ts",declarations:[{kind:"variable",name:"ODS_MESSAGE_VARIANTS"}],exports:[{kind:"js",name:"ODS_MESSAGE_VARIANT",declaration:{name:"ODS_MESSAGE_VARIANT",module:"src/constants/message-variant.ts"}},{kind:"js",name:"ODS_MESSAGE_VARIANTS",declaration:{name:"ODS_MESSAGE_VARIANTS",module:"src/constants/message-variant.ts"}},{kind:"js",name:"OdsMessageVariant",declaration:{name:"OdsMessageVariant",module:"src/constants/message-variant.ts"}}]},{kind:"javascript-module",path:"src/components/ods-message/ods-message.tsx",declarations:[{kind:"class",description:"",name:"OdsMessage",members:[{kind:"field",name:"el",type:{text:"HTMLElement"}},{kind:"field",name:"color",type:{text:"OdsMessageColor"},privacy:"public",default:"information"},{kind:"field",name:"isDismissible",type:{text:"boolean"},privacy:"public",default:"true"},{kind:"field",name:"variant",type:{text:"OdsMessageVariant"},privacy:"public",default:"default"},{kind:"method",name:"handleClick",privacy:"private",return:{type:{text:"void"}}},{kind:"method",name:"handleKeyUp",privacy:"private",return:{type:{text:"void"}},parameters:[{name:"event",type:{text:"KeyboardEvent"}}]},{kind:"method",name:"render",return:{type:{text:"FunctionalComponent"}}}],attributes:[{name:"color",fieldName:"color",type:{text:"OdsMessageColor"}},{name:"is-dismissible",fieldName:"isDismissible",type:{text:"boolean"}},{name:"variant",fieldName:"variant",type:{text:"OdsMessageVariant"}}],tagName:"ods-message",events:[{name:"odsRemove",type:{text:"EventEmitter<void>"}}],customElement:!0}],exports:[{kind:"js",name:"OdsMessage",declaration:{name:"OdsMessage",module:"src/components/ods-message/ods-message.tsx"}},{kind:"custom-element-definition",name:"ods-message",declaration:{name:"OdsMessage",module:"src/components/ods-message/ods-message.tsx"}}]}],E={ODS_MESSAGE_COLOR:{critical:{type:"string",value:"critical"},danger:{type:"string",value:"danger"},information:{type:"string",value:"information"},success:{type:"string",value:"success"},warning:{type:"string",value:"warning"}},ODS_MESSAGE_VARIANT:{default:{type:"string",value:"default"},light:{type:"string",value:"light"}}},f={schemaVersion:x,readme:M,modules:j,enumPlugin:E};function i(n){const t={code:"code",p:"p",...r(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(m,{of:o,name:"Technical information"}),`
`,e.jsx(l,{of:o}),`
`,e.jsx(s,{label:"Overview",level:2}),`
`,e.jsx(a,{of:c,sourceState:"none"}),`
`,e.jsx(d,{data:f}),`
`,e.jsx(s,{label:"Style customization",level:2}),`
`,e.jsxs(t.p,{children:["You can add your own style on the message element using the part ",e.jsx(t.code,{children:"message"}),"."]}),`
`,e.jsx(t.p,{children:"Custom CSS:"}),`
`,e.jsx(a,{of:p,sourceState:"shown"}),`
`,e.jsx(s,{label:"Examples",level:2}),`
`,e.jsx(s,{label:"Default",level:3}),`
`,e.jsx(a,{of:S,sourceState:"shown"}),`
`,e.jsx(s,{label:"Color",level:3}),`
`,e.jsx(a,{of:u,sourceState:"shown"}),`
`,e.jsx(s,{label:"Not Dismissible",level:3}),`
`,e.jsx(a,{of:g,sourceState:"shown"}),`
`,e.jsx(s,{label:"Variant",level:3}),`
`,e.jsx(a,{of:O,sourceState:"shown"}),`
`,e.jsx(s,{label:"Multiline",level:3}),`
`,e.jsx(a,{of:v,sourceState:"shown"})]})}function B(n={}){const{wrapper:t}={...r(),...n.components};return t?e.jsx(t,{...n,children:e.jsx(i,{...n})}):i(n)}export{B as default};