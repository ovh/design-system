import{j as n}from"./jsx-runtime-C_5uCoOk.js";import{u as o}from"./index-BNSrq6w-.js";import{M as s}from"./index-DnV51lgW.js";import"./iframe-Cm7AUSBL.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-B_J8iUie.js";import"./index-DX_4BEHg.js";import"./index-DrFu-skq.js";function r(t){const e={code:"code",h1:"h1",hr:"hr",p:"p",pre:"pre",...o(),...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(s,{title:"ODS Components/Search Bar"}),`
`,n.jsx(e.h1,{id:"search-bar---migrate-from-v17-to-v18",children:"Search Bar - migrate from v17 to v18"}),`
`,n.jsx(e.hr,{}),`
`,n.jsxs(e.p,{children:["Search Bar has been removed from ODS components. ",n.jsx("img",{src:"https://img.shields.io/badge/removed-FF0000"})]}),`
`,n.jsx(e.p,{children:`The component wasn't bringing any meaningful value and was not flexible enough regarding the different use cases
that may exist.`}),`
`,n.jsx(e.p,{children:`If you need to replace the previous search-bar, you can achieve the same result with the existing components,
here is a quick example:`}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-html",children:`<style>
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
`})})]})}function b(t={}){const{wrapper:e}={...o(),...t.components};return e?n.jsx(e,{...t,children:n.jsx(r,{...t})}):r(t)}export{b as default};
