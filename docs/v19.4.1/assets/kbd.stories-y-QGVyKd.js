import{r as y,e as a}from"./index-jIWwRBLr.js";import{j as E}from"./jsx-runtime-Cfl8ynUo.js";import{c as h}from"./index-CqY9YpN0.js";import{o as x,C as T}from"./controls-BtiQQn1l.js";const R="_kbd_40xkx_2",k={kbd:R},e=y.forwardRef(({children:K,className:v,..._},O)=>E.jsx("kbd",{className:h(k.kbd,v),"data-ods":"kbd",ref:O,..._,children:K}));e.displayName="Kbd";e.__docgenInfo={description:"",methods:[],displayName:"Kbd",composes:["ComponentPropsWithRef"]};const S={component:e,tags:["new"],title:"React Components/Kbd"},r={argTypes:x({children:{table:{category:T.slot},control:"text"}}),args:{children:"Cmd + L"}},o={globals:{imports:"import { Kbd } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>a.createElement(e,null,"Cmd")},t={tags:["!dev"],parameters:{layout:"centered"},render:({})=>a.createElement(a.Fragment,null,a.createElement(e,null,"Esc"))},s={tags:["!dev"],render:({})=>a.createElement(e,null,"Cmd")};var n,d,c;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:`{
  argTypes: orderControls({
    children: {
      table: {
        category: CONTROL_CATEGORY.slot
      },
      control: 'text'
    }
  }),
  args: {
    children: 'Cmd + L'
  }
}`,...(c=(d=r.parameters)==null?void 0:d.docs)==null?void 0:c.source}}};var m,l,p;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`{
  globals: {
    imports: \`import { Kbd } from '@ovhcloud/ods-react';\`
  },
  tags: ['!dev'],
  render: ({}) => <Kbd>Cmd</Kbd>
}`,...(p=(l=o.parameters)==null?void 0:l.docs)==null?void 0:p.source}}};var i,u,b;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
  tags: ['!dev'],
  parameters: {
    layout: 'centered'
  },
  render: ({}) => <>
      <Kbd>Esc</Kbd>
    </>
}`,...(b=(u=t.parameters)==null?void 0:u.docs)==null?void 0:b.source}}};var g,f,C;s.parameters={...s.parameters,docs:{...(g=s.parameters)==null?void 0:g.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: ({}) => <Kbd>Cmd</Kbd>
}`,...(C=(f=s.parameters)==null?void 0:f.docs)==null?void 0:C.source}}};const N=["Demo","Default","Overview","ThemeGenerator"],L=Object.freeze(Object.defineProperty({__proto__:null,Default:o,Demo:r,Overview:t,ThemeGenerator:s,__namedExportsOrder:N,default:S},Symbol.toStringTag,{value:"Module"}));export{o as D,L as K,t as O};
