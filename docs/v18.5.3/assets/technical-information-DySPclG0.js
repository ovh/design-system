import{j as e,M as s,C as a}from"./index-CCbL8veO.js";import{u as l}from"./index-Cq3PbNHF.js";import{B as d}from"./Banner-DlMMAjjN.js";import{H as t}from"./Heading-DN6FdGMk.js";import{T as m}from"./TechnicalSpecification-Cv-bMtac.js";import{h as p}from"./validityState-BuENXwQ9.js";import{T as i,O as c,C as u,D as v,a as x,b as g,E as y,V as f,W as h}from"./toggle.stories-Bx4Q3us9.js";import{k as b}from"./form-field.stories-DgLcbgf8.js";import"./iframe-DU4SvIHv.js";import"../sb-preview/runtime.js";import"./index-8AfNH5n5.js";import"./index-D-8MO0q_.js";import"./index-DrFu-skq.js";import"./index-DCBH0_Tl.js";import"./index-uzYzEmTV.js";import"./ods-accordion2-C2zw5EtX.js";import"./index-DAZhnxgO.js";import"./icon-name-C6aMXAXT.js";import"./ods-icon2-C2sSMg6h.js";import"./ods-badge-CMZ1G1-q.js";import"./ods-breadcrumb-item2-Chi8uW7w.js";import"./ods-link2-DhrEm8Nk.js";import"./ods-button2-DJxJiLcj.js";import"./ods-spinner2-CPyWCS2f.js";import"./ods-card-CsxtEQHf.js";import"./ods-checkbox2-D1rfq4Wo.js";import"./dom-CO1DdTQY.js";import"./ods-clipboard2-PjbiunMl.js";import"./ods-input2-BVKbybMU.js";import"./type-B5zI8QxY.js";import"./ods-tooltip2-CW12aP9b.js";import"./overlay-KZpfSxWH.js";import"./ods-code2-CPtqO8K9.js";import"./ods-datepicker2-CHJb_Dii.js";import"./locale-NOa-Gxlr.js";import"./ods-divider-Dtiri0aY.js";import"./ods-divider2-yzIshch6.js";import"./ods-drawer2-DKhK7oOX.js";import"./ods-file-upload2-WcWZbv1U.js";import"./ods-progress-bar2-Dg_V5kiw.js";import"./ods-form-field2-BDYkM6lU.js";import"./ods-icon-DOZBIEJb.js";import"./ods-link-C3iAbK8i.js";import"./ods-medium2-BnayTic8.js";import"./ods-message-DErUZ_Xg.js";import"./ods-modal2-CLthqs1m.js";import"./ods-pagination2-CxhEcubt.js";import"./ods-select2-D2fKxfqw.js";import"./ods-password2-DNFrl9vd.js";import"./ods-phone-number2-qOf9h3xC.js";import"./ods-popover2-D0fTxPry.js";import"./ods-quantity2-DSK2z9QA.js";import"./ods-radio2-NdDFmobW.js";import"./ods-range2-DVd4LCay.js";import"./ods-skeleton2-B7sDasgF.js";import"./ods-switch-item2-D-SJNcDd.js";import"./ods-tabs2-ChMEr-fQ.js";import"./ods-table2-oe37kiP3.js";import"./ods-tag2-CInySbKk.js";import"./ods-text-BO_pN8NQ.js";import"./ods-textarea2-BJL14TBM.js";import"./ods-timepicker2-4lQj55gq.js";import"./ods-toggle2-BgUL7nI_.js";import"./StorybookLink-Dd4tegpy.js";import"./controls-DX883vx3.js";import"./unsafe-html-VJzuFJfF.js";const k="1.0.0",j="",E=[{kind:"javascript-module",path:"src/globals.ts",declarations:[],exports:[]},{kind:"javascript-module",path:"src/index.ts",declarations:[],exports:[{kind:"js",name:"OdsToggle",declaration:{name:"OdsToggle",module:"./components/ods-toggle/ods-toggle"}},{kind:"js",name:"OdsToggleChangeEvent",declaration:{name:"OdsToggleChangeEvent",module:"./interfaces/event"}},{kind:"js",name:"OdsToggleChangeEventDetail",declaration:{name:"OdsToggleChangeEventDetail",module:"./interfaces/event"}}]},{kind:"javascript-module",path:"src/controller/ods-toggle.ts",declarations:[{kind:"function",name:"hasValueChanged",return:{type:{text:"boolean"}},parameters:[{name:"value",type:{text:"boolean | null"}},{name:"previousValue",optional:!0,type:{text:"string | null"}}]},{kind:"function",name:"updateInternals",return:{type:{text:"void"}},parameters:[{name:"internals",type:{text:"ElementInternals"}},{name:"value",type:{text:"boolean | null"}},{name:"inputEl",optional:!0,type:{text:"HTMLInputElement"}}]}],exports:[{kind:"js",name:"hasValueChanged",declaration:{name:"hasValueChanged",module:"src/controller/ods-toggle.ts"}},{kind:"js",name:"updateInternals",declaration:{name:"updateInternals",module:"src/controller/ods-toggle.ts"}}]},{kind:"javascript-module",path:"src/interfaces/event.ts",declarations:[],exports:[{kind:"js",name:"OdsToggleChangeEvent",declaration:{name:"OdsToggleChangeEvent",module:"src/interfaces/event.ts"}},{kind:"js",name:"OdsToggleChangeEventDetail",declaration:{name:"OdsToggleChangeEventDetail",module:"src/interfaces/event.ts"}}]},{kind:"javascript-module",path:"src/components/ods-toggle/ods-toggle.tsx",declarations:[{kind:"class",description:"",name:"OdsToggle",members:[{kind:"field",name:"inputEl",type:{text:"HTMLInputElement | undefined"},privacy:"private"},{kind:"field",name:"observer",type:{text:"MutationObserver | undefined"},privacy:"private"},{kind:"field",name:"shouldUpdateIsInvalidState",type:{text:"boolean"},privacy:"private",default:"false"},{kind:"field",name:"el",type:{text:"HTMLElement"}},{kind:"field",name:"internals",type:{text:"ElementInternals"},privacy:"private"},{kind:"field",name:"isInvalid",type:{text:"boolean | undefined"},privacy:"private"},{kind:"field",name:"defaultValue",type:{text:"boolean | undefined"},privacy:"public"},{kind:"field",name:"hasError",type:{text:"boolean"},privacy:"public",default:"false"},{kind:"field",name:"isDisabled",type:{text:"boolean"},privacy:"public",default:"false"},{kind:"field",name:"isRequired",type:{text:"boolean"},privacy:"public",default:"false"},{kind:"field",name:"name",type:{text:"string"},privacy:"public"},{kind:"field",name:"value",type:{text:"boolean | null"},privacy:"public",default:"null"},{kind:"field",name:"withLabel",type:{text:"boolean"},privacy:"public",default:"false"},{kind:"method",name:"onInvalidEvent",return:{type:{text:"void"}},parameters:[{name:"event",type:{text:"Event"}}]},{kind:"method",name:"checkValidity",privacy:"public",return:{type:{text:"Promise<boolean>"}}},{kind:"method",name:"clear",privacy:"public",return:{type:{text:"Promise<void>"}}},{kind:"method",name:"getValidationMessage",privacy:"public",return:{type:{text:"Promise<string>"}}},{kind:"method",name:"getValidity",privacy:"public",return:{type:{text:"Promise<ValidityState>"}}},{kind:"method",name:"reportValidity",privacy:"public",return:{type:{text:"Promise<boolean>"}}},{kind:"method",name:"reset",privacy:"public",return:{type:{text:"Promise<void>"}}},{kind:"method",name:"toggle",privacy:"public",return:{type:{text:"Promise<void>"}}},{kind:"method",name:"willValidate",privacy:"public",return:{type:{text:"Promise<boolean>"}}},{kind:"method",name:"onIsInvalidChange",return:{type:{text:"void"}}},{kind:"method",name:"formResetCallback",return:{type:{text:"Promise<void>"}}},{kind:"method",name:"onBlur",privacy:"private",return:{type:{text:"void"}}},{kind:"method",name:"onInput",privacy:"private",return:{type:{text:"void"}}},{kind:"method",name:"onValueChange",privacy:"private",return:{type:{text:"void"}}},{kind:"method",name:"render",return:{type:{text:"FunctionalComponent"}}}],attributes:[{name:"default-value",fieldName:"defaultValue",type:{text:"boolean"}},{name:"has-error",fieldName:"hasError",type:{text:"boolean"}},{name:"is-disabled",fieldName:"isDisabled",type:{text:"boolean"}},{name:"is-required",fieldName:"isRequired",type:{text:"boolean"}},{name:"name",fieldName:"name",type:{text:"string"}},{name:"value",fieldName:"value",type:{text:"boolean | null"}},{name:"with-label",fieldName:"withLabel",type:{text:"boolean"}}],tagName:"ods-toggle",events:[{name:"odsBlur",type:{text:"EventEmitter<void>"}},{name:"odsChange",type:{text:"EventEmitter<OdsToggleChangeEventDetail>"}},{name:"odsClear",type:{text:"EventEmitter<void>"}},{name:"odsFocus",type:{text:"EventEmitter<void>"}},{name:"odsInvalid",type:{text:"EventEmitter<{ isInvalid: boolean }>"}},{name:"odsReset",type:{text:"EventEmitter<void>"}}],customElement:!0}],exports:[{kind:"js",name:"OdsToggle",declaration:{name:"OdsToggle",module:"src/components/ods-toggle/ods-toggle.tsx"}},{kind:"custom-element-definition",name:"ods-toggle",declaration:{name:"OdsToggle",module:"src/components/ods-toggle/ods-toggle.tsx"}}]}],C={},T={schemaVersion:k,readme:j,modules:E,enumPlugin:C};function r(o){const n={code:"code",p:"p",...l(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{of:i,name:"Technical information"}),`
`,e.jsx(d,{of:i}),`
`,e.jsx(t,{label:"Overview",level:2}),`
`,e.jsx(a,{of:c,sourceState:"none"}),`
`,e.jsx(m,{data:T}),`
`,e.jsx(t,{label:"Style customization",level:2}),`
`,e.jsxs(n.p,{children:["You can add your own style on the text element using the part ",e.jsx(n.code,{children:"slider"}),", ",e.jsx(n.code,{children:"label"}),", ",e.jsx(n.code,{children:"slider check"})," or ",e.jsx(n.code,{children:"label check"}),"."]}),`
`,e.jsx(n.p,{children:"Custom CSS :"}),`
`,e.jsx(a,{of:u,sourceState:"shown"}),`
`,e.jsx(t,{label:"Examples",level:2}),`
`,e.jsx(t,{label:"Default",level:3}),`
`,e.jsx(a,{of:v,sourceState:"shown"}),`
`,e.jsx(t,{label:"Disabled On",level:3}),`
`,e.jsx(a,{of:x,sourceState:"shown"}),`
`,e.jsx(t,{label:"Disabled Off",level:3}),`
`,e.jsx(a,{of:g,sourceState:"shown"}),`
`,e.jsx(t,{label:"Error",level:3}),`
`,e.jsx(a,{of:y,sourceState:"shown"}),`
`,e.jsx(t,{label:"Validity State",level:3}),`
`,e.jsx(a,{of:f,source:{transform:p},sourceState:"shown"}),`
`,e.jsx(t,{label:"With Label",level:3}),`
`,e.jsx(a,{of:h,sourceState:"shown"}),`
`,e.jsx(t,{label:"Included in a Form Field",level:3}),`
`,e.jsx(a,{of:b,sourceState:"shown"})]})}function Re(o={}){const{wrapper:n}={...l(),...o.components};return n?e.jsx(n,{...o,children:e.jsx(r,{...o})}):r(o)}export{Re as default};
