import{j as e}from"./jsx-runtime-Cfl8ynUo.js";import{useMDXComponents as r}from"./index-ZwkxtaJJ.js";import{M as l}from"./index-DBhu1Uji.js";import{A as a}from"./Anatomy-CqwcYEDe.js";import{B as c}from"./Banner-CTn57inQ.js";import{B as d}from"./BestPractices-DyDReNjg.js";import{C as m}from"./Canvas-8Qs4JaTy.js";import{H as i}from"./Heading-BYU90ura.js";import{I as p}from"./IdentityCard-BK7dxrtI.js";import{T as o,O as h}from"./tile.stories-D33Ymeme.js";import"./index-jIWwRBLr.js";import"./iframe-B0u0SFI5.js";import"./index-CBDu-Hu-.js";import"./index-BU5bNkZt.js";import"./index-DgH-xKnr.js";import"./index-DrFu-skq.js";import"./icon-name-Dw8X1wVO-CGXOlIt0.js";import"./index-B2JRaoNz-yqrnVa7N.js";import"./index-BUs_y8So.js";import"./context-Z_Xa7sWf-5kwUyuQy.js";import"./index-FEhFxDPX.js";import"./lz-string-DchBFh8t.js";import"./meta-twt-Yy4M.js";import"./source-CPEZJ6oD.js";import"./ResetTheme-CLF5P7Bf.js";import"./tokens-BrWUS-3i.js";import"./divider-color-Db-mIl6C-CkLYwequ.js";import"./colors-C1Wmnk_L-aAAP9SXj.js";import"./Table-CVRGubjq-DRuAT4A2.js";import"./ExternalLink-CLruuYCX.js";import"./Link-nyzSghSi-C9HsY39r.js";import"./Table-CddzZ923.js";import"./index-D0iMhJdb.js";import"./index-C322fmIg.js";import"./index-DH_BFchB.js";import"./Text-CzHK83-l.js";import"./use-locale-context-DGdTKe6e.js";import"./index-DsEC0KyJ.js";import"./index-fARmZEET.js";import"./use-field-context-CkVznB2N.js";import"./icon-name-Dvh-h22i.js";import"./use-event-c9j7vq_1.js";import"./index-CRn7h8kA.js";import"./Card-C8VZcWAw.js";import"./colors-B-ZpHcIp.js";import"./context-C_-r2uoG.js";import"./controls-BtiQQn1l.js";function s(t){const n={li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...r(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{of:o,name:"Documentation"}),`
`,e.jsx(c,{of:o}),`
`,e.jsx(m,{of:h,sourceState:"none"}),`
`,e.jsx(i,{label:"Overview",level:2}),`
`,e.jsx(p,{aliases:[],figmaLink:"https://www.figma.com/design/9jDDTcR4a9jPRFcdjawAlf/branch/l7NGsGx2CuieJpqHn4B1zo/ODS---UI-Kit?m=auto&node-id=13588-131&t=z9FF7UzVAAvDXO1U-1",githubUrl:"https://github.com/ovh/design-system/tree/master/packages/ods-react/src/components/tile",name:"Tile",startingVersion:19,children:e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Tile"})," is a selectable ",e.jsx(n.strong,{children:"Card"})," used to present options or content blocks that can be selected by the user."]})}),`
`,e.jsx(i,{label:"Usage",level:2}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Tile"})," is typically used to display a small set of options. Common use cases include:"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"forms"}),`
`,e.jsx(n.li,{children:"surveys"}),`
`,e.jsx(n.li,{children:"preference or configuration screens"}),`
`]}),`
`,e.jsx(i,{label:"Dos & Don'ts",level:3}),`
`,e.jsx(d,{donts:["- Avoid using the Tile component for complex or lengthy content, as it may overwhelm the user","- Do not use the Tile for options that require a high level of detail or explanation; instead, consider using a different component or providing additional context through Tooltips or Popovers","- Refrain from mixing checkbox and radio button in Tiles within the same selection group, as this can cause confusion"],dos:["- Use the Tile component when you need to present a limited number of options to the user, especially when those options require a brief description or additional information","- Use a Tile with a checkbox for multiple selections, and with a radio button for single selections","- Ensure that the content within Tile is concise and relevant to the user's decision-making process"]}),`
`,e.jsx(i,{label:"Best Practices in Context",level:3}),`
`,e.jsx(a,{src:"components/tile/anatomy.png"}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.strong,{children:"Tile"})}),`
`]}),`
`,e.jsx(i,{label:"Placement",level:2}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.strong,{children:"Tile"}),` component can be used in various layouts, including but not limited to, grids, lists, and as standalone elements within a form.
When displaying multiple `,e.jsx(n.strong,{children:"Tiles"}),`, ensure they are evenly spaced and aligned to provide a clear and organized user interface.
Consider responsive behavior so `,e.jsx(n.strong,{children:"Tiles"})," remain usable and readable on smaller screens."]}),`
`,e.jsx(i,{label:"Behavior",level:2}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Tile"})," component can be selected and disabled."]}),`
`,e.jsxs(n.p,{children:["When selected, ",e.jsx(n.strong,{children:"Tile"})," displays a clear visual indication of its selected state."]}),`
`,e.jsxs(n.p,{children:["When disabled, ",e.jsx(n.strong,{children:"Tile"})," does not respond to user interaction and cannot be selected. All content inside the ",e.jsx(n.strong,{children:"Tile"})," is visually and functionally disabled."]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Tile"})," can contain any type of content, including interactive elements."]}),`
`,e.jsx(i,{label:"Navigation",level:3}),`
`,e.jsx(i,{label:"Focus Management",level:4}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Tile"})," follows standard keyboard navigation patterns defined by its usage context."]}),`
`,e.jsx(i,{label:"Accessibility",level:2}),`
`,e.jsxs(n.p,{children:["Interactive elements inside ",e.jsx(n.strong,{children:"Tile"})," must follow a logical tab order. Inner interactive content must remain accessible to assistive technologies, without interfering with the ",e.jsx(n.strong,{children:"Tile"})," selection state."]})]})}function le(t={}){const{wrapper:n}={...r(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(s,{...t})}):s(t)}export{le as default};
