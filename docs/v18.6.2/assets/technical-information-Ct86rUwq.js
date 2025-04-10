import{j as t,M as l,C as n}from"./index-F50bSMiK.js";import{u as s}from"./index-Cdh-ijYL.js";import{B as p}from"./Banner-j-kY9u4f.js";import{H as i}from"./Heading-Bsa3zsN6.js";import{T as m}from"./TechnicalSpecification-DQOlB_AR.js";import{T as a,O as d,C as c,D as O,A as u,F as y}from"./tooltip.stories-Cer849J-.js";import"./iframe-BE5s5kjT.js";import"../sb-preview/runtime.js";import"./index-8AfNH5n5.js";import"./index-D-8MO0q_.js";import"./index-DrFu-skq.js";import"./index-DZK8KyWG.js";import"./index-BWmQNpQ0.js";import"./ods-accordion2-vvZNAi9U.js";import"./index-DAZhnxgO.js";import"./icon-name-C6aMXAXT.js";import"./ods-icon2-DRPHarK1.js";import"./ods-badge-CjbpLGl8.js";import"./ods-breadcrumb-item2-C_Ah5FZN.js";import"./ods-link2-CtVFUlMR.js";import"./ods-button2-dPaqs0uX.js";import"./ods-spinner2-CPyWCS2f.js";import"./ods-card-DRGl4_I-.js";import"./ods-checkbox2-B2XbvOPY.js";import"./dom-8hoR-urs.js";import"./ods-clipboard2-Baifk8Bb.js";import"./ods-input2-CtkWk4I-.js";import"./type-B5zI8QxY.js";import"./ods-tooltip2-CW12aP9b.js";import"./overlay-KZpfSxWH.js";import"./ods-code2-D4zmvcg_.js";import"./ods-combobox2-CcOfmmHm.js";import"./_commonjsHelpers-CLD5em3H.js";import"./debounce-DRefBDpX.js";import"./ods-tag2-Bb2BMy9d.js";import"./ods-datepicker2-FisogS88.js";import"./locale-NOa-Gxlr.js";import"./ods-divider-CjaMxjcH.js";import"./ods-divider2-R3gNNk4H.js";import"./ods-drawer2-BQqpNIWL.js";import"./ods-file-upload2-teF1qz6H.js";import"./ods-progress-bar2-zR9YGHZb.js";import"./ods-form-field2-BSNGPVxz.js";import"./ods-icon-DTp5PnPI.js";import"./ods-input-COMKDAZi.js";import"./ods-link-BCeMi6SV.js";import"./ods-medium2-BnayTic8.js";import"./ods-message-BxLNJd0H.js";import"./ods-modal2-BQO4yvXA.js";import"./ods-pagination2-BkxTbhCC.js";import"./ods-select2-C8koqTnw.js";import"./ods-password2-aWfdhtsQ.js";import"./ods-phone-number2-Cl3w5q8v.js";import"./ods-popover2-D09FwiGN.js";import"./ods-quantity2-BgFzW1u9.js";import"./ods-radio2-C2vNRNiP.js";import"./ods-range2-l-uevN51.js";import"./ods-skeleton2-B7sDasgF.js";import"./ods-switch-item2-ebcV2EUF.js";import"./ods-tabs2-BNbhFfmR.js";import"./ods-table2-oe37kiP3.js";import"./ods-text-BO_pN8NQ.js";import"./ods-textarea2-BDOVTqwb.js";import"./ods-timepicker2-DSjpZYdI.js";import"./ods-toggle2-Bg02aln1.js";import"./StorybookLink-DQUuZU-R.js";import"./controls-DX883vx3.js";import"./unsafe-html-VJzuFJfF.js";const T="1.0.0",v="",S=[{kind:"javascript-module",path:"src/globals.ts",declarations:[],exports:[]},{kind:"javascript-module",path:"src/index.ts",declarations:[],exports:[{kind:"js",name:"OdsTooltip",declaration:{name:"OdsTooltip",module:"./components/ods-tooltip/ods-tooltip"}},{kind:"js",name:"OdsTooltipPosition",declaration:{name:"OdsTooltipPosition",module:"./constants/tooltip-position"}},{kind:"js",name:"ODS_TOOLTIP_POSITION",declaration:{name:"ODS_TOOLTIP_POSITION",module:"./constants/tooltip-position"}},{kind:"js",name:"ODS_TOOLTIP_POSITIONS",declaration:{name:"ODS_TOOLTIP_POSITIONS",module:"./constants/tooltip-position"}},{kind:"js",name:"OdsTooltipStrategy",declaration:{name:"OdsTooltipStrategy",module:"./constants/tooltip-strategy"}},{kind:"js",name:"ODS_TOOLTIP_STRATEGIES",declaration:{name:"ODS_TOOLTIP_STRATEGIES",module:"./constants/tooltip-strategy"}},{kind:"js",name:"ODS_TOOLTIP_STRATEGY",declaration:{name:"ODS_TOOLTIP_STRATEGY",module:"./constants/tooltip-strategy"}}]},{kind:"javascript-module",path:"src/constants/tooltip-position.ts",declarations:[],exports:[{kind:"js",name:"ODS_TOOLTIP_POSITION",declaration:{name:"ODS_OVERLAY_POSITION",module:"src/constants/tooltip-position.ts"}},{kind:"js",name:"ODS_TOOLTIP_POSITIONS",declaration:{name:"ODS_OVERLAY_POSITIONS",module:"src/constants/tooltip-position.ts"}},{kind:"js",name:"OdsTooltipPosition",declaration:{name:"OdsOverlayPosition",module:"src/constants/tooltip-position.ts"}}]},{kind:"javascript-module",path:"src/constants/tooltip-strategy.ts",declarations:[],exports:[{kind:"js",name:"ODS_TOOLTIP_STRATEGIES",declaration:{name:"ODS_OVERLAY_STRATEGIES",module:"src/constants/tooltip-strategy.ts"}},{kind:"js",name:"ODS_TOOLTIP_STRATEGY",declaration:{name:"ODS_OVERLAY_STRATEGY",module:"src/constants/tooltip-strategy.ts"}},{kind:"js",name:"OdsTooltipStrategy",declaration:{name:"OdsOverlayStrategy",module:"src/constants/tooltip-strategy.ts"}}]},{kind:"javascript-module",path:"src/components/ods-tooltip/ods-tooltip.tsx",declarations:[{kind:"class",description:"",name:"OdsTooltip",members:[{kind:"field",name:"arrowElement",type:{text:"HTMLElement | undefined"},privacy:"private"},{kind:"field",name:"cleanUpCallback",type:{text:"() => void"},privacy:"private"},{kind:"field",name:"isTooltipHover",type:{text:"boolean"},privacy:"private",default:"false"},{kind:"field",name:"timer",type:{text:"ReturnType<typeof setTimeout> | undefined"},privacy:"private"},{kind:"field",name:"triggerElement",type:{text:"HTMLElement | null | undefined"},privacy:"private"},{kind:"field",name:"boundHide",privacy:"private"},{kind:"field",name:"boundHideOnElLeave",privacy:"private"},{kind:"field",name:"boundHideByTooltipHover",privacy:"private"},{kind:"field",name:"boundShow",privacy:"private"},{kind:"field",name:"boundShowOnElEnter",privacy:"private"},{kind:"field",name:"el",type:{text:"HTMLElement"}},{kind:"field",name:"position",type:{text:"OdsTooltipPosition"},privacy:"public",default:"top"},{kind:"field",name:"shadowDomTriggerId",type:{text:"string | undefined"},privacy:"public"},{kind:"field",name:"strategy",type:{text:"OdsTooltipStrategy"},privacy:"public",default:"absolute"},{kind:"field",name:"triggerId",type:{text:"string"},privacy:"public"},{kind:"field",name:"withArrow",type:{text:"boolean"},privacy:"public",default:"false"},{kind:"method",name:"hide",privacy:"public",return:{type:{text:"Promise<void>"}}},{kind:"method",name:"show",privacy:"public",return:{type:{text:"Promise<void>"}}},{kind:"method",name:"hideByTooltipHover",privacy:"private",return:{type:{text:"ReturnType<typeof setTimeout>"}}},{kind:"method",name:"hideOnElLeave",privacy:"private",return:{type:{text:"void"}}},{kind:"method",name:"showOnElEnter",privacy:"private",return:{type:{text:"Promise<void>"}}},{kind:"method",name:"render",return:{type:{text:"FunctionalComponent"}}}],attributes:[{name:"position",fieldName:"position",type:{text:"OdsTooltipPosition"}},{name:"shadow-dom-trigger-id",fieldName:"shadowDomTriggerId",type:{text:"string"}},{name:"strategy",fieldName:"strategy",type:{text:"OdsTooltipStrategy"}},{name:"trigger-id",fieldName:"triggerId",type:{text:"string"}},{name:"with-arrow",fieldName:"withArrow",type:{text:"boolean"}}],tagName:"ods-tooltip",events:[{name:"odsHide",type:{text:"EventEmitter<void>"}},{name:"odsShow",type:{text:"EventEmitter<void>"}}],customElement:!0}],exports:[{kind:"js",name:"OdsTooltip",declaration:{name:"OdsTooltip",module:"src/components/ods-tooltip/ods-tooltip.tsx"}},{kind:"custom-element-definition",name:"ods-tooltip",declaration:{name:"OdsTooltip",module:"src/components/ods-tooltip/ods-tooltip.tsx"}}]},{kind:"javascript-module",path:"../../utils/overlay.ts",declarations:[{kind:"variable",name:"ODS_OVERLAY_POSITIONS"},{kind:"variable",name:"ODS_OVERLAY_STRATEGIES"},{kind:"function",name:"findTriggerElement",return:{type:{text:"HTMLElement | undefined"}},parameters:[{name:"triggerId",type:{text:"string"}},{name:"shadowDomTriggerId",optional:!0,type:{text:"string"}}]},{kind:"function",name:"getElementPosition",return:{type:{text:"Promise<ComputePositionReturn>"}},parameters:[{name:"position",type:{text:"OdsOverlayPosition"}},{name:"domElement",type:{text:"DomElement"}},{name:"option",optional:!0,type:{text:"MiddlewareOption"}}]},{kind:"function",name:"hideOverlay",return:{type:{text:"void"}},parameters:[{name:"popperElement",type:{text:"HTMLElement"}},{name:"cleanUpCallback",optional:!0,type:{text:"() => void"}}]},{kind:"function",name:"showOverlay",return:{type:{text:"() => void"}},parameters:[{name:"position",type:{text:"OdsOverlayPosition"}},{name:"domElement",type:{text:"DomElement"}},{name:"option",optional:!0,type:{text:"MiddlewareOption"}}]}],exports:[{kind:"js",name:"findTriggerElement",declaration:{name:"findTriggerElement",module:"../../utils/overlay.ts"}},{kind:"js",name:"getElementPosition",declaration:{name:"getElementPosition",module:"../../utils/overlay.ts"}},{kind:"js",name:"hideOverlay",declaration:{name:"hideOverlay",module:"../../utils/overlay.ts"}},{kind:"js",name:"ODS_OVERLAY_POSITION",declaration:{name:"ODS_OVERLAY_POSITION",module:"../../utils/overlay.ts"}},{kind:"js",name:"ODS_OVERLAY_POSITIONS",declaration:{name:"ODS_OVERLAY_POSITIONS",module:"../../utils/overlay.ts"}},{kind:"js",name:"OdsOverlayPosition",declaration:{name:"OdsOverlayPosition",module:"../../utils/overlay.ts"}},{kind:"js",name:"ODS_OVERLAY_STRATEGIES",declaration:{name:"ODS_OVERLAY_STRATEGIES",module:"../../utils/overlay.ts"}},{kind:"js",name:"ODS_OVERLAY_STRATEGY",declaration:{name:"ODS_OVERLAY_STRATEGY",module:"../../utils/overlay.ts"}},{kind:"js",name:"OdsOverlayStrategy",declaration:{name:"OdsOverlayStrategy",module:"../../utils/overlay.ts"}},{kind:"js",name:"showOverlay",declaration:{name:"showOverlay",module:"../../utils/overlay.ts"}}]}],g={ODS_TOOLTIP_POSITION:{bottom:{type:"string",value:"bottom"},bottomEnd:{type:"string",value:"bottom-end"},bottomStart:{type:"string",value:"bottom-start"},left:{type:"string",value:"left"},leftEnd:{type:"string",value:"left-end"},leftStart:{type:"string",value:"left-start"},right:{type:"string",value:"right"},rightEnd:{type:"string",value:"right-end"},rightStart:{type:"string",value:"right-start"},top:{type:"string",value:"top"},topEnd:{type:"string",value:"top-end"},topStart:{type:"string",value:"top-start"}},ODS_TOOLTIP_STRATEGY:{absolute:{type:"string",value:"absolute"},fixed:{type:"string",value:"fixed"}}},x={schemaVersion:T,readme:v,modules:S,enumPlugin:g};function r(o){const e={code:"code",p:"p",...s(),...o.components};return t.jsxs(t.Fragment,{children:[t.jsx(l,{of:a,name:"Technical information"}),`
`,t.jsx(p,{of:a}),`
`,t.jsx(i,{label:"Overview",level:2}),`
`,t.jsx(n,{of:d,sourceState:"none"}),`
`,t.jsx(m,{data:x}),`
`,t.jsx(i,{label:"Style customization",level:2}),`
`,t.jsx(e.p,{children:"You can update the tooltip content by directly updating the slot element."}),`
`,t.jsx(e.p,{children:"Custom CSS:"}),`
`,t.jsx(n,{of:c,sourceState:"shown"}),`
`,t.jsx(i,{label:"Examples",level:2}),`
`,t.jsx(i,{label:"Default",level:3}),`
`,t.jsx(n,{of:O,sourceState:"shown"}),`
`,t.jsx(i,{label:"With an arrow tip",level:3}),`
`,t.jsx(n,{of:u,sourceState:"shown"}),`
`,t.jsx(i,{label:"In an ods-modal",level:3}),`
`,t.jsx(e.p,{children:"If the component container is defining a position context, the tooltip may not appear at the right place, or partially clipped."}),`
`,t.jsxs(e.p,{children:["In that case, you can change the component ",t.jsx(e.code,{children:"strategy"})," prop to ",t.jsx(e.code,{children:"fixed"}),`, this way it will position itself based on the
nearest containing block (usually the viewport).`]}),`
`,t.jsx(n,{of:y,sourceState:"shown"})]})}function Yt(o={}){const{wrapper:e}={...s(),...o.components};return e?t.jsx(e,{...o,children:t.jsx(r,{...o})}):r(o)}export{Yt as default};
