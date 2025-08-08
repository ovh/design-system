import{r as u,e as r}from"./index-D_CmzhJ4.js";import{u as Ee,F as G}from"./FormFieldLabel-DQkMrZpp.js";import{T as Oe,a as Re}from"./Text-B1XN51Xz.js";import{j as l}from"./jsx-runtime-VM66peLj.js";import{c as q}from"./index-CkQHsVsO.js";import{c as Ie,Q as N,R as F,W as h,aA as De,T as je,d as qe,Z as Ae,K as Ve,H as He,_ as We,aB as Ge,aC as Ke,ap as Be,aD as Xe,u as $e,U as Ue,L as Me,V as Ye,a as Qe}from"./use-locale-context-DLC4Hyvy.js";import{u as ke}from"./use-field-context--XabuWSL.js";import{i as Ze,t as Je}from"./index-Rz4wIOao.js";import{e as ze,o as et,C as V}from"./controls-BtiQQn1l.js";const[tt,O]=Ie({name:"SwitchContext",hookName:"useSwitchContext",providerName:"<SwitchProvider />"}),ye=u.forwardRef((e,t)=>{const o=O(),s=N(o.getControlProps(),e);return l.jsx(F.span,{...s,ref:t})});ye.displayName="SwitchControl";const xe=u.forwardRef((e,t)=>{const o=O(),s=N(o.getHiddenInputProps(),e),a=ke();return l.jsx(F.input,{"aria-describedby":a==null?void 0:a.ariaDescribedby,...s,ref:t})});xe.displayName="SwitchHiddenInput";const we=u.forwardRef((e,t)=>{const o=O(),s=N(o.getLabelProps(),e);return l.jsx(F.span,{...s,ref:t})});we.displayName="SwitchLabel";var ot=je("switch").parts("root","label","control","thumb"),j=ot.build(),Le=e=>{var t;return((t=e.ids)==null?void 0:t.root)??`switch:${e.id}`},K=e=>{var t;return((t=e.ids)==null?void 0:t.label)??`switch:${e.id}:label`},at=e=>{var t;return((t=e.ids)==null?void 0:t.thumb)??`switch:${e.id}:thumb`},st=e=>{var t;return((t=e.ids)==null?void 0:t.control)??`switch:${e.id}:control`},H=e=>{var t;return((t=e.ids)==null?void 0:t.hiddenInput)??`switch:${e.id}:input`},rt=e=>e.getById(Le(e)),C=e=>e.getById(H(e));function lt(e,t){const{context:o,send:s,prop:a,scope:n}=e,i=a("disabled"),R=a("readOnly"),f=!!o.get("checked"),I=!i&&o.get("focused"),A=!i&&o.get("focusVisible"),T={"data-active":h(o.get("active")),"data-focus":h(I),"data-focus-visible":h(A),"data-readonly":h(R),"data-hover":h(o.get("hovered")),"data-disabled":h(i),"data-state":f?"checked":"unchecked","data-invalid":h(a("invalid"))};return{checked:f,disabled:i,focused:I,setChecked(g){s({type:"CHECKED.SET",checked:g,isTrusted:!1})},toggleChecked(){s({type:"CHECKED.TOGGLE",checked:f,isTrusted:!1})},getRootProps(){return t.label({...j.root.attrs,...T,dir:a("dir"),id:Le(n),htmlFor:H(n),onPointerMove(){i||s({type:"CONTEXT.SET",context:{hovered:!0}})},onPointerLeave(){i||s({type:"CONTEXT.SET",context:{hovered:!1}})},onClick(g){var m;if(i)return;qe(g)===C(n)&&g.stopPropagation(),Ae()&&((m=C(n))==null||m.focus())}})},getLabelProps(){return t.element({...j.label.attrs,...T,dir:a("dir"),id:K(n)})},getThumbProps(){return t.element({...j.thumb.attrs,...T,dir:a("dir"),id:at(n),"aria-hidden":!0})},getControlProps(){return t.element({...j.control.attrs,...T,dir:a("dir"),id:st(n),"aria-hidden":!0})},getHiddenInputProps(){return t.input({id:H(n),type:"checkbox",required:a("required"),defaultChecked:f,disabled:i,"aria-labelledby":K(n),"aria-invalid":a("invalid"),name:a("name"),form:a("form"),value:a("value"),style:De,onFocus(){const g=Ze();s({type:"CONTEXT.SET",context:{focused:!0,focusVisible:g}})},onBlur(){s({type:"CONTEXT.SET",context:{focused:!1,focusVisible:!1}})},onClick(g){if(R){g.preventDefault();return}const D=g.currentTarget.checked;s({type:"CHECKED.SET",checked:D,isTrusted:!0})}})}}}var{not:B}=We(),nt=He({props({props:e}){return{defaultChecked:!1,label:"switch",value:"on",...e}},initialState(){return"ready"},context({prop:e,bindable:t}){return{checked:t(()=>({defaultValue:e("defaultChecked"),value:e("checked"),onChange(o){var s;(s=e("onCheckedChange"))==null||s({checked:o})}})),fieldsetDisabled:t(()=>({defaultValue:!1})),focusVisible:t(()=>({defaultValue:!1})),active:t(()=>({defaultValue:!1})),focused:t(()=>({defaultValue:!1})),hovered:t(()=>({defaultValue:!1}))}},computed:{isDisabled:({context:e,prop:t})=>t("disabled")||e.get("fieldsetDisabled")},watch({track:e,prop:t,context:o,action:s}){e([()=>t("disabled")],()=>{s(["removeFocusIfNeeded"])}),e([()=>o.get("checked")],()=>{s(["syncInputElement"])})},effects:["trackFormControlState","trackPressEvent","trackFocusVisible"],on:{"CHECKED.TOGGLE":[{guard:B("isTrusted"),actions:["toggleChecked","dispatchChangeEvent"]},{actions:["toggleChecked"]}],"CHECKED.SET":[{guard:B("isTrusted"),actions:["setChecked","dispatchChangeEvent"]},{actions:["setChecked"]}],"CONTEXT.SET":{actions:["setContext"]}},states:{ready:{}},implementations:{guards:{isTrusted:({event:e})=>!!e.isTrusted},effects:{trackPressEvent({computed:e,scope:t,context:o}){if(!e("isDisabled"))return Xe({pointerNode:rt(t),keyboardNode:C(t),isValidKey:s=>s.key===" ",onPress:()=>o.set("active",!1),onPressStart:()=>o.set("active",!0),onPressEnd:()=>o.set("active",!1)})},trackFocusVisible({computed:e,scope:t}){if(!e("isDisabled"))return Je({root:t.getRootNode()})},trackFormControlState({context:e,send:t,scope:o}){return Be(C(o),{onFieldsetDisabledChange(s){e.set("fieldsetDisabled",s)},onFormReset(){const s=e.initial("checked");t({type:"CHECKED.SET",checked:!!s,src:"form-reset"})}})}},actions:{setContext({context:e,event:t}){for(const o in t.context)e.set(o,t.context[o])},syncInputElement({context:e,scope:t}){const o=C(t);o&&Ke(o,!!e.get("checked"))},removeFocusIfNeeded({context:e,prop:t}){t("disabled")&&e.set("focused",!1)},setChecked({context:e,event:t}){e.set("checked",t.checked)},toggleChecked({context:e}){e.set("checked",!e.get("checked"))},dispatchChangeEvent({context:e,scope:t}){const o=C(t);Ge(o,{checked:e.get("checked")})}}}});Ve()(["checked","defaultChecked","dir","disabled","form","getRootNode","id","ids","invalid","label","name","onCheckedChange","readOnly","required","value"]);const dt=e=>{const t=u.useId(),{getRootNode:o}=$e(),{dir:s}=Ue(),a=ke(),n={id:t,ids:{label:a==null?void 0:a.ids.label,hiddenInput:a==null?void 0:a.ids.control},dir:s,disabled:a==null?void 0:a.disabled,readOnly:a==null?void 0:a.readOnly,invalid:a==null?void 0:a.invalid,required:a==null?void 0:a.required,getRootNode:o,...e},i=Me(nt,n);return lt(i,Ye)},Se=u.forwardRef((e,t)=>{const[o,s]=Qe()(e,["checked","defaultChecked","disabled","form","id","ids","invalid","label","name","onCheckedChange","readOnly","required","value"]),a=dt(o),n=N(a.getRootProps(),s);return l.jsx(tt,{value:a,children:l.jsx(F.label,{...n,ref:t})})});Se.displayName="SwitchRoot";const Pe=u.forwardRef((e,t)=>{const o=O(),s=N(o.getThumbProps(),e);return l.jsx(F.span,{...s,ref:t})});Pe.displayName="SwitchThumb";const Ne=u.createContext({});function Fe({children:e,withLabels:t}){return l.jsx(Ne.Provider,{value:{withLabels:t},children:e})}function ct(){return u.useContext(Ne)}Fe.__docgenInfo={description:"",methods:[],displayName:"ToggleProvider",props:{children:{required:!0,tsType:{name:"ReactNode"},description:""}},composes:["ToggleContextType"]};const p={"toggle-labels":"_toggle-labels_1ekxx_2","toggle-labels__label-on":"_toggle-labels__label-on_1ekxx_13","toggle-labels__label-off":"_toggle-labels__label-off_1ekxx_13","toggle-labels__label-on--checked":"_toggle-labels__label-on--checked_1ekxx_22","toggle-labels__label-on--disabled":"_toggle-labels__label-on--disabled_1ekxx_25","toggle-labels__label-off--unchecked":"_toggle-labels__label-off--unchecked_1ekxx_32","toggle-labels__label-off--focused":"_toggle-labels__label-off--focused_1ekxx_35","toggle-labels__label-off--disabled":"_toggle-labels__label-off--disabled_1ekxx_35"},it="ON",gt="OFF",W=()=>{const{checked:e,disabled:t,focused:o}=O();return l.jsxs("span",{className:p["toggle-labels"],children:[l.jsx("span",{className:q(p["toggle-labels__label-on"],{[p["toggle-labels__label-on--checked"]]:e},{[p["toggle-labels__label-on--disabled"]]:t}),children:it}),l.jsx("span",{className:q(p["toggle-labels__label-off"],{[p["toggle-labels__label-off--unchecked"]]:!e},{[p["toggle-labels__label-off--disabled"]]:t},{[p["toggle-labels__label-off--focused"]]:o}),children:gt})]})};W.displayName="ToggleLabels";W.__docgenInfo={description:"",methods:[],displayName:"ToggleLabels"};const X={"toggle-control":"_toggle-control_t6d2a_2","toggle-control__thumb":"_toggle-control__thumb_t6d2a_42"},d=u.forwardRef(({className:e,...t},o)=>{const s=Ee(),{withLabels:a}=ct();return l.jsxs(l.Fragment,{children:[l.jsxs(ye,{className:q(X["toggle-control"],e),"data-ods":"toggle-control",ref:o,...t,children:[l.jsx(Pe,{className:X["toggle-control__thumb"]}),a&&l.jsx(W,{})]}),l.jsx(xe,{"aria-describedby":t["aria-describedby"]||(s==null?void 0:s.ariaDescribedBy),"aria-labelledby":t["aria-labelledby"]||((s==null?void 0:s.labelId)??"")})]})});d.displayName="ToggleControl";d.__docgenInfo={description:"",methods:[],displayName:"ToggleControl",composes:["ComponentPropsWithRef"]};const ut="_toggle_2vo1m_2",mt={toggle:ut},c=u.forwardRef(({className:e,checked:t,children:o,defaultChecked:s,disabled:a,id:n,invalid:i,name:R,onCheckedChange:f,required:I,value:A,withLabels:T,...g},D)=>{const m=Ee();return o||console.warn("[DEPRECATED]: Usage of <Toggle /> alone is not recommended. Please use a full composition using <ToggleControl /> (and <ToggleLabel> if needed). Like the following <Toggle><ToggleControl /></Toggle>"),l.jsx(Fe,{withLabels:T,children:l.jsx(Se,{checked:t,className:q(mt.toggle,o?e:""),"data-ods":"toggle",defaultChecked:s,disabled:a,id:n||(m==null?void 0:m.id),invalid:i||(m==null?void 0:m.invalid),name:R,onCheckedChange:f,ref:D,required:I,value:A,...g,children:o||l.jsx(d,{className:e})})})});c.displayName="Toggle";c.__docgenInfo={description:"",methods:[],displayName:"Toggle",props:{checked:{required:!1,tsType:{name:"boolean"},description:"The controlled checked state of the toggle."},defaultChecked:{required:!1,tsType:{name:"boolean"},description:"The initial checked state of the toggle. Use when you don't need to control the checked state of the toggle."},disabled:{required:!1,tsType:{name:"boolean"},description:"Whether the component is disabled."},invalid:{required:!1,tsType:{name:"boolean"},description:"Whether the component is in error state."},name:{required:!1,tsType:{name:"string"},description:"The name of the form element. Useful for form submission."},onCheckedChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(detail: ToggleCheckedChangeDetail) => void",signature:{arguments:[{type:{name:"ToggleCheckedChangeDetail"},name:"detail"}],return:{name:"void"}}},description:"Callback fired when the checked state changes."},required:{required:!1,tsType:{name:"boolean"},description:"Whether the component is required."},value:{required:!1,tsType:{name:"string"},description:"The value of form element. Useful for form submission."},withLabels:{required:!1,tsType:{name:"boolean"},description:'Whether the component displays "ON/OFF" labels.'}},composes:["ComponentPropsWithRef"]};const b=u.forwardRef(({children:e,...t},o)=>l.jsx(we,{"data-ods":"toggle-label",ref:o,...t,children:e}));b.displayName="ToggleLabel";b.__docgenInfo={description:"",methods:[],displayName:"ToggleLabel",composes:["ComponentPropsWithRef"]};const pt={argTypes:ze(["checked","defaultChecked","name","onCheckedChange","required","value"]),component:c,subcomponents:{ToggleControl:d,ToggleLabel:b},title:"React Components/Toggle"},_={argTypes:et({disabled:{table:{category:V.general},control:"boolean"},invalid:{table:{category:V.general},control:"boolean"},withLabels:{table:{category:V.general},control:"boolean"}})},v={tags:["!dev"],render:({})=>r.createElement(c,null,r.createElement(d,null))},E={tags:["!dev"],parameters:{layout:"centered"},render:({})=>r.createElement(c,null,r.createElement(d,null))},k={tags:["!dev"],render:({})=>r.createElement(c,{disabled:!0},r.createElement(d,null))},y={decorators:[e=>r.createElement("div",{style:{display:"flex",flexFlow:"column",gap:"8px"}},e())],tags:["!dev"],render:({})=>r.createElement(r.Fragment,null,r.createElement(Oe,{preset:Re.label},"Notification settings:"),r.createElement(G,null,r.createElement(c,null,r.createElement(d,null),r.createElement(b,null,"General Information"))),r.createElement(G,null,r.createElement(c,null,r.createElement(d,null),r.createElement(b,null,"Promotions"))))},x={tags:["!dev"],render:({})=>r.createElement(c,{invalid:!0},r.createElement(d,null))},w={tags:["!dev"],render:({})=>r.createElement(c,null,r.createElement(d,null),r.createElement(b,null,"Enable dark mode"))},L={tags:["!dev"],render:({})=>r.createElement(c,{withLabels:!0},r.createElement(d,null))},S={tags:["!dev"],render:({})=>r.createElement(c,null,r.createElement(d,null),r.createElement(b,null,"Enable dark mode"))},P={tags:["!dev"],render:({})=>r.createElement(c,{"aria-label":"Enable dark mode"},r.createElement(d,null),r.createElement(b,null,"Dark mode"))};var $,U,M;_.parameters={..._.parameters,docs:{...($=_.parameters)==null?void 0:$.docs,source:{originalSource:`{
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
}`,...(M=(U=_.parameters)==null?void 0:U.docs)==null?void 0:M.source}}};var Y,Q,Z;v.parameters={...v.parameters,docs:{...(Y=v.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: ({}) => <Toggle>
      <ToggleControl />
    </Toggle>
}`,...(Z=(Q=v.parameters)==null?void 0:Q.docs)==null?void 0:Z.source}}};var J,z,ee;E.parameters={...E.parameters,docs:{...(J=E.parameters)==null?void 0:J.docs,source:{originalSource:`{
  tags: ['!dev'],
  parameters: {
    layout: 'centered'
  },
  render: ({}) => <Toggle>
      <ToggleControl />
    </Toggle>
}`,...(ee=(z=E.parameters)==null?void 0:z.docs)==null?void 0:ee.source}}};var te,oe,ae;k.parameters={...k.parameters,docs:{...(te=k.parameters)==null?void 0:te.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: ({}) => <Toggle disabled>
      <ToggleControl />
    </Toggle>
}`,...(ae=(oe=k.parameters)==null?void 0:oe.docs)==null?void 0:ae.source}}};var se,re,le;y.parameters={...y.parameters,docs:{...(se=y.parameters)==null?void 0:se.docs,source:{originalSource:`{
  decorators: [story => <div style={{
    display: 'flex',
    flexFlow: 'column',
    gap: '8px'
  }}>{story()}</div>],
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
}`,...(le=(re=y.parameters)==null?void 0:re.docs)==null?void 0:le.source}}};var ne,de,ce;x.parameters={...x.parameters,docs:{...(ne=x.parameters)==null?void 0:ne.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: ({}) => <Toggle invalid>
      <ToggleControl />
    </Toggle>
}`,...(ce=(de=x.parameters)==null?void 0:de.docs)==null?void 0:ce.source}}};var ie,ge,ue;w.parameters={...w.parameters,docs:{...(ie=w.parameters)==null?void 0:ie.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: ({}) => <Toggle>
      <ToggleControl />

      <ToggleLabel>Enable dark mode</ToggleLabel>
    </Toggle>
}`,...(ue=(ge=w.parameters)==null?void 0:ge.docs)==null?void 0:ue.source}}};var me,pe,be;L.parameters={...L.parameters,docs:{...(me=L.parameters)==null?void 0:me.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: ({}) => <Toggle withLabels>
      <ToggleControl />
    </Toggle>
}`,...(be=(pe=L.parameters)==null?void 0:pe.docs)==null?void 0:be.source}}};var he,fe,Te;S.parameters={...S.parameters,docs:{...(he=S.parameters)==null?void 0:he.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: ({}) => <Toggle>
      <ToggleControl />
      <ToggleLabel>Enable dark mode</ToggleLabel>
    </Toggle>
}`,...(Te=(fe=S.parameters)==null?void 0:fe.docs)==null?void 0:Te.source}}};var Ce,_e,ve;P.parameters={...P.parameters,docs:{...(Ce=P.parameters)==null?void 0:Ce.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: ({}) => <Toggle aria-label="Enable dark mode">
      <ToggleControl />
      <ToggleLabel>Dark mode</ToggleLabel>
    </Toggle>
}`,...(ve=(_e=P.parameters)==null?void 0:_e.docs)==null?void 0:ve.source}}};const bt=["Demo","Default","Overview","Disabled","InFormField","Invalid","WithLabel","WithLabels","AccessibilityLabel","AccessibilityAriaLabel"],xt=Object.freeze(Object.defineProperty({__proto__:null,AccessibilityAriaLabel:P,AccessibilityLabel:S,Default:v,Demo:_,Disabled:k,InFormField:y,Invalid:x,Overview:E,WithLabel:w,WithLabels:L,__namedExportsOrder:bt,default:pt},Symbol.toStringTag,{value:"Module"}));export{S as A,v as D,x as I,E as O,xt as T,w as W,P as a,k as b,L as c,y as d};
