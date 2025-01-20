import{j as e,M as c,C as p}from"./index-aSJOi-xY.js";import{u as d}from"./index-D_oymSD0.js";import{F as a,O as h}from"./file-upload.stories-CeDBmD81.js";import{B as u}from"./Banner-DfBQCKAd.js";import{I as x,A as m,B as j}from"./IdentityCard-bFWvbFx8.js";import{H as i}from"./Heading-fUBW5LMg.js";import{S as s,O as o,a as l}from"./StorybookLink-CdkDDCl2.js";import"./iframe-Cjn0x15a.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-D-8MO0q_.js";import"./index-DX_4BEHg.js";import"./index-DrFu-skq.js";import"./controls-DX883vx3.js";import"./index-B1WyGMUD.js";import"./index-DduIf26o.js";function r(t){const n={code:"code",em:"em",img:"img",li:"li",ol:"ol",p:"p",span:"span",strong:"strong",ul:"ul",...d(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(c,{of:a,name:"Documentation"}),`
`,e.jsx(u,{of:a}),`
`,e.jsx(n.p,{children:e.jsxs(n.em,{children:[e.jsx(n.strong,{children:"File Upload"})," allows users to select one or more files to upload to a specific location."]})}),`
`,e.jsx(p,{of:h,sourceState:"none"}),`
`,e.jsx(i,{label:"Overview",level:2}),`
`,e.jsxs(x,{aliases:["File input","File uploader","Dropzone"],atomicType:m.organism,figmaLink:"https://www.figma.com/design/9jDDTcR4a9jPRFcdjawAlf/ODS---UI-Kit?node-id=55-24358",githubUrl:"https://github.com/ovh/design-system/tree/master/packages/ods/src/components/file-upload",name:"File Upload",relatedComponents:[{name:"Button"},{name:"Divider"},{name:"Icon"},{name:"Progress Bar"},{name:"Text"}],children:[e.jsxs(n.p,{children:["The ",e.jsx(n.strong,{children:"File Upload"})," component is used to enable users to upload files to a server or application."]}),e.jsx(n.p,{children:`It provides a way to browse, select, and upload files, and is accompanied by progress indicators and feedback
messages to guide users through the process.`})]}),`
`,e.jsx(i,{label:"Anatomy",level:2}),`
`,e.jsx(n.p,{children:e.jsx(n.img,{src:"components/file-upload/anatomy.png",alt:"Component anatomy",title:"Component anatomy"})}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:["A decorative ",e.jsx(s,{kind:o.icon,label:"Icon",story:l.documentation})," (optional)"]}),`
`,e.jsxs(n.li,{children:["A ",e.jsx(s,{kind:o.text,label:"Text",story:l.documentation})," as title"]}),`
`,e.jsxs(n.li,{children:["A ",e.jsx(s,{kind:o.text,label:"Text",story:l.documentation})," explaining formats"]}),`
`,e.jsxs(n.li,{children:[e.jsx(s,{kind:o.button,label:"Button",story:l.documentation})," to trigger upload dialog"]}),`
`,e.jsx(n.li,{children:"A drop zone: the File component itself"}),`
`,e.jsxs(n.li,{children:["A ",e.jsx(n.code,{children:"file"})," ",e.jsx(s,{kind:o.icon,label:"Icon",story:l.documentation})," and a ",e.jsx(s,{kind:o.text,label:"Text",story:l.documentation})," displaying the uploading file name and its weight"]}),`
`,e.jsxs(n.li,{children:["A ",e.jsx(n.code,{children:"close"})," icon ",e.jsx(s,{kind:o.button,label:"Button",story:l.documentation})," to interrupt the file uploading or remove the uploaded file"]}),`
`,e.jsxs(n.li,{children:["A ",e.jsx(s,{kind:o.progressBar,label:"Progress Bar",story:l.documentation})," to indicate how the ",e.jsx(n.strong,{children:"File upload"})," is progressing"]}),`
`,e.jsxs(n.li,{children:["A success ",e.jsx(s,{kind:o.text,label:"Text",story:l.documentation})," with ",e.jsx(n.code,{children:"check"})," ",e.jsx(s,{kind:o.icon,label:"Icon",story:l.documentation})," to indicate that the file has been uploaded"]}),`
`,e.jsxs(n.li,{children:["An ",e.jsx(n.code,{children:"error"})," ",e.jsx(s,{kind:o.text,label:"Text",story:l.documentation})," to indicate something went wrong with the ",e.jsx(n.strong,{children:"File upload"})]}),`
`]}),`
`,e.jsx(i,{label:"Usage",level:2}),`
`,e.jsxs(n.p,{children:["Use the ",e.jsx(n.strong,{children:"File Upload"})," component when you need users to submit files, such as documents, images, or other data."]}),`
`,e.jsx(n.p,{children:"Common use cases include form submissions, profile picture updates, and document management systems."}),`
`,e.jsx(i,{label:"Dos & Don'ts",level:3}),`
`,e.jsx(j,{donts:[e.jsxs(n.span,{children:["- Use File Upload component in a ",e.jsx(s,{kind:o.modal,label:"Modal",story:l.documentation})]})],dos:["- Use one File Upload component for plural file upload inside a single page","- Use a helper with Form Field to inform users when the number of files to upload is limited","- Use short and concise success message","- Explain clearly the error context when an error occurred"]}),`
`,e.jsx(i,{label:"Placement",level:2}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"File Upload"})," component can be part of a complex form, or displayed as a standalone."]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"File Upload"})," has an automatic default width, based on its content."]}),`
`,e.jsx(i,{label:"Behavior",level:2}),`
`,e.jsx(i,{label:"Selecting files",level:3}),`
`,e.jsxs(n.p,{children:['When selecting the "Browse" ',e.jsx(s,{kind:o.button,label:"Button",story:l.documentation}),", the native file selection popup opens to retrieve the needed file to upload."]}),`
`,e.jsx(i,{label:"Drag & Drop",level:3}),`
`,e.jsxs(n.p,{children:["Users can drag & drop a file, the drop zone being the whole ",e.jsx(n.strong,{children:"File Upload"})," component."]}),`
`,e.jsx(i,{label:"Uploading files",level:3}),`
`,e.jsx(i,{label:"With known size",level:4}),`
`,e.jsx(n.p,{children:"When a file upload is in progress, the file name and its size are displayed."}),`
`,e.jsxs(n.p,{children:["A ",e.jsx(s,{kind:o.progressBar,label:"Progress Bar",story:l.documentation})," with its percentage is displayed to indicate how the upload is progressing. It remains visible as long as the file uploading is not finished yet."]}),`
`,e.jsxs(n.p,{children:["A close icon ",e.jsx(s,{kind:o.button,label:"Button",story:l.documentation})," is displayed as soon as a file upload is in progress. It is displayed as long as the user does not interrupt the upload or removes an already uploaded file."]}),`
`,e.jsx(i,{label:"With unknown size",level:4}),`
`,e.jsx(n.p,{children:"In some situations, file size is hidden in the uploading process due to an unknown file size."}),`
`,e.jsx(i,{label:"Upload complete",level:3}),`
`,e.jsx(i,{label:"With success",level:4}),`
`,e.jsxs(n.p,{children:["A ",e.jsx(n.code,{children:"success"})," ",e.jsx(s,{kind:o.text,label:"Text",story:l.documentation})," is displayed, replacing the previous ",e.jsx(s,{kind:o.progressBar,label:"Progress Bar",story:l.documentation}),", as soon as a file has been uploaded, meaning the upload is successful and complete."]}),`
`,e.jsx(i,{label:"With error",level:4}),`
`,e.jsxs(n.p,{children:["If the uploading of a file went wrong, a specific ",e.jsx(n.code,{children:"error"})," ",e.jsx(s,{kind:o.text,label:"Text",story:l.documentation})," is displayed below the uploaded file."]}),`
`,e.jsxs(n.p,{children:["The user is still able to upload another file but the ",e.jsx(n.code,{children:"error"})," ",e.jsx(s,{kind:o.text,label:"Text",story:l.documentation})," will persist until user removes the file in ",e.jsx(n.code,{children:"error"}),"."]}),`
`,e.jsxs(n.p,{children:["When several files are in ",e.jsx(n.code,{children:"error"}),", there will be an accumulation of ",e.jsx(n.code,{children:"error"})," messages, each below their related files."]}),`
`,e.jsxs(n.p,{children:["When a file is in ",e.jsx(n.code,{children:"error"})," and the user uploads a file without any issue, success ",e.jsx(s,{kind:o.text,label:"Text",story:l.documentation})," is triggered as expected below this file but, the ",e.jsx(n.code,{children:"error"})," ",e.jsx(s,{kind:o.text,label:"Text",story:l.documentation})," persists below the file in error."]}),`
`,e.jsx(n.p,{children:"Depending on the error, the global component can be displayed in an error state."}),`
`,e.jsx(i,{label:"Extra behavior",level:3}),`
`,e.jsx(i,{label:"Global configuration / error",level:4}),`
`,e.jsx(n.p,{children:"Number of files, maximum sizes and expected formats can be set globally inside the component."}),`
`,e.jsxs(n.p,{children:["A global ",e.jsx(n.code,{children:"error"})," ",e.jsx(s,{kind:o.text,label:"Text",story:l.documentation})," and a ",e.jsx(s,{kind:o.divider,label:"Divider",story:l.documentation})," are displayed when:"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Wrong file format has been uploaded"}),`
`,e.jsx(n.li,{children:"Maximum file size exceeded"}),`
`,e.jsx(n.li,{children:"Maximum number of files exceeded"}),`
`]}),`
`,e.jsx(n.p,{children:"The global component is displayed in an error state in this situation."}),`
`,e.jsx(i,{label:"Disabled",level:4}),`
`,e.jsxs(n.p,{children:["When ",e.jsx(n.strong,{children:"File Upload"})," is disabled, user cannot interact with the ",e.jsx(s,{kind:o.button,label:"Button",story:l.documentation})," and drag & drop feature is not available."]}),`
`,e.jsx(i,{label:"Cancel a file upload in progress",level:4}),`
`,e.jsxs(n.p,{children:["A click or press on the ",e.jsx(n.code,{children:"close"})," icon ",e.jsx(s,{kind:o.button,label:"Button",story:l.documentation})," interrupts the upload (or cancel an uploaded file)."]}),`
`,e.jsxs(n.p,{children:["When the upload is canceled, the file upload is removed and the ",e.jsx(n.strong,{children:"File Upload"})," component returns to its default state, except for any other files in the queue."]}),`
`,e.jsx(n.p,{children:"In case some other files have already been uploaded, and the user cancels an uploading file, the next one will take its place in the queue and so on."}),`
`,e.jsx(i,{label:"Remove an already uploaded file",level:4}),`
`,e.jsxs(n.p,{children:["An already uploaded file can be removed by clicking or pressing the ",e.jsx(n.code,{children:"close"})," icon ",e.jsx(s,{kind:o.button,label:"Button",story:l.documentation})," anytime."]}),`
`,e.jsx(n.p,{children:"Same as cancelling a file while it is uploading, if several files have already been uploaded and the user cancels an uploading file, the next one will take its place in the queue and so on."}),`
`,e.jsx(i,{label:"Variation",level:2}),`
`,e.jsx(n.p,{children:"N/A"}),`
`,e.jsx(i,{label:"Accessibility",level:2}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"Tab"})," key allows to focus on the inner ",e.jsx(s,{kind:o.button,label:"Button",story:l.documentation})," element in the File Upload."]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"Enter"}),"/",e.jsx(n.code,{children:"Space"})," while this ",e.jsx(s,{kind:o.button,label:"Button",story:l.documentation})," is focused trigger the native file upload dialog."]}),`
`,e.jsxs(n.p,{children:["You can also tabulate throughout all ",e.jsx(n.code,{children:"close"})," icon ",e.jsx(s,{kind:o.button,label:"Button",story:l.documentation})," of uploaded files."]})]})}function S(t={}){const{wrapper:n}={...d(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(r,{...t})}):r(t)}export{S as default};
