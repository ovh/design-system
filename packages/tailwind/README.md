# @ovhcloud/ods-tailwind

[Tailwind CSS](https://tailwindcss.com) v4 utilities mapped to the OVHcloud Design System tokens: `bg-ods-surface-raised`, `text-ods-content-heading`, `rounded-ods-container`, `p-ods-inset-inline`…

Each utility reads an ODS semantic token (`var(--ods-semantic-…)`), never its value: the same classes follow the theme you load (default, Blue Jeans, their dark themes, or your own) and a theme switch at runtime.

It is opt-in: `@ovhcloud/ods-react` does not depend on Tailwind, and ODS works without it.

## Setup

Requires Tailwind CSS v4, in an app that already uses ODS (`@ovhcloud/ods-react` and `@ovhcloud/ods-themes`).

```bash
npm install @ovhcloud/ods-tailwind tailwindcss @tailwindcss/vite
```

```ts
// vite.config.ts
import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [react(), tailwindcss()],
});
```

```css
/* index.css: @ovhcloud/ods-tailwind first, it sets the layer order before the ODS theme names its layers */
@import '@ovhcloud/ods-tailwind';
@import '@ovhcloud/ods-themes/default/css';
@import '@ovhcloud/ods-themes/default/fonts';
```

Import this stylesheet **before any ODS theme or component**, as the first import of your entry point, and import the ODS theme from it rather than from JavaScript:

```ts
// main.tsx
import './index.css';
import { App } from './App';
```

`@ovhcloud/ods-tailwind` declares the order of the CSS layers: the Tailwind theme and base, then the ODS layers, then the Tailwind components and utilities. The ODS styles win over the Tailwind reset, and your own styles win over the ODS ones, in `@layer components` as in a utility.

A layer takes its place from the first stylesheet that names it, and the ODS theme and components name the ODS layers too. If either is imported before `@ovhcloud/ods-tailwind`, the ODS layers land before the Tailwind reset, which then strips the ODS buttons and headings of their style. For an order that holds whatever the import order, declare it in the `<head>` of your page, before any stylesheet:

```html
<style>@layer theme, base, ods-quarks, ods-atoms, ods-molecules, ods-organisms, components, utilities;</style>
```

## Utilities

| Tailwind namespace | ODS tokens | Example |
| --- | --- | --- |
| `color` | `--ods-semantic-color-*` (surface, content, border, interaction, chart, brand, focus) | `bg-ods-surface-raised`, `text-ods-content-heading`, `border-ods-border-container` |
| `radius` | `--ods-semantic-size-radius-*` | `rounded-ods-container` |
| `shadow` | `--ods-semantic-shadow-*` | `shadow-ods-overlay` |
| `font` | `--ods-semantic-font-family-*` | `font-ods-body` |
| `font-weight` | `--ods-semantic-font-weight-*` | `font-ods-semibold` |
| `spacing` | `--ods-semantic-size-space-*`, `-block-size-*` (as `block-*`), `-inline-size-field` (as `inline-field`) | `p-ods-inset-inline`, `gap-ods-gap-group`, `h-ods-block-md` |
| `ease` | `--ods-semantic-motion-easing` (as `default`), `-enter`, `-exit` | `ease-ods-default`, `ease-ods-enter` |

The `ods-` prefix keeps them apart from the Tailwind defaults, which stay available. The page font is the ODS body font, overlays included, and the monospace font the ODS code font.

Not mapped: the palette (a palette step carries no role: use the semantic tokens, the ones the components read), and the tokens Tailwind has no theme for or that need no utility. Read those with the variable shorthand: `z-(--ods-semantic-z-index-modal)`, `opacity-(--ods-semantic-opacity-disabled)`, `duration-(--ods-semantic-motion-duration-fast)`.

`bg-ods-brand` is the brand color of the logo, not a surface: for a brand ground, use `bg-ods-surface-brand` with `text-ods-content-on-brand-solid`.

To use the utilities without the layer order, for instance with your own Tailwind entry point, import `@ovhcloud/ods-tailwind/theme.css` after `tailwindcss`, and after any reset of a namespace (`--color-*: initial`), which would clear the ODS utilities too.

## Development

`theme.css` is generated from `@ovhcloud/ods-themes/default/tokens` by `pnpm run build:prod`, and committed: `pnpm run lint:css` fails when it is out of date. `pnpm run test:spec` compiles the stylesheet with Tailwind and checks the committed file.
