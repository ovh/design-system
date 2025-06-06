import{r as M,e as r}from"./index-D_CmzhJ4.js";import{c as U,F as z}from"./FormFieldLabel-BxxkSoC9.js";import{j as K}from"./jsx-runtime-VM66peLj.js";import{I as $,b as B}from"./Input-BHPevcdA.js";import{o as H,C as a}from"./controls-BtiQQn1l.js";const e=M.forwardRef(({className:Y,clearable:G,loading:j,maskInitialState:q,onClear:V,...h},k)=>K.jsx($,{className:Y,clearable:G,loading:j,maskOption:{enable:!0,initialState:q},onClear:V,ref:k,type:B.text,...h}));e.displayName="Password";e.__docgenInfo={description:"",methods:[],displayName:"Password",props:{clearable:{required:!1,tsType:{name:"boolean"},description:""},loading:{required:!1,tsType:{name:"boolean"},description:""},maskInitialState:{required:!1,tsType:{name:"literal",value:"`${INPUT_MASK_STATE}`"},description:""},onClear:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}},composes:["Omit"]};const J={argTypes:{maskInitialState:{table:{disable:!0}},onClear:{table:{disable:!0}}},component:e,title:"ODS Components/Form elements/Password"},o={argTypes:H({clearable:{table:{category:a.general},control:"boolean"},disabled:{table:{category:a.general,type:{summary:"boolean"}},control:"boolean"},loading:{table:{category:a.general},control:"boolean"},placeholder:{table:{category:a.general,type:{summary:"string"}},control:"text"},readOnly:{table:{category:a.general,type:{summary:"boolean"}},control:"boolean"}})},n={tags:["!dev"],render:({})=>r.createElement(e,{clearable:!0,defaultValue:"Clearable"})},t={tags:["!dev"],render:({})=>r.createElement(e,null)},s={tags:["!dev"],render:({})=>r.createElement(e,{disabled:!0})},l={tags:["!dev"],render:({})=>r.createElement(U,null,r.createElement(z,null,"Password:"),r.createElement(e,null))},d={tags:["!dev"],render:({})=>r.createElement(e,{loading:!0})},c={tags:["!dev"],parameters:{layout:"centered"},render:({})=>r.createElement(e,null)},m={tags:["!dev"],render:({})=>r.createElement(e,{defaultValue:"Readonly",readOnly:!0})};var i,p,u;o.parameters={...o.parameters,docs:{...(i=o.parameters)==null?void 0:i.docs,source:{originalSource:`{
  argTypes: orderControls({
    clearable: {
      table: {
        category: CONTROL_CATEGORY.general
      },
      control: 'boolean'
    },
    disabled: {
      table: {
        category: CONTROL_CATEGORY.general,
        type: {
          summary: 'boolean'
        }
      },
      control: 'boolean'
    },
    loading: {
      table: {
        category: CONTROL_CATEGORY.general
      },
      control: 'boolean'
    },
    placeholder: {
      table: {
        category: CONTROL_CATEGORY.general,
        type: {
          summary: 'string'
        }
      },
      control: 'text'
    },
    readOnly: {
      table: {
        category: CONTROL_CATEGORY.general,
        type: {
          summary: 'boolean'
        }
      },
      control: 'boolean'
    }
  })
}`,...(u=(p=o.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};var g,b,y;n.parameters={...n.parameters,docs:{...(g=n.parameters)==null?void 0:g.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: ({}) => <Password clearable defaultValue="Clearable" />
}`,...(y=(b=n.parameters)==null?void 0:b.docs)==null?void 0:y.source}}};var O,T,C;t.parameters={...t.parameters,docs:{...(O=t.parameters)==null?void 0:O.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: ({}) => <Password />
}`,...(C=(T=t.parameters)==null?void 0:T.docs)==null?void 0:C.source}}};var f,v,E;s.parameters={...s.parameters,docs:{...(f=s.parameters)==null?void 0:f.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: ({}) => <Password disabled />
}`,...(E=(v=s.parameters)==null?void 0:v.docs)==null?void 0:E.source}}};var P,R,w;l.parameters={...l.parameters,docs:{...(P=l.parameters)==null?void 0:P.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: ({}) => <FormField>
      <FormFieldLabel>
        Password:
      </FormFieldLabel>

      <Password />
    </FormField>
}`,...(w=(R=l.parameters)==null?void 0:R.docs)==null?void 0:w.source}}};var F,S,_;d.parameters={...d.parameters,docs:{...(F=d.parameters)==null?void 0:F.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: ({}) => <Password loading />
}`,...(_=(S=d.parameters)==null?void 0:S.docs)==null?void 0:_.source}}};var L,I,N;c.parameters={...c.parameters,docs:{...(L=c.parameters)==null?void 0:L.docs,source:{originalSource:`{
  tags: ['!dev'],
  parameters: {
    layout: 'centered'
  },
  render: ({}) => <Password />
}`,...(N=(I=c.parameters)==null?void 0:I.docs)==null?void 0:N.source}}};var x,A,D;m.parameters={...m.parameters,docs:{...(x=m.parameters)==null?void 0:x.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: ({}) => <Password defaultValue="Readonly" readOnly />
}`,...(D=(A=m.parameters)==null?void 0:A.docs)==null?void 0:D.source}}};const Q=["Demo","Clearable","Default","Disabled","InFormField","Loading","Overview","ReadOnly"],ae=Object.freeze(Object.defineProperty({__proto__:null,Clearable:n,Default:t,Demo:o,Disabled:s,InFormField:l,Loading:d,Overview:c,ReadOnly:m,__namedExportsOrder:Q,default:J},Symbol.toStringTag,{value:"Module"}));export{n as C,t as D,l as I,d as L,c as O,ae as P,m as R,s as a};
