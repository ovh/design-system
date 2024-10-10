import{j as t}from"./jsx-runtime-vK1CujOl.js";import{u as r}from"./index-CB7mz5IJ.js";import{M as l,C as i}from"./index-Bd2Jnm8T.js";import{B as d}from"./Banner-D69sr9PT.js";import{H as n}from"./Heading-oJ6nNH90.js";import{T as m}from"./TechnicalSpecification-KFlqdhlY.js";import{T as a,O as p,C as c,D as u,A as O}from"./tooltip.stories-xXxuj8GG.js";import"./iframe-Lgv0C8F1.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-B_J8iUie.js";import"./index-DX_4BEHg.js";import"./index-DrFu-skq.js";import"./index-BNPjhb5w.js";import"./index-CONup0N6.js";import"./lit-html-D-ZEPr28.js";import"./unsafe-html-HR6uCwaW.js";import"./controls-DpsgTNdU.js";const y="1.0.0",v="",x=[{kind:"javascript-module",path:"src/globals.ts",declarations:[],exports:[]},{kind:"javascript-module",path:"src/index.ts",declarations:[],exports:[{kind:"js",name:"OdsTooltip",declaration:{name:"OdsTooltip",module:"./components/ods-tooltip/ods-tooltip"}},{kind:"js",name:"OdsTooltipPosition",declaration:{name:"OdsTooltipPosition",module:"./constants/tooltip-position"}},{kind:"js",name:"ODS_TOOLTIP_POSITION",declaration:{name:"ODS_TOOLTIP_POSITION",module:"./constants/tooltip-position"}},{kind:"js",name:"ODS_TOOLTIP_POSITIONS",declaration:{name:"ODS_TOOLTIP_POSITIONS",module:"./constants/tooltip-position"}}]},{kind:"javascript-module",path:"src/constants/tooltip-position.ts",declarations:[],exports:[{kind:"js",name:"ODS_TOOLTIP_POSITION",declaration:{name:"ODS_OVERLAY_POSITION",module:"src/constants/tooltip-position.ts"}},{kind:"js",name:"ODS_TOOLTIP_POSITIONS",declaration:{name:"ODS_OVERLAY_POSITIONS",module:"src/constants/tooltip-position.ts"}},{kind:"js",name:"OdsTooltipPosition",declaration:{name:"OdsOverlayPosition",module:"src/constants/tooltip-position.ts"}}]},{kind:"javascript-module",path:"src/components/ods-tooltip/ods-tooltip.tsx",declarations:[{kind:"class",description:"",name:"OdsTooltip",members:[{kind:"field",name:"arrowElement",type:{text:"HTMLElement | undefined"},privacy:"private"},{kind:"field",name:"triggerElement",type:{text:"HTMLElement | null | undefined"},privacy:"private"},{kind:"field",name:"cleanUpCallback",type:{text:"() => void"},privacy:"private"},{kind:"field",name:"boundHide",privacy:"private"},{kind:"field",name:"boundShow",privacy:"private"},{kind:"field",name:"el",type:{text:"HTMLElement"}},{kind:"field",name:"position",type:{text:"OdsTooltipPosition"},privacy:"public",default:"top"},{kind:"field",name:"shadowDomTriggerId",type:{text:"string | undefined"},privacy:"public"},{kind:"field",name:"triggerId",type:{text:"string"},privacy:"public"},{kind:"field",name:"withArrow",type:{text:"boolean"},privacy:"public",default:"false"},{kind:"method",name:"hide",privacy:"public",return:{type:{text:"Promise<void>"}}},{kind:"method",name:"show",privacy:"public",return:{type:{text:"Promise<void>"}}},{kind:"method",name:"render",return:{type:{text:"FunctionalComponent"}}}],attributes:[{name:"position",fieldName:"position",type:{text:"OdsTooltipPosition"}},{name:"shadow-dom-trigger-id",fieldName:"shadowDomTriggerId",type:{text:"string"}},{name:"trigger-id",fieldName:"triggerId",type:{text:"string"}},{name:"with-arrow",fieldName:"withArrow",type:{text:"boolean"}}],tagName:"ods-tooltip",events:[{name:"odsHide",type:{text:"EventEmitter<void>"}},{name:"odsShow",type:{text:"EventEmitter<void>"}}],customElement:!0}],exports:[{kind:"js",name:"OdsTooltip",declaration:{name:"OdsTooltip",module:"src/components/ods-tooltip/ods-tooltip.tsx"}},{kind:"custom-element-definition",name:"ods-tooltip",declaration:{name:"OdsTooltip",module:"src/components/ods-tooltip/ods-tooltip.tsx"}}]},{kind:"javascript-module",path:"../../utils/overlay.ts",declarations:[{kind:"variable",name:"ODS_OVERLAY_POSITIONS"},{kind:"function",name:"findTriggerElement",return:{type:{text:"HTMLElement | undefined"}},parameters:[{name:"triggerId",type:{text:"string"}},{name:"shadowDomTriggerId",optional:!0,type:{text:"string"}}]},{kind:"function",name:"getElementPosition",return:{type:{text:"Promise<ComputePositionReturn>"}},parameters:[{name:"position",type:{text:"OdsOverlayPosition"}},{name:"domElement",type:{text:"DomElement"}},{name:"option",optional:!0,type:{text:"MiddlewareOption"}}]},{kind:"function",name:"hideOverlay",return:{type:{text:"void"}},parameters:[{name:"popperElement",type:{text:"HTMLElement"}},{name:"cleanUpCallback",optional:!0,type:{text:"() => void"}}]},{kind:"function",name:"showOverlay",return:{type:{text:"() => void"}},parameters:[{name:"position",type:{text:"OdsOverlayPosition"}},{name:"domElement",type:{text:"DomElement"}},{name:"option",optional:!0,type:{text:"MiddlewareOption"}}]}],exports:[{kind:"js",name:"findTriggerElement",declaration:{name:"findTriggerElement",module:"../../utils/overlay.ts"}},{kind:"js",name:"getElementPosition",declaration:{name:"getElementPosition",module:"../../utils/overlay.ts"}},{kind:"js",name:"hideOverlay",declaration:{name:"hideOverlay",module:"../../utils/overlay.ts"}},{kind:"js",name:"ODS_OVERLAY_POSITION",declaration:{name:"ODS_OVERLAY_POSITION",module:"../../utils/overlay.ts"}},{kind:"js",name:"ODS_OVERLAY_POSITIONS",declaration:{name:"ODS_OVERLAY_POSITIONS",module:"../../utils/overlay.ts"}},{kind:"js",name:"OdsOverlayPosition",declaration:{name:"OdsOverlayPosition",module:"../../utils/overlay.ts"}},{kind:"js",name:"showOverlay",declaration:{name:"showOverlay",module:"../../utils/overlay.ts"}}]}],g={ODS_TOOLTIP_POSITION:{bottom:{type:"string",value:"bottom"},bottomEnd:{type:"string",value:"bottom-end"},bottomStart:{type:"string",value:"bottom-start"},left:{type:"string",value:"left"},leftEnd:{type:"string",value:"left-end"},leftStart:{type:"string",value:"left-start"},right:{type:"string",value:"right"},rightEnd:{type:"string",value:"right-end"},rightStart:{type:"string",value:"right-start"},top:{type:"string",value:"top"},topEnd:{type:"string",value:"top-end"},topStart:{type:"string",value:"top-start"}}},T={schemaVersion:y,readme:v,modules:x,enumPlugin:g};function s(e){const o={p:"p",...r(),...e.components};return t.jsxs(t.Fragment,{children:[t.jsx(l,{of:a,name:"Technical information"}),`
`,t.jsx(d,{of:a}),`
`,t.jsx(n,{label:"Overview",level:2}),`
`,t.jsx(i,{of:p,sourceState:"none"}),`
`,t.jsx(m,{data:T}),`
`,t.jsx(n,{label:"Style customization",level:2}),`
`,t.jsx(o.p,{children:"You can update the tooltip content by directly updating the slot element."}),`
`,t.jsx(o.p,{children:"Custom CSS:"}),`
`,t.jsx(i,{of:c,sourceState:"shown"}),`
`,t.jsx(n,{label:"Examples",level:2}),`
`,t.jsx(n,{label:"Default",level:3}),`
`,t.jsx(i,{of:u,sourceState:"shown"}),`
`,t.jsx(n,{label:"With an arrow tip",level:3}),`
`,t.jsx(i,{of:O,sourceState:"shown"})]})}function R(e={}){const{wrapper:o}={...r(),...e.components};return o?t.jsx(o,{...e,children:t.jsx(s,{...e})}):s(e)}export{R as default};
