import{j as o,M as m}from"./index-DHunZMd9.js";import{u as n}from"./index-DogUcu-a.js";import{O as p}from"./index-CuZhG6y0.js";import{H as i}from"./Heading-BEqqWbQS.js";import"./iframe-CrJ6auLd.js";import"../sb-preview/runtime.js";import"./index-8AfNH5n5.js";import"./index-D-8MO0q_.js";import"./index-DrFu-skq.js";import"./ods-accordion2-vvZNAi9U.js";import"./index-DAZhnxgO.js";import"./icon-name-C6aMXAXT.js";import"./ods-icon2-DRPHarK1.js";import"./ods-badge-CjbpLGl8.js";import"./ods-breadcrumb-item2-C_Ah5FZN.js";import"./ods-link2-CtVFUlMR.js";import"./ods-button2-dPaqs0uX.js";import"./ods-spinner2-CPyWCS2f.js";import"./ods-card-DRGl4_I-.js";import"./ods-checkbox2-B2XbvOPY.js";import"./dom-8hoR-urs.js";import"./ods-clipboard2-Baifk8Bb.js";import"./ods-input2-CtkWk4I-.js";import"./type-B5zI8QxY.js";import"./ods-tooltip2-CW12aP9b.js";import"./overlay-KZpfSxWH.js";import"./ods-code2-D4zmvcg_.js";import"./ods-combobox2-D8tERt2s.js";import"./_commonjsHelpers-CLD5em3H.js";import"./debounce-DRefBDpX.js";import"./ods-tag2-Bb2BMy9d.js";import"./ods-datepicker2-FisogS88.js";import"./locale-NOa-Gxlr.js";import"./ods-divider-CjaMxjcH.js";import"./ods-divider2-R3gNNk4H.js";import"./ods-drawer2-BQqpNIWL.js";import"./ods-file-upload2-teF1qz6H.js";import"./ods-progress-bar2-zR9YGHZb.js";import"./ods-form-field2-BSNGPVxz.js";import"./ods-icon-DTp5PnPI.js";import"./ods-input-COMKDAZi.js";import"./ods-link-BCeMi6SV.js";import"./ods-medium2-BnayTic8.js";import"./ods-message-BxLNJd0H.js";import"./ods-modal2-BQO4yvXA.js";import"./ods-pagination2-BkxTbhCC.js";import"./ods-select2-C8koqTnw.js";import"./ods-password2-aWfdhtsQ.js";import"./ods-phone-number2-Cl3w5q8v.js";import"./ods-popover2-D09FwiGN.js";import"./ods-quantity2-BgFzW1u9.js";import"./ods-radio2-C2vNRNiP.js";import"./ods-range2-l-uevN51.js";import"./ods-skeleton2-B7sDasgF.js";import"./ods-switch-item2-ebcV2EUF.js";import"./ods-tabs2-BNbhFfmR.js";import"./ods-table2-oe37kiP3.js";import"./ods-text-BO_pN8NQ.js";import"./ods-textarea2-BDOVTqwb.js";import"./ods-timepicker2-DSjpZYdI.js";import"./ods-toggle2-Bg02aln1.js";import"./index-DZK8KyWG.js";function r(t){const e={code:"code",p:"p",...n(),...t.components};return o.jsxs(o.Fragment,{children:[o.jsx(m,{title:"ODS Components/Cart"}),`
`,o.jsx(i,{label:"Cart - migrate from v17 to v18",level:1}),`
`,o.jsxs(e.p,{children:["Cart has been removed from ODS components. ",o.jsx(p,{color:"critical",label:"Removed",size:"sm"})]}),`
`,o.jsx(e.p,{children:"This component was too specific to a custom need and comes with quite a lot of downsides."}),`
`,o.jsx(i,{label:"Current component issues",level:2}),`
`,o.jsx(i,{label:"Performance & Complexity",level:3}),`
`,o.jsx(e.p,{children:"The whole component was composed of 9 web-components, each with their own rendering lifecycle."}),`
`,o.jsx(e.p,{children:`Each of those were relying on DOM queries to update their states accordingly to their parents/siblings, which
can become quite problematic performance-wise.`}),`
`,o.jsx(e.p,{children:"Also, in order to use this component, the integrators had to learn about the 9 different interfaces and all their possible combinations."}),`
`,o.jsx(i,{label:"Internal logic",level:3}),`
`,o.jsx(e.p,{children:"ODS components tend to be presentational, thus the internal logic should be handled by the integrators."}),`
`,o.jsx(e.p,{children:"The current implementation of Cart was trying to enforce some of the logic (e.g. quantity computation)."}),`
`,o.jsx(i,{label:"How to use Cart in v18",level:2}),`
`,o.jsxs(e.p,{children:["This component is basically a very simple top-to-bottom layout, where each section can be rendered using ",o.jsx(e.code,{children:"ods-text"}),` or even
a simple text element. You can also use `,o.jsx(e.code,{children:"ods-divider"})," to add some separation if needed."]}),`
`,o.jsx(e.p,{children:"All the colors and style properties can be found in the exposed design tokens."})]})}function jo(t={}){const{wrapper:e}={...n(),...t.components};return e?o.jsx(e,{...t,children:o.jsx(r,{...t})}):r(t)}export{jo as default};
