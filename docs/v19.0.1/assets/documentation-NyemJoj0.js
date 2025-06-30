import{j as e}from"./jsx-runtime-VM66peLj.js";import{useMDXComponents as l}from"./index-DQB45XCM.js";import{a as i,o as a}from"./ods-react60-Yebt9vXY.js";import{M as d,C as t}from"./index-D1K7mLD0.js";import{I as r,O as h,A as m,a as p}from"./icon.stories-C_K78Rxn.js";import{B as u}from"./Banner-B4K6Zb-5.js";import{I as x,A as f,B as b}from"./IdentityCard-Yo1l2iFh.js";import{H as s}from"./Heading-mtuBTkOf.js";import{S as j}from"./StorybookLink-DMr2bWgk.js";import{S as g,R as v}from"./meta-Ci0gAceS.js";import"./index-D_CmzhJ4.js";import"./index-2w0W-O47-BJ19ihbZ.js";import"./iframe-DbJ8Lucp.js";import"./index-ChzAxGiP.js";import"./index-CucsY3YN.js";import"./index-CXQShRbs.js";import"./index-DrFu-skq.js";import"./icon-name-BOrBmUKT.js";import"./index-CkQHsVsO.js";import"./controls-BtiQQn1l.js";import"./ExternalLink-DJ00RbPw.js";import"./Link-D8k51sak-CbRDKo-E.js";import"./ods-react214-B9lkGKUh.js";function c(o){const n={code:"code",em:"em",p:"p",strong:"strong",...l(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(d,{of:r,name:"Documentation"}),`
`,e.jsx(u,{of:r}),`
`,e.jsx(n.p,{children:e.jsxs(n.em,{children:[e.jsx(n.strong,{children:"Icon"})," is a visual context used to represent a command, navigation, status or common action."]})}),`
`,e.jsx(t,{of:h,sourceState:"none"}),`
`,e.jsx(s,{label:"Overview",level:2}),`
`,e.jsxs(x,{aliases:["Symbol"],atomicType:f.quark,figmaLink:"https://www.figma.com/design/9jDDTcR4a9jPRFcdjawAlf/ODS---UI-Kit?node-id=26-20213",githubUrl:"https://github.com/ovh/design-system/tree/master/packages/ods/src/components/icon",name:"Icon",children:[e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Icon"})," is a visual symbol which provides visual context thanks to its clarity and consistency."]}),e.jsx(n.p,{children:"It is displayed as solid, in a single color."})]}),`
`,e.jsx(s,{label:"Usage",level:2}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Icons"})," enhance the usability and bring clarity to users by reducing the cognitive load."]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Icons"})," can be used in standalone Button and can be usually associated with some sort of action."]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Icons"})," can be used as navigational elements as well."]}),`
`,e.jsx(s,{label:"Dos & Don'ts",level:3}),`
`,e.jsx(b,{donts:["- Don't use the same Icon for different meanings. It can confuse users and reduce semantic clarity","- Don't use similar shades for both the Icon and background, this can reduce visibility","- Don't baseline-align Icon when next to text, it disrupts alignment and flow","- Don't use different colors for the Icon and the adjacent text when they represent the same concept","- Don't rely on Icon without supporting text for critical actions or information"],dos:["- Ensure sufficient contrast between the Icon color and its background for accessibility compliance","- Center-align Icon vertically when placed next to text to maintain visual balance","- Use the same color for the Icon and the adjacent text when they are paired for a unified appearance","- Use Icon to support meaning, such as reinforcing an action or clarifying status","- Ensure consistent sizing and spacing across the interface for visual harmony"]}),`
`,e.jsx(s,{label:"Placement",level:2}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Icons"})," draw attention to important information or action, so it has to be thoughtfully inserted in a page."]}),`
`,e.jsx(n.p,{children:"They can also help with the understanding of specific elements by providing a visual example."}),`
`,e.jsx(n.p,{children:"They also can be used in other components where it is adapted for a specific purpose."}),`
`,e.jsx(s,{label:"Behavior",level:2}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Icons"})," can stand alone or be included in a button or other components depending on the usage."]}),`
`,e.jsx(s,{label:"Navigation",level:2}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.strong,{children:"Icon"})," component is non-interactive and does not receive keyboard focus when used alone. It is purely decorative unless included in an interactive component (e.g., a button, a link, or a breadcrumb)."]}),`
`,e.jsx(n.p,{children:"When used within an interactive component, refer to that component's documentation for keyboard navigation details."}),`
`,e.jsx(s,{label:"Accessibility",level:2}),`
`,e.jsx(n.p,{children:`The accessibility of the Icon component must be considered during its implementation.
Proper attributes should be used to ensure that icons are either perceivable by assistive technologies or correctly hidden when decorative.`}),`
`,e.jsx(s,{label:"Best practices",level:3}),`
`,e.jsx(s,{label:"Hiding decorative Icon",level:4}),`
`,e.jsxs(n.p,{children:["When the Icon is purely decorative and does not provide meaningful information to the user, it should be hidden from screen readers using ",e.jsx(n.code,{children:'aria-hidden="true"'}),"."]}),`
`,e.jsx(n.p,{children:"Example of a decorative Icon:"}),`
`,e.jsx(t,{of:m,sourceState:"shown"}),`
`,e.jsxs(n.p,{children:[e.jsx(i,{"aria-hidden":"true",name:a.circleCheck,style:{color:"var(--ods-color-success-500)"}})," The Icon is ignored by screen readers and does not create unnecessary noise."]}),`
`,e.jsx(s,{label:"Providing meaningful information",level:4}),`
`,e.jsxs(n.p,{children:["If the Icon conveys essential information, it must be accompanied by an accessible label using ",e.jsx(n.code,{children:"aria-label"}),"."]}),`
`,e.jsx(n.p,{children:"Example of an icon with accessible label:"}),`
`,e.jsx(t,{of:p,sourceState:"shown"}),`
`,e.jsxs(n.p,{children:[e.jsx(i,{"aria-hidden":"true",name:a.circleCheck,style:{color:"var(--ods-color-success-500)"}}),` Screen readers will announce "home", ensuring users understand the Icon's meaning.`]}),`
`,e.jsxs(n.p,{children:["If the Icon is inside a button, prefer using ",e.jsx(n.code,{children:"aria-label"}),` on the button itself rather than on the icon.
See `,e.jsx(j,{kind:v.button,story:g.documentation,children:"Button"})," examples."]}),`
`,e.jsx(s,{label:"Final check (for your specific implementation)",level:3}),`
`,e.jsx(s,{label:"Keyboard navigation tests",level:4}),`
`,e.jsx(n.p,{children:"Ensure that if the icon is interactive (e.g., triggers a tooltip), it is focusable and usable with a keyboard."})]})}function W(o={}){const{wrapper:n}={...l(),...o.components};return n?e.jsx(n,{...o,children:e.jsx(c,{...o})}):c(o)}export{W as default};
