import{r as T,e as n}from"./index-D_CmzhJ4.js";import{u as ue,c as Te,F as ye}from"./FormFieldLabel-DjB85afw.js";import{j as u}from"./jsx-runtime-VM66peLj.js";import{c as me}from"./index-CkQHsVsO.js";import{I as fe,b as ge}from"./Input-Pkw6XJuX.js";import{b as Ce,S as he,a as ve}from"./SelectControl-D8g7ZA4_.js";import{e as ke,o as be,C as b}from"./controls-BtiQQn1l.js";var E=(e=>(e.all="all",e))(E||{});Object.freeze(Object.values(E));var j=(e=>(e.UTC_12="UTC-12",e.UTC_11="UTC-11",e.UTC_10="UTC-10",e.UTC_9="UTC-9",e.UTC_8="UTC-8",e.UTC_7="UTC-7",e.UTC_6="UTC-6",e.UTC_5="UTC-5",e.UTC_4="UTC-4",e.UTC_3="UTC-3",e.UTC_2="UTC-2",e.UTC_1="UTC-1",e.UTC="UTC+0",e.UTC1="UTC+1",e.UTC2="UTC+2",e.UTC3="UTC+3",e.UTC4="UTC+4",e.UTC5="UTC+5",e.UTC6="UTC+6",e.UTC7="UTC+7",e.UTC8="UTC+8",e.UTC9="UTC+9",e.UTC10="UTC+10",e.UTC11="UTC+11",e.UTC12="UTC+12",e))(j||{});const F=Object.freeze(Object.values(j)),V=j.UTC;function ze(){const e=new Date().getTimezoneOffset()/60*-1;return e>=0?`+${e}`:e.toString()}function Ue(e,i){if(e&&F.indexOf(e)>=0)return e;const a=ze(),o=D(i),m=i===E.all?V:o[0];return o.find(l=>l.indexOf(a)>=0&&F.indexOf(l)>=0)||m}function D(e){if(!e||e===E.all)return F;const i=e.filter(a=>F.indexOf(a)>=0);return i.length?i:[V]}const ce=T.createContext({});function de({children:e,timezone:i,timezones:a,...o}){const[m,l]=T.useState(Ue(i,a));return u.jsx(ce.Provider,{value:{...o,currentTimezone:m,setCurrentTimezone:l,timezones:a},children:e})}function pe(){return T.useContext(ce)}de.__docgenInfo={description:"",methods:[],displayName:"TimepickerProvider",props:{defaultValue:{required:!1,tsType:{name:"string"},description:"The initial time value. Use when you don't need to control the value of the timepicker."},disabled:{required:!1,tsType:{name:"boolean"},description:"Whether the component is disabled."},id:{required:!1,tsType:{name:"string"},description:"The field id."},invalid:{required:!1,tsType:{name:"boolean"},description:"Whether the component is in error state."},name:{required:!1,tsType:{name:"string"},description:"The name of the form element. Useful for form submission."},onTimezoneChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(detail: TimepickerTimezoneChangeDetail) => void",signature:{arguments:[{type:{name:"TimepickerTimezoneChangeDetail"},name:"detail"}],return:{name:"void"}}},description:"Callback fired when the timezone changes."},onValueChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(detail: TimepickerValueChangeDetail) => void",signature:{arguments:[{type:{name:"TimepickerValueChangeDetail"},name:"detail"}],return:{name:"void"}}},description:"Callback fired when the value changes."},readOnly:{required:!1,tsType:{name:"boolean"},description:"Whether the component is readonly."},required:{required:!1,tsType:{name:"boolean"},description:"Whether the component is required."},timezone:{required:!1,tsType:{name:"literal",value:"`${TIMEZONE}`"},description:"The controlled selected timezone."},timezones:{required:!1,tsType:{name:"union",raw:"Timezone[] | TimezonesPreset",elements:[{name:"Array",elements:[{name:"literal",value:"`${TIMEZONE}`"}],raw:"Timezone[]"},{name:"literal",value:"`${TIMEZONES_PRESET}`"}]},description:"A specific or preset list of timezone to display in the selector."},value:{required:!1,tsType:{name:"string"},description:"The controlled timepicker value."},withSeconds:{required:!1,tsType:{name:"boolean"},description:"Whether the time input allows seconds selection."},currentTimezone:{required:!1,tsType:{name:"literal",value:"`${TIMEZONE}`"},description:""},setCurrentTimezone:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: Timezone) => void",signature:{arguments:[{type:{name:"literal",value:"`${TIMEZONE}`"},name:"value"}],return:{name:"void"}}},description:""},children:{required:!0,tsType:{name:"ReactNode"},description:""}}};const we="_timepicker_10n31_2",_e={timepicker:we},r=T.forwardRef(({children:e,className:i,defaultValue:a,disabled:o,id:m,invalid:l,name:g,onTimezoneChange:y,onValueChange:C,readOnly:h,required:p,timezone:f,timezones:v,value:k,withSeconds:c,...L},R)=>{const d=ue();return u.jsx(de,{defaultValue:a,disabled:o,id:m||(d==null?void 0:d.id),invalid:l||(d==null?void 0:d.invalid),name:g,onTimezoneChange:y,onValueChange:C,readOnly:h,required:p,timezone:f,timezones:v,value:k,withSeconds:c,children:u.jsx("div",{className:me(_e.timepicker,i),ref:R,...L,children:e})})});r.displayName="Timepicker";r.__docgenInfo={description:"",methods:[],displayName:"Timepicker",props:{defaultValue:{required:!1,tsType:{name:"string"},description:"The initial time value. Use when you don't need to control the value of the timepicker."},disabled:{required:!1,tsType:{name:"boolean"},description:"Whether the component is disabled."},id:{required:!1,tsType:{name:"string"},description:"The field id."},invalid:{required:!1,tsType:{name:"boolean"},description:"Whether the component is in error state."},name:{required:!1,tsType:{name:"string"},description:"The name of the form element. Useful for form submission."},onTimezoneChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(detail: TimepickerTimezoneChangeDetail) => void",signature:{arguments:[{type:{name:"TimepickerTimezoneChangeDetail"},name:"detail"}],return:{name:"void"}}},description:"Callback fired when the timezone changes."},onValueChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(detail: TimepickerValueChangeDetail) => void",signature:{arguments:[{type:{name:"TimepickerValueChangeDetail"},name:"detail"}],return:{name:"void"}}},description:"Callback fired when the value changes."},readOnly:{required:!1,tsType:{name:"boolean"},description:"Whether the component is readonly."},required:{required:!1,tsType:{name:"boolean"},description:"Whether the component is required."},timezone:{required:!1,tsType:{name:"literal",value:"`${TIMEZONE}`"},description:"The controlled selected timezone."},timezones:{required:!1,tsType:{name:"union",raw:"Timezone[] | TimezonesPreset",elements:[{name:"Array",elements:[{name:"literal",value:"`${TIMEZONE}`"}],raw:"Timezone[]"},{name:"literal",value:"`${TIMEZONES_PRESET}`"}]},description:"A specific or preset list of timezone to display in the selector."},value:{required:!1,tsType:{name:"string"},description:"The controlled timepicker value."},withSeconds:{required:!1,tsType:{name:"boolean"},description:"Whether the time input allows seconds selection."}},composes:["Omit"]};const t=T.forwardRef(({children:e,className:i,...a},o)=>{const{currentTimezone:m,defaultValue:l,disabled:g,id:y,invalid:C,name:h,onValueChange:p,readOnly:f,required:v,value:k,withSeconds:c}=pe();function L(R){const d=R.currentTarget.value;p&&p({timezone:m,value:d})}return u.jsx(fe,{className:i,ref:o,...a,defaultValue:l,disabled:g,id:y,invalid:C,onChange:L,readOnly:f,required:v,name:h,step:c?1:void 0,type:ge.time,value:k})});t.displayName="TimepickerControl";t.__docgenInfo={description:"",methods:[],displayName:"TimepickerControl",composes:["TimepickerInputProp"]};const A={"timepicker-timezone-list":"_timepicker-timezone-list_xj56c_2"},s=T.forwardRef(({children:e,className:i,...a},o)=>{const{currentTimezone:m,disabled:l,invalid:g,onTimezoneChange:y,readOnly:C,required:h,setCurrentTimezone:p,timezones:f}=pe(),v=T.useMemo(()=>D(f).map(c=>({label:c,value:c})),[D,f]);function k({value:c}){p&&p(c[0]),y&&y({value:c[0]})}return u.jsxs(Ce,{className:me(A["timepicker-timezone-list"],i),disabled:l,invalid:g,items:v,readOnly:C,required:h,ref:o,onValueChange:k,value:[m||V],...a,children:[u.jsx(he,{className:A["timepicker-timezone__control"]}),u.jsx(ve,{})]})});s.displayName="TimepickerTimezoneList";s.__docgenInfo={description:"",methods:[],displayName:"TimepickerTimezoneList",composes:["Omit"]};const xe={argTypes:ke(["defaultValue","id","name","onTimezoneChange","onValueChange","required","timezone","timezones","value"]),component:r,subcomponents:{TimepickerControl:t,TimepickerTimezoneList:s},title:"React Components/Timepicker"},z={render:e=>n.createElement(r,{disabled:e.disabled,invalid:e.invalid,readOnly:e.readOnly,withSeconds:e.withSeconds},n.createElement(t,null),e.withTimezones&&n.createElement(s,null)),argTypes:be({disabled:{table:{category:b.general},control:{type:"boolean"}},invalid:{table:{category:b.general},control:"boolean"},readOnly:{table:{category:b.general},control:"boolean"},withSeconds:{table:{category:b.general,type:{summary:"boolean"}},control:"boolean"},withTimezones:{table:{category:b.general,type:{summary:"boolean"}},control:"boolean"}})},U={tags:["!dev"],render:({})=>n.createElement(r,null,n.createElement(t,null))},w={decorators:[e=>n.createElement("div",{style:{display:"flex",flexFlow:"column",gap:"8px"}},e())],tags:["!dev"],render:({})=>n.createElement(n.Fragment,null,n.createElement(r,{disabled:!0},n.createElement(t,null)),n.createElement(r,{disabled:!0},n.createElement(t,null),n.createElement(s,null)))},_={tags:["!dev"],render:({})=>n.createElement(Te,null,n.createElement(ye,null,"Timepicker:"),n.createElement(r,null,n.createElement(t,null)))},x={tags:["!dev"],parameters:{layout:"centered"},render:({})=>n.createElement(r,{defaultValue:"12:00"},n.createElement(t,null),n.createElement(s,null))},S={decorators:[e=>n.createElement("div",{style:{display:"flex",flexFlow:"column",gap:"8px"}},e())],tags:["!dev"],render:({})=>n.createElement(n.Fragment,null,n.createElement(r,{readOnly:!0},n.createElement(t,null)),n.createElement(r,{readOnly:!0},n.createElement(t,null),n.createElement(s,null)))},q={decorators:[e=>n.createElement("div",{style:{display:"flex",flexFlow:"column",gap:"8px"}},e())],tags:["!dev"],render:({})=>n.createElement(n.Fragment,null,n.createElement("span",null,"All timezones"),n.createElement(r,null,n.createElement(t,null),n.createElement(s,null)),n.createElement("span",null,"Subset of timezone"),n.createElement(r,{timezones:["UTC-10","UTC+0","UTC+10"]},n.createElement(t,null),n.createElement(s,null)))},O={decorators:[e=>n.createElement("div",{style:{display:"flex",flexFlow:"column",gap:"8px"}},e())],tags:["!dev"],render:({})=>n.createElement(n.Fragment,null,n.createElement(r,{withSeconds:!0},n.createElement(t,null)),n.createElement(r,{withSeconds:!0},n.createElement(t,null),n.createElement(s,null)))};var W,P,$;z.parameters={...z.parameters,docs:{...(W=z.parameters)==null?void 0:W.docs,source:{originalSource:`{
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
}`,...($=(P=z.parameters)==null?void 0:P.docs)==null?void 0:$.source}}};var Y,G,N;U.parameters={...U.parameters,docs:{...(Y=U.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: ({}) => <Timepicker>
      <TimepickerControl />
    </Timepicker>
}`,...(N=(G=U.parameters)==null?void 0:G.docs)==null?void 0:N.source}}};var B,K,H;w.parameters={...w.parameters,docs:{...(B=w.parameters)==null?void 0:B.docs,source:{originalSource:`{
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
}`,...(H=(K=w.parameters)==null?void 0:K.docs)==null?void 0:H.source}}};var J,Q,X;_.parameters={..._.parameters,docs:{...(J=_.parameters)==null?void 0:J.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: ({}) => <FormField>
      <FormFieldLabel>
        Timepicker:
      </FormFieldLabel>

      <Timepicker>
        <TimepickerControl />
      </Timepicker>
    </FormField>
}`,...(X=(Q=_.parameters)==null?void 0:Q.docs)==null?void 0:X.source}}};var I,M,Z;x.parameters={...x.parameters,docs:{...(I=x.parameters)==null?void 0:I.docs,source:{originalSource:`{
  tags: ['!dev'],
  parameters: {
    layout: 'centered'
  },
  render: ({}) => <Timepicker defaultValue="12:00">
      <TimepickerControl />

      <TimepickerTimezoneList />
    </Timepicker>
}`,...(Z=(M=x.parameters)==null?void 0:M.docs)==null?void 0:Z.source}}};var ee,ne,re;S.parameters={...S.parameters,docs:{...(ee=S.parameters)==null?void 0:ee.docs,source:{originalSource:`{
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
}`,...(re=(ne=S.parameters)==null?void 0:ne.docs)==null?void 0:re.source}}};var te,ie,ae;q.parameters={...q.parameters,docs:{...(te=q.parameters)==null?void 0:te.docs,source:{originalSource:`{
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
}`,...(ae=(ie=q.parameters)==null?void 0:ie.docs)==null?void 0:ae.source}}};var oe,le,se;O.parameters={...O.parameters,docs:{...(oe=O.parameters)==null?void 0:oe.docs,source:{originalSource:`{
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
}`,...(se=(le=O.parameters)==null?void 0:le.docs)==null?void 0:se.source}}};const Se=["Demo","Default","Disabled","InFormField","Overview","Readonly","TimezoneList","WithSeconds"],je=Object.freeze(Object.defineProperty({__proto__:null,Default:U,Demo:z,Disabled:w,InFormField:_,Overview:x,Readonly:S,TimezoneList:q,WithSeconds:O,__namedExportsOrder:Se,default:xe},Symbol.toStringTag,{value:"Module"}));export{U as D,_ as I,x as O,S as R,je as T,O as W,w as a,q as b};
