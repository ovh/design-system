import{i as e}from"./rolldown-runtime-Dd_uD5pT.js";import{t}from"./jsx-runtime-DREnUpxT.js";import{T as n}from"./index-CdRG7ZE_.js";var r=e(t());function i(e){let t={p:`p`,strong:`strong`,...n(),...e.components},{BestPractices:i,Canvas:a,Heading:s,IdentityCard:c}=t;return i||o(`BestPractices`,!0),a||o(`Canvas`,!0),s||o(`Heading`,!0),c||o(`IdentityCard`,!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(a,{story:`Overview`,source:`none`}),`
`,(0,r.jsx)(s,{label:`Overview`,level:2}),`
`,(0,r.jsxs)(c,{aliases:[`Media`,`Image`],figmaLink:`https://www.figma.com/design/9jDDTcR4a9jPRFcdjawAlf/ODS---UI-Kit?node-id=237-13496`,githubUrl:`https://github.com/ovh/design-system/tree/master/packages/ods-react/src/components/medium`,name:`Medium`,children:[(0,r.jsxs)(t.p,{children:[`The `,(0,r.jsx)(t.strong,{children:`Medium`}),` component is a versatile UI element designed to handle different types of media content.`]}),(0,r.jsx)(t.p,{children:`It ensures that media is displayed correctly and consistently within the application.`})]}),`
`,(0,r.jsx)(s,{label:`Usage`,level:2}),`
`,(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:`Medium`}),` is used to display assets with an alternative text description.`]}),`
`,(0,r.jsx)(t.p,{children:`When the asset is an image, it should be mostly presentation to draw user's attention visually.`}),`
`,(0,r.jsx)(s,{label:`Dos & Don'ts`,level:3}),`
`,(0,r.jsx)(i,{donts:[`- Don't use Medium with embedded text that cannot be read by screen readers`,`- Don't overload pages with high-resolution medium that may slow down load times`,`- Don't stretch or distort Medium to fit containers, maintain proportions and visual quality`,`- Don't rely on Medium alone to convey essential information. Always provide a textual equivalent when needed`],dos:[`- Use the Medium component to display images and media consistently across the application`,`- Provide alt text, captions, or descriptions where appropriate, to ensure accessibility and context`,`- Ensure responsive behavior so medium adapts well to different screen sizes`]}),`
`,(0,r.jsx)(s,{label:`Placement`,level:2}),`
`,(0,r.jsx)(t.p,{children:`The width and height dimensions of the image can be set to fixed sizes.`}),`
`,(0,r.jsx)(s,{label:`Navigation`,level:2}),`
`,(0,r.jsxs)(t.p,{children:[`The `,(0,r.jsx)(t.strong,{children:`Medium`}),` component is non-interactive and does not receive keyboard focus. It is used solely for displaying media content and does not impact keyboard navigation.`]}),`
`,(0,r.jsx)(s,{label:`Accessibility`,level:2}),`
`,(0,r.jsx)(s,{label:`Use caption text to add information about an image`,level:3}),`
`,(0,r.jsx)(t.p,{children:`Caption is useful to add information about the image itself (ex: copyright),
whereas the alternative text always describe what the image actually conveys.`}),`
`,(0,r.jsx)(a,{story:`Caption`})]})}function a(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(i,{...e})}):i(e)}function o(e,t){throw Error(`Expected `+(t?`component`:`object`)+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}export{a as default};