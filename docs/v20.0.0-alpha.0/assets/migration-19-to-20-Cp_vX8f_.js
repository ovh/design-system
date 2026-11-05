import{i as e}from"./rolldown-runtime-Dd_uD5pT.js";import{t}from"./jsx-runtime-DREnUpxT.js";import{T as n}from"./index-CdRG7ZE_.js";var r=e(t());function i(e){let t={code:`code`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components},{DocLink:i,ExternalLink:a,Heading:s,Table:c}=t;return i||o(`DocLink`,!0),a||o(`ExternalLink`,!0),s||o(`Heading`,!0),c||o(`Table`,!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(t.p,{children:[`Version 20 adds support for `,(0,r.jsx)(a,{href:`https://react.dev/blog/2024/12/05/react-19`,children:`React 19`}),` `,(0,r.jsx)(t.strong,{children:`while keeping support for React 18`}),`.`]}),`
`,(0,r.jsx)(t.p,{children:`The peer dependency range is unchanged:`}),`
`,(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:`language-json`,children:`"peerDependencies": {
  "react": ">=18.2.0",
  "react-dom": ">=18.2.0"
}
`})}),`
`,(0,r.jsxs)(t.p,{children:[`The component API has `,(0,r.jsx)(t.strong,{children:`breaking changes`}),`, each listed with its migration in `,(0,r.jsx)(t.strong,{children:`Breaking changes`}),`. The other props, refs and composition keep working, but several components render differently with no prop set: see `,(0,r.jsx)(t.strong,{children:`Default rendering`}),`. Moving to React 19 requires no ODS-related code change. Form fields also lose their stretch-to-container default: see `,(0,r.jsx)(t.strong,{children:`Form fields share one default width`}),` below if your layout relied on it.`]}),`
`,(0,r.jsxs)(t.p,{children:[`The theme has `,(0,r.jsx)(t.strong,{children:`breaking changes`}),`: the `,(0,r.jsx)(t.code,{children:`--ods-theme-*`}),` and `,(0,r.jsx)(t.code,{children:`--ods-color-*`}),` tokens are replaced by a semantic layer, without alias, and the default theme gets a new look. Any CSS, Sass or custom theme that reads the old tokens has to migrate: start with `,(0,r.jsx)(t.strong,{children:`Default theme`}),` and follow the sections after it. The inventory of every change, with a detection command and a codemod status for each, is `,(0,r.jsx)(a,{href:`https://github.com/ovh/design-system/blob/master/BREAKING-CHANGES-V20.md`,children:`BREAKING-CHANGES-V20.md`}),`.`]}),`
`,(0,r.jsx)(s,{label:`If you stay on React 18`,level:2}),`
`,(0,r.jsxs)(t.p,{children:[`Nothing to do for React. Installation and types keep working as before. The component API changes apply whatever your React version: migrate the removed `,(0,r.jsx)(t.code,{children:`color`}),` props and `,(0,r.jsx)(t.code,{children:`toast.primary()`}),`, the Message `,(0,r.jsx)(t.code,{children:`variant`}),` and the Table `,(0,r.jsx)(t.code,{children:`variant`}),`, and review the Button default rendering (see `,(0,r.jsx)(t.strong,{children:`Breaking changes`}),`). The theme changes below apply whatever your React version too. See also `,(0,r.jsx)(t.strong,{children:`Behavior changes`}),` below.`]}),`
`,(0,r.jsx)(s,{label:`If you move to React 19`,level:2}),`
`,(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:`1. Bump React and its types`}),` to a matching major:`]}),`
`,(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:`language-shell`,children:`npm install react@^19 react-dom@^19
npm install -D @types/react@^19 @types/react-dom@^19
`})}),`
`,(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:`@types/react`}),` and `,(0,r.jsx)(t.code,{children:`@types/react-dom`}),` `,(0,r.jsx)(t.strong,{children:`must share the same major`}),` (both `,(0,r.jsx)(t.code,{children:`19`}),`).`]}),`
`,(0,r.jsx)(t.p,{children:`The React team ships codemods that automate most of the app-side migration — run them on your own code (they never need to touch ODS usage):`}),`
`,(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:`language-shell`,children:`npx codemod@latest react/19/migration-recipe
npx types-react-codemod@latest preset-19 ./src
`})}),`
`,(0,r.jsxs)(t.p,{children:[`For anything beyond ODS, follow the official `,(0,r.jsx)(a,{href:`https://react.dev/blog/2024/04/25/react-19-upgrade-guide`,children:`React 19 upgrade guide`}),`.`]}),`
`,(0,r.jsxs)(t.p,{children:[(0,r.jsxs)(t.strong,{children:[`2. Make sure you have a single `,(0,r.jsx)(t.code,{children:`@types/react`}),` version.`]}),` This is the one real pitfall — and it is `,(0,r.jsx)(t.strong,{children:`not`}),` specific to ODS. If a transitive dependency still pulls `,(0,r.jsx)(t.code,{children:`@types/react@18`}),` while your app is on `,(0,r.jsx)(t.code,{children:`19`}),`, TypeScript reports errors such as:`]}),`
`,(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:`language-text`,children:`Type 'bigint' is not assignable to type 'ReactNode'.
'Xxx' cannot be used as a JSX component.
`})}),`
`,(0,r.jsxs)(t.p,{children:[`This is the classic "two copies of `,(0,r.jsx)(t.code,{children:`@types/react`}),`" conflict. Deduplicate to a single version:`]}),`
`,(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:`language-json`,children:`// npm — package.json
"overrides": {
  "@types/react": "^19",
  "@types/react-dom": "^19"
}

// yarn — package.json
"resolutions": {
  "@types/react": "^19",
  "@types/react-dom": "^19"
}

// pnpm — package.json
"pnpm": {
  "overrides": {
    "@types/react": "^19",
    "@types/react-dom": "^19"
  }
}
`})}),`
`,(0,r.jsxs)(t.p,{children:[`With pnpm you can also declare it in `,(0,r.jsx)(t.code,{children:`pnpm-workspace.yaml`}),` (top-level key, no `,(0,r.jsx)(t.code,{children:`pnpm`}),` wrapper):`]}),`
`,(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:`language-yaml`,children:`overrides:
  "@types/react": ^19
  "@types/react-dom": ^19
`})}),`
`,(0,r.jsx)(t.p,{children:`Then reinstall and verify a single version is resolved:`}),`
`,(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:`language-shell`,children:`npm ls @types/react
# or: pnpm why @types/react
`})}),`
`,(0,r.jsx)(s,{label:`Form fields share one default width`,level:2}),`
`,(0,r.jsx)(t.p,{children:`Every form field now ships the same default width, so mixed fields line up in a form out of the box:`}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:`Input`}),` (including the password type)`]}),`
`,(0,r.jsx)(t.li,{children:(0,r.jsx)(t.strong,{children:`Password`})}),`
`,(0,r.jsx)(t.li,{children:(0,r.jsx)(t.strong,{children:`Textarea`})}),`
`,(0,r.jsx)(t.li,{children:(0,r.jsx)(t.strong,{children:`Clipboard`})}),`
`,(0,r.jsx)(t.li,{children:(0,r.jsx)(t.strong,{children:`Select`})}),`
`,(0,r.jsx)(t.li,{children:(0,r.jsx)(t.strong,{children:`Combobox`})}),`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:`Datepicker`}),` (input and calendar trigger together)`]}),`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:`PhoneNumber`}),` (country select and input together)`]}),`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:`Timepicker`}),` (time input and timezone select together)`]}),`
`]}),`
`,(0,r.jsxs)(t.p,{children:[`The default is `,(0,r.jsx)(t.strong,{children:`280px`}),`, capped at `,(0,r.jsx)(t.strong,{children:`100%`}),` of the container so narrow layouts never overflow.`]}),`
`,(0,r.jsxs)(t.p,{children:[`In v19, `,(0,r.jsx)(t.strong,{children:`Select`}),` and `,(0,r.jsx)(t.strong,{children:`Combobox`}),` filled their container, and any field placed inside a `,(0,r.jsx)(t.strong,{children:`FormField`}),` stretched to its width. This is no longer the case. No prop, ref or composition has changed.`]}),`
`,(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:`To get the v19 behavior back`}),`, set `,(0,r.jsx)(t.code,{children:`width: 100%`}),` on the `,(0,r.jsx)(t.strong,{children:`root`}),` of the field. Never set it on `,(0,r.jsx)(t.code,{children:`SelectControl`}),`, `,(0,r.jsx)(t.code,{children:`ComboboxControl`}),` or `,(0,r.jsx)(t.code,{children:`PhoneNumberControl`}),`: the root now carries the width and the control only fills it.`]}),`
`,(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:`language-css`,children:`[data-ods="select"]:not([data-ods="pagination-page-size-selector"] *),
[data-ods="combobox"],
[data-ods="phone-number"],
[data-ods="timepicker"],
[data-ods="clipboard"]:has(input),
[data-ods="textarea"] {
  width: 100%;
}
`})}),`
`,(0,r.jsxs)(t.p,{children:[`The two exclusions keep the fields ODS sizes by their content as they are: the page size Select of `,(0,r.jsx)(t.strong,{children:`Pagination`}),`, and a `,(0,r.jsx)(t.strong,{children:`Clipboard`}),` made of its trigger alone. Without them, this rule, declared outside the ODS layers, would override their own sizing.`]}),`
`,(0,r.jsxs)(t.p,{children:[`For `,(0,r.jsx)(t.strong,{children:`Input`}),` and `,(0,r.jsx)(t.strong,{children:`Password`}),`, pass a `,(0,r.jsx)(t.code,{children:`className`}),` that sets `,(0,r.jsx)(t.code,{children:`width: 100%`}),` to the component instead: their root carries no `,(0,r.jsx)(t.code,{children:`data-ods`}),` attribute (`,(0,r.jsx)(t.code,{children:`[data-ods="input"]`}),` and `,(0,r.jsx)(t.code,{children:`[data-ods="password"]`}),` target the native `,(0,r.jsx)(t.code,{children:`<input>`}),`, not the root). For `,(0,r.jsx)(t.strong,{children:`Datepicker`}),`, pass it to both `,(0,r.jsx)(t.code,{children:`Datepicker`}),` and `,(0,r.jsx)(t.code,{children:`DatepickerControl`}),`: the `,(0,r.jsx)(t.code,{children:`Datepicker`}),` root is an inline block sized by its content, so a percentage on the control alone does not fill the container (and `,(0,r.jsx)(t.code,{children:`[data-ods="datepicker-control"]`}),` also targets the native `,(0,r.jsx)(t.code,{children:`<input>`}),`).`]}),`
`,(0,r.jsx)(t.p,{children:`To change the default width of every field at once, override the theme token:`}),`
`,(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:`language-css`,children:`:root {
  --ods-semantic-size-inline-size-field: 320px;
}
`})}),`
`,(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:`Quantity`}),` and `,(0,r.jsx)(t.strong,{children:`QueryFilter`}),` keep their own size and are not affected.`]}),`
`,(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:`PhoneNumberControl`}),` no longer declares `,(0,r.jsx)(t.code,{children:`width: inherit`}),`: it flexes into the space the country select leaves, so an explicit width set on the control is now overridden by its `,(0,r.jsx)(t.code,{children:`flex-grow`}),`. Size the `,(0,r.jsx)(t.strong,{children:`PhoneNumber`}),` root instead.`]}),`
`,(0,r.jsx)(s,{label:`Bundler & framework notes`,level:2}),`
`,(0,r.jsx)(t.p,{children:`These are unchanged by the React version — they apply the same way on React 18 and 19:`}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:`Vite`}),`: works out of the box, CSS is handled natively.`]}),`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:`Webpack 5`}),`: configure `,(0,r.jsx)(t.code,{children:`css-loader`}),` (and `,(0,r.jsx)(t.code,{children:`style-loader`}),`) so the CSS shipped by ODS is bundled.`]}),`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:`Next.js (App Router)`}),`: Next 15 already requires React 19. Use ODS inside client components (`,(0,r.jsx)(t.code,{children:`'use client'`}),`). They are server-side rendered like any client component, the Markdown component included: no `,(0,r.jsx)(t.code,{children:`next/dynamic`}),` with `,(0,r.jsx)(t.code,{children:`{ ssr: false }`}),` is needed.`]}),`
`]}),`
`,(0,r.jsx)(s,{label:`Default theme`,level:2}),`
`,(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:`@ovhcloud/ods-themes/default/css`}),` now ships a neutral look: a grey page, and an accent ramp on navy for selection, text, headings and form controls. The OVHcloud look is a theme of its own, `,(0,r.jsx)(t.code,{children:`@ovhcloud/ods-themes/blue-jeans/css`}),`, to load `,(0,r.jsx)(t.strong,{children:`instead of`}),` the default theme.`]}),`
`,(0,r.jsx)(t.p,{children:`To find the imports in your code:`}),`
`,(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:`language-sh`,children:`grep -rn "ods-themes/default/css" src/
`})}),`
`,(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:`before`})}),`
`,(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:`language-ts`,children:`import '@ovhcloud/ods-themes/default/css';
`})}),`
`,(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:`after`}),`, to keep the OVHcloud look`]}),`
`,(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:`language-ts`,children:`import '@ovhcloud/ods-themes/blue-jeans/css';
`})}),`
`,(0,r.jsxs)(t.p,{children:[`Load a single theme. Every theme declares all its tokens on `,(0,r.jsx)(t.code,{children:`:root`}),`, and the last one loaded wins: a copy of the default theme loaded later, for instance by a micro-frontend that ships its own, brings the neutral look back.`]}),`
`,(0,r.jsxs)(t.p,{children:[`If you import `,(0,r.jsx)(t.code,{children:`@ovhcloud/ods-themes/default`}),`, the theme with its fonts, it is removed (see `,(0,r.jsx)(t.strong,{children:`Typography`}),`). To keep the OVHcloud look, replace it with both lines below:`]}),`
`,(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:`language-ts`,children:`import '@ovhcloud/ods-themes/blue-jeans/css';
import '@ovhcloud/ods-themes/default/fonts';
`})}),`
`,(0,r.jsxs)(t.p,{children:[`If you load the theme files by path rather than through the package exports (a `,(0,r.jsx)(t.code,{children:`<link>`}),` to a copied `,(0,r.jsx)(t.code,{children:`dist`}),` folder, a CDN URL, a bundler alias), the files moved:`]}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:`dist/default/index.css`}),` is `,(0,r.jsx)(t.code,{children:`dist/aluminium/light.css`}),`.`]}),`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:`dist/default/fonts.css`}),` is `,(0,r.jsx)(t.code,{children:`dist/fonts.css`}),`.`]}),`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:`dist/default/default.css`}),` is `,(0,r.jsx)(t.code,{children:`dist/aluminium/light.css`}),` with `,(0,r.jsx)(t.code,{children:`dist/fonts-base64.css`}),`.`]}),`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:`dist/default/tokens.json`}),` is `,(0,r.jsx)(t.code,{children:`dist/aluminium/light.tokens.json`}),`.`]}),`
`]}),`
`,(0,r.jsxs)(t.p,{children:[`An old path returns a 404, and the page renders without a theme, with no build error. Prefer the export paths (`,(0,r.jsx)(t.code,{children:`@ovhcloud/ods-themes/default/css`}),`), which did not change. To find the paths:`]}),`
`,(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:`language-sh`,children:`grep -rnE "ods-themes(@[^/]+)?/(dist|src)/" .
`})}),`
`,(0,r.jsx)(s,{label:`Theme tokens`,level:2}),`
`,(0,r.jsxs)(t.p,{children:[`The `,(0,r.jsx)(t.code,{children:`--ods-theme-*`}),`, `,(0,r.jsx)(t.code,{children:`--ods-color-*`}),` and remaining legacy tokens (`,(0,r.jsx)(t.code,{children:`--ods-border-radius-*`}),`, `,(0,r.jsx)(t.code,{children:`--ods-border-width-*`}),`, `,(0,r.jsx)(t.code,{children:`--ods-outline-*`}),`, `,(0,r.jsx)(t.code,{children:`--ods-font-family-*`}),`, `,(0,r.jsx)(t.code,{children:`--ods-form-element-input-height`}),`) are removed, without alias. A `,(0,r.jsx)(t.code,{children:`var()`}),` that reads one of them silently resolves to nothing: the property falls back to its inherited or initial value.`]}),`
`,(0,r.jsx)(t.p,{children:`To find them in your code:`}),`
`,(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:`language-sh`,children:`grep -rnE -- '--ods-(theme|color|border-radius|border-width|outline|font-family|form-element)-' src/
`})}),`
`,(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:`before`})}),`
`,(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:`language-css`,children:`.my-panel {
  background-color: var(--ods-theme-background-color);
  color: var(--ods-theme-text-color);
  border-radius: var(--ods-border-radius-md);
}
`})}),`
`,(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:`after`})}),`
`,(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:`language-css`,children:`.my-panel {
  background-color: var(--ods-semantic-color-surface-raised);
  color: var(--ods-semantic-color-content-text);
  border-radius: var(--ods-semantic-size-radius-container);
}
`})}),`
`,(0,r.jsx)(t.p,{children:`The tables of the inventory give the destination of every token. Most are a 1:1 rename; a few depend on the site:`}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:`--ods-theme-background-color`}),` becomes `,(0,r.jsx)(t.code,{children:`--ods-semantic-color-surface-page`}),` for the page, `,(0,r.jsx)(t.code,{children:`-surface-raised`}),` for a card or a panel, `,(0,r.jsx)(t.code,{children:`-surface-overlay`}),` for a popover, a modal or a drawer, and `,(0,r.jsx)(t.code,{children:`-surface-control`}),` for a field.`]}),`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:`--ods-theme-<status>-color`}),` splits by property: `,(0,r.jsx)(t.code,{children:`--ods-semantic-color-surface-<status>`}),` in a `,(0,r.jsx)(t.code,{children:`background`}),`, `,(0,r.jsx)(t.code,{children:`-border-<status>`}),` in a `,(0,r.jsx)(t.code,{children:`border-color`}),`, `,(0,r.jsx)(t.code,{children:`-content-<status>`}),` in a `,(0,r.jsx)(t.code,{children:`color`}),`. `,(0,r.jsx)(t.code,{children:`primary`}),` becomes `,(0,r.jsx)(t.code,{children:`brand`}),`.`]}),`
`,(0,r.jsxs)(t.li,{children:[`A `,(0,r.jsx)(t.code,{children:`--ods-color-<family>-<rung>`}),` has no name to rename to: the role depends on the property, and on the state when the custom property that reads it ends with `,(0,r.jsx)(t.code,{children:`-hover`}),` or `,(0,r.jsx)(t.code,{children:`-active`}),`.`]}),`
`,(0,r.jsxs)(t.li,{children:[`The disabled colors (`,(0,r.jsx)(t.code,{children:`*-disabled`}),`) have no replacement: a disabled component is now dimmed with an opacity.`]}),`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:`--ods-theme-overlay-z-index`}),` becomes `,(0,r.jsx)(t.code,{children:`--ods-semantic-z-index-dropdown`}),`, and its value goes from 99 to 200 (see `,(0,r.jsx)(t.strong,{children:`Layers`}),`).`]}),`
`]}),`
`,(0,r.jsxs)(t.p,{children:[`The `,(0,r.jsx)(t.code,{children:`--ods-palette-*`}),` ramps are published, but a rung number does not give back the v19 color: blue and gray `,(0,r.jsx)(t.code,{children:`100`}),` to `,(0,r.jsx)(t.code,{children:`400`}),` are lighter, gray `,(0,r.jsx)(t.code,{children:`500`}),` is darker, and green, orange and red are new ramps. Point at the semantic role rather than at the palette.`]}),`
`,(0,r.jsxs)(t.p,{children:[`If you read the Sass variables of `,(0,r.jsx)(t.code,{children:`@ovhcloud/ods-themes`}),` by path, most are gone: read the custom properties instead. The breakpoints are still exported by `,(0,r.jsx)(t.code,{children:`@ovhcloud/ods-react/style`}),`.`]}),`
`,(0,r.jsxs)(t.p,{children:[`The path was the only way to these variables, and it is gone too: the Sass sources moved out of `,(0,r.jsx)(t.code,{children:`src/default`}),`. The import finds every file that reads them:`]}),`
`,(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:`language-sh`,children:`grep -rnE "ods-themes/src/default/_?variables" src/
`})}),`
`,(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:`before`})}),`
`,(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:`language-scss`,children:`@use '@ovhcloud/ods-themes/src/default/variables' as theme;

.my-banner {
  background-color: theme.$ods-color-primary-100;

  @media (width >= theme.$ods-breakpoint-tablet) {
    padding: 16px;
  }
}
`})}),`
`,(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:`after`})}),`
`,(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:`language-scss`,children:`@use '@ovhcloud/ods-react/style' as ods;

.my-banner {
  background-color: var(--ods-semantic-color-surface-selected);

  @media (width >= ods.$ods-breakpoint-tablet) {
    padding: 16px;
  }
}
`})}),`
`,(0,r.jsx)(s,{label:`Tailwind CSS`,level:2}),`
`,(0,r.jsxs)(t.p,{children:[`The v19 Tailwind guide had you copy a configuration that read the tokens removed above: its `,(0,r.jsx)(t.code,{children:`ods-primary`}),`, `,(0,r.jsx)(t.code,{children:`ods-success`}),`, `,(0,r.jsx)(t.code,{children:`ods-critical`}),`, `,(0,r.jsx)(t.code,{children:`ods-xs`}),` to `,(0,r.jsx)(t.code,{children:`ods-lg`}),` and `,(0,r.jsx)(t.code,{children:`ods-default`}),` keys (`,(0,r.jsx)(t.code,{children:`ods-color-primary-500`}),`, `,(0,r.jsx)(t.code,{children:`ods-border-radius-md`}),`… in a Tailwind v3 configuration) now resolve to nothing. Tailwind gives no error for a class it no longer knows: the property silently falls back.`]}),`
`,(0,r.jsxs)(t.p,{children:[`In v20, `,(0,r.jsx)(t.code,{children:`@ovhcloud/ods-tailwind`}),` maps the Tailwind v4 utilities to the semantic tokens, with no configuration to copy (see `,(0,r.jsx)(i,{to:`/guides/tailwind`,children:`Tailwind CSS Integration`}),`). Remove the ODS keys of your configuration, and the `,(0,r.jsx)(t.code,{children:`.vscode/tailwind.json`}),` list of the v19 guide, then rename the classes:`]}),`
`,(0,r.jsxs)(c,{children:[(0,r.jsx)(`thead`,{children:(0,r.jsxs)(`tr`,{children:[(0,r.jsx)(`th`,{scope:`col`,children:`v19 class`}),(0,r.jsx)(`th`,{scope:`col`,children:`v20 class`})]})}),(0,r.jsxs)(`tbody`,{children:[(0,r.jsxs)(`tr`,{children:[(0,r.jsxs)(`td`,{children:[(0,r.jsx)(`code`,{children:`bg-ods-primary`}),`, `,(0,r.jsx)(`code`,{children:`text-ods-primary`}),`, `,(0,r.jsx)(`code`,{children:`border-ods-primary`})]}),(0,r.jsxs)(`td`,{children:[(0,r.jsx)(`code`,{children:`bg-ods-surface-brand`}),`, `,(0,r.jsx)(`code`,{children:`text-ods-content-brand`}),`, `,(0,r.jsx)(`code`,{children:`border-ods-border-brand`})]})]}),(0,r.jsxs)(`tr`,{children:[(0,r.jsxs)(`td`,{children:[(0,r.jsx)(`code`,{children:`bg-ods-success`}),`, `,(0,r.jsx)(`code`,{children:`text-ods-success`}),`, `,(0,r.jsx)(`code`,{children:`border-ods-success`})]}),(0,r.jsxs)(`td`,{children:[(0,r.jsx)(`code`,{children:`bg-ods-surface-success`}),`, `,(0,r.jsx)(`code`,{children:`text-ods-content-success`}),`, `,(0,r.jsx)(`code`,{children:`border-ods-border-success`})]})]}),(0,r.jsxs)(`tr`,{children:[(0,r.jsxs)(`td`,{children:[(0,r.jsx)(`code`,{children:`bg-ods-critical`}),`, `,(0,r.jsx)(`code`,{children:`text-ods-critical`}),`, `,(0,r.jsx)(`code`,{children:`border-ods-critical`})]}),(0,r.jsxs)(`td`,{children:[(0,r.jsx)(`code`,{children:`bg-ods-surface-critical`}),`, `,(0,r.jsx)(`code`,{children:`text-ods-content-critical`}),`, `,(0,r.jsx)(`code`,{children:`border-ods-border-critical`})]})]}),(0,r.jsxs)(`tr`,{children:[(0,r.jsxs)(`td`,{children:[(0,r.jsx)(`code`,{children:`rounded-ods-xs`}),` (2px)`]}),(0,r.jsxs)(`td`,{children:[`no 2px radius in v20: `,(0,r.jsx)(`code`,{children:`rounded-ods-control`}),` (4px), or `,(0,r.jsx)(`code`,{children:`rounded-xs`})]})]}),(0,r.jsxs)(`tr`,{children:[(0,r.jsxs)(`td`,{children:[(0,r.jsx)(`code`,{children:`rounded-ods-sm`}),` (4px)`]}),(0,r.jsx)(`td`,{children:(0,r.jsx)(`code`,{children:`rounded-ods-control`})})]}),(0,r.jsxs)(`tr`,{children:[(0,r.jsxs)(`td`,{children:[(0,r.jsx)(`code`,{children:`rounded-ods-md`}),` (8px)`]}),(0,r.jsx)(`td`,{children:(0,r.jsx)(`code`,{children:`rounded-ods-container`})})]}),(0,r.jsxs)(`tr`,{children:[(0,r.jsxs)(`td`,{children:[(0,r.jsx)(`code`,{children:`rounded-ods-lg`}),` (16px)`]}),(0,r.jsx)(`td`,{children:(0,r.jsx)(`code`,{children:`rounded-ods-pill`})})]}),(0,r.jsxs)(`tr`,{children:[(0,r.jsx)(`td`,{children:(0,r.jsx)(`code`,{children:`font-ods-default`})}),(0,r.jsxs)(`td`,{children:[(0,r.jsx)(`code`,{children:`font-ods-body`}),`, or nothing: it is the page font`]})]})]})]}),`
`,(0,r.jsxs)(t.p,{children:[`As for the tokens, a color depends on the property: a `,(0,r.jsx)(t.code,{children:`bg-`}),` reads a surface, a `,(0,r.jsx)(t.code,{children:`text-`}),` a content color, a `,(0,r.jsx)(t.code,{children:`border-`}),` a border color. `,(0,r.jsx)(t.code,{children:`bg-ods-brand`}),` is the logo color, not a surface.`]}),`
`,(0,r.jsx)(t.p,{children:`To find the classes:`}),`
`,(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:`language-sh`,children:`grep -rnE -- '[a-z-]+-ods-(primary|success|warning|critical|xs|sm|md|lg|default)\\b|ods-(color-[a-z]+-[0-9]+|border-radius-[a-z]+|font-family-default)' src/
`})}),`
`,(0,r.jsx)(s,{label:`Custom themes`,level:2}),`
`,(0,r.jsxs)(t.p,{children:[`A v19 custom theme, including any Theme Generator export, declares `,(0,r.jsx)(t.code,{children:`--ods-theme-*`}),` and `,(0,r.jsx)(t.code,{children:`--ods-color-*`}),`. v20 neither declares nor reads these names, so such a theme has `,(0,r.jsx)(t.strong,{children:`no effect`}),`, without any warning.`]}),`
`,(0,r.jsx)(t.p,{children:`To find them in your code:`}),`
`,(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:`language-sh`,children:`grep -rnE -- "--ods-(theme|color)-[a-z0-9-]+[\\"']?[[:space:]]*:" src/
`})}),`
`,(0,r.jsxs)(t.p,{children:[`In v20, a theme re-declares the brand and accent ramps (`,(0,r.jsx)(t.code,{children:`--ods-palette-brand-*`}),` and `,(0,r.jsx)(t.code,{children:`--ods-palette-accent-*`}),`, from 50 to 900) on `,(0,r.jsx)(t.code,{children:`:root`}),`, in a stylesheet loaded after the theme it builds on.`]}),`
`,(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:`before`})}),`
`,(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:`language-css`,children:`:root {
  --ods-color-primary-500: #7a00cc;
  --ods-theme-primary-color: var(--ods-color-primary-500);
}
`})}),`
`,(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:`after`})}),`
`,(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:`language-css`,children:`:root {
  --ods-palette-brand-500: #7a00cc;
  /* and the other brand and accent rungs, from 50 to 900 */
}
`})}),`
`,(0,r.jsxs)(t.p,{children:[`The ramps do not reach every role. The focus ring (`,(0,r.jsx)(t.code,{children:`--ods-semantic-color-focus`}),`), the status families and the chart series keep their default values, on purpose. Over the default theme alone, the brand ghost and outline Buttons take their text from the accent ramp (`,(0,r.jsx)(t.code,{children:`--ods-semantic-color-content-brand-minor`}),` and `,(0,r.jsx)(t.code,{children:`--ods-semantic-color-content-on-brand`}),`, on accent `,(0,r.jsx)(t.code,{children:`800`}),`) and their border from gray (`,(0,r.jsx)(t.code,{children:`--ods-semantic-color-border-brand-minor`}),`): the brand ramp reaches neither, and the border follows no ramp. Re-declare these `,(0,r.jsx)(t.code,{children:`--ods-semantic-*`}),` roles to change them. `,(0,r.jsx)(t.code,{children:`@ovhcloud/ods-themes/blue-jeans/css`}),` points the three at the brand ramp instead (`,(0,r.jsx)(t.code,{children:`500`}),`, `,(0,r.jsx)(t.code,{children:`700`}),` and `,(0,r.jsx)(t.code,{children:`500`}),`), so a theme loaded after it repaints them through that ramp. The ramps also only take effect on `,(0,r.jsx)(t.code,{children:`:root`}),`: a theme scoped to a container, such as the root of a micro-frontend, re-declares the `,(0,r.jsx)(t.code,{children:`--ods-semantic-*`}),` roles themselves.`]}),`
`,(0,r.jsx)(t.p,{children:`Load a single theme, then your stylesheet after it: a theme loaded after your stylesheet overrides every token it declares, palette ramps included.`}),`
`,(0,r.jsx)(s,{label:`Design tokens JSON`,level:2}),`
`,(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:`@ovhcloud/ods-themes/default/tokens`}),` keeps its shape, but every key changes: it lists the `,(0,r.jsx)(t.code,{children:`--ods-semantic-*`}),` and `,(0,r.jsx)(t.code,{children:`--ods-palette-*`}),` tokens. `,(0,r.jsx)(t.code,{children:`root`}),` gives the value each token resolves to, and `,(0,r.jsx)(t.code,{children:`refs`}),` the `,(0,r.jsx)(t.code,{children:`var()`}),` reference of the tokens that point at another one.`]}),`
`,(0,r.jsx)(t.p,{children:`To find the imports in your code:`}),`
`,(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:`language-sh`,children:`grep -rn "ods-themes/default/tokens" src/
`})}),`
`,(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:`before`})}),`
`,(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:`language-ts`,children:`import tokens from '@ovhcloud/ods-themes/default/tokens';

const brand = tokens.root['--ods-theme-primary-color'];
`})}),`
`,(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:`after`})}),`
`,(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:`language-ts`,children:`import tokens from '@ovhcloud/ods-themes/default/tokens';

const brand = tokens.root['--ods-semantic-color-surface-brand'];
`})}),`
`,(0,r.jsxs)(t.p,{children:[`Each theme ships its own JSON: `,(0,r.jsx)(t.code,{children:`@ovhcloud/ods-themes/blue-jeans/tokens`}),`, `,(0,r.jsx)(t.code,{children:`aluminium-dark/tokens`}),` and `,(0,r.jsx)(t.code,{children:`blue-jeans-dark/tokens`}),`. They share the `,(0,r.jsx)(t.code,{children:`--ods-semantic-*`}),` keys; the `,(0,r.jsx)(t.code,{children:`--ods-palette-*`}),` keys belong to each theme. If you move to Blue Jeans to keep the OVHcloud look, read `,(0,r.jsx)(t.code,{children:`blue-jeans/tokens`}),`: `,(0,r.jsx)(t.code,{children:`default/tokens`}),` gives the Aluminium values.`]}),`
`,(0,r.jsx)(s,{label:`Theme names in JavaScript`,level:2}),`
`,(0,r.jsxs)(t.p,{children:[`The JavaScript entry point of `,(0,r.jsx)(t.code,{children:`@ovhcloud/ods-themes`}),` is removed, with the `,(0,r.jsx)(t.code,{children:`ODS_THEME`}),` enum and the `,(0,r.jsx)(t.code,{children:`ODS_THEMES`}),` list it exported. They only ever held `,(0,r.jsx)(t.code,{children:`default`}),`. Importing them now fails at build time.`]}),`
`,(0,r.jsx)(t.p,{children:`To find them in your code:`}),`
`,(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:`language-sh`,children:`grep -rnE "ODS_THEMES?\\b" src/
`})}),`
`,(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:`before`})}),`
`,(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:`language-ts`,children:`import { ODS_THEME, ODS_THEMES } from '@ovhcloud/ods-themes';

const theme = ODS_THEME.default;
const themes = ODS_THEMES;
`})}),`
`,(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:`after`})}),`
`,(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:`language-ts`,children:`const theme = 'default';
const themes = ['default', 'aluminium-dark', 'blue-jeans', 'blue-jeans-dark'] as const;
`})}),`
`,(0,r.jsxs)(t.p,{children:[`Keep the list of themes in your application: list the ones it offers, each loaded through its export path, `,(0,r.jsx)(t.code,{children:`@ovhcloud/ods-themes/<theme>/css`}),`.`]}),`
`,(0,r.jsx)(s,{label:`Component tokens and style variables`,level:2}),`
`,(0,r.jsxs)(t.p,{children:[`The `,(0,r.jsx)(t.code,{children:`--ods-<component>-*`}),` custom properties keep their names, with the exceptions below. An override of a removed name is ignored without any warning; a read of a removed SCSS variable fails the build with "Undefined variable".`]}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:`--ods-button-border-radius-width`}),` is renamed `,(0,r.jsx)(t.code,{children:`--ods-button-border-width`}),`, and the SCSS variable `,(0,r.jsx)(t.code,{children:`$ods-button-border-radius-width`}),` of `,(0,r.jsx)(t.code,{children:`@ovhcloud/ods-react/style`}),` is renamed `,(0,r.jsx)(t.code,{children:`$ods-button-border-width`}),`.`]}),`
`,(0,r.jsxs)(t.li,{children:[`On Code, `,(0,r.jsx)(t.code,{children:`--ods-code-primary-color`}),` is renamed `,(0,r.jsx)(t.code,{children:`--ods-code-text-color`}),`, `,(0,r.jsx)(t.code,{children:`--ods-code-secondary-color`}),` is renamed `,(0,r.jsx)(t.code,{children:`--ods-code-background-color`}),`, and `,(0,r.jsx)(t.code,{children:`--ods-code-trigger-background-color`}),` is renamed `,(0,r.jsx)(t.code,{children:`--ods-code-trigger-color`}),`.`]}),`
`,(0,r.jsxs)(t.li,{children:[`The tokens that only painted a disabled state are removed, since a disabled component is now dimmed with an opacity: `,(0,r.jsx)(t.code,{children:`--ods-button-group-item-background-color-checked-disabled`}),`, `,(0,r.jsx)(t.code,{children:`--ods-switch-item-background-color-checked-disabled`}),`, `,(0,r.jsx)(t.code,{children:`--ods-tab-background-color-selected-disabled-switch`}),`, `,(0,r.jsx)(t.code,{children:`--ods-tab-border-color-disabled`}),`, `,(0,r.jsx)(t.code,{children:`--ods-tab-border-color-selected-disabled`}),`, `,(0,r.jsx)(t.code,{children:`--ods-tab-border-color-selected-disabled-switch`}),`, `,(0,r.jsx)(t.code,{children:`--ods-tile-background-color-disabled`}),`, and the SCSS variables `,(0,r.jsx)(t.code,{children:`$ods-state-is-disabled-background-color`}),`, `,(0,r.jsx)(t.code,{children:`$ods-state-is-disabled-border-color`}),` and `,(0,r.jsx)(t.code,{children:`$ods-state-is-disabled-text-color`}),`. For a grey disabled state, style `,(0,r.jsx)(t.code,{children:`:disabled`}),` or `,(0,r.jsx)(t.code,{children:`[data-disabled]`}),` yourself.`]}),`
`,(0,r.jsxs)(t.li,{children:[`The tokens that nothing read in 19.7.3 are removed: `,(0,r.jsx)(t.code,{children:`--ods-tile-background-color`}),`, `,(0,r.jsx)(t.code,{children:`--ods-tile-border-color`}),` and `,(0,r.jsx)(t.code,{children:`--ods-tile-border-width`}),` (the Tile renders a Card: override the `,(0,r.jsx)(t.code,{children:`--ods-card-*`}),` tokens instead), and the six `,(0,r.jsx)(t.code,{children:`--ods-modal-header-background-color-*`}),`.`]}),`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:`--ods-tab-border-color-selected`}),` and `,(0,r.jsx)(t.code,{children:`--ods-tab-text-color-selected`}),` are removed: the selected Tab reads `,(0,r.jsx)(t.code,{children:`--ods-semantic-color-border-selected-solid`}),` and `,(0,r.jsx)(t.code,{children:`--ods-semantic-color-content-on-selected`}),`, so override those on `,(0,r.jsx)(t.code,{children:`[data-ods="tab"]`}),`.`]}),`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:`--ods-message-close-button-text-color-primary`}),` is removed: the close button of the Message is a neutral ghost Button, so override `,(0,r.jsx)(t.code,{children:`--ods-button-text-color-neutral-low`}),` on `,(0,r.jsx)(t.code,{children:`[data-ods="message"] [data-ods="button"]`}),`.`]}),`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:`--ods-toggle-control-background-color-hover`}),` is removed: the unchecked Toggle no longer changes its background on hover. `,(0,r.jsx)(t.code,{children:`--ods-toggle-control-border-color`}),` is removed too: the Toggle border reads `,(0,r.jsx)(t.code,{children:`--ods-semantic-color-border-control`}),`, so override that one on `,(0,r.jsx)(t.code,{children:`[data-ods="toggle"]`}),`.`]}),`
`,(0,r.jsxs)(t.li,{children:[`The status custom properties of Badge, Button, Card, Message and Tag are renamed after the status and the emphasis they paint, and the Button and Tag ones that nothing read are removed: see `,(0,r.jsx)(t.strong,{children:`The Sass mixins and CSS custom properties follow the status and the emphasis`}),` in `,(0,r.jsx)(t.strong,{children:`Breaking changes`}),`, and the Button and Message entries.`]}),`
`,(0,r.jsxs)(t.li,{children:[`The SCSS variables deprecated in v19 are removed: `,(0,r.jsx)(t.code,{children:`$ods-modal-z-index`}),` (read `,(0,r.jsx)(t.code,{children:`$ods-overlay-modal-z-index`}),`), `,(0,r.jsx)(t.code,{children:`$ods-modal-border-radius`}),` (read `,(0,r.jsx)(t.code,{children:`var(--ods-semantic-size-radius-overlay)`}),`), `,(0,r.jsx)(t.code,{children:`$ods-modal-margin`}),` (read `,(0,r.jsx)(t.code,{children:`$ods-modal-margin-horizontal`}),` or `,(0,r.jsx)(t.code,{children:`$ods-modal-margin-vertical`}),`), `,(0,r.jsx)(t.code,{children:`$ods-overlay-arrow-background-color`}),` (read `,(0,r.jsx)(t.code,{children:`var(--ods-semantic-color-surface-overlay)`}),`) and `,(0,r.jsx)(t.code,{children:`$drawer-max-size`}),` (read `,(0,r.jsx)(t.code,{children:`$drawer-max-width`}),` or `,(0,r.jsx)(t.code,{children:`$drawer-max-height`}),`). So are the unused `,(0,r.jsx)(t.code,{children:`ods-modal-color()`}),` mixin and `,(0,r.jsx)(t.code,{children:`$ods-overlay-select-z-index`}),` (read `,(0,r.jsx)(t.code,{children:`$ods-overlay-base-z-index`}),`).`]}),`
`]}),`
`,(0,r.jsx)(t.p,{children:`To find them in your code:`}),`
`,(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:`language-sh`,children:`grep -rnE -- 'ods-button-border-radius-width|ods-code-(primary-color|secondary-color|trigger-background-color)([^-a-z]|$)|(checked|selected)-disabled|tab-border-color-disabled|ods-tile-(background-color|border-color|border-width)(-disabled)?([^-a-z]|$)|ods-modal-header-background-color|close-button-text-color-primary|ods-tab-(border|text)-color-selected([^-a-z]|$)|toggle-control-(background-color-hover|border-color)([^-a-z]|$)|\\$ods-state-is-disabled-|\\$ods-modal-(z-index|border-radius|margin)([^-a-z]|$)|ods-overlay-(arrow-background-color|select-z-index)|drawer-max-size|ods-modal-color\\(' src/
`})}),`
`,(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:`before`})}),`
`,(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:`language-scss`,children:`@use '@ovhcloud/ods-react/style' as ods;

