import{i as e}from"./rolldown-runtime-Dd_uD5pT.js";import{t}from"./jsx-runtime-DREnUpxT.js";import{T as n}from"./index-CzEwg6AJ.js";var r=e(t());function i(e){let t={em:`em`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...n(),...e.components},{BestPractices:i,Canvas:a,DocLink:s,ExternalLink:c,Heading:l,Icon:u,IdentityCard:d}=t;return i||o(`BestPractices`,!0),a||o(`Canvas`,!0),s||o(`DocLink`,!0),c||o(`ExternalLink`,!0),l||o(`Heading`,!0),u||o(`Icon`,!0),d||o(`IdentityCard`,!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.p,{children:(0,r.jsxs)(t.em,{children:[(0,r.jsx)(t.strong,{children:`Skeleton`}),` component indicates that data is loading. It improves the perceived loading time for the user.`]})}),`
`,(0,r.jsx)(a,{story:`Default`,source:`none`}),`
`,(0,r.jsx)(l,{label:`Overview`,level:2}),`
`,(0,r.jsx)(d,{aliases:[`Skeleton loader`],figmaLink:`https://www.figma.com/design/9jDDTcR4a9jPRFcdjawAlf/ODS---UI-Kit?node-id=52-10250`,githubUrl:`https://github.com/ovh/design-system/tree/master/packages/ods-react/src/components/skeleton`,name:`Skeleton`,children:(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:`Skeleton`}),` indicates, through and animation, that content is loading and that the screen is not frozen.`]})}),`
`,(0,r.jsx)(l,{label:`Usage`,level:2}),`
`,(0,r.jsxs)(t.p,{children:[`A `,(0,r.jsx)(t.strong,{children:`Skeleton`}),` can be used in a variety of contexts such as in Cards, lists, and table content.`]}),`
`,(0,r.jsx)(l,{label:`Spinner vs Skeleton`,level:3}),`
`,(0,r.jsxs)(t.p,{children:[`Both `,(0,r.jsx)(s,{to:`/components/spinner`,children:`Spinner`}),` and `,(0,r.jsx)(t.strong,{children:`Skeleton`}),` indicate that content is loading, but they serve different purposes:`]}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsxs)(t.li,{children:[`
`,(0,r.jsx)(t.p,{children:`Use a Spinner when the content or result is unknown and the user must wait. For example, after clicking a button or loading data from an API`}),`
`]}),`
`,(0,r.jsxs)(t.li,{children:[`
`,(0,r.jsxs)(t.p,{children:[`Use a `,(0,r.jsx)(t.strong,{children:`Skeleton`}),` when the structure of the content is known, but the actual data hasn't loaded yet. It helps set expectations and makes the wait feel shorter`]}),`
`]}),`
`]}),`
`,(0,r.jsx)(l,{label:`Dos & Don'ts`,level:3}),`
`,(0,r.jsx)(i,{donts:[`- Don't use Skeleton for static content that doesn't change, load it normally without placeholders`,`- Don't apply Skeleton to interactive elements like buttons or inputs. Use Spinner or loading states instead`,`- Don't show Skeleton for very short loading delays, it may feel like a glitch or visual noise`,`- Don't animate excessively or use distracting visuals. Skeleton should feel smooth and unobtrusive`],dos:[`- Use a Skeleton to indicate loading states for dynamic content, such as user data or content blocks`,`- Prefer Skeleton when content will take more than a moment to load (usually > 500ms)`,`- Ensure Skeleton is replaced with real content as soon as it is available`]}),`
`,(0,r.jsx)(l,{label:`Placement`,level:2}),`
`,(0,r.jsxs)(t.p,{children:[`A `,(0,r.jsx)(t.strong,{children:`Skeleton`}),` can be placed whenever needed to indicate a content is loading.`]}),`
`,(0,r.jsx)(l,{label:`Behavior`,level:2}),`
`,(0,r.jsxs)(t.p,{children:[`The `,(0,r.jsx)(t.strong,{children:`Skeleton`}),` component has a linear animation to show to indicates a content is loading.`]}),`
`,(0,r.jsx)(l,{label:`Navigation`,level:2}),`
`,(0,r.jsxs)(t.p,{children:[`The `,(0,r.jsx)(t.strong,{children:`Skeleton`}),` component is non-interactive and does not receive keyboard focus. It is purely visual and serves as a placeholder for content loading, without affecting keyboard navigation.`]}),`
`,(0,r.jsx)(l,{label:`Accessibility`,level:2}),`
`,(0,r.jsxs)(t.p,{children:[`The `,(0,r.jsx)(t.strong,{children:`Skeleton`}),` component is purely decorative.
Its role is to visually indicate that content is loading, but it does not carry any meaningful information for assistive technologies.
For this reason, it is hidden from screen readers.`]}),`
`,(0,r.jsx)(l,{label:`Indicating loading state`,level:3}),`
`,(0,r.jsxs)(t.p,{children:[`To ensure screen reader users are aware that content is being loaded, you should set `,(0,r.jsx)(c,{href:`https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-busy`,children:`aria-busy`}),` on the container that will eventually receive the content.`]}),`
`,(0,r.jsx)(a,{story:`AccessibilityLoading`}),`
`,(0,r.jsxs)(t.p,{children:[(0,r.jsx)(u,{name:`circle-check`,style:{color:`var(--ods-semantic-color-content-success)`}}),` Using this approach ensures that assistive technologies are aware that content is being updated, allowing them to wait before announcing changes.`]})]})}function a(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(i,{...e})}):i(e)}function o(e,t){throw Error(`Expected `+(t?`component`:`object`)+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}export{a as default};