import{j as t,M as n,d as m}from"./index-DQsySnuC.js";import{u as i}from"./index-Xj8pMhSr.js";import{O as a}from"./index-CihiY_f6.js";import{H as p}from"./Heading-DDc_MF2r.js";import{S as s,O as c,a as d}from"./StorybookLink-CYVmf1as.js";import"./iframe-DRtgxPEL.js";import"../sb-preview/runtime.js";import"./index-8AfNH5n5.js";import"./index-D-8MO0q_.js";import"./index-DrFu-skq.js";import"./ods-accordion2-Bgg69lRV.js";import"./index-DAZhnxgO.js";import"./icon-name-C6aMXAXT.js";import"./ods-icon2-Bl6f3POv.js";import"./ods-badge-tHc24Eg4.js";import"./ods-breadcrumb-item2-CoLTn2CF.js";import"./ods-link2-DDMr4sUm.js";import"./ods-button2-Bhm26DQr.js";import"./ods-spinner2-DCN2yKlT.js";import"./ods-card-B_VebKXk.js";import"./ods-checkbox2-BOuFx8yF.js";import"./dom-CO1DdTQY.js";import"./ods-clipboard2-NuJn2ry3.js";import"./ods-input2-B9cw61K_.js";import"./type-B5zI8QxY.js";import"./ods-tooltip2-BwzEvmuE.js";import"./overlay-KZpfSxWH.js";import"./ods-code2-bZeM2NI-.js";import"./ods-datepicker2-DwwUrg1C.js";import"./locale-NOa-Gxlr.js";import"./ods-divider-3cgmT4wP.js";import"./ods-divider2-Dc25YIYb.js";import"./ods-drawer2-DsENZFv4.js";import"./ods-file-upload2-CPd6D9Z5.js";import"./ods-progress-bar2-BuFm8qT0.js";import"./ods-form-field2-Tc9B1-rj.js";import"./ods-icon-NURRZ9Mf.js";import"./ods-link-BE9dMQzg.js";import"./ods-medium2-BB_NU63C.js";import"./ods-message-B9bD81Bu.js";import"./ods-modal2-CP36WQeg.js";import"./ods-pagination2-CotgNPzL.js";import"./ods-select2-B4wr0dem.js";import"./ods-password2-BQKXsiEd.js";import"./ods-phone-number2-D1K1HcDS.js";import"./ods-popover2-hre_XUC2.js";import"./ods-quantity2-DOjRn13r.js";import"./ods-radio2-BtBodUES.js";import"./ods-range2-BhwU834C.js";import"./ods-skeleton2-dZcgHYAN.js";import"./ods-switch-item2-m1p75_3x.js";import"./ods-tabs2-wJlXfoZt.js";import"./ods-table2-vWlGUOoj.js";import"./ods-tag2-Dj0-zHXw.js";import"./ods-text-CTeC-41B.js";import"./ods-textarea2-BHQdu6bK.js";import"./ods-timepicker2-2oCWgeQp.js";import"./ods-toggle2-DbSuYqWU.js";import"./index-DCBH0_Tl.js";function e(r){const o={code:"code",p:"p",...i(),...r.components};return t.jsxs(t.Fragment,{children:[t.jsx(n,{title:"ODS Components/Search Bar"}),`
`,t.jsx(p,{label:"Search Bar - migrate from v17 to v18",level:1}),`
`,t.jsxs(o.p,{children:["Search Bar has been removed from ODS components. ",t.jsx(a,{color:"critical",label:"Removed",size:"sm"})]}),`
`,t.jsx(o.p,{children:`The component wasn't bringing any meaningful value and was not flexible enough regarding the different use cases
that may exist.`}),`
`,t.jsxs(o.p,{children:["As an alternative to the Search Bar component, a similar functionality can be achieved using the ",t.jsx(s,{kind:c.input,label:"ods-input",story:d.documentation})," component with the ",t.jsx(o.code,{children:"search"})," type."]}),`
`,t.jsx(o.p,{children:`If you need to replace the previous search-bar, you can achieve the same result with the existing components,
here is a quick example:`}),`
`,t.jsx(m,{code:`
<style>
    .search-bar {
      display: grid;
      grid-template-columns: max-content 1fr max-content;
    }

    .search-bar__input::part(input) {
      border-radius: 0;
      border-left: 0;
    }

    .search-bar__button::part(button) {
      border-top-left-radius: 0;
      border-bottom-left-radius: 0;
    }
  </style>

<div class="search-bar">
  <ods-select border-rounded="left"
              dropdown-width="auto">
    <option value="filter-1">Some filter</option>
    <!-- ... -->
  </ods-select>

  <ods-input class="search-bar__input">
  </ods-input>

  <ods-button class="search-bar__button"
              icon="magnifying-glass"
              size="sm">
  </ods-button>
</div>
`,dark:"true",language:"html"})]})}function xt(r={}){const{wrapper:o}={...i(),...r.components};return o?t.jsx(o,{...r,children:t.jsx(e,{...r})}):e(r)}export{xt as default};
