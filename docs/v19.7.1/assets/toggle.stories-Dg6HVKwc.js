import{r as u,e as t}from"./index-jIWwRBLr.js";import{u as Oe,F as K}from"./index-B0M5RXeR.js";import{T as He,a as Xe}from"./Text-CAQM6i-X.js";import{j as s}from"./jsx-runtime-Cfl8ynUo.js";import{c as A}from"./index-CqY9YpN0.js";import{u as $e}from"./context-C_-r2uoG.js";import{c as ze,M as O,N as R,O as b,ay as Ke,P as Be,d as Me,R as Ue,C as Ye,z as Je,S as Qe,av as Ze,az as eo,am as oo,aA as to,$ as lo,u as ao,D as ro,a0 as no,a as so}from"./use-locale-context-CGqEQCyU.js";import{u as Re}from"./use-field-context-Dkm7CMfi.js";import{i as co,t as go}from"./index-XMtSmgu6.js";import{e as io,o as mo,C as G}from"./controls-BtiQQn1l.js";const[uo,I]=ze({name:"SwitchContext",hookName:"useSwitchContext",providerName:"<SwitchProvider />"}),Ie=u.forwardRef((e,o)=>{const l=I(),r=O(l.getControlProps(),e);return s.jsx(R.span,{...r,ref:o})});Ie.displayName="SwitchControl";const De=u.forwardRef((e,o)=>{const l=I(),r=O(l.getHiddenInputProps(),e),a=Re();return s.jsx(R.input,{"aria-describedby":a==null?void 0:a.ariaDescribedby,...r,ref:o})});De.displayName="SwitchHiddenInput";const je=u.forwardRef((e,o)=>{const l=I(),r=O(l.getLabelProps(),e);return s.jsx(R.span,{...r,ref:o})});je.displayName="SwitchLabel";var po=Be("switch").parts("root","label","control","thumb"),q=po.build(),qe=e=>{var o;return((o=e.ids)==null?void 0:o.root)??`switch:${e.id}`},B=e=>{var o;return((o=e.ids)==null?void 0:o.label)??`switch:${e.id}:label`},bo=e=>{var o;return((o=e.ids)==null?void 0:o.thumb)??`switch:${e.id}:thumb`},To=e=>{var o;return((o=e.ids)==null?void 0:o.control)??`switch:${e.id}:control`},H=e=>{var o;return((o=e.ids)==null?void 0:o.hiddenInput)??`switch:${e.id}:input`},ho=e=>e.getById(qe(e)),C=e=>e.getById(H(e));function fo(e,o){const{context:l,send:r,prop:a,scope:c}=e,g=!!a("disabled"),D=!!a("readOnly"),V=!!a("required"),h=!!l.get("checked"),j=!g&&l.get("focused"),W=!g&&l.get("focusVisible"),f={"data-active":b(l.get("active")),"data-focus":b(j),"data-focus-visible":b(W),"data-readonly":b(D),"data-hover":b(l.get("hovered")),"data-disabled":b(g),"data-state":h?"checked":"unchecked","data-invalid":b(a("invalid")),"data-required":b(V)};return{checked:h,disabled:g,focused:j,setChecked(i){r({type:"CHECKED.SET",checked:i,isTrusted:!1})},toggleChecked(){r({type:"CHECKED.TOGGLE",checked:h,isTrusted:!1})},getRootProps(){return o.label({...q.root.attrs,...f,dir:a("dir"),id:qe(c),htmlFor:H(c),onPointerMove(){g||r({type:"CONTEXT.SET",context:{hovered:!0}})},onPointerLeave(){g||r({type:"CONTEXT.SET",context:{hovered:!1}})},onClick(i){var z;if(g)return;Me(i)===C(c)&&i.stopPropagation(),Ue()&&((z=C(c))==null||z.focus())}})},getLabelProps(){return o.element({...q.label.attrs,...f,dir:a("dir"),id:B(c)})},getThumbProps(){return o.element({...q.thumb.attrs,...f,dir:a("dir"),id:bo(c),"aria-hidden":!0})},getControlProps(){return o.element({...q.control.attrs,...f,dir:a("dir"),id:To(c),"aria-hidden":!0})},getHiddenInputProps(){return o.input({id:H(c),type:"checkbox",required:a("required"),defaultChecked:h,disabled:g,"aria-labelledby":B(c),"aria-invalid":a("invalid"),name:a("name"),form:a("form"),value:a("value"),style:Ke,onFocus(){const i=co();r({type:"CONTEXT.SET",context:{focused:!0,focusVisible:i}})},onBlur(){r({type:"CONTEXT.SET",context:{focused:!1,focusVisible:!1}})},onClick(i){if(D){i.preventDefault();return}const p=i.currentTarget.checked;r({type:"CHECKED.SET",checked:p,isTrusted:!0})}})}}}var{not:M}=Qe(),Co=Je({props({props:e}){return{defaultChecked:!1,label:"switch",value:"on",...e}},initialState(){return"ready"},context({prop:e,bindable:o}){return{checked:o(()=>({defaultValue:e("defaultChecked"),value:e("checked"),onChange(l){var r;(r=e("onCheckedChange"))==null||r({checked:l})}})),fieldsetDisabled:o(()=>({defaultValue:!1})),focusVisible:o(()=>({defaultValue:!1})),active:o(()=>({defaultValue:!1})),focused:o(()=>({defaultValue:!1})),hovered:o(()=>({defaultValue:!1}))}},computed:{isDisabled:({context:e,prop:o})=>o("disabled")||e.get("fieldsetDisabled")},watch({track:e,prop:o,context:l,action:r}){e([()=>o("disabled")],()=>{r(["removeFocusIfNeeded"])}),e([()=>l.get("checked")],()=>{r(["syncInputElement"])})},effects:["trackFormControlState","trackPressEvent","trackFocusVisible"],on:{"CHECKED.TOGGLE":[{guard:M("isTrusted"),actions:["toggleChecked","dispatchChangeEvent"]},{actions:["toggleChecked"]}],"CHECKED.SET":[{guard:M("isTrusted"),actions:["setChecked","dispatchChangeEvent"]},{actions:["setChecked"]}],"CONTEXT.SET":{actions:["setContext"]}},states:{ready:{}},implementations:{guards:{isTrusted:({event:e})=>!!e.isTrusted},effects:{trackPressEvent({computed:e,scope:o,context:l}){if(!e("isDisabled"))return to({pointerNode:ho(o),keyboardNode:C(o),isValidKey:r=>r.key===" ",onPress:()=>l.set("active",!1),onPressStart:()=>l.set("active",!0),onPressEnd:()=>l.set("active",!1)})},trackFocusVisible({computed:e,scope:o}){if(!e("isDisabled"))return go({root:o.getRootNode()})},trackFormControlState({context:e,send:o,scope:l}){return oo(C(l),{onFieldsetDisabledChange(r){e.set("fieldsetDisabled",r)},onFormReset(){const r=e.initial("checked");o({type:"CHECKED.SET",checked:!!r,src:"form-reset"})}})}},actions:{setContext({context:e,event:o}){for(const l in o.context)e.set(l,o.context[l])},syncInputElement({context:e,scope:o}){const l=C(o);l&&eo(l,!!e.get("checked"))},removeFocusIfNeeded({context:e,prop:o}){o("disabled")&&e.set("focused",!1)},setChecked({context:e,event:o}){e.set("checked",o.checked)},toggleChecked({context:e}){e.set("checked",!e.get("checked"))},dispatchChangeEvent({context:e,scope:o}){const l=C(o);Ze(l,{checked:e.get("checked")})}}}});Ye()(["checked","defaultChecked","dir","disabled","form","getRootNode","id","ids","invalid","label","name","onCheckedChange","readOnly","required","value"]);const vo=e=>{const o=u.useId(),{getRootNode:l}=lo(),{dir:r}=ao(),a=Re(),c={id:o,ids:{label:a==null?void 0:a.ids.label,hiddenInput:a==null?void 0:a.ids.control},dir:r,disabled:a==null?void 0:a.disabled,readOnly:a==null?void 0:a.readOnly,invalid:a==null?void 0:a.invalid,required:a==null?void 0:a.required,getRootNode:l,...e},g=ro(Co,c);return fo(g,no)},Ae=u.forwardRef((e,o)=>{const[l,r]=so()(e,["checked","defaultChecked","disabled","form","id","ids","invalid","label","name","onCheckedChange","readOnly","required","value"]),a=vo(l),c=O(a.getRootProps(),r);return s.jsx(uo,{value:a,children:s.jsx(R.label,{...c,ref:o})})});Ae.displayName="SwitchRoot";const Ve=u.forwardRef((e,o)=>{const l=I(),r=O(l.getThumbProps(),e);return s.jsx(R.span,{...r,ref:o})});Ve.displayName="SwitchThumb";const We=u.createContext(void 0);function Ge({children:e,withLabels:o}){return s.jsx(We.Provider,{value:{withLabels:o},children:e})}function Eo(){return $e(We)}Ge.__docgenInfo={description:"",methods:[],displayName:"ToggleProvider",props:{children:{required:!0,tsType:{name:"ReactNode"},description:""}},composes:["Pick"]};const T={"toggle-labels":"_toggle-labels_5uzdx_2","toggle-labels__label-on":"_toggle-labels__label-on_5uzdx_13","toggle-labels__label-off":"_toggle-labels__label-off_5uzdx_13","toggle-labels__label-on--checked":"_toggle-labels__label-on--checked_5uzdx_22","toggle-labels__label-on--disabled":"_toggle-labels__label-on--disabled_5uzdx_25","toggle-labels__label-off--unchecked":"_toggle-labels__label-off--unchecked_5uzdx_32","toggle-labels__label-off--disabled":"_toggle-labels__label-off--disabled_5uzdx_35"},yo="ON",_o="OFF",X=()=>{const{checked:e,disabled:o,focused:l}=I();return s.jsxs("span",{className:T["toggle-labels"],children:[s.jsx("span",{className:A(T["toggle-labels__label-on"],{[T["toggle-labels__label-on--checked"]]:e},{[T["toggle-labels__label-on--disabled"]]:o}),children:yo}),s.jsx("span",{className:A(T["toggle-labels__label-off"],{[T["toggle-labels__label-off--unchecked"]]:!e},{[T["toggle-labels__label-off--disabled"]]:o},{[T["toggle-labels__label-off--focused"]]:l}),children:_o})]})};X.displayName="ToggleLabels";X.__docgenInfo={description:"",methods:[],displayName:"ToggleLabels"};const U={"toggle-control":"_toggle-control_n25s1_2","toggle-control__thumb":"_toggle-control__thumb_n25s1_49"},n=u.forwardRef(({className:e,...o},l)=>{const r=Oe(),{withLabels:a}=Eo();return s.jsxs(s.Fragment,{children:[s.jsxs(Ie,{className:A(U["toggle-control"],e),"data-ods":"toggle-control",ref:l,...o,children:[s.jsx(Ve,{className:U["toggle-control__thumb"]}),a&&s.jsx(X,{})]}),s.jsx(De,{"aria-describedby":o["aria-describedby"]||(r==null?void 0:r.ariaDescribedBy),"aria-labelledby":o["aria-labelledby"]||((r==null?void 0:r.labelId)??"")})]})});n.displayName="ToggleControl";n.__docgenInfo={description:"",methods:[],displayName:"ToggleControl",composes:["ComponentPropsWithRef"]};const ko="_toggle_8pxva_2",Lo={toggle:ko},$=u.forwardRef(({className:e,checked:o,children:l,defaultChecked:r,disabled:a,id:c,invalid:g,name:D,onCheckedChange:V,required:h,value:j,withLabels:W,...f},i)=>{const p=Oe();return l||console.warn("[DEPRECATED]: Usage of <Toggle /> alone is not recommended. Please use a full composition using <ToggleControl /> (and <ToggleLabel> if needed). Like the following <Toggle><ToggleControl /></Toggle>"),s.jsx(Ge,{withLabels:W,children:s.jsx(Ae,{checked:o,className:A(Lo.toggle,l?e:""),"data-ods":"toggle",defaultChecked:r,disabled:a,id:c||(p==null?void 0:p.id),invalid:g||(p==null?void 0:p.invalid),name:D,onCheckedChange:V,ref:i,required:h,value:j,...f,children:l||s.jsx(n,{className:e})})})});$.displayName="Toggle";$.__docgenInfo={description:"",methods:[],displayName:"Toggle",props:{checked:{required:!1,tsType:{name:"boolean"},description:"The controlled checked state of the toggle."},defaultChecked:{required:!1,tsType:{name:"boolean"},description:"The initial checked state of the toggle. Use when you don't need to control the checked state of the toggle."},disabled:{required:!1,tsType:{name:"boolean"},description:"Whether the component is disabled."},invalid:{required:!1,tsType:{name:"boolean"},description:"Whether the component is in error state."},name:{required:!1,tsType:{name:"string"},description:"The name of the form element. Useful for form submission."},onCheckedChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(detail: ToggleCheckedChangeDetail) => void",signature:{arguments:[{type:{name:"ToggleCheckedChangeDetail"},name:"detail"}],return:{name:"void"}}},description:"Callback fired when the checked state changes."},required:{required:!1,tsType:{name:"boolean"},description:"Whether the component is required."},value:{required:!1,tsType:{name:"string"},description:"The value of form element. Useful for form submission."},withLabels:{required:!1,tsType:{name:"boolean"},description:'Whether the component displays "ON/OFF" labels.'}},composes:["ComponentPropsWithRef"]};const m=u.forwardRef(({children:e,...o},l)=>s.jsx(je,{"data-ods":"toggle-label",ref:l,...o,children:e}));m.displayName="ToggleLabel";m.__docgenInfo={description:"",methods:[],displayName:"ToggleLabel",composes:["ComponentPropsWithRef"]};const d=Object.assign($,{Control:n,Label:m}),xo={argTypes:io(["checked","defaultChecked","name","onCheckedChange","required","value"]),component:d,subcomponents:{ToggleControl:n,ToggleLabel:m},title:"React Components/Toggle"},v={argTypes:mo({disabled:{table:{category:G.general},control:"boolean"},invalid:{table:{category:G.general},control:"boolean"},withLabels:{table:{category:G.general},control:"boolean"}})},E={globals:{imports:"import { Toggle, ToggleControl } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>t.createElement(d,null,t.createElement(n,null))},y={tags:["!dev"],render:({})=>t.createElement(d,null,t.createElement(n,null),t.createElement(m,null,"Toggle label"))},_={tags:["!dev"],parameters:{layout:"centered"},render:({})=>t.createElement(d,null,t.createElement(n,null))},k={globals:{imports:"import { Toggle, ToggleControl } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>t.createElement(d,{disabled:!0},t.createElement(n,null))},L={decorators:[e=>t.createElement("div",{style:{display:"flex",flexFlow:"column",gap:"8px"}},e())],globals:{imports:"import { TEXT_PRESET, FormField, Text, Toggle, ToggleControl, ToggleLabel } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>t.createElement(t.Fragment,null,t.createElement(He,{preset:Xe.label},"Notification settings:"),t.createElement(K,null,t.createElement(d,null,t.createElement(n,null),t.createElement(m,null,"General Information"))),t.createElement(K,null,t.createElement(d,null,t.createElement(n,null),t.createElement(m,null,"Promotions"))))},x={globals:{imports:"import { Toggle, ToggleControl } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>t.createElement(d,{invalid:!0},t.createElement(n,null))},w={globals:{imports:"import { Toggle, ToggleControl, ToggleLabel } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>t.createElement(d,null,t.createElement(n,null),t.createElement(m,null,"Enable dark mode"))},S={globals:{imports:"import { Toggle, ToggleControl } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>t.createElement(d,{withLabels:!0},t.createElement(n,null))},P={globals:{imports:"import { Toggle, ToggleControl, ToggleLabel } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>t.createElement(d,null,t.createElement(n,null),t.createElement(m,null,"Enable dark mode"))},F={globals:{imports:"import { Toggle, ToggleControl, ToggleLabel } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>t.createElement(d,{"aria-label":"Enable dark mode"},t.createElement(n,null),t.createElement(m,null,"Dark mode"))},N={parameters:{layout:"fullscreen"},tags:["!dev"],render:({})=>t.createElement("div",{style:{display:"flex",gap:"24px",alignItems:"center"}},t.createElement(d,null,t.createElement(n,null)),t.createElement(d,{disabled:!0},t.createElement(n,null)),t.createElement(d,{invalid:!0},t.createElement(n,null)),t.createElement(d,{withLabels:!0},t.createElement(n,null)),t.createElement(d,null,t.createElement(n,null),t.createElement(m,null,"With label")))};var Y,J,Q;v.parameters={...v.parameters,docs:{...(Y=v.parameters)==null?void 0:Y.docs,source:{originalSource:`{
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
}`,...(Q=(J=v.parameters)==null?void 0:J.docs)==null?void 0:Q.source}}};var Z,ee,oe;E.parameters={...E.parameters,docs:{...(Z=E.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  globals: {
    imports: \`import { Toggle, ToggleControl } from '@ovhcloud/ods-react';\`
  },
  tags: ['!dev'],
  render: ({}) => <Toggle>
      <ToggleControl />
    </Toggle>
}`,...(oe=(ee=E.parameters)==null?void 0:ee.docs)==null?void 0:oe.source}}};var te,le,ae;y.parameters={...y.parameters,docs:{...(te=y.parameters)==null?void 0:te.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: ({}) => <Toggle>
      <ToggleControl />

      <ToggleLabel>
        Toggle label
      </ToggleLabel>
    </Toggle>
}`,...(ae=(le=y.parameters)==null?void 0:le.docs)==null?void 0:ae.source}}};var re,ne,se;_.parameters={..._.parameters,docs:{...(re=_.parameters)==null?void 0:re.docs,source:{originalSource:`{
  tags: ['!dev'],
  parameters: {
    layout: 'centered'
  },
  render: ({}) => <Toggle>
      <ToggleControl />
    </Toggle>
}`,...(se=(ne=_.parameters)==null?void 0:ne.docs)==null?void 0:se.source}}};var de,ce,ge;k.parameters={...k.parameters,docs:{...(de=k.parameters)==null?void 0:de.docs,source:{originalSource:`{
  globals: {
    imports: \`import { Toggle, ToggleControl } from '@ovhcloud/ods-react';\`
  },
  tags: ['!dev'],
  render: ({}) => <Toggle disabled>
      <ToggleControl />
    </Toggle>
}`,...(ge=(ce=k.parameters)==null?void 0:ce.docs)==null?void 0:ge.source}}};var ie,me,ue;L.parameters={...L.parameters,docs:{...(ie=L.parameters)==null?void 0:ie.docs,source:{originalSource:`{
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
}`,...(ue=(me=L.parameters)==null?void 0:me.docs)==null?void 0:ue.source}}};var pe,be,Te;x.parameters={...x.parameters,docs:{...(pe=x.parameters)==null?void 0:pe.docs,source:{originalSource:`{
  globals: {
    imports: \`import { Toggle, ToggleControl } from '@ovhcloud/ods-react';\`
  },
  tags: ['!dev'],
  render: ({}) => <Toggle invalid>
      <ToggleControl />
    </Toggle>
}`,...(Te=(be=x.parameters)==null?void 0:be.docs)==null?void 0:Te.source}}};var he,fe,Ce;w.parameters={...w.parameters,docs:{...(he=w.parameters)==null?void 0:he.docs,source:{originalSource:`{
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
}`,...(Ce=(fe=w.parameters)==null?void 0:fe.docs)==null?void 0:Ce.source}}};var ve,Ee,ye;S.parameters={...S.parameters,docs:{...(ve=S.parameters)==null?void 0:ve.docs,source:{originalSource:`{
  globals: {
    imports: \`import { Toggle, ToggleControl } from '@ovhcloud/ods-react';\`
  },
  tags: ['!dev'],
  render: ({}) => <Toggle withLabels>
      <ToggleControl />
    </Toggle>
}`,...(ye=(Ee=S.parameters)==null?void 0:Ee.docs)==null?void 0:ye.source}}};var _e,ke,Le;P.parameters={...P.parameters,docs:{...(_e=P.parameters)==null?void 0:_e.docs,source:{originalSource:`{
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
}`,...(Le=(ke=P.parameters)==null?void 0:ke.docs)==null?void 0:Le.source}}};var xe,we,Se;F.parameters={...F.parameters,docs:{...(xe=F.parameters)==null?void 0:xe.docs,source:{originalSource:`{
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
}`,...(Se=(we=F.parameters)==null?void 0:we.docs)==null?void 0:Se.source}}};var Pe,Fe,Ne;N.parameters={...N.parameters,docs:{...(Pe=N.parameters)==null?void 0:Pe.docs,source:{originalSource:`{
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
}`,...(Ne=(Fe=N.parameters)==null?void 0:Fe.docs)==null?void 0:Ne.source}}};const wo=["Demo","Default","AnatomyTech","Overview","Disabled","InFormField","Invalid","WithLabel","WithLabels","AccessibilityLabel","AccessibilityAriaLabel","ThemeGenerator"],Ao=Object.freeze(Object.defineProperty({__proto__:null,AccessibilityAriaLabel:F,AccessibilityLabel:P,AnatomyTech:y,Default:E,Demo:v,Disabled:k,InFormField:L,Invalid:x,Overview:_,ThemeGenerator:N,WithLabel:w,WithLabels:S,__namedExportsOrder:wo,default:xo},Symbol.toStringTag,{value:"Module"}));export{P as A,E as D,x as I,_ as O,Ao as T,w as W,F as a,y as b,k as c,S as d,L as e};
