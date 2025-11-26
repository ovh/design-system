import{r as f,e as a}from"./index-jIWwRBLr.js";import{u as Ve,F as Pe,a as Fe}from"./FormFieldLabel-B8-lDkmb.js";import{j as b}from"./jsx-runtime-Cfl8ynUo.js";import{c as fe}from"./index-CqY9YpN0.js";import{c as M,a as Ee,T as j,U as H,P as g,Q as _e,aA as je,X as He,a7 as ke,C as he,z as De,Y as Oe,aB as Ne,ax as we,aE as xe,am as Me,a4 as Ae,u as Je,R as $e,D as qe,S as Ue}from"./use-locale-context-6s5qsrWI.js";import{i as We,t as ze}from"./index-Dp00x3gb.js";import{e as Be,o as Ye,C as w}from"./controls-BtiQQn1l.js";const[Ke,D]=M({name:"RadioGroupContext",hookName:"useRadioGroupContext",providerName:"<RadioGroupProvider />"}),[Qe,Ia]=M({name:"RadioGroupItemContext",hookName:"useRadioGroupItemContext",providerName:"<RadioGroupItemProvider />"}),[Xe,A]=M({name:"RadioGroupItemPropsContext",hookName:"useRadioGroupItemPropsContext",providerName:"<RadioGroupItemPropsProvider />"}),Ce=f.forwardRef((e,o)=>{const[t,r]=Ee()(e,["value","disabled","invalid"]),u=D(),s=j(u.getItemProps(t),r),c=u.getItemState(t);return b.jsx(Qe,{value:c,children:b.jsx(Xe,{value:t,children:b.jsx(H.label,{...s,ref:o})})})});Ce.displayName="RadioGroupItem";const Le=f.forwardRef((e,o)=>{const t=D(),r=A(),u=j(t.getItemControlProps(r),e);return b.jsx(H.div,{...u,ref:o})});Le.displayName="RadioGroupItemControl";const ye=f.forwardRef((e,o)=>{const t=D(),r=A(),u=j(t.getItemHiddenInputProps(r),e);return b.jsx(H.input,{...u,ref:o})});ye.displayName="RadioGroupItemHiddenInput";const Se=f.forwardRef((e,o)=>{const t=D(),r=A(),u=j(t.getItemTextProps(r),e);return b.jsx(H.span,{...u,ref:o})});Se.displayName="RadioGroupItemText";var Ze=_e("radio-group").parts("root","label","item","itemText","itemControl","indicator"),C=Ze.build(),k=e=>{var o;return((o=e.ids)==null?void 0:o.root)??`radio-group:${e.id}`},$=e=>{var o;return((o=e.ids)==null?void 0:o.label)??`radio-group:${e.id}:label`},Te=(e,o)=>{var t,r;return((r=(t=e.ids)==null?void 0:t.item)==null?void 0:r.call(t,o))??`radio-group:${e.id}:radio:${o}`},x=(e,o)=>{var t,r;return((r=(t=e.ids)==null?void 0:t.itemHiddenInput)==null?void 0:r.call(t,o))??`radio-group:${e.id}:radio:input:${o}`},ea=(e,o)=>{var t,r;return((r=(t=e.ids)==null?void 0:t.itemControl)==null?void 0:r.call(t,o))??`radio-group:${e.id}:radio:control:${o}`},aa=(e,o)=>{var t,r;return((r=(t=e.ids)==null?void 0:t.itemLabel)==null?void 0:r.call(t,o))??`radio-group:${e.id}:radio:label:${o}`},Ie=e=>{var o;return((o=e.ids)==null?void 0:o.indicator)??`radio-group:${e.id}:indicator`},O=e=>e.getById(k(e)),oa=(e,o)=>e.getById(x(e,o)),ta=e=>e.getById(Ie(e)),ra=e=>{var o;return(o=O(e))==null?void 0:o.querySelector("input:not(:disabled)")},la=e=>{var o;return(o=O(e))==null?void 0:o.querySelector("input:not(:disabled):checked")},q=e=>{const t=`input[type=radio][data-ownedby='${CSS.escape(k(e))}']:not([disabled])`;return Ae(O(e),t)},ia=(e,o)=>{if(o)return e.getById(Te(e,o))},da=e=>({left:(e==null?void 0:e.offsetLeft)??0,top:(e==null?void 0:e.offsetTop)??0,width:(e==null?void 0:e.offsetWidth)??0,height:(e==null?void 0:e.offsetHeight)??0}),na=e=>({width:`${e.width}px`,height:`${e.height}px`,left:`${e.left}px`,top:`${e.top}px`});function sa(e,o){const{context:t,send:r,computed:u,prop:s,scope:c,refs:E}=e,R=u("isDisabled"),h=s("readOnly");function L(l){return{value:l.value,invalid:!!l.invalid,disabled:!!l.disabled||R,checked:t.get("value")===l.value,focused:t.get("focusedValue")===l.value,focusVisible:E.get("focusVisibleValue")===l.value,hovered:t.get("hoveredValue")===l.value,active:t.get("activeValue")===l.value}}function N(l){const m=L(l);return{"data-focus":g(m.focused),"data-focus-visible":g(m.focusVisible),"data-disabled":g(m.disabled),"data-readonly":g(h),"data-state":m.checked?"checked":"unchecked","data-hover":g(m.hovered),"data-invalid":g(m.invalid),"data-orientation":s("orientation"),"data-ssr":g(t.get("ssr"))}}const J=()=>{const l=la(c)??ra(c);l==null||l.focus()};return{focus:J,value:t.get("value"),setValue(l){r({type:"SET_VALUE",value:l,isTrusted:!1})},clearValue(){r({type:"SET_VALUE",value:null,isTrusted:!1})},getRootProps(){return o.element({...C.root.attrs,role:"radiogroup",id:k(c),"aria-labelledby":$(c),"data-orientation":s("orientation"),"data-disabled":g(R),"aria-orientation":s("orientation"),dir:s("dir"),style:{position:"relative"}})},getLabelProps(){return o.element({...C.label.attrs,dir:s("dir"),"data-orientation":s("orientation"),"data-disabled":g(R),id:$(c),onClick:J})},getItemState:L,getItemProps(l){const m=L(l);return o.label({...C.item.attrs,dir:s("dir"),id:Te(c,l.value),htmlFor:x(c,l.value),...N(l),onPointerMove(){m.disabled||m.hovered||r({type:"SET_HOVERED",value:l.value,hovered:!0})},onPointerLeave(){m.disabled||r({type:"SET_HOVERED",value:null})},onPointerDown(p){m.disabled||ke(p)&&(m.focused&&p.pointerType==="mouse"&&p.preventDefault(),r({type:"SET_ACTIVE",value:l.value,active:!0}))},onPointerUp(){m.disabled||r({type:"SET_ACTIVE",value:null})},onClick(){var p;!m.disabled&&He()&&((p=oa(c,l.value))==null||p.focus())}})},getItemTextProps(l){return o.element({...C.itemText.attrs,dir:s("dir"),id:aa(c,l.value),...N(l)})},getItemControlProps(l){const m=L(l);return o.element({...C.itemControl.attrs,dir:s("dir"),id:ea(c,l.value),"data-active":g(m.active),"aria-hidden":!0,...N(l)})},getItemHiddenInputProps(l){const m=L(l);return o.input({"data-ownedby":k(c),id:x(c,l.value),type:"radio",name:s("name")||s("id"),form:s("form"),value:l.value,onClick(p){if(h){p.preventDefault();return}p.currentTarget.checked&&r({type:"SET_VALUE",value:l.value,isTrusted:!0})},onBlur(){r({type:"SET_FOCUSED",value:null,focused:!1})},onFocus(){const p=We();r({type:"SET_FOCUSED",value:l.value,focused:!0,focusVisible:p})},onKeyDown(p){p.defaultPrevented||p.key===" "&&r({type:"SET_ACTIVE",value:l.value,active:!0})},onKeyUp(p){p.defaultPrevented||p.key===" "&&r({type:"SET_ACTIVE",value:null})},disabled:m.disabled||h,defaultChecked:m.checked,style:je})},getIndicatorProps(){const l=t.get("indicatorRect");return o.element({id:Ie(c),...C.indicator.attrs,dir:s("dir"),hidden:t.get("value")==null,"data-disabled":g(R),"data-orientation":s("orientation"),style:{"--transition-property":"left, top, width, height","--left":l==null?void 0:l.left,"--top":l==null?void 0:l.top,"--width":l==null?void 0:l.width,"--height":l==null?void 0:l.height,position:"absolute",willChange:"var(--transition-property)",transitionProperty:"var(--transition-property)",transitionDuration:t.get("canIndicatorTransition")?"var(--transition-duration, 150ms)":"0ms",transitionTimingFunction:"var(--transition-timing-function)",[s("orientation")==="horizontal"?"left":"top"]:s("orientation")==="horizontal"?"var(--left)":"var(--top)"}})}}}var{not:ua}=Oe(),ca=De({props({props:e}){return{orientation:"vertical",...e}},initialState(){return"idle"},context({prop:e,bindable:o}){return{value:o(()=>({defaultValue:e("defaultValue"),value:e("value"),onChange(t){var r;(r=e("onValueChange"))==null||r({value:t})}})),activeValue:o(()=>({defaultValue:null})),focusedValue:o(()=>({defaultValue:null})),hoveredValue:o(()=>({defaultValue:null})),indicatorRect:o(()=>({defaultValue:{}})),canIndicatorTransition:o(()=>({defaultValue:!1})),fieldsetDisabled:o(()=>({defaultValue:!1})),ssr:o(()=>({defaultValue:!0}))}},refs(){return{indicatorCleanup:null,focusVisibleValue:null}},computed:{isDisabled:({prop:e,context:o})=>!!e("disabled")||o.get("fieldsetDisabled")},entry:["syncIndicatorRect","syncSsr"],exit:["cleanupObserver"],effects:["trackFormControlState","trackFocusVisible"],watch({track:e,action:o,context:t}){e([()=>t.get("value")],()=>{o(["setIndicatorTransition","syncIndicatorRect","syncInputElements"])})},on:{SET_VALUE:[{guard:ua("isTrusted"),actions:["setValue","dispatchChangeEvent"]},{actions:["setValue"]}],SET_HOVERED:{actions:["setHovered"]},SET_ACTIVE:{actions:["setActive"]},SET_FOCUSED:{actions:["setFocused"]}},states:{idle:{}},implementations:{guards:{isTrusted:({event:e})=>!!e.isTrusted},effects:{trackFormControlState({context:e,scope:o}){return Me(O(o),{onFieldsetDisabledChange(t){e.set("fieldsetDisabled",t)},onFormReset(){e.set("value",e.initial("value"))}})},trackFocusVisible({scope:e}){var o;return ze({root:(o=e.getRootNode)==null?void 0:o.call(e)})}},actions:{setValue({context:e,event:o}){e.set("value",o.value)},setHovered({context:e,event:o}){e.set("hoveredValue",o.value)},setActive({context:e,event:o}){e.set("activeValue",o.value)},setFocused({context:e,event:o,refs:t}){e.set("focusedValue",o.value),t.set("focusVisibleValue",o.focusVisible?o.value:null)},syncInputElements({context:e,scope:o}){q(o).forEach(r=>{r.checked=r.value===e.get("value")})},setIndicatorTransition({context:e}){e.set("canIndicatorTransition",xe(e.get("value")))},cleanupObserver({refs:e}){var o;(o=e.get("indicatorCleanup"))==null||o()},syncSsr({context:e}){e.set("ssr",!1)},syncIndicatorRect({context:e,scope:o,refs:t}){var c;if((c=t.get("indicatorCleanup"))==null||c(),!ta(o))return;const r=e.get("value"),u=ia(o,r);if(r==null||!u){e.set("canIndicatorTransition",!1),e.set("indicatorRect",{});return}const s=we([u],{measure(E){return da(E)},onEntry({rects:E}){e.set("indicatorRect",na(E[0]))}});t.set("indicatorCleanup",s)},dispatchChangeEvent({context:e,scope:o}){q(o).forEach(r=>{const u=r.value===e.get("value");u!==r.checked&&Ne(r,{checked:u})})}}}});he()(["dir","disabled","form","getRootNode","id","ids","name","onValueChange","orientation","readOnly","value","defaultValue"]);he()(["value","disabled","invalid"]);const ma=e=>{const o=f.useId(),{getRootNode:t}=Je(),{dir:r}=$e(),u={id:o,dir:r,getRootNode:t,...e},s=qe(ca,u);return sa(s,Ue)},Ge=f.forwardRef((e,o)=>{const[t,r]=Ee()(e,["defaultValue","disabled","form","id","ids","name","onValueChange","orientation","readOnly","value"]),u=ma(t),s=j(u.getRootProps(),r);return b.jsx(Ke,{value:u,children:b.jsx(H.div,{...s,ref:o})})});Ge.displayName="RadioGroupRoot";const pa="_radio_1c28j_2",Ra={radio:pa},i=f.forwardRef(({children:e,className:o,disabled:t,invalid:r,onChange:u,required:s,...c},E)=>{const R=Ve(),h=r||(R==null?void 0:R.invalid);return b.jsxs(Ce,{className:fe(Ra.radio,o),"data-ods":"radio",disabled:t,invalid:h,ref:E,...c,children:[e,b.jsx(ye,{"aria-describedby":c["aria-describedby"]||(R==null?void 0:R.ariaDescribedBy),"aria-invalid":h,required:s})]})});i.displayName="Radio";i.__docgenInfo={description:"",methods:[],displayName:"Radio",props:{disabled:{required:!1,tsType:{name:"boolean"},description:"Whether the radio is disabled."},invalid:{required:!1,tsType:{name:"boolean"},description:"Whether the radio is in error state."},required:{required:!1,tsType:{name:"boolean"},description:"Whether the radio is required."},value:{required:!0,tsType:{name:"string"},description:"The value of the radio."}},composes:["ComponentPropsWithRef"]};const va={"radio-control":"_radio-control_15vm3_2"},d=f.forwardRef(({children:e,...o},t)=>b.jsx(Le,{className:va["radio-control"],"data-ods":"radio-control",ref:t,...o,children:e}));d.displayName="RadioControl";d.__docgenInfo={description:"",methods:[],displayName:"RadioControl",composes:["ComponentPropsWithRef"]};const ba={"radio-group":"_radio-group_11l71_2"},v=f.forwardRef(({children:e,className:o,defaultValue:t,disabled:r,name:u,onValueChange:s,orientation:c,value:E,...R},h)=>b.jsx(Ge,{"aria-labelledby":R["aria-labelledby"]||"",className:fe(ba["radio-group"],o),"data-ods":"radio-group",defaultValue:t,disabled:r,name:u,onValueChange:s,orientation:c,ref:h,value:E,...R,children:e}));v.displayName="RadioGroup";v.__docgenInfo={description:"",methods:[],displayName:"RadioGroup",props:{defaultValue:{required:!1,tsType:{name:"string"},description:"The initial value of the checked radio. Use when you don't need to control the value of the radio group."},disabled:{required:!1,tsType:{name:"boolean"},description:"Whether the component is disabled."},name:{required:!1,tsType:{name:"string"},description:"The name of the form element. Useful for form submission."},onValueChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(detail: RadioValueChangeDetail) => void",signature:{arguments:[{type:{name:"RadioValueChangeDetail"},name:"detail"}],return:{name:"void"}}},description:"Callback fired when the value changes."},orientation:{required:!1,tsType:{name:"union",raw:"'horizontal' | 'vertical'",elements:[{name:"literal",value:"'horizontal'"},{name:"literal",value:"'vertical'"}]},description:"The orientation of the radio group."},value:{required:!1,tsType:{name:"string"},description:"The controlled value of the radio group."}},composes:["ComponentPropsWithRef"]};const n=f.forwardRef(({children:e,className:o,...t},r)=>b.jsx(Se,{className:o,"data-ods":"radio-label",ref:r,...t,children:e}));n.displayName="RadioLabel";n.__docgenInfo={description:"",methods:[],displayName:"RadioLabel",composes:["ComponentPropsWithRef"]};const ga={argTypes:Be(["defaultValue","name","onValueChange","value"]),component:v,subcomponents:{Radio:i,RadioControl:d,RadioLabel:n},title:"React Components/Radio Group"},y={render:e=>a.createElement(v,{disabled:e.disabled,orientation:e.orientation},a.createElement(i,{invalid:e.invalid,value:"html"},a.createElement(d,null),a.createElement(n,null,"HTML")),a.createElement(i,{invalid:e.invalid,value:"css"},a.createElement(d,null),a.createElement(n,null,"CSS")),a.createElement(i,{invalid:e.invalid,value:"js"},a.createElement(d,null),a.createElement(n,null,"JavaScript"))),argTypes:Ye({disabled:{table:{category:w.general},control:{type:"boolean"}},invalid:{table:{category:w.general,type:{summary:"boolean"}},control:"boolean"},orientation:{table:{category:w.general,type:{summary:["horizontal","vertical"]}},control:{type:"select"},options:["horizontal","vertical"]}})},S={globals:{imports:"import { Radio, RadioControl, RadioGroup, RadioLabel } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>a.createElement(v,null,a.createElement(i,{value:"html"},a.createElement(d,null),a.createElement(n,null,"HTML")),a.createElement(i,{value:"css"},a.createElement(d,null),a.createElement(n,null,"CSS")),a.createElement(i,{value:"js"},a.createElement(d,null),a.createElement(n,null,"JavaScript")))},T={globals:{imports:"import { Radio, RadioControl, RadioGroup, RadioLabel } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>a.createElement(v,{disabled:!0},a.createElement(i,{value:"html"},a.createElement(d,null),a.createElement(n,null,"HTML")),a.createElement(i,{value:"css"},a.createElement(d,null),a.createElement(n,null,"CSS")),a.createElement(i,{value:"js"},a.createElement(d,null),a.createElement(n,null,"JavaScript")))},I={globals:{imports:"import { Radio, RadioControl, RadioGroup, RadioLabel } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>a.createElement(v,null,a.createElement(i,{value:"html"},a.createElement(d,null),a.createElement(n,null,"HTML")),a.createElement(i,{disabled:!0,value:"css"},a.createElement(d,null),a.createElement(n,null,"CSS")),a.createElement(i,{value:"js"},a.createElement(d,null),a.createElement(n,null,"JavaScript")))},G={globals:{imports:"import { FormField, FormFieldLabel, Radio, RadioControl, RadioGroup, RadioLabel } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>a.createElement(Pe,null,a.createElement(Fe,null,"Pick a language:"),a.createElement(v,null,a.createElement(i,{value:"html"},a.createElement(d,null),a.createElement(n,null,"HTML")),a.createElement(i,{value:"css"},a.createElement(d,null),a.createElement(n,null,"CSS")),a.createElement(i,{value:"js"},a.createElement(d,null),a.createElement(n,null,"JavaScript"))))},V={globals:{imports:"import { Radio, RadioControl, RadioGroup, RadioLabel } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>a.createElement(v,{defaultValue:"html"},a.createElement(i,{value:"html",invalid:!0},a.createElement(d,null),a.createElement(n,null,"HTML")),a.createElement(i,{invalid:!0,value:"css"},a.createElement(d,null),a.createElement(n,null,"CSS")),a.createElement(i,{value:"js"},a.createElement(d,null),a.createElement(n,null,"JavaScript")))},P={globals:{imports:"import { Radio, RadioControl, RadioGroup, RadioLabel } from '@ovhcloud/ods-react';"},tags:["!dev"],render:({})=>a.createElement(v,{orientation:"horizontal"},a.createElement(i,{value:"html"},a.createElement(d,null),a.createElement(n,null,"HTML")),a.createElement(i,{value:"css"},a.createElement(d,null),a.createElement(n,null,"CSS")),a.createElement(i,{value:"js"},a.createElement(d,null),a.createElement(n,null,"JavaScript")))},F={tags:["!dev"],parameters:{layout:"centered"},render:({})=>a.createElement(v,null,a.createElement(i,{value:"html"},a.createElement(d,null),a.createElement(n,null,"HTML")),a.createElement(i,{value:"css"},a.createElement(d,null),a.createElement(n,null,"CSS")),a.createElement(i,{value:"js"},a.createElement(d,null),a.createElement(n,null,"JavaScript")))},_={parameters:{layout:"fullscreen"},tags:["!dev"],render:({})=>a.createElement("div",{style:{display:"flex",gap:"24px"}},a.createElement(v,null,a.createElement(i,{value:"html"},a.createElement(d,null),a.createElement(n,null,"HTML")),a.createElement(i,{value:"css"},a.createElement(d,null),a.createElement(n,null,"CSS")),a.createElement(i,{value:"js"},a.createElement(d,null),a.createElement(n,null,"JavaScript"))),a.createElement(v,{disabled:!0},a.createElement(i,{value:"html"},a.createElement(d,null),a.createElement(n,null,"HTML")),a.createElement(i,{value:"css"},a.createElement(d,null),a.createElement(n,null,"CSS")),a.createElement(i,{value:"js"},a.createElement(d,null),a.createElement(n,null,"JavaScript"))),a.createElement(v,null,a.createElement(i,{disabled:!0,value:"html"},a.createElement(d,null),a.createElement(n,null,"HTML")),a.createElement(i,{value:"css"},a.createElement(d,null),a.createElement(n,null,"CSS")),a.createElement(i,{value:"js"},a.createElement(d,null),a.createElement(n,null,"JavaScript"))))};var U,W,z;y.parameters={...y.parameters,docs:{...(U=y.parameters)==null?void 0:U.docs,source:{originalSource:`{
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
}`,...(z=(W=y.parameters)==null?void 0:W.docs)==null?void 0:z.source}}};var B,Y,K;S.parameters={...S.parameters,docs:{...(B=S.parameters)==null?void 0:B.docs,source:{originalSource:`{
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
}`,...(K=(Y=S.parameters)==null?void 0:Y.docs)==null?void 0:K.source}}};var Q,X,Z;T.parameters={...T.parameters,docs:{...(Q=T.parameters)==null?void 0:Q.docs,source:{originalSource:`{
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
}`,...(Z=(X=T.parameters)==null?void 0:X.docs)==null?void 0:Z.source}}};var ee,ae,oe;I.parameters={...I.parameters,docs:{...(ee=I.parameters)==null?void 0:ee.docs,source:{originalSource:`{
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
}`,...(oe=(ae=I.parameters)==null?void 0:ae.docs)==null?void 0:oe.source}}};var te,re,le;G.parameters={...G.parameters,docs:{...(te=G.parameters)==null?void 0:te.docs,source:{originalSource:`{
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
}`,...(le=(re=G.parameters)==null?void 0:re.docs)==null?void 0:le.source}}};var ie,de,ne;V.parameters={...V.parameters,docs:{...(ie=V.parameters)==null?void 0:ie.docs,source:{originalSource:`{
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
}`,...(ne=(de=V.parameters)==null?void 0:de.docs)==null?void 0:ne.source}}};var se,ue,ce;P.parameters={...P.parameters,docs:{...(se=P.parameters)==null?void 0:se.docs,source:{originalSource:`{
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
}`,...(ce=(ue=P.parameters)==null?void 0:ue.docs)==null?void 0:ce.source}}};var me,pe,Re;F.parameters={...F.parameters,docs:{...(me=F.parameters)==null?void 0:me.docs,source:{originalSource:`{
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
}`,...(Re=(pe=F.parameters)==null?void 0:pe.docs)==null?void 0:Re.source}}};var ve,be,ge;_.parameters={..._.parameters,docs:{...(ve=_.parameters)==null?void 0:ve.docs,source:{originalSource:`{
  parameters: {
    layout: 'fullscreen'
  },
  tags: ['!dev'],
  render: ({}) => <div style={{
    display: 'flex',
    gap: '24px'
  }}>
      <RadioGroup>
        <Radio value="html"><RadioControl /><RadioLabel>HTML</RadioLabel></Radio>
        <Radio value="css"><RadioControl /><RadioLabel>CSS</RadioLabel></Radio>
        <Radio value="js"><RadioControl /><RadioLabel>JavaScript</RadioLabel></Radio>
      </RadioGroup>

      <RadioGroup disabled>
        <Radio value="html"><RadioControl /><RadioLabel>HTML</RadioLabel></Radio>
        <Radio value="css"><RadioControl /><RadioLabel>CSS</RadioLabel></Radio>
        <Radio value="js"><RadioControl /><RadioLabel>JavaScript</RadioLabel></Radio>
      </RadioGroup>

      <RadioGroup>
        <Radio disabled value="html"><RadioControl /><RadioLabel>HTML</RadioLabel></Radio>
        <Radio value="css"><RadioControl /><RadioLabel>CSS</RadioLabel></Radio>
        <Radio value="js"><RadioControl /><RadioLabel>JavaScript</RadioLabel></Radio>
      </RadioGroup>
    </div>
}`,...(ge=(be=_.parameters)==null?void 0:be.docs)==null?void 0:ge.source}}};const fa=["Demo","Default","DisabledGroup","DisabledItem","InFormField","Invalid","Orientation","Overview","ThemeGenerator"],Ga=Object.freeze(Object.defineProperty({__proto__:null,Default:S,Demo:y,DisabledGroup:T,DisabledItem:I,InFormField:G,Invalid:V,Orientation:P,Overview:F,ThemeGenerator:_,__namedExportsOrder:fa,default:ga},Symbol.toStringTag,{value:"Module"}));export{S as D,V as I,F as O,Ga as R,T as a,I as b,P as c,G as d};
