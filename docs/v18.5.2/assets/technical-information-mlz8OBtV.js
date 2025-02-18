import{j as e,M as m,C as n}from"./index-s2XCIBmK.js";import{u as r}from"./index-BzRxuu7r.js";import{B as d}from"./Banner-IOwCuNxj.js";import{H as t}from"./Heading-DPkeex3C.js";import{T as l}from"./TechnicalSpecification-Bz_dnOE3.js";import{T as o,O as p,C as c,D as b,a as u,S as v,b as x}from"./tabs.stories-Du5ZAyol.js";import"./iframe-b7U1zSTi.js";import"../sb-preview/runtime.js";import"./index-8AfNH5n5.js";import"./index-D-8MO0q_.js";import"./index-DrFu-skq.js";import"./index-DCBH0_Tl.js";import"./index-OMpnLKmJ.js";import"./ods-accordion2-C2zw5EtX.js";import"./index-DAZhnxgO.js";import"./icon-name-C6aMXAXT.js";import"./ods-icon2-C2sSMg6h.js";import"./ods-badge-CMZ1G1-q.js";import"./ods-breadcrumb-item2-Chi8uW7w.js";import"./ods-link2-DhrEm8Nk.js";import"./ods-button2-DJxJiLcj.js";import"./ods-spinner2-CPyWCS2f.js";import"./ods-card-CsxtEQHf.js";import"./ods-checkbox2-D1rfq4Wo.js";import"./dom-CO1DdTQY.js";import"./ods-clipboard2-CWpjSCiO.js";import"./ods-input2-NhqVSkkH.js";import"./type-B5zI8QxY.js";import"./ods-tooltip2-CW12aP9b.js";import"./overlay-KZpfSxWH.js";import"./ods-code2-3QPYbtLQ.js";import"./ods-datepicker2-BYQpPxj0.js";import"./locale-NOa-Gxlr.js";import"./ods-divider-Dtiri0aY.js";import"./ods-divider2-yzIshch6.js";import"./ods-drawer2-DKhK7oOX.js";import"./ods-file-upload2-WcWZbv1U.js";import"./ods-progress-bar2-Dg_V5kiw.js";import"./ods-form-field2-BDYkM6lU.js";import"./ods-icon-DOZBIEJb.js";import"./ods-link-C3iAbK8i.js";import"./ods-medium2-BnayTic8.js";import"./ods-message-DErUZ_Xg.js";import"./ods-modal2-CLthqs1m.js";import"./ods-pagination2-Do5FFUNV.js";import"./ods-select2-uYxcgqp_.js";import"./ods-password2-YsAErLiV.js";import"./ods-phone-number2-Dku_7tcX.js";import"./ods-popover2-D0fTxPry.js";import"./ods-quantity2-Dc2INetT.js";import"./ods-radio2-NdDFmobW.js";import"./ods-range2-DVd4LCay.js";import"./ods-skeleton2-B7sDasgF.js";import"./ods-switch-item2-D-SJNcDd.js";import"./ods-tabs2-ChMEr-fQ.js";import"./ods-table2-oe37kiP3.js";import"./ods-tag2-CInySbKk.js";import"./ods-text-BO_pN8NQ.js";import"./ods-textarea2-BqL_D5sd.js";import"./ods-timepicker2-C6TMFSLy.js";import"./ods-toggle2-BgUL7nI_.js";import"./StorybookLink-CPCjr_4Z.js";import"./controls-DX883vx3.js";import"./unsafe-html-VJzuFJfF.js";const f="1.0.0",S="",j=[{kind:"javascript-module",path:"src/globals.ts",declarations:[],exports:[]},{kind:"javascript-module",path:"src/index.ts",declarations:[],exports:[{kind:"js",name:"OdsTab",declaration:{name:"OdsTab",module:"./components/ods-tab/ods-tab"}},{kind:"js",name:"OdsTabs",declaration:{name:"OdsTabs",module:"./components/ods-tabs/ods-tabs"}},{kind:"js",name:"OdsTabSelectedEventDetail",declaration:{name:"OdsTabSelectedEventDetail",module:"./interfaces/events"}},{kind:"js",name:"OdsTabSelectedEvent",declaration:{name:"OdsTabSelectedEvent",module:"./interfaces/events"}},{kind:"js",name:"OdsTabsSelectedEvent",declaration:{name:"OdsTabsSelectedEvent",module:"./interfaces/events"}}]},{kind:"javascript-module",path:"src/interfaces/events.ts",declarations:[],exports:[{kind:"js",name:"OdsTabSelectedEventDetail",declaration:{name:"OdsTabSelectedEventDetail",module:"src/interfaces/events.ts"}},{kind:"js",name:"OdsTabSelectedEvent",declaration:{name:"OdsTabSelectedEvent",module:"src/interfaces/events.ts"}},{kind:"js",name:"OdsTabsSelectedEvent",declaration:{name:"OdsTabsSelectedEvent",module:"src/interfaces/events.ts"}}]},{kind:"javascript-module",path:"src/components/ods-tabs/ods-tabs.tsx",declarations:[{kind:"class",description:"",name:"OdsTabs",members:[{kind:"method",name:"onOdsTabSelected",return:{type:{text:"void"}},parameters:[{name:"event",type:{text:"OdsTabSelectedEventDetail"}}]},{kind:"method",name:"render",return:{type:{text:"FunctionalComponent"}}}],tagName:"ods-tabs",events:[{name:"odsTabsSelected",type:{text:"EventEmitter<OdsTabSelectedEventDetail>"}}],customElement:!0}],exports:[{kind:"js",name:"OdsTabs",declaration:{name:"OdsTabs",module:"src/components/ods-tabs/ods-tabs.tsx"}},{kind:"custom-element-definition",name:"ods-tabs",declaration:{name:"OdsTabs",module:"src/components/ods-tabs/ods-tabs.tsx"}}]},{kind:"javascript-module",path:"src/components/ods-tab/ods-tab.tsx",declarations:[{kind:"class",description:"",name:"OdsTab",members:[{kind:"field",name:"isDisabled",type:{text:"boolean"},privacy:"public",default:"false"},{kind:"field",name:"isSelected",type:{text:"boolean"},privacy:"public",default:"false"},{kind:"method",name:"onClick",privacy:"private",return:{type:{text:"void"}},parameters:[{name:"event",type:{text:"MouseEvent"}}]},{kind:"method",name:"onKeyDown",privacy:"private",return:{type:{text:"void"}},parameters:[{name:"event",type:{text:"KeyboardEvent"}}]},{kind:"method",name:"onKeyUp",privacy:"private",return:{type:{text:"void"}},parameters:[{name:"event",type:{text:"KeyboardEvent"}}]},{kind:"method",name:"render",return:{type:{text:"FunctionalComponent"}}}],attributes:[{name:"is-disabled",fieldName:"isDisabled",type:{text:"boolean"}},{name:"is-selected",fieldName:"isSelected",type:{text:"boolean"}}],tagName:"ods-tab",events:[{name:"odsTabSelected",type:{text:"EventEmitter<OdsTabSelectedEventDetail>"}}],customElement:!0}],exports:[{kind:"js",name:"OdsTab",declaration:{name:"OdsTab",module:"src/components/ods-tab/ods-tab.tsx"}},{kind:"custom-element-definition",name:"ods-tab",declaration:{name:"OdsTab",module:"src/components/ods-tab/ods-tab.tsx"}}]}],T={},O={schemaVersion:f,readme:S,modules:j,enumPlugin:T};function i(a){const s={p:"p",...r(),...a.components};return e.jsxs(e.Fragment,{children:[e.jsx(m,{of:o,name:"Technical information"}),`
`,e.jsx(d,{of:o}),`
`,e.jsx(t,{label:"Overview",level:2}),`
`,e.jsx(n,{of:p,sourceState:"none"}),`
`,e.jsx(l,{data:O}),`
`,e.jsx(t,{label:"Style customization",level:2}),`
`,e.jsx(s.p,{children:"You can apply your own style on the whole tabs container or on each tab using CSS classes."}),`
`,e.jsx(s.p,{children:"Custom CSS:"}),`
`,e.jsx(n,{of:c,sourceState:"shown"}),`
`,e.jsx(t,{label:"Examples",level:2}),`
`,e.jsx(t,{label:"Default",level:3}),`
`,e.jsx(n,{of:b,sourceState:"shown"}),`
`,e.jsx(t,{label:"Disabled tab",level:3}),`
`,e.jsx(n,{of:u,sourceState:"shown"}),`
`,e.jsx(t,{label:"Selected tab",level:3}),`
`,e.jsx(n,{of:v,sourceState:"shown"}),`
`,e.jsx(t,{label:"Horizontal overflow",level:3}),`
`,e.jsx(n,{of:x,sourceState:"shown"})]})}function Ne(a={}){const{wrapper:s}={...r(),...a.components};return s?e.jsx(s,{...a,children:e.jsx(i,{...a})}):i(a)}export{Ne as default};
