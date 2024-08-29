import{j as e}from"./jsx-runtime-Dn0LW--f.js";import{u as l}from"./index-DeyDdHvX.js";import{M as t}from"./index-BM3JsZOq.js";import"./iframe-6_jBXMSq.js";import"../sb-preview/runtime.js";import"./commonjsHelpers-Cpj98o6Y.js";import"./index-B_J8iUie.js";import"./index-DX_4BEHg.js";import"./index-DrFu-skq.js";function s(o){const n={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...l(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(t,{title:"OVHcloud Design System/Design and Style/Style Customization"}),`
`,e.jsx(n.h1,{id:"style-customization",children:"Style Customization"}),`
`,e.jsx(n.p,{children:`Although ODS components comes with the expected designs, it is sometime useful to customize the rendering of a component
to fit your context.`}),`
`,e.jsx(n.p,{children:"Here we'll describe different ways to customize an ODS component."}),`
`,e.jsx(n.h2,{id:"apply-style-directly-on-the-web-component",children:"Apply style directly on the web-component"}),`
`,e.jsx(n.p,{children:"The web-component host behave like any other element in your DOM, so you can apply a class directly to it."}),`
`,e.jsxs(n.p,{children:["For example, if you want to display a vertical list of ",e.jsx(n.code,{children:"ods-link"}),", you can override the inline default display:"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<ods-link class="custom-link"
          href="..."
          label="my-link-1" />
<ods-link class="custom-link"
          href="..."
          label="my-link-2" />

<style>
  .custom-link {
    display: block;
  }
</style>
`})}),`
`,e.jsx(n.h2,{id:"apply-style-to-its-shadow-dom-element",children:"Apply style to its shadow DOM element"}),`
`,e.jsx(n.p,{children:"If updating the host element is not enough, you may customize directly some specific part of the component internal DOM."}),`
`,e.jsxs(n.p,{children:["If a component exposes some part, you can apply your own style using the ",e.jsx(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/::part",rel:"nofollow",children:"part"})," selector."]}),`
`,e.jsx(n.p,{children:"For example, if you want to create a badge with a specific color that is not provided:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<ods-badge class="custom-badge"
           label="My badge"></ods-badge>

<style>
  .custom-badge::part(badge) {
    background-color: #ff00ff;
  }
</style>
`})}),`
`,e.jsxs(n.p,{children:["To know precisely which parts are available for a specific component, please refer to its ",e.jsx(n.code,{children:"Technical information"})," page."]}),`
`,e.jsx(n.h2,{id:"reuse-existing-ods-style",children:"Reuse existing ODS style"}),`
`,e.jsx(n.p,{children:`In some case where you cannot use an ODS component, you may want one of your own component to look like an ODS component
(for example, when using an external library that doesn't allow custom templating).`}),`
`,e.jsxs(n.p,{children:["We did expose a bunch of ",e.jsx(n.a,{href:"https://sass-lang.com",rel:"nofollow",children:"Sass"})," mixins that allows you to easily apply the ODS style to your own elements."]}),`
`,e.jsxs(n.p,{children:["For example, if you need to make an anchor tag looks like an ",e.jsx(n.code,{children:"ods-link"}),":"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-scss",children:`@import '@ovhcloud/ods-components/style';

.my-link {
  @include ods-link();
  @include ods-link-color('primary');
}
`})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<a class="my-link" ...>...</a>
`})}),`
`,e.jsx(n.h2,{id:"css-variables",children:"CSS variables"}),`
`,e.jsxs(n.p,{children:["All ODS components are using common design tokens, that are accessible through ",e.jsx(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties",rel:"nofollow",children:"CSS variables"}),"."]}),`
`,e.jsx(n.p,{children:`We do advise to reuse those variables on your own style, this way your application will automatically be updated on current
theme changes or when new themes will be released.`}),`
`,e.jsxs(n.p,{children:["You can find the whole list on the ",e.jsx(n.code,{children:":root"})," of your application page."]}),`
`,e.jsx(n.p,{children:"Example of CSS variables:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<h1 class="my-own-page-title">
  Welcome page
</h1>

<style>
  .my-own-page-title {
    color: var(--ods-color-primary-500);
  }
</style>
`})})]})}function u(o={}){const{wrapper:n}={...l(),...o.components};return n?e.jsx(n,{...o,children:e.jsx(s,{...o})}):s(o)}export{u as default};
