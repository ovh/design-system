import{e}from"./index-jIWwRBLr.js";import{I as r,a as t}from"./icon-name-C581wThh.js";import{L as o}from"./Link-C-y4OBrb.js";import{e as K,o as Y,C as w}from"./controls-BtiQQn1l.js";const V={argTypes:K(["as"]),component:o,title:"React Components/Link"},a={argTypes:Y({children:{table:{category:w.slot},control:"text"},disabled:{table:{category:w.general},control:"boolean"}}),args:{children:"My link"}},n={globals:{imports:"import { Link } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>e.createElement(o,{href:"https://www.ovhcloud.com"},"Default Link")},s={globals:{imports:"import { Link } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>e.createElement(o,{disabled:!0,href:"https://www.ovhcloud.com"},"Disabled")},l={tags:["!dev"],parameters:{layout:"centered"},render:({})=>e.createElement(o,{href:"https://www.ovhcloud.com",target:"_blank"},"Link")},c={decorators:[h=>e.createElement("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr"}},h())],globals:{imports:"import { ICON_NAME, Icon, Link } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>e.createElement(e.Fragment,null,e.createElement(o,{href:"https://www.ovhcloud.com"},e.createElement(r,{name:t.arrowLeft}),"Icon Link"),e.createElement(o,{href:"https://www.ovhcloud.com",style:{justifySelf:"right"}},"Icon Link",e.createElement(r,{name:t.arrowRight})))},i={globals:{imports:"import { ICON_NAME, Icon, Link } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>e.createElement(o,{"aria-label":"Go to homepage",href:"https://www.ovhcloud.com"},e.createElement(r,{name:t.home}))},d={globals:{imports:"import { ICON_NAME, Icon, Link } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>e.createElement(o,{"aria-label":"Visit Example (opens in a new tab)",href:"https://www.ovhcloud.com",target:"_blank"},e.createElement(r,{name:t.externalLink}))},m={decorators:[h=>e.createElement("div",{style:{display:"grid",gridTemplateColumns:"1fr"}},h())],globals:{imports:"import { ICON_NAME, Icon, Link } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>e.createElement(e.Fragment,null,e.createElement(o,{"aria-label":"Download WCAG20 Guidelines (PDF, 481 KB)",href:"https://www.w3.org/TR/2024/REC-WCAG21-20241212.pdf"},e.createElement(r,{name:t.download})),e.createElement(o,{href:"https://www.w3.org/TR/2024/REC-WCAG21-20241212.pdf"},e.createElement(r,{name:t.download}),e.createElement("span",null,"Download WCAG20 Guidelines (PDF, 481 KB)")))},p={parameters:{layout:"fullscreen"},tags:["!dev"],render:({})=>e.createElement("div",{style:{display:"flex",flexFlow:"column",gap:"8px"}},e.createElement(o,{href:"https://www.ovhcloud.com"},"Default Link"),e.createElement(o,{disabled:!0,href:"https://www.ovhcloud.com"},"Disabled"),e.createElement(o,{href:"https://www.ovhcloud.com"},e.createElement(r,{name:t.arrowLeft}),"Icon Left"),e.createElement(o,{href:"https://www.ovhcloud.com",style:{justifySelf:"right"}},"Icon Right",e.createElement(r,{name:t.arrowRight})))};var u,g,f;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
}`,...(f=(g=a.parameters)==null?void 0:g.docs)==null?void 0:f.source}}};var L,v,k;n.parameters={...n.parameters,docs:{...(L=n.parameters)==null?void 0:L.docs,source:{originalSource:`{
  globals: {
    imports: \`import { Link } from '@ovhcloud/ods-react';\`
  },
  tags: ['!dev'],
  render: ({}) => <Link href="https://www.ovhcloud.com">
      Default Link
    </Link>
}`,...(k=(v=n.parameters)==null?void 0:v.docs)==null?void 0:k.source}}};var b,E,I;s.parameters={...s.parameters,docs:{...(b=s.parameters)==null?void 0:b.docs,source:{originalSource:`{
  globals: {
    imports: \`import { Link } from '@ovhcloud/ods-react';\`
  },
  tags: ['!dev'],
  render: ({}) => <Link disabled href="https://www.ovhcloud.com">
      Disabled
    </Link>
}`,...(I=(E=s.parameters)==null?void 0:E.docs)==null?void 0:I.source}}};var y,C,N;l.parameters={...l.parameters,docs:{...(y=l.parameters)==null?void 0:y.docs,source:{originalSource:`{
  tags: ['!dev'],
  parameters: {
    layout: 'centered'
  },
  render: ({}) => <Link href="https://www.ovhcloud.com" target="_blank">
      Link
    </Link>
}`,...(N=(C=l.parameters)==null?void 0:C.docs)==null?void 0:N.source}}};var A,O,_;c.parameters={...c.parameters,docs:{...(A=c.parameters)==null?void 0:A.docs,source:{originalSource:`{
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
}`,...(_=(O=c.parameters)==null?void 0:O.docs)==null?void 0:_.source}}};var D,T,R;i.parameters={...i.parameters,docs:{...(D=i.parameters)==null?void 0:D.docs,source:{originalSource:`{
  globals: {
    imports: \`import { ICON_NAME, Icon, Link } from '@ovhcloud/ods-react';\`
  },
  tags: ['!dev'],
  render: ({}) => <Link aria-label="Go to homepage" href="https://www.ovhcloud.com">
      <Icon name={ICON_NAME.home} />
    </Link>
}`,...(R=(T=i.parameters)==null?void 0:T.docs)==null?void 0:R.source}}};var M,G,S;d.parameters={...d.parameters,docs:{...(M=d.parameters)==null?void 0:M.docs,source:{originalSource:`{
  globals: {
    imports: \`import { ICON_NAME, Icon, Link } from '@ovhcloud/ods-react';\`
  },
  tags: ['!dev'],
  render: ({}) => <Link aria-label="Visit Example (opens in a new tab)" href="https://www.ovhcloud.com" target="_blank">
      <Icon name={ICON_NAME.externalLink} />
    </Link>
}`,...(S=(G=d.parameters)==null?void 0:G.docs)==null?void 0:S.source}}};var x,F,W;m.parameters={...m.parameters,docs:{...(x=m.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
}`,...(W=(F=m.parameters)==null?void 0:F.docs)==null?void 0:W.source}}};var j,P,B;p.parameters={...p.parameters,docs:{...(j=p.parameters)==null?void 0:j.docs,source:{originalSource:`{
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
}`,...(B=(P=p.parameters)==null?void 0:P.docs)==null?void 0:B.source}}};const z=["Demo","Default","Disabled","Overview","WithIcon","AccessibilityIconOnlyLink","AccessibilityInANewTab","AccessibilityFileDownload","ThemeGenerator"],U=Object.freeze(Object.defineProperty({__proto__:null,AccessibilityFileDownload:m,AccessibilityIconOnlyLink:i,AccessibilityInANewTab:d,Default:n,Demo:a,Disabled:s,Overview:l,ThemeGenerator:p,WithIcon:c,__namedExportsOrder:z,default:V},Symbol.toStringTag,{value:"Module"}));export{i as A,n as D,U as L,l as O,c as W,d as a,m as b,s as c};
