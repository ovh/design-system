import{j as e}from"./jsx-runtime-Cfl8ynUo.js";import{useMDXComponents as l}from"./index-ZwkxtaJJ.js";import{k as r}from"./Kbd-CQAfxA-4-mq9ej7QP.js";import{M as a}from"./index-DBhu1Uji.js";import{E as s,O as d}from"./editable.stories-pWKlcy3S.js";import{A as c}from"./Anatomy-CqwcYEDe.js";import{B as m}from"./Banner-CTn57inQ.js";import{C as h}from"./Canvas-8Qs4JaTy.js";import{B as p}from"./BestPractices-DyDReNjg.js";import{H as i}from"./Heading-BYU90ura.js";import{I as u}from"./IdentityCard-BK7dxrtI.js";import"./index-jIWwRBLr.js";import"./index-B2JRaoNz-yqrnVa7N.js";import"./iframe-B0u0SFI5.js";import"./index-CBDu-Hu-.js";import"./index-BU5bNkZt.js";import"./index-DgH-xKnr.js";import"./index-DrFu-skq.js";import"./Button-FbO6Dzi8.js";import"./index-C322fmIg.js";import"./Spinner-MPv5lneh.js";import"./colors-B-ZpHcIp.js";import"./divider-color-DMT-YAbT.js";import"./context-C_-r2uoG.js";import"./AsChild-BQ85kudz.js";import"./useI18n-C0NLVYPv.js";import"./icon-name-Dvh-h22i.js";import"./index-DH_BFchB.js";import"./Text-CzHK83-l.js";import"./Input-6AH7vp_K.js";import"./index-fFE0p0-6.js";import"./index-BY80_Tj9.js";import"./index-DsEC0KyJ.js";import"./use-locale-context-DGdTKe6e.js";import"./portal-bleW59MO.js";import"./use-presence-BWJBMCCb.js";import"./use-event-c9j7vq_1.js";import"./index-FdZ2e-bZ.js";import"./use-field-context-CkVznB2N.js";import"./Textarea-CsFsC7cj.js";import"./controls-BtiQQn1l.js";import"./source-CPEZJ6oD.js";import"./icon-name-Dw8X1wVO-CGXOlIt0.js";import"./index-BUs_y8So.js";import"./context-Z_Xa7sWf-5kwUyuQy.js";import"./index-FEhFxDPX.js";import"./lz-string-DchBFh8t.js";import"./meta-twt-Yy4M.js";import"./ResetTheme-CLF5P7Bf.js";import"./tokens-BrWUS-3i.js";import"./divider-color-Db-mIl6C-CkLYwequ.js";import"./colors-C1Wmnk_L-aAAP9SXj.js";import"./Table-CVRGubjq-DRuAT4A2.js";import"./ExternalLink-CLruuYCX.js";import"./Link-nyzSghSi-C9HsY39r.js";import"./Table-CddzZ923.js";function o(n){const t={li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...l(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{of:s,name:"Documentation"}),`
`,e.jsx(m,{of:s}),`
`,e.jsx(h,{of:d,sourceState:"none"}),`
`,e.jsx(i,{label:"Overview",level:2}),`
`,e.jsx(u,{aliases:["Inline Editor"],figmaLink:"https://www.figma.com/design/9jDDTcR4a9jPRFcdjawAlf/branch/nrXo7riue1w773W2h4HGBS/ODS---UI-Kit?m=auto&node-id=14291-46529&t=rsFWlOhZe0TlF6Wd-1",githubUrl:"https://github.com/ovh/design-system/tree/master/packages/ods-react/src/components/editable",name:"Editable",startingVersion:19,children:e.jsxs(t.p,{children:["The ",e.jsx(t.strong,{children:"Editable"}),` component allows users to edit text directly in place. It replaces static text with an editable field,
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
`,e.jsx(p,{donts:["- Remove visual cues that indicate editability.","- Use Editable for long or complex form content.","- Use Editable when changes must be reviewed or explicitly confirmed in a separate step."],dos:["- Use Editable when users need to edit values quickly and frequently.","- Define a reasonable max length to prevent layout overflow.","- Ensure editable content has a meaningful default or empty state."]}),`
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
`,e.jsxs(t.p,{children:["Pressing ",e.jsx(r,{children:"Tab"})," moves focus forward to the next interactive element."]}),`
`,e.jsxs(t.p,{children:["Pressing ",e.jsx(r,{children:"Shift"})," + ",e.jsx(r,{children:"Tab"})," moves focus backward to the previous interactive element."]}),`
`,e.jsxs(t.p,{children:["Pressing ",e.jsx(r,{children:"Enter"})," on the edit trigger activates edit mode."]}),`
`,e.jsxs(t.p,{children:["Pressing ",e.jsx(r,{children:"Enter"})," on the submit trigger should commit the current value and exits edit mode."]}),`
`,e.jsxs(t.p,{children:["Pressing ",e.jsx(r,{children:"Enter"})," on the cancel trigger should discard the current changes and exits edit mode."]}),`
`,e.jsx(i,{label:"Accessibility",level:2}),`
`,e.jsxs(t.p,{children:["Accessibility depends on the form elements used within ",e.jsx(t.strong,{children:"Editable"}),`.
Make sure inputs, triggers and custom actions follow standard accessibility rules.`]})]})}function je(n={}){const{wrapper:t}={...l(),...n.components};return t?e.jsx(t,{...n,children:e.jsx(o,{...n})}):o(n)}export{je as default};
