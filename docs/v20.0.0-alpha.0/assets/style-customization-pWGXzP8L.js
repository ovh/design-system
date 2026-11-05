import{i as e}from"./rolldown-runtime-Dd_uD5pT.js";import{t}from"./jsx-runtime-DREnUpxT.js";import{T as n}from"./index-CdRG7ZE_.js";var r=e(t());function i(e){let t={code:`code`,p:`p`,pre:`pre`,...n(),...e.components},{DocLink:i,ExternalLink:a,Heading:s,Message:c,MessageBody:l,MessageIcon:u}=t;return i||o(`DocLink`,!0),a||o(`ExternalLink`,!0),s||o(`Heading`,!0),c||o(`Message`,!0),l||o(`MessageBody`,!0),u||o(`MessageIcon`,!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.p,{children:`Although ODS components comes with the expected designs, it is sometime useful to customize the rendering of a component
to fit your context.`}),`
`,(0,r.jsx)(t.p,{children:`Here we'll describe different ways to customize an ODS component.`}),`
`,(0,r.jsx)(s,{label:`Apply style directly on the component`,level:2}),`
`,(0,r.jsx)(t.p,{children:`The ODS component host behave like any other React element, so you can apply a class directly to it.`}),`
`,(0,r.jsxs)(t.p,{children:[`For example, if you want to display a vertical list of `,(0,r.jsx)(t.code,{children:`Link`}),`, you can override the inline default display:`]}),`
`,(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:`language-html`,children:`<Link className="custom-link">
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
`})}),`
`,(0,r.jsxs)(c,{status:`warning`,dismissible:!1,children:[(0,r.jsx)(u,{name:`triangle-exclamation`}),(0,r.jsxs)(l,{children:[(0,r.jsx)(t.p,{children:`As there is no shadow DOM anymore, all of the component DOM can be targeted through CSS selectors.
It is advised to not rely on cascading selector, as the DOM structure may evolve from one version to another.`}),(0,r.jsx)(`br`,{}),(0,r.jsx)(t.p,{children:`To ensure reliable CSS, use a specific className on the component you want to customize.`}),(0,r.jsx)(`br`,{}),(0,r.jsxs)(t.p,{children:[`If you want to specifically target underneath elements, you can rely on some `,(0,r.jsx)(a,{href:`https://developer.mozilla.org/en-US/docs/Web/HTML/How_to/Use_data_attributes#css_access`,children:`data attribute`}),`, we'll update the documentation about those soon.`]})]})]}),`
`,(0,r.jsx)(s,{label:`Reuse existing ODS style`,level:2}),`
`,(0,r.jsx)(t.p,{children:`In some cases where you cannot use an ODS component, you may want one of your own components to look like an ODS component
(for example, when using an external library that doesn't allow custom templating).`}),`
`,(0,r.jsxs)(t.p,{children:[`We did expose a bunch of `,(0,r.jsx)(a,{href:`https://sass-lang.com`,children:`Sass`}),` mixins that allows you to easily apply the ODS style to your own elements.`]}),`
`,(0,r.jsxs)(t.p,{children:[`For example, if you need to make an anchor tag looks like a `,(0,r.jsx)(t.code,{children:`Link`}),`:`]}),`
`,(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:`language-scss`,children:`@use '@ovhcloud/ods-react/style' as ods;

.my-link {
  @include ods.ods-link();
}
`})}),`
`,(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:`language-html`,children:`<a class="my-link"></a>
`})}),`
`,(0,r.jsx)(s,{label:`CSS variables`,level:2}),`
`,(0,r.jsxs)(t.p,{children:[`All ODS components are using common design tokens, that are accessible through `,(0,r.jsx)(a,{href:`https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties`,children:`CSS variables`}),`.`]}),`
`,(0,r.jsxs)(t.p,{children:[`We do advise to reuse those variables on your own style, this way your application follows the theme it loads, as the ODS components do (see `,(0,r.jsx)(i,{to:`/guides/themes`,children:`Themes`}),`).`]}),`
`,(0,r.jsxs)(t.p,{children:[`You can find the whole list on the `,(0,r.jsx)(i,{to:`/guides/design-tokens`,children:`Design Tokens`}),` documentation page.`]}),`
`,(0,r.jsx)(t.p,{children:`Example of CSS variables:`}),`
`,(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:`language-html`,children:`<h1 class="my-own-page-title">
  Welcome page
</h1>

<style>
  .my-own-page-title {
    color: var(--ods-semantic-color-content-brand);
  }
</style>
`})})]})}function a(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(i,{...e})}):i(e)}function o(e,t){throw Error(`Expected `+(t?`component`:`object`)+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}export{a as default};