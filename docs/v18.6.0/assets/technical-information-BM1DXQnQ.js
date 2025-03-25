import{j as e,M as p,C as t}from"./index-BZrH9CGX.js";import{u as m}from"./index-dt1nTXy9.js";import{d as c}from"./index-2LVqMwig.js";import{B as u}from"./Banner-DiaRo2C-.js";import{H as n}from"./Heading-CyUtHF9O.js";import{S as i,O as s,a as r}from"./StorybookLink-CftdUnI_.js";import{T as x}from"./TechnicalSpecification-HZMLHTiN.js";import{M as l,O as h,C as O,D as f,N as y,a as v,A as j,b,c as k}from"./modal.stories-Cg3ok9rl.js";import"./iframe-B8AsNC2M.js";import"../sb-preview/runtime.js";import"./index-8AfNH5n5.js";import"./index-D-8MO0q_.js";import"./index-DrFu-skq.js";import"./ods-accordion2-vvZNAi9U.js";import"./index-DAZhnxgO.js";import"./icon-name-C6aMXAXT.js";import"./ods-icon2-DRPHarK1.js";import"./ods-badge-CjbpLGl8.js";import"./ods-breadcrumb-item2-C_Ah5FZN.js";import"./ods-link2-CtVFUlMR.js";import"./ods-button2-dPaqs0uX.js";import"./ods-spinner2-CPyWCS2f.js";import"./ods-card-DRGl4_I-.js";import"./ods-checkbox2-B2XbvOPY.js";import"./dom-8hoR-urs.js";import"./ods-clipboard2-C65imxCo.js";import"./ods-input2-C6KOqFAM.js";import"./type-B5zI8QxY.js";import"./ods-tooltip2-CW12aP9b.js";import"./overlay-KZpfSxWH.js";import"./ods-code2-D4zmvcg_.js";import"./ods-combobox2-CC5fPZls.js";import"./_commonjsHelpers-CLD5em3H.js";import"./debounce-DRefBDpX.js";import"./ods-tag2-Bb2BMy9d.js";import"./ods-datepicker2-FisogS88.js";import"./locale-NOa-Gxlr.js";import"./ods-divider-CjaMxjcH.js";import"./ods-divider2-R3gNNk4H.js";import"./ods-drawer2-BQqpNIWL.js";import"./ods-file-upload2-teF1qz6H.js";import"./ods-progress-bar2-zR9YGHZb.js";import"./ods-form-field2-BSNGPVxz.js";import"./ods-icon-DTp5PnPI.js";import"./ods-input-CCQ46ZEm.js";import"./ods-link-BCeMi6SV.js";import"./ods-medium2-BnayTic8.js";import"./ods-message-BxLNJd0H.js";import"./ods-modal2-BQO4yvXA.js";import"./ods-pagination2-BkxTbhCC.js";import"./ods-select2-C8koqTnw.js";import"./ods-password2-Cx1VaMfM.js";import"./ods-phone-number2-B3iHB89H.js";import"./ods-popover2-D09FwiGN.js";import"./ods-quantity2-7U22nj6z.js";import"./ods-radio2-C2vNRNiP.js";import"./ods-range2-l-uevN51.js";import"./ods-skeleton2-B7sDasgF.js";import"./ods-switch-item2-ebcV2EUF.js";import"./ods-tabs2-BNbhFfmR.js";import"./ods-table2-oe37kiP3.js";import"./ods-text-BO_pN8NQ.js";import"./ods-textarea2-BDOVTqwb.js";import"./ods-timepicker2-Cq-oMtdT.js";import"./ods-toggle2-Bg02aln1.js";import"./index-DZK8KyWG.js";import"./controls-DX883vx3.js";import"./unsafe-html-VJzuFJfF.js";const g="1.0.0",S="",M=[{kind:"javascript-module",path:"src/globals.ts",declarations:[],exports:[]},{kind:"javascript-module",path:"src/index.ts",declarations:[],exports:[{kind:"js",name:"OdsModal",declaration:{name:"OdsModal",module:"./components/ods-modal/ods-modal"}},{kind:"js",name:"ODS_MODAL_COLOR",declaration:{name:"ODS_MODAL_COLOR",module:"./constants/modal-color"}},{kind:"js",name:"ODS_MODAL_COLORS",declaration:{name:"ODS_MODAL_COLORS",module:"./constants/modal-color"}},{kind:"js",name:"OdsModalColor",declaration:{name:"OdsModalColor",module:"./constants/modal-color"}}]},{kind:"javascript-module",path:"src/constants/modal-color.ts",declarations:[{kind:"variable",name:"ODS_MODAL_COLORS"}],exports:[{kind:"js",name:"ODS_MODAL_COLOR",declaration:{name:"ODS_MODAL_COLOR",module:"src/constants/modal-color.ts"}},{kind:"js",name:"ODS_MODAL_COLORS",declaration:{name:"ODS_MODAL_COLORS",module:"src/constants/modal-color.ts"}},{kind:"js",name:"OdsModalColor",declaration:{name:"OdsModalColor",module:"src/constants/modal-color.ts"}}]},{kind:"javascript-module",path:"src/components/ods-modal/ods-modal.tsx",declarations:[{kind:"class",description:"",name:"OdsModal",members:[{kind:"field",name:"modalDialog",type:{text:"HTMLDialogElement | undefined"},privacy:"private"},{kind:"field",name:"el",type:{text:"HTMLElement"}},{kind:"field",name:"color",type:{text:"OdsModalColor"},privacy:"public",default:"information"},{kind:"field",name:"isDismissible",type:{text:"boolean"},privacy:"public",default:"true"},{kind:"field",name:"isOpen",type:{text:"boolean"},privacy:"public",default:"false"},{kind:"method",name:"close",privacy:"public",return:{type:{text:"Promise<void>"}}},{kind:"method",name:"open",privacy:"public",return:{type:{text:"Promise<void>"}}},{kind:"method",name:"handleOpenState",return:{type:{text:"void"}}},{kind:"method",name:"onKeyDown",return:{type:{text:"void"}},parameters:[{name:"event",type:{text:"KeyboardEvent"}}]},{kind:"method",name:"handleBackdropClick",return:{type:{text:"void"}},parameters:[{name:"event",type:{text:"MouseEvent"}}]},{kind:"method",name:"render",return:{type:{text:"FunctionalComponent"}}}],attributes:[{name:"color",fieldName:"color",type:{text:"OdsModalColor"}},{name:"is-dismissible",fieldName:"isDismissible",type:{text:"boolean"}},{name:"is-open",fieldName:"isOpen",type:{text:"boolean"}}],tagName:"ods-modal",events:[{name:"odsClose",type:{text:"EventEmitter<void>"}},{name:"odsOpen",type:{text:"EventEmitter<void>"}}],customElement:!0}],exports:[{kind:"js",name:"OdsModal",declaration:{name:"OdsModal",module:"src/components/ods-modal/ods-modal.tsx"}},{kind:"custom-element-definition",name:"ods-modal",declaration:{name:"OdsModal",module:"src/components/ods-modal/ods-modal.tsx"}}]}],D={ODS_MODAL_COLOR:{critical:{type:"string",value:"critical"},information:{type:"string",value:"information"},neutral:{type:"string",value:"neutral"},success:{type:"string",value:"success"},warning:{type:"string",value:"warning"}}},C={schemaVersion:g,readme:S,modules:M,enumPlugin:D};function d(a){const o={code:"code",p:"p",...m(),...a.components};return e.jsxs(e.Fragment,{children:[e.jsx(p,{of:l,name:"Technical information"}),`
`,e.jsx(u,{of:l}),`
`,e.jsx(n,{label:"Overview",level:2}),`
`,e.jsx(t,{of:h,sourceState:"none"}),`
`,e.jsx(x,{data:C}),`
`,e.jsx(n,{label:"Style customization",level:2}),`
`,e.jsx(o.p,{children:"You can update the modal's content by directly updating the slot elements."}),`
`,e.jsxs(o.p,{children:["You can also update the dialog element using the ",e.jsx(o.code,{children:"::part(dialog)"})," and the dialog content using the ",e.jsx(o.code,{children:"::part(dialog-content)"}),"."]}),`
`,e.jsx(o.p,{children:"Custom CSS:"}),`
`,e.jsx(t,{of:O,sourceState:"shown"}),`
`,e.jsx(n,{label:"Examples",level:2}),`
`,e.jsx(n,{label:"Default",level:3}),`
`,e.jsx(t,{of:f,sourceState:"shown"}),`
`,e.jsx(n,{label:"Not Dismissible",level:3}),`
`,e.jsx(t,{of:y,sourceState:"shown"}),`
`,e.jsx(n,{label:"Color",level:3}),`
`,e.jsx(t,{of:v,sourceState:"shown"}),`
`,e.jsx(n,{label:"Actions slot",level:3}),`
`,e.jsx(t,{of:j,sourceState:"shown"}),`
`,e.jsx(n,{label:"Overflowing overlay",level:3}),`
`,e.jsxs(o.p,{children:[`If you want floating elements (like
`,e.jsx(i,{kind:s.popover,label:"popover",story:r.documentation})," or ",e.jsx(i,{kind:s.tooltip,label:"tooltip",story:r.documentation}),`
) to overflow when used in the modal, you should set their positioning strategy to `,e.jsx(o.code,{children:"fixed"})," (see their dedicated examples)."]}),`
`,e.jsxs(o.p,{children:[`But for elements that are using a dropdown (like for example
`,e.jsx(i,{kind:s.datepicker,label:"datepicker",story:r.documentation})," or ",e.jsx(i,{kind:s.select,label:"select",story:r.documentation}),`
), it can gets a bit more tricky.`]}),`
`,e.jsxs(o.p,{children:["You can use the same ",e.jsx(o.code,{children:"fixed"}),` strategy methods, but you'll have to manage the induced layout changes as your component
will no longer be rendered as part of your block but in a separate layer (see each component dedicated documentation for more details).`]}),`
`,e.jsx(o.p,{children:"Here is an example of a fixed ods-datepicker aligned with its label:"}),`
`,e.jsx(t,{of:b,sourceState:"shown"}),`
`,e.jsx(o.p,{children:`An easier workaround would be to enforce a visible overflow to the whole dialog content.
This way, dropdowns will render correctly and you won't need to take care of the inside layout.`}),`
`,e.jsx(c,{color:"warning",isDismissible:!1,children:"This will prevent scrolling through the dialog and should only be used if your content is small enough to never overflow the available height."}),`
`,e.jsx(t,{of:k,sourceState:"shown"})]})}function Xe(a={}){const{wrapper:o}={...m(),...a.components};return o?e.jsx(o,{...a,children:e.jsx(d,{...a})}):d(a)}export{Xe as default};
