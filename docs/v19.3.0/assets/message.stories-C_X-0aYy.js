import{e,r as N}from"./index-jIWwRBLr.js";import{B as S}from"./Button-B-GJ-1TA.js";import{C as re,a as r}from"./colors-DSObuHxd.js";import{b as oe,a as t}from"./icon-name-C581wThh.js";import{M as s,a,b as n,c as le,d as A}from"./MessageIcon-BNLHfqGE.js";import{e as ce,o as ie,C as c}from"./controls-BtiQQn1l.js";import{s as me}from"./source-CPEZJ6oD.js";const ge={argTypes:ce(["i18n","locale","onRemove"]),component:n,subcomponents:{MessageBody:a,MessageIcon:s},title:"React Components/Message"},i={render:o=>e.createElement(n,{color:o.color,dismissible:o.dismissible,variant:o.variant},e.createElement(s,{name:o.name||t.circleInfo}),e.createElement(a,null,o.children)),argTypes:ie({children:{table:{category:c.slot},control:"text"},color:{table:{category:c.design,type:{summary:"MESSAGE_COLOR"}},control:{type:"select"},options:re},dismissible:{table:{category:c.general},control:{type:"boolean"}},name:{table:{category:c.design,type:{summary:"ICON_NAME"}},control:{type:"select"},options:oe},variant:{table:{category:c.design,type:{summary:"MESSAGE_VARIANT"}},control:{type:"select"},options:le}}),args:{children:"My message"}},m={globals:{imports:"import { ICON_NAME, MESSAGE_COLOR, Message, MessageBody, MessageIcon } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>e.createElement("ul",{style:{display:"flex",flexFlow:"column",rowGap:"8px",margin:0,padding:0,listStyle:"none"}},e.createElement("li",null,e.createElement(n,null,e.createElement(s,{name:t.circleCheck}),e.createElement(a,null,"Your changes have been saved."))),e.createElement("li",null,e.createElement(n,{color:r.warning},e.createElement(s,{name:t.triangleExclamation}),e.createElement(a,null,"Some fields need your attention."))))},g={globals:{imports:"import { ICON_NAME, MESSAGE_COLOR, Message, MessageBody, MessageIcon } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>e.createElement("div",{role:"list",style:{display:"flex",flexFlow:"column",rowGap:"8px"}},e.createElement(n,{role:"listitem"},e.createElement(s,{name:t.circleCheck}),e.createElement(a,null,"Your changes have been saved.")),e.createElement(n,{color:r.warning,role:"listitem"},e.createElement(s,{name:t.triangleExclamation}),e.createElement(a,null,"Some fields need your attention.")))},d={decorators:[o=>e.createElement("div",{style:{display:"flex",flexFlow:"column",gap:"8px"}},o())],globals:{imports:`import { BUTTON_COLOR, ICON_NAME, MESSAGE_COLOR, Button, Message, MessageBody, MessageIcon } from '@ovhcloud/ods-react';
import { useState } from 'react';`},tags:["!dev"],parameters:{docs:{source:{...me()}}},render:({})=>{const[o,ae]=N.useState([]),[ne,te]=N.useState([]);return e.createElement(e.Fragment,null,e.createElement("div",null,e.createElement(S,{onClick:()=>te(l=>l.concat([new Date().toString()]))},"Add status"),e.createElement(S,{color:r.critical,onClick:()=>ae(l=>l.concat([new Date().toString()]))},"Add alert")),e.createElement("div",{role:"alert"},o.map(l=>e.createElement(n,{color:r.critical,key:l},e.createElement(s,{name:t.hexagonExclamation}),e.createElement(a,null,"Alert: ",l)))),e.createElement("div",{role:"status"},ne.map(l=>e.createElement(n,{key:l},e.createElement(s,{name:t.circleInfo}),e.createElement(a,null,"Status: ",l)))))}},M={decorators:[o=>e.createElement("div",{style:{display:"inline-flex",flexFlow:"column",gap:"8px"}},o())],globals:{imports:"import { ICON_NAME, MESSAGE_COLOR, Message, MessageBody, MessageIcon } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>e.createElement(e.Fragment,null,e.createElement(n,{color:r.critical},e.createElement(s,{name:t.hexagonExclamation}),e.createElement(a,null,"Critical message")),e.createElement(n,{color:r.information},e.createElement(s,{name:t.circleInfo}),e.createElement(a,null,"Information message")),e.createElement(n,{color:r.neutral},e.createElement(s,{name:t.email}),e.createElement(a,null,"Neutral message")),e.createElement(n,{color:r.primary},e.createElement(s,{name:t.lightbulb}),e.createElement(a,null,"Primary message")),e.createElement(n,{color:r.success},e.createElement(s,{name:t.circleCheck}),e.createElement(a,null,"Success message")),e.createElement(n,{color:r.warning},e.createElement(s,{name:t.triangleExclamation}),e.createElement(a,null,"Warning message")))},E={globals:{imports:"import { ICON_NAME, Message, MessageBody, MessageIcon } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>e.createElement(n,null,e.createElement(s,{name:t.circleInfo}),e.createElement(a,null,"Default message"))},u={globals:{imports:"import { ICON_NAME, Message, MessageBody, MessageIcon } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>e.createElement(n,null,e.createElement(s,{name:t.circleInfo}),e.createElement(a,null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer faucibus, libero et pharetra mattis, ipsum velit semper risus, non ultrices lacus massa sed arcu. Nulla sed tellus."))},p={globals:{imports:"import { ICON_NAME, Message, MessageBody, MessageIcon } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>e.createElement(n,{dismissible:!1},e.createElement(s,{name:t.circleInfo}),e.createElement(a,null,"Default message"))},y={tags:["!dev"],parameters:{layout:"centered"},render:({})=>e.createElement(n,null,e.createElement(s,{name:t.circleInfo}),e.createElement(a,null,"Message"))},O={decorators:[o=>e.createElement("div",{style:{display:"inline-flex",flexFlow:"column",gap:"8px"}},o())],globals:{imports:"import { ICON_NAME, MESSAGE_VARIANT, Message, MessageBody, MessageIcon } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>e.createElement(e.Fragment,null,e.createElement(n,{variant:A.default},e.createElement(s,{name:t.circleInfo}),e.createElement(a,null,"Default variant Message")),e.createElement(n,{variant:A.light},e.createElement(s,{name:t.circleInfo}),e.createElement(a,null,"Light variant Message")))},I={parameters:{layout:"fullscreen"},tags:["!dev"],render:({})=>e.createElement("div",{style:{display:"inline-flex",flexFlow:"column",gap:"8px"}},e.createElement(n,null,e.createElement(s,{name:t.circleInfo}),e.createElement(a,null,"Default message")),e.createElement(n,{color:r.information},e.createElement(s,{name:t.circleInfo}),e.createElement(a,null,"Information")),e.createElement(n,{color:r.success},e.createElement(s,{name:t.circleCheck}),e.createElement(a,null,"Success")),e.createElement(n,{color:r.warning},e.createElement(s,{name:t.triangleExclamation}),e.createElement(a,null,"Warning")),e.createElement(n,{color:r.critical},e.createElement(s,{name:t.hexagonExclamation}),e.createElement(a,null,"Critical")),e.createElement(n,{variant:A.light},e.createElement(s,{name:t.circleInfo}),e.createElement(a,null,"Light variant")))};var C,f,v;i.parameters={...i.parameters,docs:{...(C=i.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
}`,...(v=(f=i.parameters)==null?void 0:f.docs)==null?void 0:v.source}}};var _,B,b;m.parameters={...m.parameters,docs:{...(_=m.parameters)==null?void 0:_.docs,source:{originalSource:`{
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
}`,...(b=(B=m.parameters)==null?void 0:B.docs)==null?void 0:b.source}}};var x,h,R;g.parameters={...g.parameters,docs:{...(x=g.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
}`,...(R=(h=g.parameters)==null?void 0:h.docs)==null?void 0:R.source}}};var G,L,T;d.parameters={...d.parameters,docs:{...(G=d.parameters)==null?void 0:G.docs,source:{originalSource:`{
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
}`,...(T=(L=d.parameters)==null?void 0:L.docs)==null?void 0:T.source}}};var w,D,k;M.parameters={...M.parameters,docs:{...(w=M.parameters)==null?void 0:w.docs,source:{originalSource:`{
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
}`,...(k=(D=M.parameters)==null?void 0:D.docs)==null?void 0:k.source}}};var F,V,Y;E.parameters={...E.parameters,docs:{...(F=E.parameters)==null?void 0:F.docs,source:{originalSource:`{
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
}`,...(Y=(V=E.parameters)==null?void 0:V.docs)==null?void 0:Y.source}}};var W,P,U;u.parameters={...u.parameters,docs:{...(W=u.parameters)==null?void 0:W.docs,source:{originalSource:`{
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
}`,...(U=(P=u.parameters)==null?void 0:P.docs)==null?void 0:U.source}}};var j,z,q;p.parameters={...p.parameters,docs:{...(j=p.parameters)==null?void 0:j.docs,source:{originalSource:`{
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
}`,...(q=(z=p.parameters)==null?void 0:z.docs)==null?void 0:q.source}}};var H,J,K;y.parameters={...y.parameters,docs:{...(H=y.parameters)==null?void 0:H.docs,source:{originalSource:`{
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
}`,...(K=(J=y.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};var Q,X,Z;O.parameters={...O.parameters,docs:{...(Q=O.parameters)==null?void 0:Q.docs,source:{originalSource:`{
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
}`,...(Z=(X=O.parameters)==null?void 0:X.docs)==null?void 0:Z.source}}};var $,ee,se;I.parameters={...I.parameters,docs:{...($=I.parameters)==null?void 0:$.docs,source:{originalSource:`{
  parameters: {
    layout: 'fullscreen'
  },
  tags: ['!dev'],
  render: ({}) => <div style={{
    display: 'inline-flex',
    flexFlow: 'column',
    gap: '8px'
  }}>
      <Message>
        <MessageIcon name={ICON_NAME.circleInfo} />
        <MessageBody>Default message</MessageBody>
      </Message>
      <Message color={MESSAGE_COLOR.information}>
        <MessageIcon name={ICON_NAME.circleInfo} />
        <MessageBody>Information</MessageBody>
      </Message>
      <Message color={MESSAGE_COLOR.success}>
        <MessageIcon name={ICON_NAME.circleCheck} />
        <MessageBody>Success</MessageBody>
      </Message>
      <Message color={MESSAGE_COLOR.warning}>
        <MessageIcon name={ICON_NAME.triangleExclamation} />
        <MessageBody>Warning</MessageBody>
      </Message>
      <Message color={MESSAGE_COLOR.critical}>
        <MessageIcon name={ICON_NAME.hexagonExclamation} />
        <MessageBody>Critical</MessageBody>
      </Message>
      <Message variant={MESSAGE_VARIANT.light}>
        <MessageIcon name={ICON_NAME.circleInfo} />
        <MessageBody>Light variant</MessageBody>
      </Message>
    </div>
}`,...(se=(ee=I.parameters)==null?void 0:ee.docs)==null?void 0:se.source}}};const de=["Demo","AccessibilityGrouping","AccessibilityAlternativeGrouping","AccessibilityRoles","Color","Default","Multiline","NonDismissible","Overview","Variant","ThemeGenerator"],Ae=Object.freeze(Object.defineProperty({__proto__:null,AccessibilityAlternativeGrouping:g,AccessibilityGrouping:m,AccessibilityRoles:d,Color:M,Default:E,Demo:i,Multiline:u,NonDismissible:p,Overview:y,ThemeGenerator:I,Variant:O,__namedExportsOrder:de,default:ge},Symbol.toStringTag,{value:"Module"}));export{m as A,M as C,E as D,Ae as M,p as N,y as O,O as V,g as a,d as b,u as c};
