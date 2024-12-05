import{j as e}from"./jsx-runtime-Cz3huCOb.js";import{u as d}from"./index-BRdWgBGF.js";import{a as o}from"./index-BYszAjkJ.js";import{M as c,C as n,d as l}from"./index-C7ZQW9Xo.js";import{B as m}from"./Banner-4suhesey.js";import{H as i}from"./Heading-BWgLZzFp.js";import{T as p}from"./TechnicalSpecification-BRUZjjyt.js";import{F as s,O as u,C as f,D as x,a as h,b as j,A as y,M as v,c as b,P as F,I as g}from"./file-upload.stories-0jB-NiiY.js";import"./iframe-O-MMI8BM.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-B_J8iUie.js";import"./index-DX_4BEHg.js";import"./index-DrFu-skq.js";import"./index-D19O3a7h.js";import"./lit-html-D-ZEPr28.js";import"./controls-D697y8_r.js";const k="1.0.0",E="",O=[{kind:"javascript-module",path:"src/globals.ts",declarations:[],exports:[]},{kind:"javascript-module",path:"src/index.ts",declarations:[],exports:[{kind:"js",name:"OdsFileUpload",declaration:{name:"OdsFileUpload",module:"./components/ods-file-upload/ods-file-upload"}},{kind:"js",name:"ODS_FILE_REJECTION_CAUSE",declaration:{name:"ODS_FILE_REJECTION_CAUSE",module:"./constants/file-error"}},{kind:"js",name:"ODS_FILE_REJECTION_CAUSES",declaration:{name:"ODS_FILE_REJECTION_CAUSES",module:"./constants/file-error"}},{kind:"js",name:"OdsFileRejectionCause",declaration:{name:"OdsFileRejectionCause",module:"./constants/file-error"}},{kind:"js",name:"OdsFile",declaration:{name:"OdsFile",module:"./interfaces/attributes"}},{kind:"js",name:"OdsFileCancelEvent",declaration:{name:"OdsFileCancelEvent",module:"./interfaces/events"}},{kind:"js",name:"OdsFileChangeEvent",declaration:{name:"OdsFileChangeEvent",module:"./interfaces/events"}},{kind:"js",name:"OdsFileChangeEventDetail",declaration:{name:"OdsFileChangeEventDetail",module:"./interfaces/events"}},{kind:"js",name:"OdsFileRejectedEvent",declaration:{name:"OdsFileRejectedEvent",module:"./interfaces/events"}},{kind:"js",name:"OdsFileRejectedEventDetail",declaration:{name:"OdsFileRejectedEventDetail",module:"./interfaces/events"}}]},{kind:"javascript-module",path:"src/controller/ods-file-upload.ts",declarations:[{kind:"function",name:"filterMaxFiles",return:{type:{text:"FileValidationResult"}},parameters:[{name:"newFiles",type:{text:"OdsFile[]"}},{name:"currentFileCount",type:{text:"number"}},{name:"maxFile",optional:!0,type:{text:"number"}}]},{kind:"function",name:"filterMaxSize",return:{type:{text:"FileValidationResult"}},parameters:[{name:"files",type:{text:"OdsFile[]"}},{name:"maxSize",optional:!0,type:{text:"number"}}]},{kind:"function",name:"filterValidFiles",return:{type:{text:"FileValidationResult"}},parameters:[{name:"files",type:{text:"OdsFile[]"}},{name:"accept",type:{text:"string"}}]}],exports:[{kind:"js",name:"filterMaxFiles",declaration:{name:"filterMaxFiles",module:"src/controller/ods-file-upload.ts"}},{kind:"js",name:"filterMaxSize",declaration:{name:"filterMaxSize",module:"src/controller/ods-file-upload.ts"}},{kind:"js",name:"filterValidFiles",declaration:{name:"filterValidFiles",module:"src/controller/ods-file-upload.ts"}}]},{kind:"javascript-module",path:"src/constants/file-error.ts",declarations:[{kind:"variable",name:"ODS_FILE_REJECTION_CAUSES"}],exports:[{kind:"js",name:"ODS_FILE_REJECTION_CAUSE",declaration:{name:"ODS_FILE_REJECTION_CAUSE",module:"src/constants/file-error.ts"}},{kind:"js",name:"ODS_FILE_REJECTION_CAUSES",declaration:{name:"ODS_FILE_REJECTION_CAUSES",module:"src/constants/file-error.ts"}},{kind:"js",name:"OdsFileRejectionCause",declaration:{name:"OdsFileRejectionCause",module:"src/constants/file-error.ts"}}]},{kind:"javascript-module",path:"src/interfaces/attributes.ts",declarations:[],exports:[{kind:"js",name:"OdsFile",declaration:{name:"OdsFile",module:"src/interfaces/attributes.ts"}}]},{kind:"javascript-module",path:"src/interfaces/events.ts",declarations:[],exports:[{kind:"js",name:"OdsFileCancelEvent",declaration:{name:"OdsFileCancelEvent",module:"src/interfaces/events.ts"}},{kind:"js",name:"OdsFileChangeEvent",declaration:{name:"OdsFileChangeEvent",module:"src/interfaces/events.ts"}},{kind:"js",name:"OdsFileChangeEventDetail",declaration:{name:"OdsFileChangeEventDetail",module:"src/interfaces/events.ts"}},{kind:"js",name:"OdsFileRejectedEvent",declaration:{name:"OdsFileRejectedEvent",module:"src/interfaces/events.ts"}},{kind:"js",name:"OdsFileRejectedEventDetail",declaration:{name:"OdsFileRejectedEventDetail",module:"src/interfaces/events.ts"}}]},{kind:"javascript-module",path:"src/components/ods-file-upload/ods-file-upload.tsx",declarations:[{kind:"class",description:"",name:"OdsFileUpload",members:[{kind:"field",name:"inputFile",type:{text:"HTMLInputElement | undefined"},privacy:"private"},{kind:"field",name:"isDragging",type:{text:"boolean"},default:"false"},{kind:"field",name:"accept",type:{text:"string"},privacy:"public",default:"''"},{kind:"field",name:"acceptedFileLabel",type:{text:"string | undefined"},privacy:"public"},{kind:"field",name:"browseFileLabel",type:{text:"string"},privacy:"public",default:"'Browse files'"},{kind:"field",name:"dropzoneLabel",type:{text:"string"},privacy:"public",default:"'Drag & drop a file'"},{kind:"field",name:"error",type:{text:"string"},privacy:"public",default:"''"},{kind:"field",name:"files",type:{text:"OdsFile[]"},privacy:"public",default:"[]"},{kind:"field",name:"isDisabled",type:{text:"boolean"},privacy:"public",default:"false"},{kind:"field",name:"maxFile",type:{text:"number | undefined"},privacy:"public"},{kind:"field",name:"maxFileLabel",type:{text:"string | undefined"},privacy:"public"},{kind:"field",name:"maxSize",type:{text:"number | undefined"},privacy:"public"},{kind:"field",name:"maxSizeLabel",type:{text:"string | undefined"},privacy:"public"},{kind:"field",name:"uploadSuccessLabel",type:{text:"string"},privacy:"public",default:"'File uploaded'"},{kind:"method",name:"browseFiles",privacy:"private",return:{type:{text:"void"}}},{kind:"method",name:"handleFiles",privacy:"private",return:{type:{text:"void"}},parameters:[{name:"files",type:{text:"OdsFile[]"}}]},{kind:"method",name:"onDragEnter",privacy:"private",return:{type:{text:"void"}}},{kind:"method",name:"onDragLeave",privacy:"private",return:{type:{text:"void"}}},{kind:"method",name:"onDrop",privacy:"private",return:{type:{text:"void"}},parameters:[{name:"event",type:{text:"DragEvent"}}]},{kind:"method",name:"onFileCancel",privacy:"private",return:{type:{text:"void"}},parameters:[{name:"file",type:{text:"OdsFile"}}]},{kind:"method",name:"onFileChange",privacy:"private",return:{type:{text:"void"}},parameters:[{name:"event",type:{text:"Event"}}]},{kind:"method",name:"render",return:{type:{text:"FunctionalComponent"}}}],attributes:[{name:"accept",fieldName:"accept",type:{text:"string"}},{name:"accepted-file-label",fieldName:"acceptedFileLabel",type:{text:"string"}},{name:"browse-file-label",fieldName:"browseFileLabel",type:{text:"string"}},{name:"dropzone-label",fieldName:"dropzoneLabel",type:{text:"string"}},{name:"error",fieldName:"error",type:{text:"string"}},{name:"files",fieldName:"files",type:{text:"OdsFile[]"}},{name:"is-disabled",fieldName:"isDisabled",type:{text:"boolean"}},{name:"max-file",fieldName:"maxFile",type:{text:"number"}},{name:"max-file-label",fieldName:"maxFileLabel",type:{text:"string"}},{name:"max-size",fieldName:"maxSize",type:{text:"number"}},{name:"max-size-label",fieldName:"maxSizeLabel",type:{text:"string"}},{name:"upload-success-label",fieldName:"uploadSuccessLabel",type:{text:"string"}}],tagName:"ods-file-upload",events:[{name:"odsCancel",type:{text:"EventEmitter<OdsFile>"}},{name:"odsChange",type:{text:"EventEmitter<OdsFileChangeEventDetail>"}},{name:"odsRejected",type:{text:"EventEmitter<OdsFileRejectedEventDetail>"}}],customElement:!0}],exports:[{kind:"js",name:"OdsFileUpload",declaration:{name:"OdsFileUpload",module:"src/components/ods-file-upload/ods-file-upload.tsx"}},{kind:"custom-element-definition",name:"ods-file-upload",declaration:{name:"OdsFileUpload",module:"src/components/ods-file-upload/ods-file-upload.tsx"}}]},{kind:"javascript-module",path:"src/components/ods-file-upload-item/ods-file-upload-item.tsx",declarations:[{kind:"class",description:"",name:"OdsFileUploadItem",members:[{kind:"field",name:"cancelHandler",type:{text:"() => void"},privacy:"public"},{kind:"field",name:"error",type:{text:"string"},privacy:"public",default:"''"},{kind:"field",name:"isDisabled",type:{text:"boolean"},privacy:"public",default:"false"},{kind:"field",name:"isUploaded",type:{text:"boolean"},privacy:"public",default:"false"},{kind:"field",name:"name",type:{text:"string"},privacy:"public"},{kind:"field",name:"progress",type:{text:"number | undefined"},privacy:"public"},{kind:"field",name:"size",type:{text:"number"},privacy:"public"},{kind:"field",name:"successLabel",type:{text:"string"},privacy:"public"},{kind:"method",name:"renderStatus",privacy:"private",return:{type:{text:"FunctionalComponent"}}},{kind:"method",name:"render",return:{type:{text:"FunctionalComponent"}}}],attributes:[{name:"cancel-handler",fieldName:"cancelHandler",type:{text:"() => void"}},{name:"error",fieldName:"error",type:{text:"string"}},{name:"is-disabled",fieldName:"isDisabled",type:{text:"boolean"}},{name:"is-uploaded",fieldName:"isUploaded",type:{text:"boolean"}},{name:"name",fieldName:"name",type:{text:"string"}},{name:"progress",fieldName:"progress",type:{text:"number"}},{name:"size",fieldName:"size",type:{text:"number"}},{name:"success-label",fieldName:"successLabel",type:{text:"string"}}],tagName:"ods-file-upload-item",events:[],customElement:!0}],exports:[{kind:"js",name:"OdsFileUploadItem",declaration:{name:"OdsFileUploadItem",module:"src/components/ods-file-upload-item/ods-file-upload-item.tsx"}},{kind:"custom-element-definition",name:"ods-file-upload-item",declaration:{name:"OdsFileUploadItem",module:"src/components/ods-file-upload-item/ods-file-upload-item.tsx"}}]}],C={ODS_FILE_REJECTION_CAUSE:{maxFileReached:{type:"string",value:"max-file-reached"},sizeTooLarge:{type:"string",value:"size-too-large"},wrongFormat:{type:"string",value:"wrong-format"}}},S={schemaVersion:k,readme:E,modules:O,enumPlugin:C};function r(a){const t={code:"code",li:"li",p:"p",ul:"ul",...d(),...a.components};return e.jsxs(e.Fragment,{children:[e.jsx(c,{of:s,name:"Technical information"}),`
`,e.jsx(m,{of:s}),`
`,e.jsx(i,{label:"Overview",level:2}),`
`,e.jsx(n,{of:u,sourceState:"none"}),`
`,e.jsx(p,{data:S}),`
`,e.jsx(i,{label:"How to use?",level:2}),`
`,e.jsx(t.p,{children:`The component does not actually handle any upload, nor does it knows the status of each file (regarding progress or error),
as the upload process is different for every integration.`}),`
`,e.jsxs(t.p,{children:["All the files you'll receive from this component are typed as ",e.jsx(t.code,{children:"OdsFile"}),"."]}),`
`,e.jsxs(t.p,{children:["This is an extension of the native ",e.jsx(t.code,{children:"File"})," interface with optional attribute that you can set to alter the display:"]}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsxs(t.li,{children:[e.jsx(t.code,{children:"error"}),": set this if the upload of the file fails, in order to display an error message below the file."]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.code,{children:"isUploaded"}),": set this on file upload success, in order to display a success message below the file."]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.code,{children:"odsId"}),": a generated unique id to help you identify the current file being manipulated, you can of course ignore it and use your own ",e.jsx(t.code,{children:"id"})," attribute directly."]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.code,{children:"progress"}),": update this during the upload to display a progress-bar with current file upload progress."]}),`
`]}),`
`,e.jsx(i,{label:"Adding files",level:3}),`
`,e.jsxs(t.p,{children:[`When a file is selected/dropped and pass the validation (if either accept or max-file are set), you'll receive an
`,e.jsx(t.code,{children:"odsFileChange"})," event containing an Array of OdsFile."]}),`
`,e.jsx(t.p,{children:"The event will contain:"}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsx(t.li,{children:"the array of added OdsFile"}),`
`,e.jsxs(t.li,{children:["an ",e.jsx(t.code,{children:"noError"}),` boolean indicating if there was any type or max file rejection. It can be useful to manage the global error state
as rejection may occurs at the same time as actual change (ex: `,e.jsx(t.code,{children:'max-file="2"'})," and you drop 3 files, 2 get accepted and one get rejected)"]}),`
`]}),`
`,e.jsx(t.p,{children:"This is the right place to:"}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsx(t.li,{children:"initiate the upload call"}),`
`,e.jsx(t.li,{children:"init files progress to 0"}),`
`,e.jsx(t.li,{children:"set up your request progress/end/error listeners"}),`
`]}),`
`,e.jsx(t.p,{children:"To update the component list, set the files attributes with the new full list of files, ex:"}),`
`,e.jsx(l,{code:`
myFileUpload.files = (myFileUpload.files || []).concat(event.detail.files);
`,dark:"true",language:"typescript"}),`
`,e.jsx(i,{label:"Removing file",level:3}),`
`,e.jsxs(t.p,{children:["When a file is removed/cancelled, you'll receive an ",e.jsx(t.code,{children:"odsFileCancel"})," event containing the relevant OdsFile."]}),`
`,e.jsxs(t.p,{children:["If the file is not yet uploaded, this is the right place to abort your upload request (using native ",e.jsx(t.code,{children:"AbortSignal"})," or specific external library feature)."]}),`
`,e.jsx(t.p,{children:"You can then update the component list with the new full list of files, ex:"}),`
`,e.jsx(l,{code:`
myFileUpload.files = myFileUpload.files.filter((file) => file.odsId !== detail.odsId);
`,dark:"true",language:"typescript"}),`
`,e.jsx(i,{label:"Managing errors",level:3}),`
`,e.jsx(t.p,{children:"There are two different kind of errors that you may want to display, global error and per-file error."}),`
`,e.jsxs(t.p,{children:["To display an error specific to a file, you should handle it directly in your request error handler by setting the ",e.jsx(t.code,{children:"error"})," attribute on the file."]}),`
`,e.jsxs(t.p,{children:["For global error, you should listen to the ",e.jsx(t.code,{children:"odsFileRejected"})," event."]}),`
`,e.jsx(t.p,{children:"This event is triggered:"}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsxs(t.li,{children:["if a file is dropped that doesn't match the accept pattern (if ",e.jsx(t.code,{children:"accept"})," set)"]}),`
`,e.jsxs(t.li,{children:["if the max file limit is reached (if ",e.jsx(t.code,{children:"max-file"})," is set)"]}),`
`,e.jsxs(t.li,{children:["if a file size is bigger then the max size limit (if ",e.jsx(t.code,{children:"max-size"})," is set)"]}),`
`]}),`
`,e.jsx(t.p,{children:"The event will contain:"}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsx(t.li,{children:"an array of rejected files"}),`
`,e.jsx(t.li,{children:"the reason of the rejection, either file type or max file"}),`
`]}),`
`,e.jsxs(t.p,{children:["You can then set the ",e.jsx(t.code,{children:"error"})," attribute of your ",e.jsx(t.code,{children:"ods-file-upload"})," accordingly."]}),`
`,e.jsx(i,{label:"Style customization",level:2}),`
`,e.jsx(t.p,{children:"You can add your own style on the file-upload element using the parts:"}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsxs(t.li,{children:[e.jsx(t.code,{children:"dropzone"})," to customize the top dropzone part"]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.code,{children:"file-list"})," to customize the bottom file list part"]}),`
`]}),`
`,e.jsx(t.p,{children:"Custom CSS:"}),`
`,e.jsx(n,{of:f,sourceState:"shown"}),`
`,e.jsx(i,{label:"Examples",level:2}),`
`,e.jsx(i,{label:"Default",level:3}),`
`,e.jsx(n,{of:x,sourceState:"shown"}),`
`,e.jsx(i,{label:"Disabled",level:3}),`
`,e.jsx(n,{of:h,sourceState:"shown"}),`
`,e.jsx(i,{label:"Custom labels",level:3}),`
`,e.jsx(n,{of:j,sourceState:"shown"}),`
`,e.jsx(i,{label:"Accept only specific file type",level:3}),`
`,e.jsxs(t.p,{children:["To limit the file types that can be uploaded, you can use the ",e.jsx(t.code,{children:"accept"})," attribute."]}),`
`,e.jsxs(t.p,{children:["It works exactly the same as the one from the native ",e.jsx(o,{href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/accept",label:"input file",target:"_blank"}),"."]}),`
`,e.jsx(n,{of:y,sourceState:"shown"}),`
`,e.jsx(i,{label:"Limit the maximum number of file",level:3}),`
`,e.jsx(n,{of:v,sourceState:"shown"}),`
`,e.jsx(i,{label:"Limit the maximum size of each file",level:3}),`
`,e.jsxs(t.p,{children:[e.jsx(t.code,{children:"max-size"})," value expect a number of bytes, based on 1024b === 1kb."]}),`
`,e.jsx(t.p,{children:"For example:"}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsxs(t.li,{children:["to limit to 1Mb, you should set 1024 * 1024 = ",e.jsx(t.code,{children:"1048576"})]}),`
`,e.jsxs(t.li,{children:["to limit to 500Mb, you should set (1024 * 1024) * 500 = ",e.jsx(t.code,{children:"524288000"})]}),`
`]}),`
`,e.jsx(n,{of:b,sourceState:"shown"}),`
`,e.jsx(i,{label:"Send to server and display progress",level:3}),`
`,e.jsx(n,{of:F,sourceState:"shown"}),`
`,e.jsx(i,{label:"Inverse file list order",level:3}),`
`,e.jsx(n,{of:g,sourceState:"shown"})]})}function B(a={}){const{wrapper:t}={...d(),...a.components};return t?e.jsx(t,{...a,children:e.jsx(r,{...a})}):r(a)}export{B as default};
