import{j as e,M as c,C as p}from"./index-DQsySnuC.js";import{u as d}from"./index-Xj8pMhSr.js";import{F as r,O as m}from"./file-upload.stories-t9dFv-6W.js";import{B as h}from"./Banner-dX9z1ZOn.js";import{I as u,A as x,B as j}from"./IdentityCard-g99iR_Ue.js";import{H as t}from"./Heading-DDc_MF2r.js";import{S as o,O as i,a as s}from"./StorybookLink-CYVmf1as.js";import"./iframe-DRtgxPEL.js";import"../sb-preview/runtime.js";import"./index-8AfNH5n5.js";import"./index-D-8MO0q_.js";import"./index-DrFu-skq.js";import"./ods-file-upload2-CPd6D9Z5.js";import"./index-DAZhnxgO.js";import"./dom-CO1DdTQY.js";import"./ods-button2-Bhm26DQr.js";import"./ods-spinner2-DCN2yKlT.js";import"./ods-icon2-Bl6f3POv.js";import"./icon-name-C6aMXAXT.js";import"./ods-progress-bar2-BuFm8qT0.js";import"./ods-divider2-Dc25YIYb.js";import"./controls-DX883vx3.js";import"./index-DCBH0_Tl.js";import"./index-CihiY_f6.js";import"./ods-accordion2-Bgg69lRV.js";import"./ods-badge-tHc24Eg4.js";import"./ods-breadcrumb-item2-CoLTn2CF.js";import"./ods-link2-DDMr4sUm.js";import"./ods-card-B_VebKXk.js";import"./ods-checkbox2-BOuFx8yF.js";import"./ods-clipboard2-NuJn2ry3.js";import"./ods-input2-B9cw61K_.js";import"./type-B5zI8QxY.js";import"./ods-tooltip2-BwzEvmuE.js";import"./overlay-KZpfSxWH.js";import"./ods-code2-bZeM2NI-.js";import"./ods-datepicker2-DwwUrg1C.js";import"./locale-NOa-Gxlr.js";import"./ods-divider-3cgmT4wP.js";import"./ods-drawer2-DsENZFv4.js";import"./ods-form-field2-Tc9B1-rj.js";import"./ods-icon-NURRZ9Mf.js";import"./ods-link-BE9dMQzg.js";import"./ods-medium2-BB_NU63C.js";import"./ods-message-B9bD81Bu.js";import"./ods-modal2-CP36WQeg.js";import"./ods-pagination2-CotgNPzL.js";import"./ods-select2-B4wr0dem.js";import"./ods-password2-BQKXsiEd.js";import"./ods-phone-number2-D1K1HcDS.js";import"./ods-popover2-hre_XUC2.js";import"./ods-quantity2-DOjRn13r.js";import"./ods-radio2-BtBodUES.js";import"./ods-range2-BhwU834C.js";import"./ods-skeleton2-dZcgHYAN.js";import"./ods-switch-item2-m1p75_3x.js";import"./ods-tabs2-wJlXfoZt.js";import"./ods-table2-vWlGUOoj.js";import"./ods-tag2-Dj0-zHXw.js";import"./ods-text-CTeC-41B.js";import"./ods-textarea2-BHQdu6bK.js";import"./ods-timepicker2-2oCWgeQp.js";import"./ods-toggle2-DbSuYqWU.js";function a(l){const n={code:"code",em:"em",img:"img",li:"li",ol:"ol",p:"p",span:"span",strong:"strong",ul:"ul",...d(),...l.components};return e.jsxs(e.Fragment,{children:[e.jsx(c,{of:r,name:"Documentation"}),`
`,e.jsx(h,{of:r}),`
`,e.jsx(n.p,{children:e.jsxs(n.em,{children:[e.jsx(n.strong,{children:"File Upload"})," allows users to select one or more files to upload to a specific location."]})}),`
`,e.jsx(p,{of:m,sourceState:"none"}),`
`,e.jsx(t,{label:"Overview",level:2}),`
`,e.jsxs(u,{aliases:["File input","File uploader","Dropzone"],atomicType:x.organism,figmaLink:"https://www.figma.com/design/9jDDTcR4a9jPRFcdjawAlf/ODS---UI-Kit?node-id=55-24358",githubUrl:"https://github.com/ovh/design-system/tree/master/packages/ods/src/components/file-upload",name:"File Upload",relatedComponents:[{name:"Button"},{name:"Divider"},{name:"Icon"},{name:"Progress Bar"},{name:"Text"}],children:[e.jsxs(n.p,{children:["The ",e.jsx(n.strong,{children:"File Upload"})," component is used to enable users to upload files to a server or application."]}),e.jsx(n.p,{children:`It provides a way to browse, select, and upload files, and is accompanied by progress indicators and feedback
messages to guide users through the process.`})]}),`
`,e.jsx(t,{label:"Anatomy",level:2}),`
`,e.jsx(n.p,{children:e.jsx(n.img,{src:"components/file-upload/anatomy.png",alt:"Component anatomy",title:"Component anatomy"})}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:["A decorative ",e.jsx(o,{kind:i.icon,label:"Icon",story:s.documentation})," (optional)"]}),`
`,e.jsxs(n.li,{children:["A ",e.jsx(o,{kind:i.text,label:"Text",story:s.documentation})," as title"]}),`
`,e.jsxs(n.li,{children:["A ",e.jsx(o,{kind:i.text,label:"Text",story:s.documentation})," explaining formats"]}),`
`,e.jsxs(n.li,{children:[e.jsx(o,{kind:i.button,label:"Button",story:s.documentation})," to trigger upload dialog"]}),`
`,e.jsx(n.li,{children:"A drop zone: the File component itself"}),`
`,e.jsxs(n.li,{children:["A ",e.jsx(n.code,{children:"file"})," ",e.jsx(o,{kind:i.icon,label:"Icon",story:s.documentation})," and a ",e.jsx(o,{kind:i.text,label:"Text",story:s.documentation})," displaying the uploading file name and its weight"]}),`
`,e.jsxs(n.li,{children:["A ",e.jsx(n.code,{children:"close"})," icon ",e.jsx(o,{kind:i.button,label:"Button",story:s.documentation})," to interrupt the file uploading or remove the uploaded file"]}),`
`,e.jsxs(n.li,{children:["A ",e.jsx(o,{kind:i.progressBar,label:"Progress Bar",story:s.documentation})," to indicate how the ",e.jsx(n.strong,{children:"File upload"})," is progressing"]}),`
`,e.jsxs(n.li,{children:["A success ",e.jsx(o,{kind:i.text,label:"Text",story:s.documentation})," with ",e.jsx(n.code,{children:"check"})," ",e.jsx(o,{kind:i.icon,label:"Icon",story:s.documentation})," to indicate that the file has been uploaded"]}),`
`,e.jsxs(n.li,{children:["An ",e.jsx(n.code,{children:"error"})," ",e.jsx(o,{kind:i.text,label:"Text",story:s.documentation})," to indicate something went wrong with the ",e.jsx(n.strong,{children:"File upload"})]}),`
`]}),`
`,e.jsx(t,{label:"Usage",level:2}),`
`,e.jsxs(n.p,{children:["Use the ",e.jsx(n.strong,{children:"File Upload"})," component when you need users to submit files, such as documents, images, or other data."]}),`
`,e.jsx(n.p,{children:"Common use cases include form submissions, profile picture updates, and document management systems."}),`
`,e.jsx(t,{label:"Dos & Don'ts",level:3}),`
`,e.jsx(j,{donts:[e.jsxs(n.span,{children:["- Use File Upload component in a ",e.jsx(o,{kind:i.modal,label:"Modal",story:s.documentation})]})],dos:["- Use one File Upload component for plural file upload inside a single page","- Use a helper with Form Field to inform users when the number of files to upload is limited","- Use short and concise success message","- Explain clearly the error context when an error occurred"]}),`
`,e.jsx(t,{label:"Placement",level:2}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"File Upload"})," component can be part of a complex form, or displayed as a standalone."]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"File Upload"})," has an automatic default width, based on its content."]}),`
`,e.jsx(t,{label:"Behavior",level:2}),`
`,e.jsx(t,{label:"Selecting files",level:3}),`
`,e.jsxs(n.p,{children:['When selecting the "Browse" ',e.jsx(o,{kind:i.button,label:"Button",story:s.documentation}),", the native file selection popup opens to retrieve the needed file to upload."]}),`
`,e.jsx(t,{label:"Drag & Drop",level:3}),`
`,e.jsxs(n.p,{children:["Users can drag & drop a file, the drop zone being the whole ",e.jsx(n.strong,{children:"File Upload"})," component."]}),`
`,e.jsx(t,{label:"Uploading files",level:3}),`
`,e.jsx(t,{label:"With known size",level:4}),`
`,e.jsx(n.p,{children:"When a file upload is in progress, the file name and its size are displayed."}),`
`,e.jsxs(n.p,{children:["A ",e.jsx(o,{kind:i.progressBar,label:"Progress Bar",story:s.documentation})," with its percentage is displayed to indicate how the upload is progressing. It remains visible as long as the file uploading is not finished yet."]}),`
`,e.jsxs(n.p,{children:["A close icon ",e.jsx(o,{kind:i.button,label:"Button",story:s.documentation})," is displayed as soon as a file upload is in progress. It is displayed as long as the user does not interrupt the upload or removes an already uploaded file."]}),`
`,e.jsx(t,{label:"With unknown size",level:4}),`
`,e.jsx(n.p,{children:"In some situations, file size is hidden in the uploading process due to an unknown file size."}),`
`,e.jsx(t,{label:"Upload complete",level:3}),`
`,e.jsx(t,{label:"With success",level:4}),`
`,e.jsxs(n.p,{children:["A ",e.jsx(n.code,{children:"success"})," ",e.jsx(o,{kind:i.text,label:"Text",story:s.documentation})," is displayed, replacing the previous ",e.jsx(o,{kind:i.progressBar,label:"Progress Bar",story:s.documentation}),", as soon as a file has been uploaded, meaning the upload is successful and complete."]}),`
`,e.jsx(t,{label:"With error",level:4}),`
`,e.jsxs(n.p,{children:["If the uploading of a file went wrong, a specific ",e.jsx(n.code,{children:"error"})," ",e.jsx(o,{kind:i.text,label:"Text",story:s.documentation})," is displayed below the uploaded file."]}),`
`,e.jsxs(n.p,{children:["The user is still able to upload another file but the ",e.jsx(n.code,{children:"error"})," ",e.jsx(o,{kind:i.text,label:"Text",story:s.documentation})," will persist until user removes the file in ",e.jsx(n.code,{children:"error"}),"."]}),`
`,e.jsxs(n.p,{children:["When several files are in ",e.jsx(n.code,{children:"error"}),", there will be an accumulation of ",e.jsx(n.code,{children:"error"})," messages, each below their related files."]}),`
`,e.jsxs(n.p,{children:["When a file is in ",e.jsx(n.code,{children:"error"})," and the user uploads a file without any issue, success ",e.jsx(o,{kind:i.text,label:"Text",story:s.documentation})," is triggered as expected below this file but, the ",e.jsx(n.code,{children:"error"})," ",e.jsx(o,{kind:i.text,label:"Text",story:s.documentation})," persists below the file in error."]}),`
`,e.jsx(n.p,{children:"Depending on the error, the global component can be displayed in an error state."}),`
`,e.jsx(t,{label:"Extra behavior",level:3}),`
`,e.jsx(t,{label:"Global configuration / error",level:4}),`
`,e.jsx(n.p,{children:"Number of files, maximum sizes and expected formats can be set globally inside the component."}),`
`,e.jsxs(n.p,{children:["A global ",e.jsx(n.code,{children:"error"})," ",e.jsx(o,{kind:i.text,label:"Text",story:s.documentation})," and a ",e.jsx(o,{kind:i.divider,label:"Divider",story:s.documentation})," are displayed when:"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Wrong file format has been uploaded"}),`
`,e.jsx(n.li,{children:"Maximum file size exceeded"}),`
`,e.jsx(n.li,{children:"Maximum number of files exceeded"}),`
`]}),`
`,e.jsx(n.p,{children:"The global component is displayed in an error state in this situation."}),`
`,e.jsx(t,{label:"Disabled",level:4}),`
`,e.jsxs(n.p,{children:["When ",e.jsx(n.strong,{children:"File Upload"})," is disabled, user cannot interact with the ",e.jsx(o,{kind:i.button,label:"Button",story:s.documentation})," and drag & drop feature is not available."]}),`
`,e.jsx(t,{label:"Cancel a file upload in progress",level:4}),`
`,e.jsxs(n.p,{children:["A click or press on the ",e.jsx(n.code,{children:"close"})," icon ",e.jsx(o,{kind:i.button,label:"Button",story:s.documentation})," interrupts the upload (or cancel an uploaded file)."]}),`
`,e.jsxs(n.p,{children:["When the upload is canceled, the file upload is removed and the ",e.jsx(n.strong,{children:"File Upload"})," component returns to its default state, except for any other files in the queue."]}),`
`,e.jsx(n.p,{children:"In case some other files have already been uploaded, and the user cancels an uploading file, the next one will take its place in the queue and so on."}),`
`,e.jsx(t,{label:"Remove an already uploaded file",level:4}),`
`,e.jsxs(n.p,{children:["An already uploaded file can be removed by clicking or pressing the ",e.jsx(n.code,{children:"close"})," icon ",e.jsx(o,{kind:i.button,label:"Button",story:s.documentation})," anytime."]}),`
`,e.jsx(n.p,{children:"Same as cancelling a file while it is uploading, if several files have already been uploaded and the user cancels an uploading file, the next one will take its place in the queue and so on."}),`
`,e.jsx(t,{label:"Variation",level:2}),`
`,e.jsx(n.p,{children:"N/A"}),`
`,e.jsx(t,{label:"Accessibility",level:2}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"Tab"})," key allows to focus on the inner ",e.jsx(o,{kind:i.button,label:"Button",story:s.documentation})," element in the File Upload."]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"Enter"}),"/",e.jsx(n.code,{children:"Space"})," while this ",e.jsx(o,{kind:i.button,label:"Button",story:s.documentation})," is focused trigger the native file upload dialog."]}),`
`,e.jsxs(n.p,{children:["You can also tabulate throughout all ",e.jsx(n.code,{children:"close"})," icon ",e.jsx(o,{kind:i.button,label:"Button",story:s.documentation})," of uploaded files."]})]})}function Ue(l={}){const{wrapper:n}={...d(),...l.components};return n?e.jsx(n,{...l,children:e.jsx(a,{...l})}):a(l)}export{Ue as default};
