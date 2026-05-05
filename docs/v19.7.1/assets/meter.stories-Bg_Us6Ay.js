import{r as re,e}from"./index-jIWwRBLr.js";import{j as ae}from"./jsx-runtime-Cfl8ynUo.js";import{c as te}from"./index-CqY9YpN0.js";import{T as oe,a as le}from"./Text-CAQM6i-X.js";import{o as ne,C as i}from"./controls-BtiQQn1l.js";function se(a,{high:t,low:o}){return t&&a>t||o&&a<o?"warning":"normal"}function me(a,{high:t,low:o,max:n,min:l,optimum:s}){if(!s||s<l||s>n)return"normal";const m=o??l,w=t??n;return o&&s<o?a>=o?a>w?"critical":"warning":"normal":t&&s>t?a<=t?a<m?"critical":"warning":"normal":a<m||a>w?"warning":"normal"}function ie(a,t){return t.optimum?me(a,t):se(a,t)}const ce="_meter_19y9y_2",E={meter:ce,"meter--critical":"_meter--critical_19y9y_22","meter--normal":"_meter--normal_19y9y_25","meter--warning":"_meter--warning_19y9y_28"},r=re.forwardRef(({className:a,high:t,low:o,max:n=100,min:l=0,optimum:s,value:m=0,...w},Z)=>{const ee=(Math.max(l,Math.min(m,n))-l)/(n-l)*100,T=ie(m,{high:t,low:o,max:n,min:l,optimum:s});return ae.jsx("div",{"aria-valuemax":n,"aria-valuemin":l,"aria-valuenow":m,className:te(E.meter,E[`meter--${T}`],a),"data-ods":"meter","data-state":T,ref:Z,role:"meter",style:{"--ods-meter-fill-width":`${ee}%`},...w})});r.displayName="Meter";r.__docgenInfo={description:"",methods:[],displayName:"Meter",props:{high:{required:!1,tsType:{name:"number"},description:"The lower numeric bound of the high end of the measured range."},low:{required:!1,tsType:{name:"number"},description:"The upper numeric bound of the low end of the measured range."},max:{required:!1,tsType:{name:"number"},description:"The upper numeric bound of the measured range.",defaultValue:{value:"100",computed:!1}},min:{required:!1,tsType:{name:"number"},description:"The lower numeric bound of the measured range.",defaultValue:{value:"0",computed:!1}},optimum:{required:!1,tsType:{name:"number"},description:"The optimal numeric value. Combined with low and high, it will changes the coloring behaviour."},value:{required:!1,tsType:{name:"number"},description:"The current value of the meter",defaultValue:{value:"0",computed:!1}}},composes:["ComponentPropsWithRef"]};const ue={component:r,title:"React Components/Meter"},c={argTypes:ne({high:{table:{category:i.general}},low:{table:{category:i.general}},max:{table:{category:i.general}},min:{table:{category:i.general}},optimum:{table:{category:i.general}},value:{table:{category:i.general}}})},u={globals:{imports:"import { Meter } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>e.createElement(r,{"aria-label":"Gauge",low:40,value:35})},d={globals:{imports:"import { TEXT_PRESET, Meter, Text } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>e.createElement(e.Fragment,null,e.createElement(oe,{id:"meter-label",preset:le.label},"Gauge:"),e.createElement(r,{"aria-labelledby":"meter-label",low:40,value:35}))},p={globals:{imports:"import { Meter } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>e.createElement(r,{"aria-label":"Gauge","aria-valuetext":"35 files uploaded",low:40,value:35})},g={tags:["!dev"],render:({})=>e.createElement("div",{style:{width:"200px"}},e.createElement(r,{low:40,value:35}))},h={globals:{imports:"import { Meter } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>e.createElement(r,null)},v={globals:{imports:"import { Meter } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>e.createElement(e.Fragment,null,e.createElement("p",null,"Low optimum and low value:"),e.createElement(r,{high:80,low:40,optimum:30,value:20}),e.createElement("p",null,"Low optimum and high value:"),e.createElement(r,{high:80,low:40,optimum:30,value:60}),e.createElement("p",null,"Low optimum and very high value:"),e.createElement(r,{high:80,low:40,optimum:30,value:90}))},b={tags:["!dev"],render:({})=>e.createElement(r,{low:40,value:35})},f={globals:{imports:"import { Meter } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>e.createElement(e.Fragment,null,e.createElement("p",null,"Value under low threshold:"),e.createElement(r,{low:40,value:35}),e.createElement("p",null,"Value between both thresholds:"),e.createElement(r,{high:80,low:40,value:60}),e.createElement("p",null,"Value above high threshold:"),e.createElement(r,{high:80,value:90}))},y={parameters:{layout:"fullscreen"},tags:["!dev"],render:({})=>e.createElement("div",{style:{display:"flex",flexDirection:"column",gap:"12px"}},e.createElement(r,null),e.createElement(r,{low:40,value:35}),e.createElement(r,{high:80,low:40,value:60}),e.createElement(r,{high:80,value:90}),e.createElement(r,{optimum:30,value:20}))};var M,_,O;c.parameters={...c.parameters,docs:{...(M=c.parameters)==null?void 0:M.docs,source:{originalSource:`{
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
}`,...(O=(_=c.parameters)==null?void 0:_.docs)==null?void 0:O.source}}};var x,A,R;u.parameters={...u.parameters,docs:{...(x=u.parameters)==null?void 0:x.docs,source:{originalSource:`{
  globals: {
    imports: \`import { Meter } from '@ovhcloud/ods-react';\`
  },
  tags: ['!dev'],
  render: ({}) => <Meter aria-label="Gauge" low={40} value={35} />
}`,...(R=(A=u.parameters)==null?void 0:A.docs)==null?void 0:R.source}}};var S,C,L;d.parameters={...d.parameters,docs:{...(S=d.parameters)==null?void 0:S.docs,source:{originalSource:`{
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
}`,...(L=(C=d.parameters)==null?void 0:C.docs)==null?void 0:L.source}}};var G,V,N;p.parameters={...p.parameters,docs:{...(G=p.parameters)==null?void 0:G.docs,source:{originalSource:`{
  globals: {
    imports: \`import { Meter } from '@ovhcloud/ods-react';\`
  },
  tags: ['!dev'],
  render: ({}) => <Meter aria-label="Gauge" aria-valuetext="35 files uploaded" low={40} value={35} />
}`,...(N=(V=p.parameters)==null?void 0:V.docs)==null?void 0:N.source}}};var D,Y,q;g.parameters={...g.parameters,docs:{...(D=g.parameters)==null?void 0:D.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: ({}) => <div style={{
    width: '200px'
  }}>
      <Meter low={40} value={35} />
    </div>
}`,...(q=(Y=g.parameters)==null?void 0:Y.docs)==null?void 0:q.source}}};var P,j,X;h.parameters={...h.parameters,docs:{...(P=h.parameters)==null?void 0:P.docs,source:{originalSource:`{
  globals: {
    imports: \`import { Meter } from '@ovhcloud/ods-react';\`
  },
  tags: ['!dev'],
  render: ({}) => <Meter />
}`,...(X=(j=h.parameters)==null?void 0:j.docs)==null?void 0:X.source}}};var F,W,$;v.parameters={...v.parameters,docs:{...(F=v.parameters)==null?void 0:F.docs,source:{originalSource:`{
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
}`,...($=(W=v.parameters)==null?void 0:W.docs)==null?void 0:$.source}}};var z,B,H;b.parameters={...b.parameters,docs:{...(z=b.parameters)==null?void 0:z.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: ({}) => <Meter low={40} value={35} />
}`,...(H=(B=b.parameters)==null?void 0:B.docs)==null?void 0:H.source}}};var I,k,J;f.parameters={...f.parameters,docs:{...(I=f.parameters)==null?void 0:I.docs,source:{originalSource:`{
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
}`,...(J=(k=f.parameters)==null?void 0:k.docs)==null?void 0:J.source}}};var K,Q,U;y.parameters={...y.parameters,docs:{...(K=y.parameters)==null?void 0:K.docs,source:{originalSource:`{
  parameters: {
    layout: 'fullscreen'
  },
  tags: ['!dev'],
  render: ({}) => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '12px'
  }}>
      <Meter />
      <Meter low={40} value={35} />
      <Meter high={80} low={40} value={60} />
      <Meter high={80} value={90} />
      <Meter optimum={30} value={20} />
    </div>
}`,...(U=(Q=y.parameters)==null?void 0:Q.docs)==null?void 0:U.source}}};const de=["Demo","AccessibilityAriaLabel","AccessibilityAriaLabelledby","AccessibilityAriaValuetext","AnatomyTech","Default","Optimum","Overview","Thresholds","ThemeGenerator"],fe=Object.freeze(Object.defineProperty({__proto__:null,AccessibilityAriaLabel:u,AccessibilityAriaLabelledby:d,AccessibilityAriaValuetext:p,AnatomyTech:g,Default:h,Demo:c,Optimum:v,Overview:b,ThemeGenerator:y,Thresholds:f,__namedExportsOrder:de,default:ue},Symbol.toStringTag,{value:"Module"}));export{u as A,h as D,fe as M,b as O,f as T,d as a,p as b,g as c,v as d};
