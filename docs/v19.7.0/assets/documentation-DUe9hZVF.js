import{j as e}from"./jsx-runtime-Cfl8ynUo.js";import{useMDXComponents as o}from"./index-ZwkxtaJJ.js";import{k as s}from"./Kbd-Cnje_EfN-CvQx-mOR.js";import{M as c}from"./index-BnNeS_H2.js";import{D as r,O as d}from"./data-table.stories-CQpjmWZb.js";import{A as h}from"./Anatomy-DkXJCwiR.js";import{B as p}from"./Banner-DYvgfZRi.js";import{B as x}from"./BestPractices-j46EvglC.js";import{C as g}from"./Canvas-zVPAbnas.js";import{E as t}from"./ExternalLink-D9Oykgkh.js";import{H as i}from"./Heading-lgNAZPkT.js";import{I as j}from"./IdentityCard-BTJG0hV7.js";import{T as m}from"./TableVsDataTable-Bl3b1paw.js";import"./index-jIWwRBLr.js";import"./index-CWkFp9WS-BSIT86NH.js";import"./iframe-DtAqipxR.js";import"./index-DWDEzXrj.js";import"./index-N93khynk.js";import"./index-CXQShRbs.js";import"./index-DrFu-skq.js";import"./Table-DkuzY8hZ.js";import"./index-CqY9YpN0.js";import"./context-C_-r2uoG.js";import"./index-DaUvfsZM.js";import"./index-B0M5RXeR.js";import"./Text-CAQM6i-X.js";import"./use-locale-context-CGqEQCyU.js";import"./index-XMtSmgu6.js";import"./use-field-context-Dkm7CMfi.js";import"./icon-name-D0KNfDOz.js";import"./use-event-c9j7vq_1.js";import"./index-DrSf431n.js";import"./Skeleton-DCKEB8Ic.js";import"./PaginationPageSelector-BM82wr0C.js";import"./index-onrz60cw.js";import"./index-DaWTyRz7.js";import"./portal-DmTPQ5yQ.js";import"./use-presence-D0Br6WHR.js";import"./index-uZK-7FQN.js";import"./Button-B-GJ-1TA.js";import"./Spinner-DJB5ZadI.js";import"./colors-DSObuHxd.js";import"./index-Ct9O8XVq.js";import"./overlay-CZHjGBMC.js";import"./Input-CsaVjqar.js";import"./useI18n-C0NLVYPv.js";import"./controls-BtiQQn1l.js";import"./source-CPEZJ6oD.js";import"./icon-name-kFDeGXCQ--4TVzzrX.js";import"./index-DA9hOdui.js";import"./context-Z_Xa7sWf-5kwUyuQy.js";import"./index-D6AFTHzO.js";import"./lz-string-U2heoObX.js";import"./meta-twt-Yy4M.js";import"./ResetTheme-CLF5P7Bf.js";import"./tokens-BrWUS-3i.js";import"./Link-fc4PsoC7-BoLkDjrj.js";import"./divider-color-DMMH0ySn-B7JauIP0.js";import"./colors-C1Wmnk_L-aAAP9SXj.js";import"./Table-Bof_Nsov-CS9ZUwCH.js";import"./Table-BXVk_N0H.js";function a(l){const n={code:"code",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...o(),...l.components};return e.jsxs(e.Fragment,{children:[e.jsx(c,{of:r,name:"Documentation",tags:["new"]}),`
`,e.jsx(p,{of:r}),`
`,e.jsx(g,{of:d,sourceState:"none"}),`
`,e.jsx(i,{label:"Overview",level:2}),`
`,e.jsxs(j,{aliases:[],figmaLink:"https://www.figma.com/design/9jDDTcR4a9jPRFcdjawAlf/branch/KKF2yPJ1fGICU7z9usG7Pl/ODS---UI-Kit?node-id=16269-23952&p=f&t=AvtT3fJhAIPZ0qbf-0",githubUrl:"https://github.com/ovh/design-system/tree/master/packages/ods-react/src/components/data-table",name:"DataTable",startingVersion:19,children:[e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"Data Table"})," component provides a structured and flexible way to display, explore, and interact with tabular data."]}),e.jsx(n.p,{children:"It is designed as a core component, intended to support a wide range of use cases while remaining composable, scalable, andproduct-agnostic."})]}),`
`,e.jsx(i,{label:"Usage",level:2}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"Data Table"})," is used to present collections of structured data and enable users to:"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Browse and scan information efficiently."}),`
`,e.jsx(n.li,{children:"Sort and organize data."}),`
`,e.jsx(n.li,{children:"Select one or multiple rows."}),`
`,e.jsx(n.li,{children:"Perform actions on individual row or in bulk."}),`
`,e.jsx(n.li,{children:"Interact with large datasets through pagination, search, and refresh."}),`
`]}),`
`,e.jsx(n.p,{children:"Typical use cases include:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Administration panels."}),`
`,e.jsx(n.li,{children:"Management interfaces."}),`
`,e.jsx(n.li,{children:"Reporting and operational dashboards."}),`
`,e.jsx(n.li,{children:"Configuration screens."}),`
`]}),`
`,e.jsx(m,{}),`
`,e.jsx(i,{label:"Dos & Don'ts",level:3}),`
`,e.jsx(x,{donts:["- Use a Data Table for simple, static content","- Overload the table with too many visible actions","- Trigger destructive actions without confirmation","- Assume all rows behave identically in bulk operations"],dos:["- Use a Data Table for managing collections of structured data","- Use composition to inject business-specific actions and logic","- Combine selection with bulk actions for efficiency"]}),`
`,e.jsx(i,{label:"Best Practices in Context",level:3}),`
`,e.jsx(h,{src:"components/data-table/anatomy.png"}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.strong,{children:"Data Table"})}),`
`,e.jsx(n.li,{children:e.jsx(n.strong,{children:"Header cell"})}),`
`,e.jsx(n.li,{children:e.jsx(n.strong,{children:"Body cell"})}),`
`,e.jsx(n.li,{children:e.jsx(n.strong,{children:"Column sorting"})}),`
`]}),`
`,e.jsx(i,{label:"Placement",level:2}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"Data Table"})," is typically placed as the main content of a page or section."]}),`
`,e.jsx(n.p,{children:"It should:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Expand horizontally to fit its container."}),`
`,e.jsx(n.li,{children:"Manage internal scrolling when necessary."}),`
`,e.jsx(n.li,{children:"Not overflow or break surrounding layouts."}),`
`]}),`
`,e.jsx(i,{label:"Behavior",level:2}),`
`,e.jsx(i,{label:"Data & State Ownership",level:3}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"Data Table"})," does not own data."]}),`
`,e.jsx(n.p,{children:"Data fetching, transformation, and persistence are handled by the integrator."}),`
`,e.jsx(n.p,{children:"The component is responsible for rendering the provided dataset and reflecting externally managed states such as loading, sorting, selection, and pagination."}),`
`,e.jsx(n.p,{children:"The integrator is responsible for:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Providing the data to display."}),`
`,e.jsx(n.li,{children:"Handling data fetching and refreshing."}),`
`,e.jsx(n.li,{children:"Managing all business rules and permissions."}),`
`,e.jsxs(n.li,{children:["Synchronizing external state with the ",e.jsx(n.code,{children:"Data Table"})," visual state."]}),`
`]}),`
`,e.jsx(i,{label:"Row Selection",level:3}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"Data Table"})," supports row selection via checkboxes or radio buttons."]}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"Data Table"})," is responsible for:"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Rendering selection controls."}),`
`,e.jsx(n.li,{children:"Handling user interaction for selecting and deselecting rows."}),`
`,e.jsx(n.li,{children:"Visually reflecting the current selection state."}),`
`,e.jsx(n.li,{children:"Exposing selection changes to the integrator."}),`
`]}),`
`,e.jsx(n.p,{children:"The integrator is responsible for:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Storing and managing the selection state."}),`
`,e.jsx(n.li,{children:"Defining whether selection is single or multiple."}),`
`,e.jsx(n.li,{children:"Deciding how selection behaves accross pagination or refresh."}),`
`]}),`
`,e.jsx(n.p,{children:"Disabled rows are not selectable."}),`
`,e.jsx(i,{label:"Column Sorting",level:3}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"Data Table"})," supports column-based sorting through interactions with column headers."]}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"Data Table"})," is responsible for:"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Rendering sortable and non-sortable column headers."}),`
`,e.jsx(n.li,{children:"Managing user interactions on sortable headers."}),`
`,e.jsx(n.li,{children:"Displaying visual indicators for sorting state (unsorted, ascending, descending)."}),`
`]}),`
`,e.jsx(n.p,{children:"The integrator is reponsible for:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Implemeting the sorting logic (if done server-side)."}),`
`,e.jsxs(n.li,{children:["Synchronizing the active sorting state with the ",e.jsx(n.code,{children:"Data Table"}),"."]}),`
`]}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"Data Table"}),` can support either single-column sorting, where only one column can be sorted at a time,
or multi-column sorting, where users can sort by multiple columns simultaneously.`]}),`
`,e.jsx(n.p,{children:"Non-sortable columns don't react to sorting interactions."}),`
`,e.jsx(i,{label:"Pinned columns",level:3}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"Data Table"})," supports pinning columns to keep them visible during horizontal scrolling."]}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"Data Table"})," is responsible for:"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Maintaining the pinned column position during scroll."}),`
`,e.jsx(n.li,{children:"Providing a visual separation between pinned and scrollable columns."}),`
`]}),`
`,e.jsx(n.p,{children:"The integrator is responsible for:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Defining which columns are pinned."}),`
`,e.jsx(n.li,{children:"Ensuring that pinned columns are used appropriately (e.g. selection or actions)."}),`
`]}),`
`,e.jsx(n.p,{children:"Pinned columns remain fully interactive and accessible."}),`
`,e.jsx(i,{label:"Disabled Rows",level:3}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"Data Table"})," supports disabled rows to represent non-interactive or restricted items."]}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"Data Table"})," is responsible for:"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Rendering disabled rows with a distinct visual style."}),`
`,e.jsx(n.li,{children:"Preventing interaction with disabled rows."}),`
`]}),`
`,e.jsx(n.p,{children:"The integrator is responsible for:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Defining which rows are disabled and why."}),`
`,e.jsx(n.li,{children:"Optionnaly providing explanatory messaging (e.g. tooltip)."}),`
`]}),`
`,e.jsx(n.p,{children:"Disabled rows must not participate in selection or bulk actions."}),`
`,e.jsx(i,{label:"Sticky Header",level:3}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"Data Table"})," may support sticky headers to maintain access to key controls during vertical scrolling."]}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"Data Table"})," is responsible for:"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Keeping the header visually fixed within the table container."}),`
`]}),`
`,e.jsx(n.p,{children:"The integrator is responsible for:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Deciding whether sticky behavior is enabled."}),`
`,e.jsx(n.li,{children:"Ensuring that injected content (actions, menus, tooltips) behave correctly within the sticky area."}),`
`]}),`
`,e.jsx(n.p,{children:"Sticky behavior must not interfere with interactions such as sorting, tooltips, or menus."}),`
`,e.jsx(i,{label:"Row-level Actions (Ellipsis Menu)",level:3}),`
`,e.jsx(n.p,{children:"Rows may expose contextual actions via an ellipsis menu."}),`
`,e.jsx(n.p,{children:"The integrator is responsible for:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Rendering the menu trigger."}),`
`,e.jsx(n.li,{children:"Providing the menu content."}),`
`,e.jsx(n.li,{children:"Defining actions behavior and permissions."}),`
`,e.jsx(n.li,{children:"Managing disabled or loading states per action."}),`
`]}),`
`,e.jsx(i,{label:"Global Table Actions",level:3}),`
`,e.jsxs(n.p,{children:["A dedicated area associated with the ",e.jsx(n.code,{children:"Data Table"}),` for global actions, intended to host at least one primary action
(e.g., "Create", "Add", "Import"), but may contain additional actions if required by the product context.`]}),`
`,e.jsx(n.p,{children:"The integrator is responsible for:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Defining the actions themselves."}),`
`,e.jsx(n.li,{children:"Handling their behavior, permissions, and side effects."}),`
`,e.jsx(n.li,{children:"Supporting disabled and loading visual states."}),`
`]}),`
`,e.jsx(i,{label:"Bulk actions",level:3}),`
`,e.jsx(n.p,{children:"Bulk actions are actions applied to a set of selected rows."}),`
`,e.jsx(n.p,{children:"The integrator is responsible for:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Rendering the bulk actions area when one or more rows are selected."}),`
`,e.jsx(n.li,{children:"Defining bulk actions and their behavior."}),`
`,e.jsx(n.li,{children:"Handling business rules and permissions."}),`
`,e.jsx(n.li,{children:"Determining the eligibility of selected rows for each action."}),`
`]}),`
`,e.jsxs(n.p,{children:["When a selection includes rows with mixed eligibility, the ",e.jsx(n.code,{children:"Data Table"}),` must support integrator-defined strategies
such as disabling the action, allowing partial execution with confirmation, or dinamycally adjusting available actions.`]}),`
`,e.jsx(i,{label:"Header tooltips",level:3}),`
`,e.jsx(n.p,{children:"Displaying tooltips attached to column headers."}),`
`,e.jsx(n.p,{children:"The integrator is responsible for:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Rendering tooltip triggers."}),`
`,e.jsx(n.li,{children:"Providing tooltip content."}),`
`]}),`
`,e.jsx(n.p,{children:"Tooltips must not obstruct sorting or other header interactions."}),`
`,e.jsx(i,{label:"Search",level:3}),`
`,e.jsxs(n.p,{children:["Associating a global search input to the ",e.jsx(n.code,{children:"Data Table"}),"."]}),`
`,e.jsx(n.p,{children:"The integrator is responsible for:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Providing the search input."}),`
`,e.jsx(n.li,{children:"Implementing search logic."}),`
`,e.jsx(n.li,{children:"Visually indicating when a search is active."}),`
`,e.jsx(n.li,{children:"Handling empty and loading states resulting from search."}),`
`]}),`
`,e.jsx(i,{label:"Pagination",level:3}),`
`,e.jsxs(n.p,{children:["Adding paginated data display to the ",e.jsx(n.code,{children:"Data Table"}),"."]}),`
`,e.jsx(n.p,{children:"The integrator is responsible for:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Rendering pagination controls."}),`
`,e.jsx(n.li,{children:"Displaying the current page state."}),`
`,e.jsx(n.li,{children:"Providing pagination data (current page, total pages, total items)."}),`
`,e.jsx(n.li,{children:"Handling page changes and data updates."}),`
`]}),`
`,e.jsx(n.p,{children:"The behavior of selection across page changes must be explicitly defined by the integrator."}),`
`,e.jsx(i,{label:"Refresh",level:3}),`
`,e.jsx(n.p,{children:"Exposing a refresh control allowing users to explicitly request a data reload."}),`
`,e.jsx(n.p,{children:"The integrator is responsible for:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Rendering the refresh trigger."}),`
`,e.jsx(n.li,{children:"Displaying a loading state when refresh is in progress."}),`
`,e.jsx(n.li,{children:"Implementing the refresh logic."}),`
`,e.jsx(n.li,{children:"Updating the data and loading state accordingly."}),`
`]}),`
`,e.jsx(n.p,{children:`When a refresh is triggered while a loading state is already active, the refresh action must be disabled or
ignored to prevent duplicate requests.`}),`
`,e.jsx(n.p,{children:"If rows were selected prior to a refresh, it is recommended to reset them."}),`
`,e.jsx(i,{label:"Tags assignment",level:3}),`
`,e.jsx(n.p,{children:"Supporting tag assignment workflows through composition, using a modal."}),`
`,e.jsxs(n.p,{children:["Tag assignment is treated as a business-specific action and is not implemented by the ",e.jsx(n.code,{children:"Data Table"})," component."]}),`
`,e.jsx(n.p,{children:"The tag assignment modal may be triggered from different entry points, such as a row-level action for example."}),`
`,e.jsx(n.p,{children:"The integrator is responsible for:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Defining when an where the tag assignment action is available."}),`
`,e.jsx(n.li,{children:"Rendering the modal and its trigger."}),`
`,e.jsx(n.li,{children:"Handling the association between rows and tags."}),`
`,e.jsx(n.li,{children:"Providing existing tags to the modal."}),`
`,e.jsx(n.li,{children:"Resolving conflicts with already assigned tags."}),`
`]}),`
`,e.jsx(n.p,{children:"All error handling, messaging, and resolution strategies are the responsibility of the integrator."}),`
`,e.jsx(i,{label:"Editable Content",level:3}),`
`,e.jsxs(n.p,{children:["Allowing editable content to be injected through composition to the ",e.jsx(n.code,{children:"Data Table"}),"."]}),`
`,e.jsx(n.p,{children:"The integrator is responsible for:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Rendering editable content/component (ODS or custom)."}),`
`,e.jsx(n.li,{children:"Managing side effects of editing (data updates, refresh, notifications)."}),`
`]}),`
`,e.jsx(i,{label:"Navigation",level:2}),`
`,e.jsx(i,{label:"Focus Management",level:3}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"Data Table"})," is fully navigable using the keyboard."]}),`
`,e.jsxs(n.p,{children:["When focus enters the ",e.jsx(n.code,{children:"Data Table"}),`, it is placed on the first focusable element within the table, depending on the current configuration.
This may include:`]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"a global table action."}),`
`,e.jsx(n.li,{children:"a sortable column header."}),`
`,e.jsx(n.li,{children:"a row selection checkbox."}),`
`,e.jsx(n.li,{children:"a focusable action within the first row."}),`
`]}),`
`,e.jsxs(n.p,{children:["Focus is never trapped inside the ",e.jsx(n.code,{children:"Data Table"}),`.
Users can move focus into and out of the component using standard keyboard navigation.`]}),`
`,e.jsx(n.p,{children:"If a header is not sortable or interactive, it must not receive focus."}),`
`,e.jsx(n.p,{children:"Disabled rows do not receive focus."}),`
`,e.jsx(i,{label:"General Keyboard Shortcuts",level:3}),`
`,e.jsx(i,{label:"Table Navigation",level:4}),`
`,e.jsxs(n.p,{children:["Keyboard navigation within the ",e.jsx(n.code,{children:"Data Table"})," follows a predictable, linear order:"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Pressing ",e.jsx(s,{children:"Tab"})," moves focus forward through focusable elements inside the table."]}),`
`,e.jsxs(n.li,{children:["Pressing ",e.jsx(s,{children:"Shift"})," + ",e.jsx(s,{children:"Tab"})," moves focus backward."]}),`
`]}),`
`,e.jsx(i,{label:"Column Header Navigation",level:4}),`
`,e.jsx(n.p,{children:"When a column header is focusable:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Pressing ",e.jsx(s,{children:"Enter"})," or ",e.jsx(s,{children:"Space"})," triggers the primary header action (e.g. sorting)."]}),`
`,e.jsx(n.li,{children:"Tooltip triggers in headers are reachable via keyboard focus."}),`
`]}),`
`,e.jsx(i,{label:"Row Selection via Keyboard",level:4}),`
`,e.jsx(n.p,{children:"Row selection controls are keyboard accessible."}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Pressing ",e.jsx(s,{children:"Space"})," toggles the selection state of the focused row checkbox."]}),`
`,e.jsxs(n.li,{children:['The "select all" checkbox (when present) can be toggled using ',e.jsx(s,{children:"Space"}),"."]}),`
`]}),`
`,e.jsx(n.p,{children:"Disabled rows cannot be selected via keyboard."}),`
`,e.jsx(i,{label:"Row-Level Actions",level:4}),`
`,e.jsxs(n.p,{children:[`Row-level actions (such as ellipsis menus) are reachable via keyboard navigation
(`,e.jsx(s,{children:"Space"})," or ",e.jsx(s,{children:"Enter"})," depending on the focusabled element)."]}),`
`,e.jsx(i,{label:"Accessibility",level:2}),`
`,e.jsxs(n.p,{children:["To ensure the ",e.jsx(n.code,{children:"Data Table"}),` component is fully accessible, it is essential to follow best practices for structuring
tables with the correct attributes and a global caption to provide users with context.
Please follow the `,e.jsx(t,{href:"https://www.w3.org/TR/WCAG20-TECHS/H63",children:"W3C technique"})," for integrating them correctly."]}),`
`,e.jsxs(n.p,{children:["We also recommend referring to the ",e.jsx(t,{href:"https://www.w3.org/WAI/tutorials/tables/",children:"WCAG guidelines"})," for building accessible ",e.jsx(n.code,{children:"Data Tables"}),"."]})]})}function De(l={}){const{wrapper:n}={...o(),...l.components};return n?e.jsx(n,{...l,children:e.jsx(a,{...l})}):a(l)}export{De as default};
