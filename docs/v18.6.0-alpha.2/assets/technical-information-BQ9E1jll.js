import{j as e,M as s,C as n}from"./index-Cg27MLKJ.js";import{u as m}from"./index-CRYdQg8Y.js";import{B as d}from"./Banner-B8px5-Yg.js";import{H as t}from"./Heading-J7HCFxl6.js";import{T as l}from"./TechnicalSpecification-CWEOid_d.js";import{h as p}from"./validityState-BuENXwQ9.js";import{S as r,O as c,D as u,C as h,a as y,E as v,b as x,V as k}from"./switch.stories-BRIO_TpP.js";import{i as S}from"./form-field.stories-Br9du8pS.js";import"./iframe-J0ZUQmQ0.js";import"../sb-preview/runtime.js";import"./index-8AfNH5n5.js";import"./index-D-8MO0q_.js";import"./index-DrFu-skq.js";import"./index-CGJBSJl7.js";import"./index-DpXZhc7f.js";import"./ods-accordion2-C_uqOg6Y.js";import"./index-DAZhnxgO.js";import"./icon-name-C6aMXAXT.js";import"./ods-icon2-DRPHarK1.js";import"./ods-badge-CjbpLGl8.js";import"./ods-breadcrumb-item2-C_Ah5FZN.js";import"./ods-link2-CtVFUlMR.js";import"./ods-button2-dPaqs0uX.js";import"./ods-spinner2-CPyWCS2f.js";import"./ods-card-CsxtEQHf.js";import"./ods-checkbox2-CJl-a8ad.js";import"./dom-8hoR-urs.js";import"./ods-clipboard2-CewZJu-c.js";import"./ods-input2-C6KOqFAM.js";import"./type-B5zI8QxY.js";import"./ods-tooltip2-CW12aP9b.js";import"./overlay-KZpfSxWH.js";import"./ods-code2-BL2TW0HP.js";import"./ods-combobox2-CyL0bVv9.js";import"./_commonjsHelpers-CLD5em3H.js";import"./debounce-DRefBDpX.js";import"./ods-tag2-Bb2BMy9d.js";import"./ods-datepicker2-CijAhCPy.js";import"./locale-NOa-Gxlr.js";import"./ods-divider-Dtiri0aY.js";import"./ods-divider2-yzIshch6.js";import"./ods-drawer2-DKhK7oOX.js";import"./ods-file-upload2-Ca3mZ5BD.js";import"./ods-progress-bar2-Dg_V5kiw.js";import"./ods-form-field2-BDYkM6lU.js";import"./ods-icon-DTp5PnPI.js";import"./ods-input-CCQ46ZEm.js";import"./ods-link-BCeMi6SV.js";import"./ods-medium2-BnayTic8.js";import"./ods-message-DuyDaLcv.js";import"./ods-modal2-DCK89o-L.js";import"./ods-pagination2-shUGU0gB.js";import"./ods-select2-CEKvSxa4.js";import"./ods-password2-D64-z8ym.js";import"./ods-phone-number2-BL58mHzY.js";import"./ods-popover2-mGbx5HiL.js";import"./ods-quantity2-7U22nj6z.js";import"./ods-radio2-DDJaSdNS.js";import"./ods-range2-wBjnlon-.js";import"./ods-skeleton2-B7sDasgF.js";import"./ods-switch-item2-D-SJNcDd.js";import"./ods-tabs2-ChMEr-fQ.js";import"./ods-table2-oe37kiP3.js";import"./ods-text-BO_pN8NQ.js";import"./ods-textarea2-BDOVTqwb.js";import"./ods-timepicker2-DVnCnUkw.js";import"./ods-toggle2-Bg02aln1.js";import"./StorybookLink-anNL9IKG.js";import"./controls-DX883vx3.js";import"./unsafe-html-VJzuFJfF.js";const f="1.0.0",w="",b=[{kind:"javascript-module",path:"src/globals.ts",declarations:[],exports:[]},{kind:"javascript-module",path:"src/index.ts",declarations:[],exports:[{kind:"js",name:"OdsSwitch",declaration:{name:"OdsSwitch",module:"./components/ods-switch/ods-switch"}},{kind:"js",name:"OdsSwitchItem",declaration:{name:"OdsSwitchItem",module:"./components/ods-switch-item/ods-switch-item"}},{kind:"js",name:"ODS_SWITCH_SIZE",declaration:{name:"ODS_SWITCH_SIZE",module:"./constant/switch-size"}},{kind:"js",name:"ODS_SWITCH_SIZES",declaration:{name:"ODS_SWITCH_SIZES",module:"./constant/switch-size"}},{kind:"js",name:"OdsSwitchSize",declaration:{name:"OdsSwitchSize",module:"./constant/switch-size"}},{kind:"js",name:"OdsSwitchChangeEvent",declaration:{name:"OdsSwitchChangeEvent",module:"./interfaces/events"}},{kind:"js",name:"OdsSwitchChangeEventDetail",declaration:{name:"OdsSwitchChangeEventDetail",module:"./interfaces/events"}}]},{kind:"javascript-module",path:"src/controller/ods-switch.ts",declarations:[{kind:"function",name:"clearItems",return:{type:{text:"Promise<void>"}},parameters:[{name:"items",type:{text:"Element[]"}}]},{kind:"function",name:"focusFirstSwitchItem",return:{type:{text:"void"}},parameters:[{name:"items",type:{text:"Element[]"}}]},{kind:"function",name:"getInitialValueState",return:{type:{text:"{ validity: ValidityState, value: string | null }"}},parameters:[{name:"items",type:{text:"Element[]"}},{name:"isRequired",type:{text:"boolean"}}]},{kind:"function",name:"getValidationMessageFromChildren",return:{type:{text:"Promise<string>"}},parameters:[{name:"items",type:{text:"Element[]"}}]},{kind:"function",name:"getValidityStateFromChildren",return:{type:{text:"Promise<ValidityState>"}},parameters:[{name:"items",type:{text:"Element[]"}}]},{kind:"function",name:"getWillValidateFromChildren",return:{type:{text:"Promise<boolean>"}},parameters:[{name:"items",type:{text:"Element[]"}}]},{kind:"function",name:"propagateInputId",return:{type:{text:"void"}},parameters:[{name:"name",type:{text:"string"}},{name:"items",type:{text:"Element[]"}}]},{kind:"function",name:"propagateIsDisabled",return:{type:{text:"void"}},parameters:[{name:"value",type:{text:"boolean"}},{name:"items",type:{text:"Element[]"}}]},{kind:"function",name:"propagateIsRequired",return:{type:{text:"void"}},parameters:[{name:"value",type:{text:"boolean"}},{name:"items",type:{text:"Element[]"}}]},{kind:"function",name:"propagateName",return:{type:{text:"void"}},parameters:[{name:"name",type:{text:"string"}},{name:"items",type:{text:"Element[]"}}]},{kind:"function",name:"reportValidityFromOneChild",return:{type:{text:"Promise<boolean | undefined>"}},parameters:[{name:"items",type:{text:"Element[]"}}]},{kind:"function",name:"resetItems",return:{type:{text:"Promise<string | null>"}},parameters:[{name:"items",type:{text:"Element[]"}}]}],exports:[{kind:"js",name:"clearItems",declaration:{name:"clearItems",module:"src/controller/ods-switch.ts"}},{kind:"js",name:"focusFirstSwitchItem",declaration:{name:"focusFirstSwitchItem",module:"src/controller/ods-switch.ts"}},{kind:"js",name:"getInitialValueState",declaration:{name:"getInitialValueState",module:"src/controller/ods-switch.ts"}},{kind:"js",name:"getValidationMessageFromChildren",declaration:{name:"getValidationMessageFromChildren",module:"src/controller/ods-switch.ts"}},{kind:"js",name:"getValidityStateFromChildren",declaration:{name:"getValidityStateFromChildren",module:"src/controller/ods-switch.ts"}},{kind:"js",name:"getWillValidateFromChildren",declaration:{name:"getWillValidateFromChildren",module:"src/controller/ods-switch.ts"}},{kind:"js",name:"propagateInputId",declaration:{name:"propagateInputId",module:"src/controller/ods-switch.ts"}},{kind:"js",name:"propagateIsDisabled",declaration:{name:"propagateIsDisabled",module:"src/controller/ods-switch.ts"}},{kind:"js",name:"propagateIsRequired",declaration:{name:"propagateIsRequired",module:"src/controller/ods-switch.ts"}},{kind:"js",name:"propagateName",declaration:{name:"propagateName",module:"src/controller/ods-switch.ts"}},{kind:"js",name:"reportValidityFromOneChild",declaration:{name:"reportValidityFromOneChild",module:"src/controller/ods-switch.ts"}},{kind:"js",name:"resetItems",declaration:{name:"resetItems",module:"src/controller/ods-switch.ts"}}]},{kind:"javascript-module",path:"src/constant/switch-size.ts",declarations:[{kind:"variable",name:"ODS_SWITCH_SIZES"}],exports:[{kind:"js",name:"ODS_SWITCH_SIZE",declaration:{name:"ODS_SWITCH_SIZE",module:"src/constant/switch-size.ts"}},{kind:"js",name:"ODS_SWITCH_SIZES",declaration:{name:"ODS_SWITCH_SIZES",module:"src/constant/switch-size.ts"}},{kind:"js",name:"OdsSwitchSize",declaration:{name:"OdsSwitchSize",module:"src/constant/switch-size.ts"}}]},{kind:"javascript-module",path:"src/interfaces/events.ts",declarations:[],exports:[{kind:"js",name:"OdsSwitchChangeEvent",declaration:{name:"OdsSwitchChangeEvent",module:"src/interfaces/events.ts"}},{kind:"js",name:"OdsSwitchChangeEventDetail",declaration:{name:"OdsSwitchChangeEventDetail",module:"src/interfaces/events.ts"}}]},{kind:"javascript-module",path:"src/components/ods-switch/ods-switch.tsx",declarations:[{kind:"class",description:"",name:"OdsSwitch",members:[{kind:"field",name:"el",type:{text:"HTMLElement"}},{kind:"field",name:"isInvalid",type:{text:"boolean | undefined"},privacy:"private"},{kind:"field",name:"hasError",type:{text:"boolean"},privacy:"public",default:"false"},{kind:"field",name:"isDisabled",type:{text:"boolean"},privacy:"public",default:"false"},{kind:"field",name:"isRequired",type:{text:"boolean"},privacy:"public",default:"false"},{kind:"field",name:"name",type:{text:"string"},privacy:"public"},{kind:"field",name:"size",type:{text:"OdsSwitchSize"},privacy:"public",default:"md"},{kind:"method",name:"onOdsSwitchItemBlur",return:{type:{text:"void"}},parameters:[{name:"event",type:{text:"CustomEvent<void>"}}]},{kind:"method",name:"onOdsSwitchItemChange",return:{type:{text:"void"}},parameters:[{name:"event",type:{text:"CustomEvent<OdsSwitchChangeEventDetail>"}}]},{kind:"method",name:"onOdsSwitchItemFocus",return:{type:{text:"void"}},parameters:[{name:"event",type:{text:"CustomEvent<void>"}}]},{kind:"method",name:"onOdsInvalid",return:{type:{text:"void"}},parameters:[{name:"event",type:{text:"CustomEvent<{ isInvalid: boolean }>"}}]},{kind:"method",name:"checkValidity",privacy:"public",return:{type:{text:"Promise<boolean>"}}},{kind:"method",name:"clear",privacy:"public",return:{type:{text:"Promise<void>"}}},{kind:"method",name:"getValidationMessage",privacy:"public",return:{type:{text:"Promise<string>"}}},{kind:"method",name:"getValidity",privacy:"public",return:{type:{text:"Promise<ValidityState>"}}},{kind:"method",name:"reportValidity",privacy:"public",return:{type:{text:"Promise<boolean | undefined>"}}},{kind:"method",name:"reset",privacy:"public",return:{type:{text:"Promise<void>"}}},{kind:"method",name:"willValidate",privacy:"public",return:{type:{text:"Promise<boolean>"}}},{kind:"method",name:"onIsDisabledChange",return:{type:{text:"void"}},parameters:[{name:"value",type:{text:"boolean"}}]},{kind:"method",name:"onIsInvalidChange",return:{type:{text:"void"}}},{kind:"method",name:"onIsRequiredChange",return:{type:{text:"void"}},parameters:[{name:"value",type:{text:"boolean"}}]},{kind:"method",name:"onNameChange",return:{type:{text:"void"}},parameters:[{name:"value",type:{text:"string"}}]},{kind:"method",name:"formResetCallback",return:{type:{text:"Promise<void>"}}},{kind:"method",name:"init",privacy:"private",return:{type:{text:"void"}}},{kind:"method",name:"render",return:{type:{text:"FunctionalComponent"}}}],attributes:[{name:"has-error",fieldName:"hasError",type:{text:"boolean"}},{name:"is-disabled",fieldName:"isDisabled",type:{text:"boolean"}},{name:"is-required",fieldName:"isRequired",type:{text:"boolean"}},{name:"name",fieldName:"name",type:{text:"string"}},{name:"size",fieldName:"size",type:{text:"OdsSwitchSize"}}],tagName:"ods-switch",events:[{name:"odsBlur",type:{text:"EventEmitter<CustomEvent<void>>"}},{name:"odsChange",type:{text:"EventEmitter<OdsSwitchChangeEventDetail>"}},{name:"odsClear",type:{text:"EventEmitter<void>"}},{name:"odsFocus",type:{text:"EventEmitter<CustomEvent<void>>"}},{name:"odsInvalid",type:{text:"EventEmitter<{ isInvalid: boolean }>"}},{name:"odsReset",type:{text:"EventEmitter<void>"}}],customElement:!0}],exports:[{kind:"js",name:"OdsSwitch",declaration:{name:"OdsSwitch",module:"src/components/ods-switch/ods-switch.tsx"}},{kind:"custom-element-definition",name:"ods-switch",declaration:{name:"OdsSwitch",module:"src/components/ods-switch/ods-switch.tsx"}}]},{kind:"javascript-module",path:"src/components/ods-switch-item/ods-switch-item.tsx",declarations:[{kind:"class",description:"",name:"OdsSwitchItem",members:[{kind:"field",name:"inputEl",type:{text:"HTMLInputElement | undefined"},privacy:"private"},{kind:"field",name:"labelEl",type:{text:"HTMLLabelElement | undefined"},privacy:"private"},{kind:"field",name:"observer",type:{text:"MutationObserver | undefined"},privacy:"private"},{kind:"field",name:"inputId",type:{text:"string"},privacy:"private",default:"''"},{kind:"field",name:"isDisabled",type:{text:"boolean"},privacy:"private",default:"false"},{kind:"field",name:"isRequired",type:{text:"boolean"},privacy:"private",default:"false"},{kind:"field",name:"el",type:{text:"HTMLElement"}},{kind:"field",name:"ariaLabel",type:{text:"HTMLElement['ariaLabel']"},privacy:"public",default:"null"},{kind:"field",name:"ariaLabelledby",type:{text:"string | undefined"},privacy:"public"},{kind:"field",name:"isChecked",type:{text:"boolean"},privacy:"public",default:"false"},{kind:"field",name:"value",type:{text:"string | null"},privacy:"public",default:"null"},{kind:"method",name:"clear",return:{type:{text:"Promise<void>"}}},{kind:"method",name:"focusItem",return:{type:{text:"Promise<void>"}}},{kind:"method",name:"getValidationMessage",return:{type:{text:"Promise<string | undefined>"}}},{kind:"method",name:"getValidity",return:{type:{text:"Promise<ValidityState | undefined>"}}},{kind:"method",name:"reportValidity",return:{type:{text:"Promise<boolean | undefined>"}}},{kind:"method",name:"reset",return:{type:{text:"Promise<string | null>"}}},{kind:"method",name:"willValidate",return:{type:{text:"Promise<boolean | undefined>"}}},{kind:"method",name:"handleKeyDown",privacy:"private",return:{type:{text:"void"}},parameters:[{name:"event",type:{text:"KeyboardEvent"}}]},{kind:"method",name:"handleKeyUp",privacy:"private",return:{type:{text:"void"}},parameters:[{name:"event",type:{text:"KeyboardEvent"}}]},{kind:"method",name:"onBlur",privacy:"private",return:{type:{text:"void"}}},{kind:"method",name:"onInput",privacy:"private",return:{type:{text:"void"}},parameters:[{name:"event",type:{text:"Event"}}]},{kind:"method",name:"onInvalidEvent",privacy:"private",return:{type:{text:"void"}},parameters:[{name:"event",type:{text:"Event"}}]},{kind:"method",name:"render",return:{type:{text:"FunctionalComponent"}}}],attributes:[{name:"aria-label",fieldName:"ariaLabel",type:{text:"HTMLElement['ariaLabel']"}},{name:"aria-labelledby",fieldName:"ariaLabelledby",type:{text:"string"}},{name:"is-checked",fieldName:"isChecked",type:{text:"boolean"}},{name:"value",fieldName:"value",type:{text:"string | null"}}],tagName:"ods-switch-item",events:[],customElement:!0}],exports:[{kind:"js",name:"OdsSwitchItem",declaration:{name:"OdsSwitchItem",module:"src/components/ods-switch-item/ods-switch-item.tsx"}},{kind:"custom-element-definition",name:"ods-switch-item",declaration:{name:"OdsSwitchItem",module:"src/components/ods-switch-item/ods-switch-item.tsx"}}]}],g={ODS_SWITCH_SIZE:{md:{type:"string",value:"md"},sm:{type:"string",value:"sm"}}},E={schemaVersion:f,readme:w,modules:b,enumPlugin:g};function o(i){return e.jsxs(e.Fragment,{children:[e.jsx(s,{of:r,name:"Technical information"}),`
`,e.jsx(d,{of:r}),`
`,e.jsx(t,{label:"Overview",level:2}),`
`,e.jsx(n,{of:c,sourceState:"none"}),`
`,e.jsx(l,{data:E}),`
`,e.jsx(t,{label:"Examples",level:2}),`
`,e.jsx(t,{label:"Default",level:3}),`
`,e.jsx(n,{of:u,sourceState:"shown"}),`
`,e.jsx(t,{label:"Checked",level:3}),`
`,e.jsx(n,{of:h,sourceState:"shown"}),`
`,e.jsx(t,{label:"Disabled",level:3}),`
`,e.jsx(n,{of:y,sourceState:"shown"}),`
`,e.jsx(t,{label:"Error",level:3}),`
`,e.jsx(n,{of:v,sourceState:"shown"}),`
`,e.jsx(t,{label:"Size",level:3}),`
`,e.jsx(n,{of:x,sourceState:"shown"}),`
`,e.jsx(t,{label:"Validity State",level:3}),`
`,e.jsx(n,{of:k,source:{transform:p},sourceState:"shown"}),`
`,e.jsx(t,{label:"Included in a Form Field",level:3}),`
`,e.jsx(n,{of:S,sourceState:"shown"})]})}function Re(i={}){const{wrapper:a}={...m(),...i.components};return a?e.jsx(a,{...i,children:e.jsx(o,{...i})}):o()}export{Re as default};
