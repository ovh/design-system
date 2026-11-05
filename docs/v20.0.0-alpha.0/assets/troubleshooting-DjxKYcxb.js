import{i as e}from"./rolldown-runtime-Dd_uD5pT.js";import{t}from"./jsx-runtime-DREnUpxT.js";import{T as n}from"./index-CdRG7ZE_.js";var r=e(t());function i(e){let t={code:`code`,em:`em`,p:`p`,pre:`pre`,strong:`strong`,...n(),...e.components},{DocLink:i,ExternalLink:a,Heading:s}=t;return i||o(`DocLink`,!0),a||o(`ExternalLink`,!0),s||o(`Heading`,!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.p,{children:(0,r.jsxs)(t.em,{children:[`Common issues met when integrating ODS, and how to fix them. If yours is not listed, check the `,(0,r.jsx)(i,{to:`/guides/faq`,children:`F.A.Q.`}),` or `,(0,r.jsx)(a,{href:`https://github.com/ovh/design-system/issues`,children:`open an issue on GitHub`}),`.`]})}),`
`,(0,r.jsx)(s,{label:`TS2307: Cannot find module '@ovhcloud/ods-react' or its corresponding type declarations.`,level:2}),`
`,(0,r.jsxs)(t.p,{children:[`Check that you're using the `,(0,r.jsx)(t.code,{children:`bundler`}),` `,(0,r.jsx)(a,{href:`https://www.typescriptlang.org/docs/handbook/release-notes/typescript-5-0.html#--moduleresolution-bundler`,children:`module resolution`}),` in your `,(0,r.jsx)(t.code,{children:`tsconfig.json`}),`.`]}),`
`,(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:`language-typescript`,children:`"moduleResolution": "bundler"
`})}),`
`,(0,r.jsx)(s,{label:`My popover/tooltip is not displayed correctly`,level:2}),`
`,(0,r.jsxs)(t.p,{children:[`Check that you're not using a `,(0,r.jsx)(t.code,{children:`Fragment`}),` as your trigger.`]}),`
`,(0,r.jsxs)(t.p,{children:[`The following will `,(0,r.jsx)(t.strong,{children:`not`}),` work properly:`]}),`
`,(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:`language-tsx`,children:`<Tooltip>
  <TooltipTrigger asChild>
    <>
      <Component1 />
      <Component2 />
    </>
  </TooltipTrigger>
  <TooltipContent>
    ...
  </TooltipContent>
</Tooltip>
`})}),`
`,(0,r.jsxs)(t.p,{children:[`Replace the `,(0,r.jsx)(t.code,{children:`Fragment`}),` with an actual node:`]}),`
`,(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:`language-tsx`,children:`<Tooltip>
  <TooltipTrigger asChild>
    <MyTrigger>
      ...
    </MyTrigger>
  </TooltipTrigger>
  <TooltipContent>
    ...
  </TooltipContent>
</Tooltip>
`})}),`
`,(0,r.jsx)(s,{label:`Overlay elements are not displayed correctly in a drawer/modal`,level:2}),`
`,(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:`Modal`}),` and `,(0,r.jsx)(t.code,{children:`Drawer`}),` components have a `,(0,r.jsx)(t.code,{children:`z-index`}),` greater than other overlay components.
This is to prevent those to appear behind an open modal/drawer.`]}),`
`,(0,r.jsxs)(t.p,{children:[`To allow overlay elements to correctly render inside a modal/drawer, add the `,(0,r.jsx)(t.code,{children:`createPortal={ false }`}),` attribute to the
`,(0,r.jsx)(t.code,{children:`Content`}),` component of the overlay element.`]}),`
`,(0,r.jsxs)(t.p,{children:[`See `,(0,r.jsx)(i,{to:`/components/drawer`,children:`Drawer example`}),`
and `,(0,r.jsx)(i,{to:`/components/modal`,children:`Modal example`}),`.`]}),`
`,(0,r.jsx)(s,{label:`Icons are not displayed`,level:2}),`
`,(0,r.jsxs)(t.p,{children:[`Ensure you did import the fonts in your application, check the `,(0,r.jsx)(i,{to:`/guides/get-started`,children:`get started`}),`
page to read more about how to achieve this.`]}),`
`,(0,r.jsx)(s,{label:`Warning: Function components cannot be given refs`,level:2}),`
`,(0,r.jsxs)(t.p,{children:[`With React 18, when using components enabling dynamic component (through the `,(0,r.jsx)(t.code,{children:`as`}),` attribute), you may encounter the following error message in the console:`]}),`
`,(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:`language-text`,children:`Warning: Function components cannot be given refs.
Attempts to access this ref will fail. Did you mean to use React.forwardRef()?
`})}),`
`,(0,r.jsxs)(t.p,{children:[`This means you're passing a function component to the `,(0,r.jsx)(t.code,{children:`as`}),` attribute and it needs to be wrapped by a `,(0,r.jsx)(t.code,{children:`forwardRef`}),` to be able to manage the `,(0,r.jsx)(t.code,{children:`ref`}),` correctly.`]}),`
`,(0,r.jsxs)(t.p,{children:[`With React 19, `,(0,r.jsx)(t.code,{children:`ref`}),` is a regular prop and no warning is shown, but your component still has to pass the `,(0,r.jsx)(t.code,{children:`ref`}),` it receives down to its DOM element, as the example below does.`]}),`
`,(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:`language-tsx`,children:`import { Link } from '@ovhcloud/ods-react';
import { forwardRef, useRef } from 'react';

const DummyLink = forwardRef(({ children, ...props }, ref) => {
  return (
    <a data-test="dummy" { ...props } ref={ ref }>{ children }</a>
  );
});

const MyApp = () => {
  const linkRef = useRef(null);

  return (
    <div>
      ...
      <Link as={ DummyLink } href="#" ref={ linkRef }>...</Link>
    </div>
  );
};
`})}),`
`,(0,r.jsx)(s,{label:`Error during server-side rendering (Next.js App Router)`,level:2}),`
`,(0,r.jsxs)(t.p,{children:[`ODS components rely on React state, effects and browser APIs, so they cannot render as React Server Components.
Use them from client components, marked with the `,(0,r.jsx)(t.code,{children:`'use client'`}),` directive, and keep the theme imports in your root layout.`]}),`
`,(0,r.jsxs)(t.p,{children:[`If the error is `,(0,r.jsx)(t.code,{children:`document is not defined`}),` and the page renders a `,(0,r.jsx)(t.code,{children:`Toaster`}),`, it comes from its default portal into `,(0,r.jsx)(t.code,{children:`document.body`}),`: pass `,(0,r.jsx)(t.code,{children:`createPortal={ false }`}),`, or render the `,(0,r.jsx)(t.code,{children:`Toaster`}),` only once the page is mounted in the browser.`]}),`
`,(0,r.jsxs)(t.p,{children:[`See `,(0,r.jsx)(i,{to:`/guides/get-started`,children:`Get Started`}),` for the full setup.`]})]})}function a(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(i,{...e})}):i(e)}function o(e,t){throw Error(`Expected `+(t?`component`:`object`)+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}export{a as default};