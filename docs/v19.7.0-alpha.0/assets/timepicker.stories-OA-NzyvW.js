import{r as T,e as r}from"./index-jIWwRBLr.js";import{u as ye,F as be,a as ve}from"./index-DHp3jGT7.js";import{j as f}from"./jsx-runtime-Cfl8ynUo.js";import{c as ze}from"./index-CqY9YpN0.js";import{u as Se}from"./context-C_-r2uoG.js";import{I as _e,b as xe}from"./Input-DK0nnZkU.js";import{L as d,u as Oe}from"./useI18n-C0NLVYPv.js";import{b as qe,S as Re,a as Ie}from"./index-BWF8qxTS.js";import{e as Ae,o as Pe,C as L}from"./controls-BtiQQn1l.js";var D=(e=>(e.all="all",e))(D||{});Object.freeze(Object.values(D));var V=(e=>(e.UTC_12="UTC-12",e.UTC_11="UTC-11",e.UTC_10="UTC-10",e.UTC_9="UTC-9",e.UTC_8="UTC-8",e.UTC_7="UTC-7",e.UTC_6="UTC-6",e.UTC_5="UTC-5",e.UTC_4="UTC-4",e.UTC_3="UTC-3",e.UTC_2="UTC-2",e.UTC_1="UTC-1",e.UTC="UTC+0",e.UTC1="UTC+1",e.UTC2="UTC+2",e.UTC3="UTC+3",e.UTC4="UTC+4",e.UTC5="UTC+5",e.UTC6="UTC+6",e.UTC7="UTC+7",e.UTC8="UTC+8",e.UTC9="UTC+9",e.UTC10="UTC+10",e.UTC11="UTC+11",e.UTC12="UTC+12",e))(V||{});const j=Object.freeze(Object.values(V)),W=V.UTC;function je(){const e=new Date().getTimezoneOffset()/60*-1;return e>=0?`+${e}`:e.toString()}function De(e,t){if(e&&j.indexOf(e)>=0)return e;const a=je(),l=Ue(t),m=t===D.all?W:l[0];return l.find(s=>s.indexOf(a)>=0&&j.indexOf(s)>=0)||m}function Ue(e){if(!e||e===D.all)return j;const t=e.filter(a=>j.indexOf(a)>=0);return t.length?t:[W]}const we=T.createContext(void 0);function Fe({children:e,timezone:t,timezones:a,...l}){const[m,s]=T.useState(De(t,a));return f.jsx(we.Provider,{value:{...l,currentTimezone:m,setCurrentTimezone:s,timezones:a},children:e})}function Le(){return Se(we)}Fe.__docgenInfo={description:"",methods:[],displayName:"TimepickerProvider",props:{defaultValue:{required:!1,tsType:{name:"string"},description:"The initial time value. Use when you don't need to control the value of the timepicker."},disabled:{required:!1,tsType:{name:"boolean"},description:"Whether the component is disabled."},i18n:{required:!1,tsType:{name:"Partial",elements:[{name:"Record",elements:[{name:"TIMEPICKER_I18N"},{name:"string"}],raw:"Record<TIMEPICKER_I18N, string>"}],raw:"Partial<Record<TIMEPICKER_I18N, string>>"},description:"Internal translations override."},id:{required:!1,tsType:{name:"string"},description:"The field id."},invalid:{required:!1,tsType:{name:"boolean"},description:"Whether the component is in error state."},locale:{required:!1,tsType:{name:"literal",value:"`${LOCALE}`"},description:"The locale used for the translation of the internal elements."},name:{required:!1,tsType:{name:"string"},description:"The name of the form element. Useful for form submission."},onTimezoneChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(detail: TimepickerTimezoneChangeDetail) => void",signature:{arguments:[{type:{name:"TimepickerTimezoneChangeDetail"},name:"detail"}],return:{name:"void"}}},description:"Callback fired when the timezone changes."},onValueChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(detail: TimepickerValueChangeDetail) => void",signature:{arguments:[{type:{name:"TimepickerValueChangeDetail"},name:"detail"}],return:{name:"void"}}},description:"Callback fired when the value changes."},readOnly:{required:!1,tsType:{name:"boolean"},description:"Whether the component is readonly."},required:{required:!1,tsType:{name:"boolean"},description:"Whether the component is required."},timezone:{required:!1,tsType:{name:"literal",value:"`${TIMEZONE}`"},description:"The controlled selected timezone."},timezones:{required:!1,tsType:{name:"union",raw:"Timezone[] | TimezonesPreset",elements:[{name:"Array",elements:[{name:"literal",value:"`${TIMEZONE}`"}],raw:"Timezone[]"},{name:"literal",value:"`${TIMEZONES_PRESET}`"}]},description:"A specific or preset list of timezone to display in the selector."},value:{required:!1,tsType:{name:"string"},description:"The controlled timepicker value."},withSeconds:{required:!1,tsType:{name:"boolean"},description:"Whether the time input allows seconds selection."},children:{required:!0,tsType:{name:"ReactNode"},description:""}}};const Ve="_timepicker_1pbjs_2",We={timepicker:Ve},N=T.forwardRef(({children:e,className:t,defaultValue:a,disabled:l,i18n:m,id:s,invalid:C,locale:h,name:y,onTimezoneChange:b,onValueChange:p,readOnly:v,required:z,timezone:U,timezones:g,value:u,withSeconds:w,...F},c)=>{const k=ye();return f.jsx(Fe,{defaultValue:a,disabled:l,i18n:m,id:s||(k==null?void 0:k.id),invalid:C||(k==null?void 0:k.invalid),locale:h,name:y,onTimezoneChange:b,onValueChange:p,readOnly:v,required:z,timezone:U,timezones:g,value:u,withSeconds:w,children:f.jsx("div",{className:ze(We.timepicker,t),"data-ods":"timepicker",ref:c,role:"group",...F,children:e})})});N.displayName="Timepicker";N.__docgenInfo={description:"",methods:[],displayName:"Timepicker",props:{defaultValue:{required:!1,tsType:{name:"string"},description:"The initial time value. Use when you don't need to control the value of the timepicker."},disabled:{required:!1,tsType:{name:"boolean"},description:"Whether the component is disabled."},i18n:{required:!1,tsType:{name:"Partial",elements:[{name:"Record",elements:[{name:"TIMEPICKER_I18N"},{name:"string"}],raw:"Record<TIMEPICKER_I18N, string>"}],raw:"Partial<Record<TIMEPICKER_I18N, string>>"},description:"Internal translations override."},id:{required:!1,tsType:{name:"string"},description:"The field id."},invalid:{required:!1,tsType:{name:"boolean"},description:"Whether the component is in error state."},locale:{required:!1,tsType:{name:"literal",value:"`${LOCALE}`"},description:"The locale used for the translation of the internal elements."},name:{required:!1,tsType:{name:"string"},description:"The name of the form element. Useful for form submission."},onTimezoneChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(detail: TimepickerTimezoneChangeDetail) => void",signature:{arguments:[{type:{name:"TimepickerTimezoneChangeDetail"},name:"detail"}],return:{name:"void"}}},description:"Callback fired when the timezone changes."},onValueChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(detail: TimepickerValueChangeDetail) => void",signature:{arguments:[{type:{name:"TimepickerValueChangeDetail"},name:"detail"}],return:{name:"void"}}},description:"Callback fired when the value changes."},readOnly:{required:!1,tsType:{name:"boolean"},description:"Whether the component is readonly."},required:{required:!1,tsType:{name:"boolean"},description:"Whether the component is required."},timezone:{required:!1,tsType:{name:"literal",value:"`${TIMEZONE}`"},description:"The controlled selected timezone."},timezones:{required:!1,tsType:{name:"union",raw:"Timezone[] | TimezonesPreset",elements:[{name:"Array",elements:[{name:"literal",value:"`${TIMEZONE}`"}],raw:"Timezone[]"},{name:"literal",value:"`${TIMEZONES_PRESET}`"}]},description:"A specific or preset list of timezone to display in the selector."},value:{required:!1,tsType:{name:"string"},description:"The controlled timepicker value."},withSeconds:{required:!1,tsType:{name:"boolean"},description:"Whether the time input allows seconds selection."}},composes:["Omit"]};const n=T.forwardRef(({children:e,className:t,...a},l)=>{const{currentTimezone:m,defaultValue:s,disabled:C,id:h,invalid:y,name:b,onValueChange:p,readOnly:v,required:z,value:U,withSeconds:g}=Le(),u=ye();function w(F){const c=F.currentTarget.value;p&&p({timezone:m,value:c})}return f.jsx(_e,{"aria-labelledby":u==null?void 0:u.labelId,className:t,"data-ods":"timepicker-control",ref:l,...a,defaultValue:s,disabled:C,id:h,invalid:y,onChange:w,readOnly:v,required:z,name:b,step:g?1:void 0,type:xe.time,value:U})});n.displayName="TimepickerControl";n.__docgenInfo={description:"",methods:[],displayName:"TimepickerControl",composes:["TimepickerInputProp"]};var Ee=(e=>(e.timezoneSelect="timepicker.timezone.select",e))(Ee||{});const Ne={"timepicker.timezone.select":{[d.de]:"Zeitzone auswählen",[d.en]:"Select a timezone",[d.es]:"Seleccione una franja horaria",[d.fr]:"Sélectionner un fuseau horaire",[d.it]:"Seleziona un fuso orario",[d.nl]:"Selecteer een tijdzone",[d.pl]:"Wybierz strefę czasową",[d.pt]:"Selecionar um fuso horário"}},$={"timepicker-timezone-list":"_timepicker-timezone-list_xj56c_2"},o=T.forwardRef(({children:e,className:t,...a},l)=>{const m=T.useId(),{currentTimezone:s,disabled:C,i18n:h,invalid:y,locale:b,onTimezoneChange:p,readOnly:v,required:z,setCurrentTimezone:U,timezones:g}=Le(),{translate:u}=Oe(Ne,b,h),w=T.useMemo(()=>Ue(g).map(c=>({label:c,value:c})),[g]);function F({value:c}){U(c[0]),p&&p({value:c[0]})}return f.jsxs(qe,{className:ze($["timepicker-timezone-list"],t),"data-ods":"timepicker-timezone-list",disabled:C,invalid:y,items:w,readOnly:v,required:z,ref:l,onValueChange:F,value:[s||W],...a,children:[f.jsx(Re,{"aria-label":u(Ee.timezoneSelect),"aria-labelledby":"",className:$["timepicker-timezone__control"],id:m}),f.jsx(Ie,{})]})});o.displayName="TimepickerTimezoneList";o.__docgenInfo={description:"",methods:[],displayName:"TimepickerTimezoneList",composes:["Omit"]};const i=Object.assign(N,{Control:n,TimezoneList:o}),$e={argTypes:Ae(["defaultValue","i18n","id","locale","name","onTimezoneChange","onValueChange","required","timezone","timezones","value"]),component:i,subcomponents:{TimepickerControl:n,TimepickerTimezoneList:o},title:"React Components/Timepicker"},E={render:e=>r.createElement(i,{disabled:e.disabled,invalid:e.invalid,readOnly:e.readOnly,withSeconds:e.withSeconds},r.createElement(n,null),e.withTimezones&&r.createElement(o,null)),argTypes:Pe({disabled:{table:{category:L.general},control:{type:"boolean"}},invalid:{table:{category:L.general},control:"boolean"},readOnly:{table:{category:L.general},control:"boolean"},withSeconds:{table:{category:L.general,type:{summary:"boolean"}},control:"boolean"},withTimezones:{table:{category:L.general,type:{summary:"boolean"}},control:"boolean"}})},S={globals:{imports:"import { FormField, FormFieldLabel, Timepicker, TimepickerControl, TimepickerTimezoneList } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>r.createElement(be,null,r.createElement(ve,null,"Starting time:"),r.createElement(i,{withSeconds:!0},r.createElement(n,null),r.createElement(o,null)))},_={globals:{imports:"import { Timepicker, TimepickerControl } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>r.createElement(i,null,r.createElement(n,null))},x={decorators:[e=>r.createElement("div",{style:{display:"flex",flexFlow:"column",gap:"8px"}},e())],globals:{imports:"import { Timepicker, TimepickerControl, TimepickerTimezoneList } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>r.createElement(r.Fragment,null,r.createElement(i,{disabled:!0},r.createElement(n,null)),r.createElement(i,{disabled:!0},r.createElement(n,null),r.createElement(o,null)))},O={globals:{imports:"import { FormField, FormFieldLabel, Timepicker, TimepickerControl, TimepickerTimezoneList } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>r.createElement(be,null,r.createElement(ve,null,"Timepicker:"),r.createElement(i,null,r.createElement(n,null)))},q={tags:["!dev"],parameters:{layout:"centered"},render:({})=>r.createElement(i,{defaultValue:"12:00"},r.createElement(n,null),r.createElement(o,null))},R={decorators:[e=>r.createElement("div",{style:{display:"flex",flexFlow:"column",gap:"8px"}},e())],globals:{imports:"import { Timepicker, TimepickerControl, TimepickerTimezoneList } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>r.createElement(r.Fragment,null,r.createElement(i,{readOnly:!0},r.createElement(n,null)),r.createElement(i,{readOnly:!0},r.createElement(n,null),r.createElement(o,null)))},I={decorators:[e=>r.createElement("div",{style:{display:"flex",flexFlow:"column",gap:"8px"}},e())],globals:{imports:"import { Timepicker, TimepickerControl, TimepickerTimezoneList } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>r.createElement(r.Fragment,null,r.createElement("span",null,"All timezones"),r.createElement(i,null,r.createElement(n,null),r.createElement(o,null)),r.createElement("span",null,"Subset of timezone"),r.createElement(i,{timezones:["UTC-10","UTC+0","UTC+10"]},r.createElement(n,null),r.createElement(o,null)))},A={decorators:[e=>r.createElement("div",{style:{display:"flex",flexFlow:"column",gap:"8px"}},e())],globals:{imports:"import { Timepicker, TimepickerControl, TimepickerTimezoneList } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>r.createElement(r.Fragment,null,r.createElement(i,{withSeconds:!0},r.createElement(n,null)),r.createElement(i,{withSeconds:!0},r.createElement(n,null),r.createElement(o,null)))},P={parameters:{layout:"fullscreen"},tags:["!dev"],render:({})=>r.createElement("div",{style:{display:"flex",flexDirection:"column",gap:"12px",alignItems:"flex-start"}},r.createElement(i,null,r.createElement(n,null)),r.createElement(i,null,r.createElement(n,null),r.createElement(o,null)),r.createElement(i,{disabled:!0},r.createElement(n,null)),r.createElement(i,{readOnly:!0},r.createElement(n,null)))};var G,K,Y;E.parameters={...E.parameters,docs:{...(G=E.parameters)==null?void 0:G.docs,source:{originalSource:`{
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
}`,...(Y=(K=E.parameters)==null?void 0:K.docs)==null?void 0:Y.source}}};var B,H,J;S.parameters={...S.parameters,docs:{...(B=S.parameters)==null?void 0:B.docs,source:{originalSource:`{
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
}`,...(J=(H=S.parameters)==null?void 0:H.docs)==null?void 0:J.source}}};var Q,X,M;_.parameters={..._.parameters,docs:{...(Q=_.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  globals: {
    imports: \`import { Timepicker, TimepickerControl } from '@ovhcloud/ods-react';\`
  },
  tags: ['!dev'],
  render: ({}) => <Timepicker>
      <TimepickerControl />
    </Timepicker>
}`,...(M=(X=_.parameters)==null?void 0:X.docs)==null?void 0:M.source}}};var Z,ee,re;x.parameters={...x.parameters,docs:{...(Z=x.parameters)==null?void 0:Z.docs,source:{originalSource:`{
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
}`,...(re=(ee=x.parameters)==null?void 0:ee.docs)==null?void 0:re.source}}};var ne,ie,te;O.parameters={...O.parameters,docs:{...(ne=O.parameters)==null?void 0:ne.docs,source:{originalSource:`{
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
}`,...(te=(ie=O.parameters)==null?void 0:ie.docs)==null?void 0:te.source}}};var oe,ae,le;q.parameters={...q.parameters,docs:{...(oe=q.parameters)==null?void 0:oe.docs,source:{originalSource:`{
  tags: ['!dev'],
  parameters: {
    layout: 'centered'
  },
  render: ({}) => <Timepicker defaultValue="12:00">
      <TimepickerControl />

      <TimepickerTimezoneList />
    </Timepicker>
}`,...(le=(ae=q.parameters)==null?void 0:ae.docs)==null?void 0:le.source}}};var se,me,ce;R.parameters={...R.parameters,docs:{...(se=R.parameters)==null?void 0:se.docs,source:{originalSource:`{
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
}`,...(ce=(me=R.parameters)==null?void 0:me.docs)==null?void 0:ce.source}}};var de,pe,ue;I.parameters={...I.parameters,docs:{...(de=I.parameters)==null?void 0:de.docs,source:{originalSource:`{
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
}`,...(ue=(pe=I.parameters)==null?void 0:pe.docs)==null?void 0:ue.source}}};var Te,fe,ge;A.parameters={...A.parameters,docs:{...(Te=A.parameters)==null?void 0:Te.docs,source:{originalSource:`{
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
}`,...(ge=(fe=A.parameters)==null?void 0:fe.docs)==null?void 0:ge.source}}};var ke,Ce,he;P.parameters={...P.parameters,docs:{...(ke=P.parameters)==null?void 0:ke.docs,source:{originalSource:`{
  parameters: {
    layout: 'fullscreen'
  },
  tags: ['!dev'],
  render: ({}) => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '12px',
    alignItems: 'flex-start'
  }}>
      <Timepicker>
        <TimepickerControl />
      </Timepicker>

      <Timepicker>
        <TimepickerControl />
        <TimepickerTimezoneList />
      </Timepicker>

      <Timepicker disabled>
        <TimepickerControl />
      </Timepicker>

      <Timepicker readOnly>
        <TimepickerControl />
      </Timepicker>
    </div>
}`,...(he=(Ce=P.parameters)==null?void 0:Ce.docs)==null?void 0:he.source}}};const Ge=["Demo","AccessibilityLabel","Default","Disabled","InFormField","Overview","Readonly","TimezoneList","WithSeconds","ThemeGenerator"],er=Object.freeze(Object.defineProperty({__proto__:null,AccessibilityLabel:S,Default:_,Demo:E,Disabled:x,InFormField:O,Overview:q,Readonly:R,ThemeGenerator:P,TimezoneList:I,WithSeconds:A,__namedExportsOrder:Ge,default:$e},Symbol.toStringTag,{value:"Module"}));export{S as A,_ as D,O as I,q as O,R,er as T,A as W,x as a,I as b};