.my-button {
  --ods-button-border-radius-width: 2px;
}

.my-code {
  --ods-code-secondary-color: #f5f5f5;
}

.my-layer {
  z-index: ods.$ods-modal-z-index;
}
`})}),`
`,(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:`after`})}),`
`,(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:`language-scss`,children:`@use '@ovhcloud/ods-react/style' as ods;

.my-button {
  --ods-button-border-width: 2px;
}

.my-code {
  --ods-code-background-color: #f5f5f5;
}

.my-layer {
  z-index: ods.$ods-overlay-modal-z-index;
}
`})}),`
`,(0,r.jsxs)(t.p,{children:[`Six SCSS variables of `,(0,r.jsx)(t.code,{children:`@ovhcloud/ods-react/style`}),` held a number in 19.7.3 and now hold a `,(0,r.jsx)(t.code,{children:`var()`}),`: `,(0,r.jsx)(t.code,{children:`$ods-button-size-xs`}),` (`,(0,r.jsx)(t.code,{children:`24px`}),`), `,(0,r.jsx)(t.code,{children:`$ods-button-size-sm`}),` (`,(0,r.jsx)(t.code,{children:`32px`}),`), `,(0,r.jsx)(t.code,{children:`$ods-button-size-md`}),` (`,(0,r.jsx)(t.code,{children:`40px`}),`), `,(0,r.jsx)(t.code,{children:`$ods-badge-height-md`}),` (`,(0,r.jsx)(t.code,{children:`24px`}),`), `,(0,r.jsx)(t.code,{children:`$animation-duration`}),` (`,(0,r.jsx)(t.code,{children:`0.3s`}),`) and `,(0,r.jsx)(t.code,{children:`$ods-link-font-weight`}),` (`,(0,r.jsx)(t.code,{children:`600`}),`). A plain use renders as before, but Sass cannot compute with them: `,(0,r.jsx)(t.code,{children:`ods.$animation-duration * 2`}),` fails the build with "Undefined operation", and `,(0,r.jsx)(t.code,{children:`ods.$ods-badge-height-md + 4px`}),` compiles without an error to an invalid value. Move the operation into `,(0,r.jsx)(t.code,{children:`calc()`}),`.`]}),`
`,(0,r.jsxs)(t.p,{children:[`To find them in your code, with a namespace or without one (`,(0,r.jsx)(t.code,{children:`@use ... as *`}),`). The search also lists an `,(0,r.jsx)(t.code,{children:`$animation-duration`}),` that your own code declares:`]}),`
`,(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:`language-sh`,children:`grep -rnE '\\$(ods-badge-height-md|ods-button-size-(xs|sm|md)|animation-duration|ods-link-font-weight)([^-a-z0-9]|$)' src/
`})}),`
`,(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:`before`})}),`
`,(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:`language-scss`,children:`@use '@ovhcloud/ods-react/style' as ods;

