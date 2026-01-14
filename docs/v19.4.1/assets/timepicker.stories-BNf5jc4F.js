import{r as T,e as r}from"./index-jIWwRBLr.js";import{u as he,F as ye,a as be}from"./FormFieldLabel-f_nl6yro.js";import{j as f}from"./jsx-runtime-Cfl8ynUo.js";import{c as ve}from"./index-CqY9YpN0.js";import{u as Le}from"./context-C_-r2uoG.js";import{I as Se,b as _e}from"./Input-Iv7SWGNL.js";import{L as d,u as xe}from"./useI18n-C0NLVYPv.js";import{b as Oe,S as qe,a as Re}from"./SelectControl-BHkJQAXK.js";import{e as Ie,o as Ae,C as E}from"./controls-BtiQQn1l.js";var j=(e=>(e.all="all",e))(j||{});Object.freeze(Object.values(j));var V=(e=>(e.UTC_12="UTC-12",e.UTC_11="UTC-11",e.UTC_10="UTC-10",e.UTC_9="UTC-9",e.UTC_8="UTC-8",e.UTC_7="UTC-7",e.UTC_6="UTC-6",e.UTC_5="UTC-5",e.UTC_4="UTC-4",e.UTC_3="UTC-3",e.UTC_2="UTC-2",e.UTC_1="UTC-1",e.UTC="UTC+0",e.UTC1="UTC+1",e.UTC2="UTC+2",e.UTC3="UTC+3",e.UTC4="UTC+4",e.UTC5="UTC+5",e.UTC6="UTC+6",e.UTC7="UTC+7",e.UTC8="UTC+8",e.UTC9="UTC+9",e.UTC10="UTC+10",e.UTC11="UTC+11",e.UTC12="UTC+12",e))(V||{});const D=Object.freeze(Object.values(V)),W=V.UTC;function Pe(){const e=new Date().getTimezoneOffset()/60*-1;return e>=0?`+${e}`:e.toString()}function De(e,t){if(e&&D.indexOf(e)>=0)return e;const o=Pe(),l=ze(t),m=t===j.all?W:l[0];return l.find(s=>s.indexOf(o)>=0&&D.indexOf(s)>=0)||m}function ze(e){if(!e||e===j.all)return D;const t=e.filter(o=>D.indexOf(o)>=0);return t.length?t:[W]}const Ue=T.createContext(void 0);function we({children:e,timezone:t,timezones:o,...l}){const[m,s]=T.useState(De(t,o));return f.jsx(Ue.Provider,{value:{...l,currentTimezone:m,setCurrentTimezone:s,timezones:o},children:e})}function Fe(){return Le(Ue)}we.__docgenInfo={description:"",methods:[],displayName:"TimepickerProvider",props:{defaultValue:{required:!1,tsType:{name:"string"},description:"The initial time value. Use when you don't need to control the value of the timepicker."},disabled:{required:!1,tsType:{name:"boolean"},description:"Whether the component is disabled."},i18n:{required:!1,tsType:{name:"Partial",elements:[{name:"Record",elements:[{name:"TIMEPICKER_I18N"},{name:"string"}],raw:"Record<TIMEPICKER_I18N, string>"}],raw:"Partial<Record<TIMEPICKER_I18N, string>>"},description:"Internal translations override."},id:{required:!1,tsType:{name:"string"},description:"The field id."},invalid:{required:!1,tsType:{name:"boolean"},description:"Whether the component is in error state."},locale:{required:!1,tsType:{name:"literal",value:"`${LOCALE}`"},description:"The locale used for the translation of the internal elements."},name:{required:!1,tsType:{name:"string"},description:"The name of the form element. Useful for form submission."},onTimezoneChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(detail: TimepickerTimezoneChangeDetail) => void",signature:{arguments:[{type:{name:"TimepickerTimezoneChangeDetail"},name:"detail"}],return:{name:"void"}}},description:"Callback fired when the timezone changes."},onValueChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(detail: TimepickerValueChangeDetail) => void",signature:{arguments:[{type:{name:"TimepickerValueChangeDetail"},name:"detail"}],return:{name:"void"}}},description:"Callback fired when the value changes."},readOnly:{required:!1,tsType:{name:"boolean"},description:"Whether the component is readonly."},required:{required:!1,tsType:{name:"boolean"},description:"Whether the component is required."},timezone:{required:!1,tsType:{name:"literal",value:"`${TIMEZONE}`"},description:"The controlled selected timezone."},timezones:{required:!1,tsType:{name:"union",raw:"Timezone[] | TimezonesPreset",elements:[{name:"Array",elements:[{name:"literal",value:"`${TIMEZONE}`"}],raw:"Timezone[]"},{name:"literal",value:"`${TIMEZONES_PRESET}`"}]},description:"A specific or preset list of timezone to display in the selector."},value:{required:!1,tsType:{name:"string"},description:"The controlled timepicker value."},withSeconds:{required:!1,tsType:{name:"boolean"},description:"Whether the time input allows seconds selection."},children:{required:!0,tsType:{name:"ReactNode"},description:""}}};const je="_timepicker_1pbjs_2",Ve={timepicker:je},n=T.forwardRef(({children:e,className:t,defaultValue:o,disabled:l,i18n:m,id:s,invalid:C,locale:h,name:y,onTimezoneChange:b,onValueChange:p,readOnly:v,required:z,timezone:U,timezones:g,value:u,withSeconds:w,...F},c)=>{const k=he();return f.jsx(we,{defaultValue:o,disabled:l,i18n:m,id:s||(k==null?void 0:k.id),invalid:C||(k==null?void 0:k.invalid),locale:h,name:y,onTimezoneChange:b,onValueChange:p,readOnly:v,required:z,timezone:U,timezones:g,value:u,withSeconds:w,children:f.jsx("div",{className:ve(Ve.timepicker,t),"data-ods":"timepicker",ref:c,role:"group",...F,children:e})})});n.displayName="Timepicker";n.__docgenInfo={description:"",methods:[],displayName:"Timepicker",props:{defaultValue:{required:!1,tsType:{name:"string"},description:"The initial time value. Use when you don't need to control the value of the timepicker."},disabled:{required:!1,tsType:{name:"boolean"},description:"Whether the component is disabled."},i18n:{required:!1,tsType:{name:"Partial",elements:[{name:"Record",elements:[{name:"TIMEPICKER_I18N"},{name:"string"}],raw:"Record<TIMEPICKER_I18N, string>"}],raw:"Partial<Record<TIMEPICKER_I18N, string>>"},description:"Internal translations override."},id:{required:!1,tsType:{name:"string"},description:"The field id."},invalid:{required:!1,tsType:{name:"boolean"},description:"Whether the component is in error state."},locale:{required:!1,tsType:{name:"literal",value:"`${LOCALE}`"},description:"The locale used for the translation of the internal elements."},name:{required:!1,tsType:{name:"string"},description:"The name of the form element. Useful for form submission."},onTimezoneChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(detail: TimepickerTimezoneChangeDetail) => void",signature:{arguments:[{type:{name:"TimepickerTimezoneChangeDetail"},name:"detail"}],return:{name:"void"}}},description:"Callback fired when the timezone changes."},onValueChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(detail: TimepickerValueChangeDetail) => void",signature:{arguments:[{type:{name:"TimepickerValueChangeDetail"},name:"detail"}],return:{name:"void"}}},description:"Callback fired when the value changes."},readOnly:{required:!1,tsType:{name:"boolean"},description:"Whether the component is readonly."},required:{required:!1,tsType:{name:"boolean"},description:"Whether the component is required."},timezone:{required:!1,tsType:{name:"literal",value:"`${TIMEZONE}`"},description:"The controlled selected timezone."},timezones:{required:!1,tsType:{name:"union",raw:"Timezone[] | TimezonesPreset",elements:[{name:"Array",elements:[{name:"literal",value:"`${TIMEZONE}`"}],raw:"Timezone[]"},{name:"literal",value:"`${TIMEZONES_PRESET}`"}]},description:"A specific or preset list of timezone to display in the selector."},value:{required:!1,tsType:{name:"string"},description:"The controlled timepicker value."},withSeconds:{required:!1,tsType:{name:"boolean"},description:"Whether the time input allows seconds selection."}},composes:["Omit"]};const i=T.forwardRef(({children:e,className:t,...o},l)=>{const{currentTimezone:m,defaultValue:s,disabled:C,id:h,invalid:y,name:b,onValueChange:p,readOnly:v,required:z,value:U,withSeconds:g}=Fe(),u=he();function w(F){const c=F.currentTarget.value;p&&p({timezone:m,value:c})}return f.jsx(Se,{"aria-labelledby":u==null?void 0:u.labelId,className:t,"data-ods":"timepicker-control",ref:l,...o,defaultValue:s,disabled:C,id:h,invalid:y,onChange:w,readOnly:v,required:z,name:b,step:g?1:void 0,type:_e.time,value:U})});i.displayName="TimepickerControl";i.__docgenInfo={description:"",methods:[],displayName:"TimepickerControl",composes:["TimepickerInputProp"]};var Ee=(e=>(e.timezoneSelect="timepicker.timezone.select",e))(Ee||{});const We={"timepicker.timezone.select":{[d.de]:"Zeitzone auswählen",[d.en]:"Select a timezone",[d.es]:"Seleccione una franja horaria",[d.fr]:"Sélectionner un fuseau horaire",[d.it]:"Seleziona un fuso orario",[d.nl]:"Selecteer een tijdzone",[d.pl]:"Wybierz strefę czasową",[d.pt]:"Selecionar um fuso horário"}},N={"timepicker-timezone-list":"_timepicker-timezone-list_xj56c_2"},a=T.forwardRef(({children:e,className:t,...o},l)=>{const m=T.useId(),{currentTimezone:s,disabled:C,i18n:h,invalid:y,locale:b,onTimezoneChange:p,readOnly:v,required:z,setCurrentTimezone:U,timezones:g}=Fe(),{translate:u}=xe(We,b,h),w=T.useMemo(()=>ze(g).map(c=>({label:c,value:c})),[g]);function F({value:c}){U(c[0]),p&&p({value:c[0]})}return f.jsxs(Oe,{className:ve(N["timepicker-timezone-list"],t),"data-ods":"timepicker-timezone-list",disabled:C,invalid:y,items:w,readOnly:v,required:z,ref:l,onValueChange:F,value:[s||W],...o,children:[f.jsx(qe,{"aria-label":u(Ee.timezoneSelect),"aria-labelledby":"",className:N["timepicker-timezone__control"],id:m}),f.jsx(Re,{})]})});a.displayName="TimepickerTimezoneList";a.__docgenInfo={description:"",methods:[],displayName:"TimepickerTimezoneList",composes:["Omit"]};const Ne={argTypes:Ie(["defaultValue","i18n","id","locale","name","onTimezoneChange","onValueChange","required","timezone","timezones","value"]),component:n,subcomponents:{TimepickerControl:i,TimepickerTimezoneList:a},title:"React Components/Timepicker"},L={render:e=>r.createElement(n,{disabled:e.disabled,invalid:e.invalid,readOnly:e.readOnly,withSeconds:e.withSeconds},r.createElement(i,null),e.withTimezones&&r.createElement(a,null)),argTypes:Ae({disabled:{table:{category:E.general},control:{type:"boolean"}},invalid:{table:{category:E.general},control:"boolean"},readOnly:{table:{category:E.general},control:"boolean"},withSeconds:{table:{category:E.general,type:{summary:"boolean"}},control:"boolean"},withTimezones:{table:{category:E.general,type:{summary:"boolean"}},control:"boolean"}})},S={globals:{imports:"import { FormField, FormFieldLabel, Timepicker, TimepickerControl, TimepickerTimezoneList } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>r.createElement(ye,null,r.createElement(be,null,"Starting time:"),r.createElement(n,{withSeconds:!0},r.createElement(i,null),r.createElement(a,null)))},_={globals:{imports:"import { Timepicker, TimepickerControl } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>r.createElement(n,null,r.createElement(i,null))},x={decorators:[e=>r.createElement("div",{style:{display:"flex",flexFlow:"column",gap:"8px"}},e())],globals:{imports:"import { Timepicker, TimepickerControl, TimepickerTimezoneList } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>r.createElement(r.Fragment,null,r.createElement(n,{disabled:!0},r.createElement(i,null)),r.createElement(n,{disabled:!0},r.createElement(i,null),r.createElement(a,null)))},O={globals:{imports:"import { FormField, FormFieldLabel, Timepicker, TimepickerControl, TimepickerTimezoneList } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>r.createElement(ye,null,r.createElement(be,null,"Timepicker:"),r.createElement(n,null,r.createElement(i,null)))},q={tags:["!dev"],parameters:{layout:"centered"},render:({})=>r.createElement(n,{defaultValue:"12:00"},r.createElement(i,null),r.createElement(a,null))},R={decorators:[e=>r.createElement("div",{style:{display:"flex",flexFlow:"column",gap:"8px"}},e())],globals:{imports:"import { Timepicker, TimepickerControl, TimepickerTimezoneList } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>r.createElement(r.Fragment,null,r.createElement(n,{readOnly:!0},r.createElement(i,null)),r.createElement(n,{readOnly:!0},r.createElement(i,null),r.createElement(a,null)))},I={decorators:[e=>r.createElement("div",{style:{display:"flex",flexFlow:"column",gap:"8px"}},e())],globals:{imports:"import { Timepicker, TimepickerControl, TimepickerTimezoneList } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>r.createElement(r.Fragment,null,r.createElement("span",null,"All timezones"),r.createElement(n,null,r.createElement(i,null),r.createElement(a,null)),r.createElement("span",null,"Subset of timezone"),r.createElement(n,{timezones:["UTC-10","UTC+0","UTC+10"]},r.createElement(i,null),r.createElement(a,null)))},A={decorators:[e=>r.createElement("div",{style:{display:"flex",flexFlow:"column",gap:"8px"}},e())],globals:{imports:"import { Timepicker, TimepickerControl, TimepickerTimezoneList } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>r.createElement(r.Fragment,null,r.createElement(n,{withSeconds:!0},r.createElement(i,null)),r.createElement(n,{withSeconds:!0},r.createElement(i,null),r.createElement(a,null)))},P={parameters:{layout:"fullscreen"},tags:["!dev"],render:({})=>r.createElement("div",{style:{display:"flex",flexDirection:"column",gap:"12px",alignItems:"flex-start"}},r.createElement(n,null,r.createElement(i,null)),r.createElement(n,null,r.createElement(i,null),r.createElement(a,null)),r.createElement(n,{disabled:!0},r.createElement(i,null)),r.createElement(n,{readOnly:!0},r.createElement(i,null)))};var $,G,K;L.parameters={...L.parameters,docs:{...($=L.parameters)==null?void 0:$.docs,source:{originalSource:`{
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
}`,...(K=(G=L.parameters)==null?void 0:G.docs)==null?void 0:K.source}}};var Y,B,H;S.parameters={...S.parameters,docs:{...(Y=S.parameters)==null?void 0:Y.docs,source:{originalSource:`{
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
}`,...(H=(B=S.parameters)==null?void 0:B.docs)==null?void 0:H.source}}};var J,Q,X;_.parameters={..._.parameters,docs:{...(J=_.parameters)==null?void 0:J.docs,source:{originalSource:`{
  globals: {
    imports: \`import { Timepicker, TimepickerControl } from '@ovhcloud/ods-react';\`
  },
  tags: ['!dev'],
  render: ({}) => <Timepicker>
      <TimepickerControl />
    </Timepicker>
}`,...(X=(Q=_.parameters)==null?void 0:Q.docs)==null?void 0:X.source}}};var M,Z,ee;x.parameters={...x.parameters,docs:{...(M=x.parameters)==null?void 0:M.docs,source:{originalSource:`{
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
}`,...(ee=(Z=x.parameters)==null?void 0:Z.docs)==null?void 0:ee.source}}};var re,ne,ie;O.parameters={...O.parameters,docs:{...(re=O.parameters)==null?void 0:re.docs,source:{originalSource:`{
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
}`,...(ie=(ne=O.parameters)==null?void 0:ne.docs)==null?void 0:ie.source}}};var te,oe,ae;q.parameters={...q.parameters,docs:{...(te=q.parameters)==null?void 0:te.docs,source:{originalSource:`{
  tags: ['!dev'],
  parameters: {
    layout: 'centered'
  },
  render: ({}) => <Timepicker defaultValue="12:00">
      <TimepickerControl />

      <TimepickerTimezoneList />
    </Timepicker>
}`,...(ae=(oe=q.parameters)==null?void 0:oe.docs)==null?void 0:ae.source}}};var le,se,me;R.parameters={...R.parameters,docs:{...(le=R.parameters)==null?void 0:le.docs,source:{originalSource:`{
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
}`,...(me=(se=R.parameters)==null?void 0:se.docs)==null?void 0:me.source}}};var ce,de,pe;I.parameters={...I.parameters,docs:{...(ce=I.parameters)==null?void 0:ce.docs,source:{originalSource:`{
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
}`,...(pe=(de=I.parameters)==null?void 0:de.docs)==null?void 0:pe.source}}};var ue,Te,fe;A.parameters={...A.parameters,docs:{...(ue=A.parameters)==null?void 0:ue.docs,source:{originalSource:`{
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
}`,...(fe=(Te=A.parameters)==null?void 0:Te.docs)==null?void 0:fe.source}}};var ge,ke,Ce;P.parameters={...P.parameters,docs:{...(ge=P.parameters)==null?void 0:ge.docs,source:{originalSource:`{
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
}`,...(Ce=(ke=P.parameters)==null?void 0:ke.docs)==null?void 0:Ce.source}}};const $e=["Demo","AccessibilityLabel","Default","Disabled","InFormField","Overview","Readonly","TimezoneList","WithSeconds","ThemeGenerator"],Ze=Object.freeze(Object.defineProperty({__proto__:null,AccessibilityLabel:S,Default:_,Demo:L,Disabled:x,InFormField:O,Overview:q,Readonly:R,ThemeGenerator:P,TimezoneList:I,WithSeconds:A,__namedExportsOrder:$e,default:Ne},Symbol.toStringTag,{value:"Module"}));export{S as A,_ as D,O as I,q as O,R,Ze as T,A as W,x as a,I as b};
