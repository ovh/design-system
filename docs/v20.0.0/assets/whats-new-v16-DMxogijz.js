import{i as e}from"./rolldown-runtime-Dd_uD5pT.js";import{t}from"./jsx-runtime-DREnUpxT.js";import{T as n}from"./index-CzEwg6AJ.js";var r=e(t());function i(e){let t={code:`code`,em:`em`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...n(),...e.components},{DocLink:i,Heading:a,Message:s,MessageBody:c,MessageIcon:l}=t;return i||o(`DocLink`,!0),a||o(`Heading`,!0),s||o(`Message`,!0),c||o(`MessageBody`,!0),l||o(`MessageIcon`,!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.p,{children:(0,r.jsxs)(t.em,{children:[`Release notes of v16. For the current major version, see `,(0,r.jsx)(i,{to:`/guides/whats-new`,children:`What's new`}),`.`]})}),`
`,(0,r.jsx)(a,{label:`v16.6.0`,level:2}),`
`,(0,r.jsx)(a,{label:`Feature update`,level:3}),`
`,(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:`Breadcrumb`})}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsxs)(t.li,{children:[`Add attributes on `,(0,r.jsx)(t.code,{children:`breadcrumItem`}),` : `,(0,r.jsx)(t.code,{children:`disabled`}),`, `,(0,r.jsx)(t.code,{children:`rel`}),`, `,(0,r.jsx)(t.code,{children:`referrerpolicy`}),`, `,(0,r.jsx)(t.code,{children:`target`})]}),`
`,(0,r.jsxs)(t.li,{children:[`Add event on `,(0,r.jsx)(t.code,{children:`breadcrumItem`}),` : `,(0,r.jsx)(t.code,{children:`odsBreadcrumbItemClick`})]}),`
`,(0,r.jsxs)(t.li,{children:[`Update `,(0,r.jsx)(t.code,{children:`OdsHTMLAnchorElementRel`}),` type`]}),`
`]}),`
`,(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:`Chip`})}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsxs)(t.li,{children:[`Added `,(0,r.jsx)(t.code,{children:`odsChipRemoval`}),` event`]}),`
`,(0,r.jsxs)(t.li,{children:[`If `,(0,r.jsx)(t.code,{children:`OsdsChip`}),` is removable and is clicked, it will emit event `,(0,r.jsx)(t.code,{children:`odsChipRemoval`})]}),`
`,(0,r.jsxs)(t.li,{children:[`If `,(0,r.jsx)(t.code,{children:`OsdsChip`}),` is removable, focused on and key Enter is pressed, it will emit event `,(0,r.jsx)(t.code,{children:`odsChipRemoval`})]}),`
`]}),`
`,(0,r.jsx)(a,{label:`Bug fixes`,level:3}),`
`,(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:`Button`})}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsxs)(t.li,{children:[`Fix position of end slot when start slot is empty in `,(0,r.jsx)(t.code,{children:`OsdsButton`})]}),`
`]}),`
`,(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:`Datagrid`})}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsxs)(t.li,{children:[`If the `,(0,r.jsx)(t.code,{children:`OsdsDatagrid`}),` contains an overflowing on-interaction element (such as `,(0,r.jsx)(t.code,{children:`OsdsMenu`}),`, `,(0,r.jsx)(t.code,{children:`OsdsTooltip`}),`, `,(0,r.jsx)(t.code,{children:`OsdsSelect`}),` or `,(0,r.jsx)(t.code,{children:`OsdsPopover`}),`), the element is either being displayed at the top left corner of the `,(0,r.jsx)(t.code,{children:`OsdsDatagrid`}),` (native) or beneath the element, making it unvisible (React). This fix intends to correct this problem in both environments.`]}),`
`]}),`
`,(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:`Pagination`})}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsxs)(t.li,{children:[`Add `,(0,r.jsx)(t.code,{children:`itemPerPage`}),` in payload event `,(0,r.jsx)(t.code,{children:`odsChange`})]}),`
`,(0,r.jsxs)(t.li,{children:[`Watch `,(0,r.jsx)(t.code,{children:`totalPages`}),` & update it`]}),`
`]}),`
`,(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:`Phone Number`})}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsx)(t.li,{children:`Fix shadow of flag icon in the select that was cut behind overflow`}),`
`]}),`
`,(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:`Components`})}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsxs)(t.li,{children:[`Some components were missing from package.json of components: `,(0,r.jsx)(t.code,{children:`medium`}),`, `,(0,r.jsx)(t.code,{children:`range`}),`, `,(0,r.jsx)(t.code,{children:`toggle`})]}),`
`]}),`
`,(0,r.jsx)(a,{label:`v16.5.0`,level:2}),`
`,(0,r.jsx)(a,{label:`Feature update`,level:3}),`
`,(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:`Documentation`})}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsx)(t.li,{children:`Multiple updates to clarify documentation. (Welcome page, Get started, Design tokens, Code, Contributing & libraries)`}),`
`,(0,r.jsx)(t.li,{children:`Removing Starter documentation, as it is deprecated for now.`}),`
`]}),`
`,(0,r.jsx)(a,{label:`Bug fixes`,level:3}),`
`,(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:`Datagrid`})}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:`OsdsDatagrid`}),` now emits the event `,(0,r.jsx)(t.code,{children:`onBottomScroll`}),`.`]}),`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:`OsdsDatagrid`}),` now supports React Formatters.`]}),`
`,(0,r.jsx)(t.li,{children:`Row change has been fixed.`}),`
`]}),`
`,(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:`Modal`})}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:`OsdsModal`}),` is now using a `,(0,r.jsx)(t.code,{children:`HTMLDialogElement`}),`,`]}),`
`]}),`
`,(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:`Phone Number`})}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsx)(t.li,{children:`Flags have been fixed to be displayed with proper width & height.`}),`
`]}),`
`,(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:`Select`})}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsxs)(t.li,{children:[`Enhanced React support for `,(0,r.jsx)(t.code,{children:`OsdsSelect`}),`.`]}),`
`]}),`
`,(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:`Storybook`})}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsxs)(t.li,{children:[`Storybook errors with displaying `,(0,r.jsx)(t.code,{children:`OsdsPhoneNumber`}),` & `,(0,r.jsx)(t.code,{children:`OsdsSearchBar`}),` inputs has been fixed.`]}),`
`]}),`
`,(0,r.jsx)(a,{label:`v16.4.0`,level:2}),`
`,(0,r.jsx)(a,{label:`New component`,level:3}),`
`,(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:`Datagrid`})}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsx)(t.li,{children:`See Documentation using version selector`}),`
`]}),`
`,(0,r.jsx)(a,{label:`Bug fixes`,level:3}),`
`,(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:`Phone number`})}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsxs)(t.li,{children:[`Now consistently triggers `,(0,r.jsx)(t.code,{children:`odsValueChange`}),` event on type.`]}),`
`]}),`
`,(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:`Storybook`})}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsx)(t.li,{children:`The release list now correctly displays the name of the latest version.`}),`
`]}),`
`,(0,r.jsx)(a,{label:`Feature update`,level:3}),`
`,(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:`Component Generator`})}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsx)(t.li,{children:`Component Generator has been upgraded to align with the new architecture (introduced in version 16.0.0).`}),`
`]}),`
`,(0,r.jsx)(a,{label:`v16.3.2`,level:2}),`
`,(0,r.jsx)(a,{label:`New component`,level:3}),`
`,(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:`Medium`})}),`
`,(0,r.jsx)(i,{to:`/components/medium`,children:`See Documentation`}),`
`,(0,r.jsx)(a,{label:`Bug fixes`,level:3}),`
`,(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:`Phone number`})}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsx)(t.li,{children:`Emit event when the value is valid`}),`
`]}),`
`,(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:`Accordion`})}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsx)(t.li,{children:`Can't open when the component is disabled`}),`
`]}),`
`,(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:`Quantity`})}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsx)(t.li,{children:`Change the value onblur to be valid with step`}),`
`]}),`
`,(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:`Modal`})}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsx)(t.li,{children:`Add event open & close (odsModalOpen, odsModalClose)`}),`
`]}),`
`,(0,r.jsx)(a,{label:`v16.3.1`,level:2}),`
`,(0,r.jsx)(a,{label:`Bug fixes`,level:3}),`
`,(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:`Datepicker`})}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsx)(t.li,{children:`The siblings months days are now updated after the datepicker was updated`}),`
`]}),`
`,(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:`Select`})}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsx)(t.li,{children:`Keyboard navigation correction`}),`
`]}),`
`,(0,r.jsx)(a,{label:`v16.3.0`,level:2}),`
`,(0,r.jsx)(a,{label:`Component changes`,level:3}),`
`,(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:`Button`})}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsx)(t.li,{children:`Each variant now display correctly when using circle button`}),`
`]}),`
`,(0,r.jsxs)(s,{status:`warning`,dismissible:!1,style:{width:`100%`},children:[(0,r.jsx)(l,{name:`triangle-exclamation`}),(0,r.jsx)(c,{children:(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:`Breaking change`})})})]}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsx)(t.li,{children:`Circle button may render differently regarding the variant you're using`}),`
`]}),`
`,(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:`Datepicker`})}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsx)(t.li,{children:`Component now close itself when value is selected`}),`
`,(0,r.jsxs)(t.li,{children:[`You can now hide adjacent month days with the attributes `,(0,r.jsx)(t.code,{children:`showSiblingsMonthDays`})]}),`
`]}),`
`,(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:`Flag`})}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsx)(t.li,{children:`Component has been refactored internally, but this should not have any impacts`}),`
`]}),`
`,(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:`Icon`})}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsx)(t.li,{children:`Component has been refactored internally, but this should not have any impacts`}),`
`]}),`
`,(0,r.jsx)(a,{label:`Bug fixes`,level:3}),`
`,(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:`Menu`})}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsx)(t.li,{children:`Now correctly work when used with React`}),`
`]}),`
`,(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:`Select`})}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsx)(t.li,{children:`On Safari the component is displayed correctly when using flex`}),`
`]}),`
`,(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:`Textarea`})}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsx)(t.li,{children:`On Safari the component is displayed correctly when using flex`}),`
`]}),`
`,(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:`Tile`})}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsx)(t.li,{children:`On Safari the component is displayed correctly when using flex`}),`
`]}),`
`,(0,r.jsx)(a,{label:`Project changes`,level:3}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsx)(t.li,{children:`The whole project is now built using Stenciljs v4.7`}),`
`]}),`
`,(0,r.jsxs)(s,{status:`warning`,dismissible:!1,style:{width:`100%`},children:[(0,r.jsx)(l,{name:`triangle-exclamation`}),(0,r.jsx)(c,{children:(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:`Breaking change`})})})]}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsxs)(t.li,{children:[`We don't generate the bundle `,(0,r.jsx)(t.code,{children:`custom-elements-bundle`}),` anymore`]}),`
`]}),`
`,(0,r.jsx)(a,{label:`v16.2.1`,level:2}),`
`,(0,r.jsx)(a,{label:`Component changes`,level:3}),`
`,(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:`Datepicker`})}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsxs)(t.li,{children:[`New attribute `,(0,r.jsx)(t.code,{children:`locale`}),` to manage internationalization, accepted locales are for now:`]}),`
`]}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsx)(t.li,{children:`French`}),`
`,(0,r.jsx)(t.li,{children:`English`}),`
`,(0,r.jsx)(t.li,{children:`German`}),`
`,(0,r.jsx)(t.li,{children:`Spanish`}),`
`,(0,r.jsx)(t.li,{children:`Italian`}),`
`,(0,r.jsx)(t.li,{children:`Polish`}),`
`,(0,r.jsx)(t.li,{children:`Portuguese`}),`
`,(0,r.jsx)(t.li,{children:`Dutch`}),`
`]}),`
`,(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:`Text`})}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsx)(t.li,{children:`Component has been refactored internally, but this should not have any impacts`}),`
`]}),`
`,(0,r.jsx)(a,{label:`Bug fixes`,level:3}),`
`,(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:`Datepicker`})}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsx)(t.li,{children:`Add missing constants and types exports`}),`
`]}),`
`,(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:`Modal`})}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsx)(t.li,{children:`Is now correctly destroyed on page change`}),`
`]}),`
`,(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:`Popover`})}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsx)(t.li,{children:`Now correctly work when used with React`}),`
`]}),`
`,(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:`Select`})}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsx)(t.li,{children:`Selected value is now correctly updated on cnange (ex: translation change)`}),`
`]}),`
`,(0,r.jsx)(a,{label:`v16.2.0`,level:2}),`
`,(0,r.jsx)(a,{label:`New component`,level:3}),`
`,(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:`Datepicker`})}),`
`,(0,r.jsx)(i,{to:`/components/datepicker`,children:`See Documentation`}),`
`,(0,r.jsx)(a,{label:`Component changes`,level:3}),`
`,(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:`Clipboard`})}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsx)(t.li,{children:`Added tooltip confirmation message on paste`}),`
`]}),`
`,(0,r.jsx)(a,{label:`Bug fixes`,level:3}),`
`,(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:`Textarea`})}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsxs)(t.li,{children:[`Correctly emit `,(0,r.jsx)(t.code,{children:`odsValueChange`}),` event on value change.`]}),`
`]}),`
`,(0,r.jsx)(a,{label:`Documentation changes`,level:3}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsx)(t.li,{children:`Improve typedoc documentation`}),`
`]}),`
`,(0,r.jsx)(a,{label:`v16.1.1`,level:2}),`
`,(0,r.jsx)(a,{label:`Documentation fixes`,level:3}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsx)(t.li,{children:`Component specification pages now displays correct information`}),`
`,(0,r.jsx)(t.li,{children:`Tile sandbox now uses correct list of commands`}),`
`]}),`
`,(0,r.jsx)(a,{label:`v16.1.0`,level:2}),`
`,(0,r.jsx)(a,{label:`New component`,level:3}),`
`,(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:`Phone Number`})}),`
`,(0,r.jsx)(i,{to:`/components/phone-number`,children:`See Documentation`}),`
`,(0,r.jsx)(a,{label:`Component changes`,level:3}),`
`,(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:`Input`})}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsxs)(t.li,{children:[`New attribute `,(0,r.jsx)(t.code,{children:`prefixValue`}),` that allow to display a fixed prefix in front of the input value.`]}),`
`]}),`
`,(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:`Progress Bar`})}),`
`,(0,r.jsxs)(s,{status:`warning`,dismissible:!1,style:{width:`100%`},children:[(0,r.jsx)(l,{name:`triangle-exclamation`}),(0,r.jsx)(c,{children:(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:`Breaking change`})})})]}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:`max`}),` and `,(0,r.jsx)(t.code,{children:`value`}),` attributes are now `,(0,r.jsx)(t.code,{children:`number`}),` and won't accept `,(0,r.jsx)(t.code,{children:`string`}),` anymore.`]}),`
`]}),`
`,(0,r.jsx)(a,{label:`Bug fixes`,level:3}),`
`,(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:`Code`})}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsx)(t.li,{children:`Contrasted version have now the right color.`}),`
`]}),`
`,(0,r.jsx)(a,{label:`Project changes`,level:3}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsx)(t.li,{children:`The whole project is now built using node 18.`}),`
`]}),`
`,(0,r.jsx)(a,{label:`v16.0.1`,level:2}),`
`,(0,r.jsx)(t.p,{children:`Fixes CI build issues when deploying Storybook.`}),`
`,(0,r.jsx)(a,{label:`v16.0.0`,level:2}),`
`,(0,r.jsxs)(t.p,{children:[`As it is a major version, you'll have to follow the `,(0,r.jsx)(i,{to:`/guides/migration-15-to-16`,children:`migration guide 15.x to 16.x`})]}),`
`,(0,r.jsxs)(s,{status:`warning`,dismissible:!1,style:{width:`100%`},children:[(0,r.jsx)(l,{name:`triangle-exclamation`}),(0,r.jsx)(c,{children:(0,r.jsx)(t.p,{children:`We're aware that not all the documentation is up-to-date with the latest technical changes. We're currently working on improving the storybook but didn't want to delay the release much more. If you have any issue migrating, reach us directly and we'll help you.`})})]}),`
`,(0,r.jsx)(a,{label:`Project changes`,level:3}),`
`,(0,r.jsx)(t.p,{children:`This version embed the whole new project architecture (initiated with the v15).`}),`
`,(0,r.jsx)(t.p,{children:`We now have seperations between:`}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:`cdk`}),` (@ovhcloud/ods-cdk) which provides public non component related utilities.`]}),`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:`common`}),` libs (@ovhcloud/ods-common-[core|stencil|testing|theming]) which provides internal helpers.`]}),`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:`components`}),` (@ovhcloud/ods-components or @ovhcloud/ods-component-`,(0,r.jsx)(t.code,{children:`<component-name>`}),`) which provide the agnostic components and their React, Vue wrapped versions.`]}),`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:`examples`}),` (@ovhcloud/ods-starter-[react|react-vite|vue-vite]) which contains application examples that use some ODS components.`]}),`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:`shared-dependencies`}),` to share common dependencies internally accross projects.`]}),`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:`storybook`}),` (@ovhcloud/ods-storybook) which tends to centralize all the ODS documentation content.`]}),`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:`themes`}),` (@ovhcloud/ods-theme-blue-jeans) which provides all existing themes that can be applied to ODS.`]}),`
`]}),`
`,(0,r.jsx)(a,{label:`Component changes`,level:3}),`
`,(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:`All Components`})}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsxs)(t.li,{children:[`
`,(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:`@ovhcloud/ods-stencil`}),` package does not exists anymore.`]}),`
`]}),`
`,(0,r.jsxs)(t.li,{children:[`
`,(0,r.jsxs)(t.p,{children:[`Components are now accessible by adding either `,(0,r.jsx)(t.code,{children:`@ovhcloud/ods-component-<component>`}),` or `,(0,r.jsx)(t.code,{children:`@ovhcloud/ods-components`}),` dependency.`]}),`
`]}),`
`,(0,r.jsxs)(t.li,{children:[`
`,(0,r.jsxs)(t.p,{children:[`All `,(0,r.jsx)(t.code,{children:`@ovhcloud/ods-stencil-<component>`}),` libs have been replaced by `,(0,r.jsx)(t.code,{children:`@ovhcloud/ods-component-<component>`}),`.`]}),`
`]}),`
`,(0,r.jsxs)(t.li,{children:[`
`,(0,r.jsxs)(t.p,{children:[`All `,(0,r.jsx)(t.code,{children:`@ovhcloud/ods-stencil-<component>-react`}),` libs have been replaced by `,(0,r.jsx)(t.code,{children:`@ovhcloud/ods-component-<component>-react`}),`.`]}),`
`]}),`
`,(0,r.jsxs)(t.li,{children:[`
`,(0,r.jsxs)(t.p,{children:[`All `,(0,r.jsx)(t.code,{children:`@ovhcloud/ods-stencil-<component>-vue`}),` libs have been replaced by `,(0,r.jsx)(t.code,{children:`@ovhcloud/ods-component-<component>- vue`}),`.`]}),`
`]}),`
`,(0,r.jsxs)(t.li,{children:[`
`,(0,r.jsx)(t.p,{children:`Constants/Enums have been renamed to follow new naming convention:`}),`
`]}),`
`,(0,r.jsxs)(t.li,{children:[`
`,(0,r.jsx)(t.p,{children:`All constants are now in UPPER_SNAKE_CASE.`}),`
`]}),`
`,(0,r.jsxs)(t.li,{children:[`
`,(0,r.jsx)(t.p,{children:`All objects are now in singular form.`}),`
`]}),`
`,(0,r.jsxs)(t.li,{children:[`
`,(0,r.jsx)(t.p,{children:`All lists are now in plural form.`}),`
`]}),`
`]}),`
`,(0,r.jsxs)(t.p,{children:[`Ex:
`,(0,r.jsx)(t.code,{children:`OdsSpinnerSize`}),` is now `,(0,r.jsx)(t.code,{children:`ODS_SPINNER_SIZE`}),`.
`,(0,r.jsx)(t.code,{children:`OdsSpinnerSizeList`}),` is now `,(0,r.jsx)(t.code,{children:`ODS_SPINNER_SIZES`}),`.
`,(0,r.jsx)(t.code,{children:`OdsSpinnerSizeUnion`}),` has been removed.`]}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsx)(t.li,{children:`Exported types follow also the same naming convention, thus most of them are now in singular form.`}),`
`]}),`
`,(0,r.jsxs)(t.p,{children:[`Ex:
`,(0,r.jsx)(t.code,{children:`OdsSpinnerAttributes`}),` is now `,(0,r.jsx)(t.code,{children:`OdsSpinnerAttribute`}),`.`]}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsx)(t.li,{children:`A lot of empty types who were exported previously have been removed.`}),`
`]}),`
`,(0,r.jsxs)(t.p,{children:[`Ex:
`,(0,r.jsx)(t.code,{children:`OdsSpinnerEvents`}),` have been removed, as the component does not handle any events.
`,(0,r.jsx)(t.code,{children:`OdsSpinnerMethods`}),` have been removed, as the component does not expose any methods.`]}),`
`,(0,r.jsx)(a,{label:`New component`,level:3}),`
`,(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:`Clipboard`})}),`
`,(0,r.jsx)(i,{to:`/components/clipboard`,children:`See Documentation`}),`
`,(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:`Menu`})}),`
`,(0,r.jsx)(t.p,{children:`See documentation using version selector`}),`
`,(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:`Modal`})}),`
`,(0,r.jsx)(i,{to:`/components/modal`,children:`See Documentation`}),`
`,(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:`Search Bar`})}),`
`,(0,r.jsx)(t.p,{children:`See documentation using version selector`}),`
`,(0,r.jsx)(a,{label:`Features changes`,level:3}),`
`,(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:`Button`})}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsxs)(t.li,{children:[`Add a new attribute `,(0,r.jsx)(t.code,{children:`textAlign`}),` which allows to choose the button text alignement between `,(0,r.jsx)(t.code,{children:`center`}),`, `,(0,r.jsx)(t.code,{children:`end`}),` and `,(0,r.jsx)(t.code,{children:`start`}),`.`]}),`
`]}),`
`,(0,r.jsx)(a,{label:`Bug fixes`,level:3}),`
`,(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:`Button`})}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsx)(t.li,{children:`Main slot is now correctly aligned vertically (visible when using icon).`}),`
`]}),`
`,(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:`Flag`})}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsx)(t.li,{children:`Flags are now correctly displayed in the documentation.`}),`
`]}),`
`,(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:`Link`})}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsx)(t.li,{children:`Outline is now correctly updated on viewport change.`}),`
`]})]})}function a(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(i,{...e})}):i(e)}function o(e,t){throw Error(`Expected `+(t?`component`:`object`)+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}export{a as default};