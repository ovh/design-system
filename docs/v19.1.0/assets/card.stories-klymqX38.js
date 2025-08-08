import{r as z,e}from"./index-D_CmzhJ4.js";import{j as h}from"./jsx-runtime-VM66peLj.js";import{c as G}from"./index-CkQHsVsO.js";import{a,C as j}from"./colors-DSObuHxd.js";import{o as P,C as d}from"./controls-BtiQQn1l.js";const W="_card_dzuf6_2",m={card:W,"card--critical":"_card--critical_dzuf6_8","card--information":"_card--information_dzuf6_11","card--neutral":"_card--neutral_dzuf6_14","card--primary":"_card--primary_dzuf6_17","card--success":"_card--success_dzuf6_20","card--warning":"_card--warning_dzuf6_23"},r=z.forwardRef(({className:c,color:T=a.primary,...w},N)=>h.jsx("div",{className:G(m.card,m[`card--${T}`],c),"data-ods":"card",ref:N,...w}));r.displayName="Card";r.__docgenInfo={description:"",methods:[],displayName:"Card",props:{color:{required:!1,tsType:{name:"literal",value:"`${COLOR}`"},description:`@type=CARD_COLOR
The color preset to use.`,defaultValue:{value:"CARD_COLOR.primary",computed:!0}}},composes:["ComponentPropsWithRef"]};const Y={component:r,title:"React Components/Card"},t={argTypes:P({color:{table:{category:d.design,type:{summary:"CARD_COLOR"}},control:"select",options:j},children:{table:{category:d.slot},control:"text"}}),args:{children:"Hello, world!"}},n={decorators:[c=>e.createElement("div",{style:{display:"flex",gap:"16px"}},c())],tags:["!dev"],render:({})=>e.createElement(e.Fragment,null,e.createElement(r,{color:a.critical},e.createElement("p",null,"Critical")),e.createElement(r,{color:a.information},e.createElement("p",null,"Information")),e.createElement(r,{color:a.neutral},e.createElement("p",null,"Neutral")),e.createElement(r,{color:a.primary},e.createElement("p",null,"Primary")),e.createElement(r,{color:a.success},e.createElement("p",null,"Success")),e.createElement(r,{color:a.warning},e.createElement("p",null,"Warning")))},s={tags:["!dev"],render:({})=>e.createElement(r,null,e.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",e.createElement("br",null),"Interdum et malesuada fames ac ante ipsum primis in faucibus."))},i={tags:["!dev"],parameters:{layout:"centered"},render:({})=>e.createElement(r,{style:{padding:"8px"}},"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",e.createElement("br",null),"Interdum et malesuada fames ac ante ipsum primis in faucibus.")},l={tags:["!dev"],parameters:{layout:"centered"},render:({})=>e.createElement("ul",{style:{display:"flex",gap:"16px",padding:0,margin:0,listStyleType:"none"}},e.createElement("li",null,e.createElement(r,{style:{padding:"8px"}},"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",e.createElement("br",null),"Interdum et malesuada fames ac ante ipsum primis in faucibus.")),e.createElement("li",null,e.createElement(r,{style:{padding:"8px"}},"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",e.createElement("br",null),"Interdum et malesuada fames ac ante ipsum primis in faucibus.")))},o={tags:["!dev"],parameters:{layout:"centered"},render:({})=>e.createElement("div",{role:"list",style:{display:"flex",gap:"16px"}},e.createElement(r,{role:"listitem",style:{padding:"8px"}},"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",e.createElement("br",null),"Interdum et malesuada fames ac ante ipsum primis in faucibus."),e.createElement(r,{role:"listitem",style:{padding:"8px"}},"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",e.createElement("br",null),"Interdum et malesuada fames ac ante ipsum primis in faucibus."))};var p,u,g;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(g=(u=t.parameters)==null?void 0:u.docs)==null?void 0:g.source}}};var C,y,f;n.parameters={...n.parameters,docs:{...(C=n.parameters)==null?void 0:C.docs,source:{originalSource:`{
  decorators: [story => <div style={{
    display: 'flex',
    gap: '16px'
  }}>{story()}</div>],
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
}`,...(f=(y=n.parameters)==null?void 0:y.docs)==null?void 0:f.source}}};var O,_,E;s.parameters={...s.parameters,docs:{...(O=s.parameters)==null?void 0:O.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: ({}) => <Card>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br />Interdum et malesuada fames ac ante ipsum primis in faucibus.</p>
    </Card>
}`,...(E=(_=s.parameters)==null?void 0:_.docs)==null?void 0:E.source}}};var b,R,x;i.parameters={...i.parameters,docs:{...(b=i.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
}`,...(x=(R=i.parameters)==null?void 0:R.docs)==null?void 0:x.source}}};var L,v,A;l.parameters={...l.parameters,docs:{...(L=l.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
}`,...(A=(v=l.parameters)==null?void 0:v.docs)==null?void 0:A.source}}};var D,I,S;o.parameters={...o.parameters,docs:{...(D=o.parameters)==null?void 0:D.docs,source:{originalSource:`{
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
}`,...(S=(I=o.parameters)==null?void 0:I.docs)==null?void 0:S.source}}};const H=["Demo","Color","Default","Overview","AccessibilityGrouping","AccessibilityAlternativeGrouping"],k=Object.freeze(Object.defineProperty({__proto__:null,AccessibilityAlternativeGrouping:o,AccessibilityGrouping:l,Color:n,Default:s,Demo:t,Overview:i,__namedExportsOrder:H,default:Y},Symbol.toStringTag,{value:"Module"}));export{l as A,k as C,s as D,i as O,o as a,n as b};
