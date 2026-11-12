import{i as e}from"./rolldown-runtime-Dd_uD5pT.js";import{t}from"./jsx-runtime-DREnUpxT.js";import{T as n}from"./index-CzEwg6AJ.js";var r=e(t());function i(e){let t={code:`code`,li:`li`,ol:`ol`,p:`p`,strong:`strong`,ul:`ul`,...n(),...e.components},{Anatomy:i,BestPractices:a,Canvas:s,ExternalLink:c,Heading:l,Icon:u,IdentityCard:d,Kbd:f,TableVsDataTable:p}=t;return i||o(`Anatomy`,!0),a||o(`BestPractices`,!0),s||o(`Canvas`,!0),c||o(`ExternalLink`,!0),l||o(`Heading`,!0),u||o(`Icon`,!0),d||o(`IdentityCard`,!0),f||o(`Kbd`,!0),p||o(`TableVsDataTable`,!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s,{story:`Overview`,source:`none`}),`
`,(0,r.jsx)(l,{label:`Overview`,level:2}),`
`,(0,r.jsxs)(d,{aliases:[],figmaLink:`https://www.figma.com/design/9jDDTcR4a9jPRFcdjawAlf/branch/KKF2yPJ1fGICU7z9usG7Pl/ODS---UI-Kit?node-id=16269-23952&p=f&t=AvtT3fJhAIPZ0qbf-0`,githubUrl:`https://github.com/ovh/design-system/tree/master/packages/ods-react/src/components/data-table`,name:`DataTable`,startingVersion:19,children:[(0,r.jsxs)(t.p,{children:[`The `,(0,r.jsx)(t.code,{children:`Data Table`}),` component provides a structured and flexible way to display, explore, and interact with tabular data.`]}),(0,r.jsx)(t.p,{children:`It is designed as a core component, intended to support a wide range of use cases while remaining composable, scalable, andproduct-agnostic.`})]}),`
`,(0,r.jsx)(l,{label:`Usage`,level:2}),`
`,(0,r.jsxs)(t.p,{children:[`The `,(0,r.jsx)(t.code,{children:`Data Table`}),` is used to present collections of structured data and enable users to:`]}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsx)(t.li,{children:`Browse and scan information efficiently.`}),`
`,(0,r.jsx)(t.li,{children:`Sort and organize data.`}),`
`,(0,r.jsx)(t.li,{children:`Select one or multiple rows.`}),`
`,(0,r.jsx)(t.li,{children:`Perform actions on individual row or in bulk.`}),`
`,(0,r.jsx)(t.li,{children:`Interact with large datasets through pagination, search, and refresh.`}),`
`]}),`
`,(0,r.jsx)(t.p,{children:`Typical use cases include:`}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsx)(t.li,{children:`Administration panels.`}),`
`,(0,r.jsx)(t.li,{children:`Management interfaces.`}),`
`,(0,r.jsx)(t.li,{children:`Reporting and operational dashboards.`}),`
`,(0,r.jsx)(t.li,{children:`Configuration screens.`}),`
`]}),`
`,(0,r.jsx)(p,{}),`
`,(0,r.jsx)(l,{label:`Dos & Don'ts`,level:3}),`
`,(0,r.jsx)(a,{donts:[`- Use a Data Table for simple, static content`,`- Overload the table with too many visible actions`,`- Trigger destructive actions without confirmation`,`- Assume all rows behave identically in bulk operations`],dos:[`- Use a Data Table for managing collections of structured data`,`- Use composition to inject business-specific actions and logic`,`- Combine selection with bulk actions for efficiency`]}),`
`,(0,r.jsx)(l,{label:`Best Practices in Context`,level:3}),`
`,(0,r.jsx)(i,{src:`components/data-table/anatomy.png`}),`
`,(0,r.jsxs)(t.ol,{children:[`
`,(0,r.jsx)(t.li,{children:(0,r.jsx)(t.strong,{children:`Data Table`})}),`
`,(0,r.jsx)(t.li,{children:(0,r.jsx)(t.strong,{children:`Header cell`})}),`
`,(0,r.jsx)(t.li,{children:(0,r.jsx)(t.strong,{children:`Body cell`})}),`
`,(0,r.jsx)(t.li,{children:(0,r.jsx)(t.strong,{children:`Column sorting`})}),`
`]}),`
`,(0,r.jsx)(l,{label:`Placement`,level:2}),`
`,(0,r.jsxs)(t.p,{children:[`The `,(0,r.jsx)(t.code,{children:`Data Table`}),` is typically placed as the main content of a page or section.`]}),`
`,(0,r.jsx)(t.p,{children:`It should:`}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsx)(t.li,{children:`Expand horizontally to fit its container.`}),`
`,(0,r.jsx)(t.li,{children:`Manage internal scrolling when necessary.`}),`
`,(0,r.jsx)(t.li,{children:`Not overflow or break surrounding layouts.`}),`
`]}),`
`,(0,r.jsx)(l,{label:`Behavior`,level:2}),`
`,(0,r.jsx)(l,{label:`Data & State Ownership`,level:3}),`
`,(0,r.jsxs)(t.p,{children:[`The `,(0,r.jsx)(t.code,{children:`Data Table`}),` does not own data.`]}),`
`,(0,r.jsx)(t.p,{children:`Data fetching, transformation, and persistence are handled by the integrator.`}),`
`,(0,r.jsx)(t.p,{children:`The component is responsible for rendering the provided dataset and reflecting externally managed states such as loading, sorting, selection, and pagination.`}),`
`,(0,r.jsx)(t.p,{children:`The integrator is responsible for:`}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsx)(t.li,{children:`Providing the data to display.`}),`
`,(0,r.jsx)(t.li,{children:`Handling data fetching and refreshing.`}),`
`,(0,r.jsx)(t.li,{children:`Managing all business rules and permissions.`}),`
`,(0,r.jsxs)(t.li,{children:[`Synchronizing external state with the `,(0,r.jsx)(t.code,{children:`Data Table`}),` visual state.`]}),`
`]}),`
`,(0,r.jsx)(l,{label:`Row Selection`,level:3}),`
`,(0,r.jsxs)(t.p,{children:[`The `,(0,r.jsx)(t.code,{children:`Data Table`}),` supports row selection via checkboxes or radio buttons.`]}),`
`,(0,r.jsxs)(t.p,{children:[`The `,(0,r.jsx)(t.code,{children:`Data Table`}),` is responsible for:`]}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsx)(t.li,{children:`Rendering selection controls.`}),`
`,(0,r.jsx)(t.li,{children:`Handling user interaction for selecting and deselecting rows.`}),`
`,(0,r.jsx)(t.li,{children:`Visually reflecting the current selection state.`}),`
`,(0,r.jsx)(t.li,{children:`Exposing selection changes to the integrator.`}),`
`]}),`
`,(0,r.jsx)(t.p,{children:`The integrator is responsible for:`}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsx)(t.li,{children:`Storing and managing the selection state.`}),`
`,(0,r.jsx)(t.li,{children:`Defining whether selection is single or multiple.`}),`
`,(0,r.jsx)(t.li,{children:`Deciding how selection behaves accross pagination or refresh.`}),`
`]}),`
`,(0,r.jsx)(t.p,{children:`Disabled rows are not selectable.`}),`
`,(0,r.jsx)(l,{label:`Column Sorting`,level:3}),`
`,(0,r.jsxs)(t.p,{children:[`The `,(0,r.jsx)(t.code,{children:`Data Table`}),` supports column-based sorting through interactions with column headers.`]}),`
`,(0,r.jsxs)(t.p,{children:[`The `,(0,r.jsx)(t.code,{children:`Data Table`}),` is responsible for:`]}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsx)(t.li,{children:`Rendering sortable and non-sortable column headers.`}),`
`,(0,r.jsx)(t.li,{children:`Managing user interactions on sortable headers.`}),`
`,(0,r.jsx)(t.li,{children:`Displaying visual indicators for sorting state (unsorted, ascending, descending).`}),`
`]}),`
`,(0,r.jsx)(t.p,{children:`The integrator is reponsible for:`}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsx)(t.li,{children:`Implemeting the sorting logic (if done server-side).`}),`
`,(0,r.jsxs)(t.li,{children:[`Synchronizing the active sorting state with the `,(0,r.jsx)(t.code,{children:`Data Table`}),`.`]}),`
`]}),`
`,(0,r.jsxs)(t.p,{children:[`The `,(0,r.jsx)(t.code,{children:`Data Table`}),` can support either single-column sorting, where only one column can be sorted at a time,
or multi-column sorting, where users can sort by multiple columns simultaneously.`]}),`
`,(0,r.jsx)(t.p,{children:`Non-sortable columns don't react to sorting interactions.`}),`
`,(0,r.jsx)(l,{label:`Pinned columns`,level:3}),`
`,(0,r.jsxs)(t.p,{children:[`The `,(0,r.jsx)(t.code,{children:`Data Table`}),` supports pinning columns to keep them visible during horizontal scrolling.`]}),`
`,(0,r.jsxs)(t.p,{children:[`The `,(0,r.jsx)(t.code,{children:`Data Table`}),` is responsible for:`]}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsx)(t.li,{children:`Maintaining the pinned column position during scroll.`}),`
`,(0,r.jsx)(t.li,{children:`Providing a visual separation between pinned and scrollable columns.`}),`
`]}),`
`,(0,r.jsx)(t.p,{children:`The integrator is responsible for:`}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsx)(t.li,{children:`Defining which columns are pinned.`}),`
`,(0,r.jsx)(t.li,{children:`Ensuring that pinned columns are used appropriately (e.g. selection or actions).`}),`
`]}),`
`,(0,r.jsx)(t.p,{children:`Pinned columns remain fully interactive and accessible.`}),`
`,(0,r.jsx)(l,{label:`Disabled Rows`,level:3}),`
`,(0,r.jsxs)(t.p,{children:[`The `,(0,r.jsx)(t.code,{children:`Data Table`}),` supports disabled rows to represent non-interactive or restricted items.`]}),`
`,(0,r.jsxs)(t.p,{children:[`The `,(0,r.jsx)(t.code,{children:`Data Table`}),` is responsible for:`]}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsx)(t.li,{children:`Rendering disabled rows with a distinct visual style.`}),`
`,(0,r.jsx)(t.li,{children:`Preventing interaction with disabled rows.`}),`
`]}),`
`,(0,r.jsx)(t.p,{children:`The integrator is responsible for:`}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsx)(t.li,{children:`Defining which rows are disabled and why.`}),`
`,(0,r.jsx)(t.li,{children:`Optionnaly providing explanatory messaging (e.g. tooltip).`}),`
`]}),`
`,(0,r.jsx)(t.p,{children:`Disabled rows must not participate in selection or bulk actions.`}),`
`,(0,r.jsx)(l,{label:`Sticky Header`,level:3}),`
`,(0,r.jsxs)(t.p,{children:[`The `,(0,r.jsx)(t.code,{children:`Data Table`}),` may support sticky headers to maintain access to key controls during vertical scrolling.`]}),`
`,(0,r.jsxs)(t.p,{children:[`The `,(0,r.jsx)(t.code,{children:`Data Table`}),` is responsible for:`]}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsx)(t.li,{children:`Keeping the header visually fixed within the table container.`}),`
`]}),`
`,(0,r.jsx)(t.p,{children:`The integrator is responsible for:`}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsx)(t.li,{children:`Deciding whether sticky behavior is enabled.`}),`
`,(0,r.jsx)(t.li,{children:`Ensuring that injected content (actions, menus, tooltips) behave correctly within the sticky area.`}),`
`]}),`
`,(0,r.jsx)(t.p,{children:`Sticky behavior must not interfere with interactions such as sorting, tooltips, or menus.`}),`
`,(0,r.jsx)(l,{label:`Row-level Actions (Ellipsis Menu)`,level:3}),`
`,(0,r.jsx)(t.p,{children:`Rows may expose contextual actions via an ellipsis menu.`}),`
`,(0,r.jsx)(t.p,{children:`The integrator is responsible for:`}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsx)(t.li,{children:`Rendering the menu trigger.`}),`
`,(0,r.jsx)(t.li,{children:`Providing the menu content.`}),`
`,(0,r.jsx)(t.li,{children:`Defining actions behavior and permissions.`}),`
`,(0,r.jsx)(t.li,{children:`Managing disabled or loading states per action.`}),`
`]}),`
`,(0,r.jsx)(l,{label:`Global Table Actions`,level:3}),`
`,(0,r.jsxs)(t.p,{children:[`A dedicated area associated with the `,(0,r.jsx)(t.code,{children:`Data Table`}),` for global actions, intended to host at least one primary action
(e.g., "Create", "Add", "Import"), but may contain additional actions if required by the product context.`]}),`
`,(0,r.jsx)(t.p,{children:`The integrator is responsible for:`}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsx)(t.li,{children:`Defining the actions themselves.`}),`
`,(0,r.jsx)(t.li,{children:`Handling their behavior, permissions, and side effects.`}),`
`,(0,r.jsx)(t.li,{children:`Supporting disabled and loading visual states.`}),`
`]}),`
`,(0,r.jsx)(l,{label:`Bulk actions`,level:3}),`
`,(0,r.jsx)(t.p,{children:`Bulk actions are actions applied to a set of selected rows.`}),`
`,(0,r.jsx)(t.p,{children:`The integrator is responsible for:`}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsx)(t.li,{children:`Rendering the bulk actions area when one or more rows are selected.`}),`
`,(0,r.jsx)(t.li,{children:`Defining bulk actions and their behavior.`}),`
`,(0,r.jsx)(t.li,{children:`Handling business rules and permissions.`}),`
`,(0,r.jsx)(t.li,{children:`Determining the eligibility of selected rows for each action.`}),`
`]}),`
`,(0,r.jsxs)(t.p,{children:[`When a selection includes rows with mixed eligibility, the `,(0,r.jsx)(t.code,{children:`Data Table`}),` must support integrator-defined strategies
such as disabling the action, allowing partial execution with confirmation, or dinamycally adjusting available actions.`]}),`
`,(0,r.jsx)(l,{label:`Header tooltips`,level:3}),`
`,(0,r.jsx)(t.p,{children:`Displaying tooltips attached to column headers.`}),`
`,(0,r.jsx)(t.p,{children:`The integrator is responsible for:`}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsx)(t.li,{children:`Rendering tooltip triggers.`}),`
`,(0,r.jsx)(t.li,{children:`Providing tooltip content.`}),`
`]}),`
`,(0,r.jsx)(t.p,{children:`Tooltips must not obstruct sorting or other header interactions.`}),`
`,(0,r.jsx)(l,{label:`Search`,level:3}),`
`,(0,r.jsxs)(t.p,{children:[`Associating a global search input to the `,(0,r.jsx)(t.code,{children:`Data Table`}),`.`]}),`
`,(0,r.jsx)(t.p,{children:`The integrator is responsible for:`}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsx)(t.li,{children:`Providing the search input.`}),`
`,(0,r.jsx)(t.li,{children:`Implementing search logic.`}),`
`,(0,r.jsx)(t.li,{children:`Visually indicating when a search is active.`}),`
`,(0,r.jsx)(t.li,{children:`Handling empty and loading states resulting from search.`}),`
`]}),`
`,(0,r.jsx)(l,{label:`Pagination`,level:3}),`
`,(0,r.jsxs)(t.p,{children:[`Adding paginated data display to the `,(0,r.jsx)(t.code,{children:`Data Table`}),`.`]}),`
`,(0,r.jsx)(t.p,{children:`The integrator is responsible for:`}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsx)(t.li,{children:`Rendering pagination controls.`}),`
`,(0,r.jsx)(t.li,{children:`Displaying the current page state.`}),`
`,(0,r.jsx)(t.li,{children:`Providing pagination data (current page, total pages, total items).`}),`
`,(0,r.jsx)(t.li,{children:`Handling page changes and data updates.`}),`
`]}),`
`,(0,r.jsx)(t.p,{children:`The behavior of selection across page changes must be explicitly defined by the integrator.`}),`
`,(0,r.jsx)(l,{label:`Refresh`,level:3}),`
`,(0,r.jsx)(t.p,{children:`Exposing a refresh control allowing users to explicitly request a data reload.`}),`
`,(0,r.jsx)(t.p,{children:`The integrator is responsible for:`}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsx)(t.li,{children:`Rendering the refresh trigger.`}),`
`,(0,r.jsx)(t.li,{children:`Displaying a loading state when refresh is in progress.`}),`
`,(0,r.jsx)(t.li,{children:`Implementing the refresh logic.`}),`
`,(0,r.jsx)(t.li,{children:`Updating the data and loading state accordingly.`}),`
`]}),`
`,(0,r.jsx)(t.p,{children:`When a refresh is triggered while a loading state is already active, the refresh action must be disabled or
ignored to prevent duplicate requests.`}),`
`,(0,r.jsx)(t.p,{children:`If rows were selected prior to a refresh, it is recommended to reset them.`}),`
`,(0,r.jsx)(l,{label:`Tags assignment`,level:3}),`
`,(0,r.jsx)(t.p,{children:`Supporting tag assignment workflows through composition, using a modal.`}),`
`,(0,r.jsxs)(t.p,{children:[`Tag assignment is treated as a business-specific action and is not implemented by the `,(0,r.jsx)(t.code,{children:`Data Table`}),` component.`]}),`
`,(0,r.jsx)(t.p,{children:`The tag assignment modal may be triggered from different entry points, such as a row-level action for example.`}),`
`,(0,r.jsx)(t.p,{children:`The integrator is responsible for:`}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsx)(t.li,{children:`Defining when an where the tag assignment action is available.`}),`
`,(0,r.jsx)(t.li,{children:`Rendering the modal and its trigger.`}),`
`,(0,r.jsx)(t.li,{children:`Handling the association between rows and tags.`}),`
`,(0,r.jsx)(t.li,{children:`Providing existing tags to the modal.`}),`
`,(0,r.jsx)(t.li,{children:`Resolving conflicts with already assigned tags.`}),`
`]}),`
`,(0,r.jsx)(t.p,{children:`All error handling, messaging, and resolution strategies are the responsibility of the integrator.`}),`
`,(0,r.jsx)(l,{label:`Editable Content`,level:3}),`
`,(0,r.jsxs)(t.p,{children:[`Allowing editable content to be injected through composition to the `,(0,r.jsx)(t.code,{children:`Data Table`}),`.`]}),`
`,(0,r.jsx)(t.p,{children:`The integrator is responsible for:`}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsx)(t.li,{children:`Rendering editable content/component (ODS or custom).`}),`
`,(0,r.jsx)(t.li,{children:`Managing side effects of editing (data updates, refresh, notifications).`}),`
`]}),`
`,(0,r.jsx)(l,{label:`Navigation`,level:2}),`
`,(0,r.jsx)(l,{label:`Focus Management`,level:3}),`
`,(0,r.jsxs)(t.p,{children:[`The `,(0,r.jsx)(t.code,{children:`Data Table`}),` is fully navigable using the keyboard.`]}),`
`,(0,r.jsxs)(t.p,{children:[`When focus enters the `,(0,r.jsx)(t.code,{children:`Data Table`}),`, it is placed on the first focusable element within the table, depending on the current configuration.
This may include:`]}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsx)(t.li,{children:`a global table action.`}),`
`,(0,r.jsx)(t.li,{children:`a sortable column header.`}),`
`,(0,r.jsx)(t.li,{children:`a row selection checkbox.`}),`
`,(0,r.jsx)(t.li,{children:`a focusable action within the first row.`}),`
`]}),`
`,(0,r.jsxs)(t.p,{children:[`Focus is never trapped inside the `,(0,r.jsx)(t.code,{children:`Data Table`}),`.
Users can move focus into and out of the component using standard keyboard navigation.`]}),`
`,(0,r.jsx)(t.p,{children:`If a header is not sortable or interactive, it must not receive focus.`}),`
`,(0,r.jsx)(t.p,{children:`Disabled rows do not receive focus.`}),`
`,(0,r.jsx)(l,{label:`General Keyboard Shortcuts`,level:3}),`
`,(0,r.jsx)(l,{label:`Table Navigation`,level:4}),`
`,(0,r.jsxs)(t.p,{children:[`Keyboard navigation within the `,(0,r.jsx)(t.code,{children:`Data Table`}),` follows a predictable, linear order:`]}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsxs)(t.li,{children:[`Pressing `,(0,r.jsx)(f,{children:`Tab`}),` moves focus forward through focusable elements inside the table.`]}),`
`,(0,r.jsxs)(t.li,{children:[`Pressing `,(0,r.jsx)(f,{children:`Shift`}),` + `,(0,r.jsx)(f,{children:`Tab`}),` moves focus backward.`]}),`
`]}),`
`,(0,r.jsx)(l,{label:`Column Header Navigation`,level:4}),`
`,(0,r.jsx)(t.p,{children:`When a column header is focusable:`}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsxs)(t.li,{children:[`Pressing `,(0,r.jsx)(f,{children:`Enter`}),` or `,(0,r.jsx)(f,{children:`Space`}),` triggers the primary header action (e.g. sorting).`]}),`
`,(0,r.jsx)(t.li,{children:`Tooltip triggers in headers are reachable via keyboard focus.`}),`
`]}),`
`,(0,r.jsx)(l,{label:`Row Selection via Keyboard`,level:4}),`
`,(0,r.jsx)(t.p,{children:`Row selection controls are keyboard accessible.`}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsxs)(t.li,{children:[`Pressing `,(0,r.jsx)(f,{children:`Space`}),` toggles the selection state of the focused row checkbox.`]}),`
`,(0,r.jsxs)(t.li,{children:[`The "select all" checkbox (when present) can be toggled using `,(0,r.jsx)(f,{children:`Space`}),`.`]}),`
`]}),`
`,(0,r.jsx)(t.p,{children:`Disabled rows cannot be selected via keyboard.`}),`
`,(0,r.jsx)(l,{label:`Row-Level Actions`,level:4}),`
`,(0,r.jsxs)(t.p,{children:[`Row-level actions (such as ellipsis menus) are reachable via keyboard navigation
(`,(0,r.jsx)(f,{children:`Space`}),` or `,(0,r.jsx)(f,{children:`Enter`}),` depending on the focusabled element).`]}),`
`,(0,r.jsx)(l,{label:`Accessibility`,level:2}),`
`,(0,r.jsxs)(t.p,{children:[`To ensure the `,(0,r.jsx)(t.code,{children:`Data Table`}),` component is fully accessible, it is essential to follow best practices for structuring
tables with the correct attributes and a global caption to provide users with context.
Please follow the `,(0,r.jsx)(c,{href:`https://www.w3.org/TR/WCAG20-TECHS/H63`,children:`W3C technique`}),` for integrating them correctly.`]}),`
`,(0,r.jsxs)(t.p,{children:[`We also recommend referring to the `,(0,r.jsx)(c,{href:`https://www.w3.org/WAI/tutorials/tables/`,children:`WCAG guidelines`}),` for building accessible `,(0,r.jsx)(t.code,{children:`Data Tables`}),`.`]}),`
`,(0,r.jsx)(l,{label:`Sortable columns`,level:3}),`
`,(0,r.jsxs)(t.p,{children:[`Each sortable column header renders a button named after the header content, and the sorted column exposes its direction with `,(0,r.jsx)(t.code,{children:`aria-sort`}),`.`]}),`
`,(0,r.jsx)(t.p,{children:`The button also carries a description, "Sortable column" by default, that screen readers announce when the button receives the focus.
It is a description rather than part of the name, because screen readers repeat the column header name in every cell of the column.`}),`
`,(0,r.jsxs)(t.p,{children:[`The description follows the `,(0,r.jsx)(t.code,{children:`locale`}),` prop. To reword it, use the `,(0,r.jsx)(t.code,{children:`i18n`}),` prop:`]}),`
`,(0,r.jsx)(s,{story:`AccessibilityI18n`}),`
`,(0,r.jsxs)(t.p,{children:[(0,r.jsx)(u,{name:`circle-check`,style:{color:`var(--ods-semantic-color-content-success)`}}),` Screen readers will announce the header button with its description, and the sort direction of the sorted column.`]})]})}function a(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(i,{...e})}):i(e)}function o(e,t){throw Error(`Expected `+(t?`component`:`object`)+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}export{a as default};