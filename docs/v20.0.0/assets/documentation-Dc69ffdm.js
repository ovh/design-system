import{i as e}from"./rolldown-runtime-Dd_uD5pT.js";import{t}from"./jsx-runtime-DREnUpxT.js";import{T as n}from"./index-CzEwg6AJ.js";var r=e(t());function i(e){let t={em:`em`,li:`li`,ol:`ol`,p:`p`,strong:`strong`,ul:`ul`,...n(),...e.components},{Anatomy:i,BestPractices:a,Canvas:s,DocLink:c,ExternalLink:l,Heading:u,Icon:d,IdentityCard:f,Kbd:p}=t;return i||o(`Anatomy`,!0),a||o(`BestPractices`,!0),s||o(`Canvas`,!0),c||o(`DocLink`,!0),l||o(`ExternalLink`,!0),u||o(`Heading`,!0),d||o(`Icon`,!0),f||o(`IdentityCard`,!0),p||o(`Kbd`,!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.p,{children:(0,r.jsxs)(t.em,{children:[`A list of `,(0,r.jsx)(c,{to:`/components/link`,children:`Links`}),` showing the current page location in the navigational hierarchy.`]})}),`
`,(0,r.jsx)(s,{story:`Overview`,source:`none`}),`
`,(0,r.jsx)(u,{label:`Overview`,level:2}),`
`,(0,r.jsx)(f,{aliases:[`Breadcrumb trail`],figmaLink:`https://www.figma.com/design/9jDDTcR4a9jPRFcdjawAlf/ODS---UI-Kit?node-id=3-22762`,githubUrl:`https://github.com/ovh/design-system/tree/master/packages/ods-react/src/components/breadcrumb`,name:`Breadcrumb`,children:(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:`Breadcrumb`}),` is used to define the user's position in a site hierarchy, it can also be useful for a finer navigation in
an inner application.`]})}),`
`,(0,r.jsx)(u,{label:`Usage`,level:2}),`
`,(0,r.jsx)(t.p,{children:`It has several usages :`}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsx)(t.li,{children:`Displaying subpages of a site structure`}),`
`,(0,r.jsx)(t.li,{children:`Show step progress of a process`}),`
`,(0,r.jsx)(t.li,{children:`Simplify site structure navigation in a quicker way`}),`
`]}),`
`,(0,r.jsx)(u,{label:`Dos & Don'ts`,level:3}),`
`,(0,r.jsx)(a,{donts:[`- Don't use Breadcrumbs as a primary navigation method, they are secondary and contextual only`,`- Don't include external links in Breadcrumb items, all links should be internal`,`- Don't nest Breadcrumbs or place more than one Breadcrumb component on the same page`,`- Don't exceed 4 levels of depth. Overly complex paths reduce clarity and usability`,`- Don't make the current page a link. The last item should be plain text to indicate the user's location`,`- Don't change the Breadcrumb order to reflect user history or actions, it should always match site structure`,`- Don't use Breadcrumb if the page doesn't belong to a clearly hierarchical structure`],dos:[`- Start the Breadcrumb trail with a link to the homepage, using a "home" Icon or the "Home" label for example`,`- Reflect the actual page hierarchy in the Breadcrumb structure (e.g., Section > Subsection > Current page)`,`- Use Breadcrumb to provide contextual orientation, especially in deep navigation paths`,`- Ensure that each Breadcrumb item (except the last one) is a clickable link to a parent page`,`- Add the ellipsis to collapse long paths (more than 4 Links visible)`]}),`
`,(0,r.jsx)(u,{label:`Best Practices in Context`,level:3}),`
`,(0,r.jsx)(i,{src:`components/breadcrumb/anatomy.png`}),`
`,(0,r.jsxs)(t.ol,{children:[`
`,(0,r.jsx)(t.li,{children:(0,r.jsx)(t.strong,{children:`Breadcrumb`})}),`
`,(0,r.jsx)(t.li,{children:(0,r.jsx)(t.strong,{children:`Page link`})}),`
`,(0,r.jsx)(t.li,{children:(0,r.jsx)(t.strong,{children:`Current page`})}),`
`,(0,r.jsx)(t.li,{children:(0,r.jsx)(t.strong,{children:`Ellipsis`})}),`
`]}),`
`,(0,r.jsx)(u,{label:`Placement`,level:2}),`
`,(0,r.jsxs)(t.p,{children:[`A `,(0,r.jsx)(t.strong,{children:`Breadcrumb`}),` is used at the top of a web page, preferably start-aligned.`]}),`
`,(0,r.jsx)(t.p,{children:`Its width is automatic, relative to its content and is not adjustable.`}),`
`,(0,r.jsx)(u,{label:`Behavior`,level:2}),`
`,(0,r.jsxs)(t.p,{children:[`When the `,(0,r.jsx)(t.strong,{children:`Breadcrumb`}),` has more than 4 links visible, an ellipsis is displayed as a replacement for the middle link.`]}),`
`,(0,r.jsx)(t.p,{children:`A click on the ellipsis will expand all previously hidden links inline, the collapsed state can't be redone afterward.`}),`
`,(0,r.jsxs)(t.p,{children:[`The `,(0,r.jsx)(t.strong,{children:`Breadcrumb`}),` links are kept inline, even on mobile viewports.`]}),`
`,(0,r.jsx)(u,{label:`Navigation`,level:2}),`
`,(0,r.jsx)(u,{label:`Focus Management`,level:3}),`
`,(0,r.jsxs)(t.p,{children:[`All links within the `,(0,r.jsx)(t.strong,{children:`Breadcrumb`}),` component are focusable, following the reading order. The last item, which represents the current page, is static text and does not receive focus.`]}),`
`,(0,r.jsx)(u,{label:`General Keyboard Shortcuts`,level:3}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsxs)(t.li,{children:[`Pressing `,(0,r.jsx)(p,{children:`Tab`}),` moves focus through each link in the `,(0,r.jsx)(t.strong,{children:`Breadcrumb`}),` trail`]}),`
`,(0,r.jsxs)(t.li,{children:[`Pressing `,(0,r.jsx)(p,{children:`Enter`}),` while a link is focused navigates to the corresponding page`]}),`
`,(0,r.jsxs)(t.li,{children:[`When an ellipsis (...) appears due to a long `,(0,r.jsx)(t.strong,{children:`Breadcrumb`}),` trail (more than 4 elements), it behaves as a link:`,`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsxs)(t.li,{children:[`Pressing `,(0,r.jsx)(p,{children:`Enter`}),` expands the full `,(0,r.jsx)(t.strong,{children:`Breadcrumb`}),` list`]}),`
`,(0,r.jsxs)(t.li,{children:[`Once expanded, additional link become accessible via `,(0,r.jsx)(p,{children:`Tab`}),` navigation`]}),`
`]}),`
`]}),`
`]}),`
`,(0,r.jsx)(u,{label:`Accessibility`,level:2}),`
`,(0,r.jsxs)(t.p,{children:[`This component complies with the `,(0,r.jsx)(l,{href:`https://www.w3.org/WAI/ARIA/apg/patterns/breadcrumb/`,children:`Breadcrumb WAI-ARIA design pattern`}),`.`]}),`
`,(0,r.jsx)(u,{label:`Identifying the Breadcrumb with aria-label`,level:3}),`
`,(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:`Breadcrumbs`}),` are a form of navigation, but they serve a specific purpose distinct from primary navigation menus. To ensure they are correctly recognized, an `,(0,r.jsx)(l,{href:`https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label`,children:`aria-label`}),` should be added to explicitly identify them.`]}),`
`,(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:`Breadcrumb Links`}),` follow the same accessibility guidelines as a standard `,(0,r.jsx)(c,{to:`/components/link`,children:`Link`}),`.`]}),`
`,(0,r.jsx)(s,{story:`AccessibilityWithAriaLabel`}),`
`,(0,r.jsxs)(t.p,{children:[(0,r.jsx)(d,{name:`circle-check`,style:{color:`var(--ods-semantic-color-content-success)`}}),` Screen readers will announce the link, the label of the first link, the list and the number of item.`]})]})}function a(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(i,{...e})}):i(e)}function o(e,t){throw Error(`Expected `+(t?`component`:`object`)+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}export{a as default};