.my-panel {
  min-height: ods.$ods-button-size-md + 8px;
  transition: opacity ods.$animation-duration * 2;
}
`})}),`
`,(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:`after`})}),`
`,(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:`language-scss`,children:`@use '@ovhcloud/ods-react/style' as ods;

.my-panel {
  min-height: calc(#{ods.$ods-button-size-md} + 8px);
  transition: opacity calc(#{ods.$animation-duration} * 2);
}
`})}),`
`,(0,r.jsxs)(t.p,{children:[`Two more changes need no code change: `,(0,r.jsx)(t.code,{children:`$ods-input-actions-padding-right`}),` goes from `,(0,r.jsx)(t.code,{children:`4px`}),` to `,(0,r.jsx)(t.code,{children:`2px`}),`, so the action buttons of a field sit as close to its border as its block inset, and `,(0,r.jsx)(t.code,{children:`./style`}),` gains the `,(0,r.jsx)(t.code,{children:`ods-highlight-indicator()`}),` mixin.`]}),`
`,(0,r.jsx)(s,{label:`Layers`,level:2}),`
`,(0,r.jsx)(t.p,{children:`Each kind of overlay now has its own layer, and a modal is always above a drawer. In v19 they all sat around the same value, so the one opened last was on top:`}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsxs)(t.li,{children:[`lists, popovers, tooltips and toasts: `,(0,r.jsx)(t.code,{children:`99`}),` in v19, `,(0,r.jsx)(t.code,{children:`--ods-semantic-z-index-dropdown`}),` (`,(0,r.jsx)(t.code,{children:`200`}),`) in v20;`]}),`
`,(0,r.jsxs)(t.li,{children:[`drawers: `,(0,r.jsx)(t.code,{children:`101`}),` in v19, `,(0,r.jsx)(t.code,{children:`--ods-semantic-z-index-drawer`}),` (`,(0,r.jsx)(t.code,{children:`300`}),`, backdrop `,(0,r.jsx)(t.code,{children:`299`}),`) in v20;`]}),`
`,(0,r.jsxs)(t.li,{children:[`modals: `,(0,r.jsx)(t.code,{children:`101`}),` (backdrop `,(0,r.jsx)(t.code,{children:`100`}),`) in v19, `,(0,r.jsx)(t.code,{children:`--ods-semantic-z-index-modal`}),` (`,(0,r.jsx)(t.code,{children:`400`}),`, backdrop `,(0,r.jsx)(t.code,{children:`399`}),`) in v20;`]}),`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:`$ods-overlay-modal-z-index`}),` and `,(0,r.jsx)(t.code,{children:`$ods-overlay-drawer-z-index`}),` go from `,(0,r.jsx)(t.code,{children:`100`}),` and `,(0,r.jsx)(t.code,{children:`101`}),` to `,(0,r.jsx)(t.code,{children:`400`}),` and `,(0,r.jsx)(t.code,{children:`300`}),`: their order flips.`]}),`
`]}),`
`,(0,r.jsxs)(t.p,{children:[`A layer of yours stacked on `,(0,r.jsx)(t.code,{children:`--ods-theme-overlay-z-index`}),` or on these SCSS variables, or with a literal z-index between `,(0,r.jsx)(t.code,{children:`102`}),` and `,(0,r.jsx)(t.code,{children:`399`}),` meant to clear the ODS overlays, now lands somewhere else.`]}),`
`,(0,r.jsx)(t.p,{children:`To find them in your code:`}),`
`,(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:`language-sh`,children:`grep -rnE -- '--ods-theme-overlay-z-index|\\$ods-overlay-[a-z]+-z-index|z-index:|zIndex' src/
`})}),`
`,(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:`before`})}),`
`,(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:`language-css`,children:`.my-floating-panel {
  z-index: calc(var(--ods-theme-overlay-z-index) + 2);
}
`})}),`
`,(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:`after`})}),`
`,(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:`language-css`,children:`.my-floating-panel {
  z-index: calc(var(--ods-semantic-z-index-modal) + 1);
}
`})}),`
`,(0,r.jsxs)(t.p,{children:[`To have a drawer win over a modal, pass a higher `,(0,r.jsx)(t.code,{children:`z-index`}),` to the drawer through its `,(0,r.jsx)(t.code,{children:`positionerStyle`}),`.`]}),`
`,(0,r.jsx)(s,{label:`Default rendering`,level:2}),`
`,(0,r.jsxs)(t.p,{children:[`These changes need no code change: the new rendering is intended. To keep the v19 one, set the prop given below, or add the rule given below to your own stylesheet, outside any `,(0,r.jsx)(t.code,{children:`@layer`}),`, so that it wins over the ODS styles.`]}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:`Badge`}),`: a pill with a colored border and colored text on the raised surface (the new `,(0,r.jsx)(t.code,{children:`medium`}),` emphasis), where v19 had 4px corners, no border and a tinted background (filled for `,(0,r.jsx)(t.code,{children:`primary`}),`). Every size keeps its v19 height, but the pill takes 8px on each side (12px in `,(0,r.jsx)(t.code,{children:`lg`}),`) where v19 took 4px (6px). To get closer to v19, use `,(0,r.jsx)(t.code,{children:`emphasis="high"`}),` for the tinted background and `,(0,r.jsx)(t.code,{children:`[data-ods="badge"] { --ods-badge-border-radius: 4px; --ods-badge-padding-horizontal-sm: 3px; --ods-badge-padding-horizontal-md: 3px; --ods-badge-padding-horizontal-lg: 5px; }`}),` for the corners and the widths, border included; the colors stay those of v20. The blue-jeans theme keeps the 4px corners and the v19 widths, and its `,(0,r.jsx)(t.code,{children:`high`}),` emphasis is the v19 tinted background without border (see Badge).`]}),`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:`Card and Tile`}),`: a `,(0,r.jsx)(t.code,{children:`--ods-semantic-color-surface-raised`}),` background, where v19 had none. Keep v19: `,(0,r.jsx)(t.code,{children:`[data-ods="card"], [data-ods="tile"] { --ods-card-background-color: transparent; }`}),`.`]}),`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsxs)(t.strong,{children:[`Card without `,(0,r.jsx)(t.code,{children:`status`})]}),`: neutral, where v19 was primary. Keep v19: `,(0,r.jsx)(t.code,{children:`status="accent"`}),`.`]}),`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsxs)(t.strong,{children:[`Button without `,(0,r.jsx)(t.code,{children:`emphasis`})]}),`: outlined (`,(0,r.jsx)(t.code,{children:`medium`}),`), where a Button without `,(0,r.jsx)(t.code,{children:`variant`}),` was filled in v19. Keep v19: `,(0,r.jsx)(t.code,{children:`emphasis="high"`}),` (see `,(0,r.jsx)(t.strong,{children:`Button`}),`).`]}),`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsxs)(t.strong,{children:[`Message without `,(0,r.jsx)(t.code,{children:`emphasis`})]}),`: the raised surface with a light colored border (`,(0,r.jsx)(t.code,{children:`medium`}),`), where a Message without `,(0,r.jsx)(t.code,{children:`variant`}),` had a tinted background in v19. Keep v19: `,(0,r.jsx)(t.code,{children:`emphasis="high"`}),` (see `,(0,r.jsx)(t.strong,{children:`Message`}),`).`]}),`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:`Accordion`}),`: a `,(0,r.jsx)(t.code,{children:`--ods-semantic-color-surface-raised`}),` background and 8px outer corners, where v19 had no background and 4px corners. Keep v19: `,(0,r.jsx)(t.code,{children:`[data-ods="accordion"] { --ods-accordion-background-color: transparent; --ods-accordion-border-radius: 4px; }`}),`.`]}),`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:`Button`}),`: 4px corners at every size, where v19 had 2px (`,(0,r.jsx)(t.code,{children:`xs`}),`), 4px (`,(0,r.jsx)(t.code,{children:`sm`}),`) and 8px (`,(0,r.jsx)(t.code,{children:`md`}),`). Keep v19: `,(0,r.jsx)(t.code,{children:`[data-ods="button"] { --ods-button-border-radius-xs: 2px; --ods-button-border-radius-sm: 4px; --ods-button-border-radius-md: 8px; }`}),`.`]}),`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:`Input, Quantity, Textarea and the fields built on them`}),`: a `,(0,r.jsx)(t.code,{children:`--ods-semantic-color-surface-control`}),` background, where v19 was transparent. Keep v19: `,(0,r.jsx)(t.code,{children:`--ods-semantic-color-surface-control: transparent`}),` on the container of the fields, never on `,(0,r.jsx)(t.code,{children:`:root`}),`, where it would also clear the open lists of Select, Combobox and Query Filter. In that container, it also clears the Checkbox, the Select control, the outline Button (a Cancel or Back button next to the fields), and a list rendered with `,(0,r.jsx)(t.code,{children:`createPortal={ false }`}),`, which sits inside the container.`]}),`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:`Tabs`}),`: the selected tab fills with `,(0,r.jsx)(t.code,{children:`--ods-semantic-color-surface-selected`}),`, where v19 left it transparent, and the selected segment of a switch gets an outline. Keep v19: `,(0,r.jsx)(t.code,{children:`[data-ods="tab"] { --ods-semantic-color-surface-selected: transparent; --ods-tab-border-color-selected-switch: transparent; }`}),`. Hovering a switch segment now paints `,(0,r.jsx)(t.code,{children:`--ods-tab-background-color-hover`}),`, the same token as the hover of the default tabs, so no rule removes it without changing those too.`]}),`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:`Combobox`}),`: the tags of a multiple Combobox are `,(0,r.jsx)(t.code,{children:`accent`}),`, where v19 rendered the default `,(0,r.jsx)(t.code,{children:`information`}),` Tag, and the focused tag reads the accent hover tokens of the Tag. An override of the information Tag tokens no longer reaches these tags: override `,(0,r.jsx)(t.code,{children:`--ods-tag-*-accent*`}),` instead.`]}),`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:`Query Filter`}),`: the tags are `,(0,r.jsx)(t.code,{children:`accent`}),`, where v19 rendered the default `,(0,r.jsx)(t.code,{children:`information`}),` Tag. An override of the information Tag tokens no longer reaches them: override `,(0,r.jsx)(t.code,{children:`--ods-tag-*-accent*`}),` instead.`]}),`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:`Link`}),`: the hover color is the rest color, `,(0,r.jsx)(t.code,{children:`--ods-semantic-color-content-brand`}),`, where v19 darkened it. The colors are read from `,(0,r.jsx)(t.code,{children:`--ods-link-text-color`}),`, `,(0,r.jsx)(t.code,{children:`--ods-link-text-color-hover`}),` and `,(0,r.jsx)(t.code,{children:`--ods-link-text-color-visited`}),`, also declared by the `,(0,r.jsx)(t.code,{children:`ods-link()`}),` mixin. Keep the v19 hover: `,(0,r.jsx)(t.code,{children:`:where([data-ods="link"], [data-ods="breadcrumb-link"], [data-ods="breadcrumb"] li > button) { --ods-link-text-color-hover: var(--ods-semantic-color-interaction-brand-hover); }`}),` (the last selector is the `,(0,r.jsx)(t.code,{children:`Breadcrumb`}),` ellipsis, which has no `,(0,r.jsx)(t.code,{children:`data-ods`}),`). An element styled with `,(0,r.jsx)(t.code,{children:`ods-link()`}),` declares the property itself: set it in the same rule, after the `,(0,r.jsx)(t.code,{children:`@include`}),`. The link is also underlined at rest: see `,(0,r.jsx)(t.strong,{children:`Link underline`}),` below.`]}),`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:`Modal`}),`: the content draws `,(0,r.jsx)(t.code,{children:`--ods-semantic-shadow-overlay`}),`, as the Drawer and the other overlays, where v19 drew no shadow. In the dark themes, this shadow is what sets the modal off its backdrop. Keep v19: `,(0,r.jsx)(t.code,{children:`[data-ods="modal-content"] { box-shadow: none; }`}),`.`]}),`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:`Motion`}),`: the Toggle thumb goes from `,(0,r.jsx)(t.code,{children:`0.4s ease`}),` to 300ms `,(0,r.jsx)(t.code,{children:`ease-in-out`}),`, its checked background and border from `,(0,r.jsx)(t.code,{children:`0.2s ease`}),` to 200ms `,(0,r.jsx)(t.code,{children:`ease-in-out`}),`, the Radio dot from 120ms to 150ms, and the TreeView and TabList transitions from `,(0,r.jsx)(t.code,{children:`ease`}),` to `,(0,r.jsx)(t.code,{children:`ease-in-out`}),`. When the user asks for reduced motion, the default theme also brings `,(0,r.jsx)(t.code,{children:`--ods-semantic-motion-duration-fast`}),`, `,(0,r.jsx)(t.code,{children:`-medium`}),` and `,(0,r.jsx)(t.code,{children:`-slow`}),` down to `,(0,r.jsx)(t.code,{children:`0.01s`}),`. Keep the full durations: `,(0,r.jsx)(t.code,{children:`@media (prefers-reduced-motion: reduce) { :root { --ods-semantic-motion-duration-fast: 150ms; --ods-semantic-motion-duration-medium: 200ms; --ods-semantic-motion-duration-slow: 300ms; } }`}),`, loaded after the theme.`]}),`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:`Disabled components`}),`: dimmed with an opacity, where v19 repainted them grey. Keep v19: style `,(0,r.jsx)(t.code,{children:`:disabled`}),` or `,(0,r.jsx)(t.code,{children:`[data-disabled]`}),` yourself.`]}),`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:`Modal and Drawer`}),`: a modal is always above a drawer (see `,(0,r.jsx)(t.strong,{children:`Layers`}),`).`]}),`
`]}),`
`,(0,r.jsx)(s,{label:`Link underline`,level:3}),`
`,(0,r.jsxs)(t.p,{children:[`A link is underlined at rest, 1px in its own color, so that it is not told from the surrounding text by its color alone (RGAA 10.6, WCAG 1.4.1), and the underline turns 2px on hover: the thicker underline is the hover signal. v19 only drew it on hover, 1px, with a left-to-right sweep. It applies to `,(0,r.jsx)(t.code,{children:`Link`}),`, the `,(0,r.jsx)(t.code,{children:`Breadcrumb`}),` links, the `,(0,r.jsx)(t.code,{children:`Markdown`}),` links and the elements styled with the `,(0,r.jsx)(t.code,{children:`ods-link()`}),` mixin. An icon-only link made of ODS icons and the `,(0,r.jsx)(t.code,{children:`Breadcrumb`}),` ellipsis have no underline at rest, the page links and the chevrons of a `,(0,r.jsx)(t.code,{children:`Pagination`}),` keep a 1px hover underline, and a disabled link keeps its rest underline, dimmed with it.`]}),`
`,(0,r.jsxs)(t.p,{children:[`The thicknesses are read from `,(0,r.jsx)(t.code,{children:`--ods-link-underline-thickness`}),` and `,(0,r.jsx)(t.code,{children:`--ods-link-underline-thickness-hover`}),`. To keep the links of a navigation, a menu or a footer without an underline at rest, set them on that container only, so that the links within your text keep theirs:`]}),`
`,(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:`language-css`,children:`.my-app-nav {
  --ods-link-underline-thickness: 0;
  --ods-link-underline-thickness-hover: 1px;
}
`})}),`
`,(0,r.jsxs)(t.p,{children:[`A `,(0,r.jsx)(t.code,{children:`Link`}),` restyled as a button or as a full-width menu item now draws its 1px line along its bottom edge at rest, and a `,(0,r.jsx)(t.code,{children:`Link`}),` that wraps a `,(0,r.jsx)(t.code,{children:`Button`}),` or an image draws it under that element: set `,(0,r.jsx)(t.code,{children:`--ods-link-underline-thickness: 0`}),` on that `,(0,r.jsx)(t.code,{children:`Link`}),`, or, when it runs an action rather than a navigation, render a `,(0,r.jsx)(t.code,{children:`Button`}),` instead. Keep the underline on a link placed within a sentence: without it, the link is told by its color only.`]}),`
`,(0,r.jsxs)(t.p,{children:[`The underline is a pseudo-element, not a `,(0,r.jsx)(t.code,{children:`text-decoration`}),`: `,(0,r.jsx)(t.code,{children:`text-decoration: none`}),`, or the Tailwind `,(0,r.jsx)(t.code,{children:`no-underline`}),` class, does not remove it. Set the variable instead, for instance `,(0,r.jsx)(t.code,{children:`[--ods-link-underline-thickness:0]`}),` in Tailwind.`]}),`
`,(0,r.jsxs)(t.p,{children:[`The content of a `,(0,r.jsx)(t.code,{children:`Menu`}),` or a `,(0,r.jsx)(t.code,{children:`Popover`}),` renders in a portal, outside your container: set the variables on `,(0,r.jsx)(t.code,{children:`MenuContent`}),` or `,(0,r.jsx)(t.code,{children:`PopoverContent`}),`, through their `,(0,r.jsx)(t.code,{children:`className`}),`.`]}),`
`,(0,r.jsxs)(t.p,{children:[`The icon-only case is detected on the ODS `,(0,r.jsx)(t.code,{children:`Icon`}),` component itself: a component of yours that renders it is not, and that link keeps its underline. Set `,(0,r.jsx)(t.code,{children:`--ods-link-underline-thickness: 0`}),` on it.`]}),`
`,(0,r.jsxs)(t.p,{children:[`A rule of yours on the `,(0,r.jsx)(t.code,{children:`::after`}),` of a link (`,(0,r.jsx)(t.code,{children:`[data-ods="link"]`}),`, `,(0,r.jsx)(t.code,{children:`[data-ods="breadcrumb-link"]`}),` or an element styled with `,(0,r.jsx)(t.code,{children:`ods-link()`}),`) was written for a line hidden at rest. A `,(0,r.jsx)(t.code,{children:`height`}),` now shows at rest and gives way to the 2px of the hover, so the link gets thinner on hover. A current-page indicator made with `,(0,r.jsx)(t.code,{children:`transform: scaleX(1)`}),` no longer stands out. Replace these rules with the custom properties:`]}),`
`,(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:`language-css`,children:`.my-link {
  --ods-link-underline-thickness: 0;
  --ods-link-underline-thickness-hover: 3px;
}

