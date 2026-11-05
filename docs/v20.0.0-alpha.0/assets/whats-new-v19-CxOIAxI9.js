import{i as e}from"./rolldown-runtime-Dd_uD5pT.js";import{t}from"./jsx-runtime-DREnUpxT.js";import{T as n}from"./index-CdRG7ZE_.js";var r=e(t());function i(e){let t={code:`code`,em:`em`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components},{DocLink:i,ExternalLink:a,Heading:s,Message:c,MessageBody:l,MessageIcon:u}=t;return i||o(`DocLink`,!0),a||o(`ExternalLink`,!0),s||o(`Heading`,!0),c||o(`Message`,!0),l||o(`MessageBody`,!0),u||o(`MessageIcon`,!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.p,{children:(0,r.jsxs)(t.em,{children:[`Release notes of v19. For the current major version, see `,(0,r.jsx)(i,{to:`/guides/whats-new`,children:`What's new`}),`.`]})}),`
`,(0,r.jsx)(s,{label:`v19.7.3`,level:2}),`
`,(0,r.jsx)(s,{label:`Bug fixes`,level:3}),`
`,(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:`Datatable`})}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsx)(t.li,{children:`Fix z-index conflicts with sticky header and pinned columns.`}),`
`]}),`
`,(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:`Combobox`})}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsx)(t.li,{children:`Allow controlled combobox to be cleared programmatically`}),`
`]}),`
`,(0,r.jsx)(s,{label:`v19.7.2`,level:2}),`
`,(0,r.jsx)(s,{label:`Tooling`,level:3}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsxs)(t.li,{children:[`Package manager migrated from Yarn to `,(0,r.jsx)(t.strong,{children:`pnpm`}),`.`]}),`
`,(0,r.jsx)(t.li,{children:`CI pipeline optimized.`}),`
`]}),`
`,(0,r.jsx)(s,{label:`v19.7.1`,level:2}),`
`,(0,r.jsx)(s,{label:`Bug fixes`,level:3}),`
`,(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:`PromptInput`})}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsx)(t.li,{children:`Browser feature detection no longer throws in jsdom or Node.js environments.`}),`
`]}),`
`,(0,r.jsx)(s,{label:`v19.7.0`,level:2}),`
`,(0,r.jsx)(s,{label:`New components`,level:3}),`
`,(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:`Avatar`})}),`
`,(0,r.jsxs)(t.p,{children:[(0,r.jsx)(i,{to:`/components/avatar`,children:`See Documentation`}),`.`]}),`
`,(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:`DataTable`})}),`
`,(0,r.jsxs)(t.p,{children:[(0,r.jsx)(i,{to:`/components/data-table`,children:`See Documentation`}),`.`]}),`
`,(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:`FileThumbnail`})}),`
`,(0,r.jsxs)(t.p,{children:[(0,r.jsx)(i,{to:`/components/file-thumbnail`,children:`See Documentation`}),`.`]}),`
`,(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:`Markdown`})}),`
`,(0,r.jsxs)(t.p,{children:[(0,r.jsx)(i,{to:`/components/markdown`,children:`See Documentation`}),`.`]}),`
`,(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:`MessageBubble`})}),`
`,(0,r.jsxs)(t.p,{children:[(0,r.jsx)(i,{to:`/components/message-bubble`,children:`See Documentation`}),`.`]}),`
`,(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:`PromptInput`})}),`
`,(0,r.jsxs)(t.p,{children:[(0,r.jsx)(i,{to:`/components/prompt-input`,children:`See Documentation`}),`.`]}),`
`,(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:`QueryFilter`})}),`
`,(0,r.jsxs)(t.p,{children:[(0,r.jsx)(i,{to:`/components/query-filter`,children:`See Documentation`}),`.`]}),`
`,(0,r.jsx)(s,{label:`New recipes`,level:3}),`
`,(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:`Data Grid with Query Filter`})}),`
`,(0,r.jsxs)(t.p,{children:[(0,r.jsx)(i,{to:`/recipes/components`,children:`See Recipes`}),`.`]}),`
`,(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:`Chat`})}),`
`,(0,r.jsxs)(t.p,{children:[(0,r.jsx)(i,{to:`/recipes/components`,children:`See Recipes`}),`.`]}),`
`,(0,r.jsx)(s,{label:`Feature updates`,level:3}),`
`,(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:`Compound components`})}),`
`,(0,r.jsx)(t.p,{children:`ODS now offers different ways to be imported in your project, either through the main export that provides everything (like in previous version) or per-component.`}),`
`,(0,r.jsx)(t.p,{children:`The current way:`}),`
`,(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:`language-tsx`,children:`import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@ovhcloud/ods-react';

<Accordion>
  <AccordionItem value="0">
    <AccordionTrigger>
      Hello World!
    </AccordionTrigger>
    <AccordionContent>
      Lorem ipsum dolor sit amet.
    </AccordionContent>
  </AccordionItem>
</Accordion>
`})}),`
`,(0,r.jsx)(t.p,{children:`The per-component way:`}),`
`,(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:`language-tsx`,children:`import { Accordion } from '@ovhcloud/ods-react/accordion';

<Accordion>
  <Accordion.Item value="0">
    <Accordion.Trigger>
      Hello World!
    </Accordion.Trigger>
    <Accordion.Content>
      Lorem ipsum dolor sit amet.
    </Accordion.Content>
  </Accordion.Item>
</Accordion>
`})}),`
`,(0,r.jsx)(t.p,{children:`We did test on a bunch of different bundler configuration to ensure that the tree-shaking is still working as expected and that existing
configuration will not be impacted.`}),`
`,(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:`Clipboard`})}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsxs)(t.li,{children:[`New attribute `,(0,r.jsx)(t.code,{children:`positionerStyle`}),` has been added.`]}),`
`]}),`
`,(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:`Code`})}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsx)(t.li,{children:`Copy button is now sticky when content is scrollable.`}),`
`,(0,r.jsxs)(t.li,{children:[`New attribute `,(0,r.jsx)(t.code,{children:`positionerStyle`}),` has been added.`]}),`
`]}),`
`,(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:`Combobox`})}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsxs)(t.li,{children:[`New attributes `,(0,r.jsx)(t.code,{children:`open`}),`, `,(0,r.jsx)(t.code,{children:`defaultOpen`}),` and `,(0,r.jsx)(t.code,{children:`onOpenChange`}),` have been added.`]}),`
`,(0,r.jsxs)(t.li,{children:[`New attribute `,(0,r.jsx)(t.code,{children:`overlayConfig`}),` has been added, with `,(0,r.jsx)(t.code,{children:`flip`}),` and `,(0,r.jsx)(t.code,{children:`sameWidth`}),` options.`]}),`
`]}),`
`,(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:`Datepicker`})}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsxs)(t.li,{children:[`New attribute `,(0,r.jsx)(t.code,{children:`onOpenChange`}),` has been added.`]}),`
`,(0,r.jsxs)(t.li,{children:[`New attribute `,(0,r.jsx)(t.code,{children:`overlayConfig`}),` has been added, with a `,(0,r.jsx)(t.code,{children:`flip`}),` option.`]}),`
`]}),`
`,(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:`Divider`})}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsxs)(t.li,{children:[`New attribute `,(0,r.jsx)(t.code,{children:`orientation`}),` has been added to support vertical dividers.`]}),`
`]}),`
`,(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:`Helpers`})}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsxs)(t.li,{children:[`New helper function `,(0,r.jsx)(t.code,{children:`formatRelativeTime`}),` has been added.`]}),`
`]}),`
`,(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:`Icon`})}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsxs)(t.li,{children:[`Add the following new icons: `,(0,r.jsx)(t.code,{children:`accessibility`}),`, `,(0,r.jsx)(t.code,{children:`accessibility-full`}),`, `,(0,r.jsx)(t.code,{children:`paperclip`}),`, `,(0,r.jsx)(t.code,{children:`pause`}),`, `,(0,r.jsx)(t.code,{children:`pause-full`}),`, `,(0,r.jsx)(t.code,{children:`phone`}),`, `,(0,r.jsx)(t.code,{children:`play`}),`, `,(0,r.jsx)(t.code,{children:`play-full`}),`, `,(0,r.jsx)(t.code,{children:`stop`}),`, `,(0,r.jsx)(t.code,{children:`stop-full`}),`, `,(0,r.jsx)(t.code,{children:`theme`}),`.`]}),`
`]}),`
`,(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:`Menu`})}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsxs)(t.li,{children:[`New attribute `,(0,r.jsx)(t.code,{children:`overlayConfig`}),` has been added, with `,(0,r.jsx)(t.code,{children:`flip`}),`, `,(0,r.jsx)(t.code,{children:`gutter`}),` and `,(0,r.jsx)(t.code,{children:`sameWidth`}),` options.`]}),`
`]}),`
`,(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:`Pagination`})}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsx)(t.li,{children:`New page selector feature has been added.`}),`
`]}),`
`,(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:`Popover`})}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsxs)(t.li,{children:[`New attribute `,(0,r.jsx)(t.code,{children:`overlayConfig`}),` has been added, with a `,(0,r.jsx)(t.code,{children:`flip`}),` option.`]}),`
`]}),`
`,(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:`ProgressBar`})}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsxs)(t.li,{children:[`New `,(0,r.jsx)(t.code,{children:`indeterminate`}),` value has been added.`]}),`
`]}),`
`,(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:`Select`})}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsxs)(t.li,{children:[`New attributes `,(0,r.jsx)(t.code,{children:`open`}),`, `,(0,r.jsx)(t.code,{children:`defaultOpen`}),` and `,(0,r.jsx)(t.code,{children:`onOpenChange`}),` have been added.`]}),`
`,(0,r.jsxs)(t.li,{children:[`New attribute `,(0,r.jsx)(t.code,{children:`overlayConfig`}),` has been added, with a `,(0,r.jsx)(t.code,{children:`flip`}),` option.`]}),`
`]}),`
`,(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:`Tooltip`})}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsxs)(t.li,{children:[`New attribute `,(0,r.jsx)(t.code,{children:`overlayConfig`}),` has been added, with `,(0,r.jsx)(t.code,{children:`flip`}),`, `,(0,r.jsx)(t.code,{children:`gutter`}),` and `,(0,r.jsx)(t.code,{children:`sameWidth`}),` options.`]}),`
`]}),`
`,(0,r.jsx)(s,{label:`Bug fixes`,level:3}),`
`,(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:`Accordion`})}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsx)(t.li,{children:`Trigger text can now be selected.`}),`
`]}),`
`,(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:`Cart`})}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsx)(t.li,{children:`Remove button is now aligned with the label.`}),`
`,(0,r.jsx)(t.li,{children:`Item price is now correctly aligned to the right.`}),`
`]}),`
`,(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:`Combobox`})}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsx)(t.li,{children:`Caret click no longer triggers a form submit.`}),`
`]}),`
`,(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:`Datepicker`})}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsx)(t.li,{children:`Text input display bug has been fixed.`}),`
`]}),`
`,(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:`Font`})}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsx)(t.li,{children:`Variable weight declaration has been fixed.`}),`
`]}),`
`,(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:`Meter`})}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsx)(t.li,{children:`Track container no longer overflows.`}),`
`]}),`
`,(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:`Table`})}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsx)(t.li,{children:`Sticky header border issue on scroll has been fixed.`}),`
`]}),`
`,(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:`Textarea`})}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsx)(t.li,{children:`Placeholder now uses the theme color.`}),`
`]}),`
`,(0,r.jsx)(s,{label:`Documentation improvements`,level:3}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsx)(t.li,{children:`Tech anatomy sections are now dynamic.`}),`
`,(0,r.jsx)(t.li,{children:`Icon gallery has been improved.`}),`
`]}),`
`,(0,r.jsx)(s,{label:`v19.6.1`,level:2}),`
`,(0,r.jsx)(s,{label:`Feature updates`,level:3}),`
`,(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:`Menu`})}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsx)(t.li,{children:`handle disabled state on MenuItem.`}),`
`]}),`
`,(0,r.jsx)(s,{label:`Bug fixes`,level:3}),`
`,(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:`Combobox`})}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsx)(t.li,{children:`Hide caret button from screen readers.`}),`
`]}),`
`,(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:`FileUpload`})}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsx)(t.li,{children:`Update file item size color to a valid contrasted one.`}),`
`]}),`
`,(0,r.jsx)(s,{label:`v19.6.0`,level:2}),`
`,(0,r.jsx)(s,{label:`New components`,level:3}),`
`,(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:`Cart`})}),`
`,(0,r.jsxs)(t.p,{children:[(0,r.jsx)(i,{to:`/components/cart`,children:`See Documentation`}),`.`]}),`
`,(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:`Menu`})}),`
`,(0,r.jsxs)(t.p,{children:[(0,r.jsx)(i,{to:`/components/menu`,children:`See Documentation`}),`.`]}),`
`,(0,r.jsx)(s,{label:`New recipes`,level:3}),`
`,(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:`Dashboard Card`})}),`
`,(0,r.jsxs)(t.p,{children:[(0,r.jsx)(i,{to:`/recipes/components`,children:`See Recipes`}),`.`]}),`
`,(0,r.jsx)(s,{label:`Design updates`,level:3}),`
`,(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:`Theme`})}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsxs)(t.li,{children:[`New token `,(0,r.jsx)(t.code,{children:`--ods-theme-chart-axis-color`}),` has been added.`]}),`
`,(0,r.jsxs)(t.li,{children:[`New token `,(0,r.jsx)(t.code,{children:`--ods-theme-chart-background-color`}),` has been added.`]}),`
`,(0,r.jsxs)(t.li,{children:[`New token `,(0,r.jsx)(t.code,{children:`--ods-theme-chart-grid-color`}),` has been added.`]}),`
`,(0,r.jsxs)(t.li,{children:[`New token `,(0,r.jsx)(t.code,{children:`--ods-theme-chart-legend-color`}),` has been added.`]}),`
`,(0,r.jsxs)(t.li,{children:[`New token `,(0,r.jsx)(t.code,{children:`--ods-theme-chart-reference-line-color`}),` has been added.`]}),`
`,(0,r.jsxs)(t.li,{children:[`New token `,(0,r.jsx)(t.code,{children:`--ods-theme-chart-tick-color`}),` has been added.`]}),`
`]}),`
`,(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:`Combobox`})}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsx)(t.li,{children:`A caret is now displayed on the right side of the control.`}),`
`]}),`
`,(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:`Toaster`})}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsx)(t.li,{children:`Toasts are now animated.`}),`
`]}),`
`,(0,r.jsx)(s,{label:`Feature updates`,level:3}),`
`,(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:`Icon`})}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsx)(t.li,{children:`Add the following new icons: brain, diagnostic, handshake, headphones, keyboard, reddit, ssl-key, snowflake, suitcase, target, user-full`}),`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:`user`}),` icon has been changed, previous icon is now called `,(0,r.jsx)(t.code,{children:`user-full`}),`.`]}),`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:`mic-off`}),` and `,(0,r.jsx)(t.code,{children:`pin-off`}),` icons have been updated.`]}),`
`]}),`
`,(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:`Tag`})}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsxs)(t.li,{children:[`New attribute `,(0,r.jsx)(t.code,{children:`icon`}),` has been added.`]}),`
`]}),`
`,(0,r.jsx)(s,{label:`Bug fixes`,level:3}),`
`,(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:`Accordion`})}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsx)(t.li,{children:`Content style now inherit only bottom border-radius.`}),`
`]}),`
`,(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:`Combobox`})}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:`disable`}),` has been remove from `,(0,r.jsx)(t.code,{children:`ComboboxOptionItem`}),` and `,(0,r.jsx)(t.code,{children:`ComboboxGroupItem`}),` interfaces, as they weren't doing anything.`]}),`
`]}),`
`,(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:`Menu`})}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsx)(t.li,{children:`Arrow tip dom has been changed to inherit content background color.`}),`
`]}),`
`,(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:`Popover`})}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsx)(t.li,{children:`Arrow tip dom has been changed to inherit content background color.`}),`
`]}),`
`,(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:`Tooltip`})}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsx)(t.li,{children:`Arrow tip dom has been changed to inherit content background color.`}),`
`]}),`
`,(0,r.jsx)(s,{label:`Documentation improvements`,level:3}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsxs)(t.li,{children:[`A new guide `,(0,r.jsx)(t.code,{children:`Form Guidelines`}),` has been added to the documentation.`]}),`
`,(0,r.jsxs)(t.li,{children:[`A new guide `,(0,r.jsx)(t.code,{children:`Chart Guidelines`}),` has been added to the documentation.`]}),`
`,(0,r.jsx)(t.li,{children:`A new separated LLM documentation for every components has been added.`}),`
`,(0,r.jsx)(t.li,{children:`Fix mixin import example.`}),`
`,(0,r.jsx)(t.li,{children:`Fix some code examples that weren't displaying false boolean attribute.`}),`
`]}),`
`,(0,r.jsx)(s,{label:`v19.5.0`,level:2}),`
`,(0,r.jsx)(s,{label:`New components`,level:3}),`
`,(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:`Editable`})}),`
`,(0,r.jsxs)(t.p,{children:[(0,r.jsx)(i,{to:`/components/editable`,children:`See Documentation`}),`.`]}),`
`,(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:`Logo`})}),`
`,(0,r.jsxs)(t.p,{children:[(0,r.jsx)(i,{to:`/components/logo`,children:`See Documentation`}),`.`]}),`
`,(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:`Tile`})}),`
`,(0,r.jsxs)(t.p,{children:[(0,r.jsx)(i,{to:`/components/tile`,children:`See Documentation`}),`.`]}),`
`,(0,r.jsx)(s,{label:`New recipes`,level:3}),`
`,(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:`Config Tile`})}),`
`,(0,r.jsxs)(t.p,{children:[(0,r.jsx)(i,{to:`/recipes/components`,children:`See Recipes`}),`.`]}),`
`,(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:`Feature List Product Card`})}),`
`,(0,r.jsxs)(t.p,{children:[(0,r.jsx)(i,{to:`/recipes/components`,children:`See Recipes`}),`.`]}),`
`,(0,r.jsx)(s,{label:`Design updates`,level:3}),`
`,(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:`Theme`})}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsxs)(t.li,{children:[`New token `,(0,r.jsx)(t.code,{children:`--ods-theme-brand-color`}),` has been added.`]}),`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:`ods-color-promotion`}),` has been updated to a new value.`]}),`
`]}),`
`,(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:`Accordion`})}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsx)(t.li,{children:`Now has a default border radius.`}),`
`]}),`
`,(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:`Badge`})}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:`--ods-badge-text-color-promotion`}),` token as been updated to match new promotion color.`]}),`
`,(0,r.jsx)(t.li,{children:`Badge sizes and padding have been adjusted.`}),`
`]}),`
`,(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:`Modal`})}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsx)(t.li,{children:`Header is now a colorless element that can contain actual content.`}),`
`]}),`
`,(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:`Tag`})}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsx)(t.li,{children:`Tag sizes and padding have been adjusted.`}),`
`]}),`
`,(0,r.jsx)(s,{label:`Feature updates`,level:3}),`
`,(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:`Overlays z-index`}),`
In previous version of ODS, `,(0,r.jsx)(t.code,{children:`Drawer`}),` and `,(0,r.jsx)(t.code,{children:`Modal`}),` z-indexes were set to a lesser value than other overlay elements (popover, select, ...).
This was allowing those to display correctly when set inside a modal.
But this was causing an issue when, for example, a popover was kept open behind a modal, as it will be visible above the modal backdrop.`]}),`
`,(0,r.jsxs)(t.p,{children:[`Starting from this version, `,(0,r.jsx)(t.code,{children:`Drawer`}),` and `,(0,r.jsx)(t.code,{children:`Modal`}),` z-indexes are now greater than other overlay elements.
This may cause issue with your current usage of overlay elements inside `,(0,r.jsx)(t.code,{children:`Modal`}),`.`]}),`
`,(0,r.jsxs)(t.p,{children:[`To use such element correctly, you'll have to set the `,(0,r.jsx)(t.code,{children:`createPortal={ false }`}),` on overlay elements inside `,(0,r.jsx)(t.code,{children:`Modal`}),`.
You can see some examples on the `,(0,r.jsx)(i,{to:`/components/modal`,children:`Modal Technical Page`}),`.`]}),`
`,(0,r.jsxs)(t.p,{children:[`We've also added a `,(0,r.jsx)(t.code,{children:`positionerStyle`}),` attribute on all overlay elements to allow you to override the positioner style and set up your own `,(0,r.jsx)(t.code,{children:`z-index`}),` values if needed.`]}),`
`,(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:`Accordion`})}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsxs)(t.li,{children:[`New attribute `,(0,r.jsx)(t.code,{children:`expandIconPosition`}),` has been added.`]}),`
`]}),`
`,(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:`Datepicker`})}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsxs)(t.li,{children:[`New attribute `,(0,r.jsx)(t.code,{children:`positionerStyle`}),` has been added.`]}),`
`]}),`
`,(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:`Drawer`})}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsxs)(t.li,{children:[`New attribute `,(0,r.jsx)(t.code,{children:`positionerStyle`}),` has been added.`]}),`
`]}),`
`,(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:`Form Field`})}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsxs)(t.li,{children:[`New composition component `,(0,r.jsx)(t.code,{children:`FormFieldLabelSubLabel`}),` has been added.`]}),`
`]}),`
`,(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:`Modal`})}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsxs)(t.li,{children:[`New attribute `,(0,r.jsx)(t.code,{children:`backdropStyle`}),` has been added.`]}),`
`,(0,r.jsxs)(t.li,{children:[`New attribute `,(0,r.jsx)(t.code,{children:`positionerStyle`}),` has been added.`]}),`
`,(0,r.jsxs)(t.li,{children:[`New composition component `,(0,r.jsx)(t.code,{children:`ModalHeader`}),` has been added.`]}),`
`,(0,r.jsx)(t.li,{children:`You can now setup your own modal header with a custom node.`}),`
`,(0,r.jsx)(t.li,{children:`[DEPRECATED] Color attribute is not used anymore, as modal header doesn't have any color anymore.`}),`
`]}),`
`,(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:`Popover`})}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsxs)(t.li,{children:[`New attribute `,(0,r.jsx)(t.code,{children:`positionerStyle`}),` has been added.`]}),`
`]}),`
`,(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:`Select`})}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsxs)(t.li,{children:[`New attribute `,(0,r.jsx)(t.code,{children:`positionerStyle`}),` has been added.`]}),`
`]}),`
`,(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:`Tooltip`})}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsxs)(t.li,{children:[`New attribute `,(0,r.jsx)(t.code,{children:`positionerStyle`}),` has been added.`]}),`
`]}),`
`,(0,r.jsx)(s,{label:`Recipe changes`,level:3}),`
`,(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:`Feature List`}),`
`,(0,r.jsx)(t.strong,{children:`Order Button`}),`
`,(0,r.jsx)(t.strong,{children:`Product Card`})]}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsx)(t.li,{children:`Style have updated with latest design requirements, mostly text changes and tooltip alignment.`}),`
`]}),`
`,(0,r.jsx)(s,{label:`Documentation improvements`,level:3}),`
`,(0,r.jsxs)(t.p,{children:[`A new page `,(0,r.jsx)(t.code,{children:`Roadmap`}),` has been added to the documentation.
You can refer to it to have an overview of what we're working on and what you could expect for the future ODS releases.
Please note that this page may be updated in case of major priority changes, outside of an ODS version release.`]}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsxs)(t.li,{children:[`Medium examples have been updated as they were the same as `,(0,r.jsx)(t.code,{children:`Logo`}),`.`]}),`
`]}),`
`,(0,r.jsx)(s,{label:`Miscellaneous`,level:3}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsxs)(t.li,{children:[`Remove console warning about `,(0,r.jsx)(t.code,{children:`Modal`}),` color depreciation, as it was print even if color wasn't set.`]}),`
`]}),`
`,(0,r.jsx)(s,{label:`v19.4.1`,level:2}),`
`,(0,r.jsx)(s,{label:`Bug fixes`,level:3}),`
`,(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:`Datepicker`})}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsxs)(t.li,{children:[`Overriding `,(0,r.jsx)(t.code,{children:`display`}),` on `,(0,r.jsx)(t.code,{children:`DatepickerContent`}),` now won't cause any closing issue.`]}),`
`]}),`
`,(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:`Drawer`})}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsxs)(t.li,{children:[`Overriding `,(0,r.jsx)(t.code,{children:`opacity`}),` on `,(0,r.jsx)(t.code,{children:`DrawerContent`}),` now won't cause any closing issue.`]}),`
`]}),`
`,(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:`Modal`})}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsxs)(t.li,{children:[`Overriding `,(0,r.jsx)(t.code,{children:`display`}),` on `,(0,r.jsx)(t.code,{children:`ModalContent`}),` now won't cause any closing issue.`]}),`
`]}),`
`,(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:`Popover`})}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsxs)(t.li,{children:[`Overriding `,(0,r.jsx)(t.code,{children:`display`}),` on `,(0,r.jsx)(t.code,{children:`PopoverContent`}),` now won't cause any closing issue.`]}),`
`]}),`
`,(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:`Range`})}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsx)(t.li,{children:`Fix infinite loop that may occurs on dual range.`}),`
`]}),`
`,(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:`Select`})}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsxs)(t.li,{children:[`Overriding `,(0,r.jsx)(t.code,{children:`display`}),` on `,(0,r.jsx)(t.code,{children:`SelectContent`}),` now won't cause any closing issue.`]}),`
`]}),`
`,(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:`Tooltip`})}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsxs)(t.li,{children:[`Overriding `,(0,r.jsx)(t.code,{children:`display`}),` on `,(0,r.jsx)(t.code,{children:`TooltipContent`}),` now won't cause any closing issue.`]}),`
`]}),`
`,(0,r.jsx)(s,{label:`v19.4.0`,level:2}),`
`,(0,r.jsx)(s,{label:`New features`,level:3}),`
`,(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:`Helpers`})}),`
`,(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:`@ovhcloud/ods-react`}),` package now expose the following helper functions:`]}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:`formatPrice`}),`: useful to format an amount into a price with currency for a given locale.`]}),`
`]}),`
`,(0,r.jsx)(t.p,{children:`You can find more information about helpers on the new dedicated section in the documentation.`}),`
`,(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:`Recipes`})}),`
`,(0,r.jsx)(t.p,{children:`Recipes are ready-to-use UI patterns built with ODS components.
They provide pre-implemented code snippets for common use cases, helping you build consistent interfaces faster.
Each recipe may include multiple implementations, so you can choose the styling approach that fits your project.`}),`
`,(0,r.jsx)(t.p,{children:`We're still iterating on the whole recipe system to ensure it fits integrator needs.
Feel free to share with us your feedback with your own experience while using those recipes.`}),`
`,(0,r.jsx)(t.p,{children:`You can find more information about recipes on the new dedicated section in the documentation.`}),`
`,(0,r.jsx)(s,{label:`New components`,level:3}),`
`,(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:`Button Group`})}),`
`,(0,r.jsxs)(t.p,{children:[(0,r.jsx)(i,{to:`/components/button-group`,children:`See Documentation`}),`.`]}),`
`,(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:`Kbd`})}),`
`,(0,r.jsxs)(t.p,{children:[(0,r.jsx)(i,{to:`/components/kbd`,children:`See Documentation`}),`.`]}),`
`,(0,r.jsx)(s,{label:`Design updates`,level:3}),`
`,(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:`Tabs`})}),`
`,(0,r.jsxs)(c,{status:`warning`,dismissible:!1,style:{width:`100%`},children:[(0,r.jsx)(u,{name:`triangle-exclamation`}),(0,r.jsx)(l,{children:(0,r.jsx)(t.p,{children:`This change may impact your layouts.`})})]}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsx)(t.li,{children:`Default tabs height have been increased.`}),`
`]}),`
`,(0,r.jsx)(s,{label:`Feature updates`,level:3}),`
`,(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:`Icon`})}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsx)(t.li,{children:`Add 17 new icons.`}),`
`]}),`
`,(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:`Switch`})}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsxs)(t.li,{children:[`[DEPRECATED] Whole component is now deprecated, you can use the new Tabs `,(0,r.jsx)(t.code,{children:`switch`}),` variant instead.`]}),`
`]}),`
`,(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:`Tabs`})}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsxs)(t.li,{children:[`New attribute `,(0,r.jsx)(t.code,{children:`size`}),` has been added.`]}),`
`,(0,r.jsxs)(t.li,{children:[`New attribute `,(0,r.jsx)(t.code,{children:`variant`}),` has been added.`]}),`
`]}),`
`,(0,r.jsx)(s,{label:`Bug fixes`,level:3}),`
`,(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:`AI Agents`})}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsx)(t.li,{children:`LLM files now contain all the relevant Storybook pages.`}),`
`]}),`
`,(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:`Code`})}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsx)(t.li,{children:`Highlighter instance is now correctly cleaned on unmount.`}),`
`]}),`
`,(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:`Combobox`})}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsx)(t.li,{children:`Prevent content close on scrollbar click.`}),`
`,(0,r.jsx)(t.li,{children:`Active option is now automatically scrolled into view.`}),`
`]}),`
`,(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:`FileUpload`})}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsx)(t.li,{children:`Use correct role on file item error.`}),`
`]}),`
`,(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:`Range`})}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsx)(t.li,{children:`Prevent thumb focus when value is changed by external sources.`}),`
`]}),`
`,(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:`Select`})}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsx)(t.li,{children:`Value text and placeholder are now ellipse by default.`}),`
`]}),`
`,(0,r.jsx)(s,{label:`v19.3.0`,level:2}),`
`,(0,r.jsx)(s,{label:`New components`,level:3}),`
`,(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:`Toaster`})}),`
`,(0,r.jsx)(i,{to:`/components/toaster`,children:`See Documentation`}),`
`,(0,r.jsx)(s,{label:`Design updates`,level:3}),`
`,(0,r.jsx)(t.p,{children:`ODS theme design tokens have been reworked to be more semantic.
It is now easier to understand how each token should be used.
Each component have been updated accordingly and are now more normalized design-wise.
Each component now also expose custom tokens that may be used to override rendering on a component-level.`}),`
`,(0,r.jsx)(t.p,{children:`All those changes are the first major step towards a complete reworked theme that aims to provide more consistency, easier customization and understanding.`}),`
`,(0,r.jsx)(t.p,{children:`[DEPRECATED] Previous design tokens should be replaced by the corresponding theme tokens.`}),`
`,(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:`Accordion`})}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsx)(t.li,{children:`Border color has been changed and is now the same for every component states.`}),`
`]}),`
`,(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:`Combobox`})}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:`invalid`}),` overlay now uses the critical color.`]}),`
`]}),`
`,(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:`File Upload`})}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsxs)(t.li,{children:[`A more compact version is now available (using `,(0,r.jsx)(t.code,{children:`variant`}),` attribute).`]}),`
`,(0,r.jsx)(t.li,{children:`Existing layout has been updated to be more compact.`}),`
`]}),`
`,(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:`Message`})}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsx)(t.li,{children:`Light messages now have a colored border.`}),`
`]}),`
`,(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:`Range`})}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsx)(t.li,{children:`Track color now is the same as other track elements.`}),`
`,(0,r.jsx)(t.li,{children:`Cursor has been changed to default (as in native).`}),`
`,(0,r.jsx)(t.li,{children:`Thumb background color change on hover/focus/drag has been removed.`}),`
`]}),`
`,(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:`Select`})}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:`invalid`}),` overlay now uses the critical color.`]}),`
`,(0,r.jsx)(t.li,{children:`Groups are now separated by a border.`}),`
`]}),`
`,(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:`Skeleton`})}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsx)(t.li,{children:`Default background color is now slightly darker.`}),`
`]}),`
`,(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:`Table`})}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsxs)(t.li,{children:[`Default `,(0,r.jsx)(t.code,{children:`min-width`}),` has been removed on mobile view.`]}),`
`]}),`
`,(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:`Text`})}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsxs)(t.li,{children:[`Font size now uses `,(0,r.jsx)(t.code,{children:`rem`}),` instead of `,(0,r.jsx)(t.code,{children:`px`}),`. This will only impact app where the root element `,(0,r.jsx)(t.code,{children:`font-size`}),` is not `,(0,r.jsx)(t.code,{children:`16px`}),`.`]}),`
`]}),`
`,(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:`Toggle`})}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsxs)(t.li,{children:[`Hover effect on `,(0,r.jsx)(t.code,{children:`off`}),` label has been removed.`]}),`
`]}),`
`,(0,r.jsx)(s,{label:`Feature updates`,level:3}),`
`,(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:`Code`})}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsxs)(t.li,{children:[`New attribute `,(0,r.jsx)(t.code,{children:`highlighter`}),` has been added.`]}),`
`,(0,r.jsx)(t.li,{children:`Documentation has been updated with how to setup a custom highlighter.`}),`
`]}),`
`,(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:`Datepicker`})}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:`value`}),` now also accepts `,(0,r.jsx)(t.code,{children:`null`}),` as a value.`]}),`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:`DatepickerValueChangeDetail`}),` `,(0,r.jsx)(t.code,{children:`value`}),` and `,(0,r.jsx)(t.code,{children:`valueAsString`}),` now may be `,(0,r.jsx)(t.code,{children:`null`}),`.`]}),`
`]}),`
`,(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:`Divider`})}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsx)(t.li,{children:`[DEPRECATED] Color attribute will now always be primary, if you need another color, prefer overriding it using css.`}),`
`]}),`
`,(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:`File Upload`})}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsxs)(t.li,{children:[`New attribute `,(0,r.jsx)(t.code,{children:`variant`}),` has been added.`]}),`
`]}),`
`,(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:`Text`})}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsxs)(t.li,{children:[`New attribute `,(0,r.jsx)(t.code,{children:`disabled`}),` has been added.`]}),`
`,(0,r.jsxs)(t.li,{children:[`New preset `,(0,r.jsx)(t.code,{children:`small`}),` has been added.`]}),`
`]}),`
`,(0,r.jsx)(s,{label:`Bug fixes`,level:3}),`
`,(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:`Combobox`})}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsx)(t.li,{children:`Clicking another combobox while focused on another one, now correctly closes the first one.`}),`
`,(0,r.jsx)(t.li,{children:`Controlled value changed externally is now correctly reflected.`}),`
`]}),`
`,(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:`Datepicker`})}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsx)(t.li,{children:`Clear when controlled now works as expected.`}),`
`]}),`
`,(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:`Link`})}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsx)(t.li,{children:`Disabled links do not have an underline animation when hovered.`}),`
`]}),`
`,(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:`Tabs`})}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:`tablist`}),` role now correctly contains only valid children.`]}),`
`,(0,r.jsx)(t.li,{children:`Now doesn't automatically scroll to the component on render.`}),`
`]}),`
`,(0,r.jsx)(s,{label:`Documentation improvements`,level:3}),`
`,(0,r.jsxs)(t.p,{children:[`A new tool has been added to the documentation, the `,(0,r.jsx)(t.code,{children:`Theme Generator`}),`. This allows users to experiment with the ODS tokens directly in the Storybook. You can preview how each design tokens will impact the components, generate your own color palettes and export/import your custom theme.`]}),`
`,(0,r.jsx)(t.p,{children:`ODS documentation is now available as LLM files to help AI tools to better understand our library and its usage.`}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsx)(t.li,{children:`Add a theme selector on the top left menu.`}),`
`,(0,r.jsx)(t.li,{children:`Implement dark mode documentation.`}),`
`,(0,r.jsxs)(t.li,{children:[`New section `,(0,r.jsx)(t.code,{children:`AI Agents`}),` added to the documentation.`]}),`
`,(0,r.jsx)(t.li,{children:`Design Tokens have been updated and completed with color palettes.`}),`
`,(0,r.jsx)(t.li,{children:`All technical pages have been updated with components custom CSS variables.`}),`
`,(0,r.jsxs)(t.li,{children:[`Icon `,(0,r.jsx)(t.code,{children:`All`}),` page search control now accepts special character.`]}),`
`,(0,r.jsx)(t.li,{children:`Update FAQ.`}),`
`]}),`
`,(0,r.jsx)(s,{label:`v19.2.1`,level:2}),`
`,(0,r.jsx)(s,{label:`Feature updates`,level:3}),`
`,(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:`Combobox`})}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsxs)(t.li,{children:[`New attribute `,(0,r.jsx)(t.code,{children:`customFilter`}),` has been added.`]}),`
`]}),`
`,(0,r.jsx)(s,{label:`Bug fixes`,level:3}),`
`,(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:`Button`})}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsxs)(t.li,{children:[`Use correct border radius for `,(0,r.jsx)(t.code,{children:`sm`}),` size.`]}),`
`]}),`
`,(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:`Input`})}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsx)(t.li,{children:`Normalize border style on hover & focus.`}),`
`]}),`
`,(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:`Password`})}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsx)(t.li,{children:`Normalize border style on hover & focus.`}),`
`]}),`
`,(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:`Tabs`})}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsx)(t.li,{children:`Container bottom border takes the whole width.`}),`
`]}),`
`,(0,r.jsx)(s,{label:`Documentation improvements`,level:3}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsx)(t.li,{children:`Update FAQ.`}),`
`,(0,r.jsx)(t.li,{children:`Remove ToC on Changelog page.`}),`
`]}),`
`,(0,r.jsx)(s,{label:`Miscellaneous`,level:3}),`
`,(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:`Tabs`})}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsxs)(t.li,{children:[`Add a console warning when no `,(0,r.jsx)(t.code,{children:`defaultValue`}),` or `,(0,r.jsx)(t.code,{children:`value`}),` are set.`]}),`
`]}),`
`,(0,r.jsx)(s,{label:`v19.2.0`,level:2}),`
`,(0,r.jsx)(s,{label:`New components`,level:3}),`
`,(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:`Meter`})}),`
`,(0,r.jsx)(i,{to:`/components/meter`,children:`See Documentation`}),`
`,(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:`TreeView`})}),`
`,(0,r.jsx)(i,{to:`/components/tree-view`,children:`See Documentation`}),`
`,(0,r.jsx)(s,{label:`Font changes`,level:3}),`
`,(0,r.jsx)(t.p,{children:`Font files are now accessible as actual files instead of base64 conversion.
This will reduce the size of the ODS style bundle and allow browser resource loading parallelization.`}),`
`,(0,r.jsxs)(t.p,{children:[`Thanks to `,(0,r.jsx)(a,{href:`https://github.com/ennoriel`,children:`Ennoriel`}),` for the contribution.`]}),`
`,(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:`@ovhcloud/ods-react`})}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsxs)(t.li,{children:[`Now exposes a css reset file (using `,(0,r.jsx)(t.code,{children:`import '@ovhcloud/ods-react/normalize-css';`}),`)`]}),`
`]}),`
`,(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:`@ovhcloud/ods-themes`})}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsxs)(t.li,{children:[`Now exposes css without fonts (using `,(0,r.jsx)(t.code,{children:`import '@ovhcloud/ods-themes/default/css';`}),`)`]}),`
`,(0,r.jsxs)(t.li,{children:[`Now exposes font-faces separately (using `,(0,r.jsx)(t.code,{children:`import '@ovhcloud/ods-themes/default/fonts';`}),`)`]}),`
`]}),`
`,(0,r.jsx)(s,{label:`Feature updates`,level:3}),`
`,(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:`@ovhcloud/ods-themes`})}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsxs)(t.li,{children:[`Now exposes design tokens as JSON (using `,(0,r.jsx)(t.code,{children:`import '@ovhcloud/ods-themes/default/tokens';`}),`)`]}),`
`]}),`
`,(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:`File Upload`})}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsx)(t.li,{children:`Improve i18n default translations.`}),`
`]}),`
`,(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:`Icon`})}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsx)(t.li,{children:`Add 40 new icons.`}),`
`]}),`
`,(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:`Password`})}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsx)(t.li,{children:`Improve i18n default translations.`}),`
`]}),`
`,(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:`Phone Number`})}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsx)(t.li,{children:`Improve i18n default translations.`}),`
`]}),`
`,(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:`Popover`})}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsxs)(t.li,{children:[`New attribute `,(0,r.jsx)(t.code,{children:`autoFocus`}),` has been added.`]}),`
`,(0,r.jsxs)(t.li,{children:[`New attribute `,(0,r.jsx)(t.code,{children:`gutter`}),` has been added.`]}),`
`,(0,r.jsxs)(t.li,{children:[`New attribute `,(0,r.jsx)(t.code,{children:`sameWidth`}),` has been added.`]}),`
`,(0,r.jsxs)(t.li,{children:[`New attribute `,(0,r.jsx)(t.code,{children:`onPositionChange`}),` has been added.`]}),`
`,(0,r.jsxs)(t.li,{children:[`New attribute `,(0,r.jsx)(t.code,{children:`triggerId`}),` has been added.`]}),`
`]}),`
`,(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:`Range`})}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsxs)(t.li,{children:[`New attribute `,(0,r.jsx)(t.code,{children:`displayBounds`}),` has been added.`]}),`
`,(0,r.jsxs)(t.li,{children:[`New attribute `,(0,r.jsx)(t.code,{children:`displayTooltip`}),` has been added.`]}),`
`,(0,r.jsx)(t.li,{children:`Ticks now accepts objects with custom labels.`}),`
`,(0,r.jsx)(t.li,{children:`Range component size is now correctly computed, it will fit better in the page rendering flow.`}),`
`]}),`
`,(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:`Tabs`})}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsxs)(t.li,{children:[`New attribute `,(0,r.jsx)(t.code,{children:`withArrows`}),` has been added.`]}),`
`]}),`
`,(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:`Timepicker`})}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsx)(t.li,{children:`Improve i18n default translations.`}),`
`]}),`
`,(0,r.jsx)(s,{label:`Bug fixes`,level:3}),`
`,(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:`Combobox`})}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsx)(t.li,{children:`Has been rewritten internally, but the usage stays the same.`}),`
`,(0,r.jsx)(t.li,{children:`Fix selection behavior issues.`}),`
`,(0,r.jsx)(t.li,{children:`Add style on selected element.`}),`
`,(0,r.jsx)(t.li,{children:`Fix missing style on group separator.`}),`
`]}),`
`,(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:`Input`})}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsx)(t.li,{children:`Clearable now always appears correctly when controlled.`}),`
`]}),`
`,(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:`Quantity`})}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsx)(t.li,{children:`Fix default value stuck when used inside a FormField.`}),`
`]}),`
`,(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:`Range`})}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsx)(t.li,{children:`Update ticks position computation to match thumb size.`}),`
`]}),`
`,(0,r.jsx)(s,{label:`Documentation improvements`,level:3}),`
`,(0,r.jsxs)(t.p,{children:[`A new tool has been added to the documentation, the `,(0,r.jsx)(t.code,{children:`Code sandbox`}),`.
This allows users to experiment with the ODS library directly in the Storybook.
You can also share your sandbox code with others. This is especially useful when trying to reproduce some issue you encounter, but in a smaller dedicated context.`]}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsxs)(t.li,{children:[`New section `,(0,r.jsx)(t.code,{children:`Tools`}),` added to the documentation.`]}),`
`,(0,r.jsx)(t.li,{children:`A sandbox shortcut has been added to every examples.`}),`
`,(0,r.jsx)(t.li,{children:`New dedicated page about Tailwind integration.`}),`
`,(0,r.jsx)(t.li,{children:`Add badges when relevant near navigation menu items.`}),`
`,(0,r.jsx)(t.li,{children:`Update "Get Started" with fonts changes.`}),`
`,(0,r.jsx)(t.li,{children:`Update "Apply ODS Style" with CSS reset.`}),`
`,(0,r.jsx)(t.li,{children:`Update GitHub repository contributing page.`}),`
`,(0,r.jsx)(t.li,{children:`Update FAQ with contribution information.`}),`
`,(0,r.jsx)(t.li,{children:`Multiple typo fixes.`}),`
`]}),`
`,(0,r.jsx)(s,{label:`ODS dependencies upgrade`,level:3}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsxs)(t.li,{children:[`ArkUI bumps from `,(0,r.jsx)(t.code,{children:`5.12.0`}),` to `,(0,r.jsx)(t.code,{children:`5.25.1`}),`.`]}),`
`]}),`
`,(0,r.jsx)(s,{label:`v19.1.0`,level:2}),`
`,(0,r.jsx)(s,{label:`Accessibility improvements`,level:3}),`
`,(0,r.jsx)(s,{label:`a11y`,level:4}),`
`,(0,r.jsx)(t.p,{children:`This version focuses on improving the accessibility for each component.`}),`
`,(0,r.jsxs)(t.p,{children:[`We've implemented all the internal requirements on each component, validated using `,(0,r.jsx)(a,{href:`https://github.com/dequelabs/axe-core`,children:`axe-core`}),` and `,(0,r.jsx)(a,{href:`https://www.npmjs.com/package/lighthouse`,children:`lighthouse`}),`.`]}),`
`,(0,r.jsxs)(t.p,{children:[`Though, ensuring accessibility for your context does require you to use the right `,(0,r.jsx)(t.code,{children:`aria`}),`/`,(0,r.jsx)(t.code,{children:`role`}),`/... attribute at the right place.`]}),`
`,(0,r.jsx)(t.p,{children:`To help you with that, we've added:`}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsxs)(t.li,{children:[`a `,(0,r.jsx)(i,{to:`/guides/accessibility`,children:`guide about accessibility`}),` best practices.`]}),`
`,(0,r.jsxs)(t.li,{children:[`a dedicated `,(0,r.jsx)(t.code,{children:`Accessibility`}),` section on each component `,(0,r.jsx)(t.code,{children:`Documentation`}),` page.`]}),`
`]}),`
`,(0,r.jsx)(s,{label:`i18n`,level:4}),`
`,(0,r.jsxs)(t.p,{children:[`Some components provide internal features that need an explicit context.
For example the clear button on the `,(0,r.jsx)(t.code,{children:`Input`}),` which require an `,(0,r.jsx)(t.code,{children:`aria-label`}),` describing that the button will clear the value.`]}),`
`,(0,r.jsx)(t.p,{children:`We do provide default values for each supported locales to ensure that integrating ODS component as is will already convey the minimal information to impaired users.`}),`
`,(0,r.jsx)(t.p,{children:`You can customize those value further with your own translations.`}),`
`,(0,r.jsxs)(t.p,{children:[`See the related `,(0,r.jsx)(i,{to:`/guides/internationalization`,children:`Internationalization guide`}),` for more information.`]}),`
`,(0,r.jsx)(s,{label:`Design updates`,level:3}),`
`,(0,r.jsxs)(c,{status:`warning`,dismissible:!1,style:{width:`100%`},children:[(0,r.jsx)(u,{name:`triangle-exclamation`}),(0,r.jsx)(l,{children:(0,r.jsx)(t.p,{children:`Some design changes may impact your layouts.`})})]}),`
`,(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:`Breadcrumb`})}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:`fontSize`}),` is now inherited and no more fixed to `,(0,r.jsx)(t.code,{children:`0.875rem`}),`.`]}),`
`]}),`
`,(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:`Checkbox`})}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsx)(t.li,{children:`Added minimal vertical spacing on group.`}),`
`,(0,r.jsxs)(t.li,{children:[`Checkbox size is now `,(0,r.jsx)(t.code,{children:`16px`}),`.`]}),`
`]}),`
`,(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:`Design Tokens`})}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsxs)(t.li,{children:[`New color variants `,(0,r.jsx)(t.code,{children:`-025`}),` and `,(0,r.jsx)(t.code,{children:`-075`}),` have been added.`]}),`
`]}),`
`,(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:`Progress Bar`})}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsx)(t.li,{children:`Now defaults to full width.`}),`
`]}),`
`,(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:`Tag`})}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:`md`}),` height is now `,(0,r.jsx)(t.code,{children:`24px`}),` by default.`]}),`
`]}),`
`,(0,r.jsx)(s,{label:`Feature updates`,level:3}),`
`,(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:`All components`})}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsxs)(t.li,{children:[`A new attribute `,(0,r.jsx)(t.code,{children:`data-ods`}),` has been added to each exposed component, allowing them to be identified in the DOM.`]}),`
`]}),`
`,(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:`Breadcrumb`})}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsxs)(t.li,{children:[`New attribute `,(0,r.jsx)(t.code,{children:`i18n`}),` has been added.`]}),`
`,(0,r.jsxs)(t.li,{children:[`New attribute `,(0,r.jsx)(t.code,{children:`locale`}),` has been added.`]}),`
`]}),`
`,(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:`Button`})}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsx)(t.li,{children:`Improve button contrast for accessibility.`}),`
`]}),`
`,(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:`Clipboard`})}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsxs)(t.li,{children:[`New attribute `,(0,r.jsx)(t.code,{children:`i18n`}),` has been added.`]}),`
`,(0,r.jsxs)(t.li,{children:[`New attribute `,(0,r.jsx)(t.code,{children:`locale`}),` has been added.`]}),`
`]}),`
`,(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:`Combobox`})}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsxs)(t.li,{children:[`Added `,(0,r.jsx)(t.code,{children:`customRendererData`}),` on combobox items.`]}),`
`,(0,r.jsxs)(t.li,{children:[`New attribute `,(0,r.jsx)(t.code,{children:`i18n`}),` has been added.`]}),`
`,(0,r.jsxs)(t.li,{children:[`New attribute `,(0,r.jsx)(t.code,{children:`locale`}),` has been added.`]}),`
`]}),`
`,(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:`Datepicker`})}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsxs)(t.li,{children:[`New attribute `,(0,r.jsx)(t.code,{children:`i18n`}),` has been added.`]}),`
`,(0,r.jsxs)(t.li,{children:[`New attribute `,(0,r.jsx)(t.code,{children:`locale`}),` has been added.`]}),`
`]}),`
`,(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:`File Upload`})}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsxs)(t.li,{children:[`New attribute `,(0,r.jsx)(t.code,{children:`i18n`}),` has been added on `,(0,r.jsx)(t.code,{children:`FileUploadItem`}),`.`]}),`
`,(0,r.jsxs)(t.li,{children:[`New attribute `,(0,r.jsx)(t.code,{children:`locale`}),` has been added.`]}),`
`]}),`
`,(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:`Input`})}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsxs)(t.li,{children:[`New attribute `,(0,r.jsx)(t.code,{children:`i18n`}),` has been added.`]}),`
`,(0,r.jsxs)(t.li,{children:[`New attribute `,(0,r.jsx)(t.code,{children:`locale`}),` has been added.`]}),`
`]}),`
`,(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:`Message`})}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsx)(t.li,{children:`Improve color contrast for accessibility.`}),`
`,(0,r.jsxs)(t.li,{children:[`New attribute `,(0,r.jsx)(t.code,{children:`i18n`}),` has been added.`]}),`
`,(0,r.jsxs)(t.li,{children:[`New attribute `,(0,r.jsx)(t.code,{children:`locale`}),` has been added.`]}),`
`]}),`
`,(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:`Modal`})}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsxs)(t.li,{children:[`New attribute `,(0,r.jsx)(t.code,{children:`i18n`}),` has been added.`]}),`
`,(0,r.jsxs)(t.li,{children:[`New attribute `,(0,r.jsx)(t.code,{children:`initialFocusedElement`}),` has been added.`]}),`
`,(0,r.jsxs)(t.li,{children:[`New attribute `,(0,r.jsx)(t.code,{children:`locale`}),` has been added.`]}),`
`]}),`
`,(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:`Password`})}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsxs)(t.li,{children:[`New attribute `,(0,r.jsx)(t.code,{children:`i18n`}),` has been added.`]}),`
`,(0,r.jsxs)(t.li,{children:[`New attribute `,(0,r.jsx)(t.code,{children:`locale`}),` has been added.`]}),`
`]}),`
`,(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:`Phone Number`})}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsxs)(t.li,{children:[`New attribute `,(0,r.jsx)(t.code,{children:`i18n`}),` has been added.`]}),`
`,(0,r.jsxs)(t.li,{children:[`New attribute `,(0,r.jsx)(t.code,{children:`locale`}),` has been added.`]}),`
`]}),`
`,(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:`Quantity`})}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsx)(t.li,{children:`Increment and decrement buttons are no longer focusable, allowing keyboard navigation to focus solely on the input field for consistent vocalization.`}),`
`]}),`
`,(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:`Select`})}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsxs)(t.li,{children:[`Items `,(0,r.jsx)(t.code,{children:`customData`}),` now accept an optional generic type.`]}),`
`]}),`
`,(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:`Timepicker`})}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsxs)(t.li,{children:[`New attribute `,(0,r.jsx)(t.code,{children:`i18n`}),` has been added.`]}),`
`,(0,r.jsxs)(t.li,{children:[`New attribute `,(0,r.jsx)(t.code,{children:`locale`}),` has been added.`]}),`
`]}),`
`,(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:`Toggle`})}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsxs)(t.li,{children:[`New component `,(0,r.jsx)(t.code,{children:`ToggleControl`}),` has been added.`]}),`
`,(0,r.jsxs)(t.li,{children:[`New component `,(0,r.jsx)(t.code,{children:`ToggleLabel`}),` has been added.`]}),`
`,(0,r.jsxs)(t.li,{children:[`[DEPRECATED] Using `,(0,r.jsx)(t.code,{children:`<Toggle />`}),` alone will still works as expected, though we advise to move to composition using `,(0,r.jsx)(t.code,{children:`ToggleControl`}),` and `,(0,r.jsx)(t.code,{children:`ToggleLabel`}),`.`]}),`
`]}),`
`,(0,r.jsx)(s,{label:`Bug fixes`,level:3}),`
`,(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:`Combobox`})}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsxs)(t.li,{children:[`Click on `,(0,r.jsx)(t.code,{children:`FormField`}),` label now behave like native.`]}),`
`]}),`
`,(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:`File Upload`})}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsxs)(t.li,{children:[`Click on `,(0,r.jsx)(t.code,{children:`FormField`}),` label now behave like native.`]}),`
`]}),`
`,(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:`Phone Number`})}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsxs)(t.li,{children:[`Following country codes `,(0,r.jsx)(t.code,{children:`bq`}),`, `,(0,r.jsx)(t.code,{children:`gf`}),`, `,(0,r.jsx)(t.code,{children:`gp`}),`, `,(0,r.jsx)(t.code,{children:`io`}),`, `,(0,r.jsx)(t.code,{children:`pm`}),`, `,(0,r.jsx)(t.code,{children:`re`}),`, `,(0,r.jsx)(t.code,{children:`sj`}),`, `,(0,r.jsx)(t.code,{children:`sx`}),` have been added.`]}),`
`,(0,r.jsxs)(t.li,{children:[`Click on `,(0,r.jsx)(t.code,{children:`FormField`}),` label now focus input instead of country select.`]}),`
`]}),`
`,(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:`Popover`})}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsx)(t.li,{children:`Positioning is now correct if a custom ID is set on the trigger element.`}),`
`,(0,r.jsx)(t.li,{children:`The trigger is now focusable by default.`}),`
`]}),`
`,(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:`Tooltip`})}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsx)(t.li,{children:`Positioning is now correct if a custom ID is set on the trigger element.`}),`
`,(0,r.jsx)(t.li,{children:`The trigger is now focusable by default.`}),`
`]}),`
`,(0,r.jsx)(s,{label:`Documentation improvements`,level:3}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsxs)(t.li,{children:[`New `,(0,r.jsx)(t.code,{children:`Accessibility`}),` page has been added in the `,(0,r.jsx)(t.code,{children:`Guides`}),` section.`]}),`
`,(0,r.jsxs)(t.li,{children:[`New section `,(0,r.jsx)(t.code,{children:`Accessibility`}),` has been added on every component `,(0,r.jsx)(t.code,{children:`Documentation`}),` page with best practices and examples.`]}),`
`,(0,r.jsxs)(t.li,{children:[`A `,(0,r.jsx)(t.code,{children:`react-router`}),` `,(0,r.jsx)(t.code,{children:`Link`}),` example has been added.`]}),`
`,(0,r.jsxs)(t.li,{children:[`Github links on component `,(0,r.jsx)(t.code,{children:`Documentation`}),` pages have been fixed.`]}),`
`,(0,r.jsxs)(t.li,{children:[`Atomic design link on component `,(0,r.jsx)(t.code,{children:`Documentation`}),` pages have been removed, as it was not relevant.`]}),`
`,(0,r.jsxs)(t.li,{children:[`New link to previous major version doc has been added on component `,(0,r.jsx)(t.code,{children:`Documentation`}),` pages.`]}),`
`,(0,r.jsxs)(t.li,{children:[`A link to form guide has been added on each `,(0,r.jsx)(t.code,{children:`FormField`}),` examples.`]}),`
`,(0,r.jsx)(t.li,{children:`FAQ has been updated.`}),`
`]}),`
`,(0,r.jsx)(s,{label:`Miscellaneous`,level:3}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsx)(t.li,{children:`Fix Windows issues when cloning the repository and running the Storybook scripts.`}),`
`]}),`
`,(0,r.jsx)(s,{label:`v19.0.1`,level:2}),`
`,(0,r.jsx)(s,{label:`Feature updates`,level:3}),`
`,(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:`Pagination`})}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsxs)(t.li,{children:[`Add `,(0,r.jsx)(t.code,{children:`onPageSizeChange`}),` handler.`]}),`
`,(0,r.jsxs)(t.li,{children:[`Add `,(0,r.jsx)(t.code,{children:`pageSize`}),` to `,(0,r.jsx)(t.code,{children:`PaginationPageChangeDetail`}),` detail object.`]}),`
`]}),`
`,(0,r.jsx)(s,{label:`v19.0.0`,level:2}),`
`,(0,r.jsxs)(t.p,{children:[`Version 19 of ODS is not the direct follow-up of previous versions, it is a new library built 100% on top of `,(0,r.jsx)(a,{href:`https://react.dev`,children:`React`}),`.`]}),`
`,(0,r.jsx)(s,{label:`Project changes`,level:3}),`
`,(0,r.jsx)(t.p,{children:`Previous versions were providing a React version of each components too, but there were in fact a wrapping of the Web Component.
Thus it was designed with the constraints related to Web Component (no virtual DOM, relying on DOM selector, ...).`}),`
`,(0,r.jsx)(t.p,{children:`With this new version we got rid of those constraints, which gave us some benefits like:`}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsx)(t.li,{children:`component composition.`}),`
`,(0,r.jsx)(t.li,{children:`easier style customization.`}),`
`,(0,r.jsxs)(t.li,{children:[`easier React integration (no more `,(0,r.jsx)(t.code,{children:`ref`}),` needed, nor literal templates).`]}),`
`]}),`
`,(0,r.jsx)(t.p,{children:`Although, we tried to stay as close as possible to previous version behavior, the way you integrate ODS in your React app should be rethought,
to ensure you use components as real React elements and not wrapped Web Components anymore.`}),`
`,(0,r.jsxs)(t.p,{children:[`To check how to start with this new version, please follow the `,(0,r.jsx)(i,{to:`/guides/get-started`,children:`Get Started`}),` documentation.`]}),`
`,(0,r.jsx)(t.p,{children:`Here is a non-exhaustive list of the major changes:`}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsx)(t.li,{children:`rework of all components as React elements.`}),`
`,(0,r.jsx)(t.li,{children:`tree-shaking.`}),`
`,(0,r.jsx)(t.li,{children:`less restriction on components customization and usage.`}),`
`,(0,r.jsx)(t.li,{children:`reduced CSS size by moving to variable fonts.`}),`
`,(0,r.jsx)(t.li,{children:`no more Ods prefix on all components/constants.`}),`
`,(0,r.jsx)(t.li,{children:`no more web-components nor Vue wrappers provided.`}),`
`,(0,r.jsx)(t.li,{children:`updated icons (now with default padding embed).`}),`
`,(0,r.jsx)(t.li,{children:`updated various component designs (datepicker, message, modal, spinner, ...).`}),`
`,(0,r.jsx)(t.li,{children:`new design tokens.`}),`
`,(0,r.jsx)(t.li,{children:`updated documentation.`}),`
`,(0,r.jsx)(t.li,{children:`card default color changed.`}),`
`,(0,r.jsx)(t.li,{children:`...`}),`
`]})]})}function a(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(i,{...e})}):i(e)}function o(e,t){throw Error(`Expected `+(t?`component`:`object`)+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}export{a as default};