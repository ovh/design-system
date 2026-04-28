import{j as e}from"./jsx-runtime-Cfl8ynUo.js";import{useMDXComponents as l}from"./index-ZwkxtaJJ.js";import{k as s}from"./Kbd-Cnje_EfN-CvQx-mOR.js";import{M as a}from"./index-BnNeS_H2.js";import{Q as r,O as c}from"./query-filter.stories-CN-axTj_.js";import{A as p}from"./Anatomy-DkXJCwiR.js";import{B as d}from"./Banner-DYvgfZRi.js";import{C as h}from"./Canvas-zVPAbnas.js";import{B as m}from"./BestPractices-j46EvglC.js";import{H as t}from"./Heading-lgNAZPkT.js";import{I as u}from"./IdentityCard-BTJG0hV7.js";import"./index-jIWwRBLr.js";import"./index-CWkFp9WS-BSIT86NH.js";import"./iframe-DtAqipxR.js";import"./index-DWDEzXrj.js";import"./index-N93khynk.js";import"./index-CXQShRbs.js";import"./index-DrFu-skq.js";import"./index-CqY9YpN0.js";import"./index-B0M5RXeR.js";import"./Text-CAQM6i-X.js";import"./context-C_-r2uoG.js";import"./use-filter-DwFqGZM4.js";import"./index-BXelFz3z.js";import"./use-locale-context-CGqEQCyU.js";import"./Button-B-GJ-1TA.js";import"./Spinner-DJB5ZadI.js";import"./colors-DSObuHxd.js";import"./index-DyJ6-P7h.js";import"./overlay-CZHjGBMC.js";import"./portal-DmTPQ5yQ.js";import"./use-presence-D0Br6WHR.js";import"./use-event-c9j7vq_1.js";import"./index-XRYVLp3j.js";import"./index-uZK-7FQN.js";import"./element-B8BTzFb4.js";import"./icon-name-D0KNfDOz.js";import"./Input-CsaVjqar.js";import"./useI18n-C0NLVYPv.js";import"./Tag-DvbeX4Ez.js";import"./controls-BtiQQn1l.js";import"./source-CPEZJ6oD.js";import"./icon-name-kFDeGXCQ--4TVzzrX.js";import"./index-DA9hOdui.js";import"./context-Z_Xa7sWf-5kwUyuQy.js";import"./index-D6AFTHzO.js";import"./lz-string-U2heoObX.js";import"./meta-twt-Yy4M.js";import"./ResetTheme-CLF5P7Bf.js";import"./tokens-BrWUS-3i.js";import"./divider-color-DMMH0ySn-B7JauIP0.js";import"./colors-C1Wmnk_L-aAAP9SXj.js";import"./Table-Bof_Nsov-CS9ZUwCH.js";import"./ExternalLink-D9Oykgkh.js";import"./Link-fc4PsoC7-BoLkDjrj.js";import"./Table-BXVk_N0H.js";function o(i){const n={code:"code",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...l(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{of:r,name:"Documentation",tags:["new"]}),`
`,e.jsx(d,{of:r}),`
`,e.jsx(h,{of:c,sourceState:"none"}),`
`,e.jsx(t,{label:"Overview",level:2}),`
`,e.jsx(u,{aliases:[],figmaLink:"https://www.figma.com/design/9jDDTcR4a9jPRFcdjawAlf/ODS---UI-Kit?node-id=0-1&p=f&t=kwInPIiCg5eOsgBa-0",githubUrl:"https://github.com/ovh/design-system/tree/master/packages/ods-react/src/components/query-filter",name:"QueryFilter",startingVersion:19,children:e.jsxs(n.p,{children:["The ",e.jsx(n.strong,{children:"Query Filter"}),` component allows users to find specific items within a collection by constructing queries based
on properties and property values. Users can combine structured property conditions with free-text search to create
precise filters without writing raw query syntax.`]})}),`
`,e.jsx(t,{label:"Usage",level:2}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.strong,{children:"Query Filter"}),` is typically used as a toolbar or input control above data tables or card grids to help users
quickly narrow down large datasets.`]}),`
`,e.jsx(n.p,{children:"It is commonly used in:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Dashboards and admin interfaces."}),`
`,e.jsx(n.li,{children:"Productivity tools with lists or tables of items."}),`
`,e.jsx(n.li,{children:"Applications where filtering and search are core workflows."}),`
`]}),`
`,e.jsx(t,{label:"Dos & Don'ts",level:3}),`
`,e.jsx(m,{donts:["- Don't rely on Query Filter for very small collections where scanning the list is faster","- Don't use property tokens for datasets dominated by long free-form text",`- Don't use operators that don't match the property type (e.g., "between" for single-value properties)`],dos:["- Use Query Filter to enable multi-property search and filtering","- Apply the Query Filter to the full dataset, not just currently visible or loaded items","- Keep the query readable by ordering tokens logically and avoiding unnecessary duplication of conditions"]}),`
`,e.jsx(t,{label:"Best Practices in Context",level:3}),`
`,e.jsx(p,{src:"components/query-filter/anatomy.png"}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.strong,{children:"QueryFilter"})}),`
`,e.jsx(n.li,{children:e.jsx(n.strong,{children:"Filter input"})}),`
`,e.jsx(n.li,{children:e.jsx(n.strong,{children:"Suggestions panel"})}),`
`,e.jsx(n.li,{children:e.jsx(n.strong,{children:"Token"})}),`
`,e.jsx(n.li,{children:e.jsx(n.strong,{children:"Clear all filters button"})}),`
`]}),`
`,e.jsx(t,{label:"Placement",level:2}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.strong,{children:"Query Filter"})," component is typically positioned above the target data container."]}),`
`,e.jsx(t,{label:"Behavior",level:2}),`
`,e.jsx(t,{label:"Opening & Closing",level:3}),`
`,e.jsx(n.p,{children:"Clicking the filter input opens the suggestions panel."}),`
`,e.jsx(n.p,{children:"The panel closes when:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"A value is selected."}),`
`,e.jsx(n.li,{children:"Clicking outside the component."}),`
`,e.jsxs(n.li,{children:["The ",e.jsx(s,{children:"Escape"})," key is pressed."]}),`
`]}),`
`,e.jsx(t,{label:"Adding a Filter",level:3}),`
`,e.jsx(n.p,{children:"Suggestions guide the user through:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Property selection"}),`
`,e.jsx(n.li,{children:"Operator selection"}),`
`,e.jsx(n.li,{children:"Value entry"}),`
`]}),`
`,e.jsx(n.p,{children:"Free-text is allowed and creates a distinct token."}),`
`,e.jsx(t,{label:"Removing a token",level:3}),`
`,e.jsx(n.p,{children:"Each token can be removed by click."}),`
`,e.jsx(n.p,{children:"Backspace behavior does not remove last token unless specifically focused on it."}),`
`,e.jsx(n.p,{children:'Optional "Clear all filters" button removes all tokens in one action.'}),`
`,e.jsx(t,{label:"Navigation",level:2}),`
`,e.jsx(t,{label:"Focus Management",level:3}),`
`,e.jsx(n.p,{children:"Focus follows a logical order from left to right."}),`
`,e.jsx(n.p,{children:"When the suggestions panel is open, focus moves within the panel without leaving the component."}),`
`,e.jsx(t,{label:"General Keyboard Shortcuts",level:3}),`
`,e.jsxs(n.p,{children:["Pressing ",e.jsx(s,{children:"Tab"})," moves focus between the input field, and other interactive elements."]}),`
`,e.jsxs(n.p,{children:["Pressing ",e.jsx(s,{children:"Arrow Down"})," opens the suggestions panel and moves focus to the first suggestion."]}),`
`,e.jsxs(n.p,{children:["Pressing ",e.jsx(s,{children:"Escape"})," closes the suggestions panel."]}),`
`,e.jsxs(n.p,{children:["Pressing ",e.jsx(s,{children:"Backspace"})," deletes characters in the input field"]}),`
`,e.jsx(t,{label:"Accessibility",level:2}),`
`,e.jsx(n.p,{children:"Use ARIA (Accessible Rich Internet Applications) live regions to announce filtering changes. For example:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["When a filter is added: ",e.jsx(n.code,{children:"aria-live"}),` region could say "Filter 'Status: Active' has been applied.".`]}),`
`,e.jsxs(n.li,{children:["When a filter is removed: ",e.jsx(n.code,{children:"aria-live"}),` region could say "Filter 'Status: Active' has been removed.".`]}),`
`]})]})}function ge(i={}){const{wrapper:n}={...l(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(o,{...i})}):o(i)}export{ge as default};
