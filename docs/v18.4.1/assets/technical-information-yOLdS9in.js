import{j as e,M as l,C as s}from"./index-Rx6QkXSv.js";import{u as d}from"./index-DPrOAYpY.js";import{B as r}from"./Banner-BpmhCXha.js";import{H as t}from"./Heading-2XnXa8MH.js";import{T as m}from"./TechnicalSpecification-Ce_BCW3m.js";import{T as o,O as c,C as p,D as u,a as g,I as v,S as O}from"./tag.stories-4id19X7B.js";import"./iframe-HwRW2g_s.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-D-8MO0q_.js";import"./index-DX_4BEHg.js";import"./index-DrFu-skq.js";import"./index-Dqa08QUn.js";import"./index-BJiUJsri.js";import"./controls-DX883vx3.js";const x="1.0.0",S="",T=[{kind:"javascript-module",path:"src/globals.ts",declarations:[],exports:[]},{kind:"javascript-module",path:"src/index.ts",declarations:[],exports:[{kind:"js",name:"OdsTag",declaration:{name:"OdsTag",module:"./components/ods-tag/ods-tag"}},{kind:"js",name:"ODS_TAG_COLOR",declaration:{name:"ODS_TAG_COLOR",module:"./constants/tag-color"}},{kind:"js",name:"ODS_TAG_COLORS",declaration:{name:"ODS_TAG_COLORS",module:"./constants/tag-color"}},{kind:"js",name:"OdsTagColor",declaration:{name:"OdsTagColor",module:"./constants/tag-color"}},{kind:"js",name:"ODS_TAG_SIZE",declaration:{name:"ODS_TAG_SIZE",module:"./constants/tag-size"}},{kind:"js",name:"ODS_TAG_SIZES",declaration:{name:"ODS_TAG_SIZES",module:"./constants/tag-size"}},{kind:"js",name:"OdsTagSize",declaration:{name:"OdsTagSize",module:"./constants/tag-size"}},{kind:"js",name:"OdsTagRemoveEvent",declaration:{name:"OdsTagRemoveEvent",module:"./interfaces/events"}},{kind:"js",name:"OdsTagRemoveEventDetail",declaration:{name:"OdsTagRemoveEventDetail",module:"./interfaces/events"}}]},{kind:"javascript-module",path:"src/constants/tag-color.ts",declarations:[{kind:"variable",name:"ODS_TAG_COLORS"}],exports:[{kind:"js",name:"ODS_TAG_COLOR",declaration:{name:"ODS_TAG_COLOR",module:"src/constants/tag-color.ts"}},{kind:"js",name:"ODS_TAG_COLORS",declaration:{name:"ODS_TAG_COLORS",module:"src/constants/tag-color.ts"}},{kind:"js",name:"OdsTagColor",declaration:{name:"OdsTagColor",module:"src/constants/tag-color.ts"}}]},{kind:"javascript-module",path:"src/constants/tag-size.ts",declarations:[{kind:"variable",name:"ODS_TAG_SIZES"}],exports:[{kind:"js",name:"ODS_TAG_SIZE",declaration:{name:"ODS_TAG_SIZE",module:"src/constants/tag-size.ts"}},{kind:"js",name:"ODS_TAG_SIZES",declaration:{name:"ODS_TAG_SIZES",module:"src/constants/tag-size.ts"}},{kind:"js",name:"OdsTagSize",declaration:{name:"OdsTagSize",module:"src/constants/tag-size.ts"}}]},{kind:"javascript-module",path:"src/controller/ods-tag.ts",declarations:[{kind:"function",name:"handleClick",return:{type:{text:"void"}},parameters:[{name:"tag",type:{text:"HTMLElement"}},{name:"isDisabled",type:{text:"boolean"}},{name:"eventEmitter",type:{text:"{ emit: (data: OdsTagRemoveEventDetail) => CustomEvent }"}}]},{kind:"function",name:"handleKeyDown",return:{type:{text:"void"}},parameters:[{name:"event",type:{text:"KeyboardEvent"}}]},{kind:"function",name:"handleKeyUp",return:{type:{text:"void"}},parameters:[{name:"event",type:{text:"KeyboardEvent"}},{name:"tag",type:{text:"HTMLElement"}},{name:"isDisabled",type:{text:"boolean"}},{name:"eventEmitter",type:{text:"{ emit: (data: OdsTagRemoveEventDetail) => CustomEvent }"}}]}],exports:[{kind:"js",name:"handleClick",declaration:{name:"handleClick",module:"src/controller/ods-tag.ts"}},{kind:"js",name:"handleKeyDown",declaration:{name:"handleKeyDown",module:"src/controller/ods-tag.ts"}},{kind:"js",name:"handleKeyUp",declaration:{name:"handleKeyUp",module:"src/controller/ods-tag.ts"}}]},{kind:"javascript-module",path:"src/interfaces/events.ts",declarations:[],exports:[{kind:"js",name:"OdsTagRemoveEvent",declaration:{name:"OdsTagRemoveEvent",module:"src/interfaces/events.ts"}},{kind:"js",name:"OdsTagRemoveEventDetail",declaration:{name:"OdsTagRemoveEventDetail",module:"src/interfaces/events.ts"}}]},{kind:"javascript-module",path:"src/components/ods-tag/ods-tag.tsx",declarations:[{kind:"class",description:"",name:"OdsTag",members:[{kind:"field",name:"el",type:{text:"HTMLElement"}},{kind:"field",name:"color",type:{text:"OdsTagColor"},privacy:"public",default:"information"},{kind:"field",name:"icon",type:{text:"OdsIconName | undefined"},privacy:"public"},{kind:"field",name:"isDisabled",type:{text:"boolean"},privacy:"public",default:"false"},{kind:"field",name:"label",type:{text:"string"},privacy:"public"},{kind:"field",name:"size",type:{text:"OdsTagSize"},privacy:"public",default:"md"},{kind:"method",name:"onClick",return:{type:{text:"void"}}},{kind:"method",name:"onKeyDown",return:{type:{text:"void"}},parameters:[{name:"event",type:{text:"KeyboardEvent"}}]},{kind:"method",name:"onKeyUp",return:{type:{text:"void"}},parameters:[{name:"event",type:{text:"KeyboardEvent"}}]},{kind:"method",name:"render",return:{type:{text:"FunctionalComponent"}}}],attributes:[{name:"color",fieldName:"color",type:{text:"OdsTagColor"}},{name:"icon",fieldName:"icon",type:{text:"OdsIconName"}},{name:"is-disabled",fieldName:"isDisabled",type:{text:"boolean"}},{name:"label",fieldName:"label",type:{text:"string"}},{name:"size",fieldName:"size",type:{text:"OdsTagSize"}}],tagName:"ods-tag",events:[{name:"odsRemove",type:{text:"EventEmitter<OdsTagRemoveEventDetail>"}}],customElement:!0}],exports:[{kind:"js",name:"OdsTag",declaration:{name:"OdsTag",module:"src/components/ods-tag/ods-tag.tsx"}},{kind:"custom-element-definition",name:"ods-tag",declaration:{name:"OdsTag",module:"src/components/ods-tag/ods-tag.tsx"}}]}],y={ODS_TAG_COLOR:{critical:{type:"string",value:"critical"},information:{type:"string",value:"information"},neutral:{type:"string",value:"neutral"},success:{type:"string",value:"success"},warning:{type:"string",value:"warning"}},ODS_TAG_SIZE:{lg:{type:"string",value:"lg"},md:{type:"string",value:"md"}}},j={schemaVersion:x,readme:S,modules:T,enumPlugin:y};function i(a){const n={code:"code",p:"p",...d(),...a.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{of:o,name:"Technical information"}),`
`,e.jsx(r,{of:o}),`
`,e.jsx(t,{label:"Overview",level:2}),`
`,e.jsx(s,{of:c,sourceState:"none"}),`
`,e.jsx(m,{data:j}),`
`,e.jsx(t,{label:"Style customization",level:2}),`
`,e.jsxs(n.p,{children:["You can add your own style on the tag element using the part ",e.jsx(n.code,{children:"tag"}),"."]}),`
`,e.jsx(n.p,{children:"Custom CSS :"}),`
`,e.jsx(s,{of:p,sourceState:"shown"}),`
`,e.jsx(t,{label:"Examples",level:2}),`
`,e.jsx(t,{label:"Default",level:3}),`
`,e.jsx(s,{of:u,sourceState:"shown"}),`
`,e.jsx(t,{label:"Color",level:3}),`
`,e.jsx(s,{of:g,sourceState:"shown"}),`
`,e.jsx(t,{label:"Is Disabled",level:3}),`
`,e.jsx(s,{of:v,sourceState:"shown"}),`
`,e.jsx(t,{label:"Size",level:3}),`
`,e.jsx(s,{of:O,sourceState:"shown"})]})}function K(a={}){const{wrapper:n}={...d(),...a.components};return n?e.jsx(n,{...a,children:e.jsx(i,{...a})}):i(a)}export{K as default};
