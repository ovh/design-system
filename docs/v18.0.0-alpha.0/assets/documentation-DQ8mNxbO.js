import{j as e}from"./jsx-runtime-3v6rTKkY.js";import{u as l}from"./index-B5y3xRNA.js";import{M as c,C as a,d as t}from"./index-sugWq352.js";import{B as h}from"./banner-BU_1gqe2.js";import{F as r,O as p}from"./file-upload.stories-BtrCo1At.js";import{O as o}from"./index-BjLrujv2.js";import{O as i}from"./index-DB8q6ij-.js";import"./iframe-D98u-D7f.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-B_J8iUie.js";import"./index-DX_4BEHg.js";import"./index-DrFu-skq.js";import"./lit-html-D-ZEPr28.js";import"./control-C1r2wu67.js";import"./ods-toggle2-Du4-LCNk.js";import"./ods-icon-MrkrUMg1.js";function d(s){const n={a:"a",code:"code",em:"em",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...l(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(c,{of:r,name:"Documentation"}),`
`,e.jsx(h,{of:r}),`
`,e.jsx(n.p,{children:e.jsxs(n.em,{children:[e.jsx(n.strong,{children:"File Upload"})," allows users to select one or more files to upload to a specific location."]})}),`
`,e.jsx(a,{of:p,sourceState:"none"}),`
`,e.jsx(n.h2,{id:"overview",children:"Overview"}),`
`,e.jsxs("div",{children:[e.jsxs("div",{id:"description",children:[e.jsxs(n.p,{children:["The ",e.jsx(n.strong,{children:"File Upload"})," component is used to enable users to upload files to a server or application."]}),e.jsx(n.p,{children:`It provides a way to browse, select, and upload files, and is accompanied by progress indicators and feedback
messages to guide users through the process.`})]}),e.jsx("table",{children:e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("th",{scope:"row",children:"Name"}),e.jsx("td",{children:e.jsx("strong",{children:"File Upload"})})]}),e.jsxs("tr",{children:[e.jsx("th",{scope:"row",children:"Also known as"}),e.jsx("td",{children:e.jsx("em",{children:"File input, File uploader, Dropzone"})})]}),e.jsxs("tr",{children:[e.jsx("th",{scope:"row",children:"Atomic type"}),e.jsx("td",{children:e.jsxs("a",{href:"https://atomicdesign.bradfrost.com/chapter-2/#organisms",children:["Organism",e.jsx(o,{name:i.externalLink,style:{fontSize:".7rem",paddingLeft:".3rem",paddingRight:".2rem"}})]})})]}),e.jsxs("tr",{children:[e.jsx("th",{scope:"row",children:"Related component(s)"}),e.jsx("td",{children:e.jsxs(n.p,{children:[e.jsx(n.a,{href:"?path=/docs/ods-components-icon--documentation",children:e.jsx(n.strong,{children:"Icon"})}),`,
`,e.jsx(n.a,{href:"?path=/docs/ods-components-button--documentation",children:e.jsx(n.strong,{children:"Button"})}),`,
`,e.jsx(n.a,{href:"?path=/docs/ods-components-divider--documentation",children:e.jsx(n.strong,{children:"Divider"})}),", ",e.jsx(n.a,{href:"?path=/docs/ods-components-progress-bar--documentation",children:e.jsx(n.strong,{children:`Progress
Bar`})}),`,
`,e.jsx(n.a,{href:"?path=/docs/ods-components-text--documentation",children:e.jsx(n.strong,{children:"Text"})})]})})]}),e.jsxs("tr",{children:[e.jsx("th",{scope:"row",children:"Links"}),e.jsxs("td",{children:[e.jsxs("a",{href:"https://www.figma.com/proto/tIKzHa5KvHHyosgIgyBswB/Design-Tokens",children:["Design",e.jsx(o,{name:i.externalLink,style:{fontSize:".7rem",paddingLeft:".3rem",paddingRight:".2rem"}})]}),e.jsx("br",{}),e.jsxs("a",{href:"https://github.com/ovh/design-system/tree/master/packages/components/src/file-upload",children:["Github",e.jsx(o,{name:i.externalLink,style:{fontSize:".7rem",paddingLeft:".3rem",paddingRight:".2rem"}})]})]})]})]})})]}),`
`,e.jsx(n.h2,{id:"anatomy",children:"Anatomy"}),`
`,e.jsx(n.p,{children:e.jsx(n.img,{src:"components/file-upload/anatomy.png",alt:"Component anatomy",title:"Component anatomy"})}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:["A decorative ",e.jsx(n.a,{href:"?path=/docs/ods-components-icon--documentation",children:e.jsx(n.strong,{children:"Icon"})})," (optional)"]}),`
`,e.jsxs(n.li,{children:["A ",e.jsx(n.a,{href:"?path=/docs/ods-components-text--documentation",children:e.jsx(n.strong,{children:"Text"})})," as title"]}),`
`,e.jsxs(n.li,{children:["A ",e.jsx(n.a,{href:"?path=/docs/ods-components-text--documentation",children:e.jsx(n.strong,{children:"Text"})})," explaining formats"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"?path=/docs/ods-components-button--documentation",children:e.jsx(n.strong,{children:"Button"})})," to trigger upload dialog"]}),`
`,e.jsx(n.li,{children:"A drop zone: the File component itself"}),`
`,e.jsxs(n.li,{children:["A ",e.jsx(n.code,{children:"file"})," ",e.jsx(n.a,{href:"?path=/docs/ods-components-icon--documentation",children:e.jsx(n.strong,{children:"Icon"})})," and a ",e.jsx(n.a,{href:"?path=/docs/ods-components-text--documentation",children:e.jsx(n.strong,{children:"Text"})})," displaying the uploading file name and its weight"]}),`
`,e.jsxs(n.li,{children:["A ",e.jsx(n.code,{children:"close"})," icon ",e.jsx(n.a,{href:"?path=/docs/ods-components-button--documentation",children:e.jsx(n.strong,{children:"Button"})})," to interrupt the file uploading or remove the uploaded file"]}),`
`,e.jsxs(n.li,{children:["A ",e.jsx(n.a,{href:"?path=/docs/ods-components-progress-bar--documentation",children:e.jsx(n.strong,{children:"Progress Bar"})})," to indicate how the ",e.jsx(n.strong,{children:"File upload"})," is progressing"]}),`
`,e.jsxs(n.li,{children:["A success ",e.jsx(n.a,{href:"?path=/docs/ods-components-text--documentation",children:e.jsx(n.strong,{children:"Text"})})," with ",e.jsx(n.code,{children:"check"})," ",e.jsx(n.a,{href:"?path=/docs/ods-components-icon--documentation",children:e.jsx(n.strong,{children:"Icon"})})," to indicate that the file has been uploaded"]}),`
`,e.jsxs(n.li,{children:["An ",e.jsx(n.code,{children:"error"})," ",e.jsx(n.a,{href:"?path=/docs/ods-components-text--documentation",children:e.jsx(n.strong,{children:"Text"})})," to indicate something went wrong with the ",e.jsx(n.strong,{children:"File upload"})]}),`
`]}),`
`,e.jsx(n.h2,{id:"usage",children:"Usage"}),`
`,e.jsxs(n.p,{children:["Use the ",e.jsx(n.strong,{children:"File Upload"})," component when you need users to submit files, such as documents, images, or other data."]}),`
`,e.jsx(n.p,{children:"Common use cases include form submissions, profile picture updates, and document management systems."}),`
`,e.jsx(n.h3,{id:"dos--donts",children:"Dos & Don'ts"}),`
`,e.jsx(t,{children:`
| ✅ Do                                                                                                                                                                           |
|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| - Use one **File Upload** component for plural file upload inside a single page                                                                                                |
| - Use a helper with **Form Field** to inform users when the number of files to upload is limited                                                                               |
| - Use short and concise success message                                                                                                                                        |
| - Explain clearly the error context when an error occurred                                                                                                                     |
`}),`
`,e.jsx(t,{children:`
| ❌ Don't                                                                                                                                                                          |
|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| - Use **File Upload** component in a [**Modal**](?path=/docs/ods-components-modal--documentation)                                                                  |
`}),`
`,e.jsx(n.h2,{id:"placement",children:"Placement"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"File Upload"})," component can be part of a complex form, or displayed as a standalone."]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"File Upload"})," has an automatic default width, based on its content."]}),`
`,e.jsx(n.h2,{id:"behavior",children:"Behavior"}),`
`,e.jsx(n.h3,{id:"selecting-files",children:"Selecting files"}),`
`,e.jsxs(n.p,{children:['When selecting the "Browse" ',e.jsx(n.a,{href:"?path=/docs/ods-components-button--documentation",children:e.jsx(n.strong,{children:"Button"})}),", the native file selection popup opens to retrieve the needed file to upload."]}),`
`,e.jsx(n.h3,{id:"drag--drop",children:"Drag & Drop"}),`
`,e.jsxs(n.p,{children:["Users can drag & drop a file, the drop zone being the whole ",e.jsx(n.strong,{children:"File Upload"})," component."]}),`
`,e.jsx(n.h3,{id:"uploading-files",children:"Uploading files"}),`
`,e.jsx(n.h4,{id:"with-known-size",children:"With known size"}),`
`,e.jsx(n.p,{children:"When a file upload is in progress, the file name and its size are displayed."}),`
`,e.jsxs(n.p,{children:["A ",e.jsx(n.a,{href:"?path=/docs/ods-components-progress-bar--documentation",children:e.jsx(n.strong,{children:"Progress Bar"})})," with its percentage is displayed to indicate how the upload is progressing. It remains visible as long as the file uploading is not finished yet."]}),`
`,e.jsxs(n.p,{children:["A close icon ",e.jsx(n.a,{href:"?path=/docs/ods-components-button--documentation",children:e.jsx(n.strong,{children:"Button"})})," is displayed as soon as a file upload is in progress. It is displayed as long as the user does not interrupt the upload or removes an already uploaded file."]}),`
`,e.jsx(n.h4,{id:"with-unknown-size",children:"With unknown size"}),`
`,e.jsx(n.p,{children:"In some situations, file size is hidden in the uploading process due to an unknown file size."}),`
`,e.jsx(n.h3,{id:"upload-complete",children:"Upload complete"}),`
`,e.jsx(n.h4,{id:"with-success",children:"With success"}),`
`,e.jsxs(n.p,{children:["A ",e.jsx(n.code,{children:"success"})," ",e.jsx(n.a,{href:"?path=/docs/ods-components-text--documentation",children:e.jsx(n.strong,{children:"Text"})})," is displayed, replacing the previous ",e.jsx(n.a,{href:"?path=/docs/ods-components-progress-bar--documentation",children:e.jsx(n.strong,{children:"Progress Bar"})}),", as soon as a file has been uploaded, meaning the upload is successful and complete."]}),`
`,e.jsx(n.h4,{id:"with-error",children:"With error"}),`
`,e.jsxs(n.p,{children:["If the uploading of a file went wrong, a specific ",e.jsx(n.code,{children:"error"})," ",e.jsx(n.a,{href:"?path=/docs/ods-components-text--documentation",children:e.jsx(n.strong,{children:"Text"})})," is displayed below the uploaded file."]}),`
`,e.jsxs(n.p,{children:["The user is still able to upload another file but the ",e.jsx(n.code,{children:"error"})," ",e.jsx(n.a,{href:"?path=/docs/ods-components-text--documentation",children:e.jsx(n.strong,{children:"Text"})})," will persist until user removes the file in ",e.jsx(n.code,{children:"error"}),"."]}),`
`,e.jsxs(n.p,{children:["When several files are in ",e.jsx(n.code,{children:"error"}),", there will be an accumulation of ",e.jsx(n.code,{children:"error"})," messages, each below their related files."]}),`
`,e.jsxs(n.p,{children:["When a file is in ",e.jsx(n.code,{children:"error"})," and the user uploads a file without any issue, success ",e.jsx(n.a,{href:"?path=/docs/ods-components-text--documentation",children:e.jsx(n.strong,{children:"Text"})})," is triggered as expected below this file but, the ",e.jsx(n.code,{children:"error"})," ",e.jsx(n.a,{href:"?path=/docs/ods-components-text--documentation",children:e.jsx(n.strong,{children:"Text"})})," persists below the file in error."]}),`
`,e.jsx(n.p,{children:"Depending on the error, the global component can be displayed in an error state."}),`
`,e.jsx(n.h3,{id:"extra-behavior",children:"Extra behavior"}),`
`,e.jsx(n.h4,{id:"global-configuration--error",children:"Global configuration / error"}),`
`,e.jsx(n.p,{children:"Number of files, maximum sizes and expected formats can be set globally inside the component."}),`
`,e.jsxs(n.p,{children:["A global ",e.jsx(n.code,{children:"error"})," ",e.jsx(n.a,{href:"?path=/docs/ods-components-text--documentation",children:e.jsx(n.strong,{children:"Text"})})," and a ",e.jsx(n.a,{href:"?path=/docs/ods-components-divider--documentation",children:e.jsx(n.strong,{children:"Divider"})})," are displayed when:"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Wrong file format has been uploaded"}),`
`,e.jsx(n.li,{children:"Maximum file size exceeded"}),`
`,e.jsx(n.li,{children:"Maximum number of files exceeded"}),`
`]}),`
`,e.jsx(n.p,{children:"The global component is displayed in an error state in this situation."}),`
`,e.jsx(n.h4,{id:"disabled",children:"Disabled"}),`
`,e.jsxs(n.p,{children:["When ",e.jsx(n.strong,{children:"File Upload"})," is disabled, user cannot interact with the ",e.jsx(n.a,{href:"?path=/docs/ods-components-button--documentation",children:e.jsx(n.strong,{children:"Button"})})," and drag & drop feature is not available."]}),`
`,e.jsx(n.h4,{id:"cancel-a-file-upload-in-progress",children:"Cancel a file upload in progress"}),`
`,e.jsxs(n.p,{children:["A click or press on the ",e.jsx(n.code,{children:"close"})," icon ",e.jsx(n.a,{href:"?path=/docs/ods-components-button--documentation",children:e.jsx(n.strong,{children:"Button"})})," interrupts the upload (or cancel an uploaded file)."]}),`
`,e.jsxs(n.p,{children:["When the upload is canceled, the file upload is removed and the ",e.jsx(n.strong,{children:"File Upload"})," component returns to its default state, except for any other files in the queue."]}),`
`,e.jsx(n.p,{children:"In case some other files have already been uploaded, and the user cancels an uploading file, the next one will take its place in the queue and so on."}),`
`,e.jsx(n.h4,{id:"remove-an-already-uploaded-file",children:"Remove an already uploaded file"}),`
`,e.jsxs(n.p,{children:["An already uploaded file can be removed by clicking or pressing the ",e.jsx(n.code,{children:"close"})," icon ",e.jsx(n.a,{href:"?path=/docs/ods-components-button--documentation",children:e.jsx(n.strong,{children:"Button"})})," anytime."]}),`
`,e.jsx(n.p,{children:"Same as cancelling a file while it is uploading, if several files have already been uploaded and the user cancels an uploading file, the next one will take its place in the queue and so on."}),`
`,e.jsx(n.h2,{id:"variation",children:"Variation"}),`
`,e.jsx(n.p,{children:"N/A"}),`
`,e.jsx(n.h2,{id:"accessibility",children:"Accessibility"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"Tab"})," key allows to focus on the inner ",e.jsx(n.a,{href:"?path=/docs/ods-components-button--documentation",children:e.jsx(n.strong,{children:"Button"})})," element in the File Upload."]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"Enter"}),"/",e.jsx(n.code,{children:"Space"})," while this ",e.jsx(n.a,{href:"?path=/docs/ods-components-button--documentation",children:e.jsx(n.strong,{children:"Button"})})," is focused trigger the native file upload dialog."]}),`
`,e.jsxs(n.p,{children:["You can also tabulate throughout all ",e.jsx(n.code,{children:"close"})," icon ",e.jsx(n.a,{href:"?path=/docs/ods-components-button--documentation",children:e.jsx(n.strong,{children:"Button"})})," of uploaded files."]})]})}function z(s={}){const{wrapper:n}={...l(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(d,{...s})}):d(s)}export{z as default};
