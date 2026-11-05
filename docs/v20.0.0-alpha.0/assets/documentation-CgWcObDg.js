import{i as e}from"./rolldown-runtime-Dd_uD5pT.js";import{t}from"./jsx-runtime-DREnUpxT.js";import{T as n}from"./index-CdRG7ZE_.js";var r=e(t());function i(e){let t={code:`code`,li:`li`,ol:`ol`,p:`p`,strong:`strong`,ul:`ul`,...n(),...e.components},{Anatomy:i,Canvas:a,Heading:s,IdentityCard:c,Kbd:l}=t;return i||o(`Anatomy`,!0),a||o(`Canvas`,!0),s||o(`Heading`,!0),c||o(`IdentityCard`,!0),l||o(`Kbd`,!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(a,{story:`Overview`,source:`none`}),`
`,(0,r.jsx)(s,{label:`Overview`,level:2}),`
`,(0,r.jsx)(c,{aliases:[],figmaLink:`https://www.figma.com/design/9jDDTcR4a9jPRFcdjawAlf/branch/mwZtfuQ9nzv6fY0dfez4NZ/ODS---UI-Kit?node-id=18865-2253&t=5Qpq63EmcZsiF0hy-0`,githubUrl:`https://github.com/ovh/design-system/tree/master/packages/ods-react/src/components/file-thumbnail`,name:`FileThumbnail`,startingVersion:19,children:(0,r.jsx)(t.p,{children:`File Thumbnail component is a visual representation of an uploaded file, displaying a preview or a standalone icon
alongside file metadata. It is designed to be used in file upload interfaces, attachment lists, or media libraries.`})}),`
`,(0,r.jsx)(s,{label:`Usage`,level:2}),`
`,(0,r.jsx)(t.p,{children:`File Thumbnail component is used to represent uploaded files in a compact format. It provides visual feedback
about the file type, name, size, and upload time, while allowing users to remove the file.
Common usages include:`}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsx)(t.li,{children:`File upload zones: display attached files after selection or upload.`}),`
`,(0,r.jsx)(t.li,{children:`Message composers: show file attachments before sending.`}),`
`,(0,r.jsx)(t.li,{children:`Media libraries: list uploaded documents, images, or assets.`}),`
`,(0,r.jsx)(t.li,{children:`Form fields: represent file inputs with selected file previews.`}),`
`]}),`
`,(0,r.jsx)(s,{label:`Best Practices in Context`,level:3}),`
`,(0,r.jsx)(i,{src:`components/file-thumbnail/anatomy.png`}),`
`,(0,r.jsxs)(t.ol,{children:[`
`,(0,r.jsx)(t.li,{children:(0,r.jsx)(t.strong,{children:`FileThumbnail`})}),`
`]}),`
`,(0,r.jsx)(t.p,{children:`TODO`}),`
`,(0,r.jsx)(s,{label:`Behavior`,level:2}),`
`,(0,r.jsx)(s,{label:`Content & Display`,level:3}),`
`,(0,r.jsx)(t.p,{children:`Thumbnail / Preview:`}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsx)(t.li,{children:`Displays an image preview for supported image types.`}),`
`,(0,r.jsx)(t.li,{children:`Falls back to a generic file icon for non-image files.`}),`
`,(0,r.jsx)(t.li,{children:`The thumbnail image is resized and centered to avoid distortion.`}),`
`]}),`
`,(0,r.jsx)(t.p,{children:`Fallback priority:`}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsx)(t.li,{children:`Image preview (if supported format and loads successfully).`}),`
`,(0,r.jsx)(t.li,{children:`Generic file icon (if type is unknown or unrecognized).`}),`
`]}),`
`,(0,r.jsx)(t.p,{children:`File Metadata:`}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsx)(t.li,{children:`File name and extension, displayed with ellipsis truncation if too long; full name exposed via title attribute.`}),`
`,(0,r.jsx)(t.li,{children:`File size, displayed in human-readable format (e.g., 340 KB, 1.2 MB, 3.4 GB).`}),`
`]}),`
`,(0,r.jsx)(t.p,{children:`Remove Action:`}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsx)(t.li,{children:`A remove button always visible.`}),`
`,(0,r.jsxs)(t.li,{children:[`Clicking remove should either:`,`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsx)(t.li,{children:`Immediately removes the component with a brief undo toast.`}),`
`,(0,r.jsx)(t.li,{children:`Triggers an inline confirmation step before removal.`}),`
`]}),`
`]}),`
`]}),`
`,(0,r.jsx)(s,{label:`States`,level:3}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsx)(t.li,{children:`Default: Thumbnail or fallback icon displayed with full metadata and remove button.`}),`
`,(0,r.jsx)(t.li,{children:`Read-only: Removal button disabled.`}),`
`,(0,r.jsx)(t.li,{children:`Loading: Progress Bar shown in place of file size while file uploads.`}),`
`,(0,r.jsx)(t.li,{children:`Error: Error icon shown with a short error message (e.g., "Preview unavailable" or "Upload failed"); file name and extension remain visible.`}),`
`]}),`
`,(0,r.jsx)(s,{label:`Navigation`,level:2}),`
`,(0,r.jsx)(t.p,{children:`The component is non-interactive by default, except for the remove button.`}),`
`,(0,r.jsxs)(t.p,{children:[`The remove button receives keyboard focus via `,(0,r.jsx)(l,{children:`Tab`}),`.`]}),`
`,(0,r.jsxs)(t.p,{children:[`Pressing `,(0,r.jsx)(l,{children:`Enter`}),` or `,(0,r.jsx)(l,{children:`Space`}),` on the focused remove button triggers the remove action.`]}),`
`,(0,r.jsx)(t.p,{children:`Focus moves to the next thumbnail or the previous interactive element after removal.`}),`
`,(0,r.jsx)(t.p,{children:`General Keyboard Shortcuts:`}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(l,{children:`Tab`}),` : Moves focus to the remove button of the thumbnail.`]}),`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(l,{children:`Enter`}),` / `,(0,r.jsx)(l,{children:`Space`}),` : Activates the focused remove button.`]}),`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(l,{children:`Shift`}),` + `,(0,r.jsx)(l,{children:`Tab`}),` : Moves focus backward to the previous interactive element.`]}),`
`]}),`
`,(0,r.jsx)(s,{label:`Accessibility`,level:2}),`
`,(0,r.jsxs)(t.p,{children:[`Each `,(0,r.jsx)(t.strong,{children:`File Thumbnail`}),` must be wrapped in a `,(0,r.jsx)(t.code,{children:`role="listitem"`}),` element, and its parent container must have `,(0,r.jsx)(t.code,{children:`role="list"`}),` to allow screen readers to navigate between thumbnails.`]}),`
`,(0,r.jsx)(t.p,{children:`On remove, if a confirmation step is triggered, focus must move to the confirmation dialog or inline prompt.`})]})}function a(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(i,{...e})}):i(e)}function o(e,t){throw Error(`Expected `+(t?`component`:`object`)+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}export{a as default};