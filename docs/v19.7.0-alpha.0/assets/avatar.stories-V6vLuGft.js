import{r as g,e}from"./index-jIWwRBLr.js";import{j as d}from"./jsx-runtime-Cfl8ynUo.js";import{c as K}from"./index-CqY9YpN0.js";import{I as p,a as i}from"./icon-name-RfJfucZu.js";import{e as Q,o as X,C as f}from"./controls-BtiQQn1l.js";const Z="_avatar_36sw4_2",$="_avatar__image_36sw4_19",_={avatar:Z,avatar__image:$},a=g.forwardRef(({className:Y,children:u,fallback:P=d.jsx(p,{name:i.user}),src:v,...z},H)=>{const[U,V]=g.useState(!1);function B(){return u||(v&&!U?d.jsx("img",{alt:"",className:_.avatar__image,onError:()=>V(!0),src:v}):P||d.jsx(p,{name:i.user}))}return d.jsx("div",{className:K(_.avatar,Y),"data-ods":"avatar",ref:H,...z,children:B()})});a.displayName="Avatar";a.__docgenInfo={description:"",methods:[],displayName:"Avatar",props:{fallback:{required:!1,tsType:{name:"ReactNode"},description:`Fallback content to display when the image fails to load.
Defaults to a user icon.`,defaultValue:{value:"<Icon name={ ICON_NAME.user } />",computed:!1}},src:{required:!1,tsType:{name:"string"},description:"The image source URL."}},composes:["ComponentPropsWithRef"]};const ee={argTypes:Q(["children"]),component:a,tags:["new"],title:"React Components/Avatar"},r={argTypes:X({fallback:{table:{category:f.general},control:"text"},src:{table:{category:f.general},control:"text"}})},t={globals:{imports:"import { Avatar } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>e.createElement(a,null)},o={tags:["!dev"],parameters:{layout:"centered"},render:({})=>e.createElement(a,null)},s={globals:{imports:"import { Avatar } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>e.createElement(a,null,"JD")},n={globals:{imports:"import { Avatar } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>e.createElement(a,{src:"https://images.crunchbase.com/image/upload/c_pad,h_160,w_160,f_auto,b_white,q_auto:eco,dpr_1/fhi0pe8wd87fvujy9yk8"})},c={globals:{imports:"import { Avatar, Icon, ICON_NAME } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>e.createElement(a,{fallback:"J",src:"https://invalid-url.example.com/avatar.png"})},l={globals:{imports:"import { Avatar, Icon, ICON_NAME } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>e.createElement(a,null,e.createElement(p,{name:i.sparkle}))},m={parameters:{layout:"fullscreen"},tags:["!dev"],render:({})=>e.createElement("div",{style:{display:"flex",gap:"8px",alignItems:"center"}},e.createElement(a,null),e.createElement(a,null,"JD"),e.createElement(a,null,e.createElement(p,{name:i.sparkle})))};var A,h,b;r.parameters={...r.parameters,docs:{...(A=r.parameters)==null?void 0:A.docs,source:{originalSource:`{
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
}`,...(b=(h=r.parameters)==null?void 0:h.docs)==null?void 0:b.source}}};var E,I,y;t.parameters={...t.parameters,docs:{...(E=t.parameters)==null?void 0:E.docs,source:{originalSource:`{
  globals: {
    imports: \`import { Avatar } from '@ovhcloud/ods-react';\`
  },
  tags: ['!dev'],
  render: ({}) => <Avatar />
}`,...(y=(I=t.parameters)==null?void 0:I.docs)==null?void 0:y.source}}};var N,O,C;o.parameters={...o.parameters,docs:{...(N=o.parameters)==null?void 0:N.docs,source:{originalSource:`{
  tags: ['!dev'],
  parameters: {
    layout: 'centered'
  },
  render: ({}) => <Avatar />
}`,...(C=(O=o.parameters)==null?void 0:O.docs)==null?void 0:C.source}}};var x,T,k;s.parameters={...s.parameters,docs:{...(x=s.parameters)==null?void 0:x.docs,source:{originalSource:`{
  globals: {
    imports: \`import { Avatar } from '@ovhcloud/ods-react';\`
  },
  tags: ['!dev'],
  render: ({}) => <Avatar>
      JD
    </Avatar>
}`,...(k=(T=s.parameters)==null?void 0:T.docs)==null?void 0:k.source}}};var w,R,S;n.parameters={...n.parameters,docs:{...(w=n.parameters)==null?void 0:w.docs,source:{originalSource:`{
  globals: {
    imports: \`import { Avatar } from '@ovhcloud/ods-react';\`
  },
  tags: ['!dev'],
  render: ({}) => <Avatar src="https://images.crunchbase.com/image/upload/c_pad,h_160,w_160,f_auto,b_white,q_auto:eco,dpr_1/fhi0pe8wd87fvujy9yk8" />
}`,...(S=(R=n.parameters)==null?void 0:R.docs)==null?void 0:S.source}}};var D,j,M;c.parameters={...c.parameters,docs:{...(D=c.parameters)==null?void 0:D.docs,source:{originalSource:`{
  globals: {
    imports: \`import { Avatar, Icon, ICON_NAME } from '@ovhcloud/ods-react';\`
  },
  tags: ['!dev'],
  render: ({}) => <Avatar fallback={"J"} src="https://invalid-url.example.com/avatar.png" />
}`,...(M=(j=c.parameters)==null?void 0:j.docs)==null?void 0:M.source}}};var W,J,G;l.parameters={...l.parameters,docs:{...(W=l.parameters)==null?void 0:W.docs,source:{originalSource:`{
  globals: {
    imports: \`import { Avatar, Icon, ICON_NAME } from '@ovhcloud/ods-react';\`
  },
  tags: ['!dev'],
  render: ({}) => <Avatar>
      <Icon name={ICON_NAME.sparkle} />
    </Avatar>
}`,...(G=(J=l.parameters)==null?void 0:J.docs)==null?void 0:G.source}}};var q,F,L;m.parameters={...m.parameters,docs:{...(q=m.parameters)==null?void 0:q.docs,source:{originalSource:`{
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
}`,...(L=(F=m.parameters)==null?void 0:F.docs)==null?void 0:L.source}}};const ae=["Demo","Default","Overview","Initials","WithImage","WithFallback","WithIcon","ThemeGenerator"],ce=Object.freeze(Object.defineProperty({__proto__:null,Default:t,Demo:r,Initials:s,Overview:o,ThemeGenerator:m,WithFallback:c,WithIcon:l,WithImage:n,__namedExportsOrder:ae,default:ee},Symbol.toStringTag,{value:"Module"}));export{ce as A,t as D,s as I,o as O,n as W,c as a,l as b};
