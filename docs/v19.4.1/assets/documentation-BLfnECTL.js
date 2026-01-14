import{j as e}from"./jsx-runtime-Cfl8ynUo.js";import{useMDXComponents as l}from"./index-ZwkxtaJJ.js";import{k as n}from"./Kbd-BhRHY5DX-DYqBejDt.js";import{M as c}from"./index-C3P7rize.js";import{B as r,O as a}from"./button-group.stories-e0Fc3ME7.js";import{A as p}from"./Anatomy-DkXJCwiR.js";import{B as d}from"./Banner-pQsjs-k1.js";import{C as u}from"./Canvas-ClwM1ePO.js";import{I as h,B as m}from"./IdentityCard-BHvRCB68.js";import{H as o}from"./Heading-DAsItneX.js";import{S as x}from"./StorybookLink-CUnNm_lF.js";import{S as j,R as g}from"./meta-DxXVpXmq.js";import"./index-jIWwRBLr.js";import"./index-CWkFp9WS-BSIT86NH.js";import"./iframe-B-1i39SD.js";import"./index-DWDEzXrj.js";import"./index-N93khynk.js";import"./index-CXQShRbs.js";import"./index-DrFu-skq.js";import"./index-CqY9YpN0.js";import"./context-C_-r2uoG.js";import"./toggle-group-root-BnrrZb6E.js";import"./use-locale-context-Da8UBLVe.js";import"./Button-B-GJ-1TA.js";import"./Spinner-DJB5ZadI.js";import"./colors-DSObuHxd.js";import"./icon-name-BpdEc4-2.js";import"./controls-BtiQQn1l.js";import"./source-CPEZJ6oD.js";import"./ods-react64-C395g5lW.js";import"./TooltipTrigger-DxEeTVF8-B5Le9OVu.js";import"./ods-react114-5kwUyuQy.js";import"./index-lGh5KcWi.js";import"./lz-string-U2heoObX.js";import"./ResetTheme-BVzaMHe3.js";import"./tokens-VHDJ0kGa.js";import"./Table-DVdtSe4m-Co7uf3pc.js";import"./ExternalLink-C9tV86xX.js";import"./Link-BhqYqKFa-BDwROQOD.js";import"./Table-Bq5w2nKq.js";import"./Divider-DmVNyNnn-DCNXheUh.js";function i(s){const t={li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...l(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(c,{of:r,name:"Documentation",tags:["new"]}),`
`,e.jsx(d,{of:r}),`
`,e.jsx(u,{of:a,sourceState:"none"}),`
`,e.jsx(o,{label:"Overview",level:2}),`
`,e.jsx(h,{aliases:[],figmaLink:"https://www.figma.com/design/9jDDTcR4a9jPRFcdjawAlf/branch/lllHUGUkhU6rZKAracs1Ig/ODS---UI-Kit",githubUrl:"https://github.com/ovh/design-system/tree/master/packages/ods-react/src/components/button-group",name:"ButtonGroup",startingVersion:19,children:e.jsxs(t.p,{children:["The ",e.jsx(t.strong,{children:"Button Group"}),` component arranges multiple related button elements into a single, cohesive container.
It enables users to make selections from a set of related options, either allowing one or multiple active states depending on configuration.`]})}),`
`,e.jsx(o,{label:"Usage",level:2}),`
`,e.jsxs(t.p,{children:["Use a ",e.jsx(t.strong,{children:"Button Group"})," when multiple buttons represent a set of related options or actions."]}),`
`,e.jsx(t.p,{children:"It is commonly used for:"}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsx(t.li,{children:"Toggle sets for text formatting or styling."}),`
`,e.jsx(t.li,{children:"Filtering or grouping options within a toolbar."}),`
`,e.jsx(t.li,{children:"Segmented controls in compact layouts."}),`
`]}),`
`,e.jsx(o,{label:"Dos & Don'ts",level:3}),`
`,e.jsx(m,{donts:["- Group unrelated actions together","- Mix icon-only and text-only buttons inconsistently","- Overcrowd toolbars with too many grouped options"],dos:["- Use Button Group for logically related actions","- Keep labels short","- Use single selection for mutually exclusive choices","- Use multiple selection when combined states are allowed"]}),`
`,e.jsx(o,{label:"Best Practices in Context",level:3}),`
`,e.jsx(p,{src:"components/button-group/anatomy.png"}),`
`,e.jsxs(t.ol,{children:[`
`,e.jsx(t.li,{children:e.jsx(t.strong,{children:"ButtonGroup"})}),`
`,e.jsx(t.li,{children:e.jsx(t.strong,{children:"Inactive buttons"})}),`
`,e.jsx(t.li,{children:e.jsx(t.strong,{children:"Active buttons"})}),`
`]}),`
`,e.jsx(o,{label:"Behavior",level:2}),`
`,e.jsxs(t.p,{children:[e.jsx(t.strong,{children:"Button Group"}),` buttons can be focused and triggered.
`,e.jsx(t.strong,{children:"Button Group"})," or its buttons can be disabled."]}),`
`,e.jsx(o,{label:"Single Selection",level:3}),`
`,e.jsx(t.p,{children:"Only one button in the group can be selected at a time."}),`
`,e.jsx(t.p,{children:"Selecting a new button automatically deselects the previously selected one."}),`
`,e.jsx(o,{label:"Multiple Selection",level:3}),`
`,e.jsx(t.p,{children:"Several buttons can be selected simultaneously."}),`
`,e.jsx(t.p,{children:"Each button toggles independently between selected and unselected states."}),`
`,e.jsx(o,{label:"Unselected State",level:3}),`
`,e.jsx(t.p,{children:'It may be allowed that no button is selected at all, when the user can clear all selections (e.g., "No filter applied").'}),`
`,e.jsx(o,{label:"Navigation",level:2}),`
`,e.jsx(o,{label:"Focus Management",level:3}),`
`,e.jsxs(t.p,{children:["When the ",e.jsx(t.strong,{children:"Button Group"})," receives focus, it is set on the first button."]}),`
`,e.jsx(t.p,{children:"Disabled buttons are skipped in the focus order and cannot be activated."}),`
`,e.jsx(t.p,{children:"Focus remains within the group when navigating between items using arrow keys."}),`
`,e.jsx(o,{label:"General Keyboard Shortcuts",level:3}),`
`,e.jsxs(t.p,{children:["Pressing ",e.jsx(n,{children:"Tab"})," moves focus to the first button in the group."]}),`
`,e.jsxs(t.p,{children:["Pressing ",e.jsx(n,{children:"Shift"})," + ",e.jsx(n,{children:"Tab"})," moves focus to the previous focusable element outside the ",e.jsx(t.strong,{children:"Button Group"}),"."]}),`
`,e.jsxs(t.p,{children:["Pressing ",e.jsx(n,{children:"Arrow Right"})," moves focus to the next button in the group."]}),`
`,e.jsxs(t.p,{children:["Pressing ",e.jsx(n,{children:"Arrow Left"})," moves focus to the previous item in the group."]}),`
`,e.jsxs(t.p,{children:["Pressing ",e.jsx(n,{children:"Home"})," (or ",e.jsx(n,{children:"fn"})," + ",e.jsx(n,{children:"Arrow Left"}),") moves focus to the first button."]}),`
`,e.jsxs(t.p,{children:["Pressing ",e.jsx(n,{children:"End"})," (or ",e.jsx(n,{children:"fn"})," + ",e.jsx(n,{children:"Arrow Right"}),") moves focus to the last button."]}),`
`,e.jsxs(t.p,{children:["Pressing ",e.jsx(n,{children:"Space"})," or ",e.jsx(n,{children:"Enter"})," activates or deactivates the focused button, updating the selection immediately."]}),`
`,e.jsx(o,{label:"Accessibility",level:2}),`
`,e.jsxs(t.p,{children:["The ",e.jsx(t.strong,{children:"Button Group"})," component handles by itself the accessibility requirements regarding the control grouping."]}),`
`,e.jsxs(t.p,{children:[`Though you need to ensure that each of your items follows the
`,e.jsx(x,{kind:g.button,story:j.documentation,children:"Button Accessibility Best Practices"}),"."]})]})}function re(s={}){const{wrapper:t}={...l(),...s.components};return t?e.jsx(t,{...s,children:e.jsx(i,{...s})}):i(s)}export{re as default};