.my-nav [aria-current="page"] {
  --ods-link-underline-thickness: 2px;
  --ods-link-underline-thickness-hover: 2px;
}
`})}),`
`,(0,r.jsx)(t.p,{children:`To find the cases above:`}),`
`,(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:`language-sh`,children:`rg -U -l '<(Ods)?Link\\b[^>]*>\\s*<(Button|img)\\b' -g '*.tsx' src
rg -U -l '<(MenuItem|PopoverContent)\\b[^<]*>[\\s\\S]{0,400}?<(Ods)?Link\\b' -g '*.tsx' src
grep -rnE -A8 'ods-link\\(\\)|data-ods=.(breadcrumb-)?link' src/ | grep -E '::after|scaleX|height'
`})}),`
`,(0,r.jsxs)(t.p,{children:[`Closest to v19 for every link, without the sweep: `,(0,r.jsx)(t.code,{children:`:root { --ods-link-underline-thickness: 0; --ods-link-underline-thickness-hover: 1px; }`}),`. With the v19 sweep on `,(0,r.jsx)(t.code,{children:`Link`}),` and the `,(0,r.jsx)(t.code,{children:`Breadcrumb`}),` links too:`]}),`
`,(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:`language-css`,children:`:root {
  --ods-link-underline-thickness: 0;
  --ods-link-underline-thickness-hover: 1px;
}

:where([data-ods="link"], [data-ods="breadcrumb-link"]) {
  --ods-link-underline-thickness: 1px;
}

:where([data-ods="link"], [data-ods="breadcrumb-link"])::after {
  transform: scaleX(0);
  transform-origin: left center;
  transition: transform var(--ods-semantic-motion-duration-medium) var(--ods-semantic-motion-easing-enter);
}

:where([data-ods="link"], [data-ods="breadcrumb-link"]):is(:hover, :focus-visible):not([aria-disabled="true"])::after {
  transform: scaleX(1);
}
`})}),`
`,(0,r.jsxs)(t.p,{children:[`The sweep only reaches `,(0,r.jsx)(t.code,{children:`Link`}),` and the `,(0,r.jsx)(t.code,{children:`Breadcrumb`}),` links: the ellipsis and the elements styled with `,(0,r.jsx)(t.code,{children:`ods-link()`}),` have no `,(0,r.jsx)(t.code,{children:`data-ods`}),`, and keep the thicknesses with no sweep.`]}),`
`,(0,r.jsx)(s,{label:`Typography`,level:2}),`
`,(0,r.jsxs)(t.p,{children:[`The default font family is renamed from `,(0,r.jsx)(t.code,{children:`'Source Sans Pro'`}),` to `,(0,r.jsx)(t.code,{children:`'Source Sans 3'`}),`, the current name of the font. The font files shipped by ODS were already Source Sans 3, so the rendering is unchanged: only the CSS family name changes.`]}),`
`,(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:`--ods-semantic-font-family-body`}),` and `,(0,r.jsx)(t.code,{children:`--ods-semantic-font-family-heading`}),` start with `,(0,r.jsx)(t.code,{children:`'Source Sans 3'`}),`, and the `,(0,r.jsx)(t.code,{children:`@font-face`}),` rules of `,(0,r.jsx)(t.code,{children:`@ovhcloud/ods-themes/default/fonts`}),` and `,(0,r.jsx)(t.code,{children:`@ovhcloud/ods-themes/fonts-base64`}),` declare the font under that name only: there is `,(0,r.jsx)(t.strong,{children:`no`}),` `,(0,r.jsx)(t.code,{children:`'Source Sans Pro'`}),` alias. If you only use the theme tokens, with the fonts loaded by ODS, there is nothing to do, except in the cases below.`]}),`
`,(0,r.jsxs)(t.p,{children:[`If your CSS or a custom theme writes `,(0,r.jsx)(t.code,{children:`'Source Sans Pro'`}),`, it no longer matches any font loaded by ODS and the text falls back to the next font of your stack: use `,(0,r.jsx)(t.code,{children:`var(--ods-semantic-font-family-body)`}),`, or `,(0,r.jsx)(t.code,{children:`'Source Sans 3'`}),`, instead. In particular:`]}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:`A theme exported from the v19 Theme Generator`}),` contains `,(0,r.jsx)(t.code,{children:`--ods-theme-font-family`}),` and `,(0,r.jsx)(t.code,{children:`--ods-font-family-default`}),` with `,(0,r.jsx)(t.code,{children:`'Source Sans Pro'`}),`. v20 reads neither, nor any other name of such a theme (see `,(0,r.jsx)(t.strong,{children:`Custom themes`}),`). To change the font, set `,(0,r.jsx)(t.code,{children:`--ods-semantic-font-family-body`}),` and `,(0,r.jsx)(t.code,{children:`--ods-semantic-font-family-heading`}),`.`]}),`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsxs)(t.strong,{children:[`If you load `,(0,r.jsx)(t.code,{children:`@ovhcloud/ods-themes/default/css`}),` with your own `,(0,r.jsx)(t.code,{children:`@font-face`})]}),` declared as `,(0,r.jsx)(t.code,{children:`'Source Sans Pro'`}),`, rename it `,(0,r.jsx)(t.code,{children:`'Source Sans 3'`}),`, or load `,(0,r.jsx)(t.code,{children:`@ovhcloud/ods-themes/default/fonts`}),` instead.`]}),`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:`@ovhcloud/ods-themes/default/tokens`}),` exposes the font under its new name, in `,(0,r.jsx)(t.code,{children:`--ods-semantic-font-family-body`}),` (see `,(0,r.jsx)(t.strong,{children:`Design tokens JSON`}),`).`]}),`
`]}),`
`,(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:`before`})}),`
`,(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:`language-css`,children:`body {
  font-family: 'Source Sans Pro', 'Trebuchet MS', arial, 'Segoe UI', sans-serif;
}
`})}),`
`,(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:`after`})}),`
`,(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:`language-css`,children:`body {
  font-family: var(--ods-semantic-font-family-body);
}
`})}),`
`,(0,r.jsx)(t.p,{children:`To find the occurrences in your code:`}),`
`,(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:`language-sh`,children:`grep -rniE "source.?sans.?pro" src/
`})}),`
`,(0,r.jsxs)(t.p,{children:[`If you reference the theme Sass sources or font files directly (Sass imports, copied assets, CDN URLs, `,(0,r.jsx)(t.code,{children:`<link rel="preload">`}),`), the `,(0,r.jsx)(t.code,{children:`assets/fonts/source-sans-pro/`}),` folder is renamed `,(0,r.jsx)(t.code,{children:`assets/fonts/source-sans-3/`}),`, and the `,(0,r.jsx)(t.code,{children:`source-sans-pro-font-face`}),` and `,(0,r.jsx)(t.code,{children:`source-sans-pro-italic-font-face`}),` mixins are renamed `,(0,r.jsx)(t.code,{children:`source-sans-3-font-face`}),` and `,(0,r.jsx)(t.code,{children:`source-sans-3-italic-font-face`}),`.`]}),`
`,(0,r.jsxs)(t.p,{children:[`The `,(0,r.jsx)(t.code,{children:`@ovhcloud/ods-themes/default`}),` import, the default theme with its fonts inlined as base64, is removed: it reloaded every font with the theme. Load the theme and the fonts separately. The base64 fonts remain, as a fallback for a setup that cannot serve the font files, in `,(0,r.jsx)(t.code,{children:`@ovhcloud/ods-themes/fonts-base64`}),`: the same fonts as `,(0,r.jsx)(t.code,{children:`default/fonts`}),`, those of the themes ODS ships, to load instead of it.`]}),`
`,(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:`before`})}),`
`,(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:`language-typescript`,children:`import '@ovhcloud/ods-themes/default';
`})}),`
`,(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:`after`})}),`
`,(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:`language-typescript`,children:`import '@ovhcloud/ods-themes/default/css';
import '@ovhcloud/ods-themes/default/fonts';
`})}),`
`,(0,r.jsx)(t.p,{children:`Or, if your setup cannot serve the font files:`}),`
`,(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:`language-typescript`,children:`import '@ovhcloud/ods-themes/default/css';
import '@ovhcloud/ods-themes/fonts-base64';
`})}),`
`,(0,r.jsxs)(t.p,{children:[`In Sass, `,(0,r.jsx)(t.code,{children:`@import '@ovhcloud/ods-themes/default';`}),` becomes the same two imports, `,(0,r.jsx)(t.code,{children:`default/css`}),` and `,(0,r.jsx)(t.code,{children:`default/fonts`}),`.`]}),`
`,(0,r.jsxs)(t.p,{children:[`The build fails on the old import: Sass reports that it cannot find the stylesheet, and the bundler that the package does not export `,(0,r.jsx)(t.code,{children:`./default`}),` (`,(0,r.jsx)(t.code,{children:`"./default" is not exported`}),`, or `,(0,r.jsx)(t.code,{children:`Missing "./default" specifier`}),` with an older Vite).`]}),`
`,(0,r.jsxs)(t.p,{children:[`The import ends with `,(0,r.jsx)(t.code,{children:`default`}),`, so this search finds it in a JavaScript or a Sass file:`]}),`
`,(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:`language-sh`,children:`grep -rnE "ods-themes/default['\\"]" src/
`})}),`
`,(0,r.jsx)(s,{label:`Behavior changes`,level:2}),`
`,(0,r.jsx)(t.p,{children:`These apply whichever React version you use.`}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:`Drawer`}),` without backdrop, focus on close: when the Drawer is closed while the focus is inside it (Escape, a close button inside it, or `,(0,r.jsx)(t.code,{children:`open`}),` set to `,(0,r.jsx)(t.code,{children:`false`}),` by your code), or after its focused element was removed, the focus now returns to the trigger it was opened from or, for a Drawer without trigger, to the element that had the focus before it opened. The page scrolls that element back into view if it has left the screen. In v19, the focus stayed on an element of the closed Drawer. A focus moved elsewhere in the page is never taken back, so code that focuses another element when the Drawer closes keeps working, and code that only focuses the trigger again can be removed. A layer opened from the Drawer (a confirmation Modal, a Menu) that gives the focus back inside the closed Drawer hands it to the trigger too. A Drawer unmounted while open (`,(0,r.jsx)(t.code,{children:`{ isOpen && <Drawer open> }`}),`) gives nothing back: keep it mounted and drive `,(0,r.jsx)(t.code,{children:`open`}),` instead.`]}),`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:`Drawer`}),` with a custom `,(0,r.jsx)(t.code,{children:`id`}),` on `,(0,r.jsx)(t.code,{children:`DrawerContent`}),`: Escape, `,(0,r.jsx)(t.code,{children:`closeOnInteractOutside`}),` and the focus on open now work, and the trigger `,(0,r.jsx)(t.code,{children:`aria-controls`}),` points to the content. In v19, they silently did nothing.`]}),`
`]}),`
`,(0,r.jsx)(s,{label:`Breaking changes`,level:2}),`
`,(0,r.jsx)(t.p,{children:`These changes require a code update: each one comes with its before and after.`}),`
`,(0,r.jsxs)(t.p,{children:[(0,r.jsxs)(t.strong,{children:[`The `,(0,r.jsx)(t.code,{children:`color`}),` prop is removed`]}),` from Badge, Button, Card, Divider, Message, ModalContent, Spinner and Tag (on Divider and ModalContent, it was deprecated since v19), with the `,(0,r.jsx)(t.code,{children:`XXX_COLOR`}),` and `,(0,r.jsx)(t.code,{children:`XXX_COLORS`}),` constants and the `,(0,r.jsx)(t.code,{children:`XxxColor`}),` types of these components and of the Toaster, and with `,(0,r.jsx)(t.code,{children:`toast.primary()`}),`. Where the component has a `,(0,r.jsx)(t.code,{children:`status`}),` prop, use it instead (`,(0,r.jsx)(t.code,{children:`XXX_STATUS`}),`, `,(0,r.jsx)(t.code,{children:`XXX_STATUSES`}),` and the `,(0,r.jsx)(t.code,{children:`XxxStatus`}),` type): the `,(0,r.jsx)(t.code,{children:`primary`}),` value is renamed `,(0,r.jsx)(t.code,{children:`accent`}),` (`,(0,r.jsx)(t.code,{children:`brand`}),` on Button), the other values keep their name, except Button `,(0,r.jsx)(t.code,{children:`information`}),`, `,(0,r.jsx)(t.code,{children:`success`}),` and `,(0,r.jsx)(t.code,{children:`warning`}),`, which have no `,(0,r.jsx)(t.code,{children:`status`}),` (see Button). Divider, ModalContent and Spinner have no `,(0,r.jsx)(t.code,{children:`status`}),`: see their own entry.`]}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsxs)(t.li,{children:[`TypeScript reports each removed usage, even through a spread object: `,(0,r.jsx)(t.code,{children:`color`}),` is typed `,(0,r.jsx)(t.code,{children:`never`}),` on these components, so not even the HTML `,(0,r.jsx)(t.code,{children:`color`}),` attribute is accepted.`]}),`
`,(0,r.jsxs)(t.li,{children:[`In untyped JavaScript, a `,(0,r.jsx)(t.code,{children:`color`}),` attribute is no longer read by these components: it is forwarded to the DOM as the obsolete HTML `,(0,r.jsx)(t.code,{children:`color`}),` attribute. Remove it.`]}),`
`,(0,r.jsxs)(t.li,{children:[`If one of your wrappers declares its own `,(0,r.jsx)(t.code,{children:`color`}),` prop on top of `,(0,r.jsx)(t.code,{children:`BadgeProp`}),` (or the props of the other components above), TypeScript reports that it incorrectly extends it: remove the prop and map its values to `,(0,r.jsx)(t.code,{children:`status`}),`, or keep it under an `,(0,r.jsx)(t.code,{children:`Omit<BadgeProp, 'color'>`}),` if it serves another purpose.`]}),`
`,(0,r.jsxs)(t.li,{children:[`If one of your wrappers takes the HTML props of an element (`,(0,r.jsx)(t.code,{children:`ComponentPropsWithRef<'span'>`}),`…) and spreads them into one of these components, TypeScript reports that `,(0,r.jsx)(t.code,{children:`color`}),` is not assignable to `,(0,r.jsx)(t.code,{children:`undefined`}),`: omit it from the wrapper props (`,(0,r.jsx)(t.code,{children:`Omit<ComponentPropsWithRef<'span'>, 'color'>`}),`).`]}),`
`,(0,r.jsxs)(t.li,{children:[`If one of your wrappers declares its own `,(0,r.jsx)(t.code,{children:`status`}),` prop on top of `,(0,r.jsx)(t.code,{children:`BadgeProp`}),` (or the Button, Card, Message or Tag props), TypeScript reports a conflict, often as `,(0,r.jsx)(t.code,{children:`Type '…' is not assignable to type 'never'`}),` at the call sites or `,(0,r.jsx)(t.code,{children:`Rest types may only be created from object types`}),` in the wrapper: add `,(0,r.jsx)(t.code,{children:`'status'`}),` to the `,(0,r.jsx)(t.code,{children:`Omit`}),` (`,(0,r.jsx)(t.code,{children:`Omit<BadgeProp, 'status'>`}),`) or rename your prop, and destructure it before spreading the other props into the ODS component. In untyped JavaScript, a `,(0,r.jsx)(t.code,{children:`status`}),` attribute forwarded to these components is now interpreted as the status preset.`]}),`
`,(0,r.jsxs)(t.li,{children:[`The Sass mixins and the CSS custom properties follow the status and the emphasis too: see `,(0,r.jsx)(t.strong,{children:`The Sass mixins and CSS custom properties follow the status and the emphasis`}),` below.`]}),`
`]}),`
`,(0,r.jsx)(t.p,{children:`To find the usages to migrate in your code:`}),`
`,(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:`language-sh`,children:`grep -rnE "\\b(BADGE|BUTTON|CARD|MESSAGE|SPINNER|TAG|TOAST|DIVIDER|MODAL)_COLORS?\\b|\\b(Badge|Button|Card|Message|Spinner|Tag|Toast|Divider|Modal)Color\\b|toast\\.primary\\(|[[:space:]]color=" src/
`})}),`
`,(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:`color=`}),` also matches native and third-party elements: review each match. Props passed through an object or a spread (`,(0,r.jsx)(t.code,{children:`{ color: 'primary' }`}),`) are not matched, but TypeScript reports them. In a codebase that also uses other libraries, limit the search to the files that import ODS: `,(0,r.jsx)(t.code,{children:`grep -rl "@ovhcloud/ods-react" src | xargs grep -nE "<same pattern>"`}),`. A library built on ODS (a UI kit wrapping Badge or Button) must migrate too before you can move to v20.`]}),`
`,(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:`The Sass mixins and CSS custom properties follow the status and the emphasis.`}),` The styles behind the props now use the same names:`]}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsxs)(t.li,{children:[`Badge: the status custom properties take their emphasis, and `,(0,r.jsx)(t.code,{children:`primary`}),` becomes `,(0,r.jsx)(t.code,{children:`accent`}),`: `,(0,r.jsx)(t.code,{children:`--ods-badge-background-color-primary`}),` becomes `,(0,r.jsx)(t.code,{children:`--ods-badge-background-color-accent-high`}),`, `,(0,r.jsx)(t.code,{children:`--ods-badge-text-color-critical`}),` becomes `,(0,r.jsx)(t.code,{children:`--ods-badge-text-color-critical-high`}),` (see Badge), and `,(0,r.jsx)(t.code,{children:`ods-badge-color('primary')`}),` becomes `,(0,r.jsx)(t.code,{children:`ods-badge-color('accent')`}),`. The decorative statuses keep their names.`]}),`
`,(0,r.jsxs)(t.li,{children:[`Card and Tag: `,(0,r.jsx)(t.code,{children:`primary`}),` becomes `,(0,r.jsx)(t.code,{children:`accent`}),` in their custom properties and in the `,(0,r.jsx)(t.code,{children:`ods-tag-color`}),` mixin: `,(0,r.jsx)(t.code,{children:`--ods-tag-border-color-primary-hover`}),` becomes `,(0,r.jsx)(t.code,{children:`--ods-tag-border-color-accent-hover`}),`, `,(0,r.jsx)(t.code,{children:`--ods-card-border-color-primary`}),` becomes `,(0,r.jsx)(t.code,{children:`--ods-card-border-color-accent`}),`. The other statuses keep their names.`]}),`
`,(0,r.jsxs)(t.li,{children:[`Message: `,(0,r.jsx)(t.code,{children:`primary`}),` becomes `,(0,r.jsx)(t.code,{children:`accent`}),` too, and every name also takes its emphasis: `,(0,r.jsx)(t.code,{children:`--ods-message-background-color-primary`}),` becomes `,(0,r.jsx)(t.code,{children:`--ods-message-background-color-accent-high`}),`, not `,(0,r.jsx)(t.code,{children:`--ods-message-background-color-accent`}),` (see Message).`]}),`
`,(0,r.jsxs)(t.li,{children:[`Button: every status custom property and mixin takes its emphasis, and `,(0,r.jsx)(t.code,{children:`primary`}),` becomes `,(0,r.jsx)(t.code,{children:`brand`}),`: `,(0,r.jsx)(t.code,{children:`--ods-button-background-color-primary-hover`}),` becomes `,(0,r.jsx)(t.code,{children:`--ods-button-background-color-brand-high-hover`}),` (see Button).`]}),`
`,(0,r.jsxs)(t.li,{children:[`The text colors of a hovered or pressed Tag are removed: `,(0,r.jsx)(t.code,{children:`--ods-tag-text-color-<status>-hover`}),` and `,(0,r.jsx)(t.code,{children:`-active`}),` held the rest value and nothing read them. Some Button ones are removed for the same reason (see Button).`]}),`
`,(0,r.jsxs)(t.li,{children:[`These mixins now fail to compile on a value they do not know: `,(0,r.jsx)(t.code,{children:`'primary'`}),` names its new value, and any other value lists the accepted ones. An override or a `,(0,r.jsx)(t.code,{children:`var()`}),` of a custom property under its old name is silently ignored: search for them.`]}),`
`]}),`
`,(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:`language-sh`,children:`grep -rnE -- '--ods-(badge|card|tag)-[a-z-]*primary|--ods-badge-(background|text)-color-(critical|information|neutral|success|warning)([^-a-z]|$)|--ods-tag-text-color-[a-z]+-(hover|active)([^-a-z]|$)|ods-(badge-color|tag-color)[a-z-]*\\(.{0,3}primary' src/
`})}),`
`,(0,r.jsxs)(t.p,{children:[`On Badge, Card and Tag, the renames are 1:1. To apply them to the files found, then add `,(0,r.jsx)(t.code,{children:`emphasis="high"`}),` to the Badges these overrides target and remove the overrides of the Tag text colors by hand:`]}),`
`,(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:`language-sh`,children:`sed -E -i.bak 's/(--ods-badge-(background|text)-color-)primary/\\1accent-high/g; s/(--ods-badge-(background|text)-color-(critical|information|neutral|success|warning))([^-a-z]|$)/\\1-high\\4/g; s/(--ods-(card|tag)-[a-z-]*)primary/\\1accent/g; s/(ods-(badge-color|tag-color)[a-z-]*\\([[:space:]]*["'"'"']?)primary/\\1accent/g' <files>
`})}),`
`,(0,r.jsx)(t.p,{children:`These searches miss a status passed through a variable or a list, and a name built by interpolation:`}),`
`,(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:`language-scss`,children:`@each $status in primary, information, success {
  .my-button--#{$status} {
    @include ods.ods-button-variant-default($status);
  }
}
`})}),`
`,(0,r.jsxs)(t.p,{children:[`The build reports a leftover mixin value, one value at a time. Nothing reports an interpolated custom property (`,(0,r.jsx)(t.code,{children:`--ods-tag-background-color-#{$status}`}),` in Sass, `,(0,r.jsx)(t.code,{children:"`--ods-tag-background-color-${status}`"}),` in TypeScript): search them too.`]}),`
`,(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:`language-sh`,children:`grep -rnE -- '--ods-(badge|button|card|message|tag)-[a-z-]*(#\\{|\\$\\{)' src/
grep -rlE "@ovhcloud/ods-react/style" src | xargs grep -nwE "primary|information|success|warning"
`})}),`
`,(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:`before`})}),`
`,(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:`language-scss`,children:`@use '@ovhcloud/ods-react/style' as ods;

.my-badge {
  @include ods.ods-badge-color('primary');
}

.my-tags {
  --ods-tag-background-color-primary-hover: #e0f0ff;
}
`})}),`
`,(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:`after`})}),`
`,(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:`language-scss`,children:`@use '@ovhcloud/ods-react/style' as ods;

.my-badge {
  @include ods.ods-badge-color('accent');
}

.my-tags {
  --ods-tag-background-color-accent-hover: #e0f0ff;
}
`})}),`
`,(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:`The APIs deprecated in v19 are removed`}),`: the Switch component (see Switch), the Pagination and the Toggle used without children (see Pagination and Toggle), the `,(0,r.jsx)(t.code,{children:`renderTotalItemsLabel`}),` and `,(0,r.jsx)(t.code,{children:`withPageSizeSelector`}),` props of Pagination, the positioning props replaced by `,(0,r.jsx)(t.code,{children:`overlayConfig`}),` (see Menu, Popover, Select and Tooltip) and the `,(0,r.jsx)(t.code,{children:`uploadSuccessLabel`}),` prop of FileUploadItem (see File Upload).`]}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:`Fastest path`}),`: upgrade, then run `,(0,r.jsx)(t.code,{children:`tsc --noEmit`}),`. Each removed usage is a type error, even passed through a spread object: `,(0,r.jsx)(t.code,{children:`children`}),` missing on a Pagination or a Toggle, a removed prop elsewhere. The `,(0,r.jsx)(t.code,{children:`grep`}),` commands of each section are a fallback for untyped code.`]}),`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:`On a v19 release older than 19.7.0`}),`, `,(0,r.jsx)(t.code,{children:`overlayConfig`}),`, `,(0,r.jsx)(t.code,{children:`PaginationPages`}),` and `,(0,r.jsx)(t.code,{children:`PaginationPageSizeSelector`}),` do not exist yet: upgrade to the latest 19.x first, which breaks nothing, migrate, then upgrade to v20.`]}),`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:`If you publish a library built on ODS`}),`, release its v20-compatible version first: its compiled JavaScript gets no type error, and a removed prop it still passes is silently ignored.`]}),`
`]}),`
`,(0,r.jsx)(s,{label:`Accordion`,level:3}),`
`,(0,r.jsxs)(t.p,{children:[(0,r.jsxs)(t.strong,{children:[`New `,(0,r.jsx)(t.code,{children:`emphasis`}),` prop`]}),` (`,(0,r.jsx)(t.code,{children:`ACCORDION_EMPHASIS`}),`, `,(0,r.jsx)(t.code,{children:`ACCORDION_EMPHASES`}),` and the `,(0,r.jsx)(t.code,{children:`AccordionEmphasis`}),` type): `,(0,r.jsx)(t.code,{children:`high`}),`, `,(0,r.jsx)(t.code,{children:`medium`}),` or `,(0,r.jsx)(t.code,{children:`low`}),`, set on the root for every item. `,(0,r.jsx)(t.code,{children:`medium`}),` is the default, so an Accordion without `,(0,r.jsx)(t.code,{children:`emphasis`}),` only gets the changes listed in `,(0,r.jsx)(t.strong,{children:`Default rendering`}),`: nothing to migrate. Only a wrapper is affected: if it declares its own `,(0,r.jsx)(t.code,{children:`emphasis`}),` prop on top of `,(0,r.jsx)(t.code,{children:`AccordionProp`}),`, add `,(0,r.jsx)(t.code,{children:`'emphasis'`}),` to its `,(0,r.jsx)(t.code,{children:`Omit`}),` or rename it. In untyped JavaScript, an `,(0,r.jsx)(t.code,{children:`emphasis`}),` attribute forwarded to Accordion is now read as the emphasis preset.`]}),`
`,(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:`before`})}),`
`,(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:`language-tsx`,children:`import { type AccordionProp } from '@ovhcloud/ods-react';

interface FaqProp extends AccordionProp {
  emphasis?: boolean;
}
`})}),`
`,(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:`after`})}),`
`,(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:`language-tsx`,children:`import { type AccordionProp } from '@ovhcloud/ods-react';

interface FaqProp extends Omit<AccordionProp, 'emphasis'> {
  emphasis?: boolean;
}
`})}),`
`,(0,r.jsx)(s,{label:`Badge`,level:3}),`
`,(0,r.jsxs)(t.p,{children:[(0,r.jsxs)(t.strong,{children:[`The `,(0,r.jsx)(t.code,{children:`color`}),` prop is removed`]}),`, with `,(0,r.jsx)(t.code,{children:`BADGE_COLOR`}),`, `,(0,r.jsx)(t.code,{children:`BADGE_COLORS`}),` and the `,(0,r.jsx)(t.code,{children:`BadgeColor`}),` type (see above):`]}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:`color`}),` (or `,(0,r.jsx)(t.code,{children:`BADGE_COLOR`}),`): use `,(0,r.jsx)(t.code,{children:`status`}),` (or `,(0,r.jsx)(t.code,{children:`BADGE_STATUS`}),`).`]}),`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:`color="primary"`}),`: use `,(0,r.jsx)(t.code,{children:`status="accent"`}),`.`]}),`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:`color="alpha"`}),`, `,(0,r.jsx)(t.code,{children:`beta`}),`, `,(0,r.jsx)(t.code,{children:`critical`}),`, `,(0,r.jsx)(t.code,{children:`information`}),`, `,(0,r.jsx)(t.code,{children:`neutral`}),`, `,(0,r.jsx)(t.code,{children:`new`}),`, `,(0,r.jsx)(t.code,{children:`promotion`}),`, `,(0,r.jsx)(t.code,{children:`success`}),`, `,(0,r.jsx)(t.code,{children:`warning`}),`: use `,(0,r.jsx)(t.code,{children:`status`}),` with the same value. `,(0,r.jsx)(t.code,{children:`information`}),` stays the default.`]}),`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:`BADGE_COLORS`}),` and `,(0,r.jsx)(t.code,{children:`BadgeColor`}),`: use `,(0,r.jsx)(t.code,{children:`BADGE_STATUSES`}),` and `,(0,r.jsx)(t.code,{children:`BadgeStatus`}),`.`]}),`
`]}),`
`,(0,r.jsxs)(t.p,{children:[(0,r.jsxs)(t.strong,{children:[`New `,(0,r.jsx)(t.code,{children:`emphasis`}),` prop`]}),` (`,(0,r.jsx)(t.code,{children:`BADGE_EMPHASIS`}),`, `,(0,r.jsx)(t.code,{children:`BADGE_EMPHASES`}),`, `,(0,r.jsx)(t.code,{children:`BadgeEmphasis`}),`): `,(0,r.jsx)(t.code,{children:`high`}),`, `,(0,r.jsx)(t.code,{children:`medium`}),` or `,(0,r.jsx)(t.code,{children:`low`}),`. `,(0,r.jsx)(t.code,{children:`medium`}),` is the default: a colored border and colored text on the raised surface, which is not the v19 look (see `,(0,r.jsx)(t.strong,{children:`Default rendering`}),`). Use `,(0,r.jsx)(t.code,{children:`high`}),` for a tinted background with a light border, the closest to v19, and `,(0,r.jsx)(t.code,{children:`low`}),` for colored text only. In the blue-jeans theme, `,(0,r.jsx)(t.code,{children:`high`}),` is the tinted background without border, as in v19, and `,(0,r.jsx)(t.code,{children:`medium`}),` sits on the raised surface with the light status border: add `,(0,r.jsx)(t.code,{children:`emphasis="high"`}),` to keep the v19 look. If one of your wrappers declares its own `,(0,r.jsx)(t.code,{children:`emphasis`}),` prop on top of `,(0,r.jsx)(t.code,{children:`BadgeProp`}),`, add `,(0,r.jsx)(t.code,{children:`'emphasis'`}),` to its `,(0,r.jsx)(t.code,{children:`Omit`}),` or rename it; in untyped JavaScript, an `,(0,r.jsx)(t.code,{children:`emphasis`}),` attribute forwarded to Badge is now read as the emphasis preset.`]}),`
`,(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:`The status custom properties take the emphasis.`}),` In v19, `,(0,r.jsx)(t.code,{children:`--ods-badge-background-color-<status>`}),` and `,(0,r.jsx)(t.code,{children:`--ods-badge-text-color-<status>`}),` painted the tinted Badge, which is the `,(0,r.jsx)(t.code,{children:`high`}),` emphasis in v20: they become `,(0,r.jsx)(t.code,{children:`--ods-badge-background-color-<status>-high`}),` and `,(0,r.jsx)(t.code,{children:`--ods-badge-text-color-<status>-high`}),`, and apply once you add `,(0,r.jsx)(t.code,{children:`emphasis="high"`}),`. The default `,(0,r.jsx)(t.code,{children:`medium`}),` Badge reads the new `,(0,r.jsx)(t.code,{children:`-<status>-medium`}),` names. No unsuffixed name is left for `,(0,r.jsx)(t.code,{children:`accent`}),`, `,(0,r.jsx)(t.code,{children:`critical`}),`, `,(0,r.jsx)(t.code,{children:`information`}),`, `,(0,r.jsx)(t.code,{children:`neutral`}),`, `,(0,r.jsx)(t.code,{children:`success`}),` and `,(0,r.jsx)(t.code,{children:`warning`}),`, so an old override is ignored rather than applied to another emphasis. The decorative `,(0,r.jsx)(t.code,{children:`alpha`}),`, `,(0,r.jsx)(t.code,{children:`beta`}),`, `,(0,r.jsx)(t.code,{children:`new`}),` and `,(0,r.jsx)(t.code,{children:`promotion`}),` keep their names.`]}),`
`,(0,r.jsxs)(t.p,{children:[`To find the usages to migrate: `,(0,r.jsx)(t.code,{children:`grep -rnE "\\bBADGE_COLORS?\\b|\\bBadgeColor\\b" src/`}),`. The `,(0,r.jsx)(t.code,{children:`color`}),` props are found by the shared search at the top of `,(0,r.jsx)(t.strong,{children:`Breaking changes`}),`, which also catches a `,(0,r.jsx)(t.code,{children:`color`}),` written on its own line.`]}),`
`,(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:`before`})}),`
`,(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:`language-tsx`,children:`import { BADGE_COLOR, Badge } from '@ovhcloud/ods-react';

