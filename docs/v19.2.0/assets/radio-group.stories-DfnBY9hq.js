import{r as f,e as o}from"./index-jIWwRBLr.js";import{u as Se,F as Ie,a as Te}from"./FormFieldLabel-DW-nAxje.js";import{j as v}from"./jsx-runtime-Cfl8ynUo.js";import{c as Re}from"./index-CqY9YpN0.js";import{c as x,a as ve,T as _,U as k,P as b,Q as Ge,aA as Ve,X as Pe,a7 as Fe,C as be,z as _e,Y as ke,aB as De,ax as je,aG as Oe,am as He,a4 as Ne,u as we,R as xe,D as Ae,S as Me}from"./use-locale-context-BIV2aQtl.js";import{i as qe,t as $e}from"./index-DaqjtwB0.js";import{e as Je,o as Ue,C as N}from"./controls-BtiQQn1l.js";const[We,j]=x({name:"RadioGroupContext",hookName:"useRadioGroupContext",providerName:"<RadioGroupProvider />"}),[ze,ya]=x({name:"RadioGroupItemContext",hookName:"useRadioGroupItemContext",providerName:"<RadioGroupItemProvider />"}),[Be,A]=x({name:"RadioGroupItemPropsContext",hookName:"useRadioGroupItemPropsContext",providerName:"<RadioGroupItemPropsProvider />"}),ge=f.forwardRef((e,a)=>{const[t,r]=ve()(e,["value","disabled","invalid"]),u=j(),l=_(u.getItemProps(t),r),c=u.getItemState(t);return v.jsx(ze,{value:c,children:v.jsx(Be,{value:t,children:v.jsx(k.label,{...l,ref:a})})})});ge.displayName="RadioGroupItem";const fe=f.forwardRef((e,a)=>{const t=j(),r=A(),u=_(t.getItemControlProps(r),e);return v.jsx(k.div,{...u,ref:a})});fe.displayName="RadioGroupItemControl";const he=f.forwardRef((e,a)=>{const t=j(),r=A(),u=_(t.getItemHiddenInputProps(r),e);return v.jsx(k.input,{...u,ref:a})});he.displayName="RadioGroupItemHiddenInput";const Ee=f.forwardRef((e,a)=>{const t=j(),r=A(),u=_(t.getItemTextProps(r),e);return v.jsx(k.span,{...u,ref:a})});Ee.displayName="RadioGroupItemText";var Ye=Ge("radio-group").parts("root","label","item","itemText","itemControl","indicator"),C=Ye.build(),D=e=>{var a;return((a=e.ids)==null?void 0:a.root)??`radio-group:${e.id}`},q=e=>{var a;return((a=e.ids)==null?void 0:a.label)??`radio-group:${e.id}:label`},Ce=(e,a)=>{var t,r;return((r=(t=e.ids)==null?void 0:t.item)==null?void 0:r.call(t,a))??`radio-group:${e.id}:radio:${a}`},w=(e,a)=>{var t,r;return((r=(t=e.ids)==null?void 0:t.itemHiddenInput)==null?void 0:r.call(t,a))??`radio-group:${e.id}:radio:input:${a}`},Ke=(e,a)=>{var t,r;return((r=(t=e.ids)==null?void 0:t.itemControl)==null?void 0:r.call(t,a))??`radio-group:${e.id}:radio:control:${a}`},Qe=(e,a)=>{var t,r;return((r=(t=e.ids)==null?void 0:t.itemLabel)==null?void 0:r.call(t,a))??`radio-group:${e.id}:radio:label:${a}`},ye=e=>{var a;return((a=e.ids)==null?void 0:a.indicator)??`radio-group:${e.id}:indicator`},O=e=>e.getById(D(e)),Xe=(e,a)=>e.getById(w(e,a)),Ze=e=>e.getById(ye(e)),ea=e=>{var a;return(a=O(e))==null?void 0:a.querySelector("input:not(:disabled)")},aa=e=>{var a;return(a=O(e))==null?void 0:a.querySelector("input:not(:disabled):checked")},$=e=>{const t=`input[type=radio][data-ownedby='${CSS.escape(D(e))}']:not([disabled])`;return Ne(O(e),t)},oa=(e,a)=>{if(a)return e.getById(Ce(e,a))},ta=e=>({left:(e==null?void 0:e.offsetLeft)??0,top:(e==null?void 0:e.offsetTop)??0,width:(e==null?void 0:e.offsetWidth)??0,height:(e==null?void 0:e.offsetHeight)??0}),ra=e=>({width:`${e.width}px`,height:`${e.height}px`,left:`${e.left}px`,top:`${e.top}px`});function ia(e,a){const{context:t,send:r,computed:u,prop:l,scope:c,refs:h}=e,R=u("isDisabled"),E=l("readOnly");function y(i){return{value:i.value,invalid:!!i.invalid,disabled:!!i.disabled||R,checked:t.get("value")===i.value,focused:t.get("focusedValue")===i.value,focusVisible:h.get("focusVisibleValue")===i.value,hovered:t.get("hoveredValue")===i.value,active:t.get("activeValue")===i.value}}function H(i){const m=y(i);return{"data-focus":b(m.focused),"data-focus-visible":b(m.focusVisible),"data-disabled":b(m.disabled),"data-readonly":b(E),"data-state":m.checked?"checked":"unchecked","data-hover":b(m.hovered),"data-invalid":b(m.invalid),"data-orientation":l("orientation"),"data-ssr":b(t.get("ssr"))}}const M=()=>{const i=aa(c)??ea(c);i==null||i.focus()};return{focus:M,value:t.get("value"),setValue(i){r({type:"SET_VALUE",value:i,isTrusted:!1})},clearValue(){r({type:"SET_VALUE",value:null,isTrusted:!1})},getRootProps(){return a.element({...C.root.attrs,role:"radiogroup",id:D(c),"aria-labelledby":q(c),"data-orientation":l("orientation"),"data-disabled":b(R),"aria-orientation":l("orientation"),dir:l("dir"),style:{position:"relative"}})},getLabelProps(){return a.element({...C.label.attrs,dir:l("dir"),"data-orientation":l("orientation"),"data-disabled":b(R),id:q(c),onClick:M})},getItemState:y,getItemProps(i){const m=y(i);return a.label({...C.item.attrs,dir:l("dir"),id:Ce(c,i.value),htmlFor:w(c,i.value),...H(i),onPointerMove(){m.disabled||m.hovered||r({type:"SET_HOVERED",value:i.value,hovered:!0})},onPointerLeave(){m.disabled||r({type:"SET_HOVERED",value:null})},onPointerDown(p){m.disabled||Fe(p)&&(m.focused&&p.pointerType==="mouse"&&p.preventDefault(),r({type:"SET_ACTIVE",value:i.value,active:!0}))},onPointerUp(){m.disabled||r({type:"SET_ACTIVE",value:null})},onClick(){var p;!m.disabled&&Pe()&&((p=Xe(c,i.value))==null||p.focus())}})},getItemTextProps(i){return a.element({...C.itemText.attrs,dir:l("dir"),id:Qe(c,i.value),...H(i)})},getItemControlProps(i){const m=y(i);return a.element({...C.itemControl.attrs,dir:l("dir"),id:Ke(c,i.value),"data-active":b(m.active),"aria-hidden":!0,...H(i)})},getItemHiddenInputProps(i){const m=y(i);return a.input({"data-ownedby":D(c),id:w(c,i.value),type:"radio",name:l("name")||l("id"),form:l("form"),value:i.value,onClick(p){if(E){p.preventDefault();return}p.currentTarget.checked&&r({type:"SET_VALUE",value:i.value,isTrusted:!0})},onBlur(){r({type:"SET_FOCUSED",value:null,focused:!1})},onFocus(){const p=qe();r({type:"SET_FOCUSED",value:i.value,focused:!0,focusVisible:p})},onKeyDown(p){p.defaultPrevented||p.key===" "&&r({type:"SET_ACTIVE",value:i.value,active:!0})},onKeyUp(p){p.defaultPrevented||p.key===" "&&r({type:"SET_ACTIVE",value:null})},disabled:m.disabled||E,defaultChecked:m.checked,style:Ve})},getIndicatorProps(){const i=t.get("indicatorRect");return a.element({id:ye(c),...C.indicator.attrs,dir:l("dir"),hidden:t.get("value")==null,"data-disabled":b(R),"data-orientation":l("orientation"),style:{"--transition-property":"left, top, width, height","--left":i==null?void 0:i.left,"--top":i==null?void 0:i.top,"--width":i==null?void 0:i.width,"--height":i==null?void 0:i.height,position:"absolute",willChange:"var(--transition-property)",transitionProperty:"var(--transition-property)",transitionDuration:t.get("canIndicatorTransition")?"var(--transition-duration, 150ms)":"0ms",transitionTimingFunction:"var(--transition-timing-function)",[l("orientation")==="horizontal"?"left":"top"]:l("orientation")==="horizontal"?"var(--left)":"var(--top)"}})}}}var{not:la}=ke(),da=_e({props({props:e}){return{orientation:"vertical",...e}},initialState(){return"idle"},context({prop:e,bindable:a}){return{value:a(()=>({defaultValue:e("defaultValue"),value:e("value"),onChange(t){var r;(r=e("onValueChange"))==null||r({value:t})}})),activeValue:a(()=>({defaultValue:null})),focusedValue:a(()=>({defaultValue:null})),hoveredValue:a(()=>({defaultValue:null})),indicatorRect:a(()=>({defaultValue:{}})),canIndicatorTransition:a(()=>({defaultValue:!1})),fieldsetDisabled:a(()=>({defaultValue:!1})),ssr:a(()=>({defaultValue:!0}))}},refs(){return{indicatorCleanup:null,focusVisibleValue:null}},computed:{isDisabled:({prop:e,context:a})=>!!e("disabled")||a.get("fieldsetDisabled")},entry:["syncIndicatorRect","syncSsr"],exit:["cleanupObserver"],effects:["trackFormControlState","trackFocusVisible"],watch({track:e,action:a,context:t}){e([()=>t.get("value")],()=>{a(["setIndicatorTransition","syncIndicatorRect","syncInputElements"])})},on:{SET_VALUE:[{guard:la("isTrusted"),actions:["setValue","dispatchChangeEvent"]},{actions:["setValue"]}],SET_HOVERED:{actions:["setHovered"]},SET_ACTIVE:{actions:["setActive"]},SET_FOCUSED:{actions:["setFocused"]}},states:{idle:{}},implementations:{guards:{isTrusted:({event:e})=>!!e.isTrusted},effects:{trackFormControlState({context:e,scope:a}){return He(O(a),{onFieldsetDisabledChange(t){e.set("fieldsetDisabled",t)},onFormReset(){e.set("value",e.initial("value"))}})},trackFocusVisible({scope:e}){var a;return $e({root:(a=e.getRootNode)==null?void 0:a.call(e)})}},actions:{setValue({context:e,event:a}){e.set("value",a.value)},setHovered({context:e,event:a}){e.set("hoveredValue",a.value)},setActive({context:e,event:a}){e.set("activeValue",a.value)},setFocused({context:e,event:a,refs:t}){e.set("focusedValue",a.value),t.set("focusVisibleValue",a.focusVisible?a.value:null)},syncInputElements({context:e,scope:a}){$(a).forEach(r=>{r.checked=r.value===e.get("value")})},setIndicatorTransition({context:e}){e.set("canIndicatorTransition",Oe(e.get("value")))},cleanupObserver({refs:e}){var a;(a=e.get("indicatorCleanup"))==null||a()},syncSsr({context:e}){e.set("ssr",!1)},syncIndicatorRect({context:e,scope:a,refs:t}){var c;if((c=t.get("indicatorCleanup"))==null||c(),!Ze(a))return;const r=e.get("value"),u=oa(a,r);if(r==null||!u){e.set("canIndicatorTransition",!1),e.set("indicatorRect",{});return}const l=je([u],{measure(h){return ta(h)},onEntry({rects:h}){e.set("indicatorRect",ra(h[0]))}});t.set("indicatorCleanup",l)},dispatchChangeEvent({context:e,scope:a}){$(a).forEach(r=>{const u=r.value===e.get("value");u!==r.checked&&De(r,{checked:u})})}}}});be()(["dir","disabled","form","getRootNode","id","ids","name","onValueChange","orientation","readOnly","value","defaultValue"]);be()(["value","disabled","invalid"]);const na=e=>{const a=f.useId(),{getRootNode:t}=we(),{dir:r}=xe(),u={id:a,dir:r,getRootNode:t,...e},l=Ae(da,u);return ia(l,Me)},Le=f.forwardRef((e,a)=>{const[t,r]=ve()(e,["defaultValue","disabled","form","id","ids","name","onValueChange","orientation","readOnly","value"]),u=na(t),l=_(u.getRootProps(),r);return v.jsx(We,{value:u,children:v.jsx(k.div,{...l,ref:a})})});Le.displayName="RadioGroupRoot";const sa="_radio_1q1zq_2",ua={radio:sa},d=f.forwardRef(({children:e,className:a,disabled:t,invalid:r,onChange:u,required:l,...c},h)=>{const R=Se(),E=r||(R==null?void 0:R.invalid);return v.jsxs(ge,{className:Re(ua.radio,a),"data-ods":"radio",disabled:t,invalid:E,ref:h,...c,children:[e,v.jsx(he,{"aria-describedby":c["aria-describedby"]||(R==null?void 0:R.ariaDescribedBy),"aria-invalid":E,required:l})]})});d.displayName="Radio";d.__docgenInfo={description:"",methods:[],displayName:"Radio",props:{disabled:{required:!1,tsType:{name:"boolean"},description:"Whether the radio is disabled."},invalid:{required:!1,tsType:{name:"boolean"},description:"Whether the radio is in error state."},required:{required:!1,tsType:{name:"boolean"},description:"Whether the radio is required."},value:{required:!0,tsType:{name:"string"},description:"The value of the radio."}},composes:["ComponentPropsWithRef"]};const ca={"radio-control":"_radio-control_126a2_2"},n=f.forwardRef(({children:e,...a},t)=>v.jsx(fe,{className:ca["radio-control"],"data-ods":"radio-control",ref:t,...a,children:e}));n.displayName="RadioControl";n.__docgenInfo={description:"",methods:[],displayName:"RadioControl",composes:["ComponentPropsWithRef"]};const ma={"radio-group":"_radio-group_q9kfc_2"},g=f.forwardRef(({children:e,className:a,defaultValue:t,disabled:r,name:u,onValueChange:l,orientation:c,value:h,...R},E)=>v.jsx(Le,{"aria-labelledby":R["aria-labelledby"]||"",className:Re(ma["radio-group"],a),"data-ods":"radio-group",defaultValue:t,disabled:r,name:u,onValueChange:l,orientation:c,ref:E,value:h,...R,children:e}));g.displayName="RadioGroup";g.__docgenInfo={description:"",methods:[],displayName:"RadioGroup",props:{defaultValue:{required:!1,tsType:{name:"string"},description:"The initial value of the checked radio. Use when you don't need to control the value of the radio group."},disabled:{required:!1,tsType:{name:"boolean"},description:"Whether the component is disabled."},name:{required:!1,tsType:{name:"string"},description:"The name of the form element. Useful for form submission."},onValueChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(detail: RadioValueChangeDetail) => void",signature:{arguments:[{type:{name:"RadioValueChangeDetail"},name:"detail"}],return:{name:"void"}}},description:"Callback fired when the value changes."},orientation:{required:!1,tsType:{name:"union",raw:"'horizontal' | 'vertical'",elements:[{name:"literal",value:"'horizontal'"},{name:"literal",value:"'vertical'"}]},description:"The orientation of the radio group."},value:{required:!1,tsType:{name:"string"},description:"The controlled value of the radio group."}},composes:["ComponentPropsWithRef"]};const s=f.forwardRef(({children:e,className:a,...t},r)=>v.jsx(Ee,{className:a,"data-ods":"radio-label",ref:r,...t,children:e}));s.displayName="RadioLabel";s.__docgenInfo={description:"",methods:[],displayName:"RadioLabel",composes:["ComponentPropsWithRef"]};const pa={argTypes:Je(["defaultValue","name","onValueChange","value"]),component:g,subcomponents:{Radio:d,RadioControl:n,RadioLabel:s},title:"React Components/Radio Group"},L={render:e=>o.createElement(g,{disabled:e.disabled,orientation:e.orientation},o.createElement(d,{invalid:e.invalid,value:"html"},o.createElement(n,null),o.createElement(s,null,"HTML")),o.createElement(d,{invalid:e.invalid,value:"css"},o.createElement(n,null),o.createElement(s,null,"CSS")),o.createElement(d,{invalid:e.invalid,value:"js"},o.createElement(n,null),o.createElement(s,null,"JavaScript"))),argTypes:Ue({disabled:{table:{category:N.general},control:{type:"boolean"}},invalid:{table:{category:N.general,type:{summary:"boolean"}},control:"boolean"},orientation:{table:{category:N.general,type:{summary:["horizontal","vertical"]}},control:{type:"select"},options:["horizontal","vertical"]}})},S={globals:{imports:"import { Radio, RadioControl, RadioGroup, RadioLabel } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>o.createElement(g,null,o.createElement(d,{value:"html"},o.createElement(n,null),o.createElement(s,null,"HTML")),o.createElement(d,{value:"css"},o.createElement(n,null),o.createElement(s,null,"CSS")),o.createElement(d,{value:"js"},o.createElement(n,null),o.createElement(s,null,"JavaScript")))},I={globals:{imports:"import { Radio, RadioControl, RadioGroup, RadioLabel } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>o.createElement(g,{disabled:!0},o.createElement(d,{value:"html"},o.createElement(n,null),o.createElement(s,null,"HTML")),o.createElement(d,{value:"css"},o.createElement(n,null),o.createElement(s,null,"CSS")),o.createElement(d,{value:"js"},o.createElement(n,null),o.createElement(s,null,"JavaScript")))},T={globals:{imports:"import { Radio, RadioControl, RadioGroup, RadioLabel } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>o.createElement(g,null,o.createElement(d,{value:"html"},o.createElement(n,null),o.createElement(s,null,"HTML")),o.createElement(d,{disabled:!0,value:"css"},o.createElement(n,null),o.createElement(s,null,"CSS")),o.createElement(d,{value:"js"},o.createElement(n,null),o.createElement(s,null,"JavaScript")))},G={globals:{imports:"import { FormField, FormFieldLabel, Radio, RadioControl, RadioGroup, RadioLabel } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>o.createElement(Ie,null,o.createElement(Te,null,"Pick a language:"),o.createElement(g,null,o.createElement(d,{value:"html"},o.createElement(n,null),o.createElement(s,null,"HTML")),o.createElement(d,{value:"css"},o.createElement(n,null),o.createElement(s,null,"CSS")),o.createElement(d,{value:"js"},o.createElement(n,null),o.createElement(s,null,"JavaScript"))))},V={globals:{imports:"import { Radio, RadioControl, RadioGroup, RadioLabel } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>o.createElement(g,{defaultValue:"html"},o.createElement(d,{value:"html",invalid:!0},o.createElement(n,null),o.createElement(s,null,"HTML")),o.createElement(d,{invalid:!0,value:"css"},o.createElement(n,null),o.createElement(s,null,"CSS")),o.createElement(d,{value:"js"},o.createElement(n,null),o.createElement(s,null,"JavaScript")))},P={globals:{imports:"import { Radio, RadioControl, RadioGroup, RadioLabel } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>o.createElement(g,{orientation:"horizontal"},o.createElement(d,{value:"html"},o.createElement(n,null),o.createElement(s,null,"HTML")),o.createElement(d,{value:"css"},o.createElement(n,null),o.createElement(s,null,"CSS")),o.createElement(d,{value:"js"},o.createElement(n,null),o.createElement(s,null,"JavaScript")))},F={tags:["!dev"],parameters:{layout:"centered"},render:({})=>o.createElement(g,null,o.createElement(d,{value:"html"},o.createElement(n,null),o.createElement(s,null,"HTML")),o.createElement(d,{value:"css"},o.createElement(n,null),o.createElement(s,null,"CSS")),o.createElement(d,{value:"js"},o.createElement(n,null),o.createElement(s,null,"JavaScript")))};var J,U,W;L.parameters={...L.parameters,docs:{...(J=L.parameters)==null?void 0:J.docs,source:{originalSource:`{
  render: (arg: DemoArg) => <RadioGroup disabled={arg.disabled} orientation={arg.orientation}>
      <Radio invalid={arg.invalid} value="html">
        <RadioControl />

        <RadioLabel>HTML</RadioLabel>
      </Radio>

      <Radio invalid={arg.invalid} value="css">
        <RadioControl />

        <RadioLabel>CSS</RadioLabel>
      </Radio>

      <Radio invalid={arg.invalid} value="js">
        <RadioControl />

        <RadioLabel>JavaScript</RadioLabel>
      </Radio>
    </RadioGroup>,
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
        category: CONTROL_CATEGORY.general,
        type: {
          summary: 'boolean'
        }
      },
      control: 'boolean'
    },
    orientation: {
      table: {
        category: CONTROL_CATEGORY.general,
        type: {
          summary: ['horizontal', 'vertical']
        }
      },
      control: {
        type: 'select'
      },
      options: ['horizontal', 'vertical']
    }
  })
}`,...(W=(U=L.parameters)==null?void 0:U.docs)==null?void 0:W.source}}};var z,B,Y;S.parameters={...S.parameters,docs:{...(z=S.parameters)==null?void 0:z.docs,source:{originalSource:`{
  globals: {
    imports: \`import { Radio, RadioControl, RadioGroup, RadioLabel } from '@ovhcloud/ods-react';\`
  },
  tags: ['!dev'],
  render: ({}) => <RadioGroup>
      <Radio value="html">
        <RadioControl />

        <RadioLabel>HTML</RadioLabel>
      </Radio>

      <Radio value="css">
        <RadioControl />

        <RadioLabel>CSS</RadioLabel>
      </Radio>

      <Radio value="js">
        <RadioControl />

        <RadioLabel>JavaScript</RadioLabel>
      </Radio>
    </RadioGroup>
}`,...(Y=(B=S.parameters)==null?void 0:B.docs)==null?void 0:Y.source}}};var K,Q,X;I.parameters={...I.parameters,docs:{...(K=I.parameters)==null?void 0:K.docs,source:{originalSource:`{
  globals: {
    imports: \`import { Radio, RadioControl, RadioGroup, RadioLabel } from '@ovhcloud/ods-react';\`
  },
  tags: ['!dev'],
  render: ({}) => <RadioGroup disabled>
      <Radio value="html">
        <RadioControl />

        <RadioLabel>HTML</RadioLabel>
      </Radio>

      <Radio value="css">
        <RadioControl />

        <RadioLabel>CSS</RadioLabel>
      </Radio>

      <Radio value="js">
        <RadioControl />

        <RadioLabel>JavaScript</RadioLabel>
      </Radio>
    </RadioGroup>
}`,...(X=(Q=I.parameters)==null?void 0:Q.docs)==null?void 0:X.source}}};var Z,ee,ae;T.parameters={...T.parameters,docs:{...(Z=T.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  globals: {
    imports: \`import { Radio, RadioControl, RadioGroup, RadioLabel } from '@ovhcloud/ods-react';\`
  },
  tags: ['!dev'],
  render: ({}) => <RadioGroup>
      <Radio value="html">
        <RadioControl />

        <RadioLabel>HTML</RadioLabel>
      </Radio>

      <Radio disabled value="css">
        <RadioControl />

        <RadioLabel>CSS</RadioLabel>
      </Radio>

      <Radio value="js">
        <RadioControl />

        <RadioLabel>JavaScript</RadioLabel>
      </Radio>
    </RadioGroup>
}`,...(ae=(ee=T.parameters)==null?void 0:ee.docs)==null?void 0:ae.source}}};var oe,te,re;G.parameters={...G.parameters,docs:{...(oe=G.parameters)==null?void 0:oe.docs,source:{originalSource:`{
  globals: {
    imports: \`import { FormField, FormFieldLabel, Radio, RadioControl, RadioGroup, RadioLabel } from '@ovhcloud/ods-react';\`
  },
  tags: ['!dev'],
  render: ({}) => <FormField>
      <FormFieldLabel>
        Pick a language:
      </FormFieldLabel>

      <RadioGroup>
        <Radio value="html">
          <RadioControl />

          <RadioLabel>HTML</RadioLabel>
        </Radio>

        <Radio value="css">
          <RadioControl />

          <RadioLabel>CSS</RadioLabel>
        </Radio>

        <Radio value="js">
          <RadioControl />

          <RadioLabel>JavaScript</RadioLabel>
        </Radio>
      </RadioGroup>
    </FormField>
}`,...(re=(te=G.parameters)==null?void 0:te.docs)==null?void 0:re.source}}};var ie,le,de;V.parameters={...V.parameters,docs:{...(ie=V.parameters)==null?void 0:ie.docs,source:{originalSource:`{
  globals: {
    imports: \`import { Radio, RadioControl, RadioGroup, RadioLabel } from '@ovhcloud/ods-react';\`
  },
  tags: ['!dev'],
  render: ({}) => <RadioGroup defaultValue="html">
      <Radio value="html" invalid>
        <RadioControl />

        <RadioLabel>HTML</RadioLabel>
      </Radio>

      <Radio invalid value="css">
        <RadioControl />

        <RadioLabel>CSS</RadioLabel>
      </Radio>

      <Radio value="js">
        <RadioControl />

        <RadioLabel>JavaScript</RadioLabel>
      </Radio>
    </RadioGroup>
}`,...(de=(le=V.parameters)==null?void 0:le.docs)==null?void 0:de.source}}};var ne,se,ue;P.parameters={...P.parameters,docs:{...(ne=P.parameters)==null?void 0:ne.docs,source:{originalSource:`{
  globals: {
    imports: \`import { Radio, RadioControl, RadioGroup, RadioLabel } from '@ovhcloud/ods-react';\`
  },
  tags: ['!dev'],
  render: ({}) => <RadioGroup orientation="horizontal">
      <Radio value="html">
        <RadioControl />

        <RadioLabel>HTML</RadioLabel>
      </Radio>

      <Radio value="css">
        <RadioControl />

        <RadioLabel>CSS</RadioLabel>
      </Radio>

      <Radio value="js">
        <RadioControl />

        <RadioLabel>JavaScript</RadioLabel>
      </Radio>
    </RadioGroup>
}`,...(ue=(se=P.parameters)==null?void 0:se.docs)==null?void 0:ue.source}}};var ce,me,pe;F.parameters={...F.parameters,docs:{...(ce=F.parameters)==null?void 0:ce.docs,source:{originalSource:`{
  tags: ['!dev'],
  parameters: {
    layout: 'centered'
  },
  render: ({}) => <RadioGroup>
      <Radio value="html">
        <RadioControl />

        <RadioLabel>HTML</RadioLabel>
      </Radio>

      <Radio value="css">
        <RadioControl />

        <RadioLabel>CSS</RadioLabel>
      </Radio>

      <Radio value="js">
        <RadioControl />

        <RadioLabel>JavaScript</RadioLabel>
      </Radio>
    </RadioGroup>
}`,...(pe=(me=F.parameters)==null?void 0:me.docs)==null?void 0:pe.source}}};const Ra=["Demo","Default","DisabledGroup","DisabledItem","InFormField","Invalid","Orientation","Overview"],La=Object.freeze(Object.defineProperty({__proto__:null,Default:S,Demo:L,DisabledGroup:I,DisabledItem:T,InFormField:G,Invalid:V,Orientation:P,Overview:F,__namedExportsOrder:Ra,default:pa},Symbol.toStringTag,{value:"Module"}));export{S as D,V as I,F as O,La as R,I as a,T as b,P as c,G as d};
