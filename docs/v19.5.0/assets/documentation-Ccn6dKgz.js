import{j as e}from"./jsx-runtime-Cfl8ynUo.js";import{useMDXComponents as l}from"./index-ZwkxtaJJ.js";import{k as s}from"./Kbd-BhRHY5DX-DYqBejDt.js";import{M as a}from"./index-Cw5r0Kn8.js";import{E as r,O as d}from"./editable.stories-a0fHKXsB.js";import{A as c}from"./Anatomy-DkXJCwiR.js";import{B as m}from"./Banner-X7WOeBPc.js";import{C as h}from"./Canvas-i2Tfjesg.js";import{I as p,B as u}from"./IdentityCard-D9LjZbLA.js";import{H as i}from"./Heading-Dep_rTif.js";import"./index-jIWwRBLr.js";import"./index-CWkFp9WS-BSIT86NH.js";import"./iframe-DCzti3mm.js";import"./index-DWDEzXrj.js";import"./index-N93khynk.js";import"./index-CXQShRbs.js";import"./index-DrFu-skq.js";import"./Button-B-GJ-1TA.js";import"./index-CqY9YpN0.js";import"./Spinner-DJB5ZadI.js";import"./colors-DSObuHxd.js";import"./context-C_-r2uoG.js";import"./useI18n-C0NLVYPv.js";import"./icon-name-BpdEc4-2.js";import"./FormFieldLabelSubLabel-DCAb65DU.js";import"./Text-CW33_IfE.js";import"./Input-BllcUVFN.js";import"./SelectControl-cFSNnpci.js";import"./index-BYzLHZkt.js";import"./use-locale-context-kHyebpMI.js";import"./portal-CJHwXgLI.js";import"./use-presence-C53EI5fL.js";import"./use-event-c9j7vq_1.js";import"./index-BFzjWlov.js";import"./use-field-context-CnH3sryd.js";import"./Textarea-di6qQWES.js";import"./controls-BtiQQn1l.js";import"./source-CPEZJ6oD.js";import"./ods-react67-C395g5lW.js";import"./TooltipTrigger-C3aN0eJB-DwV7p8FS.js";import"./ods-react121-5kwUyuQy.js";import"./index-CSeLFT3z.js";import"./lz-string-U2heoObX.js";import"./meta-DcQbZjt_.js";import"./ResetTheme-xqxcB8cs.js";import"./tokens-BtVMeYnn.js";import"./Table-D8Me597i-NC3k9YIT.js";import"./ExternalLink-C5hGBmwh.js";import"./Link-TMoA1i18-BDwROQOD.js";import"./Table-5ah53JFf.js";import"./Divider-wQyo85oE-CpSK6tnQ.js";function o(n){const t={li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...l(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{of:r,name:"Documentation",tags:["new"]}),`
`,e.jsx(m,{of:r}),`
`,e.jsx(h,{of:d,sourceState:"none"}),`
`,e.jsx(i,{label:"Overview",level:2}),`
`,e.jsx(p,{aliases:["Inline Editor"],figmaLink:"https://www.figma.com/design/9jDDTcR4a9jPRFcdjawAlf/branch/nrXo7riue1w773W2h4HGBS/ODS---UI-Kit?m=auto&node-id=14291-46529&t=rsFWlOhZe0TlF6Wd-1",githubUrl:"https://github.com/ovh/design-system/tree/master/packages/ods-react/src/components/editable",name:"Editable",startingVersion:19,children:e.jsxs(t.p,{children:["The ",e.jsx(t.strong,{children:"Editable"}),` component allows users to edit text directly in place. It replaces static text with an editable field,
letting users quickly update content without opening a form or modal.`]})}),`
`,e.jsx(i,{label:"Usage",level:2}),`
`,e.jsxs(t.p,{children:["The ",e.jsx(t.strong,{children:"Editable"})," component is used when users need to modify text directly in the interface, without disrupting their workflow."]}),`
`,e.jsx(t.p,{children:"They are commonly used for:"}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsx(t.li,{children:"Inline editing of cell values in a datagrid or table (e.g., a nickname)"}),`
`,e.jsx(t.li,{children:"Editable titles or headings (e.g., rename a dashboard)"}),`
`,e.jsx(t.li,{children:"Settings panels (e.g. configuration values, such as thresholds or labels)"}),`
`,e.jsx(t.li,{children:"Text snippets (e.g., section titles, captions)"}),`
`,e.jsx(t.li,{children:"Lists and todo items"}),`
`]}),`
`,e.jsx(i,{label:"Dos & Don'ts",level:3}),`
`,e.jsx(u,{donts:["- Remove visual cues that indicate editability.","- Use Editable for long or complex form content.","- Use Editable when changes must be reviewed or explicitly confirmed in a separate step."],dos:["- Use Editable when users need to edit values quickly and frequently.","- Define a reasonable max length to prevent layout overflow.","- Ensure editable content has a meaningful default or empty state."]}),`
`,e.jsx(i,{label:"Best Practices in Context",level:3}),`
`,e.jsx(c,{src:"components/editable/anatomy.png"}),`
`,e.jsxs(t.ol,{children:[`
`,e.jsx(t.li,{children:e.jsx(t.strong,{children:"Editable"})}),`
`,e.jsx(t.li,{children:e.jsx(t.strong,{children:"Preview / Editing field"})}),`
`,e.jsx(t.li,{children:e.jsx(t.strong,{children:"Actions"})}),`
`]}),`
`,e.jsx(t.p,{children:"Preview displays static text when not in edit mode while the field is visible only during edit mode."}),`
`,e.jsx(i,{label:"Behavior",level:2}),`
`,e.jsx(i,{label:"Edit Activation",level:3}),`
`,e.jsx(t.p,{children:"Users can enter edit mode through different triggers:"}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsx(t.li,{children:"By click on the edit trigger"}),`
`,e.jsx(t.li,{children:"By double-click on the preview"}),`
`]}),`
`,e.jsx(i,{label:"Editing",level:3}),`
`,e.jsx(t.p,{children:"When entering edit mode, the preview is replaced by a field containing the current value."}),`
`,e.jsx(t.p,{children:"Users can type in the field and update the current value."}),`
`,e.jsx(i,{label:"Submission",level:3}),`
`,e.jsx(t.p,{children:"The editable value should be committed when the user activates the submit trigger."}),`
`,e.jsx(i,{label:"Cancellation",level:3}),`
`,e.jsx(t.p,{children:"Activating the cancel trigger should discard the current changes and returns the component to its previous value."}),`
`,e.jsx(i,{label:"Empty",level:3}),`
`,e.jsx(t.p,{children:"If the current value is empty, an empty state should be displayed to indicate that no content has been defined yet."}),`
`,e.jsx(i,{label:"Navigation",level:2}),`
`,e.jsx(i,{label:"Focus Management",level:3}),`
`,e.jsx(t.p,{children:"When edit mode is entered, focus should moves to the expected field."}),`
`,e.jsx(t.p,{children:"Exiting edit mode returns focus according to the surrounding context."}),`
`,e.jsx(i,{label:"General Keyboard Shortcuts",level:3}),`
`,e.jsxs(t.p,{children:["Pressing ",e.jsx(s,{children:"Tab"})," moves focus forward to the next interactive element."]}),`
`,e.jsxs(t.p,{children:["Pressing ",e.jsx(s,{children:"Shift"})," + ",e.jsx(s,{children:"Tab"})," moves focus backward to the previous interactive element."]}),`
`,e.jsxs(t.p,{children:["Pressing ",e.jsx(s,{children:"Enter"})," on the edit trigger activates edit mode."]}),`
`,e.jsxs(t.p,{children:["Pressing ",e.jsx(s,{children:"Enter"})," on the submit trigger should commit the current value and exits edit mode."]}),`
`,e.jsxs(t.p,{children:["Pressing ",e.jsx(s,{children:"Enter"})," on the cancel trigger should discard the current changes and exits edit mode."]}),`
`,e.jsx(i,{label:"Accessibility",level:2}),`
`,e.jsxs(t.p,{children:["Accessibility depends on the form elements used within ",e.jsx(t.strong,{children:"Editable"}),`.
Make sure inputs, triggers and custom actions follow standard accessibility rules.`]})]})}function he(n={}){const{wrapper:t}={...l(),...n.components};return t?e.jsx(t,{...n,children:e.jsx(o,{...n})}):o(n)}export{he as default};
