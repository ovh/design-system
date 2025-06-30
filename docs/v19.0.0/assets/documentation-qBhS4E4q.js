import{j as e}from"./jsx-runtime-VM66peLj.js";import{useMDXComponents as o}from"./index-DQB45XCM.js";import{M as a,C as l}from"./index-CTRIvuAa.js";import{D as i,O as c}from"./drawer.stories-DqqiKWMj.js";import{B as h}from"./Banner-DKEGGZmZ.js";import{I as d,A as m,B as p}from"./IdentityCard-DMALWF_P.js";import{H as t}from"./Heading-BKRI_kjA.js";import{E as x}from"./ExternalLink-DJ00RbPw.js";import"./StorybookLink-DMr2bWgk.js";import"./index-D_CmzhJ4.js";import"./iframe-B1k00A9N.js";import"./index-ChzAxGiP.js";import"./index-CucsY3YN.js";import"./index-CXQShRbs.js";import"./index-DrFu-skq.js";import"./Button-CbWLwkmI.js";import"./index-CkQHsVsO.js";import"./Spinner-BC3A9yP9.js";import"./colors-DSObuHxd.js";import"./dialog-trigger-lgJEWCCF.js";import"./use-locale-context-BQVaQ0H3.js";import"./use-presence-Cqrqn20p.js";import"./use-event-OCVb0O1l.js";import"./render-strategy-D_LTfuI4.js";import"./portal-Bd62KldU.js";import"./index-DninfMAu.js";import"./index-DHCC0GIt.js";import"./index-hWLJHUef.js";import"./controls-BtiQQn1l.js";import"./source-d0g_Nd0q.js";import"./index-2w0W-O47-BJ19ihbZ.js";import"./ods-react214-B9lkGKUh.js";import"./ods-react60-Yebt9vXY.js";import"./Link-D8k51sak-CbRDKo-E.js";function r(s){const n={code:"code",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...o(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{of:i,name:"Documentation"}),`
`,e.jsx(h,{of:i}),`
`,e.jsx(n.p,{children:"The Drawer component provides a sliding panel that reveals additional content without navigating away from the current page."}),`
`,e.jsx(l,{of:c,sourceState:"none"}),`
`,e.jsx(t,{label:"Overview",level:2}),`
`,e.jsx(d,{aliases:["Sidenav","Panel"],atomicType:m.molecule,figmaLink:"https://www.figma.com/design/9jDDTcR4a9jPRFcdjawAlf/branch/5BA2ZwZaX2bzfiWwTyMpQH/ODS---UI-Kit?node-id=5488-15121&p=f&t=gPfKLQM0iEuF2FXm-0",githubUrl:"https://github.com/ovh/design-system/tree/master/packages/ods/src/components/drawer",name:"Drawer"}),`
`,e.jsx(t,{label:"Usage",level:2}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.strong,{children:"Drawer"})," component is ideal for use cases where content should be revealed in context without navigating to a new page. Common examples include:"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Side navigation menus"}),`
`,e.jsx(n.li,{children:"Filters and settings panels"}),`
`,e.jsx(n.li,{children:"Detail views or contextual information"}),`
`]}),`
`,e.jsx(p,{donts:["- Don't add more than one open Drawer at a time","- Don't use excessively large Drawers that cover most or all of the page","- Don't rely on Drawers for critical actions that require user confirmation, Modals are better suited for that","- Don't leave Drawers open without a visible way to close them, always provide a clear exit path"],dos:["- Use a Drawer to display contextual content or actions that stay relevant to the current page (e.g., filters, side forms, settings)","- Allow the Drawer to be dismissed via clear and accessible interactions (e.g., close button, escape key, clicking outside)","- Customize the Drawer's width, height, and placement to match your layout and content needs","- Keep transitions smooth and responsive, respecting the expected animation duration (e.g., 300ms) in the OVHcloud Design System","- Maintain proper layering and z-index behavior","- Use Drawers to maintain continuity of the user's workflow without breaking the page context"]}),`
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
`,e.jsxs(n.p,{children:["Be careful the placement of the drawer can be broken if you create a new ",e.jsx(x,{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_positioned_layout/Understanding_z-index/Stacking_context",target:"_blank",children:"stacking context"}),`.
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
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Aria attributes"}),": The ",e.jsx(n.strong,{children:"Drawer"})," reacts to the aria-expanded attribute to indicate its state"]}),`
`]})]})}function G(s={}){const{wrapper:n}={...o(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(r,{...s})}):r(s)}export{G as default};
