import{e}from"./index-D_CmzhJ4.js";import{D as r,a as S,b as L,c}from"./Divider-Cq2-AGRl.js";import{o as f,C as i}from"./controls-BtiQQn1l.js";const V={component:r,title:"React Components/Divider"},a={argTypes:f({color:{table:{category:i.design,type:{summary:"DIVIDER_COLOR"}},control:{type:"select"},options:L},spacing:{table:{category:i.design,type:{summary:"DIVIDER_SPACING"}},control:{type:"select"},options:S}})},t={tags:["!dev"],render:({})=>e.createElement(r,null)},n={tags:["!dev"],parameters:{layout:"centered"},render:({})=>e.createElement(e.Fragment,null,e.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit."),e.createElement(r,{color:c.primary}),e.createElement("p",null,"Interdum et malesuada fames ac ante ipsum primis in faucibus."))},s={tags:["!dev"],render:({})=>e.createElement(e.Fragment,null,e.createElement(r,{color:c.neutral}),e.createElement(r,{color:c.primary}))},o={tags:["!dev"],render:({})=>e.createElement(e.Fragment,null,e.createElement(r,{spacing:"0"}),e.createElement(r,{spacing:"2"}),e.createElement(r,{spacing:"4"}),e.createElement(r,{spacing:"6"}))};var m,p,l;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
  argTypes: orderControls({
    color: {
      table: {
        category: CONTROL_CATEGORY.design,
        type: {
          summary: 'DIVIDER_COLOR'
        }
      },
      control: {
        type: 'select'
      },
      options: DIVIDER_COLORS
    },
    spacing: {
      table: {
        category: CONTROL_CATEGORY.design,
        type: {
          summary: 'DIVIDER_SPACING'
        }
      },
      control: {
        type: 'select'
      },
      options: DIVIDER_SPACINGS
    }
  })
}`,...(l=(p=a.parameters)==null?void 0:p.docs)==null?void 0:l.source}}};var d,u,g;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: ({}) => <Divider />
}`,...(g=(u=t.parameters)==null?void 0:u.docs)==null?void 0:g.source}}};var D,O,I;n.parameters={...n.parameters,docs:{...(D=n.parameters)==null?void 0:D.docs,source:{originalSource:`{
  tags: ['!dev'],
  parameters: {
    layout: 'centered'
  },
  render: ({}) => <>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      <Divider color={DIVIDER_COLOR.primary} />
      <p>Interdum et malesuada fames ac ante ipsum primis in faucibus.</p>
    </>
}`,...(I=(O=n.parameters)==null?void 0:O.docs)==null?void 0:I.source}}};var E,R,y;s.parameters={...s.parameters,docs:{...(E=s.parameters)==null?void 0:E.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: ({}) => <>
      <Divider color={DIVIDER_COLOR.neutral} />
      <Divider color={DIVIDER_COLOR.primary} />
    </>
}`,...(y=(R=s.parameters)==null?void 0:R.docs)==null?void 0:y.source}}};var C,v,_;o.parameters={...o.parameters,docs:{...(C=o.parameters)==null?void 0:C.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: ({}) => <>
      <Divider spacing="0" />
      <Divider spacing="2" />
      <Divider spacing="4" />
      <Divider spacing="6" />
    </>
}`,...(_=(v=o.parameters)==null?void 0:v.docs)==null?void 0:_.source}}};const b=["Demo","Default","Overview","Color","Spacing"],N=Object.freeze(Object.defineProperty({__proto__:null,Color:s,Default:t,Demo:a,Overview:n,Spacing:o,__namedExportsOrder:b,default:V},Symbol.toStringTag,{value:"Module"}));export{s as C,N as D,n as O,o as S,t as a};
