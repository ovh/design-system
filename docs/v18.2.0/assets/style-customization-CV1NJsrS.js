import{j as e}from"./jsx-runtime-CtvdRJNw.js";import{u as i}from"./index-BB9dT2Es.js";import{a as s}from"./index-96Y3MfGk.js";import{M as r,d as t}from"./index-B52cN8Ji.js";import{H as l}from"./Heading-DkXmkwCf.js";import"./iframe-DOFBAWyz.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-B_J8iUie.js";import"./index-DX_4BEHg.js";import"./index-DrFu-skq.js";import"./index-CnlqR0TT.js";function a(n){const o={code:"code",p:"p",...i(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{title:"OVHcloud Design System/Design and Style/Style Customization"}),`
`,e.jsx(l,{label:"Style Customization",level:1}),`
`,e.jsx(o.p,{children:`Although ODS components comes with the expected designs, it is sometime useful to customize the rendering of a component
to fit your context.`}),`
`,e.jsx(o.p,{children:"Here we'll describe different ways to customize an ODS component."}),`
`,e.jsx(l,{label:"Apply style directly on the web-component",level:2}),`
`,e.jsx(o.p,{children:"The web-component host behave like any other element in your DOM, so you can apply a class directly to it."}),`
`,e.jsxs(o.p,{children:["For example, if you want to display a vertical list of ",e.jsx(o.code,{children:"ods-link"}),", you can override the inline default display:"]}),`
`,e.jsx(t,{code:`
<ods-link class="custom-link"
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
`,dark:"true",language:"html"}),`
`,e.jsx(l,{label:"Apply style to its shadow DOM element",level:2}),`
`,e.jsx(o.p,{children:"If updating the host element is not enough, you may customize directly some specific part of the component internal DOM."}),`
`,e.jsxs(o.p,{children:["If a component exposes some part, you can apply your own style using the ",e.jsx(s,{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/::part",label:"part",target:"_blank"})," selector."]}),`
`,e.jsx(o.p,{children:"For example, if you want to create a badge with a specific color that is not provided:"}),`
`,e.jsx(t,{code:`
<ods-badge class="custom-badge"
           label="My badge"></ods-badge>

<style>
  .custom-badge::part(badge) {
    background-color: #ff00ff;
  }
</style>
`,dark:"true",language:"html"}),`
`,e.jsxs(o.p,{children:["To know precisely which parts are available for a specific component, please refer to its ",e.jsx(o.code,{children:"Technical information"})," page."]}),`
`,e.jsx(l,{label:"Reuse existing ODS style",level:2}),`
`,e.jsx(o.p,{children:`In some case where you cannot use an ODS component, you may want one of your own component to look like an ODS component
(for example, when using an external library that doesn't allow custom templating).`}),`
`,e.jsxs(o.p,{children:["We did expose a bunch of ",e.jsx(s,{href:"https://sass-lang.com",label:"Sass",target:"_blank"})," mixins that allows you to easily apply the ODS style to your own elements."]}),`
`,e.jsxs(o.p,{children:["For example, if you need to make an anchor tag looks like an ",e.jsx(o.code,{children:"ods-link"}),":"]}),`
`,e.jsx(t,{code:`
@import '@ovhcloud/ods-components/style';

.my-link {
  @include ods-link();
  @include ods-link-color('primary');
}
`,dark:"true",language:"css"}),`
`,e.jsx(t,{code:'<a class="my-link" ...>...</a>',dark:"true",language:"html"}),`
`,e.jsx(l,{label:"CSS variables",level:2}),`
`,e.jsxs(o.p,{children:["All ODS components are using common design tokens, that are accessible through ",e.jsx(s,{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties",label:"CSS variables",target:"_blank"}),"."]}),`
`,e.jsx(o.p,{children:`We do advise to reuse those variables on your own style, this way your application will automatically be updated on current
theme changes or when new themes will be released.`}),`
`,e.jsxs(o.p,{children:["You can find the whole list on the ",e.jsx(o.code,{children:":root"})," of your application page."]}),`
`,e.jsx(o.p,{children:"Example of CSS variables:"}),`
`,e.jsx(t,{code:`
<h1 class="my-own-page-title">
  Welcome page
</h1>

<style>
  .my-own-page-title {
    color: var(--ods-color-primary-500);
  }
</style>
`,dark:"true",language:"html"})]})}function k(n={}){const{wrapper:o}={...i(),...n.components};return o?e.jsx(o,{...n,children:e.jsx(a,{...n})}):a(n)}export{k as default};
