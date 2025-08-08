import{j as e}from"./jsx-runtime-VM66peLj.js";import{useMDXComponents as l}from"./index-DQB45XCM.js";import{a as c,o as d}from"./ods-react61-BFiU7C5S.js";import{M as h,C as i}from"./index-DQDMPrC3.js";import{D as o,O as m,A as p,a as x}from"./drawer.stories-B5TYyarb.js";import{B as g}from"./Banner-D5YsTkFA.js";import{I as u,B as j}from"./IdentityCard-C39Eam7s.js";import{H as t}from"./Heading-BTR1K1mm.js";import{E as r}from"./ExternalLink-F7ndcp9T.js";import"./StorybookLink-BJoxMnxL.js";import"./index-D_CmzhJ4.js";import"./index-2w0W-O47-BJ19ihbZ.js";import"./iframe-llaHorau.js";import"./index-ChzAxGiP.js";import"./index-CucsY3YN.js";import"./index-CXQShRbs.js";import"./index-DrFu-skq.js";import"./Button-Cu9Xbu09.js";import"./index-CkQHsVsO.js";import"./Spinner-BdLZU4dE.js";import"./colors-DSObuHxd.js";import"./dialog-trigger-BvXFYgVb.js";import"./use-locale-context-DLC4Hyvy.js";import"./use-presence-BH5ft0ba.js";import"./use-event-OCVb0O1l.js";import"./render-strategy-sz9fehwg.js";import"./portal-CjJhVgfZ.js";import"./index-DninfMAu.js";import"./index-EI2n6HsL.js";import"./index-2YjOWgCH.js";import"./controls-BtiQQn1l.js";import"./source-d0g_Nd0q.js";import"./Divider-DwZugXnI-RR--JbES.js";import"./ods-react222-B9lkGKUh.js";import"./Link-DTswNFmS-CEk9YBDP.js";function a(s){const n={code:"code",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...l(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(h,{of:o,name:"Documentation"}),`
`,e.jsx(g,{of:o}),`
`,e.jsx(n.p,{children:"The Drawer component provides a sliding panel that reveals additional content without navigating away from the current page."}),`
`,e.jsx(i,{of:m,sourceState:"none"}),`
`,e.jsx(t,{label:"Overview",level:2}),`
`,e.jsx(u,{aliases:["Sidenav","Panel"],figmaLink:"https://www.figma.com/design/9jDDTcR4a9jPRFcdjawAlf/branch/5BA2ZwZaX2bzfiWwTyMpQH/ODS---UI-Kit?node-id=5488-15121&p=f&t=gPfKLQM0iEuF2FXm-0",githubUrl:"https://github.com/ovh/design-system/tree/master/packages/ods-react/src/components/drawer",name:"Drawer"}),`
`,e.jsx(t,{label:"Usage",level:2}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.strong,{children:"Drawer"})," component is ideal for use cases where content should be revealed in context without navigating to a new page. Common examples include:"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Side navigation menus"}),`
`,e.jsx(n.li,{children:"Filters and settings panels"}),`
`,e.jsx(n.li,{children:"Detail views or contextual information"}),`
`]}),`
`,e.jsx(j,{donts:["- Don't add more than one open Drawer at a time","- Don't use excessively large Drawers that cover most or all of the page","- Don't rely on Drawers for critical actions that require user confirmation, Modals are better suited for that","- Don't leave Drawers open without a visible way to close them, always provide a clear exit path"],dos:["- Use a Drawer to display contextual content or actions that stay relevant to the current page (e.g., filters, side forms, settings)","- Allow the Drawer to be dismissed via clear and accessible interactions (e.g., close button, escape key, clicking outside)","- Customize the Drawer's width, height, and placement to match your layout and content needs","- Keep transitions smooth and responsive, respecting the expected animation duration (e.g., 300ms) in the OVHcloud Design System","- Maintain proper layering and z-index behavior","- Use Drawers to maintain continuity of the user's workflow without breaking the page context"]}),`
`,e.jsx(t,{label:"Best Practices in Context",level:3}),`
`,e.jsx(n.p,{children:e.jsx(n.img,{src:"components/drawer/anatomy.png",alt:"Component anatomy",title:"Component anatomy"})}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.strong,{children:"Drawer"})}),`
`]}),`
`,e.jsx(t,{label:"Placement",level:2}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.strong,{children:"Drawer"})," can be positioned on any edge of the screen:"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Left/Right"}),": Covers 100% of the page height, with a default width of 320px and a maximum width of 100% - 3rem (48px)"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Top/Bottom"}),": Covers 100% of the page width, with a default height of 320px and a maximum height of 100vh - 3rem (48px)"]}),`
`]}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.strong,{children:"Drawer"})," is displayed above all page content but is positioned below the Modal in terms of layering, following the z-index hierarchy defined by OVHcloud Design System. This ensures consistent stacking behavior across components."]}),`
`,e.jsxs(n.p,{children:["By default, the OVHcloud Design System does not enforce whether the ",e.jsx(n.strong,{children:"Drawer"})," is fixed or scrollable. Integrators can configure this behavior based on their specific use case and requirements."]}),`
`,e.jsxs(n.p,{children:["Be careful the placement of the drawer can be broken if you create a new ",e.jsx(r,{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_positioned_layout/Understanding_z-index/Stacking_context",target:"_blank",children:"stacking context"}),`.
For example with a transform style or scale.`]}),`
`,e.jsx(t,{label:"Behavior",level:2}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.strong,{children:"Drawer"})," supports the following interactions:"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Expansion: Triggered by interacting with a designated element, such as a button."}),`
`,e.jsx(n.li,{children:"Collapsing:"}),`
`,e.jsx(n.li,{children:"By interacting with the same trigger used for expansion"}),`
`,e.jsx(n.li,{children:"By pressing the escape key"}),`
`]}),`
`,e.jsxs(n.p,{children:["Animation: The ",e.jsx(n.strong,{children:"Drawer"})," slides into view with a smooth animation (default duration: 300ms)."]}),`
`,e.jsx(t,{label:"Variation",level:2}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.strong,{children:"Drawer"})," can slide in from the left, right, top, or bottom, depending on its configuration and the layout of the page."]}),`
`,e.jsx(t,{label:"Navigation",level:2}),`
`,e.jsx(t,{label:"Focus Management",level:3}),`
`,e.jsxs(n.p,{children:["When the ",e.jsx(n.strong,{children:"Drawer"})," is opened, focus automatically moves to the first focusable element inside."]}),`
`,e.jsxs(n.p,{children:["When the ",e.jsx(n.strong,{children:"Drawer"})," is closed, focus returns to the trigger element unless overridden by the integrator."]}),`
`,e.jsx(t,{label:"General Keyboard Shortcuts",level:3}),`
`,e.jsxs(n.p,{children:["Pressing ",e.jsx(n.code,{children:"Escape"})," closes the ",e.jsx(n.strong,{children:"Drawer"}),"."]}),`
`,e.jsxs(n.p,{children:["Pressing ",e.jsx(n.code,{children:"Tab"})," moves focus forward through the focusable elements inside the ",e.jsx(n.strong,{children:"Drawer"}),"."]}),`
`,e.jsxs(n.p,{children:["Pressing ",e.jsx(n.code,{children:"Shift"})," + ",e.jsx(n.code,{children:"Tab"})," moves focus backward within the ",e.jsx(n.strong,{children:"Drawer"}),"."]}),`
`,e.jsxs(n.p,{children:["Once the last focusable element is reached, focus does not leave the ",e.jsx(n.strong,{children:"Drawer"})," unless it is closed."]}),`
`,e.jsx(t,{label:"Accessibility",level:2}),`
`,e.jsxs(n.p,{children:["To ensure the ",e.jsx(n.strong,{children:"Drawer"})," is fully accessible, correct ARIA attributes must be implemented. This ensures screen readers announce the ",e.jsx(n.strong,{children:"Drawer"})," properly and that keyboard users can interact with it effectively."]}),`
`,e.jsx(t,{label:"Linking the Drawer title and content",level:3}),`
`,e.jsxs(n.p,{children:["Ensure that assistive technologies announce the ",e.jsx(n.strong,{children:"Drawer"})," correctly using ",e.jsx(r,{href:"https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby",children:"aria-labelledby"})," or ",e.jsx(r,{href:"https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label",children:"aria-label"}),", and ",e.jsx(r,{href:"https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-describedby",children:"aria-describedby"}),"."]}),`
`,e.jsx(i,{of:p,sourceState:"shown"}),`
`,e.jsx(i,{of:x,sourceState:"shown"}),`
`,e.jsxs(n.p,{children:[e.jsx(c,{name:d.circleCheck,style:{color:"var(--ods-color-success-500)"}})," Screen readers will announce the sections referenced by the aria attributes."]})]})}function $(s={}){const{wrapper:n}={...l(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(a,{...s})}):a(s)}export{$ as default};
