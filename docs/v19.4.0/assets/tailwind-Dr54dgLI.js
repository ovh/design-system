import{j as e}from"./jsx-runtime-Cfl8ynUo.js";import{useMDXComponents as a}from"./index-ZwkxtaJJ.js";import{l as c}from"./ods-react64-C395g5lW.js";import{h,R as u,O as m}from"./MessageIcon-B8PtkLmq-D5-c3sRc.js";import{M as p,S as i}from"./index-BsyKfokc.js";import{E as r}from"./ExternalLink-C9tV86xX.js";import{H as s}from"./Heading-Wb_br1IW.js";import{S as t}from"./StorybookLink-f599aIOt.js";import{H as d}from"./meta-DxXVpXmq.js";import"./index-jIWwRBLr.js";import"./index-CWkFp9WS-BSIT86NH.js";import"./useI18n-Dq1Z6_TT-D_3qtvJW.js";import"./ods-react257-aAAP9SXj.js";import"./ods-react101-l5fgq-IX.js";import"./iframe-B_YeBgB7.js";import"./index-DWDEzXrj.js";import"./index-N93khynk.js";import"./index-CXQShRbs.js";import"./index-DrFu-skq.js";import"./Link-BhqYqKFa-BDwROQOD.js";import"./Divider-DmVNyNnn-DCNXheUh.js";import"./index-DZ9YAGlW.js";function l(n){const o={code:"code",li:"li",p:"p",strong:"strong",ul:"ul",...a(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(p,{title:"OVHcloud Design System/Design and Style/Tailwind CSS Integration"}),`
`,e.jsx(s,{label:"Tailwind CSS Integration",level:1}),`
`,e.jsx(o.p,{children:"This guide covers how to integrate Tailwind CSS with the OVHcloud Design System (ODS) for both v3 and v4 versions."}),`
`,e.jsx(o.p,{children:"Tailwind CSS is a utility-first CSS framework that can be integrated with ODS components and design tokens, but it is not mandatory as ODS is not based on Tailwind."}),`
`,e.jsxs(h,{dismissible:!1,children:[e.jsx(u,{name:c.circleInfo}),e.jsx(m,{children:e.jsx(o.p,{children:`Technically, you don't need any configuration to make ODS work with Tailwind.
These guides are here to add some auto-completion and best practices when using Tailwind,
but you can directly use the design tokens right out of the box without any additional configuration.`})})]}),`
`,e.jsx(s,{label:"Tailwind CSS v3 Configuration",level:2}),`
`,e.jsxs(o.p,{children:["For Tailwind CSS v3, create a ",e.jsx(o.code,{children:"tailwind.config.js"})," which contains a remapping of ODS variables:"]}),`
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
`,e.jsx(s,{label:"Integration with IDEs",level:3}),`
`,e.jsx(s,{label:"Integration with JetBrains",level:4}),`
`,e.jsx(o.p,{children:"This should work straight out of the box."}),`
`,e.jsx(s,{label:"Integration with VSCode",level:4}),`
`,e.jsxs(o.p,{children:["Create a ",e.jsx(o.code,{children:"./.vscode/tailwind.json"})," containing the classes you want to expose for autocompletion."]}),`
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
`,e.jsx(s,{label:"Tailwind CSS v4 Configuration",level:2}),`
`,e.jsxs(o.p,{children:["For Tailwind CSS v4, create a CSS file using the ",e.jsx(r,{href:"https://tailwindcss.com/docs/adding-custom-styles",children:"@theme"})," property:"]}),`
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
`,e.jsx(o.p,{children:`Then import that file after the main ODS theme and Tailwind CSS.
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
`,e.jsx(s,{label:"Usage Examples",level:2}),`
`,e.jsx(o.p,{children:"You can use Tailwind utilities alongside ODS components:"}),`
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
`,e.jsx(s,{label:"Best Practices & Troubleshooting",level:2}),`
`,e.jsx(s,{label:"Color Usage",level:3}),`
`,e.jsxs(o.ul,{children:[`
`,e.jsxs(o.li,{children:["Use semantic color names (e.g., ",e.jsx(o.code,{children:"ods-primary-500"}),", ",e.jsx(o.code,{children:"ods-success-200"}),") instead of generic colors"]}),`
`,e.jsxs(o.li,{children:[e.jsx(o.strong,{children:"Issue"}),": Color classes not working? Verify that the Tailwind config includes the ODS color mappings and ensure the content paths include your component files."]}),`
`]}),`
`,e.jsx(s,{label:"Spacing and Layout",level:3}),`
`,e.jsxs(o.ul,{children:[`
`,e.jsxs(o.li,{children:["Use ODS border radius tokens (",e.jsx(o.code,{children:"rounded-ods-sm"}),", ",e.jsx(o.code,{children:"rounded-ods-md"}),", etc.)"]}),`
`,e.jsx(o.li,{children:"Leverage ODS form element heights for consistent input sizing"}),`
`,e.jsxs(o.li,{children:[e.jsx(o.strong,{children:"Issue"}),": CSS variables not loading? Ensure ",e.jsx(o.code,{children:"@ovhcloud/ods-themes"})," is imported before Tailwind and check that the theme is properly initialized in your app."]}),`
`]}),`
`,e.jsx(s,{label:"Typography",level:3}),`
`,e.jsxs(o.ul,{children:[`
`,e.jsxs(o.li,{children:["Use the ODS font family (",e.jsx(o.code,{children:"font-ods"})," for body text, ",e.jsx(o.code,{children:"font-ods-code"})," for code)"]}),`
`,e.jsxs(o.li,{children:["Apply semantic text colors (",e.jsx(o.code,{children:"text-ods-text"}),", ",e.jsx(o.code,{children:"text-ods-heading"}),")"]}),`
`,e.jsx(o.li,{children:"Maintain proper contrast ratios with ODS color combinations"}),`
`]}),`
`,e.jsx(s,{label:"Component Integration",level:3}),`
`,e.jsxs(o.ul,{children:[`
`,e.jsxs(o.li,{children:["ODS components can be styled with Tailwind utilities using the ",e.jsx(o.code,{children:"className"})," prop"]}),`
`,e.jsx(o.li,{children:"Avoid overriding core ODS component styles unless necessary"}),`
`,e.jsx(o.li,{children:"Use Tailwind for layout and positioning, ODS for component behavior"}),`
`,e.jsxs(o.li,{children:[e.jsx(o.strong,{children:"Issue"}),": Responsive breakpoints not working? Confirm that the ODS breakpoint variables are properly defined and check that the screen configuration in Tailwind config is correct."]}),`
`]}),`
`,e.jsx(s,{label:"Resources",level:2}),`
`,e.jsxs(o.ul,{children:[`
`,e.jsxs(o.li,{children:[`
`,e.jsx(r,{href:"https://tailwindcss.com/docs",children:"Tailwind CSS Documentation"}),`
`]}),`
`,e.jsxs(o.li,{children:[`
`,e.jsx(r,{href:"https://tailwindcss.com/docs/upgrade-guide",children:"Tailwind v4 Migration Guide"}),`
`]}),`
`,e.jsxs(o.li,{children:[`
`,e.jsx(t,{title:d.getStarted,children:"ODS Get Started Guide"}),`
`]}),`
`,e.jsxs(o.li,{children:[`
`,e.jsx(t,{title:d.designTokens,children:"ODS Design Tokens"}),`
`]}),`
`]})]})}function F(n={}){const{wrapper:o}={...a(),...n.components};return o?e.jsx(o,{...n,children:e.jsx(l,{...n})}):l(n)}export{F as default};
