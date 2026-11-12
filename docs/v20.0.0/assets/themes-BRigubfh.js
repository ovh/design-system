import{i as e}from"./rolldown-runtime-Dd_uD5pT.js";import{t}from"./jsx-runtime-DREnUpxT.js";import{T as n}from"./index-CzEwg6AJ.js";var r=e(t());function i(e){let t={code:`code`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components},{Canvas:i,DocLink:a,Heading:s,Message:c,MessageBody:l,MessageIcon:u}=t;return i||o(`Canvas`,!0),a||o(`DocLink`,!0),s||o(`Heading`,!0),c||o(`Message`,!0),l||o(`MessageBody`,!0),u||o(`MessageIcon`,!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(t.p,{children:[`A theme is a stylesheet that declares the ODS design tokens as CSS custom properties on `,(0,r.jsx)(t.code,{children:`:root`}),`. ODS components read these tokens, and so can your own CSS: load a theme, and both follow it.`]}),`
`,(0,r.jsx)(t.p,{children:`A theme names its fonts, but does not load them: loading them is up to you.`}),`
`,(0,r.jsx)(s,{label:`Available themes`,level:2}),`
`,(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:`@ovhcloud/ods-themes`}),` ships four themes. Each one is a complete stylesheet:`]}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:`Default`}),` (`,(0,r.jsx)(t.code,{children:`@ovhcloud/ods-themes/default/css`}),`), the Aluminium look.`]}),`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:`Aluminium dark`}),` (`,(0,r.jsx)(t.code,{children:`@ovhcloud/ods-themes/aluminium-dark/css`}),`), its dark mode.`]}),`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:`Blue Jeans`}),` (`,(0,r.jsx)(t.code,{children:`@ovhcloud/ods-themes/blue-jeans/css`}),`), the OVHcloud look.`]}),`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:`Blue Jeans dark`}),` (`,(0,r.jsx)(t.code,{children:`@ovhcloud/ods-themes/blue-jeans-dark/css`}),`), its dark mode.`]}),`
`]}),`
`,(0,r.jsx)(s,{label:`Load a theme`,level:2}),`
`,(0,r.jsx)(t.p,{children:`Load a single theme. A theme does not build on another one: two themes loaded together override each other.`}),`
`,(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:`language-typescript`,children:`import '@ovhcloud/ods-themes/blue-jeans-dark/css';
`})}),`
`,(0,r.jsxs)(t.p,{children:[`Then load the fonts it names (see `,(0,r.jsx)(t.strong,{children:`Fonts`}),`).`]}),`
`,(0,r.jsxs)(c,{status:`warning`,dismissible:!1,style:{width:`100%`},children:[(0,r.jsx)(u,{name:`triangle-exclamation`}),(0,r.jsx)(l,{children:(0,r.jsx)(t.p,{children:`Make sure the page loads the fonts of the theme you choose. A font the page does not load falls back to the next one of its stack, without any error.`})})]}),`
`,(0,r.jsx)(s,{label:`Fonts`,level:2}),`
`,(0,r.jsxs)(t.p,{children:[`A theme names its fonts in three tokens: `,(0,r.jsx)(t.code,{children:`--ods-semantic-font-family-body`}),`, `,(0,r.jsx)(t.code,{children:`--ods-semantic-font-family-heading`}),` and `,(0,r.jsx)(t.code,{children:`--ods-semantic-font-family-code`}),`. Another theme may name other fonts.`]}),`
`,(0,r.jsxs)(t.p,{children:[`The four themes above use the same two fonts, `,(0,r.jsx)(t.strong,{children:`Source Sans 3`}),` for text and `,(0,r.jsx)(t.strong,{children:`Source Code Pro`}),` for code. ODS ships them in `,(0,r.jsx)(t.code,{children:`@ovhcloud/ods-themes/default/fonts`}),`, a name kept from v19 though it serves every theme, with `,(0,r.jsx)(t.strong,{children:`ODS Icon`}),`, the icon font of the components, needed whatever the theme:`]}),`
`,(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:`language-typescript`,children:`import '@ovhcloud/ods-themes/default/fonts';
`})}),`
`,(0,r.jsxs)(t.p,{children:[`This stylesheet declares the fonts with relative `,(0,r.jsx)(t.code,{children:`url()`}),`s to the font files of the package: your bundler resolves them and emits the files.`]}),`
`,(0,r.jsxs)(t.p,{children:[`As a help for these four themes, `,(0,r.jsx)(t.code,{children:`@ovhcloud/ods-themes/fonts-base64`}),` declares the same fonts with the files inlined as base64, for a setup that cannot serve font files. Load it instead of `,(0,r.jsx)(t.code,{children:`default/fonts`}),`, not with it. It weighs about 700 KB and the browser cannot load its fonts in parallel: keep it as a fallback.`]}),`
`,(0,r.jsx)(s,{label:`Switch themes`,level:2}),`
`,(0,r.jsx)(t.p,{children:`A page shows one theme. No attribute or class selects it: to switch themes, replace the theme stylesheet of the page.`}),`
`,(0,r.jsx)(t.p,{children:`To follow the color scheme of the operating system, without any script, import each mode with a media query, so that only one applies:`}),`
`,(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:`language-css`,children:`@import '@ovhcloud/ods-themes/default/css' (prefers-color-scheme: light);
@import '@ovhcloud/ods-themes/aluminium-dark/css' (prefers-color-scheme: dark);
@import '@ovhcloud/ods-themes/default/fonts';
`})}),`
`,(0,r.jsxs)(t.p,{children:[`To switch from your code, put an empty `,(0,r.jsx)(t.code,{children:`<link>`}),` for the theme in the `,(0,r.jsx)(t.code,{children:`<head>`}),` of your page, before your own stylesheets, and set its URL from your code: your styles stay after the theme and can override it. With Vite, a `,(0,r.jsx)(t.code,{children:`?url`}),` import emits the theme file and gives its URL:`]}),`
`,(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:`language-html`,children:`<link rel="stylesheet" id="ods-theme">
`})}),`
`,(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:`language-typescript`,children:`import '@ovhcloud/ods-themes/default/fonts';
import lightThemeUrl from '@ovhcloud/ods-themes/default/css?url';
import darkThemeUrl from '@ovhcloud/ods-themes/aluminium-dark/css?url';

