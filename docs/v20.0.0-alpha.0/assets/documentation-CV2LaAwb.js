import{i as e}from"./rolldown-runtime-Dd_uD5pT.js";import{t}from"./jsx-runtime-DREnUpxT.js";import{T as n}from"./index-CdRG7ZE_.js";var r=e(t());function i(e){let t={code:`code`,em:`em`,li:`li`,ol:`ol`,p:`p`,strong:`strong`,ul:`ul`,...n(),...e.components},{Anatomy:i,BestPractices:a,Canvas:s,ExternalLink:c,Heading:l,IdentityCard:u,Kbd:d,Table:f}=t;return i||o(`Anatomy`,!0),a||o(`BestPractices`,!0),s||o(`Canvas`,!0),c||o(`ExternalLink`,!0),l||o(`Heading`,!0),u||o(`IdentityCard`,!0),d||o(`Kbd`,!0),f||o(`Table`,!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.p,{children:(0,r.jsxs)(t.em,{children:[(0,r.jsx)(t.strong,{children:`Tabs`}),` are a way of navigating between multiple panels, reducing clutter and fitting more into a smaller space`]})}),`
`,(0,r.jsx)(s,{story:`Overview`,source:`none`}),`
`,(0,r.jsx)(l,{label:`Overview`,level:2}),`
`,(0,r.jsx)(u,{aliases:[`Tab Navigation`,`Tabbed interface`],figmaLink:`https://www.figma.com/design/9jDDTcR4a9jPRFcdjawAlf/ODS---UI-Kit?node-id=52-11168`,githubUrl:`https://github.com/ovh/design-system/tree/master/packages/ods-react/src/components/tabs`,name:`Tabs`,children:(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:`Tabs`}),` are used to organize content by grouping similar information on the same page.`]})}),`
`,(0,r.jsx)(l,{label:`Usage`,level:2}),`
`,(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:`Tabs`}),` component is ideal for dashboards, settings pages, profile sections, and any interface where multiple views need to be accessible from the same page.`]}),`
`,(0,r.jsx)(t.p,{children:`They can also be used to filter content via some common denominator.`}),`
`,(0,r.jsx)(l,{label:`Dos & Don'ts`,level:3}),`
`,(0,r.jsx)(a,{donts:[`- Don't use Tabs as a progress indicator or wizard steps`,`- Don't nest Tabs inside other Tabs, this creates a confusing and hard-to-navigate experience`,`- Don't overload the interface with too many tabs. Use dropdowns if you need more than 5 tabs`,`- Don't use long or verbose labels`,`- Don't use external links or actions as tab triggers, Tabs should only control the visibility of in-page content`,`- Avoid using the switch variant for main navigation or complex page segmentation. Prefer the default Tabs for those cases instead`],dos:[`- Use Tabs to group related content under the same page when it fits in a shared context`,`- Keep Tab labels short, clear, and scannable, use nouns or very short phrases (1–3 words max)`,`- Use Tabs for horizontal navigation, not hierarchical structure or progressive steps`,`- Do use default Tabs for main navigation`,`- Do use switch variant when Tabs act as a mode selector or view switcher (e.g., toggling between "List" and "Grid" views)`]}),`
`,(0,r.jsx)(l,{label:`Best Practices in Context`,level:3}),`
`,(0,r.jsx)(i,{src:`components/tabs/anatomy.png`}),`
`,(0,r.jsxs)(t.ol,{children:[`
`,(0,r.jsx)(t.li,{children:(0,r.jsx)(t.strong,{children:`Tabs`})}),`
`,(0,r.jsx)(t.li,{children:(0,r.jsx)(t.strong,{children:`Scroll Buttons (previous/next) - optional`})}),`
`,(0,r.jsx)(t.li,{children:(0,r.jsx)(t.strong,{children:`Active tab`})}),`
`,(0,r.jsx)(t.li,{children:(0,r.jsx)(t.strong,{children:`Unselected tab`})}),`
`]}),`
`,(0,r.jsx)(l,{label:`Placement`,level:2}),`
`,(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:`Tabs`}),` are often used in the top part of a web page, as it can act as a navigation focus.`]}),`
`,(0,r.jsx)(l,{label:`Behavior`,level:2}),`
`,(0,r.jsxs)(t.p,{children:[`By default, one of the `,(0,r.jsx)(t.strong,{children:`Tab`}),` is always selected.`]}),`
`,(0,r.jsxs)(t.p,{children:[`Each `,(0,r.jsx)(t.strong,{children:`Tab`}),` can be hovered, focused and selected. A `,(0,r.jsx)(t.strong,{children:`Tab`}),` can also act as a disabled `,(0,r.jsx)(t.strong,{children:`Tab`}),`.`]}),`
`,(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:`Tabs`}),` always stay on the same line, and can be horizontally scrolled through if they happen to not fit their container.`]}),`
`,(0,r.jsxs)(t.p,{children:[`Each `,(0,r.jsx)(t.strong,{children:`Tab`}),` has a panel displaying content. Selecting a `,(0,r.jsx)(t.strong,{children:`Tab`}),` displays the corresponding panel.`]}),`
`,(0,r.jsxs)(t.p,{children:[`The panel does not depend on the `,(0,r.jsx)(t.strong,{children:`Tab`}),` component, it is in the developer's hands.`]}),`
`,(0,r.jsx)(l,{label:`Scroll Buttons`,level:3}),`
`,(0,r.jsxs)(t.p,{children:[`When the number of `,(0,r.jsx)(t.strong,{children:`Tabs`}),` exceeds the visible container width, left and right scroll buttons can be displayed to allow horizontal navigation.`]}),`
`,(0,r.jsxs)(t.p,{children:[`Clicking a button scrolls to the next or previous group of `,(0,r.jsx)(t.strong,{children:`Tabs`}),` that were not visible.`]}),`
`,(0,r.jsx)(t.p,{children:`When at the first tab, the left button is displayed but disabled.`}),`
`,(0,r.jsx)(t.p,{children:`When at the last tab, the right button is displayed but disabled.`}),`
`,(0,r.jsxs)(t.p,{children:[`Scroll buttons do not affect tab selection. They only change the visible portion of the `,(0,r.jsx)(t.strong,{children:`Tabs`}),` list.`]}),`
`,(0,r.jsx)(l,{label:`Panel content rendering`,level:3}),`
`,(0,r.jsxs)(t.p,{children:[`By default, the content of every panel is rendered, and inactive panels are hidden. Use the `,(0,r.jsx)(t.code,{children:`mountStrategy`}),` prop on `,(0,r.jsx)(t.strong,{children:`Tabs`}),` to choose when the content of inactive panels is rendered:`]}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:`keep`}),` (default): the content of every panel is always rendered, inactive panels are only hidden.`]}),`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:`lazy`}),`: the content of a panel is rendered the first time its `,(0,r.jsx)(t.strong,{children:`Tab`}),` is selected, then kept like `,(0,r.jsx)(t.code,{children:`keep`}),`.`]}),`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:`unmount`}),`: the content of a panel is rendered only while its `,(0,r.jsx)(t.strong,{children:`Tab`}),` is selected, and removed when another `,(0,r.jsx)(t.strong,{children:`Tab`}),` is selected.`]}),`
`]}),`
`,(0,r.jsxs)(t.p,{children:[`Each `,(0,r.jsx)(t.strong,{children:`TabContent`}),` can set its own `,(0,r.jsx)(t.code,{children:`mountStrategy`}),`, which overrides the `,(0,r.jsx)(t.strong,{children:`Tabs`}),` one for this panel only.`]}),`
`,(0,r.jsxs)(t.p,{children:[`The panel element itself (with its `,(0,r.jsx)(t.code,{children:`id`}),`, `,(0,r.jsx)(t.code,{children:`role="tabpanel"`}),` and `,(0,r.jsx)(t.code,{children:`aria-labelledby`}),`) is always rendered, only its content depends on the strategy.`]}),`
`,(0,r.jsx)(s,{story:`MountStrategy`}),`
`,(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:`SEO`}),`: only `,(0,r.jsx)(t.code,{children:`keep`}),` puts the content of the inactive panels in the server-rendered HTML. With `,(0,r.jsx)(t.code,{children:`lazy`}),` and `,(0,r.jsx)(t.code,{children:`unmount`}),`, this content is not indexed by search engines, as they do not load content that requires a user interaction. Use them only for heavy content that does not need to be indexed, like dashboards, charts or iframes.`]}),`
`,(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:`State loss`}),`: with `,(0,r.jsx)(t.code,{children:`unmount`}),`, the content of a panel is removed each time it is hidden. Its state is lost (input values, scroll position, component state, ...) and it is rendered again from scratch the next time it is shown. Use `,(0,r.jsx)(t.code,{children:`lazy`}),` if this state must be kept.`]}),`
`,(0,r.jsxs)(t.p,{children:[`If you come from another library, here is how its props translate to `,(0,r.jsx)(t.code,{children:`mountStrategy`}),`:`]}),`
`,(0,r.jsxs)(f,{children:[(0,r.jsx)(`thead`,{children:(0,r.jsxs)(`tr`,{children:[(0,r.jsx)(`th`,{children:`Other libraries`}),(0,r.jsx)(`th`,{children:`ODS mountStrategy`})]})}),(0,r.jsxs)(`tbody`,{children:[(0,r.jsxs)(`tr`,{children:[(0,r.jsxs)(`td`,{children:[(0,r.jsx)(t.code,{children:`keepMounted`}),` (MUI, Base UI, Mantine), `,(0,r.jsx)(t.code,{children:`forceMount`}),` (Radix), `,(0,r.jsx)(t.code,{children:`unmount={ false }`}),` (Headless UI)`]}),(0,r.jsx)(`td`,{children:(0,r.jsx)(t.code,{children:`keep`})})]}),(0,r.jsxs)(`tr`,{children:[(0,r.jsxs)(`td`,{children:[(0,r.jsx)(t.code,{children:`lazyMount`}),` (Ark UI, Chakra UI)`]}),(0,r.jsx)(`td`,{children:(0,r.jsx)(t.code,{children:`lazy`})})]}),(0,r.jsxs)(`tr`,{children:[(0,r.jsxs)(`td`,{children:[(0,r.jsx)(t.code,{children:`lazyMount`}),` + `,(0,r.jsx)(t.code,{children:`unmountOnExit`}),` (Ark UI, Chakra UI), `,(0,r.jsx)(t.code,{children:`unmount`}),` (Headless UI)`]}),(0,r.jsx)(`td`,{children:(0,r.jsx)(t.code,{children:`unmount`})})]})]})]}),`
`,(0,r.jsx)(l,{label:`Variation`,level:2}),`
`,(0,r.jsx)(l,{label:`Default (standard Tabs)`,level:3}),`
`,(0,r.jsxs)(t.p,{children:[`Used for displaying and organizing related content within the same page or view.
The default `,(0,r.jsx)(t.strong,{children:`Tabs`}),` variant follows the standard horizontal layout, with a clear underline or border to indicate the active state.
It is ideal for primary navigation within a section or module.`]}),`
`,(0,r.jsx)(l,{label:`Switch (sub-navigation)`,level:3}),`
`,(0,r.jsxs)(t.p,{children:[`The switch variant is visually distinct of `,(0,r.jsx)(t.strong,{children:`Tabs`}),`, designed for switching between sub-views or modes within the same context.
It behaves as a lightweight navigation switch between views.`]}),`
`,(0,r.jsx)(l,{label:`Navigation`,level:2}),`
`,(0,r.jsx)(l,{label:`Focus Management`,level:3}),`
`,(0,r.jsxs)(t.p,{children:[`When focus moves to the `,(0,r.jsx)(t.strong,{children:`Tabs`}),` component, it is set on the active `,(0,r.jsx)(t.strong,{children:`Tab`}),`.`]}),`
`,(0,r.jsxs)(t.p,{children:[`Once a `,(0,r.jsx)(t.strong,{children:`Tab`}),` is focused, its associated content is also activated.`]}),`
`,(0,r.jsx)(l,{label:`General Keyboard Shortcuts`,level:3}),`
`,(0,r.jsxs)(t.p,{children:[`Pressing `,(0,r.jsx)(d,{children:`Tab`}),` moves focus into or out of the `,(0,r.jsx)(t.strong,{children:`Tabs`}),` component while keeping the active `,(0,r.jsx)(t.strong,{children:`Tab`}),` selected.`]}),`
`,(0,r.jsxs)(t.p,{children:[`Pressing `,(0,r.jsx)(d,{children:`Arrow Right`}),` moves focus to the next `,(0,r.jsx)(t.strong,{children:`Tab`}),` and activates its content.`]}),`
`,(0,r.jsxs)(t.p,{children:[`Pressing `,(0,r.jsx)(d,{children:`Arrow Left`}),` moves focus to the previous `,(0,r.jsx)(t.strong,{children:`Tab`}),` and activates its content.`]}),`
`,(0,r.jsxs)(t.p,{children:[`Pressing `,(0,r.jsx)(d,{children:`Home`}),` / `,(0,r.jsx)(d,{children:`fn`}),` + `,(0,r.jsx)(d,{children:`Arrow Left`}),` moves focus to the first `,(0,r.jsx)(t.strong,{children:`Tab`}),` and activates its content.`]}),`
`,(0,r.jsxs)(t.p,{children:[`Pressing `,(0,r.jsx)(d,{children:`End`}),` / `,(0,r.jsx)(d,{children:`fn`}),` + `,(0,r.jsx)(d,{children:`Arrow Right`}),` moves focus to the last `,(0,r.jsx)(t.strong,{children:`Tab`}),` and activates its content.`]}),`
`,(0,r.jsxs)(t.p,{children:[`Pressing `,(0,r.jsx)(d,{children:`Home`}),` / `,(0,r.jsx)(d,{children:`End`}),` jumps to the first or last `,(0,r.jsx)(t.strong,{children:`Tab`}),`, even if these `,(0,r.jsx)(t.strong,{children:`Tabs`}),` are not currently visible. In this case, the `,(0,r.jsx)(t.strong,{children:`Tabs`}),` list automatically scrolls to bring the selected `,(0,r.jsx)(t.strong,{children:`Tab`}),` into view.`]}),`
`,(0,r.jsxs)(t.p,{children:[`Arrow navigation moves focus to the next or previous `,(0,r.jsx)(t.strong,{children:`Tab`}),`, even if it is not currently visible. In this case, the `,(0,r.jsx)(t.strong,{children:`Tabs`}),` list automatically scrolls to bring the focused `,(0,r.jsx)(t.strong,{children:`Tab`}),` into view.`]}),`
`,(0,r.jsx)(l,{label:`Accessibility`,level:2}),`
`,(0,r.jsxs)(t.p,{children:[`This component complies with the `,(0,r.jsx)(c,{href:`https://www.w3.org/WAI/ARIA/apg/patterns/tabs/`,children:`Tabs WAI-ARIA design pattern`}),`.`]})]})}function a(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(i,{...e})}):i(e)}function o(e,t){throw Error(`Expected `+(t?`component`:`object`)+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}export{a as default};