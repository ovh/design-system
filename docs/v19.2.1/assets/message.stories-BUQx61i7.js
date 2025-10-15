import{r as v,e}from"./index-jIWwRBLr.js";import{B as b,d as ue,c as Me}from"./Button-Tqe-VRSF.js";import{a as l,C as pe}from"./colors-DSObuHxd.js";import{I as oe,a as o,b as Ee}from"./icon-name-C581wThh.js";import{j as I}from"./jsx-runtime-Cfl8ynUo.js";import{c as h}from"./index-CqY9YpN0.js";import{L as c,u as ye}from"./useI18n-C0NLVYPv.js";import{e as _e,o as fe,C as d}from"./controls-BtiQQn1l.js";import{s as Oe}from"./source-CPEZJ6oD.js";var re=(s=>(s.closeButton="message.close.button",s))(re||{});const Ne={"message.close.button":{[c.de]:"Schließen",[c.en]:"Close",[c.es]:"Cerrar",[c.fr]:"Fermer",[c.it]:"Chiudi",[c.nl]:"Sluiten",[c.pl]:"Zamknij",[c.pt]:"Fechar"}};var S=(s=>(s.default="default",s.light="light",s))(S||{});const Ae=Object.freeze(Object.values(S)),Ie="_message_1oosv_2",ve="_message__close_1oosv_25",C={message:Ie,"message--default":"_message--default_1oosv_9","message--critical":"_message--critical_1oosv_9","message--information":"_message--information_1oosv_13","message--neutral":"_message--neutral_1oosv_17","message--primary":"_message--primary_1oosv_21",message__close:ve,"message--success":"_message--success_1oosv_28","message--warning":"_message--warning_1oosv_32","message--light":"_message--light_1oosv_36"},a=v.forwardRef(({children:s,className:i,color:m=l.information,dismissible:g=!0,i18n:r,locale:le,onRemove:ce,variant:ie=S.default,...me},ge)=>{const{translate:de}=ye(Ne,le,r);return I.jsxs("div",{className:h(C.message,C[`message--${m}`],C[`message--${ie}`],i),"data-ods":"message",ref:ge,...me,children:[s,g&&I.jsx(b,{"aria-label":de(re.closeButton),className:C.message__close,color:l.neutral,onClick:ce,size:Me.xs,variant:ue.ghost,children:I.jsx(oe,{name:o.xmark})})]})});a.displayName="Message";a.__docgenInfo={description:"",methods:[],displayName:"Message",props:{color:{required:!1,tsType:{name:"literal",value:"`${COLOR}`"},description:`@type=MESSAGE_COLOR
The color preset to use.`,defaultValue:{value:"MESSAGE_COLOR.information",computed:!0}},dismissible:{required:!1,tsType:{name:"boolean"},description:"Whether the remove button is displayed.",defaultValue:{value:"true",computed:!1}},i18n:{required:!1,tsType:{name:"Partial",elements:[{name:"Record",elements:[{name:"MESSAGE_I18N"},{name:"string"}],raw:"Record<MESSAGE_I18N, string>"}],raw:"Partial<Record<MESSAGE_I18N, string>>"},description:"Internal translations override."},locale:{required:!1,tsType:{name:"literal",value:"`${LOCALE}`"},description:"The locale used for the translation of the internal elements."},onRemove:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Callback fired when the close button is pressed."},variant:{required:!1,tsType:{name:"literal",value:"`${MESSAGE_VARIANT}`"},description:"The variant preset to use.",defaultValue:{value:"MESSAGE_VARIANT.default",computed:!0}}},composes:["ComponentPropsWithRef"]};const Se={"message-body":"_message-body_fe7x3_2"},n=v.forwardRef(({children:s,className:i,...m},g)=>I.jsx("div",{className:h(Se["message-body"],i),"data-ods":"message-body",ref:g,...m,children:s}));n.displayName="MessageBody";n.__docgenInfo={description:"",methods:[],displayName:"MessageBody",composes:["ComponentPropsWithRef"]};const Ce={"message-icon":"_message-icon_mpgx8_2"},t=v.forwardRef(({children:s,className:i,name:m,...g},r)=>I.jsx(oe,{className:h(Ce["message-icon"],i),"data-ods":"message-icon",name:m,ref:r,...g}));t.displayName="MessageIcon";t.__docgenInfo={description:"",methods:[],displayName:"MessageIcon",props:{name:{required:!0,tsType:{name:"literal",value:"`${ICON_NAME}`"},description:"The icon name."}},composes:["ComponentPropsWithRef"]};const be={argTypes:_e(["i18n","locale","onRemove"]),component:a,subcomponents:{MessageBody:n,MessageIcon:t},title:"React Components/Message"},u={render:s=>e.createElement(a,{color:s.color,dismissible:s.dismissible,variant:s.variant},e.createElement(t,{name:s.name||o.circleInfo}),e.createElement(n,null,s.children)),argTypes:fe({children:{table:{category:d.slot},control:"text"},color:{table:{category:d.design,type:{summary:"MESSAGE_COLOR"}},control:{type:"select"},options:pe},dismissible:{table:{category:d.general},control:{type:"boolean"}},name:{table:{category:d.design,type:{summary:"ICON_NAME"}},control:{type:"select"},options:Ee},variant:{table:{category:d.design,type:{summary:"MESSAGE_VARIANT"}},control:{type:"select"},options:Ae}}),args:{children:"My message"}},M={globals:{imports:"import { ICON_NAME, MESSAGE_COLOR, Message, MessageBody, MessageIcon } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>e.createElement("ul",{style:{display:"flex",flexFlow:"column",rowGap:"8px",margin:0,padding:0,listStyle:"none"}},e.createElement("li",null,e.createElement(a,null,e.createElement(t,{name:o.circleCheck}),e.createElement(n,null,"Your changes have been saved."))),e.createElement("li",null,e.createElement(a,{color:l.warning},e.createElement(t,{name:o.triangleExclamation}),e.createElement(n,null,"Some fields need your attention."))))},p={globals:{imports:"import { ICON_NAME, MESSAGE_COLOR, Message, MessageBody, MessageIcon } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>e.createElement("div",{role:"list",style:{display:"flex",flexFlow:"column",rowGap:"8px"}},e.createElement(a,{role:"listitem"},e.createElement(t,{name:o.circleCheck}),e.createElement(n,null,"Your changes have been saved.")),e.createElement(a,{color:l.warning,role:"listitem"},e.createElement(t,{name:o.triangleExclamation}),e.createElement(n,null,"Some fields need your attention.")))},E={decorators:[s=>e.createElement("div",{style:{display:"flex",flexFlow:"column",gap:"8px"}},s())],globals:{imports:`import { BUTTON_COLOR, ICON_NAME, MESSAGE_COLOR, Button, Message, MessageBody, MessageIcon } from '@ovhcloud/ods-react';
import { useState } from 'react';`},tags:["!dev"],parameters:{docs:{source:{...Oe()}}},render:({})=>{const[s,i]=v.useState([]),[m,g]=v.useState([]);return e.createElement(e.Fragment,null,e.createElement("div",null,e.createElement(b,{onClick:()=>g(r=>r.concat([new Date().toString()]))},"Add status"),e.createElement(b,{color:l.critical,onClick:()=>i(r=>r.concat([new Date().toString()]))},"Add alert")),e.createElement("div",{role:"alert"},s.map(r=>e.createElement(a,{color:l.critical,key:r},e.createElement(t,{name:o.hexagonExclamation}),e.createElement(n,null,"Alert: ",r)))),e.createElement("div",{role:"status"},m.map(r=>e.createElement(a,{key:r},e.createElement(t,{name:o.circleInfo}),e.createElement(n,null,"Status: ",r)))))}},y={decorators:[s=>e.createElement("div",{style:{display:"inline-flex",flexFlow:"column",gap:"8px"}},s())],globals:{imports:"import { ICON_NAME, MESSAGE_COLOR, Message, MessageBody, MessageIcon } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>e.createElement(e.Fragment,null,e.createElement(a,{color:l.critical},e.createElement(t,{name:o.hexagonExclamation}),e.createElement(n,null,"Critical message")),e.createElement(a,{color:l.information},e.createElement(t,{name:o.circleInfo}),e.createElement(n,null,"Information message")),e.createElement(a,{color:l.neutral},e.createElement(t,{name:o.email}),e.createElement(n,null,"Neutral message")),e.createElement(a,{color:l.primary},e.createElement(t,{name:o.lightbulb}),e.createElement(n,null,"Primary message")),e.createElement(a,{color:l.success},e.createElement(t,{name:o.circleCheck}),e.createElement(n,null,"Success message")),e.createElement(a,{color:l.warning},e.createElement(t,{name:o.triangleExclamation}),e.createElement(n,null,"Warning message")))},_={globals:{imports:"import { ICON_NAME, Message, MessageBody, MessageIcon } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>e.createElement(a,null,e.createElement(t,{name:o.circleInfo}),e.createElement(n,null,"Default message"))},f={globals:{imports:"import { ICON_NAME, Message, MessageBody, MessageIcon } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>e.createElement(a,null,e.createElement(t,{name:o.circleInfo}),e.createElement(n,null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer faucibus, libero et pharetra mattis, ipsum velit semper risus, non ultrices lacus massa sed arcu. Nulla sed tellus."))},O={globals:{imports:"import { ICON_NAME, Message, MessageBody, MessageIcon } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>e.createElement(a,{dismissible:!1},e.createElement(t,{name:o.circleInfo}),e.createElement(n,null,"Default message"))},N={tags:["!dev"],parameters:{layout:"centered"},render:({})=>e.createElement(a,null,e.createElement(t,{name:o.circleInfo}),e.createElement(n,null,"Message"))},A={decorators:[s=>e.createElement("div",{style:{display:"inline-flex",flexFlow:"column",gap:"8px"}},s())],globals:{imports:"import { ICON_NAME, MESSAGE_VARIANT, Message, MessageBody, MessageIcon } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>e.createElement(e.Fragment,null,e.createElement(a,{variant:S.default},e.createElement(t,{name:o.circleInfo}),e.createElement(n,null,"Default variant Message")),e.createElement(a,{variant:S.light},e.createElement(t,{name:o.circleInfo}),e.createElement(n,null,"Light variant Message")))};var B,R,x;u.parameters={...u.parameters,docs:{...(B=u.parameters)==null?void 0:B.docs,source:{originalSource:`{
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
}`,...(x=(R=u.parameters)==null?void 0:R.docs)==null?void 0:x.source}}};var T,G,L;M.parameters={...M.parameters,docs:{...(T=M.parameters)==null?void 0:T.docs,source:{originalSource:`{
  globals: {
    imports: \`import { ICON_NAME, MESSAGE_COLOR, Message, MessageBody, MessageIcon } from '@ovhcloud/ods-react';\`
  },
  tags: ['!dev'],
  render: ({}) => <ul style={{
    display: 'flex',
    flexFlow: 'column',
    rowGap: '8px',
    margin: 0,
    padding: 0,
    listStyle: 'none'
  }}>
      <li>
        <Message>
          <MessageIcon name={ICON_NAME.circleCheck} />

          <MessageBody>
            Your changes have been saved.
          </MessageBody>
        </Message>
      </li>

      <li>
        <Message color={MESSAGE_COLOR.warning}>
          <MessageIcon name={ICON_NAME.triangleExclamation} />

          <MessageBody>
            Some fields need your attention.
          </MessageBody>
        </Message>
      </li>
    </ul>
}`,...(L=(G=M.parameters)==null?void 0:G.docs)==null?void 0:L.source}}};var w,D,k;p.parameters={...p.parameters,docs:{...(w=p.parameters)==null?void 0:w.docs,source:{originalSource:`{
  globals: {
    imports: \`import { ICON_NAME, MESSAGE_COLOR, Message, MessageBody, MessageIcon } from '@ovhcloud/ods-react';\`
  },
  tags: ['!dev'],
  render: ({}) => <div role="list" style={{
    display: 'flex',
    flexFlow: 'column',
    rowGap: '8px'
  }}>
      <Message role="listitem">
        <MessageIcon name={ICON_NAME.circleCheck} />

        <MessageBody>
          Your changes have been saved.
        </MessageBody>
      </Message>

      <Message color={MESSAGE_COLOR.warning} role="listitem">
        <MessageIcon name={ICON_NAME.triangleExclamation} />

        <MessageBody>
          Some fields need your attention.
        </MessageBody>
      </Message>
    </div>
}`,...(k=(D=p.parameters)==null?void 0:D.docs)==null?void 0:k.source}}};var F,V,j;E.parameters={...E.parameters,docs:{...(F=E.parameters)==null?void 0:F.docs,source:{originalSource:`{
  decorators: [story => <div style={{
    display: 'flex',
    flexFlow: 'column',
    gap: '8px'
  }}>{story()}</div>],
  globals: {
    imports: \`import { BUTTON_COLOR, ICON_NAME, MESSAGE_COLOR, Button, Message, MessageBody, MessageIcon } from '@ovhcloud/ods-react';
import { useState } from 'react';\`
  },
  tags: ['!dev'],
  parameters: {
    docs: {
      source: {
        ...staticSourceRenderConfig()
      }
    }
  },
  render: ({}) => {
    const [alerts, setAlerts] = useState<string[]>([]);
    const [statuses, setStatuses] = useState<string[]>([]);
    return <>
        <div>
          <Button onClick={() => setStatuses(s => s.concat([new Date().toString()]))}>
            Add status
          </Button>

          <Button color={BUTTON_COLOR.critical} onClick={() => setAlerts(a => a.concat([new Date().toString()]))}>
            Add alert
          </Button>
        </div>

        <div role="alert">
          {alerts.map(alert => <Message color={MESSAGE_COLOR.critical} key={alert}>
                <MessageIcon name={ICON_NAME.hexagonExclamation} />

                <MessageBody>
                  Alert: {alert}
                </MessageBody>
              </Message>)}
        </div>

        <div role="status">
          {statuses.map(status => <Message key={status}>
                <MessageIcon name={ICON_NAME.circleInfo} />

                <MessageBody>
                  Status: {status}
                </MessageBody>
              </Message>)}
        </div>
      </>;
  }
}`,...(j=(V=E.parameters)==null?void 0:V.docs)==null?void 0:j.source}}};var Y,P,$;y.parameters={...y.parameters,docs:{...(Y=y.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  decorators: [story => <div style={{
    display: 'inline-flex',
    flexFlow: 'column',
    gap: '8px'
  }}>{story()}</div>],
  globals: {
    imports: \`import { ICON_NAME, MESSAGE_COLOR, Message, MessageBody, MessageIcon } from '@ovhcloud/ods-react';\`
  },
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
}`,...($=(P=y.parameters)==null?void 0:P.docs)==null?void 0:$.source}}};var q,W,U;_.parameters={..._.parameters,docs:{...(q=_.parameters)==null?void 0:q.docs,source:{originalSource:`{
  globals: {
    imports: \`import { ICON_NAME, Message, MessageBody, MessageIcon } from '@ovhcloud/ods-react';\`
  },
  tags: ['!dev'],
  render: ({}) => <Message>
      <MessageIcon name={ICON_NAME.circleInfo} />

      <MessageBody>
        Default message
      </MessageBody>
    </Message>
}`,...(U=(W=_.parameters)==null?void 0:W.docs)==null?void 0:U.source}}};var z,Z,H;f.parameters={...f.parameters,docs:{...(z=f.parameters)==null?void 0:z.docs,source:{originalSource:`{
  globals: {
    imports: \`import { ICON_NAME, Message, MessageBody, MessageIcon } from '@ovhcloud/ods-react';\`
  },
  tags: ['!dev'],
  render: ({}) => <Message>
      <MessageIcon name={ICON_NAME.circleInfo} />

      <MessageBody>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer faucibus, libero et pharetra mattis, ipsum velit semper risus, non ultrices lacus massa sed arcu. Nulla sed tellus.
      </MessageBody>
    </Message>
}`,...(H=(Z=f.parameters)==null?void 0:Z.docs)==null?void 0:H.source}}};var J,K,Q;O.parameters={...O.parameters,docs:{...(J=O.parameters)==null?void 0:J.docs,source:{originalSource:`{
  globals: {
    imports: \`import { ICON_NAME, Message, MessageBody, MessageIcon } from '@ovhcloud/ods-react';\`
  },
  tags: ['!dev'],
  render: ({}) => <Message dismissible={false}>
      <MessageIcon name={ICON_NAME.circleInfo} />

      <MessageBody>
        Default message
      </MessageBody>
    </Message>
}`,...(Q=(K=O.parameters)==null?void 0:K.docs)==null?void 0:Q.source}}};var X,ee,se;N.parameters={...N.parameters,docs:{...(X=N.parameters)==null?void 0:X.docs,source:{originalSource:`{
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
}`,...(se=(ee=N.parameters)==null?void 0:ee.docs)==null?void 0:se.source}}};var ae,ne,te;A.parameters={...A.parameters,docs:{...(ae=A.parameters)==null?void 0:ae.docs,source:{originalSource:`{
  decorators: [story => <div style={{
    display: 'inline-flex',
    flexFlow: 'column',
    gap: '8px'
  }}>{story()}</div>],
  globals: {
    imports: \`import { ICON_NAME, MESSAGE_VARIANT, Message, MessageBody, MessageIcon } from '@ovhcloud/ods-react';\`
  },
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
}`,...(te=(ne=A.parameters)==null?void 0:ne.docs)==null?void 0:te.source}}};const he=["Demo","AccessibilityGrouping","AccessibilityAlternativeGrouping","AccessibilityRoles","Color","Default","Multiline","NonDismissible","Overview","Variant"],Fe=Object.freeze(Object.defineProperty({__proto__:null,AccessibilityAlternativeGrouping:p,AccessibilityGrouping:M,AccessibilityRoles:E,Color:y,Default:_,Demo:u,Multiline:f,NonDismissible:O,Overview:N,Variant:A,__namedExportsOrder:he,default:be},Symbol.toStringTag,{value:"Module"}));export{M as A,y as C,_ as D,Fe as M,O as N,N as O,A as V,p as a,E as b,f as c};
