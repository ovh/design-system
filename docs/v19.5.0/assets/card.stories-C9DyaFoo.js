import{e}from"./index-jIWwRBLr.js";import{C as r}from"./Card-pBUOkgnJ.js";import{C as w,a}from"./colors-DSObuHxd.js";import{o as N,C as d}from"./controls-BtiQQn1l.js";const P={component:r,title:"React Components/Card"},n={argTypes:N({color:{table:{category:d.design,type:{summary:"CARD_COLOR"}},control:"select",options:w},children:{table:{category:d.slot},control:"text"}}),args:{children:"Hello, world!"}},s={decorators:[t=>e.createElement("div",{style:{display:"flex",gap:"16px"}},t())],globals:{imports:"import { CARD_COLOR, Card } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>e.createElement(e.Fragment,null,e.createElement(r,{color:a.critical},e.createElement("p",null,"Critical")),e.createElement(r,{color:a.information},e.createElement("p",null,"Information")),e.createElement(r,{color:a.neutral},e.createElement("p",null,"Neutral")),e.createElement(r,{color:a.primary},e.createElement("p",null,"Primary")),e.createElement(r,{color:a.success},e.createElement("p",null,"Success")),e.createElement(r,{color:a.warning},e.createElement("p",null,"Warning")))},o={globals:{imports:"import { Card } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>e.createElement(r,null,e.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",e.createElement("br",null),"Interdum et malesuada fames ac ante ipsum primis in faucibus."))},i={tags:["!dev"],parameters:{layout:"centered"},render:({})=>e.createElement(r,{style:{padding:"8px"}},"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",e.createElement("br",null),"Interdum et malesuada fames ac ante ipsum primis in faucibus.")},l={globals:{imports:"import { Card } from '@ovhcloud/ods-react';"},tags:["!dev"],parameters:{layout:"centered"},render:({})=>e.createElement("ul",{style:{display:"flex",gap:"16px",padding:0,margin:0,listStyleType:"none"}},e.createElement("li",null,e.createElement(r,{style:{padding:"8px"}},"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",e.createElement("br",null),"Interdum et malesuada fames ac ante ipsum primis in faucibus.")),e.createElement("li",null,e.createElement(r,{style:{padding:"8px"}},"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",e.createElement("br",null),"Interdum et malesuada fames ac ante ipsum primis in faucibus.")))},m={globals:{imports:"import { Card } from '@ovhcloud/ods-react';"},tags:["!dev"],parameters:{layout:"centered"},render:({})=>e.createElement("div",{role:"list",style:{display:"flex",gap:"16px"}},e.createElement(r,{role:"listitem",style:{padding:"8px"}},"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",e.createElement("br",null),"Interdum et malesuada fames ac ante ipsum primis in faucibus."),e.createElement(r,{role:"listitem",style:{padding:"8px"}},"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",e.createElement("br",null),"Interdum et malesuada fames ac ante ipsum primis in faucibus."))},c={name:"ThemeGenerator",parameters:{docs:{disable:!0},layout:"fullscreen",options:{showPanel:!1}},tags:["!dev","hidden"],render:({})=>e.createElement("div",{style:{display:"flex",gap:"16px"}},w.map(t=>e.createElement(r,{key:String(t),color:t},e.createElement("p",{style:{margin:0}},String(t)))))};var p,u,g;n.parameters={...n.parameters,docs:{...(p=n.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(g=(u=n.parameters)==null?void 0:u.docs)==null?void 0:g.source}}};var C,y,f;s.parameters={...s.parameters,docs:{...(C=s.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
}`,...(f=(y=s.parameters)==null?void 0:y.docs)==null?void 0:f.source}}};var b,O,E;o.parameters={...o.parameters,docs:{...(b=o.parameters)==null?void 0:b.docs,source:{originalSource:`{
  globals: {
    imports: \`import { Card } from '@ovhcloud/ods-react';\`
  },
  tags: ['!dev'],
  render: ({}) => <Card>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br />Interdum et malesuada fames ac ante ipsum primis in faucibus.</p>
    </Card>
}`,...(E=(O=o.parameters)==null?void 0:O.docs)==null?void 0:E.source}}};var v,R,x;i.parameters={...i.parameters,docs:{...(v=i.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
}`,...(x=(R=i.parameters)==null?void 0:R.docs)==null?void 0:x.source}}};var L,A,S;l.parameters={...l.parameters,docs:{...(L=l.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
}`,...(S=(A=l.parameters)==null?void 0:A.docs)==null?void 0:S.source}}};var _,h,D;m.parameters={...m.parameters,docs:{...(_=m.parameters)==null?void 0:_.docs,source:{originalSource:`{
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
}`,...(D=(h=m.parameters)==null?void 0:h.docs)==null?void 0:D.source}}};var T,I,G;c.parameters={...c.parameters,docs:{...(T=c.parameters)==null?void 0:T.docs,source:{originalSource:`{
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
}`,...(G=(I=c.parameters)==null?void 0:I.docs)==null?void 0:G.source}}};const Y=["Demo","Color","Default","Overview","AccessibilityGrouping","AccessibilityAlternativeGrouping","ThemeGenerator"],z=Object.freeze(Object.defineProperty({__proto__:null,AccessibilityAlternativeGrouping:m,AccessibilityGrouping:l,Color:s,Default:o,Demo:n,Overview:i,ThemeGenerator:c,__namedExportsOrder:Y,default:P},Symbol.toStringTag,{value:"Module"}));export{l as A,z as C,o as D,i as O,m as a,s as b};
