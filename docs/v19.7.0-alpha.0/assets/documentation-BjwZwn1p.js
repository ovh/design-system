import{j as e}from"./jsx-runtime-Cfl8ynUo.js";import{useMDXComponents as o}from"./index-ZwkxtaJJ.js";import{k as n}from"./Kbd-Cnje_EfN-CvQx-mOR.js";import{M as a}from"./index-CorwBrna.js";import{F as l,O as d}from"./file-thumbnail.stories-Dwfk5q1c.js";import{A as m}from"./Anatomy-DkXJCwiR.js";import{B as c}from"./Banner-BzsM7Ov4.js";import{C as p}from"./Canvas-DmU-XW-X.js";import{H as t}from"./Heading-CqLsFmC8.js";import{I as h}from"./IdentityCard-Dz2mtlUf.js";import"./index-jIWwRBLr.js";import"./index-CWkFp9WS-BSIT86NH.js";import"./iframe-CTupHpWb.js";import"./index-DWDEzXrj.js";import"./index-N93khynk.js";import"./index-CXQShRbs.js";import"./index-DrFu-skq.js";import"./index-CPOqegBX.js";import"./index-CqY9YpN0.js";import"./useI18n-C0NLVYPv.js";import"./Button-B-GJ-1TA.js";import"./Spinner-DJB5ZadI.js";import"./colors-DSObuHxd.js";import"./icon-name-RfJfucZu.js";import"./ProgressBar-ctSrx_5P.js";import"./Text-CRk0VKg4.js";import"./controls-BtiQQn1l.js";import"./source-CPEZJ6oD.js";import"./icon-name-BOjNLCTH-CoYid0iC.js";import"./index-CvuQtheM.js";import"./context-Z_Xa7sWf-5kwUyuQy.js";import"./index-D-PjbIVM.js";import"./lz-string-U2heoObX.js";import"./meta-vhIdvDvL.js";import"./ResetTheme-DQ5v3p_P.js";import"./tokens-BrWUS-3i.js";import"./divider-color-DMMH0ySn-B7JauIP0.js";import"./colors-C1Wmnk_L-aAAP9SXj.js";import"./Table-Bof_Nsov-CS9ZUwCH.js";import"./ExternalLink-B7meJZZV.js";import"./Link-JvSirtKN-DiqnrgRb.js";import"./Table-BXVk_N0H.js";function r(s){const i={code:"code",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...o(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{of:l,name:"Documentation",tags:["new"]}),`
`,e.jsx(c,{of:l}),`
`,e.jsx(p,{of:d,sourceState:"none"}),`
`,e.jsx(t,{label:"Overview",level:2}),`
`,e.jsx(h,{aliases:[],figmaLink:"https://www.figma.com/design/9jDDTcR4a9jPRFcdjawAlf/branch/mwZtfuQ9nzv6fY0dfez4NZ/ODS---UI-Kit?node-id=18865-2253&t=5Qpq63EmcZsiF0hy-0",githubUrl:"https://github.com/ovh/design-system/tree/master/packages/ods-react/src/components/file-thumbnail",name:"FileThumbnail",startingVersion:19,children:e.jsx(i.p,{children:`File Thumbnail component is a visual representation of an uploaded file, displaying a preview or a standalone icon
alongside file metadata. It is designed to be used in file upload interfaces, attachment lists, or media libraries.`})}),`
`,e.jsx(t,{label:"Usage",level:2}),`
`,e.jsx(i.p,{children:`File Thumbnail component is used to represent uploaded files in a compact format. It provides visual feedback
about the file type, name, size, and upload time, while allowing users to remove the file.
Common usages include:`}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsx(i.li,{children:"File upload zones: display attached files after selection or upload."}),`
`,e.jsx(i.li,{children:"Message composers: show file attachments before sending."}),`
`,e.jsx(i.li,{children:"Media libraries: list uploaded documents, images, or assets."}),`
`,e.jsx(i.li,{children:"Form fields: represent file inputs with selected file previews."}),`
`]}),`
`,e.jsx(t,{label:"Best Practices in Context",level:3}),`
`,e.jsx(m,{src:"components/file-thumbnail/anatomy.png"}),`
`,e.jsxs(i.ol,{children:[`
`,e.jsx(i.li,{children:e.jsx(i.strong,{children:"FileThumbnail"})}),`
`]}),`
`,e.jsx(i.p,{children:"TODO"}),`
`,e.jsx(t,{label:"Behavior",level:2}),`
`,e.jsx(t,{label:"Content & Display",level:3}),`
`,e.jsx(i.p,{children:"Thumbnail / Preview:"}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsx(i.li,{children:"Displays an image preview for supported image types."}),`
`,e.jsx(i.li,{children:"Falls back to a generic file icon for non-image files."}),`
`,e.jsx(i.li,{children:"The thumbnail image is resized and centered to avoid distortion."}),`
`]}),`
`,e.jsx(i.p,{children:"Fallback priority:"}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsx(i.li,{children:"Image preview (if supported format and loads successfully)."}),`
`,e.jsx(i.li,{children:"Generic file icon (if type is unknown or unrecognized)."}),`
`]}),`
`,e.jsx(i.p,{children:"File Metadata:"}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsx(i.li,{children:"File name and extension, displayed with ellipsis truncation if too long; full name exposed via title attribute."}),`
`,e.jsx(i.li,{children:"File size, displayed in human-readable format (e.g., 340 KB, 1.2 MB, 3.4 GB)."}),`
`]}),`
`,e.jsx(i.p,{children:"Remove Action:"}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsx(i.li,{children:"A remove button always visible."}),`
`,e.jsxs(i.li,{children:["Clicking remove should either:",`
`,e.jsxs(i.ul,{children:[`
`,e.jsx(i.li,{children:"Immediately removes the component with a brief undo toast."}),`
`,e.jsx(i.li,{children:"Triggers an inline confirmation step before removal."}),`
`]}),`
`]}),`
`]}),`
`,e.jsx(t,{label:"States",level:3}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsx(i.li,{children:"Default: Thumbnail or fallback icon displayed with full metadata and remove button."}),`
`,e.jsx(i.li,{children:"Read-only: Removal button disabled."}),`
`,e.jsx(i.li,{children:"Loading: Progress Bar shown in place of file size while file uploads."}),`
`,e.jsx(i.li,{children:'Error: Error icon shown with a short error message (e.g., "Preview unavailable" or "Upload failed"); file name and extension remain visible.'}),`
`]}),`
`,e.jsx(t,{label:"Navigation",level:2}),`
`,e.jsx(i.p,{children:"The component is non-interactive by default, except for the remove button."}),`
`,e.jsxs(i.p,{children:["The remove button receives keyboard focus via ",e.jsx(n,{children:"Tab"}),"."]}),`
`,e.jsxs(i.p,{children:["Pressing ",e.jsx(n,{children:"Enter"})," or ",e.jsx(n,{children:"Space"})," on the focused remove button triggers the remove action."]}),`
`,e.jsx(i.p,{children:"Focus moves to the next thumbnail or the previous interactive element after removal."}),`
`,e.jsx(i.p,{children:"General Keyboard Shortcuts:"}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:[e.jsx(n,{children:"Tab"})," : Moves focus to the remove button of the thumbnail."]}),`
`,e.jsxs(i.li,{children:[e.jsx(n,{children:"Enter"})," / ",e.jsx(n,{children:"Space"})," : Activates the focused remove button."]}),`
`,e.jsxs(i.li,{children:[e.jsx(n,{children:"Shift"})," + ",e.jsx(n,{children:"Tab"})," : Moves focus backward to the previous interactive element."]}),`
`]}),`
`,e.jsx(t,{label:"Accessibility",level:2}),`
`,e.jsxs(i.p,{children:["Each ",e.jsx(i.strong,{children:"File Thumbnail"})," must be wrapped in a ",e.jsx(i.code,{children:'role="listitem"'})," element, and its parent container must have ",e.jsx(i.code,{children:'role="list"'})," to allow screen readers to navigate between thumbnails."]}),`
`,e.jsx(i.p,{children:"On remove, if a confirmation step is triggered, focus must move to the confirmation dialog or inline prompt."})]})}function ne(s={}){const{wrapper:i}={...o(),...s.components};return i?e.jsx(i,{...s,children:e.jsx(r,{...s})}):r(s)}export{ne as default};
