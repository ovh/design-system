import{j as e}from"./jsx-runtime-BSm7YJ_y.js";import{useMDXComponents as i}from"./index-CUkz9CBV.js";import{r as l}from"./ods-react-CYmC8DRO.js";import{M as r,S as t}from"./index-Ad1vjMe7.js";import{H as s}from"./Heading-RrL0wZ2g.js";import{S as c,H as m}from"./StorybookLink-CSvrJ6Z1.js";import"./index-E9JSHJbc.js";import"./iframe-ZxD9YLZr.js";import"./index-DOJIDNlS.js";import"./index-DZAg5o-f.js";import"./index-CXQShRbs.js";import"./index-DrFu-skq.js";function a(o){const n={code:"code",p:"p",...i(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{title:"OVHcloud Design System/Design and Style/Style Customization"}),`
`,e.jsx(s,{label:"Style Customization",level:1}),`
`,e.jsx(n.p,{children:`Although ODS components comes with the expected designs, it is sometime useful to customize the rendering of a component
to fit your context.`}),`
`,e.jsx(n.p,{children:"Here we'll describe different ways to customize an ODS component."}),`
`,e.jsx(s,{label:"Apply style directly on the component",level:2}),`
`,e.jsx(n.p,{children:"The ODS component host behave like any other React element, so you can apply a class directly to it."}),`
`,e.jsxs(n.p,{children:["For example, if you want to display a vertical list of ",e.jsx(n.code,{children:"ods-link"}),", you can override the inline default display:"]}),`
`,e.jsx(t,{code:`
<OdsLink className="custom-link">
  My link 1
</OdsLink>
<OdsLink className="custom-link">
  My link 2
</OdsLink>
<style>
  .custom-link {
    display: block;
  }
</style>
`,dark:"true",language:"html"}),`
`,e.jsx(s,{label:"Reuse existing ODS style",level:2}),`
`,e.jsx(n.p,{children:`In some case where you cannot use an ODS component, you may want one of your own component to look like an ODS component
(for example, when using an external library that doesn't allow custom templating).`}),`
`,e.jsxs(n.p,{children:["We did expose a bunch of ",e.jsx(l,{href:"https://sass-lang.com",target:"_blank",children:"Sass"})," mixins that allows you to easily apply the ODS style to your own elements."]}),`
`,e.jsxs(n.p,{children:["For example, if you need to make an anchor tag looks like an ",e.jsx(n.code,{children:"OdsLink"}),":"]}),`
`,e.jsx(t,{code:`
@import '@ovhcloud/ods-components/style';

.my-link {
  @include ods-link();
  @include ods-link-color('primary');
}
`,dark:"true",language:"css"}),`
`,e.jsx(t,{code:'<a class="my-link"></a>',dark:"true",language:"html"}),`
`,e.jsx(s,{label:"CSS variables",level:2}),`
`,e.jsxs(n.p,{children:["All ODS components are using common design tokens, that are accessible through ",e.jsx(l,{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties",target:"_blank",children:"CSS variables"}),"."]}),`
`,e.jsx(n.p,{children:`We do advise to reuse those variables on your own style, this way your application will automatically be updated on current
theme changes or when new themes will be released.`}),`
`,e.jsxs(n.p,{children:["You can find the whole list on the ",e.jsx(c,{title:m.designTokens,children:"Design Tokens"})," documentation page."]}),`
`,e.jsx(n.p,{children:"Example of CSS variables:"}),`
`,e.jsx(t,{code:`
<h1 class="my-own-page-title">
  Welcome page
</h1>

<style>
  .my-own-page-title {
    color: var(--ods-color-primary-500);
  }
</style>
`,dark:"true",language:"html"})]})}function b(o={}){const{wrapper:n}={...i(),...o.components};return n?e.jsx(n,{...o,children:e.jsx(a,{...o})}):a(o)}export{b as default};