<Badge color={ BADGE_COLOR.primary }>New feature</Badge>
<Badge color={ BADGE_COLOR.success }>Active</Badge>
`})}),`
`,(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:`after`})}),`
`,(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:`language-tsx`,children:`import { BADGE_STATUS, Badge } from '@ovhcloud/ods-react';

<Badge status={ BADGE_STATUS.accent }>New feature</Badge>
<Badge status={ BADGE_STATUS.success }>Active</Badge>
`})}),`
`,(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:`optional, new in v20`})}),`
`,(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:`language-tsx`,children:`import { BADGE_EMPHASIS, BADGE_STATUS, Badge } from '@ovhcloud/ods-react';

<Badge emphasis={ BADGE_EMPHASIS.high } status={ BADGE_STATUS.critical }>Expired</Badge>
<Badge emphasis={ BADGE_EMPHASIS.low } status={ BADGE_STATUS.success }>Active</Badge>
`})}),`
`,(0,r.jsx)(s,{label:`Button`,level:3}),`
`,(0,r.jsxs)(t.p,{children:[(0,r.jsxs)(t.strong,{children:[`The `,(0,r.jsx)(t.code,{children:`color`}),` prop is removed`]}),`, with `,(0,r.jsx)(t.code,{children:`BUTTON_COLOR`}),`, `,(0,r.jsx)(t.code,{children:`BUTTON_COLORS`}),` and the `,(0,r.jsx)(t.code,{children:`ButtonColor`}),` type (see above):`]}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:`color`}),` (or `,(0,r.jsx)(t.code,{children:`BUTTON_COLOR`}),`): use `,(0,r.jsx)(t.code,{children:`status`}),` (or `,(0,r.jsx)(t.code,{children:`BUTTON_STATUS`}),`).`]}),`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:`color="primary"`}),`: use `,(0,r.jsx)(t.code,{children:`status="brand"`}),`, or nothing, as `,(0,r.jsx)(t.code,{children:`brand`}),` is the default.`]}),`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:`color="critical"`}),` and `,(0,r.jsx)(t.code,{children:`color="neutral"`}),`: use `,(0,r.jsx)(t.code,{children:`status`}),` with the same value.`]}),`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:`color="information"`}),`, `,(0,r.jsx)(t.code,{children:`success`}),` and `,(0,r.jsx)(t.code,{children:`warning`}),` are removed `,(0,r.jsx)(t.strong,{children:`without`}),` `,(0,r.jsx)(t.code,{children:`status`}),` equivalent: a Button does not convey a status. Use a `,(0,r.jsx)(t.code,{children:`brand`}),`, `,(0,r.jsx)(t.code,{children:`neutral`}),` or `,(0,r.jsx)(t.code,{children:`critical`}),` Button, and a Badge or a Message to convey the status.`]}),`
`,(0,r.jsxs)(t.li,{children:[`With them, their CSS custom properties are removed (see `,(0,r.jsx)(t.strong,{children:`The Sass mixins and CSS custom properties are named after the status and the emphasis`}),` below).`]}),`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:`BUTTON_COLORS`}),` and `,(0,r.jsx)(t.code,{children:`ButtonColor`}),`: use `,(0,r.jsx)(t.code,{children:`BUTTON_STATUSES`}),` and `,(0,r.jsx)(t.code,{children:`ButtonStatus`}),`.`]}),`
`]}),`
`,(0,r.jsxs)(t.p,{children:[(0,r.jsxs)(t.strong,{children:[`The `,(0,r.jsx)(t.code,{children:`variant`}),` prop is replaced by `,(0,r.jsx)(t.code,{children:`emphasis`})]}),`, with `,(0,r.jsx)(t.code,{children:`BUTTON_VARIANT`}),`, `,(0,r.jsx)(t.code,{children:`BUTTON_VARIANTS`}),` and the `,(0,r.jsx)(t.code,{children:`ButtonVariant`}),` type (use `,(0,r.jsx)(t.code,{children:`BUTTON_EMPHASIS`}),`, `,(0,r.jsx)(t.code,{children:`BUTTON_EMPHASES`}),` and `,(0,r.jsx)(t.code,{children:`ButtonEmphasis`}),`):`]}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:`variant="default"`}),`: use `,(0,r.jsx)(t.code,{children:`emphasis="high"`}),`.`]}),`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:`variant="outline"`}),`: use `,(0,r.jsx)(t.code,{children:`emphasis="medium"`}),`, or nothing, as `,(0,r.jsx)(t.code,{children:`medium`}),` is the new default.`]}),`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:`variant="ghost"`}),`: use `,(0,r.jsx)(t.code,{children:`emphasis="low"`}),`.`]}),`
`,(0,r.jsxs)(t.li,{children:[`The Sass mixins and the CSS custom properties take the emphasis too (see `,(0,r.jsx)(t.strong,{children:`The Sass mixins and CSS custom properties are named after the status and the emphasis`}),` below).`]}),`
`]}),`
`,(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:`The default rendering changes.`}),` In v19, a Button without `,(0,r.jsx)(t.code,{children:`variant`}),` was filled (the `,(0,r.jsx)(t.code,{children:`default`}),` variant). In v20, a Button without `,(0,r.jsx)(t.code,{children:`emphasis`}),` is `,(0,r.jsx)(t.code,{children:`medium`}),`, which renders as the v19 `,(0,r.jsx)(t.code,{children:`outline`}),` variant. The ODS components built on Button (Pagination, ButtonGroup, Cart…) keep their v19 rendering.`]}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsxs)(t.li,{children:[`To keep the filled rendering, add `,(0,r.jsx)(t.code,{children:`emphasis={ BUTTON_EMPHASIS.high }`}),` (or `,(0,r.jsx)(t.code,{children:`emphasis="high"`}),`) to each Button that set no `,(0,r.jsx)(t.code,{children:`variant`}),`, including in your own components that render or wrap a Button.`]}),`
`,(0,r.jsxs)(t.li,{children:[`If one of your wrappers declares its own `,(0,r.jsx)(t.code,{children:`emphasis`}),` prop on top of `,(0,r.jsx)(t.code,{children:`ButtonProp`}),`, add `,(0,r.jsx)(t.code,{children:`'emphasis'`}),` to its `,(0,r.jsx)(t.code,{children:`Omit`}),` or rename it; in untyped JavaScript, an `,(0,r.jsx)(t.code,{children:`emphasis`}),` attribute forwarded to Button is now read as the emphasis preset.`]}),`
`]}),`
`,(0,r.jsx)(t.p,{children:`To find the Buttons to review in your code:`}),`
`,(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:`language-sh`,children:`grep -rnE "<Button([[:space:]]|>|$)|\\bBUTTON_(VARIANT|COLOR)S?\\b|\\bButton(Variant|Color)\\b" src/
`})}),`
`,(0,r.jsxs)(t.p,{children:[`TypeScript reports every remaining `,(0,r.jsx)(t.code,{children:`variant`}),` and `,(0,r.jsx)(t.code,{children:`color`}),` on a Button. Review each `,(0,r.jsx)(t.code,{children:`<Button`}),` match that sets no `,(0,r.jsx)(t.code,{children:`variant`}),`, on its first line or on the following ones: it changes rendering. This search misses self-closing `,(0,r.jsx)(t.code,{children:`<Button/>`}),` written without a space and Buttons imported under another name (`,(0,r.jsx)(t.code,{children:`import { Button as OdsButton }`}),`): search for those names too.`]}),`
`,(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:`before`})}),`
`,(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:`language-tsx`,children:`import { BUTTON_COLOR, BUTTON_VARIANT, Button } from '@ovhcloud/ods-react';

// filled in v19, medium (outlined) in v20
<Button>Save</Button>
<Button variant={ BUTTON_VARIANT.ghost }>Cancel</Button>
<Button color={ BUTTON_COLOR.critical } variant={ BUTTON_VARIANT.default }>Delete</Button>
`})}),`
`,(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:`after`})}),`
`,(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:`language-tsx`,children:`import { BUTTON_EMPHASIS, BUTTON_STATUS, Button } from '@ovhcloud/ods-react';

