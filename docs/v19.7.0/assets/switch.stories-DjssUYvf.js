import{r as v,e}from"./index-jIWwRBLr.js";import{j as ee}from"./jsx-runtime-Cfl8ynUo.js";import{c as te}from"./index-CqY9YpN0.js";import{T as le,a as ce}from"./toggle-group-root-DaBii8xV.js";import{T as se,a as oe}from"./Text-CAQM6i-X.js";import{e as ne,o as de,C as y}from"./controls-BtiQQn1l.js";var r=(m=>(m.md="md",m.sm="sm",m))(r||{});const ue=Object.freeze(Object.values(r)),b={switch:"_switch_eoewz_2","switch--sm":"_switch--sm_eoewz_14","switch--md":"_switch--md_eoewz_17"},g=v.forwardRef(({className:m,defaultValue:I,disabled:E,onValueChange:w,size:p=r.md,value:f,...ae},me)=>{v.useEffect(()=>{console.warn("[DEPRECATED]: Switch component is not recommended anymore and will be removed in a next major release. Check the documentation for correct alternative.")},[]);function re(ie){w&&w({value:ie.value[0]})}return ee.jsx(le,{className:te(b.switch,b[`switch--${p}`],m),"data-ods":"switch",...ae,defaultValue:I?[I]:void 0,deselectable:!1,disabled:E,loopFocus:!1,multiple:!1,onValueChange:re,orientation:"horizontal",ref:me,value:f?[f]:void 0})});g.displayName="Switch";g.__docgenInfo={description:"",methods:[],displayName:"Switch",props:{defaultValue:{required:!1,tsType:{name:"string"},description:"The initial value of the selected item. Use when you don't need to control the value of the switch."},disabled:{required:!1,tsType:{name:"boolean"},description:"Whether the component is disabled."},onValueChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(detail: SwitchValueChangeDetail) => void",signature:{arguments:[{type:{name:"SwitchValueChangeDetail"},name:"detail"}],return:{name:"void"}}},description:"Callback fired when the value changes."},size:{required:!1,tsType:{name:"literal",value:"`${SWITCH_SIZE}`"},description:"The size preset to use.",defaultValue:{value:"SWITCH_SIZE.md",computed:!0}},value:{required:!1,tsType:{name:"string"},description:"The controlled value of the selected item."}},composes:["ComponentPropsWithRef"]};const he={"switch-item":"_switch-item_6m31z_2"},t=v.forwardRef(({children:m,className:I,defaultValue:E,...w},p)=>ee.jsx(ce,{className:te(he["switch-item"],I),"data-ods":"switch-item",ref:p,...w,children:m}));t.displayName="SwitchItem";t.__docgenInfo={description:"",methods:[],displayName:"SwitchItem",props:{value:{required:!0,tsType:{name:"string"},description:"The value of the switch item."}},composes:["ComponentPropsWithRef"]};const a=Object.assign(g,{Item:t}),Se={argTypes:ne(["defaultValue","onValueChange","value"]),component:a,subcomponents:{SwitchItem:t},tags:["deprecated"],title:"React Components/Switch"},i={render:m=>e.createElement(a,{...m},e.createElement(t,{value:"item-1"},"Item 1"),e.createElement(t,{value:"item-2"},"Item 2"),e.createElement(t,{value:"item-3"},"Item 3")),argTypes:de({disabled:{table:{category:y.general},control:"boolean"},size:{table:{category:y.design,type:{summary:"SWITCH_SIZE"}},control:{type:"select"},options:ue}})},l={globals:{imports:"import { Switch, SwitchItem } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>e.createElement(a,{"aria-label":"Select an item"},e.createElement(t,{value:"item-1"},"Item 1"),e.createElement(t,{value:"item-2"},"Item 2"),e.createElement(t,{value:"item-3"},"Item 3"))},c={decorators:[m=>e.createElement("div",{style:{display:"flex",flexFlow:"column",alignItems:"start"}},m())],globals:{imports:"import { TEXT_PRESET, Switch, SwitchItem, Text } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>e.createElement(e.Fragment,null,e.createElement(se,{id:"switch-label",preset:oe.label},"Select an item:"),e.createElement(a,{"aria-labelledby":"switch-label"},e.createElement(t,{value:"item-1"},"Item 1"),e.createElement(t,{value:"item-2"},"Item 2"),e.createElement(t,{value:"item-3"},"Item 3")))},s={tags:["!dev"],render:({})=>e.createElement(a,{defaultValue:"item-1"},e.createElement(t,{value:"item-1"},"Item 1"),e.createElement(t,{value:"item-2"},"Item 2"),e.createElement(t,{value:"item-3"},"Item 3"))},o={globals:{imports:"import { Switch, SwitchItem } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>e.createElement(a,{defaultValue:"item-1"},e.createElement(t,{value:"item-1"},"Item 1"),e.createElement(t,{value:"item-2"},"Item 2"),e.createElement(t,{value:"item-3"},"Item 3"))},n={globals:{imports:"import { Switch, SwitchItem } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>e.createElement(a,null,e.createElement(t,{value:"item-1"},"Item 1"),e.createElement(t,{value:"item-2"},"Item 2"),e.createElement(t,{value:"item-3"},"Item 3"))},d={globals:{imports:"import { Switch, SwitchItem } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>e.createElement(a,{disabled:!0},e.createElement(t,{value:"item-1"},"Item 1"),e.createElement(t,{value:"item-2"},"Item 2"),e.createElement(t,{value:"item-3"},"Item 3"))},u={tags:["!dev"],parameters:{layout:"centered"},render:({})=>e.createElement(a,{defaultValue:"item-1"},e.createElement(t,{value:"item-1"},"Item 1"),e.createElement(t,{value:"item-2"},"Item 2"),e.createElement(t,{value:"item-3"},"Item 3"))},h={decorators:[m=>e.createElement("div",{style:{display:"flex",flexFlow:"row",gap:"8px",alignItems:"center"}},m())],globals:{imports:"import { SWITCH_SIZE, Switch, SwitchItem } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>e.createElement(e.Fragment,null,e.createElement(a,{size:r.sm},e.createElement(t,{value:"item-1"},"Item 1"),e.createElement(t,{value:"item-2"},"Item 2"),e.createElement(t,{value:"item-3"},"Item 3")),e.createElement(a,{size:r.md},e.createElement(t,{value:"item-1"},"Item 1"),e.createElement(t,{value:"item-2"},"Item 2"),e.createElement(t,{value:"item-3"},"Item 3")))},S={parameters:{layout:"fullscreen"},tags:["!dev"],render:({})=>e.createElement("div",{style:{display:"flex",flexFlow:"column",rowGap:"16px"}},e.createElement(a,{style:{alignSelf:"start"}},e.createElement(t,{value:"item-1"},"Item 1"),e.createElement(t,{value:"item-2"},"Item 2"),e.createElement(t,{value:"item-3"},"Item 3")),e.createElement(a,{disabled:!0,style:{alignSelf:"start"}},e.createElement(t,{value:"item-1"},"Item 1"),e.createElement(t,{value:"item-2"},"Item 2"),e.createElement(t,{value:"item-3"},"Item 3")),e.createElement(a,{size:r.sm,style:{alignSelf:"start"}},e.createElement(t,{value:"item-1"},"Small 1"),e.createElement(t,{value:"item-2"},"Small 2")))};var T,_,C;i.parameters={...i.parameters,docs:{...(T=i.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: arg => <Switch {...arg}>
      <SwitchItem value="item-1">Item 1</SwitchItem>
      <SwitchItem value="item-2">Item 2</SwitchItem>
      <SwitchItem value="item-3">Item 3</SwitchItem>
    </Switch>,
  argTypes: orderControls({
    disabled: {
      table: {
        category: CONTROL_CATEGORY.general
      },
      control: 'boolean'
    },
    size: {
      table: {
        category: CONTROL_CATEGORY.design,
        type: {
          summary: 'SWITCH_SIZE'
        }
      },
      control: {
        type: 'select'
      },
      options: SWITCH_SIZES
    }
  })
}`,...(C=(_=i.parameters)==null?void 0:_.docs)==null?void 0:C.source}}};var x,z,O;l.parameters={...l.parameters,docs:{...(x=l.parameters)==null?void 0:x.docs,source:{originalSource:`{
  globals: {
    imports: \`import { Switch, SwitchItem } from '@ovhcloud/ods-react';\`
  },
  tags: ['!dev'],
  render: ({}) => <Switch aria-label="Select an item">
      <SwitchItem value="item-1">Item 1</SwitchItem>
      <SwitchItem value="item-2">Item 2</SwitchItem>
      <SwitchItem value="item-3">Item 3</SwitchItem>
    </Switch>
}`,...(O=(z=l.parameters)==null?void 0:z.docs)==null?void 0:O.source}}};var R,A,V;c.parameters={...c.parameters,docs:{...(R=c.parameters)==null?void 0:R.docs,source:{originalSource:`{
  decorators: [story => <div style={{
    display: 'flex',
    flexFlow: 'column',
    alignItems: 'start'
  }}>{story()}</div>],
  globals: {
    imports: \`import { TEXT_PRESET, Switch, SwitchItem, Text } from '@ovhcloud/ods-react';\`
  },
  tags: ['!dev'],
  render: ({}) => <>
      <Text id="switch-label" preset={TEXT_PRESET.label}>
        Select an item:
      </Text>

      <Switch aria-labelledby="switch-label">
        <SwitchItem value="item-1">Item 1</SwitchItem>
        <SwitchItem value="item-2">Item 2</SwitchItem>
        <SwitchItem value="item-3">Item 3</SwitchItem>
      </Switch>
    </>
}`,...(V=(A=c.parameters)==null?void 0:A.docs)==null?void 0:V.source}}};var W,D,j;s.parameters={...s.parameters,docs:{...(W=s.parameters)==null?void 0:W.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: ({}) => <Switch defaultValue="item-1">
      <SwitchItem value="item-1">Item 1</SwitchItem>
      <SwitchItem value="item-2">Item 2</SwitchItem>
      <SwitchItem value="item-3">Item 3</SwitchItem>
    </Switch>
}`,...(j=(D=s.parameters)==null?void 0:D.docs)==null?void 0:j.source}}};var F,H,N;o.parameters={...o.parameters,docs:{...(F=o.parameters)==null?void 0:F.docs,source:{originalSource:`{
  globals: {
    imports: \`import { Switch, SwitchItem } from '@ovhcloud/ods-react';\`
  },
  tags: ['!dev'],
  render: ({}) => <Switch defaultValue="item-1">
      <SwitchItem value="item-1">Item 1</SwitchItem>
      <SwitchItem value="item-2">Item 2</SwitchItem>
      <SwitchItem value="item-3">Item 3</SwitchItem>
    </Switch>
}`,...(N=(H=o.parameters)==null?void 0:H.docs)==null?void 0:N.source}}};var Z,G,P;n.parameters={...n.parameters,docs:{...(Z=n.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  globals: {
    imports: \`import { Switch, SwitchItem } from '@ovhcloud/ods-react';\`
  },
  tags: ['!dev'],
  render: ({}) => <Switch>
      <SwitchItem value="item-1">Item 1</SwitchItem>
      <SwitchItem value="item-2">Item 2</SwitchItem>
      <SwitchItem value="item-3">Item 3</SwitchItem>
    </Switch>
}`,...(P=(G=n.parameters)==null?void 0:G.docs)==null?void 0:P.source}}};var L,q,k;d.parameters={...d.parameters,docs:{...(L=d.parameters)==null?void 0:L.docs,source:{originalSource:`{
  globals: {
    imports: \`import { Switch, SwitchItem } from '@ovhcloud/ods-react';\`
  },
  tags: ['!dev'],
  render: ({}) => <Switch disabled>
      <SwitchItem value="item-1">Item 1</SwitchItem>
      <SwitchItem value="item-2">Item 2</SwitchItem>
      <SwitchItem value="item-3">Item 3</SwitchItem>
    </Switch>
}`,...(k=(q=d.parameters)==null?void 0:q.docs)==null?void 0:k.source}}};var X,$,Y;u.parameters={...u.parameters,docs:{...(X=u.parameters)==null?void 0:X.docs,source:{originalSource:`{
  tags: ['!dev'],
  parameters: {
    layout: 'centered'
  },
  render: ({}) => <Switch defaultValue="item-1">
      <SwitchItem value="item-1">Item 1</SwitchItem>
      <SwitchItem value="item-2">Item 2</SwitchItem>
      <SwitchItem value="item-3">Item 3</SwitchItem>
    </Switch>
}`,...(Y=($=u.parameters)==null?void 0:$.docs)==null?void 0:Y.source}}};var M,U,B;h.parameters={...h.parameters,docs:{...(M=h.parameters)==null?void 0:M.docs,source:{originalSource:`{
  decorators: [story => <div style={{
    display: 'flex',
    flexFlow: 'row',
    gap: '8px',
    alignItems: 'center'
  }}>{story()}</div>],
  globals: {
    imports: \`import { SWITCH_SIZE, Switch, SwitchItem } from '@ovhcloud/ods-react';\`
  },
  tags: ['!dev'],
  render: ({}) => <>
      <Switch size={SWITCH_SIZE.sm}>
        <SwitchItem value="item-1">Item 1</SwitchItem>
        <SwitchItem value="item-2">Item 2</SwitchItem>
        <SwitchItem value="item-3">Item 3</SwitchItem>
      </Switch>

      <Switch size={SWITCH_SIZE.md}>
        <SwitchItem value="item-1">Item 1</SwitchItem>
        <SwitchItem value="item-2">Item 2</SwitchItem>
        <SwitchItem value="item-3">Item 3</SwitchItem>
      </Switch>
    </>
}`,...(B=(U=h.parameters)==null?void 0:U.docs)==null?void 0:B.source}}};var J,K,Q;S.parameters={...S.parameters,docs:{...(J=S.parameters)==null?void 0:J.docs,source:{originalSource:`{
  parameters: {
    layout: 'fullscreen'
  },
  tags: ['!dev'],
  render: ({}) => <div style={{
    display: 'flex',
    flexFlow: 'column',
    rowGap: '16px'
  }}>
      <Switch style={{
      alignSelf: 'start'
    }}>
        <SwitchItem value="item-1">Item 1</SwitchItem>
        <SwitchItem value="item-2">Item 2</SwitchItem>
        <SwitchItem value="item-3">Item 3</SwitchItem>
      </Switch>

      <Switch disabled style={{
      alignSelf: 'start'
    }}>
        <SwitchItem value="item-1">Item 1</SwitchItem>
        <SwitchItem value="item-2">Item 2</SwitchItem>
        <SwitchItem value="item-3">Item 3</SwitchItem>
      </Switch>

      <Switch size={SWITCH_SIZE.sm} style={{
      alignSelf: 'start'
    }}>
        <SwitchItem value="item-1">Small 1</SwitchItem>
        <SwitchItem value="item-2">Small 2</SwitchItem>
      </Switch>
    </div>
}`,...(Q=(K=S.parameters)==null?void 0:K.docs)==null?void 0:Q.source}}};const Ie=["Demo","AccessibilityAriaLabel","AccessibilityAriaLabelledby","AnatomyTech","Checked","Default","Disabled","Overview","Sizes","ThemeGenerator"],ye=Object.freeze(Object.defineProperty({__proto__:null,AccessibilityAriaLabel:l,AccessibilityAriaLabelledby:c,AnatomyTech:s,Checked:o,Default:n,Demo:i,Disabled:d,Overview:u,Sizes:h,ThemeGenerator:S,__namedExportsOrder:Ie,default:Se},Symbol.toStringTag,{value:"Module"}));export{l as A,o as C,n as D,u as O,ye as S,c as a,s as b,d as c,h as d};
