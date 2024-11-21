import{j as e}from"./jsx-runtime-BtDUu9js.js";import{u as l}from"./index-DZL6x4lo.js";import{M as r,C as s}from"./index-CYldocI7.js";import{B as d}from"./Banner-CW_U-IGN.js";import{H as a}from"./Heading-DwuTnCox.js";import{T as m}from"./TechnicalSpecification-D8V9jwZL.js";import{T as o,O as c,D as p,S as u,V as b,C as S}from"./table.stories-BC4wu3ET.js";import"./iframe-D7GxXTWn.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-B_J8iUie.js";import"./index-DX_4BEHg.js";import"./index-DrFu-skq.js";import"./index-BvAGq-5Z.js";import"./index-DtXgNHxz.js";import"./lit-html-D-ZEPr28.js";import"./unsafe-html-HR6uCwaW.js";import"./controls-DpsgTNdU.js";const T="1.0.0",j="",_=[{kind:"javascript-module",path:"src/globals.ts",declarations:[],exports:[]},{kind:"javascript-module",path:"src/index.ts",declarations:[],exports:[{kind:"js",name:"OdsTable",declaration:{name:"OdsTable",module:"./components/ods-table/ods-table"}},{kind:"js",name:"ODS_TABLE_SIZE",declaration:{name:"ODS_TABLE_SIZE",module:"./constants/table-size"}},{kind:"js",name:"ODS_TABLE_SIZES",declaration:{name:"ODS_TABLE_SIZES",module:"./constants/table-size"}},{kind:"js",name:"OdsTableSize",declaration:{name:"OdsTableSize",module:"./constants/table-size"}},{kind:"js",name:"ODS_TABLE_VARIANT",declaration:{name:"ODS_TABLE_VARIANT",module:"./constants/table-variant"}},{kind:"js",name:"ODS_TABLE_VARIANTS",declaration:{name:"ODS_TABLE_VARIANTS",module:"./constants/table-variant"}},{kind:"js",name:"OdsTableVariant",declaration:{name:"OdsTableVariant",module:"./constants/table-variant"}}]},{kind:"javascript-module",path:"src/constants/table-size.ts",declarations:[{kind:"variable",name:"ODS_TABLE_SIZES"}],exports:[{kind:"js",name:"ODS_TABLE_SIZE",declaration:{name:"ODS_TABLE_SIZE",module:"src/constants/table-size.ts"}},{kind:"js",name:"ODS_TABLE_SIZES",declaration:{name:"ODS_TABLE_SIZES",module:"src/constants/table-size.ts"}},{kind:"js",name:"OdsTableSize",declaration:{name:"OdsTableSize",module:"src/constants/table-size.ts"}}]},{kind:"javascript-module",path:"src/constants/table-variant.ts",declarations:[{kind:"variable",name:"ODS_TABLE_VARIANTS"}],exports:[{kind:"js",name:"ODS_TABLE_VARIANT",declaration:{name:"ODS_TABLE_VARIANT",module:"src/constants/table-variant.ts"}},{kind:"js",name:"ODS_TABLE_VARIANTS",declaration:{name:"ODS_TABLE_VARIANTS",module:"src/constants/table-variant.ts"}},{kind:"js",name:"OdsTableVariant",declaration:{name:"OdsTableVariant",module:"src/constants/table-variant.ts"}}]},{kind:"javascript-module",path:"src/components/ods-table/ods-table.tsx",declarations:[{kind:"class",description:"",name:"OdsTable",members:[{kind:"field",name:"size",type:{text:"OdsTableSize"},privacy:"public",default:"md"},{kind:"field",name:"variant",type:{text:"OdsTableVariant"},privacy:"public",default:"default"},{kind:"method",name:"render",return:{type:{text:"FunctionalComponent"}}}],attributes:[{name:"size",fieldName:"size",type:{text:"OdsTableSize"}},{name:"variant",fieldName:"variant",type:{text:"OdsTableVariant"}}],tagName:"ods-table",events:[],customElement:!0}],exports:[{kind:"js",name:"OdsTable",declaration:{name:"OdsTable",module:"src/components/ods-table/ods-table.tsx"}},{kind:"custom-element-definition",name:"ods-table",declaration:{name:"OdsTable",module:"src/components/ods-table/ods-table.tsx"}}]}],O={ODS_TABLE_SIZE:{lg:{type:"string",value:"lg"},md:{type:"string",value:"md"},sm:{type:"string",value:"sm"}},ODS_TABLE_VARIANT:{default:{type:"string",value:"default"},striped:{type:"string",value:"striped"}}},x={schemaVersion:T,readme:j,modules:_,enumPlugin:O};function i(t){const n={p:"p",...l(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{of:o,name:"Technical information"}),`
`,e.jsx(d,{of:o}),`
`,e.jsx(a,{label:"Overview",level:2}),`
`,e.jsx(s,{of:c,sourceState:"none"}),`
`,e.jsx(m,{data:x}),`
`,e.jsx(a,{label:"Style customization",level:2}),`
`,e.jsx(n.p,{children:"The web component is just a wrapper of a native table element that will apply the correct style."}),`
`,e.jsx(n.p,{children:"You can apply your own style on each part of the table directly."}),`
`,e.jsx(a,{label:"Examples",level:2}),`
`,e.jsx(a,{label:"Default",level:3}),`
`,e.jsx(s,{of:p,sourceState:"shown"}),`
`,e.jsx(a,{label:"Size",level:3}),`
`,e.jsx(s,{of:u,sourceState:"shown"}),`
`,e.jsx(a,{label:"Variant",level:3}),`
`,e.jsx(s,{of:b,sourceState:"shown"}),`
`,e.jsx(a,{label:"Text component caption preset",level:3}),`
`,e.jsx(s,{of:S,sourceState:"shown"})]})}function C(t={}){const{wrapper:n}={...l(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(i,{...t})}):i(t)}export{C as default};