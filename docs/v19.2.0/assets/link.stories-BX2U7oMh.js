import{e}from"./index-jIWwRBLr.js";import{I as r,a as t}from"./icon-name-C581wThh.js";import{L as o}from"./Link-D5eLq5a9.js";import{e as F,o as P,C as w}from"./controls-BtiQQn1l.js";const j={argTypes:F(["as"]),component:o,title:"React Components/Link"},a={argTypes:P({children:{table:{category:w.slot},control:"text"},disabled:{table:{category:w.general},control:"boolean"}}),args:{children:"My link"}},n={globals:{imports:"import { Link } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>e.createElement(o,{href:"https://www.ovhcloud.com"},"Default Link")},s={globals:{imports:"import { Link } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>e.createElement(o,{disabled:!0,href:"https://www.ovhcloud.com"},"Disabled")},l={tags:["!dev"],parameters:{layout:"centered"},render:({})=>e.createElement(o,{href:"https://www.ovhcloud.com",target:"_blank"},"Link")},c={decorators:[p=>e.createElement("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr"}},p())],globals:{imports:"import { ICON_NAME, Icon, Link } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>e.createElement(e.Fragment,null,e.createElement(o,{href:"https://www.ovhcloud.com"},e.createElement(r,{name:t.arrowLeft}),"Icon Link"),e.createElement(o,{href:"https://www.ovhcloud.com",style:{justifySelf:"right"}},"Icon Link",e.createElement(r,{name:t.arrowRight})))},i={globals:{imports:"import { ICON_NAME, Icon, Link } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>e.createElement(o,{"aria-label":"Go to homepage",href:"https://www.ovhcloud.com"},e.createElement(r,{name:t.home}))},d={globals:{imports:"import { ICON_NAME, Icon, Link } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>e.createElement(o,{"aria-label":"Visit Example (opens in a new tab)",href:"https://www.ovhcloud.com",target:"_blank"},e.createElement(r,{name:t.externalLink}))},m={decorators:[p=>e.createElement("div",{style:{display:"grid",gridTemplateColumns:"1fr"}},p())],globals:{imports:"import { ICON_NAME, Icon, Link } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>e.createElement(e.Fragment,null,e.createElement(o,{"aria-label":"Download WCAG20 Guidelines (PDF, 481 KB)",href:"https://www.w3.org/TR/2024/REC-WCAG21-20241212.pdf"},e.createElement(r,{name:t.download})),e.createElement(o,{href:"https://www.w3.org/TR/2024/REC-WCAG21-20241212.pdf"},e.createElement(r,{name:t.download}),e.createElement("span",null,"Download WCAG20 Guidelines (PDF, 481 KB)")))};var h,u,g;a.parameters={...a.parameters,docs:{...(h=a.parameters)==null?void 0:h.docs,source:{originalSource:`{
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
}`,...(g=(u=a.parameters)==null?void 0:u.docs)==null?void 0:g.source}}};var f,k,L;n.parameters={...n.parameters,docs:{...(f=n.parameters)==null?void 0:f.docs,source:{originalSource:`{
  globals: {
    imports: \`import { Link } from '@ovhcloud/ods-react';\`
  },
  tags: ['!dev'],
  render: ({}) => <Link href="https://www.ovhcloud.com">
      Default Link
    </Link>
}`,...(L=(k=n.parameters)==null?void 0:k.docs)==null?void 0:L.source}}};var v,b,E;s.parameters={...s.parameters,docs:{...(v=s.parameters)==null?void 0:v.docs,source:{originalSource:`{
  globals: {
    imports: \`import { Link } from '@ovhcloud/ods-react';\`
  },
  tags: ['!dev'],
  render: ({}) => <Link disabled href="https://www.ovhcloud.com">
      Disabled
    </Link>
}`,...(E=(b=s.parameters)==null?void 0:b.docs)==null?void 0:E.source}}};var C,I,y;l.parameters={...l.parameters,docs:{...(C=l.parameters)==null?void 0:C.docs,source:{originalSource:`{
  tags: ['!dev'],
  parameters: {
    layout: 'centered'
  },
  render: ({}) => <Link href="https://www.ovhcloud.com" target="_blank">
      Link
    </Link>
}`,...(y=(I=l.parameters)==null?void 0:I.docs)==null?void 0:y.source}}};var A,N,O;c.parameters={...c.parameters,docs:{...(A=c.parameters)==null?void 0:A.docs,source:{originalSource:`{
  decorators: [story => <div style={{
    display: 'grid',
    gridTemplateColumns: '1fr 1fr'
  }}>{story()}</div>],
  globals: {
    imports: \`import { ICON_NAME, Icon, Link } from '@ovhcloud/ods-react';\`
  },
  tags: ['!dev'],
  render: ({}) => <>
      <Link href="https://www.ovhcloud.com">
        <Icon name={ICON_NAME.arrowLeft} />Icon Link
      </Link>

      <Link href="https://www.ovhcloud.com" style={{
      justifySelf: 'right'
    }}>
        Icon Link<Icon name={ICON_NAME.arrowRight} />
      </Link>
    </>
}`,...(O=(N=c.parameters)==null?void 0:N.docs)==null?void 0:O.source}}};var _,D,T;i.parameters={...i.parameters,docs:{...(_=i.parameters)==null?void 0:_.docs,source:{originalSource:`{
  globals: {
    imports: \`import { ICON_NAME, Icon, Link } from '@ovhcloud/ods-react';\`
  },
  tags: ['!dev'],
  render: ({}) => <Link aria-label="Go to homepage" href="https://www.ovhcloud.com">
      <Icon name={ICON_NAME.home} />
    </Link>
}`,...(T=(D=i.parameters)==null?void 0:D.docs)==null?void 0:T.source}}};var M,G,R;d.parameters={...d.parameters,docs:{...(M=d.parameters)==null?void 0:M.docs,source:{originalSource:`{
  globals: {
    imports: \`import { ICON_NAME, Icon, Link } from '@ovhcloud/ods-react';\`
  },
  tags: ['!dev'],
  render: ({}) => <Link aria-label="Visit Example (opens in a new tab)" href="https://www.ovhcloud.com" target="_blank">
      <Icon name={ICON_NAME.externalLink} />
    </Link>
}`,...(R=(G=d.parameters)==null?void 0:G.docs)==null?void 0:R.source}}};var S,W,x;m.parameters={...m.parameters,docs:{...(S=m.parameters)==null?void 0:S.docs,source:{originalSource:`{
  decorators: [story => <div style={{
    display: 'grid',
    gridTemplateColumns: '1fr'
  }}>{story()}</div>],
  globals: {
    imports: \`import { ICON_NAME, Icon, Link } from '@ovhcloud/ods-react';\`
  },
  tags: ['!dev'],
  render: ({}) => <>
      <Link aria-label="Download WCAG20 Guidelines (PDF, 481 KB)" href="https://www.w3.org/TR/2024/REC-WCAG21-20241212.pdf">
        <Icon name={ICON_NAME.download} />
      </Link>

      <Link href="https://www.w3.org/TR/2024/REC-WCAG21-20241212.pdf">
        <Icon name={ICON_NAME.download} />

        <span>Download WCAG20 Guidelines (PDF, 481 KB)</span>
      </Link>
    </>
}`,...(x=(W=m.parameters)==null?void 0:W.docs)==null?void 0:x.source}}};const B=["Demo","Default","Disabled","Overview","WithIcon","AccessibilityIconOnlyLink","AccessibilityInANewTab","AccessibilityFileDownload"],q=Object.freeze(Object.defineProperty({__proto__:null,AccessibilityFileDownload:m,AccessibilityIconOnlyLink:i,AccessibilityInANewTab:d,Default:n,Demo:a,Disabled:s,Overview:l,WithIcon:c,__namedExportsOrder:B,default:j},Symbol.toStringTag,{value:"Module"}));export{i as A,n as D,q as L,l as O,c as W,d as a,m as b,s as c};
