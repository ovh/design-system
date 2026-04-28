import{r as u,e as a}from"./index-jIWwRBLr.js";import{u as Se,F as B}from"./index-DHp3jGT7.js";import{T as Ae,a as Ve}from"./Text-CRk0VKg4.js";import{j as n}from"./jsx-runtime-Cfl8ynUo.js";import{c as q}from"./index-CqY9YpN0.js";import{u as We}from"./context-C_-r2uoG.js";import{c as Ge,L as N,M as O,N as b,ay as He,O as Xe,d as $e,Q as Be,B as Ke,y as ze,R as Me,av as Ue,az as Ye,am as Qe,aA as Je,_ as Ze,$ as eo,C as oo,a0 as to,a as lo}from"./use-locale-context-CCZDATm7.js";import{u as Pe}from"./use-field-context-o69zdhW2.js";import{i as ao,t as ro}from"./index-T9kHy_OW.js";import{e as no,o as so,C as W}from"./controls-BtiQQn1l.js";const[co,R]=Ge({name:"SwitchContext",hookName:"useSwitchContext",providerName:"<SwitchProvider />"}),Fe=u.forwardRef((e,o)=>{const t=R(),r=N(t.getControlProps(),e);return n.jsx(O.span,{...r,ref:o})});Fe.displayName="SwitchControl";const Ne=u.forwardRef((e,o)=>{const t=R(),r=N(t.getHiddenInputProps(),e),l=Pe();return n.jsx(O.input,{"aria-describedby":l==null?void 0:l.ariaDescribedby,...r,ref:o})});Ne.displayName="SwitchHiddenInput";const Oe=u.forwardRef((e,o)=>{const t=R(),r=N(t.getLabelProps(),e);return n.jsx(O.span,{...r,ref:o})});Oe.displayName="SwitchLabel";var io=Xe("switch").parts("root","label","control","thumb"),j=io.build(),Re=e=>{var o;return((o=e.ids)==null?void 0:o.root)??`switch:${e.id}`},K=e=>{var o;return((o=e.ids)==null?void 0:o.label)??`switch:${e.id}:label`},go=e=>{var o;return((o=e.ids)==null?void 0:o.thumb)??`switch:${e.id}:thumb`},mo=e=>{var o;return((o=e.ids)==null?void 0:o.control)??`switch:${e.id}:control`},G=e=>{var o;return((o=e.ids)==null?void 0:o.hiddenInput)??`switch:${e.id}:input`},uo=e=>e.getById(Re(e)),C=e=>e.getById(G(e));function po(e,o){const{context:t,send:r,prop:l,scope:c}=e,i=!!l("disabled"),I=!!l("readOnly"),A=!!l("required"),T=!!t.get("checked"),D=!i&&t.get("focused"),V=!i&&t.get("focusVisible"),f={"data-active":b(t.get("active")),"data-focus":b(D),"data-focus-visible":b(V),"data-readonly":b(I),"data-hover":b(t.get("hovered")),"data-disabled":b(i),"data-state":T?"checked":"unchecked","data-invalid":b(l("invalid")),"data-required":b(A)};return{checked:T,disabled:i,focused:D,setChecked(g){r({type:"CHECKED.SET",checked:g,isTrusted:!1})},toggleChecked(){r({type:"CHECKED.TOGGLE",checked:T,isTrusted:!1})},getRootProps(){return o.label({...j.root.attrs,...f,dir:l("dir"),id:Re(c),htmlFor:G(c),onPointerMove(){i||r({type:"CONTEXT.SET",context:{hovered:!0}})},onPointerLeave(){i||r({type:"CONTEXT.SET",context:{hovered:!1}})},onClick(g){var $;if(i)return;$e(g)===C(c)&&g.stopPropagation(),Be()&&(($=C(c))==null||$.focus())}})},getLabelProps(){return o.element({...j.label.attrs,...f,dir:l("dir"),id:K(c)})},getThumbProps(){return o.element({...j.thumb.attrs,...f,dir:l("dir"),id:go(c),"aria-hidden":!0})},getControlProps(){return o.element({...j.control.attrs,...f,dir:l("dir"),id:mo(c),"aria-hidden":!0})},getHiddenInputProps(){return o.input({id:G(c),type:"checkbox",required:l("required"),defaultChecked:T,disabled:i,"aria-labelledby":K(c),"aria-invalid":l("invalid"),name:l("name"),form:l("form"),value:l("value"),style:He,onFocus(){const g=ao();r({type:"CONTEXT.SET",context:{focused:!0,focusVisible:g}})},onBlur(){r({type:"CONTEXT.SET",context:{focused:!1,focusVisible:!1}})},onClick(g){if(I){g.preventDefault();return}const p=g.currentTarget.checked;r({type:"CHECKED.SET",checked:p,isTrusted:!0})}})}}}var{not:z}=Me(),bo=ze({props({props:e}){return{defaultChecked:!1,label:"switch",value:"on",...e}},initialState(){return"ready"},context({prop:e,bindable:o}){return{checked:o(()=>({defaultValue:e("defaultChecked"),value:e("checked"),onChange(t){var r;(r=e("onCheckedChange"))==null||r({checked:t})}})),fieldsetDisabled:o(()=>({defaultValue:!1})),focusVisible:o(()=>({defaultValue:!1})),active:o(()=>({defaultValue:!1})),focused:o(()=>({defaultValue:!1})),hovered:o(()=>({defaultValue:!1}))}},computed:{isDisabled:({context:e,prop:o})=>o("disabled")||e.get("fieldsetDisabled")},watch({track:e,prop:o,context:t,action:r}){e([()=>o("disabled")],()=>{r(["removeFocusIfNeeded"])}),e([()=>t.get("checked")],()=>{r(["syncInputElement"])})},effects:["trackFormControlState","trackPressEvent","trackFocusVisible"],on:{"CHECKED.TOGGLE":[{guard:z("isTrusted"),actions:["toggleChecked","dispatchChangeEvent"]},{actions:["toggleChecked"]}],"CHECKED.SET":[{guard:z("isTrusted"),actions:["setChecked","dispatchChangeEvent"]},{actions:["setChecked"]}],"CONTEXT.SET":{actions:["setContext"]}},states:{ready:{}},implementations:{guards:{isTrusted:({event:e})=>!!e.isTrusted},effects:{trackPressEvent({computed:e,scope:o,context:t}){if(!e("isDisabled"))return Je({pointerNode:uo(o),keyboardNode:C(o),isValidKey:r=>r.key===" ",onPress:()=>t.set("active",!1),onPressStart:()=>t.set("active",!0),onPressEnd:()=>t.set("active",!1)})},trackFocusVisible({computed:e,scope:o}){if(!e("isDisabled"))return ro({root:o.getRootNode()})},trackFormControlState({context:e,send:o,scope:t}){return Qe(C(t),{onFieldsetDisabledChange(r){e.set("fieldsetDisabled",r)},onFormReset(){const r=e.initial("checked");o({type:"CHECKED.SET",checked:!!r,src:"form-reset"})}})}},actions:{setContext({context:e,event:o}){for(const t in o.context)e.set(t,o.context[t])},syncInputElement({context:e,scope:o}){const t=C(o);t&&Ye(t,!!e.get("checked"))},removeFocusIfNeeded({context:e,prop:o}){o("disabled")&&e.set("focused",!1)},setChecked({context:e,event:o}){e.set("checked",o.checked)},toggleChecked({context:e}){e.set("checked",!e.get("checked"))},dispatchChangeEvent({context:e,scope:o}){const t=C(o);Ue(t,{checked:e.get("checked")})}}}});Ke()(["checked","defaultChecked","dir","disabled","form","getRootNode","id","ids","invalid","label","name","onCheckedChange","readOnly","required","value"]);const ho=e=>{const o=u.useId(),{getRootNode:t}=Ze(),{dir:r}=eo(),l=Pe(),c={id:o,ids:{label:l==null?void 0:l.ids.label,hiddenInput:l==null?void 0:l.ids.control},dir:r,disabled:l==null?void 0:l.disabled,readOnly:l==null?void 0:l.readOnly,invalid:l==null?void 0:l.invalid,required:l==null?void 0:l.required,getRootNode:t,...e},i=oo(bo,c);return po(i,to)},Ie=u.forwardRef((e,o)=>{const[t,r]=lo()(e,["checked","defaultChecked","disabled","form","id","ids","invalid","label","name","onCheckedChange","readOnly","required","value"]),l=ho(t),c=N(l.getRootProps(),r);return n.jsx(co,{value:l,children:n.jsx(O.label,{...c,ref:o})})});Ie.displayName="SwitchRoot";const De=u.forwardRef((e,o)=>{const t=R(),r=N(t.getThumbProps(),e);return n.jsx(O.span,{...r,ref:o})});De.displayName="SwitchThumb";const je=u.createContext(void 0);function qe({children:e,withLabels:o}){return n.jsx(je.Provider,{value:{withLabels:o},children:e})}function To(){return We(je)}qe.__docgenInfo={description:"",methods:[],displayName:"ToggleProvider",props:{children:{required:!0,tsType:{name:"ReactNode"},description:""}},composes:["Pick"]};const h={"toggle-labels":"_toggle-labels_5uzdx_2","toggle-labels__label-on":"_toggle-labels__label-on_5uzdx_13","toggle-labels__label-off":"_toggle-labels__label-off_5uzdx_13","toggle-labels__label-on--checked":"_toggle-labels__label-on--checked_5uzdx_22","toggle-labels__label-on--disabled":"_toggle-labels__label-on--disabled_5uzdx_25","toggle-labels__label-off--unchecked":"_toggle-labels__label-off--unchecked_5uzdx_32","toggle-labels__label-off--disabled":"_toggle-labels__label-off--disabled_5uzdx_35"},fo="ON",Co="OFF",H=()=>{const{checked:e,disabled:o,focused:t}=R();return n.jsxs("span",{className:h["toggle-labels"],children:[n.jsx("span",{className:q(h["toggle-labels__label-on"],{[h["toggle-labels__label-on--checked"]]:e},{[h["toggle-labels__label-on--disabled"]]:o}),children:fo}),n.jsx("span",{className:q(h["toggle-labels__label-off"],{[h["toggle-labels__label-off--unchecked"]]:!e},{[h["toggle-labels__label-off--disabled"]]:o},{[h["toggle-labels__label-off--focused"]]:t}),children:Co})]})};H.displayName="ToggleLabels";H.__docgenInfo={description:"",methods:[],displayName:"ToggleLabels"};const M={"toggle-control":"_toggle-control_n25s1_2","toggle-control__thumb":"_toggle-control__thumb_n25s1_49"},s=u.forwardRef(({className:e,...o},t)=>{const r=Se(),{withLabels:l}=To();return n.jsxs(n.Fragment,{children:[n.jsxs(Fe,{className:q(M["toggle-control"],e),"data-ods":"toggle-control",ref:t,...o,children:[n.jsx(De,{className:M["toggle-control__thumb"]}),l&&n.jsx(H,{})]}),n.jsx(Ne,{"aria-describedby":o["aria-describedby"]||(r==null?void 0:r.ariaDescribedBy),"aria-labelledby":o["aria-labelledby"]||((r==null?void 0:r.labelId)??"")})]})});s.displayName="ToggleControl";s.__docgenInfo={description:"",methods:[],displayName:"ToggleControl",composes:["ComponentPropsWithRef"]};const vo="_toggle_8pxva_2",Eo={toggle:vo},X=u.forwardRef(({className:e,checked:o,children:t,defaultChecked:r,disabled:l,id:c,invalid:i,name:I,onCheckedChange:A,required:T,value:D,withLabels:V,...f},g)=>{const p=Se();return t||console.warn("[DEPRECATED]: Usage of <Toggle /> alone is not recommended. Please use a full composition using <ToggleControl /> (and <ToggleLabel> if needed). Like the following <Toggle><ToggleControl /></Toggle>"),n.jsx(qe,{withLabels:V,children:n.jsx(Ie,{checked:o,className:q(Eo.toggle,t?e:""),"data-ods":"toggle",defaultChecked:r,disabled:l,id:c||(p==null?void 0:p.id),invalid:i||(p==null?void 0:p.invalid),name:I,onCheckedChange:A,ref:g,required:T,value:D,...f,children:t||n.jsx(s,{className:e})})})});X.displayName="Toggle";X.__docgenInfo={description:"",methods:[],displayName:"Toggle",props:{checked:{required:!1,tsType:{name:"boolean"},description:"The controlled checked state of the toggle."},defaultChecked:{required:!1,tsType:{name:"boolean"},description:"The initial checked state of the toggle. Use when you don't need to control the checked state of the toggle."},disabled:{required:!1,tsType:{name:"boolean"},description:"Whether the component is disabled."},invalid:{required:!1,tsType:{name:"boolean"},description:"Whether the component is in error state."},name:{required:!1,tsType:{name:"string"},description:"The name of the form element. Useful for form submission."},onCheckedChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(detail: ToggleCheckedChangeDetail) => void",signature:{arguments:[{type:{name:"ToggleCheckedChangeDetail"},name:"detail"}],return:{name:"void"}}},description:"Callback fired when the checked state changes."},required:{required:!1,tsType:{name:"boolean"},description:"Whether the component is required."},value:{required:!1,tsType:{name:"string"},description:"The value of form element. Useful for form submission."},withLabels:{required:!1,tsType:{name:"boolean"},description:'Whether the component displays "ON/OFF" labels.'}},composes:["ComponentPropsWithRef"]};const m=u.forwardRef(({children:e,...o},t)=>n.jsx(Oe,{"data-ods":"toggle-label",ref:t,...o,children:e}));m.displayName="ToggleLabel";m.__docgenInfo={description:"",methods:[],displayName:"ToggleLabel",composes:["ComponentPropsWithRef"]};const d=Object.assign(X,{Control:s,Label:m}),yo={argTypes:no(["checked","defaultChecked","name","onCheckedChange","required","value"]),component:d,subcomponents:{ToggleControl:s,ToggleLabel:m},title:"React Components/Toggle"},v={argTypes:so({disabled:{table:{category:W.general},control:"boolean"},invalid:{table:{category:W.general},control:"boolean"},withLabels:{table:{category:W.general},control:"boolean"}})},E={globals:{imports:"import { Toggle, ToggleControl } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>a.createElement(d,null,a.createElement(s,null))},y={tags:["!dev"],parameters:{layout:"centered"},render:({})=>a.createElement(d,null,a.createElement(s,null))},_={globals:{imports:"import { Toggle, ToggleControl } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>a.createElement(d,{disabled:!0},a.createElement(s,null))},k={decorators:[e=>a.createElement("div",{style:{display:"flex",flexFlow:"column",gap:"8px"}},e())],globals:{imports:"import { TEXT_PRESET, FormField, Text, Toggle, ToggleControl, ToggleLabel } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>a.createElement(a.Fragment,null,a.createElement(Ae,{preset:Ve.label},"Notification settings:"),a.createElement(B,null,a.createElement(d,null,a.createElement(s,null),a.createElement(m,null,"General Information"))),a.createElement(B,null,a.createElement(d,null,a.createElement(s,null),a.createElement(m,null,"Promotions"))))},L={globals:{imports:"import { Toggle, ToggleControl } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>a.createElement(d,{invalid:!0},a.createElement(s,null))},x={globals:{imports:"import { Toggle, ToggleControl, ToggleLabel } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>a.createElement(d,null,a.createElement(s,null),a.createElement(m,null,"Enable dark mode"))},w={globals:{imports:"import { Toggle, ToggleControl } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>a.createElement(d,{withLabels:!0},a.createElement(s,null))},S={globals:{imports:"import { Toggle, ToggleControl, ToggleLabel } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>a.createElement(d,null,a.createElement(s,null),a.createElement(m,null,"Enable dark mode"))},P={globals:{imports:"import { Toggle, ToggleControl, ToggleLabel } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>a.createElement(d,{"aria-label":"Enable dark mode"},a.createElement(s,null),a.createElement(m,null,"Dark mode"))},F={parameters:{layout:"fullscreen"},tags:["!dev"],render:({})=>a.createElement("div",{style:{display:"flex",gap:"24px",alignItems:"center"}},a.createElement(d,null,a.createElement(s,null)),a.createElement(d,{disabled:!0},a.createElement(s,null)),a.createElement(d,{invalid:!0},a.createElement(s,null)),a.createElement(d,{withLabels:!0},a.createElement(s,null)),a.createElement(d,null,a.createElement(s,null),a.createElement(m,null,"With label")))};var U,Y,Q;v.parameters={...v.parameters,docs:{...(U=v.parameters)==null?void 0:U.docs,source:{originalSource:`{
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
}`,...(Q=(Y=v.parameters)==null?void 0:Y.docs)==null?void 0:Q.source}}};var J,Z,ee;E.parameters={...E.parameters,docs:{...(J=E.parameters)==null?void 0:J.docs,source:{originalSource:`{
  globals: {
    imports: \`import { Toggle, ToggleControl } from '@ovhcloud/ods-react';\`
  },
  tags: ['!dev'],
  render: ({}) => <Toggle>
      <ToggleControl />
    </Toggle>
}`,...(ee=(Z=E.parameters)==null?void 0:Z.docs)==null?void 0:ee.source}}};var oe,te,le;y.parameters={...y.parameters,docs:{...(oe=y.parameters)==null?void 0:oe.docs,source:{originalSource:`{
  tags: ['!dev'],
  parameters: {
    layout: 'centered'
  },
  render: ({}) => <Toggle>
      <ToggleControl />
    </Toggle>
}`,...(le=(te=y.parameters)==null?void 0:te.docs)==null?void 0:le.source}}};var ae,re,ne;_.parameters={..._.parameters,docs:{...(ae=_.parameters)==null?void 0:ae.docs,source:{originalSource:`{
  globals: {
    imports: \`import { Toggle, ToggleControl } from '@ovhcloud/ods-react';\`
  },
  tags: ['!dev'],
  render: ({}) => <Toggle disabled>
      <ToggleControl />
    </Toggle>
}`,...(ne=(re=_.parameters)==null?void 0:re.docs)==null?void 0:ne.source}}};var se,de,ce;k.parameters={...k.parameters,docs:{...(se=k.parameters)==null?void 0:se.docs,source:{originalSource:`{
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
}`,...(ce=(de=k.parameters)==null?void 0:de.docs)==null?void 0:ce.source}}};var ie,ge,me;L.parameters={...L.parameters,docs:{...(ie=L.parameters)==null?void 0:ie.docs,source:{originalSource:`{
  globals: {
    imports: \`import { Toggle, ToggleControl } from '@ovhcloud/ods-react';\`
  },
  tags: ['!dev'],
  render: ({}) => <Toggle invalid>
      <ToggleControl />
    </Toggle>
}`,...(me=(ge=L.parameters)==null?void 0:ge.docs)==null?void 0:me.source}}};var ue,pe,be;x.parameters={...x.parameters,docs:{...(ue=x.parameters)==null?void 0:ue.docs,source:{originalSource:`{
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
}`,...(be=(pe=x.parameters)==null?void 0:pe.docs)==null?void 0:be.source}}};var he,Te,fe;w.parameters={...w.parameters,docs:{...(he=w.parameters)==null?void 0:he.docs,source:{originalSource:`{
  globals: {
    imports: \`import { Toggle, ToggleControl } from '@ovhcloud/ods-react';\`
  },
  tags: ['!dev'],
  render: ({}) => <Toggle withLabels>
      <ToggleControl />
    </Toggle>
}`,...(fe=(Te=w.parameters)==null?void 0:Te.docs)==null?void 0:fe.source}}};var Ce,ve,Ee;S.parameters={...S.parameters,docs:{...(Ce=S.parameters)==null?void 0:Ce.docs,source:{originalSource:`{
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
}`,...(Ee=(ve=S.parameters)==null?void 0:ve.docs)==null?void 0:Ee.source}}};var ye,_e,ke;P.parameters={...P.parameters,docs:{...(ye=P.parameters)==null?void 0:ye.docs,source:{originalSource:`{
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
}`,...(ke=(_e=P.parameters)==null?void 0:_e.docs)==null?void 0:ke.source}}};var Le,xe,we;F.parameters={...F.parameters,docs:{...(Le=F.parameters)==null?void 0:Le.docs,source:{originalSource:`{
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
}`,...(we=(xe=F.parameters)==null?void 0:xe.docs)==null?void 0:we.source}}};const _o=["Demo","Default","Overview","Disabled","InFormField","Invalid","WithLabel","WithLabels","AccessibilityLabel","AccessibilityAriaLabel","ThemeGenerator"],Io=Object.freeze(Object.defineProperty({__proto__:null,AccessibilityAriaLabel:P,AccessibilityLabel:S,Default:E,Demo:v,Disabled:_,InFormField:k,Invalid:L,Overview:y,ThemeGenerator:F,WithLabel:x,WithLabels:w,__namedExportsOrder:_o,default:yo},Symbol.toStringTag,{value:"Module"}));export{S as A,E as D,L as I,y as O,Io as T,x as W,P as a,_ as b,w as c,k as d};
