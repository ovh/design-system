import{j as t}from"./jsx-runtime-Cz3huCOb.js";import{u as r}from"./index-BRdWgBGF.js";import{M as l,C as i}from"./index-C7ZQW9Xo.js";import{B as d}from"./Banner-4suhesey.js";import{H as n}from"./Heading-BWgLZzFp.js";import{T as m}from"./TechnicalSpecification-BRUZjjyt.js";import{T as a,O as p,C as c,D as O,A as u,F as y}from"./tooltip.stories-vovEEijZ.js";import"./iframe-O-MMI8BM.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-B_J8iUie.js";import"./index-DX_4BEHg.js";import"./index-DrFu-skq.js";import"./index-D19O3a7h.js";import"./index-BYszAjkJ.js";import"./lit-html-D-ZEPr28.js";import"./unsafe-html-HR6uCwaW.js";import"./controls-D697y8_r.js";const T="1.0.0",S="",v=[{kind:"javascript-module",path:"src/globals.ts",declarations:[],exports:[]},{kind:"javascript-module",path:"src/index.ts",declarations:[],exports:[{kind:"js",name:"OdsTooltip",declaration:{name:"OdsTooltip",module:"./components/ods-tooltip/ods-tooltip"}},{kind:"js",name:"OdsTooltipPosition",declaration:{name:"OdsTooltipPosition",module:"./constants/tooltip-position"}},{kind:"js",name:"ODS_TOOLTIP_POSITION",declaration:{name:"ODS_TOOLTIP_POSITION",module:"./constants/tooltip-position"}},{kind:"js",name:"ODS_TOOLTIP_POSITIONS",declaration:{name:"ODS_TOOLTIP_POSITIONS",module:"./constants/tooltip-position"}},{kind:"js",name:"OdsTooltipStrategy",declaration:{name:"OdsTooltipStrategy",module:"./constants/tooltip-strategy"}},{kind:"js",name:"ODS_TOOLTIP_STRATEGIES",declaration:{name:"ODS_TOOLTIP_STRATEGIES",module:"./constants/tooltip-strategy"}},{kind:"js",name:"ODS_TOOLTIP_STRATEGY",declaration:{name:"ODS_TOOLTIP_STRATEGY",module:"./constants/tooltip-strategy"}}]},{kind:"javascript-module",path:"src/constants/tooltip-position.ts",declarations:[],exports:[{kind:"js",name:"ODS_TOOLTIP_POSITION",declaration:{name:"ODS_OVERLAY_POSITION",module:"src/constants/tooltip-position.ts"}},{kind:"js",name:"ODS_TOOLTIP_POSITIONS",declaration:{name:"ODS_OVERLAY_POSITIONS",module:"src/constants/tooltip-position.ts"}},{kind:"js",name:"OdsTooltipPosition",declaration:{name:"OdsOverlayPosition",module:"src/constants/tooltip-position.ts"}}]},{kind:"javascript-module",path:"src/constants/tooltip-strategy.ts",declarations:[],exports:[{kind:"js",name:"ODS_TOOLTIP_STRATEGIES",declaration:{name:"ODS_OVERLAY_STRATEGIES",module:"src/constants/tooltip-strategy.ts"}},{kind:"js",name:"ODS_TOOLTIP_STRATEGY",declaration:{name:"ODS_OVERLAY_STRATEGY",module:"src/constants/tooltip-strategy.ts"}},{kind:"js",name:"OdsTooltipStrategy",declaration:{name:"OdsOverlayStrategy",module:"src/constants/tooltip-strategy.ts"}}]},{kind:"javascript-module",path:"src/components/ods-tooltip/ods-tooltip.tsx",declarations:[{kind:"class",description:"",name:"OdsTooltip",members:[{kind:"field",name:"arrowElement",type:{text:"HTMLElement | undefined"},privacy:"private"},{kind:"field",name:"triggerElement",type:{text:"HTMLElement | null | undefined"},privacy:"private"},{kind:"field",name:"cleanUpCallback",type:{text:"() => void"},privacy:"private"},{kind:"field",name:"boundHide",privacy:"private"},{kind:"field",name:"boundShow",privacy:"private"},{kind:"field",name:"el",type:{text:"HTMLElement"}},{kind:"field",name:"position",type:{text:"OdsTooltipPosition"},privacy:"public",default:"top"},{kind:"field",name:"shadowDomTriggerId",type:{text:"string | undefined"},privacy:"public"},{kind:"field",name:"strategy",type:{text:"OdsTooltipStrategy"},privacy:"public",default:"absolute"},{kind:"field",name:"triggerId",type:{text:"string"},privacy:"public"},{kind:"field",name:"withArrow",type:{text:"boolean"},privacy:"public",default:"false"},{kind:"method",name:"hide",privacy:"public",return:{type:{text:"Promise<void>"}}},{kind:"method",name:"show",privacy:"public",return:{type:{text:"Promise<void>"}}},{kind:"method",name:"render",return:{type:{text:"FunctionalComponent"}}}],attributes:[{name:"position",fieldName:"position",type:{text:"OdsTooltipPosition"}},{name:"shadow-dom-trigger-id",fieldName:"shadowDomTriggerId",type:{text:"string"}},{name:"strategy",fieldName:"strategy",type:{text:"OdsTooltipStrategy"}},{name:"trigger-id",fieldName:"triggerId",type:{text:"string"}},{name:"with-arrow",fieldName:"withArrow",type:{text:"boolean"}}],tagName:"ods-tooltip",events:[{name:"odsHide",type:{text:"EventEmitter<void>"}},{name:"odsShow",type:{text:"EventEmitter<void>"}}],customElement:!0}],exports:[{kind:"js",name:"OdsTooltip",declaration:{name:"OdsTooltip",module:"src/components/ods-tooltip/ods-tooltip.tsx"}},{kind:"custom-element-definition",name:"ods-tooltip",declaration:{name:"OdsTooltip",module:"src/components/ods-tooltip/ods-tooltip.tsx"}}]},{kind:"javascript-module",path:"../../utils/overlay.ts",declarations:[{kind:"variable",name:"ODS_OVERLAY_POSITIONS"},{kind:"variable",name:"ODS_OVERLAY_STRATEGIES"},{kind:"function",name:"findTriggerElement",return:{type:{text:"HTMLElement | undefined"}},parameters:[{name:"triggerId",type:{text:"string"}},{name:"shadowDomTriggerId",optional:!0,type:{text:"string"}}]},{kind:"function",name:"getElementPosition",return:{type:{text:"Promise<ComputePositionReturn>"}},parameters:[{name:"position",type:{text:"OdsOverlayPosition"}},{name:"domElement",type:{text:"DomElement"}},{name:"option",optional:!0,type:{text:"MiddlewareOption"}}]},{kind:"function",name:"hideOverlay",return:{type:{text:"void"}},parameters:[{name:"popperElement",type:{text:"HTMLElement"}},{name:"cleanUpCallback",optional:!0,type:{text:"() => void"}}]},{kind:"function",name:"showOverlay",return:{type:{text:"() => void"}},parameters:[{name:"position",type:{text:"OdsOverlayPosition"}},{name:"domElement",type:{text:"DomElement"}},{name:"option",optional:!0,type:{text:"MiddlewareOption"}}]}],exports:[{kind:"js",name:"findTriggerElement",declaration:{name:"findTriggerElement",module:"../../utils/overlay.ts"}},{kind:"js",name:"getElementPosition",declaration:{name:"getElementPosition",module:"../../utils/overlay.ts"}},{kind:"js",name:"hideOverlay",declaration:{name:"hideOverlay",module:"../../utils/overlay.ts"}},{kind:"js",name:"ODS_OVERLAY_POSITION",declaration:{name:"ODS_OVERLAY_POSITION",module:"../../utils/overlay.ts"}},{kind:"js",name:"ODS_OVERLAY_POSITIONS",declaration:{name:"ODS_OVERLAY_POSITIONS",module:"../../utils/overlay.ts"}},{kind:"js",name:"OdsOverlayPosition",declaration:{name:"OdsOverlayPosition",module:"../../utils/overlay.ts"}},{kind:"js",name:"ODS_OVERLAY_STRATEGIES",declaration:{name:"ODS_OVERLAY_STRATEGIES",module:"../../utils/overlay.ts"}},{kind:"js",name:"ODS_OVERLAY_STRATEGY",declaration:{name:"ODS_OVERLAY_STRATEGY",module:"../../utils/overlay.ts"}},{kind:"js",name:"OdsOverlayStrategy",declaration:{name:"OdsOverlayStrategy",module:"../../utils/overlay.ts"}},{kind:"js",name:"showOverlay",declaration:{name:"showOverlay",module:"../../utils/overlay.ts"}}]}],g={ODS_TOOLTIP_POSITION:{bottom:{type:"string",value:"bottom"},bottomEnd:{type:"string",value:"bottom-end"},bottomStart:{type:"string",value:"bottom-start"},left:{type:"string",value:"left"},leftEnd:{type:"string",value:"left-end"},leftStart:{type:"string",value:"left-start"},right:{type:"string",value:"right"},rightEnd:{type:"string",value:"right-end"},rightStart:{type:"string",value:"right-start"},top:{type:"string",value:"top"},topEnd:{type:"string",value:"top-end"},topStart:{type:"string",value:"top-start"}},ODS_TOOLTIP_STRATEGY:{absolute:{type:"string",value:"absolute"},fixed:{type:"string",value:"fixed"}}},x={schemaVersion:T,readme:S,modules:v,enumPlugin:g};function s(o){const e={code:"code",p:"p",...r(),...o.components};return t.jsxs(t.Fragment,{children:[t.jsx(l,{of:a,name:"Technical information"}),`
`,t.jsx(d,{of:a}),`
`,t.jsx(n,{label:"Overview",level:2}),`
`,t.jsx(i,{of:p,sourceState:"none"}),`
`,t.jsx(m,{data:x}),`
`,t.jsx(n,{label:"Style customization",level:2}),`
`,t.jsx(e.p,{children:"You can update the tooltip content by directly updating the slot element."}),`
`,t.jsx(e.p,{children:"Custom CSS:"}),`
`,t.jsx(i,{of:c,sourceState:"shown"}),`
`,t.jsx(n,{label:"Examples",level:2}),`
`,t.jsx(n,{label:"Default",level:3}),`
`,t.jsx(i,{of:O,sourceState:"shown"}),`
`,t.jsx(n,{label:"With an arrow tip",level:3}),`
`,t.jsx(i,{of:u,sourceState:"shown"}),`
`,t.jsx(n,{label:"In an ods-modal",level:3}),`
`,t.jsx(e.p,{children:"If the component container is defining a position context, the tooltip may not appear at the right place, or partially clipped."}),`
`,t.jsxs(e.p,{children:["In that case, you can change the component ",t.jsx(e.code,{children:"strategy"})," prop to ",t.jsx(e.code,{children:"fixed"}),`, this way it will position itself based on the
nearest containing block (usually the viewport).`]}),`
`,t.jsx(i,{of:y,sourceState:"shown"})]})}function G(o={}){const{wrapper:e}={...r(),...o.components};return e?t.jsx(e,{...o,children:t.jsx(s,{...o})}):s(o)}export{G as default};
