import{r as I,e}from"./index-jIWwRBLr.js";import{j as k}from"./jsx-runtime-Cfl8ynUo.js";import{c as J}from"./index-CqY9YpN0.js";import{T as K,a as Q}from"./Text-vMb3-i8V.js";import{o as U,C as i}from"./controls-BtiQQn1l.js";function Z(r,{high:t,low:o}){return t&&r>t||o&&r<o?"warning":"normal"}function ee(r,{high:t,low:o,max:n,min:l,optimum:s}){if(!s||s<l||s>n)return"normal";const m=o??l,f=t??n;return o&&s<o?r>=o?r>f?"critical":"warning":"normal":t&&s>t?r<=t?r<m?"critical":"warning":"normal":r<m||r>f?"warning":"normal"}function re(r,t){return t.optimum?ee(r,t):Z(r,t)}const ae="_meter_1eaov_2",w={meter:ae,"meter--critical":"_meter--critical_1eaov_18","meter--normal":"_meter--normal_1eaov_21","meter--warning":"_meter--warning_1eaov_24"},a=I.forwardRef(({className:r,high:t,low:o,max:n=100,min:l=0,optimum:s,value:m=0,...f},B)=>{const H=(Math.max(l,Math.min(m,n))-l)/(n-l)*100,T=re(m,{high:t,low:o,max:n,min:l,optimum:s});return k.jsx("div",{"aria-valuemax":n,"aria-valuemin":l,"aria-valuenow":m,className:J(w.meter,w[`meter--${T}`],r),"data-ods":"meter","data-state":T,ref:B,role:"meter",style:{"--ods-meter-fill-width":`${H}%`},...f})});a.displayName="Meter";a.__docgenInfo={description:"",methods:[],displayName:"Meter",props:{high:{required:!1,tsType:{name:"number"},description:"The lower numeric bound of the high end of the measured range."},low:{required:!1,tsType:{name:"number"},description:"The upper numeric bound of the low end of the measured range."},max:{required:!1,tsType:{name:"number"},description:"The upper numeric bound of the measured range.",defaultValue:{value:"100",computed:!1}},min:{required:!1,tsType:{name:"number"},description:"The lower numeric bound of the measured range.",defaultValue:{value:"0",computed:!1}},optimum:{required:!1,tsType:{name:"number"},description:"The optimal numeric value. Combined with low and high, it will changes the coloring behaviour."},value:{required:!1,tsType:{name:"number"},description:"The current value of the meter",defaultValue:{value:"0",computed:!1}}},composes:["ComponentPropsWithRef"]};const te={component:a,tags:["new"],title:"React Components/Meter"},c={argTypes:U({high:{table:{category:i.general}},low:{table:{category:i.general}},max:{table:{category:i.general}},min:{table:{category:i.general}},optimum:{table:{category:i.general}},value:{table:{category:i.general}}})},u={globals:{imports:"import { Meter } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>e.createElement(a,{"aria-label":"Gauge",low:40,value:35})},d={globals:{imports:"import { TEXT_PRESET, Meter, Text } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>e.createElement(e.Fragment,null,e.createElement(K,{id:"meter-label",preset:Q.label},"Gauge:"),e.createElement(a,{"aria-labelledby":"meter-label",low:40,value:35}))},p={globals:{imports:"import { Meter } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>e.createElement(a,{"aria-label":"Gauge","aria-valuetext":"35 files uploaded",low:40,value:35})},g={globals:{imports:"import { Meter } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>e.createElement(a,null)},h={globals:{imports:"import { Meter } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>e.createElement(e.Fragment,null,e.createElement("p",null,"Low optimum and low value:"),e.createElement(a,{high:80,low:40,optimum:30,value:20}),e.createElement("p",null,"Low optimum and high value:"),e.createElement(a,{high:80,low:40,optimum:30,value:60}),e.createElement("p",null,"Low optimum and very high value:"),e.createElement(a,{high:80,low:40,optimum:30,value:90}))},v={tags:["!dev"],render:({})=>e.createElement(a,{low:40,value:35})},b={globals:{imports:"import { Meter } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>e.createElement(e.Fragment,null,e.createElement("p",null,"Value under low threshold:"),e.createElement(a,{low:40,value:35}),e.createElement("p",null,"Value between both thresholds:"),e.createElement(a,{high:80,low:40,value:60}),e.createElement("p",null,"Value above high threshold:"),e.createElement(a,{high:80,value:90}))};var E,y,M;c.parameters={...c.parameters,docs:{...(E=c.parameters)==null?void 0:E.docs,source:{originalSource:`{
  argTypes: orderControls({
    high: {
      table: {
        category: CONTROL_CATEGORY.general
      }
    },
    low: {
      table: {
        category: CONTROL_CATEGORY.general
      }
    },
    max: {
      table: {
        category: CONTROL_CATEGORY.general
      }
    },
    min: {
      table: {
        category: CONTROL_CATEGORY.general
      }
    },
    optimum: {
      table: {
        category: CONTROL_CATEGORY.general
      }
    },
    value: {
      table: {
        category: CONTROL_CATEGORY.general
      }
    }
  })
}`,...(M=(y=c.parameters)==null?void 0:y.docs)==null?void 0:M.source}}};var _,O,R;u.parameters={...u.parameters,docs:{...(_=u.parameters)==null?void 0:_.docs,source:{originalSource:`{
  globals: {
    imports: \`import { Meter } from '@ovhcloud/ods-react';\`
  },
  tags: ['!dev'],
  render: ({}) => <Meter aria-label="Gauge" low={40} value={35} />
}`,...(R=(O=u.parameters)==null?void 0:O.docs)==null?void 0:R.source}}};var A,C,S;d.parameters={...d.parameters,docs:{...(A=d.parameters)==null?void 0:A.docs,source:{originalSource:`{
  globals: {
    imports: \`import { TEXT_PRESET, Meter, Text } from '@ovhcloud/ods-react';\`
  },
  tags: ['!dev'],
  render: ({}) => <>
      <Text id="meter-label" preset={TEXT_PRESET.label}>
        Gauge:
      </Text>

      <Meter aria-labelledby="meter-label" low={40} value={35} />
    </>
}`,...(S=(C=d.parameters)==null?void 0:C.docs)==null?void 0:S.source}}};var L,x,G;p.parameters={...p.parameters,docs:{...(L=p.parameters)==null?void 0:L.docs,source:{originalSource:`{
  globals: {
    imports: \`import { Meter } from '@ovhcloud/ods-react';\`
  },
  tags: ['!dev'],
  render: ({}) => <Meter aria-label="Gauge" aria-valuetext="35 files uploaded" low={40} value={35} />
}`,...(G=(x=p.parameters)==null?void 0:x.docs)==null?void 0:G.source}}};var V,N,Y;g.parameters={...g.parameters,docs:{...(V=g.parameters)==null?void 0:V.docs,source:{originalSource:`{
  globals: {
    imports: \`import { Meter } from '@ovhcloud/ods-react';\`
  },
  tags: ['!dev'],
  render: ({}) => <Meter />
}`,...(Y=(N=g.parameters)==null?void 0:N.docs)==null?void 0:Y.source}}};var q,P,j;h.parameters={...h.parameters,docs:{...(q=h.parameters)==null?void 0:q.docs,source:{originalSource:`{
  globals: {
    imports: \`import { Meter } from '@ovhcloud/ods-react';\`
  },
  tags: ['!dev'],
  render: ({}) => <>
      <p>Low optimum and low value:</p>
      <Meter high={80} low={40} optimum={30} value={20} />

      <p>Low optimum and high value:</p>
      <Meter high={80} low={40} optimum={30} value={60} />

      <p>Low optimum and very high value:</p>
      <Meter high={80} low={40} optimum={30} value={90} />
    </>
}`,...(j=(P=h.parameters)==null?void 0:P.docs)==null?void 0:j.source}}};var D,X,F;v.parameters={...v.parameters,docs:{...(D=v.parameters)==null?void 0:D.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: ({}) => <Meter low={40} value={35} />
}`,...(F=(X=v.parameters)==null?void 0:X.docs)==null?void 0:F.source}}};var W,$,z;b.parameters={...b.parameters,docs:{...(W=b.parameters)==null?void 0:W.docs,source:{originalSource:`{
  globals: {
    imports: \`import { Meter } from '@ovhcloud/ods-react';\`
  },
  tags: ['!dev'],
  render: ({}) => <>
      <p>Value under low threshold:</p>
      <Meter low={40} value={35} />

      <p>Value between both thresholds:</p>
      <Meter high={80} low={40} value={60} />

      <p>Value above high threshold:</p>
      <Meter high={80} value={90} />
    </>
}`,...(z=($=b.parameters)==null?void 0:$.docs)==null?void 0:z.source}}};const oe=["Demo","AccessibilityAriaLabel","AccessibilityAriaLabelledby","AccessibilityAriaValuetext","Default","Optimum","Overview","Thresholds"],ce=Object.freeze(Object.defineProperty({__proto__:null,AccessibilityAriaLabel:u,AccessibilityAriaLabelledby:d,AccessibilityAriaValuetext:p,Default:g,Demo:c,Optimum:h,Overview:v,Thresholds:b,__namedExportsOrder:oe,default:te},Symbol.toStringTag,{value:"Module"}));export{u as A,g as D,ce as M,v as O,b as T,d as a,p as b,h as c};
