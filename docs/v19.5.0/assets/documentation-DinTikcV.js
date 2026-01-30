import{j as e}from"./jsx-runtime-Cfl8ynUo.js";import{useMDXComponents as c}from"./index-ZwkxtaJJ.js";import{a as h,l as d}from"./ods-react67-C395g5lW.js";import{k as s}from"./Kbd-BhRHY5DX-DYqBejDt.js";import{M as m}from"./index-Cw5r0Kn8.js";import{D as a,O as p,A as x,a as g}from"./drawer.stories-sPne2VzL.js";import{A as u}from"./Anatomy-DkXJCwiR.js";import{B as f}from"./Banner-X7WOeBPc.js";import{I as j,B as b}from"./IdentityCard-D9LjZbLA.js";import{C as o}from"./Canvas-i2Tfjesg.js";import{H as n}from"./Heading-Dep_rTif.js";import{E as i}from"./ExternalLink-C5hGBmwh.js";import"./index-jIWwRBLr.js";import"./index-CWkFp9WS-BSIT86NH.js";import"./iframe-DCzti3mm.js";import"./index-DWDEzXrj.js";import"./index-N93khynk.js";import"./index-CXQShRbs.js";import"./index-DrFu-skq.js";import"./Button-B-GJ-1TA.js";import"./index-CqY9YpN0.js";import"./Spinner-DJB5ZadI.js";import"./colors-DSObuHxd.js";import"./context-C_-r2uoG.js";import"./dialog-trigger-CPz6GO76.js";import"./use-locale-context-kHyebpMI.js";import"./use-presence-C53EI5fL.js";import"./use-event-c9j7vq_1.js";import"./render-strategy-DRJaCB2u.js";import"./portal-CJHwXgLI.js";import"./index-BwUtbHV0.js";import"./index-BFzjWlov.js";import"./icon-name-BpdEc4-2.js";import"./SelectControl-cFSNnpci.js";import"./FormFieldLabelSubLabel-DCAb65DU.js";import"./Text-CW33_IfE.js";import"./index-BYzLHZkt.js";import"./use-field-context-CnH3sryd.js";import"./TooltipTrigger-CRWH95NO.js";import"./overlay-CZHjGBMC.js";import"./index-BlUhyWms.js";import"./controls-BtiQQn1l.js";import"./source-CPEZJ6oD.js";import"./Table-D8Me597i-NC3k9YIT.js";import"./Table-5ah53JFf.js";import"./TooltipTrigger-C3aN0eJB-DwV7p8FS.js";import"./ods-react121-5kwUyuQy.js";import"./index-CSeLFT3z.js";import"./lz-string-U2heoObX.js";import"./meta-DcQbZjt_.js";import"./ResetTheme-xqxcB8cs.js";import"./tokens-BtVMeYnn.js";import"./Divider-wQyo85oE-CpSK6tnQ.js";import"./Link-TMoA1i18-BDwROQOD.js";function l(r){const t={li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...c(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(m,{of:a,name:"Documentation"}),`
`,e.jsx(f,{of:a}),`
`,e.jsx(t.p,{children:"The Drawer component provides a sliding panel that reveals additional content without navigating away from the current page."}),`
`,e.jsx(o,{of:p,sourceState:"none"}),`
`,e.jsx(n,{label:"Overview",level:2}),`
`,e.jsx(j,{aliases:["Sidenav","Panel"],figmaLink:"https://www.figma.com/design/9jDDTcR4a9jPRFcdjawAlf/branch/5BA2ZwZaX2bzfiWwTyMpQH/ODS---UI-Kit?node-id=5488-15121&p=f&t=gPfKLQM0iEuF2FXm-0",githubUrl:"https://github.com/ovh/design-system/tree/master/packages/ods-react/src/components/drawer",name:"Drawer"}),`
`,e.jsx(n,{label:"Usage",level:2}),`
`,e.jsxs(t.p,{children:["The ",e.jsx(t.strong,{children:"Drawer"})," component is ideal for use cases where content should be revealed in context without navigating to a new page. Common examples include:"]}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsx(t.li,{children:"Side navigation menus"}),`
`,e.jsx(t.li,{children:"Filters and settings panels"}),`
`,e.jsx(t.li,{children:"Detail views or contextual information"}),`
`]}),`
`,e.jsx(b,{donts:["- Don't add more than one open Drawer at a time","- Don't use excessively large Drawers that cover most or all of the page","- Don't rely on Drawers for critical actions that require user confirmation, Modals are better suited for that","- Don't leave Drawers open without a visible way to close them, always provide a clear exit path"],dos:["- Use a Drawer to display contextual content or actions that stay relevant to the current page (e.g., filters, side forms, settings)","- Allow the Drawer to be dismissed via clear and accessible interactions (e.g., close button, escape key, clicking outside)","- Customize the Drawer's width, height, and placement to match your layout and content needs","- Keep transitions smooth and responsive, respecting the expected animation duration (e.g., 300ms) in the OVHcloud Design System","- Maintain proper layering and z-index behavior","- Use Drawers to maintain continuity of the user's workflow without breaking the page context"]}),`
`,e.jsx(n,{label:"Best Practices in Context",level:3}),`
`,e.jsx(u,{src:"components/drawer/anatomy.png"}),`
`,e.jsxs(t.ol,{children:[`
`,e.jsx(t.li,{children:e.jsx(t.strong,{children:"Drawer"})}),`
`]}),`
`,e.jsx(n,{label:"Placement",level:2}),`
`,e.jsxs(t.p,{children:["The ",e.jsx(t.strong,{children:"Drawer"})," can be positioned on any edge of the screen:"]}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsxs(t.li,{children:[e.jsx(t.strong,{children:"Left/Right"}),": Covers 100% of the page height, with a default width of 320px and a maximum width of 100% - 3rem (48px)"]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.strong,{children:"Top/Bottom"}),": Covers 100% of the page width, with a default height of 320px and a maximum height of 100vh - 3rem (48px)"]}),`
`]}),`
`,e.jsxs(t.p,{children:["The ",e.jsx(t.strong,{children:"Drawer"})," is displayed above all page content but is positioned below the Modal in terms of layering, following the z-index hierarchy defined by OVHcloud Design System. This ensures consistent stacking behavior across components."]}),`
`,e.jsxs(t.p,{children:["By default, the OVHcloud Design System does not enforce whether the ",e.jsx(t.strong,{children:"Drawer"})," is fixed or scrollable. Integrators can configure this behavior based on their specific use case and requirements."]}),`
`,e.jsxs(t.p,{children:["Be careful the placement of the drawer can be broken if you create a new ",e.jsx(i,{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_positioned_layout/Understanding_z-index/Stacking_context",target:"_blank",children:"stacking context"}),`.
For example with a transform style or scale.`]}),`
`,e.jsx(n,{label:"Behavior",level:2}),`
`,e.jsxs(t.p,{children:["The ",e.jsx(t.strong,{children:"Drawer"})," supports the following interactions:"]}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsx(t.li,{children:"Expansion: Triggered by interacting with a designated element, such as a button."}),`
`,e.jsx(t.li,{children:"Collapsing:"}),`
`,e.jsx(t.li,{children:"By interacting with the same trigger used for expansion"}),`
`,e.jsx(t.li,{children:"By pressing the escape key"}),`
`]}),`
`,e.jsxs(t.p,{children:["Animation: The ",e.jsx(t.strong,{children:"Drawer"})," slides into view with a smooth animation (default duration: 300ms)."]}),`
`,e.jsx(n,{label:"Variation",level:2}),`
`,e.jsxs(t.p,{children:["The ",e.jsx(t.strong,{children:"Drawer"})," can slide in from the left, right, top, or bottom, depending on its configuration and the layout of the page."]}),`
`,e.jsx(n,{label:"Navigation",level:2}),`
`,e.jsx(n,{label:"Focus Management",level:3}),`
`,e.jsxs(t.p,{children:["When the ",e.jsx(t.strong,{children:"Drawer"})," is opened, focus automatically moves to the first focusable element inside."]}),`
`,e.jsxs(t.p,{children:["When the ",e.jsx(t.strong,{children:"Drawer"})," is closed, focus returns to the trigger element unless overridden by the integrator."]}),`
`,e.jsx(n,{label:"General Keyboard Shortcuts",level:3}),`
`,e.jsxs(t.p,{children:["Pressing ",e.jsx(s,{children:"Escape"})," closes the ",e.jsx(t.strong,{children:"Drawer"}),"."]}),`
`,e.jsxs(t.p,{children:["Pressing ",e.jsx(s,{children:"Tab"})," moves focus forward through the focusable elements inside the ",e.jsx(t.strong,{children:"Drawer"}),"."]}),`
`,e.jsxs(t.p,{children:["Pressing ",e.jsx(s,{children:"Shift"})," + ",e.jsx(s,{children:"Tab"})," moves focus backward within the ",e.jsx(t.strong,{children:"Drawer"}),"."]}),`
`,e.jsxs(t.p,{children:["Once the last focusable element is reached, focus does not leave the ",e.jsx(t.strong,{children:"Drawer"})," unless it is closed."]}),`
`,e.jsx(n,{label:"Accessibility",level:2}),`
`,e.jsxs(t.p,{children:["To ensure the ",e.jsx(t.strong,{children:"Drawer"})," is fully accessible, correct ARIA attributes must be implemented. This ensures screen readers announce the ",e.jsx(t.strong,{children:"Drawer"})," properly and that keyboard users can interact with it effectively."]}),`
`,e.jsx(n,{label:"Linking the Drawer title and content",level:3}),`
`,e.jsxs(t.p,{children:["Ensure that assistive technologies announce the ",e.jsx(t.strong,{children:"Drawer"})," correctly using ",e.jsx(i,{href:"https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby",children:"aria-labelledby"})," or ",e.jsx(i,{href:"https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label",children:"aria-label"}),", and ",e.jsx(i,{href:"https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-describedby",children:"aria-describedby"}),"."]}),`
`,e.jsx(o,{of:x,sourceState:"shown"}),`
`,e.jsx(o,{of:g,sourceState:"shown"}),`
`,e.jsxs(t.p,{children:[e.jsx(h,{name:d.circleCheck,style:{color:"var(--ods-color-success-500)"}})," Screen readers will announce the sections referenced by the aria attributes."]})]})}function we(r={}){const{wrapper:t}={...c(),...r.components};return t?e.jsx(t,{...r,children:e.jsx(l,{...r})}):l(r)}export{we as default};
