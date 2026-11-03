# @ovhcloud/ods-tailwind

[Tailwind CSS](https://tailwindcss.com) v4 utilities mapped to the OVHcloud Design System tokens: `bg-ods-surface-raised`, `text-ods-content-heading`, `rounded-ods-container`, `p-ods-inset-inline`…

Each utility reads an ODS semantic token (`var(--ods-semantic-…)`), never its value: the same classes follow the theme you load (default, Blue Jeans, their dark themes, or your own) and a theme switch at runtime.

It is opt-in: `@ovhcloud/ods-react` does not depend on Tailwind, and ODS works without it.

## Setup

Requires Tailwind CSS v4.

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
/* index.css: @ovhcloud/ods-tailwind first, it brings Tailwind */
@import '@ovhcloud/ods-tailwind';
@import '@ovhcloud/ods-themes/default/css';
@import '@ovhcloud/ods-themes/default/fonts';
```

Import this stylesheet **before** any ODS component, as the first import of your entry point:

```ts
// main.tsx
import './index.css';
import { App } from './App';
```

`@ovhcloud/ods-tailwind` declares the order of the CSS layers: the Tailwind theme, base and components, then the ODS layers, then the Tailwind utilities. A utility you put on an ODS component wins over its style, and the ODS styles win over the Tailwind reset. The first stylesheet that names a layer sets its place: if an ODS component is imported first, its layers land before the Tailwind reset, which then strips the ODS buttons and headings of their style.

## Utilities

| Tailwind namespace | ODS tokens | Example |
| --- | --- | --- |
| `color` | `--ods-semantic-color-*` (surface, content, border, interaction, chart, brand, focus) | `bg-ods-surface-raised`, `text-ods-content-heading`, `border-ods-border-container` |
| `radius` | `--ods-semantic-size-radius-*` | `rounded-ods-container` |
| `shadow` | `--ods-semantic-shadow-*` | `shadow-ods-overlay` |
| `font` | `--ods-semantic-font-family-*` | `font-ods-body` |
| `font-weight` | `--ods-semantic-font-weight-*` | `font-ods-semibold` |
| `spacing` | `--ods-semantic-size-space-*`, `-block-size-*` (as `block-*`), `-inline-size-field` (as `inline-field`) | `p-ods-inset-inline`, `gap-ods-gap-group`, `h-ods-block-md` |
| `ease` | `--ods-semantic-motion-easing*` | `ease-ods-enter` |

The `ods-` prefix keeps them apart from the Tailwind defaults, which stay available. The palette is not mapped: use the semantic tokens, the ones a theme re-points.

To use the utilities without the layer order, for instance with your own Tailwind entry point, import `@ovhcloud/ods-tailwind/theme.css` after `tailwindcss`.

## Development

`theme.css` is generated from `@ovhcloud/ods-themes/default/tokens` by `pnpm run build:prod`. `pnpm run test:spec` compiles the stylesheet with Tailwind and checks that every mapped token has its utility.
