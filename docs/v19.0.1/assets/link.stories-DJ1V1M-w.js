import{e}from"./index-D_CmzhJ4.js";import{I as c}from"./icon-name-BOrBmUKT.js";import{L as r}from"./Link-Ba-_E0nD.js";import{e as E,o as D,C as l}from"./controls-BtiQQn1l.js";const T={argTypes:E(["as"]),component:r,title:"React Components/Link"},t={argTypes:D({children:{table:{category:l.slot},control:"text"},disabled:{table:{category:l.general},control:"boolean"}}),args:{children:"My link"}},o={tags:["!dev"],render:({})=>e.createElement(r,{href:"https://www.ovhcloud.com"},"Default Link")},a={tags:["!dev"],render:({})=>e.createElement(r,{disabled:!0,href:"https://www.ovhcloud.com"},"Disabled")},s={tags:["!dev"],parameters:{layout:"centered"},render:({})=>e.createElement(r,{href:"https://www.ovhcloud.com",target:"_blank"},"Link")},n={decorators:[C=>e.createElement("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr"}},C())],tags:["!dev"],render:({})=>e.createElement(e.Fragment,null,e.createElement(r,{href:"https://www.ovhcloud.com"},e.createElement(c,{name:"arrow-left"}),"Icon Link"),e.createElement(r,{style:{justifySelf:"right"},href:"https://www.ovhcloud.com"},"Icon Link",e.createElement(c,{name:"arrow-right"})))};var d,i,m;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:`{
  argTypes: orderControls({
    children: {
      table: {
        category: CONTROL_CATEGORY.slot
      },
      control: 'text'
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
}`,...(m=(i=t.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};var p,h,u;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: ({}) => <Link href="https://www.ovhcloud.com">
      Default Link
    </Link>
}`,...(u=(h=o.parameters)==null?void 0:h.docs)==null?void 0:u.source}}};var g,w,f;a.parameters={...a.parameters,docs:{...(g=a.parameters)==null?void 0:g.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: ({}) => <Link disabled href="https://www.ovhcloud.com">
      Disabled
    </Link>
}`,...(f=(w=a.parameters)==null?void 0:w.docs)==null?void 0:f.source}}};var k,v,L;s.parameters={...s.parameters,docs:{...(k=s.parameters)==null?void 0:k.docs,source:{originalSource:`{
  tags: ['!dev'],
  parameters: {
    layout: 'centered'
  },
  render: ({}) => <Link href="https://www.ovhcloud.com" target="_blank">
      Link
    </Link>
}`,...(L=(v=s.parameters)==null?void 0:v.docs)==null?void 0:L.source}}};var y,b,O;n.parameters={...n.parameters,docs:{...(y=n.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
}`,...(O=(b=n.parameters)==null?void 0:b.docs)==null?void 0:O.source}}};const _=["Demo","Default","Disabled","Overview","WithIcon"],j=Object.freeze(Object.defineProperty({__proto__:null,Default:o,Demo:t,Disabled:a,Overview:s,WithIcon:n,__namedExportsOrder:_,default:T},Symbol.toStringTag,{value:"Module"}));export{o as D,j as L,s as O,n as W,a};
