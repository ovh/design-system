import{e}from"./index-D_CmzhJ4.js";import{I as a}from"./icon-name-CL_C5kfn.js";import{L as r}from"./Link-CQBDxF2D.js";import{e as N,o as P,C as p}from"./controls-BtiQQn1l.js";const j={argTypes:N(["as"]),component:r,title:"React Components/Link"},t={argTypes:P({children:{table:{category:p.slot},control:"text"},disabled:{table:{category:p.general},control:"boolean"}}),args:{children:"My link"}},o={tags:["!dev"],render:({})=>e.createElement(r,{href:"https://www.ovhcloud.com"},"Default Link")},n={tags:["!dev"],render:({})=>e.createElement(r,{disabled:!0,href:"https://www.ovhcloud.com"},"Disabled")},s={tags:["!dev"],parameters:{layout:"centered"},render:({})=>e.createElement(r,{href:"https://www.ovhcloud.com",target:"_blank"},"Link")},l={decorators:[m=>e.createElement("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr"}},m())],tags:["!dev"],render:({})=>e.createElement(e.Fragment,null,e.createElement(r,{href:"https://www.ovhcloud.com"},e.createElement(a,{name:"arrow-left"}),"Icon Link"),e.createElement(r,{style:{justifySelf:"right"},href:"https://www.ovhcloud.com"},"Icon Link",e.createElement(a,{name:"arrow-right"})))},c={tags:["!dev"],render:({})=>e.createElement(r,{"aria-label":"Go to homepage",href:"https://www.ovhcloud.com"},e.createElement(a,{name:"home"}))},i={tags:["!dev"],render:({})=>e.createElement(r,{"aria-label":"Visit Example (opens in a new tab)",href:"https://www.ovhcloud.com",target:"_blank"},e.createElement(a,{name:"external-link"}))},d={decorators:[m=>e.createElement("div",{style:{display:"grid",gridTemplateColumns:"1fr"}},m())],tags:["!dev"],render:({})=>e.createElement(e.Fragment,null,e.createElement(r,{"aria-label":"Download WCAG20 Guidelines (PDF, 481 KB)",href:"https://www.w3.org/TR/2024/REC-WCAG21-20241212.pdf"},e.createElement(a,{name:"download"})),e.createElement(r,{href:"https://www.w3.org/TR/2024/REC-WCAG21-20241212.pdf"},e.createElement(a,{name:"download"}),e.createElement("span",null,"Download WCAG20 Guidelines (PDF, 481 KB)")))};var w,h,u;t.parameters={...t.parameters,docs:{...(w=t.parameters)==null?void 0:w.docs,source:{originalSource:`{
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
}`,...(u=(h=t.parameters)==null?void 0:h.docs)==null?void 0:u.source}}};var g,f,k;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: ({}) => <Link href="https://www.ovhcloud.com">
      Default Link
    </Link>
}`,...(k=(f=o.parameters)==null?void 0:f.docs)==null?void 0:k.source}}};var v,b,y;n.parameters={...n.parameters,docs:{...(v=n.parameters)==null?void 0:v.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: ({}) => <Link disabled href="https://www.ovhcloud.com">
      Disabled
    </Link>
}`,...(y=(b=n.parameters)==null?void 0:b.docs)==null?void 0:y.source}}};var L,E,C;s.parameters={...s.parameters,docs:{...(L=s.parameters)==null?void 0:L.docs,source:{originalSource:`{
  tags: ['!dev'],
  parameters: {
    layout: 'centered'
  },
  render: ({}) => <Link href="https://www.ovhcloud.com" target="_blank">
      Link
    </Link>
}`,...(C=(E=s.parameters)==null?void 0:E.docs)==null?void 0:C.source}}};var D,A,T;l.parameters={...l.parameters,docs:{...(D=l.parameters)==null?void 0:D.docs,source:{originalSource:`{
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
}`,...(T=(A=l.parameters)==null?void 0:A.docs)==null?void 0:T.source}}};var I,G,O;c.parameters={...c.parameters,docs:{...(I=c.parameters)==null?void 0:I.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: ({}) => <Link aria-label="Go to homepage" href="https://www.ovhcloud.com">
      <Icon name="home" />
    </Link>
}`,...(O=(G=c.parameters)==null?void 0:G.docs)==null?void 0:O.source}}};var R,S,_;i.parameters={...i.parameters,docs:{...(R=i.parameters)==null?void 0:R.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: ({}) => <Link aria-label="Visit Example (opens in a new tab)" href="https://www.ovhcloud.com" target="_blank">
      <Icon name="external-link" />
    </Link>
}`,...(_=(S=i.parameters)==null?void 0:S.docs)==null?void 0:_.source}}};var W,x,F;d.parameters={...d.parameters,docs:{...(W=d.parameters)==null?void 0:W.docs,source:{originalSource:`{
  decorators: [story => <div style={{
    display: 'grid',
    gridTemplateColumns: '1fr'
  }}>{story()}</div>],
  tags: ['!dev'],
  render: ({}) => <>
      <Link aria-label="Download WCAG20 Guidelines (PDF, 481 KB)" href="https://www.w3.org/TR/2024/REC-WCAG21-20241212.pdf">
        <Icon name="download" />
      </Link>
      <Link href="https://www.w3.org/TR/2024/REC-WCAG21-20241212.pdf">
        <Icon name="download" />
        <span>Download WCAG20 Guidelines (PDF, 481 KB)</span>
      </Link>
    </>
}`,...(F=(x=d.parameters)==null?void 0:x.docs)==null?void 0:F.source}}};const B=["Demo","Default","Disabled","Overview","WithIcon","AccessibilityIconOnlyLink","AccessibilityInANewTab","AccessibilityFileDownload"],z=Object.freeze(Object.defineProperty({__proto__:null,AccessibilityFileDownload:d,AccessibilityIconOnlyLink:c,AccessibilityInANewTab:i,Default:o,Demo:t,Disabled:n,Overview:s,WithIcon:l,__namedExportsOrder:B,default:j},Symbol.toStringTag,{value:"Module"}));export{c as A,o as D,z as L,s as O,l as W,i as a,d as b,n as c};
