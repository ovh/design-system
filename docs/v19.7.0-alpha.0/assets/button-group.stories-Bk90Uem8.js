import{r as g,e}from"./index-jIWwRBLr.js";import{j as B}from"./jsx-runtime-Cfl8ynUo.js";import{c as te}from"./index-CqY9YpN0.js";import{u as ae}from"./context-C_-r2uoG.js";import{T as le,u as pe,a as se}from"./toggle-group-root-DZF0K8bs.js";import{B as me,d as _,b as ie,c as T}from"./Button-B-GJ-1TA.js";import{a as ce}from"./colors-DSObuHxd.js";import{I,a as v}from"./icon-name-RfJfucZu.js";import{e as de,o as Ge,C as b}from"./controls-BtiQQn1l.js";import{s as Be}from"./source-CPEZJ6oD.js";const oe=g.createContext(void 0),re=({children:r,size:u})=>B.jsx(oe.Provider,{value:{size:u},children:r});function Ie(){return ae(oe)}re.__docgenInfo={description:"",methods:[],displayName:"ButtonGroupProvider",props:{defaultValue:{required:!1,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:"The initial value of the selected items. Use when you don't need to control the value of the component."},disabled:{required:!1,tsType:{name:"boolean"},description:"Whether the component is disabled."},multiple:{required:!1,tsType:{name:"boolean"},description:"Whether multiple items can be selected at the same time."},onValueChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(detail: ButtonGroupValueChangeDetail) => void",signature:{arguments:[{type:{name:"ButtonGroupValueChangeDetail"},name:"detail"}],return:{name:"void"}}},description:"Callback fired when the selection changes."},size:{required:!1,tsType:{name:"literal",value:"`${BUTTON_SIZE}`"},description:"The size preset to use."},value:{required:!1,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:"The controlled value of the selected items."},children:{required:!0,tsType:{name:"ReactNode"},description:""}}};const ve={"button-group":"_button-group_1714w_2"},C=g.forwardRef(({children:r,className:u,defaultValue:n,disabled:y,multiple:O,onValueChange:h,size:E,value:f,...ue},ne)=>B.jsx(re,{size:E,children:B.jsx(le,{className:te(ve["button-group"],u),"data-ods":"button-group",defaultValue:n,disabled:y,multiple:O,onValueChange:h,ref:ne,value:f,...ue,children:r})}));C.displayName="ButtonGroup";C.__docgenInfo={description:"",methods:[],displayName:"ButtonGroup",props:{defaultValue:{required:!1,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:"The initial value of the selected items. Use when you don't need to control the value of the component."},disabled:{required:!1,tsType:{name:"boolean"},description:"Whether the component is disabled."},multiple:{required:!1,tsType:{name:"boolean"},description:"Whether multiple items can be selected at the same time."},onValueChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(detail: ButtonGroupValueChangeDetail) => void",signature:{arguments:[{type:{name:"ButtonGroupValueChangeDetail"},name:"detail"}],return:{name:"void"}}},description:"Callback fired when the selection changes."},size:{required:!1,tsType:{name:"literal",value:"`${BUTTON_SIZE}`"},description:"The size preset to use."},value:{required:!1,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:"The controlled value of the selected items."}}};const ye={"button-group-item":"_button-group-item_1txqz_2"},t=g.forwardRef(({children:r,className:u,disabled:n,value:y,...O},h)=>{const{value:E}=pe(),{size:f}=Ie();return B.jsx(se,{asChild:!0,className:te(ye["button-group-item"],u),"data-ods":"button-group-item",disabled:n,ref:h,value:y,...O,children:B.jsx(me,{color:ce.primary,size:f,variant:E.indexOf(y)>-1?_.default:_.outline,children:r})})});t.displayName="ButtonGroupItem";t.__docgenInfo={description:"",methods:[],displayName:"ButtonGroupItem",props:{disabled:{required:!1,tsType:{name:"boolean"},description:"Whether the component is disabled."},value:{required:!0,tsType:{name:"string"},description:"The value of the item."}},composes:["ComponentPropsWithRef"]};const o=Object.assign(C,{Item:t}),ge={argTypes:de(["defaultValue","onValueChange","value"]),component:o,subcomponents:{ButtonGroupItem:t},title:"React Components/Button Group"},a={render:r=>e.createElement(o,{...r},e.createElement(t,{value:"1"},"Option 1"),e.createElement(t,{value:"2"},"Option 2"),e.createElement(t,{value:"3"},"Option 3")),argTypes:Ge({disabled:{table:{category:b.general},control:"boolean"},multiple:{table:{category:b.general},control:"boolean"},size:{table:{category:b.design,type:{summary:"BUTTON_GROUP_SIZE"}},control:{type:"select"},options:ie}})},l={globals:{imports:`import { ICON_NAME, ButtonGroup, ButtonGroupItem, Icon } from '@ovhcloud/ods-react';
import { useState } from 'react';`},parameters:{docs:{source:{...Be()}}},tags:["!dev"],render:({})=>{const[r,u]=g.useState(["hourly"]);return e.createElement(o,{onValueChange:({value:n})=>u(n),value:r},e.createElement(t,{value:"hourly"},"Hourly"),e.createElement(t,{value:"daily"},"Daily"),e.createElement(t,{value:"monthly"},"Monthly"),e.createElement(t,{value:"custom"},e.createElement(I,{name:v.calendar})," Custom"))}},p={globals:{imports:"import { ICON_NAME, ButtonGroup, ButtonGroupItem, Icon } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>e.createElement(o,null,e.createElement(t,{value:"hourly"},"Hourly"),e.createElement(t,{value:"daily"},"Daily"),e.createElement(t,{value:"monthly"},"Monthly"),e.createElement(t,{value:"custom"},e.createElement(I,{name:v.calendar})," Custom"))},s={globals:{imports:"import { ICON_NAME, ButtonGroup, ButtonGroupItem, Icon } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>e.createElement(o,{disabled:!0},e.createElement(t,{value:"hourly"},"Hourly"),e.createElement(t,{value:"daily"},"Daily"),e.createElement(t,{value:"monthly"},"Monthly"),e.createElement(t,{value:"custom"},e.createElement(I,{name:v.calendar})," Custom"))},m={globals:{imports:"import { ICON_NAME, ButtonGroup, ButtonGroupItem, Icon } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>e.createElement(o,null,e.createElement(t,{value:"hourly"},"Hourly"),e.createElement(t,{value:"daily"},"Daily"),e.createElement(t,{value:"monthly"},"Monthly"),e.createElement(t,{disabled:!0,value:"custom"},e.createElement(I,{name:v.calendar})," Custom"))},i={globals:{imports:"import { ButtonGroup, ButtonGroupItem } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>e.createElement(o,{multiple:!0},e.createElement(t,{value:"option-1"},"Option 1"),e.createElement(t,{value:"option-2"},"Option 2"),e.createElement(t,{value:"option-3"},"Option 3"),e.createElement(t,{value:"option-4"},"Option 4"))},c={tags:["!dev"],parameters:{layout:"centered"},render:({})=>e.createElement(o,null,e.createElement(t,{value:"hourly"},"Hourly"),e.createElement(t,{value:"daily"},"Daily"),e.createElement(t,{value:"monthly"},"Monthly"),e.createElement(t,{value:"custom"},e.createElement(I,{name:v.calendar})," Custom"))},d={globals:{imports:"import { BUTTON_GROUP_SIZE, ButtonGroup, ButtonGroupItem } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>e.createElement(e.Fragment,null,e.createElement("p",null,"MD"),e.createElement(o,{size:T.md},e.createElement(t,{value:"option-1"},"Option 1"),e.createElement(t,{value:"option-2"},"Option 2"),e.createElement(t,{value:"option-3"},"Option 3"),e.createElement(t,{value:"option-4"},"Option 4")),e.createElement("p",null,"SM"),e.createElement(o,{size:T.sm},e.createElement(t,{value:"option-1"},"Option 1"),e.createElement(t,{value:"option-2"},"Option 2"),e.createElement(t,{value:"option-3"},"Option 3"),e.createElement(t,{value:"option-4"},"Option 4")),e.createElement("p",null,"XS"),e.createElement(o,{size:T.xs},e.createElement(t,{value:"option-1"},"Option 1"),e.createElement(t,{value:"option-2"},"Option 2"),e.createElement(t,{value:"option-3"},"Option 3"),e.createElement(t,{value:"option-4"},"Option 4")))},G={parameters:{layout:"fullscreen"},tags:["!dev"],render:({})=>e.createElement(o,{multiple:!0},e.createElement(t,{value:"option-1"},"Option 1"),e.createElement(t,{value:"option-2"},"Option 2"),e.createElement(t,{value:"option-3"},"Option 3"),e.createElement(t,{value:"option-4"},"Option 4"))};var N,S,M;a.parameters={...a.parameters,docs:{...(N=a.parameters)==null?void 0:N.docs,source:{originalSource:`{
  render: arg => <ButtonGroup {...arg}>
      <ButtonGroupItem value="1">Option 1</ButtonGroupItem>
      <ButtonGroupItem value="2">Option 2</ButtonGroupItem>
      <ButtonGroupItem value="3">Option 3</ButtonGroupItem>
    </ButtonGroup>,
  argTypes: orderControls({
    disabled: {
      table: {
        category: CONTROL_CATEGORY.general
      },
      control: 'boolean'
    },
    multiple: {
      table: {
        category: CONTROL_CATEGORY.general
      },
      control: 'boolean'
    },
    size: {
      table: {
        category: CONTROL_CATEGORY.design,
        type: {
          summary: 'BUTTON_GROUP_SIZE'
        }
      },
      control: {
        type: 'select'
      },
      options: BUTTON_GROUP_SIZES
    }
  })
}`,...(M=(S=a.parameters)==null?void 0:S.docs)==null?void 0:M.source}}};var R,D,A;l.parameters={...l.parameters,docs:{...(R=l.parameters)==null?void 0:R.docs,source:{originalSource:`{
  globals: {
    imports: \`import { ICON_NAME, ButtonGroup, ButtonGroupItem, Icon } from '@ovhcloud/ods-react';
import { useState } from 'react';\`
  },
  parameters: {
    docs: {
      source: {
        ...staticSourceRenderConfig()
      }
    }
  },
  tags: ['!dev'],
  render: ({}) => {
    const [values, setValues] = useState(['hourly']);
    return <ButtonGroup onValueChange={({
      value
    }) => setValues(value)} value={values}>
        <ButtonGroupItem value="hourly">Hourly</ButtonGroupItem>
        <ButtonGroupItem value="daily">Daily</ButtonGroupItem>
        <ButtonGroupItem value="monthly">Monthly</ButtonGroupItem>
        <ButtonGroupItem value="custom">
          <Icon name={ICON_NAME.calendar} /> Custom
        </ButtonGroupItem>
      </ButtonGroup>;
  }
}`,...(A=(D=l.parameters)==null?void 0:D.docs)==null?void 0:A.source}}};var U,x,z;p.parameters={...p.parameters,docs:{...(U=p.parameters)==null?void 0:U.docs,source:{originalSource:`{
  globals: {
    imports: \`import { ICON_NAME, ButtonGroup, ButtonGroupItem, Icon } from '@ovhcloud/ods-react';\`
  },
  tags: ['!dev'],
  render: ({}) => <ButtonGroup>
      <ButtonGroupItem value="hourly">Hourly</ButtonGroupItem>
      <ButtonGroupItem value="daily">Daily</ButtonGroupItem>
      <ButtonGroupItem value="monthly">Monthly</ButtonGroupItem>
      <ButtonGroupItem value="custom">
        <Icon name={ICON_NAME.calendar} /> Custom
      </ButtonGroupItem>
    </ButtonGroup>
}`,...(z=(x=p.parameters)==null?void 0:x.docs)==null?void 0:z.source}}};var q,V,w;s.parameters={...s.parameters,docs:{...(q=s.parameters)==null?void 0:q.docs,source:{originalSource:`{
  globals: {
    imports: \`import { ICON_NAME, ButtonGroup, ButtonGroupItem, Icon } from '@ovhcloud/ods-react';\`
  },
  tags: ['!dev'],
  render: ({}) => <ButtonGroup disabled>
      <ButtonGroupItem value="hourly">Hourly</ButtonGroupItem>
      <ButtonGroupItem value="daily">Daily</ButtonGroupItem>
      <ButtonGroupItem value="monthly">Monthly</ButtonGroupItem>
      <ButtonGroupItem value="custom">
        <Icon name={ICON_NAME.calendar} /> Custom
      </ButtonGroupItem>
    </ButtonGroup>
}`,...(w=(V=s.parameters)==null?void 0:V.docs)==null?void 0:w.source}}};var P,Z,j;m.parameters={...m.parameters,docs:{...(P=m.parameters)==null?void 0:P.docs,source:{originalSource:`{
  globals: {
    imports: \`import { ICON_NAME, ButtonGroup, ButtonGroupItem, Icon } from '@ovhcloud/ods-react';\`
  },
  tags: ['!dev'],
  render: ({}) => <ButtonGroup>
      <ButtonGroupItem value="hourly">Hourly</ButtonGroupItem>
      <ButtonGroupItem value="daily">Daily</ButtonGroupItem>
      <ButtonGroupItem value="monthly">Monthly</ButtonGroupItem>
      <ButtonGroupItem disabled value="custom">
        <Icon name={ICON_NAME.calendar} /> Custom
      </ButtonGroupItem>
    </ButtonGroup>
}`,...(j=(Z=m.parameters)==null?void 0:Z.docs)==null?void 0:j.source}}};var H,W,L;i.parameters={...i.parameters,docs:{...(H=i.parameters)==null?void 0:H.docs,source:{originalSource:`{
  globals: {
    imports: \`import { ButtonGroup, ButtonGroupItem } from '@ovhcloud/ods-react';\`
  },
  tags: ['!dev'],
  render: ({}) => <ButtonGroup multiple>
      <ButtonGroupItem value="option-1">Option 1</ButtonGroupItem>
      <ButtonGroupItem value="option-2">Option 2</ButtonGroupItem>
      <ButtonGroupItem value="option-3">Option 3</ButtonGroupItem>
      <ButtonGroupItem value="option-4">Option 4</ButtonGroupItem>
    </ButtonGroup>
}`,...(L=(W=i.parameters)==null?void 0:W.docs)==null?void 0:L.source}}};var Y,$,k;c.parameters={...c.parameters,docs:{...(Y=c.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  tags: ['!dev'],
  parameters: {
    layout: 'centered'
  },
  render: ({}) => <ButtonGroup>
      <ButtonGroupItem value="hourly">Hourly</ButtonGroupItem>
      <ButtonGroupItem value="daily">Daily</ButtonGroupItem>
      <ButtonGroupItem value="monthly">Monthly</ButtonGroupItem>
      <ButtonGroupItem value="custom">
        <Icon name={ICON_NAME.calendar} /> Custom
      </ButtonGroupItem>
    </ButtonGroup>
}`,...(k=($=c.parameters)==null?void 0:$.docs)==null?void 0:k.source}}};var F,X,J;d.parameters={...d.parameters,docs:{...(F=d.parameters)==null?void 0:F.docs,source:{originalSource:`{
  globals: {
    imports: \`import { BUTTON_GROUP_SIZE, ButtonGroup, ButtonGroupItem } from '@ovhcloud/ods-react';\`
  },
  tags: ['!dev'],
  render: ({}) => <>
      <p>MD</p>
      <ButtonGroup size={BUTTON_GROUP_SIZE.md}>
        <ButtonGroupItem value="option-1">Option 1</ButtonGroupItem>
        <ButtonGroupItem value="option-2">Option 2</ButtonGroupItem>
        <ButtonGroupItem value="option-3">Option 3</ButtonGroupItem>
        <ButtonGroupItem value="option-4">Option 4</ButtonGroupItem>
      </ButtonGroup>

      <p>SM</p>
      <ButtonGroup size={BUTTON_GROUP_SIZE.sm}>
        <ButtonGroupItem value="option-1">Option 1</ButtonGroupItem>
        <ButtonGroupItem value="option-2">Option 2</ButtonGroupItem>
        <ButtonGroupItem value="option-3">Option 3</ButtonGroupItem>
        <ButtonGroupItem value="option-4">Option 4</ButtonGroupItem>
      </ButtonGroup>

      <p>XS</p>
      <ButtonGroup size={BUTTON_GROUP_SIZE.xs}>
        <ButtonGroupItem value="option-1">Option 1</ButtonGroupItem>
        <ButtonGroupItem value="option-2">Option 2</ButtonGroupItem>
        <ButtonGroupItem value="option-3">Option 3</ButtonGroupItem>
        <ButtonGroupItem value="option-4">Option 4</ButtonGroupItem>
      </ButtonGroup>
    </>
}`,...(J=(X=d.parameters)==null?void 0:X.docs)==null?void 0:J.source}}};var K,Q,ee;G.parameters={...G.parameters,docs:{...(K=G.parameters)==null?void 0:K.docs,source:{originalSource:`{
  parameters: {
    layout: 'fullscreen'
  },
  tags: ['!dev'],
  render: ({}) => <ButtonGroup multiple>
      <ButtonGroupItem value="option-1">Option 1</ButtonGroupItem>
      <ButtonGroupItem value="option-2">Option 2</ButtonGroupItem>
      <ButtonGroupItem value="option-3">Option 3</ButtonGroupItem>
      <ButtonGroupItem value="option-4">Option 4</ButtonGroupItem>
    </ButtonGroup>
}`,...(ee=(Q=G.parameters)==null?void 0:Q.docs)==null?void 0:ee.source}}};const Oe=["Demo","Controlled","Default","Disabled","DisabledItem","Multiple","Overview","Size","ThemeGenerator"],Re=Object.freeze(Object.defineProperty({__proto__:null,Controlled:l,Default:p,Demo:a,Disabled:s,DisabledItem:m,Multiple:i,Overview:c,Size:d,ThemeGenerator:G,__namedExportsOrder:Oe,default:ge},Symbol.toStringTag,{value:"Module"}));export{Re as B,l as C,p as D,i as M,c as O,d as S,s as a,m as b};
