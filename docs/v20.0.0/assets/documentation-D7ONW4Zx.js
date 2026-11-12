import{i as e}from"./rolldown-runtime-Dd_uD5pT.js";import{t}from"./jsx-runtime-DREnUpxT.js";import{T as n}from"./index-CzEwg6AJ.js";var r=e(t());function i(e){let t={code:`code`,em:`em`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...n(),...e.components},{BestPractices:i,Canvas:a,DocLink:s,ExternalLink:c,Heading:l,Icon:u,IdentityCard:d,Message:f,MessageBody:p,MessageIcon:m}=t;return i||o(`BestPractices`,!0),a||o(`Canvas`,!0),s||o(`DocLink`,!0),c||o(`ExternalLink`,!0),l||o(`Heading`,!0),u||o(`Icon`,!0),d||o(`IdentityCard`,!0),f||o(`Message`,!0),p||o(`MessageBody`,!0),m||o(`MessageIcon`,!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.p,{children:(0,r.jsx)(t.em,{children:`A visual indicator that a process is happening in the background but the interface is not yet ready for interaction.`})}),`
`,(0,r.jsx)(a,{story:`Overview`,source:`none`}),`
`,(0,r.jsx)(l,{label:`Overview`,level:2}),`
`,(0,r.jsx)(d,{aliases:[`Loading`,`Spin`,`Circular Progress`],figmaLink:`https://www.figma.com/design/9jDDTcR4a9jPRFcdjawAlf/ODS---UI-Kit?node-id=52-10340`,githubUrl:`https://github.com/ovh/design-system/tree/master/packages/ods-react/src/components/spinner`,name:`Spinner`,children:(0,r.jsx)(t.p,{children:`A visual indicator that a process is happening in the background but the interface is not yet ready for
interaction.`})}),`
`,(0,r.jsx)(l,{label:`Usage`,level:2}),`
`,(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:`Spinner`}),` component is used as a fallback when complex content is loading in the background.`]}),`
`,(0,r.jsx)(l,{label:`Spinner vs Skeleton`,level:3}),`
`,(0,r.jsxs)(t.p,{children:[`Both `,(0,r.jsx)(t.strong,{children:`Spinner`}),` and `,(0,r.jsx)(s,{to:`/components/skeleton`,children:`Skeleton`}),` indicate that content is loading, but they serve different purposes:`]}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsxs)(t.li,{children:[`
`,(0,r.jsxs)(t.p,{children:[`Use a `,(0,r.jsx)(t.strong,{children:`Spinner`}),` when the content or result is unknown and the user must wait. For example, after clicking a button or loading data from an API`]}),`
`]}),`
`,(0,r.jsxs)(t.li,{children:[`
`,(0,r.jsx)(t.p,{children:`Use a Skeleton when the structure of the content is known, but the actual data hasn't loaded yet. It helps set expectations and makes the wait feel shorter`}),`
`]}),`
`]}),`
`,(0,r.jsx)(l,{label:`Dos & Don'ts`,level:3}),`
`,(0,r.jsx)(i,{donts:[`- Don't use multiple Spinners on the same page, it creates confusion and visual noise. Use a single centralized Spinner or loading overlay`,`- Don't use a Spinner for text or layout placeholders, use the Skeleton component instead, which better preserves structure`,`- Don't use a Spinner if the loading duration is extremely short, this can feel like a flicker or visual glitch`,`- Don't place Spinners in interactive elements like buttons without also disabling them and explaining the ongoing action`],dos:[`- Use a Spinner to indicate indeterminate loading when the duration is unknown or cannot be measured`,`- Use a Spinner when complex or background processes are happening (e.g. fetching filtered data, saving a form)`,`- Display a Spinner if the loading is expected to take more than a couple of seconds, to reassure the user`,`- Combine the Spinner with contextual messaging (e.g. "Loading [...]" or "Saving your changes") to clarify what's happening`]}),`
`,(0,r.jsx)(l,{label:`Placement`,level:2}),`
`,(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:`Spinner`}),` can be placed where needed, whether it's centered on an overlay or specific container/content in the page.`]}),`
`,(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:`Spinner`}),` can widen to match its container.`]}),`
`,(0,r.jsx)(l,{label:`Behavior`,level:2}),`
`,(0,r.jsxs)(t.p,{children:[`The `,(0,r.jsx)(t.strong,{children:`Spinner`}),` component has a spinning animation to show to the user that the background process is moving on.`]}),`
`,(0,r.jsx)(l,{label:`Variation`,level:2}),`
`,(0,r.jsx)(l,{label:`Color`,level:3}),`
`,(0,r.jsxs)(t.p,{children:[`The `,(0,r.jsx)(t.strong,{children:`Spinner`}),` uses the accent color by default.`]}),`
`,(0,r.jsxs)(t.p,{children:[`To use another color, set the `,(0,r.jsx)(t.code,{children:`--ods-spinner-color`}),` CSS custom property on the `,(0,r.jsx)(t.strong,{children:`Spinner`}),`, through its `,(0,r.jsx)(t.code,{children:`className`}),`, or on a container of yours, for example:`]}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:`var(--ods-semantic-color-content-neutral)`}),`: for secondary or subtle loading indicators, commonly displayed in disabled parent components to indicate background activity without drawing too much attention`]}),`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:`currentColor`}),`: to follow the text color around the `,(0,r.jsx)(t.strong,{children:`Spinner`}),`, for example on a dark or colored background`]}),`
`]}),`
`,(0,r.jsxs)(t.p,{children:[`Avoid a global `,(0,r.jsx)(t.code,{children:`[data-ods="spinner"]`}),` selector, which would also reach the Spinners displayed by other components (Button, Input, FileUpload). A container also reaches the loading Spinners of the `,(0,r.jsx)(t.strong,{children:`Input`}),` and `,(0,r.jsx)(t.strong,{children:`FileUpload`}),` placed inside it; only the `,(0,r.jsx)(t.strong,{children:`Button`}),` Spinner keeps its own color, the text color of the button. In TypeScript, setting the custom property through the `,(0,r.jsx)(t.code,{children:`style`}),` prop requires a cast (`,(0,r.jsx)(t.code,{children:`style={ { '--ods-spinner-color': 'currentColor' } as CSSProperties }`}),`), which a `,(0,r.jsx)(t.code,{children:`className`}),` avoids.`]}),`
`,(0,r.jsx)(l,{label:`Navigation`,level:2}),`
`,(0,r.jsxs)(t.p,{children:[`The `,(0,r.jsx)(t.strong,{children:`Spinner`}),` component is non-interactive and does not receive keyboard focus. It is purely visual and serves as a loading indicator, without affecting keyboard navigation.`]}),`
`,(0,r.jsx)(l,{label:`Accessibility`,level:2}),`
`,(0,r.jsxs)(t.p,{children:[`The `,(0,r.jsx)(t.strong,{children:`Spinner`}),` component does not automatically provide enough context for assistive technologies. To ensure accessibility, additional attributes must be applied to the container that holds the loading content.`]}),`
`,(0,r.jsx)(l,{label:`Indicating loading state`,level:3}),`
`,(0,r.jsxs)(t.p,{children:[`The `,(0,r.jsx)(t.strong,{children:`Spinner`}),` itself does not convey the loading state. This responsibility falls on the container where content is being loaded by using  `,(0,r.jsx)(c,{href:`https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-busy`,children:`aria-busy`}),` and `,(0,r.jsx)(c,{href:`https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-live`,children:`aria-live`}),`.`]}),`
`,(0,r.jsx)(a,{story:`AccessibilityAriaBusyAriaLive`}),`
`,(0,r.jsx)(t.p,{children:`Explanations:`}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:`aria-busy="true"`}),` informs assistive technologies that content is being updated.`]}),`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:`aria-live="polite"`}),` ensures that the loading message is announced when necessary without interrupting.`]}),`
`]}),`
`,(0,r.jsxs)(t.p,{children:[(0,r.jsx)(u,{name:`circle-check`,style:{color:`var(--ods-semantic-color-content-success)`}}),` This approach ensures that users with assistive technologies understand when loading starts and ends.`]}),`
`,(0,r.jsxs)(f,{status:`information`,dismissible:!1,style:{width:`100%`},children:[(0,r.jsx)(m,{name:`circle-info`}),(0,r.jsx)(p,{children:(0,r.jsx)(t.p,{children:`Once the content is loaded, aria-busy should be set to false.`})})]}),`
`,(0,r.jsx)(l,{label:`Linking the Spinner to a loading description`,level:3}),`
`,(0,r.jsxs)(t.p,{children:[`If the `,(0,r.jsx)(t.strong,{children:`Spinner`}),` is associated with a specific loading action, it should be explicitly labeled using `,(0,r.jsx)(c,{href:`https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby`,children:`aria-labelledby`}),` or `,(0,r.jsx)(c,{href:`https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label`,children:`aria-label`}),`.`]}),`
`,(0,r.jsx)(a,{story:`AccessibilityAriaLabel`}),`
`,(0,r.jsxs)(t.p,{children:[(0,r.jsx)(u,{name:`circle-check`,style:{color:`var(--ods-semantic-color-content-success)`}}),` Screen readers will announce the label, the spinner and its current state.`]}),`
`,(0,r.jsx)(a,{story:`AccessibilityAriaLabelledBy`}),`
`,(0,r.jsxs)(t.p,{children:[(0,r.jsx)(u,{name:`circle-check`,style:{color:`var(--ods-semantic-color-content-success)`}}),` Screen readers will announce the label, the spinner and its current state.`]})]})}function a(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(i,{...e})}):i(e)}function o(e,t){throw Error(`Expected `+(t?`component`:`object`)+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}export{a as default};