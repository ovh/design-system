import{j as e,M as l,C as n}from"./index-BZrH9CGX.js";import{u as s}from"./index-dt1nTXy9.js";import{B as m}from"./Banner-DiaRo2C-.js";import{H as i}from"./Heading-CyUtHF9O.js";import{T as p}from"./TechnicalSpecification-HZMLHTiN.js";import{h as c}from"./validityState-BuENXwQ9.js";import{R as o,C as r,a as u,D as x,A as h,b as v,c as y,E as f,G as b,d as j,I as k,V as g}from"./radio.stories-BYOsu9VX.js";import{R as E}from"./form-field.stories-oKbu4LL8.js";import"./iframe-B8AsNC2M.js";import"../sb-preview/runtime.js";import"./index-8AfNH5n5.js";import"./index-D-8MO0q_.js";import"./index-DrFu-skq.js";import"./index-DZK8KyWG.js";import"./index-2LVqMwig.js";import"./ods-accordion2-vvZNAi9U.js";import"./index-DAZhnxgO.js";import"./icon-name-C6aMXAXT.js";import"./ods-icon2-DRPHarK1.js";import"./ods-badge-CjbpLGl8.js";import"./ods-breadcrumb-item2-C_Ah5FZN.js";import"./ods-link2-CtVFUlMR.js";import"./ods-button2-dPaqs0uX.js";import"./ods-spinner2-CPyWCS2f.js";import"./ods-card-DRGl4_I-.js";import"./ods-checkbox2-B2XbvOPY.js";import"./dom-8hoR-urs.js";import"./ods-clipboard2-C65imxCo.js";import"./ods-input2-C6KOqFAM.js";import"./type-B5zI8QxY.js";import"./ods-tooltip2-CW12aP9b.js";import"./overlay-KZpfSxWH.js";import"./ods-code2-D4zmvcg_.js";import"./ods-combobox2-CC5fPZls.js";import"./_commonjsHelpers-CLD5em3H.js";import"./debounce-DRefBDpX.js";import"./ods-tag2-Bb2BMy9d.js";import"./ods-datepicker2-FisogS88.js";import"./locale-NOa-Gxlr.js";import"./ods-divider-CjaMxjcH.js";import"./ods-divider2-R3gNNk4H.js";import"./ods-drawer2-BQqpNIWL.js";import"./ods-file-upload2-teF1qz6H.js";import"./ods-progress-bar2-zR9YGHZb.js";import"./ods-form-field2-BSNGPVxz.js";import"./ods-icon-DTp5PnPI.js";import"./ods-input-CCQ46ZEm.js";import"./ods-link-BCeMi6SV.js";import"./ods-medium2-BnayTic8.js";import"./ods-message-BxLNJd0H.js";import"./ods-modal2-BQO4yvXA.js";import"./ods-pagination2-BkxTbhCC.js";import"./ods-select2-C8koqTnw.js";import"./ods-password2-Cx1VaMfM.js";import"./ods-phone-number2-B3iHB89H.js";import"./ods-popover2-D09FwiGN.js";import"./ods-quantity2-7U22nj6z.js";import"./ods-radio2-C2vNRNiP.js";import"./ods-range2-l-uevN51.js";import"./ods-skeleton2-B7sDasgF.js";import"./ods-switch-item2-ebcV2EUF.js";import"./ods-tabs2-BNbhFfmR.js";import"./ods-table2-oe37kiP3.js";import"./ods-text-BO_pN8NQ.js";import"./ods-textarea2-BDOVTqwb.js";import"./ods-timepicker2-Cq-oMtdT.js";import"./ods-toggle2-Bg02aln1.js";import"./StorybookLink-CftdUnI_.js";import"./controls-DX883vx3.js";import"./unsafe-html-VJzuFJfF.js";const C="1.0.0",R="",S=[{kind:"javascript-module",path:"src/globals.ts",declarations:[],exports:[]},{kind:"javascript-module",path:"src/index.ts",declarations:[],exports:[{kind:"js",name:"OdsRadio",declaration:{name:"OdsRadio",module:"./components/ods-radio/ods-radio"}},{kind:"js",name:"OdsRadioChangeEvent",declaration:{name:"OdsRadioChangeEvent",module:"./interfaces/events"}},{kind:"js",name:"OdsRadioChangeEventDetail",declaration:{name:"OdsRadioChangeEventDetail",module:"./interfaces/events"}}]},{kind:"javascript-module",path:"src/interfaces/events.ts",declarations:[],exports:[{kind:"js",name:"OdsRadioChangeEvent",declaration:{name:"OdsRadioChangeEvent",module:"src/interfaces/events.ts"}},{kind:"js",name:"OdsRadioChangeEventDetail",declaration:{name:"OdsRadioChangeEventDetail",module:"src/interfaces/events.ts"}}]},{kind:"javascript-module",path:"src/components/ods-radio/ods-radio.tsx",declarations:[{kind:"class",description:"",name:"OdsRadio",members:[{kind:"field",name:"inputEl",type:{text:"HTMLInputElement | undefined"},privacy:"private"},{kind:"field",name:"observer",type:{text:"MutationObserver | undefined"},privacy:"private"},{kind:"field",name:"isInvalid",type:{text:"boolean | undefined"},privacy:"private"},{kind:"field",name:"ariaLabel",type:{text:"HTMLElement['ariaLabel']"},privacy:"public",default:"null"},{kind:"field",name:"ariaLabelledby",type:{text:"string | undefined"},privacy:"public"},{kind:"field",name:"hasError",type:{text:"boolean"},privacy:"public",default:"false"},{kind:"field",name:"inputId",type:{text:"string | undefined"},privacy:"public"},{kind:"field",name:"isChecked",type:{text:"boolean"},privacy:"public",default:"false"},{kind:"field",name:"isDisabled",type:{text:"boolean"},privacy:"public",default:"false"},{kind:"field",name:"isRequired",type:{text:"boolean"},privacy:"public",default:"false"},{kind:"field",name:"name",type:{text:"string"},privacy:"public"},{kind:"field",name:"value",type:{text:"string | null"},privacy:"public",default:"null"},{kind:"method",name:"checkValidity",privacy:"public",return:{type:{text:"Promise<boolean | undefined>"}}},{kind:"method",name:"clear",privacy:"public",return:{type:{text:"Promise<void>"}}},{kind:"method",name:"getValidationMessage",privacy:"public",return:{type:{text:"Promise<string | undefined>"}}},{kind:"method",name:"getValidity",privacy:"public",return:{type:{text:"Promise<ValidityState | undefined>"}}},{kind:"method",name:"reportValidity",privacy:"public",return:{type:{text:"Promise<boolean | undefined>"}}},{kind:"method",name:"reset",privacy:"public",return:{type:{text:"Promise<void>"}}},{kind:"method",name:"select",privacy:"public",return:{type:{text:"Promise<void>"}}},{kind:"method",name:"willValidate",privacy:"public",return:{type:{text:"Promise<boolean | undefined>"}}},{kind:"method",name:"onIsInvalidChange",return:{type:{text:"void"}}},{kind:"method",name:"formResetCallback",return:{type:{text:"Promise<void>"}}},{kind:"method",name:"getOdsRadiosGroupByName",privacy:"private",return:{type:{text:"NodeListOf<Element & OdsRadio>"}}},{kind:"method",name:"onBlur",privacy:"private",return:{type:{text:"void"}}},{kind:"method",name:"onInput",privacy:"private",return:{type:{text:"void"}},parameters:[{name:"event",type:{text:"Event"}}]},{kind:"method",name:"onInvalidEvent",privacy:"private",return:{type:{text:"void"}},parameters:[{name:"event",type:{text:"Event"}}]},{kind:"method",name:"render",return:{type:{text:"FunctionalComponent"}}}],attributes:[{name:"aria-label",fieldName:"ariaLabel",type:{text:"HTMLElement['ariaLabel']"}},{name:"aria-labelledby",fieldName:"ariaLabelledby",type:{text:"string"}},{name:"has-error",fieldName:"hasError",type:{text:"boolean"}},{name:"input-id",fieldName:"inputId",type:{text:"string"}},{name:"is-checked",fieldName:"isChecked",type:{text:"boolean"}},{name:"is-disabled",fieldName:"isDisabled",type:{text:"boolean"}},{name:"is-required",fieldName:"isRequired",type:{text:"boolean"}},{name:"name",fieldName:"name",type:{text:"string"}},{name:"value",fieldName:"value",type:{text:"string | null"}}],tagName:"ods-radio",events:[{name:"odsBlur",type:{text:"EventEmitter<void>"}},{name:"odsChange",type:{text:"EventEmitter<OdsRadioChangeEventDetail>"}},{name:"odsClear",type:{text:"EventEmitter<void>"}},{name:"odsFocus",type:{text:"EventEmitter<void>"}},{name:"odsInvalid",type:{text:"EventEmitter<{ isInvalid: boolean }>"}},{name:"odsReset",type:{text:"EventEmitter<void>"}}],customElement:!0}],exports:[{kind:"js",name:"OdsRadio",declaration:{name:"OdsRadio",module:"src/components/ods-radio/ods-radio.tsx"}},{kind:"custom-element-definition",name:"ods-radio",declaration:{name:"OdsRadio",module:"src/components/ods-radio/ods-radio.tsx"}}]}],w={},O={schemaVersion:C,readme:R,modules:S,enumPlugin:w};function d(a){const t={code:"code",p:"p",strong:"strong",...s(),...a.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{of:o,name:"Technical information"}),`
`,e.jsx(m,{of:o}),`
`,e.jsx(i,{label:"Overview",level:2}),`
`,e.jsxs(t.p,{children:[e.jsx(t.strong,{children:"Radio"})," are used when, facing a list of two or more options, the user must select only one."]}),`
`,e.jsxs(t.p,{children:["The previous components ",e.jsx(t.code,{children:"radio"}),", ",e.jsx(t.code,{children:"radio-button"})," and ",e.jsx(t.code,{children:"radio-group"})," have now been included in ",e.jsx(t.code,{children:"radio"})]}),`
`,e.jsxs(t.p,{children:["The behavior of the old ",e.jsx(t.code,{children:"radio-group"})," is now automatic, giving the radio the same name as the native implementation."]}),`
`,e.jsxs(t.p,{children:["There is no longer a ",e.jsx(t.code,{children:"radio"})," component to make clickable Element."]}),`
`,e.jsx(n,{of:r,sourceState:"none"}),`
`,e.jsx(p,{data:O}),`
`,e.jsx(i,{label:"Style customization",level:2}),`
`,e.jsxs(t.p,{children:["You can add your own style on the radio element using the part ",e.jsx(t.code,{children:"radio"}),"."]}),`
`,e.jsx(t.p,{children:"Custom CSS:"}),`
`,e.jsx(n,{of:u,sourceState:"shown"}),`
`,e.jsx(i,{label:"Examples",level:2}),`
`,e.jsx(i,{label:"Default",level:3}),`
`,e.jsx(n,{of:x,sourceState:"shown"}),`
`,e.jsx(i,{label:"Alignment",level:3}),`
`,e.jsx(t.p,{children:`The radio component may not be vertically aligned by default, depending on the content following it.
You'll need to manage this with CSS on parent element.`}),`
`,e.jsx(n,{of:h,sourceState:"shown"}),`
`,e.jsx(i,{label:"Checked",level:3}),`
`,e.jsx(n,{of:r,sourceState:"shown"}),`
`,e.jsx(i,{label:"Disabled",level:3}),`
`,e.jsx(n,{of:v,sourceState:"shown"}),`
`,e.jsx(i,{label:"Disabled Checked",level:3}),`
`,e.jsx(n,{of:y,sourceState:"shown"}),`
`,e.jsx(i,{label:"Error",level:3}),`
`,e.jsx(n,{of:f,sourceState:"shown"}),`
`,e.jsx(i,{label:"Group",level:3}),`
`,e.jsx(n,{of:b,sourceState:"shown"}),`
`,e.jsx(i,{label:"Group checked",level:3}),`
`,e.jsxs(t.p,{children:["The attribute ",e.jsx(t.code,{children:"is-checked"})," works like the native implementation, defining the default checked radio in a group."]}),`
`,e.jsx(n,{of:j,sourceState:"shown"}),`
`,e.jsx(i,{label:"InputId",level:3}),`
`,e.jsxs(t.p,{children:["The ",e.jsx(t.code,{children:"id"})," is encapsulated by the ",e.jsx(t.code,{children:"input-id"})," attribute. This way you can link a label (attribute ",e.jsx(t.code,{children:"for"}),") to the input."]}),`
`,e.jsx(n,{of:k,sourceState:"shown"}),`
`,e.jsx(i,{label:"Validity State",level:3}),`
`,e.jsx(n,{of:g,source:{transform:c},sourceState:"shown"}),`
`,e.jsx(i,{label:"Included in a Form Field",level:3}),`
`,e.jsx(n,{of:E,sourceState:"shown"})]})}function _e(a={}){const{wrapper:t}={...s(),...a.components};return t?e.jsx(t,{...a,children:e.jsx(d,{...a})}):d(a)}export{_e as default};
