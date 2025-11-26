import{j as e}from"./jsx-runtime-Cfl8ynUo.js";import{useMDXComponents as d}from"./index-ZwkxtaJJ.js";import{t as o,l as t}from"./ods-react60-DssFCbzP.js";import{M as c}from"./index-9orhCFJa.js";import{F as a,O as p,A as h,a as m}from"./file-upload.stories-QI7EEqZB.js";import{A as u}from"./Anatomy-DkXJCwiR.js";import{B as x}from"./Banner-DiJ2utjo.js";import{I as j,B as f}from"./IdentityCard-0vzhW5ZM.js";import{C as i}from"./Canvas-CreDMEws.js";import{H as s}from"./Heading-eINcjqM4.js";import"./index-jIWwRBLr.js";import"./index-CWkFp9WS-BSIT86NH.js";import"./iframe-BRevKSH1.js";import"./index-DWDEzXrj.js";import"./index-N93khynk.js";import"./index-CXQShRbs.js";import"./index-DrFu-skq.js";import"./FormFieldLabel-B8-lDkmb.js";import"./index-CqY9YpN0.js";import"./Text-DyiJ5nHV.js";import"./Button-B-GJ-1TA.js";import"./Spinner-DJB5ZadI.js";import"./colors-DSObuHxd.js";import"./icon-name-C581wThh.js";import"./use-locale-context-6s5qsrWI.js";import"./index-CPOqegBX.js";import"./use-field-context-BOfmBRZb.js";import"./useI18n-C0NLVYPv.js";import"./controls-BtiQQn1l.js";import"./source-CPEZJ6oD.js";import"./Table-BvR76ybm-DzE94PQp.js";import"./ExternalLink-C0Msq_QQ.js";import"./Link-CIjoG_UN-BDwROQOD.js";import"./Table-u83oGl00.js";import"./TooltipTrigger-CizyLvLy-D53hI2Ct.js";import"./index-blQ1D1fB.js";import"./lz-string-U2heoObX.js";import"./meta-t9Q7ez2Q.js";import"./ResetTheme-BVzaMHe3.js";import"./tokens-VHDJ0kGa.js";function r(l){const n={code:"code",em:"em",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...d(),...l.components};return e.jsxs(e.Fragment,{children:[e.jsx(c,{of:a,name:"Documentation"}),`
`,e.jsx(x,{of:a}),`
`,e.jsx(n.p,{children:e.jsxs(n.em,{children:[e.jsx(n.strong,{children:"File Upload"})," allows users to select one or more files to upload to a specific location."]})}),`
`,e.jsx(i,{of:p,sourceState:"none"}),`
`,e.jsx(s,{label:"Overview",level:2}),`
`,e.jsxs(j,{aliases:["File input","File uploader","Dropzone"],figmaLink:"https://www.figma.com/design/9jDDTcR4a9jPRFcdjawAlf/ODS---UI-Kit?node-id=55-24358",githubUrl:"https://github.com/ovh/design-system/tree/master/packages/ods-react/src/components/file-upload",name:"File Upload",children:[e.jsxs(n.p,{children:["The ",e.jsx(n.strong,{children:"File Upload"})," component is used to enable users to upload files to a server or application."]}),e.jsx(n.p,{children:`It provides a way to browse, select, and upload files, and is accompanied by progress indicators and feedback
messages to guide users through the process.`})]}),`
`,e.jsx(s,{label:"Usage",level:2}),`
`,e.jsxs(n.p,{children:["Use the ",e.jsx(n.strong,{children:"File Upload"})," component when you need users to submit files, such as documents, images, or other data."]}),`
`,e.jsx(n.p,{children:"Common use cases include form submissions, profile picture updates, and document management systems."}),`
`,e.jsx(s,{label:"Dos & Don'ts",level:3}),`
`,e.jsx(f,{donts:["- Don't place the File Upload component inside a modal unless absolutely necessary","- Don't allow file uploads without providing feedback or confirmation","- Don't assume users know upload limitations. Make restrictions explicit"],dos:["- Use a single File Upload component per context when allowing users to upload multiple files on the same page","- Clearly communicate constraints such as file type, size limits, or max number of files","- Use short and clear success message once the upload is complete","- Ensure error messages are specific and actionable (e.g., “File exceeds 5MB limit” instead of a generic “Upload failed”)"]}),`
`,e.jsx(s,{label:"Best Practices in Context",level:3}),`
`,e.jsx(u,{src:"components/file-upload/anatomy.png"}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.strong,{children:"File Upload"})}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Description"})," - optional (file limitations)"]}),`
`,e.jsx(n.li,{children:e.jsx(n.strong,{children:"Dropzone"})}),`
`,e.jsx(n.li,{children:e.jsx(n.strong,{children:"Upload button"})}),`
`,e.jsx(n.li,{children:e.jsx(n.strong,{children:"Uploaded files zone"})}),`
`,e.jsx(n.li,{children:e.jsx(n.strong,{children:"Delete button"})}),`
`]}),`
`,e.jsx(s,{label:"Placement",level:2}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"File Upload"})," component can be part of a complex form, or displayed as a standalone."]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"File Upload"})," has an automatic default width, based on its content."]}),`
`,e.jsx(s,{label:"Behavior",level:2}),`
`,e.jsx(s,{label:"Selecting files",level:3}),`
`,e.jsx(n.p,{children:'When selecting the "Browse" Button, the native file selection popup opens to retrieve the needed file to upload.'}),`
`,e.jsx(s,{label:"Drag & Drop",level:3}),`
`,e.jsxs(n.p,{children:["Users can drag & drop a file, the drop zone being the whole ",e.jsx(n.strong,{children:"File Upload"})," component."]}),`
`,e.jsx(s,{label:"Uploading files",level:3}),`
`,e.jsx(n.p,{children:"When a file upload is in progress, the file name and its size (if available) are displayed."}),`
`,e.jsx(n.p,{children:"A Spinner is displayed to indicate the file is uploading. It remains visible as long as the file uploading is not finished yet. The uploading progress percentage can be indicated next to the file name."}),`
`,e.jsx(n.p,{children:"A close icon Button is displayed as soon as a file upload is in progress. It is displayed as long as the user does not interrupt the upload or removes an already uploaded file."}),`
`,e.jsx(s,{label:"Upload complete",level:3}),`
`,e.jsx(s,{label:"With success",level:4}),`
`,e.jsx(n.p,{children:"The Spinner is replaced with the file icon, the file name and the icon turn green, as soon as a file has been uploaded, meaning the upload is successful and complete."}),`
`,e.jsx(s,{label:"With error",level:4}),`
`,e.jsxs(n.p,{children:["If the uploading of a file went wrong, the Spinner is replaced with an error icon, and the file name and the icon turn red. A specific ",e.jsx(n.code,{children:"error"})," message may be displayed below the uploaded file."]}),`
`,e.jsx(n.p,{children:"The user is still able to upload another file but the file in error will remain in error until user removes it."}),`
`,e.jsx(n.p,{children:"Depending on the error, the global component can be displayed in an error state."}),`
`,e.jsx(s,{label:"Extra behavior",level:3}),`
`,e.jsx(s,{label:"Global configuration / error",level:4}),`
`,e.jsx(n.p,{children:"Number of files, maximum sizes and expected formats can be set globally inside the component."}),`
`,e.jsxs(n.p,{children:["A global ",e.jsx(n.code,{children:"error"})," message is displayed when:"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Wrong file format has been uploaded"}),`
`,e.jsx(n.li,{children:"Maximum file size exceeded"}),`
`,e.jsx(n.li,{children:"Maximum number of files exceeded"}),`
`]}),`
`,e.jsx(n.p,{children:"The global component is displayed in an error state in this situation."}),`
`,e.jsx(s,{label:"Disabled",level:4}),`
`,e.jsxs(n.p,{children:["When ",e.jsx(n.strong,{children:"File Upload"})," is disabled, user cannot interact with the Button and drag & drop feature is not available."]}),`
`,e.jsx(s,{label:"Cancel a file upload in progress",level:4}),`
`,e.jsxs(n.p,{children:["A click or press on the ",e.jsx(n.code,{children:"close"})," icon Button interrupts the upload (or cancel an uploaded file)."]}),`
`,e.jsxs(n.p,{children:["When the upload is canceled, the file upload is removed and the ",e.jsx(n.strong,{children:"File Upload"})," component returns to its default state, except for any other files in the queue."]}),`
`,e.jsx(n.p,{children:"In case some other files have already been uploaded, and the user cancels an uploading file, the next one will take its place in the queue and so on."}),`
`,e.jsx(s,{label:"Remove an already uploaded file",level:4}),`
`,e.jsxs(n.p,{children:["An already uploaded file can be removed by clicking or pressing the ",e.jsx(n.code,{children:"close"})," icon Button anytime."]}),`
`,e.jsx(n.p,{children:"Same as cancelling a file while it is uploading, if several files have already been uploaded and the user cancels an uploading file, the next one will take its place in the queue and so on."}),`
`,e.jsx(s,{label:"Navigation",level:2}),`
`,e.jsx(s,{label:"Focus Management",level:3}),`
`,e.jsxs(n.p,{children:["When tabbing through the page, the ",e.jsx(n.strong,{children:"File Upload"})," trigger button receives focus as part of the natural tab order."]}),`
`,e.jsx(n.p,{children:"If one or more files are being uploaded or already uploaded, each close icon button becomes focusable in the tab order, in the order files were added."}),`
`,e.jsx(n.p,{children:"If the component is disabled, it cannot receive focus and no interaction is possible."}),`
`,e.jsx(n.p,{children:"The drag-and-drop area does not receive focus but accepts dropped files while the component is enabled."}),`
`,e.jsx(s,{label:"General Keyboard Shortcuts",level:3}),`
`,e.jsxs(n.p,{children:["Pressing ",e.jsx(n.code,{children:"Tab"})," moves focus forward through the ",e.jsx(n.strong,{children:"File Upload"})," trigger button and all available close icon buttons."]}),`
`,e.jsxs(n.p,{children:["Pressing ",e.jsx(n.code,{children:"Shift"})," + ",e.jsx(n.code,{children:"Tab"})," moves focus backward through these same elements."]}),`
`,e.jsxs(n.p,{children:["Pressing ",e.jsx(n.code,{children:"Enter"})," or ",e.jsx(n.code,{children:"Space"})," while the trigger button is focused opens the native file selection dialog."]}),`
`,e.jsxs(n.p,{children:["Pressing ",e.jsx(n.code,{children:"Enter"})," or ",e.jsx(n.code,{children:"Space"})," on a close icon button cancels an upload in progress or removes the corresponding uploaded file from the list."]}),`
`,e.jsx(s,{label:"Accessibility",level:2}),`
`,e.jsxs(n.p,{children:["To ensure proper accessibility, the ",e.jsx(n.strong,{children:"File Upload"})," component must be correctly labeled and provide meaningful context when interactive elements (such as icon buttons) are used."]}),`
`,e.jsx(s,{label:"Always provide an explicit label",level:3}),`
`,e.jsxs(n.p,{children:["Every ",e.jsx(n.strong,{children:"File Upload"})," must have a clear and explicit label to ensure that users (especially screen reader users) understand its purpose, using either ",e.jsx(n.strong,{children:"FormField"})," or a native label tag."]}),`
`,e.jsx(i,{of:h,sourceState:"shown"}),`
`,e.jsxs(n.p,{children:[e.jsx(o,{name:t.circleCheck,style:{color:"var(--ods-color-success-500)"}})," Screen readers will announce the label, the field and its content."]}),`
`,e.jsx(s,{label:"Labeling cancel/delete Button",level:3}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"Cancel"})," and ",e.jsx(n.code,{children:"Delete"})," file buttons have to be explicit by adding context about their action and the file name."]}),`
`,e.jsx(i,{of:m,sourceState:"shown"}),`
`,e.jsxs(n.p,{children:[e.jsx(o,{name:t.circleCheck,style:{color:"var(--ods-color-success-500)"}})," Screen readers will announce the action and the file name."]})]})}function ie(l={}){const{wrapper:n}={...d(),...l.components};return n?e.jsx(n,{...l,children:e.jsx(r,{...l})}):r(l)}export{ie as default};
