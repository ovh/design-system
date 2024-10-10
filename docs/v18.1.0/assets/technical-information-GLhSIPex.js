import{j as e}from"./jsx-runtime-vK1CujOl.js";import{u as p}from"./index-CB7mz5IJ.js";import{M as d,C as i,d as a}from"./index-Bd2Jnm8T.js";import{B as l}from"./Banner-D69sr9PT.js";import{H as o}from"./Heading-oJ6nNH90.js";import{T as m}from"./TechnicalSpecification-KFlqdhlY.js";import{P as r,O as u,C as c,D as v,A as y,M as O}from"./popover.stories--cgtyv0Q.js";import"./iframe-Lgv0C8F1.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-B_J8iUie.js";import"./index-DX_4BEHg.js";import"./index-DrFu-skq.js";import"./index-BNPjhb5w.js";import"./index-CONup0N6.js";import"./lit-html-D-ZEPr28.js";import"./unsafe-html-HR6uCwaW.js";import"./controls-DpsgTNdU.js";const g="1.0.0",x="",f=[{kind:"javascript-module",path:"src/globals.ts",declarations:[],exports:[]},{kind:"javascript-module",path:"src/index.ts",declarations:[],exports:[{kind:"js",name:"OdsPopover",declaration:{name:"OdsPopover",module:"./components/ods-popover/ods-popover"}},{kind:"js",name:"OdsPopoverPosition",declaration:{name:"OdsPopoverPosition",module:"./constants/popover-position"}},{kind:"js",name:"ODS_POPOVER_POSITION",declaration:{name:"ODS_POPOVER_POSITION",module:"./constants/popover-position"}},{kind:"js",name:"ODS_POPOVER_POSITIONS",declaration:{name:"ODS_POPOVER_POSITIONS",module:"./constants/popover-position"}}]},{kind:"javascript-module",path:"src/constants/popover-position.ts",declarations:[],exports:[{kind:"js",name:"ODS_POPOVER_POSITION",declaration:{name:"ODS_OVERLAY_POSITION",module:"src/constants/popover-position.ts"}},{kind:"js",name:"ODS_POPOVER_POSITIONS",declaration:{name:"ODS_OVERLAY_POSITIONS",module:"src/constants/popover-position.ts"}},{kind:"js",name:"OdsPopoverPosition",declaration:{name:"OdsOverlayPosition",module:"src/constants/popover-position.ts"}}]},{kind:"javascript-module",path:"src/components/ods-popover/ods-popover.tsx",declarations:[{kind:"class",description:"",name:"OdsPopover",members:[{kind:"field",name:"arrowElement",type:{text:"HTMLElement | undefined"},privacy:"private"},{kind:"field",name:"isOpen",type:{text:"boolean"},privacy:"private",default:"false"},{kind:"field",name:"triggerElement",type:{text:"HTMLElement | null | undefined"},privacy:"private"},{kind:"field",name:"boundOnKeydown",privacy:"private"},{kind:"field",name:"boundToggle",privacy:"private"},{kind:"field",name:"cleanUpCallback",type:{text:"() => void"},privacy:"private"},{kind:"field",name:"el",type:{text:"HTMLElement"}},{kind:"field",name:"position",type:{text:"OdsPopoverPosition"},privacy:"public",default:"top"},{kind:"field",name:"shadowDomTriggerId",type:{text:"string | undefined"},privacy:"public"},{kind:"field",name:"triggerId",type:{text:"string"},privacy:"public"},{kind:"field",name:"withArrow",type:{text:"boolean"},privacy:"public",default:"false"},{kind:"method",name:"onDocumentClick",return:{type:{text:"void"}},parameters:[{name:"event",type:{text:"MouseEvent"}}]},{kind:"method",name:"onDocumentFocusin",return:{type:{text:"void"}},parameters:[{name:"event",type:{text:"FocusEvent"}}]},{kind:"method",name:"onDocumentKeydown",return:{type:{text:"void"}},parameters:[{name:"event",type:{text:"KeyboardEvent"}}]},{kind:"method",name:"hide",privacy:"public",return:{type:{text:"Promise<void>"}}},{kind:"method",name:"show",privacy:"public",return:{type:{text:"Promise<void>"}}},{kind:"method",name:"onKeydown",privacy:"private",return:{type:{text:"void"}},parameters:[{name:"event",type:{text:"KeyboardEvent"}}]},{kind:"method",name:"toggle",privacy:"private",return:{type:{text:"void"}}},{kind:"method",name:"render",return:{type:{text:"FunctionalComponent"}}}],attributes:[{name:"position",fieldName:"position",type:{text:"OdsPopoverPosition"}},{name:"shadow-dom-trigger-id",fieldName:"shadowDomTriggerId",type:{text:"string"}},{name:"trigger-id",fieldName:"triggerId",type:{text:"string"}},{name:"with-arrow",fieldName:"withArrow",type:{text:"boolean"}}],tagName:"ods-popover",events:[{name:"odsHide",type:{text:"EventEmitter<void>"}},{name:"odsShow",type:{text:"EventEmitter<void>"}}],customElement:!0}],exports:[{kind:"js",name:"OdsPopover",declaration:{name:"OdsPopover",module:"src/components/ods-popover/ods-popover.tsx"}},{kind:"custom-element-definition",name:"ods-popover",declaration:{name:"OdsPopover",module:"src/components/ods-popover/ods-popover.tsx"}}]},{kind:"javascript-module",path:"../../utils/overlay.ts",declarations:[{kind:"variable",name:"ODS_OVERLAY_POSITIONS"},{kind:"function",name:"findTriggerElement",return:{type:{text:"HTMLElement | undefined"}},parameters:[{name:"triggerId",type:{text:"string"}},{name:"shadowDomTriggerId",optional:!0,type:{text:"string"}}]},{kind:"function",name:"getElementPosition",return:{type:{text:"Promise<ComputePositionReturn>"}},parameters:[{name:"position",type:{text:"OdsOverlayPosition"}},{name:"domElement",type:{text:"DomElement"}},{name:"option",optional:!0,type:{text:"MiddlewareOption"}}]},{kind:"function",name:"hideOverlay",return:{type:{text:"void"}},parameters:[{name:"popperElement",type:{text:"HTMLElement"}},{name:"cleanUpCallback",optional:!0,type:{text:"() => void"}}]},{kind:"function",name:"showOverlay",return:{type:{text:"() => void"}},parameters:[{name:"position",type:{text:"OdsOverlayPosition"}},{name:"domElement",type:{text:"DomElement"}},{name:"option",optional:!0,type:{text:"MiddlewareOption"}}]}],exports:[{kind:"js",name:"findTriggerElement",declaration:{name:"findTriggerElement",module:"../../utils/overlay.ts"}},{kind:"js",name:"getElementPosition",declaration:{name:"getElementPosition",module:"../../utils/overlay.ts"}},{kind:"js",name:"hideOverlay",declaration:{name:"hideOverlay",module:"../../utils/overlay.ts"}},{kind:"js",name:"ODS_OVERLAY_POSITION",declaration:{name:"ODS_OVERLAY_POSITION",module:"../../utils/overlay.ts"}},{kind:"js",name:"ODS_OVERLAY_POSITIONS",declaration:{name:"ODS_OVERLAY_POSITIONS",module:"../../utils/overlay.ts"}},{kind:"js",name:"OdsOverlayPosition",declaration:{name:"OdsOverlayPosition",module:"../../utils/overlay.ts"}},{kind:"js",name:"showOverlay",declaration:{name:"showOverlay",module:"../../utils/overlay.ts"}}]}],h={ODS_POPOVER_POSITION:{bottom:{type:"string",value:"bottom"},bottomEnd:{type:"string",value:"bottom-end"},bottomStart:{type:"string",value:"bottom-start"},left:{type:"string",value:"left"},leftEnd:{type:"string",value:"left-end"},leftStart:{type:"string",value:"left-start"},right:{type:"string",value:"right"},rightEnd:{type:"string",value:"right-end"},rightStart:{type:"string",value:"right-start"},top:{type:"string",value:"top"},topEnd:{type:"string",value:"top-end"},topStart:{type:"string",value:"top-start"}}},P={schemaVersion:g,readme:x,modules:f,enumPlugin:h};function s(n){const t={p:"p",...p(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(d,{of:r,name:"Technical information"}),`
`,e.jsx(l,{of:r}),`
`,e.jsx(o,{label:"Overview",level:2}),`
`,e.jsx(i,{of:u,sourceState:"none"}),`
`,e.jsx(m,{data:P}),`
`,e.jsx(o,{label:"Style customization",level:2}),`
`,e.jsx(t.p,{children:"You can update the popover content by directly updating the slot element."}),`
`,e.jsx(t.p,{children:"Custom CSS :"}),`
`,e.jsx(i,{of:c,sourceState:"shown"}),`
`,e.jsx(o,{label:"Positioning",level:2}),`
`,e.jsx(t.p,{children:`Unlike tooltip, popover can contain focusable elements.
Thus it needs to be positioned in the right spot in the DOM to follow the native focus workflow.`}),`
`,e.jsx(t.p,{children:"To ensure that, always declare your popover right after its trigger."}),`
`,e.jsx(t.p,{children:"Here is an example of a wrong positioning:"}),`
`,e.jsx(a,{code:`
<ods-button icon="ellipsis-vertical"
            id="popover-trigger"
            label="Menu">
</ods-button>

<ods-input name="some-input">
</ods-input>

<ods-popover trigger-id="popover-trigger">
  ...focusable popover content
</ods-popover>
`,dark:"true",language:"html"}),`
`,e.jsx(t.p,{children:"The input will get focused after the popover trigger button, causing the popover to close, thus making the element inside of it unreachable."}),`
`,e.jsx(t.p,{children:"The correct way would be:"}),`
`,e.jsx(a,{code:`
<ods-button icon="ellipsis-vertical"
            id="popover-trigger"
            label="Menu">
</ods-button>

<ods-popover trigger-id="popover-trigger">
  ...focusable popover content
</ods-popover>

<ods-input name="some-input">
</ods-input>
`,dark:"true",language:"html"}),`
`,e.jsx(o,{label:"Examples",level:2}),`
`,e.jsx(o,{label:"Default",level:3}),`
`,e.jsx(i,{of:v,sourceState:"shown"}),`
`,e.jsx(o,{label:"With an arrow tip",level:3}),`
`,e.jsx(i,{of:y,sourceState:"shown"}),`
`,e.jsx(o,{label:"Popover as Action Menu",level:3}),`
`,e.jsx(i,{of:O,sourceState:"shown"})]})}function Y(n={}){const{wrapper:t}={...p(),...n.components};return t?e.jsx(t,{...n,children:e.jsx(s,{...n})}):s(n)}export{Y as default};
