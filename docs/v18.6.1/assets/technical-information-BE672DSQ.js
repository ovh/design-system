import{j as e,M as l,C as o}from"./index-DHunZMd9.js";import{u as p}from"./index-DogUcu-a.js";import{B as s}from"./Banner-CpSxcQq7.js";import{H as i}from"./Heading-BEqqWbQS.js";import{T as m}from"./TechnicalSpecification-BpsLLu69.js";import{C as n,O as d,a as c,D as u,b,M as x,c as y}from"./clipboard.stories-CFffELpY.js";import{a as f}from"./form-field.stories-oKbu4LL8.js";import"./iframe-CrJ6auLd.js";import"../sb-preview/runtime.js";import"./index-8AfNH5n5.js";import"./index-D-8MO0q_.js";import"./index-DrFu-skq.js";import"./index-DZK8KyWG.js";import"./index-CuZhG6y0.js";import"./ods-accordion2-vvZNAi9U.js";import"./index-DAZhnxgO.js";import"./icon-name-C6aMXAXT.js";import"./ods-icon2-DRPHarK1.js";import"./ods-badge-CjbpLGl8.js";import"./ods-breadcrumb-item2-C_Ah5FZN.js";import"./ods-link2-CtVFUlMR.js";import"./ods-button2-dPaqs0uX.js";import"./ods-spinner2-CPyWCS2f.js";import"./ods-card-DRGl4_I-.js";import"./ods-checkbox2-B2XbvOPY.js";import"./dom-8hoR-urs.js";import"./ods-clipboard2-Baifk8Bb.js";import"./ods-input2-CtkWk4I-.js";import"./type-B5zI8QxY.js";import"./ods-tooltip2-CW12aP9b.js";import"./overlay-KZpfSxWH.js";import"./ods-code2-D4zmvcg_.js";import"./ods-combobox2-D8tERt2s.js";import"./_commonjsHelpers-CLD5em3H.js";import"./debounce-DRefBDpX.js";import"./ods-tag2-Bb2BMy9d.js";import"./ods-datepicker2-FisogS88.js";import"./locale-NOa-Gxlr.js";import"./ods-divider-CjaMxjcH.js";import"./ods-divider2-R3gNNk4H.js";import"./ods-drawer2-BQqpNIWL.js";import"./ods-file-upload2-teF1qz6H.js";import"./ods-progress-bar2-zR9YGHZb.js";import"./ods-form-field2-BSNGPVxz.js";import"./ods-icon-DTp5PnPI.js";import"./ods-input-COMKDAZi.js";import"./ods-link-BCeMi6SV.js";import"./ods-medium2-BnayTic8.js";import"./ods-message-BxLNJd0H.js";import"./ods-modal2-BQO4yvXA.js";import"./ods-pagination2-BkxTbhCC.js";import"./ods-select2-C8koqTnw.js";import"./ods-password2-aWfdhtsQ.js";import"./ods-phone-number2-Cl3w5q8v.js";import"./ods-popover2-D09FwiGN.js";import"./ods-quantity2-BgFzW1u9.js";import"./ods-radio2-C2vNRNiP.js";import"./ods-range2-l-uevN51.js";import"./ods-skeleton2-B7sDasgF.js";import"./ods-switch-item2-ebcV2EUF.js";import"./ods-tabs2-BNbhFfmR.js";import"./ods-table2-oe37kiP3.js";import"./ods-text-BO_pN8NQ.js";import"./ods-textarea2-BDOVTqwb.js";import"./ods-timepicker2-DSjpZYdI.js";import"./ods-toggle2-Bg02aln1.js";import"./StorybookLink-BcFtDB-b.js";import"./if-defined-C8hFR4Kz.js";import"./lit-html-DJdeL0_A.js";import"./controls-DX883vx3.js";import"./unsafe-html-VJzuFJfF.js";const v="1.0.0",j="",k=[{kind:"javascript-module",path:"src/globals.ts",declarations:[],exports:[]},{kind:"javascript-module",path:"src/index.ts",declarations:[],exports:[{kind:"js",name:"OdsClipboard",declaration:{name:"OdsClipboard",module:"./components/ods-clipboard/ods-clipboard"}}]},{kind:"javascript-module",path:"src/components/ods-clipboard/ods-clipboard.tsx",declarations:[{kind:"class",description:"",name:"OdsClipboard",members:[{kind:"field",name:"copyButtonId",type:{text:"string"},privacy:"private",default:"'clipboard-copy'"},{kind:"field",name:"hostId",type:{text:"string"},privacy:"private",default:"''"},{kind:"field",name:"containerElement",type:{text:"HTMLDivElement | undefined"},privacy:"private"},{kind:"field",name:"internals",type:{text:"ElementInternals"}},{kind:"field",name:"el",type:{text:"HTMLElement"}},{kind:"field",name:"isCopyDone",type:{text:"boolean"},default:"false"},{kind:"field",name:"ariaLabel",type:{text:"HTMLElement['ariaLabel']"},privacy:"public",default:"null"},{kind:"field",name:"ariaLabelledby",type:{text:"string | undefined"},privacy:"public"},{kind:"field",name:"isDisabled",type:{text:"boolean"},privacy:"public",default:"false"},{kind:"field",name:"isMasked",type:{text:"boolean | undefined"},privacy:"public"},{kind:"field",name:"labelCopy",type:{text:"string"},privacy:"public",default:"'Copy to clipboard'"},{kind:"field",name:"labelCopySuccess",type:{text:"string"},privacy:"public",default:"'Copied!'"},{kind:"field",name:"name",type:{text:"string"},privacy:"public",default:"''"},{kind:"field",name:"value",type:{text:"string | undefined"},privacy:"public"},{kind:"method",name:"copy",privacy:"public",return:{type:{text:"Promise<void>"}}},{kind:"method",name:"onInputBlur",privacy:"private",return:{type:{text:"void"}}},{kind:"method",name:"onInputFocus",privacy:"private",return:{type:{text:"void"}}},{kind:"method",name:"onTooltipHide",privacy:"private",return:{type:{text:"void"}}},{kind:"method",name:"render",return:{type:{text:"FunctionalComponent"}}}],attributes:[{name:"aria-label",fieldName:"ariaLabel",type:{text:"HTMLElement['ariaLabel']"}},{name:"aria-labelledby",fieldName:"ariaLabelledby",type:{text:"string"}},{name:"is-disabled",fieldName:"isDisabled",type:{text:"boolean"}},{name:"is-masked",fieldName:"isMasked",type:{text:"boolean"}},{name:"label-copy",fieldName:"labelCopy",type:{text:"string"}},{name:"label-copy-success",fieldName:"labelCopySuccess",type:{text:"string"}},{name:"name",fieldName:"name",type:{text:"string"}},{name:"value",fieldName:"value",type:{text:"string"}}],tagName:"ods-clipboard",events:[{name:"odsCopy",type:{text:"EventEmitter<string>"}}],customElement:!0}],exports:[{kind:"js",name:"OdsClipboard",declaration:{name:"OdsClipboard",module:"src/components/ods-clipboard/ods-clipboard.tsx"}},{kind:"custom-element-definition",name:"ods-clipboard",declaration:{name:"OdsClipboard",module:"src/components/ods-clipboard/ods-clipboard.tsx"}}]}],h={},C={schemaVersion:v,readme:j,modules:k,enumPlugin:h};function r(a){const t={code:"code",p:"p",...p(),...a.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{of:n,name:"Technical information"}),`
`,e.jsx(s,{of:n}),`
`,e.jsx(i,{label:"Overview",level:2}),`
`,e.jsx(o,{of:d,sourceState:"none"}),`
`,e.jsx(m,{data:C}),`
`,e.jsx(i,{label:"Style customization",level:2}),`
`,e.jsxs(t.p,{children:["You can add your own style on the input element using the part ",e.jsx(t.code,{children:"input"}),"."]}),`
`,e.jsxs(t.p,{children:["You can add your own style on the tooltip element using the part ",e.jsx(t.code,{children:"tooltip"}),"."]}),`
`,e.jsx(t.p,{children:"Custom CSS :"}),`
`,e.jsx(o,{of:c,sourceState:"shown"}),`
`,e.jsx(i,{label:"Examples",level:2}),`
`,e.jsx(i,{label:"Default",level:3}),`
`,e.jsx(o,{of:u,sourceState:"shown"}),`
`,e.jsx(i,{label:"Disabled",level:3}),`
`,e.jsx(o,{of:b,sourceState:"shown"}),`
`,e.jsx(i,{label:"Masked",level:3}),`
`,e.jsx(o,{of:x,sourceState:"shown"}),`
`,e.jsx(i,{label:"Custom labels",level:3}),`
`,e.jsx(o,{of:y,sourceState:"shown"}),`
`,e.jsx(i,{label:"Included in a Form Field",level:3}),`
`,e.jsx(o,{of:f,sourceState:"shown"})]})}function Ye(a={}){const{wrapper:t}={...p(),...a.components};return t?e.jsx(t,{...a,children:e.jsx(r,{...a})}):r(a)}export{Ye as default};