<Button emphasis={ BUTTON_EMPHASIS.high }>Save</Button>
<Button emphasis={ BUTTON_EMPHASIS.low }>Cancel</Button>
<Button emphasis={ BUTTON_EMPHASIS.high } status={ BUTTON_STATUS.critical }>Delete</Button>
`})}),`
`,(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:`The Sass mixins and CSS custom properties are named after the status and the emphasis`}),`, `,(0,r.jsx)(t.code,{children:`<status>`}),` being `,(0,r.jsx)(t.code,{children:`brand`}),` (`,(0,r.jsx)(t.code,{children:`primary`}),` in v19), `,(0,r.jsx)(t.code,{children:`critical`}),` or `,(0,r.jsx)(t.code,{children:`neutral`}),`, and `,(0,r.jsx)(t.code,{children:`<property>`}),` being `,(0,r.jsx)(t.code,{children:`background`}),`, `,(0,r.jsx)(t.code,{children:`border`}),` or `,(0,r.jsx)(t.code,{children:`text`}),`:`]}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:`ods-button-variant-default(<status>)`}),`: use `,(0,r.jsx)(t.code,{children:`ods-button-emphasis-high(<status>)`}),`.`]}),`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:`ods-button-variant-outline(<status>)`}),`: use `,(0,r.jsx)(t.code,{children:`ods-button-emphasis-medium(<status>)`}),`.`]}),`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:`ods-button-variant-ghost(<status>)`}),`: use `,(0,r.jsx)(t.code,{children:`ods-button-emphasis-low(<status>)`}),`.`]}),`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:`--ods-button-<property>-color-<status>`}),`, with its `,(0,r.jsx)(t.code,{children:`-hover`}),` and `,(0,r.jsx)(t.code,{children:`-active`}),` states: use `,(0,r.jsx)(t.code,{children:`--ods-button-<property>-color-<status>-high`}),` (`,(0,r.jsx)(t.code,{children:`--ods-button-background-color-primary-hover`}),` becomes `,(0,r.jsx)(t.code,{children:`--ods-button-background-color-brand-high-hover`}),`).`]}),`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:`--ods-button-<property>-color-<status>-outline`}),`, with its states: use `,(0,r.jsx)(t.code,{children:`--ods-button-<property>-color-<status>-medium`}),`.`]}),`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:`--ods-button-<property>-color-<status>-ghost`}),`, with its states: use `,(0,r.jsx)(t.code,{children:`--ods-button-<property>-color-<status>-low`}),`.`]}),`
`,(0,r.jsx)(t.li,{children:`No v19 name keeps another meaning: the names without emphasis, which painted the filled Button, are gone, so an override left under an old name paints nothing rather than another emphasis.`}),`
`,(0,r.jsxs)(t.li,{children:[`Removed, as nothing read them and they held the rest value: `,(0,r.jsx)(t.code,{children:`--ods-button-text-color-<status>-hover`}),` and `,(0,r.jsx)(t.code,{children:`-active`}),` (a high Button keeps its text color), and `,(0,r.jsx)(t.code,{children:`--ods-button-border-color-<status>-ghost`}),` with its states (a low Button draws no border).`]}),`
`,(0,r.jsxs)(t.li,{children:[`The `,(0,r.jsx)(t.code,{children:`information`}),`, `,(0,r.jsx)(t.code,{children:`success`}),` and `,(0,r.jsx)(t.code,{children:`warning`}),` custom properties are removed, and the mixins accept `,(0,r.jsx)(t.code,{children:`brand`}),`, `,(0,r.jsx)(t.code,{children:`critical`}),` and `,(0,r.jsx)(t.code,{children:`neutral`}),` only. A `,(0,r.jsx)(t.code,{children:`var()`}),` of one of them reads the semantic role it held instead, `,(0,r.jsx)(t.code,{children:`<status>`}),` being `,(0,r.jsx)(t.code,{children:`information`}),`, `,(0,r.jsx)(t.code,{children:`success`}),` or `,(0,r.jsx)(t.code,{children:`warning`}),`: `,(0,r.jsx)(t.code,{children:`--ods-semantic-color-surface-<status>`}),` for the high background, `,(0,r.jsx)(t.code,{children:`--ods-semantic-color-border-<status>`}),` for the high and medium border, `,(0,r.jsx)(t.code,{children:`--ods-semantic-color-interaction-<status>-hover`}),` and `,(0,r.jsx)(t.code,{children:`-active`}),` for their hover and active background and border, `,(0,r.jsx)(t.code,{children:`--ods-semantic-color-content-on-<status>-solid`}),` for the high text, `,(0,r.jsx)(t.code,{children:`--ods-semantic-color-surface-control`}),` for the medium background, `,(0,r.jsx)(t.code,{children:`--ods-semantic-color-interaction-<status>-subtle-hover`}),` and `,(0,r.jsx)(t.code,{children:`-active`}),` for the medium and low hover and active background, `,(0,r.jsx)(t.code,{children:`--ods-semantic-color-content-<status>`}),` for the medium and low text and `,(0,r.jsx)(t.code,{children:`--ods-semantic-color-content-on-<status>`}),` for their hover and active text. An override of one of them paints nothing: remove it.`]}),`
`,(0,r.jsxs)(t.li,{children:[`The mixins fail to compile on a value they do not know: `,(0,r.jsx)(t.code,{children:`'primary'`}),` names `,(0,r.jsx)(t.code,{children:`'brand'`}),`, and a removed status says it is removed.`]}),`
`]}),`
`,(0,r.jsx)(t.p,{children:`To find them in your code, this search matches every v19 name and no v20 one:`}),`
`,(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:`language-sh`,children:`grep -rnE -- '--ods-button-(background|border|text)-color-[a-z]+(-ghost|-outline)?(-hover|-active)?([^-a-z]|$)|ods-button-variant-' src/
`})}),`
`,(0,r.jsx)(t.p,{children:`Outside the removed names, the renames are 1:1. To apply them to the files found, in this order:`}),`
`,(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:`language-sh`,children:`sed -E -i.bak 's/(--ods-button-(background|border|text)-color-)primary/\\1brand/g; s/(--ods-button-(background|border|text)-color-(brand|critical|neutral))-ghost/\\1-low/g; s/(--ods-button-(background|border|text)-color-(brand|critical|neutral))-outline/\\1-medium/g; s/(--ods-button-(background|border|text)-color-(brand|critical|neutral))(-hover|-active)?([^-a-z0-9]|$)/\\1-high\\4\\5/g; s/ods-button-variant-default/ods-button-emphasis-high/g; s/ods-button-variant-outline/ods-button-emphasis-medium/g; s/ods-button-variant-ghost/ods-button-emphasis-low/g; s/(ods-button-emphasis-[a-z]+\\([[:space:]]*["'"'"']?)primary/\\1brand/g' <files>
`})}),`
`,(0,r.jsxs)(t.p,{children:[`The removed names come out of it as names that do not exist, and the `,(0,r.jsx)(t.code,{children:`information`}),`, `,(0,r.jsx)(t.code,{children:`success`}),` and `,(0,r.jsx)(t.code,{children:`warning`}),` ones are left as they were: search for them, then replace each `,(0,r.jsx)(t.code,{children:`var()`}),` by its semantic role and remove each override.`]}),`
`,(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:`language-sh`,children:`grep -rnE -- '--ods-button-text-color-[a-z]+-high-(hover|active)|--ods-button-border-color-[a-z]+-low|--ods-button-[a-z-]*(information|success|warning)' src/
`})}),`
`,(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:`before`})}),`
`,(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:`language-scss`,children:`@use '@ovhcloud/ods-react/style' as ods;

.my-action {
  @include ods.ods-button-variant-default('primary');
}

.my-toolbar {
  --ods-button-background-color-primary-hover: #003a8f;
  --ods-button-text-color-neutral-ghost: #4d5592;
}

.my-status {
  color: var(--ods-button-text-color-success-outline);
}
`})}),`
`,(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:`after`})}),`
`,(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:`language-scss`,children:`@use '@ovhcloud/ods-react/style' as ods;

.my-action {
  @include ods.ods-button-emphasis-high('brand');
}

.my-toolbar {
  --ods-button-background-color-brand-high-hover: #003a8f;
  --ods-button-text-color-neutral-low: #4d5592;
}

.my-status {
  color: var(--ods-semantic-color-content-success);
}
`})}),`
`,(0,r.jsx)(s,{label:`Card`,level:3}),`
`,(0,r.jsxs)(t.p,{children:[(0,r.jsxs)(t.strong,{children:[`The `,(0,r.jsx)(t.code,{children:`color`}),` prop is removed`]}),`, with `,(0,r.jsx)(t.code,{children:`CARD_COLOR`}),`, `,(0,r.jsx)(t.code,{children:`CARD_COLORS`}),` and the `,(0,r.jsx)(t.code,{children:`CardColor`}),` type (see above):`]}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:`color`}),` (or `,(0,r.jsx)(t.code,{children:`CARD_COLOR`}),`): use `,(0,r.jsx)(t.code,{children:`status`}),` (or `,(0,r.jsx)(t.code,{children:`CARD_STATUS`}),`).`]}),`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:`color="primary"`}),`: use `,(0,r.jsx)(t.code,{children:`status="accent"`}),`.`]}),`
`,(0,r.jsxs)(t.li,{children:[`No `,(0,r.jsx)(t.code,{children:`color`}),`: the default is now `,(0,r.jsx)(t.code,{children:`neutral`}),`. Set `,(0,r.jsx)(t.code,{children:`status="accent"`}),` to keep the v19 color; the card also paints a background now (see `,(0,r.jsx)(t.strong,{children:`Default rendering`}),`).`]}),`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:`color="critical"`}),`, `,(0,r.jsx)(t.code,{children:`information`}),`, `,(0,r.jsx)(t.code,{children:`neutral`}),`, `,(0,r.jsx)(t.code,{children:`success`}),`, `,(0,r.jsx)(t.code,{children:`warning`}),`: use `,(0,r.jsx)(t.code,{children:`status`}),` with the same value.`]}),`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:`CARD_COLORS`}),` and `,(0,r.jsx)(t.code,{children:`CardColor`}),`: use `,(0,r.jsx)(t.code,{children:`CARD_STATUSES`}),` and `,(0,r.jsx)(t.code,{children:`CardStatus`}),`.`]}),`
`]}),`
`,(0,r.jsxs)(t.p,{children:[`To find the usages to migrate: `,(0,r.jsx)(t.code,{children:`grep -rnE "\\bCARD_COLORS?\\b|\\bCardColor\\b" src/`}),`. The `,(0,r.jsx)(t.code,{children:`color`}),` props are found by the shared search at the top of `,(0,r.jsx)(t.strong,{children:`Breaking changes`}),`, which also catches a `,(0,r.jsx)(t.code,{children:`color`}),` written on its own line.`]}),`
`,(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:`before`})}),`
`,(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:`language-tsx`,children:`import { CARD_COLOR, Card } from '@ovhcloud/ods-react';

<Card color={ CARD_COLOR.neutral }>...</Card>
`})}),`
`,(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:`after`})}),`
`,(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:`language-tsx`,children:`import { CARD_STATUS, Card } from '@ovhcloud/ods-react';

