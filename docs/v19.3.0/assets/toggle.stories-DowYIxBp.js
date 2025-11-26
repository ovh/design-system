import{r as m,e as a}from"./index-jIWwRBLr.js";import{u as we,F as B}from"./FormFieldLabel-B8-lDkmb.js";import{T as qe,a as Ae}from"./Text-DyiJ5nHV.js";import{j as n}from"./jsx-runtime-Cfl8ynUo.js";import{c as q}from"./index-CqY9YpN0.js";import{c as Ve,T as N,U as R,P as b,aA as We,Q as Ge,d as He,X as Xe,C as Be,z as Ke,Y as $e,aB as ze,aC as Ue,am as Ye,aD as Me,u as Qe,R as Je,D as Ze,S as eo,a as oo}from"./use-locale-context-6s5qsrWI.js";import{u as Se}from"./use-field-context-BOfmBRZb.js";import{i as to,t as lo}from"./index-Dp00x3gb.js";import{e as ao,o as ro,C as W}from"./controls-BtiQQn1l.js";const[no,O]=Ve({name:"SwitchContext",hookName:"useSwitchContext",providerName:"<SwitchProvider />"}),Pe=m.forwardRef((e,o)=>{const t=O(),r=N(t.getControlProps(),e);return n.jsx(R.span,{...r,ref:o})});Pe.displayName="SwitchControl";const Fe=m.forwardRef((e,o)=>{const t=O(),r=N(t.getHiddenInputProps(),e),l=Se();return n.jsx(R.input,{"aria-describedby":l==null?void 0:l.ariaDescribedby,...r,ref:o})});Fe.displayName="SwitchHiddenInput";const Ne=m.forwardRef((e,o)=>{const t=O(),r=N(t.getLabelProps(),e);return n.jsx(R.span,{...r,ref:o})});Ne.displayName="SwitchLabel";var so=Ge("switch").parts("root","label","control","thumb"),j=so.build(),Re=e=>{var o;return((o=e.ids)==null?void 0:o.root)??`switch:${e.id}`},K=e=>{var o;return((o=e.ids)==null?void 0:o.label)??`switch:${e.id}:label`},co=e=>{var o;return((o=e.ids)==null?void 0:o.thumb)??`switch:${e.id}:thumb`},io=e=>{var o;return((o=e.ids)==null?void 0:o.control)??`switch:${e.id}:control`},G=e=>{var o;return((o=e.ids)==null?void 0:o.hiddenInput)??`switch:${e.id}:input`},go=e=>e.getById(Re(e)),C=e=>e.getById(G(e));function mo(e,o){const{context:t,send:r,prop:l,scope:c}=e,i=!!l("disabled"),I=!!l("readOnly"),A=!!l("required"),T=!!t.get("checked"),D=!i&&t.get("focused"),V=!i&&t.get("focusVisible"),f={"data-active":b(t.get("active")),"data-focus":b(D),"data-focus-visible":b(V),"data-readonly":b(I),"data-hover":b(t.get("hovered")),"data-disabled":b(i),"data-state":T?"checked":"unchecked","data-invalid":b(l("invalid")),"data-required":b(A)};return{checked:T,disabled:i,focused:D,setChecked(g){r({type:"CHECKED.SET",checked:g,isTrusted:!1})},toggleChecked(){r({type:"CHECKED.TOGGLE",checked:T,isTrusted:!1})},getRootProps(){return o.label({...j.root.attrs,...f,dir:l("dir"),id:Re(c),htmlFor:G(c),onPointerMove(){i||r({type:"CONTEXT.SET",context:{hovered:!0}})},onPointerLeave(){i||r({type:"CONTEXT.SET",context:{hovered:!1}})},onClick(g){var X;if(i)return;He(g)===C(c)&&g.stopPropagation(),Xe()&&((X=C(c))==null||X.focus())}})},getLabelProps(){return o.element({...j.label.attrs,...f,dir:l("dir"),id:K(c)})},getThumbProps(){return o.element({...j.thumb.attrs,...f,dir:l("dir"),id:co(c),"aria-hidden":!0})},getControlProps(){return o.element({...j.control.attrs,...f,dir:l("dir"),id:io(c),"aria-hidden":!0})},getHiddenInputProps(){return o.input({id:G(c),type:"checkbox",required:l("required"),defaultChecked:T,disabled:i,"aria-labelledby":K(c),"aria-invalid":l("invalid"),name:l("name"),form:l("form"),value:l("value"),style:We,onFocus(){const g=to();r({type:"CONTEXT.SET",context:{focused:!0,focusVisible:g}})},onBlur(){r({type:"CONTEXT.SET",context:{focused:!1,focusVisible:!1}})},onClick(g){if(I){g.preventDefault();return}const u=g.currentTarget.checked;r({type:"CHECKED.SET",checked:u,isTrusted:!0})}})}}}var{not:$}=$e(),uo=Ke({props({props:e}){return{defaultChecked:!1,label:"switch",value:"on",...e}},initialState(){return"ready"},context({prop:e,bindable:o}){return{checked:o(()=>({defaultValue:e("defaultChecked"),value:e("checked"),onChange(t){var r;(r=e("onCheckedChange"))==null||r({checked:t})}})),fieldsetDisabled:o(()=>({defaultValue:!1})),focusVisible:o(()=>({defaultValue:!1})),active:o(()=>({defaultValue:!1})),focused:o(()=>({defaultValue:!1})),hovered:o(()=>({defaultValue:!1}))}},computed:{isDisabled:({context:e,prop:o})=>o("disabled")||e.get("fieldsetDisabled")},watch({track:e,prop:o,context:t,action:r}){e([()=>o("disabled")],()=>{r(["removeFocusIfNeeded"])}),e([()=>t.get("checked")],()=>{r(["syncInputElement"])})},effects:["trackFormControlState","trackPressEvent","trackFocusVisible"],on:{"CHECKED.TOGGLE":[{guard:$("isTrusted"),actions:["toggleChecked","dispatchChangeEvent"]},{actions:["toggleChecked"]}],"CHECKED.SET":[{guard:$("isTrusted"),actions:["setChecked","dispatchChangeEvent"]},{actions:["setChecked"]}],"CONTEXT.SET":{actions:["setContext"]}},states:{ready:{}},implementations:{guards:{isTrusted:({event:e})=>!!e.isTrusted},effects:{trackPressEvent({computed:e,scope:o,context:t}){if(!e("isDisabled"))return Me({pointerNode:go(o),keyboardNode:C(o),isValidKey:r=>r.key===" ",onPress:()=>t.set("active",!1),onPressStart:()=>t.set("active",!0),onPressEnd:()=>t.set("active",!1)})},trackFocusVisible({computed:e,scope:o}){if(!e("isDisabled"))return lo({root:o.getRootNode()})},trackFormControlState({context:e,send:o,scope:t}){return Ye(C(t),{onFieldsetDisabledChange(r){e.set("fieldsetDisabled",r)},onFormReset(){const r=e.initial("checked");o({type:"CHECKED.SET",checked:!!r,src:"form-reset"})}})}},actions:{setContext({context:e,event:o}){for(const t in o.context)e.set(t,o.context[t])},syncInputElement({context:e,scope:o}){const t=C(o);t&&Ue(t,!!e.get("checked"))},removeFocusIfNeeded({context:e,prop:o}){o("disabled")&&e.set("focused",!1)},setChecked({context:e,event:o}){e.set("checked",o.checked)},toggleChecked({context:e}){e.set("checked",!e.get("checked"))},dispatchChangeEvent({context:e,scope:o}){const t=C(o);ze(t,{checked:e.get("checked")})}}}});Be()(["checked","defaultChecked","dir","disabled","form","getRootNode","id","ids","invalid","label","name","onCheckedChange","readOnly","required","value"]);const po=e=>{const o=m.useId(),{getRootNode:t}=Qe(),{dir:r}=Je(),l=Se(),c={id:o,ids:{label:l==null?void 0:l.ids.label,hiddenInput:l==null?void 0:l.ids.control},dir:r,disabled:l==null?void 0:l.disabled,readOnly:l==null?void 0:l.readOnly,invalid:l==null?void 0:l.invalid,required:l==null?void 0:l.required,getRootNode:t,...e},i=Ze(uo,c);return mo(i,eo)},Oe=m.forwardRef((e,o)=>{const[t,r]=oo()(e,["checked","defaultChecked","disabled","form","id","ids","invalid","label","name","onCheckedChange","readOnly","required","value"]),l=po(t),c=N(l.getRootProps(),r);return n.jsx(no,{value:l,children:n.jsx(R.label,{...c,ref:o})})});Oe.displayName="SwitchRoot";const Ie=m.forwardRef((e,o)=>{const t=O(),r=N(t.getThumbProps(),e);return n.jsx(R.span,{...r,ref:o})});Ie.displayName="SwitchThumb";const De=m.createContext({});function je({children:e,withLabels:o}){return n.jsx(De.Provider,{value:{withLabels:o},children:e})}function bo(){return m.useContext(De)}je.__docgenInfo={description:"",methods:[],displayName:"ToggleProvider",props:{children:{required:!0,tsType:{name:"ReactNode"},description:""}},composes:["ToggleContextType"]};const h={"toggle-labels":"_toggle-labels_5uzdx_2","toggle-labels__label-on":"_toggle-labels__label-on_5uzdx_13","toggle-labels__label-off":"_toggle-labels__label-off_5uzdx_13","toggle-labels__label-on--checked":"_toggle-labels__label-on--checked_5uzdx_22","toggle-labels__label-on--disabled":"_toggle-labels__label-on--disabled_5uzdx_25","toggle-labels__label-off--unchecked":"_toggle-labels__label-off--unchecked_5uzdx_32","toggle-labels__label-off--disabled":"_toggle-labels__label-off--disabled_5uzdx_35"},ho="ON",To="OFF",H=()=>{const{checked:e,disabled:o,focused:t}=O();return n.jsxs("span",{className:h["toggle-labels"],children:[n.jsx("span",{className:q(h["toggle-labels__label-on"],{[h["toggle-labels__label-on--checked"]]:e},{[h["toggle-labels__label-on--disabled"]]:o}),children:ho}),n.jsx("span",{className:q(h["toggle-labels__label-off"],{[h["toggle-labels__label-off--unchecked"]]:!e},{[h["toggle-labels__label-off--disabled"]]:o},{[h["toggle-labels__label-off--focused"]]:t}),children:To})]})};H.displayName="ToggleLabels";H.__docgenInfo={description:"",methods:[],displayName:"ToggleLabels"};const z={"toggle-control":"_toggle-control_n25s1_2","toggle-control__thumb":"_toggle-control__thumb_n25s1_49"},s=m.forwardRef(({className:e,...o},t)=>{const r=we(),{withLabels:l}=bo();return n.jsxs(n.Fragment,{children:[n.jsxs(Pe,{className:q(z["toggle-control"],e),"data-ods":"toggle-control",ref:t,...o,children:[n.jsx(Ie,{className:z["toggle-control__thumb"]}),l&&n.jsx(H,{})]}),n.jsx(Fe,{"aria-describedby":o["aria-describedby"]||(r==null?void 0:r.ariaDescribedBy),"aria-labelledby":o["aria-labelledby"]||((r==null?void 0:r.labelId)??"")})]})});s.displayName="ToggleControl";s.__docgenInfo={description:"",methods:[],displayName:"ToggleControl",composes:["ComponentPropsWithRef"]};const fo="_toggle_8pxva_2",Co={toggle:fo},d=m.forwardRef(({className:e,checked:o,children:t,defaultChecked:r,disabled:l,id:c,invalid:i,name:I,onCheckedChange:A,required:T,value:D,withLabels:V,...f},g)=>{const u=we();return t||console.warn("[DEPRECATED]: Usage of <Toggle /> alone is not recommended. Please use a full composition using <ToggleControl /> (and <ToggleLabel> if needed). Like the following <Toggle><ToggleControl /></Toggle>"),n.jsx(je,{withLabels:V,children:n.jsx(Oe,{checked:o,className:q(Co.toggle,t?e:""),"data-ods":"toggle",defaultChecked:r,disabled:l,id:c||(u==null?void 0:u.id),invalid:i||(u==null?void 0:u.invalid),name:I,onCheckedChange:A,ref:g,required:T,value:D,...f,children:t||n.jsx(s,{className:e})})})});d.displayName="Toggle";d.__docgenInfo={description:"",methods:[],displayName:"Toggle",props:{checked:{required:!1,tsType:{name:"boolean"},description:"The controlled checked state of the toggle."},defaultChecked:{required:!1,tsType:{name:"boolean"},description:"The initial checked state of the toggle. Use when you don't need to control the checked state of the toggle."},disabled:{required:!1,tsType:{name:"boolean"},description:"Whether the component is disabled."},invalid:{required:!1,tsType:{name:"boolean"},description:"Whether the component is in error state."},name:{required:!1,tsType:{name:"string"},description:"The name of the form element. Useful for form submission."},onCheckedChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(detail: ToggleCheckedChangeDetail) => void",signature:{arguments:[{type:{name:"ToggleCheckedChangeDetail"},name:"detail"}],return:{name:"void"}}},description:"Callback fired when the checked state changes."},required:{required:!1,tsType:{name:"boolean"},description:"Whether the component is required."},value:{required:!1,tsType:{name:"string"},description:"The value of form element. Useful for form submission."},withLabels:{required:!1,tsType:{name:"boolean"},description:'Whether the component displays "ON/OFF" labels.'}},composes:["ComponentPropsWithRef"]};const p=m.forwardRef(({children:e,...o},t)=>n.jsx(Ne,{"data-ods":"toggle-label",ref:t,...o,children:e}));p.displayName="ToggleLabel";p.__docgenInfo={description:"",methods:[],displayName:"ToggleLabel",composes:["ComponentPropsWithRef"]};const vo={argTypes:ao(["checked","defaultChecked","name","onCheckedChange","required","value"]),component:d,subcomponents:{ToggleControl:s,ToggleLabel:p},title:"React Components/Toggle"},v={argTypes:ro({disabled:{table:{category:W.general},control:"boolean"},invalid:{table:{category:W.general},control:"boolean"},withLabels:{table:{category:W.general},control:"boolean"}})},E={globals:{imports:"import { Toggle, ToggleControl } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>a.createElement(d,null,a.createElement(s,null))},y={tags:["!dev"],parameters:{layout:"centered"},render:({})=>a.createElement(d,null,a.createElement(s,null))},_={globals:{imports:"import { Toggle, ToggleControl } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>a.createElement(d,{disabled:!0},a.createElement(s,null))},k={decorators:[e=>a.createElement("div",{style:{display:"flex",flexFlow:"column",gap:"8px"}},e())],globals:{imports:"import { TEXT_PRESET, FormField, Text, Toggle, ToggleControl, ToggleLabel } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>a.createElement(a.Fragment,null,a.createElement(qe,{preset:Ae.label},"Notification settings:"),a.createElement(B,null,a.createElement(d,null,a.createElement(s,null),a.createElement(p,null,"General Information"))),a.createElement(B,null,a.createElement(d,null,a.createElement(s,null),a.createElement(p,null,"Promotions"))))},L={globals:{imports:"import { Toggle, ToggleControl } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>a.createElement(d,{invalid:!0},a.createElement(s,null))},x={globals:{imports:"import { Toggle, ToggleControl, ToggleLabel } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>a.createElement(d,null,a.createElement(s,null),a.createElement(p,null,"Enable dark mode"))},w={globals:{imports:"import { Toggle, ToggleControl } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>a.createElement(d,{withLabels:!0},a.createElement(s,null))},S={globals:{imports:"import { Toggle, ToggleControl, ToggleLabel } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>a.createElement(d,null,a.createElement(s,null),a.createElement(p,null,"Enable dark mode"))},P={globals:{imports:"import { Toggle, ToggleControl, ToggleLabel } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>a.createElement(d,{"aria-label":"Enable dark mode"},a.createElement(s,null),a.createElement(p,null,"Dark mode"))},F={parameters:{layout:"fullscreen"},tags:["!dev"],render:({})=>a.createElement("div",{style:{display:"flex",gap:"24px",alignItems:"center"}},a.createElement(d,null,a.createElement(s,null)),a.createElement(d,{disabled:!0},a.createElement(s,null)),a.createElement(d,{invalid:!0},a.createElement(s,null)),a.createElement(d,{withLabels:!0},a.createElement(s,null)),a.createElement(d,null,a.createElement(s,null),a.createElement(p,null,"With label")))};var U,Y,M;v.parameters={...v.parameters,docs:{...(U=v.parameters)==null?void 0:U.docs,source:{originalSource:`{
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
}`,...(M=(Y=v.parameters)==null?void 0:Y.docs)==null?void 0:M.source}}};var Q,J,Z;E.parameters={...E.parameters,docs:{...(Q=E.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  globals: {
    imports: \`import { Toggle, ToggleControl } from '@ovhcloud/ods-react';\`
  },
  tags: ['!dev'],
  render: ({}) => <Toggle>
      <ToggleControl />
    </Toggle>
}`,...(Z=(J=E.parameters)==null?void 0:J.docs)==null?void 0:Z.source}}};var ee,oe,te;y.parameters={...y.parameters,docs:{...(ee=y.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  tags: ['!dev'],
  parameters: {
    layout: 'centered'
  },
  render: ({}) => <Toggle>
      <ToggleControl />
    </Toggle>
}`,...(te=(oe=y.parameters)==null?void 0:oe.docs)==null?void 0:te.source}}};var le,ae,re;_.parameters={..._.parameters,docs:{...(le=_.parameters)==null?void 0:le.docs,source:{originalSource:`{
  globals: {
    imports: \`import { Toggle, ToggleControl } from '@ovhcloud/ods-react';\`
  },
  tags: ['!dev'],
  render: ({}) => <Toggle disabled>
      <ToggleControl />
    </Toggle>
}`,...(re=(ae=_.parameters)==null?void 0:ae.docs)==null?void 0:re.source}}};var ne,se,de;k.parameters={...k.parameters,docs:{...(ne=k.parameters)==null?void 0:ne.docs,source:{originalSource:`{
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
}`,...(de=(se=k.parameters)==null?void 0:se.docs)==null?void 0:de.source}}};var ce,ie,ge;L.parameters={...L.parameters,docs:{...(ce=L.parameters)==null?void 0:ce.docs,source:{originalSource:`{
  globals: {
    imports: \`import { Toggle, ToggleControl } from '@ovhcloud/ods-react';\`
  },
  tags: ['!dev'],
  render: ({}) => <Toggle invalid>
      <ToggleControl />
    </Toggle>
}`,...(ge=(ie=L.parameters)==null?void 0:ie.docs)==null?void 0:ge.source}}};var me,ue,pe;x.parameters={...x.parameters,docs:{...(me=x.parameters)==null?void 0:me.docs,source:{originalSource:`{
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
}`,...(pe=(ue=x.parameters)==null?void 0:ue.docs)==null?void 0:pe.source}}};var be,he,Te;w.parameters={...w.parameters,docs:{...(be=w.parameters)==null?void 0:be.docs,source:{originalSource:`{
  globals: {
    imports: \`import { Toggle, ToggleControl } from '@ovhcloud/ods-react';\`
  },
  tags: ['!dev'],
  render: ({}) => <Toggle withLabels>
      <ToggleControl />
    </Toggle>
}`,...(Te=(he=w.parameters)==null?void 0:he.docs)==null?void 0:Te.source}}};var fe,Ce,ve;S.parameters={...S.parameters,docs:{...(fe=S.parameters)==null?void 0:fe.docs,source:{originalSource:`{
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
}`,...(ve=(Ce=S.parameters)==null?void 0:Ce.docs)==null?void 0:ve.source}}};var Ee,ye,_e;P.parameters={...P.parameters,docs:{...(Ee=P.parameters)==null?void 0:Ee.docs,source:{originalSource:`{
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
}`,...(_e=(ye=P.parameters)==null?void 0:ye.docs)==null?void 0:_e.source}}};var ke,Le,xe;F.parameters={...F.parameters,docs:{...(ke=F.parameters)==null?void 0:ke.docs,source:{originalSource:`{
  parameters: {
    layout: 'fullscreen'
  },
  tags: ['!dev'],
  render: ({}) => <div style={{
    display: 'flex',
    gap: '24px',
    alignItems: 'center'
  }}>
      <Toggle>
        <ToggleControl />
      </Toggle>

      <Toggle disabled>
        <ToggleControl />
      </Toggle>

      <Toggle invalid>
        <ToggleControl />
      </Toggle>

      <Toggle withLabels>
        <ToggleControl />
      </Toggle>

      <Toggle>
        <ToggleControl />
        <ToggleLabel>With label</ToggleLabel>
      </Toggle>
    </div>
}`,...(xe=(Le=F.parameters)==null?void 0:Le.docs)==null?void 0:xe.source}}};const Eo=["Demo","Default","Overview","Disabled","InFormField","Invalid","WithLabel","WithLabels","AccessibilityLabel","AccessibilityAriaLabel","ThemeGenerator"],No=Object.freeze(Object.defineProperty({__proto__:null,AccessibilityAriaLabel:P,AccessibilityLabel:S,Default:E,Demo:v,Disabled:_,InFormField:k,Invalid:L,Overview:y,ThemeGenerator:F,WithLabel:x,WithLabels:w,__namedExportsOrder:Eo,default:vo},Symbol.toStringTag,{value:"Module"}));export{S as A,E as D,L as I,y as O,No as T,x as W,P as a,_ as b,w as c,k as d};
