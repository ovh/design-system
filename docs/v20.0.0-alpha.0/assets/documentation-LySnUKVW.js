import{i as e}from"./rolldown-runtime-Dd_uD5pT.js";import{t}from"./jsx-runtime-DREnUpxT.js";import{T as n}from"./index-CdRG7ZE_.js";var r=e(t());function i(e){let t={code:`code`,em:`em`,li:`li`,ol:`ol`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components},{Anatomy:i,BestPractices:a,Canvas:s,Heading:c,IdentityCard:l,Kbd:u}=t;return i||o(`Anatomy`,!0),a||o(`BestPractices`,!0),s||o(`Canvas`,!0),c||o(`Heading`,!0),l||o(`IdentityCard`,!0),u||o(`Kbd`,!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.p,{children:(0,r.jsxs)(t.em,{children:[`The `,(0,r.jsx)(t.strong,{children:`Command`}),` component provides a fast and efficient way to search, filter, and trigger actions from anywhere in an application.`]})}),`
`,(0,r.jsx)(s,{story:`Overview`,source:`none`}),`
`,(0,r.jsx)(c,{label:`Overview`,level:2}),`
`,(0,r.jsx)(l,{aliases:[`Command Menu`,`Command Palette`,`Spotlight`,`Quick Actions`],githubUrl:`https://github.com/ovh/design-system/tree/master/packages/ods-react/src/components/command`,name:`Command`,startingVersion:20,children:(0,r.jsxs)(t.p,{children:[`The `,(0,r.jsx)(t.strong,{children:`Command`}),` component is a modal-like overlay that allows users to quickly find and execute actions or navigate through the application. It accelerates workflows by centralizing shortcuts and actions into a single entry point.`]})}),`
`,(0,r.jsx)(c,{label:`Usage`,level:2}),`
`,(0,r.jsxs)(t.p,{children:[`The `,(0,r.jsx)(t.strong,{children:`Command`}),` component is ideal for applications with a rich set of actions, navigation entries, or shortcuts, where speed and discoverability are critical.`]}),`
`,(0,r.jsx)(t.p,{children:`It is commonly used for:`}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsx)(t.li,{children:`Productivity tools and dashboards`}),`
`,(0,r.jsx)(t.li,{children:`Developer tools and admin interfaces`}),`
`,(0,r.jsx)(t.li,{children:`Large applications with deep navigation`}),`
`]}),`
`,(0,r.jsxs)(t.p,{children:[`The `,(0,r.jsx)(t.strong,{children:`Command`}),` component acts as a generic container. It does not enforce how commands are visually rendered, allowing integrators full freedom to define the dropdown content structure.`]}),`
`,(0,r.jsx)(c,{label:`Dos & Don'ts`,level:3}),`
`,(0,r.jsx)(a,{donts:[`- Don’t use Command for critical or destructive actions without confirmation`,`- Don’t overload Command with too many unrelated actions, which can overwhelm users`,`- Don’t rely solely on Command for essential navigation; it should complement, not replace, standard UI`],dos:[`- Use Command as a global entry point for actions and navigation`,`- Group related commands to improve scanability`,`- Keep command labels concise and action-oriented`,`- Use icons and shortcut hints to help users quickly identify commands`]}),`
`,(0,r.jsx)(c,{label:`Best Practices in Context`,level:3}),`
`,(0,r.jsx)(i,{src:`components/command/anatomy.png`}),`
`,(0,r.jsxs)(t.ol,{children:[`
`,(0,r.jsx)(t.li,{children:(0,r.jsx)(t.strong,{children:`Command`})}),`
`,(0,r.jsx)(t.li,{children:(0,r.jsx)(t.strong,{children:`Search input`})}),`
`,(0,r.jsx)(t.li,{children:(0,r.jsx)(t.strong,{children:`Command container`})}),`
`,(0,r.jsx)(t.li,{children:(0,r.jsx)(t.strong,{children:`Item`})}),`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:`Group`}),` - optional`]}),`
`]}),`
`,(0,r.jsx)(c,{label:`Placement`,level:2}),`
`,(0,r.jsxs)(t.p,{children:[`The `,(0,r.jsx)(t.strong,{children:`Command`}),` component opens as a centered, modal-like overlay on top of the application content.`]}),`
`,(0,r.jsx)(c,{label:`Behavior`,level:2}),`
`,(0,r.jsx)(c,{label:`Opening & Closing`,level:3}),`
`,(0,r.jsxs)(t.p,{children:[`The `,(0,r.jsx)(t.strong,{children:`Command`}),` opens as an overlay centered in the viewport.`]}),`
`,(0,r.jsx)(t.p,{children:`It can be triggered:`}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsx)(t.li,{children:`Via a dedicated UI trigger`}),`
`,(0,r.jsx)(t.li,{children:`Via a keyboard shortcut (⌘ + K on macOS, Ctrl + K on Windows/Linux)`}),`
`]}),`
`,(0,r.jsx)(t.p,{children:`The Command closes when:`}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsx)(t.li,{children:`The Escape key is pressed`}),`
`,(0,r.jsx)(t.li,{children:`The overlay is dismissed`}),`
`]}),`
`,(0,r.jsxs)(t.p,{children:[`Selecting an item does not close the Command. To close it on selection, control the `,(0,r.jsx)(t.code,{children:`open`}),` state and set it to `,(0,r.jsx)(t.code,{children:`false`}),` from the option's `,(0,r.jsx)(t.code,{children:`onSelect`}),` callback (see the Controlled example on the Examples page).`]}),`
`,(0,r.jsx)(c,{label:`Search & Filtering`,level:3}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsx)(t.li,{children:`The Command provides a search input used to filter available items: by default, typing filters the options on their text content.`}),`
`,(0,r.jsxs)(t.li,{children:[`Passing a `,(0,r.jsx)(t.code,{children:`value`}),` to `,(0,r.jsx)(t.strong,{children:`CommandFilter`}),` switches to controlled filtering: the built-in filtering is fully disabled. The integrator owns the query state (updated through `,(0,r.jsx)(t.code,{children:`onChange`}),`) and is responsible for rendering only the matching options.`]}),`
`]}),`
`,(0,r.jsx)(c,{label:`Items & Groups`,level:3}),`
`,(0,r.jsx)(t.p,{children:`Items are displayed in a vertically scrollable list and can be organized into groups.`}),`
`,(0,r.jsx)(t.p,{children:`Groups, dividers, headers, and any additional UI elements are fully customizable.`}),`
`,(0,r.jsx)(t.p,{children:`Each item may expose:`}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsx)(t.li,{children:`Label (required)`}),`
`,(0,r.jsx)(t.li,{children:`Icon (optional)`}),`
`,(0,r.jsx)(t.li,{children:`Shortcut hint (optional, e.g. ⌘ + N)`}),`
`,(0,r.jsx)(t.li,{children:`Description (optional)`}),`
`,(0,r.jsx)(t.li,{children:`Custom content`}),`
`]}),`
`,(0,r.jsx)(c,{label:`Custom Rendering`,level:3}),`
`,(0,r.jsx)(t.p,{children:`Integrators are free to render:`}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsx)(t.li,{children:`Badges`}),`
`,(0,r.jsx)(t.li,{children:`Keyboard hints (kbd)`}),`
`,(0,r.jsx)(t.li,{children:`Icons`}),`
`,(0,r.jsx)(t.li,{children:`Group headers`}),`
`,(0,r.jsx)(t.li,{children:`Dividers`}),`
`,(0,r.jsx)(t.li,{children:`Any custom layout or component`}),`
`]}),`
`,(0,r.jsx)(t.p,{children:`The Command component does not impose constraints on item layout or structure.`}),`
`,(0,r.jsx)(c,{label:`Navigation`,level:2}),`
`,(0,r.jsx)(c,{label:`Focus Management`,level:3}),`
`,(0,r.jsx)(t.p,{children:`When the Command opens, focus is set on the search input.`}),`
`,(0,r.jsxs)(t.p,{children:[`Focus stays on the search input while navigating: the arrow keys move a visual highlight through the items, exposed to assistive technology via `,(0,r.jsx)(t.code,{children:`aria-activedescendant`}),` (see the Roles section).`]}),`
`,(0,r.jsx)(t.p,{children:`Focus remains trapped within the Command until it is closed.`}),`
`,(0,r.jsx)(c,{label:`General Keyboard Shortcuts`,level:3}),`
`,(0,r.jsxs)(t.p,{children:[`Pressing `,(0,r.jsx)(u,{children:`↓`}),` or `,(0,r.jsx)(u,{children:`↑`}),` highlights the next / previous item.`]}),`
`,(0,r.jsxs)(t.p,{children:[`Pressing `,(0,r.jsx)(u,{children:`Enter`}),` executes the highlighted item.`]}),`
`,(0,r.jsxs)(t.p,{children:[`Pressing `,(0,r.jsx)(u,{children:`Escape`}),` closes the Command.`]}),`
`,(0,r.jsxs)(t.p,{children:[`Pressing `,(0,r.jsx)(u,{children:`Home`}),` or `,(0,r.jsx)(u,{children:`End`}),` moves the cursor within the search input.`]}),`
`,(0,r.jsx)(c,{label:`Accessibility`,level:2}),`
`,(0,r.jsx)(c,{label:`Roles`,level:3}),`
`,(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:`Command`}),` is a `,(0,r.jsx)(t.code,{children:`listbox`}),`-based component, nested within a `,(0,r.jsx)(t.code,{children:`dialog`}),` role element.`]}),`
`,(0,r.jsxs)(t.p,{children:[`The search input has a `,(0,r.jsx)(t.code,{children:`combobox`}),` role, and an `,(0,r.jsx)(t.code,{children:`aria-controls`}),` relationship with the `,(0,r.jsx)(t.code,{children:`listbox`}),` (`,(0,r.jsx)(t.strong,{children:`CommandList`}),`).`]}),`
`,(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:`language-tsx`,children:`<Command>
  <CommandContent> --> role='dialog'
    <CommandFilter /> --> role='combobox'
    <CommandList> --> role='listbox'
      <CommandGroup> --> role='group'
        <CommandOption /> --> role='option'
        <CommandOption />
      </CommandGroup>
    </CommandList>
  </CommandContent>
</Command>
`})}),`
`,(0,r.jsx)(c,{label:`Labelling`,level:3}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsxs)(t.li,{children:[`
`,(0,r.jsxs)(t.p,{children:[`Because the `,(0,r.jsx)(t.strong,{children:`Command`}),` dialog does not display a visible title by default, you must supply an accessible name for it. Use the `,(0,r.jsx)(t.code,{children:`aria-label`}),` prop on `,(0,r.jsx)(t.strong,{children:`CommandContent`}),` to give screen readers a meaningful description of the dialog when it opens.`]}),`
`]}),`
`,(0,r.jsxs)(t.li,{children:[`
`,(0,r.jsxs)(t.p,{children:[`The `,(0,r.jsx)(t.strong,{children:`CommandFilter`}),` search input does not render a visible label, so you must provide an accessible name for it.`]}),`
`]}),`
`,(0,r.jsxs)(t.li,{children:[`
`,(0,r.jsxs)(t.p,{children:[`A `,(0,r.jsx)(t.code,{children:`listbox`}),` must always have an accessible name, (`,(0,r.jsx)(t.strong,{children:`CommandContent`}),` and `,(0,r.jsx)(t.strong,{children:`CommandList`}),` can share the same label).`]}),`
`]}),`
`]}),`
`,(0,r.jsx)(s,{story:`AccessibilityLabels`}),`
`,(0,r.jsx)(c,{label:`CommandGroup naming`,level:3}),`
`,(0,r.jsx)(t.p,{children:`In the case of several groups, it is recommended to provide an accessible name for each group.`}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsxs)(t.li,{children:[`Either by using the `,(0,r.jsx)(t.code,{children:`heading`}),` prop on `,(0,r.jsx)(t.strong,{children:`CommandGroup`}),`, which renders a visible header,`]}),`
`,(0,r.jsxs)(t.li,{children:[`or by using `,(0,r.jsx)(t.code,{children:`aria-label`}),` to provide an accessible name without a visible header.`]}),`
`]}),`
`,(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:`aria-label`}),` takes precedence.`]}),`
`,(0,r.jsx)(s,{story:`AccessibilityGroupNames`}),`
`,(0,r.jsx)(c,{label:`Disabled options`,level:3}),`
`,(0,r.jsxs)(t.p,{children:[`To mark a `,(0,r.jsx)(t.strong,{children:`CommandOption`}),` as non-interactive, use `,(0,r.jsx)(t.code,{children:`aria-disabled="true"`}),` instead of the native `,(0,r.jsx)(t.code,{children:`disabled`}),` attribute. This is required because `,(0,r.jsx)(t.strong,{children:`CommandOption`}),` renders a `,(0,r.jsx)(t.strong,{children:`div`}),` with `,(0,r.jsx)(t.code,{children:`role="option"`}),`, which does not support the native `,(0,r.jsx)(t.code,{children:`disabled`}),` attribute.`]}),`
`,(0,r.jsx)(s,{story:`AccessibilityDisabledOption`})]})}function a(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(i,{...e})}):i(e)}function o(e,t){throw Error(`Expected `+(t?`component`:`object`)+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}export{a as default};