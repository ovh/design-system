import{r as T,e}from"./index-jIWwRBLr.js";import{u as Ue,F as we,a as Ee}from"./index-B0M5RXeR.js";import{j as f}from"./jsx-runtime-Cfl8ynUo.js";import{c as Fe}from"./index-CqY9YpN0.js";import{u as qe}from"./context-C_-r2uoG.js";import{I as Re,b as Ae}from"./Input-CsaVjqar.js";import{L as d,u as Ie}from"./useI18n-C0NLVYPv.js";import{b as Pe,S as je,a as De}from"./index-onrz60cw.js";import{e as Ve,o as We,C as F}from"./controls-BtiQQn1l.js";var V=(r=>(r.all="all",r))(V||{});Object.freeze(Object.values(V));var W=(r=>(r.UTC_12="UTC-12",r.UTC_11="UTC-11",r.UTC_10="UTC-10",r.UTC_9="UTC-9",r.UTC_8="UTC-8",r.UTC_7="UTC-7",r.UTC_6="UTC-6",r.UTC_5="UTC-5",r.UTC_4="UTC-4",r.UTC_3="UTC-3",r.UTC_2="UTC-2",r.UTC_1="UTC-1",r.UTC="UTC+0",r.UTC1="UTC+1",r.UTC2="UTC+2",r.UTC3="UTC+3",r.UTC4="UTC+4",r.UTC5="UTC+5",r.UTC6="UTC+6",r.UTC7="UTC+7",r.UTC8="UTC+8",r.UTC9="UTC+9",r.UTC10="UTC+10",r.UTC11="UTC+11",r.UTC12="UTC+12",r))(W||{});const D=Object.freeze(Object.values(W)),N=W.UTC;function Ne(){const r=new Date().getTimezoneOffset()/60*-1;return r>=0?`+${r}`:r.toString()}function $e(r,o){if(r&&D.indexOf(r)>=0)return r;const a=Ne(),l=Le(o),m=o===V.all?N:l[0];return l.find(s=>s.indexOf(a)>=0&&D.indexOf(s)>=0)||m}function Le(r){if(!r||r===V.all)return D;const o=r.filter(a=>D.indexOf(a)>=0);return o.length?o:[N]}const Se=T.createContext(void 0);function _e({children:r,timezone:o,timezones:a,...l}){const[m,s]=T.useState($e(o,a));return f.jsx(Se.Provider,{value:{...l,currentTimezone:m,setCurrentTimezone:s,timezones:a},children:r})}function xe(){return qe(Se)}_e.__docgenInfo={description:"",methods:[],displayName:"TimepickerProvider",props:{defaultValue:{required:!1,tsType:{name:"string"},description:"The initial time value. Use when you don't need to control the value of the timepicker."},disabled:{required:!1,tsType:{name:"boolean"},description:"Whether the component is disabled."},i18n:{required:!1,tsType:{name:"Partial",elements:[{name:"Record",elements:[{name:"TIMEPICKER_I18N"},{name:"string"}],raw:"Record<TIMEPICKER_I18N, string>"}],raw:"Partial<Record<TIMEPICKER_I18N, string>>"},description:"Internal translations override."},id:{required:!1,tsType:{name:"string"},description:"The field id."},invalid:{required:!1,tsType:{name:"boolean"},description:"Whether the component is in error state."},locale:{required:!1,tsType:{name:"literal",value:"`${LOCALE}`"},description:"The locale used for the translation of the internal elements."},name:{required:!1,tsType:{name:"string"},description:"The name of the form element. Useful for form submission."},onTimezoneChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(detail: TimepickerTimezoneChangeDetail) => void",signature:{arguments:[{type:{name:"TimepickerTimezoneChangeDetail"},name:"detail"}],return:{name:"void"}}},description:"Callback fired when the timezone changes."},onValueChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(detail: TimepickerValueChangeDetail) => void",signature:{arguments:[{type:{name:"TimepickerValueChangeDetail"},name:"detail"}],return:{name:"void"}}},description:"Callback fired when the value changes."},readOnly:{required:!1,tsType:{name:"boolean"},description:"Whether the component is readonly."},required:{required:!1,tsType:{name:"boolean"},description:"Whether the component is required."},timezone:{required:!1,tsType:{name:"literal",value:"`${TIMEZONE}`"},description:"The controlled selected timezone."},timezones:{required:!1,tsType:{name:"union",raw:"Timezone[] | TimezonesPreset",elements:[{name:"Array",elements:[{name:"literal",value:"`${TIMEZONE}`"}],raw:"Timezone[]"},{name:"literal",value:"`${TIMEZONES_PRESET}`"}]},description:"A specific or preset list of timezone to display in the selector."},value:{required:!1,tsType:{name:"string"},description:"The controlled timepicker value."},withSeconds:{required:!1,tsType:{name:"boolean"},description:"Whether the time input allows seconds selection."},children:{required:!0,tsType:{name:"ReactNode"},description:""}}};const Ge="_timepicker_1pbjs_2",Ke={timepicker:Ge},$=T.forwardRef(({children:r,className:o,defaultValue:a,disabled:l,i18n:m,id:s,invalid:C,locale:h,name:y,onTimezoneChange:v,onValueChange:p,readOnly:b,required:z,timezone:U,timezones:g,value:u,withSeconds:w,...E},c)=>{const k=Ue();return f.jsx(_e,{defaultValue:a,disabled:l,i18n:m,id:s||(k==null?void 0:k.id),invalid:C||(k==null?void 0:k.invalid),locale:h,name:y,onTimezoneChange:v,onValueChange:p,readOnly:b,required:z,timezone:U,timezones:g,value:u,withSeconds:w,children:f.jsx("div",{className:Fe(Ke.timepicker,o),"data-ods":"timepicker",ref:c,role:"group",...E,children:r})})});$.displayName="Timepicker";$.__docgenInfo={description:"",methods:[],displayName:"Timepicker",props:{defaultValue:{required:!1,tsType:{name:"string"},description:"The initial time value. Use when you don't need to control the value of the timepicker."},disabled:{required:!1,tsType:{name:"boolean"},description:"Whether the component is disabled."},i18n:{required:!1,tsType:{name:"Partial",elements:[{name:"Record",elements:[{name:"TIMEPICKER_I18N"},{name:"string"}],raw:"Record<TIMEPICKER_I18N, string>"}],raw:"Partial<Record<TIMEPICKER_I18N, string>>"},description:"Internal translations override."},id:{required:!1,tsType:{name:"string"},description:"The field id."},invalid:{required:!1,tsType:{name:"boolean"},description:"Whether the component is in error state."},locale:{required:!1,tsType:{name:"literal",value:"`${LOCALE}`"},description:"The locale used for the translation of the internal elements."},name:{required:!1,tsType:{name:"string"},description:"The name of the form element. Useful for form submission."},onTimezoneChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(detail: TimepickerTimezoneChangeDetail) => void",signature:{arguments:[{type:{name:"TimepickerTimezoneChangeDetail"},name:"detail"}],return:{name:"void"}}},description:"Callback fired when the timezone changes."},onValueChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(detail: TimepickerValueChangeDetail) => void",signature:{arguments:[{type:{name:"TimepickerValueChangeDetail"},name:"detail"}],return:{name:"void"}}},description:"Callback fired when the value changes."},readOnly:{required:!1,tsType:{name:"boolean"},description:"Whether the component is readonly."},required:{required:!1,tsType:{name:"boolean"},description:"Whether the component is required."},timezone:{required:!1,tsType:{name:"literal",value:"`${TIMEZONE}`"},description:"The controlled selected timezone."},timezones:{required:!1,tsType:{name:"union",raw:"Timezone[] | TimezonesPreset",elements:[{name:"Array",elements:[{name:"literal",value:"`${TIMEZONE}`"}],raw:"Timezone[]"},{name:"literal",value:"`${TIMEZONES_PRESET}`"}]},description:"A specific or preset list of timezone to display in the selector."},value:{required:!1,tsType:{name:"string"},description:"The controlled timepicker value."},withSeconds:{required:!1,tsType:{name:"boolean"},description:"Whether the time input allows seconds selection."}},composes:["Omit"]};const n=T.forwardRef(({children:r,className:o,...a},l)=>{const{currentTimezone:m,defaultValue:s,disabled:C,id:h,invalid:y,name:v,onValueChange:p,readOnly:b,required:z,value:U,withSeconds:g}=xe(),u=Ue();function w(E){const c=E.currentTarget.value;p&&p({timezone:m,value:c})}return f.jsx(Re,{"aria-labelledby":u==null?void 0:u.labelId,className:o,"data-ods":"timepicker-control",ref:l,...a,defaultValue:s,disabled:C,id:h,invalid:y,onChange:w,readOnly:b,required:z,name:v,step:g?1:void 0,type:Ae.time,value:U})});n.displayName="TimepickerControl";n.__docgenInfo={description:"",methods:[],displayName:"TimepickerControl",composes:["TimepickerInputProp"]};var Oe=(r=>(r.timezoneSelect="timepicker.timezone.select",r))(Oe||{});const Ye={"timepicker.timezone.select":{[d.de]:"Zeitzone auswählen",[d.en]:"Select a timezone",[d.es]:"Seleccione una franja horaria",[d.fr]:"Sélectionner un fuseau horaire",[d.it]:"Seleziona un fuso orario",[d.nl]:"Selecteer een tijdzone",[d.pl]:"Wybierz strefę czasową",[d.pt]:"Selecionar um fuso horário"}},G={"timepicker-timezone-list":"_timepicker-timezone-list_xj56c_2"},t=T.forwardRef(({children:r,className:o,...a},l)=>{const m=T.useId(),{currentTimezone:s,disabled:C,i18n:h,invalid:y,locale:v,onTimezoneChange:p,readOnly:b,required:z,setCurrentTimezone:U,timezones:g}=xe(),{translate:u}=Ie(Ye,v,h),w=T.useMemo(()=>Le(g).map(c=>({label:c,value:c})),[g]);function E({value:c}){U(c[0]),p&&p({value:c[0]})}return f.jsxs(Pe,{className:Fe(G["timepicker-timezone-list"],o),"data-ods":"timepicker-timezone-list",disabled:C,invalid:y,items:w,readOnly:b,required:z,ref:l,onValueChange:E,value:[s||N],...a,children:[f.jsx(je,{"aria-label":u(Oe.timezoneSelect),"aria-labelledby":"",className:G["timepicker-timezone__control"],id:m}),f.jsx(De,{})]})});t.displayName="TimepickerTimezoneList";t.__docgenInfo={description:"",methods:[],displayName:"TimepickerTimezoneList",composes:["Omit"]};const i=Object.assign($,{Control:n,TimezoneList:t}),Be={argTypes:Ve(["defaultValue","i18n","id","locale","name","onTimezoneChange","onValueChange","required","timezone","timezones","value"]),component:i,subcomponents:{TimepickerControl:n,TimepickerTimezoneList:t},title:"React Components/Timepicker"},L={render:r=>e.createElement(i,{disabled:r.disabled,invalid:r.invalid,readOnly:r.readOnly,withSeconds:r.withSeconds},e.createElement(n,null),r.withTimezones&&e.createElement(t,null)),argTypes:We({disabled:{table:{category:F.general},control:{type:"boolean"}},invalid:{table:{category:F.general},control:"boolean"},readOnly:{table:{category:F.general},control:"boolean"},withSeconds:{table:{category:F.general,type:{summary:"boolean"}},control:"boolean"},withTimezones:{table:{category:F.general,type:{summary:"boolean"}},control:"boolean"}})},S={globals:{imports:"import { FormField, FormFieldLabel, Timepicker, TimepickerControl, TimepickerTimezoneList } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>e.createElement(we,null,e.createElement(Ee,null,"Starting time:"),e.createElement(i,{withSeconds:!0},e.createElement(n,null),e.createElement(t,null)))},_={tags:["!dev"],render:({})=>e.createElement(i,{defaultValue:"12:00"},e.createElement(n,null),e.createElement(t,null))},x={globals:{imports:"import { Timepicker, TimepickerControl } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>e.createElement(i,null,e.createElement(n,null))},O={decorators:[r=>e.createElement("div",{style:{display:"flex",flexFlow:"column",gap:"8px"}},r())],globals:{imports:"import { Timepicker, TimepickerControl, TimepickerTimezoneList } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>e.createElement(e.Fragment,null,e.createElement(i,{disabled:!0},e.createElement(n,null)),e.createElement(i,{disabled:!0},e.createElement(n,null),e.createElement(t,null)))},q={globals:{imports:"import { FormField, FormFieldLabel, Timepicker, TimepickerControl, TimepickerTimezoneList } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>e.createElement(we,null,e.createElement(Ee,null,"Timepicker:"),e.createElement(i,null,e.createElement(n,null)))},R={tags:["!dev"],parameters:{layout:"centered"},render:({})=>e.createElement(i,{defaultValue:"12:00"},e.createElement(n,null),e.createElement(t,null))},A={decorators:[r=>e.createElement("div",{style:{display:"flex",flexFlow:"column",gap:"8px"}},r())],globals:{imports:"import { Timepicker, TimepickerControl, TimepickerTimezoneList } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>e.createElement(e.Fragment,null,e.createElement(i,{readOnly:!0},e.createElement(n,null)),e.createElement(i,{readOnly:!0},e.createElement(n,null),e.createElement(t,null)))},I={decorators:[r=>e.createElement("div",{style:{display:"flex",flexFlow:"column",gap:"8px"}},r())],globals:{imports:"import { Timepicker, TimepickerControl, TimepickerTimezoneList } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>e.createElement(e.Fragment,null,e.createElement("span",null,"All timezones"),e.createElement(i,null,e.createElement(n,null),e.createElement(t,null)),e.createElement("span",null,"Subset of timezone"),e.createElement(i,{timezones:["UTC-10","UTC+0","UTC+10"]},e.createElement(n,null),e.createElement(t,null)))},P={decorators:[r=>e.createElement("div",{style:{display:"flex",flexFlow:"column",gap:"8px"}},r())],globals:{imports:"import { Timepicker, TimepickerControl, TimepickerTimezoneList } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>e.createElement(e.Fragment,null,e.createElement(i,{withSeconds:!0},e.createElement(n,null)),e.createElement(i,{withSeconds:!0},e.createElement(n,null),e.createElement(t,null)))},j={parameters:{layout:"fullscreen"},tags:["!dev"],render:({})=>e.createElement("div",{style:{display:"flex",flexDirection:"column",gap:"12px",alignItems:"flex-start"}},e.createElement(i,null,e.createElement(n,null)),e.createElement(i,null,e.createElement(n,null),e.createElement(t,null)),e.createElement(i,{disabled:!0},e.createElement(n,null)),e.createElement(i,{readOnly:!0},e.createElement(n,null)))};var K,Y,B;L.parameters={...L.parameters,docs:{...(K=L.parameters)==null?void 0:K.docs,source:{originalSource:`{
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
}`,...(B=(Y=L.parameters)==null?void 0:Y.docs)==null?void 0:B.source}}};var H,J,Q;S.parameters={...S.parameters,docs:{...(H=S.parameters)==null?void 0:H.docs,source:{originalSource:`{
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
}`,...(Q=(J=S.parameters)==null?void 0:J.docs)==null?void 0:Q.source}}};var X,M,Z;_.parameters={..._.parameters,docs:{...(X=_.parameters)==null?void 0:X.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: ({}) => <Timepicker defaultValue="12:00">
      <TimepickerControl />

      <TimepickerTimezoneList />
    </Timepicker>
}`,...(Z=(M=_.parameters)==null?void 0:M.docs)==null?void 0:Z.source}}};var ee,re,ne;x.parameters={...x.parameters,docs:{...(ee=x.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  globals: {
    imports: \`import { Timepicker, TimepickerControl } from '@ovhcloud/ods-react';\`
  },
  tags: ['!dev'],
  render: ({}) => <Timepicker>
      <TimepickerControl />
    </Timepicker>
}`,...(ne=(re=x.parameters)==null?void 0:re.docs)==null?void 0:ne.source}}};var ie,te,oe;O.parameters={...O.parameters,docs:{...(ie=O.parameters)==null?void 0:ie.docs,source:{originalSource:`{
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
}`,...(oe=(te=O.parameters)==null?void 0:te.docs)==null?void 0:oe.source}}};var ae,le,se;q.parameters={...q.parameters,docs:{...(ae=q.parameters)==null?void 0:ae.docs,source:{originalSource:`{
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
}`,...(se=(le=q.parameters)==null?void 0:le.docs)==null?void 0:se.source}}};var me,ce,de;R.parameters={...R.parameters,docs:{...(me=R.parameters)==null?void 0:me.docs,source:{originalSource:`{
  tags: ['!dev'],
  parameters: {
    layout: 'centered'
  },
  render: ({}) => <Timepicker defaultValue="12:00">
      <TimepickerControl />

      <TimepickerTimezoneList />
    </Timepicker>
}`,...(de=(ce=R.parameters)==null?void 0:ce.docs)==null?void 0:de.source}}};var pe,ue,Te;A.parameters={...A.parameters,docs:{...(pe=A.parameters)==null?void 0:pe.docs,source:{originalSource:`{
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
}`,...(Te=(ue=A.parameters)==null?void 0:ue.docs)==null?void 0:Te.source}}};var fe,ge,ke;I.parameters={...I.parameters,docs:{...(fe=I.parameters)==null?void 0:fe.docs,source:{originalSource:`{
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
}`,...(ke=(ge=I.parameters)==null?void 0:ge.docs)==null?void 0:ke.source}}};var Ce,he,ye;P.parameters={...P.parameters,docs:{...(Ce=P.parameters)==null?void 0:Ce.docs,source:{originalSource:`{
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
}`,...(ye=(he=P.parameters)==null?void 0:he.docs)==null?void 0:ye.source}}};var ve,be,ze;j.parameters={...j.parameters,docs:{...(ve=j.parameters)==null?void 0:ve.docs,source:{originalSource:`{
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
}`,...(ze=(be=j.parameters)==null?void 0:be.docs)==null?void 0:ze.source}}};const He=["Demo","AccessibilityLabel","AnatomyTech","Default","Disabled","InFormField","Overview","Readonly","TimezoneList","WithSeconds","ThemeGenerator"],tr=Object.freeze(Object.defineProperty({__proto__:null,AccessibilityLabel:S,AnatomyTech:_,Default:x,Demo:L,Disabled:O,InFormField:q,Overview:R,Readonly:A,ThemeGenerator:j,TimezoneList:I,WithSeconds:P,__namedExportsOrder:He,default:Be},Symbol.toStringTag,{value:"Module"}));export{S as A,x as D,q as I,R as O,A as R,tr as T,P as W,_ as a,O as b,I as c};
