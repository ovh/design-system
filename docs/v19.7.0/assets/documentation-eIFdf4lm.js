import{j as e}from"./jsx-runtime-Cfl8ynUo.js";import{useMDXComponents as c}from"./index-ZwkxtaJJ.js";import{s as h,e as d}from"./icon-name-kFDeGXCQ--4TVzzrX.js";import{k as i}from"./Kbd-Cnje_EfN-CvQx-mOR.js";import{M as m}from"./index-BnNeS_H2.js";import{D as a,O as p,A as x,a as g}from"./drawer.stories-DJgk7W-5.js";import{A as u}from"./Anatomy-DkXJCwiR.js";import{B as f}from"./Banner-DYvgfZRi.js";import{B as j}from"./BestPractices-j46EvglC.js";import{C as o}from"./Canvas-zVPAbnas.js";import{H as r}from"./Heading-lgNAZPkT.js";import{I as b}from"./IdentityCard-BTJG0hV7.js";import{E as s}from"./ExternalLink-D9Oykgkh.js";import"./index-jIWwRBLr.js";import"./index-CWkFp9WS-BSIT86NH.js";import"./iframe-DtAqipxR.js";import"./index-DWDEzXrj.js";import"./index-N93khynk.js";import"./index-CXQShRbs.js";import"./index-DrFu-skq.js";import"./Button-B-GJ-1TA.js";import"./index-CqY9YpN0.js";import"./Spinner-DJB5ZadI.js";import"./colors-DSObuHxd.js";import"./context-C_-r2uoG.js";import"./dialog-trigger-BqYWYiWM.js";import"./use-locale-context-CGqEQCyU.js";import"./use-presence-D0Br6WHR.js";import"./use-event-c9j7vq_1.js";import"./render-strategy-CleMi1sB.js";import"./portal-DmTPQ5yQ.js";import"./index-XRYVLp3j.js";import"./index-uZK-7FQN.js";import"./icon-name-D0KNfDOz.js";import"./index-onrz60cw.js";import"./index-B0M5RXeR.js";import"./Text-CAQM6i-X.js";import"./index-DaWTyRz7.js";import"./use-field-context-Dkm7CMfi.js";import"./index-Ct9O8XVq.js";import"./overlay-CZHjGBMC.js";import"./index-XMtSmgu6.js";import"./controls-BtiQQn1l.js";import"./source-CPEZJ6oD.js";import"./index-DA9hOdui.js";import"./context-Z_Xa7sWf-5kwUyuQy.js";import"./index-D6AFTHzO.js";import"./lz-string-U2heoObX.js";import"./meta-twt-Yy4M.js";import"./ResetTheme-CLF5P7Bf.js";import"./tokens-BrWUS-3i.js";import"./divider-color-DMMH0ySn-B7JauIP0.js";import"./colors-C1Wmnk_L-aAAP9SXj.js";import"./Table-Bof_Nsov-CS9ZUwCH.js";import"./Table-BXVk_N0H.js";import"./Link-fc4PsoC7-BoLkDjrj.js";function l(n){const t={li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...c(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(m,{of:a,name:"Documentation"}),`
`,e.jsx(f,{of:a}),`
`,e.jsx(t.p,{children:"The Drawer component provides a sliding panel that reveals additional content without navigating away from the current page."}),`
`,e.jsx(o,{of:p,sourceState:"none"}),`
`,e.jsx(r,{label:"Overview",level:2}),`
`,e.jsx(b,{aliases:["Sidenav","Panel"],figmaLink:"https://www.figma.com/design/9jDDTcR4a9jPRFcdjawAlf/branch/5BA2ZwZaX2bzfiWwTyMpQH/ODS---UI-Kit?node-id=5488-15121&p=f&t=gPfKLQM0iEuF2FXm-0",githubUrl:"https://github.com/ovh/design-system/tree/master/packages/ods-react/src/components/drawer",name:"Drawer"}),`
`,e.jsx(r,{label:"Usage",level:2}),`
`,e.jsxs(t.p,{children:["The ",e.jsx(t.strong,{children:"Drawer"})," component is ideal for use cases where content should be revealed in context without navigating to a new page. Common examples include:"]}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsx(t.li,{children:"Side navigation menus"}),`
`,e.jsx(t.li,{children:"Filters and settings panels"}),`
`,e.jsx(t.li,{children:"Detail views or contextual information"}),`
`]}),`
`,e.jsx(j,{donts:["- Don't add more than one open Drawer at a time","- Don't use excessively large Drawers that cover most or all of the page","- Don't rely on Drawers for critical actions that require user confirmation, Modals are better suited for that","- Don't leave Drawers open without a visible way to close them, always provide a clear exit path"],dos:["- Use a Drawer to display contextual content or actions that stay relevant to the current page (e.g., filters, side forms, settings)","- Allow the Drawer to be dismissed via clear and accessible interactions (e.g., close button, escape key, clicking outside)","- Customize the Drawer's width, height, and placement to match your layout and content needs","- Keep transitions smooth and responsive, respecting the expected animation duration (e.g., 300ms) in the OVHcloud Design System","- Maintain proper layering and z-index behavior","- Use Drawers to maintain continuity of the user's workflow without breaking the page context"]}),`
`,e.jsx(r,{label:"Best Practices in Context",level:3}),`
`,e.jsx(u,{src:"components/drawer/anatomy.png"}),`
`,e.jsxs(t.ol,{children:[`
`,e.jsx(t.li,{children:e.jsx(t.strong,{children:"Drawer"})}),`
`]}),`
`,e.jsx(r,{label:"Placement",level:2}),`
`,e.jsxs(t.p,{children:["The ",e.jsx(t.strong,{children:"Drawer"})," can be positioned on any edge of the screen:"]}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsxs(t.li,{children:[e.jsx(t.strong,{children:"Left/Right"}),": Covers 100% of the page height, with a default width of 320px and a maximum width of 100% - 3rem (48px)"]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.strong,{children:"Top/Bottom"}),": Covers 100% of the page width, with a default height of 320px and a maximum height of 100vh - 3rem (48px)"]}),`
`]}),`
`,e.jsxs(t.p,{children:["The ",e.jsx(t.strong,{children:"Drawer"})," is displayed above all page content but is positioned below the Modal in terms of layering, following the z-index hierarchy defined by OVHcloud Design System. This ensures consistent stacking behavior across components."]}),`
`,e.jsxs(t.p,{children:["By default, the OVHcloud Design System does not enforce whether the ",e.jsx(t.strong,{children:"Drawer"})," is fixed or scrollable. Integrators can configure this behavior based on their specific use case and requirements."]}),`
`,e.jsxs(t.p,{children:["Be careful the placement of the drawer can be broken if you create a new ",e.jsx(s,{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_positioned_layout/Understanding_z-index/Stacking_context",target:"_blank",children:"stacking context"}),`.
For example with a transform style or scale.`]}),`
`,e.jsx(r,{label:"Behavior",level:2}),`
`,e.jsxs(t.p,{children:["The ",e.jsx(t.strong,{children:"Drawer"})," supports the following interactions:"]}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsx(t.li,{children:"Expansion: Triggered by interacting with a designated element, such as a button."}),`
`,e.jsx(t.li,{children:"Collapsing:"}),`
`,e.jsx(t.li,{children:"By interacting with the same trigger used for expansion"}),`
`,e.jsx(t.li,{children:"By pressing the escape key"}),`
`]}),`
`,e.jsxs(t.p,{children:["Animation: The ",e.jsx(t.strong,{children:"Drawer"})," slides into view with a smooth animation (default duration: 300ms)."]}),`
`,e.jsx(r,{label:"Variation",level:2}),`
`,e.jsxs(t.p,{children:["The ",e.jsx(t.strong,{children:"Drawer"})," can slide in from the left, right, top, or bottom, depending on its configuration and the layout of the page."]}),`
`,e.jsx(r,{label:"Navigation",level:2}),`
`,e.jsx(r,{label:"Focus Management",level:3}),`
`,e.jsxs(t.p,{children:["When the ",e.jsx(t.strong,{children:"Drawer"})," is opened, focus automatically moves to the first focusable element inside."]}),`
`,e.jsxs(t.p,{children:["When the ",e.jsx(t.strong,{children:"Drawer"})," is closed, focus returns to the trigger element unless overridden by the integrator."]}),`
`,e.jsx(r,{label:"General Keyboard Shortcuts",level:3}),`
`,e.jsxs(t.p,{children:["Pressing ",e.jsx(i,{children:"Escape"})," closes the ",e.jsx(t.strong,{children:"Drawer"}),"."]}),`
`,e.jsxs(t.p,{children:["Pressing ",e.jsx(i,{children:"Tab"})," moves focus forward through the focusable elements inside the ",e.jsx(t.strong,{children:"Drawer"}),"."]}),`
`,e.jsxs(t.p,{children:["Pressing ",e.jsx(i,{children:"Shift"})," + ",e.jsx(i,{children:"Tab"})," moves focus backward within the ",e.jsx(t.strong,{children:"Drawer"}),"."]}),`
`,e.jsxs(t.p,{children:["Once the last focusable element is reached, focus does not leave the ",e.jsx(t.strong,{children:"Drawer"})," unless it is closed."]}),`
`,e.jsx(r,{label:"Accessibility",level:2}),`
`,e.jsxs(t.p,{children:["To ensure the ",e.jsx(t.strong,{children:"Drawer"})," is fully accessible, correct ARIA attributes must be implemented. This ensures screen readers announce the ",e.jsx(t.strong,{children:"Drawer"})," properly and that keyboard users can interact with it effectively."]}),`
`,e.jsx(r,{label:"Linking the Drawer title and content",level:3}),`
`,e.jsxs(t.p,{children:["Ensure that assistive technologies announce the ",e.jsx(t.strong,{children:"Drawer"})," correctly using ",e.jsx(s,{href:"https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby",children:"aria-labelledby"})," or ",e.jsx(s,{href:"https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label",children:"aria-label"}),", and ",e.jsx(s,{href:"https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-describedby",children:"aria-describedby"}),"."]}),`
`,e.jsx(o,{of:x,sourceState:"shown"}),`
`,e.jsx(o,{of:g,sourceState:"shown"}),`
`,e.jsxs(t.p,{children:[e.jsx(h,{name:d.circleCheck,style:{color:"var(--ods-color-success-500)"}})," Screen readers will announce the sections referenced by the aria attributes."]})]})}function ve(n={}){const{wrapper:t}={...c(),...n.components};return t?e.jsx(t,{...n,children:e.jsx(l,{...n})}):l(n)}export{ve as default};
