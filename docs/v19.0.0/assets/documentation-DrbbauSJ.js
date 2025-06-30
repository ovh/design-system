import{j as e}from"./jsx-runtime-VM66peLj.js";import{useMDXComponents as o}from"./index-DQB45XCM.js";import{M as r,C as c}from"./index-CTRIvuAa.js";import{T as i,O as l}from"./text.stories-kAoTXj5A.js";import{B as d}from"./Banner-DKEGGZmZ.js";import{I as p,A as h,B as m}from"./IdentityCard-DMALWF_P.js";import{H as n}from"./Heading-BKRI_kjA.js";import"./index-D_CmzhJ4.js";import"./iframe-B1k00A9N.js";import"./index-ChzAxGiP.js";import"./index-CucsY3YN.js";import"./index-CXQShRbs.js";import"./index-DrFu-skq.js";import"./Text-KX3Hvvn9.js";import"./index-CkQHsVsO.js";import"./controls-BtiQQn1l.js";import"./ExternalLink-DJ00RbPw.js";import"./ods-react60-Yebt9vXY.js";import"./index-2w0W-O47-BJ19ihbZ.js";import"./Link-D8k51sak-CbRDKo-E.js";import"./ods-react214-B9lkGKUh.js";function a(s){const t={em:"em",p:"p",strong:"strong",...o(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{of:i,name:"Documentation"}),`
`,e.jsx(d,{of:i}),`
`,e.jsx(t.p,{children:e.jsxs(t.em,{children:["The ",e.jsx(t.strong,{children:"Text"})," component is used to display and style text content within an application."]})}),`
`,e.jsx(c,{of:l,sourceState:"none"}),`
`,e.jsx(n,{label:"Overview",level:2}),`
`,e.jsxs(p,{aliases:["Paragraph"],atomicType:h.quark,figmaLink:"https://www.figma.com/design/9jDDTcR4a9jPRFcdjawAlf/ODS---UI-Kit?node-id=172-12061",githubUrl:"https://github.com/ovh/design-system/tree/master/packages/ods/src/components/text",name:"Text",children:[e.jsxs(t.p,{children:["The ",e.jsx(t.strong,{children:"Text"})," component is a fundamental UI element for displaying text content."]}),e.jsx(t.p,{children:`It supports various presets of styles, sizes, and weights to cater to different textual content requirements such as
paragraphs, headings, and inline text.`}),e.jsx(t.p,{children:"The component can be extra customized to fit the design and branding needs of the application."})]}),`
`,e.jsx(n,{label:"Usage",level:2}),`
`,e.jsxs(t.p,{children:["The ",e.jsx(t.strong,{children:"Text"})," component provides predefined text styles (font size, color, weight, etc.) to ensure visual consistency across the application."]}),`
`,e.jsx(t.p,{children:"It is ideal when you want to apply a ready-made text style from the OVHcloud Design System without manually setting typography values."}),`
`,e.jsx(t.p,{children:"It is not meant for custom typography needs like overriding styles to match a specific heading or layout."}),`
`,e.jsx(t.p,{children:"If the available presets don't fit your use case, use the appropriate semantic HTML tag with your own styling instead."}),`
`,e.jsx(n,{label:"Dos & Don'ts",level:3}),`
`,e.jsx(m,{donts:["- Don't skip heading levels (e.g., using heading-3 directly after heading-1), this harms accessibility and user comprehension","- Don't override the semantic tag of a preset (e.g., using heading-2 styled as a div)","- Don't use Text components just to apply a visual style, consider whether semantic meaning is appropriate","- Don't use too many different font sizes and weights on a single view, it creates visual noise and weakens the hierarchy"],dos:["- Use Text presets to ensure visual and semantic consistency across your UI","- Respect a logical heading hierarchy (e.g., h2 follows h1, etc.) for accessibility and SEO","- Use Text component to convey meaning and structure, not only appearance","- Choose the appropriate preset for readability and emphasis, depending on the context","- Ensure sufficient color contrast between text and background for readability and accessibility"]}),`
`,e.jsx(n,{label:"Placement",level:2}),`
`,e.jsxs(t.p,{children:[e.jsx(t.strong,{children:"Text"})," can be used everywhere in a page as long as levels and heading hierarchy are respected."]}),`
`,e.jsx(t.p,{children:"It can stand alone or be included in other components depending on the usage."}),`
`,e.jsx(n,{label:"Behavior",level:2}),`
`,e.jsxs(t.p,{children:["Based on its informational manner, the ",e.jsx(t.strong,{children:"Text"})," default behavior is being read-only."]}),`
`,e.jsx(t.p,{children:"The user can only select its content if needed."}),`
`,e.jsx(n,{label:"Navigation",level:2}),`
`,e.jsxs(t.p,{children:["The ",e.jsx(t.strong,{children:"Text"})," component is non-interactive and does not receive keyboard focus. It is purely visual and serves to display textual content without affecting keyboard navigation."]}),`
`,e.jsx(n,{label:"Accessibility",level:2}),`
`,e.jsxs(t.p,{children:[e.jsx(t.strong,{children:"Text"})," content is readable by screen readers."]})]})}function A(s={}){const{wrapper:t}={...o(),...s.components};return t?e.jsx(t,{...s,children:e.jsx(a,{...s})}):a(s)}export{A as default};
