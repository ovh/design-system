import{i as e}from"./rolldown-runtime-Dd_uD5pT.js";import{t}from"./jsx-runtime-DREnUpxT.js";import{T as n}from"./index-CdRG7ZE_.js";var r=e(t());function i(e){let t={code:`code`,em:`em`,li:`li`,ol:`ol`,p:`p`,strong:`strong`,ul:`ul`,...n(),...e.components},{Anatomy:i,BestPractices:a,Canvas:s,DocLink:c,Heading:l,Icon:u,IdentityCard:d,Kbd:f}=t;return i||o(`Anatomy`,!0),a||o(`BestPractices`,!0),s||o(`Canvas`,!0),c||o(`DocLink`,!0),l||o(`Heading`,!0),u||o(`Icon`,!0),d||o(`IdentityCard`,!0),f||o(`Kbd`,!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.p,{children:(0,r.jsxs)(t.em,{children:[(0,r.jsx)(t.strong,{children:`File Upload`}),` allows users to select one or more files to upload to a specific location.`]})}),`
`,(0,r.jsx)(s,{story:`Overview`,source:`none`}),`
`,(0,r.jsx)(l,{label:`Overview`,level:2}),`
`,(0,r.jsxs)(d,{aliases:[`File input`,`File uploader`,`Dropzone`],extraLinks:[(0,r.jsx)(c,{to:`/guides/forms`,children:`Form Guidelines`})],figmaLink:`https://www.figma.com/design/9jDDTcR4a9jPRFcdjawAlf/ODS---UI-Kit?node-id=55-24358`,githubUrl:`https://github.com/ovh/design-system/tree/master/packages/ods-react/src/components/file-upload`,name:`File Upload`,children:[(0,r.jsxs)(t.p,{children:[`The `,(0,r.jsx)(t.strong,{children:`File Upload`}),` component is used to enable users to upload files to a server or application.`]}),(0,r.jsx)(t.p,{children:`It provides a way to browse, select, and upload files, and is accompanied by progress indicators and feedback
messages to guide users through the process.`})]}),`
`,(0,r.jsx)(l,{label:`Usage`,level:2}),`
`,(0,r.jsxs)(t.p,{children:[`Use the `,(0,r.jsx)(t.strong,{children:`File Upload`}),` component when you need users to submit files, such as documents, images, or other data.`]}),`
`,(0,r.jsx)(t.p,{children:`Common use cases include form submissions, profile picture updates, and document management systems.`}),`
`,(0,r.jsx)(l,{label:`Dos & Don'ts`,level:3}),`
`,(0,r.jsx)(a,{donts:[`- Don't place the File Upload component inside a modal unless absolutely necessary`,`- Don't allow file uploads without providing feedback or confirmation`,`- Don't assume users know upload limitations. Make restrictions explicit`],dos:[`- Use a single File Upload component per context when allowing users to upload multiple files on the same page`,`- Clearly communicate constraints such as file type, size limits, or max number of files`,`- Use short and clear success message once the upload is complete`,`- Ensure error messages are specific and actionable (e.g., “File exceeds 5MB limit” instead of a generic “Upload failed”)`]}),`
`,(0,r.jsx)(l,{label:`Best Practices in Context`,level:3}),`
`,(0,r.jsx)(i,{src:`components/file-upload/anatomy.png`}),`
`,(0,r.jsxs)(t.ol,{children:[`
`,(0,r.jsx)(t.li,{children:(0,r.jsx)(t.strong,{children:`File Upload`})}),`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:`Description`}),` - optional (file limitations)`]}),`
`,(0,r.jsx)(t.li,{children:(0,r.jsx)(t.strong,{children:`Dropzone`})}),`
`,(0,r.jsx)(t.li,{children:(0,r.jsx)(t.strong,{children:`Upload button`})}),`
`,(0,r.jsx)(t.li,{children:(0,r.jsx)(t.strong,{children:`Uploaded files zone`})}),`
`,(0,r.jsx)(t.li,{children:(0,r.jsx)(t.strong,{children:`Delete button`})}),`
`]}),`
`,(0,r.jsx)(l,{label:`Placement`,level:2}),`
`,(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:`File Upload`}),` component can be part of a complex form, or displayed as a standalone.`]}),`
`,(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:`File Upload`}),` has an automatic default width, based on its content.`]}),`
`,(0,r.jsx)(l,{label:`Behavior`,level:2}),`
`,(0,r.jsx)(l,{label:`Selecting files`,level:3}),`
`,(0,r.jsx)(t.p,{children:`When selecting the "Browse" Button, the native file selection popup opens to retrieve the needed file to upload.`}),`
`,(0,r.jsx)(l,{label:`Drag & Drop`,level:3}),`
`,(0,r.jsxs)(t.p,{children:[`Users can drag & drop a file, the drop zone being the whole `,(0,r.jsx)(t.strong,{children:`File Upload`}),` component.`]}),`
`,(0,r.jsx)(l,{label:`Uploading files`,level:3}),`
`,(0,r.jsx)(t.p,{children:`When a file upload is in progress, the file name and its size (if available) are displayed.`}),`
`,(0,r.jsx)(t.p,{children:`A Spinner is displayed to indicate the file is uploading. It remains visible as long as the file uploading is not finished yet. The uploading progress percentage can be indicated next to the file name.`}),`
`,(0,r.jsx)(t.p,{children:`A close icon Button is displayed as soon as a file upload is in progress. It is displayed as long as the user does not interrupt the upload or removes an already uploaded file.`}),`
`,(0,r.jsx)(l,{label:`Upload complete`,level:3}),`
`,(0,r.jsx)(l,{label:`With success`,level:4}),`
`,(0,r.jsx)(t.p,{children:`The Spinner is replaced with the file icon, the file name and the icon turn green, as soon as a file has been uploaded, meaning the upload is successful and complete.`}),`
`,(0,r.jsx)(l,{label:`With error`,level:4}),`
`,(0,r.jsxs)(t.p,{children:[`If the uploading of a file went wrong, the Spinner is replaced with an error icon, and the file name and the icon turn red. A specific `,(0,r.jsx)(t.code,{children:`error`}),` message may be displayed below the uploaded file.`]}),`
`,(0,r.jsx)(t.p,{children:`The user is still able to upload another file but the file in error will remain in error until user removes it.`}),`
`,(0,r.jsx)(t.p,{children:`Depending on the error, the global component can be displayed in an error state.`}),`
`,(0,r.jsx)(l,{label:`Extra behavior`,level:3}),`
`,(0,r.jsx)(l,{label:`Global configuration / error`,level:4}),`
`,(0,r.jsx)(t.p,{children:`Number of files, maximum sizes and expected formats can be set globally inside the component.`}),`
`,(0,r.jsxs)(t.p,{children:[`A global `,(0,r.jsx)(t.code,{children:`error`}),` message is displayed when:`]}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsx)(t.li,{children:`Wrong file format has been uploaded`}),`
`,(0,r.jsx)(t.li,{children:`Maximum file size exceeded`}),`
`,(0,r.jsx)(t.li,{children:`Maximum number of files exceeded`}),`
`]}),`
`,(0,r.jsx)(t.p,{children:`The global component is displayed in an error state in this situation.`}),`
`,(0,r.jsx)(l,{label:`Disabled`,level:4}),`
`,(0,r.jsxs)(t.p,{children:[`When `,(0,r.jsx)(t.strong,{children:`File Upload`}),` is disabled, user cannot interact with the Button and drag & drop feature is not available.`]}),`
`,(0,r.jsx)(l,{label:`Cancel a file upload in progress`,level:4}),`
`,(0,r.jsxs)(t.p,{children:[`A click or press on the `,(0,r.jsx)(t.code,{children:`close`}),` icon Button interrupts the upload (or cancel an uploaded file).`]}),`
`,(0,r.jsxs)(t.p,{children:[`When the upload is canceled, the file upload is removed and the `,(0,r.jsx)(t.strong,{children:`File Upload`}),` component returns to its default state, except for any other files in the queue.`]}),`
`,(0,r.jsx)(t.p,{children:`In case some other files have already been uploaded, and the user cancels an uploading file, the next one will take its place in the queue and so on.`}),`
`,(0,r.jsx)(l,{label:`Remove an already uploaded file`,level:4}),`
`,(0,r.jsxs)(t.p,{children:[`An already uploaded file can be removed by clicking or pressing the `,(0,r.jsx)(t.code,{children:`close`}),` icon Button anytime.`]}),`
`,(0,r.jsx)(t.p,{children:`Same as cancelling a file while it is uploading, if several files have already been uploaded and the user cancels an uploading file, the next one will take its place in the queue and so on.`}),`
`,(0,r.jsx)(l,{label:`Navigation`,level:2}),`
`,(0,r.jsx)(l,{label:`Focus Management`,level:3}),`
`,(0,r.jsxs)(t.p,{children:[`When tabbing through the page, the `,(0,r.jsx)(t.strong,{children:`File Upload`}),` trigger button receives focus as part of the natural tab order.`]}),`
`,(0,r.jsx)(t.p,{children:`If one or more files are being uploaded or already uploaded, each close icon button becomes focusable in the tab order, in the order files were added.`}),`
`,(0,r.jsx)(t.p,{children:`If the component is disabled, it cannot receive focus and no interaction is possible.`}),`
`,(0,r.jsx)(t.p,{children:`The drag-and-drop area does not receive focus but accepts dropped files while the component is enabled.`}),`
`,(0,r.jsx)(l,{label:`General Keyboard Shortcuts`,level:3}),`
`,(0,r.jsxs)(t.p,{children:[`Pressing `,(0,r.jsx)(f,{children:`Tab`}),` moves focus forward through the `,(0,r.jsx)(t.strong,{children:`File Upload`}),` trigger button and all available close icon buttons.`]}),`
`,(0,r.jsxs)(t.p,{children:[`Pressing `,(0,r.jsx)(f,{children:`Shift`}),` + `,(0,r.jsx)(f,{children:`Tab`}),` moves focus backward through these same elements.`]}),`
`,(0,r.jsxs)(t.p,{children:[`Pressing `,(0,r.jsx)(f,{children:`Enter`}),` or `,(0,r.jsx)(f,{children:`Space`}),` while the trigger button is focused opens the native file selection dialog.`]}),`
`,(0,r.jsxs)(t.p,{children:[`Pressing `,(0,r.jsx)(f,{children:`Enter`}),` or `,(0,r.jsx)(f,{children:`Space`}),` on a close icon button cancels an upload in progress or removes the corresponding uploaded file from the list.`]}),`
`,(0,r.jsx)(l,{label:`Accessibility`,level:2}),`
`,(0,r.jsxs)(t.p,{children:[`To ensure proper accessibility, the `,(0,r.jsx)(t.strong,{children:`File Upload`}),` component must be correctly labeled and provide meaningful context when interactive elements (such as icon buttons) are used.`]}),`
`,(0,r.jsx)(l,{label:`Always provide an explicit label`,level:3}),`
`,(0,r.jsxs)(t.p,{children:[`Every `,(0,r.jsx)(t.strong,{children:`File Upload`}),` must have a clear and explicit label to ensure that users (especially screen reader users) understand its purpose, using either `,(0,r.jsx)(t.strong,{children:`FormField`}),` or a native label tag.`]}),`
`,(0,r.jsx)(s,{story:`AccessibilityFormField`}),`
`,(0,r.jsxs)(t.p,{children:[(0,r.jsx)(u,{name:`circle-check`,style:{color:`var(--ods-semantic-color-content-success)`}}),` Screen readers will announce the label, the field and its content.`]}),`
`,(0,r.jsx)(l,{label:`Labeling cancel/delete Button`,level:3}),`
`,(0,r.jsxs)(t.p,{children:[`The `,(0,r.jsx)(t.code,{children:`Cancel`}),` and `,(0,r.jsx)(t.code,{children:`Delete`}),` file buttons have to be explicit by adding context about their action and the file name.`]}),`
`,(0,r.jsx)(s,{story:`AccessibilityFileButton`}),`
`,(0,r.jsxs)(t.p,{children:[(0,r.jsx)(u,{name:`circle-check`,style:{color:`var(--ods-semantic-color-content-success)`}}),` Screen readers will announce the action and the file name.`]})]})}function a(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(i,{...e})}):i(e)}function o(e,t){throw Error(`Expected `+(t?`component`:`object`)+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}export{a as default};