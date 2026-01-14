import{j as e}from"./jsx-runtime-Cfl8ynUo.js";import{useMDXComponents as r}from"./index-ZwkxtaJJ.js";import{M as a}from"./index-C3P7rize.js";import{E as l}from"./ExternalLink-C9tV86xX.js";import{H as c}from"./Heading-DAsItneX.js";import{S as n}from"./StorybookLink-CUnNm_lF.js";import{H as i}from"./meta-DxXVpXmq.js";import"./index-jIWwRBLr.js";import"./iframe-B-1i39SD.js";import"./index-DWDEzXrj.js";import"./index-N93khynk.js";import"./index-CXQShRbs.js";import"./index-DrFu-skq.js";import"./ods-react64-C395g5lW.js";import"./index-CWkFp9WS-BSIT86NH.js";import"./Link-BhqYqKFa-BDwROQOD.js";import"./Divider-DmVNyNnn-DCNXheUh.js";import"./index-lGh5KcWi.js";function s(o){const t={code:"code",li:"li",p:"p",ul:"ul",...r(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{title:"OVHcloud Design System/What's new?/Migration guide/to 19.x"}),`
`,e.jsx(c,{label:"Migrate to v19",level:1}),`
`,e.jsxs(t.p,{children:["Version 19 of ODS is not the direct follow-up of previous versions, it is a new library built 100% on top of ",e.jsx(l,{href:"https://react.dev",children:"React"}),"."]}),`
`,e.jsx(t.p,{children:`Previous versions were providing a React version of each components too, but there were in fact a wrapping of the Web Component.
Thus it was designed with the constraints related to Web Component (no virtual DOM, relying on DOM selector, ...).`}),`
`,e.jsx(t.p,{children:"With this new version we got rid of those constraints, which gave us some benefits like:"}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsx(t.li,{children:"component composition."}),`
`,e.jsx(t.li,{children:"easier style customization."}),`
`,e.jsxs(t.li,{children:["easier React integration (no more ",e.jsx(t.code,{children:"ref"})," needed, nor literal templates)."]}),`
`]}),`
`,e.jsx(t.p,{children:"We've also alleviate a lot of previous component restrictions, as most of them now accept React nodes instead of fixed property."}),`
`,e.jsx(t.p,{children:"For example, Button will now accept any node (text, text + icon, triple icon, ...) and won't force you to set only a label and an optional icon."}),`
`,e.jsxs(t.p,{children:[`Moving out of Web Component also means getting rid of the Shadow DOM.
This means you now have direct access to the component DOM and it's easier to add you own style.
Though this also means it is easier to break the component rendering, and some custom selectors may break from version to version
(see `,e.jsx(n,{title:i.styleCustomization,children:"style customization documentation"})," to know more)."]}),`
`,e.jsx(t.p,{children:`Regarding components, we tried to stay as close as possible to their previous interface while keeping them easy to integrate.
Though, the way you'll integrate them in your React app should be rethought, to ensure you use them as real React components
and not wrapped Web Components anymore.`}),`
`,e.jsxs(t.p,{children:["To check how to start with this new version, please follow the ",e.jsx(n,{title:i.getStarted,children:"Get Started"})," documentation."]})]})}function O(o={}){const{wrapper:t}={...r(),...o.components};return t?e.jsx(t,{...o,children:e.jsx(s,{...o})}):s(o)}export{O as default};
