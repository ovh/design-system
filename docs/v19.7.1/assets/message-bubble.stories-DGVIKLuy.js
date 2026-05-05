import{r as W,e}from"./index-jIWwRBLr.js";import{j as o}from"./jsx-runtime-Cfl8ynUo.js";import{c as $}from"./index-CqY9YpN0.js";import{o as F,C as p}from"./controls-BtiQQn1l.js";var n=(a=>(a.ai="ai",a.human="human",a))(n||{});const U=Object.freeze(Object.values(n)),r={"message-bubble":"_message-bubble_m7i2w_2","message-bubble--human":"_message-bubble--human_m7i2w_17","message-bubble--ai":"_message-bubble--ai_m7i2w_20","message-bubble--error":"_message-bubble--error_m7i2w_23","message-bubble__typing-dots":"_message-bubble__typing-dots_m7i2w_27","message-bubble__typing-dot":"_message-bubble__typing-dot_m7i2w_27","message-bubble-bounce":"_message-bubble-bounce_m7i2w_1"},s=W.forwardRef(({className:a,children:H,error:Y=!1,typing:q=!1,variant:k=n.human,...z},P)=>o.jsx("div",{className:$(r["message-bubble"],r[`message-bubble--${k}`],{[r["message-bubble--error"]]:Y},a),"data-ods":"message-bubble",ref:P,...z,children:q?o.jsxs("div",{className:r["message-bubble__typing-dots"],children:[o.jsx("span",{className:r["message-bubble__typing-dot"]}),o.jsx("span",{className:r["message-bubble__typing-dot"]}),o.jsx("span",{className:r["message-bubble__typing-dot"]})]}):H}));s.displayName="MessageBubble";s.__docgenInfo={description:"",methods:[],displayName:"MessageBubble",props:{error:{required:!1,tsType:{name:"boolean"},description:"Indicates an error state",defaultValue:{value:"false",computed:!1}},typing:{required:!1,tsType:{name:"boolean"},description:"When typing a message",defaultValue:{value:"false",computed:!1}},variant:{required:!1,tsType:{name:"literal",value:"`${MESSAGE_BUBBLE_VARIANT}`"},description:"Visual variant of the message bubble",defaultValue:{value:"MESSAGE_BUBBLE_VARIANT.human",computed:!0}}},composes:["ComponentPropsWithRef"]};const J={component:s,tags:["new"],title:"React Components/Message Bubble"},t={argTypes:F({children:{table:{category:p.slot},control:"text"},error:{table:{category:p.general},control:"boolean"},typing:{table:{category:p.general},control:"boolean"},variant:{table:{category:p.design,defaultValue:{summary:n.human},type:{summary:"MESSAGE_BUBBLE_VARIANT"}},control:{type:"select"},options:U}}),args:{children:"Hello, how can I help you?"}},l={tags:["!dev"],render:({})=>e.createElement(s,null,"Hello, how can I help you?")},m={globals:{imports:"import { MessageBubble } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>e.createElement(s,null,"Hello, how can I help you?")},c={tags:["!dev"],parameters:{layout:"centered"},render:({})=>e.createElement(s,null,"Hello, how can I help you?")},u={decorators:[a=>e.createElement("div",{style:{display:"flex",flexDirection:"column",gap:"8px"}},a())],globals:{imports:"import { MESSAGE_BUBBLE_VARIANT, MessageBubble } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>e.createElement(e.Fragment,null,e.createElement(s,{variant:n.human},"This is a human message"),e.createElement(s,{variant:n.ai},"This is an AI message"))},i={globals:{imports:"import { MessageBubble } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>e.createElement(s,{error:!0},"An error occurred while generating the response.")},b={globals:{imports:"import { MessageBubble } from '@ovhcloud/ods-react';"},tags:["!dev"],parameters:{layout:"centered"},render:({})=>e.createElement(s,{typing:!0})},g={parameters:{layout:"fullscreen"},tags:["!dev"],render:({})=>e.createElement("div",{style:{display:"flex",flexDirection:"column",gap:"8px"}},U.map(a=>e.createElement("div",{key:a,style:{display:"flex",flexDirection:"column",gap:"8px"}},e.createElement(s,{variant:a},String(a)," message"),e.createElement(s,{variant:a,error:!0},String(a)," error message"),e.createElement(s,{variant:a,typing:!0}))))};var d,y,_;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:`{
  argTypes: orderControls({
    children: {
      table: {
        category: CONTROL_CATEGORY.slot
      },
      control: 'text'
    },
    error: {
      table: {
        category: CONTROL_CATEGORY.general
      },
      control: 'boolean'
    },
    typing: {
      table: {
        category: CONTROL_CATEGORY.general
      },
      control: 'boolean'
    },
    variant: {
      table: {
        category: CONTROL_CATEGORY.design,
        defaultValue: {
          summary: MESSAGE_BUBBLE_VARIANT.human
        },
        type: {
          summary: 'MESSAGE_BUBBLE_VARIANT'
        }
      },
      control: {
        type: 'select'
      },
      options: MESSAGE_BUBBLE_VARIANTS
    }
  }),
  args: {
    children: 'Hello, how can I help you?'
  }
}`,...(_=(y=t.parameters)==null?void 0:y.docs)==null?void 0:_.source}}};var B,h,E;l.parameters={...l.parameters,docs:{...(B=l.parameters)==null?void 0:B.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: ({}) => <MessageBubble>
      Hello, how can I help you?
    </MessageBubble>
}`,...(E=(h=l.parameters)==null?void 0:h.docs)==null?void 0:E.source}}};var v,f,A;m.parameters={...m.parameters,docs:{...(v=m.parameters)==null?void 0:v.docs,source:{originalSource:`{
  globals: {
    imports: \`import { MessageBubble } from '@ovhcloud/ods-react';\`
  },
  tags: ['!dev'],
  render: ({}) => <MessageBubble>
      Hello, how can I help you?
    </MessageBubble>
}`,...(A=(f=m.parameters)==null?void 0:f.docs)==null?void 0:A.source}}};var M,S,T;c.parameters={...c.parameters,docs:{...(M=c.parameters)==null?void 0:M.docs,source:{originalSource:`{
  tags: ['!dev'],
  parameters: {
    layout: 'centered'
  },
  render: ({}) => <MessageBubble>
      Hello, how can I help you?
    </MessageBubble>
}`,...(T=(S=c.parameters)==null?void 0:S.docs)==null?void 0:T.source}}};var x,R,N;u.parameters={...u.parameters,docs:{...(x=u.parameters)==null?void 0:x.docs,source:{originalSource:`{
  decorators: [story => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '8px'
  }}>{story()}</div>],
  globals: {
    imports: \`import { MESSAGE_BUBBLE_VARIANT, MessageBubble } from '@ovhcloud/ods-react';\`
  },
  tags: ['!dev'],
  render: ({}) => <>
      <MessageBubble variant={MESSAGE_BUBBLE_VARIANT.human}>
        This is a human message
      </MessageBubble>
      <MessageBubble variant={MESSAGE_BUBBLE_VARIANT.ai}>
        This is an AI message
      </MessageBubble>
    </>
}`,...(N=(R=u.parameters)==null?void 0:R.docs)==null?void 0:N.source}}};var I,O,w;i.parameters={...i.parameters,docs:{...(I=i.parameters)==null?void 0:I.docs,source:{originalSource:`{
  globals: {
    imports: \`import { MessageBubble } from '@ovhcloud/ods-react';\`
  },
  tags: ['!dev'],
  render: ({}) => <MessageBubble error>
      An error occurred while generating the response.
    </MessageBubble>
}`,...(w=(O=i.parameters)==null?void 0:O.docs)==null?void 0:w.source}}};var V,G,L;b.parameters={...b.parameters,docs:{...(V=b.parameters)==null?void 0:V.docs,source:{originalSource:`{
  globals: {
    imports: \`import { MessageBubble } from '@ovhcloud/ods-react';\`
  },
  tags: ['!dev'],
  parameters: {
    layout: 'centered'
  },
  render: ({}) => <MessageBubble typing />
}`,...(L=(G=b.parameters)==null?void 0:G.docs)==null?void 0:L.source}}};var C,j,D;g.parameters={...g.parameters,docs:{...(C=g.parameters)==null?void 0:C.docs,source:{originalSource:`{
  parameters: {
    layout: 'fullscreen'
  },
  tags: ['!dev'],
  render: ({}) => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '8px'
  }}>
      {MESSAGE_BUBBLE_VARIANTS.map(variant => <div key={variant} style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '8px'
    }}>
          <MessageBubble variant={variant}>
            {String(variant)} message
          </MessageBubble>
          <MessageBubble variant={variant} error>
            {String(variant)} error message
          </MessageBubble>
          <MessageBubble variant={variant} typing />
        </div>)}
    </div>
}`,...(D=(j=g.parameters)==null?void 0:j.docs)==null?void 0:D.source}}};const K=["Demo","AnatomyTech","Default","Overview","Variant","Error","Typing","ThemeGenerator"],ae=Object.freeze(Object.defineProperty({__proto__:null,AnatomyTech:l,Default:m,Demo:t,Error:i,Overview:c,ThemeGenerator:g,Typing:b,Variant:u,__namedExportsOrder:K,default:J},Symbol.toStringTag,{value:"Module"}));export{l as A,m as D,i as E,ae as M,c as O,b as T,u as V};
