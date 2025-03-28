import{j as t,M as p,d as n}from"./index-DHunZMd9.js";import{u as i}from"./index-DogUcu-a.js";import{O as s}from"./index-CuZhG6y0.js";import{H as m}from"./Heading-BEqqWbQS.js";import"./iframe-CrJ6auLd.js";import"../sb-preview/runtime.js";import"./index-8AfNH5n5.js";import"./index-D-8MO0q_.js";import"./index-DrFu-skq.js";import"./ods-accordion2-vvZNAi9U.js";import"./index-DAZhnxgO.js";import"./icon-name-C6aMXAXT.js";import"./ods-icon2-DRPHarK1.js";import"./ods-badge-CjbpLGl8.js";import"./ods-breadcrumb-item2-C_Ah5FZN.js";import"./ods-link2-CtVFUlMR.js";import"./ods-button2-dPaqs0uX.js";import"./ods-spinner2-CPyWCS2f.js";import"./ods-card-DRGl4_I-.js";import"./ods-checkbox2-B2XbvOPY.js";import"./dom-8hoR-urs.js";import"./ods-clipboard2-Baifk8Bb.js";import"./ods-input2-CtkWk4I-.js";import"./type-B5zI8QxY.js";import"./ods-tooltip2-CW12aP9b.js";import"./overlay-KZpfSxWH.js";import"./ods-code2-D4zmvcg_.js";import"./ods-combobox2-D8tERt2s.js";import"./_commonjsHelpers-CLD5em3H.js";import"./debounce-DRefBDpX.js";import"./ods-tag2-Bb2BMy9d.js";import"./ods-datepicker2-FisogS88.js";import"./locale-NOa-Gxlr.js";import"./ods-divider-CjaMxjcH.js";import"./ods-divider2-R3gNNk4H.js";import"./ods-drawer2-BQqpNIWL.js";import"./ods-file-upload2-teF1qz6H.js";import"./ods-progress-bar2-zR9YGHZb.js";import"./ods-form-field2-BSNGPVxz.js";import"./ods-icon-DTp5PnPI.js";import"./ods-input-COMKDAZi.js";import"./ods-link-BCeMi6SV.js";import"./ods-medium2-BnayTic8.js";import"./ods-message-BxLNJd0H.js";import"./ods-modal2-BQO4yvXA.js";import"./ods-pagination2-BkxTbhCC.js";import"./ods-select2-C8koqTnw.js";import"./ods-password2-aWfdhtsQ.js";import"./ods-phone-number2-Cl3w5q8v.js";import"./ods-popover2-D09FwiGN.js";import"./ods-quantity2-BgFzW1u9.js";import"./ods-radio2-C2vNRNiP.js";import"./ods-range2-l-uevN51.js";import"./ods-skeleton2-B7sDasgF.js";import"./ods-switch-item2-ebcV2EUF.js";import"./ods-tabs2-BNbhFfmR.js";import"./ods-table2-oe37kiP3.js";import"./ods-text-BO_pN8NQ.js";import"./ods-textarea2-BDOVTqwb.js";import"./ods-timepicker2-DSjpZYdI.js";import"./ods-toggle2-Bg02aln1.js";import"./index-DZK8KyWG.js";function r(e){const o={code:"code",p:"p",...i(),...e.components};return t.jsxs(t.Fragment,{children:[t.jsx(p,{title:"ODS Components/Content Addon"}),`
`,t.jsx(m,{label:"Content Addon - migrate from v17 to v18",level:1}),`
`,t.jsxs(o.p,{children:["Content Addon has been removed from ODS components. ",t.jsx(s,{color:"critical",label:"Removed",size:"sm"})]}),`
`,t.jsx(o.p,{children:"The same behaviour can be achieved with simple CSS."}),`
`,t.jsx(o.p,{children:"Let's take an example of the content-addon usage:"}),`
`,t.jsx(n,{code:`
<osds-content-addon>
  <span slot="top">top</span>
  <span slot="start">start</span>
  <span slot="main">main</span>
  <span slot="end">end</span>
  <span slot="bottom">bottom</span>
</osds-content-addon>
`,dark:"true",language:"html"}),`
`,t.jsxs(o.p,{children:["If we observe closely, we can see that both ",t.jsx(o.code,{children:"top"})," and ",t.jsx(o.code,{children:"bottom"}),` element doesn't even need any specific style
as they follow the natural rendering workflow (vertical from top to bottom).`]}),`
`,t.jsxs(o.p,{children:["Let's focus then on the middle part, you can for example use ",t.jsx(o.code,{children:"grid"})," to reproduce the same three columns layout:"]}),`
`,t.jsx(n,{code:`
<style>
  .grid {
    display: grid;
    grid-template-columns: auto auto auto;
  }
</style>

<div>top</div>
<div class='grid'>
  <span>start</span>
  <span>main</span>
  <span>end</span>
</div>
<div>bottom</div>
`,dark:"true",language:"html"}),`
`,t.jsxs(o.p,{children:["Or you can also use ",t.jsx(o.code,{children:"flex-flow"})," if you have a dynamic amount of columns:"]}),`
`,t.jsx(n,{code:`
<style>
  .flex {
    display: flex;
    flex-flow: row;
  }
</style>

<div>top</div>
<div class="grid">
  <span>start</span>
  <span>main 1</span>
  <span>main 2</span>
  <span>end</span>
</div>
<div>bottom</div>
`,dark:"true",language:"html"})]})}function vt(e={}){const{wrapper:o}={...i(),...e.components};return o?t.jsx(o,{...e,children:t.jsx(r,{...e})}):r(e)}export{vt as default};
