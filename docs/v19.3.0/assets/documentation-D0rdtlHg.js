import{j as e}from"./jsx-runtime-Cfl8ynUo.js";import{useMDXComponents as h}from"./index-ZwkxtaJJ.js";import{t as i,l as r}from"./ods-react60-DssFCbzP.js";import{M as d}from"./index-9orhCFJa.js";import{T as l,O as g,A as m,a as p}from"./toggle.stories-DowYIxBp.js";import{A as x}from"./Anatomy-DkXJCwiR.js";import{B as u}from"./Banner-DiJ2utjo.js";import{I as j,B as f}from"./IdentityCard-0vzhW5ZM.js";import{C as o}from"./Canvas-CreDMEws.js";import{E as a}from"./ExternalLink-C0Msq_QQ.js";import{H as n}from"./Heading-eINcjqM4.js";import"./index-jIWwRBLr.js";import"./index-CWkFp9WS-BSIT86NH.js";import"./iframe-BRevKSH1.js";import"./index-DWDEzXrj.js";import"./index-N93khynk.js";import"./index-CXQShRbs.js";import"./index-DrFu-skq.js";import"./FormFieldLabel-B8-lDkmb.js";import"./index-CqY9YpN0.js";import"./Text-DyiJ5nHV.js";import"./use-locale-context-6s5qsrWI.js";import"./use-field-context-BOfmBRZb.js";import"./index-Dp00x3gb.js";import"./controls-BtiQQn1l.js";import"./Table-BvR76ybm-DzE94PQp.js";import"./Table-u83oGl00.js";import"./TooltipTrigger-CizyLvLy-D53hI2Ct.js";import"./index-blQ1D1fB.js";import"./lz-string-U2heoObX.js";import"./meta-t9Q7ez2Q.js";import"./source-CPEZJ6oD.js";import"./ResetTheme-BVzaMHe3.js";import"./tokens-VHDJ0kGa.js";import"./Link-CIjoG_UN-BDwROQOD.js";function c(t){const s={code:"code",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...h(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(d,{of:l,name:"Documentation"}),`
`,e.jsx(u,{of:l}),`
`,e.jsx(o,{of:g,sourceState:"none"}),`
`,e.jsx(n,{label:"Overview",level:2}),`
`,e.jsxs(j,{aliases:["Toggle Switch","Switch"],figmaLink:"https://www.figma.com/design/9jDDTcR4a9jPRFcdjawAlf/ODS---UI-Kit?node-id=53-15319",githubUrl:"https://github.com/ovh/design-system/tree/master/packages/ods-react/src/components/toggle",name:"Toggle",children:[e.jsxs(s.p,{children:["The ",e.jsx(s.strong,{children:"Toggle"})," component is used to enable or disable a state, setting or feature."]}),e.jsx(s.p,{children:`It provides a clear visual indication of the current state and allows users to change states with a single click or
tap.`}),e.jsxs(s.p,{children:[e.jsx(s.strong,{children:"Toggles"})," are commonly used in settings, preferences, and forms where a binary choice is required."]})]}),`
`,e.jsx(n,{label:"Usage",level:2}),`
`,e.jsxs(s.p,{children:["A ",e.jsx(s.strong,{children:"Toggle"})," is commonly used for binary choice."]}),`
`,e.jsx(s.p,{children:"The user can decide to switch between two states with an immediate effect visible at a glance."}),`
`,e.jsx(s.p,{children:"It can be used in following use cases when you need to allow the user to:"}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsx(s.li,{children:"turn an option or settings on or off"}),`
`,e.jsx(s.li,{children:"add or remove an item or an option"}),`
`]}),`
`,e.jsxs(s.p,{children:["A ",e.jsx(s.strong,{children:"Toggle"})," should never require users to press a button to apply their settings (if a setting requires a button, use a checkbox instead)."]}),`
`,e.jsx(n,{label:"Dos & Don'ts",level:3}),`
`,e.jsx(f,{donts:["- Don't use a Toggle for changes that only take effect after form submission. Use a Checkbox instead","- Don't use ambiguous or overly long labels","- Don't use Toggle for multi-state or complex options since it is meant for binary (on/off) interactions only"],dos:["- Use a Toggle to switch between two states when the change has an immediate effect (e.g., turning a setting on or off)",'- Ensure the Toggle label clearly describes the "on" state, so users understand what enabling it will do',"- Place any related elements (e.g., changes triggered by the Toggle) close to the Toggle to reinforce the connection visually","- Use Toggle in mobile-friendly settings where quick, touch-based interactions are expected","- Use Toggle in forms only when the change takes effect immediately and does not require submission to apply"]}),`
`,e.jsx(n,{label:"Best Practices in Context",level:3}),`
`,e.jsx(x,{src:"components/toggle/anatomy.png"}),`
`,e.jsxs(s.ol,{children:[`
`,e.jsx(s.li,{children:e.jsx(s.strong,{children:"Toggle"})}),`
`,e.jsx(s.li,{children:e.jsx(s.strong,{children:"Handle"})}),`
`,e.jsx(s.li,{children:e.jsx(s.strong,{children:"Track"})}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"State label"})," - optional"]}),`
`]}),`
`,e.jsx(n,{label:"Placement",level:2}),`
`,e.jsxs(s.p,{children:["Place the ",e.jsx(s.strong,{children:"Toggle"})," component near the setting or feature it controls."]}),`
`,e.jsx(s.p,{children:"It should be positioned within forms, settings panels, or any relevant context where a binary choice is required."}),`
`,e.jsx(s.p,{children:"Ensure it is easily accessible and visible."}),`
`,e.jsx(n,{label:"Behavior",level:2}),`
`,e.jsxs(s.p,{children:["When the user clicks on a ",e.jsx(s.strong,{children:"Toggle"}),", it has an immediate effect:"]}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsx(s.li,{children:'set to "on" position, the thumb will slide to the right of the track'}),`
`,e.jsx(s.li,{children:'set to "off" position, the thumb will slide to the left of the track'}),`
`]}),`
`,e.jsx(n,{label:"Navigation",level:2}),`
`,e.jsx(n,{label:"Focus Management",level:3}),`
`,e.jsxs(s.p,{children:["When the ",e.jsx(s.strong,{children:"Toggle"})," component is focused, focus is automatically set to the ",e.jsx(s.strong,{children:"Toggle"})," itself."]}),`
`,e.jsxs(s.p,{children:["A disabled ",e.jsx(s.strong,{children:"Toggle"})," cannot receive focus and cannot be toggled."]}),`
`,e.jsx(n,{label:"General Keyboard Shortcuts",level:3}),`
`,e.jsxs(s.p,{children:["Pressing ",e.jsx(s.code,{children:"Tab"})," moves focus to the ",e.jsx(s.strong,{children:"Toggle"})," component."]}),`
`,e.jsxs(s.p,{children:["Pressing ",e.jsx(s.code,{children:"Shift"})," + ",e.jsx(s.code,{children:"Tab"})," moves focus backward to the previous focusable element."]}),`
`,e.jsxs(s.p,{children:["When focused, pressing ",e.jsx(s.code,{children:"Space"})," or ",e.jsx(s.code,{children:"Enter"})," immediately changes the ",e.jsx(s.strong,{children:"Toggle"}),"'s state from on to off or off to on."]}),`
`,e.jsx(n,{label:"Accessibility",level:2}),`
`,e.jsxs(s.p,{children:["This component complies with the ",e.jsx(a,{href:"https://www.w3.org/WAI/ARIA/apg/patterns/checkbox",children:"Checkbox WAI-ARIA design pattern"}),"."]}),`
`,e.jsx(n,{label:"Always provide an explicit label",level:3}),`
`,e.jsxs(s.p,{children:["Every ",e.jsx(s.strong,{children:"Toggle"}),` must have a clear and explicit label to ensure that users (especially screen reader users) understand its purpose,
using either a `,e.jsx(s.strong,{children:"ToggleLabel"})," or an ",e.jsx(a,{href:"https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label",children:"aria-label"})," for context."]}),`
`,e.jsx(o,{of:m,sourceState:"shown"}),`
`,e.jsxs(s.p,{children:[e.jsx(i,{name:r.circleCheck,style:{color:"var(--ods-color-success-500)"}})," Screen readers will announce a checkbox, its state and the label."]}),`
`,e.jsx(o,{of:p,sourceState:"shown"}),`
`,e.jsxs(s.p,{children:[e.jsx(i,{name:r.circleCheck,style:{color:"var(--ods-color-success-500)"}})," Screen readers will announce a checkbox, its state and the label."]})]})}function ee(t={}){const{wrapper:s}={...h(),...t.components};return s?e.jsx(s,{...t,children:e.jsx(c,{...t})}):c(t)}export{ee as default};
