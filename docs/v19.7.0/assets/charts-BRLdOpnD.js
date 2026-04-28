import{j as e}from"./jsx-runtime-Cfl8ynUo.js";import{useMDXComponents as h}from"./index-ZwkxtaJJ.js";import{M as j}from"./index-BnNeS_H2.js";import{u as i,t as a}from"./Text-DoVs3R1p-BVem3_uj.js";import{a as m}from"./colors-C1Wmnk_L-aAAP9SXj.js";import{u as p}from"./Card-D-CQD3jr-CdozyrcE.js";import{E as u,k as f}from"./index-CwBsdRPX.js";import{e as l}from"./index-jIWwRBLr.js";import{T as t}from"./TokenPreview-B0pXwQ74.js";import{a as o}from"./designTokens-BxdaK7Vu.js";import{E as g}from"./ExternalLink-D9Oykgkh.js";import{H as n}from"./Heading-lgNAZPkT.js";import{T as _}from"./Table-BXVk_N0H.js";import"./iframe-DtAqipxR.js";import"./index-DWDEzXrj.js";import"./index-N93khynk.js";import"./index-CXQShRbs.js";import"./index-DrFu-skq.js";import"./index-CWkFp9WS-BSIT86NH.js";import"./context-Z_Xa7sWf-5kwUyuQy.js";import"./index-DA9hOdui.js";import"./Input--5Y_YAC9-ENU-JAMy.js";import"./useI18n-ChFNqy_U-DNrrrFET.js";import"./Button-Nxi7HNci-BcUZeA5m.js";import"./icon-name-kFDeGXCQ--4TVzzrX.js";import"./index-CqY9YpN0.js";import"./Link-fc4PsoC7-BoLkDjrj.js";import"./divider-color-DMMH0ySn-B7JauIP0.js";import"./Table-Bof_Nsov-CS9ZUwCH.js";const c={"chart-color-cards":"_chart-color-cards_1jvz4_1","chart-color-cards__card":"_chart-color-cards__card_1jvz4_8","chart-color-cards__bottom":"_chart-color-cards__bottom_1jvz4_43","chart-color-cards__bottom__order":"_chart-color-cards__bottom__order_1jvz4_51","chart-color-cards__bottom__hex":"_chart-color-cards__bottom__hex_1jvz4_55"},b=Object.freeze(["#0050d7","#ac246f","#00875a","#df3400","#25327c","#a61e20","#006d77","#6a2ecf","#374151","#4f8400"]),x=()=>l.createElement("div",{className:c["chart-color-cards"]},b.map((s,r)=>l.createElement(p,{className:c["chart-color-cards__card"],color:m.neutral,key:s},l.createElement(u,{value:s},l.createElement(f,{"aria-label":`Copy ${s}`,className:c["chart-color-cards__swatch"],style:{backgroundColor:s}})),l.createElement("div",{className:c["chart-color-cards__bottom"]},l.createElement(i,{className:c["chart-color-cards__bottom__order"],preset:a.label},String(r+1).padStart(2,"0")),l.createElement(i,{className:c["chart-color-cards__bottom__hex"],preset:a.span},s)))));x.__docgenInfo={description:"",methods:[],displayName:"ChartColorCards"};function d(s){const r={li:"li",p:"p",strong:"strong",ul:"ul",...h(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(j,{title:"OVHcloud Design System/Guides/Charts - Usage Guidelines"}),`
`,e.jsx(n,{label:"Charts - Usage Guidelines",level:1}),`
`,e.jsx(r.p,{children:"These guidelines provide UI, functional, and UX rules to follow when creating charts."}),`
`,e.jsx(r.p,{children:"While this documentation is not exhaustive and does not cover technical implementation details, it serves as a comprehensive reference for designing effective and consistent data visualizations."}),`
`,e.jsx(n,{label:"General guidelines",level:2}),`
`,e.jsxs(r.ul,{children:[`
`,e.jsxs(r.li,{children:[e.jsx(r.strong,{children:"Consistency"}),": Maintain consistency in your chart types and styles across your application or platform"]}),`
`,e.jsxs(r.li,{children:[e.jsx(r.strong,{children:"Labels"}),": Clearly label your axes, legend, and data points. Use descriptive titles (or Tooltips) to help users understand the chart's purpose and details"]}),`
`,e.jsxs(r.li,{children:[e.jsx(r.strong,{children:"Accessibility"}),": Ensure your charts are accessible to all users (see ",e.jsx(g,{href:"https://www.a11y-collective.com/blog/accessible-charts/",children:"Accessible Charts"}),")"]}),`
`]}),`
`,e.jsx(n,{label:"Chart types",level:2}),`
`,e.jsx(r.p,{children:"The following chart types are commonly used in OVHcloud, categorized by their primary use cases:"}),`
`,e.jsx(n,{label:"Bar Charts",level:3}),`
`,e.jsx(r.p,{children:e.jsx(r.strong,{children:"Usage"})}),`
`,e.jsxs(r.ul,{children:[`
`,e.jsx(r.li,{children:"Comparing quantities or amounts between different categories"}),`
`,e.jsx(r.li,{children:"Displaying data in a stacked layout to show cumulative values"}),`
`]}),`
`,e.jsx(r.p,{children:e.jsx(r.strong,{children:"Best Practices"})}),`
`,e.jsxs(r.ul,{children:[`
`,e.jsx(r.li,{children:"Prefer using vertical bars rather than horizontal layout"}),`
`,e.jsx(r.li,{children:"Use solid bar colors to distinguish them from background"}),`
`]}),`
`,e.jsx(n,{label:"Line Charts",level:3}),`
`,e.jsx(r.p,{children:e.jsx(r.strong,{children:"Usage"})}),`
`,e.jsxs(r.ul,{children:[`
`,e.jsx(r.li,{children:"Showing progression and trends of data over time"}),`
`,e.jsx(r.li,{children:"Comparing multiple lines through a common criterion such as a timespan"}),`
`]}),`
`,e.jsx(r.p,{children:e.jsx(r.strong,{children:"Best Practices"})}),`
`,e.jsxs(r.ul,{children:[`
`,e.jsx(r.li,{children:"Prefer using solid lines for data series"}),`
`]}),`
`,e.jsx(n,{label:"Area Charts",level:3}),`
`,e.jsx(r.p,{children:e.jsx(r.strong,{children:"Usage"})}),`
`,e.jsxs(r.ul,{children:[`
`,e.jsx(r.li,{children:"Presenting the amplitude of content and focusing on drastic trend changes"}),`
`,e.jsx(r.li,{children:"Displaying data in a stacked layout to show cumulative values"}),`
`]}),`
`,e.jsx(r.p,{children:e.jsx(r.strong,{children:"Best Practices"})}),`
`,e.jsxs(r.ul,{children:[`
`,e.jsx(r.li,{children:"Top of areas must be a solid line to draw area limit"}),`
`,e.jsx(r.li,{children:"Opacity can be applied to areas to show data overlaps"}),`
`]}),`
`,e.jsx(n,{label:"Pie Charts",level:3}),`
`,e.jsx(r.p,{children:e.jsx(r.strong,{children:"Usage"})}),`
`,e.jsxs(r.ul,{children:[`
`,e.jsx(r.li,{children:"Displaying proportions and percentages of a whole amount"}),`
`]}),`
`,e.jsx(r.p,{children:e.jsx(r.strong,{children:"Best Practices"})}),`
`,e.jsxs(r.ul,{children:[`
`,e.jsx(r.li,{children:"Avoid more than 5 slices to keep clarity"}),`
`]}),`
`,e.jsx(n,{label:"Styling",level:2}),`
`,e.jsx(n,{label:"Structural elements",level:3}),`
`,e.jsx(r.p,{children:"For structural elements, here are the expected values to apply:"}),`
`,e.jsxs(_,{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{scope:"col",children:"Element"}),e.jsx("th",{scope:"col",children:"Token"}),e.jsx("th",{scope:"col",children:"Color"}),e.jsx("th",{scope:"col",children:"Preview"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:"Background"}),e.jsx("td",{children:e.jsx("code",{children:"--ods-theme-chart-background-color"})}),e.jsx("td",{children:e.jsx("code",{children:"#ffffff"})}),e.jsx("td",{children:e.jsx(t,{token:{name:"--ods-theme-chart-background-color",type:o.color,value:"#ffffff"}})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"Axis"}),e.jsx("td",{children:e.jsx("code",{children:"--ods-theme-chart-axis-color"})}),e.jsx("td",{children:e.jsx("code",{children:"#b3b3b3"})}),e.jsx("td",{children:e.jsx(t,{token:{name:"--ods-theme-chart-axis-color",type:o.color,value:"#b3b3b3"}})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"Ticks (axis labels)"}),e.jsx("td",{children:e.jsx("code",{children:"--ods-theme-chart-tick-color"})}),e.jsx("td",{children:e.jsx("code",{children:"#4d4d4d"})}),e.jsx("td",{children:e.jsx(t,{token:{name:"--ods-theme-chart-tick-color",type:o.color,value:"#4d4d4d"}})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"Legends"}),e.jsx("td",{children:e.jsx("code",{children:"--ods-theme-chart-legend-color"})}),e.jsx("td",{children:e.jsx("code",{children:"#4d4d4d"})}),e.jsx("td",{children:e.jsx(t,{token:{name:"--ods-theme-chart-legend-color",type:o.color,value:"#4d4d4d"}})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"Grids"}),e.jsx("td",{children:e.jsx("code",{children:"--ods-theme-chart-grid-color"})}),e.jsx("td",{children:e.jsx("code",{children:"#cccccc"})}),e.jsx("td",{children:e.jsx(t,{token:{name:"--ods-theme-chart-grid-color",type:o.color,value:"#cccccc"}})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"Reference Line"}),e.jsx("td",{children:e.jsx("code",{children:"--ods-theme-chart-reference-line-color"})}),e.jsx("td",{children:e.jsx("code",{children:"#bf0020"})}),e.jsx("td",{children:e.jsx(t,{token:{name:"--ods-theme-chart-reference-line-color",type:o.color,value:"#bf0020"}})})]})]})]}),`
`,e.jsxs(r.ul,{children:[`
`,e.jsx(r.li,{children:"Font-family must follow ODS pre-set for all text labelling"}),`
`,e.jsxs(r.li,{children:["Font-size minimum values to use are:",`
`,e.jsxs(r.ul,{children:[`
`,e.jsxs(r.li,{children:[e.jsx(r.strong,{children:"12px"})," for axis labels"]}),`
`,e.jsxs(r.li,{children:[e.jsx(r.strong,{children:"14px"})," for legends"]}),`
`,e.jsxs(r.li,{children:[e.jsx(r.strong,{children:"16px"})," for tooltip content"]}),`
`]}),`
`]}),`
`,e.jsx(r.li,{children:"ODS Tooltips must be used to define series data while hovering on values"}),`
`]}),`
`,e.jsx(n,{label:"Color scheme",level:2}),`
`,e.jsx(r.p,{children:"Use the following colors for your chart series, in the specified order:"}),`
`,e.jsx(x,{}),`
`,e.jsx(r.p,{children:"These colors are picked for their likelihood to be valid regarding color contrast ratio, and can be distinguished from one another."})]})}function Y(s={}){const{wrapper:r}={...h(),...s.components};return r?e.jsx(r,{...s,children:e.jsx(d,{...s})}):d(s)}export{Y as default};
