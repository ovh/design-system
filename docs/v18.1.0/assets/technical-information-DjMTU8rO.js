import{j as e}from"./jsx-runtime-vK1CujOl.js";import{u as d}from"./index-CB7mz5IJ.js";import{M as m,C as a}from"./index-Bd2Jnm8T.js";import{B as l}from"./Banner-D69sr9PT.js";import{H as t}from"./Heading-oJ6nNH90.js";import{T as p}from"./TechnicalSpecification-KFlqdhlY.js";import{P as r,D as o,a as u,b as c,W as g,c as P,d as v}from"./pagination.stories-CXbDYm3j.js";import"./iframe-Lgv0C8F1.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-B_J8iUie.js";import"./index-DX_4BEHg.js";import"./index-DrFu-skq.js";import"./index-BNPjhb5w.js";import"./index-CONup0N6.js";import"./lit-html-D-ZEPr28.js";import"./controls-DpsgTNdU.js";const x="1.0.0",f="",y=[{kind:"javascript-module",path:"src/globals.ts",declarations:[],exports:[]},{kind:"javascript-module",path:"src/index.ts",declarations:[],exports:[{kind:"js",name:"OdsPagination",declaration:{name:"OdsPagination",module:"./components/ods-pagination/ods-pagination"}},{kind:"js",name:"ODS_PAGINATION_PER_PAGE",declaration:{name:"ODS_PAGINATION_PER_PAGE",module:"./constants/pagination-per-page"}},{kind:"js",name:"ODS_PAGINATION_PER_PAGE_OPTIONS",declaration:{name:"ODS_PAGINATION_PER_PAGE_OPTIONS",module:"./constants/pagination-per-page"}},{kind:"js",name:"OdsPaginationCurrentChangeEvent",declaration:{name:"OdsPaginationCurrentChangeEvent",module:"./interfaces/events"}},{kind:"js",name:"OdsPaginationChangedEventDetail",declaration:{name:"OdsPaginationChangedEventDetail",module:"./interfaces/events"}},{kind:"js",name:"OdsPaginationEvent",declaration:{name:"OdsPaginationEvent",module:"./interfaces/events"}},{kind:"js",name:"OdsPaginationItemPerPageChangedEvent",declaration:{name:"OdsPaginationItemPerPageChangedEvent",module:"./interfaces/events"}},{kind:"js",name:"OdsPaginationItemPerPageChangedEventDetail",declaration:{name:"OdsPaginationItemPerPageChangedEventDetail",module:"./interfaces/events"}}]},{kind:"javascript-module",path:"src/constants/pagination-per-page.ts",declarations:[{kind:"variable",name:"ODS_PAGINATION_PER_PAGE_OPTIONS"}],exports:[{kind:"js",name:"ODS_PAGINATION_PER_PAGE",declaration:{name:"ODS_PAGINATION_PER_PAGE",module:"src/constants/pagination-per-page.ts"}},{kind:"js",name:"ODS_PAGINATION_PER_PAGE_OPTIONS",declaration:{name:"ODS_PAGINATION_PER_PAGE_OPTIONS",module:"src/constants/pagination-per-page.ts"}}]},{kind:"javascript-module",path:"src/controller/ods-pagination.ts",declarations:[{kind:"variable",name:"DEFAULT_PAGE_OFFSET",type:{text:"number"},default:"2"},{kind:"variable",name:"ELLIPSIS_THRESHOLD",type:{text:"number"},default:"4"},{kind:"variable",name:"MAX_VISIBLE_ITEMS",type:{text:"number"},default:"7"},{kind:"variable",name:"MINIMUM_PAGE",type:{text:"number"},default:"1"},{kind:"function",name:"computeActualTotalPages",return:{type:{text:"number"}},parameters:[{name:"itemPerPage",type:{text:"number"}},{name:"totalItems",type:{text:"number | undefined"}},{name:"totalPages",type:{text:"number"}}]},{kind:"function",name:"createPageList",return:{type:{text:"OdsPaginationPageList"}},parameters:[{name:"totalPages",type:{text:"number"}},{name:"pageSelected",type:{text:"number"}}]},{kind:"function",name:"getActualPage",return:{type:{text:"number"}},parameters:[{name:"defaultCurrentPage",type:{text:"number"}},{name:"actualTotalPages",type:{text:"number"}},{name:"current",type:{text:"number"}}]}],exports:[{kind:"js",name:"DEFAULT_PAGE_OFFSET",declaration:{name:"DEFAULT_PAGE_OFFSET",module:"src/controller/ods-pagination.ts"}},{kind:"js",name:"ELLIPSIS_THRESHOLD",declaration:{name:"ELLIPSIS_THRESHOLD",module:"src/controller/ods-pagination.ts"}},{kind:"js",name:"MAX_VISIBLE_ITEMS",declaration:{name:"MAX_VISIBLE_ITEMS",module:"src/controller/ods-pagination.ts"}},{kind:"js",name:"MINIMUM_PAGE",declaration:{name:"MINIMUM_PAGE",module:"src/controller/ods-pagination.ts"}},{kind:"js",name:"computeActualTotalPages",declaration:{name:"computeActualTotalPages",module:"src/controller/ods-pagination.ts"}},{kind:"js",name:"createPageList",declaration:{name:"createPageList",module:"src/controller/ods-pagination.ts"}},{kind:"js",name:"getActualPage",declaration:{name:"getActualPage",module:"src/controller/ods-pagination.ts"}}]},{kind:"javascript-module",path:"src/interfaces/events.ts",declarations:[],exports:[{kind:"js",name:"OdsPaginationCurrentChangeEvent",declaration:{name:"OdsPaginationCurrentChangeEvent",module:"src/interfaces/events.ts"}},{kind:"js",name:"OdsPaginationChangedEventDetail",declaration:{name:"OdsPaginationChangedEventDetail",module:"src/interfaces/events.ts"}},{kind:"js",name:"OdsPaginationEvent",declaration:{name:"OdsPaginationEvent",module:"src/interfaces/events.ts"}},{kind:"js",name:"OdsPaginationItemPerPageChangedEvent",declaration:{name:"OdsPaginationItemPerPageChangedEvent",module:"src/interfaces/events.ts"}},{kind:"js",name:"OdsPaginationItemPerPageChangedEventDetail",declaration:{name:"OdsPaginationItemPerPageChangedEventDetail",module:"src/interfaces/events.ts"}}]},{kind:"javascript-module",path:"src/interfaces/pagination-page-list.ts",declarations:[],exports:[{kind:"js",name:"OdsPaginationPageList",declaration:{name:"OdsPaginationPageList",module:"src/interfaces/pagination-page-list.ts"}}]},{kind:"javascript-module",path:"src/components/ods-pagination/ods-pagination.tsx",declarations:[{kind:"class",description:"",name:"OdsPagination",members:[{kind:"field",name:"actualTotalPages",type:{text:"number"},privacy:"private",default:"1"},{kind:"field",name:"leftArrowButtonId",type:{text:"string"},privacy:"private",default:"'pagination-left-arrow'"},{kind:"field",name:"rightArrowButtonId",type:{text:"string"},privacy:"private",default:"'pagination-right-arrow'"},{kind:"field",name:"hostId",type:{text:"string"},privacy:"private",default:"''"},{kind:"field",name:"el",type:{text:"HTMLElement"}},{kind:"field",name:"itemPerPage",default:"option_10"},{kind:"field",name:"pageList",type:{text:"OdsPaginationPageList"},default:"[]"},{kind:"field",name:"current",type:{text:"number"},default:"1"},{kind:"field",name:"defaultCurrentPage",type:{text:"number"},privacy:"public",default:"1"},{kind:"field",name:"defaultItemsPerPage",type:{text:"ODS_PAGINATION_PER_PAGE"},privacy:"public",default:"option_10"},{kind:"field",name:"isDisabled",type:{text:"boolean"},privacy:"public",default:"false"},{kind:"field",name:"labelTooltipNext",type:{text:"string | undefined"},privacy:"public"},{kind:"field",name:"labelTooltipPrevious",type:{text:"string | undefined"},privacy:"public"},{kind:"field",name:"totalItems",type:{text:"number | undefined"},privacy:"public"},{kind:"field",name:"totalPages",type:{text:"number"},privacy:"public",default:"1"},{kind:"method",name:"updateLabelTooltip",return:{type:{text:"void"}}},{kind:"method",name:"onCurrentChange",return:{type:{text:"Promise<void>"}},parameters:[{name:"current",type:{text:"number"}},{name:"oldCurrent",optional:!0,type:{text:"number"}}]},{kind:"method",name:"onTotalPagesChange",return:{type:{text:"Promise<void>"}}},{kind:"method",name:"onItemPerPageChange",return:{type:{text:"Promise<void>"}}},{kind:"method",name:"onTotalItemsChange",return:{type:{text:"Promise<void>"}}},{kind:"method",name:"setCurrentPage",privacy:"public",return:{type:{text:"Promise<void>"}},parameters:[{name:"current",type:{text:"number"}}]},{kind:"method",name:"getCurrentPage",privacy:"public",return:{type:{text:"Promise<number>"}}},{kind:"method",name:"updatePageList",privacy:"private",return:{type:{text:"void"}}},{kind:"method",name:"emitChange",privacy:"private",return:{type:{text:"void"}},parameters:[{name:"current",type:{text:"number"}},{name:"oldCurrent",optional:!0,type:{text:"number"}}]},{kind:"method",name:"handlePreviousClick",privacy:"private",return:{type:{text:"void"}},parameters:[{name:"page",type:{text:"number"}}]},{kind:"method",name:"handleNextClick",privacy:"private",return:{type:{text:"void"}},parameters:[{name:"page",type:{text:"number"}}]},{kind:"method",name:"handlePageClick",privacy:"private",return:{type:{text:"void"}},parameters:[{name:"page",type:{text:"number"}}]},{kind:"method",name:"odsChangeHandler",privacy:"private",return:{type:{text:"void"}},parameters:[{name:"event",type:{text:"CustomEvent<OdsSelectChangeEventDetail>"}}]},{kind:"method",name:"updatePagination",privacy:"private",return:{type:{text:"Promise<void>"}}},{kind:"method",name:"renderArrow",privacy:"private",return:{type:{text:"typeof Fragment"}},parameters:[{name:"direction",type:{text:"'left' | 'right'"}}]},{kind:"method",name:"renderEllipsis",privacy:"private",return:{type:{text:"typeof Fragment"}},parameters:[{name:"key",type:{text:"string"}}]},{kind:"method",name:"renderPage",privacy:"private",return:{type:{text:"typeof Fragment"}},parameters:[{name:"pageId",type:{text:"number"}},{name:"active",type:{text:"boolean"}}]},{kind:"method",name:"render",return:{type:{text:"FunctionalComponent | undefined"}}}],attributes:[{name:"default-current-page",fieldName:"defaultCurrentPage",type:{text:"number"}},{name:"default-items-per-page",fieldName:"defaultItemsPerPage",type:{text:"ODS_PAGINATION_PER_PAGE"}},{name:"is-disabled",fieldName:"isDisabled",type:{text:"boolean"}},{name:"label-tooltip-next",fieldName:"labelTooltipNext",type:{text:"string"}},{name:"label-tooltip-previous",fieldName:"labelTooltipPrevious",type:{text:"string"}},{name:"total-items",fieldName:"totalItems",type:{text:"number"}},{name:"total-pages",fieldName:"totalPages",type:{text:"number"}}],tagName:"ods-pagination",events:[{name:"odsChange",type:{text:"EventEmitter<OdsPaginationChangedEventDetail>"}},{name:"odsItemPerPageChange",type:{text:"EventEmitter<OdsPaginationItemPerPageChangedEventDetail>"}}],customElement:!0}],exports:[{kind:"js",name:"OdsPagination",declaration:{name:"OdsPagination",module:"src/components/ods-pagination/ods-pagination.tsx"}},{kind:"custom-element-definition",name:"ods-pagination",declaration:{name:"OdsPagination",module:"src/components/ods-pagination/ods-pagination.tsx"}}]}],E={ODS_PAGINATION_PER_PAGE:{option_10:{type:"number",value:"10"},option_25:{type:"number",value:"25"},option_50:{type:"number",value:"50"},option_100:{type:"number",value:"100"},option_300:{type:"number",value:"300"}}},b={schemaVersion:x,readme:f,modules:y,enumPlugin:E};function s(n){return e.jsxs(e.Fragment,{children:[e.jsx(m,{of:r,name:"Technical information"}),`
`,e.jsx(l,{of:r}),`
`,e.jsx(t,{label:"Overview",level:2}),`
`,e.jsx(a,{of:o,sourceState:"none"}),`
`,e.jsx(p,{data:b}),`
`,e.jsx(t,{label:"Examples",level:2}),`
`,e.jsx(t,{label:"Default",level:3}),`
`,e.jsx(a,{of:u,sourceState:"shown"}),`
`,e.jsx(t,{label:"Default - Large amount of pages",level:3}),`
`,e.jsx(a,{of:o,sourceState:"shown"}),`
`,e.jsx(t,{label:"Disabled",level:3}),`
`,e.jsx(a,{of:c,sourceState:"shown"}),`
`,e.jsx(t,{label:"Tooltip - Configuration",level:3}),`
`,e.jsx(a,{of:g,sourceState:"shown"}),`
`,e.jsx(t,{label:"Total Items",level:3}),`
`,e.jsx(a,{of:P,sourceState:"shown"}),`
`,e.jsx(t,{label:"Total Items with labels",level:3}),`
`,e.jsx(a,{of:v,sourceState:"shown"})]})}function F(n={}){const{wrapper:i}={...d(),...n.components};return i?e.jsx(i,{...n,children:e.jsx(s,{...n})}):s()}export{F as default};
