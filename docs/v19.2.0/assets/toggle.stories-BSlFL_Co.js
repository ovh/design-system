import{r as m,e as r}from"./index-jIWwRBLr.js";import{u as ke,F as X}from"./FormFieldLabel-DW-nAxje.js";import{T as Oe,a as Ie}from"./Text-vMb3-i8V.js";import{j as s}from"./jsx-runtime-Cfl8ynUo.js";import{c as j}from"./index-CqY9YpN0.js";import{c as De,T as F,U as N,P as p,aA as je,Q as qe,d as Ae,X as Ve,C as He,z as We,Y as Ge,aB as Xe,aC as Be,am as Ke,aD as $e,u as Ue,R as Ye,D as Me,S as Qe,a as Je}from"./use-locale-context-BIV2aQtl.js";import{u as ye}from"./use-field-context-xoqKb8Fu.js";import{i as Ze,t as ze}from"./index-DaqjtwB0.js";import{e as eo,o as oo,C as V}from"./controls-BtiQQn1l.js";const[to,R]=De({name:"SwitchContext",hookName:"useSwitchContext",providerName:"<SwitchProvider />"}),xe=m.forwardRef((e,o)=>{const t=R(),a=F(t.getControlProps(),e);return s.jsx(N.span,{...a,ref:o})});xe.displayName="SwitchControl";const Le=m.forwardRef((e,o)=>{const t=R(),a=F(t.getHiddenInputProps(),e),l=ye();return s.jsx(N.input,{"aria-describedby":l==null?void 0:l.ariaDescribedby,...a,ref:o})});Le.displayName="SwitchHiddenInput";const we=m.forwardRef((e,o)=>{const t=R(),a=F(t.getLabelProps(),e);return s.jsx(N.span,{...a,ref:o})});we.displayName="SwitchLabel";var lo=qe("switch").parts("root","label","control","thumb"),D=lo.build(),Se=e=>{var o;return((o=e.ids)==null?void 0:o.root)??`switch:${e.id}`},B=e=>{var o;return((o=e.ids)==null?void 0:o.label)??`switch:${e.id}:label`},ao=e=>{var o;return((o=e.ids)==null?void 0:o.thumb)??`switch:${e.id}:thumb`},ro=e=>{var o;return((o=e.ids)==null?void 0:o.control)??`switch:${e.id}:control`},H=e=>{var o;return((o=e.ids)==null?void 0:o.hiddenInput)??`switch:${e.id}:input`},so=e=>e.getById(Se(e)),C=e=>e.getById(H(e));function no(e,o){const{context:t,send:a,prop:l,scope:n}=e,i=!!l("disabled"),O=!!l("readOnly"),q=!!l("required"),T=!!t.get("checked"),I=!i&&t.get("focused"),A=!i&&t.get("focusVisible"),f={"data-active":p(t.get("active")),"data-focus":p(I),"data-focus-visible":p(A),"data-readonly":p(O),"data-hover":p(t.get("hovered")),"data-disabled":p(i),"data-state":T?"checked":"unchecked","data-invalid":p(l("invalid")),"data-required":p(q)};return{checked:T,disabled:i,focused:I,setChecked(g){a({type:"CHECKED.SET",checked:g,isTrusted:!1})},toggleChecked(){a({type:"CHECKED.TOGGLE",checked:T,isTrusted:!1})},getRootProps(){return o.label({...D.root.attrs,...f,dir:l("dir"),id:Se(n),htmlFor:H(n),onPointerMove(){i||a({type:"CONTEXT.SET",context:{hovered:!0}})},onPointerLeave(){i||a({type:"CONTEXT.SET",context:{hovered:!1}})},onClick(g){var G;if(i)return;Ae(g)===C(n)&&g.stopPropagation(),Ve()&&((G=C(n))==null||G.focus())}})},getLabelProps(){return o.element({...D.label.attrs,...f,dir:l("dir"),id:B(n)})},getThumbProps(){return o.element({...D.thumb.attrs,...f,dir:l("dir"),id:ao(n),"aria-hidden":!0})},getControlProps(){return o.element({...D.control.attrs,...f,dir:l("dir"),id:ro(n),"aria-hidden":!0})},getHiddenInputProps(){return o.input({id:H(n),type:"checkbox",required:l("required"),defaultChecked:T,disabled:i,"aria-labelledby":B(n),"aria-invalid":l("invalid"),name:l("name"),form:l("form"),value:l("value"),style:je,onFocus(){const g=Ze();a({type:"CONTEXT.SET",context:{focused:!0,focusVisible:g}})},onBlur(){a({type:"CONTEXT.SET",context:{focused:!1,focusVisible:!1}})},onClick(g){if(O){g.preventDefault();return}const u=g.currentTarget.checked;a({type:"CHECKED.SET",checked:u,isTrusted:!0})}})}}}var{not:K}=Ge(),co=We({props({props:e}){return{defaultChecked:!1,label:"switch",value:"on",...e}},initialState(){return"ready"},context({prop:e,bindable:o}){return{checked:o(()=>({defaultValue:e("defaultChecked"),value:e("checked"),onChange(t){var a;(a=e("onCheckedChange"))==null||a({checked:t})}})),fieldsetDisabled:o(()=>({defaultValue:!1})),focusVisible:o(()=>({defaultValue:!1})),active:o(()=>({defaultValue:!1})),focused:o(()=>({defaultValue:!1})),hovered:o(()=>({defaultValue:!1}))}},computed:{isDisabled:({context:e,prop:o})=>o("disabled")||e.get("fieldsetDisabled")},watch({track:e,prop:o,context:t,action:a}){e([()=>o("disabled")],()=>{a(["removeFocusIfNeeded"])}),e([()=>t.get("checked")],()=>{a(["syncInputElement"])})},effects:["trackFormControlState","trackPressEvent","trackFocusVisible"],on:{"CHECKED.TOGGLE":[{guard:K("isTrusted"),actions:["toggleChecked","dispatchChangeEvent"]},{actions:["toggleChecked"]}],"CHECKED.SET":[{guard:K("isTrusted"),actions:["setChecked","dispatchChangeEvent"]},{actions:["setChecked"]}],"CONTEXT.SET":{actions:["setContext"]}},states:{ready:{}},implementations:{guards:{isTrusted:({event:e})=>!!e.isTrusted},effects:{trackPressEvent({computed:e,scope:o,context:t}){if(!e("isDisabled"))return $e({pointerNode:so(o),keyboardNode:C(o),isValidKey:a=>a.key===" ",onPress:()=>t.set("active",!1),onPressStart:()=>t.set("active",!0),onPressEnd:()=>t.set("active",!1)})},trackFocusVisible({computed:e,scope:o}){if(!e("isDisabled"))return ze({root:o.getRootNode()})},trackFormControlState({context:e,send:o,scope:t}){return Ke(C(t),{onFieldsetDisabledChange(a){e.set("fieldsetDisabled",a)},onFormReset(){const a=e.initial("checked");o({type:"CHECKED.SET",checked:!!a,src:"form-reset"})}})}},actions:{setContext({context:e,event:o}){for(const t in o.context)e.set(t,o.context[t])},syncInputElement({context:e,scope:o}){const t=C(o);t&&Be(t,!!e.get("checked"))},removeFocusIfNeeded({context:e,prop:o}){o("disabled")&&e.set("focused",!1)},setChecked({context:e,event:o}){e.set("checked",o.checked)},toggleChecked({context:e}){e.set("checked",!e.get("checked"))},dispatchChangeEvent({context:e,scope:o}){const t=C(o);Xe(t,{checked:e.get("checked")})}}}});He()(["checked","defaultChecked","dir","disabled","form","getRootNode","id","ids","invalid","label","name","onCheckedChange","readOnly","required","value"]);const io=e=>{const o=m.useId(),{getRootNode:t}=Ue(),{dir:a}=Ye(),l=ye(),n={id:o,ids:{label:l==null?void 0:l.ids.label,hiddenInput:l==null?void 0:l.ids.control},dir:a,disabled:l==null?void 0:l.disabled,readOnly:l==null?void 0:l.readOnly,invalid:l==null?void 0:l.invalid,required:l==null?void 0:l.required,getRootNode:t,...e},i=Me(co,n);return no(i,Qe)},Pe=m.forwardRef((e,o)=>{const[t,a]=Je()(e,["checked","defaultChecked","disabled","form","id","ids","invalid","label","name","onCheckedChange","readOnly","required","value"]),l=io(t),n=F(l.getRootProps(),a);return s.jsx(to,{value:l,children:s.jsx(N.label,{...n,ref:o})})});Pe.displayName="SwitchRoot";const Fe=m.forwardRef((e,o)=>{const t=R(),a=F(t.getThumbProps(),e);return s.jsx(N.span,{...a,ref:o})});Fe.displayName="SwitchThumb";const Ne=m.createContext({});function Re({children:e,withLabels:o}){return s.jsx(Ne.Provider,{value:{withLabels:o},children:e})}function go(){return m.useContext(Ne)}Re.__docgenInfo={description:"",methods:[],displayName:"ToggleProvider",props:{children:{required:!0,tsType:{name:"ReactNode"},description:""}},composes:["ToggleContextType"]};const b={"toggle-labels":"_toggle-labels_1ekxx_2","toggle-labels__label-on":"_toggle-labels__label-on_1ekxx_13","toggle-labels__label-off":"_toggle-labels__label-off_1ekxx_13","toggle-labels__label-on--checked":"_toggle-labels__label-on--checked_1ekxx_22","toggle-labels__label-on--disabled":"_toggle-labels__label-on--disabled_1ekxx_25","toggle-labels__label-off--unchecked":"_toggle-labels__label-off--unchecked_1ekxx_32","toggle-labels__label-off--focused":"_toggle-labels__label-off--focused_1ekxx_35","toggle-labels__label-off--disabled":"_toggle-labels__label-off--disabled_1ekxx_35"},mo="ON",uo="OFF",W=()=>{const{checked:e,disabled:o,focused:t}=R();return s.jsxs("span",{className:b["toggle-labels"],children:[s.jsx("span",{className:j(b["toggle-labels__label-on"],{[b["toggle-labels__label-on--checked"]]:e},{[b["toggle-labels__label-on--disabled"]]:o}),children:mo}),s.jsx("span",{className:j(b["toggle-labels__label-off"],{[b["toggle-labels__label-off--unchecked"]]:!e},{[b["toggle-labels__label-off--disabled"]]:o},{[b["toggle-labels__label-off--focused"]]:t}),children:uo})]})};W.displayName="ToggleLabels";W.__docgenInfo={description:"",methods:[],displayName:"ToggleLabels"};const $={"toggle-control":"_toggle-control_t6d2a_2","toggle-control__thumb":"_toggle-control__thumb_t6d2a_42"},d=m.forwardRef(({className:e,...o},t)=>{const a=ke(),{withLabels:l}=go();return s.jsxs(s.Fragment,{children:[s.jsxs(xe,{className:j($["toggle-control"],e),"data-ods":"toggle-control",ref:t,...o,children:[s.jsx(Fe,{className:$["toggle-control__thumb"]}),l&&s.jsx(W,{})]}),s.jsx(Le,{"aria-describedby":o["aria-describedby"]||(a==null?void 0:a.ariaDescribedBy),"aria-labelledby":o["aria-labelledby"]||((a==null?void 0:a.labelId)??"")})]})});d.displayName="ToggleControl";d.__docgenInfo={description:"",methods:[],displayName:"ToggleControl",composes:["ComponentPropsWithRef"]};const po="_toggle_2vo1m_2",bo={toggle:po},c=m.forwardRef(({className:e,checked:o,children:t,defaultChecked:a,disabled:l,id:n,invalid:i,name:O,onCheckedChange:q,required:T,value:I,withLabels:A,...f},g)=>{const u=ke();return t||console.warn("[DEPRECATED]: Usage of <Toggle /> alone is not recommended. Please use a full composition using <ToggleControl /> (and <ToggleLabel> if needed). Like the following <Toggle><ToggleControl /></Toggle>"),s.jsx(Re,{withLabels:A,children:s.jsx(Pe,{checked:o,className:j(bo.toggle,t?e:""),"data-ods":"toggle",defaultChecked:a,disabled:l,id:n||(u==null?void 0:u.id),invalid:i||(u==null?void 0:u.invalid),name:O,onCheckedChange:q,ref:g,required:T,value:I,...f,children:t||s.jsx(d,{className:e})})})});c.displayName="Toggle";c.__docgenInfo={description:"",methods:[],displayName:"Toggle",props:{checked:{required:!1,tsType:{name:"boolean"},description:"The controlled checked state of the toggle."},defaultChecked:{required:!1,tsType:{name:"boolean"},description:"The initial checked state of the toggle. Use when you don't need to control the checked state of the toggle."},disabled:{required:!1,tsType:{name:"boolean"},description:"Whether the component is disabled."},invalid:{required:!1,tsType:{name:"boolean"},description:"Whether the component is in error state."},name:{required:!1,tsType:{name:"string"},description:"The name of the form element. Useful for form submission."},onCheckedChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(detail: ToggleCheckedChangeDetail) => void",signature:{arguments:[{type:{name:"ToggleCheckedChangeDetail"},name:"detail"}],return:{name:"void"}}},description:"Callback fired when the checked state changes."},required:{required:!1,tsType:{name:"boolean"},description:"Whether the component is required."},value:{required:!1,tsType:{name:"string"},description:"The value of form element. Useful for form submission."},withLabels:{required:!1,tsType:{name:"boolean"},description:'Whether the component displays "ON/OFF" labels.'}},composes:["ComponentPropsWithRef"]};const h=m.forwardRef(({children:e,...o},t)=>s.jsx(we,{"data-ods":"toggle-label",ref:t,...o,children:e}));h.displayName="ToggleLabel";h.__docgenInfo={description:"",methods:[],displayName:"ToggleLabel",composes:["ComponentPropsWithRef"]};const ho={argTypes:eo(["checked","defaultChecked","name","onCheckedChange","required","value"]),component:c,subcomponents:{ToggleControl:d,ToggleLabel:h},title:"React Components/Toggle"},v={argTypes:oo({disabled:{table:{category:V.general},control:"boolean"},invalid:{table:{category:V.general},control:"boolean"},withLabels:{table:{category:V.general},control:"boolean"}})},_={globals:{imports:"import { Toggle, ToggleControl } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>r.createElement(c,null,r.createElement(d,null))},E={tags:["!dev"],parameters:{layout:"centered"},render:({})=>r.createElement(c,null,r.createElement(d,null))},k={globals:{imports:"import { Toggle, ToggleControl } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>r.createElement(c,{disabled:!0},r.createElement(d,null))},y={decorators:[e=>r.createElement("div",{style:{display:"flex",flexFlow:"column",gap:"8px"}},e())],globals:{imports:"import { TEXT_PRESET, FormField, Text, Toggle, ToggleControl, ToggleLabel } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>r.createElement(r.Fragment,null,r.createElement(Oe,{preset:Ie.label},"Notification settings:"),r.createElement(X,null,r.createElement(c,null,r.createElement(d,null),r.createElement(h,null,"General Information"))),r.createElement(X,null,r.createElement(c,null,r.createElement(d,null),r.createElement(h,null,"Promotions"))))},x={globals:{imports:"import { Toggle, ToggleControl } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>r.createElement(c,{invalid:!0},r.createElement(d,null))},L={globals:{imports:"import { Toggle, ToggleControl, ToggleLabel } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>r.createElement(c,null,r.createElement(d,null),r.createElement(h,null,"Enable dark mode"))},w={globals:{imports:"import { Toggle, ToggleControl } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>r.createElement(c,{withLabels:!0},r.createElement(d,null))},S={globals:{imports:"import { Toggle, ToggleControl, ToggleLabel } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>r.createElement(c,null,r.createElement(d,null),r.createElement(h,null,"Enable dark mode"))},P={globals:{imports:"import { Toggle, ToggleControl, ToggleLabel } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>r.createElement(c,{"aria-label":"Enable dark mode"},r.createElement(d,null),r.createElement(h,null,"Dark mode"))};var U,Y,M;v.parameters={...v.parameters,docs:{...(U=v.parameters)==null?void 0:U.docs,source:{originalSource:`{
  argTypes: orderControls({
    disabled: {
      table: {
        category: CONTROL_CATEGORY.general
      },
      control: 'boolean'
    },
    invalid: {
      table: {
        category: CONTROL_CATEGORY.general
      },
      control: 'boolean'
    },
    withLabels: {
      table: {
        category: CONTROL_CATEGORY.general
      },
      control: 'boolean'
    }
  })
}`,...(M=(Y=v.parameters)==null?void 0:Y.docs)==null?void 0:M.source}}};var Q,J,Z;_.parameters={..._.parameters,docs:{...(Q=_.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  globals: {
    imports: \`import { Toggle, ToggleControl } from '@ovhcloud/ods-react';\`
  },
  tags: ['!dev'],
  render: ({}) => <Toggle>
      <ToggleControl />
    </Toggle>
}`,...(Z=(J=_.parameters)==null?void 0:J.docs)==null?void 0:Z.source}}};var z,ee,oe;E.parameters={...E.parameters,docs:{...(z=E.parameters)==null?void 0:z.docs,source:{originalSource:`{
  tags: ['!dev'],
  parameters: {
    layout: 'centered'
  },
  render: ({}) => <Toggle>
      <ToggleControl />
    </Toggle>
}`,...(oe=(ee=E.parameters)==null?void 0:ee.docs)==null?void 0:oe.source}}};var te,le,ae;k.parameters={...k.parameters,docs:{...(te=k.parameters)==null?void 0:te.docs,source:{originalSource:`{
  globals: {
    imports: \`import { Toggle, ToggleControl } from '@ovhcloud/ods-react';\`
  },
  tags: ['!dev'],
  render: ({}) => <Toggle disabled>
      <ToggleControl />
    </Toggle>
}`,...(ae=(le=k.parameters)==null?void 0:le.docs)==null?void 0:ae.source}}};var re,se,ne;y.parameters={...y.parameters,docs:{...(re=y.parameters)==null?void 0:re.docs,source:{originalSource:`{
  decorators: [story => <div style={{
    display: 'flex',
    flexFlow: 'column',
    gap: '8px'
  }}>{story()}</div>],
  globals: {
    imports: \`import { TEXT_PRESET, FormField, Text, Toggle, ToggleControl, ToggleLabel } from '@ovhcloud/ods-react';\`
  },
  tags: ['!dev'],
  render: ({}) => <>
      <Text preset={TEXT_PRESET.label}>
        Notification settings:
      </Text>

      <FormField>
        <Toggle>
          <ToggleControl />

          <ToggleLabel>
            General Information
          </ToggleLabel>
        </Toggle>
      </FormField>

      <FormField>
        <Toggle>
          <ToggleControl />

          <ToggleLabel>
            Promotions
          </ToggleLabel>
        </Toggle>
      </FormField>
    </>
}`,...(ne=(se=y.parameters)==null?void 0:se.docs)==null?void 0:ne.source}}};var de,ce,ie;x.parameters={...x.parameters,docs:{...(de=x.parameters)==null?void 0:de.docs,source:{originalSource:`{
  globals: {
    imports: \`import { Toggle, ToggleControl } from '@ovhcloud/ods-react';\`
  },
  tags: ['!dev'],
  render: ({}) => <Toggle invalid>
      <ToggleControl />
    </Toggle>
}`,...(ie=(ce=x.parameters)==null?void 0:ce.docs)==null?void 0:ie.source}}};var ge,me,ue;L.parameters={...L.parameters,docs:{...(ge=L.parameters)==null?void 0:ge.docs,source:{originalSource:`{
  globals: {
    imports: \`import { Toggle, ToggleControl, ToggleLabel } from '@ovhcloud/ods-react';\`
  },
  tags: ['!dev'],
  render: ({}) => <Toggle>
      <ToggleControl />

      <ToggleLabel>
        Enable dark mode
      </ToggleLabel>
    </Toggle>
}`,...(ue=(me=L.parameters)==null?void 0:me.docs)==null?void 0:ue.source}}};var pe,be,he;w.parameters={...w.parameters,docs:{...(pe=w.parameters)==null?void 0:pe.docs,source:{originalSource:`{
  globals: {
    imports: \`import { Toggle, ToggleControl } from '@ovhcloud/ods-react';\`
  },
  tags: ['!dev'],
  render: ({}) => <Toggle withLabels>
      <ToggleControl />
    </Toggle>
}`,...(he=(be=w.parameters)==null?void 0:be.docs)==null?void 0:he.source}}};var Te,fe,Ce;S.parameters={...S.parameters,docs:{...(Te=S.parameters)==null?void 0:Te.docs,source:{originalSource:`{
  globals: {
    imports: \`import { Toggle, ToggleControl, ToggleLabel } from '@ovhcloud/ods-react';\`
  },
  tags: ['!dev'],
  render: ({}) => <Toggle>
      <ToggleControl />

      <ToggleLabel>
        Enable dark mode
      </ToggleLabel>
    </Toggle>
}`,...(Ce=(fe=S.parameters)==null?void 0:fe.docs)==null?void 0:Ce.source}}};var ve,_e,Ee;P.parameters={...P.parameters,docs:{...(ve=P.parameters)==null?void 0:ve.docs,source:{originalSource:`{
  globals: {
    imports: \`import { Toggle, ToggleControl, ToggleLabel } from '@ovhcloud/ods-react';\`
  },
  tags: ['!dev'],
  render: ({}) => <Toggle aria-label="Enable dark mode">
      <ToggleControl />

      <ToggleLabel>
        Dark mode
      </ToggleLabel>
    </Toggle>
}`,...(Ee=(_e=P.parameters)==null?void 0:_e.docs)==null?void 0:Ee.source}}};const To=["Demo","Default","Overview","Disabled","InFormField","Invalid","WithLabel","WithLabels","AccessibilityLabel","AccessibilityAriaLabel"],wo=Object.freeze(Object.defineProperty({__proto__:null,AccessibilityAriaLabel:P,AccessibilityLabel:S,Default:_,Demo:v,Disabled:k,InFormField:y,Invalid:x,Overview:E,WithLabel:L,WithLabels:w,__namedExportsOrder:To,default:ho},Symbol.toStringTag,{value:"Module"}));export{S as A,_ as D,x as I,E as O,wo as T,L as W,P as a,k as b,w as c,y as d};