<Card status={ CARD_STATUS.neutral }>...</Card>
`})}),`
`,(0,r.jsx)(s,{label:`Divider`,level:3}),`
`,(0,r.jsxs)(t.p,{children:[(0,r.jsxs)(t.strong,{children:[`The `,(0,r.jsx)(t.code,{children:`color`}),` prop is removed`]}),` (it was deprecated since v19), with `,(0,r.jsx)(t.code,{children:`DIVIDER_COLOR`}),`, `,(0,r.jsx)(t.code,{children:`DIVIDER_COLORS`}),` and the `,(0,r.jsx)(t.code,{children:`DividerColor`}),` type. The Divider has no `,(0,r.jsx)(t.code,{children:`status`}),`.`]}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:`color="primary"`}),` (or `,(0,r.jsx)(t.code,{children:`DIVIDER_COLOR.primary`}),`): remove the prop, it is the default rendering.`]}),`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:`color="neutral"`}),` (or `,(0,r.jsx)(t.code,{children:`DIVIDER_COLOR.neutral`}),`): remove the prop and override the `,(0,r.jsx)(t.code,{children:`background-color`}),` in CSS.`]}),`
`]}),`
`,(0,r.jsxs)(t.p,{children:[`To find the usages to migrate: `,(0,r.jsx)(t.code,{children:`grep -rnE "\\bDIVIDER_COLORS?\\b|\\bDividerColor\\b" src/`}),`. The `,(0,r.jsx)(t.code,{children:`color`}),` props are found by the shared search at the top of `,(0,r.jsx)(t.strong,{children:`Breaking changes`}),`, which also catches a `,(0,r.jsx)(t.code,{children:`color`}),` written on its own line.`]}),`
`,(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:`before`})}),`
`,(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:`language-tsx`,children:`import { DIVIDER_COLOR, Divider } from '@ovhcloud/ods-react';

<Divider color={ DIVIDER_COLOR.primary } />
<Divider color={ DIVIDER_COLOR.neutral } />
`})}),`
`,(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:`after`})}),`
`,(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:`language-tsx`,children:`import { Divider } from '@ovhcloud/ods-react';

<Divider />
<Divider style={{ backgroundColor: 'var(--ods-semantic-color-interaction-neutral-hover)' }} />
`})}),`
`,(0,r.jsx)(s,{label:`File Upload`,level:3}),`
`,(0,r.jsxs)(t.p,{children:[(0,r.jsxs)(t.strong,{children:[`The `,(0,r.jsx)(t.code,{children:`uploadSuccessLabel`}),` prop of FileUploadItem is removed`]}),` (deprecated since v19.3.0). A successful upload has shown an icon instead of this label since then: the prop had no effect. Remove it.`]}),`
`,(0,r.jsxs)(t.p,{children:[`To find the usages to migrate: `,(0,r.jsx)(t.code,{children:`grep -rn "uploadSuccessLabel" src/`}),`.`]}),`
`,(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:`before`})}),`
`,(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:`language-tsx`,children:`import { FileUploadItem } from '@ovhcloud/ods-react';

<FileUploadItem file={ file } progress={ 100 } uploadSuccessLabel="File uploaded" />
`})}),`
`,(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:`after`})}),`
`,(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:`language-tsx`,children:`import { FileUploadItem } from '@ovhcloud/ods-react';

<FileUploadItem file={ file } progress={ 100 } />
`})}),`
`,(0,r.jsx)(s,{label:`Menu`,level:3}),`
`,(0,r.jsxs)(t.p,{children:[(0,r.jsxs)(t.strong,{children:[`The `,(0,r.jsx)(t.code,{children:`position`}),` prop is removed`]}),` (deprecated since v19.7.0): use `,(0,r.jsx)(t.code,{children:`overlayConfig={{ position }}`}),`, which takes the same values (`,(0,r.jsx)(t.code,{children:`'bottom-end'`}),`, `,(0,r.jsx)(t.code,{children:`'top'`}),`…). If the Menu already sets `,(0,r.jsx)(t.code,{children:`overlayConfig.position`}),`, remove `,(0,r.jsx)(t.code,{children:`position`}),`: `,(0,r.jsx)(t.code,{children:`overlayConfig`}),` already won. In untyped JavaScript, a `,(0,r.jsx)(t.code,{children:`position`}),` prop is ignored and the Menu opens at its default position.`]}),`
`,(0,r.jsxs)(t.p,{children:[`To find the usages to migrate: `,(0,r.jsx)(t.code,{children:`grep -rnE "<Menu([[:space:]]([^>]|=>)*)?[[:space:]]position=" src/`}),`. A `,(0,r.jsx)(t.code,{children:`position`}),` written on its own line is not matched: TypeScript reports it.`]}),`
`,(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:`before`})}),`
`,(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:`language-tsx`,children:`import { Menu, MenuContent, MenuItem, MenuTrigger } from '@ovhcloud/ods-react';

<Menu position="bottom-end">
  <MenuTrigger>Actions</MenuTrigger>
  <MenuContent>
    <MenuItem value="edit">Edit</MenuItem>
  </MenuContent>
</Menu>
`})}),`
`,(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:`after`})}),`
`,(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:`language-tsx`,children:`import { Menu, MenuContent, MenuItem, MenuTrigger } from '@ovhcloud/ods-react';

<Menu overlayConfig={{ position: 'bottom-end' }}>
  <MenuTrigger>Actions</MenuTrigger>
  <MenuContent>
    <MenuItem value="edit">Edit</MenuItem>
  </MenuContent>
</Menu>
`})}),`
`,(0,r.jsx)(s,{label:`Message`,level:3}),`
`,(0,r.jsxs)(t.p,{children:[(0,r.jsxs)(t.strong,{children:[`The `,(0,r.jsx)(t.code,{children:`color`}),` prop is removed`]}),`, with `,(0,r.jsx)(t.code,{children:`MESSAGE_COLOR`}),`, `,(0,r.jsx)(t.code,{children:`MESSAGE_COLORS`}),` and the `,(0,r.jsx)(t.code,{children:`MessageColor`}),` type (see above):`]}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:`color`}),` (or `,(0,r.jsx)(t.code,{children:`MESSAGE_COLOR`}),`): use `,(0,r.jsx)(t.code,{children:`status`}),` (or `,(0,r.jsx)(t.code,{children:`MESSAGE_STATUS`}),`).`]}),`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:`color="primary"`}),`: use `,(0,r.jsx)(t.code,{children:`status="accent"`}),`.`]}),`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:`color="critical"`}),`, `,(0,r.jsx)(t.code,{children:`information`}),`, `,(0,r.jsx)(t.code,{children:`neutral`}),`, `,(0,r.jsx)(t.code,{children:`success`}),`, `,(0,r.jsx)(t.code,{children:`warning`}),`: use `,(0,r.jsx)(t.code,{children:`status`}),` with the same value. `,(0,r.jsx)(t.code,{children:`information`}),` stays the default.`]}),`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:`MESSAGE_COLORS`}),` and `,(0,r.jsx)(t.code,{children:`MessageColor`}),`: use `,(0,r.jsx)(t.code,{children:`MESSAGE_STATUSES`}),` and `,(0,r.jsx)(t.code,{children:`MessageStatus`}),`.`]}),`
`]}),`
`,(0,r.jsxs)(t.p,{children:[(0,r.jsxs)(t.strong,{children:[`The `,(0,r.jsx)(t.code,{children:`variant`}),` prop of the Message is removed, replaced by `,(0,r.jsx)(t.code,{children:`emphasis`}),`, and every Message changes rendering.`]}),` `,(0,r.jsx)(t.code,{children:`MESSAGE_VARIANT`}),`, `,(0,r.jsx)(t.code,{children:`MESSAGE_VARIANTS`}),` and the `,(0,r.jsx)(t.code,{children:`MessageVariant`}),` type are removed with it, without deprecation period: TypeScript reports each usage, and in untyped JavaScript a `,(0,r.jsx)(t.code,{children:`variant`}),` attribute is ignored (and forwarded to the DOM).`]}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:`variant="default"`}),` (or `,(0,r.jsx)(t.code,{children:`MESSAGE_VARIANT.default`}),`): use `,(0,r.jsx)(t.code,{children:`emphasis="high"`}),` (or `,(0,r.jsx)(t.code,{children:`MESSAGE_EMPHASIS.high`}),`).`]}),`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:`variant="light"`}),` (or `,(0,r.jsx)(t.code,{children:`MESSAGE_VARIANT.light`}),`): use `,(0,r.jsx)(t.code,{children:`emphasis="medium"`}),`, or nothing, as `,(0,r.jsx)(t.code,{children:`medium`}),` is the default.`]}),`
`,(0,r.jsxs)(t.li,{children:[`No `,(0,r.jsx)(t.code,{children:`variant`}),`: the Message rendered as `,(0,r.jsx)(t.code,{children:`default`}),` (tinted background) in v19; it now renders as `,(0,r.jsx)(t.code,{children:`medium`}),` (untinted background, the raised surface, with a light colored border). The `,(0,r.jsx)(t.code,{children:`medium`}),` border adds its thickness on each side: such a Message is slightly taller and wider than in v19. Add `,(0,r.jsx)(t.code,{children:`emphasis={ MESSAGE_EMPHASIS.high }`}),` to keep a tinted background. A `,(0,r.jsx)(t.code,{children:`high`}),` Message keeps the v19 `,(0,r.jsx)(t.code,{children:`default`}),` size: its padding gives up the thickness of its border.`]}),`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:`MESSAGE_VARIANTS`}),` and `,(0,r.jsx)(t.code,{children:`MessageVariant`}),`: use `,(0,r.jsx)(t.code,{children:`MESSAGE_EMPHASES`}),` and `,(0,r.jsx)(t.code,{children:`MessageEmphasis`}),`.`]}),`
`,(0,r.jsxs)(t.li,{children:[`New `,(0,r.jsx)(t.code,{children:`low`}),` emphasis: colored text and icon only, without background nor border.`]}),`
`,(0,r.jsxs)(t.li,{children:[`Toaster: toasts render as `,(0,r.jsx)(t.code,{children:`medium`}),` (formerly `,(0,r.jsx)(t.code,{children:`light`}),`), with the new colors below. Nothing to change in your code.`]}),`
`,(0,r.jsxs)(t.li,{children:[`If one of your wrappers declares its own `,(0,r.jsx)(t.code,{children:`emphasis`}),` prop on top of `,(0,r.jsx)(t.code,{children:`MessageProp`}),`, add `,(0,r.jsx)(t.code,{children:`'emphasis'`}),` to its `,(0,r.jsx)(t.code,{children:`Omit`}),` or rename it; in untyped JavaScript, an `,(0,r.jsx)(t.code,{children:`emphasis`}),` attribute forwarded to Message is now read as the emphasis preset.`]}),`
`]}),`
`,(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:`The colors change in every emphasis`}),`, `,(0,r.jsx)(t.code,{children:`high`}),` included: it is close to, but not the same as, the v19 `,(0,r.jsx)(t.code,{children:`default`}),` variant, and `,(0,r.jsx)(t.code,{children:`medium`}),` is not the same as the v19 `,(0,r.jsx)(t.code,{children:`light`}),` variant. The `,(0,r.jsx)(t.strong,{children:`Accent`}),` status reads the accent roles (in v19 `,(0,r.jsx)(t.code,{children:`default`}),`, it was filled blue with white text). The close button keeps the same neutral look in every emphasis and status. Each emphasis reads these semantic roles, `,(0,r.jsx)(t.code,{children:`<status>`}),` being `,(0,r.jsx)(t.code,{children:`accent`}),`, `,(0,r.jsx)(t.code,{children:`critical`}),`, `,(0,r.jsx)(t.code,{children:`information`}),`, `,(0,r.jsx)(t.code,{children:`neutral`}),`, `,(0,r.jsx)(t.code,{children:`success`}),` or `,(0,r.jsx)(t.code,{children:`warning`}),`:`]}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:`High`}),`: background `,(0,r.jsx)(t.code,{children:`--ods-semantic-color-surface-<status>-subtle`}),`, border `,(0,r.jsx)(t.code,{children:`--ods-semantic-color-border-<status>-subtle`}),`, text and icon `,(0,r.jsx)(t.code,{children:`--ods-semantic-color-content-on-<status>`}),`. In v19 `,(0,r.jsx)(t.code,{children:`default`}),`: a `,(0,r.jsx)(t.code,{children:`075`}),` background, no border and a `,(0,r.jsx)(t.code,{children:`700`}),` text.`]}),`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:`Medium`}),`: background `,(0,r.jsx)(t.code,{children:`--ods-semantic-color-surface-raised`}),`, border `,(0,r.jsx)(t.code,{children:`--ods-semantic-color-border-<status>-subtle`}),`, text and icon `,(0,r.jsx)(t.code,{children:`--ods-semantic-color-content-<status>`}),`. In v19 `,(0,r.jsx)(t.code,{children:`light`}),`: the border had the text color, a `,(0,r.jsx)(t.code,{children:`600`}),` step.`]}),`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:`Low`}),`: transparent background and border, the `,(0,r.jsx)(t.strong,{children:`Medium`}),` text and icon role.`]}),`
`]}),`
`,(0,r.jsxs)(t.p,{children:[`In the blue-jeans theme, `,(0,r.jsx)(t.code,{children:`high`}),` has no border. The dark themes give the three emphases the `,(0,r.jsx)(t.code,{children:`content-on-<status>`}),` text.`]}),`
`,(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:`Sass mixins and CSS custom properties are renamed`}),`, `,(0,r.jsx)(t.code,{children:`<status>`}),` being `,(0,r.jsx)(t.code,{children:`critical`}),`, `,(0,r.jsx)(t.code,{children:`information`}),`, `,(0,r.jsx)(t.code,{children:`neutral`}),`, `,(0,r.jsx)(t.code,{children:`success`}),` or `,(0,r.jsx)(t.code,{children:`warning`}),`, the same in both names, and `,(0,r.jsx)(t.code,{children:`primary`}),`, which becomes `,(0,r.jsx)(t.code,{children:`accent`}),` in the new names (`,(0,r.jsx)(t.code,{children:`ods-message-variant-default('primary')`}),`: use `,(0,r.jsx)(t.code,{children:`ods-message-emphasis-high('accent')`}),`):`]}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:`ods-message-variant-default(<status>)`}),`: use `,(0,r.jsx)(t.code,{children:`ods-message-emphasis-high(<status>)`}),`.`]}),`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:`ods-message-variant-light(<status>)`}),`: use `,(0,r.jsx)(t.code,{children:`ods-message-emphasis-medium(<status>)`}),`.`]}),`
`,(0,r.jsxs)(t.li,{children:[`New `,(0,r.jsx)(t.code,{children:`ods-message-emphasis-low(<status>)`}),`.`]}),`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:`--ods-message-background-color-<status>`}),` and `,(0,r.jsx)(t.code,{children:`--ods-message-text-color-<status>`}),`: use `,(0,r.jsx)(t.code,{children:`--ods-message-background-color-<status>-high`}),` and `,(0,r.jsx)(t.code,{children:`--ods-message-text-color-<status>-high`}),`.`]}),`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:`--ods-message-background-color-<status>-light`}),` and `,(0,r.jsx)(t.code,{children:`--ods-message-text-color-<status>-light`}),`: use `,(0,r.jsx)(t.code,{children:`--ods-message-background-color-<status>-medium`}),` and `,(0,r.jsx)(t.code,{children:`--ods-message-text-color-<status>-medium`}),`.`]}),`
`,(0,r.jsxs)(t.li,{children:[`The `,(0,r.jsx)(t.code,{children:`medium`}),` border has its own `,(0,r.jsx)(t.code,{children:`--ods-message-border-color-<status>-medium`}),` custom property (it used the text color in v19), and `,(0,r.jsx)(t.code,{children:`low`}),` its `,(0,r.jsx)(t.code,{children:`--ods-message-text-color-<status>-low`}),` one.`]}),`
`]}),`
`,(0,r.jsx)(t.p,{children:`To find the usages to migrate in your code:`}),`
`,(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:`language-sh`,children:`grep -rnE "\\bMESSAGE_(VARIANT|COLOR)S?\\b|\\bMessage(Variant|Color)\\b|ods-message-variant-|--ods-message-(background|text)-color-" src/
grep -rnE "<Message([[:space:]]|>|$)" src/
`})}),`
`,(0,r.jsxs)(t.p,{children:[`Review each match of the second search that sets neither `,(0,r.jsx)(t.code,{children:`variant`}),` nor `,(0,r.jsx)(t.code,{children:`emphasis`}),`, on its first line or on the following ones: its rendering changes from a tinted background to `,(0,r.jsx)(t.code,{children:`medium`}),`. This search misses Messages imported under another name (`,(0,r.jsx)(t.code,{children:`import { Message as OdsMessage }`}),`): search for those names too.`]}),`
`,(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:`before`})}),`
`,(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:`language-tsx`,children:`import { MESSAGE_COLOR, MESSAGE_STATUS, MESSAGE_VARIANT, Message, MessageBody } from '@ovhcloud/ods-react';

// tinted background in v19, medium (raised surface with a border) in v20
<Message status={ MESSAGE_STATUS.success }>
  <MessageBody>Your changes have been saved.</MessageBody>
</Message>

<Message status={ MESSAGE_STATUS.warning } variant={ MESSAGE_VARIANT.light }>
  <MessageBody>Your session will expire soon.</MessageBody>
</Message>

<Message color={ MESSAGE_COLOR.primary } variant={ MESSAGE_VARIANT.light }>
  <MessageBody>A new version is available.</MessageBody>
</Message>
`})}),`
`,(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:`after`})}),`
`,(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:`language-tsx`,children:`import { MESSAGE_EMPHASIS, MESSAGE_STATUS, Message, MessageBody } from '@ovhcloud/ods-react';

<Message emphasis={ MESSAGE_EMPHASIS.high } status={ MESSAGE_STATUS.success }>
  <MessageBody>Your changes have been saved.</MessageBody>
</Message>

<Message status={ MESSAGE_STATUS.warning }>
  <MessageBody>Your session will expire soon.</MessageBody>
</Message>

<Message status={ MESSAGE_STATUS.accent }>
  <MessageBody>A new version is available.</MessageBody>
</Message>
`})}),`
`,(0,r.jsx)(s,{label:`Modal`,level:3}),`
`,(0,r.jsxs)(t.p,{children:[(0,r.jsxs)(t.strong,{children:[`The `,(0,r.jsx)(t.code,{children:`color`}),` prop of `,(0,r.jsx)(t.code,{children:`ModalContent`}),` is removed`]}),` (it was deprecated since v19), with `,(0,r.jsx)(t.code,{children:`MODAL_COLOR`}),`, `,(0,r.jsx)(t.code,{children:`MODAL_COLORS`}),` and the `,(0,r.jsx)(t.code,{children:`ModalColor`}),` type. It had no visual effect: its only effect was to give the dialog the `,(0,r.jsx)(t.code,{children:`alertdialog`}),` role when set to `,(0,r.jsx)(t.code,{children:`critical`}),`.`]}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:`color="critical"`}),` (or `,(0,r.jsx)(t.code,{children:`MODAL_COLOR.critical`}),`): replace it with `,(0,r.jsx)(t.code,{children:`role="alertdialog"`}),`.`]}),`
`,(0,r.jsx)(t.li,{children:`Any other value: remove the prop.`}),`
`,(0,r.jsxs)(t.li,{children:[`A computed `,(0,r.jsx)(t.code,{children:`color`}),`: replace it with `,(0,r.jsx)(t.code,{children:`role={ isCritical ? 'alertdialog' : undefined }`}),`; an `,(0,r.jsx)(t.code,{children:`undefined`}),` role keeps the default `,(0,r.jsx)(t.code,{children:`dialog`}),` role.`]}),`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:`MODAL_COLOR`}),` used outside `,(0,r.jsx)(t.code,{children:`ModalContent`}),` (in your own wrappers or maps): replace it with your own constant or a boolean such as `,(0,r.jsx)(t.code,{children:`isCritical`}),`.`]}),`
`]}),`
`,(0,r.jsxs)(t.p,{children:[`To find the usages to migrate: `,(0,r.jsx)(t.code,{children:`grep -rnE "\\bMODAL_COLORS?\\b|\\bModalColor\\b" src/`}),`. The `,(0,r.jsx)(t.code,{children:`color`}),` props are found by the shared search at the top of `,(0,r.jsx)(t.strong,{children:`Breaking changes`}),`, which also catches a `,(0,r.jsx)(t.code,{children:`color`}),` written on its own line.`]}),`
`,(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:`before`})}),`
`,(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:`language-tsx`,children:`import { MODAL_COLOR, Modal, ModalBody, ModalContent } from '@ovhcloud/ods-react';

<Modal>
  <ModalContent color={ MODAL_COLOR.critical }>
    <ModalBody>Are you sure you want to delete this item?</ModalBody>
  </ModalContent>
</Modal>
`})}),`
`,(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:`after`})}),`
`,(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:`language-tsx`,children:`import { Modal, ModalBody, ModalContent } from '@ovhcloud/ods-react';

<Modal>
  <ModalContent role="alertdialog">
    <ModalBody>Are you sure you want to delete this item?</ModalBody>
  </ModalContent>
</Modal>
`})}),`
`,(0,r.jsx)(s,{label:`Pagination`,level:3}),`
`,(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:`A Pagination renders its children only`}),`, and `,(0,r.jsx)(t.code,{children:`children`}),` is required (rendering it without children is deprecated since v19.7.0). In v19, a Pagination without children rendered a `,(0,r.jsx)(t.code,{children:`PaginationPages`}),`, preceded by a `,(0,r.jsx)(t.code,{children:`PaginationPageSizeSelector`}),` when `,(0,r.jsx)(t.code,{children:`withPageSizeSelector`}),` was set. `,(0,r.jsx)(t.code,{children:`withPageSizeSelector`}),` and `,(0,r.jsx)(t.code,{children:`renderTotalItemsLabel`}),` are removed with this default rendering.`]}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsxs)(t.li,{children:[`A Pagination without children: add `,(0,r.jsx)(t.code,{children:`<PaginationPages />`}),` as its child.`]}),`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:`withPageSizeSelector`}),`: add `,(0,r.jsx)(t.code,{children:`<PaginationPageSizeSelector />`}),` before `,(0,r.jsx)(t.code,{children:`<PaginationPages />`}),`.`]}),`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:`renderTotalItemsLabel`}),`: pass what it returned as the `,(0,r.jsx)(t.code,{children:`label`}),` of the `,(0,r.jsx)(t.code,{children:`PaginationPageSizeSelector`}),`. Without `,(0,r.jsx)(t.code,{children:`label`}),`, the selector reads `,(0,r.jsx)(t.code,{children:`of <totalItems> results`}),`, as in v19.`]}),`
`,(0,r.jsxs)(t.li,{children:[`In untyped JavaScript, a Pagination without children renders an empty `,(0,r.jsx)(t.code,{children:`nav`}),`, and the two removed props are forwarded to it. A Pagination with empty children (`,(0,r.jsx)(t.code,{children:`null`}),`, `,(0,r.jsx)(t.code,{children:`undefined`}),`) compiles and renders the same: it logs a warning once.`]}),`
`]}),`
`,(0,r.jsx)(t.p,{children:`To find the usages to migrate:`}),`
`,(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:`language-sh`,children:`grep -rnE "<Pagination([[:space:]]([^>]|=>)*)?/>|renderTotalItemsLabel|withPageSizeSelector" src/
`})}),`
`,(0,r.jsx)(t.p,{children:`This search misses a Pagination written over several lines that closes itself: TypeScript reports each one.`}),`
`,(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:`before`})}),`
`,(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:`language-tsx`,children:`import { Pagination } from '@ovhcloud/ods-react';

<Pagination totalItems={ 500 } />

<Pagination
  renderTotalItemsLabel={ ({ totalItems }) => \`of \${totalItems} servers\` }
  totalItems={ 500 }
  withPageSizeSelector />
`})}),`
`,(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:`after`})}),`
`,(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:`language-tsx`,children:`import { Pagination, PaginationPageSizeSelector, PaginationPages } from '@ovhcloud/ods-react';

<Pagination totalItems={ 500 }>
  <PaginationPages />
</Pagination>

<Pagination totalItems={ 500 }>
  <PaginationPageSizeSelector label="of 500 servers" />
  <PaginationPages />
</Pagination>
`})}),`
`,(0,r.jsx)(s,{label:`Popover`,level:3}),`
`,(0,r.jsxs)(t.p,{children:[(0,r.jsxs)(t.strong,{children:[`The `,(0,r.jsx)(t.code,{children:`position`}),`, `,(0,r.jsx)(t.code,{children:`gutter`}),` and `,(0,r.jsx)(t.code,{children:`sameWidth`}),` props are removed`]}),` (deprecated since v19.7.0): move them into `,(0,r.jsx)(t.code,{children:`overlayConfig`}),`, under the same names and values. If the Popover already sets the same key in `,(0,r.jsx)(t.code,{children:`overlayConfig`}),`, remove the prop: `,(0,r.jsx)(t.code,{children:`overlayConfig`}),` already won. The default position stays `,(0,r.jsx)(t.code,{children:`top`}),`. In untyped JavaScript, these props are ignored.`]}),`
`,(0,r.jsxs)(t.p,{children:[`To find the usages to migrate, shorthand booleans (`,(0,r.jsx)(t.code,{children:`<Popover sameWidth>`}),`) included:`]}),`
`,(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:`language-sh`,children:`grep -rnE "(^|[[:space:]])(gutter|sameWidth)([[:space:]]*=|[[:space:]]*/?>|[[:space:]]*$|[[:space:]]+[A-Za-z])|position=\\{ ?POPOVER_POSITION|<Popover([[:space:]]([^>]|=>)*)?[[:space:]]position=" src/
`})}),`
`,(0,r.jsxs)(t.p,{children:[`A `,(0,r.jsx)(t.code,{children:`position`}),` written as a string on its own line is not matched: TypeScript reports it.`]}),`
`,(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:`before`})}),`
`,(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:`language-tsx`,children:`import { POPOVER_POSITION, Popover, PopoverContent, PopoverTrigger } from '@ovhcloud/ods-react';

<Popover gutter={ 0 } position={ POPOVER_POSITION.bottom } sameWidth>
  <PopoverTrigger>Show popover</PopoverTrigger>
  <PopoverContent>Popover content</PopoverContent>
</Popover>
`})}),`
`,(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:`after`})}),`
`,(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:`language-tsx`,children:`import { POPOVER_POSITION, Popover, PopoverContent, PopoverTrigger } from '@ovhcloud/ods-react';

<Popover overlayConfig={{ gutter: 0, position: POPOVER_POSITION.bottom, sameWidth: true }}>
  <PopoverTrigger>Show popover</PopoverTrigger>
  <PopoverContent>Popover content</PopoverContent>
</Popover>
`})}),`
`,(0,r.jsx)(s,{label:`Select`,level:3}),`
`,(0,r.jsxs)(t.p,{children:[(0,r.jsxs)(t.strong,{children:[`The `,(0,r.jsx)(t.code,{children:`fitControlWidth`}),` prop is removed`]}),` (deprecated since v19.7.0): use `,(0,r.jsx)(t.code,{children:`overlayConfig={{ sameWidth }}`}),`. The default does not change, the list takes the width of the control.`]}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:`fitControlWidth`}),` or `,(0,r.jsx)(t.code,{children:`fitControlWidth={ true }`}),`: remove it.`]}),`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:`fitControlWidth={ false }`}),`: use `,(0,r.jsx)(t.code,{children:`overlayConfig={{ sameWidth: false }}`}),`, merged into the `,(0,r.jsx)(t.code,{children:`overlayConfig`}),` the Select may already set.`]}),`
`,(0,r.jsxs)(t.li,{children:[`In untyped JavaScript, `,(0,r.jsx)(t.code,{children:`fitControlWidth`}),` is forwarded to the DOM and the list takes the width of the control.`]}),`
`]}),`
`,(0,r.jsxs)(t.p,{children:[`To find the usages to migrate: `,(0,r.jsx)(t.code,{children:`grep -rn "fitControlWidth" src/`}),`.`]}),`
`,(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:`before`})}),`
`,(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:`language-tsx`,children:`import { Select, SelectContent, SelectControl } from '@ovhcloud/ods-react';

<Select fitControlWidth={ false } items={ items }>
  <SelectControl />
  <SelectContent />
</Select>
`})}),`
`,(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:`after`})}),`
`,(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:`language-tsx`,children:`import { Select, SelectContent, SelectControl } from '@ovhcloud/ods-react';

<Select items={ items } overlayConfig={{ sameWidth: false }}>
  <SelectControl />
  <SelectContent />