const theme = document.getElementById('ods-theme') as HTMLLinkElement;
theme.href = lightThemeUrl;

function setDarkMode(isDark: boolean): void {
  theme.href = isDark ? darkThemeUrl : lightThemeUrl;
}
`})}),`
`,(0,r.jsxs)(t.p,{children:[`Without a bundler, serve the files the export paths resolve to, and point the `,(0,r.jsx)(t.code,{children:`<link>`}),` at them: the layout of the package folder may change from one version to the next, the export paths do not.`]}),`
`,(0,r.jsx)(t.p,{children:`The fonts stay loaded when the theme changes. If the two themes do not name the same fonts, load the fonts of both.`}),`
`,(0,r.jsxs)(t.p,{children:[`This documentation does it differently: it keeps the default theme loaded, and puts the theme shown, whole, in a single `,(0,r.jsx)(t.code,{children:`<style>`}),` element after it, filled by its theme select and its color scheme button. Every theme declares all its tokens, so the theme shown wins on each of them.`]}),`
`,(0,r.jsx)(s,{label:`Use the tokens in your CSS`,level:2}),`
`,(0,r.jsxs)(t.p,{children:[`Style your own elements with the `,(0,r.jsx)(t.code,{children:`--ods-semantic-*`}),` tokens, and they follow the theme as the ODS components do. Switch the theme or the color scheme of this documentation, from its top bar (at the bottom of the navigation on narrow screens): the plan below follows, as its Button does. The two dark themes share their surfaces and their brand color, so the plan looks the same in both.`]}),`
`,(0,r.jsx)(i,{story:`GuideThemesOwnStyle`,from:`button`}),`
`,(0,r.jsxs)(t.p,{children:[`The `,(0,r.jsx)(a,{to:`/guides/design-tokens`,children:`Design Tokens`}),` page explains which tokens to use and lists all of them.`]}),`
`,(0,r.jsxs)(t.p,{children:[`To read the token values from JavaScript (charts, a design tool sync), each theme ships a JSON next to its stylesheet: `,(0,r.jsx)(t.code,{children:`@ovhcloud/ods-themes/default/tokens`}),`, `,(0,r.jsx)(t.code,{children:`aluminium-dark/tokens`}),`, `,(0,r.jsx)(t.code,{children:`blue-jeans/tokens`}),` and `,(0,r.jsx)(t.code,{children:`blue-jeans-dark/tokens`}),`. Read the one of the theme the page loads. They share the `,(0,r.jsx)(t.code,{children:`--ods-semantic-*`}),` keys; the `,(0,r.jsx)(t.code,{children:`--ods-palette-*`}),` keys belong to each theme.`]}),`
`,(0,r.jsx)(s,{label:`Create your own theme`,level:2}),`
`,(0,r.jsxs)(t.p,{children:[`A theme of your own is a stylesheet loaded `,(0,r.jsx)(t.strong,{children:`after`}),` an ODS theme, that re-declares on `,(0,r.jsx)(t.code,{children:`:root`}),` the tokens you want to change. Any token can be re-declared: a color, a radius, a spacing, a font, a duration.`]}),`
`,(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:`language-css`,children:`:root {
  /* the brand and accent ramps, from 50 to 900 */
  --ods-palette-brand-500: #7a00cc;

  /* any semantic token */
  --ods-semantic-size-radius-control: 0;
  --ods-semantic-font-family-body: 'My Font', sans-serif;
}
`})}),`
`,(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:`language-typescript`,children:`import '@ovhcloud/ods-themes/default/css';
import './my-theme.css';
`})}),`
`,(0,r.jsx)(t.p,{children:`An ODS theme declares every token: loaded after your stylesheet, it overrides it. When the page switches themes, keep your stylesheet after the one shown.`}),`
`,(0,r.jsxs)(t.p,{children:[`The `,(0,r.jsx)(t.code,{children:`--ods-semantic-*`}),` tokens are the public surface of a theme. The `,(0,r.jsx)(a,{to:`/guides/design-tokens`,children:`Design Tokens`}),` page lists them, with their role.`]}),`
`,(0,r.jsxs)(t.p,{children:[`To change the colors, the brand and accent ramps are the shortest way: `,(0,r.jsx)(t.code,{children:`--ods-palette-brand-*`}),` paints the brand roles, `,(0,r.jsx)(t.code,{children:`--ods-palette-accent-*`}),` the text, headings, selection and form controls. They do not reach every role: the focus ring, the information, success, warning, critical and neutral statuses, and the chart series keep their values. Over the default theme, the brand ghost and outline Buttons also take their text from the accent ramp and their border from gray (`,(0,r.jsx)(t.code,{children:`--ods-semantic-color-border-brand-minor`}),`), which follows no ramp. Re-declare these roles themselves to change them. The `,(0,r.jsx)(a,{to:`/guides/migration-19-to-20`,children:`migration guide`}),` details which roles each ramp reaches.`]}),`
`,(0,r.jsxs)(t.p,{children:[`The ramps only take effect on `,(0,r.jsx)(t.code,{children:`:root`}),`: a theme scoped to a container, such as the root of a micro-frontend, re-declares the `,(0,r.jsx)(t.code,{children:`--ods-semantic-*`}),` roles themselves.`]}),`
`,(0,r.jsx)(t.p,{children:`The ODS themes do not aim the accent ramp at the same family: the default theme, Aluminium dark and Blue Jeans dark aim it at navy, Blue Jeans at blue. A stylesheet of yours re-declares the ramps of the theme it follows, so each theme can take its own.`}),`
`,(0,r.jsxs)(t.p,{children:[`A font you name in a theme is yours to load (see `,(0,r.jsx)(t.strong,{children:`Fonts`}),`).`]})]})}function a(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(i,{...e})}):i(e)}function o(e,t){throw Error(`Expected `+(t?`component`:`object`)+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}export{a as default};