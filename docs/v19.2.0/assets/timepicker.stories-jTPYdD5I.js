import{r as p,e as r}from"./index-jIWwRBLr.js";import{u as fe,F as ge,a as Ce}from"./FormFieldLabel-DW-nAxje.js";import{j as f}from"./jsx-runtime-Cfl8ynUo.js";import{c as he}from"./index-CqY9YpN0.js";import{I as Ue,b as we}from"./Input-YvN7KzhF.js";import{L as d,u as Fe}from"./useI18n-C0NLVYPv.js";import{b as Le,S as Se,a as _e}from"./SelectControl-TvkHg2JI.js";import{e as Ee,o as xe,C as L}from"./controls-BtiQQn1l.js";var j=(e=>(e.all="all",e))(j||{});Object.freeze(Object.values(j));var D=(e=>(e.UTC_12="UTC-12",e.UTC_11="UTC-11",e.UTC_10="UTC-10",e.UTC_9="UTC-9",e.UTC_8="UTC-8",e.UTC_7="UTC-7",e.UTC_6="UTC-6",e.UTC_5="UTC-5",e.UTC_4="UTC-4",e.UTC_3="UTC-3",e.UTC_2="UTC-2",e.UTC_1="UTC-1",e.UTC="UTC+0",e.UTC1="UTC+1",e.UTC2="UTC+2",e.UTC3="UTC+3",e.UTC4="UTC+4",e.UTC5="UTC+5",e.UTC6="UTC+6",e.UTC7="UTC+7",e.UTC8="UTC+8",e.UTC9="UTC+9",e.UTC10="UTC+10",e.UTC11="UTC+11",e.UTC12="UTC+12",e))(D||{});const P=Object.freeze(Object.values(D)),V=D.UTC;function qe(){const e=new Date().getTimezoneOffset()/60*-1;return e>=0?`+${e}`:e.toString()}function Oe(e,t){if(e&&P.indexOf(e)>=0)return e;const o=qe(),l=ke(t),m=t===j.all?V:l[0];return l.find(s=>s.indexOf(o)>=0&&P.indexOf(s)>=0)||m}function ke(e){if(!e||e===j.all)return P;const t=e.filter(o=>P.indexOf(o)>=0);return t.length?t:[V]}const ye=p.createContext({});function ve({children:e,timezone:t,timezones:o,...l}){const[m,s]=p.useState(Oe(t,o));return f.jsx(ye.Provider,{value:{...l,currentTimezone:m,setCurrentTimezone:s,timezones:o},children:e})}function be(){return p.useContext(ye)}ve.__docgenInfo={description:"",methods:[],displayName:"TimepickerProvider",props:{defaultValue:{required:!1,tsType:{name:"string"},description:"The initial time value. Use when you don't need to control the value of the timepicker."},disabled:{required:!1,tsType:{name:"boolean"},description:"Whether the component is disabled."},i18n:{required:!1,tsType:{name:"Partial",elements:[{name:"Record",elements:[{name:"TIMEPICKER_I18N"},{name:"string"}],raw:"Record<TIMEPICKER_I18N, string>"}],raw:"Partial<Record<TIMEPICKER_I18N, string>>"},description:"Internal translations override."},id:{required:!1,tsType:{name:"string"},description:"The field id."},invalid:{required:!1,tsType:{name:"boolean"},description:"Whether the component is in error state."},locale:{required:!1,tsType:{name:"literal",value:"`${LOCALE}`"},description:"The locale used for the translation of the internal elements."},name:{required:!1,tsType:{name:"string"},description:"The name of the form element. Useful for form submission."},onTimezoneChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(detail: TimepickerTimezoneChangeDetail) => void",signature:{arguments:[{type:{name:"TimepickerTimezoneChangeDetail"},name:"detail"}],return:{name:"void"}}},description:"Callback fired when the timezone changes."},onValueChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(detail: TimepickerValueChangeDetail) => void",signature:{arguments:[{type:{name:"TimepickerValueChangeDetail"},name:"detail"}],return:{name:"void"}}},description:"Callback fired when the value changes."},readOnly:{required:!1,tsType:{name:"boolean"},description:"Whether the component is readonly."},required:{required:!1,tsType:{name:"boolean"},description:"Whether the component is required."},timezone:{required:!1,tsType:{name:"literal",value:"`${TIMEZONE}`"},description:"The controlled selected timezone."},timezones:{required:!1,tsType:{name:"union",raw:"Timezone[] | TimezonesPreset",elements:[{name:"Array",elements:[{name:"literal",value:"`${TIMEZONE}`"}],raw:"Timezone[]"},{name:"literal",value:"`${TIMEZONES_PRESET}`"}]},description:"A specific or preset list of timezone to display in the selector."},value:{required:!1,tsType:{name:"string"},description:"The controlled timepicker value."},withSeconds:{required:!1,tsType:{name:"boolean"},description:"Whether the time input allows seconds selection."},currentTimezone:{required:!1,tsType:{name:"literal",value:"`${TIMEZONE}`"},description:""},setCurrentTimezone:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: Timezone) => void",signature:{arguments:[{type:{name:"literal",value:"`${TIMEZONE}`"},name:"value"}],return:{name:"void"}}},description:""},children:{required:!0,tsType:{name:"ReactNode"},description:""}}};const Re="_timepicker_10n31_2",Ie={timepicker:Re},n=p.forwardRef(({children:e,className:t,defaultValue:o,disabled:l,i18n:m,id:s,invalid:k,locale:y,name:v,onTimezoneChange:b,onValueChange:u,readOnly:z,required:U,timezone:g,timezones:C,value:T,withSeconds:w,...F},c)=>{const h=fe();return f.jsx(ve,{defaultValue:o,disabled:l,i18n:m,id:s||(h==null?void 0:h.id),invalid:k||(h==null?void 0:h.invalid),locale:y,name:v,onTimezoneChange:b,onValueChange:u,readOnly:z,required:U,timezone:g,timezones:C,value:T,withSeconds:w,children:f.jsx("div",{className:he(Ie.timepicker,t),"data-ods":"timepicker",ref:c,role:"group",...F,children:e})})});n.displayName="Timepicker";n.__docgenInfo={description:"",methods:[],displayName:"Timepicker",props:{defaultValue:{required:!1,tsType:{name:"string"},description:"The initial time value. Use when you don't need to control the value of the timepicker."},disabled:{required:!1,tsType:{name:"boolean"},description:"Whether the component is disabled."},i18n:{required:!1,tsType:{name:"Partial",elements:[{name:"Record",elements:[{name:"TIMEPICKER_I18N"},{name:"string"}],raw:"Record<TIMEPICKER_I18N, string>"}],raw:"Partial<Record<TIMEPICKER_I18N, string>>"},description:"Internal translations override."},id:{required:!1,tsType:{name:"string"},description:"The field id."},invalid:{required:!1,tsType:{name:"boolean"},description:"Whether the component is in error state."},locale:{required:!1,tsType:{name:"literal",value:"`${LOCALE}`"},description:"The locale used for the translation of the internal elements."},name:{required:!1,tsType:{name:"string"},description:"The name of the form element. Useful for form submission."},onTimezoneChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(detail: TimepickerTimezoneChangeDetail) => void",signature:{arguments:[{type:{name:"TimepickerTimezoneChangeDetail"},name:"detail"}],return:{name:"void"}}},description:"Callback fired when the timezone changes."},onValueChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(detail: TimepickerValueChangeDetail) => void",signature:{arguments:[{type:{name:"TimepickerValueChangeDetail"},name:"detail"}],return:{name:"void"}}},description:"Callback fired when the value changes."},readOnly:{required:!1,tsType:{name:"boolean"},description:"Whether the component is readonly."},required:{required:!1,tsType:{name:"boolean"},description:"Whether the component is required."},timezone:{required:!1,tsType:{name:"literal",value:"`${TIMEZONE}`"},description:"The controlled selected timezone."},timezones:{required:!1,tsType:{name:"union",raw:"Timezone[] | TimezonesPreset",elements:[{name:"Array",elements:[{name:"literal",value:"`${TIMEZONE}`"}],raw:"Timezone[]"},{name:"literal",value:"`${TIMEZONES_PRESET}`"}]},description:"A specific or preset list of timezone to display in the selector."},value:{required:!1,tsType:{name:"string"},description:"The controlled timepicker value."},withSeconds:{required:!1,tsType:{name:"boolean"},description:"Whether the time input allows seconds selection."}},composes:["Omit"]};const i=p.forwardRef(({children:e,className:t,...o},l)=>{const{currentTimezone:m,defaultValue:s,disabled:k,id:y,invalid:v,name:b,onValueChange:u,readOnly:z,required:U,value:g,withSeconds:C}=be(),T=fe();function w(F){const c=F.currentTarget.value;u&&u({timezone:m,value:c})}return f.jsx(Ue,{"aria-labelledby":T==null?void 0:T.labelId,className:t,"data-ods":"timepicker-control",ref:l,...o,defaultValue:s,disabled:k,id:y,invalid:v,onChange:w,readOnly:z,required:U,name:b,step:C?1:void 0,type:we.time,value:g})});i.displayName="TimepickerControl";i.__docgenInfo={description:"",methods:[],displayName:"TimepickerControl",composes:["TimepickerInputProp"]};var ze=(e=>(e.timezoneSelect="timepicker.timezone.select",e))(ze||{});const Ae={"timepicker.timezone.select":{[d.de]:"Zeitzone auswählen",[d.en]:"Select a timezone",[d.es]:"Seleccione una franja horaria",[d.fr]:"Sélectionner un fuseau horaire",[d.it]:"Seleziona un fuso orario",[d.nl]:"Selecteer een tijdzone",[d.pl]:"Wybierz strefę czasową",[d.pt]:"Selecionar um fuso horário"}},W={"timepicker-timezone-list":"_timepicker-timezone-list_xj56c_2"},a=p.forwardRef(({children:e,className:t,...o},l)=>{const m=p.useId(),{currentTimezone:s,disabled:k,i18n:y,invalid:v,locale:b,onTimezoneChange:u,readOnly:z,required:U,setCurrentTimezone:g,timezones:C}=be(),{translate:T}=Fe(Ae,b,y),w=p.useMemo(()=>ke(C).map(c=>({label:c,value:c})),[C]);function F({value:c}){g&&g(c[0]),u&&u({value:c[0]})}return f.jsxs(Le,{className:he(W["timepicker-timezone-list"],t),"data-ods":"timepicker-timezone-list",disabled:k,invalid:v,items:w,readOnly:z,required:U,ref:l,onValueChange:F,value:[s||V],...o,children:[f.jsx(Se,{"aria-label":T(ze.timezoneSelect),"aria-labelledby":"",className:W["timepicker-timezone__control"],id:m}),f.jsx(_e,{})]})});a.displayName="TimepickerTimezoneList";a.__docgenInfo={description:"",methods:[],displayName:"TimepickerTimezoneList",composes:["Omit"]};const Pe={argTypes:Ee(["defaultValue","i18n","id","locale","name","onTimezoneChange","onValueChange","required","timezone","timezones","value"]),component:n,subcomponents:{TimepickerControl:i,TimepickerTimezoneList:a},title:"React Components/Timepicker"},S={render:e=>r.createElement(n,{disabled:e.disabled,invalid:e.invalid,readOnly:e.readOnly,withSeconds:e.withSeconds},r.createElement(i,null),e.withTimezones&&r.createElement(a,null)),argTypes:xe({disabled:{table:{category:L.general},control:{type:"boolean"}},invalid:{table:{category:L.general},control:"boolean"},readOnly:{table:{category:L.general},control:"boolean"},withSeconds:{table:{category:L.general,type:{summary:"boolean"}},control:"boolean"},withTimezones:{table:{category:L.general,type:{summary:"boolean"}},control:"boolean"}})},_={globals:{imports:"import { FormField, FormFieldLabel, Timepicker, TimepickerControl, TimepickerTimezoneList } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>r.createElement(ge,null,r.createElement(Ce,null,"Starting time:"),r.createElement(n,{withSeconds:!0},r.createElement(i,null),r.createElement(a,null)))},E={globals:{imports:"import { Timepicker, TimepickerControl } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>r.createElement(n,null,r.createElement(i,null))},x={decorators:[e=>r.createElement("div",{style:{display:"flex",flexFlow:"column",gap:"8px"}},e())],globals:{imports:"import { Timepicker, TimepickerControl, TimepickerTimezoneList } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>r.createElement(r.Fragment,null,r.createElement(n,{disabled:!0},r.createElement(i,null)),r.createElement(n,{disabled:!0},r.createElement(i,null),r.createElement(a,null)))},q={globals:{imports:"import { FormField, FormFieldLabel, Timepicker, TimepickerControl, TimepickerTimezoneList } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>r.createElement(ge,null,r.createElement(Ce,null,"Timepicker:"),r.createElement(n,null,r.createElement(i,null)))},O={tags:["!dev"],parameters:{layout:"centered"},render:({})=>r.createElement(n,{defaultValue:"12:00"},r.createElement(i,null),r.createElement(a,null))},R={decorators:[e=>r.createElement("div",{style:{display:"flex",flexFlow:"column",gap:"8px"}},e())],globals:{imports:"import { Timepicker, TimepickerControl, TimepickerTimezoneList } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>r.createElement(r.Fragment,null,r.createElement(n,{readOnly:!0},r.createElement(i,null)),r.createElement(n,{readOnly:!0},r.createElement(i,null),r.createElement(a,null)))},I={decorators:[e=>r.createElement("div",{style:{display:"flex",flexFlow:"column",gap:"8px"}},e())],globals:{imports:"import { Timepicker, TimepickerControl, TimepickerTimezoneList } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>r.createElement(r.Fragment,null,r.createElement("span",null,"All timezones"),r.createElement(n,null,r.createElement(i,null),r.createElement(a,null)),r.createElement("span",null,"Subset of timezone"),r.createElement(n,{timezones:["UTC-10","UTC+0","UTC+10"]},r.createElement(i,null),r.createElement(a,null)))},A={decorators:[e=>r.createElement("div",{style:{display:"flex",flexFlow:"column",gap:"8px"}},e())],globals:{imports:"import { Timepicker, TimepickerControl, TimepickerTimezoneList } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>r.createElement(r.Fragment,null,r.createElement(n,{withSeconds:!0},r.createElement(i,null)),r.createElement(n,{withSeconds:!0},r.createElement(i,null),r.createElement(a,null)))};var N,$,K;S.parameters={...S.parameters,docs:{...(N=S.parameters)==null?void 0:N.docs,source:{originalSource:`{
  render: (arg: DemoArg) => <Timepicker disabled={arg.disabled} invalid={arg.invalid} readOnly={arg.readOnly} withSeconds={arg.withSeconds}>
      <TimepickerControl />

      {arg.withTimezones && <TimepickerTimezoneList />}
    </Timepicker>,
  argTypes: orderControls({
    disabled: {
      table: {
        category: CONTROL_CATEGORY.general
      },
      control: {
        type: 'boolean'
      }
    },
    invalid: {
      table: {
        category: CONTROL_CATEGORY.general
      },
      control: 'boolean'
    },
    readOnly: {
      table: {
        category: CONTROL_CATEGORY.general
      },
      control: 'boolean'
    },
    withSeconds: {
      table: {
        category: CONTROL_CATEGORY.general,
        type: {
          summary: 'boolean'
        }
      },
      control: 'boolean'
    },
    withTimezones: {
      table: {
        category: CONTROL_CATEGORY.general,
        type: {
          summary: 'boolean'
        }
      },
      control: 'boolean'
    }
  })
}`,...(K=($=S.parameters)==null?void 0:$.docs)==null?void 0:K.source}}};var Y,G,B;_.parameters={..._.parameters,docs:{...(Y=_.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  globals: {
    imports: \`import { FormField, FormFieldLabel, Timepicker, TimepickerControl, TimepickerTimezoneList } from '@ovhcloud/ods-react';\`
  },
  tags: ['!dev'],
  render: ({}) => <FormField>
      <FormFieldLabel>
        Starting time:
      </FormFieldLabel>

      <Timepicker withSeconds>
        <TimepickerControl />

        <TimepickerTimezoneList />
      </Timepicker>
    </FormField>
}`,...(B=(G=_.parameters)==null?void 0:G.docs)==null?void 0:B.source}}};var H,J,Q;E.parameters={...E.parameters,docs:{...(H=E.parameters)==null?void 0:H.docs,source:{originalSource:`{
  globals: {
    imports: \`import { Timepicker, TimepickerControl } from '@ovhcloud/ods-react';\`
  },
  tags: ['!dev'],
  render: ({}) => <Timepicker>
      <TimepickerControl />
    </Timepicker>
}`,...(Q=(J=E.parameters)==null?void 0:J.docs)==null?void 0:Q.source}}};var X,M,Z;x.parameters={...x.parameters,docs:{...(X=x.parameters)==null?void 0:X.docs,source:{originalSource:`{
  decorators: [story => <div style={{
    display: 'flex',
    flexFlow: 'column',
    gap: '8px'
  }}>{story()}</div>],
  globals: {
    imports: \`import { Timepicker, TimepickerControl, TimepickerTimezoneList } from '@ovhcloud/ods-react';\`
  },
  tags: ['!dev'],
  render: ({}) => <>
      <Timepicker disabled>
        <TimepickerControl />
      </Timepicker>

      <Timepicker disabled>
        <TimepickerControl />

        <TimepickerTimezoneList />
      </Timepicker>
    </>
}`,...(Z=(M=x.parameters)==null?void 0:M.docs)==null?void 0:Z.source}}};var ee,re,ne;q.parameters={...q.parameters,docs:{...(ee=q.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  globals: {
    imports: \`import { FormField, FormFieldLabel, Timepicker, TimepickerControl, TimepickerTimezoneList } from '@ovhcloud/ods-react';\`
  },
  tags: ['!dev'],
  render: ({}) => <FormField>
      <FormFieldLabel>
        Timepicker:
      </FormFieldLabel>

      <Timepicker>
        <TimepickerControl />
      </Timepicker>
    </FormField>
}`,...(ne=(re=q.parameters)==null?void 0:re.docs)==null?void 0:ne.source}}};var ie,te,oe;O.parameters={...O.parameters,docs:{...(ie=O.parameters)==null?void 0:ie.docs,source:{originalSource:`{
  tags: ['!dev'],
  parameters: {
    layout: 'centered'
  },
  render: ({}) => <Timepicker defaultValue="12:00">
      <TimepickerControl />

      <TimepickerTimezoneList />
    </Timepicker>
}`,...(oe=(te=O.parameters)==null?void 0:te.docs)==null?void 0:oe.source}}};var ae,le,se;R.parameters={...R.parameters,docs:{...(ae=R.parameters)==null?void 0:ae.docs,source:{originalSource:`{
  decorators: [story => <div style={{
    display: 'flex',
    flexFlow: 'column',
    gap: '8px'
  }}>{story()}</div>],
  globals: {
    imports: \`import { Timepicker, TimepickerControl, TimepickerTimezoneList } from '@ovhcloud/ods-react';\`
  },
  tags: ['!dev'],
  render: ({}) => <>
      <Timepicker readOnly>
        <TimepickerControl />
      </Timepicker>

      <Timepicker readOnly>
        <TimepickerControl />

        <TimepickerTimezoneList />
      </Timepicker>
    </>
}`,...(se=(le=R.parameters)==null?void 0:le.docs)==null?void 0:se.source}}};var me,ce,de;I.parameters={...I.parameters,docs:{...(me=I.parameters)==null?void 0:me.docs,source:{originalSource:`{
  decorators: [story => <div style={{
    display: 'flex',
    flexFlow: 'column',
    gap: '8px'
  }}>{story()}</div>],
  globals: {
    imports: \`import { Timepicker, TimepickerControl, TimepickerTimezoneList } from '@ovhcloud/ods-react';\`
  },
  tags: ['!dev'],
  render: ({}) => <>
      <span>All timezones</span>

      <Timepicker>
        <TimepickerControl />

        <TimepickerTimezoneList />
      </Timepicker>

      <span>Subset of timezone</span>

      <Timepicker timezones={['UTC-10', 'UTC+0', 'UTC+10']}>
        <TimepickerControl />

        <TimepickerTimezoneList />
      </Timepicker>
    </>
}`,...(de=(ce=I.parameters)==null?void 0:ce.docs)==null?void 0:de.source}}};var pe,ue,Te;A.parameters={...A.parameters,docs:{...(pe=A.parameters)==null?void 0:pe.docs,source:{originalSource:`{
  decorators: [story => <div style={{
    display: 'flex',
    flexFlow: 'column',
    gap: '8px'
  }}>{story()}</div>],
  globals: {
    imports: \`import { Timepicker, TimepickerControl, TimepickerTimezoneList } from '@ovhcloud/ods-react';\`
  },
  tags: ['!dev'],
  render: ({}) => <>
      <Timepicker withSeconds>
        <TimepickerControl />
      </Timepicker>

      <Timepicker withSeconds>
        <TimepickerControl />

        <TimepickerTimezoneList />
      </Timepicker>
    </>
}`,...(Te=(ue=A.parameters)==null?void 0:ue.docs)==null?void 0:Te.source}}};const je=["Demo","AccessibilityLabel","Default","Disabled","InFormField","Overview","Readonly","TimezoneList","WithSeconds"],Be=Object.freeze(Object.defineProperty({__proto__:null,AccessibilityLabel:_,Default:E,Demo:S,Disabled:x,InFormField:q,Overview:O,Readonly:R,TimezoneList:I,WithSeconds:A,__namedExportsOrder:je,default:Pe},Symbol.toStringTag,{value:"Module"}));export{_ as A,E as D,q as I,O,R,Be as T,A as W,x as a,I as b};
