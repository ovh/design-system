import{r as p,e}from"./index-jIWwRBLr.js";import{j as B}from"./jsx-runtime-Cfl8ynUo.js";import{c as J}from"./index-CqY9YpN0.js";import{T as ae,a as me}from"./toggle-group-root-DZF0K8bs.js";import{T as ie,a as re}from"./Text-CRk0VKg4.js";import{e as le,o as ce,C as f}from"./controls-BtiQQn1l.js";var i=(a=>(a.md="md",a.sm="sm",a))(i||{});const se=Object.freeze(Object.values(i)),y={switch:"_switch_eoewz_2","switch--sm":"_switch--sm_eoewz_14","switch--md":"_switch--md_eoewz_17"},v=p.forwardRef(({className:a,defaultValue:S,disabled:g,onValueChange:I,size:w=i.md,value:E,...K},Q)=>{p.useEffect(()=>{console.warn("[DEPRECATED]: Switch component is not recommended anymore and will be removed in a next major release. Check the documentation for correct alternative.")},[]);function ee(te){I&&I({value:te.value[0]})}return B.jsx(ae,{className:J(y.switch,y[`switch--${w}`],a),"data-ods":"switch",...K,defaultValue:S?[S]:void 0,deselectable:!1,disabled:g,loopFocus:!1,multiple:!1,onValueChange:ee,orientation:"horizontal",ref:Q,value:E?[E]:void 0})});v.displayName="Switch";v.__docgenInfo={description:"",methods:[],displayName:"Switch",props:{defaultValue:{required:!1,tsType:{name:"string"},description:"The initial value of the selected item. Use when you don't need to control the value of the switch."},disabled:{required:!1,tsType:{name:"boolean"},description:"Whether the component is disabled."},onValueChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(detail: SwitchValueChangeDetail) => void",signature:{arguments:[{type:{name:"SwitchValueChangeDetail"},name:"detail"}],return:{name:"void"}}},description:"Callback fired when the value changes."},size:{required:!1,tsType:{name:"literal",value:"`${SWITCH_SIZE}`"},description:"The size preset to use.",defaultValue:{value:"SWITCH_SIZE.md",computed:!0}},value:{required:!1,tsType:{name:"string"},description:"The controlled value of the selected item."}},composes:["ComponentPropsWithRef"]};const oe={"switch-item":"_switch-item_6m31z_2"},t=p.forwardRef(({children:a,className:S,defaultValue:g,...I},w)=>B.jsx(me,{className:J(oe["switch-item"],S),"data-ods":"switch-item",ref:w,...I,children:a}));t.displayName="SwitchItem";t.__docgenInfo={description:"",methods:[],displayName:"SwitchItem",props:{value:{required:!0,tsType:{name:"string"},description:"The value of the switch item."}},composes:["ComponentPropsWithRef"]};const m=Object.assign(v,{Item:t}),ne={argTypes:le(["defaultValue","onValueChange","value"]),component:m,subcomponents:{SwitchItem:t},tags:["deprecated"],title:"React Components/Switch"},r={render:a=>e.createElement(m,{...a},e.createElement(t,{value:"item-1"},"Item 1"),e.createElement(t,{value:"item-2"},"Item 2"),e.createElement(t,{value:"item-3"},"Item 3")),argTypes:ce({disabled:{table:{category:f.general},control:"boolean"},size:{table:{category:f.design,type:{summary:"SWITCH_SIZE"}},control:{type:"select"},options:se}})},l={globals:{imports:"import { Switch, SwitchItem } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>e.createElement(m,{"aria-label":"Select an item"},e.createElement(t,{value:"item-1"},"Item 1"),e.createElement(t,{value:"item-2"},"Item 2"),e.createElement(t,{value:"item-3"},"Item 3"))},c={decorators:[a=>e.createElement("div",{style:{display:"flex",flexFlow:"column",alignItems:"start"}},a())],globals:{imports:"import { TEXT_PRESET, Switch, SwitchItem, Text } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>e.createElement(e.Fragment,null,e.createElement(ie,{id:"switch-label",preset:re.label},"Select an item:"),e.createElement(m,{"aria-labelledby":"switch-label"},e.createElement(t,{value:"item-1"},"Item 1"),e.createElement(t,{value:"item-2"},"Item 2"),e.createElement(t,{value:"item-3"},"Item 3")))},s={globals:{imports:"import { Switch, SwitchItem } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>e.createElement(m,{defaultValue:"item-1"},e.createElement(t,{value:"item-1"},"Item 1"),e.createElement(t,{value:"item-2"},"Item 2"),e.createElement(t,{value:"item-3"},"Item 3"))},o={globals:{imports:"import { Switch, SwitchItem } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>e.createElement(m,null,e.createElement(t,{value:"item-1"},"Item 1"),e.createElement(t,{value:"item-2"},"Item 2"),e.createElement(t,{value:"item-3"},"Item 3"))},n={globals:{imports:"import { Switch, SwitchItem } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>e.createElement(m,{disabled:!0},e.createElement(t,{value:"item-1"},"Item 1"),e.createElement(t,{value:"item-2"},"Item 2"),e.createElement(t,{value:"item-3"},"Item 3"))},d={tags:["!dev"],parameters:{layout:"centered"},render:({})=>e.createElement(m,{defaultValue:"item-1"},e.createElement(t,{value:"item-1"},"Item 1"),e.createElement(t,{value:"item-2"},"Item 2"),e.createElement(t,{value:"item-3"},"Item 3"))},u={decorators:[a=>e.createElement("div",{style:{display:"flex",flexFlow:"row",gap:"8px",alignItems:"center"}},a())],globals:{imports:"import { SWITCH_SIZE, Switch, SwitchItem } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>e.createElement(e.Fragment,null,e.createElement(m,{size:i.sm},e.createElement(t,{value:"item-1"},"Item 1"),e.createElement(t,{value:"item-2"},"Item 2"),e.createElement(t,{value:"item-3"},"Item 3")),e.createElement(m,{size:i.md},e.createElement(t,{value:"item-1"},"Item 1"),e.createElement(t,{value:"item-2"},"Item 2"),e.createElement(t,{value:"item-3"},"Item 3")))},h={parameters:{layout:"fullscreen"},tags:["!dev"],render:({})=>e.createElement("div",{style:{display:"flex",flexFlow:"column",rowGap:"16px"}},e.createElement(m,{style:{alignSelf:"start"}},e.createElement(t,{value:"item-1"},"Item 1"),e.createElement(t,{value:"item-2"},"Item 2"),e.createElement(t,{value:"item-3"},"Item 3")),e.createElement(m,{disabled:!0,style:{alignSelf:"start"}},e.createElement(t,{value:"item-1"},"Item 1"),e.createElement(t,{value:"item-2"},"Item 2"),e.createElement(t,{value:"item-3"},"Item 3")),e.createElement(m,{size:i.sm,style:{alignSelf:"start"}},e.createElement(t,{value:"item-1"},"Small 1"),e.createElement(t,{value:"item-2"},"Small 2")))};var b,T,_;r.parameters={...r.parameters,docs:{...(b=r.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
}`,...(_=(T=r.parameters)==null?void 0:T.docs)==null?void 0:_.source}}};var C,x,z;l.parameters={...l.parameters,docs:{...(C=l.parameters)==null?void 0:C.docs,source:{originalSource:`{
  globals: {
    imports: \`import { Switch, SwitchItem } from '@ovhcloud/ods-react';\`
  },
  tags: ['!dev'],
  render: ({}) => <Switch aria-label="Select an item">
      <SwitchItem value="item-1">Item 1</SwitchItem>
      <SwitchItem value="item-2">Item 2</SwitchItem>
      <SwitchItem value="item-3">Item 3</SwitchItem>
    </Switch>
}`,...(z=(x=l.parameters)==null?void 0:x.docs)==null?void 0:z.source}}};var O,R,A;c.parameters={...c.parameters,docs:{...(O=c.parameters)==null?void 0:O.docs,source:{originalSource:`{
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
}`,...(A=(R=c.parameters)==null?void 0:R.docs)==null?void 0:A.source}}};var V,W,D;s.parameters={...s.parameters,docs:{...(V=s.parameters)==null?void 0:V.docs,source:{originalSource:`{
  globals: {
    imports: \`import { Switch, SwitchItem } from '@ovhcloud/ods-react';\`
  },
  tags: ['!dev'],
  render: ({}) => <Switch defaultValue="item-1">
      <SwitchItem value="item-1">Item 1</SwitchItem>
      <SwitchItem value="item-2">Item 2</SwitchItem>
      <SwitchItem value="item-3">Item 3</SwitchItem>
    </Switch>
}`,...(D=(W=s.parameters)==null?void 0:W.docs)==null?void 0:D.source}}};var j,F,H;o.parameters={...o.parameters,docs:{...(j=o.parameters)==null?void 0:j.docs,source:{originalSource:`{
  globals: {
    imports: \`import { Switch, SwitchItem } from '@ovhcloud/ods-react';\`
  },
  tags: ['!dev'],
  render: ({}) => <Switch>
      <SwitchItem value="item-1">Item 1</SwitchItem>
      <SwitchItem value="item-2">Item 2</SwitchItem>
      <SwitchItem value="item-3">Item 3</SwitchItem>
    </Switch>
}`,...(H=(F=o.parameters)==null?void 0:F.docs)==null?void 0:H.source}}};var N,Z,G;n.parameters={...n.parameters,docs:{...(N=n.parameters)==null?void 0:N.docs,source:{originalSource:`{
  globals: {
    imports: \`import { Switch, SwitchItem } from '@ovhcloud/ods-react';\`
  },
  tags: ['!dev'],
  render: ({}) => <Switch disabled>
      <SwitchItem value="item-1">Item 1</SwitchItem>
      <SwitchItem value="item-2">Item 2</SwitchItem>
      <SwitchItem value="item-3">Item 3</SwitchItem>
    </Switch>
}`,...(G=(Z=n.parameters)==null?void 0:Z.docs)==null?void 0:G.source}}};var P,L,q;d.parameters={...d.parameters,docs:{...(P=d.parameters)==null?void 0:P.docs,source:{originalSource:`{
  tags: ['!dev'],
  parameters: {
    layout: 'centered'
  },
  render: ({}) => <Switch defaultValue="item-1">
      <SwitchItem value="item-1">Item 1</SwitchItem>
      <SwitchItem value="item-2">Item 2</SwitchItem>
      <SwitchItem value="item-3">Item 3</SwitchItem>
    </Switch>
}`,...(q=(L=d.parameters)==null?void 0:L.docs)==null?void 0:q.source}}};var k,X,$;u.parameters={...u.parameters,docs:{...(k=u.parameters)==null?void 0:k.docs,source:{originalSource:`{
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
}`,...($=(X=u.parameters)==null?void 0:X.docs)==null?void 0:$.source}}};var Y,M,U;h.parameters={...h.parameters,docs:{...(Y=h.parameters)==null?void 0:Y.docs,source:{originalSource:`{
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
}`,...(U=(M=h.parameters)==null?void 0:M.docs)==null?void 0:U.source}}};const de=["Demo","AccessibilityAriaLabel","AccessibilityAriaLabelledby","Checked","Default","Disabled","Overview","Sizes","ThemeGenerator"],ve=Object.freeze(Object.defineProperty({__proto__:null,AccessibilityAriaLabel:l,AccessibilityAriaLabelledby:c,Checked:s,Default:o,Demo:r,Disabled:n,Overview:d,Sizes:u,ThemeGenerator:h,__namedExportsOrder:de,default:ne},Symbol.toStringTag,{value:"Module"}));export{l as A,s as C,o as D,d as O,ve as S,c as a,n as b,u as c};
