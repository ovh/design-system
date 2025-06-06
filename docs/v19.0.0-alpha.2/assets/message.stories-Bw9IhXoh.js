import{r as P,e as s}from"./index-D_CmzhJ4.js";import{j as o}from"./jsx-runtime-VM66peLj.js";import{c as E}from"./index-CkQHsVsO.js";import{B as U,f as Z,e as H}from"./Button-BRERPjFq.js";import{a as t,I as y}from"./icon-name-jL3axqAU.js";import{e as J,o as K,C as p}from"./controls-BtiQQn1l.js";var r=(e=>(e.critical="critical",e.danger="danger",e.information="information",e.success="success",e.warning="warning",e))(r||{});const Q=Object.freeze(Object.values(r));var _=(e=>(e.default="default",e.light="light",e))(_||{});const X=Object.freeze(Object.values(_));function ee(e){switch(e){case r.critical:return t.hexagonExclamation;case r.danger:return t.diamondExclamation;case r.information:return t.circleInfo;case r.success:return t.circleCheck;case r.warning:return t.triangleExclamation;default:return t.circleInfo}}const se="_message_1fc37_2",ae="_message__icon_1fc37_50",re="_message__body_1fc37_54",ne="_message__close_1fc37_57",n={message:se,"message--default":"_message--default_1fc37_10","message--critical":"_message--critical_1fc37_10","message--danger":"_message--danger_1fc37_14","message--information":"_message--information_1fc37_18","message--success":"_message--success_1fc37_22","message--warning":"_message--warning_1fc37_26","message--light":"_message--light_1fc37_30",message__icon:ae,message__body:re,message__close:ne,"message__close--critical":"_message__close--critical_1fc37_60","message__close--danger":"_message__close--danger_1fc37_72","message__close--information":"_message__close--information_1fc37_84","message__close--success":"_message__close--success_1fc37_96","message__close--warning":"_message__close--warning_1fc37_108"},a=P.forwardRef(({children:e,className:$,color:f=r.information,dismissible:q=!0,onRemove:z,variant:B=_.default,...k},W)=>o.jsxs("div",{className:E(n.message,n[`message--${f}`],n[`message--${B}`],$),ref:W,...k,children:[o.jsx(y,{className:n.message__icon,name:ee(f)}),o.jsx("div",{className:n.message__body,children:e}),q&&o.jsx(U,{className:E(n.message__close,n[`message__close--${f}`]),onClick:z,size:H.xs,variant:Z.ghost,children:o.jsx(y,{name:t.xmark})})]}));a.displayName="Message";a.__docgenInfo={description:"",methods:[],displayName:"Message",props:{color:{required:!1,tsType:{name:"literal",value:"`${MESSAGE_COLOR}`"},description:"",defaultValue:{value:"MESSAGE_COLOR.information",computed:!0}},dismissible:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},onRemove:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},variant:{required:!1,tsType:{name:"literal",value:"`${MESSAGE_VARIANT}`"},description:"",defaultValue:{value:"MESSAGE_VARIANT.default",computed:!0}}},composes:["ComponentPropsWithRef"]};const te={argTypes:J(["onRemove"]),component:a,title:"ODS Components/Message"},c={argTypes:K({children:{table:{category:p.slot},control:"text"},color:{table:{category:p.design,type:{summary:"MESSAGE_COLOR"}},control:{type:"select"},options:Q},dismissible:{table:{category:p.general},control:{type:"boolean"}},variant:{table:{category:p.design,type:{summary:"MESSAGE_VARIANT"}},control:{type:"select"},options:X}}),args:{children:"My message"}},l={decorators:[e=>s.createElement("div",{style:{display:"inline-flex",flexFlow:"column",gap:"8px"}},e())],tags:["!dev"],render:({})=>s.createElement(s.Fragment,null,s.createElement(a,{color:r.critical},"Critical message"),s.createElement(a,{color:r.danger},"Danger message"),s.createElement(a,{color:r.information},"Information message"),s.createElement(a,{color:r.success},"Success message"),s.createElement(a,{color:r.warning},"Warning message"))},i={tags:["!dev"],render:({})=>s.createElement(a,null,"Default message")},m={tags:["!dev"],render:({})=>s.createElement(a,null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer faucibus, libero et pharetra mattis, ipsum velit semper risus, non ultrices lacus massa sed arcu. Nulla sed tellus.")},g={tags:["!dev"],render:({})=>s.createElement(a,{dismissible:!1},"Default message")},d={tags:["!dev"],parameters:{layout:"centered"},render:({})=>s.createElement(a,null,"Message")},u={decorators:[e=>s.createElement("div",{style:{display:"inline-flex",flexFlow:"column",gap:"8px"}},e())],tags:["!dev"],render:({})=>s.createElement(s.Fragment,null,s.createElement(a,{variant:_.default},"Default variant Message"),s.createElement(a,{variant:_.light},"Light variant Message"))};var M,v,S;c.parameters={...c.parameters,docs:{...(M=c.parameters)==null?void 0:M.docs,source:{originalSource:`{
  argTypes: orderControls({
    children: {
      table: {
        category: CONTROL_CATEGORY.slot
      },
      control: 'text'
    },
    color: {
      table: {
        category: CONTROL_CATEGORY.design,
        type: {
          summary: 'MESSAGE_COLOR'
        }
      },
      control: {
        type: 'select'
      },
      options: MESSAGE_COLORS
    },
    dismissible: {
      table: {
        category: CONTROL_CATEGORY.general
      },
      control: {
        type: 'boolean'
      }
    },
    variant: {
      table: {
        category: CONTROL_CATEGORY.design,
        type: {
          summary: 'MESSAGE_VARIANT'
        }
      },
      control: {
        type: 'select'
      },
      options: MESSAGE_VARIANTS
    }
  }),
  args: {
    children: 'My message'
  }
}`,...(S=(v=c.parameters)==null?void 0:v.docs)==null?void 0:S.source}}};var O,A,b;l.parameters={...l.parameters,docs:{...(O=l.parameters)==null?void 0:O.docs,source:{originalSource:`{
  decorators: [story => <div style={{
    display: 'inline-flex',
    flexFlow: 'column',
    gap: '8px'
  }}>{story()}</div>],
  tags: ['!dev'],
  render: ({}) => <>
      <Message color={MESSAGE_COLOR.critical}>Critical message</Message>
      <Message color={MESSAGE_COLOR.danger}>Danger message</Message>
      <Message color={MESSAGE_COLOR.information}>Information message</Message>
      <Message color={MESSAGE_COLOR.success}>Success message</Message>
      <Message color={MESSAGE_COLOR.warning}>Warning message</Message>
    </>
}`,...(b=(A=l.parameters)==null?void 0:A.docs)==null?void 0:b.source}}};var x,C,N;i.parameters={...i.parameters,docs:{...(x=i.parameters)==null?void 0:x.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: ({}) => <Message>
      Default message
    </Message>
}`,...(N=(C=i.parameters)==null?void 0:C.docs)==null?void 0:N.source}}};var R,T,h;m.parameters={...m.parameters,docs:{...(R=m.parameters)==null?void 0:R.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: ({}) => <Message>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer faucibus, libero et pharetra mattis, ipsum velit semper risus, non ultrices lacus massa sed arcu. Nulla sed tellus.
    </Message>
}`,...(h=(T=m.parameters)==null?void 0:T.docs)==null?void 0:h.source}}};var I,G,w;g.parameters={...g.parameters,docs:{...(I=g.parameters)==null?void 0:I.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: ({}) => <Message dismissible={false}>
      Default message
    </Message>
}`,...(w=(G=g.parameters)==null?void 0:G.docs)==null?void 0:w.source}}};var D,L,V;d.parameters={...d.parameters,docs:{...(D=d.parameters)==null?void 0:D.docs,source:{originalSource:`{
  tags: ['!dev'],
  parameters: {
    layout: 'centered'
  },
  render: ({}) => <Message>
      Message
    </Message>
}`,...(V=(L=d.parameters)==null?void 0:L.docs)==null?void 0:V.source}}};var j,F,Y;u.parameters={...u.parameters,docs:{...(j=u.parameters)==null?void 0:j.docs,source:{originalSource:`{
  decorators: [story => <div style={{
    display: 'inline-flex',
    flexFlow: 'column',
    gap: '8px'
  }}>{story()}</div>],
  tags: ['!dev'],
  render: ({}) => <>
      <Message variant={MESSAGE_VARIANT.default}>Default variant Message</Message>
      <Message variant={MESSAGE_VARIANT.light}>Light variant Message</Message>
    </>
}`,...(Y=(F=u.parameters)==null?void 0:F.docs)==null?void 0:Y.source}}};const oe=["Demo","Color","Default","Multiline","NonDismissible","Overview","Variant"],ue=Object.freeze(Object.defineProperty({__proto__:null,Color:l,Default:i,Demo:c,Multiline:m,NonDismissible:g,Overview:d,Variant:u,__namedExportsOrder:oe,default:te},Symbol.toStringTag,{value:"Module"}));export{l as C,i as D,ue as M,g as N,d as O,u as V,m as a};
