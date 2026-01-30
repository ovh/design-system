import{j as e}from"./jsx-runtime-Cfl8ynUo.js";import{useMDXComponents as i}from"./index-ZwkxtaJJ.js";import{l as r}from"./ods-react67-C395g5lW.js";import{a as c}from"./ods-react273-aAAP9SXj.js";import{h as m,R as d,O as p}from"./MessageIcon-lA6WWfUc-CQTnIIok.js";import{M as h,S as t}from"./index-Cw5r0Kn8.js";import{E as l}from"./ExternalLink-C5hGBmwh.js";import{H as s}from"./Heading-Dep_rTif.js";import{S as u}from"./StorybookLink-DQwP2BEI.js";import{H as y}from"./meta-DcQbZjt_.js";import"./index-jIWwRBLr.js";import"./index-CWkFp9WS-BSIT86NH.js";import"./useI18n-DC7LnvI--D3eFcqGA.js";import"./ods-react108-l5fgq-IX.js";import"./iframe-DCzti3mm.js";import"./index-DWDEzXrj.js";import"./index-N93khynk.js";import"./index-CXQShRbs.js";import"./index-DrFu-skq.js";import"./Link-TMoA1i18-BDwROQOD.js";import"./Divider-wQyo85oE-CpSK6tnQ.js";import"./index-CSeLFT3z.js";function a(n){const o={code:"code",p:"p",...i(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(h,{title:"OVHcloud Design System/Design and Style/Style Customization"}),`
`,e.jsx(s,{label:"Style Customization",level:1}),`
`,e.jsx(o.p,{children:`Although ODS components comes with the expected designs, it is sometime useful to customize the rendering of a component
to fit your context.`}),`
`,e.jsx(o.p,{children:"Here we'll describe different ways to customize an ODS component."}),`
`,e.jsx(s,{label:"Apply style directly on the component",level:2}),`
`,e.jsx(o.p,{children:"The ODS component host behave like any other React element, so you can apply a class directly to it."}),`
`,e.jsxs(o.p,{children:["For example, if you want to display a vertical list of ",e.jsx(o.code,{children:"Link"}),", you can override the inline default display:"]}),`
`,e.jsx(t,{code:`
<Link className="custom-link">
  My link 1
</Link>
<Link className="custom-link">
  My link 2
</Link>
<style>
  .custom-link {
    display: block;
  }
</style>
`,dark:"true",language:"html"}),`
`,e.jsxs(m,{color:c.warning,dismissible:!1,children:[e.jsx(d,{name:r.triangleExclamation}),e.jsxs(p,{children:[e.jsx(o.p,{children:`As there is no shadow DOM anymore, all of the component DOM can be targeted through CSS selectors.
It is advised to not rely on cascading selector, as the DOM structure may evolve from one version to another.`}),e.jsx("br",{}),e.jsx(o.p,{children:"To ensure reliable CSS, use a specific className on the component you want to customize."}),e.jsx("br",{}),e.jsxs(o.p,{children:["If you want to specifically target underneath elements, you can rely on some ",e.jsx(l,{href:"https://developer.mozilla.org/en-US/docs/Web/HTML/How_to/Use_data_attributes#css_access",children:"data attribute"}),", we'll update the documentation about those soon."]})]})]}),`
`,e.jsx(s,{label:"Reuse existing ODS style",level:2}),`
`,e.jsx(o.p,{children:`In some cases where you cannot use an ODS component, you may want one of your own components to look like an ODS component
(for example, when using an external library that doesn't allow custom templating).`}),`
`,e.jsxs(o.p,{children:["We did expose a bunch of ",e.jsx(l,{href:"https://sass-lang.com",children:"Sass"})," mixins that allows you to easily apply the ODS style to your own elements."]}),`
`,e.jsxs(o.p,{children:["For example, if you need to make an anchor tag looks like a ",e.jsx(o.code,{children:"Link"}),":"]}),`
`,e.jsx(t,{code:`
@import '@ovhcloud/ods-components/style';

.my-link {
  @include ods-link();
  @include ods-link-color('primary');
}
`,dark:"true",language:"css"}),`
`,e.jsx(t,{code:'<a class="my-link"></a>',dark:"true",language:"html"}),`
`,e.jsx(s,{label:"CSS variables",level:2}),`
`,e.jsxs(o.p,{children:["All ODS components are using common design tokens, that are accessible through ",e.jsx(l,{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties",children:"CSS variables"}),"."]}),`
`,e.jsx(o.p,{children:`We do advise to reuse those variables on your own style, this way your application will automatically be updated on current
theme changes or when new themes will be released.`}),`
`,e.jsxs(o.p,{children:["You can find the whole list on the ",e.jsx(u,{title:y.designTokens,children:"Design Tokens"})," documentation page."]}),`
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
`,dark:"true",language:"html"})]})}function R(n={}){const{wrapper:o}={...i(),...n.components};return o?e.jsx(o,{...n,children:e.jsx(a,{...n})}):a(n)}export{R as default};
