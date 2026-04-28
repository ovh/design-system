import{r as f,e}from"./index-jIWwRBLr.js";import{j as p}from"./jsx-runtime-Cfl8ynUo.js";import{c as $}from"./index-CqY9YpN0.js";import{I as i,a as u}from"./icon-name-D0KNfDOz.js";import{e as ee,o as ae,C as _}from"./controls-BtiQQn1l.js";const re="_avatar_36sw4_2",te="_avatar__image_36sw4_19",A={avatar:re,avatar__image:te},a=f.forwardRef(({className:U,children:v,fallback:V=p.jsx(i,{name:u.user}),src:g,...B},K)=>{const[Q,X]=f.useState(!1);function Z(){return v||(g&&!Q?p.jsx("img",{alt:"",className:A.avatar__image,onError:()=>X(!0),src:g}):V||p.jsx(i,{name:u.user}))}return p.jsx("div",{className:$(A.avatar,U),"data-ods":"avatar",ref:K,...B,children:Z()})});a.displayName="Avatar";a.__docgenInfo={description:"",methods:[],displayName:"Avatar",props:{fallback:{required:!1,tsType:{name:"ReactNode"},description:`Fallback content to display when the image fails to load.
Defaults to a user icon.`,defaultValue:{value:"<Icon name={ ICON_NAME.user } />",computed:!1}},src:{required:!1,tsType:{name:"string"},description:"The image source URL."}},composes:["ComponentPropsWithRef"]};const oe={argTypes:ee(["children"]),component:a,tags:["new"],title:"React Components/Avatar"},r={argTypes:ae({fallback:{table:{category:_.general},control:"text"},src:{table:{category:_.general},control:"text"}})},t={tags:["!dev"],render:({})=>e.createElement(a,null)},o={globals:{imports:"import { Avatar } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>e.createElement(a,null)},s={tags:["!dev"],parameters:{layout:"centered"},render:({})=>e.createElement(a,null)},n={globals:{imports:"import { Avatar } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>e.createElement(a,null,"JD")},c={globals:{imports:"import { Avatar } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>e.createElement(a,{src:"https://images.crunchbase.com/image/upload/c_pad,h_160,w_160,f_auto,b_white,q_auto:eco,dpr_1/fhi0pe8wd87fvujy9yk8"})},l={globals:{imports:"import { Avatar, Icon, ICON_NAME } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>e.createElement(a,{fallback:"J",src:"https://invalid-url.example.com/avatar.png"})},m={globals:{imports:"import { Avatar, Icon, ICON_NAME } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>e.createElement(a,null,e.createElement(i,{name:u.sparkle}))},d={parameters:{layout:"fullscreen"},tags:["!dev"],render:({})=>e.createElement("div",{style:{display:"flex",gap:"8px",alignItems:"center"}},e.createElement(a,null),e.createElement(a,null,"JD"),e.createElement(a,null,e.createElement(i,{name:u.sparkle})))};var h,b,E;r.parameters={...r.parameters,docs:{...(h=r.parameters)==null?void 0:h.docs,source:{originalSource:`{
  argTypes: orderControls({
    fallback: {
      table: {
        category: CONTROL_CATEGORY.general
      },
      control: 'text'
    },
    src: {
      table: {
        category: CONTROL_CATEGORY.general
      },
      control: 'text'
    }
  })
}`,...(E=(b=r.parameters)==null?void 0:b.docs)==null?void 0:E.source}}};var y,I,N;t.parameters={...t.parameters,docs:{...(y=t.parameters)==null?void 0:y.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: ({}) => <Avatar />
}`,...(N=(I=t.parameters)==null?void 0:I.docs)==null?void 0:N.source}}};var O,C,x;o.parameters={...o.parameters,docs:{...(O=o.parameters)==null?void 0:O.docs,source:{originalSource:`{
  globals: {
    imports: \`import { Avatar } from '@ovhcloud/ods-react';\`
  },
  tags: ['!dev'],
  render: ({}) => <Avatar />
}`,...(x=(C=o.parameters)==null?void 0:C.docs)==null?void 0:x.source}}};var T,k,w;s.parameters={...s.parameters,docs:{...(T=s.parameters)==null?void 0:T.docs,source:{originalSource:`{
  tags: ['!dev'],
  parameters: {
    layout: 'centered'
  },
  render: ({}) => <Avatar />
}`,...(w=(k=s.parameters)==null?void 0:k.docs)==null?void 0:w.source}}};var S,R,D;n.parameters={...n.parameters,docs:{...(S=n.parameters)==null?void 0:S.docs,source:{originalSource:`{
  globals: {
    imports: \`import { Avatar } from '@ovhcloud/ods-react';\`
  },
  tags: ['!dev'],
  render: ({}) => <Avatar>
      JD
    </Avatar>
}`,...(D=(R=n.parameters)==null?void 0:R.docs)==null?void 0:D.source}}};var j,M,W;c.parameters={...c.parameters,docs:{...(j=c.parameters)==null?void 0:j.docs,source:{originalSource:`{
  globals: {
    imports: \`import { Avatar } from '@ovhcloud/ods-react';\`
  },
  tags: ['!dev'],
  render: ({}) => <Avatar src="https://images.crunchbase.com/image/upload/c_pad,h_160,w_160,f_auto,b_white,q_auto:eco,dpr_1/fhi0pe8wd87fvujy9yk8" />
}`,...(W=(M=c.parameters)==null?void 0:M.docs)==null?void 0:W.source}}};var J,G,q;l.parameters={...l.parameters,docs:{...(J=l.parameters)==null?void 0:J.docs,source:{originalSource:`{
  globals: {
    imports: \`import { Avatar, Icon, ICON_NAME } from '@ovhcloud/ods-react';\`
  },
  tags: ['!dev'],
  render: ({}) => <Avatar fallback={"J"} src="https://invalid-url.example.com/avatar.png" />
}`,...(q=(G=l.parameters)==null?void 0:G.docs)==null?void 0:q.source}}};var F,L,Y;m.parameters={...m.parameters,docs:{...(F=m.parameters)==null?void 0:F.docs,source:{originalSource:`{
  globals: {
    imports: \`import { Avatar, Icon, ICON_NAME } from '@ovhcloud/ods-react';\`
  },
  tags: ['!dev'],
  render: ({}) => <Avatar>
      <Icon name={ICON_NAME.sparkle} />
    </Avatar>
}`,...(Y=(L=m.parameters)==null?void 0:L.docs)==null?void 0:Y.source}}};var P,z,H;d.parameters={...d.parameters,docs:{...(P=d.parameters)==null?void 0:P.docs,source:{originalSource:`{
  parameters: {
    layout: 'fullscreen'
  },
  tags: ['!dev'],
  render: ({}) => <div style={{
    display: 'flex',
    gap: '8px',
    alignItems: 'center'
  }}>
      <Avatar />
      <Avatar>JD</Avatar>
      <Avatar>
        <Icon name={ICON_NAME.sparkle} />
      </Avatar>
    </div>
}`,...(H=(z=d.parameters)==null?void 0:z.docs)==null?void 0:H.source}}};const se=["Demo","AnatomyTech","Default","Overview","Initials","WithImage","WithFallback","WithIcon","ThemeGenerator"],pe=Object.freeze(Object.defineProperty({__proto__:null,AnatomyTech:t,Default:o,Demo:r,Initials:n,Overview:s,ThemeGenerator:d,WithFallback:l,WithIcon:m,WithImage:c,__namedExportsOrder:se,default:oe},Symbol.toStringTag,{value:"Module"}));export{pe as A,o as D,n as I,s as O,c as W,t as a,l as b,m as c};
