import{j as n}from"./jsx-runtime-C_5uCoOk.js";import{u as s}from"./index-BNSrq6w-.js";import{M as p,C as t,d as a}from"./index-DnV51lgW.js";import{B as d}from"./banner-CAPzkNgn.js";import{P as r,O as l,C as c,D as h,A as u,M as m}from"./popover.stories---wdfTf6.js";import"./iframe-Cm7AUSBL.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-B_J8iUie.js";import"./index-DX_4BEHg.js";import"./index-DrFu-skq.js";import"./index-CEZbmgmh.js";import"./lit-html-D-ZEPr28.js";import"./unsafe-html-HR6uCwaW.js";import"./control-C1r2wu67.js";const g='## OdsPopover\n### Properties\n| Property | Type | Required | Default value |\n| --- | --- | --- | --- |\n| position | `OdsPopoverPosition` | `true` | `ODS_POPOVER_POSITION.top` |\n| shadowDomTriggerId | `string` | `false` | `undefined` |\n| triggerId | `string` | `true` | `undefined` |\n| withArrow | `boolean` | `true` | `false` |\n### Methods\n• **hide**(): `Promise<void>`\n\n• **show**(): `Promise<void>`\n### Events\n• **odsHide**(): `EventEmitter<void>`\n\n• **odsShow**(): `EventEmitter<void>`\n### Enums\n#### ODS_POPOVER_POSITION\n\n• **bottom** = `"bottom"`\n\n• **bottomEnd** = `"bottom-end"`\n\n• **bottomStart** = `"bottom-start"`\n\n• **left** = `"left"`\n\n• **leftEnd** = `"left-end"`\n\n• **leftStart** = `"left-start"`\n\n• **right** = `"right"`\n\n• **rightEnd** = `"right-end"`\n\n• **rightStart** = `"right-start"`\n\n• **top** = `"top"`\n\n• **topEnd** = `"top-end"`\n\n• **topStart** = `"top-start"`\n\n';function i(o){const e={code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...s(),...o.components};return n.jsxs(n.Fragment,{children:[n.jsx(p,{of:r,name:"Technical information"}),`
`,n.jsx(d,{of:r}),`
`,n.jsx(e.h2,{id:"overview",children:"Overview"}),`
`,n.jsx(t,{of:l,sourceState:"none"}),`
`,n.jsx(a,{children:g}),`
`,n.jsx(e.h2,{id:"style-customization",children:"Style customization"}),`
`,n.jsx(e.p,{children:"You can update the popover content by directly updating the slot element."}),`
`,n.jsx(e.p,{children:"Custom CSS :"}),`
`,n.jsx(t,{of:c,sourceState:"shown"}),`
`,n.jsx(e.h1,{id:"positioning",children:"Positioning"}),`
`,n.jsx(e.p,{children:`Unlike tooltip, popover can contain focusable elements.
Thus it needs to be positioned in the right spot in the DOM to follow the native focus workflow.`}),`
`,n.jsx(e.p,{children:"To ensure that, always declare your popover right after its trigger."}),`
`,n.jsx(e.p,{children:"Here is an example of a wrong positioning:"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-html",children:`<ods-button icon="ellipsis-vertical"
            id="popover-trigger"
            label="Menu">
</ods-button>

<ods-input name="some-input">
</ods-input>

<ods-popover trigger-id="popover-trigger">
  ...focusable popover content
</ods-popover>
`})}),`
`,n.jsx(e.p,{children:"The input will get focused after the popover trigger button, causing the popover to close, thus making the element inside of it unreachable."}),`
`,n.jsx(e.p,{children:"The correct way would be:"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-html",children:`<ods-button icon="ellipsis-vertical"
            id="popover-trigger"
            label="Menu">
</ods-button>

<ods-popover trigger-id="popover-trigger">
  ...focusable popover content
</ods-popover>

<ods-input name="some-input">
</ods-input>
`})}),`
`,n.jsx(e.h2,{id:"examples",children:"Examples"}),`
`,n.jsx(e.h3,{id:"default",children:"Default"}),`
`,n.jsx(t,{of:h,sourceState:"shown"}),`
`,n.jsx(e.h3,{id:"with-an-arrow-tip",children:"With an arrow tip"}),`
`,n.jsx(t,{of:u,sourceState:"shown"}),`
`,n.jsx(e.h3,{id:"popover-as-action-menu",children:"Popover as Action Menu"}),`
`,n.jsx(t,{of:m,sourceState:"shown"})]})}function I(o={}){const{wrapper:e}={...s(),...o.components};return e?n.jsx(e,{...o,children:n.jsx(i,{...o})}):i(o)}export{I as default};
