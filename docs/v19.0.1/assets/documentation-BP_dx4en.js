import{j as e}from"./jsx-runtime-VM66peLj.js";import{useMDXComponents as r}from"./index-DQB45XCM.js";import{M as l,C as a}from"./index-D1K7mLD0.js";import{T as o,O as c}from"./toggle.stories-DRXHjqEc.js";import{B as h}from"./Banner-B4K6Zb-5.js";import{I as d,A as g,B as m}from"./IdentityCard-Yo1l2iFh.js";import{H as t}from"./Heading-mtuBTkOf.js";import"./StorybookLink-DMr2bWgk.js";import"./index-D_CmzhJ4.js";import"./iframe-DbJ8Lucp.js";import"./index-ChzAxGiP.js";import"./index-CucsY3YN.js";import"./index-CXQShRbs.js";import"./index-DrFu-skq.js";import"./FormFieldLabel-DLzqZ3oJ-pVDhh5om.js";import"./index-2w0W-O47-BJ19ihbZ.js";import"./Text-DlzfmXiV-En0fuXkb.js";import"./index-CkQHsVsO.js";import"./FormFieldLabel-DjB85afw.js";import"./Text-KX3Hvvn9.js";import"./use-locale-context-BQVaQ0H3.js";import"./index-DoGvXrgL.js";import"./use-field-context-A_pa20cf.js";import"./controls-BtiQQn1l.js";import"./ExternalLink-DJ00RbPw.js";import"./ods-react60-Yebt9vXY.js";import"./Link-D8k51sak-CbRDKo-E.js";import"./ods-react214-B9lkGKUh.js";function i(s){const n={code:"code",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...r(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{of:o,name:"Documentation"}),`
`,e.jsx(h,{of:o}),`
`,e.jsx(a,{of:c,sourceState:"none"}),`
`,e.jsx(t,{label:"Overview",level:2}),`
`,e.jsxs(d,{aliases:["Toggle Switch","Switch"],atomicType:g.atom,figmaLink:"https://www.figma.com/design/9jDDTcR4a9jPRFcdjawAlf/ODS---UI-Kit?node-id=53-15319",githubUrl:"https://github.com/ovh/design-system/tree/master/packages/ods/src/components/toggle",name:"Toggle",children:[e.jsxs(n.p,{children:["The ",e.jsx(n.strong,{children:"Toggle"})," component is used to enable or disable a state, setting or feature."]}),e.jsx(n.p,{children:`It provides a clear visual indication of the current state and allows users to change states with a single click or
tap.`}),e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Toggles"})," are commonly used in settings, preferences, and forms where a binary choice is required."]})]}),`
`,e.jsx(t,{label:"Usage",level:2}),`
`,e.jsxs(n.p,{children:["A ",e.jsx(n.strong,{children:"Toggle"})," is commonly used for binary choice."]}),`
`,e.jsx(n.p,{children:"The user can decide to switch between two states with an immediate effect visible at a glance."}),`
`,e.jsx(n.p,{children:"It can be used in following use cases when you need to allow the user to:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"turn an option or settings on or off"}),`
`,e.jsx(n.li,{children:"add or remove an item or an option"}),`
`]}),`
`,e.jsxs(n.p,{children:["A ",e.jsx(n.strong,{children:"Toggle"})," should never require users to press a button to apply their settings (if a setting requires a button, use a checkbox instead)."]}),`
`,e.jsx(t,{label:"Dos & Don'ts",level:3}),`
`,e.jsx(m,{donts:["- Don't use a Toggle for changes that only take effect after form submission. Use a Checkbox instead","- Don't use ambiguous or overly long labels","- Don't use Toggle for multi-state or complex options since it is meant for binary (on/off) interactions only"],dos:["- Use a Toggle to switch between two states when the change has an immediate effect (e.g., turning a setting on or off)",'- Ensure the Toggle label clearly describes the "on" state, so users understand what enabling it will do',"- Place any related elements (e.g., changes triggered by the Toggle) close to the Toggle to reinforce the connection visually","- Use Toggle in mobile-friendly settings where quick, touch-based interactions are expected","- Use Toggle in forms only when the change takes effect immediately and does not require submission to apply"]}),`
`,e.jsx(t,{label:"Best Practices in Context",level:3}),`
`,e.jsx(n.p,{children:e.jsx(n.img,{src:"components/toggle/anatomy.png",alt:"Component anatomy",title:"Component anatomy"})}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.strong,{children:"Toggle"})}),`
`,e.jsx(n.li,{children:e.jsx(n.strong,{children:"Handle"})}),`
`,e.jsx(n.li,{children:e.jsx(n.strong,{children:"Track"})}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"State label"})," - optional"]}),`
`]}),`
`,e.jsx(t,{label:"Placement",level:2}),`
`,e.jsxs(n.p,{children:["Place the ",e.jsx(n.strong,{children:"Toggle"})," component near the setting or feature it controls."]}),`
`,e.jsx(n.p,{children:"It should be positioned within forms, settings panels, or any relevant context where a binary choice is required."}),`
`,e.jsx(n.p,{children:"Ensure it is easily accessible and visible."}),`
`,e.jsx(t,{label:"Behavior",level:2}),`
`,e.jsxs(n.p,{children:["When the user clicks on a ",e.jsx(n.strong,{children:"Toggle"}),", it has an immediate effect:"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:'set to "on" position, the thumb will slide to the right of the track'}),`
`,e.jsx(n.li,{children:'set to "off" position, the thumb will slide to the left of the track'}),`
`]}),`
`,e.jsx(t,{label:"Navigation",level:2}),`
`,e.jsx(t,{label:"Focus Management",level:3}),`
`,e.jsxs(n.p,{children:["When the ",e.jsx(n.strong,{children:"Toggle"})," component is focused, focus is automatically set to the ",e.jsx(n.strong,{children:"Toggle"})," itself."]}),`
`,e.jsxs(n.p,{children:["A disabled ",e.jsx(n.strong,{children:"Toggle"})," cannot receive focus and cannot be toggled."]}),`
`,e.jsx(t,{label:"General Keyboard Shortcuts",level:3}),`
`,e.jsxs(n.p,{children:["Pressing ",e.jsx(n.code,{children:"Tab"})," moves focus to the ",e.jsx(n.strong,{children:"Toggle"})," component."]}),`
`,e.jsxs(n.p,{children:["Pressing ",e.jsx(n.code,{children:"Shift"})," + ",e.jsx(n.code,{children:"Tab"})," moves focus backward to the previous focusable element."]}),`
`,e.jsxs(n.p,{children:["When focused, pressing ",e.jsx(n.code,{children:"Space"})," or ",e.jsx(n.code,{children:"Enter"})," immediately changes the ",e.jsx(n.strong,{children:"Toggle"}),"'s state from on to off or off to on."]})]})}function _(s={}){const{wrapper:n}={...r(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(i,{...s})}):i(s)}export{_ as default};
