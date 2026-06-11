import{r as b,e}from"./index-D_CmzhJ4.js";import{j as x}from"./jsx-runtime-VM66peLj.js";import{c as A}from"./index-CkQHsVsO.js";import{a,C as S}from"./colors-DSObuHxd.js";import{o as T,C as l}from"./controls-BtiQQn1l.js";const w="_card_dzuf6_2",i={card:w,"card--critical":"_card--critical_dzuf6_8","card--information":"_card--information_dzuf6_11","card--neutral":"_card--neutral_dzuf6_14","card--primary":"_card--primary_dzuf6_17","card--success":"_card--success_dzuf6_20","card--warning":"_card--warning_dzuf6_23"},r=b.forwardRef(({className:c,color:L=a.primary,...v},D)=>x.jsx("div",{className:A(i.card,i[`card--${L}`],c),ref:D,...v}));r.displayName="Card";r.__docgenInfo={description:"",methods:[],displayName:"Card",props:{color:{required:!1,tsType:{name:"literal",value:"`${COLOR}`"},description:`@type=CARD_COLOR
The color preset to use.`,defaultValue:{value:"CARD_COLOR.primary",computed:!0}}},composes:["ComponentPropsWithRef"]};const N={component:r,title:"React Components/Card"},n={argTypes:T({color:{table:{category:l.design,type:{summary:"CARD_COLOR"}},control:"select",options:S},children:{table:{category:l.slot},control:"text"}}),args:{children:"Hello, world!"}},t={decorators:[c=>e.createElement("div",{style:{display:"flex",gap:"16px"}},c())],tags:["!dev"],render:({})=>e.createElement(e.Fragment,null,e.createElement(r,{color:a.critical},e.createElement("p",null,"Critical")),e.createElement(r,{color:a.information},e.createElement("p",null,"Information")),e.createElement(r,{color:a.neutral},e.createElement("p",null,"Neutral")),e.createElement(r,{color:a.primary},e.createElement("p",null,"Primary")),e.createElement(r,{color:a.success},e.createElement("p",null,"Success")),e.createElement(r,{color:a.warning},e.createElement("p",null,"Warning")))},o={tags:["!dev"],render:({})=>e.createElement(r,null,e.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",e.createElement("br",null),"Interdum et malesuada fames ac ante ipsum primis in faucibus."))},s={tags:["!dev"],parameters:{layout:"centered"},render:({})=>e.createElement(r,{style:{padding:"8px"}},"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",e.createElement("br",null),"Interdum et malesuada fames ac ante ipsum primis in faucibus.")};var d,m,p;n.parameters={...n.parameters,docs:{...(d=n.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
}`,...(p=(m=n.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};var u,C,O;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
}`,...(O=(C=t.parameters)==null?void 0:C.docs)==null?void 0:O.source}}};var _,f,g;o.parameters={...o.parameters,docs:{...(_=o.parameters)==null?void 0:_.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: ({}) => <Card>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br />Interdum et malesuada fames ac ante ipsum primis in faucibus.</p>
    </Card>
}`,...(g=(f=o.parameters)==null?void 0:f.docs)==null?void 0:g.source}}};var y,R,E;s.parameters={...s.parameters,docs:{...(y=s.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
}`,...(E=(R=s.parameters)==null?void 0:R.docs)==null?void 0:E.source}}};const z=["Demo","Color","Default","Overview"],W=Object.freeze(Object.defineProperty({__proto__:null,Color:t,Default:o,Demo:n,Overview:s,__namedExportsOrder:z,default:N},Symbol.toStringTag,{value:"Module"}));export{W as C,o as D,s as O,t as a};