</Select>
`})}),`
`,(0,r.jsx)(s,{label:`Spinner`,level:3}),`
`,(0,r.jsxs)(t.p,{children:[(0,r.jsxs)(t.strong,{children:[`The `,(0,r.jsx)(t.code,{children:`color`}),` prop is removed`]}),`, with `,(0,r.jsx)(t.code,{children:`SPINNER_COLOR`}),`, `,(0,r.jsx)(t.code,{children:`SPINNER_COLORS`}),` and the `,(0,r.jsx)(t.code,{children:`SpinnerColor`}),` type. The Spinner has no `,(0,r.jsx)(t.code,{children:`status`}),`: its color is set by the `,(0,r.jsx)(t.code,{children:`--ods-spinner-color`}),` CSS custom property, accent by default (the v19 primary rendering), so a Spinner without `,(0,r.jsx)(t.code,{children:`color`}),` renders as before.`]}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsxs)(t.li,{children:[`No `,(0,r.jsx)(t.code,{children:`color`}),`: nothing to do, the Spinner keeps its v19 color.`]}),`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:`color="primary"`}),` (or `,(0,r.jsx)(t.code,{children:`SPINNER_COLOR.primary`}),`): remove the prop, it is the default rendering.`]}),`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:`color="neutral"`}),` (or `,(0,r.jsx)(t.code,{children:`SPINNER_COLOR.neutral`}),`): remove the prop and set `,(0,r.jsx)(t.code,{children:`--ods-spinner-color: var(--ods-semantic-color-content-neutral)`}),` in CSS.`]}),`
`,(0,r.jsxs)(t.li,{children:[`To make the Spinner follow the text color around it, set `,(0,r.jsx)(t.code,{children:`--ods-spinner-color: currentColor`}),`.`]}),`
`,(0,r.jsxs)(t.li,{children:[`Set the custom property on the Spinner, through its `,(0,r.jsx)(t.code,{children:`className`}),`, or on a container of yours, rather than on a global `,(0,r.jsx)(t.code,{children:`[data-ods="spinner"]`}),` selector: that selector would also reach the Spinners displayed by Button, Input and FileUpload. A container also reaches the loading Spinners of the Input and FileUpload placed inside it; only the Button Spinner keeps its own color, the text color of the button.`]}),`
`,(0,r.jsxs)(t.li,{children:[`In TypeScript, setting it through the `,(0,r.jsx)(t.code,{children:`style`}),` prop requires a cast (`,(0,r.jsx)(t.code,{children:`style={ { '--ods-spinner-color': 'currentColor' } as CSSProperties }`}),`); a `,(0,r.jsx)(t.code,{children:`className`}),` avoids it.`]}),`
`]}),`
`,(0,r.jsxs)(t.p,{children:[`To find the usages to migrate: `,(0,r.jsx)(t.code,{children:`grep -rnE "\\bSPINNER_COLORS?\\b|\\bSpinnerColor\\b" src/`}),`. The `,(0,r.jsx)(t.code,{children:`color`}),` props are found by the shared search at the top of `,(0,r.jsx)(t.strong,{children:`Breaking changes`}),`, which also catches a `,(0,r.jsx)(t.code,{children:`color`}),` written on its own line.`]}),`
`,(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:`before`})}),`
`,(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:`language-tsx`,children:`import { SPINNER_COLOR, Spinner } from '@ovhcloud/ods-react';

<Spinner color={ SPINNER_COLOR.neutral } />
`})}),`
`,(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:`after`})}),`
`,(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:`language-tsx`,children:`import { Spinner } from '@ovhcloud/ods-react';

<Spinner className="my-spinner" />
`})}),`
`,(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:`language-css`,children:`.my-spinner {
  --ods-spinner-color: var(--ods-semantic-color-content-neutral);
}
`})}),`
`,(0,r.jsx)(s,{label:`Switch`,level:3}),`
`,(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:`The Switch component is removed`}),` (deprecated since v19.4.0), with `,(0,r.jsx)(t.code,{children:`SwitchItem`}),` (and `,(0,r.jsx)(t.code,{children:`Switch.Item`}),`), `,(0,r.jsx)(t.code,{children:`SWITCH_SIZE`}),`, `,(0,r.jsx)(t.code,{children:`SWITCH_SIZES`}),`, the `,(0,r.jsx)(t.code,{children:`SwitchProp`}),`, `,(0,r.jsx)(t.code,{children:`SwitchItemProp`}),`, `,(0,r.jsx)(t.code,{children:`SwitchSize`}),` and `,(0,r.jsx)(t.code,{children:`SwitchValueChangeDetail`}),` types, the `,(0,r.jsx)(t.code,{children:`@ovhcloud/ods-react/switch`}),` entry point and the `,(0,r.jsx)(t.code,{children:`--ods-switch-*`}),` CSS custom properties. Replace it according to its use:`]}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsxs)(t.li,{children:[`To move between views: `,(0,r.jsx)(i,{to:`/components/tabs`,children:`Tabs`}),` with the `,(0,r.jsx)(t.code,{children:`switch`}),` variant, which renders the same segmented control. `,(0,r.jsx)(t.code,{children:`Switch`}),` becomes `,(0,r.jsx)(t.code,{children:`Tabs`}),` with `,(0,r.jsx)(t.code,{children:`variant={ TABS_VARIANT.switch }`}),` around a `,(0,r.jsx)(t.code,{children:`TabList`}),`, each `,(0,r.jsx)(t.code,{children:`SwitchItem`}),` becomes a `,(0,r.jsx)(t.code,{children:`Tab`}),`, and the views shown under the Switch move into one `,(0,r.jsx)(t.code,{children:`TabContent`}),` per `,(0,r.jsx)(t.code,{children:`Tab`}),`, so that each tab controls its panel. `,(0,r.jsx)(t.code,{children:`value`}),`, `,(0,r.jsx)(t.code,{children:`defaultValue`}),`, `,(0,r.jsx)(t.code,{children:`onValueChange`}),` (which receives `,(0,r.jsx)(t.code,{children:`{ value }`}),`) and `,(0,r.jsx)(t.code,{children:`size`}),` (`,(0,r.jsx)(t.code,{children:`sm`}),` or `,(0,r.jsx)(t.code,{children:`md`}),`) keep their shape. Tabs has no `,(0,r.jsx)(t.code,{children:`disabled`}),` prop: set `,(0,r.jsx)(t.code,{children:`disabled`}),` on each `,(0,r.jsx)(t.code,{children:`Tab`}),`. The inactive panels stay mounted by default: set `,(0,r.jsx)(t.code,{children:`mountStrategy="unmount"`}),` on the Tabs to keep a view rendered only while it is shown.`]}),`
`,(0,r.jsxs)(t.li,{children:[`To pick a mode or turn an option on or off with an immediate effect, with no view to hold: `,(0,r.jsx)(i,{to:`/components/button-group`,children:`Button Group`}),`. With a single selection, it renders a radio group: give it an `,(0,r.jsx)(t.code,{children:`aria-label`}),`. Its `,(0,r.jsx)(t.code,{children:`value`}),` is an array: `,(0,r.jsx)(t.code,{children:`value={ [value] }`}),`, and `,(0,r.jsx)(t.code,{children:`onValueChange`}),` receives `,(0,r.jsx)(t.code,{children:`{ value: [value] }`}),`, or an empty array when the selected item is clicked again: ignore it to keep the selection.`]}),`
`,(0,r.jsxs)(t.li,{children:[`To pick a value in a form: `,(0,r.jsx)(i,{to:`/components/radio-group`,children:`Radio Group`}),`.`]}),`
`,(0,r.jsxs)(t.li,{children:[`An override of a `,(0,r.jsx)(t.code,{children:`--ods-switch-*`}),` custom property has no element left to style: remove it, and style the replacement through its own custom properties.`]}),`
`]}),`
`,(0,r.jsxs)(t.p,{children:[`To find the usages to migrate (other libraries export a `,(0,r.jsx)(t.code,{children:`Switch`}),` too, so the second search is limited to the files that import ODS):`]}),`
`,(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:`language-sh`,children:`grep -rnE "@ovhcloud/ods-react/switch|--ods-switch-" src/
grep -rlE "@ovhcloud/ods-react" src | xargs grep -nwE "Switch|SwitchItem|SWITCH_SIZES?|SwitchProp|SwitchItemProp|SwitchSize|SwitchValueChangeDetail"
`})}),`
`,(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:`before`})}),`
`,(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:`language-tsx`,children:`import { SWITCH_SIZE, Switch, SwitchItem } from '@ovhcloud/ods-react';

<Switch onValueChange={ ({ value }) => setView(value) } size={ SWITCH_SIZE.sm } value={ view }>
  <SwitchItem value="list">List</SwitchItem>
  <SwitchItem value="grid">Grid</SwitchItem>
</Switch>

{ view === 'list' ? <ServerList /> : <ServerGrid /> }
`})}),`
`,(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:`after`})}),`
`,(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:`language-tsx`,children:`import { TABS_SIZE, TABS_VARIANT, Tab, TabContent, TabList, Tabs } from '@ovhcloud/ods-react';

<Tabs onValueChange={ ({ value }) => setView(value) } size={ TABS_SIZE.sm } value={ view } variant={ TABS_VARIANT.switch }>
  <TabList>
    <Tab value="list">List</Tab>
    <Tab value="grid">Grid</Tab>
  </TabList>

  <TabContent value="list"><ServerList /></TabContent>
  <TabContent value="grid"><ServerGrid /></TabContent>
</Tabs>
`})}),`
`,(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:`after, for a mode with no view to hold`})}),`
`,(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:`language-tsx`,children:`import { BUTTON_GROUP_SIZE, ButtonGroup, ButtonGroupItem } from '@ovhcloud/ods-react';

<ButtonGroup
  aria-label="Units"
  onValueChange={ ({ value }) => value[0] && setUnit(value[0]) }
  size={ BUTTON_GROUP_SIZE.sm }
  value={ [unit] }>
  <ButtonGroupItem value="gb">GB</ButtonGroupItem>
  <ButtonGroupItem value="gib">GiB</ButtonGroupItem>
</ButtonGroup>
`})}),`
`,(0,r.jsx)(s,{label:`Table`,level:3}),`
`,(0,r.jsxs)(t.p,{children:[`The `,(0,r.jsx)(t.code,{children:`variant`}),` prop is removed in favor of a `,(0,r.jsx)(t.code,{children:`striped`}),` boolean prop (default `,(0,r.jsx)(t.code,{children:`false`}),`): `,(0,r.jsx)(t.code,{children:`variant`}),` only ever had two values (`,(0,r.jsx)(t.code,{children:`default`}),` and `,(0,r.jsx)(t.code,{children:`striped`}),`). `,(0,r.jsx)(t.code,{children:`TABLE_VARIANT`}),`, `,(0,r.jsx)(t.code,{children:`TABLE_VARIANTS`}),` and the `,(0,r.jsx)(t.code,{children:`TableVariant`}),` type are removed with it.`]}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:`variant="default"`}),` (or `,(0,r.jsx)(t.code,{children:`TABLE_VARIANT.default`}),`): remove the prop.`]}),`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:`variant="striped"`}),` (or `,(0,r.jsx)(t.code,{children:`TABLE_VARIANT.striped`}),`): use `,(0,r.jsx)(t.code,{children:`striped`}),`.`]}),`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:`TableVariant`}),` (e.g. in the props of a wrapper component): use `,(0,r.jsx)(t.code,{children:`TableProp['striped']`}),`.`]}),`
`]}),`
`,(0,r.jsxs)(t.p,{children:[`To find the usages to migrate: `,(0,r.jsx)(t.code,{children:`grep -rnE "TABLE_VARIANTS?\\b|TableVariant\\b|<Table[^>]*variant=" src/`}),`.`]}),`
`,(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:`before`})}),`
`,(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:`language-tsx`,children:`import { TABLE_VARIANT, Table } from '@ovhcloud/ods-react';

<Table variant={ TABLE_VARIANT.striped }>...</Table>
`})}),`
`,(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:`after`})}),`
`,(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:`language-tsx`,children:`import { Table } from '@ovhcloud/ods-react';

<Table striped>...</Table>
`})}),`
`,(0,r.jsx)(s,{label:`Tag`,level:3}),`
`,(0,r.jsxs)(t.p,{children:[(0,r.jsxs)(t.strong,{children:[`The `,(0,r.jsx)(t.code,{children:`color`}),` prop is removed`]}),`, with `,(0,r.jsx)(t.code,{children:`TAG_COLOR`}),`, `,(0,r.jsx)(t.code,{children:`TAG_COLORS`}),` and the `,(0,r.jsx)(t.code,{children:`TagColor`}),` type (see above):`]}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:`color`}),` (or `,(0,r.jsx)(t.code,{children:`TAG_COLOR`}),`): use `,(0,r.jsx)(t.code,{children:`status`}),` (or `,(0,r.jsx)(t.code,{children:`TAG_STATUS`}),`).`]}),`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:`color="primary"`}),`: use `,(0,r.jsx)(t.code,{children:`status="accent"`}),`.`]}),`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:`color="critical"`}),`, `,(0,r.jsx)(t.code,{children:`information`}),`, `,(0,r.jsx)(t.code,{children:`neutral`}),`, `,(0,r.jsx)(t.code,{children:`success`}),`, `,(0,r.jsx)(t.code,{children:`warning`}),`: use `,(0,r.jsx)(t.code,{children:`status`}),` with the same value. `,(0,r.jsx)(t.code,{children:`information`}),` stays the default.`]}),`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:`TAG_COLORS`}),` and `,(0,r.jsx)(t.code,{children:`TagColor`}),`: use `,(0,r.jsx)(t.code,{children:`TAG_STATUSES`}),` and `,(0,r.jsx)(t.code,{children:`TagStatus`}),`.`]}),`
`]}),`
`,(0,r.jsxs)(t.p,{children:[`To find the usages to migrate: `,(0,r.jsx)(t.code,{children:`grep -rnE "\\bTAG_COLORS?\\b|\\bTagColor\\b" src/`}),`. The `,(0,r.jsx)(t.code,{children:`color`}),` props are found by the shared search at the top of `,(0,r.jsx)(t.strong,{children:`Breaking changes`}),`, which also catches a `,(0,r.jsx)(t.code,{children:`color`}),` written on its own line.`]}),`
`,(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:`before`})}),`
`,(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:`language-tsx`,children:`import { TAG_COLOR, Tag } from '@ovhcloud/ods-react';

<Tag color={ TAG_COLOR.primary }>Cloud</Tag>
`})}),`
`,(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:`after`})}),`
`,(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:`language-tsx`,children:`import { TAG_STATUS, Tag } from '@ovhcloud/ods-react';

<Tag status={ TAG_STATUS.accent }>Cloud</Tag>
`})}),`
`,(0,r.jsx)(s,{label:`Toaster`,level:3}),`
`,(0,r.jsxs)(t.p,{children:[(0,r.jsxs)(t.strong,{children:[(0,r.jsx)(t.code,{children:`toast.primary()`}),` is removed`]}),`, with `,(0,r.jsx)(t.code,{children:`TOAST_COLOR`}),`, `,(0,r.jsx)(t.code,{children:`TOAST_COLORS`}),` and the `,(0,r.jsx)(t.code,{children:`ToastColor`}),` type (see above):`]}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:`toast.primary()`}),`: use `,(0,r.jsx)(t.code,{children:`toast.accent()`}),`.`]}),`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:`toast.critical()`}),`, `,(0,r.jsx)(t.code,{children:`toast.information()`}),`, `,(0,r.jsx)(t.code,{children:`toast.neutral()`}),`, `,(0,r.jsx)(t.code,{children:`toast.success()`}),`, `,(0,r.jsx)(t.code,{children:`toast.warning()`}),`: unchanged.`]}),`
`,(0,r.jsxs)(t.li,{children:[`A `,(0,r.jsx)(t.code,{children:`color`}),` passed in the toast options (`,(0,r.jsx)(t.code,{children:`toast('…', { color: 'primary' })`}),`): use the matching helper (`,(0,r.jsx)(t.code,{children:`toast.accent('…')`}),`).`]}),`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:`TOAST_COLOR`}),`, `,(0,r.jsx)(t.code,{children:`TOAST_COLORS`}),` and `,(0,r.jsx)(t.code,{children:`ToastColor`}),`: use `,(0,r.jsx)(t.code,{children:`TOAST_STATUS`}),`, `,(0,r.jsx)(t.code,{children:`TOAST_STATUSES`}),` and `,(0,r.jsx)(t.code,{children:`ToastStatus`}),`.`]}),`
`]}),`
`,(0,r.jsxs)(t.p,{children:[`To find the usages to migrate: `,(0,r.jsx)(t.code,{children:`grep -rnE "\\bTOAST_COLORS?\\b|\\bToastColor\\b|toast\\.primary\\(" src/`}),`.`]}),`
`,(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:`before`})}),`
`,(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:`language-tsx`,children:`import { toast } from '@ovhcloud/ods-react';

toast.primary('Your export is ready');
`})}),`
`,(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:`after`})}),`
`,(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:`language-tsx`,children:`import { toast } from '@ovhcloud/ods-react';

toast.accent('Your export is ready');
`})}),`
`,(0,r.jsx)(s,{label:`Toggle`,level:3}),`
`,(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:`A Toggle renders its children only`}),`, and `,(0,r.jsx)(t.code,{children:`children`}),` is required (rendering it without children is deprecated since v19.1.0). In v19, a Toggle without children rendered a `,(0,r.jsx)(t.code,{children:`ToggleControl`}),` and gave it its own `,(0,r.jsx)(t.code,{children:`className`}),`.`]}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsxs)(t.li,{children:[`A Toggle without children: add `,(0,r.jsx)(t.code,{children:`<ToggleControl />`}),` as its child. The other props stay on the Toggle.`]}),`
`,(0,r.jsxs)(t.li,{children:[`A `,(0,r.jsx)(t.code,{children:`className`}),` on a Toggle without children styled the control: move it onto the `,(0,r.jsx)(t.code,{children:`ToggleControl`}),`. On a Toggle with children, `,(0,r.jsx)(t.code,{children:`className`}),` styles the root, as in v19.`]}),`
`,(0,r.jsxs)(t.li,{children:[`In untyped JavaScript, a Toggle without children renders an empty `,(0,r.jsx)(t.code,{children:`label`}),`: no control, no focusable element and no hidden `,(0,r.jsx)(t.code,{children:`input`}),`, so the field is no longer submitted with its form. A Toggle with empty children (`,(0,r.jsx)(t.code,{children:`null`}),`, `,(0,r.jsx)(t.code,{children:`undefined`}),`) compiles and renders the same: it logs a warning once.`]}),`
`]}),`
`,(0,r.jsxs)(t.p,{children:[`To find the usages to migrate: `,(0,r.jsx)(t.code,{children:`grep -rnE "<Toggle([[:space:]]([^>]|=>)*)?/>" src/`}),`. This search misses a Toggle written over several lines that closes itself: TypeScript reports each one.`]}),`
`,(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:`before`})}),`
`,(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:`language-tsx`,children:`import { Toggle } from '@ovhcloud/ods-react';

<Toggle className="my-toggle" defaultChecked withLabels />
`})}),`
`,(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:`after`})}),`
`,(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:`language-tsx`,children:`import { Toggle, ToggleControl } from '@ovhcloud/ods-react';

<Toggle defaultChecked withLabels>
  <ToggleControl className="my-toggle" />
</Toggle>
`})}),`
`,(0,r.jsx)(s,{label:`Tooltip`,level:3}),`
`,(0,r.jsxs)(t.p,{children:[(0,r.jsxs)(t.strong,{children:[`The `,(0,r.jsx)(t.code,{children:`position`}),` prop is removed`]}),` (deprecated since v19.7.0): use `,(0,r.jsx)(t.code,{children:`overlayConfig={{ position }}`}),`, which takes the same values (`,(0,r.jsx)(t.code,{children:`TOOLTIP_POSITION`}),`). If the Tooltip already sets `,(0,r.jsx)(t.code,{children:`overlayConfig.position`}),`, remove `,(0,r.jsx)(t.code,{children:`position`}),`: `,(0,r.jsx)(t.code,{children:`overlayConfig`}),` already won. The default position stays `,(0,r.jsx)(t.code,{children:`top`}),`. In untyped JavaScript, a `,(0,r.jsx)(t.code,{children:`position`}),` prop is ignored.`]}),`
`,(0,r.jsxs)(t.p,{children:[`To find the usages to migrate: `,(0,r.jsx)(t.code,{children:`grep -rnE "position=\\{ ?TOOLTIP_POSITION|<Tooltip([[:space:]]([^>]|=>)*)?[[:space:]]position=" src/`}),`. A `,(0,r.jsx)(t.code,{children:`position`}),` written as a string on its own line is not matched: TypeScript reports it.`]}),`
`,(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:`before`})}),`
`,(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:`language-tsx`,children:`import { TOOLTIP_POSITION, Tooltip, TooltipContent, TooltipTrigger } from '@ovhcloud/ods-react';

<Tooltip position={ TOOLTIP_POSITION.right }>
  <TooltipTrigger>Show tooltip</TooltipTrigger>
  <TooltipContent>Tooltip content</TooltipContent>
</Tooltip>
`})}),`
`,(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:`after`})}),`
`,(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:`language-tsx`,children:`import { TOOLTIP_POSITION, Tooltip, TooltipContent, TooltipTrigger } from '@ovhcloud/ods-react';

<Tooltip overlayConfig={{ position: TOOLTIP_POSITION.right }}>
  <TooltipTrigger>Show tooltip</TooltipTrigger>
  <TooltipContent>Tooltip content</TooltipContent>
</Tooltip>
`})}),`
`,(0,r.jsx)(s,{label:`Need help?`,level:2}),`
`,(0,r.jsxs)(t.p,{children:[`If you hit an issue while upgrading, `,(0,r.jsx)(a,{href:`https://github.com/ovh/design-system/issues`,children:`open an issue on GitHub`}),` — especially if you see a type error that the `,(0,r.jsx)(t.code,{children:`@types/react`}),` deduplication above does not solve.`]})]})}function a(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(i,{...e})}):i(e)}function o(e,t){throw Error(`Expected `+(t?`component`:`object`)+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}export{a as default};