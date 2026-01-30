import{j as e}from"./jsx-runtime-Cfl8ynUo.js";import{useMDXComponents as r}from"./index-ZwkxtaJJ.js";import{M as l}from"./index-Cw5r0Kn8.js";import{A as a}from"./Anatomy-DkXJCwiR.js";import{B as c}from"./Banner-X7WOeBPc.js";import{I as d,B as m}from"./IdentityCard-D9LjZbLA.js";import{C as p}from"./Canvas-i2Tfjesg.js";import{H as i}from"./Heading-Dep_rTif.js";import{T as s,O as h}from"./tile.stories-VfzqVRxG.js";import"./index-jIWwRBLr.js";import"./iframe-DCzti3mm.js";import"./index-DWDEzXrj.js";import"./index-N93khynk.js";import"./index-CXQShRbs.js";import"./index-DrFu-skq.js";import"./Table-D8Me597i-NC3k9YIT.js";import"./index-CWkFp9WS-BSIT86NH.js";import"./ExternalLink-C5hGBmwh.js";import"./ods-react67-C395g5lW.js";import"./Link-TMoA1i18-BDwROQOD.js";import"./Table-5ah53JFf.js";import"./TooltipTrigger-C3aN0eJB-DwV7p8FS.js";import"./ods-react121-5kwUyuQy.js";import"./index-CSeLFT3z.js";import"./lz-string-U2heoObX.js";import"./meta-DcQbZjt_.js";import"./source-CPEZJ6oD.js";import"./ResetTheme-xqxcB8cs.js";import"./tokens-BtVMeYnn.js";import"./Divider-wQyo85oE-CpSK6tnQ.js";import"./CheckboxLabel-D12B56tG.js";import"./index-CqY9YpN0.js";import"./FormFieldLabelSubLabel-DCAb65DU.js";import"./Text-CW33_IfE.js";import"./use-locale-context-kHyebpMI.js";import"./use-field-context-CnH3sryd.js";import"./icon-name-BpdEc4-2.js";import"./index-BlUhyWms.js";import"./use-event-c9j7vq_1.js";import"./RadioLabel-eoh0KbCP.js";import"./Card-pBUOkgnJ.js";import"./colors-DSObuHxd.js";import"./context-C_-r2uoG.js";import"./controls-BtiQQn1l.js";function o(t){const n={li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...r(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{of:s,name:"Documentation",tags:["new"]}),`
`,e.jsx(c,{of:s}),`
`,e.jsx(p,{of:h,sourceState:"none"}),`
`,e.jsx(i,{label:"Overview",level:2}),`
`,e.jsx(d,{aliases:[],figmaLink:"https://www.figma.com/design/9jDDTcR4a9jPRFcdjawAlf/branch/l7NGsGx2CuieJpqHn4B1zo/ODS---UI-Kit?m=auto&node-id=13588-131&t=z9FF7UzVAAvDXO1U-1",githubUrl:"https://github.com/ovh/design-system/tree/master/packages/ods-react/src/components/tile",name:"Tile",startingVersion:19,children:e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Tile"})," is a selectable ",e.jsx(n.strong,{children:"Card"})," used to present options or content blocks that can be selected by the user."]})}),`
`,e.jsx(i,{label:"Usage",level:2}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Tile"})," is typically used to display a small set of options. Common use cases include:"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"forms"}),`
`,e.jsx(n.li,{children:"surveys"}),`
`,e.jsx(n.li,{children:"preference or configuration screens"}),`
`]}),`
`,e.jsx(i,{label:"Dos & Don'ts",level:3}),`
`,e.jsx(m,{donts:["- Avoid using the Tile component for complex or lengthy content, as it may overwhelm the user","- Do not use the Tile for options that require a high level of detail or explanation; instead, consider using a different component or providing additional context through Tooltips or Popovers","- Refrain from mixing checkbox and radio button in Tiles within the same selection group, as this can cause confusion"],dos:["- Use the Tile component when you need to present a limited number of options to the user, especially when those options require a brief description or additional information","- Use a Tile with a checkbox for multiple selections, and with a radio button for single selections","- Ensure that the content within Tile is concise and relevant to the user's decision-making process"]}),`
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
`,e.jsxs(n.p,{children:["Interactive elements inside ",e.jsx(n.strong,{children:"Tile"})," must follow a logical tab order. Inner interactive content must remain accessible to assistive technologies, without interfering with the ",e.jsx(n.strong,{children:"Tile"})," selection state."]})]})}function se(t={}){const{wrapper:n}={...r(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(o,{...t})}):o(t)}export{se as default};
