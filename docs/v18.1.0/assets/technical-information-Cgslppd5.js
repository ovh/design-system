import{j as e}from"./jsx-runtime-vK1CujOl.js";import{u as m}from"./index-CB7mz5IJ.js";import{M as o,C as r}from"./index-Bd2Jnm8T.js";import{B as i}from"./Banner-D69sr9PT.js";import{H as n}from"./Heading-oJ6nNH90.js";import{S as c}from"./StorybookLink-D-3rjE8q.js";import{T as l}from"./TechnicalSpecification-KFlqdhlY.js";import{B as s,O as p,C as u,D as b,a as x,b as f,c as k}from"./breadcrumb.stories-BFECPJh7.js";import"./iframe-Lgv0C8F1.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-B_J8iUie.js";import"./index-DX_4BEHg.js";import"./index-DrFu-skq.js";import"./index-BNPjhb5w.js";import"./index-CONup0N6.js";import"./lit-html-D-ZEPr28.js";import"./unsafe-html-HR6uCwaW.js";import"./controls-DpsgTNdU.js";const y="1.0.0",h="",v=[{kind:"javascript-module",path:"src/globals.ts",declarations:[],exports:[]},{kind:"javascript-module",path:"src/index.ts",declarations:[],exports:[{kind:"js",name:"OdsBreadcrumb",declaration:{name:"OdsBreadcrumb",module:"./components/ods-breadcrumb/ods-breadcrumb"}},{kind:"js",name:"OdsBreadcrumbItem",declaration:{name:"OdsBreadcrumbItem",module:"./components/ods-breadcrumb-item/ods-breadcrumb-item"}},{kind:"js",name:"OdsBreadcrumbItemClickEvent",declaration:{name:"OdsBreadcrumbItemClickEvent",module:"./interfaces/events"}},{kind:"js",name:"OdsBreadcrumbItemExpandEvent",declaration:{name:"OdsBreadcrumbItemExpandEvent",module:"./interfaces/events"}}]},{kind:"javascript-module",path:"src/controller/ods-breadcrumb.ts",declarations:[{kind:"function",name:"expandItems",return:{type:{text:"void"}},parameters:[{name:"items",type:{text:"Element[]"}}]},{kind:"function",name:"setupItems",return:{type:{text:"void"}},parameters:[{name:"items",type:{text:"Element[]"}}]}],exports:[{kind:"js",name:"expandItems",declaration:{name:"expandItems",module:"src/controller/ods-breadcrumb.ts"}},{kind:"js",name:"setupItems",declaration:{name:"setupItems",module:"src/controller/ods-breadcrumb.ts"}}]},{kind:"javascript-module",path:"src/interfaces/events.ts",declarations:[],exports:[{kind:"js",name:"OdsBreadcrumbItemClickEvent",declaration:{name:"OdsBreadcrumbItemClickEvent",module:"src/interfaces/events.ts"}},{kind:"js",name:"OdsBreadcrumbItemExpandEvent",declaration:{name:"OdsBreadcrumbItemExpandEvent",module:"src/interfaces/events.ts"}}]},{kind:"javascript-module",path:"src/components/ods-breadcrumb/ods-breadcrumb.tsx",declarations:[{kind:"class",description:"",name:"OdsBreadcrumb",members:[{kind:"field",name:"el",type:{text:"HTMLElement"}},{kind:"method",name:"onOdsExpand",return:{type:{text:"void"}}},{kind:"method",name:"onSlotChange",return:{type:{text:"void"}}},{kind:"method",name:"render",return:{type:{text:"FunctionalComponent"}}}],tagName:"ods-breadcrumb",events:[],customElement:!0}],exports:[{kind:"js",name:"OdsBreadcrumb",declaration:{name:"OdsBreadcrumb",module:"src/components/ods-breadcrumb/ods-breadcrumb.tsx"}},{kind:"custom-element-definition",name:"ods-breadcrumb",declaration:{name:"OdsBreadcrumb",module:"src/components/ods-breadcrumb/ods-breadcrumb.tsx"}}]},{kind:"javascript-module",path:"src/components/ods-breadcrumb-item/ods-breadcrumb-item.tsx",declarations:[{kind:"class",description:"",name:"OdsBreadcrumbItem",members:[{kind:"field",name:"isCollapsed",type:{text:"boolean"},default:"false"},{kind:"field",name:"isExpandable",type:{text:"boolean"},default:"false"},{kind:"field",name:"isLast",type:{text:"boolean"},default:"false"},{kind:"field",name:"href",type:{text:"string"},privacy:"public"},{kind:"field",name:"icon",type:{text:"OdsIconName | undefined"},privacy:"public"},{kind:"field",name:"isDisabled",type:{text:"boolean"},privacy:"public",default:"false"},{kind:"field",name:"label",type:{text:"string | undefined"},privacy:"public"},{kind:"field",name:"referrerpolicy",type:{text:"ReferrerPolicy | undefined"},privacy:"public"},{kind:"field",name:"rel",type:{text:"HTMLAnchorElement['rel'] | undefined"},privacy:"public"},{kind:"field",name:"target",type:{text:"HTMLAnchorElement['target'] | undefined"},privacy:"public"},{kind:"method",name:"onExpandClick",return:{type:{text:"void"}},parameters:[{name:"e",type:{text:"Event"}}]},{kind:"method",name:"onLinkClick",return:{type:{text:"void"}},parameters:[{name:"e",type:{text:"MouseEvent"}}]},{kind:"method",name:"render",return:{type:{text:"FunctionalComponent"}}}],attributes:[{name:"is-collapsed",fieldName:"isCollapsed",type:{text:"boolean"}},{name:"is-expandable",fieldName:"isExpandable",type:{text:"boolean"}},{name:"is-last",fieldName:"isLast",type:{text:"boolean"}},{name:"href",fieldName:"href",type:{text:"string"}},{name:"icon",fieldName:"icon",type:{text:"OdsIconName"}},{name:"is-disabled",fieldName:"isDisabled",type:{text:"boolean"}},{name:"label",fieldName:"label",type:{text:"string"}},{name:"referrerpolicy",fieldName:"referrerpolicy",type:{text:"ReferrerPolicy"}},{name:"rel",fieldName:"rel",type:{text:"HTMLAnchorElement['rel']"}},{name:"target",fieldName:"target",type:{text:"HTMLAnchorElement['target']"}}],tagName:"ods-breadcrumb-item",events:[{name:"odsClick",type:{text:"EventEmitter<MouseEvent>"}},{name:"odsExpand",type:{text:"EventEmitter<void>"}}],customElement:!0}],exports:[{kind:"js",name:"OdsBreadcrumbItem",declaration:{name:"OdsBreadcrumbItem",module:"src/components/ods-breadcrumb-item/ods-breadcrumb-item.tsx"}},{kind:"custom-element-definition",name:"ods-breadcrumb-item",declaration:{name:"OdsBreadcrumbItem",module:"src/components/ods-breadcrumb-item/ods-breadcrumb-item.tsx"}}]}],j={},E={schemaVersion:y,readme:h,modules:v,enumPlugin:j};function d(a){const t={code:"code",p:"p",...m(),...a.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:s,name:"Technical information"}),`
`,e.jsx(i,{of:s}),`
`,e.jsx(n,{label:"Overview",level:2}),`
`,e.jsx(r,{of:p,sourceState:"none"}),`
`,e.jsx(l,{data:E}),`
`,e.jsx(n,{label:"Style customization",level:2}),`
`,e.jsx(t.p,{children:"The breadcrumb component wraps and applies style on the breadcrumb items contained inside."}),`
`,e.jsx(t.p,{children:"You can directly add CSS classes on each item that you want to customize."}),`
`,e.jsxs(t.p,{children:["If you want to go further and customize the item link directly, you can use the part ",e.jsx(t.code,{children:"link"}),"."]}),`
`,e.jsx(t.p,{children:"Custom CSS :"}),`
`,e.jsx(r,{of:u,sourceState:"shown"}),`
`,e.jsx(n,{label:"Examples",level:2}),`
`,e.jsx(n,{label:"Default",level:3}),`
`,e.jsx(r,{of:b,sourceState:"shown"}),`
`,e.jsx(n,{label:"Collapsed",level:3}),`
`,e.jsx(r,{of:x,sourceState:"shown"}),`
`,e.jsx(n,{label:"Get the clicked item",level:3}),`
`,e.jsxs(t.p,{children:[`If you need to perform specific actions when a breadcrumb item is clicked,
you can observe the `,e.jsx(t.code,{children:"odsBreadcrumbItemClick"})," event, that will return the target of the click."]}),`
`,e.jsx(r,{of:f,sourceState:"shown"}),`
`,e.jsx(n,{label:"Breadcrumb item attributes",level:3}),`
`,e.jsxs(t.p,{children:["Each breadcrumb item supports the same attribute list as the ",e.jsx(c,{kind:"ODS Components/Link",label:"ods-link",story:"Technical information"})," component."]}),`
`,e.jsx(r,{of:k,sourceState:"shown"})]})}function V(a={}){const{wrapper:t}={...m(),...a.components};return t?e.jsx(t,{...a,children:e.jsx(d,{...a})}):d(a)}export{V as default};
