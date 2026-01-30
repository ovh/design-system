import{r as p,e}from"./index-jIWwRBLr.js";import{j as U}from"./jsx-runtime-Cfl8ynUo.js";import{c as B}from"./index-CqY9YpN0.js";import{T as te,a as ae}from"./toggle-group-root-rlqyi9ju.js";import{T as me,a as re}from"./Text-CW33_IfE.js";import{e as ie,o as le,C as E}from"./controls-BtiQQn1l.js";var r=(m=>(m.md="md",m.sm="sm",m))(r||{});const ce=Object.freeze(Object.values(r)),f={switch:"_switch_eoewz_2","switch--sm":"_switch--sm_eoewz_14","switch--md":"_switch--md_eoewz_17"},a=p.forwardRef(({className:m,defaultValue:S,disabled:v,onValueChange:I,size:w=r.md,value:g,...J},K)=>{p.useEffect(()=>{console.warn("[DEPRECATED]: Switch component is not recommended anymore and will be removed in a next major release. Check the documentation for correct alternative.")},[]);function Q(ee){I&&I({value:ee.value[0]})}return U.jsx(te,{className:B(f.switch,f[`switch--${w}`],m),"data-ods":"switch",...J,defaultValue:S?[S]:void 0,deselectable:!1,disabled:v,loopFocus:!1,multiple:!1,onValueChange:Q,orientation:"horizontal",ref:K,value:g?[g]:void 0})});a.displayName="Switch";a.__docgenInfo={description:"",methods:[],displayName:"Switch",props:{defaultValue:{required:!1,tsType:{name:"string"},description:"The initial value of the selected item. Use when you don't need to control the value of the switch."},disabled:{required:!1,tsType:{name:"boolean"},description:"Whether the component is disabled."},onValueChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(detail: SwitchValueChangeDetail) => void",signature:{arguments:[{type:{name:"SwitchValueChangeDetail"},name:"detail"}],return:{name:"void"}}},description:"Callback fired when the value changes."},size:{required:!1,tsType:{name:"literal",value:"`${SWITCH_SIZE}`"},description:"The size preset to use.",defaultValue:{value:"SWITCH_SIZE.md",computed:!0}},value:{required:!1,tsType:{name:"string"},description:"The controlled value of the selected item."}},composes:["ComponentPropsWithRef"]};const se={"switch-item":"_switch-item_6m31z_2"},t=p.forwardRef(({children:m,className:S,defaultValue:v,...I},w)=>U.jsx(ae,{className:B(se["switch-item"],S),"data-ods":"switch-item",ref:w,...I,children:m}));t.displayName="SwitchItem";t.__docgenInfo={description:"",methods:[],displayName:"SwitchItem",props:{value:{required:!0,tsType:{name:"string"},description:"The value of the switch item."}},composes:["ComponentPropsWithRef"]};const oe={argTypes:ie(["defaultValue","onValueChange","value"]),component:a,subcomponents:{SwitchItem:t},tags:["deprecated"],title:"React Components/Switch"},i={render:m=>e.createElement(a,{...m},e.createElement(t,{value:"item-1"},"Item 1"),e.createElement(t,{value:"item-2"},"Item 2"),e.createElement(t,{value:"item-3"},"Item 3")),argTypes:le({disabled:{table:{category:E.general},control:"boolean"},size:{table:{category:E.design,type:{summary:"SWITCH_SIZE"}},control:{type:"select"},options:ce}})},l={globals:{imports:"import { Switch, SwitchItem } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>e.createElement(a,{"aria-label":"Select an item"},e.createElement(t,{value:"item-1"},"Item 1"),e.createElement(t,{value:"item-2"},"Item 2"),e.createElement(t,{value:"item-3"},"Item 3"))},c={decorators:[m=>e.createElement("div",{style:{display:"flex",flexFlow:"column",alignItems:"start"}},m())],globals:{imports:"import { TEXT_PRESET, Switch, SwitchItem, Text } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>e.createElement(e.Fragment,null,e.createElement(me,{id:"switch-label",preset:re.label},"Select an item:"),e.createElement(a,{"aria-labelledby":"switch-label"},e.createElement(t,{value:"item-1"},"Item 1"),e.createElement(t,{value:"item-2"},"Item 2"),e.createElement(t,{value:"item-3"},"Item 3")))},s={globals:{imports:"import { Switch, SwitchItem } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>e.createElement(a,{defaultValue:"item-1"},e.createElement(t,{value:"item-1"},"Item 1"),e.createElement(t,{value:"item-2"},"Item 2"),e.createElement(t,{value:"item-3"},"Item 3"))},o={globals:{imports:"import { Switch, SwitchItem } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>e.createElement(a,null,e.createElement(t,{value:"item-1"},"Item 1"),e.createElement(t,{value:"item-2"},"Item 2"),e.createElement(t,{value:"item-3"},"Item 3"))},n={globals:{imports:"import { Switch, SwitchItem } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>e.createElement(a,{disabled:!0},e.createElement(t,{value:"item-1"},"Item 1"),e.createElement(t,{value:"item-2"},"Item 2"),e.createElement(t,{value:"item-3"},"Item 3"))},d={tags:["!dev"],parameters:{layout:"centered"},render:({})=>e.createElement(a,{defaultValue:"item-1"},e.createElement(t,{value:"item-1"},"Item 1"),e.createElement(t,{value:"item-2"},"Item 2"),e.createElement(t,{value:"item-3"},"Item 3"))},u={decorators:[m=>e.createElement("div",{style:{display:"flex",flexFlow:"row",gap:"8px",alignItems:"center"}},m())],globals:{imports:"import { SWITCH_SIZE, Switch, SwitchItem } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>e.createElement(e.Fragment,null,e.createElement(a,{size:r.sm},e.createElement(t,{value:"item-1"},"Item 1"),e.createElement(t,{value:"item-2"},"Item 2"),e.createElement(t,{value:"item-3"},"Item 3")),e.createElement(a,{size:r.md},e.createElement(t,{value:"item-1"},"Item 1"),e.createElement(t,{value:"item-2"},"Item 2"),e.createElement(t,{value:"item-3"},"Item 3")))},h={parameters:{layout:"fullscreen"},tags:["!dev"],render:({})=>e.createElement("div",{style:{display:"flex",flexFlow:"column",rowGap:"16px"}},e.createElement(a,{style:{alignSelf:"start"}},e.createElement(t,{value:"item-1"},"Item 1"),e.createElement(t,{value:"item-2"},"Item 2"),e.createElement(t,{value:"item-3"},"Item 3")),e.createElement(a,{disabled:!0,style:{alignSelf:"start"}},e.createElement(t,{value:"item-1"},"Item 1"),e.createElement(t,{value:"item-2"},"Item 2"),e.createElement(t,{value:"item-3"},"Item 3")),e.createElement(a,{size:r.sm,style:{alignSelf:"start"}},e.createElement(t,{value:"item-1"},"Small 1"),e.createElement(t,{value:"item-2"},"Small 2")))};var y,b,T;i.parameters={...i.parameters,docs:{...(y=i.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
}`,...(T=(b=i.parameters)==null?void 0:b.docs)==null?void 0:T.source}}};var _,C,x;l.parameters={...l.parameters,docs:{...(_=l.parameters)==null?void 0:_.docs,source:{originalSource:`{
  globals: {
    imports: \`import { Switch, SwitchItem } from '@ovhcloud/ods-react';\`
  },
  tags: ['!dev'],
  render: ({}) => <Switch aria-label="Select an item">
      <SwitchItem value="item-1">Item 1</SwitchItem>
      <SwitchItem value="item-2">Item 2</SwitchItem>
      <SwitchItem value="item-3">Item 3</SwitchItem>
    </Switch>
}`,...(x=(C=l.parameters)==null?void 0:C.docs)==null?void 0:x.source}}};var z,R,O;c.parameters={...c.parameters,docs:{...(z=c.parameters)==null?void 0:z.docs,source:{originalSource:`{
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
}`,...(O=(R=c.parameters)==null?void 0:R.docs)==null?void 0:O.source}}};var A,V,W;s.parameters={...s.parameters,docs:{...(A=s.parameters)==null?void 0:A.docs,source:{originalSource:`{
  globals: {
    imports: \`import { Switch, SwitchItem } from '@ovhcloud/ods-react';\`
  },
  tags: ['!dev'],
  render: ({}) => <Switch defaultValue="item-1">
      <SwitchItem value="item-1">Item 1</SwitchItem>
      <SwitchItem value="item-2">Item 2</SwitchItem>
      <SwitchItem value="item-3">Item 3</SwitchItem>
    </Switch>
}`,...(W=(V=s.parameters)==null?void 0:V.docs)==null?void 0:W.source}}};var D,F,H;o.parameters={...o.parameters,docs:{...(D=o.parameters)==null?void 0:D.docs,source:{originalSource:`{
  globals: {
    imports: \`import { Switch, SwitchItem } from '@ovhcloud/ods-react';\`
  },
  tags: ['!dev'],
  render: ({}) => <Switch>
      <SwitchItem value="item-1">Item 1</SwitchItem>
      <SwitchItem value="item-2">Item 2</SwitchItem>
      <SwitchItem value="item-3">Item 3</SwitchItem>
    </Switch>
}`,...(H=(F=o.parameters)==null?void 0:F.docs)==null?void 0:H.source}}};var N,Z,j;n.parameters={...n.parameters,docs:{...(N=n.parameters)==null?void 0:N.docs,source:{originalSource:`{
  globals: {
    imports: \`import { Switch, SwitchItem } from '@ovhcloud/ods-react';\`
  },
  tags: ['!dev'],
  render: ({}) => <Switch disabled>
      <SwitchItem value="item-1">Item 1</SwitchItem>
      <SwitchItem value="item-2">Item 2</SwitchItem>
      <SwitchItem value="item-3">Item 3</SwitchItem>
    </Switch>
}`,...(j=(Z=n.parameters)==null?void 0:Z.docs)==null?void 0:j.source}}};var G,P,L;d.parameters={...d.parameters,docs:{...(G=d.parameters)==null?void 0:G.docs,source:{originalSource:`{
  tags: ['!dev'],
  parameters: {
    layout: 'centered'
  },
  render: ({}) => <Switch defaultValue="item-1">
      <SwitchItem value="item-1">Item 1</SwitchItem>
      <SwitchItem value="item-2">Item 2</SwitchItem>
      <SwitchItem value="item-3">Item 3</SwitchItem>
    </Switch>
}`,...(L=(P=d.parameters)==null?void 0:P.docs)==null?void 0:L.source}}};var q,k,X;u.parameters={...u.parameters,docs:{...(q=u.parameters)==null?void 0:q.docs,source:{originalSource:`{
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
}`,...(X=(k=u.parameters)==null?void 0:k.docs)==null?void 0:X.source}}};var Y,$,M;h.parameters={...h.parameters,docs:{...(Y=h.parameters)==null?void 0:Y.docs,source:{originalSource:`{
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
}`,...(M=($=h.parameters)==null?void 0:$.docs)==null?void 0:M.source}}};const ne=["Demo","AccessibilityAriaLabel","AccessibilityAriaLabelledby","Checked","Default","Disabled","Overview","Sizes","ThemeGenerator"],pe=Object.freeze(Object.defineProperty({__proto__:null,AccessibilityAriaLabel:l,AccessibilityAriaLabelledby:c,Checked:s,Default:o,Demo:i,Disabled:n,Overview:d,Sizes:u,ThemeGenerator:h,__namedExportsOrder:ne,default:oe},Symbol.toStringTag,{value:"Module"}));export{l as A,s as C,o as D,d as O,pe as S,c as a,n as b,u as c};
