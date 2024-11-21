import{j as e}from"./jsx-runtime-BtDUu9js.js";import{u as l}from"./index-DZL6x4lo.js";import{M as d,C as n}from"./index-CYldocI7.js";import{B as r}from"./Banner-CW_U-IGN.js";import{H as a}from"./Heading-DwuTnCox.js";import{T as p}from"./TechnicalSpecification-D8V9jwZL.js";import{C as i,O as m,a as c,D as u,b,c as x}from"./clipboard.stories-BYhWrRW3.js";import"./iframe-D7GxXTWn.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-B_J8iUie.js";import"./index-DX_4BEHg.js";import"./index-DrFu-skq.js";import"./index-BvAGq-5Z.js";import"./index-DtXgNHxz.js";import"./lit-html-D-ZEPr28.js";import"./controls-DpsgTNdU.js";const f="1.0.0",y="",v=[{kind:"javascript-module",path:"src/globals.ts",declarations:[],exports:[]},{kind:"javascript-module",path:"src/index.ts",declarations:[],exports:[{kind:"js",name:"OdsClipboard",declaration:{name:"OdsClipboard",module:"./components/ods-clipboard/ods-clipboard"}}]},{kind:"javascript-module",path:"src/components/ods-clipboard/ods-clipboard.tsx",declarations:[{kind:"class",description:"",name:"OdsClipboard",members:[{kind:"field",name:"copyButtonId",type:{text:"string"},privacy:"private",default:"'clipboard-copy'"},{kind:"field",name:"hostId",type:{text:"string"},privacy:"private",default:"''"},{kind:"field",name:"el",type:{text:"HTMLElement"}},{kind:"field",name:"isCopyDone",type:{text:"boolean"},default:"false"},{kind:"field",name:"isDisabled",type:{text:"boolean"},privacy:"public",default:"false"},{kind:"field",name:"labelCopy",type:{text:"string"},privacy:"public",default:"'Copy to clipboard'"},{kind:"field",name:"labelCopySuccess",type:{text:"string"},privacy:"public",default:"'Copied!'"},{kind:"field",name:"value",type:{text:"string | undefined"},privacy:"public"},{kind:"method",name:"copy",privacy:"public",return:{type:{text:"Promise<void>"}}},{kind:"method",name:"onTooltipHide",return:{type:{text:"void"}}},{kind:"method",name:"render",return:{type:{text:"FunctionalComponent"}}}],attributes:[{name:"is-disabled",fieldName:"isDisabled",type:{text:"boolean"}},{name:"label-copy",fieldName:"labelCopy",type:{text:"string"}},{name:"label-copy-success",fieldName:"labelCopySuccess",type:{text:"string"}},{name:"value",fieldName:"value",type:{text:"string"}}],tagName:"ods-clipboard",events:[{name:"odsCopy",type:{text:"EventEmitter<string>"}}],customElement:!0}],exports:[{kind:"js",name:"OdsClipboard",declaration:{name:"OdsClipboard",module:"src/components/ods-clipboard/ods-clipboard.tsx"}},{kind:"custom-element-definition",name:"ods-clipboard",declaration:{name:"OdsClipboard",module:"src/components/ods-clipboard/ods-clipboard.tsx"}}]}],C={},j={schemaVersion:f,readme:y,modules:v,enumPlugin:C};function s(t){const o={code:"code",p:"p",...l(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(d,{of:i,name:"Technical information"}),`
`,e.jsx(r,{of:i}),`
`,e.jsx(a,{label:"Overview",level:2}),`
`,e.jsx(n,{of:m,sourceState:"none"}),`
`,e.jsx(p,{data:j}),`
`,e.jsx(a,{label:"Style customization",level:2}),`
`,e.jsxs(o.p,{children:["You can add your own style on the tooltip element using the part ",e.jsx(o.code,{children:"tooltip"}),"."]}),`
`,e.jsx(o.p,{children:"Custom CSS :"}),`
`,e.jsx(n,{of:c,sourceState:"shown"}),`
`,e.jsx(a,{label:"Examples",level:2}),`
`,e.jsx(a,{label:"Default",level:3}),`
`,e.jsx(n,{of:u,sourceState:"shown"}),`
`,e.jsx(a,{label:"Disabled",level:3}),`
`,e.jsx(n,{of:b,sourceState:"shown"}),`
`,e.jsx(a,{label:"Custom labels",level:3}),`
`,e.jsx(n,{of:x,sourceState:"shown"})]})}function I(t={}){const{wrapper:o}={...l(),...t.components};return o?e.jsx(o,{...t,children:e.jsx(s,{...t})}):s(t)}export{I as default};
