import{i as e}from"./rolldown-runtime-Dd_uD5pT.js";import{t}from"./jsx-runtime-DREnUpxT.js";import{T as n}from"./index-CdRG7ZE_.js";var r=e(t());function i(e){let t={code:`code`,em:`em`,li:`li`,ol:`ol`,p:`p`,strong:`strong`,ul:`ul`,...n(),...e.components},{Anatomy:i,BestPractices:a,Canvas:s,ExternalLink:c,Heading:l,IdentityCard:u,TableVsDataTable:d}=t;return i||o(`Anatomy`,!0),a||o(`BestPractices`,!0),s||o(`Canvas`,!0),c||o(`ExternalLink`,!0),l||o(`Heading`,!0),u||o(`IdentityCard`,!0),d||o(`TableVsDataTable`,!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.p,{children:(0,r.jsx)(t.em,{children:`A component to display data in a tabular format.`})}),`
`,(0,r.jsx)(s,{story:`Overview`,source:`none`}),`
`,(0,r.jsx)(l,{label:`Overview`,level:2}),`
`,(0,r.jsx)(u,{aliases:[],figmaLink:`https://www.figma.com/design/9jDDTcR4a9jPRFcdjawAlf/ODS---UI-Kit?node-id=93-12118`,githubUrl:`https://github.com/ovh/design-system/tree/master/packages/ods-react/src/components/table`,name:`Table`}),`
`,(0,r.jsx)(l,{label:`Usage`,level:2}),`
`,(0,r.jsx)(d,{}),`
`,(0,r.jsx)(l,{label:`Dos & Don'ts`,level:3}),`
`,(0,r.jsx)(a,{donts:[`- Don't use the Table for layout or alignment purposes, they are meant for displaying tabular data only`,"- Don't use the Table component to display large datasets (e.g. 30+ rows) without pagination or a `Load more` button",`- Don't overload rows with too much content per cell, keep data atomic and easy to scan`,`- Don't leave column headers unclear or overly abbreviated`,`- Don't make the Table scroll in multiple directions unless absolutely necessary, to avoid poor mobile experiences`],dos:[`- Use a Table to present structured data in a clear and readable layout`,`- Limit the number of columns to 9 or fewer to maintain readability and avoid horizontal scrolling`,`- Use concise, meaningful headers, and add a Tooltip or description if more context is needed`,`- Display Skeletons in cells when data is loading asynchronously, rather than leaving them blank`,`- Ensure the Table is responsive by allowing columns to adapt to content and screen size`]}),`
`,(0,r.jsx)(l,{label:`Best Practices in Context`,level:3}),`
`,(0,r.jsx)(i,{src:`components/table/anatomy.png`}),`
`,(0,r.jsxs)(t.ol,{children:[`
`,(0,r.jsx)(t.li,{children:(0,r.jsx)(t.strong,{children:`Table`})}),`
`,(0,r.jsx)(t.li,{children:(0,r.jsx)(t.strong,{children:`Header cell`})}),`
`,(0,r.jsx)(t.li,{children:(0,r.jsx)(t.strong,{children:`Body cell`})}),`
`]}),`
`,(0,r.jsx)(l,{label:`Behavior`,level:2}),`
`,(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:`Table`}),` component acts like native HTML table. It dynamically sizes column widths and row heights based on content and available space.`]}),`
`,(0,r.jsx)(t.p,{children:`When an element is too large in a cell, the row height will adjust based on this element. It is possible to add a new line in a cell.`}),`
`,(0,r.jsx)(l,{label:`Variation`,level:2}),`
`,(0,r.jsx)(l,{label:`Size`,level:3}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:`Small`}),`: displaying compact data sets in limited spaces, making efficient use of the available area without overwhelming the user.`]}),`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:`Medium`}),` `,(0,r.jsx)(t.em,{children:`(default)`}),`: default size of presenting data in a `,(0,r.jsx)(t.strong,{children:`Table`}),`.`]}),`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:`Large`}),`: presenting extensive data sets with more detailed information, often featuring more columns and rows to provide comprehensive visibility of the data.`]}),`
`]}),`
`,(0,r.jsx)(l,{label:`Striped`,level:3}),`
`,(0,r.jsxs)(t.p,{children:[`By default, the `,(0,r.jsx)(t.strong,{children:`Table`}),` has no distinctive background colors on rows. Set the `,(0,r.jsx)(t.code,{children:`striped`}),` prop to improve readability by using alternating row colors to distinguish between consecutive rows of data, making it easier for users to follow and interpret the information. We recommend using it when there are more than 10 rows in the `,(0,r.jsx)(t.strong,{children:`Table`}),`.`]}),`
`,(0,r.jsx)(l,{label:`Navigation`,level:2}),`
`,(0,r.jsxs)(t.p,{children:[`The `,(0,r.jsx)(t.strong,{children:`Table`}),` component behaves like the native `,(0,r.jsx)(t.code,{children:`<table>`}),` element. Keyboard navigation depends on the structure and interactive elements within the Table (e.g., links, or buttons). Integrators should ensure proper focus management based on their specific implementation.`]}),`
`,(0,r.jsx)(l,{label:`Accessibility`,level:2}),`
`,(0,r.jsxs)(t.p,{children:[`To ensure the `,(0,r.jsx)(t.strong,{children:`Table`}),` component is fully accessible, it is essential to follow best practices for structuring tables with the correct semantic elements (`,(0,r.jsx)(t.code,{children:`<thead>`}),`, `,(0,r.jsx)(t.code,{children:`<tbody>`}),`, `,(0,r.jsx)(t.code,{children:`<th>`}),`, `,(0,r.jsx)(t.code,{children:`<td>`}),`...).`]}),`
`,(0,r.jsxs)(t.p,{children:[`Since `,(0,r.jsx)(t.strong,{children:`Table`}),` implementation is handled by the integrator, we recommend referring to the `,(0,r.jsx)(c,{href:`https://www.w3.org/WAI/tutorials/tables`,children:`WCAG guidelines`}),` for accessible tables.`]})]})}function a(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(i,{...e})}):i(e)}function o(e,t){throw Error(`Expected `+(t?`component`:`object`)+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}export{a as default};