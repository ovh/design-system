import{j as e}from"./jsx-runtime-BtDUu9js.js";import{u as i}from"./index-DZL6x4lo.js";import{M as d,C as a}from"./index-CYldocI7.js";import{B as m}from"./Banner-CW_U-IGN.js";import{H as o}from"./Heading-DwuTnCox.js";import{T as r}from"./TechnicalSpecification-D8V9jwZL.js";import{M as s,O as c,C as p,D as u,N as O,a as x,A as v}from"./modal.stories-xw9mUrMK.js";import"./iframe-D7GxXTWn.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-B_J8iUie.js";import"./index-DX_4BEHg.js";import"./index-DrFu-skq.js";import"./index-BvAGq-5Z.js";import"./index-DtXgNHxz.js";import"./lit-html-D-ZEPr28.js";import"./unsafe-html-HR6uCwaW.js";import"./controls-DpsgTNdU.js";const f="1.0.0",j="",y=[{kind:"javascript-module",path:"src/globals.ts",declarations:[],exports:[]},{kind:"javascript-module",path:"src/index.ts",declarations:[],exports:[{kind:"js",name:"OdsModal",declaration:{name:"OdsModal",module:"./components/ods-modal/ods-modal"}},{kind:"js",name:"ODS_MODAL_COLOR",declaration:{name:"ODS_MODAL_COLOR",module:"./constants/modal-color"}},{kind:"js",name:"ODS_MODAL_COLORS",declaration:{name:"ODS_MODAL_COLORS",module:"./constants/modal-color"}},{kind:"js",name:"OdsModalColor",declaration:{name:"OdsModalColor",module:"./constants/modal-color"}}]},{kind:"javascript-module",path:"src/constants/modal-color.ts",declarations:[{kind:"variable",name:"ODS_MODAL_COLORS"}],exports:[{kind:"js",name:"ODS_MODAL_COLOR",declaration:{name:"ODS_MODAL_COLOR",module:"src/constants/modal-color.ts"}},{kind:"js",name:"ODS_MODAL_COLORS",declaration:{name:"ODS_MODAL_COLORS",module:"src/constants/modal-color.ts"}},{kind:"js",name:"OdsModalColor",declaration:{name:"OdsModalColor",module:"src/constants/modal-color.ts"}}]},{kind:"javascript-module",path:"src/components/ods-modal/ods-modal.tsx",declarations:[{kind:"class",description:"",name:"OdsModal",members:[{kind:"field",name:"modalDialog",type:{text:"HTMLDialogElement | undefined"},privacy:"private"},{kind:"field",name:"el",type:{text:"HTMLElement"}},{kind:"field",name:"color",type:{text:"OdsModalColor"},privacy:"public",default:"information"},{kind:"field",name:"isDismissible",type:{text:"boolean"},privacy:"public",default:"true"},{kind:"field",name:"isOpen",type:{text:"boolean"},privacy:"public",default:"false"},{kind:"method",name:"close",privacy:"public",return:{type:{text:"Promise<void>"}}},{kind:"method",name:"open",privacy:"public",return:{type:{text:"Promise<void>"}}},{kind:"method",name:"handleOpenState",return:{type:{text:"void"}}},{kind:"method",name:"onKeyDown",return:{type:{text:"void"}},parameters:[{name:"event",type:{text:"KeyboardEvent"}}]},{kind:"method",name:"handleBackdropClick",return:{type:{text:"void"}},parameters:[{name:"event",type:{text:"MouseEvent"}}]},{kind:"method",name:"render",return:{type:{text:"FunctionalComponent"}}}],attributes:[{name:"color",fieldName:"color",type:{text:"OdsModalColor"}},{name:"is-dismissible",fieldName:"isDismissible",type:{text:"boolean"}},{name:"is-open",fieldName:"isOpen",type:{text:"boolean"}}],tagName:"ods-modal",events:[{name:"odsClose",type:{text:"EventEmitter<void>"}},{name:"odsOpen",type:{text:"EventEmitter<void>"}}],customElement:!0}],exports:[{kind:"js",name:"OdsModal",declaration:{name:"OdsModal",module:"src/components/ods-modal/ods-modal.tsx"}},{kind:"custom-element-definition",name:"ods-modal",declaration:{name:"OdsModal",module:"src/components/ods-modal/ods-modal.tsx"}}]}],M={ODS_MODAL_COLOR:{critical:{type:"string",value:"critical"},information:{type:"string",value:"information"},neutral:{type:"string",value:"neutral"},success:{type:"string",value:"success"},warning:{type:"string",value:"warning"}}},D={schemaVersion:f,readme:j,modules:y,enumPlugin:M};function l(t){const n={code:"code",p:"p",...i(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(d,{of:s,name:"Technical information"}),`
`,e.jsx(m,{of:s}),`
`,e.jsx(o,{label:"Overview",level:2}),`
`,e.jsx(a,{of:c,sourceState:"none"}),`
`,e.jsx(r,{data:D}),`
`,e.jsx(o,{label:"Style customization",level:2}),`
`,e.jsxs(n.p,{children:["You can update the modal's content by directly updating the slot elements. You can also update it using the ",e.jsx(n.code,{children:"::part(dialog)"}),"."]}),`
`,e.jsx(n.p,{children:"Custom CSS:"}),`
`,e.jsx(a,{of:p,sourceState:"shown"}),`
`,e.jsx(o,{label:"Examples",level:2}),`
`,e.jsx(o,{label:"Default",level:3}),`
`,e.jsx(a,{of:u,sourceState:"shown"}),`
`,e.jsx(o,{label:"Not Dismissible",level:3}),`
`,e.jsx(a,{of:O,sourceState:"shown"}),`
`,e.jsx(o,{label:"Color",level:3}),`
`,e.jsx(a,{of:x,sourceState:"shown"}),`
`,e.jsx(o,{label:"Actions slot",level:3}),`
`,e.jsx(a,{of:v,sourceState:"shown"})]})}function F(t={}){const{wrapper:n}={...i(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(l,{...t})}):l(t)}export{F as default};
