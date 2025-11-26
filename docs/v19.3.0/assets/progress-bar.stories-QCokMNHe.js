import{r as L,e as r}from"./index-jIWwRBLr.js";import{j as V}from"./jsx-runtime-Cfl8ynUo.js";import{c as M}from"./index-CqY9YpN0.js";import{o as Y,C as c}from"./controls-BtiQQn1l.js";const q={"progress-bar":"_progress-bar_171i0_2"},e=L.forwardRef(({className:D,max:N=100,value:A=0,...j},G)=>V.jsx("progress",{className:M(q["progress-bar"],D),"data-ods":"progress-bar",max:N,ref:G,value:A,...j}));e.displayName="ProgressBar";e.__docgenInfo={description:"",methods:[],displayName:"ProgressBar",props:{max:{required:!1,tsType:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]},description:"The maximum value of the progress bar.",defaultValue:{value:"100",computed:!1}},value:{required:!1,tsType:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]},description:"The current value of the progress bar",defaultValue:{value:"0",computed:!1}}},composes:["ComponentPropsWithRef"]};const z={component:e,title:"React Components/Progress Bar"},a={argTypes:Y({max:{table:{category:c.general,type:{summary:"number"}},control:"number"},value:{table:{category:c.general,type:{summary:"number"}},control:"number"}})},s={globals:{imports:"import { ProgressBar } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>r.createElement(e,null)},o={globals:{imports:"import { ProgressBar } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>r.createElement(e,{max:"500",value:"50"})},t={tags:["!dev"],render:({})=>r.createElement(e,{value:"50"})},n={globals:{imports:"import { ProgressBar } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>r.createElement(e,{value:"50"})},m={globals:{imports:"import { ProgressBar } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>r.createElement(e,{"aria-label":"Converting"})},l={parameters:{layout:"fullscreen"},tags:["!dev"],render:({})=>r.createElement("div",{style:{display:"flex",flexDirection:"column",gap:"12px",width:"300px"}},r.createElement(e,null),r.createElement(e,{value:"25"}),r.createElement(e,{value:"50"}),r.createElement(e,{value:"75"}),r.createElement(e,{max:"500",value:"50"}))};var u,p,d;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
}`,...(d=(p=a.parameters)==null?void 0:p.docs)==null?void 0:d.source}}};var i,g,v;s.parameters={...s.parameters,docs:{...(i=s.parameters)==null?void 0:i.docs,source:{originalSource:`{
  globals: {
    imports: \`import { ProgressBar } from '@ovhcloud/ods-react';\`
  },
  tags: ['!dev'],
  render: ({}) => <ProgressBar />
}`,...(v=(g=s.parameters)==null?void 0:g.docs)==null?void 0:v.source}}};var b,f,y;o.parameters={...o.parameters,docs:{...(b=o.parameters)==null?void 0:b.docs,source:{originalSource:`{
  globals: {
    imports: \`import { ProgressBar } from '@ovhcloud/ods-react';\`
  },
  tags: ['!dev'],
  render: ({}) => <ProgressBar max="500" value="50" />
}`,...(y=(f=o.parameters)==null?void 0:f.docs)==null?void 0:y.source}}};var P,x,B;t.parameters={...t.parameters,docs:{...(P=t.parameters)==null?void 0:P.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: ({}) => <ProgressBar value="50" />
}`,...(B=(x=t.parameters)==null?void 0:x.docs)==null?void 0:B.source}}};var h,E,O;n.parameters={...n.parameters,docs:{...(h=n.parameters)==null?void 0:h.docs,source:{originalSource:`{
  globals: {
    imports: \`import { ProgressBar } from '@ovhcloud/ods-react';\`
  },
  tags: ['!dev'],
  render: ({}) => <ProgressBar value="50" />
}`,...(O=(E=n.parameters)==null?void 0:E.docs)==null?void 0:O.source}}};var T,_,C;m.parameters={...m.parameters,docs:{...(T=m.parameters)==null?void 0:T.docs,source:{originalSource:`{
  globals: {
    imports: \`import { ProgressBar } from '@ovhcloud/ods-react';\`
  },
  tags: ['!dev'],
  render: ({}) => <ProgressBar aria-label="Converting" />
}`,...(C=(_=m.parameters)==null?void 0:_.docs)==null?void 0:C.source}}};var R,S,w;l.parameters={...l.parameters,docs:{...(R=l.parameters)==null?void 0:R.docs,source:{originalSource:`{
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
}`,...(w=(S=l.parameters)==null?void 0:S.docs)==null?void 0:w.source}}};const I=["Demo","Default","Max","Overview","Value","AccessibilityLabel","ThemeGenerator"],J=Object.freeze(Object.defineProperty({__proto__:null,AccessibilityLabel:m,Default:s,Demo:a,Max:o,Overview:t,ThemeGenerator:l,Value:n,__namedExportsOrder:I,default:z},Symbol.toStringTag,{value:"Module"}));export{m as A,s as D,o as M,t as O,J as P,n as V};
