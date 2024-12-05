import{j as t}from"./jsx-runtime-Cz3huCOb.js";import{u as l}from"./index-BRdWgBGF.js";import{M as d,C as e}from"./index-C7ZQW9Xo.js";import{B as r}from"./Banner-4suhesey.js";import{H as n}from"./Heading-BWgLZzFp.js";import{T as m}from"./TechnicalSpecification-BRUZjjyt.js";import{B as s,O as c,C as u,D as O,a as p,I as T,b as S,S as N,V as _,W as b,c as B,d as x}from"./button.stories-BDWnaC2u.js";import"./iframe-O-MMI8BM.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-B_J8iUie.js";import"./index-DX_4BEHg.js";import"./index-DrFu-skq.js";import"./index-D19O3a7h.js";import"./index-BYszAjkJ.js";import"./lit-html-D-ZEPr28.js";import"./controls-D697y8_r.js";const f="1.0.0",j="",v=[{kind:"javascript-module",path:"src/globals.ts",declarations:[],exports:[]},{kind:"javascript-module",path:"src/index.ts",declarations:[],exports:[{kind:"js",name:"OdsButton",declaration:{name:"OdsButton",module:"./components/ods-button/ods-button"}},{kind:"js",name:"ODS_BUTTON_COLOR",declaration:{name:"ODS_BUTTON_COLOR",module:"./constants/button-color"}},{kind:"js",name:"ODS_BUTTON_COLORS",declaration:{name:"ODS_BUTTON_COLORS",module:"./constants/button-color"}},{kind:"js",name:"OdsButtonColor",declaration:{name:"OdsButtonColor",module:"./constants/button-color"}},{kind:"js",name:"ODS_BUTTON_ICON_ALIGNMENT",declaration:{name:"ODS_BUTTON_ICON_ALIGNMENT",module:"./constants/button-icon-alignment"}},{kind:"js",name:"ODS_BUTTON_ICON_ALIGNMENTS",declaration:{name:"ODS_BUTTON_ICON_ALIGNMENTS",module:"./constants/button-icon-alignment"}},{kind:"js",name:"OdsButtonIconAlignment",declaration:{name:"OdsButtonIconAlignment",module:"./constants/button-icon-alignment"}},{kind:"js",name:"ODS_BUTTON_SIZE",declaration:{name:"ODS_BUTTON_SIZE",module:"./constants/button-size"}},{kind:"js",name:"ODS_BUTTON_SIZES",declaration:{name:"ODS_BUTTON_SIZES",module:"./constants/button-size"}},{kind:"js",name:"OdsButtonSize",declaration:{name:"OdsButtonSize",module:"./constants/button-size"}},{kind:"js",name:"ODS_BUTTON_VARIANT",declaration:{name:"ODS_BUTTON_VARIANT",module:"./constants/button-variant"}},{kind:"js",name:"ODS_BUTTON_VARIANTS",declaration:{name:"ODS_BUTTON_VARIANTS",module:"./constants/button-variant"}},{kind:"js",name:"OdsButtonVariant",declaration:{name:"OdsButtonVariant",module:"./constants/button-variant"}}]},{kind:"javascript-module",path:"src/controller/ods-button.ts",declarations:[{kind:"function",name:"handleClick",return:{type:{text:"void"}},parameters:[{name:"type",type:{text:"HTMLButtonElement['type']"}},{name:"form",type:{text:"HTMLFormElement | null"}}]}],exports:[{kind:"js",name:"handleClick",declaration:{name:"handleClick",module:"src/controller/ods-button.ts"}}]},{kind:"javascript-module",path:"src/constants/button-color.ts",declarations:[{kind:"variable",name:"ODS_BUTTON_COLORS"}],exports:[{kind:"js",name:"ODS_BUTTON_COLOR",declaration:{name:"ODS_BUTTON_COLOR",module:"src/constants/button-color.ts"}},{kind:"js",name:"ODS_BUTTON_COLORS",declaration:{name:"ODS_BUTTON_COLORS",module:"src/constants/button-color.ts"}},{kind:"js",name:"OdsButtonColor",declaration:{name:"OdsButtonColor",module:"src/constants/button-color.ts"}}]},{kind:"javascript-module",path:"src/constants/button-icon-alignment.ts",declarations:[{kind:"variable",name:"ODS_BUTTON_ICON_ALIGNMENTS"}],exports:[{kind:"js",name:"ODS_BUTTON_ICON_ALIGNMENT",declaration:{name:"ODS_BUTTON_ICON_ALIGNMENT",module:"src/constants/button-icon-alignment.ts"}},{kind:"js",name:"ODS_BUTTON_ICON_ALIGNMENTS",declaration:{name:"ODS_BUTTON_ICON_ALIGNMENTS",module:"src/constants/button-icon-alignment.ts"}},{kind:"js",name:"OdsButtonIconAlignment",declaration:{name:"OdsButtonIconAlignment",module:"src/constants/button-icon-alignment.ts"}}]},{kind:"javascript-module",path:"src/constants/button-size.ts",declarations:[{kind:"variable",name:"ODS_BUTTON_SIZES"}],exports:[{kind:"js",name:"ODS_BUTTON_SIZE",declaration:{name:"ODS_BUTTON_SIZE",module:"src/constants/button-size.ts"}},{kind:"js",name:"ODS_BUTTON_SIZES",declaration:{name:"ODS_BUTTON_SIZES",module:"src/constants/button-size.ts"}},{kind:"js",name:"OdsButtonSize",declaration:{name:"OdsButtonSize",module:"src/constants/button-size.ts"}}]},{kind:"javascript-module",path:"src/constants/button-variant.ts",declarations:[{kind:"variable",name:"ODS_BUTTON_VARIANTS"}],exports:[{kind:"js",name:"ODS_BUTTON_VARIANT",declaration:{name:"ODS_BUTTON_VARIANT",module:"src/constants/button-variant.ts"}},{kind:"js",name:"ODS_BUTTON_VARIANTS",declaration:{name:"ODS_BUTTON_VARIANTS",module:"src/constants/button-variant.ts"}},{kind:"js",name:"OdsButtonVariant",declaration:{name:"OdsButtonVariant",module:"src/constants/button-variant.ts"}}]},{kind:"javascript-module",path:"src/components/ods-button/ods-button.tsx",declarations:[{kind:"class",description:"",name:"OdsButton",members:[{kind:"field",name:"el",type:{text:"HTMLStencilElement"}},{kind:"field",name:"internals",type:{text:"ElementInternals"}},{kind:"field",name:"color",type:{text:"OdsButtonColor"},privacy:"public",default:"primary"},{kind:"field",name:"icon",type:{text:"OdsIconName | undefined"},privacy:"public"},{kind:"field",name:"iconAlignment",type:{text:"OdsButtonIconAlignment | undefined"},privacy:"public",default:"left"},{kind:"field",name:"isDisabled",type:{text:"boolean"},privacy:"public",default:"false"},{kind:"field",name:"isLoading",type:{text:"boolean"},privacy:"public",default:"false"},{kind:"field",name:"label",type:{text:"string"},privacy:"public"},{kind:"field",name:"size",type:{text:"OdsButtonSize"},privacy:"public",default:"md"},{kind:"field",name:"type",type:{text:"HTMLButtonElement['type']"},privacy:"public",default:"'button'"},{kind:"field",name:"variant",type:{text:"OdsButtonVariant"},privacy:"public",default:"default"},{kind:"method",name:"onClick",return:{type:{text:"void"}}},{kind:"method",name:"render",return:{type:{text:"FunctionalComponent"}}}],attributes:[{name:"color",fieldName:"color",type:{text:"OdsButtonColor"}},{name:"icon",fieldName:"icon",type:{text:"OdsIconName"}},{name:"icon-alignment",fieldName:"iconAlignment",type:{text:"OdsButtonIconAlignment"}},{name:"is-disabled",fieldName:"isDisabled",type:{text:"boolean"}},{name:"is-loading",fieldName:"isLoading",type:{text:"boolean"}},{name:"label",fieldName:"label",type:{text:"string"}},{name:"size",fieldName:"size",type:{text:"OdsButtonSize"}},{name:"type",fieldName:"type",type:{text:"HTMLButtonElement['type']"}},{name:"variant",fieldName:"variant",type:{text:"OdsButtonVariant"}}],tagName:"ods-button",events:[],customElement:!0}],exports:[{kind:"js",name:"OdsButton",declaration:{name:"OdsButton",module:"src/components/ods-button/ods-button.tsx"}},{kind:"custom-element-definition",name:"ods-button",declaration:{name:"OdsButton",module:"src/components/ods-button/ods-button.tsx"}}]}],y={ODS_BUTTON_COLOR:{critical:{type:"string",value:"critical"},neutral:{type:"string",value:"neutral"},primary:{type:"string",value:"primary"}},ODS_BUTTON_ICON_ALIGNMENT:{left:{type:"string",value:"left"},right:{type:"string",value:"right"}},ODS_BUTTON_SIZE:{md:{type:"string",value:"md"},sm:{type:"string",value:"sm"},xs:{type:"string",value:"xs"}},ODS_BUTTON_VARIANT:{default:{type:"string",value:"default"},ghost:{type:"string",value:"ghost"},outline:{type:"string",value:"outline"}}},I={schemaVersion:f,readme:j,modules:v,enumPlugin:y};function i(a){const o={code:"code",p:"p",...l(),...a.components};return t.jsxs(t.Fragment,{children:[t.jsx(d,{of:s,name:"Technical information"}),`
`,t.jsx(r,{of:s}),`
`,t.jsx(n,{label:"Overview",level:2}),`
`,t.jsx(e,{of:c,sourceState:"none"}),`
`,t.jsx(m,{data:I}),`
`,t.jsx(n,{label:"Style customization",level:2}),`
`,t.jsxs(o.p,{children:["You can add your own style on the button element using the part ",t.jsx(o.code,{children:"button"}),"."]}),`
`,t.jsx(o.p,{children:"Custom CSS :"}),`
`,t.jsx(e,{of:u,sourceState:"shown"}),`
`,t.jsx(n,{label:"Examples",level:2}),`
`,t.jsx(n,{label:"Default",level:3}),`
`,t.jsx(e,{of:O,sourceState:"shown"}),`
`,t.jsx(n,{label:"Color",level:3}),`
`,t.jsx(e,{of:p,sourceState:"shown"}),`
`,t.jsx(n,{label:"Is Disabled",level:3}),`
`,t.jsx(e,{of:T,sourceState:"shown"}),`
`,t.jsx(n,{label:"Is Loading",level:3}),`
`,t.jsx(e,{of:S,sourceState:"shown"}),`
`,t.jsx(n,{label:"Size",level:3}),`
`,t.jsx(e,{of:N,sourceState:"shown"}),`
`,t.jsx(n,{label:"Variant",level:3}),`
`,t.jsx(e,{of:_,sourceState:"shown"}),`
`,t.jsx(n,{label:"With Left Icon",level:3}),`
`,t.jsx(e,{of:b,sourceState:"shown"}),`
`,t.jsx(n,{label:"With Right Icon",level:3}),`
`,t.jsx(e,{of:B,sourceState:"shown"}),`
`,t.jsx(n,{label:"Icon only",level:3}),`
`,t.jsx(e,{of:x,sourceState:"shown"})]})}function W(a={}){const{wrapper:o}={...l(),...a.components};return o?t.jsx(o,{...a,children:t.jsx(i,{...a})}):i(a)}export{W as default};
