import{j as e}from"./jsx-runtime-VM66peLj.js";import{useMDXComponents as j}from"./index-DQB45XCM.js";import{a as r,o as n}from"./ods-react61-BFiU7C5S.js";import{m as A}from"./index-2w0W-O47-BJ19ihbZ.js";import{r as v}from"./index-D_CmzhJ4.js";import{E as a,$ as d,S as h}from"./MessageIcon-CRLljMl--B2z7tB5Q.js";import{M as w,C as c}from"./index-DQDMPrC3.js";import{E as i}from"./ExternalLink-F7ndcp9T.js";import{H as t}from"./Heading-BTR1K1mm.js";import{c as R,a as S,d as I,b as k,e as W,f as D,g as U,h as M}from"./button.stories-Ba4sDe-M.js";import{c as q,a as z,d as G,e as C}from"./icon.stories-B2ABFwUD.js";import{g as _,a as T}from"./modal.stories-Dkryd0k_.js";import{a as F,A as O}from"./skeleton.stories-DLezH-cX.js";import"./useI18n-BLNVfTvk-pLVIi2Iu.js";import"./ods-react222-B9lkGKUh.js";import"./ods-react66-BIRpP5yN.js";import"./ods-react91-l5fgq-IX.js";import"./iframe-llaHorau.js";import"./index-ChzAxGiP.js";import"./index-CucsY3YN.js";import"./index-CXQShRbs.js";import"./index-DrFu-skq.js";import"./Link-DTswNFmS-CEk9YBDP.js";import"./Divider-DwZugXnI-RR--JbES.js";import"./Button-Cu9Xbu09.js";import"./index-CkQHsVsO.js";import"./Spinner-BdLZU4dE.js";import"./colors-DSObuHxd.js";import"./icon-name-CL_C5kfn.js";import"./controls-BtiQQn1l.js";import"./source-d0g_Nd0q.js";import"./dialog-trigger-BvXFYgVb.js";import"./use-locale-context-DLC4Hyvy.js";import"./use-presence-BH5ft0ba.js";import"./use-event-OCVb0O1l.js";import"./render-strategy-sz9fehwg.js";import"./portal-CjJhVgfZ.js";import"./index-DninfMAu.js";import"./index-EI2n6HsL.js";import"./index-2YjOWgCH.js";import"./useI18n-CFuCjRRO.js";import"./SelectControl-CmmZyh2D.js";import"./FormFieldLabel-DQkMrZpp.js";import"./Text-B1XN51Xz.js";import"./collection-D1icvmxM.js";import"./index-inT8qsA6.js";import"./use-field-context--XabuWSL.js";import"./TooltipTrigger--1kPNsOd.js";import"./overlay-CZHjGBMC.js";import"./index-Rz4wIOao.js";var x=(l=>(l.lg="lg",l.md="md",l.sm="sm",l))(x||{});Object.freeze(Object.values(x));var m=(l=>(l.default="default",l.striped="striped",l))(m||{});Object.freeze(Object.values(m));const u={"table--sm":"_table--sm_1xkmm_2","table--md":"_table--md_1xkmm_54","table--lg":"_table--lg_1xkmm_106","table--striped":"_table--striped_1xkmm_158"},o=v.forwardRef(({children:l,className:s,size:p=x.md,variant:f=m.default,...g},y)=>e.jsx("table",{className:A(u.table,u[`table--${p}`],u[`table--${f}`],s),"data-ods":"table",ref:y,...g,children:l}));o.displayName="Table";o.__docgenInfo={description:"",methods:[],displayName:"Table",props:{size:{defaultValue:{value:"d.md",computed:!0},required:!1},variant:{defaultValue:{value:"p.default",computed:!0},required:!1}}};function b(l){const s={code:"code",li:"li",p:"p",strong:"strong",ul:"ul",...j(),...l.components};return e.jsxs(e.Fragment,{children:[e.jsx(w,{title:"OVHcloud Design System/Guides/Accessibility"}),`
`,e.jsx(t,{label:"Accessibility Guide",level:1}),`
`,e.jsx(t,{label:"Introduction",level:2}),`
`,e.jsxs(s.p,{children:["This guide focuses on accessibility best practices specifically for developers integrating the ",e.jsx(s.strong,{children:"OVHcloud Design System"}),"."]}),`
`,e.jsx(s.p,{children:`While our components are built with accessibility in mind, using semantic HTML elements and including the necessary ARIA attributes by default.
Nevertheless, ensuring full accessibility in your specific use case might require you to implement additional ARIA attributes, roles, and behaviors at the integration level.`}),`
`,e.jsx(s.p,{children:"However, depending on the context, you might need to enhance a component's accessibility. This guide will help you understand:"}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsx(s.li,{children:"When and how to use ARIA properly"}),`
`,e.jsx(s.li,{children:"Common mistakes and best practices"}),`
`,e.jsx(s.li,{children:"How screen readers interpret different ARIA attributes"}),`
`]}),`
`,e.jsxs(s.p,{children:["For broader accessibility information beyond the ",e.jsx(s.strong,{children:"OVHcloud Design System"}),", consult our ",e.jsx(i,{href:"https://www.ovhcloud.com/fr/accessibility/",children:"Accessibility Statement"})," available on our official website."]}),`
`,e.jsx(t,{label:"Before using ARIA",level:3}),`
`,e.jsx(t,{label:"Consult the Accessibility section for each component",level:4}),`
`,e.jsxs(s.p,{children:["Each component in ",e.jsx(s.strong,{children:"OVHcloud Design System"})," comes with a dedicated ",e.jsx(s.strong,{children:'"Accessibility"'})," section that provides best practices and usage guidance."]}),`
`,e.jsx(t,{label:"Be careful when adding extra ARIA attributes as ODS components may already handle it",level:4}),`
`,e.jsxs(s.p,{children:["To be as close as possible to the accessible experiences provided by modern browsers, ",e.jsx(s.strong,{children:"OVHcloud Design System"})," aims to rely on semantic and native HTML elements whenever they are inherently well-suited for screen reader experiences."]}),`
`,e.jsxs(s.p,{children:["In addition to the predefined accessibility features of our components, you can find more guidance regarding accessible integration in the ",e.jsx(s.strong,{children:'"Accessibility"'})," section."]}),`
`,e.jsx(t,{label:"Essential ARIA attributes",level:2}),`
`,e.jsx(t,{label:"aria-label: Providing an accessible name",level:3}),`
`,e.jsxs(s.p,{children:["Use ",e.jsx(i,{href:"https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label",children:"aria-label"})," when an element needs a descriptive name but has no visible text."]}),`
`,e.jsx(c,{of:R,sourceState:"shown"}),`
`,e.jsxs(s.p,{children:[e.jsx(r,{name:n.circleXmark,style:{color:"var(--ods-color-critical-500)"}})," Screen readers will announce a button."]}),`
`,e.jsx(c,{of:S,sourceState:"shown"}),`
`,e.jsxs(s.p,{children:[e.jsx(r,{name:n.circleCheck,style:{color:"var(--ods-color-success-500)"}})," Screen readers will announce a button and the aria-label."]}),`
`,e.jsx(t,{label:"Related Sources",level:4}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[`
`,e.jsx(i,{href:"https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label",children:"MDN Documentation - aria-label"}),`
`]}),`
`,e.jsxs(s.li,{children:[`
`,e.jsx(i,{href:"https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#6.1",children:"RGAA - 6.1"}),`
`]}),`
`,e.jsxs(s.li,{children:[`
`,e.jsx(i,{href:"https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#7.2",children:"RGAA - 7.2"}),`
`]}),`
`,e.jsxs(s.li,{children:[`
`,e.jsx(i,{href:"https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#11.1",children:"RGAA - 11.1"}),`
`]}),`
`,e.jsxs(s.li,{children:[`
`,e.jsx(i,{href:"https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#11.2",children:"RGAA - 11.2"}),`
`]}),`
`,e.jsxs(s.li,{children:[`
`,e.jsx(i,{href:"https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#11.9",children:"RGAA - 11.9"}),`
`]}),`
`]}),`
`,e.jsx(t,{label:"aria-labelledby: Referencing another element as a label",level:3}),`
`,e.jsxs(s.p,{children:["Use ",e.jsx(i,{href:"https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby",children:"aria-labelledby"})," to associate an element with an existing label (instead of duplicating text)."]}),`
`,e.jsx(c,{of:I,sourceState:"shown"}),`
`,e.jsxs(s.p,{children:[e.jsx(r,{name:n.circleXmark,style:{color:"var(--ods-color-critical-500)"}})," Screen readers will announce a button."]}),`
`,e.jsx(c,{of:k,sourceState:"shown"}),`
`,e.jsxs(s.p,{children:[e.jsx(r,{name:n.circleCheck,style:{color:"var(--ods-color-success-500)"}})," When the ",e.jsx(s.strong,{children:"Button"})," is focused, the screen reader should announce the linked label."]}),`
`,e.jsxs(a,{dismissible:!1,style:{width:"100%"},children:[e.jsx(d,{name:"circle-info"}),e.jsx(h,{children:e.jsxs(s.p,{children:["Use ",e.jsx(i,{href:"https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label",children:"aria-label"})," when there is no visible label, and ",e.jsx(i,{href:"https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby",children:"aria-labelledby"})," when there is one."]})})]}),`
`,e.jsx(t,{label:"Related Sources",level:4}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[`
`,e.jsx(i,{href:"https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby",children:"MDN Documentation - aria-labelledby"}),`
`]}),`
`,e.jsxs(s.li,{children:[`
`,e.jsx(i,{href:"https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#6.1",children:"RGAA - 6.1"}),`
`]}),`
`,e.jsxs(s.li,{children:[`
`,e.jsx(i,{href:"https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#7.2",children:"RGAA - 7.2"}),`
`]}),`
`,e.jsxs(s.li,{children:[`
`,e.jsx(i,{href:"https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#11.1",children:"RGAA - 11.1"}),`
`]}),`
`,e.jsxs(s.li,{children:[`
`,e.jsx(i,{href:"https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#11.2",children:"RGAA - 11.2"}),`
`]}),`
`,e.jsxs(s.li,{children:[`
`,e.jsx(i,{href:"https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#11.5",children:"RGAA - 11.5"}),`
`]}),`
`,e.jsxs(s.li,{children:[`
`,e.jsx(i,{href:"https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#11.9",children:"RGAA - 11.9"}),`
`]}),`
`]}),`
`,e.jsx(t,{label:"aria-describedby: Providing additional context",level:3}),`
`,e.jsxs(s.p,{children:[e.jsx(i,{href:"https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-describedby",children:"aria-describedby"})," associates an interactive element with extra information, ensuring screen reader users receive helpful guidance without disrupting the UI."]}),`
`,e.jsx(t,{label:"Difference between aria-labelledby and aria-describedby",level:4}),`
`,e.jsxs(o,{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{scope:"col",children:"Attribute"}),e.jsx("th",{scope:"col",children:"Purpose"}),e.jsx("th",{scope:"col",children:"When to use it?"}),e.jsx("th",{scope:"col",children:"Reading order"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("th",{scope:"row",style:{textAlign:"left"},children:"aria-labelledby"}),e.jsx("td",{children:"Defines the main context of the element"}),e.jsx("td",{children:"When an element has no visible text or needs an external label"}),e.jsx("td",{children:"Read first by the screen reader"})]}),e.jsxs("tr",{children:[e.jsx("th",{scope:"row",style:{textAlign:"left"},children:"aria-describedby"}),e.jsx("td",{children:"Provides additional description"}),e.jsx("td",{children:"When secondary information is needed to clarify context"}),e.jsx("td",{children:"Read after the main label"})]})]})]}),`
`,e.jsx(t,{label:"When to use aria-labelledby vs aria-describedby?",level:4}),`
`,e.jsxs(o,{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{scope:"col",children:"Use case"}),e.jsx("th",{scope:"col",children:e.jsx("code",{children:"aria-labelledby"})}),e.jsx("th",{scope:"col",children:e.jsx("code",{children:"aria-describedby"})})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("th",{scope:"row",style:{textAlign:"left"},children:"Use an external / hidden label"}),e.jsx("td",{style:{textAlign:"center"},children:e.jsx(r,{name:n.circleCheck,style:{color:"var(--ods-color-success-500)"}})}),e.jsx("td",{style:{textAlign:"center"},children:e.jsx(r,{name:n.circleXmark,style:{color:"var(--ods-color-critical-500)"}})})]}),e.jsxs("tr",{children:[e.jsx("th",{scope:"row",style:{textAlign:"left"},children:"Add complementary information"}),e.jsx("td",{style:{textAlign:"center"},children:e.jsx(r,{name:n.circleXmark,style:{color:"var(--ods-color-critical-500)"}})}),e.jsx("td",{style:{textAlign:"center"},children:e.jsx(r,{name:n.circleCheck,style:{color:"var(--ods-color-success-500)"}})})]}),e.jsxs("tr",{children:[e.jsx("th",{scope:"row",style:{textAlign:"left"},children:"Associate multiple elements to form a label (field group)"}),e.jsx("td",{style:{textAlign:"center"},children:e.jsx(r,{name:n.circleCheck,style:{color:"var(--ods-color-success-500)"}})}),e.jsx("td",{style:{textAlign:"center"},children:e.jsx(r,{name:n.circleXmark,style:{color:"var(--ods-color-critical-500)"}})})]}),e.jsxs("tr",{children:[e.jsx("th",{scope:"row",style:{textAlign:"left"},children:"Provide contextual help / information (e.g., input rules, field error)"}),e.jsx("td",{style:{textAlign:"center"},children:e.jsx(r,{name:n.circleXmark,style:{color:"var(--ods-color-critical-500)"}})}),e.jsx("td",{style:{textAlign:"center"},children:e.jsx(r,{name:n.circleCheck,style:{color:"var(--ods-color-success-500)"}})})]})]})]}),`
`,e.jsx(c,{of:_,sourceState:"shown"}),`
`,e.jsxs(s.p,{children:[e.jsx(r,{name:n.circleXmark,style:{color:"var(--ods-color-critical-500)"}})," Screen readers won't announce the ",e.jsx(s.strong,{children:"Modal"})," content."]}),`
`,e.jsx(c,{of:T,sourceState:"shown"}),`
`,e.jsxs(s.p,{children:[e.jsx(r,{name:n.circleCheck,style:{color:"var(--ods-color-success-500)"}})," Screen readers will announce the ",e.jsx(s.strong,{children:"Modal"})," content."]}),`
`,e.jsx(t,{label:"Related Sources",level:4}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[`
`,e.jsx(i,{href:"https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-describedby",children:"MDN Documentation - aria-describedby"}),`
`]}),`
`,e.jsxs(s.li,{children:[`
`,e.jsx(i,{href:"https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#11.5",children:"RGAA - 11.5"}),`
`]}),`
`,e.jsxs(s.li,{children:[`
`,e.jsx(i,{href:"https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#11.10",children:"RGAA - 11.10"}),`
`]}),`
`]}),`
`,e.jsx(t,{label:"aria-hidden: Hiding elements from screen readers",level:3}),`
`,e.jsxs(s.p,{children:["Use ",e.jsx(i,{href:"https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-hidden",children:"aria-hidden"})," set to ",e.jsx(s.code,{children:'"true"'})," on elements that are purely decorative and should not be announced by screen readers."]}),`
`,e.jsx(c,{of:q,sourceState:"shown"}),`
`,e.jsxs(s.p,{children:[e.jsx(r,{name:n.circleXmark,style:{color:"var(--ods-color-critical-500)"}})," Some screen readers will announce the icon and detect the presence of the image."]}),`
`,e.jsxs(a,{dismissible:!1,style:{width:"100%"},children:[e.jsx(d,{name:"circle-info"}),e.jsx(h,{children:e.jsx(s.p,{children:"Depending on the screen reader, some additional information might be read aloud, which is confusing and unhelpful."})})]}),`
`,e.jsx(c,{of:z,sourceState:"shown"}),`
`,e.jsxs(s.p,{children:[e.jsx(r,{name:n.circleCheck,style:{color:"var(--ods-color-success-500)"}})," Screen readers will announce nothing, the icon is ignored."]}),`
`,e.jsx(t,{label:"Related Sources",level:4}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[`
`,e.jsx(i,{href:"https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-hidden",children:"MDN Documentation - aria-hidden"}),`
`]}),`
`,e.jsxs(s.li,{children:[`
`,e.jsx(i,{href:"https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#11.2",children:"RGAA - 11.2"}),`
`]}),`
`]}),`
`,e.jsx(t,{label:"aria-busy: Indicating loading state",level:3}),`
`,e.jsx(s.p,{children:"When a section of the UI is loading, users should be informed that the content is not yet ready."}),`
`,e.jsxs(s.p,{children:[e.jsx(i,{href:"https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-busy",children:"aria-busy"})," set to ",e.jsx(s.code,{children:'"true"'})," signals that an element is currently in a loading state. Once loading is complete, ",e.jsx(s.code,{children:"aria-busy"})," should be set to ",e.jsx(s.code,{children:'"false"'}),"."]}),`
`,e.jsx(c,{of:F,sourceState:"shown"}),`
`,e.jsxs(s.p,{children:[e.jsx(r,{name:n.circleXmark,style:{color:"var(--ods-color-critical-500)"}})," Screen readers will give no indication that the content is loading. The screen reader may start reading the page without knowing that this section is waiting to be updated."]}),`
`,e.jsx(c,{of:O,sourceState:"shown"}),`
`,e.jsxs(s.p,{children:[e.jsx(r,{name:n.circleXmark,style:{color:"var(--ods-color-success-500)"}})," Screen readers understand that the content is not yet ready, so they delay announcing or interacting with it."]}),`
`,e.jsx(t,{label:"Related Sources",level:4}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[`
`,e.jsx(i,{href:"https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-busy",children:"MDN Documentation - aria-busy"}),`
`]}),`
`,e.jsxs(s.li,{children:[`
`,e.jsx(i,{href:"https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#7.4",children:"RGAA - 7.4"}),`
`]}),`
`]}),`
`,e.jsx(t,{label:"status role: Announcing dynamic status changes",level:3}),`
`,e.jsxs(s.p,{children:["Use ",e.jsx(i,{href:"https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Reference/Roles/status_role",children:"status role"})," to ensure that important updates are announced by screen readers without disrupting focus."]}),`
`,e.jsx(c,{of:W,sourceState:"shown"}),`
`,e.jsxs(s.p,{children:[e.jsx(r,{name:n.circleXmark,style:{color:"var(--ods-color-critical-500)"}})," Screen readers will announce the button and its label."]}),`
`,e.jsx(c,{of:D,sourceState:"shown"}),`
`,e.jsxs(s.p,{children:[e.jsx(r,{name:n.circleCheck,style:{color:"var(--ods-color-success-500)"}})," Screen readers will announce the button and its label, and the message on click or press."]}),`
`,e.jsxs(a,{dismissible:!1,style:{width:"100%"},children:[e.jsx(d,{name:"circle-info"}),e.jsx(h,{children:e.jsx(s.p,{children:"It also matters since it keeps focus on the button, avoiding disruption for keyboard users."})})]}),`
`,e.jsx(t,{label:"Related Sources",level:4}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[`
`,e.jsx(i,{href:"https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Reference/Roles/status_role",children:"MDN Documentation - status role"}),`
`]}),`
`,e.jsxs(s.li,{children:[`
`,e.jsx(i,{href:"https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#7.4",children:"RGAA - 7.4"}),`
`]}),`
`]}),`
`,e.jsx(t,{label:"alert role: Announcing important messages",level:3}),`
`,e.jsxs(s.p,{children:["Use ",e.jsx(i,{href:"https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Reference/Roles/alert_role",children:"alert role"})," for critical, time-sensitive messages that require immediate attention. Unlike ",e.jsx(s.code,{children:"status role"}),", ",e.jsx(s.code,{children:"alert role"})," is announced by screen readers, even if the user is focused elsewhere."]}),`
`,e.jsx(c,{of:U,sourceState:"shown"}),`
`,e.jsxs(s.p,{children:[e.jsx(r,{name:n.circleXmark,style:{color:"var(--ods-color-critical-500)"}})," Screen readers won’t immediately announce the error message when it appears, unless the user manually navigates to it."]}),`
`,e.jsx(c,{of:M,sourceState:"shown"}),`
`,e.jsxs(s.p,{children:[e.jsx(r,{name:n.circleCheck,style:{color:"var(--ods-color-success-500)"}})," Screen readers will announce the error message, even when the user is focused elsewhere."]}),`
`,e.jsx(t,{label:"Related Sources",level:4}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[`
`,e.jsx(i,{href:"https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Reference/Roles/alert_role",children:"MDN Documentation - alert role"}),`
`]}),`
`,e.jsxs(s.li,{children:[`
`,e.jsx(i,{href:"https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#7.4",children:"RGAA - 7.4"}),`
`]}),`
`]}),`
`,e.jsx(t,{label:"radiogroup and radio roles: Making custom radio controls accessible",level:3}),`
`,e.jsxs(s.p,{children:[e.jsx(i,{href:"https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Reference/Roles/radiogroup_role",children:"radiogroup"})," and ",e.jsx(i,{href:"https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Reference/Roles/radio_role",children:"radio"})," roles ensure that screen readers correctly interpret and announce the selection."]}),`
`,e.jsx(c,{of:G,sourceState:"shown"}),`
`,e.jsxs(s.p,{children:[e.jsx(r,{name:n.circleXmark,style:{color:"var(--ods-color-critical-500)"}})," Screen readers will read each star individually with no context of selection group."]}),`
`,e.jsx(c,{of:C,sourceState:"shown"}),`
`,e.jsxs(s.p,{children:[e.jsx(r,{name:n.circleCheck,style:{color:"var(--ods-color-success-500)"}})," Screen readers will announce a radio button, its label and aria-label, which item is focused on out of the total amount of items and that it is a radio group."]}),`
`,e.jsxs(a,{dismissible:!1,style:{width:"100%"},children:[e.jsx(d,{name:"circle-info"}),e.jsx(h,{children:e.jsxs(s.p,{children:["Please note that you should navigate within a radio group using ",e.jsx(s.code,{children:"arrow"})," keys."]})})]}),`
`,e.jsxs(s.p,{children:["In the example above, ",e.jsx(s.code,{children:'tabindex="-1"'}),` is applied to all elements except the currently selected one. This is because only one item in a radio group should be focusable at a time.
Users can navigate between options using the `,e.jsx(s.code,{children:"arrow"})," keys, rather than the ",e.jsx(s.code,{children:"Tab"})," key, which moves focus to the next interactive element outside the group."]}),`
`,e.jsxs(s.p,{children:["For more details, see ",e.jsx(i,{href:"https://www.w3.org/WAI/ARIA/apg/patterns/radio/examples/radio/",children:"Managing focus within components using a roving tabindex"})]}),`
`,e.jsx(t,{label:"Sources",level:4}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[`
`,e.jsx(i,{href:"https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/radiogroup_role",children:"MDN Documentation - radiogroup"}),`
`]}),`
`,e.jsxs(s.li,{children:[`
`,e.jsx(i,{href:"https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/radio_role",children:"MDN Documentation - radio"}),`
`]}),`
`,e.jsxs(s.li,{children:[`
`,e.jsx(i,{href:"https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#11.5",children:"RGAA - 11.5"}),`
`]}),`
`]}),`
`,e.jsx(t,{label:"Final Accessibility check for ARIA roles",level:2}),`
`,e.jsx(t,{label:"Validate the screen reader behavior",level:3}),`
`,e.jsx(s.p,{children:"Test with a screen reader to ensure that your changes are communicated correctly."}),`
`,e.jsx(s.p,{children:"Ensure that actions such as button clicks, form submissions, and changes in state are clearly communicated to the user."}),`
`,e.jsx(t,{label:"Testing Environment",level:3}),`
`,e.jsxs(s.p,{children:["For consistent testing across different platforms and screen readers, here is the testing setup used by ",e.jsx(s.strong,{children:"OVHcloud Design System"}),", based on the recommendations from RGAA (France):"]}),`
`,e.jsxs(o,{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{scope:"col",children:"Assistive Technology"}),e.jsx("th",{scope:"col",children:"Browser"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{style:{textAlign:"center"},children:[e.jsx("td",{children:"NVDA"}),e.jsx("td",{children:"Firefox"})]}),e.jsxs("tr",{style:{textAlign:"center"},children:[e.jsx("td",{children:"JAWS"}),e.jsx("td",{children:"Firefox or Internet Explorer"})]}),e.jsxs("tr",{style:{textAlign:"center"},children:[e.jsx("td",{children:"Safari"}),e.jsx("td",{children:"VoiceOver"})]})]})]}),`
`,e.jsx(t,{label:"Resources to help you test accessibility",level:2}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(i,{href:"https://accessibilite.numerique.gouv.fr",children:"Accessibility France Guidelines (FR)"}),": The French government's official accessibility resource for best practices and testing criteria"]}),`
`,e.jsxs(s.li,{children:[e.jsx(i,{href:"https://www.w3.org/TR/WCAG21",children:"Web Content Accessibility Guidelines (WCAG) 2.1"}),": The internationally recognized standards for web accessibility, providing guidelines for creating more accessible web content"]}),`
`,e.jsxs(s.li,{children:[e.jsx(i,{href:"https://webaim.org/intro",children:"WebAIM: Introduction to Web Accessibility"}),": A guide to the principles of web accessibility from WebAIM"]}),`
`,e.jsxs(s.li,{children:[e.jsx(i,{href:"https://webaim.org/techniques/semanticstructure",children:"WebAIM: Semantic Structure"}),": Learn about the importance of semantic HTML and how it impacts accessibility"]}),`
`,e.jsxs(s.li,{children:[e.jsx(i,{href:"https://webaim.org/resources/contrastchecker",children:"WebAIM: Contrast Checker"}),": Tool to ensure sufficient color contrast between text and background for readability"]}),`
`,e.jsxs(s.li,{children:[e.jsx(i,{href:"https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests",children:"French Accessibility Testing Methodology (FR)"}),": An in-depth guide to testing web accessibility in France"]}),`
`,e.jsxs(s.li,{children:[e.jsx(i,{href:"https://accessibilite.numerique.gouv.fr/methode/environnement-de-test",children:"French Testing Environment (FR)"}),": Official guidelines on the tools and technologies to use when testing accessibility on desktop computers"]}),`
`,e.jsxs(s.li,{children:[e.jsx(i,{href:"https://www.w3.org/WAI/tutorials/images/decision-tree",children:"W3C Tutorial on Alternative Text for Images"}),": A decision tree for writing appropriate alternative text for images"]}),`
`]})]})}function _e(l={}){const{wrapper:s}={...j(),...l.components};return s?e.jsx(s,{...l,children:e.jsx(b,{...l})}):b(l)}export{_e as default};
