import{j as e}from"./jsx-runtime-CtvdRJNw.js";import{u as a}from"./index-BB9dT2Es.js";import{M as r,C as d}from"./index-B52cN8Ji.js";import{F as t,O as c}from"./file-upload.stories-DV0PjalR.js";import{B as p}from"./Banner-C-cuOusb.js";import{I as h,A as m,B as u}from"./IdentityCard-C6dtKVMG.js";import{H as s}from"./Heading-DkXmkwCf.js";import{S as o}from"./StorybookLink-vz9hS9Kq.js";import"./iframe-DOFBAWyz.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-B_J8iUie.js";import"./index-DX_4BEHg.js";import"./index-DrFu-skq.js";import"./lit-html-D-ZEPr28.js";import"./controls-DpsgTNdU.js";import"./index-CnlqR0TT.js";import"./index-96Y3MfGk.js";function i(l){const n={code:"code",em:"em",img:"img",li:"li",ol:"ol",p:"p",span:"span",strong:"strong",ul:"ul",...a(),...l.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{of:t,name:"Documentation"}),`
`,e.jsx(p,{of:t}),`
`,e.jsx(n.p,{children:e.jsxs(n.em,{children:[e.jsx(n.strong,{children:"File Upload"})," allows users to select one or more files to upload to a specific location."]})}),`
`,e.jsx(d,{of:c,sourceState:"none"}),`
`,e.jsx(s,{label:"Overview",level:2}),`
`,e.jsxs(h,{aliases:["File input","File uploader","Dropzone"],atomicType:m.organism,figmaLink:"https://www.figma.com/design/9jDDTcR4a9jPRFcdjawAlf/ODS---UI-Kit?node-id=55-24358",githubUrl:"https://github.com/ovh/design-system/tree/master/packages/ods/src/components/file-upload",name:"File Upload",relatedComponents:[{name:"Button"},{name:"Divider"},{name:"Icon"},{name:"Progress Bar"},{name:"Text"}],children:[e.jsxs(n.p,{children:["The ",e.jsx(n.strong,{children:"File Upload"})," component is used to enable users to upload files to a server or application."]}),e.jsx(n.p,{children:`It provides a way to browse, select, and upload files, and is accompanied by progress indicators and feedback
messages to guide users through the process.`})]}),`
`,e.jsx(s,{label:"Anatomy",level:2}),`
`,e.jsx(n.p,{children:e.jsx(n.img,{src:"components/file-upload/anatomy.png",alt:"Component anatomy",title:"Component anatomy"})}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:["A decorative ",e.jsx(o,{kind:"ODS Components/Icon",label:"Icon",story:"Documentation"})," (optional)"]}),`
`,e.jsxs(n.li,{children:["A ",e.jsx(o,{kind:"ODS Components/Text",label:"Text",story:"Documentation"})," as title"]}),`
`,e.jsxs(n.li,{children:["A ",e.jsx(o,{kind:"ODS Components/Text",label:"Text",story:"Documentation"})," explaining formats"]}),`
`,e.jsxs(n.li,{children:[e.jsx(o,{kind:"ODS Components/Button",label:"Button",story:"Documentation"})," to trigger upload dialog"]}),`
`,e.jsx(n.li,{children:"A drop zone: the File component itself"}),`
`,e.jsxs(n.li,{children:["A ",e.jsx(n.code,{children:"file"})," ",e.jsx(o,{kind:"ODS Components/Icon",label:"Icon",story:"Documentation"})," and a ",e.jsx(o,{kind:"ODS Components/Text",label:"Text",story:"Documentation"})," displaying the uploading file name and its weight"]}),`
`,e.jsxs(n.li,{children:["A ",e.jsx(n.code,{children:"close"})," icon ",e.jsx(o,{kind:"ODS Components/Button",label:"Button",story:"Documentation"})," to interrupt the file uploading or remove the uploaded file"]}),`
`,e.jsxs(n.li,{children:["A ",e.jsx(o,{kind:"ODS Components/Progress Bar",label:"Progress Bar",story:"Documentation"})," to indicate how the ",e.jsx(n.strong,{children:"File upload"})," is progressing"]}),`
`,e.jsxs(n.li,{children:["A success ",e.jsx(o,{kind:"ODS Components/Text",label:"Text",story:"Documentation"})," with ",e.jsx(n.code,{children:"check"})," ",e.jsx(o,{kind:"ODS Components/Icon",label:"Icon",story:"Documentation"})," to indicate that the file has been uploaded"]}),`
`,e.jsxs(n.li,{children:["An ",e.jsx(n.code,{children:"error"})," ",e.jsx(o,{kind:"ODS Components/Text",label:"Text",story:"Documentation"})," to indicate something went wrong with the ",e.jsx(n.strong,{children:"File upload"})]}),`
`]}),`
`,e.jsx(s,{label:"Usage",level:2}),`
`,e.jsxs(n.p,{children:["Use the ",e.jsx(n.strong,{children:"File Upload"})," component when you need users to submit files, such as documents, images, or other data."]}),`
`,e.jsx(n.p,{children:"Common use cases include form submissions, profile picture updates, and document management systems."}),`
`,e.jsx(s,{label:"Dos & Don'ts",level:3}),`
`,e.jsx(u,{donts:[e.jsxs(n.span,{children:["- Use File Upload component in a ",e.jsx(o,{kind:"ODS Components/Modal",label:"Modal",story:"Documentation"})]})],dos:["- Use one File Upload component for plural file upload inside a single page","- Use a helper with Form Field to inform users when the number of files to upload is limited","- Use short and concise success message","- Explain clearly the error context when an error occurred"]}),`
`,e.jsx(s,{label:"Placement",level:2}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"File Upload"})," component can be part of a complex form, or displayed as a standalone."]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"File Upload"})," has an automatic default width, based on its content."]}),`
`,e.jsx(s,{label:"Behavior",level:2}),`
`,e.jsx(s,{label:"Selecting files",level:3}),`
`,e.jsxs(n.p,{children:['When selecting the "Browse" ',e.jsx(o,{kind:"ODS Components/Button",label:"Button",story:"Documentation"}),", the native file selection popup opens to retrieve the needed file to upload."]}),`
`,e.jsx(s,{label:"Drag & Drop",level:3}),`
`,e.jsxs(n.p,{children:["Users can drag & drop a file, the drop zone being the whole ",e.jsx(n.strong,{children:"File Upload"})," component."]}),`
`,e.jsx(s,{label:"Uploading files",level:3}),`
`,e.jsx(s,{label:"With known size",level:4}),`
`,e.jsx(n.p,{children:"When a file upload is in progress, the file name and its size are displayed."}),`
`,e.jsxs(n.p,{children:["A ",e.jsx(o,{kind:"ODS Components/Progress Bar",label:"Progress Bar",story:"Documentation"})," with its percentage is displayed to indicate how the upload is progressing. It remains visible as long as the file uploading is not finished yet."]}),`
`,e.jsxs(n.p,{children:["A close icon ",e.jsx(o,{kind:"ODS Components/Button",label:"Button",story:"Documentation"})," is displayed as soon as a file upload is in progress. It is displayed as long as the user does not interrupt the upload or removes an already uploaded file."]}),`
`,e.jsx(s,{label:"With unknown size",level:4}),`
`,e.jsx(n.p,{children:"In some situations, file size is hidden in the uploading process due to an unknown file size."}),`
`,e.jsx(s,{label:"Upload complete",level:3}),`
`,e.jsx(s,{label:"With success",level:4}),`
`,e.jsxs(n.p,{children:["A ",e.jsx(n.code,{children:"success"})," ",e.jsx(o,{kind:"ODS Components/Text",label:"Text",story:"Documentation"})," is displayed, replacing the previous ",e.jsx(o,{kind:"ODS Components/Progress Bar",label:"Progress Bar",story:"Documentation"}),", as soon as a file has been uploaded, meaning the upload is successful and complete."]}),`
`,e.jsx(s,{label:"With error",level:4}),`
`,e.jsxs(n.p,{children:["If the uploading of a file went wrong, a specific ",e.jsx(n.code,{children:"error"})," ",e.jsx(o,{kind:"ODS Components/Text",label:"Text",story:"Documentation"})," is displayed below the uploaded file."]}),`
`,e.jsxs(n.p,{children:["The user is still able to upload another file but the ",e.jsx(n.code,{children:"error"})," ",e.jsx(o,{kind:"ODS Components/Text",label:"Text",story:"Documentation"})," will persist until user removes the file in ",e.jsx(n.code,{children:"error"}),"."]}),`
`,e.jsxs(n.p,{children:["When several files are in ",e.jsx(n.code,{children:"error"}),", there will be an accumulation of ",e.jsx(n.code,{children:"error"})," messages, each below their related files."]}),`
`,e.jsxs(n.p,{children:["When a file is in ",e.jsx(n.code,{children:"error"})," and the user uploads a file without any issue, success ",e.jsx(o,{kind:"ODS Components/Text",label:"Text",story:"Documentation"})," is triggered as expected below this file but, the ",e.jsx(n.code,{children:"error"})," ",e.jsx(o,{kind:"ODS Components/Text",label:"Text",story:"Documentation"})," persists below the file in error."]}),`
`,e.jsx(n.p,{children:"Depending on the error, the global component can be displayed in an error state."}),`
`,e.jsx(s,{label:"Extra behavior",level:3}),`
`,e.jsx(s,{label:"Global configuration / error",level:4}),`
`,e.jsx(n.p,{children:"Number of files, maximum sizes and expected formats can be set globally inside the component."}),`
`,e.jsxs(n.p,{children:["A global ",e.jsx(n.code,{children:"error"})," ",e.jsx(o,{kind:"ODS Components/Text",label:"Text",story:"Documentation"})," and a ",e.jsx(o,{kind:"ODS Components/Divider",label:"Divider",story:"Documentation"})," are displayed when:"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Wrong file format has been uploaded"}),`
`,e.jsx(n.li,{children:"Maximum file size exceeded"}),`
`,e.jsx(n.li,{children:"Maximum number of files exceeded"}),`
`]}),`
`,e.jsx(n.p,{children:"The global component is displayed in an error state in this situation."}),`
`,e.jsx(s,{label:"Disabled",level:4}),`
`,e.jsxs(n.p,{children:["When ",e.jsx(n.strong,{children:"File Upload"})," is disabled, user cannot interact with the ",e.jsx(o,{kind:"ODS Components/Button",label:"Button",story:"Documentation"})," and drag & drop feature is not available."]}),`
`,e.jsx(s,{label:"Cancel a file upload in progress",level:4}),`
`,e.jsxs(n.p,{children:["A click or press on the ",e.jsx(n.code,{children:"close"})," icon ",e.jsx(o,{kind:"ODS Components/Button",label:"Button",story:"Documentation"})," interrupts the upload (or cancel an uploaded file)."]}),`
`,e.jsxs(n.p,{children:["When the upload is canceled, the file upload is removed and the ",e.jsx(n.strong,{children:"File Upload"})," component returns to its default state, except for any other files in the queue."]}),`
`,e.jsx(n.p,{children:"In case some other files have already been uploaded, and the user cancels an uploading file, the next one will take its place in the queue and so on."}),`
`,e.jsx(s,{label:"Remove an already uploaded file",level:4}),`
`,e.jsxs(n.p,{children:["An already uploaded file can be removed by clicking or pressing the ",e.jsx(n.code,{children:"close"})," icon ",e.jsx(o,{kind:"ODS Components/Button",label:"Button",story:"Documentation"})," anytime."]}),`
`,e.jsx(n.p,{children:"Same as cancelling a file while it is uploading, if several files have already been uploaded and the user cancels an uploading file, the next one will take its place in the queue and so on."}),`
`,e.jsx(s,{label:"Variation",level:2}),`
`,e.jsx(n.p,{children:"N/A"}),`
`,e.jsx(s,{label:"Accessibility",level:2}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"Tab"})," key allows to focus on the inner ",e.jsx(o,{kind:"ODS Components/Button",label:"Button",story:"Documentation"})," element in the File Upload."]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"Enter"}),"/",e.jsx(n.code,{children:"Space"})," while this ",e.jsx(o,{kind:"ODS Components/Button",label:"Button",story:"Documentation"})," is focused trigger the native file upload dialog."]}),`
`,e.jsxs(n.p,{children:["You can also tabulate throughout all ",e.jsx(n.code,{children:"close"})," icon ",e.jsx(o,{kind:"ODS Components/Button",label:"Button",story:"Documentation"})," of uploaded files."]})]})}function I(l={}){const{wrapper:n}={...a(),...l.components};return n?e.jsx(n,{...l,children:e.jsx(i,{...l})}):i(l)}export{I as default};
