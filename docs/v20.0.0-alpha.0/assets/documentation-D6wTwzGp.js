import{i as e}from"./rolldown-runtime-Dd_uD5pT.js";import{t}from"./jsx-runtime-DREnUpxT.js";import{T as n}from"./index-CdRG7ZE_.js";var r=e(t());function i(e){let t={code:`code`,em:`em`,li:`li`,ol:`ol`,p:`p`,strong:`strong`,ul:`ul`,...n(),...e.components},{Anatomy:i,BestPractices:a,Canvas:s,ExternalLink:c,Heading:l,Icon:u,IdentityCard:d,Kbd:f}=t;return i||o(`Anatomy`,!0),a||o(`BestPractices`,!0),s||o(`Canvas`,!0),c||o(`ExternalLink`,!0),l||o(`Heading`,!0),u||o(`Icon`,!0),d||o(`IdentityCard`,!0),f||o(`Kbd`,!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.p,{children:(0,r.jsxs)(t.em,{children:[(0,r.jsx)(t.strong,{children:`Link`}),` is a component that enables redirection to a new page, section, website or other resources:`]})}),`
`,(0,r.jsx)(s,{story:`Overview`,source:`none`}),`
`,(0,r.jsx)(l,{label:`Overview`,level:2}),`
`,(0,r.jsxs)(d,{aliases:[`Hyperlink`,`Anchor`],figmaLink:`https://www.figma.com/design/9jDDTcR4a9jPRFcdjawAlf/ODS---UI-Kit?node-id=44-6837`,githubUrl:`https://github.com/ovh/design-system/tree/master/packages/ods-react/src/components/link`,name:`Link`,children:[(0,r.jsxs)(t.p,{children:[`A `,(0,r.jsx)(t.strong,{children:`Link`}),` allows users to move through a website by redirecting them to a different page or section.`]}),(0,r.jsxs)(t.p,{children:[`It can also enables `,(0,r.jsx)(t.strong,{children:`Links`}),` to other resources.`]})]}),`
`,(0,r.jsx)(l,{label:`Usage`,level:2}),`
`,(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:`Links`}),` are used as navigational elements.`]}),`
`,(0,r.jsxs)(t.p,{children:[`They are also used when linking to another document. In that case, `,(0,r.jsx)(t.strong,{children:`Link`}),` description should contain type and size of document.`]}),`
`,(0,r.jsx)(l,{label:`When to use a link or a button?`,level:3}),`
`,(0,r.jsx)(t.p,{children:`Links and buttons serve different purposes, and using them correctly improves both accessibility and user experience.`}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsx)(t.li,{children:`Use a link when the action navigates the user to another page or resource, either within your application or to an external site`}),`
`,(0,r.jsx)(t.li,{children:`Use a button when the action performs a function or triggers a behavior on the current page, like submitting a form, opening a modal, or toggling a menu.`}),`
`]}),`
`,(0,r.jsx)(t.p,{children:`A button should not mimic a link. It can lead to confusion for users and assistive technologies, as buttons are not typically expected to handle navigation.`}),`
`,(0,r.jsx)(l,{label:`Dos & Don'ts`,level:3}),`
`,(0,r.jsx)(a,{donts:[`- Don't use a link to perform actions like "save", "submit", or "cancel", use a button for that`,`- Don't use vague text like "Click here" or "Read more", it provides no context for screen readers or SEO`,`- Don't write entire sentences as link label`,`- Don't apply different colors to a link and its adjacent icon. They should appear as one cohesive element`,`- Don't open a link in a new tab or window unless it's clearly indicated and necessary (e.g., for external sites)`,`- Don't forget to set appropriate rel attributes (e.g., rel="noopener noreferrer") for external links opened in new tabs`],dos:[`- Use a link to navigate to another page, section, or external website, not to trigger actions`,`- Make link labels clear and descriptive, so users understand where the link will take them`,`- Keep link labels short ideally 1–4 words`,`- Indicate when a link leads to a document or file by including its type and size (e.g., "Annual Report (PDF, 1.2MB)")`,`- Optionally include an icon, but ensure it's styled consistently with the link label`]}),`
`,(0,r.jsx)(l,{label:`Best Practices in Context`,level:3}),`
`,(0,r.jsx)(i,{src:`components/link/anatomy.png`}),`
`,(0,r.jsxs)(t.ol,{children:[`
`,(0,r.jsx)(t.li,{children:(0,r.jsx)(t.strong,{children:`Link`})}),`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:`Label`}),` - optional`]}),`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:`Icon`}),` - optional (left or right)`]}),`
`]}),`
`,(0,r.jsx)(l,{label:`Placement`,level:2}),`
`,(0,r.jsxs)(t.p,{children:[`A `,(0,r.jsx)(t.strong,{children:`Link`}),` can stand alone on a page, or it can be placed within a sentence or a paragraph.`]}),`
`,(0,r.jsx)(l,{label:`Behavior`,level:2}),`
`,(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:`Link`}),` component can be hovered, focused, clicked and disabled.`]}),`
`,(0,r.jsxs)(t.p,{children:[`When disabled, users cannot focus nor click on the `,(0,r.jsx)(t.strong,{children:`Link`}),`.`]}),`
`,(0,r.jsxs)(t.p,{children:[`A `,(0,r.jsx)(t.strong,{children:`Link`}),` is underlined at rest, 1px in its own color, so that it is not told from the surrounding text by its color alone. On hover, the underline turns 2px and the `,(0,r.jsx)(t.strong,{children:`Link`}),` keeps its color: the thicker underline is the hover signal. A visited `,(0,r.jsx)(t.strong,{children:`Link`}),` keeps its visited color.`]}),`
`,(0,r.jsxs)(t.p,{children:[`The thicknesses read `,(0,r.jsx)(t.code,{children:`--ods-link-underline-thickness`}),` and `,(0,r.jsx)(t.code,{children:`--ods-link-underline-thickness-hover`}),`. Set them on a `,(0,r.jsx)(t.strong,{children:`Link`}),` or on a container, for instance `,(0,r.jsx)(t.code,{children:`0`}),` at rest in a navigation where the links are plainly links. A disabled `,(0,r.jsx)(t.strong,{children:`Link`}),` keeps its rest underline, dimmed with it.`]}),`
`,(0,r.jsxs)(t.p,{children:[`An icon-only `,(0,r.jsx)(t.strong,{children:`Link`}),` made of ODS `,(0,r.jsx)(t.strong,{children:`Icon`}),` components has no underline at rest. With another icon, such as an inline `,(0,r.jsx)(t.code,{children:`<svg>`}),` or an icon from another library, the `,(0,r.jsx)(t.strong,{children:`Link`}),` cannot tell it from a label and keeps the underline: set `,(0,r.jsx)(t.code,{children:`--ods-link-underline-thickness: 0`}),` on it.`]}),`
`,(0,r.jsxs)(t.p,{children:[`The underline is a pseudo-element drawn by the `,(0,r.jsx)(t.strong,{children:`Link`}),` box, not a `,(0,r.jsx)(t.code,{children:`text-decoration`}),`: `,(0,r.jsx)(t.code,{children:`text-decoration: none`}),` does not remove it, `,(0,r.jsx)(t.code,{children:`--ods-link-underline-thickness: 0`}),` does. Being drawn by the box, it does not follow a label that wraps over several lines: a `,(0,r.jsx)(t.strong,{children:`Link`}),` set to `,(0,r.jsx)(t.code,{children:`display: inline`}),` draws it under part of its last line, or not at all when it starts mid-sentence, and a `,(0,r.jsx)(t.strong,{children:`Link`}),` left `,(0,r.jsx)(t.code,{children:`inline-flex`}),` draws it across its whole width, under its last line. A printed page also loses it when the print dialog leaves the background graphics out.`]}),`
`,(0,r.jsxs)(t.p,{children:[`In forced colors mode, the underline is drawn in the link color of the system palette (`,(0,r.jsx)(t.code,{children:`LinkText`}),`), so it stays visible.`]}),`
`,(0,r.jsxs)(t.p,{children:[`An optional icon can be displayed on the left or right of the `,(0,r.jsx)(t.strong,{children:`Link`}),` label content. Icon-only `,(0,r.jsx)(t.strong,{children:`Link`}),` also exists but it must meet accessibility requirements. See Accessibility section below.`]}),`
`,(0,r.jsxs)(t.p,{children:[`When users clicks anywhere on the `,(0,r.jsx)(t.strong,{children:`Link`}),`, even its optional icon, they are redirected to the expected page or section.`]}),`
`,(0,r.jsx)(l,{label:`Navigation`,level:2}),`
`,(0,r.jsx)(l,{label:`Focus Management`,level:3}),`
`,(0,r.jsxs)(t.p,{children:[`The `,(0,r.jsx)(t.strong,{children:`Link`}),` component can receive keyboard focus and is part of the standard tab order.`]}),`
`,(0,r.jsx)(l,{label:`General Keyboard Shortcuts`,level:3}),`
`,(0,r.jsxs)(t.p,{children:[`Pressing `,(0,r.jsx)(f,{children:`Enter`}),` while a `,(0,r.jsx)(t.strong,{children:`Link`}),` is focused activates it, navigating to the associated destination.`]}),`
`,(0,r.jsxs)(t.p,{children:[`Pressing `,(0,r.jsx)(f,{children:`Shift`}),` + `,(0,r.jsx)(f,{children:`Tab`}),` moves focus to the previous interactive element.`]}),`
`,(0,r.jsxs)(t.p,{children:[`If a `,(0,r.jsx)(t.strong,{children:`Link`}),` opens in a new tab, focus remains on the original page unless otherwise specified.`]}),`
`,(0,r.jsx)(l,{label:`Accessibility`,level:2}),`
`,(0,r.jsxs)(t.p,{children:[`This component complies with the `,(0,r.jsx)(c,{href:`https://www.w3.org/WAI/ARIA/apg/patterns/link/`,children:`Link WAI-ARIA design pattern`}),`.`]}),`
`,(0,r.jsx)(l,{label:`Icon-only Link`,level:3}),`
`,(0,r.jsxs)(t.p,{children:[`If a `,(0,r.jsx)(t.strong,{children:`Link`}),` is represented only by an `,(0,r.jsx)(t.strong,{children:`Icon`}),`, it must have an explicit accessible label to provide context about its destination or action.`]}),`
`,(0,r.jsx)(s,{story:`AccessibilityIconOnlyLink`}),`
`,(0,r.jsxs)(t.p,{children:[(0,r.jsx)(u,{name:`circle-check`,style:{color:`var(--ods-semantic-color-content-success)`}}),` Screen readers will announce the link and its label.`]}),`
`,(0,r.jsx)(l,{label:`Link opening in a new tab`,level:3}),`
`,(0,r.jsxs)(t.p,{children:[`When a `,(0,r.jsx)(t.strong,{children:`Link`}),` opens in a new tab (`,(0,r.jsx)(t.code,{children:`target="_blank"`}),`), users should be informed to avoid confusion. This can be done by adding a visual indicator (e.g., Icon: "external") and using `,(0,r.jsx)(t.code,{children:`aria-label`}),` to provide context.`]}),`
`,(0,r.jsx)(s,{story:`AccessibilityInANewTab`}),`
`,(0,r.jsxs)(t.p,{children:[(0,r.jsx)(u,{name:`circle-check`,style:{color:`var(--ods-semantic-color-content-success)`}}),` The screen reader will announce the link, the opening in a new tab behavior and the link label.`]}),`
`,(0,r.jsx)(l,{label:`Downloadable files`,level:3}),`
`,(0,r.jsxs)(t.p,{children:[`If a `,(0,r.jsx)(t.strong,{children:`Link`}),` points to a file download, it should include the file type and size information.`]}),`
`,(0,r.jsx)(s,{story:`AccessibilityFileDownload`}),`
`,(0,r.jsxs)(t.p,{children:[(0,r.jsx)(u,{name:`circle-check`,style:{color:`var(--ods-semantic-color-content-success)`}}),` Screen readers will announce the link, the link label with the file name, type and size, ensuring users know they are downloading a file.`]})]})}function a(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(i,{...e})}):i(e)}function o(e,t){throw Error(`Expected `+(t?`component`:`object`)+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}export{a as default};