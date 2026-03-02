import{j as e}from"./jsx-runtime-Cfl8ynUo.js";import{useMDXComponents as l}from"./index-ZwkxtaJJ.js";import{b as a,l as c}from"./ods-react69-Dlwzrp8h.js";import{k as r}from"./Kbd-BhRHY5DX-DYqBejDt.js";import{M as d,S as h}from"./index-CP0dmCql.js";import{C as s,O as p}from"./cart.stories-Comh0_Yz.js";import{A as m}from"./Anatomy-DkXJCwiR.js";import{B as x}from"./Banner-z5gHfud7.js";import{C as u}from"./Canvas-Dr2OMYCx.js";import{I as j,B as g}from"./IdentityCard-fNWkDtHu.js";import{H as t}from"./Heading-w1rgbOs9.js";import"./StorybookLink-CaoUFCbV.js";import"./index-jIWwRBLr.js";import"./index-CWkFp9WS-BSIT86NH.js";import"./iframe-DD-xGYJd.js";import"./index-DWDEzXrj.js";import"./index-N93khynk.js";import"./index-CXQShRbs.js";import"./index-DrFu-skq.js";import"./index-CqY9YpN0.js";import"./useI18n-C0NLVYPv.js";import"./Button-B-GJ-1TA.js";import"./Spinner-DJB5ZadI.js";import"./colors-DSObuHxd.js";import"./Card-Dg62f6NA.js";import"./context-C_-r2uoG.js";import"./AsChild-BQZQcPff.js";import"./icon-name-DsSs6qF8.js";import"./AccordionTrigger-CN-xz2wZ.js";import"./use-locale-context-zjr1Qdvk.js";import"./render-strategy-B8UQPyVW.js";import"./collapsible-content-CGdjaIK6.js";import"./Text-CW33_IfE.js";import"./divider-color-ZGInUGqC.js";import"./format-BeWtzLYr.js";import"./controls-BtiQQn1l.js";import"./source-CPEZJ6oD.js";import"./TooltipTrigger-DHfLNvMW-UFJEJJFl.js";import"./ods-react123-5kwUyuQy.js";import"./index-BuvDIi_Z.js";import"./lz-string-U2heoObX.js";import"./meta-BVDGtJjn.js";import"./ResetTheme-DQ5v3p_P.js";import"./tokens-BrWUS-3i.js";import"./Table-DfFDy0oa-pPcXAmDO.js";import"./ExternalLink-3_acHraq.js";import"./Link-BD6LLyZr-BDwROQOD.js";import"./Table-skMWcQVm.js";import"./Divider-BA_mBCsl-c8UMRNiU.js";function i(o){const n={code:"code",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...l(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(d,{of:s,name:"Documentation",tags:["new"]}),`
`,e.jsx(x,{of:s}),`
`,e.jsx(u,{of:p,sourceState:"none"}),`
`,e.jsx(t,{label:"Overview",level:2}),`
`,e.jsx(j,{aliases:[],figmaLink:"https://www.figma.com/design/9jDDTcR4a9jPRFcdjawAlf/branch/9r0DZb1pFrkQnX1uAq9R6y/ODS---UI-Kit?node-id=15891-3153&t=vRk1EoUTDZKyd8fc-0",githubUrl:"https://github.com/ovh/design-system/tree/master/packages/ods-react/src/components/cart",name:"Cart",startingVersion:19,children:e.jsxs(n.p,{children:["The ",e.jsx(n.strong,{children:"Cart"}),` component provides a summary of the user’s current order.
It displays the selected products, their associated options, pricing details, and the overall total before checkout.`]})}),`
`,e.jsx(t,{label:"Usage",level:2}),`
`,e.jsxs(n.p,{children:["Use the ",e.jsx(n.strong,{children:"Cart"})," component to:"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Display products and options added to the user’s order."}),`
`,e.jsx(n.li,{children:"Remove a product or an individual option from the order."}),`
`,e.jsx(n.li,{children:"Provide a clear breakdown of pricing, including promotions and included items."}),`
`,e.jsx(n.li,{children:"Show the total amount and allow users to continue their order."}),`
`]}),`
`,e.jsx(t,{label:"Dos & Don'ts",level:3}),`
`,e.jsx(g,{donts:["- Don’t use the Cart to display unrelated content or marketing messages","- Don’t include vague product or option labels since they should clearly identify the item","- Don’t overload the Cart with too many optional lines, which can make it hard to scan","- Don’t mix different types of content (e.g., recommendations) with the Cart items ?"],dos:["- Use Cart sections (product header, options) to group related information clearly","- Use expand/collapse only for optional details that help users review their order without cluttering the interface","- Use promotions and included option labels to communicate value clearly","- Display footer lines for additional contextual information such as VAT, shipping, or billing details","- Use remove icon buttons consistently for products and options to allow quick corrections"]}),`
`,e.jsx(t,{label:"Best Practices in Context",level:3}),`
`,e.jsx(m,{src:"components/cart/anatomy.png"}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.strong,{children:"Cart"})}),`
`,e.jsx(n.li,{children:e.jsx(n.strong,{children:"Product header"})}),`
`,e.jsx(n.li,{children:e.jsx(n.strong,{children:"Product option list"})}),`
`,e.jsx(n.li,{children:e.jsx(n.strong,{children:"Footer"})}),`
`]}),`
`,e.jsx(t,{label:"Placement",level:2}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.strong,{children:"Cart"})," component is typically placed:"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"On the right side of the page on desktop layouts."}),`
`,e.jsx(n.li,{children:"As a bottom sheet on mobile devices."}),`
`]}),`
`,e.jsx(n.p,{children:"It should remain visible and easily accessible throughout the ordering flow."}),`
`,e.jsx(t,{label:"Behavior",level:2}),`
`,e.jsx(t,{label:"Desktop",level:3}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["The ",e.jsx(n.strong,{children:"Cart"})," is open and fully expanded by default."]}),`
`,e.jsx(n.li,{children:"Product can be expanded or collapsed to show or hide its options."}),`
`,e.jsxs(n.li,{children:["The ",e.jsx(n.strong,{children:"Cart"})," content is vertically scrollable when it exceeds the available space."]}),`
`,e.jsx(n.li,{children:"Clicking the product remove icon button removes the entire product and all associated options."}),`
`,e.jsxs(n.li,{children:["Clicking an option remove icon button removes only that option and updates the product price and ",e.jsx(n.strong,{children:"Cart"})," total."]}),`
`]}),`
`,e.jsx(t,{label:"Mobile",level:3}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["The ",e.jsx(n.strong,{children:"Cart"})," is closed by default."]}),`
`,e.jsxs(n.li,{children:["Only the handle and the ",e.jsx(n.strong,{children:"Cart"})," total area are visible while closed."]}),`
`,e.jsxs(n.li,{children:["Users can swipe the handle to open the ",e.jsx(n.strong,{children:"Cart"})," and review order details."]}),`
`,e.jsxs(n.li,{children:["While open, the ",e.jsx(n.strong,{children:"Cart"})," content is scrollable."]}),`
`,e.jsxs(n.li,{children:["Users can swipe the handle again to close the ",e.jsx(n.strong,{children:"Cart"}),"."]}),`
`,e.jsxs(n.li,{children:["Remove icon buttons remain accessible within the ",e.jsx(n.strong,{children:"Cart"})," when open and expanded."]}),`
`]}),`
`,e.jsx(t,{label:"Empty Cart",level:3}),`
`,e.jsx(n.p,{children:"When no product is added:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Display a message indicating that the cart is empty."}),`
`,e.jsxs(n.li,{children:['Display a disabled "Continue my order" ',e.jsx(n.strong,{children:"Button"}),"."]}),`
`,e.jsxs(n.li,{children:["When the last product is removed, the ",e.jsx(n.strong,{children:"Cart"})," immediately transitions to the empty state."]}),`
`]}),`
`,e.jsx(t,{label:"Navigation",level:2}),`
`,e.jsx(t,{label:"Focus Management",level:3}),`
`,e.jsxs(n.p,{children:["All interactive elements inside the ",e.jsx(n.strong,{children:"Cart"})," (expand/collapse controls, buttons) can receive keyboard focus."]}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.strong,{children:"Cart"})," container itself does not receive focus."]}),`
`,e.jsx(n.p,{children:"When a product header expand/collapse control is activated, the focus remains on the control and the associated product options are revealed or hidden without moving focus."}),`
`,e.jsxs(n.p,{children:["When the ",e.jsx(n.strong,{children:"Cart"})," is closed on mobile, only the ",e.jsx(n.strong,{children:"Cart"})," handle and visible interactive elements can receive focus."]}),`
`,e.jsxs(n.p,{children:["When the ",e.jsx(n.strong,{children:"Cart"})," is open on mobile, all interactive elements inside the ",e.jsx(n.strong,{children:"Cart"})," become focusable."]}),`
`,e.jsxs(n.p,{children:["The disabled ",e.jsx(n.strong,{children:"Button"})," cannot receive focus."]}),`
`,e.jsx(t,{label:"General Keyboard Shortcuts",level:3}),`
`,e.jsxs(n.p,{children:["Pressing ",e.jsx(r,{children:"Tab"})," or ",e.jsx(r,{children:"Shift"})," + ",e.jsx(r,{children:"Tab"})," moves focus sequentially through all interactive elements inside the ",e.jsx(n.strong,{children:"Cart"}),"."]}),`
`,e.jsxs(n.p,{children:["Pressing ",e.jsx(r,{children:"Enter"})," or ",e.jsx(r,{children:"Space"})," activates the currently focused element. This can:"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Expand or collapse a product to show or hide its options."}),`
`,e.jsx(n.li,{children:"Remove the associated product or option."}),`
`,e.jsxs(n.li,{children:["Trigger the ",e.jsx(n.strong,{children:"Cart"})," action button."]}),`
`]}),`
`,e.jsxs(n.p,{children:["Pressing ",e.jsx(r,{children:"Escape"})," collapses the ",e.jsx(n.strong,{children:"Cart"})," when it is expanded on mobile and returns focus to the ",e.jsx(n.strong,{children:"Cart"})," handle."]}),`
`,e.jsx(t,{label:"Accessibility",level:2}),`
`,e.jsx(t,{label:"Announce product and option updates",level:3}),`
`,e.jsx(n.p,{children:"When a product or option is added, removed, or when the total price changes, screen readers are not automatically informed."}),`
`,e.jsxs(n.p,{children:["To ensure users receive feedback, use a live region in your DOM and update its text content when the ",e.jsx(n.code,{children:"Cart"})," changes."]}),`
`,e.jsx(h,{code:`
const liveRef = useRef<HTMLDivElement>(null);

function updateLiveRegion() {
  if (liveRef.current) {
    liveRef.current.textContent = 'Product "My product" has been added to your cart. Total is now xx.xx€.';
  }
}

return (
  <div
    ref={ liveRef }
    role="status" />
`,dark:"true",language:"tsx"}),`
`,e.jsxs(n.p,{children:[e.jsx(a,{name:c.circleCheck,style:{color:"var(--ods-color-success-500)"}})," Screen readers will inform users of product additions, removals, and total updates through the live region."]})]})}function me(o={}){const{wrapper:n}={...l(),...o.components};return n?e.jsx(n,{...o,children:e.jsx(i,{...o})}):i(o)}export{me as default};
