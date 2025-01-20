import{j as e,M as p,C as a,d as i}from"./index-aSJOi-xY.js";import{u as d}from"./index-D_oymSD0.js";import{B as l}from"./Banner-DfBQCKAd.js";import{H as o}from"./Heading-fUBW5LMg.js";import{T as m}from"./TechnicalSpecification-DWqg9NQE.js";import{P as r,O as c,C as u,D as v,A as O,M as y,F as g}from"./popover.stories-CG0sETQ0.js";import"./iframe-Cjn0x15a.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-D-8MO0q_.js";import"./index-DX_4BEHg.js";import"./index-DrFu-skq.js";import"./index-B1WyGMUD.js";import"./index-DduIf26o.js";import"./StorybookLink-CdkDDCl2.js";import"./controls-DX883vx3.js";import"./unsafe-html-VJzuFJfF.js";const x="1.0.0",S="",h=[{kind:"javascript-module",path:"src/globals.ts",declarations:[],exports:[]},{kind:"javascript-module",path:"src/index.ts",declarations:[],exports:[{kind:"js",name:"OdsPopover",declaration:{name:"OdsPopover",module:"./components/ods-popover/ods-popover"}},{kind:"js",name:"OdsPopoverPosition",declaration:{name:"OdsPopoverPosition",module:"./constants/popover-position"}},{kind:"js",name:"ODS_POPOVER_POSITION",declaration:{name:"ODS_POPOVER_POSITION",module:"./constants/popover-position"}},{kind:"js",name:"ODS_POPOVER_POSITIONS",declaration:{name:"ODS_POPOVER_POSITIONS",module:"./constants/popover-position"}},{kind:"js",name:"OdsPopoverStrategy",declaration:{name:"OdsPopoverStrategy",module:"./constants/popover-strategy"}},{kind:"js",name:"ODS_POPOVER_STRATEGIES",declaration:{name:"ODS_POPOVER_STRATEGIES",module:"./constants/popover-strategy"}},{kind:"js",name:"ODS_POPOVER_STRATEGY",declaration:{name:"ODS_POPOVER_STRATEGY",module:"./constants/popover-strategy"}}]},{kind:"javascript-module",path:"src/constants/popover-position.ts",declarations:[],exports:[{kind:"js",name:"ODS_POPOVER_POSITION",declaration:{name:"ODS_OVERLAY_POSITION",module:"src/constants/popover-position.ts"}},{kind:"js",name:"ODS_POPOVER_POSITIONS",declaration:{name:"ODS_OVERLAY_POSITIONS",module:"src/constants/popover-position.ts"}},{kind:"js",name:"OdsPopoverPosition",declaration:{name:"OdsOverlayPosition",module:"src/constants/popover-position.ts"}}]},{kind:"javascript-module",path:"src/constants/popover-strategy.ts",declarations:[],exports:[{kind:"js",name:"ODS_POPOVER_STRATEGIES",declaration:{name:"ODS_OVERLAY_STRATEGIES",module:"src/constants/popover-strategy.ts"}},{kind:"js",name:"ODS_POPOVER_STRATEGY",declaration:{name:"ODS_OVERLAY_STRATEGY",module:"src/constants/popover-strategy.ts"}},{kind:"js",name:"OdsPopoverStrategy",declaration:{name:"OdsOverlayStrategy",module:"src/constants/popover-strategy.ts"}}]},{kind:"javascript-module",path:"src/components/ods-popover/ods-popover.tsx",declarations:[{kind:"class",description:"",name:"OdsPopover",members:[{kind:"field",name:"arrowElement",type:{text:"HTMLElement | undefined"},privacy:"private"},{kind:"field",name:"isOpen",type:{text:"boolean"},privacy:"private",default:"false"},{kind:"field",name:"triggerElement",type:{text:"HTMLElement | null | undefined"},privacy:"private"},{kind:"field",name:"boundOnKeydown",privacy:"private"},{kind:"field",name:"boundToggle",privacy:"private"},{kind:"field",name:"cleanUpCallback",type:{text:"() => void"},privacy:"private"},{kind:"field",name:"el",type:{text:"HTMLElement"}},{kind:"field",name:"position",type:{text:"OdsPopoverPosition"},privacy:"public",default:"top"},{kind:"field",name:"shadowDomTriggerId",type:{text:"string | undefined"},privacy:"public"},{kind:"field",name:"strategy",type:{text:"OdsPopoverStrategy"},privacy:"public",default:"absolute"},{kind:"field",name:"triggerId",type:{text:"string"},privacy:"public"},{kind:"field",name:"withArrow",type:{text:"boolean"},privacy:"public",default:"false"},{kind:"method",name:"onDocumentClick",return:{type:{text:"void"}},parameters:[{name:"event",type:{text:"MouseEvent"}}]},{kind:"method",name:"onDocumentFocusin",return:{type:{text:"void"}},parameters:[{name:"event",type:{text:"FocusEvent"}}]},{kind:"method",name:"onDocumentKeydown",return:{type:{text:"void"}},parameters:[{name:"event",type:{text:"KeyboardEvent"}}]},{kind:"method",name:"hide",privacy:"public",return:{type:{text:"Promise<void>"}}},{kind:"method",name:"show",privacy:"public",return:{type:{text:"Promise<void>"}}},{kind:"method",name:"onKeydown",privacy:"private",return:{type:{text:"void"}},parameters:[{name:"event",type:{text:"KeyboardEvent"}}]},{kind:"method",name:"toggle",privacy:"private",return:{type:{text:"void"}}},{kind:"method",name:"render",return:{type:{text:"FunctionalComponent"}}}],attributes:[{name:"position",fieldName:"position",type:{text:"OdsPopoverPosition"}},{name:"shadow-dom-trigger-id",fieldName:"shadowDomTriggerId",type:{text:"string"}},{name:"strategy",fieldName:"strategy",type:{text:"OdsPopoverStrategy"}},{name:"trigger-id",fieldName:"triggerId",type:{text:"string"}},{name:"with-arrow",fieldName:"withArrow",type:{text:"boolean"}}],tagName:"ods-popover",events:[{name:"odsHide",type:{text:"EventEmitter<void>"}},{name:"odsShow",type:{text:"EventEmitter<void>"}}],customElement:!0}],exports:[{kind:"js",name:"OdsPopover",declaration:{name:"OdsPopover",module:"src/components/ods-popover/ods-popover.tsx"}},{kind:"custom-element-definition",name:"ods-popover",declaration:{name:"OdsPopover",module:"src/components/ods-popover/ods-popover.tsx"}}]},{kind:"javascript-module",path:"../../utils/overlay.ts",declarations:[{kind:"variable",name:"ODS_OVERLAY_POSITIONS"},{kind:"variable",name:"ODS_OVERLAY_STRATEGIES"},{kind:"function",name:"findTriggerElement",return:{type:{text:"HTMLElement | undefined"}},parameters:[{name:"triggerId",type:{text:"string"}},{name:"shadowDomTriggerId",optional:!0,type:{text:"string"}}]},{kind:"function",name:"getElementPosition",return:{type:{text:"Promise<ComputePositionReturn>"}},parameters:[{name:"position",type:{text:"OdsOverlayPosition"}},{name:"domElement",type:{text:"DomElement"}},{name:"option",optional:!0,type:{text:"MiddlewareOption"}}]},{kind:"function",name:"hideOverlay",return:{type:{text:"void"}},parameters:[{name:"popperElement",type:{text:"HTMLElement"}},{name:"cleanUpCallback",optional:!0,type:{text:"() => void"}}]},{kind:"function",name:"showOverlay",return:{type:{text:"() => void"}},parameters:[{name:"position",type:{text:"OdsOverlayPosition"}},{name:"domElement",type:{text:"DomElement"}},{name:"option",optional:!0,type:{text:"MiddlewareOption"}}]}],exports:[{kind:"js",name:"findTriggerElement",declaration:{name:"findTriggerElement",module:"../../utils/overlay.ts"}},{kind:"js",name:"getElementPosition",declaration:{name:"getElementPosition",module:"../../utils/overlay.ts"}},{kind:"js",name:"hideOverlay",declaration:{name:"hideOverlay",module:"../../utils/overlay.ts"}},{kind:"js",name:"ODS_OVERLAY_POSITION",declaration:{name:"ODS_OVERLAY_POSITION",module:"../../utils/overlay.ts"}},{kind:"js",name:"ODS_OVERLAY_POSITIONS",declaration:{name:"ODS_OVERLAY_POSITIONS",module:"../../utils/overlay.ts"}},{kind:"js",name:"OdsOverlayPosition",declaration:{name:"OdsOverlayPosition",module:"../../utils/overlay.ts"}},{kind:"js",name:"ODS_OVERLAY_STRATEGIES",declaration:{name:"ODS_OVERLAY_STRATEGIES",module:"../../utils/overlay.ts"}},{kind:"js",name:"ODS_OVERLAY_STRATEGY",declaration:{name:"ODS_OVERLAY_STRATEGY",module:"../../utils/overlay.ts"}},{kind:"js",name:"OdsOverlayStrategy",declaration:{name:"OdsOverlayStrategy",module:"../../utils/overlay.ts"}},{kind:"js",name:"showOverlay",declaration:{name:"showOverlay",module:"../../utils/overlay.ts"}}]}],E={ODS_POPOVER_POSITION:{bottom:{type:"string",value:"bottom"},bottomEnd:{type:"string",value:"bottom-end"},bottomStart:{type:"string",value:"bottom-start"},left:{type:"string",value:"left"},leftEnd:{type:"string",value:"left-end"},leftStart:{type:"string",value:"left-start"},right:{type:"string",value:"right"},rightEnd:{type:"string",value:"right-end"},rightStart:{type:"string",value:"right-start"},top:{type:"string",value:"top"},topEnd:{type:"string",value:"top-end"},topStart:{type:"string",value:"top-start"}},ODS_POPOVER_STRATEGY:{absolute:{type:"string",value:"absolute"},fixed:{type:"string",value:"fixed"}}},P={schemaVersion:x,readme:S,modules:h,enumPlugin:E};function s(n){const t={code:"code",p:"p",...d(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(p,{of:r,name:"Technical information"}),`
`,e.jsx(l,{of:r}),`
`,e.jsx(o,{label:"Overview",level:2}),`
`,e.jsx(a,{of:c,sourceState:"none"}),`
`,e.jsx(m,{data:P}),`
`,e.jsx(o,{label:"Style customization",level:2}),`
`,e.jsx(t.p,{children:"You can update the popover content by directly updating the slot element."}),`
`,e.jsx(t.p,{children:"Custom CSS :"}),`
`,e.jsx(a,{of:u,sourceState:"shown"}),`
`,e.jsx(o,{label:"Positioning",level:2}),`
`,e.jsx(t.p,{children:`Unlike tooltip, popover can contain focusable elements.
Thus it needs to be positioned in the right spot in the DOM to follow the native focus workflow.`}),`
`,e.jsx(t.p,{children:"To ensure that, always declare your popover right after its trigger."}),`
`,e.jsx(t.p,{children:"Here is an example of a wrong positioning:"}),`
`,e.jsx(i,{code:`
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
`,e.jsx(i,{code:`
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
`,e.jsx(a,{of:v,sourceState:"shown"}),`
`,e.jsx(o,{label:"With an arrow tip",level:3}),`
`,e.jsx(a,{of:O,sourceState:"shown"}),`
`,e.jsx(o,{label:"Popover as Action Menu",level:3}),`
`,e.jsx(a,{of:y,sourceState:"shown"}),`
`,e.jsx(o,{label:"In an ods-modal",level:3}),`
`,e.jsx(t.p,{children:"If the component container is defining a position context, the popover may not appear at the right place, or partially clipped."}),`
`,e.jsxs(t.p,{children:["In that case, you can change the component ",e.jsx(t.code,{children:"strategy"})," prop to ",e.jsx(t.code,{children:"fixed"}),`, this way it will position itself based on the
nearest containing block (usually the viewport).`]}),`
`,e.jsx(a,{of:g,sourceState:"shown"})]})}function G(n={}){const{wrapper:t}={...d(),...n.components};return t?e.jsx(t,{...n,children:e.jsx(s,{...n})}):s(n)}export{G as default};
