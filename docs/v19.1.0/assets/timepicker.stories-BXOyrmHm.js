import{r as p,e as n}from"./index-D_CmzhJ4.js";import{u as fe,F as ye,a as ge}from"./FormFieldLabel-DQkMrZpp.js";import{j as f}from"./jsx-runtime-VM66peLj.js";import{c as Ce}from"./index-CkQHsVsO.js";import{I as Ue,b as we}from"./Input-DtgH68sh.js";import{L as d,u as Se}from"./useI18n-CFuCjRRO.js";import{b as _e,S as Ee,a as xe}from"./SelectControl-CmmZyh2D.js";import{e as Fe,o as qe,C as _}from"./controls-BtiQQn1l.js";var D=(e=>(e.all="all",e))(D||{});Object.freeze(Object.values(D));var j=(e=>(e.UTC_12="UTC-12",e.UTC_11="UTC-11",e.UTC_10="UTC-10",e.UTC_9="UTC-9",e.UTC_8="UTC-8",e.UTC_7="UTC-7",e.UTC_6="UTC-6",e.UTC_5="UTC-5",e.UTC_4="UTC-4",e.UTC_3="UTC-3",e.UTC_2="UTC-2",e.UTC_1="UTC-1",e.UTC="UTC+0",e.UTC1="UTC+1",e.UTC2="UTC+2",e.UTC3="UTC+3",e.UTC4="UTC+4",e.UTC5="UTC+5",e.UTC6="UTC+6",e.UTC7="UTC+7",e.UTC8="UTC+8",e.UTC9="UTC+9",e.UTC10="UTC+10",e.UTC11="UTC+11",e.UTC12="UTC+12",e))(j||{});const P=Object.freeze(Object.values(j)),V=j.UTC;function Oe(){const e=new Date().getTimezoneOffset()/60*-1;return e>=0?`+${e}`:e.toString()}function Le(e,i){if(e&&P.indexOf(e)>=0)return e;const a=Oe(),l=he(i),m=i===D.all?V:l[0];return l.find(s=>s.indexOf(a)>=0&&P.indexOf(s)>=0)||m}function he(e){if(!e||e===D.all)return P;const i=e.filter(a=>P.indexOf(a)>=0);return i.length?i:[V]}const ve=p.createContext({});function ke({children:e,timezone:i,timezones:a,...l}){const[m,s]=p.useState(Le(i,a));return f.jsx(ve.Provider,{value:{...l,currentTimezone:m,setCurrentTimezone:s,timezones:a},children:e})}function be(){return p.useContext(ve)}ke.__docgenInfo={description:"",methods:[],displayName:"TimepickerProvider",props:{defaultValue:{required:!1,tsType:{name:"string"},description:"The initial time value. Use when you don't need to control the value of the timepicker."},disabled:{required:!1,tsType:{name:"boolean"},description:"Whether the component is disabled."},i18n:{required:!1,tsType:{name:"Partial",elements:[{name:"Record",elements:[{name:"TIMEPICKER_I18N"},{name:"string"}],raw:"Record<TIMEPICKER_I18N, string>"}],raw:"Partial<Record<TIMEPICKER_I18N, string>>"},description:"Internal translations override."},id:{required:!1,tsType:{name:"string"},description:"The field id."},invalid:{required:!1,tsType:{name:"boolean"},description:"Whether the component is in error state."},locale:{required:!1,tsType:{name:"literal",value:"`${LOCALE}`"},description:"The locale used for the translation of the internal elements."},name:{required:!1,tsType:{name:"string"},description:"The name of the form element. Useful for form submission."},onTimezoneChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(detail: TimepickerTimezoneChangeDetail) => void",signature:{arguments:[{type:{name:"TimepickerTimezoneChangeDetail"},name:"detail"}],return:{name:"void"}}},description:"Callback fired when the timezone changes."},onValueChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(detail: TimepickerValueChangeDetail) => void",signature:{arguments:[{type:{name:"TimepickerValueChangeDetail"},name:"detail"}],return:{name:"void"}}},description:"Callback fired when the value changes."},readOnly:{required:!1,tsType:{name:"boolean"},description:"Whether the component is readonly."},required:{required:!1,tsType:{name:"boolean"},description:"Whether the component is required."},timezone:{required:!1,tsType:{name:"literal",value:"`${TIMEZONE}`"},description:"The controlled selected timezone."},timezones:{required:!1,tsType:{name:"union",raw:"Timezone[] | TimezonesPreset",elements:[{name:"Array",elements:[{name:"literal",value:"`${TIMEZONE}`"}],raw:"Timezone[]"},{name:"literal",value:"`${TIMEZONES_PRESET}`"}]},description:"A specific or preset list of timezone to display in the selector."},value:{required:!1,tsType:{name:"string"},description:"The controlled timepicker value."},withSeconds:{required:!1,tsType:{name:"boolean"},description:"Whether the time input allows seconds selection."},currentTimezone:{required:!1,tsType:{name:"literal",value:"`${TIMEZONE}`"},description:""},setCurrentTimezone:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: Timezone) => void",signature:{arguments:[{type:{name:"literal",value:"`${TIMEZONE}`"},name:"value"}],return:{name:"void"}}},description:""},children:{required:!0,tsType:{name:"ReactNode"},description:""}}};const Re="_timepicker_10n31_2",Ie={timepicker:Re},r=p.forwardRef(({children:e,className:i,defaultValue:a,disabled:l,i18n:m,id:s,invalid:h,locale:v,name:k,onTimezoneChange:b,onValueChange:u,readOnly:z,required:U,timezone:y,timezones:g,value:T,withSeconds:w,...S},c)=>{const C=fe();return f.jsx(ke,{defaultValue:a,disabled:l,i18n:m,id:s||(C==null?void 0:C.id),invalid:h||(C==null?void 0:C.invalid),locale:v,name:k,onTimezoneChange:b,onValueChange:u,readOnly:z,required:U,timezone:y,timezones:g,value:T,withSeconds:w,children:f.jsx("div",{className:Ce(Ie.timepicker,i),"data-ods":"timepicker",ref:c,role:"group",...S,children:e})})});r.displayName="Timepicker";r.__docgenInfo={description:"",methods:[],displayName:"Timepicker",props:{defaultValue:{required:!1,tsType:{name:"string"},description:"The initial time value. Use when you don't need to control the value of the timepicker."},disabled:{required:!1,tsType:{name:"boolean"},description:"Whether the component is disabled."},i18n:{required:!1,tsType:{name:"Partial",elements:[{name:"Record",elements:[{name:"TIMEPICKER_I18N"},{name:"string"}],raw:"Record<TIMEPICKER_I18N, string>"}],raw:"Partial<Record<TIMEPICKER_I18N, string>>"},description:"Internal translations override."},id:{required:!1,tsType:{name:"string"},description:"The field id."},invalid:{required:!1,tsType:{name:"boolean"},description:"Whether the component is in error state."},locale:{required:!1,tsType:{name:"literal",value:"`${LOCALE}`"},description:"The locale used for the translation of the internal elements."},name:{required:!1,tsType:{name:"string"},description:"The name of the form element. Useful for form submission."},onTimezoneChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(detail: TimepickerTimezoneChangeDetail) => void",signature:{arguments:[{type:{name:"TimepickerTimezoneChangeDetail"},name:"detail"}],return:{name:"void"}}},description:"Callback fired when the timezone changes."},onValueChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(detail: TimepickerValueChangeDetail) => void",signature:{arguments:[{type:{name:"TimepickerValueChangeDetail"},name:"detail"}],return:{name:"void"}}},description:"Callback fired when the value changes."},readOnly:{required:!1,tsType:{name:"boolean"},description:"Whether the component is readonly."},required:{required:!1,tsType:{name:"boolean"},description:"Whether the component is required."},timezone:{required:!1,tsType:{name:"literal",value:"`${TIMEZONE}`"},description:"The controlled selected timezone."},timezones:{required:!1,tsType:{name:"union",raw:"Timezone[] | TimezonesPreset",elements:[{name:"Array",elements:[{name:"literal",value:"`${TIMEZONE}`"}],raw:"Timezone[]"},{name:"literal",value:"`${TIMEZONES_PRESET}`"}]},description:"A specific or preset list of timezone to display in the selector."},value:{required:!1,tsType:{name:"string"},description:"The controlled timepicker value."},withSeconds:{required:!1,tsType:{name:"boolean"},description:"Whether the time input allows seconds selection."}},composes:["Omit"]};const t=p.forwardRef(({children:e,className:i,...a},l)=>{const{currentTimezone:m,defaultValue:s,disabled:h,id:v,invalid:k,name:b,onValueChange:u,readOnly:z,required:U,value:y,withSeconds:g}=be(),T=fe();function w(S){const c=S.currentTarget.value;u&&u({timezone:m,value:c})}return f.jsx(Ue,{"aria-labelledby":T==null?void 0:T.labelId,className:i,"data-ods":"timepicker-control",ref:l,...a,defaultValue:s,disabled:h,id:v,invalid:k,onChange:w,readOnly:z,required:U,name:b,step:g?1:void 0,type:we.time,value:y})});t.displayName="TimepickerControl";t.__docgenInfo={description:"",methods:[],displayName:"TimepickerControl",composes:["TimepickerInputProp"]};var ze=(e=>(e.timezoneSelect="timepicker.timezone.select",e))(ze||{});const Ae={"timepicker.timezone.select":{[d.de]:"Wählen Sie eine Zeitzone aus",[d.en]:"Select a timezone",[d.es]:"Seleccione una zona horaria",[d.fr]:"Sélectionner un fuseau horaire",[d.it]:"Seleziona un fuso orario",[d.nl]:"Selecteer een tijdzone",[d.pl]:"Wybierz strefę czasową",[d.pt]:"Selecione um fuso horário"}},W={"timepicker-timezone-list":"_timepicker-timezone-list_xj56c_2"},o=p.forwardRef(({children:e,className:i,...a},l)=>{const m=p.useId(),{currentTimezone:s,disabled:h,i18n:v,invalid:k,locale:b,onTimezoneChange:u,readOnly:z,required:U,setCurrentTimezone:y,timezones:g}=be(),{translate:T}=Se(Ae,b,v),w=p.useMemo(()=>he(g).map(c=>({label:c,value:c})),[g]);function S({value:c}){y&&y(c[0]),u&&u({value:c[0]})}return f.jsxs(_e,{className:Ce(W["timepicker-timezone-list"],i),"data-ods":"timepicker-timezone-list",disabled:h,invalid:k,items:w,readOnly:z,required:U,ref:l,onValueChange:S,value:[s||V],...a,children:[f.jsx(Ee,{"aria-label":T(ze.timezoneSelect),"aria-labelledby":"",className:W["timepicker-timezone__control"],id:m}),f.jsx(xe,{})]})});o.displayName="TimepickerTimezoneList";o.__docgenInfo={description:"",methods:[],displayName:"TimepickerTimezoneList",composes:["Omit"]};const Pe={argTypes:Fe(["defaultValue","i18n","id","locale","name","onTimezoneChange","onValueChange","required","timezone","timezones","value"]),component:r,subcomponents:{TimepickerControl:t,TimepickerTimezoneList:o},title:"React Components/Timepicker"},E={render:e=>n.createElement(r,{disabled:e.disabled,invalid:e.invalid,readOnly:e.readOnly,withSeconds:e.withSeconds},n.createElement(t,null),e.withTimezones&&n.createElement(o,null)),argTypes:qe({disabled:{table:{category:_.general},control:{type:"boolean"}},invalid:{table:{category:_.general},control:"boolean"},readOnly:{table:{category:_.general},control:"boolean"},withSeconds:{table:{category:_.general,type:{summary:"boolean"}},control:"boolean"},withTimezones:{table:{category:_.general,type:{summary:"boolean"}},control:"boolean"}})},x={tags:["!dev"],render:({})=>n.createElement(ye,null,n.createElement(ge,null,"Starting time:"),n.createElement(r,{withSeconds:!0},n.createElement(t,null),n.createElement(o,null)))},F={tags:["!dev"],render:({})=>n.createElement(r,null,n.createElement(t,null))},q={decorators:[e=>n.createElement("div",{style:{display:"flex",flexFlow:"column",gap:"8px"}},e())],tags:["!dev"],render:({})=>n.createElement(n.Fragment,null,n.createElement(r,{disabled:!0},n.createElement(t,null)),n.createElement(r,{disabled:!0},n.createElement(t,null),n.createElement(o,null)))},O={tags:["!dev"],render:({})=>n.createElement(ye,null,n.createElement(ge,null,"Timepicker:"),n.createElement(r,null,n.createElement(t,null)))},L={tags:["!dev"],parameters:{layout:"centered"},render:({})=>n.createElement(r,{defaultValue:"12:00"},n.createElement(t,null),n.createElement(o,null))},R={decorators:[e=>n.createElement("div",{style:{display:"flex",flexFlow:"column",gap:"8px"}},e())],tags:["!dev"],render:({})=>n.createElement(n.Fragment,null,n.createElement(r,{readOnly:!0},n.createElement(t,null)),n.createElement(r,{readOnly:!0},n.createElement(t,null),n.createElement(o,null)))},I={decorators:[e=>n.createElement("div",{style:{display:"flex",flexFlow:"column",gap:"8px"}},e())],tags:["!dev"],render:({})=>n.createElement(n.Fragment,null,n.createElement("span",null,"All timezones"),n.createElement(r,null,n.createElement(t,null),n.createElement(o,null)),n.createElement("span",null,"Subset of timezone"),n.createElement(r,{timezones:["UTC-10","UTC+0","UTC+10"]},n.createElement(t,null),n.createElement(o,null)))},A={decorators:[e=>n.createElement("div",{style:{display:"flex",flexFlow:"column",gap:"8px"}},e())],tags:["!dev"],render:({})=>n.createElement(n.Fragment,null,n.createElement(r,{withSeconds:!0},n.createElement(t,null)),n.createElement(r,{withSeconds:!0},n.createElement(t,null),n.createElement(o,null)))};var N,$,K;E.parameters={...E.parameters,docs:{...(N=E.parameters)==null?void 0:N.docs,source:{originalSource:`{
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
}`,...(K=($=E.parameters)==null?void 0:$.docs)==null?void 0:K.source}}};var Y,G,B;x.parameters={...x.parameters,docs:{...(Y=x.parameters)==null?void 0:Y.docs,source:{originalSource:`{
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
}`,...(B=(G=x.parameters)==null?void 0:G.docs)==null?void 0:B.source}}};var H,J,Q;F.parameters={...F.parameters,docs:{...(H=F.parameters)==null?void 0:H.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: ({}) => <Timepicker>
      <TimepickerControl />
    </Timepicker>
}`,...(Q=(J=F.parameters)==null?void 0:J.docs)==null?void 0:Q.source}}};var X,M,Z;q.parameters={...q.parameters,docs:{...(X=q.parameters)==null?void 0:X.docs,source:{originalSource:`{
  decorators: [story => <div style={{
    display: 'flex',
    flexFlow: 'column',
    gap: '8px'
  }}>{story()}</div>],
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
}`,...(Z=(M=q.parameters)==null?void 0:M.docs)==null?void 0:Z.source}}};var ee,ne,re;O.parameters={...O.parameters,docs:{...(ee=O.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: ({}) => <FormField>
      <FormFieldLabel>
        Timepicker:
      </FormFieldLabel>

      <Timepicker>
        <TimepickerControl />
      </Timepicker>
    </FormField>
}`,...(re=(ne=O.parameters)==null?void 0:ne.docs)==null?void 0:re.source}}};var te,ie,ae;L.parameters={...L.parameters,docs:{...(te=L.parameters)==null?void 0:te.docs,source:{originalSource:`{
  tags: ['!dev'],
  parameters: {
    layout: 'centered'
  },
  render: ({}) => <Timepicker defaultValue="12:00">
      <TimepickerControl />

      <TimepickerTimezoneList />
    </Timepicker>
}`,...(ae=(ie=L.parameters)==null?void 0:ie.docs)==null?void 0:ae.source}}};var oe,le,se;R.parameters={...R.parameters,docs:{...(oe=R.parameters)==null?void 0:oe.docs,source:{originalSource:`{
  decorators: [story => <div style={{
    display: 'flex',
    flexFlow: 'column',
    gap: '8px'
  }}>{story()}</div>],
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
}`,...(Te=(ue=A.parameters)==null?void 0:ue.docs)==null?void 0:Te.source}}};const De=["Demo","AccessibilityLabel","Default","Disabled","InFormField","Overview","Readonly","TimezoneList","WithSeconds"],Be=Object.freeze(Object.defineProperty({__proto__:null,AccessibilityLabel:x,Default:F,Demo:E,Disabled:q,InFormField:O,Overview:L,Readonly:R,TimezoneList:I,WithSeconds:A,__namedExportsOrder:De,default:Pe},Symbol.toStringTag,{value:"Module"}));export{x as A,F as D,O as I,L as O,R,Be as T,A as W,q as a,I as b};
