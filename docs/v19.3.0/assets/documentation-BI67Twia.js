import{j as e}from"./jsx-runtime-Cfl8ynUo.js";import{useMDXComponents as r}from"./index-ZwkxtaJJ.js";import{M as a}from"./index-9orhCFJa.js";import{T as o,O as l}from"./tabs.stories-DIEcJBjR.js";import{A as c}from"./Anatomy-DkXJCwiR.js";import{B as d}from"./Banner-DiJ2utjo.js";import{I as h,B as p}from"./IdentityCard-0vzhW5ZM.js";import{C as x}from"./Canvas-CreDMEws.js";import{E as m}from"./ExternalLink-C0Msq_QQ.js";import{H as n}from"./Heading-eINcjqM4.js";import"./index-jIWwRBLr.js";import"./iframe-BRevKSH1.js";import"./index-DWDEzXrj.js";import"./index-N93khynk.js";import"./index-CXQShRbs.js";import"./index-DrFu-skq.js";import"./use-locale-context-6s5qsrWI.js";import"./render-strategy-BOAyFnMW.js";import"./index-CqY9YpN0.js";import"./Button-B-GJ-1TA.js";import"./Spinner-DJB5ZadI.js";import"./colors-DSObuHxd.js";import"./icon-name-C581wThh.js";import"./use-presence-Dwt5F0sJ.js";import"./use-event-c9j7vq_1.js";import"./controls-BtiQQn1l.js";import"./source-CPEZJ6oD.js";import"./Table-BvR76ybm-DzE94PQp.js";import"./index-CWkFp9WS-BSIT86NH.js";import"./Table-u83oGl00.js";import"./ods-react60-DssFCbzP.js";import"./TooltipTrigger-CizyLvLy-D53hI2Ct.js";import"./index-blQ1D1fB.js";import"./lz-string-U2heoObX.js";import"./meta-t9Q7ez2Q.js";import"./ResetTheme-BVzaMHe3.js";import"./tokens-VHDJ0kGa.js";import"./Link-CIjoG_UN-BDwROQOD.js";function i(t){const s={code:"code",em:"em",li:"li",ol:"ol",p:"p",strong:"strong",...r(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{of:o,name:"Documentation"}),`
`,e.jsx(d,{of:o}),`
`,e.jsx(s.p,{children:e.jsxs(s.em,{children:[e.jsx(s.strong,{children:"Tabs"})," are a way of navigating between multiple panels, reducing clutter and fitting more into a smaller space"]})}),`
`,e.jsx(x,{of:l,sourceState:"none"}),`
`,e.jsx(n,{label:"Overview",level:2}),`
`,e.jsx(h,{aliases:["Tab Navigation","Tabbed interface"],figmaLink:"https://www.figma.com/design/9jDDTcR4a9jPRFcdjawAlf/ODS---UI-Kit?node-id=52-11168",githubUrl:"https://github.com/ovh/design-system/tree/master/packages/ods-react/src/components/tabs",name:"Tabs",children:e.jsxs(s.p,{children:[e.jsx(s.strong,{children:"Tabs"})," are used to organize content by grouping similar information on the same page."]})}),`
`,e.jsx(n,{label:"Usage",level:2}),`
`,e.jsxs(s.p,{children:[e.jsx(s.strong,{children:"Tabs"})," component is ideal for dashboards, settings pages, profile sections, and any interface where multiple views need to be accessible from the same page."]}),`
`,e.jsx(s.p,{children:"They can also be used to filter content via some common denominator."}),`
`,e.jsx(n,{label:"Dos & Don'ts",level:3}),`
`,e.jsx(p,{donts:["- Don't use Tabs as a progress indicator or wizard steps","- Don't nest Tabs inside other Tabs, this creates a confusing and hard-to-navigate experience","- Don't overload the interface with too many tabs. Use dropdowns if you need more than 5 tabs","- Don't use long or verbose labels","- Don't use external links or actions as tab triggers, Tabs should only control the visibility of in-page content"],dos:["- Use Tabs to group related content under the same page when it fits in a shared context","- Keep Tab labels short, clear, and scannable, use nouns or very short phrases (1–3 words max)","- Use Tabs for horizontal navigation, not hierarchical structure or progressive steps"]}),`
`,e.jsx(n,{label:"Best Practices in Context",level:3}),`
`,e.jsx(c,{src:"components/tabs/anatomy.png"}),`
`,e.jsxs(s.ol,{children:[`
`,e.jsx(s.li,{children:e.jsx(s.strong,{children:"Tabs"})}),`
`,e.jsx(s.li,{children:e.jsx(s.strong,{children:"Scroll Buttons (previous/next) - optional"})}),`
`,e.jsx(s.li,{children:e.jsx(s.strong,{children:"Active tab"})}),`
`,e.jsx(s.li,{children:e.jsx(s.strong,{children:"Unselected tab"})}),`
`]}),`
`,e.jsx(n,{label:"Placement",level:2}),`
`,e.jsxs(s.p,{children:[e.jsx(s.strong,{children:"Tabs"})," are often used in the top part of a web page, as it can act as a navigation focus."]}),`
`,e.jsx(n,{label:"Behavior",level:2}),`
`,e.jsxs(s.p,{children:["By default, one of the ",e.jsx(s.strong,{children:"Tab"})," is always selected."]}),`
`,e.jsxs(s.p,{children:["Each ",e.jsx(s.strong,{children:"Tab"})," can be hovered, focused and selected. A ",e.jsx(s.strong,{children:"Tab"})," can also act as a disabled ",e.jsx(s.strong,{children:"Tab"}),"."]}),`
`,e.jsxs(s.p,{children:[e.jsx(s.strong,{children:"Tabs"})," always stay on the same line, and can be horizontally scrolled through if they happen to not fit their container."]}),`
`,e.jsxs(s.p,{children:["Each ",e.jsx(s.strong,{children:"Tab"})," has a panel displaying content. Selecting a ",e.jsx(s.strong,{children:"Tab"})," displays the corresponding panel."]}),`
`,e.jsxs(s.p,{children:["The panel does not depend on the ",e.jsx(s.strong,{children:"Tab"})," component, it is in the developer's hands."]}),`
`,e.jsx(n,{label:"Scroll Buttons",level:3}),`
`,e.jsxs(s.p,{children:["When the number of ",e.jsx(s.strong,{children:"Tabs"})," exceeds the visible container width, left and right scroll buttons can be displayed to allow horizontal navigation."]}),`
`,e.jsxs(s.p,{children:["Clicking a button scrolls to the next or previous group of ",e.jsx(s.strong,{children:"Tabs"})," that were not visible."]}),`
`,e.jsx(s.p,{children:"When at the first tab, the left button is displayed but disabled."}),`
`,e.jsx(s.p,{children:"When at the last tab, the right button is displayed but disabled."}),`
`,e.jsxs(s.p,{children:["Scroll buttons do not affect tab selection. They only change the visible portion of the ",e.jsx(s.strong,{children:"Tabs"})," list."]}),`
`,e.jsx(n,{label:"Navigation",level:2}),`
`,e.jsx(n,{label:"Focus Management",level:3}),`
`,e.jsxs(s.p,{children:["When focus moves to the ",e.jsx(s.strong,{children:"Tabs"})," component, it is set on the active ",e.jsx(s.strong,{children:"Tab"}),"."]}),`
`,e.jsxs(s.p,{children:["Once a ",e.jsx(s.strong,{children:"Tab"})," is focused, its associated content is also activated."]}),`
`,e.jsx(n,{label:"General Keyboard Shortcuts",level:3}),`
`,e.jsxs(s.p,{children:["Pressing ",e.jsx(s.code,{children:"Tab"})," moves focus into or out of the ",e.jsx(s.strong,{children:"Tabs"})," component while keeping the active ",e.jsx(s.strong,{children:"Tab"})," selected."]}),`
`,e.jsxs(s.p,{children:["Pressing ",e.jsx(s.code,{children:"Arrow Right"})," moves focus to the next ",e.jsx(s.strong,{children:"Tab"})," and activates its content."]}),`
`,e.jsxs(s.p,{children:["Pressing ",e.jsx(s.code,{children:"Arrow Left"})," moves focus to the previous ",e.jsx(s.strong,{children:"Tab"})," and activates its content."]}),`
`,e.jsxs(s.p,{children:["Pressing ",e.jsx(s.code,{children:"Home"})," / ",e.jsx(s.code,{children:"fn"})," + ",e.jsx(s.code,{children:"Arrow Left"})," moves focus to the first ",e.jsx(s.strong,{children:"Tab"})," and activates its content."]}),`
`,e.jsxs(s.p,{children:["Pressing ",e.jsx(s.code,{children:"End"})," / ",e.jsx(s.code,{children:"fn"})," + ",e.jsx(s.code,{children:"Arrow Right"})," moves focus to the last ",e.jsx(s.strong,{children:"Tab"})," and activates its content."]}),`
`,e.jsxs(s.p,{children:["Pressing ",e.jsx(s.code,{children:"Home"})," / ",e.jsx(s.code,{children:"End"})," jumps to the first or last ",e.jsx(s.strong,{children:"Tab"}),", even if these ",e.jsx(s.strong,{children:"Tabs"})," are not currently visible. In this case, the ",e.jsx(s.strong,{children:"Tabs"})," list automatically scrolls to bring the selected ",e.jsx(s.strong,{children:"Tab"})," into view."]}),`
`,e.jsxs(s.p,{children:["Arrow navigation moves focus to the next or previous ",e.jsx(s.strong,{children:"Tab"}),", even if it is not currently visible. In this case, the ",e.jsx(s.strong,{children:"Tabs"})," list automatically scrolls to bring the focused ",e.jsx(s.strong,{children:"Tab"})," into view."]}),`
`,e.jsx(n,{label:"Accessibility",level:2}),`
`,e.jsxs(s.p,{children:["This component complies with the ",e.jsx(m,{href:"https://www.w3.org/WAI/ARIA/apg/patterns/tabs/",children:"Tabs WAI-ARIA design pattern"}),"."]})]})}function $(t={}){const{wrapper:s}={...r(),...t.components};return s?e.jsx(s,{...t,children:e.jsx(i,{...t})}):i(t)}export{$ as default};
