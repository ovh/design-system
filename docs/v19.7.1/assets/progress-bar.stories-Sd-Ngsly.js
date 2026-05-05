import{e}from"./index-jIWwRBLr.js";import{P as r}from"./ProgressBar-DLYyMEWe.js";import{o as Y,C as u}from"./controls-BtiQQn1l.js";const j={component:r,title:"React Components/Progress Bar"},a={argTypes:Y({max:{table:{category:u.general,type:{summary:"number"}},control:"number"},value:{table:{category:u.general,type:{summary:"number"}},control:"number"}})},s={tags:["!dev"],render:({})=>e.createElement(r,{value:"50"})},o={globals:{imports:"import { ProgressBar } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>e.createElement(r,null)},t={globals:{imports:"import { ProgressBar } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>e.createElement(r,{value:"indeterminate"})},n={globals:{imports:"import { ProgressBar } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>e.createElement(r,{max:"500",value:"50"})},m={tags:["!dev"],render:({})=>e.createElement(r,{value:"50"})},l={globals:{imports:"import { ProgressBar } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>e.createElement(r,{value:"50"})},c={globals:{imports:"import { ProgressBar } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>e.createElement(r,{"aria-label":"Converting"})},d={parameters:{layout:"fullscreen"},tags:["!dev"],render:({})=>e.createElement("div",{style:{display:"flex",flexDirection:"column",gap:"12px",width:"300px"}},e.createElement(r,null),e.createElement(r,{value:"25"}),e.createElement(r,{value:"50"}),e.createElement(r,{value:"75"}),e.createElement(r,{max:"500",value:"50"}))};var p,g,i;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(i=(g=a.parameters)==null?void 0:g.docs)==null?void 0:i.source}}};var v,b,P;s.parameters={...s.parameters,docs:{...(v=s.parameters)==null?void 0:v.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: ({}) => <ProgressBar value="50" />
}`,...(P=(b=s.parameters)==null?void 0:b.docs)==null?void 0:P.source}}};var y,B,f;o.parameters={...o.parameters,docs:{...(y=o.parameters)==null?void 0:y.docs,source:{originalSource:`{
  globals: {
    imports: \`import { ProgressBar } from '@ovhcloud/ods-react';\`
  },
  tags: ['!dev'],
  render: ({}) => <ProgressBar />
}`,...(f=(B=o.parameters)==null?void 0:B.docs)==null?void 0:f.source}}};var x,E,h;t.parameters={...t.parameters,docs:{...(x=t.parameters)==null?void 0:x.docs,source:{originalSource:`{
  globals: {
    imports: \`import { ProgressBar } from '@ovhcloud/ods-react';\`
  },
  tags: ['!dev'],
  render: ({}) => <ProgressBar value="indeterminate" />
}`,...(h=(E=t.parameters)==null?void 0:E.docs)==null?void 0:h.source}}};var O,T,C;n.parameters={...n.parameters,docs:{...(O=n.parameters)==null?void 0:O.docs,source:{originalSource:`{
  globals: {
    imports: \`import { ProgressBar } from '@ovhcloud/ods-react';\`
  },
  tags: ['!dev'],
  render: ({}) => <ProgressBar max="500" value="50" />
}`,...(C=(T=n.parameters)==null?void 0:T.docs)==null?void 0:C.source}}};var S,_,A;m.parameters={...m.parameters,docs:{...(S=m.parameters)==null?void 0:S.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: ({}) => <ProgressBar value="50" />
}`,...(A=(_=m.parameters)==null?void 0:_.docs)==null?void 0:A.source}}};var D,R,G;l.parameters={...l.parameters,docs:{...(D=l.parameters)==null?void 0:D.docs,source:{originalSource:`{
  globals: {
    imports: \`import { ProgressBar } from '@ovhcloud/ods-react';\`
  },
  tags: ['!dev'],
  render: ({}) => <ProgressBar value="50" />
}`,...(G=(R=l.parameters)==null?void 0:R.docs)==null?void 0:G.source}}};var L,w,M;c.parameters={...c.parameters,docs:{...(L=c.parameters)==null?void 0:L.docs,source:{originalSource:`{
  globals: {
    imports: \`import { ProgressBar } from '@ovhcloud/ods-react';\`
  },
  tags: ['!dev'],
  render: ({}) => <ProgressBar aria-label="Converting" />
}`,...(M=(w=c.parameters)==null?void 0:w.docs)==null?void 0:M.source}}};var I,N,V;d.parameters={...d.parameters,docs:{...(I=d.parameters)==null?void 0:I.docs,source:{originalSource:`{
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
}`,...(V=(N=d.parameters)==null?void 0:N.docs)==null?void 0:V.source}}};const z=["Demo","AnatomyTech","Default","Indeterminate","Max","Overview","Value","AccessibilityLabel","ThemeGenerator"],H=Object.freeze(Object.defineProperty({__proto__:null,AccessibilityLabel:c,AnatomyTech:s,Default:o,Demo:a,Indeterminate:t,Max:n,Overview:m,ThemeGenerator:d,Value:l,__namedExportsOrder:z,default:j},Symbol.toStringTag,{value:"Module"}));export{c as A,o as D,t as I,n as M,m as O,H as P,l as V,s as a};
