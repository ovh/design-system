import{i as e}from"./rolldown-runtime-Dd_uD5pT.js";import{t}from"./jsx-runtime-DREnUpxT.js";import{T as n}from"./index-CdRG7ZE_.js";var r=e(t());function i(e){let t={code:`code`,em:`em`,li:`li`,ol:`ol`,p:`p`,strong:`strong`,ul:`ul`,...n(),...e.components},{Anatomy:i,BestPractices:a,Canvas:s,DocLink:c,Heading:l,Icon:u,IdentityCard:d,Kbd:f,Table:p}=t;return i||o(`Anatomy`,!0),a||o(`BestPractices`,!0),s||o(`Canvas`,!0),c||o(`DocLink`,!0),l||o(`Heading`,!0),u||o(`Icon`,!0),d||o(`IdentityCard`,!0),f||o(`Kbd`,!0),p||o(`Table`,!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.p,{children:(0,r.jsxs)(t.em,{children:[(0,r.jsx)(t.strong,{children:`Popover`}),` component is triggered by click and is used to provide additional information to the user in a new temporary surface that overlays the page`]})}),`
`,(0,r.jsx)(s,{story:`Overview`,source:`none`}),`
`,(0,r.jsx)(l,{label:`Overview`,level:2}),`
`,(0,r.jsxs)(d,{aliases:[`Complex Tooltip`],figmaLink:`https://www.figma.com/design/9jDDTcR4a9jPRFcdjawAlf/ODS---UI-Kit?node-id=49-8447`,githubUrl:`https://github.com/ovh/design-system/tree/master/packages/ods-react/src/components/popover`,name:`Popover`,children:[(0,r.jsxs)(t.p,{children:[`A `,(0,r.jsx)(t.strong,{children:`Popover`}),` will provide additional information to the user in a clear and concise way.`]}),(0,r.jsxs)(t.p,{children:[`It is commonly used to appear by click, thus crucial information should not be displayed in the `,(0,r.jsx)(t.strong,{children:`Popover`}),`.`]})]}),`
`,(0,r.jsx)(l,{label:`Usage`,level:2}),`
`,(0,r.jsxs)(t.p,{children:[`A `,(0,r.jsx)(t.strong,{children:`Popover`}),` is used to provide an explanation for a user interface element.`]}),`
`,(0,r.jsx)(t.p,{children:`It can include interactive elements such as a button or a link.`}),`
`,(0,r.jsx)(l,{label:`Tooltip vs Popover`,level:3}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsxs)(t.li,{children:[`Both components look similar but a `,(0,r.jsx)(c,{to:`/components/tooltip`,children:`Tooltip`}),` is displayed on hover and focus while `,(0,r.jsx)(t.strong,{children:`Popover`}),` is triggered by click.`]}),`
`,(0,r.jsx)(t.li,{children:`Tooltips are commonly used for shorter explanations, while longer text / complex UIs would suit a popover better.`}),`
`,(0,r.jsx)(t.li,{children:`Use a popover when you need to insert interactive elements such as Button.`}),`
`,(0,r.jsx)(t.li,{children:`A popover can be dismissed if an action button allows it.`}),`
`]}),`
`,(0,r.jsx)(l,{label:`Dos & Don'ts`,level:3}),`
`,(0,r.jsx)(a,{donts:[`- Don't place critical or mandatory information inside a popover. Users may miss it since it's only revealed on click`,`- Don't overload a popover with rich content like images, videos, or large interactive components. Use a Modal or Drawer instead`,`- Don't trigger a popover from non-obvious elements, the interactive element should clearly indicate it controls a popover`,`- Don't rely on popovers for persistent content since they're meant to be transient and dismissible`,`- Don't use a popover on elements that are already part of another complex interaction`],dos:[`- Use a popover to display contextual information or options that are secondary to the main task`,`- Prefer a popover over a tooltip when the content is longer, interactive, or requires formatting (but keep it focused)`,`- Write a popover content using complete sentences`,`- Ensure the popover is positioned clearly and does not overlap with its trigger element`,`- Use a popover for lightweight content such as field explanations, secondary actions`]}),`
`,(0,r.jsx)(l,{label:`Best Practices in Context`,level:3}),`
`,(0,r.jsx)(i,{src:`components/popover/anatomy.png`}),`
`,(0,r.jsxs)(t.ol,{children:[`
`,(0,r.jsx)(t.li,{children:(0,r.jsx)(t.strong,{children:`Popover`})}),`
`,(0,r.jsx)(t.li,{children:(0,r.jsx)(t.strong,{children:`Content`})}),`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:`Caret tip`}),` - optional`]}),`
`,(0,r.jsx)(t.li,{children:(0,r.jsx)(t.strong,{children:`Trigger`})}),`
`]}),`
`,(0,r.jsx)(l,{label:`Placement`,level:2}),`
`,(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:`Popover`}),` can be set in a certain position by default around its trigger.`]}),`
`,(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:`Popover`}),` has automatic positioning feature. It can detect the edge of the browser so the container always stays visible on a page.`]}),`
`,(0,r.jsx)(l,{label:`Behavior`,level:2}),`
`,(0,r.jsxs)(t.p,{children:[`By default, a `,(0,r.jsx)(t.strong,{children:`Popover`}),` is hidden to the user.`]}),`
`,(0,r.jsxs)(t.p,{children:[`It triggers when the user clicks on the `,(0,r.jsx)(t.strong,{children:`Popover`}),`'s trigger element such as a button.`]}),`
`,(0,r.jsxs)(t.p,{children:[`The `,(0,r.jsx)(t.strong,{children:`Popover`}),` can be closed or dismissed by clicking anywhere on the page outside the `,(0,r.jsx)(t.strong,{children:`Popover`}),`'s container.`]}),`
`,(0,r.jsx)(l,{label:`Navigation`,level:2}),`
`,(0,r.jsx)(l,{label:`Focus Management`,level:3}),`
`,(0,r.jsxs)(t.p,{children:[`Depending on the `,(0,r.jsx)(t.strong,{children:`Popover`}),` trigger used (e.g., a button or a link), refer to that component's documentation for its keyboard interaction.`]}),`
`,(0,r.jsxs)(t.p,{children:[`When the `,(0,r.jsx)(t.strong,{children:`Popover`}),` is opened, it gains focus automatically. Focus remains within the `,(0,r.jsx)(t.strong,{children:`Popover`}),` until it is closed.`]}),`
`,(0,r.jsx)(t.p,{children:`Closing it returns focus to the trigger element.`}),`
`,(0,r.jsx)(l,{label:`General Keyboard Shortcuts`,level:3}),`
`,(0,r.jsxs)(t.p,{children:[`Pressing `,(0,r.jsx)(f,{children:`Escape`}),` closes the currently opened `,(0,r.jsx)(t.strong,{children:`Popover`}),`.`]}),`
`,(0,r.jsxs)(t.p,{children:[`Pressing `,(0,r.jsx)(f,{children:`Tab`}),` moves focus forward through the focusable elements inside the `,(0,r.jsx)(t.strong,{children:`Popover`}),`.`]}),`
`,(0,r.jsxs)(t.p,{children:[`Pressing `,(0,r.jsx)(f,{children:`Shift`}),` + `,(0,r.jsx)(f,{children:`Tab`}),` moves focus backward within the `,(0,r.jsx)(t.strong,{children:`Popover`}),`.`]}),`
`,(0,r.jsx)(l,{label:`Accessibility`,level:2}),`
`,(0,r.jsxs)(t.p,{children:[`To ensure proper accessibility, `,(0,r.jsx)(t.strong,{children:`Popover`}),` component must specify its content nature using appropriate ARIA attributes.`]}),`
`,(0,r.jsx)(l,{label:`Specify the Popover's content nature`,level:3}),`
`,(0,r.jsxs)(t.p,{children:[`Update the content type on the `,(0,r.jsx)(t.strong,{children:`Popover Trigger`}),`, which is set by default to `,(0,r.jsx)(t.code,{children:`aria-haspopup="dialog"`}),`.`]}),`
`,(0,r.jsxs)(p,{children:[(0,r.jsx)(`thead`,{children:(0,r.jsxs)(`tr`,{children:[(0,r.jsx)(`th`,{children:`Content Type`}),(0,r.jsx)(`th`,{children:`ARIA Attribute`})]})}),(0,r.jsxs)(`tbody`,{children:[(0,r.jsxs)(`tr`,{children:[(0,r.jsx)(`td`,{children:`Menu`}),(0,r.jsx)(`td`,{children:(0,r.jsx)(t.code,{children:`aria-haspopup="menu"`})})]}),(0,r.jsxs)(`tr`,{children:[(0,r.jsx)(`td`,{children:`List`}),(0,r.jsx)(`td`,{children:(0,r.jsx)(t.code,{children:`aria-haspopup="listbox"`})})]}),(0,r.jsxs)(`tr`,{children:[(0,r.jsx)(`td`,{children:`Tree`}),(0,r.jsx)(`td`,{children:(0,r.jsx)(t.code,{children:`aria-haspopup="tree"`})})]}),(0,r.jsxs)(`tr`,{children:[(0,r.jsx)(`td`,{children:`Grid`}),(0,r.jsx)(`td`,{children:(0,r.jsx)(t.code,{children:`aria-haspopup="grid"`})})]}),(0,r.jsxs)(`tr`,{children:[(0,r.jsx)(`td`,{children:`Dialog`}),(0,r.jsx)(`td`,{children:(0,r.jsx)(t.code,{children:`aria-haspopup="dialog"`})})]}),(0,r.jsxs)(`tr`,{children:[(0,r.jsx)(`td`,{children:`Comment`}),(0,r.jsx)(`td`,{children:(0,r.jsx)(t.code,{children:`aria-details="comment"`})})]}),(0,r.jsxs)(`tr`,{children:[(0,r.jsx)(`td`,{children:`Definition`}),(0,r.jsxs)(`td`,{children:[(0,r.jsx)(t.code,{children:`aria-details="term"`}),` + `,(0,r.jsx)(t.code,{children:`role="definition"`})]})]}),(0,r.jsxs)(`tr`,{children:[(0,r.jsx)(`td`,{children:`Caption`}),(0,r.jsx)(`td`,{children:(0,r.jsx)(t.code,{children:`aria-details="figure"`})})]}),(0,r.jsxs)(`tr`,{children:[(0,r.jsx)(`td`,{children:`Footnote`}),(0,r.jsx)(`td`,{children:(0,r.jsx)(t.code,{children:`aria-details="doc-footnote"`})})]}),(0,r.jsxs)(`tr`,{children:[(0,r.jsx)(`td`,{children:`Endnote`}),(0,r.jsx)(`td`,{children:(0,r.jsx)(t.code,{children:`aria-details="doc-endnote"`})})]}),(0,r.jsxs)(`tr`,{children:[(0,r.jsx)(`td`,{children:`Description`}),(0,r.jsx)(`td`,{children:(0,r.jsx)(t.code,{children:`aria-details="true"`})})]})]})]}),`
`,(0,r.jsx)(l,{label:`Using aria-popup for a Popover containing a Menu`,level:3}),`
`,(0,r.jsx)(s,{story:`AccessibilityWithMenu`}),`
`,(0,r.jsxs)(t.p,{children:[(0,r.jsx)(u,{name:`circle-check`,style:{color:`var(--ods-semantic-color-content-success)`}}),` Screen readers will recognize that `,(0,r.jsx)(t.strong,{children:`Popover`}),` contains a menu and menu items. It indicates that the element can trigger a popup and the nature of this popup.`]})]})}function a(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(i,{...e})}):i(e)}function o(e,t){throw Error(`Expected `+(t?`component`:`object`)+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}export{a as default};