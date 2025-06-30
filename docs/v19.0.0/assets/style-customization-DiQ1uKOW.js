import{j as e}from"./jsx-runtime-VM66peLj.js";import{useMDXComponents as x}from"./index-DQB45XCM.js";import{a as _,o as j}from"./ods-react60-Yebt9vXY.js";import{a as c}from"./ods-react214-B9lkGKUh.js";import{m as d}from"./index-2w0W-O47-BJ19ihbZ.js";import{r as u}from"./index-D_CmzhJ4.js";import{R as w,t as v,s as M}from"./Button-CK31IwsN-C14Iphzr.js";import{M as D,S as n}from"./index-CTRIvuAa.js";import{E as m}from"./ExternalLink-DJ00RbPw.js";import{H as l}from"./Heading-BKRI_kjA.js";import{S as N}from"./StorybookLink-DMr2bWgk.js";import{H as O}from"./meta-Ci0gAceS.js";import"./iframe-B1k00A9N.js";import"./index-ChzAxGiP.js";import"./index-CucsY3YN.js";import"./index-CXQShRbs.js";import"./index-DrFu-skq.js";import"./Link-D8k51sak-CbRDKo-E.js";var p=(o=>(o.default="default",o.light="light",o))(p||{});Object.freeze(Object.values(p));const q="_message_udq9t_2",C="_message__close_udq9t_57",i={message:q,"message--default":"_message--default_udq9t_9","message--critical":"_message--critical_udq9t_9","message--information":"_message--information_udq9t_13","message--neutral":"_message--neutral_udq9t_17","message--primary":"_message--primary_udq9t_21","message--success":"_message--success_udq9t_25","message--warning":"_message--warning_udq9t_29","message--light":"_message--light_udq9t_33",message__close:C},h=u.forwardRef(({children:o,className:s,color:a=c.information,dismissible:t=!0,onRemove:r,variant:b=p.default,...k},S)=>e.jsxs("div",{className:d(i.message,i[`message--${a}`],i[`message--${b}`],s),ref:S,...k,children:[o,t&&e.jsx(w,{className:i.message__close,color:c.neutral,onClick:r,size:M.xs,variant:v.ghost,children:e.jsx(_,{name:j.xmark})})]}));h.displayName="Message";const L={"message-body":"_message-body_fe7x3_2"},g=u.forwardRef(({children:o,className:s,...a},t)=>e.jsx("div",{className:d(L["message-body"],s),ref:t,...a,children:o}));g.displayName="MessageBody";const I={"message-icon":"_message-icon_mpgx8_2"},y=u.forwardRef(({children:o,className:s,name:a,...t},r)=>e.jsx(_,{className:d(I["message-icon"],s),name:a,ref:r,...t}));y.displayName="MessageIcon";h.__docgenInfo={description:"",methods:[],displayName:"Message",props:{color:{defaultValue:{value:"i.information",computed:!0},required:!1},dismissible:{defaultValue:{value:"!0",computed:!1},required:!1},variant:{defaultValue:{value:"q.default",computed:!0},required:!1}}};g.__docgenInfo={description:"",methods:[],displayName:"MessageBody"};y.__docgenInfo={description:"",methods:[],displayName:"MessageIcon"};function f(o){const s={code:"code",p:"p",...x(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(D,{title:"OVHcloud Design System/Design and Style/Style Customization"}),`
`,e.jsx(l,{label:"Style Customization",level:1}),`
`,e.jsx(s.p,{children:`Although ODS components comes with the expected designs, it is sometime useful to customize the rendering of a component
to fit your context.`}),`
`,e.jsx(s.p,{children:"Here we'll describe different ways to customize an ODS component."}),`
`,e.jsx(l,{label:"Apply style directly on the component",level:2}),`
`,e.jsx(s.p,{children:"The ODS component host behave like any other React element, so you can apply a class directly to it."}),`
`,e.jsxs(s.p,{children:["For example, if you want to display a vertical list of ",e.jsx(s.code,{children:"Link"}),", you can override the inline default display:"]}),`
`,e.jsx(n,{code:`
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
`,e.jsxs(h,{color:c.warning,dismissible:!1,children:[e.jsx(y,{name:j.triangleExclamation}),e.jsxs(g,{children:["As there is no shadow DOM anymore, all of the component DOM can be targeted through CSS selectors. ","It is advised to not rely on cascading selector, as the DOM structure may evolve from one version to another. ",e.jsx("br",{}),e.jsx("br",{}),"To ensure reliable CSS, use a specific className on the component you want to customize. ",e.jsxs(s.p,{children:["If you want to specifically target underneath elements, you can rely on some"," ",e.jsx(m,{href:"https://developer.mozilla.org/en-US/docs/Web/HTML/How_to/Use_data_attributes#css_access",children:"data attribute"}),", ","we'll update the documentation about those soon."]})]})]}),`
`,e.jsx(l,{label:"Reuse existing ODS style",level:2}),`
`,e.jsx(s.p,{children:`In some cases where you cannot use an ODS component, you may want one of your own components to look like an ODS component
(for example, when using an external library that doesn't allow custom templating).`}),`
`,e.jsxs(s.p,{children:["We did expose a bunch of ",e.jsx(m,{href:"https://sass-lang.com",children:"Sass"})," mixins that allows you to easily apply the ODS style to your own elements."]}),`
`,e.jsxs(s.p,{children:["For example, if you need to make an anchor tag looks like a ",e.jsx(s.code,{children:"Link"}),":"]}),`
`,e.jsx(n,{code:`
@import '@ovhcloud/ods-components/style';

.my-link {
  @include ods-link();
  @include ods-link-color('primary');
}
`,dark:"true",language:"css"}),`
`,e.jsx(n,{code:'<a class="my-link"></a>',dark:"true",language:"html"}),`
`,e.jsx(l,{label:"CSS variables",level:2}),`
`,e.jsxs(s.p,{children:["All ODS components are using common design tokens, that are accessible through ",e.jsx(m,{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties",children:"CSS variables"}),"."]}),`
`,e.jsx(s.p,{children:`We do advise to reuse those variables on your own style, this way your application will automatically be updated on current
theme changes or when new themes will be released.`}),`
`,e.jsxs(s.p,{children:["You can find the whole list on the ",e.jsx(N,{title:O.designTokens,children:"Design Tokens"})," documentation page."]}),`
`,e.jsx(s.p,{children:"Example of CSS variables:"}),`
`,e.jsx(n,{code:`
<h1 class="my-own-page-title">
  Welcome page
</h1>

<style>
  .my-own-page-title {
    color: var(--ods-color-primary-500);
  }
</style>
`,dark:"true",language:"html"})]})}function Q(o={}){const{wrapper:s}={...x(),...o.components};return s?e.jsx(s,{...o,children:e.jsx(f,{...o})}):f(o)}export{Q as default};
