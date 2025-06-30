import{r as M,e as a}from"./index-D_CmzhJ4.js";import{c as U,F as z}from"./FormFieldLabel-DjB85afw.js";import{j as K}from"./jsx-runtime-VM66peLj.js";import{I as $,b as B}from"./Input-Pkw6XJuX.js";import{o as H,C as r}from"./controls-BtiQQn1l.js";const e=M.forwardRef(({className:D,clearable:Y,invalid:G,loading:j,maskInitialState:k,onClear:q,...V},W)=>K.jsx($,{className:D,clearable:Y,invalid:G,loading:j,maskOption:{enable:!0,initialState:k},onClear:q,ref:W,type:B.text,...V}));e.displayName="Password";e.__docgenInfo={description:"",methods:[],displayName:"Password",props:{clearable:{required:!1,tsType:{name:"boolean"},description:"Whether the clear button is displayed."},invalid:{required:!1,tsType:{name:"boolean"},description:"Whether the component is in error state."},loading:{required:!1,tsType:{name:"boolean"},description:"Whether the component is in loading state."},maskInitialState:{required:!1,tsType:{name:"literal",value:"`${INPUT_MASK_STATE}`"},description:"The masked display initial state."},onClear:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Callback fired when the input value is cleared."}},composes:["Omit"]};const J={argTypes:{maskInitialState:{table:{disable:!0}},onClear:{table:{disable:!0}}},component:e,title:"React Components/Password"},o={argTypes:H({clearable:{table:{category:r.general},control:"boolean"},disabled:{table:{category:r.general,type:{summary:"boolean"}},control:"boolean"},loading:{table:{category:r.general},control:"boolean"},placeholder:{table:{category:r.general,type:{summary:"string"}},control:"text"},readOnly:{table:{category:r.general,type:{summary:"boolean"}},control:"boolean"}})},n={tags:["!dev"],render:({})=>a.createElement(e,{clearable:!0,defaultValue:"Clearable"})},t={tags:["!dev"],render:({})=>a.createElement(e,null)},s={tags:["!dev"],render:({})=>a.createElement(e,{disabled:!0})},l={tags:["!dev"],render:({})=>a.createElement(U,null,a.createElement(z,null,"Password:"),a.createElement(e,null))},d={tags:["!dev"],render:({})=>a.createElement(e,{loading:!0})},c={tags:["!dev"],parameters:{layout:"centered"},render:({})=>a.createElement(e,null)},i={tags:["!dev"],render:({})=>a.createElement(e,{defaultValue:"Readonly",readOnly:!0})};var m,p,u;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(y=(b=n.parameters)==null?void 0:b.docs)==null?void 0:y.source}}};var O,T,f;t.parameters={...t.parameters,docs:{...(O=t.parameters)==null?void 0:O.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: ({}) => <Password />
}`,...(f=(T=t.parameters)==null?void 0:T.docs)==null?void 0:f.source}}};var v,C,E;s.parameters={...s.parameters,docs:{...(v=s.parameters)==null?void 0:v.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: ({}) => <Password disabled />
}`,...(E=(C=s.parameters)==null?void 0:C.docs)==null?void 0:E.source}}};var R,w,P;l.parameters={...l.parameters,docs:{...(R=l.parameters)==null?void 0:R.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: ({}) => <FormField>
      <FormFieldLabel>
        Password:
      </FormFieldLabel>

      <Password />
    </FormField>
}`,...(P=(w=l.parameters)==null?void 0:w.docs)==null?void 0:P.source}}};var F,_,S;d.parameters={...d.parameters,docs:{...(F=d.parameters)==null?void 0:F.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: ({}) => <Password loading />
}`,...(S=(_=d.parameters)==null?void 0:_.docs)==null?void 0:S.source}}};var h,L,I;c.parameters={...c.parameters,docs:{...(h=c.parameters)==null?void 0:h.docs,source:{originalSource:`{
  tags: ['!dev'],
  parameters: {
    layout: 'centered'
  },
  render: ({}) => <Password />
}`,...(I=(L=c.parameters)==null?void 0:L.docs)==null?void 0:I.source}}};var N,x,A;i.parameters={...i.parameters,docs:{...(N=i.parameters)==null?void 0:N.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: ({}) => <Password defaultValue="Readonly" readOnly />
}`,...(A=(x=i.parameters)==null?void 0:x.docs)==null?void 0:A.source}}};const Q=["Demo","Clearable","Default","Disabled","InFormField","Loading","Overview","ReadOnly"],oe=Object.freeze(Object.defineProperty({__proto__:null,Clearable:n,Default:t,Demo:o,Disabled:s,InFormField:l,Loading:d,Overview:c,ReadOnly:i,__namedExportsOrder:Q,default:J},Symbol.toStringTag,{value:"Module"}));export{n as C,t as D,l as I,d as L,c as O,oe as P,i as R,s as a};
