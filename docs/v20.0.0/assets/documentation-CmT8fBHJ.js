import{i as e}from"./rolldown-runtime-Dd_uD5pT.js";import{t}from"./jsx-runtime-DREnUpxT.js";import{T as n}from"./index-CzEwg6AJ.js";var r=e(t());function i(e){let t={code:`code`,em:`em`,li:`li`,ol:`ol`,p:`p`,strong:`strong`,ul:`ul`,...n(),...e.components},{Anatomy:i,BestPractices:a,Canvas:s,DocLink:c,ExternalLink:l,Heading:u,Icon:d,IdentityCard:f,Kbd:p,Message:m,MessageBody:h,MessageIcon:g}=t;return i||o(`Anatomy`,!0),a||o(`BestPractices`,!0),s||o(`Canvas`,!0),c||o(`DocLink`,!0),l||o(`ExternalLink`,!0),u||o(`Heading`,!0),d||o(`Icon`,!0),f||o(`IdentityCard`,!0),p||o(`Kbd`,!0),m||o(`Message`,!0),h||o(`MessageBody`,!0),g||o(`MessageIcon`,!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.p,{children:(0,r.jsxs)(t.em,{children:[`A `,(0,r.jsx)(t.strong,{children:`Pagination`}),` component splits a long list into numbered pages and lets users move between them, whether a page is a portion of the current view or a destination with a URL of its own.`]})}),`
`,(0,r.jsx)(s,{story:`Overview`,source:`none`}),`
`,(0,r.jsx)(u,{label:`Overview`,level:2}),`
`,(0,r.jsxs)(f,{aliases:[`Page navigation`],figmaLink:`https://www.figma.com/design/9jDDTcR4a9jPRFcdjawAlf/ODS---UI-Kit?node-id=47-7743`,githubUrl:`https://github.com/ovh/design-system/tree/master/packages/ods-react/src/components/pagination`,name:`Pagination`,children:[(0,r.jsxs)(t.p,{children:[`The `,(0,r.jsx)(t.strong,{children:`Pagination`}),` component divides a list into discrete pages and provides the controls to move between them, keeping a large set of items browsable without overwhelming the interface.`]}),(0,r.jsx)(t.p,{children:`A page can be a portion of the current view, swapped in place without leaving the page, or a page of its own.`}),(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:`Pagination`}),` can include various controls like next/previous controls, page numbers, an items per page selector and a go-to-page input.`]})]}),`
`,(0,r.jsx)(u,{label:`Usage`,level:2}),`
`,(0,r.jsxs)(t.p,{children:[`A `,(0,r.jsx)(t.strong,{children:`Pagination`}),` component is used in two situations, and each one calls for a different kind of control :`]}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsxs)(t.li,{children:[`To navigate among a `,(0,r.jsx)(c,{to:`/components/table`,children:`Table`}),` component, or any content swapped inside the page the user is already on.`]}),`
`,(0,r.jsx)(t.li,{children:`To browse a set of items spread over pages of their own, each with a URL (products list, public catalogue, documentation index, ...), see "Pages as links" below.`}),`
`]}),`
`,(0,r.jsx)(u,{label:`Dos & Don'ts`,level:3}),`
`,(0,r.jsx)(a,{donts:[`- Don't use Pagination when the total content fits into a single page`,`- Avoid Pagination if the number of pages is unpredictable or constantly changing. In those cases, consider infinite scrolling or "Load more" patterns instead`,`- Don't make Pagination the only method of navigation if users might need to filter or search within the dataset`,`- Don't render a page that navigates as a Button, nor a page that only swaps content as a link: the role is what assistive technologies announce`],dos:[`- Use Pagination when users need to move through a long list in a structured and orderly way`,`- Ensure Pagination is used when the total number of pages is known or predictable`,`- Display a reasonable number of items per page (typically around 20 to 30) to balance readability and navigation`,`- Use Next/Previous controls and page numbers to help users track their position in the list`,`- Turn the pages into links when each page has its own URL, so that they can be crawled, opened in a new tab and restored on reload`]}),`
`,(0,r.jsx)(u,{label:`Best Practices in Context`,level:3}),`
`,(0,r.jsx)(i,{src:`components/pagination/anatomy.png`}),`
`,(0,r.jsxs)(t.ol,{children:[`
`,(0,r.jsx)(t.li,{children:(0,r.jsx)(t.strong,{children:`Pagination`})}),`
`,(0,r.jsx)(t.li,{children:(0,r.jsx)(t.strong,{children:`Total items per page select`})}),`
`,(0,r.jsx)(t.li,{children:(0,r.jsx)(t.strong,{children:`Total amount of items`})}),`
`,(0,r.jsx)(t.li,{children:(0,r.jsx)(t.strong,{children:`Previous/Next buttons`})}),`
`,(0,r.jsx)(t.li,{children:(0,r.jsx)(t.strong,{children:`Ellipsis`})}),`
`,(0,r.jsx)(t.li,{children:(0,r.jsx)(t.strong,{children:`Current page button`})}),`
`,(0,r.jsx)(t.li,{children:(0,r.jsx)(t.strong,{children:`Unselected page button`})}),`
`]}),`
`,(0,r.jsxs)(t.p,{children:[`The anatomy above describes the default `,(0,r.jsx)(t.strong,{children:`Pagination`}),`, whose pages are `,(0,r.jsx)(c,{to:`/components/button`,children:`Buttons`}),`. When the pages are links, the same anatomy is rendered with the `,(0,r.jsx)(c,{to:`/components/link`,children:`Link`}),` style instead, as described in "Pages as links" below.`]}),`
`,(0,r.jsx)(u,{label:`Placement`,level:2}),`
`,(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:`Pagination`}),` is presented to the user near the container it uses for pagination; it can be located just above or below it.`]}),`
`,(0,r.jsxs)(t.p,{children:[`Usually, the `,(0,r.jsx)(t.strong,{children:`Pagination`}),` is end-aligned horizontally, as its usage is not principal to the container.`]}),`
`,(0,r.jsx)(u,{label:`Behavior`,level:2}),`
`,(0,r.jsx)(u,{label:`Amount of items per page`,level:3}),`
`,(0,r.jsxs)(t.p,{children:[`The number of items displayed in `,(0,r.jsx)(t.strong,{children:`Pagination`}),` is depending on its referential.`]}),`
`,(0,r.jsx)(t.p,{children:`However, there are few rules to be applied to display it correctly.`}),`
`,(0,r.jsx)(t.p,{children:`Number of items in the component can be chunked in packs of :`}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsx)(t.li,{children:`10`}),`
`,(0,r.jsx)(t.li,{children:`25`}),`
`,(0,r.jsx)(t.li,{children:`50`}),`
`,(0,r.jsx)(t.li,{children:`100`}),`
`,(0,r.jsx)(t.li,{children:`300`}),`
`]}),`
`,(0,r.jsx)(t.p,{children:`This value is conditioning the number of items that will be displayed per page.`}),`
`,(0,r.jsx)(t.p,{children:`By default, 10 items per page are displayed, but it can be set to match your need.`}),`
`,(0,r.jsx)(u,{label:`Amount of pages`,level:3}),`
`,(0,r.jsx)(t.p,{children:`A maximum of 6 numbered pages can be visible at once, with a minimum of 1.`}),`
`,(0,r.jsx)(t.p,{children:`The previous and next controls are always visible, no matter what the amount of pages.`}),`
`,(0,r.jsx)(t.p,{children:`Depending on the current page number and the amount of pages, here are the different displays of the whole component:`}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsx)(t.li,{children:`If amount of pages is less than 7, all numbered pages can be visible at once`}),`
`,(0,r.jsx)(t.li,{children:`If amount of pages is 7 or more :`}),`
`,(0,r.jsx)(t.li,{children:`If current page is the 4th one or less, the first 5 numbered pages are present, then an ellipsis and the last numbered page corresponding of the amount of pages`}),`
`,(0,r.jsx)(t.li,{children:`If current page is the 4th to last or more, the first page is displayed followed by an ellipsis and the last 5 numbered pages`}),`
`,(0,r.jsx)(t.li,{children:`If current page is between the previous bounds, the following are displayed, in order :`}),`
`,(0,r.jsx)(t.li,{children:`the first page,`}),`
`,(0,r.jsx)(t.li,{children:`an ellipsis,`}),`
`,(0,r.jsx)(t.li,{children:`3 numbered pages, corresponding to : previous-to-current / current / next-to-current page,`}),`
`,(0,r.jsx)(t.li,{children:`an ellipsis,`}),`
`,(0,r.jsx)(t.li,{children:`the last numbered page`}),`
`]}),`
`,(0,r.jsxs)(t.p,{children:[`Those counts hold whatever the pages are made of: they are rendered as `,(0,r.jsx)(c,{to:`/components/button`,children:`Buttons`}),` or as `,(0,r.jsx)(c,{to:`/components/link`,children:`Links`}),` depending on what activating one does, as described in "Pages as links" below.`]}),`
`,(0,r.jsx)(u,{label:`Go to page`,level:3}),`
`,(0,r.jsx)(t.p,{children:`Allows users to directly select a page from an number input.`}),`
`,(0,r.jsx)(u,{label:`Pages as links`,level:3}),`
`,(0,r.jsxs)(t.p,{children:[`Where the `,(0,r.jsx)(t.strong,{children:`Pagination`}),` is used to move between actual pages, each with a URL of its own, the pages must be links rather than Buttons.`]}),`
`,(0,r.jsxs)(t.p,{children:[`By default a page is a `,(0,r.jsx)(c,{to:`/components/button`,children:`Button`}),`: activating it swaps the content in place, and nothing outside the component knows about it. That fits for example a paginated `,(0,r.jsx)(c,{to:`/components/table`,children:`Table`}),`.`]}),`
`,(0,r.jsxs)(t.p,{children:[`As soon as a page is a destination, provide `,(0,r.jsx)(t.code,{children:`getPageUrl`}),` and the pages become real links.`]}),`
`,(0,r.jsxs)(t.p,{children:[`Because those pages navigate, they are rendered with the `,(0,r.jsx)(c,{to:`/components/link`,children:`Link`}),` style rather than the `,(0,r.jsx)(c,{to:`/components/button`,children:`Button`}),` style: a button looks like a button, a link looks like a link.`]}),`
`,(0,r.jsx)(s,{story:`LinksVsButtons`,source:`none`}),`
`,(0,r.jsx)(t.p,{children:`What changes in link mode:`}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsxs)(t.li,{children:[`Every page the user can go to is a `,(0,r.jsx)(c,{to:`/components/link`,children:`Link`}),` carrying an `,(0,r.jsx)(t.code,{children:`href`})]}),`
`,(0,r.jsxs)(t.li,{children:[`The active page leads nowhere: it carries no `,(0,r.jsx)(t.code,{children:`href`}),` and stays out of the tab order. It reads as emphasised text and is exposed as a disabled link carrying `,(0,r.jsx)(l,{href:`https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-current`,children:`aria-current="page"`})]}),`
`,(0,r.jsxs)(t.li,{children:[`With `,(0,r.jsx)(t.code,{children:`disabled`}),`, every link keeps its `,(0,r.jsx)(t.code,{children:`href`}),`, as a disabled `,(0,r.jsx)(c,{to:`/components/link`,children:`Link`}),` does: activating it does nothing, but crawlers still see the destination and a middle click still opens it`]}),`
`]}),`
`,(0,r.jsx)(u,{label:`Wiring link mode`,level:4}),`
`,(0,r.jsxs)(t.p,{children:[`In link mode the URL holds the state of the `,(0,r.jsx)(t.strong,{children:`Pagination`}),`, the active page and the number of items per page alike. Following a link changes the URL, and the component renders whatever the URL says: read both back from it and pass them as `,(0,r.jsx)(t.code,{children:`page`}),` and `,(0,r.jsx)(t.code,{children:`pageSize`}),`.`]}),`
`,(0,r.jsx)(s,{story:`Links`}),`
`,(0,r.jsx)(t.p,{children:`Three consequences follow from the URL being in charge:`}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsxs)(t.strong,{children:[(0,r.jsx)(t.code,{children:`onPageChange`}),` does not fire when a link is followed.`]}),` The browser already did the work, and the new page is in the URL. It still fires for the controls that are not links, which have no href to follow: navigate to the matching URL from there. The same goes for `,(0,r.jsx)(t.code,{children:`onPageSizeChange`}),`.`]}),`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsxs)(t.strong,{children:[`Never derive `,(0,r.jsx)(t.code,{children:`page`}),` from a callback during a click.`]}),` There is nothing to derive it from any more, which is the point: were the component to move mid-click, it would rewrite the previous / next href before the browser followed it, and the user would land one page further than the link they clicked.`]}),`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:`Validate what you read from the URL.`}),` A URL can hold anything, and the component renders what it is given. On a listing of 20 pages, `,(0,r.jsx)(t.code,{children:`?page=99`}),` leaves the bar without an active page and its "Previous" link pointing to page 98, then 97, down to 21: a trail of pages that do not exist, which crawlers follow. Fall back on a default size when the size is not a positive integer, and bring the page back between 1 and the last page before passing them.`]}),`
`]}),`
`,(0,r.jsx)(u,{label:`The controls that are not links`,level:4}),`
`,(0,r.jsxs)(t.p,{children:[`Two controls carry no destination and cannot navigate on their own: the "Go to page" form and the items per page `,(0,r.jsx)(c,{to:`/components/select`,children:`Select`}),`. In link mode they report what the user asked for and wait, exactly as the pages do. The application turns that into a URL and navigates.`]}),`
`,(0,r.jsx)(s,{story:`LinksWithAllControls`}),`
`,(0,r.jsxs)(t.p,{children:[`The `,(0,r.jsx)(t.strong,{children:`Pagination`}),` does not move meanwhile, and that is deliberate. Were the items per page `,(0,r.jsx)(t.strong,{children:`Select`}),` to apply the new size on its own, it would rebuild every `,(0,r.jsx)(t.code,{children:`href`}),` around a size the URL does not have yet, and the active page would fall outside a range that just shrank: the bar would show pages that no longer exist while the list beside it had not changed.`]}),`
`,(0,r.jsx)(t.p,{children:`Changing the size almost always means going back to the first page: under a new size the same page number shows other items, and may lie past the last page. That call belongs to the application, which is the one building the URL.`}),`
`,(0,r.jsx)(u,{label:`Handing navigation to a router`,level:4}),`
`,(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:`getPageUrl`}),` is enough on its own: the pages are plain anchors, and following one loads the destination the way any link does. On a server rendered site that is all you need.`]}),`
`,(0,r.jsxs)(t.p,{children:[`A single page application does want more, as a full document load would throw its state away. Pass the link component of your routing library as `,(0,r.jsx)(t.code,{children:`linkAs`}),`, and the pages navigate inside the app instead. It receives the built URL as `,(0,r.jsx)(t.code,{children:`href`}),`, so `,(0,r.jsx)(t.code,{children:`next/link`}),` takes it as is, while React Router's `,(0,r.jsx)(t.code,{children:`Link`}),` wants it as `,(0,r.jsx)(t.code,{children:`to`}),`:`]}),`
`,(0,r.jsx)(s,{story:`WithReactRouter`}),`
`,(0,r.jsx)(u,{label:`Navigation`,level:2}),`
`,(0,r.jsx)(u,{label:`Focus Management`,level:3}),`
`,(0,r.jsxs)(t.p,{children:[`When tabbing through the page, focus moves sequentially through all interactive elements in the `,(0,r.jsx)(t.strong,{children:`Pagination`}),` component.`]}),`
`,(0,r.jsx)(t.p,{children:`In link mode the current page is exposed as a disabled link, out of the tab order. In Button mode it remains a focusable Button that does nothing when activated.`}),`
`,(0,r.jsx)(t.p,{children:`Navigation controls that lead nowhere (e.g., “Previous” on the first page) are skipped in the tab order.`}),`
`,(0,r.jsx)(u,{label:`General Keyboard Shortcuts`,level:3}),`
`,(0,r.jsxs)(t.p,{children:[`Pressing `,(0,r.jsx)(p,{children:`Tab`}),` moves focus forward through all interactive elements in the `,(0,r.jsx)(t.strong,{children:`Pagination`}),` (Select, page controls).`]}),`
`,(0,r.jsxs)(t.p,{children:[`Pressing `,(0,r.jsx)(p,{children:`Shift`}),` + `,(0,r.jsx)(p,{children:`Tab`}),` moves focus backward.`]}),`
`,(0,r.jsxs)(t.p,{children:[`When the pages are Buttons, pressing `,(0,r.jsx)(p,{children:`Enter`}),` or `,(0,r.jsx)(p,{children:`Space`}),` on a page, "Previous", or "Next" triggers the corresponding page change.`]}),`
`,(0,r.jsxs)(t.p,{children:[`When the pages are links, `,(0,r.jsx)(p,{children:`Enter`}),` follows the link, as on any anchor; `,(0,r.jsx)(p,{children:`Space`}),` scrolls the page instead. That difference comes from the elements themselves and is what users of either one expect.`]}),`
`,(0,r.jsx)(t.p,{children:`The "items per page" Select uses the same keyboard shortcuts as the standard Select component.`}),`
`,(0,r.jsx)(u,{label:`Accessibility`,level:2}),`
`,(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:`Pagination`}),` component should be properly identified, and correct labels must be implemented to ensure it is accessible to assistive technologies.`]}),`
`,(0,r.jsx)(u,{label:`Choosing between Buttons and links`,level:3}),`
`,(0,r.jsx)(t.p,{children:`The choice is not a matter of style: it tells assistive technologies what activating a page does, and it is announced as such.`}),`
`,(0,r.jsxs)(t.p,{children:[`Use the default `,(0,r.jsx)(t.strong,{children:`Buttons`}),` when the pages are internal to the page the user is already on: activating one swaps a portion of the content, the URL does not change, and the user stays where they are. A screen reader announces a button, and the user expects to remain on the page.`]}),`
`,(0,r.jsxs)(t.p,{children:[`Use `,(0,r.jsx)(t.strong,{children:`links`}),`, through `,(0,r.jsx)(t.code,{children:`getPageUrl`}),`, when a page is a destination of its own: activating one leaves the current document for another URL. A screen reader announces a link, and the user expects to be taken elsewhere. Rendering that as a Button would announce the wrong thing, and it would also deny the behaviours users expect from a link: opening in a new tab, copying the address, going back.`]}),`
`,(0,r.jsxs)(m,{status:`warning`,dismissible:!1,style:{width:`100%`},children:[(0,r.jsx)(g,{name:`triangle-exclamation`}),(0,r.jsx)(h,{children:(0,r.jsx)(t.p,{children:`A page that navigates must never be a Button, and a page that only swaps content must never be a link. Announcing the wrong role sends the user somewhere they did not expect, or keeps them from getting where they wanted.`})})]}),`
`,(0,r.jsx)(u,{label:`Identifying the Pagination with aria-label`,level:3}),`
`,(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:`Pagination`}),` is a form of navigation, but it serves a specific purpose distinct from primary navigation menus.
To ensure it is correctly recognized, an `,(0,r.jsx)(l,{href:`https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label`,children:`aria-label`}),` should be added to explicitly identify it.`]}),`
`,(0,r.jsx)(s,{story:`AccessibilityLabel`}),`
`,(0,r.jsxs)(t.p,{children:[(0,r.jsx)(d,{name:`circle-check`,style:{color:`var(--ods-semantic-color-content-success)`}}),` Screen readers will announce the pagination element correctly.`]})]})}function a(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(i,{...e})}):i(e)}function o(e,t){throw Error(`Expected `+(t?`component`:`object`)+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}export{a as default};