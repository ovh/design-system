import{i as e}from"./rolldown-runtime-Dd_uD5pT.js";import{t}from"./jsx-runtime-DREnUpxT.js";import{T as n}from"./index-CdRG7ZE_.js";var r=e(t());function i(e){let t={li:`li`,ol:`ol`,p:`p`,strong:`strong`,ul:`ul`,...n(),...e.components},{Anatomy:i,BestPractices:a,Canvas:s,Heading:c,IdentityCard:l}=t;return i||o(`Anatomy`,!0),a||o(`BestPractices`,!0),s||o(`Canvas`,!0),c||o(`Heading`,!0),l||o(`IdentityCard`,!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s,{story:`Overview`,source:`none`}),`
`,(0,r.jsx)(c,{label:`Overview`,level:2}),`
`,(0,r.jsx)(l,{aliases:[],figmaLink:`https://www.figma.com/design/9jDDTcR4a9jPRFcdjawAlf/branch/l7NGsGx2CuieJpqHn4B1zo/ODS---UI-Kit?m=auto&node-id=13588-131&t=z9FF7UzVAAvDXO1U-1`,githubUrl:`https://github.com/ovh/design-system/tree/master/packages/ods-react/src/components/tile`,name:`Tile`,startingVersion:19,children:(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:`Tile`}),` is a selectable `,(0,r.jsx)(t.strong,{children:`Card`}),` used to present options or content blocks that can be selected by the user.`]})}),`
`,(0,r.jsx)(c,{label:`Usage`,level:2}),`
`,(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:`Tile`}),` is typically used to display a small set of options. Common use cases include:`]}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsx)(t.li,{children:`forms`}),`
`,(0,r.jsx)(t.li,{children:`surveys`}),`
`,(0,r.jsx)(t.li,{children:`preference or configuration screens`}),`
`]}),`
`,(0,r.jsx)(c,{label:`Dos & Don'ts`,level:3}),`
`,(0,r.jsx)(a,{donts:[`- Avoid using the Tile component for complex or lengthy content, as it may overwhelm the user`,`- Do not use the Tile for options that require a high level of detail or explanation; instead, consider using a different component or providing additional context through Tooltips or Popovers`,`- Refrain from mixing checkbox and radio button in Tiles within the same selection group, as this can cause confusion`],dos:[`- Use the Tile component when you need to present a limited number of options to the user, especially when those options require a brief description or additional information`,`- Use a Tile with a checkbox for multiple selections, and with a radio button for single selections`,`- Ensure that the content within Tile is concise and relevant to the user's decision-making process`]}),`
`,(0,r.jsx)(c,{label:`Best Practices in Context`,level:3}),`
`,(0,r.jsx)(i,{src:`components/tile/anatomy.png`}),`
`,(0,r.jsxs)(t.ol,{children:[`
`,(0,r.jsx)(t.li,{children:(0,r.jsx)(t.strong,{children:`Tile`})}),`
`]}),`
`,(0,r.jsx)(c,{label:`Placement`,level:2}),`
`,(0,r.jsxs)(t.p,{children:[`The `,(0,r.jsx)(t.strong,{children:`Tile`}),` component can be used in various layouts, including but not limited to, grids, lists, and as standalone elements within a form.
When displaying multiple `,(0,r.jsx)(t.strong,{children:`Tiles`}),`, ensure they are evenly spaced and aligned to provide a clear and organized user interface.
Consider responsive behavior so `,(0,r.jsx)(t.strong,{children:`Tiles`}),` remain usable and readable on smaller screens.`]}),`
`,(0,r.jsx)(c,{label:`Behavior`,level:2}),`
`,(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:`Tile`}),` component can be selected and disabled.`]}),`
`,(0,r.jsxs)(t.p,{children:[`When selected, `,(0,r.jsx)(t.strong,{children:`Tile`}),` displays a clear visual indication of its selected state.`]}),`
`,(0,r.jsxs)(t.p,{children:[`When disabled, `,(0,r.jsx)(t.strong,{children:`Tile`}),` does not respond to user interaction and cannot be selected. All content inside the `,(0,r.jsx)(t.strong,{children:`Tile`}),` is visually and functionally disabled.`]}),`
`,(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:`Tile`}),` can contain any type of content, including interactive elements.`]}),`
`,(0,r.jsx)(c,{label:`Navigation`,level:2}),`
`,(0,r.jsx)(c,{label:`Focus Management`,level:3}),`
`,(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:`Tile`}),` follows standard keyboard navigation patterns defined by its usage context.`]}),`
`,(0,r.jsx)(c,{label:`Accessibility`,level:2}),`
`,(0,r.jsxs)(t.p,{children:[`Interactive elements inside `,(0,r.jsx)(t.strong,{children:`Tile`}),` must follow a logical tab order. Inner interactive content must remain accessible to assistive technologies, without interfering with the `,(0,r.jsx)(t.strong,{children:`Tile`}),` selection state.`]})]})}function a(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(i,{...e})}):i(e)}function o(e,t){throw Error(`Expected `+(t?`component`:`object`)+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}export{a as default};