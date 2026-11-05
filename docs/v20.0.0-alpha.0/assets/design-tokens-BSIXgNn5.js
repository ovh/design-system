import{i as e}from"./rolldown-runtime-Dd_uD5pT.js";import{t}from"./jsx-runtime-DREnUpxT.js";import{T as n}from"./index-CdRG7ZE_.js";var r=e(t());function i(e){let t={code:`code`,em:`em`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components},{DesignTokens:i,Heading:a}=t;return i||o(`DesignTokens`,!0),a||o(`Heading`,!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.p,{children:`Design tokens define reusable design values such as colors, borders, and outlines as variables. Instead of using hardcoded values, they provide a consistent, scalable, and maintainable way to style components across all products.`}),`
`,(0,r.jsx)(a,{label:`Usage`,level:2}),`
`,(0,r.jsx)(t.p,{children:`Design tokens are available as CSS custom properties (variables) and can be used in your CSS files:`}),`
`,(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:`language-css`,children:`.my-component {
  color: var(--ods-semantic-color-content-brand);
  border-radius: var(--ods-semantic-size-radius-control);
}
`})}),`
`,(0,r.jsx)(a,{label:`Token types`,level:2}),`
`,(0,r.jsxs)(t.p,{children:[`Two types of tokens are meant to be used in your code (the `,(0,r.jsx)(t.code,{children:`--ods-palette-*`}),` ramps are the input of a theme, see below):`]}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:`Semantic`}),`, `,(0,r.jsx)(t.code,{children:`--ods-semantic-<category>-<role>`}),` (e.g. `,(0,r.jsx)(t.code,{children:`--ods-semantic-color-content-text`}),`): values with a role, to style your own components and pages.`]}),`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:`Component`}),`, `,(0,r.jsx)(t.code,{children:`--ods-<component>-<property>`}),` (e.g. `,(0,r.jsx)(t.code,{children:`--ods-button-background-color-brand-high`}),`): values of a single ODS component, to customize it.`]}),`
`]}),`
`,(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:`Semantic`}),` tokens give a role to a value: the color of a text, of a surface, of a border, the radius of a control, the duration of an animation…
Their name reads from the most generic to the most specific part, for example `,(0,r.jsx)(t.code,{children:`--ods-semantic-color-surface-selected-solid`}),` is a `,(0,r.jsx)(t.code,{children:`color`}),`, used as a `,(0,r.jsx)(t.code,{children:`surface`}),`, for a `,(0,r.jsx)(t.code,{children:`selected`}),` element, in its `,(0,r.jsx)(t.code,{children:`solid`}),` variant, the strongest of `,(0,r.jsx)(t.code,{children:`-subtle`}),`, the unsuffixed one and `,(0,r.jsx)(t.code,{children:`-solid`}),`.
The text on it reads `,(0,r.jsx)(t.code,{children:`--ods-semantic-color-content-on-selected-solid`}),`, while `,(0,r.jsx)(t.code,{children:`--ods-semantic-color-content-on-selected`}),` is the ink for the tinted ones.`]}),`
`,(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:`Component`}),` tokens are declared by each component and default to semantic tokens.
Override them to adjust one component without affecting the others: each component lists its own in the `,(0,r.jsx)(t.em,{children:`CSS Variables`}),` section of its `,(0,r.jsx)(t.em,{children:`Technical information`}),` tab.`]}),`
`,(0,r.jsx)(a,{label:`Which type should I use?`,level:2}),`
`,(0,r.jsxs)(t.p,{children:[`Prefer `,(0,r.jsx)(t.strong,{children:`semantic`}),` tokens in your application: they follow the theme, so your components stay consistent with ODS ones when the theme changes.`]}),`
`,(0,r.jsxs)(t.p,{children:[`Use `,(0,r.jsx)(t.strong,{children:`component`}),` tokens only to customize an ODS component; never read them to style something else, as their value may change from one version to another.`]}),`
`,(0,r.jsx)(a,{label:`What is guaranteed`,level:2}),`
`,(0,r.jsxs)(t.p,{children:[`The `,(0,r.jsx)(t.code,{children:`--ods-semantic-*`}),` tokens are the public surface of the theme: read them in your CSS, re-declare them in a theme. Their names and their meaning do not change during a major version; their values belong to the theme. The `,(0,r.jsx)(t.code,{children:`--ods-palette-*`}),` ramps are public too, as the input of a theme: a brand re-declares the `,(0,r.jsx)(t.code,{children:`--ods-palette-brand-*`}),` and `,(0,r.jsx)(t.code,{children:`--ods-palette-accent-*`}),` ramps. The tables below list every token of the default theme.`]}),`
`,(0,r.jsx)(i,{})]})}function a(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(i,{...e})}):i(e)}function o(e,t){throw Error(`Expected `+(t?`component`:`object`)+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}export{a as default};