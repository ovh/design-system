import{r as L,e}from"./index-D_CmzhJ4.js";import{j as D}from"./jsx-runtime-VM66peLj.js";import{c as S}from"./index-CkQHsVsO.js";import{o as T,C as l}from"./controls-BtiQQn1l.js";var c=(r=>(r.neutral="neutral",r.primary="primary",r))(c||{});const h=Object.freeze(Object.values(c)),N="_card_19a4h_2",d={card:N,"card--neutral":"_card--neutral_19a4h_8","card--primary":"_card--primary_19a4h_11"},a=L.forwardRef(({className:r,color:b=c.primary,...E},x)=>D.jsx("div",{className:S(d.card,d[`card--${b}`],r),ref:x,...E}));a.displayName="Card";a.__docgenInfo={description:"",methods:[],displayName:"Card",props:{color:{required:!1,tsType:{name:"literal",value:"`${CARD_COLOR}`"},description:"",defaultValue:{value:"CARD_COLOR.primary",computed:!0}}},composes:["ComponentPropsWithRef"]};const A={component:a,title:"ODS Components/Card"},t={argTypes:T({color:{table:{category:l.design,type:{summary:"CARD_COLOR"}},control:"select",options:h},children:{table:{category:l.slot},control:"text"}}),args:{children:"Hello, world!"}},s={tags:["!dev"],render:({})=>e.createElement(a,null,e.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",e.createElement("br",null),"Interdum et malesuada fames ac ante ipsum primis in faucibus."))},o={decorators:[r=>e.createElement("div",{style:{display:"flex",gap:"16px"}},r())],tags:["!dev"],render:({})=>e.createElement(e.Fragment,null,e.createElement(a,{color:"primary"},e.createElement("p",null,"Primary Card")),e.createElement(a,{color:"neutral"},e.createElement("p",null,"Neutral Card")))},n={tags:["!dev"],parameters:{layout:"centered"},render:({})=>e.createElement(a,{style:{padding:"8px"}},"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",e.createElement("br",null),"Interdum et malesuada fames ac ante ipsum primis in faucibus.")};var m,i,p;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(p=(i=t.parameters)==null?void 0:i.docs)==null?void 0:p.source}}};var u,C,y;s.parameters={...s.parameters,docs:{...(u=s.parameters)==null?void 0:u.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: ({}) => <Card>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br />Interdum et malesuada fames ac ante ipsum primis in faucibus.</p>
    </Card>
}`,...(y=(C=s.parameters)==null?void 0:C.docs)==null?void 0:y.source}}};var g,O,f;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:`{
  decorators: [story => <div style={{
    display: 'flex',
    gap: '16px'
  }}>{story()}</div>],
  tags: ['!dev'],
  render: ({}) => <>
      <Card color="primary">
        <p>Primary Card</p>
      </Card>

      <Card color="neutral">
        <p>Neutral Card</p>
      </Card>
    </>
}`,...(f=(O=o.parameters)==null?void 0:O.docs)==null?void 0:f.source}}};var _,v,R;n.parameters={...n.parameters,docs:{...(_=n.parameters)==null?void 0:_.docs,source:{originalSource:`{
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
}`,...(R=(v=n.parameters)==null?void 0:v.docs)==null?void 0:R.source}}};const j=["Demo","Default","Color","Overview"],Y=Object.freeze(Object.defineProperty({__proto__:null,Color:o,Default:s,Demo:t,Overview:n,__namedExportsOrder:j,default:A},Symbol.toStringTag,{value:"Module"}));export{Y as C,s as D,n as O,o as a};
