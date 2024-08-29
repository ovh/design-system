import{j as e}from"./jsx-runtime-Dn0LW--f.js";import{u as r}from"./index-DeyDdHvX.js";import{M as o,C as n,d as a}from"./index-BM3JsZOq.js";import{B as d}from"./banner-DPlTyHjv.js";import{F as t,O as c,C as h,D as u,a as f,b as p,A as x,M as j,c as m,P as g,I as y}from"./file-upload.stories-BtrCo1At.js";import"./iframe-6_jBXMSq.js";import"../sb-preview/runtime.js";import"./commonjsHelpers-Cpj98o6Y.js";import"./index-B_J8iUie.js";import"./index-DX_4BEHg.js";import"./index-DrFu-skq.js";import"./lit-html-D-ZEPr28.js";import"./control-C1r2wu67.js";const b="## OdsFileUpload\n### Properties\n| Property | Type | Required | Default value |\n| --- | --- | --- | --- |\n| accept | `string` | `true` | `''` |\n| acceptedFileLabel | `string` | `false` | `undefined` |\n| browseFileLabel | `string` | `true` | `'Browse files'` |\n| dropzoneLabel | `string` | `true` | `'Drag & drop a file'` |\n| error | `string` | `true` | `''` |\n| files | `OdsFile[]` | `true` | `[]` |\n| isDisabled | `boolean` | `true` | `false` |\n| maxFile | `number` | `false` | `undefined` |\n| maxFileLabel | `string` | `false` | `undefined` |\n| maxSize | `number` | `false` | `undefined` |\n| maxSizeLabel | `string` | `false` | `undefined` |\n| uploadSuccessLabel | `string` | `true` | `'File uploaded'` |\n\n\n### Events\n• **odsCancel**(): `EventEmitter<OdsFile>`\n\n• **odsChange**(): `EventEmitter<OdsFileChangeEventDetail>`\n\n• **odsRejected**(): `EventEmitter<OdsFileRejectedEventDetail>`\n### Enums\n#### ODS_FILE_REJECTION_CAUSE\n\n• **maxFileReached** = `\"max-file-reached\"`\n\n• **sizeTooLarge** = `\"size-too-large\"`\n\n• **wrongFormat** = `\"wrong-format\"`\n\n";function l(s){const i={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...r(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:t,name:"Technical information"}),`
`,e.jsx(d,{of:t}),`
`,e.jsx(i.h2,{id:"overview",children:"Overview"}),`
`,e.jsx(n,{of:c,sourceState:"none"}),`
`,e.jsx(a,{children:b}),`
`,e.jsx(i.h1,{id:"how-to-use",children:"How to use?"}),`
`,e.jsx(i.p,{children:`The component does not actually handle any upload, nor does it knows the status of each file (regarding progress or error),
as the upload process is different for every integration.`}),`
`,e.jsxs(i.p,{children:["All the files you'll receive from this component are typed as ",e.jsx(i.code,{children:"OdsFile"}),"."]}),`
`,e.jsxs(i.p,{children:["This is an extension of the native ",e.jsx(i.code,{children:"File"})," interface with optional attribute that you can set to alter the display:"]}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"error"}),": set this if the upload of the file fails, in order to display an error message below the file."]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"isUploaded"}),": set this on file upload success, in order to display a success message below the file."]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"odsId"}),": a generated unique id to help you identify the current file being manipulated, you can of course ignore it and use your own ",e.jsx(i.code,{children:"id"})," attribute directly."]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"progress"}),": update this during the upload to display a progress-bar with current file upload progress."]}),`
`]}),`
`,e.jsx(i.h3,{id:"adding-files",children:"Adding files"}),`
`,e.jsxs(i.p,{children:[`When a file is selected/dropped and pass the validation (if either accept or max-file are set), you'll receive an
`,e.jsx(i.code,{children:"odsFileChange"})," event containing an Array of OdsFile."]}),`
`,e.jsx(i.p,{children:"The event will contain:"}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsx(i.li,{children:"the array of added OdsFile"}),`
`,e.jsxs(i.li,{children:["an ",e.jsx(i.code,{children:"noError"}),` boolean indicating if there was any type or max file rejection. It can be useful to manage the global error state
as rejection may occurs at the same time as actual change (ex: `,e.jsx(i.code,{children:'max-file="2"'})," and you drop 3 files, 2 get accepted and one get rejected)"]}),`
`]}),`
`,e.jsx(i.p,{children:"This is the right place to:"}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsx(i.li,{children:"initiate the upload call"}),`
`,e.jsx(i.li,{children:"init files progress to 0"}),`
`,e.jsx(i.li,{children:"set up your request progress/end/error listeners"}),`
`]}),`
`,e.jsx(i.p,{children:"To update the component list, set the files attributes with the new full list of files, ex:"}),`
`,e.jsx(i.pre,{children:e.jsx(i.code,{className:"language-js",children:`myFileUpload.files = (myFileUpload.files || []).concat(event.detail.files);
`})}),`
`,e.jsx(i.h3,{id:"removing-file",children:"Removing file"}),`
`,e.jsxs(i.p,{children:["When a file is removed/cancelled, you'll receive an ",e.jsx(i.code,{children:"odsFileCancel"})," event containing the relevant OdsFile."]}),`
`,e.jsxs(i.p,{children:["If the file is not yet uploaded, this is the right place to abort your upload request (using native ",e.jsx(i.code,{children:"AbortSignal"})," or specific external library feature)."]}),`
`,e.jsx(i.p,{children:"You can then update the component list with the new full list of files, ex:"}),`
`,e.jsx(i.pre,{children:e.jsx(i.code,{className:"language-js",children:`myFileUpload.files = myFileUpload.files.filter((file) => file.odsId !== detail.odsId);
`})}),`
`,e.jsx(i.h3,{id:"managing-errors",children:"Managing errors"}),`
`,e.jsx(i.p,{children:"There are two different kind of errors that you may want to display, global error and per-file error."}),`
`,e.jsxs(i.p,{children:["To display an error specific to a file, you should handle it directly in your request error handler by setting the ",e.jsx(i.code,{children:"error"})," attribute on the file."]}),`
`,e.jsxs(i.p,{children:["For global error, you should listen to the ",e.jsx(i.code,{children:"odsFileRejected"})," event."]}),`
`,e.jsx(i.p,{children:"This event is triggered:"}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:["if a file is dropped that doesn't match the accept pattern (if ",e.jsx(i.code,{children:"accept"})," set)"]}),`
`,e.jsxs(i.li,{children:["if the max file limit is reached (if ",e.jsx(i.code,{children:"max-file"})," is set)"]}),`
`,e.jsxs(i.li,{children:["if a file size is bigger then the max size limit (if ",e.jsx(i.code,{children:"max-size"})," is set)"]}),`
`]}),`
`,e.jsx(i.p,{children:"The event will contain:"}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsx(i.li,{children:"an array of rejected files"}),`
`,e.jsx(i.li,{children:"the reason of the rejection, either file type or max file"}),`
`]}),`
`,e.jsxs(i.p,{children:["You can then set the ",e.jsx(i.code,{children:"error"})," attribute of your ",e.jsx(i.code,{children:"ods-file-upload"})," accordingly."]}),`
`,e.jsx(i.h2,{id:"style-customization",children:"Style customization"}),`
`,e.jsx(i.p,{children:"You can add your own style on the file-upload element using the parts:"}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"dropzone"})," to customize the top dropzone part"]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"file-list"})," to customize the bottom file list part"]}),`
`]}),`
`,e.jsx(i.p,{children:"Custom CSS:"}),`
`,e.jsx(n,{of:h,sourceState:"shown"}),`
`,e.jsx(i.h2,{id:"examples",children:"Examples"}),`
`,e.jsx(i.h3,{id:"default",children:"Default"}),`
`,e.jsx(n,{of:u,sourceState:"shown"}),`
`,e.jsx(i.h3,{id:"disabled",children:"Disabled"}),`
`,e.jsx(n,{of:f,sourceState:"shown"}),`
`,e.jsx(i.h3,{id:"custom-labels",children:"Custom labels"}),`
`,e.jsx(n,{of:p,sourceState:"shown"}),`
`,e.jsx(i.h3,{id:"accept-only-specific-file-type",children:"Accept only specific file type"}),`
`,e.jsxs(i.p,{children:["To limit the file types that can be uploaded, you can use the ",e.jsx(i.code,{children:"accept"})," attribute."]}),`
`,e.jsxs(i.p,{children:["It works exactly the same as the one from the native ",e.jsx(i.a,{href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/accept",rel:"nofollow",children:"input file"}),"."]}),`
`,e.jsx(n,{of:x,sourceState:"shown"}),`
`,e.jsx(i.h3,{id:"limit-the-maximum-number-of-file",children:"Limit the maximum number of file"}),`
`,e.jsx(n,{of:j,sourceState:"shown"}),`
`,e.jsx(i.h3,{id:"limit-the-maximum-size-of-each-file",children:"Limit the maximum size of each file"}),`
`,e.jsxs(i.p,{children:[e.jsx(i.code,{children:"max-size"})," value expect a number of bytes, based on 1024b === 1kb."]}),`
`,e.jsx(i.p,{children:"For example:"}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:["to limit to 1Mb, you should set 1024 * 1024 = ",e.jsx(i.code,{children:"1048576"})]}),`
`,e.jsxs(i.li,{children:["to limit to 500Mb, you should set (1024 * 1024) * 500 = ",e.jsx(i.code,{children:"524288000"})]}),`
`]}),`
`,e.jsx(n,{of:m,sourceState:"shown"}),`
`,e.jsx(i.h3,{id:"send-to-server-and-display-progress",children:"Send to server and display progress"}),`
`,e.jsx(n,{of:g,sourceState:"shown"}),`
`,e.jsx(i.h3,{id:"inverse-file-list-order",children:"Inverse file list order"}),`
`,e.jsx(n,{of:y,sourceState:"shown"})]})}function U(s={}){const{wrapper:i}={...r(),...s.components};return i?e.jsx(i,{...s,children:e.jsx(l,{...s})}):l(s)}export{U as default};
