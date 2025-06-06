import{r as g,e as t}from"./index-D_CmzhJ4.js";import{c as Le}from"./FormFieldLabel-BxxkSoC9.js";import{j as v}from"./jsx-runtime-VM66peLj.js";import{c as H}from"./index-CkQHsVsO.js";import{c as q,a as pe,I as S,J as I,Q as b,P as Te,aq as Ge,R as Pe,p as Ve,X as _e,ar as ke,H as De,ac as Fe,ap as je,q as we}from"./index-BCxMAfLs.js";import{i as Ne,t as Oe}from"./index-DTqyXX3-.js";import{c as Re,a as xe,b as He,u as qe,n as Ae}from"./use-locale-context-Z4fgdY29.js";import{e as $e,o as Me,C as M}from"./controls-BtiQQn1l.js";const[Je,F]=q({name:"RadioGroupContext",hookName:"useRadioGroupContext",providerName:"<RadioGroupProvider />"}),[ze,Ga]=q({name:"RadioGroupItemContext",hookName:"useRadioGroupItemContext",providerName:"<RadioGroupItemProvider />"}),[Ue,A]=q({name:"RadioGroupItemPropsContext",hookName:"useRadioGroupItemPropsContext",providerName:"<RadioGroupItemPropsProvider />"}),ve=g.forwardRef((e,a)=>{const[o,r]=pe()(e,["value","disabled","invalid"]),l=F(),n=S(l.getItemProps(o),r),d=l.getItemState(o);return v.jsx(ze,{value:d,children:v.jsx(Ue,{value:o,children:v.jsx(I.label,{...n,ref:a})})})});ve.displayName="RadioGroupItem";const fe=g.forwardRef((e,a)=>{const o=F(),r=A(),l=S(o.getItemControlProps(r),e);return v.jsx(I.div,{...l,ref:a})});fe.displayName="RadioGroupItemControl";const ge=g.forwardRef((e,a)=>{const o=F(),r=A(),l=S(o.getItemHiddenInputProps(r),e);return v.jsx(I.input,{...l,ref:a})});ge.displayName="RadioGroupItemHiddenInput";const be=g.forwardRef((e,a)=>{const o=F(),r=A(),l=S(o.getItemTextProps(r),e);return v.jsx(I.span,{...l,ref:a})});be.displayName="RadioGroupItemText";const Ee=g.forwardRef((e,a)=>{const o=F(),r=S(o.getLabelProps(),e);return v.jsx(I.label,{...r,ref:a})});Ee.displayName="RadioGroupLabel";var O,C=new Map,Be=e=>e.getBoundingClientRect();function We(e,a){const{scope:o="rect",getRect:r=Be,onChange:l}=a,n=Ye({scope:o,getRect:r}),d=C.get(e);return d?(d.callbacks.push(l),l(r(e))):(C.set(e,{rect:{},callbacks:[l]}),C.size===1&&(O=requestAnimationFrame(n))),function(){const f=C.get(e);if(!f)return;const E=f.callbacks.indexOf(l);E>-1&&f.callbacks.splice(E,1),f.callbacks.length===0&&(C.delete(e),C.size===0&&cancelAnimationFrame(O))}}function Ye(e){const{scope:a,getRect:o}=e,r=Qe(a);return function l(){const n=[];C.forEach((d,R)=>{const f=o(R);r(d.rect,f)||(d.rect=f,n.push(d))}),n.forEach(d=>{d.callbacks.forEach(R=>R(d.rect))}),O=requestAnimationFrame(l)}}var he=(e,a)=>e.width===a.width&&e.height===a.height,Ce=(e,a)=>e.top===a.top&&e.left===a.left,Ke=(e,a)=>he(e,a)&&Ce(e,a);function Qe(e){return e==="size"?he:e==="position"?Ce:Ke}var Xe=Te("radio-group").parts("root","label","item","itemText","itemControl","indicator"),y=Xe.build(),j=e=>{var a;return((a=e.ids)==null?void 0:a.root)??`radio-group:${e.id}`},J=e=>{var a;return((a=e.ids)==null?void 0:a.label)??`radio-group:${e.id}:label`},ye=(e,a)=>{var o,r;return((r=(o=e.ids)==null?void 0:o.item)==null?void 0:r.call(o,a))??`radio-group:${e.id}:radio:${a}`},x=(e,a)=>{var o,r;return((r=(o=e.ids)==null?void 0:o.itemHiddenInput)==null?void 0:r.call(o,a))??`radio-group:${e.id}:radio:input:${a}`},Ze=(e,a)=>{var o,r;return((r=(o=e.ids)==null?void 0:o.itemControl)==null?void 0:r.call(o,a))??`radio-group:${e.id}:radio:control:${a}`},ea=(e,a)=>{var o,r;return((r=(o=e.ids)==null?void 0:o.itemLabel)==null?void 0:r.call(o,a))??`radio-group:${e.id}:radio:label:${a}`},Se=e=>{var a;return((a=e.ids)==null?void 0:a.indicator)??`radio-group:${e.id}:indicator`},w=e=>e.getById(j(e)),aa=(e,a)=>e.getById(x(e,a)),ta=e=>e.getById(Se(e)),oa=e=>{var a;return(a=w(e))==null?void 0:a.querySelector("input:not(:disabled)")},ra=e=>{var a;return(a=w(e))==null?void 0:a.querySelector("input:not(:disabled):checked")},z=e=>{const o=`input[type=radio][data-ownedby='${CSS.escape(j(e))}']:not([disabled])`;return je(w(e),o)},ia=(e,a)=>{if(a)return e.getById(ye(e,a))},na=e=>({left:(e==null?void 0:e.offsetLeft)??0,top:(e==null?void 0:e.offsetTop)??0,width:(e==null?void 0:e.offsetWidth)??0,height:(e==null?void 0:e.offsetHeight)??0}),la=e=>({width:`${e.width}px`,height:`${e.height}px`,left:`${e.left}px`,top:`${e.top}px`});function da(e,a){const{context:o,send:r,computed:l,prop:n,scope:d}=e,R=l("isDisabled"),f=n("readOnly");function E(i){return{invalid:!!i.invalid,disabled:!!i.disabled||R,checked:o.get("value")===i.value,focused:o.get("focusedValue")===i.value,hovered:o.get("hoveredValue")===i.value,active:o.get("activeValue")===i.value}}function N(i){const m=E(i);return{"data-focus":b(m.focused),"data-focus-visible":b(m.focused&&o.get("focusVisible")),"data-disabled":b(m.disabled),"data-readonly":b(f),"data-state":m.checked?"checked":"unchecked","data-hover":b(m.hovered),"data-invalid":b(m.invalid),"data-orientation":n("orientation"),"data-ssr":b(o.get("ssr"))}}const $=()=>{const i=ra(d);if(i){i.focus();return}const m=oa(d);m==null||m.focus()};return{focus:$,value:o.get("value"),setValue(i){r({type:"SET_VALUE",value:i,isTrusted:!1})},clearValue(){r({type:"SET_VALUE",value:null,isTrusted:!1})},getRootProps(){return a.element({...y.root.attrs,role:"radiogroup",id:j(d),"aria-labelledby":J(d),"data-orientation":n("orientation"),"data-disabled":b(R),"aria-orientation":n("orientation"),dir:n("dir"),style:{position:"relative"}})},getLabelProps(){return a.element({...y.label.attrs,dir:n("dir"),"data-orientation":n("orientation"),"data-disabled":b(R),id:J(d),onClick:$})},getItemState:E,getItemProps(i){const m=E(i);return a.label({...y.item.attrs,dir:n("dir"),id:ye(d,i.value),htmlFor:x(d,i.value),...N(i),onPointerMove(){m.disabled||m.hovered||r({type:"SET_HOVERED",value:i.value,hovered:!0})},onPointerLeave(){m.disabled||r({type:"SET_HOVERED",value:null})},onPointerDown(p){m.disabled||(m.focused&&p.pointerType==="mouse"&&p.preventDefault(),r({type:"SET_ACTIVE",value:i.value,active:!0}))},onPointerUp(){m.disabled||r({type:"SET_ACTIVE",value:null})},onClick(){var p;!m.disabled&&Pe()&&((p=aa(d,i.value))==null||p.focus())}})},getItemTextProps(i){return a.element({...y.itemText.attrs,dir:n("dir"),id:ea(d,i.value),...N(i)})},getItemControlProps(i){const m=E(i);return a.element({...y.itemControl.attrs,dir:n("dir"),id:Ze(d,i.value),"data-active":b(m.active),"aria-hidden":!0,...N(i)})},getItemHiddenInputProps(i){const m=E(i);return a.input({"data-ownedby":j(d),id:x(d,i.value),type:"radio",name:n("name")||n("id"),form:n("form"),value:i.value,onClick(p){if(f){p.preventDefault();return}p.currentTarget.checked&&r({type:"SET_VALUE",value:i.value,isTrusted:!0})},onBlur(){r({type:"SET_FOCUSED",value:null,focused:!1,focusVisible:!1})},onFocus(){const p=Ne();r({type:"SET_FOCUSED",value:i.value,focused:!0,focusVisible:p})},onKeyDown(p){p.defaultPrevented||p.key===" "&&r({type:"SET_ACTIVE",value:i.value,active:!0})},onKeyUp(p){p.defaultPrevented||p.key===" "&&r({type:"SET_ACTIVE",value:null})},disabled:m.disabled,defaultChecked:m.checked,style:Ge})},getIndicatorProps(){const i=o.get("indicatorRect");return a.element({id:Se(d),...y.indicator.attrs,dir:n("dir"),hidden:o.get("value")==null,"data-disabled":b(R),"data-orientation":n("orientation"),style:{"--transition-property":"left, top, width, height","--left":i==null?void 0:i.left,"--top":i==null?void 0:i.top,"--width":i==null?void 0:i.width,"--height":i==null?void 0:i.height,position:"absolute",willChange:"var(--transition-property)",transitionProperty:"var(--transition-property)",transitionDuration:o.get("canIndicatorTransition")?"var(--transition-duration, 150ms)":"0ms",transitionTimingFunction:"var(--transition-timing-function)",[n("orientation")==="horizontal"?"left":"top"]:n("orientation")==="horizontal"?"var(--left)":"var(--top)"}})}}}var{not:sa}=_e(),ua=Ve({props({props:e}){return{orientation:"vertical",...e}},initialState(){return"idle"},context({prop:e,bindable:a}){return{value:a(()=>({defaultValue:e("defaultValue"),value:e("value"),onChange(o){var r;(r=e("onValueChange"))==null||r({value:o})}})),activeValue:a(()=>({defaultValue:null})),focusedValue:a(()=>({defaultValue:null})),hoveredValue:a(()=>({defaultValue:null})),indicatorRect:a(()=>({defaultValue:{}})),canIndicatorTransition:a(()=>({defaultValue:!1})),fieldsetDisabled:a(()=>({defaultValue:!1})),focusVisible:a(()=>({defaultValue:!1})),ssr:a(()=>({defaultValue:!0}))}},refs(){return{indicatorCleanup:null}},computed:{isDisabled:({prop:e,context:a})=>!!e("disabled")||a.get("fieldsetDisabled")},entry:["syncIndicatorRect","syncSsr"],exit:["cleanupObserver"],effects:["trackFormControlState","trackFocusVisible"],watch({track:e,action:a,context:o}){e([()=>o.get("value")],()=>{a(["setIndicatorTransition","syncIndicatorRect","syncInputElements"])})},on:{SET_VALUE:[{guard:sa("isTrusted"),actions:["setValue","dispatchChangeEvent"]},{actions:["setValue"]}],SET_HOVERED:{actions:["setHovered"]},SET_ACTIVE:{actions:["setActive"]},SET_FOCUSED:{actions:["setFocused"]}},states:{idle:{}},implementations:{guards:{isTrusted:({event:e})=>!!e.isTrusted},effects:{trackFormControlState({context:e,scope:a}){return Fe(w(a),{onFieldsetDisabledChange(o){e.set("fieldsetDisabled",o)},onFormReset(){e.set("value",e.initial("value"))}})},trackFocusVisible({scope:e}){var a;return Oe({root:(a=e.getRootNode)==null?void 0:a.call(e)})}},actions:{setValue({context:e,event:a}){e.set("value",a.value)},setHovered({context:e,event:a}){e.set("hoveredValue",a.value)},setActive({context:e,event:a}){e.set("activeValue",a.value)},setFocused({context:e,event:a}){e.set("focusedValue",a.value),e.set("focusVisible",a.focusVisible)},syncInputElements({context:e,scope:a}){z(a).forEach(r=>{r.checked=r.value===e.get("value")})},setIndicatorTransition({context:e}){e.set("canIndicatorTransition",De(e.get("value")))},cleanupObserver({refs:e}){var a;(a=e.get("indicatorCleanup"))==null||a()},syncSsr({context:e}){e.set("ssr",!1)},syncIndicatorRect({context:e,scope:a,refs:o}){var d;if((d=o.get("indicatorCleanup"))==null||d(),!ta(a))return;const r=e.get("value"),l=ia(a,r);if(r==null||!l){e.set("indicatorRect",{});return}const n=We(l,{getRect(R){return na(R)},onChange(R){e.set("indicatorRect",la(R)),we(()=>{e.set("canIndicatorTransition",!1)})}});o.set("indicatorCleanup",n)},dispatchChangeEvent({context:e,scope:a}){z(a).forEach(r=>{const l=r.value===e.get("value");l!==r.checked&&ke(r,{checked:l})})}}}});Re()(["dir","disabled","form","getRootNode","id","ids","name","onValueChange","orientation","readOnly","value","defaultValue"]);Re()(["value","disabled","invalid"]);const ca=e=>{const a=g.useId(),{getRootNode:o}=xe(),{dir:r}=He(),l={id:a,dir:r,getRootNode:o,...e},n=qe(ua,l);return da(n,Ae)},Ie=g.forwardRef((e,a)=>{const[o,r]=pe()(e,["defaultValue","disabled","form","id","ids","name","onValueChange","orientation","readOnly","value"]),l=ca(o),n=S(l.getRootProps(),r);return v.jsx(Je,{value:l,children:v.jsx(I.div,{...n,ref:a})})});Ie.displayName="RadioGroupRoot";const ma="_radio_13y02_2",pa={radio:ma},s=g.forwardRef(({children:e,className:a,disabled:o,onChange:r,required:l,...n},d)=>v.jsxs(ve,{className:H(pa.radio,a),disabled:o,ref:d,...n,children:[e,v.jsx(ge,{required:l})]}));s.displayName="Radio";s.__docgenInfo={description:"",methods:[],displayName:"Radio",props:{disabled:{required:!1,tsType:{name:"boolean"},description:""},invalid:{required:!1,tsType:{name:"boolean"},description:""},required:{required:!1,tsType:{name:"boolean"},description:""},value:{required:!0,tsType:{name:"string"},description:""}},composes:["ComponentPropsWithRef"]};const Ra={"radio-control":"_radio-control_7k9r8_2"},u=g.forwardRef(({children:e,...a},o)=>v.jsx(fe,{className:Ra["radio-control"],ref:o,...a,children:e}));u.displayName="RadioControl";u.__docgenInfo={description:"",methods:[],displayName:"RadioControl",composes:["ComponentPropsWithRef"]};const va={"radio-group":"_radio-group_10cyh_2"},h=g.forwardRef(({children:e,className:a,defaultValue:o,disabled:r,name:l,onValueChange:n,orientation:d,value:R,...f},E)=>v.jsx(Ie,{className:H(va["radio-group"],a),defaultValue:o,disabled:r,name:l,onValueChange:n,orientation:d,ref:E,value:R,...f,children:e}));h.displayName="RadioGroup";h.__docgenInfo={description:"",methods:[],displayName:"RadioGroup",props:{defaultValue:{required:!1,tsType:{name:"string"},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:""},name:{required:!1,tsType:{name:"string"},description:""},onValueChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(detail: RadioValueChangeDetail) => void",signature:{arguments:[{type:{name:"RadioValueChangeDetail"},name:"detail"}],return:{name:"void"}}},description:""},orientation:{required:!1,tsType:{name:"union",raw:"'horizontal' | 'vertical'",elements:[{name:"literal",value:"'horizontal'"},{name:"literal",value:"'vertical'"}]},description:""},value:{required:!1,tsType:{name:"string"},description:""}},composes:["ComponentPropsWithRef"]};const fa={"radio-group-label":"_radio-group-label_10mg9_2"},L=g.forwardRef(({children:e,className:a,...o},r)=>v.jsx(Ee,{className:H(fa["radio-group-label"],a),ref:r,...o,children:e}));L.displayName="RadioGroupLabel";L.__docgenInfo={description:"",methods:[],displayName:"RadioGroupLabel",composes:["ComponentPropsWithRef"]};const c=g.forwardRef(({children:e,className:a,...o},r)=>v.jsx(be,{className:a,ref:r,...o,children:e}));c.displayName="RadioLabel";c.__docgenInfo={description:"",methods:[],displayName:"RadioLabel",composes:["ComponentPropsWithRef"]};const ga={argTypes:$e(["defaultValue","name","onValueChange","value"]),component:h,subcomponents:{Radio:s,RadioControl:u,RadioGroupLabel:L,RadioLabel:c},title:"ODS Components/Form elements/RadioGroup"},T={render:e=>t.createElement(h,{disabled:e.disabled,orientation:e.orientation},t.createElement(s,{value:"html"},t.createElement(u,null),t.createElement(c,null,"HTML")),t.createElement(s,{value:"css"},t.createElement(u,null),t.createElement(c,null,"CSS")),t.createElement(s,{value:"js"},t.createElement(u,null),t.createElement(c,null,"JavaScript"))),argTypes:Me({disabled:{table:{category:M.general},control:{type:"boolean"}},orientation:{table:{category:M.general,type:{summary:["horizontal","vertical"]}},control:{type:"select"},options:["horizontal","vertical"]}})},G={tags:["!dev"],render:({})=>t.createElement(h,null,t.createElement(s,{value:"html"},t.createElement(u,null),t.createElement(c,null,"HTML")),t.createElement(s,{value:"css"},t.createElement(u,null),t.createElement(c,null,"CSS")),t.createElement(s,{value:"js"},t.createElement(u,null),t.createElement(c,null,"JavaScript")))},P={tags:["!dev"],render:({})=>t.createElement(h,{disabled:!0},t.createElement(L,null,"Disabled group:"),t.createElement(s,{value:"html"},t.createElement(u,null),t.createElement(c,null,"HTML")),t.createElement(s,{value:"css"},t.createElement(u,null),t.createElement(c,null,"CSS")),t.createElement(s,{value:"js"},t.createElement(u,null),t.createElement(c,null,"JavaScript")))},V={tags:["!dev"],render:({})=>t.createElement(h,null,t.createElement(L,null,"Disabled item:"),t.createElement(s,{value:"html"},t.createElement(u,null),t.createElement(c,null,"HTML")),t.createElement(s,{disabled:!0,value:"css"},t.createElement(u,null),t.createElement(c,null,"CSS")),t.createElement(s,{value:"js"},t.createElement(u,null),t.createElement(c,null,"JavaScript")))},_={tags:["!dev"],render:({})=>t.createElement(Le,null,t.createElement(h,null,t.createElement(L,null,"Pick a language:"),t.createElement(s,{value:"html"},t.createElement(u,null),t.createElement(c,null,"HTML")),t.createElement(s,{value:"css"},t.createElement(u,null),t.createElement(c,null,"CSS")),t.createElement(s,{value:"js"},t.createElement(u,null),t.createElement(c,null,"JavaScript"))))},k={tags:["!dev"],render:({})=>t.createElement(h,{orientation:"horizontal"},t.createElement(s,{value:"html"},t.createElement(u,null),t.createElement(c,null,"HTML")),t.createElement(s,{value:"css"},t.createElement(u,null),t.createElement(c,null,"CSS")),t.createElement(s,{value:"js"},t.createElement(u,null),t.createElement(c,null,"JavaScript")))},D={tags:["!dev"],parameters:{layout:"centered"},render:({})=>t.createElement(h,null,t.createElement(s,{value:"html"},t.createElement(u,null),t.createElement(c,null,"HTML")),t.createElement(s,{value:"css"},t.createElement(u,null),t.createElement(c,null,"CSS")),t.createElement(s,{value:"js"},t.createElement(u,null),t.createElement(c,null,"JavaScript")))};var U,B,W;T.parameters={...T.parameters,docs:{...(U=T.parameters)==null?void 0:U.docs,source:{originalSource:`{
  render: arg => <RadioGroup disabled={arg.disabled} orientation={arg.orientation}>
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
}`,...(W=(B=T.parameters)==null?void 0:B.docs)==null?void 0:W.source}}};var Y,K,Q;G.parameters={...G.parameters,docs:{...(Y=G.parameters)==null?void 0:Y.docs,source:{originalSource:`{
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
}`,...(Q=(K=G.parameters)==null?void 0:K.docs)==null?void 0:Q.source}}};var X,Z,ee;P.parameters={...P.parameters,docs:{...(X=P.parameters)==null?void 0:X.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: ({}) => <RadioGroup disabled>
      <RadioGroupLabel>
        Disabled group:
      </RadioGroupLabel>

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
}`,...(ee=(Z=P.parameters)==null?void 0:Z.docs)==null?void 0:ee.source}}};var ae,te,oe;V.parameters={...V.parameters,docs:{...(ae=V.parameters)==null?void 0:ae.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: ({}) => <RadioGroup>
      <RadioGroupLabel>
        Disabled item:
      </RadioGroupLabel>

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
}`,...(oe=(te=V.parameters)==null?void 0:te.docs)==null?void 0:oe.source}}};var re,ie,ne;_.parameters={..._.parameters,docs:{...(re=_.parameters)==null?void 0:re.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: ({}) => <FormField>
      <RadioGroup>
        <RadioGroupLabel>
          Pick a language:
        </RadioGroupLabel>

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
}`,...(ne=(ie=_.parameters)==null?void 0:ie.docs)==null?void 0:ne.source}}};var le,de,se;k.parameters={...k.parameters,docs:{...(le=k.parameters)==null?void 0:le.docs,source:{originalSource:`{
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
}`,...(se=(de=k.parameters)==null?void 0:de.docs)==null?void 0:se.source}}};var ue,ce,me;D.parameters={...D.parameters,docs:{...(ue=D.parameters)==null?void 0:ue.docs,source:{originalSource:`{
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
}`,...(me=(ce=D.parameters)==null?void 0:ce.docs)==null?void 0:me.source}}};const ba=["Demo","Default","DisabledGroup","DisabledItem","InFormField","Orientation","Overview"],Pa=Object.freeze(Object.defineProperty({__proto__:null,Default:G,Demo:T,DisabledGroup:P,DisabledItem:V,InFormField:_,Orientation:k,Overview:D,__namedExportsOrder:ba,default:ga},Symbol.toStringTag,{value:"Module"}));export{G as D,_ as I,D as O,Pa as R,P as a,V as b,k as c};
