import{r as g,e}from"./index-jIWwRBLr.js";import{j as B}from"./jsx-runtime-Cfl8ynUo.js";import{c as ee}from"./index-CqY9YpN0.js";import{u as ne}from"./context-C_-r2uoG.js";import{T as ae,u as le,a as pe}from"./toggle-group-root-BnrrZb6E.js";import{B as se,d as C,b as me,c as T}from"./Button-B-GJ-1TA.js";import{a as ie}from"./colors-DSObuHxd.js";import{I as v,a as I}from"./icon-name-BpdEc4-2.js";import{e as ce,o as de,C as b}from"./controls-BtiQQn1l.js";import{s as Ge}from"./source-CPEZJ6oD.js";const te=g.createContext(void 0),oe=({children:r,size:u})=>B.jsx(te.Provider,{value:{size:u},children:r});function Be(){return ne(te)}oe.__docgenInfo={description:"",methods:[],displayName:"ButtonGroupProvider",props:{defaultValue:{required:!1,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:"The initial value of the selected items. Use when you don't need to control the value of the component."},disabled:{required:!1,tsType:{name:"boolean"},description:"Whether the component is disabled."},multiple:{required:!1,tsType:{name:"boolean"},description:"Whether multiple items can be selected at the same time."},onValueChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(detail: ButtonGroupValueChangeDetail) => void",signature:{arguments:[{type:{name:"ButtonGroupValueChangeDetail"},name:"detail"}],return:{name:"void"}}},description:"Callback fired when the selection changes."},size:{required:!1,tsType:{name:"literal",value:"`${BUTTON_SIZE}`"},description:"The size preset to use."},value:{required:!1,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:"The controlled value of the selected items."},children:{required:!0,tsType:{name:"ReactNode"},description:""}}};const ve={"button-group":"_button-group_1714w_2"},o=g.forwardRef(({children:r,className:u,defaultValue:n,disabled:y,multiple:h,onValueChange:O,size:E,value:f,...re},ue)=>B.jsx(oe,{size:E,children:B.jsx(ae,{className:ee(ve["button-group"],u),"data-ods":"button-group",defaultValue:n,disabled:y,multiple:h,onValueChange:O,ref:ue,value:f,...re,children:r})}));o.displayName="ButtonGroup";o.__docgenInfo={description:"",methods:[],displayName:"ButtonGroup",props:{defaultValue:{required:!1,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:"The initial value of the selected items. Use when you don't need to control the value of the component."},disabled:{required:!1,tsType:{name:"boolean"},description:"Whether the component is disabled."},multiple:{required:!1,tsType:{name:"boolean"},description:"Whether multiple items can be selected at the same time."},onValueChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(detail: ButtonGroupValueChangeDetail) => void",signature:{arguments:[{type:{name:"ButtonGroupValueChangeDetail"},name:"detail"}],return:{name:"void"}}},description:"Callback fired when the selection changes."},size:{required:!1,tsType:{name:"literal",value:"`${BUTTON_SIZE}`"},description:"The size preset to use."},value:{required:!1,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:"The controlled value of the selected items."}}};const Ie={"button-group-item":"_button-group-item_1txqz_2"},t=g.forwardRef(({children:r,className:u,disabled:n,value:y,...h},O)=>{const{value:E}=le(),{size:f}=Be();return B.jsx(pe,{asChild:!0,className:ee(Ie["button-group-item"],u),"data-ods":"button-group-item",disabled:n,ref:O,value:y,...h,children:B.jsx(se,{color:ie.primary,size:f,variant:E.indexOf(y)>-1?C.default:C.outline,children:r})})});t.displayName="ButtonGroupItem";t.__docgenInfo={description:"",methods:[],displayName:"ButtonGroupItem",props:{disabled:{required:!1,tsType:{name:"boolean"},description:"Whether the component is disabled."},value:{required:!0,tsType:{name:"string"},description:"The value of the item."}},composes:["ComponentPropsWithRef"]};const ye={argTypes:ce(["defaultValue","onValueChange","value"]),component:o,subcomponents:{ButtonGroupItem:t},tags:["new"],title:"React Components/Button Group"},a={render:r=>e.createElement(o,{...r},e.createElement(t,{value:"1"},"Option 1"),e.createElement(t,{value:"2"},"Option 2"),e.createElement(t,{value:"3"},"Option 3")),argTypes:de({disabled:{table:{category:b.general},control:"boolean"},multiple:{table:{category:b.general},control:"boolean"},size:{table:{category:b.design,type:{summary:"BUTTON_GROUP_SIZE"}},control:{type:"select"},options:me}})},l={globals:{imports:`import { ICON_NAME, ButtonGroup, ButtonGroupItem, Icon } from '@ovhcloud/ods-react';
import { useState } from 'react';`},parameters:{docs:{source:{...Ge()}}},tags:["!dev"],render:({})=>{const[r,u]=g.useState(["hourly"]);return e.createElement(o,{onValueChange:({value:n})=>u(n),value:r},e.createElement(t,{value:"hourly"},"Hourly"),e.createElement(t,{value:"daily"},"Daily"),e.createElement(t,{value:"monthly"},"Monthly"),e.createElement(t,{value:"custom"},e.createElement(v,{name:I.calendar})," Custom"))}},p={globals:{imports:"import { ICON_NAME, ButtonGroup, ButtonGroupItem, Icon } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>e.createElement(o,null,e.createElement(t,{value:"hourly"},"Hourly"),e.createElement(t,{value:"daily"},"Daily"),e.createElement(t,{value:"monthly"},"Monthly"),e.createElement(t,{value:"custom"},e.createElement(v,{name:I.calendar})," Custom"))},s={globals:{imports:"import { ICON_NAME, ButtonGroup, ButtonGroupItem, Icon } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>e.createElement(o,{disabled:!0},e.createElement(t,{value:"hourly"},"Hourly"),e.createElement(t,{value:"daily"},"Daily"),e.createElement(t,{value:"monthly"},"Monthly"),e.createElement(t,{value:"custom"},e.createElement(v,{name:I.calendar})," Custom"))},m={globals:{imports:"import { ICON_NAME, ButtonGroup, ButtonGroupItem, Icon } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>e.createElement(o,null,e.createElement(t,{value:"hourly"},"Hourly"),e.createElement(t,{value:"daily"},"Daily"),e.createElement(t,{value:"monthly"},"Monthly"),e.createElement(t,{disabled:!0,value:"custom"},e.createElement(v,{name:I.calendar})," Custom"))},i={globals:{imports:"import { ButtonGroup, ButtonGroupItem } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>e.createElement(o,{multiple:!0},e.createElement(t,{value:"option-1"},"Option 1"),e.createElement(t,{value:"option-2"},"Option 2"),e.createElement(t,{value:"option-3"},"Option 3"),e.createElement(t,{value:"option-4"},"Option 4"))},c={tags:["!dev"],parameters:{layout:"centered"},render:({})=>e.createElement(o,null,e.createElement(t,{value:"hourly"},"Hourly"),e.createElement(t,{value:"daily"},"Daily"),e.createElement(t,{value:"monthly"},"Monthly"),e.createElement(t,{value:"custom"},e.createElement(v,{name:I.calendar})," Custom"))},d={globals:{imports:"import { BUTTON_GROUP_SIZE, ButtonGroup, ButtonGroupItem } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>e.createElement(e.Fragment,null,e.createElement("p",null,"MD"),e.createElement(o,{size:T.md},e.createElement(t,{value:"option-1"},"Option 1"),e.createElement(t,{value:"option-2"},"Option 2"),e.createElement(t,{value:"option-3"},"Option 3"),e.createElement(t,{value:"option-4"},"Option 4")),e.createElement("p",null,"SM"),e.createElement(o,{size:T.sm},e.createElement(t,{value:"option-1"},"Option 1"),e.createElement(t,{value:"option-2"},"Option 2"),e.createElement(t,{value:"option-3"},"Option 3"),e.createElement(t,{value:"option-4"},"Option 4")),e.createElement("p",null,"XS"),e.createElement(o,{size:T.xs},e.createElement(t,{value:"option-1"},"Option 1"),e.createElement(t,{value:"option-2"},"Option 2"),e.createElement(t,{value:"option-3"},"Option 3"),e.createElement(t,{value:"option-4"},"Option 4")))},G={parameters:{layout:"fullscreen"},tags:["!dev"],render:({})=>e.createElement(o,{multiple:!0},e.createElement(t,{value:"option-1"},"Option 1"),e.createElement(t,{value:"option-2"},"Option 2"),e.createElement(t,{value:"option-3"},"Option 3"),e.createElement(t,{value:"option-4"},"Option 4"))};var _,N,S;a.parameters={...a.parameters,docs:{...(_=a.parameters)==null?void 0:_.docs,source:{originalSource:`{
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
}`,...(S=(N=a.parameters)==null?void 0:N.docs)==null?void 0:S.source}}};var M,R,D;l.parameters={...l.parameters,docs:{...(M=l.parameters)==null?void 0:M.docs,source:{originalSource:`{
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
}`,...(D=(R=l.parameters)==null?void 0:R.docs)==null?void 0:D.source}}};var A,U,x;p.parameters={...p.parameters,docs:{...(A=p.parameters)==null?void 0:A.docs,source:{originalSource:`{
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
}`,...(x=(U=p.parameters)==null?void 0:U.docs)==null?void 0:x.source}}};var z,q,w;s.parameters={...s.parameters,docs:{...(z=s.parameters)==null?void 0:z.docs,source:{originalSource:`{
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
}`,...(w=(q=s.parameters)==null?void 0:q.docs)==null?void 0:w.source}}};var V,P,Z;m.parameters={...m.parameters,docs:{...(V=m.parameters)==null?void 0:V.docs,source:{originalSource:`{
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
}`,...(Z=(P=m.parameters)==null?void 0:P.docs)==null?void 0:Z.source}}};var H,j,W;i.parameters={...i.parameters,docs:{...(H=i.parameters)==null?void 0:H.docs,source:{originalSource:`{
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
}`,...(W=(j=i.parameters)==null?void 0:j.docs)==null?void 0:W.source}}};var L,Y,$;c.parameters={...c.parameters,docs:{...(L=c.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
}`,...($=(Y=c.parameters)==null?void 0:Y.docs)==null?void 0:$.source}}};var k,F,X;d.parameters={...d.parameters,docs:{...(k=d.parameters)==null?void 0:k.docs,source:{originalSource:`{
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
}`,...(X=(F=d.parameters)==null?void 0:F.docs)==null?void 0:X.source}}};var J,K,Q;G.parameters={...G.parameters,docs:{...(J=G.parameters)==null?void 0:J.docs,source:{originalSource:`{
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
}`,...(Q=(K=G.parameters)==null?void 0:K.docs)==null?void 0:Q.source}}};const ge=["Demo","Controlled","Default","Disabled","DisabledItem","Multiple","Overview","Size","ThemeGenerator"],Me=Object.freeze(Object.defineProperty({__proto__:null,Controlled:l,Default:p,Demo:a,Disabled:s,DisabledItem:m,Multiple:i,Overview:c,Size:d,ThemeGenerator:G,__namedExportsOrder:ge,default:ye},Symbol.toStringTag,{value:"Module"}));export{Me as B,l as C,p as D,i as M,c as O,d as S,s as a,m as b};
