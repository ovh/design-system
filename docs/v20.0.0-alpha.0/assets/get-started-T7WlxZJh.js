import{i as e}from"./rolldown-runtime-Dd_uD5pT.js";import{t}from"./jsx-runtime-DREnUpxT.js";import{T as n}from"./index-CdRG7ZE_.js";var r=e(t());function i(e){let t={code:`code`,p:`p`,pre:`pre`,strong:`strong`,...n(),...e.components},{DocLink:i,ExternalLink:a,Heading:s,PackageManagerTabs:c}=t;return i||o(`DocLink`,!0),a||o(`ExternalLink`,!0),s||o(`Heading`,!0),c||o(`PackageManagerTabs`,!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.p,{children:`OVHcloud Design System is a set of reusable React UI components to create a consistent user experience across OVHcloud pages and products, acting as a single source of truth.`}),`
`,(0,r.jsxs)(t.p,{children:[`All OVHcloud Design System packages are available on `,(0,r.jsx)(a,{href:`https://www.npmjs.com`,children:`NPM`}),`.`]}),`
`,(0,r.jsx)(s,{label:`Installation`,level:2}),`
`,(0,r.jsxs)(t.p,{children:[`Include `,(0,r.jsx)(t.strong,{children:`ODS`}),` in your projects like any other npm, pnpm or yarn module.
`,(0,r.jsx)(t.code,{children:`react`}),` and `,(0,r.jsx)(t.code,{children:`react-dom`}),` (`,(0,r.jsx)(t.code,{children:`v18.2+`}),` or `,(0,r.jsx)(t.code,{children:`v19+`}),`) are peer dependencies: they must already be installed in your project.`]}),`
`,(0,r.jsxs)(c,{children:[(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:`language-bash`,children:`npm i --save-exact @ovhcloud/ods-react @ovhcloud/ods-themes
`})}),(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:`language-bash`,children:`pnpm add --save-exact @ovhcloud/ods-react @ovhcloud/ods-themes
`})}),(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:`language-bash`,children:`yarn add --exact @ovhcloud/ods-react @ovhcloud/ods-themes
`})})]}),`
`,(0,r.jsx)(s,{label:`Usage`,level:2}),`
`,(0,r.jsx)(t.p,{children:`All components can be imported from the root path:`}),`
`,(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:`language-tsx`,children:`import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@ovhcloud/ods-react';

const App = () => {
  return (
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
  );
};
`})}),`
`,(0,r.jsx)(t.p,{children:`Each component is also available as compound component from its subpath:`}),`
`,(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:`language-tsx`,children:`import { Accordion } from '@ovhcloud/ods-react/accordion';

const App = () => {
  return (
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
  );
};
`})}),`
`,(0,r.jsx)(s,{label:`Import components constants`,level:2}),`
`,(0,r.jsxs)(t.p,{children:[`All enums, interfaces, events are available directly from the `,(0,r.jsx)(t.code,{children:`ods-react`}),` lib`]}),`
`,(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:`language-typescript`,children:`import { BUTTON_SIZE, type CheckboxProp } from '@ovhcloud/ods-react';
`})}),`
`,(0,r.jsx)(s,{label:`Import theme & fonts`,level:2}),`
`,(0,r.jsx)(t.p,{children:`You need to import a theme to display all the components correctly. It defines all the colors, typographies, etc.`}),`
`,(0,r.jsx)(t.p,{children:`A theme names its fonts but does not load them: load them too. The default theme uses Source Sans 3 and Source Code Pro, which ODS ships with its icon font.`}),`
`,(0,r.jsx)(t.p,{children:`via ES import:`}),`
`,(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:`language-typescript`,children:`import '@ovhcloud/ods-themes/default/css';
import '@ovhcloud/ods-themes/default/fonts';
`})}),`
`,(0,r.jsx)(t.p,{children:`via Sass import:`}),`
`,(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:`language-scss`,children:`@use 'pkg:@ovhcloud/ods-themes/default/css';
@use '@ovhcloud/ods-themes/default/fonts';
`})}),`
`,(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:`pkg:`}),` URLs require the `,(0,r.jsx)(a,{href:`https://sass-lang.com/documentation/js-api/classes/nodepackageimporter/`,children:`Node.js package importer`}),` (Sass `,(0,r.jsx)(t.code,{children:`v1.71.1+`}),`), enabled with `,(0,r.jsx)(t.code,{children:`importers: [new NodePackageImporter()]`}),` in your Sass options.`]}),`
`,(0,r.jsxs)(t.p,{children:[`The fonts stylesheet declares its font files with relative `,(0,r.jsx)(t.code,{children:`url()`}),`s, which Sass does not rewrite: keep a bare path for it, so your bundler (Vite for instance) resolves the file, rebases these URLs and emits the fonts. Through a `,(0,r.jsx)(t.code,{children:`pkg:`}),` URL, the URLs stay relative to your stylesheet and the fonts are not found. If your bundler does not rebase them, load the fonts from JavaScript instead, as in the ES import above.`]}),`
`,(0,r.jsxs)(t.p,{children:[`ODS ships three more themes, Aluminium dark, Blue Jeans and Blue Jeans dark, each to load instead of the default one. `,(0,r.jsx)(i,{to:`/guides/themes`,children:`Themes`}),` lists their imports and fonts, and explains how to switch between them, load the fonts when your setup cannot serve font files, or create your own theme.`]}),`
`,(0,r.jsx)(s,{label:`Server-side rendering`,level:2}),`
`,(0,r.jsx)(t.p,{children:`ODS components rely on React state, effects and browser APIs: they cannot be used as React Server Components.`}),`
`,(0,r.jsxs)(t.p,{children:[`With the Next.js App Router, import the theme in your root layout and use the components from client components, marked with the `,(0,r.jsx)(t.code,{children:`'use client'`}),` directive:`]}),`
`,(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:`language-tsx`,children:`// app/layout.tsx
import '@ovhcloud/ods-themes/default/css';
import '@ovhcloud/ods-themes/default/fonts';
import { type ReactNode } from 'react';

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>{ children }</body>
    </html>
  );
}
`})}),`
`,(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:`language-tsx`,children:`// app/page.tsx
'use client';
import { Link } from '@ovhcloud/ods-react';

export default function Home() {
  return <Link href="#">My ODS Link</Link>;
}
`})}),`
`,(0,r.jsxs)(t.p,{children:[`The `,(0,r.jsx)(t.code,{children:`Toaster`}),` renders into `,(0,r.jsx)(t.code,{children:`document.body`}),` by default, which does not exist on the server, so the page fails to prerender with `,(0,r.jsx)(t.code,{children:`document is not defined`}),`. Pass `,(0,r.jsx)(t.code,{children:`createPortal={ false }`}),` to render it where it is placed, or render it only once the page is mounted in the browser.`]}),`
`,(0,r.jsx)(s,{label:`TypeScript`,level:2}),`
`,(0,r.jsxs)(t.p,{children:[`To ensure the types are correctly resolved, you'll have to use the `,(0,r.jsx)(t.code,{children:`bundler`}),` module resolution, released with `,(0,r.jsx)(a,{href:`https://www.typescriptlang.org/docs/handbook/release-notes/typescript-5-0.html#--moduleresolution-bundler`,children:`TypeScript 5.0`}),`.`]}),`
`,(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:`language-typescript`,children:`"moduleResolution": "bundler"
`})})]})}function a(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(i,{...e})}):i(e)}function o(e,t){throw Error(`Expected `+(t?`component`:`object`)+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}export{a as default};