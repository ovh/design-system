import{j as e}from"./jsx-runtime-Cfl8ynUo.js";import{useMDXComponents as a}from"./index-ZwkxtaJJ.js";import{l as c}from"./ods-react60-DssFCbzP.js";import{h,R as u,O as m}from"./MessageIcon-z6AesltN-FDBgfKMU.js";import{M as p,S as i}from"./index-9orhCFJa.js";import{E as r}from"./ExternalLink-C0Msq_QQ.js";import{H as o}from"./Heading-eINcjqM4.js";import{S as t}from"./StorybookLink-CMOdzit3.js";import{H as d}from"./meta-t9Q7ez2Q.js";import"./index-jIWwRBLr.js";import"./index-CWkFp9WS-BSIT86NH.js";import"./useI18n-DlJxpFID-BiZOoGU5.js";import"./ods-react243-aAAP9SXj.js";import"./ods-react95-l5fgq-IX.js";import"./iframe-BRevKSH1.js";import"./index-DWDEzXrj.js";import"./index-N93khynk.js";import"./index-CXQShRbs.js";import"./index-DrFu-skq.js";import"./Link-CIjoG_UN-BDwROQOD.js";import"./index-blQ1D1fB.js";function l(n){const s={code:"code",li:"li",p:"p",strong:"strong",ul:"ul",...a(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(p,{tags:["new"],title:"OVHcloud Design System/Design and Style/Tailwind CSS Integration"}),`
`,e.jsx(o,{label:"Tailwind CSS Integration",level:1}),`
`,e.jsx(s.p,{children:"This guide covers how to integrate Tailwind CSS with the OVHcloud Design System (ODS) for both v3 and v4 versions."}),`
`,e.jsx(s.p,{children:"Tailwind CSS is a utility-first CSS framework that can be integrated with ODS components and design tokens, but it is not mandatory as ODS is not based on Tailwind."}),`
`,e.jsxs(h,{dismissible:!1,children:[e.jsx(u,{name:c.circleInfo}),e.jsx(m,{children:e.jsx(s.p,{children:`Technically, you don't need any configuration to make ODS work with Tailwind.
These guides are here to add some auto-completion and best practices when using Tailwind,
but you can directly use the design tokens right out of the box without any additional configuration.`})})]}),`
`,e.jsx(o,{label:"Tailwind CSS v3 Configuration",level:2}),`
`,e.jsxs(s.p,{children:["For Tailwind CSS v3, create a ",e.jsx(s.code,{children:"tailwind.config.js"})," which contains a remapping of ODS variables:"]}),`
`,e.jsx(i,{code:`
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      borderRadius: {
        'ods-border-radius-xs': 'var(--ods-border-radius-xs)',
        'ods-border-radius-sm': 'var(--ods-border-radius-sm)',
        'ods-border-radius-md': 'var(--ods-border-radius-md)',
        'ods-border-radius-lg': 'var(--ods-border-radius-lg)',
      },
      colors: {
        'ods-color-primary-500': 'var(--ods-color-primary-500)',
        'ods-color-success-500': 'var(--ods-color-success-500)',
        'ods-color-warning-700': 'var(--ods-color-warning-700)',
      },
      fontFamily: {
        'ods-font-family-default': 'var(--ods-font-family-default)',
      },
    },
  },
  plugins: [],
}

`,dark:!0,language:"js"}),`
`,e.jsx(o,{label:"Integration with IDEs",level:3}),`
`,e.jsx(o,{label:"Integration with JetBrains",level:4}),`
`,e.jsx(s.p,{children:"This should work straight out of the box."}),`
`,e.jsx(o,{label:"Integration with VSCode",level:4}),`
`,e.jsxs(s.p,{children:["Create a ",e.jsx(s.code,{children:"./.vscode/tailwind.json"})," containing the classes you want to expose for autocompletion."]}),`
`,e.jsx(i,{code:`
{
    "customClasses": [
      "ods-color-primary-500",
      "ods-color-success-500",
      "ods-color-critical-700",
      "ods-border-radius-xs",
      "ods-border-radius-sm",
      "ods-border-radius-md",
      "ods-border-radius-lg",
      "ods-font-family-default",
    ]
  }
`,dark:!0,language:"json"}),`
`,e.jsx(o,{label:"Tailwind CSS v4 Configuration",level:2}),`
`,e.jsxs(s.p,{children:["For Tailwind CSS v4, create a CSS file using the ",e.jsx(r,{href:"https://tailwindcss.com/docs/adding-custom-styles",children:"@theme"})," property:"]}),`
`,e.jsx(i,{code:`
@theme {
  --radius-ods-xs: var(--ods-border-radius-xs);
  --radius-ods-sm: var(--ods-border-radius-sm);
  --radius-ods-md: var(--ods-border-radius-md);
  --radius-ods-lg: var(--ods-border-radius-lg);

  --color-ods-primary: var(--ods-color-primary-500);
  --color-ods-success: var(--ods-color-success-500);
  --color-ods-critical: var(--ods-color-critical-700);

  --font-ods-default: var(--ods-font-family-default);
}
`,dark:!0,language:"css"}),`
`,e.jsx(s.p,{children:`Then import that file after the main ODS theme and Tailwind CSS.
In order for you to properly be able to overwrite the ODS theme, you need to redefine the order of the CSS layers.
Base is optional.`}),`
`,e.jsx(i,{code:`

// index.css

@layer theme, base, components, ods-quarks, ods-atoms, ods-molecules, ods-organisms, molecules, utilities;
@import "tailwindcss";
@import '@ovhcloud/ods-themes/default/css';
@import '@ovhcloud/ods-themes/default/fonts';
@import './ods-tailwind.css';
`,dark:!0,language:"typescript"}),`
`,e.jsx(o,{label:"Usage Examples",level:2}),`
`,e.jsx(s.p,{children:"You can use Tailwind utilities alongside ODS components:"}),`
`,e.jsx(i,{code:`
import { Button } from '@ovhcloud/ods-react';

function MyComponent() {
  return (
  <div>
      <p className="text-critical">Click on the button!</p>
      <Button className="bg-color-primary">Click me!</Button>
  </div>
  );
}
`,dark:"true",language:"tsx"}),`
`,e.jsx(o,{label:"Best Practices & Troubleshooting",level:2}),`
`,e.jsx(o,{label:"Color Usage",level:3}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:["Use semantic color names (e.g., ",e.jsx(s.code,{children:"ods-primary-500"}),", ",e.jsx(s.code,{children:"ods-success-200"}),") instead of generic colors"]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Issue"}),": Color classes not working? Verify that the Tailwind config includes the ODS color mappings and ensure the content paths include your component files."]}),`
`]}),`
`,e.jsx(o,{label:"Spacing and Layout",level:3}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:["Use ODS border radius tokens (",e.jsx(s.code,{children:"rounded-ods-sm"}),", ",e.jsx(s.code,{children:"rounded-ods-md"}),", etc.)"]}),`
`,e.jsx(s.li,{children:"Leverage ODS form element heights for consistent input sizing"}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Issue"}),": CSS variables not loading? Ensure ",e.jsx(s.code,{children:"@ovhcloud/ods-themes"})," is imported before Tailwind and check that the theme is properly initialized in your app."]}),`
`]}),`
`,e.jsx(o,{label:"Typography",level:3}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:["Use the ODS font family (",e.jsx(s.code,{children:"font-ods"})," for body text, ",e.jsx(s.code,{children:"font-ods-code"})," for code)"]}),`
`,e.jsxs(s.li,{children:["Apply semantic text colors (",e.jsx(s.code,{children:"text-ods-text"}),", ",e.jsx(s.code,{children:"text-ods-heading"}),")"]}),`
`,e.jsx(s.li,{children:"Maintain proper contrast ratios with ODS color combinations"}),`
`]}),`
`,e.jsx(o,{label:"Component Integration",level:3}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:["ODS components can be styled with Tailwind utilities using the ",e.jsx(s.code,{children:"className"})," prop"]}),`
`,e.jsx(s.li,{children:"Avoid overriding core ODS component styles unless necessary"}),`
`,e.jsx(s.li,{children:"Use Tailwind for layout and positioning, ODS for component behavior"}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Issue"}),": Responsive breakpoints not working? Confirm that the ODS breakpoint variables are properly defined and check that the screen configuration in Tailwind config is correct."]}),`
`]}),`
`,e.jsx(o,{label:"Resources",level:2}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[`
`,e.jsx(r,{href:"https://tailwindcss.com/docs",children:"Tailwind CSS Documentation"}),`
`]}),`
`,e.jsxs(s.li,{children:[`
`,e.jsx(r,{href:"https://tailwindcss.com/docs/upgrade-guide",children:"Tailwind v4 Migration Guide"}),`
`]}),`
`,e.jsxs(s.li,{children:[`
`,e.jsx(t,{title:d.getStarted,children:"ODS Get Started Guide"}),`
`]}),`
`,e.jsxs(s.li,{children:[`
`,e.jsx(t,{title:d.designTokens,children:"ODS Design Tokens"}),`
`]}),`
`]})]})}function R(n={}){const{wrapper:s}={...a(),...n.components};return s?e.jsx(s,{...n,children:e.jsx(l,{...n})}):l(n)}export{R as default};
