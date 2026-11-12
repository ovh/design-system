import{i as e}from"./rolldown-runtime-Dd_uD5pT.js";import{t}from"./jsx-runtime-DREnUpxT.js";import{T as n}from"./index-CzEwg6AJ.js";var r=e(t());function i(e){let t={code:`code`,em:`em`,li:`li`,ol:`ol`,p:`p`,strong:`strong`,ul:`ul`,...n(),...e.components},{Anatomy:i,BestPractices:a,Canvas:s,ExternalLink:c,Heading:l,IdentityCard:u,Kbd:d}=t;return i||o(`Anatomy`,!0),a||o(`BestPractices`,!0),s||o(`Canvas`,!0),c||o(`ExternalLink`,!0),l||o(`Heading`,!0),u||o(`IdentityCard`,!0),d||o(`Kbd`,!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.p,{children:(0,r.jsxs)(t.em,{children:[`An `,(0,r.jsx)(t.strong,{children:`Accordion`}),` is a vertical header that reveals or hides an associated section of content.`]})}),`
`,(0,r.jsx)(s,{story:`Overview`,source:`none`}),`
`,(0,r.jsx)(l,{label:`Overview`,level:2}),`
`,(0,r.jsxs)(u,{aliases:[`Collapsible`,`FAQ`],figmaLink:`https://www.figma.com/design/9jDDTcR4a9jPRFcdjawAlf/ODS---UI-Kit?node-id=1-6634`,githubUrl:`https://github.com/ovh/design-system/tree/master/packages/ods-react/src/components/accordion`,name:`Accordion`,children:[(0,r.jsxs)(t.p,{children:[`The `,(0,r.jsx)(t.strong,{children:`Accordion`}),` component delivers large amounts of content in a small space through progressive disclosure.`]}),(0,r.jsx)(t.p,{children:`The header part gives the user a high-level overview of the content allowing them to decide which sections to
read.`}),(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:`Accordions`}),` can make information processing and discovering more effective. However, it does hide content
from the users, and it's important to account for a user not noticing or reading all the included content. If a user
is likely to read all the content then then the usage of an `,(0,r.jsx)(t.strong,{children:`Accordion`}),` would not be recommended as it adds an extra
interaction to access the content; instead use a full scrolling page with normal headers.`]})]}),`
`,(0,r.jsx)(l,{label:`Usage`,level:2}),`
`,(0,r.jsx)(t.p,{children:`Use any number of elements to visually display them as a group.
Several collapsible panels can co-exist in a same interface.`}),`
`,(0,r.jsx)(t.p,{children:`Use this component for :`}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsx)(t.li,{children:`Organizing related information`}),`
`,(0,r.jsx)(t.li,{children:`Shortening pages and reducing scrolling when content is not crucial to read in full`}),`
`,(0,r.jsx)(t.li,{children:`When space is at a premium and long content cannot be displayed all at once, like on a mobile interface or in a side panel`}),`
`]}),`
`,(0,r.jsx)(l,{label:`Dos & Don'ts`,level:3}),`
`,(0,r.jsx)(a,{donts:[`- Don't nest Accordions inside each other`,`- Don't use Accordion to hide critical information needed for completing a task`,`- Don't use vague or generic titles like "Section 1", they should be descriptive`,`- Don't expose a lot of content in the title`],dos:[`- Use Accordion to progressively disclose content, especially in long or dense pages`,`- Ensure the summary/title of each Accordion clearly communicates what it contains`,`- Use Accordions to group related content (e.g., FAQ)`,`- Keep the content within each panel concise and scannable`,`- Use Accordion instead of Tab if users need to see multiple sections at once`]}),`
`,(0,r.jsx)(l,{label:`Best Practices in Context`,level:3}),`
`,(0,r.jsx)(i,{src:`components/accordion/anatomy.png`}),`
`,(0,r.jsxs)(t.ol,{children:[`
`,(0,r.jsx)(t.li,{children:(0,r.jsx)(t.strong,{children:`Accordion`})}),`
`,(0,r.jsx)(t.li,{children:(0,r.jsx)(t.strong,{children:`Header`})}),`
`,(0,r.jsx)(t.li,{children:(0,r.jsx)(t.strong,{children:`Panel`})}),`
`]}),`
`,(0,r.jsx)(l,{label:`Placement`,level:2}),`
`,(0,r.jsxs)(t.p,{children:[`The `,(0,r.jsx)(t.strong,{children:`Accordion`}),` component is adjusted to the parent's width. It can vary based on the content, layout, and page design.`]}),`
`,(0,r.jsxs)(t.p,{children:[`By default, the `,(0,r.jsx)(t.strong,{children:`Accordion`}),` content is left-aligned in its container, as the header does.`]}),`
`,(0,r.jsx)(t.p,{children:`It can be placed within main page content or inside a side container (as panels, or tiles).`}),`
`,(0,r.jsx)(l,{label:`Behavior`,level:2}),`
`,(0,r.jsxs)(t.p,{children:[`An `,(0,r.jsx)(t.strong,{children:`Accordion`}),` can be hovered, focused, clicked and disabled.`]}),`
`,(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:`Accordion`}),` has two states : collapsed and expanded. It is collapsed by default.`]}),`
`,(0,r.jsx)(t.p,{children:`When triggering the header part, the panel part should react as expanding or collapsing, depending on what previous
state it had.`}),`
`,(0,r.jsx)(t.p,{children:`The mouse cursor acts as a clickable area on the Header part of the component.`}),`
`,(0,r.jsxs)(t.p,{children:[`The `,(0,r.jsx)(t.strong,{children:`Icon`}),` helps the user to know if the `,(0,r.jsx)(t.strong,{children:`Accordion`}),` is collapsed or expanded :`]}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsx)(t.li,{children:`Collapsed : chevron points right`}),`
`,(0,r.jsx)(t.li,{children:`Expanded : chevron points down`}),`
`]}),`
`,(0,r.jsxs)(t.p,{children:[`The Header part of this component acts like a button, with hover, focus and active styles. With the `,(0,r.jsx)(t.code,{children:`low`}),` emphasis, hovering only changes the cursor, as there is no border or background to highlight.`]}),`
`,(0,r.jsx)(t.p,{children:`Same behavior and styling applies to both Desktop and Mobile modes.`}),`
`,(0,r.jsx)(l,{label:`Variation`,level:2}),`
`,(0,r.jsx)(l,{label:`Emphasis`,level:3}),`
`,(0,r.jsxs)(t.p,{children:[`The emphasis sets the visual weight of the `,(0,r.jsx)(t.strong,{children:`Accordion`}),`, not the importance of its content. It applies to all its items.`]}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:`High`}),`: the panel of an open item sits on a muted surface that sets it apart from the header, with the `,(0,r.jsx)(t.code,{children:`medium`}),` borders. Use it when the `,(0,r.jsx)(t.strong,{children:`Accordion`}),` must stand out from the surrounding content.`]}),`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:`Medium`}),` `,(0,r.jsx)(t.em,{children:`(default)`}),`: items are outlined by borders, on the raised surface.`]}),`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:`Low`}),`: no border nor background: spacing separates the items. Use it in a dense layout, or when the `,(0,r.jsx)(t.strong,{children:`Accordion`}),` is already inside a framed container (a Card, a side panel).`]}),`
`]}),`
`,(0,r.jsx)(t.p,{children:`Every emphasis supports the disabled state, the multiple mode and both expand icon positions. The keyboard focus stays visible on the header in every emphasis.`}),`
`,(0,r.jsx)(s,{story:`Emphasis`}),`
`,(0,r.jsx)(l,{label:`Navigation`,level:2}),`
`,(0,r.jsx)(l,{label:`Focus Management`,level:3}),`
`,(0,r.jsxs)(t.p,{children:[`The `,(0,r.jsx)(t.strong,{children:`Accordion`}),` header can receive keyboard focus and is part of the standard tab order.`]}),`
`,(0,r.jsx)(t.p,{children:`Focus remains on the header after toggling the section.`}),`
`,(0,r.jsxs)(t.p,{children:[`If the `,(0,r.jsx)(t.strong,{children:`Accordion`}),` is disabled, it does not receive focus and cannot be activated via keyboard.`]}),`
`,(0,r.jsx)(l,{label:`General Keyboard Shortcuts`,level:3}),`
`,(0,r.jsxs)(t.p,{children:[`Pressing `,(0,r.jsx)(d,{children:`Enter`}),` or `,(0,r.jsx)(d,{children:`Space`}),` on a focused `,(0,r.jsx)(t.strong,{children:`Accordion`}),` header toggles its expansion or collapse.`]}),`
`,(0,r.jsxs)(t.p,{children:[`Pressing `,(0,r.jsx)(d,{children:`Escape`}),` does not close an expanded `,(0,r.jsx)(t.strong,{children:`Accordion`}),` section (unless additional custom behavior is implemented).`]}),`
`,(0,r.jsx)(l,{label:`Navigation between sections`,level:3}),`
`,(0,r.jsxs)(t.p,{children:[`If multiple `,(0,r.jsx)(t.strong,{children:`Accordions`}),` exist, users can navigate between headers using the `,(0,r.jsx)(d,{children:`Tab`}),` key.`]}),`
`,(0,r.jsxs)(t.p,{children:[`There is no looping between headers: pressing `,(0,r.jsx)(d,{children:`Tab`}),` on the last header moves focus to the next interactive element outside the Accordion.`]}),`
`,(0,r.jsxs)(t.p,{children:[`Arrow keys (`,(0,r.jsx)(d,{children:`Arrow Up`}),` / `,(0,r.jsx)(d,{children:`Arrow Down`}),`) do not move between `,(0,r.jsx)(t.strong,{children:`Accordions`}),` by default.`]}),`
`,(0,r.jsx)(l,{label:`Accessibility`,level:2}),`
`,(0,r.jsxs)(t.p,{children:[`This component complies with the `,(0,r.jsx)(c,{href:`https://www.w3.org/WAI/ARIA/apg/patterns/accordion`,children:`Accordion WAI-ARIA design pattern`}),`.`]})]})}function a(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(i,{...e})}):i(e)}function o(e,t){throw Error(`Expected `+(t?`component`:`object`)+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}export{a as default};