import{j as e}from"./jsx-runtime-CtvdRJNw.js";import{u as n}from"./index-BB9dT2Es.js";import{O as a}from"./index-96Y3MfGk.js";import{M as s,d as i}from"./index-B52cN8Ji.js";import{H as m}from"./Heading-DkXmkwCf.js";import"./iframe-DOFBAWyz.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-B_J8iUie.js";import"./index-DX_4BEHg.js";import"./index-DrFu-skq.js";import"./index-CnlqR0TT.js";function o(t){const r={p:"p",...n(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"ODS Components/Search Bar"}),`
`,e.jsx(m,{label:"Search Bar - migrate from v17 to v18",level:1}),`
`,e.jsxs(r.p,{children:["Search Bar has been removed from ODS components. ",e.jsx(a,{color:"critical",label:"Removed",size:"sm"})]}),`
`,e.jsx(r.p,{children:`The component wasn't bringing any meaningful value and was not flexible enough regarding the different use cases
that may exist.`}),`
`,e.jsx(r.p,{children:`If you need to replace the previous search-bar, you can achieve the same result with the existing components,
here is a quick example:`}),`
`,e.jsx(i,{code:`
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
`,dark:"true",language:"html"})]})}function _(t={}){const{wrapper:r}={...n(),...t.components};return r?e.jsx(r,{...t,children:e.jsx(o,{...t})}):o(t)}export{_ as default};
