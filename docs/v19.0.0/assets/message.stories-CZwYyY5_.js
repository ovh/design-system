import{r as I,e}from"./index-D_CmzhJ4.js";import{I as k,a as t,b as H}from"./icon-name-BOrBmUKT.js";import{j as _}from"./jsx-runtime-VM66peLj.js";import{c as C}from"./index-CkQHsVsO.js";import{B as J,d as K,c as Q}from"./Button-CbWLwkmI.js";import{a as o,C as X}from"./colors-DSObuHxd.js";import{e as ee,o as se,C as i}from"./controls-BtiQQn1l.js";var f=(s=>(s.default="default",s.light="light",s))(f||{});const ae=Object.freeze(Object.values(f)),ne="_message_udq9t_2",re="_message__close_udq9t_57",O={message:ne,"message--default":"_message--default_udq9t_9","message--critical":"_message--critical_udq9t_9","message--information":"_message--information_udq9t_13","message--neutral":"_message--neutral_udq9t_17","message--primary":"_message--primary_udq9t_21","message--success":"_message--success_udq9t_25","message--warning":"_message--warning_udq9t_29","message--light":"_message--light_udq9t_33",message__close:re},a=I.forwardRef(({children:s,className:l,color:c=o.information,dismissible:m=!0,onRemove:N,variant:z=f.default,...U},Z)=>_.jsxs("div",{className:C(O.message,O[`message--${c}`],O[`message--${z}`],l),ref:Z,...U,children:[s,m&&_.jsx(J,{className:O.message__close,color:o.neutral,onClick:N,size:Q.xs,variant:K.ghost,children:_.jsx(k,{name:t.xmark})})]}));a.displayName="Message";a.__docgenInfo={description:"",methods:[],displayName:"Message",props:{color:{required:!1,tsType:{name:"literal",value:"`${COLOR}`"},description:`@type=MESSAGE_COLOR
The color preset to use.`,defaultValue:{value:"MESSAGE_COLOR.information",computed:!0}},dismissible:{required:!1,tsType:{name:"boolean"},description:"Whether the remove button is displayed.",defaultValue:{value:"true",computed:!1}},onRemove:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Callback fired when the close button is pressed."},variant:{required:!1,tsType:{name:"literal",value:"`${MESSAGE_VARIANT}`"},description:"The variant preset to use.",defaultValue:{value:"MESSAGE_VARIANT.default",computed:!0}}},composes:["ComponentPropsWithRef"]};const te={"message-body":"_message-body_fe7x3_2"},n=I.forwardRef(({children:s,className:l,...c},m)=>_.jsx("div",{className:C(te["message-body"],l),ref:m,...c,children:s}));n.displayName="MessageBody";n.__docgenInfo={description:"",methods:[],displayName:"MessageBody",composes:["ComponentPropsWithRef"]};const oe={"message-icon":"_message-icon_mpgx8_2"},r=I.forwardRef(({children:s,className:l,name:c,...m},N)=>_.jsx(k,{className:C(oe["message-icon"],l),name:c,ref:N,...m}));r.displayName="MessageIcon";r.__docgenInfo={description:"",methods:[],displayName:"MessageIcon",props:{name:{required:!0,tsType:{name:"literal",value:"`${ICON_NAME}`"},description:"The icon name."}},composes:["ComponentPropsWithRef"]};const le={argTypes:ee(["onRemove"]),component:a,subcomponents:{MessageBody:n,MessageIcon:r},title:"React Components/Message"},g={render:s=>e.createElement(a,{color:s.color,dismissible:s.dismissible,variant:s.variant},e.createElement(r,{name:s.name||t.circleInfo}),e.createElement(n,null,s.children)),argTypes:se({children:{table:{category:i.slot},control:"text"},color:{table:{category:i.design,type:{summary:"MESSAGE_COLOR"}},control:{type:"select"},options:X},dismissible:{table:{category:i.general},control:{type:"boolean"}},name:{table:{category:i.design,type:{summary:"ICON_NAME"}},control:{type:"select"},options:H},variant:{table:{category:i.design,type:{summary:"MESSAGE_VARIANT"}},control:{type:"select"},options:ae}}),args:{children:"My message"}},d={decorators:[s=>e.createElement("div",{style:{display:"inline-flex",flexFlow:"column",gap:"8px"}},s())],tags:["!dev"],render:({})=>e.createElement(e.Fragment,null,e.createElement(a,{color:o.critical},e.createElement(r,{name:t.hexagonExclamation}),e.createElement(n,null,"Critical message")),e.createElement(a,{color:o.information},e.createElement(r,{name:t.circleInfo}),e.createElement(n,null,"Information message")),e.createElement(a,{color:o.neutral},e.createElement(r,{name:t.email}),e.createElement(n,null,"Neutral message")),e.createElement(a,{color:o.primary},e.createElement(r,{name:t.lightbulb}),e.createElement(n,null,"Primary message")),e.createElement(a,{color:o.success},e.createElement(r,{name:t.circleCheck}),e.createElement(n,null,"Success message")),e.createElement(a,{color:o.warning},e.createElement(r,{name:t.triangleExclamation}),e.createElement(n,null,"Warning message")))},u={tags:["!dev"],render:({})=>e.createElement(a,null,e.createElement(r,{name:t.circleInfo}),e.createElement(n,null,"Default message"))},p={tags:["!dev"],render:({})=>e.createElement(a,null,e.createElement(r,{name:t.circleInfo}),e.createElement(n,null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer faucibus, libero et pharetra mattis, ipsum velit semper risus, non ultrices lacus massa sed arcu. Nulla sed tellus."))},M={tags:["!dev"],render:({})=>e.createElement(a,{dismissible:!1},e.createElement(r,{name:t.circleInfo}),e.createElement(n,null,"Default message"))},E={tags:["!dev"],parameters:{layout:"centered"},render:({})=>e.createElement(a,null,e.createElement(r,{name:t.circleInfo}),e.createElement(n,null,"Message"))},y={decorators:[s=>e.createElement("div",{style:{display:"inline-flex",flexFlow:"column",gap:"8px"}},s())],tags:["!dev"],render:({})=>e.createElement(e.Fragment,null,e.createElement(a,{variant:f.default},e.createElement(r,{name:t.circleInfo}),e.createElement(n,null,"Default variant Message")),e.createElement(a,{variant:f.light},e.createElement(r,{name:t.circleInfo}),e.createElement(n,null,"Light variant Message")))};var A,v,S;g.parameters={...g.parameters,docs:{...(A=g.parameters)==null?void 0:A.docs,source:{originalSource:`{
  render: (arg: DemoArg) => <Message color={arg.color} dismissible={arg.dismissible} variant={arg.variant}>
      <MessageIcon name={arg.name || ICON_NAME.circleInfo} />

      <MessageBody>
        {arg.children}
      </MessageBody>
    </Message>,
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
    name: {
      table: {
        category: CONTROL_CATEGORY.design,
        type: {
          summary: 'ICON_NAME'
        }
      },
      control: {
        type: 'select'
      },
      options: ICON_NAMES
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
}`,...(S=(v=g.parameters)==null?void 0:v.docs)==null?void 0:S.source}}};var b,R,h;d.parameters={...d.parameters,docs:{...(b=d.parameters)==null?void 0:b.docs,source:{originalSource:`{
  decorators: [story => <div style={{
    display: 'inline-flex',
    flexFlow: 'column',
    gap: '8px'
  }}>{story()}</div>],
  tags: ['!dev'],
  render: ({}) => <>
      <Message color={MESSAGE_COLOR.critical}>
        <MessageIcon name={ICON_NAME.hexagonExclamation} />
        <MessageBody>Critical message</MessageBody>
      </Message>

      <Message color={MESSAGE_COLOR.information}>
        <MessageIcon name={ICON_NAME.circleInfo} />
        <MessageBody>Information message</MessageBody>
      </Message>

      <Message color={MESSAGE_COLOR.neutral}>
        <MessageIcon name={ICON_NAME.email} />
        <MessageBody>Neutral message</MessageBody>
      </Message>

      <Message color={MESSAGE_COLOR.primary}>
        <MessageIcon name={ICON_NAME.lightbulb} />
        <MessageBody>Primary message</MessageBody>
      </Message>

      <Message color={MESSAGE_COLOR.success}>
        <MessageIcon name={ICON_NAME.circleCheck} />
        <MessageBody>Success message</MessageBody>
      </Message>

      <Message color={MESSAGE_COLOR.warning}>
        <MessageIcon name={ICON_NAME.triangleExclamation} />
        <MessageBody>Warning message</MessageBody>
      </Message>
    </>
}`,...(h=(R=d.parameters)==null?void 0:R.docs)==null?void 0:h.source}}};var T,x,B;u.parameters={...u.parameters,docs:{...(T=u.parameters)==null?void 0:T.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: ({}) => <Message>
      <MessageIcon name={ICON_NAME.circleInfo} />

      <MessageBody>
        Default message
      </MessageBody>
    </Message>
}`,...(B=(x=u.parameters)==null?void 0:x.docs)==null?void 0:B.source}}};var G,L,q;p.parameters={...p.parameters,docs:{...(G=p.parameters)==null?void 0:G.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: ({}) => <Message>
      <MessageIcon name={ICON_NAME.circleInfo} />

      <MessageBody>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer faucibus, libero et pharetra mattis, ipsum velit semper risus, non ultrices lacus massa sed arcu. Nulla sed tellus.
      </MessageBody>
    </Message>
}`,...(q=(L=p.parameters)==null?void 0:L.docs)==null?void 0:q.source}}};var w,D,V;M.parameters={...M.parameters,docs:{...(w=M.parameters)==null?void 0:w.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: ({}) => <Message dismissible={false}>
      <MessageIcon name={ICON_NAME.circleInfo} />

      <MessageBody>
        Default message
      </MessageBody>
    </Message>
}`,...(V=(D=M.parameters)==null?void 0:D.docs)==null?void 0:V.source}}};var j,F,$;E.parameters={...E.parameters,docs:{...(j=E.parameters)==null?void 0:j.docs,source:{originalSource:`{
  tags: ['!dev'],
  parameters: {
    layout: 'centered'
  },
  render: ({}) => <Message>
      <MessageIcon name={ICON_NAME.circleInfo} />

      <MessageBody>
        Message
      </MessageBody>
    </Message>
}`,...($=(F=E.parameters)==null?void 0:F.docs)==null?void 0:$.source}}};var P,W,Y;y.parameters={...y.parameters,docs:{...(P=y.parameters)==null?void 0:P.docs,source:{originalSource:`{
  decorators: [story => <div style={{
    display: 'inline-flex',
    flexFlow: 'column',
    gap: '8px'
  }}>{story()}</div>],
  tags: ['!dev'],
  render: ({}) => <>
      <Message variant={MESSAGE_VARIANT.default}>
        <MessageIcon name={ICON_NAME.circleInfo} />
        <MessageBody>
          Default variant Message
        </MessageBody>
      </Message>

      <Message variant={MESSAGE_VARIANT.light}>
        <MessageIcon name={ICON_NAME.circleInfo} />
        <MessageBody>
          Light variant Message
        </MessageBody>
      </Message>
    </>
}`,...(Y=(W=y.parameters)==null?void 0:W.docs)==null?void 0:Y.source}}};const ce=["Demo","Color","Default","Multiline","NonDismissible","Overview","Variant"],Ee=Object.freeze(Object.defineProperty({__proto__:null,Color:d,Default:u,Demo:g,Multiline:p,NonDismissible:M,Overview:E,Variant:y,__namedExportsOrder:ce,default:le},Symbol.toStringTag,{value:"Module"}));export{d as C,u as D,Ee as M,M as N,E as O,y as V,p as a};
