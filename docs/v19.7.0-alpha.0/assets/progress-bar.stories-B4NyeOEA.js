import{e}from"./index-jIWwRBLr.js";import{P as r}from"./ProgressBar-ctSrx_5P.js";import{o as A,C as c}from"./controls-BtiQQn1l.js";const G={component:r,title:"React Components/Progress Bar"},a={argTypes:A({max:{table:{category:c.general,type:{summary:"number"}},control:"number"},value:{table:{category:c.general,type:{summary:"number"}},control:"number"}})},o={globals:{imports:"import { ProgressBar } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>e.createElement(r,null)},s={globals:{imports:"import { ProgressBar } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>e.createElement(r,{max:"500",value:"50"})},t={tags:["!dev"],render:({})=>e.createElement(r,{value:"50"})},n={globals:{imports:"import { ProgressBar } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>e.createElement(r,{value:"50"})},l={globals:{imports:"import { ProgressBar } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>e.createElement(r,{"aria-label":"Converting"})},m={parameters:{layout:"fullscreen"},tags:["!dev"],render:({})=>e.createElement("div",{style:{display:"flex",flexDirection:"column",gap:"12px",width:"300px"}},e.createElement(r,null),e.createElement(r,{value:"25"}),e.createElement(r,{value:"50"}),e.createElement(r,{value:"75"}),e.createElement(r,{max:"500",value:"50"}))};var d,u,p;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`{
  argTypes: orderControls({
    max: {
      table: {
        category: CONTROL_CATEGORY.general,
        type: {
          summary: 'number'
        }
      },
      control: 'number'
    },
    value: {
      table: {
        category: CONTROL_CATEGORY.general,
        type: {
          summary: 'number'
        }
      },
      control: 'number'
    }
  })
}`,...(p=(u=a.parameters)==null?void 0:u.docs)==null?void 0:p.source}}};var g,i,v;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:`{
  globals: {
    imports: \`import { ProgressBar } from '@ovhcloud/ods-react';\`
  },
  tags: ['!dev'],
  render: ({}) => <ProgressBar />
}`,...(v=(i=o.parameters)==null?void 0:i.docs)==null?void 0:v.source}}};var b,y,P;s.parameters={...s.parameters,docs:{...(b=s.parameters)==null?void 0:b.docs,source:{originalSource:`{
  globals: {
    imports: \`import { ProgressBar } from '@ovhcloud/ods-react';\`
  },
  tags: ['!dev'],
  render: ({}) => <ProgressBar max="500" value="50" />
}`,...(P=(y=s.parameters)==null?void 0:y.docs)==null?void 0:P.source}}};var f,B,x;t.parameters={...t.parameters,docs:{...(f=t.parameters)==null?void 0:f.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: ({}) => <ProgressBar value="50" />
}`,...(x=(B=t.parameters)==null?void 0:B.docs)==null?void 0:x.source}}};var E,O,h;n.parameters={...n.parameters,docs:{...(E=n.parameters)==null?void 0:E.docs,source:{originalSource:`{
  globals: {
    imports: \`import { ProgressBar } from '@ovhcloud/ods-react';\`
  },
  tags: ['!dev'],
  render: ({}) => <ProgressBar value="50" />
}`,...(h=(O=n.parameters)==null?void 0:O.docs)==null?void 0:h.source}}};var C,T,S;l.parameters={...l.parameters,docs:{...(C=l.parameters)==null?void 0:C.docs,source:{originalSource:`{
  globals: {
    imports: \`import { ProgressBar } from '@ovhcloud/ods-react';\`
  },
  tags: ['!dev'],
  render: ({}) => <ProgressBar aria-label="Converting" />
}`,...(S=(T=l.parameters)==null?void 0:T.docs)==null?void 0:S.source}}};var _,D,R;m.parameters={...m.parameters,docs:{...(_=m.parameters)==null?void 0:_.docs,source:{originalSource:`{
  parameters: {
    layout: 'fullscreen'
  },
  tags: ['!dev'],
  render: ({}) => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '12px',
    width: '300px'
  }}>
      <ProgressBar />
      <ProgressBar value="25" />
      <ProgressBar value="50" />
      <ProgressBar value="75" />
      <ProgressBar max="500" value="50" />
    </div>
}`,...(R=(D=m.parameters)==null?void 0:D.docs)==null?void 0:R.source}}};const L=["Demo","Default","Max","Overview","Value","AccessibilityLabel","ThemeGenerator"],V=Object.freeze(Object.defineProperty({__proto__:null,AccessibilityLabel:l,Default:o,Demo:a,Max:s,Overview:t,ThemeGenerator:m,Value:n,__namedExportsOrder:L,default:G},Symbol.toStringTag,{value:"Module"}));export{l as A,o as D,s as M,t as O,V as P,n as V};
