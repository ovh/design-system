import{e}from"./index-jIWwRBLr.js";import{I as r,a as t}from"./icon-name-D0KNfDOz.js";import{L as o}from"./Link-BMD7IBx8.js";import{e as q,o as H,C as u}from"./controls-BtiQQn1l.js";const J={argTypes:q(["as"]),component:o,title:"React Components/Link"},a={argTypes:H({children:{table:{category:u.slot},control:"text"},disabled:{table:{category:u.general},control:"boolean"}}),args:{children:"My link"}},n={tags:["!dev"],render:({})=>e.createElement(o,{href:"https://www.ovhcloud.com",target:"_blank"},"Link")},s={globals:{imports:"import { Link } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>e.createElement(o,{href:"https://www.ovhcloud.com"},"Default Link")},c={globals:{imports:"import { Link } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>e.createElement(o,{disabled:!0,href:"https://www.ovhcloud.com"},"Disabled")},l={tags:["!dev"],parameters:{layout:"centered"},render:({})=>e.createElement(o,{href:"https://www.ovhcloud.com",target:"_blank"},"Link")},i={decorators:[w=>e.createElement("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr"}},w())],globals:{imports:"import { ICON_NAME, Icon, Link } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>e.createElement(e.Fragment,null,e.createElement(o,{href:"https://www.ovhcloud.com"},e.createElement(r,{name:t.arrowLeft}),"Icon Link"),e.createElement(o,{href:"https://www.ovhcloud.com",style:{justifySelf:"right"}},"Icon Link",e.createElement(r,{name:t.arrowRight})))},d={globals:{imports:"import { ICON_NAME, Icon, Link } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>e.createElement(o,{"aria-label":"Go to homepage",href:"https://www.ovhcloud.com"},e.createElement(r,{name:t.home}))},m={globals:{imports:"import { ICON_NAME, Icon, Link } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>e.createElement(o,{"aria-label":"Visit Example (opens in a new tab)",href:"https://www.ovhcloud.com",target:"_blank"},e.createElement(r,{name:t.externalLink}))},p={decorators:[w=>e.createElement("div",{style:{display:"grid",gridTemplateColumns:"1fr"}},w())],globals:{imports:"import { ICON_NAME, Icon, Link } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>e.createElement(e.Fragment,null,e.createElement(o,{"aria-label":"Download WCAG20 Guidelines (PDF, 481 KB)",href:"https://www.w3.org/TR/2024/REC-WCAG21-20241212.pdf"},e.createElement(r,{name:t.download})),e.createElement(o,{href:"https://www.w3.org/TR/2024/REC-WCAG21-20241212.pdf"},e.createElement(r,{name:t.download}),e.createElement("span",null,"Download WCAG20 Guidelines (PDF, 481 KB)")))},h={parameters:{layout:"fullscreen"},tags:["!dev"],render:({})=>e.createElement("div",{style:{display:"flex",flexFlow:"column",gap:"8px"}},e.createElement(o,{href:"https://www.ovhcloud.com"},"Default Link"),e.createElement(o,{disabled:!0,href:"https://www.ovhcloud.com"},"Disabled"),e.createElement(o,{href:"https://www.ovhcloud.com"},e.createElement(r,{name:t.arrowLeft}),"Icon Left"),e.createElement(o,{href:"https://www.ovhcloud.com",style:{justifySelf:"right"}},"Icon Right",e.createElement(r,{name:t.arrowRight})))};var g,f,L;a.parameters={...a.parameters,docs:{...(g=a.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
}`,...(L=(f=a.parameters)==null?void 0:f.docs)==null?void 0:L.source}}};var k,v,b;n.parameters={...n.parameters,docs:{...(k=n.parameters)==null?void 0:k.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: ({}) => <Link href="https://www.ovhcloud.com" target="_blank">
      Link
    </Link>
}`,...(b=(v=n.parameters)==null?void 0:v.docs)==null?void 0:b.source}}};var E,y,I;s.parameters={...s.parameters,docs:{...(E=s.parameters)==null?void 0:E.docs,source:{originalSource:`{
  globals: {
    imports: \`import { Link } from '@ovhcloud/ods-react';\`
  },
  tags: ['!dev'],
  render: ({}) => <Link href="https://www.ovhcloud.com">
      Default Link
    </Link>
}`,...(I=(y=s.parameters)==null?void 0:y.docs)==null?void 0:I.source}}};var C,A,N;c.parameters={...c.parameters,docs:{...(C=c.parameters)==null?void 0:C.docs,source:{originalSource:`{
  globals: {
    imports: \`import { Link } from '@ovhcloud/ods-react';\`
  },
  tags: ['!dev'],
  render: ({}) => <Link disabled href="https://www.ovhcloud.com">
      Disabled
    </Link>
}`,...(N=(A=c.parameters)==null?void 0:A.docs)==null?void 0:N.source}}};var O,_,D;l.parameters={...l.parameters,docs:{...(O=l.parameters)==null?void 0:O.docs,source:{originalSource:`{
  tags: ['!dev'],
  parameters: {
    layout: 'centered'
  },
  render: ({}) => <Link href="https://www.ovhcloud.com" target="_blank">
      Link
    </Link>
}`,...(D=(_=l.parameters)==null?void 0:_.docs)==null?void 0:D.source}}};var T,R,M;i.parameters={...i.parameters,docs:{...(T=i.parameters)==null?void 0:T.docs,source:{originalSource:`{
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
}`,...(M=(R=i.parameters)==null?void 0:R.docs)==null?void 0:M.source}}};var G,S,x;d.parameters={...d.parameters,docs:{...(G=d.parameters)==null?void 0:G.docs,source:{originalSource:`{
  globals: {
    imports: \`import { ICON_NAME, Icon, Link } from '@ovhcloud/ods-react';\`
  },
  tags: ['!dev'],
  render: ({}) => <Link aria-label="Go to homepage" href="https://www.ovhcloud.com">
      <Icon name={ICON_NAME.home} />
    </Link>
}`,...(x=(S=d.parameters)==null?void 0:S.docs)==null?void 0:x.source}}};var F,W,j;m.parameters={...m.parameters,docs:{...(F=m.parameters)==null?void 0:F.docs,source:{originalSource:`{
  globals: {
    imports: \`import { ICON_NAME, Icon, Link } from '@ovhcloud/ods-react';\`
  },
  tags: ['!dev'],
  render: ({}) => <Link aria-label="Visit Example (opens in a new tab)" href="https://www.ovhcloud.com" target="_blank">
      <Icon name={ICON_NAME.externalLink} />
    </Link>
}`,...(j=(W=m.parameters)==null?void 0:W.docs)==null?void 0:j.source}}};var P,B,K;p.parameters={...p.parameters,docs:{...(P=p.parameters)==null?void 0:P.docs,source:{originalSource:`{
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
}`,...(K=(B=p.parameters)==null?void 0:B.docs)==null?void 0:K.source}}};var Y,V,z;h.parameters={...h.parameters,docs:{...(Y=h.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  parameters: {
    layout: 'fullscreen'
  },
  tags: ['!dev'],
  render: ({}) => <div style={{
    display: 'flex',
    flexFlow: 'column',
    gap: '8px'
  }}>
      <Link href="https://www.ovhcloud.com">Default Link</Link>
      <Link disabled href="https://www.ovhcloud.com">Disabled</Link>
      <Link href="https://www.ovhcloud.com"><Icon name={ICON_NAME.arrowLeft} />Icon Left</Link>
      <Link href="https://www.ovhcloud.com" style={{
      justifySelf: 'right'
    }}>Icon Right<Icon name={ICON_NAME.arrowRight} /></Link>
    </div>
}`,...(z=(V=h.parameters)==null?void 0:V.docs)==null?void 0:z.source}}};const Q=["Demo","AnatomyTech","Default","Disabled","Overview","WithIcon","AccessibilityIconOnlyLink","AccessibilityInANewTab","AccessibilityFileDownload","ThemeGenerator"],ee=Object.freeze(Object.defineProperty({__proto__:null,AccessibilityFileDownload:p,AccessibilityIconOnlyLink:d,AccessibilityInANewTab:m,AnatomyTech:n,Default:s,Demo:a,Disabled:c,Overview:l,ThemeGenerator:h,WithIcon:i,__namedExportsOrder:Q,default:J},Symbol.toStringTag,{value:"Module"}));export{d as A,s as D,ee as L,l as O,i as W,m as a,p as b,n as c,c as d};
