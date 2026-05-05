import{e,r as S}from"./index-jIWwRBLr.js";import{B as C}from"./Button-B-GJ-1TA.js";import{C as me,a as r}from"./colors-DSObuHxd.js";import{b as ge,a as t}from"./icon-name-D0KNfDOz.js";import{b as s,a,M as n,c as de,d as N}from"./index-CTOO_CWD.js";import{e as Me,o as Ee,C as c}from"./controls-BtiQQn1l.js";import{s as oe}from"./source-CPEZJ6oD.js";const ue={argTypes:Me(["i18n","locale","onRemove"]),component:n,subcomponents:{MessageBody:a,MessageIcon:s},title:"React Components/Message"},i={render:o=>e.createElement(n,{color:o.color,dismissible:o.dismissible,variant:o.variant},e.createElement(s,{name:o.name||t.circleInfo}),e.createElement(a,null,o.children)),argTypes:Ee({children:{table:{category:c.slot},control:"text"},color:{table:{category:c.design,type:{summary:"MESSAGE_COLOR"}},control:{type:"select"},options:me},dismissible:{table:{category:c.general},control:{type:"boolean"}},name:{table:{category:c.design,type:{summary:"ICON_NAME"}},control:{type:"select"},options:ge},variant:{table:{category:c.design,type:{summary:"MESSAGE_VARIANT"}},control:{type:"select"},options:de}}),args:{children:"My message"}},m={globals:{imports:"import { ICON_NAME, MESSAGE_COLOR, Message, MessageBody, MessageIcon } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>e.createElement("ul",{style:{display:"flex",flexFlow:"column",rowGap:"8px",margin:0,padding:0,listStyle:"none"}},e.createElement("li",null,e.createElement(n,null,e.createElement(s,{name:t.circleCheck}),e.createElement(a,null,"Your changes have been saved."))),e.createElement("li",null,e.createElement(n,{color:r.warning},e.createElement(s,{name:t.triangleExclamation}),e.createElement(a,null,"Some fields need your attention."))))},g={globals:{imports:"import { ICON_NAME, MESSAGE_COLOR, Message, MessageBody, MessageIcon } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>e.createElement("div",{role:"list",style:{display:"flex",flexFlow:"column",rowGap:"8px"}},e.createElement(n,{role:"listitem"},e.createElement(s,{name:t.circleCheck}),e.createElement(a,null,"Your changes have been saved.")),e.createElement(n,{color:r.warning,role:"listitem"},e.createElement(s,{name:t.triangleExclamation}),e.createElement(a,null,"Some fields need your attention.")))},d={decorators:[o=>e.createElement("div",{style:{display:"flex",flexFlow:"column",gap:"8px"}},o())],globals:{imports:`import { BUTTON_COLOR, ICON_NAME, MESSAGE_COLOR, Button, Message, MessageBody, MessageIcon } from '@ovhcloud/ods-react';
import { useState } from 'react';`},tags:["!dev"],parameters:{docs:{source:{...oe()}}},render:({})=>{const[o,le]=S.useState([]),[ce,ie]=S.useState([]);return e.createElement(e.Fragment,null,e.createElement("div",null,e.createElement(C,{onClick:()=>ie(l=>l.concat([new Date().toString()]))},"Add status"),e.createElement(C,{color:r.critical,onClick:()=>le(l=>l.concat([new Date().toString()]))},"Add alert")),e.createElement("div",{role:"alert"},o.map(l=>e.createElement(n,{color:r.critical,key:l},e.createElement(s,{name:t.hexagonExclamation}),e.createElement(a,null,"Alert: ",l)))),e.createElement("div",{role:"status"},ce.map(l=>e.createElement(n,{key:l},e.createElement(s,{name:t.circleInfo}),e.createElement(a,null,"Status: ",l)))))}},M={tags:["!dev"],render:({})=>e.createElement(n,null,e.createElement(s,{name:t.circleInfo}),e.createElement(a,null,"Message"))},E={decorators:[o=>e.createElement("div",{style:{display:"inline-flex",flexFlow:"column",gap:"8px"}},o())],globals:{imports:"import { ICON_NAME, MESSAGE_COLOR, Message, MessageBody, MessageIcon } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>e.createElement(e.Fragment,null,e.createElement(n,{color:r.critical},e.createElement(s,{name:t.hexagonExclamation}),e.createElement(a,null,"Critical message")),e.createElement(n,{color:r.information},e.createElement(s,{name:t.circleInfo}),e.createElement(a,null,"Information message")),e.createElement(n,{color:r.neutral},e.createElement(s,{name:t.email}),e.createElement(a,null,"Neutral message")),e.createElement(n,{color:r.primary},e.createElement(s,{name:t.lightbulb}),e.createElement(a,null,"Primary message")),e.createElement(n,{color:r.success},e.createElement(s,{name:t.circleCheck}),e.createElement(a,null,"Success message")),e.createElement(n,{color:r.warning},e.createElement(s,{name:t.triangleExclamation}),e.createElement(a,null,"Warning message")))},u={globals:{imports:"import { ICON_NAME, Message, MessageBody, MessageIcon } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>e.createElement(n,null,e.createElement(s,{name:t.circleInfo}),e.createElement(a,null,"Default message"))},p={globals:{imports:"import { ICON_NAME, Message, MessageBody, MessageIcon } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>e.createElement(n,null,e.createElement(s,{name:t.circleInfo}),e.createElement(a,null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer faucibus, libero et pharetra mattis, ipsum velit semper risus, non ultrices lacus massa sed arcu. Nulla sed tellus."))},y={globals:{imports:"import { ICON_NAME, Message, MessageBody, MessageIcon } from '@ovhcloud/ods-react';"},parameters:{docs:{source:{...oe()}}},tags:["!dev"],render:({})=>e.createElement(n,{dismissible:!1},e.createElement(s,{name:t.circleInfo}),e.createElement(a,null,"Default message"))},I={tags:["!dev"],parameters:{layout:"centered"},render:({})=>e.createElement(n,null,e.createElement(s,{name:t.circleInfo}),e.createElement(a,null,"Message"))},O={decorators:[o=>e.createElement("div",{style:{display:"inline-flex",flexFlow:"column",gap:"8px"}},o())],globals:{imports:"import { ICON_NAME, MESSAGE_VARIANT, Message, MessageBody, MessageIcon } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>e.createElement(e.Fragment,null,e.createElement(n,{variant:N.default},e.createElement(s,{name:t.circleInfo}),e.createElement(a,null,"Default variant Message")),e.createElement(n,{variant:N.light},e.createElement(s,{name:t.circleInfo}),e.createElement(a,null,"Light variant Message")))},A={parameters:{layout:"fullscreen"},tags:["!dev"],render:({})=>e.createElement("div",{style:{display:"inline-flex",flexFlow:"column",gap:"8px"}},e.createElement(n,null,e.createElement(s,{name:t.circleInfo}),e.createElement(a,null,"Default message")),e.createElement(n,{color:r.information},e.createElement(s,{name:t.circleInfo}),e.createElement(a,null,"Information")),e.createElement(n,{color:r.success},e.createElement(s,{name:t.circleCheck}),e.createElement(a,null,"Success")),e.createElement(n,{color:r.warning},e.createElement(s,{name:t.triangleExclamation}),e.createElement(a,null,"Warning")),e.createElement(n,{color:r.critical},e.createElement(s,{name:t.hexagonExclamation}),e.createElement(a,null,"Critical")),e.createElement(n,{variant:N.light},e.createElement(s,{name:t.circleInfo}),e.createElement(a,null,"Light variant")))};var f,v,_;i.parameters={...i.parameters,docs:{...(f=i.parameters)==null?void 0:f.docs,source:{originalSource:`{
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
}`,...(_=(v=i.parameters)==null?void 0:v.docs)==null?void 0:_.source}}};var B,b,x;m.parameters={...m.parameters,docs:{...(B=m.parameters)==null?void 0:B.docs,source:{originalSource:`{
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
}`,...(x=(b=m.parameters)==null?void 0:b.docs)==null?void 0:x.source}}};var h,R,G;g.parameters={...g.parameters,docs:{...(h=g.parameters)==null?void 0:h.docs,source:{originalSource:`{
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
}`,...(G=(R=g.parameters)==null?void 0:R.docs)==null?void 0:G.source}}};var L,T,w;d.parameters={...d.parameters,docs:{...(L=d.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
}`,...(w=(T=d.parameters)==null?void 0:T.docs)==null?void 0:w.source}}};var D,k,F;M.parameters={...M.parameters,docs:{...(D=M.parameters)==null?void 0:D.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: ({}) => <Message>
      <MessageIcon name={ICON_NAME.circleInfo} />

      <MessageBody>
        Message
      </MessageBody>
    </Message>
}`,...(F=(k=M.parameters)==null?void 0:k.docs)==null?void 0:F.source}}};var V,Y,W;E.parameters={...E.parameters,docs:{...(V=E.parameters)==null?void 0:V.docs,source:{originalSource:`{
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
}`,...(W=(Y=E.parameters)==null?void 0:Y.docs)==null?void 0:W.source}}};var P,U,j;u.parameters={...u.parameters,docs:{...(P=u.parameters)==null?void 0:P.docs,source:{originalSource:`{
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
}`,...(j=(U=u.parameters)==null?void 0:U.docs)==null?void 0:j.source}}};var z,q,H;p.parameters={...p.parameters,docs:{...(z=p.parameters)==null?void 0:z.docs,source:{originalSource:`{
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
}`,...(H=(q=p.parameters)==null?void 0:q.docs)==null?void 0:H.source}}};var J,K,Q;y.parameters={...y.parameters,docs:{...(J=y.parameters)==null?void 0:J.docs,source:{originalSource:`{
  globals: {
    imports: \`import { ICON_NAME, Message, MessageBody, MessageIcon } from '@ovhcloud/ods-react';\`
  },
  parameters: {
    docs: {
      source: {
        ...staticSourceRenderConfig()
      }
    }
  },
  tags: ['!dev'],
  render: ({}) => <Message dismissible={false}>
      <MessageIcon name={ICON_NAME.circleInfo} />

      <MessageBody>
        Default message
      </MessageBody>
    </Message>
}`,...(Q=(K=y.parameters)==null?void 0:K.docs)==null?void 0:Q.source}}};var X,Z,$;I.parameters={...I.parameters,docs:{...(X=I.parameters)==null?void 0:X.docs,source:{originalSource:`{
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
}`,...($=(Z=I.parameters)==null?void 0:Z.docs)==null?void 0:$.source}}};var ee,se,ae;O.parameters={...O.parameters,docs:{...(ee=O.parameters)==null?void 0:ee.docs,source:{originalSource:`{
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
}`,...(ae=(se=O.parameters)==null?void 0:se.docs)==null?void 0:ae.source}}};var ne,te,re;A.parameters={...A.parameters,docs:{...(ne=A.parameters)==null?void 0:ne.docs,source:{originalSource:`{
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
}`,...(re=(te=A.parameters)==null?void 0:te.docs)==null?void 0:re.source}}};const pe=["Demo","AccessibilityGrouping","AccessibilityAlternativeGrouping","AccessibilityRoles","AnatomyTech","Color","Default","Multiline","NonDismissible","Overview","Variant","ThemeGenerator"],fe=Object.freeze(Object.defineProperty({__proto__:null,AccessibilityAlternativeGrouping:g,AccessibilityGrouping:m,AccessibilityRoles:d,AnatomyTech:M,Color:E,Default:u,Demo:i,Multiline:p,NonDismissible:y,Overview:I,ThemeGenerator:A,Variant:O,__namedExportsOrder:pe,default:ue},Symbol.toStringTag,{value:"Module"}));export{m as A,E as C,u as D,fe as M,y as N,I as O,O as V,g as a,d as b,M as c,p as d};
