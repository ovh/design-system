import{e}from"./index-D_CmzhJ4.js";import{I as l}from"./icon-name-jL3axqAU.js";import{L as r,a as _}from"./Link-CnzBxqpY.js";import{e as E,o as I,C as c}from"./controls-BtiQQn1l.js";const T={argTypes:E(["as"]),component:r,title:"ODS Components/Link"},o={argTypes:I({children:{table:{category:c.slot},control:"text"},color:{table:{category:c.design,type:{summary:"LINK_COLOR"}},control:"select",options:_},disabled:{table:{category:c.general},control:"boolean"}}),args:{children:"My link"}},t={tags:["!dev"],render:({})=>e.createElement(r,{href:"https://www.ovhcloud.com"},"Default Link")},a={tags:["!dev"],render:({})=>e.createElement(r,{disabled:!0,href:"https://www.ovhcloud.com"},"Disabled")},n={tags:["!dev"],parameters:{layout:"centered"},render:({})=>e.createElement(r,{href:"https://www.ovhcloud.com",target:"_blank"},"Link")},s={decorators:[C=>e.createElement("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr"}},C())],tags:["!dev"],render:({})=>e.createElement(e.Fragment,null,e.createElement(r,{href:"https://www.ovhcloud.com"},e.createElement(l,{name:"arrow-left"}),"Icon Link"),e.createElement(r,{style:{justifySelf:"right"},href:"https://www.ovhcloud.com"},"Icon Link",e.createElement(l,{name:"arrow-right"})))};var d,i,m;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
          summary: 'LINK_COLOR'
        }
      },
      control: 'select',
      options: LINK_COLORS
    },
    disabled: {
      table: {
        category: CONTROL_CATEGORY.general
      },
      control: 'boolean'
    }
  }),
  args: {
    // @ts-ignore check when time to do so
    children: 'My link'
  }
}`,...(m=(i=o.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};var p,u,g;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: ({}) => <Link href="https://www.ovhcloud.com">
      Default Link
    </Link>
}`,...(g=(u=t.parameters)==null?void 0:u.docs)==null?void 0:g.source}}};var h,w,L;a.parameters={...a.parameters,docs:{...(h=a.parameters)==null?void 0:h.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: ({}) => <Link disabled href="https://www.ovhcloud.com">
      Disabled
    </Link>
}`,...(L=(w=a.parameters)==null?void 0:w.docs)==null?void 0:L.source}}};var f,y,O;n.parameters={...n.parameters,docs:{...(f=n.parameters)==null?void 0:f.docs,source:{originalSource:`{
  tags: ['!dev'],
  parameters: {
    layout: 'centered'
  },
  render: ({}) => <Link href="https://www.ovhcloud.com" target="_blank">
      Link
    </Link>
}`,...(O=(y=n.parameters)==null?void 0:y.docs)==null?void 0:O.source}}};var k,v,b;s.parameters={...s.parameters,docs:{...(k=s.parameters)==null?void 0:k.docs,source:{originalSource:`{
  decorators: [story => <div style={{
    display: 'grid',
    gridTemplateColumns: '1fr 1fr'
  }}>{story()}</div>],
  tags: ['!dev'],
  render: ({}) => <>
      <Link href="https://www.ovhcloud.com">
        <Icon name="arrow-left" />Icon Link
      </Link>

      <Link style={{
      justifySelf: 'right'
    }} href="https://www.ovhcloud.com">
        Icon Link<Icon name="arrow-right" />
      </Link>
    </>
}`,...(b=(v=s.parameters)==null?void 0:v.docs)==null?void 0:b.source}}};const D=["Demo","Default","Disabled","Overview","WithIcon"],j=Object.freeze(Object.defineProperty({__proto__:null,Default:t,Demo:o,Disabled:a,Overview:n,WithIcon:s,__namedExportsOrder:D,default:T},Symbol.toStringTag,{value:"Module"}));export{t as D,j as L,n as O,s as W,a};
