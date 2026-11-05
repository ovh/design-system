import{i as e}from"./rolldown-runtime-Dd_uD5pT.js";import{t}from"./jsx-runtime-DREnUpxT.js";import{T as n}from"./index-CdRG7ZE_.js";var r=e(t());function i(e){let t={code:`code`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components},{DocLink:i,ExternalLink:a,Heading:s,Message:c,MessageBody:l,MessageIcon:u,Table:d}=t;return i||o(`DocLink`,!0),a||o(`ExternalLink`,!0),s||o(`Heading`,!0),c||o(`Message`,!0),l||o(`MessageBody`,!0),u||o(`MessageIcon`,!0),d||o(`Table`,!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.p,{children:`This guide covers how to use Tailwind CSS utilities with the OVHcloud Design System (ODS) design tokens.`}),`
`,(0,r.jsxs)(t.p,{children:[`Tailwind CSS is not mandatory: ODS is not based on it, and `,(0,r.jsx)(t.code,{children:`@ovhcloud/ods-react`}),` does not depend on it. `,(0,r.jsx)(t.code,{children:`@ovhcloud/ods-tailwind`}),` is an opt-in package for the apps that use Tailwind CSS v4: it maps the Tailwind utilities to the ODS semantic tokens, so that `,(0,r.jsx)(t.code,{children:`bg-ods-surface-raised`}),` or `,(0,r.jsx)(t.code,{children:`rounded-ods-container`}),` read the same values as the ODS components.`]}),`
`,(0,r.jsx)(s,{label:`Installation`,level:2}),`
`,(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:`@ovhcloud/ods-tailwind`}),` requires Tailwind CSS v4.`]}),`
`,(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:`language-bash`,children:`npm install @ovhcloud/ods-tailwind tailwindcss @tailwindcss/vite
`})}),`
`,(0,r.jsx)(t.p,{children:`Add the Tailwind plugin of your bundler, for instance with Vite:`}),`
`,(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:`language-typescript`,children:`// vite.config.ts
import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [react(), tailwindcss()],
});
`})}),`
`,(0,r.jsxs)(t.p,{children:[`Then import `,(0,r.jsx)(t.code,{children:`@ovhcloud/ods-tailwind`}),` in your stylesheet, followed by the ODS theme. It brings Tailwind CSS itself: do not import `,(0,r.jsx)(t.code,{children:`tailwindcss`}),` again.`]}),`
`,(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:`language-css`,children:`/* index.css */
@import '@ovhcloud/ods-tailwind';
@import '@ovhcloud/ods-themes/default/css';
@import '@ovhcloud/ods-themes/default/fonts';
`})}),`
`,(0,r.jsx)(s,{label:`Import order`,level:3}),`
`,(0,r.jsxs)(t.p,{children:[`Import this stylesheet `,(0,r.jsx)(t.strong,{children:`before any ODS theme or component`}),`, as the first import of your entry point, and import the ODS theme from it rather than from JavaScript:`]}),`
`,(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:`language-typescript`,children:`// main.tsx
import './index.css';
import { createRoot } from 'react-dom/client';
import { App } from './App';
`})}),`
`,(0,r.jsxs)(c,{dismissible:!1,style:{width:`100%`},children:[(0,r.jsx)(u,{name:`triangle-exclamation`}),(0,r.jsx)(l,{children:(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:`@ovhcloud/ods-tailwind`}),` declares the order of the CSS layers: the Tailwind theme and base, then the ODS layers, then the Tailwind components and utilities. A layer takes its place from the first stylesheet that names it, and the ODS theme and components name the ODS layers too. If either is imported before `,(0,r.jsx)(t.code,{children:`@ovhcloud/ods-tailwind`}),`, the ODS layers land before the Tailwind base styles, which then reset the ODS buttons and headings.`]})})]}),`
`,(0,r.jsxs)(t.p,{children:[`With this order, the ODS styles win over the Tailwind base styles, and your own styles win over the ODS ones: a utility on an ODS component, or a rule of yours in `,(0,r.jsx)(t.code,{children:`@layer components`}),`, where Tailwind puts the styles of your components. Target an ODS element with a class rather than a tag selector there: a `,(0,r.jsx)(t.code,{children:`.card button`}),` rule in `,(0,r.jsx)(t.code,{children:`@layer components`}),` also restyles every ODS button of the card.`]}),`
`,(0,r.jsxs)(t.p,{children:[`For an order that holds whatever the import order, declare it in the `,(0,r.jsx)(t.code,{children:`<head>`}),` of your page, before any stylesheet:`]}),`
`,(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:`language-html`,children:`<style>@layer theme, base, ods-quarks, ods-atoms, ods-molecules, ods-organisms, components, utilities;</style>
`})}),`
`,(0,r.jsx)(t.p,{children:`With a Content Security Policy, allow this inline style with its hash or a nonce.`}),`
`,(0,r.jsx)(s,{label:`Utilities`,level:2}),`
`,(0,r.jsxs)(t.p,{children:[`Every utility has an `,(0,r.jsx)(t.code,{children:`ods-`}),` prefix, which keeps it apart from the Tailwind defaults (these stay available):`]}),`
`,(0,r.jsxs)(d,{children:[(0,r.jsx)(`thead`,{children:(0,r.jsxs)(`tr`,{children:[(0,r.jsx)(`th`,{scope:`col`,children:`ODS tokens`}),(0,r.jsx)(`th`,{scope:`col`,children:`Utilities`})]})}),(0,r.jsxs)(`tbody`,{children:[(0,r.jsxs)(`tr`,{children:[(0,r.jsx)(`td`,{children:(0,r.jsx)(`code`,{children:`--ods-semantic-color-*`})}),(0,r.jsxs)(`td`,{children:[(0,r.jsx)(`code`,{children:`bg-ods-surface-raised`}),`, `,(0,r.jsx)(`code`,{children:`text-ods-content-heading`}),`, `,(0,r.jsx)(`code`,{children:`border-ods-border-container`}),`, and every other color utility (`,(0,r.jsx)(`code`,{children:`fill-`}),`, `,(0,r.jsx)(`code`,{children:`ring-`}),`, `,(0,r.jsx)(`code`,{children:`outline-`}),`…)`]})]}),(0,r.jsxs)(`tr`,{children:[(0,r.jsx)(`td`,{children:(0,r.jsx)(`code`,{children:`--ods-semantic-size-radius-*`})}),(0,r.jsxs)(`td`,{children:[(0,r.jsx)(`code`,{children:`rounded-ods-control`}),`, `,(0,r.jsx)(`code`,{children:`rounded-ods-container`}),`, `,(0,r.jsx)(`code`,{children:`rounded-ods-pill`})]})]}),(0,r.jsxs)(`tr`,{children:[(0,r.jsx)(`td`,{children:(0,r.jsx)(`code`,{children:`--ods-semantic-shadow-*`})}),(0,r.jsxs)(`td`,{children:[(0,r.jsx)(`code`,{children:`shadow-ods-raised`}),`, `,(0,r.jsx)(`code`,{children:`shadow-ods-overlay`})]})]}),(0,r.jsxs)(`tr`,{children:[(0,r.jsx)(`td`,{children:(0,r.jsx)(`code`,{children:`--ods-semantic-font-family-*`})}),(0,r.jsxs)(`td`,{children:[(0,r.jsx)(`code`,{children:`font-ods-body`}),`, `,(0,r.jsx)(`code`,{children:`font-ods-heading`}),`, `,(0,r.jsx)(`code`,{children:`font-ods-code`})]})]}),(0,r.jsxs)(`tr`,{children:[(0,r.jsx)(`td`,{children:(0,r.jsx)(`code`,{children:`--ods-semantic-font-weight-*`})}),(0,r.jsxs)(`td`,{children:[(0,r.jsx)(`code`,{children:`font-ods-regular`}),`, `,(0,r.jsx)(`code`,{children:`font-ods-semibold`}),`, `,(0,r.jsx)(`code`,{children:`font-ods-bold`})]})]}),(0,r.jsxs)(`tr`,{children:[(0,r.jsx)(`td`,{children:(0,r.jsx)(`code`,{children:`--ods-semantic-size-space-*`})}),(0,r.jsxs)(`td`,{children:[(0,r.jsx)(`code`,{children:`p-ods-inset-inline`}),`, `,(0,r.jsx)(`code`,{children:`gap-ods-gap-group`}),`, `,(0,r.jsx)(`code`,{children:`m-ods-gap-section`}),`, and every other spacing utility`]})]}),(0,r.jsxs)(`tr`,{children:[(0,r.jsxs)(`td`,{children:[(0,r.jsx)(`code`,{children:`--ods-semantic-size-block-size-*`}),`, `,(0,r.jsx)(`code`,{children:`--ods-semantic-size-inline-size-field`})]}),(0,r.jsxs)(`td`,{children:[(0,r.jsx)(`code`,{children:`h-ods-block-md`}),`, `,(0,r.jsx)(`code`,{children:`w-ods-inline-field`})]})]}),(0,r.jsxs)(`tr`,{children:[(0,r.jsx)(`td`,{children:(0,r.jsx)(`code`,{children:`--ods-semantic-motion-easing*`})}),(0,r.jsxs)(`td`,{children:[(0,r.jsx)(`code`,{children:`ease-ods-default`}),`, `,(0,r.jsx)(`code`,{children:`ease-ods-enter`}),`, `,(0,r.jsx)(`code`,{children:`ease-ods-exit`})]})]})]})]}),`
`,(0,r.jsxs)(t.p,{children:[`A utility is named after its token: `,(0,r.jsx)(t.code,{children:`--ods-semantic-color-surface-raised`}),` gives `,(0,r.jsx)(t.code,{children:`bg-ods-surface-raised`}),`, `,(0,r.jsx)(t.code,{children:`--ods-semantic-size-space-gap-group`}),` gives `,(0,r.jsx)(t.code,{children:`gap-ods-gap-group`}),`. See `,(0,r.jsx)(i,{to:`/guides/design-tokens`,children:`Design Tokens`}),` for what each token is for. The palette (`,(0,r.jsx)(t.code,{children:`--ods-palette-*`}),`) is not mapped: use the semantic tokens, the ones a theme re-points.`]}),`
`,(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:`language-tsx`,children:`import { BADGE_STATUS, Badge, TEXT_PRESET, Text } from '@ovhcloud/ods-react';

function Summary() {
  return (
    <section className="flex flex-col gap-ods-gap-block rounded-ods-container border border-ods-border-container bg-ods-surface-raised p-ods-gap-group">
      <Text preset={ TEXT_PRESET.heading3 }>Your order</Text>
      <Badge status={ BADGE_STATUS.success }>Ready</Badge>
    </section>
  );
}
`})}),`
`,(0,r.jsxs)(t.p,{children:[`On a solid ground, use the content token made for it: `,(0,r.jsx)(t.code,{children:`bg-ods-surface-brand`}),` goes with `,(0,r.jsx)(t.code,{children:`text-ods-content-on-brand-solid`}),`. `,(0,r.jsx)(t.code,{children:`bg-ods-brand`}),` is the brand color of the logo, not a surface.`]}),`
`,(0,r.jsx)(t.p,{children:`The page font is the ODS body font, and the monospace font the ODS code font: the Tailwind base styles set them on the page, so the ODS components and their overlays (Modal, Popover, Tooltip…) inherit them with no class.`}),`
`,(0,r.jsxs)(t.p,{children:[`The tokens Tailwind has no theme for are not mapped. Read them with the variable shorthand: `,(0,r.jsx)(t.code,{children:`z-(--ods-semantic-z-index-modal)`}),`, `,(0,r.jsx)(t.code,{children:`opacity-(--ods-semantic-opacity-disabled)`}),`, `,(0,r.jsx)(t.code,{children:`duration-(--ods-semantic-motion-duration-fast)`}),`.`]}),`
`,(0,r.jsx)(s,{label:`Themes`,level:2}),`
`,(0,r.jsxs)(t.p,{children:[`The utilities read the ODS tokens (`,(0,r.jsx)(t.code,{children:`var(--ods-semantic-…)`}),`), never their values. The same classes follow the theme the page loads, dark themes included, with no Tailwind configuration: load another theme, or switch themes as `,(0,r.jsx)(i,{to:`/guides/themes`,children:`Themes`}),` explains, and they change with it.`]}),`
`,(0,r.jsxs)(t.p,{children:[`Import another theme instead of the default one, after `,(0,r.jsx)(t.code,{children:`@ovhcloud/ods-tailwind`}),`. A theme is complete: import only one, with the fonts it names.`]}),`
`,(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:`language-css`,children:`/* index.css, with the Blue Jeans dark theme */
@import '@ovhcloud/ods-tailwind';
@import '@ovhcloud/ods-themes/blue-jeans-dark/css';
@import '@ovhcloud/ods-themes/default/fonts';
`})}),`
`,(0,r.jsx)(t.p,{children:`To follow the system setting with no JavaScript, condition each mode on it, so that only one applies:`}),`
`,(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:`language-css`,children:`@import '@ovhcloud/ods-tailwind';
@import '@ovhcloud/ods-themes/default/css' (prefers-color-scheme: light);
@import '@ovhcloud/ods-themes/aluminium-dark/css' (prefers-color-scheme: dark);
@import '@ovhcloud/ods-themes/default/fonts';
`})}),`
`,(0,r.jsxs)(t.p,{children:[`A theme switched from your code, as `,(0,r.jsx)(i,{to:`/guides/themes`,children:`Themes`}),` does it with a `,(0,r.jsx)(t.code,{children:`<link>`}),` in the `,(0,r.jsx)(t.code,{children:`<head>`}),`, is loaded outside `,(0,r.jsx)(t.code,{children:`@ovhcloud/ods-tailwind`}),`: declare the layer order first in the `,(0,r.jsx)(t.code,{children:`<head>`}),`, before that `,(0,r.jsx)(t.code,{children:`<link>`}),` (see `,(0,r.jsx)(t.strong,{children:`Import order`}),`), or the theme sets it and the Tailwind base styles reset the ODS components.`]}),`
`,(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:`language-html`,children:`<style>@layer theme, base, ods-quarks, ods-atoms, ods-molecules, ods-organisms, components, utilities;</style>
<link rel="stylesheet" id="ods-theme">
`})}),`
`,(0,r.jsx)(s,{label:`The dark variant`,level:3}),`
`,(0,r.jsxs)(t.p,{children:[`If your own classes use the `,(0,r.jsx)(t.code,{children:`dark:`}),` variant, make it follow the same switch as the ODS dark theme. By default, it follows the color scheme of the operating system, as a dark theme loaded with `,(0,r.jsx)(t.code,{children:`(prefers-color-scheme: dark)`}),` does. If your code swaps the light and dark themes, also set an attribute of your own on `,(0,r.jsx)(t.code,{children:`<html>`}),`, `,(0,r.jsx)(t.code,{children:`data-dark`}),` for instance, and point the variant at it:`]}),`
`,(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:`language-css`,children:`/* Tailwind CSS v4, in index.css */
@custom-variant dark (&:where([data-dark], [data-dark] *));
`})}),`
`,(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:`language-js`,children:`// Tailwind CSS v3, in tailwind.config.js
export default {
  darkMode: ['selector', '[data-dark]'],
  // …
};
`})}),`
`,(0,r.jsxs)(t.p,{children:[`ODS itself reads no attribute: `,(0,r.jsx)(t.code,{children:`data-dark`}),` only drives your `,(0,r.jsx)(t.code,{children:`dark:`}),` classes.`]}),`
`,(0,r.jsx)(s,{label:`Without the layer order`,level:3}),`
`,(0,r.jsxs)(t.p,{children:[`If your app already sets its own Tailwind entry point and layer order, import only the utilities, after Tailwind, and after any reset of a namespace (`,(0,r.jsx)(t.code,{children:`--color-*: initial`}),`), which would clear the ODS utilities too:`]}),`
`,(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:`language-css`,children:`@import 'tailwindcss';
@import '@ovhcloud/ods-tailwind/theme.css';
`})}),`
`,(0,r.jsxs)(t.p,{children:[`Then keep the ODS layers (`,(0,r.jsx)(t.code,{children:`ods-quarks`}),`, `,(0,r.jsx)(t.code,{children:`ods-atoms`}),`, `,(0,r.jsx)(t.code,{children:`ods-molecules`}),`, `,(0,r.jsx)(t.code,{children:`ods-organisms`}),`) after the Tailwind `,(0,r.jsx)(t.code,{children:`base`}),` layer and before `,(0,r.jsx)(t.code,{children:`components`}),` in your own `,(0,r.jsx)(t.code,{children:`@layer`}),` statement.`]}),`
`,(0,r.jsx)(s,{label:`Tailwind CSS v3`,level:2}),`
`,(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:`@ovhcloud/ods-tailwind`}),` requires Tailwind CSS v4. With Tailwind CSS v3, map the tokens you need in your `,(0,r.jsx)(t.code,{children:`tailwind.config.js`}),`, under the same names:`]}),`
`,(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:`language-js`,children:`/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      borderRadius: {
        'ods-container': 'var(--ods-semantic-size-radius-container)',
        'ods-control': 'var(--ods-semantic-size-radius-control)',
      },
      colors: {
        'ods-border-container': 'var(--ods-semantic-color-border-container)',
        'ods-content-heading': 'var(--ods-semantic-color-content-heading)',
        'ods-surface-raised': 'var(--ods-semantic-color-surface-raised)',
      },
      fontFamily: {
        'ods-body': 'var(--ods-semantic-font-family-body)',
      },
    },
  },
};
`})}),`
`,(0,r.jsxs)(t.p,{children:[`Tailwind CSS v3 has no layer order of its own to declare: its base styles do not use cascade layers, so they always win over the ODS styles and reset the ODS buttons and headings. Leave the Tailwind preflight out: `,(0,r.jsx)(t.code,{children:`corePlugins: { preflight: false }`}),`.`]}),`
`,(0,r.jsx)(s,{label:`Integration with IDEs`,level:2}),`
`,(0,r.jsxs)(t.p,{children:[`In VS Code, install the `,(0,r.jsx)(a,{href:`https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss`,children:`Tailwind CSS IntelliSense`}),` extension: the `,(0,r.jsx)(t.code,{children:`ods-*`}),` classes complete from your CSS file (v4) or your configuration (v3). In Tailwind CSS v4, if the extension does not find your CSS file, point its `,(0,r.jsx)(t.code,{children:`tailwindCSS.experimental.configFile`}),` setting at it. JetBrains IDEs complete them with no setup.`]}),`
`,(0,r.jsx)(s,{label:`Resources`,level:2}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsxs)(t.li,{children:[`
`,(0,r.jsx)(a,{href:`https://tailwindcss.com/docs/theme`,children:`Tailwind CSS theme variables`}),`
`]}),`
`,(0,r.jsxs)(t.li,{children:[`
`,(0,r.jsx)(a,{href:`https://tailwindcss.com/docs/upgrade-guide`,children:`Tailwind CSS v4 upgrade guide`}),`
`]}),`
`,(0,r.jsxs)(t.li,{children:[`
`,(0,r.jsx)(i,{to:`/guides/themes`,children:`ODS Themes`}),`
`]}),`
`,(0,r.jsxs)(t.li,{children:[`
`,(0,r.jsx)(i,{to:`/guides/design-tokens`,children:`ODS Design Tokens`}),`
`]}),`
`]})]})}function a(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(i,{...e})}):i(e)}function o(e,t){throw Error(`Expected `+(t?`component`:`object`)+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}export{a as default};