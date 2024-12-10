import{j as e,M as a,d as s}from"./index-Rx6QkXSv.js";import{u as r}from"./index-DPrOAYpY.js";import{O as i}from"./index-BJiUJsri.js";import{H as c}from"./Heading-2XnXa8MH.js";import{S as m}from"./StorybookLink-YE2HEeNv.js";import"./iframe-HwRW2g_s.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-D-8MO0q_.js";import"./index-DX_4BEHg.js";import"./index-DrFu-skq.js";import"./index-Dqa08QUn.js";function n(o){const t={code:"code",p:"p",...r(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{title:"ODS Components/Search Bar"}),`
`,e.jsx(c,{label:"Search Bar - migrate from v17 to v18",level:1}),`
`,e.jsxs(t.p,{children:["Search Bar has been removed from ODS components. ",e.jsx(i,{color:"critical",label:"Removed",size:"sm"})]}),`
`,e.jsx(t.p,{children:`The component wasn't bringing any meaningful value and was not flexible enough regarding the different use cases
that may exist.`}),`
`,e.jsxs(t.p,{children:["As an alternative to the Search Bar component, a similar functionality can be achieved using the ",e.jsx(m,{kind:"ODS Components/Form elements/Input",label:"ods-input",story:"Documentation"})," component with the ",e.jsx(t.code,{children:"search"})," type."]}),`
`,e.jsx(t.p,{children:`If you need to replace the previous search-bar, you can achieve the same result with the existing components,
here is a quick example:`}),`
`,e.jsx(s,{code:`
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
`,dark:"true",language:"html"})]})}function S(o={}){const{wrapper:t}={...r(),...o.components};return t?e.jsx(t,{...o,children:e.jsx(n,{...o})}):n(o)}export{S as default};
