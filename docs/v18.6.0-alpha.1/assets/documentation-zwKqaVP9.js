import{j as o,M as l,C as d}from"./index-BCVJDEqf.js";import{u as p}from"./index-_YJSRz3a.js";import{P as a,O as c}from"./progress-bar.stories-BPXRXFjo.js";import{B as g}from"./Banner-rrMSB4A0.js";import{I as h,A as u,B as x}from"./IdentityCard-CmaN0nrQ.js";import{H as r}from"./Heading-DYNNEBec.js";import{S as s,O as i,a as n}from"./StorybookLink-D-rUt3MS.js";import"./iframe-B5YUgUg3.js";import"../sb-preview/runtime.js";import"./index-8AfNH5n5.js";import"./index-D-8MO0q_.js";import"./index-DrFu-skq.js";import"./ods-progress-bar2-Dg_V5kiw.js";import"./index-DAZhnxgO.js";import"./controls-DX883vx3.js";import"./index-BLVG44ao.js";import"./index-CwrMpZKn.js";import"./ods-accordion2-C_uqOg6Y.js";import"./icon-name-C6aMXAXT.js";import"./ods-icon2-DRPHarK1.js";import"./ods-badge-DLluvt0I.js";import"./ods-breadcrumb-item2-C_Ah5FZN.js";import"./ods-link2-CtVFUlMR.js";import"./ods-button2-dPaqs0uX.js";import"./ods-spinner2-CPyWCS2f.js";import"./ods-card-CsxtEQHf.js";import"./ods-checkbox2-CJl-a8ad.js";import"./dom-8hoR-urs.js";import"./ods-clipboard2-CewZJu-c.js";import"./ods-input2-C6KOqFAM.js";import"./type-B5zI8QxY.js";import"./ods-tooltip2-CW12aP9b.js";import"./overlay-KZpfSxWH.js";import"./ods-code2-BL2TW0HP.js";import"./ods-combobox2-BXJ8jrhz.js";import"./_commonjsHelpers-CLD5em3H.js";import"./debounce-DRefBDpX.js";import"./ods-tag2-Bb2BMy9d.js";import"./ods-datepicker2-CijAhCPy.js";import"./locale-NOa-Gxlr.js";import"./ods-divider-Dtiri0aY.js";import"./ods-divider2-yzIshch6.js";import"./ods-drawer2-DKhK7oOX.js";import"./ods-file-upload2-Ca3mZ5BD.js";import"./ods-form-field2-BDYkM6lU.js";import"./ods-icon-DTp5PnPI.js";import"./ods-input-CCQ46ZEm.js";import"./ods-link-BCeMi6SV.js";import"./ods-medium2-BnayTic8.js";import"./ods-message-DuyDaLcv.js";import"./ods-modal2-DCK89o-L.js";import"./ods-pagination2-shUGU0gB.js";import"./ods-select2-CEKvSxa4.js";import"./ods-password2-D64-z8ym.js";import"./ods-phone-number2-BL58mHzY.js";import"./ods-popover2-mGbx5HiL.js";import"./ods-quantity2-7U22nj6z.js";import"./ods-radio2-DDJaSdNS.js";import"./ods-range2-wBjnlon-.js";import"./ods-skeleton2-B7sDasgF.js";import"./ods-switch-item2-D-SJNcDd.js";import"./ods-tabs2-ChMEr-fQ.js";import"./ods-table2-oe37kiP3.js";import"./ods-text-BO_pN8NQ.js";import"./ods-textarea2-BDOVTqwb.js";import"./ods-timepicker2-DVnCnUkw.js";import"./ods-toggle2-Bg02aln1.js";function m(t){const e={code:"code",em:"em",img:"img",li:"li",ol:"ol",p:"p",span:"span",strong:"strong",...p(),...t.components};return o.jsxs(o.Fragment,{children:[o.jsx(l,{of:a,name:"Documentation"}),`
`,o.jsx(g,{of:a}),`
`,o.jsx(e.p,{children:o.jsx(e.em,{children:"A horizontal bar indicating the current completion status of a long-running task, usually updated continuously as the task progresses, instead of in discrete steps."})}),`
`,o.jsx(d,{of:c,sourceState:"none"}),`
`,o.jsx(r,{label:"Overview",level:2}),`
`,o.jsx(h,{aliases:["Progress","Progress Loader","Preloader","Loading Bar","Progress Indicator"],atomicType:u.atom,figmaLink:"https://www.figma.com/design/9jDDTcR4a9jPRFcdjawAlf/ODS---UI-Kit?node-id=49-8976",githubUrl:"https://github.com/ovh/design-system/tree/master/packages/ods/src/components/progress-bar",name:"Progress Bar",relatedComponents:[{name:"Text"}],children:o.jsxs(e.p,{children:["The ",o.jsx(e.strong,{children:"Progress Bar"}),` component is used to indicate the progress of a task or process to users. It visually
represents the completion percentage, providing users with feedback on the status of ongoing operations, such as
`,o.jsx(s,{kind:i.fileUpload,label:"File upload",story:n.documentation}),", downloads, or form submissions."]})}),`
`,o.jsx(r,{label:"Anatomy",level:2}),`
`,o.jsx(e.p,{children:o.jsx(e.img,{src:"components/progress-bar/anatomy.png",alt:"Component anatomy",title:"Component anatomy"})}),`
`,o.jsxs(e.ol,{children:[`
`,o.jsxs(e.li,{children:[o.jsx(e.strong,{children:"Track"}),": displays the visual range of progression, from a starting to an ending position"]}),`
`,o.jsxs(e.li,{children:[o.jsx(e.strong,{children:"Filled track"}),": represents the visual progression value within the ",o.jsx(e.strong,{children:"Progress Bar"}),"."]}),`
`]}),`
`,o.jsx(r,{label:"Usage",level:2}),`
`,o.jsxs(e.p,{children:[o.jsx(e.strong,{children:"Progress Bar"})," component is only used in process progression, such as submitting, uploading or saving items."]}),`
`,o.jsx(r,{label:"Dos & Don'ts",level:3}),`
`,o.jsx(x,{donts:["- Use Progress Bar for data visualization","- Use all three starting value, ending value and progress value labels at the same time"],dos:[o.jsxs(e.span,{children:["- Use Progress Bar for quantifiable loading; if not, please use ",o.jsx(s,{kind:i.spinner,label:"Spinner",story:n.documentation})," for complex content or ",o.jsx(s,{kind:i.skeleton,label:"Skeleton",story:n.documentation})," for ",o.jsx(s,{kind:i.text,label:"Text",story:n.documentation}),"-only content"]})]}),`
`,o.jsx(r,{label:"Placement",level:2}),`
`,o.jsxs(e.p,{children:[o.jsx(e.strong,{children:"Progress Bar"})," is usually centered in its container, and can be stretched to match the container width if necessary."]}),`
`,o.jsx(r,{label:"Behavior",level:2}),`
`,o.jsxs(e.p,{children:[o.jsx(e.strong,{children:"Progress Bar"})," is filled from the minimum to the maximum value, depending on the progress described."]}),`
`,o.jsx(r,{label:"Variation",level:2}),`
`,o.jsx(e.p,{children:"N/A"}),`
`,o.jsx(r,{label:"Accessibility",level:2}),`
`,o.jsxs(e.p,{children:["User is being notified of its loading based on the ARIA ",o.jsx(e.code,{children:"live"})," property."]})]})}function Ao(t={}){const{wrapper:e}={...p(),...t.components};return e?o.jsx(e,{...t,children:o.jsx(m,{...t})}):m(t)}export{Ao as default};
