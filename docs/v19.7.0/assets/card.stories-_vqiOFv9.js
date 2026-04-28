import{e}from"./index-jIWwRBLr.js";import{C as r}from"./Card-DNx-3noX.js";import{C as j,a}from"./colors-DSObuHxd.js";import{o as k,C as p}from"./controls-BtiQQn1l.js";const H={component:r,title:"React Components/Card"},n={argTypes:k({color:{table:{category:p.design,type:{summary:"CARD_COLOR"}},control:"select",options:j},children:{table:{category:p.slot},control:"text"}}),args:{children:"Hello, world!"}},s={tags:["!dev"],render:({})=>e.createElement(r,{style:{padding:"8px"}},"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",e.createElement("br",null),"Interdum et malesuada fames ac ante ipsum primis in faucibus.")},o={decorators:[t=>e.createElement("div",{style:{display:"flex",gap:"16px"}},t())],globals:{imports:"import { CARD_COLOR, Card } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>e.createElement(e.Fragment,null,e.createElement(r,{color:a.critical},e.createElement("p",null,"Critical")),e.createElement(r,{color:a.information},e.createElement("p",null,"Information")),e.createElement(r,{color:a.neutral},e.createElement("p",null,"Neutral")),e.createElement(r,{color:a.primary},e.createElement("p",null,"Primary")),e.createElement(r,{color:a.success},e.createElement("p",null,"Success")),e.createElement(r,{color:a.warning},e.createElement("p",null,"Warning")))},i={globals:{imports:"import { Card } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>e.createElement(r,null,e.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",e.createElement("br",null),"Interdum et malesuada fames ac ante ipsum primis in faucibus."))},l={tags:["!dev"],parameters:{layout:"centered"},render:({})=>e.createElement(r,{style:{padding:"8px"}},"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",e.createElement("br",null),"Interdum et malesuada fames ac ante ipsum primis in faucibus.")},m={globals:{imports:"import { Card } from '@ovhcloud/ods-react';"},tags:["!dev"],parameters:{layout:"centered"},render:({})=>e.createElement("ul",{style:{display:"flex",gap:"16px",padding:0,margin:0,listStyleType:"none"}},e.createElement("li",null,e.createElement(r,{style:{padding:"8px"}},"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",e.createElement("br",null),"Interdum et malesuada fames ac ante ipsum primis in faucibus.")),e.createElement("li",null,e.createElement(r,{style:{padding:"8px"}},"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",e.createElement("br",null),"Interdum et malesuada fames ac ante ipsum primis in faucibus.")))},c={globals:{imports:"import { Card } from '@ovhcloud/ods-react';"},tags:["!dev"],parameters:{layout:"centered"},render:({})=>e.createElement("div",{role:"list",style:{display:"flex",gap:"16px"}},e.createElement(r,{role:"listitem",style:{padding:"8px"}},"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",e.createElement("br",null),"Interdum et malesuada fames ac ante ipsum primis in faucibus."),e.createElement(r,{role:"listitem",style:{padding:"8px"}},"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",e.createElement("br",null),"Interdum et malesuada fames ac ante ipsum primis in faucibus."))},d={name:"ThemeGenerator",parameters:{docs:{disable:!0},layout:"fullscreen",options:{showPanel:!1}},tags:["!dev","hidden"],render:({})=>e.createElement("div",{style:{display:"flex",gap:"16px"}},j.map(t=>e.createElement(r,{key:String(t),color:t},e.createElement("p",{style:{margin:0}},String(t)))))};var u,g,C;n.parameters={...n.parameters,docs:{...(u=n.parameters)==null?void 0:u.docs,source:{originalSource:`{
  argTypes: orderControls({
    color: {
      table: {
        category: CONTROL_CATEGORY.design,
        type: {
          summary: 'CARD_COLOR'
        }
      },
      control: 'select',
      options: CARD_COLORS
    },
    children: {
      table: {
        category: CONTROL_CATEGORY.slot
      },
      control: 'text'
    }
  }),
  args: {
    children: 'Hello, world!'
  }
}`,...(C=(g=n.parameters)==null?void 0:g.docs)==null?void 0:C.source}}};var y,f,b;s.parameters={...s.parameters,docs:{...(y=s.parameters)==null?void 0:y.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: ({}) => <Card style={{
    padding: '8px'
  }}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br />
      Interdum et malesuada fames ac ante ipsum primis in faucibus.
    </Card>
}`,...(b=(f=s.parameters)==null?void 0:f.docs)==null?void 0:b.source}}};var O,E,v;o.parameters={...o.parameters,docs:{...(O=o.parameters)==null?void 0:O.docs,source:{originalSource:`{
  decorators: [story => <div style={{
    display: 'flex',
    gap: '16px'
  }}>{story()}</div>],
  globals: {
    imports: \`import { CARD_COLOR, Card } from '@ovhcloud/ods-react';\`
  },
  tags: ['!dev'],
  render: ({}) => <>
      <Card color={CARD_COLOR.critical}>
        <p>Critical</p>
      </Card>

      <Card color={CARD_COLOR.information}>
        <p>Information</p>
      </Card>

      <Card color={CARD_COLOR.neutral}>
        <p>Neutral</p>
      </Card>

      <Card color={CARD_COLOR.primary}>
        <p>Primary</p>
      </Card>

      <Card color={CARD_COLOR.success}>
        <p>Success</p>
      </Card>

      <Card color={CARD_COLOR.warning}>
        <p>Warning</p>
      </Card>
    </>
}`,...(v=(E=o.parameters)==null?void 0:E.docs)==null?void 0:v.source}}};var R,x,L;i.parameters={...i.parameters,docs:{...(R=i.parameters)==null?void 0:R.docs,source:{originalSource:`{
  globals: {
    imports: \`import { Card } from '@ovhcloud/ods-react';\`
  },
  tags: ['!dev'],
  render: ({}) => <Card>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br />Interdum et malesuada fames ac ante ipsum primis in faucibus.</p>
    </Card>
}`,...(L=(x=i.parameters)==null?void 0:x.docs)==null?void 0:L.source}}};var A,h,S;l.parameters={...l.parameters,docs:{...(A=l.parameters)==null?void 0:A.docs,source:{originalSource:`{
  tags: ['!dev'],
  parameters: {
    layout: 'centered'
  },
  render: ({}) => <Card style={{
    padding: '8px'
  }}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br />
      Interdum et malesuada fames ac ante ipsum primis in faucibus.
    </Card>
}`,...(S=(h=l.parameters)==null?void 0:h.docs)==null?void 0:S.source}}};var _,D,T;m.parameters={...m.parameters,docs:{...(_=m.parameters)==null?void 0:_.docs,source:{originalSource:`{
  globals: {
    imports: \`import { Card } from '@ovhcloud/ods-react';\`
  },
  tags: ['!dev'],
  parameters: {
    layout: 'centered'
  },
  render: ({}) => <ul style={{
    display: 'flex',
    gap: '16px',
    padding: 0,
    margin: 0,
    listStyleType: 'none'
  }}>
      <li>
        <Card style={{
        padding: '8px'
      }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br />
          Interdum et malesuada fames ac ante ipsum primis in faucibus.
        </Card>
      </li>
      <li>
        <Card style={{
        padding: '8px'
      }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br />
          Interdum et malesuada fames ac ante ipsum primis in faucibus.
        </Card>
      </li>
    </ul>
}`,...(T=(D=m.parameters)==null?void 0:D.docs)==null?void 0:T.source}}};var I,G,w;c.parameters={...c.parameters,docs:{...(I=c.parameters)==null?void 0:I.docs,source:{originalSource:`{
  globals: {
    imports: \`import { Card } from '@ovhcloud/ods-react';\`
  },
  tags: ['!dev'],
  parameters: {
    layout: 'centered'
  },
  render: ({}) => <div role="list" style={{
    display: 'flex',
    gap: '16px'
  }}>
      <Card role="listitem" style={{
      padding: '8px'
    }}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br />
        Interdum et malesuada fames ac ante ipsum primis in faucibus.
      </Card>
      <Card role="listitem" style={{
      padding: '8px'
    }}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br />
        Interdum et malesuada fames ac ante ipsum primis in faucibus.
      </Card>
    </div>
}`,...(w=(G=c.parameters)==null?void 0:G.docs)==null?void 0:w.source}}};var N,P,Y;d.parameters={...d.parameters,docs:{...(N=d.parameters)==null?void 0:N.docs,source:{originalSource:`{
  name: 'ThemeGenerator',
  parameters: {
    docs: {
      disable: true
    },
    layout: 'fullscreen',
    options: {
      showPanel: false
    }
  },
  tags: ['!dev', 'hidden'],
  render: ({}) => <div style={{
    display: 'flex',
    gap: '16px'
  }}>
      {CARD_COLORS.map(color => <Card key={String(color)} color={color}>
          <p style={{
        margin: 0
      }}>{String(color)}</p>
        </Card>)}
    </div>
}`,...(Y=(P=d.parameters)==null?void 0:P.docs)==null?void 0:Y.source}}};const W=["Demo","AnatomyTech","Color","Default","Overview","AccessibilityGrouping","AccessibilityAlternativeGrouping","ThemeGenerator"],B=Object.freeze(Object.defineProperty({__proto__:null,AccessibilityAlternativeGrouping:c,AccessibilityGrouping:m,AnatomyTech:s,Color:o,Default:i,Demo:n,Overview:l,ThemeGenerator:d,__namedExportsOrder:W,default:H},Symbol.toStringTag,{value:"Module"}));export{m as A,B as C,i as D,l as O,c as a,s as b,o as c};
