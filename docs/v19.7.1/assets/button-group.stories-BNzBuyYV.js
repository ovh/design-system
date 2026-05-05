import{r as g,e}from"./index-jIWwRBLr.js";import{j as y}from"./jsx-runtime-Cfl8ynUo.js";import{c as ne}from"./index-CqY9YpN0.js";import{u as se}from"./context-C_-r2uoG.js";import{T as ie,u as ce,a as de}from"./toggle-group-root-DaBii8xV.js";import{B as Ge,d as N,b as Be,c as C}from"./Button-B-GJ-1TA.js";import{a as Ie}from"./colors-DSObuHxd.js";import{I as n,a}from"./icon-name-D0KNfDOz.js";import{e as ve,o as ye,C as b}from"./controls-BtiQQn1l.js";import{s as he}from"./source-CPEZJ6oD.js";const ae=g.createContext(void 0),le=({children:r,size:u})=>y.jsx(ae.Provider,{value:{size:u},children:r});function ge(){return se(ae)}le.__docgenInfo={description:"",methods:[],displayName:"ButtonGroupProvider",props:{defaultValue:{required:!1,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:"The initial value of the selected items. Use when you don't need to control the value of the component."},disabled:{required:!1,tsType:{name:"boolean"},description:"Whether the component is disabled."},multiple:{required:!1,tsType:{name:"boolean"},description:"Whether multiple items can be selected at the same time."},onValueChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(detail: ButtonGroupValueChangeDetail) => void",signature:{arguments:[{type:{name:"ButtonGroupValueChangeDetail"},name:"detail"}],return:{name:"void"}}},description:"Callback fired when the selection changes."},size:{required:!1,tsType:{name:"literal",value:"`${BUTTON_SIZE}`"},description:"The size preset to use."},value:{required:!1,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:"The controlled value of the selected items."},children:{required:!0,tsType:{name:"ReactNode"},description:""}}};const Oe={"button-group":"_button-group_1714w_2"},_=g.forwardRef(({children:r,className:u,defaultValue:l,disabled:h,multiple:O,onValueChange:E,size:f,value:T,...pe},me)=>y.jsx(le,{size:f,children:y.jsx(ie,{className:ne(Oe["button-group"],u),"data-ods":"button-group",defaultValue:l,disabled:h,multiple:O,onValueChange:E,ref:me,value:T,...pe,children:r})}));_.displayName="ButtonGroup";_.__docgenInfo={description:"",methods:[],displayName:"ButtonGroup",props:{defaultValue:{required:!1,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:"The initial value of the selected items. Use when you don't need to control the value of the component."},disabled:{required:!1,tsType:{name:"boolean"},description:"Whether the component is disabled."},multiple:{required:!1,tsType:{name:"boolean"},description:"Whether multiple items can be selected at the same time."},onValueChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(detail: ButtonGroupValueChangeDetail) => void",signature:{arguments:[{type:{name:"ButtonGroupValueChangeDetail"},name:"detail"}],return:{name:"void"}}},description:"Callback fired when the selection changes."},size:{required:!1,tsType:{name:"literal",value:"`${BUTTON_SIZE}`"},description:"The size preset to use."},value:{required:!1,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:"The controlled value of the selected items."}}};const Ee={"button-group-item":"_button-group-item_1txqz_2"},t=g.forwardRef(({children:r,className:u,disabled:l,value:h,...O},E)=>{const{value:f}=ce(),{size:T}=ge();return y.jsx(de,{asChild:!0,className:ne(Ee["button-group-item"],u),"data-ods":"button-group-item",disabled:l,ref:E,value:h,...O,children:y.jsx(Ge,{color:Ie.primary,size:T,variant:f.indexOf(h)>-1?N.default:N.outline,children:r})})});t.displayName="ButtonGroupItem";t.__docgenInfo={description:"",methods:[],displayName:"ButtonGroupItem",props:{disabled:{required:!1,tsType:{name:"boolean"},description:"Whether the component is disabled."},value:{required:!0,tsType:{name:"string"},description:"The value of the item."}},composes:["ComponentPropsWithRef"]};const o=Object.assign(_,{Item:t}),fe={argTypes:ve(["defaultValue","onValueChange","value"]),component:o,subcomponents:{ButtonGroupItem:t},title:"React Components/Button Group"},p={render:r=>e.createElement(o,{...r},e.createElement(t,{value:"1"},"Option 1"),e.createElement(t,{value:"2"},"Option 2"),e.createElement(t,{value:"3"},"Option 3")),argTypes:ye({disabled:{table:{category:b.general},control:"boolean"},multiple:{table:{category:b.general},control:"boolean"},size:{table:{category:b.design,type:{summary:"BUTTON_GROUP_SIZE"}},control:{type:"select"},options:Be}})},m={tags:["!dev"],render:({})=>e.createElement(o,null,e.createElement(t,{value:"hourly"},"Hourly"),e.createElement(t,{value:"daily"},"Daily"),e.createElement(t,{value:"monthly"},"Monthly"),e.createElement(t,{value:"custom"},e.createElement(n,{name:a.calendar})," Custom"))},s={globals:{imports:`import { ICON_NAME, ButtonGroup, ButtonGroupItem, Icon } from '@ovhcloud/ods-react';
import { useState } from 'react';`},parameters:{docs:{source:{...he()}}},tags:["!dev"],render:({})=>{const[r,u]=g.useState(["hourly"]);return e.createElement(o,{onValueChange:({value:l})=>u(l),value:r},e.createElement(t,{value:"hourly"},"Hourly"),e.createElement(t,{value:"daily"},"Daily"),e.createElement(t,{value:"monthly"},"Monthly"),e.createElement(t,{value:"custom"},e.createElement(n,{name:a.calendar})," Custom"))}},i={globals:{imports:"import { ICON_NAME, ButtonGroup, ButtonGroupItem, Icon } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>e.createElement(o,null,e.createElement(t,{value:"hourly"},"Hourly"),e.createElement(t,{value:"daily"},"Daily"),e.createElement(t,{value:"monthly"},"Monthly"),e.createElement(t,{value:"custom"},e.createElement(n,{name:a.calendar})," Custom"))},c={globals:{imports:"import { ICON_NAME, ButtonGroup, ButtonGroupItem, Icon } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>e.createElement(o,{disabled:!0},e.createElement(t,{value:"hourly"},"Hourly"),e.createElement(t,{value:"daily"},"Daily"),e.createElement(t,{value:"monthly"},"Monthly"),e.createElement(t,{value:"custom"},e.createElement(n,{name:a.calendar})," Custom"))},d={globals:{imports:"import { ICON_NAME, ButtonGroup, ButtonGroupItem, Icon } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>e.createElement(o,null,e.createElement(t,{value:"hourly"},"Hourly"),e.createElement(t,{value:"daily"},"Daily"),e.createElement(t,{value:"monthly"},"Monthly"),e.createElement(t,{disabled:!0,value:"custom"},e.createElement(n,{name:a.calendar})," Custom"))},G={globals:{imports:"import { ButtonGroup, ButtonGroupItem } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>e.createElement(o,{multiple:!0},e.createElement(t,{value:"option-1"},"Option 1"),e.createElement(t,{value:"option-2"},"Option 2"),e.createElement(t,{value:"option-3"},"Option 3"),e.createElement(t,{value:"option-4"},"Option 4"))},B={tags:["!dev"],parameters:{layout:"centered"},render:({})=>e.createElement(o,null,e.createElement(t,{value:"hourly"},"Hourly"),e.createElement(t,{value:"daily"},"Daily"),e.createElement(t,{value:"monthly"},"Monthly"),e.createElement(t,{value:"custom"},e.createElement(n,{name:a.calendar})," Custom"))},I={globals:{imports:"import { BUTTON_GROUP_SIZE, ButtonGroup, ButtonGroupItem } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>e.createElement(e.Fragment,null,e.createElement("p",null,"MD"),e.createElement(o,{size:C.md},e.createElement(t,{value:"option-1"},"Option 1"),e.createElement(t,{value:"option-2"},"Option 2"),e.createElement(t,{value:"option-3"},"Option 3"),e.createElement(t,{value:"option-4"},"Option 4")),e.createElement("p",null,"SM"),e.createElement(o,{size:C.sm},e.createElement(t,{value:"option-1"},"Option 1"),e.createElement(t,{value:"option-2"},"Option 2"),e.createElement(t,{value:"option-3"},"Option 3"),e.createElement(t,{value:"option-4"},"Option 4")),e.createElement("p",null,"XS"),e.createElement(o,{size:C.xs},e.createElement(t,{value:"option-1"},"Option 1"),e.createElement(t,{value:"option-2"},"Option 2"),e.createElement(t,{value:"option-3"},"Option 3"),e.createElement(t,{value:"option-4"},"Option 4")))},v={parameters:{layout:"fullscreen"},tags:["!dev"],render:({})=>e.createElement(o,{multiple:!0},e.createElement(t,{value:"option-1"},"Option 1"),e.createElement(t,{value:"option-2"},"Option 2"),e.createElement(t,{value:"option-3"},"Option 3"),e.createElement(t,{value:"option-4"},"Option 4"))};var S,M,A;p.parameters={...p.parameters,docs:{...(S=p.parameters)==null?void 0:S.docs,source:{originalSource:`{
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
}`,...(A=(M=p.parameters)==null?void 0:M.docs)==null?void 0:A.source}}};var D,R,U;m.parameters={...m.parameters,docs:{...(D=m.parameters)==null?void 0:D.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: ({}) => <ButtonGroup>
      <ButtonGroupItem value="hourly">Hourly</ButtonGroupItem>
      <ButtonGroupItem value="daily">Daily</ButtonGroupItem>
      <ButtonGroupItem value="monthly">Monthly</ButtonGroupItem>
      <ButtonGroupItem value="custom">
        <Icon name={ICON_NAME.calendar} /> Custom
      </ButtonGroupItem>
    </ButtonGroup>
}`,...(U=(R=m.parameters)==null?void 0:R.docs)==null?void 0:U.source}}};var x,z,q;s.parameters={...s.parameters,docs:{...(x=s.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
}`,...(q=(z=s.parameters)==null?void 0:z.docs)==null?void 0:q.source}}};var V,w,P;i.parameters={...i.parameters,docs:{...(V=i.parameters)==null?void 0:V.docs,source:{originalSource:`{
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
}`,...(P=(w=i.parameters)==null?void 0:w.docs)==null?void 0:P.source}}};var H,Z,j;c.parameters={...c.parameters,docs:{...(H=c.parameters)==null?void 0:H.docs,source:{originalSource:`{
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
}`,...(j=(Z=c.parameters)==null?void 0:Z.docs)==null?void 0:j.source}}};var W,L,Y;d.parameters={...d.parameters,docs:{...(W=d.parameters)==null?void 0:W.docs,source:{originalSource:`{
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
}`,...(Y=(L=d.parameters)==null?void 0:L.docs)==null?void 0:Y.source}}};var $,k,F;G.parameters={...G.parameters,docs:{...($=G.parameters)==null?void 0:$.docs,source:{originalSource:`{
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
}`,...(F=(k=G.parameters)==null?void 0:k.docs)==null?void 0:F.source}}};var X,J,K;B.parameters={...B.parameters,docs:{...(X=B.parameters)==null?void 0:X.docs,source:{originalSource:`{
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
}`,...(K=(J=B.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};var Q,ee,te;I.parameters={...I.parameters,docs:{...(Q=I.parameters)==null?void 0:Q.docs,source:{originalSource:`{
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
}`,...(te=(ee=I.parameters)==null?void 0:ee.docs)==null?void 0:te.source}}};var oe,re,ue;v.parameters={...v.parameters,docs:{...(oe=v.parameters)==null?void 0:oe.docs,source:{originalSource:`{
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
}`,...(ue=(re=v.parameters)==null?void 0:re.docs)==null?void 0:ue.source}}};const Te=["Demo","AnatomyTech","Controlled","Default","Disabled","DisabledItem","Multiple","Overview","Size","ThemeGenerator"],xe=Object.freeze(Object.defineProperty({__proto__:null,AnatomyTech:m,Controlled:s,Default:i,Demo:p,Disabled:c,DisabledItem:d,Multiple:G,Overview:B,Size:I,ThemeGenerator:v,__namedExportsOrder:Te,default:fe},Symbol.toStringTag,{value:"Module"}));export{m as A,xe as B,s as C,i as D,G as M,B as O,I as S,c as a,d as b};
