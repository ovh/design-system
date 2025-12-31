import{r as k,e}from"./index-jIWwRBLr.js";import{j as H}from"./jsx-runtime-Cfl8ynUo.js";import{c as $}from"./index-CqY9YpN0.js";import{a as t,C as N}from"./colors-DSObuHxd.js";import{o as q,C as d}from"./controls-BtiQQn1l.js";const z="_card_17gu3_2",p={card:z,"card--critical":"_card--critical_17gu3_16","card--information":"_card--information_17gu3_19","card--neutral":"_card--neutral_17gu3_22","card--primary":"_card--primary_17gu3_25","card--success":"_card--success_17gu3_28","card--warning":"_card--warning_17gu3_31"},r=k.forwardRef(({className:a,children:P,color:j=t.primary,...W},Y)=>H.jsx("div",{className:$(p.card,p[`card--${j}`],a),"data-ods":"card",ref:Y,...W,children:P}));r.displayName="Card";r.__docgenInfo={description:"",methods:[],displayName:"Card",props:{color:{required:!1,tsType:{name:"literal",value:"`${COLOR}`"},description:`@type=CARD_COLOR
The color preset to use.`,defaultValue:{value:"CARD_COLOR.primary",computed:!0}}},composes:["ComponentPropsWithRef"]};const F={component:r,title:"React Components/Card"},n={argTypes:q({color:{table:{category:d.design,type:{summary:"CARD_COLOR"}},control:"select",options:N},children:{table:{category:d.slot},control:"text"}}),args:{children:"Hello, world!"}},s={decorators:[a=>e.createElement("div",{style:{display:"flex",gap:"16px"}},a())],globals:{imports:"import { CARD_COLOR, Card } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>e.createElement(e.Fragment,null,e.createElement(r,{color:t.critical},e.createElement("p",null,"Critical")),e.createElement(r,{color:t.information},e.createElement("p",null,"Information")),e.createElement(r,{color:t.neutral},e.createElement("p",null,"Neutral")),e.createElement(r,{color:t.primary},e.createElement("p",null,"Primary")),e.createElement(r,{color:t.success},e.createElement("p",null,"Success")),e.createElement(r,{color:t.warning},e.createElement("p",null,"Warning")))},o={globals:{imports:"import { Card } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>e.createElement(r,null,e.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",e.createElement("br",null),"Interdum et malesuada fames ac ante ipsum primis in faucibus."))},i={tags:["!dev"],parameters:{layout:"centered"},render:({})=>e.createElement(r,{style:{padding:"8px"}},"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",e.createElement("br",null),"Interdum et malesuada fames ac ante ipsum primis in faucibus.")},l={globals:{imports:"import { Card } from '@ovhcloud/ods-react';"},tags:["!dev"],parameters:{layout:"centered"},render:({})=>e.createElement("ul",{style:{display:"flex",gap:"16px",padding:0,margin:0,listStyleType:"none"}},e.createElement("li",null,e.createElement(r,{style:{padding:"8px"}},"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",e.createElement("br",null),"Interdum et malesuada fames ac ante ipsum primis in faucibus.")),e.createElement("li",null,e.createElement(r,{style:{padding:"8px"}},"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",e.createElement("br",null),"Interdum et malesuada fames ac ante ipsum primis in faucibus.")))},c={globals:{imports:"import { Card } from '@ovhcloud/ods-react';"},tags:["!dev"],parameters:{layout:"centered"},render:({})=>e.createElement("div",{role:"list",style:{display:"flex",gap:"16px"}},e.createElement(r,{role:"listitem",style:{padding:"8px"}},"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",e.createElement("br",null),"Interdum et malesuada fames ac ante ipsum primis in faucibus."),e.createElement(r,{role:"listitem",style:{padding:"8px"}},"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",e.createElement("br",null),"Interdum et malesuada fames ac ante ipsum primis in faucibus."))},m={name:"ThemeGenerator",parameters:{docs:{disable:!0},layout:"fullscreen",options:{showPanel:!1}},tags:["!dev","hidden"],render:({})=>e.createElement("div",{style:{display:"flex",gap:"16px"}},N.map(a=>e.createElement(r,{key:String(a),color:a},e.createElement("p",{style:{margin:0}},String(a)))))};var u,g,C;n.parameters={...n.parameters,docs:{...(u=n.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
}`,...(C=(g=n.parameters)==null?void 0:g.docs)==null?void 0:C.source}}};var y,f,O;s.parameters={...s.parameters,docs:{...(y=s.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
}`,...(O=(f=s.parameters)==null?void 0:f.docs)==null?void 0:O.source}}};var b,_,R;o.parameters={...o.parameters,docs:{...(b=o.parameters)==null?void 0:b.docs,source:{originalSource:`{
  globals: {
    imports: \`import { Card } from '@ovhcloud/ods-react';\`
  },
  tags: ['!dev'],
  render: ({}) => <Card>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br />Interdum et malesuada fames ac ante ipsum primis in faucibus.</p>
    </Card>
}`,...(R=(_=o.parameters)==null?void 0:_.docs)==null?void 0:R.source}}};var E,v,x;i.parameters={...i.parameters,docs:{...(E=i.parameters)==null?void 0:E.docs,source:{originalSource:`{
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
}`,...(x=(v=i.parameters)==null?void 0:v.docs)==null?void 0:x.source}}};var L,A,h;l.parameters={...l.parameters,docs:{...(L=l.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
}`,...(h=(A=l.parameters)==null?void 0:A.docs)==null?void 0:h.source}}};var S,D,T;c.parameters={...c.parameters,docs:{...(S=c.parameters)==null?void 0:S.docs,source:{originalSource:`{
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
}`,...(T=(D=c.parameters)==null?void 0:D.docs)==null?void 0:T.source}}};var I,w,G;m.parameters={...m.parameters,docs:{...(I=m.parameters)==null?void 0:I.docs,source:{originalSource:`{
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
}`,...(G=(w=m.parameters)==null?void 0:w.docs)==null?void 0:G.source}}};const M=["Demo","Color","Default","Overview","AccessibilityGrouping","AccessibilityAlternativeGrouping","ThemeGenerator"],U=Object.freeze(Object.defineProperty({__proto__:null,AccessibilityAlternativeGrouping:c,AccessibilityGrouping:l,Color:s,Default:o,Demo:n,Overview:i,ThemeGenerator:m,__namedExportsOrder:M,default:F},Symbol.toStringTag,{value:"Module"}));export{l as A,U as C,o as D,i as O,c as a,s as b};
