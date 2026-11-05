import{i as e}from"./rolldown-runtime-Dd_uD5pT.js";import{t}from"./jsx-runtime-DREnUpxT.js";import{T as n}from"./index-CdRG7ZE_.js";var r=e(t());function i(e){let t={code:`code`,em:`em`,li:`li`,ol:`ol`,p:`p`,strong:`strong`,ul:`ul`,...n(),...e.components},{Anatomy:i,BestPractices:a,Canvas:s,Heading:c,IdentityCard:l}=t;return i||o(`Anatomy`,!0),a||o(`BestPractices`,!0),s||o(`Canvas`,!0),c||o(`Heading`,!0),l||o(`IdentityCard`,!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.p,{children:(0,r.jsxs)(t.em,{children:[(0,r.jsx)(t.strong,{children:`Avatar`}),` is a visual representation of a user or entity, supporting multiple content types such as user images, icons, and user initials.`]})}),`
`,(0,r.jsx)(s,{story:`Overview`,source:`none`}),`
`,(0,r.jsx)(c,{label:`Overview`,level:2}),`
`,(0,r.jsx)(l,{aliases:[],figmaLink:`https://www.figma.com/design/mwZtfuQ9nzv6fY0dfez4NZ/-Q3-2026--IA-element?node-id=18697-768`,githubUrl:`https://github.com/ovh/design-system/tree/master/packages/ods-react/src/components/avatar`,name:`Avatar`,startingVersion:19,children:(0,r.jsxs)(t.p,{children:[`The `,(0,r.jsx)(t.strong,{children:`Avatar`}),` component is a visual representation of a user or entity, supporting multiple content types such as user images, icons, and user initials.`]})}),`
`,(0,r.jsx)(c,{label:`Usage`,level:2}),`
`,(0,r.jsxs)(t.p,{children:[`The `,(0,r.jsx)(t.strong,{children:`Avatar`}),` component is commonly used to represent users, bots, or systems in various applications, such as chat interfaces, user profiles, or notification systems.`]}),`
`,(0,r.jsx)(t.p,{children:`It is commonly used for:`}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:`User profiles`}),`: display a user's avatar next to their name and other profile information`]}),`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:`Chat interfaces`}),`: use avatars to represent users or bots in a conversation`]}),`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:`Notification systems`}),`: display an avatar for the sender or recipient of a notification`]}),`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:`Team or member lists`}),`: show avatars for each team member or user in a list`]}),`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:`Comment sections`}),`: display an avatar for each commenter to help identify the author of a comment`]}),`
`]}),`
`,(0,r.jsx)(c,{label:`Dos & Don'ts`,level:3}),`
`,(0,r.jsx)(a,{donts:[`- Don't use the Avatar component as a decorative element or without a clear purpose`,`- Don't overload the Avatar component with too much information or complex graphics`,`- Don't use an Avatar that is too small or too large for the context, which can affect readability and recognition`,`- Don't forget to provide a fallback logic for cases where the image fails to load or no name is provided (i.e. initials, icons)`],dos:[`- Use the Avatar component to represent a user or entity in a concise and recognizable way`,`- Choose the appropriate content type (image, icon, or initials) based on the context and available information`,`- Use the Avatar component with sufficient contrast or color scheme`]}),`
`,(0,r.jsx)(c,{label:`Best Practices in Context`,level:3}),`
`,(0,r.jsx)(i,{src:`components/avatar/anatomy.png`}),`
`,(0,r.jsxs)(t.ol,{children:[`
`,(0,r.jsx)(t.li,{children:(0,r.jsx)(t.strong,{children:`Avatar`})}),`
`]}),`
`,(0,r.jsx)(c,{label:`Behavior`,level:2}),`
`,(0,r.jsxs)(t.p,{children:[`The `,(0,r.jsx)(t.strong,{children:`Avatar`}),` component is a static display-only element, providing a visual representation of a user or entity without any interactive functionality.`]}),`
`,(0,r.jsx)(t.p,{children:`The component follows a content priority chain:`}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsxs)(t.li,{children:[`If `,(0,r.jsx)(t.strong,{children:`children`}),` are provided, they are displayed (initials, custom icon, etc.)`]}),`
`,(0,r.jsxs)(t.li,{children:[`If a `,(0,r.jsx)(t.strong,{children:`src`}),` URL is provided, an image is rendered`]}),`
`,(0,r.jsxs)(t.li,{children:[`If the image fails to load (error), the `,(0,r.jsx)(t.strong,{children:`fallback`}),` content is displayed`]}),`
`,(0,r.jsx)(t.li,{children:`If no fallback is provided, a default user icon is shown`}),`
`]}),`
`,(0,r.jsx)(c,{label:`Navigation`,level:2}),`
`,(0,r.jsxs)(t.p,{children:[`The `,(0,r.jsx)(t.strong,{children:`Avatar`}),` component is non-interactive and does not receive keyboard focus when used alone.`]}),`
`,(0,r.jsx)(c,{label:`Accessibility`,level:2}),`
`,(0,r.jsx)(t.p,{children:`When used inside interactive contexts (e.g. next to a user name link or inside a button), ensure the parent element provides the necessary accessible label.`}),`
`,(0,r.jsxs)(t.p,{children:[`When the `,(0,r.jsx)(t.strong,{children:`Avatar`}),` displays an image, the `,(0,r.jsx)(t.code,{children:`alt`}),` attribute is empty by default since the avatar is typically decorative. If the avatar conveys meaningful information, wrap it in an element with an appropriate `,(0,r.jsx)(t.code,{children:`aria-label`}),`.`]})]})}function a(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(i,{...e})}):i(e)}function o(e,t){throw Error(`Expected `+(t?`component`:`object`)+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}export{a as default};