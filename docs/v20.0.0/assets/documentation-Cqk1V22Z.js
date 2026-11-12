import{i as e}from"./rolldown-runtime-Dd_uD5pT.js";import{t}from"./jsx-runtime-DREnUpxT.js";import{T as n}from"./index-CzEwg6AJ.js";var r=e(t());function i(e){let t={code:`code`,li:`li`,ol:`ol`,p:`p`,strong:`strong`,ul:`ul`,...n(),...e.components},{Anatomy:i,BestPractices:a,Canvas:s,ExternalLink:c,Heading:l,Icon:u,IdentityCard:d,Kbd:f}=t;return i||o(`Anatomy`,!0),a||o(`BestPractices`,!0),s||o(`Canvas`,!0),c||o(`ExternalLink`,!0),l||o(`Heading`,!0),u||o(`Icon`,!0),d||o(`IdentityCard`,!0),f||o(`Kbd`,!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.p,{children:`The Drawer component provides a sliding panel that reveals additional content without navigating away from the current page.`}),`
`,(0,r.jsx)(s,{story:`Overview`,source:`none`}),`
`,(0,r.jsx)(l,{label:`Overview`,level:2}),`
`,(0,r.jsx)(d,{aliases:[`Sidenav`,`Panel`],figmaLink:`https://www.figma.com/design/9jDDTcR4a9jPRFcdjawAlf/branch/5BA2ZwZaX2bzfiWwTyMpQH/ODS---UI-Kit?node-id=5488-15121&p=f&t=gPfKLQM0iEuF2FXm-0`,githubUrl:`https://github.com/ovh/design-system/tree/master/packages/ods-react/src/components/drawer`,name:`Drawer`}),`
`,(0,r.jsx)(l,{label:`Usage`,level:2}),`
`,(0,r.jsxs)(t.p,{children:[`The `,(0,r.jsx)(t.strong,{children:`Drawer`}),` component is ideal for use cases where content should be revealed in context without navigating to a new page. Common examples include:`]}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsx)(t.li,{children:`Side navigation menus`}),`
`,(0,r.jsx)(t.li,{children:`Filters and settings panels`}),`
`,(0,r.jsx)(t.li,{children:`Detail views or contextual information`}),`
`]}),`
`,(0,r.jsx)(a,{donts:[`- Don't add more than one open Drawer at a time`,`- Don't use excessively large Drawers that cover most or all of the page`,`- Don't rely on Drawers for critical actions that require user confirmation, Modals are better suited for that`,`- Don't leave Drawers open without a visible way to close them, always provide a clear exit path`],dos:[`- Use a Drawer to display contextual content or actions that stay relevant to the current page (e.g., filters, side forms, settings)`,`- Allow the Drawer to be dismissed via clear and accessible interactions (e.g., close button, escape key, clicking outside, when enabled)`,`- Customize the Drawer's width, height, and placement to match your layout and content needs`,`- Keep transitions smooth and responsive, respecting the expected animation duration (e.g., 300ms) in the OVHcloud Design System`,`- Maintain proper layering and z-index behavior`,`- Use Drawers to maintain continuity of the user's workflow without breaking the page context`]}),`
`,(0,r.jsx)(l,{label:`Best Practices in Context`,level:3}),`
`,(0,r.jsx)(i,{src:`components/drawer/anatomy.png`}),`
`,(0,r.jsxs)(t.ol,{children:[`
`,(0,r.jsx)(t.li,{children:(0,r.jsx)(t.strong,{children:`Drawer`})}),`
`]}),`
`,(0,r.jsx)(l,{label:`Placement`,level:2}),`
`,(0,r.jsxs)(t.p,{children:[`The `,(0,r.jsx)(t.strong,{children:`Drawer`}),` can be positioned on any edge of the screen:`]}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:`Left/Right`}),`: Covers 100% of the page height, with a default width of 320px and a maximum width of 100% - 3rem (48px)`]}),`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:`Top/Bottom`}),`: Covers 100% of the page width, with a default height of 320px and a maximum height of 100vh - 3rem (48px)`]}),`
`]}),`
`,(0,r.jsxs)(t.p,{children:[`The `,(0,r.jsx)(t.strong,{children:`Drawer`}),` is displayed above all page content but is positioned below the Modal in terms of layering, with or without backdrop, following the z-index hierarchy defined by OVHcloud Design System. This ensures consistent stacking behavior across components.`]}),`
`,(0,r.jsxs)(t.p,{children:[`By default, the OVHcloud Design System does not enforce whether the `,(0,r.jsx)(t.strong,{children:`Drawer`}),` is fixed or scrollable. Integrators can configure this behavior based on their specific use case and requirements.`]}),`
`,(0,r.jsxs)(t.p,{children:[`Be careful the placement of the drawer can be broken if you create a new `,(0,r.jsx)(c,{href:`https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_positioned_layout/Understanding_z-index/Stacking_context`,target:`_blank`,children:`stacking context`}),`.
For example with a transform style or scale.`]}),`
`,(0,r.jsx)(l,{label:`Behavior`,level:2}),`
`,(0,r.jsxs)(t.p,{children:[`The `,(0,r.jsx)(t.strong,{children:`Drawer`}),` supports the following interactions:`]}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsx)(t.li,{children:`Expansion: Triggered by interacting with a designated element, such as a button.`}),`
`,(0,r.jsx)(t.li,{children:`Collapsing:`}),`
`,(0,r.jsx)(t.li,{children:`By interacting with the same trigger used for expansion`}),`
`,(0,r.jsx)(t.li,{children:`By pressing the escape key`}),`
`,(0,r.jsxs)(t.li,{children:[`By clicking or moving the focus outside the Drawer (or clicking its backdrop), when `,(0,r.jsx)(t.code,{children:`closeOnInteractOutside`}),` is enabled (default with a backdrop)`]}),`
`]}),`
`,(0,r.jsxs)(t.p,{children:[`Animation: The `,(0,r.jsx)(t.strong,{children:`Drawer`}),` slides into view with a smooth animation (default duration: 300ms).`]}),`
`,(0,r.jsx)(l,{label:`Backdrop`,level:2}),`
`,(0,r.jsxs)(t.p,{children:[`The `,(0,r.jsx)(t.strong,{children:`Drawer`}),` can display a backdrop behind it, using the same style as the Modal backdrop. Use it when the Drawer content requires the user's full attention and the rest of the page should not be used in the meantime (e.g., a side form to complete before going back to the page). Without backdrop, the page stays fully interactive, which suits contextual content such as filters or detail views.`]}),`
`,(0,r.jsxs)(t.p,{children:[`With a backdrop, the `,(0,r.jsx)(t.strong,{children:`Drawer`}),` behaves as a modal:`]}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsx)(t.li,{children:`Focus is trapped inside the Drawer`}),`
`,(0,r.jsx)(t.li,{children:`The rest of the page is inert and cannot be scrolled`}),`
`,(0,r.jsxs)(t.li,{children:[`Clicking on the backdrop closes the Drawer, unless `,(0,r.jsx)(t.code,{children:`closeOnInteractOutside`}),` is set to `,(0,r.jsx)(t.code,{children:`false`})]}),`
`]}),`
`,(0,r.jsx)(s,{story:`Backdrop`}),`
`,(0,r.jsx)(l,{label:`Variation`,level:2}),`
`,(0,r.jsxs)(t.p,{children:[`The `,(0,r.jsx)(t.strong,{children:`Drawer`}),` can slide in from the left, right, top, or bottom, depending on its configuration and the layout of the page.`]}),`
`,(0,r.jsx)(l,{label:`Navigation`,level:2}),`
`,(0,r.jsx)(l,{label:`Focus Management`,level:3}),`
`,(0,r.jsxs)(t.p,{children:[`When the `,(0,r.jsx)(t.strong,{children:`Drawer`}),` is opened, focus automatically moves to the first focusable element inside.`]}),`
`,(0,r.jsxs)(t.p,{children:[`When the `,(0,r.jsx)(t.strong,{children:`Drawer`}),` is closed while focus is inside it, or after its focused element was removed, focus returns to the trigger it was opened from, or, for a Drawer without trigger, to the element that was focused before it opened. A focus moved elsewhere in the page is left where it is.`]}),`
`,(0,r.jsx)(l,{label:`General Keyboard Shortcuts`,level:3}),`
`,(0,r.jsxs)(t.p,{children:[`Pressing `,(0,r.jsx)(f,{children:`Escape`}),` closes the `,(0,r.jsx)(t.strong,{children:`Drawer`}),`.`]}),`
`,(0,r.jsxs)(t.p,{children:[`Pressing `,(0,r.jsx)(f,{children:`Tab`}),` moves focus forward through the focusable elements inside the `,(0,r.jsx)(t.strong,{children:`Drawer`}),`.`]}),`
`,(0,r.jsxs)(t.p,{children:[`Pressing `,(0,r.jsx)(f,{children:`Shift`}),` + `,(0,r.jsx)(f,{children:`Tab`}),` moves focus backward within the `,(0,r.jsx)(t.strong,{children:`Drawer`}),`.`]}),`
`,(0,r.jsxs)(t.p,{children:[`With a backdrop, once the last focusable element is reached, focus does not leave the `,(0,r.jsx)(t.strong,{children:`Drawer`}),` unless it is closed. Without backdrop, focus is not trapped and can leave the `,(0,r.jsx)(t.strong,{children:`Drawer`}),` (e.g. with `,(0,r.jsx)(f,{children:`Shift`}),` + `,(0,r.jsx)(f,{children:`Tab`}),` from its first element), which then closes if `,(0,r.jsx)(t.code,{children:`closeOnInteractOutside`}),` is enabled.`]}),`
`,(0,r.jsx)(l,{label:`Accessibility`,level:2}),`
`,(0,r.jsxs)(t.p,{children:[`To ensure the `,(0,r.jsx)(t.strong,{children:`Drawer`}),` is fully accessible, correct ARIA attributes must be implemented. This ensures screen readers announce the `,(0,r.jsx)(t.strong,{children:`Drawer`}),` properly and that keyboard users can interact with it effectively.`]}),`
`,(0,r.jsx)(l,{label:`Linking the Drawer title and content`,level:3}),`
`,(0,r.jsxs)(t.p,{children:[`Ensure that assistive technologies announce the `,(0,r.jsx)(t.strong,{children:`Drawer`}),` correctly using `,(0,r.jsx)(c,{href:`https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby`,children:`aria-labelledby`}),` or `,(0,r.jsx)(c,{href:`https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label`,children:`aria-label`}),`, and `,(0,r.jsx)(c,{href:`https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-describedby`,children:`aria-describedby`}),`.`]}),`
`,(0,r.jsx)(s,{story:`AccessibilityAriaLabel`}),`
`,(0,r.jsx)(s,{story:`AccessibilityAriaLabelledBy`}),`
`,(0,r.jsxs)(t.p,{children:[(0,r.jsx)(u,{name:`circle-check`,style:{color:`var(--ods-semantic-color-content-success)`}}),` Screen readers will announce the sections referenced by the aria attributes.`]})]})}function a(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(i,{...e})}):i(e)}function o(e,t){throw Error(`Expected `+(t?`component`:`object`)+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}export{a as default};