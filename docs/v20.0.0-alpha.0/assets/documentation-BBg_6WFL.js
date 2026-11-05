import{i as e}from"./rolldown-runtime-Dd_uD5pT.js";import{t}from"./jsx-runtime-DREnUpxT.js";import{T as n}from"./index-CdRG7ZE_.js";var r=e(t());function i(e){let t={code:`code`,li:`li`,ol:`ol`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components},{Anatomy:i,BestPractices:a,Canvas:s,Heading:c,Icon:l,IdentityCard:u,Kbd:d}=t;return i||o(`Anatomy`,!0),a||o(`BestPractices`,!0),s||o(`Canvas`,!0),c||o(`Heading`,!0),l||o(`Icon`,!0),u||o(`IdentityCard`,!0),d||o(`Kbd`,!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s,{story:`Overview`,source:`none`}),`
`,(0,r.jsx)(c,{label:`Overview`,level:2}),`
`,(0,r.jsx)(u,{aliases:[],figmaLink:`https://www.figma.com/design/9jDDTcR4a9jPRFcdjawAlf/branch/9r0DZb1pFrkQnX1uAq9R6y/ODS---UI-Kit?node-id=15891-3153&t=vRk1EoUTDZKyd8fc-0`,githubUrl:`https://github.com/ovh/design-system/tree/master/packages/ods-react/src/components/cart`,name:`Cart`,startingVersion:19,children:(0,r.jsxs)(t.p,{children:[`The `,(0,r.jsx)(t.strong,{children:`Cart`}),` component provides a summary of the user’s current order.
It displays the selected products, their associated options, pricing details, and the overall total before checkout.`]})}),`
`,(0,r.jsx)(c,{label:`Usage`,level:2}),`
`,(0,r.jsxs)(t.p,{children:[`Use the `,(0,r.jsx)(t.strong,{children:`Cart`}),` component to:`]}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsx)(t.li,{children:`Display products and options added to the user’s order.`}),`
`,(0,r.jsx)(t.li,{children:`Remove a product or an individual option from the order.`}),`
`,(0,r.jsx)(t.li,{children:`Provide a clear breakdown of pricing, including promotions and included items.`}),`
`,(0,r.jsx)(t.li,{children:`Show the total amount and allow users to continue their order.`}),`
`]}),`
`,(0,r.jsx)(c,{label:`Dos & Don'ts`,level:3}),`
`,(0,r.jsx)(a,{donts:[`- Don’t use the Cart to display unrelated content or marketing messages`,`- Don’t include vague product or option labels since they should clearly identify the item`,`- Don’t overload the Cart with too many optional lines, which can make it hard to scan`,`- Don’t mix different types of content (e.g., recommendations) with the Cart items ?`],dos:[`- Use Cart sections (product header, options) to group related information clearly`,`- Use expand/collapse only for optional details that help users review their order without cluttering the interface`,`- Use promotions and included option labels to communicate value clearly`,`- Display footer lines for additional contextual information such as VAT, shipping, or billing details`,`- Use remove icon buttons consistently for products and options to allow quick corrections`]}),`
`,(0,r.jsx)(c,{label:`Best Practices in Context`,level:3}),`
`,(0,r.jsx)(i,{src:`components/cart/anatomy.png`}),`
`,(0,r.jsxs)(t.ol,{children:[`
`,(0,r.jsx)(t.li,{children:(0,r.jsx)(t.strong,{children:`Cart`})}),`
`,(0,r.jsx)(t.li,{children:(0,r.jsx)(t.strong,{children:`Product header`})}),`
`,(0,r.jsx)(t.li,{children:(0,r.jsx)(t.strong,{children:`Product option list`})}),`
`,(0,r.jsx)(t.li,{children:(0,r.jsx)(t.strong,{children:`Footer`})}),`
`]}),`
`,(0,r.jsx)(c,{label:`Placement`,level:2}),`
`,(0,r.jsxs)(t.p,{children:[`The `,(0,r.jsx)(t.strong,{children:`Cart`}),` component is typically placed:`]}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsx)(t.li,{children:`On the right side of the page on desktop layouts.`}),`
`,(0,r.jsx)(t.li,{children:`As a bottom sheet on mobile devices.`}),`
`]}),`
`,(0,r.jsx)(t.p,{children:`It should remain visible and easily accessible throughout the ordering flow.`}),`
`,(0,r.jsx)(c,{label:`Behavior`,level:2}),`
`,(0,r.jsx)(c,{label:`Desktop`,level:3}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsxs)(t.li,{children:[`The `,(0,r.jsx)(t.strong,{children:`Cart`}),` is open and fully expanded by default.`]}),`
`,(0,r.jsx)(t.li,{children:`Product can be expanded or collapsed to show or hide its options.`}),`
`,(0,r.jsxs)(t.li,{children:[`The `,(0,r.jsx)(t.strong,{children:`Cart`}),` content is vertically scrollable when it exceeds the available space.`]}),`
`,(0,r.jsx)(t.li,{children:`Clicking the product remove icon button removes the entire product and all associated options.`}),`
`,(0,r.jsxs)(t.li,{children:[`Clicking an option remove icon button removes only that option and updates the product price and `,(0,r.jsx)(t.strong,{children:`Cart`}),` total.`]}),`
`]}),`
`,(0,r.jsx)(c,{label:`Mobile`,level:3}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsxs)(t.li,{children:[`The `,(0,r.jsx)(t.strong,{children:`Cart`}),` is closed by default.`]}),`
`,(0,r.jsxs)(t.li,{children:[`Only the handle and the `,(0,r.jsx)(t.strong,{children:`Cart`}),` total area are visible while closed.`]}),`
`,(0,r.jsxs)(t.li,{children:[`Users can swipe the handle to open the `,(0,r.jsx)(t.strong,{children:`Cart`}),` and review order details.`]}),`
`,(0,r.jsxs)(t.li,{children:[`While open, the `,(0,r.jsx)(t.strong,{children:`Cart`}),` content is scrollable.`]}),`
`,(0,r.jsxs)(t.li,{children:[`Users can swipe the handle again to close the `,(0,r.jsx)(t.strong,{children:`Cart`}),`.`]}),`
`,(0,r.jsxs)(t.li,{children:[`Remove icon buttons remain accessible within the `,(0,r.jsx)(t.strong,{children:`Cart`}),` when open and expanded.`]}),`
`]}),`
`,(0,r.jsx)(c,{label:`Empty Cart`,level:3}),`
`,(0,r.jsx)(t.p,{children:`When no product is added:`}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsx)(t.li,{children:`Display a message indicating that the cart is empty.`}),`
`,(0,r.jsxs)(t.li,{children:[`Display a disabled "Continue my order" `,(0,r.jsx)(t.strong,{children:`Button`}),`.`]}),`
`,(0,r.jsxs)(t.li,{children:[`When the last product is removed, the `,(0,r.jsx)(t.strong,{children:`Cart`}),` immediately transitions to the empty state.`]}),`
`]}),`
`,(0,r.jsx)(c,{label:`Navigation`,level:2}),`
`,(0,r.jsx)(c,{label:`Focus Management`,level:3}),`
`,(0,r.jsxs)(t.p,{children:[`All interactive elements inside the `,(0,r.jsx)(t.strong,{children:`Cart`}),` (expand/collapse controls, buttons) can receive keyboard focus.`]}),`
`,(0,r.jsxs)(t.p,{children:[`The `,(0,r.jsx)(t.strong,{children:`Cart`}),` container itself does not receive focus.`]}),`
`,(0,r.jsx)(t.p,{children:`When a product header expand/collapse control is activated, the focus remains on the control and the associated product options are revealed or hidden without moving focus.`}),`
`,(0,r.jsxs)(t.p,{children:[`When the `,(0,r.jsx)(t.strong,{children:`Cart`}),` is closed on mobile, only the `,(0,r.jsx)(t.strong,{children:`Cart`}),` handle and visible interactive elements can receive focus.`]}),`
`,(0,r.jsxs)(t.p,{children:[`When the `,(0,r.jsx)(t.strong,{children:`Cart`}),` is open on mobile, all interactive elements inside the `,(0,r.jsx)(t.strong,{children:`Cart`}),` become focusable.`]}),`
`,(0,r.jsxs)(t.p,{children:[`The disabled `,(0,r.jsx)(t.strong,{children:`Button`}),` cannot receive focus.`]}),`
`,(0,r.jsx)(c,{label:`General Keyboard Shortcuts`,level:3}),`
`,(0,r.jsxs)(t.p,{children:[`Pressing `,(0,r.jsx)(d,{children:`Tab`}),` or `,(0,r.jsx)(d,{children:`Shift`}),` + `,(0,r.jsx)(d,{children:`Tab`}),` moves focus sequentially through all interactive elements inside the `,(0,r.jsx)(t.strong,{children:`Cart`}),`.`]}),`
`,(0,r.jsxs)(t.p,{children:[`Pressing `,(0,r.jsx)(d,{children:`Enter`}),` or `,(0,r.jsx)(d,{children:`Space`}),` activates the currently focused element. This can:`]}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsx)(t.li,{children:`Expand or collapse a product to show or hide its options.`}),`
`,(0,r.jsx)(t.li,{children:`Remove the associated product or option.`}),`
`,(0,r.jsxs)(t.li,{children:[`Trigger the `,(0,r.jsx)(t.strong,{children:`Cart`}),` action button.`]}),`
`]}),`
`,(0,r.jsxs)(t.p,{children:[`Pressing `,(0,r.jsx)(d,{children:`Escape`}),` collapses the `,(0,r.jsx)(t.strong,{children:`Cart`}),` when it is expanded on mobile and returns focus to the `,(0,r.jsx)(t.strong,{children:`Cart`}),` handle.`]}),`
`,(0,r.jsx)(c,{label:`Accessibility`,level:2}),`
`,(0,r.jsx)(c,{label:`Announce product and option updates`,level:3}),`
`,(0,r.jsx)(t.p,{children:`When a product or option is added, removed, or when the total price changes, screen readers are not automatically informed.`}),`
`,(0,r.jsxs)(t.p,{children:[`To ensure users receive feedback, use a live region in your DOM and update its text content when the `,(0,r.jsx)(t.code,{children:`Cart`}),` changes.`]}),`
`,(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:`language-tsx`,children:`const liveRef = useRef<HTMLDivElement>(null);

function updateLiveRegion() {
  if (liveRef.current) {
    liveRef.current.textContent = 'Product "My product" has been added to your cart. Total is now xx.xx€.';
  }
}

return (
  <div
    ref={ liveRef }
    role="status" />
`})}),`
`,(0,r.jsxs)(t.p,{children:[(0,r.jsx)(l,{name:`circle-check`,style:{color:`var(--ods-semantic-color-content-success)`}}),` Screen readers will inform users of product additions, removals, and total updates through the live region.`]})]})}function a(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(i,{...e})}):i(e)}function o(e,t){throw Error(`Expected `+(t?`component`:`object`)+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}export{a as default};